import path from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import * as child from "child_process";

// https://vitejs.dev/config/
export default defineConfig({
    publicDir: "./public",
    build: {
        outDir: "./dist/static"
    },

    plugins: [
        vue(),
    ],

    css: {
        preprocessorOptions: {
            sass: {
                additionalData: `
    @import "./src/css/include.sass"
    `
            },
        },
    },

    resolve: {
        alias: {
            '@': path.resolve(__dirname),
        },
    },

    define: {
        '__APP_VERSION__': JSON.stringify(process.env.npm_package_version),
        '__GIT_HASH__': JSON.stringify(child.execSync('git rev-parse --short HEAD').toString().trim()),
    },
})
