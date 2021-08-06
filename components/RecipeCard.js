import Link from "next/link";
import Image from "next/image";

const RecipeCard = ({ recipe }) => {
  const { title, slug, cookingTime, thumbnail } = recipe.fields;
  return (
    <div className="recipe-card">
      <div className="recipe-card__image">
        <Image
          src={`https:${thumbnail.fields.file.url}`}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
        />
      </div>
      <div className="recipe-card__content">
        <div className="recipe-card__info">
          <h4>{title}</h4>
          <p>
            Takes approx <span>{cookingTime}</span> mins to make.
          </p>
        </div>
        <div className="recipe-card__actions">
          <Link href={`/recipes/${slug}`}>
            <a className="btn large primary">Cook This</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
