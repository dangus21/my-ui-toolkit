import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";

import packageJson from "./package.json";

export default {
    input: "./src/index.ts",
    output: [
        {
            name: 'mut',
            file: packageJson.main,
            format: "umd",
            sourcemap: true,
            globals: { react: 'React' },
        },
    ],
    plugins: [
        peerDepsExternal(),
        typescript(),
        resolve(),
        commonjs(),
        postcss({
            extract: false,
            modules: true,
            use: ['sass'],
        }),
    ],
    external: ['react', 'react-dom'],
};
