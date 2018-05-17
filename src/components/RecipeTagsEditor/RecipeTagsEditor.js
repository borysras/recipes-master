import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";

class RecipeTagsEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.field.value.map(t => "#" + t),
      options: [
        ...props.field.value.map(t => ({
          text: ("#" + t).replace("##", "#"),
          value: ("#" + t).replace("##", "#")
        }))
      ]
    };
  }

  handleTagsAddition = (event, { value }) => {
    value = (value.startsWith("#") ? value : "#" + value).replace(/ /g, "");
    this.setState({
      options: [...this.state.options.filter(t => t.value !== value), { text: value, value }]
    });
  };

  handleTagsChange = (event, { value }) => {
    this.setState(
      {
        // always convert last item to a #hashtag, merge with the original array and deduplicate it
        value: [...new Set(value.concat(("#" + value.pop()).replace("##", "#").replace(/ /g, "")))]
      },
      () => this.props.form.setFieldValue("tags", this.state.value.map(t => t.replace("#", "")))
    );
  };

  handleTagsKeyDown = event => {
    if (event.which === 32) {
      event.preventDefault();
      // don't even try to add an empty tag
      if (event.target.value.trim() !== "") {
        this.handleTagsAddition(event, { value: event.target.value });
        this.handleTagsChange(event, {
          value: [...this.state.value, event.target.value]
        });
      }
    }
  };

  render() {
    const { field, form: { touched, errors }, ...props } = this.props;
    return (
      <div>
        <Dropdown
          {...props}
          {...this.state}
          onAddItem={this.handleTagsAddition}
          onKeyDown={this.handleTagsKeyDown}
          onChange={this.handleTagsChange}
        />
        {touched[field.name] &&
          errors[field.name] && <div className="error">{errors[field.name]}</div>}
      </div>
    );
  }
}

export default RecipeTagsEditor;
