import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './components/Post'
import Comments from './components/comments'
import Show from './components/Show'

class App extends React.Component{
  constructor(props){
    super(props);
    this.data = [];
  }
  // componentWillMount(){
  //   this.data = JSON.parse(localStorage.getItem('state'));
  // }
  render(){
  return (
    <div className="App">
      <Post />
      <Comments />
      <Show />
    </div>
  );
}
}
export default App;
