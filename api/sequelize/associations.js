const User = require("../models/user");
const Message = require("../models/message");
const Event = require("../models/event");
const Metier = require("../models/metier");
const Celebrite = require("../models/celebrite");

User.hasMany(Message);
Message.belongsTo(User);

Metier.hasMany(Celebrite);
Celebrite.belongsTo(Metier);

Event.belongsToMany(User, { through: "Reservation" });
User.belongsToMany(Event, { through: "Reservation" });
