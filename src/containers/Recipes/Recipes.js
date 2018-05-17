import queryString from "query-string";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Segment, Header } from "semantic-ui-react";
import Nav from "../../components/Nav/Nav";
import RecipeCards from "../../components/RecipeCards/RecipeCards";
import { getVisibleRecipes, getIsFetching, getErrorMessage } from "../../reducers";
import { fetchRecipes, toggleFavorite, toggleCooked, filterByTag } from "../../actions";
import "./Recipes.css";

class Recipes extends Component {
  fetchData() {
    const { filter, fetchRecipes } = this.props;
    fetchRecipes(filter);
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  render() {
    const {
      recipes,
      isFetching,
      errorMessage,
      toggleFavorite,
      toggleCooked,
      filterByTag
    } = this.props;
    return errorMessage ? (
      <Header as="h3" textAlign="center" color="grey" className="error-message">
        <div>&mdash; Can't fetch recipes because of "{errorMessage}".</div>
        <a onClick={this.fetchData.bind(this)}>&mdash; Okay, retry.</a>
      </Header>
    ) : (
      <Segment basic>
        <Nav />
        <Segment basic loading={isFetching}>
          {!isFetching && !recipes.length ? (
            <Header as="h3" textAlign="center" color="grey" className="error-message">
              <div>&mdash; Meh, empty. There are no recipes in this collection, try elsewhere.</div>
            </Header>
          ) : (
            <RecipeCards
              recipes={recipes}
              toggleCooked={toggleCooked}
              toggleFavorite={toggleFavorite}
              filterByTag={filterByTag}
            />
          )}
        </Segment>
      </Segment>
    );
  }
}

export default withRouter(
  connect(
    (state, router) => {
      const filter = queryString.parse(router.location.search).filter || "all";
      return {
        recipes: getVisibleRecipes(state, filter),
        isFetching: getIsFetching(state, filter),
        errorMessage: getErrorMessage(state, filter),
        filter
      };
    },
    { fetchRecipes, toggleFavorite, toggleCooked, filterByTag }
  )(Recipes)
);
