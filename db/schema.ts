import {
  pgTable,
  serial,
  text,
  smallint,
  timestamp,
  integer,
  primaryKey,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").unique().notNull(),
  email: text("email").unique().notNull(),
  password: text("password").notNull(),
  is_deleted: smallint("is_deleted").notNull().default(0),
  deleted_at: timestamp("deleted_at"),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
});

export const user_access = pgTable("user_access", {
  id: serial("id").primaryKey(),
  user_id: integer("user_id")
    .references(() => users.id)
    .notNull(),
  description: text("description").notNull(),
  status: smallint("status").notNull().default(1),
  is_deleted: smallint("is_deleted").notNull().default(0),
  deleted_at: timestamp("deleted_at"),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
});

export const roles = pgTable("roles", {
  id: serial("id").primaryKey(),
  name: text("name").unique().notNull(),
  description: text("description"),
  status: smallint("status").notNull().default(1),
  is_deleted: smallint("is_deleted").notNull().default(0),
  deleted_at: timestamp("deleted_at"),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
});

export const userRole = pgTable(
  "user_role",
  {
    userId: integer("user_id")
      .references(() => users.id, { onDelete: "cascade" })
      .notNull(),
    roleId: integer("role_id")
      .references(() => roles.id, { onDelete: "cascade" })
      .notNull(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.userId, table.roleId] }),
  })
);
