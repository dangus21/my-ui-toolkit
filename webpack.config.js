const webpack = require('webpack');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const postcssNormalize = require('postcss-normalize');

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const outputPath = path.join(__dirname, "dist")
const port = process.env.PORT || 3000;

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

module.exports = function(){
    const getStyleLoaders = (cssOptions, preProcessor) => {
        const loaders = [
            require.resolve('style-loader'),
            {
                loader: MiniCssExtractPlugin.loader,
                options: { publicPath: '../../' },
            },
            {
                loader: require.resolve('css-loader'),
                options: cssOptions,
            },
            {
                // Options for PostCSS as we reference these options twice
                // Adds vendor prefixing based on your specified browser support in
                // package.json
                loader: require.resolve('postcss-loader'),
                options: {
                    // Necessary for external CSS imports to work
                    // https://github.com/facebook/create-react-app/issues/2677
                    postcssOptions: {
                        plugins: [
                            require('postcss-flexbugs-fixes'),
                            require('postcss-preset-env')({
                                autoprefixer: {
                                    flexbox: 'no-2009',
                                },
                                stage: 3,
                            }),
                            // Adds PostCSS Normalize as the reset css with default options,
                            // so that it honors browserslist config in package.json
                            // which in turn let's users customize the target behavior as per their needs.
                            postcssNormalize(),
                        ],
                        sourceMap: true,
                    },
                },
            },
        ].filter(Boolean);
        if (preProcessor) {
            loaders.push(
                {
                    loader: require.resolve('resolve-url-loader'),
                    options: {
                        sourceMap: true,
                    },
                },
                {
                    loader: require.resolve(preProcessor),
                    options: {
                        sourceMap: true,
                    },
                }
            );
        }
        return loaders;
    };
    return {
        entry: './src/index.ts',
        target: "web",
        mode: 'production',
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'index.js',
        },
        resolve: {
            extensions: [".js", ".jsx", ".json", ".ts", ".tsx", ".scss"],
        },
        module: {
            rules: [
                {
                    test: sassModuleRegex,
                    use: getStyleLoaders(
                        {
                            importLoaders: 3,
                            sourceMap: true,
                            modules: {
                                getLocalIdent: getCSSModuleLocalIdent,
                            },
                        },
                        'sass-loader'
                    ),
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "bundle.css"
            })
        ],
        optimization: {
            minimize: true,
        },
    }
}
