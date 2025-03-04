import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Allows external access
    port: Number(process.env.PORT) || 3000, // Convert PORT to a number
    strictPort: true, // Prevents port conflicts
    allowedHosts: ["candidate-selector-3.onrender.com"], 
  },
});