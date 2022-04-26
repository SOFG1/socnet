import React from "react";
import s from "./withErrorBoundary.module.scss";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return <h1 className={s.error}>An error occured ...</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
