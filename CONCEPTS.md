# AURA Home Screen Concepts

Three distinct visual directions for the AURA home experience.

---

## Concept 1: The Study Desk

### Metaphor

A calm, personal desk surface where today's work is already laid out for you — like arriving at a perfectly organized workspace each morning.

### Layout Structure

```
┌─────────────────────────────────────────────────────────┐
│  [Greeting & Time of Day]              [Avatar] [Menu]  │
│  "Good morning, Aryan."                                 │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌─────────────────────────────────────────────────┐    │
│  │                                                 │    │
│  │   TODAY'S FOCUS CARD                            │    │
│  │                                                 │    │
│  │   Carbon Compounds                              │    │
│  │   Chemistry · Chapter 4                         │    │
│  │                                                 │    │
│  │   "One focused session today can improve        │    │
│  │    your readiness by 4%."                       │    │
│  │                                                 │    │
│  │   [ Begin Focus Session → ]                     │    │
│  │                                                 │    │
│  └─────────────────────────────────────────────────┘    │
│                                                         │
│  ┌──────────────────┐  ┌──────────────────────────┐    │
│  │  EXAM CONTEXT    │  │  YOUR READINESS          │    │
│  │                  │  │                          │    │
│  │  Mathematics     │  │  ████████░░  72%         │    │
│  │  12 days away    │  │  Confidence: Growing     │    │
│  │                  │  │                          │    │
│  │  Chemistry       │  │  A soft horizontal       │    │
│  │  18 days away    │  │  progress trail with     │    │
│  │                  │  │  gentle gradient fill    │    │
│  └──────────────────┘  └──────────────────────────┘    │
│                                                         │
│  ┌─────────────────────────────────────────────────┐    │
│  │  THIS WEEK'S RHYTHM                             │    │
│  │                                                 │    │
│  │  Mon  Tue  Wed  Thu  Fri  Sat  Sun              │    │
│  │   ●    ●    ◐    ○    ○    ○    ○               │    │
│  │  Done Done Today                                │    │
│  │                                                 │    │
│  └─────────────────────────────────────────────────┘    │
│                                                         │
│  ┌────────┐ ┌────────┐ ┌────────┐                      │
│  │Revision│ │  Weak  │ │ Notes  │  ← Subtle tool       │
│  │  Queue │ │ Areas  │ │        │    access (icons)     │
│  └────────┘ └────────┘ └────────┘                      │
└─────────────────────────────────────────────────────────┘
```

### Visual Hierarchy

1. **Greeting** — warm, personal, time-contextual (top, small, Raleway)
2. **Today's Focus Card** — dominant element, 60% of viewport, frosted glass surface with soft gradient border (left edge: `#81BFEE` fading to transparent)
3. **Exam Context + Readiness** — two equal cards beneath, smaller, muted backgrounds
4. **Weekly Rhythm** — a gentle dot-based progression, not a chart
5. **Tool Access** — small rounded icons at the bottom, almost hidden until needed

### Visual Treatment

- Background: `#F1F7F8` with a very faint radial gradient of `#81BFEE` at 5% opacity behind the focus card
- Focus Card: White surface, `border-radius: 24px`, thin 1px border in `#81BFEE` at 30% opacity, `backdrop-filter: blur(20px)`
- Supporting cards: Slightly translucent white, `border-radius: 20px`
- CTA Button: `#81BFEE` fill, white text, `border-radius: 32px`, generous padding
- Typography: Greeting in Raleway Bold 28px, Focus topic in Raleway Bold 36px, body in Inter 16px

### User Flow

1. Student opens AURA → sees greeting and immediately knows today's focus
2. The primary action is visible without scrolling — "Begin Focus Session"
3. Glancing below confirms exam timelines and current confidence
4. Weekly rhythm shows momentum without pressure
5. Tools are accessible but never demanding attention

### Rationale

The desk metaphor works because students already think in terms of "sitting down to study." AURA becomes the desk that's already set up — no decision fatigue, no navigation required. The single dominant card prevents overwhelm. Everything below the fold is optional context.

### Emotional Effect

**"Someone organized my desk for me."**

The student feels cared for. The interface communicates that AURA has already thought about what matters today. There's no list to parse, no dashboard to interpret. Just one clear thing to do, and quiet context underneath.

---

## Concept 2: The Learning Path

### Metaphor

A gentle vertical journey — today is the present moment on a continuous path of growth. The student sees where they are, what's immediately ahead, and feels the momentum of how far they've come.

