---
title: When Coding Gets Cheap, PRDs Matter More
description: The main value of a PRD in the AI coding era is not documentation. It is defining what correct means before code gets generated.
pubDate: 2026-05-14
tags: ["ai", "product", "prd"]
draft: false
---

In my previous note on [agentic engineering](/posts/notes-on-agentic-engineering/), the idea I kept coming back to was that understanding matters more as execution gets cheaper.

This made me think about where that understanding actually lives before an AI agent starts writing code.

My answer is simple: a good PRD defines what correct means.

That sounds obvious, but I think it matters more now.

For a long time, the PRD was mostly a communication document. It helped product, design, engineering, and leadership agree on what should be built. Then engineers translated that agreement into code.

But if AI agents can turn natural language into working software, the PRD starts to play a different role. It is no longer just a document people read before building. It becomes part of the build input.

And when the input is unclear, the output can still look finished.

## Cheap coding makes wrong things cheaper too

When implementation is slow, unclear thinking gets discovered slowly. The team talks, designs, estimates, debates, and eventually finds the missing pieces.

When implementation is fast, unclear thinking becomes software.

That is the dangerous part.

An AI coding agent will not always stop and say, "This product idea is under-specified." It will often make reasonable assumptions. It will choose a data model, create default flows, invent edge cases, and fill the silence with code.

The result can look impressive and still be wrong.

This is the part that changes the value of a PRD. The problem is not that the agent cannot write code. The problem is that it can write a lot of code before the product intent is clear.

So the PRD becomes the place where we slow down just enough to define the target.

Not everything. The target.

## Correct is not the same as working

In software, "working" can mean many things.

The page loads. The form submits. The API returns a response. The tests pass. The demo looks good.

Those are useful signals, but they are not the same as product correctness.

Correct means the feature solves the right problem for the right user, within the right constraints, with the right tradeoffs. Correct means the edge cases behave the way the business and user experience require. Correct means we can look at the shipped thing and say, "Yes, this is what we meant."

That cannot be left implicit.

If the PRD does not define correctness, the agent will define it for you. And the agent's definition might be "the code compiles" or "the UI follows common patterns." That is not enough.

## A useful PRD makes the target testable

I do not think this means we should bring back the giant 30-page PRD.

A long document can hide weak thinking. A useful document exposes it.

The best PRD in an AI-assisted workflow is the one that makes the important parts testable.

It should answer questions like:

- who is this for?
- what problem are we solving?
- what outcome would make this worth building?
- what is explicitly out of scope?
- what should happen in the main user flow?
- what should happen in the edge cases?
- what constraints should the system respect?
- what checks prove the result is correct?

That last question matters a lot.

For example, a weak PRD says:

"Build a dashboard with AI insights."

A stronger PRD says:

"Customer success managers are missing renewal risks because account health signals are spread across support tickets, product usage, and CRM notes. The dashboard is correct if it shows the top three risk factors for each account, explains the evidence behind each risk, and lets the CSM mark whether the recommendation was useful."

Those are very different inputs.

The first asks for a thing.

The second defines what good means.

## Structure is part of the product now

One practical change is that PRDs need to be easier for agents to parse.

That does not mean they should become robotic. It means they should be structured enough that both humans and agents can find the important parts quickly.

A good PRD now benefits from clear sections:

- problem
- user
- scope
- out of scope
- functional requirements
- edge cases
- acceptance criteria
- constraints
- open questions

This is not ceremony. It is usability.

If the PRD is an input to the system, then the PRD itself needs good UX. The reader should not have to search through paragraphs to understand what matters. The agent should not have to infer hidden rules from vague prose.

The clearer the structure, the less room there is for accidental invention.

## My takeaway

The value of a PRD is not that it proves someone did planning.

The value of a PRD is that it defines correctness before the system starts producing answers.

That is the key shift for me.

When coding was expensive, the PRD helped people align before implementation.

When coding gets cheap, the PRD helps define what implementation should be judged against.

So the question is no longer, "Did we write a PRD?"

The better question is: "Did we define what correct means?"
