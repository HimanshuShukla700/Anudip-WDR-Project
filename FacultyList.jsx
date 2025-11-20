import { Link } from "react-router-dom";

export default function FacultyList({ faculties, setSelectedFaculty }) {
  return (
    <div style={{ margin: "20px" }}>
      <h2>Faculty List</h2>

      {faculties.map((f, index) => (
        <div key={index} style={{ border: "1px solid black", padding: "10px", marginBottom: "10px" }}>
          <p><b>Name:</b> {f.name}</p>
          <p><b>Age:</b> {f.age}</p>
          <p><b>Id:</b> {f.id}</p>
          <p><b>Quilification:</b> {f.quilification}</p>
          <p><b>JoinDate:</b> {f.joinDate}</p>
          <p><b>status:</b> {f.status}</p>

{/*for faculity profile*/}

      <button onClick={() => setSelectedFaculty(f)}>
            <Link to="/profile">Profile</Link>
          </button>

{/* for faculty profile updation */}

          <button onClick={() => setSelectedFaculty(f)} style={{ marginLeft: "10px" }}>
            <Link to="/update">Update</Link>
          </button>

{/* delete the faculity profile from faculity list */}
          <button onClick={() => setSelectedFaculty(f)} style={{ marginLeft: "10px" }}>
            <Link to="/delete">Delete</Link>
          </button>
        </div>
      ))}
    </div>
  );
}
