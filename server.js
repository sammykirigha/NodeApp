const express = require('express')
const app = express();
const usersRoute = require('./routes/users')
const productsRoute = require('./routes/products')
const cartsRoute = require('./routes/carts')

app.use(express.json())
app.use('/users', usersRoute)
app.use('/products', productsRoute)
app.use('/carts', cartsRoute)

app.listen(5055, () => {
    console.log("App running on port 5055");
})