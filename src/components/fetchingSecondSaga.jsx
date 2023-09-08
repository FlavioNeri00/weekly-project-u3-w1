import { Component } from "react";
import Gallery from "./Gallery";

class FetchingSecondSaga extends Component {
    state = {
        secondMovie: []
    }

    fetchSecondSaga = async () => {

        const URL=  "http://www.omdbapi.com/?s=star-wars&type=movie&apikey=d6ef2c43"
        try {
            const resp = await fetch(URL)
        if (resp.ok){
            console.log("Fetched")
            const data = await resp.json()
            this.setState({secondMovie: data.Search})
            
            console.log(this.state.secondMovie)
        }    else {
            alert("fetch not possible")
        }} catch(err) {
            console.log(err);
        }
        
    }
    componentDidMount = () => {
        this.fetchSecondSaga()
    }

    render() {
        return (
            <Gallery arr={this.state.secondMovie}/>
        )
    }
}

export default FetchingSecondSaga