import { Button, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import { EventSubmission, EventType } from "../models/Event";
import {v4 as uuidv4} from "uuid";
import { DatePicker } from "react-date-picker";
import "react-date-picker/dist/DatePicker.css"
import { USstates } from "../services/Constants";
import { Connector } from "../services/MockData";

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
        Connector.addPendingEventAsync(formData)
            .then((res)=>{
                if(res === 200){
                    setFormData(initialState);
                    alert("Event submitted, if approved, it will be added to the site")
                }
                else{
                    throw new Error ("An error has occured, please wait a few minutes and attempt your submission again.")
                }
            })
            .catch((err) => {alert(JSON.stringify(err))})
        //alert(JSON.stringify(formData));
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
            <Grid container spacing={2} bgcolor="lightgray" marginTop={"5px"} paddingBottom={"10px"} marginLeft={"1px"} borderRadius={"5px"} color="black">
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
                        calendarClassName="calendar-drop-down"
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
                        calendarClassName="calendar-drop-down"
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
                <Grid item xs={6}>
                    <TextField
                        required
                        sx={{width: "93%"}} 
                        label="Submitter's Email"
                        value={formData.submittedBy}
                        name="submittedBy"
                        onChange={handleChange}
                        type="email" />
                </Grid>
                <Grid item xs={6}>
                    {/**Cosmos is too expensive for file storage, need to set up blob storage :/ */}
                    <div style={{padding: "5px", border: "1px solid #949392", borderRadius: "5px", width: "92%", minHeight: "40px"}}>
                        <label>Flier: </label>
                        <input type="file" />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        sx={{width: "98%"}}
                        label="Event Description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        multiline
                        minRows={3}
                        />
                </Grid>
            </Grid>
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <Button variant="contained" type="submit" style={{marginTop: "5px"}}>Submit</Button>
            </div>
        </form>
    );
}