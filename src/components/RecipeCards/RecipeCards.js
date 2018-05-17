import classnames from "classnames";
import React from "react";
import { Grid } from "semantic-ui-react";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

export default ({ recipes, toggleCooked, toggleFavorite, filterByTag }) => (
  <Grid
    stackable
    doubling
    columns="3"
    className={classnames({
      masonry: false
    })}
  >
    {recipes &&
      recipes.map(recipe => (
        <Grid.Column key={recipe.id}>
          <RecipeCard
            {...recipe}
            onCutleryClick={toggleCooked.bind(this, recipe.id)}
            onStarClick={toggleFavorite.bind(this, recipe.id)}
            onTagClick={filterByTag}
          />
        </Grid.Column>
      ))}
  </Grid>
);
