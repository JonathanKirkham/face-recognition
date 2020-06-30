import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';

const app = new Clarifai.App({
  apiKey: 'fb51a288fb4d41938a6124ffcb93e2ed'
});

const particleOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      }
    },
    size: {
      value: 10,
      random: true
    },
    shape: {
      type: ['circle', 'triangle', 'polygon', 'edge'],
      stroke: {
        width: 0,
      }
    },
    color: {
      value: '#fff'
    }
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
    }
  }

  calcFaceLocation = (data) => {

  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });

  }

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input })
    console.log('Detecting...')
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input)
      .then(response => this.calcFaceLocation(response)
        .catch(err => console.log(err))
      );
  }


  render() {
    return (
      <div className='App'>
        <Particles params={particleOptions} className='particles' />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit} />
        <FaceRecognition imageUrl={this.state.imageUrl} />

      </div>

    );
  }
}

export default App;
