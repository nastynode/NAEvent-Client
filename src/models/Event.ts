export enum EventType {
    Convention = "Convention",
    Campout = "Campout",
    SpeakerJam = "Speaker Jam",
    Other = ""
}

export interface Location {
    locationName: string | null,
    streetAddress: string,
    city: string,
    state: string,
    postal: string,
    country: string
}

export interface EventSubmission {
    id: string,
    title: string,
    eventType: EventType,
    location: Location,
    startDateTime: Date,
    endDateTime: Date,
    description: string,
    flier: Blob | null
    submittedBy: string,
    submittedOn: Date,
    additionalNotes: string
}

export interface ApprovedEvent extends EventSubmission {
    approvedBy: string,
    approvedOn: Date
}