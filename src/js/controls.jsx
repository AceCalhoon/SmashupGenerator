var factiondb = require('./faction-db.js');

var React = require('react');

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
        return {};
    },
    handleChange: function(event) {
        this.props.onChange(event.target.set, event.target.checked);
    },
    handleFactionSelectionChanged: function(selected) {
        if(selected) {
            this.setState({selected: true});
        }
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
                <p><input type="checkbox" data-set={this.props.set.get('set')} checked={this.props.selected} onChange={this.handleChange} /> {this.props.set.get('set')}</p>
                <ol>
                    {factionNodes}
                </ol>
            </div>
        );
    }
});

var GameFilter = React.createClass({
    getInitialState: function() {
        var selected = {};
        var sets = this.props.sets;
        sets.forEach(function(set) {
            selected[set.get('set')] = true;
        });
        return {
            selected: selected
        };
    },
    handleChange: function(set, checked) {
    console.log('handleChange', set, checked);
        var selection = this.state.selected;
        selection[set].selected = checked;
        this.setState({selected: selection});
    },
    render: function() {
        var that = this;
        var setNodes = this.props.sets.map(function(set) {
            return (
                <li key={set.get('set')}><SetFilter set={set} selected={that.state.selected[set.get('set')]} onChange={that.handleChange} /></li>
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
    React.render(<GameFilter sets={factiondb.getSets()} />, container);
}