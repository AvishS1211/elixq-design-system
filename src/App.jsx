import { useState } from "react";

const COLORS = {
  therapeia: {
    name: "Therapeia Blue",
    role: "Primary / CTA",
    stops: {
      10: "#E5EFFE", 20: "#C0D6FE", 30: "#8FB5FE", 40: "#5690FE",
      50: "#0F67FE", 60: "#0C54D6", 70: "#0942AB", 80: "#063182",
      90: "#04215A", 100: "#021334"
    }
  },
  panacea: {
    name: "Panacea Teal",
    role: "Health metrics / Vitals",
    stops: {
      10: "#DFFAF8", 20: "#B0F0EC", 30: "#72E2DB", 40: "#3DD4CB",
      50: "#18B8AE", 60: "#0E9990", 70: "#087A73", 80: "#055C57",
      90: "#03403C", 100: "#012522"
    }
  },
  eirene: {
    name: "Eirene Cyan",
    role: "Sleep / Recovery",
    stops: {
      10: "#E0F8FF", 20: "#B5EDFF", 30: "#80DFFF", 40: "#4DCFFF",
      50: "#1ABCF0", 60: "#0D9DD0", 70: "#0880AB", 80: "#056288",
      90: "#034565", 100: "#012B40"
    }
  },
  hygieia: {
    name: "Hygieia Red",
    role: "Alerts / Anomalies",
    stops: {
      10: "#FFF0F2", 20: "#FFD4DA", 30: "#FFB0BB", 40: "#FF8495",
      50: "#FA4D6E", 60: "#E02B4F", 70: "#B81D3C", 80: "#8E142D",
      90: "#650D20", 100: "#3D0713"
    }
  },
  aceso: {
    name: "Aceso Purple",
    role: "AI Buddy / Intelligence",
    stops: {
      10: "#F3EEFF", 20: "#E0D4FF", 30: "#CBB5FF", 40: "#B494FF",
      50: "#9B6FFF", 60: "#8347FC", 70: "#6929C4", 80: "#501D96",
      90: "#38136A", 100: "#210B40"
    }
  },
  helios: {
    name: "Helios Yellow",
    role: "Nutrition / Energy",
    stops: {
      10: "#FFF8E0", 20: "#FFEDAF", 30: "#FFDF70", 40: "#FACF3A",
      50: "#F0B810", 60: "#D49B08", 70: "#AB7C06", 80: "#825E04",
      90: "#5C4203", 100: "#382801"
    }
  },
  zoi: {
    name: "Zoi Green",
    role: "Success / Goals met",
    stops: {
      10: "#EAFBE5", 20: "#CCF2C2", 30: "#A4E394", 40: "#7AD168",
      50: "#55B842", 60: "#3F9A2E", 70: "#2F7C22", 80: "#225E18",
      90: "#174210", 100: "#0C2808"
    }
  },
  asklepios: {
    name: "Asklepios Gray",
    role: "Surfaces / Text / Neutral",
    stops: {
      10: "#F2F3F5", 20: "#DCDEE3", 30: "#B8BCC5", 40: "#959AA8",
      50: "#747A8A", 60: "#585E6E", 70: "#414654", 80: "#2D313C",
      90: "#1A1D26", 100: "#0C0D12"
    }
  }
};

const TYPOGRAPHY = [
  { name: "Display lg", size: "36px", weight: 800, sample: "ElixQ Health" },
  { name: "Display md", size: "30px", weight: 800, sample: "Your health, simplified" },
  { name: "Display sm", size: "24px", weight: 700, sample: "Track everything" },
  { name: "Heading 2xl", size: "22px", weight: 800, sample: "Dashboard" },
  { name: "Heading xl", size: "20px", weight: 700, sample: "Health Score" },
  { name: "Heading lg", size: "18px", weight: 700, sample: "Daily metrics" },
  { name: "Heading md", size: "16px", weight: 700, sample: "Blood report" },
  { name: "Heading sm", size: "14px", weight: 600, sample: "Vitamin D levels" },
  { name: "Text lg", size: "16px", weight: 400, sample: "Your B12 levels have improved by 15% since last month." },
  { name: "Text md", size: "14px", weight: 400, sample: "Upload your latest blood report to get personalized insights." },
  { name: "Text sm", size: "12px", weight: 400, sample: "Last updated 2 hours ago" },
  { name: "Label lg", size: "14px", weight: 600, sample: "UPLOAD REPORT", transform: "uppercase", tracking: "0.08em" },
  { name: "Label sm", size: "11px", weight: 600, sample: "STEPS TODAY", transform: "uppercase", tracking: "0.1em" },
];

const SPACING = [2, 4, 6, 8, 16, 24, 32, 48, 64];

