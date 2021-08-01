import { createClient } from "contentful";

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
      <h2>Recipe List</h2>
    </div>
  );
};

export default Recipes;
