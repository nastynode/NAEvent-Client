import { ApprovedEvent, EventSubmission } from "./Event";

export interface ApiConnector {
    /**
     * @returns array of NaEvents where endDate >= todays date 
     */
    getCurrentEventsAsync(): Promise<ApprovedEvent[]>;

    /**s
     * @returns array of unapproved NaEvents
     */
    getPendingEventsAsync(): Promise<EventSubmission[]>;

    /**
     * @param eventSubmission a submission from a form
     * @returns status code number
     */
    addPendingEventAsync(eventSubmission: EventSubmission): Promise<number>;

    /**
     * @param approvedEvent event submission with appended approver and approval date
     * @returns http status code number
     */
    approveEventAsync(approvedEvent: ApprovedEvent): Promise<number>;
}