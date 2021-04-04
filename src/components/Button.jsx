import * as React from "react"
import { shape, string } from "prop-types"
import styled from "styled-components"

const Container = styled.button``

const Button = ({ attributes, children, onClick, style }) => {
  return (
    <Container {...attributes} onClick={onClick} style={style}>
      {children}
    </Container>
  )
}

export default Button
