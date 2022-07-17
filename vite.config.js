// vite.config.js
const { resolve } = require('path')
const { defineConfig } = require('vite')
import dns from 'dns'

dns.setDefaultResultOrder('verbatim')

/** @type {import('vite').UserConfig} */
module.exports = defineConfig({
  // server: {
  // },
  // preview: {
  //   host: "0.0.0.0",
  //   port: 5000
  // },
  // server: {
    // origin: 'http://0.0.0.0:8000',
    // host: "0.0.0.0",
    // port: 3000
  // },
  
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

