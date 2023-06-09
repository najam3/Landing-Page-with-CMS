module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/index.css');
    eleventyConfig.addPassthroughCopy('./src/script.js');
    eleventyConfig.addPassthroughCopy('./src/new.js');
    eleventyConfig.addPassthroughCopy('/src/images');
    eleventyConfig.addPassthroughCopy('/src/inventory');
    eleventyConfig.addPassthroughCopy('/src/admin/config.yml');
    eleventyConfig.addPassthroughCopy('/src/admin/index.html');
        
    return {
        dir: {
            input: "src",
            output: "_site"
        }
    }
}