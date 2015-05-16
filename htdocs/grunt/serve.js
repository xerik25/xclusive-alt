module.exports = function(grunt) {
	'use strict';

	grunt.registerTask('serve', [
		'assemble',
		'prettify',
		'concurrent:server',
		'autoprefixer',
		'connect:livereload',
		'watch'
	]);
};
