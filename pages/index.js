import { createClient } from "contentful";
import RecipeCard from "../components/RecipeCard";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.SPACE,
    accessToken: process.env.ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: "recipe" });

  return { props: { recipes: res.items } };
}

const Recipes = ({ recipes }) => {
  console.log(recipes);
  return (
    <div>
      <h2>Recipes</h2>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.sys.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default Recipes;
