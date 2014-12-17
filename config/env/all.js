'use strict';

module.exports = {
	app: {
		title: 'o嘴',
		description: '香港第一大政治漫畫資料庫',
		keywords: '政治漫畫'
	},
	db: 'mongodb://localhost/mean',
        port: 80,
	templateEngine: 'swig',
	sessionSecret: 'MEAN',
	sessionCollection: 'sessions'
};
