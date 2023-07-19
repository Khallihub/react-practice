import { useEffect, useState } from "react";
import Card from "../../UI/Card/Card";
import MealItem from "../MealItem/MealItem";
import styles from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Buger",
    description: "American, raw meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healty... and green",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  useEffect(() => {
    const backendURL = "www.firebase.comhjk"; 
    const fetchMeals = async () => {
      const response = await fetch(backendURL);
      if (!response.ok) {
        console.log("response")
        throw new Error("Something went wrong");
      }
      const responseData = await response.json();

      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  // if (isLoading) {
  //   return (
  //     <section>
  //       <p className={styles.MealsLoading}>Loading...</p>
  //     </section>
  //   );
  // }
  // if (httpError) {
  //   return (
  //     <section>
  //       <p className={styles.MealsError}>{httpError}</p>
  //     </section>
  //   );
  // }

  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    >
      {meal.name}
    </MealItem>
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
