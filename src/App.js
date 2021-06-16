import React from 'react';

class Square extends React.Component{
  render(){
    let squareStyle = {
      backgroundColor: this.props.color
    }
    return(
      <div style={squareStyle} className="h-40">

      </div>
    );
  }
}

class Label extends React.Component{
  constructor(props) {
    super(props);

    this.state = { copySuccess: '' }
  }

  copyToClipboard = (e) => {
    this.props.color.select();
    document.execCommand('copy');
    e.target.focus();
    this.setState({ copySuccess: 'Copied!' });
  };

  render(){
    return(
      <p idName="color" className="p-3 m-0 flex justify-between font-bold font-sans">
        {this.props.color}
        <span className="text-blue-500 cursor-pointer" onClick="this.copyToClipboard">Copy</span>
        {this.state.copySuccess}
      </p>
    );
  }
}

class Card extends React.Component{
  render(){
    return(
      <div className="inline-block h-52 w-40 bg-white shadow-card p-0 m-6">
      <Square color={this.props.color}/>
      <Label color={this.props.color}/>
      </div>
    );
  }
}

export default Card;