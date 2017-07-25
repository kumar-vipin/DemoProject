var _ = require('lodash');

var MicroEvent = require('../../../libraries/microevent/MicroEvent.js');
var TreeViewAppData = require('./model/view-app-data');
var TreeViewProps = require('./model/view-props');

var ViewStore = (function () {

  var oAppData = TreeViewAppData;
  var oComponentProps = TreeViewProps;

  var triggerChange = function () {
    ViewStore.trigger('change');
  };

  var getComponentProps = function () {
    return oComponentProps;
  };

  var getAppData = function () {
    return oAppData;
  };

  return {

    getData: function () {
      var data = {
        appData: oAppData,
        componentProps: oComponentProps
      };
      return data;
    }

  };

})();

MicroEvent.mixin(ViewStore);

module.exports = ViewStore;