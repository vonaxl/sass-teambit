let mix = require("laravel-mix");

mix
  .js("src/js/script.js", "public/js")
  .sass("src/sass/style.scss", "public/css")
  .copyDirectory("src/assets", "public/assets")
  .copyDirectory("src/html", "public");
