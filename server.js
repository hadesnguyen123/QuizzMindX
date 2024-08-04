const express = require('express');
const { sequelize } = require('./models');

app = express()
const port = 8080

const rootRouter = require('./routers')
app.use(express.json())

//router
app.use('/api/v1', rootRouter)

//static file
//listion port
app.listen(port, () => {
    console.log('App listning at port http://localhost:8080')
})

const checkConnect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
checkConnect();

