import React from 'react'
import {Segment, List, Label, Item} from 'semantic-ui-react';

const EventDetailedSidebar = () => {
    return(
           <div>
              <Segment
                textAlign="center"
                style={{ border: 'none' }}
                attached="top"
                secondary
                inverted
                color="teal"
              >
                2 People Interested
              </Segment>
              <Segment attached>
                <List relaxed divided>
                  <Item style={{ position: 'relative' }}>
                    <Label
                      style={{ position: 'absolute' }}
                      color="orange"
                      ribbon="right"
                    >
                     
                    </Label>
                    <Item.Image size="tiny" src="/assets/user.png" />
                    <Item.Content verticalAlign="middle">
                      <Item.Header as="h3">
                        <a>Buyer's Name</a>
                      </Item.Header>
                    </Item.Content>
                  </Item>
                </List>
              </Segment>
            </div>
    )
}

export default EventDetailedSidebar
