import { NextRequest, NextResponse } from "next/server";
import Appointment from "@/models/Appointment";
import { connectMongo } from "@/lib/mongoose";

export async function POST(request: NextRequest) {
  try {
    await connectMongo();

    const data = await request.json();
    const { service, date, time, name, email, phone, message } = data as {
      service: unknown;
      date: unknown;
      time?: unknown;
      name: unknown;
      email: unknown;
      phone: unknown;
      message?: unknown;
    };

    const missingFields: string[] = [];

    if (!Array.isArray(service) || service.length === 0) {
      missingFields.push("service");
    }
    if (!date) missingFields.push("date");
    if (!name) missingFields.push("name");
    if (!email) missingFields.push("email");
    if (!phone) missingFields.push("phone");

    if (missingFields.length > 0) {
      console.error("Appointments API validation failed:", { missingFields, body: data });
      return NextResponse.json(
        {
          success: false,
          error: "Required fields are missing",
          missing: missingFields,
        },
        { status: 400 }
      );
    }

    await Appointment.create({
      service,
      date,
      time: typeof time === "string" ? time : "",
      name,
      email,
      phone,
      message: typeof message === "string" ? message : "",
    });

    return NextResponse.json(
      { success: true, message: "Appointment created successfully." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Appointments API error:", error, {
      body: await request.text().catch(() => "<cannot-read-body>"),
    });
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
