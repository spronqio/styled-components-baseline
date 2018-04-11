import styled from 'styled-components';

export const Section = styled.div`
  ${props => props.theme.sb.clearfix};
  margin: 0 auto;
  position: relative;
  width: 94%;
  padding: 2rem 0;
  ${props => props.theme.sb.breakpoint('break-3')(props.theme.sb.maxWidth(2))};
  ${props => props.theme.sb.breakpoint('break-4')(props.theme.sb.maxWidth(3))};
  ${props => props.theme.sb.breakpoint('break-1')(`padding: 3rem 0;`)};
  ${props => props.theme.sb.breakpoint('break-2')(`padding: 4rem 0;`)};
`;

export const SingleMeasure = styled.div`
  margin: 0 auto;

  ${props => props.theme.sb.measure('all')};
`;

export const Column = styled.div`
  ${props => props.theme.sb.measure(0)};
  margin: 0 auto;
  width: 100%;

  ${({ theme: { sb: { breakpoint, gutterWidths } } }) =>
    breakpoint('break-1')(
      `float: left;
  margin: initial;
  max-width: initial;
  padding-left: ${gutterWidths.small};
  padding-right: ${gutterWidths.small};`
    )};
  ${props =>
    props.theme.sb.breakpoint('break-3')(
      `padding-left: ${props.theme.sb.gutterWidths.medium};
  padding-right: ${props.theme.sb.gutterWidths.medium};`
    )};
`;

export const ColumnDuo = Column.extend`
  ${props =>
    props.theme.sb.breakpoint('break-1')(
      `width: 50%;

&:nth-of-type(2n+3) {
  clear: left;
}

&:nth-of-type(n+3) {
  margin-top: 3rem;
}`
    )};
`;
export const ColumnTrio = Column.extend`
  ${props =>
    props.theme.sb.breakpoint('break-1')(
      `width: 33%;

&:nth-of-type(3n+4) {
  clear: left;
}

&:nth-of-type(n+4) {
  margin-top: 3rem;
}`
    )};

  ${props =>
    props.theme.sb.breakpoint('break-3')(`
        p {
          ${props.theme.ms.fontBaseline('eta', 'body', 2, 2, 3)}
        }
        `)};
  ${props =>
    props.theme.sb.breakpoint('break-4')(
      `
        p {
          ${props.theme.ms.fontBaseline('eta', 'body', 2, 2, 4)}
        }
        `
    )};
`;
