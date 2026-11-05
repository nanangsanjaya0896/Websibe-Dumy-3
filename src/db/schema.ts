import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const bookings = pgTable("bookings", {
  id: serial("id").primaryKey(),
  orderNumber: text("order_number").notNull().unique(),
  name: text("name").notNull(),
  whatsapp: text("whatsapp").notNull(),
  service: text("service").notNull(),
  preferredDate: text("preferred_date").notNull(),
  timeSlot: text("time_slot").notNull(),
  postcode: text("postcode"),
  status: text("status").notNull().default("pending"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});
