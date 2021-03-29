import React from "react"
import { arrayOf, shape, string } from "prop-types"
import { Link } from "gatsby"
import { List } from "~components/base"
import styled from "~theme"

const File = styled.li``

export default function FilesList({ files }) {
  return (
    <List>
      {files.map(file => {
        return (
          <File key={file.id}>
            <Link to={file.to} download>
              {`${file.name} > Download ${file.extension} ${file.size}`}
            </Link>
          </File>
        )
      })}
    </List>
  )
}

FilesList.propTypes = {
  files: arrayOf(
    shape({
      id: string.isRequired,
      extension: string.isRequired,
      size: string.isRequired,
      to: string.isRequired,
    })
  ).isRequired,
}
