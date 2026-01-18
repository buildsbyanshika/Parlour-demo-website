# LadiesParlour

LadiesParlour is a modern, fully responsive web application tailored for a beauty salon/service business. Built with Next.js, React, TypeScript, and Tailwind CSS, it offers a seamless user experience with multiple pages such as About, Contact, Book Appointment, Services, Gallery, and more. The theme features a stylish pinkish-white palette that fits the elegant and feminine aesthetic of a ladies’ parlour.

## Features

- **Multi-page layout:** About, Contact, Services, Gallery, Book Appointment, and more.
- **Responsive Design:** Optimized for mobiles, tablets, and desktops using Tailwind CSS.
- **Tech stack:** Next.js + React + TypeScript for a robust frontend architecture.
- **Backend:** Node.js + Express.js API built for handling appointments.
- **Database:** MongoDB integration to store appointment details.
- **Clean, Maintainable Code:** Developed following CodeCanyon professional standards.
- **Thematic UI:** Pinkish-white colors and modern styling.
- **Booking Functionality:** Fully integrated backend for appointment booking.

## Screenshot

<img width="1891" height="910" alt="Screenshot 2025-08-21 211134" src="https://github.com/user-attachments/assets/4c8bcd21-e60a-4e73-ba8c-30407bbdc071" />
<img width="1894" height="909" alt="Screenshot 2025-08-21 211047" src="https://github.com/user-attachments/assets/4f8dafff-8418-47a8-830e-402701cb042b" />
<img width="1894" height="909" alt="Screenshot 2025-08-22 144725" src="https://github.com/user-attachments/assets/288b25dc-8f0a-4080-93bc-cb3f30ab93b8" />

*Screenshot provided is a demo of website.*


---

## Repository Setup & Running Locally

Follow the instructions below to clone, setup, and run the project both frontend and backend on your local machine.

### Prerequisites

- Node.js (>=14.x recommended)
- npm or yarn package manager
- MongoDB running locally or accessible remotely (e.g., MongoDB Atlas)

---

### Clone the Repository

    git clone https://github.com/Anshika1201/Parlour-demo-website.git

---

### Setup Frontend

      cd parlour-demo-website
      npm install # or yarn install


### Run Frontend Development Server

      npm run dev # or yarn dev


Open your browser to http://localhost:3000 to view the frontend.

---

### Setup Backend

Open a new terminal window/tab:

      cd backend
      npm install # or yarn install


Ensure MongoDB is running locally (`mongodb://localhost:27017/your_db_name`) or update your connection string in `server.js`.

### Run Backend Server

      npm start # or node server.js


The backend server will start on port 5000 by default.

---

### Configure Frontend to Connect to Backend

- In frontend, create a `.env.local` file at `frontend/.env.local` with:

      NEXT_PUBLIC_API_URL=http://localhost:5000


- The frontend will use this environment variable to send API requests to your backend.

---

## How to Use

- Visit `/` to explore the homepage.
- Navigate to `/about`, `/contact`, `/services`, `/gallery`.
- Use `/book-appointment` to book an appointment which saves data to the backend/MongoDB.
- Admin or other views can be added later to manage appointments.

---

## Folder Structure Overview

      /backend # Node.js API with MongoDB connection and appointments routes
      /frontend # Next.js frontend with React, TypeScript, Tailwind CSS
      /components # React UI components
      /pages # Application pages/routes
      /data # Static data e.g. services list
      /styles # Tailwind and custom CSS


---

##  Upcoming Updates
 - **Email Integration :** We are working on a new feature to send a confirmation email to both the client and the beautician after a successful booking. This will provide all parties with a seamless and reliable way to receive immediate details about the appointment.



## Additional Information

- **License:** MIT License — Feel free to use, modify, and distribute with proper credit.
- **Code Standards:** Developed with maintainability and clarity, following professional marketplace standards.
- **Theme:** Pinkish-white colors to reflect feminine, modern beauty parlour branding.

---

## Support

If you have questions or issues, please create an issue in the repository or contact me at [LinkedIn](www.linkedin.com/in/anshika-samriya-344946274).

---

## Command Summary

| Task                    | Command                                      |
|-------------------------|----------------------------------------------|
| Clone repo              | `git clone https://github.com/Anshika1201/Parlour-demo-website.git` |
| Install frontend deps   | `cd frontend && npm install`                  |
| Run frontend dev server | `npm run dev`                                 |
| Install backend deps    | `cd backend && npm install`                    |
| Run backend server      | `npm start` or `node server.js`               |
| Set frontend API URL    | Create `.env.local` with `NEXT_PUBLIC_API_URL=http://localhost:5000` |

---
