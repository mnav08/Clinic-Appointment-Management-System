# Development Roadmap

Instead of thinking

> I have to build an entire clinic.

Break it into milestones.

---

## Phase 1

Only create classes.

Nothing else.

```
Patient

Doctor

Appointment

Clinic
```

Each should only have constructors.

No methods.

No validation.

No searching.

No statistics.

Goal:

```
new Patient()

new Doctor()

new Appointment()

new Clinic()
```

works.

Done.

---

## Phase 2

Now give every class its own behavior.

Example

Patient

```
addMedicalRecord()

updatePhone()

getSummary()
```

Doctor

```
addAppointment()

removeAppointment()
```

Appointment

```
cancel()

complete()
```

Clinic

```
registerPatient()

hireDoctor()
```

Ignore searching.

Ignore statistics.

---

## Phase 3

Now create fake data.

```
5 patients

3 doctors

10 appointments
```

Hardcode everything.

Don't worry about user input.

Goal:

```
const clinic = new Clinic()

clinic.registerPatient(...)

clinic.hireDoctor(...)
```

works.

---

## Phase 4

Relationships.

This is where the project becomes interesting.

When scheduling

```
Appointment

↓

Patient

↓

Doctor

↓

Clinic
```

Everything must connect correctly.

This phase teaches object-oriented programming.

---

## Phase 5

Searching.

Now use

```
find()

filter()

some()
```

Examples

```
Find patient

Find doctor

Find appointment

List cancelled appointments

List today's appointments
```

---

## Phase 6

Statistics.

Now use

```
map()

reduce()

sort()
```

Questions like

Average age

```
patients

↓

map(age)

↓

reduce(sum)

↓

average
```

Most appointments

```
appointments

↓

reduce()

↓

doctor totals

↓

sort()

↓

first
```

Cancelled percentage

Completed percentage

Oldest patient

Youngest patient

All become exercises in array methods.

---

## Phase 7

Validation.

Now make the app harder to break.

```
Empty name

↓

Reject
```

```
Negative age

↓

Reject
```

```
Doctor doesn't exist

↓

Reject
```

```
Appointment already cancelled

↓

Reject
```

This is where you'll practice throwing errors or returning useful messages.

---

## Phase 8 (Bonus)

These are realistic improvements that make the system feel more like production software.

Examples:

- Prevent double-booking a doctor.
- Automatically mark patients over 65 as priority patients.
- Search appointments by date.
- Generate a detailed report of all clinic activity.

---

# Visual Roadmap

If I were putting this into Excalidraw, it would look something like this:

```text
                    Clinic Management System
                               │
      ┌────────────────────────┴────────────────────────┐
      │                                                 │
  System Design                                  Development
      │                                                 │
      ├── Features                                     Phase 1 → Classes
      ├── Classes                                      Phase 2 → Methods
      ├── Relationships                                Phase 3 → Sample Data
      └── Program Flow                                 Phase 4 → Relationships
                                                        Phase 5 → Search
                                                        Phase 6 → Statistics
                                                        Phase 7 → Validation
                                                        Phase 8 → Bonus Features
```

The key idea is that each phase builds on the previous one. You don't start with searching before you have data, and you don't compute statistics before appointments exist. By keeping each milestone small and self-contained, you reduce the feeling of having to solve the entire project at once and can focus on one clear objective at a time.
