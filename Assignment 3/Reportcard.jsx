import { useState } from "react";

function Reportcard({ students, updateScore, addStudent }) {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  const total = students.length;
  const passed = students.filter((s) => s.score >= 40).length;
  const avg =
    students.reduce((sum, s) => sum + s.score, 0) / total || 0;

  const handleAdd = (e) => {
    e.preventDefault();
    addStudent(name, score);
    setName("");
    setScore("");
  };

  return (
    <div className="container">

      {/* TITLE */}
      <h1 className="main-title">
        STUDENT <span>SCOREBOARD</span>
      </h1>

      {/* FORM */}
      <form className="form" onSubmit={handleAdd}>
        <input
          placeholder="Student name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Score (0-100)"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />

        <button>+ ADD</button>
      </form>

      {/* STATS */}
      <div className="stats">
        <div>
          <p>TOTAL</p>
          <h2>{total}</h2>
        </div>
        <div>
          <p>PASSED</p>
          <h2>{passed}</h2>
        </div>
        <div>
          <p>AVG SCORE</p>
          <h2>{avg.toFixed(0)}</h2>
        </div>
      </div>

      {/* TABLE HEADER */}
      <div className="table-header">
        <span>NAME</span>
        <span>SCORE</span>
        <span>STATUS</span>
        <span>UPDATE</span>
      </div>

      {/* ROWS */}
      {students.map((s) => {
        const isPass = s.score >= 40;

        return (
          <div className="row" key={s.id}>
            <span>{s.name}</span>

            <span className="score">{s.score}</span>

            <span className={isPass ? "pass" : "fail"}>
              ● {isPass ? "PASS" : "FAIL"}
            </span>

            <div>
            
                <input
                type="number"
                value={s.score}
                onChange={(e) => updateScore(s.id, e.target.value)}
                />
            
              <button>SAVE</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Reportcard;