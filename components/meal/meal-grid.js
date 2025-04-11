import classes from './meal-grid.module.css' ;
import MealItem from './meal-item';

export default function MealsGrid({meals}) {
    return (
        <ul className={classes.meals}>
            {meals.map((m)=> 
                <li key={m.id}>
                    <MealItem {...m}/>
                </li>
            )}
        </ul>
    )
}