"use client";

import { useState } from "react";

export default function FullName() {
  const [name, setName] = useState("");

  function submitForm(formData: FormData) {
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");

    setName(`${firstName} ${lastName}`);
  }

  return (
    <div>
      <h1>Full Name</h1>

      <form action={submitForm}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
        />

        <button type="submit">Submit</button>
      </form>

      {name && <h2>Hello, {name}!</h2>}
    </div>
  );
}