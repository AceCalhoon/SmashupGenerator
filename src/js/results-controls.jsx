var React = require('react');
var PureRenderMixin = require('react-addons-pure-render-mixin');

var ResultView = React.createClass({
    propTypes: {
        teams: React.PropTypes.array
    },
    getInitialState: function() {
        return {};
    },
    mixins: [PureRenderMixin],
    render: function() {
        var teamNodes = this.props.teams.map(function(team, i) {
            return (
                <li key={i}>
                    {team.Faction1.faction} / {team.Faction2.faction}
                </li>
            );
        });
        return (
            <ul className="results">
                {teamNodes}
            </ul>
        );
    }
});

module.exports.ResultView = ResultView