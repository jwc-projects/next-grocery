import sqlite, { Database } from "sqlite3";
import DB_SEED from "./seed.json";
import { GroceryItem } from "@/types/database";

export function openDatabase() {}
export async function seedDatabase() {}
export async function getGroceryList() {}
export async function addToList(newItem: GroceryItem) {}
export async function removeFromList(itemId: string) {}
