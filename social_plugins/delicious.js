social.delicious = function() {
    var http = require('http');
    var search = function(hash, callback) {
        var options = {
            host: 'feeds.delicious.com',
            path: '/v2/json/tag/' + hash
        };
        var body = '';
        http.get(options, function(res) {
            if (res.statusCode == 200) {
                res.on("data", function (chunk) {
                    body += chunk;
                }).on('end', function(e) {
                    results = JSON.parse(body);
                    var ret = []
                    for (var i in results) {
                        ret.push({
                            author: {
                                username: results[i].a,
                            },
                            content: results[i].d,
                            link: results[i].u,
                        });
                    }
                    callback(ret);
                });
            }
        }).on('error', function(e) {
            console.log("Got error: " + e.message);
        });
    };
    
    return {
        search: search,
    };
};

