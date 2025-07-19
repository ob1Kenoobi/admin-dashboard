# 📊 React Admin Dashboard

A responsive admin dashboard built with **React (Vite)**, **Tailwind CSS v4 (zero-config)**, **shadcn/ui**, and real-time product data fetched from Platzi's Fake Store API.

---
https://magenta-clafoutis-74e908.netlify.app/

## 🚀 Features

### ✅ Core
- 🔁 **Tailwind v4** with CSS-first setup (`@import "tailwindcss"`)
- 🎨 **shadcn/ui** components (Button, Dropdown, Modal, Avatar, Table)
- 🧱 Responsive **Dashboard Layout** (Sidebar + Header + Main Content)
- 📈 ChartCard with dummy **Line & Pie Charts** via Recharts
- 📦 **Product Table** from API with Image, Name, Category, Price, Status
- 🔄 Category & Status **Filter Dropdowns**
- 🧩 **Reusable Components**: Header, Sidebar, StatCard, ChartCard, ProductTable, FilterDropdown
- 🌘 Dark mode support (via custom CSS variables)
- 🎯 **CRUD modals**: Add, Edit, Delete products (local state)
- 🔁 Product **status toggle**
- 🔢 Product **pagination**

---

## 📂 File Structure

src/
├── components/
│ ├── Header.jsx
│ ├── Sidebar.jsx
│ ├── StatCard.jsx
│ ├── ChartCard.jsx
│ ├── ProductTable.jsx
│ ├── ProductRow.jsx
│ ├── FilterDropdown.jsx
│
├── lib/
│ └── api.js # All fetch, create, update logic
│
├── App.jsx
├── globals.css

