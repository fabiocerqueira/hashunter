YQL = require('yql');

social = exports;

social.INSTALLEDS = [
    'twitter',
    'flickr',
];

social.factory = function(snetwork) {
    // check if snetwork in social.INSTALLEDS
    if (social.INSTALLEDS.indexOf(snetwork) == -1)
        throw snetwork + ' Does not exists!';
    return eval('social.' + snetwork)();
};

for (var i in social.INSTALLEDS) {
    require('./social_plugins/' + social.INSTALLEDS[i]);
}
