import { agent } from "./quarkid-agent";
import { generateQr } from "./crypto.service";

export async function issueLastWishVC({
  wishHash,
  email
}: {
  wishHash: string;
  email: string;
}) {
  const credential = await agent.issueVC({
    type: ["LastWishCredential"],
    subject: {
      wishHash,
      receiverHash: hashWish(email.toLowerCase()),
      expiry: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString()
    }
  });

  const qr = await generateQr({ type: "LastWishCredential", id: credential.id });
  return qr;
}
