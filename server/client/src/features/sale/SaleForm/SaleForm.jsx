import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import moment from "moment";
import cuid from "cuid";
import { Segment, Form, Button, Grid, Header } from "semantic-ui-react";
import {
  composeValidators,
  combineValidators,
  isRequired,
  hasLengthGreaterThan
} from "revalidate";
import { createSale, updateSale } from "../saleActions";
import TextInput from "../../../app/common/form/TextInput";
import TextArea from "../../../app/common/form/TextArea";
import SelectInput from "../../../app/common/form/SelectInput";
import DateInput from "../../../app/common/form/DateInput";
import PriceInput from "../../../app/common/form/PriceInput";

const mapState = (state, ownProps) => {
  const saleId = ownProps.match.params.id;

  let sale = {};

  if (saleId && state.sales.length > 0) {
    sale = state.sales.filter(sale => sale.id === saleId)[0];
  }

  return {
    initialValues: sale
  };
};

const actions = {
  createSale,
  updateSale
};

const type = [
  { key: "sale", text: "sale", value: "sale" },
  { key: "trade", text: "rade", value: "rade" },
  { key: "donate", text: "donate", value: "donate" }
];

const category = [
  { key: "Appliances", text: "Appliances", value: "Appliances" },
  { key: "Baby & kids", text: "Baby & kids", value: "Baby & kids" },
  { key: "Bicycles", text: "Bicycles", value: "Bicycles" },
  { key: "Tools", text: "Tools", value: "Tools" },
  {
    key: "Clothing & Accessories",
    text: "Clothing & Accessories",
    value: "Clothing & Accessories"
  },
  { key: "Housing", text: "Housing", value: "Housing" },
  { key: "Other", text: "Other", value: "Other" }
];

const validate = combineValidators({
  title: isRequired({ message: "The title is required" }),
  type: isRequired({ message: "Please provide a type" }),
  category: isRequired({ message: "Please provide a category" }),
  price: isRequired({ message: "Please provide a price or free" }),
  description: composeValidators(
    isRequired({ message: "Please enter a description" }),
    hasLengthGreaterThan(4)({
      message: "Description needs to be at least 5 characters"
    })
  )(),
  city: isRequired("city"),
  venue: isRequired("venue"),
  date: isRequired("date")
});

class SaleForm extends Component {
  onFormSubmit = values => {
    values.date = moment(values.date).format();
    if (this.props.initialValues.id) {
      this.props.updateSale(values);
      this.props.history.goBack();
    } else {
      const newSale = {
        ...values,
        id: cuid(),
        hostPhotoURL: "/assets/user.png",
        hostedBy: ""
      };
      this.props.createSale(newSale);
      this.props.history.push("/sales");
    }
  };

  render() {
    const { invalid, submitting, pristine } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          {/* <Segment> */}
          <Header sub color="Orange" content="Sale Details" />
          <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
            <Field
              name="title"
              type="text"
              component={TextInput}
              placeholder="Item Name"
            />
            <Field
              name="Type"
              type="text"
              component={SelectInput}
              options={type}
              placeholder="Sale Type"
            />
            <Field
              name="category"
              type="text"
              component={SelectInput}
              options={category}
              placeholder="Item Category"
            />
            <Field
              name="price"
              type="text"
              component={PriceInput}
              placeholder="Item description"
            />
            <Field
              name="description"
              type="text"
              component={TextArea}
              rows={3}
              placeholder="Item description"
            />

            <Header sub color="Orange" content="Sale Location details" />
            <Field
              name="city"
              type="text"
              component={TextInput}
              placeholder="City"
            />
            <Field
              name="venue"
              type="text"
              component={TextInput}
              placeholder="Venue"
            />
            {/* <Field
              name="date"
              type="text"
              component={DateInput}
              dateFormat="YYYY-MM-DD HH:mm"
              timeFormat="HH:mm"
              showTimeSelect
              placeholder="Date and time to Sale Item"
            /> */}
            <Button
              disabled={invalid || submitting || pristine}
              positive
              type="submit"
            >
              Submit
            </Button>
            <Button onClick={this.props.history.goBack} type="button">
              Cancel
            </Button>
          </Form>
          {/* </Segment> */}
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(
  mapState,
  actions
)(
  reduxForm({ form: "saleForm", enableReinitialize: true, validate })(SaleForm)
);
