import { Box, Grid, Paper, TextField, Typography } from "@mui/material";
import { ApprovedEvent } from "../models/Event";
import React from "react";
import nalogo from "../assets/nalogo.png"

interface eventCardProps {
    event: ApprovedEvent
}

const EventCard = ({event}: eventCardProps) => {
    return(
        <Paper elevation={3} sx={{padding: 5, backgroundColor: '#8f97b8'}}>
            <Grid container spacing={2} maxWidth={500} minWidth={300}>
                <Grid item xs={12} className="grid-item-container">
                    <Typography variant="h5">{event.title}</Typography>
                </Grid>
                <Grid item xs={12} className="grid-item-container">
                    <Typography variant="subtitle1">{event.eventType}</Typography>
                </Grid>
                <Grid item xs={12} className="grid-item-container">
                    <div className="flier-container">
                        {event.flier === null ? <img src={nalogo} alt="DefaultImg" className="flier"/> : <img src={URL.createObjectURL(event.flier)} alt="EventFlier" className="flier"/>}
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <label>Start Date</label>
                    <Typography variant="h6">{event.startDateTime.toDateString()}</Typography>
                    <Typography variant="subtitle2">{event.startDateTime.toTimeString()}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <label>End Date</label>
                    <Typography variant="h6">{event.endDateTime.toDateString()}</Typography>
                    <Typography variant="subtitle2">{event.endDateTime.toTimeString()}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <label>Location</label>
                    {event.location.locationName !== null ? 
                        <Typography variant="h6">{event.location.locationName}</Typography>
                        : null
                    }
                    <Typography variant="body1">{event.location.streetAddress}, {event.location.city}, {event.location.state}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <label>Description</label>
                    <Typography variant="h6">{event.description}</Typography>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default React.memo(EventCard);