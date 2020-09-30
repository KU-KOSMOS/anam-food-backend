import path from 'path';
import dotenv from 'dotenv';

const envPath =
    process.env.NODE_ENV !== 'production'
        ? path.join(__dirname, '../.env.development')
        : path.join(__dirname, '../.env');
dotenv.config({ path: envPath });
