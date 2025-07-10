# 🎯 Project Brief: **Eventure – Smart QR-based Checkpoint Tracker for Fests**

---

**Eventure** is a web app that allows participants in a college fest to scan **QR codes placed at various booths/events** to:

* ✅ Track which events they've visited
* 🎯 Unlock achievements or prizes
* 📊 See their ranking on a live leaderboard

**Each checkpoint has a fixed QR code**, but we prevent cheating via:

* Location checks
* Time windows
* One scan per checkpoint per user
* Obfuscated QR data

---

## 📘 Problem Statement

> In fests, there’s no good system to **track event participation**, **reward active students**, or make the fest feel like an integrated experience. Most people wander randomly, and organizers can’t measure engagement.

---

## ✅ Goals

* Make exploring booths fun and gamified
* Let users see how much they’ve done
* Let organizers reward or recognize top participants
* Keep the system **cheat-resistant**, but **easy to operate**

---

## 🧩 Scope & Features

### 👤 For Participants:

* **Login** (via nickname or roll number)
* **QR Scan** page
* **My Progress** page (list of completed checkpoints)
* **Leaderboard** (ranks based on number of checkpoints visited)

### 🎪 For Organizers / Admins:

* **Add/Edit checkpoints**
* Generate unique **hidden QR codes** (UUIDs)
* Track scan counts for each checkpoint

---

## 🔐 Anti-Cheat Layers

| Exploit                     | Fix                                                        |
| --------------------------- | ---------------------------------------------------------- |
| Scan same QR multiple times | One scan per checkpoint per user                           |
| Share QR via WhatsApp       | Hidden token values + time lock                            |
| Screenshot + scan later     | Checkpoint QR only valid during time window                |
| Scan from home              | Use browser geolocation and allow only within \~100 meters |

---

## 🛠️ Tech Stack

| Layer       | Tools                                                                     |
| ----------- | ------------------------------------------------------------------------- |
| Frontend    | React (Vite or CRA), TailwindCSS for styling                              |
| Backend     | Firebase (Firestore + optional Auth)                                      |
| QR Scanning | `react-qr-reader` or `html5-qrcode`                                       |
| Hosting     | firebase                                                                  |
| Auth        | Simple nickname input + localStorage (can upgrade to Firebase Auth later) |

---

## 🧱 Database Structure (Firebase Firestore)

### `users/`

```js
{
  userID: "abc123",
  name: "Owais",
  scanned: ["cp_xyz", "cp_123"]
}
```

### `checkpoints/`

```js
{
  checkpointID: "cp_xyz",
  name: "Robo Arena",
  location: { lat: 22.57, long: 88.36 },
  startTime: "2025-07-10T12:00:00",
  endTime: "2025-07-10T14:00:00"
}
```

### `scans/` (optional, for audit)

```js
{
  userID: "abc123",
  checkpointID: "cp_xyz",
  timestamp: ...
}
```

---

## 💻 App Pages Overview

### 1. **Home / Login**

* Enter name (stored in `localStorage`)
* Redirect to dashboard

### 2. **Dashboard**

* Options:

  * Scan QR
  * View Progress
  * View Leaderboard

### 3. **Scan Page**

* Opens camera
* Detects QR code
* Sends token to backend
* Backend:

  * Validates checkpoint
  * Checks time window
  * Checks GPS (optional)
  * Checks if user already scanned
* Updates Firestore on success

### 4. **Progress Page**

* Shows list of completed checkpoints
* Optional: XP score or completion %

### 5. **Leaderboard**

* Shows top users by number of checkpoints scanned

### 6. **Admin Panel (Optional)**

* Add checkpoint (name, lat/long, startTime, endTime)
* Generate QR from checkpointID
* View scan counts

---

## 🧠 Security Decisions

| Concern            | Approach                                                     |
| ------------------ | ------------------------------------------------------------ |
| Guessable QR       | QR = UUID, mapped to checkpoint in DB                        |
| Spoofing check-ins | Browser GPS + timestamp check                                |
| Rescans            | Backend enforces one checkpoint per user                     |
| Fake users         | Enforce name + roll format; optional upgrade to Google login |

---

## 🧪 Testing Plan

| Scenario                 | Expected Result                    |
| ------------------------ | ---------------------------------- |
| Scan QR at booth         | Adds checkpoint to user progress   |
| Scan same QR again       | Blocked                            |
| Scan from 200m away      | Blocked (if location enforced)     |
| Scan outside time window | Blocked                            |
| View leaderboard         | Shows users by participation count |

---

## 🧑‍💻 Team Breakdown

| Member              | Responsibilities                                 |
| ------------------- | ------------------------------------------------ |
| UI/UX Dev           | React UI, navigation, Tailwind styling           |
| QR + Validation Dev | QR scan + token-to-checkpoint validation logic   |
| Firebase Dev        | DB setup, scan logic, security rules             |
| Orchestrator        | Routing, state management, deployment, debugging |

---

## 🕒 5-Hour Build Plan

| Time      | Task                                    | Owner                 |
| --------- | --------------------------------------- | --------------------- |
| 0:00–0:30 | Set up project, Firestore, assign roles | All                   |
| 0:30–1:30 | Build Scan UI, QR logic, DB write       | QR Dev + Firebase Dev |
| 1:30–2:30 | Build Progress Page + Leaderboard       | UI + Orchestrator     |
| 2:30–3:30 | Hook everything together                | All                   |
| 3:30–4:30 | Admin UI (optional) + Time/Geo checks   | Firebase + QR Dev     |
| 4:30–5:00 | Polish, test, deploy                    | All                   |

---

## 🧠 Long-Term Ideas (for later)

* XP system per checkpoint
* Riddle quiz before accepting scan
* Badges & achievements
* Admin dashboard for analytics
* Offline QR cache + sync later
* Festival map with scanned vs. unscanned areas

---

## 🎁 Deliverables

* ✅ Mobile-friendly web app (React + Firebase)
* ✅ Real-time scan and tracking system
* ✅ Working leaderboard
* ✅ Print-ready QR codes
* ✅ Clean UI demo for judges/organizers

---

## 💬 Final Pitch Line

> **Eventure** gamifies real-world fests through smart QR checkpoints — giving participants a fun way to explore and compete, while giving organizers real-time insights into engagement. It’s scalable, secure, and festival-ready in just hours.
