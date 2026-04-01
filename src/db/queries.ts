import pool from "./pools.js"



export async function getAllUsernames() {
    const { rows } = await pool.query("SELECT * FROM users");
    return rows;
}

export async function insertUsername(username: string, text: string) {
    await pool.query(
        "INSERT INTO users (username, text) VALUES ($1, $2)",
        [username, text]
    );
}

export async function searchUsername(id: number) {

    const { rows } = await pool.query(
        "SELECT * FROM users WHERE id = $1",
        [id]
    );
    return rows[0];
}

