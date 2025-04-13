import fs from 'node:fs' ;
import sql from 'better-sqlite3' ;
import slugify from 'slugify' ;
import xss from 'xss' ;

const db = sql('meals.db') ;

export async function getMeals() { // it will return a promise as we add async even though db.prepare line doesn't return one
    await new Promise((resolve)=> setTimeout(resolve,2000)) ;
    //throw new error("Meals loading failed") ;
    return db.prepare('SELECT * FROM meals').all() ;  //single row: get() , multiple row: all()
}

export function getMeal(slug) {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
}

export async function saveMeal(meal) {
    meal.slug = slugify(meal.title,{lower:true}) ;
    meal.instructions = xss(meal.instructions) ; //It cleans up HTML or user input by removing or escaping dangerous tags and attributes (like <script>, onload, onclick, etc.) that could be used to inject JavaScript.

    //for the image
    const extension = meal.image.name.split('.').pop() ;
    const filename = `${meal.slug}.${extension}`

    //now we need to write that file to a public folder 
    //to that we will use api provided by nodejs called fs
    const stream = fs.createWriteStream(`public/images/${filename}`) ;
    const bufferedImage = await meal.image.arrayBuffer() ;//returns a promise

    stream.write(Buffer.from(bufferedImage),(error)=> {
        if(error) {
            throw new Error('Failed to save the image!') ;
        }
    }) ;

    meal.image = `/images/${filename}` ;

    db.prepare(`
        INSERT INTO meals
          (title,summary,instructions,creator,creator_email,image,slug)
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
