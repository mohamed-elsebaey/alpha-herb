import { selectDataFromMedicinalPlantsTable } from "@/db/db";
import { getSession } from "@/lib/lib";
import React from "react";

const roles = ["CEO", "DEV"];

async function DataTabel({ role }: { role?: string }) {
  role = role || "";
  const sessionData = await getSession();
  const userId = sessionData?.user?.id;

  let prevData: any;
  if (userId) {
    if (roles.includes(role)) {
      prevData = (await selectDataFromMedicinalPlantsTable()) || [""];
    } else {
      prevData = (await selectDataFromMedicinalPlantsTable(userId)) || [""];
    }
  }

  const colNames = [
    "رقم المحور",
    "اليوم",
    "التاريخ",
    "نوع المحصول",
    "تاريخ الزراعة",
    "عمر النبات",
    "سرعة الري",
    "عدد ساعات الري",
    "التسميد",
    "س.ت.المولد",
    "الأعطال والصيانه",
    "السائق",
    "المعدة",
    "عدد الساعات",
    "المقاول",
    "عدد العمال",
    "ساعات العمل",
  ];
  // const options: any = {
  //   weekday: "long",
  //   year: "numeric",
  //   month: "long",
  //   day: "numeric",
  //   numberingSystem: "latn",
  // };

  if (!prevData.length) {
    return <div>لا يوجد بيانات اليوم</div>;
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-right rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            {colNames.map((colName, index) => {
              return (
                <th scope="col" className="px-6 py-3 text-nowrap" key={index}>
                  {colName}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {prevData.map((data: any) => {
            return (
              <tr
                className="odd:bg-white  even:bg-gray-50  border-b "
                key={data.id}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  محور {data.axis_number}
                </th>
                <td className="px-6 py-4 text-nowrap">
                  {data.created_at.toLocaleDateString("ar-EG", {
                    weekday: "long",
                  })}
                </td>
                <td className="px-6 py-4 text-nowrap">
                  {data.created_at.toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </td>
                <td className="px-6 py-4 text-nowrap">{data.crop_type}</td>
                <td className="px-6 py-4 text-nowrap">
                  {data.planting_date.toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </td>
                <td className="px-6 py-4 text-nowrap ">{data.plant_age} يوم</td>
                <td className="px-6 py-4 text-nowrap">{data.watering_speed}</td>
                <td className="px-6 py-4 text-nowrap">{data.watering_hours}</td>
                <td className="px-6 py-4 text-nowrap">{data.fertilization}</td>
                <td className="px-6 py-4 text-nowrap">
                  {data.generator_hours}
                </td>
                <td className="px-6 py-4 text-nowrap">
                  {data.breakdowns_maintenance}
                </td>
                <td className="px-6 py-4 text-nowrap">
                  {data.driver_name || "لا يوجد"}
                </td>
                <td className="px-6 py-4 text-nowrap">
                  {data.equipment_type || "لا يوجد"}
                </td>
                <td className="px-6 py-4 text-nowrap">
                  {data.equipment_working_hours || "لا يوجد"}
                </td>
                <td className="px-6 py-4 text-nowrap">
                  {data.contractor || "لا يوجد"}
                </td>
                <td className="px-6 py-4 text-nowrap">
                  {data.num_workers || "لا يوجد"}
                </td>
                <td className="px-6 py-4 text-nowrap">
                  {data.workers_working_hours || "لا يوجد"}
                </td>
                {/* <td className="px-6 py-4 text-nowrap">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DataTabel;
