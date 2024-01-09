import { EmailTemplate } from '@/app/Components/EmailTemplate/EmailTemplate';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
	try {
		const body = await NextRequest.json();
		console.log(body);
		const { email, name, message } = body;
		const data = await resend.emails.send({
			from: 'Nico Website <info@nicopicotto.dev>',
			to: ['picottonico@gmail.com'],
			subject: 'New message from website!',
			react: EmailTemplate({ email, name, message }),
		});

		if(data.status === "success") {
			return NextResponse.json({message: "Message successfully sent!"})
		}

		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json({ error });
	}
}
