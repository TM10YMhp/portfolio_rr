import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig({
  plugins: [vanillaExtractPlugin(), tailwindcss(), reactRouter()],
  resolve: {
    tsconfigPaths: true,
  },
  // server: {
  //   proxy: {
  //     "/.well-known/appspecific/com.chrome.devtools.json": {
  //       target: "http://localhost:5173", // o tu puerto
  //       bypass: (req, res) => {
  //         console.log("bypass");
  //         if (!res) return false;
  //         res.statusCode = 204;
  //         res.end();
  //         return false;
  //       },
  //     },
  //   },
  // },
});
