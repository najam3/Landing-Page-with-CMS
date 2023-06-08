module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/index.css');
    eleventyConfig.addPassthroughCopy('/src/images');
    eleventyConfig.addPassthroughCopy('/src/inventory');
    
    return {
        dir: {
            input: "src",
            output: "_site"
        }
    }
}