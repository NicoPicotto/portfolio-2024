import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '@/app/Components/EmailTemplate/EmailTemplate';

const resend = new Resend('re_F9HpHcZt_A9APPeUWthem6TFfZ5y2nrD4');

export async function POST(request) {
	try {
		const body = await request.json();
		const { name, email, message } = body;
		const { data } = await resend.emails.send({
			from: 'no-reply@nicopicotto.dev',
			to: 'picottonico@gmail.com',
			subject: 'New message from your website!',
			react: EmailTemplate({
				name,
				email,
				message,
			}),
		});
		return new NextResponse(data);
	} catch (error) {
		return new NextResponse(error);
	}
}
