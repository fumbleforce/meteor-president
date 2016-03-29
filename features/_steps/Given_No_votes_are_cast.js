module.exports = function() {
  this.Given(/^No votes are cast$/, function () {
    server.call("reset.votes");
  });
};
