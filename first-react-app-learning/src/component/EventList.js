import React from "react"

export default function EventList({events, handleClick}) {
    return(
        <div>
            {events.map((event, index) => (
            <React.Fragment key = {index}>
                <h2>{index}: {event.title}</h2>
                <button onClick = {() => handleClick(event.id)}>delete</button>
            </React.Fragment>
        ))}
        </div>
    )
}