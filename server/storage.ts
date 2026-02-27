import { type Contact, type InsertContact, contactSubmissions } from "@shared/schema";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "@shared/schema";

export interface IStorage {
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
}

const DATABASE_URL = process.env.DATABASE_URL!;
const db = drizzle(DATABASE_URL, { schema });

export class DatabaseStorage implements IStorage {
  async createContact(contact: InsertContact): Promise<Contact> {
    const [result] = await db.insert(contactSubmissions).values(contact).returning();
    return result;
  }

  async getContacts(): Promise<Contact[]> {
    return db.select().from(contactSubmissions);
  }
}

export const storage = new DatabaseStorage();
