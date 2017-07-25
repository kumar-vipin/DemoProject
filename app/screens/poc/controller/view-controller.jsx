var React = require('react');

var CustomView = require('../view/custom-view').view;

var ViewController = React.createClass({

  propTypes: {
    store: React.PropTypes.object.isRequired,
    action: React.PropTypes.object.isRequired
  },

  getInitialState: function () {

    var initialState = {
      appData: this.getStore().getData().appData,
      componentProps: this.getStore().getData().componentProps
    };

    return initialState;

  },

  componentDidMount: function () {
    this.getStore().bind('change', this.handleViewStateChanged);
    this.props.action.registerEvent();
  },

  componentWillUnmount: function () {
    this.getStore().unbind('change', this.handleViewStateChanged);
    this.props.action.deRegisterEvent();
  },

  handleViewStateChanged: function () {

    var changedState = {
      appData: this.getStore().getData().appData,
      componentProps: this.getStore().getData().componentProps
    };

    this.setState(changedState);
  },

  getStore: function () {
    return this.props.store;
  },

  render: function () {

    return (
        <div className="viewsContainer">
          <CustomView />
        </div>
    );
  }

});

module.exports = ViewController;