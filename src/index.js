import React from 'react';
import ReactDOM from 'react-dom';
import Card from './App.js';

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