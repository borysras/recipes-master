import React from "react";
import { Container, Grid, Segment, List, Icon } from "semantic-ui-react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/fontawesome-free-solid";

export default () => (
  <Container fluid className="basic inverted segment">
    <Container>
      <Grid stackable columns="equal" className="inverted">
        <Grid.Row>
          <Grid.Column width={1}>
            <Segment basic inverted>
              <Icon fitted>
                <FontAwesomeIcon fixedWidth icon={faQuestionCircle} />
              </Icon>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment basic inverted>
              <small>
                <p>
                  A{" "}
                  <a href="https://en.wikipedia.org/wiki/Recipe">
                    <strong>recipe</strong>
                  </a>{" "}
                  is a set of instructions that describes how to prepare or make something,
                  especially a culinary dish.
                  <br />Modern culinary recipes normally consist of several components:
                </p>
                <List bulleted>
                  <List.Item>The name (and often the locale or provenance) of the dish</List.Item>
                  <List.Item>How much time it will take to prepare the dish</List.Item>
                  <List.Item>
                    The required ingredients along with their quantities or proportions
                  </List.Item>
                  <List.Item>
                    Necessary equipment and environment needed to prepare the dish
                  </List.Item>
                  <List.Item>An ordered list of preparation steps and techniques</List.Item>
                  <List.Item>
                    The number of servings that the recipe will provide (the "yield")
                  </List.Item>
                  <List.Item>The texture and flavor</List.Item>
                  <List.Item>A photograph of the finished dish</List.Item>
                </List>
              </small>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment basic inverted>
              <small>
                <p>
                  Some recipes will note how long the dish will keep and its suitability for
                  freezing. Nutritional information, such as calories per serving and grams of
                  protein, fat, and carbohydrates per serving, may also be given.
                  <br />Earlier recipes often included much less information, serving more as a
                  reminder of ingredients and proportions for someone who already knew how to
                  prepare the dish.
                  <br />Recipe writers sometimes also list variations of a traditional dish, to give
                  different tastes of the same recipes.
                </p>
              </small>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment basic inverted>
              <small>
                <p>
                  A{" "}
                  <a href="https://en.wikipedia.org/wiki/Cookbook">
                    <strong>cookbook</strong>
                  </a>{" "}
                  (sometimes <em>cookery book</em> in Commonwealth English or <em>cook book</em>) is
                  a kitchen reference publication that typically contains a collection of recipes.
                  <br />Modern versions may also include colorful illustrations and advice on
                  purchasing quality ingredients or making substitutions.
                  <br />Cookbooks can also cover a wide variety of topics, including cooking
                  techniques for the home, recipes and commentary from famous chefs, institutional
                  kitchen manuals, and cultural commentary.
                </p>
              </small>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Container>
);
