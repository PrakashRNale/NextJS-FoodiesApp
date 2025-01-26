import fs from 'node:fs';
import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meals.db'); // here meals.db is the database name that we have created by running node initdb.js command. We can see that db got created in root folder as meals.db

export const getMeals = async () =>{   // this async is added so that we can return a promise, if we don't want to return a promise then we dont need to add async
    await new Promise((resolve) => setTimeout(resolve, 2000));  // added this to set some delay
    // throw new Error("Data fetching failed")  // Added this code to test error.js page
    return db.prepare('SELECT * FROM meals').all( )
}

export const getMeal = (mealId) =>{
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(mealId)
}

export const saveMeal = async (meal) => {
    meal.slug = slugify(meal.title, {lower : true});
    meal.instructions  = xss(meal.instructions);

    const extension = meal.image.name.split('.').pop();
    const fileName = `${meal.slug}.${extension}`;

    const stream = fs.createWriteStream(`public/images/${fileName}`);
    const bufferedImage = await meal.image.arrayBuffer(); 
    stream.write(Buffer.from(bufferedImage), (error) =>{
        if(error){
            throw new Error('Saving image failed');
        }
    });

    meal.image = `/images/${fileName}`;
    db.prepare(`INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug)
            VALUES (
                @title,
                @summary,
                @instructions,
                @creator,
                @creator_email,
                @image,
                @slug
            )
        `).run(meal);
}