# vue3-docker-starter

> docker-compose, vite, vue3, vue-router, pinia, tailwindcss, flowbite

## Development

```bash
docker-compose up -d
docker-compose exec app npm install
docker-compose exec app npm run dev
```

Access to localhost at port 3000 [http://localhost:3000](http://localhost:3000)

Hooking into the container

```bash
docker-compose exec app /bin/bash
```

## Using `npm` command from host

```bash
docker-compose exec app npm ...
# For example:
docker-compose exec app npm install -g npm@8.18.0
```

## Setting up the Project for Docker

If you want to change default port (3000), the port must be set to match the one in the `docker-compose.yml` file.

Open the `vite.config.js` file and change the server object with the port field to the configuration:

```js
import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {     
    port: 3000    // <-- change port
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
```

## Tailwind Cheat Sheet
* No 1: [NerdCave](https://nerdcave.com/tailwind-cheat-sheet)
* No 2: [LeCoupa](https://github.com/LeCoupa/awesome-cheatsheets/blob/master/frontend/tailwind.css)
* No 3: [umeshmk](https://umeshmk.github.io/Tailwindcss-cheatsheet/)

## VS Code Tailwind Extension

* [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
* [Headwind](https://marketplace.visualstudio.com/items?itemName=heybourn.headwind)