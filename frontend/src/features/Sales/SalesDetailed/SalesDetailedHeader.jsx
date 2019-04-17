import React from 'react'
import {Segment, Image, Item, Header, Button} from 'semantic-ui-react';

const eventImageStyle = {
    filter: 'brightness(100%)'
};

const eventImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};

const EventDetailedHeader = () => {
    return(
           <Segment.Group>
              <Segment basic attached="top" style={{ padding: '0' }}>
                <Image src="/assets/categoryImages/bike.jpeg" fluid style={eventImageStyle} />
        
                <Segment basic style={eventImageTextStyle}>
                  <Item.Group>
                    <Item>
                      <Item.Content>
                        <Header
                          size="huge"
                          content=""
                          style={{ color: 'white' }}
                        />
                        
                      </Item.Content>
                    </Item>
                  </Item.Group>
                </Segment>
              </Segment>
        
              <Segment attached="bottom">
                
                <Button color="teal">BUY</Button>
        

              </Segment>
            </Segment.Group>
    )
}

export default EventDetailedHeader
