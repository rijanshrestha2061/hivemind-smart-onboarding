# hivemind-smart-onboarding
# Technical Slice — Day 1 Onboarding

Optional React prototype slice, built by Bishal Basnet (Technical/Feasibility Lead), covering Hypotheses 1, 2, and 4.

## What this is

A single combined screen showing:
- **Guided checklist** (H1) — Day 1 tasks in order
- **Progress tracker** (H2) — % complete bar, updates live as tasks are checked
- **Contextual help** (H4) — tap any task to see who to contact for help with it

This is a demo slice only — not the full product. It exists to show the group's Figma hypotheses are technically buildable, and to support the optional Week 4 demo.

## Files

```
src/
└── DayOneOnboarding.jsx   ← the component
```

## Requirements

- React 18+
- Tailwind CSS configured in the project
- `lucide-react` for icons: `npm install lucide-react`

## How to run it

1. Copy `DayOneOnboarding.jsx` into your project's `src/components/` folder.
2. Import and render it in your app:
   ```jsx
   import DayOneOnboarding from "./components/DayOneOnboarding";

   function App() {
     return <DayOneOnboarding />;
   }
   ```
3. Make sure Tailwind is set up (see your project's `tailwind.config.js`) — this component uses standard utility classes only, no custom config needed.

## Notes

- No backend or API calls — all data is hardcoded in the `TASKS` array at the top of the file, so it's easy to edit sample tasks for a demo.
- Built plain React + Tailwind (not tied to a specific shadcn/ui install) so it drops into any React + Tailwind project without extra setup. If the group's main prototype already uses shadcn/ui components, the checklist rows and help panel can be swapped for `Card`/`Checkbox` components from shadcn with no change to the logic.
- Kept deliberately small per handbook section 39 — this is a slice, not the full onboarding flow.

