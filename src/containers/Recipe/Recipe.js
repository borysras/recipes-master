import moment from "moment";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { fetchRecipe, toggleFavorite, toggleCooked } from "../../actions";
import { getRecipe } from "../../reducers";
import {
  Container,
  Segment,
  Menu,
  Popup,
  Icon,
  Embed,
  Image,
  Header,
  List,
  Divider,
  Grid
} from "semantic-ui-react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faStar, faUtensilsAlt, faHome, faPencilAlt } from "@fortawesome/fontawesome-pro-light";
import {
  faStar as faStarSolid,
  faUtensilsAlt as faUtensilsAltSolid
} from "@fortawesome/fontawesome-pro-solid";

class Recipe extends Component {
  fetchData() {
    const { id, fetchRecipe } = this.props;
    fetchRecipe(id);
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.fetchData();
    }
  }

  render() {
    const { id, recipe, toggleFavorite, toggleCooked } = this.props;
    if (recipe === undefined) return null; // dirty: check for isFetching properly
    const {
      title,
      description,
      photo,
      video,
      ingredients,
      directions,
      tags,
      cooked,
      favorite,
      timestamp,
      versions
    } = recipe;
    return (
      <Container text>
        <Segment basic padded>
          <Menu text>
            <Menu.Item as={Link} to="/">
              <Icon fitted>
                <FontAwesomeIcon icon={faHome} />
              </Icon>Home
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item>
                <Popup
                  trigger={
                    <a
                      style={{ color: favorite ? "#FFB70A" : "inherit" }}
                      onClick={() => toggleFavorite(id)}
                    >
                      <Icon fitted>
                        <FontAwesomeIcon icon={favorite ? faStarSolid : faStar} />
                      </Icon>
                    </a>
                  }
                  position="top center"
                  inverted
                  size="tiny"
                >
                  <Popup.Content>Make this recipe your favorite</Popup.Content>
                </Popup>
              </Menu.Item>
              <Menu.Item>
                <Popup
                  trigger={
                    <a
                      style={{ color: cooked ? "#95A5A6" : "inherit" }}
                      onClick={() => toggleCooked(id)}
                    >
                      <Icon fitted>
                        <FontAwesomeIcon icon={cooked ? faUtensilsAltSolid : faUtensilsAlt} />
                      </Icon>
                    </a>
                  }
                  position="top center"
                  inverted
                  size="tiny"
                >
                  <Popup.Content>Mark this recipe as cooked</Popup.Content>
                </Popup>
              </Menu.Item>
              {versions.length > 0 ? (
                <Menu.Item>
                  <Popup
                    trigger={
                      <a className="left floated" style={{ fontWeight: "800" }}>
                        &times;{versions.length + 1}
                      </a>
                    }
                    position="top center"
                    inverted
                    size="tiny"
                  >
                    <Popup.Content>
                      This recipe has {versions.length + 1} version{versions.length + 1 > 1
                        ? "s"
                        : ""}
                    </Popup.Content>
                  </Popup>
                </Menu.Item>
              ) : null}
              <Menu.Item>
                <Popup
                  trigger={<em>{moment.unix(timestamp).fromNow()}</em>}
                  position="top center"
                  inverted
                  size="tiny"
                >
                  <Popup.Content>
                    {moment.unix(timestamp).format("dddd, MMMM Do YYYY, HH:mm:ss")}
                  </Popup.Content>
                </Popup>
              </Menu.Item>
            </Menu.Menu>
          </Menu>
          {video ? (
            <Embed url={video} placeholder={photo} />
          ) : (
            <Image src={photo} shape="rounded" centered fluid alt={title} />
          )}
          <Segment basic vertical>
            <Header textAlign="center" size="large" style={{ fontWeight: 900 }}>
              {title}
              <Header.Subheader>{description}</Header.Subheader>
            </Header>
            <List horizontal link style={{ fontWeight: "700" }}>
              {tags.map((t, tx) => (
                <List.Item key={tx}>
                  <List.Content>#{t}</List.Content>
                </List.Item>
              ))}
            </List>
            <Divider />
            <Grid stackable doubling columns="2">
              <Grid.Column>
                <Header as="h4">Ingredients</Header>
                {ingredients.length > 0 ? (
                  <List bulleted>
                    {ingredients.map((i, ix) => <List.Item key={ix}>{i}</List.Item>)}
                  </List>
                ) : null}
              </Grid.Column>
              <Grid.Column>
                <Header as="h4">Directions</Header>
                {directions.length > 0 ? (
                  <List ordered>
                    {directions.map((d, dx) => <List.Item key={dx}>{d}</List.Item>)}
                  </List>
                ) : null}
              </Grid.Column>
            </Grid>
          </Segment>
          <Menu text>
            <Menu.Menu position="right">
              <Menu.Item as={Link} to={"/" + id + "/edit"}>
                <Icon>
                  <FontAwesomeIcon icon={faPencilAlt} />
                </Icon>Edit
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Segment>
      </Container>
    );
  }
}

export default withRouter(
  connect(
    (state, router) => {
      const { id } = router.match.params;
      return {
        recipe: getRecipe(state, id),
        id
      };
    },
    { fetchRecipe, toggleFavorite, toggleCooked }
  )(Recipe)
);
