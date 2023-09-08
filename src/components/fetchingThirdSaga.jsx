import { Component } from "react";
import Gallery from "./Gallery";

class FetchingThirdSaga extends Component {
    state= {
        thirdMovie: []
    }

    
    fetchThirdSaga = async () => {

        const URL=  "http://www.omdbapi.com/?s=indiana-jones&type=movie&apikey=d6ef2c43"
        try {
            const resp = await fetch(URL)
        if (resp.ok){
            console.log("Fetched")
            const data = await resp.json()
            this.setState({thirdMovie: data.Search})
            
            console.log(this.state.thirdMovie)
        }    else {
            alert("fetch not possible")
        }} catch(err) {
            console.log(err);
        }
        
    }
    componentDidMount = () => {
        this.fetchThirdSaga()
    }

    render() {
        return(
            <Gallery arr={this.state.thirdMovie}/>
        )
    }

} export default FetchingThirdSaga