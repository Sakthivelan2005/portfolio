import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const INITIAL_TIME = 5;
const MAX_TIME = 30;

const WarningPopup = () => {
  const [show, setShow] = useState(true);
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);
  const [totalTime, setTotalTime] = useState(INITIAL_TIME);

  // Countdown logic
  useEffect(() => {
    if (!show) return;

    const countdown = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(countdown);
          setShow(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [show]);

  // ➕ Add 5 seconds (max 30)
  const addTime = () => {
    setTimeLeft((prev) => {
      const updated = prev + 5;
      return updated > MAX_TIME ? MAX_TIME : updated;
    });

    setTotalTime((prev) => {
    const updated = prev + 5;
    return updated > MAX_TIME ? MAX_TIME : updated;
  });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="popup"
          initial={{ opacity: 0, y: -120, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -120, scale: 0.8 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
          style={{
            position: "fixed",
            top: "30px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "350px",
            background: "linear-gradient(135deg, #ff4d4d, #ff1a1a)",
            color: "white",
            padding: "20px",
            borderRadius: "18px",
            boxShadow: "0 15px 40px rgba(0,0,0,0.4)",
            zIndex: 9999,
            overflow: "hidden",
          }}
        >
          <div style={{ fontWeight: 600, fontSize: "16px" }}>
            🚧 Still working on it!
          </div>

          <div style={{ marginTop: "8px", fontSize: "14px", opacity: 0.9 }}>
            Please wait a few days. It will be completed soon.
          </div>

          {/* Countdown + Button */}
          <div
            style={{
              marginTop: "12px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: "13px", opacity: 0.85 }}>
              Closing in {timeLeft}s...
            </span>

            <button
              onClick={addTime}
              disabled={timeLeft >= MAX_TIME}
              style={{
                padding: "4px 10px",
                fontSize: "12px",
                borderRadius: "12px",
                border: "none",
                cursor: timeLeft >= MAX_TIME ? "not-allowed" : "pointer",
                background: "#fff",
                color: "#ff1a1a",
                fontWeight: 600,
                opacity: timeLeft >= MAX_TIME ? 0.6 : 1,
              }}
            >
              +5s
            </button>
          </div>

          {/* Dynamic Progress Bar */}
          <motion.div
            key={timeLeft} // restart animation when time increases
            initial={{ width: `${(timeLeft / totalTime) * 100}%` }}
            animate={{ width: "0%" }}
            transition={{ duration: timeLeft, ease: "linear" }}
            style={{
              height: "4px",
              background: "#fff",
              borderRadius: "2px",
              marginTop: "10px",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WarningPopup;