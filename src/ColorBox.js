import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    if (this.props.opacity < 0.2) {
      return null
    }
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {(this.props.opacity >= 0.2) && 
          <ColorBox opacity = {this.props.opacity - .1}/>
        }
      </div>
    )
  }

}

