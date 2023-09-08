import { Component } from "react";
import Gallery from "./Gallery";
import { Spinner, Alert } from "react-bootstrap";
class FetchingSecondSaga extends Component {
    state = {
        secondMovie: [],
        isLoading: true,
        hasError: false
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
            this.setState({hasError: true})
        }} catch(err) {
            console.log(err);
        } finally {
            this.setState({isLoading: false})
        }
        
    }
    componentDidMount = () => {
        this.fetchSecondSaga()
    }

    render() {
        return (
            <div>
                {this.state.hasError && <Alert variant="danger">Riscontrato problema con la fetch</Alert>}
                {this.state.isLoading && <Spinner animation="border" variant="danger"  />}
                <Gallery arr={this.state.secondMovie}/>
            </div>
        )
    }
}

export default FetchingSecondSaga