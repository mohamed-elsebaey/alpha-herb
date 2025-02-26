type MedicinalPlantData = {
  id?: number;
  created_at?: Date | string;
  engineer_id: number;
  axis_number: number;
  crop_type: string;
  planting_date: Date | string;
  plant_age: number;
  watering_speed: string | number;
  watering_hours: number;
  fertilization: string;
  generator_hours: number;
  breakdowns_maintenance: string;
  driver_name: string;
  equipment_type: string;
  equipment_working_hours: number;
  contractor: string;
  num_workers: number;
  workers_working_hours: number;
};
