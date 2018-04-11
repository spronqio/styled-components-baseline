import styled from 'styled-components';

export const Heading1 = styled.h1`
  color: #161a29;
  margin-top: 0;
  ${props => props.theme.sb.setFont({ type: 'heading', weight: 'bold' })};
  ${props =>
    props.theme.sb.baselineWithFontSize('alpha', 'heading', 3, 1, 'all')};
`;
export const Heading2 = styled.h2`
  margin-top: 0;
  ${props => props.theme.sb.setFont({ type: 'heading', weight: 'bold' })};
  ${props =>
    props.theme.sb.baselineWithFontSize('beta', 'heading', 3, 1, 'all')};
`;
export const Heading3 = styled.h3`
  margin-top: 0;
  ${props => props.theme.sb.setFont({ type: 'heading', weight: 'bold' })};
  ${props =>
    props.theme.sb.baselineWithFontSize('gamma', 'heading', 3, 1, 'all')};
`;
export const Heading4 = styled.h4`
  margin-top: 0;
  ${props => props.theme.sb.setFont({ type: 'heading', weight: 'bold' })};
  ${props =>
    props.theme.sb.baselineWithFontSize('delta', 'heading', 2, 0, 'all')};
`;
export const Heading5 = styled.h5`
  margin-top: 0;
  ${props => props.theme.sb.setFont({ type: 'heading', weight: 'bold' })};
  ${props =>
    props.theme.sb.baselineWithFontSize('epsilon', 'heading', 2, 0, 'all')};
`;
export const Heading6 = styled.h6`
  margin-top: 0;
  ${props => props.theme.sb.setFont({ type: 'heading', weight: 'bold' })};
  ${props =>
    props.theme.sb.baselineWithFontSize('zeta', 'heading', 2, 0, 'all')};
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
