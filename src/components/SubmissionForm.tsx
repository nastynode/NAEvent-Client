import { Grid, TextField } from "@mui/material";
import { useState } from "react";
import { EventSubmission, EventType } from "../models/Event";
import {v4 as uuidv4} from "uuid";

export function SubmissionForm(){
    const initialState: EventSubmission = {
        id: uuidv4(),
        title: '',
        eventType: EventType.Other,
        location: {
            locationName: '',
            streetAddress: '',
            city: '',
            state: '',
            postal: '',
            country: ''
        },
        startDateTime: new Date(),
        endDateTime: new Date(),
        description: '',
        flier: null,
        submittedBy: '',
        submittedOn: new Date(Date.now()),
        additionalNotes: ''
    }

    const [formData, setFormData] = useState(initialState);

    return(
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField 
                        required
                        defaultValue="eg. Greater Illinois Regional Convention"
                        value={formData.title}
                    />
                </Grid>
                <Grid item xs={12}>
                    
                </Grid>
                <Grid item xs={12}>
                    
                </Grid>
                <Grid item xs={12}>
                    
                </Grid>
                <Grid item xs={12}>
                    
                </Grid>
            </Grid>
        </div>
    );
}