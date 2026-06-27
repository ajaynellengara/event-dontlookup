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

        // Map event names to their PDF files
        const pdfMap = {
            'Model Rise': 'modal-rise-catalogue.pdf',
            'Stylepreneur': 'stylepreneur-catalogue.pdf',
            'Model Forward Live': 'model-forward-catalogue.pdf',
        };

        const matchKey = Object.keys(pdfMap).find(key =>
            eventName?.toLowerCase().includes(key.toLowerCase())
        );

        const pdfFileName = matchKey ? pdfMap[matchKey] : 'brochure.pdf';
        const pdfDir = path.join(process.cwd(), 'public', 'pdf');
        const assetsDir = path.join(process.cwd(), 'public', 'assets');

        // Check pdf/ directory first, then assets/
        let brochurePath = path.join(pdfDir, pdfFileName);
        if (!fs.existsSync(brochurePath)) {
            brochurePath = path.join(assetsDir, pdfFileName);
        }

        let attachments = [];

        // Check if the file exists before attaching to prevent crashes
        if (fs.existsSync(brochurePath)) {
            const fileBuffer = fs.readFileSync(brochurePath);
            attachments.push({
                filename: pdfFileName,
                content: fileBuffer,
            });
        } else {
            console.warn(`Brochure not found at ${brochurePath}`);
        }

        const siteUrl = 'https://dontlookup.fashion';
        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: ['ajaynellengara@gmail.com'],
            subject: `Your Brochure for ${eventName || 'the Event'}`,
            html: `
        <style>
          @media (prefers-color-scheme: dark) {
            .dlu-body { background-color: #1a1a2e !important; }
            .dlu-content { background-color: #16213e !important; }
            .dlu-text { color: #cbd5e1 !important; }
            .dlu-heading { color: #06B5B9 !important; }
            .dlu-label { color: #94a3b8 !important; }
            .dlu-card { background-color: #1e293b !important; border-color: #334155 !important; }
            .dlu-divider { border-color: #334155 !important; }
          }
        </style>
        <div class="dlu-body" style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden;">
          <div style="background: #012023; padding: 32px 40px; text-align: center;">
            <img src="https://events.dontlookup.fashion/images/brand-logo.svg" alt="DontLookUp" style="height: 40px; width: auto;" />
            <p style="color: #06B5B9; font-size: 13px; letter-spacing: 3px; text-transform: uppercase; margin: 12px 0 0 0;">Fashion Events</p>
          </div>

          <div class="dlu-content" style="padding: 36px 40px;">
            <div style="width: 50px; height: 4px; background: #D6A96F; border-radius: 2px; margin-bottom: 24px;"></div>

            <h2 class="dlu-heading" style="color: #01393b; font-size: 24px; margin: 0 0 8px 0;">Your Brochure is Ready!</h2>
            <p class="dlu-text" style="color: #555; font-size: 15px; line-height: 1.7; margin: 0 0 20px 0;">Hi there,</p>
            <p class="dlu-text" style="color: #555; font-size: 15px; line-height: 1.7; margin: 0 0 6px 0;">
              Thank you for your interest in <strong class="dlu-heading" style="color: #01393b;">${eventName || 'our event'}</strong>.
              We've attached the brochure to this email.
            </p>
            <p class="dlu-text" style="color: #555; font-size: 15px; line-height: 1.7; margin: 0 0 28px 0;">
              Have questions? Reach out to us anytime — we'd love to hear from you.
            </p>

            <div class="dlu-card" style="background: #f8fafb; border: 1px solid #e8edf0; border-radius: 10px; padding: 24px; margin-bottom: 28px;">
              <h3 class="dlu-heading" style="color: #01393b; font-size: 16px; margin: 0 0 16px 0;">Get in Touch</h3>
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr>
                  <td class="dlu-label" style="padding: 7px 10px 7px 0; width: 90px; color: #888; vertical-align: top;">WhatsApp</td>
                  <td style="padding: 7px 0;"><a href="https://wa.me/+971565345046" style="color: #06B5B9; text-decoration: none; font-weight: 600;">+971 56 534 5046</a></td>
                </tr>
                <tr>
                  <td class="dlu-label" style="padding: 7px 10px 7px 0; color: #888; vertical-align: top;">Instagram</td>
                  <td style="padding: 7px 0;"><a href="https://www.instagram.com/dontlookupfashion.events/" style="color: #06B5B9; text-decoration: none;">@dontlookupfashion.events</a></td>
                </tr>
                <tr>
                  <td class="dlu-label" style="padding: 7px 10px 7px 0; color: #888; vertical-align: top;">Facebook</td>
                  <td style="padding: 7px 0;"><a href="https://www.facebook.com/dontlookupfashionevents" style="color: #06B5B9; text-decoration: none;">DontLookup Fashion Events</a></td>
                </tr>
                <tr>
                  <td class="dlu-label" style="padding: 7px 10px 7px 0; color: #888; vertical-align: top;">YouTube</td>
                  <td style="padding: 7px 0;"><a href="https://www.youtube.com/@DontlookupFashionEvents" style="color: #06B5B9; text-decoration: none;">Dontlookup Fashion Events</a></td>
                </tr>
                <tr>
                  <td class="dlu-label" style="padding: 7px 10px 7px 0; color: #888; vertical-align: top;">LinkedIn</td>
                  <td style="padding: 7px 0;"><a href="https://www.linkedin.com/showcase/dontlookup-fashion-events/about/?viewAsMember=true" style="color: #06B5B9; text-decoration: none;">DontLookup Fashion Events</a></td>
                </tr>
                <tr>
                  <td class="dlu-label" style="padding: 7px 10px 7px 0; color: #888; vertical-align: top;">Pinterest</td>
                  <td style="padding: 7px 0;"><a href="https://www.pinterest.com/dontlookupfashionevents/" style="color: #06B5B9; text-decoration: none;">dontlookupfashionevents</a></td>
                </tr>
              </table>
              <div class="dlu-divider" style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #e8edf0;">
                <a href="https://dontlookup.app.link/y4l8S8uFq0b" style="display: inline-block; background: #06B5B9; color: #fff; text-decoration: none; padding: 10px 24px; border-radius: 6px; font-size: 14px; font-weight: 600;">Download the App</a>
              </div>
            </div>

            <p class="dlu-text" style="color: #888; font-size: 13px; line-height: 1.6; margin: 0; text-align: center;">
              Best regards,<br/>
              <strong class="dlu-heading" style="color: #01393b;">The DontLookUp Team</strong>
            </p>
          </div>

          <div style="background: #012023; padding: 20px 40px; text-align: center;">
            <p style="color: #06B5B9; font-size: 12px; margin: 0;">
              <a href="${siteUrl}" style="color: #06B5B9; text-decoration: none;">dontlookup.fashion</a>
              &nbsp;&bull;&nbsp;
              <a href="${siteUrl}/privacy-policy" style="color: #06B5B9; text-decoration: none;">Privacy Policy</a>
              &nbsp;&bull;&nbsp;
              <a href="${siteUrl}/terms-and-conditions" style="color: #06B5B9; text-decoration: none;">Terms</a>
            </p>
          </div>
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
