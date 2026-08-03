import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || '';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { fullName, email, companyName, rolesNeeded, estimatedTeamSize, engagementLength, description } = data;

    const submittedDate = new Date().toLocaleString('en-GB', {
      dateStyle: 'long',
      timeStyle: 'short',
      timeZone: 'UTC',
    }) + ' UTC';

    const rolesList = Array.isArray(rolesNeeded) && rolesNeeded.length > 0
      ? rolesNeeded.join(', ')
      : 'Not specified';

    // 1. Insert into Supabase
    if (supabaseUrl && supabaseServiceKey) {
      const supabase = createClient(supabaseUrl, supabaseServiceKey);
      const { error: dbError } = await supabase
        .from('outsourced_teams')
        .insert([
          {
            full_name: fullName,
            work_email: email,
            company_name: companyName,
            roles_needed: rolesNeeded,
            estimated_team_size: estimatedTeamSize,
            engagement_length: engagementLength,
            project_description: description
          }
        ]);

      if (dbError) {
        console.error('Supabase Error:', dbError);
      }
    }

    // 2. Send Email using Resend
    if (process.env.RESEND_API_KEY && resend) {
      // Internal team notification
      const { error: emailError } = await resend.emails.send({
        from: 'Taskive Tech <info@taskivetech.tech>',
        to: ['info@taskivetech.tech'],
        subject: `New Outsourced Team Request: ${fullName} (${companyName})`,
        html: `
          <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;padding:20px;border:1px solid #DAD8CF;border-radius:6px;background:#FAFAF7;">
            <h2 style="color:#101216;margin-top:0;">New Outsourced Team Request</h2>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;color:#101216;border-collapse:collapse;">
              <tr><td style="padding:8px 0;color:#8A8F99;width:150px;">Name</td><td style="padding:8px 0;">${fullName}</td></tr>
              <tr><td style="padding:8px 0;color:#8A8F99;">Email</td><td style="padding:8px 0;">${email}</td></tr>
              <tr><td style="padding:8px 0;color:#8A8F99;">Company</td><td style="padding:8px 0;">${companyName}</td></tr>
              <tr><td style="padding:8px 0;color:#8A8F99;">Roles needed</td><td style="padding:8px 0;">${rolesList}</td></tr>
              <tr><td style="padding:8px 0;color:#8A8F99;">Team size</td><td style="padding:8px 0;">${estimatedTeamSize}</td></tr>
              <tr><td style="padding:8px 0;color:#8A8F99;">Engagement length</td><td style="padding:8px 0;">${engagementLength}</td></tr>
              <tr><td colspan="2" style="padding:12px 0 4px;color:#8A8F99;">What the team will work on</td></tr>
              <tr><td colspan="2" style="padding:4px 16px;line-height:1.6;color:#585E6B;background:#fff;border:1px solid #DAD8CF;border-radius:4px;">"${description}"</td></tr>
            </table>
            <p style="margin:20px 0 0;font-size:12px;color:#8A8F99;">Submitted ${submittedDate}</p>
          </div>
        `,
      });

      if (emailError) {
        console.error('Resend Error:', emailError);
        throw emailError;
      }

      // Branded auto-responder to the client
      await resend.emails.send({
        from: 'Taskive Tech <info@taskivetech.tech>',
        replyTo: 'info@taskivetech.tech',
        to: [email],
        subject: `Let's shape your outsourced team — Taskive Technologies`,
        html: `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Let's shape your outsourced team — Taskive Technologies</title>
</head>
<body style="margin:0; padding:0; background-color:#F1F0EA; font-family:Arial, Helvetica, sans-serif;">

  <div style="display:none; max-height:0; overflow:hidden; opacity:0;">
    Thanks for telling us about your team needs — here's what happens next, and what you told us.
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F1F0EA; padding:32px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color:#FFFFFF; max-width:600px; width:100%; border-radius:6px; overflow:hidden;">

          <tr>
            <td style="background-color:#101216; padding:28px 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="font-family:Arial, Helvetica, sans-serif; font-size:20px; font-weight:bold; color:#FAFAF7;">
                    <span style="color:#FF5A36;">&#9679;</span>&nbsp;Taskive
                  </td>
                  <td align="right" style="font-family:Arial, Helvetica, sans-serif; font-size:11px; letter-spacing:1px; color:#9AA0B0; text-transform:uppercase;">
                    Outsourced Product Teams
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="height:3px; background-color:#FF5A36; font-size:0; line-height:0;">&nbsp;</td>
          </tr>

          <tr>
            <td style="padding:40px;">

              <p style="margin:0 0 8px 0; font-family:Arial, Helvetica, sans-serif; font-size:11px; font-weight:bold; letter-spacing:1px; color:#1F3FE0; text-transform:uppercase;">
                Request received
              </p>

              <h1 style="margin:0 0 20px 0; font-family:Arial, Helvetica, sans-serif; font-size:26px; line-height:1.25; color:#101216;">
                Thanks, ${fullName} — let's shape your team.
              </h1>

              <p style="margin:0 0 20px 0; font-family:Arial, Helvetica, sans-serif; font-size:15px; line-height:1.6; color:#585E6B;">
                We've received your request to build an outsourced product development team for <strong style="color:#101216;">${companyName}</strong>. We're looking at the roles, size, and timeline you shared so we can come back with an actual proposed team shape, not a generic sales call.
              </p>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:28px 0; border-top:1px solid #DAD8CF; border-bottom:1px solid #DAD8CF;">
                <tr>
                  <td style="padding:20px 0;">
                    <p style="margin:0 0 16px 0; font-family:Arial, Helvetica, sans-serif; font-size:13px; font-weight:bold; letter-spacing:.5px; color:#101216; text-transform:uppercase;">
                      What happens next
                    </p>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="28" valign="top" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; font-weight:bold; color:#FF5A36; padding-bottom:14px;">01</td>
                        <td valign="top" style="font-family:Arial, Helvetica, sans-serif; font-size:14px; line-height:1.5; color:#585E6B; padding-bottom:14px;">
                          <strong style="color:#101216;">We review, within 1 business day.</strong><br>
                          A senior team member matches your roles and scope against people we could realistically staff.
                        </td>
                      </tr>
                      <tr>
                        <td width="28" valign="top" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; font-weight:bold; color:#FF5A36; padding-bottom:14px;">02</td>
                        <td valign="top" style="font-family:Arial, Helvetica, sans-serif; font-size:14px; line-height:1.5; color:#585E6B; padding-bottom:14px;">
                          <strong style="color:#101216;">We propose a team shape.</strong><br>
                          Roles, seniority mix, and estimated ramp time specific to what you described, sent back to you in writing.
                        </td>
                      </tr>
                      <tr>
                        <td width="28" valign="top" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; font-weight:bold; color:#FF5A36; padding-bottom:14px;">03</td>
                        <td valign="top" style="font-family:Arial, Helvetica, sans-serif; font-size:14px; line-height:1.5; color:#585E6B; padding-bottom:14px;">
                          <strong style="color:#101216;">A short intro call.</strong><br>
                          30 minutes to confirm fit, working hours overlap, and how you'd like the team to plug into your tools.
                        </td>
                      </tr>
                      <tr>
                        <td width="28" valign="top" style="font-family:Arial, Helvetica, sans-serif; font-size:13px; font-weight:bold; color:#FF5A36;">04</td>
                        <td valign="top" style="font-family:Arial, Helvetica, sans-serif; font-size:14px; line-height:1.5; color:#585E6B;">
                          <strong style="color:#101216;">Kickoff.</strong><br>
                          Your dedicated team is onboarded into your existing repos, tools, and processes from day one.
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td>
                    <p style="margin:0 0 12px 0; font-family:Arial, Helvetica, sans-serif; font-size:13px; font-weight:bold; letter-spacing:.5px; color:#101216; text-transform:uppercase;">
                      A quick reminder of how this works
                    </p>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-family:Arial, Helvetica, sans-serif; font-size:14px; line-height:1.6; color:#585E6B;">
                      <tr><td style="padding:4px 0;">&#10003;&nbsp; A consistent, dedicated team assigned to you — not rotating contractors</td></tr>
                      <tr><td style="padding:4px 0;">&#10003;&nbsp; Senior-only talent, the same studio-led standard as every Taskive engagement</td></tr>
                      <tr><td style="padding:4px 0;">&#10003;&nbsp; Direct daily access via Slack/Teams — no account manager relaying messages</td></tr>
                      <tr><td style="padding:4px 0;">&#10003;&nbsp; Scales up or down as your roadmap changes, without a re-hiring cycle</td></tr>
                    </table>
                  </td>
                </tr>
              </table>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#FAFAF7; border:1px solid #DAD8CF; border-radius:6px; margin-bottom:28px;">
                <tr>
                  <td style="padding:24px;">
                    <p style="margin:0 0 16px 0; font-family:Arial, Helvetica, sans-serif; font-size:13px; font-weight:bold; letter-spacing:.5px; color:#101216; text-transform:uppercase;">
                      Here's what you told us
                    </p>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-family:Arial, Helvetica, sans-serif; font-size:13.5px; color:#101216;">
                      <tr>
                        <td width="150" valign="top" style="padding:6px 0; color:#8A8F99;">Company</td>
                        <td valign="top" style="padding:6px 0;">${companyName}</td>
                      </tr>
                      <tr>
                        <td width="150" valign="top" style="padding:6px 0; color:#8A8F99;">Roles requested</td>
                        <td valign="top" style="padding:6px 0;">${rolesList}</td>
                      </tr>
                      <tr>
                        <td width="150" valign="top" style="padding:6px 0; color:#8A8F99;">Estimated team size</td>
                        <td valign="top" style="padding:6px 0;">${estimatedTeamSize}</td>
                      </tr>
                      <tr>
                        <td width="150" valign="top" style="padding:6px 0; color:#8A8F99;">Engagement length</td>
                        <td valign="top" style="padding:6px 0;">${engagementLength}</td>
                      </tr>
                      <tr>
                        <td width="150" valign="top" style="padding:10px 0 0 0; color:#8A8F99;">What they'll work on</td>
                        <td valign="top" style="padding:10px 0 0 0;"></td>
                      </tr>
                      <tr>
                        <td colspan="2" style="padding:4px 0 0 0; line-height:1.6; color:#585E6B;">
                          "${description}"
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 28px 0; font-family:Arial, Helvetica, sans-serif; font-size:14px; line-height:1.6; color:#585E6B;">
                If anything about the roles or scope changes on your end before we're in touch, just reply directly to this email — no need to resubmit the form.
              </p>

              <p style="margin:0; font-family:Arial, Helvetica, sans-serif; font-size:14px; line-height:1.6; color:#585E6B;">
                Talk soon,<br>
                <strong style="color:#101216;">The Taskive Team</strong>
              </p>

            </td>
          </tr>

          <tr>
            <td style="padding:24px 40px; background-color:#FAFAF7; border-top:1px solid #DAD8CF;">
              <p style="margin:0 0 6px 0; font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#8A8F99;">
                Submitted ${submittedDate} &middot; Taskive Technologies &middot; Outsourced product development teams for growing &amp; enterprise companies
              </p>
              <p style="margin:0; font-family:Arial, Helvetica, sans-serif; font-size:12px; color:#8A8F99;">
                Questions before we're in touch? Reply to this email or write to
                <a href="mailto:info@taskivetech.tech" style="color:#1F3FE0; text-decoration:none;">info@taskivetech.tech</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`,
      });
    } else {
      console.warn('No RESEND_API_KEY found, skipping email.');
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('API Route Error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
