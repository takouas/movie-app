import React, { Component } from 'react'
import Add from './addFilm'

import { Link } from 'react-router-dom';
export default class Listmovie extends Component {
    render() {

        return (
            <div>

                <Add addMovie={this.props.addMovie} handelchange={this.props.handelchange} />
                <div className='container-box '>

                    {this.props.movieCopy.map(el =>
                        <div key={Math.random() * 10} className='box'>
                            <center>
                                <p className='star' style={{ color: 'yellow', fontSize: '20px' }}> {el.rating}</p>
                            </center>
                            <img width="100%" className='image-containre-box' src={el.image} />
                            <center>
                                <h6 className=''>{el.title}</h6>


                                <button className='button-des2' onClick={() => this.props.addToFavoris(el)}><i className="fa fa-heart"></i></button>
                                <Link to='/description'>
                                    <button className='button-des' onClick={() => this.props.description(el)}><i className="fa fa-eye"></i></button>

                                </Link>

                                <button className='button-des' onClick={this.props.editing(el)}><i className="fa fa-edit"></i></button>



                                <button className='button-des' onClick={() => this.props.delete(this.props.movieCopy.indexOf(el))}><i className="fa fa-trash"></i></button>

                            </center>

                        </div>

                    )}







                </div>
            </div>
        )
    }
}
