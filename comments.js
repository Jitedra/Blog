import React from 'react';
//import Post from '../components/Post'
class Comments extends React.Component{
  state = {
    comment:''
  }
  handleSubmit(){
    let fetch = JSON.parse(localStorage.getItem('state'));
    let array = [];
    if(fetch != null){
      fetch.map(function (v){
        array.push(v);
      });
    }
    array.push(this.state); 
    localStorage.setItem('state', JSON.stringify(array));
   
  }
  change = e => {
    this.setState({
      [e.target.name]: e.target.value 
    })
  }

  render(){
    return(
      <div className='container-comments'>
        <form onSubmit={e => this.handleSubmit(e)}>
        <input name='comment' className="form-control" placeholder="Comment..." onChange={e => this.change(e)} />
        <button>Done</button>
        </form>
        </div>
    );
  }
}

export default Comments;