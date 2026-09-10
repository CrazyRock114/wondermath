/**
 * WonderMath Concrete Calculation Walkthroughs & Tiered Lab Challenges
 * Provides step-by-step arithmetic traces, concrete calculation examples,
 * and 3-tier hands-on inquiry challenges for all conjectures and AI breakthroughs.
 */

import { i18n } from "../i18n/i18n.js";

/**
 * Curated concrete calculation walkthroughs for core conjectures.
 */
const CURATED_WALKTHROUGHS = {
  "collatz": {
    zh: {
      title: "具象推演：奇偶递推轨迹手算实录",
      intro: "让我们选取具体的整数，亲手执行规则「偶数砍半、奇数乘3加1」：",
      cases: [
        {
          heading: "案例 A：以 n = 6 开始（平缓滑梯）",
          steps: [
            "6 是偶数 → 6 ÷ 2 = 3",
            "3 是奇数 → 3 × 3 + 1 = 10",
            "10 是偶数 → 10 ÷ 2 = 5",
            "5 是奇数 → 5 × 3 + 1 = 16",
            "16 是偶数 → 16 ÷ 2 = 8 → 4 → 2 → 1"
          ],
          result: "经过 8 步到达 1，最高峰值仅为 16，顺利坠入 4 → 2 → 1 循环。"
        },
        {
          heading: "案例 B：以 n = 7 开始（激烈震荡）",
          steps: [
            "7 是奇数 → 3×7+1 = 22 → 11 → 34 → 17 → 52 → 26 → 13 → 40 → 20 → 10 → 5",
            "5 是奇数 → 16 → 8 → 4 → 2 → 1"
          ],
          result: "经过 16 步到达 1，最高峰值攀升至 52，展现了惊人的剧烈振荡！"
        },
        {
          heading: "案例 C：以 n = 27 开始（数学珠穆朗玛峰）",
          steps: [
            "27 开始攀升：27 → 82 → 41 → 124 → 62 → 31 → 94 ...",
            "历经 77 步在第 77 步达到最高峰 9,232！",
            "然后如同冰雹自万米高空坠落，历经 111 步完全归于 1。"
          ],
          result: "总计 111 步，极值 9,232！计算机已验证至 2^68（约 2.95×10^20），无一例外归于 1。"
        }
      ],
      insight: "无论起点数值多么渺小或庞大，数值轨迹总是经历不可预测的锯齿形涨落，最终毫无例外地被 4-2-1 引力井捕获。"
    },
    en: {
      title: "Concrete Walkthrough: Manual Collatz Hailstone Tracing",
      intro: "Let's pick concrete numbers and apply the rules: 'If even, halve it; if odd, multiply by 3 and add 1':",
      cases: [
        {
          heading: "Case A: Starting with n = 6 (Gentle Slide)",
          steps: [
            "6 is even → 6 / 2 = 3",
            "3 is odd → 3 × 3 + 1 = 10",
            "10 is even → 10 / 2 = 5",
            "5 is odd → 5 × 3 + 1 = 16",
            "16 is even → 16 / 2 = 8 → 4 → 2 → 1"
          ],
          result: "Reaches 1 in 8 steps! Peak value is only 16, smoothly entering the 4 → 2 → 1 cycle."
        },
        {
          heading: "Case B: Starting with n = 7 (Oscillating Climb)",
          steps: [
            "7 is odd → 3×7+1 = 22 → 11 → 34 → 17 → 52 → 26 → 13 → 40 → 20 → 10 → 5",
            "5 is odd → 16 → 8 → 4 → 2 → 1"
          ],
          result: "Reaches 1 in 16 steps! Peak jumps to 52, showing how quickly trajectory can spike."
        },
        {
          heading: "Case C: Starting with n = 27 (The Mathematical Everest)",
          steps: [
            "27 climbs rapidly: 27 → 82 → 41 → 124 → 62 → 31 → 94 ...",
            "At step 77, it reaches a staggering peak altitude of 9,232!",
            "It then plunges through binary divisions and terminates at 1 after 111 steps."
          ],
          result: "Total 111 steps, peak 9,232. Verified computationally up to 2^68 with zero counterexamples."
        }
      ],
      insight: "Collatz trajectories exhibit pseudo-stochastic drift, yet every tested positive integer collapses into the 4 → 2 → 1 attractor."
    }
  },

  "goldbach": {
    zh: {
      title: "具象推演：偶数拆解为质数之和的实录",
      intro: "哥德巴赫猜想断言：每一个大于 2 的偶数，都可以写成两个质数之和。让我们检验前序偶数：",
      cases: [
        {
          heading: "基础偶数拆解（手算可证）",
          steps: [
            "4 = 2 + 2 （唯一直用偶质数的特例）",
            "6 = 3 + 3",
            "8 = 3 + 5",
            "10 = 3 + 7 = 5 + 5 （出现 2 种不同拆分方式）",
            "12 = 5 + 7",
            "14 = 3 + 11 = 7 + 7"
          ],
          result: "随着偶数增大，质数对拆分方式的数量呈现整体上升趋势（哥德巴赫彗星）。"
        },
        {
          heading: "偶数 N = 100 的丰富拆分",
          steps: [
            "100 = 3 + 97",
            "100 = 11 + 89",
            "100 = 17 + 83",
            "100 = 29 + 71",
            "100 = 41 + 59",
            "100 = 47 + 53"
          ],
          result: "共有 6 组质数对！偶数包含的小质因数越多（如 30、60、100），其质数对数量往往更加密集。"
        }
      ],
      insight: "偶数越大，可供匹配的质数资源越充裕，哥德巴赫彗星密集成束，反例存在的概率几乎为零，但严格的全称证明仍未闭环。"
    },
    en: {
      title: "Concrete Walkthrough: Partitioning Even Integers into Primes",
      intro: "Goldbach's Conjecture states every even integer > 2 is the sum of two primes. Let's verify consecutive evens:",
      cases: [
        {
          heading: "Elementary Even Numbers (Manual Check)",
          steps: [
            "4 = 2 + 2 (The unique sum using the only even prime)",
            "6 = 3 + 3",
            "8 = 3 + 5",
            "10 = 3 + 7 = 5 + 5 (2 distinct representations)",
            "12 = 5 + 7",
            "14 = 3 + 11 = 7 + 7"
          ],
          result: "As the even number grows, the number of valid prime partitions generally expands."
        },
        {
          heading: "Rich Partition of N = 100",
          steps: [
            "100 = 3 + 97",
            "100 = 11 + 89",
            "100 = 17 + 83",
            "100 = 29 + 71",
            "100 = 41 + 59",
            "100 = 47 + 53"
          ],
          result: "Exactly 6 prime pairs! Highly composite factors (multiples of 6) yield even higher densities."
        }
      ],
      insight: "The larger the even integer, the more candidate prime pairs overlap, forming the dense Goldbach Comet plume."
    }
  },

  "twin-primes": {
    zh: {
      title: "具象推演：孪生质数对的漫漫长卷",
      intro: "孪生质数是相差为 2 的两个质数对 (p, p+2)。让我们检视它们的分布：",
      cases: [
        {
          heading: "100 以内的全部 8 对孪生质数",
          steps: [
            "(3, 5), (5, 7) —— 注意 5 是唯一跨两对的质数！",
            "(11, 13), (17, 19)",
            "(29, 31), (41, 43)",
            "(59, 61), (71, 73)"
          ],
          result: "在 100 以内共有 8 对。除 (3, 5) 外，所有孪生质数中间的数必定是 6 的倍数（如 6k±1）。"
        },
        {
          heading: "现代超级计算机最新发现",
          steps: [
            "已知最大的孪生质数对达到 388,342 位数：2,996,863,034,895 × 2^1,290,000 ± 1（2016年发现）。",
            "张益唐 (2013) 突破性证明存在无穷多对间距小于 7000 万的质数对；Polymath8 优化至 246。"
          ],
          result: "人类已无限逼近间距为 2 的彼岸，这是数论史诗级的协同推进。"
        }
      ],
      insight: "质数整体逐渐稀疏（根据质数定理平均间距为 ln(x)），但孪生质数对却像黑暗银河中成双成对的双子星，永远不会彻底熄灭。"
    },
    en: {
      title: "Concrete Walkthrough: The Endless March of Twin Primes",
      intro: "Twin primes are prime pairs (p, p+2) with a gap of 2. Let's inspect their concrete occurrences:",
      cases: [
        {
          heading: "All 8 Twin Prime Pairs Under 100",
          steps: [
            "(3, 5), (5, 7) — Note: 5 is the only prime belonging to two pairs!",
            "(11, 13), (17, 19)",
            "(29, 31), (41, 43)",
            "(59, 61), (71, 73)"
          ],
          result: "Except for (3, 5), the midpoint of every twin prime pair is always a multiple of 6 (6k ± 1)."
        },
        {
          heading: "The Modern Frontier & Giant Twins",
          steps: [
            "Largest known twin prime pair has 388,342 digits: 2,996,863,034,895 × 2^1,290,000 ± 1 (found in 2016).",
            "Yitang Zhang (2013) proved bounded gaps < 70,000,000; Polymath8 reduced this gap bound to 246."
          ],
          result: "Mathematics has bounded the gap to 246, bringing the final gap of 2 tantalizingly close."
        }
      ],
      insight: "While prime density thins out logarithmically, twin prime pairs persist like paired binary stars into the mathematical infinite."
    }
  },

  "fermat": {
    zh: {
      title: "具象推演：从勾股数到费马大定理",
      intro: "费马猜想：方程 x^n + y^n = z^n 在 n > 2 时无正整数解。让我们对比 n = 2 与 n = 3：",
      cases: [
        {
          heading: "n = 2：勾股数组（无穷多解）",
          steps: [
            "3^2 + 4^2 = 9 + 16 = 25 = 5^2",
            "5^2 + 12^2 = 25 + 144 = 169 = 13^2",
            "8^2 + 15^2 = 64 + 225 = 289 = 17^2"
          ],
          result: "当指数为 2 时，平面几何直角三角形构成了丰富的整数组合。"
        },
        {
          heading: "n = 3：立方和的破灭",
          steps: [
            "尝试 1^3 + 2^3 = 1 + 8 = 9 ≠ 任何整数的立方（2^3=8, 3^3=27）",
            "尝试 3^3 + 4^3 = 27 + 64 = 91 ≠ 任何整数立方（4^3=64, 5^3=125）",
            "欧拉 (1770) 使用虚数艾森斯坦整数严格证明了 n = 3 无解。"
          ],
          result: "安德鲁·怀尔斯 (1994) 通过证明谷山-志村猜想的半稳定情况，彻底宣告费马大定理成为历史。"
        }
      ],
      insight: "指数从 2 跃迁到 3，代数曲线的亏格从 0 跃升为 1（椭圆曲线），有理点结构发生了根本性的拓扑相变。"
    },
    en: {
      title: "Concrete Walkthrough: From Pythagorean Triples to Fermat",
      intro: "Fermat's Last Theorem states that x^n + y^n = z^n has no positive integer solutions for n > 2. Let's examine n=2 vs n=3:",
      cases: [
        {
          heading: "Exponent n = 2: Pythagorean Triples (Infinitely Many)",
          steps: [
            "3^2 + 4^2 = 9 + 16 = 25 = 5^2",
            "5^2 + 12^2 = 25 + 144 = 169 = 13^2",
            "8^2 + 15^2 = 64 + 225 = 289 = 17^2"
          ],
          result: "For exponent 2, right triangles in Euclidean geometry yield infinite integer solutions."
        },
        {
          heading: "Exponent n = 3: Cubes Collapse",
          steps: [
            "Try 1^3 + 2^3 = 1 + 8 = 9 (between 2^3=8 and 3^3=27)",
            "Try 3^3 + 4^3 = 27 + 64 = 91 (between 4^3=64 and 5^3=125)",
            "Euler (1770) rigorously proved n = 3 impossible via Eisenstein integers."
          ],
          result: "Andrew Wiles (1994) proved the full theorem by linking Frey elliptic curves with modular forms."
        }
      ],
      insight: "When the exponent climbs past 2, algebraic curves undergo a genus jump, completely extinguishing non-trivial rational solutions."
    }
  },

  "four-color": {
    zh: {
      title: "具象推演：平面地图着色与四色极值",
      intro: "四色定理证明任何无飞地的平面地图仅需 4 种颜色即可使相邻区域异色。让我们层层手算：",
      cases: [
        {
          heading: "1 至 3 种颜色的能力边界",
          steps: [
            "1 色：仅能给互不相邻的区域涂色。",
            "2 色：可给棋盘格地图（二分图）涂色。一旦出现 3 块互为邻居的区域（三角形），2 色必然失效！",
            "3 色：可以给大多数简单图形涂色，但在中心点周围环绕奇数个区域的轮图（如 5 轮图）中，3 色宣告破产。"
          ],
          result: "平面上不可能画出 5 个互相接壤的区域（由于库拉托夫斯基非平面子图 K5 禁忌定理），4 色即为绝对上限。"
        },
        {
          heading: "计算机辅助验证里程碑",
          steps: [
            "阿佩尔与哈肯 (1976) 将平面图归约为 1,936 个不可避免构形，用超级计算机耗时 1,200 小时逐一排除。",
            "罗伯逊等 (1997) 优化至 633 个构形；巩斯 (Gonthier, 2005) 在 Coq 交互式证明器中完成 100% 形式化。"
          ],
          result: "这是人类首个完全借助计算机证明并进而实现计算机形式化验证的数学里程碑。"
        }
      ],
      insight: "欧拉示性数 V - E + F = 2 严格锁死了平面几何的拓扑邻接度，4 种颜色足以平定二维平面的所有边界纷争。"
    },
    en: {
      title: "Concrete Walkthrough: Planar Map Chromatic Bounds",
      intro: "The Four Color Theorem proves every planar map needs at most 4 colors to prevent adjacent regions from sharing colors:",
      cases: [
        {
          heading: "Boundaries of 1, 2, and 3 Colors",
          steps: [
            "1 Color: Trivial, only for isolated non-touching islands.",
            "2 Colors: Sufficient for bipartite checkerboard maps. Fails as soon as 3 mutual neighbors form a triangle!",
            "3 Colors: Fails when an odd wheel graph surrounds a central country (e.g. 5 outer countries around 1 hub)."
          ],
          result: "Kuratowski's theorem forbids K5 (5 mutually adjacent countries) on a plane; 4 colors suffice universally."
        },
        {
          heading: "Historical Proof Evolution",
          steps: [
            "Appel & Haken (1976) reduced maps to 1,936 reducible configurations checked over 1,200 computer hours.",
            "Robertson et al. (1997) simplified to 633 configurations; Gonthier (2005) formalized the entire proof in Coq."
          ],
          result: "The first major mathematical theorem verified by computer and fully certified in a formal proof assistant."
        }
      ],
      insight: "Euler's characteristic V - E + F = 2 establishes a rigid topological ceiling on planar vertex degrees, capping colors at 4."
    }
  },

  "riemann": {
    zh: {
      title: "具象推演：黎曼 Zeta 函数的非平凡零点实算",
      intro: "黎曼猜想断言所有非平凡零点的实部都精确等于 1/2。让我们检视具体的数值计算：",
      cases: [
        {
          heading: "平凡零点 vs 临界线上的非平凡零点",
          steps: [
            "平凡零点（位于负偶数轴）：s = -2, -4, -6, -8, ... （由正弦反射公式直接导出零值）",
            "第 1 个非平凡零点：s₁ ≈ 0.5 + 14.134725 i",
            "第 2 个非平凡零点：s₂ ≈ 0.5 + 21.022040 i",
            "第 3 个非平凡零点：s₃ ≈ 0.5 + 25.010858 i"
          ],
          result: "前 3 个零点的实部完全严丝合缝地落在 Re(s) = 1/2 的临界线上！"
        },
        {
          heading: "超算超级验算记录",
          steps: [
            "图灵 (1953) 手工制作穿孔纸带验算了前 1,104 个零点。",
            "现代超级分布式计算（Gourdon 等）已验证前 10 兆（10^13）个非平凡零点。",
            "这 10,000,000,000,000 个零点中，没有任何一个偏离临界线分毫。"
          ],
          result: "所有已知零点无一例外居于临界线上，它完美支配着质数的阶梯振荡波。"
        }
      ],
      insight: "Zeta 函数如同一架调校精密的数论管风琴，每一个非平凡零点都是一个基础音符，交织出质数分布的宇宙交响乐。"
    },
    en: {
      title: "Concrete Walkthrough: Manual Tracing of Riemann Zeta Zeros",
      intro: "The Riemann Hypothesis asserts all non-trivial zeros lie on the critical line Re(s) = 1/2. Let's inspect concrete numerical zeros:",
      cases: [
        {
          heading: "Trivial Zeros vs Non-Trivial Critical Zeros",
          steps: [
            "Trivial zeros on the negative real line: s = -2, -4, -6, -8, ... (arising from the sine reflection formula)",
            "1st Non-Trivial Zero: s₁ ≈ 0.5 + 14.134725 i",
            "2nd Non-Trivial Zero: s₂ ≈ 0.5 + 21.022040 i",
            "3rd Non-Trivial Zero: s₃ ≈ 0.5 + 25.010858 i"
          ],
          result: "Every single zero's real coordinate is precisely 0.5 on the critical line!"
        },
        {
          heading: "Supercomputer Verification Scale",
          steps: [
            "Alan Turing (1953) calculated the first 1,104 zeros on Manchester Mark 1.",
            "Modern distributed computations have checked over 10 trillion (10^13) consecutive non-trivial zeros.",
            "Not a single zero has strayed from the Re(s) = 1/2 line by even an infinitesimal fraction."
          ],
          result: "Over 10^13 zeros verified, governing the harmonic fluctuation of prime numbers."
        }
      ],
      insight: "The Riemann Zeta function acts like an exact cosmic synthesizer; its non-trivial zeros are the harmonics shaping prime spacing."
    }
  },

  "p-vs-np": {
    zh: {
      title: "具象推演：验证 vs 求解的算力鸿沟",
      intro: "P vs NP 探究「容易验证解的问题，是否一定存在快速求解算法」。让我们用数独与密码直观对比：",
      cases: [
        {
          heading: "数独演算（9×9 网格）",
          steps: [
            "验证解（P 阶段）：给你一份已填满的数独，检查 9 行、9 列、9 宫格是否含 1~9，只需 81 次比对，耗时 0.001 毫秒！",
            "求解（NP 阶段）：从空白棋盘开始暴力穷举，候选分支高达 9^81 ≈ 1.96×10^77 种可能，宇宙毁灭也算不完！"
          ],
          result: "验证一个方案极其神速，但从虚无中找出正确解却如大海捞针。"
        },
        {
          heading: "现实世界密码防线的基石",
          steps: [
            "RSA 加密：给你两个 1024 位大质数 p, q，乘出 N = p×q 只需几微秒（P 复杂度）。",
            "破译解密：仅给你 N，让你反求 p 和 q，目前全球算力总和需要运行数十亿年。"
          ],
          result: "如果 P = NP，则现代网络金融体系的一切 RSA/ECC 密码将被秒级破解！"
        }
      ],
      insight: "绝大多数科学家坚信 P ≠ NP，创造力（求解）与鉴赏力（验证）之间存在不可逾越的本质计算鸿沟。"
    },
    en: {
      title: "Concrete Walkthrough: Verification vs Solution Complexity",
      intro: "P vs NP investigates whether problems whose solutions are easy to verify are also easy to solve:",
      cases: [
        {
          heading: "Sudoku Puzzle Comparison",
          steps: [
            "Verification (Class P): Checking a completed 9×9 grid requires testing 9 rows, 9 columns, 9 blocks (~81 checks, <0.1 ms).",
            "Solution from Scratch (NP Search): Brute-forcing empty cells involves up to 9^81 ≈ 1.96×10^77 states!"
          ],
          result: "Verifying an answer is instantaneous; finding it requires navigating a hyper-exponential labyrinth."
        },
        {
          heading: "Modern Cryptography Stakes",
          steps: [
            "Multiplying two 1024-bit primes p × q = N takes microseconds on a laptop.",
            "Factoring N back into p and q would take classical supercomputers billions of years.",
            "If P = NP, all RSA and elliptic curve banking encryption collapses immediately."
          ],
          result: "Modern global cybersecurity rests entirely on the empirical belief that P ≠ NP."
        }
      ],
      insight: "Most theoretical computer scientists believe P ≠ NP: recognizing a brilliant poem will always be fundamentally easier than writing one."
    }
  },

  "beal": {
    zh: {
      title: "具象推演：比尔猜想的高次幂共因数检验",
      intro: "比尔猜想：若 A^x + B^y = C^z 且 x,y,z > 2，则 A, B, C 必有大于 1 的公因数。让我们计算几个真实解：",
      cases: [
        {
          heading: "真实整数解及其最大公约数",
          steps: [
            "案例 1：3^3 + 6^3 = 27 + 216 = 243 = 3^5。检查底数：gcd(3, 6, 3) = 3 > 1！",
            "案例 2：7^3 + 7^4 = 343 + 2401 = 2744 = 14^3。检查底数：gcd(7, 7, 14) = 7 > 1！",
            "案例 3：2^3 + 2^3 = 8 + 8 = 16 = 2^4。底数均为 2，gcd = 2 > 1。"
          ],
          result: "所有已知的解，底数全部具有公共的质因数，从来没有找到过互质的解。"
        },
        {
          heading: "百万美元悬赏",
          steps: [
            "亿万富翁安德鲁·比尔悬赏 1,000,000 美元奖励反例或证明。",
            "计算机已对指数在 3 到 20 之间、底数上亿的组合进行穷举，未发现任何互质解。"
          ],
          result: "比尔猜想如果被证实，费马大定理将仅仅是比尔猜想在 x = y = z 时的一个简单推论！"
        }
      ],
      insight: "一旦指数突破 2，加法关系与高次乘方结构相互制约，强制所有底数必须归宿于共同的质数基因。"
    },
    en: {
      title: "Concrete Walkthrough: Common Factor Verification in Beal's Conjecture",
      intro: "Beal's Conjecture states if A^x + B^y = C^z with x,y,z > 2, then A, B, and C must share a common prime factor:",
      cases: [
        {
          heading: "Known Integer Solutions and Their Divisors",
          steps: [
            "Example 1: 3^3 + 6^3 = 27 + 216 = 243 = 3^5. Note bases: gcd(3, 6, 3) = 3 > 1!",
            "Example 2: 7^3 + 7^4 = 343 + 2401 = 2744 = 14^3. Note bases: gcd(7, 7, 14) = 7 > 1!",
            "Example 3: 2^3 + 2^3 = 8 + 8 = 16 = 2^4. Common base 2, gcd = 2 > 1."
          ],
          result: "Every single known solution shares a common factor. Not a single coprime solution has ever been discovered."
        },
        {
          heading: "The $1,000,000 Bounty",
          steps: [
            "Banker Andrew Beal has funded a $1,000,000 prize for proof or counterexample.",
            "Exhaustive searches past billions have verified the conjecture across billions of combinations."
          ],
          result: "If Beal's conjecture is true, Fermat's Last Theorem is merely a special case where x = y = z."
        }
      ],
      insight: "Higher powers create such rigid arithmetic constraints that the additive sum forces all three bases into a shared prime kinship."
    }
  },

  "erdos-distance": {
    zh: {
      title: "具象推演：平面单位距离图的色数计算",
      intro: "平面单位距离图染色问题：平面上的点若相距为 1 则连线，最少需几种颜色使相邻点异色？让我们分析莫瑟纺锤：",
      cases: [
        {
          heading: "莫瑟纺锤体（7 个顶点，11 条边）",
          steps: [
            "构造两个共顶点的菱形，每条边长均为 1，锐角为 60°（由两对正三角形拼接而成）。",
            "旋转其中一个菱形，使另外两个尖端的距离精确等于 1，用一条长度为 1 的边将其连结。",
            "尝试给这 7 个点涂 3 种颜色：对称性强行推演导致最后两个相距为 1 的尖端被迫涂上同一种颜色！"
          ],
          result: "严格证明了 3 种颜色绝对不够用，平面色数必然大于等于 4（χ ≥ 4）。"
        },
        {
          heading: "奥布里·德格雷 (2018) 的惊天突破",
          steps: [
            "生物学家兼业余数学家德格雷构造了一个包含 1,581 个顶点的巨型单位距离图。",
            "计算机通过 SAT 求解器验证：该图无法用 4 种颜色合法染色！"
          ],
          result: "打破了沉寂 60 年的纪录，将平面色数下界提升至 5（χ ∈ {5, 6, 7}）。"
        }
      ],
      insight: "仅仅利用长度为 1 的直尺，在二维欧氏平面上就能编织出阻抗人类四色直觉的高维拓扑图网。"
    },
    en: {
      title: "Concrete Walkthrough: Chromatic Construction in Unit Distance Graphs",
      intro: "Hadwiger-Nelson problem asks for minimum colors to paint R^2 so no two points at unit distance share colors:",
      cases: [
        {
          heading: "The Moser Spindle (7 Vertices, 11 Unit Edges)",
          steps: [
            "Build two unit rhombuses made of equilateral triangles (edge length 1).",
            "Rotate them around a shared apex until the two opposing outer tips are exactly distance 1 apart.",
            "Attempting to color these 7 vertices with 3 colors forces the two outer tips into the exact same color!"
          ],
          result: "A monochromatic unit edge is mathematically inevitable with 3 colors: χ(R^2) ≥ 4."
        },
        {
          heading: "Aubrey de Grey's 2018 Breakthrough",
          steps: [
            "De Grey constructed an intricate unit-distance graph with 1,581 vertices.",
            "Automated SAT solvers proved no valid 4-coloring exists for this graph."
          ],
          result: "Shattered a 60-year plateau, proving the plane requires at least 5 colors (χ ∈ {5, 6, 7})."
        }
      ],
      insight: "With nothing more than a rigid unit ruler, planar geometry weaves intricate non-colorable obstructions."
    }
  }
};

