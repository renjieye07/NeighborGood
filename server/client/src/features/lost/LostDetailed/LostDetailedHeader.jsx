import React from "react";
import { Segment, Image, Item, Header, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const lostImageStyle = {
  filter: "brightness(30%)"
};

const lostImageTextStyle = {
  position: "absolute",
  bottom: "5%",
  left: "5%",
  width: "100%",
  height: "auto",
  color: "white"
};

const LostDetailedHeader = ({ lost }) => {
  return (
    <Segment.Group>
      <Segment basic attached="top" style={{ padding: "0" }}>
        <Image
          src={`/assets/categoryImages/${lost.category}.jpg`}
          fluid
          style={lostImageStyle}
        />

        <Segment basic style={lostImageTextStyle}>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size="huge"
                  content={lost.title}
                  style={{ color: "white" }}
                />
                <p>{lost.date}</p>
                <p>
                  Hosted by <strong>{lost.hostedBy}</strong>
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
          to={`/manageEvent/${lost.id}`}
          color="orange"
          floated="right"
        >
          Edit
        </Button>
      </Segment>
    </Segment.Group>
  );
};

export default LostDetailedHeader;
