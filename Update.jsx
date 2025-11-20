import { useForm } from "react-hook-form";

export default function Update({ faculties, setFaculties, faculty }) {
  const { register, handleSubmit } = useForm({ defaultValues: faculty });

  function onSubmit(data) {
    const updated = faculties.map((f) =>
      f.id === faculty.id ? data : f
    );

    setFaculties(updated);
    alert("Updated Successfully");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ margin: "20px" }}>
      <h2>Update Faculty</h2>

      <input placeholder="Name" {...register("name")} /><br /><br />
      <input placeholder="ID" {...register("id")} /><br /><br />
      <input placeholder="age" {...register("age")} /><br /><br />
      <input placeholder="quilification" {...register("quilification")} /><br /><br />
      <input placeholder="joinDate" {...register("joinDate")} /><br /><br />
      <input placeholder="status" {...register("status")} /><br /><br />

      <button type="submit">Update</button>
    </form>
  );
}
