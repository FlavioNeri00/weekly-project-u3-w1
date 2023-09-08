import { Component } from "react";
import Gallery from "./Gallery";

class FetchingFirstSaga extends Component {

    state = {
        movies: [],
        isLoading: true,
        hasError: false
    }

    fetchFirstSaga = async () => {

        const URL= "http://www.omdbapi.com/?s=lord-of-the-rings&type=movie&apikey=d6ef2c43"
        try {
            const resp = await fetch(URL)
        if (resp.ok){
            console.log("Fetched")
            const data = await resp.json()
            this.setState({movies: data.Search})
            
            console.log(this.state.movies)
        }    else {
            alert("fetch not possible")
        }} catch(err) {
            console.log(err);
        } finally {
            this.setState({isLoading: false})
        }
        
    }
    componentDidMount = () => {
        this.fetchFirstSaga()
    }


    render() {
        return(
           
               
                <Gallery arr={this.state.movies}/>
        )
        
    }
}

export default FetchingFirstSaga