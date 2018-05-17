import React from "react";
import { withRouter } from "react-router";
import { Switch, Route } from "react-router";
import { Container, Segment } from "semantic-ui-react";
import Logo from "../../components/Logo/Logo";
import Quote from "../../components/Quote/Quote";
import Recipes from "../Recipes/Recipes";
import Recipe from "../Recipe/Recipe";
import RecipeEdit from "../RecipeEdit/RecipeEdit";
import Wiki from "../../components/Wiki/Wiki";
import Footer from "../../components/Footer/Footer";

export default withRouter(({ match: { path, isExact } }) => (
  <Container fluid>
    <Container>
      <Segment basic vertical padded="very">
        <Segment basic vertical padded="very" textAlign="center">
          <Logo small={!(path === "/" && isExact)} />
          <Route path="/" exact component={Quote} />
        </Segment>
        <Switch>
          <Route path="/" exact component={Recipes} />
          <Route path="/add" exact component={RecipeEdit} />
          <Route path="/:id/edit" exact component={RecipeEdit} />
          <Route path="/:id" exact component={Recipe} />
        </Switch>
      </Segment>
    </Container>
    <Wiki />
    <Footer />
  </Container>
));
