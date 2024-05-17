'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

var TimeRoller = function TimeRoller(_ref) {
  var range = _ref.range,
    unit = _ref.unit,
    selectedValue = _ref.selectedValue,
    setSelectedValue = _ref.setSelectedValue;
  var ulRef = React.useRef(null);
  React.useEffect(function () {
    var ulElement = ulRef.current;
    var handleScroll = function handleScroll() {
      var scrollTop = ulElement.scrollTop,
        scrollHeight = ulElement.scrollHeight,
        clientHeight = ulElement.clientHeight;
      var scrolled = scrollTop / (scrollHeight - clientHeight);
      var index = Math.round(scrolled * (range.length - 1));
      setSelectedValue(range[index]);
    };
    ulElement.addEventListener("scroll", handleScroll);
    return function () {
      ulElement.removeEventListener("scroll", handleScroll);
    };
  }, [range, setSelectedValue]);
  React.useEffect(function () {
    var ulElement = ulRef.current;
    var index = range.indexOf(selectedValue);
    if (index !== -1) {
      var scrollTo = index / (range.length - 1) * (ulElement.scrollHeight - ulElement.clientHeight);
      ulElement.scrollTop = scrollTo;
    }
  }, []);
  var styles = {
    scroll: {
      msOverflowStyle: "none",
      // IE and Edge
      scrollbarWidth: "none" // Firefox
    },
    boldValue: {
      fontSize: "16pt",
      fontWeight: "bold",
      color: "#00274C"
    },
    rollerOuter: {
      position: "relative",
      width: "100%",
      border: "1px solid black",
      height: "3rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontSize: "14pt",
      margin: 0,
      padding: 0
    },
    scrollList: {
      scrollSnapType: "y mandatory",
      height: "3rem",
      overflowY: "scroll",
      width: "66.666%",
      scrollbarWidth: "none"
    },
    scrollLi: {
      height: "3rem",
      scrollSnapAlign: "start",
      listStyleType: "none"
    },
    scrollLi2: {
      height: "100%",
      scrollSnapAlign: "start",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#9C9C9C"
    },
    unit: {
      width: "33.333%",
      color: "#626262"
    },
    webkitScrollbar: "\n      .example::-webkit-scrollbar {\n        display: none;\n      }\n    " // Chrome
  };
  return /*#__PURE__*/React__default["default"].createElement("div", {
    style: styles.rollerOuter
  }, /*#__PURE__*/React__default["default"].createElement("ul", {
    style: _objectSpread2(_objectSpread2({}, styles.scroll), styles.scrollList),
    ref: ulRef
  }, /*#__PURE__*/React__default["default"].createElement("style", null, styles.webkitScrollbar), range.map(function (value) {
    return /*#__PURE__*/React__default["default"].createElement("li", {
      key: value,
      style: selectedValue === value ? _objectSpread2(_objectSpread2({}, styles.boldValue), styles.scrollLi2) : styles.scrollLi2
    }, value);
  })), /*#__PURE__*/React__default["default"].createElement("p", {
    style: styles.unit
  }, unit));
};

exports["default"] = TimeRoller;
