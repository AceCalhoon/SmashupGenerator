var React = require('react');
var PureRenderMixin = require('react-addons-pure-render-mixin');

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
            displayMode: DisplayModes.Expanded,
            onSmash: function() {},
            onFilter: function() {},
            onAbout: function() {}
        }
    },
    getInitialState: function() {
        return {};
    },
    mixins: [PureRenderMixin],
    render: function() {
        return (
            <nav className={this.props.displayMode}>
                <button className="smash" onClick={this.props.onSmash}>Smash!</button>
                <button className="show-filter" onClick={this.props.onFilter}>Filter</button>
                <button className="show-about" onClick={this.props.onAbout}>?</button>
            </nav>
        );
    }
});

module.exports.DisplayModes = DisplayModes;

module.exports.AppControls = AppControls;