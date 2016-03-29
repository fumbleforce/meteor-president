import { clearContenders, clearVotes, seedContenders } from "../imports/models/seed";

Meteor.methods({
  "reset": clearContenders,
  "reset.votes": clearVotes,
  "seed": seedContenders,
});
