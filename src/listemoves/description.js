import React, { Component } from 'react'

export default class Description extends Component {
    render() {

        let x = this.props.des.map(el => <div key={Math.random() * 10} className='description-box' >

            <h6 className='title-description'>Description</h6>
            <div className='box-des'>

                <img top width="100%" className='image-desrip' src={el.image} />
                <span>
                    <a className='star' style={{ color: 'yellow' }} > {el.rating}</a><br />
                    <h6 className='description-p' >{el.title}</h6><br />
                    <p className='description-p'> {el.description}</p></span>

            </div>
            <center>
                <button className='button-des'>watch </button>
            </center>
        </div>)


        return (
            <div >


                <p>  {x}</p>



            </div>
        )
    }
}


