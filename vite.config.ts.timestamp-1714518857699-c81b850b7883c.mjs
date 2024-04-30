// vite.config.ts
import react from "file:///D:/GoesToFullStackWebDev/PortoYuma/portoClient/node_modules/.pnpm/@vitejs+plugin-react@4.2.1_vite@5.2.8/node_modules/@vitejs/plugin-react/dist/index.mjs";
import million from "file:///D:/GoesToFullStackWebDev/PortoYuma/portoClient/node_modules/.pnpm/million@3.0.6_rollup@2.79.1/node_modules/million/dist/packages/compiler.mjs";
import { visualizer } from "file:///D:/GoesToFullStackWebDev/PortoYuma/portoClient/node_modules/.pnpm/rollup-plugin-visualizer@5.12.0_rollup@2.79.1/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import { defineConfig } from "file:///D:/GoesToFullStackWebDev/PortoYuma/portoClient/node_modules/.pnpm/vite@5.2.8_@types+node@20.11.28/node_modules/vite/dist/node/index.js";
import checker from "file:///D:/GoesToFullStackWebDev/PortoYuma/portoClient/node_modules/.pnpm/vite-plugin-checker@0.6.4_eslint@8.57.0_typescript@5.4.2_vite@5.2.8/node_modules/vite-plugin-checker/dist/esm/main.js";
import { VitePWA } from "file:///D:/GoesToFullStackWebDev/PortoYuma/portoClient/node_modules/.pnpm/vite-plugin-pwa@0.19.4_vite@5.2.8_workbox-build@7.0.0_workbox-window@7.0.0/node_modules/vite-plugin-pwa/dist/index.js";
import tsconfigPaths from "file:///D:/GoesToFullStackWebDev/PortoYuma/portoClient/node_modules/.pnpm/vite-tsconfig-paths@4.3.2_typescript@5.4.2_vite@5.2.8/node_modules/vite-tsconfig-paths/dist/index.mjs";
var pwaOptions = {
  registerType: "autoUpdate",
  manifest: {
    short_name: "porto-yuma",
    name: "Portofolio Web Yuma Nur Alfath",
    lang: "en",
    start_url: "/",
    background_color: "#FFFFFF",
    theme_color: "#FFFFFF",
    dir: "ltr",
    display: "standalone",
    prefer_related_applications: false,
    icons: [
      {
        src: "/assets/favicon.svg",
        purpose: "any",
        sizes: "48x48 72x72 96x96 128x128 256x256"
      }
    ]
  }
};
var vite_config_default = defineConfig({
  plugins: [
    million.vite({ auto: true }),
    react(),
    checker({
      typescript: true,
      eslint: { lintCommand: 'eslint "./src/**/*.{js,jsx,ts,tsx}"' }
    }),
    tsconfigPaths(),
    visualizer({ template: "sunburst" }),
    VitePWA(pwaOptions)
  ],
  server: {
    open: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxHb2VzVG9GdWxsU3RhY2tXZWJEZXZcXFxcUG9ydG9ZdW1hXFxcXHBvcnRvQ2xpZW50XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxHb2VzVG9GdWxsU3RhY2tXZWJEZXZcXFxcUG9ydG9ZdW1hXFxcXHBvcnRvQ2xpZW50XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9Hb2VzVG9GdWxsU3RhY2tXZWJEZXYvUG9ydG9ZdW1hL3BvcnRvQ2xpZW50L3ZpdGUuY29uZmlnLnRzXCI7LyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzICovXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IG1pbGxpb24gZnJvbSAnbWlsbGlvbi9jb21waWxlcic7XG5pbXBvcnQgeyB2aXN1YWxpemVyIH0gZnJvbSAncm9sbHVwLXBsdWdpbi12aXN1YWxpemVyJztcbmltcG9ydCB0eXBlIHsgUGx1Z2luT3B0aW9uIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCBjaGVja2VyIGZyb20gJ3ZpdGUtcGx1Z2luLWNoZWNrZXInO1xuaW1wb3J0IHR5cGUgeyBWaXRlUFdBT3B0aW9ucyB9IGZyb20gJ3ZpdGUtcGx1Z2luLXB3YSc7XG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSAndml0ZS1wbHVnaW4tcHdhJztcbmltcG9ydCB0c2NvbmZpZ1BhdGhzIGZyb20gJ3ZpdGUtdHNjb25maWctcGF0aHMnO1xuXG5jb25zdCBwd2FPcHRpb25zOiBQYXJ0aWFsPFZpdGVQV0FPcHRpb25zPiA9IHtcbiAgcmVnaXN0ZXJUeXBlOiAnYXV0b1VwZGF0ZScsXG4gIG1hbmlmZXN0OiB7XG4gICAgc2hvcnRfbmFtZTogJ3BvcnRvLXl1bWEnLFxuICAgIG5hbWU6ICdQb3J0b2ZvbGlvIFdlYiBZdW1hIE51ciBBbGZhdGgnLFxuICAgIGxhbmc6ICdlbicsXG4gICAgc3RhcnRfdXJsOiAnLycsXG4gICAgYmFja2dyb3VuZF9jb2xvcjogJyNGRkZGRkYnLFxuICAgIHRoZW1lX2NvbG9yOiAnI0ZGRkZGRicsXG4gICAgZGlyOiAnbHRyJyxcbiAgICBkaXNwbGF5OiAnc3RhbmRhbG9uZScsXG4gICAgcHJlZmVyX3JlbGF0ZWRfYXBwbGljYXRpb25zOiBmYWxzZSxcbiAgICBpY29uczogW1xuICAgICAge1xuICAgICAgICBzcmM6ICcvYXNzZXRzL2Zhdmljb24uc3ZnJyxcbiAgICAgICAgcHVycG9zZTogJ2FueScsXG4gICAgICAgIHNpemVzOiAnNDh4NDggNzJ4NzIgOTZ4OTYgMTI4eDEyOCAyNTZ4MjU2JyxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbn07XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgbWlsbGlvbi52aXRlKHsgYXV0bzogdHJ1ZSB9KSxcbiAgICByZWFjdCgpLFxuICAgIGNoZWNrZXIoe1xuICAgICAgdHlwZXNjcmlwdDogdHJ1ZSxcbiAgICAgIGVzbGludDogeyBsaW50Q29tbWFuZDogJ2VzbGludCBcIi4vc3JjLyoqLyoue2pzLGpzeCx0cyx0c3h9XCInIH0sXG4gICAgfSksXG4gICAgdHNjb25maWdQYXRocygpLFxuICAgIHZpc3VhbGl6ZXIoeyB0ZW1wbGF0ZTogJ3N1bmJ1cnN0JyB9KSBhcyB1bmtub3duIGFzIFBsdWdpbk9wdGlvbixcbiAgICBWaXRlUFdBKHB3YU9wdGlvbnMpLFxuICBdLFxuICBzZXJ2ZXI6IHtcbiAgICBvcGVuOiB0cnVlLFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sYUFBYTtBQUNwQixTQUFTLGtCQUFrQjtBQUUzQixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLGFBQWE7QUFFcEIsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sbUJBQW1CO0FBRTFCLElBQU0sYUFBc0M7QUFBQSxFQUMxQyxjQUFjO0FBQUEsRUFDZCxVQUFVO0FBQUEsSUFDUixZQUFZO0FBQUEsSUFDWixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixXQUFXO0FBQUEsSUFDWCxrQkFBa0I7QUFBQSxJQUNsQixhQUFhO0FBQUEsSUFDYixLQUFLO0FBQUEsSUFDTCxTQUFTO0FBQUEsSUFDVCw2QkFBNkI7QUFBQSxJQUM3QixPQUFPO0FBQUEsTUFDTDtBQUFBLFFBQ0UsS0FBSztBQUFBLFFBQ0wsU0FBUztBQUFBLFFBQ1QsT0FBTztBQUFBLE1BQ1Q7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGO0FBR0EsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsUUFBUSxLQUFLLEVBQUUsTUFBTSxLQUFLLENBQUM7QUFBQSxJQUMzQixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsTUFDTixZQUFZO0FBQUEsTUFDWixRQUFRLEVBQUUsYUFBYSxzQ0FBc0M7QUFBQSxJQUMvRCxDQUFDO0FBQUEsSUFDRCxjQUFjO0FBQUEsSUFDZCxXQUFXLEVBQUUsVUFBVSxXQUFXLENBQUM7QUFBQSxJQUNuQyxRQUFRLFVBQVU7QUFBQSxFQUNwQjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
