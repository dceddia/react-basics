import React, { Component } from 'react';
import Palette from './Palette';
import './App.css';

// Colors from colourlovers.com
const colorStrings = [
  "#322938,#89A194,#CFC89A,#CC883A,#A14016,#322938,#89A194,#CFC89A",
  "#11644D,#A0B046,#F2C94E,#F78145,#F24E4E,#11644D,#A0B046,#F2C94E",
  "#161616,#C94D65,#E7C049,#92B35A,#1F6764,#161616,#C94D65,#E7C049"
];

// Create arrays of colors
const palettes = colorStrings.map(str => str.split(','));

class App extends Component {
  render() {
    return (
      // Outside JSX, comments work normally...
      <div className="App">
        <h1>Colors</h1>
        {/* comments in JSX need to be inside braces */}
        {
        // Any JS expression can go inside braces
        // Here it's mapping each palette to a Palette component
        // Notice the "key" prop. This is required when mapping.
        }
        {palettes.map((colors, i) =>
          <Palette key={i} colors={colors} />
        )}
      </div>
    );
  }
}

export default App;
