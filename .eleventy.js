module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('/src/index.css');
    eleventyConfig.addPassthroughCopy('/src/images');
    eleventyConfig.addPassthroughCopy('/src/icons');
    eleventyConfig.addPassthroughCopy('/src/inventory');
    eleventyConfig.addPassthroughCopy('/src/admin');

        
    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}