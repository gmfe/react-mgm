import React from 'react';
import _ from 'underscore';
import ReactDOM from 'react-dom';


const App = React.createClass({
    getInitialState(){
        return {
            left: false
        };
    },
    render(){
        return (
            <div>asfaf</div>
        );
    }
});

ReactDOM.render(
    <App></App>
    , document.getElementById('appContainer'));