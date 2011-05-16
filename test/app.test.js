
// Run $ expresso

/**
 * Module dependencies.
 */

var app = require('../app')
  , assert = require('assert');


module.exports = {
  'GET /': function() {
    assert.response(app,
      { url: '/' },
      { status: 302 });
  },

  'GET /braziljs/twitter/': function() {
    assert.response(app,
      { url: '/braziljs/twitter/' },
      { status: 200, headers: { 'Content-Type': 'text/html; charset=utf-8' }},
        function(res) {
            assert.includes(res.body, '<title>twitter</title>');
      });
  },

  'GET /braziljs/delicious/': function() {
    assert.response(app,
      { url: '/braziljs/delicious/' },
      { status: 200, headers: { 'Content-Type': 'text/html; charset=utf-8' }},
        function(res) {
            assert.includes(res.body, '<title>delicious</title>');
      });
  },

  'GET /braziljs/flickr/': function() {
    assert.response(app,
      { url: '/braziljs/flickr/' },
      { status: 200, headers: { 'Content-Type': 'text/html; charset=utf-8' }},
        function(res) {
            assert.includes(res.body, '<title>flickr</title>');
      });
  },


};
