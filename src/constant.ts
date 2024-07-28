// import third-party modules
import * as dotenv from 'dotenv';

export const APP_NAME: string = 'Immich';
export const APP_VERSION: string = '0.0.15';
export const PORT: number = parseInt(process.env.PORT, 10) || 12284;

if (process.env.NODE_ENV == 'production') {
  dotenv.config();
} else {
  dotenv.config({ path: '.env.local' });
}

export const DATABASE_HOST: string = process.env.DATABASE_HOST;
export const DATABASE_PORT: number =
  parseInt(process.env.DATABASE_PORT, 10) || 5432;
export const DATABASE_USER: string = process.env.DATABASE_USER;
export const DATABASE_PASSWORD: string = process.env.DATABASE_PASSWORD;
export const DATABASE_NAME: string = process.env.DATABASE_NAME;
