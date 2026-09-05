#!/usr/bin/env python3
"""
WonderMath Server - Lightweight HTTP Server & Mathematical Exploration API
Provides static file serving and high-performance number-theoretic endpoints
for K-12 interactive simulations and AI exploration.
"""

import http.server
import socketserver
import urllib.parse
import json
import math
import os
import sys

PORT = 8000

def is_prime(n):
    if n < 2:
        return False
    if n in (2, 3):
        return True
    if n % 2 == 0 or n % 3 == 0:
        return False
    i = 5
    w = 2
    while i * i <= n:
        if n % i == 0:
            return False
        i += w
        w = 6 - w
    return True

def sieve_primes(limit):
    """Simple sieve for prime calculations up to limit (capped for safety)"""
    limit = min(limit, 500000)
    sieve = [True] * (limit + 1)
    sieve[0] = sieve[1] = False
    for i in range(2, int(limit**0.5) + 1):
        if sieve[i]:
            for j in range(i * i, limit + 1, i):
                sieve[j] = False
    return [i for i, p in enumerate(sieve) if p]

def compute_collatz(start, a=3, b=1, max_steps=1000):
    """Computes orbit under generalized (a*n + b) / 2 rule."""
    trajectory = [start]
    current = start
    visited = {start: 0}
    cycle = None

    for step in range(1, max_steps + 1):
        if current % 2 == 0:
            current = current // 2
        else:
            current = a * current + b
        
        trajectory.append(current)
        
        if current in visited:
            cycle_start_step = visited[current]
            cycle = trajectory[cycle_start_step:]
            break
        visited[current] = step
        
        if current == 1 and a == 3 and b == 1:
            break
        if abs(current) > 10**12:
            break

    return {
        "start": start,
        "rule": f"{a}n+{b}",
        "trajectory": trajectory[:500],
        "length": len(trajectory) - 1,
        "peak": max(trajectory),
        "cycle": cycle,
        "reaches_one": 1 in trajectory
    }

def compute_goldbach(n):
    """Finds all prime pairs summing to even integer n (n <= 100,000)"""
    if n % 2 != 0 or n < 4:
        return {"error": "Goldbach conjecture applies to even integers >= 4"}
    
    n = min(n, 100000)
    partitions = []
    primes = sieve_primes(n)
    prime_set = set(primes)
    
    for p in primes:
        if p > n // 2:
            break
        q = n - p
        if q in prime_set:
            partitions.append([p, q])
            if len(partitions) >= 100:
                break
                
    return {
        "n": n,
        "total_partitions_sampled": len(partitions),
        "partitions": partitions[:30],
        "min_prime_pair": partitions[0] if partitions else None
    }

class WonderMathHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path
        params = urllib.parse.parse_qs(parsed.query)

        if path.startswith("/api/"):
            self.handle_api(path, params)
        else:
            super().do_GET()

    def handle_api(self, path, params):
        try:
            if path == "/api/collatz":
                n = int(params.get("n", [27])[0])
                a = int(params.get("a", [3])[0])
                b = int(params.get("b", [1])[0])
                res = compute_collatz(n, a, b)
            elif path == "/api/goldbach":
                n = int(params.get("n", [28])[0])
                res = compute_goldbach(n)
            elif path == "/api/primes":
                limit = int(params.get("limit", [1000])[0])
                primes = sieve_primes(min(limit, 50000))
                twin_pairs = [[p, p+2] for p in primes if (p+2) in set(primes)]
                res = {
                    "count": len(primes),
                    "primes": primes[:200],
                    "twin_pairs_count": len(twin_pairs),
                    "twin_pairs": twin_pairs[:50]
                }
            elif path == "/api/ai-explore":
                topic = params.get("topic", ["collatz"])[0]
                param = params.get("param", ["3n+1"])[0]
                res = self.ai_explore_engine(topic, param)
            else:
                self.send_error(404, "Endpoint not found")
                return

            response_data = json.dumps(res).encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Content-Length", str(len(response_data)))
            self.end_headers()
            self.wfile.write(response_data)
        except Exception as e:
            err_data = json.dumps({"error": str(e)}).encode("utf-8")
            self.send_response(500)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(err_data)

    def ai_explore_engine(self, topic, param):
        """Generates AI exploration insights, hypothesis evaluation and derivative conjectures"""
        if topic == "collatz":
            if "5n" in param:
                return {
                    "topic": "Collatz 5n+1 Variant",
                    "status": "Divergent / Cyclic",
                    "analysis": "Unlike 3n+1 where the average log contraction is log(3)/2 - log(2) < 0 (average drift downwards), for 5n+1 the multiplication by 5 outpaces division by 2, causing almost all trajectories to escape to infinity or trap in large cycles.",
                    "known_cycles": ["13 -> 66 -> 33 -> 166 -> 83 -> ...", "Cycle at {1, 6, 3, 16, 8, 4, 2, 1}"],
                    "suggested_derivative": "What if we use (5n+1)/3? Test which prime bases conserve integer orbits.",
                    "difficulty_for_kids": "Middle School (Grades 6-8)"
                }
            elif "3n-1" in param:
                return {
                    "topic": "Collatz 3n-1 (Negative Collatz)",
                    "status": "Multiple Known Cycles",
                    "analysis": "Under the 3n-1 rule, trajectories do not all converge to 1! There are at least 3 known distinct cycles: {1}, {5, 7, 17...}, and {17, 25...}.",
                    "suggested_derivative": "Can you map all cycles of 3n-1 up to 1000?",
                    "difficulty_for_kids": "Elementary to Middle (Grades 4-7)"
                }
        elif topic == "twin_prime":
            return {
                "topic": "Prime Gaps & k-Tuples",
                "status": "Active AI Bound Exploration",
                "analysis": "The parity problem in Selberg sieve theory prevents classical sieves from distinguishing numbers with 2 prime factors from those with 1. Maynard and Tao broke this barrier by allowing multidimensional weights, achieving gap 246.",
                "suggested_derivative": "Polignac's Conjecture: Does every even number 2k occur infinitely often as a prime difference?",
                "difficulty_for_kids": "High School (Grades 9-12)"
            }
        return {
            "topic": topic,
            "status": "Exploration active",
            "analysis": f"Exploratory analysis for parameter '{param}' across simulated number fields.",
            "suggested_derivative": "Formulate boundary condition tests in modular arithmetic."
        }

def run(port=PORT):
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", port), WonderMathHandler) as httpd:
        print(f"🚀 WonderMath Server running at http://localhost:{port}/")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server...")

if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else PORT
    run(port)
