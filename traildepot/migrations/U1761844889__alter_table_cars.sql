PRAGMA foreign_keys = OFF;

CREATE TABLE "__alter_table_cars" (
    'id' INTEGER PRIMARY KEY NOT NULL,
    'brand' TEXT DEFAULT '' NOT NULL,
    'model' TEXT DEFAULT '' NOT NULL,
    'year' TEXT DEFAULT '' NOT NULL,
    'price' TEXT DEFAULT '' NOT NULL
) STRICT;

INSERT INTO
    "__alter_table_cars" (year, id, brand, model, price)
SELECT
    year,
    id,
    brand,
    model,
    price
FROM
    "cars";

DROP TABLE "cars";

ALTER TABLE
    "__alter_table_cars" RENAME TO "cars";

PRAGMA foreign_keys = ON;