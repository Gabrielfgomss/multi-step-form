
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles/MainStyles.scss'
import PlanPage from "Pages/PlansPage";
import InicialPage from "Pages/InicitalPage";
import AddOnsPage from "Pages/AddOnsPage";
import SummaryPage from "Pages/SummaryPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InicialPage  to="plans"/>} />
          <Route path="plans" element={<PlanPage to="/add-ons" />}/>
          <Route path="add-ons" element={<AddOnsPage to="/summary" />}/>
          <Route path="summary" element={<SummaryPage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
