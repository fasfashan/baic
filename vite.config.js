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
        singlePost1:
          "news/resmi-mengaspal-baic-bj-40-plus-dan-baic-x-55-dua-produk-unggulan-baic-kini-hadir-meramaikan-pasar-otomotif-indonesia/index.html",
        singlePost2:
          "news/13-dealership-baic-indonesia-9-kota-besar-2024/index.html",
        singlePost3:
          "news/baic-international-menandatangani-kesepakatan-penjualan-merk-mobil-baic-di-indonesia-melalui-pt-jio-distribusi-indonesia/index.html",
        X55Models: "X55-Models/index.html",
        aboutUs: "about-us/index.html",
        reqPriceList: "request-price-list/index.html",
      },
    },
  },
});
