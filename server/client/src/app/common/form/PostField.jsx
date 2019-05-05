import React from 'react';
import { Form } from 'semantic-ui-react';

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <Form.Input {...input} />
      <div className="red-text">{touched && error}</div>
    </div>
  );
};
