import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Auxiliary from '../Auxiliary/Auxiliary';

const withErrorHandler = (WrappedComponent, axios) => {

    return class extends Component {

        state = {
            error: null
        };

        componentDidMount() {

            axios.interceptors.request.use(request => {
                this.setState({ error: null });
                return request;
            });

            axios.interceptors.response.use(response => response, error => {
                this.setState({ error: error });
            });
        }

        closeModelHandler = () => {
            this.setState({ error: null });
        };

        render() {
            return (
                <Auxiliary>
                    <Modal show={this.state.error}
                        modalClosed={this.closeModelHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props}></WrappedComponent>
                </Auxiliary>
            );
        }
    }
}

export default withErrorHandler;