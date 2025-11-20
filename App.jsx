import { BrowserRouter as Router,
   Routes,
    Route, 
    Link } from "react-router-dom";
import { useState } from "react";
import './App.css'

import { useForm } from "react-hook-form";

import Register from "./Register";
import FacultyList from "./FacultyList";
import FacultyProfile from "./FacultyProfile";
import Update from "./Update";
import DeleteFaculty from "./DeleteFaculty";

export default function App() {
  const [faculties, setFaculties] = useState([]);
  const [selectedFaculty,
     setSelectedFaculty] = useState(null);

  return (
    <Router>
      <nav style={{ background: "black", padding: "10px" }}>
        <Link to="/" style={{ color: "white", marginRight: "20px" }}>Register</Link>
        <Link to="/list" style={{ color: "white", marginRight: "20px" }}>Faculty List</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Register faculties={faculties}
         setFaculties={setFaculties} />} />
        <Route path="/list" element={<FacultyList faculties={faculties}
         setSelectedFaculty={setSelectedFaculty} />} />
        <Route path="/profile" element={<FacultyProfile
         faculty={selectedFaculty} />} />
        <Route path="/update" element={<Update faculties={faculties} setFaculties={setFaculties}
         faculty={selectedFaculty} />} />
        <Route path="/delete" element={<DeleteFaculty faculties={faculties} setFaculties={setFaculties}
         faculty={selectedFaculty} />} />
      </Routes>
    </Router>
  );
}
