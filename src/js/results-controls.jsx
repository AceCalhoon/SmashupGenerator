var React = require('react');
var PureRenderMixin = require('react-addons-pure-render-mixin');
var update = require('react-addons-update');

var factiondb = require('./faction-db.js');

var ResultView = React.createClass({
    propTypes: {
        teams: React.PropTypes.array
    },
    getInitialState: function() {
        return {
            expanded: []
        };
    },
    mixins: [PureRenderMixin],
    toggleExpansion: function(index) {
        var newExpanded = this.state.expanded.splice(0);
        newExpanded[index] = !newExpanded[index];
        
        this.setState({expanded: newExpanded});
    },
    render: function() {
        var teamNodes = this.props.teams.map(function(team, i) {
            var set1 = factiondb.getSet(team.Faction1.set);
            var faction1 = factiondb.getFaction(team.Faction1.faction);
            
            var set2 = factiondb.getSet(team.Faction2.set);
            var faction2 = factiondb.getFaction(team.Faction2.faction);
            return (
                <li key={i}
                    className={this.state.expanded[i] ? "expanded" : "collapsed"}
                    onClick={this.toggleExpansion.bind(this, i)}>
                    <ul>
                        <li className="faction-summary">
                            <h2 className="faction-name">
                                {faction1.get('faction')}
                            </h2>
                            <div className="faction-description">
                                {faction1.get('description')}
                            </div>
                            <div className="set-name">
                                {faction1.get('set')}
                            </div>
                        </li>
                        <li className="faction-summary">
                            <h2 className="faction-name">
                                {faction2.get('faction')}
                            </h2>
                            <div className="faction-description">
                                {faction2.get('description')}
                            </div>
                            <div className="set-name">
                                {faction2.get('set')}
                            </div>
                        </li>
                    </ul>
                </li>
            );
        }.bind(this));
        return (
            <ol className="results">
                {teamNodes}
            </ol>
        );
    }
});

module.exports.ResultView = ResultView