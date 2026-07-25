import Classes from "./classes.js";

const { Clinic, Patient, Doctor, Appointment } = Classes; //destructuring eq to const hospital1 = Classes.Clinic();

const hospital1 = new Clinic();

const patient1 = hospital1.registerPatient("Moises Navas", 26, "773-999-5670");
const patient2 = hospital1.registerPatient("Daniela Navas", 21, "773-745-5670");
const patient3 = hospital1.registerPatient("Alfredo Navas", 49, "221-999-5540");
const patient4 = hospital1.registerPatient(
  "Mercedes Aguirre",
  60,
  "773-558-2199",
);
const patient5 = hospital1.registerPatient(
  "Eduardo Galdamez",
  26,
  "503-489-1256",
);

const doctor1 = hospital1.hireDoctor("Keller Catalan", "Cardiology");
const doctor2 = hospital1.hireDoctor("Yesenia  Pacheco", "Pediatritian");
const doctor3 = hospital1.hireDoctor("Naymy Pacheco", "Physician");
const doctor4 = hospital1.hireDoctor("Freddy Campos", "Phlobotomist");

const app1 = hospital1.scheduleAppointment(
  patient1,
  doctor1,
  "2026-07-26 10:00",
);
hospital1.scheduleAppointment(patient2, doctor2, "2026-07-25 11:00");
hospital1.scheduleAppointment(patient3, doctor4, "2026-08-05 14:00");
hospital1.scheduleAppointment(patient4, doctor4, "2026-08-01 10:00");
hospital1.scheduleAppointment(patient4, doctor4, "2026-07-30 08:00");

hospital1.completeAppointment(app1);

console.log(hospital1.listAppointments("Completed"));
