export default function getDesignedEmail({
    otp,
    brandName = "MIZO BEAUTY",
    purpose = "Email Verification",
    validityMinutes = 10,
}) {
    return `
    <div style="background:#f9fafb;padding:30px 0;font-family:Arial,Helvetica,sans-serif;">
      <div style="max-width:520px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.08);">

        <!-- HEADER -->
        <div style="background:#fb7185;padding:20px;text-align:center;">
          <h1 style="margin:0;color:#ffffff;font-size:22px;letter-spacing:1px;">
            ${brandName}
          </h1>
          <p style="margin:4px 0 0;color:#ffe4e6;font-size:13px;">
            ${purpose}
          </p>
        </div>

        <!-- BODY -->
        <div style="padding:30px;text-align:center;">
          <h2 style="color:#111827;margin-bottom:10px;">
            Verify Your Email
          </h2>

          <p style="color:#6b7280;font-size:14px;line-height:1.6;">
            Please use the following One-Time Password (OTP) to continue.
            This code is valid for <strong>${validityMinutes} minutes</strong>.
          </p>

          <!-- OTP BOX -->
          <div style="margin:24px auto;background:#fef2f2;border:1px dashed #fb7185;border-radius:12px;padding:18px;width:fit-content;">
            <span style="font-size:28px;letter-spacing:6px;font-weight:bold;color:#be123c;">
              ${otp}
            </span>
          </div>

          <p style="color:#9ca3af;font-size:13px;margin-top:20px;">
            If you didn’t request this code, you can safely ignore this email.
          </p>
        </div>

        <!-- FOOTER -->
        <div style="background:#f3f4f6;padding:16px;text-align:center;font-size:12px;color:#6b7280;">
          © ${new Date().getFullYear()} ${brandName} • All rights reserved
        </div>

      </div>
    </div>
    `;
}
