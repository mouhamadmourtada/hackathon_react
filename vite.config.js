import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
})

VITE_API_URL = "http://localhost:8001/api/"
