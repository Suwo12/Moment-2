

function defaultTask(cb) {
  // place code for your default task here
    cb();
  }

  const { src, dest, watch, series, parallel } = require("gulp");
  const concat = require("gulp-concat");
  const concatCss = require('gulp-concat-css');
  const uglifycss = require("gulp-uglifycss");
  const uglyfy = require("gulp-uglify-es").default;
  const livereload = require("gulp-livereload");
  const autoprefixer = require('gulp-autoprefixer');
  const imagemin = require('gulp-imagemin');
  

  /* Sökväg till arbetsfiler */
  const files = {
    htmlPath: "src/**/*.html",
    jsPath: "src/**/*.js",
    cssPath: "src/**/*.css",
    imgPath: "src/images/*"
  }


  /* Kopierade filer sparas, kopieras sedan i pub */
  function copyHTML(){
    return src(files.htmlPath)
    .pipe(dest('pub')
    );
  }

  function copyImages(){
    return src(files.imgPath)
    .pipe(imagemin())
    .pipe(dest('pub/images/')
    );
  }

 /* Slå ihop alla js-filer och minifiera dom */
  function jsTask(){
    return src(files.jsPath)
    .pipe(concat('main.js'))//Konkatinerar jsfiler
    .pipe(uglyfy())//Alla kommentarer och radbryt försvinner
    .pipe(dest('pub/js'))//Hit pipas/flyttas alla filer efter konkainering och uglify
    .pipe(livereload());//Kör livereload efter eventuella ändringar
  }

  /* Slå ihop alla css-filer och minifiera dom */
  function cssTask(){
    return src(files.cssPath)
    .pipe(autoprefixer())//Lägger till prefix
    .pipe(concatCss('style.css')) //Konkatinerar CSS
    .pipe(uglifycss()) //Alla kommentarer och radbryt försvinner
    .pipe(dest('pub/css')) //Hit pipas/flyttas alla filer efter konkainering och uglify
    .pipe(livereload());//Kör livereload efter eventuella ändringar
  }

  /* Lyssnar efter ändringar i html-, js- och css-filer, om ändring körs ihopslagen kopia till pub */
  function watchTask() {
    livereload.listen();
    watch([files.htmlPath, files.jsPath, files.cssPath, files.imgPath],
    parallel(copyHTML, jsTask, cssTask, copyImages),
      );
  }

  // Tasks som ska köras default, gör de publika funktionerna publika för att kunna köras
  exports.default = series(
  defaultTask,
  parallel(copyHTML, jsTask, cssTask, copyImages),
  watchTask
  );