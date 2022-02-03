import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Store from "./pages/Store/Store";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/store/:storeId" element={<Store />} />
      </Routes>
    </Router>
  );
}

export default App;
