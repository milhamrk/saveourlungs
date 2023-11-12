// migration-runner.js
const fs = require('fs');
const path = require('path');
const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'saveourlungs',
    password: 'postgres',
    port: 5431,
});

async function runMigrations() {
    const migrationDir = path.join(__dirname, 'migrations');

    for (const file of fs.readdirSync(migrationDir).sort()) {
        const migration = fs.readFileSync(path.join(migrationDir, file), 'utf-8');
        console.log(`Running migration: ${file}`);
        await pool.query(migration);
    }

    await pool.end();
    console.log('All migrations run successfully');
}

runMigrations().catch(console.error);
