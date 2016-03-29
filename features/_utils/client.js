module.exports = function () {
  this.Before(function () {
    
    // Go to root page
    client.url(process.env.ROOT_URL);
    
    
    var utils = this.utils = {
      // Get the number of times a selector appears
      count: function (selector) {
        return client.elements(selector).value.length;
      },
      
      // Expect a selector to appear <count> times
      expectCount: function (selector, count) {
        expect(utils.count(selector)).toBe(count);
      },
      
      
      // Click on the selector <count> times
      multiclick: function (selector, count) {
        for (var i = 0; i < count; i++) {
          client.click(selector);
        }
      },
      
      clickText: function (text) {
        var selector = '//*[contains(text(), "' + text + '")]';
        client.waitForExist(selector);
        client.click(selector);
      },
      
      expectClientExpression: function (expr) {
        client.execute(expr, function (err, res) {
          expect(!!res.value).toBe(true);
        });
      },
      
      selectDropdown: function (dropdown, value) {
        var selector = `.dropdown[name='${dropdown}']`;
        client.waitForExist(selector);
        client.click(selector);
        client.pause(200);
        if (value) {
          client.click(`${selector} .item[data-value='${value}']`);
        } else {
          client.click(`${selector} .item`);
        }
        client.pause(200);
      }
    };
  });
};
