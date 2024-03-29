import React from 'react'
class Post extends React.Component{
  state = {
    postName: '',
    postContent: '',
    submit: ''
  }
  change = e => {
    this.setState({
      [e.target.name]: e.target.value 
    })
  }
  saveData = e =>{
    e.preventDefault();
    console.log(this.state);
  }
    render(){
    return(
      <div className='container'>
        <h2 className='heading'>Cricket</h2>
        <hr />
        <p>
        Cricket is played with a bat and ball and involves two competing sides (teams) of 11 players.
        The field is oval with a rectangular area in the middle, known as the pitch, that is 22 yards 
        (20.12 metres) by 10 feet (3.04 metres) wide. Two sets of three sticks, called wickets, are 
        set in the ground at each end of the pitch. Across the top of each wicket lie horizontal pieces
        called bails. The sides take turns at batting and bowling (pitching); each turn is called an 
        “innings” (always plural). Sides have one or two innings each, depending on the prearranged 
        duration of the match, the object being to score the most runs. The bowlers, delivering the 
        ball with a straight arm, try to break (hit) the wicket with the ball so that the bails fall. 
        This is one of several ways that the batsman is dismissed, or put out. A bowler delivers six 
        balls at one wicket (thus completing an “over”), then a different player from his side bowls 
        six balls to the opposite wicket. The batting side defends its wicket.
        There are two batsman up at a time, and the batsman being bowl
        </p>
      </div>
    )
  }
}
export default Post;