-- DROP TABLE IF EXISTS aqi_history;

CREATE TABLE IF NOT EXISTS aqi_history (
    id SERIAL PRIMARY KEY,
    id_city VARCHAR(255) NOT NULL,
    aqius VARCHAR(255) NULL,
    aqi_unit VARCHAR(255) NULL,
    humidity VARCHAR(255) NULL,
    temp VARCHAR(255) NULL,
    wind_speed VARCHAR(255) NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NULL
);
