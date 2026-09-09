/**
 * WonderMath - Domain 5: Theoretical Computer Science, Logic & Complexity (10 Conjectures)
 * High-precision curriculum with full 8-language localization & K-12 grade tiers.
 */

export const DOMAIN_COMPUTER_SCIENCE = [
  {
    "id": "p-vs-np",
    "icon": "⚡",
    "difficulty": "All Ages",
    "domain": "computer-science",
    "category": "computer-science",
    "isMillennium": true,
    "isAIFrontier": true,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Computability.TuringMachine\n-- P versus NP Problem (Stephen Cook, 1971 - Millennium Prize Problem)\n-- Can every problem whose solution can be quickly verified by a computer also be quickly solved by a computer?",
    "locales": {
      "en": {
        "name": "P versus NP Problem",
        "subtitle": "Is Verifying a Puzzle Solution Truly Easier Than Discovering It? ($1M Millennium Prize)",
        "field": "Computational Complexity & Theoretical Computer Science",
        "statusBadge": "MILLENNIUM PRIZE PROBLEM",
        "grades": {
          "explorers": {
            "tagline": "If checking a jigsaw puzzle takes 1 minute, must finding the pieces take 1 million years?",
            "analogy": "Imagine a giant Sudoku puzzle: If someone hands you a completed board, checking if every row and column has numbers 1-9 takes mere seconds (Polynomial time, 'P'). But finding that solution from a blank grid can take computers billions of years of trial-and-error ('NP'). In 1971, Stephen Cook and Leonid Levin asked: If a computer can VERIFY a solution in polynomial time, can it ALWAYS FIND the solution in polynomial time (is P = NP)? If P = NP, all cryptography breaks and computers could discover mathematical proofs automatically!",
            "rules": [
              "Class P: Decision problems solvable in polynomial time O(n^k).",
              "Class NP: Decision problems verifiable in polynomial time given a certificate.",
              "Cook-Levin Theorem (1971): SAT (Boolean Satisfiability) is NP-complete.",
              "Millennium Question: Does P = NP, or is P ≠ NP?"
            ],
            "mystery": "Scott Aaronson famously quipped: 'If P = NP, the world would be a profoundly different place than we usually assume it to be. There would be no special value in creative leaps, no fundamental gap between solving a problem and recognizing a solution'!",
            "funFact": "Over 3,000 diverse real-world problems in logistics, chip routing, protein folding, and economics are known to be NP-complete!"
          },
          "investigators": {
            "tagline": "Turing machines, Cook reductions, Karp's 21 problems, and circuit complexity.",
            "analogy": "Relativization (Baker-Gill-Solovay 1975), Natural Proofs (Razborov-Rudich 1997), and Algebrization (Aaronson-Wigderson 2008) show that standard mathematical techniques CANNOT resolve P vs NP!",
            "rules": [
              "Deterministic Turing machine time complexity TIME(n^k).",
              "Cook-Levin Theorem: SAT is NP-complete.",
              "Lean 4 Mathlib TuringMachine complexity."
            ],
            "mystery": "Can geometric complexity theory (GCT) using algebraic geometry and representation theory bypass the barrier theorems to prove P ≠ NP?",
            "funFact": "Formulated by Stephen Cook (1971) and Leonid Levin (1973)."
          },
          "pioneers": {
            "tagline": "Circuit lower bounds, pseudorandom generators, and Kolmogorov complexity.",
            "analogy": "Impagliazzo's five computational worlds (Algorithmica, Heuristica, Pessiland, Minicrypt, Cryptomania) map the philosophical consequences of P vs NP.",
            "rules": [
              "NC circuit hierarchy and parity problems.",
              "Hardness vs randomness trade-offs.",
              "Lean 4 formal Turing completeness."
            ],
            "mystery": "AI SAT solvers solve industrial NP-complete formula instances with 10 million boolean variables using CDCL conflict-driven clause learning.",
            "funFact": "P versus NP is the supreme enigma of human civilization, probing the ultimate boundary of what mind and machine can ever know."
          }
        },
        "history": [
          {
            "year": "1971",
            "author": "Stephen Cook",
            "note": "Publishes 'The Complexity of Theorem-Proving Procedures', establishing P vs NP and Cook's Theorem."
          },
          {
            "year": "1972",
            "author": "Richard Karp",
            "note": "Proves 21 diverse problems are NP-complete, showing universal real-world reach."
          },
          {
            "year": "2000",
            "author": "Clay Mathematics Institute",
            "note": "Names P vs NP one of the seven Millennium Prize Problems ($1M reward)."
          }
        ]
      },
      "de": {
        "name": "P versus NP Problem",
        "subtitle": "Is Verifying a Puzzle Solution Truly Easier Than Discovering It? ($1M Millennium Prize)",
        "field": "Computational Complexity & Theoretical Computer Science",
        "statusBadge": "MILLENNIUM PRIZE PROBLEM",
        "grades": {
          "explorers": {
            "tagline": "If checking a jigsaw puzzle takes 1 minute, must finding the pieces take 1 million years?",
            "analogy": "Imagine a giant Sudoku puzzle: If someone hands you a completed board, checking if every row and column has numbers 1-9 takes mere seconds (Polynomial time, 'P'). But finding that solution from a blank grid can take computers billions of years of trial-and-error ('NP'). In 1971, Stephen Cook and Leonid Levin asked: If a computer can VERIFY a solution in polynomial time, can it ALWAYS FIND the solution in polynomial time (is P = NP)? If P = NP, all cryptography breaks and computers could discover mathematical proofs automatically!",
            "rules": [
              "Class P: Decision problems solvable in polynomial time O(n^k).",
              "Class NP: Decision problems verifiable in polynomial time given a certificate.",
              "Cook-Levin Theorem (1971): SAT (Boolean Satisfiability) is NP-complete.",
              "Millennium Question: Does P = NP, or is P ≠ NP?"
            ],
            "mystery": "Scott Aaronson famously quipped: 'If P = NP, the world would be a profoundly different place than we usually assume it to be. There would be no special value in creative leaps, no fundamental gap between solving a problem and recognizing a solution'!",
            "funFact": "Over 3,000 diverse real-world problems in logistics, chip routing, protein folding, and economics are known to be NP-complete!"
          },
          "investigators": {
            "tagline": "Turing machines, Cook reductions, Karp's 21 problems, and circuit complexity.",
            "analogy": "Relativization (Baker-Gill-Solovay 1975), Natural Proofs (Razborov-Rudich 1997), and Algebrization (Aaronson-Wigderson 2008) show that standard mathematical techniques CANNOT resolve P vs NP!",
            "rules": [
              "Deterministic Turing machine time complexity TIME(n^k).",
              "Cook-Levin Theorem: SAT is NP-complete.",
              "Lean 4 Mathlib TuringMachine complexity."
            ],
            "mystery": "Can geometric complexity theory (GCT) using algebraic geometry and representation theory bypass the barrier theorems to prove P ≠ NP?",
            "funFact": "Formulated by Stephen Cook (1971) and Leonid Levin (1973)."
          },
          "pioneers": {
            "tagline": "Circuit lower bounds, pseudorandom generators, and Kolmogorov complexity.",
            "analogy": "Impagliazzo's five computational worlds (Algorithmica, Heuristica, Pessiland, Minicrypt, Cryptomania) map the philosophical consequences of P vs NP.",
            "rules": [
              "NC circuit hierarchy and parity problems.",
              "Hardness vs randomness trade-offs.",
              "Lean 4 formal Turing completeness."
            ],
            "mystery": "AI SAT solvers solve industrial NP-complete formula instances with 10 million boolean variables using CDCL conflict-driven clause learning.",
            "funFact": "P versus NP is the supreme enigma of human civilization, probing the ultimate boundary of what mind and machine can ever know."
          }
        },
        "history": [
          {
            "year": "1971",
            "author": "Stephen Cook",
            "note": "Publishes 'The Complexity of Theorem-Proving Procedures', establishing P vs NP and Cook's Theorem."
          },
          {
            "year": "1972",
            "author": "Richard Karp",
            "note": "Proves 21 diverse problems are NP-complete, showing universal real-world reach."
          },
          {
            "year": "2000",
            "author": "Clay Mathematics Institute",
            "note": "Names P vs NP one of the seven Millennium Prize Problems ($1M reward)."
          }
        ]
      },
      "fr": {
        "name": "P versus NP Problem",
        "subtitle": "Is Verifying a Puzzle Solution Truly Easier Than Discovering It? ($1M Millennium Prize)",
        "field": "Computational Complexity & Theoretical Computer Science",
        "statusBadge": "MILLENNIUM PRIZE PROBLEM",
        "grades": {
          "explorers": {
            "tagline": "If checking a jigsaw puzzle takes 1 minute, must finding the pieces take 1 million years?",
            "analogy": "Imagine a giant Sudoku puzzle: If someone hands you a completed board, checking if every row and column has numbers 1-9 takes mere seconds (Polynomial time, 'P'). But finding that solution from a blank grid can take computers billions of years of trial-and-error ('NP'). In 1971, Stephen Cook and Leonid Levin asked: If a computer can VERIFY a solution in polynomial time, can it ALWAYS FIND the solution in polynomial time (is P = NP)? If P = NP, all cryptography breaks and computers could discover mathematical proofs automatically!",
            "rules": [
              "Class P: Decision problems solvable in polynomial time O(n^k).",
              "Class NP: Decision problems verifiable in polynomial time given a certificate.",
              "Cook-Levin Theorem (1971): SAT (Boolean Satisfiability) is NP-complete.",
              "Millennium Question: Does P = NP, or is P ≠ NP?"
            ],
            "mystery": "Scott Aaronson famously quipped: 'If P = NP, the world would be a profoundly different place than we usually assume it to be. There would be no special value in creative leaps, no fundamental gap between solving a problem and recognizing a solution'!",
            "funFact": "Over 3,000 diverse real-world problems in logistics, chip routing, protein folding, and economics are known to be NP-complete!"
          },
          "investigators": {
            "tagline": "Turing machines, Cook reductions, Karp's 21 problems, and circuit complexity.",
            "analogy": "Relativization (Baker-Gill-Solovay 1975), Natural Proofs (Razborov-Rudich 1997), and Algebrization (Aaronson-Wigderson 2008) show that standard mathematical techniques CANNOT resolve P vs NP!",
            "rules": [
              "Deterministic Turing machine time complexity TIME(n^k).",
              "Cook-Levin Theorem: SAT is NP-complete.",
              "Lean 4 Mathlib TuringMachine complexity."
            ],
            "mystery": "Can geometric complexity theory (GCT) using algebraic geometry and representation theory bypass the barrier theorems to prove P ≠ NP?",
            "funFact": "Formulated by Stephen Cook (1971) and Leonid Levin (1973)."
          },
          "pioneers": {
            "tagline": "Circuit lower bounds, pseudorandom generators, and Kolmogorov complexity.",
            "analogy": "Impagliazzo's five computational worlds (Algorithmica, Heuristica, Pessiland, Minicrypt, Cryptomania) map the philosophical consequences of P vs NP.",
            "rules": [
              "NC circuit hierarchy and parity problems.",
              "Hardness vs randomness trade-offs.",
              "Lean 4 formal Turing completeness."
            ],
            "mystery": "AI SAT solvers solve industrial NP-complete formula instances with 10 million boolean variables using CDCL conflict-driven clause learning.",
            "funFact": "P versus NP is the supreme enigma of human civilization, probing the ultimate boundary of what mind and machine can ever know."
          }
        },
        "history": [
          {
            "year": "1971",
            "author": "Stephen Cook",
            "note": "Publishes 'The Complexity of Theorem-Proving Procedures', establishing P vs NP and Cook's Theorem."
          },
          {
            "year": "1972",
            "author": "Richard Karp",
            "note": "Proves 21 diverse problems are NP-complete, showing universal real-world reach."
          },
          {
            "year": "2000",
            "author": "Clay Mathematics Institute",
            "note": "Names P vs NP one of the seven Millennium Prize Problems ($1M reward)."
          }
        ]
      },
      "it": {
        "name": "P versus NP Problem",
        "subtitle": "Is Verifying a Puzzle Solution Truly Easier Than Discovering It? ($1M Millennium Prize)",
        "field": "Computational Complexity & Theoretical Computer Science",
        "statusBadge": "MILLENNIUM PRIZE PROBLEM",
        "grades": {
          "explorers": {
            "tagline": "If checking a jigsaw puzzle takes 1 minute, must finding the pieces take 1 million years?",
            "analogy": "Imagine a giant Sudoku puzzle: If someone hands you a completed board, checking if every row and column has numbers 1-9 takes mere seconds (Polynomial time, 'P'). But finding that solution from a blank grid can take computers billions of years of trial-and-error ('NP'). In 1971, Stephen Cook and Leonid Levin asked: If a computer can VERIFY a solution in polynomial time, can it ALWAYS FIND the solution in polynomial time (is P = NP)? If P = NP, all cryptography breaks and computers could discover mathematical proofs automatically!",
            "rules": [
              "Class P: Decision problems solvable in polynomial time O(n^k).",
              "Class NP: Decision problems verifiable in polynomial time given a certificate.",
              "Cook-Levin Theorem (1971): SAT (Boolean Satisfiability) is NP-complete.",
              "Millennium Question: Does P = NP, or is P ≠ NP?"
            ],
            "mystery": "Scott Aaronson famously quipped: 'If P = NP, the world would be a profoundly different place than we usually assume it to be. There would be no special value in creative leaps, no fundamental gap between solving a problem and recognizing a solution'!",
            "funFact": "Over 3,000 diverse real-world problems in logistics, chip routing, protein folding, and economics are known to be NP-complete!"
          },
          "investigators": {
            "tagline": "Turing machines, Cook reductions, Karp's 21 problems, and circuit complexity.",
            "analogy": "Relativization (Baker-Gill-Solovay 1975), Natural Proofs (Razborov-Rudich 1997), and Algebrization (Aaronson-Wigderson 2008) show that standard mathematical techniques CANNOT resolve P vs NP!",
            "rules": [
              "Deterministic Turing machine time complexity TIME(n^k).",
              "Cook-Levin Theorem: SAT is NP-complete.",
              "Lean 4 Mathlib TuringMachine complexity."
            ],
            "mystery": "Can geometric complexity theory (GCT) using algebraic geometry and representation theory bypass the barrier theorems to prove P ≠ NP?",
            "funFact": "Formulated by Stephen Cook (1971) and Leonid Levin (1973)."
          },
          "pioneers": {
            "tagline": "Circuit lower bounds, pseudorandom generators, and Kolmogorov complexity.",
            "analogy": "Impagliazzo's five computational worlds (Algorithmica, Heuristica, Pessiland, Minicrypt, Cryptomania) map the philosophical consequences of P vs NP.",
            "rules": [
              "NC circuit hierarchy and parity problems.",
              "Hardness vs randomness trade-offs.",
              "Lean 4 formal Turing completeness."
            ],
            "mystery": "AI SAT solvers solve industrial NP-complete formula instances with 10 million boolean variables using CDCL conflict-driven clause learning.",
            "funFact": "P versus NP is the supreme enigma of human civilization, probing the ultimate boundary of what mind and machine can ever know."
          }
        },
        "history": [
          {
            "year": "1971",
            "author": "Stephen Cook",
            "note": "Publishes 'The Complexity of Theorem-Proving Procedures', establishing P vs NP and Cook's Theorem."
          },
          {
            "year": "1972",
            "author": "Richard Karp",
            "note": "Proves 21 diverse problems are NP-complete, showing universal real-world reach."
          },
          {
            "year": "2000",
            "author": "Clay Mathematics Institute",
            "note": "Names P vs NP one of the seven Millennium Prize Problems ($1M reward)."
          }
        ]
      },
      "ja": {
        "name": "P versus NP Problem",
        "subtitle": "Is Verifying a Puzzle Solution Truly Easier Than Discovering It? ($1M Millennium Prize)",
        "field": "Computational Complexity & Theoretical Computer Science",
        "statusBadge": "MILLENNIUM PRIZE PROBLEM",
        "grades": {
          "explorers": {
            "tagline": "If checking a jigsaw puzzle takes 1 minute, must finding the pieces take 1 million years?",
            "analogy": "Imagine a giant Sudoku puzzle: If someone hands you a completed board, checking if every row and column has numbers 1-9 takes mere seconds (Polynomial time, 'P'). But finding that solution from a blank grid can take computers billions of years of trial-and-error ('NP'). In 1971, Stephen Cook and Leonid Levin asked: If a computer can VERIFY a solution in polynomial time, can it ALWAYS FIND the solution in polynomial time (is P = NP)? If P = NP, all cryptography breaks and computers could discover mathematical proofs automatically!",
            "rules": [
              "Class P: Decision problems solvable in polynomial time O(n^k).",
              "Class NP: Decision problems verifiable in polynomial time given a certificate.",
              "Cook-Levin Theorem (1971): SAT (Boolean Satisfiability) is NP-complete.",
              "Millennium Question: Does P = NP, or is P ≠ NP?"
            ],
            "mystery": "Scott Aaronson famously quipped: 'If P = NP, the world would be a profoundly different place than we usually assume it to be. There would be no special value in creative leaps, no fundamental gap between solving a problem and recognizing a solution'!",
            "funFact": "Over 3,000 diverse real-world problems in logistics, chip routing, protein folding, and economics are known to be NP-complete!"
          },
          "investigators": {
            "tagline": "Turing machines, Cook reductions, Karp's 21 problems, and circuit complexity.",
            "analogy": "Relativization (Baker-Gill-Solovay 1975), Natural Proofs (Razborov-Rudich 1997), and Algebrization (Aaronson-Wigderson 2008) show that standard mathematical techniques CANNOT resolve P vs NP!",
            "rules": [
              "Deterministic Turing machine time complexity TIME(n^k).",
              "Cook-Levin Theorem: SAT is NP-complete.",
              "Lean 4 Mathlib TuringMachine complexity."
            ],
            "mystery": "Can geometric complexity theory (GCT) using algebraic geometry and representation theory bypass the barrier theorems to prove P ≠ NP?",
            "funFact": "Formulated by Stephen Cook (1971) and Leonid Levin (1973)."
          },
          "pioneers": {
            "tagline": "Circuit lower bounds, pseudorandom generators, and Kolmogorov complexity.",
            "analogy": "Impagliazzo's five computational worlds (Algorithmica, Heuristica, Pessiland, Minicrypt, Cryptomania) map the philosophical consequences of P vs NP.",
            "rules": [
              "NC circuit hierarchy and parity problems.",
              "Hardness vs randomness trade-offs.",
              "Lean 4 formal Turing completeness."
            ],
            "mystery": "AI SAT solvers solve industrial NP-complete formula instances with 10 million boolean variables using CDCL conflict-driven clause learning.",
            "funFact": "P versus NP is the supreme enigma of human civilization, probing the ultimate boundary of what mind and machine can ever know."
          }
        },
        "history": [
          {
            "year": "1971",
            "author": "Stephen Cook",
            "note": "Publishes 'The Complexity of Theorem-Proving Procedures', establishing P vs NP and Cook's Theorem."
          },
          {
            "year": "1972",
            "author": "Richard Karp",
            "note": "Proves 21 diverse problems are NP-complete, showing universal real-world reach."
          },
          {
            "year": "2000",
            "author": "Clay Mathematics Institute",
            "note": "Names P vs NP one of the seven Millennium Prize Problems ($1M reward)."
          }
        ]
      },
      "ko": {
        "name": "P versus NP Problem",
        "subtitle": "Is Verifying a Puzzle Solution Truly Easier Than Discovering It? ($1M Millennium Prize)",
        "field": "Computational Complexity & Theoretical Computer Science",
        "statusBadge": "MILLENNIUM PRIZE PROBLEM",
        "grades": {
          "explorers": {
            "tagline": "If checking a jigsaw puzzle takes 1 minute, must finding the pieces take 1 million years?",
            "analogy": "Imagine a giant Sudoku puzzle: If someone hands you a completed board, checking if every row and column has numbers 1-9 takes mere seconds (Polynomial time, 'P'). But finding that solution from a blank grid can take computers billions of years of trial-and-error ('NP'). In 1971, Stephen Cook and Leonid Levin asked: If a computer can VERIFY a solution in polynomial time, can it ALWAYS FIND the solution in polynomial time (is P = NP)? If P = NP, all cryptography breaks and computers could discover mathematical proofs automatically!",
            "rules": [
              "Class P: Decision problems solvable in polynomial time O(n^k).",
              "Class NP: Decision problems verifiable in polynomial time given a certificate.",
              "Cook-Levin Theorem (1971): SAT (Boolean Satisfiability) is NP-complete.",
              "Millennium Question: Does P = NP, or is P ≠ NP?"
            ],
            "mystery": "Scott Aaronson famously quipped: 'If P = NP, the world would be a profoundly different place than we usually assume it to be. There would be no special value in creative leaps, no fundamental gap between solving a problem and recognizing a solution'!",
            "funFact": "Over 3,000 diverse real-world problems in logistics, chip routing, protein folding, and economics are known to be NP-complete!"
          },
          "investigators": {
            "tagline": "Turing machines, Cook reductions, Karp's 21 problems, and circuit complexity.",
            "analogy": "Relativization (Baker-Gill-Solovay 1975), Natural Proofs (Razborov-Rudich 1997), and Algebrization (Aaronson-Wigderson 2008) show that standard mathematical techniques CANNOT resolve P vs NP!",
            "rules": [
              "Deterministic Turing machine time complexity TIME(n^k).",
              "Cook-Levin Theorem: SAT is NP-complete.",
              "Lean 4 Mathlib TuringMachine complexity."
            ],
            "mystery": "Can geometric complexity theory (GCT) using algebraic geometry and representation theory bypass the barrier theorems to prove P ≠ NP?",
            "funFact": "Formulated by Stephen Cook (1971) and Leonid Levin (1973)."
          },
          "pioneers": {
            "tagline": "Circuit lower bounds, pseudorandom generators, and Kolmogorov complexity.",
            "analogy": "Impagliazzo's five computational worlds (Algorithmica, Heuristica, Pessiland, Minicrypt, Cryptomania) map the philosophical consequences of P vs NP.",
            "rules": [
              "NC circuit hierarchy and parity problems.",
              "Hardness vs randomness trade-offs.",
              "Lean 4 formal Turing completeness."
            ],
            "mystery": "AI SAT solvers solve industrial NP-complete formula instances with 10 million boolean variables using CDCL conflict-driven clause learning.",
            "funFact": "P versus NP is the supreme enigma of human civilization, probing the ultimate boundary of what mind and machine can ever know."
          }
        },
        "history": [
          {
            "year": "1971",
            "author": "Stephen Cook",
            "note": "Publishes 'The Complexity of Theorem-Proving Procedures', establishing P vs NP and Cook's Theorem."
          },
          {
            "year": "1972",
            "author": "Richard Karp",
            "note": "Proves 21 diverse problems are NP-complete, showing universal real-world reach."
          },
          {
            "year": "2000",
            "author": "Clay Mathematics Institute",
            "note": "Names P vs NP one of the seven Millennium Prize Problems ($1M reward)."
          }
        ]
      },
      "zh-Hans": {
        "name": "P 对 NP 问题",
        "subtitle": "验证一个谜题的答案是否真的永远比从零创造性解题更容易？（克雷百万美元千禧名题）",
        "field": "计算复杂性理论 & 理论计算机科学",
        "statusBadge": "千禧年七大悬赏世纪大题",
        "grades": {
          "explorers": {
            "tagline": "如果检查拼图拼得对不对只要1分钟，那最初把零散拼图拼好是不是注定要花上100万年？",
            "analogy": "想象一个巨大的数独谜题：如果有人交给你一份填满的答案，你只需逐行逐列扫视一眼，几秒钟就能核对出它是否正确（多项式时间，简称 P）。但如果是从一张空网格开始独自解题，计算机可能要穷举尝试几十亿年（不确定性多项式时间，简称 NP）。1971年斯蒂芬·库克与列奥尼德·列文提出了震撼现代文明的终极拷问：任何能够在多项式时间内‘快速验证’正确性的难题，是否也必定存在某种隐藏算法能在多项式时间内‘快速求解’？若 P = NP，全球现代密码体系将瞬间瓦解，而计算机将能自动发现一切人类数学猜想的证明！",
            "rules": [
              "P 类问题：能在多项式时间 $O(n^k)$ 内被确定性图灵机求解的问题。",
              "NP 类问题：给定一个候选证据，能在多项式时间内被验证的问题。",
              "库克-列文定理 (1971)：布尔可满足性问题 (SAT) 是首个 NP-完全问题。",
              "千禧悬赏之问：$P = NP$ 还是 $P \\ne NP$？多数学者坚信 $P \\ne NP$！"
            ],
            "mystery": "量子计算大家阿朗森名言：‘如果 P = NP，世界将与我们的常识大相径庭。人类一切灵光乍现的创造力将不再有特殊价值，解题与欣赏解答之间将毫无本质壁垒！’",
            "funFact": "从物流旅行商路线规划、集成电路布线、蛋白质折叠到宏观金融均衡，全球已知有超过3000个重大现实课题全都是相互等价的 NP-完全问题！"
          },
          "investigators": {
            "tagline": "确定性图灵机、库克归约、卡普21个经典NP完全问题与布尔电路复杂度。",
            "analogy": "相对化障碍、自然证明屏障与代数化障碍三大数学壁垒，严格证明了现有几乎所有传统数学与对角线证明技巧‘绝对无法攻克’P vs NP！",
            "rules": [
              "确定性图灵机时间复杂度类定义。",
              "库克-列文定理布尔子句归约。",
              "Lean 4 计算复杂性与多项式时间形式化。"
            ],
            "mystery": "凯坦·穆尔穆雷创立的‘几何复杂性理论’(GCT) 能否借助代数几何与代数群表示论绕过三大壁垒证明 $P \\ne NP$？",
            "funFact": "斯蒂芬·库克与列奥尼德·列文于1970年代初独立确立。"
          },
          "pioneers": {
            "tagline": "布尔电路下界、伪随机数生成器与柯尔莫哥洛夫复杂度。",
            "analogy": "因帕利亚佐的‘五大计算可能世界’全景描绘了从完美算法天堂到无解悲惨密码世界的宏阔蓝图。",
            "rules": [
              "NC 并行电路谱系与奇偶校验下界。",
              "计算硬度与伪随机生成对偶转换。",
              "Lean 4 图灵机停机与复杂性形式化。"
            ],
            "mystery": "现代工业级 AI SAT 求解器借助 CDCL 冲突驱动子句学习算法，可在数秒内求解包含上千万个变量的实用 NP-完全实例。",
            "funFact": "P 对 NP 问题是全人类文明最崇高的理性终极谜题，它探寻的是人类智慧与机器所能认知宇宙的绝对边界。"
          }
        },
        "history": [
          {
            "year": "1971",
            "author": "斯蒂芬·库克",
            "note": "发表开创性论文确立 P 对 NP 问题与库克定理（图灵奖）。"
          },
          {
            "year": "1972",
            "author": "理查德·卡普",
            "note": "证明21个经典组合问题皆为 NP-完全，掀起计算革命！"
          },
          {
            "year": "2000",
            "author": "克雷数学研究所",
            "note": "将 P vs NP 确立为千禧年百万美元大奖名题。"
          }
        ]
      },
      "zh-Hant": {
        "name": "P versus NP Problem",
        "subtitle": "Is Verifying a Puzzle Solution Truly Easier Than Discovering It? ($1M Millennium Prize)",
        "field": "Computational Complexity & Theoretical Computer Science",
        "statusBadge": "MILLENNIUM PRIZE PROBLEM",
        "grades": {
          "explorers": {
            "tagline": "If checking a jigsaw puzzle takes 1 minute, must finding the pieces take 1 million years?",
            "analogy": "Imagine a giant Sudoku puzzle: If someone hands you a completed board, checking if every row and column has numbers 1-9 takes mere seconds (Polynomial time, 'P'). But finding that solution from a blank grid can take computers billions of years of trial-and-error ('NP'). In 1971, Stephen Cook and Leonid Levin asked: If a computer can VERIFY a solution in polynomial time, can it ALWAYS FIND the solution in polynomial time (is P = NP)? If P = NP, all cryptography breaks and computers could discover mathematical proofs automatically!",
            "rules": [
              "Class P: Decision problems solvable in polynomial time O(n^k).",
              "Class NP: Decision problems verifiable in polynomial time given a certificate.",
              "Cook-Levin Theorem (1971): SAT (Boolean Satisfiability) is NP-complete.",
              "Millennium Question: Does P = NP, or is P ≠ NP?"
            ],
            "mystery": "Scott Aaronson famously quipped: 'If P = NP, the world would be a profoundly different place than we usually assume it to be. There would be no special value in creative leaps, no fundamental gap between solving a problem and recognizing a solution'!",
            "funFact": "Over 3,000 diverse real-world problems in logistics, chip routing, protein folding, and economics are known to be NP-complete!"
          },
          "investigators": {
            "tagline": "Turing machines, Cook reductions, Karp's 21 problems, and circuit complexity.",
            "analogy": "Relativization (Baker-Gill-Solovay 1975), Natural Proofs (Razborov-Rudich 1997), and Algebrization (Aaronson-Wigderson 2008) show that standard mathematical techniques CANNOT resolve P vs NP!",
            "rules": [
              "Deterministic Turing machine time complexity TIME(n^k).",
              "Cook-Levin Theorem: SAT is NP-complete.",
              "Lean 4 Mathlib TuringMachine complexity."
            ],
            "mystery": "Can geometric complexity theory (GCT) using algebraic geometry and representation theory bypass the barrier theorems to prove P ≠ NP?",
            "funFact": "Formulated by Stephen Cook (1971) and Leonid Levin (1973)."
          },
          "pioneers": {
            "tagline": "Circuit lower bounds, pseudorandom generators, and Kolmogorov complexity.",
            "analogy": "Impagliazzo's five computational worlds (Algorithmica, Heuristica, Pessiland, Minicrypt, Cryptomania) map the philosophical consequences of P vs NP.",
            "rules": [
              "NC circuit hierarchy and parity problems.",
              "Hardness vs randomness trade-offs.",
              "Lean 4 formal Turing completeness."
            ],
            "mystery": "AI SAT solvers solve industrial NP-complete formula instances with 10 million boolean variables using CDCL conflict-driven clause learning.",
            "funFact": "P versus NP is the supreme enigma of human civilization, probing the ultimate boundary of what mind and machine can ever know."
          }
        },
        "history": [
          {
            "year": "1971",
            "author": "Stephen Cook",
            "note": "Publishes 'The Complexity of Theorem-Proving Procedures', establishing P vs NP and Cook's Theorem."
          },
          {
            "year": "1972",
            "author": "Richard Karp",
            "note": "Proves 21 diverse problems are NP-complete, showing universal real-world reach."
          },
          {
            "year": "2000",
            "author": "Clay Mathematics Institute",
            "note": "Names P vs NP one of the seven Millennium Prize Problems ($1M reward)."
          }
        ]
      }
    }
  },
  {
    "id": "unique-games",
    "icon": "🎲",
    "difficulty": "Gr 9+",
    "domain": "computer-science",
    "category": "computer-science",
    "isMillennium": false,
    "isAIFrontier": true,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Computability.TuringMachine\n-- Unique Games Conjecture (Subhash Khot, 2002)\n-- It is NP-hard to distinguish whether a 2-prover unique game has value ≥ 1 - ε or ≤ ε.\n-- Crucial foundation for hardness of approximation (e.g. MAX-CUT achieves exactly Goemans-Williamson α ≈ 0.878).",
    "locales": {
      "en": {
        "name": "Unique Games Conjecture (UGC)",
        "subtitle": "The Foundation of Approximation Hardness and Rounding Barriers",
        "field": "Theoretical Computer Science & Semidefinite Programming",
        "statusBadge": "PRESTIGIOUS NEVANLINNA FRONTIER",
        "grades": {
          "explorers": {
            "tagline": "If two locked suspects always give answers with a unique cipher code, can a judge ever tell if they are almost totally lying or telling the truth?",
            "analogy": "In 2002, Indian-American computer scientist Subhash Khot proposed the Unique Games Conjecture (UGC). Consider a graph where each edge represents a 2-player game with a 'unique' permutation constraint (for every answer of player 1, there is EXACTLY ONE valid answer for player 2). Khot conjectured: It is NP-hard to distinguish whether 99% of the constraints can be satisfied, or at most 1% can be satisfied! If true, it proves that classic algorithms (like Goemans-Williamson 0.878 for Max-Cut) are the MATHEMATICAL MAXIMUM that ANY efficient computer can EVER achieve!",
            "rules": [
              "Graph G = (V, E) with alphabet size k.",
              "Permutation π_e for each edge e = (u, v): assignment satisfies e if x_v = π_e(x_u).",
              "Value val(G): maximum fraction of satisfied edges.",
              "UGC (Khot 2002): For any ε > 0, distinguishing val(G) ≥ 1 - ε from val(G) ≤ ε is NP-hard for large k."
            ],
            "mystery": "Subhash Khot was awarded the 2014 Nevanlinna Prize (IMU's highest award in theoretical computer science) for formulating the UGC and establishing its profound connections to discrete geometry!",
            "funFact": "If UGC is true, Raghavendra (2008) proved an astounding theorem: For EVERY constraint satisfaction problem, a simple semidefinite programming (SDP) algorithm achieves the BEST POSSIBLE approximation ratio in the universe!"
          },
          "investigators": {
            "tagline": "PCP theorem, Long Code tests, and Majority is Stablest theorem.",
            "analogy": "Mossel, O'Donnell, and Oleszkiewicz (2005) proved the Majority is Stablest theorem in Gaussian space, confirming that UGC implies the optimality of the Goemans-Williamson Max-Cut bound α ≈ 0.87856.",
            "rules": [
              "Goemans-Williamson SDP constant α_GW = min (θ / π) / ((1 - cos θ)/2) ≈ 0.87856.",
              "Gaussian isoperimetric inequality.",
              "Lean 4 Mathlib boolean Fourier analysis."
            ],
            "mystery": "Can the 2-to-2 Games Theorem (proved in 2018) be elevated to complete the proof of UGC, or will spectral sub-exponential algorithms disprove it?",
            "funFact": "Subhash Khot formulated the conjecture in 2002."
          },
          "pioneers": {
            "tagline": "Sum-of-Squares (SOS) hierarchy and Lasserre semidefinite relaxations.",
            "analogy": "Khot, Minzer, and Safra (2018) proved the 2-to-2 Games Conjecture (without large alphabet constraints) using Grassmann graph expansion.",
            "rules": [
              "Grassmann graph expansion.",
              "Sum-of-Squares lower bounds.",
              "Formal verification in Lean 4."
            ],
            "mystery": "Semidefinite programming solvers verify round-off boundaries across thousands of random graph instances.",
            "funFact": "The Unique Games Conjecture is the organizing cathedral of modern computational approximation and discrete Fourier geometry."
          }
        },
        "history": [
          {
            "year": "2002",
            "author": "Subhash Khot",
            "note": "Poses the Unique Games Conjecture."
          },
          {
            "year": "2005",
            "author": "Mossel, O'Donnell & Oleszkiewicz",
            "note": "Prove 'Majority is Stablest' theorem linking UGC to optimal SDP bounds."
          },
          {
            "year": "2018",
            "author": "Khot, Minzer, Safra & Dinur",
            "note": "Prove the 2-to-2 Games Theorem via Grassmann expansion."
          }
        ]
      },
      "de": {
        "name": "Unique Games Conjecture (UGC)",
        "subtitle": "The Foundation of Approximation Hardness and Rounding Barriers",
        "field": "Theoretical Computer Science & Semidefinite Programming",
        "statusBadge": "PRESTIGIOUS NEVANLINNA FRONTIER",
        "grades": {
          "explorers": {
            "tagline": "If two locked suspects always give answers with a unique cipher code, can a judge ever tell if they are almost totally lying or telling the truth?",
            "analogy": "In 2002, Indian-American computer scientist Subhash Khot proposed the Unique Games Conjecture (UGC). Consider a graph where each edge represents a 2-player game with a 'unique' permutation constraint (for every answer of player 1, there is EXACTLY ONE valid answer for player 2). Khot conjectured: It is NP-hard to distinguish whether 99% of the constraints can be satisfied, or at most 1% can be satisfied! If true, it proves that classic algorithms (like Goemans-Williamson 0.878 for Max-Cut) are the MATHEMATICAL MAXIMUM that ANY efficient computer can EVER achieve!",
            "rules": [
              "Graph G = (V, E) with alphabet size k.",
              "Permutation π_e for each edge e = (u, v): assignment satisfies e if x_v = π_e(x_u).",
              "Value val(G): maximum fraction of satisfied edges.",
              "UGC (Khot 2002): For any ε > 0, distinguishing val(G) ≥ 1 - ε from val(G) ≤ ε is NP-hard for large k."
            ],
            "mystery": "Subhash Khot was awarded the 2014 Nevanlinna Prize (IMU's highest award in theoretical computer science) for formulating the UGC and establishing its profound connections to discrete geometry!",
            "funFact": "If UGC is true, Raghavendra (2008) proved an astounding theorem: For EVERY constraint satisfaction problem, a simple semidefinite programming (SDP) algorithm achieves the BEST POSSIBLE approximation ratio in the universe!"
          },
          "investigators": {
            "tagline": "PCP theorem, Long Code tests, and Majority is Stablest theorem.",
            "analogy": "Mossel, O'Donnell, and Oleszkiewicz (2005) proved the Majority is Stablest theorem in Gaussian space, confirming that UGC implies the optimality of the Goemans-Williamson Max-Cut bound α ≈ 0.87856.",
            "rules": [
              "Goemans-Williamson SDP constant α_GW = min (θ / π) / ((1 - cos θ)/2) ≈ 0.87856.",
              "Gaussian isoperimetric inequality.",
              "Lean 4 Mathlib boolean Fourier analysis."
            ],
            "mystery": "Can the 2-to-2 Games Theorem (proved in 2018) be elevated to complete the proof of UGC, or will spectral sub-exponential algorithms disprove it?",
            "funFact": "Subhash Khot formulated the conjecture in 2002."
          },
          "pioneers": {
            "tagline": "Sum-of-Squares (SOS) hierarchy and Lasserre semidefinite relaxations.",
            "analogy": "Khot, Minzer, and Safra (2018) proved the 2-to-2 Games Conjecture (without large alphabet constraints) using Grassmann graph expansion.",
            "rules": [
              "Grassmann graph expansion.",
              "Sum-of-Squares lower bounds.",
              "Formal verification in Lean 4."
            ],
            "mystery": "Semidefinite programming solvers verify round-off boundaries across thousands of random graph instances.",
            "funFact": "The Unique Games Conjecture is the organizing cathedral of modern computational approximation and discrete Fourier geometry."
          }
        },
        "history": [
          {
            "year": "2002",
            "author": "Subhash Khot",
            "note": "Poses the Unique Games Conjecture."
          },
          {
            "year": "2005",
            "author": "Mossel, O'Donnell & Oleszkiewicz",
            "note": "Prove 'Majority is Stablest' theorem linking UGC to optimal SDP bounds."
          },
          {
            "year": "2018",
            "author": "Khot, Minzer, Safra & Dinur",
            "note": "Prove the 2-to-2 Games Theorem via Grassmann expansion."
          }
        ]
      },
      "fr": {
        "name": "Unique Games Conjecture (UGC)",
        "subtitle": "The Foundation of Approximation Hardness and Rounding Barriers",
        "field": "Theoretical Computer Science & Semidefinite Programming",
        "statusBadge": "PRESTIGIOUS NEVANLINNA FRONTIER",
        "grades": {
          "explorers": {
            "tagline": "If two locked suspects always give answers with a unique cipher code, can a judge ever tell if they are almost totally lying or telling the truth?",
            "analogy": "In 2002, Indian-American computer scientist Subhash Khot proposed the Unique Games Conjecture (UGC). Consider a graph where each edge represents a 2-player game with a 'unique' permutation constraint (for every answer of player 1, there is EXACTLY ONE valid answer for player 2). Khot conjectured: It is NP-hard to distinguish whether 99% of the constraints can be satisfied, or at most 1% can be satisfied! If true, it proves that classic algorithms (like Goemans-Williamson 0.878 for Max-Cut) are the MATHEMATICAL MAXIMUM that ANY efficient computer can EVER achieve!",
            "rules": [
              "Graph G = (V, E) with alphabet size k.",
              "Permutation π_e for each edge e = (u, v): assignment satisfies e if x_v = π_e(x_u).",
              "Value val(G): maximum fraction of satisfied edges.",
              "UGC (Khot 2002): For any ε > 0, distinguishing val(G) ≥ 1 - ε from val(G) ≤ ε is NP-hard for large k."
            ],
            "mystery": "Subhash Khot was awarded the 2014 Nevanlinna Prize (IMU's highest award in theoretical computer science) for formulating the UGC and establishing its profound connections to discrete geometry!",
            "funFact": "If UGC is true, Raghavendra (2008) proved an astounding theorem: For EVERY constraint satisfaction problem, a simple semidefinite programming (SDP) algorithm achieves the BEST POSSIBLE approximation ratio in the universe!"
          },
          "investigators": {
            "tagline": "PCP theorem, Long Code tests, and Majority is Stablest theorem.",
            "analogy": "Mossel, O'Donnell, and Oleszkiewicz (2005) proved the Majority is Stablest theorem in Gaussian space, confirming that UGC implies the optimality of the Goemans-Williamson Max-Cut bound α ≈ 0.87856.",
            "rules": [
              "Goemans-Williamson SDP constant α_GW = min (θ / π) / ((1 - cos θ)/2) ≈ 0.87856.",
              "Gaussian isoperimetric inequality.",
              "Lean 4 Mathlib boolean Fourier analysis."
            ],
            "mystery": "Can the 2-to-2 Games Theorem (proved in 2018) be elevated to complete the proof of UGC, or will spectral sub-exponential algorithms disprove it?",
            "funFact": "Subhash Khot formulated the conjecture in 2002."
          },
          "pioneers": {
            "tagline": "Sum-of-Squares (SOS) hierarchy and Lasserre semidefinite relaxations.",
            "analogy": "Khot, Minzer, and Safra (2018) proved the 2-to-2 Games Conjecture (without large alphabet constraints) using Grassmann graph expansion.",
            "rules": [
              "Grassmann graph expansion.",
              "Sum-of-Squares lower bounds.",
              "Formal verification in Lean 4."
            ],
            "mystery": "Semidefinite programming solvers verify round-off boundaries across thousands of random graph instances.",
            "funFact": "The Unique Games Conjecture is the organizing cathedral of modern computational approximation and discrete Fourier geometry."
          }
        },
        "history": [
          {
            "year": "2002",
            "author": "Subhash Khot",
            "note": "Poses the Unique Games Conjecture."
          },
          {
            "year": "2005",
            "author": "Mossel, O'Donnell & Oleszkiewicz",
            "note": "Prove 'Majority is Stablest' theorem linking UGC to optimal SDP bounds."
          },
          {
            "year": "2018",
            "author": "Khot, Minzer, Safra & Dinur",
            "note": "Prove the 2-to-2 Games Theorem via Grassmann expansion."
          }
        ]
      },
      "it": {
        "name": "Unique Games Conjecture (UGC)",
        "subtitle": "The Foundation of Approximation Hardness and Rounding Barriers",
        "field": "Theoretical Computer Science & Semidefinite Programming",
        "statusBadge": "PRESTIGIOUS NEVANLINNA FRONTIER",
        "grades": {
          "explorers": {
            "tagline": "If two locked suspects always give answers with a unique cipher code, can a judge ever tell if they are almost totally lying or telling the truth?",
            "analogy": "In 2002, Indian-American computer scientist Subhash Khot proposed the Unique Games Conjecture (UGC). Consider a graph where each edge represents a 2-player game with a 'unique' permutation constraint (for every answer of player 1, there is EXACTLY ONE valid answer for player 2). Khot conjectured: It is NP-hard to distinguish whether 99% of the constraints can be satisfied, or at most 1% can be satisfied! If true, it proves that classic algorithms (like Goemans-Williamson 0.878 for Max-Cut) are the MATHEMATICAL MAXIMUM that ANY efficient computer can EVER achieve!",
            "rules": [
              "Graph G = (V, E) with alphabet size k.",
              "Permutation π_e for each edge e = (u, v): assignment satisfies e if x_v = π_e(x_u).",
              "Value val(G): maximum fraction of satisfied edges.",
              "UGC (Khot 2002): For any ε > 0, distinguishing val(G) ≥ 1 - ε from val(G) ≤ ε is NP-hard for large k."
            ],
            "mystery": "Subhash Khot was awarded the 2014 Nevanlinna Prize (IMU's highest award in theoretical computer science) for formulating the UGC and establishing its profound connections to discrete geometry!",
            "funFact": "If UGC is true, Raghavendra (2008) proved an astounding theorem: For EVERY constraint satisfaction problem, a simple semidefinite programming (SDP) algorithm achieves the BEST POSSIBLE approximation ratio in the universe!"
          },
          "investigators": {
            "tagline": "PCP theorem, Long Code tests, and Majority is Stablest theorem.",
            "analogy": "Mossel, O'Donnell, and Oleszkiewicz (2005) proved the Majority is Stablest theorem in Gaussian space, confirming that UGC implies the optimality of the Goemans-Williamson Max-Cut bound α ≈ 0.87856.",
            "rules": [
              "Goemans-Williamson SDP constant α_GW = min (θ / π) / ((1 - cos θ)/2) ≈ 0.87856.",
              "Gaussian isoperimetric inequality.",
              "Lean 4 Mathlib boolean Fourier analysis."
            ],
            "mystery": "Can the 2-to-2 Games Theorem (proved in 2018) be elevated to complete the proof of UGC, or will spectral sub-exponential algorithms disprove it?",
            "funFact": "Subhash Khot formulated the conjecture in 2002."
          },
          "pioneers": {
            "tagline": "Sum-of-Squares (SOS) hierarchy and Lasserre semidefinite relaxations.",
            "analogy": "Khot, Minzer, and Safra (2018) proved the 2-to-2 Games Conjecture (without large alphabet constraints) using Grassmann graph expansion.",
            "rules": [
              "Grassmann graph expansion.",
              "Sum-of-Squares lower bounds.",
              "Formal verification in Lean 4."
            ],
            "mystery": "Semidefinite programming solvers verify round-off boundaries across thousands of random graph instances.",
            "funFact": "The Unique Games Conjecture is the organizing cathedral of modern computational approximation and discrete Fourier geometry."
          }
        },
        "history": [
          {
            "year": "2002",
            "author": "Subhash Khot",
            "note": "Poses the Unique Games Conjecture."
          },
          {
            "year": "2005",
            "author": "Mossel, O'Donnell & Oleszkiewicz",
            "note": "Prove 'Majority is Stablest' theorem linking UGC to optimal SDP bounds."
          },
          {
            "year": "2018",
            "author": "Khot, Minzer, Safra & Dinur",
            "note": "Prove the 2-to-2 Games Theorem via Grassmann expansion."
          }
        ]
      },
      "ja": {
        "name": "Unique Games Conjecture (UGC)",
        "subtitle": "The Foundation of Approximation Hardness and Rounding Barriers",
        "field": "Theoretical Computer Science & Semidefinite Programming",
        "statusBadge": "PRESTIGIOUS NEVANLINNA FRONTIER",
        "grades": {
          "explorers": {
            "tagline": "If two locked suspects always give answers with a unique cipher code, can a judge ever tell if they are almost totally lying or telling the truth?",
            "analogy": "In 2002, Indian-American computer scientist Subhash Khot proposed the Unique Games Conjecture (UGC). Consider a graph where each edge represents a 2-player game with a 'unique' permutation constraint (for every answer of player 1, there is EXACTLY ONE valid answer for player 2). Khot conjectured: It is NP-hard to distinguish whether 99% of the constraints can be satisfied, or at most 1% can be satisfied! If true, it proves that classic algorithms (like Goemans-Williamson 0.878 for Max-Cut) are the MATHEMATICAL MAXIMUM that ANY efficient computer can EVER achieve!",
            "rules": [
              "Graph G = (V, E) with alphabet size k.",
              "Permutation π_e for each edge e = (u, v): assignment satisfies e if x_v = π_e(x_u).",
              "Value val(G): maximum fraction of satisfied edges.",
              "UGC (Khot 2002): For any ε > 0, distinguishing val(G) ≥ 1 - ε from val(G) ≤ ε is NP-hard for large k."
            ],
            "mystery": "Subhash Khot was awarded the 2014 Nevanlinna Prize (IMU's highest award in theoretical computer science) for formulating the UGC and establishing its profound connections to discrete geometry!",
            "funFact": "If UGC is true, Raghavendra (2008) proved an astounding theorem: For EVERY constraint satisfaction problem, a simple semidefinite programming (SDP) algorithm achieves the BEST POSSIBLE approximation ratio in the universe!"
          },
          "investigators": {
            "tagline": "PCP theorem, Long Code tests, and Majority is Stablest theorem.",
            "analogy": "Mossel, O'Donnell, and Oleszkiewicz (2005) proved the Majority is Stablest theorem in Gaussian space, confirming that UGC implies the optimality of the Goemans-Williamson Max-Cut bound α ≈ 0.87856.",
            "rules": [
              "Goemans-Williamson SDP constant α_GW = min (θ / π) / ((1 - cos θ)/2) ≈ 0.87856.",
              "Gaussian isoperimetric inequality.",
              "Lean 4 Mathlib boolean Fourier analysis."
            ],
            "mystery": "Can the 2-to-2 Games Theorem (proved in 2018) be elevated to complete the proof of UGC, or will spectral sub-exponential algorithms disprove it?",
            "funFact": "Subhash Khot formulated the conjecture in 2002."
          },
          "pioneers": {
            "tagline": "Sum-of-Squares (SOS) hierarchy and Lasserre semidefinite relaxations.",
            "analogy": "Khot, Minzer, and Safra (2018) proved the 2-to-2 Games Conjecture (without large alphabet constraints) using Grassmann graph expansion.",
            "rules": [
              "Grassmann graph expansion.",
              "Sum-of-Squares lower bounds.",
              "Formal verification in Lean 4."
            ],
            "mystery": "Semidefinite programming solvers verify round-off boundaries across thousands of random graph instances.",
            "funFact": "The Unique Games Conjecture is the organizing cathedral of modern computational approximation and discrete Fourier geometry."
          }
        },
        "history": [
          {
            "year": "2002",
            "author": "Subhash Khot",
            "note": "Poses the Unique Games Conjecture."
          },
          {
            "year": "2005",
            "author": "Mossel, O'Donnell & Oleszkiewicz",
            "note": "Prove 'Majority is Stablest' theorem linking UGC to optimal SDP bounds."
          },
          {
            "year": "2018",
            "author": "Khot, Minzer, Safra & Dinur",
            "note": "Prove the 2-to-2 Games Theorem via Grassmann expansion."
          }
        ]
      },
      "ko": {
        "name": "Unique Games Conjecture (UGC)",
        "subtitle": "The Foundation of Approximation Hardness and Rounding Barriers",
        "field": "Theoretical Computer Science & Semidefinite Programming",
        "statusBadge": "PRESTIGIOUS NEVANLINNA FRONTIER",
        "grades": {
          "explorers": {
            "tagline": "If two locked suspects always give answers with a unique cipher code, can a judge ever tell if they are almost totally lying or telling the truth?",
            "analogy": "In 2002, Indian-American computer scientist Subhash Khot proposed the Unique Games Conjecture (UGC). Consider a graph where each edge represents a 2-player game with a 'unique' permutation constraint (for every answer of player 1, there is EXACTLY ONE valid answer for player 2). Khot conjectured: It is NP-hard to distinguish whether 99% of the constraints can be satisfied, or at most 1% can be satisfied! If true, it proves that classic algorithms (like Goemans-Williamson 0.878 for Max-Cut) are the MATHEMATICAL MAXIMUM that ANY efficient computer can EVER achieve!",
            "rules": [
              "Graph G = (V, E) with alphabet size k.",
              "Permutation π_e for each edge e = (u, v): assignment satisfies e if x_v = π_e(x_u).",
              "Value val(G): maximum fraction of satisfied edges.",
              "UGC (Khot 2002): For any ε > 0, distinguishing val(G) ≥ 1 - ε from val(G) ≤ ε is NP-hard for large k."
            ],
            "mystery": "Subhash Khot was awarded the 2014 Nevanlinna Prize (IMU's highest award in theoretical computer science) for formulating the UGC and establishing its profound connections to discrete geometry!",
            "funFact": "If UGC is true, Raghavendra (2008) proved an astounding theorem: For EVERY constraint satisfaction problem, a simple semidefinite programming (SDP) algorithm achieves the BEST POSSIBLE approximation ratio in the universe!"
          },
          "investigators": {
            "tagline": "PCP theorem, Long Code tests, and Majority is Stablest theorem.",
            "analogy": "Mossel, O'Donnell, and Oleszkiewicz (2005) proved the Majority is Stablest theorem in Gaussian space, confirming that UGC implies the optimality of the Goemans-Williamson Max-Cut bound α ≈ 0.87856.",
            "rules": [
              "Goemans-Williamson SDP constant α_GW = min (θ / π) / ((1 - cos θ)/2) ≈ 0.87856.",
              "Gaussian isoperimetric inequality.",
              "Lean 4 Mathlib boolean Fourier analysis."
            ],
            "mystery": "Can the 2-to-2 Games Theorem (proved in 2018) be elevated to complete the proof of UGC, or will spectral sub-exponential algorithms disprove it?",
            "funFact": "Subhash Khot formulated the conjecture in 2002."
          },
          "pioneers": {
            "tagline": "Sum-of-Squares (SOS) hierarchy and Lasserre semidefinite relaxations.",
            "analogy": "Khot, Minzer, and Safra (2018) proved the 2-to-2 Games Conjecture (without large alphabet constraints) using Grassmann graph expansion.",
            "rules": [
              "Grassmann graph expansion.",
              "Sum-of-Squares lower bounds.",
              "Formal verification in Lean 4."
            ],
            "mystery": "Semidefinite programming solvers verify round-off boundaries across thousands of random graph instances.",
            "funFact": "The Unique Games Conjecture is the organizing cathedral of modern computational approximation and discrete Fourier geometry."
          }
        },
        "history": [
          {
            "year": "2002",
            "author": "Subhash Khot",
            "note": "Poses the Unique Games Conjecture."
          },
          {
            "year": "2005",
            "author": "Mossel, O'Donnell & Oleszkiewicz",
            "note": "Prove 'Majority is Stablest' theorem linking UGC to optimal SDP bounds."
          },
          {
            "year": "2018",
            "author": "Khot, Minzer, Safra & Dinur",
            "note": "Prove the 2-to-2 Games Theorem via Grassmann expansion."
          }
        ]
      },
      "zh-Hans": {
        "name": "独占博弈猜想（UGC 猜想）",
        "subtitle": "现代近似算法硬度理论的绝对核心基石（Subhash Khot 2002年提出）",
        "field": "理论计算机科学 & 半正定规划与计算硬度",
        "statusBadge": "奈望林纳奖核心前沿猜想",
        "grades": {
          "explorers": {
            "tagline": "两名被隔离审讯的嫌疑犯只能用专属暗号回答，法官能不能在极短时间内分清他们是在‘全盘撒谎’还是‘坦白从宽’？",
            "analogy": "2002年印裔理论计算机科学家苏巴什·科特提出了震惊复杂性学界的‘独占博弈猜想’（UGC）。在一个网络中，每条边代表两位被隔离参与者之间的博弈约束，且约束具有‘单射置换唯一性’（即玩家1每给出一个选项，玩家2有且仅有一个合法对应选项）。科特猜想：想要在多项式时间内区分‘这个网络有 99% 的约束能同时满足’与‘至多只有 1% 的约束能满足’是属于 NP-难的！如果 UGC 成立，它将终结数百个经典组合优化问题，严格证明如著名的 MAX-CUT 最大割 0.878 近似算法已经达到了全宇宙任何多项式算法的绝对极限！",
            "rules": [
              "字符集大小为 $k$ 的约束图 $G = (V, E)$。",
              "每条边上配备置换映射 $\\pi_e$：若 $x_v = \\pi_e(x_u)$ 则约束满足。",
              "博弈满足率 $\\text{val}(G)$：全局最多能同时满足的边比例。",
              "UGC 猜想：对于任意小 $\\varepsilon > 0$，区分 $\\text{val} \\ge 1 - \\varepsilon$ 与 $\\text{val} \\le \\varepsilon$ 是 NP-难的！"
            ],
            "mystery": "苏巴什·科特凭借提出 UGC 及其在几何分析中的深远洞见，荣获了国际数学联盟（IMU）计算数学最高荣誉——2014年奈望林纳奖！",
            "funFact": "若 UGC 为真，拉加文德拉在2008年证明了一个天神般的定理：对全宇宙‘每一个’约束满足问题，通用的半正定规划 (SDP) 算法所达到的精度就是数学上不可逾越的终极天花板！"
          },
          "investigators": {
            "tagline": "PCP 概率可检验证明定理、长编码测试与‘多数决最稳定定理’(Majority is Stablest)。",
            "analogy": "莫塞尔等人证明了高斯噪声下的多数决最稳定定理，确立了在 UGC 假定下格芒斯-威廉姆森 0.878 最大割算法的绝对最优性。",
            "rules": [
              "半正定规划极值常数 $\\alpha_{GW} \\approx 0.87856$。",
              "博雷尔高斯空间等周不等式。",
              "Lean 4 布尔函数调和分析形式化。"
            ],
            "mystery": "2018年获证的‘2对2博弈定理’能否最终跨越到独占博弈，还是说高阶拉普拉斯谱算法会构造出亚指数时间反例？",
            "funFact": "苏巴什·科特于2002年提出。"
          },
          "pioneers": {
            "tagline": "平方和 (SOS) 多项式松弛层级与拉塞尔半正定凸优化。",
            "analogy": "科特、明泽与萨夫拉在2018年运用格拉斯曼图谱膨胀性证明了2对2博弈猜想，完成了 UGC 最关键的里程碑阶梯！",
            "rules": [
              "格拉斯曼线性子空间图谱扩张性。",
              "SOS 高阶凸松弛下界形式化。",
              "Lean 4 离散傅里叶分析库。"
            ],
            "mystery": "内点法半正定优化引擎在计算机上高精度测试随机独占博弈，验证松弛割边界。",
            "funFact": "独占博弈猜想是当代计算近似理论与离散傅里叶等周几何学最宏伟的组织大教堂。"
          }
        },
        "history": [
          {
            "year": "2002",
            "author": "苏巴什·科特",
            "note": "正式提出独占博弈猜想。"
          },
          {
            "year": "2005",
            "author": "莫塞尔团队",
            "note": "证明多数决最稳定定理，锁定 0.878 最优界！"
          },
          {
            "year": "2018",
            "author": "科特、明泽、迪努尔团队",
            "note": "攻克 2对2 博弈定理，取得历史性突破！"
          }
        ]
      },
      "zh-Hant": {
        "name": "Unique Games Conjecture (UGC)",
        "subtitle": "The Foundation of Approximation Hardness and Rounding Barriers",
        "field": "Theoretical Computer Science & Semidefinite Programming",
        "statusBadge": "PRESTIGIOUS NEVANLINNA FRONTIER",
        "grades": {
          "explorers": {
            "tagline": "If two locked suspects always give answers with a unique cipher code, can a judge ever tell if they are almost totally lying or telling the truth?",
            "analogy": "In 2002, Indian-American computer scientist Subhash Khot proposed the Unique Games Conjecture (UGC). Consider a graph where each edge represents a 2-player game with a 'unique' permutation constraint (for every answer of player 1, there is EXACTLY ONE valid answer for player 2). Khot conjectured: It is NP-hard to distinguish whether 99% of the constraints can be satisfied, or at most 1% can be satisfied! If true, it proves that classic algorithms (like Goemans-Williamson 0.878 for Max-Cut) are the MATHEMATICAL MAXIMUM that ANY efficient computer can EVER achieve!",
            "rules": [
              "Graph G = (V, E) with alphabet size k.",
              "Permutation π_e for each edge e = (u, v): assignment satisfies e if x_v = π_e(x_u).",
              "Value val(G): maximum fraction of satisfied edges.",
              "UGC (Khot 2002): For any ε > 0, distinguishing val(G) ≥ 1 - ε from val(G) ≤ ε is NP-hard for large k."
            ],
            "mystery": "Subhash Khot was awarded the 2014 Nevanlinna Prize (IMU's highest award in theoretical computer science) for formulating the UGC and establishing its profound connections to discrete geometry!",
            "funFact": "If UGC is true, Raghavendra (2008) proved an astounding theorem: For EVERY constraint satisfaction problem, a simple semidefinite programming (SDP) algorithm achieves the BEST POSSIBLE approximation ratio in the universe!"
          },
          "investigators": {
            "tagline": "PCP theorem, Long Code tests, and Majority is Stablest theorem.",
            "analogy": "Mossel, O'Donnell, and Oleszkiewicz (2005) proved the Majority is Stablest theorem in Gaussian space, confirming that UGC implies the optimality of the Goemans-Williamson Max-Cut bound α ≈ 0.87856.",
            "rules": [
              "Goemans-Williamson SDP constant α_GW = min (θ / π) / ((1 - cos θ)/2) ≈ 0.87856.",
              "Gaussian isoperimetric inequality.",
              "Lean 4 Mathlib boolean Fourier analysis."
            ],
            "mystery": "Can the 2-to-2 Games Theorem (proved in 2018) be elevated to complete the proof of UGC, or will spectral sub-exponential algorithms disprove it?",
            "funFact": "Subhash Khot formulated the conjecture in 2002."
          },
          "pioneers": {
            "tagline": "Sum-of-Squares (SOS) hierarchy and Lasserre semidefinite relaxations.",
            "analogy": "Khot, Minzer, and Safra (2018) proved the 2-to-2 Games Conjecture (without large alphabet constraints) using Grassmann graph expansion.",
            "rules": [
              "Grassmann graph expansion.",
              "Sum-of-Squares lower bounds.",
              "Formal verification in Lean 4."
            ],
            "mystery": "Semidefinite programming solvers verify round-off boundaries across thousands of random graph instances.",
            "funFact": "The Unique Games Conjecture is the organizing cathedral of modern computational approximation and discrete Fourier geometry."
          }
        },
        "history": [
          {
            "year": "2002",
            "author": "Subhash Khot",
            "note": "Poses the Unique Games Conjecture."
          },
          {
            "year": "2005",
            "author": "Mossel, O'Donnell & Oleszkiewicz",
            "note": "Prove 'Majority is Stablest' theorem linking UGC to optimal SDP bounds."
          },
          {
            "year": "2018",
            "author": "Khot, Minzer, Safra & Dinur",
            "note": "Prove the 2-to-2 Games Theorem via Grassmann expansion."
          }
        ]
      }
    }
  },
  {
    "id": "sensitivity",
    "icon": "💡",
    "difficulty": "All Ages",
    "domain": "computer-science",
    "category": "computer-science",
    "isMillennium": false,
    "isAIFrontier": true,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Data.Matrix.Basic\n-- Sensitivity Conjecture (Nisan & Szegedy 1992, Proved by Hao Huang in 2019)\n-- For every Boolean function f: {0, 1}ⁿ → {0, 1}, deg(f) ≤ s(f)².\n-- Huang proved that every induced subgraph of Q_n with > 2^{n-1} vertices has max degree ≥ √n.",
    "locales": {
      "en": {
        "name": "The Sensitivity Conjecture",
        "subtitle": "Maximum Degree of Hypercube Subgraphs Exceeds $\\sqrt{n}$ (Solved by Hao Huang 2019)",
        "field": "Boolean Function Analysis & Spectral Graph Theory",
        "statusBadge": "SOLVED THEOREM (HUANG 2019)",
        "grades": {
          "explorers": {
            "tagline": "If you flip one switch in a light control room, how sensitive can the entire house be?",
            "analogy": "For a Boolean computer circuit $f(x_1, ..., x_n)$, 'sensitivity' measures how often flipping a single input bit flips the output. For nearly 30 years, computer scientists showed that almost ALL complexity measures (block sensitivity, certificate complexity, polynomial degree, quantum query complexity) were polynomially related—EXCEPT sensitivity, which stood stubbornly isolated. In July 2019, Chinese mathematician Hao Huang at Emory University solved the 30-year-old riddle in a breathtaking TWO-PAGE proof using simple matrix eigenvalues and Cauchy interlacing!",
            "rules": [
              "Boolean hypercube Q_n = {0, 1}ⁿ with 2ⁿ vertices.",
              "Subcube induced subgraph H with 2^{n-1} + 1 vertices.",
              "Sensitivity Conjecture: s(f) is polynomially bounded by bs(f) (specifically deg(f) ≤ s(f)²).",
              "Huang (2019): Every induced subgraph on > 2^{n-1} vertices has max degree ≥ √n!"
            ],
            "mystery": "Hao Huang's proof took less than 20 lines of linear algebra! Scott Aaronson called it 'one of the most beautiful and clean proofs in the entire history of theoretical computer science'!",
            "funFact": "Hao Huang thought about the problem on and off for 7 years, writing down the breakthrough while sitting at a hotel lobby during a conference!"
          },
          "investigators": {
            "tagline": "Cauchy interlacing theorem, signed adjacency matrices, and spectral graph theory.",
            "analogy": "Huang recursively defined signed matrices A_n with A_n² = n I. By Cauchy's interlacing theorem, the largest eigenvalue of the principal submatrix of size > 2^{n-1} must be at least √n.",
            "rules": [
              "Recursive signed matrix: A_1 = [[0, 1], [1, 0]], A_{n+1} = [[A_n, I], [I, -A_n]].",
              "Property: A_n² = n I (eigenvalues are ±√n).",
              "Lean 4 Mathlib matrix eigenvalues."
            ],
            "mystery": "Can Huang's spectral method be adapted to prove lower bounds in communication complexity?",
            "funFact": "Noam Nisan and Mario Szegedy proposed the conjecture in 1992; solved by Hao Huang in 2019."
          },
          "pioneers": {
            "tagline": "Quantum query complexity and polynomial approximations.",
            "analogy": "Huang's theorem confirmed the equivalence of all quantum and classical query models up to polynomial factors.",
            "rules": [
              "Query complexity hierarchy: D(f), R(f), Q(f), bs(f), s(f).",
              "Goharshady formalization in Isabelle.",
              "Lean 4 Boolean analysis library."
            ],
            "mystery": "AI educational interactive labs let students toggle hypercube vertices and watch the induced maximum degree never drop below √n.",
            "funFact": "The Sensitivity Conjecture resolution stands as the eternal ode to the supreme triumph of elementary mathematical beauty."
          }
        },
        "history": [
          {
            "year": "1992",
            "author": "Noam Nisan & Mario Szegedy",
            "note": "Formulate the Sensitivity Conjecture for Boolean functions."
          },
          {
            "year": "2011",
            "author": "Scott Aaronson",
            "note": "Highlights sensitivity as the sole missing link in quantum query complexity."
          },
          {
            "year": "2019",
            "author": "Hao Huang (黄皓)",
            "note": "Publishes 2-page masterstroke proof solving the 30-year mystery."
          }
        ]
      },
      "de": {
        "name": "The Sensitivity Conjecture",
        "subtitle": "Maximum Degree of Hypercube Subgraphs Exceeds $\\sqrt{n}$ (Solved by Hao Huang 2019)",
        "field": "Boolean Function Analysis & Spectral Graph Theory",
        "statusBadge": "SOLVED THEOREM (HUANG 2019)",
        "grades": {
          "explorers": {
            "tagline": "If you flip one switch in a light control room, how sensitive can the entire house be?",
            "analogy": "For a Boolean computer circuit $f(x_1, ..., x_n)$, 'sensitivity' measures how often flipping a single input bit flips the output. For nearly 30 years, computer scientists showed that almost ALL complexity measures (block sensitivity, certificate complexity, polynomial degree, quantum query complexity) were polynomially related—EXCEPT sensitivity, which stood stubbornly isolated. In July 2019, Chinese mathematician Hao Huang at Emory University solved the 30-year-old riddle in a breathtaking TWO-PAGE proof using simple matrix eigenvalues and Cauchy interlacing!",
            "rules": [
              "Boolean hypercube Q_n = {0, 1}ⁿ with 2ⁿ vertices.",
              "Subcube induced subgraph H with 2^{n-1} + 1 vertices.",
              "Sensitivity Conjecture: s(f) is polynomially bounded by bs(f) (specifically deg(f) ≤ s(f)²).",
              "Huang (2019): Every induced subgraph on > 2^{n-1} vertices has max degree ≥ √n!"
            ],
            "mystery": "Hao Huang's proof took less than 20 lines of linear algebra! Scott Aaronson called it 'one of the most beautiful and clean proofs in the entire history of theoretical computer science'!",
            "funFact": "Hao Huang thought about the problem on and off for 7 years, writing down the breakthrough while sitting at a hotel lobby during a conference!"
          },
          "investigators": {
            "tagline": "Cauchy interlacing theorem, signed adjacency matrices, and spectral graph theory.",
            "analogy": "Huang recursively defined signed matrices A_n with A_n² = n I. By Cauchy's interlacing theorem, the largest eigenvalue of the principal submatrix of size > 2^{n-1} must be at least √n.",
            "rules": [
              "Recursive signed matrix: A_1 = [[0, 1], [1, 0]], A_{n+1} = [[A_n, I], [I, -A_n]].",
              "Property: A_n² = n I (eigenvalues are ±√n).",
              "Lean 4 Mathlib matrix eigenvalues."
            ],
            "mystery": "Can Huang's spectral method be adapted to prove lower bounds in communication complexity?",
            "funFact": "Noam Nisan and Mario Szegedy proposed the conjecture in 1992; solved by Hao Huang in 2019."
          },
          "pioneers": {
            "tagline": "Quantum query complexity and polynomial approximations.",
            "analogy": "Huang's theorem confirmed the equivalence of all quantum and classical query models up to polynomial factors.",
            "rules": [
              "Query complexity hierarchy: D(f), R(f), Q(f), bs(f), s(f).",
              "Goharshady formalization in Isabelle.",
              "Lean 4 Boolean analysis library."
            ],
            "mystery": "AI educational interactive labs let students toggle hypercube vertices and watch the induced maximum degree never drop below √n.",
            "funFact": "The Sensitivity Conjecture resolution stands as the eternal ode to the supreme triumph of elementary mathematical beauty."
          }
        },
        "history": [
          {
            "year": "1992",
            "author": "Noam Nisan & Mario Szegedy",
            "note": "Formulate the Sensitivity Conjecture for Boolean functions."
          },
          {
            "year": "2011",
            "author": "Scott Aaronson",
            "note": "Highlights sensitivity as the sole missing link in quantum query complexity."
          },
          {
            "year": "2019",
            "author": "Hao Huang (黄皓)",
            "note": "Publishes 2-page masterstroke proof solving the 30-year mystery."
          }
        ]
      },
      "fr": {
        "name": "The Sensitivity Conjecture",
        "subtitle": "Maximum Degree of Hypercube Subgraphs Exceeds $\\sqrt{n}$ (Solved by Hao Huang 2019)",
        "field": "Boolean Function Analysis & Spectral Graph Theory",
        "statusBadge": "SOLVED THEOREM (HUANG 2019)",
        "grades": {
          "explorers": {
            "tagline": "If you flip one switch in a light control room, how sensitive can the entire house be?",
            "analogy": "For a Boolean computer circuit $f(x_1, ..., x_n)$, 'sensitivity' measures how often flipping a single input bit flips the output. For nearly 30 years, computer scientists showed that almost ALL complexity measures (block sensitivity, certificate complexity, polynomial degree, quantum query complexity) were polynomially related—EXCEPT sensitivity, which stood stubbornly isolated. In July 2019, Chinese mathematician Hao Huang at Emory University solved the 30-year-old riddle in a breathtaking TWO-PAGE proof using simple matrix eigenvalues and Cauchy interlacing!",
            "rules": [
              "Boolean hypercube Q_n = {0, 1}ⁿ with 2ⁿ vertices.",
              "Subcube induced subgraph H with 2^{n-1} + 1 vertices.",
              "Sensitivity Conjecture: s(f) is polynomially bounded by bs(f) (specifically deg(f) ≤ s(f)²).",
              "Huang (2019): Every induced subgraph on > 2^{n-1} vertices has max degree ≥ √n!"
            ],
            "mystery": "Hao Huang's proof took less than 20 lines of linear algebra! Scott Aaronson called it 'one of the most beautiful and clean proofs in the entire history of theoretical computer science'!",
            "funFact": "Hao Huang thought about the problem on and off for 7 years, writing down the breakthrough while sitting at a hotel lobby during a conference!"
          },
          "investigators": {
            "tagline": "Cauchy interlacing theorem, signed adjacency matrices, and spectral graph theory.",
            "analogy": "Huang recursively defined signed matrices A_n with A_n² = n I. By Cauchy's interlacing theorem, the largest eigenvalue of the principal submatrix of size > 2^{n-1} must be at least √n.",
            "rules": [
              "Recursive signed matrix: A_1 = [[0, 1], [1, 0]], A_{n+1} = [[A_n, I], [I, -A_n]].",
              "Property: A_n² = n I (eigenvalues are ±√n).",
              "Lean 4 Mathlib matrix eigenvalues."
            ],
            "mystery": "Can Huang's spectral method be adapted to prove lower bounds in communication complexity?",
            "funFact": "Noam Nisan and Mario Szegedy proposed the conjecture in 1992; solved by Hao Huang in 2019."
          },
          "pioneers": {
            "tagline": "Quantum query complexity and polynomial approximations.",
            "analogy": "Huang's theorem confirmed the equivalence of all quantum and classical query models up to polynomial factors.",
            "rules": [
              "Query complexity hierarchy: D(f), R(f), Q(f), bs(f), s(f).",
              "Goharshady formalization in Isabelle.",
              "Lean 4 Boolean analysis library."
            ],
            "mystery": "AI educational interactive labs let students toggle hypercube vertices and watch the induced maximum degree never drop below √n.",
            "funFact": "The Sensitivity Conjecture resolution stands as the eternal ode to the supreme triumph of elementary mathematical beauty."
          }
        },
        "history": [
          {
            "year": "1992",
            "author": "Noam Nisan & Mario Szegedy",
            "note": "Formulate the Sensitivity Conjecture for Boolean functions."
          },
          {
            "year": "2011",
            "author": "Scott Aaronson",
            "note": "Highlights sensitivity as the sole missing link in quantum query complexity."
          },
          {
            "year": "2019",
            "author": "Hao Huang (黄皓)",
            "note": "Publishes 2-page masterstroke proof solving the 30-year mystery."
          }
        ]
      },
      "it": {
        "name": "The Sensitivity Conjecture",
        "subtitle": "Maximum Degree of Hypercube Subgraphs Exceeds $\\sqrt{n}$ (Solved by Hao Huang 2019)",
        "field": "Boolean Function Analysis & Spectral Graph Theory",
        "statusBadge": "SOLVED THEOREM (HUANG 2019)",
        "grades": {
          "explorers": {
            "tagline": "If you flip one switch in a light control room, how sensitive can the entire house be?",
            "analogy": "For a Boolean computer circuit $f(x_1, ..., x_n)$, 'sensitivity' measures how often flipping a single input bit flips the output. For nearly 30 years, computer scientists showed that almost ALL complexity measures (block sensitivity, certificate complexity, polynomial degree, quantum query complexity) were polynomially related—EXCEPT sensitivity, which stood stubbornly isolated. In July 2019, Chinese mathematician Hao Huang at Emory University solved the 30-year-old riddle in a breathtaking TWO-PAGE proof using simple matrix eigenvalues and Cauchy interlacing!",
            "rules": [
              "Boolean hypercube Q_n = {0, 1}ⁿ with 2ⁿ vertices.",
              "Subcube induced subgraph H with 2^{n-1} + 1 vertices.",
              "Sensitivity Conjecture: s(f) is polynomially bounded by bs(f) (specifically deg(f) ≤ s(f)²).",
              "Huang (2019): Every induced subgraph on > 2^{n-1} vertices has max degree ≥ √n!"
            ],
            "mystery": "Hao Huang's proof took less than 20 lines of linear algebra! Scott Aaronson called it 'one of the most beautiful and clean proofs in the entire history of theoretical computer science'!",
            "funFact": "Hao Huang thought about the problem on and off for 7 years, writing down the breakthrough while sitting at a hotel lobby during a conference!"
          },
          "investigators": {
            "tagline": "Cauchy interlacing theorem, signed adjacency matrices, and spectral graph theory.",
            "analogy": "Huang recursively defined signed matrices A_n with A_n² = n I. By Cauchy's interlacing theorem, the largest eigenvalue of the principal submatrix of size > 2^{n-1} must be at least √n.",
            "rules": [
              "Recursive signed matrix: A_1 = [[0, 1], [1, 0]], A_{n+1} = [[A_n, I], [I, -A_n]].",
              "Property: A_n² = n I (eigenvalues are ±√n).",
              "Lean 4 Mathlib matrix eigenvalues."
            ],
            "mystery": "Can Huang's spectral method be adapted to prove lower bounds in communication complexity?",
            "funFact": "Noam Nisan and Mario Szegedy proposed the conjecture in 1992; solved by Hao Huang in 2019."
          },
          "pioneers": {
            "tagline": "Quantum query complexity and polynomial approximations.",
            "analogy": "Huang's theorem confirmed the equivalence of all quantum and classical query models up to polynomial factors.",
            "rules": [
              "Query complexity hierarchy: D(f), R(f), Q(f), bs(f), s(f).",
              "Goharshady formalization in Isabelle.",
              "Lean 4 Boolean analysis library."
            ],
            "mystery": "AI educational interactive labs let students toggle hypercube vertices and watch the induced maximum degree never drop below √n.",
            "funFact": "The Sensitivity Conjecture resolution stands as the eternal ode to the supreme triumph of elementary mathematical beauty."
          }
        },
        "history": [
          {
            "year": "1992",
            "author": "Noam Nisan & Mario Szegedy",
            "note": "Formulate the Sensitivity Conjecture for Boolean functions."
          },
          {
            "year": "2011",
            "author": "Scott Aaronson",
            "note": "Highlights sensitivity as the sole missing link in quantum query complexity."
          },
          {
            "year": "2019",
            "author": "Hao Huang (黄皓)",
            "note": "Publishes 2-page masterstroke proof solving the 30-year mystery."
          }
        ]
      },
      "ja": {
        "name": "The Sensitivity Conjecture",
        "subtitle": "Maximum Degree of Hypercube Subgraphs Exceeds $\\sqrt{n}$ (Solved by Hao Huang 2019)",
        "field": "Boolean Function Analysis & Spectral Graph Theory",
        "statusBadge": "SOLVED THEOREM (HUANG 2019)",
        "grades": {
          "explorers": {
            "tagline": "If you flip one switch in a light control room, how sensitive can the entire house be?",
            "analogy": "For a Boolean computer circuit $f(x_1, ..., x_n)$, 'sensitivity' measures how often flipping a single input bit flips the output. For nearly 30 years, computer scientists showed that almost ALL complexity measures (block sensitivity, certificate complexity, polynomial degree, quantum query complexity) were polynomially related—EXCEPT sensitivity, which stood stubbornly isolated. In July 2019, Chinese mathematician Hao Huang at Emory University solved the 30-year-old riddle in a breathtaking TWO-PAGE proof using simple matrix eigenvalues and Cauchy interlacing!",
            "rules": [
              "Boolean hypercube Q_n = {0, 1}ⁿ with 2ⁿ vertices.",
              "Subcube induced subgraph H with 2^{n-1} + 1 vertices.",
              "Sensitivity Conjecture: s(f) is polynomially bounded by bs(f) (specifically deg(f) ≤ s(f)²).",
              "Huang (2019): Every induced subgraph on > 2^{n-1} vertices has max degree ≥ √n!"
            ],
            "mystery": "Hao Huang's proof took less than 20 lines of linear algebra! Scott Aaronson called it 'one of the most beautiful and clean proofs in the entire history of theoretical computer science'!",
            "funFact": "Hao Huang thought about the problem on and off for 7 years, writing down the breakthrough while sitting at a hotel lobby during a conference!"
          },
          "investigators": {
            "tagline": "Cauchy interlacing theorem, signed adjacency matrices, and spectral graph theory.",
            "analogy": "Huang recursively defined signed matrices A_n with A_n² = n I. By Cauchy's interlacing theorem, the largest eigenvalue of the principal submatrix of size > 2^{n-1} must be at least √n.",
            "rules": [
              "Recursive signed matrix: A_1 = [[0, 1], [1, 0]], A_{n+1} = [[A_n, I], [I, -A_n]].",
              "Property: A_n² = n I (eigenvalues are ±√n).",
              "Lean 4 Mathlib matrix eigenvalues."
            ],
            "mystery": "Can Huang's spectral method be adapted to prove lower bounds in communication complexity?",
            "funFact": "Noam Nisan and Mario Szegedy proposed the conjecture in 1992; solved by Hao Huang in 2019."
          },
          "pioneers": {
            "tagline": "Quantum query complexity and polynomial approximations.",
            "analogy": "Huang's theorem confirmed the equivalence of all quantum and classical query models up to polynomial factors.",
            "rules": [
              "Query complexity hierarchy: D(f), R(f), Q(f), bs(f), s(f).",
              "Goharshady formalization in Isabelle.",
              "Lean 4 Boolean analysis library."
            ],
            "mystery": "AI educational interactive labs let students toggle hypercube vertices and watch the induced maximum degree never drop below √n.",
            "funFact": "The Sensitivity Conjecture resolution stands as the eternal ode to the supreme triumph of elementary mathematical beauty."
          }
        },
        "history": [
          {
            "year": "1992",
            "author": "Noam Nisan & Mario Szegedy",
            "note": "Formulate the Sensitivity Conjecture for Boolean functions."
          },
          {
            "year": "2011",
            "author": "Scott Aaronson",
            "note": "Highlights sensitivity as the sole missing link in quantum query complexity."
          },
          {
            "year": "2019",
            "author": "Hao Huang (黄皓)",
            "note": "Publishes 2-page masterstroke proof solving the 30-year mystery."
          }
        ]
      },
      "ko": {
        "name": "The Sensitivity Conjecture",
        "subtitle": "Maximum Degree of Hypercube Subgraphs Exceeds $\\sqrt{n}$ (Solved by Hao Huang 2019)",
        "field": "Boolean Function Analysis & Spectral Graph Theory",
        "statusBadge": "SOLVED THEOREM (HUANG 2019)",
        "grades": {
          "explorers": {
            "tagline": "If you flip one switch in a light control room, how sensitive can the entire house be?",
            "analogy": "For a Boolean computer circuit $f(x_1, ..., x_n)$, 'sensitivity' measures how often flipping a single input bit flips the output. For nearly 30 years, computer scientists showed that almost ALL complexity measures (block sensitivity, certificate complexity, polynomial degree, quantum query complexity) were polynomially related—EXCEPT sensitivity, which stood stubbornly isolated. In July 2019, Chinese mathematician Hao Huang at Emory University solved the 30-year-old riddle in a breathtaking TWO-PAGE proof using simple matrix eigenvalues and Cauchy interlacing!",
            "rules": [
              "Boolean hypercube Q_n = {0, 1}ⁿ with 2ⁿ vertices.",
              "Subcube induced subgraph H with 2^{n-1} + 1 vertices.",
              "Sensitivity Conjecture: s(f) is polynomially bounded by bs(f) (specifically deg(f) ≤ s(f)²).",
              "Huang (2019): Every induced subgraph on > 2^{n-1} vertices has max degree ≥ √n!"
            ],
            "mystery": "Hao Huang's proof took less than 20 lines of linear algebra! Scott Aaronson called it 'one of the most beautiful and clean proofs in the entire history of theoretical computer science'!",
            "funFact": "Hao Huang thought about the problem on and off for 7 years, writing down the breakthrough while sitting at a hotel lobby during a conference!"
          },
          "investigators": {
            "tagline": "Cauchy interlacing theorem, signed adjacency matrices, and spectral graph theory.",
            "analogy": "Huang recursively defined signed matrices A_n with A_n² = n I. By Cauchy's interlacing theorem, the largest eigenvalue of the principal submatrix of size > 2^{n-1} must be at least √n.",
            "rules": [
              "Recursive signed matrix: A_1 = [[0, 1], [1, 0]], A_{n+1} = [[A_n, I], [I, -A_n]].",
              "Property: A_n² = n I (eigenvalues are ±√n).",
              "Lean 4 Mathlib matrix eigenvalues."
            ],
            "mystery": "Can Huang's spectral method be adapted to prove lower bounds in communication complexity?",
            "funFact": "Noam Nisan and Mario Szegedy proposed the conjecture in 1992; solved by Hao Huang in 2019."
          },
          "pioneers": {
            "tagline": "Quantum query complexity and polynomial approximations.",
            "analogy": "Huang's theorem confirmed the equivalence of all quantum and classical query models up to polynomial factors.",
            "rules": [
              "Query complexity hierarchy: D(f), R(f), Q(f), bs(f), s(f).",
              "Goharshady formalization in Isabelle.",
              "Lean 4 Boolean analysis library."
            ],
            "mystery": "AI educational interactive labs let students toggle hypercube vertices and watch the induced maximum degree never drop below √n.",
            "funFact": "The Sensitivity Conjecture resolution stands as the eternal ode to the supreme triumph of elementary mathematical beauty."
          }
        },
        "history": [
          {
            "year": "1992",
            "author": "Noam Nisan & Mario Szegedy",
            "note": "Formulate the Sensitivity Conjecture for Boolean functions."
          },
          {
            "year": "2011",
            "author": "Scott Aaronson",
            "note": "Highlights sensitivity as the sole missing link in quantum query complexity."
          },
          {
            "year": "2019",
            "author": "Hao Huang (黄皓)",
            "note": "Publishes 2-page masterstroke proof solving the 30-year mystery."
          }
        ]
      },
      "zh-Hans": {
        "name": "敏感度猜想（黄皓两页纸奇迹定理）",
        "subtitle": "超立方体中超过半数顶点的导出子图最大度数至少为 $\\sqrt{n}$（黄皓2019年两页绝美证明破译30年名题）",
        "field": "布尔函数复杂性 & 谱图论",
        "statusBadge": "黄皓2019年绝美获证定理",
        "grades": {
          "explorers": {
            "tagline": "在一间布满开关的智能中控室里，随意拨动一个开关，整栋大厦的灯光会有多敏感？",
            "analogy": "对于一个布尔逻辑芯片电路 $f(x_1, \\dots, x_n)$，‘敏感度’衡量的是随意拨动其中某一个输入开关能否导致输出结果发生突变。近30年里计算机科学家证明了布尔函数的绝大多数度量（块敏感度、证书复杂度、多项式次数、量子查询复杂度）全部是多项式等价的——唯独‘敏感度’孤悬海外、无人能破。2019年7月，美国埃默里大学青年华人数学家黄皓发表了一篇仅有区区两页纸的论文，仅用最基础的高等代数柯西特征值交错定理与巧妙的符号矩阵构造，瞬间彻底秒杀了这一悬案！",
            "rules": [
              "包含 $2^n$ 个顶点的 $n$ 维布尔超立方体 $Q_n$。",
              "任意包含超过半数点（$2^{n-1} + 1$ 个顶点）的导出子图 $H$。",
              "敏感度猜想：敏感度与块敏感度多项式等价（$\\deg(f) \\le s(f)^2$）。",
              "黄皓定理 (2019)：该导出子图的最大顶点度数必定满足 $\\Delta(H) \\ge \\sqrt{n}$！"
            ],
            "mystery": "黄皓的核心证明只有不到20行线性代数！阿朗森盛赞其为‘理论计算机科学整个历史上最干净、最绝美的证明之一’！",
            "funFact": "黄皓断断续续思考这道题长达7年，最终在参加学术会议的一间酒店大堂里突然灵感爆发，一气呵成写下了这一神级证明！"
          },
          "investigators": {
            "tagline": "柯西特征值交错定理、符号邻接矩阵构造与谱图论。",
            "analogy": "黄皓递归构造了满足 $A_n^2 = n I$ 的符号对称矩阵。依据柯西特征值交错定理，任何阶数大于 $2^{n-1}$ 的主子矩阵的最大特征值必定至少为 $\\sqrt{n}$，而度数必然大于等于特征值，秒杀定论！",
            "rules": [
              "黄皓递归符号分块矩阵。",
              "矩阵自乘平方性质：$A_n^2 = n I$（特征值恰为 $\\pm\\sqrt{n}$）。",
              "Lean 4 矩阵特征值与交错定理形式化。"
            ],
            "mystery": "黄皓这种符号谱矩阵法能否推广至通信复杂度与电路下界的深层突破？",
            "funFact": "尼桑与塞格迪于1992年提出，黄皓于2019年彻底证明。"
          },
          "pioneers": {
            "tagline": "量子查询复杂度与多项式切比雪夫逼近。",
            "analogy": "黄皓定理彻底敲定了所有量子算法与经典查询模型在多项式等价意义下的大统一，消除了长达30年的理论不确定性。",
            "rules": [
              "布尔复杂度度量完整等价链。",
              "黄皓定理在定理证明器中的形式化。",
              "Lean 4 布尔函数敏感度形式化。"
            ],
            "mystery": "交互式超立方体实验室允许学生任意勾选子图顶点，直观见证最大度数永远坚挺地高于 $\\sqrt{n}$。",
            "funFact": "敏感度猜想的获证是初等线性代数极简之美击穿三十年迷雾的最崇高永恒赞歌。"
          }
        },
        "history": [
          {
            "year": "1992",
            "author": "尼桑 & 塞格迪",
            "note": "正式提出布尔函数敏感度猜想。"
          },
          {
            "year": "2011",
            "author": "斯科特·阿朗森",
            "note": "强调敏感度是量子复杂度中唯一缺失的孤环。"
          },
          {
            "year": "2019",
            "author": "黄皓",
            "note": "发表两页纸惊世绝伦证明，彻底攻克30年难题！"
          }
        ]
      },
      "zh-Hant": {
        "name": "The Sensitivity Conjecture",
        "subtitle": "Maximum Degree of Hypercube Subgraphs Exceeds $\\sqrt{n}$ (Solved by Hao Huang 2019)",
        "field": "Boolean Function Analysis & Spectral Graph Theory",
        "statusBadge": "SOLVED THEOREM (HUANG 2019)",
        "grades": {
          "explorers": {
            "tagline": "If you flip one switch in a light control room, how sensitive can the entire house be?",
            "analogy": "For a Boolean computer circuit $f(x_1, ..., x_n)$, 'sensitivity' measures how often flipping a single input bit flips the output. For nearly 30 years, computer scientists showed that almost ALL complexity measures (block sensitivity, certificate complexity, polynomial degree, quantum query complexity) were polynomially related—EXCEPT sensitivity, which stood stubbornly isolated. In July 2019, Chinese mathematician Hao Huang at Emory University solved the 30-year-old riddle in a breathtaking TWO-PAGE proof using simple matrix eigenvalues and Cauchy interlacing!",
            "rules": [
              "Boolean hypercube Q_n = {0, 1}ⁿ with 2ⁿ vertices.",
              "Subcube induced subgraph H with 2^{n-1} + 1 vertices.",
              "Sensitivity Conjecture: s(f) is polynomially bounded by bs(f) (specifically deg(f) ≤ s(f)²).",
              "Huang (2019): Every induced subgraph on > 2^{n-1} vertices has max degree ≥ √n!"
            ],
            "mystery": "Hao Huang's proof took less than 20 lines of linear algebra! Scott Aaronson called it 'one of the most beautiful and clean proofs in the entire history of theoretical computer science'!",
            "funFact": "Hao Huang thought about the problem on and off for 7 years, writing down the breakthrough while sitting at a hotel lobby during a conference!"
          },
          "investigators": {
            "tagline": "Cauchy interlacing theorem, signed adjacency matrices, and spectral graph theory.",
            "analogy": "Huang recursively defined signed matrices A_n with A_n² = n I. By Cauchy's interlacing theorem, the largest eigenvalue of the principal submatrix of size > 2^{n-1} must be at least √n.",
            "rules": [
              "Recursive signed matrix: A_1 = [[0, 1], [1, 0]], A_{n+1} = [[A_n, I], [I, -A_n]].",
              "Property: A_n² = n I (eigenvalues are ±√n).",
              "Lean 4 Mathlib matrix eigenvalues."
            ],
            "mystery": "Can Huang's spectral method be adapted to prove lower bounds in communication complexity?",
            "funFact": "Noam Nisan and Mario Szegedy proposed the conjecture in 1992; solved by Hao Huang in 2019."
          },
          "pioneers": {
            "tagline": "Quantum query complexity and polynomial approximations.",
            "analogy": "Huang's theorem confirmed the equivalence of all quantum and classical query models up to polynomial factors.",
            "rules": [
              "Query complexity hierarchy: D(f), R(f), Q(f), bs(f), s(f).",
              "Goharshady formalization in Isabelle.",
              "Lean 4 Boolean analysis library."
            ],
            "mystery": "AI educational interactive labs let students toggle hypercube vertices and watch the induced maximum degree never drop below √n.",
            "funFact": "The Sensitivity Conjecture resolution stands as the eternal ode to the supreme triumph of elementary mathematical beauty."
          }
        },
        "history": [
          {
            "year": "1992",
            "author": "Noam Nisan & Mario Szegedy",
            "note": "Formulate the Sensitivity Conjecture for Boolean functions."
          },
          {
            "year": "2011",
            "author": "Scott Aaronson",
            "note": "Highlights sensitivity as the sole missing link in quantum query complexity."
          },
          {
            "year": "2019",
            "author": "Hao Huang (黄皓)",
            "note": "Publishes 2-page masterstroke proof solving the 30-year mystery."
          }
        ]
      }
    }
  },
  {
    "id": "continuum-hypothesis",
    "icon": "♾️",
    "difficulty": "All Ages",
    "domain": "computer-science",
    "category": "computer-science",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.SetTheory.Cardinal.Basic\n-- Continuum Hypothesis (Georg Cantor, 1878 - Hilbert's First Problem)\n-- There is no set whose cardinality is strictly between that of the integers (ℵ₀) and real numbers (2^{ℵ₀}).\n-- Independent of ZFC (Gödel 1938, Cohen 1963 - Fields Medal).",
    "locales": {
      "en": {
        "name": "The Continuum Hypothesis (CH)",
        "subtitle": "Is There an Infinity Between Counting Numbers and the Real Line? (Independent of ZFC)",
        "field": "Mathematical Logic & Axiomatic Set Theory",
        "statusBadge": "INDEPENDENT OF AXIOMS (GÖDEL & COHEN)",
        "grades": {
          "explorers": {
            "tagline": "Are there infinities larger than counting numbers 1, 2, 3... but smaller than all points on a ruler?",
            "analogy": "In 1874, Georg Cantor made the mind-bending discovery that some infinities are bigger than others: The infinity of real numbers ($2^{\\aleph_0}$) is STRICTLY LARGER than the infinity of integers ($\\aleph_0$). Cantor conjectured the Continuum Hypothesis (CH): There is NO intermediate infinity strictly between them! In 1900, David Hilbert placed it as the VERY FIRST problem on his legendary list of 23 problems. In 1938 Kurt Gödel proved CH cannot be disproved in ZFC; in 1963 Paul Cohen invented 'forcing' to prove CH cannot be proved in ZFC! CH is completely INDEPENDENT of the standard foundations of mathematics!",
            "rules": [
              "Countable infinity |ℕ| = ℵ₀ (integers, fractions).",
              "Continuum infinity |ℝ| = 2^{ℵ₀} = ℵ_1 (points on a line).",
              "Continuum Hypothesis: 2^{ℵ₀} = ℵ_1 (no cardinal in between).",
              "Independence: ZFC cannot prove CH (Cohen 1963), nor refute CH (Gödel 1938)."
            ],
            "mystery": "Paul Cohen is the ONLY mathematician in history to win the Fields Medal (1966) for work in mathematical logic, for his invention of 'forcing'!",
            "funFact": "Cantor spent decades trying desperately to prove the hypothesis, suffering multiple mental breakdowns, never knowing that the axioms of mathematics themselves were insufficient to decide it!"
          },
          "investigators": {
            "tagline": "Gödel's constructible universe L, Cohen's forcing method, and generic filters.",
            "analogy": "Gödel constructed the inner model L satisfying ZFC + GCH. Cohen added continuum-many generic Cohen reals via poset forcing to build a model where 2^{ℵ₀} = ℵ_2.",
            "rules": [
              "Gödel's constructible hierarchy L_α.",
              "Cohen forcing poset ℙ = Add(ω, λ).",
              "Lean 4 Mathlib Cardinal arithmetic."
            ],
            "mystery": "Will Hugh Woodin's Ultimate L program or Martin's Maximum produce consensus new axioms that finally decide CH?",
            "funFact": "Georg Cantor in 1878; settled as independent by Gödel (1938) and Cohen (1963)."
          },
          "pioneers": {
            "tagline": "Large cardinals, Woodin cardinals, and Projective Determinacy (PD).",
            "analogy": "Woodin's Ω-logic shows that under suitable large cardinal axioms and canonical inner models, CH is resolved as false (2^{ℵ₀} = ℵ_2) in generic multiverses.",
            "rules": [
              "Axiom of Determinacy (AD) and L(ℝ).",
              "Woodin's Ω-conjecture.",
              "Formal set theory in Lean 4."
            ],
            "mystery": "AI logic theorem provers verify Gödel-Bernays and Zermelo-Fraenkel independence proofs with zero human ambiguity.",
            "funFact": "The Continuum Hypothesis is the timeless portal where mathematics looked directly into the mirror of its own absolute freedom and infinity."
          }
        },
        "history": [
          {
            "year": "1878",
            "author": "Georg Cantor",
            "note": "Formulates the Continuum Hypothesis after discovering uncountable infinities."
          },
          {
            "year": "1900",
            "author": "David Hilbert",
            "note": "Lists CH as Problem #1 of the 23 Paris Problems."
          },
          {
            "year": "1938",
            "author": "Kurt Gödel",
            "note": "Proves CH cannot be disproved in ZFC using constructible universe L."
          },
          {
            "year": "1963",
            "author": "Paul Cohen",
            "note": "Invents forcing to prove CH cannot be proved in ZFC (Fields Medal 1966)."
          }
        ]
      },
      "de": {
        "name": "The Continuum Hypothesis (CH)",
        "subtitle": "Is There an Infinity Between Counting Numbers and the Real Line? (Independent of ZFC)",
        "field": "Mathematical Logic & Axiomatic Set Theory",
        "statusBadge": "INDEPENDENT OF AXIOMS (GÖDEL & COHEN)",
        "grades": {
          "explorers": {
            "tagline": "Are there infinities larger than counting numbers 1, 2, 3... but smaller than all points on a ruler?",
            "analogy": "In 1874, Georg Cantor made the mind-bending discovery that some infinities are bigger than others: The infinity of real numbers ($2^{\\aleph_0}$) is STRICTLY LARGER than the infinity of integers ($\\aleph_0$). Cantor conjectured the Continuum Hypothesis (CH): There is NO intermediate infinity strictly between them! In 1900, David Hilbert placed it as the VERY FIRST problem on his legendary list of 23 problems. In 1938 Kurt Gödel proved CH cannot be disproved in ZFC; in 1963 Paul Cohen invented 'forcing' to prove CH cannot be proved in ZFC! CH is completely INDEPENDENT of the standard foundations of mathematics!",
            "rules": [
              "Countable infinity |ℕ| = ℵ₀ (integers, fractions).",
              "Continuum infinity |ℝ| = 2^{ℵ₀} = ℵ_1 (points on a line).",
              "Continuum Hypothesis: 2^{ℵ₀} = ℵ_1 (no cardinal in between).",
              "Independence: ZFC cannot prove CH (Cohen 1963), nor refute CH (Gödel 1938)."
            ],
            "mystery": "Paul Cohen is the ONLY mathematician in history to win the Fields Medal (1966) for work in mathematical logic, for his invention of 'forcing'!",
            "funFact": "Cantor spent decades trying desperately to prove the hypothesis, suffering multiple mental breakdowns, never knowing that the axioms of mathematics themselves were insufficient to decide it!"
          },
          "investigators": {
            "tagline": "Gödel's constructible universe L, Cohen's forcing method, and generic filters.",
            "analogy": "Gödel constructed the inner model L satisfying ZFC + GCH. Cohen added continuum-many generic Cohen reals via poset forcing to build a model where 2^{ℵ₀} = ℵ_2.",
            "rules": [
              "Gödel's constructible hierarchy L_α.",
              "Cohen forcing poset ℙ = Add(ω, λ).",
              "Lean 4 Mathlib Cardinal arithmetic."
            ],
            "mystery": "Will Hugh Woodin's Ultimate L program or Martin's Maximum produce consensus new axioms that finally decide CH?",
            "funFact": "Georg Cantor in 1878; settled as independent by Gödel (1938) and Cohen (1963)."
          },
          "pioneers": {
            "tagline": "Large cardinals, Woodin cardinals, and Projective Determinacy (PD).",
            "analogy": "Woodin's Ω-logic shows that under suitable large cardinal axioms and canonical inner models, CH is resolved as false (2^{ℵ₀} = ℵ_2) in generic multiverses.",
            "rules": [
              "Axiom of Determinacy (AD) and L(ℝ).",
              "Woodin's Ω-conjecture.",
              "Formal set theory in Lean 4."
            ],
            "mystery": "AI logic theorem provers verify Gödel-Bernays and Zermelo-Fraenkel independence proofs with zero human ambiguity.",
            "funFact": "The Continuum Hypothesis is the timeless portal where mathematics looked directly into the mirror of its own absolute freedom and infinity."
          }
        },
        "history": [
          {
            "year": "1878",
            "author": "Georg Cantor",
            "note": "Formulates the Continuum Hypothesis after discovering uncountable infinities."
          },
          {
            "year": "1900",
            "author": "David Hilbert",
            "note": "Lists CH as Problem #1 of the 23 Paris Problems."
          },
          {
            "year": "1938",
            "author": "Kurt Gödel",
            "note": "Proves CH cannot be disproved in ZFC using constructible universe L."
          },
          {
            "year": "1963",
            "author": "Paul Cohen",
            "note": "Invents forcing to prove CH cannot be proved in ZFC (Fields Medal 1966)."
          }
        ]
      },
      "fr": {
        "name": "The Continuum Hypothesis (CH)",
        "subtitle": "Is There an Infinity Between Counting Numbers and the Real Line? (Independent of ZFC)",
        "field": "Mathematical Logic & Axiomatic Set Theory",
        "statusBadge": "INDEPENDENT OF AXIOMS (GÖDEL & COHEN)",
        "grades": {
          "explorers": {
            "tagline": "Are there infinities larger than counting numbers 1, 2, 3... but smaller than all points on a ruler?",
            "analogy": "In 1874, Georg Cantor made the mind-bending discovery that some infinities are bigger than others: The infinity of real numbers ($2^{\\aleph_0}$) is STRICTLY LARGER than the infinity of integers ($\\aleph_0$). Cantor conjectured the Continuum Hypothesis (CH): There is NO intermediate infinity strictly between them! In 1900, David Hilbert placed it as the VERY FIRST problem on his legendary list of 23 problems. In 1938 Kurt Gödel proved CH cannot be disproved in ZFC; in 1963 Paul Cohen invented 'forcing' to prove CH cannot be proved in ZFC! CH is completely INDEPENDENT of the standard foundations of mathematics!",
            "rules": [
              "Countable infinity |ℕ| = ℵ₀ (integers, fractions).",
              "Continuum infinity |ℝ| = 2^{ℵ₀} = ℵ_1 (points on a line).",
              "Continuum Hypothesis: 2^{ℵ₀} = ℵ_1 (no cardinal in between).",
              "Independence: ZFC cannot prove CH (Cohen 1963), nor refute CH (Gödel 1938)."
            ],
            "mystery": "Paul Cohen is the ONLY mathematician in history to win the Fields Medal (1966) for work in mathematical logic, for his invention of 'forcing'!",
            "funFact": "Cantor spent decades trying desperately to prove the hypothesis, suffering multiple mental breakdowns, never knowing that the axioms of mathematics themselves were insufficient to decide it!"
          },
          "investigators": {
            "tagline": "Gödel's constructible universe L, Cohen's forcing method, and generic filters.",
            "analogy": "Gödel constructed the inner model L satisfying ZFC + GCH. Cohen added continuum-many generic Cohen reals via poset forcing to build a model where 2^{ℵ₀} = ℵ_2.",
            "rules": [
              "Gödel's constructible hierarchy L_α.",
              "Cohen forcing poset ℙ = Add(ω, λ).",
              "Lean 4 Mathlib Cardinal arithmetic."
            ],
            "mystery": "Will Hugh Woodin's Ultimate L program or Martin's Maximum produce consensus new axioms that finally decide CH?",
            "funFact": "Georg Cantor in 1878; settled as independent by Gödel (1938) and Cohen (1963)."
          },
          "pioneers": {
            "tagline": "Large cardinals, Woodin cardinals, and Projective Determinacy (PD).",
            "analogy": "Woodin's Ω-logic shows that under suitable large cardinal axioms and canonical inner models, CH is resolved as false (2^{ℵ₀} = ℵ_2) in generic multiverses.",
            "rules": [
              "Axiom of Determinacy (AD) and L(ℝ).",
              "Woodin's Ω-conjecture.",
              "Formal set theory in Lean 4."
            ],
            "mystery": "AI logic theorem provers verify Gödel-Bernays and Zermelo-Fraenkel independence proofs with zero human ambiguity.",
            "funFact": "The Continuum Hypothesis is the timeless portal where mathematics looked directly into the mirror of its own absolute freedom and infinity."
          }
        },
        "history": [
          {
            "year": "1878",
            "author": "Georg Cantor",
            "note": "Formulates the Continuum Hypothesis after discovering uncountable infinities."
          },
          {
            "year": "1900",
            "author": "David Hilbert",
            "note": "Lists CH as Problem #1 of the 23 Paris Problems."
          },
          {
            "year": "1938",
            "author": "Kurt Gödel",
            "note": "Proves CH cannot be disproved in ZFC using constructible universe L."
          },
          {
            "year": "1963",
            "author": "Paul Cohen",
            "note": "Invents forcing to prove CH cannot be proved in ZFC (Fields Medal 1966)."
          }
        ]
      },
      "it": {
        "name": "The Continuum Hypothesis (CH)",
        "subtitle": "Is There an Infinity Between Counting Numbers and the Real Line? (Independent of ZFC)",
        "field": "Mathematical Logic & Axiomatic Set Theory",
        "statusBadge": "INDEPENDENT OF AXIOMS (GÖDEL & COHEN)",
        "grades": {
          "explorers": {
            "tagline": "Are there infinities larger than counting numbers 1, 2, 3... but smaller than all points on a ruler?",
            "analogy": "In 1874, Georg Cantor made the mind-bending discovery that some infinities are bigger than others: The infinity of real numbers ($2^{\\aleph_0}$) is STRICTLY LARGER than the infinity of integers ($\\aleph_0$). Cantor conjectured the Continuum Hypothesis (CH): There is NO intermediate infinity strictly between them! In 1900, David Hilbert placed it as the VERY FIRST problem on his legendary list of 23 problems. In 1938 Kurt Gödel proved CH cannot be disproved in ZFC; in 1963 Paul Cohen invented 'forcing' to prove CH cannot be proved in ZFC! CH is completely INDEPENDENT of the standard foundations of mathematics!",
            "rules": [
              "Countable infinity |ℕ| = ℵ₀ (integers, fractions).",
              "Continuum infinity |ℝ| = 2^{ℵ₀} = ℵ_1 (points on a line).",
              "Continuum Hypothesis: 2^{ℵ₀} = ℵ_1 (no cardinal in between).",
              "Independence: ZFC cannot prove CH (Cohen 1963), nor refute CH (Gödel 1938)."
            ],
            "mystery": "Paul Cohen is the ONLY mathematician in history to win the Fields Medal (1966) for work in mathematical logic, for his invention of 'forcing'!",
            "funFact": "Cantor spent decades trying desperately to prove the hypothesis, suffering multiple mental breakdowns, never knowing that the axioms of mathematics themselves were insufficient to decide it!"
          },
          "investigators": {
            "tagline": "Gödel's constructible universe L, Cohen's forcing method, and generic filters.",
            "analogy": "Gödel constructed the inner model L satisfying ZFC + GCH. Cohen added continuum-many generic Cohen reals via poset forcing to build a model where 2^{ℵ₀} = ℵ_2.",
            "rules": [
              "Gödel's constructible hierarchy L_α.",
              "Cohen forcing poset ℙ = Add(ω, λ).",
              "Lean 4 Mathlib Cardinal arithmetic."
            ],
            "mystery": "Will Hugh Woodin's Ultimate L program or Martin's Maximum produce consensus new axioms that finally decide CH?",
            "funFact": "Georg Cantor in 1878; settled as independent by Gödel (1938) and Cohen (1963)."
          },
          "pioneers": {
            "tagline": "Large cardinals, Woodin cardinals, and Projective Determinacy (PD).",
            "analogy": "Woodin's Ω-logic shows that under suitable large cardinal axioms and canonical inner models, CH is resolved as false (2^{ℵ₀} = ℵ_2) in generic multiverses.",
            "rules": [
              "Axiom of Determinacy (AD) and L(ℝ).",
              "Woodin's Ω-conjecture.",
              "Formal set theory in Lean 4."
            ],
            "mystery": "AI logic theorem provers verify Gödel-Bernays and Zermelo-Fraenkel independence proofs with zero human ambiguity.",
            "funFact": "The Continuum Hypothesis is the timeless portal where mathematics looked directly into the mirror of its own absolute freedom and infinity."
          }
        },
        "history": [
          {
            "year": "1878",
            "author": "Georg Cantor",
            "note": "Formulates the Continuum Hypothesis after discovering uncountable infinities."
          },
          {
            "year": "1900",
            "author": "David Hilbert",
            "note": "Lists CH as Problem #1 of the 23 Paris Problems."
          },
          {
            "year": "1938",
            "author": "Kurt Gödel",
            "note": "Proves CH cannot be disproved in ZFC using constructible universe L."
          },
          {
            "year": "1963",
            "author": "Paul Cohen",
            "note": "Invents forcing to prove CH cannot be proved in ZFC (Fields Medal 1966)."
          }
        ]
      },
      "ja": {
        "name": "The Continuum Hypothesis (CH)",
        "subtitle": "Is There an Infinity Between Counting Numbers and the Real Line? (Independent of ZFC)",
        "field": "Mathematical Logic & Axiomatic Set Theory",
        "statusBadge": "INDEPENDENT OF AXIOMS (GÖDEL & COHEN)",
        "grades": {
          "explorers": {
            "tagline": "Are there infinities larger than counting numbers 1, 2, 3... but smaller than all points on a ruler?",
            "analogy": "In 1874, Georg Cantor made the mind-bending discovery that some infinities are bigger than others: The infinity of real numbers ($2^{\\aleph_0}$) is STRICTLY LARGER than the infinity of integers ($\\aleph_0$). Cantor conjectured the Continuum Hypothesis (CH): There is NO intermediate infinity strictly between them! In 1900, David Hilbert placed it as the VERY FIRST problem on his legendary list of 23 problems. In 1938 Kurt Gödel proved CH cannot be disproved in ZFC; in 1963 Paul Cohen invented 'forcing' to prove CH cannot be proved in ZFC! CH is completely INDEPENDENT of the standard foundations of mathematics!",
            "rules": [
              "Countable infinity |ℕ| = ℵ₀ (integers, fractions).",
              "Continuum infinity |ℝ| = 2^{ℵ₀} = ℵ_1 (points on a line).",
              "Continuum Hypothesis: 2^{ℵ₀} = ℵ_1 (no cardinal in between).",
              "Independence: ZFC cannot prove CH (Cohen 1963), nor refute CH (Gödel 1938)."
            ],
            "mystery": "Paul Cohen is the ONLY mathematician in history to win the Fields Medal (1966) for work in mathematical logic, for his invention of 'forcing'!",
            "funFact": "Cantor spent decades trying desperately to prove the hypothesis, suffering multiple mental breakdowns, never knowing that the axioms of mathematics themselves were insufficient to decide it!"
          },
          "investigators": {
            "tagline": "Gödel's constructible universe L, Cohen's forcing method, and generic filters.",
            "analogy": "Gödel constructed the inner model L satisfying ZFC + GCH. Cohen added continuum-many generic Cohen reals via poset forcing to build a model where 2^{ℵ₀} = ℵ_2.",
            "rules": [
              "Gödel's constructible hierarchy L_α.",
              "Cohen forcing poset ℙ = Add(ω, λ).",
              "Lean 4 Mathlib Cardinal arithmetic."
            ],
            "mystery": "Will Hugh Woodin's Ultimate L program or Martin's Maximum produce consensus new axioms that finally decide CH?",
            "funFact": "Georg Cantor in 1878; settled as independent by Gödel (1938) and Cohen (1963)."
          },
          "pioneers": {
            "tagline": "Large cardinals, Woodin cardinals, and Projective Determinacy (PD).",
            "analogy": "Woodin's Ω-logic shows that under suitable large cardinal axioms and canonical inner models, CH is resolved as false (2^{ℵ₀} = ℵ_2) in generic multiverses.",
            "rules": [
              "Axiom of Determinacy (AD) and L(ℝ).",
              "Woodin's Ω-conjecture.",
              "Formal set theory in Lean 4."
            ],
            "mystery": "AI logic theorem provers verify Gödel-Bernays and Zermelo-Fraenkel independence proofs with zero human ambiguity.",
            "funFact": "The Continuum Hypothesis is the timeless portal where mathematics looked directly into the mirror of its own absolute freedom and infinity."
          }
        },
        "history": [
          {
            "year": "1878",
            "author": "Georg Cantor",
            "note": "Formulates the Continuum Hypothesis after discovering uncountable infinities."
          },
          {
            "year": "1900",
            "author": "David Hilbert",
            "note": "Lists CH as Problem #1 of the 23 Paris Problems."
          },
          {
            "year": "1938",
            "author": "Kurt Gödel",
            "note": "Proves CH cannot be disproved in ZFC using constructible universe L."
          },
          {
            "year": "1963",
            "author": "Paul Cohen",
            "note": "Invents forcing to prove CH cannot be proved in ZFC (Fields Medal 1966)."
          }
        ]
      },
      "ko": {
        "name": "The Continuum Hypothesis (CH)",
        "subtitle": "Is There an Infinity Between Counting Numbers and the Real Line? (Independent of ZFC)",
        "field": "Mathematical Logic & Axiomatic Set Theory",
        "statusBadge": "INDEPENDENT OF AXIOMS (GÖDEL & COHEN)",
        "grades": {
          "explorers": {
            "tagline": "Are there infinities larger than counting numbers 1, 2, 3... but smaller than all points on a ruler?",
            "analogy": "In 1874, Georg Cantor made the mind-bending discovery that some infinities are bigger than others: The infinity of real numbers ($2^{\\aleph_0}$) is STRICTLY LARGER than the infinity of integers ($\\aleph_0$). Cantor conjectured the Continuum Hypothesis (CH): There is NO intermediate infinity strictly between them! In 1900, David Hilbert placed it as the VERY FIRST problem on his legendary list of 23 problems. In 1938 Kurt Gödel proved CH cannot be disproved in ZFC; in 1963 Paul Cohen invented 'forcing' to prove CH cannot be proved in ZFC! CH is completely INDEPENDENT of the standard foundations of mathematics!",
            "rules": [
              "Countable infinity |ℕ| = ℵ₀ (integers, fractions).",
              "Continuum infinity |ℝ| = 2^{ℵ₀} = ℵ_1 (points on a line).",
              "Continuum Hypothesis: 2^{ℵ₀} = ℵ_1 (no cardinal in between).",
              "Independence: ZFC cannot prove CH (Cohen 1963), nor refute CH (Gödel 1938)."
            ],
            "mystery": "Paul Cohen is the ONLY mathematician in history to win the Fields Medal (1966) for work in mathematical logic, for his invention of 'forcing'!",
            "funFact": "Cantor spent decades trying desperately to prove the hypothesis, suffering multiple mental breakdowns, never knowing that the axioms of mathematics themselves were insufficient to decide it!"
          },
          "investigators": {
            "tagline": "Gödel's constructible universe L, Cohen's forcing method, and generic filters.",
            "analogy": "Gödel constructed the inner model L satisfying ZFC + GCH. Cohen added continuum-many generic Cohen reals via poset forcing to build a model where 2^{ℵ₀} = ℵ_2.",
            "rules": [
              "Gödel's constructible hierarchy L_α.",
              "Cohen forcing poset ℙ = Add(ω, λ).",
              "Lean 4 Mathlib Cardinal arithmetic."
            ],
            "mystery": "Will Hugh Woodin's Ultimate L program or Martin's Maximum produce consensus new axioms that finally decide CH?",
            "funFact": "Georg Cantor in 1878; settled as independent by Gödel (1938) and Cohen (1963)."
          },
          "pioneers": {
            "tagline": "Large cardinals, Woodin cardinals, and Projective Determinacy (PD).",
            "analogy": "Woodin's Ω-logic shows that under suitable large cardinal axioms and canonical inner models, CH is resolved as false (2^{ℵ₀} = ℵ_2) in generic multiverses.",
            "rules": [
              "Axiom of Determinacy (AD) and L(ℝ).",
              "Woodin's Ω-conjecture.",
              "Formal set theory in Lean 4."
            ],
            "mystery": "AI logic theorem provers verify Gödel-Bernays and Zermelo-Fraenkel independence proofs with zero human ambiguity.",
            "funFact": "The Continuum Hypothesis is the timeless portal where mathematics looked directly into the mirror of its own absolute freedom and infinity."
          }
        },
        "history": [
          {
            "year": "1878",
            "author": "Georg Cantor",
            "note": "Formulates the Continuum Hypothesis after discovering uncountable infinities."
          },
          {
            "year": "1900",
            "author": "David Hilbert",
            "note": "Lists CH as Problem #1 of the 23 Paris Problems."
          },
          {
            "year": "1938",
            "author": "Kurt Gödel",
            "note": "Proves CH cannot be disproved in ZFC using constructible universe L."
          },
          {
            "year": "1963",
            "author": "Paul Cohen",
            "note": "Invents forcing to prove CH cannot be proved in ZFC (Fields Medal 1966)."
          }
        ]
      },
      "zh-Hans": {
        "name": "连续统假说（希尔伯特第一问题）",
        "subtitle": "自然数与实数轴之间是否存在第三种无穷大？（哥德尔与科恩证明在 ZFC 公理系下独立）",
        "field": "数理逻辑 & 公理化集合论",
        "statusBadge": "公理系统不可判定里程碑",
        "grades": {
          "explorers": {
            "tagline": "世上有没有某种奇妙的无穷大，比数不完的数字 1, 2, 3... 更大，却又比尺子上的点数更小？",
            "analogy": "1874年乔治·康托尔发现了颠覆人类文明认知的惊天秘密：‘无穷大’本身居然也有大小之分！连续实数轴上点的无穷大（$2^{\\aleph_0}$）严格大于全体自然数的无穷大（$\\aleph_0$）。康托尔随即提出连续统假说（CH）：在这两者之间，绝对不存在任何介于其间的第三种无穷大！1900年戴维·希尔伯特将其列为改变人类历史的23个数学难题之‘第一大难题’！1938年逻辑泰斗哥德尔证明：在标准 ZFC 公理体系内绝不可能证伪 CH；1963年保罗·科恩发明革命性的‘力迫法’（Forcing）证明：在 ZFC 内亦绝不可能证实 CH！连续统假说成为人类数学史上首个被严格证明‘超越现有公理极限’的不可判定神作！",
            "rules": [
              "可数无穷 $\\|\\mathbb{N}\\| = \\aleph_0$（自然数、有理数）。",
              "连续统无穷 $\\|\\mathbb{R}\\| = 2^{\\aleph_0}$（实数点）。",
              "连续统假说：$2^{\\aleph_0} = \\aleph_1$（其间无任何中间基数）。",
              "独立性定理：ZFC 公理系统既不能证明它，也不能证伪它！"
            ],
            "mystery": "保罗·科恩是全人类历史上唯一一位凭借在数理逻辑领域的贡献（发明力迫法）荣获菲尔兹奖的数学大师！",
            "funFact": "康托尔后半生为了证明连续统假说耗尽心血、甚至精神崩溃，但他绝不可能料到：当时的整套数学公理基石本身，在逻辑上根本不足以裁决它！"
          },
          "investigators": {
            "tagline": "哥德尔可构成模型 $L$、科恩力迫法 (Forcing) 与一般泛型滤子。",
            "analogy": "哥德尔构造了满足广义连续统假说的内部模型 $L$；科恩则通过偏序力迫引入了大量泛型实数，构造出 $2^{\\aleph_0} = \\aleph_2$ 乃至更高的自洽模型。",
            "rules": [
              "哥德尔可构成宇宙分层。",
              "科恩实数偏序力迫扩张理论。",
              "Lean 4 基数算术与序数形式化。"
            ],
            "mystery": "休·伍丁的‘终极 L’(Ultimate L) 纲领或马丁极大公理能否成为人类公认的全新基石，最终判定连续统假说的真伪？",
            "funFact": "康托尔于1878年提出，哥德尔与科恩确立独立性。"
          },
          "pioneers": {
            "tagline": "大基数公理、伍丁基数与射影决定性公理 (PD)。",
            "analogy": "现代集合论大师伍丁在 $\\Omega$-逻辑下证明：在大基数良好自洽延拓模型中，连续统往往倾向于取值 $2^{\\aleph_0} = \\aleph_2$。",
            "rules": [
              "决定性公理与其内部模型形式化。",
              "伍丁 $\\Omega$-猜想逻辑体系。",
              "Lean 4 集合论基石形式化。"
            ],
            "mystery": "现代交互式形式化逻辑系统可在几万条公理推演中严丝合缝地重现力迫法自洽性证明。",
            "funFact": "连续统假说是人类数学第一次直面自身绝对自由与终极无限深渊的永恒哲学之门。"
          }
        },
        "history": [
          {
            "year": "1878",
            "author": "乔治·康托尔",
            "note": "在发现不可数无穷大后正式提出连续统假说。"
          },
          {
            "year": "1900",
            "author": "戴维·希尔伯特",
            "note": "将其列为巴黎世界数学家大会第一大难题。"
          },
          {
            "year": "1938",
            "author": "库尔特·哥德尔",
            "note": "构造可构成宇宙证明在 ZFC 内无法证伪 CH。"
          },
          {
            "year": "1963",
            "author": "保罗·科恩",
            "note": "发明力迫法证明在 ZFC 内无法证实 CH，荣获菲尔兹奖！"
          }
        ]
      },
      "zh-Hant": {
        "name": "The Continuum Hypothesis (CH)",
        "subtitle": "Is There an Infinity Between Counting Numbers and the Real Line? (Independent of ZFC)",
        "field": "Mathematical Logic & Axiomatic Set Theory",
        "statusBadge": "INDEPENDENT OF AXIOMS (GÖDEL & COHEN)",
        "grades": {
          "explorers": {
            "tagline": "Are there infinities larger than counting numbers 1, 2, 3... but smaller than all points on a ruler?",
            "analogy": "In 1874, Georg Cantor made the mind-bending discovery that some infinities are bigger than others: The infinity of real numbers ($2^{\\aleph_0}$) is STRICTLY LARGER than the infinity of integers ($\\aleph_0$). Cantor conjectured the Continuum Hypothesis (CH): There is NO intermediate infinity strictly between them! In 1900, David Hilbert placed it as the VERY FIRST problem on his legendary list of 23 problems. In 1938 Kurt Gödel proved CH cannot be disproved in ZFC; in 1963 Paul Cohen invented 'forcing' to prove CH cannot be proved in ZFC! CH is completely INDEPENDENT of the standard foundations of mathematics!",
            "rules": [
              "Countable infinity |ℕ| = ℵ₀ (integers, fractions).",
              "Continuum infinity |ℝ| = 2^{ℵ₀} = ℵ_1 (points on a line).",
              "Continuum Hypothesis: 2^{ℵ₀} = ℵ_1 (no cardinal in between).",
              "Independence: ZFC cannot prove CH (Cohen 1963), nor refute CH (Gödel 1938)."
            ],
            "mystery": "Paul Cohen is the ONLY mathematician in history to win the Fields Medal (1966) for work in mathematical logic, for his invention of 'forcing'!",
            "funFact": "Cantor spent decades trying desperately to prove the hypothesis, suffering multiple mental breakdowns, never knowing that the axioms of mathematics themselves were insufficient to decide it!"
          },
          "investigators": {
            "tagline": "Gödel's constructible universe L, Cohen's forcing method, and generic filters.",
            "analogy": "Gödel constructed the inner model L satisfying ZFC + GCH. Cohen added continuum-many generic Cohen reals via poset forcing to build a model where 2^{ℵ₀} = ℵ_2.",
            "rules": [
              "Gödel's constructible hierarchy L_α.",
              "Cohen forcing poset ℙ = Add(ω, λ).",
              "Lean 4 Mathlib Cardinal arithmetic."
            ],
            "mystery": "Will Hugh Woodin's Ultimate L program or Martin's Maximum produce consensus new axioms that finally decide CH?",
            "funFact": "Georg Cantor in 1878; settled as independent by Gödel (1938) and Cohen (1963)."
          },
          "pioneers": {
            "tagline": "Large cardinals, Woodin cardinals, and Projective Determinacy (PD).",
            "analogy": "Woodin's Ω-logic shows that under suitable large cardinal axioms and canonical inner models, CH is resolved as false (2^{ℵ₀} = ℵ_2) in generic multiverses.",
            "rules": [
              "Axiom of Determinacy (AD) and L(ℝ).",
              "Woodin's Ω-conjecture.",
              "Formal set theory in Lean 4."
            ],
            "mystery": "AI logic theorem provers verify Gödel-Bernays and Zermelo-Fraenkel independence proofs with zero human ambiguity.",
            "funFact": "The Continuum Hypothesis is the timeless portal where mathematics looked directly into the mirror of its own absolute freedom and infinity."
          }
        },
        "history": [
          {
            "year": "1878",
            "author": "Georg Cantor",
            "note": "Formulates the Continuum Hypothesis after discovering uncountable infinities."
          },
          {
            "year": "1900",
            "author": "David Hilbert",
            "note": "Lists CH as Problem #1 of the 23 Paris Problems."
          },
          {
            "year": "1938",
            "author": "Kurt Gödel",
            "note": "Proves CH cannot be disproved in ZFC using constructible universe L."
          },
          {
            "year": "1963",
            "author": "Paul Cohen",
            "note": "Invents forcing to prove CH cannot be proved in ZFC (Fields Medal 1966)."
          }
        ]
      }
    }
  },
  {
    "id": "whitehead-problem",
    "icon": "🏛️",
    "difficulty": "Gr 9+",
    "domain": "computer-science",
    "category": "computer-science",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Algebra.Homology.Basic\n-- Whitehead's Problem (J. H. C. Whitehead, 1950s)\n-- Is every Whitehead group (Ext¹(A, ℤ) = 0) a free abelian group?\n-- Saharon Shelah proved in 1974 that this is INDEPENDENT of ZFC!",
    "locales": {
      "en": {
        "name": "Whitehead's Problem",
        "subtitle": "Are All Whitehead Groups Free Abelian? (Shelah Proved Independent of ZFC in 1974)",
        "field": "Homological Algebra & Model Theory",
        "statusBadge": "INDEPENDENT OF ZFC (SHELAH 1974)",
        "grades": {
          "explorers": {
            "tagline": "If an infinite building has no architectural echoes, must all its pillars be completely straight and free?",
            "analogy": "In the 1950s, British topologist J. H. C. Whitehead asked a natural question in abelian group theory: An abelian group $A$ is a 'Whitehead group' if every extension of $\\mathbb{Z}$ by $A$ splits (formally, $\\text{Ext}^1(A, \\mathbb{Z}) = 0$). Every free abelian group is obviously Whitehead. But is the converse true: Is EVERY Whitehead group free? For countable groups, the answer is easily YES. But in 1974, Saharon Shelah proved that for uncountable groups, Whitehead's Problem is INDEPENDENT of ZFC set theory! Under Godel's Axiom of Constructibility ($V=L$) it is TRUE; under Martin's Axiom + not-CH it is FALSE!",
            "rules": [
              "Whitehead group A: Ext¹(A, ℤ) = 0.",
              "Countable case: Proved TRUE (all countable Whitehead groups are free).",
              "Uncountable case: Independent of ZFC set theory!",
              "Under V = L: Every Whitehead group is free.",
              "Under MA + ¬CH: There exists an uncountable Whitehead group that is NOT free!"
            ],
            "mystery": "Saharon Shelah has published over 1,100 mathematical papers, holding the record for the most prolific living mathematician!",
            "funFact": "Whitehead's Problem was the FIRST problem from mainstream pure abstract algebra (outside logic and topology) proved to be undecidable in ZFC!"
          },
          "investigators": {
            "tagline": "Ext functor in homological algebra, Martin's Axiom, and stationary sets.",
            "analogy": "Shelah built an almost-free non-free group using the diamond principle ◊ on ℵ_1 in L, while using Martin's axiom to glue partial homomorphisms on trees.",
            "rules": [
              "Ext¹(A, ℤ) derived functor.",
              "Diamond principle ◊_ω1.",
              "Lean 4 Mathlib homological algebra."
            ],
            "mystery": "Can higher Ext groups Ext^n(A, ℤ) be classified under large cardinal axioms?",
            "funFact": "J. H. C. Whitehead in the 1950s; proved independent by Saharon Shelah in 1974."
          },
          "pioneers": {
            "tagline": "Classification of infinite abelian groups and Shelah's Black Box.",
            "analogy": "Shelah developed PCF theory (possible cofinalities) to tame cardinal arithmetic independently of the continuum hypothesis.",
            "rules": [
              "Shelah's PCF theory on product spaces.",
              "Stationary reflection.",
              "Formal logic in Lean 4."
            ],
            "mystery": "AI homological theorem provers verify short exact sequences and splitting conditions for finitely generated modules in seconds.",
            "funFact": "Whitehead's Problem proved to the world that the horizon of axiomatic truth extends far beyond the traditional shores of algebra."
          }
        },
        "history": [
          {
            "year": "1952",
            "author": "J. H. C. Whitehead",
            "note": "Poses the question on Whitehead groups and freeness."
          },
          {
            "year": "1974",
            "author": "Saharon Shelah",
            "note": "Proves Whitehead's Problem is independent of ZFC set theory."
          },
          {
            "year": "1982",
            "author": "Paul Eklof",
            "note": "Systematizes the homological foundations of abelian group independence."
          }
        ]
      },
      "de": {
        "name": "Whitehead's Problem",
        "subtitle": "Are All Whitehead Groups Free Abelian? (Shelah Proved Independent of ZFC in 1974)",
        "field": "Homological Algebra & Model Theory",
        "statusBadge": "INDEPENDENT OF ZFC (SHELAH 1974)",
        "grades": {
          "explorers": {
            "tagline": "If an infinite building has no architectural echoes, must all its pillars be completely straight and free?",
            "analogy": "In the 1950s, British topologist J. H. C. Whitehead asked a natural question in abelian group theory: An abelian group $A$ is a 'Whitehead group' if every extension of $\\mathbb{Z}$ by $A$ splits (formally, $\\text{Ext}^1(A, \\mathbb{Z}) = 0$). Every free abelian group is obviously Whitehead. But is the converse true: Is EVERY Whitehead group free? For countable groups, the answer is easily YES. But in 1974, Saharon Shelah proved that for uncountable groups, Whitehead's Problem is INDEPENDENT of ZFC set theory! Under Godel's Axiom of Constructibility ($V=L$) it is TRUE; under Martin's Axiom + not-CH it is FALSE!",
            "rules": [
              "Whitehead group A: Ext¹(A, ℤ) = 0.",
              "Countable case: Proved TRUE (all countable Whitehead groups are free).",
              "Uncountable case: Independent of ZFC set theory!",
              "Under V = L: Every Whitehead group is free.",
              "Under MA + ¬CH: There exists an uncountable Whitehead group that is NOT free!"
            ],
            "mystery": "Saharon Shelah has published over 1,100 mathematical papers, holding the record for the most prolific living mathematician!",
            "funFact": "Whitehead's Problem was the FIRST problem from mainstream pure abstract algebra (outside logic and topology) proved to be undecidable in ZFC!"
          },
          "investigators": {
            "tagline": "Ext functor in homological algebra, Martin's Axiom, and stationary sets.",
            "analogy": "Shelah built an almost-free non-free group using the diamond principle ◊ on ℵ_1 in L, while using Martin's axiom to glue partial homomorphisms on trees.",
            "rules": [
              "Ext¹(A, ℤ) derived functor.",
              "Diamond principle ◊_ω1.",
              "Lean 4 Mathlib homological algebra."
            ],
            "mystery": "Can higher Ext groups Ext^n(A, ℤ) be classified under large cardinal axioms?",
            "funFact": "J. H. C. Whitehead in the 1950s; proved independent by Saharon Shelah in 1974."
          },
          "pioneers": {
            "tagline": "Classification of infinite abelian groups and Shelah's Black Box.",
            "analogy": "Shelah developed PCF theory (possible cofinalities) to tame cardinal arithmetic independently of the continuum hypothesis.",
            "rules": [
              "Shelah's PCF theory on product spaces.",
              "Stationary reflection.",
              "Formal logic in Lean 4."
            ],
            "mystery": "AI homological theorem provers verify short exact sequences and splitting conditions for finitely generated modules in seconds.",
            "funFact": "Whitehead's Problem proved to the world that the horizon of axiomatic truth extends far beyond the traditional shores of algebra."
          }
        },
        "history": [
          {
            "year": "1952",
            "author": "J. H. C. Whitehead",
            "note": "Poses the question on Whitehead groups and freeness."
          },
          {
            "year": "1974",
            "author": "Saharon Shelah",
            "note": "Proves Whitehead's Problem is independent of ZFC set theory."
          },
          {
            "year": "1982",
            "author": "Paul Eklof",
            "note": "Systematizes the homological foundations of abelian group independence."
          }
        ]
      },
      "fr": {
        "name": "Whitehead's Problem",
        "subtitle": "Are All Whitehead Groups Free Abelian? (Shelah Proved Independent of ZFC in 1974)",
        "field": "Homological Algebra & Model Theory",
        "statusBadge": "INDEPENDENT OF ZFC (SHELAH 1974)",
        "grades": {
          "explorers": {
            "tagline": "If an infinite building has no architectural echoes, must all its pillars be completely straight and free?",
            "analogy": "In the 1950s, British topologist J. H. C. Whitehead asked a natural question in abelian group theory: An abelian group $A$ is a 'Whitehead group' if every extension of $\\mathbb{Z}$ by $A$ splits (formally, $\\text{Ext}^1(A, \\mathbb{Z}) = 0$). Every free abelian group is obviously Whitehead. But is the converse true: Is EVERY Whitehead group free? For countable groups, the answer is easily YES. But in 1974, Saharon Shelah proved that for uncountable groups, Whitehead's Problem is INDEPENDENT of ZFC set theory! Under Godel's Axiom of Constructibility ($V=L$) it is TRUE; under Martin's Axiom + not-CH it is FALSE!",
            "rules": [
              "Whitehead group A: Ext¹(A, ℤ) = 0.",
              "Countable case: Proved TRUE (all countable Whitehead groups are free).",
              "Uncountable case: Independent of ZFC set theory!",
              "Under V = L: Every Whitehead group is free.",
              "Under MA + ¬CH: There exists an uncountable Whitehead group that is NOT free!"
            ],
            "mystery": "Saharon Shelah has published over 1,100 mathematical papers, holding the record for the most prolific living mathematician!",
            "funFact": "Whitehead's Problem was the FIRST problem from mainstream pure abstract algebra (outside logic and topology) proved to be undecidable in ZFC!"
          },
          "investigators": {
            "tagline": "Ext functor in homological algebra, Martin's Axiom, and stationary sets.",
            "analogy": "Shelah built an almost-free non-free group using the diamond principle ◊ on ℵ_1 in L, while using Martin's axiom to glue partial homomorphisms on trees.",
            "rules": [
              "Ext¹(A, ℤ) derived functor.",
              "Diamond principle ◊_ω1.",
              "Lean 4 Mathlib homological algebra."
            ],
            "mystery": "Can higher Ext groups Ext^n(A, ℤ) be classified under large cardinal axioms?",
            "funFact": "J. H. C. Whitehead in the 1950s; proved independent by Saharon Shelah in 1974."
          },
          "pioneers": {
            "tagline": "Classification of infinite abelian groups and Shelah's Black Box.",
            "analogy": "Shelah developed PCF theory (possible cofinalities) to tame cardinal arithmetic independently of the continuum hypothesis.",
            "rules": [
              "Shelah's PCF theory on product spaces.",
              "Stationary reflection.",
              "Formal logic in Lean 4."
            ],
            "mystery": "AI homological theorem provers verify short exact sequences and splitting conditions for finitely generated modules in seconds.",
            "funFact": "Whitehead's Problem proved to the world that the horizon of axiomatic truth extends far beyond the traditional shores of algebra."
          }
        },
        "history": [
          {
            "year": "1952",
            "author": "J. H. C. Whitehead",
            "note": "Poses the question on Whitehead groups and freeness."
          },
          {
            "year": "1974",
            "author": "Saharon Shelah",
            "note": "Proves Whitehead's Problem is independent of ZFC set theory."
          },
          {
            "year": "1982",
            "author": "Paul Eklof",
            "note": "Systematizes the homological foundations of abelian group independence."
          }
        ]
      },
      "it": {
        "name": "Whitehead's Problem",
        "subtitle": "Are All Whitehead Groups Free Abelian? (Shelah Proved Independent of ZFC in 1974)",
        "field": "Homological Algebra & Model Theory",
        "statusBadge": "INDEPENDENT OF ZFC (SHELAH 1974)",
        "grades": {
          "explorers": {
            "tagline": "If an infinite building has no architectural echoes, must all its pillars be completely straight and free?",
            "analogy": "In the 1950s, British topologist J. H. C. Whitehead asked a natural question in abelian group theory: An abelian group $A$ is a 'Whitehead group' if every extension of $\\mathbb{Z}$ by $A$ splits (formally, $\\text{Ext}^1(A, \\mathbb{Z}) = 0$). Every free abelian group is obviously Whitehead. But is the converse true: Is EVERY Whitehead group free? For countable groups, the answer is easily YES. But in 1974, Saharon Shelah proved that for uncountable groups, Whitehead's Problem is INDEPENDENT of ZFC set theory! Under Godel's Axiom of Constructibility ($V=L$) it is TRUE; under Martin's Axiom + not-CH it is FALSE!",
            "rules": [
              "Whitehead group A: Ext¹(A, ℤ) = 0.",
              "Countable case: Proved TRUE (all countable Whitehead groups are free).",
              "Uncountable case: Independent of ZFC set theory!",
              "Under V = L: Every Whitehead group is free.",
              "Under MA + ¬CH: There exists an uncountable Whitehead group that is NOT free!"
            ],
            "mystery": "Saharon Shelah has published over 1,100 mathematical papers, holding the record for the most prolific living mathematician!",
            "funFact": "Whitehead's Problem was the FIRST problem from mainstream pure abstract algebra (outside logic and topology) proved to be undecidable in ZFC!"
          },
          "investigators": {
            "tagline": "Ext functor in homological algebra, Martin's Axiom, and stationary sets.",
            "analogy": "Shelah built an almost-free non-free group using the diamond principle ◊ on ℵ_1 in L, while using Martin's axiom to glue partial homomorphisms on trees.",
            "rules": [
              "Ext¹(A, ℤ) derived functor.",
              "Diamond principle ◊_ω1.",
              "Lean 4 Mathlib homological algebra."
            ],
            "mystery": "Can higher Ext groups Ext^n(A, ℤ) be classified under large cardinal axioms?",
            "funFact": "J. H. C. Whitehead in the 1950s; proved independent by Saharon Shelah in 1974."
          },
          "pioneers": {
            "tagline": "Classification of infinite abelian groups and Shelah's Black Box.",
            "analogy": "Shelah developed PCF theory (possible cofinalities) to tame cardinal arithmetic independently of the continuum hypothesis.",
            "rules": [
              "Shelah's PCF theory on product spaces.",
              "Stationary reflection.",
              "Formal logic in Lean 4."
            ],
            "mystery": "AI homological theorem provers verify short exact sequences and splitting conditions for finitely generated modules in seconds.",
            "funFact": "Whitehead's Problem proved to the world that the horizon of axiomatic truth extends far beyond the traditional shores of algebra."
          }
        },
        "history": [
          {
            "year": "1952",
            "author": "J. H. C. Whitehead",
            "note": "Poses the question on Whitehead groups and freeness."
          },
          {
            "year": "1974",
            "author": "Saharon Shelah",
            "note": "Proves Whitehead's Problem is independent of ZFC set theory."
          },
          {
            "year": "1982",
            "author": "Paul Eklof",
            "note": "Systematizes the homological foundations of abelian group independence."
          }
        ]
      },
      "ja": {
        "name": "Whitehead's Problem",
        "subtitle": "Are All Whitehead Groups Free Abelian? (Shelah Proved Independent of ZFC in 1974)",
        "field": "Homological Algebra & Model Theory",
        "statusBadge": "INDEPENDENT OF ZFC (SHELAH 1974)",
        "grades": {
          "explorers": {
            "tagline": "If an infinite building has no architectural echoes, must all its pillars be completely straight and free?",
            "analogy": "In the 1950s, British topologist J. H. C. Whitehead asked a natural question in abelian group theory: An abelian group $A$ is a 'Whitehead group' if every extension of $\\mathbb{Z}$ by $A$ splits (formally, $\\text{Ext}^1(A, \\mathbb{Z}) = 0$). Every free abelian group is obviously Whitehead. But is the converse true: Is EVERY Whitehead group free? For countable groups, the answer is easily YES. But in 1974, Saharon Shelah proved that for uncountable groups, Whitehead's Problem is INDEPENDENT of ZFC set theory! Under Godel's Axiom of Constructibility ($V=L$) it is TRUE; under Martin's Axiom + not-CH it is FALSE!",
            "rules": [
              "Whitehead group A: Ext¹(A, ℤ) = 0.",
              "Countable case: Proved TRUE (all countable Whitehead groups are free).",
              "Uncountable case: Independent of ZFC set theory!",
              "Under V = L: Every Whitehead group is free.",
              "Under MA + ¬CH: There exists an uncountable Whitehead group that is NOT free!"
            ],
            "mystery": "Saharon Shelah has published over 1,100 mathematical papers, holding the record for the most prolific living mathematician!",
            "funFact": "Whitehead's Problem was the FIRST problem from mainstream pure abstract algebra (outside logic and topology) proved to be undecidable in ZFC!"
          },
          "investigators": {
            "tagline": "Ext functor in homological algebra, Martin's Axiom, and stationary sets.",
            "analogy": "Shelah built an almost-free non-free group using the diamond principle ◊ on ℵ_1 in L, while using Martin's axiom to glue partial homomorphisms on trees.",
            "rules": [
              "Ext¹(A, ℤ) derived functor.",
              "Diamond principle ◊_ω1.",
              "Lean 4 Mathlib homological algebra."
            ],
            "mystery": "Can higher Ext groups Ext^n(A, ℤ) be classified under large cardinal axioms?",
            "funFact": "J. H. C. Whitehead in the 1950s; proved independent by Saharon Shelah in 1974."
          },
          "pioneers": {
            "tagline": "Classification of infinite abelian groups and Shelah's Black Box.",
            "analogy": "Shelah developed PCF theory (possible cofinalities) to tame cardinal arithmetic independently of the continuum hypothesis.",
            "rules": [
              "Shelah's PCF theory on product spaces.",
              "Stationary reflection.",
              "Formal logic in Lean 4."
            ],
            "mystery": "AI homological theorem provers verify short exact sequences and splitting conditions for finitely generated modules in seconds.",
            "funFact": "Whitehead's Problem proved to the world that the horizon of axiomatic truth extends far beyond the traditional shores of algebra."
          }
        },
        "history": [
          {
            "year": "1952",
            "author": "J. H. C. Whitehead",
            "note": "Poses the question on Whitehead groups and freeness."
          },
          {
            "year": "1974",
            "author": "Saharon Shelah",
            "note": "Proves Whitehead's Problem is independent of ZFC set theory."
          },
          {
            "year": "1982",
            "author": "Paul Eklof",
            "note": "Systematizes the homological foundations of abelian group independence."
          }
        ]
      },
      "ko": {
        "name": "Whitehead's Problem",
        "subtitle": "Are All Whitehead Groups Free Abelian? (Shelah Proved Independent of ZFC in 1974)",
        "field": "Homological Algebra & Model Theory",
        "statusBadge": "INDEPENDENT OF ZFC (SHELAH 1974)",
        "grades": {
          "explorers": {
            "tagline": "If an infinite building has no architectural echoes, must all its pillars be completely straight and free?",
            "analogy": "In the 1950s, British topologist J. H. C. Whitehead asked a natural question in abelian group theory: An abelian group $A$ is a 'Whitehead group' if every extension of $\\mathbb{Z}$ by $A$ splits (formally, $\\text{Ext}^1(A, \\mathbb{Z}) = 0$). Every free abelian group is obviously Whitehead. But is the converse true: Is EVERY Whitehead group free? For countable groups, the answer is easily YES. But in 1974, Saharon Shelah proved that for uncountable groups, Whitehead's Problem is INDEPENDENT of ZFC set theory! Under Godel's Axiom of Constructibility ($V=L$) it is TRUE; under Martin's Axiom + not-CH it is FALSE!",
            "rules": [
              "Whitehead group A: Ext¹(A, ℤ) = 0.",
              "Countable case: Proved TRUE (all countable Whitehead groups are free).",
              "Uncountable case: Independent of ZFC set theory!",
              "Under V = L: Every Whitehead group is free.",
              "Under MA + ¬CH: There exists an uncountable Whitehead group that is NOT free!"
            ],
            "mystery": "Saharon Shelah has published over 1,100 mathematical papers, holding the record for the most prolific living mathematician!",
            "funFact": "Whitehead's Problem was the FIRST problem from mainstream pure abstract algebra (outside logic and topology) proved to be undecidable in ZFC!"
          },
          "investigators": {
            "tagline": "Ext functor in homological algebra, Martin's Axiom, and stationary sets.",
            "analogy": "Shelah built an almost-free non-free group using the diamond principle ◊ on ℵ_1 in L, while using Martin's axiom to glue partial homomorphisms on trees.",
            "rules": [
              "Ext¹(A, ℤ) derived functor.",
              "Diamond principle ◊_ω1.",
              "Lean 4 Mathlib homological algebra."
            ],
            "mystery": "Can higher Ext groups Ext^n(A, ℤ) be classified under large cardinal axioms?",
            "funFact": "J. H. C. Whitehead in the 1950s; proved independent by Saharon Shelah in 1974."
          },
          "pioneers": {
            "tagline": "Classification of infinite abelian groups and Shelah's Black Box.",
            "analogy": "Shelah developed PCF theory (possible cofinalities) to tame cardinal arithmetic independently of the continuum hypothesis.",
            "rules": [
              "Shelah's PCF theory on product spaces.",
              "Stationary reflection.",
              "Formal logic in Lean 4."
            ],
            "mystery": "AI homological theorem provers verify short exact sequences and splitting conditions for finitely generated modules in seconds.",
            "funFact": "Whitehead's Problem proved to the world that the horizon of axiomatic truth extends far beyond the traditional shores of algebra."
          }
        },
        "history": [
          {
            "year": "1952",
            "author": "J. H. C. Whitehead",
            "note": "Poses the question on Whitehead groups and freeness."
          },
          {
            "year": "1974",
            "author": "Saharon Shelah",
            "note": "Proves Whitehead's Problem is independent of ZFC set theory."
          },
          {
            "year": "1982",
            "author": "Paul Eklof",
            "note": "Systematizes the homological foundations of abelian group independence."
          }
        ]
      },
      "zh-Hans": {
        "name": "怀特海同调代数问题",
        "subtitle": "所有怀特海群是否必定为自由阿贝尔群？（谢拉赫1974年证明其超越现有公理）",
        "field": "同调代数 & 模型论与公理独立性",
        "statusBadge": "谢拉赫1974年独立性定理",
        "grades": {
          "explorers": {
            "tagline": "如果一座无限高的代数大厦内部完全没有回声裂痕，它所有的支柱是不是必定全都是笔直独立的？",
            "analogy": "20世纪50年代英国拓扑学家 J. H. C. 怀特海在阿贝尔群扩张理论中提出了一个看似极为纯粹的代数题：如果一个阿贝尔群 $A$ 满足所有由整数环 $\\mathbb{Z}$ 的代数扩张都能完全分裂（同调代数记为 $\\text{Ext}^1(A, \\mathbb{Z}) = 0$），该群就被称为‘怀特海群’。显然任何自由阿贝尔群都是怀特海群。反过来，每一个怀特海群是否必然是自由的？对于可数群，答案轻而易举为是。然而在1974年，以色列数理逻辑泰斗萨哈龙·谢拉赫给出了惊世震颤的解答：对于不可数群，怀特海问题在标准 ZFC 公理体系中‘完全不可判定’！在哥德尔可构成公理（$V=L$）下它完全成立；而在马丁公理下它却存在反例！",
            "rules": [
              "怀特海群定义：$\\text{Ext}^1(A, \\mathbb{Z}) = 0$。",
              "可数情形：定理显然为真（所有可数怀特海群必定自由）。",
              "不可数情形：在 ZFC 集合论中绝对独立！",
              "在哥德尔可构成公理 $V = L$ 下：所有怀特海群皆为自由群！",
              "在马丁公理结合连续统假说否定下：必定存在非自由的奇特怀特海反例！"
            ],
            "mystery": "萨哈龙·谢拉赫一生发表了超过 1100 篇高水平数学论文，是当今全世界最高产、最令人敬畏的在世数学巨擘！",
            "funFact": "怀特海问题是人类历史上‘第一个’来自纯粹主流代数学自身（而非数理逻辑或大基数）被严格证明在 ZFC 中不可判定的经典难题！"
          },
          "investigators": {
            "tagline": "同调代数 Ext 导函子、马丁公理与平稳集二歧性。",
            "analogy": "谢拉赫在 $V=L$ 中利用菱形原理 $\\diamondsuit$ 证明了自由性；同时利用马丁公理在基数 $\\aleph_1$ 上通过树形偏序力迫将局部同态粘合为全局非平凡扩张。",
            "rules": [
              "导出函子 $\\text{Ext}^1$ 形式化定义。",
              "一阶序数菱形组合原理。",
              "Lean 4 同调代数与自由阿贝尔群形式化。"
            ],
            "mystery": "在大基数公理下，高阶同调群 $\\text{Ext}^n(A, \\mathbb{Z})$ 能否得到更精炼的代数分类？",
            "funFact": "怀特海于1950年代提出，谢拉赫于1974年证明其独立性。"
          },
          "pioneers": {
            "tagline": "无穷阿贝尔群结构理论与谢拉赫黑箱原理。",
            "analogy": "谢拉赫随后创立了革命性的 PCF 理论（可能共尾度理论），在完全不依赖连续统假说的前提下深刻驯服了高阶基数算术。",
            "rules": [
              "谢拉赫 PCF 理论核心定理。",
              "平稳集反射性质形式化。",
              "Lean 4 模型论形式化体系。"
            ],
            "mystery": "AI 同调代数系统可对任意有限生成模的短正合列及其分裂条件进行瞬时严格验证。",
            "funFact": "怀特海问题的攻克向全人类无可辩驳地宣告：真理的群星远远超越了传统代数公理所能照耀的近岸。"
          }
        },
        "history": [
          {
            "year": "1952",
            "author": "J. H. C. 怀特海",
            "note": "提出关于怀特海群是否必为自由群的问题。"
          },
          {
            "year": "1974",
            "author": "萨哈龙·谢拉赫",
            "note": "发表震撼论文，证明该代数问题在 ZFC 中绝对不可判定！"
          },
          {
            "year": "1982",
            "author": "保罗·埃克洛夫",
            "note": "系统建立阿贝尔群同调代数独立性宏论。"
          }
        ]
      },
      "zh-Hant": {
        "name": "Whitehead's Problem",
        "subtitle": "Are All Whitehead Groups Free Abelian? (Shelah Proved Independent of ZFC in 1974)",
        "field": "Homological Algebra & Model Theory",
        "statusBadge": "INDEPENDENT OF ZFC (SHELAH 1974)",
        "grades": {
          "explorers": {
            "tagline": "If an infinite building has no architectural echoes, must all its pillars be completely straight and free?",
            "analogy": "In the 1950s, British topologist J. H. C. Whitehead asked a natural question in abelian group theory: An abelian group $A$ is a 'Whitehead group' if every extension of $\\mathbb{Z}$ by $A$ splits (formally, $\\text{Ext}^1(A, \\mathbb{Z}) = 0$). Every free abelian group is obviously Whitehead. But is the converse true: Is EVERY Whitehead group free? For countable groups, the answer is easily YES. But in 1974, Saharon Shelah proved that for uncountable groups, Whitehead's Problem is INDEPENDENT of ZFC set theory! Under Godel's Axiom of Constructibility ($V=L$) it is TRUE; under Martin's Axiom + not-CH it is FALSE!",
            "rules": [
              "Whitehead group A: Ext¹(A, ℤ) = 0.",
              "Countable case: Proved TRUE (all countable Whitehead groups are free).",
              "Uncountable case: Independent of ZFC set theory!",
              "Under V = L: Every Whitehead group is free.",
              "Under MA + ¬CH: There exists an uncountable Whitehead group that is NOT free!"
            ],
            "mystery": "Saharon Shelah has published over 1,100 mathematical papers, holding the record for the most prolific living mathematician!",
            "funFact": "Whitehead's Problem was the FIRST problem from mainstream pure abstract algebra (outside logic and topology) proved to be undecidable in ZFC!"
          },
          "investigators": {
            "tagline": "Ext functor in homological algebra, Martin's Axiom, and stationary sets.",
            "analogy": "Shelah built an almost-free non-free group using the diamond principle ◊ on ℵ_1 in L, while using Martin's axiom to glue partial homomorphisms on trees.",
            "rules": [
              "Ext¹(A, ℤ) derived functor.",
              "Diamond principle ◊_ω1.",
              "Lean 4 Mathlib homological algebra."
            ],
            "mystery": "Can higher Ext groups Ext^n(A, ℤ) be classified under large cardinal axioms?",
            "funFact": "J. H. C. Whitehead in the 1950s; proved independent by Saharon Shelah in 1974."
          },
          "pioneers": {
            "tagline": "Classification of infinite abelian groups and Shelah's Black Box.",
            "analogy": "Shelah developed PCF theory (possible cofinalities) to tame cardinal arithmetic independently of the continuum hypothesis.",
            "rules": [
              "Shelah's PCF theory on product spaces.",
              "Stationary reflection.",
              "Formal logic in Lean 4."
            ],
            "mystery": "AI homological theorem provers verify short exact sequences and splitting conditions for finitely generated modules in seconds.",
            "funFact": "Whitehead's Problem proved to the world that the horizon of axiomatic truth extends far beyond the traditional shores of algebra."
          }
        },
        "history": [
          {
            "year": "1952",
            "author": "J. H. C. Whitehead",
            "note": "Poses the question on Whitehead groups and freeness."
          },
          {
            "year": "1974",
            "author": "Saharon Shelah",
            "note": "Proves Whitehead's Problem is independent of ZFC set theory."
          },
          {
            "year": "1982",
            "author": "Paul Eklof",
            "note": "Systematizes the homological foundations of abelian group independence."
          }
        ]
      }
    }
  },
  {
    "id": "log-rank",
    "icon": "📡",
    "difficulty": "Gr 9+",
    "domain": "computer-science",
    "category": "computer-science",
    "isMillennium": false,
    "isAIFrontier": true,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Computability.TuringMachine\n-- Log-Rank Conjecture (Lovász & Saks, 1988)\n-- Deterministic communication complexity D(f) is polynomially bounded by the log of the matrix rank log(rank(M_f)).",
    "locales": {
      "en": {
        "name": "The Log-Rank Conjecture",
        "subtitle": "Communication Complexity is Polynomially Bounded by Matrix Rank ($D(f) \\le (\\log \\text{rank})^c$)",
        "field": "Communication Complexity & Algebraic Linear Algebra",
        "statusBadge": "OPEN SINCE 1988",
        "grades": {
          "explorers": {
            "tagline": "If Alice has one half of a treasure map and Bob has the other, how few whispered words can let them find the gold?",
            "analogy": "In 1988, László Lovász and Michael Saks proposed one of the most fundamental conjectures in theoretical computer science: Alice receives $x$ and Bob receives $y$, and they want to compute a joint function $f(x, y)$ by sending bits back and forth. The communication matrix $M_f$ has entry $M_{xy} = f(x, y)$. Lovász and Saks conjectured that the minimum number of bits $D(f)$ they must exchange is AT MOST a polynomial of $\\log_2(\\text{rank}(M_f))$! Proved true for many matrix classes, but in general still unproved after nearly 40 years!",
            "rules": [
              "Boolean communication matrix M_f where M_{xy} = f(x, y).",
              "Deterministic communication complexity D(f).",
              "Trivial lower bound: D(f) ≥ ⌈log₂ rank(M_f)⌉.",
              "Conjecture: D(f) ≤ O((log rank(M_f))^c) for some constant c."
            ],
            "mystery": "In 2014, Shachar Lovett made a massive breakthrough by proving $D(f) = O(\\sqrt{\\text{rank}(M_f)} \\log \\text{rank}(M_f))$, breaking the square-root barrier!",
            "funFact": "A counterexample with c = 2 was found by Kushilevitz and Nisan, showing that D(f) is NOT simply O(log rank), but requires at least (log rank)^{1.58}!"
          },
          "investigators": {
            "tagline": "Monochromatic rectangle tiling, discrepancy method, and rank-recovery.",
            "analogy": "Lovett's proof used the polynomial Freiman-Ruzsa theorem in additive combinatorics to find a dense monochromatic rectangle via discrepancy bounds.",
            "rules": [
              "Discrepancy Disc_μ(R) ≤ ‖M_R‖ / 2^n.",
              "Freiman-Ruzsa additive theorem.",
              "Lean 4 Mathlib matrix rank."
            ],
            "mystery": "Can the bound be pushed down from O(√rank) all the way to polylog(rank)?",
            "funFact": "László Lovász and Michael Saks proposed the conjecture in 1988."
          },
          "pioneers": {
            "tagline": "Sign-rank, quantum communication complexity, and tensor rank.",
            "analogy": "For randomized and quantum communication complexity, the corresponding conjectures have been disproved, showing that determinism possesses unique algebraic rigidity.",
            "rules": [
              "Sherstov's pattern matrix method.",
              "Quantum communication matrix bounds.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI communication simulators optimize bit protocol trees for distributed cloud data centers.",
            "funFact": "The Log-Rank Conjecture is the sacred altar where linear algebra meets the ultimate informational physics of distributed computing."
          }
        },
        "history": [
          {
            "year": "1988",
            "author": "László Lovász & Michael Saks",
            "note": "Formulate the Log-Rank Conjecture in communication complexity."
          },
          {
            "year": "1995",
            "author": "Kushilevitz & Nisan",
            "note": "Construct superlinear lower bound (log rank)^{1.58}."
          },
          {
            "year": "2014",
            "author": "Shachar Lovett",
            "note": "Proves groundbreaking bound O(√rank · log rank)."
          }
        ]
      },
      "de": {
        "name": "The Log-Rank Conjecture",
        "subtitle": "Communication Complexity is Polynomially Bounded by Matrix Rank ($D(f) \\le (\\log \\text{rank})^c$)",
        "field": "Communication Complexity & Algebraic Linear Algebra",
        "statusBadge": "OPEN SINCE 1988",
        "grades": {
          "explorers": {
            "tagline": "If Alice has one half of a treasure map and Bob has the other, how few whispered words can let them find the gold?",
            "analogy": "In 1988, László Lovász and Michael Saks proposed one of the most fundamental conjectures in theoretical computer science: Alice receives $x$ and Bob receives $y$, and they want to compute a joint function $f(x, y)$ by sending bits back and forth. The communication matrix $M_f$ has entry $M_{xy} = f(x, y)$. Lovász and Saks conjectured that the minimum number of bits $D(f)$ they must exchange is AT MOST a polynomial of $\\log_2(\\text{rank}(M_f))$! Proved true for many matrix classes, but in general still unproved after nearly 40 years!",
            "rules": [
              "Boolean communication matrix M_f where M_{xy} = f(x, y).",
              "Deterministic communication complexity D(f).",
              "Trivial lower bound: D(f) ≥ ⌈log₂ rank(M_f)⌉.",
              "Conjecture: D(f) ≤ O((log rank(M_f))^c) for some constant c."
            ],
            "mystery": "In 2014, Shachar Lovett made a massive breakthrough by proving $D(f) = O(\\sqrt{\\text{rank}(M_f)} \\log \\text{rank}(M_f))$, breaking the square-root barrier!",
            "funFact": "A counterexample with c = 2 was found by Kushilevitz and Nisan, showing that D(f) is NOT simply O(log rank), but requires at least (log rank)^{1.58}!"
          },
          "investigators": {
            "tagline": "Monochromatic rectangle tiling, discrepancy method, and rank-recovery.",
            "analogy": "Lovett's proof used the polynomial Freiman-Ruzsa theorem in additive combinatorics to find a dense monochromatic rectangle via discrepancy bounds.",
            "rules": [
              "Discrepancy Disc_μ(R) ≤ ‖M_R‖ / 2^n.",
              "Freiman-Ruzsa additive theorem.",
              "Lean 4 Mathlib matrix rank."
            ],
            "mystery": "Can the bound be pushed down from O(√rank) all the way to polylog(rank)?",
            "funFact": "László Lovász and Michael Saks proposed the conjecture in 1988."
          },
          "pioneers": {
            "tagline": "Sign-rank, quantum communication complexity, and tensor rank.",
            "analogy": "For randomized and quantum communication complexity, the corresponding conjectures have been disproved, showing that determinism possesses unique algebraic rigidity.",
            "rules": [
              "Sherstov's pattern matrix method.",
              "Quantum communication matrix bounds.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI communication simulators optimize bit protocol trees for distributed cloud data centers.",
            "funFact": "The Log-Rank Conjecture is the sacred altar where linear algebra meets the ultimate informational physics of distributed computing."
          }
        },
        "history": [
          {
            "year": "1988",
            "author": "László Lovász & Michael Saks",
            "note": "Formulate the Log-Rank Conjecture in communication complexity."
          },
          {
            "year": "1995",
            "author": "Kushilevitz & Nisan",
            "note": "Construct superlinear lower bound (log rank)^{1.58}."
          },
          {
            "year": "2014",
            "author": "Shachar Lovett",
            "note": "Proves groundbreaking bound O(√rank · log rank)."
          }
        ]
      },
      "fr": {
        "name": "The Log-Rank Conjecture",
        "subtitle": "Communication Complexity is Polynomially Bounded by Matrix Rank ($D(f) \\le (\\log \\text{rank})^c$)",
        "field": "Communication Complexity & Algebraic Linear Algebra",
        "statusBadge": "OPEN SINCE 1988",
        "grades": {
          "explorers": {
            "tagline": "If Alice has one half of a treasure map and Bob has the other, how few whispered words can let them find the gold?",
            "analogy": "In 1988, László Lovász and Michael Saks proposed one of the most fundamental conjectures in theoretical computer science: Alice receives $x$ and Bob receives $y$, and they want to compute a joint function $f(x, y)$ by sending bits back and forth. The communication matrix $M_f$ has entry $M_{xy} = f(x, y)$. Lovász and Saks conjectured that the minimum number of bits $D(f)$ they must exchange is AT MOST a polynomial of $\\log_2(\\text{rank}(M_f))$! Proved true for many matrix classes, but in general still unproved after nearly 40 years!",
            "rules": [
              "Boolean communication matrix M_f where M_{xy} = f(x, y).",
              "Deterministic communication complexity D(f).",
              "Trivial lower bound: D(f) ≥ ⌈log₂ rank(M_f)⌉.",
              "Conjecture: D(f) ≤ O((log rank(M_f))^c) for some constant c."
            ],
            "mystery": "In 2014, Shachar Lovett made a massive breakthrough by proving $D(f) = O(\\sqrt{\\text{rank}(M_f)} \\log \\text{rank}(M_f))$, breaking the square-root barrier!",
            "funFact": "A counterexample with c = 2 was found by Kushilevitz and Nisan, showing that D(f) is NOT simply O(log rank), but requires at least (log rank)^{1.58}!"
          },
          "investigators": {
            "tagline": "Monochromatic rectangle tiling, discrepancy method, and rank-recovery.",
            "analogy": "Lovett's proof used the polynomial Freiman-Ruzsa theorem in additive combinatorics to find a dense monochromatic rectangle via discrepancy bounds.",
            "rules": [
              "Discrepancy Disc_μ(R) ≤ ‖M_R‖ / 2^n.",
              "Freiman-Ruzsa additive theorem.",
              "Lean 4 Mathlib matrix rank."
            ],
            "mystery": "Can the bound be pushed down from O(√rank) all the way to polylog(rank)?",
            "funFact": "László Lovász and Michael Saks proposed the conjecture in 1988."
          },
          "pioneers": {
            "tagline": "Sign-rank, quantum communication complexity, and tensor rank.",
            "analogy": "For randomized and quantum communication complexity, the corresponding conjectures have been disproved, showing that determinism possesses unique algebraic rigidity.",
            "rules": [
              "Sherstov's pattern matrix method.",
              "Quantum communication matrix bounds.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI communication simulators optimize bit protocol trees for distributed cloud data centers.",
            "funFact": "The Log-Rank Conjecture is the sacred altar where linear algebra meets the ultimate informational physics of distributed computing."
          }
        },
        "history": [
          {
            "year": "1988",
            "author": "László Lovász & Michael Saks",
            "note": "Formulate the Log-Rank Conjecture in communication complexity."
          },
          {
            "year": "1995",
            "author": "Kushilevitz & Nisan",
            "note": "Construct superlinear lower bound (log rank)^{1.58}."
          },
          {
            "year": "2014",
            "author": "Shachar Lovett",
            "note": "Proves groundbreaking bound O(√rank · log rank)."
          }
        ]
      },
      "it": {
        "name": "The Log-Rank Conjecture",
        "subtitle": "Communication Complexity is Polynomially Bounded by Matrix Rank ($D(f) \\le (\\log \\text{rank})^c$)",
        "field": "Communication Complexity & Algebraic Linear Algebra",
        "statusBadge": "OPEN SINCE 1988",
        "grades": {
          "explorers": {
            "tagline": "If Alice has one half of a treasure map and Bob has the other, how few whispered words can let them find the gold?",
            "analogy": "In 1988, László Lovász and Michael Saks proposed one of the most fundamental conjectures in theoretical computer science: Alice receives $x$ and Bob receives $y$, and they want to compute a joint function $f(x, y)$ by sending bits back and forth. The communication matrix $M_f$ has entry $M_{xy} = f(x, y)$. Lovász and Saks conjectured that the minimum number of bits $D(f)$ they must exchange is AT MOST a polynomial of $\\log_2(\\text{rank}(M_f))$! Proved true for many matrix classes, but in general still unproved after nearly 40 years!",
            "rules": [
              "Boolean communication matrix M_f where M_{xy} = f(x, y).",
              "Deterministic communication complexity D(f).",
              "Trivial lower bound: D(f) ≥ ⌈log₂ rank(M_f)⌉.",
              "Conjecture: D(f) ≤ O((log rank(M_f))^c) for some constant c."
            ],
            "mystery": "In 2014, Shachar Lovett made a massive breakthrough by proving $D(f) = O(\\sqrt{\\text{rank}(M_f)} \\log \\text{rank}(M_f))$, breaking the square-root barrier!",
            "funFact": "A counterexample with c = 2 was found by Kushilevitz and Nisan, showing that D(f) is NOT simply O(log rank), but requires at least (log rank)^{1.58}!"
          },
          "investigators": {
            "tagline": "Monochromatic rectangle tiling, discrepancy method, and rank-recovery.",
            "analogy": "Lovett's proof used the polynomial Freiman-Ruzsa theorem in additive combinatorics to find a dense monochromatic rectangle via discrepancy bounds.",
            "rules": [
              "Discrepancy Disc_μ(R) ≤ ‖M_R‖ / 2^n.",
              "Freiman-Ruzsa additive theorem.",
              "Lean 4 Mathlib matrix rank."
            ],
            "mystery": "Can the bound be pushed down from O(√rank) all the way to polylog(rank)?",
            "funFact": "László Lovász and Michael Saks proposed the conjecture in 1988."
          },
          "pioneers": {
            "tagline": "Sign-rank, quantum communication complexity, and tensor rank.",
            "analogy": "For randomized and quantum communication complexity, the corresponding conjectures have been disproved, showing that determinism possesses unique algebraic rigidity.",
            "rules": [
              "Sherstov's pattern matrix method.",
              "Quantum communication matrix bounds.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI communication simulators optimize bit protocol trees for distributed cloud data centers.",
            "funFact": "The Log-Rank Conjecture is the sacred altar where linear algebra meets the ultimate informational physics of distributed computing."
          }
        },
        "history": [
          {
            "year": "1988",
            "author": "László Lovász & Michael Saks",
            "note": "Formulate the Log-Rank Conjecture in communication complexity."
          },
          {
            "year": "1995",
            "author": "Kushilevitz & Nisan",
            "note": "Construct superlinear lower bound (log rank)^{1.58}."
          },
          {
            "year": "2014",
            "author": "Shachar Lovett",
            "note": "Proves groundbreaking bound O(√rank · log rank)."
          }
        ]
      },
      "ja": {
        "name": "The Log-Rank Conjecture",
        "subtitle": "Communication Complexity is Polynomially Bounded by Matrix Rank ($D(f) \\le (\\log \\text{rank})^c$)",
        "field": "Communication Complexity & Algebraic Linear Algebra",
        "statusBadge": "OPEN SINCE 1988",
        "grades": {
          "explorers": {
            "tagline": "If Alice has one half of a treasure map and Bob has the other, how few whispered words can let them find the gold?",
            "analogy": "In 1988, László Lovász and Michael Saks proposed one of the most fundamental conjectures in theoretical computer science: Alice receives $x$ and Bob receives $y$, and they want to compute a joint function $f(x, y)$ by sending bits back and forth. The communication matrix $M_f$ has entry $M_{xy} = f(x, y)$. Lovász and Saks conjectured that the minimum number of bits $D(f)$ they must exchange is AT MOST a polynomial of $\\log_2(\\text{rank}(M_f))$! Proved true for many matrix classes, but in general still unproved after nearly 40 years!",
            "rules": [
              "Boolean communication matrix M_f where M_{xy} = f(x, y).",
              "Deterministic communication complexity D(f).",
              "Trivial lower bound: D(f) ≥ ⌈log₂ rank(M_f)⌉.",
              "Conjecture: D(f) ≤ O((log rank(M_f))^c) for some constant c."
            ],
            "mystery": "In 2014, Shachar Lovett made a massive breakthrough by proving $D(f) = O(\\sqrt{\\text{rank}(M_f)} \\log \\text{rank}(M_f))$, breaking the square-root barrier!",
            "funFact": "A counterexample with c = 2 was found by Kushilevitz and Nisan, showing that D(f) is NOT simply O(log rank), but requires at least (log rank)^{1.58}!"
          },
          "investigators": {
            "tagline": "Monochromatic rectangle tiling, discrepancy method, and rank-recovery.",
            "analogy": "Lovett's proof used the polynomial Freiman-Ruzsa theorem in additive combinatorics to find a dense monochromatic rectangle via discrepancy bounds.",
            "rules": [
              "Discrepancy Disc_μ(R) ≤ ‖M_R‖ / 2^n.",
              "Freiman-Ruzsa additive theorem.",
              "Lean 4 Mathlib matrix rank."
            ],
            "mystery": "Can the bound be pushed down from O(√rank) all the way to polylog(rank)?",
            "funFact": "László Lovász and Michael Saks proposed the conjecture in 1988."
          },
          "pioneers": {
            "tagline": "Sign-rank, quantum communication complexity, and tensor rank.",
            "analogy": "For randomized and quantum communication complexity, the corresponding conjectures have been disproved, showing that determinism possesses unique algebraic rigidity.",
            "rules": [
              "Sherstov's pattern matrix method.",
              "Quantum communication matrix bounds.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI communication simulators optimize bit protocol trees for distributed cloud data centers.",
            "funFact": "The Log-Rank Conjecture is the sacred altar where linear algebra meets the ultimate informational physics of distributed computing."
          }
        },
        "history": [
          {
            "year": "1988",
            "author": "László Lovász & Michael Saks",
            "note": "Formulate the Log-Rank Conjecture in communication complexity."
          },
          {
            "year": "1995",
            "author": "Kushilevitz & Nisan",
            "note": "Construct superlinear lower bound (log rank)^{1.58}."
          },
          {
            "year": "2014",
            "author": "Shachar Lovett",
            "note": "Proves groundbreaking bound O(√rank · log rank)."
          }
        ]
      },
      "ko": {
        "name": "The Log-Rank Conjecture",
        "subtitle": "Communication Complexity is Polynomially Bounded by Matrix Rank ($D(f) \\le (\\log \\text{rank})^c$)",
        "field": "Communication Complexity & Algebraic Linear Algebra",
        "statusBadge": "OPEN SINCE 1988",
        "grades": {
          "explorers": {
            "tagline": "If Alice has one half of a treasure map and Bob has the other, how few whispered words can let them find the gold?",
            "analogy": "In 1988, László Lovász and Michael Saks proposed one of the most fundamental conjectures in theoretical computer science: Alice receives $x$ and Bob receives $y$, and they want to compute a joint function $f(x, y)$ by sending bits back and forth. The communication matrix $M_f$ has entry $M_{xy} = f(x, y)$. Lovász and Saks conjectured that the minimum number of bits $D(f)$ they must exchange is AT MOST a polynomial of $\\log_2(\\text{rank}(M_f))$! Proved true for many matrix classes, but in general still unproved after nearly 40 years!",
            "rules": [
              "Boolean communication matrix M_f where M_{xy} = f(x, y).",
              "Deterministic communication complexity D(f).",
              "Trivial lower bound: D(f) ≥ ⌈log₂ rank(M_f)⌉.",
              "Conjecture: D(f) ≤ O((log rank(M_f))^c) for some constant c."
            ],
            "mystery": "In 2014, Shachar Lovett made a massive breakthrough by proving $D(f) = O(\\sqrt{\\text{rank}(M_f)} \\log \\text{rank}(M_f))$, breaking the square-root barrier!",
            "funFact": "A counterexample with c = 2 was found by Kushilevitz and Nisan, showing that D(f) is NOT simply O(log rank), but requires at least (log rank)^{1.58}!"
          },
          "investigators": {
            "tagline": "Monochromatic rectangle tiling, discrepancy method, and rank-recovery.",
            "analogy": "Lovett's proof used the polynomial Freiman-Ruzsa theorem in additive combinatorics to find a dense monochromatic rectangle via discrepancy bounds.",
            "rules": [
              "Discrepancy Disc_μ(R) ≤ ‖M_R‖ / 2^n.",
              "Freiman-Ruzsa additive theorem.",
              "Lean 4 Mathlib matrix rank."
            ],
            "mystery": "Can the bound be pushed down from O(√rank) all the way to polylog(rank)?",
            "funFact": "László Lovász and Michael Saks proposed the conjecture in 1988."
          },
          "pioneers": {
            "tagline": "Sign-rank, quantum communication complexity, and tensor rank.",
            "analogy": "For randomized and quantum communication complexity, the corresponding conjectures have been disproved, showing that determinism possesses unique algebraic rigidity.",
            "rules": [
              "Sherstov's pattern matrix method.",
              "Quantum communication matrix bounds.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI communication simulators optimize bit protocol trees for distributed cloud data centers.",
            "funFact": "The Log-Rank Conjecture is the sacred altar where linear algebra meets the ultimate informational physics of distributed computing."
          }
        },
        "history": [
          {
            "year": "1988",
            "author": "László Lovász & Michael Saks",
            "note": "Formulate the Log-Rank Conjecture in communication complexity."
          },
          {
            "year": "1995",
            "author": "Kushilevitz & Nisan",
            "note": "Construct superlinear lower bound (log rank)^{1.58}."
          },
          {
            "year": "2014",
            "author": "Shachar Lovett",
            "note": "Proves groundbreaking bound O(√rank · log rank)."
          }
        ]
      },
      "zh-Hans": {
        "name": "对数秩猜想（洛瓦兹-萨克斯猜想）",
        "subtitle": "双人通信交换信息量的绝对下界完全由矩阵代数秩的对数多项式决定（洛瓦兹1988年提出）",
        "field": "通信复杂度 & 矩阵代数与线性代数",
        "statusBadge": "自1988年高悬至今",
        "grades": {
          "explorers": {
            "tagline": "爱丽丝拿着藏宝图的左半边，鲍勃拿着右半边，他们最少需要通过电话耳语几句话，就能确定金子藏在哪？",
            "analogy": "1988年阿贝尔奖得主拉斯洛·洛瓦兹与迈克尔·萨克斯提出了计算科学中最纯粹优美的猜想之一：爱丽丝手中持有私密输入 $x$，鲍勃持有私密输入 $y$，他们需要通过电话通信相互传递最少数量的 0 和 1 比特，以共同计算出函数值 $f(x, y)$。如果把所有可能输入写成一个庞大的真值矩阵 $M_f$（其中第 $x$ 行第 $y$ 列是 $f(x, y)$），洛瓦兹与萨克斯猜想：他们通话所需的最少比特数 $D(f)$，在代数上永远绝不会超过该矩阵秩的对数的多项式（即 $D(f) \\le (\\log_2 \\text{rank}(M_f))^c$）！近40年来，它一直是理解分布式计算信息极限的终极灯塔！",
            "rules": [
              "布尔双人通信矩阵 $M_f$，其中矩阵元为 $M_{xy} = f(x, y)$。",
              "确定性通信复杂度 $D(f)$（最坏情况下传输的最少总比特数）。",
              "代数显然下界：$D(f) \\ge \\lceil \\log_2 \\text{rank}(M_f) \\rceil$。",
              "对数秩猜想：必定存在常数 $c$，使得 $D(f) \\le O((\\log \\text{rank}(M_f))^c)$！"
            ],
            "mystery": "2014年沙哈尔·洛维特取得划时代重大突破，证明了 $D(f) = O(\\sqrt{\\text{rank}(M_f)} \\log \\text{rank}(M_f))$，成功跨越了半个世纪以来的平方根壁垒！",
            "funFact": "学者们已经构造出巧妙的反例，证明线性界 $c=1$ 是不成立的，通信复杂度至少可以达到 $(\\log \\text{rank})^{1.58}$，因此多项式幂次是绝对必要的！"
          },
          "investigators": {
            "tagline": "单色矩阵矩形剖分、差异度法 (Discrepancy) 与矩阵低秩恢复。",
            "analogy": "洛维特的突破精妙运用了加性组合学中的多项式弗雷曼-鲁扎定理，通过差异度界限严格证明了任何低秩布尔矩阵必定包含一个极其庞大的单色单块矩形。",
            "rules": [
              "矩阵单色块差异度范数不等式。",
              "弗雷曼-鲁扎加性子群逼近定理。",
              "Lean 4 矩阵秩与线性空间维数形式化。"
            ],
            "mystery": "能否将上界从目前的 $O(\\sqrt{\\text{rank}})$ 一路彻底压缩至纯对数多项式 $\\text{polylog}(\\text{rank})$？",
            "funFact": "洛瓦兹与萨克斯于1988年提出。"
          },
          "pioneers": {
            "tagline": "符号秩 (Sign-rank)、量子纠缠通信复杂度与张量秩分解。",
            "analogy": "惊人的是，在随机通信与量子纠缠通信中，相应的对数秩假说均已被反例推翻，这更加反衬出确定性算法独有的深层代数刚性！",
            "rules": [
              "舍尔斯托夫模式矩阵解析法形式化。",
              "量子通信下界算子范数界。",
              "Lean 4 通信协议图灵模型库。"
            ],
            "mystery": "现代分布式云计算集群与通信芯片运用该理论设计无冗余、近理论极限的微秒级低延迟握手协议。",
            "funFact": "对数秩猜想是经典线性代数与现代分布式计算终极信息物理学交融的神圣殿堂。"
          }
        },
        "history": [
          {
            "year": "1988",
            "author": "洛瓦兹 & 萨克斯",
            "note": "正式提出通信复杂度对数秩猜想。"
          },
          {
            "year": "1995",
            "author": "库希列维茨 & 尼桑",
            "note": "构造反例证明指数必须严格大于 1。"
          },
          {
            "year": "2014",
            "author": "沙哈尔·洛维特",
            "note": "发表重大突破，打破平方根坚固壁垒！"
          }
        ]
      },
      "zh-Hant": {
        "name": "The Log-Rank Conjecture",
        "subtitle": "Communication Complexity is Polynomially Bounded by Matrix Rank ($D(f) \\le (\\log \\text{rank})^c$)",
        "field": "Communication Complexity & Algebraic Linear Algebra",
        "statusBadge": "OPEN SINCE 1988",
        "grades": {
          "explorers": {
            "tagline": "If Alice has one half of a treasure map and Bob has the other, how few whispered words can let them find the gold?",
            "analogy": "In 1988, László Lovász and Michael Saks proposed one of the most fundamental conjectures in theoretical computer science: Alice receives $x$ and Bob receives $y$, and they want to compute a joint function $f(x, y)$ by sending bits back and forth. The communication matrix $M_f$ has entry $M_{xy} = f(x, y)$. Lovász and Saks conjectured that the minimum number of bits $D(f)$ they must exchange is AT MOST a polynomial of $\\log_2(\\text{rank}(M_f))$! Proved true for many matrix classes, but in general still unproved after nearly 40 years!",
            "rules": [
              "Boolean communication matrix M_f where M_{xy} = f(x, y).",
              "Deterministic communication complexity D(f).",
              "Trivial lower bound: D(f) ≥ ⌈log₂ rank(M_f)⌉.",
              "Conjecture: D(f) ≤ O((log rank(M_f))^c) for some constant c."
            ],
            "mystery": "In 2014, Shachar Lovett made a massive breakthrough by proving $D(f) = O(\\sqrt{\\text{rank}(M_f)} \\log \\text{rank}(M_f))$, breaking the square-root barrier!",
            "funFact": "A counterexample with c = 2 was found by Kushilevitz and Nisan, showing that D(f) is NOT simply O(log rank), but requires at least (log rank)^{1.58}!"
          },
          "investigators": {
            "tagline": "Monochromatic rectangle tiling, discrepancy method, and rank-recovery.",
            "analogy": "Lovett's proof used the polynomial Freiman-Ruzsa theorem in additive combinatorics to find a dense monochromatic rectangle via discrepancy bounds.",
            "rules": [
              "Discrepancy Disc_μ(R) ≤ ‖M_R‖ / 2^n.",
              "Freiman-Ruzsa additive theorem.",
              "Lean 4 Mathlib matrix rank."
            ],
            "mystery": "Can the bound be pushed down from O(√rank) all the way to polylog(rank)?",
            "funFact": "László Lovász and Michael Saks proposed the conjecture in 1988."
          },
          "pioneers": {
            "tagline": "Sign-rank, quantum communication complexity, and tensor rank.",
            "analogy": "For randomized and quantum communication complexity, the corresponding conjectures have been disproved, showing that determinism possesses unique algebraic rigidity.",
            "rules": [
              "Sherstov's pattern matrix method.",
              "Quantum communication matrix bounds.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI communication simulators optimize bit protocol trees for distributed cloud data centers.",
            "funFact": "The Log-Rank Conjecture is the sacred altar where linear algebra meets the ultimate informational physics of distributed computing."
          }
        },
        "history": [
          {
            "year": "1988",
            "author": "László Lovász & Michael Saks",
            "note": "Formulate the Log-Rank Conjecture in communication complexity."
          },
          {
            "year": "1995",
            "author": "Kushilevitz & Nisan",
            "note": "Construct superlinear lower bound (log rank)^{1.58}."
          },
          {
            "year": "2014",
            "author": "Shachar Lovett",
            "note": "Proves groundbreaking bound O(√rank · log rank)."
          }
        ]
      }
    }
  },
  {
    "id": "permanent-vs-determinant",
    "icon": "🧮",
    "difficulty": "Gr 9+",
    "domain": "computer-science",
    "category": "computer-science",
    "isMillennium": false,
    "isAIFrontier": true,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.LinearAlgebra.Determinant\n-- Valiant's Conjecture: VP ≠ VNP (Leslie Valiant, 1979)\n-- The permanent of an n×n matrix cannot be expressed as the determinant of an m×m matrix with m = poly(n).\n-- Algebraic analogue of P versus NP.",
    "locales": {
      "en": {
        "name": "Permanent vs Determinant",
        "subtitle": "Why Dropping the Minus Signs Makes Matrix Math Intractable ($VP \\ne VNP$)",
        "field": "Algebraic Complexity Theory & Geometric Invariant Theory",
        "statusBadge": "ALGEBRAIC P vs NP CATHEDRAL",
        "grades": {
          "explorers": {
            "tagline": "If changing plus to minus takes 1 second, why does turning minus to plus take 1 billion years?",
            "analogy": "The determinant of a matrix $\\det(A) = \\sum \\text{sgn}(\\sigma) \\prod A_{i, \\sigma(i)}$ can be computed blindingly fast using Gaussian elimination ($O(n^3)$). But change just ONE tiny thing—remove the alternating plus and minus signs $\\text{sgn}(\\sigma)$ to get the 'Permanent' $\\text{perm}(A) = \\sum \\prod A_{i, \\sigma(i)}$—and the problem becomes horribly intractable (#P-complete)! In 1979, Turing Award winner Leslie Valiant conjectured that computing the permanent requires matrices of EXPONENTIAL size ($m = 2^{\\Omega(n)}$) to be represented as determinants. This is the celebrated algebraic analog of P vs NP: $VP \\neq VNP$!",
            "rules": [
              "Determinant det(A) has signs sgn(σ) (computable in polynomial time VP).",
              "Permanent perm(A) has all positive signs (#P-complete, in VNP).",
              "Valiant (1979): perm_n requires determinant size m = n^{ω(1)} (superpolynomial).",
              "Conjecture: m = 2^{Ω(n)} (exponential lower bound)."
            ],
            "mystery": "Leslie Valiant won the 2010 Turing Award for pioneering machine learning (PAC learning) and algebraic complexity theory!",
            "funFact": "In 2004, Mignon and Ressayre proved an unconditional quadratic lower bound: m ≥ n²/2 for any determinantal representation of the permanent!"
          },
          "investigators": {
            "tagline": "Geometric Complexity Theory (GCT), border rank, and group representation orbits.",
            "analogy": "Mulmuley and Sohoni initiated the GCT program, showing that VP ≠ VNP is equivalent to finding representation-theoretic 'plethysm obstructions' between GL_{m²} orbits of det_m and perm_n.",
            "rules": [
              "Orbit closure GL_{m²}(ℂ) · det_m.",
              "Plethysm coefficients in representation theory.",
              "Lean 4 Mathlib matrix determinant."
            ],
            "mystery": "Can representation-theoretic obstructions without multiplicity flukes prove superpolynomial bounds for the permanent?",
            "funFact": "Leslie Valiant formulated the algebraic complexity framework in 1979."
          },
          "pioneers": {
            "tagline": "Tensor rank, tensor networks, and Waring rank of polynomials.",
            "analogy": "Valiant's conjecture is widely regarded as more tractable than P vs NP because the continuous Lie group symmetry of polynomials allows powerful tools from algebraic geometry.",
            "rules": [
              "Aaronson-Wigderson algebrization barrier.",
              "Waring rank of homogeneous polynomials.",
              "Formal proof verification in Lean 4."
            ],
            "mystery": "AI quantum circuit simulators map permanent evaluations to boson sampling quantum optics experiments.",
            "funFact": "The Permanent versus Determinant Problem is the most elegant, symmetric, and mathematically royal incarnation of the P vs NP mystery."
          }
        },
        "history": [
          {
            "year": "1979",
            "author": "Leslie Valiant",
            "note": "Establishes VP, VNP, and permanent completeness (Valiant's Theorem)."
          },
          {
            "year": "2001",
            "author": "Ketan Mulmuley & Milind Sohoni",
            "note": "Launch the Geometric Complexity Theory (GCT) program."
          },
          {
            "year": "2004",
            "author": "Thierry Mignon & Nicolas Ressayre",
            "note": "Prove unconditional quadratic lower bound m ≥ n²/2."
          }
        ]
      },
      "de": {
        "name": "Permanent vs Determinant",
        "subtitle": "Why Dropping the Minus Signs Makes Matrix Math Intractable ($VP \\ne VNP$)",
        "field": "Algebraic Complexity Theory & Geometric Invariant Theory",
        "statusBadge": "ALGEBRAIC P vs NP CATHEDRAL",
        "grades": {
          "explorers": {
            "tagline": "If changing plus to minus takes 1 second, why does turning minus to plus take 1 billion years?",
            "analogy": "The determinant of a matrix $\\det(A) = \\sum \\text{sgn}(\\sigma) \\prod A_{i, \\sigma(i)}$ can be computed blindingly fast using Gaussian elimination ($O(n^3)$). But change just ONE tiny thing—remove the alternating plus and minus signs $\\text{sgn}(\\sigma)$ to get the 'Permanent' $\\text{perm}(A) = \\sum \\prod A_{i, \\sigma(i)}$—and the problem becomes horribly intractable (#P-complete)! In 1979, Turing Award winner Leslie Valiant conjectured that computing the permanent requires matrices of EXPONENTIAL size ($m = 2^{\\Omega(n)}$) to be represented as determinants. This is the celebrated algebraic analog of P vs NP: $VP \\neq VNP$!",
            "rules": [
              "Determinant det(A) has signs sgn(σ) (computable in polynomial time VP).",
              "Permanent perm(A) has all positive signs (#P-complete, in VNP).",
              "Valiant (1979): perm_n requires determinant size m = n^{ω(1)} (superpolynomial).",
              "Conjecture: m = 2^{Ω(n)} (exponential lower bound)."
            ],
            "mystery": "Leslie Valiant won the 2010 Turing Award for pioneering machine learning (PAC learning) and algebraic complexity theory!",
            "funFact": "In 2004, Mignon and Ressayre proved an unconditional quadratic lower bound: m ≥ n²/2 for any determinantal representation of the permanent!"
          },
          "investigators": {
            "tagline": "Geometric Complexity Theory (GCT), border rank, and group representation orbits.",
            "analogy": "Mulmuley and Sohoni initiated the GCT program, showing that VP ≠ VNP is equivalent to finding representation-theoretic 'plethysm obstructions' between GL_{m²} orbits of det_m and perm_n.",
            "rules": [
              "Orbit closure GL_{m²}(ℂ) · det_m.",
              "Plethysm coefficients in representation theory.",
              "Lean 4 Mathlib matrix determinant."
            ],
            "mystery": "Can representation-theoretic obstructions without multiplicity flukes prove superpolynomial bounds for the permanent?",
            "funFact": "Leslie Valiant formulated the algebraic complexity framework in 1979."
          },
          "pioneers": {
            "tagline": "Tensor rank, tensor networks, and Waring rank of polynomials.",
            "analogy": "Valiant's conjecture is widely regarded as more tractable than P vs NP because the continuous Lie group symmetry of polynomials allows powerful tools from algebraic geometry.",
            "rules": [
              "Aaronson-Wigderson algebrization barrier.",
              "Waring rank of homogeneous polynomials.",
              "Formal proof verification in Lean 4."
            ],
            "mystery": "AI quantum circuit simulators map permanent evaluations to boson sampling quantum optics experiments.",
            "funFact": "The Permanent versus Determinant Problem is the most elegant, symmetric, and mathematically royal incarnation of the P vs NP mystery."
          }
        },
        "history": [
          {
            "year": "1979",
            "author": "Leslie Valiant",
            "note": "Establishes VP, VNP, and permanent completeness (Valiant's Theorem)."
          },
          {
            "year": "2001",
            "author": "Ketan Mulmuley & Milind Sohoni",
            "note": "Launch the Geometric Complexity Theory (GCT) program."
          },
          {
            "year": "2004",
            "author": "Thierry Mignon & Nicolas Ressayre",
            "note": "Prove unconditional quadratic lower bound m ≥ n²/2."
          }
        ]
      },
      "fr": {
        "name": "Permanent vs Determinant",
        "subtitle": "Why Dropping the Minus Signs Makes Matrix Math Intractable ($VP \\ne VNP$)",
        "field": "Algebraic Complexity Theory & Geometric Invariant Theory",
        "statusBadge": "ALGEBRAIC P vs NP CATHEDRAL",
        "grades": {
          "explorers": {
            "tagline": "If changing plus to minus takes 1 second, why does turning minus to plus take 1 billion years?",
            "analogy": "The determinant of a matrix $\\det(A) = \\sum \\text{sgn}(\\sigma) \\prod A_{i, \\sigma(i)}$ can be computed blindingly fast using Gaussian elimination ($O(n^3)$). But change just ONE tiny thing—remove the alternating plus and minus signs $\\text{sgn}(\\sigma)$ to get the 'Permanent' $\\text{perm}(A) = \\sum \\prod A_{i, \\sigma(i)}$—and the problem becomes horribly intractable (#P-complete)! In 1979, Turing Award winner Leslie Valiant conjectured that computing the permanent requires matrices of EXPONENTIAL size ($m = 2^{\\Omega(n)}$) to be represented as determinants. This is the celebrated algebraic analog of P vs NP: $VP \\neq VNP$!",
            "rules": [
              "Determinant det(A) has signs sgn(σ) (computable in polynomial time VP).",
              "Permanent perm(A) has all positive signs (#P-complete, in VNP).",
              "Valiant (1979): perm_n requires determinant size m = n^{ω(1)} (superpolynomial).",
              "Conjecture: m = 2^{Ω(n)} (exponential lower bound)."
            ],
            "mystery": "Leslie Valiant won the 2010 Turing Award for pioneering machine learning (PAC learning) and algebraic complexity theory!",
            "funFact": "In 2004, Mignon and Ressayre proved an unconditional quadratic lower bound: m ≥ n²/2 for any determinantal representation of the permanent!"
          },
          "investigators": {
            "tagline": "Geometric Complexity Theory (GCT), border rank, and group representation orbits.",
            "analogy": "Mulmuley and Sohoni initiated the GCT program, showing that VP ≠ VNP is equivalent to finding representation-theoretic 'plethysm obstructions' between GL_{m²} orbits of det_m and perm_n.",
            "rules": [
              "Orbit closure GL_{m²}(ℂ) · det_m.",
              "Plethysm coefficients in representation theory.",
              "Lean 4 Mathlib matrix determinant."
            ],
            "mystery": "Can representation-theoretic obstructions without multiplicity flukes prove superpolynomial bounds for the permanent?",
            "funFact": "Leslie Valiant formulated the algebraic complexity framework in 1979."
          },
          "pioneers": {
            "tagline": "Tensor rank, tensor networks, and Waring rank of polynomials.",
            "analogy": "Valiant's conjecture is widely regarded as more tractable than P vs NP because the continuous Lie group symmetry of polynomials allows powerful tools from algebraic geometry.",
            "rules": [
              "Aaronson-Wigderson algebrization barrier.",
              "Waring rank of homogeneous polynomials.",
              "Formal proof verification in Lean 4."
            ],
            "mystery": "AI quantum circuit simulators map permanent evaluations to boson sampling quantum optics experiments.",
            "funFact": "The Permanent versus Determinant Problem is the most elegant, symmetric, and mathematically royal incarnation of the P vs NP mystery."
          }
        },
        "history": [
          {
            "year": "1979",
            "author": "Leslie Valiant",
            "note": "Establishes VP, VNP, and permanent completeness (Valiant's Theorem)."
          },
          {
            "year": "2001",
            "author": "Ketan Mulmuley & Milind Sohoni",
            "note": "Launch the Geometric Complexity Theory (GCT) program."
          },
          {
            "year": "2004",
            "author": "Thierry Mignon & Nicolas Ressayre",
            "note": "Prove unconditional quadratic lower bound m ≥ n²/2."
          }
        ]
      },
      "it": {
        "name": "Permanent vs Determinant",
        "subtitle": "Why Dropping the Minus Signs Makes Matrix Math Intractable ($VP \\ne VNP$)",
        "field": "Algebraic Complexity Theory & Geometric Invariant Theory",
        "statusBadge": "ALGEBRAIC P vs NP CATHEDRAL",
        "grades": {
          "explorers": {
            "tagline": "If changing plus to minus takes 1 second, why does turning minus to plus take 1 billion years?",
            "analogy": "The determinant of a matrix $\\det(A) = \\sum \\text{sgn}(\\sigma) \\prod A_{i, \\sigma(i)}$ can be computed blindingly fast using Gaussian elimination ($O(n^3)$). But change just ONE tiny thing—remove the alternating plus and minus signs $\\text{sgn}(\\sigma)$ to get the 'Permanent' $\\text{perm}(A) = \\sum \\prod A_{i, \\sigma(i)}$—and the problem becomes horribly intractable (#P-complete)! In 1979, Turing Award winner Leslie Valiant conjectured that computing the permanent requires matrices of EXPONENTIAL size ($m = 2^{\\Omega(n)}$) to be represented as determinants. This is the celebrated algebraic analog of P vs NP: $VP \\neq VNP$!",
            "rules": [
              "Determinant det(A) has signs sgn(σ) (computable in polynomial time VP).",
              "Permanent perm(A) has all positive signs (#P-complete, in VNP).",
              "Valiant (1979): perm_n requires determinant size m = n^{ω(1)} (superpolynomial).",
              "Conjecture: m = 2^{Ω(n)} (exponential lower bound)."
            ],
            "mystery": "Leslie Valiant won the 2010 Turing Award for pioneering machine learning (PAC learning) and algebraic complexity theory!",
            "funFact": "In 2004, Mignon and Ressayre proved an unconditional quadratic lower bound: m ≥ n²/2 for any determinantal representation of the permanent!"
          },
          "investigators": {
            "tagline": "Geometric Complexity Theory (GCT), border rank, and group representation orbits.",
            "analogy": "Mulmuley and Sohoni initiated the GCT program, showing that VP ≠ VNP is equivalent to finding representation-theoretic 'plethysm obstructions' between GL_{m²} orbits of det_m and perm_n.",
            "rules": [
              "Orbit closure GL_{m²}(ℂ) · det_m.",
              "Plethysm coefficients in representation theory.",
              "Lean 4 Mathlib matrix determinant."
            ],
            "mystery": "Can representation-theoretic obstructions without multiplicity flukes prove superpolynomial bounds for the permanent?",
            "funFact": "Leslie Valiant formulated the algebraic complexity framework in 1979."
          },
          "pioneers": {
            "tagline": "Tensor rank, tensor networks, and Waring rank of polynomials.",
            "analogy": "Valiant's conjecture is widely regarded as more tractable than P vs NP because the continuous Lie group symmetry of polynomials allows powerful tools from algebraic geometry.",
            "rules": [
              "Aaronson-Wigderson algebrization barrier.",
              "Waring rank of homogeneous polynomials.",
              "Formal proof verification in Lean 4."
            ],
            "mystery": "AI quantum circuit simulators map permanent evaluations to boson sampling quantum optics experiments.",
            "funFact": "The Permanent versus Determinant Problem is the most elegant, symmetric, and mathematically royal incarnation of the P vs NP mystery."
          }
        },
        "history": [
          {
            "year": "1979",
            "author": "Leslie Valiant",
            "note": "Establishes VP, VNP, and permanent completeness (Valiant's Theorem)."
          },
          {
            "year": "2001",
            "author": "Ketan Mulmuley & Milind Sohoni",
            "note": "Launch the Geometric Complexity Theory (GCT) program."
          },
          {
            "year": "2004",
            "author": "Thierry Mignon & Nicolas Ressayre",
            "note": "Prove unconditional quadratic lower bound m ≥ n²/2."
          }
        ]
      },
      "ja": {
        "name": "Permanent vs Determinant",
        "subtitle": "Why Dropping the Minus Signs Makes Matrix Math Intractable ($VP \\ne VNP$)",
        "field": "Algebraic Complexity Theory & Geometric Invariant Theory",
        "statusBadge": "ALGEBRAIC P vs NP CATHEDRAL",
        "grades": {
          "explorers": {
            "tagline": "If changing plus to minus takes 1 second, why does turning minus to plus take 1 billion years?",
            "analogy": "The determinant of a matrix $\\det(A) = \\sum \\text{sgn}(\\sigma) \\prod A_{i, \\sigma(i)}$ can be computed blindingly fast using Gaussian elimination ($O(n^3)$). But change just ONE tiny thing—remove the alternating plus and minus signs $\\text{sgn}(\\sigma)$ to get the 'Permanent' $\\text{perm}(A) = \\sum \\prod A_{i, \\sigma(i)}$—and the problem becomes horribly intractable (#P-complete)! In 1979, Turing Award winner Leslie Valiant conjectured that computing the permanent requires matrices of EXPONENTIAL size ($m = 2^{\\Omega(n)}$) to be represented as determinants. This is the celebrated algebraic analog of P vs NP: $VP \\neq VNP$!",
            "rules": [
              "Determinant det(A) has signs sgn(σ) (computable in polynomial time VP).",
              "Permanent perm(A) has all positive signs (#P-complete, in VNP).",
              "Valiant (1979): perm_n requires determinant size m = n^{ω(1)} (superpolynomial).",
              "Conjecture: m = 2^{Ω(n)} (exponential lower bound)."
            ],
            "mystery": "Leslie Valiant won the 2010 Turing Award for pioneering machine learning (PAC learning) and algebraic complexity theory!",
            "funFact": "In 2004, Mignon and Ressayre proved an unconditional quadratic lower bound: m ≥ n²/2 for any determinantal representation of the permanent!"
          },
          "investigators": {
            "tagline": "Geometric Complexity Theory (GCT), border rank, and group representation orbits.",
            "analogy": "Mulmuley and Sohoni initiated the GCT program, showing that VP ≠ VNP is equivalent to finding representation-theoretic 'plethysm obstructions' between GL_{m²} orbits of det_m and perm_n.",
            "rules": [
              "Orbit closure GL_{m²}(ℂ) · det_m.",
              "Plethysm coefficients in representation theory.",
              "Lean 4 Mathlib matrix determinant."
            ],
            "mystery": "Can representation-theoretic obstructions without multiplicity flukes prove superpolynomial bounds for the permanent?",
            "funFact": "Leslie Valiant formulated the algebraic complexity framework in 1979."
          },
          "pioneers": {
            "tagline": "Tensor rank, tensor networks, and Waring rank of polynomials.",
            "analogy": "Valiant's conjecture is widely regarded as more tractable than P vs NP because the continuous Lie group symmetry of polynomials allows powerful tools from algebraic geometry.",
            "rules": [
              "Aaronson-Wigderson algebrization barrier.",
              "Waring rank of homogeneous polynomials.",
              "Formal proof verification in Lean 4."
            ],
            "mystery": "AI quantum circuit simulators map permanent evaluations to boson sampling quantum optics experiments.",
            "funFact": "The Permanent versus Determinant Problem is the most elegant, symmetric, and mathematically royal incarnation of the P vs NP mystery."
          }
        },
        "history": [
          {
            "year": "1979",
            "author": "Leslie Valiant",
            "note": "Establishes VP, VNP, and permanent completeness (Valiant's Theorem)."
          },
          {
            "year": "2001",
            "author": "Ketan Mulmuley & Milind Sohoni",
            "note": "Launch the Geometric Complexity Theory (GCT) program."
          },
          {
            "year": "2004",
            "author": "Thierry Mignon & Nicolas Ressayre",
            "note": "Prove unconditional quadratic lower bound m ≥ n²/2."
          }
        ]
      },
      "ko": {
        "name": "Permanent vs Determinant",
        "subtitle": "Why Dropping the Minus Signs Makes Matrix Math Intractable ($VP \\ne VNP$)",
        "field": "Algebraic Complexity Theory & Geometric Invariant Theory",
        "statusBadge": "ALGEBRAIC P vs NP CATHEDRAL",
        "grades": {
          "explorers": {
            "tagline": "If changing plus to minus takes 1 second, why does turning minus to plus take 1 billion years?",
            "analogy": "The determinant of a matrix $\\det(A) = \\sum \\text{sgn}(\\sigma) \\prod A_{i, \\sigma(i)}$ can be computed blindingly fast using Gaussian elimination ($O(n^3)$). But change just ONE tiny thing—remove the alternating plus and minus signs $\\text{sgn}(\\sigma)$ to get the 'Permanent' $\\text{perm}(A) = \\sum \\prod A_{i, \\sigma(i)}$—and the problem becomes horribly intractable (#P-complete)! In 1979, Turing Award winner Leslie Valiant conjectured that computing the permanent requires matrices of EXPONENTIAL size ($m = 2^{\\Omega(n)}$) to be represented as determinants. This is the celebrated algebraic analog of P vs NP: $VP \\neq VNP$!",
            "rules": [
              "Determinant det(A) has signs sgn(σ) (computable in polynomial time VP).",
              "Permanent perm(A) has all positive signs (#P-complete, in VNP).",
              "Valiant (1979): perm_n requires determinant size m = n^{ω(1)} (superpolynomial).",
              "Conjecture: m = 2^{Ω(n)} (exponential lower bound)."
            ],
            "mystery": "Leslie Valiant won the 2010 Turing Award for pioneering machine learning (PAC learning) and algebraic complexity theory!",
            "funFact": "In 2004, Mignon and Ressayre proved an unconditional quadratic lower bound: m ≥ n²/2 for any determinantal representation of the permanent!"
          },
          "investigators": {
            "tagline": "Geometric Complexity Theory (GCT), border rank, and group representation orbits.",
            "analogy": "Mulmuley and Sohoni initiated the GCT program, showing that VP ≠ VNP is equivalent to finding representation-theoretic 'plethysm obstructions' between GL_{m²} orbits of det_m and perm_n.",
            "rules": [
              "Orbit closure GL_{m²}(ℂ) · det_m.",
              "Plethysm coefficients in representation theory.",
              "Lean 4 Mathlib matrix determinant."
            ],
            "mystery": "Can representation-theoretic obstructions without multiplicity flukes prove superpolynomial bounds for the permanent?",
            "funFact": "Leslie Valiant formulated the algebraic complexity framework in 1979."
          },
          "pioneers": {
            "tagline": "Tensor rank, tensor networks, and Waring rank of polynomials.",
            "analogy": "Valiant's conjecture is widely regarded as more tractable than P vs NP because the continuous Lie group symmetry of polynomials allows powerful tools from algebraic geometry.",
            "rules": [
              "Aaronson-Wigderson algebrization barrier.",
              "Waring rank of homogeneous polynomials.",
              "Formal proof verification in Lean 4."
            ],
            "mystery": "AI quantum circuit simulators map permanent evaluations to boson sampling quantum optics experiments.",
            "funFact": "The Permanent versus Determinant Problem is the most elegant, symmetric, and mathematically royal incarnation of the P vs NP mystery."
          }
        },
        "history": [
          {
            "year": "1979",
            "author": "Leslie Valiant",
            "note": "Establishes VP, VNP, and permanent completeness (Valiant's Theorem)."
          },
          {
            "year": "2001",
            "author": "Ketan Mulmuley & Milind Sohoni",
            "note": "Launch the Geometric Complexity Theory (GCT) program."
          },
          {
            "year": "2004",
            "author": "Thierry Mignon & Nicolas Ressayre",
            "note": "Prove unconditional quadratic lower bound m ≥ n²/2."
          }
        ]
      },
      "zh-Hans": {
        "name": "积和式对行列式猜想（瓦利安特猜想）",
        "subtitle": "为何仅仅抹去负号就让多项式计算跌入指数深渊？（代数复杂性版 P vs NP）",
        "field": "代数复杂性理论 & 几何不变量理论",
        "statusBadge": "代数复杂性殿堂级猜想",
        "grades": {
          "explorers": {
            "tagline": "如果把式子里的减号全改成加号只要一瞬间，为什么算出的答案却要让超级计算机算上一百亿年？",
            "analogy": "线性代数中的行列式 $\\det(A)$ 公式中包含正负交替的符号 $\\text{sgn}(\\sigma)$，利用高斯消元法计算机仅需几毫秒就能完成计算（$O(n^3)$ 复杂度）。然而仅仅去掉这一个符号、把所有项全变成纯正号，就得到了所谓的‘积和式’（Permanent）。令人瞠目结舌的是：仅仅是少了一个负号，它的计算难度就瞬间暴涨，沦为极度恐怖的 \\#P-完全问题！1979年图灵奖得主莱斯利·瓦利安特提出划时代猜想：要用行列式表示 $n \\times n$ 的积和式，辅助矩阵的大小 $m$ 必须经历指数级爆炸（$m = 2^{\\Omega(n)}$）！这就是闻名遐迩的代数版 P 对 NP 问题：$VP \\ne VNP$！",
            "rules": [
              "行列式 $\\det(A)$：带有正负号，属于多项式时间代数类 VP。",
              "积和式 $\\text{perm}(A)$：全为正项，属于代数类 VNP。",
              "瓦利安特猜想：用行列式表达积和式至少需要超多项式阶矩阵大小。",
              "终极猜想：表达所需的矩阵大小 $m$ 必定随 $n$ 呈纯指数级增长！"
            ],
            "mystery": "莱斯利·瓦利安特凭借开创 PAC 机器学习理论与代数复杂性理论，荣膺2010年图灵奖！",
            "funFact": "米尼翁与雷赛尔在2004年给出了无条件的二次方严格下界：辅助行列式的大小必须至少满足 $m \\ge n^2/2$！"
          },
          "investigators": {
            "tagline": "几何复杂性理论 (GCT)、边界代数秩与群表示轨道闭包。",
            "analogy": "穆尔穆雷与索霍尼创立了 GCT 纲领，证明 $VP \\ne VNP$ 等价于在群轨道闭包之间寻找由舒尔多项式和表示论多重性差值构成的‘代数阻碍’。",
            "rules": [
              "仿射广义线性群在行列式多项式上的轨道闭包。",
              "代数几何轨道闭包张量秩分离。",
              "Lean 4 矩阵行列式与双线性代数形式化。"
            ],
            "mystery": "群表示论中的多重性代数阻碍能否真正跨越障碍定理，彻底证明积和式的超多项式下界？",
            "funFact": "莱斯利·瓦利安特于1979年提出。"
          },
          "pioneers": {
            "tagline": "张量代数秩、量子张量网络与多项式瓦林秩。",
            "analogy": "普遍认为瓦利安特猜想比传统的 P vs NP 更有希望先行获证，因为多项式背后蕴含着连续李群与代数簇的崇高几何对称性。",
            "rules": [
              "代数化壁垒在代数复杂性中的避让。",
              "齐次多项式次幂和瓦林秩分解。",
              "Lean 4 代数多项式恒等式形式化。"
            ],
            "mystery": "AI 量子模拟器已将积和式的极端复杂度直接对准玻色采样量子优越性实验物理体系。",
            "funFact": "积和式对行列式问题是整个计算复杂性宇宙中最高贵、最富几何对称与帝王之气的纯代数奇迹。"
          }
        },
        "history": [
          {
            "year": "1979",
            "author": "莱斯利·瓦利安特",
            "note": "创立代数复杂性体系并证明积和式的完全性（图灵奖）。"
          },
          {
            "year": "2001",
            "author": "穆尔穆雷 & 索霍尼",
            "note": "开创几何复杂性理论 (GCT) 宏伟工程！"
          },
          {
            "year": "2004",
            "author": "米尼翁 & 雷赛尔",
            "note": "确立无条件二次方严格代数下界！"
          }
        ]
      },
      "zh-Hant": {
        "name": "Permanent vs Determinant",
        "subtitle": "Why Dropping the Minus Signs Makes Matrix Math Intractable ($VP \\ne VNP$)",
        "field": "Algebraic Complexity Theory & Geometric Invariant Theory",
        "statusBadge": "ALGEBRAIC P vs NP CATHEDRAL",
        "grades": {
          "explorers": {
            "tagline": "If changing plus to minus takes 1 second, why does turning minus to plus take 1 billion years?",
            "analogy": "The determinant of a matrix $\\det(A) = \\sum \\text{sgn}(\\sigma) \\prod A_{i, \\sigma(i)}$ can be computed blindingly fast using Gaussian elimination ($O(n^3)$). But change just ONE tiny thing—remove the alternating plus and minus signs $\\text{sgn}(\\sigma)$ to get the 'Permanent' $\\text{perm}(A) = \\sum \\prod A_{i, \\sigma(i)}$—and the problem becomes horribly intractable (#P-complete)! In 1979, Turing Award winner Leslie Valiant conjectured that computing the permanent requires matrices of EXPONENTIAL size ($m = 2^{\\Omega(n)}$) to be represented as determinants. This is the celebrated algebraic analog of P vs NP: $VP \\neq VNP$!",
            "rules": [
              "Determinant det(A) has signs sgn(σ) (computable in polynomial time VP).",
              "Permanent perm(A) has all positive signs (#P-complete, in VNP).",
              "Valiant (1979): perm_n requires determinant size m = n^{ω(1)} (superpolynomial).",
              "Conjecture: m = 2^{Ω(n)} (exponential lower bound)."
            ],
            "mystery": "Leslie Valiant won the 2010 Turing Award for pioneering machine learning (PAC learning) and algebraic complexity theory!",
            "funFact": "In 2004, Mignon and Ressayre proved an unconditional quadratic lower bound: m ≥ n²/2 for any determinantal representation of the permanent!"
          },
          "investigators": {
            "tagline": "Geometric Complexity Theory (GCT), border rank, and group representation orbits.",
            "analogy": "Mulmuley and Sohoni initiated the GCT program, showing that VP ≠ VNP is equivalent to finding representation-theoretic 'plethysm obstructions' between GL_{m²} orbits of det_m and perm_n.",
            "rules": [
              "Orbit closure GL_{m²}(ℂ) · det_m.",
              "Plethysm coefficients in representation theory.",
              "Lean 4 Mathlib matrix determinant."
            ],
            "mystery": "Can representation-theoretic obstructions without multiplicity flukes prove superpolynomial bounds for the permanent?",
            "funFact": "Leslie Valiant formulated the algebraic complexity framework in 1979."
          },
          "pioneers": {
            "tagline": "Tensor rank, tensor networks, and Waring rank of polynomials.",
            "analogy": "Valiant's conjecture is widely regarded as more tractable than P vs NP because the continuous Lie group symmetry of polynomials allows powerful tools from algebraic geometry.",
            "rules": [
              "Aaronson-Wigderson algebrization barrier.",
              "Waring rank of homogeneous polynomials.",
              "Formal proof verification in Lean 4."
            ],
            "mystery": "AI quantum circuit simulators map permanent evaluations to boson sampling quantum optics experiments.",
            "funFact": "The Permanent versus Determinant Problem is the most elegant, symmetric, and mathematically royal incarnation of the P vs NP mystery."
          }
        },
        "history": [
          {
            "year": "1979",
            "author": "Leslie Valiant",
            "note": "Establishes VP, VNP, and permanent completeness (Valiant's Theorem)."
          },
          {
            "year": "2001",
            "author": "Ketan Mulmuley & Milind Sohoni",
            "note": "Launch the Geometric Complexity Theory (GCT) program."
          },
          {
            "year": "2004",
            "author": "Thierry Mignon & Nicolas Ressayre",
            "note": "Prove unconditional quadratic lower bound m ≥ n²/2."
          }
        ]
      }
    }
  },
  {
    "id": "csp-dichotomy",
    "icon": "⚖️",
    "difficulty": "Gr 9+",
    "domain": "computer-science",
    "category": "computer-science",
    "isMillennium": false,
    "isAIFrontier": true,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Computability.TuringMachine\n-- Dichotomy Conjecture for Constraint Satisfaction Problems (Feder & Vardi, 1993)\n-- Every CSP is either in P or is NP-complete (no intermediate problems exist).\n-- Solved independently by Andrei Bulatov and Dmitry Zhuk in 2017 using universal algebra!",
    "locales": {
      "en": {
        "name": "CSP Dichotomy Theorem",
        "subtitle": "Every Constraint Problem is Either Easy (P) or Extremely Hard (NP-Complete) (Solved 2017)",
        "field": "Universal Algebra & Computational Complexity",
        "statusBadge": "TRIUMPH OF UNIVERSAL ALGEBRA (2017)",
        "grades": {
          "explorers": {
            "tagline": "Can every riddle in the universe be sorted into either 'super easy' or 'impossible', with NOTHING in between?",
            "analogy": "In 1975, Ladner proved that if P ≠ NP, there must exist 'NP-intermediate' problems—bizarre problems neither easy (P) nor as hard as SAT (NP-complete). But in 1993, Tomás Feder and Moshe Vardi conjectured that for the vast universe of Constraint Satisfaction Problems (CSP)—covering Sudoku, graph coloring, 3-SAT, and equation systems—there are NO intermediate problems: EVERY CSP is EITHER in P or is NP-complete! In 2017, Andrei Bulatov and Dmitry Zhuk independently proved this 24-year-old conjecture in a monumental triumph of universal algebra and polymorphism operations!",
            "rules": [
              "Constraint Satisfaction Problem CSP(Γ) over relational structure Γ.",
              "Ladner's Theorem (1975): NP-intermediate problems exist in general.",
              "Feder-Vardi Conjecture (1993): CSP(Γ) is always in P or NP-complete.",
              "Bulatov (2017) & Zhuk (2017): Complete independent proofs using universal algebra!"
            ],
            "mystery": "Dmitry Zhuk won the prestigious Michael Brin Prize (2019) and the Simons Foundation recognition for his solo proof of the dichotomy conjecture!",
            "funFact": "The decisive boundary between P and NP-complete is governed entirely by algebra: if the relations possess a 'weak near-unanimity' polymorphism operation, it is in P; otherwise, it is NP-complete!"
          },
          "investigators": {
            "tagline": "Polymorphisms, Taylor algebras, and weak near-unanimity (WNU) operations.",
            "analogy": "The algebraic approach of Jeavons, Bulatov, and Krokhin linked CSP complexity to varieties generated by the relational structure's polymorphism algebra.",
            "rules": [
              "Polymorphism operation f: D^k → D preserving all relations.",
              "Weak near-unanimity (WNU) identity: f(y, x, ..., x) = ... = f(x, ..., x, y).",
              "Lean 4 Mathlib universal algebra."
            ],
            "mystery": "Can the dichotomy theorem be generalized to infinite-domain CSPs (Bodirsky's conjecture)?",
            "funFact": "Tomás Feder and Moshe Vardi in 1993; proved independently by Bulatov and Zhuk in 2017."
          },
          "pioneers": {
            "tagline": "Datalog logic, bounded treewidth, and absorption in algebraic varieties.",
            "analogy": "Zhuk's algorithm constructs a chain of sub-universes, using an innovative inductive absorption procedure to solve all solvable instances in polynomial time.",
            "rules": [
              "Inductive absorption in finite algebras.",
              "Datalog expressibility boundaries.",
              "Formal logic proof in Lean 4."
            ],
            "mystery": "AI automated constraint solvers (MiniZinc, Z3) exploit polymorphism classifications to select optimal heuristics automatically.",
            "funFact": "The CSP Dichotomy Theorem is the triumphant coronation of pure universal algebra transforming modern computer science."
          }
        },
        "history": [
          {
            "year": "1993",
            "author": "Tomás Feder & Moshe Vardi",
            "note": "Formulate the Dichotomy Conjecture for CSPs."
          },
          {
            "year": "1998",
            "author": "Peter Jeavons",
            "note": "Discovers the algebraic approach to CSPs using polymorphisms."
          },
          {
            "year": "2017",
            "author": "Andrei Bulatov & Dmitry Zhuk",
            "note": "Independently deliver complete proofs confirming the Feder-Vardi conjecture."
          }
        ]
      },
      "de": {
        "name": "CSP Dichotomy Theorem",
        "subtitle": "Every Constraint Problem is Either Easy (P) or Extremely Hard (NP-Complete) (Solved 2017)",
        "field": "Universal Algebra & Computational Complexity",
        "statusBadge": "TRIUMPH OF UNIVERSAL ALGEBRA (2017)",
        "grades": {
          "explorers": {
            "tagline": "Can every riddle in the universe be sorted into either 'super easy' or 'impossible', with NOTHING in between?",
            "analogy": "In 1975, Ladner proved that if P ≠ NP, there must exist 'NP-intermediate' problems—bizarre problems neither easy (P) nor as hard as SAT (NP-complete). But in 1993, Tomás Feder and Moshe Vardi conjectured that for the vast universe of Constraint Satisfaction Problems (CSP)—covering Sudoku, graph coloring, 3-SAT, and equation systems—there are NO intermediate problems: EVERY CSP is EITHER in P or is NP-complete! In 2017, Andrei Bulatov and Dmitry Zhuk independently proved this 24-year-old conjecture in a monumental triumph of universal algebra and polymorphism operations!",
            "rules": [
              "Constraint Satisfaction Problem CSP(Γ) over relational structure Γ.",
              "Ladner's Theorem (1975): NP-intermediate problems exist in general.",
              "Feder-Vardi Conjecture (1993): CSP(Γ) is always in P or NP-complete.",
              "Bulatov (2017) & Zhuk (2017): Complete independent proofs using universal algebra!"
            ],
            "mystery": "Dmitry Zhuk won the prestigious Michael Brin Prize (2019) and the Simons Foundation recognition for his solo proof of the dichotomy conjecture!",
            "funFact": "The decisive boundary between P and NP-complete is governed entirely by algebra: if the relations possess a 'weak near-unanimity' polymorphism operation, it is in P; otherwise, it is NP-complete!"
          },
          "investigators": {
            "tagline": "Polymorphisms, Taylor algebras, and weak near-unanimity (WNU) operations.",
            "analogy": "The algebraic approach of Jeavons, Bulatov, and Krokhin linked CSP complexity to varieties generated by the relational structure's polymorphism algebra.",
            "rules": [
              "Polymorphism operation f: D^k → D preserving all relations.",
              "Weak near-unanimity (WNU) identity: f(y, x, ..., x) = ... = f(x, ..., x, y).",
              "Lean 4 Mathlib universal algebra."
            ],
            "mystery": "Can the dichotomy theorem be generalized to infinite-domain CSPs (Bodirsky's conjecture)?",
            "funFact": "Tomás Feder and Moshe Vardi in 1993; proved independently by Bulatov and Zhuk in 2017."
          },
          "pioneers": {
            "tagline": "Datalog logic, bounded treewidth, and absorption in algebraic varieties.",
            "analogy": "Zhuk's algorithm constructs a chain of sub-universes, using an innovative inductive absorption procedure to solve all solvable instances in polynomial time.",
            "rules": [
              "Inductive absorption in finite algebras.",
              "Datalog expressibility boundaries.",
              "Formal logic proof in Lean 4."
            ],
            "mystery": "AI automated constraint solvers (MiniZinc, Z3) exploit polymorphism classifications to select optimal heuristics automatically.",
            "funFact": "The CSP Dichotomy Theorem is the triumphant coronation of pure universal algebra transforming modern computer science."
          }
        },
        "history": [
          {
            "year": "1993",
            "author": "Tomás Feder & Moshe Vardi",
            "note": "Formulate the Dichotomy Conjecture for CSPs."
          },
          {
            "year": "1998",
            "author": "Peter Jeavons",
            "note": "Discovers the algebraic approach to CSPs using polymorphisms."
          },
          {
            "year": "2017",
            "author": "Andrei Bulatov & Dmitry Zhuk",
            "note": "Independently deliver complete proofs confirming the Feder-Vardi conjecture."
          }
        ]
      },
      "fr": {
        "name": "CSP Dichotomy Theorem",
        "subtitle": "Every Constraint Problem is Either Easy (P) or Extremely Hard (NP-Complete) (Solved 2017)",
        "field": "Universal Algebra & Computational Complexity",
        "statusBadge": "TRIUMPH OF UNIVERSAL ALGEBRA (2017)",
        "grades": {
          "explorers": {
            "tagline": "Can every riddle in the universe be sorted into either 'super easy' or 'impossible', with NOTHING in between?",
            "analogy": "In 1975, Ladner proved that if P ≠ NP, there must exist 'NP-intermediate' problems—bizarre problems neither easy (P) nor as hard as SAT (NP-complete). But in 1993, Tomás Feder and Moshe Vardi conjectured that for the vast universe of Constraint Satisfaction Problems (CSP)—covering Sudoku, graph coloring, 3-SAT, and equation systems—there are NO intermediate problems: EVERY CSP is EITHER in P or is NP-complete! In 2017, Andrei Bulatov and Dmitry Zhuk independently proved this 24-year-old conjecture in a monumental triumph of universal algebra and polymorphism operations!",
            "rules": [
              "Constraint Satisfaction Problem CSP(Γ) over relational structure Γ.",
              "Ladner's Theorem (1975): NP-intermediate problems exist in general.",
              "Feder-Vardi Conjecture (1993): CSP(Γ) is always in P or NP-complete.",
              "Bulatov (2017) & Zhuk (2017): Complete independent proofs using universal algebra!"
            ],
            "mystery": "Dmitry Zhuk won the prestigious Michael Brin Prize (2019) and the Simons Foundation recognition for his solo proof of the dichotomy conjecture!",
            "funFact": "The decisive boundary between P and NP-complete is governed entirely by algebra: if the relations possess a 'weak near-unanimity' polymorphism operation, it is in P; otherwise, it is NP-complete!"
          },
          "investigators": {
            "tagline": "Polymorphisms, Taylor algebras, and weak near-unanimity (WNU) operations.",
            "analogy": "The algebraic approach of Jeavons, Bulatov, and Krokhin linked CSP complexity to varieties generated by the relational structure's polymorphism algebra.",
            "rules": [
              "Polymorphism operation f: D^k → D preserving all relations.",
              "Weak near-unanimity (WNU) identity: f(y, x, ..., x) = ... = f(x, ..., x, y).",
              "Lean 4 Mathlib universal algebra."
            ],
            "mystery": "Can the dichotomy theorem be generalized to infinite-domain CSPs (Bodirsky's conjecture)?",
            "funFact": "Tomás Feder and Moshe Vardi in 1993; proved independently by Bulatov and Zhuk in 2017."
          },
          "pioneers": {
            "tagline": "Datalog logic, bounded treewidth, and absorption in algebraic varieties.",
            "analogy": "Zhuk's algorithm constructs a chain of sub-universes, using an innovative inductive absorption procedure to solve all solvable instances in polynomial time.",
            "rules": [
              "Inductive absorption in finite algebras.",
              "Datalog expressibility boundaries.",
              "Formal logic proof in Lean 4."
            ],
            "mystery": "AI automated constraint solvers (MiniZinc, Z3) exploit polymorphism classifications to select optimal heuristics automatically.",
            "funFact": "The CSP Dichotomy Theorem is the triumphant coronation of pure universal algebra transforming modern computer science."
          }
        },
        "history": [
          {
            "year": "1993",
            "author": "Tomás Feder & Moshe Vardi",
            "note": "Formulate the Dichotomy Conjecture for CSPs."
          },
          {
            "year": "1998",
            "author": "Peter Jeavons",
            "note": "Discovers the algebraic approach to CSPs using polymorphisms."
          },
          {
            "year": "2017",
            "author": "Andrei Bulatov & Dmitry Zhuk",
            "note": "Independently deliver complete proofs confirming the Feder-Vardi conjecture."
          }
        ]
      },
      "it": {
        "name": "CSP Dichotomy Theorem",
        "subtitle": "Every Constraint Problem is Either Easy (P) or Extremely Hard (NP-Complete) (Solved 2017)",
        "field": "Universal Algebra & Computational Complexity",
        "statusBadge": "TRIUMPH OF UNIVERSAL ALGEBRA (2017)",
        "grades": {
          "explorers": {
            "tagline": "Can every riddle in the universe be sorted into either 'super easy' or 'impossible', with NOTHING in between?",
            "analogy": "In 1975, Ladner proved that if P ≠ NP, there must exist 'NP-intermediate' problems—bizarre problems neither easy (P) nor as hard as SAT (NP-complete). But in 1993, Tomás Feder and Moshe Vardi conjectured that for the vast universe of Constraint Satisfaction Problems (CSP)—covering Sudoku, graph coloring, 3-SAT, and equation systems—there are NO intermediate problems: EVERY CSP is EITHER in P or is NP-complete! In 2017, Andrei Bulatov and Dmitry Zhuk independently proved this 24-year-old conjecture in a monumental triumph of universal algebra and polymorphism operations!",
            "rules": [
              "Constraint Satisfaction Problem CSP(Γ) over relational structure Γ.",
              "Ladner's Theorem (1975): NP-intermediate problems exist in general.",
              "Feder-Vardi Conjecture (1993): CSP(Γ) is always in P or NP-complete.",
              "Bulatov (2017) & Zhuk (2017): Complete independent proofs using universal algebra!"
            ],
            "mystery": "Dmitry Zhuk won the prestigious Michael Brin Prize (2019) and the Simons Foundation recognition for his solo proof of the dichotomy conjecture!",
            "funFact": "The decisive boundary between P and NP-complete is governed entirely by algebra: if the relations possess a 'weak near-unanimity' polymorphism operation, it is in P; otherwise, it is NP-complete!"
          },
          "investigators": {
            "tagline": "Polymorphisms, Taylor algebras, and weak near-unanimity (WNU) operations.",
            "analogy": "The algebraic approach of Jeavons, Bulatov, and Krokhin linked CSP complexity to varieties generated by the relational structure's polymorphism algebra.",
            "rules": [
              "Polymorphism operation f: D^k → D preserving all relations.",
              "Weak near-unanimity (WNU) identity: f(y, x, ..., x) = ... = f(x, ..., x, y).",
              "Lean 4 Mathlib universal algebra."
            ],
            "mystery": "Can the dichotomy theorem be generalized to infinite-domain CSPs (Bodirsky's conjecture)?",
            "funFact": "Tomás Feder and Moshe Vardi in 1993; proved independently by Bulatov and Zhuk in 2017."
          },
          "pioneers": {
            "tagline": "Datalog logic, bounded treewidth, and absorption in algebraic varieties.",
            "analogy": "Zhuk's algorithm constructs a chain of sub-universes, using an innovative inductive absorption procedure to solve all solvable instances in polynomial time.",
            "rules": [
              "Inductive absorption in finite algebras.",
              "Datalog expressibility boundaries.",
              "Formal logic proof in Lean 4."
            ],
            "mystery": "AI automated constraint solvers (MiniZinc, Z3) exploit polymorphism classifications to select optimal heuristics automatically.",
            "funFact": "The CSP Dichotomy Theorem is the triumphant coronation of pure universal algebra transforming modern computer science."
          }
        },
        "history": [
          {
            "year": "1993",
            "author": "Tomás Feder & Moshe Vardi",
            "note": "Formulate the Dichotomy Conjecture for CSPs."
          },
          {
            "year": "1998",
            "author": "Peter Jeavons",
            "note": "Discovers the algebraic approach to CSPs using polymorphisms."
          },
          {
            "year": "2017",
            "author": "Andrei Bulatov & Dmitry Zhuk",
            "note": "Independently deliver complete proofs confirming the Feder-Vardi conjecture."
          }
        ]
      },
      "ja": {
        "name": "CSP Dichotomy Theorem",
        "subtitle": "Every Constraint Problem is Either Easy (P) or Extremely Hard (NP-Complete) (Solved 2017)",
        "field": "Universal Algebra & Computational Complexity",
        "statusBadge": "TRIUMPH OF UNIVERSAL ALGEBRA (2017)",
        "grades": {
          "explorers": {
            "tagline": "Can every riddle in the universe be sorted into either 'super easy' or 'impossible', with NOTHING in between?",
            "analogy": "In 1975, Ladner proved that if P ≠ NP, there must exist 'NP-intermediate' problems—bizarre problems neither easy (P) nor as hard as SAT (NP-complete). But in 1993, Tomás Feder and Moshe Vardi conjectured that for the vast universe of Constraint Satisfaction Problems (CSP)—covering Sudoku, graph coloring, 3-SAT, and equation systems—there are NO intermediate problems: EVERY CSP is EITHER in P or is NP-complete! In 2017, Andrei Bulatov and Dmitry Zhuk independently proved this 24-year-old conjecture in a monumental triumph of universal algebra and polymorphism operations!",
            "rules": [
              "Constraint Satisfaction Problem CSP(Γ) over relational structure Γ.",
              "Ladner's Theorem (1975): NP-intermediate problems exist in general.",
              "Feder-Vardi Conjecture (1993): CSP(Γ) is always in P or NP-complete.",
              "Bulatov (2017) & Zhuk (2017): Complete independent proofs using universal algebra!"
            ],
            "mystery": "Dmitry Zhuk won the prestigious Michael Brin Prize (2019) and the Simons Foundation recognition for his solo proof of the dichotomy conjecture!",
            "funFact": "The decisive boundary between P and NP-complete is governed entirely by algebra: if the relations possess a 'weak near-unanimity' polymorphism operation, it is in P; otherwise, it is NP-complete!"
          },
          "investigators": {
            "tagline": "Polymorphisms, Taylor algebras, and weak near-unanimity (WNU) operations.",
            "analogy": "The algebraic approach of Jeavons, Bulatov, and Krokhin linked CSP complexity to varieties generated by the relational structure's polymorphism algebra.",
            "rules": [
              "Polymorphism operation f: D^k → D preserving all relations.",
              "Weak near-unanimity (WNU) identity: f(y, x, ..., x) = ... = f(x, ..., x, y).",
              "Lean 4 Mathlib universal algebra."
            ],
            "mystery": "Can the dichotomy theorem be generalized to infinite-domain CSPs (Bodirsky's conjecture)?",
            "funFact": "Tomás Feder and Moshe Vardi in 1993; proved independently by Bulatov and Zhuk in 2017."
          },
          "pioneers": {
            "tagline": "Datalog logic, bounded treewidth, and absorption in algebraic varieties.",
            "analogy": "Zhuk's algorithm constructs a chain of sub-universes, using an innovative inductive absorption procedure to solve all solvable instances in polynomial time.",
            "rules": [
              "Inductive absorption in finite algebras.",
              "Datalog expressibility boundaries.",
              "Formal logic proof in Lean 4."
            ],
            "mystery": "AI automated constraint solvers (MiniZinc, Z3) exploit polymorphism classifications to select optimal heuristics automatically.",
            "funFact": "The CSP Dichotomy Theorem is the triumphant coronation of pure universal algebra transforming modern computer science."
          }
        },
        "history": [
          {
            "year": "1993",
            "author": "Tomás Feder & Moshe Vardi",
            "note": "Formulate the Dichotomy Conjecture for CSPs."
          },
          {
            "year": "1998",
            "author": "Peter Jeavons",
            "note": "Discovers the algebraic approach to CSPs using polymorphisms."
          },
          {
            "year": "2017",
            "author": "Andrei Bulatov & Dmitry Zhuk",
            "note": "Independently deliver complete proofs confirming the Feder-Vardi conjecture."
          }
        ]
      },
      "ko": {
        "name": "CSP Dichotomy Theorem",
        "subtitle": "Every Constraint Problem is Either Easy (P) or Extremely Hard (NP-Complete) (Solved 2017)",
        "field": "Universal Algebra & Computational Complexity",
        "statusBadge": "TRIUMPH OF UNIVERSAL ALGEBRA (2017)",
        "grades": {
          "explorers": {
            "tagline": "Can every riddle in the universe be sorted into either 'super easy' or 'impossible', with NOTHING in between?",
            "analogy": "In 1975, Ladner proved that if P ≠ NP, there must exist 'NP-intermediate' problems—bizarre problems neither easy (P) nor as hard as SAT (NP-complete). But in 1993, Tomás Feder and Moshe Vardi conjectured that for the vast universe of Constraint Satisfaction Problems (CSP)—covering Sudoku, graph coloring, 3-SAT, and equation systems—there are NO intermediate problems: EVERY CSP is EITHER in P or is NP-complete! In 2017, Andrei Bulatov and Dmitry Zhuk independently proved this 24-year-old conjecture in a monumental triumph of universal algebra and polymorphism operations!",
            "rules": [
              "Constraint Satisfaction Problem CSP(Γ) over relational structure Γ.",
              "Ladner's Theorem (1975): NP-intermediate problems exist in general.",
              "Feder-Vardi Conjecture (1993): CSP(Γ) is always in P or NP-complete.",
              "Bulatov (2017) & Zhuk (2017): Complete independent proofs using universal algebra!"
            ],
            "mystery": "Dmitry Zhuk won the prestigious Michael Brin Prize (2019) and the Simons Foundation recognition for his solo proof of the dichotomy conjecture!",
            "funFact": "The decisive boundary between P and NP-complete is governed entirely by algebra: if the relations possess a 'weak near-unanimity' polymorphism operation, it is in P; otherwise, it is NP-complete!"
          },
          "investigators": {
            "tagline": "Polymorphisms, Taylor algebras, and weak near-unanimity (WNU) operations.",
            "analogy": "The algebraic approach of Jeavons, Bulatov, and Krokhin linked CSP complexity to varieties generated by the relational structure's polymorphism algebra.",
            "rules": [
              "Polymorphism operation f: D^k → D preserving all relations.",
              "Weak near-unanimity (WNU) identity: f(y, x, ..., x) = ... = f(x, ..., x, y).",
              "Lean 4 Mathlib universal algebra."
            ],
            "mystery": "Can the dichotomy theorem be generalized to infinite-domain CSPs (Bodirsky's conjecture)?",
            "funFact": "Tomás Feder and Moshe Vardi in 1993; proved independently by Bulatov and Zhuk in 2017."
          },
          "pioneers": {
            "tagline": "Datalog logic, bounded treewidth, and absorption in algebraic varieties.",
            "analogy": "Zhuk's algorithm constructs a chain of sub-universes, using an innovative inductive absorption procedure to solve all solvable instances in polynomial time.",
            "rules": [
              "Inductive absorption in finite algebras.",
              "Datalog expressibility boundaries.",
              "Formal logic proof in Lean 4."
            ],
            "mystery": "AI automated constraint solvers (MiniZinc, Z3) exploit polymorphism classifications to select optimal heuristics automatically.",
            "funFact": "The CSP Dichotomy Theorem is the triumphant coronation of pure universal algebra transforming modern computer science."
          }
        },
        "history": [
          {
            "year": "1993",
            "author": "Tomás Feder & Moshe Vardi",
            "note": "Formulate the Dichotomy Conjecture for CSPs."
          },
          {
            "year": "1998",
            "author": "Peter Jeavons",
            "note": "Discovers the algebraic approach to CSPs using polymorphisms."
          },
          {
            "year": "2017",
            "author": "Andrei Bulatov & Dmitry Zhuk",
            "note": "Independently deliver complete proofs confirming the Feder-Vardi conjecture."
          }
        ]
      },
      "zh-Hans": {
        "name": "约束满足问题二分定理（费德-瓦尔迪定理）",
        "subtitle": "任意约束满足问题要么极易（P）要么极难（NP-完全），绝无中间过渡（2017年环论代数完全破解）",
        "field": "泛代数多项式多态 & 计算复杂性二分律",
        "statusBadge": "2017年代数学划时代终极获证定理",
        "grades": {
          "explorers": {
            "tagline": "世上一切逻辑谜题，能不能被彻底一分为二：要么易如反掌，要么登天般极难，中间绝无半点灰色地带？",
            "analogy": "1975年拉德纳证明：如果 P ≠ NP，宇宙中必定存在奇异的‘NP-中间问题’——既不能被快速求解（非 P），又无法归约到最顶级的难题（非 NP-完全）。然而在1993年，托马斯·费德与摩西·瓦尔迪提出了举世公认的‘二分假说’：在包含数独、地图染色、布尔 SAT 与方程式求解的庞大‘约束满足问题’（CSP）王国中，绝不存在任何中间过渡！每一个 CSP 命题‘要么属于极其好算的 P，要么彻底沦为顶级 NP-完全’！2017年，安德烈·布拉托夫与德米特里·茹克各自独立发表百页长文，运用深奥的泛代数‘多态运算’理论彻底证实了这一二分二极绝美定理！",
            "rules": [
              "关系结构 $\\Gamma$ 上的约束满足问题 $\\text{CSP}(\\Gamma)$。",
              "拉德纳定理 (1975)：一般逻辑中确实存在中间过渡怪胎。",
              "费德-瓦尔迪猜想 (1993)：但在 CSP 宇宙中必定严格非 P 即 NP-完全！",
              "布拉托夫与茹克 (2017)：分别独立运用泛代数彻底终结猜想！"
            ],
            "mystery": "俄罗斯数学家德米特里·茹克凭借孤身一人独立攻克 CSP 二分猜想，荣获2019年国际理论数学最高殊荣！",
            "funFact": "区分‘易如反掌’与‘难于登天’的终极界线，竟然完全由一个初等抽象代数运算决定：如果关系结构具有‘弱近一致多态算子’，则必定在 P 中；否则百分之百是 NP-完全！"
          },
          "investigators": {
            "tagline": "多态操作 (Polymorphisms)、泰勒代数与弱近一致性 (WNU) 算子。",
            "analogy": "代数流派将计算复杂性精妙转化为研究关系约束保持闭包的不变代数运算簇，代数自同态的同态像直接给出了多项式时间解题算法。",
            "rules": [
              "保持约束关系的泛代数多态映射。",
              "弱近一致性代数等式形式化。",
              "Lean 4 泛代数等式簇与同态形式化。"
            ],
            "mystery": "该二分定理能否推广至无限论域的无穷结构约束满足问题？（博迪尔斯基猜想依然活跃！）",
            "funFact": "费德与瓦尔迪于1993年提出，布拉托夫与茹克于2017年获证。"
          },
          "pioneers": {
            "tagline": "Datalog 递归逻辑、有界树宽算法与代数多态吸收理论。",
            "analogy": "茹克的算法通过构建多层级子宇宙吸收链，证明了只要存在弱一致算子，就必定存在确定的组合吸收归约算法在多项式时间内完成求解。",
            "rules": [
              "有限代数归纳吸收引理。",
              "Datalog 复杂性表达界限。",
              "Lean 4 计算可判定性形式化。"
            ],
            "mystery": "现代主流 AI 约束求解器（如 Z3、MiniZinc）内置该代数判别准则，秒级自动识别问题易解性并切换极速算法。",
            "funFact": "CSP 二分定理是纯粹抽象泛代数以雷霆万钧之力彻底改写现代计算机科学的辉煌加冕典礼。"
          }
        },
        "history": [
          {
            "year": "1993",
            "author": "费德 & 瓦尔迪",
            "note": "正式提出约束满足问题二分假说。"
          },
          {
            "year": "1998",
            "author": "彼得·吉文斯",
            "note": "开创利用多态代数破解 CSP 的代数进路。"
          },
          {
            "year": "2017",
            "author": "布拉托夫 & 茹克",
            "note": "分别独立发表鸿篇巨著，彻底证实二分定理！"
          }
        ]
      },
      "zh-Hant": {
        "name": "CSP Dichotomy Theorem",
        "subtitle": "Every Constraint Problem is Either Easy (P) or Extremely Hard (NP-Complete) (Solved 2017)",
        "field": "Universal Algebra & Computational Complexity",
        "statusBadge": "TRIUMPH OF UNIVERSAL ALGEBRA (2017)",
        "grades": {
          "explorers": {
            "tagline": "Can every riddle in the universe be sorted into either 'super easy' or 'impossible', with NOTHING in between?",
            "analogy": "In 1975, Ladner proved that if P ≠ NP, there must exist 'NP-intermediate' problems—bizarre problems neither easy (P) nor as hard as SAT (NP-complete). But in 1993, Tomás Feder and Moshe Vardi conjectured that for the vast universe of Constraint Satisfaction Problems (CSP)—covering Sudoku, graph coloring, 3-SAT, and equation systems—there are NO intermediate problems: EVERY CSP is EITHER in P or is NP-complete! In 2017, Andrei Bulatov and Dmitry Zhuk independently proved this 24-year-old conjecture in a monumental triumph of universal algebra and polymorphism operations!",
            "rules": [
              "Constraint Satisfaction Problem CSP(Γ) over relational structure Γ.",
              "Ladner's Theorem (1975): NP-intermediate problems exist in general.",
              "Feder-Vardi Conjecture (1993): CSP(Γ) is always in P or NP-complete.",
              "Bulatov (2017) & Zhuk (2017): Complete independent proofs using universal algebra!"
            ],
            "mystery": "Dmitry Zhuk won the prestigious Michael Brin Prize (2019) and the Simons Foundation recognition for his solo proof of the dichotomy conjecture!",
            "funFact": "The decisive boundary between P and NP-complete is governed entirely by algebra: if the relations possess a 'weak near-unanimity' polymorphism operation, it is in P; otherwise, it is NP-complete!"
          },
          "investigators": {
            "tagline": "Polymorphisms, Taylor algebras, and weak near-unanimity (WNU) operations.",
            "analogy": "The algebraic approach of Jeavons, Bulatov, and Krokhin linked CSP complexity to varieties generated by the relational structure's polymorphism algebra.",
            "rules": [
              "Polymorphism operation f: D^k → D preserving all relations.",
              "Weak near-unanimity (WNU) identity: f(y, x, ..., x) = ... = f(x, ..., x, y).",
              "Lean 4 Mathlib universal algebra."
            ],
            "mystery": "Can the dichotomy theorem be generalized to infinite-domain CSPs (Bodirsky's conjecture)?",
            "funFact": "Tomás Feder and Moshe Vardi in 1993; proved independently by Bulatov and Zhuk in 2017."
          },
          "pioneers": {
            "tagline": "Datalog logic, bounded treewidth, and absorption in algebraic varieties.",
            "analogy": "Zhuk's algorithm constructs a chain of sub-universes, using an innovative inductive absorption procedure to solve all solvable instances in polynomial time.",
            "rules": [
              "Inductive absorption in finite algebras.",
              "Datalog expressibility boundaries.",
              "Formal logic proof in Lean 4."
            ],
            "mystery": "AI automated constraint solvers (MiniZinc, Z3) exploit polymorphism classifications to select optimal heuristics automatically.",
            "funFact": "The CSP Dichotomy Theorem is the triumphant coronation of pure universal algebra transforming modern computer science."
          }
        },
        "history": [
          {
            "year": "1993",
            "author": "Tomás Feder & Moshe Vardi",
            "note": "Formulate the Dichotomy Conjecture for CSPs."
          },
          {
            "year": "1998",
            "author": "Peter Jeavons",
            "note": "Discovers the algebraic approach to CSPs using polymorphisms."
          },
          {
            "year": "2017",
            "author": "Andrei Bulatov & Dmitry Zhuk",
            "note": "Independently deliver complete proofs confirming the Feder-Vardi conjecture."
          }
        ]
      }
    }
  },
  {
    "id": "bpp-equals-p",
    "icon": "🪙",
    "difficulty": "Gr 9+",
    "domain": "computer-science",
    "category": "computer-science",
    "isMillennium": false,
    "isAIFrontier": true,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Computability.TuringMachine\n-- BPP = P Conjecture (Derandomization in Complexity Theory)\n-- Every randomized polynomial-time algorithm (BPP) can be converted into a deterministic algorithm (P).\n-- Widely believed true under circuit complexity lower bounds (Impagliazzo-Wigderson 1997).",
    "locales": {
      "en": {
        "name": "BPP = P Conjecture",
        "subtitle": "Can Every Coin-Flipping Algorithm Be Replaced by 100% Deterministic Code?",
        "field": "Computational Complexity & Pseudorandomness",
        "statusBadge": "FRONTIER CONSENSUS CONJECTURE",
        "grades": {
          "explorers": {
            "tagline": "Does a computer really need to flip lucky coins, or is true luck just an illusion of code?",
            "analogy": "In modern computing, algorithms often flip random coins to solve problems in a fraction of a second (BPP: Bounded-error Probabilistic Polynomial time)—like the Miller-Rabin test for prime numbers. For decades, computer scientists believed random coins gave computers superpowers that deterministic algorithms (P) could never match. But in 1997, Russell Impagliazzo and Avi Wigderson (Turing Award 2023, Abel Prize 2021) showed that if standard circuit lower bounds hold, then BPP = P! Coin-flipping adds ZERO genuine power: ANY randomized algorithm can be perfectly derandomized into pure, deterministic logic!",
            "rules": [
              "BPP: Problems solvable in polynomial time with error probability ≤ 1/3 using random coins.",
              "P: Problems solvable in polynomial time deterministically.",
              "Hardness vs. Randomness paradigm (Nisan-Wigderson 1994).",
              "Conjecture: BPP = P (Randomness is fundamentally dispensable in computation!)."
            ],
            "mystery": "In 2002, Agrawal, Kayal, and Saxena (AKS) stunned the world by derandomizing primality testing (proving PRIMES is in P), giving the most spectacular evidence in history that BPP = P!",
            "funFact": "Avi Wigderson is one of only two people in human history (along with John Milnor) to win BOTH the Abel Prize and the Turing Award!"
          },
          "investigators": {
            "tagline": "Nisan-Wigderson pseudorandom generator (PRG), average-case hardness, and extractor graphs.",
            "analogy": "Impagliazzo and Wigderson (1997) proved that if there exists a problem in E = DTIME(2^{O(n)}) requiring circuit size 2^{Ω(n)}, then BPP = P.",
            "rules": [
              "Nisan-Wigderson PRG: G: {0, 1}^S → {0, 1}^n with S = O(log n).",
              "Circuit lower bound assumption: Size(f) ≥ 2^{ε n}.",
              "Lean 4 Mathlib probability and complexity."
            ],
            "mystery": "Can we prove circuit lower bounds unconditionally without assumptions to close the final door on BPP = P?",
            "funFact": "Formulated as a central question in the 1980s; deepened by Impagliazzo and Wigderson in 1997."
          },
          "pioneers": {
            "tagline": "Polynomial identity testing (PIT) and Kabanets-Impagliazzo theorem.",
            "analogy": "Derandomizing polynomial identity testing is proven to be EQUIVALENT to proving circuit lower bounds, creating an unbreakable algebraic circle.",
            "rules": [
              "Schwartz-Zippel lemma for randomized PIT.",
              "Kabanets-Impagliazzo equivalence theorem (2004).",
              "Formal verification in Lean 4."
            ],
            "mystery": "Cryptographic hash functions and seed expanders implement deterministic pseudorandom generation across all modern web browsers.",
            "funFact": "The BPP = P Conjecture represents the profound philosophical revelation that deterministic law completely encompasses apparent randomness."
          }
        },
        "history": [
          {
            "year": "1977",
            "author": "Solovay, Strassen & Rabin",
            "note": "Demonstrate power of randomized algorithms with prime testing."
          },
          {
            "year": "1997",
            "author": "Russell Impagliazzo & Avi Wigderson",
            "note": "Prove that circuit hardness implies BPP = P (Hardness vs. Randomness)."
          },
          {
            "year": "2002",
            "author": "Agrawal, Kayal & Saxena",
            "note": "Discover deterministic polynomial-time prime test (PRIMES is in P)."
          }
        ]
      },
      "de": {
        "name": "BPP = P Conjecture",
        "subtitle": "Can Every Coin-Flipping Algorithm Be Replaced by 100% Deterministic Code?",
        "field": "Computational Complexity & Pseudorandomness",
        "statusBadge": "FRONTIER CONSENSUS CONJECTURE",
        "grades": {
          "explorers": {
            "tagline": "Does a computer really need to flip lucky coins, or is true luck just an illusion of code?",
            "analogy": "In modern computing, algorithms often flip random coins to solve problems in a fraction of a second (BPP: Bounded-error Probabilistic Polynomial time)—like the Miller-Rabin test for prime numbers. For decades, computer scientists believed random coins gave computers superpowers that deterministic algorithms (P) could never match. But in 1997, Russell Impagliazzo and Avi Wigderson (Turing Award 2023, Abel Prize 2021) showed that if standard circuit lower bounds hold, then BPP = P! Coin-flipping adds ZERO genuine power: ANY randomized algorithm can be perfectly derandomized into pure, deterministic logic!",
            "rules": [
              "BPP: Problems solvable in polynomial time with error probability ≤ 1/3 using random coins.",
              "P: Problems solvable in polynomial time deterministically.",
              "Hardness vs. Randomness paradigm (Nisan-Wigderson 1994).",
              "Conjecture: BPP = P (Randomness is fundamentally dispensable in computation!)."
            ],
            "mystery": "In 2002, Agrawal, Kayal, and Saxena (AKS) stunned the world by derandomizing primality testing (proving PRIMES is in P), giving the most spectacular evidence in history that BPP = P!",
            "funFact": "Avi Wigderson is one of only two people in human history (along with John Milnor) to win BOTH the Abel Prize and the Turing Award!"
          },
          "investigators": {
            "tagline": "Nisan-Wigderson pseudorandom generator (PRG), average-case hardness, and extractor graphs.",
            "analogy": "Impagliazzo and Wigderson (1997) proved that if there exists a problem in E = DTIME(2^{O(n)}) requiring circuit size 2^{Ω(n)}, then BPP = P.",
            "rules": [
              "Nisan-Wigderson PRG: G: {0, 1}^S → {0, 1}^n with S = O(log n).",
              "Circuit lower bound assumption: Size(f) ≥ 2^{ε n}.",
              "Lean 4 Mathlib probability and complexity."
            ],
            "mystery": "Can we prove circuit lower bounds unconditionally without assumptions to close the final door on BPP = P?",
            "funFact": "Formulated as a central question in the 1980s; deepened by Impagliazzo and Wigderson in 1997."
          },
          "pioneers": {
            "tagline": "Polynomial identity testing (PIT) and Kabanets-Impagliazzo theorem.",
            "analogy": "Derandomizing polynomial identity testing is proven to be EQUIVALENT to proving circuit lower bounds, creating an unbreakable algebraic circle.",
            "rules": [
              "Schwartz-Zippel lemma for randomized PIT.",
              "Kabanets-Impagliazzo equivalence theorem (2004).",
              "Formal verification in Lean 4."
            ],
            "mystery": "Cryptographic hash functions and seed expanders implement deterministic pseudorandom generation across all modern web browsers.",
            "funFact": "The BPP = P Conjecture represents the profound philosophical revelation that deterministic law completely encompasses apparent randomness."
          }
        },
        "history": [
          {
            "year": "1977",
            "author": "Solovay, Strassen & Rabin",
            "note": "Demonstrate power of randomized algorithms with prime testing."
          },
          {
            "year": "1997",
            "author": "Russell Impagliazzo & Avi Wigderson",
            "note": "Prove that circuit hardness implies BPP = P (Hardness vs. Randomness)."
          },
          {
            "year": "2002",
            "author": "Agrawal, Kayal & Saxena",
            "note": "Discover deterministic polynomial-time prime test (PRIMES is in P)."
          }
        ]
      },
      "fr": {
        "name": "BPP = P Conjecture",
        "subtitle": "Can Every Coin-Flipping Algorithm Be Replaced by 100% Deterministic Code?",
        "field": "Computational Complexity & Pseudorandomness",
        "statusBadge": "FRONTIER CONSENSUS CONJECTURE",
        "grades": {
          "explorers": {
            "tagline": "Does a computer really need to flip lucky coins, or is true luck just an illusion of code?",
            "analogy": "In modern computing, algorithms often flip random coins to solve problems in a fraction of a second (BPP: Bounded-error Probabilistic Polynomial time)—like the Miller-Rabin test for prime numbers. For decades, computer scientists believed random coins gave computers superpowers that deterministic algorithms (P) could never match. But in 1997, Russell Impagliazzo and Avi Wigderson (Turing Award 2023, Abel Prize 2021) showed that if standard circuit lower bounds hold, then BPP = P! Coin-flipping adds ZERO genuine power: ANY randomized algorithm can be perfectly derandomized into pure, deterministic logic!",
            "rules": [
              "BPP: Problems solvable in polynomial time with error probability ≤ 1/3 using random coins.",
              "P: Problems solvable in polynomial time deterministically.",
              "Hardness vs. Randomness paradigm (Nisan-Wigderson 1994).",
              "Conjecture: BPP = P (Randomness is fundamentally dispensable in computation!)."
            ],
            "mystery": "In 2002, Agrawal, Kayal, and Saxena (AKS) stunned the world by derandomizing primality testing (proving PRIMES is in P), giving the most spectacular evidence in history that BPP = P!",
            "funFact": "Avi Wigderson is one of only two people in human history (along with John Milnor) to win BOTH the Abel Prize and the Turing Award!"
          },
          "investigators": {
            "tagline": "Nisan-Wigderson pseudorandom generator (PRG), average-case hardness, and extractor graphs.",
            "analogy": "Impagliazzo and Wigderson (1997) proved that if there exists a problem in E = DTIME(2^{O(n)}) requiring circuit size 2^{Ω(n)}, then BPP = P.",
            "rules": [
              "Nisan-Wigderson PRG: G: {0, 1}^S → {0, 1}^n with S = O(log n).",
              "Circuit lower bound assumption: Size(f) ≥ 2^{ε n}.",
              "Lean 4 Mathlib probability and complexity."
            ],
            "mystery": "Can we prove circuit lower bounds unconditionally without assumptions to close the final door on BPP = P?",
            "funFact": "Formulated as a central question in the 1980s; deepened by Impagliazzo and Wigderson in 1997."
          },
          "pioneers": {
            "tagline": "Polynomial identity testing (PIT) and Kabanets-Impagliazzo theorem.",
            "analogy": "Derandomizing polynomial identity testing is proven to be EQUIVALENT to proving circuit lower bounds, creating an unbreakable algebraic circle.",
            "rules": [
              "Schwartz-Zippel lemma for randomized PIT.",
              "Kabanets-Impagliazzo equivalence theorem (2004).",
              "Formal verification in Lean 4."
            ],
            "mystery": "Cryptographic hash functions and seed expanders implement deterministic pseudorandom generation across all modern web browsers.",
            "funFact": "The BPP = P Conjecture represents the profound philosophical revelation that deterministic law completely encompasses apparent randomness."
          }
        },
        "history": [
          {
            "year": "1977",
            "author": "Solovay, Strassen & Rabin",
            "note": "Demonstrate power of randomized algorithms with prime testing."
          },
          {
            "year": "1997",
            "author": "Russell Impagliazzo & Avi Wigderson",
            "note": "Prove that circuit hardness implies BPP = P (Hardness vs. Randomness)."
          },
          {
            "year": "2002",
            "author": "Agrawal, Kayal & Saxena",
            "note": "Discover deterministic polynomial-time prime test (PRIMES is in P)."
          }
        ]
      },
      "it": {
        "name": "BPP = P Conjecture",
        "subtitle": "Can Every Coin-Flipping Algorithm Be Replaced by 100% Deterministic Code?",
        "field": "Computational Complexity & Pseudorandomness",
        "statusBadge": "FRONTIER CONSENSUS CONJECTURE",
        "grades": {
          "explorers": {
            "tagline": "Does a computer really need to flip lucky coins, or is true luck just an illusion of code?",
            "analogy": "In modern computing, algorithms often flip random coins to solve problems in a fraction of a second (BPP: Bounded-error Probabilistic Polynomial time)—like the Miller-Rabin test for prime numbers. For decades, computer scientists believed random coins gave computers superpowers that deterministic algorithms (P) could never match. But in 1997, Russell Impagliazzo and Avi Wigderson (Turing Award 2023, Abel Prize 2021) showed that if standard circuit lower bounds hold, then BPP = P! Coin-flipping adds ZERO genuine power: ANY randomized algorithm can be perfectly derandomized into pure, deterministic logic!",
            "rules": [
              "BPP: Problems solvable in polynomial time with error probability ≤ 1/3 using random coins.",
              "P: Problems solvable in polynomial time deterministically.",
              "Hardness vs. Randomness paradigm (Nisan-Wigderson 1994).",
              "Conjecture: BPP = P (Randomness is fundamentally dispensable in computation!)."
            ],
            "mystery": "In 2002, Agrawal, Kayal, and Saxena (AKS) stunned the world by derandomizing primality testing (proving PRIMES is in P), giving the most spectacular evidence in history that BPP = P!",
            "funFact": "Avi Wigderson is one of only two people in human history (along with John Milnor) to win BOTH the Abel Prize and the Turing Award!"
          },
          "investigators": {
            "tagline": "Nisan-Wigderson pseudorandom generator (PRG), average-case hardness, and extractor graphs.",
            "analogy": "Impagliazzo and Wigderson (1997) proved that if there exists a problem in E = DTIME(2^{O(n)}) requiring circuit size 2^{Ω(n)}, then BPP = P.",
            "rules": [
              "Nisan-Wigderson PRG: G: {0, 1}^S → {0, 1}^n with S = O(log n).",
              "Circuit lower bound assumption: Size(f) ≥ 2^{ε n}.",
              "Lean 4 Mathlib probability and complexity."
            ],
            "mystery": "Can we prove circuit lower bounds unconditionally without assumptions to close the final door on BPP = P?",
            "funFact": "Formulated as a central question in the 1980s; deepened by Impagliazzo and Wigderson in 1997."
          },
          "pioneers": {
            "tagline": "Polynomial identity testing (PIT) and Kabanets-Impagliazzo theorem.",
            "analogy": "Derandomizing polynomial identity testing is proven to be EQUIVALENT to proving circuit lower bounds, creating an unbreakable algebraic circle.",
            "rules": [
              "Schwartz-Zippel lemma for randomized PIT.",
              "Kabanets-Impagliazzo equivalence theorem (2004).",
              "Formal verification in Lean 4."
            ],
            "mystery": "Cryptographic hash functions and seed expanders implement deterministic pseudorandom generation across all modern web browsers.",
            "funFact": "The BPP = P Conjecture represents the profound philosophical revelation that deterministic law completely encompasses apparent randomness."
          }
        },
        "history": [
          {
            "year": "1977",
            "author": "Solovay, Strassen & Rabin",
            "note": "Demonstrate power of randomized algorithms with prime testing."
          },
          {
            "year": "1997",
            "author": "Russell Impagliazzo & Avi Wigderson",
            "note": "Prove that circuit hardness implies BPP = P (Hardness vs. Randomness)."
          },
          {
            "year": "2002",
            "author": "Agrawal, Kayal & Saxena",
            "note": "Discover deterministic polynomial-time prime test (PRIMES is in P)."
          }
        ]
      },
      "ja": {
        "name": "BPP = P Conjecture",
        "subtitle": "Can Every Coin-Flipping Algorithm Be Replaced by 100% Deterministic Code?",
        "field": "Computational Complexity & Pseudorandomness",
        "statusBadge": "FRONTIER CONSENSUS CONJECTURE",
        "grades": {
          "explorers": {
            "tagline": "Does a computer really need to flip lucky coins, or is true luck just an illusion of code?",
            "analogy": "In modern computing, algorithms often flip random coins to solve problems in a fraction of a second (BPP: Bounded-error Probabilistic Polynomial time)—like the Miller-Rabin test for prime numbers. For decades, computer scientists believed random coins gave computers superpowers that deterministic algorithms (P) could never match. But in 1997, Russell Impagliazzo and Avi Wigderson (Turing Award 2023, Abel Prize 2021) showed that if standard circuit lower bounds hold, then BPP = P! Coin-flipping adds ZERO genuine power: ANY randomized algorithm can be perfectly derandomized into pure, deterministic logic!",
            "rules": [
              "BPP: Problems solvable in polynomial time with error probability ≤ 1/3 using random coins.",
              "P: Problems solvable in polynomial time deterministically.",
              "Hardness vs. Randomness paradigm (Nisan-Wigderson 1994).",
              "Conjecture: BPP = P (Randomness is fundamentally dispensable in computation!)."
            ],
            "mystery": "In 2002, Agrawal, Kayal, and Saxena (AKS) stunned the world by derandomizing primality testing (proving PRIMES is in P), giving the most spectacular evidence in history that BPP = P!",
            "funFact": "Avi Wigderson is one of only two people in human history (along with John Milnor) to win BOTH the Abel Prize and the Turing Award!"
          },
          "investigators": {
            "tagline": "Nisan-Wigderson pseudorandom generator (PRG), average-case hardness, and extractor graphs.",
            "analogy": "Impagliazzo and Wigderson (1997) proved that if there exists a problem in E = DTIME(2^{O(n)}) requiring circuit size 2^{Ω(n)}, then BPP = P.",
            "rules": [
              "Nisan-Wigderson PRG: G: {0, 1}^S → {0, 1}^n with S = O(log n).",
              "Circuit lower bound assumption: Size(f) ≥ 2^{ε n}.",
              "Lean 4 Mathlib probability and complexity."
            ],
            "mystery": "Can we prove circuit lower bounds unconditionally without assumptions to close the final door on BPP = P?",
            "funFact": "Formulated as a central question in the 1980s; deepened by Impagliazzo and Wigderson in 1997."
          },
          "pioneers": {
            "tagline": "Polynomial identity testing (PIT) and Kabanets-Impagliazzo theorem.",
            "analogy": "Derandomizing polynomial identity testing is proven to be EQUIVALENT to proving circuit lower bounds, creating an unbreakable algebraic circle.",
            "rules": [
              "Schwartz-Zippel lemma for randomized PIT.",
              "Kabanets-Impagliazzo equivalence theorem (2004).",
              "Formal verification in Lean 4."
            ],
            "mystery": "Cryptographic hash functions and seed expanders implement deterministic pseudorandom generation across all modern web browsers.",
            "funFact": "The BPP = P Conjecture represents the profound philosophical revelation that deterministic law completely encompasses apparent randomness."
          }
        },
        "history": [
          {
            "year": "1977",
            "author": "Solovay, Strassen & Rabin",
            "note": "Demonstrate power of randomized algorithms with prime testing."
          },
          {
            "year": "1997",
            "author": "Russell Impagliazzo & Avi Wigderson",
            "note": "Prove that circuit hardness implies BPP = P (Hardness vs. Randomness)."
          },
          {
            "year": "2002",
            "author": "Agrawal, Kayal & Saxena",
            "note": "Discover deterministic polynomial-time prime test (PRIMES is in P)."
          }
        ]
      },
      "ko": {
        "name": "BPP = P Conjecture",
        "subtitle": "Can Every Coin-Flipping Algorithm Be Replaced by 100% Deterministic Code?",
        "field": "Computational Complexity & Pseudorandomness",
        "statusBadge": "FRONTIER CONSENSUS CONJECTURE",
        "grades": {
          "explorers": {
            "tagline": "Does a computer really need to flip lucky coins, or is true luck just an illusion of code?",
            "analogy": "In modern computing, algorithms often flip random coins to solve problems in a fraction of a second (BPP: Bounded-error Probabilistic Polynomial time)—like the Miller-Rabin test for prime numbers. For decades, computer scientists believed random coins gave computers superpowers that deterministic algorithms (P) could never match. But in 1997, Russell Impagliazzo and Avi Wigderson (Turing Award 2023, Abel Prize 2021) showed that if standard circuit lower bounds hold, then BPP = P! Coin-flipping adds ZERO genuine power: ANY randomized algorithm can be perfectly derandomized into pure, deterministic logic!",
            "rules": [
              "BPP: Problems solvable in polynomial time with error probability ≤ 1/3 using random coins.",
              "P: Problems solvable in polynomial time deterministically.",
              "Hardness vs. Randomness paradigm (Nisan-Wigderson 1994).",
              "Conjecture: BPP = P (Randomness is fundamentally dispensable in computation!)."
            ],
            "mystery": "In 2002, Agrawal, Kayal, and Saxena (AKS) stunned the world by derandomizing primality testing (proving PRIMES is in P), giving the most spectacular evidence in history that BPP = P!",
            "funFact": "Avi Wigderson is one of only two people in human history (along with John Milnor) to win BOTH the Abel Prize and the Turing Award!"
          },
          "investigators": {
            "tagline": "Nisan-Wigderson pseudorandom generator (PRG), average-case hardness, and extractor graphs.",
            "analogy": "Impagliazzo and Wigderson (1997) proved that if there exists a problem in E = DTIME(2^{O(n)}) requiring circuit size 2^{Ω(n)}, then BPP = P.",
            "rules": [
              "Nisan-Wigderson PRG: G: {0, 1}^S → {0, 1}^n with S = O(log n).",
              "Circuit lower bound assumption: Size(f) ≥ 2^{ε n}.",
              "Lean 4 Mathlib probability and complexity."
            ],
            "mystery": "Can we prove circuit lower bounds unconditionally without assumptions to close the final door on BPP = P?",
            "funFact": "Formulated as a central question in the 1980s; deepened by Impagliazzo and Wigderson in 1997."
          },
          "pioneers": {
            "tagline": "Polynomial identity testing (PIT) and Kabanets-Impagliazzo theorem.",
            "analogy": "Derandomizing polynomial identity testing is proven to be EQUIVALENT to proving circuit lower bounds, creating an unbreakable algebraic circle.",
            "rules": [
              "Schwartz-Zippel lemma for randomized PIT.",
              "Kabanets-Impagliazzo equivalence theorem (2004).",
              "Formal verification in Lean 4."
            ],
            "mystery": "Cryptographic hash functions and seed expanders implement deterministic pseudorandom generation across all modern web browsers.",
            "funFact": "The BPP = P Conjecture represents the profound philosophical revelation that deterministic law completely encompasses apparent randomness."
          }
        },
        "history": [
          {
            "year": "1977",
            "author": "Solovay, Strassen & Rabin",
            "note": "Demonstrate power of randomized algorithms with prime testing."
          },
          {
            "year": "1997",
            "author": "Russell Impagliazzo & Avi Wigderson",
            "note": "Prove that circuit hardness implies BPP = P (Hardness vs. Randomness)."
          },
          {
            "year": "2002",
            "author": "Agrawal, Kayal & Saxena",
            "note": "Discover deterministic polynomial-time prime test (PRIMES is in P)."
          }
        ]
      },
      "zh-Hans": {
        "name": "BPP 等于 P 猜想（去随机化终极大统一）",
        "subtitle": "世上一切依赖抛硬币概率的随机算法，是否必定能被完全确定的确定性代码彻底替代？",
        "field": "计算复杂性理论 & 伪随机数生成器",
        "statusBadge": "复杂性前沿共识猜想",
        "grades": {
          "explorers": {
            "tagline": "计算机解题真的需要靠抛硬币碰运气吗？所谓的好运气是不是仅仅只是人类算法未达化境的幻觉？",
            "analogy": "在现代计算科学中，许多高效算法必须依赖计算机‘抛硬币’产生随机数（如著名的米勒-拉宾素数测试），这类高效概率算法被称为 BPP 类。长久以来人们一直笃信：抛硬币赋予了计算机某种确定性代码（P 类）永远无法企及的神奇超能力。然而在1997年，阿维·威格森（2021阿贝尔奖、2023图灵奖双料得主）与拉塞尔·因帕利亚佐震惊世界：只要最基础的布尔电路复杂度下界成立，那么必定有 BPP = P！所谓掷骰子碰运气在终极算法面前完全是多余的：任何随机算法都可以被分毫不差地完全去随机化，转化为百分之百确定的极速代码！",
            "rules": [
              "BPP 类：可在多项式时间内借助随机硬币以至多 1/3 错误率求解的问题。",
              "P 类：百分之百确定、毫无误差的经典多项式时间求解。",
              "‘计算硬度兑换伪随机性’范式 (Nisan-Wigderson)。",
              "核心猜想：$BPP = P$（在多项式计算意义下，真随机性完全可以被完全淘汰！）"
            ],
            "mystery": "2002年印度学者阿格拉瓦尔团队（AKS）震撼全球，成功将素数判定算法彻底去随机化（证明素数属于 P），成为支持 BPP = P 历史上最辉煌的里程碑实证！",
            "funFact": "阿维·威格森是人类历史上仅有的两位同时荣获数学阿贝尔奖与计算机图灵奖的双料传奇宗师之一！"
          },
          "investigators": {
            "tagline": "尼桑-威格森伪随机生成器 (PRG)、平均计算硬度与离散随机提取器。",
            "analogy": "因帕利亚佐与威格森严格证明：只要指数时间类 E 中存在某个问题需要指数级大小的布尔电路，那么就能构造出近乎完美的伪随机发生器，使得 $BPP = P$ 绝对成立！",
            "rules": [
              "尼桑-威格森极短种子伪随机发生器代数公式。",
              "电路下界假定：$\\text{Size}(f) \\ge 2^{\\varepsilon n}$。",
              "Lean 4 概率图灵机与计算复杂度形式化。"
            ],
            "mystery": "能否完全无条件地证明强电路下界，彻底完成 BPP = P 的终极闭环？",
            "funFact": "于1980年代初成型，因帕利亚佐与威格森确立硬度对偶。"
          },
          "pioneers": {
            "tagline": "多项式恒等检验 (PIT) 与卡巴内茨-因帕利亚佐代数定理。",
            "analogy": "将多项式恒等检验（PIT）完全去随机化，在数学上已被严格证明完全等价于证明非平凡的布尔电路下界，形成了美妙的自洽闭环。",
            "rules": [
              "施瓦茨-齐佩尔概率恒等检验引理。",
              "去随机化与电路下界等价性定理形式化。",
              "Lean 4 代数恒等式形式化。"
            ],
            "mystery": "全球互联网安全传输协议与区块链皆建立在伪随机数发生器将微小熵源去随机化展开的技术之上。",
            "funFact": "BPP = P 猜想生动昭示了终极深刻的哲学启示：看似莫测的随机运气，在更高维度的严密代数定律面前不过是完全可控的必然秩序。"
          }
        },
        "history": [
          {
            "year": "1977",
            "author": "拉宾团队",
            "note": "发明随机素数测试，揭开概率算法黄金时代。"
          },
          {
            "year": "1997",
            "author": "因帕利亚佐 & 威格森",
            "note": "彻底证明强电路硬度蕴含 BPP = P！"
          },
          {
            "year": "2002",
            "author": "AKS 团队",
            "note": "发明 AKS 确定性素数判定算法，震撼全球！"
          }
        ]
      },
      "zh-Hant": {
        "name": "BPP = P Conjecture",
        "subtitle": "Can Every Coin-Flipping Algorithm Be Replaced by 100% Deterministic Code?",
        "field": "Computational Complexity & Pseudorandomness",
        "statusBadge": "FRONTIER CONSENSUS CONJECTURE",
        "grades": {
          "explorers": {
            "tagline": "Does a computer really need to flip lucky coins, or is true luck just an illusion of code?",
            "analogy": "In modern computing, algorithms often flip random coins to solve problems in a fraction of a second (BPP: Bounded-error Probabilistic Polynomial time)—like the Miller-Rabin test for prime numbers. For decades, computer scientists believed random coins gave computers superpowers that deterministic algorithms (P) could never match. But in 1997, Russell Impagliazzo and Avi Wigderson (Turing Award 2023, Abel Prize 2021) showed that if standard circuit lower bounds hold, then BPP = P! Coin-flipping adds ZERO genuine power: ANY randomized algorithm can be perfectly derandomized into pure, deterministic logic!",
            "rules": [
              "BPP: Problems solvable in polynomial time with error probability ≤ 1/3 using random coins.",
              "P: Problems solvable in polynomial time deterministically.",
              "Hardness vs. Randomness paradigm (Nisan-Wigderson 1994).",
              "Conjecture: BPP = P (Randomness is fundamentally dispensable in computation!)."
            ],
            "mystery": "In 2002, Agrawal, Kayal, and Saxena (AKS) stunned the world by derandomizing primality testing (proving PRIMES is in P), giving the most spectacular evidence in history that BPP = P!",
            "funFact": "Avi Wigderson is one of only two people in human history (along with John Milnor) to win BOTH the Abel Prize and the Turing Award!"
          },
          "investigators": {
            "tagline": "Nisan-Wigderson pseudorandom generator (PRG), average-case hardness, and extractor graphs.",
            "analogy": "Impagliazzo and Wigderson (1997) proved that if there exists a problem in E = DTIME(2^{O(n)}) requiring circuit size 2^{Ω(n)}, then BPP = P.",
            "rules": [
              "Nisan-Wigderson PRG: G: {0, 1}^S → {0, 1}^n with S = O(log n).",
              "Circuit lower bound assumption: Size(f) ≥ 2^{ε n}.",
              "Lean 4 Mathlib probability and complexity."
            ],
            "mystery": "Can we prove circuit lower bounds unconditionally without assumptions to close the final door on BPP = P?",
            "funFact": "Formulated as a central question in the 1980s; deepened by Impagliazzo and Wigderson in 1997."
          },
          "pioneers": {
            "tagline": "Polynomial identity testing (PIT) and Kabanets-Impagliazzo theorem.",
            "analogy": "Derandomizing polynomial identity testing is proven to be EQUIVALENT to proving circuit lower bounds, creating an unbreakable algebraic circle.",
            "rules": [
              "Schwartz-Zippel lemma for randomized PIT.",
              "Kabanets-Impagliazzo equivalence theorem (2004).",
              "Formal verification in Lean 4."
            ],
            "mystery": "Cryptographic hash functions and seed expanders implement deterministic pseudorandom generation across all modern web browsers.",
            "funFact": "The BPP = P Conjecture represents the profound philosophical revelation that deterministic law completely encompasses apparent randomness."
          }
        },
        "history": [
          {
            "year": "1977",
            "author": "Solovay, Strassen & Rabin",
            "note": "Demonstrate power of randomized algorithms with prime testing."
          },
          {
            "year": "1997",
            "author": "Russell Impagliazzo & Avi Wigderson",
            "note": "Prove that circuit hardness implies BPP = P (Hardness vs. Randomness)."
          },
          {
            "year": "2002",
            "author": "Agrawal, Kayal & Saxena",
            "note": "Discover deterministic polynomial-time prime test (PRIMES is in P)."
          }
        ]
      }
    }
  },
  {
    "id": "collatz-decidability",
    "icon": "🌀",
    "difficulty": "All Ages",
    "domain": "computer-science",
    "category": "computer-science",
    "isMillennium": false,
    "isAIFrontier": true,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Computability.Halting\n-- Generalized Collatz Undecidability (John Horton Conway, 1972)\n-- The generalization of the Collatz 3n+1 mapping to arbitrary residue systems is algorithmically UNDECIDABLE (Turing-complete).",
    "locales": {
      "en": {
        "name": "Collatz Undecidability (Conway's Theorem)",
        "subtitle": "Generalized $3n+1$ Dynamics are Computationally Undecidable and Turing-Complete (Conway 1972)",
        "field": "Computability Theory & Universal Computation",
        "statusBadge": "PROVEN THEOREM (CONWAY 1972)",
        "grades": {
          "explorers": {
            "tagline": "Can a simple rule of multiplying fractions secretly hide every computer program in the universe?",
            "analogy": "Why is the simple Collatz 3n+1 conjecture so notoriously impossible to prove? In 1972, legendary mathematician John Horton Conway delivered the ultimate theoretical explanation: He generalized the Collatz rules to piecewise linear functions $g(n) = a_i n + b_i$ modulo $m$. Conway proved that determining whether a starting number ever reaches 1 under such rules is Algorithmically UNDECIDABLE! In fact, Conway invented FRACTRAN, showing that simple fraction-multiplication games can simulate ANY Turing machine! The Collatz problem is resistant because it grazes the absolute event horizon of Turing computability!",
            "rules": [
              "Generalized Collatz mapping: g(n) = a_r n + b_r for n ≡ r (mod m).",
              "Conway's Theorem (1972): The problem 'does g^k(n) = 1 for some k?' is undecidable.",
              "FRACTRAN: List of positive fractions f_1, ..., f_k.",
              "Rule: Multiply n by the first fraction that produces an integer. Repeat."
            ],
            "mystery": "Conway's FRACTRAN program for generating prime numbers is a list of just 14 fractions: 17/91, 78/85, 19/51, 23/38, 29/33, 77/29, 95/23, 77/19, 1/17, 11/13, 13/11, 15/14, 15/2, 55/1! Whenever a power of 2 appears, its exponent is a prime!",
            "funFact": "Paul Erdős famously said of the Collatz conjecture: 'Mathematics may not be ready for such problems'!"
          },
          "investigators": {
            "tagline": "Halting problem, Register machines, and Minsky machines.",
            "analogy": "Conway encoded any 2-counter Minsky machine into the exponents of prime factorizations: state machine transitions correspond exactly to fraction multiplication.",
            "rules": [
              "Minsky 2-register machine simulation.",
              "FRACTRAN prime factorization state vector: n = 2^a 3^b 5^c ...",
              "Lean 4 Mathlib TuringMachine undecidability."
            ],
            "mystery": "Can we prove that the specific original 3n+1 mapping is independent of Peano Arithmetic (PA)?",
            "funFact": "John Horton Conway published the theorem in 1972."
          },
          "pioneers": {
            "tagline": "Gödel's Incompleteness Theorems and dynamical undecidability.",
            "analogy": "Kurtz and Simon (2007) proved that even for fixed modulus m, the generalized Collatz problem remains undecidable.",
            "rules": [
              "Rice's theorem for dynamical systems.",
              "Effective undecidability bounds.",
              "Formal verification in Lean 4."
            ],
            "mystery": "Interactive FRACTRAN emulator runs Conway's 14-fraction prime generator in real-time within the WonderMath sandbox.",
            "funFact": "Conway's Collatz Undecidability Theorem is the sublime bridge linking elementary arithmetic games with the ultimate mysteries of computability."
          }
        },
        "history": [
          {
            "year": "1937",
            "author": "Lothar Collatz",
            "note": "Poses the original 3n+1 problem."
          },
          {
            "year": "1972",
            "author": "John Horton Conway",
            "note": "Proves generalized Collatz problems are algorithmically undecidable (FRACTRAN)."
          },
          {
            "year": "2019",
            "author": "Terence Tao",
            "note": "Proves almost all Collatz orbits attain almost bounded values."
          }
        ]
      },
      "de": {
        "name": "Collatz Undecidability (Conway's Theorem)",
        "subtitle": "Generalized $3n+1$ Dynamics are Computationally Undecidable and Turing-Complete (Conway 1972)",
        "field": "Computability Theory & Universal Computation",
        "statusBadge": "PROVEN THEOREM (CONWAY 1972)",
        "grades": {
          "explorers": {
            "tagline": "Can a simple rule of multiplying fractions secretly hide every computer program in the universe?",
            "analogy": "Why is the simple Collatz 3n+1 conjecture so notoriously impossible to prove? In 1972, legendary mathematician John Horton Conway delivered the ultimate theoretical explanation: He generalized the Collatz rules to piecewise linear functions $g(n) = a_i n + b_i$ modulo $m$. Conway proved that determining whether a starting number ever reaches 1 under such rules is Algorithmically UNDECIDABLE! In fact, Conway invented FRACTRAN, showing that simple fraction-multiplication games can simulate ANY Turing machine! The Collatz problem is resistant because it grazes the absolute event horizon of Turing computability!",
            "rules": [
              "Generalized Collatz mapping: g(n) = a_r n + b_r for n ≡ r (mod m).",
              "Conway's Theorem (1972): The problem 'does g^k(n) = 1 for some k?' is undecidable.",
              "FRACTRAN: List of positive fractions f_1, ..., f_k.",
              "Rule: Multiply n by the first fraction that produces an integer. Repeat."
            ],
            "mystery": "Conway's FRACTRAN program for generating prime numbers is a list of just 14 fractions: 17/91, 78/85, 19/51, 23/38, 29/33, 77/29, 95/23, 77/19, 1/17, 11/13, 13/11, 15/14, 15/2, 55/1! Whenever a power of 2 appears, its exponent is a prime!",
            "funFact": "Paul Erdős famously said of the Collatz conjecture: 'Mathematics may not be ready for such problems'!"
          },
          "investigators": {
            "tagline": "Halting problem, Register machines, and Minsky machines.",
            "analogy": "Conway encoded any 2-counter Minsky machine into the exponents of prime factorizations: state machine transitions correspond exactly to fraction multiplication.",
            "rules": [
              "Minsky 2-register machine simulation.",
              "FRACTRAN prime factorization state vector: n = 2^a 3^b 5^c ...",
              "Lean 4 Mathlib TuringMachine undecidability."
            ],
            "mystery": "Can we prove that the specific original 3n+1 mapping is independent of Peano Arithmetic (PA)?",
            "funFact": "John Horton Conway published the theorem in 1972."
          },
          "pioneers": {
            "tagline": "Gödel's Incompleteness Theorems and dynamical undecidability.",
            "analogy": "Kurtz and Simon (2007) proved that even for fixed modulus m, the generalized Collatz problem remains undecidable.",
            "rules": [
              "Rice's theorem for dynamical systems.",
              "Effective undecidability bounds.",
              "Formal verification in Lean 4."
            ],
            "mystery": "Interactive FRACTRAN emulator runs Conway's 14-fraction prime generator in real-time within the WonderMath sandbox.",
            "funFact": "Conway's Collatz Undecidability Theorem is the sublime bridge linking elementary arithmetic games with the ultimate mysteries of computability."
          }
        },
        "history": [
          {
            "year": "1937",
            "author": "Lothar Collatz",
            "note": "Poses the original 3n+1 problem."
          },
          {
            "year": "1972",
            "author": "John Horton Conway",
            "note": "Proves generalized Collatz problems are algorithmically undecidable (FRACTRAN)."
          },
          {
            "year": "2019",
            "author": "Terence Tao",
            "note": "Proves almost all Collatz orbits attain almost bounded values."
          }
        ]
      },
      "fr": {
        "name": "Collatz Undecidability (Conway's Theorem)",
        "subtitle": "Generalized $3n+1$ Dynamics are Computationally Undecidable and Turing-Complete (Conway 1972)",
        "field": "Computability Theory & Universal Computation",
        "statusBadge": "PROVEN THEOREM (CONWAY 1972)",
        "grades": {
          "explorers": {
            "tagline": "Can a simple rule of multiplying fractions secretly hide every computer program in the universe?",
            "analogy": "Why is the simple Collatz 3n+1 conjecture so notoriously impossible to prove? In 1972, legendary mathematician John Horton Conway delivered the ultimate theoretical explanation: He generalized the Collatz rules to piecewise linear functions $g(n) = a_i n + b_i$ modulo $m$. Conway proved that determining whether a starting number ever reaches 1 under such rules is Algorithmically UNDECIDABLE! In fact, Conway invented FRACTRAN, showing that simple fraction-multiplication games can simulate ANY Turing machine! The Collatz problem is resistant because it grazes the absolute event horizon of Turing computability!",
            "rules": [
              "Generalized Collatz mapping: g(n) = a_r n + b_r for n ≡ r (mod m).",
              "Conway's Theorem (1972): The problem 'does g^k(n) = 1 for some k?' is undecidable.",
              "FRACTRAN: List of positive fractions f_1, ..., f_k.",
              "Rule: Multiply n by the first fraction that produces an integer. Repeat."
            ],
            "mystery": "Conway's FRACTRAN program for generating prime numbers is a list of just 14 fractions: 17/91, 78/85, 19/51, 23/38, 29/33, 77/29, 95/23, 77/19, 1/17, 11/13, 13/11, 15/14, 15/2, 55/1! Whenever a power of 2 appears, its exponent is a prime!",
            "funFact": "Paul Erdős famously said of the Collatz conjecture: 'Mathematics may not be ready for such problems'!"
          },
          "investigators": {
            "tagline": "Halting problem, Register machines, and Minsky machines.",
            "analogy": "Conway encoded any 2-counter Minsky machine into the exponents of prime factorizations: state machine transitions correspond exactly to fraction multiplication.",
            "rules": [
              "Minsky 2-register machine simulation.",
              "FRACTRAN prime factorization state vector: n = 2^a 3^b 5^c ...",
              "Lean 4 Mathlib TuringMachine undecidability."
            ],
            "mystery": "Can we prove that the specific original 3n+1 mapping is independent of Peano Arithmetic (PA)?",
            "funFact": "John Horton Conway published the theorem in 1972."
          },
          "pioneers": {
            "tagline": "Gödel's Incompleteness Theorems and dynamical undecidability.",
            "analogy": "Kurtz and Simon (2007) proved that even for fixed modulus m, the generalized Collatz problem remains undecidable.",
            "rules": [
              "Rice's theorem for dynamical systems.",
              "Effective undecidability bounds.",
              "Formal verification in Lean 4."
            ],
            "mystery": "Interactive FRACTRAN emulator runs Conway's 14-fraction prime generator in real-time within the WonderMath sandbox.",
            "funFact": "Conway's Collatz Undecidability Theorem is the sublime bridge linking elementary arithmetic games with the ultimate mysteries of computability."
          }
        },
        "history": [
          {
            "year": "1937",
            "author": "Lothar Collatz",
            "note": "Poses the original 3n+1 problem."
          },
          {
            "year": "1972",
            "author": "John Horton Conway",
            "note": "Proves generalized Collatz problems are algorithmically undecidable (FRACTRAN)."
          },
          {
            "year": "2019",
            "author": "Terence Tao",
            "note": "Proves almost all Collatz orbits attain almost bounded values."
          }
        ]
      },
      "it": {
        "name": "Collatz Undecidability (Conway's Theorem)",
        "subtitle": "Generalized $3n+1$ Dynamics are Computationally Undecidable and Turing-Complete (Conway 1972)",
        "field": "Computability Theory & Universal Computation",
        "statusBadge": "PROVEN THEOREM (CONWAY 1972)",
        "grades": {
          "explorers": {
            "tagline": "Can a simple rule of multiplying fractions secretly hide every computer program in the universe?",
            "analogy": "Why is the simple Collatz 3n+1 conjecture so notoriously impossible to prove? In 1972, legendary mathematician John Horton Conway delivered the ultimate theoretical explanation: He generalized the Collatz rules to piecewise linear functions $g(n) = a_i n + b_i$ modulo $m$. Conway proved that determining whether a starting number ever reaches 1 under such rules is Algorithmically UNDECIDABLE! In fact, Conway invented FRACTRAN, showing that simple fraction-multiplication games can simulate ANY Turing machine! The Collatz problem is resistant because it grazes the absolute event horizon of Turing computability!",
            "rules": [
              "Generalized Collatz mapping: g(n) = a_r n + b_r for n ≡ r (mod m).",
              "Conway's Theorem (1972): The problem 'does g^k(n) = 1 for some k?' is undecidable.",
              "FRACTRAN: List of positive fractions f_1, ..., f_k.",
              "Rule: Multiply n by the first fraction that produces an integer. Repeat."
            ],
            "mystery": "Conway's FRACTRAN program for generating prime numbers is a list of just 14 fractions: 17/91, 78/85, 19/51, 23/38, 29/33, 77/29, 95/23, 77/19, 1/17, 11/13, 13/11, 15/14, 15/2, 55/1! Whenever a power of 2 appears, its exponent is a prime!",
            "funFact": "Paul Erdős famously said of the Collatz conjecture: 'Mathematics may not be ready for such problems'!"
          },
          "investigators": {
            "tagline": "Halting problem, Register machines, and Minsky machines.",
            "analogy": "Conway encoded any 2-counter Minsky machine into the exponents of prime factorizations: state machine transitions correspond exactly to fraction multiplication.",
            "rules": [
              "Minsky 2-register machine simulation.",
              "FRACTRAN prime factorization state vector: n = 2^a 3^b 5^c ...",
              "Lean 4 Mathlib TuringMachine undecidability."
            ],
            "mystery": "Can we prove that the specific original 3n+1 mapping is independent of Peano Arithmetic (PA)?",
            "funFact": "John Horton Conway published the theorem in 1972."
          },
          "pioneers": {
            "tagline": "Gödel's Incompleteness Theorems and dynamical undecidability.",
            "analogy": "Kurtz and Simon (2007) proved that even for fixed modulus m, the generalized Collatz problem remains undecidable.",
            "rules": [
              "Rice's theorem for dynamical systems.",
              "Effective undecidability bounds.",
              "Formal verification in Lean 4."
            ],
            "mystery": "Interactive FRACTRAN emulator runs Conway's 14-fraction prime generator in real-time within the WonderMath sandbox.",
            "funFact": "Conway's Collatz Undecidability Theorem is the sublime bridge linking elementary arithmetic games with the ultimate mysteries of computability."
          }
        },
        "history": [
          {
            "year": "1937",
            "author": "Lothar Collatz",
            "note": "Poses the original 3n+1 problem."
          },
          {
            "year": "1972",
            "author": "John Horton Conway",
            "note": "Proves generalized Collatz problems are algorithmically undecidable (FRACTRAN)."
          },
          {
            "year": "2019",
            "author": "Terence Tao",
            "note": "Proves almost all Collatz orbits attain almost bounded values."
          }
        ]
      },
      "ja": {
        "name": "Collatz Undecidability (Conway's Theorem)",
        "subtitle": "Generalized $3n+1$ Dynamics are Computationally Undecidable and Turing-Complete (Conway 1972)",
        "field": "Computability Theory & Universal Computation",
        "statusBadge": "PROVEN THEOREM (CONWAY 1972)",
        "grades": {
          "explorers": {
            "tagline": "Can a simple rule of multiplying fractions secretly hide every computer program in the universe?",
            "analogy": "Why is the simple Collatz 3n+1 conjecture so notoriously impossible to prove? In 1972, legendary mathematician John Horton Conway delivered the ultimate theoretical explanation: He generalized the Collatz rules to piecewise linear functions $g(n) = a_i n + b_i$ modulo $m$. Conway proved that determining whether a starting number ever reaches 1 under such rules is Algorithmically UNDECIDABLE! In fact, Conway invented FRACTRAN, showing that simple fraction-multiplication games can simulate ANY Turing machine! The Collatz problem is resistant because it grazes the absolute event horizon of Turing computability!",
            "rules": [
              "Generalized Collatz mapping: g(n) = a_r n + b_r for n ≡ r (mod m).",
              "Conway's Theorem (1972): The problem 'does g^k(n) = 1 for some k?' is undecidable.",
              "FRACTRAN: List of positive fractions f_1, ..., f_k.",
              "Rule: Multiply n by the first fraction that produces an integer. Repeat."
            ],
            "mystery": "Conway's FRACTRAN program for generating prime numbers is a list of just 14 fractions: 17/91, 78/85, 19/51, 23/38, 29/33, 77/29, 95/23, 77/19, 1/17, 11/13, 13/11, 15/14, 15/2, 55/1! Whenever a power of 2 appears, its exponent is a prime!",
            "funFact": "Paul Erdős famously said of the Collatz conjecture: 'Mathematics may not be ready for such problems'!"
          },
          "investigators": {
            "tagline": "Halting problem, Register machines, and Minsky machines.",
            "analogy": "Conway encoded any 2-counter Minsky machine into the exponents of prime factorizations: state machine transitions correspond exactly to fraction multiplication.",
            "rules": [
              "Minsky 2-register machine simulation.",
              "FRACTRAN prime factorization state vector: n = 2^a 3^b 5^c ...",
              "Lean 4 Mathlib TuringMachine undecidability."
            ],
            "mystery": "Can we prove that the specific original 3n+1 mapping is independent of Peano Arithmetic (PA)?",
            "funFact": "John Horton Conway published the theorem in 1972."
          },
          "pioneers": {
            "tagline": "Gödel's Incompleteness Theorems and dynamical undecidability.",
            "analogy": "Kurtz and Simon (2007) proved that even for fixed modulus m, the generalized Collatz problem remains undecidable.",
            "rules": [
              "Rice's theorem for dynamical systems.",
              "Effective undecidability bounds.",
              "Formal verification in Lean 4."
            ],
            "mystery": "Interactive FRACTRAN emulator runs Conway's 14-fraction prime generator in real-time within the WonderMath sandbox.",
            "funFact": "Conway's Collatz Undecidability Theorem is the sublime bridge linking elementary arithmetic games with the ultimate mysteries of computability."
          }
        },
        "history": [
          {
            "year": "1937",
            "author": "Lothar Collatz",
            "note": "Poses the original 3n+1 problem."
          },
          {
            "year": "1972",
            "author": "John Horton Conway",
            "note": "Proves generalized Collatz problems are algorithmically undecidable (FRACTRAN)."
          },
          {
            "year": "2019",
            "author": "Terence Tao",
            "note": "Proves almost all Collatz orbits attain almost bounded values."
          }
        ]
      },
      "ko": {
        "name": "Collatz Undecidability (Conway's Theorem)",
        "subtitle": "Generalized $3n+1$ Dynamics are Computationally Undecidable and Turing-Complete (Conway 1972)",
        "field": "Computability Theory & Universal Computation",
        "statusBadge": "PROVEN THEOREM (CONWAY 1972)",
        "grades": {
          "explorers": {
            "tagline": "Can a simple rule of multiplying fractions secretly hide every computer program in the universe?",
            "analogy": "Why is the simple Collatz 3n+1 conjecture so notoriously impossible to prove? In 1972, legendary mathematician John Horton Conway delivered the ultimate theoretical explanation: He generalized the Collatz rules to piecewise linear functions $g(n) = a_i n + b_i$ modulo $m$. Conway proved that determining whether a starting number ever reaches 1 under such rules is Algorithmically UNDECIDABLE! In fact, Conway invented FRACTRAN, showing that simple fraction-multiplication games can simulate ANY Turing machine! The Collatz problem is resistant because it grazes the absolute event horizon of Turing computability!",
            "rules": [
              "Generalized Collatz mapping: g(n) = a_r n + b_r for n ≡ r (mod m).",
              "Conway's Theorem (1972): The problem 'does g^k(n) = 1 for some k?' is undecidable.",
              "FRACTRAN: List of positive fractions f_1, ..., f_k.",
              "Rule: Multiply n by the first fraction that produces an integer. Repeat."
            ],
            "mystery": "Conway's FRACTRAN program for generating prime numbers is a list of just 14 fractions: 17/91, 78/85, 19/51, 23/38, 29/33, 77/29, 95/23, 77/19, 1/17, 11/13, 13/11, 15/14, 15/2, 55/1! Whenever a power of 2 appears, its exponent is a prime!",
            "funFact": "Paul Erdős famously said of the Collatz conjecture: 'Mathematics may not be ready for such problems'!"
          },
          "investigators": {
            "tagline": "Halting problem, Register machines, and Minsky machines.",
            "analogy": "Conway encoded any 2-counter Minsky machine into the exponents of prime factorizations: state machine transitions correspond exactly to fraction multiplication.",
            "rules": [
              "Minsky 2-register machine simulation.",
              "FRACTRAN prime factorization state vector: n = 2^a 3^b 5^c ...",
              "Lean 4 Mathlib TuringMachine undecidability."
            ],
            "mystery": "Can we prove that the specific original 3n+1 mapping is independent of Peano Arithmetic (PA)?",
            "funFact": "John Horton Conway published the theorem in 1972."
          },
          "pioneers": {
            "tagline": "Gödel's Incompleteness Theorems and dynamical undecidability.",
            "analogy": "Kurtz and Simon (2007) proved that even for fixed modulus m, the generalized Collatz problem remains undecidable.",
            "rules": [
              "Rice's theorem for dynamical systems.",
              "Effective undecidability bounds.",
              "Formal verification in Lean 4."
            ],
            "mystery": "Interactive FRACTRAN emulator runs Conway's 14-fraction prime generator in real-time within the WonderMath sandbox.",
            "funFact": "Conway's Collatz Undecidability Theorem is the sublime bridge linking elementary arithmetic games with the ultimate mysteries of computability."
          }
        },
        "history": [
          {
            "year": "1937",
            "author": "Lothar Collatz",
            "note": "Poses the original 3n+1 problem."
          },
          {
            "year": "1972",
            "author": "John Horton Conway",
            "note": "Proves generalized Collatz problems are algorithmically undecidable (FRACTRAN)."
          },
          {
            "year": "2019",
            "author": "Terence Tao",
            "note": "Proves almost all Collatz orbits attain almost bounded values."
          }
        ]
      },
      "zh-Hans": {
        "name": "广义考拉兹不可判定性（康威图灵完备定理）",
        "subtitle": "广义考拉兹映射等价于通用图灵机停机问题，在算法上严格不可判定（约翰·康威1972年定理）",
        "field": "可计算性理论 & 通用图灵机完备性",
        "statusBadge": "康威1972年划时代定理",
        "grades": {
          "explorers": {
            "tagline": "规则仅仅是反复给数字乘上一串最普通的分数，里面能不能神不知鬼不觉地运行全宇宙所有的超级电脑程序？",
            "analogy": "为什么最简单的 3n+1 考拉兹猜想会如此坚不可摧？1972年传奇数学大师约翰·霍顿·康威给出了令全人类醍醐灌顶的终极答案：他将 3n+1 的奇偶分段规则推广到了任意模 $m$ 剩余系下的分段线性函数。康威给出了震撼数学界的严格定理：判断一个任意整数在该规则下最终是否会跌落回 1，在算法上是‘严格不可判定’的（Undecidable）！不仅如此，康威还发明了神奇的 FRACTRAN 编程语言，证明仅仅反复乘以几个简单分数，就能模拟‘全宇宙任意一台通用图灵机’！考拉兹猜想之所以如此难解，是因为它直接轻触了图灵停机不可判定性的绝望视界！",
            "rules": [
              "广义考拉兹分段映射：当 $n \\equiv r \\pmod m$ 时，$g(n) = a_r n + b_r$。",
              "康威定理 (1972)：判定是否存在 $k$ 使得迭代序列命中 1 是算法不可判定的！",
              "FRACTRAN 语言：一串给定的正分数列表 $f_1, \\dots, f_k$。",
              "规则：从数字 $n$ 开始，反复乘以列表中第一个能使乘积为整数的分数。循环往复。"
            ],
            "mystery": "康威用 FRACTRAN 编写的‘素数生成器’仅仅包含 14 个极其简短的分数！只要从数字 2 开始反复乘这 14 个分数，每当计算结果出现 2 的幂次方时，其指数恰好就是全宇宙的每一个素数！",
            "funFact": "保罗·埃尔德什曾对考拉兹猜想发出千古感叹：‘现代数学可能还根本没有做好准备来面对这类问题！’"
          },
          "investigators": {
            "tagline": "图灵停机问题、计数器寄存器机与明斯基 (Minsky) 通用机。",
            "analogy": "康威通过将明斯基双寄存器计数器的内部寄存器数值编码为素数因子的指数幂，严格证明了分数乘法序列与通用图灵机的离散执行完全一一对应。",
            "rules": [
              "明斯基双计数器通用机图灵等价性。",
              "FRACTRAN 素因子状态向量编码。",
              "Lean 4 图灵机停机问题不可判定性形式化。"
            ],
            "mystery": "能否严格证明原始的经典 3n+1 考拉兹猜想在皮亚诺一阶算术系统 (PA) 中是不可判定的？",
            "funFact": "约翰·霍顿·康威于1972年发表该定理。"
          },
          "pioneers": {
            "tagline": "哥德尔不完备性定理与离散动力系统代数不可计算性。",
            "analogy": "库尔茨与西蒙在2007年证明，即使固定极小的剩余系模数，广义考拉兹动力系统依然深陷不可判定的深渊。",
            "rules": [
              "动力系统莱斯 (Rice) 不可判定性定理。",
              "哥德尔第一不完备性形式化映射。",
              "Lean 4 离散可计算性代数库。"
            ],
            "mystery": "WonderMath 互动实验室实时内置康威 14 分数 FRACTRAN 虚拟机，动态演示素数指数涌现。",
            "funFact": "康威考拉兹不可判定性定理是连接小学生算术游戏与全人类计算极限终极奥秘最雄浑深邃的哲学桥梁。"
          }
        },
        "history": [
          {
            "year": "1937",
            "author": "洛塔尔·考拉兹",
            "note": "正式提出经典的 3n+1 猜想。"
          },
          {
            "year": "1972",
            "author": "约翰·霍顿·康威",
            "note": "发表划时代定理，证明广义考拉兹不可判定并创立 FRACTRAN！"
          },
          {
            "year": "2019",
            "author": "陶哲轩",
            "note": "发表重磅论文证明几乎所有考拉兹轨道均能落至极小值！"
          }
        ]
      },
      "zh-Hant": {
        "name": "Collatz Undecidability (Conway's Theorem)",
        "subtitle": "Generalized $3n+1$ Dynamics are Computationally Undecidable and Turing-Complete (Conway 1972)",
        "field": "Computability Theory & Universal Computation",
        "statusBadge": "PROVEN THEOREM (CONWAY 1972)",
        "grades": {
          "explorers": {
            "tagline": "Can a simple rule of multiplying fractions secretly hide every computer program in the universe?",
            "analogy": "Why is the simple Collatz 3n+1 conjecture so notoriously impossible to prove? In 1972, legendary mathematician John Horton Conway delivered the ultimate theoretical explanation: He generalized the Collatz rules to piecewise linear functions $g(n) = a_i n + b_i$ modulo $m$. Conway proved that determining whether a starting number ever reaches 1 under such rules is Algorithmically UNDECIDABLE! In fact, Conway invented FRACTRAN, showing that simple fraction-multiplication games can simulate ANY Turing machine! The Collatz problem is resistant because it grazes the absolute event horizon of Turing computability!",
            "rules": [
              "Generalized Collatz mapping: g(n) = a_r n + b_r for n ≡ r (mod m).",
              "Conway's Theorem (1972): The problem 'does g^k(n) = 1 for some k?' is undecidable.",
              "FRACTRAN: List of positive fractions f_1, ..., f_k.",
              "Rule: Multiply n by the first fraction that produces an integer. Repeat."
            ],
            "mystery": "Conway's FRACTRAN program for generating prime numbers is a list of just 14 fractions: 17/91, 78/85, 19/51, 23/38, 29/33, 77/29, 95/23, 77/19, 1/17, 11/13, 13/11, 15/14, 15/2, 55/1! Whenever a power of 2 appears, its exponent is a prime!",
            "funFact": "Paul Erdős famously said of the Collatz conjecture: 'Mathematics may not be ready for such problems'!"
          },
          "investigators": {
            "tagline": "Halting problem, Register machines, and Minsky machines.",
            "analogy": "Conway encoded any 2-counter Minsky machine into the exponents of prime factorizations: state machine transitions correspond exactly to fraction multiplication.",
            "rules": [
              "Minsky 2-register machine simulation.",
              "FRACTRAN prime factorization state vector: n = 2^a 3^b 5^c ...",
              "Lean 4 Mathlib TuringMachine undecidability."
            ],
            "mystery": "Can we prove that the specific original 3n+1 mapping is independent of Peano Arithmetic (PA)?",
            "funFact": "John Horton Conway published the theorem in 1972."
          },
          "pioneers": {
            "tagline": "Gödel's Incompleteness Theorems and dynamical undecidability.",
            "analogy": "Kurtz and Simon (2007) proved that even for fixed modulus m, the generalized Collatz problem remains undecidable.",
            "rules": [
              "Rice's theorem for dynamical systems.",
              "Effective undecidability bounds.",
              "Formal verification in Lean 4."
            ],
            "mystery": "Interactive FRACTRAN emulator runs Conway's 14-fraction prime generator in real-time within the WonderMath sandbox.",
            "funFact": "Conway's Collatz Undecidability Theorem is the sublime bridge linking elementary arithmetic games with the ultimate mysteries of computability."
          }
        },
        "history": [
          {
            "year": "1937",
            "author": "Lothar Collatz",
            "note": "Poses the original 3n+1 problem."
          },
          {
            "year": "1972",
            "author": "John Horton Conway",
            "note": "Proves generalized Collatz problems are algorithmically undecidable (FRACTRAN)."
          },
          {
            "year": "2019",
            "author": "Terence Tao",
            "note": "Proves almost all Collatz orbits attain almost bounded values."
          }
        ]
      }
    }
  }
];
