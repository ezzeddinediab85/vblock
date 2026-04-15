import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { full_name, email, phone, profile_type, hive_count } = await req.json();

    if (!email || !full_name) {
      return new Response(
        JSON.stringify({ error: "name_and_email_required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    // --- 1. Insert into Supabase ---
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { error: dbError } = await supabase.from("waitlist").insert({
      full_name,
      email: email.toLowerCase().trim(),
      phone,
      profile_type,
      hive_count,
    });

    if (dbError) {
      // Unique constraint violation = duplicate email
      if (dbError.code === "23505") {
        return new Response(
          JSON.stringify({ error: "duplicate_email" }),
          { status: 409, headers: { ...corsHeaders, "Content-Type": "application/json" } },
        );
      }
      throw dbError;
    }

    // --- 2. Send emails via Resend ---
    const resendKey = Deno.env.get("RESEND_API_KEY");
    const ownerEmail = Deno.env.get("OWNER_EMAIL");

    if (resendKey && ownerEmail) {
      // Email to owner
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "V-BLOCK <onboarding@resend.dev>",
          to: [ownerEmail],
          subject: `New V-BLOCK Waitlist Signup — ${full_name}`,
          html: `
            <div style="font-family: sans-serif; max-width: 520px; margin: 0 auto;">
              <h2 style="color: #F5A623;">New Waitlist Signup</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; color: #888;">Name</td><td style="padding: 8px 0;"><strong>${full_name}</strong></td></tr>
                <tr><td style="padding: 8px 0; color: #888;">Email</td><td style="padding: 8px 0;">${email}</td></tr>
                <tr><td style="padding: 8px 0; color: #888;">Phone</td><td style="padding: 8px 0;">${phone || "—"}</td></tr>
                <tr><td style="padding: 8px 0; color: #888;">Profile</td><td style="padding: 8px 0;">${profile_type || "—"}</td></tr>
                <tr><td style="padding: 8px 0; color: #888;">Hive Count</td><td style="padding: 8px 0;">${hive_count || "—"}</td></tr>
              </table>
            </div>
          `,
        }),
      });

      // Confirmation email to user (in French)
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "V-BLOCK <onboarding@resend.dev>",
          to: [email],
          subject: "Bienvenue sur la liste V-BLOCK",
          html: `
            <div style="font-family: sans-serif; max-width: 520px; margin: 0 auto; padding: 32px 0;">
              <h2 style="color: #F5A623;">Bienvenue, ${full_name} !</h2>
              <p>Merci de votre inscription sur la liste d'attente de <strong>V-BLOCK</strong> — la première solution biologique tunisienne contre la Varroa.</p>
              <p>Vous serez parmi les premiers informés lors du lancement officiel.</p>
              <p style="margin-top: 24px;">À très bientôt,<br/><strong>L'équipe V-BLOCK</strong></p>
              <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
              <p style="font-size: 12px; color: #999;">Vous recevez cet email car vous vous êtes inscrit(e) sur vblock.tn. Pas de spam, promis.</p>
            </div>
          `,
        }),
      });
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    console.error("waitlist-signup error:", err);
    return new Response(
      JSON.stringify({ error: "server_error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
