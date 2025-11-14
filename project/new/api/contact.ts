interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60000;
const MAX_REQUESTS = 3;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const requests = rateLimitMap.get(ip) || [];
  const recentRequests = requests.filter(time => now - time < RATE_LIMIT_WINDOW);

  if (recentRequests.length >= MAX_REQUESTS) {
    return false;
  }

  recentRequests.push(now);
  rateLimitMap.set(ip, recentRequests);
  return true;
}

function sanitize(text: string): string {
  return text
    .replace(/[<>]/g, '')
    .trim()
    .slice(0, 5000);
}

function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export default async function handler(req: Request) {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ ok: false, message: 'Method not allowed' }),
      {
        status: 405,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  try {
    const clientIP = req.headers.get('x-forwarded-for') || 'unknown';

    if (!checkRateLimit(clientIP)) {
      return new Response(
        JSON.stringify({ ok: false, message: 'Too many requests. Please try again later.' }),
        {
          status: 429,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const body: ContactRequest = await req.json();

    if (!body.name || !body.email || !body.message) {
      return new Response(
        JSON.stringify({ ok: false, message: 'Missing required fields' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    if (!validateEmail(body.email)) {
      return new Response(
        JSON.stringify({ ok: false, message: 'Invalid email address' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const sanitizedData = {
      name: sanitize(body.name),
      email: sanitize(body.email),
      phone: body.phone ? sanitize(body.phone) : '',
      message: sanitize(body.message),
      timestamp: new Date().toISOString(),
    };

    console.log('Contact form submission:', sanitizedData);

    return new Response(
      JSON.stringify({
        ok: true,
        message: 'Thank you for your message. We will be in touch soon.'
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({ ok: false, message: 'Internal server error' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