export default function ElixQDesignSystem() {
  const [activeSection, setActiveSection] = useState("overview");
  const [copiedColor, setCopiedColor] = useState(null);

  const copyColor = (hex) => {
    navigator.clipboard?.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 1500);
  };

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "colors", label: "Colors" },
    { id: "typography", label: "Typography" },
    { id: "components", label: "Components" },
    { id: "spacing", label: "Spacing" },
    { id: "tokens", label: "Tokens" },
  ];

  return (
    <div style={{
      background: "#0C0C0E",
      color: "#F2F5F9",
      fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
      minHeight: "100vh",
      padding: "0",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

      {/* Header */}
      <div style={{
        padding: "40px 32px 32px",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
          <div style={{
            width: "40px", height: "40px", borderRadius: "12px",
            background: "linear-gradient(135deg, #0F67FE, #0942AB)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "18px", fontWeight: 800, color: "#fff",
          }}>E</div>
          <div>
            <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", color: "#0F67FE", textTransform: "uppercase" }}>
              Asklepios Design System V1.3
            </div>
          </div>
        </div>
        <h1 style={{ fontSize: "32px", fontWeight: 800, margin: "16px 0 8px", letterSpacing: "-0.02em", color: "#fff" }}>
          ElixQ Health
        </h1>
        <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.5)", margin: 0, lineHeight: 1.5 }}>
          Dark mode design system — adapted for React Native
        </p>
      </div>

      {/* Navigation */}
      <div style={{
        display: "flex", gap: "4px", padding: "16px 32px",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        overflowX: "auto",
      }}>
        {sections.map(s => (
          <button key={s.id} onClick={() => setActiveSection(s.id)} style={{
            padding: "8px 16px", borderRadius: "100px", border: "none",
            background: activeSection === s.id ? "#0F67FE" : "rgba(255,255,255,0.05)",
            color: activeSection === s.id ? "#fff" : "rgba(255,255,255,0.5)",
            fontSize: "13px", fontWeight: 600, cursor: "pointer",
            fontFamily: "inherit", whiteSpace: "nowrap",
            transition: "all 0.2s",
          }}>{s.label}</button>
        ))}
      </div>

      {/* Content */}
      <div style={{ padding: "32px" }}>

        {/* OVERVIEW */}
        {activeSection === "overview" && (
          <div>
            <SectionTitle>Brand overview</SectionTitle>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "32px" }}>
              <InfoCard label="Primary font" value="Plus Jakarta Sans" sub="By Tokotype — geometric sans-serif" />
              <InfoCard label="Mode" value="Dark mode default" sub="Surface: #0C0C0E — Text: #F2F5F9" />
              <InfoCard label="Primary color" value="Therapeia Blue" sub="#0F67FE (50) — CTAs, links, active states" />
              <InfoCard label="Grid" value="375 × 812" sub="Mobile-first — 4-column, 16px gutter" />
              <InfoCard label="Corner radius" value="8px / 12px / 16px" sub="Cards: 16px — Buttons: 12px — Inputs: 8px" />
              <InfoCard label="Spacing base" value="8px" sub="Scale: 2/4/6/8/16/24/32/48/64" />
            </div>

            <SectionTitle>Color roles in dark mode</SectionTitle>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "8px" }}>
              {Object.entries(COLORS).map(([key, c]) => (
                <div key={key} style={{
                  display: "flex", alignItems: "center", gap: "16px",
                  padding: "12px 16px", borderRadius: "12px",
                  background: "rgba(255,255,255,0.03)",
                }}>
                  <div style={{
                    width: "36px", height: "36px", borderRadius: "8px",
                    background: c.stops[50],
                    flexShrink: 0,
                  }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "14px", fontWeight: 700, color: "#fff" }}>{c.name}</div>
                    <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>{c.role}</div>
                  </div>
                  <div style={{ fontSize: "12px", fontFamily: "monospace", color: "rgba(255,255,255,0.3)" }}>
                    {c.stops[50]}
                  </div>
                </div>
              ))}
            </div>

            <SectionTitle style={{ marginTop: "32px" }}>Dark mode surface hierarchy</SectionTitle>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {[
                { name: "Background", hex: "#0C0C0E", desc: "App background" },
                { name: "Surface 1", hex: "#141620", desc: "Cards, sheets" },
                { name: "Surface 2", hex: "#1C1F2E", desc: "Elevated cards" },
                { name: "Surface 3", hex: "#252940", desc: "Inputs, wells" },
                { name: "Border", hex: "rgba(255,255,255,0.08)", desc: "Dividers" },
                { name: "Border active", hex: "rgba(15,103,254,0.4)", desc: "Focused inputs" },
              ].map((s, i) => (
                <div key={i} style={{
                  width: "100px", textAlign: "center",
                }}>
                  <div style={{
                    width: "100px", height: "64px", borderRadius: "12px",
                    background: s.hex,
                    border: "1px solid rgba(255,255,255,0.08)",
                    marginBottom: "8px",
                  }} />
                  <div style={{ fontSize: "12px", fontWeight: 600, color: "#fff" }}>{s.name}</div>
                  <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.35)", marginTop: "2px" }}>{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* COLORS */}
        {activeSection === "colors" && (
          <div>
            <SectionTitle>Color palette — full ramps</SectionTitle>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", marginBottom: "24px" }}>
              Click any swatch to copy its hex value. In dark mode, use stops 10-30 for text on dark surfaces, 40-60 for accents and interactive elements, 70-100 for subtle fills and backgrounds.
            </p>
            {Object.entries(COLORS).map(([key, c]) => (
              <div key={key} style={{ marginBottom: "28px" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "10px" }}>
                  <span style={{ fontSize: "16px", fontWeight: 700, color: "#fff" }}>{c.name}</span>
                  <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)" }}>{c.role}</span>
                </div>
                <div style={{ display: "flex", gap: "6px" }}>
                  {Object.entries(c.stops).map(([stop, hex]) => (
                    <div key={stop} onClick={() => copyColor(hex)} style={{
                      flex: 1, cursor: "pointer", textAlign: "center",
                      transition: "transform 0.15s",
                    }}>
                      <div style={{
                        height: "48px", borderRadius: "8px",
                        background: hex,
                        border: "1px solid rgba(255,255,255,0.06)",
                        marginBottom: "6px",
                        position: "relative",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        {copiedColor === hex && (
                          <span style={{ fontSize: "10px", fontWeight: 700, color: parseInt(stop) < 50 ? "#000" : "#fff" }}>
                            Copied!
                          </span>
                        )}
                      </div>
                      <div style={{ fontSize: "10px", fontWeight: 600, color: "rgba(255,255,255,0.5)" }}>{stop}</div>
                      <div style={{ fontSize: "9px", fontFamily: "monospace", color: "rgba(255,255,255,0.25)", marginTop: "2px" }}>{hex}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TYPOGRAPHY */}
        {activeSection === "typography" && (
          <div>
            <SectionTitle>Typography scale</SectionTitle>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", marginBottom: "24px" }}>
              Plus Jakarta Sans — all weights from Regular (400) to ExtraBold (800)
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {TYPOGRAPHY.map((t, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: "16px",
                  padding: "14px 16px", borderRadius: "12px",
                  background: "rgba(255,255,255,0.02)",
                  borderBottom: "1px solid rgba(255,255,255,0.04)",
                }}>
                  <div style={{ width: "100px", flexShrink: 0 }}>
                    <div style={{ fontSize: "11px", fontWeight: 600, color: "#0F67FE" }}>{t.name}</div>
                    <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", marginTop: "2px" }}>
                      {t.size} / {t.weight}
                    </div>
                  </div>
                  <div style={{
                    fontSize: t.size, fontWeight: t.weight, color: "#fff",
                    textTransform: t.transform || "none",
                    letterSpacing: t.tracking || "normal",
                    lineHeight: 1.3,
                    overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                  }}>
                    {t.sample}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* COMPONENTS */}
        {activeSection === "components" && (
          <div>
            <SectionTitle>Buttons</SectionTitle>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "32px" }}>
              <Btn variant="primary">Get started</Btn>
              <Btn variant="primary" icon>Upload report +</Btn>
              <Btn variant="secondary">Learn more</Btn>
              <Btn variant="secondary" icon>Connect device +</Btn>
              <Btn variant="ghost">Skip for now</Btn>
              <Btn variant="danger">Delete report</Btn>
              <Btn variant="primary" disabled>Processing...</Btn>
            </div>

            <SectionTitle>Cards — dark mode surfaces</SectionTitle>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "32px" }}>
              <MetricCard label="Steps today" value="8,432" unit="/ 10,000" color="#0F67FE" progress={84} />
              <MetricCard label="Sleep" value="7.2" unit="hours" color="#1ABCF0" progress={90} />
              <MetricCard label="Calories" value="1,840" unit="kcal" color="#F0B810" progress={72} />
              <MetricCard label="Water" value="2.1" unit="litres" color="#55B842" progress={66} />
            </div>

            <SectionTitle>Health score card</SectionTitle>
            <div style={{
              background: "#141620", borderRadius: "20px", padding: "24px",
              border: "1px solid rgba(255,255,255,0.06)", marginBottom: "32px",
            }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                <div>
                  <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>Overall health score</div>
                  <div style={{ fontSize: "48px", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1, marginTop: "4px" }}>
                    78<span style={{ fontSize: "20px", color: "rgba(255,255,255,0.3)", fontWeight: 600 }}>/100</span>
                  </div>
                </div>
                <div style={{
                  width: "80px", height: "80px", borderRadius: "50%",
                  border: "4px solid rgba(255,255,255,0.06)",
                  borderTopColor: "#0F67FE", borderRightColor: "#0F67FE", borderBottomColor: "#0F67FE",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "13px", fontWeight: 700, color: "#0F67FE",
                }}>Good</div>
              </div>
              <div style={{ display: "flex", gap: "8px" }}>
                {[
                  { label: "Heart", val: "72 bpm", color: "#FA4D6E" },
                  { label: "BP", val: "120/80", color: "#0F67FE" },
                  { label: "Sleep", val: "7.2h", color: "#1ABCF0" },
                ].map((m, i) => (
                  <div key={i} style={{
                    flex: 1, padding: "10px 12px", borderRadius: "12px",
                    background: "rgba(255,255,255,0.04)",
                  }}>
                    <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>{m.label}</div>
                    <div style={{ fontSize: "16px", fontWeight: 700, color: m.color, marginTop: "4px" }}>{m.val}</div>
                  </div>
                ))}
              </div>
            </div>

            <SectionTitle>Alerts</SectionTitle>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "32px" }}>
              <Alert type="warning" text="Your Vitamin D is below optimal range" />
              <Alert type="success" text="Blood report uploaded successfully" />
              <Alert type="info" text="AI buddy has new insights for you" />
              <Alert type="error" text="Iron levels critically low — consult a doctor" />
            </div>

            <SectionTitle>Input fields</SectionTitle>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "32px" }}>
              <InputField label="Full name" placeholder="Enter your name" />
              <InputField label="Age" placeholder="e.g. 28" />
              <InputField label="Weight" placeholder="in kg" suffix="kg" />
              <InputField label="Height" placeholder="in cm" suffix="cm" />
            </div>

            <SectionTitle>Toggle + radio</SectionTitle>
            <div style={{ display: "flex", gap: "24px", marginBottom: "32px", flexWrap: "wrap" }}>
              <ToggleItem label="Sync Apple Health" defaultChecked />
              <ToggleItem label="AI suggestions" defaultChecked />
              <ToggleItem label="Push notifications" />
            </div>

            <SectionTitle>Chip selectors — health goals</SectionTitle>
            <ChipGroup items={["Lose weight", "Build muscle", "Better sleep", "Reduce stress", "Eat healthier", "Run more"]} />

            <SectionTitle style={{ marginTop: "32px" }}>Tab bar</SectionTitle>
            <TabBarPreview />

            <SectionTitle style={{ marginTop: "32px" }}>Progress indicators</SectionTitle>
            <div style={{ display: "flex", gap: "24px", alignItems: "center", flexWrap: "wrap" }}>
              <ProgressRing value={78} color="#0F67FE" label="Health" />
              <ProgressRing value={84} color="#55B842" label="Steps" />
              <ProgressRing value={65} color="#F0B810" label="Nutrition" />
              <ProgressRing value={90} color="#1ABCF0" label="Sleep" />
            </div>
            <SectionTitle style={{ marginTop: "32px" }}>Icon library — SF Symbols style</SectionTitle>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", marginBottom: "16px" }}>
              24px grid, 1.5px stroke, rounded caps &amp; joins. Use react-native-sfsymbols on iOS, these SVGs as Android fallback.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "8px", marginBottom: "32px" }}>
              {["home","chart","plus","heart","sparkle","warning","check","info","alert","moon","flame","drop","footprint","doc","person","gear","scan","camera","stethoscope","chevronRight","chevronLeft","upload","bell","search"].map(name => (
                <div key={name} style={{
                  display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
                  padding: "14px 8px", borderRadius: "12px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.04)",
                }}>
                  <Icon name={name} size={24} color="rgba(255,255,255,0.7)" />
                  <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.35)", fontFamily: "monospace", textAlign: "center" }}>{name}</div>
                </div>
              ))}
            </div>

            <SectionTitle>Icon sizing</SectionTitle>
            <div style={{ display: "flex", gap: "24px", alignItems: "flex-end", marginBottom: "16px" }}>
              {[16, 20, 24, 28, 32].map(sz => (
                <div key={sz} style={{ textAlign: "center" }}>
                  <div style={{
                    width: "56px", height: "56px", borderRadius: "12px",
                    background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.04)",
                    display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "6px",
                  }}>
                    <Icon name="heart" size={sz} color="rgba(255,255,255,0.6)" />
                  </div>
                  <div style={{ fontSize: "11px", fontFamily: "monospace", color: "rgba(255,255,255,0.35)" }}>{sz}px</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)", marginTop: "8px" }}>
              Tab bar: 22px — Cards: 20px — Inline: 16px — Headers: 24px
            </p>
          </div>
        )}

        {/* SPACING */}
        {activeSection === "spacing" && (
          <div>
            <SectionTitle>Spacing scale</SectionTitle>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", marginBottom: "24px" }}>
              2px increments below 8px, then doubling. Base unit: 8px.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {SPACING.map(s => (
                <div key={s} style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{
                    width: "48px", fontSize: "13px", fontWeight: 600, fontFamily: "monospace",
                    color: "rgba(255,255,255,0.5)", textAlign: "right",
                  }}>{s}px</div>
                  <div style={{
                    width: `${Math.min(s * 3, 400)}px`, height: "24px", borderRadius: "4px",
                    background: `rgba(15, 103, 254, ${0.15 + (s / 64) * 0.5})`,
                  }} />
                </div>
              ))}
            </div>

            <SectionTitle style={{ marginTop: "40px" }}>Grid system</SectionTitle>
            <div style={{
              width: "375px", height: "200px", borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.08)", padding: "16px",
              display: "flex", gap: "16px", background: "rgba(255,255,255,0.02)",
            }}>
              {[1, 2, 3, 4].map(i => (
                <div key={i} style={{
                  flex: 1, background: "rgba(15,103,254,0.08)",
                  borderRadius: "8px", border: "1px dashed rgba(15,103,254,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "11px", color: "rgba(255,255,255,0.3)", fontWeight: 600,
                }}>Col {i}</div>
              ))}
            </div>
            <div style={{ display: "flex", gap: "16px", marginTop: "8px" }}>
              <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)" }}>375px width</span>
              <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)" }}>16px gutter</span>
              <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)" }}>16px margin</span>
            </div>
          </div>
        )}

        {/* TOKENS */}
        {activeSection === "tokens" && (
          <div>
            <SectionTitle>Design tokens — React Native</SectionTitle>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", marginBottom: "24px" }}>
              Copy-paste ready token object for your React Native app.
            </p>
            <div style={{
              background: "#141620", borderRadius: "16px", padding: "24px",
              border: "1px solid rgba(255,255,255,0.06)",
              fontFamily: "'JetBrains Mono', 'SF Mono', monospace",
              fontSize: "12px", lineHeight: 1.8,
              color: "rgba(255,255,255,0.7)",
              overflow: "auto", maxHeight: "600px",
            }}>
              <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
              <pre style={{ margin: 0, whiteSpace: "pre-wrap" }}>{`export const tokens = {
  colors: {
    // Surfaces
    background: '#0C0C0E',
    surface1: '#141620',
    surface2: '#1C1F2E',
    surface3: '#252940',
    
    // Text
    textPrimary: '#F2F5F9',
    textSecondary: 'rgba(255,255,255,0.55)',
    textTertiary: 'rgba(255,255,255,0.35)',
    
    // Borders
    border: 'rgba(255,255,255,0.08)',
    borderActive: 'rgba(15,103,254,0.4)',
    
    // Brand — Therapeia Blue
    primary: '#0F67FE',
    primaryLight: '#8FB5FE',
    primaryDark: '#0942AB',
    
    // Semantic
    teal: '#18B8AE',      // Panacea Teal 50
    cyan: '#1ABCF0',      // Eirene Cyan 50
    red: '#FA4D6E',       // Hygieia Red 50
    yellow: '#F0B810',    // Helios Yellow 50
    green: '#55B842',     // Zoi Green 50
    purple: '#9B6FFF',    // Aceso Purple 50
    
    // Full ramps available via:
    // colors.therapeia[10-100]
    // colors.panacea[10-100]
    // etc.
  },
  
  typography: {
    fontFamily: 'PlusJakartaSans',
    display: { lg: { size: 36, weight: '800' } },
    heading: {
      '2xl': { size: 22, weight: '800' },
      xl:    { size: 20, weight: '700' },
      lg:    { size: 18, weight: '700' },
      md:    { size: 16, weight: '700' },
      sm:    { size: 14, weight: '600' },
    },
    text: {
      lg: { size: 16, weight: '400' },
      md: { size: 14, weight: '400' },
      sm: { size: 12, weight: '400' },
    },
    label: {
      lg: { size: 14, weight: '600', transform: 'uppercase', spacing: 0.08 },
      sm: { size: 11, weight: '600', transform: 'uppercase', spacing: 0.1 },
    },
  },
  
  spacing: {
    xs: 2, sm: 4, md: 8, lg: 16,
    xl: 24, '2xl': 32, '3xl': 48, '4xl': 64,
  },
  
  radius: {
    sm: 8,   // Inputs, small elements
    md: 12,  // Buttons, chips
    lg: 16,  // Cards
    xl: 20,  // Sheets, modals
    full: 9999, // Pills, avatars
  },
  
  grid: {
    width: 375,
    columns: 4,
    gutter: 16,
    margin: 16,
  },
  
  icons: {
    system: 'SF Symbols (iOS) + custom SVG (Android)',
    style: '1.5px stroke, round caps, round joins',
    sizes: { sm: 16, md: 20, tab: 22, lg: 24, xl: 28, xxl: 32 },
  },
};`}</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Icon({ name, size = 22, color = "currentColor", strokeWidth = 1.5 }) {
  const s = { width: size, height: size, display: "block" };
  const p = { fill: "none", stroke: color, strokeWidth, strokeLinecap: "round", strokeLinejoin: "round" };
  const icons = {
    home: <svg style={s} viewBox="0 0 24 24"><path {...p} d="M3 10.5L12 3l9 7.5V20a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 20V10.5z"/><path {...p} d="M9 21.5V14h6v7.5"/></svg>,
    chart: <svg style={s} viewBox="0 0 24 24"><path {...p} d="M4 20h16"/><path {...p} d="M4 20V10l4-4 4 5 4-7 4 6v10"/></svg>,
    plus: <svg style={s} viewBox="0 0 24 24"><path {...p} d="M12 5v14M5 12h14"/></svg>,
    heart: <svg style={s} viewBox="0 0 24 24"><path {...p} d="M12 7.7C10.5 4.5 5 4 5 9c0 5 7 9 7 9s7-4 7-9c0-5-5.5-4.5-7-1.3z"/></svg>,
    sparkle: <svg style={s} viewBox="0 0 24 24"><path {...p} d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>,
    warning: <svg style={s} viewBox="0 0 24 24"><path {...p} d="M12 9v4M12 17h.01"/><path {...p} d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></svg>,
    check: <svg style={s} viewBox="0 0 24 24"><path {...p} d="M5 12l5 5L20 7"/></svg>,
    info: <svg style={s} viewBox="0 0 24 24"><circle {...p} cx="12" cy="12" r="10"/><path {...p} d="M12 16v-4M12 8h.01"/></svg>,
    alert: <svg style={s} viewBox="0 0 24 24"><circle {...p} cx="12" cy="12" r="10"/><path {...p} d="M12 8v4M12 16h.01"/></svg>,
    moon: <svg style={s} viewBox="0 0 24 24"><path {...p} d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>,
    flame: <svg style={s} viewBox="0 0 24 24"><path {...p} d="M12 22c4-2.5 7-6.5 7-10.5C19 6 15.5 2 12 2S5 6 5 11.5C5 15.5 8 19.5 12 22z"/><path {...p} d="M12 22c-1.5-1-3-3.5-3-6s1.5-4.5 3-5.5c1.5 1 3 3 3 5.5s-1.5 5-3 6z"/></svg>,
    drop: <svg style={s} viewBox="0 0 24 24"><path {...p} d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0L12 2.69z"/></svg>,
    footprint: <svg style={s} viewBox="0 0 24 24"><path {...p} d="M4 16v-2.38C4 11.5 5.34 9.63 7 8.75a4.13 4.13 0 014 0c1.66.88 3 2.75 3 4.87V16"/><ellipse {...p} cx="9" cy="5" rx="3" ry="2.5"/><path {...p} d="M14 20v-1.38c0-2.12 1.34-4 3-4.87a4.13 4.13 0 014 0c1.66.88 3 2.75 3 4.87V20"/><ellipse {...p} cx="18" cy="11" rx="2.5" ry="2"/></svg>,
    doc: <svg style={s} viewBox="0 0 24 24"><path {...p} d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path {...p} d="M14 2v6h6"/><path {...p} d="M8 13h8M8 17h8M8 9h2"/></svg>,
    person: <svg style={s} viewBox="0 0 24 24"><circle {...p} cx="12" cy="7" r="4"/><path {...p} d="M5.5 21a6.5 6.5 0 0113 0"/></svg>,
    gear: <svg style={s} viewBox="0 0 24 24"><circle {...p} cx="12" cy="12" r="3"/><path {...p} d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1.08-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1.08 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9c.26.6.77 1.05 1.41 1.08H21a2 2 0 010 4h-.09c-.63.03-1.14.48-1.41 1.08z"/></svg>,
    scan: <svg style={s} viewBox="0 0 24 24"><path {...p} d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2"/><path {...p} d="M7 12h10"/></svg>,
    camera: <svg style={s} viewBox="0 0 24 24"><path {...p} d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle {...p} cx="12" cy="13" r="4"/></svg>,
    stethoscope: <svg style={s} viewBox="0 0 24 24"><path {...p} d="M4.8 2.3A.3.3 0 005 2H4a2 2 0 00-2 2v5a6 6 0 0012 0V4a2 2 0 00-2-2h-1a.2.2 0 00.3.3"/><path {...p} d="M8 15v1a6 6 0 006 6 6 6 0 006-6v-4"/><circle {...p} cx="20" cy="10" r="2"/></svg>,
    chevronRight: <svg style={s} viewBox="0 0 24 24"><path {...p} d="M9 18l6-6-6-6"/></svg>,
    chevronLeft: <svg style={s} viewBox="0 0 24 24"><path {...p} d="M15 18l-6-6 6-6"/></svg>,
    upload: <svg style={s} viewBox="0 0 24 24"><path {...p} d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><path {...p} d="M17 8l-5-5-5 5M12 3v12"/></svg>,
    bell: <svg style={s} viewBox="0 0 24 24"><path {...p} d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path {...p} d="M13.73 21a2 2 0 01-3.46 0"/></svg>,
    search: <svg style={s} viewBox="0 0 24 24"><circle {...p} cx="11" cy="11" r="8"/><path {...p} d="M21 21l-4.35-4.35"/></svg>,
  };
  return icons[name] || null;
}


  return (
    <h2 style={{
      fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em",
      textTransform: "uppercase", color: "rgba(255,255,255,0.35)",
      margin: "0 0 16px", ...s,
    }}>{children}</h2>
  );


function InfoCard({ label, value, sub }) {
  return (
    <div style={{
      padding: "16px", borderRadius: "16px",
      background: "#141620", border: "1px solid rgba(255,255,255,0.06)",
    }}>
      <div style={{ fontSize: "10px", fontWeight: 600, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{label}</div>
      <div style={{ fontSize: "18px", fontWeight: 800, color: "#fff", marginTop: "6px" }}>{value}</div>
      <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", marginTop: "4px" }}>{sub}</div>
    </div>
  );
}

function Btn({ children, variant = "primary", icon, disabled }) {
  const styles = {
    primary: { background: "#0F67FE", color: "#fff" },
    secondary: { background: "rgba(255,255,255,0.08)", color: "#fff" },
    ghost: { background: "transparent", color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.1)" },
    danger: { background: "rgba(250,77,110,0.15)", color: "#FA4D6E" },
  };
  const s = styles[variant];
  return (
    <button style={{
      ...s, padding: "12px 24px", borderRadius: "12px",
      fontSize: "14px", fontWeight: 600, fontFamily: "inherit",
      border: s.border || "none", cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.4 : 1, transition: "all 0.2s",
    }}>{children}</button>
  );
}

function MetricCard({ label, value, unit, color, progress }) {
  return (
    <div style={{
      background: "#141620", borderRadius: "16px", padding: "16px",
      border: "1px solid rgba(255,255,255,0.06)",
    }}>
      <div style={{ fontSize: "10px", fontWeight: 600, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</div>
      <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginTop: "8px" }}>
        <span style={{ fontSize: "28px", fontWeight: 800, color: "#fff" }}>{value}</span>
        <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)", fontWeight: 500 }}>{unit}</span>
      </div>
      <div style={{ height: "4px", borderRadius: "2px", background: "rgba(255,255,255,0.06)", marginTop: "12px" }}>
        <div style={{ height: "100%", borderRadius: "2px", width: `${progress}%`, background: color, transition: "width 0.5s" }} />
      </div>
    </div>
  );
}

function Alert({ type, text }) {
  const config = {
    warning: { bg: "rgba(240,184,16,0.1)", border: "rgba(240,184,16,0.2)", color: "#F0B810", iconName: "warning" },
    success: { bg: "rgba(85,184,66,0.1)", border: "rgba(85,184,66,0.2)", color: "#55B842", iconName: "check" },
    info: { bg: "rgba(15,103,254,0.1)", border: "rgba(15,103,254,0.2)", color: "#0F67FE", iconName: "info" },
    error: { bg: "rgba(250,77,110,0.1)", border: "rgba(250,77,110,0.2)", color: "#FA4D6E", iconName: "alert" },
  };
  const c = config[type];
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: "12px",
      padding: "14px 16px", borderRadius: "12px",
      background: c.bg, border: `1px solid ${c.border}`,
    }}>
      <div style={{
        width: "28px", height: "28px", borderRadius: "8px",
        background: c.border, display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0,
      }}><Icon name={c.iconName} size={16} color={c.color} strokeWidth={2} /></div>
      <span style={{ fontSize: "13px", fontWeight: 500, color: c.color }}>{text}</span>
    </div>
  );
}

