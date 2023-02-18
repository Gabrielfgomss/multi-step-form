import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles/MainStyles.scss'
import DefaultPage from "Pages/DefaultPage";
import FormControl from "Components/FormControl";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DefaultPage />}>
          <Route exact index element={<FormControl to='/plans' />} />
          <Route exact path="plans" element={<FormControl to='/add-ons' />} />
          <Route exact path="add-ons" element={<FormControl to='/summary' />} />
          <Route exact path="summary" element={<FormControl />} />
          <Route exact path="confirmate" element={<FormControl />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
