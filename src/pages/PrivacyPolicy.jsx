import React from "react";
import Footer from "../components/Footer";
const PrivacyPolicy = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-6">Privacy Policy</h2>
      <p className="mb-4">
        At Sakthi Dental Clinic, we are committed to protecting your privacy. This Privacy Policy
        outlines how we collect, use, store, and disclose information from visitors and users of our
        website.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h3>
      <p className="mb-2">
        We may collect personal identification information from users in several ways, including
        when users:
      </p>
      <ul className="list-disc list-inside mb-2">
        <li>Visit our website</li>
        <li>Fill out forms (e.g. contact or appointment requests)</li>
        <li>Engage with features, services, or resources on our site</li>
      </ul>
      <p className="mb-2">Types of information we may collect include:</p>
      <ul className="list-disc list-inside mb-2">
        <li>Name</li>
        <li>Email address</li>
        <li>Phone number</li>
      </ul>
      <p className="mb-2">
        Users can visit our site anonymously. We only collect personal data when it is voluntarily
        submitted by users. Refusing to provide certain personal information may limit access to
        some site features or services.
      </p>
      <p className="mb-2">We may also gather non-personal identification information, such as:</p>
      <ul className="list-disc list-inside mb-6">
        <li>Browser type</li>
        <li>Device details</li>
        <li>Operating system</li>
        <li>Internet service provider</li>
        <li>Technical data related to user interaction with the site</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">2. Cookies</h3>
      <p className="mb-4">
        Our website may use “cookies” to enhance the user experience. Cookies are small files stored
        on a user’s device for record-keeping purposes and to track preferences or site activity.
        Users can set their browser to refuse cookies or alert them when cookies are being used.
        Please note that disabling cookies may affect some site functionality.
      </p>

      <h3 className="text-xl font-semibold mb-2">3. How We Use Your Information</h3>
      <ul className="list-disc list-inside mb-6">
        <li>To operate and manage the website: Ensuring content displays properly and services run smoothly.</li>
        <li>To improve customer service: Helping us respond to inquiries more efficiently.</li>
        <li>
          To enhance the website experience: Feedback provided may help us improve content,
          usability, and performance.
        </li>
        <li>
          To communicate via email: We may use the email address to respond to inquiries,
          appointments, or service updates.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">4. Data Security</h3>
      <p className="mb-4">
        We implement appropriate security measures for data collection, storage, and processing to
        safeguard your personal information from unauthorized access, alteration, or destruction.
      </p>

      <h3 className="text-xl font-semibold mb-2">5. Information Sharing</h3>
      <p className="mb-4">
        We do not sell, trade, or rent personal identification information to third parties. We may
        share general demographic data (not linked to any personal information) with trusted
        partners or affiliates to improve service delivery and site performance.
      </p>

      <h3 className="text-xl font-semibold mb-2">6. Children’s Privacy</h3>
      <p className="mb-4">
        In compliance with the Children’s Online Privacy Protection Act (COPPA), we do not knowingly
        collect any personal information from children under the age of 13. Our site is not intended
        to attract users below this age group.
      </p>

      <h3 className="text-xl font-semibold mb-2">7. Changes to This Policy</h3>
      <p className="mb-4">
        Sakthi Dental Clinic may update this Privacy Policy from time to time. We encourage users to
        review this page periodically to stay informed about how we protect your information.
      </p>

      <h3 className="text-xl font-semibold mb-2">8. Acceptance of Terms</h3>
      <p className="mb-4">
        By using this website, you agree to this policy. If you do not accept our Privacy Policy,
        please do not use our website. Continued use of the site following any updates will be
        deemed as your acceptance of the revised policy.
      </p>

      <h3 className="text-xl font-semibold mb-2">9. Contact Us</h3>
      <p>
        If you have any questions about this Privacy Policy or your interactions with our site,
        please contact us.
      </p>
      <Footer/>
    </div>
  );
};

export default PrivacyPolicy;
