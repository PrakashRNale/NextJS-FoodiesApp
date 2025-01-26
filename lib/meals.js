import fs from 'node:fs';
require('dotenv').config();
import sql from 'better-sqlite3';
import { S3 } from '@aws-sdk/client-s3';
import slugify from 'slugify';
import xss from 'xss';

// const s3 = new S3({
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//     region: process.env.AWS_RETION
//   });
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

const s3 = new S3Client({
  region: process.env.AWS_RETION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  },
});




const db = sql('meals.db'); // here meals.db is the database name that we have created by running node initdb.js command. We can see that db got created in root folder as meals.db

export const getMeals = async () =>{   // this async is added so that we can return a promise, if we don't want to return a promise then we dont need to add async
    await new Promise((resolve) => setTimeout(resolve, 4000));  // added this to set some delay
    // throw new Error("Data fetching failed")  // Added this code to test error.js page
    return db.prepare('SELECT * FROM meals').all( )
}

export const getMeal = (mealId) =>{
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(mealId)
}

// export const saveMeal = async (meal) => {
//     meal.slug = slugify(meal.title, {lower : true});
//     meal.instructions  = xss(meal.instructions);

//     const extension = meal.image.name.split('.').pop();
//     const fileName = `${meal.slug}.${extension}`;

//     const stream = fs.createWriteStream(`public/images/${fileName}`);
//     const bufferedImage = await meal.image.arrayBuffer(); 
//     stream.write(Buffer.from(bufferedImage), (error) =>{
//         if(error){
//             throw new Error('Saving image failed');
//         }
//     });

//     meal.image = `/images/${fileName}`;
//     db.prepare(`INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug)
//             VALUES (
//                 @title,
//                 @summary,
//                 @instructions,
//                 @creator,
//                 @creator_email,
//                 @image,
//                 @slug
//             )
//         `).run(meal);
// }

export const saveMeal = async (meal) => {
    console.log('before saving')
    meal.slug = slugify(meal.title, { lower: true });
    meal.instructions = xss(meal.instructions);
   
    const extension = meal.image.name.split('.').pop();
    const fileName = `${meal.slug}.${extension}`;
   
    const bufferedImage = await meal.image.arrayBuffer();
   
   // Example usage:
    await s3.send(new PutObjectCommand({
        Bucket: 'prakashrnale',
        Key: fileName,
        Body: bufferedImage,
        ContentType: meal.image.type,
    }));
   
    meal.image = fileName;
   
    db.prepare(
      `
      INSERT INTO meals
        (title, summary, instructions, creator, creator_email, image, slug)
      VALUES (
        @title,
        @summary,
        @instructions,
        @creator,
        @creator_email,
        @image,
        @slug
      )
    `
    ).run(meal);
  }