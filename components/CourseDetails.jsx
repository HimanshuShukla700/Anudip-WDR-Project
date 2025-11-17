import { useParams } from "react-router-dom";

export default function CourseDetails({ courses }) {
  const { id } = useParams();
  const course = courses.find(c => c.courseid === id);

  return (
    <div>
      <h2>Course Details</h2>
      {course ? (
        <>
          <p><b>ID:</b> {course.courseid}</p>
          <p><b>Name:</b> {course.coursename}</p>
          <p><b>Description:</b> {course.description}</p>
          <p><b>Duration:</b> {course.duration} hrs</p>
          <p><b>Min Enrollment:</b> {course.min_enroll}</p>
          <p><b>Max Enrollment:</b> {course.max_enroll}</p>
        </>
      ) : (
        <p>Course not found.</p>
      )}
    </div>
  );
}
