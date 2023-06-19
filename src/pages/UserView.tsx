import { useState } from "react";
import Navbar from "../components/Navbar";
import PaginatedDisplay from "../components/PaginatedDisplay";
import { SubmissionForm } from "../components/SubmissionForm";

export function UserView(){
    const [view, setView] = useState(true);
    return(
        <>
            <Navbar setView={setView} />
            <div style={{marginTop: 50}}>
                {view ? <PaginatedDisplay /> : <SubmissionForm />} 
            </div>
        </>
    );
}