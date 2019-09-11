function defaultTask(cb) {
    // place code for your default task here
    cb();
  }

  const { src, dest, watch, series, parallel } = require("gulp");
  const concat = require("gulp-concat");
  const concatCss = require('gulp-concat-css');
  const uglifycss = require("gulp-uglifycss");
  const uglyfy = require("gulp-uglify-es").default;
  

  /* Sökväg till arbetsfiler */
  const files = {
    htmlPath: "src/**/*.html",
    jsPath: "src/**/*.js",
    cssPath: "src/**/*.css"
  }

  /* Kopierade filer sparas, kopieras sedan i pub */
  function copyHTML(){
    return src(files.htmlPath)
    .pipe(dest('pub')
    );
  }

 /* Slå ihop alla js-filer och minifiera dom */
  function jsTask(){
    return src(files.jsPath)
    .pipe(concat('main.js'))//Konkatinerar jsfiler
    .pipe(uglyfy())//Alla kommentarer och radbryt försvinner
    .pipe(dest('pub/js')//Hit pipas/flyttas alla filer efter konkainering och uglify
    );
  }

  /* Slå ihop alla css-filer och minifiera dom */
  function cssTask(){
    return src(files.cssPath)
    .pipe(concatCss('style.css')) //Konkatinerar CSS
    .pipe(uglifycss()) //Alla kommentarer och radbryt försvinner
    .pipe(dest('pub/css') //Hit pipas/flyttas alla filer efter konkainering och uglify
    );
  }

  /* Lyssnar efter ändringar i html-, js- och css-filer, om ändring körs ihopslagen kopia till pub */
  function watchTask() {
    watch([files.htmlPath, files.jsPath, files.cssPath],
    parallel(copyHTML, jsTask, cssTask),
      );
  }

  // Tasks som ska köras default, gör de publika funktionerna publika för att kunna köras
  exports.default = series(
  defaultTask,
  parallel(copyHTML, jsTask, cssTask),
  watchTask
  );