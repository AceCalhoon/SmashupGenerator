var React = require('react');
var ReactDOM = require('react-dom');
var PureRenderMixin = require('react-addons-pure-render-mixin');

var Nav = require('./nav-controls.jsx');
var Filter = require('./filter-controls.jsx');
var Results = require('./results-controls.jsx');

var classNames = require('classnames');

var factiondb = require('./faction-db.js');
var ScenarioGenerator = require('./generator.js');

var ControlStates = {
    Intro: 'intro',
    Filter: 'filter',
    Results: 'results',
    About: 'about'
}

var Generator = React.createClass({
    getInitialState: function() {
        var filter = {};
        var sets = factiondb.getSets();
        sets.map(function(set) {
            var setFilter = {selected: true, factions: {}};
            
            set.get('factions').map(function(faction) {
                setFilter.factions[faction.get('faction')] = true;
            });
            
            filter[set.get('set')] = setFilter;
        });
        return {
            state: ControlStates.Intro,
            teams: [],
            filter: filter
        };
    },
    handleSmash: function() {
        var teams = ScenarioGenerator.generateScenario(this.state.filter);
        var matchId = Date.now();
        this.setState({state: ControlStates.Results, teams: teams, matchId: matchId});
    },
    handleFilter: function() {
        this.setState({state: ControlStates.Filter});
    },
    handleAbout: function() {
        this.setState({state: ControlStates.About});
    },
    handleFilterChange: function(filter) {
        this.setState({filter: filter});
    },
    mixins: [PureRenderMixin],
    render: function() {
        var navDisplayMode = Nav.DisplayModes.Expanded;
        switch(this.state.state) {
            case ControlStates.Intro:
                navDisplayMode = Nav.DisplayModes.Expanded;
                break;
            case ControlStates.Filter:
                navDisplayMode = Nav.DisplayModes.Filter;
                break;
            case ControlStates.Results:
                navDisplayMode = Nav.DisplayModes.Compact;
                break;
            case ControlStates.About:
                navDisplayMode = Nav.DisplayModes.Compact;
                break;
        }
        return (
            <div className={classNames('generator', this.state.state)}>
                <section className="welcome">
                    <h1>Smashing!</h1>
                </section>
                <section className="filter">
                    <Filter.GameFilter
                        sets={factiondb.getSets()}
                        onFilterChange={this.handleFilterChange} />
                </section>
                <section className="results" key={this.state.matchId}>
                    <Results.ResultView
                        teams={this.state.teams} />
                </section>
                <section className="about">
                    <h2>About</h2>
                    <p>Need to figure out who gets each faction? Why not this app?</p>
                    <p>The filter filters, hit Smash! for pairings, and pass decks around the table. Tap a pair of factions for more information on the factions. Sometimes it helps.</p>
                    <p>This application is implemented in HTML5, CSS3, and JavaScript. A modern browser is required.</p>
                    <p>Version __VERSION__</p>
                    <p>Built with:</p>
                    <ul>
                        <li>LESS stylesheet precompilation</li>
                        <li>React user interface library</li>
                        <li>Grunt compilation pipeline</li>
                        <li><a href="https://github.com/AceCalhoon/SmashupGenerator">Source Code on GitHub</a></li>
                    </ul>
                    <p>&copy; 2015 Aaron Siebersma</p>
                </section>
                <Nav.AppControls
                    displayMode={navDisplayMode}
                    onSmash={this.handleSmash}
                    onFilter={this.handleFilter}
                    onAbout={this.handleAbout} />
            </div>
        );
    }
});

module.exports.RenderGenerator = function(container) {
    ReactDOM.render(<Generator />, container);
};