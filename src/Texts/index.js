import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { primary, grayscale } from '../../assets/colors'

const primaryColors = Object.values(primary)
const grayscaleColors = Object.values(grayscale)

const TextsPropTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
  ]).isRequired,
  subdued: PropTypes.bool,
  color: PropTypes.oneOf([...primaryColors, ...grayscaleColors]),
  uppercase: PropTypes.bool,
}

const commonTextStyle = css`
  color: ${props => {
    if (props.color) return props.color
    if (props.reverse) return grayscale.white
    return props.subdued ? grayscale.regular : grayscale.black
  }};

  font-family: Raleway;

  ${({ uppercase }) => {
    if (uppercase) return 'text-transform: uppercase;'
  }}
`

export const DisplayHeader = styled.div`
  ${commonTextStyle}
  font-size: 50px;
  line-height: 100px;
  font-weight: bold;
`

DisplayHeader.propTypes = TextsPropTypes

export const DisplayXLarge = styled.div`
  ${commonTextStyle}
  font-size: 35px;
  line-height: 45px;
  font-weight: bold;
`

DisplayHeader.propTypes = TextsPropTypes

export const DisplayLarge = styled.div`
  ${commonTextStyle}
  font-size: 24px;
  line-height: 15px;
  ${({ bold }) => {
    if (bold) return 'font-weight: bold;'
  }}

  ${({ reversed }) => {
    if (reversed) return `color: ${primary.whte}`
  }}
`

DisplayLarge.propTypes = {
  ...TextsPropTypes,
  reversed: PropTypes.bool,
  bold: PropTypes.bool,
}

export const DisplayMedium = styled.div`
  ${commonTextStyle}
  font-size: 13px;
  line-height: 15px;
  ${({ bold }) => {
    if (bold) return 'font-weight: bold;'
  }}

  ${({ reversed }) => {
    if (reversed) return `color: ${primary.whte}`
  }}
`

DisplayMedium.propTypes = {
  ...TextsPropTypes,
  reversed: PropTypes.bool,
  bold: PropTypes.bool,
}

export const Body = styled.div`
  ${commonTextStyle}
  font-size: 14px;
  line-height: 15px;
  ${props => {
    if (props.subdued) {
      return `color: ${grayscale.regular};`
    }
    if (props.disabled) {
      return `color: ${grayscale.light};`
    }

    if (props.reversed) {
      return `color: ${grayscale.white};
      `
    }

    if (props.link) {
      return `color: ${primary.red};
        font-weight: bold;
        cursor: pointer;
      `
    }

    return `color: ${props.color ? props.color : grayscale.black};`
  }}

  ${({ bold }) => {
    if (bold) {
      return `font-weight: bold;`
    }
  }}
`

Body.propTypes = {
  ...TextsPropTypes,
  reversed: PropTypes.bool,
  disabled: PropTypes.bool,
  link: PropTypes.bool,
  bold: PropTypes.bool,
}

export const SubText = styled.div`
  ${commonTextStyle}
  font-size: 12px;
  line-height: 13px;
  ${props => {
    if (props.subdued) {
      return `color: ${grayscale.regular};`
    }

    return `color: ${props.color ? props.color : grayscale.black};`
  }}

  ${({ bold }) => {
    if (bold) {
      return `font-weight: bold;`
    }
  }}
`

SubText.propTypes = {
  ...TextsPropTypes,
  reversed: PropTypes.bool,
  disabled: PropTypes.bool,
  link: PropTypes.bool,
  bold: PropTypes.bool,
}
