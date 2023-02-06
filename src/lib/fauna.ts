import faunadb, { Client } from "faunadb";

const secret = 'fnAE8JVjXGACVTYxjAX4fYja1n9xJMZRbFsItVyn'

if (!secret) {
  throw new Error('FAUNADB_SECRET is not defined in the environment');
}

export const client = new Client({ secret });
export const q = faunadb.query;
