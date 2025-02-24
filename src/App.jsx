import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import EventsPage from "./components/EventsPage";
import MegaEventsPage from "./components/MegaEventsPage";
import EventDetails from "./components/EventDetailPage";
import MegaEventDetails from "./components/MegaEventDetails";
import MembershipACM from "./components/MembershipACM";
import Testimonials from "./components/Testimonials";
import ShareYourThoughts from "./components/ShareYourThoughts"; 



const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/events" element={<EventsPage />} />
                <Route path="/mega-events" element={<MegaEventsPage />} />
                <Route path="/event/:id" element={<EventDetails />} />
                <Route path="/mega-event/:id" element={<MegaEventDetails />} />
                <Route path="/membership" element={<MembershipACM />} />
                <Route path="/testimonials" element={<Testimonials />} /> 
                <Route path="/share-your-thoughts" element={<ShareYourThoughts />} /> 

            </Routes>
        </Router>
    );
};

export default App;