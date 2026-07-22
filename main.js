import Classes from "./classes.js";

const { Clinic, Patient, Doctor, Appointment } = Classes; //destructuring eq to const hospital1 = Classes.Clinic();

const hospital1 = new Clinic();
hospital1.registerPatient("Moises Navas", 26, "773-999-5670");
hospital1.registerPatient("Daniela Navas", 21, "773-745-5670");
hospital1.registerPatient("Alfredo Navas", 49, "221-999-5540");
hospital1.registerPatient("Mercedes Aguirre", 60, "773-558-2199");
hospital1.registerPatient("Eduardo Galdamez", 26, "503-489-1256");

hospital1.hireDoctor("Keller Catalan", "Cardiology");
hospital1.hireDoctor("Yesenia  Pacheco", "Pediatritian");
hospital1.hireDoctor("Naymy Pacheco", "Physician");
hospital1.hireDoctor("Freddy Campos", "Phlobotomist");

console.log(hospital1._doctors);
