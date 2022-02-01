const pool = require('./config');
// const mysql = require('mysql2');

// console.log(pool)
const getUsers = async (dni) => {
    try {
        const query = `SELECT * FROM users WHERE dni = ${dni}`;
        // now get a Promise wrapped instance of that pool
        const promisePool = pool.promise();
        const [result, fields] = await promisePool.execute(query)
        // console.log(result)
        return result;


    } catch (error) {
        console.log('error query:', error)
    }
}




module.exports = {
    getUsers

}