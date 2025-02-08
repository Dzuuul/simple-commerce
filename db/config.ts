import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

// Tambahkan error handling untuk koneksi database
if (!process.env.POSTGRES_URL) {
  console.error("POSTGRES_URL environment variable is not set");
  throw new Error("Database connection string is missing");
}

export const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

// Tambahkan event listener untuk kesalahan koneksi
pool.on("error", (err) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

export const db = drizzle(pool, { schema });

// Fungsi untuk memeriksa koneksi database
export async function testDatabaseConnection() {
  try {
    const client = await pool.connect();
    console.log("Database connection successful");
    client.release();
  } catch (error) {
    console.error("Database connection failed", error);
    throw error;
  }
}
