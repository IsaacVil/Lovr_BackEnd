/**
 * DTO: valida estructura y tipos de entrada sin lógica de negocio.
 */
export class AmanteDTO {
  constructor({ name, age, interests }) {
    this.name = name;
    this.age = age;
    this.interests = interests;
  }

  validate() {
    const errors = [];

    if (this.name === undefined || this.name === null) {
      errors.push("name es requerido");
    } else if (typeof this.name !== "string" || !this.name.trim()) {
      errors.push("name debe ser un string no vacío");
    }

    if (this.age === undefined || this.age === null) {
      errors.push("age es requerido");
    } else if (typeof this.age !== "number" || Number.isNaN(this.age)) {
      errors.push("age debe ser un número");
    } else if (!Number.isInteger(this.age) || this.age < 18 || this.age > 120) {
      errors.push("age debe ser entero entre 18 y 120");
    }

    if (this.interests === undefined || this.interests === null) {
      errors.push("interests es requerido");
    } else if (!Array.isArray(this.interests)) {
      errors.push("interests debe ser un arreglo");
    } else if (
      this.interests.some((i) => typeof i !== "string" || !String(i).trim())
    ) {
      errors.push("cada interest debe ser un string no vacío");
    } else if (this.interests.length === 0) {
      errors.push("interests debe tener al menos un elemento");
    }

    return { valid: errors.length === 0, errors };
  }

  toPersistencePayload() {
    return {
      nombre: String(this.name).trim(),
      edad: this.age,
      intereses: this.interests.map((i) => String(i).trim()),
    };
  }
}
