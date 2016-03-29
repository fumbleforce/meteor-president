module.exports = function() {
  this.Given(/^"([^"]*)" gets (\d+) votes$/, function (name, votes) {
    var selector = `[data-vote="${name}"]`;
    client.waitForExist(selector)
    this.utils.multiclick(selector, votes);
  });
};
