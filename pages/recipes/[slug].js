import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Skeleton from "../../components/Skeleton";

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
  return { paths, fallback: true };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "recipe",
    "fields.slug": params.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return { props: { recipe: items[0] }, revalidate: 1 };
};

const RecipeDetails = ({ recipe }) => {
  if (!recipe) return <Skeleton />;
  const { featuredImage, title, cookingTime, ingredients, method } =
    recipe.fields;
  return (
    <div className="recipe-details">
      <div className="recipe-details__banner">
        <Image
          src={`https:${featuredImage.fields.file.url}`}
          width={featuredImage.fields.file.details.image.width}
          height={featuredImage.fields.file.details.image.height}
        ></Image>
        <h2>{title}</h2>
      </div>
      <div className="recipe-details__info">
        <p>Takes about {cookingTime} mins to cook.</p>
        <h3>Ingredients:</h3>
        <div className="recipe-details__ingredients">
          {ingredients.map((ing) => (
            <span key={ing}>{ing}</span>
          ))}
        </div>
      </div>
      <div className="recipe-details__method">
        <h3>Method:</h3>
        {documentToReactComponents(method)}
      </div>
    </div>
  );
};

export default RecipeDetails;
