/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const resolve = require('path').resolve

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        '@bulma' : resolve(__dirname, 'src/bulmaElements'),
        '@layout': resolve(__dirname, 'src/components/layout'),
        '@image' : resolve(__dirname, 'src/components/image')
      }
    },
  });
}
