# AI Learning Exploration

An interactive front-end learning application that makes modern AI systems explainable and interpretable for curious builders, students, and practitioners.

## Project Goal

Build a web experience where people can:

- Explore how large language models (LLMs), generative AI systems, and AI agents work.
- Drill down from high-level concepts into the underlying mechanics.
- Interact with visual simulations of model behavior.
- Build intuition for the statistics, math, and system design behind AI outputs.

## Product Principles

- **Interactive first**: users learn by manipulating parameters and seeing immediate effects.
- **Layered explainability**: every page supports “beginner”, “intermediate”, and “deep dive” levels.
- **Interpretable visuals**: each diagram includes tooltips, plain-language summaries, and equations.
- **Traceable workflows**: each generated response can be inspected as a step-by-step pipeline.

## Proposed Information Architecture

### 1) AI Foundations

- Probability basics (distributions, sampling, entropy)
- Linear algebra intuition (vectors, embeddings, similarity)
- Optimization basics (loss, gradient descent)

### 2) LLM Anatomy (Drill-down Tree)

- Tokenization
  - Text to tokens
  - Subword segmentation visualizer
- Embeddings
  - Embedding space explorer
  - Cosine similarity playground
- Transformer blocks
  - Attention heads animation
  - Feed-forward network flow
  - Residual connections and layer norm
- Training process
  - Next-token prediction simulator
  - Loss curve and optimization dynamics
- Inference
  - Decoding strategies (greedy, temperature, top-k, top-p)
  - Logit lens and token probability bar charts

### 3) Generative AI Systems

- Prompting patterns and prompt decomposition
- Retrieval-augmented generation (RAG) pipeline walkthrough
- Tool calling and function orchestration
- Evaluation and guardrails (quality, safety, hallucination checks)

### 4) AI Agents

- Agent loop (plan → act → observe → reflect)
- Memory types (short-term context vs long-term memory)
- Tool use simulation
- Multi-agent coordination visualizer

## Core Interactive Features

- **Pipeline Inspector**: click any stage of generation to inspect inputs/outputs.
- **Attention Heatmap Lab**: visualize token-to-token attention over time.
- **Sampling Control Panel**: adjust temperature/top-p and compare generated continuations.
- **Agent Trace Replay**: step through an agent run with intermediate state snapshots.
- **Math Behind the Scenes**: expandable cards for equations, definitions, and intuition.

## Suggested Tech Stack

- **Framework**: React + TypeScript (optionally Next.js)
- **Visualization**: D3.js, Recharts, or Observable Plot
- **Animation**: Framer Motion
- **State Management**: Zustand or Redux Toolkit
- **Styling**: Tailwind CSS
- **Content Layer**: MDX for concept articles + interactive embeds

## MVP Scope (Phase 1)

Ship a focused prototype with:

1. LLM pipeline overview page (tokenization → embeddings → attention → decoding).
2. Two fully interactive modules:
   - Tokenization playground
   - Decoding strategy simulator
3. Agent loop explainer with one step-through demo.
4. Progressive difficulty toggles (beginner/intermediate/deep dive).

## Milestones

- **Milestone 1**: UX wireframes and concept map
- **Milestone 2**: Front-end scaffold + routing + design system
- **Milestone 3**: First two interactive modules
- **Milestone 4**: Agent trace visualization
- **Milestone 5**: Content polishing, accessibility, and instrumentation

## Success Criteria

- Users can explain the full high-level LLM pipeline after one session.
- Users can identify how decoding settings change model outputs.
- Users can describe a basic agent execution loop with tools and memory.
- Each module has clear “what is happening” and “why it matters” explanations.

## AI Gap Action Work Plan (Quality, Risk, and Compliance)

Before building additional features, we will run a structured AI Gap Action plan to identify weaknesses, test them, and close the loop with measurable improvements.

### 1) Scope and Risk Inventory

For each module (LLM, GenAI, Agents), define expected behavior and likely failure modes:

- Concept misunderstanding risk (users leave with incorrect mental models)
- Interaction risk (controls confuse more than educate)
- Mathematical interpretation risk (charts/equations are technically wrong or ambiguous)
- Safety risk (examples accidentally normalize harmful/unreliable AI behavior)
- Accessibility risk (content is not usable across devices or assistive technologies)

### 2) Test Matrix for Every New Feature

Each feature PR must include tests across five lenses:

1. **Functional correctness**
   - UI behavior, state transitions, and deterministic calculations are correct.
2. **Educational accuracy**
   - Definitions, equations, and explanations are reviewed against trusted references.
3. **Interpretability quality**
   - The feature explains both *what happened* and *why it happened*.
4. **Safety and misuse resistance**
   - Simulations and examples avoid unsafe claims and include caveats where needed.
5. **Accessibility and usability**
   - Keyboard navigation, contrast, reduced motion support, and mobile layout checks.

### 3) Definition of Done (DoD) for New Features

A feature is complete only when all are true:

- Acceptance criteria are met for beginner/intermediate/deep-dive modes.
- Unit tests pass for calculations and state logic.
- UI integration tests pass for core interactions.
- Content review is completed for technical correctness and clarity.
- Risk checklist is signed off with known limitations documented.

### 4) Weakness Tracking and Mitigation Loop

Maintain a living **AI Gap Register** with the following fields:

- Gap ID
- Module / feature
- Weakness description
- Severity (Low/Medium/High)
- User impact
- Root cause hypothesis
- Mitigation action
- Owner
- Target date
- Validation method
- Status

Apply a weekly loop:

1. Identify top 3 highest-impact gaps.
2. Implement mitigation experiments.
3. Re-test with the same evaluation rubric.
4. Keep, revise, or roll back changes based on evidence.

### 5) Compliance and Governance Checks

For each release candidate:

- Ensure educational claims are evidence-backed and non-misleading.
- Label simplified simulations clearly as approximations where applicable.
- Document assumptions and model limits in module-level notes.
- Run privacy/security checks for any telemetry or saved user artifacts.
- Publish release notes including resolved and known gaps.

### 6) Practical Deliverables to Create Next

- `docs/ai-gap-register.md` (template + active log)
- `docs/test-matrix.md` (feature-by-feature validation checklist)
- `docs/review-rubric.md` (accuracy, interpretability, safety, accessibility scoring)
- PR template update requiring AI gap and test evidence sections

## Next Step

Implement the Phase 1 scaffold and add the first interactive module (Tokenization Playground).
