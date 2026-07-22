Perfect. Since you chose a **JavaScript console application**, here's a project that feels like something a small business might actually use.

---

# Project Challenge: Clinic Appointment Management System

## Scenario

A small private clinic still manages appointments on paper. They want a simple JavaScript application that helps the receptionist manage patients, doctors, and appointments.

Everything will run in the console. No HTML or CSS.

---

# Difficulty

**Beginner → Intermediate**

Estimated time:
**6–12 hours**

---

# Learning Goals

By the end of this project you should feel comfortable with:

- Classes
- Objects
- Arrays of objects
- Constructors
- Class methods
- Static methods
- Array methods
  - find()
  - filter()
  - map()
  - some()
  - every()
  - reduce()

- Loops
- Conditionals
- Destructuring
- Spread operator
- Template literals
- Default parameters
- Error handling
- Data validation

---

# Data Model

You'll need at least these classes.

## Patient

Properties

- id
- name
- age
- phone
- medicalHistory (array)

Methods

- addMedicalRecord()
- updatePhone()
- getSummary()

---

## Doctor

Properties

- id
- name
- specialty
- appointments (array)

Methods

- addAppointment()
- removeAppointment()
- getAppointments()

---

## Appointment

Properties

- id
- patient
- doctor
- date
- status

Possible status

- Scheduled
- Completed
- Cancelled

Methods

- complete()
- cancel()

---

## Clinic

This is the main class.

Properties

- patients
- doctors
- appointments

Methods

- registerPatient()
- hireDoctor()
- scheduleAppointment()
- cancelAppointment()
- completeAppointment()
- searchPatient()
- searchDoctor()
- listAppointments()
- getClinicStatistics()

---

# Functional Requirements

### Register patients

Example

```
John Doe
Age: 35
Phone: 555-1234
```

Each patient gets an auto-generated ID.

---

### Hire doctors

Example

```
Dr. Smith
Cardiology
```

---

### Schedule appointments

The system should:

- verify patient exists
- verify doctor exists
- create appointment
- save it in the clinic
- also add it to the doctor's appointment list

---

### Cancel appointments

Update the status.

Do not delete the object.

---

### Complete appointments

Update the status.

---

### Search patients

Search by

- ID
- Name

---

### Search doctors

Search by

- ID
- Specialty

---

### List appointments

Allow listing

- all appointments
- only scheduled
- only cancelled
- only completed

Use **filter()**.

---

# Statistics

Generate a report like

```
Total Patients: 24

Total Doctors: 5

Appointments:
Scheduled: 8
Completed: 12
Cancelled: 4

Average Patient Age: 41

Most Busy Doctor:
Dr. Smith (12 appointments)
```

This section should require using

- reduce()
- filter()
- map()

---

# Sample Data

Create at least

Patients

```
Alice

Bob

Charlie

David

Emma
```

Doctors

```
Dr. Brown
Dentist

Dr. Wilson
Pediatrician

Dr. Taylor
Dermatologist
```

Appointments

Create around

```
10–15 appointments
```

with different dates and statuses.

---

# Validation Rules

Don't allow

❌ Empty patient name

❌ Negative age

❌ Duplicate patient IDs

❌ Appointment with missing patient

❌ Appointment with missing doctor

❌ Completing an already cancelled appointment

---

# Required Array Methods

Your project **must** use all of these naturally:

```
find()

filter()

map()

reduce()

some()

every()

sort()

forEach()
```

---

# Stretch Goals (Optional)

## Priority Patients

Patients over 65 become priority patients automatically.

---

## Appointment Conflict Detection

A doctor cannot have two appointments at the same time.

---

## Search by Date

Return all appointments for a given date.

---

## Export Report

Print a nicely formatted clinic report.

---

## Appointment History

Each patient keeps every appointment they've ever had.

---

# Example Output

```
========== CLINIC REPORT ==========

Patients: 5

Doctors: 3

Appointments: 12

Completed: 7

Scheduled: 3

Cancelled: 2

Average Patient Age: 39

Most Busy Doctor:
Dr. Brown

==================================
```

---

# Project Constraints

- ❌ No external libraries.
- ❌ No database.
- ❌ No JSON file storage.
- ❌ No AI-generated code.
- ✅ Everything stored in memory using JavaScript classes and arrays.

---

## Milestones

Break the project into these phases:

1. Create all classes and constructors.
2. Implement methods for each class.
3. Populate the clinic with sample data.
4. Add scheduling and validation logic.
5. Implement search and filtering features.
6. Generate the statistics report.
7. Add optional stretch goals.
