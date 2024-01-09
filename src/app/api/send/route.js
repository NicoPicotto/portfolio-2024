// import { EmailTemplate } from '@/app/Components/EmailTemplate/EmailTemplate';
// import { NextResponse } from 'next/server';
// import { Resend } from 'resend';

// const resend = new Resend('re_F9HpHcZt_A9APPeUWthem6TFfZ5y2nrD4');

// export async function POST() {
// 	try {
// 		const data = await resend.emails.send({
// 			from: 'onboarding@resend.dev',
// 			to: ['picottonico@gmail.com'],
// 			subject: 'Hello world',
// 			react: EmailTemplate({ name, email, message }),
// 		});
// 		return NextResponse.json({"Hello" : "world"});
// 	} catch (error) {
// 		return NextResponse.json({ error });
// 	}
// }

import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '@/app/Components/EmailTemplate/EmailTemplate';

const resend = new Resend('re_F9HpHcZt_A9APPeUWthem6TFfZ5y2nrD4');

export async function GET() {
	try {
		const { data } = await resend.emails.send({
			from: 'no-reply@nicopicotto.dev',
			to: 'picottonico@gmail.com',
			subject: 'New message from your website!',
			react: EmailTemplate({
				name: 'Nico',
				email: 'zalala@gmail.com',
				message: 'alalalalong',
			}),
		});
		return new NextResponse(data);
	} catch (error) {
		return new NextResponse(error);
	}
}
