
const app = {
    title: 'Visibility Toggle',
    subTitle: 'Put visibility into your life',
    hideDetails: true
};

const showDetails = () => {
    app.hideDetails = false;
    console.log(app.hideDetails);
    render();
};

const hideDetails = () => {
    app.hideDetails = true;
    console.log(app.hideDetails);
    render();
};
const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button hidden={!app.hideDetails} onClick={showDetails}>Show details</button>
            <button hidden={app.hideDetails} onClick={hideDetails}>Hide details</button>
            <p hidden={app.hideDetails}>{app.subTitle}</p>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

render();