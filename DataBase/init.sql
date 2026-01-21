-- Crear la tabla Pokemon
CREATE TABLE IF NOT EXISTS "Pokemon" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255) UNIQUE NOT NULL,
    "image" TEXT NOT NULL,
    "height" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,
    "types" TEXT[] NOT NULL, -- Uso de arreglos nativos de Postgres
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted" TIMESTAMP,
    "modified" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Índice opcional para mejorar la velocidad de búsqueda por nombre
CREATE INDEX IF NOT EXISTS "idx_pokemon_name" ON "Pokemon"("name");