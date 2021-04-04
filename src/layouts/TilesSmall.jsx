/* eslint-disable camelcase */
import React, { useEffect, useRef, useState } from "react"
import { Box, Flex } from "~components/base"
import styled from "~theme"

const TilesSmall = ({ tiles }) => {
  return (
    <Flex
      flexDirection="column"
      css={`
        align-items: flex-start;
      `}
    >
      {tiles.map(tile => {
        const [content, id] = tile
        return (
          <Box
            key={id}
            css={`
              & + ${Box} {
                padding-top: 20px;
              }

              &:nth-child(1) {
                width: 80%;
              }

              &:nth-child(2) {
                width: 70%;
                margin-left: auto;
              }

              &:nth-child(3) {
                // nothing.
              }

              &:nth-child(4) {
                width: 60%;
              }
            `}
          >
            {content}
          </Box>
        )
      })}
    </Flex>
  )
}

export default TilesSmall
