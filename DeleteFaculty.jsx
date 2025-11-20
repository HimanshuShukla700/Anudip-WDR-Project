export default function DeleteFaculty({ faculties, setFaculties, faculty }) {
  if (!faculty) return <h3>No Faculty Selected</h3>;

  function handleDelete() {
    const filtered = faculties.filter((f) => f.id !== faculty.id);
    setFaculties(filtered);
    alert("Faculty Deleted");
  }

  return (
    <div style={{ margin: "20px" }}>
      <h2>Delete Faculty</h2>

      <p>Are you sure you want to delete <b>{faculty.name}</b>?</p>

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
