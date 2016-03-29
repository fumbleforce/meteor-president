module.exports = function() {
  this.Then(/^"([^"]*)" is on the victory screen$/, function (name) {
    expect(client.getText("#winner")).toEqual(name);
  });
};
