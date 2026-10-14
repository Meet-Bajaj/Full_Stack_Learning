# 🗺️ Course Map — Dependency Graph

This document shows how modules depend on each other. **Do not skip prerequisites.**

---

## Visual Dependency Graph

```mermaid
flowchart TD
    M00["00: Orientation"] --> M01["01: CS Foundations"]
    M01 --> M02["02: Programming Fundamentals"]
    M02 --> M03["03: JavaScript"]
    M03 --> M04["04: TypeScript"]
    M03 --> M05["05: Git"]
    M05 --> M06["06: GitHub"]
    
    M03 --> M07["07: Web Fundamentals"]
    M07 --> M08["08: HTML"]
    M07 --> M09["09: CSS"]
    
    M04 --> M10["10: React"]
    M08 --> M10
    M09 --> M10
    
    M10 --> M11["11: Next.js"]
    
    M04 --> M12["12: Node.js"]
    M12 --> M13["13: Express.js"]
    M13 --> M14["14: NestJS"]
    
    M13 --> M15["15: REST API Design"]
    M07 --> M15
    
    M15 --> M16["16: Authentication"]
    M15 --> M17["17: Authorization"]
    M16 --> M17
    
    M03 --> M18["18: MongoDB"]
    
    M02 --> M19["19: SQL"]
    M19 --> M20["20: PostgreSQL"]
    M20 --> M21["21: Prisma"]
    M14 --> M21
    
    M12 --> M22["22: Redis"]
    M12 --> M23["23: MinIO"]
    
    M12 --> M24["24: Docker"]
    M24 --> M25["25: Docker Compose"]
    
    M14 --> M26["26: Testing"]
    M10 --> M26
    
    M16 --> M27["27: Security"]
    M15 --> M27
    
    M22 --> M28["28: Performance"]
    M20 --> M28
    
    M28 --> M29["29: System Design"]
    M27 --> M29
    
    M22 --> M30["30: Caching"]
    
    M14 --> M31["31: Message Queues"]
    M22 --> M31
    
    M31 --> M32["32: Background Jobs"]
    
    M12 --> M33["33: WebSockets"]
    M33 --> M34["34: Real-Time Systems"]
    
    M06 --> M35["35: CI/CD"]
    M24 --> M35
    M26 --> M35
    
    M02 --> M36["36: Linux"]
    
    M36 --> M37["37: Nginx"]
    
    M36 --> M38["38: VPS"]
    M37 --> M38
    
    M38 --> M39["39: Cloud"]
    
    M25 --> M40["40: Deployment"]
    M35 --> M40
    M37 --> M40
    M38 --> M40
    
    M40 --> M41["41: Monitoring"]
    M40 --> M42["42: Logging"]
    M41 --> M43["43: Observability"]
    M42 --> M43
    
    M29 --> M44["44: Scalability"]
    M29 --> M45["45: Distributed Systems"]
    
    M29 --> M46["46: Software Architecture"]
    M46 --> M47["47: Design Patterns"]
    
    M46 --> M48["48: Clean Code"]
    M48 --> M49["49: Code Quality"]
    
    M46 --> M50["50: Advanced Backend"]
    M11 --> M51["51: Advanced Frontend"]
    
    M50 --> M52["52: Interview Preparation"]
    M51 --> M52
    M29 --> M53["53: System Design Interviews"]
    
    M52 --> M54["54: Capstone Projects"]
    M53 --> M54
    M54 --> M55["55: Real-World Projects"]

    style M00 fill:#e1f5fe
    style M01 fill:#e1f5fe
    style M02 fill:#e1f5fe
    style M03 fill:#fff3e0
    style M04 fill:#fff3e0
    style M05 fill:#e8f5e9
    style M06 fill:#e8f5e9
    style M07 fill:#fce4ec
    style M08 fill:#fce4ec
    style M09 fill:#fce4ec
    style M10 fill:#e8eaf6
    style M11 fill:#e8eaf6
    style M12 fill:#f3e5f5
    style M13 fill:#f3e5f5
    style M14 fill:#f3e5f5
    style M54 fill:#ffeb3b
    style M55 fill:#ffeb3b
```

---

## Phase Dependencies

```mermaid
flowchart LR
    P1["Phase 1\nFoundations"] --> P2["Phase 2\nWeb & Frontend"]
    P1 --> P3["Phase 3\nBackend & APIs"]
    P2 --> P6["Phase 6\nQuality & Security"]
    P3 --> P4["Phase 4\nDatabases & Data"]
    P3 --> P6
    P4 --> P5["Phase 5\nDevOps & Deployment"]
    P6 --> P7["Phase 7\nArchitecture & Systems"]
    P5 --> P7
    P7 --> P8["Phase 8\nProfessional Readiness"]

    style P1 fill:#e1f5fe
    style P2 fill:#fce4ec
    style P3 fill:#f3e5f5
    style P4 fill:#fff3e0
    style P5 fill:#e8f5e9
    style P6 fill:#ffcdd2
    style P7 fill:#e8eaf6
    style P8 fill:#ffeb3b
```

---

## Module Categories

### 🔵 Foundations (Blue)
Modules 00-02: Computer science, programming basics

### 🟠 Languages (Orange)
Modules 03-04: JavaScript, TypeScript

### 🟢 Version Control (Green)
Modules 05-06: Git, GitHub

### 🔴 Web & Frontend (Red/Pink)
Modules 07-11: Web fundamentals, HTML, CSS, React, Next.js

### 🟣 Backend (Purple)
Modules 12-17: Node.js, Express, NestJS, REST APIs, Auth

### 🟡 Databases (Yellow/Orange)
Modules 18-23: MongoDB, SQL, PostgreSQL, Prisma, Redis, MinIO

### 🟢 DevOps (Green)
Modules 24-25, 35-43: Docker, CI/CD, Linux, Nginx, Deployment, Monitoring

### 🔴 Quality (Red)
Modules 26-28: Testing, Security, Performance

### 🔵 Architecture (Indigo)
Modules 29-34, 44-51: System Design, Caching, Queues, Scalability, Patterns

### 🟡 Professional (Gold)
Modules 52-55: Interviews, Capstone Projects

---

## Recommended Parallel Tracks

Once you complete Phase 1 (Foundations), you can study some modules in parallel:

### Track A: Frontend Path
```
07 → 08 → 09 → 10 → 11 → 51
```

### Track B: Backend Path
```
12 → 13 → 14 → 15 → 16 → 17 → 50
```

### Track C: Database Path
```
19 → 20 → 18 → 21 → 22 → 23
```

### Track D: DevOps Path
```
05 → 06 → 24 → 25 → 36 → 37 → 38 → 35 → 40
```

> **Note**: Tracks A and B can be studied simultaneously after Phase 1. Track C requires some backend knowledge. Track D can start after Git basics.
