module.exports = {
	options: {
		banner: '<%= banner %>'
	},
	loader: {
		src: [
			'<%= config.src %>/javascript/App.Loader.js'
		],
		dest: '<%= config.app %>/scripts/loader.js'
	},
	vendor: {
		src: [
			'<%= config.vendor %>/jquery/dist/jquery.js',
			'<%= config.vendor %>/jquery-tiny-pubsub/dist/ba-tiny-pubsub.js',
			'<%= config.vendor %>/lodash/dist/lodash.js',
			'<%= config.vendor %>/velocity/jquery.velocity.js',
			'<%= config.vendor %>/reqwest/reqwest.js',
			'<%= config.vendor %>/bootstrap/js/carousel.js',
			'<%= config.vendor %>/bootstrap/js/modal.js',
			'<%= config.vendor %>/bootstrap/js/transition.js'
		],
		dest: '<%= config.app %>/scripts/vendor/plugins.js'
	},
	mobile: {
		src: [
			'<%= config.vendor %>/fastclick/lib/fastclick.js'
		],
		dest: '<%= config.app %>/scripts/vendor/mobile.js'
	},
	dev: {
		src: [
			'<%= config.src %>/javascript/App.Namespace.js',
			'<%= config.src %>/javascript/App.Constants.js',
			'<%= config.src %>/javascript/App.FeaturesLoader.js',
			'<%= config.src %>/javascript/utils/{,*/}*.js',
			'<%= config.src %>/javascript/helpers/{,*/}*.js',
      '<%= config.src %>/javascript/services/{,*/}*.js',
			'<%= config.src %>/javascript/features/{,*/}*.js',
			'<%= config.src %>/javascript/App.Init.js'
		],
		dest: '<%= config.app %>/scripts/main.js'
	}
}
