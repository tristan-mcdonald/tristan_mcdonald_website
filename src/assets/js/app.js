(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict"; // import functions

var _classlist_polyfill = _interopRequireDefault(require("./modules/classlist_polyfill"));

var _foreach_polyfill = _interopRequireDefault(require("./modules/foreach_polyfill"));

var _focus_accessibility = _interopRequireDefault(require("./modules/focus_accessibility"));

var _type_ratio_interpolation = _interopRequireDefault(require("./modules/type_ratio_interpolation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
    polyfill to enable use of forEach on node lists in IE11
*/
(0, _foreach_polyfill["default"])();
/*
    polyfill to allow use of replace method
    on a classList in internet explorer
*/

(0, _classlist_polyfill["default"])();
/*
    interpolate between type ratio minimum and maximum values,
    and store the result in a CSS custom property
*/

(0, _type_ratio_interpolation["default"])();
/*
    allow enchanced focus detection (depends on a11y.js)
*/

(0, _focus_accessibility["default"])();

},{"./modules/classlist_polyfill":2,"./modules/focus_accessibility":3,"./modules/foreach_polyfill":4,"./modules/type_ratio_interpolation":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

/*
    polyfill to allow use of replace method on a classList in internet explorer
*/
function _default() {
  if (!("replace" in document.createElement("_").classList)) {
    DOMTokenList.prototype.replace = function (token, replacementToken) {
      var tokens = this.toString().split(" ");
      var index = tokens.indexOf(token + "");

      if (~index) {
        tokens = tokens.slice(index);
        this.remove.apply(this, tokens);
        this.add(replacementToken);
        this.add.apply(this, tokens.slice(1));
      }
    };
  }
}

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

/*
    allow enchanced focus detection (depends on a11y.js)
*/
function _default() {
  /* global ally */
  // inform the developer that a11y.js has loaded
  console.info("loaded version", ally.version, "of a11y.js"); // detect focus source using a11y.js, which will be stored
  // as CSS classes on the `html` element

  var focusSource = ally.style.focusSource(); // eslint-disable-line no-unused-vars
}

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

/*
    polyfill to enable use of forEach on node lists in IE11
*/
function _default() {
  if ("NodeList" in window && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;

      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }
}

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function scaleRatio(currentViewportWidth, minimumValue, maximumValue) {
  // store the minimum viewport width at which `--ratio`
  // custom property will be set. this must match values
  // set in `breakpoints.styl` & `typography.styl`.
  var minRange = 480; // store the maximum viewport width at which `--ratio`
  // custom property will be set. this must match values
  // set in `breakpoints.styl` & `typography.styl`.

  var maxRange = 1680; // calculate and store the rate at wich our ratio changes
  // when the viewport width changes by 1px

  var rateOfChange = (maximumValue - minimumValue) / (maxRange - minRange); // store the intercept (the value of Y when all X=0)

  var valueAtViewportZero = minimumValue - rateOfChange * minRange; // if we follow a linear progression from ratio m at viewport M,
  // to ratio n at viewport N, calculate and store the ratio at viewport X

  var interpolatedRatio = currentViewportWidth * rateOfChange + valueAtViewportZero; // use `interpolatedRatio` value if it's within range.
  // if it would be smaller than the smallest acceptable ratio, use the smallest.
  // if it would be larger than the largest acceptable ratio, use the largest.

  var boundedRatio = Math.max(minimumValue, Math.min(interpolatedRatio, maximumValue)); // store final ratio in CSS custom property `--ratio`

  document.documentElement.style.setProperty("--ratio", boundedRatio);
}
/*
    interpolate between type ratio minimum and maximum values,
    and store the result in a CSS custom property
*/


function _default() {
  // store the lowest ratio to use for our typographic scale.
  // This must match the value set in `typographic-variables.styl`.
  var typeRatioLow = 1.16; // store the highest ratio to use for our typographic scale.
  // This must match the value set in `typographic-variables.styl`.

  var typeRatioHigh = 1.28; // store the current viewport width

  var screenWidth = window.innerWidth; // apply the ratio scaling function, to apply
  // the ratio for the current viewport width

  scaleRatio(screenWidth, typeRatioLow, typeRatioHigh); // watch for change in the viewport width

  window.addEventListener("resize", function () {
    // store the current viewport width
    var screenWidth = window.innerWidth; // recalculate ratio when change is detected

    scaleRatio(screenWidth, typeRatioLow, typeRatioHigh);
  });
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9ub2RlX21vZHVsZXNfZm9yX190cmlzdGFuX21jZG9uYWxkX3dlYnNpdGVfX3RlbmV0L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9idWlsZF9hc3NldHMvanMvYXBwLmpzIiwiLi4vYnVpbGRfYXNzZXRzL2pzL21vZHVsZXMvY2xhc3NsaXN0X3BvbHlmaWxsLmpzIiwiLi4vYnVpbGRfYXNzZXRzL2pzL21vZHVsZXMvZm9jdXNfYWNjZXNzaWJpbGl0eS5qcyIsIi4uL2J1aWxkX2Fzc2V0cy9qcy9tb2R1bGVzL2ZvcmVhY2hfcG9seWZpbGwuanMiLCIuLi9idWlsZF9hc3NldHMvanMvbW9kdWxlcy90eXBlX3JhdGlvX2ludGVycG9sYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxhLENBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ2Usb0JBQVk7QUFDdkIsTUFBSSxFQUFFLGFBQWEsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsR0FBdkIsRUFBNEIsU0FBM0MsQ0FBSixFQUEyRDtBQUN2RCxJQUFBLFlBQVksQ0FBQyxTQUFiLENBQXVCLE9BQXZCLEdBQWlDLFVBQVUsS0FBVixFQUFpQixnQkFBakIsRUFBbUM7QUFDaEUsVUFBSSxNQUFNLEdBQUcsS0FBSyxRQUFMLEdBQWdCLEtBQWhCLENBQXNCLEdBQXRCLENBQWI7QUFDQSxVQUFNLEtBQUssR0FBSSxNQUFNLENBQUMsT0FBUCxDQUFlLEtBQUssR0FBRyxFQUF2QixDQUFmOztBQUNBLFVBQUksQ0FBQyxLQUFMLEVBQVk7QUFDUixRQUFBLE1BQU0sR0FBRyxNQUFN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SCxHQUxEO0FBTUgiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcInVzZSBzdHJpY3RcIjtcbi8vIGltcG9ydCBmdW5jdGlvbnNcbmltcG9ydCBDbGFzc0xpc3RQb2x5ZmlsbCBmcm9tIFwiLi9tb2R1bGVzL2NsYXNzbGlzdF9wb2x5ZmlsbFwiO1xuaW1wb3J0IEZvckVhY2hQb2x5ZmlsbCBmcm9tIFwiLi9tb2R1bGVzL2ZvcmVhY2hfcG9seWZpbGxcIjtcbmltcG9ydCBGb2N1c0FjY2Vzc2liaWxpdHkgZnJvbSBcIi4vbW9kdWxlcy9mb2N1c19hY2Nlc3NpYmlsaXR5XCI7XG5pbXBvcnQgVHlwZVJhdGlvSW50ZXJwb2xhdGlvbiBmcm9tIFwiLi9tb2R1bGVzL3R5cGVfcmF0aW9faW50ZXJwb2xhdGlvblwiO1xuLypcbiAgICBwb2x5ZmlsbCB0byBlbmFibGUgdXNlIG9mIGZvckVhY2ggb24gbm9kZSBsaXN0cyBpbiBJRTExXG4qL1xuRm9yRWFjaFBvbHlmaWxsKCk7XG4vKlxuICAgIHBvbHlmaWxsIHRvIGFsbG93IHVzZSBvZiByZXBsYWNlIG1ldGhvZFxuICAgIG9uIGEgY2xhc3NMaXN0IGluIGludGVybmV0IGV4cGxvcmVyXG4qL1xuQ2xhc3NMaXN0UG9seWZpbGwoKTtcbi8qXG4gICAgaW50ZXJwb2xhdGUgYmV0d2VlbiB0eXBlIHJhdGlvIG1pbmltdW0gYW5kIG1heGltdW0gdmFsdWVzLFxuICAgIGFuZCBzdG9yZSB0aGUgcmVzdWx0IGluIGEgQ1NTIGN1c3RvbSBwcm9wZXJ0eVxuKi9cblR5cGVSYXRpb0ludGVycG9sYXRpb24oKTtcbi8qXG4gICAgYWxsb3cgZW5jaGFuY2VkIGZvY3VzIGRldGVjdGlvbiAoZGVwZW5kcyBvbiBhMTF5LmpzKVxuKi9cbkZvY3VzQWNjZXNzaWJpbGl0eSgpO1xuIiwiLypcbiAgICBwb2x5ZmlsbCB0byBhbGxvdyB1c2Ugb2YgcmVwbGFjZSBtZXRob2Qgb24gYSBjbGFzc0xpc3QgaW4gaW50ZXJuZXQgZXhwbG9yZXJcbiovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCEoXCJyZXBsYWNlXCIgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIl9cIikuY2xhc3NMaXN0KSkge1xuICAgICAgICBET01Ub2tlbkxpc3QucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbiAodG9rZW4sIHJlcGxhY2VtZW50VG9rZW4pIHtcbiAgICAgICAgICAgIGxldCB0b2tlbnMgPSB0aGlzLnRvU3RyaW5nKCkuc3BsaXQoXCIgXCIpO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggID0gdG9rZW5zLmluZGV4T2YodG9rZW4gKyBcIlwiKTtcbiAgICAgICAgICAgIGlmICh+aW5kZXgpIHtcbiAgICAgICAgICAgICAgICB0b2tlbnMgPSB0b2tlbnMuc2xpY2UoaW5kZXgpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlLmFwcGx5KHRoaXMsIHRva2Vucyk7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGQocmVwbGFjZW1lbnRUb2tlbik7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGQuYXBwbHkodGhpcywgdG9rZW5zLnNsaWNlKDEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG59XG4iLCIvKlxuICAgIGFsbG93IGVuY2hhbmNlZCBmb2N1cyBkZXRlY3Rpb24gKGRlcGVuZHMgb24gYTExeS5qcylcbiovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgLyogZ2xvYmFsIGFsbHkgKi9cbiAgICAvLyBpbmZvcm0gdGhlIGRldmVsb3BlciB0aGF0IGExMXkuanMgaGFzIGxvYWRlZFxuICAgIGNvbnNvbGUuaW5mbyhcImxvYWRlZCB2ZXJzaW9uXCIsIGFsbHkudmVyc2lvbiwgXCJvZiBhMTF5LmpzXCIpO1xuICAgIC8vIGRldGVjdCBmb2N1cyBzb3VyY2UgdXNpbmcgYTExeS5qcywgd2hpY2ggd2lsbCBiZSBzdG9yZWRcbiAgICAvLyBhcyBDU1MgY2xhc3NlcyBvbiB0aGUgYGh0bWxgIGVsZW1lbnRcbiAgICBjb25zdCBmb2N1c1NvdXJjZSA9IGFsbHkuc3R5bGUuZm9jdXNTb3VyY2UoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xufVxuIiwiLypcbiAgICBwb2x5ZmlsbCB0byBlbmFibGUgdXNlIG9mIGZvckVhY2ggb24gbm9kZSBsaXN0cyBpbiBJRTExXG4qL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGlmIChcIk5vZGVMaXN0XCIgaW4gd2luZG93ICYmICFOb2RlTGlzdC5wcm90b3R5cGUuZm9yRWFjaCkge1xuICAgICAgICBOb2RlTGlzdC5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgdGhpc0FyZykge1xuICAgICAgICAgICAgdGhpc0FyZyA9IHRoaXNBcmcgfHwgd2luZG93O1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB0aGlzW2ldLCBpLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG59XG4iLCJmdW5jdGlvbiBzY2FsZVJhdGlvIChjdXJyZW50Vmlld3BvcnRXaWR0aCwgbWluaW11bVZhbHVlLCBtYXhpbXVtVmFsdWUpIHtcbiAgICAvLyBzdG9yZSB0aGUgbWluaW11bSB2aWV3cG9ydCB3aWR0aCBhdCB3aGljaCBgLS1yYXRpb2BcbiAgICAvLyBjdXN0b20gcHJvcGVydHkgd2lsbCBiZSBzZXQuIHRoaXMgbXVzdCBtYXRjaCB2YWx1ZXNcbiAgICAvLyBzZXQgaW4gYGJyZWFrcG9pbnRzLnN0eWxgICYgYHR5cG9ncmFwaHkuc3R5bGAuXG4gICAgY29uc3QgbWluUmFuZ2UgPSA0ODA7XG4gICAgLy8gc3RvcmUgdGhlIG1heGltdW0gdmlld3BvcnQgd2lkdGggYXQgd2hpY2ggYC0tcmF0aW9gXG4gICAgLy8gY3VzdG9tIHByb3BlcnR5IHdpbGwgYmUgc2V0LiB0aGlzIG11c3QgbWF0Y2ggdmFsdWVzXG4gICAgLy8gc2V0IGluIGBicmVha3BvaW50cy5zdHlsYCAmIGB0eXBvZ3JhcGh5LnN0eWxgLlxuICAgIGNvbnN0IG1heFJhbmdlID0gMTY4MDtcbiAgICAvLyBjYWxjdWxhdGUgYW5kIHN0b3JlIHRoZSByYXRlIGF0IHdpY2ggb3VyIHJhdGlvIGNoYW5nZXNcbiAgICAvLyB3aGVuIHRoZSB2aWV3cG9ydCB3aWR0aCBjaGFuZ2VzIGJ5IDFweFxuICAgIGNvbnN0IHJhdGVPZkNoYW5nZSA9IChtYXhpbXVtVmFsdWUgLSBtaW5pbXVtVmFsdWUpIC8gKG1heFJhbmdlIC0gbWluUmFuZ2UpO1xuICAgIC8vIHN0b3JlIHRoZSBpbnRlcmNlcHQgKHRoZSB2YWx1ZSBvZiBZIHdoZW4gYWxsIFg9MClcbiAgICBjb25zdCB2YWx1ZUF0Vmlld3BvcnRaZXJvID0gbWluaW11bVZhbHVlIC0gcmF0ZU9mQ2hhbmdlICogbWluUmFuZ2U7XG4gICAgLy8gaWYgd2UgZm9sbG93IGEgbGluZWFyIHByb2dyZXNzaW9uIGZyb20gcmF0aW8gbSBhdCB2aWV3cG9ydCBNLFxuICAgIC8vIHRvIHJhdGlvIG4gYXQgdmlld3BvcnQgTiwgY2FsY3VsYXRlIGFuZCBzdG9yZSB0aGUgcmF0aW8gYXQgdmlld3BvcnQgWFxuICAgIGNvbnN0IGludGVycG9sYXRlZFJhdGlvID0gY3VycmVudFZpZXdwb3J0V2lkdGggKiByYXRlT2ZDaGFuZ2UgKyB2YWx1ZUF0Vmlld3BvcnRaZXJvO1xuICAgIC8vIHVzZSBgaW50ZXJwb2xhdGVkUmF0aW9gIHZhbHVlIGlmIGl0J3Mgd2l0aGluIHJhbmdlLlxuICAgIC8vIGlmIGl0IHdvdWxkIGJlIHNtYWxsZXIgdGhhbiB0aGUgc21hbGxlc3QgYWNjZXB0YWJsZSByYXRpbywgdXNlIHRoZSBzbWFsbGVzdC5cbiAgICAvLyBpZiBpdCB3b3VsZCBiZSBsYXJnZXIgdGhhbiB0aGUgbGFyZ2VzdCBhY2NlcHRhYmxlIHJhdGlvLCB1c2UgdGhlIGxhcmdlc3QuXG4gICAgY29uc3QgYm91bmRlZFJhdGlvID0gTWF0aC5tYXgobWluaW11bVZhbHVlLCBNYXRoLm1pbihpbnRlcnBvbGF0ZWRSYXRpbywgbWF4aW11bVZhbHVlKSk7XG4gICAgLy8gc3RvcmUgZmluYWwgcmF0aW8gaW4gQ1NTIGN1c3RvbSBwcm9wZXJ0eSBgLS1yYXRpb2BcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLXJhdGlvXCIsIGJvdW5kZWRSYXRpbyk7XG59XG4vKlxuICAgIGludGVycG9sYXRlIGJldHdlZW4gdHlwZSByYXRpbyBtaW5pbXVtIGFuZCBtYXhpbXVtIHZhbHVlcyxcbiAgICBhbmQgc3RvcmUgdGhlIHJlc3VsdCBpbiBhIENTUyBjdXN0b20gcHJvcGVydHlcbiovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgLy8gc3RvcmUgdGhlIGxvd2VzdCByYXRpbyB0byB1c2UgZm9yIG91ciB0eXBvZ3JhcGhpYyBzY2FsZS5cbiAgICAvLyBUaGlzIG11c3QgbWF0Y2ggdGhlIHZhbHVlIHNldCBpbiBgdHlwb2dyYXBoaWMtdmFyaWFibGVzLnN0eWxgLlxuICAgIGNvbnN0IHR5cGVSYXRpb0xvdyA9IDEuMTY7XG4gICAgLy8gc3RvcmUgdGhlIGhpZ2hlc3QgcmF0aW8gdG8gdXNlIGZvciBvdXIgdHlwb2dyYXBoaWMgc2NhbGUuXG4gICAgLy8gVGhpcyBtdXN0IG1hdGNoIHRoZSB2YWx1ZSBzZXQgaW4gYHR5cG9ncmFwaGljLXZhcmlhYmxlcy5zdHlsYC5cbiAgICBjb25zdCB0eXBlUmF0aW9IaWdoID0gMS4yODtcbiAgICAvLyBzdG9yZSB0aGUgY3VycmVudCB2aWV3cG9ydCB3aWR0aFxuICAgIGNvbnN0IHNjcmVlbldpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgLy8gYXBwbHkgdGhlIHJhdGlvIHNjYWxpbmcgZnVuY3Rpb24sIHRvIGFwcGx5XG4gICAgLy8gdGhlIHJhdGlvIGZvciB0aGUgY3VycmVudCB2aWV3cG9ydCB3aWR0aFxuICAgIHNjYWxlUmF0aW8oc2NyZWVuV2lkdGgsIHR5cGVSYXRpb0xvdywgdHlwZVJhdGlvSGlnaCk7XG4gICAgLy8gd2F0Y2ggZm9yIGNoYW5nZSBpbiB0aGUgdmlld3BvcnQgd2lkdGhcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gICAgICAgIC8vIHN0b3JlIHRoZSBjdXJyZW50IHZpZXdwb3J0IHdpZHRoXG4gICAgICAgIGNvbnN0IHNjcmVlbldpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIC8vIHJlY2FsY3VsYXRlIHJhdGlvIHdoZW4gY2hhbmdlIGlzIGRldGVjdGVkXG4gICAgICAgIHNjYWxlUmF0aW8oc2NyZWVuV2lkdGgsIHR5cGVSYXRpb0xvdywgdHlwZVJhdGlvSGlnaCk7XG4gICAgfSk7XG59XG4iXX0=
