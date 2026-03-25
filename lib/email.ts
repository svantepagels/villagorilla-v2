import type { Registration, OpenHouseEvent } from '@/types/events';

const FROM_EMAIL = 'Villa Gorilla <info@villagorilla.se>';
const STAFF_EMAIL = 'info@villagorilla.se';

async function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key || key.startsWith('re_placeholder')) return null;
  const { Resend } = await import('resend');
  return new Resend(key);
}

export async function sendSignupConfirmation(
  registration: Registration,
  event: OpenHouseEvent
) {
  const resend = await getResend();
  if (!resend) {
    console.log('[Email] Resend not configured. Would send confirmation to:', registration.email);
    return;
  }

  const eventDate = new Intl.DateTimeFormat('sv-SE', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(event.date));

  await resend.emails.send({
    from: FROM_EMAIL,
    to: registration.email,
    subject: `Bekräftelse: ${event.title} – Villa Gorilla`,
    html: `
      <h2>Tack för din anmälan!</h2>
      <p>Hej ${registration.parentName},</p>
      <p>Din anmälan till <strong>${event.title}</strong> är bekräftad.</p>
      <p><strong>Datum:</strong> ${eventDate}</p>
      <p><strong>Plats:</strong> ${event.location}</p>
      <p>${event.description}</p>
      <p>Vi ser fram emot att träffa er!</p>
      <p>Med vänliga hälsningar,<br>Villa Gorilla</p>
    `,
  });
}

export async function sendStaffNotification(
  registration: Registration,
  event: OpenHouseEvent
) {
  const resend = await getResend();
  if (!resend) {
    console.log('[Email] Resend not configured. Would notify staff about:', registration.parentName);
    return;
  }

  await resend.emails.send({
    from: FROM_EMAIL,
    to: STAFF_EMAIL,
    subject: `Ny anmälan: ${event.title}`,
    html: `
      <h2>Ny anmälan till öppet hus</h2>
      <p><strong>Förälder:</strong> ${registration.parentName}</p>
      <p><strong>E-post:</strong> ${registration.email}</p>
      <p><strong>Telefon:</strong> ${registration.phone}</p>
      <p><strong>Barnets ålder:</strong> ${registration.childAge}</p>
      <p><strong>Antal anmälda:</strong> ${event.registrations.length}</p>
    `,
  });
}

export async function sendContactEmail(data: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) {
  const resend = await getResend();
  if (!resend) {
    console.log('[Email] Resend not configured. Contact from:', data.name, data.email);
    return;
  }

  await resend.emails.send({
    from: FROM_EMAIL,
    to: STAFF_EMAIL,
    subject: `Nytt meddelande från ${data.name}`,
    html: `
      <h2>Nytt kontaktformulär</h2>
      <p><strong>Namn:</strong> ${data.name}</p>
      <p><strong>E-post:</strong> ${data.email}</p>
      ${data.phone ? `<p><strong>Telefon:</strong> ${data.phone}</p>` : ''}
      <p><strong>Meddelande:</strong></p>
      <p>${data.message}</p>
    `,
  });

  await resend.emails.send({
    from: FROM_EMAIL,
    to: data.email,
    subject: 'Tack för ditt meddelande – Villa Gorilla',
    html: `
      <p>Hej ${data.name},</p>
      <p>Tack för att du hörde av dig! Vi återkommer så snart som möjligt.</p>
      <p>Med vänliga hälsningar,<br>Villa Gorilla</p>
    `,
  });
}