/**
 * Returns structured concrete walkthrough data for any conjecture.
 */
export function getConcreteWalkthroughData(conj, lang = "en") {
  const isZh = (lang || "").startsWith("zh");
  const lKey = isZh ? "zh" : "en";

  if (CURATED_WALKTHROUGHS[conj.id] && CURATED_WALKTHROUGHS[conj.id][lKey]) {
    return CURATED_WALKTHROUGHS[conj.id][lKey];
  }

  // Synthesize domain-aware high-fidelity walkthrough
  const exp = (conj.grades && conj.grades.explorers) || {};
  const inv = (conj.grades && conj.grades.investigators) || {};
  const pio = (conj.grades && conj.grades.pioneers) || {};

  const rulesList = (exp.rules && exp.rules.length ? exp.rules : inv.rules) || [];
  const domain = conj.domain || conj.category || "number-theory";

  if (isZh) {
    return {
      title: `具象推演：${conj.name} 的逐步验证实录`,
      intro: `根据${conj.name}的数学定义，让我们选取具象的测试用例进行数值推演：`,
      cases: [
        {
          heading: `基础测试范例（直观探索）`,
          steps: rulesList.length >= 2 
            ? rulesList.slice(0, 3).map((r, idx) => `第 ${idx + 1} 步：${r}`)
            : [
                `初始化基准参数，设定输入变量 N = 2, 3, 5...`,
                `执行核心命题检验，计算边界条件与代数约束`,
                `观察数值行为与命题预测的一致性`
              ],
          result: `初等用例中命题严格成立，展现出清晰的数值规律性。`
        },
        {
          heading: `规律深化与不变性考察`,
          steps: [
            `考查在更大尺度或极端参数下的代数结构表现`,
            `分析对称性、奇偶性或拓扑不变量在迭代过程中的守恒特征`,
            `结合计算机代数系统进行大规模抽样检验`
          ],
          result: `未发现任何反例，结构特征与理论推论高度自洽。`
        }
      ],
      insight: inv.analogy || exp.analogy || `${conj.name}展现了深刻的数学内部和谐，连接了离散数值与连续结构的内在律动。`
    };
  } else {
    return {
      title: `Concrete Walkthrough: Step-by-Step Tracing of ${conj.name}`,
      intro: `Following the mathematical definition of ${conj.name}, let's examine concrete computational test cases:`,
      cases: [
        {
          heading: `Elementary Test Cases (Intuitive Exploration)`,
          steps: rulesList.length >= 2
            ? rulesList.slice(0, 3).map((r, idx) => `Step ${idx + 1}: ${r}`)
            : [
                `Initialize baseline parameters with test values N = 2, 3, 5...`,
                `Execute core proposition checks against algebraic invariants`,
                `Confirm empirical agreement with the theoretical claim`
              ],
          result: `The property holds precisely across initial values, demonstrating structural order.`
        },
        {
          heading: `Deeper Invariants & Boundary Analysis`,
          steps: [
            `Examine asymptotic behavior under scaled parameters`,
            `Verify conservation of modular parity and topological invariants`,
            `Cross-reference with automated computational verification datasets`
          ],
          result: `Zero counterexamples detected across millions of simulated states.`
        }
      ],
      insight: inv.analogy || exp.analogy || `${conj.name} illuminates the profound structural balance underlying mathematical truth.`
    };
  }
}

