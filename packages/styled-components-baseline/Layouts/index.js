'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = _interopDefault(require('styled-components'));

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  ", ";\n  margin: 0 auto;\n  position: relative;\n  width: 94%;\n  padding: 2rem 0;\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  margin: 0 auto;\n\n  ", ";\n"]),
    _templateObject3 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  ", ";\n  margin: 0 auto;\n  width: 100%;\n\n  ", ";\n  ", ";\n"]),
    _templateObject4 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  ", ";\n"]),
    _templateObject5 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  ", ";\n\n  ", ";\n  ", ";\n"]);
var Section = styled.div(_templateObject, function (props) {
  return props.theme.sb.clearfix;
}, function (props) {
  return props.theme.sb.breakpoint('break-3')(props.theme.sb.maxWidth(2));
}, function (props) {
  return props.theme.sb.breakpoint('break-4')(props.theme.sb.maxWidth(3));
}, function (props) {
  return props.theme.sb.breakpoint('break-1')("padding: 3rem 0;");
}, function (props) {
  return props.theme.sb.breakpoint('break-2')("padding: 4rem 0;");
});
var SingleMeasure = styled.div(_templateObject2, function (props) {
  return props.theme.sb.measure('all');
});
var Column = styled.div(_templateObject3, function (props) {
  return props.theme.sb.measure(0);
}, function (_ref) {
  var _ref$theme$sb = _ref.theme.sb,
      breakpoint = _ref$theme$sb.breakpoint,
      gutterWidths = _ref$theme$sb.gutterWidths;
  return breakpoint('break-1')("float: left;\n  margin: initial;\n  max-width: initial;\n  padding-left: ".concat(gutterWidths.small, ";\n  padding-right: ").concat(gutterWidths.small, ";"));
}, function (props) {
  return props.theme.sb.breakpoint('break-3')("padding-left: ".concat(props.theme.sb.gutterWidths.medium, ";\n  padding-right: ").concat(props.theme.sb.gutterWidths.medium, ";"));
});
var ColumnDuo = Column.extend(_templateObject4, function (props) {
  return props.theme.sb.breakpoint('break-1')("width: 50%;\n\n&:nth-of-type(2n+3) {\n  clear: left;\n}\n\n&:nth-of-type(n+3) {\n  margin-top: 3rem;\n}");
});
var ColumnTrio = Column.extend(_templateObject5, function (props) {
  return props.theme.sb.breakpoint('break-1')("width: 33%;\n\n&:nth-of-type(3n+4) {\n  clear: left;\n}\n\n&:nth-of-type(n+4) {\n  margin-top: 3rem;\n}");
}, function (props) {
  return props.theme.sb.breakpoint('break-3')("\n        p {\n          ".concat(props.theme.ms.fontBaseline('eta', 'body', 2, 2, 3), "\n        }\n        "));
}, function (props) {
  return props.theme.sb.breakpoint('break-4')("\n        p {\n          ".concat(props.theme.ms.fontBaseline('eta', 'body', 2, 2, 4), "\n        }\n        "));
});

exports.Section = Section;
exports.SingleMeasure = SingleMeasure;
exports.Column = Column;
exports.ColumnDuo = ColumnDuo;
exports.ColumnTrio = ColumnTrio;
