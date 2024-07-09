import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        news: "news/index.html",
        contact: "contact/index.html",
        book: "book-a-test-drive/index.html",
        BJ40: "BJ40/index.html",
        singlePost: "news/single-post/index.html",
        X55Models: "X55-Models/index.html",
      },
    },
  },
});
