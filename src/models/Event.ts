export interface NaEvent {
    title: string,
    eventType: EventType,
    location: Location,
    startDateTime: Date,
    endDateTime: Date,
    description: string,
    flier: Blob | string | null
}

export enum EventType {
    Convention,
    Campout,
    Other
}

export interface Location {
    locationName: string | null,
    streetAddress: string,
    city: string,
    state: string,
    postal: string,
    country: string
}
