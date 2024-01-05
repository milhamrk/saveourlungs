-- DROP TABLE IF EXISTS news;

CREATE TABLE IF NOT EXISTS news (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    body TEXT NOT NULL,
    writer VARCHAR(255) NOT NULL,
    image TEXT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL
);