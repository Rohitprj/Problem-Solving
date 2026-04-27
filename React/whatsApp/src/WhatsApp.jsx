// import React from "react";
// import { RxCross2 } from "react-icons/rx";

// export default function WhatsApp({ setShow }) {
//   const close = () => setShow(false);
//   return (
//     <div className="flex flex-row justify-between bg-cyan-300 h-1/2 w-2xs p-4 rounded-2xl absolute">
//       <p>WhatsApp</p>
//       <button onClick={close} className="h-8 w-4">
//         <RxCross2 />
//       </button>
//     </div>
//   );
// }

import React, { useState, useEffect, useRef } from "react";
import { RxCross2 } from "react-icons/rx";

// ─── Predefined conversation flows ───────────────────────────────────────────
const flows = {
  start: {
    bot: "👋 Hi there! Welcome to Support. How can I help you today?",
    options: [
      { label: "🛒 Order Status", next: "order" },
      { label: "💳 Payment Issues", next: "payment" },
      { label: "🔁 Returns & Refunds", next: "returns" },
      { label: "📦 Shipping Info", next: "shipping" },
      { label: "💬 Talk to an Agent", next: "agent" },
    ],
  },
  order: {
    bot: "I can help with your order! What do you need?",
    options: [
      { label: "📍 Track my order", next: "track" },
      { label: "❌ Cancel my order", next: "cancel" },
      { label: "🔙 Go back", next: "start" },
    ],
  },
  track: {
    bot: "Please share your order number (e.g. #ORD-12345) and I'll look it up right away!",
    options: [{ label: "🔙 Back to menu", next: "start" }],
  },
  cancel: {
    bot: "Orders can be cancelled within 24 hours of placing them. To cancel, please email us at support@store.com with your order number.",
    options: [
      { label: "📧 Got it!", next: "done" },
      { label: "🔙 Back to menu", next: "start" },
    ],
  },
  payment: {
    bot: "Sorry to hear you're having payment trouble! What's the issue?",
    options: [
      { label: "💸 Payment declined", next: "declined" },
      { label: "🧾 Billing question", next: "billing" },
      { label: "🔙 Go back", next: "start" },
    ],
  },
  declined: {
    bot: "Payment declines are often due to incorrect card details or bank blocks. Please double-check your card info or contact your bank. Still stuck? We're here to help!",
    options: [
      { label: "✅ Thanks!", next: "done" },
      { label: "🔙 Back to menu", next: "start" },
    ],
  },
  billing: {
    bot: "For billing questions, our finance team can assist. Please email billing@store.com with your account email and order number.",
    options: [
      { label: "📧 Got it!", next: "done" },
      { label: "🔙 Back to menu", next: "start" },
    ],
  },
  returns: {
    bot: "We offer hassle-free returns within 30 days! What do you need?",
    options: [
      { label: "🔄 Start a return", next: "startReturn" },
      { label: "💵 Refund status", next: "refundStatus" },
      { label: "🔙 Go back", next: "start" },
    ],
  },
  startReturn: {
    bot: "To start a return: visit your Orders page, select the item, and click 'Return'. You'll receive a prepaid label via email within 24 hours.",
    options: [
      { label: "✅ Got it!", next: "done" },
      { label: "🔙 Back to menu", next: "start" },
    ],
  },
  refundStatus: {
    bot: "Refunds are processed within 5–7 business days after we receive your return. You'll get an email confirmation when it's done!",
    options: [
      { label: "✅ Thanks!", next: "done" },
      { label: "🔙 Back to menu", next: "start" },
    ],
  },
  shipping: {
    bot: "Here's our shipping info:\n\n📦 Standard: 5–7 days (Free over ₹999)\n🚀 Express: 2–3 days (₹149)\n⚡ Same-day: Available in select cities",
    options: [
      { label: "✅ Got it!", next: "done" },
      { label: "🔙 Back to menu", next: "start" },
    ],
  },
  agent: {
    bot: "Connecting you to a live agent... Our team is available Mon–Sat, 9am–6pm IST. Average wait time: ~3 minutes.",
    options: [
      { label: "📞 Call: 1800-XXX-XXXX", next: "done" },
      { label: "🔙 Back to menu", next: "start" },
    ],
  },
  done: {
    bot: "Is there anything else I can help you with? 😊",
    options: [
      { label: "🏠 Back to main menu", next: "start" },
      { label: "👋 No, that's all!", next: "bye" },
    ],
  },
  bye: {
    bot: "Thanks for reaching out! Have a great day! 😊",
    options: [],
  },
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
function getTime() {
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

// ─── Sub-components ───────────────────────────────────────────────────────────
function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-3 py-2 bg-white rounded-tr-xl rounded-b-xl self-start shadow-sm w-fit">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="block w-2 h-2 rounded-full bg-gray-400"
          style={{ animation: `bounce 1.2s infinite ${i * 0.2}s` }}
        />
      ))}
    </div>
  );
}

