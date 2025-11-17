import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CourseRegistration from "./components/CourseRegistration";
import CourseList from "./components/CourseList";
import CourseDetails from "./components/CourseDetails";
import CourseUpdate from "./components/CourseUpdate";
import CourseDelete from "./components/CourseDelete";
import ModuleCreation from "./components/ModuleCreation";
import FacultyAlignment from "./components/FacultyAlignment";

function App() {
  const [courses, setCourses] = useState([]);

  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <h1>LMS – Course Management Module</h1>

        <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
          <li><Link to="/">Register Course</Link></li>
       <li><Link to="/list">Course List</Link> </li>
          <li><Link to="/modules"> Modules</Link> </li>
        <li><Link to="/faculty">Faculty Alignment</Link></li> 
        </ul>

        <Routes>
          <Route path="/" element={<CourseRegistration setCourses={setCourses} courses={courses} />} />
          <Route path="/list" element={<CourseList courses={courses} />} />
          <Route path="/course/:id" element={<CourseDetails courses={courses} />} />
          <Route path="/update/:id" element={<CourseUpdate courses={courses}
           setCourses={setCourses} />} />
          <Route path="/delete/:id" element={<CourseDelete courses={courses}
           setCourses={setCourses} />} />
          <Route path="/modules" element={<ModuleCreation />} />
          <Route path="/faculty" element={<FacultyAlignment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
