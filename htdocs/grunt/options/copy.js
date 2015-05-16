// copy task options
// For files that need to be copied should be set up on a per project basis.
//
module.exports = {
	ektron: {
		files: [
			{
				src: '<%= config.app %>/styles/app.css',
				dest: '<%= config.ektron %>/styles/app.css'
			},
			{
				src: '<%= config.app %>/styles/framework.css',
				dest: '<%= config.ektron %>/styles/framework.css'
			},
			{
				src: '<%= config.app %>/scripts/main.js',
				dest: '<%= config.ektron %>/scripts/main.js'
			},
			{
				src: '<%= config.app %>/scripts/vendor/plugins.js',
				dest: '<%= config.ektron %>/scripts/plugins.js'
			},
			{
				src: '<%= config.app %>/scripts/vendor/modernizr.js',
				dest: '<%= config.ektron %>/scripts/modernizr.js'
			},
			{
				src: '<%= config.app %>/scripts/vendor/mobile.js',
				dest: '<%= config.ektron %>/scripts/mobile.js'
			}
		]
	},
  bootstrap: {
    files: [
      {
        cwd: '<%= config.vendor %>/bootstrap-sass-official/assets/fonts',
        src: '**/*.{svg,eot,ttf,woff}',
        dest: '<%= config.app %>/fonts',
        expand: true
      }
    ]
  }
};
