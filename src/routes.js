import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles/MainStyles.scss'
import DefaultPage from "Pages/DefaultPage";
import Form from "Components/Form";
import SummaryPage from "Pages/SummaryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DefaultPage />}>
          <Route exact index element={<Form to='/plans' />} />
          <Route exact path="plans" element={<Form to='/add-ons' />} />
          <Route exact path="add-ons" element={<Form to='/summary' />} />
          <Route exact path="summary" element={<SummaryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
