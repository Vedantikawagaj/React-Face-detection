import React, { Component } from 'react'
import Navigation from './Components/Navigation/Navigation'
import './App.css';
import Clarifai from 'clarifai'; 
import Logo from './Components/Logo/Logo'
import tachyons from 'tachyons';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Particles from 'react-particles-js';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition'
import SignIn from './Components/SignIn/SignIn';
import Register from './Components/Register/Register'
const app= new Clarifai.App({
  apiKey: '939dec058484423984e86b76a45d7e0b'
})
const options = {
    particles: {
      number: {
        values: 300,
        density: {
          enable: true,
          value_area: 950
        }
      },
      color: {value: '#ffffff'},

    }
}

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       input: '',
       imageUrl: '',
       box: {},
       route: 'signin',
       isSignedIn: false,
    }
  }

  faceBoxParam = (resp) =>{
    const param = resp.outputs[0].data.regions[0].region_info.bounding_box
    const imageDim = document.getElementById('inputImg')
    const width = Number(imageDim.width)
    const height = Number(imageDim.height)
    console.log(width,height)
    return {
      leftCol: param.left_col*width,
      topRow: param.top_row*height,
      rightCol: width - (param.right_col*width),
      bottomRow: height - (param.bottom_row*height),
    }
  }

  drawBox=(box) => {
    console.log(box)
    this.setState({box: box})
    
  }
  onInputChanged = (event) =>{
    this.setState({
      input: event.target.value,
     })
    console.log(`value= ${event.target.value}`)
  }
  onSubmitPressed = () => {
    console.log('click')
    this.setState({
      imageUrl: this.state.input,
    })
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then((response) => this.drawBox(this.faceBoxParam(response))
    .catch((err) => console.log(err))
  
    ); 
  }

  onRouteChange =(Route)=>{
    if(Route==='signin'){
     this.setState({
       isSignedIn: false
     })
    }
    else if(Route==='home'){
      this.setState({
        isSignedIn: true
      })
    }
    this.setState({
      route: Route
    })
  }
  
  
  render() {
    
    return (
      <div>
          <Particles className="particles"
            partvalues = {options}
            />
          <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
          {this.state.route==='signin'?
          <SignIn onRouteChange={this.onRouteChange}/>:
            (
              this.state.route==='home'?
              <div className="App">
                <Logo />
                <ImageLinkForm onInputChanged={this.onInputChanged} onSubmitPressed={this.onSubmitPressed}/>
                <FaceRecognition imgUrl={this.state.imageUrl} box={this.state.box}/>
              </div>
              :<Register onRouteChange={this.onRouteChange} />
              )
          }
            
          
      </div>
      
    )
  }
}

export default App



