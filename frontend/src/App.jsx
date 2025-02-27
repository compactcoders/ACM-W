import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";  
import EventsPage from "./components/EventsPage";
import MegaEventsPage from "./components/MegaEventsPage";
import EventDetails from "./components/EventDetailPage";
import MegaEventDetails from "./components/MegaEventDetails";
import MembershipACM from "./components/MembershipACM";
import Testimonials from "./components/Testimonials";
import ShareYourThoughts from "./components/ShareYourThoughts";
import CoreTeam from "./components/Coreteam"; 

const App = () => {
    const [backendData, setBackendData] = useState("");

    useEffect(() => {
        axios.get("http://localhost:5000/api/data")
            .then(response => setBackendData(response.data.message))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <Router>
            <Navbar />
            <div>
                <h2>Backend Response: {backendData ? backendData : "Loading..."}</h2>
            </div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/mega-events" element={<MegaEventsPage />} />
                <Route path="/event/:id" element={<EventDetails />} />
                <Route path="/mega-event/:id" element={<MegaEventDetails />} />
                <Route path="/membership" element={<MembershipACM />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/share-your-thoughts" element={<ShareYourThoughts />} />
                <Route path="/core-team" element={<CoreTeam />} />
            </Routes>
        </Router>
    );
};

export default App;
