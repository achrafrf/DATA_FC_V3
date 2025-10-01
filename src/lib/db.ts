import Database from "better-sqlite3";
import path from "path";

const dbPath = path.join(process.cwd(), "data.db");
const db = new Database(dbPath);

// إنشاء جدول formations إذا ما كاينش
db.prepare(`
  CREATE TABLE IF NOT EXISTS formations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    code TEXT,
    image TEXT,
    objectifs TEXT,
    population TEXT,
    duree TEXT
  )
`).run();

export default db;
