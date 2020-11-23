// const webpack = require("webpack");
// const CompressionPlugin = require('compression-webpack-plugin');//引入gzip压缩插件
module.exports = {
    publicPath: './',
//     lintOnSave: false,
//     productionSourceMap: false,
//     configureWebpack: {
//         //由于使用jquery ui 中的组件， 这里注册全局jquery对象
//         resolve: {
//             extensions: [".js"],
//             alias: {
//                 vue$: "vue/dist/vue.esm.js", 
//                 jquery: "jquery/dist/jquery.min.js"
                
//             }
//         },
//         plugins: [
//             new webpack.ProvidePlugin({
//                 $: "jquery",
//                 jQuery: "jquery",
//                 "windows.jQuery": "jquery"
//             }),
//             new CompressionPlugin({//gzip压缩配置
//                 test:/\.js$|\.html$|\.css/,//匹配文件名
//                 threshold:10240,//对超过10kb的数据进行压缩
//                 deleteOriginalAssets:false,//是否删除原文件
//             })
//         ]
//     },
    outputDir: './docs',
//     css: {
//         loaderOptions: {
//             sass: {
//                 prependData: `@import '@/assets/style/mixin.scss';`
//             }
//         }
//     }
};
