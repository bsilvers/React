
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

let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;
    render();
}

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            
            <button onClick={toggleVisibility}>
                { visibility ? 'Hide details' : 'Show details' };
            </button>
            <p hidden={!visibility}>{app.subTitle}</p>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

render();