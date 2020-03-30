import React from 'react'
import styled from 'styled-components'
import { withKnobs } from '@storybook/addon-knobs/react'
import { setOptions } from '@storybook/addon-options'
import { configure, addDecorator } from '@storybook/react'

setOptions({ name: 'VenuMenu UI' })

configure(() => {
  addDecorator(withKnobs)
}, module)
