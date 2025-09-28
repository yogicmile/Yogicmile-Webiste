import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy - YogicMile',
  description: 'Privacy Policy for YogicMile mobile application.',
};

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
          <div className="mb-8">
            <Link 
              href="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mb-6 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">🔒 Privacy Policy – Yogic Mile (India)</h1>
            <p className="text-gray-600 text-lg">Effective Date: October 2025</p>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-gray-700 leading-relaxed">
                Yogic Mile ("App", "We", "Us") is committed to safeguarding your privacy. This Privacy Policy explains how we collect, use, store, share, and protect your information while you use our mobile application and services. It also explains your rights under Indian laws (Information Technology Act, 2000, and the SPDI Rules, 2011).
              </p>
              <p className="text-gray-700 leading-relaxed mt-3 font-medium">
                By downloading, registering, or using the App, you agree to this Policy.
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none space-y-10">
            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-sm font-bold mr-3">1</span>
                Information We Collect
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">a) Personal Information (provided by you)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Mobile number</strong> (mandatory, used as User ID, login, and referral ID)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Name</strong> (optional, for personalization)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Email ID</strong> (optional, for communication and backup login)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Residential Address</strong> (optional, helps deliver local coupons, discounts, and location-based ads)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Password or OTP</strong> (for secure login)</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">b) Activity Information (collected automatically)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Daily step count and activity data from device sensors or APIs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Coins earned, rewards redeemed, challenges joined, and progress status</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Login history and in-app actions</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">c) Technical & Device Information</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Device model, operating system version, browser type</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>IP address and approximate geolocation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Crash reports, error logs, and performance analytics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>Advertising identifiers (if applicable)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center text-sm font-bold mr-3">2</span>
                Why We Collect Your Data
              </h2>
              <p className="text-gray-700 mb-4">We use your data for the following purposes:</p>
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">1</span>
                  <span><strong>Core App Features</strong> – To track steps, calculate rewards, and maintain your wallet.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">2</span>
                  <span><strong>Rewards & Redemptions</strong> – To process coin earnings, vouchers, and coupon redemptions.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">3</span>
                  <span><strong>Personalization</strong> – To deliver ads, offers, and coupons based on your region and preferences.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">4</span>
                  <span><strong>Account Management</strong> – To verify identity, manage referrals, and secure your account.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">5</span>
                  <span><strong>Communication</strong> – To send notifications about progress, offers, and achievements.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">6</span>
                  <span><strong>Safety & Security</strong> – To detect fraud, prevent fake step entries, and block misuse.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">7</span>
                  <span><strong>Analytics</strong> – To improve app performance, measure engagement, and plan new features.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">8</span>
                  <span><strong>Legal Compliance</strong> – To comply with Indian government or court requirements.</span>
                </li>
              </ol>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-green-100 text-green-600 rounded-lg flex items-center justify-center text-sm font-bold mr-3">3</span>
                Sharing of Information
              </h2>
              <p className="text-gray-700 mb-4 font-medium">We do not sell your personal data. Information is shared only in limited circumstances:</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>With service providers (e.g., SMS gateways, hosting, analytics, reward partners) under strict confidentiality.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>With advertisers and merchants (only aggregated, non-personal insights like "5,000 users in Hyderabad achieved 10,000 steps this week").</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>With government authorities when legally required under the IT Act, 2000 or other applicable laws.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>With successor businesses in case of merger, acquisition, or restructuring (with prior notice to users).</span>
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center text-sm font-bold mr-3">4</span>
                Data Storage & Security
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Data is stored in secure, encrypted servers located in India or compliant jurisdictions.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Passwords are hashed; sensitive information is encrypted both in transit and at rest.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Access to personal data is limited to authorized employees and partners under NDAs.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Regular security audits and penetration tests are performed.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Despite our best efforts, no system is 100% secure. Users must also practice caution (e.g., don't share OTPs).</span>
                </li>
              </ul>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-red-100 text-red-600 rounded-lg flex items-center justify-center text-sm font-bold mr-3">5</span>
                User Rights & Controls
              </h2>
              <p className="text-gray-700 mb-4">As a user, you have rights:</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Access & Update</strong> – Edit your profile (mobile, name, email, address).</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Data Portability</strong> – Request a copy of your data in a readable format.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Opt-Out</strong> – Stop receiving promotional notifications/ads.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Delete Account</strong> – Request account deletion; your personal data will be removed within 90 days (except where legally required).</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Withdraw Consent</strong> – You may withdraw your consent to data use at any time by contacting support, though core app functions may stop working.</span>
                </li>
              </ul>
            </div>

            {/* Sections 6-12 */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-6 h-6 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center text-xs font-bold mr-2">6</span>
                  Children's Privacy
                </h2>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>Yogic Mile is not intended for children under 13.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>Users aged 13–17 must have parental or guardian consent.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>We do not knowingly collect data from minors without consent.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-6 h-6 bg-pink-100 text-pink-600 rounded-lg flex items-center justify-center text-xs font-bold mr-2">7</span>
                  Cookies & Tracking
                </h2>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>We may use cookies, local storage, and tracking pixels.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>Third-party analytics tools may also use such technologies.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-6 h-6 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center text-xs font-bold mr-2">8</span>
                  Data Retention
                </h2>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>We retain your personal data as long as your account is active.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>Deleted accounts → Data erased within 90 days.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>Transactional data may be kept longer for compliance.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-6 h-6 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center text-xs font-bold mr-2">9</span>
                  Third-Party Links
                </h2>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>Our app may show third-party ads, coupons, or links.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <span>We are not responsible for their privacy practices.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-cyan-100 text-cyan-600 rounded-lg flex items-center justify-center text-sm font-bold mr-3">10</span>
                Legal Basis for Processing (India)
              </h2>
              <p className="text-gray-700 mb-4">We process your data under:</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Consent</strong> – By signing up, you consent to data collection.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Contract</strong> – To provide rewards and step tracking services.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Legal Obligation</strong> – To comply with IT Act, 2000 & SPDI Rules, 2011.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Legitimate Interest</strong> – Fraud prevention, app improvement, analytics.</span>
                </li>
              </ul>
            </div>

            {/* Section 11 */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-sm font-bold mr-3">11</span>
                Grievance Officer (As per IT Act, 2000)
              </h2>
              <p className="text-gray-700 mb-4">If you have privacy-related concerns, complaints, or queries, you may contact our Grievance Officer:</p>
              <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                <div>
                  <p><strong>Name:</strong> [Appoint Official Name]</p>
                  <p><strong>Email:</strong> [Insert Support Email]</p>
                </div>
                <div>
                  <p><strong>Address:</strong> [Insert Registered Office Address]</p>
                  <p><strong>Phone:</strong> [Insert Contact Number]</p>
                </div>
              </div>
            </div>

            {/* Section 12 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center text-sm font-bold mr-3">12</span>
                Changes to this Policy
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>We may update this Privacy Policy from time to time. Major changes will be notified via in-app alert, SMS, or email. Continued use after updates means acceptance of the revised terms.</p>
                <p>Yogic Mile may update or revise this Privacy Policy from time to time to reflect changes in legal requirements, technology, or business practices. Any such updates will be published in the "Privacy Policy" section of the app.</p>
                <p className="font-medium">Users are advised to check this section frequently. Continued use of the app after any modifications shall be deemed as acceptance of the updated policy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}