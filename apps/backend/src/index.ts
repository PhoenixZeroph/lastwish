import Fastify from "fastify";
import wishes from "./routes/wishes";
import proofOfLife from "./routes/proofOfLife";
import { scheduleCronJobs } from "./services/cron.worker";
import config from "./config";

const app = Fastify({ logger: true });
app.register(wishes, { prefix: "/wishes" });
app.register(proofOfLife, { prefix: "/alive" });

app.listen({ port: 4000, host: "0.0.0.0" }, (err) => {
  if (err) throw err;
  app.log.info("Backend running");
});

scheduleCronJobs(app.log, config);
