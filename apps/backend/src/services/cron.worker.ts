import cron from "node-cron";
import { mintAztec } from "./aztec.service";
import { getExpiredWishes } from "./vc.service";
import { sendClaimMail } from "./zkemail.service";

export function scheduleCronJobs(logger: any, cfg: any) {
  // “Proof-of-life” check runs every day at 04:00 UTC
  cron.schedule("0 4 * * *", async () => {
    logger.info("Cron job – checking expired wishes");
    const expired = await getExpiredWishes();
    for (const vc of expired) {
      const txHash = await mintAztec(vc);
      await sendClaimMail(vc, txHash);
    }
  });
}
