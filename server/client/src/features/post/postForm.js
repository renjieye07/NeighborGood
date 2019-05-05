import React, { Component } from 'react';
//Field can be used to render any type of html elements that collects user's inputs, eg. textarea, buttons, etc.
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form } from 'semantic-ui-react';
import postField from '../../app/common/form/PostField';
import { createPost } from '../../actions/index';
import { withRouter } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import PhotoUpload from '../../app/common/form/PhotoUpload';

import 'react-datepicker/dist/react-datepicker.css';

class PostForm extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.handleChange = this.handleChange.bind(this);
    this.state = { term: '', startDate: new Date() };
  }

  handleSubmit() {
    this.props.createPost(this.props.form.postForm.values, this.props.history);
    this.props.history.push('/dashboard');
  }
  // handleChange(date) {
  //   console.log('passed');
  //   this.setState({
  //     startDate: date
  //   });
  // }

  renderDatePicker = ({ input, meta: { touched, error }, onChange }) => (
    <div>
      <DatePicker
        {...input}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        dateFormat="MMMM d, yyyy h:mm aa"
        timeCaption="time"
        onDateChange={onChange}
        selected={this.state.startDate}
      />
      {touched && error && <span>{error}</span>}
    </div>
  );

  // renderFileInput = ({ input, meta: { touched, error }, onChange }) => {
  //   <div>
  //     <input type="file" accept=".jpg, .png, .jpeg, .gif" onChange={onChange} />
  //   </div>;
  // };

  renderFields() {
    if (this.state.term === 'event') {
      return (
        <div>
          <Field
            type="text"
            name="place"
            label="Event Address"
            component={postField}
          />
          <label>Description</label>
          <Field type="text" name="description" component="textarea" />
          <label>Date</label>
          <Field
            name="event_date"
            onChange={e => this.setState({ startDate: e })}
            value={this.state.startDate}
            component={this.renderDatePicker}
          />
        </div>
      );
    } else if (this.state.term === 'info') {
      return (
        <div>
          <label>Description</label>
          <Field type="text" name="description" component="textarea" />
        </div>
      );
    } else if (this.state.term === 'trade') {
      return (
        <div>
          <Field
            type="text"
            name="place"
            label="Trade Place"
            component={postField}
          />
          <Field
            type="text"
            name="trade_price"
            label="Price"
            component={postField}
          />
          <label>Description</label>
          <Field type="text" name="description" component="textarea" />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="container">
        <Form onSubmit={() => this.handleSubmit()}>
          <Field
            type="text"
            name="post_title"
            label="Post Title"
            component={postField}
          />
          <label>Post Type</label>
          <Field
            name="post_type"
            type="text"
            value={this.state.term}
            component="select"
            onChange={e => this.setState({ term: e.target.value })}
          >
            <option />
            <option value="event">Event</option>
            <option value="info">Information</option>
            <option value="trade">Trade</option>
          </Field>
          {this.renderFields()}
          <Field
            type="file"
            name="photo"
            label="You can even upload a photo about this post"
            component={PhotoUpload}
            // onChange={}
          />
          <br />
          <button type="submit" className="btn waves-effect waves-light right">
            Submit
            <i className="material-icons right">check</i>
          </button>
          <Link to="/dashboard" className="btn red waves-effect waves-light">
            Cancel
          </Link>
        </Form>
      </div>
    );
  }
}

//the argument values will look just like the object when we submit the form
function validate(values) {
  const errors = {};

  if (!values.post_title) {
    errors.post_title = 'You must provide a title';
  }
  if (!values.description) {
    errors.description = 'Please provide more information of the event';
  }
  return errors;
}

function mapStateToProps(state) {
  return { form: state.form, createPost: state.createPost };
}
PostForm = connect(
  mapStateToProps,
  { createPost }
)(PostForm);
export default reduxForm({
  validate,
  form: 'postForm'
})(withRouter(PostForm));
