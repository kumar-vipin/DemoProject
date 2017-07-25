var _ = require('lodash');

var eventBus = require('../../../libraries/eventdispatcher/EventDispatcher.js');

var ViewStore = require('../store/view-store');

var CustomViewEvents = require('../view/custom-view').event;

var ViewAction = (function () {

  var oEventHandler = {};

  var handleFrameContainerMouseUpEvent = function (oContext, oFrameStyle) {
    console.log(oFrameStyle);
  };

  var initiateEventHandler = function () {
    var _setEvent = _.set.bind(this, oEventHandler);


    /*_setEvent(CustomViewEvents.FRAME_CONTAINER_MOUSEUP_EVENT, handleFrameContainerMouseUpEvent);*/

  }.call(this);

  return {
    //Register Event Listener
    registerEvent: function () {
      _.forEach(oEventHandler, function (oHandler, sEventName) {
        eventBus.addEventListener(sEventName, oHandler);
      });
    },

    //De-Register Event Listener
    deRegisterEvent: function () {
      _.forEach(oEventHandler, function (oHandler, sEventName) {
        eventBus.removeEventListener(sEventName, oHandler);
      });
    }

  }

})();

module.exports = ViewAction;