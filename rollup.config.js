import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel'
import url from '@rollup/plugin-url'

import packageJson from "./package.json";

export default {
    input: "./src/index.ts",
    output: [
        {
            name: 'mut',
            file: packageJson.main,
            format: "cjs",
            sourcemap: true,
            exports: 'named',
            globals: { react: 'React' },
        },
    ],
    plugins: [
        peerDepsExternal(),
        url(),
        resolve({
            extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json']
        }),
        commonjs(),
        postcss({
            extract: true,
            extract: false,
            modules: true,
            writeDefinitions: true,
            use: ['sass'],
        }),
        nodeResolve(),
        babel({
            babelrc: false,
            presets: [
                "@babel/preset-env",
                "@babel/react",
                "@babel/preset-typescript",
            ],
            extensions: [".js", ".jsx", ".ts", ".tsx"],
            exclude: 'node_modules/**'
        }),
    ],
    external: ['react', 'react-dom'],
};
