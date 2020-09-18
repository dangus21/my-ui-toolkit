import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import typescript from "rollup-plugin-typescript2";

import packageJson from "./package.json";

export default {
    external: ['react', 'react-dom', 'clsx'],
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
        resolve({
            extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss']
        }),
        postcss({
            modules: false,
            writeDefinitions: true,
            use: ['sass'],
        }),
        typescript(),
        babel({
            babelrc: false,
            presets: [
                "@babel/preset-env",
                "@babel/react",
                "@babel/preset-typescript",
            ],
            extensions: [".js", ".jsx", ".ts", ".tsx"],
            exclude: 'node_modules/**',
            babelHelpers: 'bundled',
        }),
        nodeResolve(),
        commonjs({ include: 'node_modules/**' }),
    ],

};
