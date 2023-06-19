import { ApprovedEvent, EventSubmission, EventType} from "../models/Event";
import mrcna from "../assets/mrcna.jpeg"
import { ApiConnector } from "../models/ApiConnector";

const SampleEvents: EventSubmission[] = [
    {
        id: "1",
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
        flier: null,
        submittedBy: "Scribbly Pibbles",
        submittedOn: new Date(Date.now()),
        additionalNotes: "Reeedeedeedoodoo screeeee"
    },
    {
        id: "2",
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
        flier: null,
        submittedBy: "Thomas Longbottom",
        submittedOn: new Date(Date.now()),
        additionalNotes: "I might be gay but at least I'm not mexican"
    },
    {
        id: "3",
        title: "Matt's Wrestling Camp For Boys",
        eventType: EventType.SpeakerJam,
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
        flier: null,
        submittedBy: "Thomas Longbottom",
        submittedOn: new Date(Date.now()),
        additionalNotes: "I might be gay but at least I'm not mexican"
    },
    {
        id: "4",
        title: "MRCNA",
        eventType: EventType.Other,
        location: {
            locationName: "Big ol tughouse",
            streetAddress: "907 Walwood Pl.",
            city: "Kalamazoo",
            state: "MI",
            postal: "49007",
            country: "US"
        },
        startDateTime: new Date(2024, 5, 7, 17, 0, 0),
        endDateTime: new Date(2024, 5, 9, 12, 0, 0),
        description: "Michigan Regional Convention of Narcotics Anonymous in Grand Rapids, Michigan",
        flier: null,
        submittedBy: "Thomas Longbottom",
        submittedOn: new Date(Date.now()),
        additionalNotes: "I might be gay but at least I'm not mexican"
    }
]

class MockConnector implements ApiConnector {

    private submissions: EventSubmission[] = [...SampleEvents];
    private approvedEvents: ApprovedEvent[] = [
        {
            ...SampleEvents[0],
            approvedBy: "Matthew",
            approvedOn: new Date(Date.now())
        },
        {
            ...SampleEvents[1],
            approvedBy: "Paul",
            approvedOn: new Date(Date.now())
        },
        {
            ...SampleEvents[3],
            approvedBy: "Deep Dick",
            approvedOn: new Date(Date.now())
        }
    ];

    async getCurrentEventsAsync(): Promise<ApprovedEvent[]> {    
        const img = await fetch(mrcna);
        this.approvedEvents[2].flier = await img.blob();

        return this.approvedEvents;
    }

    async getPendingEventsAsync(): Promise<EventSubmission[]> {
        return this.submissions;
    }

    async addPendingEventAsync(eventSubmission: EventSubmission): Promise<number> {
        this.submissions.push(eventSubmission);
        return 200;
    }

    async approveEventAsync(approvedEvent: ApprovedEvent): Promise<number> {
        this.approvedEvents.push(approvedEvent);
        return 200;
    }
}

export const Connector = new MockConnector();