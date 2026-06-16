"use client";

import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  phone: "",
  service: "Signature Cut",
  message: "",
  company: ""
};

export function ContactForm() {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "No se pudo enviar la solicitud.");
      }

      setStatus("success");
      setFeedback(result.message);
      setFormData(initialState);
    } catch (error) {
      setStatus("error");
      setFeedback(error.message || "Ha ocurrido un error inesperado.");
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          <span>Nombre</span>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            required
          />
        </label>

        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="tu@email.com"
            required
          />
        </label>

        <label>
          <span>Telefono</span>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+34 600 000 000"
            required
          />
        </label>

        <label>
          <span>Servicio</span>
          <select name="service" value={formData.service} onChange={handleChange}>
            <option>Signature Cut</option>
            <option>Beard Sculpt</option>
            <option>Classic Shave</option>
            <option>Executive Combo</option>
          </select>
        </label>
      </div>

      <label className="form-full">
        <span>Mensaje</span>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          placeholder="Cuentanos que estilo o servicio necesitas."
          required
        />
      </label>

      <input
        className="form-honeypot"
        type="text"
        name="company"
        value={formData.company}
        onChange={handleChange}
        autoComplete="off"
        tabIndex={-1}
      />

      <div className="form-actions">
        <button className="btn btn-primary" type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Enviando..." : "Enviar solicitud"}
        </button>
        <p className={`form-feedback ${status}`}>{feedback}</p>
      </div>
    </form>
  );
}
