var assert = require('assert');
var util = require('../index');

describe('escape html', function() {
  it('escape', function() {
    var str = '<div>"5"</div>';
    var result = '&lt;div&gt;&quot;5&quot;&lt;/div&gt;';

    assert.equal(result, util.escape(str));
  });

  it('unescape', function() {
    var str = '&lt;div&gt;&quot;5&quot;&lt;/div&gt;';
    var result = '<div>"5"</div>';

    assert.equal(result, util.unescape(str));
  });
});