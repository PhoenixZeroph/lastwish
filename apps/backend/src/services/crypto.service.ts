import crypto from "crypto";
import QRCode from "qrcode";

export const hashWish = (wish: string) =>
  "sha256:" + crypto.createHash("sha256").update(wish).digest("hex");

export async function generateQr(data: object) {
  return QRCode.toDataURL(JSON.stringify(data), { width: 512 });
}
