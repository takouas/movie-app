import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
export default class Add extends React.Component {
    state = {

        modal: false
    }

    toggle = () => this.setState({ modal: !this.state.modal });
    render() {
        return (
            <center>
                <Button className='button-add-film' onClick={this.toggle}><i class="fa fa-plus "></i></Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className='modalAddMovieCard'>
                    <ModalBody className='modalAddMovieCard'>
                        <center style={{ color: '#ec0250 ' }}> Add movie </center>
                        <div class="input-group mb-3">

                            <input type="text" class="form-control " name='title' placeholder="title" aria-describedby="basic-addon1" required onChange={(e) => this.props.handelchange(e)} ></input>
                        </div>
                        <div class="input-group mb-3">

                            <input type="text" class="form-control " name='image' placeholder="url image" aria-describedby="basic-addon1" required onChange={(e) => this.props.handelchange(e)} ></input>
                        </div>
                        <div class="input-group mb-3">

                            <input type="text" class="form-control " name='description' placeholder=" description" aria-describedby="basic-addon1" required onChange={(e) => this.props.handelchange(e)}></input>
                        </div>
                        <div class="input-group mb-3">

                            <input type="text" class="form-control " name='rating' placeholder="rating" aria-describedby="basic-addon1" required onChange={(e) => this.props.handelchange(e)}  ></input>
                        </div>

                        <div className='btnModalBox'>
                            <Button color="success" className='btnModalCheck' onClick={() => { this.props.addMovie(this.movie); this.toggle() }}><i class="fa fa-check"></i></Button>



                            <Button color="danger" className='btnModaldanger' onClick={this.toggle}><i class="fa fa-times"></i></Button>
                        </div>
                    </ModalBody>

                </Modal>
            </center>
        );
    }
}

