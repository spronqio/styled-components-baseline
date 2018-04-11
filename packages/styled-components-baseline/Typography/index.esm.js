import styled from 'styled-components';

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

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  margin-top: 0;\n  ", ";\n  ", ";\n"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  ", ";\n  ", ";\n  ", ";\n"]),
    _templateObject3 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  color: #161a29;\n  margin-top: 0;\n  ", ";\n  ", ";\n  + ", " {\n    margin-top: -1rem;\n  }\n"]),
    _templateObject4 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  margin-top: 0;\n  ", ";\n  ", ";\n  + ", " {\n    margin-top: -1rem;\n  }\n"]),
    _templateObject5 = /*#__PURE__*/ _taggedTemplateLiteral(["\n  color: white;\n  background-color: ", ";\n  border: 1px solid ", ";\n  box-shadow: none;\n  border-radius: 3px;\n  padding: 0.8rem 1rem 0.8rem 1.2rem;\n  &:hover {\n    background-color: ", ";\n    border: 1px solid ", ";\n  }\n\n  ", ";\n  ", ";\n\n  letter-spacing: 0.2rem;\n  &[disabled] {\n    background-color: ", ";\n    border: 1px solid ", ";\n  }\n"]);
var Paragraph = styled.p(_templateObject, function (props) {
  return props.theme.sb.setFont({
    type: 'body',
    weight: 'normal'
  });
}, function (props) {
  return props.theme.sb.baselineWithFontSize('zeta', 'body', 2, 2, 'all');
});
var Caption = Paragraph.extend(_templateObject2, function (props) {
  return props.theme.sb.setFont({
    type: 'heading',
    weight: 'regular'
  });
}, function (props) {
  return props.theme.sb.baselineWithFontSize('theta', 'heading', 2, 2, 'all');
}, function (props) {
  return "color: ".concat(props.theme.sb.captionColour, ";");
});
var Heading1 = styled.h1(_templateObject3, function (props) {
  return props.theme.sb.setFont({
    type: 'heading',
    weight: 'bold'
  });
}, function (props) {
  return props.theme.sb.baselineWithFontSize('alpha', 'heading', 3, 1, 'all');
}, Caption);
var Heading2 = styled.h2(_templateObject4, function (props) {
  return props.theme.sb.setFont({
    type: 'heading',
    weight: 'bold'
  });
}, function (props) {
  return props.theme.sb.baselineWithFontSize('beta', 'heading', 3, 1, 'all');
}, Caption);
var Heading3 = styled.h3(_templateObject4, function (props) {
  return props.theme.sb.setFont({
    type: 'heading',
    weight: 'bold'
  });
}, function (props) {
  return props.theme.sb.baselineWithFontSize('gamma', 'heading', 3, 1, 'all');
}, Caption);
var Heading4 = styled.h4(_templateObject4, function (props) {
  return props.theme.sb.setFont({
    type: 'heading',
    weight: 'bold'
  });
}, function (props) {
  return props.theme.sb.baselineWithFontSize('delta', 'heading', 2, 0, 'all');
}, Caption);
var Heading5 = styled.h5(_templateObject4, function (props) {
  return props.theme.sb.setFont({
    type: 'heading',
    weight: 'bold'
  });
}, function (props) {
  return props.theme.sb.baselineWithFontSize('epsilon', 'heading', 2, 0, 'all');
}, Caption);
var Heading6 = styled.h6(_templateObject4, function (props) {
  return props.theme.sb.setFont({
    type: 'heading',
    weight: 'bold'
  });
}, function (props) {
  return props.theme.sb.baselineWithFontSize('zeta', 'heading', 2, 0, 'all');
}, Caption);
var Button = styled.button(_templateObject5, function (props) {
  return props.theme.sb.callToAction;
}, function (props) {
  return props.theme.sb.callToAction;
}, function (props) {
  return props.theme.sb.darkAccent;
}, function (props) {
  return props.theme.sb.darkAccent;
}, function (props) {
  return props.theme.sb.setFont({
    type: 'heading'
  });
}, function (props) {
  return props.theme.sb.fontSize('iota', 'all');
}, function (props) {
  return props.theme.sb.lightAccent;
}, function (props) {
  return props.theme.sb.lightAccent;
});

export { Paragraph, Caption, Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, Button };