### Layout Structure

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  AURA                          Aryan · Day 47 [Avatar] │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│         ╭─── YOUR PATH ───╮                             │
│         │                  │                            │
│         │   ○ Yesterday    │                            │
│         │   │ Quadratic    │                            │
│         │   │ Equations    │                            │
│         │   │ ✓ Complete   │                            │
│         │   │              │                            │
│         │   ◉ TODAY ←──────┼──── Expanded ────────┐    │
│         │   │              │                      │    │
│         │   │              │   ┌────────────────┐ │    │
│         │   │              │   │                │ │    │
│         │   │              │   │ Carbon         │ │    │
│         │   │              │   │ Compounds      │ │    │
│         │   │              │   │                │ │    │
│         │   │              │   │ Chemistry      │ │    │
│         │   │              │   │ 45 min session │ │    │
│         │   │              │   │                │ │    │
│         │   │              │   │ [Start →]      │ │    │
│         │   │              │   │                │ │    │
│         │   │              │   └────────────────┘ │    │
│         │   │              │                      │    │
│         │   ○ Tomorrow     ├──────────────────────┘    │
│         │   │ Organic      │                            │
│         │   │ Chemistry    │                            │
│         │   │              │                            │
│         │   ○ Thursday     │                            │
│         │     Revision     │                            │
│         │     Block        │                            │
│         │                  │                            │
│         ╰──────────────────╯                            │
│                                                         │
│  ┌──────────────────────────────────────────────────┐   │
│  │  EXAM HORIZON                                    │   │
│  │                                                  │   │
│  │  Mathematics ─────────────●  12 days             │   │
│  │  Chemistry ──────────────────●  18 days          │   │
│  │                                                  │   │
│  │  Confidence: You're on track.                    │   │
│  └──────────────────────────────────────────────────┘   │
│                                                         │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐        │
│  │ Revision   │  │ Strengthen │  │ Reflect    │        │
│  │ Queue (3)  │  │ Weak Areas │  │            │        │
│  └────────────┘  └────────────┘  └────────────┘        │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Visual Hierarchy

1. **The Path** — a soft vertical line (gradient from `#81BFEE` to `#104E7E`) running through the center-left, with nodes representing days
2. **Today's Node** — expanded into a full focus card that breaks out of the path, becoming the dominant element
3. **Exam Horizon** — a minimal horizontal distance visualization showing exams as points on a timeline
4. **Supporting Actions** — rounded pill-shaped cards at the bottom

### Visual Treatment

- The path line: 3px width, gradient fill, subtle glow (`box-shadow: 0 0 20px rgba(129, 191, 238, 0.3)`)
- Past nodes: filled circles with checkmarks, muted colors
- Today's node: larger, pulsing gently with a ring animation, `#81BFEE`
- Future nodes: hollow circles, light gray
- Today's expanded card: white with `border-radius: 24px`, offset to the right of the path, connected by a thin horizontal line
- Exam Horizon: uses horizontal lines terminating at dots — distance represents time, not progress
- Background: `#F1F7F8` with very subtle vertical gradient (slightly warmer at top)

### User Flow

1. Student opens AURA → sees themselves on a journey (Day 47)
2. The path immediately communicates continuity — yesterday was done, today is here, tomorrow is planned
3. Today's focus naturally stands out as the expanded node
4. Scrolling reveals the exam horizon — a calm "how far away are exams?" view
5. Tools sit below as supportive actions, never competing for attention

### Rationale

Students often feel lost in the middle of preparation — they can't see progress or what's ahead. The path metaphor makes time and progress tangible. "Today" is always the brightest point. Past work is validated (checkmarks), and the future feels manageable (just a few nodes ahead). This eliminates the "how much is left?" anxiety.

### Emotional Effect

**"I'm on a journey, and I'm exactly where I should be."**

The path communicates that studying isn't a checklist to crush — it's a road to walk. Every day completed is a step forward. The student sees continuity, not isolated tasks. This builds academic identity and momentum.

---

## Concept 3: The Companion Brief

### Metaphor

AURA as a personal study companion that speaks to you — a single-screen "brief" that reads like a calm, personalized note. Minimal interface, maximum intent. Think of it as opening a letter from a thoughtful tutor each morning.

