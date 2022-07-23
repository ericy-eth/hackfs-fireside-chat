import { connect } from "@tableland/sdk"

// Establish a connection
const tableland = await connect();

// Create a table
const { name } = await tableland.create(`name text, id int, primary key (id)`, `quickstart`)
// Wait for the table to be created, then query
const writeRes = await tableland.write(`INSERT INTO ${name} VALUES (0, 'Bobby Tables');`)
const readRes = await tableland.read(`SELECT * FROM ${name}`)