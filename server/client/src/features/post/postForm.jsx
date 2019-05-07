import React, { Component } from 'react';
//Field can be used to render any type of html elements that collects user's inputs, eg. textarea, buttons, etc.
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form } from 'semantic-ui-react';
import postField from '../../app/common/form/PostField';
import { createPost, getUrl } from '../../actions/index';
import { withRouter } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
import 'react-datepicker/dist/react-datepicker.css';

import PhotoUpload from '../../app/common/form/PhotoUpload';

class PostForm extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePhotoSelect = this.handlePhotoSelect.bind(this);
    this.state = { term: '', startDate: new Date(), image: [], photo: '' };
  }

  handleSubmit() {
    console.log(this.props.form.postForm);

    this.props.createPost(this.props.form.postForm.values, this.props.history);
    this.props.history.push('/dashboard');
  }
  handlePhotoSelect = async event => {
    await this.setState({
      image: event.target.files[0]
    });
    console.log(this.state);
  };
  async handlePhotoUpload() {
    await this.props.getUrl(this.state.image);
    console.log(this.props);
    await this.setState({
      photo: this.props.getURL.secure_url
    });
    console.log(this.state.photo);
    this.props.change('photo', this.state.photo);
  }

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

  renderFileUpload = () => (
    <div>
      <label>You can even upload an image</label>
      <input type="file" accept="image/*" onChange={this.handlePhotoSelect} />
      <button type="button" onClick={e => this.handlePhotoUpload(e)}>
        upload
      </button>
    </div>
  );

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
            name="photo"
            label="You can even upload an image"
            component={this.renderFileUpload}
            onChange={e =>
              this.setState({ photo: this.props.getUrl(e).secure_url })
            }
          />
          {/* <Field
            name="photo"
            label="You can even upload an image"
            component={this.renderFileUpload}
          /> */}
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
  return {
    form: state.form,
    createPost: state.createPost,
    getURL: state.getURL
  };
}
PostForm = connect(
  mapStateToProps,
  { createPost, getUrl }
)(PostForm);
export default reduxForm({
  validate,
  form: 'postForm'
})(withRouter(PostForm));
