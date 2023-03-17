import app from './App'
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT;


app.listen(port, () => {
    return console.log('Server is running in port: ', port);
})