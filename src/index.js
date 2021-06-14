import React from 'react';
import ReactDOM from 'react-dom';

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

ReactDOM.render(
  <div>
    <div className="bg-white p-12">
    <h1 className="text-center text-4xl pb-5">Cards</h1>
    <Card color="#5c6ac4"/>
    <Card color="#ecc94b"/>
    <Card color="#ffd8cc"/>
    <Card color="#deedf0"/>
    <Card color="#ac66cc"/>
    <Card color="#fc92e3"/>
    <Card color="#b6c9f0"/>
    <Card color="#e93b81"/>
    <Card color="#ce97b0"/>
    <Card color="#867ae9"/>
    <Card color="#ac66cc"/>
    <Card color="#afb9c8"/>
    </div>
    <footer className="bg-gray-300 h-14 text-xl flex justify-center items-center">
      &copy; Maftuna Vohidjonovna 2021
    </footer>
  </div>,
  document.querySelector('body')
);