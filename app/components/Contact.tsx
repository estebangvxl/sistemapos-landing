"use client";
import { useState } from "react";
import {
  Mail,
  MessageCircle,
  Send,
  MapPin,
  CheckCircle,
  Globe,
  Users,
  AtSign,
} from "lucide-react";
import { sendRequest } from "../services";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate send
    try {
      const response = await sendRequest(form);
      if (response.ok) {
        setSent(true);
        return;
      }
      throw new Error("Failed to send request");
    } catch (error) {
      console.error(error);
    }
  };

  const whatsappUrl = `https://wa.me/573002390552?text=${encodeURIComponent("Hola! Me interesa conocer más sobre SystemPOS ¿podrían darme más información?")}`;

  const socials = [
    {
      icon: AtSign,
      label: "Instagram",
      href: "https://instagram.com/systempos",
      color: "#e1306c",
    },
    {
      icon: Users,
      label: "Facebook",
      href: "https://facebook.com/systempos",
      color: "#1877f2",
    },
    {
      icon: Globe,
      label: "LinkedIn",
      href: "https://linkedin.com/company/systempos",
      color: "#0077b5",
    },
    {
      icon: MessageCircle,
      label: "Twitter / X",
      href: "https://twitter.com/systempos",
      color: "#1da1f2",
    },
  ];

  return (
    <section
      id="contacto"
      style={{
        padding: "100px 24px",
        background:
          "linear-gradient(180deg, transparent 0%, rgba(79,110,247,0.03) 50%, transparent 100%)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-tag">
            <MessageCircle size={14} />
            Hablemos
          </div>
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 800,
              letterSpacing: "-1.5px",
              marginBottom: 16,
            }}
          >
            ¿Listo para{" "}
            <span className="gradient-text">transformar tu negocio?</span>
          </h2>
          <p
            style={{
              fontSize: 17,
              color: "var(--text-muted)",
              maxWidth: 500,
              margin: "0 auto",
            }}
          >
            Escríbenos por WhatsApp, email o redes sociales. Respondemos en
            menos de 2 horas.
          </p>
        </div>

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}
        >
          {/* Left: contact info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* WhatsApp CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                background: "rgba(37,211,102,0.08)",
                border: "1px solid rgba(37,211,102,0.25)",
                borderRadius: 20,
                padding: 28,
                textDecoration: "none",
                color: "var(--text)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(37,211,102,0.14)";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(37,211,102,0.08)";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
              }}
            >
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 16,
                  background: "#25d366",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <MessageCircle size={28} color="white" fill="white" />
              </div>
              <div>
                <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>
                  WhatsApp
                </div>
                <div
                  style={{
                    color: "#25d366",
                    fontSize: 15,
                    fontWeight: 600,
                    marginBottom: 4,
                  }}
                >
                  +57 300 2390 552
                </div>
                <div style={{ fontSize: 13, color: "var(--text-muted)" }}>
                  Respuesta inmediata · Lun–Sáb 8am–8pm
                </div>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:atencionsystempos@gmail.com"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                background: "rgba(79,110,247,0.08)",
                border: "1px solid rgba(79,110,247,0.2)",
                borderRadius: 20,
                padding: 28,
                textDecoration: "none",
                color: "var(--text)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(79,110,247,0.14)";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(79,110,247,0.08)";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
              }}
            >
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 16,
                  background: "linear-gradient(135deg, #4f6ef7, #7c3aed)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Mail size={26} color="white" />
              </div>
              <div>
                <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>
                  Email
                </div>
                <div
                  style={{
                    color: "#4f6ef7",
                    fontSize: 15,
                    fontWeight: 600,
                    marginBottom: 4,
                  }}
                >
                  atencionsystempos@gmail.com
                </div>
                <div style={{ fontSize: 13, color: "var(--text-muted)" }}>
                  Respondemos en menos de 2 horas
                </div>
              </div>
            </a>

            {/* Location */}
            <div
              className="card"
              style={{
                padding: 28,
                display: "flex",
                alignItems: "center",
                gap: 20,
              }}
            >
              <div
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 16,
                  background: "rgba(245,158,11,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <MapPin size={26} color="#f59e0b" />
              </div>
              <div>
                <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>
                  Oficinas
                </div>
                <div
                  style={{
                    fontSize: 14,
                    color: "var(--text-muted)",
                    lineHeight: 1.5,
                  }}
                >
                  Ciénaga - Magdalena, Colombia
                  <br />
                  Atención virtual
                </div>
              </div>
            </div>

            {/* Social media */}
            {/* <div className="card" style={{ padding: 28 }}>
              <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 18 }}>Síguenos en redes sociales</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {socials.map(s => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex", alignItems: "center", gap: 10,
                        padding: "12px 14px",
                        background: "var(--bg-card2)",
                        borderRadius: 12, textDecoration: "none",
                        color: "var(--text-muted)", fontSize: 13, fontWeight: 500,
                        transition: "all 0.2s",
                        border: "1px solid transparent",
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.color = s.color;
                        (e.currentTarget as HTMLElement).style.borderColor = `${s.color}40`;
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                        (e.currentTarget as HTMLElement).style.borderColor = "transparent";
                      }}
                    >
                      <Icon size={18} />
                      {s.label}
                    </a>
                  );
                })}
              </div>
            </div> */}
          </div>

          {/* Right: contact form */}
          <div className="card" style={{ padding: 36 }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "60px 0" }}>
                <CheckCircle
                  size={56}
                  color="#22c55e"
                  style={{ margin: "0 auto 20px" }}
                />
                <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>
                  ¡Mensaje enviado!
                </h3>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: 15,
                    lineHeight: 1.6,
                  }}
                >
                  Gracias por contactarnos. Te responderemos muy pronto por
                  email o WhatsApp.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setForm({ name: "", email: "", business: "", message: "" });
                  }}
                  className="btn-secondary"
                  style={{ marginTop: 28 }}
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <>
                <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 6 }}>
                  Solicita tu demo gratuita
                </h3>
                <p
                  style={{
                    color: "var(--text-muted)",
                    fontSize: 14,
                    marginBottom: 28,
                  }}
                >
                  Nuestro equipo te mostrará el sistema en menos de 30 minutos.
                </p>
                <form
                  onSubmit={handleSubmit}
                  style={{ display: "flex", flexDirection: "column", gap: 16 }}
                >
                  <div>
                    <label
                      style={{
                        fontSize: 13,
                        color: "var(--text-muted)",
                        display: "block",
                        marginBottom: 6,
                      }}
                    >
                      Nombre completo *
                    </label>
                    <input
                      required
                      placeholder="Tu nombre"
                      value={form.name}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, name: e.target.value }))
                      }
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        fontSize: 13,
                        color: "var(--text-muted)",
                        display: "block",
                        marginBottom: 6,
                      }}
                    >
                      Correo electrónico *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="tu@empresa.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, email: e.target.value }))
                      }
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        fontSize: 13,
                        color: "var(--text-muted)",
                        display: "block",
                        marginBottom: 6,
                      }}
                    >
                      Nombre del negocio
                    </label>
                    <input
                      placeholder="Tu restaurante, tienda..."
                      value={form.business}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, business: e.target.value }))
                      }
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        fontSize: 13,
                        color: "var(--text-muted)",
                        display: "block",
                        marginBottom: 6,
                      }}
                    >
                      ¿En qué te podemos ayudar?
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Cuéntanos sobre tu negocio y lo que buscas..."
                      value={form.message}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, message: e.target.value }))
                      }
                      style={{ resize: "vertical" }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ justifyContent: "center", marginTop: 8 }}
                  >
                    <Send size={16} />
                    Enviar mensaje
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contacto > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
