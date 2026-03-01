import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import path from 'path';
import fs from 'fs';

const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy_key_to_prevent_build_error');

export async function POST(req) {
    try {
        const body = await req.json();
        const { email, eventName } = body;

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        // [TODO/PLACEHOLDER]: Insert email into DB/CRM
        console.log(`[Lead Capture]: ${email} signed up for ${eventName || 'an event'}`);

        // Determine if brochure exists to attach
        // Make sure 'public/assets/brochure.pdf' exists in your public folder
        const brochurePath = path.join(process.cwd(), 'public', 'assets', 'brochure.pdf');
        let attachments = [];

        // Check if the file exists before attaching to prevent crashes
        if (fs.existsSync(brochurePath)) {
            const fileBuffer = fs.readFileSync(brochurePath);
            attachments.push({
                filename: 'brochure.pdf',
                content: fileBuffer,
            });
        } else {
            console.warn(`Brochure not found at ${brochurePath}`);
        }

        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: ['ajaynellengara@gmail.com'],
            subject: `Your Brochure for ${eventName || 'the Event'}`,
            html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>Thank you for your interest!</h2>
          <p>Hi there,</p>
          <p>Thank you for requesting more information about <strong>${eventName || 'our upcoming event'}</strong>.</p>
          <p>We've attached the brochure to this email. If you have any questions, feel free to reply.</p>
          <br />
          <p>Best regards,<br/>The DontLookUp Team</p>
        </div>
      `,
            attachments: attachments,
        });

        if (error) {
            console.error('Resend API Error:', error);
            return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
        }

        return NextResponse.json({ success: true, data }, { status: 200 });
    } catch (error) {
        console.error('Server Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
