import React from 'react'
import { Grid } from 'semantic-ui-react'
import EventDetailedHeader from './SalesDetailedHeader'
import EventDetailedInfo from './SalesDetailedInfo'
import EventDetailedSidebar from './SalesDetailedSidebar'

const EventDetailedPage = () => {
  return (
    <Grid>
      <Grid.Column  width = {10}>
      <EventDetailedHeader/>
      <EventDetailedInfo/>
      
      </Grid.Column>
      <Grid.Column  width = {6}>
      <EventDetailedSidebar/>
      </Grid.Column>
    </Grid>
      
   
  )
}

export default EventDetailedPage
