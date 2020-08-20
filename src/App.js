import React,{Component} from 'react';
import Navigation from "./components/Navigation/Navigation";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";
import Logo from "./components/Logo/Logo";
import ImageLink from "./components/ImageLink/ImageLink";
import './App.css';
import Rank from "./components/Rank/Rank";
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
const particlesOption = {
                particles: {
                  number: {
                    value:80,
                    density: {
                      enable: true,
                      color: "#222",
                      value_area: 500
                    }
                  }
                }
              }   

const app = new Clarifai.App({
     apiKey: ''
});

class App extends Component  {
  constructor(){
    super();
    this.state = {
      input: '',
      imagelink: '',
      box:{},
      route:'signin',
      isSignedIn:false
    }
  }

  getUrl = (event)=>{
    this.setState({input:event.target.value})
  }

  calculateBounding=(data)=>{
    // console.log(data);
    const boundings = data.outputs[0].data.regions[0].region_info.bounding_box;
    const imag = document.getElementById('image');
    // console.log(imag.id);
    const width = Number(imag.width);
    const height = Number(imag.height);
    return {

      bottom_Row : boundings.bottom_row * height,
      left_Col : boundings.left_col * width,
      right_Col : width-(boundings.right_col * width),
      top_Row : height-(boundings.top_row * height)

    }
  }

  setBoxValue = (boxdata)=>{
    this.setState({box:boxdata});
  }

  onRouteChange = (event)=>{
    (event==='home')?this.setState({isSignedIn:true}):this.setState({isSignedIn:false})
    this.setState({route:event});
  }

  onButtonSubmit = ()=>{
        this.setState({imagelink:this.state.input});
        app.models
        .predict(Clarifai.FACE_DETECT_MODEL,this.state.input)
        .then(response => this.setBoxValue(this.calculateBounding(response)))
        .catch(err => console.log(err))
  }
 
  render(){
    const {box,isSignedIn,imagelink,route} = this.state
    return (
      <div className="App">
          <Particles className = "particles"
                params={particlesOption}
          />
          <Navigation isSignedIn = {isSignedIn} onRouteChange = {this.onRouteChange} />

         {
          route === "home"?
          <div>
            <Logo />
            <Rank />
            <ImageLink onValueChange = {this.getUrl} onSubmit = {this.onButtonSubmit} />
            <FaceRecognition box = {box} lin = {imagelink}/>
          </div>
          :
          (
            route === 'signin'?
            <SignIn onRouteChange = {this.onRouteChange}/>
            :
            <Register onRouteChange = {this.onRouteChange}/>           
          )
        }

      </div>
  );
}
}

export default App;
