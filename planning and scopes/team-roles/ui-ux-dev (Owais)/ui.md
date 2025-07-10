# 🗺️ Eventure UI/UX Flow & User Journey

## � Authentication & User Management (Extended)

### 🔑 Auth Features
- **Registration**: New users (participants/admins) can register with nickname, email, and password (admins require code/invite).
- **Login**: Email/password login for all users. Nickname-only login can be fallback for participants.
- **Logout**: Available in NavBar or user menu for all users.
- **Password Reset**: "Forgot password?" link for email-based users.
- **Session Management**: Auto-logout on session expiry; show login screen.

### 👤 Admin User Management
- **View Users**: List/search all registered users (nickname, email, role, status).
- **Add/Edit/Delete Users**: Admins can add, edit, or remove users (except self-delete).
- **Role Management**: Promote/demote users between participant/admin.
- **Reset Passwords**: Admins can trigger password reset emails.

---

## �👥 User Types

- **Participant**: Fest attendee who scans QR codes, tracks progress, and views leaderboard.
- **Admin/Organizer**: Manages checkpoints, views scan stats, generates QR codes.

---


## 🌐 App Entry Point & Auth Flow

### 1. **Landing Page**
- **URL:** `/` (Home)
- **UI:**
  - Eventure logo & branding
  - Welcome message
  - **Login** and **Register** buttons
  - Accessibility: Keyboard focus, ARIA labels
- **Flow:**
  - User chooses to Login or Register

### 2. **Registration Page**
- **URL:** `/register`
- **UI:**
  - Registration form: nickname, email, password, confirm password
  - [Optional] Role selection (Participant/Admin)
  - [If Admin, require admin code/invite]
  - Register button
  - Link to Login
- **Flow:**
  - On submit, validate and create user
  - Redirect to Login or Dashboard

### 3. **Login Page**
- **URL:** `/login`
- **UI:**
  - Login form: email, password
  - [Optional] Nickname-only login for participants
  - "Forgot password?" link
  - Login button
  - Link to Register
- **Flow:**
  - On submit, authenticate user
  - Redirect:
    - **Participant:** `/dashboard`
    - **Admin:** `/admin/panel`

### 4. **Logout**
- **UI:**
  - Logout button/menu in NavBar or user menu
- **Flow:**
  - On click, clear session and redirect to Login

---

## 🧑 Participant Flow

### 5. **Dashboard**
- **URL:** `/dashboard`
- **UI:**
  - Greeting ("Hi, [nickname]!")
  - Main navigation cards/buttons:
    - **Scan QR** (`/scan`)
    - **My Progress** (`/progress`)
    - **Leaderboard** (`/leaderboard`)
  - **NavBar** (bottom or top, mobile-friendly)
- **Flow:**
  - User selects an action:
    - **Scan QR** → `/scan`
    - **My Progress** → `/progress`
    - **Leaderboard** → `/leaderboard`

### 3. **Scan QR Page**
- **URL:** `/scan`
- **UI:**
  - Camera preview (with permission prompt)
  - QR scanner component
  - **Scan** button (if not auto)
  - Loading indicator while processing
  - **Scan feedback:**
    - Success: "Checkpoint added!"
    - Error: "Already scanned" / "Invalid QR" / "Location error"
  - Back to Dashboard button
- **Flow:**
  - User scans QR
  - App validates (location, time, already scanned)
  - Shows feedback
  - Option to scan another or return

### 4. **My Progress Page**
- **URL:** `/progress`
- **UI:**
  - List of completed checkpoints (name, time, XP, etc.)
  - Progress bar or completion %
  - Empty state: "No checkpoints scanned yet"
  - Back to Dashboard button
- **Flow:**
  - User views progress
  - Can return to dashboard or scan more

### 5. **Leaderboard Page**
- **URL:** `/leaderboard`
- **UI:**
  - Table/list of top users (nickname, checkpoints, rank)
  - Highlight current user
  - Back to Dashboard button
- **Flow:**
  - User views leaderboard
  - Can return to dashboard

---

## 🛠️ Admin/Organizer Flow

