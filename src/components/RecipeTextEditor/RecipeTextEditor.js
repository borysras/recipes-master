import React from "react";
import { Input } from "semantic-ui-react";

export default ({ field, form: { touched, errors }, ...props }) => (
  <div>
    {props.rows ? <textarea {...field} {...props} /> : <Input {...field} {...props} />}
    {touched[field.name] && errors[field.name] && <div className="error">{errors[field.name]}</div>}
  </div>
);
