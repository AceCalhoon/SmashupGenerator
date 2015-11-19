var factiondb = require('./faction-db.js');

var React = require('react');
var ReactDOM = require('react-dom');
var update = require('react-addons-update');

var FactionFilter = React.createClass({
    getInitialState: function() {
        var selected = this.props.selected != null && this.props.selected != undefined
            ? this.props.selected
            : this.props.initialSelected || true;
            
        return {selected: selected};  
    },
    handleChange: function(event) {
        if(this.props.selected == null && this.props.selected == undefined) {
            this.setState({selected: event.target.checked});
        }
        this.props.onSelectionChanged(event.target.checked);
    },
    render: function() {
        return (
            <ol>
                <li><input type="checkbox" checked={this.state.selected} onChange={this.handleChange} />{this.props.name}</li>
                <li>description</li>
            </ol>
        );
    }
});

var SetFilter = React.createClass({
    getInitialState: function() {
        return {
        };
    },
    getDefaultProps: function() {
        return {
            onSetChange: function(set, setSelected, factionsSelected) { }
        }
    },
    handleSetChange: function(set) {
        this.props.onSetChange(set, !this.props.selected, null);
    },
    render: function() {
        var that = this; 
        var factionNodes = [];/*this.props.set.get('factions').map(function(faction) {
            return (
                <li key={faction.get('faction')}><FactionFilter name={faction.get('faction')} onSelectionChanged={that.handleFactionSelectionChanged}/></li>
            );
        });*/
        return (
            <div>
                <p>
                    <input type="checkbox"
                        checked={this.props.selected}
                        onChange={this.handleSetChange.bind(this, this.props.set.get('set'))} />
                    {this.props.set.get('set')}
                </p>
                <ol>
                    {factionNodes}
                </ol>
            </div>
        );
    }
});

var GameFilter = React.createClass({
    getInitialState: function() {
        var filter = {};
        var sets = this.props.sets;
        sets.forEach(function(set) {
            filter[set.get('set')] = {
                selected: true,
                //TODO: Build initial faction state.
                factions: null
            };
        });
        return {
            filter: filter
        };
    },
    handleSetChange: function(set, setSelected, factionsSelected) {
    console.log('handleChange', set, setSelected, factionsSelected);
        var changes = {};
        changes[set] = {
            selected: {$set: setSelected},
            factions: {$set: factionsSelected}
        };

        var newFilter = update(this.state.filter, changes);
        this.setState({
            filter: newFilter
        });
    },
    render: function() {
        var that = this;
        var setNodes = this.props.sets.map(function(set) {
            return (
                <li key={set.get('set')}><SetFilter set={set} selected={that.state.filter[set.get('set')].selected} onSetChange={that.handleSetChange} /></li>
            );
        });
        return (
            <ol>
                {setNodes}
            </ol>
        );
    }
});

module.exports.RenderFilter = function(container) {
    ReactDOM.render(<GameFilter sets={factiondb.getSets()} />, container);
}