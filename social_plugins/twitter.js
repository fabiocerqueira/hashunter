social.twitter = function() {
    var search = function(hash, callback) {
        new YQL.exec("SELECT * FROM twitter.search WHERE q='" + hash + "'", function(response) {
            var results = response.query.results.results;
            var ret = [];
            for (var i in results) {
                ret.push({
                    author: {
                        username: results[i].from_user,
                        img: results[i].profile_image_url, // optional
                    },
                    content: results[i].text,
                });
            }
            callback(ret);
        });
    };
    
    return {
        search: search,
    };
};
