export default function BasicForm() {
  async function submitForm(formData: FormData) {
    "use server";

    const email = formData.get("email");

    console.log("Email:", email);
  }

  return (
    <div>
      <h1>Basic Form</h1>

      <form action={submitForm}>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          required
        />

        <button type="submit">Submit</button>
      </form>

      <p>kumahdzanid gudpintada</p>
    </div>
  );
}