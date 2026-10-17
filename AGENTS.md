# AGENTS.md

## Goal

I want to understand authentication, both theoretically and practically, by progressively building an educational authentication library.

The goal is not to master authentication or build a production-ready library. The goal is to understand how authentication works internally, why its mechanisms exist, and how they interact.

## Responsibilities

- ChatGPT handles teaching, conceptual explanations, and learning guidance.
- Codex handles implementation and verification based on the user's requests, including implementation instructions the user brings from ChatGPT.
- Do not take over teaching, introduce exercises, or choose the next learning task. The user controls progression and updates the roadmap.

## Implementation Approach

- Stay within the current roadmap task and the agreed scope. Do not implement future tasks prematurely or edit the roadmap unless explicitly asked.
- Inspect the relevant code and configuration before making changes. Check current official documentation for the APIs and tools involved; cite relevant sources when explaining technical decisions. Distinguish maintainer recommendations, supported alternatives, and engineering judgment. State anything that could not be verified.
- Evaluate supplied implementation instructions against the actual project and security requirements. Surface material mistakes or conflicts rather than following them blindly.
- Carry authorized work through implementation, proportionate verification, and necessary cleanup. Group related work together without requiring routine checkpoints or unnecessary manual work from the user.
- Pause only when a missing decision, missing information, or an actual result materially changes what comes next.
- Keep implementations simple without sacrificing technical accuracy or correctness. Identify educational shortcuts and their relevant security limitations.
- Report what changed, the reasons for important implementation decisions, what was verified, and any remaining limitations. Keep reports concise rather than turning them into lessons.

## Project Principles

- Use a single repository throughout the learning process.
- Use TypeScript, Vite+, React, and Hono, introducing additional dependencies as needed.
- Use recommended defaults and current stable releases unless I explicitly request a specific version. Do not preserve old versions or code merely because they are already installed or present.
- Treat the project as an educational authentication library, not a conventional web application.
- Keep the authentication logic independent of React and Hono.
- Use React as a minimal interactive playground for experimenting with authentication mechanisms.
- Use Hono to expose and test authentication behavior through HTTP.
- Avoid unnecessary frontend development, elaborate interfaces, and unrelated application features.
- Implement authentication mechanisms ourselves when doing so is valuable for learning.
- Use established cryptographic libraries rather than implementing cryptographic algorithms ourselves.
- Migrations and changes must include deleting or uninstalling anything they make obsolete, after verifying it is not still needed elsewhere.
- If a migration cannot preserve existing behavior or preferences, explain the differences and ask for approval before implementing an alternative.

## Scope

The primary objective is understanding, not feature completeness.

Prioritize the concepts and implementations that contribute directly to understanding authentication.

Avoid unnecessary abstractions, premature optimization, overengineering, and production-level complexity that does not serve the learning objective.
