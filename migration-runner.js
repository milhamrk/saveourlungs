// migration-runner.js
const fs = require('fs');
const path = require('path');
const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'db',
    database: 'saveourlungs',
    password: 'postgres',
    port: 5432,
});

async function connectWithRetry(retries = 5, delay = 2000) {
    while (retries > 0) {
        try {
            await pool.connect();
            return;
        } catch (err) {
            console.log(`Failed to connect to DB, retrying in ${delay}ms...`);
            await new Promise(res => setTimeout(res, delay));
            retries--;
        }
    }
    throw new Error('Failed to connect to DB after retries');
}

async function runMigrations() {
    await connectWithRetry();
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
