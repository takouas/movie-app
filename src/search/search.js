import React from 'react'

export default class Search extends React.Component {
    state={
        color:'',
        color2:'',  color3:'',  color4:'',  color5:'',
    }
    star1=(e)=>{
      this.setState({color:'yellow',color2:'gray',color3:'gray',color4:'gray',color5:'gray'})       
    }
    star2=(e)=>{
        this.setState({color2:'yellow',color:'yellow',color3:'gray',color4:'gray',color5:'gray'})
    }
    star3=(e)=>{
        this.setState({color3:'yellow',color2:'yellow',color:'yellow',color4:'gray',color5:'gray'})
    }
    star4=(e)=>{
        this.setState({color4:'yellow',color3:'yellow',color2:'yellow',color:'yellow',color5:'gray'})
        }
    star5=(e)=>{
        this.setState({color5:'yellow',color4:'yellow',color3:'yellow',color2:'yellow',color:'yellow'}) 
    }
    render() {
    
        return (
            <div className='box-search-type'>
                <span className='box-search-name'>  <i className="fa fa-search"></i>
                    <input className='search-style ' placeholder='search by name' onChange={this.props.SearchBar} /></span>

                <span className='search-style-rate '>search by rate
                
                  <p style={{fontSize:'30px'}}> <span  style={{color:'yellow'}}  onClick={() => { this.star1(); this.props.searchRating(1) }} id='1'  >★</span>
                 
                   <span  style={{color:this.state.color2}}   onClick={() => { this.star2(); this.props.searchRating(2) }}  id='2'  >★</span>
                   <span  style={{color:this.state.color3}} onClick={() => { this.star3(); this.props.searchRating(3) }}  id='3' >★</span>
                   <span  style={{color:this.state.color4}} onClick={() => { this.star4(); this.props.searchRating(4) }}   id='4' >★</span>
                   <span  style={{color:this.state.color5}}onClick={() => { this.star5(); this.props.searchRating(5) }}   id='5' >★</span>
                   </p>
                </span>
                
               

            </div>
        )
    }


}
