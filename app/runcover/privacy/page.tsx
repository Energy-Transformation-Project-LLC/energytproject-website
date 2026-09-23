import type { Metadata } from "next";

export const metadata: Metadata = {"title": "Runcover Privacy Policy", "description": "Runcover Privacy Policy \u2014 Energy Transformation Project LLC."};

const sections = [
  [
    "Who operates Runcover",
    "Runcover is operated by Energy Transformation Project LLC. For questions about your data, contact alex@energytproject.com."
  ],
  [
    "Information you provide",
    "Runcover stores your account email, account name, preferences, activities and the content you choose to add. Social has a separate name and username that you choose, along with optional profile information and pictures. Games may store your enrollment, scores, votes and results. If you join Leagues, we store your date of birth for age eligibility and any competition division you select. Your full date of birth is private; eligible public comparisons may show your age band and division when you opt in."
  ],
  [
    "Location and activity recordings",
    "Runcover records precise location, timestamps and available altitude, accuracy and speed while you record an outdoor activity, including when the app is in the background during that activity. It does not continuously track your location outside an active recording. Maps and nearby features may request a foreground location. Reward presence and redemption checks can send a location and measured distance to the server when you use those features. Your phone also keeps account-owned recordings and queued uploads locally so recording can work offline."
  ],
  [
    "Apple Health, with your permission",
    "Runcover can read available running and walking workouts, routes, walking and running distance, heart rate, running measurements, energy and steps. Automatic import checks workout history and future changes; the default history setting includes all available history. Imported workouts, routes and measurements are uploaded to your Runcover account and processed using Supabase for history, analysis and eligible game features. You can choose to share supported derived measurements through Social. Runcover can save an indoor workout recorded in the app to Apple Health. It does not edit or delete other Health data. Revoking Health access stops future access but does not automatically erase copies already saved in Runcover."
  ],
  [
    "How information is used",
    "Information is used to operate your account, record and analyze activities, support maps and games, check activity eligibility and fairness, provide Social features, and handle available rewards and support. Runcover does not use Health data for advertising and does not sell personal information."
  ],
  [
    "Social visibility and sharing",
    "Workouts are not automatically public. Social starts with a Private profile, Friends audience, route sharing Off and Review Before Posting. Your chosen Social name and username remain searchable by signed-in runners even on a Private profile. Depending on your settings, other runners can see your profile details and published posts. You choose supported details to share, including distance, duration, pace, elevation and average heart rate. Automatic sharing requires separate consent and follows your saved settings for future eligible activities. Choosing a Private Social profile does not hide separate participation in games or rankings."
  ],
  [
    "Shared routes and maps",
    "Optional Social route sharing uses a protected route preview with the trimming distance you select. Separate run-map sharing can include the start and end of your route; its confirmation screen explains this. Game territory can also reveal areas where you run. Sharing controls, blocking and deletion cannot remove screenshots or exported copies other people already hold. Consider this before sharing routes or territory near your home."
  ],
  [
    "Zone Wars and your home zone",
    "Zone Wars stores the home zone you select and your confirmation that you live there. Enrollment does not collect a street address or a home-location pin. Qualified activities completed elsewhere can support your home zone. Your username and contribution points appear in that zone’s rankings only if you choose to appear, which links your username to that zone. Individual ballots remain private; zone-level purchases, battles and results become visible through the game."
  ],
  [
    "Service providers",
    "Supabase processes account, activity, location, Health import, Social, reward and support data for Runcover. Apple provides the operating-system services and Health access you authorize. Route-planner coordinates, including drawings and selected pins, can be sent to Mapbox to generate or match walking routes. This is distinct from uploading your recorded activities to your Runcover account."
  ],
  [
    "Deleting activities or your account",
    "You can delete your account from Profile. The server deletion workflow removes the account and associated records. The app also attempts to clear that account’s local queued recordings, active capture and cached data, and reports cleanup failures. Stored photo files may require subsequent cleanup. Apple Health retains its own workouts. Deleting an individual activity is different: it becomes unavailable in normal views while underlying location evidence is scheduled for removal under the configured retention period. Earned rewards and settled game results may remain. Deletion cannot erase copies previously exported or captured by other people."
  ],
  [
    "Data retention and security",
    "Account information and saved activities are retained to provide the features you use until you remove them through the applicable controls. Individual-activity deletion, settled game results and stored photo cleanup follow the separate workflows described above. Removal from active systems does not mean immediate erasure from operational backups. Runcover uses account authentication, access controls and encrypted network connections for its hosted services. No system can guarantee absolute security. Contact alex@energytproject.com promptly if you suspect unauthorized access."
  ],
  [
    "Changes to this notice",
    "The date above identifies this version. We may update this notice as features and data practices change. Where applicable law requires additional notice or consent, an updated notice alone does not replace those requirements."
  ],
  [
    "Your choices and requests",
    "You can change Social and game participation settings, control location and Health permissions in iOS, and use account deletion in Profile. Contact alex@energytproject.com for help with access, correction, export or deletion requests. Never send your password. Avoid emailing a full home address, Health records or a precise route unless those details are needed for a specific support request."
  ]
];

export default function Page() {
  return (
    <article>
      <p className="text-sm font-semibold tracking-wide text-sky-300">RUNCOVER</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Runcover Privacy Policy</h1>
      <p className="mt-4 text-sm text-slate-400">Updated September 23, 2026</p>
      <div className="mt-12 space-y-9">
        {sections.map(([heading, text]) => (
          <section key={heading}>
            <h2 className="text-xl font-semibold text-white">{heading}</h2>
            <p className="mt-3 text-base leading-7 text-slate-300">{text}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
