import React from 'react'
import EventItem from './EventItem'
import styles from './EventList.module.css'

interface EventItems {
    items: {id: string,title:string,description: string, location:string,date:string,image:string, isFeatured: boolean}[]
}

export const EventList: React.FC<EventItems> = (props) => {
const {items} = props;


    return (
        <ul className={styles.list}>
            {items.map(event => <EventItem key={event.id} id={event.id} title={event.title} location={event.location} date={event.date} image={event.image} />)}
        </ul>
    )
}

