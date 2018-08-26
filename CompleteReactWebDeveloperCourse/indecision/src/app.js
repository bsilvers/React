// install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';

const template = <p>This is JSX from webpack</p>;  // React.createElement('p', {}, 'testing 123');

ReactDOM.render(template, document.getElementById('app'));