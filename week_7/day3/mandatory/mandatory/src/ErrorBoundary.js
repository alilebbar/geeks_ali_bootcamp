import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // Stocke l'erreur dans le state
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.errorInfo) {
      // Affiche un message si une erreur est capturée
      return (
        <details style={{ whiteSpace: 'pre-wrap' }}>
          {this.state.error && this.state.error.toString()}
          <br />
          {this.state.errorInfo.componentStack}
        </details>
      );
    }

    // Si pas d'erreur, afficher les enfants normalement
    return this.props.children;
  }
}
