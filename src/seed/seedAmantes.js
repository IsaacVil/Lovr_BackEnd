const seedDocs = [
  {
    nombre: "Ana García",
    edad: 28,
    intereses: ["música", "viajes", "lectura"],
  },
  {
    nombre: "Luis Méndez",
    edad: 32,
    intereses: ["deportes", "cocina", "música"],
  },
  {
    nombre: "María López",
    edad: 26,
    intereses: ["arte", "viajes", "fotografía"],
  },
];

export async function seedIfEmpty(amanteRepository) {
  const count = await amanteRepository.contar();
  if (count > 0) return { seeded: false, inserted: 0 };
  const n = await amanteRepository.insertarVarios(seedDocs);
  return { seeded: true, inserted: n };
}
