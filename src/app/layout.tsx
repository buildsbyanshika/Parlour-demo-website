"use client";
import React from "react";
import "@/styles/globals.css";
import Header from "../global/Header";
import Footer from "../global/Footer";
import BookAppointmentButton from "@/components/BookAppointmentButton";
import Preloader from "@/components/Preloader";
import useLoadingTracker from "@/components/LoadingTracker";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const loading = useLoadingTracker();

  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          <Preloader loading={loading}>
            {children}
          </Preloader>
        </main>
        <Footer />
        <BookAppointmentButton />
      </body>
    </html>
  );
}
