import type { Metadata } from "next";

export const metadata: Metadata = {"title": "Runcover Consumer Health Data Privacy Notice", "description": "Runcover Consumer Health Data Privacy Notice — Energy Transformation Project LLC."};

const sections: [string, string[]][] = [
  [
    "Who we are",
    [
      "Energy Transformation Project LLC operates Runcover. Contact admin@energytproject.com for health-data privacy requests. This separate notice describes our consumer health data practices and rights under applicable consumer health privacy laws, including Washington's My Health My Data Act and Nevada's consumer health data law where they apply."
    ]
  ],
  [
    "Categories, sources, and purposes",
    [
      "Depending on features and permissions, we collect fitness activities and workout types; dates and times; distance, duration, pace, speed, elevation, and route coordinates; heart rate and supported running measurements; steps, energy, and flights climbed; and summaries derived from those records. Date of birth and a selected competition division are collected for optional League eligibility and comparisons. Account identifiers and other information linked to these fitness records can also be consumer health data. A precise route can reveal or suggest visits to sensitive places.",
      "Sources are information you enter or record in Runcover; device location and motion sensors; Apple Health workouts, routes, and measurements you permit us to import; interactions with fitness, social, and competition features; and calculations from those records. We use these categories for requested recording and import, history, maps, route planning, metrics, fitness analysis, and eligible social and competition features, and to check activity integrity and support those services. Health data is not a general-purpose advertising dataset. Apple Health and Motion and Fitness information is not used for advertising, marketing, or use-based data mining."
    ]
  ],
  [
    "Categories shared and recipients",
    [
      "Supabase processes fitness records, precise routes, linked account information, and derived measurements for our backend. Apple receives an indoor workout when you request a supported Health write and operates the Health access you authorize. Mapbox can receive selected route-planning drawings or pins when you request directions or route matching. Enabled map or notification providers receive information needed for a requested map or notification; a notification can refer to fitness activity or participation. Authorized personnel can access health data necessary to support the requested service or address a security issue.",
      "Other runners or recipients you choose can receive selected activity summaries, supported measurements, route previews, or exported routes. Game participants can see the participation or territory information a feature makes visible; private Social settings do not hide separate game participation. Full birth dates are not displayed in rankings. Ordinary merchant placement does not provide access to your complete Health or route history. We do not currently sell consumer health data. No separate affiliate is currently identified as a recipient of Runcover consumer health data."
    ]
  ],
  [
    "Consent and withdrawal",
    [
      "Device permissions control future location, Apple Health, and motion access. Import settings control supported imports; Social and game controls govern available optional sharing. Withdraw permission in device settings, turn off the relevant optional feature, or email admin@energytproject.com for help stopping future collection or sharing. Withdrawing permission does not delete existing copies. Where law requires consent beyond processing necessary for a service you request, it must precede that collection or sharing. A privacy notice is not that consent. Additional categories, purposes, or recipients require appropriate disclosure and any required new consent. Health-data sales, if ever legally permitted and introduced, would require separate valid authorization where required; this notice does not provide it or override Apple's restrictions."
    ]
  ],
  [
    "Health-data rights and requests",
    [
      "Email admin@energytproject.com with the subject Health data privacy request. Identify whether you want to confirm collection, sharing, or sale; access health data and applicable recipient information; withdraw consent; or delete health data. Use your existing account email where possible. We take reasonable steps to authenticate requests without requiring a new account. Do not email your password or full Health history. Profile offers account deletion; contact us if you need a health-data deletion not completed by that workflow.",
      "Applicable law governs responses and required deletion, including notifying recipients and deleting qualifying archived or backup copies. For requests covered by Washington law, responses are due within 45 days of receipt, subject to a permitted additional 45 days with notice and reasons; backup deletion may be delayed only as permitted by law, up to six months after authentication. Covered access requests are free up to twice annually, subject to the law's provisions for unfounded, excessive, or repetitive requests. These are legal requirements, not a claim that every in-app deletion instantly removes all copies.",
      "If we decline a request, email admin@energytproject.com with the subject Health data privacy appeal and identify the decision. For an appeal covered by Washington law, we must explain the outcome in writing within 45 days. If denied, you can contact the Washington Attorney General at https://www.atg.wa.gov/file-complaint. We do not unlawfully discriminate against people for exercising applicable health-data rights. Exceptions are limited by applicable law."
    ]
  ],
  [
    "Correction, tracking, and policy updates",
    [
      "Email admin@energytproject.com to review or request correction of health data. Editing a Runcover record does not change the original Apple Health record or a recipient’s independent copy. We process health data through the device and backend workflows described above, including storage, analysis, and requested disclosures. Runcover does not currently enable third-party advertising trackers to collect consumer health data across different websites or services. Service providers still receive the requests described here. Material changes will be published with a new effective date and communicated to affected users through the service or account email before the new practice begins, together with any required new consent."
    ]
  ]
];

export default function Page() {
  return (
    <article>
      <p className="text-sm font-semibold tracking-wide text-sky-300">RUNCOVER</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Runcover Consumer Health Data Privacy Notice</h1>
      <p className="mt-4 text-sm text-slate-400">Updated September 30, 2026</p>
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
