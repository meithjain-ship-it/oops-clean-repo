// No keys here. The page asks our own server, and the server holds the secret.
async function askAI(question) {
  const res = await fetch("/api/ask", { method: "POST", body: JSON.stringify({ question }) });
  return res.json();
}
