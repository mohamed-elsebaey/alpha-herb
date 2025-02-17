"use client";
import { medicinalPlantsAction } from "@/actions/Admin/medicinalPlantsAction";
import InputFelid from "@/ui/InputFelid";
import SubmitButton from "@/ui/SubmitButton";
import React, { useActionState } from "react";

/**
 * MedicinalPlantsForm Component
 * Handles the form for managing medicinal plants data in the agriculture department
 * Includes sections for plant information, equipment details, and external labor
 */
function MedicinalPlantsForm() {
  // const [formState, formAction] = useActionState(medicinalPlantsAction, {});
  const [, formAction] = useActionState(medicinalPlantsAction, {});

  // Define available axis options for the dropdown select
  const axisOptions = [
    { value: "2", label: "محور 2" },
    { value: "3", label: "محور 3" },
    { value: "4", label: "محور 4" },
    { value: "5", label: "محور 5" },
    { value: "6", label: "محور 6" },
  ];

  return (
    // Main form container with responsive width
    <form className="w-[95%] md:w-[80%] mx-auto" action={formAction}>
      {/* Plant Information Section - Grid layout with responsive columns */}
      <div className="grid gap-6 mb-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Axis Number Selection Dropdown */}
        <div>
          <label
            htmlFor="axis_number"
            className="mb-2 text-sm font-bold text-primary"
          >
            رقم المحور
          </label>
          <select
            id="axis_number"
            name="axis_number"
            className="mt-2 bg-gray-50 border border-gray-300 text-primary text-sm rounded-lg focus:ring-primary/50 focus:border-primary/50 w-full p-2.5 focus:outline-none focus:ring-1"
          >
            <option disabled>اختر رقم المحور</option>
            {axisOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Crop Type Input Field */}
        <InputFelid
          label="نوع المحصول"
          name="crop_type"
          type="text"
          required
          placeholder="نوع المحصول"
        />

        {/* Planting Date Input Field - Limited to current date */}
        <InputFelid
          label="تاريخ الزراعة"
          name="planting_date"
          type="date"
          required
          placeholder="تاريخ الزراعة"
          max={new Date().toISOString().split("T")[0]}
        />

        {/* Plant Age Input Field */}
        <InputFelid
          label="عمر النبات"
          name="plant_age"
          type="number"
          required
          placeholder="عمر النبات بالأيام"
        />

        {/* Irrigation Details Fields */}
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

        {/* Additional Plant Care Fields */}
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

      {/* Equipment Section */}
      <h2 className="border-t-2 pt-4 text-2xl font-bold text-primary">
        المعدات
      </h2>
      {/* Equipment Details Grid */}
      <div className="grid gap-6 my-6 md:grid-cols-2 lg:grid-cols-3">
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

      {/* External Labor Section */}
      <h2 className="border-t-2 pt-4 text-2xl font-bold text-primary">
        العمالة الخارجية
      </h2>
      {/* External Labor Details Grid */}
      <div className="grid gap-6 my-6 md:grid-cols-2 lg:grid-cols-3">
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

      {/* Form Submit Button */}
      <div className="my-12 text-center w-[30%] mx-auto">
        <SubmitButton label="ارسال" />
      </div>
    </form>
  );
}

export default MedicinalPlantsForm;