### 6. **Admin Login**
- **URL:** `/admin/login` (or `/login` with role check)
- **UI:**
  - Email/password login (admin only)
  - [Optional] Admin code input
  - Login button
  - Error feedback for wrong credentials
- **Flow:**
  - On success, redirect to Admin Panel

### 7. **Admin Panel**
- **URL:** `/admin/panel`
- **UI:**
  - Navigation:
    - **User Management** (view/add/edit/delete users, reset passwords, manage roles)
    - **Checkpoints** (list/add/edit)
    - **QR Generator**
    - **Scan Stats**
  - Logout button
- **Flow:**
  - **User Management:**
    - List/search users
    - Add/edit/delete users
    - Promote/demote roles
    - Reset user passwords
  - **Checkpoints:**
    - View all checkpoints
    - Add/edit checkpoint (name, location, time window)
  - **QR Generator:**
    - Generate QR for checkpoint
    - Download/print QR
  - **Scan Stats:**
    - View scan counts per checkpoint
    - Export data

---

## 🔄 Navigation Map (Text Flowchart)

```
[Landing]
  ├──> [Login]
  │      ├──> [Dashboard] (Participant)
  │      │      ├──> [Scan QR]
  │      │      ├──> [My Progress]
  │      │      └──> [Leaderboard]
  │      └──> [Admin Panel]
  │              ├──> [User Management]
  │              ├──> [Checkpoints]
  │              ├──> [QR Generator]
  │              └──> [Scan Stats]
  └──> [Register]
         └──> [Login]
```

---

## 🖼️ UI State Details

- **Loading States:**
  - Show spinner or skeletons for async data (progress, leaderboard, scan validation)
- **Error States:**
  - Clear error messages for network, permission, or validation issues
- **Empty States:**
  - Friendly messages when no data (no scans, no checkpoints, etc.)
- **Accessibility:**
  - All forms and buttons have ARIA labels
  - Keyboard navigation for all interactive elements
  - Sufficient color contrast (see color scheme)

---

## 📱 Mobile-First & Responsive
- All pages/components are mobile-optimized
- NavBar is sticky and thumb-friendly
- Cards/lists stack vertically on small screens

---


## 📝 Component Reference

- **/src/components/**
  - `LoginForm.jsx` – Email/password login, nickname login fallback
  - `RegisterForm.jsx` – Registration form
  - `LogoutButton.jsx` – Logout logic
  - `Dashboard.jsx` – Main nav, greeting
  - `NavBar.jsx` – Navigation bar
  - `QRScanner.jsx` – Camera/QR logic
  - `ProgressList.jsx` – List of checkpoints
  - `Leaderboard.jsx` – Leaderboard table
  - `AdminPanel.jsx` – Admin dashboard
  - `UserManagement.jsx` – Admin user management
  - `LoadingSpinner.jsx`, `ErrorMessage.jsx`, `ScanFeedback.jsx` – UI states

- **/src/pages/**
  - `Home.jsx`, `LoginPage.jsx`, `RegisterPage.jsx`, `DashboardPage.jsx`, `ScanPage.jsx`, `ProgressPage.jsx`, `LeaderboardPage.jsx`, `AdminPage.jsx`, `UserManagementPage.jsx`

---

## 🗂️ Example User Journeys

### Participant
1. Lands on Home → chooses Register or Login
2. Registers (if new) or logs in
3. Arrives at Dashboard
4. Taps "Scan QR" → scans code → sees feedback
5. Checks "My Progress" → sees completed checkpoints
6. Views "Leaderboard" → sees top users
7. Logs out when done

### Admin
1. Lands on Home → chooses Register or Login
2. Registers (with admin code) or logs in
3. Arrives at Admin Panel
4. Manages users (view/add/edit/delete/promote/reset password)
5. Adds new checkpoint
6. Generates QR code
7. Views scan stats
8. Logs out when done

---

## 📋 UI/UX Notes
- All navigation is accessible via NavBar or clear buttons
- Consistent use of color palette and spacing
- All async actions show loading indicators
- All errors are user-friendly and actionable
- Responsive and accessible by default

---

> For wireframes or diagrams, see `/planning and scopes/team-roles/ui-ux-dev (Owais)/` or add screenshots as the design evolves.
