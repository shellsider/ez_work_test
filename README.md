# EZ Works Test Submission

This repository contains **two separate implementations** of the given test:

- **`ez_work_main/`** – Uses standard **CSS modules** for styling.
- **`ez-with-tailwind/`** – Uses **Tailwind CSS** for utility-based styling.

Both implementations provide the same functionality but offer different styling approaches.

---

## 📌 Project Structure

```
ez_work_test/
│── ez_work_main/        # Implementation with CSS Modules (Native CSS)
│── ez-with-tailwind/    # Implementation with TailwindCSS
│── README.md            # Documentation
```

Each folder is a **self-contained Vite + React** project.

---

## 🔹 Workflow & Features

### **1️⃣ Front-End Validations**
✅ Prevents **empty form submissions**.  
✅ Checks for **valid email format** before submitting.  
✅ Restricts emails ending with `@ez.works` (API returns an error).  

### **2️⃣ API Integration (Using Axios)**
- **API Endpoint:** `https://test.ezworks.ai/api`
- **Successful Response (`200`)**
  - `"Form Successfully Submitted!"` is displayed in a Modal.
- **Failure Response (`422` for `@ez.works` emails)**
  - `"Incorrect Email"` message is displayed in a Modal.
- **Error Handling**
  - If the server returns an unknown error, it is displayed in a Modal.

### **3️⃣ UI & Styling**
- `ez_work_main/` uses **CSS Modules** for styling.
- `ez-with-tailwind/` uses **TailwindCSS** for styling.
- Both have a **responsive layout** and are optimized for:
  - **480p (Mobile)**
  - **720p (Tablet)**
  - **1080p, MacBook, iPad, and larger screens**
 
### **4** **note**
  - We could have used .env approach as well for securing the api endpoint, but uploading the .env file is not encouraged 

---

## 🚀 How to Run Locally

### **1️⃣ Download the repository**  
- Click on **Code** → **Download ZIP**  
- Extract the ZIP file  

### **2️⃣ Choose a version to run**  
- Open **either** `ez_work_main/` (Native CSS) or `ez-with-tailwind/` (Tailwind CSS) in **VS Code**  

### **3️⃣ Install dependencies**  
- Open the terminal inside VS Code  
- Run:  
  ```sh
  npm install
  ```  
  or  
  ```sh
  npm i
  ```  

### **4️⃣ Start the development server**  
  ```sh
  npm run dev
  ```  
- The app will now be available at **http://localhost:5173/** (default Vite port).  

---

## ⚡ Technologies Used

| Feature              | `ez_work_main/` | `ez-with-tailwind/` |
|----------------------|----------------|---------------------|
| Frontend Framework  | React.js        | React.js           |
| Styling             | CSS Modules     | Tailwind CSS       |
| API Handling        | Axios           | Axios              |
| Build Tool          | Vite            | Vite               |
| State Management    | React `useState`| React `useState`   |
| Form Validation     | Custom Logic    | Custom Logic       |

---

## 💡 Expected Behavior

### **✔️ Valid Input**
- The form submits successfully, and `"Form Successfully Submitted!"` appears below the input field.

### **❌ Invalid Input**
- If the field is empty, `"Email cannot be empty"` is displayed.
- If the email is in an incorrect format, `"Invalid email format"` is displayed.
- If the email ends in `@ez.works`, the API will return an error message (`422`).

### **🔄 While Submitting**
- The `"Contact Me"` button shows `"Submitting..."` while waiting for the API response.
- The button is **disabled** during submission.

---
