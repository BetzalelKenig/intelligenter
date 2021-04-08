import dotenv from 'dotenv';

dotenv.config();

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 4000;
const vtKey = process.env.VT_API_KEY;
const DB_URL = process.env.DB_URL;

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};

const APIKEYS = {
    vtKey: vtKey
};

const config = {
    SERVER,
    APIKEYS,
    DB_URL
};

export default config;
