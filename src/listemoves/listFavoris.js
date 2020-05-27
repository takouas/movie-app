import React, { Component } from 'react'


export default class Favoris extends Component {

    render() {




        return (
            <div className='box-favoris'>
                <h6 className='favoris-title'>Favoris</h6>
                <div className='container-box '>
                    {
                        this.props.tabFavoris.map(el => <div key={Math.random() * 10} className='box'>

                            <a className='star'> {el.rating}</a>
                            <img top width="100%" className='image-containre-box' src={el.image} />
                            <h6 className=''>{el.title}</h6>

                            <button className='button-des' onClick={() => this.props.delete(this.props.tabFavoris.indexOf(el))} ><i className="fa fa-trash"></i></button>
                        </div>)}
                </div>
            </div>
        )
    }
}
