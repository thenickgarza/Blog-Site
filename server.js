const express = require("express");
const routes = require("./controllers");
const session = require("express-session");
const exphbs = require('express-handlebars');
const path = require('path');
require("dotenv").config();

const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: process.env.secret,
  cookie: {},
  resave: false,
  saveUnitialize: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session(sess));
app.use(express.static(path.join(__dirname, 'public')));

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);

app.use(require("./controllers"));

sequelize.sync({ force: false }).then(() => {

  app.listen(PORT, () => console.log (`App listening at http://localhost:${PORT} 🚀`));

});