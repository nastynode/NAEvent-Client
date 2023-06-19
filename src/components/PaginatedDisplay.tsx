import { useState } from 'react';
import { Connector } from '../services/MockData';
import EventCard from '../components/EventCard';
import { ApprovedEvent } from '../models/Event';
import CircularProgress from '@mui/material/CircularProgress';

interface PaginatedDisplayProps {
    events: ApprovedEvent[] | null,
    startIndex: number,
    resultsToDisplay: number
}

function PaginatedDisplay() {
  const [pageProps, setPageProps] = useState<PaginatedDisplayProps>({
    events: null,
    startIndex: 0,
    resultsToDisplay: 10
  });

  Connector.getCurrentEventsAsync()
    .then((data) => {
      setTimeout(()=>{setPageProps((prevState) => ({ 
            ...prevState, 
            events: data
        }))}, 2000);
    });
  
  /**
   * TODO implement pagination as development procedes. May need to move this logic farther down the component tree
   */

  return (
    <>
      {pageProps.events !== null ? pageProps.events.map((event, index) => (
        <div style={{marginBottom: 30}} key={index}>
          <EventCard event={event}/>    
        </div> 
        )) :
          <CircularProgress />
        }
    </>
  )
}

export default PaginatedDisplay
