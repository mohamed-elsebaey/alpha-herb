import { selectDataFromMedicinalPlantsTable } from "@/db/db";
import { getSession } from "@/lib/lib";
import React from "react";

// Define roles with access to all data
const roles = ["CEO", "DEV"];

// Define table column headers as a constant
const TABLE_COLUMNS = [
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
] as const;

// Define date formatting options
const DATE_OPTIONS = {
  weekday: {
    weekday: "long",
  },
  full: {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  },
} as const;

// Helper function to format dates with locale support
const formatDate = (date: Date | string | undefined, format: 'weekday' | 'full', locale: string = 'ar-EG') => {
  if (date instanceof Date) {
    return date.toLocaleDateString(locale, DATE_OPTIONS[format]);
  }
  return date;
};

// Main DataTable component with role-based access control
async function DataTable({ role = "" }: { role?: string }) {
  // Get user session data
  const sessionData = await getSession();
  const userId = sessionData?.user?.id;

  // Fetch data based on user role and permissions
  const data = userId
    ? roles.includes(role)
      ? await selectDataFromMedicinalPlantsTable()
      : await selectDataFromMedicinalPlantsTable(userId)
    : [];

  // Show message if no data is available
  if (!data.length) {
    return <div>لا يوجد بيانات اليوم</div>;
  }

  // Render the data table
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      {/* Table container with RTL support */}
      <table className="w-full text-sm text-right rtl:text-right text-gray-500">
        {/* Table header */}
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            {TABLE_COLUMNS.map((colName, index) => (
              <th scope="col" className="px-6 py-3 text-nowrap" key={index}>
                {colName}
              </th>
            ))}
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {data.map((row) => (
            <tr className="odd:bg-white even:bg-gray-50 border-b" key={row.id}>
              {/* Axis number column */}
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                محور {row.axis_number}
              </th>
              {/* Date columns with different formats */}
              <td className="px-6 py-4 text-nowrap">
                {formatDate(row.created_at, 'weekday')}
              </td>
              <td className="px-6 py-4 text-nowrap">
                {formatDate(row.created_at, 'full', 'en-GB')}
              </td>
              {/* Crop information */}
              <td className="px-6 py-4 text-nowrap">{row.crop_type}</td>
              <td className="px-6 py-4 text-nowrap">
                {formatDate(row.planting_date, 'full', 'en-GB')}
              </td>
              <td className="px-6 py-4 text-nowrap">{row.plant_age} يوم</td>
              {/* Irrigation details */}
              <td className="px-6 py-4 text-nowrap">{row.watering_speed}</td>
              <td className="px-6 py-4 text-nowrap">{row.watering_hours}</td>
              <td className="px-6 py-4 text-nowrap">{row.fertilization}</td>
              {/* Equipment and maintenance */}
              <td className="px-6 py-4 text-nowrap">{row.generator_hours}</td>
              <td className="px-6 py-4 text-nowrap">{row.breakdowns_maintenance}</td>
              {/* Personnel and equipment details */}
              <td className="px-6 py-4 text-nowrap">{row.driver_name || "لا يوجد"}</td>
              <td className="px-6 py-4 text-nowrap">{row.equipment_type || "لا يوجد"}</td>
              <td className="px-6 py-4 text-nowrap">{row.equipment_working_hours || "لا يوجد"}</td>
              {/* Contractor and workers information */}
              <td className="px-6 py-4 text-nowrap">{row.contractor || "لا يوجد"}</td>
              <td className="px-6 py-4 text-nowrap">{row.num_workers || "لا يوجد"}</td>
              <td className="px-6 py-4 text-nowrap">{row.workers_working_hours || "لا يوجد"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
