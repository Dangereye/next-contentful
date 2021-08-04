import { createClient } from "contentful";

const client = createClient({
  space: process.env.SPACE,
  accessToken: process.env.ACCESS_TOKEN,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({ content_type: "recipe" });
  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "recipe",
    "fields.slug": params.slug,
  });
  return { props: { recipe: items[0] } };
};

const RecipeDetails = ({ recipe }) => {
  console.log(recipe);
  return (
    <div>
      <h2>Recipe Details</h2>
    </div>
  );
};

export default RecipeDetails;
