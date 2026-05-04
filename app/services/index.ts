export async function sendRequest({
  name,
  email,
  business,
  message,
}: {
  name: string;
  email: string;
  business: string;
  message: string;
}): Promise<{ ok: boolean }> {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        business,
        message,
      }),
    });
    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
