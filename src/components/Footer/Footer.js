import React from "react";
import { Container, Grid, Segment, Icon } from "semantic-ui-react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/fontawesome-pro-light";
import { faGithub } from "@fortawesome/fontawesome-free-brands";

export default () => (
  <Container fluid className="basic inverted segment void">
    <Container>
      <Grid stackable columns="equal" className="inverted">
        <Grid.Row>
          <Grid.Column width={1}>
            <Segment basic inverted className="void">
              <Icon fitted>
                <FontAwesomeIcon icon={faBullhorn} />
              </Icon>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment basic inverted className="void">
              &mdash; Hi! This is my homework, it's built with <strong>React + Redux</strong>.
              Source code is available at{" "}
              <Icon>
                <FontAwesomeIcon icon={faGithub} />
              </Icon>
              <a href="https://github.com/volodymyr-kushnir/recipes">
                <strong>https://github.com/volodymyr-kushnir/recipes</strong>
              </a>.
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Container>
);
