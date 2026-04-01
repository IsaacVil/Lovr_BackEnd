import express from "express";
import cors from "cors";
import { AmanteRepository } from "./repositories/AmanteRepository.js";
import { AmanteService } from "./services/AmanteService.js";
import { AmanteController } from "./controllers/AmanteController.js";
import { createAmanteRouter } from "./routes/amante.routes.js";
import { errorHandler } from "./middleware/errorHandler.js";

export function createApp() {
  const app = express();
  app.use(cors());
  app.use(express.json());

  const repo = new AmanteRepository();
  const service = new AmanteService(repo);
  const controller = new AmanteController(service);

  app.use(createAmanteRouter(controller));
  app.use(errorHandler);

  return { app, amanteRepository: repo };
}
