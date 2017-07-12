// { "framework": "Vue" }

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []
	
	/* styles */
	__vue_styles__.push(__webpack_require__(1)
	)
	
	/* script */
	__vue_exports__ = __webpack_require__(2)
	
	/* template */
	var __vue_template__ = __webpack_require__(5)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/zchub/git/weex-shop-decoration/src/alpha-text/index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-621ebff6"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}
	
	module.exports = __vue_exports__
	module.exports.el = 'true'
	new Vue(module.exports)


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = {
	  "container": {
	    "backgroundImage": "url(//cdn2.jianshu.io/assets/default_avatar/14-0651acff782e7a18653d7530d6b27661.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120)",
	    "backgroundSize": "200 200",
	    "backgroundRepeat": "no-repeat"
	  },
	  "rect": {
	    "width": 0,
	    "height": 0,
	    "borderLeftWidth": 50,
	    "borderRightWidth": 50,
	    "borderBottomWidth": 50,
	    "borderLeftStyle": "solid",
	    "borderRightStyle": "solid",
	    "borderBottomStyle": "solid",
	    "borderLeftColor": "rgba(0,0,0,0)",
	    "borderRightColor": "rgba(0,0,0,0)",
	    "borderBottomColor": "#FF0000"
	  },
	  "title": {
	    "textAlign": "center",
	    "color": "#808080",
	    "fontSize": 50
	  },
	  "font-size": {
	    "fontSize": 40
	  },
	  "color": {
	    "color": "#FF0000"
	  }
	}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	var text = __webpack_require__(3);
	
	module.exports = {
	  data: {
	    color: 'red'
	  },
	  props: ['model'],
	  components: {
	    'v-text': text
	  },
	  methods: {
	    handleClick: function handleClick() {}
	  },
	  mounted: function mounted() {
	    console.log(1222);
	  }
	};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []
	
	/* template */
	var __vue_template__ = __webpack_require__(4)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/zchub/git/weex-shop-decoration/src/alpha-text/text.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}
	
	module.exports = __vue_exports__


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["ct"]
	  }, [_c('text', [_vm._v("321")])])
	}]}
	module.exports.render._withStripped = true

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('list', {
	    staticClass: ["container"],
	    attrs: {
	      "onclick": "handleClick"
	    }
	  }, [_c('cell', {
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, [_c('v-text'), _c('a', {
	    attrs: {
	      "href": "https://show.weidian.com"
	    }
	  }, [_c('text', {
	    staticStyle: {
	      fontSize: "28"
	    }
	  }, [_vm._v("click me!")])]), _c('a', {
	    staticClass: ["button"],
	    attrs: {
	      "href": "./text.vue"
	    }
	  }, [_c('text', {
	    staticClass: ["text"],
	    staticStyle: {
	      fontSize: "28"
	    }
	  }, [_vm._v("Jump")])]), _c('div', {
	    staticClass: ["rect"]
	  })], 1), _c('cell', {
	    appendAsTree: true,
	    attrs: {
	      "append": "tree"
	    }
	  }, _vm._l((new Array(60)), function(num, i) {
	    return _c('text', {
	      staticClass: ["font-size", "color"],
	      staticStyle: {
	        fontSize: "36"
	      }
	    }, [_vm._v("  " + _vm._s(i) + "  ")])
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTMyN2ExZGU4YjNlZGU4NTdlN2IiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FscGhhLXRleHQvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3NyYy9hbHBoYS10ZXh0L2luZGV4LnZ1ZT81OWRhIiwid2VicGFjazovLy8uL3NyYy9hbHBoYS10ZXh0L2luZGV4LnZ1ZT8xNzJhIiwid2VicGFjazovLy8uL3NyYy9hbHBoYS10ZXh0L3RleHQudnVlIiwid2VicGFjazovLy8uL3NyYy9hbHBoYS10ZXh0L3RleHQudnVlPzk2N2EiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FscGhhLXRleHQvaW5kZXgudnVlPzY3MDQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXNELG1EQUFtRCxJQUFJO0FBQzdHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7OztBQzlCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUN2Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUFzRCxtREFBbUQsSUFBSTtBQUM3RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUM3QkEsaUJBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBLEVBQUMsK0JBQStCLGFBQWEsMEJBQTBCO0FBQ3ZFO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsRUFBQztBQUNELDJDOzs7Ozs7QUNQQSxpQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7QUFDSCxFQUFDO0FBQ0QsMkMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlMzI3YTFkZThiM2VkZTg1N2U3YiIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xudmFyIF9fdnVlX3N0eWxlc19fID0gW11cblxuLyogc3R5bGVzICovXG5fX3Z1ZV9zdHlsZXNfXy5wdXNoKHJlcXVpcmUoXCIhIXdlZXgtdnVlLWxvYWRlci9saWIvc3R5bGUtbG9hZGVyIXdlZXgtdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTYyMWViZmY2IXdlZXgtdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2luZGV4LnZ1ZVwiKVxuKVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIXdlZXgtdnVlLWxvYWRlci9saWIvc2NyaXB0LWxvYWRlciFiYWJlbC1sb2FkZXIhd2VleC12dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vaW5kZXgudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXdlZXgtdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTYyMWViZmY2IXdlZXgtdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vaW5kZXgudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy96Y2h1Yi9naXQvd2VleC1zaG9wLWRlY29yYXRpb24vc3JjL2FscGhhLXRleHQvaW5kZXgudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5fX3Z1ZV9vcHRpb25zX18uX3Njb3BlSWQgPSBcImRhdGEtdi02MjFlYmZmNlwiXG5fX3Z1ZV9vcHRpb25zX18uc3R5bGUgPSBfX3Z1ZV9vcHRpb25zX18uc3R5bGUgfHwge31cbl9fdnVlX3N0eWxlc19fLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZSkge1xuICBmb3IgKHZhciBuYW1lIGluIG1vZHVsZSkge1xuICAgIF9fdnVlX29wdGlvbnNfXy5zdHlsZVtuYW1lXSA9IG1vZHVsZVtuYW1lXVxuICB9XG59KVxuaWYgKHR5cGVvZiBfX3JlZ2lzdGVyX3N0YXRpY19zdHlsZXNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fcmVnaXN0ZXJfc3RhdGljX3N0eWxlc19fKF9fdnVlX29wdGlvbnNfXy5fc2NvcGVJZCwgX192dWVfc3R5bGVzX18pXG59XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5tb2R1bGUuZXhwb3J0cy5lbCA9ICd0cnVlJ1xubmV3IFZ1ZShtb2R1bGUuZXhwb3J0cylcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FscGhhLXRleHQvaW5kZXgudnVlP2VudHJ5PXRydWVcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiY29udGFpbmVyXCI6IHtcbiAgICBcImJhY2tncm91bmRJbWFnZVwiOiBcInVybCgvL2NkbjIuamlhbnNodS5pby9hc3NldHMvZGVmYXVsdF9hdmF0YXIvMTQtMDY1MWFjZmY3ODJlN2ExODY1M2Q3NTMwZDZiMjc2NjEuanBnP2ltYWdlTW9ncjIvYXV0by1vcmllbnQvc3RyaXB8aW1hZ2VWaWV3Mi8xL3cvMTIwL2gvMTIwKVwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogXCIyMDAgMjAwXCIsXG4gICAgXCJiYWNrZ3JvdW5kUmVwZWF0XCI6IFwibm8tcmVwZWF0XCJcbiAgfSxcbiAgXCJyZWN0XCI6IHtcbiAgICBcIndpZHRoXCI6IDAsXG4gICAgXCJoZWlnaHRcIjogMCxcbiAgICBcImJvcmRlckxlZnRXaWR0aFwiOiA1MCxcbiAgICBcImJvcmRlclJpZ2h0V2lkdGhcIjogNTAsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiA1MCxcbiAgICBcImJvcmRlckxlZnRTdHlsZVwiOiBcInNvbGlkXCIsXG4gICAgXCJib3JkZXJSaWdodFN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlckJvdHRvbVN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlckxlZnRDb2xvclwiOiBcInJnYmEoMCwwLDAsMClcIixcbiAgICBcImJvcmRlclJpZ2h0Q29sb3JcIjogXCJyZ2JhKDAsMCwwLDApXCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcIiNGRjAwMDBcIlxuICB9LFxuICBcInRpdGxlXCI6IHtcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiY29sb3JcIjogXCIjODA4MDgwXCIsXG4gICAgXCJmb250U2l6ZVwiOiA1MFxuICB9LFxuICBcImZvbnQtc2l6ZVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiA0MFxuICB9LFxuICBcImNvbG9yXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI0ZGMDAwMFwiXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvemNodWIvLnh0b29sa2l0L34vd2VleC12dWUtbG9hZGVyL2xpYi9zdHlsZS1sb2FkZXIuanMhL1VzZXJzL3pjaHViLy54dG9vbGtpdC9+L3dlZXgtdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTYyMWViZmY2IS9Vc2Vycy96Y2h1Yi8ueHRvb2xraXQvfi93ZWV4LXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvYWxwaGEtdGV4dC9pbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cblxudmFyIHRleHQgPSByZXF1aXJlKCcuL3RleHQudnVlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBkYXRhOiB7XG4gICAgY29sb3I6ICdyZWQnXG4gIH0sXG4gIHByb3BzOiBbJ21vZGVsJ10sXG4gIGNvbXBvbmVudHM6IHtcbiAgICAndi10ZXh0JzogdGV4dFxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgaGFuZGxlQ2xpY2s6IGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge31cbiAgfSxcbiAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCgpIHtcbiAgICBjb25zb2xlLmxvZygxMjIyKTtcbiAgfVxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvVXNlcnMvemNodWIvLnh0b29sa2l0L34vd2VleC12dWUtbG9hZGVyL2xpYi9zY3JpcHQtbG9hZGVyLmpzIS9Vc2Vycy96Y2h1Yi8ueHRvb2xraXQvfi9iYWJlbC1sb2FkZXIvbGliIS9Vc2Vycy96Y2h1Yi8ueHRvb2xraXQvfi93ZWV4LXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9zcmMvYWxwaGEtdGV4dC9pbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG52YXIgX192dWVfc3R5bGVzX18gPSBbXVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF3ZWV4LXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0zY2M5Y2I4ZSF3ZWV4LXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3RleHQudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy96Y2h1Yi9naXQvd2VleC1zaG9wLWRlY29yYXRpb24vc3JjL2FscGhhLXRleHQvdGV4dC52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcbl9fdnVlX29wdGlvbnNfXy5zdHlsZSA9IF9fdnVlX29wdGlvbnNfXy5zdHlsZSB8fCB7fVxuX192dWVfc3R5bGVzX18uZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlKSB7XG4gIGZvciAodmFyIG5hbWUgaW4gbW9kdWxlKSB7XG4gICAgX192dWVfb3B0aW9uc19fLnN0eWxlW25hbWVdID0gbW9kdWxlW25hbWVdXG4gIH1cbn0pXG5pZiAodHlwZW9mIF9fcmVnaXN0ZXJfc3RhdGljX3N0eWxlc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX19yZWdpc3Rlcl9zdGF0aWNfc3R5bGVzX18oX192dWVfb3B0aW9uc19fLl9zY29wZUlkLCBfX3Z1ZV9zdHlsZXNfXylcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2FscGhhLXRleHQvdGV4dC52dWVcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF92bS5fbSgwKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFtcImN0XCJdXG4gIH0sIFtfYygndGV4dCcsIFtfdm0uX3YoXCIzMjFcIildKV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy96Y2h1Yi8ueHRvb2xraXQvfi93ZWV4LXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0zY2M5Y2I4ZSEvVXNlcnMvemNodWIvLnh0b29sa2l0L34vd2VleC12dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvYWxwaGEtdGV4dC90ZXh0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2xpc3QnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFtcImNvbnRhaW5lclwiXSxcbiAgICBhdHRyczoge1xuICAgICAgXCJvbmNsaWNrXCI6IFwiaGFuZGxlQ2xpY2tcIlxuICAgIH1cbiAgfSwgW19jKCdjZWxsJywge1xuICAgIGFwcGVuZEFzVHJlZTogdHJ1ZSxcbiAgICBhdHRyczoge1xuICAgICAgXCJhcHBlbmRcIjogXCJ0cmVlXCJcbiAgICB9XG4gIH0sIFtfYygndi10ZXh0JyksIF9jKCdhJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImhyZWZcIjogXCJodHRwczovL3Nob3cud2VpZGlhbi5jb21cIlxuICAgIH1cbiAgfSwgW19jKCd0ZXh0Jywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBmb250U2l6ZTogXCIyOFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiY2xpY2sgbWUhXCIpXSldKSwgX2MoJ2EnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFtcImJ1dHRvblwiXSxcbiAgICBhdHRyczoge1xuICAgICAgXCJocmVmXCI6IFwiLi90ZXh0LnZ1ZVwiXG4gICAgfVxuICB9LCBbX2MoJ3RleHQnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFtcInRleHRcIl0sXG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIGZvbnRTaXplOiBcIjI4XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJKdW1wXCIpXSldKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogW1wicmVjdFwiXVxuICB9KV0sIDEpLCBfYygnY2VsbCcsIHtcbiAgICBhcHBlbmRBc1RyZWU6IHRydWUsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiYXBwZW5kXCI6IFwidHJlZVwiXG4gICAgfVxuICB9LCBfdm0uX2woKG5ldyBBcnJheSg2MCkpLCBmdW5jdGlvbihudW0sIGkpIHtcbiAgICByZXR1cm4gX2MoJ3RleHQnLCB7XG4gICAgICBzdGF0aWNDbGFzczogW1wiZm9udC1zaXplXCIsIFwiY29sb3JcIl0sXG4gICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICBmb250U2l6ZTogXCIzNlwiXG4gICAgICB9XG4gICAgfSwgW192bS5fdihcIiAgXCIgKyBfdm0uX3MoaSkgKyBcIiAgXCIpXSlcbiAgfSkpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9Vc2Vycy96Y2h1Yi8ueHRvb2xraXQvfi93ZWV4LXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi02MjFlYmZmNiEvVXNlcnMvemNodWIvLnh0b29sa2l0L34vd2VleC12dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvYWxwaGEtdGV4dC9pbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==
