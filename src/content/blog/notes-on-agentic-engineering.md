---
title: Notes on Agentic Engineering
description: What I took from Andrej Karpathy's conversation on vibe coding, agentic engineering, and the work that stays human.
pubDate: 2026-05-05
tags: ["ai", "engineering", "startups"]
draft: false
---

I watched Andrej Karpathy's conversation, [From Vibe Coding to Agentic Engineering](https://www.youtube.com/watch?v=96jN2OCOfLs), and the main idea that stayed with me is simple: AI is not just making coding faster. It is changing what the builder is responsible for.

The old image of software work is direct execution. You think, you write code, you debug, you ship. The new image is more like orchestration. You describe the goal, shape the context, review the output, and keep the system pointed in the right direction.

That sounds small, but it changes the job.

## Vibe coding raises the floor

Karpathy's framing of vibe coding is useful because it explains why so many people are suddenly able to build things. The barrier between idea and prototype is much lower now. A founder, designer, or student can explain what they want and get something working quickly.

That is powerful.

But it is also dangerous if we confuse "it works once" with "it is engineered." A prototype can be carried by vibes. A real product cannot. Real products need security, reliability, taste, data modeling, edge cases, and a clear understanding of what should happen when things go wrong.

This is where the distinction matters: vibe coding raises the floor, but agentic engineering is about keeping the quality bar high.

## The human moves up the stack

One part I liked is the idea that agents are still a bit like junior collaborators. They can do a lot, and they can move fast, but they need direction. If the spec is weak, the result will often be weird in a very specific way: technically plausible, locally coherent, and still wrong.

The human role becomes less about remembering every API detail and more about:

- deciding what is worth building
- writing clearer specifications
- understanding the domain deeply enough to catch mistakes
- reviewing tradeoffs
- maintaining taste
- knowing where the model is likely to fail

This feels especially relevant for startups. If building becomes cheaper, then the bottleneck shifts even more toward judgment: choosing the right problem, talking to the right users, and knowing what should not be built.

## Verifiability is the hidden constraint

Another useful idea from the discussion is verifiability. AI systems improve fastest in domains where outputs can be checked. Code and math are strong examples because there are tests, compilers, type systems, benchmarks, and clear feedback loops.

This explains why AI feels extremely strong in some places and surprisingly fragile in others. The intelligence is jagged. It can refactor a complex codebase, then make a strange mistake in a simple real-world reasoning task.

For builders, this means we should design our workflows around feedback. The better we can verify something, the more confidently we can delegate it to agents.

In practice, that means more tests, clearer acceptance criteria, smaller tasks, better logs, and tighter review loops.

## Agent-native infrastructure is still missing

One of the most interesting parts of the conversation was the idea that most software infrastructure is still written for humans. Documentation tells a person where to click, what page to visit, what setting to change, and what command to run.

But if agents are going to do more of the work, tools need to become more legible to agents. Instead of "go to this dashboard and configure this manually," the better interface might be: here is the exact context and action schema an agent can use safely.

That creates a startup opportunity. The next generation of developer tools may not just be better dashboards. They may be systems designed for agents to read, operate, verify, and recover from mistakes.

## Understanding remains the bottleneck

The line I kept thinking about after the video was the difference between outsourcing thinking and outsourcing understanding.

You can ask an agent to explore, summarize, implement, refactor, or test. But someone still has to understand what matters. Someone has to decide what the product is, why it should exist, what good looks like, and what risks are acceptable.

That is comforting and uncomfortable at the same time.

Comforting because it means human judgment still matters. Uncomfortable because it means the standard for judgment is going up. If execution gets cheaper, weak thinking becomes more exposed.

My takeaway: the best builders will not be the people who ignore AI or the people who blindly trust it. They will be the people who learn how to direct it with taste, skepticism, and a strong sense of what they are trying to make.
