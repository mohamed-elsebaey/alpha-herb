'use client'
import { medicinalPlantsAction } from "@/actions/Admin/medicinalPlantsAction";
import InputFelid from "@/ui/InputFelid";
import SubmitButton from "@/ui/SubmitButton";
import React, { useActionState } from "react";

function MedicinalPlantsForm() {
  const [formState, formAction] = useActionState(medicinalPlantsAction, {});

  return (
    <form className="w-[95%] md:w-[80%] mx-auto" action={formAction}>
      <div className="grid gap-6 mb-6 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <label
            htmlFor="axis_number"
            className=" mb-2 text-sm font-bold text-primary"
          >
            رقم المحور
          </label>
          <select
            id="axis_number"
            name="axis_number"
            className="mt-2 bg-gray-50 border border-gray-300 text-primary text-sm rounded-lg focus:ring-primary/50 focus:border-primary/50  w-full p-2.5 focus:outline-none focus:ring-1"
          >
            <option disabled>اختر رقم المحور</option>
            <option value="2">محور 2</option>
            <option value="3">محور 3 </option>
            <option value="4">محور 4</option>
            <option value="5">محور 5</option>
            <option value="6">محور 6</option>
          </select>
        </div>
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
          max={new Date().toISOString().split('T')[0]} 
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
          name="equipment_working_hours"
          type="number"
          placeholder="ساعات عمل المعدة"
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
          name="workers_working_hours"
          type="number"
          placeholder="عدد ساعات العمل"
        />
      </div>

      <div className="my-12 text-center w-[30%] mx-auto">
        <SubmitButton label="ارسال" />
      </div>
    </form>
  );
}

export default MedicinalPlantsForm;
