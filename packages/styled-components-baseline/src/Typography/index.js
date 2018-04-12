import styled from 'styled-components';

export const Paragraph = styled.p`
  margin-top: 0;
  ${props => props.theme.sb.setFont({ type: 'body', weight: 'normal' })};
  ${props => props.theme.sb.baselineWithFontSize('zeta', 'body', 2, 2, 'all')};
`;

export const Blockquote = styled.blockquote`
  margin-top: 0;
  margin-bottom: 0;
  ${props => {
    console.log(props.theme.sb);
    return `// hi`;
  }};
  ${Paragraph} {
    ${props =>
      props.theme.sb.baselineWithFontSize('zeta', 'body', 2, 3, 'all')};
    border-left: 0.15rem solid ${props => props.theme.sb.linkColour};
    padding-left: 1rem;
    font-style: italic;
  }
  ${props => props.theme.sb.breakpoint('break-1')(`margin-left: -1rem;`)};
`;
export const Caption = Paragraph.extend`
  ${props => props.theme.sb.setFont({ type: 'heading', weight: 'regular' })};
  ${props =>
    props.theme.sb.baselineWithFontSize('theta', 'heading', 2, 2, 'all')};
  ${props => `color: ${props.theme.sb.captionColour};`};
`;
export const Heading1 = styled.h1`
  color: #161a29;
  margin-top: 0;
  ${props => props.theme.sb.setFont({ type: 'heading', weight: 'bold' })};
  ${props =>
    props.theme.sb.baselineWithFontSize('alpha', 'heading', 3, 1, 'all')};
  + ${Caption} {
    margin-top: -1rem;
  }
`;
export const Heading2 = styled.h2`
  margin-top: 0;
  ${props => props.theme.sb.setFont({ type: 'heading', weight: 'bold' })};
  ${props =>
    props.theme.sb.baselineWithFontSize('beta', 'heading', 3, 1, 'all')};
  + ${Caption} {
    margin-top: -1rem;
  }
`;
export const Heading3 = styled.h3`
  margin-top: 0;
  ${props => props.theme.sb.setFont({ type: 'heading', weight: 'bold' })};
  ${props =>
    props.theme.sb.baselineWithFontSize('gamma', 'heading', 3, 1, 'all')};
  + ${Caption} {
    margin-top: -1rem;
  }
`;
export const Heading4 = styled.h4`
  margin-top: 0;
  ${props => props.theme.sb.setFont({ type: 'heading', weight: 'bold' })};
  ${props =>
    props.theme.sb.baselineWithFontSize('delta', 'heading', 2, 0, 'all')};
  + ${Caption} {
    margin-top: -1rem;
  }
`;
export const Heading5 = styled.h5`
  margin-top: 0;
  ${props => props.theme.sb.setFont({ type: 'heading', weight: 'bold' })};
  ${props =>
    props.theme.sb.baselineWithFontSize('epsilon', 'heading', 2, 0, 'all')};
  + ${Caption} {
    margin-top: -1rem;
  }
`;
export const Heading6 = styled.h6`
  margin-top: 0;
  ${props => props.theme.sb.setFont({ type: 'heading', weight: 'bold' })};
  ${props =>
    props.theme.sb.baselineWithFontSize('zeta', 'heading', 2, 0, 'all')};
  + ${Caption} {
    margin-top: -1rem;
  }
`;
export const Button = styled.button`
  color: white;
  background-color: ${props => props.theme.sb.callToAction};
  border: 1px solid ${props => props.theme.sb.callToAction};
  box-shadow: none;
  border-radius: 3px;
  padding: 0.8rem 1rem 0.8rem 1.2rem;
  &:hover {
    background-color: ${props => props.theme.sb.darkAccent};
    border: 1px solid ${props => props.theme.sb.darkAccent};
  }

  ${props => props.theme.sb.setFont({ type: 'heading' })};
  ${props => props.theme.sb.fontSize('iota', 'all')};

  letter-spacing: 0.2rem;
  &[disabled] {
    background-color: ${props => props.theme.sb.lightAccent};
    border: 1px solid ${props => props.theme.sb.lightAccent};
  }
`;

export const Pre = styled.pre`
  ${props => props.theme.sb.setFont({ type: 'monospace', weight: 'regular' })};
  ${props => props.theme.sb.fontSize('theta', 'all')};
  ${props => `background-color: ${props.theme.sb.codeBackgroundColour};`};
  line-height: 1rem;
  display: block;
  margin-bottom: 2rem;
  padding: 1rem;
  white-space: pre;
  white-space: pre-wrap;
  word-break: break-all;
  word-wrap: break-word;
`;

export const Code = styled.code`
  ${props => props.theme.sb.setFont({ type: 'monospace', weight: 'regular' })};
  ${props => `background-color: ${props.theme.sb.codeBackgroundColour};`};
`;
export const HR = styled.hr`
  hr {
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 50%,
      $captionColour 50%
    );
    background-position: 0 50%;
    background-repeat: repeat-x;
    background-size: 100% 0.15rem;
    border: 0;
    margin: 0;
    padding-bottom: 3rem;
    padding-top: 3rem;
  }
`;
