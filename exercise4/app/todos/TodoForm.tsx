"use client";

import { useState } from "react";
import { bulkDelete } from "../actions/todoActions";

export default function TodoCheckbox({
  id,
}: {
  id: string;
}) {
  const [selected, setSelected] = useState(false);

  return (
    <input
      type="checkbox"
      checked={selected}
      onChange={() => setSelected(!selected)}
    />
  );
}