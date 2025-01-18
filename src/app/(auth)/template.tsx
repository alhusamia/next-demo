"use client";

import { useState } from "react";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const [inputData, setInputData] = useState<string>("");

  return (
    <div>
      <div>
        <input
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
      </div>

      {children}
    </div>
  );
};
