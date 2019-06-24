import { IConfig } from 'umi-types';
import {resolve as reso} from "path";

// ref: https://umijs.org/config/
const config: IConfig =  {
  history: 'hash',
  targets: {
    ie: 11,
  },
  publicPath: "./",
  disableCSSModules: true,
  treeShaking: true,
  alias: {
    '@': reso(__dirname, './src'),
    '@v': reso(__dirname, './public'),
    '@u': reso(__dirname, './src/utils')
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      experimentalDecorators: true,
      title: 'hooks-ts-Visualization',
      dll: true,
      locale: {
        enable: true,
        default: 'en-US',
      },
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
}

export default config;
