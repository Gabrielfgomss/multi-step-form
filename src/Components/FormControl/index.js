import Form from "Components/Form";
import AddOnsPage from "Pages/AddOnsPage";
import ConfimationPage from "Pages/ConfirmatePage";
import InicialPage from "Pages/InicitalPage";
import PlanPage from "Pages/PlansPage";
import SummaryPage from "Pages/SummaryPage";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function FormControl() {

  const getLocation = useLocation();

  let location = getLocation.pathname;

  const [data, setData] = useState([]);
  
  const getData = (data) => {
    
    setData(data);
  }
  
  switch (location) {
    case '/':
      return (
        <Form location={location} to='/plans' savedData={data => (getData(data))}>
          <InicialPage />
        </Form>
      )
    case '/plans':
      return (
        <Form location={location} to='/add-ons' savedData={data => (getData(data))}>
          <PlanPage />
        </Form>
      )
    case '/add-ons':
      return (
        <Form location={location} to='/summary' savedData={data => (getData(data))}>
          <AddOnsPage />
        </Form>
      )
    case '/summary':
      return (
        <Form location={location} to='/confirmate' savedData={data => (getData(data))}>
          <SummaryPage  props={data} />
        </Form>
      )
    case '/confirmate':
      return (
        <ConfimationPage />
      )
    default:
      return null
  }

}
