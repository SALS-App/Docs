import { SearchPlugin } from "vitepress-plugin-search";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [SearchPlugin({
        preset: 'score',
        context: true,
        tokenize: 'full',
        previewLength: 10,
        buttonLabel: "Search",
        placeholder: "Search docs",
    })],
});