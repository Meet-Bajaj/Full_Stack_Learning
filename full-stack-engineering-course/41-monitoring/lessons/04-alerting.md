# Lesson 4: Alerting

## Learning Objectives
- Define what constitutes an actionable alert.
- Understand alert severity levels.
- Explain the concept of on-call and alert fatigue.
- Create effective runbooks for operational incidents.

## Why Do We Need Alerting?
Dashboards are great when you are looking at them, but what happens at 3:00 AM when you're asleep? Alerting is the active component of monitoring. It evaluates rules against your metrics and notifies humans when a rule is violated (e.g., error rate > 5%).

## The Mental Model
Think of alerting as a fire alarm system. 
- If a sensor detects a tiny puff of smoke (minor anomaly), it might just log it.
- If it detects a fire (critical failure), it sounds a loud alarm (pages an engineer).
- If the alarm goes off every time someone burns toast, people will eventually ignore the alarm (alert fatigue).

## Alert Rules and Severity

Alerts should be based on symptoms (user pain), not just causes. 

- **Critical (Page)**: Requires immediate human intervention. The system is down or severely degraded. (e.g., "Checkout service failure rate > 10%").
- **Warning (Ticket/Email)**: Requires attention soon, but not immediately. (e.g., "Database disk usage at 85%").
- **Info (Log)**: Informational only. (e.g., "Background job completed").

## Alert Fatigue
Alert fatigue occurs when engineers receive too many un-actionable or false-positive alerts. They become desensitized and might ignore actual critical alerts. 

**How to avoid it:**
1. Every page must be actionable. If an engineer gets paged, there must be a specific action they can take.
2. Delete flaky alerts. If an alert frequently fires and resolves itself, fix the threshold or delete the alert.
3. Correlate alerts. If the database goes down, don't fire 50 separate alerts for every service that uses it.

## Runbooks (Playbooks)
Every alert should link to a Runbook. A runbook is a document that provides instructions on how to handle a specific alert.
- **What does this alert mean?**
- **How to verify the issue?**
- **Potential mitigation steps.**
- **Escalation paths.**

## Summary
Effective alerting wakes people up only when necessary and provides them with the context and instructions (runbooks) they need to resolve the issue quickly.

## Completion Checklist
- [ ] I understand the difference between symptom-based and cause-based alerting.
- [ ] I know how to avoid alert fatigue.
- [ ] I can structure a basic runbook.
