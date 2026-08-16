"use client";
import { useState, useEffect } from "react";
import MusicPlayer from "./components/atoms/musicPlayer";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [shouldPlayMusic, setShouldPlayMusic] = useState(false);
  const [name, setName] = useState("");
  const mapsUrl =
    "https://www.google.com/maps/place/TRI-N+BRILINK/@-7.1062691,106.671375,17z/data=!3m1!4b1!4m6!3m5!1s0x2e6823350cdac9f3:0x1409a4af1156dfc1!8m2!3d-7.1062691!4d106.6739499!16s%2Fg%2F11nx1y1zhb?hl=id-ID&entry=ttu&g_ep=EgoyMDI2MDUxMS4wIKXMDSoASAFQAw%3D%3D";

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setShowContent(true), 600);
    } else {
      setShowContent(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const name = window.location.search.split("to=")[1] || "";
    setName(name);
  }, []);

  const prewedPhotos = ["/img/WhatsApp Image 2026-05-13 at 23.41.46.jpeg", "/img/WhatsApp Image 2026-05-13 at 23.41.47 (1).jpeg", "/img/WhatsApp Image 2026-05-13 at 23.41.47.jpeg"];

  return (
    <>
      <div className="page-bg">
        {/* ═══ COVER CARD ═══ */}
        <div className="cover-card">
          {/* TOP: cream section */}
          <div className="cover-top">
            {/* Lace header */}
            <div className="" />

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

            <p className="wedding-of-label">The Wedding Of</p>
            <MusicPlayer shouldPlayMusic={shouldPlayMusic} />

            {/* Portrait frames */}
            <div className="portraits-row">
              <div className="portrait-card bride">
                <span className="portrait-frame">
                  <img src="/img/first.jpeg" alt="Portrait Nida" className="portrait-img" />
                </span>
              </div>

              <div className="portrait-card groom">
                <span className="portrait-frame">
                  <img src="/img/third.jpeg" alt="Portrait Ismail" className="portrait-img" />
                </span>
              </div>
            </div>

            <h1 className="couple-name">Nida & Ismail</h1>
            <p className="cover-date">17 Agustus 2026</p>

            <p className="kepada-label">Kepada Yth Bapak/Ibu</p>
            <div
              style={{
                width: "72%",
                minHeight: "50px",
                border: "1.5px dashed var(--navy)",
                borderRadius: "8px",
                marginBottom: "10px",
                background: "rgba(26,39,68,0.03)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px 14px",
                textAlign: "center",
                color: "var(--navy)",
                fontSize: "22px",
                fontWeight: 500,
              }}
            >
              {name}
            </div>
            <p className="sorry-note">Mohon maaf bila ada kesalahan penulisan nama/gelar</p>

            {/* Flower corners */}
            {/* <div className="flowers-corner-l">🌹</div>
            <div className="flowers-corner-r">🌹</div> */}
          </div>

          {/* BOTTOM: navy section */}
          <div className="cover-bottom">
            <div className="lace-bottom-stripe" />

            <div className="monogram-circle">
              <span className="monogram-text">NI</span>
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
        <button
          className="open-btn"
          onClick={() => {
            setIsOpen((prev) => !prev);
            setShouldPlayMusic(true);
          }}
        >
          {isOpen ? "✦ Tutup Undangan" : "✦ Buka Undangan"}
        </button>

        {/* ═══ INNER CONTENT ═══ */}
        <div className={`inner-content ${isOpen && showContent ? "visible" : ""}`}>
          {/* Bismillah / Opening */}
          <div className="bismillah-text bismillah-card">
            <p className="">SAVE</p>
            <p className=""> THE</p>
            <p className="">DATE</p>
            {/* <div className="divider-ornament">✦ · ✦</div> */}
            <img src="/img/bg2.svg" alt="Divider" className="img-jaritangan" />
            <p>Nida + Ismail</p>
            <p className="invitation-text">
              “And one of His signs is that He created for you spouses from among yourselves so that you may find comfort in them. And He has placed between you compassion and mercy. Surely in this are signs for people who reflect.”
            </p>
          </div>

          {/* Couple Names */}
          <div className="couple-card">
            <p className="person-label">Together with our family, we invite you to join us in our wedding vows</p>
            <h2 className="bismillah-text">Bride & Groom</h2>
            <img src="/img/WhatsApp Image 2026-05-13 at 23.41.46.jpeg" alt="Divider" className="couple-divider" />
            <h2 className="bismillah-text">Nida Winarti</h2>
            <p className="person-parent">
              The beloved daughter of <br /> Mr Endang Sukendar & Mrs Sastiawati{" "}
            </p>

            <span className="bismillah-text">&</span>

            <h2 className="bismillah-text">Dede Ismail Darurukmi</h2>
            <p className="person-parent">
              The beloved son of <br /> Mr Mukhtar Darurukmi & Mrs Euis{" "}
            </p>
            <p className="honor-text">It is an honor and a pleasure for us to have your presence and blessing. Ladies and gentlemen, we express our gratitude.</p>
          </div>

          {/* Schedule */}
          <div className="schedule-card">
            <div className="schedule-header">
              <img src="/img/WhatsApp Image 2026-05-13 at 23.41.47.jpeg" alt="Divider" className="schedule-divider" />
              <div className="save-date">
                <p className="schedule-label save">SAVE</p>
                <p className="schedule-label the">THE</p>
                <p className="schedule-label date">DATE!</p>
              </div>
              {/* <img src="/img/save-the-date.jpeg" alt="Divider" className="save-date" /> */}
            </div>

            <div className="schedule-item">
              <div>
                <p className="schedule-item-label">AKAD NIKAH</p>
                <p style={{ fontSize: "11px", color: "#333", marginTop: "2px", fontStyle: "italic" }}>Sunday, 17 August 2026</p>
              </div>
              <p className="schedule-item-time">09.00 – 11.00 WIB</p>
            </div>

            <div className="schedule-item" style={{ borderBottom: "none" }}>
              <div>
                <p className="schedule-item-label">RESEPSI</p>
                <p style={{ fontSize: "11px", color: "#333", marginTop: "2px", fontStyle: "italic" }}>Sunday, 17 August 2026</p>
              </div>
              <p className="schedule-item-time">11.00 WIB – Selesai</p>
            </div>
          </div>

          <section className="event-section">
            <div className="calendar-card">
              <div className="calendar-header">
                <div className="day-box">
                  <span className="day-name">Saturday</span>
                  <h1>16</h1>
                </div>

                <div className="day-box active">
                  <span className="day-name">Sunday</span>
                  <h1>17</h1>
                  <p className="dday">D-day!!</p>
                </div>

                <div className="day-box">
                  <span className="day-name">Monday</span>
                  <h1>18</h1>
                </div>
              </div>

              <div className="event-content">
                <h2>Wedding intimate party</h2>

                <div className="event-detail">
                  <p>Sunday, 17 August 2026</p>
                  <p>08.00 WIB</p>

                  <p>
                    Kp. Nungku RT. 13 RW. 05 Desa Cilangkap
                    <br />
                    Kec. Lengkong, Kab. Sukabumi
                  </p>
                </div>

                <a href={mapsUrl} target="_blank" rel="noreferrer noopener" className="location-btn">
                  See Location
                </a>
              </div>
            </div>
          </section>

          {/* Photo Prewedding */}
          <div className="prewed-card">
            <div className="prewed-header">
              <p className="prewed-label">Our Moments</p>
              <h2 className="prewed-title">Photo Prewedding</h2>
              <div className="prewed-divider">✦ ✦ ✦</div>
            </div>

            <div className="prewed-grid ">
              {prewedPhotos.map((src, idx) => (
                <div key={idx} className={`prewed-item ${idx % 2 === 0 ? "float-up" : "float-down"}`}>
                  <div className="prewed-frame">
                    <img src={src} alt={`Prewedding ${idx + 1}`} className="prewed-image" />

                    {/* overlay */}
                    <div className="prewed-overlay" />

                    {/* shine effect */}
                    <div className="shine-effect" />

                    {/* number */}
                    <span className="prewed-number">0{idx + 1}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="prewed-caption">
              “Every love story is beautiful,
              <br />
              but ours is our favorite.”
            </p>
          </div>
          {/* Wedding Gift Section */}
          <div className="gift-card">
            <div className="gift-header">
              <p className="gift-label">
                Wedding <br /> Gift
              </p>
            </div>
            <div className="gift-description">
              <p>Your presence is the most meaningful gift of all. But if you'd like to give something extra, we kindly prefer cash gifts to help us begin our next chapter together.</p>
              <p>If You wish to make a contribution, we've created a Honeymoon Fund to create unforgettable moments our first adventure as married couple.</p>
              <p>Thank You!</p>
            </div>

            {/* BANK ITEM */}
            <div className="bank-item">
              <div className="bank-logo">BCA</div>

              <div className="bank-content">
                <p className="bank-name">Bank Central Asia</p>
                <h3 className="bank-number">0383131437</h3>
                <p className="bank-owner">a.n. Dede Ismail Darurukmi</p>
              </div>

              <button
                className="copy-btn"
                onClick={() => {
                  navigator.clipboard.writeText("0383131437");
                  alert("Nomor rekening berhasil disalin");
                }}
              >
                Salin
              </button>
            </div>

            {/* BANK ITEM */}
            <div className="bank-item">
              <div className="bank-logo">BRI</div>

              <div className="bank-content">
                <p className="bank-name">Bank Rakyat Indonesia</p>
                <h3 className="bank-number">440501014280533</h3>
                <p className="bank-owner">a.n. Nida Winarti </p>
              </div>

              <button
                className="copy-btn"
                onClick={() => {
                  navigator.clipboard.writeText("440501014280533");
                  alert("Nomor rekening berhasil disalin");
                }}
              >
                Salin
              </button>
            </div>

            <a href={"https://wa.me/6287796315921"} target="_blank" rel="noreferrer noopener" className="wa-btn">
              Whatsapp Number
            </a>
          </div>

          {/* Closing */}
          <div className="closing-card">
            <p className="closing-line">Wassalamu'alaikum Warahmatullahi Wabarakatuh</p>
            <div className="divider-ornament">✦ · ✦</div>
            <p className="closing-sub">Hormat kami,</p>
            <p style={{ fontFamily: "'Great Vibes', cursive", fontSize: "28px", color: "var(--navy)", marginTop: "6px" }}>Nida & Ismail</p>
            <p style={{ fontSize: "11px", color: "#aaa", marginTop: "10px", fontStyle: "italic" }}>& Keluarga Besar</p>
          </div>
        </div>
      </div>
    </>
  );
}
