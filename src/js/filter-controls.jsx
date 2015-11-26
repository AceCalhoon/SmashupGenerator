var factiondb = require('./faction-db.js');

var React = require('react');
var update = require('react-addons-update');

var FactionFilter = React.createClass({
    propTypes: {
        faction: React.PropTypes.object,
        selected: React.PropTypes.bool,
        onSelectionChanged: React.PropTypes.func
    },
    getDefaultProps: function() {
        return {
            onSelectionChanged: function(set, faction) {}
        }
    },
    getInitialState: function() {
        return {};  
    },
    handleChange: function(event) {
        this.props.onSelectionChanged(event.target.checked);
    },
    render: function() {
        return (
            <ol>
                <li>
                    <label>
                        <input type="checkbox"
                            checked={this.props.selected}
                            onChange={this.handleChange} />{this.props.faction.get('faction')}
                    </label>
                </li>
                <li>{this.props.faction.get('description')}</li>
            </ol>
        );
    }
});

var SetFilter = React.createClass({
    propTypes: {
        set: React.PropTypes.object,
        selected: React.PropTypes.bool,
        factionSelection: React.PropTypes.object,
        onSetChange: React.PropTypes.func
    },
    getDefaultProps: function() {
        return {
            onSetChange: function(set, setSelected, factionsSelected) { }
        }
    },
    getInitialState: function() {
        return {
        };
    },
    handleSetChange: function(set) {
        var newSelected = !this.props.selected;
        
        var changes = {};
        for(var key in this.props.factionSelection) {
            changes[key] = {
                $set: newSelected
            }
        }
        
        var newFactions = update(this.props.factionSelection, changes);
    
        this.props.onSetChange(set, newSelected, newFactions);
    },
    handleFactionChange: function(set, faction) {
        var factionSelected = !this.props.factionSelection[faction];
        var setSelected = this.props.selected || factionSelected;

        var changes = {};
        changes[faction] = {
            $set: factionSelected
        }

        var newFactions = update(this.props.factionSelection, changes);
        
        this.props.onSetChange(set, setSelected, newFactions);
    },
    render: function() { 
        var factionNodes = this.props.set.get('factions').map(function(faction) {
            return (
                <li key={faction.get('faction')}>
                    <FactionFilter
                        faction={faction}
                        selected={this.props.factionSelection[faction.get('faction')]}
                        onSelectionChanged={this.handleFactionChange.bind(this, this.props.set.get('set'), faction.get('faction'))}/>
                </li>
            );
        }.bind(this));
        return (
            <div>
                <p>
                    <label>
                        <input type="checkbox"
                            checked={this.props.selected}
                            onChange={this.handleSetChange.bind(this, this.props.set.get('set'))} />
                        {this.props.set.get('set')}
                    </label>
                </p>
                <ol>
                    {factionNodes}
                </ol>
            </div>
        );
    }
});

var GameFilter = React.createClass({
    propTypes: {
        sets: React.PropTypes.object,
        onFilterChange: React.PropTypes.func
    },
    getDefaultProps: function() {
        return {
            onFilterChange: function(filter) { }
        }
    },
    getInitialState: function() {
        var filter = {};
        var sets = this.props.sets;
        sets.forEach(function(set) {
            var factions = {};
            set.get('factions').forEach(function(faction) {
                factions[faction.get('faction')] = true;
            });

            filter[set.get('set')] = {
                selected: true,
                factions: factions
            };
        });
        return {
            filter: filter
        };
    },
    handleSetChange: function(set, setSelected, factionsSelected) {
        var changes = {};
        changes[set] = {
            selected: {$set: setSelected},
            factions: {$set: factionsSelected}
        };

        var newFilter = update(this.state.filter, changes);
        this.setState({
            filter: newFilter
        });
        
        this.props.onFilterChange(newFilter);
    },
    render: function() {
        var setNodes = this.props.sets.map(function(set) {
            return (
                <li key={set.get('set')}>
                    <SetFilter set={set}
                        selected={this.state.filter[set.get('set')].selected}
                        factionSelection={this.state.filter[set.get('set')].factions}
                        onSetChange={this.handleSetChange} />
                </li>
            );
        }.bind(this));
        return (
            <ol>
                {setNodes}
            </ol>
        );
    }
});

module.exports.GameFilter = GameFilter;