import { useState } from "react";

const StickyDealerContact = () => {
  const [showContacts, setShowContacts] = useState(false);

  const dealers = [
    { location: "Batam", whatsapp: "https://wa.me/1234567890" },
    { location: "Denpasar", whatsapp: "https://wa.me/1234567891" },
    { location: "Gading Serpong", whatsapp: "https://wa.me/1234567892" },
    { location: "Letda Sujono", whatsapp: "https://wa.me/1234567892" },
    { location: "Bandung", whatsapp: "https://wa.me/1234567892" },
    { location: "PIK 2", whatsapp: "https://wa.me/1234567892" },
    { location: "Samarinda", whatsapp: "https://wa.me/1234567892" },
  ];

  return (
    <div className="fixed bottom-4 right-10 z-50">
      <div
        onClick={() => setShowContacts(!showContacts)}
        className="cursor-pointer"
      >
        <img width={150} src="/button-chat.png" alt="Dealer Contact" />
      </div>

      {showContacts && (
        <div className="mt-2 p-4 bg-white shadow-lg rounded-lg">
          <h3 className="font-bold text-base mb-2">Contact Dealers:</h3>
          <ul>
            {dealers.map((dealer, index) => (
              <li key={index} className="mb-2">
                <a
                  href={dealer.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 text-sm"
                >
                  {dealer.location}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default StickyDealerContact;
