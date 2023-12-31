-- DROP TABLE IF EXISTS province;

CREATE TABLE IF NOT EXISTS province (
    id SERIAL PRIMARY KEY,
    province_name VARCHAR(255) UNIQUE NOT NULL,
    province_code VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL
);
