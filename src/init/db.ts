import mongoose from 'mongoose';

export default (url) => {
  const mongoString = url;

  mongoose.connect(mongoString, {}, (error: any) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Database Connected');
    }
  });
};
