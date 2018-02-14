const express = require("express");
const app = express();
const queries = require("./queries");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

app.get("/", (request, response) => {
  queries
    .list("legislation")
    .then(legislation =>
      queries.list("tracking").then(tracking =>
        response.json({
          legislation: legislation,
          tracking: tracking
        })
      )
    )
    .catch(error => console.log(error));
});

app.get("/legislation", (request, response) => {
  queries
    .list("legislation")
    .then(legislation => {
      response.json({ legislation });
    })
    .catch(error => console.log(error));
});

app.get("/tracking", (request, response) => {
  queries
    .list("tracking")
    .then(tracking => {
      response.json({ tracking });
    })
    .catch(error => console.log(error));
});

app.get("/catagories", (request, response) => {
  queries
    .list("catagories")
    .then(catagories => {
      response.json({ catagories });
    })
    .catch(error => console.log(error));
});

app.get("/tracking/:id", (request, response) => {
  queries
    .read(request.params.id, "tracking")
    .then(tracking => {
      tracking ? response.json({ tracking }) : response.sendStatus(404);
    })
    .catch(console.error);
});

app.post("/legislation", (request, response) => {
  queries
    .createLegislation(request.body)
    .then(legislation => {
      response.status(201).json({ legislation: legislation });
    })
    .catch(console.error);
});

app.post("/tracking", (request, response) => {
  queries
    .createTracking(request.body)
    .then(tracking => {
      response.status(201).json({ tracking: tracking });
    })
    .catch(console.error);
});

app.delete("/legislation/:id", (request, response) => {
  queries
    .deleteLegislation(request.params.id)
    .then(() => {
      response.sendStatus(204);
    })
    .catch(console.error);
});

app.delete("/tracking/:id", (request, response) => {
  queries
    .deleteTracking(request.params.id)
    .then(() => {
      response.sendStatus(204);
    })
    .catch(console.error);
});

app.put("/legislation/:id", (request, response) => {
  queries
    .updateLegislation(request.params.id, request.body)
    .then(legislation => {
      response.json({ message: "success" });
    })
    .catch(console.error);
});

app.put("/tracking/:id", (request, response) => {
  queries
    .updateTracking(request.params.id, request.body)
    .then(tracking => {
      response.json({ message: "success" });
    })
    .catch(console.error);
});

app.use((request, response) => {
  response.send(404);
});

module.exports = app;
