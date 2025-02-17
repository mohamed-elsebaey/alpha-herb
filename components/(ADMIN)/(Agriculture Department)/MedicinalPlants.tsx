import MedicinalPlantsForm from "./MedicinalPlantsForm";
import DataTable from "../DataTable";

function MedicinalPlants() {
  // const today = new Date();
  // const options: any = {
  //   weekday: "long",
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  //   numberingSystem: "latn",
  // };

  // console.log(today.toLocaleDateString("ar-EG", options));
  
  return (
    <div className="container mt-[120px] mb-[90px] " dir="rtl">
      <MedicinalPlantsForm />
      <hr />
      <div className="text-xl font-bold m-4">بيانات سابقة اليوم</div>
      <DataTable/>
    </div>
  );
}

export default MedicinalPlants;
