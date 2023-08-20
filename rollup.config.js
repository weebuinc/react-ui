
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import ts from "rollup-plugin-ts"
import { dts } from "rollup-plugin-dts";

// To handle css files
import postcss from "rollup-plugin-postcss";

import terser from "@rollup/plugin-terser";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import image from '@rollup/plugin-image';


const packageJson = require("./package.json");

const external = (/**@type {string}*/id) => {
  // avoid compile error with scss.d.ts files
  const name = id.split('/').pop()
  return name === 'scss';
}

/** @type {import('rollup/dist/rollup').RollupOptions[]} */
const configs = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    external,
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      ts({ tsconfig: "./tsconfig.build.json", include: ['src/**/*.ts', 'src/**/*.tsx'] }),
      postcss({
        extensions: ['*.css', '*.scss']
      }),
      terser(),
      image()
    ]
  },
  {
    input: "lib/esm/index.d.ts",
    output: [{ file: "lib/index.d.ts", format: "esm" }],
    plugins: [dts()],

    external: [/\.s?css$/], // telling rollup anything that is .css aren't part of type exports 
  }
]

export default configs;