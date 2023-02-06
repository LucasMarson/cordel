import faunadb, { Client } from "faunadb";

const secret = process.env.FAUNADB_SECRET;
export const q = faunadb.query;

console.log("FAUNADB_SECRET:", secret);

if (!secret) {
  throw new Error("Missing FaunaDB secret key in environment variable `FAUNADB_SECRET`.");
}

export const client = new Client({
  secret
});
