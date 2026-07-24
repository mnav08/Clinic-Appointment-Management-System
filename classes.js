class Clinic {
  constructor() {
    this._patients = [];
    this._doctors = [];
    this._appointments = [];

    //arrays to keep track of ID's created to keep them unique
    this._patientIds = [];
    this._appointmentsIds = [];
    this._doctorIds = [];
  }

  generatePatientId() {
    let newID;
    let isUnique = false;
    //loop until a unique ID is generated
    while (!isUnique) {
      newID = Math.floor(Math.random() * 1000) + 1000;

      //check if the array contains the ID already
      if (!this._patientIds.includes(newID)) {
        this._patientIds.push(newID); // add it to the array
        isUnique = true; //break the loop
      }
    }
    return newID;
  }

  generateAppointmentId() {
    let newID;
    let isUnique = false;
    //loop until a unique ID is generated
    while (!isUnique) {
      newID = Math.floor(Math.random() * 1000) + 2000;

      //check if the array contains the ID already
      if (!this._appointmentsIds.includes(newID)) {
        this._appointmentsIds.push(newID); // add it to the array
        isUnique = true; //break the loop
      }
    }
    return newID;
  }

  generateDoctorId() {
    let newID;
    let isUnique = false;
    //loop until a unique ID is generated
    while (!isUnique) {
      newID = Math.floor(Math.random() * 1000) + 2000;

      //check if the array contains the ID already
      if (!this._doctorIds.includes(newID)) {
        this._doctorIds.push(newID); // add it to the array
        isUnique = true; //break the loop
      }
    }
    return newID;
  }

  registerPatient(name, age, phone) {
    const patientId = this.generatePatientId();
    const p = new Patient(patientId, name, age, phone);
    this._patients.push(p);
    return p;
  }

  hireDoctor(name, speciality) {
    const doctorId = this.generateDoctorId();
    const d = new Doctor(doctorId, name, speciality);
    this._doctors.push(d);
    return d;
  }

  scheduleAppointment(patient, doctor, date) {
    const isPatient = this._patients.some((item) => item.id === patient.id);
    const doctorInstance = this._doctors.find((obj) => obj.id === doctor.id);
    if (isPatient && doctorInstance) {
      const appointmentId = this.generateAppointmentId();
      const appointment = new Appointment(appointmentId, patient, doctor, date);
      this._appointments.push(appointment);
      //add it to the doctor's schedule
      doctorInstance.addAppointment(appointment);
      return appointment;
    } else {
      throw new Error("Missing Patient/Doctor");
    }
  }

  cancelAppointment(appointment) {
    const isAppointment = this._appointments.some(
      (obj) => obj.id === appointment.id,
    );
    if (isAppointment) {
      appointment.cancel();
    } else {
      throw new Error("Appointment not found");
    }
  }

  completeAppointment(appointment) {
    const isAppointment = this._appointments.some(
      (obj) => obj.id === appointment.id,
    );
    if (isAppointment) {
      appointment.complete();
    } else {
      throw new Error("Appointment not found");
    }
  }

  searchPatient(patient) {
    const patientInstance = this._patients.find((obj) => obj.id === patient.id);
    if (patientInstance) {
      return patientInstance;
    } else {
      throw new Error("Patient not found");
    }
  }

  searchDoctor(doctor) {
    const doctorInstance = this._doctors.find((obj) => obj.id === doctor.id);
    if (doctorInstance) {
      return doctorInstance;
    } else {
      throw new Error("Doctor not found");
    }
  }

  listAppointments(status = "Scheduled") {
    const validStatuses = ["Scheduled", "Cancelled", "Completed"];
    if (!validStatuses.includes(status)) {
      return "Appointment not found";
    }
    return this._appointments.filter((obj) => obj.status === status);
  }

  getClinicStatistics() {
    return `===Clinic Statistics===
    Total Patients: ${this._patients.length}
    Total Doctors: ${this._doctors.length}`;
  }
}
////////////////////////////////////////////////////////////

class Patient {
  constructor(id, name, age, phone, medicalHistory = []) {
    if (!name || typeof name !== "string") {
      throw new Error("Patient name is required");
    }
    if (typeof age !== "number" || age < 0) {
      throw new Error("Patient age must be a non-negative number");
    }
    if (typeof phone !== "string") {
      throw new Error("Phone nuumber should be a string");
    }

    this.id = id;
    this.name = name;
    this.age = age;
    this.phone = phone || "";
    this.medicalHistory = medicalHistory;
  }

  addMedicalRecord(record) {
    if (!record || typeof record !== "string") {
      throw new Error("Medical record is required");
    }
    this.medicalHistory.push(record);
  }

  updatePhone(newPhone) {
    if (!newPhone) {
      throw new Error("Invalid phone number");
    }
    this.phone = newPhone;
  }

  getSummary() {
    const formattedHistory = this.medicalHistory
      .map((el) => `- ${el}`)
      .join("\n");

    const historyLength =
      this.medicalHistory.length <= 0
        ? "No medical Record found"
        : this.medicalHistory.length;

    return `Patient Information Summary
      =============================================
      ID: ${this.id}
      Name : ${this.name}
      Age: ${this.age}
      Phone: ${this.phone}
      Medical History Records (${historyLength}): 
      ${formattedHistory}
      `;
  }
}
////////////////////////////////////////////////////////////

class Doctor {
  constructor(id, name, speciality, appointments = []) {
    if (!name || typeof name !== "string") {
      throw new Error("Patient name is required");
    }
    if (!speciality || typeof speciality !== "string") {
      throw new Error("Speciality is required");
    }
    this.id = id;
    this.name = name;
    this.speciality = speciality;
    this.appointments = appointments;
  }

  addAppointment(newAppointment) {
    this.appointments.push(newAppointment);
  }

  removeAppointment(appointmentId) {
    const toBeRemoved = this.appointments.find(
      (item) => item.id === appointmentId,
    );

    if (!toBeRemoved) {
      throw new Error("Appointment not found");
    }

    const newArray = this.appointments.filter(
      (element) => element.id !== appointmentId,
    );
    this.appointments = newArray;
  }

  getAppointments(status = "Scheduled") {
    return this.appointments.filter((item) => item.status === status);
  }
}
////////////////////////////////////////////////////////////

class Appointment {
  constructor(id, patient, doctor, date, status = "Scheduled") {
    if (!patient || typeof patient !== "object") {
      throw new Error("Patient is required");
    }
    if (!doctor || typeof doctor !== "object") {
      throw new Error("Doctor is required");
    }
    if (!date || typeof date !== "string") {
      throw new Error("Invialid date");
    }
    const appointmentDate = new Date(date);
    this.id = id;
    this.patient = patient;
    this.doctor = doctor;
    this.date = appointmentDate;
    this.status = status;
  }

  complete() {
    if (this.status === "Completed" || this.status === "Cancelled") {
      throw new Error("Appointment is already completed.");
    }
    this.status = "Completed";
  }

  cancel() {
    if (this.status === "Cancelled" || this.status === "Completed") {
      throw new Error("Appointment is already cancelled.");
    }
    this.status = "Cancelled";
  }
}

const resources = {
  Clinic,
  Patient,
  Doctor,
  Appointment,
};
export default resources;
