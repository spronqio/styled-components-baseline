import React from 'react';
import {
  Section,
  SingleMeasure
} from '@panacea/styled-components-baseline/Layouts';
import {
  Caption,
  Heading1,
  Heading2,
  Heading3,
  Paragraph
} from '@panacea/styled-components-baseline/Typography';
import Page from './components/Page';

export default () => (
  <Page>
    <Section>
      <SingleMeasure>
        <Heading1>Lorem ipsum dolor sit&nbsp;amet</Heading1>
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
      </SingleMeasure>
    </Section>
  </Page>
);
