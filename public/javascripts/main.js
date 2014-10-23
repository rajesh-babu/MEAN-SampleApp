require.config({
    baseUrl: '/javascripts',
    urlArgs: 'v=1.0'
});

require(
    [
        'angularApp',
		'routes/config',
		'controllers/mainCtrl',		
		'controllers/postsCtrl',
		'services/posts',
        'utilities/directivesCommons'
    ],
    function () {
        angular.bootstrap(document, ['flapperNews']);
    });