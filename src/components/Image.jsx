import * as React from "react"
import { shape, string } from "prop-types"
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"

const Image = ({ alt, data }) => {
  const image = getImage(data?.localFile)

  return (
    <>
      <GatsbyImage image={image} alt={alt} />
    </>
  )
}

Image.propTypes = {
  alt: string.isRequired,
  data: shape({
    localFile: shape({}),
  }).isRequired,
}
export default Image
