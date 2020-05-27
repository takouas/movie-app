import React from 'react'
import FormPage from '../sign/sign'
import Add from './addFilm'
import { Link } from 'react-router-dom';
import Favoris from './listFavoris';
import Description from './description'
import Listmovie from './listmovie'
import { BrowserRouter, Route } from 'react-router-dom';
import Search from '../search/search'
let movie = [
    { id: 0, title: 'Avatar', image: 'https://img-4.linternaute.com/sh7w3Ru857R9xVcBYTFhbVicBRs=/1240x/smart/6e6ceb7460c14a43a54f9b87b3a56a5d/ccmcms-linternaute/11280954.jpg', description: "Avatar est un film de science-fiction américain réalisé par James Cameron, sorti en 2009. Il s'agit du premier film de la franchise cinématographique Avatar.", rating: '★' },
    { id: 1, title: "Don't Breathe", image: 'https://fr.web.img4.acsta.net/pictures/16/08/03/17/07/185379.jpg', description: " Pour échapper à la violence de sa mère et sauver sa jeune soeur d'une existence sans avenir, Rocky est prête à tout.  ", rating: '★★★★★' },
    { id: 2, title: 'Joker', image: 'https://fr.web.img6.acsta.net/pictures/19/09/03/12/02/4765874.jpg', description: "Dans les années 1980, à Gotham City, Arthur Fleck, un comédien de stand-up raté est agressé alors qu'il ère dans les rues de la ville déguisé en clown. ", rating: '★★' },
    { id: 3, title: 'Baby Boss', image: 'https://fanart.tv/fanart/movies/295693/movieposter/the-boss-baby-5d80ee0e6561d.jpg', description: "Un garçon de sept ans, nommé Tim, voit arriver son nouveau petit frère (Baby Boss), qui menace son équilibre familial. ", rating: '★★★' },
    { id: 4, title: 'Hunger Games', image: 'http://fr.web.img5.acsta.net/r_1920_1080/medias/nmedia/18/85/51/91/20018884.jpg', description: "Chaque année, dans les ruines de ce qui était autrefois l'Amérique du Nord    ", rating: '★★★★' },
    { id: 5, title: 'Harry Potter', image: 'http://fr.web.img2.acsta.net/r_1920_1080/pictures/18/07/02/17/25/3643090.jpg', description: "Orphelin, Harry Potter a été recueilli à contrecœur par son oncle Vernon et sa tante Pétunia, aussi cruels que mesquins, qui n'hésitent pas à le faire ", rating: '★★★★★' }
]
let tab = { title: '', image: '', description: '', rating: '' }
let tabFavoris = []
let d = []

export default class Cardlist extends React.Component {
    state = {
        movieCopy: movie,
        tabCopy: tab,
        testFavorisTab: [],
        des: []
    }

    handelchange = (e) => {

        let change = this.state.tabCopy = ({ ...this.state.tabCopy, [e.target.name]: e.target.value })
        this.setState({ tabCopy: change })

    }


    addMovie = () => {

        movie.unshift(this.state.tabCopy)
        this.setState({ movieCopy: movie })

    }
    addToFavoris = (index) => {
        if (!this.state.testFavorisTab.includes(index)) {
            tabFavoris.push(index)
            this.setState({ testFavorisTab: tabFavoris })

        }

    }
    description = (index) => {

        d.splice(0, 1, index)
        this.setState({ des: d })



    }

    delete = (index) => {

        this.state.movieCopy.splice(index, 1)
        this.setState({ movieCopy: this.state.movieCopy })

    };
    supprime = (index) => {

        this.state.testFavorisTab.splice(index, 1)
        this.setState({ testFavorisTab: this.state.testFavorisTab })

    };

    SearchBar = (e) => {
        let list = movie
        let input = e.target.value
        list = list.filter(el => el.title.includes(input))
        this.setState({ movieCopy: list })

        if (input === '') { this.setState({ movieCopy: movie }) }

    }

    searchRating = (e) => {

        let result = movie

        result = result.filter(el => el.rating.length >= e)
        { this.setState({ movieCopy: result }) }

    }


    editing = (e) => {


    }


    render() {
        return (
            <div>



                <BrowserRouter>

                    <span className='navbar-movie'>
                        <span className='navbar-movie-link'>

                            <h2 className='title-navbar'>   <i className="fa fa-film"></i> movie </h2>
                            <Link to='/'> Home </Link>
                            <Link to='/favoris'> Favorite </Link>

                        </span>
                        <div className='navbar-style-search'><Search SearchBar={this.SearchBar} searchRating={this.searchRating} /></div>
                        <FormPage /></span>

                    <Route exact path='/' component={() => <Listmovie movieCopy={this.state.movieCopy} addToFavoris={this.addToFavoris} description={this.description} editing={this.editing} delete={this.delete} addMovie={this.addMovie} handelchange={this.handelchange} />} />

                    <Route path='/description' component={() => <Description des={this.state.des} />} />


                    <Route exact path='/favoris' component={() => <Favoris tabFavoris={this.state.testFavorisTab} delete={this.supprime} />} />
                </BrowserRouter>








            </div>
        )
    }

}




