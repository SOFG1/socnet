import React from "react";
import { statusValidator } from "../../../utilites/validators";
import s from "./Status.module.scss";

class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: props.status,
      editMode: false,
      error: false,
    };
    this.onChange = this.onChange.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }
  componentDidUpdate(oldProps, oldState) {
    if (oldProps.status !== this.props.status)
      this.setState({ status: this.props.status });
  }
  onChange(e) {
    this.setState({
       status: e.target.value,
       error: !statusValidator(e.target.value),
      });
  }
  toggleEdit() {
    if (!this.props.readOnly) this.setState({ editMode: !this.state.editMode });
  }
  onBlur(e) {
    if (statusValidator(e.target.value)) {
      this.setState({ status: this.props.status });
      this.props.changeStatus(e.target.value);
      this.toggleEdit();
    }
    if (!statusValidator(e.target.value)) {
      this.setState({error: true})
    }
  }
  render() {
    return (
      <div className={s.status}>
        {this.state.editMode ? (
          <input
            type="text"
            value={this.state.status}
            onChange={this.onChange}
            onBlur={this.onBlur}
            autoFocus
          />
        ) : (
          <p onDoubleClick={this.toggleEdit} className={s.status}>
            {this.state.status}
            {this.state.status.length === 0 && !this.props.readOnly && <span className={s.empty}>Click to set the status...</span>}
          </p>
        )}
        {this.state.error && <p className={s.error}>Status must container letters or numbers and not exceed 300 characters</p>}
      </div>
    );
  }
}

export default Status;
