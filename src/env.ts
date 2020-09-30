import dotenv from 'dotenv';

const envPath =
    process.env.NODE_ENV !== 'production' ? '.env.development' : '.env';
dotenv.config({ path: envPath });
