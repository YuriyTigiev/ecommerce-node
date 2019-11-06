import express from 'express';

import errorMiddleware from './app_api/middleware/error-middleware.mjs';

import users from './app_api/routes/users.mjs';
import auth from './app_api/routes/auth.mjs';
import categories from './app_api/routes/categories.mjs';
import products from './app_api/routes/products.mjs';
import product from './app_api/routes/product.mjs';
import {verificaTokens} from './app_api/middleware/auth.mjs';

const app = express();




app.use(express.urlencoded({extended:false}));
app.use(express.json());

// CORS 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
  });

app.use('/',auth);
app.use('/users', users);
app.use('/categories', verificaTokens, categories);
app.use('/product',product);
app.use('/products', products);

app.use(errorMiddleware.logError);
app.use(errorMiddleware.clientErrorHandler);
app.use(errorMiddleware.errorHandler);


export default app;