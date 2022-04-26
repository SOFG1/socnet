import React from "react";
import s from './withErrorBoundary.module.scss'

const withErrorBoundary = (Component) => {
  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
    componentDidCatch(error, errorInfo) {
      console.log(error, errorInfo);
    }
    render() {
      if (this.state.hasError) {
        return <h1 className={s.error}>An error occured !!!</h1>;
      }

      return <Component {...this.props} />;
    }
  }
  return ErrorBoundary
};

export default withErrorBoundary