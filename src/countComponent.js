import React from "react";
import photo from './img.jpg'

class CountComponent extends React.Component {
  constructor() {
    console.log("constructor()");
    super();
    this.state = {
      counter: 0,
      timer: 0,
      intervall: null
    };
  }

  componentDidMount() {
    console.log("Component did Mount()");
    // console.log(this.state.isVisible);
    // console.log(this.state.counter);
    this.setState({
      intervall: setInterval(
        () => this.setState({ timer: this.state.timer + 1 }),
        1000
      )
    });
  }

  componentDidUpdate() {
    console.log("Component did Update() ");
    // console.log(this.state.isVisible);
    // console.log(this.state.counter);
  }

  componentWillUnmount() {
    console.log("Component will unMount()");
    clearInterval(this.state.intervall);
  }

   render() {
    console.log("render()");
    return (
      <div>
        <h1 className="style"> profile</h1>
         < img Src={photo} name ="img"  width="300" height="300"></img>
         <div className="form"> 
         <h1> Chemingui Sondes </h1>
        <ul> 
            <li>optimistic </li>
            <li> Sport&cooking </li>
            <li><a href="#"> sondes84chmingui@gmail.com </a></li>
              </ul> 
              <p> Chemistry docteur </p>
              </div>
        <p>{this.state.timer}</p>
      </div>
    );
  }
}

export default CountComponent;
