import { useState } from "react";

export default function RiskSimulationGame() {
  const [project, setProject] = useState({ name: "", budget: 100, duration: 24, riskContingency: 10 });
  const [risks, setRisks] = useState([]);
  const [phase, setPhase] = useState("setup");

  const handleStartSimulation = () => {
    if (project.name && risks.length >= 5) {
      setPhase("simulation");
    } else {
      alert("Please enter project details and add at least 5 risks.");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {phase === "setup" && (
        <Card>
          <CardContent>
            <h2 className="text-xl font-bold">Project Setup</h2>
            <Input
              placeholder="Project Name"
              value={project.name}
              onChange={(e) => setProject({ ...project, name: e.target.value })}
              className="my-2"
            />
            <Input
              type="number"
              placeholder="Budget (€k)"
              value={project.budget}
              onChange={(e) => setProject({ ...project, budget: +e.target.value })}
              className="my-2"
            />
            <Input
              type="number"
              placeholder="Duration (months)"
              value={project.duration}
              onChange={(e) => setProject({ ...project, duration: +e.target.value })}
              className="my-2"
            />
            <Input
              type="number"
              placeholder="Risk Contingency (%)"
              value={project.riskContingency}
              onChange={(e) => setProject({ ...project, riskContingency: +e.target.value })}
              className="my-2"
            />
            <Button onClick={() => setPhase("risks")} className="mt-4">Next: Add Risks</Button>
          </CardContent>
        </Card>
      )}

      {phase === "risks" && (
        <Card>
          <CardContent>
            <h2 className="text-xl font-bold">Add Project Risks</h2>
            <Button onClick={handleStartSimulation} className="mt-4">Start Simulation</Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
