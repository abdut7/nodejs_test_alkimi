const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack')
const dotenv = require('dotenv').config({path: __dirname +'/config/env/serviceConfig.env'});
const dotenv2 = require('dotenv').config({path: './libs/core/config/env/appConfig.env'});
/**
 * parsed env files passing to webpack config
 */
module.exports = {
       entry: __dirname+'/server.ts',
        target: 'node',
        plugins: [
          new webpack.DefinePlugin({
            'process.env': JSON.stringify({...dotenv.parsed,...dotenv2.parsed})
      })
        ],
        module: {
         
          rules: [
            {
              test: /\.ts$/,
              use: [
                'ts-loader',
              ]
            },
            {
              test: /\.(env)$/,
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: './config'
            }
          }
          ]
       
        },
        output: {
          path: path.resolve('./build/user'),
          filename: 'server.js'
        },
        resolve: {
          modules: [path.resolve('node_modules'),path.resolve('libs'),path.resolve('microservices/user-service')],
          extensions: ['*','.ts','.js','.json'],
         
        },
        // externals: [nodeExternals({
          
        //     // load non-javascript files with extensions, presumably via loaders
        //     whitelist: [/\.(?!(?:jsx?|json)$).{1,5}$/i],
          
        // })],
      }

    
