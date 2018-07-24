module.exports = {
  plugins: [
    require('postcss-import')(),
    require('postcss-nested')(),
    require('postcss-responsive-type')(),
    require('postcss-cssnext')({
      features: {
        customProperties: {
          warnings: false
        }
      }
    }),
    require('postcss-assets')()
  ]
}
