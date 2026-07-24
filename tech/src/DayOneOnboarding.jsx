import { useState, useMemo } from "react";
import { CheckCircle2, Circle, HelpCircle, ChevronRight, Sparkles } from "lucide-react";

/**
 * DayOneOnboarding — Smart Onboarding technical slice
 * Covers Hypothesis 1 (fully) and Hypothesis 3 (partially) from docs/hypotheses.md
 *
 * H1 (Guided first steps + progress visibility) -> task checklist + progress tracker
 * H3 (Trustworthy, contextual support)           -> per-task help/contact panel
 *    Note: only the "who to ask" half of H3 is built here. The AI-assistant
 *    half of H3 (source-cited answers) is not included in this slice — see
 *    tech/README.md for details.
 *
 * Not covered by this slice: H2 (centralised information hub), H4 (role-specific
 * content) — both flagged as too broad for a Week 3 code slice, represented in
 * Figma only with static sample data.
 *
 * Palette (project design system):
 *   Primary accent:     #0F6E56 (teal)
 *   AI-content tag:      #7F77DD (purple)
 */

const TASKS = [
  {
    id: "t1",
    label: "Set up your workstation and login",
    help: "IT Helpdesk",
    contact: "it-support@company.com",
    aiSuggested: false,
  },
  {
    id: "t2",
    label: "Meet your onboarding buddy",
    help: "Your manager can introduce you",
    contact: "Ask in #new-starters",
    aiSuggested: true,
  },
  {
    id: "t3",
    label: "Complete your first team check-in",
    help: "Team Lead",
    contact: "Scheduled automatically",
    aiSuggested: false,
  },
  {
    id: "t4",
    label: "Review your role's Week 1 guide",
    help: "HR Onboarding Team",
    contact: "hr@company.com",
    aiSuggested: true,
  },
];

function TaskRow({ task, done, onToggle, active, onSelect }) {
  return (
    <li
      className={`group flex items-start gap-3 rounded-xl border px-4 py-3 transition-colors cursor-pointer ${
        active ? "border-[#0F6E56] bg-[#0F6E56]/[0.04]" : "border-slate-200 bg-white hover:border-slate-300"
      }`}
      onClick={() => onSelect(task.id)}
    >
      <button
        aria-label={done ? "Mark task incomplete" : "Mark task complete"}
        onClick={(e) => {
          e.stopPropagation();
          onToggle(task.id);
        }}
        className="mt-0.5 shrink-0"
      >
        {done ? (
          <CheckCircle2 className="h-5 w-5 text-[#0F6E56]" strokeWidth={2} />
        ) : (
          <Circle className="h-5 w-5 text-slate-300 group-hover:text-slate-400" strokeWidth={2} />
        )}
      </button>

      <div className="flex-1 min-w-0">
        <p className={`text-sm font-medium ${done ? "text-slate-400 line-through" : "text-slate-800"}`}>
          {task.label}
        </p>
        {task.aiSuggested && (
          <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-[#7F77DD]/10 px-2 py-0.5 text-[11px] font-medium text-[#7F77DD]">
            <Sparkles className="h-3 w-3" />
            AI recommended next
          </span>
        )}
      </div>

      <ChevronRight className="h-4 w-4 text-slate-300 mt-1 shrink-0" />
    </li>
  );
}

export default function DayOneOnboarding() {
  const [completed, setCompleted] = useState({});
  const [activeTaskId, setActiveTaskId] = useState(TASKS[0].id);

  const toggleTask = (id) =>
    setCompleted((prev) => ({ ...prev, [id]: !prev[id] }));

  const doneCount = useMemo(
    () => Object.values(completed).filter(Boolean).length,
    [completed]
  );
  const total = TASKS.length;
  const percent = Math.round((doneCount / total) * 100);

  const activeTask = TASKS.find((t) => t.id === activeTaskId);

  return (
    <div className="mx-auto max-w-2xl p-6 font-sans">
      <header className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#0F6E56]">
          Day 1 · Smart Onboarding
        </p>
        <h1 className="mt-1 text-2xl font-semibold text-slate-900">
          Welcome, Christoph 👋
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Here's what to focus on today. Tap a task for help.
        </p>
      </header>

      {/* H1 — Progress visibility (merged into guided first steps) */}
      <div className="mb-6 rounded-xl border border-slate-200 bg-white p-4">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="font-medium text-slate-700">
            {doneCount} of {total} tasks complete
          </span>
          <span className="font-semibold text-[#0F6E56]">{percent}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-[#0F6E56] transition-all duration-300"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-5">
        {/* H1 — Guided checklist */}
        <ul className="sm:col-span-3 flex flex-col gap-2">
          {TASKS.map((task) => (
            <TaskRow
              key={task.id}
              task={task}
              done={!!completed[task.id]}
              onToggle={toggleTask}
              active={task.id === activeTaskId}
              onSelect={setActiveTaskId}
            />
          ))}
        </ul>

        {/* H3 — Contextual support (who to ask) */}
        <div className="sm:col-span-2 rounded-xl border border-slate-200 bg-slate-50 p-4 h-fit sticky top-4">
          <div className="mb-2 flex items-center gap-2 text-slate-700">
            <HelpCircle className="h-4 w-4" />
            <span className="text-sm font-semibold">Need a hand?</span>
          </div>
          {activeTask && (
            <>
              <p className="text-sm text-slate-600">{activeTask.label}</p>
              <div className="mt-3 rounded-lg bg-white border border-slate-200 p-3">
                <p className="text-xs text-slate-400">Who to ask</p>
                <p className="text-sm font-medium text-slate-800">{activeTask.help}</p>
                <p className="mt-1 text-xs text-slate-500">{activeTask.contact}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
