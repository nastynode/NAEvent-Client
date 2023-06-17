import { EventType, NaEvent } from "../models/Event";
import nalogo from "../assets/nalogo.png"

export const SampleEvents: NaEvent[] = [
    {
        title: "Nate's Gay Quincinera",
        eventType: EventType.Campout,
        location: {
            locationName: "El Capitan",
            streetAddress: "327 Main St",
            city: "Hobart",
            state: "IN",
            postal: "46342",
            country: "US"
        },
        startDateTime: new Date(2024, 1, 1, 17, 0, 0),
        endDateTime: new Date(2024, 1, 5, 10, 0, 0),
        description: "a gay fiesta for nate and matt",
        flier: nalogo
    },
    {
        title: "Matt's Wrestling Camp For Boys",
        eventType: EventType.Convention,
        location: {
            locationName: null,
            streetAddress: "907 Walwood Pl.",
            city: "Kalamazoo",
            state: "MI",
            postal: "49007",
            country: "US"
        },
        startDateTime: new Date(2024, 2, 1, 17, 0, 0),
        endDateTime: new Date(2024, 2, 4, 12, 0, 0),
        description: "a gay fiesta for nate and matt",
        flier: nalogo
    }
]