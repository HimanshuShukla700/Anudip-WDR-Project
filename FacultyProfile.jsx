import React from "react";

function FacultyProfile({ faculty }) {
  if (!faculty) {
    return <h2>No faculty selected</h2>;
  }

  return (
    <div>
      <h2>Faculty Profile</h2>
      <p><strong>Name:</strong> {faculty.name}</p>
      <p><strong>Age:</strong> {faculty.age}</p>
      <p><strong>id:</strong> {faculty.id}</p>
      <p><strong>quilification:</strong> {faculty.quilification}</p>
      <p><strong>joinDate:</strong> {faculty.joinDate}</p>
      <p><strong>status:</strong> {faculty.status}</p>
    </div>
  );
}

export default FacultyProfile;
