"use client";
import { ArrowRight, ShoppingCart } from "lucide-react";
import Image from "next/image";

const stats = [
  { value: "100%", label: "Disponibilidad" },
  { value: "24/7", label: "Soporte técnico" },
];

export default function Hero() {
  return (
    <section
      className="grid-bg"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "110px 24px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 700,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 860,
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="section-tag">
          <ShoppingCart size={12} />
          Sistema POS profesional para farmacias y tiendas
        </div>

        <h1
          style={{
            fontSize: "clamp(38px, 6.5vw, 72px)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-2px",
            marginBottom: 22,
          }}
        >
          El POS que tu negocio{" "}
          <span className="gradient-text">necesitaba</span>
        </h1>

        <p
          style={{
            fontSize: "clamp(15px, 2.2vw, 18px)",
            color: "var(--text-muted)",
            lineHeight: 1.7,
            maxWidth: 580,
            margin: "0 auto 36px",
          }}
        >
          Gestiona ventas, inventario, reportes y usuarios desde una sola
          plataforma. Rápido, confiable y diseñado para Colombia.
        </p>

        <div
          style={{
            display: "flex",
            gap: 14,
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: 64,
          }}
        >
          <a href="#contacto" className="btn-primary" style={{ fontSize: 16 }}>
            Comenzar gratis
            <ArrowRight size={17} />
          </a>
          <a
            href="#capturas"
            className="btn-secondary"
            style={{ fontSize: 16 }}
          >
            Ver el sistema
          </a>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
            gap: 14,
            maxWidth: 660,
            margin: "0 auto",
          }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="card"
              style={{ padding: "18px 12px", textAlign: "center" }}
            >
              <div
                style={{
                  fontSize: 26,
                  fontWeight: 800,
                  color: "#3b82f6",
                  marginBottom: 3,
                }}
              >
                {s.value}
              </div>
              <div style={{ fontSize: 12, color: "var(--text-muted)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main screenshot hero */}
      <div
        className="animate-float"
        style={{
          marginTop: 72,
          maxWidth: 860,
          width: "100%",
          position: "relative",
        }}
      >
        <div
          style={{
            borderRadius: 16,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow:
              "0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(59,130,246,0.12)",
          }}
        >
          <Image
            src="/screen4.png"
            alt="SystemPOS — pantalla de ventas"
            width={860}
            height={500}
            style={{ width: "100%", height: "auto", display: "block" }}
            priority
          />
        </div>
        {/* Floating badges */}
        <div
          className="screen-badge"
          style={{
            top: 16,
            left: -10,
            color: "#22c55e",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#22c55e",
            }}
          />
          Sistema activo
        </div>
        <div
          className="screen-badge"
          style={{ bottom: 20, right: -10, color: "#93c5fd" }}
        >
          $10.000 en proceso ✓
        </div>
      </div>
    </section>
  );
}
