import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

// The RESEND_API_KEY must be in .env.local
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || '';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { fullName, email, companyName, companySize, projectType, timeline, budget, description } = data;

    // 1. Insert into Supabase
    if (supabaseUrl && supabaseServiceKey) {
      const supabase = createClient(supabaseUrl, supabaseServiceKey);
      const { error: dbError } = await supabase
        .from('engagements')
        .insert([
          {
            full_name: fullName,
            work_email: email,
            company_name: companyName,
            company_size: companySize,
            project_type: projectType,
            timeline: timeline,
            budget_range: budget,
            description: description
          }
        ]);

      if (dbError) {
        console.error("Supabase Error:", dbError);
        throw dbError;
      }
    }

    // 2. Send Email using Resend
    if (process.env.RESEND_API_KEY && resend) {
      const { error: emailError } = await resend.emails.send({
        from: 'Taskive Tech <onboarding@resend.dev>',
        to: ['info@taskivetech.tech'],
        subject: `New Engagement Request: ${fullName} (${companyName})`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h2 style="color: #2563eb;">New Engagement Request</h2>
            <p>You have received a new engagement request from the website.</p>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 150px;">Name</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Company</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${companyName}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Company Size</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${companySize}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Project Type</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${projectType}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Timeline</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${timeline}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Budget</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${budget || 'Not specified'}</td>
              </tr>
            </table>
            
            <h3 style="color: #2563eb; margin-top: 30px;">Project Details</h3>
            <p style="background-color: #f9fafb; padding: 15px; border-radius: 8px; line-height: 1.6; white-space: pre-wrap;">${description}</p>
          </div>
        `,
      });

      if (emailError) {
        console.error("Resend Error:", emailError);
        throw emailError;
      }
    } else {
        console.warn("No RESEND_API_KEY found, skipping email.");
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
