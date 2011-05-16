social.flickr = function() {
    var imageURL = function(photo) {
        return "http://farm" + photo.farm +
        ".static.flickr.com/" + photo.server +
        "/" + photo.id +
        "_" + photo.secret +
        "_s.jpg";
    };

    var search = function(hash, callback) {
        new YQL.exec("SELECT * FROM flickr.photos.search WHERE text='"+ hash +"'", function(response) {
            var results = response.query.results.photo;
            var ret = []
            for (var i in results) {
                ret.push({
                    author: {
                        username: results[i].owner,
                        img: '', // optional
                    },
                    content: imageURL(results[i]),
                });
            }
            callback(ret);
        });
    };
    
    return {
        search: search,
    };
};
