import { useState } from "react";

export default function Checkout() {
  const [shipping, setShipping] = useState("kex");
  const [payment, setPayment] = useState("card");

  const shippingOptions = [
    { id: "kex", label: "KEX Express", sub: "Domestic · 1–3 business days" },
    {
      id: "std",
      label: "Standard Shipping",
      sub: "Domestic · 3–7 business days",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-center text-3xl font-bold tracking-widest mb-8">
        AUDTLIST
      </h1>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="flex flex-col gap-5">
          {/* Shipping */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <p className="text-xs font-medium tracking-widest text-gray-400 uppercase mb-4">
              Shipping Method
            </p>
            <div className="flex flex-col gap-3">
              {shippingOptions.map((opt) => (
                <div
                  key={opt.id}
                  onClick={() => setShipping(opt.id)}
                  className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-all ${
                    shipping === opt.id
                      ? "border-gray-800 bg-gray-50"
                      : "border-gray-200"
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      shipping === opt.id
                        ? "border-gray-800 bg-gray-800"
                        : "border-gray-300"
                    }`}
                  >
                    {shipping === opt.id && (
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{opt.label}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{opt.sub}</p>
                  </div>
                  <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    Free
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Payment */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <p className="text-xs font-medium tracking-widest text-gray-400 uppercase mb-4">
              Payment Method
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { id: "card", label: "Credit / Debit" },
                { id: "qr", label: "QR Code" },
              ].map((m) => (
                <button
                  key={m.id}
                  onClick={() => setPayment(m.id)}
                  className={`py-3 rounded-lg text-sm font-medium border transition-all ${
                    payment === m.id
                      ? "bg-gray-900 text-white border-gray-900"
                      : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column — Order Summary */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <p className="text-xs font-medium tracking-widest text-gray-400 uppercase mb-1">
            Order Summary
          </p>
          <p className="text-xs text-gray-400 mb-4">1 item in cart</p>

          <div className="flex gap-4 py-4 border-b border-gray-100">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
              🎵
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">Changes by Envoi</p>
              <p className="text-xs text-gray-400 mt-1">Digital album</p>
              <p className="text-xs text-gray-400 mt-2">Qty: 1</p>
            </div>
            <p className="text-sm font-medium">$1.50</p>
          </div>

          <div className="pt-4 space-y-2">
            <div className="flex justify-between text-sm text-gray-500">
              <span>Subtotal</span>
              <span>$1.50</span>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>Shipping</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="flex justify-between text-sm font-semibold text-gray-900 border-t border-gray-100 pt-3 mt-2">
              <span>Order Total</span>
              <span>$1.50</span>
            </div>
          </div>

          <button className="w-full mt-6 py-4 bg-gray-900 text-white text-sm font-medium tracking-widest rounded-lg hover:bg-gray-700 transition-colors">
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
}
