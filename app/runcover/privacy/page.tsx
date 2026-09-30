import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {"title": "Runcover Privacy Policy", "description": "Runcover Privacy Policy — Energy Transformation Project LLC."};

const sections: [string, string[]][] = [
  [
    "Who we are and what this notice covers",
    [
      "Energy Transformation Project LLC operates Runcover. This notice covers the Runcover runner app, Runcover for Business, Runcover Admin, and our Runcover service and support pages, to the extent those services are available. Contact admin@energytproject.com for privacy questions or requests. Our separate Consumer Health Data Privacy Notice describes fitness and health information and applicable health-data rights."
    ]
  ],
  [
    "Adults only",
    [
      "The invited beta and initial launch are intended for adults age 18 and older. You must be at least 18 to use these services. If you believe a person under 18 has provided personal information, contact admin@energytproject.com so we can investigate and take appropriate steps, including steps required by children's privacy laws. This eligibility rule does not represent that identity or age has been independently verified."
    ]
  ],
  [
    "Information you provide",
    [
      "We collect account information such as email address, account identifiers, name, authentication information, and preferences. If you use an available Apple or Google sign-in option, we receive the account information that provider supplies for sign-in. We collect activities you record or import, saved routes, and content or messages you submit. Social has a separate name and username you choose and optional profile fields. Games may store enrollment, contributions, scores, votes, rewards, and results. Optional League enrollment collects date of birth and a selected competition division; your full birth date is private, while eligible comparisons can display an age band and division when you opt in. Profile photos are collected only if an enabled feature lets you submit them."
    ]
  ],
  [
    "Precise location and activity recordings",
    [
      "During an outdoor recording, Runcover records precise latitude and longitude, timestamps, and available altitude, accuracy, speed, and activity-mode information. Recording can continue in the background during that activity. The app does not continuously record your location outside an active recording. Maps and nearby features can separately request foreground location. Reward presence and redemption checks can send a location and measured distance when you use those features. Planned route drawings and selected pins can be sent to a routing provider. Your phone stores account-associated recordings, caches, and queued uploads so recording can work offline. Routes can reveal your home, workplace, routine, or visits to sensitive places even if you never enter an address."
    ]
  ],
  [
    "Apple Health and motion information",
    [
      "With your permission, Runcover can read running and walking workouts, routes, distance, heart rate, running measurements, energy, steps, and flights climbed that are available through Apple Health. Supported running measurements include power, speed, stride length, ground contact time, and vertical oscillation. Automatic imports check history and future changes; the default history setting includes all available workout history. Imported workouts, routes, and measurements are uploaded to your Runcover account and processed using Supabase for history, analysis, and eligible game features. Motion permissions can support indoor step and distance estimates. Runcover can save an indoor workout you record to Apple Health; it does not edit or delete other Health workouts. Disabling Health access stops future access but does not erase copies already imported. Data obtained from Apple Health and Motion and Fitness is not used for advertising, marketing, or use-based data mining."
    ]
  ],
  [
    "Business, billing, and support information",
    [
      "Business services collect business and contact names, work email and phone where supplied, business address and location, categories, requested zones, offers, onboarding and agreement records, and account or staff-role information. Our customer relationship management system can hold business contacts, public business research, communications, notes, tasks, and follow-up records. Support and security requests can include messages, account references, reports, and investigation records. When a payment feature is available, Stripe processes payment details through its checkout. We retain related customer and transaction identifiers, selected products, amounts, and payment, subscription, deposit, or refund status as applicable. Runcover does not store full card numbers or card security codes. This privacy notice does not establish payment, refund, advertising-exclusivity, or subscription terms."
    ]
  ],
  [
    "Device, service, and session information",
    [
      "Our infrastructure and providers can receive IP addresses, request times, device or browser information, and operational or error logs when you use hosted services. Runcover associates some diagnostics with an account or activity to investigate failures and abuse. Web services use necessary authentication cookies and local or session storage for sign-in, registration, preferences, and safe retries. If you enable an available push-notification feature, a notification provider can process a device push token and notification content. A QR scanner processes codes for the feature you request; it does not retain a camera recording. The services do not change their behavior in response to a browser's legacy Do Not Track signal. This notice does not override any legally required opt-out signal or consent requirement."
    ]
  ],
  [
    "Why we use information",
    [
      "We use information to provide accounts; record, import, analyze, and display activities; calculate maps, metrics, and eligible competition results; provide social features and requested offers or redemptions; manage merchant onboarding, campaigns, billing, and customer support; and investigate misuse, fraud, security incidents, and scoring integrity. Operational information also helps us maintain and improve reliability. We use business contact information to handle inquiries and business relationships. You can ask us to stop optional marketing communications at admin@energytproject.com; essential account, billing, security, and request-response messages can continue."
    ]
  ],
  [
    "Who receives information",
    [
      "Supabase processes account, activity, precise location, imported Health information, social, reward, merchant, and support data for our backend. Vercel hosts the Business/Admin web services and company website. Stripe processes available payments. Apple provides platform services, Health access and writes you authorize, maps, and supported sign-in; Google can provide supported sign-in. Mapbox can receive selected route-planning pins and drawings for directions or route matching. Business address lookup can use Smarty, and enabled geocoding or web maps can use Nominatim/OpenStreetMap services, OpenFreeMap tiles or fonts, and USGS imagery; those services receive the queries or map requests and ordinary network information needed to respond. Expo can deliver enabled push notifications. Our email provider processes messages we send or receive. Provider availability depends on the feature and configuration. Their own notices also govern their independent services.",
      "Authorized company personnel can access information needed for support, administration, security, and other purposes described here. Other users receive information you choose to publish or share and the participation information described below. Merchants receive information needed to manage offers, redemptions, and their business relationship; ordinary placement on the map does not give a merchant access to your complete route or Health history. We can disclose information when legally required, to protect people or enforce our rights, or in a business transaction, subject to applicable law and required protections. This notice is not blanket permission for an unrelated recipient or purpose."
    ]
  ],
  [
    "Social, routes, and game visibility",
    [
      "Workouts are not automatically public. Social starts with a Private profile, Friends audience, route sharing Off, and Review Before Posting. Your chosen Social name and username remain searchable by signed-in runners even with a Private profile. Depending on your settings, other runners can see your profile and published posts. You choose supported details to share, including distance, duration, pace, elevation, and average heart rate. Automatic sharing requires separate consent and follows saved settings for future eligible activities. Private Social settings do not hide separate participation in games or rankings.",
      "Optional Social route previews use the trimming distance you select. Separate run-map exports can include route start and end points. Game territory can display your username, claimed areas, and area totals and can suggest where you run. Zone Wars stores the home zone you select and your confirmation that you live there, without collecting a home-address pin for enrollment. Opting into contribution rankings links your username and points to that zone. Individual ballots are private; zone-level purchases, battles, and results can be visible. League and other game visibility follow separate participation controls. Screenshots, exported routes, and copies held by recipients cannot be recalled through our sharing or deletion controls."
    ]
  ],
  [
    "Current sales and future changes",
    [
      "As of this notice's date, Runcover does not sell identifiable user or merchant information for money or other valuable consideration. Sharing described above, including requested social features and processing by service providers, still occurs. This statement describes current practice; it is not a promise that every future business model will be identical. Before introducing a materially different use, sale, or advertising-sharing practice, we must provide the applicable notices, choices, and permissions and comply with law and platform restrictions. Changing this notice alone does not authorize a new use of previously collected information. Health and fitness information is subject to additional restrictions described above and in the Consumer Health Data Privacy Notice."
    ]
  ],
  [
    "Retention and deletion",
    [
      "We retain account and activity information to provide the features you use, subject to deletion controls and applicable law. Deleting an individual activity hides it from normal views; underlying route and measurement evidence is queued for removal under the configured retention workflow, whose default is 30 days. Account deletion is different: you can request it in Profile, which removes the account and account-linked records covered by that workflow. The app also attempts to clear local recordings, queues, active capture, and caches and reports cleanup failures. File cleanup and backups require separate handling. Revoking a device permission does not delete existing server copies or copies in Apple Health.",
      "Some settled game results, reward or billing records, business records, and limited support, fraud, security, audit, or legal records can remain when needed and legally permitted. A retained record is not permission to keep all route or Health history indefinitely. Retention depends on purpose, legal requirements, disputes, security needs, and the applicable deletion right. We review privacy requests separately where in-app deletion does not cover the requested information. Backups are not instantly erased; applicable health-data and other deletion requirements also apply to them. Contact us for incomplete deletion or to exercise a legal deletion right. Copies independently exported by others are outside our control."
    ]
  ],
  [
    "Your choices and privacy requests",
    [
      "Use device settings to manage location, Health, motion, camera, and notification permissions. Use app controls for imports, sharing, games, and account deletion. Email admin@energytproject.com to request access, correction, a portable copy, deletion, withdrawal of consent, or help with an applicable privacy right. Legal rights depend on your jurisdiction and the information involved. We verify requests using information reasonably necessary to protect your account; never send a password, full card number, or unnecessary identity documents. You do not need to create a new account to contact us. If we decline a request, ask us to review the decision by replying with the subject Privacy appeal. Applicable law determines deadlines, exceptions, authorized-agent rights, and complaint options. The separate Consumer Health Data Privacy Notice explains health-data rights in more detail."
    ]
  ],
  [
    "Security and processing locations",
    [
      "We use account authentication, access controls, and encrypted connections for hosted services. No system can guarantee absolute security. Contact admin@energytproject.com promptly if you suspect unauthorized access. Providers may process information where they operate; this notice does not promise that every copy remains in Utah or the United States. Information sent to an external service or published by you is also subject to that recipient's practices and applicable protections."
    ]
  ],
  [
    "Changes to this notice",
    [
      "The date above identifies this version. Updates will be published here. Material changes require additional notice and, when applicable, consent or other choices before the affected new practice begins. Reading this notice is not consent to optional Health access, public sharing, tracking, or a data sale."
    ]
  ]
];

export default function Page() {
  return (
    <article>
      <p className="text-sm font-semibold tracking-wide text-sky-300">RUNCOVER</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Runcover Privacy Policy</h1>
      <p className="mt-4 text-sm text-slate-400">Updated September 30, 2026</p>
      <p className="mt-4 text-base leading-7 text-slate-300"><Link className="text-sky-300 underline underline-offset-4" href="/runcover/consumer-health">Consumer Health Data Privacy Notice</Link></p>
      <div className="mt-12 space-y-9">
        {sections.map(([heading, paragraphs]) => (
          <section key={heading}>
            <h2 className="text-xl font-semibold text-white">{heading}</h2>
            {paragraphs.map((text, index) => <p key={index} className="mt-3 text-base leading-7 text-slate-300">{text}</p>)}
          </section>
        ))}
      </div>
    </article>
  );
}
