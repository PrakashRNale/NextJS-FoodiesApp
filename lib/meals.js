import sql from 'better-sqlite3';

const db = sql('meals.db'); // here meals.db is the database name that we have created by running node initdb.js command. We can see that db got created in root folder as meals.db

export const getMeals = async () =>{
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return db.prepare('SELECT * FROM meals').all( )
}