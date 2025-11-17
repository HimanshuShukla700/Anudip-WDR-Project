import { useParams } from "react-router-dom";
import { useState } from "react";

export default function CourseUpdate({ courses, setCourses }) {
  const { id } = useParams();
  const course = courses.find(c => c.courseid === id);

  const [form, setForm] = useState(course);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function updateCourse() {
    const updated = courses.map(c => (c.courseid === id ? form : c));
    setCourses(updated);
    alert("Course Updated Successfully!");
  }

  return (
    <div>
      <h2>Update Course</h2>

      <input name="coursename" value={form.coursename} onChange={handleChange} /><br />
      <input name="description" value={form.description} onChange={handleChange} /><br />
      <input name="duration" value={form.duration} onChange={handleChange} /><br />

      <button onClick={updateCourse}>Update</button>
    </div>
  );
}
