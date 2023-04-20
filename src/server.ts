import dotenv from 'dotenv';
import app from './app';
import Database from './configs/db';

dotenv.config();

Database.connectToMongo();

const PORT: Number | String = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log(`Server is listening on PORT ${PORT}`)
);

server.on('error', (error) => {
  console.error(error.message);
  process.exit(1);
});
