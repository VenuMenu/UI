import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Body } from '../Texts'

const VERTICAL = 'vertical'
const HORIZONTAL = 'horizontal'

const CardContent = styled.div`
  font-family: Raleway;
  padding: ${props => (props.noPadding ? '0px' : '15px;')};
`

const ContentWrapper = styled.div`
  display: flex;
  ${props => {
    if (props.type === HORIZONTAL) {
      return 'flex-direction: row;'
    }
    if (props.type === VERTICAL) {
      return 'flex-direction: column;'
    }
  }}
`

const Image = styled.img`
  ${props => {
    if (props.type === HORIZONTAL) {
      return 'max-width: 45%; '
    }
    if (props.type === VERTICAL) {
      return 'max-width: 100%;'
    }
  }}
  flex: 1 1 auto;
  object-fit: cover;
`

export default ({ children, title, noPadding, content, image, type }) => {
  return (
    <CardContent data-ui="card-content" noPadding={noPadding}>
      <ContentWrapper type={type}>
        {image && <Image src={image} type={type} alt="content-image" />}
        {content && content}
      </ContentWrapper>
    </CardContent>
  )
}

CardContent.propTypes = {
  title: PropTypes.string,
  content: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  image: PropTypes.string,
  noPadding: PropTypes.bool,
  type: PropTypes.oneOf(['vertical', 'horizontal', 'full']),
}
