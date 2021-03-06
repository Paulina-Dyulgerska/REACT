// s JSX syntaxis:
// const domElement = document.getElementById('root-JSX-react');
// const reactJsxElement = <h1>Hello from React JSX syntaxis</h1>;
// ReactDOM.render(reactJsxElement, domElement);
// console.log(reactJsxElement);

const domElement = document.getElementById('root-JSX-react');
const reactJsxElement = (
<header>
    <h1>Hello from React 1 JSX element!</h1>
    <h2>Hello from React 2 JSX element!</h2>
</header>
);
ReactDOM.render(reactJsxElement, domElement);
console.log(reactJsxElement);


