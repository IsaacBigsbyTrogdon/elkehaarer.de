import * as React from "react"
import { func, number, shape, string } from "prop-types"
import { Box, Flex } from "theme-ui"
import styled from "styled-components"
import clsx from "clsx"
import Image from "~components/Image"
import Button from "~components/Button"

const Inner = styled.div`
  opacity: 0;
  transition: opacity 100ms;
  display: flex;

  &:hover {
    opacity: 1;
  }

  &.active {
    opacity: 1;
  }
`

const Tile = ({
  data,
  index,
  // setSlideIndex,
  // setModalStatus,
  slidesStatus,
  setSlidesStatus,
}) => {
  const { color, cropped, alt } = data

  return (
    <Box
      bg={[color]}
      css={`
        overflow: hidden;
      `}
      className="tile-findMe"
    >
      <Inner
        className={clsx({ tile__inner: true, active: slidesStatus === index })}
      >
        {/* <Button
          attributes={{ type: "button" }}
          style={{ lineHeight: "0" }}
          onClick={() => {
            // const newStatus = index !== slidesStatus ? index : null
            // setSlidesStatus(newStatus)
            // setModalStatus(true)
            // setSlideIndex(index)
          }}
        >
        </Button> */}
        <Image data={cropped} alt={alt} />
      </Inner>
    </Box>
  )
}

Tile.propTypes = {
  data: shape({
    alt: string.isRequired,
    color: string.isRequired,
    cropped: shape({}).isRequired,
  }).isRequired,
  index: number.isRequired,
  // setModalStatus: func.isRequired,
  // setSlideIndex: func.isRequired,
}

export default Tile
