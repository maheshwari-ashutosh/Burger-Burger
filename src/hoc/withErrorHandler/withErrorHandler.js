import React from 'react';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WebComponent, axios) => {

  return class extends React.Component {

    state = {
      error: null,
    }

    interceptor = axios.interceptors.response.use(res => res, error => {
      console.log('inside errorHandler');
      this.setState({
        error,
      });
      return Promise.reject(error);
    });
    
    componentWillUnmount() {
      axios.interceptors.response.eject(this.interceptor);
    }

    errorConfirmedHandler() {
      this.setState({
        error: null
      });
    }

    render() {
      return (
      <>
        <Modal visible={!!this.state.error} dismiss={this.errorConfirmedHandler.bind(this)}>
          <h1>{this.state.error ? this.state.error.message : null}</h1>
        </Modal>
        <WebComponent {...this.props} />
      </>
      )
    }
  }
}

export default withErrorHandler;