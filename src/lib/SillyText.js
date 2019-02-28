import React from 'react'
import styled from 'styled-components'

const MainText = styled.h1`
    color: pink
`
export default ({ text }) => (
  <MainText>Silly {text}</MainText>
)