function InputField({ label, placeholder, suffix }) {
  return (
    <div>
      <div style={{ fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.5)", marginBottom: "6px" }}>{label}</div>
      <div style={{
        display: "flex", alignItems: "center",
        padding: "12px 16px", borderRadius: "8px",
        background: "#1C1F2E", border: "1px solid rgba(255,255,255,0.08)",
      }}>
        <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.25)", flex: 1 }}>{placeholder}</span>
        {suffix && <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)", fontWeight: 600 }}>{suffix}</span>}
      </div>
    </div>
  );
}

function ToggleItem({ label, defaultChecked }) {
  const [on, setOn] = useState(!!defaultChecked);
  return (
    <div onClick={() => setOn(!on)} style={{
      display: "flex", alignItems: "center", gap: "10px", cursor: "pointer",
    }}>
      <div style={{
        width: "44px", height: "24px", borderRadius: "12px",
        background: on ? "#0F67FE" : "rgba(255,255,255,0.1)",
        padding: "2px", transition: "background 0.2s",
        display: "flex", alignItems: on ? "center" : "center",
        justifyContent: on ? "flex-end" : "flex-start",
      }}>
        <div style={{
          width: "20px", height: "20px", borderRadius: "10px",
          background: "#fff", transition: "all 0.2s",
        }} />
      </div>
      <span style={{ fontSize: "14px", fontWeight: 500, color: on ? "#fff" : "rgba(255,255,255,0.4)" }}>{label}</span>
    </div>
  );
}

