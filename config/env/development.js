'use strict';

module.exports = {
	assets: {
                lib: {
                        css: [
                        ],
                        js: [
                                'public/lib/angular/angular.js',
                                'public/lib/angular-resource/angular-resource.js',
                                'public/lib/angular-animate/angular-animate.js',
                                'public/lib/angular-ui-router/release/angular-ui-router.js',
                                'public/lib/angular-ui-utils/ui-utils.js'
                        ]
                },
                css: [
                        'public/modules/**/css/*.css'
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
