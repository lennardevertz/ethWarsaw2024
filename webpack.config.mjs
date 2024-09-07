import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import * as url from 'url';
import path from 'path';
import webpack from 'webpack';
import CopyPlugin from 'copy-webpack-plugin';
import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';
import { config as loadEnvironmentVariables } from 'dotenv-safe';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export default (_env, argv) => {
  loadEnvironmentVariables({
    path: '.env',
  });

  return {
    mode: 'production',
    entry: {
      'webpage-script': './src/runtime/webpage-script.ts',
      'content-script': './src/runtime/content-script.ts',
      'service-worker': './src/runtime/service-worker.ts',
    },
    devtool: 'source-map',
    output: {
      path: path.resolve(__dirname, 'buildResults'),
      filename: '[name].js',
      publicPath: '',
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          { from: './src/runtime/manifest.json' },
        ],
      }),
      new NodePolyfillPlugin(),
      new webpack.EnvironmentPlugin(['UNISWAP_API_KEY', 'BRIAN_API_KEY']),
    ],
    resolve: {
      extensions: ['.ts', '.tsx', '...'],
      plugins: [new TsconfigPathsPlugin()],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /tailwind\.build\.css$/i,
          type: 'asset/source',
        },
      ],
    },
    optimization: {
      concatenateModules: false,
      minimize: false, // minimization causes runtime errors for some reason
      splitChunks: {
        chunks: () => false,
      },
    },
  };

}
