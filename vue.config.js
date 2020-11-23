module.exports = {
    publicPath: './',
    outputDir: './docs',
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import '@/assets/style/mixin.scss';`
            }
        }
    }
};
