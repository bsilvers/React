'use strict';

console.log('App.js is running!');

var appObject = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer.',
    options: ['One', 'Two']
};

// JSX - Javascript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        appObject.title
    ),
    appObject.subTitle && React.createElement(
        'p',
        null,
        appObject.subTitle
    ),
    React.createElement(
        'p',
        null,
        appObject.options && appObject.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item ',
            appObject.options[0]
        ),
        React.createElement(
            'li',
            null,
            'Item ',
            appObject.options[1]
        )
    )
);

var count = 0;
var addOne = function addOne() {
    console.log('addOne');
    // count++;
};
var minusOne = function minusOne() {
    console.log('minusOne');
};

var reset = function reset() {
    console.log('reset');
};

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count: ',
        count
    ),
    React.createElement(
        'button',
        { onClick: addOne },
        '+1'
    ),
    React.createElement(
        'button',
        { onClick: minusOne },
        '-1'
    ),
    React.createElement(
        'button',
        { onClick: reset },
        'reset'
    )
);
console.log(template2);

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
// ReactDOM.render(template2, appRoot);
