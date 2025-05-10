import { QuarkID } from "@quarkid/agent-web";

export const agent = new QuarkID({
  proxyUrl: process.env.NEXT_PUBLIC_QUARKID_PROXY ?? "",
  apiKey: process.env.NEXT_PUBLIC_QUARKID_KEY ?? ""
});

export async function quarkLogin() {
  await agent.authenticate();
}
