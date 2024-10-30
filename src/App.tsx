import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Page from "./components/Page/Page.tsx";
import Admin from "./containers/Admin/Admin.tsx";
import ToolBar from "./components/ToolBar/ToolBar.tsx";

const App = () => {
  return (
    <Router>
      <div>
        <ToolBar />
        <Container className="mt-4">
          <Routes>
            <Route path="/" element={<div>Welcome to the Website</div>} />
            <Route path="/pages/:pageName" element={<Page />} />
            <Route path="/pages/admin" element={<Admin />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
};

export default App;
