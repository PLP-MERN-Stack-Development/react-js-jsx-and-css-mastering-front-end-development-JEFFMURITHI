import React, { useState } from "react";
import Layout from "./components/Layout";
import Button from "./components/Button";
import Card from "./components/Card";
import TaskManager from "./components/TaskManager";
import ApiData from "./components/ApiData";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      {/* Pass darkMode and toggle function to Layout */}
      <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
        <Card
          title="Welcome"
          description="This is your React + Tailwind assignment project."
        >
          <Button variant="primary">Primary</Button>
          <Button variant="secondary" className="ml-2">
            Secondary
          </Button>
          <Button variant="danger" className="ml-2">
            Danger
          </Button>
        </Card>

        <TaskManager />
        <ApiData />
      </Layout>
    </div>
  );
}

export default App;
