PRAGMA foreign_keys = OFF;

CREATE TABLE "__alter_table_cars" (
    'id' INTEGER PRIMARY KEY NOT NULL,
    'brand' TEXT DEFAULT '' NOT NULL,
    'model' TEXT DEFAULT '' NOT NULL,
    'year' TEXT DEFAULT '' NOT NULL,
    'price' TEXT DEFAULT '' NOT NULL,
    'owner' TEXT REFERENCES '_user'('id')
) STRICT;

INSERT INTO
    "__alter_table_cars" (price, id, brand, year, model)
SELECT
    price,
    id,
    brand,
    year,
    model
FROM
    "cars";

DROP TABLE "cars";

ALTER TABLE
    "__alter_table_cars" RENAME TO "cars";

PRAGMA foreign_keys = ON;