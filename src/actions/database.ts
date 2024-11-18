import sqlite, { Database } from "sqlite3";
import DB_SEED from "./seed.json";
import { GroceryItem } from "@/types/database";

async function execute<T = unknown>(db: Database, sql: string) {
  return new Promise((resolve, reject) => {
    db.all<T>(sql, (err, rows) => {
      if (err) reject(err);
      resolve(rows);
    });
  });
}

function openDatabase() {
  // Set verbose for logging
  sqlite.verbose();
  const db = new sqlite.Database(`${process.env.DB_NAME}.db`);
  return db;
}

export async function seedDatabase() {
  const db = openDatabase();
  try {
    const createListTable = await execute(
      db,
      `CREATE TABLE IF NOT EXISTS List (
        itemId INTEGER PRIMARY KEY ASC AUTOINCREMENT,
        itemName TEXT NOT NULL UNIQUE,
        qty TEXT NOT NULL)`
    );
    for (const item of DB_SEED) {
      await execute(
        db,
        `INSERT INTO List (
            itemName,
            qty) 
          VALUES (
            "${item.itemName}", "${item.qty}")`
      );
    }
    console.log(createListTable);
  } catch (error) {
    console.error(error);
  } finally {
    db.close();
  }
}

export async function getGroceryList() {
  const db = openDatabase();
  try {
    const result = await execute(db, "SELECT * FROM List");
    console.log(result);
  } catch (error) {
    console.error(error);
  } finally {
    db.close();
  }
}

export async function addToList(newItem: GroceryItem) {
  const db = openDatabase();
  try {
    const result = await execute(
      db,
      `INSERT INTO List (
                itemName,
                qty) 
              VALUES (
                "${newItem.itemName}", "${newItem.qty}")`
    );
    console.log(result);
  } catch (error) {
    console.error(error);
  } finally {
    db.close();
  }
}

export async function removeFromList(itemName: string) {
  const db = openDatabase();
  try {
    const result = await execute(
      db,
      `DELETE FROM List WHERE itemName="${itemName}"`
    );
    console.log(result);
  } catch (error) {
    console.error(error);
  } finally {
    db.close();
  }
}
