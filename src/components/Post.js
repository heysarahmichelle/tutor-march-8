import React, {Component} from 'react'
import axios from 'axios';

export default class Post extends Component {
    constructor(){
        super();
        this.state={
            editTime: false
        }
    }
componentDidMount(){
    this.setState({
        name: this.props.person.name,
        originalName: this.props.person.name
    });
}

onSubmit = () => {
    axios.put(`/api/posts/${this.props.person.id}`, {name: this.state.name}).then(res => {
        this.props.changeToPeopleArray(res.data);
    });
};

    render(){
        let name = this.state.name
    return (
        <div>
            {this.state.editTime ?
            this.props.person.name : 
            <input onChange={e => this.setState({
                name: e.target.value})} value={this.state.name}/>}

            <button onClick={this.onSubmit}>Submit edits for {this.state.name}</button>
        </div>
    )
    }
}
