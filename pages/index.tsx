import type { NextPage } from 'next'
import { EventList } from '../components/events/EventList'
import { getFeaturedEvents } from '../dummy-data'

const Home: NextPage = () => {
  const featuredEvents = getFeaturedEvents()
  return (
    <div>

      <EventList items={featuredEvents}></EventList>
    </div>
  )
}

export default Home
