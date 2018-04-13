import React from 'react';
import SyntaxHighlighter, {
  registerLanguage
} from 'react-syntax-highlighter/prism-light';
import jsx from 'react-syntax-highlighter/languages/prism/jsx';
import duotoneLight from 'react-syntax-highlighter/styles/prism/duotone-light';

import {
  Section,
  SingleMeasure
} from '@panacea/styled-components-baseline/Layouts';
import {
  Blockquote,
  Caption,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Paragraph,
  Pre
} from '@panacea/styled-components-baseline/Typography';
import Page from './components/Page';

registerLanguage('jsx', jsx);
const codeExample = `<Section>
  <SingleMeasure>
    <Heading1>Baseline first typography.</Heading1>
    <Heading2>+ responsive modular scale.</Heading2>
    <Caption>
      Set text on the web to a baseline grid with Styled Components & rems
    </Caption>
    <Pre>
      <Code>
        <SyntaxHighlighter language="jsx" style={duotoneLight}>
          {codeExample}
        </SyntaxHighlighter>
      </Code>
    </Pre>
  </SingleMeasure>
</Section>`;

export default () => (
  <Page>
    <Section>
      <SingleMeasure>
        <Heading1>Baseline first typography.</Heading1>
        <Heading2>+ responsive modular scale.</Heading2>
        <Caption>
          Set text on the web to a baseline grid with Styled Components & rems
        </Caption>
        {/* <Pre>
          <Code>
            <SyntaxHighlighter language="jsx" style={duotoneLight}>
              {codeExample}
            </SyntaxHighlighter>
          </Code>
        </Pre> */}
      </SingleMeasure>
    </Section>
    <Section>
      <SingleMeasure>
        <Heading1>Lorem ipsum</Heading1>
        <Caption>Labore reprehenderit corporis ullam distinctio ex.</Caption>
        <Paragraph>
          Consectetur adipisicing elit, alias at autem magna aliquid{' '}
          <a href="#">quam proident</a> quis aliquam. temporibus minus eius
          veniam cupidatat ex, voluptas fuga, quos, mollitia incidunt do officia
          facilis. molestiae consequat excepturi laborum perferendis tempor
          minim eiusmod minim minus quia&nbsp;sint.
        </Paragraph>

        <Paragraph>
          Quos atque officia quod. <i>Suscipit delectus</i> cupidatat, quia
          nulla numquam aute cillum proident. Maiores iusto culpa molestias quam
          id tenetur saepe impedit reiciendis itaque ducimus itaque nostrud.
          Tempor aliquip, culpa earum itaque sed consequatur minus aliquip
          reprehenderit nihil veniam tempora do maxime omnis reiciendis
          elit&nbsp;tempora.
        </Paragraph>
        <Heading2>
          Voluptates mollitia quod tempore laboris&nbsp;commodi
        </Heading2>

        <Paragraph>
          Proident dolores corrupti consequatur voluptatibus labore commodi
          quos. <b>Incidunt mollitia</b> tempora assumenda laborum voluptate
          accusamus dolore optio incididunt. Maiores at duis consequatur
          corrupti consectetur, aliquam optio commodo accusamus distinctio,
          necessitatibus&nbsp;nostrum.
        </Paragraph>

        <Paragraph>
          Optio, nesciunt, quo, fugiat, blanditiis at quas excepturi quae
          maiores vel corrupti voluptate cupiditate nemo! In, eius quidem harum
          quibusdam ratione non. Iste, deleniti, fugit, voluptas aperiam qui
          adipisci provident ab accusantium possimus eveniet
          voluptate&nbsp;consectetur!
        </Paragraph>

        <Heading2>Repellat optio</Heading2>

        <Heading3>Ad perferendis omnis</Heading3>

        <Paragraph>
          Pariatur animi quis. Dolorem cupiditate{' '}
          <a href="#">praesentium duis</a> iusto corrupti nobis nostrud,
          exercitation consequatur. Nulla minim dignissimos reprehenderit
          voluptatem. Recusandae delectus iure vel asperiores saepe dolorum
          omnis eu aliquam&nbsp;similique.
        </Paragraph>

        <Blockquote>
          <Paragraph>
            Fuga rerum laboris officia cupidatat, excepteur aliquid ut quis
            facere, cumque harum optio dignissimos. Duis repellat tempore dolor
            blanditiis alias impedit officiis ut&nbsp;consectetur.
          </Paragraph>
        </Blockquote>
      </SingleMeasure>
    </Section>
    <Section>
      <SingleMeasure>
        <Heading1>Heading level 1</Heading1>
        <Heading2>Heading level 2</Heading2>
        <Heading3>Heading level 3</Heading3>
        <Heading4>Heading level 4</Heading4>
        <Heading5>Heading level 5</Heading5>
        <Heading6>Heading level 6</Heading6>

        <Paragraph>
          Paragraph with <b>bold</b>, <i>italic</i>, <a href="#">link</a> and{' '}
          <Code>code</Code> styles.
        </Paragraph>

        <Blockquote>
          <Paragraph>Blockquote</Paragraph>
        </Blockquote>

        <Caption>Caption text</Caption>
      </SingleMeasure>
    </Section>
  </Page>
);
