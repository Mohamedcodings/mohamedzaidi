---
title: Before the Plan, Compare the Risks
description: Before starting a project, comparing the risks of each possible approach makes the decision clearer.
pubDate: 2026-04-16
tags: ["engineering", "product", "risk"]
draft: false
---

I am learning that before starting a project, the first question should not be only:

"What is the plan?"

There is another question that should probably come first:

"What are the possible ways to approach this?"

That sounds small, but it changes the conversation.

Most projects have more than one possible path. We can build the full version. We can build a smaller version. We can migrate gradually. We can launch to a small group first. We can do something manually before automating it.

The hard part is not listing the options.

The hard part is choosing between them.

I think the best way to choose is to look at what each approach makes safer, and what each approach makes harder.

## Each approach has a cost

Imagine we need to replace the authentication system in a SaaS app.

We could replace the old system all at once.

That is clean. There is one system, one launch, and no long period where the team maintains two versions.

But if something breaks, many users may be affected at the same time.

We could also run the old and new systems together for a while.

That gives us more room to test slowly and roll back.

But now the team has more complexity to manage.

Or we could migrate only new users first.

That protects existing users.

But it also delays learning about the hardest migration cases.

None of these options is simply good or bad.

Each one makes some things safer and some things harder.

## Listing risks makes the choice clearer

This is why I like writing the options down before choosing one.

For each approach, I want to see:

- what it makes easier
- what it makes riskier
- what we can do to reduce that risk
- what risk will still remain

Even a small table or a few bullets can help.

For example:

**Approach:** replace everything at once

**Risk:** users may get locked out if the new system fails  

**How we reduce it:** internal testing, rollback plan, launch during low traffic  

**Still risky:** one bug can affect many users at once

**Approach:** run both systems together

**Risk:** the code and operations become more complex  

**How we reduce it:** clear owner, monitoring, deadline to remove the old system  

**Still risky:** the team moves slower while both systems exist

Once the risks are visible, the decision becomes more honest.

We are not asking, "Which approach is perfect?"

We are asking, "Which downside are we most willing to carry right now?"

## My takeaway

Before starting a project, I want to spend more time comparing the possible approaches.

Not to slow the project down.

To make the decision easier.

When the options and tradeoffs are visible, the team can choose with more clarity.

We can say:

"This approach is not perfect, but it reduces the risk we care about most right now."

That is a better starting point than jumping into tasks too early.

A good plan does not start with tasks.

It starts with choosing the right approach.

And choosing the right approach starts with understanding what each option puts at risk.
