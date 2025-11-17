import { useParams, useNavigate } from "react-router-dom";

export default function CourseDelete({ courses, setCourses }) {
  const { id } = useParams();
  const navigate = useNavigate();

  function handleDelete() {
    const filtered = courses.filter(c => c.courseid !== id);
    setCourses(filtered);
    alert("Course Deleted Successfully!");
    navigate("/list");
  }

  return (
    <div>
      <h2>Are you sure you want to delete course {id}?</h2>
      <button onClick={handleDelete}>Yes, Delete</button>
    </div>
  );
}
