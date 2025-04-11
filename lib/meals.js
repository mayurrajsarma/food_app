import sql from 'better-sqlite3' ;
const db = sql('meals.db') ;

export async function getMeals() { // it will return a promise as we add async even though db.prepare line doesn't return one
    await new Promise((resolve)=> setTimeout(resolve,2000)) ;
    //throw new error("Meals loading failed") ;
    return db.prepare('SELECT * FROM meals').all() ;  //single row: get() , multiple row: all()
}

export function getMeal(slug) {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
}