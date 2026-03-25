import { NextResponse } from 'next/server';
import { z } from 'zod';
import { sendContactEmail } from '@/lib/email';

const schema = z.object({
  name: z.string().min(2, 'Ange ditt namn'),
  email: z.string().email('Ange en giltig e-postadress'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Meddelandet är för kort'),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = schema.parse(body);
    await sendContactEmail(data);
    return NextResponse.json({ success: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: 'Valideringsfel', details: err.issues }, { status: 400 });
    }
    console.error('Contact form error:', err);
    return NextResponse.json({ error: 'Internt serverfel' }, { status: 500 });
  }
}
