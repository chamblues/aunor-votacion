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

const getVideos = async (category) => {
    try {
        const query = `SELECT * FROM videos WHERE category = '${category}'`;
        // now get a Promise wrapped instance of that pool
        const promisePool = pool.promise();
        const [result, fields] = await promisePool.execute(query)
        // console.log(result)
        return result;


    } catch (error) {
        console.log('error query:', error)
    }
}

const getVote = async (dni, category) => {
    try {
        const query = `SELECT * FROM votes WHERE category = ? AND dni = ?`;
        // now get a Promise wrapped instance of that pool
        const promisePool = pool.promise();
        const [result, fields] = await promisePool.execute(query, [category, dni])
        
        return result;


    } catch (error) {
        console.log('error query:', error)
    }
}

const sendVote = async (videoId, dni, category) => {
    try {
        const dateTime = new Date().toISOString().slice(0, 19).replace('T', ' ');

        const query = `INSERT INTO votes SET ?`;
        // now get a Promise wrapped instance of that pool
        const promisePool = pool.promise();
        const result = await promisePool.query(query, {
            video_id: videoId,
            dni,
            category,
            createdAt: dateTime
        })
        // console.log('result', result)

        return result;


    } catch (error) {
        console.log('error query:', error)
    }
}



module.exports = {
    getUsers,
    getVideos,
    getVote,
    sendVote
}