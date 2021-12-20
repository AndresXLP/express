import mongoose from 'mongoose';

export const connect = ({ url = '', username, password }, options = {}) => {
  const encodedPassword = encodeURIComponent(password);
  const databaseName = 'productList';
  let dburl;
  if (username !== undefined && password !== undefined) {
    dburl = `mongodb+srv://${username}:${password}@cluster0.q4b3r.mongodb.net/${databaseName}?retryWrites=true&w=majority`;
    console.log('Connected from MongoAtlas');
  }
  mongoose.connect(dburl, { ...options });

  mongoose.connection.on('connected', () => {
    console.log('Database connected');
  });
  mongoose.connection.on('close', () => {
    console.log('Database disconnected');
  });
  mongoose.connection.on('error', (error) => {
    console.error(`Database error: ${error}`);
  });
  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('Database disconnected, becouse app termination');
      process.exit(0);
    });
  });
};

export const disconnect = () => {
  mongoose.connection.close(() => {
    console.log('Database disconnected successfully');
  });
};
