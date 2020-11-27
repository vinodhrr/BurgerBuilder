import React, {Component} from 'react'
import Modal from '../../components/UI/Modal/Modal'
import Auxillary from '../Auxillary'

const withErrorHandler = (WrappedComponent, axios) => {
    return(
        class extends Component{
            state = {
                error : null
            }
            componentWillMount(){
                this.reqInterceptor = axios.interceptors.request.use(req => req, error => {
                    this.setState({error : error})
                });
                this.resInterceptor = axios.interceptors.response.use(response => response, error => {
                    this.setState({error : error})
                });
            }

            componentWillUnmount(){
                axios.interceptors.request.eject(this.reqInterceptor);
                axios.interceptors.response.eject(this.resInterceptor);
            }
            errorHandler = () => {
                this.setState({error : null});
            }

            render(){
                return(
                    <Auxillary>
                        <Modal
                        show={this.state.error}
                        modalClosed={this.errorHandler}>
                            {this.state.error ? this.state.error.message : null}
                        </Modal>
                        <WrappedComponent {...this.props} />
                    </Auxillary>
                )
            }
        }
    );
}

export default withErrorHandler