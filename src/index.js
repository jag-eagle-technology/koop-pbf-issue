import config from "config";
import Koop from "@koopjs/koop-core";
import express from "express";

import plugins from "./plugins.js";

const app = express();
const koop = new Koop();

plugins.forEach((plugin) => {
  koop.register(plugin.instance, plugin.options);
});

app.use("/", koop.server);

app.listen(config.port, () =>
  koop.log.info(`Koop server listening at ${config.port}`)
);
