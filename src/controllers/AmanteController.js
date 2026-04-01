function toApiShape(doc) {
  return {
    id: String(doc._id),
    name: doc.nombre,
    age: doc.edad,
    interests: doc.intereses,
    createdAt: doc.createdAt,
    updatedAt: doc.updatedAt,
  };
}

export class AmanteController {
  constructor(amanteService) {
    this.amanteService = amanteService;
  }

  postAmante = async (req, res, next) => {
    try {
      const created = await this.amanteService.registrarAmante(req.body);
      res.status(201).json(toApiShape(created));
    } catch (e) {
      next(e);
    }
  };

  getAmantes = async (req, res, next) => {
    try {
      const list = await this.amanteService.listarPorInteres(
        req.query.interes
      );
      res.status(200).json(list.map(toApiShape));
    } catch (e) {
      next(e);
    }
  };
}
