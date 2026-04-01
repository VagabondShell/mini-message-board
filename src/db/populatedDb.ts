#! /usr/bin/env node
import 'dotenv/config';

import { Client } from "pg";

const SQL = `
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  text VARCHAR ( 255 ),
  added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);

INSERT INTO users (username, text) 
VALUES
  ('Bryan', 'Hello from Bryan!'),
  ('Odin', 'The Allfather is here.'),
  ('Damon', 'Testing the message board.');
`;

async function main() {
    console.log("seeding...");
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();


