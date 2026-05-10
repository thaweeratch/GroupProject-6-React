import { useState } from "react";

export default function Cart() {
  const [coupon, setCoupon] = useState("");
  const [applied, setApplied] = useState(false);

  const subtotal = 1.5;
  const shipping = 0;
  const tax = 0;
  const grand = subtotal + shipping + tax;

  function handleApply() {
    if (coupon.trim()) setApplied(true);
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-center text-3xl font-bold tracking-widest mb-8">
        AUDTLIST
      </h1>

      <p className="text-xs font-medium tracking-widest text-gray-400 uppercase max-w-4xl mx-auto mb-4">
        My Cart
      </p>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_380px] gap-6">
        {/* Cart Items */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <p className="text-xs font-medium tracking-widest text-gray-400 uppercase mb-4">
            Items
          </p>

          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
              🎵
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">Changes by Envoi</p>
              <p className="text-xs text-gray-400 mt-1">
                Digital album · Qty: 1
              </p>
            </div>
            <p className="text-sm font-medium">${subtotal.toFixed(2)}</p>
          </div>

          <div className="flex gap-3 mt-5">
            <button className="flex-1 py-2.5 border border-gray-200 rounded-lg text-xs font-medium tracking-wide hover:bg-gray-50 transition-colors">
              ← CONTINUE SHOPPING
            </button>
            <button className="flex-1 py-2.5 border border-red-200 text-red-500 rounded-lg text-xs font-medium tracking-wide hover:bg-red-50 transition-colors">
              🗑 CLEAR CART
            </button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <p className="text-xs font-medium tracking-widest text-gray-400 uppercase mb-4">
            Order Summary
          </p>

          {/* Coupon */}
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              placeholder="Coupon code"
              value={coupon}
              onChange={(e) => {
                setCoupon(e.target.value);
                setApplied(false);
              }}
              className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-gray-400"
            />
            <button
              onClick={handleApply}
              className="px-4 py-2 bg-gray-900 text-white text-xs font-medium tracking-wide rounded-lg hover:bg-gray-700 transition-colors"
            >
              APPLY
            </button>
          </div>

          {applied && (
            <p className="text-xs text-green-600 mb-3">✓ Coupon applied</p>
          )}

          <hr className="border-gray-100 mb-3" />

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-500">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>Shipping</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>Tax</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between text-sm font-semibold text-gray-900 border-t border-gray-100 pt-3 mt-1">
              <span>Grand Total incl. Tax</span>
              <span>${grand.toFixed(2)}</span>
            </div>
          </div>

          <button className="w-full mt-6 py-4 bg-gray-900 text-white text-xs font-medium tracking-widest rounded-lg hover:bg-gray-700 transition-colors">
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
}
