import React, { Component, ReactNode } from 'react';
import InternalErrorPage from '../../pages/internal-error-page/InternalErrorPage';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught in ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <InternalErrorPage />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
