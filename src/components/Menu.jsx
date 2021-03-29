import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"

import { Box, List, ListItem } from "~components/base"

import styled, { theme, themeGet } from "~theme"

const { colors, breakpoints } = theme

const MenuList = styled(List)`
  @media (min-width: ${themeGet("breakpoints.sm", "768px")}) {
    display: flex;
  }
`

const MenuListItem = styled(ListItem)`
  background-color: ${colors.secondary};
  // Why doesn't this work?
  // background-color: ${themeGet("colors.secondary", "green")};
`

const MenuWrapper = styled.nav`
  position: fixed;
  bottom: 0;
  right: 0;
`

export default function Menu() {
  const location = useLocation()

  const { menuItems } = useStaticQuery(graphql`
    query menuQuery {
      menuItems: allNodePage {
        nodes {
          id
          title
          path {
            alias
          }
        }
      }
    }
  `)

  const isCurrentItem = () => false
  // const isCurrentItem = (current, pathname) => current === pathname
  // menuItems.sort((a,b) => )
  console.log("🚀 ~ file: Menu.jsx ~ line 51 ~ Menu ~ menuItems", menuItems)
  return (
    <MenuWrapper>
      <MenuList className="main-menu">
        {menuItems.nodes.map(item => {
          return (
            !isCurrentItem(item.path.alias, location.pathname) && (
              <MenuListItem key={item.id}>
                <Link
                  to={item.path.alias}
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
              </MenuListItem>
            )
          )
        })}
      </MenuList>
    </MenuWrapper>
  )
}