function Bubble({ text, type, time }) {
  const isBot = type === "bot";
  return (
    <div className={`flex flex-col ${isBot ? "items-start" : "items-end"}`}>
      <div
        className={`max-w-[82%] px-3 py-2 text-sm leading-relaxed shadow-sm whitespace-pre-line ${
          isBot
            ? "bg-white text-gray-900 rounded-tr-xl rounded-b-xl"
            : "text-gray-900 rounded-tl-xl rounded-b-xl"
        }`}
        style={!isBot ? { background: "#DCF8C6" } : {}}
      >
        {text}
        <div
          className={`text-[10px] mt-1 ${isBot ? "text-gray-400" : "text-gray-500 text-right"}`}
        >
          {time}
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function WhatsApp({ setShow }) {
  const [messages, setMessages] = useState([]);
  const [options, setOptions] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const bodyRef = useRef(null);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages, isTyping, options]);

  // Kick off with the start flow on mount
  useEffect(() => {
    gotoStep("start");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function addMessage(text, type) {
    setMessages((prev) => [
      ...prev,
      { text, type, time: getTime(), id: Date.now() + Math.random() },
    ]);
  }

  function gotoStep(key) {
    const step = flows[key];
    if (!step) return;
    setOptions([]);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      addMessage(step.bot, "bot");
      setTimeout(() => setOptions(step.options || []), 200);
    }, 900);
  }

  function handleOption(opt) {
    addMessage(opt.label, "user");
    setOptions([]);
    gotoStep(opt.next);
  }

  function handleSend() {
    const val = inputVal.trim();
    if (!val) return;
    addMessage(val, "user");
    setInputVal("");
    setOptions([]);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      addMessage(
        "Thanks for your message! Let me connect you with our team, or choose an option below.",
        "bot",
      );
      setTimeout(() => setOptions(flows.start.options), 200);
    }, 1000);
  }

  return (
    <>
      {/* Bounce animation keyframes */}
      <style>{`
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-5px); }
        }
        .wa-fade { animation: waFade 0.2s ease; }
        @keyframes waFade {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Chat window */}
      <div
        className="fixed bottom-24 right-6 w-80 rounded-2xl overflow-hidden flex flex-col z-50"
        style={{
          maxHeight: "520px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.22)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center gap-3 px-4 py-3"
          style={{ background: "#075E54" }}
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: "#128C7E" }}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-white font-semibold text-sm leading-tight">
              Support Agent
            </p>
            <p className="text-green-300 text-xs">● Online</p>
          </div>
          <button
            onClick={() => setShow(false)}
            className="text-white/60 hover:text-white hover:bg-white/10 rounded-full w-7 h-7 flex items-center justify-center transition-colors"
          >
            <RxCross2 size={16} />
          </button>
        </div>

        {/* Chat body */}
        <div
          ref={bodyRef}
          className="flex-1 overflow-y-auto flex flex-col gap-2 p-3"
          style={{
            background: "#ECE5DD",
            minHeight: "260px",
            maxHeight: "340px",
          }}
        >
          {messages.map((msg) => (
            <div key={msg.id} className="wa-fade">
              <Bubble text={msg.text} type={msg.type} time={msg.time} />
            </div>
          ))}
          {isTyping && (
            <div className="wa-fade">
              <TypingIndicator />
            </div>
          )}
        </div>

        {/* Option buttons */}
        {options.length > 0 && (
          <div
            className="flex flex-col gap-2 px-3 py-2"
            style={{ background: "#ECE5DD" }}
          >
            {options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleOption(opt)}
                className="text-left text-sm font-medium px-4 py-2 rounded-full border transition-colors"
                style={{
                  background: "white",
                  borderColor: "#25D366",
                  color: "#075E54",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#25D366";
                  e.currentTarget.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "white";
                  e.currentTarget.style.color = "#075E54";
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}

        {/* Footer / input */}
        <div
          className="flex items-center gap-2 px-3 py-2 border-t"
          style={{ background: "#F0F0F0", borderColor: "#ddd" }}
        >
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type a message…"
            className="flex-1 rounded-full px-4 py-2 text-sm outline-none border-none bg-white text-gray-900 placeholder-gray-400"
          />
          <button
            onClick={handleSend}
            className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-colors"
            style={{ background: "#25D366" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#1ebe5d")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#25D366")}
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
