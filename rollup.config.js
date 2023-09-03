import fs from 'fs';
import path from 'path';

import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import ts from 'rollup-plugin-ts'

// To handle css files
import postcss from 'rollup-plugin-postcss';

import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import image from '@rollup/plugin-image';


const packageJson = require('./package.json');

/** @type {import('rollup/dist/rollup').InputPluginOption[]} */
const plugins =  [
  peerDepsExternal(),
  resolve(),
  commonjs(),
  ts({ tsconfig: './tsconfig.build.json', include: ['src/**/*.ts', 'src/**/*.tsx'] }),
  postcss({
    extensions: ['*.css', '*.scss']
  }),
  terser(),
  image()
];

/** @type {import('rollup/dist/rollup').InputPluginOption[]} */
const typesPlugins = [
  peerDepsExternal(),
  resolve(),
  commonjs(),
  ts({ tsconfig: './tsconfig.types.json' })
]

const external = (/**@type {string}*/id) => {
  // avoid compile error with scss.d.ts files
  const name = id.split('/').pop()
  return name === 'scss';
}

const getComponentConfigs =  () => {
  const rootPath = path.resolve(__dirname, 'src', 'components');
  const directories = fs.readdirSync(rootPath).filter(dir => fs.statSync(path.resolve(rootPath,dir)).isDirectory());

  /** @type {import('rollup/dist/rollup').RollupOptions[]} */
  const results = directories.map(dir => ({
    input: path.join('src', 'components', dir, 'index.ts'),
    output: [
      {
        dir: path.resolve(path.dirname(packageJson.main),'components', dir),
        format: 'cjs',
        sourcemap: true
      }
    ],
    external,
    plugins
  }))

  return results;

  //console.info(util.inspect(configs, false, 5))
}

/** @type {import('rollup/dist/rollup').RollupOptions[]} */
const configs = [
  {
    input: 'src/index.ts',
    output: [
      {
        dir: path.dirname(packageJson.module),
        format: 'esm',
        sourcemap: true
      },
      {
        dir: path.dirname(packageJson.main),
        format: 'cjs',
        sourcemap: true
      }
    ],
    external,
    plugins
  },
  {
    input: 'src/types/index.ts',
    output: {
      dir: path.resolve(path.dirname(packageJson.main), 'types'),
      format: 'cjs'
    },
    external,
    plugins: typesPlugins
  },
  {
    input: 'src/tests/index.ts',
    output: {
      dir: path.resolve(path.dirname(packageJson.main), 'tests'),
      format: 'cjs',
      sourcemap: true
    },
    external,
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      ts({ tsconfig: './tsconfig.build.json', include: ['src/**/*.ts', 'src/**/*.tsx'] })
    ]
  },
  ...getComponentConfigs()
]

export default configs;