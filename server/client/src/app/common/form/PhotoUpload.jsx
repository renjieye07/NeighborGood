import React, { Component } from 'react';

export default class PhotoUpload extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const {
      input: { onChange }
    } = this.props;
    onChange(e.target.files[0]);
  }

  render() {
    //const { label } = this.props; //whatever props you send to the component from redux-form Field
    return (
      <div>
        <div>
          <input
            type="file"
            accept=".jpg, .png, .jpeg"
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }
}

// import React from 'react';
// import { Form } from 'semantic-ui-react';

// export default ({ input, label, meta: { error, touched }, onChange }) => {
//   return (
//     <div>
//       <label>{label}</label>
//       <Form.Input {...input} type="file" accept="image/*" onChange={onChange} />
//       <div className="red-text">{touched && error}</div>
//     </div>
//   );
// };
