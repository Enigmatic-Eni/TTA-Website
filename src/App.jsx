import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="font-ubuntu">
      <Router>
<Routes>
  <Route path="/" element={<Layout />}>
    {/* Default child when at "/" */}
    <Route index element={<Dashboard />} />  

    {/* Still allow direct "/dashboard" path */}
    <Route path="dashboard" element={<Dashboard />} />
  </Route>
</Routes>
</Router>
    </div>
  );
}

export default App;
