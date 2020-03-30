import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs/react'
import { primary } from '../../assets/colors'

import * as Texts from './index'

storiesOf('Texts', module)
  .add('DisplayHeader', () => (
    <Texts.DisplayHeader
      subdued={boolean('subdued')}
      uppercase={boolean('uppercase')}
    >
      {text('Content', 'content')}
    </Texts.DisplayHeader>
  ))
  .add('DisplayXLarge', () => (
    <Texts.DisplayXLarge
      subdued={boolean('subdued')}
      uppercase={boolean('uppercase')}
    >
      {text('Content', 'content')}
    </Texts.DisplayXLarge>
  ))
  .add('DisplayLarge', () => (
    <Texts.DisplayLarge
      subdued={boolean('subdued')}
      reverse={boolean('reverse')}
      bold={boolean('bold')}
      uppercase={boolean('uppercase')}
    >
      {text('Content', 'content')}
    </Texts.DisplayLarge>
  ))
  .add('Body', () => (
    <Texts.Body
      subdued={boolean('subdued')}
      reversed={boolean('reversed')}
      disabled={boolean('disabled')}
      bold={boolean('bold')}
      link={boolean('link')}
      uppercase={boolean('uppercase')}
    >
      {text('Content', 'content')}
    </Texts.Body>
  ))
  .add('SubText', () => (
    <Texts.SubText subdued={boolean('subdued')}>
      {text('Content', 'content')}
    </Texts.SubText>
  ))
  .add('Custom color', () => (
    <Texts.Body
      subdued={boolean('subdued')}
      reversed={boolean('reversed')}
      disabled={boolean('disabled')}
      bold={boolean('bold')}
      link={boolean('link')}
      color={text('color', primary.red)}
    >
      {text('Content', 'content')}
    </Texts.Body>
  ))
