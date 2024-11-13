import React from "react";

function MedicinalPlants() {
  return (
    <div className="container mt-[120px] mb-[90px] ">
      <form className="w-[95%] md:w-[80%] mx-auto" dir="rtl">
        <div className="grid gap-6 mb-6 md:grid-cols-2 lg:grid-cols-3">
          <InputFild
            label="نوع المحصول"
            name="crop_type"
            type="text"
            required
            placeholder="نوع المحصول"
          />
          <InputFild
            label="تاريخ الزراعة"
            name="planting_date"
            type="date"
            required
            placeholder="تاريخ الزراعة"
          />
          <InputFild
            label="عمر النبات"
            name="plant_age"
            type="number"
            required
            placeholder="عمر النبات بالأيام"
          />
          <InputFild
            label="سرعة الري"
            name="watering_speed"
            type="number"
            required
            placeholder="سرعة الري "
          />
          <div>
            <label
              htmlFor="watering_hours"
              className=" mb-2 text-sm font-bold text-primary"
            >
              عدد ساعات الري
            </label>
            <input
              type="number"
              id="watering_hours"
              className="bg-gray-50 border border-gray-300 text-primary text-sm rounded-lg focus:ring-primary/50 focus:border-primary/50  w-full p-2.5 "
              placeholder="عدد ساعات الري"
              required
            />
          </div>
          <div>
            <label
              htmlFor="fertilization"
              className=" mb-2 text-sm font-bold text-primary"
            >
              التسميد
            </label>
            <input
              type="text"
              id="fertilization"
              className="bg-gray-50 border border-gray-300 text-primary text-sm rounded-lg focus:ring-primary/50 focus:border-primary/50  w-full p-2.5 "
              placeholder="التسميد"
              required
            />
          </div>
          <div>
            <label
              htmlFor="generator_hours"
              className=" mb-2 text-sm font-bold text-primary"
            >
              س.ت.المولد
            </label>
            <input
              type="number"
              id="generator_hours"
              className="bg-gray-50 border border-gray-300 text-primary text-sm rounded-lg focus:ring-primary/50 focus:border-primary/50  w-full p-2.5 "
              placeholder="س.ت.المولد"
              required
            />
          </div>
          <div>
            <label
              htmlFor="breakdowns_maintenance"
              className=" mb-2 text-sm font-bold text-primary"
            >
              الأعطال والصيانه
            </label>
            <input
              type="text"
              id="breakdowns_maintenance"
              className="bg-gray-50 border border-gray-300 text-primary text-sm rounded-lg focus:ring-primary/50 focus:border-primary/50  w-full p-2.5 "
              placeholder="الأعطال والصيانه"
              required
            />
          </div>
        </div>
        {/* ********************************************************************* */}
        <h2 className="border-t-2 pt-4 text-2xl font-bold text-primary">
          المعدات
        </h2>
        <div className="grid gap-6 my-6  md:grid-cols-2 lg:grid-cols-3">
          <div>
            <label
              htmlFor="driver_name"
              className=" mb-2 text-sm font-bold text-primary"
            >
              إسم السائق
            </label>
            <input
              type="text"
              id="driver_name"
              className="bg-gray-50 border border-gray-300 text-primary text-sm rounded-lg focus:ring-primary/50 focus:border-primary/50  w-full p-2.5 "
              placeholder="أكتب إسم السائق"
              required
            />
          </div>
          <div>
            <label
              htmlFor="equipment_type"
              className=" mb-2 text-sm font-bold text-primary"
            >
              نوع المعدة
            </label>
            <input
              type="text"
              id="equipment_type"
              className="bg-gray-50 border border-gray-300 text-primary2 text-sm rounded-lg focus:ring-primary/50 focus:border-primary/50  w-full p-2.5 "
              placeholder="أكتب نوع المعدة"
              required
            />
          </div>
          <div>
            <label
              htmlFor="working_hours"
              className=" mb-2 text-sm font-bold text-primary"
            >
              ساعات العمل
            </label>
            <input
              type="number"
              id="working_hours"
              className="bg-gray-50 border border-gray-300 text-primary text-sm rounded-lg focus:ring-primary/50 focus:border-primary/50  w-full p-2.5 "
              placeholder="عدد ساعات العمل"
              required
            />
          </div>
        </div>
        {/* ********************************************************************* */}
        <h2 className="border-t-2 pt-4 text-2xl font-bold text-primary">
          العمالة الخارجية
        </h2>
        <div className="grid gap-6 my-6  md:grid-cols-2 lg:grid-cols-3">
          <div>
            <label
              htmlFor="contractor"
              className=" mb-2 text-sm font-bold text-primary"
            >
              إسم المقاول
            </label>
            <input
              type="text"
              id="contractor"
              className="bg-gray-50 border border-gray-300 text-primary text-sm rounded-lg focus:ring-primary/50 focus:border-primary/50  w-full p-2.5 "
              placeholder="إسم المقاول"
              required
            />
          </div>
          <div>
            <label
              htmlFor="num_workers"
              className=" mb-2 text-sm font-bold text-primary"
            >
              عدد العمال
            </label>
            <input
              type="num"
              id="num_workers"
              className="bg-gray-50 border border-gray-300 text-primary2 text-sm rounded-lg focus:ring-primary/50 focus:border-primary/50  w-full p-2.5 "
              placeholder="أكتب عدد العمال"
              required
            />
          </div>
          <div>
            <label
              htmlFor="working_hours2"
              className=" mb-2 text-sm font-bold text-primary"
            >
              ساعات العمل
            </label>
            <input
              type="number"
              id="working_hours2"
              className="bg-gray-50 border border-gray-300 text-primary text-sm rounded-lg focus:ring-primary/50 focus:border-primary/50  w-full p-2.5 "
              placeholder="عدد ساعات العمل"
              required
            />
          </div>
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

const InputFild = ({
  label,
  name,
  type,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
}) => {
  return (
    <div>
      <label htmlFor={name} className=" mb-2 text-sm font-bold text-primary">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="mt-2 bg-gray-50 border border-gray-300 text-primary text-sm rounded-lg focus:ring-primary/50 focus:border-primary/50  w-full p-2.5 focus:outline-none focus:ring-1"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};
