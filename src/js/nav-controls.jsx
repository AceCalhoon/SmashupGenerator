var React = require('react');

var DisplayModes = {
    //Initial state. Big smash button, little filter.
    Expanded: 'expanded',
    
    //Filter screen. No filter button.
    Filter: 'filter',
    
    //Small filter and smash buttons.
    Compact: 'compact'
}

var AppControls = React.createClass({
    propTypes: {
        displayMode: React.PropTypes.string,
        onSmash: React.PropTypes.func,
        onFilter: React.PropTypes.func,
        onAbout: React.PropTypes.func
    },
    getDefaultProps: function() {
        return {
            displayMode: DisplayModes.expanded,
            onSmash: function() {},
            onFilter: function() {},
            onAbout: function() {}
        }
    },
    getInitialState: function() {
        return {};
    },
    render: function() {
        return (
            <nav class={this.props.displayMode}>
                <button class="smash" onclick={onSmash}>Smash!</button>
                <button class="show-filter" onclick={onFilter}>Filter</button>
                <button class="show-about" onclick={onAbout}>About</button>
            </nav>
        );
    }
});

module.exports.DisplayModes = DisplayModes;

module.exports.AppControls = AppControls;