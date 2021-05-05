import mongoose from 'mongoose';
const connection = {} ;

export const dbConnect = async () => {
    const MONGO_URI = "mongodb+srv://markopolo:Qgldtae%4094@cluster-mark.qxctu.mongodb.net/cocoshop?retryWrites=true&w=majority"
    if(connection.isConnected){
        console.log('hello...')
        return;
    }
    const db = await mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    connection.isConnected = db.connections[0].readyState;
    console.log('db')
    console.log(connection.isConnected);
}

export const jsonify = (obj) => {
    return JSON.parse(JSON.stringify(obj));
}