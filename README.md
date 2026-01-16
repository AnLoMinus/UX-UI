# 🎛️ UIUX-CraftVault

**Crafting Interfaces. Shaping Experiences.**

---

## 🧠 Overview

**UIUX-CraftVault** הוא מאגר־על לשלדי UI/UX ותבניות ממשק מוכנות לשימוש, הבנויות ב־**HTML / CSS / JavaScript** טהור.

זהו Vault אחד מרכזי, שבתוכו פועלים **Collections (אוספים)** — כל אוסף הוא עולם עיצובי עצמאי עם אופי, חוקים וכיוון משלו, אך כולם נשענים על ליבה משותפת כדי לשמור על סדר, סקייל ותחזוקה חכמה לאורך זמן.

---

## 🗂️ CraftVault Concept

**CraftVault = Craft + Vault**

* 🧰 *Craft* — מלאכת מחשבת, דיוק, בנייה מודולרית
* 🗄️ *Vault* — כספת מסודרת, מאורגנת, ניתנת להרחבה אינסופית

העיקרון המוביל:

> **מאגר אחד · עשרות אוספים · אינסוף תבניות**

---

## 🗓️ Metadata

* **Gregorian Date:** 16 January 2026
* **Hebrew Date:** כ״ז טבת תשפ״ו
* **Time:** 05:09 (Asia/Jerusalem)

---

## 🎯 Goals

* 🧱 לספק **שלדי ממשק מוכנים** לפיתוח מהיר
* 🎨 לאפשר **סגנונות שונים** ללא כאוס
* ♻️ לאפשר **שימוש חוזר והרחבה אינסופית**
* 🌐 לאפשר **תצוגה חיה** דרך GitHub Pages
* 🧭 לשמור על **סטנדרט אחיד** בין עשרות תבניות

---

## 🧱 Repository Structure (Scalable by Design)

```
UIUX-CraftVault/
├─ README.md
├─ LICENSE
├─ docs/                      # קטלוג לתצוגה (GitHub Pages)
│  ├─ index.html
│  ├─ catalog.js
│  └─ catalog.css
├─ core/                      # ליבה משותפת (מומלץ)
│  ├─ tokens.css              # צבעים / רדיוסים / טיפוגרפיה
│  ├─ base.css                # reset + grid + helpers
│  └─ ui.js                   # modal / toast / tabs / menu
└─ collections/               # אוספי UI/UX לפי אופי וכיוון
   ├─ uiux-craft/
   ├─ uiux-forge/
   ├─ uiux-kit/
   ├─ uiux-blueprints/
   ├─ uiux-skeletons/
   ├─ uiux-frames/
   ├─ uiux-core/
   ├─ uiux-lab/
   ├─ uiux-factory/
   ├─ uiux-engine/
   ├─ uiux-stack/
   ├─ uiux-studio/
   ├─ uiux-designcraft/
   ├─ uiux-patterns/
   ├─ uiux-canvas/
   ├─ uiux-shapes/
   ├─ uiux-launchpad/
   ├─ uiux-starter/
   ├─ uiux-booster/
   ├─ uiux-flow/
   ├─ uiux-pulse/
   ├─ uxmind-craft/
   ├─ interface-craft/
   ├─ humanui-craft/
   ├─ experience-craft/
   └─ designflow-ux/
```

---

## 🎭 Collections Philosophy

כל תיקייה תחת `collections/` מייצגת **אוסף עצמאי**.

לכל Collection יש:

* 📘 `_identity.md` — DNA עיצובי וחוקי UI
* 🧩 `_starter/` — שלד בסיסי לשכפול
* 📦 `templates/` — תבניות מוכנות

### דוגמה:

```
collections/uiux-forge/
├─ _identity.md
├─ _starter/
└─ templates/
```

---

## 🎨 Collection Identity Standard

בכל `_identity.md` מוגדרים חוקי האוסף:

* 🎨 **Palette** — כהה / בהיר / ניאון / מינימל
* ✍️ **Typography** — מודרני / קלאסי / טכני
* 🧩 **Components Focus** — טפסים / דשבורדים / מובייל / איקומרס
* ⚡ **Motion** — ללא / עדין / מודגש
* 📐 **Layout DNA** — Grid צפוף / Card-based / Sidebar-first
* ♿ **A11y Rules** — פוקוס ברור / קונטרסט גבוה / מקלדת מלאה

---

## 🧠 Collection Personalities (No Overlap)

* 🔨 **UIUX-Forge** — Industrial, Panels, Shadows
* 🧰 **UIUX-Kit** — Utility, Copy/Paste Components
* 📐 **UIUX-Blueprints** — Architectural, Grid & Measures
* 🦴 **UIUX-Skeletons** — Barebones, Minimum UI
* 🖼️ **UIUX-Frames** — Layout-first, No Content
* 🧪 **UIUX-Lab** — Experimental, New Interactions
* 🏭 **UIUX-Factory** — Mass Production, Variants
* ⚙️ **UIUX-Engine** — Systems, States, Tokens
* 🚀 **UIUX-Launchpad** — Startup, Landing + CTA
* 🌊 **UIUX-Flow** — Onboarding, Journeys
* 💓 **UIUX-Pulse** — Motion & Micro-interactions
* 👤 **HumanUI-Craft** — Human-first, Accessibility
* ✨ **Experience-Craft** — Premium Feel

---

## 🧩 Template Standard

כל Template יושב ב:
`collections/<collection>/templates/<template-id>/`

```
index.html
styles.css
app.js
meta.json
README.md
preview.png
```

### meta.json example

```json
{
  "title": "Admin Dashboard - Neon Panels",
  "tags": ["dashboard", "sidebar", "cards"],
  "collection": "uiux-forge",
  "status": "stable",
  "viewport": "responsive"
}
```

---

## 🌐 Live Catalog (Docs)

הקטלוג (`docs/`) מציג תבניות נבחרות בלבד —
שליטה מלאה במה ציבורי ומה ניסיוני.

---

## 🚀 Recommended Workflow

1. 🧱 בנה `core/` בסיסי
2. 🧬 צור `_identity.md` + `_starter/` לכל אוסף
3. 🧩 התחל בכל אוסף עם Login + Dashboard
4. 🌐 הוסף רק Top Templates לקטלוג

---

## 🔢 Product Measures

**12 מידות מוצר:** בהירות, עקביות, פשטות, זרימה, נגישות, מהירות, אמינות, יופי, סדר, גמישות, סקייל, תחזוקה.

---

## 📜 Closing Quote

"כָּל מַעֲשֶׂיךָ יִהְיוּ לְשֵׁם שָׁמַיִם" (אבות ב׳, יב)

---

**AnLoMinus — Crafting Systems with Meaning**
