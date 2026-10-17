import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPage } from '@/components/legal/LegalPage';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How hopeengineer.com collects, uses and protects your personal information.',
  alternates: { canonical: '/privacy' },
};

const CONTACT_EMAIL = 'csoft.sameera@gmail.com';

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="18 October 2026">
      <p>
        This policy explains what personal information hopeengineer.com (&ldquo;the site&rdquo;) collects, why, and what you can do about it.
        The site is run by Sameera Samarasinghe (&ldquo;hopeengineer&rdquo;, &ldquo;I&rdquo;, &ldquo;me&rdquo;) from Sri Lanka. If you have any
        question about your data, email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <h2>The short version</h2>
      <ul>
        <li>You can read everything on the site without giving me any personal information.</li>
        <li>I only collect what you choose to send: a message through the contact form, or an account if you sign up.</li>
        <li>There are no analytics, advertising or tracking scripts on the site.</li>
        <li>I never sell your information.</li>
      </ul>

      <h2>What I collect</h2>
      <p><strong>When you use the contact form:</strong> your name, your email address, the service you are interested in, and your message.</p>
      <p>
        <strong>When you create an account:</strong> your email address and a securely hashed password, or, if you choose &ldquo;Continue with Google&rdquo;,
        the basic profile Google shares (your name, email address and profile picture). Plus any details you add to your profile.
      </p>
      <p>
        <strong>Automatically:</strong> like almost every website, the servers that host the site receive technical information with each request,
        such as your IP address, browser type and the page you asked for. This is used to deliver the site and keep it secure, not to profile you.
      </p>

      <h2>How I use it</h2>
      <ul>
        <li>To reply to your message and discuss any work you have asked about.</li>
        <li>To run your account: signing you in and keeping you signed in.</li>
        <li>To keep the site secure and working.</li>
      </ul>
      <p>
        If you are in the UK or European Union, the legal bases are: your consent and steps you ask me to take before entering a contract
        (contact form), performance of a contract (your account), and my legitimate interest in running a secure website (technical data).
      </p>

      <h2>Cookies and browser storage</h2>
      <p>
        The site does not use advertising or analytics cookies. If you sign in, your browser stores a session token so you stay signed in.
        This is strictly necessary for your account to work, and it is removed when you sign out.
      </p>

      <h2>Who else handles your data</h2>
      <p>I use a small number of trusted providers to run the site. They process data on my behalf and only as needed to provide their service:</p>
      <ul>
        <li><strong>Supabase</strong>: database and sign-in. Stores contact messages, accounts and blog content.</li>
        <li><strong>Railway</strong>: hosts the website.</li>
        <li><strong>Cloudflare</strong>: delivers the site and protects it from attacks.</li>
        <li><strong>Google</strong>: only if you choose to sign in with Google.</li>
      </ul>
      <p>
        Some images on the site load from other services (such as Imgur and Unsplash), which receive your IP address when your browser fetches
        them. Links to Threads, Instagram, YouTube, Medium, Substack, GitHub, Threadify and Sharpy take you to sites with their own privacy policies.
      </p>
      <p>These providers may store data outside your country, including in the United States. Where required, they use appropriate safeguards for international transfers.</p>

      <h2>How long I keep it</h2>
      <ul>
        <li>Contact messages: as long as needed to respond and follow up, then deleted on request, and in any case reviewed and cleared periodically.</li>
        <li>Accounts: until you ask me to delete your account.</li>
        <li>Technical server logs: kept only for the short period set by the hosting providers.</li>
      </ul>

      <h2>Your rights</h2>
      <p>
        You can ask me to show you the personal information I hold about you, correct it, delete it, or stop using it. If you are in the UK or
        European Union you also have the right to data portability and to complain to your data protection authority. Sri Lanka&rsquo;s Personal Data
        Protection Act gives similar rights. To make any request, email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. I will reply within 30 days.
      </p>

      <h2>Security</h2>
      <p>
        Data is sent over encrypted connections (HTTPS), stored with a reputable database provider, and access is limited to me. No system is
        perfectly secure, but I take reasonable steps to protect what you share.
      </p>

      <h2>Children</h2>
      <p>The site is not aimed at children under 16, and I do not knowingly collect their personal information. If you believe a child has sent me information, email me and I will delete it.</p>

      <h2>Changes to this policy</h2>
      <p>If I change how I handle personal information, I will update this page and the date at the top.</p>

      <p>
        See also the <Link href="/terms">Terms of Use</Link>.
      </p>
    </LegalPage>
  );
}
