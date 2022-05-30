import React from "react";
import s from "./withErrorBoundary.module.scss";

type StateType = {
  hasError: boolean
}

type PropsType = {
  children: any
}

class ErrorBoundary extends React.Component<PropsType, StateType> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error:any) {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return <h1 className={s.error}>An error occured ... Reload the page, please</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
