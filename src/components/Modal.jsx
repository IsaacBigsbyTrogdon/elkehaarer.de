import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Modal from "@material-ui/core/Modal"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { Box } from "theme-ui"

function rand() {
  return Math.round(Math.random() * 20) - 10
}

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
      [theme.breakpoints.down("sm")]: {
        width: "300px",
      },
      [theme.breakpoints.up("md")]: {
        width: "600px",
      },
      [theme.breakpoints.up("lg")]: {
        width: "800px",
        height: "80%",
      },
      backgroundColor: "#aaa",
      // maxHeight: "90%",
      // border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(4),
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
        .slider {
          margin: 0 auto;
        }
        .center {
          display: table;
        }
        .center img {
          display: table-cell;
          margin: auto;
        }

        .slick-prev:before,
        .slick-next:before {
          color: black;
        }
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
