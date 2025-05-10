import { useState } from "react";
import QRModal from "./QRModal";
import { post } from "@/lib/api";

export default function WishForm() {
  const [wish, setWish] = useState("");
  const [email, setEmail] = useState("");
  const [qrData, setQrData] = useState<string | null>(null);

  const valid = wish.length > 0 && wish.length <= 500 && /^\S+@\S+\.\S+$/.test(email);

  const submit = async () => {
    if (!valid) return;
    const { qr } = await post("/wishes", { wish, email });
    setQrData(qr);
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-lg">
      <textarea
        className="w-full border-2 rounded-2xl p-4 h-64 focus:outline-none"
        maxLength={500}
        value={wish}
        onChange={(e) => setWish(e.target.value)}
        placeholder="Write your last wish…"
      />
      <p className="text-right text-sm text-gray-500">{wish.length}/500</p>

      <input
        className="w-full mt-4 border-2 rounded-2xl p-3 text-center"
        placeholder="example@gmail.com"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        disabled={!valid}
        onClick={submit}
        className="btn-primary w-full mt-6 disabled:opacity-50"
      >
        MINT YOUR WISH 💫
      </button>

      {qrData && <QRModal data={qrData} onClose={() => setQrData(null)} />}
    </div>
  );
}
