import React, { Component } from "react";
import { Menu, Icon, Input } from "semantic-ui-react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/fontawesome-pro-light";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { filterByMask } from "../../actions";

class Nav extends Component {
  render() {
    const { mask, filterByMask } = this.props;
    return (
      <Menu text>
        <Menu.Item as={NavLink} to="/?filter=all" activeClassName="active">
          All
        </Menu.Item>
        <Menu.Item as={NavLink} to="/?filter=favorites" activeClassName="active">
          Favorites
        </Menu.Item>
        <Menu.Item as={NavLink} to="/?filter=cooked" activeClassName="active">
          Cooked
        </Menu.Item>
        <Menu.Item as={NavLink} to="/?filter=uncooked" activeClassName="active">
          Uncooked
        </Menu.Item>
        <Menu.Item as={NavLink} to="/?filter=untagged" activeClassName="active">
          Untagged
        </Menu.Item>
        <Menu.Item>
          <Input
            transparent
            icon={
              <Icon fitted>
                <FontAwesomeIcon icon={faSearch} />
              </Icon>
            }
            iconPosition="left"
            placeholder="Filter by name or #tag..."
            value={mask}
            onChange={filterByMask}
          />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item as={NavLink} to="/add">
            <Icon fitted>
              <FontAwesomeIcon icon={faPlus} />
            </Icon>Add new recipe...
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default connect(
  state => {
    const { mask } = state;
    return { mask };
  },
  { filterByMask }
)(Nav);
