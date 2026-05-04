"use client";
import { useState } from "react";
import Image from "next/image";
import { Monitor } from "lucide-react";

const screens = [
  {
    src: "/screen6.png",
    title: "Inicio de sesión",
    desc: "Acceso seguro con usuario y contraseña. Roles diferenciados por empleado.",
  },
  {
    src: "/screen1.png",
    title: "Módulo de Ventas",
    desc: "Catálogo de productos con imagen, stock, ubicación y precio. Agrega al carrito en un clic.",
  },
  {
    src: "/screen4.png",
    title: "Orden Activa",
    desc: "Panel lateral con la orden en tiempo real, subtotal y botón de cobro rápido.",
  },
  {
    src: "/screen5.png",
    title: "Procesar Pago",
    desc: "Efectivo, transferencia o pago parcial. Calcula el cambio automáticamente.",
  },
  {
    src: "/screen2.png",
    title: "Inventario de Productos",
    desc: "Vista tabular con barcode, categoría, ubicación, precio y stock. Exporta e imprime.",
  },
  {
    src: "/screen3.png",
    title: "Reportes y Estadísticas",
    desc: "Total de ventas, ganancias, historial por fecha y ticket promedio del día.",
  },
];

export default function Screenshots() {
  const [active, setActive] = useState(0);

  return (
    <section id="capturas" style={{ padding: "100px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <div className="section-tag">
          <Monitor size={12} />
          Capturas reales del sistema
        </div>
        <h2 style={{
          fontSize: "clamp(30px, 5vw, 50px)", fontWeight: 800,
          letterSpacing: "-1.5px", marginBottom: 14,
        }}>
          Mira el sistema <span className="gradient-text">en acción</span>
        </h2>
        <p style={{ fontSize: 17, color: "var(--text-muted)", maxWidth: 500, margin: "0 auto" }}>
          Estas son pantallas reales de SystemPOS, sin filtros ni mockups.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 24, alignItems: "start" }}>
        {/* Main preview */}
        <div>
          <div style={{
            borderRadius: 16, overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            background: "var(--bg-card)",
          }}>
            <Image
              src={screens[active].src}
              alt={screens[active].title}
              width={860}
              height={540}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
          <div style={{ marginTop: 16, padding: "0 4px" }}>
            <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>{screens[active].title}</div>
            <div style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6 }}>{screens[active].desc}</div>
          </div>
        </div>

        {/* Thumbnails */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {screens.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                borderRadius: 12, overflow: "hidden",
                outline: active === i ? "2px solid #3b82f6" : "2px solid transparent",
                outlineOffset: 2,
                opacity: active === i ? 1 : 0.55,
                transition: "all 0.2s",
                textAlign: "left",
              }}
            >
              <Image
                src={s.src}
                alt={s.title}
                width={300}
                height={170}
                style={{ width: "100%", height: "auto", display: "block", borderRadius: 10 }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Mobile: horizontal scroll thumbnails */}
      <style>{`
        @media (max-width: 768px) {
          #capturas > div:last-child {
            grid-template-columns: 1fr !important;
          }
          #capturas > div:last-child > div:last-child {
            flex-direction: row !important;
            overflow-x: auto;
          }
        }
      `}</style>
    </section>
  );
}
