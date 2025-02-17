"use server";

import { insertMedicinalPlantsActionToPlantsTable } from "@/db/db";
import { getSession } from "@/lib/lib";
import { revalidatePath } from "next/cache";

export async function medicinalPlantsAction(
  prevState: { errors?: { [key: string]: string } },
  formData: FormData
) {
  const axis_number = parseInt(formData.get("axis_number")?.toString() || "0");
  const crop_type = formData.get("crop_type")?.toString() || "";
  const planting_date = formData.get("planting_date")?.toString() || "";
  const plant_age = parseInt(formData.get("plant_age")?.toString() || "0");
  const watering_speed = formData.get("watering_speed")?.toString() || "";
  const watering_hours = parseInt(formData.get("watering_hours")?.toString() || "0");
  const fertilization = formData.get("fertilization")?.toString() || "";
  const generator_hours = parseInt(formData.get("generator_hours")?.toString() || "0");
  const breakdowns_maintenance = formData.get("breakdowns_maintenance")?.toString() || "";

  const driver_name = formData.get("driver_name")?.toString() || "";
  const equipment_type = formData.get("equipment_type")?.toString() || "";
  const equipment_working_hours = parseInt(formData.get("equipment_working_hours")?.toString() || "0");

  const contractor = formData.get("contractor")?.toString() || "";
  const num_workers = parseInt(formData.get("num_workers")?.toString() || "0");
  const workers_working_hours = parseInt(formData.get("workers_working_hours")?.toString() || "0");

  // *****
  const sessionData = await getSession();
  const userId = sessionData?.user?.id as number;
  // *****

  const data: MedicinalPlantData = {
    engineer_id: userId,
    axis_number,  
    crop_type,
    planting_date,
    plant_age,
    watering_speed,
    watering_hours,
    fertilization,
    generator_hours,
    breakdowns_maintenance,
    driver_name,
    equipment_type,
    equipment_working_hours,
    contractor,
    num_workers,
    workers_working_hours,
  };
  insertMedicinalPlantsActionToPlantsTable(data);

  revalidatePath('/admin/medicinal-plants')
  return {};
}
