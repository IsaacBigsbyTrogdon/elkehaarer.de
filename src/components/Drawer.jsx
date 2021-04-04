import React from "react"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import Button from "@material-ui/core/Button"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import { Box } from "~components/base"
import styled, { theme, themeGet } from "~theme"

const { colors, breakpoints } = theme

const useStyles = makeStyles({
  paper: {
    backgroundColor: colors.secondary,
  },
})

const Drawer = ({ menuItems, status, setStatus }) => {
  const classes = useStyles()

  const handleEvent = value => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setStatus(value)
  }

  const getItems = () => {
    return (
      menuItems && (
        <Box
          css={`
            a {
              width: 100%;
            }
          `}
          role="presentation"
        >
          <List>
            {menuItems.map((menuItem, key) => {
              const { id, content } = menuItem
              return (
                <ListItem
                  button
                  key={id}
                  onClick={handleEvent(false)}
                  onKeyDown={handleEvent(false)}
                >
                  {content}
                </ListItem>
              )
            })}
          </List>
          {/* <Divider /> */}
        </Box>
      )
    )
  }

  return (
    <div>
      <SwipeableDrawer
        classes={{ paper: classes.paper }}
        anchor="bottom"
        open={status}
        onClose={handleEvent(false)}
        onOpen={handleEvent(true)}
      >
        {getItems()}
      </SwipeableDrawer>
    </div>
  )
}

export default Drawer
