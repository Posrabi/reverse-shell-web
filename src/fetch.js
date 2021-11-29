import React from "react";
import axios from "axios";

export default class FetchData extends React.Component {
    
    state = {
        loading: true,
        status: null
    }
    async componentDidMount() {
        // const url = "http://127.0.0.1:5000/";
        // const response = await fetch(url)
        // const data = await response.json();
        axios.get("http://127.0.0.1:5000/")
            .then (response => {
                console.log(response)
                this.setState({status: response.status, loading: false})
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {

        if (this.state.loading) {
            return <div>loading...</div>
        }
        if (!this.state.status) {
            return <div>Did not get a status</div>
        }
        return (
        <div>
            {
             <div>
                 <div>
                     {this.state.status}
                 </div>
                </div>
                 }
        </div>
        )}
}