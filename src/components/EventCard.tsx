import { Paper, Typography } from "@mui/material";
import { NaEvent } from "../models/Event";
import React from "react";

interface eventCardProps {
    event: NaEvent
}

const EventCard = ({event}: eventCardProps) => {
    return(
        <Paper elevation={3}>
            <Typography variant="h5">{event.title}</Typography>
        </Paper>
    );
}

export default React.memo(EventCard);