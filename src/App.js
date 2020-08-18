import React,{Component} from 'react';
import Navigation from "./components/Navigation/Navigation";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Logo from "./components/Logo/Logo";
import ImageLink from "./components/ImageLink/ImageLink";
import './App.css';
import Rank from "./components/Rank/Rank";
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
const particlesOption = {
                particles: {
                  number: {
                    value:40,
                    density: {
                      enable: true,
                      color: "#222",
                      value_area: 500
                    }
                  }
                }
              }   

const app = new Clarifai.App({
     apiKey: '5e93e04d1169400e926f01ae6d7be943'
});

class App extends Component  {
  constructor(){
    super();
    this.state = {
      input: '',
      imagelink: ''
    }
  }

  getUrl = (event)=>{
    this.setState({input:event.target.value})
  }

  onButtonSubmit = (event)=>{
        this.setState({imagelink:this.state.input})
        app.models
        .predict(Clarifai.FACE_DETECT_MODEL,"https://samples.clarifai.com/face-det.jpg")
        .then(
        function(response) {
          console.log(response);
        },
        function(err) {
          // there was an error
        }
      );
  }
 
  render(){
    return (
      <div className="App">
        <Particles className = "particles"
              params={particlesOption}
            />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLink onValueChange = {this.getUrl} onSubmit = {this.onButtonSubmit} />
        <FaceRecognition lin = {this.state.imagelink}/>
      </div>
  );
}
}

export default App;
