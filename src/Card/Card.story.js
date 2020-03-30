import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardContent } from './index'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { boolean, select, text, number } from '@storybook/addon-knobs/react'
import '@storybook/addon-knobs/register'
import { Body, SubText } from '../Texts'
import styled from 'styled-components'

const CardContentsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const CardImage = styled.img`
  flex-grow: 1;
  max-width: 100%;
`

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`

storiesOf('Card', module)
  .add('Vertical Card', () => {
    let stories = []
    return (
      <Card noPadding type={'vertical'}>
        <CardContent
          type={'vertical'}
          content={
            <Contents>
              <Body bold>ABCDEFG</Body>
              <SubText subdued>HIJKLMN</SubText>
              <Body>HIJKLMN</Body>
              <Body>HIJKLMN</Body>
            </Contents>
          }
          image="http://via.placeholder.com/640x360"
          noPadding
        />
      </Card>
    )
  })
  .add('Horizontal Card', () => {
    let stories = []
    return (
      <Card noPadding type={'horizontal'}>
        <CardContent
          type={'horizontal'}
          content={
            <Contents>
              <Body bold>ABCDEFG</Body>
              <SubText subdued>HIJKLMN</SubText>
              <Body>HIJKLMN</Body>
              <Body>HIJKLMN</Body> <Body>HIJKLMN</Body>
              <Body>HIJKLMN</Body>
            </Contents>
          }
          image="http://via.placeholder.com/640x360"
          noPadding
        />
      </Card>
    )
  })
