module.exports = function() {
  this.Then(/^I see the victory screen$/, function () {
    client.waitForExist('#victory');
    expect(client.isVisible('#victory')).toBe(true);
  });
};
