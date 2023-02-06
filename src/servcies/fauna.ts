import faunadb, { Client } from "faunadb";

const secret = process.env.FAUNADB_SECRET;

if (!secret) {
  process.exit(1);
}

export const client = new Client({ secret });
export const q = faunadb.query;
