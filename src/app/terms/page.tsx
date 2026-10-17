import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPage } from '@/components/legal/LegalPage';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'The terms that apply when you use hopeengineer.com.',
  alternates: { canonical: '/terms' },
};

const CONTACT_EMAIL = 'csoft.sameera@gmail.com';

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" updated="18 October 2026">
      <p>
        These terms apply when you use hopeengineer.com (&ldquo;the site&rdquo;), run by Sameera Samarasinghe (&ldquo;hopeengineer&rdquo;,
        &ldquo;I&rdquo;, &ldquo;me&rdquo;). By using the site you agree to them. If you do not agree, please do not use the site.
      </p>

      <h2>Using the site</h2>
      <p>You are welcome to read, share and link to the site. Please do not:</p>
      <ul>
        <li>use it for anything unlawful, or to harass or harm anyone;</li>
        <li>try to break, overload or gain unauthorised access to the site, its accounts or its data;</li>
        <li>scrape or copy the site in bulk, or republish whole articles as your own.</li>
      </ul>

      <h2>Accounts</h2>
      <p>
        If you create an account, keep your sign-in details secure and give accurate information. You are responsible for activity under your
        account. I may suspend or close accounts that break these terms. You can ask me to delete your account at any time.
      </p>

      <h2>Content and ownership</h2>
      <p>
        The writing, design and original material on the site belong to me unless stated otherwise. You may quote short passages with a credit and a
        link back. Some images are illustrative and generated with AI; screenshots of testimonials and social posts remain the property of their authors
        and are shown with credit. Trademarks and product names (including Threads, Claude and others) belong to their owners.
      </p>

      <h2>Information, not professional advice</h2>
      <p>
        Articles share my experience and opinions for general information. They are not professional advice of any kind, including medical,
        mental health, legal, financial or technical advice for your specific situation. If you are struggling with your mental health, please
        contact a qualified professional or a local helpline.
      </p>

      <h2>Services</h2>
      <p>
        Descriptions of services (such as 1-on-1 sessions and AI automation) are an invitation to talk, not an offer. Any work is agreed separately
        in writing, and those terms apply to it.
      </p>

      <h2>Payments and refunds</h2>
      <p>
        <strong>All payments are final and non-refundable.</strong> This covers 1-on-1 sessions, AI automation work, programs and any other paid
        service or digital product bought from me, including when you miss a session, stop part way, or change your mind. Please ask any questions
        before you pay. This does not remove any right to a refund that the law of your country gives you and that cannot be waived.
      </p>

      <h2>My products and other websites</h2>
      <p>
        The site links to my products, Threadify and Sharpy, and to other websites. Those have their own terms and privacy policies, which apply
        when you use them. I am not responsible for the content of third-party websites.
      </p>

      <h2>No warranty</h2>
      <p>
        The site is provided &ldquo;as is&rdquo;. I work to keep it accurate and available, but I cannot promise it will always be error-free,
        up to date or uninterrupted.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the extent the law allows, I am not liable for any indirect or consequential loss arising from your use of the site or reliance on its
        content. Nothing in these terms limits liability that cannot be limited by law.
      </p>

      <h2>Privacy</h2>
      <p>
        How I handle personal information is explained in the <Link href="/privacy">Privacy Policy</Link>.
      </p>

      <h2>Changes and governing law</h2>
      <p>
        I may update these terms from time to time; the date at the top shows the latest version. These terms are governed by the laws of
        Sri Lanka, without affecting any rights you have under the consumer laws of your own country.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </LegalPage>
  );
}
