import { db } from "@/db";
import { usersTable } from "@/db/schema";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // static by default, unless reading the request
export const runtime = "edge"; // specify the runtime to be edge

export async function GET(request: Request) {
  const users = await db.select().from(usersTable);

  console.log(users);

  return NextResponse.json({ users, message: "success" });
}
