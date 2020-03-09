import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import Post from './components/Post'

class App extends Component{
  constructor(){
    super();
    this.state={
      people: []
    }
  }
componentDidMount() {
  axios.get("/api/posts").then(res => {
    console.log(res);
    this.setState({
      people: res.data
    });
  });
}

changeToPeopleArray = (arr) => {
  this.setState({
    people: arr
  })
}

  render(){
    let peopleMapped = this.state.people.map(person => {
      return <Post key = {person.id } person = {person} changeToPeopleArray= {this.changeToPeopleArray}/>
    })
    return(
      <div>
        {peopleMapped}
      </div>
    )
  }
}

export default App;
