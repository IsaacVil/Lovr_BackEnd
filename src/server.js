import "dotenv/config";
import { createApp } from "./app.js";
import { connectMongo } from "./config/db.js";
import { seedIfEmpty } from "./seed/seedAmantes.js";

const PORT = Number(process.env.PORT) || 3001;
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/amante_ideal";

const { app, amanteRepository } = createApp();

await connectMongo(MONGODB_URI);
const seed = await seedIfEmpty(amanteRepository);
if (seed.seeded) {
  console.log(`Seed: insertados ${seed.inserted} perfiles de ejemplo`);
}

app.listen(PORT, () => {
  console.log(`API en http://localhost:${PORT}`);
});
