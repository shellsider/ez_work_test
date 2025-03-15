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
 
### **4️⃣ Additional Note**
  - We could have used the `.env` approach for securing the API endpoint, but uploading the `.env` file is not encouraged.

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

---

## 📸 Demo Screenshots

### **Screenshot 1**
![Screenshot 1](https://drive.google.com/uc?id=1CQJNBEM80Ka2R9wuaUtkkr6D0KBg6JBZ)

### **Screenshot 2**
![Screenshot 2](https://drive.google.com/uc?id=1I3dj9InjkXHUa1WAmHGH9AbAX2i_wr0E)

### **Screenshot 3**
![Screenshot 3](https://drive.google.com/uc?id=1YW6Z00aqe0QZQEWUzpjYsqhhJi0PpY2n)

### **Screenshot 4**
![Screenshot 4](https://drive.google.com/uc?id=1JoUVqZJjj_TDAN9vIdl-vkl84u9Rv951)

### **Screenshot 5**
![Screenshot 5](https://drive.google.com/uc?id=1ie19cxwphDbJbVV1k1ezgnGzhtFwTjO5)

### **Screenshot 6**
![Screenshot 6](https://drive.google.com/uc?id=1Tbh2m4QR6-0zaOo_YS6-cPk_IC0zC4eX)

---

This project successfully integrates **form validation, API handling, and responsive UI design**. 🚀  
If you have any questions or need modifications, feel free to reach out!  
