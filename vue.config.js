const webpack = require("webpack");

module.exports = {
    publicPath: './',
    outputDir: './docs',
    configureWebpack: {
        //由于使用jquery ui 中的组件， 这里注册全局jquery对象
        resolve: {
            extensions: [".js"],
            alias: {
                vue$: "vue/dist/vue.esm.js", 
                jquery: "jquery/dist/jquery.min.js"
                
            }
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "windows.jQuery": "jquery"
            })
        ]
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import '@/assets/style/mixin.scss';`
            }
        }
    }
};
