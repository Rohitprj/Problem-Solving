// import React, { useState } from "react";
// import WhatsApp from "./WhatsApp";

// export default function App() {
//   const [show, setShow] = useState(false);
//   const isShow = () => setShow(!show);
//   return (
//     <div className="flex justify-center items-center h-screen relative">
//       <button onClick={isShow} className="h-16 w-16 bg-red-500 rounded-2xl">
//         <p>App</p>
//       </button>
//       {show && <WhatsApp setShow={setShow} />}
//     </div>
//   );
// }

import React, { useState } from "react";
import WhatsApp from "./WhatsApp";

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 relative">
      {/* FAB Button */}
      <button
        onClick={() => setShow(!show)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 z-50"
        style={{ background: "#25D366" }}
        title="Open chat"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm4.93 13.44c-.2.56-1.18 1.09-1.63 1.16-.44.07-.99.1-1.6-.1-.37-.12-.84-.28-1.43-.55-2.53-1.09-4.18-3.64-4.31-3.81-.13-.17-1.04-1.39-1.04-2.65 0-1.26.66-1.88.89-2.14.23-.26.5-.33.67-.33.17 0 .33 0 .48.01.15.01.36-.06.56.43.2.5.69 1.68.75 1.8.06.12.1.27.02.43-.08.16-.12.26-.24.4-.12.14-.25.31-.36.42-.12.11-.24.24-.1.47.14.23.62.99 1.33 1.6.91.8 1.68 1.05 1.92 1.17.24.12.38.1.52-.06.14-.16.59-.69.75-.93.16-.24.32-.2.54-.12.22.08 1.38.65 1.62.77.24.12.4.18.46.28.06.1.06.58-.14 1.14z" />
        </svg>
      </button>

      {show && <WhatsApp setShow={setShow} />}
    </div>
  );
}
