var React = require('react');
var ReactDOM = require('react-dom');
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
        this.setState({state: ControlStates.Results, teams: teams});
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
                    Welcome
                </section>
                <section className="filter">
                    <Filter.GameFilter
                        sets={factiondb.getSets()}
                        onFilterChange={this.handleFilterChange} />
                </section>
                <section className="results">
                    <Results.ResultView
                        teams={this.state.teams} />
                </section>
                <section className="about">
                    About
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