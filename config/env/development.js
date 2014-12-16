'use strict';

module.exports = {
	assets: {
                lib: {
                        js: [
                                'public/lib/angular/angular.js',
                                'public/lib/angular-resource/angular-resource.js',
                                'public/lib/angular-animate/angular-animate.js',
                                'public/lib/angular-ui-router/release/angular-ui-router.js',
                                'public/lib/angular-ui-utils/ui-utils.js',
				'public/lib/angular-cookies/angular-cookies.js',
				'public/lib/angular-deckgrid/angular-deckgrid.js',
				'public/dist/angular-inview.js'
			]
                },
                css: [
                        'public/dist/*.css'
                ],
                js: [
                        'public/config.js',
                        'public/application.js',
                        'public/modules/*/*.js',
                        'public/modules/*/*[!tests]*/*.js'
                ],
                tests: [
                        'public/lib/angular-mocks/angular-mocks.js',
                        'public/modules/*/tests/*.js'
                ]
        }

};
