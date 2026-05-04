"use client";
import { useState } from "react";
import { Check, Zap, Building, Rocket } from "lucide-react";

type Plan = {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
  priceMonthly: number;
  priceYearly: number;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
};

const defaultPlans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    icon: Zap,
    color: "#4f6ef7",
    priceMonthly: 49000,
    priceYearly: 39000,
    description: "Ideal para negocios pequeños y emprendedores",
    features: [
      "1 caja registradora",
      "Hasta 200 productos",
      "Reportes básicos",
      "Soporte por email",
      "Facturación electrónica",
      "App móvil incluida",
    ],
    highlighted: false,
    cta: "Comenzar gratis",
  },
  {
    id: "pro",
    name: "Pro",
    icon: Rocket,
    color: "#a855f7",
    priceMonthly: 99000,
    priceYearly: 79000,
    description: "Para restaurantes, tiendas y negocios en expansión",
    features: [
      "3 cajas registradoras",
      "Productos ilimitados",
      "Reportes avanzados + dashboard",
      "Soporte 24/7 chat y WhatsApp",
      "Gestión de inventario completa",
      "Múltiples métodos de pago",
      "Módulo de clientes y fidelización",
      "Integración con delivery apps",
    ],
    highlighted: true,
    cta: "Elegir Pro",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    icon: Building,
    color: "#f59e0b",
    priceMonthly: 199000,
    priceYearly: 159000,
    description: "Para cadenas, franquicias y grandes operaciones",
    features: [
      "Cajas ilimitadas",
      "Multi-sede centralizado",
      "API y integraciones custom",
      "Gerente de cuenta dedicado",
      "SLA de uptime garantizado",
      "Capacitación del equipo",
      "Reportes BI avanzados",
      "Marca blanca disponible",
    ],
    highlighted: false,
    cta: "Contactar ventas",
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(false);
  const [plans, setPlans] = useState<Plan[]>(defaultPlans);
  const [editing, setEditing] = useState<string | null>(null);

  const formatPrice = (p: number) =>
    new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(p);

  const updatePrice = (id: string, monthly: number, yearlyP: number) => {
    setPlans(prev => prev.map(p => p.id === id ? { ...p, priceMonthly: monthly, priceYearly: yearlyP } : p));
  };

  return (
    <section id="precios" style={{
      padding: "100px 24px",
      background: "linear-gradient(180deg, transparent 0%, rgba(79,110,247,0.03) 50%, transparent 100%)",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="section-tag">
            <Zap size={14} />
            Planes y precios
          </div>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, letterSpacing: "-1.5px", marginBottom: 16 }}>
            Elige el plan <span className="gradient-text">perfecto</span>
          </h2>
          <p style={{ fontSize: 17, color: "var(--text-muted)", marginBottom: 36 }}>
            Sin contratos. Cancela cuando quieras.
          </p>

          {/* Toggle */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12, background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 100, padding: "6px 20px" }}>
            <span style={{ fontSize: 14, color: yearly ? "var(--text-muted)" : "var(--text)", fontWeight: 500 }}>Mensual</span>
            <button
              onClick={() => setYearly(!yearly)}
              style={{
                width: 44, height: 24, borderRadius: 100,
                background: yearly ? "linear-gradient(135deg,#4f6ef7,#7c3aed)" : "var(--bg-card2)",
                border: "none", cursor: "pointer", position: "relative", transition: "background 0.3s",
              }}
            >
              <div style={{
                width: 18, height: 18, borderRadius: "50%", background: "white",
                position: "absolute", top: 3, left: yearly ? 23 : 3, transition: "left 0.3s",
              }} />
            </button>
            <span style={{ fontSize: 14, color: yearly ? "var(--text)" : "var(--text-muted)", fontWeight: 500 }}>
              Anual
              <span style={{
                marginLeft: 8, background: "rgba(34,197,94,0.15)", color: "#22c55e",
                padding: "2px 8px", borderRadius: 100, fontSize: 11, fontWeight: 700,
              }}>-20%</span>
            </span>
          </div>
        </div>

        {/* Plans grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
          {plans.map((plan) => {
            const Icon = plan.icon;
            const price = yearly ? plan.priceYearly : plan.priceMonthly;
            const isEditing = editing === plan.id;
            return (
              <div
                key={plan.id}
                className="card"
                style={{
                  padding: 32,
                  position: "relative",
                  border: plan.highlighted ? "2px solid rgba(168,85,247,0.5)" : undefined,
                  background: plan.highlighted ? "rgba(168,85,247,0.04)" : undefined,
                }}
              >
                {plan.highlighted && (
                  <div style={{
                    position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)",
                    background: "linear-gradient(135deg,#4f6ef7,#a855f7)",
                    color: "white", padding: "4px 16px", borderRadius: 100, fontSize: 12, fontWeight: 700,
                    whiteSpace: "nowrap",
                  }}>
                    Más popular
                  </div>
                )}

                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: `${plan.color}20`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Icon size={20} color={plan.color} />
                  </div>
                  <span style={{ fontSize: 20, fontWeight: 700 }}>{plan.name}</span>
                </div>

                <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 24, lineHeight: 1.5 }}>
                  {plan.description}
                </p>

                {/* Price */}
                {isEditing ? (
                  <div style={{ marginBottom: 24 }}>
                    <label style={{ fontSize: 12, color: "var(--text-muted)", display: "block", marginBottom: 4 }}>
                      Precio mensual (COP)
                    </label>
                    <input
                      type="number"
                      defaultValue={plan.priceMonthly}
                      onBlur={(e) => {
                        const m = parseInt(e.target.value) || plan.priceMonthly;
                        updatePrice(plan.id, m, Math.round(m * 0.8));
                        setEditing(null);
                      }}
                      autoFocus
                      style={{ marginBottom: 8 }}
                    />
                    <p style={{ fontSize: 11, color: "var(--text-muted)" }}>
                      Precio anual se calculará automáticamente (-20%)
                    </p>
                  </div>
                ) : (
                  <div
                    style={{ marginBottom: 24, cursor: "pointer" }}
                    title="Haz clic para editar el precio"
                    onClick={() => setEditing(plan.id)}
                  >
                    <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                      <span style={{ fontSize: 38, fontWeight: 800, color: plan.color }}>
                        {formatPrice(price)}
                      </span>
                    </div>
                    <span style={{ fontSize: 13, color: "var(--text-muted)" }}>/ mes {yearly ? "(pago anual)" : ""}</span>
                    <div style={{
                      display: "inline-block", marginLeft: 8,
                      fontSize: 11, color: "var(--text-muted)",
                      background: "var(--bg-card2)", borderRadius: 4, padding: "2px 6px",
                    }}>
                      ✏️ editar
                    </div>
                  </div>
                )}

                {/* Features */}
                <ul style={{ listStyle: "none", marginBottom: 28, display: "flex", flexDirection: "column", gap: 10 }}>
                  {plan.features.map(f => (
                    <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14 }}>
                      <Check size={16} color="#22c55e" style={{ marginTop: 1, flexShrink: 0 }} />
                      <span style={{ color: "var(--text-muted)" }}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contacto"
                  className={plan.highlighted ? "btn-primary" : "btn-secondary"}
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  {plan.cta}
                </a>
              </div>
            );
          })}
        </div>

        <p style={{ textAlign: "center", marginTop: 32, fontSize: 13, color: "var(--text-muted)" }}>
          * Todos los precios incluyen IVA. Puedes editar los precios haciendo clic en ellos.
        </p>
      </div>
    </section>
  );
}