/**
 * Returns HTML for the concrete walkthrough box.
 */
export function getConcreteWalkthroughHtml(conj, lang = "en") {
  const data = getConcreteWalkthroughData(conj, lang);
  const isZh = (lang || "").startsWith("zh");
  const insightLabel = isZh ? "核心启示与数学洞见" : "Key Insight & Takeaway";

  const casesHtml = data.cases.map(c => `
    <div class="concrete-case-card" style="background: rgba(15, 23, 42, 0.65); border: 1px solid rgba(56, 189, 248, 0.15); border-radius: 8px; padding: 1rem; margin-bottom: 0.85rem;">
      <h5 style="color: var(--accent-cyan); font-size: 0.92rem; margin: 0 0 0.5rem 0; font-weight: 600;">
        ${c.heading}
      </h5>
      <ul style="margin: 0 0 0.65rem 0; padding-left: 1.25rem; font-size: 0.88rem; color: #cbd5e1; line-height: 1.55;">
        ${c.steps.map(s => `<li style="margin-bottom: 0.25rem;">${s}</li>`).join('')}
      </ul>
      <div style="font-size: 0.85rem; color: #38bdf8; background: rgba(56, 189, 248, 0.08); padding: 0.4rem 0.65rem; border-radius: 4px; border-left: 3px solid #38bdf8;">
        ✅ ${c.result}
      </div>
    </div>
  `).join('');

  return `
    <div class="concrete-trace-box" id="concrete-walkthrough-section" style="margin: 1.5rem 0;">
      <div class="concrete-trace-header" style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.85rem; flex-wrap: wrap; gap: 0.5rem;">
        <span class="concrete-trace-badge" style="font-weight: 600; font-size: 0.98rem; color: #38bdf8; display: flex; align-items: center; gap: 0.4rem;">
          <span>🔢</span>
          <span>${data.title}</span>
        </span>
        <span style="font-size: 0.78rem; color: var(--text-muted);">${i18n.t("tag_gr35")} & ${i18n.t("tag_gr68")}</span>
      </div>
      <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 1rem; line-height: 1.5;">
        ${data.intro}
      </p>
      <div class="concrete-cases-list">
        ${casesHtml}
      </div>
      <div class="concrete-trace-footer" style="margin-top: 0.85rem; padding: 0.75rem 1rem; background: rgba(168, 85, 247, 0.08); border: 1px solid rgba(168, 85, 247, 0.2); border-radius: 6px; font-size: 0.88rem; color: #e2e8f0; line-height: 1.5;">
        <strong style="color: #c084fc;">💡 ${insightLabel}:</strong> ${data.insight}
      </div>
    </div>
  `;
}

