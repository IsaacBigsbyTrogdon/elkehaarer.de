import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import clsx from "clsx"
import { Box, List, ListItem } from "~components/base"
import BurgerMenu from "~components/BurgerMenu"
import Drawer from "~components/Drawer"

import styled, { theme, themeGet } from "~theme"

const { colors, breakpoints } = theme

const MenuWrapper = styled.nav`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 1000;

  @media (min-width: ${breakpoints.lg}px) {
    right: inherit;
    left: 80px;
  }
`

const MenuListItem = styled(ListItem)`
  padding: 7px 15px 10px;
  background-color: ${colors.secondary};

  &:first-child {
    padding-top: 15px;
  }

  @media (min-width: ${breakpoints.md}px) {
    background-color: white;

    &.frontpage {
      background-color: ${colors.secondary};
    }
  }

  @media (min-width: ${breakpoints.lg}px) {
    padding: 15px 15px 10px;

    &:last-child {
      position: fixed;
      right: 100px;
      bottom: 0;
    }

    &.active {
      background: white;
    }
  }
`

const BurgerMenuWrapper = ({ onClick }) => {
  return (
    <Box
      as="nav"
      css={`
        position: fixed;
        bottom: 0px;
        right: 10px;
        z-index: 999;
      `}
    >
      <BurgerMenu onClick={onClick} />
    </Box>
  )
}

const MenuList = styled(List)`
  margin-right: 30px;

  @media (min-width: ${breakpoints.lg}px) {
    display: flex;

    ${MenuListItem} {
      min-width: 190px;

      & + ${MenuListItem} {
        margin-left: 20px;
      }
    }
  }
`

export default function Menu({ frontpage }) {
  const location = useLocation()

  const [drawerStatus, setDrawerStatus] = useState(false)

  const handleBurgerClick = () => setDrawerStatus(!drawerStatus)

  const { menuItemsData } = useStaticQuery(graphql`
    query menuQuery {
      menuItemsData: allNodePage {
        nodes {
          id: drupal_internal__nid
          title
          path {
            alias
          }
        }
      }
    }
  `)

  const sort = items => {
    return [
      items.find(n => n.id === 3), // Documentation.
      items.find(n => n.id === 2), // Contact-vita.
      items.find(n => n.id === 1), // Homepage.
      items.find(n => n.id === 4), // Impressum.
    ]
  }

  const preBuild = items => {
    return items.map(item => {
      const values = { ...item }
      if (values.id === 1) {
        values.homepage = true
        values.path.alias = "/"
      }
      return item
    })
  }

  const getMenuItems = items => {
    return sort(preBuild(items))
      .filter(item => {
        return !(item.id === 1 && location.pathname === "/")
      })
      .map(item => {
        const data = {
          content: (
            <Link
              key={item.id}
              to={item.path.alias}
              dangerouslySetInnerHTML={{ __html: item.title }}
            />
          ),
          path: item.path.alias,
          id: item.id,
        }
        return data
        // return (
        //   <Link
        //     key={item.id}
        //     to={item.path.alias}
        //     dangerouslySetInnerHTML={{ __html: item.title }}
        //   />
        // )
      })
  }

  const menuItems = getMenuItems(menuItemsData.nodes)

  const isCurrent = cur => cur === location.pathname

  const getMenuItemClasses = item => {
    return clsx({ active: isCurrent(item.path), frontpage })
  }

  const mq = useMediaQuery(`(max-width: ${breakpoints.sm}px)`)

  return mq ? (
    <>
      <BurgerMenuWrapper onClick={handleBurgerClick} />
      <Drawer
        menuItems={menuItems}
        status={drawerStatus}
        setStatus={setDrawerStatus}
      />
    </>
  ) : (
    <MenuWrapper>
      <MenuList className="main-menu">
        {menuItems.map((item, key) => {
          return (
            <MenuListItem
              key={item.id}
              className={getMenuItemClasses(item.path)}
            >
              {item.content}
            </MenuListItem>
          )
        })}
      </MenuList>
    </MenuWrapper>
  )
}
