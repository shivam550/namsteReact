import React from "react";
import ReactDOM from 'react-dom';




const text = React.createElement('h1',{id:'heading'},"Namste React");

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(text);