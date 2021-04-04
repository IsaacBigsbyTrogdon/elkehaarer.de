/* eslint-disable camelcase */
import React, { useEffect, useRef, useState } from "react"
import { Box, Flex } from "~components/base"
import styled from "~theme"

const TilesMedium = ({ tiles }) => {
  const items = tiles.map(item => item[0])
  return (
    <Flex flexDirection="column" css="">
      <Flex
        pb={3}
        css={`
          ${Box}:nth-child(1) {
            width: 55%;
          }
          ${Box}:nth-child(2) {
            width: 45%;
          }
        `}
      >
        <Box mr={3}>{items[0]}</Box>
        <Box>{items[1]}</Box>
      </Flex>

      <Flex
        flexDirection="column"
        css={`
          ${Box}:nth-child(1) {
            width: 75%;
            margin-left: auto;
          }
          ${Box}:nth-child(2) {
            width: 45%;
          }
        `}
      >
        <Box mb={3}>{items[2]}</Box>
        <Box>{items[3]}</Box>
      </Flex>
    </Flex>
  )
}

export default TilesMedium
