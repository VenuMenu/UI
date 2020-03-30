import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const VERTICAL = 'vertical'
const HORIZONTAL = 'horizontal'
const FULL = 'full'

const StyeldCard = styled.div`
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  display: flex;
  ${props => {
    if (props.type === HORIZONTAL) {
      return 'width: 285px;'
    }
    if (props.type === FULL) return 'max-width: 180px;'
    if (props.type === VERTICAL) return 'max-width: 235px;  max-height: 330px;'
  }}
  font-family: Raleway;
  padding: 0px;
  overflow: hidden;

  ${props => {
    if (props.type === HORIZONTAL) {
      return 'max-height: 120px;'
    }
    if (props.type === FULL) return 'max-width: 180px;'
    if (props.type === VERTICAL) return 'max-width: 235px;  max-height: 330px;'
  }}
`

const Card = ({ children, type }) => {
  return (
    <StyeldCard data-ui="card" type={type}>
      {children}
    </StyeldCard>
  )
}

Card.propTypes = {
  type: PropTypes.oneOf(['vertical', 'horizontal', 'full']),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
}

export default Card
