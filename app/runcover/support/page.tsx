import type { Metadata } from "next";

export const metadata: Metadata = {"title": "Runcover Support", "description": "Runcover Support \u2014 Energy Transformation Project LLC."};

const sections = [
  [
    "Contact Runcover",
    "Email alex@energytproject.com for help with Runcover. Include your app version, what you were doing, what happened and approximately when it happened. Never send your password. Avoid sending Health records, a home address or precise routes unless they are needed to investigate a specific issue."
  ],
  [
    "Recording and Apple Health",
    "Start and finish an activity in Runcover, or grant Apple Health access to import supported workouts. Imports and games use their own qualification rules. A saved activity may appear in your history without qualifying for every game. Check Health access in iOS Settings if a workout is missing."
  ],
  [
    "Zone Wars",
    "Choose the zone where you live and confirm enrollment. You do not need to provide a street address. Eligible activities count for your home zone even when completed elsewhere. New seasons start without weapons. Your zone earns Supplies during the opening training period, votes on purchases on Wednesday and chooses orders on Saturday. The game screen shows the next deadline and battle results. Votes and challenges belong to your own zone; other zones show public health, shields, visible weapons and runners who chose to appear."
  ],
  [
    "Sharing and privacy",
    "Social starts Private, with Review Before Posting and route sharing Off. Choose the audience and details before posting. Your chosen Social name and username remain searchable by signed-in runners. Game enrollment and rankings have separate visibility controls. Shared maps or territory can reveal where you run."
  ],
  [
    "Area Capture and Reveal",
    "Area Capture uses qualifying outdoor loops to claim territory. Reveal follows eligible outdoor activity routes. Their qualification rules differ from Zone Wars and from your personal activity history. See the explanation inside each game if an activity does not count."
  ],
  [
    "Rewards",
    "Available rewards depend on the reward card and current launch status. A disabled rewards launch does not automatically cancel an existing reservation or claim; its displayed expiry and redemption terms still apply. Contact support if a redemption does not match what you were shown."
  ],
  [
    "Safety and fair play",
    "Runcover is a fitness and game app, not medical advice or an emergency service. Choose an effort and route appropriate to your condition and surroundings; stop if you feel unwell. Do not trespass, ignore traffic rules or push through injury to earn points. Zone Wars battles and weapons are fictional. Supplies are game points and cannot be redeemed for cash. Use your own activities and home zone, and do not fabricate recordings or harass other runners. Use the in-app report and block controls for abusive content or contact support."
  ],
  [
    "Deleting your account",
    "Open Profile and choose Delete my account. This is different from deleting one activity. Account deletion removes the account through the server workflow and attempts to clear local data owned by that account. Apple Health keeps its own workouts. Contact support if the app reports a cleanup problem."
  ]
];

export default function Page() {
  return (
    <article>
      <p className="text-sm font-semibold tracking-wide text-sky-300">RUNCOVER</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Runcover Support</h1>
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
