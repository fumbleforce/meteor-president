module.exports = function() {
  this.Then(/^"([^"]*)" is at first place$/, function (name) {
    expect(client.getText("#results .list .item:first-child .name")).toEqual(name);
  });
};
