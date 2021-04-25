import * as React from "react"
import { shape, string } from "prop-types"
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"

const Image = ({ alt, className, data }) => {
  const image = getImage(data?.localFile)

  return (
    <>
      <GatsbyImage image={image} alt={alt} className={className} />
    </>
  )
}

Image.propTypes = {
  alt: string.isRequired,
  className: string,
  data: shape({
    localFile: shape({}),
  }).isRequired,
}

Image.defaultProps = {
  className: null,
}

export default Image
