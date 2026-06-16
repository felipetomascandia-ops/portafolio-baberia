import { NextResponse } from "next/server";

const isEmail = (value) => /\S+@\S+\.\S+/.test(value);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message, company } = body;

    if (company) {
      return NextResponse.json(
        { message: "Solicitud descartada." },
        { status: 400 }
      );
    }

    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { message: "Completa todos los campos obligatorios." },
        { status: 400 }
      );
    }

    if (!isEmail(email)) {
      return NextResponse.json(
        { message: "Introduce un email valido." },
        { status: 400 }
      );
    }

    console.log("Nueva solicitud de contacto", {
      name,
      email,
      phone,
      service,
      message
    });

    return NextResponse.json({
      ok: true,
      message:
        "Solicitud enviada correctamente. Esta API ya esta lista para conectarse a email, CRM o automatizaciones."
    });
  } catch {
    return NextResponse.json(
      { message: "No se pudo procesar la solicitud." },
      { status: 500 }
    );
  }
}
