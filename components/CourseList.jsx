import { Link } from "react-router-dom";

export default function CourseList({ courses }) {
  return (
    <div>
      <h2>Course List</h2>

      {courses.length === 0 && <p>No courses available</p>}

      {courses.map((c, index) => (
        <div key={index} style={{ border: "1px solid black", padding: "10px", marginBottom: "10px" }}>
          <h3>{c.coursename}</h3>
          <Link to={`/course/${c.courseid}`}>Details</Link> |{" "}
          <Link to={`/update/${c.courseid}`}>Update</Link> |{" "}
          <Link to={`/delete/${c.courseid}`}>Delete</Link>
        </div>
      ))}
    </div>
  );
}
