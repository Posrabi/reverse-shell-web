import React,{Component} from "react"

export class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            commands:"",
            comments:""
        }
    }
    handleChange = (event) => {
        this.setState({
            commands: event.target.value
        })
    }
    handleCommentChange = (event) => {
        this.setState({
            comments:event.target.value
        })
    }
    render() {
        return (
            <form>
                <div>
                    <label>Send Commands to the client</label>
                    <input type = "text" value={this.state.commands} onChange={this.handleChange}/>
                </div>
                <div>
                    <label>Status</label>
                    <p values={this.state.comments} onChange={this.handleCommentChange}></p>
                </div>
            </form>
    )}
}
export default Form