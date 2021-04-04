import { func } from "prop-types"
import React from "react"
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined"

const BurgerMenu = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      <MenuOutlinedIcon fontSize="large" />
    </button>
  )
}

BurgerMenu.propTypes = {
  onClick: func,
}

BurgerMenu.defaultProps = {
  onClick: null,
}

export default BurgerMenu
