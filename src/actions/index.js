import * as constants from "../constants";
import { normalize } from "normalizr";
import * as schema from "./schema";
import * as api from "../api";
import { getIsFetching } from "../reducers";
// import { history } from "../index";

export const fetchRecipes = filter => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return new Promise.resolve();
  }
  dispatch({
    type: constants.FETCH_RECIPES_REQUEST,
    filter
  });
  return api.fetchRecipes(filter).then(
    response => {
      dispatch({
        type: constants.FETCH_RECIPES_SUCCESS,
        filter,
        response: normalize(response, schema.arrayOfRecipes)
      });
    },
    error => {
      dispatch({
        type: constants.FETCH_RECIPES_FAILURE,
        filter,
        message: error.message || "Something went wrong"
      });
    }
  );
};

export const fetchRecipe = id => (dispatch, getState) => {
  /*
	 * Resolve a Promise if recipe is already fetching
	 */
  dispatch({
    type: constants.FETCH_RECIPE_REQUEST,
    id
  });
  return api.fetchRecipe(id).then(
    response => {
      dispatch({
        type: constants.FETCH_RECIPE_SUCCESS,
        id,
        response: normalize(response, schema.recipe)
      });
    },
    error => {
      dispatch({
        type: constants.FETCH_RECIPE_FAILURE,
        id,
        message: error.message || "Something went wrong"
      });
    }
  );
};

export const addRecipe = (id, recipe) => dispatch => {
  api.addRecipe(id, recipe).then(response => {
    dispatch({
      type: constants.ADD_RECIPE_SUCCESS,
      response: normalize(response, schema.recipe)
    });
    // history.goBack();
  });
};

export const deleteRecipe = id => dispatch =>
  api.deleteRecipe(id).then(response => {
    dispatch({
      type: constants.DELETE_RECIPE_SUCCESS,
      id
    });
  });

export const toggleFavorite = id => dispatch =>
  api.toggleFavorite(id).then(response => {
    dispatch({
      type: constants.TOGGLE_FAVORITE_SUCCESS,
      response: normalize(response, schema.recipe)
    });
  });

export const toggleCooked = id => dispatch =>
  api.toggleCooked(id).then(response => {
    dispatch({
      type: constants.TOGGLE_COOKED_SUCCESS,
      response: normalize(response, schema.recipe)
    });
  });

export const filterByTag = tag => ({
  type: constants.SET_FILTER_MASK,
  mask: tag
});

export const filterByMask = event => ({
  type: constants.SET_FILTER_MASK,
  mask: event.target.value
});
