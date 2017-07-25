var React = require('react');

var Events = {
};

var CustomView = React.createClass({

  propTypes: {
  },

  render: function () {
    return (
        <div className="customViewContainer"></div>
    );
  }

});

exports.view = CustomView;
exports.event = Events;