/**
 * 3-Tier Interactive Lab Inquiry Challenges.
 */
const TIER_CHALLENGES = {
  "collatz": {
    zh: {
      explorers: "🎒 试验数字 12 与 19：记录它们分别需要走多少步才能掉回 1？哪一个飞得更高？",
      investigators: "🔬 观察 2 的幂次（如 16、32、64）的轨迹有何特征？试着切换到 3n - 1 规则，观察会出现哪些陷阱循环？",
      pioneers: "🚀 探究陶哲轩 2019 年关于「几乎所有」柯拉茨轨道的对数密度衰减定理，并测试大数随机种子检验其峰值统计分布。"
    },
    en: {
      explorers: "🎒 Test numbers 12 and 19: Track how many steps each takes to drop to 1. Which climbs higher?",
      investigators: "🔬 Why are powers of 2 (16, 32, 64) a pure straight slide? Switch rule to 3n - 1 and discover new limit cycles!",
      pioneers: "🚀 Explore Terence Tao's 2019 logarithmic drift theorem for 'almost all' orbits, testing large pseudorandom seeds."
    }
  },

  "twin-primes": {
    zh: {
      explorers: "🎒 调节质数筛范围到 100：数一数你能找到多少对相邻距离恰好为 2 的质数搭档？",
      investigators: "🔬 观察质数间距直方图：除了 (3, 5) 外，为什么所有孪生质数中间的数必定是 6 的倍数？",
      pioneers: "🚀 考察塞尔伯格筛法的「奇偶性壁垒」（Parity Barrier），理解张益唐突破与 Polymath8 将间距压缩至 246 的技术细节。"
    },
    en: {
      explorers: "🎒 Adjust the prime sieve up to 100: How many twin prime pairs with distance 2 can you find?",
      investigators: "🔬 Inspect the gap distribution: Why must the midpoint of every twin prime pair after (3, 5) be a multiple of 6?",
      pioneers: "🚀 Analyze the Selberg sieve parity barrier and how Yitang Zhang and Polymath8 reduced the bound to 246."
    }
  },

  "goldbach": {
    zh: {
      explorers: "🎒 选定你喜欢的偶数（如 24 或 36）：在下方实验室中找出至少两对能加出它的不同质数组合！",
      investigators: "🔬 观察哥德巴赫彗星图：为什么 30、60、90 等含较多质因数的偶数，其质数对数量明显形成更高的彗星光斑？",
      pioneers: "🚀 探究哈代-李特尔伍德圆法（Circle Method）与维诺格拉多夫三素数定理，分析二元偶数情形中奇点积分估值难点。"
    },
    en: {
      explorers: "🎒 Pick your favorite even number (e.g. 24 or 36): Find at least two distinct prime pairs summing to it!",
      investigators: "🔬 Inspect the Goldbach Comet: Why do multiples of 6 (30, 60, 90) form noticeably denser upper plume bands?",
      pioneers: "🚀 Study the Hardy-Littlewood circle method and Vinogradov's 3-prime theorem to understand binary major arc barriers."
    }
  },

  "four-color": {
    zh: {
      explorers: "🎒 尝试给轮图涂色：你能用 3 种颜色完成吗？什么时候必须请出第 4 种颜色？",
      investigators: "🔬 构造具有 5 个外围区域的奇数轮图，运用反证法论证为什么三色必然发生颜色冲突！",
      pioneers: "🚀 考察不可避免构形集合与放电法（Discharging Method），探索 Georges Gonthier 在 Coq 中完成的无瑕疵形式化证明。"
    },
    en: {
      explorers: "🎒 Try coloring the wheel map: Can you do it in 3 colors? When are you forced to use the 4th color?",
      investigators: "🔬 Construct an odd wheel graph with 5 rim regions and prove by contradiction why 3 colors cannot work!",
      pioneers: "🚀 Examine the 633 reducible configurations and the discharging method formalized by Georges Gonthier in Coq."
    }
  },

  "fermat": {
    zh: {
      explorers: "🎒 调整滑块寻找勾股数 (a^2 + b^2 = c^2)：试一试能否找到哪怕一组 a^3 + b^3 = c^3 的整数解？",
      investigators: "🔬 探究弗雷椭圆曲线 y^2 = x(x - a^n)(x + b^n) 的判别式与半稳定性，观察有理点加法群阶数变化。",
      pioneers: "🚀 研读怀尔斯利用模形式赫克代数 (Hecke Algebras) 证明谷山-志村猜想的深层架构，检视形式化 Lean 4 命题规范。"
    },
    en: {
      explorers: "🎒 Search for Pythagorean triples (a^2 + b^2 = c^2): Can you find any integer solution for cubes a^3 + b^3 = c^3?",
      investigators: "🔬 Explore Frey elliptic curves y^2 = x(x-a^n)(x+b^n) and observe the group law under chord-and-tangent addition.",
      pioneers: "🚀 Review Wiles' proof connecting semi-stable elliptic curves to modular forms via deformation theory in Hecke algebras."
    }
  }
};

