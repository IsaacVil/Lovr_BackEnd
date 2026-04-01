import { AmanteModel } from "../models/Amante.model.js";

export class AmanteRepository {
  async crear(datos) {
    const doc = await AmanteModel.create(datos);
    return doc.toObject();
  }

  async buscarPorInteres(interes) {
    const q = String(interes).trim();
    return AmanteModel.find({ intereses: q }).lean().exec();
  }

  async contar() {
    return AmanteModel.countDocuments();
  }

  async insertarVarios(docs) {
    if (!docs.length) return [];
    await AmanteModel.insertMany(docs);
    return docs.length;
  }
}
