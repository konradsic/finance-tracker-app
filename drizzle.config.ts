import 'dotenv/config';
import {defineConfig} from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schemas',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL ?? ""
  }
});
