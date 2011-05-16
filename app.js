
/**
 * Module dependencies.
 */
var express = require('express'),
    app = module.exports = express.createServer(),
    social = require('./social');


// Configuration

app.configure(function(){
    app.set('views', __dirname + '/views');
    app.set("view engine", "html");
    app.register(".html", require("jqtpl").express);
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
    app.use(express.errorHandler()); 
});

// Routes
app.get('/', function(req, res) {
    res.redirect('/brazilJS/twitter/');
});

app.get('/:hash/:network', function(req, res){
    var hashtag = req.params.hash;
    var network = req.params.network;
    var snetwork = social.factory(network);
    snetwork.search(hashtag, function(ret) {
        console.log(ret);
        res.render('social/' + network, {
            title: network,
            content: ret,
        });
    });
});

// Only listen on $ node app.js

if (!module.parent) {
    app.listen(3000);
    console.log("Express server listening on port %d", app.address().port);
}
