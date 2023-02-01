import AddOnsPage from "Pages/AddOnsPage";
import InicialPage from "Pages/InicitalPage";
import PlanPage from "Pages/PlansPage";

export default function FormControl({ location, props }) {

  switch (location) {
    case '/':
      return (
        <InicialPage props={props}/>
      )
    case '/plans':
      return (
        <PlanPage props={props} />
      )
    case '/add-ons':
      return (
        <AddOnsPage props={props} />
      )
    default:
      return null
  }

}
