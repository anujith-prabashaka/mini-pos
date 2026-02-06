# Project: Vehicle Electrical Parts Business System

## 1. Overview
[cite_start]A simple, web-based Stock Management, POS, Billing, and Reporting system specifically designed for a wholesale vehicle electrical parts business in Sri Lanka[cite: 3, 4]. [cite_start]The system is built for an Admin-only environment where stock, credit, and profits are tracked accurately[cite: 7, 8].

## 2. Technical Stack
- [cite_start]**Frontend:** HTML5, Tailwind CSS (for responsive, mobile-friendly UI)[cite: 131, 135].
- **Client-Side Database:** Dexie.js (A wrapper for IndexedDB to store data locally in the browser).
- [cite_start]**PDF Generation:** Library like `jsPDF` or `html2pdf.js` for generating bills and catalogs[cite: 134].
- [cite_start]**Currency:** All values in LKR[cite: 10].

---

## 3. Core Business Requirements

### 3.1 User Access & Security
- [cite_start]**Admin Access:** Only logged-in admins can access the system[cite: 13, 14].
- [cite_start]**Privacy:** Cost price and profit are strictly visible to admins only[cite: 8, 33, 75, 76].
- [cite_start]**No Public Access:** The system is secured for internal business use[cite: 14].

### 3.2 Product Management Module
Each product entry must contain:
- [cite_start]Unique Product Code, Name, and Photo (Image Upload)[cite: 17, 18, 19].
- [cite_start]Pricing: Cost Price (Admin only) and Selling Price[cite: 20, 21].
- Quantity Tracking:
    - [cite_start]**Total Quantity:** Initial stock added[cite: 22].
    - [cite_start]**Sold Quantity:** Auto-calculated from sales[cite: 23, 54].
    - [cite_start]**Available Quantity:** $Total Quantity - Sold Quantity$[cite: 24, 32].
- [cite_start]**Functions:** Add, Update, and Delete products[cite: 27, 28, 29].
- [cite_start]**Stock Guard:** Prevent sales if available stock is insufficient[cite: 30, 124].

### 3.3 Shop & Customer Management
Track details for each wholesale shop:
- [cite_start]Shop Name, Owner Name, Phone Number, and Address[cite: 37, 38, 39, 40].
- Financial Tracking per shop:
    - [cite_start]Total Sales[cite: 42, 105].
    - [cite_start]Total Payments made by the shop[cite: 43, 106].
    - [cite_start]**Outstanding Balance (Credit):** $Total Bill Amount - Total Paid Amount$[cite: 44, 107].

### 3.4 POS & Billing System
- [cite_start]**Interface:** Select customer (shop) and add products via code or name[cite: 47, 48].
- [cite_start]**Calculations:** Enter quantity to auto-calculate line totals and grand totals[cite: 49, 50, 51].
- **Stock Integration:** Upon bill generation:
    - [cite_start]Auto-update Sold/Available quantities[cite: 53, 54].
    - [cite_start]Save the sale record permanently[cite: 54, 126].

### 3.5 Invoice/Bill Output
Generate professional bills including:
- [cite_start]Auto-generated Bill Number, Date, Time, and Shop Name[cite: 57, 58, 59].
- [cite_start]Product details: Code, Name, Quantity, and Unit Selling Price[cite: 61, 62, 64, 65].
- [cite_start]Financials: Grand total only (Cost and profit are hidden)[cite: 67, 73, 75].
- [cite_start]**Outputs:** Printable, PDF Download, and optimized for WhatsApp sharing[cite: 69, 70, 71].

---

## 4. Profit & Reporting (Admin Only)

### 4.1 Profit Calculation Logic
[cite_start]Profit must be calculated internally and never shown to customers[cite: 78, 85].
- [cite_start]**Per Item:** $Profit = (Selling Price - Cost Price) \times Quantity$[cite: 79].
- [cite_start]**Storage:** Profit per bill, day, week, and month must be stored[cite: 81, 82].

### 4.2 Reporting Requirements
- [cite_start]**Daily:** Total sales and total profit[cite: 88, 89, 90].
- [cite_start]**Weekly:** Total sales, total profit, and best-selling products[cite: 91, 92, 93, 94].
- [cite_start]**Monthly:** Total sales, total profit, shop-wise outstanding credit, and product sales summary[cite: 95, 96, 97, 98, 99].
- [cite_start]**Filters:** Reports must be filterable by date and displayed in tables[cite: 101, 102].

---

## 5. Catalog Generator
- [cite_start]System must generate a customer-facing PDF Catalog[cite: 111, 112].
- [cite_start]**Details:** Product Code, Name, Photo, and Selling Price[cite: 113, 114, 115, 116].
- [cite_start]**Exclusions:** Absolutely no cost price or profit info[cite: 118, 119].
- **Features:** Admin selects specific products; [cite_start]PDF includes a version/date (e.g., Price List v1.0)[cite: 120, 122].

---

## 6. Critical Business Rules
1. [cite_start]**No Negative Stock:** Sales cannot exceed available inventory[cite: 124].
2. [cite_start]**Data Integrity:** Sales records cannot be deleted; only admin corrections are allowed[cite: 126].
3. [cite_start]**Privacy:** Cost price and profit are hidden in all customer-facing outputs[cite: 125].
4. [cite_start]**Credit Control:** System must highlight shops with outstanding balances to prevent uncontrolled credit[cite: 109, 110, 127].