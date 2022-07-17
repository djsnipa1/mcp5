export default {
  // The url to load
  url: 'http://localhost:4000',

  // Url dependendent on building locally (dev = true) or build for deployment
  url: (dev) =>
    dev ? 'http://localhost:4000' : 'https://website.com/visualistion',

  // Load list of plugins, first argument is the default list of plugins
  // This list can be filtered and extended with custom plugins.
  plugins: (defaultPlugins) => [...defaultPlugins],

  // Load custom controls
  controls: (defaultControls) => [...defaultControls],

  // Read plugin pages for specific settings
  settings: {},
};