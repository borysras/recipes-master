import startCase from "lodash/startCase";
import toLower from "lodash/toLower";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { fetchRecipe, addRecipe, deleteRecipe } from "../../actions";
import { getRecipe } from "../../reducers";
import { Container, Segment, Icon, Embed, Image, Form, Menu, Button } from "semantic-ui-react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faCamera, faVideo, faTimes, faTrashAlt, faSave } from "@fortawesome/fontawesome-pro-light";
import { Formik, Field } from "formik";
import RecipeTextEditor from "../../components/RecipeTextEditor/RecipeTextEditor";
import RecipeTagsEditor from "../../components/RecipeTagsEditor/RecipeTagsEditor";

class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: props.recipe
    };
  }

  fetchData() {
    const { recipe: { id }, fetchRecipe } = this.props;
    fetchRecipe(id);
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.recipe.id !== prevProps.recipe.id) {
      this.fetchData();
    }
  }

  render() {
    const { deleteRecipe } = this.props;
    const { recipe } = this.state;
    const {
      id,
      title = "",
      description = "",
      tags = [],
      photo = "",
      video = "",
      ingredients = [],
      directions = []
    } = recipe;
    return (
      <Container text>
        <Segment basic padded>
          {video ? (
            <Embed url={video} placeholder={photo} />
          ) : (
            <Image src={photo} shape="rounded" centered fluid alt={title} />
          )}
          <Segment basic vertical>
            <Formik
              initialValues={{
                title,
                description,
                tags,
                photo,
                video,
                ingredients: ingredients.join("\n"),
                directions: directions.join("\n")
              }}
              validate={values => {
                let errors = {};
                return errors;
              }}
              onSubmit={values => {
                // this.props.addRecipe
                console.log(id, {
                  title: startCase(toLower(values.title.trim())), // Switch Case To Title Case
                  description: values.description.trim(),
                  photo: values.photo.trim(),
                  video: values.video.trim(),
                  ingredients: values.ingredients.split("\n").filter(Boolean),
                  directions: values.directions.split("\n").filter(Boolean),
                  tags: values.tags
                });
              }}
              render={({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting
              }) => (
                <Form onSubmit={handleSubmit}>
                  <Form.Field>
                    <label>Title</label>
                    <Field
                      name="title"
                      style={{ fontWeight: 900 }}
                      type="text"
                      placeholder="e.g. Spaghetti With Tomato And Walnut Pesto"
                      component={RecipeTextEditor}
                      size="huge"
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Description</label>
                    <Field
                      name="description"
                      placeholder="e.g. Basil is a mere garnish in this nutty, cheesy, peak-season pesto sauce."
                      rows="3"
                      component={RecipeTextEditor}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Tags</label>
                    <Field
                      name="tags"
                      placeholder="e.g. #tomatoes #bake #15min"
                      component={RecipeTagsEditor}
                      type="text"
                      icon="dropdown"
                      fluid
                      multiple
                      search
                      scrolling
                      selection
                      allowAdditions
                      noResultsMessage="Type new #hashtag and press Enter (or use Space to automagically create tags as you type)."
                    />
                  </Form.Field>
                  <Form.Group widths="equal">
                    <Form.Field>
                      <label>Photo</label>
                      <Field
                        name="photo"
                        type="text"
                        placeholder="e.g. https://rcps.com/photos/577d247f.jpg"
                        component={RecipeTextEditor}
                        icon={
                          <Icon fitted>
                            <FontAwesomeIcon fixedWidth icon={faCamera} />
                          </Icon>
                        }
                        iconPosition="left"
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>Video</label>
                      <Field
                        name="video"
                        type="text"
                        placeholder="e.g. https://rcps.com/videos/4f2c1eb1.mp4"
                        component={RecipeTextEditor}
                        icon={
                          <Icon fitted>
                            <FontAwesomeIcon fixedWidth icon={faVideo} />
                          </Icon>
                        }
                        iconPosition="left"
                      />
                    </Form.Field>
                  </Form.Group>
                  <Form.Group widths="equal">
                    <Form.Field>
                      <label>Ingredients</label>
                      <Field
                        name="ingredients"
                        placeholder="e.g. 3 tablespoons olive oil..."
                        rows="6"
                        component={RecipeTextEditor}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>Directions</label>
                      <Field
                        name="directions"
                        placeholder="e.g. Preheat oven to 400°F..."
                        rows="6"
                        component={RecipeTextEditor}
                      />
                    </Form.Field>
                  </Form.Group>
                  <Menu text stackable>
                    <Link to={"/" + id} className="item">
                      <Icon fitted>
                        <FontAwesomeIcon icon={faTimes} />
                      </Icon>Cancel
                    </Link>
                    <Link
                      to="/"
                      className="item"
                      style={{ color: "red" }}
                      onClick={deleteRecipe.bind(null, id)}
                    >
                      <Icon fitted>
                        <FontAwesomeIcon icon={faTrashAlt} />
                      </Icon>Delete recipe
                    </Link>
                    <Menu.Item position="right" className="menu">
                      <Button type="submit" basic fluid>
                        <Icon fitted>
                          <FontAwesomeIcon icon={faSave} />
                        </Icon>Save as new version
                      </Button>
                    </Menu.Item>
                  </Menu>
                </Form>
              )}
            />
          </Segment>
        </Segment>
      </Container>
    );
  }
}

export default withRouter(
  connect(
    (state, { match: { params: { id } } }) => ({
      recipe: getRecipe(state, id) || {
        id: null,
        title: "",
        description: "",
        photo: "",
        video: "",
        ingredients: [],
        directions: [],
        tags: []
      }
    }),
    { fetchRecipe, addRecipe, deleteRecipe }
  )(Recipe)
);
