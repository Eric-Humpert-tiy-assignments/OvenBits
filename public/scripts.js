'use strict';
if (this.ovenBits === undefined) this.ovenBits = {};

(function(context) {

  function start() {

    //Call your code here
    console.log('starting!', context);

  }

  window.ovenBits.start = start;

})(window.ovenBits);
