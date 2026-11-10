import Header from "@/components/Header";
import Footer from "@/components/Footer";

const financePartners = [
  { name: "Cash App", image: "/assets/partners/cash-app.svg" },
  { name: "Apple Pay", image: "/assets/partners/apple-pay.svg" },
  { name: "bitcoin", image: "/assets/partners/bitcoin.svg" },
  { name: "WIRE TRANSFER", image: "/assets/partners/wire-transfer.svg" },
  { name: "BANK TRANSFER", image: "/assets/partners/bank-transfer.svg" }
];

const offlinePartners = [
  { name: "Walmart", image: "/assets/partners/walmart.svg" },
  { name: "Walgreens", image: "/assets/partners/walgreens.svg" },
  { name: "Dollar General", image: "/assets/partners/dollar-general.svg" },
  { name: "Family Dollar", image: "/assets/partners/family-dollar.svg" },
  { name: "7-Eleven", image: "/assets/partners/7-eleven.svg" },
  { name: "CVS Pharmacy", image: "/assets/partners/cvs.svg" },
  { name: "Rite Aid", image: "/assets/partners/rite-aid.svg" },
  { name: "Kroger", image: "/assets/partners/kroger.svg" }
];

const BankingPartners = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#f1f1f1" }}>
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-16 max-w-6xl">
        {/* Finance Partners Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-8 inline-block" style={{ fontFamily: "sans-serif", borderBottom: "3px solid black", paddingBottom: "8px" }}>
            Finance Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {financePartners.map((partner, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center justify-center transition-all duration-200 hover:-translate-y-1 hover:shadow-md aspect-square">
                <img 
                  src={partner.image} 
                  alt={partner.name}
                  className="w-auto h-auto max-w-[85%] max-h-20 object-contain" 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Offline Partners Section */}
        <div>
          <h2 className="text-3xl font-bold text-black mb-8 inline-block" style={{ fontFamily: "sans-serif", borderBottom: "3px solid black", paddingBottom: "8px" }}>
            Offline Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {offlinePartners.map((partner, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center justify-center transition-all duration-200 hover:-translate-y-1 hover:shadow-md aspect-[4/3]">
                <img 
                  src={partner.image} 
                  alt={partner.name}
                  className="w-auto h-auto max-w-[85%] max-h-20 object-contain" 
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BankingPartners;
