import Classes from "./classes.js";

const { Clinic, Patient, Doctor, Appointment } = Classes; //destructuring equal to const hospital1 = Classes.Clinic();

const hospital1 = new Clinic();

const patient1 = hospital1.registerPatient("Moises Navas", 26, "773-999-5670");
const patient2 = hospital1.registerPatient("Daniela Navas", 21, "773-745-5670");
const patient3 = hospital1.registerPatient("Alfredo Navas", 49, "221-999-5540");
const patient4 = hospital1.registerPatient("Mercy Aguirre", 60, "773-558-2199");
const patient5 = hospital1.registerPatient("Eduardo Galdi", 26, "503-489-1256");
const patient6 = hospital1.registerPatient("Jose Badia", 41, "773-666-5670");
const patient7 = hospital1.registerPatient("Karla Aguirre", 60, "205-558-2215");

const doctor1 = hospital1.hireDoctor("Keller Catalan", "Cardiology");
const doctor2 = hospital1.hireDoctor("Yesenia  Pacheco", "Pediatritian");
const doctor3 = hospital1.hireDoctor("Naymy Pacheco", "Physician");
const doctor4 = hospital1.hireDoctor("Freddy Campos", "Phlobotomist");
const doctor5 = hospital1.hireDoctor("Aaron Jhonson", "Physician");

const app1 = hospital1.scheduleAppointment(patient1, doctor1, "2026-08-26 10:00");
const app2 = hospital1.scheduleAppointment(patient2, doctor2, "2026-08-20 11:00");
const app3 = hospital1.scheduleAppointment(patient3, doctor1, "2026-08-05 14:00");
const app4 = hospital1.scheduleAppointment(patient4, doctor5, "2026-08-10 10:00");
const app5 = hospital1.scheduleAppointment(patient5, doctor4, "2026-09-30 15:00");
const app6 = hospital1.scheduleAppointment(patient1, doctor4, "2026-09-30 08:00");
const app7 = hospital1.scheduleAppointment(patient6, doctor3, "2026-09-30 08:00");
const app8 = hospital1.scheduleAppointment(patient7, doctor5, "2026-09-30 08:00");
const app9 = hospital1.scheduleAppointment(patient1, doctor5, "2026-08-03 08:00");

hospital1.completeAppointment(app1);
hospital1.completeAppointment(app2);
hospital1.cancelAppointment(app3);

//console.log(hospital1.listAppointments("Completed", "2026-08-20 08:00"));
console.log(hospital1.getClinicStatistics());
