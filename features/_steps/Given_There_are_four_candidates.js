module.exports = function() {
  this.Given(/^There are four candidates$/, function () {
    server.call("seed");
  });
};
