export async function post<T>(url: string, body: any): Promise<T> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(body)
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}
