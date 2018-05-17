import uuid from 'uuid';
import moment from 'moment';
import fakeRecipes from './fakeRecipes';
import { loadFromLocalStorage, saveToLocalStorage } from './localStorage';

const recipes = loadFromLocalStorage() || fakeRecipes;
saveToLocalStorage(recipes);

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const fetchRecipes = filter =>
  delay(250).then(() => {
    if (Math.random() > 0.75)
      throw new Error('randomly forced throw, 25% chance');
    switch (filter) {
      case 'all':
        return recipes;
      case 'favorites':
        return recipes.filter(r => r.favorite);
      case 'cooked':
        return recipes.filter(r => r.cooked);
      case 'uncooked':
        return recipes.filter(r => !r.cooked);
      case 'untagged':
        return recipes.filter(r => r.tags.length === 0);
      default:
        throw new Error('Unknown filter: ' + filter);
    }
  });

export const fetchRecipe = id =>
  delay(250).then(() => {
    const recipe = recipes.find(r => r.id === id);
    if (!recipe)
      throw new Error(
        "Fake API creates new ids on refresh, hence your recipe isn't found. But we have a copy in localStorage, so we're good."
      );
    return recipe;
  });

export const addRecipe = (id, rawRecipe) =>
  delay(250).then(() => {
    if (!id) {
      const recipe = {
        ...rawRecipe,
        id: uuid.v4(),
        cooked: false,
        favorite: false,
        timestamp: moment().unix(),
        versions: []
      };
      recipes.push(recipe);
      saveToLocalStorage(recipes);
      return recipe;
    } else {
      const rx = recipes.findIndex(r => r.id === id);
      if (rx !== -1) {
        recipes[rx] = {
          ...recipes[rx],
          ...rawRecipe,
          timestamp: moment().unix()
        };
        saveToLocalStorage(recipes);
        return recipes[rx];
      }
    }
  });

export const deleteRecipe = id =>
  delay(250).then(() => {
    const rx = recipes.findIndex(r => r.id === id);
    if (rx !== -1) recipes.splice(rx, 1);
    saveToLocalStorage(recipes);
    return true;
  });

export const toggleFavorite = id =>
  delay(250).then(() => {
    const recipe = recipes.find(r => r.id === id);
    recipe.favorite = !recipe.favorite;
    saveToLocalStorage(recipes);
    return recipe;
  });

export const toggleCooked = id =>
  delay(250).then(() => {
    const recipe = recipes.find(r => r.id === id);
    recipe.cooked = !recipe.cooked;
    saveToLocalStorage(recipes);
    return recipe;
  });
