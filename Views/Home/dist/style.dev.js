"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = exports.Input = exports.RoundedIcon = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    width: 85%;\n    height: 50px;\n    align-items: center;\n    justify-content: center;\n    background-color: #33FF99;  \n    border-bottom-left-radius: 15px;\n    border-bottom-right-radius: 15px;\n    margin-bottom: 64px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    width: 85%;\n    padding: 20px;\n    background-color: #ffffff;\n    border-top-left-radius: 15px;\n    border-top-right-radius: 15px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    width: 80px;\n    height: 80px;\n    border-radius: 50px;\n    padding: 5px;\n    background-color: #ffffff;\n    margin-bottom: -48px;\n    z-index: 9;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n    background-color: #F5FCFF;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].View(_templateObject());

exports.Container = Container;

var RoundedIcon = _styledComponents["default"].Image(_templateObject2());

exports.RoundedIcon = RoundedIcon;

var Input = _styledComponents["default"].TextInput(_templateObject3());

exports.Input = Input;

var Button = _styledComponents["default"].TouchableOpacity(_templateObject4());

exports.Button = Button;