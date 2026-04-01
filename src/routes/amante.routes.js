import { Router } from "express";

export function createAmanteRouter(amanteController) {
  const r = Router();
  r.post("/amantes", (req, res, next) =>
    amanteController.postAmante(req, res, next)
  );
  r.get("/amantes", (req, res, next) =>
    amanteController.getAmantes(req, res, next)
  );
  return r;
}
