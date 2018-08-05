console.log('App.js is running!');

const appObject = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer.',
    options: ['One','Two']
};

// JSX - Javascript XML
const template = (
<div>
    <h1>{appObject.title}</h1>
    { appObject.subTitle && <p>{appObject.subTitle}</p>}
    <p>{ (appObject.options && appObject.options.length > 0) ? 'Here are your options' : 'No options'}</p>
    <ol>
        <li>Item {appObject.options[0]}</li>
        <li>Item {appObject.options[1]}</li>
    </ol>
</div>
);

const user = {
    name: 'Brian',
    age: 46,
    location: 'Bedford, Tx'
};

function getSubtitle(subTitle) {
    if(subTitle) {
        return <p>{appObject.subTitle}</p>;
    }
}

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}

const template2 = (
<div>
    <h1>{user.name ? user.name : 'Anonymous' }</h1>

     {  (user.age && user.age >= 18) && <p>Age: {user.age}</p>  }
    {getLocation(user.location)}
</div>
);

const appRoot = document.getElementById('app');

 ReactDOM.render(template, appRoot);
// ReactDOM.render(template2, appRoot);