export async function GET(request) {
  const res = await fetch('http://localhost:8000/api/cameras/');
  const data = await res.json();

  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
}
