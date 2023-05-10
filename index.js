import express from 'express';
import FileUpload from 'express-fileupload';
import cors from 'cors';
import ProductRoute from './routes/ProductRoute.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static('public'));
app.use(ProductRoute);

app.listen(process.env.PORT || 3000, () => console.log('Server berjalan di port ' + (process.env.PORT || 3000)));
