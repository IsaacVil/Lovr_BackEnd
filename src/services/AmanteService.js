import { AmanteDTO } from "../dtos/AmanteDTO.js";

export class AmanteService {
  constructor(amanteRepository) {
    this.amanteRepository = amanteRepository;
  }

  async registrarAmante(body) {
    const dto = new AmanteDTO({
      name: body?.name,
      age: body?.age,
      interests: body?.interests,
    });
    const { valid, errors } = dto.validate();
    if (!valid) {
      const err = new Error(errors.join("; "));
      err.statusCode = 400;
      err.code = "VALIDATION_ERROR";
      throw err;
    }
    const payload = dto.toPersistencePayload();
    return this.amanteRepository.crear(payload);
  }

  async listarPorInteres(interesQuery) {
    if (
      interesQuery === undefined ||
      interesQuery === null ||
      String(interesQuery).trim() === ""
    ) {
      const err = new Error("query interes es requerido");
      err.statusCode = 400;
      err.code = "MISSING_INTERES";
      throw err;
    }
    return this.amanteRepository.buscarPorInteres(interesQuery);
  }
}
