import React, { Component } from 'react';
import './WatchOne.css';
import {TwitterPicker} from 'react-color';
import reactCSS from 'reactcss';
class WatchOne extends Component {
  state = {
    displayColorPicker: false,
    color: {
      r: '4',
      g: '46',
      b: '84',
      a: '1',
    },
};

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };  

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb })
  };
  

  render() {

    const styles = reactCSS({
      '.strap': {
        color: {
          background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
        },
        swatch: {
          padding: '5px',
          marginTop: '2em',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          right: '50px',
          bottom: '0px',
          left: '520px',
          position: 'absolute',
          marginTop: '2em',
          zIndex: '2',
        },
        cover: {
          top: '0px',
          marginTop: '2em',
          right: '0px',
          bottom: '0px',
          left: '20px',
        },
      },
    });

return (
<div className="wrapper">
    <div className="watch-strap">
    <div className="strap-circle"></div>
    <div className="strap" ref='strap' 
style={styles.color, {background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,} } 
onClick={ this.handleClick }>
{ this.state.displayColorPicker ? <div style={ styles.popover }>
<div style={ styles.cover } onClick={ this.handleClose }/>
<TwitterPicker color={ this.state.color } onChange={ this.handleChange } />
</div> : null }

    <div className="watch-lace">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <span className="top"></span>
      <span className="bottom"></span>
    </div>
  </div>
<div  className="main">
  <div className="watch-case">
    <div className="reflection"></div> 
    <div className="reflection bottom"></div>
    <div className="watch-center" >
      <div className="watch-points"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
      <div className="watch-tips">
        <span className="hours"></span>
        <span className="minutes"></span>
        <span className="seconds"></span>
      </div>
      <div className="watch-date">RADO</div>
       <div className="watch-day">
         <div className="sun">
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
         </div>
         
      </div>
      <div className="watch-week days">
        <span className="week-arrow"></span>
        <ul>
          <div>3</div>
          <div>6</div>
          <div>9</div>       
        </ul>
    </div>
    </div>
  </div>
  </div>

</div> 
</div>
  );
  }
}

export default WatchOne;      
