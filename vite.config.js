export default {
  server: {
    host: '0.0.0.0',
    hmr: {
      clientPort: 443,
    }
  }
}

/* original config
// it works but turns out I didn't need all the other options

// vite.config.js
const { resolve } = require('path')
const { defineConfig } = require('vite')
import dns from 'dns'

dns.setDefaultResultOrder('verbatim')

module.exports = defineConfig({
  // server: {
  // },
  preview: {
    host: "0.0.0.0",
    port: 5000
  },
  server: {
    // origin: 'http://0.0.0.0:8000',
    host: "0.0.0.0",
    port: 3000,
    hmr: {
      clientPort: 443,
    }
  },
  
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // single: resolve(__dirname, 'single_sketch.html'),
        // multi: resolve(__dirname, 'multi_sketch.html')
      }
    }
  }
})
*/