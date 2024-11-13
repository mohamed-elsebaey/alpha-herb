import InputFelid from "@/ui/InputFelid";
import React from "react";

function MedicinalPlants() {
  return (
    <div className="container mt-[120px] mb-[90px] ">
      <form className="w-[95%] md:w-[80%] mx-auto" dir="rtl">
        <div className="grid gap-6 mb-6 md:grid-cols-2 lg:grid-cols-3">
          <InputFelid
            label="نوع المحصول"
            name="crop_type"
            type="text"
            required
            placeholder="نوع المحصول"
          />
          <InputFelid
            label="تاريخ الزراعة"
            name="planting_date"
            type="date"
            required
            placeholder="تاريخ الزراعة"
          />
          <InputFelid
            label="عمر النبات"
            name="plant_age"
            type="number"
            required
            placeholder="عمر النبات بالأيام"
          />
          <InputFelid
            label="سرعة الري"
            name="watering_speed"
            type="number"
            required
            placeholder="سرعة الري "
          />
          <InputFelid
            label="عدد ساعات الري"
            name="watering_hours"
            type="number"
            required
            placeholder="عدد ساعات الري"
          />
          <InputFelid
            label="التسميد"
            name="fertilization"
            type="text"
            required
            placeholder="التسميد"
          />
          <InputFelid
            label="س.ت.المولد"
            name="generator_hours"
            type="number"
            required
            placeholder="س.ت.المولد"
          />
          <InputFelid
            label="الأعطال والصيانه"
            name="breakdowns_maintenance"
            type="text"
            required
            placeholder="الأعطال والصيانه"
          />
        </div>
        {/* ********************************************************************* */}
        <h2 className="border-t-2 pt-4 text-2xl font-bold text-primary">
          المعدات
        </h2>
        <div className="grid gap-6 my-6  md:grid-cols-2 lg:grid-cols-3">
          <InputFelid
            label="إسم السائق"
            name="driver_name"
            type="text"
            placeholder="إسم السائق"
          />
          <InputFelid
            label="نوع المعدة"
            name="equipment_type"
            type="text"
            placeholder="نوع المعدة"
          />
          <InputFelid
            label="ساعات العمل"
            name="working_hours"
            type="number"
            placeholder="ساعات العمل"
          />
        </div>
        {/* ********************************************************************* */}
        <h2 className="border-t-2 pt-4 text-2xl font-bold text-primary">
          العمالة الخارجية
        </h2>
        <div className="grid gap-6 my-6  md:grid-cols-2 lg:grid-cols-3">
          <InputFelid
            label="إسم المقاول"
            name="contractor"
            type="text"
            placeholder="إسم المقاول"
          />
          <InputFelid
            label="عدد العمال"
            name="num_workers"
            type="number"
            placeholder="عدد العمال"
          />
          <InputFelid
            label="ساعات العمل"
            name="working_hours2"
            type="number"
            placeholder="عدد ساعات العمل"
          />
        </div>

        <div className="my-12 text-center">
          <button
            type="submit"
            className="text-white bg-primary hover:bg-primary/80 focus:ring-4 focus:outline-none focus:ring-primary font-bold rounded-lg text-sm px-28 py-4 text-center"
          >
            إرسال
          </button>
        </div>
      </form>
    </div>
  );
}

export default MedicinalPlants;

