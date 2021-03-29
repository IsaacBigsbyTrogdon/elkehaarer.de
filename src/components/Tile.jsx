import * as React from "react"
import { shape, string } from "prop-types"
import { Box, Flex } from "theme-ui"
import styled from "styled-components"
import Image from "~components/Image"
import Button from "~components/Button"

const Inner = styled.div`
  opacity: 0;
  transition: opacity 100ms;
  display: flex;

  &:hover {
    opacity: 1;
  }
`

const Tile = ({ data, index, setSlideIndex, setModalStatus }) => {
  const { color, cropped, image, alt } = data

  return (
    <Box
      bg={[color]}
      css={`
        overflow: hidden;
      `}
    >
      <Inner className="tile__inner">
        <Button
          attributes={{ type: "button" }}
          style={{ lineHeight: "0" }}
          onClick={() => {
            setModalStatus(true)
            setSlideIndex(index)
          }}
        >
          <Image data={cropped} alt={alt} />
        </Button>
      </Inner>
    </Box>
  )
}

export default Tile
