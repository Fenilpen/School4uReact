import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:3001,
  }
})

// you can change the port no using 
// server:{
  //   port:(Your Choosen Port No),
  // }
// using here 3001 
