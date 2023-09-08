import { Component } from "react";
import Gallery from "./Gallery";
import { Spinner, Alert } from "react-bootstrap";

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
           this.setState({hasError: true})
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
           
            <div>
                 {this.state.hasError && <Alert variant="danger">Riscontrato problema con la</Alert>}
                {this.state.isLoading && <Spinner animation="border" variant="danger"  />}
                    <Gallery arr={this.state.movies}/>
            </div>
        )
        
    }
}

export default FetchingFirstSaga