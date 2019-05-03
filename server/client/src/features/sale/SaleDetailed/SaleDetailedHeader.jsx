import React from "react";
import { Segment, Image, Item, Header, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const saleImageStyle = {
  filter: "brightness(30%)"
};

const saleImageTextStyle = {
  position: "absolute",
  bottom: "5%",
  left: "5%",
  width: "100%",
  height: "auto",
  color: "white"
};

const SaleDetailedHeader = ({ sale }) => {
  return (
    <Segment.Group>
      <Segment basic attached="top" style={{ padding: "0" }}>
        <Image
          src={`/assets/categoryImages/${sale.category}.jpg`}
          //src={sale.itemPhotoURL}
          fluid
          style={saleImageStyle}
        />

        <Segment basic style={saleImageTextStyle}>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size="huge"
                  content={sale.title}
                  style={{ color: "white" }}
                />
                {/* <p>{sale.date}</p>
                <p>
                  Sale by <strong>{sale.SoldBy}</strong>
                </p> */}
                <p>Price:{sale.price}</p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>

      <Segment attached="bottom">
        <Button as={Link} to={`/sales`}>
          Back
        </Button>
        {/* <Button color="teal">JOIN THIS EVENT</Button> */}

        <Button
          as={Link}
          to={`/manageSale/${sale.id}`}
          color="orange"
          floated="right"
        >
          Manage Sale
        </Button>
      </Segment>
    </Segment.Group>
  );
};

export default SaleDetailedHeader;
