import React from 'react';
import _ from 'underscore';
import ReactDOM from 'react-dom';


import './src/index.less';

const Gap = React.createClass({
    render(){
        return (
            <div>
                <i>gap</i>
                <div>
                    gap0
                    <div className="gap0"></div>
                    gap5
                    <div className="gap5"></div>
                    gap10
                    <div className="gap10"></div>
                    gap15
                    <div className="gap15"></div>
                    end
                </div>
                <div>
                    <div className="border padding5 margin5">padding5 margin5</div>
                </div>
            </div>
        );
    }
});

const App = React.createClass({
    getInitialState(){
        return {
            left: false
        };
    },
    render(){
        return (
            <div>
                <Gap></Gap>
            </div>
        );
    }
});

ReactDOM.render(
    <App></App>
    , document.getElementById('appContainer'));