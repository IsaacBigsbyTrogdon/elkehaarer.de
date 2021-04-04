/* eslint-disable import/prefer-default-export */

import { arrayOf, bool, func, node, oneOfType, shape, string } from "prop-types"

/**
 * @param {string} string
 */
export const cleanString = str => str && str.replace(/<\/?[^>]+(>|$)/g, "")

// export const extractImage = ({ node }) => {
//   return node?.relationships?.image?.localFile?.childImageSharp
// }
