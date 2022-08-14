---
title: How to approach a System Design Problem
date: 2018-02-22 16:47:06
tags: [System Design]
---

# Basic Knowledge Collection (First 20% of the interview)

### Why
- Your question begins with “Why”, Problem description

### Requirements
- functional requirements - hard requirements:
    - must achieve
- non-functional requirements:
    - soft, but user experience oriented like latency, search speed, autocomplete…

<!--truncate-->

### Scale Estimation
- QPS (Queries Per Second)
- RAM size
- Database size
- Read/Write loads

### Database Schema
- What fields do we need
- How many bytes per field
- Total size per entry

### System APIs
- Define Key APIs
- What are the Parameters for each of the APIs
    - name
    - type
    - is it optional
    - What are the entries in the returned JSON

# Algorithm And Data Structure Design (30% of the interview)

### Talk about what algorithms are associated with this problem
- Evaluate the run time and memory usage
- Compare different options and trade-offs (Bonus: a lot of interviewers love this)
- Examples:
    - Hashing, MD5, SHA256, Base64 for URL encoding

### Talk about what data structures to use for this problem
- Best data structure for different data type:
    - Segment Tree, Priority Queue for sliding window or data stream
    - Quad Tree for Spatial or Geometrical data points
    - Trie/Prefix tree for Autocomplete

# Dev Operation/Site Reliability/Maintenance (30%)

### Data Partitioning
- Sharding
- Consistent Hashing

### Replication and Fault Tolerance
- CAP Theorem
- Dockers/Kubernetes

# General Improvements/Further Information (20%)
### Cache
- Redis, MemCache
- Frontend Cache:
    - Talk about page stores like Mobx and Redux

### Load Balancing / middleware to improve performance
- Message Queue/Bus, Apache Kafka
- NgNix For routing

## Business Model (How to generate money with this app?)
- VIP access
- Ranking, Sorting Priority

### Testing Strategy
- How would you test each component

### CI/CD
- What’s the release cycle like
