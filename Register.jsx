
import { useForm } from "react-hook-form";

export default function Register({ faculties, setFaculties }) {
  const {register,handleSubmit,reset,formState: { errors }} = useForm();

  function onSubmit(data) {
    setFaculties([...faculties, data]);
    alert("Registered Successfully");
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ margin: "20px" }}>
      <h2>Faculty Registration</h2>

      {/* Name Field with Validation */}
      <input
        placeholder="Name"
        {...register("name", {
          required: "Name is required",
          minLength: {
            value: 3,
            message: "Name must be at least 3 characters",
          },
          maxLength: {
            value: 20,
            message: "Name must be less than 20 characters",
          },
          pattern: {
            value: /^[A-Za-z ]+$/,
            message: "Only letters are allowed",
          },
        })}
      />
      {errors.name && (
        <p style={{ color: "yellow" }}>{errors.name.message}</p>
      )}

      <br/><br/>

       <input
        placeholder="Age"
        {...register("age", {
          required: "age is required",
          minLength: {
            value: 2,
            message: "Name must be at least 2 number",
          },
          maxLength: {
            value: 3,
            message: "Name must be less than 3 number",
          },
          pattern: {
            value: Number,
            message: " only numbers are allowed",
          },
        })}
      />
      {errors.age && (
        <p style={{ color: "yellow" }}>{errors.age.message}</p>
      )}


      <br /><br />

       <input
        placeholder="Id"
        {...register("id", {
          required: "id is required",
          minLength: {
            value: 3,
            message: "id must be at least 2 characters",
          },
          maxLength: {
            value: 20,
            message: "Name must be less than 20 characters",
          },
          pattern: {
            value: /^[A-Za-z ]+$/,
            message: "All letters are allowed",
          },
        })}
      />
      {errors.id && (
        <p style={{ color: "yellow" }}>{errors.id.message}</p>
      )}

    <br/><br/>

   { /* Quilification*/}
     <input
        placeholder="Quilification"
        {...register("quilification", {
          required: "qulification  is required",
          minLength: {
            value: 3,
            message: "quilification must be at least 3 characters",
          },
          maxLength: {
            value: 20,
            message: " quilification must be less than 20 characters",
          },
          pattern: {
            value: /^[A-Za-z ]+$/,
            message: "Only letters are allowed",
          },
        })}
      />
      {errors.name && (
        <p style={{ color: "yellow" }}>{errors.quilification.message}</p>
      )}
       
       <br/><br/>
      {/* Join-Date */}
      <input
        placeholder="joinDate"
        {...register("joinDate", {
          required: "joinDate is required",
          pattern:{
            value:Date,
            message:"invalid joinDate"
          }
        })}
      />
      {errors.dept && (
        <p style={{ color: "red" }}>{errors.joinDate.message}</p>
      )}

      <br /><br />

      {/* Email */}
      <input
        placeholder="status"
        {...register("status", {
          required: "status is required",
          pattern: {
           value:/^[A-Za-z]+-[0-9]+$/,
            message: "Invalid state format",
          },
        })}
      />
      {errors.email && (
        <p style={{ color: "red" }}>{errors.email.message}</p>
      )}

      <br /><br />

      <button type="submit">Register</button>
      <button
        type="button"
        onClick={() => reset()}
        style={{ marginLeft: "10px" }}
      >
        Reset
      </button>
    </form>
  );
}

