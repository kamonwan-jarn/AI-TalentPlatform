# 🚀 AI Future Talent Acquisition & Skills Development Platform

แพลตฟอร์มสรรหาและพัฒนาบุคลากรแห่งอนาคต เพื่อขับเคลื่อนศักยภาพของบุคลากรไทยในยุคปัญญาประดิษฐ์ (AI & Generative AI)  
โครงงานนี้เป็นส่วนหนึ่งของวิชา **CS319 (Mini Project 1)**

---

## 📌 โครงสร้างและหน้าเว็บของระบบ (Web Pages)

เว็บไซต์ประกอบด้วย 4 หน้าหลัก เชื่อมต่อกันแบบสมบูรณ์และรองรับ Responsive ทุกขนาดหน้าจอ:

1. **หน้าแรก (Home - `index.html`)**
   - แบนเนอร์หลัก (Hero Banner) สื่อถึงการทำงานร่วมกับ AI
   - ตำแหน่งงาน AI ยอดนิยม (Featured Jobs) 3 ตำแหน่ง พร้อมปุ่มสมัครงาน
   - แบบฟอร์มลงทะเบียนบุคลากรและประเมินทักษะ AI (AI Skill Profiling Form) พร้อมระบบ Real-time Validation

2. **ตำแหน่งงานว่าง (Job Vacancies - `jobvacancies.html`)**
   - รวมตำแหน่งงาน AI ทั้งหมด 5 ตำแหน่ง (รายละเอียดหน้าที่, คุณสมบัติ, สวัสดิการ)
   - ปุ่มสมัครงานแบบส่งต่อข้อมูลตำแหน่งไปยังฟอร์มหน้าแรกโดยอัตโนมัติผ่าน URL Query

3. **หลักสูตรพัฒนาทักษะ (Courses - `courses.html`)**
   - คอร์สเรียน AI มาตรฐานสากล 6 หลักสูตร
   - ป๊อปอัปแสดงรายละเอียดเนื้อหาหลักสูตร (Interactive Modal Popup)

4. **เกี่ยวกับเราและทีมผู้พัฒนา (About Us - `about.html`)**
   - ข้อมูลองค์กรและที่ตั้งสำนักงาน พร้อมแผนที่ Google Maps (มหาวิทยาลัยกรุงเทพ วิทยาเขตรังสิต)
   - ฟอร์มสำหรับติดต่อสอบถาม (Contact Form)
   - แนะนำทีมผู้พัฒนา 3 คน พร้อมภาพและบทบาทหน้าที่

---

## 🛠️ เทคโนโลยีที่ใช้ในการพัฒนา (Tech Stack)

เราใช้เทคโนโลยีมาตรฐานเว็บ (Web Standards) ที่ตรงตามการพัฒนาจริง:

- **Frontend:** `HTML5` (Semantic HTML)
- **Styling:** `CSS3` (Flexbox, CSS Grid, Responsive Design, CSS Variables, Google Fonts Prompt & Inter)
- **Logic & Interactivity:** `JavaScript (Vanilla JS)`
  - ระบบตรวจสอบความถูกต้องของฟอร์มแบบเรียลไทม์ (Form Validation)
  - ระบบดึงตำแหน่งงานจาก URL Parameter (`?job=...`) มาเลือกในฟอร์มอัตโนมัติ
  - ระบบหน้าต่างป๊อปอัป (Modal Window)
- **Version Control & Hosting:** `GitHub` และ `Vercel`

---

## 📁 โครงสร้างโฟลเดอร์โปรเจกต์ (Project Structure)

```text
miniproject1/
├── index.html           # หน้าหลัก (Home + Registration Form)
├── jobvacancies.html    # หน้ารายการตำแหน่งงาน 5 ตำแหน่ง
├── courses.html         # หน้ารายการคอร์สเรียน AI 6 คอร์ส
├── about.html           # หน้าข้อมูลองค์กร แผนที่ และทีมผู้พัฒนา
├── css/
│   └── style.css        # ไฟล์สไตล์หลักของทั้งเว็บไซต์
├── js/
│   └── validation.js    # ระบบ Form Validation และ Modal Interactivity
├── img/                 # รูปภาพประกอบและภาพผู้พัฒนา
└── README.md            # เอกสารอธิบายโปรเจกต์
```

---

## 💻 วิธีการเปิดใช้งาน (How to Run)

1. **เปิดผ่านเบราว์เซอร์โดยตรง:**  
   ดับเบิ้ลคลิกเปิดไฟล์ `index.html` บนเบราว์เซอร์ (Google Chrome, Safari, Microsoft Edge)
2. **เปิดผ่าน Live Server (VS Code / Extension):**  
   คลิกขวาที่ไฟล์ `index.html` แล้วเลือก **Open with Live Server**

---

## 👥 ทีมผู้พัฒนา (Development Team)

| ลำดับ | รายชื่อผู้จัดทำ|Email| บทบาทและหน้าที่ (Role) | เทคโนโลยีที่รับผิดชอบ |
| :---: | :--- | :--- | :--- | :--- |
| 1 | **นางสาวนิฤมน ศรีวิชา** |niruemol.sriw@bumail.net |  Frontend Developer|`HTML5`, `CSS3` (โครงสร้างหน้าเว็บและสไตล์ Responsive) |
| 2 | **นายธนากร กระสายกลาง**|Email:thanakorn.urllen@gmail.com | Logic & Validation | `JavaScript (Vanilla JS)` (ระบบตรวจสอบฟอร์มและป๊อปอัป) |
| 3 | **นางสาวกมลวรรณ จารไทสงค์**|Email:kamonwan.jarn@bumail.net | Deployment & Version Control | `Vercel`, `GitHub` (การจัดการโค้ดและนำขึ้นออนไลน์) |

---
© 2026 AI Future Talent Platform. All rights reserved.
