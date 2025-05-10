import { useRouter } from "next/router";
import { quarkLogin } from "@/lib/quarkid";

export default function Login() {
  const router = useRouter();
  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <img src="/logo.svg" className="w-32 mb-8" />
      <h1 className="text-2xl font-medium mb-6">Login for mint your last wish</h1>
      <button
        onClick={() => quarkLogin().then(() => router.push("/mint"))}
        className="btn-primary w-60"
      >
        Conectar
      </button>
    </main>
  );
}
