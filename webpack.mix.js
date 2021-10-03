const mix = require('laravel-mix');
const path = require('path');

// JS
mix.js('resources/js/app.js', 'public/js');
mix.vue({
    version: 3
})

// CSS/SCSS
mix.postCss('resources/css/app.css', 'public/css', [
    require('tailwindcss')
]);


// Alias
mix.alias({
    ziggy: path.resolve('vendor/tightenco/ziggy/dist/vue'),
})

// Building & Prod
if (mix.inProduction()) {
    mix.version();
}
