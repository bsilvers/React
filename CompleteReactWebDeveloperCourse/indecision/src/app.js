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

let count = 0;
const addOne = ()=> {
    console.log('addOne');
    // count++;
};
const minusOne = () => {
    console.log('minusOne');
}

const reset = ()=> {
    console.log('reset');
}

const template2 = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>
    </div>
);
console.log(template2);

const appRoot = document.getElementById('app');

 ReactDOM.render(template2, appRoot);
// ReactDOM.render(template2, appRoot);