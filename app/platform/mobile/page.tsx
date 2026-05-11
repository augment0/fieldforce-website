import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { PageHero } from "@/components/sections/page-hero";
import { FeatureSplit } from "@/components/sections/feature-split";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { FAQ } from "@/components/sections/faq";
import { CtaBand } from "@/components/sections/cta-band";
import {
  VizMobileSync,
  VizMobileCV,
} from "@/components/illustrations/platform-vizzes";

export const metadata: Metadata = {
  title: "Mobile Operations",
  description:
    "Built for the field. Not adapted to it. The Fieldforce mobile app is the work order, the camera, the checklist, the dispatch radio — running iOS and Android, online or offline.",
};

export default function MobilePage() {
  return (
    <>
      <Breadcrumb items={[{ href: "/platform", label: "Platform" }]} current="Mobile" />

      <PageHero
        eyebrow="PLATFORM / MOBILE"
        title={
          <>
            Built for the field.
            <br />
            <span className="text-[var(--color-text-2)]">Not adapted to it.</span>
          </>
        }
        body="The Fieldforce mobile app is the work order, the camera, the checklist, the dispatch radio — running on iOS and Android, online or offline, in the cold and in the dark."
        primaryCta={{ href: "/demo", label: "Book a demo" }}
        secondaryCta={{ href: "#download", label: "Download" }}
      />

      <FeatureGrid
        eyebrow="WHAT FIELD CREWS NEED"
        title={<>Four jobs. <span className="text-[var(--color-text-2)]">No noise.</span></>}
        columns={2}
        items={[
          { title: "See your day",       body: "Today's work, with permits, parts, dependencies — at the top of the screen, in the order you'll work it." },
          { title: "Document the work",  body: "Photos, signatures, geofence pings, test results. Captured, validated, attached to the work order." },
          { title: "Close the work",     body: "Evidence pre-validated on-device by computer vision before you leave the site. No surprises in QA." },
          { title: "Stay in sync",       body: "Offline-first. Drop a connection at 3pm, sync at 6pm. Nothing is lost. Nothing is duplicated." },
        ]}
      />

      <FeatureSplit
        eyebrow="OFFLINE-FIRST, BY DESIGN"
        title={<>Designed for tower climbers, <span className="text-[var(--color-text-2)]">fiber techs, and rural EV installers.</span></>}
        body={
          <p>
            Fieldforce was built mobile-first from day one. Every feature in the
            web app exists in the mobile app, and every interaction works
            offline. The sync layer handles conflict resolution when you reconnect
            — no UI lockups, no lost photos.
          </p>
        }
        bullets={[
          "Local-first data model with conflict-free merge",
          "Photo upload resumes after reconnect",
          "Day-long battery profile, low-power mode",
          "Bluetooth + NFC support for asset scanning",
        ]}
        visual={<VizMobileSync />}
      />

      <FeatureSplit
        reverse
        eyebrow="EVIDENCE ON-DEVICE"
        title={<>Computer vision runs on the phone. <span className="text-[var(--color-text-2)]">Before the crew leaves the site.</span></>}
        body={
          <p>
            The Evidence agent runs CV models on-device. Closure missing from
            the splice photo? Antenna placement off-spec? The field crew sees
            it instantly, fixes it before driving away — not three weeks later
            when the work order is rejected in QA.
          </p>
        }
        bullets={[
          "On-device inference; no cellular dependency",
          "94% first-pass QA accuracy on splice closures",
          "Falls back to cloud verification on reconnect",
        ]}
        cta={{ href: "/agents/evidence", label: "How Evidence works" }}
        visual={<VizMobileCV />}
      />

      <FeatureGrid
        eyebrow="DESIGNED FOR THE REAL FIELD"
        title={<>Bilingual. Accessible. <span className="text-[var(--color-text-2)]">Tested in the rain.</span></>}
        columns={3}
        items={[
          { title: "Five languages",        body: "English, Spanish, Arabic, Urdu, German. Right-to-left support throughout." },
          { title: "Built for gloves",      body: "Larger touch targets, no fine-grained gestures. Voice input on every text field." },
          { title: "High-contrast mode",    body: "Outdoor sun, headlamps, night work. Switchable per-user, persisted across sessions." },
          { title: "Push-to-receive",       body: "Dispatch reroute? Push notification with one-tap acknowledgment." },
          { title: "Contractor identity",   body: "Limited-scope access for contractors. Auto-revoked at job close." },
          { title: "iOS + Android, native", body: "Not a wrapper. Native apps with native performance." },
        ]}
      />

      <FAQ
        eyebrow="MOBILE FAQ"
        title="Questions field operations leaders ask."
        items={[
          { q: "Does the app work offline?", a: <>Yes — fully. Local-first data model, conflict-free merge on reconnect, photo upload resume.</> },
          { q: "How do contractors get access?", a: <>Per-job scoped identity. Issued at job assignment; revoked at job close. No persistent contractor accounts to manage.</> },
          { q: "Can we white-label the app?", a: <>For Enterprise tier customers running under their own brand, yes. The CSS/branding layer is configurable per tenant.</> },
          { q: "What about MDM / enterprise device management?", a: <>Compatible with Microsoft Intune, Jamf, and major MDM platforms. Configuration policies enforced server-side.</> },
        ]}
      />

      <CtaBand
        eyebrow="SEE IT ON A REAL CREW"
        title={<>The field deserves <span className="grad-text">first-class software.</span></>}
        primary={{ href: "/demo", label: "Book a demo" }}
        secondary={{ href: "mailto:engineering@fieldforce.com", label: "Talk to engineering" }}
      />
    </>
  );
}
