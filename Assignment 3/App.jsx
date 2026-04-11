import { useState } from "react";
import Reportcard from "/src/components/Reportcard";
import data from "./data";
import "./App.css";

function App() {
  const [students, setStudents] = useState(data);

  const updateScore = (id, score) => {
    setStudents((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, score: Number(score) } : s
      )
    );
  };

  const addStudent = (name, score) => {
    if (!name || !score) return;

    const newStudent = {
      id: Date.now(),
      name,
      score: Number(score),
    };

    setStudents([...students, newStudent]);
  };

  return (
    <div className="app">
      <Reportcard
        students={students}
        updateScore={updateScore}
        addStudent={addStudent}
      />
    </div>
  );
}

export default App;