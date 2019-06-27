import React from 'react';
class Show extends React.Component{
  constructor(props){
    super(props);

  }
    render(){
        const data = JSON.parse(localStorage.getItem('state'));
        const element = data.map((item,index) =>{
          return(
            <div className="container" key={index}>
              <table className="table-striped">
                <tbody>
                  <tr>
                    <td>{item.comment}</td>
                  </tr>
                </tbody>
              </table>
            </div>
     )
    });
    return( 
      <div>
        <label>{element}</label>
      </div> 
    )
  }
}
export default Show;