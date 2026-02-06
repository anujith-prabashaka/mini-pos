# Mobile App Installation Guide (Phone ekata install karana hati)

Me system eka dan **Progressive Web App (PWA)** ekak widihata convert kara. E kiyanne meka phone ekata app ekak wagema install karaganna puluwan.

## Follow these steps:

### 1. Host the Application (Website ekak widihata upload karanna ona)
Phone eken access karanna nam me files internet ekata upload karanna ona. Lesima saha free ma krama thamai **GitHub Pages**.

1. **GitHub Repository** ekak hadala me files okkoma upload karanna.
2. Repository Settings walata gihin **Pages** tab ekata yanna.
3. `Branch` eka 'main' widihata select karala save karanna.
4. Tika welawakin oyata **URL** ekak labei (Ex: `https://yourname.github.io/pos-mini/`).

### 2. Install on Android Phone
1. Oya labunu URL eka phone eke **Chrome** browser eken open karanna.
2. Tika welawak yaddi yatin **"Add AutoParts to Home Screen"** kiyala bar ekak ei. Eka click karanna.
3. Ehema awe nathnam:
   - Chrome Menu (thith 3) obanna.
   - **"Install App"** ho **"Add to Home screen"** select karanna.
4. Dan phone eke app drawer eke **AutoParts** kiyala app icon eka watila athi.

### Important: Data Transfer (Data maru karaganna hati)
Me system eka **Local Database** ekak use karana nisa, PC eke tyna data phone ekata automatic enne na. 
1. PC eke **Settings** walata gihin **Download Backup** click karala JSON file eka ganna.
2. E file eka phone ekata yawaganna (WhatsApp/Email/USB haraha).
3. Phone eke app eka open karala **Settings** walata gihin **Import Data** click karala ara file eka select karanna.
4. Okkoma badu tika phone ekata add wei!

### 3. Install on iPhone (iOS)
1. Safari eken URL eka open karanna.
2. **Share** button eka obanna (square with arrow up).
3. Scroll karala **"Add to Home Screen"** select karanna.

---
## Technical Notes for Developer
- **Manifest File**: Updated to ensure correct "standalone" display mode.
- **Service Worker**: Caches all essential files so the app works **Offline** (internet nathi wunath wada karana widihata).
- **Icons**: Ensure `icons/icon.svg` is available.

Dan me fully working offline-capable app ekak!
