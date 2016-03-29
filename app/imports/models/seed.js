import ContenderCollection from "./ContenderCollection.js";

export const clearContenders = function () {
  ContenderCollection.remove({});
}

export const clearVotes = function () {
  ContenderCollection.update({}, {
    $set: { votes: 0 }
  }, { multi: true });
}

export const seedContenders = function () {
  const count = ContenderCollection.find().count();
  if (count !== 0) {
    return;
  }
  
  ContenderCollection.insert({
    name: "Hillbilly Clintstones",
    votes: 0,
    icon: "/hillary.png"
  });
  
  ContenderCollection.insert({
    name: "Dolan Drumpf",
    votes: 0,
    icon: "/trump.png"
  });
  
  ContenderCollection.insert({
    name: "St. Bernard",
    votes: 0,
    icon: "/sanders.png"
  });
  
  ContenderCollection.insert({
    name: "Teddy Cruuzevelt",
    votes: 0,
    icon: "/cruz.png"
  });
}