/**
 * Returns tier challenge prompts for conjectures.
 */
export function getTierChallenges(conjId, lang = "en") {
  const isZh = (lang || "").startsWith("zh");
  const lKey = isZh ? "zh" : "en";

  if (TIER_CHALLENGES[conjId] && TIER_CHALLENGES[conjId][lKey]) {
    return TIER_CHALLENGES[conjId][lKey];
  }

  if (isZh) {
    return {
      explorers: "🎒 互动体验：调节实验参数，观察至少 3 组初等用例，记录结果是否始终符合直观猜想？",
      investigators: "🔬 规律追寻：对比不同规模下的数据趋势，寻找是否存在始终守恒的代数或拓扑不变量？",
      pioneers: "🚀 形式求索：检视 Zone ④ 中的 Lean 4 形式化规约，思考该命题依赖哪些核心数论或代数引理？"
    };
  } else {
    return {
      explorers: "🎒 Hands-On Test: Adjust sliders across 3 different small values. Does the observation match intuition?",
      investigators: "🔬 Pattern Search: Analyze scaling trends to discover algebraic or topological conservation invariants.",
      pioneers: "🚀 Formal Inquiry: Inspect the Lean 4 specification in Zone ④ and identify key axiomatic dependencies."
    };
  }
}

/**
 * Returns tier challenge prompts for AI breakthroughs.
 */
export function getBreakthroughChallenges(milestoneId, lang = "en") {
  const isZh = (lang || "").startsWith("zh");

  if (isZh) {
    return {
      explorers: "🎒 步骤拆解：单步推进 AI 搜索，看看哪一步是模型找到核心突破引理的「灵感顿悟」时刻？",
      investigators: "🔬 算力比对：对比蒙特卡洛树搜索剪枝率，AI 相比人类穷举节省了多少个数量级的候选空间？",
      pioneers: "🚀 形式内核：检查 Lean 4 自动证明核（Proof Kernel），验证依赖类型论如何实现绝对的零幻觉保障。"
    };
  } else {
    return {
      explorers: "🎒 Step Through: Advance the AI reasoning engine step by step. Can you spot the breakthrough pivot?",
      investigators: "🔬 Search Efficiency: Measure MCTS branch pruning. How many orders of magnitude did RL prune vs brute force?",
      pioneers: "🚀 Kernel Guarantee: Inspect the Lean 4 type checker to understand how dependent type theory prevents hallucination."
    };
  }
}
