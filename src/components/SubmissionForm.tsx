import { Button, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import { EventSubmission, EventType } from "../models/Event";
import {v4 as uuidv4} from "uuid";
import { DatePicker } from "react-date-picker";
import "react-date-picker/dist/DatePicker.css"
import { USstates } from "../services/Constants";

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

    const [formData, setFormData] = useState<EventSubmission>(initialState);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert(JSON.stringify(formData));
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleLocationChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormData((prevData) => ({
            ...prevData,
            location: {
                ...prevData.location,
                [name]: value
            }
        }));
    }
    return(
        <form onSubmit={handleSubmit}>
            <Typography variant="h5">Submit an Event</Typography>
            <Typography variant="subtitle1">All event submissions will be reviewed by a site moderator and, if approved, added to the event list.</Typography>
            <Grid container spacing={2} bgcolor="lightgray" marginTop={"5px"} marginLeft={"1px"} borderRadius={"5px"} color="black">
                <Grid item xs={12}>
                    <TextField 
                        required
                        sx={{width: "98%"}}
                        value={formData.title}
                        label="Event Name"
                        name="title"
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={5} style={{display: "flex", flexDirection: "column"}}>
                    <label>Event Start</label>
                    <DatePicker 
                        value={formData.startDateTime}
                        onChange={(newVal) => {
                            setFormData({
                                ...formData,
                                startDateTime: new Date(newVal?.toString() ?? Date.now())
                            });
                        }}
                    />
                    {/**TODO TIME PICKER */}
                </Grid>
                <Grid item xs={5} style={{display: "flex", flexDirection: "column"}}>
                    <label>Event End</label>
                    <DatePicker 
                        value={formData.endDateTime}
                        onChange={(newVal) => {
                            setFormData({
                                ...formData,
                                endDateTime: new Date(newVal?.toString() ?? Date.now())
                            });
                        }}
                    />
                </Grid>
                <Grid item xs={12} style={{display: "flex", flexDirection: "column"}}>
                    <label style={{marginBottom: "5px"}}>Location</label>
                    <TextField 
                        sx={{width: "98%"}}
                        value={formData.location.locationName}
                        label="Location Name (optional)"
                        name="locationName"
                        onChange={handleLocationChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        required
                        sx={{width: "98%"}}
                        value={formData.location.streetAddress}
                        label="Street Address"
                        name="streetAddress"
                        onChange={handleLocationChange}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField 
                        sx={{width: "100%"}}
                        required
                        value={formData.location.city}
                        label="City"
                        name="city"
                        onChange={handleLocationChange}
                    />
                </Grid>
                <Grid item xs={4}>
                    <InputLabel id="state-code-selector"></InputLabel>
                    <Select
                        sx={{width: "100%"}}
                        required
                        name="state"
                        value={formData.location.state}
                        labelId="state-code-selector"
                        onChange={(newVal) => {
                            setFormData({
                                ...formData,
                                location: {
                                    ...formData.location,
                                    state: newVal.target.value as string
                                }
                            })
                        }}
                    >
                        {USstates.map((code, index)=>(
                            <MenuItem key={index} value={code[0]}>{code[1]}</MenuItem>
                        ))}
                    </Select>
                </Grid>
                <Grid item xs={4}>
                    <TextField 
                        sx={{width: "93%"}}
                        required
                        value={formData.location.postal}
                        label="Postal"
                        name="postal"
                        onChange={handleLocationChange}
                    />
                </Grid>
            </Grid>
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <Button variant="contained" type="submit" style={{marginTop: "5px"}}>Submit</Button>
            </div>
        </form>
    );
}