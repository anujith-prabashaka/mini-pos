# AutoParts POS System

A premium, glass-morphism styled web-based Stock Management, POS, and Billing system.

## Setup
1. Simply double-click `index.html` to open the application in your browser.
2. **Default Password:** `admin123`

## Features
- **Dashboard:** Real-time specific daily sales, profit, and low stock alerts.
- **POS:** Fast billing with stock validation and PDF invoice generation.
- **Products:** Manage inventory with images, cost prices, and selling prices.
- **Shops:** Manage customer details and track outstanding credit balances.
- **Reports:** Analyze sales and profit (Admin only).
- **Catalog:** Generate professional PDF price lists for customers (hides cost prices).

## Technologies
- HTML5, Tailwind CSS
- Vanilla JavaScript
- Dexie.js (IndexedDB wrapper for local storage)
- jsPDF (for PDF generation)

## Notes
- Data is stored in your browser's **Local Storage (IndexedDB)**. 
- Clearing browser cache/data will remove your inventory and sales records.
- For backup, this version relies on the browser retention.
