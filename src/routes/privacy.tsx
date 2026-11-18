import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PageHero } from "@/components/site/PageLayout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Website Privacy & Data Policy | GHSPCA Hyderabad" },
      { name: "description", content: "Read GHSPCA's privacy policy to understand how visitor information and personal data are handled and protected." },
      { property: "og:title", content: "Website Privacy & Data Policy | GHSPCA Hyderabad" },
      { property: "og:description", content: "Read GHSPCA's privacy policy to understand how visitor information and personal data are handled and protected." },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <PageLayout>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5 lg:px-8 space-y-6 text-muted-foreground leading-relaxed">
          <h2 className="text-2xl font-semibold text-foreground">Welcome to GHSPCA!</h2>
          <p>At GHSPCA, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website https://ghspca.org/. By using our site, you agree to the terms outlined in this policy.</p>

          <h3 className="text-xl font-semibold text-foreground mt-8">Information We Collect</h3>
          <p>We collect information to improve our website and services. The types of information we may collect include:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Personal Information:</strong> When you subscribe to our newsletter, leave a comment, or contact us, we may collect personal details such as your name, email address, and any other information you provide.</li>
            <li><strong>Non-Personal Information:</strong> We may also collect non-personal data such as your IP address, browser type, operating system, and the pages you visit on our site.</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mt-8">How We Use Your Information</h3>
          <p>The information we collect is used for the following purposes:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>To Improve Our Website:</strong> We analyze user behavior to improve the content and functionality of our website.</li>
            <li><strong>To Communicate with You:</strong> We may use your email address to respond to your inquiries, send newsletters, or provide updates about our services.</li>
            <li><strong>To Personalize User Experience:</strong> We may use your data to offer content that is relevant to your interests.</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mt-8">Cookies and Tracking Technologies</h3>
          <p>We use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small files stored on your device that help us remember your preferences and understand how you interact with our site.</p>
          <p>Types of Cookies We Use:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Essential Cookies:</strong> Necessary for the website to function properly.</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site.</li>
            <li><strong>Marketing Cookies:</strong> Used to deliver personalized advertisements.</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mt-8">Third-Party Services</h3>
          <p>We may use third-party services, such as Google Analytics, to analyze website traffic. These third parties may collect and process data according to their own privacy policies. We do not control the information collected by third parties.</p>

          <h3 className="text-xl font-semibold text-foreground mt-8">Data Security</h3>
          <p>We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.</p>

          <h3 className="text-xl font-semibold text-foreground mt-8">Your Rights</h3>
          <p>You have the right to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Access Your Data:</strong> Request a copy of the personal information we hold about you.</li>
            <li><strong>Correct Your Data:</strong> Request corrections to any inaccuracies in your personal data.</li>
            <li><strong>Delete Your Data:</strong> Request the deletion of your personal information from our records.</li>
          </ul>
          <p>To exercise these rights, please contact us at ghspca.hyd@gmail.com.</p>

          <h3 className="text-xl font-semibold text-foreground mt-8">Changes to This Privacy Policy</h3>
          <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the date at the top will be updated accordingly. We encourage you to review this policy periodically to stay informed about how we are protecting your information.</p>

          <h3 className="text-xl font-semibold text-foreground mt-8">Contact Us</h3>
          <p>If you have any questions or concerns about this privacy policy, please contact us at:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>GHSPCA</strong></li>
            <li><strong>Contact Email:</strong> <a href="mailto:ghspca.hyd@gmail.com" className="text-primary hover:underline">ghspca.hyd@gmail.com</a></li>
          </ul>

          <p>By using our website, you consent to the terms of this Privacy Policy.</p>

          <p className="pt-8 text-center text-foreground font-semibold">Thank you for taking the time to visit our Privacy Policy.</p>
        </div>
      </section>
    </PageLayout>
  );
}
