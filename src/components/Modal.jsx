import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Modal from "@material-ui/core/Modal"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { Box } from "theme-ui"
import styled, { theme as myTheme } from "~theme"

const { breakpoints, modalSizes } = myTheme

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

export default function Wrapper({
  children,
  setModalContent,
  setStatus,
  status,
  width,
}) {
  const useStyles = makeStyles(theme => ({
    paper: {
      position: "absolute",
      maxWidth: `${modalSizes.sm.w}px`,
      width: `${modalSizes.sm.w}px`,
      [theme.breakpoints.up("768")]: {
        maxWidth: `${modalSizes.md.w}px`,
        width: `${modalSizes.md.w}px`,
        height: "80%",
        maxHeight: "80%",
      },
      [theme.breakpoints.up("lg")]: {
        maxWidth: `${modalSizes.lg.w}px`,
        height: "80%",
        maxHeight: "80%",
      },
      backgroundColor: "#aaa",
      // maxHeight: "90%",
      // border: "2px solid #000",
      boxShadow: theme.shadows[5],
      // padding: theme.spacing(4),
    },
  }))

  const classes = useStyles()
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle)

  const handleChange = change => setStatus(change)

  const body = (
    <Box
      style={modalStyle}
      className={classes.paper}
      id="modal-wrapper"
      css={`
        * {
          max-height: 600px;

          @media (min-width: ${breakpoints.md}px) {
            max-height: 600px;
          }
        }
        // .slick-prev:before,
        // .slick-next:before {
        //   color: black;
        // }
      `}
    >
      {children}
    </Box>
  )

  return (
    <Modal
      open={status}
      onClose={() => {
        handleChange(false)
        setModalContent(null)
      }}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {body}
    </Modal>
  )
}
