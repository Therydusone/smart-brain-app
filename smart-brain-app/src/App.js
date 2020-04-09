import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';

const particlesOptions = {
    particles: {
      number: { 
        value: 200, 
        density: { 
          enable: true, 
          value_area: 1000, 
        }, 
      line_linked: {
        shadow: {
          enable: true,
          color: "#3CA9D1",
          blur: 5
        }
      }
    }
  }
}
class App extends Component {
  constructor() {
    super();
    this.state= {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event)
  }

  onSubmit= () => {
    console.log('click')
  }
  render() {
  return (
    <div className="App">
    <Particles 
      className="particles" 
      params={particlesOptions}
    />
    <Navigation />
    <Logo />
    <Rank />
    <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onSubmit}/>
    </div>
  );
}}
export default App;
