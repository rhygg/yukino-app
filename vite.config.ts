import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    base: "/yukino-app/",
    plugins: [vue()],
});
