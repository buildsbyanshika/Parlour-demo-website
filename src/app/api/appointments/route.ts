export async function POST() {
  return new Response(
    JSON.stringify({ success: false, message: 'Appointments API is not configured on this deployment.' }),
    {
      status: 501,
      headers: { 'Content-Type': 'application/json' },
    }
  );
}
