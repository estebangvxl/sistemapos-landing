import {
  ShoppingCart, Package, BarChart3, CreditCard,
  Users, Tag, Upload, MapPin, Building2
} from "lucide-react";

const services = [
  {
    icon: ShoppingCart, color: "#3b82f6", bg: "rgba(59,130,246,0.1)",
    title: "Módulo de Ventas",
    description: "Catálogo visual de productos, carrito en tiempo real y cobro rápido. Ideal para puntos de alta rotación.",
  },
  {
    icon: Package, color: "#22c55e", bg: "rgba(34,197,94,0.1)",
    title: "Inventario completo",
    description: "Gestión por barcode, categoría y ubicación. Visualiza stock disponible y edita o elimina productos al instante.",
  },
  {
    icon: BarChart3, color: "#f59e0b", bg: "rgba(245,158,11,0.1)",
    title: "Reportes y ganancias",
    description: "Total ventas, ganancias, ticket promedio y historial filtrable por fecha. Exporta y comparte en segundos.",
  },
  {
    icon: CreditCard, color: "#ec4899", bg: "rgba(236,72,153,0.1)",
    title: "Múltiples métodos de pago",
    description: "Efectivo con cálculo de cambio automático, transferencia y pago parcial. Registro de observaciones por venta.",
  },
  {
    icon: Tag, color: "#8b5cf6", bg: "rgba(139,92,246,0.1)",
    title: "Gestión de precios",
    description: "Edita el precio de cualquier producto directamente desde el inventario. Control total sin complicaciones.",
  },
  {
    icon: Users, color: "#06b6d4", bg: "rgba(6,182,212,0.1)",
    title: "Gestión de usuarios",
    description: "Crea vendedores con roles y credenciales. El historial de ventas queda asociado a cada usuario.",
  },
  {
    icon: Upload, color: "#f97316", bg: "rgba(249,115,22,0.1)",
    title: "Importación masiva",
    description: "Carga cientos de productos de una vez desde un archivo. Perfecto para farmacias y supermercados.",
  },
  {
    icon: MapPin, color: "#14b8a6", bg: "rgba(20,184,166,0.1)",
    title: "Ubicaciones y categorías",
    description: "Organiza tu inventario por estante, bodega o zona. Filtra por categoría en segundos durante la venta.",
  },
  {
    icon: Building2, color: "#6366f1", bg: "rgba(99,102,241,0.1)",
    title: "Configuración del negocio",
    description: "Personaliza nombre, logo, datos fiscales y la información que aparece en los recibos impresos.",
  },
];

export default function Services() {
  return (
    <section id="servicios" style={{ padding: "100px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 60 }}>
        <div className="section-tag">
          <Package size={12} />
          Todo incluido desde el primer día
        </div>
        <h2 style={{ fontSize: "clamp(30px, 5vw, 50px)", fontWeight: 800, letterSpacing: "-1.5px", marginBottom: 14 }}>
          Módulos del <span className="gradient-text">sistema</span>
        </h2>
        <p style={{ fontSize: 17, color: "var(--text-muted)", maxWidth: 520, margin: "0 auto" }}>
          Cada función fue diseñada para agilizar tu operación diaria sin curvas de aprendizaje.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: 18 }}>
        {services.map(s => {
          const Icon = s.icon;
          return (
            <div key={s.title} className="card" style={{ padding: 26 }}>
              <div style={{
                width: 44, height: 44, borderRadius: 11,
                background: s.bg, display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 16,
              }}>
                <Icon size={20} color={s.color} />
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{s.title}</h3>
              <p style={{ fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.65 }}>{s.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
