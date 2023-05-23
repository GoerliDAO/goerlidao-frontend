import react from "@vitejs/plugin-react";
import polyfillNode from "rollup-plugin-polyfill-node";
import { defineConfig } from "vite";
import svgrPlugin from "vite-plugin-svgr";
import viteTsconfigPaths from "vite-tsconfig-paths";
import commonjs from '@rollup/plugin-commonjs';

export default ({ mode }) => {
  return defineConfig({
    plugins: [
      react({
        include: "**/*.tsx",
      }),
      viteTsconfigPaths(),
      svgrPlugin(),
      { ...polyfillNode({ fs: true }), enforce: "post" },
      commonjs({
        include: 'node_modules/**',
        namedExports: {
          'node_modules/@emotion/memoize/dist/memoize.cjs.js': ['memoize']
        }
      }),
    ],
    resolve: {
      alias: {
        path: "rollup-plugin-node-polyfills/polyfills/path",
        fs: "rollup-plugin-node-polyfills/polyfills/fs",
        os: "rollup-plugin-node-polyfills/polyfills/os",
        Buffer: "rollup-plugin-node-polyfills/polyfills/buffer",
      },
    },
    build: {
      outDir: "./build",
      rollupOptions: {
        external: [
          '@uniswap/widgets',
        ],
      },
    },
    test: {
      setupFiles: "src/setupTests.tsx",
      environment: "jsdom", // or 'jsdom', 'node'
      globals: true,
      exclude: [
        "**/node_modules/**",
        "**/dist/**",
        "**/cypress/**",
        "**/.{idea,git,cache,output,temp}/**, **/src/typechain/**",
      ],
    },
    optimizeDeps: {
      include: ["@emotion/use-insertion-effect-with-fallbacks"],
    },
  });
};