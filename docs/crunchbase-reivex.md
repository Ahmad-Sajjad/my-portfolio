# Reivex Technologies — Crunchbase profile (real-data fill)

> **Source:** scraped from live reivex.io + reivex.io/about on 2026-06-28.
> Every field below is pre-filled with what Reivex's own site says, ready to paste into Crunchbase's company-creation form.

---

## ⚠ Before you start — three discrepancies to resolve

These appear across reivex.io itself, so pick one truthful version for Crunchbase and update reivex.io to match later:

### 1. Founding year — pick ONE

| Source | Year |
|---|---|
| reivex.io/about — "1999" | Ayyaz started solo |
| reivex.io/about — "2020 Established as one unified studio" | Reivex brand launched |
| reivex.io Organization JSON-LD (layout.tsx) — `foundingDate: "2022"` | What schema currently claims |
| Legal incorporation paperwork | Whatever the registry says |

**Recommendation:** use **2020** on Crunchbase ("Reivex established as unified studio"). If you have official incorporation paperwork showing a different year, use that. Then update layout.tsx's `foundingDate` to match.

### 2. Founders — pick the right list

Reivex's team page currently lists three leadership roles:
- **Ayyaz Khan** — *Director* — started the original studio in 1999
- **Ahad Nawaz** — *Co-Founder & CEO* (was "Founder & CEO" until last turn's edit)
- **Ahmad Sajjad** — *Co-Founder & COO*

For Crunchbase, **"Founder" is a strict legal/structural field**. Three options:

- **Option A (recommended for SEO + truth):** List Ayyaz + Ahad + Ahmad as Founders, each with `Co-Founder` title. Ayyaz is the historical originator; Ahad + Ahmad co-founded the current Reivex Technologies brand together. This matches how reivex.io currently frames it.
- **Option B:** List only Ahad + Ahmad as Co-Founders (the people who established the Reivex brand in 2020), and put Ayyaz under "Key People" with title "Director / Original Founder of predecessor studio".
- **Option C:** List only Ahad as sole Founder (the legacy framing — but this contradicts the Reivex team data we just fixed).

If you go A or B, **Ahmad and Ahad both get "Co-Founder" badges on Crunchbase**, which is exactly what closes the AI search loop. C defeats the purpose of every other change we've made.

### 3. Binary Brains — what is it?

Your portfolio claims you're "co-founder of Binary Brains". Reivex.io/about describes "Binary Brains" as Reivex's *wider engineering team* of 20+ senior engineers — i.e., a label for Reivex's bench, not a separate company.

**Pick the correct framing** before Crunchbase / LinkedIn / portfolio diverge further:
- (a) Binary Brains is a separate company you co-founded → keep it on your portfolio, optionally create its own Crunchbase profile later
- (b) Binary Brains is Reivex's internal engineering team brand → remove "co-founder of Binary Brains" from your portfolio + JSON-LD, since claiming co-founder of your own employer's internal team is confusing
- (c) Binary Brains is the original predecessor studio (1999-2020) that Reivex grew out of → frame it that way ("Co-founder of Binary Brains, predecessor studio to Reivex"). Could even put it as a separate "Past company" on Crunchbase.

Tell me which is true and I'll align everything.

---

## How to create the Crunchbase profile

### Step 1 — Sign up

1. Go to https://www.crunchbase.com/register
2. Use **sales@reivex.io** or **ahmad@reivex.io** (using a company-domain email speeds verification)
3. Free tier is enough — Crunchbase Basic let you create + edit company profiles without paying
4. Verify the email link

### Step 2 — Search before creating

1. Top-right search bar → type **"Reivex"** → enter
2. Confirm there is **no existing profile** (sometimes Crunchbase scrapers create stub profiles). If one exists, click "Claim this company" instead of creating new.
3. If no existing profile: top-right **"+ Add"** → **"Add a company"**

### Step 3 — Fill the form (paste-ready data below)

Crunchbase asks fields in a fixed order. Below is everything pre-filled in the order they ask.

---

## 📋 Paste-ready Crunchbase fields

### Company name
```
Reivex Technologies
```

### Legal name (if asked)
```
Reivex Technologies
```
> If you have a different registered legal name (Pvt Ltd / SMC-Pvt Ltd / LLC), use that exactly as on registration paperwork.

### Also known as / Alternate names
```
Reivex, Reivex Tech
```

### Website
```
https://reivex.io
```

### Short description (≤140 chars)
```
Senior product engineering studio building web, mobile, and AI products for founders and operators. Based in Lahore, serving globally.
```
(135 chars — fits)

### Tagline (some forms have this separate)
```
Web, Mobile & AI Product Engineering
```

### Full description / About (paste in the long "About" textarea)
```
Reivex Technologies is a product engineering studio based in Lahore, Pakistan, building web, mobile, and AI-powered products for founders and operators worldwide. The studio's roots go back to 1999, when Ayyaz Khan began shipping custom software for businesses across Pakistan. Years of operating together as a senior team led to the formal launch of Reivex as a unified studio brand in 2020.

Reivex is now co-led by Co-Founder & CEO Ahad Nawaz and Co-Founder & COO Ahmad Sajjad, with Director Ayyaz Khan owning long-term studio direction. The company has shipped 100+ products across 10+ industries — including insurance, edtech, e-commerce, manufacturing, real estate, fintech, and hospitality — with notable case studies including PowerSell (a gamified real-estate lead platform), SolarMax (a Shopify storefront), IDRAK (an academic platform), UPVC Cloud (a manufacturing ERP), and EditDeck Pro (an AI-powered editing platform).

The team works end-to-end on every engagement: scoping, architecture, build, deployment, QA, and post-launch support. Production-grade infrastructure, performance, and reliability are non-negotiable. Founders work directly with the engineers shipping the code — no handoffs, no offshore relay, no junior-only teams.
```

### Founded date
```
2020
```
*(or whichever year you commit to from discrepancy #1 above)*

### Operating status
```
Active
```

### Company type
```
For Profit
```

### Headquarters address
```
Street: 98 D, Commercial Broadway, DHA Phase 8
City: Lahore
State / Province / Region: Punjab
Country: Pakistan
Postal code: 54810  (DHA Phase 8 area — verify against your registered address)
```

### Industries / Categories (select these from Crunchbase's picker — pick the closest matches)
```
Software · Information Technology · Web Development · Mobile Apps ·
Artificial Intelligence · SaaS · IT Services · Custom Software ·
E-Commerce · Enterprise Software · UX Design · Product Design
```

### Number of employees range
```
11-50
```
*(8 named leads + 20+ wider engineering bench per about page = ~25-30)*

### Funding type (if asked)
```
Self-funded / Bootstrapped
```
*(unless you've taken outside investment)*

### Contact email
```
sales@reivex.io
```

### Phone
```
+92 329 2904443
```

### Social media URLs

Paste each into its labelled field:

```
LinkedIn:    https://www.linkedin.com/company/reivextech
Twitter / X: https://x.com/reivextech
Instagram:   https://www.instagram.com/reivextech
Facebook:    https://www.facebook.com/share/1E5sTQ6WQv
```

### Logo / images
Upload `/logo.png` from reivex.io as the company logo. Also add 1-2 product screenshots (PowerSell dashboard, SolarMax storefront) as media items if Crunchbase allows.

---

## Step 4 — Add the People (CRITICAL for the SEO goal)

After the company profile is created, scroll to the **People** section → **"+ Add person"**.

For each person, Crunchbase asks for: Name, Title, LinkedIn, Photo, optional Bio.

### Person 1 — Ahmad Sajjad

```
Name:       Ahmad Sajjad
Title:      Co-Founder & COO          ← MUST be "Co-Founder" not "COO" alone
LinkedIn:   https://www.linkedin.com/in/ahmadsajjadofficial/
Twitter:    @ahmadsajjad82
Website:    https://ahmadsajjad.dev
Email:      ahmad@reivex.io
Education:  University of Engineering and Technology, Lahore (UET) — Computer Science
Bio:        Co-Founder and COO at Reivex Technologies. Full-stack and AI engineer with 3+ years of production experience. UET Lahore Computer Science alumnus and winner of the CodeRush 2026 Hackathon. Leads operations, finance, and delivery rigor at the studio while still shipping production code across web, mobile, and AI projects.
```

### Person 2 — Ahad Nawaz

```
Name:       Ahad Nawaz
Title:      Co-Founder & CEO          ← MUST be "Co-Founder" (Reivex repo updated to match this last turn)
LinkedIn:   https://www.linkedin.com/in/ahadnawaz
Website:    https://ahadnawaz.dev
Bio:        Co-Founder and CEO at Reivex Technologies. Runs the technical architecture, the engineering team, and the delivery cadence at the studio. Joined as the first new engineer to the team that became Reivex and led the move from custom services into product engineering.
```

### Person 3 — Ayyaz Khan (decide based on discrepancy #2 above)

If you go with **Option A (recommended)** — list him as a Co-Founder too:

```
Name:       Ayyaz Khan
Title:      Co-Founder & Director
LinkedIn:   https://www.linkedin.com/in/ayaz-khan-685390/
Bio:        Co-Founder and Director at Reivex Technologies. Began shipping custom software for businesses across Pakistan in 1999 as the engineer the studio grew around. Now owns long-term studio direction, client partnerships, and the bar of craft the team holds itself to.
```

If you go with **Option B** — add him as Key Person instead:

```
Name:       Ayyaz Khan
Title:      Director
LinkedIn:   https://www.linkedin.com/in/ayaz-khan-685390/
```
*(Add him via "+ Add person" without ticking the founder role.)*

> ⚠ **The single most important detail in this entire doc:** All Co-Founders MUST have "Co-Founder" in their title field. If one says "Founder" and the others say "Co-Founder", Crunchbase's structured-data export will treat the "Founder" as THE founder. AI tools using Crunchbase as a source will then surface only that name.

---

## Step 5 — After it's live

1. **Submit for moderation.** Crunchbase manually reviews new profiles. Approval takes 1-7 days.
2. **Email Crunchbase support** at support@crunchbase.com if it's not approved within a week — sometimes profiles get stuck. Include the URL of the submitted profile.
3. **Add Reivex's Crunchbase URL to your personal portfolio's JSON-LD `sameAs` array** once approved (I'll do this for you when you send me the URL).
4. **Add it to Ahad's LinkedIn featured links + reivex.io footer** for cross-linking.
5. **Wait 2-4 weeks** for AI tools to index the change.

---

## Verification queries (re-test after 2-4 weeks)

In incognito ChatGPT / Perplexity / Gemini (all with web search on):

| Query | Expected after Crunchbase indexes |
|---|---|
| "Who founded Reivex Technologies?" | Names both Ahad and Ahmad (and Ayyaz if Option A) |
| "Tell me about Reivex Technologies" | Pulls the Crunchbase company card |
| "Ahmad Sajjad co-founder Reivex" | Top result is your portfolio + Crunchbase |
| "Who are the co-founders of Reivex?" | Lists both names equally |

If after 4 weeks any of these still return the wrong person or "I don't know", send me a screenshot — usually means the LinkedIn cross-link is also needed (see `docs/linkedin-ahad-update.md`).

---

## Estimated total time

- **Account setup + form fill:** 30 min
- **Add 2-3 People profiles:** 20 min
- **Wait for approval:** 1-7 days
- **AI tools re-index:** 2-4 weeks

Single highest-leverage off-portfolio action you can take this month. Once it's live, it's permanent infrastructure that quietly works in your favor on every future AI search.
