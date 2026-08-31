# Security Policy

This repository holds the source of [logansmith.us](https://logansmith.us) — a personal, static website. It has no backend, no user accounts, and no data collection, so the realistic issue surface is small. Reports are still welcome.

## Reporting a vulnerability

Preferred: **[open a private security advisory](https://github.com/Logans415/logansmith-us/security/advisories/new)** on this repository.

Alternative: email **Contact@logansmith.us**.

The machine-readable version of this policy is published at
[logansmith.us/.well-known/security.txt](https://logansmith.us/.well-known/security.txt) ([RFC 9116](https://www.rfc-editor.org/info/rfc9116/)).

Please include enough detail to reproduce the issue — affected URL or file, what you observed, and what you expected.

## What to expect

- Acknowledgement of your report, typically within a few days.
- An honest assessment of whether it's something I can act on, and what I intend to do.
- Credit for the finding if you'd like it, once any fix is live.

This is a personal project maintained in my own time, so there is no formal SLA and no bug bounty.

## Scope

**In scope:** the content served from `logansmith.us` and the files in this repository — for example content injection, a dependency or supply-chain concern, a misconfiguration in the published site, or a mistakenly committed secret.

**Out of scope:** anything owned by GitHub Pages or the DNS/email providers themselves (report those to the respective vendor), findings that require an already-compromised device, missing HTTP response headers that GitHub Pages does not allow this site to set, and automated-scanner output with no demonstrated impact.

## Please avoid

Denial-of-service or load testing, social engineering, and any testing that would affect other people. Everything here is public and static — reading it is enough to find real issues.
