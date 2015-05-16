module.exports = {
	dev: {
		options: {
			loadPath: [
				// Samples for adding other SCSS libraries
				'<%= config.vendor %>/bootstrap-sass-official/assets/stylesheets/',
				'<%= config.vendor %>/bourbon/dist/'
			],
      sourcemap: 'auto'
		},
		files: [{
			expand: true,
			cwd: '<%= config.src %>/scss/',
			src: ['**/*.scss'],
			dest: '<%= config.app %>/styles/',
			ext: '.css'
		}]
	}
};
