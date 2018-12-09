import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb://localhost/mean_blog', { useNewUrlParser: true});

mongoose.connection
        .once('open',()=>{
            console.log('connected to mongodb');
        })
        .on('error',(error)=>{
            console.log('Error on connection with mongodb',error);
        });