import { NextResponse } from 'next/server';

export async function POST(request) {
  const { token } = await request.json();

  // Save the token in a cookie or local storage for now
  return NextResponse.json({ message: 'Token received' }, {
    headers: {
      'Set-Cookie': `token=${token}; Path=/; HttpOnly`,
    },
  });
}
