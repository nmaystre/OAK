var autoprefixer       = require('gulp-autoprefixer');
var beeper             = require('beeper');
var browserSync        = require('browser-sync');
var cache              = require('gulp-cache');
var cleanCSS           = require('gulp-clean-css');
var gconcat            = require('gulp-concat');
var gulp               = require('gulp');
var gutil              = require('gulp-util');
var imagemin           = require('gulp-imagemin');
var notify             = require('gulp-notify');
var plumber            = require('gulp-plumber');
var pug                = require('gulp-pug');
var rename             = require("gulp-rename");
var sass               = require('gulp-sass');
var sourcemaps         = require('gulp-sourcemaps');
var uglify             = require('gulp-uglify');
// sudo npm install gulp-uglify browser-sync gulp-plumber gulp-autoprefixer gulp-sass gulp-pug gulp-imagemin gulp-cache gulp-clean-css gulp-sourcemaps gulp-concat beeper gulp-util gulp-rename gulp-notify --save-dev
var jsVendorFiles      = ['js/vendor/*.js'];             // Holds the js vendor files to be concatenated
var myJsFiles          = ['js/*.js'];    // Holds the js files to be concatenated
var fs                 = require('fs');  // ExistsSync var to check if font directory patch exist
var bowerDirectory     = getBowerDirectory();
var bootstrapJSPath    = bowerDirectory + "bootstrap/dist/js/bootstrap.min.js";
var jqueryPath         = bowerDirectory + "jquery/dist/jquery.min.js";
var bootstrapExist     = false;
var onError            = function(err) { // Custom error msg with beep sound and text color
    notify.onError({
      title:    "Gulp error in " + err.plugin,
      message:  err.toString()
    })(err);
    beeper(3);
    this.emit('end');
    gutil.log(gutil.colors.red(err));
};

function getBowerDirectory() {
  var bowerComponents = "./bower_components";
  if(fs.existsSync('.bowerrc')) {
    var bowerrc = JSON.parse(fs.readFileSync('.bowerrc').toString());
    return bowerrc.directory;
  } else if (fs.existsSync(bowerComponents)) {
    return bowerComponents + '/';
  } else {
    return '';
  }
}

function setupJquery(data) {
  var jqueryCDN = '    script(src="https://code.jquery.com/jquery-{{JQUERY_VERSION}}.min.js" integrity="{{JQUERY_SRI_HASH}}" crossorigin="anonymous")';
  var jqueryLocalFallback = "    <script>window.jQuery || document.write(" + "'<script src=" + '"js/vendor/jquery/dist/jquery/jquery.min.js"' + "><\\/script>')</script>";
  gulp.src(jqueryPath)
  .pipe(gulp.dest('./build/js/vendor/jquery/dist/jquery'));
  data.splice(data.length, 0, jqueryCDN);
  data.splice(data.length, 0, jqueryLocalFallback);
}

function findKeyText(data, txt) {
  for (var i = 0; i < data.length; i++) {
    if(data[i].indexOf(txt) > -1) {
      return true;
    }
  }
  return false;
}

gulp.task('styles', function() {
  gulp.src('styles/*.scss')
  .pipe(plumber({ errorHandler: onError }))
  .pipe(sass({indentedSyntax: true}))
  .pipe(autoprefixer({
    browsers: ['last 5 versions'],
    cascade: false}))
  .pipe(gulp.dest('build/css'));
  gulp.src('styles/vendor/*.css')
    .pipe(gulp.dest('build/css/vendor'));

});

gulp.task('templates', function() {
  gulp.src('./*.pug')
  .pipe(plumber({ errorHandler: onError }))
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('build/'));
});


gulp.task('vendorScripts', function() {
  return gulp.src(jsVendorFiles)
    .pipe(gulp.dest('build/js/vendor'));
});

gulp.task('scripts', function() {
  return gulp.src(myJsFiles)
  .pipe(plumber({ errorHandler: onError }))
  .pipe(gconcat('bundle.js'))
  .pipe(uglify())
  .pipe(rename({ suffix: '.min'}))
  .pipe(gulp.dest('build/js'));
});

gulp.task('images', function() {
  gulp.src('img/**/*')
  .pipe(cache(imagemin({
    optimizationLevel: 3,
    progressive: true,
    interlaced: true})))
  .pipe(gulp.dest('build/img/'));
});

gulp.task('fonts', function() {
  gulp.src('fonts/**/*')
    .pipe(gulp.dest('build/fonts/'));
});

gulp.task('setup-src', function() {
  var data = fs.readFileSync('./index.pug').toString().split("\n");

  if(data[data.length - 1] === '') {
    data.pop();
  }

  if(data[data.length - 1].indexOf('script(src="js/bundle.min.js")') > -1) {
    data.pop();
  }

  if(bowerDirectory) {
    if(fs.existsSync(bootstrapJSPath) && !findKeyText(data, 'bootstrap.min.css')) {
      setupBootstrap(data);
    }

    if(fs.existsSync(jqueryPath) && !bootstrapExist  && !findKeyText(data, 'jquery.min.js')) {
      setupJquery(data);
    }
  }

  if(!findKeyText(data, 'bundle.min.js')) {
    data.splice(data.length, 0, '    script(src="js/bundle.min.js")');
  }

  var text = data.join("\n");
  fs.writeFile('./index.pug', text, function (err) {
    if (err) throw err;
  });
});

gulp.task('default', function() {
  console.log("Use 'gulp setup' command to initialize the project files");
});

gulp.task('setup', function() {
  gulp.start('styles', 'templates', 'vendorScripts', 'scripts', 'images', 'fonts', 'setup-src');
});

gulp.task('watch', function() {
  gulp.watch('styles/**/*',                        ['styles']);
  gulp.watch(['templates/**/*', './*.pug'],        ['templates']);
  gulp.watch('js/*.js',                            ['scripts']);
  gulp.watch('img/**/*',                           ['images']);
  gulp.watch('fonts/**/*',                           ['fonts']);

// init server
  browserSync.init({
    server: {
      proxy: "local.build",
      baseDir: "build/"
    }
  });

  gulp.watch(['build/**'], browserSync.reload);
});
