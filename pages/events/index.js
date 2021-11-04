import React from 'react'
import {useRouter} from 'next/router'
import { getAllEvents } from '../../dummy-data'
import { EventList } from '../../components/events/EventList'
import EventSearch from '../../components/events/EventSearch'

function index() {
    const router = useRouter()
    const events = getAllEvents()

    function findEventhandler (year, month) {
        const fullPath = `/events/${year}/${month}`

        router.push(fullPath)

    }
    return (
        <div>
            <EventSearch onSearch={findEventhandler}/>
            <EventList items={events} />
        </div>
    )
}

export default index
