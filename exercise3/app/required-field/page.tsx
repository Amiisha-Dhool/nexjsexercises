"use client";

import { useState } from "react";

export default function RequiredField() {
  const [error, setError] = useState("");

  function submitForm(formData: FormData) {
    const password = formData.get("password") as string;

    if (password.length < 6) {
      setError("waa inuu 6 ka kopnada possworku");
    } else {
      setError("");
      alert("Success!");
    }
  }

  return (
    <div>
      <h1>Required Field</h1>

      <form action={submitForm}>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
        />

        <button type="submit">Submit</button>
      </form>

      {error && <p>{error}</p>}
    </div>
  );
}
