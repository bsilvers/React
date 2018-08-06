'use strict';

var app = {
    title: 'Visibility Toggle',
    subTitle: 'Put visibility into your life',
    hideDetails: true
};

var showDetails = function showDetails() {
    app.hideDetails = false;
    console.log(app.hideDetails);
    render();
};

var hideDetails = function hideDetails() {
    app.hideDetails = true;
    console.log(app.hideDetails);
    render();
};
var appRoot = document.getElementById('app');

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        React.createElement(
            'button',
            { hidden: !app.hideDetails, onClick: showDetails },
            'Show details'
        ),
        React.createElement(
            'button',
            { hidden: app.hideDetails, onClick: hideDetails },
            'Hide details'
        ),
        React.createElement(
            'p',
            { hidden: app.hideDetails },
            app.subTitle
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
