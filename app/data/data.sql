-- on supprime les tables si elles existent afind e partir sur une base propre
DROP TABLE IF EXISTS "promo", "student";

CREATE TABLE "promo" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT UNIQUE,
    "github_organization" TEXT
);

INSERT INTO "promo" VALUES
(DEFAULT, 'Robin'),
(DEFAULT, 'Pan'),
(DEFAULT, 'Nautilus');

CREATE TABLE "student" (
    "id" SERIAL PRIMARY KEY,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "promo_id" INT NOT NULL REFERENCES "promo"("id")
);

INSERT INTO "student"("first_name", "last_name", "promo_id") VALUES
('Michel', 'Chelmi', 1),
('Toto', 'Desbois', 1),
('Alex', 'Sandre', 3);