### Layout Structure

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  ┌─────────────────────────────────────────────────┐    │
│  │                                                 │    │
│  │  AURA · Wednesday, March 12                     │    │
│  │                                                 │    │
│  │  ─────────────────────────────────────────      │    │
│  │                                                 │    │
│  │  Good afternoon, Aryan.                         │    │
│  │                                                 │    │
│  │  Your Mathematics exam is in 12 days.           │    │
│  │  You've covered 72% of the syllabus so far.     │    │
│  │  Today, I'd suggest focusing on:                │    │
│  │                                                 │    │
│  │                                                 │    │
│  │       Carbon Compounds                          │    │
│  │       Chemistry · Chapter 4                     │    │
│  │                                                 │    │
│  │                                                 │    │
│  │  This connects to 3 questions from your weak    │    │
│  │  areas, and one session today will bring your   │    │
│  │  Chemistry readiness to 78%.                    │    │
│  │                                                 │    │
│  │                                                 │    │
│  │       [ Begin Focus Session ]                   │    │
│  │                                                 │    │
│  │                                                 │    │
│  │  ─────────────────────────────────────────      │    │
│  │                                                 │    │
│  │  YOUR WEEK                                      │    │
│  │                                                 │    │
│  │  Mon ━━  Tue ━━  Wed ━─  Thu ──  Fri ──        │    │
│  │  ✓       ✓       now                            │    │
│  │                                                 │    │
│  │  ─────────────────────────────────────────      │    │
│  │                                                 │    │
│  │  READINESS                                      │    │
│  │                                                 │    │
│  │  Mathematics    ████████░░  Strong              │    │
│  │  Chemistry      ██████░░░░  Building            │    │
│  │  Physics        █████░░░░░  Needs Focus         │    │
│  │                                                 │    │
│  │  ─────────────────────────────────────────      │    │
│  │                                                 │    │
│  │  ALSO AVAILABLE                                 │    │
│  │                                                 │    │
│  │  ○ 4 topics ready for revision                  │    │
│  │  ○ 2 weak areas identified                     │    │
│  │  ○ Practice questions available                 │    │
│  │                                                 │    │
│  └─────────────────────────────────────────────────┘    │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Visual Hierarchy

1. **The Brief** — a single, scrollable white card centered on the screen, like a piece of paper or a letter
2. **Narrative Text** — the focus recommendation is delivered as prose, not as a card or widget
3. **Topic Highlight** — the subject name is typographically emphasized (Raleway Bold, larger size, centered)
4. **CTA** — a single, centered button
5. **Supporting Sections** — separated by thin horizontal rules, using minimal formatting

### Visual Treatment

- Single card: white, `border-radius: 32px`, centered with generous margin, soft shadow (`box-shadow: 0 8px 40px rgba(16, 78, 126, 0.06)`)
- Background: `#F1F7F8`
- No secondary cards or floating elements — everything lives within the brief
- Topic name: Raleway Bold 32px, `#104E7E`
- Body text: Inter 17px, `#111618`, line-height 1.7 for readability
- Readiness bars: rounded, thin (8px height), gradient fill from `#81BFEE` to `#22C55E`
- Week visualization: horizontal line with thickness representing completion — thick for done, thin for upcoming
- Separators: 1px lines in `#81BFEE` at 15% opacity
- CTA: `#81BFEE` background, white text, `border-radius: 32px`, centered, generous padding (16px 48px)

### User Flow

1. Student opens AURA → sees a calm, readable brief — like opening a message
2. They read (not scan) — the narrative format encourages comprehension over dashboard-skimming
3. The topic recommendation feels personal because it's embedded in a sentence ("I'd suggest focusing on...")
4. One button. One action. No paradox of choice.
5. Below the fold: week, readiness, and optional actions — all within the same calm surface

### Rationale

Most student tools present information as data. AURA should present information as guidance. The brief format forces a narrative structure — the student reads a short passage and arrives at a clear action. This mirrors how a great tutor communicates: context → recommendation → encouragement → action.

The single-surface design eliminates visual complexity. There are no competing cards, no multi-column layouts, no widgets fighting for attention. Just one thing to read, one thing to do.

### Emotional Effect

**"AURA knows me and is telling me exactly what to do."**

The companion brief feels personal, intelligent, and caring. It's the closest digital analog to having a tutor sit with you and say, "Here's what I think you should work on today, and here's why." The student doesn't analyze — they trust and act.

---

## Comparison Matrix

| Dimension | Study Desk | Learning Path | Companion Brief |
|-----------|-----------|---------------|-----------------|
| **Layout** | Card-based, spatial | Vertical timeline | Single scroll surface |
| **Metaphor** | Physical workspace | Journey/road | Personal letter |
| **Interaction** | Glance & click | Locate self & act | Read & respond |
| **Density** | Medium | Medium-low | Low |
| **Personality** | Organized, prepared | Progressive, motivating | Warm, intelligent |
| **Best for** | Students who like structure | Students who need momentum | Students who need guidance |
| **Risk** | Could feel like a dashboard | Could feel like a timeline tool | Could feel too minimal |

---

## Recommendation

**Concept 3 (Companion Brief)** most radically departs from dashboard patterns and most clearly embodies AURA's emotional goal: "I know exactly what I need to do next." However, **Concept 1 (Study Desk)** may be more practical for daily use as complexity grows.

A hybrid approach — the narrative clarity of the Brief with the spatial organization of the Desk — could be the strongest final direction.

---

## Next Steps

1. Select a concept direction (or hybrid)
2. Create high-fidelity mockups
3. Define component library
4. Prototype the Today's Focus interaction
5. Design the focus session flow