function ChipGroup({ items }) {
  const [selected, setSelected] = useState(new Set(["Lose weight", "Better sleep"]));
  const toggle = (item) => {
    const next = new Set(selected);
    next.has(item) ? next.delete(item) : next.add(item);
    setSelected(next);
  };
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
      {items.map(item => {
        const active = selected.has(item);
        return (
          <button key={item} onClick={() => toggle(item)} style={{
            padding: "10px 18px", borderRadius: "100px",
            background: active ? "rgba(15,103,254,0.15)" : "rgba(255,255,255,0.05)",
            border: `1px solid ${active ? "rgba(15,103,254,0.4)" : "rgba(255,255,255,0.08)"}`,
            color: active ? "#0F67FE" : "rgba(255,255,255,0.4)",
            fontSize: "13px", fontWeight: 600, fontFamily: "inherit",
            cursor: "pointer", transition: "all 0.2s",
          }}>{item}</button>
        );
      })}
    </div>
  );
}

function TabBarPreview() {
  const [active, setActive] = useState(0);
  const tabs = [
    { icon: "home", label: "Home" },
    { icon: "chart", label: "Track" },
    { icon: "plus", label: "", fab: true },
    { icon: "doc", label: "Reports" },
    { icon: "sparkle", label: "AI Buddy" },
  ];
  return (
    <div style={{
      display: "flex", alignItems: "flex-end", justifyContent: "space-around",
      padding: "10px 24px 14px", borderRadius: "20px",
      background: "#141620", border: "1px solid rgba(255,255,255,0.06)",
      width: "375px",
    }}>
      {tabs.map((t, i) => (
        <div key={i} onClick={() => setActive(i)} style={{
          display: "flex", flexDirection: "column", alignItems: "center", gap: "4px",
          cursor: "pointer", minWidth: "48px",
        }}>
          {t.fab ? (
            <div style={{
              width: "48px", height: "48px", borderRadius: "16px",
              background: "#0F67FE", display: "flex", alignItems: "center", justifyContent: "center",
              marginBottom: "-4px", marginTop: "-20px",
            }}><Icon name="plus" size={24} color="#fff" strokeWidth={2} /></div>
          ) : (
            <>
              <Icon name={t.icon} size={22} color={active === i ? "#0F67FE" : "rgba(255,255,255,0.3)"} strokeWidth={active === i ? 1.8 : 1.5} />
              <div style={{
                fontSize: "10px", fontWeight: 600,
                color: active === i ? "#0F67FE" : "rgba(255,255,255,0.3)",
              }}>{t.label}</div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

function ProgressRing({ value, color, label }) {
  const r = 32, c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;
  return (
    <div style={{ textAlign: "center" }}>
      <svg width="80" height="80" viewBox="0 0 80 80">
        <circle cx="40" cy="40" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="6" />
        <circle cx="40" cy="40" r={r} fill="none" stroke={color} strokeWidth="6"
          strokeDasharray={c} strokeDashoffset={offset}
          strokeLinecap="round" transform="rotate(-90 40 40)"
          style={{ transition: "stroke-dashoffset 0.5s" }}
        />
        <text x="40" y="38" textAnchor="middle" dominantBaseline="central"
          fill="#fff" fontSize="16" fontWeight="800" fontFamily="'Plus Jakarta Sans', sans-serif">{value}</text>
        <text x="40" y="52" textAnchor="middle" fill="rgba(255,255,255,0.35)"
          fontSize="8" fontWeight="600" fontFamily="'Plus Jakarta Sans', sans-serif"
          textTransform="uppercase" letterSpacing="0.05em">{label}</text>
      </svg>
    </div>
  );
}
