import { useState } from "react";

export default function CourseRegistration({ courses, setCourses }) {
  const [form, setForm] = useState({
    courseid: "",
    coursename: "",
    description: "",
    duration: "",
    min_enroll: "",
    max_enroll: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCourses([...courses, form]);
    alert("Course Registered Successfully!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Course Registration</h2>

      <input name="courseid" placeholder="Course ID" onChange={handleChange} required /><br />
      <input name="coursename" placeholder="Course Name" onChange={handleChange} required /><br />
      <input name="description" placeholder="Description" onChange={handleChange} required /><br />
      <input name="duration" type="number" placeholder="Duration (hrs)" onChange={handleChange} required /><br />
      <input name="min_enroll" type="number" placeholder="Min Enrollment" onChange={handleChange} required /><br />
      <input name="max_enroll" type="number" placeholder="Max Enrollment" onChange={handleChange} required /><br />

      <button type="submit">Register</button>
    </form>
  );
}
