"use client";
import { useState, useEffect } from "react";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Kp.+Nungku+Rt.13+Rw.05+Desa+Cilangkap+Lengkong+Sukabumi";

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setShowContent(true), 600);
    } else {
      setShowContent(false);
    }
  }, [isOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Cinzel:wght@400;500&display=swap');

        :root {
          --navy: #1a2744;
          --navy-light: #243366;
          --cream: #f5eedd;
          --cream-dark: #e8d8bc;
          --gold: #c8a96e;
          --gold-light: #dfc08a;
          --rose: #c97b8a;
          --white: #fffdf7;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: var(--cream);
          font-family: 'Cormorant Garamond', Georgia, serif;
          min-height: 100vh;
        }

        .page-bg {
          min-height: 100vh;
          background:
            radial-gradient(ellipse at 10% 10%, rgba(26,39,68,0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 90% 90%, rgba(200,169,110,0.10) 0%, transparent 50%),
            linear-gradient(160deg, #f7edd8 0%, #f0e4c8 40%, #e8d8bc 100%);
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* ─── COVER CARD ─── */
        .cover-card {
          width: 100%;
          max-width: 420px;
          background: var(--navy);
          border-radius: 24px;
          overflow: hidden;
          box-shadow:
            0 30px 80px rgba(26,39,68,0.35),
            0 0 0 1px rgba(200,169,110,0.3);
          position: relative;
        }

        .cover-top {
          background: var(--cream);
          padding: 0 0 0 0;
          position: relative;
          min-height: 360px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Ornamental corner lines */
        .corner-ornament {
          position: absolute;
          width: 60px;
          height: 60px;
        }
        .corner-ornament.tl { top: 8px; left: 8px; }
        .corner-ornament.tr { top: 8px; right: 8px; transform: scaleX(-1); }
        .corner-ornament.bl { bottom: 8px; left: 8px; transform: scaleY(-1); }
        .corner-ornament.br { bottom: 8px; right: 8px; transform: scale(-1); }

        .corner-ornament svg { width: 100%; height: 100%; }

        /* Lace border strip at top of cream area */
        .lace-top {
          width: 100%;
          height: 18px;
          background: var(--navy);
          position: relative;
          margin-bottom: 0;
        }
        .lace-top::after {
          content: '';
          position: absolute;
          bottom: -12px;
          left: 0; right: 0;
          height: 24px;
          background: var(--navy);
          clip-path: polygon(
            0% 0%, 2% 100%, 4% 0%, 6% 100%, 8% 0%, 10% 100%, 12% 0%, 14% 100%, 16% 0%,
            18% 100%, 20% 0%, 22% 100%, 24% 0%, 26% 100%, 28% 0%, 30% 100%, 32% 0%,
            34% 100%, 36% 0%, 38% 100%, 40% 0%, 42% 100%, 44% 0%, 46% 100%, 48% 0%,
            50% 100%, 52% 0%, 54% 100%, 56% 0%, 58% 100%, 60% 0%, 62% 100%, 64% 0%,
            66% 100%, 68% 0%, 70% 100%, 72% 0%, 74% 100%, 76% 0%, 78% 100%, 80% 0%,
            82% 100%, 84% 0%, 86% 100%, 88% 0%, 90% 100%, 92% 0%, 94% 100%, 96% 0%,
            98% 100%, 100% 0%
          );
        }

        .wedding-of-label {
          font-family: 'Cinzel', serif;
          font-size: 10px;
          letter-spacing: 0.4em;
          color: var(--navy);
          text-transform: uppercase;
          margin-top: 36px;
          margin-bottom: 16px;
        }

        /* Oval portrait frames */
        .portraits-row {
          display: flex;
          gap: 16px;
          justify-content: center;
          margin-bottom: 12px;
        }

        .portrait-frame {
          width: 90px;
          height: 110px;
          border-radius: 50% / 55%;
          border: 3px solid var(--navy);
          background: linear-gradient(135deg, #e8d8bc, #d4c4a0);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(26,39,68,0.18);
        }

        .portrait-frame::before {
          content: '';
          position: absolute;
          inset: 4px;
          border-radius: 50% / 55%;
          border: 1px solid rgba(26,39,68,0.3);
        }

        .portrait-emoji {
          font-size: 48px;
          line-height: 1;
          margin-top: 8px;
        }

        .couple-name {
          font-family: 'Great Vibes', cursive;
          font-size: 40px;
          color: var(--navy);
          text-align: center;
          line-height: 1.1;
          margin: 4px 0 6px;
          padding: 0 16px;
        }

        .cover-date {
          font-family: 'Cinzel', serif;
          font-size: 11px;
          letter-spacing: 0.2em;
          color: var(--navy);
          margin-bottom: 10px;
        }

        .kepada-label {
          font-family: 'Cinzel', serif;
          font-size: 9px;
          letter-spacing: 0.3em;
          color: #888;
          text-transform: uppercase;
          margin-bottom: 4px;
        }

        .guest-box {
          width: 72%;
          height: 50px;
          border: 1.5px dashed var(--navy);
          border-radius: 8px;
          margin-bottom: 10px;
          background: rgba(26,39,68,0.03);
        }

        .sorry-note {
          font-size: 9px;
          color: #999;
          font-style: italic;
          margin-bottom: 12px;
          text-align: center;
          padding: 0 20px;
        }

        /* Floral decoration */
        .flowers-top {
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 52px;
          pointer-events: none;
          filter: saturate(0.85);
          white-space: nowrap;
        }

        .flowers-corner-l {
          position: absolute;
          bottom: 30px;
          left: -10px;
          font-size: 44px;
          transform: rotate(15deg);
          pointer-events: none;
        }
        .flowers-corner-r {
          position: absolute;
          bottom: 30px;
          right: -10px;
          font-size: 44px;
          transform: rotate(-15deg) scaleX(-1);
          pointer-events: none;
        }

        /* Cover bottom (navy section) */
        .cover-bottom {
          background: var(--navy);
          padding: 20px 28px 28px;
          position: relative;
        }

        .lace-bottom-stripe {
          width: 100%;
          height: 16px;
          background: var(--cream);
          clip-path: polygon(
            0% 100%, 2% 0%, 4% 100%, 6% 0%, 8% 100%, 10% 0%, 12% 100%, 14% 0%, 16% 100%,
            18% 0%, 20% 100%, 22% 0%, 24% 100%, 26% 0%, 28% 100%, 30% 0%, 32% 100%, 34% 0%,
            36% 100%, 38% 0%, 40% 100%, 42% 0%, 44% 100%, 46% 0%, 48% 100%, 50% 0%,
            52% 100%, 54% 0%, 56% 100%, 58% 0%, 60% 100%, 62% 0%, 64% 100%, 66% 0%,
            68% 100%, 70% 0%, 72% 100%, 74% 0%, 76% 100%, 78% 0%, 80% 100%, 82% 0%,
            84% 100%, 86% 0%, 88% 100%, 90% 0%, 92% 100%, 94% 0%, 96% 100%, 98% 0%, 100% 100%
          );
          margin-bottom: 16px;
        }

        .monogram-circle {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: 2px solid var(--gold);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 12px;
          background: rgba(200,169,110,0.1);
        }

        .monogram-text {
          font-family: 'Great Vibes', cursive;
          font-size: 22px;
          color: var(--gold);
        }

        .quran-verse {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 13px;
          line-height: 1.8;
          color: var(--cream-dark);
          text-align: center;
          margin-bottom: 8px;
        }

        .quran-ref {
          font-family: 'Cinzel', serif;
          font-size: 10px;
          color: var(--gold);
          text-align: center;
          letter-spacing: 0.1em;
          margin-bottom: 20px;
        }

        /* ─── OPEN BUTTON ─── */
        .open-btn {
          margin-top: 20px;
          padding: 14px 48px;
          background: linear-gradient(135deg, var(--navy), var(--navy-light));
          color: var(--gold-light);
          border: none;
          border-radius: 50px;
          font-family: 'Cinzel', serif;
          font-size: 13px;
          letter-spacing: 0.25em;
          cursor: pointer;
          box-shadow: 0 8px 32px rgba(26,39,68,0.3);
          transition: all 0.3s ease;
          text-transform: uppercase;
        }
        .open-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(26,39,68,0.4);
          background: linear-gradient(135deg, var(--navy-light), #2e4080);
        }

        /* ─── INNER CONTENT ─── */
        .inner-content {
          width: 100%;
          max-width: 420px;
          margin-top: 20px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease;
        }
        .inner-content.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Bismillah card */
        .bismillah-card {
          background: var(--navy);
          border-radius: 20px;
          padding: 28px 24px;
          text-align: center;
          margin-bottom: 16px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(26,39,68,0.3);
        }

        .bismillah-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
        }

        .bismillah-text {
          font-size: 22px;
          color: var(--gold-light);
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          margin-bottom: 12px;
          line-height: 1.6;
        }

        .invitation-text {
          font-size: 13px;
          color: var(--cream-dark);
          line-height: 1.9;
        }

        /* Bride & groom card */
        .couple-card {
          background: var(--white);
          border-radius: 20px;
          padding: 32px 24px;
          text-align: center;
          margin-bottom: 16px;
          border: 1px solid rgba(200,169,110,0.25);
          box-shadow: 0 10px 40px rgba(26,39,68,0.08);
          position: relative;
        }

        .couple-card::before, .couple-card::after {
          content: '';
          position: absolute;
          left: 24px; right: 24px;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
        }
        .couple-card::before { top: 16px; }
        .couple-card::after { bottom: 16px; }

        .person-label {
          font-family: 'Cinzel', serif;
          font-size: 9px;
          letter-spacing: 0.35em;
          color: var(--gold);
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .person-name {
          font-family: 'Great Vibes', cursive;
          font-size: 36px;
          color: var(--navy);
          line-height: 1.1;
          margin-bottom: 4px;
        }

        .person-parent {
          font-size: 12px;
          color: #888;
          font-style: italic;
          line-height: 1.7;
        }

        .ampersand-divider {
          font-family: 'Great Vibes', cursive;
          font-size: 48px;
          color: var(--gold);
          margin: 12px 0;
          display: block;
        }

        .honor-text {
          font-size: 12.5px;
          color: #666;
          line-height: 1.8;
          margin-top: 16px;
          font-style: italic;
        }

        /* Schedule card */
        .schedule-card {
          background: var(--navy);
          border-radius: 20px;
          overflow: hidden;
          margin-bottom: 16px;
          box-shadow: 0 20px 60px rgba(26,39,68,0.3);
        }

        .schedule-header {
          padding: 20px 24px 16px;
          text-align: center;
          border-bottom: 1px solid rgba(200,169,110,0.2);
        }

        .schedule-title {
          font-family: 'Cinzel', serif;
          font-size: 10px;
          letter-spacing: 0.4em;
          color: var(--gold);
          text-transform: uppercase;
        }

        .schedule-item {
          padding: 18px 28px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .schedule-item-label {
          font-family: 'Cinzel', serif;
          font-size: 11px;
          letter-spacing: 0.15em;
          color: var(--cream);
          font-weight: 500;
        }

        .schedule-item-time {
          font-family: 'Cormorant Garamond', serif;
          font-size: 14px;
          color: var(--gold-light);
          font-style: italic;
        }

        /* Location card */
        .location-card {
          background: var(--white);
          border-radius: 20px;
          overflow: hidden;
          margin-bottom: 16px;
          border: 1px solid rgba(200,169,110,0.25);
          box-shadow: 0 10px 40px rgba(26,39,68,0.08);
        }

        .location-header {
          padding: 24px 24px 16px;
          border-bottom: 1px solid rgba(200,169,110,0.15);
        }

        .location-label {
          font-family: 'Cinzel', serif;
          font-size: 9px;
          letter-spacing: 0.35em;
          color: var(--gold);
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .location-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px;
          font-weight: 500;
          color: var(--navy);
          margin-bottom: 4px;
        }

        .location-address {
          font-size: 13px;
          color: #888;
          line-height: 1.7;
          font-style: italic;
        }

        .maps-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 12px;
          padding: 10px 22px;
          background: var(--navy);
          color: var(--gold-light);
          border-radius: 50px;
          font-family: 'Cinzel', serif;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-decoration: none;
          transition: all 0.3s;
          text-transform: uppercase;
        }
        .maps-btn:hover {
          background: var(--navy-light);
          transform: translateY(-1px);
        }

        .map-embed {
          width: 100%;
          height: 200px;
          border: 0;
          display: block;
          margin-top: 8px;
        }

        /* QR / closing card */
        .closing-card {
          background: var(--navy);
          border-radius: 20px;
          padding: 28px 24px;
          text-align: center;
          margin-bottom: 16px;
          box-shadow: 0 20px 60px rgba(26,39,68,0.3);
        }

        .closing-line {
          font-family: 'Great Vibes', cursive;
          font-size: 20px;
          color: var(--gold-light);
          line-height: 1.8;
          margin-bottom: 12px;
        }

        .closing-sub {
          font-size: 11px;
          color: var(--cream-dark);
          letter-spacing: 0.05em;
          font-style: italic;
        }

        .divider-ornament {
          text-align: center;
          color: var(--gold);
          font-size: 18px;
          margin: 4px 0 12px;
          letter-spacing: 8px;
        }
      `}</style>

      <div className="page-bg">
        {/* ═══ COVER CARD ═══ */}
        <div className="cover-card">
          {/* TOP: cream section */}
          <div className="cover-top">
            {/* Lace header */}
            <div className="lace-top" />

            {/* Corner ornaments */}
            {["tl", "tr", "bl", "br"].map((pos) => (
              <div key={pos} className={`corner-ornament ${pos}`}>
                <svg viewBox="0 0 60 60" fill="none">
                  <path d="M4 4 L4 24 M4 4 L24 4" stroke="#1a2744" strokeWidth="1.5" />
                  <path d="M4 4 L20 20" stroke="#1a2744" strokeWidth="0.8" strokeDasharray="2 3" />
                  <circle cx="4" cy="4" r="2" fill="#c8a96e" />
                  <circle cx="24" cy="4" r="1" fill="#1a2744" />
                  <circle cx="4" cy="24" r="1" fill="#1a2744" />
                </svg>
              </div>
            ))}

            {/* Flowers at top */}
            <div className="flowers-top">🌸🌺🌸</div>

            <p className="wedding-of-label">The Wedding Of</p>

            {/* Portrait frames */}
            <div className="portraits-row">
              <div className="portrait-frame">
                <span className="portrait-emoji">🧕</span>
              </div>
              <div className="portrait-frame">
                <span className="portrait-emoji">🧔</span>
              </div>
            </div>

            <h1 className="couple-name">Nida & Mail</h1>
            <p className="cover-date">05 Juli 2026</p>

            <p className="kepada-label">Kepada Yth Bapak/Ibu</p>
            <div className="guest-box" />
            <p className="sorry-note">Mohon maaf bila ada kesalahan penulisan nama/gelar</p>

            {/* Flower corners */}
            <div className="flowers-corner-l">🌹</div>
            <div className="flowers-corner-r">🌹</div>
          </div>

          {/* BOTTOM: navy section */}
          <div className="cover-bottom">
            <div className="lace-bottom-stripe" />

            <div className="monogram-circle">
              <span className="monogram-text">ND</span>
            </div>

            <p className="quran-verse">
              "Dan di antara tanda-tanda kekuasaan-Nya ialah
              <br />
              Dia menciptakan untukmu pasangan hidup dari
              <br />
              jenismu sendiri."
            </p>
            <p className="quran-ref">(QS Ar-Rum : 21)</p>
          </div>
        </div>

        {/* ═══ OPEN BUTTON ═══ */}
        <button className="open-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✦ Tutup Undangan" : "✦ Buka Undangan"}
        </button>

        {/* ═══ INNER CONTENT ═══ */}
        <div className={`inner-content ${isOpen && showContent ? "visible" : ""}`}>
          {/* Bismillah / Opening */}
          <div className="bismillah-card">
            <p className="bismillah-text">Assalamu'alaikum Warahmatullahi Wabarakatuh</p>
            <div className="divider-ornament">✦ · ✦</div>
            <p className="invitation-text">
              Dengan memohon rahmat dan ridho Allah SWT,
              <br />
              kami bermaksud mengundang Bapak/Ibu/Saudara/Saudari
              <br />
              untuk turut menyaksikan serta memberikan doa restu
              <br />
              dalam acara pernikahan kami.
            </p>
          </div>

          {/* Couple Names */}
          <div className="couple-card">
            <p className="person-label">Mempelai Wanita</p>
            <h2 className="person-name">Nida Winarti</h2>
            <p className="person-parent">
              Putri dari Bapak Endang Sukendar
              <br />& Ibu Sastiawati
            </p>

            <span className="ampersand-divider">&</span>

            <p className="person-label">Mempelai Pria</p>
            <h2 className="person-name">Dede Ismail Darurukmi</h2>
            <p className="person-parent">
              Putra dari Bapak Mukhtar Darurukmi
              <br />& Ibu Euis
            </p>

            <p className="honor-text">
              Merupakan suatu kehormatan dan kebahagiaan
              <br />
              bagi kami atas kehadiran serta doa restu
              <br />
              Bapak/Ibu/Saudara/i, kami ucapkan terima kasih
            </p>
          </div>

          {/* Schedule */}
          <div className="schedule-card">
            <div className="schedule-header">
              <p className="schedule-title">Rangkaian Acara</p>
            </div>

            <div className="schedule-item">
              <div>
                <p className="schedule-item-label">AKAD NIKAH</p>
                <p style={{ fontSize: "11px", color: "#aaa", marginTop: "2px", fontStyle: "italic" }}>Minggu, 05 Juli 2026</p>
              </div>
              <p className="schedule-item-time">09.00 – 10.00 WIB</p>
            </div>

            <div className="schedule-item" style={{ borderBottom: "none" }}>
              <div>
                <p className="schedule-item-label">RESEPSI</p>
                <p style={{ fontSize: "11px", color: "#aaa", marginTop: "2px", fontStyle: "italic" }}>Minggu, 05 Juli 2026</p>
              </div>
              <p className="schedule-item-time">10.00 WIB – Selesai</p>
            </div>
          </div>

          {/* Location */}
          <div className="location-card">
            <div className="location-header">
              <p className="location-label">Bertempat di</p>
              <p className="location-name">Kediaman Mempelai Wanita</p>
              <p className="location-address">
                Kp. Nungku Rt. 13 Rw. 05 Desa Cilangkap
                <br />
                Kec. Lengkong Kab. Sukabumi
              </p>
              <a href={mapsUrl} target="_blank" rel="noreferrer noopener" className="maps-btn">
                📍 Buka Google Maps
              </a>
            </div>
            <iframe
              title="Lokasi Pernikahan"
              src="https://www.google.com/maps?q=Kp.+Nungku+Desa+Cilangkap+Kecamatan+Lengkong+Sukabumi&output=embed"
              className="map-embed"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Closing */}
          <div className="closing-card">
            <p className="closing-line">Wassalamu'alaikum Warahmatullahi Wabarakatuh</p>
            <div className="divider-ornament">✦ · ✦</div>
            <p className="closing-sub">Hormat kami,</p>
            <p style={{ fontFamily: "'Great Vibes', cursive", fontSize: "28px", color: "var(--gold-light)", marginTop: "6px" }}>Nida & Dede</p>
            <p style={{ fontSize: "11px", color: "#aaa", marginTop: "10px", fontStyle: "italic" }}>& Keluarga Besar</p>
          </div>
        </div>
      </div>
    </>
  );
}
