const express = require("express");
const ongController = require("./controllers/ongController");
const incidentController = require("./controllers/incidentController");
const profileController = require("./controllers/profileController");
const sessionController = require("./controllers/sessionController");
const connection = require("./database/connection");
const routes = express.Router();

// Sessão.
routes.post("/sessions", sessionController.create);
// Sessão.

// Buscar e criar ongs.
routes.get("/ongs", ongController.index);
routes.post("/ongs", ongController.create)
// Buscar e criar ongs.

// Buscar e criar incidentes.
routes.get("/incidents", incidentController.index);
routes.post("/incidents", incidentController.create);
// Buscar e criar incidentes.

// Deletar incidentes.
routes.delete("/incidents/:id", incidentController.delete);
// Deletar incidentes

// Incidentes e ongs.
routes.get("/profile", profileController.index);
// Incidentes e ongs.
module.exports = routes;