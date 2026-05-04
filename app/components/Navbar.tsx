"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Características", href: "#servicios" },
    { label: "Capturas", href: "#capturas" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "rgba(13,15,24,0.9)", backdropFilter: "blur(16px)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          {/* Logo — matches the real app icon */}
          <a href="#" style={{ display: "flex", alignItems: "center", gap: 11, textDecoration: "none" }}>
            <div style={{
              width: 38, height: 38, borderRadius: 11,
              background: "#3b82f6",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 0 0 2px rgba(59,130,246,0.25)",
            }}>
              <div style={{
                width: 20, height: 20, borderRadius: 5,
                background: "rgba(255,255,255,0.95)",
              }} />
            </div>
            <span style={{ fontSize: 19, fontWeight: 700, color: "#e8eaf6", letterSpacing: "-0.3px" }}>
              System<span style={{ color: "#3b82f6" }}>POS</span>
            </span>
          </a>

          <div style={{ display: "flex", gap: 30, alignItems: "center" }} className="desktop-nav">
            {links.map(l => <a key={l.href} href={l.href} className="nav-link">{l.label}</a>)}
            <a href="#contacto" className="btn-primary" style={{ padding: "9px 20px", fontSize: 13 }}>
              Solicitar Demo
            </a>
          </div>

          <button onClick={() => setOpen(!open)}
            style={{ background: "none", border: "none", color: "#e8eaf6", cursor: "pointer", display: "none" }}
            className="mobile-menu-btn">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div style={{ padding: "14px 0 20px", borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", flexDirection: "column", gap: 14 }}>
            {links.map(l => <a key={l.href} href={l.href} className="nav-link" style={{ fontSize: 15 }} onClick={() => setOpen(false)}>{l.label}</a>)}
            <a href="#contacto" className="btn-primary" style={{ justifyContent: "center" }} onClick={() => setOpen(false)}>Solicitar Demo</a>
          </div>
        )}
      </div>
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
