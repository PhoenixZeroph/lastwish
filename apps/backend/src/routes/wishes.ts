import { FastifyPluginAsync } from "fastify";
import { z } from "zod";
import { hashWish } from "../services/crypto.service";
import { issueLastWishVC } from "../services/vc.service";
import { generateQr } from "../services/crypto.service";

const bodySchema = z.object({
  wish: z.string().min(1).max(500),
  email: z.string().email()
});

const plugin: FastifyPluginAsync = async (app) => {
  app.post("/", async (req, res) => {
    const { wish, email } = bodySchema.parse(req.body);
    const wishHash = hashWish(wish);
    const qr = await issueLastWishVC({ wishHash, email });
    res.send({ qr });
  });
};

export default plugin;
