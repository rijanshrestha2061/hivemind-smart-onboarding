# Hypotheses — Smart Onboarding (grounded in real interviews)

## Hypothesis 1 — Guided Day 1 checklist

We believe that a personalised, prioritised Day 1 checklist will help new starters know what to focus on first, because P02, P05, and P06 all described being given equal-weight access to many systems with no explanation of what mattered most.

[Feasibility: LOW — static checklist UI, no backend needed. Strongest Week 3 slice candidate.]

## Hypothesis 2 — Progress visibility

We believe that showing a visible progress tracker will help new starters feel confident about what's done and what's next, because P03 and P06 both described finishing their checklist without knowing their next priority.

[Feasibility: LOW–MEDIUM — progress bar/tracker, simple local state. Good Week 3 slice candidate.]

## Hypothesis 3 — Single onboarding hub / source of truth

We believe that a centralised information hub will reduce time spent searching, because all 6 participants independently described splitting their search across 3+ systems with no single source of truth, and 4 of 6 described real version-confusion incidents that cost real time (up to an hour each).

[Feasibility: MEDIUM–HIGH — needs a real document index/data model behind it to be meaningful. Too broad for a Week 3 code slice; represent in Figma with static sample data only.]

## Hypothesis 4 — Contextual help / "who to ask"

We believe that surfacing the right contact for each task will reduce time lost to uncertainty, because P02 and P06 both described not knowing who owned a process or who to ask without worrying about interrupting the wrong person.

[Feasibility: LOW–MEDIUM — static help/contact list tied to each task. Buildable as a small component.]

## Hypothesis 5 — Role-specific content over generic training

We believe that role-specific onboarding content will feel more useful than generic training, because P02, P06, and P04 all separately described mandatory compliance training as necessary but disconnected from their actual day-to-day work.

[Feasibility: MEDIUM–HIGH — needs real content variation per role, ideally driven by a data structure. Mock with 1–2 hardcoded role variants for a demo rather than a full system.]

## Hypothesis 6 — Transparent, source-cited AI support with clear limits

We believe that an AI assistant will only be trusted if it cites sources and shows last-updated dates, and must hand off to a human for HR, salary, disciplinary, and legal matters, because this exact pattern was independently raised by all 6 participants.

[Feasibility: MEDIUM — a real AI backend is out of scope, but a UI-only mockup showing "source: [doc], updated [date]" next to a fake AI answer is realistic and cheap to build. No real AI integration needed for the demo.]
