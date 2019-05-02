import React from "react";
import { Segment, Image, Item, Header, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const inforImageStyle = {
  filter: "brightness(30%)"
};

const inforImageTextStyle = {
  position: "absolute",
  bottom: "5%",
  left: "5%",
  width: "100%",
  height: "auto",
  color: "white"
};

const InforDetailedHeader = ({ infor }) => {
  return (
    <Segment.Group>
      <Segment basic attached="top" style={{ padding: "0" }}>
        <Image
          src={`/assets/categoryImages/${infor.category}.jpg`}
          fluid
          style={inforImageStyle}
        />

        <Segment basic style={inforImageTextStyle}>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size="huge"
                  content={infor.title}
                  style={{ color: "white" }}
                />
                <p>{infor.date}</p>
                <p>
                  Hosted by <strong>{infor.hostedBy}</strong>
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>

      <Segment attached="bottom">
        {/* <Button>Cancel My Place</Button>
        <Button color="teal">JOIN THIS EVENT</Button> */}

        <Button
          as={Link}
          to={`/manageInfor/${infor.id}`}
          color="orange"
          floated="right"
        >
          Manage Information
        </Button>
      </Segment>
    </Segment.Group>
  );
};

export default InforDetailedHeader;
