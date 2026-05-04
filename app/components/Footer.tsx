export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "44px 24px", marginTop: 40 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 32, height: 32, borderRadius: 9, background: "#3b82f6",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <div style={{ width: 16, height: 16, borderRadius: 4, background: "rgba(255,255,255,0.95)" }} />
            </div>
            <span style={{ fontSize: 17, fontWeight: 700, color: "#e8eaf6" }}>
              System<span style={{ color: "#3b82f6" }}>POS</span>
            </span>
          </div>
          <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
            {["Características", "Capturas", "Contacto"].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="nav-link" style={{ fontSize: 13 }}>{l}</a>
            ))}
          </div>
          <div style={{ fontSize: 13, color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} SystemPOS. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
