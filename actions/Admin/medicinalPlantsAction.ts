"use server";

import { insertMedicinalPlantsActionToPlantsTable } from "@/db/db";
import { getSession } from "@/lib/lib";
import { revalidatePath } from "next/cache";

export async function medicinalPlantsAction(
  prevState: any,
  formData: FormData
) {
  const axis_number: any = formData.get("axis_number");
  const crop_type: any = formData.get("crop_type");
  const planting_date: any = formData.get("planting_date");
  const plant_age: any = formData.get("plant_age");
  const watering_speed: any = formData.get("watering_speed");
  const watering_hours: any = formData.get("watering_hours");
  const fertilization: any = formData.get("fertilization");
  const generator_hours: any = formData.get("generator_hours");
  const breakdowns_maintenance: any = formData.get("breakdowns_maintenance");

  const driver_name: any = formData.get("driver_name") || "";
  const equipment_type: any = formData.get("equipment_type") || "";
  const equipment_working_hours: any =
    formData.get("equipment_working_hours") || "";

  const contractor: any = formData.get("contractor") || "";
  const num_workers: any = formData.get("num_workers") || "";
  const workers_working_hours: any =
    formData.get("workers_working_hours") || "";

  // *****
  const sessionData = await getSession();
  const userId = sessionData?.user?.id;
  // *****

  const data = {
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
