import { Component } from "react";
import Gallery from "./Gallery";
import { Spinner, Alert } from "react-bootstrap";

class FetchingThirdSaga extends Component {
    state= {
        thirdMovie: [],
        isLoading: true,
        hasError: false
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
            this.setState({hasError: true})
        } finally {
            this.setState({isLoading: false})
        }
        
    }
    componentDidMount = () => {
        this.fetchThirdSaga()
    }

    render() {
        return(
           <div> 
             {this.state.hasError && <Alert variant="danger">Riscontrato problema con la fetch</Alert>}
             {this.state.isLoading && <Spinner animation="border" variant="danger"  />}
            <Gallery arr={this.state.thirdMovie}/></div>

)
    }

} export default FetchingThirdSaga