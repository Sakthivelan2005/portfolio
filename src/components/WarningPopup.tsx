import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TOTAL_TIME = 5; // seconds

const WarningPopup = () => {
  const [show, setShow] = useState(true);
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);

  useEffect(() => {
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
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -120, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -120, scale: 0.8 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
          style={{
            position: "fixed",
            top: "30px",
            right: "30px",
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

          {/* Countdown Text */}
          <div
            style={{
              marginTop: "10px",
              fontSize: "13px",
              textAlign: "right",
              opacity: 0.8,
            }}
          >
            Closing in {timeLeft}s...
          </div>

          {/* Animated Progress Bar */}
          <motion.div
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: TOTAL_TIME, ease: "linear" }}
            style={{
              height: "4px",
              background: "#fff",
              borderRadius: "2px",
              marginTop: "8px",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WarningPopup;
