/* eslint-disable camelcase */
import React, { useLayoutEffect, useRef, useState } from "react"
import { Box, Flex } from "~components/base"
import { theme } from "~theme"

import "./style.css"

const { space } = theme

const TilesLarge = ({ tiles }) => {
  const items = tiles.map(item => item[0])

  const [offset, setOffset] = useState(0)
  const refOffset_1 = useRef(null)
  const refOffset_2 = useRef(null)

  useLayoutEffect(() => {
    function updatePosition() {
      const pos1 =
        refOffset_1 && refOffset_1.current.getBoundingClientRect().bottom
      const pos2 =
        refOffset_2 && refOffset_2.current.getBoundingClientRect().bottom
      const getCur = () => {
        if (!pos1 || !pos2) return null
        return pos1 - pos2 - space[3]
      }
      const cur = getCur()
      setOffset(cur)
    }
    window.addEventListener("resize", updatePosition)
    setTimeout(() => updatePosition(), 10)

    return () => window.removeEventListener("resize", updatePosition)
  }, [])

  return (
    <Flex
      className="tile-items"
      css={`
        opacity: 0;
        // transition: opacity 100ms;
        opacity: ${offset > 0 ? 1 : 0};
      `}
    >
      <Flex
        className="tile-items__part"
        sx={{ flexWrap: "wrap" }}
        css={`
          width: 55%;
        `}
        pr={[3]}
      >
        <Box
          className="tile-items__part-item"
          css={`
            width: 55%;
          `}
          pr={[3]}
        >
          <Box id="second-offset-measure" ref={refOffset_2}>
            {items[0]}
          </Box>
          <Box
            pt={[3]}
            css={`
              // transition: margin 100ms;
              position: relative;
              width: 55%;
              margin-top: ${offset}px;
              float: right;
            `}
          >
            {items[3]}
          </Box>
        </Box>
        <Box
          id="first-offset-measure"
          className="tile-items__part-item tile-items__part-item--ref1"
          css={`
            width: 45%;
          `}
        >
          <Box className="ref1" ref={refOffset_1}>
            {items[1]}
          </Box>
        </Box>
      </Flex>
      <Box
        css={`
          width: 45%;
        `}
      >
        {items[2]}
      </Box>
    </Flex>
  )
}

export default TilesLarge
