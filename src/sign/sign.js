
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
export default class FormPage extends React.Component {
    state = {
        modal: false,
        email: '',
        password: '',
        name: '',
        confirmationPassword: ''
    }

    toggle = () => this.setState({ modal: !this.state.modal });
    emailsave = (e) => {
        let mailformat = '.+@(gmail\.com|yahoo\.fr)'
        if (e.target.value.match(mailformat))
            this.state.email = e.target.value
    }
    addLocalStorge = (e) => {

        e.preventDefault();
        if (this.state.password == this.state.confirmationPassword && this.state.password != '' && this.state.email != '') {

            localStorage.setItem('email', this.state.email);
            localStorage.setItem('password', this.state.password);
            localStorage.setItem('name', this.state.name);

            alert('welcome')
        } else alert('All the fields must be filled correctly !')


    }
    handelChangeLog = (e) => {
        this.state.email = e.target.value

    }
    handelChangeLog1 = (e) => {
        this.state.password = e.target.value
    }


    authentification = (e) => {
        e.preventDefault();
        if (this.state.email === localStorage.getItem("email") && this.state.password === localStorage.getItem("password")) {
            alert("welcome")
        }
        else if (localStorage.getItem("email") == '' && localStorage.getItem("password") == '') {
            alert("All the fields must be filled correctly !");
        }
    }

    render() {

        return (
            <center>
                <Button style={{ backgroundColor: " hsl(336, 91%, 31%)" }} onClick={this.toggle}> sign in/sign up</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} >
                    <ModalBody className='modal-box-sign'>
                        <div className='box-sigg-in'>
                            <form>
                                <h3>Sign Up</h3>

                                <div className="form-group">
                                    <label> name</label>
                                    <input id='name' type="text" placeholder=" name" className="form-control" required
                                        onChange={e => this.state.name = e.target.value} />
                                </div>


                                <div className="form-group">
                                    <label>Email address</label>
                                    <input id='email' type="email" className
                                        placeholder="Enter email" className="form-control" required
                                        onChange={this.emailsave} />
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input id='password' type="password" placeholder="Enter password" maxLength="6" className="form-control" required
                                        onChange={e => this.state.password = e.target.value} />
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input id='confirmationPassword' type="password" placeholder="Confirmer password" maxLength="6" className="form-control" required
                                        onChange={e => this.state.confirmationPassword = e.target.value} />
                                </div>

                                <button type="submit" className="btn btn-primary btn-block" onClick={this.addLocalStorge}>Sign Up</button>


                                <p className="forgot-password text-right">
                                    {/* Already registered <a href="#">sign in?</a> */}
                                </p>
                            </form>

                            <form>
                                <h3>Sign In</h3>

                                <div className="form-group">
                                    <label>Email address</label>
                                    <input id='emailSave' type="email" pattern=".+@(gmail\.com|yahoo\.fr)" className="form-control" placeholder="Enter email" required onChange={this.handelChangeLog} />
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input id='passwordSave' type="password" maxLength="6" className="form-control" placeholder="Enter password" required onChange={this.handelChangeLog1} />
                                </div>

                                <button type="submit" className="btn btn-primary btn-block" onClick={this.authentification}> Submit </button>

                            </form>
                        </div >

                    </ModalBody>

                </Modal>
            </center>
        );
    }
}



