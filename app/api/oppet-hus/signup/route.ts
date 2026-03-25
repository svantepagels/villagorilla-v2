import { NextResponse } from 'next/server';
import { z } from 'zod';
import { addRegistration } from '@/lib/events';
import { sendSignupConfirmation, sendStaffNotification } from '@/lib/email';

const schema = z.object({
  eventId: z.string().min(1),
  parentName: z.string().min(2, 'Ange ditt namn'),
  email: z.string().email('Ange en giltig e-postadress'),
  phone: z.string().min(8, 'Ange ett giltigt telefonnummer'),
  childAge: z.string().min(1, 'Ange barnets ålder'),
  gdprConsent: z.boolean().refine((v) => v, 'Du måste godkänna villkoren'),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    const result = await addRegistration(data.eventId, {
      parentName: data.parentName,
      email: data.email,
      phone: data.phone,
      childAge: data.childAge,
    });

    if (!result) {
      return NextResponse.json({ error: 'Evenemanget hittades inte' }, { status: 404 });
    }

    // Send emails (don't block response)
    Promise.all([
      sendSignupConfirmation(result.registration, result.event),
      sendStaffNotification(result.registration, result.event),
    ]).catch((err) => console.error('Email send error:', err));

    return NextResponse.json({ success: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: 'Valideringsfel', details: err.issues }, { status: 400 });
    }
    if (err instanceof Error && err.message === 'Event is full') {
      return NextResponse.json({ error: 'Evenemanget är fullt' }, { status: 409 });
    }
    console.error('Signup error:', err);
    return NextResponse.json({ error: 'Internt serverfel' }, { status: 500 });
  }
}
