
	import Vue from 'vue';
	 
	function Store(options) {

	  var state = {
	    a: 'a',
	  }

	  this.setA = function (para) {
	    this.state.a. = para
	  }

	  this._vm = new Vue({
	    data: {
	      $$state: state
	    }
	  });
	}


	var prototypeAccessors = {
	  state: {}
	};
	prototypeAccessors.state.get = function () {
	  return this._vm._data.$$state
	};
	Object.defineProperties(Store.prototype, prototypeAccessors);

	export default new Store()
