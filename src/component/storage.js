import React from 'react';
import _ from 'underscore';

var PropTypes = React.PropTypes;

var prefix = '_react-gmm_';

var Storage = React.createClass({
    statics: {
        set: function (key, value) {
            window.localStorage.setItem(prefix + key, JSON.stringify(value));
        },
        get: function (key) {
            var v = window.localStorage.getItem(prefix + key);
            return v ? JSON.parse(v) : v;
        },
        remove: function (key) {
            window.localStorage.removeItem(prefix + key);
        },
        clear: function () {
            window.localStorage.clear();
        },
        getAll: function () {
            var result = {};
            var key;
            for (var i = 0; i < window.localStorage.length; i++) {
                key = window.localStorage.key(i);
                if (key.startsWith(prefix)) {
                    key = key.slice(prefix.length);
                    result[key] = Storage.get(key);
                }
            }
            return _.keys(result) ? result : null;
        }
    },
    propTypes: {
        name: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
        autoSave: PropTypes.bool
    },
    getDefaultProps: function () {
        return {
            autoSave: true
        };
    },
    save: function () {
        Storage.set(this.props.name, this.props.value);
    },
    componentWillUpdate: function () {
        if (this.props.autoSave) {
            this.save();
        }
    },
    componentWillMount: function () {
        this.save();
    },
    render: function () {
        return null;
    }
});

export default Storage;