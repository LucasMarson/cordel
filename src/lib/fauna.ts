import faunadb, { Client } from "faunadb";

const secret = process.env.FAUNADB_KEY

if (!secret) {
  throw new Error('FAUNADB_SECRET is not defined in the environment');
}

export const client = new Client({ secret });
export const q = faunadb.query;
