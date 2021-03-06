const domElement = document.getElementById('root-normal-react');

//Syzdawam REACT element kato kazwam kakyv type element iskam da syzdam, 
// kakwi attributes iskam da mu podam, kakwi sa mu childrenite:
// const reactElement = React.createElement('h1', {}, 'Hello from React element!');

const reactElement = React.createElement(
    'header', 
    {}, 
    React.createElement('h1', {}, 'Hello from React 1 element!'),
    React.createElement('h2', {}, 'Hello from React 2 element!')
);

console.log(reactElement);
//towa mi e reactElementa - edin Object:
// Object
// $$typeof: Symbol(react.element)
// key: null
// props: {children: "Hello fromm React element!"}
// ref: null
// type: "h1"
// _owner: null
// _store: {validated: false}
// _self: null
// _source: null
// __proto__: Object

ReactDOM.render(reactElement, domElement);
