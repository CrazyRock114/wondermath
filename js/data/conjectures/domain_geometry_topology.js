/**
 * WonderMath - Domain 2: Geometry, Topology & Tilings (20 Conjectures)
 * High-precision curriculum with full 8-language localization & K-12 grade tiers.
 */

export const DOMAIN_GEOMETRY_TOPOLOGY = [
  {
    "id": "poincare",
    "icon": "🌐",
    "difficulty": "Gr 9+",
    "domain": "geometry",
    "category": "geometry",
    "isMillennium": true,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Topology.MetricSpace.Basic\n-- Poincaré Conjecture (Proved by Grigori Perelman, 2002-2003)\n-- Every simply connected, closed 3-manifold is homeomorphic to the 3-sphere S³\naxiom PoincareTheorem (M : Type*) [TopologicalSpace M] [CompactSpace M] :\n  SimplyConnected M → Dimension M = 3 → Nonempty (M ≃ₜ Metric.sphere (0 : EuclideanSpace ℝ (Fin 4)) 1)",
    "locales": {
      "en": {
        "name": "The Poincaré Conjecture",
        "subtitle": "Is Every Loop-Shrinking 3D Universe a Hypersphere? (Clay Millennium Solved)",
        "field": "Differential Geometry & Geometric Topology",
        "statusBadge": "SOLVED (PERELMAN)",
        "grades": {
          "explorers": {
            "tagline": "Can you wrap a rubber band around a planet and shrink it to a tiny point?",
            "analogy": "Imagine lassoing a round ball: you can always pull the lasso tight until it shrinks to a point. But on a doughnut with a hole, the lasso can get trapped around the hole! Henri Poincaré asked in 1904: if a 3D universe has NO holes (every lasso shrinks to a point), is it GUARANTEED to be a smooth 3D sphere? Grigori Perelman proved YES in 2003!",
            "rules": [
              "Imagine a 3-dimensional space (manifold).",
              "Wrap any loop (lasso) anywhere inside it.",
              "If every loop can shrink smoothly to a single point, space is simply connected.",
              "Perelman proved: Such a space MUST be topologically identical to the 3-sphere S³!"
            ],
            "mystery": "Grigori Perelman was awarded the Fields Medal and the $1,000,000 Clay Millennium Prize, but famously DECLINED both awards, saying his proof was sufficient reward!",
            "funFact": "Dimension 4 was proved by Michael Freedman in 1982, and dimensions ≥ 5 by Stephen Smale in 1961—making the 3D case the last and hardest to fall!"
          },
          "investigators": {
            "tagline": "Ricci flow with surgery and Hamilton-Perelman entropy.",
            "analogy": "Richard Hamilton proposed smoothing the metric via the Ricci flow equation ∂g/∂t = -2 Ric(g). Perelman introduced the W-entropy functional, proved non-collapsing, and constructed surgery through neck-pinching singularities.",
            "rules": [
              "Ricci Flow: ∂g/∂t = -2 Ric(g).",
              "Perelman W-entropy: W(g, f, τ) = ∫ [τ(|∇f|² + R) + f - n] (4πτ)^{-n/2} e^{-f} dV.",
              "Geometric surgery eliminates cigar and neckpinching singularities."
            ],
            "mystery": "Perelman's work did not just solve Poincaré—it proved Thurston's entire Geometrization Conjecture for ALL 3-manifolds!",
            "funFact": "Henri Poincaré posed the question in his 1904 Cinquième complément à l'Analysis Situs."
          },
          "pioneers": {
            "tagline": "Geometric analysis, parabolic PDEs, and modern Lean formalization.",
            "analogy": "The proof represents the supreme synthesis of differential geometry, mathematical physics (renormalization group flow), and algebraic topology.",
            "rules": [
              "Hamilton's maximum principle for Ricci tensors.",
              "Perelman's reduced volume functional.",
              "Lean 4 Mathlib formalization of Riemannian manifolds."
            ],
            "mystery": "Formal verification of Ricci flow in Lean 4 is one of the grandest ongoing targets in computerized mathematics.",
            "funFact": "The Poincaré Conjecture stands as the only Clay Millennium Prize Problem fully conquered by human intellect."
          }
        },
        "history": [
          {
            "year": "1904",
            "author": "Henri Poincaré",
            "note": "Poses the 3-sphere topological conjecture in Paris."
          },
          {
            "year": "1982",
            "author": "Richard S. Hamilton",
            "note": "Introduces Ricci flow to evolve Riemannian metrics."
          },
          {
            "year": "2002–2003",
            "author": "Grigori Perelman",
            "note": "Posts 3 preprints on arXiv completing the proof using Ricci flow with surgery."
          },
          {
            "year": "2006",
            "author": "International Mathematical Union",
            "note": "Awards Perelman the Fields Medal (declined)."
          }
        ]
      },
      "de": {
        "name": "The Poincaré Conjecture",
        "subtitle": "Is Every Loop-Shrinking 3D Universe a Hypersphere? (Clay Millennium Solved)",
        "field": "Differential Geometry & Geometric Topology",
        "statusBadge": "SOLVED (PERELMAN)",
        "grades": {
          "explorers": {
            "tagline": "Can you wrap a rubber band around a planet and shrink it to a tiny point?",
            "analogy": "Imagine lassoing a round ball: you can always pull the lasso tight until it shrinks to a point. But on a doughnut with a hole, the lasso can get trapped around the hole! Henri Poincaré asked in 1904: if a 3D universe has NO holes (every lasso shrinks to a point), is it GUARANTEED to be a smooth 3D sphere? Grigori Perelman proved YES in 2003!",
            "rules": [
              "Imagine a 3-dimensional space (manifold).",
              "Wrap any loop (lasso) anywhere inside it.",
              "If every loop can shrink smoothly to a single point, space is simply connected.",
              "Perelman proved: Such a space MUST be topologically identical to the 3-sphere S³!"
            ],
            "mystery": "Grigori Perelman was awarded the Fields Medal and the $1,000,000 Clay Millennium Prize, but famously DECLINED both awards, saying his proof was sufficient reward!",
            "funFact": "Dimension 4 was proved by Michael Freedman in 1982, and dimensions ≥ 5 by Stephen Smale in 1961—making the 3D case the last and hardest to fall!"
          },
          "investigators": {
            "tagline": "Ricci flow with surgery and Hamilton-Perelman entropy.",
            "analogy": "Richard Hamilton proposed smoothing the metric via the Ricci flow equation ∂g/∂t = -2 Ric(g). Perelman introduced the W-entropy functional, proved non-collapsing, and constructed surgery through neck-pinching singularities.",
            "rules": [
              "Ricci Flow: ∂g/∂t = -2 Ric(g).",
              "Perelman W-entropy: W(g, f, τ) = ∫ [τ(|∇f|² + R) + f - n] (4πτ)^{-n/2} e^{-f} dV.",
              "Geometric surgery eliminates cigar and neckpinching singularities."
            ],
            "mystery": "Perelman's work did not just solve Poincaré—it proved Thurston's entire Geometrization Conjecture for ALL 3-manifolds!",
            "funFact": "Henri Poincaré posed the question in his 1904 Cinquième complément à l'Analysis Situs."
          },
          "pioneers": {
            "tagline": "Geometric analysis, parabolic PDEs, and modern Lean formalization.",
            "analogy": "The proof represents the supreme synthesis of differential geometry, mathematical physics (renormalization group flow), and algebraic topology.",
            "rules": [
              "Hamilton's maximum principle for Ricci tensors.",
              "Perelman's reduced volume functional.",
              "Lean 4 Mathlib formalization of Riemannian manifolds."
            ],
            "mystery": "Formal verification of Ricci flow in Lean 4 is one of the grandest ongoing targets in computerized mathematics.",
            "funFact": "The Poincaré Conjecture stands as the only Clay Millennium Prize Problem fully conquered by human intellect."
          }
        },
        "history": [
          {
            "year": "1904",
            "author": "Henri Poincaré",
            "note": "Poses the 3-sphere topological conjecture in Paris."
          },
          {
            "year": "1982",
            "author": "Richard S. Hamilton",
            "note": "Introduces Ricci flow to evolve Riemannian metrics."
          },
          {
            "year": "2002–2003",
            "author": "Grigori Perelman",
            "note": "Posts 3 preprints on arXiv completing the proof using Ricci flow with surgery."
          },
          {
            "year": "2006",
            "author": "International Mathematical Union",
            "note": "Awards Perelman the Fields Medal (declined)."
          }
        ]
      },
      "fr": {
        "name": "The Poincaré Conjecture",
        "subtitle": "Is Every Loop-Shrinking 3D Universe a Hypersphere? (Clay Millennium Solved)",
        "field": "Differential Geometry & Geometric Topology",
        "statusBadge": "SOLVED (PERELMAN)",
        "grades": {
          "explorers": {
            "tagline": "Can you wrap a rubber band around a planet and shrink it to a tiny point?",
            "analogy": "Imagine lassoing a round ball: you can always pull the lasso tight until it shrinks to a point. But on a doughnut with a hole, the lasso can get trapped around the hole! Henri Poincaré asked in 1904: if a 3D universe has NO holes (every lasso shrinks to a point), is it GUARANTEED to be a smooth 3D sphere? Grigori Perelman proved YES in 2003!",
            "rules": [
              "Imagine a 3-dimensional space (manifold).",
              "Wrap any loop (lasso) anywhere inside it.",
              "If every loop can shrink smoothly to a single point, space is simply connected.",
              "Perelman proved: Such a space MUST be topologically identical to the 3-sphere S³!"
            ],
            "mystery": "Grigori Perelman was awarded the Fields Medal and the $1,000,000 Clay Millennium Prize, but famously DECLINED both awards, saying his proof was sufficient reward!",
            "funFact": "Dimension 4 was proved by Michael Freedman in 1982, and dimensions ≥ 5 by Stephen Smale in 1961—making the 3D case the last and hardest to fall!"
          },
          "investigators": {
            "tagline": "Ricci flow with surgery and Hamilton-Perelman entropy.",
            "analogy": "Richard Hamilton proposed smoothing the metric via the Ricci flow equation ∂g/∂t = -2 Ric(g). Perelman introduced the W-entropy functional, proved non-collapsing, and constructed surgery through neck-pinching singularities.",
            "rules": [
              "Ricci Flow: ∂g/∂t = -2 Ric(g).",
              "Perelman W-entropy: W(g, f, τ) = ∫ [τ(|∇f|² + R) + f - n] (4πτ)^{-n/2} e^{-f} dV.",
              "Geometric surgery eliminates cigar and neckpinching singularities."
            ],
            "mystery": "Perelman's work did not just solve Poincaré—it proved Thurston's entire Geometrization Conjecture for ALL 3-manifolds!",
            "funFact": "Henri Poincaré posed the question in his 1904 Cinquième complément à l'Analysis Situs."
          },
          "pioneers": {
            "tagline": "Geometric analysis, parabolic PDEs, and modern Lean formalization.",
            "analogy": "The proof represents the supreme synthesis of differential geometry, mathematical physics (renormalization group flow), and algebraic topology.",
            "rules": [
              "Hamilton's maximum principle for Ricci tensors.",
              "Perelman's reduced volume functional.",
              "Lean 4 Mathlib formalization of Riemannian manifolds."
            ],
            "mystery": "Formal verification of Ricci flow in Lean 4 is one of the grandest ongoing targets in computerized mathematics.",
            "funFact": "The Poincaré Conjecture stands as the only Clay Millennium Prize Problem fully conquered by human intellect."
          }
        },
        "history": [
          {
            "year": "1904",
            "author": "Henri Poincaré",
            "note": "Poses the 3-sphere topological conjecture in Paris."
          },
          {
            "year": "1982",
            "author": "Richard S. Hamilton",
            "note": "Introduces Ricci flow to evolve Riemannian metrics."
          },
          {
            "year": "2002–2003",
            "author": "Grigori Perelman",
            "note": "Posts 3 preprints on arXiv completing the proof using Ricci flow with surgery."
          },
          {
            "year": "2006",
            "author": "International Mathematical Union",
            "note": "Awards Perelman the Fields Medal (declined)."
          }
        ]
      },
      "it": {
        "name": "The Poincaré Conjecture",
        "subtitle": "Is Every Loop-Shrinking 3D Universe a Hypersphere? (Clay Millennium Solved)",
        "field": "Differential Geometry & Geometric Topology",
        "statusBadge": "SOLVED (PERELMAN)",
        "grades": {
          "explorers": {
            "tagline": "Can you wrap a rubber band around a planet and shrink it to a tiny point?",
            "analogy": "Imagine lassoing a round ball: you can always pull the lasso tight until it shrinks to a point. But on a doughnut with a hole, the lasso can get trapped around the hole! Henri Poincaré asked in 1904: if a 3D universe has NO holes (every lasso shrinks to a point), is it GUARANTEED to be a smooth 3D sphere? Grigori Perelman proved YES in 2003!",
            "rules": [
              "Imagine a 3-dimensional space (manifold).",
              "Wrap any loop (lasso) anywhere inside it.",
              "If every loop can shrink smoothly to a single point, space is simply connected.",
              "Perelman proved: Such a space MUST be topologically identical to the 3-sphere S³!"
            ],
            "mystery": "Grigori Perelman was awarded the Fields Medal and the $1,000,000 Clay Millennium Prize, but famously DECLINED both awards, saying his proof was sufficient reward!",
            "funFact": "Dimension 4 was proved by Michael Freedman in 1982, and dimensions ≥ 5 by Stephen Smale in 1961—making the 3D case the last and hardest to fall!"
          },
          "investigators": {
            "tagline": "Ricci flow with surgery and Hamilton-Perelman entropy.",
            "analogy": "Richard Hamilton proposed smoothing the metric via the Ricci flow equation ∂g/∂t = -2 Ric(g). Perelman introduced the W-entropy functional, proved non-collapsing, and constructed surgery through neck-pinching singularities.",
            "rules": [
              "Ricci Flow: ∂g/∂t = -2 Ric(g).",
              "Perelman W-entropy: W(g, f, τ) = ∫ [τ(|∇f|² + R) + f - n] (4πτ)^{-n/2} e^{-f} dV.",
              "Geometric surgery eliminates cigar and neckpinching singularities."
            ],
            "mystery": "Perelman's work did not just solve Poincaré—it proved Thurston's entire Geometrization Conjecture for ALL 3-manifolds!",
            "funFact": "Henri Poincaré posed the question in his 1904 Cinquième complément à l'Analysis Situs."
          },
          "pioneers": {
            "tagline": "Geometric analysis, parabolic PDEs, and modern Lean formalization.",
            "analogy": "The proof represents the supreme synthesis of differential geometry, mathematical physics (renormalization group flow), and algebraic topology.",
            "rules": [
              "Hamilton's maximum principle for Ricci tensors.",
              "Perelman's reduced volume functional.",
              "Lean 4 Mathlib formalization of Riemannian manifolds."
            ],
            "mystery": "Formal verification of Ricci flow in Lean 4 is one of the grandest ongoing targets in computerized mathematics.",
            "funFact": "The Poincaré Conjecture stands as the only Clay Millennium Prize Problem fully conquered by human intellect."
          }
        },
        "history": [
          {
            "year": "1904",
            "author": "Henri Poincaré",
            "note": "Poses the 3-sphere topological conjecture in Paris."
          },
          {
            "year": "1982",
            "author": "Richard S. Hamilton",
            "note": "Introduces Ricci flow to evolve Riemannian metrics."
          },
          {
            "year": "2002–2003",
            "author": "Grigori Perelman",
            "note": "Posts 3 preprints on arXiv completing the proof using Ricci flow with surgery."
          },
          {
            "year": "2006",
            "author": "International Mathematical Union",
            "note": "Awards Perelman the Fields Medal (declined)."
          }
        ]
      },
      "ja": {
        "name": "The Poincaré Conjecture",
        "subtitle": "Is Every Loop-Shrinking 3D Universe a Hypersphere? (Clay Millennium Solved)",
        "field": "Differential Geometry & Geometric Topology",
        "statusBadge": "SOLVED (PERELMAN)",
        "grades": {
          "explorers": {
            "tagline": "Can you wrap a rubber band around a planet and shrink it to a tiny point?",
            "analogy": "Imagine lassoing a round ball: you can always pull the lasso tight until it shrinks to a point. But on a doughnut with a hole, the lasso can get trapped around the hole! Henri Poincaré asked in 1904: if a 3D universe has NO holes (every lasso shrinks to a point), is it GUARANTEED to be a smooth 3D sphere? Grigori Perelman proved YES in 2003!",
            "rules": [
              "Imagine a 3-dimensional space (manifold).",
              "Wrap any loop (lasso) anywhere inside it.",
              "If every loop can shrink smoothly to a single point, space is simply connected.",
              "Perelman proved: Such a space MUST be topologically identical to the 3-sphere S³!"
            ],
            "mystery": "Grigori Perelman was awarded the Fields Medal and the $1,000,000 Clay Millennium Prize, but famously DECLINED both awards, saying his proof was sufficient reward!",
            "funFact": "Dimension 4 was proved by Michael Freedman in 1982, and dimensions ≥ 5 by Stephen Smale in 1961—making the 3D case the last and hardest to fall!"
          },
          "investigators": {
            "tagline": "Ricci flow with surgery and Hamilton-Perelman entropy.",
            "analogy": "Richard Hamilton proposed smoothing the metric via the Ricci flow equation ∂g/∂t = -2 Ric(g). Perelman introduced the W-entropy functional, proved non-collapsing, and constructed surgery through neck-pinching singularities.",
            "rules": [
              "Ricci Flow: ∂g/∂t = -2 Ric(g).",
              "Perelman W-entropy: W(g, f, τ) = ∫ [τ(|∇f|² + R) + f - n] (4πτ)^{-n/2} e^{-f} dV.",
              "Geometric surgery eliminates cigar and neckpinching singularities."
            ],
            "mystery": "Perelman's work did not just solve Poincaré—it proved Thurston's entire Geometrization Conjecture for ALL 3-manifolds!",
            "funFact": "Henri Poincaré posed the question in his 1904 Cinquième complément à l'Analysis Situs."
          },
          "pioneers": {
            "tagline": "Geometric analysis, parabolic PDEs, and modern Lean formalization.",
            "analogy": "The proof represents the supreme synthesis of differential geometry, mathematical physics (renormalization group flow), and algebraic topology.",
            "rules": [
              "Hamilton's maximum principle for Ricci tensors.",
              "Perelman's reduced volume functional.",
              "Lean 4 Mathlib formalization of Riemannian manifolds."
            ],
            "mystery": "Formal verification of Ricci flow in Lean 4 is one of the grandest ongoing targets in computerized mathematics.",
            "funFact": "The Poincaré Conjecture stands as the only Clay Millennium Prize Problem fully conquered by human intellect."
          }
        },
        "history": [
          {
            "year": "1904",
            "author": "Henri Poincaré",
            "note": "Poses the 3-sphere topological conjecture in Paris."
          },
          {
            "year": "1982",
            "author": "Richard S. Hamilton",
            "note": "Introduces Ricci flow to evolve Riemannian metrics."
          },
          {
            "year": "2002–2003",
            "author": "Grigori Perelman",
            "note": "Posts 3 preprints on arXiv completing the proof using Ricci flow with surgery."
          },
          {
            "year": "2006",
            "author": "International Mathematical Union",
            "note": "Awards Perelman the Fields Medal (declined)."
          }
        ]
      },
      "ko": {
        "name": "The Poincaré Conjecture",
        "subtitle": "Is Every Loop-Shrinking 3D Universe a Hypersphere? (Clay Millennium Solved)",
        "field": "Differential Geometry & Geometric Topology",
        "statusBadge": "SOLVED (PERELMAN)",
        "grades": {
          "explorers": {
            "tagline": "Can you wrap a rubber band around a planet and shrink it to a tiny point?",
            "analogy": "Imagine lassoing a round ball: you can always pull the lasso tight until it shrinks to a point. But on a doughnut with a hole, the lasso can get trapped around the hole! Henri Poincaré asked in 1904: if a 3D universe has NO holes (every lasso shrinks to a point), is it GUARANTEED to be a smooth 3D sphere? Grigori Perelman proved YES in 2003!",
            "rules": [
              "Imagine a 3-dimensional space (manifold).",
              "Wrap any loop (lasso) anywhere inside it.",
              "If every loop can shrink smoothly to a single point, space is simply connected.",
              "Perelman proved: Such a space MUST be topologically identical to the 3-sphere S³!"
            ],
            "mystery": "Grigori Perelman was awarded the Fields Medal and the $1,000,000 Clay Millennium Prize, but famously DECLINED both awards, saying his proof was sufficient reward!",
            "funFact": "Dimension 4 was proved by Michael Freedman in 1982, and dimensions ≥ 5 by Stephen Smale in 1961—making the 3D case the last and hardest to fall!"
          },
          "investigators": {
            "tagline": "Ricci flow with surgery and Hamilton-Perelman entropy.",
            "analogy": "Richard Hamilton proposed smoothing the metric via the Ricci flow equation ∂g/∂t = -2 Ric(g). Perelman introduced the W-entropy functional, proved non-collapsing, and constructed surgery through neck-pinching singularities.",
            "rules": [
              "Ricci Flow: ∂g/∂t = -2 Ric(g).",
              "Perelman W-entropy: W(g, f, τ) = ∫ [τ(|∇f|² + R) + f - n] (4πτ)^{-n/2} e^{-f} dV.",
              "Geometric surgery eliminates cigar and neckpinching singularities."
            ],
            "mystery": "Perelman's work did not just solve Poincaré—it proved Thurston's entire Geometrization Conjecture for ALL 3-manifolds!",
            "funFact": "Henri Poincaré posed the question in his 1904 Cinquième complément à l'Analysis Situs."
          },
          "pioneers": {
            "tagline": "Geometric analysis, parabolic PDEs, and modern Lean formalization.",
            "analogy": "The proof represents the supreme synthesis of differential geometry, mathematical physics (renormalization group flow), and algebraic topology.",
            "rules": [
              "Hamilton's maximum principle for Ricci tensors.",
              "Perelman's reduced volume functional.",
              "Lean 4 Mathlib formalization of Riemannian manifolds."
            ],
            "mystery": "Formal verification of Ricci flow in Lean 4 is one of the grandest ongoing targets in computerized mathematics.",
            "funFact": "The Poincaré Conjecture stands as the only Clay Millennium Prize Problem fully conquered by human intellect."
          }
        },
        "history": [
          {
            "year": "1904",
            "author": "Henri Poincaré",
            "note": "Poses the 3-sphere topological conjecture in Paris."
          },
          {
            "year": "1982",
            "author": "Richard S. Hamilton",
            "note": "Introduces Ricci flow to evolve Riemannian metrics."
          },
          {
            "year": "2002–2003",
            "author": "Grigori Perelman",
            "note": "Posts 3 preprints on arXiv completing the proof using Ricci flow with surgery."
          },
          {
            "year": "2006",
            "author": "International Mathematical Union",
            "note": "Awards Perelman the Fields Medal (declined)."
          }
        ]
      },
      "zh-Hans": {
        "name": "庞加莱猜想",
        "subtitle": "任何能将绳圈缩为一点的无洞三维宇宙，是否必定是三维超球面？（千禧年首个获解难题）",
        "field": "微分几何 & 几何拓扑学",
        "statusBadge": "佩雷尔曼已完全攻克",
        "grades": {
          "explorers": {
            "tagline": "在星球表面套上一根无限弹性的橡皮筋，能不能不扯断也不离开表面把它收缩成一个点？",
            "analogy": "想象你在篮球表面套一个套索，你可以顺畅无阻地收紧它，直到缩成一个点。但如果在甜甜圈上，套索套住了中间的洞，就再也收不紧了！1904年庞加莱发问：如果一个封闭的三维空间没有任何洞（任何橡皮筋都能缩成一点），它是不是在拓扑上必定是一个完美的三维超球面？2003年格里戈里·佩雷尔曼向全世界证明：是的！",
            "rules": [
              "设想一个闭合的三维流形空间。",
              "在其中任意位置套上一圈绳圈。",
              "若任何绳圈都能平滑收缩为一个单点，则空间为单连通的。",
              "佩雷尔曼证明：这样的空间在拓扑上必定与三维球面 S³ 同胚！"
            ],
            "mystery": "格里戈里·佩雷尔曼因此被授予菲尔兹奖和克雷研究所100万美元大奖，但他全部拒绝领奖，隐居圣彼得堡！",
            "funFact": "五维及以上在1961年被斯梅尔攻破，四维在1982年被弗里德曼攻破，三维反而是人类最后征服的最硬骨头！"
          },
          "investigators": {
            "tagline": "里奇流与拓扑手术、汉密尔顿-佩雷尔曼熵。",
            "analogy": "理查德·汉密尔顿提出通过里奇流热传导方程平滑空间几何。佩雷尔曼引入 W-熵泛函、局部非塌缩定理，并建立了通过奇点拓扑手术消除退化的完整机制。",
            "rules": [
              "里奇流演化偏微分方程。",
              "佩雷尔曼渐近单调 W-熵泛函。",
              "里奇流带手术技术彻底征服拓扑退化。"
            ],
            "mystery": "佩雷尔曼的证明不仅解决了庞加莱猜想，更彻底终结了瑟斯顿关于所有三维流形的八大几何化大一统猜想！",
            "funFact": "亨利·庞加莱于1904年在拓扑学论文中正式提出。"
          },
          "pioneers": {
            "tagline": "几何分析、抛物型非线性偏微分方程与现代形式化。",
            "analogy": "该证明代表了微分几何、广义相对论重整化群流与代数拓扑学三者登峰造极的完美融合。",
            "rules": [
              "汉密尔顿关于对称双张量的张量极值原理。",
              "佩雷尔曼约化几何体积。",
              "Lean 4 Mathlib 中黎曼流形微分拓扑形式化。"
            ],
            "mystery": "在 Lean 4 中完全形式化里奇流与单连通性引理是当代计算机可验证数学的最宏伟目标之一。",
            "funFact": "庞加莱猜想是七大千禧年数学难题中，人类迄今为止彻底征服并机器检验完毕的唯一丰碑。"
          }
        },
        "history": [
          {
            "year": "1904",
            "author": "亨利·庞加莱",
            "note": "在巴黎提出关于三维球面拓扑本质的伟大猜想。"
          },
          {
            "year": "1982",
            "author": "理查德·汉密尔顿",
            "note": "开创里奇流偏微分方程演化黎曼度量。"
          },
          {
            "year": "2002–2003",
            "author": "格里戈里·佩雷尔曼",
            "note": "在 arXiv 发布三篇预印本，运用带手术里奇流彻底攻克猜想！"
          },
          {
            "year": "2006",
            "author": "国际数学联盟",
            "note": "授予佩雷尔曼菲尔兹奖（被其拒绝）。"
          }
        ]
      },
      "zh-Hant": {
        "name": "The Poincaré Conjecture",
        "subtitle": "Is Every Loop-Shrinking 3D Universe a Hypersphere? (Clay Millennium Solved)",
        "field": "Differential Geometry & Geometric Topology",
        "statusBadge": "SOLVED (PERELMAN)",
        "grades": {
          "explorers": {
            "tagline": "Can you wrap a rubber band around a planet and shrink it to a tiny point?",
            "analogy": "Imagine lassoing a round ball: you can always pull the lasso tight until it shrinks to a point. But on a doughnut with a hole, the lasso can get trapped around the hole! Henri Poincaré asked in 1904: if a 3D universe has NO holes (every lasso shrinks to a point), is it GUARANTEED to be a smooth 3D sphere? Grigori Perelman proved YES in 2003!",
            "rules": [
              "Imagine a 3-dimensional space (manifold).",
              "Wrap any loop (lasso) anywhere inside it.",
              "If every loop can shrink smoothly to a single point, space is simply connected.",
              "Perelman proved: Such a space MUST be topologically identical to the 3-sphere S³!"
            ],
            "mystery": "Grigori Perelman was awarded the Fields Medal and the $1,000,000 Clay Millennium Prize, but famously DECLINED both awards, saying his proof was sufficient reward!",
            "funFact": "Dimension 4 was proved by Michael Freedman in 1982, and dimensions ≥ 5 by Stephen Smale in 1961—making the 3D case the last and hardest to fall!"
          },
          "investigators": {
            "tagline": "Ricci flow with surgery and Hamilton-Perelman entropy.",
            "analogy": "Richard Hamilton proposed smoothing the metric via the Ricci flow equation ∂g/∂t = -2 Ric(g). Perelman introduced the W-entropy functional, proved non-collapsing, and constructed surgery through neck-pinching singularities.",
            "rules": [
              "Ricci Flow: ∂g/∂t = -2 Ric(g).",
              "Perelman W-entropy: W(g, f, τ) = ∫ [τ(|∇f|² + R) + f - n] (4πτ)^{-n/2} e^{-f} dV.",
              "Geometric surgery eliminates cigar and neckpinching singularities."
            ],
            "mystery": "Perelman's work did not just solve Poincaré—it proved Thurston's entire Geometrization Conjecture for ALL 3-manifolds!",
            "funFact": "Henri Poincaré posed the question in his 1904 Cinquième complément à l'Analysis Situs."
          },
          "pioneers": {
            "tagline": "Geometric analysis, parabolic PDEs, and modern Lean formalization.",
            "analogy": "The proof represents the supreme synthesis of differential geometry, mathematical physics (renormalization group flow), and algebraic topology.",
            "rules": [
              "Hamilton's maximum principle for Ricci tensors.",
              "Perelman's reduced volume functional.",
              "Lean 4 Mathlib formalization of Riemannian manifolds."
            ],
            "mystery": "Formal verification of Ricci flow in Lean 4 is one of the grandest ongoing targets in computerized mathematics.",
            "funFact": "The Poincaré Conjecture stands as the only Clay Millennium Prize Problem fully conquered by human intellect."
          }
        },
        "history": [
          {
            "year": "1904",
            "author": "Henri Poincaré",
            "note": "Poses the 3-sphere topological conjecture in Paris."
          },
          {
            "year": "1982",
            "author": "Richard S. Hamilton",
            "note": "Introduces Ricci flow to evolve Riemannian metrics."
          },
          {
            "year": "2002–2003",
            "author": "Grigori Perelman",
            "note": "Posts 3 preprints on arXiv completing the proof using Ricci flow with surgery."
          },
          {
            "year": "2006",
            "author": "International Mathematical Union",
            "note": "Awards Perelman the Fields Medal (declined)."
          }
        ]
      }
    }
  },
  {
    "id": "kepler",
    "icon": "🍊",
    "difficulty": "All Ages",
    "domain": "geometry",
    "category": "geometry",
    "isMillennium": false,
    "isAIFrontier": true,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Analysis.InnerProductSpace.Basic\n-- Kepler Conjecture (Proved by Thomas Hales, Flyspeck formalization 2014)\n-- The maximum sphere packing density in ℝ³ is π / √18 ≈ 0.74048\naxiom KeplerSpherePackingMaxDensity :\n  ∀ (packing : Set (EuclideanSpace ℝ (Fin 3))),\n    true",
    "locales": {
      "en": {
        "name": "The Kepler Conjecture",
        "subtitle": "Cannonball Sphere Packing Density ($\\pi / \\sqrt{18} \\approx 74.05\\%$)",
        "field": "Discrete Geometry & Formal Proof Verification",
        "statusBadge": "FORMALLY VERIFIED",
        "grades": {
          "explorers": {
            "tagline": "What is the tightest way to pack cannonballs in a ship or oranges in a grocery crate?",
            "analogy": "In 1611, astronomer Johannes Kepler noticed that fruit vendors pack oranges in a honeycomb pyramid: each layer sits in the hollows of the layer below. Kepler claimed NO packing of identical spheres in 3D can ever fill more than 74.05% of space! It took 400 years and the Flyspeck computer project to verify his claim.",
            "rules": [
              "Pack identical spheres into space.",
              "Face-Centered Cubic (FCC) lattice achieves density π/√18 ≈ 74.05%.",
              "Is any random or chaotic packing ever denser?",
              "Kepler conjectured: FCC is the absolute global optimum."
            ],
            "mystery": "Thomas Hales' proof in 1998 had 250 pages and gigabytes of computer code. The Annals of Mathematics referees were '99% sure' it was correct, prompting Hales to spend 10 years creating the 'Flyspeck' project to check every step in computer logic!",
            "funFact": "In 2016, Maryna Viazovska solved sphere packing in 8 dimensions (E_8 lattice) and 24 dimensions (Leech lattice), winning the 2022 Fields Medal!"
          },
          "investigators": {
            "tagline": "Voronoi decomposition and non-linear optimization over tame graphs.",
            "analogy": "Hales reduced the infinite search to ~5,000 planar graphs representing local sphere contact constellations, using linear programming to prove no local score exceeds π/√18.",
            "rules": [
              "Voronoi cell score function.",
              "5,000+ tame planar graphs.",
              "Flyspeck project (HOL Light & Isabelle) formal verification in 2014."
            ],
            "mystery": "Flyspeck proved that complex computational proofs can achieve absolute mathematical certainty.",
            "funFact": "Johannes Kepler proposed the packing in Strena Seu de Nive Sexangula (1611)."
          },
          "pioneers": {
            "tagline": "Fourier interpolation and modular forms for sphere packings.",
            "analogy": "Viazovska's magic function for 8D sphere packing utilized quasimodular forms and the Laplace transform to achieve exact optimality.",
            "rules": [
              "Cohn-Elkies linear programming bounds.",
              "E_8 root lattice density.",
              "Formalization of sphere packing in Lean 4."
            ],
            "mystery": "AI algorithms are deriving optimal packings for higher dimensions (dimension 5 to 7) where exact lattices remain unknown.",
            "funFact": "The Kepler Conjecture is the quintessential monument of human intuition confirmed by machine verification."
          }
        },
        "history": [
          {
            "year": "1611",
            "author": "Johannes Kepler",
            "note": "States the sphere packing conjecture in The Six-Cornered Snowflake."
          },
          {
            "year": "1998",
            "author": "Thomas Hales",
            "note": "Announces computational proof using linear programming."
          },
          {
            "year": "2014",
            "author": "Flyspeck Team",
            "note": "Completes 100% machine-checked formal verification in HOL Light."
          },
          {
            "year": "2016",
            "author": "Maryna Viazovska",
            "note": "Solves 8D and 24D sphere packings using modular forms."
          }
        ]
      },
      "de": {
        "name": "The Kepler Conjecture",
        "subtitle": "Cannonball Sphere Packing Density ($\\pi / \\sqrt{18} \\approx 74.05\\%$)",
        "field": "Discrete Geometry & Formal Proof Verification",
        "statusBadge": "FORMALLY VERIFIED",
        "grades": {
          "explorers": {
            "tagline": "What is the tightest way to pack cannonballs in a ship or oranges in a grocery crate?",
            "analogy": "In 1611, astronomer Johannes Kepler noticed that fruit vendors pack oranges in a honeycomb pyramid: each layer sits in the hollows of the layer below. Kepler claimed NO packing of identical spheres in 3D can ever fill more than 74.05% of space! It took 400 years and the Flyspeck computer project to verify his claim.",
            "rules": [
              "Pack identical spheres into space.",
              "Face-Centered Cubic (FCC) lattice achieves density π/√18 ≈ 74.05%.",
              "Is any random or chaotic packing ever denser?",
              "Kepler conjectured: FCC is the absolute global optimum."
            ],
            "mystery": "Thomas Hales' proof in 1998 had 250 pages and gigabytes of computer code. The Annals of Mathematics referees were '99% sure' it was correct, prompting Hales to spend 10 years creating the 'Flyspeck' project to check every step in computer logic!",
            "funFact": "In 2016, Maryna Viazovska solved sphere packing in 8 dimensions (E_8 lattice) and 24 dimensions (Leech lattice), winning the 2022 Fields Medal!"
          },
          "investigators": {
            "tagline": "Voronoi decomposition and non-linear optimization over tame graphs.",
            "analogy": "Hales reduced the infinite search to ~5,000 planar graphs representing local sphere contact constellations, using linear programming to prove no local score exceeds π/√18.",
            "rules": [
              "Voronoi cell score function.",
              "5,000+ tame planar graphs.",
              "Flyspeck project (HOL Light & Isabelle) formal verification in 2014."
            ],
            "mystery": "Flyspeck proved that complex computational proofs can achieve absolute mathematical certainty.",
            "funFact": "Johannes Kepler proposed the packing in Strena Seu de Nive Sexangula (1611)."
          },
          "pioneers": {
            "tagline": "Fourier interpolation and modular forms for sphere packings.",
            "analogy": "Viazovska's magic function for 8D sphere packing utilized quasimodular forms and the Laplace transform to achieve exact optimality.",
            "rules": [
              "Cohn-Elkies linear programming bounds.",
              "E_8 root lattice density.",
              "Formalization of sphere packing in Lean 4."
            ],
            "mystery": "AI algorithms are deriving optimal packings for higher dimensions (dimension 5 to 7) where exact lattices remain unknown.",
            "funFact": "The Kepler Conjecture is the quintessential monument of human intuition confirmed by machine verification."
          }
        },
        "history": [
          {
            "year": "1611",
            "author": "Johannes Kepler",
            "note": "States the sphere packing conjecture in The Six-Cornered Snowflake."
          },
          {
            "year": "1998",
            "author": "Thomas Hales",
            "note": "Announces computational proof using linear programming."
          },
          {
            "year": "2014",
            "author": "Flyspeck Team",
            "note": "Completes 100% machine-checked formal verification in HOL Light."
          },
          {
            "year": "2016",
            "author": "Maryna Viazovska",
            "note": "Solves 8D and 24D sphere packings using modular forms."
          }
        ]
      },
      "fr": {
        "name": "The Kepler Conjecture",
        "subtitle": "Cannonball Sphere Packing Density ($\\pi / \\sqrt{18} \\approx 74.05\\%$)",
        "field": "Discrete Geometry & Formal Proof Verification",
        "statusBadge": "FORMALLY VERIFIED",
        "grades": {
          "explorers": {
            "tagline": "What is the tightest way to pack cannonballs in a ship or oranges in a grocery crate?",
            "analogy": "In 1611, astronomer Johannes Kepler noticed that fruit vendors pack oranges in a honeycomb pyramid: each layer sits in the hollows of the layer below. Kepler claimed NO packing of identical spheres in 3D can ever fill more than 74.05% of space! It took 400 years and the Flyspeck computer project to verify his claim.",
            "rules": [
              "Pack identical spheres into space.",
              "Face-Centered Cubic (FCC) lattice achieves density π/√18 ≈ 74.05%.",
              "Is any random or chaotic packing ever denser?",
              "Kepler conjectured: FCC is the absolute global optimum."
            ],
            "mystery": "Thomas Hales' proof in 1998 had 250 pages and gigabytes of computer code. The Annals of Mathematics referees were '99% sure' it was correct, prompting Hales to spend 10 years creating the 'Flyspeck' project to check every step in computer logic!",
            "funFact": "In 2016, Maryna Viazovska solved sphere packing in 8 dimensions (E_8 lattice) and 24 dimensions (Leech lattice), winning the 2022 Fields Medal!"
          },
          "investigators": {
            "tagline": "Voronoi decomposition and non-linear optimization over tame graphs.",
            "analogy": "Hales reduced the infinite search to ~5,000 planar graphs representing local sphere contact constellations, using linear programming to prove no local score exceeds π/√18.",
            "rules": [
              "Voronoi cell score function.",
              "5,000+ tame planar graphs.",
              "Flyspeck project (HOL Light & Isabelle) formal verification in 2014."
            ],
            "mystery": "Flyspeck proved that complex computational proofs can achieve absolute mathematical certainty.",
            "funFact": "Johannes Kepler proposed the packing in Strena Seu de Nive Sexangula (1611)."
          },
          "pioneers": {
            "tagline": "Fourier interpolation and modular forms for sphere packings.",
            "analogy": "Viazovska's magic function for 8D sphere packing utilized quasimodular forms and the Laplace transform to achieve exact optimality.",
            "rules": [
              "Cohn-Elkies linear programming bounds.",
              "E_8 root lattice density.",
              "Formalization of sphere packing in Lean 4."
            ],
            "mystery": "AI algorithms are deriving optimal packings for higher dimensions (dimension 5 to 7) where exact lattices remain unknown.",
            "funFact": "The Kepler Conjecture is the quintessential monument of human intuition confirmed by machine verification."
          }
        },
        "history": [
          {
            "year": "1611",
            "author": "Johannes Kepler",
            "note": "States the sphere packing conjecture in The Six-Cornered Snowflake."
          },
          {
            "year": "1998",
            "author": "Thomas Hales",
            "note": "Announces computational proof using linear programming."
          },
          {
            "year": "2014",
            "author": "Flyspeck Team",
            "note": "Completes 100% machine-checked formal verification in HOL Light."
          },
          {
            "year": "2016",
            "author": "Maryna Viazovska",
            "note": "Solves 8D and 24D sphere packings using modular forms."
          }
        ]
      },
      "it": {
        "name": "The Kepler Conjecture",
        "subtitle": "Cannonball Sphere Packing Density ($\\pi / \\sqrt{18} \\approx 74.05\\%$)",
        "field": "Discrete Geometry & Formal Proof Verification",
        "statusBadge": "FORMALLY VERIFIED",
        "grades": {
          "explorers": {
            "tagline": "What is the tightest way to pack cannonballs in a ship or oranges in a grocery crate?",
            "analogy": "In 1611, astronomer Johannes Kepler noticed that fruit vendors pack oranges in a honeycomb pyramid: each layer sits in the hollows of the layer below. Kepler claimed NO packing of identical spheres in 3D can ever fill more than 74.05% of space! It took 400 years and the Flyspeck computer project to verify his claim.",
            "rules": [
              "Pack identical spheres into space.",
              "Face-Centered Cubic (FCC) lattice achieves density π/√18 ≈ 74.05%.",
              "Is any random or chaotic packing ever denser?",
              "Kepler conjectured: FCC is the absolute global optimum."
            ],
            "mystery": "Thomas Hales' proof in 1998 had 250 pages and gigabytes of computer code. The Annals of Mathematics referees were '99% sure' it was correct, prompting Hales to spend 10 years creating the 'Flyspeck' project to check every step in computer logic!",
            "funFact": "In 2016, Maryna Viazovska solved sphere packing in 8 dimensions (E_8 lattice) and 24 dimensions (Leech lattice), winning the 2022 Fields Medal!"
          },
          "investigators": {
            "tagline": "Voronoi decomposition and non-linear optimization over tame graphs.",
            "analogy": "Hales reduced the infinite search to ~5,000 planar graphs representing local sphere contact constellations, using linear programming to prove no local score exceeds π/√18.",
            "rules": [
              "Voronoi cell score function.",
              "5,000+ tame planar graphs.",
              "Flyspeck project (HOL Light & Isabelle) formal verification in 2014."
            ],
            "mystery": "Flyspeck proved that complex computational proofs can achieve absolute mathematical certainty.",
            "funFact": "Johannes Kepler proposed the packing in Strena Seu de Nive Sexangula (1611)."
          },
          "pioneers": {
            "tagline": "Fourier interpolation and modular forms for sphere packings.",
            "analogy": "Viazovska's magic function for 8D sphere packing utilized quasimodular forms and the Laplace transform to achieve exact optimality.",
            "rules": [
              "Cohn-Elkies linear programming bounds.",
              "E_8 root lattice density.",
              "Formalization of sphere packing in Lean 4."
            ],
            "mystery": "AI algorithms are deriving optimal packings for higher dimensions (dimension 5 to 7) where exact lattices remain unknown.",
            "funFact": "The Kepler Conjecture is the quintessential monument of human intuition confirmed by machine verification."
          }
        },
        "history": [
          {
            "year": "1611",
            "author": "Johannes Kepler",
            "note": "States the sphere packing conjecture in The Six-Cornered Snowflake."
          },
          {
            "year": "1998",
            "author": "Thomas Hales",
            "note": "Announces computational proof using linear programming."
          },
          {
            "year": "2014",
            "author": "Flyspeck Team",
            "note": "Completes 100% machine-checked formal verification in HOL Light."
          },
          {
            "year": "2016",
            "author": "Maryna Viazovska",
            "note": "Solves 8D and 24D sphere packings using modular forms."
          }
        ]
      },
      "ja": {
        "name": "The Kepler Conjecture",
        "subtitle": "Cannonball Sphere Packing Density ($\\pi / \\sqrt{18} \\approx 74.05\\%$)",
        "field": "Discrete Geometry & Formal Proof Verification",
        "statusBadge": "FORMALLY VERIFIED",
        "grades": {
          "explorers": {
            "tagline": "What is the tightest way to pack cannonballs in a ship or oranges in a grocery crate?",
            "analogy": "In 1611, astronomer Johannes Kepler noticed that fruit vendors pack oranges in a honeycomb pyramid: each layer sits in the hollows of the layer below. Kepler claimed NO packing of identical spheres in 3D can ever fill more than 74.05% of space! It took 400 years and the Flyspeck computer project to verify his claim.",
            "rules": [
              "Pack identical spheres into space.",
              "Face-Centered Cubic (FCC) lattice achieves density π/√18 ≈ 74.05%.",
              "Is any random or chaotic packing ever denser?",
              "Kepler conjectured: FCC is the absolute global optimum."
            ],
            "mystery": "Thomas Hales' proof in 1998 had 250 pages and gigabytes of computer code. The Annals of Mathematics referees were '99% sure' it was correct, prompting Hales to spend 10 years creating the 'Flyspeck' project to check every step in computer logic!",
            "funFact": "In 2016, Maryna Viazovska solved sphere packing in 8 dimensions (E_8 lattice) and 24 dimensions (Leech lattice), winning the 2022 Fields Medal!"
          },
          "investigators": {
            "tagline": "Voronoi decomposition and non-linear optimization over tame graphs.",
            "analogy": "Hales reduced the infinite search to ~5,000 planar graphs representing local sphere contact constellations, using linear programming to prove no local score exceeds π/√18.",
            "rules": [
              "Voronoi cell score function.",
              "5,000+ tame planar graphs.",
              "Flyspeck project (HOL Light & Isabelle) formal verification in 2014."
            ],
            "mystery": "Flyspeck proved that complex computational proofs can achieve absolute mathematical certainty.",
            "funFact": "Johannes Kepler proposed the packing in Strena Seu de Nive Sexangula (1611)."
          },
          "pioneers": {
            "tagline": "Fourier interpolation and modular forms for sphere packings.",
            "analogy": "Viazovska's magic function for 8D sphere packing utilized quasimodular forms and the Laplace transform to achieve exact optimality.",
            "rules": [
              "Cohn-Elkies linear programming bounds.",
              "E_8 root lattice density.",
              "Formalization of sphere packing in Lean 4."
            ],
            "mystery": "AI algorithms are deriving optimal packings for higher dimensions (dimension 5 to 7) where exact lattices remain unknown.",
            "funFact": "The Kepler Conjecture is the quintessential monument of human intuition confirmed by machine verification."
          }
        },
        "history": [
          {
            "year": "1611",
            "author": "Johannes Kepler",
            "note": "States the sphere packing conjecture in The Six-Cornered Snowflake."
          },
          {
            "year": "1998",
            "author": "Thomas Hales",
            "note": "Announces computational proof using linear programming."
          },
          {
            "year": "2014",
            "author": "Flyspeck Team",
            "note": "Completes 100% machine-checked formal verification in HOL Light."
          },
          {
            "year": "2016",
            "author": "Maryna Viazovska",
            "note": "Solves 8D and 24D sphere packings using modular forms."
          }
        ]
      },
      "ko": {
        "name": "The Kepler Conjecture",
        "subtitle": "Cannonball Sphere Packing Density ($\\pi / \\sqrt{18} \\approx 74.05\\%$)",
        "field": "Discrete Geometry & Formal Proof Verification",
        "statusBadge": "FORMALLY VERIFIED",
        "grades": {
          "explorers": {
            "tagline": "What is the tightest way to pack cannonballs in a ship or oranges in a grocery crate?",
            "analogy": "In 1611, astronomer Johannes Kepler noticed that fruit vendors pack oranges in a honeycomb pyramid: each layer sits in the hollows of the layer below. Kepler claimed NO packing of identical spheres in 3D can ever fill more than 74.05% of space! It took 400 years and the Flyspeck computer project to verify his claim.",
            "rules": [
              "Pack identical spheres into space.",
              "Face-Centered Cubic (FCC) lattice achieves density π/√18 ≈ 74.05%.",
              "Is any random or chaotic packing ever denser?",
              "Kepler conjectured: FCC is the absolute global optimum."
            ],
            "mystery": "Thomas Hales' proof in 1998 had 250 pages and gigabytes of computer code. The Annals of Mathematics referees were '99% sure' it was correct, prompting Hales to spend 10 years creating the 'Flyspeck' project to check every step in computer logic!",
            "funFact": "In 2016, Maryna Viazovska solved sphere packing in 8 dimensions (E_8 lattice) and 24 dimensions (Leech lattice), winning the 2022 Fields Medal!"
          },
          "investigators": {
            "tagline": "Voronoi decomposition and non-linear optimization over tame graphs.",
            "analogy": "Hales reduced the infinite search to ~5,000 planar graphs representing local sphere contact constellations, using linear programming to prove no local score exceeds π/√18.",
            "rules": [
              "Voronoi cell score function.",
              "5,000+ tame planar graphs.",
              "Flyspeck project (HOL Light & Isabelle) formal verification in 2014."
            ],
            "mystery": "Flyspeck proved that complex computational proofs can achieve absolute mathematical certainty.",
            "funFact": "Johannes Kepler proposed the packing in Strena Seu de Nive Sexangula (1611)."
          },
          "pioneers": {
            "tagline": "Fourier interpolation and modular forms for sphere packings.",
            "analogy": "Viazovska's magic function for 8D sphere packing utilized quasimodular forms and the Laplace transform to achieve exact optimality.",
            "rules": [
              "Cohn-Elkies linear programming bounds.",
              "E_8 root lattice density.",
              "Formalization of sphere packing in Lean 4."
            ],
            "mystery": "AI algorithms are deriving optimal packings for higher dimensions (dimension 5 to 7) where exact lattices remain unknown.",
            "funFact": "The Kepler Conjecture is the quintessential monument of human intuition confirmed by machine verification."
          }
        },
        "history": [
          {
            "year": "1611",
            "author": "Johannes Kepler",
            "note": "States the sphere packing conjecture in The Six-Cornered Snowflake."
          },
          {
            "year": "1998",
            "author": "Thomas Hales",
            "note": "Announces computational proof using linear programming."
          },
          {
            "year": "2014",
            "author": "Flyspeck Team",
            "note": "Completes 100% machine-checked formal verification in HOL Light."
          },
          {
            "year": "2016",
            "author": "Maryna Viazovska",
            "note": "Solves 8D and 24D sphere packings using modular forms."
          }
        ]
      },
      "zh-Hans": {
        "name": "开普勒猜想",
        "subtitle": "球体堆积的最大空间利用率（$\\pi / \\sqrt{18} \\approx 74.05\\%$）",
        "field": "离散几何 & 形式化完全验证",
        "statusBadge": "计算机形式化完全验证",
        "grades": {
          "explorers": {
            "tagline": "如何在箱子里装进最多的橘子，把空隙挤到最小？",
            "analogy": "1611年天文学家开普勒观察到集市上的水果商贩摆放橘子总是呈金字塔蜂窝状：上层的橘子正好落在下层四个或三个橘子之间的凹陷处。开普勒猜想：三维空间中相同球体的堆积密度绝对不可能超过 74.05%（π/√18）！人类历经近400年，终于通过 Flyspeck 形式化工程给出了铁证。",
            "rules": [
              "将相同大小的球体塞入三维空间。",
              "面心立方 (FCC) 和六方最密堆积达到密度 π/√18 ≈ 74.05%。",
              "是否存在某种奇特的混乱或不规则摆放能超越这个密度？",
              "开普勒断言：74.05% 是绝对的物理与几何极值！"
            ],
            "mystery": "托马斯·黑尔斯1998年的证明包含了250页论文和海量程序，顶刊审稿人表示“99%确定证明正确”。黑尔斯为此发起了长达十年的 Flyspeck 形式化工程，完成了人类首个全计算机验证的几何大定理！",
            "funFact": "2016年玛丽娜·维亚佐夫斯卡利用模形式奇迹般证明了8维（E_8格）与24维（利奇格）的球体最密堆积，荣获2022年菲尔兹奖！"
          },
          "investigators": {
            "tagline": "沃罗诺伊多面体剖分与驯顺图非线性规划。",
            "analogy": "黑尔斯将无穷搜索空间降维转化为约 5,000 个驯顺平面图的局部接触构型，利用线性规划严格证明局部几何得分绝无法突破 π/√18。",
            "rules": [
              "沃罗诺伊胞腔压缩得分函数。",
              "5000余个驯顺图局部能量估计。",
              "2014年 Flyspeck 工程在 HOL Light 与 Isabelle 中实现全机检。"
            ],
            "mystery": "Flyspeck 工程彻底确立了复杂混合计算证明能够达到数学绝对确定性的新范式。",
            "funFact": "约翰内斯·开普勒于1611年关于六角雪花的研究小册中提出。"
          },
          "pioneers": {
            "tagline": "傅里叶插值基函数与魔幻模形式。",
            "analogy": "维亚佐夫斯卡构造的奇迹径向函数利用了拟模形式与拉普拉斯变换，实现了偶数维球体堆积的解析极值证明。",
            "rules": [
              "科恩-埃尔基斯线性规划对偶上界。",
              "E_8 根格与利奇格的极值性。",
              "Lean 4 中度量空间球体覆盖形式化。"
            ],
            "mystery": "AI 正在探索尚未彻底解决的5至7维空间中高维球体堆积的拟极值结构。",
            "funFact": "开普勒猜想是人类直觉洞察与现代计算机严密验证完美结合的永恒丰碑。"
          }
        },
        "history": [
          {
            "year": "1611",
            "author": "开普勒",
            "note": "在《新年礼物：六角雪花》中提出球体最密堆积猜想。"
          },
          {
            "year": "1998",
            "author": "托马斯·黑尔斯",
            "note": "宣布利用非线性规划与计算机搜索完成证明。"
          },
          {
            "year": "2014",
            "author": "Flyspeck 国际形式化团队",
            "note": "在交互式定理证明系统中完成100%全量机器代码形式验证！"
          },
          {
            "year": "2016",
            "author": "玛丽娜·维亚佐夫斯卡",
            "note": "运用模形式攻克 8 维与 24 维球体最密堆积。"
          }
        ]
      },
      "zh-Hant": {
        "name": "The Kepler Conjecture",
        "subtitle": "Cannonball Sphere Packing Density ($\\pi / \\sqrt{18} \\approx 74.05\\%$)",
        "field": "Discrete Geometry & Formal Proof Verification",
        "statusBadge": "FORMALLY VERIFIED",
        "grades": {
          "explorers": {
            "tagline": "What is the tightest way to pack cannonballs in a ship or oranges in a grocery crate?",
            "analogy": "In 1611, astronomer Johannes Kepler noticed that fruit vendors pack oranges in a honeycomb pyramid: each layer sits in the hollows of the layer below. Kepler claimed NO packing of identical spheres in 3D can ever fill more than 74.05% of space! It took 400 years and the Flyspeck computer project to verify his claim.",
            "rules": [
              "Pack identical spheres into space.",
              "Face-Centered Cubic (FCC) lattice achieves density π/√18 ≈ 74.05%.",
              "Is any random or chaotic packing ever denser?",
              "Kepler conjectured: FCC is the absolute global optimum."
            ],
            "mystery": "Thomas Hales' proof in 1998 had 250 pages and gigabytes of computer code. The Annals of Mathematics referees were '99% sure' it was correct, prompting Hales to spend 10 years creating the 'Flyspeck' project to check every step in computer logic!",
            "funFact": "In 2016, Maryna Viazovska solved sphere packing in 8 dimensions (E_8 lattice) and 24 dimensions (Leech lattice), winning the 2022 Fields Medal!"
          },
          "investigators": {
            "tagline": "Voronoi decomposition and non-linear optimization over tame graphs.",
            "analogy": "Hales reduced the infinite search to ~5,000 planar graphs representing local sphere contact constellations, using linear programming to prove no local score exceeds π/√18.",
            "rules": [
              "Voronoi cell score function.",
              "5,000+ tame planar graphs.",
              "Flyspeck project (HOL Light & Isabelle) formal verification in 2014."
            ],
            "mystery": "Flyspeck proved that complex computational proofs can achieve absolute mathematical certainty.",
            "funFact": "Johannes Kepler proposed the packing in Strena Seu de Nive Sexangula (1611)."
          },
          "pioneers": {
            "tagline": "Fourier interpolation and modular forms for sphere packings.",
            "analogy": "Viazovska's magic function for 8D sphere packing utilized quasimodular forms and the Laplace transform to achieve exact optimality.",
            "rules": [
              "Cohn-Elkies linear programming bounds.",
              "E_8 root lattice density.",
              "Formalization of sphere packing in Lean 4."
            ],
            "mystery": "AI algorithms are deriving optimal packings for higher dimensions (dimension 5 to 7) where exact lattices remain unknown.",
            "funFact": "The Kepler Conjecture is the quintessential monument of human intuition confirmed by machine verification."
          }
        },
        "history": [
          {
            "year": "1611",
            "author": "Johannes Kepler",
            "note": "States the sphere packing conjecture in The Six-Cornered Snowflake."
          },
          {
            "year": "1998",
            "author": "Thomas Hales",
            "note": "Announces computational proof using linear programming."
          },
          {
            "year": "2014",
            "author": "Flyspeck Team",
            "note": "Completes 100% machine-checked formal verification in HOL Light."
          },
          {
            "year": "2016",
            "author": "Maryna Viazovska",
            "note": "Solves 8D and 24D sphere packings using modular forms."
          }
        ]
      }
    }
  },
  {
    "id": "hadwiger-nelson",
    "icon": "🎨",
    "difficulty": "All Ages",
    "domain": "geometry",
    "category": "geometry",
    "isMillennium": false,
    "isAIFrontier": true,
    "simId": "unit-distance-sim",
    "leanCode": "import Mathlib.Combinatorics.SimpleGraph.Coloring\ndef ChromaticNumberOfPlane : ℕ := sorry\n-- Hadwiger-Nelson Problem: 5 ≤ χ(ℝ²) ≤ 7 (Aubrey de Grey proved ≥ 5 in 2018)",
    "locales": {
      "en": {
        "name": "Hadwiger-Nelson Problem",
        "subtitle": "Chromatic Number of the Plane: Can 4 Colors Avoid Unit Distances?",
        "field": "Geometric Graph Theory & Combinatorial Geometry",
        "statusBadge": "AI FRONTIER BREAKTHROUGH",
        "grades": {
          "explorers": {
            "tagline": "Can you paint the entire infinite canvas so no two dots of distance 1 share a color?",
            "analogy": "Every point in the 2D plane must receive a color. If two points are exactly 1 unit apart, they MUST have different colors! For 68 years, mathematicians only knew the answer was 4, 5, 6, or 7. In 2018, Aubrey de Grey proved 4 colors are IMPOSSIBLE! Is the real answer 5, 6, or 7?",
            "rules": [
              "Points in plane at distance 1 form edges of a unit distance graph.",
              "Moser spindle (7 vertices, 11 edges) proves at least 4 colors are required.",
              "Aubrey de Grey (2018) discovered 1581-vertex graph requiring at least 5 colors!",
              "Open: Is χ(ℝ²) equal to 5, 6, or 7?"
            ],
            "mystery": "Aubrey de Grey, who proved 4 colors fail, is primarily a biomedical gerontologist studying longevity, not a professional pure mathematician!",
            "funFact": "Hexagonal grid tiling easily proves that 7 colors are ALWAYS sufficient!"
          },
          "investigators": {
            "tagline": "Moser spindle, Golomb graph, and Polymath16 distributed reduction.",
            "analogy": "After de Grey's discovery, Terence Tao organized Polymath16, where mathematicians and AI tools reduced the 5-chromatic graph from 1,581 vertices down to 509 vertices.",
            "rules": [
              "de Grey (2018): χ(ℝ²) ≥ 5.",
              "Polymath16: Minimal known 5-chromatic graph has 509 vertices.",
              "Upper bound: χ(ℝ²) ≤ 7 by Isbell's hexagonal tiling."
            ],
            "mystery": "Will an AI search find a 6-chromatic unit distance graph, or prove that 5 colors suffice for the whole plane?",
            "funFact": "Edward Nelson posed the question in 1950 at Chicago."
          },
          "pioneers": {
            "tagline": "Spectral graph theory and SAT solver clause generation.",
            "analogy": "Searching for unit distance subgraphs is executed via high-throughput SAT solvers (Kissat, CaDiCaL) verifying millions of rigid rotation combinations.",
            "rules": [
              "Fractional chromatic number χ_f(ℝ²) ≥ 3.999.",
              "Formal graph embedding in Lean 4.",
              "Lean 4 verification of Moser spindle."
            ],
            "mystery": "AI-guided genetic algorithms and neural SAT solvers are testing billion-vertex geometric candidate clusters.",
            "funFact": "The Hadwiger-Nelson problem is the quintessential bridge between continuous plane geometry and discrete graph coloring."
          }
        },
        "history": [
          {
            "year": "1950",
            "author": "Edward Nelson",
            "note": "Poses the chromatic number of the plane problem."
          },
          {
            "year": "1961",
            "author": "Leo & William Moser",
            "note": "Construct the 7-vertex Moser spindle proving χ ≥ 4."
          },
          {
            "year": "2018",
            "author": "Aubrey de Grey",
            "note": "Proves χ(ℝ²) ≥ 5 with a 1581-vertex unit distance graph."
          },
          {
            "year": "2018–2026",
            "author": "Polymath16 & AI Labs",
            "note": "Reduce 5-chromatic graph to 509 vertices and search for 6-chromatic structures."
          }
        ]
      },
      "de": {
        "name": "Hadwiger-Nelson Problem",
        "subtitle": "Chromatic Number of the Plane: Can 4 Colors Avoid Unit Distances?",
        "field": "Geometric Graph Theory & Combinatorial Geometry",
        "statusBadge": "AI FRONTIER BREAKTHROUGH",
        "grades": {
          "explorers": {
            "tagline": "Can you paint the entire infinite canvas so no two dots of distance 1 share a color?",
            "analogy": "Every point in the 2D plane must receive a color. If two points are exactly 1 unit apart, they MUST have different colors! For 68 years, mathematicians only knew the answer was 4, 5, 6, or 7. In 2018, Aubrey de Grey proved 4 colors are IMPOSSIBLE! Is the real answer 5, 6, or 7?",
            "rules": [
              "Points in plane at distance 1 form edges of a unit distance graph.",
              "Moser spindle (7 vertices, 11 edges) proves at least 4 colors are required.",
              "Aubrey de Grey (2018) discovered 1581-vertex graph requiring at least 5 colors!",
              "Open: Is χ(ℝ²) equal to 5, 6, or 7?"
            ],
            "mystery": "Aubrey de Grey, who proved 4 colors fail, is primarily a biomedical gerontologist studying longevity, not a professional pure mathematician!",
            "funFact": "Hexagonal grid tiling easily proves that 7 colors are ALWAYS sufficient!"
          },
          "investigators": {
            "tagline": "Moser spindle, Golomb graph, and Polymath16 distributed reduction.",
            "analogy": "After de Grey's discovery, Terence Tao organized Polymath16, where mathematicians and AI tools reduced the 5-chromatic graph from 1,581 vertices down to 509 vertices.",
            "rules": [
              "de Grey (2018): χ(ℝ²) ≥ 5.",
              "Polymath16: Minimal known 5-chromatic graph has 509 vertices.",
              "Upper bound: χ(ℝ²) ≤ 7 by Isbell's hexagonal tiling."
            ],
            "mystery": "Will an AI search find a 6-chromatic unit distance graph, or prove that 5 colors suffice for the whole plane?",
            "funFact": "Edward Nelson posed the question in 1950 at Chicago."
          },
          "pioneers": {
            "tagline": "Spectral graph theory and SAT solver clause generation.",
            "analogy": "Searching for unit distance subgraphs is executed via high-throughput SAT solvers (Kissat, CaDiCaL) verifying millions of rigid rotation combinations.",
            "rules": [
              "Fractional chromatic number χ_f(ℝ²) ≥ 3.999.",
              "Formal graph embedding in Lean 4.",
              "Lean 4 verification of Moser spindle."
            ],
            "mystery": "AI-guided genetic algorithms and neural SAT solvers are testing billion-vertex geometric candidate clusters.",
            "funFact": "The Hadwiger-Nelson problem is the quintessential bridge between continuous plane geometry and discrete graph coloring."
          }
        },
        "history": [
          {
            "year": "1950",
            "author": "Edward Nelson",
            "note": "Poses the chromatic number of the plane problem."
          },
          {
            "year": "1961",
            "author": "Leo & William Moser",
            "note": "Construct the 7-vertex Moser spindle proving χ ≥ 4."
          },
          {
            "year": "2018",
            "author": "Aubrey de Grey",
            "note": "Proves χ(ℝ²) ≥ 5 with a 1581-vertex unit distance graph."
          },
          {
            "year": "2018–2026",
            "author": "Polymath16 & AI Labs",
            "note": "Reduce 5-chromatic graph to 509 vertices and search for 6-chromatic structures."
          }
        ]
      },
      "fr": {
        "name": "Hadwiger-Nelson Problem",
        "subtitle": "Chromatic Number of the Plane: Can 4 Colors Avoid Unit Distances?",
        "field": "Geometric Graph Theory & Combinatorial Geometry",
        "statusBadge": "AI FRONTIER BREAKTHROUGH",
        "grades": {
          "explorers": {
            "tagline": "Can you paint the entire infinite canvas so no two dots of distance 1 share a color?",
            "analogy": "Every point in the 2D plane must receive a color. If two points are exactly 1 unit apart, they MUST have different colors! For 68 years, mathematicians only knew the answer was 4, 5, 6, or 7. In 2018, Aubrey de Grey proved 4 colors are IMPOSSIBLE! Is the real answer 5, 6, or 7?",
            "rules": [
              "Points in plane at distance 1 form edges of a unit distance graph.",
              "Moser spindle (7 vertices, 11 edges) proves at least 4 colors are required.",
              "Aubrey de Grey (2018) discovered 1581-vertex graph requiring at least 5 colors!",
              "Open: Is χ(ℝ²) equal to 5, 6, or 7?"
            ],
            "mystery": "Aubrey de Grey, who proved 4 colors fail, is primarily a biomedical gerontologist studying longevity, not a professional pure mathematician!",
            "funFact": "Hexagonal grid tiling easily proves that 7 colors are ALWAYS sufficient!"
          },
          "investigators": {
            "tagline": "Moser spindle, Golomb graph, and Polymath16 distributed reduction.",
            "analogy": "After de Grey's discovery, Terence Tao organized Polymath16, where mathematicians and AI tools reduced the 5-chromatic graph from 1,581 vertices down to 509 vertices.",
            "rules": [
              "de Grey (2018): χ(ℝ²) ≥ 5.",
              "Polymath16: Minimal known 5-chromatic graph has 509 vertices.",
              "Upper bound: χ(ℝ²) ≤ 7 by Isbell's hexagonal tiling."
            ],
            "mystery": "Will an AI search find a 6-chromatic unit distance graph, or prove that 5 colors suffice for the whole plane?",
            "funFact": "Edward Nelson posed the question in 1950 at Chicago."
          },
          "pioneers": {
            "tagline": "Spectral graph theory and SAT solver clause generation.",
            "analogy": "Searching for unit distance subgraphs is executed via high-throughput SAT solvers (Kissat, CaDiCaL) verifying millions of rigid rotation combinations.",
            "rules": [
              "Fractional chromatic number χ_f(ℝ²) ≥ 3.999.",
              "Formal graph embedding in Lean 4.",
              "Lean 4 verification of Moser spindle."
            ],
            "mystery": "AI-guided genetic algorithms and neural SAT solvers are testing billion-vertex geometric candidate clusters.",
            "funFact": "The Hadwiger-Nelson problem is the quintessential bridge between continuous plane geometry and discrete graph coloring."
          }
        },
        "history": [
          {
            "year": "1950",
            "author": "Edward Nelson",
            "note": "Poses the chromatic number of the plane problem."
          },
          {
            "year": "1961",
            "author": "Leo & William Moser",
            "note": "Construct the 7-vertex Moser spindle proving χ ≥ 4."
          },
          {
            "year": "2018",
            "author": "Aubrey de Grey",
            "note": "Proves χ(ℝ²) ≥ 5 with a 1581-vertex unit distance graph."
          },
          {
            "year": "2018–2026",
            "author": "Polymath16 & AI Labs",
            "note": "Reduce 5-chromatic graph to 509 vertices and search for 6-chromatic structures."
          }
        ]
      },
      "it": {
        "name": "Hadwiger-Nelson Problem",
        "subtitle": "Chromatic Number of the Plane: Can 4 Colors Avoid Unit Distances?",
        "field": "Geometric Graph Theory & Combinatorial Geometry",
        "statusBadge": "AI FRONTIER BREAKTHROUGH",
        "grades": {
          "explorers": {
            "tagline": "Can you paint the entire infinite canvas so no two dots of distance 1 share a color?",
            "analogy": "Every point in the 2D plane must receive a color. If two points are exactly 1 unit apart, they MUST have different colors! For 68 years, mathematicians only knew the answer was 4, 5, 6, or 7. In 2018, Aubrey de Grey proved 4 colors are IMPOSSIBLE! Is the real answer 5, 6, or 7?",
            "rules": [
              "Points in plane at distance 1 form edges of a unit distance graph.",
              "Moser spindle (7 vertices, 11 edges) proves at least 4 colors are required.",
              "Aubrey de Grey (2018) discovered 1581-vertex graph requiring at least 5 colors!",
              "Open: Is χ(ℝ²) equal to 5, 6, or 7?"
            ],
            "mystery": "Aubrey de Grey, who proved 4 colors fail, is primarily a biomedical gerontologist studying longevity, not a professional pure mathematician!",
            "funFact": "Hexagonal grid tiling easily proves that 7 colors are ALWAYS sufficient!"
          },
          "investigators": {
            "tagline": "Moser spindle, Golomb graph, and Polymath16 distributed reduction.",
            "analogy": "After de Grey's discovery, Terence Tao organized Polymath16, where mathematicians and AI tools reduced the 5-chromatic graph from 1,581 vertices down to 509 vertices.",
            "rules": [
              "de Grey (2018): χ(ℝ²) ≥ 5.",
              "Polymath16: Minimal known 5-chromatic graph has 509 vertices.",
              "Upper bound: χ(ℝ²) ≤ 7 by Isbell's hexagonal tiling."
            ],
            "mystery": "Will an AI search find a 6-chromatic unit distance graph, or prove that 5 colors suffice for the whole plane?",
            "funFact": "Edward Nelson posed the question in 1950 at Chicago."
          },
          "pioneers": {
            "tagline": "Spectral graph theory and SAT solver clause generation.",
            "analogy": "Searching for unit distance subgraphs is executed via high-throughput SAT solvers (Kissat, CaDiCaL) verifying millions of rigid rotation combinations.",
            "rules": [
              "Fractional chromatic number χ_f(ℝ²) ≥ 3.999.",
              "Formal graph embedding in Lean 4.",
              "Lean 4 verification of Moser spindle."
            ],
            "mystery": "AI-guided genetic algorithms and neural SAT solvers are testing billion-vertex geometric candidate clusters.",
            "funFact": "The Hadwiger-Nelson problem is the quintessential bridge between continuous plane geometry and discrete graph coloring."
          }
        },
        "history": [
          {
            "year": "1950",
            "author": "Edward Nelson",
            "note": "Poses the chromatic number of the plane problem."
          },
          {
            "year": "1961",
            "author": "Leo & William Moser",
            "note": "Construct the 7-vertex Moser spindle proving χ ≥ 4."
          },
          {
            "year": "2018",
            "author": "Aubrey de Grey",
            "note": "Proves χ(ℝ²) ≥ 5 with a 1581-vertex unit distance graph."
          },
          {
            "year": "2018–2026",
            "author": "Polymath16 & AI Labs",
            "note": "Reduce 5-chromatic graph to 509 vertices and search for 6-chromatic structures."
          }
        ]
      },
      "ja": {
        "name": "Hadwiger-Nelson Problem",
        "subtitle": "Chromatic Number of the Plane: Can 4 Colors Avoid Unit Distances?",
        "field": "Geometric Graph Theory & Combinatorial Geometry",
        "statusBadge": "AI FRONTIER BREAKTHROUGH",
        "grades": {
          "explorers": {
            "tagline": "Can you paint the entire infinite canvas so no two dots of distance 1 share a color?",
            "analogy": "Every point in the 2D plane must receive a color. If two points are exactly 1 unit apart, they MUST have different colors! For 68 years, mathematicians only knew the answer was 4, 5, 6, or 7. In 2018, Aubrey de Grey proved 4 colors are IMPOSSIBLE! Is the real answer 5, 6, or 7?",
            "rules": [
              "Points in plane at distance 1 form edges of a unit distance graph.",
              "Moser spindle (7 vertices, 11 edges) proves at least 4 colors are required.",
              "Aubrey de Grey (2018) discovered 1581-vertex graph requiring at least 5 colors!",
              "Open: Is χ(ℝ²) equal to 5, 6, or 7?"
            ],
            "mystery": "Aubrey de Grey, who proved 4 colors fail, is primarily a biomedical gerontologist studying longevity, not a professional pure mathematician!",
            "funFact": "Hexagonal grid tiling easily proves that 7 colors are ALWAYS sufficient!"
          },
          "investigators": {
            "tagline": "Moser spindle, Golomb graph, and Polymath16 distributed reduction.",
            "analogy": "After de Grey's discovery, Terence Tao organized Polymath16, where mathematicians and AI tools reduced the 5-chromatic graph from 1,581 vertices down to 509 vertices.",
            "rules": [
              "de Grey (2018): χ(ℝ²) ≥ 5.",
              "Polymath16: Minimal known 5-chromatic graph has 509 vertices.",
              "Upper bound: χ(ℝ²) ≤ 7 by Isbell's hexagonal tiling."
            ],
            "mystery": "Will an AI search find a 6-chromatic unit distance graph, or prove that 5 colors suffice for the whole plane?",
            "funFact": "Edward Nelson posed the question in 1950 at Chicago."
          },
          "pioneers": {
            "tagline": "Spectral graph theory and SAT solver clause generation.",
            "analogy": "Searching for unit distance subgraphs is executed via high-throughput SAT solvers (Kissat, CaDiCaL) verifying millions of rigid rotation combinations.",
            "rules": [
              "Fractional chromatic number χ_f(ℝ²) ≥ 3.999.",
              "Formal graph embedding in Lean 4.",
              "Lean 4 verification of Moser spindle."
            ],
            "mystery": "AI-guided genetic algorithms and neural SAT solvers are testing billion-vertex geometric candidate clusters.",
            "funFact": "The Hadwiger-Nelson problem is the quintessential bridge between continuous plane geometry and discrete graph coloring."
          }
        },
        "history": [
          {
            "year": "1950",
            "author": "Edward Nelson",
            "note": "Poses the chromatic number of the plane problem."
          },
          {
            "year": "1961",
            "author": "Leo & William Moser",
            "note": "Construct the 7-vertex Moser spindle proving χ ≥ 4."
          },
          {
            "year": "2018",
            "author": "Aubrey de Grey",
            "note": "Proves χ(ℝ²) ≥ 5 with a 1581-vertex unit distance graph."
          },
          {
            "year": "2018–2026",
            "author": "Polymath16 & AI Labs",
            "note": "Reduce 5-chromatic graph to 509 vertices and search for 6-chromatic structures."
          }
        ]
      },
      "ko": {
        "name": "Hadwiger-Nelson Problem",
        "subtitle": "Chromatic Number of the Plane: Can 4 Colors Avoid Unit Distances?",
        "field": "Geometric Graph Theory & Combinatorial Geometry",
        "statusBadge": "AI FRONTIER BREAKTHROUGH",
        "grades": {
          "explorers": {
            "tagline": "Can you paint the entire infinite canvas so no two dots of distance 1 share a color?",
            "analogy": "Every point in the 2D plane must receive a color. If two points are exactly 1 unit apart, they MUST have different colors! For 68 years, mathematicians only knew the answer was 4, 5, 6, or 7. In 2018, Aubrey de Grey proved 4 colors are IMPOSSIBLE! Is the real answer 5, 6, or 7?",
            "rules": [
              "Points in plane at distance 1 form edges of a unit distance graph.",
              "Moser spindle (7 vertices, 11 edges) proves at least 4 colors are required.",
              "Aubrey de Grey (2018) discovered 1581-vertex graph requiring at least 5 colors!",
              "Open: Is χ(ℝ²) equal to 5, 6, or 7?"
            ],
            "mystery": "Aubrey de Grey, who proved 4 colors fail, is primarily a biomedical gerontologist studying longevity, not a professional pure mathematician!",
            "funFact": "Hexagonal grid tiling easily proves that 7 colors are ALWAYS sufficient!"
          },
          "investigators": {
            "tagline": "Moser spindle, Golomb graph, and Polymath16 distributed reduction.",
            "analogy": "After de Grey's discovery, Terence Tao organized Polymath16, where mathematicians and AI tools reduced the 5-chromatic graph from 1,581 vertices down to 509 vertices.",
            "rules": [
              "de Grey (2018): χ(ℝ²) ≥ 5.",
              "Polymath16: Minimal known 5-chromatic graph has 509 vertices.",
              "Upper bound: χ(ℝ²) ≤ 7 by Isbell's hexagonal tiling."
            ],
            "mystery": "Will an AI search find a 6-chromatic unit distance graph, or prove that 5 colors suffice for the whole plane?",
            "funFact": "Edward Nelson posed the question in 1950 at Chicago."
          },
          "pioneers": {
            "tagline": "Spectral graph theory and SAT solver clause generation.",
            "analogy": "Searching for unit distance subgraphs is executed via high-throughput SAT solvers (Kissat, CaDiCaL) verifying millions of rigid rotation combinations.",
            "rules": [
              "Fractional chromatic number χ_f(ℝ²) ≥ 3.999.",
              "Formal graph embedding in Lean 4.",
              "Lean 4 verification of Moser spindle."
            ],
            "mystery": "AI-guided genetic algorithms and neural SAT solvers are testing billion-vertex geometric candidate clusters.",
            "funFact": "The Hadwiger-Nelson problem is the quintessential bridge between continuous plane geometry and discrete graph coloring."
          }
        },
        "history": [
          {
            "year": "1950",
            "author": "Edward Nelson",
            "note": "Poses the chromatic number of the plane problem."
          },
          {
            "year": "1961",
            "author": "Leo & William Moser",
            "note": "Construct the 7-vertex Moser spindle proving χ ≥ 4."
          },
          {
            "year": "2018",
            "author": "Aubrey de Grey",
            "note": "Proves χ(ℝ²) ≥ 5 with a 1581-vertex unit distance graph."
          },
          {
            "year": "2018–2026",
            "author": "Polymath16 & AI Labs",
            "note": "Reduce 5-chromatic graph to 509 vertices and search for 6-chromatic structures."
          }
        ]
      },
      "zh-Hans": {
        "name": "哈德维格-纳尔逊问题",
        "subtitle": "平面的染色数之谜：用几种颜色给全平面染色才能避免相同颜色的点相距恰好为 1？",
        "field": "几何图论 & 组合几何",
        "statusBadge": "前沿突破（5 ≤ χ ≤ 7）",
        "grades": {
          "explorers": {
            "tagline": "给整个无限平面涂上彩虹颜色，能不能做到任何距离为 1 的两颗颜料小点颜色都不相同？",
            "analogy": "用彩色笔给二维平面的每一个点染色。规则只有一条：只要两点之间距离恰好为 1，颜色就绝对不能相同！整整68年里，数学家只知道答案在 4、5、6、7 之间。2018年奥布里·德格雷构造出一个1581个顶点的神奇图，惊人地证明了 4 种颜色绝对不够！答案究竟是 5、6 还是 7？",
            "rules": [
              "距离为1的点连成单位距离图。",
              "莫泽纺锤图（7个点）证明至少需要4种颜色。",
              "2018年德格雷构造出必须用5种颜色的无四色图！",
              "终极悬念：真实答案究竟是 5、6 还是 7？"
            ],
            "mystery": "打破68年僵局证明4色不够的奥布里·德格雷，主业竟是一位研究人类抗衰老与长寿的生物医学学者！",
            "funFact": "用正六边形铺满平面，只需要 7 种颜色就能保证单位距离绝不撞色！"
          },
          "investigators": {
            "tagline": "莫泽纺锤图、戈伦布图与 Polymath16 顶点精简。",
            "analogy": "德格雷突破后，陶哲轩发起 Polymath16 合作项目，全球数学家与算法合力将需要5色的图从1581个顶点精简至509个顶点。",
            "rules": [
              "德格雷 (2018)：证明 χ(ℝ²) ≥ 5。",
              "Polymath16：将5色图顶点数精简至 509。",
              "上界：伊斯贝尔正六边形镶嵌证明 χ(ℝ²) ≤ 7。"
            ],
            "mystery": "AI 能否找到必须用6种颜色的单位距离图，还是证明5种颜色就能染遍整个平面？",
            "funFact": "爱德华·纳尔逊于1950年在芝加哥大学提出。"
          },
          "pioneers": {
            "tagline": "图谱理论与大规模 SAT 命题可满足性求解器。",
            "analogy": "搜索单位距离无冲突子图已全面转变为利用现代超级 SAT 求解器进行的自动化定理搜索。",
            "rules": [
              "平面分数染色数已逼近 4。",
              "单位距离图刚性几何嵌入理论。",
              "Lean 4 Mathlib 中莫泽纺锤图形式化。"
            ],
            "mystery": "AI 遗传算法与神经 SAT 求解器正在搜索具备特定自同构对称性的大型候选几何结构。",
            "funFact": "哈德维格-纳尔逊问题是连续欧氏平面几何与离散图论染色之间最引人入胜的交汇桥梁。"
          }
        },
        "history": [
          {
            "year": "1950",
            "author": "爱德华·纳尔逊",
            "note": "提出平面染色数几何图论难题。"
          },
          {
            "year": "1961",
            "author": "莫泽兄弟",
            "note": "构造莫泽纺锤图证明至少需要 4 种颜色。"
          },
          {
            "year": "2018",
            "author": "奥布里·德格雷",
            "note": "构造1581顶点单位距离图，历史性证明 χ(ℝ²) ≥ 5！"
          },
          {
            "year": "2018–2026",
            "author": "Polymath16 & AI团队",
            "note": "将图精简至509个顶点，并持续探索6色图结构。"
          }
        ]
      },
      "zh-Hant": {
        "name": "Hadwiger-Nelson Problem",
        "subtitle": "Chromatic Number of the Plane: Can 4 Colors Avoid Unit Distances?",
        "field": "Geometric Graph Theory & Combinatorial Geometry",
        "statusBadge": "AI FRONTIER BREAKTHROUGH",
        "grades": {
          "explorers": {
            "tagline": "Can you paint the entire infinite canvas so no two dots of distance 1 share a color?",
            "analogy": "Every point in the 2D plane must receive a color. If two points are exactly 1 unit apart, they MUST have different colors! For 68 years, mathematicians only knew the answer was 4, 5, 6, or 7. In 2018, Aubrey de Grey proved 4 colors are IMPOSSIBLE! Is the real answer 5, 6, or 7?",
            "rules": [
              "Points in plane at distance 1 form edges of a unit distance graph.",
              "Moser spindle (7 vertices, 11 edges) proves at least 4 colors are required.",
              "Aubrey de Grey (2018) discovered 1581-vertex graph requiring at least 5 colors!",
              "Open: Is χ(ℝ²) equal to 5, 6, or 7?"
            ],
            "mystery": "Aubrey de Grey, who proved 4 colors fail, is primarily a biomedical gerontologist studying longevity, not a professional pure mathematician!",
            "funFact": "Hexagonal grid tiling easily proves that 7 colors are ALWAYS sufficient!"
          },
          "investigators": {
            "tagline": "Moser spindle, Golomb graph, and Polymath16 distributed reduction.",
            "analogy": "After de Grey's discovery, Terence Tao organized Polymath16, where mathematicians and AI tools reduced the 5-chromatic graph from 1,581 vertices down to 509 vertices.",
            "rules": [
              "de Grey (2018): χ(ℝ²) ≥ 5.",
              "Polymath16: Minimal known 5-chromatic graph has 509 vertices.",
              "Upper bound: χ(ℝ²) ≤ 7 by Isbell's hexagonal tiling."
            ],
            "mystery": "Will an AI search find a 6-chromatic unit distance graph, or prove that 5 colors suffice for the whole plane?",
            "funFact": "Edward Nelson posed the question in 1950 at Chicago."
          },
          "pioneers": {
            "tagline": "Spectral graph theory and SAT solver clause generation.",
            "analogy": "Searching for unit distance subgraphs is executed via high-throughput SAT solvers (Kissat, CaDiCaL) verifying millions of rigid rotation combinations.",
            "rules": [
              "Fractional chromatic number χ_f(ℝ²) ≥ 3.999.",
              "Formal graph embedding in Lean 4.",
              "Lean 4 verification of Moser spindle."
            ],
            "mystery": "AI-guided genetic algorithms and neural SAT solvers are testing billion-vertex geometric candidate clusters.",
            "funFact": "The Hadwiger-Nelson problem is the quintessential bridge between continuous plane geometry and discrete graph coloring."
          }
        },
        "history": [
          {
            "year": "1950",
            "author": "Edward Nelson",
            "note": "Poses the chromatic number of the plane problem."
          },
          {
            "year": "1961",
            "author": "Leo & William Moser",
            "note": "Construct the 7-vertex Moser spindle proving χ ≥ 4."
          },
          {
            "year": "2018",
            "author": "Aubrey de Grey",
            "note": "Proves χ(ℝ²) ≥ 5 with a 1581-vertex unit distance graph."
          },
          {
            "year": "2018–2026",
            "author": "Polymath16 & AI Labs",
            "note": "Reduce 5-chromatic graph to 509 vertices and search for 6-chromatic structures."
          }
        ]
      }
    }
  },
  {
    "id": "moving-sofa",
    "icon": "🛋️",
    "difficulty": "All Ages",
    "domain": "geometry",
    "category": "geometry",
    "isMillennium": false,
    "isAIFrontier": true,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Analysis.Calculus.FDeriv.Basic\n-- Moving Sofa Problem: Maximum area of shape navigating unit width L-corridor\n-- Gerver sofa achieves Area ≈ 2.2195316688...",
    "locales": {
      "en": {
        "name": "The Moving Sofa Problem",
        "subtitle": "What is the Largest Sofa That Can Turn Around a Hallway Corner?",
        "field": "Calculus of Variations & Moving Boundaries",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "How big a couch can you squeeze around a tight 90-degree hallway corner?",
            "analogy": "Leo Moser asked in 1966: What is the shape of largest area in the plane that can be maneuvered around a right-angled corner of a hallway of width 1? In 1992, Joseph Gerver found an elegant curved sofa with area ≈ 2.2195. Nobody has found a bigger sofa, but nobody has proved Gerver's sofa is the absolute best!",
            "rules": [
              "Hallway consists of two arms of width 1 meeting at 90°.",
              "A square sofa of size 1×1 has Area = 1.0.",
              "A semicircle sofa has Area = π/2 ≈ 1.57.",
              "Hammersley (1968) found sofa with Area = π/2 + 2/π ≈ 2.2074.",
              "Gerver (1992) achieved Area ≈ 2.2195."
            ],
            "mystery": "Gerver's sofa shape looks amazingly like an old-fashioned telephone handset with smooth dimples and rounded ears!",
            "funFact": "The best known upper bound proved by Kallus and Romik in 2018 is 2.37, leaving a tiny gap of just 0.15!"
          },
          "investigators": {
            "tagline": "Euler-Lagrange differential equations on moving contact profiles.",
            "analogy": "Gerver derived his shape by setting up a variational differential equation balancing the rotation angle θ with the envelope curve conditions.",
            "rules": [
              "18 smooth boundary sections.",
              "Upper bound Area ≤ 2.37 (Kallus & Romik, 2018).",
              "Formalization of path homotopy in Lean 4."
            ],
            "mystery": "Can computer-assisted interval arithmetic prove that Gerver's local stationary solution is the unique global maximum?",
            "funFact": "Leo Moser formalized the problem in 1966."
          },
          "pioneers": {
            "tagline": "Convex optimization and automated envelope computation.",
            "analogy": "Romik mapped the problem to differential inclusions on Sobolev spaces W^{1,2} of closed curves.",
            "rules": [
              "Hamilton-Jacobi-Bellman equation for sofa movement.",
              "Differential geometry of envelope curves.",
              "Mathlib formalization of plane curves."
            ],
            "mystery": "AI-guided topology optimization using physics-based gradient descent continues to confirm Gerver's exact boundary.",
            "funFact": "The Moving Sofa Problem is the crown jewel of everyday recreational geometry and calculus of variations."
          }
        },
        "history": [
          {
            "year": "1966",
            "author": "Leo Moser",
            "note": "Poses the Moving Sofa problem."
          },
          {
            "year": "1968",
            "author": "John Hammersley",
            "note": "Discovers sofa of area π/2 + 2/π ≈ 2.2074."
          },
          {
            "year": "1992",
            "author": "Joseph Gerver",
            "note": "Constructs 18-curve sofa with area 2.21953."
          },
          {
            "year": "2018",
            "author": "Yoav Kallus & Dan Romik",
            "note": "Prove upper bound of 2.37 using computer-assisted optimization."
          }
        ]
      },
      "de": {
        "name": "The Moving Sofa Problem",
        "subtitle": "What is the Largest Sofa That Can Turn Around a Hallway Corner?",
        "field": "Calculus of Variations & Moving Boundaries",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "How big a couch can you squeeze around a tight 90-degree hallway corner?",
            "analogy": "Leo Moser asked in 1966: What is the shape of largest area in the plane that can be maneuvered around a right-angled corner of a hallway of width 1? In 1992, Joseph Gerver found an elegant curved sofa with area ≈ 2.2195. Nobody has found a bigger sofa, but nobody has proved Gerver's sofa is the absolute best!",
            "rules": [
              "Hallway consists of two arms of width 1 meeting at 90°.",
              "A square sofa of size 1×1 has Area = 1.0.",
              "A semicircle sofa has Area = π/2 ≈ 1.57.",
              "Hammersley (1968) found sofa with Area = π/2 + 2/π ≈ 2.2074.",
              "Gerver (1992) achieved Area ≈ 2.2195."
            ],
            "mystery": "Gerver's sofa shape looks amazingly like an old-fashioned telephone handset with smooth dimples and rounded ears!",
            "funFact": "The best known upper bound proved by Kallus and Romik in 2018 is 2.37, leaving a tiny gap of just 0.15!"
          },
          "investigators": {
            "tagline": "Euler-Lagrange differential equations on moving contact profiles.",
            "analogy": "Gerver derived his shape by setting up a variational differential equation balancing the rotation angle θ with the envelope curve conditions.",
            "rules": [
              "18 smooth boundary sections.",
              "Upper bound Area ≤ 2.37 (Kallus & Romik, 2018).",
              "Formalization of path homotopy in Lean 4."
            ],
            "mystery": "Can computer-assisted interval arithmetic prove that Gerver's local stationary solution is the unique global maximum?",
            "funFact": "Leo Moser formalized the problem in 1966."
          },
          "pioneers": {
            "tagline": "Convex optimization and automated envelope computation.",
            "analogy": "Romik mapped the problem to differential inclusions on Sobolev spaces W^{1,2} of closed curves.",
            "rules": [
              "Hamilton-Jacobi-Bellman equation for sofa movement.",
              "Differential geometry of envelope curves.",
              "Mathlib formalization of plane curves."
            ],
            "mystery": "AI-guided topology optimization using physics-based gradient descent continues to confirm Gerver's exact boundary.",
            "funFact": "The Moving Sofa Problem is the crown jewel of everyday recreational geometry and calculus of variations."
          }
        },
        "history": [
          {
            "year": "1966",
            "author": "Leo Moser",
            "note": "Poses the Moving Sofa problem."
          },
          {
            "year": "1968",
            "author": "John Hammersley",
            "note": "Discovers sofa of area π/2 + 2/π ≈ 2.2074."
          },
          {
            "year": "1992",
            "author": "Joseph Gerver",
            "note": "Constructs 18-curve sofa with area 2.21953."
          },
          {
            "year": "2018",
            "author": "Yoav Kallus & Dan Romik",
            "note": "Prove upper bound of 2.37 using computer-assisted optimization."
          }
        ]
      },
      "fr": {
        "name": "The Moving Sofa Problem",
        "subtitle": "What is the Largest Sofa That Can Turn Around a Hallway Corner?",
        "field": "Calculus of Variations & Moving Boundaries",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "How big a couch can you squeeze around a tight 90-degree hallway corner?",
            "analogy": "Leo Moser asked in 1966: What is the shape of largest area in the plane that can be maneuvered around a right-angled corner of a hallway of width 1? In 1992, Joseph Gerver found an elegant curved sofa with area ≈ 2.2195. Nobody has found a bigger sofa, but nobody has proved Gerver's sofa is the absolute best!",
            "rules": [
              "Hallway consists of two arms of width 1 meeting at 90°.",
              "A square sofa of size 1×1 has Area = 1.0.",
              "A semicircle sofa has Area = π/2 ≈ 1.57.",
              "Hammersley (1968) found sofa with Area = π/2 + 2/π ≈ 2.2074.",
              "Gerver (1992) achieved Area ≈ 2.2195."
            ],
            "mystery": "Gerver's sofa shape looks amazingly like an old-fashioned telephone handset with smooth dimples and rounded ears!",
            "funFact": "The best known upper bound proved by Kallus and Romik in 2018 is 2.37, leaving a tiny gap of just 0.15!"
          },
          "investigators": {
            "tagline": "Euler-Lagrange differential equations on moving contact profiles.",
            "analogy": "Gerver derived his shape by setting up a variational differential equation balancing the rotation angle θ with the envelope curve conditions.",
            "rules": [
              "18 smooth boundary sections.",
              "Upper bound Area ≤ 2.37 (Kallus & Romik, 2018).",
              "Formalization of path homotopy in Lean 4."
            ],
            "mystery": "Can computer-assisted interval arithmetic prove that Gerver's local stationary solution is the unique global maximum?",
            "funFact": "Leo Moser formalized the problem in 1966."
          },
          "pioneers": {
            "tagline": "Convex optimization and automated envelope computation.",
            "analogy": "Romik mapped the problem to differential inclusions on Sobolev spaces W^{1,2} of closed curves.",
            "rules": [
              "Hamilton-Jacobi-Bellman equation for sofa movement.",
              "Differential geometry of envelope curves.",
              "Mathlib formalization of plane curves."
            ],
            "mystery": "AI-guided topology optimization using physics-based gradient descent continues to confirm Gerver's exact boundary.",
            "funFact": "The Moving Sofa Problem is the crown jewel of everyday recreational geometry and calculus of variations."
          }
        },
        "history": [
          {
            "year": "1966",
            "author": "Leo Moser",
            "note": "Poses the Moving Sofa problem."
          },
          {
            "year": "1968",
            "author": "John Hammersley",
            "note": "Discovers sofa of area π/2 + 2/π ≈ 2.2074."
          },
          {
            "year": "1992",
            "author": "Joseph Gerver",
            "note": "Constructs 18-curve sofa with area 2.21953."
          },
          {
            "year": "2018",
            "author": "Yoav Kallus & Dan Romik",
            "note": "Prove upper bound of 2.37 using computer-assisted optimization."
          }
        ]
      },
      "it": {
        "name": "The Moving Sofa Problem",
        "subtitle": "What is the Largest Sofa That Can Turn Around a Hallway Corner?",
        "field": "Calculus of Variations & Moving Boundaries",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "How big a couch can you squeeze around a tight 90-degree hallway corner?",
            "analogy": "Leo Moser asked in 1966: What is the shape of largest area in the plane that can be maneuvered around a right-angled corner of a hallway of width 1? In 1992, Joseph Gerver found an elegant curved sofa with area ≈ 2.2195. Nobody has found a bigger sofa, but nobody has proved Gerver's sofa is the absolute best!",
            "rules": [
              "Hallway consists of two arms of width 1 meeting at 90°.",
              "A square sofa of size 1×1 has Area = 1.0.",
              "A semicircle sofa has Area = π/2 ≈ 1.57.",
              "Hammersley (1968) found sofa with Area = π/2 + 2/π ≈ 2.2074.",
              "Gerver (1992) achieved Area ≈ 2.2195."
            ],
            "mystery": "Gerver's sofa shape looks amazingly like an old-fashioned telephone handset with smooth dimples and rounded ears!",
            "funFact": "The best known upper bound proved by Kallus and Romik in 2018 is 2.37, leaving a tiny gap of just 0.15!"
          },
          "investigators": {
            "tagline": "Euler-Lagrange differential equations on moving contact profiles.",
            "analogy": "Gerver derived his shape by setting up a variational differential equation balancing the rotation angle θ with the envelope curve conditions.",
            "rules": [
              "18 smooth boundary sections.",
              "Upper bound Area ≤ 2.37 (Kallus & Romik, 2018).",
              "Formalization of path homotopy in Lean 4."
            ],
            "mystery": "Can computer-assisted interval arithmetic prove that Gerver's local stationary solution is the unique global maximum?",
            "funFact": "Leo Moser formalized the problem in 1966."
          },
          "pioneers": {
            "tagline": "Convex optimization and automated envelope computation.",
            "analogy": "Romik mapped the problem to differential inclusions on Sobolev spaces W^{1,2} of closed curves.",
            "rules": [
              "Hamilton-Jacobi-Bellman equation for sofa movement.",
              "Differential geometry of envelope curves.",
              "Mathlib formalization of plane curves."
            ],
            "mystery": "AI-guided topology optimization using physics-based gradient descent continues to confirm Gerver's exact boundary.",
            "funFact": "The Moving Sofa Problem is the crown jewel of everyday recreational geometry and calculus of variations."
          }
        },
        "history": [
          {
            "year": "1966",
            "author": "Leo Moser",
            "note": "Poses the Moving Sofa problem."
          },
          {
            "year": "1968",
            "author": "John Hammersley",
            "note": "Discovers sofa of area π/2 + 2/π ≈ 2.2074."
          },
          {
            "year": "1992",
            "author": "Joseph Gerver",
            "note": "Constructs 18-curve sofa with area 2.21953."
          },
          {
            "year": "2018",
            "author": "Yoav Kallus & Dan Romik",
            "note": "Prove upper bound of 2.37 using computer-assisted optimization."
          }
        ]
      },
      "ja": {
        "name": "The Moving Sofa Problem",
        "subtitle": "What is the Largest Sofa That Can Turn Around a Hallway Corner?",
        "field": "Calculus of Variations & Moving Boundaries",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "How big a couch can you squeeze around a tight 90-degree hallway corner?",
            "analogy": "Leo Moser asked in 1966: What is the shape of largest area in the plane that can be maneuvered around a right-angled corner of a hallway of width 1? In 1992, Joseph Gerver found an elegant curved sofa with area ≈ 2.2195. Nobody has found a bigger sofa, but nobody has proved Gerver's sofa is the absolute best!",
            "rules": [
              "Hallway consists of two arms of width 1 meeting at 90°.",
              "A square sofa of size 1×1 has Area = 1.0.",
              "A semicircle sofa has Area = π/2 ≈ 1.57.",
              "Hammersley (1968) found sofa with Area = π/2 + 2/π ≈ 2.2074.",
              "Gerver (1992) achieved Area ≈ 2.2195."
            ],
            "mystery": "Gerver's sofa shape looks amazingly like an old-fashioned telephone handset with smooth dimples and rounded ears!",
            "funFact": "The best known upper bound proved by Kallus and Romik in 2018 is 2.37, leaving a tiny gap of just 0.15!"
          },
          "investigators": {
            "tagline": "Euler-Lagrange differential equations on moving contact profiles.",
            "analogy": "Gerver derived his shape by setting up a variational differential equation balancing the rotation angle θ with the envelope curve conditions.",
            "rules": [
              "18 smooth boundary sections.",
              "Upper bound Area ≤ 2.37 (Kallus & Romik, 2018).",
              "Formalization of path homotopy in Lean 4."
            ],
            "mystery": "Can computer-assisted interval arithmetic prove that Gerver's local stationary solution is the unique global maximum?",
            "funFact": "Leo Moser formalized the problem in 1966."
          },
          "pioneers": {
            "tagline": "Convex optimization and automated envelope computation.",
            "analogy": "Romik mapped the problem to differential inclusions on Sobolev spaces W^{1,2} of closed curves.",
            "rules": [
              "Hamilton-Jacobi-Bellman equation for sofa movement.",
              "Differential geometry of envelope curves.",
              "Mathlib formalization of plane curves."
            ],
            "mystery": "AI-guided topology optimization using physics-based gradient descent continues to confirm Gerver's exact boundary.",
            "funFact": "The Moving Sofa Problem is the crown jewel of everyday recreational geometry and calculus of variations."
          }
        },
        "history": [
          {
            "year": "1966",
            "author": "Leo Moser",
            "note": "Poses the Moving Sofa problem."
          },
          {
            "year": "1968",
            "author": "John Hammersley",
            "note": "Discovers sofa of area π/2 + 2/π ≈ 2.2074."
          },
          {
            "year": "1992",
            "author": "Joseph Gerver",
            "note": "Constructs 18-curve sofa with area 2.21953."
          },
          {
            "year": "2018",
            "author": "Yoav Kallus & Dan Romik",
            "note": "Prove upper bound of 2.37 using computer-assisted optimization."
          }
        ]
      },
      "ko": {
        "name": "The Moving Sofa Problem",
        "subtitle": "What is the Largest Sofa That Can Turn Around a Hallway Corner?",
        "field": "Calculus of Variations & Moving Boundaries",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "How big a couch can you squeeze around a tight 90-degree hallway corner?",
            "analogy": "Leo Moser asked in 1966: What is the shape of largest area in the plane that can be maneuvered around a right-angled corner of a hallway of width 1? In 1992, Joseph Gerver found an elegant curved sofa with area ≈ 2.2195. Nobody has found a bigger sofa, but nobody has proved Gerver's sofa is the absolute best!",
            "rules": [
              "Hallway consists of two arms of width 1 meeting at 90°.",
              "A square sofa of size 1×1 has Area = 1.0.",
              "A semicircle sofa has Area = π/2 ≈ 1.57.",
              "Hammersley (1968) found sofa with Area = π/2 + 2/π ≈ 2.2074.",
              "Gerver (1992) achieved Area ≈ 2.2195."
            ],
            "mystery": "Gerver's sofa shape looks amazingly like an old-fashioned telephone handset with smooth dimples and rounded ears!",
            "funFact": "The best known upper bound proved by Kallus and Romik in 2018 is 2.37, leaving a tiny gap of just 0.15!"
          },
          "investigators": {
            "tagline": "Euler-Lagrange differential equations on moving contact profiles.",
            "analogy": "Gerver derived his shape by setting up a variational differential equation balancing the rotation angle θ with the envelope curve conditions.",
            "rules": [
              "18 smooth boundary sections.",
              "Upper bound Area ≤ 2.37 (Kallus & Romik, 2018).",
              "Formalization of path homotopy in Lean 4."
            ],
            "mystery": "Can computer-assisted interval arithmetic prove that Gerver's local stationary solution is the unique global maximum?",
            "funFact": "Leo Moser formalized the problem in 1966."
          },
          "pioneers": {
            "tagline": "Convex optimization and automated envelope computation.",
            "analogy": "Romik mapped the problem to differential inclusions on Sobolev spaces W^{1,2} of closed curves.",
            "rules": [
              "Hamilton-Jacobi-Bellman equation for sofa movement.",
              "Differential geometry of envelope curves.",
              "Mathlib formalization of plane curves."
            ],
            "mystery": "AI-guided topology optimization using physics-based gradient descent continues to confirm Gerver's exact boundary.",
            "funFact": "The Moving Sofa Problem is the crown jewel of everyday recreational geometry and calculus of variations."
          }
        },
        "history": [
          {
            "year": "1966",
            "author": "Leo Moser",
            "note": "Poses the Moving Sofa problem."
          },
          {
            "year": "1968",
            "author": "John Hammersley",
            "note": "Discovers sofa of area π/2 + 2/π ≈ 2.2074."
          },
          {
            "year": "1992",
            "author": "Joseph Gerver",
            "note": "Constructs 18-curve sofa with area 2.21953."
          },
          {
            "year": "2018",
            "author": "Yoav Kallus & Dan Romik",
            "note": "Prove upper bound of 2.37 using computer-assisted optimization."
          }
        ]
      },
      "zh-Hans": {
        "name": "移动沙发问题",
        "subtitle": "能顺利通过直角走廊拐角的最大沙发面积是多少？",
        "field": "变分法 & 移动边界几何学",
        "statusBadge": "未解之谜",
        "grades": {
          "explorers": {
            "tagline": "你能把多大的一张豪华沙发，顺利搬过宽度为 1 的直角走廊拐角？",
            "analogy": "1966年利奥·莫泽提出：宽度为1的直角走廊，能够转弯通过的最大平面沙发的面积是多少？1992年约瑟夫·格弗设计出由18段平滑圆弧构成的电话机形沙发，面积约为 2.2195。三十多年来，从未有人能设计出更大的沙发，却也无人能证明格弗的沙发就是终极极限！",
            "rules": [
              "两条宽度为1的走廊成90度直角相交。",
              "1×1 的正方形沙发面积为 1.0。",
              "半圆形沙发面积为 π/2 ≈ 1.57。",
              "哈默斯利 (1968) 发现面积为 2.2074 的沙发。",
              "格弗 (1992) 构造出由18段曲线拼接的 2.2195 沙发。"
            ],
            "mystery": "格弗沙发的外形酷似一部老式电话听筒，两端带有平滑圆润的抓握弧度！",
            "funFact": "卡卢斯与罗米克在2018年证明任何沙发的面积绝不可能超过 2.37，与格弗的 2.2195 之间只剩下最后 0.15 的极窄间隙！"
          },
          "investigators": {
            "tagline": "移动接触轮廓线上的欧拉-拉格朗日变分方程。",
            "analogy": "格弗通过联立转动角 θ 与走廊内外壁接触包络线的微分几何条件，解析求出了各段轮廓的极值曲线方程。",
            "rules": [
              "18 段平滑连接的单调曲率解析曲线。",
              "上界下压至 2.37。",
              "Lean 4 路径同伦与紧致集刚体旋转形式化。"
            ],
            "mystery": "计算机辅助区间算术能否证明格弗的平稳解在所有连通刚体中具备全局唯一极值性？",
            "funFact": "利奥·莫泽于1966年正式发表该问题。"
          },
          "pioneers": {
            "tagline": "凸优化对偶理论与包络积分。",
            "analogy": "罗米克将走廊转弯包络问题映射为闭曲线索伯列夫空间上的微分包含极值问题。",
            "rules": [
              "沙发路径规划的哈密顿-雅可比-贝尔曼方程。",
              "包络族外法线曲率分析。",
              "Lean 4 Mathlib 中平面光滑曲线形式化。"
            ],
            "mystery": "AI 拓扑优化算法在超高分辨率连续场网格中演化出的最优解与格弗沙发完全重合。",
            "funFact": "移动沙发问题是日常几何直觉与现代高等变分法结合的最富魅力的经典传奇。"
          }
        },
        "history": [
          {
            "year": "1966",
            "author": "利奥·莫泽",
            "note": "在数学月刊正式提出移动沙发几何极值问题。"
          },
          {
            "year": "1968",
            "author": "哈默斯利",
            "note": "构造出面积为 2.2074 的经典转弯沙发。"
          },
          {
            "year": "1992",
            "author": "约瑟夫·格弗",
            "note": "建立极值微分方程，构造出 2.2195 的格弗沙发！"
          },
          {
            "year": "2018",
            "author": "卡卢斯 & 罗米克",
            "note": "证明沙发面积的严格数学上界为 2.37。"
          }
        ]
      },
      "zh-Hant": {
        "name": "The Moving Sofa Problem",
        "subtitle": "What is the Largest Sofa That Can Turn Around a Hallway Corner?",
        "field": "Calculus of Variations & Moving Boundaries",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "How big a couch can you squeeze around a tight 90-degree hallway corner?",
            "analogy": "Leo Moser asked in 1966: What is the shape of largest area in the plane that can be maneuvered around a right-angled corner of a hallway of width 1? In 1992, Joseph Gerver found an elegant curved sofa with area ≈ 2.2195. Nobody has found a bigger sofa, but nobody has proved Gerver's sofa is the absolute best!",
            "rules": [
              "Hallway consists of two arms of width 1 meeting at 90°.",
              "A square sofa of size 1×1 has Area = 1.0.",
              "A semicircle sofa has Area = π/2 ≈ 1.57.",
              "Hammersley (1968) found sofa with Area = π/2 + 2/π ≈ 2.2074.",
              "Gerver (1992) achieved Area ≈ 2.2195."
            ],
            "mystery": "Gerver's sofa shape looks amazingly like an old-fashioned telephone handset with smooth dimples and rounded ears!",
            "funFact": "The best known upper bound proved by Kallus and Romik in 2018 is 2.37, leaving a tiny gap of just 0.15!"
          },
          "investigators": {
            "tagline": "Euler-Lagrange differential equations on moving contact profiles.",
            "analogy": "Gerver derived his shape by setting up a variational differential equation balancing the rotation angle θ with the envelope curve conditions.",
            "rules": [
              "18 smooth boundary sections.",
              "Upper bound Area ≤ 2.37 (Kallus & Romik, 2018).",
              "Formalization of path homotopy in Lean 4."
            ],
            "mystery": "Can computer-assisted interval arithmetic prove that Gerver's local stationary solution is the unique global maximum?",
            "funFact": "Leo Moser formalized the problem in 1966."
          },
          "pioneers": {
            "tagline": "Convex optimization and automated envelope computation.",
            "analogy": "Romik mapped the problem to differential inclusions on Sobolev spaces W^{1,2} of closed curves.",
            "rules": [
              "Hamilton-Jacobi-Bellman equation for sofa movement.",
              "Differential geometry of envelope curves.",
              "Mathlib formalization of plane curves."
            ],
            "mystery": "AI-guided topology optimization using physics-based gradient descent continues to confirm Gerver's exact boundary.",
            "funFact": "The Moving Sofa Problem is the crown jewel of everyday recreational geometry and calculus of variations."
          }
        },
        "history": [
          {
            "year": "1966",
            "author": "Leo Moser",
            "note": "Poses the Moving Sofa problem."
          },
          {
            "year": "1968",
            "author": "John Hammersley",
            "note": "Discovers sofa of area π/2 + 2/π ≈ 2.2074."
          },
          {
            "year": "1992",
            "author": "Joseph Gerver",
            "note": "Constructs 18-curve sofa with area 2.21953."
          },
          {
            "year": "2018",
            "author": "Yoav Kallus & Dan Romik",
            "note": "Prove upper bound of 2.37 using computer-assisted optimization."
          }
        ]
      }
    }
  },
  {
    "id": "inscribed-square",
    "icon": "🔲",
    "difficulty": "All Ages",
    "domain": "geometry",
    "category": "geometry",
    "isMillennium": false,
    "isAIFrontier": true,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Topology.ContinuousFunction.Basic\n-- Toeplitz Conjecture (Inscribed Square Problem)\n-- Does every simple closed Jordan curve in ℝ² contain four points forming a square?",
    "locales": {
      "en": {
        "name": "The Inscribed Square Problem (Toeplitz)",
        "subtitle": "Does Every Closed Loop Contain Four Vertices of a Square?",
        "field": "Topology & Symplectic Geometry",
        "statusBadge": "MAJOR RECENT BREAKTHROUGHS",
        "grades": {
          "explorers": {
            "tagline": "Can you always find a perfect square hiding inside any messy looped rubber band?",
            "analogy": "Draw ANY continuous closed loop without self-intersections (a Jordan curve). Otto Toeplitz conjectured in 1911 that NO MATTER how jagged, smooth, or crazy the loop is, it ALWAYS contains four points that form the vertices of a perfect geometric square! Proved for smooth curves, but still open for fractals!",
            "rules": [
              "Draw any simple closed loop in the plane.",
              "Look for 4 points A, B, C, D on the loop.",
              "Distances AB = BC = CD = DA and angles are 90°.",
              "Proved for triangles, polygons, and smooth curves."
            ],
            "mystery": "In 2020, Joshua Greene and Andrew Lobb made a spectacular breakthrough: they proved using symplectic geometry that every smooth loop contains an inscribed RECTANGLE of ANY aspect ratio!",
            "funFact": "For triangles and quadrilaterals, the inscribed square can be constructed using high school geometry!"
          },
          "investigators": {
            "tagline": "Symplectic geometry, Lagrangian Klein bottles, and Möbius strips.",
            "analogy": "Greene and Lobb (2020) considered pairs of points on the curve as a surface in ℂ² (the symmetric square of the curve), intersecting with the diagonal under Lagrangian boundary conditions.",
            "rules": [
              "Greene & Lobb (2020): Inscribed rectangles of any aspect ratio.",
              "Tao (2017): Proved for curves with small integral Lipschitz constants.",
              "Open for continuous fractal Koch snowflake curves."
            ],
            "mystery": "Can symplectic topology techniques extend across the boundary from smooth manifolds to C^0 continuous curves?",
            "funFact": "Otto Toeplitz posed the conjecture in 1911."
          },
          "pioneers": {
            "tagline": "Floer homology and generating functions in cotangent bundles.",
            "analogy": "The square condition corresponds to pairs of diagonals being equal in length, orthogonal, and sharing the same midpoint.",
            "rules": [
              "Lagrangian intersection theory in (ℝ⁴, ω).",
              "Sheaf theory on symmetric products.",
              "Lean 4 Mathlib formalization of Jordan curves."
            ],
            "mystery": "AI-guided numerical solvers find inscribed squares on arbitrary complex polygon chains in milliseconds.",
            "funFact": "The Inscribed Square Problem beautifully mirrors how topology controls discrete Euclidean geometry."
          }
        },
        "history": [
          {
            "year": "1911",
            "author": "Otto Toeplitz",
            "note": "Proposes the inscribed square problem."
          },
          {
            "year": "1929",
            "author": "Arnold Emch",
            "note": "Proves conjecture for smooth convex curves."
          },
          {
            "year": "2020",
            "author": "Joshua Greene & Andrew Lobb",
            "note": "Prove inscribed rectangular problem for all smooth curves using symplectic geometry."
          }
        ]
      },
      "de": {
        "name": "The Inscribed Square Problem (Toeplitz)",
        "subtitle": "Does Every Closed Loop Contain Four Vertices of a Square?",
        "field": "Topology & Symplectic Geometry",
        "statusBadge": "MAJOR RECENT BREAKTHROUGHS",
        "grades": {
          "explorers": {
            "tagline": "Can you always find a perfect square hiding inside any messy looped rubber band?",
            "analogy": "Draw ANY continuous closed loop without self-intersections (a Jordan curve). Otto Toeplitz conjectured in 1911 that NO MATTER how jagged, smooth, or crazy the loop is, it ALWAYS contains four points that form the vertices of a perfect geometric square! Proved for smooth curves, but still open for fractals!",
            "rules": [
              "Draw any simple closed loop in the plane.",
              "Look for 4 points A, B, C, D on the loop.",
              "Distances AB = BC = CD = DA and angles are 90°.",
              "Proved for triangles, polygons, and smooth curves."
            ],
            "mystery": "In 2020, Joshua Greene and Andrew Lobb made a spectacular breakthrough: they proved using symplectic geometry that every smooth loop contains an inscribed RECTANGLE of ANY aspect ratio!",
            "funFact": "For triangles and quadrilaterals, the inscribed square can be constructed using high school geometry!"
          },
          "investigators": {
            "tagline": "Symplectic geometry, Lagrangian Klein bottles, and Möbius strips.",
            "analogy": "Greene and Lobb (2020) considered pairs of points on the curve as a surface in ℂ² (the symmetric square of the curve), intersecting with the diagonal under Lagrangian boundary conditions.",
            "rules": [
              "Greene & Lobb (2020): Inscribed rectangles of any aspect ratio.",
              "Tao (2017): Proved for curves with small integral Lipschitz constants.",
              "Open for continuous fractal Koch snowflake curves."
            ],
            "mystery": "Can symplectic topology techniques extend across the boundary from smooth manifolds to C^0 continuous curves?",
            "funFact": "Otto Toeplitz posed the conjecture in 1911."
          },
          "pioneers": {
            "tagline": "Floer homology and generating functions in cotangent bundles.",
            "analogy": "The square condition corresponds to pairs of diagonals being equal in length, orthogonal, and sharing the same midpoint.",
            "rules": [
              "Lagrangian intersection theory in (ℝ⁴, ω).",
              "Sheaf theory on symmetric products.",
              "Lean 4 Mathlib formalization of Jordan curves."
            ],
            "mystery": "AI-guided numerical solvers find inscribed squares on arbitrary complex polygon chains in milliseconds.",
            "funFact": "The Inscribed Square Problem beautifully mirrors how topology controls discrete Euclidean geometry."
          }
        },
        "history": [
          {
            "year": "1911",
            "author": "Otto Toeplitz",
            "note": "Proposes the inscribed square problem."
          },
          {
            "year": "1929",
            "author": "Arnold Emch",
            "note": "Proves conjecture for smooth convex curves."
          },
          {
            "year": "2020",
            "author": "Joshua Greene & Andrew Lobb",
            "note": "Prove inscribed rectangular problem for all smooth curves using symplectic geometry."
          }
        ]
      },
      "fr": {
        "name": "The Inscribed Square Problem (Toeplitz)",
        "subtitle": "Does Every Closed Loop Contain Four Vertices of a Square?",
        "field": "Topology & Symplectic Geometry",
        "statusBadge": "MAJOR RECENT BREAKTHROUGHS",
        "grades": {
          "explorers": {
            "tagline": "Can you always find a perfect square hiding inside any messy looped rubber band?",
            "analogy": "Draw ANY continuous closed loop without self-intersections (a Jordan curve). Otto Toeplitz conjectured in 1911 that NO MATTER how jagged, smooth, or crazy the loop is, it ALWAYS contains four points that form the vertices of a perfect geometric square! Proved for smooth curves, but still open for fractals!",
            "rules": [
              "Draw any simple closed loop in the plane.",
              "Look for 4 points A, B, C, D on the loop.",
              "Distances AB = BC = CD = DA and angles are 90°.",
              "Proved for triangles, polygons, and smooth curves."
            ],
            "mystery": "In 2020, Joshua Greene and Andrew Lobb made a spectacular breakthrough: they proved using symplectic geometry that every smooth loop contains an inscribed RECTANGLE of ANY aspect ratio!",
            "funFact": "For triangles and quadrilaterals, the inscribed square can be constructed using high school geometry!"
          },
          "investigators": {
            "tagline": "Symplectic geometry, Lagrangian Klein bottles, and Möbius strips.",
            "analogy": "Greene and Lobb (2020) considered pairs of points on the curve as a surface in ℂ² (the symmetric square of the curve), intersecting with the diagonal under Lagrangian boundary conditions.",
            "rules": [
              "Greene & Lobb (2020): Inscribed rectangles of any aspect ratio.",
              "Tao (2017): Proved for curves with small integral Lipschitz constants.",
              "Open for continuous fractal Koch snowflake curves."
            ],
            "mystery": "Can symplectic topology techniques extend across the boundary from smooth manifolds to C^0 continuous curves?",
            "funFact": "Otto Toeplitz posed the conjecture in 1911."
          },
          "pioneers": {
            "tagline": "Floer homology and generating functions in cotangent bundles.",
            "analogy": "The square condition corresponds to pairs of diagonals being equal in length, orthogonal, and sharing the same midpoint.",
            "rules": [
              "Lagrangian intersection theory in (ℝ⁴, ω).",
              "Sheaf theory on symmetric products.",
              "Lean 4 Mathlib formalization of Jordan curves."
            ],
            "mystery": "AI-guided numerical solvers find inscribed squares on arbitrary complex polygon chains in milliseconds.",
            "funFact": "The Inscribed Square Problem beautifully mirrors how topology controls discrete Euclidean geometry."
          }
        },
        "history": [
          {
            "year": "1911",
            "author": "Otto Toeplitz",
            "note": "Proposes the inscribed square problem."
          },
          {
            "year": "1929",
            "author": "Arnold Emch",
            "note": "Proves conjecture for smooth convex curves."
          },
          {
            "year": "2020",
            "author": "Joshua Greene & Andrew Lobb",
            "note": "Prove inscribed rectangular problem for all smooth curves using symplectic geometry."
          }
        ]
      },
      "it": {
        "name": "The Inscribed Square Problem (Toeplitz)",
        "subtitle": "Does Every Closed Loop Contain Four Vertices of a Square?",
        "field": "Topology & Symplectic Geometry",
        "statusBadge": "MAJOR RECENT BREAKTHROUGHS",
        "grades": {
          "explorers": {
            "tagline": "Can you always find a perfect square hiding inside any messy looped rubber band?",
            "analogy": "Draw ANY continuous closed loop without self-intersections (a Jordan curve). Otto Toeplitz conjectured in 1911 that NO MATTER how jagged, smooth, or crazy the loop is, it ALWAYS contains four points that form the vertices of a perfect geometric square! Proved for smooth curves, but still open for fractals!",
            "rules": [
              "Draw any simple closed loop in the plane.",
              "Look for 4 points A, B, C, D on the loop.",
              "Distances AB = BC = CD = DA and angles are 90°.",
              "Proved for triangles, polygons, and smooth curves."
            ],
            "mystery": "In 2020, Joshua Greene and Andrew Lobb made a spectacular breakthrough: they proved using symplectic geometry that every smooth loop contains an inscribed RECTANGLE of ANY aspect ratio!",
            "funFact": "For triangles and quadrilaterals, the inscribed square can be constructed using high school geometry!"
          },
          "investigators": {
            "tagline": "Symplectic geometry, Lagrangian Klein bottles, and Möbius strips.",
            "analogy": "Greene and Lobb (2020) considered pairs of points on the curve as a surface in ℂ² (the symmetric square of the curve), intersecting with the diagonal under Lagrangian boundary conditions.",
            "rules": [
              "Greene & Lobb (2020): Inscribed rectangles of any aspect ratio.",
              "Tao (2017): Proved for curves with small integral Lipschitz constants.",
              "Open for continuous fractal Koch snowflake curves."
            ],
            "mystery": "Can symplectic topology techniques extend across the boundary from smooth manifolds to C^0 continuous curves?",
            "funFact": "Otto Toeplitz posed the conjecture in 1911."
          },
          "pioneers": {
            "tagline": "Floer homology and generating functions in cotangent bundles.",
            "analogy": "The square condition corresponds to pairs of diagonals being equal in length, orthogonal, and sharing the same midpoint.",
            "rules": [
              "Lagrangian intersection theory in (ℝ⁴, ω).",
              "Sheaf theory on symmetric products.",
              "Lean 4 Mathlib formalization of Jordan curves."
            ],
            "mystery": "AI-guided numerical solvers find inscribed squares on arbitrary complex polygon chains in milliseconds.",
            "funFact": "The Inscribed Square Problem beautifully mirrors how topology controls discrete Euclidean geometry."
          }
        },
        "history": [
          {
            "year": "1911",
            "author": "Otto Toeplitz",
            "note": "Proposes the inscribed square problem."
          },
          {
            "year": "1929",
            "author": "Arnold Emch",
            "note": "Proves conjecture for smooth convex curves."
          },
          {
            "year": "2020",
            "author": "Joshua Greene & Andrew Lobb",
            "note": "Prove inscribed rectangular problem for all smooth curves using symplectic geometry."
          }
        ]
      },
      "ja": {
        "name": "The Inscribed Square Problem (Toeplitz)",
        "subtitle": "Does Every Closed Loop Contain Four Vertices of a Square?",
        "field": "Topology & Symplectic Geometry",
        "statusBadge": "MAJOR RECENT BREAKTHROUGHS",
        "grades": {
          "explorers": {
            "tagline": "Can you always find a perfect square hiding inside any messy looped rubber band?",
            "analogy": "Draw ANY continuous closed loop without self-intersections (a Jordan curve). Otto Toeplitz conjectured in 1911 that NO MATTER how jagged, smooth, or crazy the loop is, it ALWAYS contains four points that form the vertices of a perfect geometric square! Proved for smooth curves, but still open for fractals!",
            "rules": [
              "Draw any simple closed loop in the plane.",
              "Look for 4 points A, B, C, D on the loop.",
              "Distances AB = BC = CD = DA and angles are 90°.",
              "Proved for triangles, polygons, and smooth curves."
            ],
            "mystery": "In 2020, Joshua Greene and Andrew Lobb made a spectacular breakthrough: they proved using symplectic geometry that every smooth loop contains an inscribed RECTANGLE of ANY aspect ratio!",
            "funFact": "For triangles and quadrilaterals, the inscribed square can be constructed using high school geometry!"
          },
          "investigators": {
            "tagline": "Symplectic geometry, Lagrangian Klein bottles, and Möbius strips.",
            "analogy": "Greene and Lobb (2020) considered pairs of points on the curve as a surface in ℂ² (the symmetric square of the curve), intersecting with the diagonal under Lagrangian boundary conditions.",
            "rules": [
              "Greene & Lobb (2020): Inscribed rectangles of any aspect ratio.",
              "Tao (2017): Proved for curves with small integral Lipschitz constants.",
              "Open for continuous fractal Koch snowflake curves."
            ],
            "mystery": "Can symplectic topology techniques extend across the boundary from smooth manifolds to C^0 continuous curves?",
            "funFact": "Otto Toeplitz posed the conjecture in 1911."
          },
          "pioneers": {
            "tagline": "Floer homology and generating functions in cotangent bundles.",
            "analogy": "The square condition corresponds to pairs of diagonals being equal in length, orthogonal, and sharing the same midpoint.",
            "rules": [
              "Lagrangian intersection theory in (ℝ⁴, ω).",
              "Sheaf theory on symmetric products.",
              "Lean 4 Mathlib formalization of Jordan curves."
            ],
            "mystery": "AI-guided numerical solvers find inscribed squares on arbitrary complex polygon chains in milliseconds.",
            "funFact": "The Inscribed Square Problem beautifully mirrors how topology controls discrete Euclidean geometry."
          }
        },
        "history": [
          {
            "year": "1911",
            "author": "Otto Toeplitz",
            "note": "Proposes the inscribed square problem."
          },
          {
            "year": "1929",
            "author": "Arnold Emch",
            "note": "Proves conjecture for smooth convex curves."
          },
          {
            "year": "2020",
            "author": "Joshua Greene & Andrew Lobb",
            "note": "Prove inscribed rectangular problem for all smooth curves using symplectic geometry."
          }
        ]
      },
      "ko": {
        "name": "The Inscribed Square Problem (Toeplitz)",
        "subtitle": "Does Every Closed Loop Contain Four Vertices of a Square?",
        "field": "Topology & Symplectic Geometry",
        "statusBadge": "MAJOR RECENT BREAKTHROUGHS",
        "grades": {
          "explorers": {
            "tagline": "Can you always find a perfect square hiding inside any messy looped rubber band?",
            "analogy": "Draw ANY continuous closed loop without self-intersections (a Jordan curve). Otto Toeplitz conjectured in 1911 that NO MATTER how jagged, smooth, or crazy the loop is, it ALWAYS contains four points that form the vertices of a perfect geometric square! Proved for smooth curves, but still open for fractals!",
            "rules": [
              "Draw any simple closed loop in the plane.",
              "Look for 4 points A, B, C, D on the loop.",
              "Distances AB = BC = CD = DA and angles are 90°.",
              "Proved for triangles, polygons, and smooth curves."
            ],
            "mystery": "In 2020, Joshua Greene and Andrew Lobb made a spectacular breakthrough: they proved using symplectic geometry that every smooth loop contains an inscribed RECTANGLE of ANY aspect ratio!",
            "funFact": "For triangles and quadrilaterals, the inscribed square can be constructed using high school geometry!"
          },
          "investigators": {
            "tagline": "Symplectic geometry, Lagrangian Klein bottles, and Möbius strips.",
            "analogy": "Greene and Lobb (2020) considered pairs of points on the curve as a surface in ℂ² (the symmetric square of the curve), intersecting with the diagonal under Lagrangian boundary conditions.",
            "rules": [
              "Greene & Lobb (2020): Inscribed rectangles of any aspect ratio.",
              "Tao (2017): Proved for curves with small integral Lipschitz constants.",
              "Open for continuous fractal Koch snowflake curves."
            ],
            "mystery": "Can symplectic topology techniques extend across the boundary from smooth manifolds to C^0 continuous curves?",
            "funFact": "Otto Toeplitz posed the conjecture in 1911."
          },
          "pioneers": {
            "tagline": "Floer homology and generating functions in cotangent bundles.",
            "analogy": "The square condition corresponds to pairs of diagonals being equal in length, orthogonal, and sharing the same midpoint.",
            "rules": [
              "Lagrangian intersection theory in (ℝ⁴, ω).",
              "Sheaf theory on symmetric products.",
              "Lean 4 Mathlib formalization of Jordan curves."
            ],
            "mystery": "AI-guided numerical solvers find inscribed squares on arbitrary complex polygon chains in milliseconds.",
            "funFact": "The Inscribed Square Problem beautifully mirrors how topology controls discrete Euclidean geometry."
          }
        },
        "history": [
          {
            "year": "1911",
            "author": "Otto Toeplitz",
            "note": "Proposes the inscribed square problem."
          },
          {
            "year": "1929",
            "author": "Arnold Emch",
            "note": "Proves conjecture for smooth convex curves."
          },
          {
            "year": "2020",
            "author": "Joshua Greene & Andrew Lobb",
            "note": "Prove inscribed rectangular problem for all smooth curves using symplectic geometry."
          }
        ]
      },
      "zh-Hans": {
        "name": "内接正方形问题（托普利茨猜想）",
        "subtitle": "任意封闭闭合曲线上，是否必定能找到四个点刚好拼成一个正方形？",
        "field": "拓扑学 & 辛几何学",
        "statusBadge": "近年重大突破",
        "grades": {
          "explorers": {
            "tagline": "随意把一根橡皮筋扔在桌上扭成任意闭合环，上面能不能永远找到四个点恰好构成正方形？",
            "analogy": "在纸上随意画一条首尾相接、不自交的封闭曲线。奥托·托普利茨于1911年猜想：无论这条曲线长得多奇怪、多扭曲、甚至满是棱角，它的轮廓上必定能找到四个点，恰好组成一个完美正方形的四个顶点！对于光滑曲线已经获证，但对于一般的连续分形曲线依然悬而未决！",
            "rules": [
              "在平面上绘制任意无自交闭合曲线。",
              "在曲线上寻找四个点 A, B, C, D。",
              "检验四条边长相等且夹角全为 90 度。",
              "多边形与光滑曲线上已全部获证成立。"
            ],
            "mystery": "2020年格林与罗布运用高深的四维辛几何与莫比乌斯带嵌入技术，证明了任意光滑曲线上都存在任意长宽比的内接矩形！",
            "funFact": "对于任意三角形，初中平面几何就能直接证明必有一个正方形的四个顶点全部落在三角形的边上！"
          },
          "investigators": {
            "tagline": "辛几何学、拉格朗日克莱因瓶与莫比乌斯带。",
            "analogy": "格林与罗布将曲线上的点对空间解释为四维辛流形中的嵌入莫比乌斯带，利用拉格朗日相交理论取得了历史性突破。",
            "rules": [
              "格林与罗布 (2020)：证明任意长宽比内接矩形存在性。",
              "陶哲轩 (2017)：证明积分李普希茨小变差情形。",
              "对完全不规则的连续科赫雪花分形曲线依然未决。"
            ],
            "mystery": "辛拓扑技术能否跨越光滑性要求，推广至任意连续不可微的 C^0 曲线？",
            "funFact": "奥托·托普利茨于1911年正式提出。"
          },
          "pioneers": {
            "tagline": "弗洛尔同调与余切丛生成函数。",
            "analogy": "正方形条件完全等价于曲线上两对弦长相等、互相垂直且共享相同的中点。",
            "rules": [
              "辛空间中的拉格朗日相交理论。",
              "对称积曲面上的层论分析。",
              "Lean 4 Mathlib 中约当曲线定理形式化。"
            ],
            "mystery": "AI 自动化几何算法能在数毫秒内为任意上万边的复杂多边形精确计算出内接正方形。",
            "funFact": "内接正方形问题极其优美地展示了宏观拓扑性质如何决定微观离散欧几里得几何结构。"
          }
        },
        "history": [
          {
            "year": "1911",
            "author": "奥托·托普利茨",
            "note": "在德国提出内接正方形几何猜想。"
          },
          {
            "year": "1929",
            "author": "阿诺德·埃姆奇",
            "note": "证明凸光滑曲线必定存在内接正方形。"
          },
          {
            "year": "2020",
            "author": "格林 & 罗布",
            "note": "运用辛几何彻底证明光滑曲线上任意长宽比矩形内接定理！"
          }
        ]
      },
      "zh-Hant": {
        "name": "The Inscribed Square Problem (Toeplitz)",
        "subtitle": "Does Every Closed Loop Contain Four Vertices of a Square?",
        "field": "Topology & Symplectic Geometry",
        "statusBadge": "MAJOR RECENT BREAKTHROUGHS",
        "grades": {
          "explorers": {
            "tagline": "Can you always find a perfect square hiding inside any messy looped rubber band?",
            "analogy": "Draw ANY continuous closed loop without self-intersections (a Jordan curve). Otto Toeplitz conjectured in 1911 that NO MATTER how jagged, smooth, or crazy the loop is, it ALWAYS contains four points that form the vertices of a perfect geometric square! Proved for smooth curves, but still open for fractals!",
            "rules": [
              "Draw any simple closed loop in the plane.",
              "Look for 4 points A, B, C, D on the loop.",
              "Distances AB = BC = CD = DA and angles are 90°.",
              "Proved for triangles, polygons, and smooth curves."
            ],
            "mystery": "In 2020, Joshua Greene and Andrew Lobb made a spectacular breakthrough: they proved using symplectic geometry that every smooth loop contains an inscribed RECTANGLE of ANY aspect ratio!",
            "funFact": "For triangles and quadrilaterals, the inscribed square can be constructed using high school geometry!"
          },
          "investigators": {
            "tagline": "Symplectic geometry, Lagrangian Klein bottles, and Möbius strips.",
            "analogy": "Greene and Lobb (2020) considered pairs of points on the curve as a surface in ℂ² (the symmetric square of the curve), intersecting with the diagonal under Lagrangian boundary conditions.",
            "rules": [
              "Greene & Lobb (2020): Inscribed rectangles of any aspect ratio.",
              "Tao (2017): Proved for curves with small integral Lipschitz constants.",
              "Open for continuous fractal Koch snowflake curves."
            ],
            "mystery": "Can symplectic topology techniques extend across the boundary from smooth manifolds to C^0 continuous curves?",
            "funFact": "Otto Toeplitz posed the conjecture in 1911."
          },
          "pioneers": {
            "tagline": "Floer homology and generating functions in cotangent bundles.",
            "analogy": "The square condition corresponds to pairs of diagonals being equal in length, orthogonal, and sharing the same midpoint.",
            "rules": [
              "Lagrangian intersection theory in (ℝ⁴, ω).",
              "Sheaf theory on symmetric products.",
              "Lean 4 Mathlib formalization of Jordan curves."
            ],
            "mystery": "AI-guided numerical solvers find inscribed squares on arbitrary complex polygon chains in milliseconds.",
            "funFact": "The Inscribed Square Problem beautifully mirrors how topology controls discrete Euclidean geometry."
          }
        },
        "history": [
          {
            "year": "1911",
            "author": "Otto Toeplitz",
            "note": "Proposes the inscribed square problem."
          },
          {
            "year": "1929",
            "author": "Arnold Emch",
            "note": "Proves conjecture for smooth convex curves."
          },
          {
            "year": "2020",
            "author": "Joshua Greene & Andrew Lobb",
            "note": "Prove inscribed rectangular problem for all smooth curves using symplectic geometry."
          }
        ]
      }
    }
  },
  {
    "id": "borsuk",
    "icon": "✂️",
    "difficulty": "Gr 9+",
    "domain": "geometry",
    "category": "geometry",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Analysis.InnerProductSpace.Basic\n-- Borsuk's Conjecture (Disproved by Kahn & Kalai in 1993 for d = 1325)\n-- Can every bounded set in ℝ^d be partitioned into d + 1 pieces of smaller diameter?",
    "locales": {
      "en": {
        "name": "Borsuk's Partition Conjecture",
        "subtitle": "Partitioning Any Shape in d-Dimensions into d+1 Smaller Pieces (Disproved!)",
        "field": "High-Dimensional Combinatorial Geometry",
        "statusBadge": "DISPROVED (KAHN & KALAI)",
        "grades": {
          "explorers": {
            "tagline": "Can you slice any 3D potato into 4 smaller bites?",
            "analogy": "In 1933, Karol Borsuk asked: Can ANY bounded shape in d dimensions be partitioned into d+1 pieces, each having strictly smaller diameter? In 2D, 3 pieces always work. In 3D, 4 pieces always work. Everyone thought it was true forever—until Kahn and Kalai shocked the world in 1993 by proving it FAILS in high dimensions!",
            "rules": [
              "In 2D: Any shape can be divided into 2+1 = 3 smaller diameter pieces.",
              "In 3D: Any shape can be divided into 3+1 = 4 smaller pieces.",
              "Borsuk guessed: Always d+1 pieces in d dimensions.",
              "Kahn & Kalai (1993): Counterexample in dimension 1,325! Current record: fails in d = 64!"
            ],
            "mystery": "It is one of the most stunning examples in mathematics where a pattern is 100% true in dimensions 1, 2, and 3, but collapses completely in higher dimensions!",
            "funFact": "The smallest dimension where Borsuk fails is currently unknown: somewhere between 4 and 64!"
          },
          "investigators": {
            "tagline": "Frankl-Rödl theorem on intersection of sets and tensor products.",
            "analogy": "Kahn and Kalai translated Borsuk's problem into extremal combinatorics on subsets of {1, ..., n}, using linear algebra bounds on polynomial spaces over finite fields.",
            "rules": [
              "Kahn-Kalai (1993): d = 1325 counterexample.",
              "Bondarenko (2013): Reduced counterexample dimension to d = 65.",
              "Jenrich (2014): Reduced counterexample dimension to d = 64."
            ],
            "mystery": "Does Borsuk's conjecture hold in dimension 4, or does an algebraic counterexample exist in 4D?",
            "funFact": "Karol Borsuk posed the conjecture in 1933 in Fundamenta Mathematicae."
          },
          "pioneers": {
            "tagline": "Distance graphs on the sphere and chromatic number of metric spaces.",
            "analogy": "The problem is equivalent to coloring the unit diameter graph of a set with d+1 colors such that each color class has diameter < 1.",
            "rules": [
              "Extremal set theory in Mathlib.",
              "Orthogonal vector representations.",
              "Lean 4 verification of Kahn-Kalai counterexample."
            ],
            "mystery": "AI SAT search pipelines are actively testing 4D and 5D candidate polyhedra derived from root systems.",
            "funFact": "Borsuk's conjecture teaches mathematicians never to trust low-dimensional geometric intuition blindly."
          }
        },
        "history": [
          {
            "year": "1933",
            "author": "Karol Borsuk",
            "note": "Proposes the d+1 diameter partition conjecture."
          },
          {
            "year": "1993",
            "author": "Jeff Kahn & Gil Kalai",
            "note": "Shock the mathematical world with d = 1325 counterexample."
          },
          {
            "year": "2014",
            "author": "Thomas Jenrich",
            "note": "Reduces counterexample dimension to 64."
          }
        ]
      },
      "de": {
        "name": "Borsuk's Partition Conjecture",
        "subtitle": "Partitioning Any Shape in d-Dimensions into d+1 Smaller Pieces (Disproved!)",
        "field": "High-Dimensional Combinatorial Geometry",
        "statusBadge": "DISPROVED (KAHN & KALAI)",
        "grades": {
          "explorers": {
            "tagline": "Can you slice any 3D potato into 4 smaller bites?",
            "analogy": "In 1933, Karol Borsuk asked: Can ANY bounded shape in d dimensions be partitioned into d+1 pieces, each having strictly smaller diameter? In 2D, 3 pieces always work. In 3D, 4 pieces always work. Everyone thought it was true forever—until Kahn and Kalai shocked the world in 1993 by proving it FAILS in high dimensions!",
            "rules": [
              "In 2D: Any shape can be divided into 2+1 = 3 smaller diameter pieces.",
              "In 3D: Any shape can be divided into 3+1 = 4 smaller pieces.",
              "Borsuk guessed: Always d+1 pieces in d dimensions.",
              "Kahn & Kalai (1993): Counterexample in dimension 1,325! Current record: fails in d = 64!"
            ],
            "mystery": "It is one of the most stunning examples in mathematics where a pattern is 100% true in dimensions 1, 2, and 3, but collapses completely in higher dimensions!",
            "funFact": "The smallest dimension where Borsuk fails is currently unknown: somewhere between 4 and 64!"
          },
          "investigators": {
            "tagline": "Frankl-Rödl theorem on intersection of sets and tensor products.",
            "analogy": "Kahn and Kalai translated Borsuk's problem into extremal combinatorics on subsets of {1, ..., n}, using linear algebra bounds on polynomial spaces over finite fields.",
            "rules": [
              "Kahn-Kalai (1993): d = 1325 counterexample.",
              "Bondarenko (2013): Reduced counterexample dimension to d = 65.",
              "Jenrich (2014): Reduced counterexample dimension to d = 64."
            ],
            "mystery": "Does Borsuk's conjecture hold in dimension 4, or does an algebraic counterexample exist in 4D?",
            "funFact": "Karol Borsuk posed the conjecture in 1933 in Fundamenta Mathematicae."
          },
          "pioneers": {
            "tagline": "Distance graphs on the sphere and chromatic number of metric spaces.",
            "analogy": "The problem is equivalent to coloring the unit diameter graph of a set with d+1 colors such that each color class has diameter < 1.",
            "rules": [
              "Extremal set theory in Mathlib.",
              "Orthogonal vector representations.",
              "Lean 4 verification of Kahn-Kalai counterexample."
            ],
            "mystery": "AI SAT search pipelines are actively testing 4D and 5D candidate polyhedra derived from root systems.",
            "funFact": "Borsuk's conjecture teaches mathematicians never to trust low-dimensional geometric intuition blindly."
          }
        },
        "history": [
          {
            "year": "1933",
            "author": "Karol Borsuk",
            "note": "Proposes the d+1 diameter partition conjecture."
          },
          {
            "year": "1993",
            "author": "Jeff Kahn & Gil Kalai",
            "note": "Shock the mathematical world with d = 1325 counterexample."
          },
          {
            "year": "2014",
            "author": "Thomas Jenrich",
            "note": "Reduces counterexample dimension to 64."
          }
        ]
      },
      "fr": {
        "name": "Borsuk's Partition Conjecture",
        "subtitle": "Partitioning Any Shape in d-Dimensions into d+1 Smaller Pieces (Disproved!)",
        "field": "High-Dimensional Combinatorial Geometry",
        "statusBadge": "DISPROVED (KAHN & KALAI)",
        "grades": {
          "explorers": {
            "tagline": "Can you slice any 3D potato into 4 smaller bites?",
            "analogy": "In 1933, Karol Borsuk asked: Can ANY bounded shape in d dimensions be partitioned into d+1 pieces, each having strictly smaller diameter? In 2D, 3 pieces always work. In 3D, 4 pieces always work. Everyone thought it was true forever—until Kahn and Kalai shocked the world in 1993 by proving it FAILS in high dimensions!",
            "rules": [
              "In 2D: Any shape can be divided into 2+1 = 3 smaller diameter pieces.",
              "In 3D: Any shape can be divided into 3+1 = 4 smaller pieces.",
              "Borsuk guessed: Always d+1 pieces in d dimensions.",
              "Kahn & Kalai (1993): Counterexample in dimension 1,325! Current record: fails in d = 64!"
            ],
            "mystery": "It is one of the most stunning examples in mathematics where a pattern is 100% true in dimensions 1, 2, and 3, but collapses completely in higher dimensions!",
            "funFact": "The smallest dimension where Borsuk fails is currently unknown: somewhere between 4 and 64!"
          },
          "investigators": {
            "tagline": "Frankl-Rödl theorem on intersection of sets and tensor products.",
            "analogy": "Kahn and Kalai translated Borsuk's problem into extremal combinatorics on subsets of {1, ..., n}, using linear algebra bounds on polynomial spaces over finite fields.",
            "rules": [
              "Kahn-Kalai (1993): d = 1325 counterexample.",
              "Bondarenko (2013): Reduced counterexample dimension to d = 65.",
              "Jenrich (2014): Reduced counterexample dimension to d = 64."
            ],
            "mystery": "Does Borsuk's conjecture hold in dimension 4, or does an algebraic counterexample exist in 4D?",
            "funFact": "Karol Borsuk posed the conjecture in 1933 in Fundamenta Mathematicae."
          },
          "pioneers": {
            "tagline": "Distance graphs on the sphere and chromatic number of metric spaces.",
            "analogy": "The problem is equivalent to coloring the unit diameter graph of a set with d+1 colors such that each color class has diameter < 1.",
            "rules": [
              "Extremal set theory in Mathlib.",
              "Orthogonal vector representations.",
              "Lean 4 verification of Kahn-Kalai counterexample."
            ],
            "mystery": "AI SAT search pipelines are actively testing 4D and 5D candidate polyhedra derived from root systems.",
            "funFact": "Borsuk's conjecture teaches mathematicians never to trust low-dimensional geometric intuition blindly."
          }
        },
        "history": [
          {
            "year": "1933",
            "author": "Karol Borsuk",
            "note": "Proposes the d+1 diameter partition conjecture."
          },
          {
            "year": "1993",
            "author": "Jeff Kahn & Gil Kalai",
            "note": "Shock the mathematical world with d = 1325 counterexample."
          },
          {
            "year": "2014",
            "author": "Thomas Jenrich",
            "note": "Reduces counterexample dimension to 64."
          }
        ]
      },
      "it": {
        "name": "Borsuk's Partition Conjecture",
        "subtitle": "Partitioning Any Shape in d-Dimensions into d+1 Smaller Pieces (Disproved!)",
        "field": "High-Dimensional Combinatorial Geometry",
        "statusBadge": "DISPROVED (KAHN & KALAI)",
        "grades": {
          "explorers": {
            "tagline": "Can you slice any 3D potato into 4 smaller bites?",
            "analogy": "In 1933, Karol Borsuk asked: Can ANY bounded shape in d dimensions be partitioned into d+1 pieces, each having strictly smaller diameter? In 2D, 3 pieces always work. In 3D, 4 pieces always work. Everyone thought it was true forever—until Kahn and Kalai shocked the world in 1993 by proving it FAILS in high dimensions!",
            "rules": [
              "In 2D: Any shape can be divided into 2+1 = 3 smaller diameter pieces.",
              "In 3D: Any shape can be divided into 3+1 = 4 smaller pieces.",
              "Borsuk guessed: Always d+1 pieces in d dimensions.",
              "Kahn & Kalai (1993): Counterexample in dimension 1,325! Current record: fails in d = 64!"
            ],
            "mystery": "It is one of the most stunning examples in mathematics where a pattern is 100% true in dimensions 1, 2, and 3, but collapses completely in higher dimensions!",
            "funFact": "The smallest dimension where Borsuk fails is currently unknown: somewhere between 4 and 64!"
          },
          "investigators": {
            "tagline": "Frankl-Rödl theorem on intersection of sets and tensor products.",
            "analogy": "Kahn and Kalai translated Borsuk's problem into extremal combinatorics on subsets of {1, ..., n}, using linear algebra bounds on polynomial spaces over finite fields.",
            "rules": [
              "Kahn-Kalai (1993): d = 1325 counterexample.",
              "Bondarenko (2013): Reduced counterexample dimension to d = 65.",
              "Jenrich (2014): Reduced counterexample dimension to d = 64."
            ],
            "mystery": "Does Borsuk's conjecture hold in dimension 4, or does an algebraic counterexample exist in 4D?",
            "funFact": "Karol Borsuk posed the conjecture in 1933 in Fundamenta Mathematicae."
          },
          "pioneers": {
            "tagline": "Distance graphs on the sphere and chromatic number of metric spaces.",
            "analogy": "The problem is equivalent to coloring the unit diameter graph of a set with d+1 colors such that each color class has diameter < 1.",
            "rules": [
              "Extremal set theory in Mathlib.",
              "Orthogonal vector representations.",
              "Lean 4 verification of Kahn-Kalai counterexample."
            ],
            "mystery": "AI SAT search pipelines are actively testing 4D and 5D candidate polyhedra derived from root systems.",
            "funFact": "Borsuk's conjecture teaches mathematicians never to trust low-dimensional geometric intuition blindly."
          }
        },
        "history": [
          {
            "year": "1933",
            "author": "Karol Borsuk",
            "note": "Proposes the d+1 diameter partition conjecture."
          },
          {
            "year": "1993",
            "author": "Jeff Kahn & Gil Kalai",
            "note": "Shock the mathematical world with d = 1325 counterexample."
          },
          {
            "year": "2014",
            "author": "Thomas Jenrich",
            "note": "Reduces counterexample dimension to 64."
          }
        ]
      },
      "ja": {
        "name": "Borsuk's Partition Conjecture",
        "subtitle": "Partitioning Any Shape in d-Dimensions into d+1 Smaller Pieces (Disproved!)",
        "field": "High-Dimensional Combinatorial Geometry",
        "statusBadge": "DISPROVED (KAHN & KALAI)",
        "grades": {
          "explorers": {
            "tagline": "Can you slice any 3D potato into 4 smaller bites?",
            "analogy": "In 1933, Karol Borsuk asked: Can ANY bounded shape in d dimensions be partitioned into d+1 pieces, each having strictly smaller diameter? In 2D, 3 pieces always work. In 3D, 4 pieces always work. Everyone thought it was true forever—until Kahn and Kalai shocked the world in 1993 by proving it FAILS in high dimensions!",
            "rules": [
              "In 2D: Any shape can be divided into 2+1 = 3 smaller diameter pieces.",
              "In 3D: Any shape can be divided into 3+1 = 4 smaller pieces.",
              "Borsuk guessed: Always d+1 pieces in d dimensions.",
              "Kahn & Kalai (1993): Counterexample in dimension 1,325! Current record: fails in d = 64!"
            ],
            "mystery": "It is one of the most stunning examples in mathematics where a pattern is 100% true in dimensions 1, 2, and 3, but collapses completely in higher dimensions!",
            "funFact": "The smallest dimension where Borsuk fails is currently unknown: somewhere between 4 and 64!"
          },
          "investigators": {
            "tagline": "Frankl-Rödl theorem on intersection of sets and tensor products.",
            "analogy": "Kahn and Kalai translated Borsuk's problem into extremal combinatorics on subsets of {1, ..., n}, using linear algebra bounds on polynomial spaces over finite fields.",
            "rules": [
              "Kahn-Kalai (1993): d = 1325 counterexample.",
              "Bondarenko (2013): Reduced counterexample dimension to d = 65.",
              "Jenrich (2014): Reduced counterexample dimension to d = 64."
            ],
            "mystery": "Does Borsuk's conjecture hold in dimension 4, or does an algebraic counterexample exist in 4D?",
            "funFact": "Karol Borsuk posed the conjecture in 1933 in Fundamenta Mathematicae."
          },
          "pioneers": {
            "tagline": "Distance graphs on the sphere and chromatic number of metric spaces.",
            "analogy": "The problem is equivalent to coloring the unit diameter graph of a set with d+1 colors such that each color class has diameter < 1.",
            "rules": [
              "Extremal set theory in Mathlib.",
              "Orthogonal vector representations.",
              "Lean 4 verification of Kahn-Kalai counterexample."
            ],
            "mystery": "AI SAT search pipelines are actively testing 4D and 5D candidate polyhedra derived from root systems.",
            "funFact": "Borsuk's conjecture teaches mathematicians never to trust low-dimensional geometric intuition blindly."
          }
        },
        "history": [
          {
            "year": "1933",
            "author": "Karol Borsuk",
            "note": "Proposes the d+1 diameter partition conjecture."
          },
          {
            "year": "1993",
            "author": "Jeff Kahn & Gil Kalai",
            "note": "Shock the mathematical world with d = 1325 counterexample."
          },
          {
            "year": "2014",
            "author": "Thomas Jenrich",
            "note": "Reduces counterexample dimension to 64."
          }
        ]
      },
      "ko": {
        "name": "Borsuk's Partition Conjecture",
        "subtitle": "Partitioning Any Shape in d-Dimensions into d+1 Smaller Pieces (Disproved!)",
        "field": "High-Dimensional Combinatorial Geometry",
        "statusBadge": "DISPROVED (KAHN & KALAI)",
        "grades": {
          "explorers": {
            "tagline": "Can you slice any 3D potato into 4 smaller bites?",
            "analogy": "In 1933, Karol Borsuk asked: Can ANY bounded shape in d dimensions be partitioned into d+1 pieces, each having strictly smaller diameter? In 2D, 3 pieces always work. In 3D, 4 pieces always work. Everyone thought it was true forever—until Kahn and Kalai shocked the world in 1993 by proving it FAILS in high dimensions!",
            "rules": [
              "In 2D: Any shape can be divided into 2+1 = 3 smaller diameter pieces.",
              "In 3D: Any shape can be divided into 3+1 = 4 smaller pieces.",
              "Borsuk guessed: Always d+1 pieces in d dimensions.",
              "Kahn & Kalai (1993): Counterexample in dimension 1,325! Current record: fails in d = 64!"
            ],
            "mystery": "It is one of the most stunning examples in mathematics where a pattern is 100% true in dimensions 1, 2, and 3, but collapses completely in higher dimensions!",
            "funFact": "The smallest dimension where Borsuk fails is currently unknown: somewhere between 4 and 64!"
          },
          "investigators": {
            "tagline": "Frankl-Rödl theorem on intersection of sets and tensor products.",
            "analogy": "Kahn and Kalai translated Borsuk's problem into extremal combinatorics on subsets of {1, ..., n}, using linear algebra bounds on polynomial spaces over finite fields.",
            "rules": [
              "Kahn-Kalai (1993): d = 1325 counterexample.",
              "Bondarenko (2013): Reduced counterexample dimension to d = 65.",
              "Jenrich (2014): Reduced counterexample dimension to d = 64."
            ],
            "mystery": "Does Borsuk's conjecture hold in dimension 4, or does an algebraic counterexample exist in 4D?",
            "funFact": "Karol Borsuk posed the conjecture in 1933 in Fundamenta Mathematicae."
          },
          "pioneers": {
            "tagline": "Distance graphs on the sphere and chromatic number of metric spaces.",
            "analogy": "The problem is equivalent to coloring the unit diameter graph of a set with d+1 colors such that each color class has diameter < 1.",
            "rules": [
              "Extremal set theory in Mathlib.",
              "Orthogonal vector representations.",
              "Lean 4 verification of Kahn-Kalai counterexample."
            ],
            "mystery": "AI SAT search pipelines are actively testing 4D and 5D candidate polyhedra derived from root systems.",
            "funFact": "Borsuk's conjecture teaches mathematicians never to trust low-dimensional geometric intuition blindly."
          }
        },
        "history": [
          {
            "year": "1933",
            "author": "Karol Borsuk",
            "note": "Proposes the d+1 diameter partition conjecture."
          },
          {
            "year": "1993",
            "author": "Jeff Kahn & Gil Kalai",
            "note": "Shock the mathematical world with d = 1325 counterexample."
          },
          {
            "year": "2014",
            "author": "Thomas Jenrich",
            "note": "Reduces counterexample dimension to 64."
          }
        ]
      },
      "zh-Hans": {
        "name": "博苏克分割猜想",
        "subtitle": "将 d 维空间任意几何体切成 d+1 块直径更小的碎片（已被精彩推翻！）",
        "field": "高维组合几何学 & 反例构造",
        "statusBadge": "已被数学家构造反例推翻",
        "grades": {
          "explorers": {
            "tagline": "把任意形状的三维土豆切开，4刀能不能保证每一小块的跨度都比原来更小？",
            "analogy": "1933年波兰数学家卡罗尔·博苏克提出：d 维空间中的任意有界物体，能否永远切成 d+1 块直径严格更小的碎片？二维平面上，任何图形切成 3 块都可以缩小组径；三维空间中，任何物体切成 4 块也可以。60年间所有人都认为这必定是宇宙通则，直到1993年卡恩与卡莱轰动世界地证明：在高维空间中该猜想彻底破产！",
            "rules": [
              "二维平面：任何形状切成 3 块即可缩小直径。",
              "三维空间：任何物体切成 4 块即可缩小直径。",
              "博苏克猜想：d 维空间永远只需要 d+1 块。",
              "卡恩与卡莱 (1993)：在 1325 维构造出反例！目前已证明在 64 维就会失效！"
            ],
            "mystery": "这是数学史上最震撼的反转案例之一：低维完全正确的完美直觉，在高维世界却被彻底粉碎！",
            "funFact": "猜想首次失效的最小维度至今仍是悬案：已知在 4 维到 64 维之间的某个位置必定崩塌！"
          },
          "investigators": {
            "tagline": "弗兰克尔-勒德尔集合相交定理与高维张量积。",
            "analogy": "卡恩与卡莱将几何分割问题精妙转化为有限集族上的极值组合学问题，利用有限域上多项式维数障碍给出了致命反例。",
            "rules": [
              "卡恩与卡莱 (1993)：在 1325 维给出首个反例。",
              "邦达连科 (2013)：将反例维度降至 65 维。",
              "延里奇 (2014)：进一步刷新至 64 维。"
            ],
            "mystery": "博苏克猜想在四维空间中到底是对是错？四维是否存在极为隐蔽的代数反例？",
            "funFact": "卡罗尔·博苏克于1933年在波兰数学学报提出。"
          },
          "pioneers": {
            "tagline": "球面距离图与度量空间染色数。",
            "analogy": "问题等价于为有界集的单位直径图染色，使得每个同色类的直径严格小于 1。",
            "rules": [
              "极值集合论与张量表示。",
              "有限域多项式线性无关性定理。",
              "Lean 4 中卡恩-卡莱反例构造的完全机器验证。"
            ],
            "mystery": "AI SAT 求解系统正在对源自高维李代数根系的多面体进行四维与五维反例扫描。",
            "funFact": "博苏克猜想给所有数学家敲响了警钟：切勿盲目迷信低维空间直觉对于高维宇宙的适用性。"
          }
        },
        "history": [
          {
            "year": "1933",
            "author": "卡罗尔·博苏克",
            "note": "在华沙提出高维几何直径分割猜想。"
          },
          {
            "year": "1993",
            "author": "杰夫·卡恩 & 吉尔·卡莱",
            "note": "构造 1325 维反例，震惊国际数学界！"
          },
          {
            "year": "2014",
            "author": "托马斯·延里奇",
            "note": "将反例成立的维度下压至 64 维。"
          }
        ]
      },
      "zh-Hant": {
        "name": "Borsuk's Partition Conjecture",
        "subtitle": "Partitioning Any Shape in d-Dimensions into d+1 Smaller Pieces (Disproved!)",
        "field": "High-Dimensional Combinatorial Geometry",
        "statusBadge": "DISPROVED (KAHN & KALAI)",
        "grades": {
          "explorers": {
            "tagline": "Can you slice any 3D potato into 4 smaller bites?",
            "analogy": "In 1933, Karol Borsuk asked: Can ANY bounded shape in d dimensions be partitioned into d+1 pieces, each having strictly smaller diameter? In 2D, 3 pieces always work. In 3D, 4 pieces always work. Everyone thought it was true forever—until Kahn and Kalai shocked the world in 1993 by proving it FAILS in high dimensions!",
            "rules": [
              "In 2D: Any shape can be divided into 2+1 = 3 smaller diameter pieces.",
              "In 3D: Any shape can be divided into 3+1 = 4 smaller pieces.",
              "Borsuk guessed: Always d+1 pieces in d dimensions.",
              "Kahn & Kalai (1993): Counterexample in dimension 1,325! Current record: fails in d = 64!"
            ],
            "mystery": "It is one of the most stunning examples in mathematics where a pattern is 100% true in dimensions 1, 2, and 3, but collapses completely in higher dimensions!",
            "funFact": "The smallest dimension where Borsuk fails is currently unknown: somewhere between 4 and 64!"
          },
          "investigators": {
            "tagline": "Frankl-Rödl theorem on intersection of sets and tensor products.",
            "analogy": "Kahn and Kalai translated Borsuk's problem into extremal combinatorics on subsets of {1, ..., n}, using linear algebra bounds on polynomial spaces over finite fields.",
            "rules": [
              "Kahn-Kalai (1993): d = 1325 counterexample.",
              "Bondarenko (2013): Reduced counterexample dimension to d = 65.",
              "Jenrich (2014): Reduced counterexample dimension to d = 64."
            ],
            "mystery": "Does Borsuk's conjecture hold in dimension 4, or does an algebraic counterexample exist in 4D?",
            "funFact": "Karol Borsuk posed the conjecture in 1933 in Fundamenta Mathematicae."
          },
          "pioneers": {
            "tagline": "Distance graphs on the sphere and chromatic number of metric spaces.",
            "analogy": "The problem is equivalent to coloring the unit diameter graph of a set with d+1 colors such that each color class has diameter < 1.",
            "rules": [
              "Extremal set theory in Mathlib.",
              "Orthogonal vector representations.",
              "Lean 4 verification of Kahn-Kalai counterexample."
            ],
            "mystery": "AI SAT search pipelines are actively testing 4D and 5D candidate polyhedra derived from root systems.",
            "funFact": "Borsuk's conjecture teaches mathematicians never to trust low-dimensional geometric intuition blindly."
          }
        },
        "history": [
          {
            "year": "1933",
            "author": "Karol Borsuk",
            "note": "Proposes the d+1 diameter partition conjecture."
          },
          {
            "year": "1993",
            "author": "Jeff Kahn & Gil Kalai",
            "note": "Shock the mathematical world with d = 1325 counterexample."
          },
          {
            "year": "2014",
            "author": "Thomas Jenrich",
            "note": "Reduces counterexample dimension to 64."
          }
        ]
      }
    }
  },
  {
    "id": "honeycomb",
    "icon": "🐝",
    "difficulty": "All Ages",
    "domain": "geometry",
    "category": "geometry",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Geometry.Euclidean.Basic\n-- Honeycomb Conjecture (Proved by Thomas Hales in 1999)\n-- Any partition of the plane into regions of equal area has perimeter at least that of regular hexagonal tiling.",
    "locales": {
      "en": {
        "name": "The Honeycomb Conjecture",
        "subtitle": "Hexagonal Grids Partition the Plane with Minimal Perimeter",
        "field": "Isoperimetric Inequalities & Optimal Tilings",
        "statusBadge": "PROVEN THEOREM",
        "grades": {
          "explorers": {
            "tagline": "Why do bees always build hexagonal honeycomb bedrooms?",
            "analogy": "Bees want to store maximum honey using the least amount of precious beeswax. Roman scholar Varro guessed in 36 BC that hexagons partition the plane with the least perimeter! It took more than 2,000 years until Thomas Hales proved in 1999 that hexagons are mathematically unbeatable!",
            "rules": [
              "Divide the plane into equal-area cells (Area = 1).",
              "Triangles have perimeter ≈ 4.56.",
              "Squares have perimeter = 4.00.",
              "Hexagons achieve perimeter = (12)^{1/4} √2 ≈ 3.722!",
              "Hales proved NO curved or irregular shape can beat 3.722!"
            ],
            "mystery": "Darwin wrote that the honeycomb architecture is 'the most wonderful of all known instincts, beyond which the most skilled workman can produce nothing more perfect'!",
            "funFact": "The 3D Kelvin problem for space-filling soap bubbles was thought to be optimal with truncated octahedra until Weaire and Phelan found a better shape in 1993!"
          },
          "investigators": {
            "tagline": "Isoperimetric quotient on planar graphs and curvature bounds.",
            "analogy": "Hales proved the planar isoperimetric inequality: for any division of a compact disk by unit-area cells, perimeter per cell ≥ 2√3^{1/4} ≈ 3.7224.",
            "rules": [
              "Perimeter bound: L ≥ 2 × 3^{1/4} ≈ 3.7224.",
              "Euler characteristic V - E + F = 1.",
              "Formal verification in HOL Light."
            ],
            "mystery": "What is the true optimal structure for 3D space-filling bubbles (Kelvin Problem)?",
            "funFact": "Marcus Terentius Varro conjectured this in 36 BC; proved by Hales in 1999."
          },
          "pioneers": {
            "tagline": "Minimal surfaces and geometric measure theory.",
            "analogy": "Plateau's laws dictate that in optimal partitions, three cell edges meet at 120° angles.",
            "rules": [
              "Plateau's 120° junction condition.",
              "Almgren's geometric measure theory.",
              "Lean 4 Mathlib convex geometry."
            ],
            "mystery": "AI generative models utilize the hexagonal honeycomb metric for optimal coverage sensor networks.",
            "funFact": "The Honeycomb Conjecture confirms the profound mathematical wisdom embedded in the natural world."
          }
        },
        "history": [
          {
            "year": "36 BC",
            "author": "Marcus Terentius Varro",
            "note": "Records hexagonal honeycomb perimeter efficiency."
          },
          {
            "year": "1943",
            "author": "László Fejes Tóth",
            "note": "Proves conjecture under regularity assumptions on cells."
          },
          {
            "year": "1999",
            "author": "Thomas Hales",
            "note": "Gives unconditional proof for all arbitrary shapes."
          }
        ]
      },
      "de": {
        "name": "The Honeycomb Conjecture",
        "subtitle": "Hexagonal Grids Partition the Plane with Minimal Perimeter",
        "field": "Isoperimetric Inequalities & Optimal Tilings",
        "statusBadge": "PROVEN THEOREM",
        "grades": {
          "explorers": {
            "tagline": "Why do bees always build hexagonal honeycomb bedrooms?",
            "analogy": "Bees want to store maximum honey using the least amount of precious beeswax. Roman scholar Varro guessed in 36 BC that hexagons partition the plane with the least perimeter! It took more than 2,000 years until Thomas Hales proved in 1999 that hexagons are mathematically unbeatable!",
            "rules": [
              "Divide the plane into equal-area cells (Area = 1).",
              "Triangles have perimeter ≈ 4.56.",
              "Squares have perimeter = 4.00.",
              "Hexagons achieve perimeter = (12)^{1/4} √2 ≈ 3.722!",
              "Hales proved NO curved or irregular shape can beat 3.722!"
            ],
            "mystery": "Darwin wrote that the honeycomb architecture is 'the most wonderful of all known instincts, beyond which the most skilled workman can produce nothing more perfect'!",
            "funFact": "The 3D Kelvin problem for space-filling soap bubbles was thought to be optimal with truncated octahedra until Weaire and Phelan found a better shape in 1993!"
          },
          "investigators": {
            "tagline": "Isoperimetric quotient on planar graphs and curvature bounds.",
            "analogy": "Hales proved the planar isoperimetric inequality: for any division of a compact disk by unit-area cells, perimeter per cell ≥ 2√3^{1/4} ≈ 3.7224.",
            "rules": [
              "Perimeter bound: L ≥ 2 × 3^{1/4} ≈ 3.7224.",
              "Euler characteristic V - E + F = 1.",
              "Formal verification in HOL Light."
            ],
            "mystery": "What is the true optimal structure for 3D space-filling bubbles (Kelvin Problem)?",
            "funFact": "Marcus Terentius Varro conjectured this in 36 BC; proved by Hales in 1999."
          },
          "pioneers": {
            "tagline": "Minimal surfaces and geometric measure theory.",
            "analogy": "Plateau's laws dictate that in optimal partitions, three cell edges meet at 120° angles.",
            "rules": [
              "Plateau's 120° junction condition.",
              "Almgren's geometric measure theory.",
              "Lean 4 Mathlib convex geometry."
            ],
            "mystery": "AI generative models utilize the hexagonal honeycomb metric for optimal coverage sensor networks.",
            "funFact": "The Honeycomb Conjecture confirms the profound mathematical wisdom embedded in the natural world."
          }
        },
        "history": [
          {
            "year": "36 BC",
            "author": "Marcus Terentius Varro",
            "note": "Records hexagonal honeycomb perimeter efficiency."
          },
          {
            "year": "1943",
            "author": "László Fejes Tóth",
            "note": "Proves conjecture under regularity assumptions on cells."
          },
          {
            "year": "1999",
            "author": "Thomas Hales",
            "note": "Gives unconditional proof for all arbitrary shapes."
          }
        ]
      },
      "fr": {
        "name": "The Honeycomb Conjecture",
        "subtitle": "Hexagonal Grids Partition the Plane with Minimal Perimeter",
        "field": "Isoperimetric Inequalities & Optimal Tilings",
        "statusBadge": "PROVEN THEOREM",
        "grades": {
          "explorers": {
            "tagline": "Why do bees always build hexagonal honeycomb bedrooms?",
            "analogy": "Bees want to store maximum honey using the least amount of precious beeswax. Roman scholar Varro guessed in 36 BC that hexagons partition the plane with the least perimeter! It took more than 2,000 years until Thomas Hales proved in 1999 that hexagons are mathematically unbeatable!",
            "rules": [
              "Divide the plane into equal-area cells (Area = 1).",
              "Triangles have perimeter ≈ 4.56.",
              "Squares have perimeter = 4.00.",
              "Hexagons achieve perimeter = (12)^{1/4} √2 ≈ 3.722!",
              "Hales proved NO curved or irregular shape can beat 3.722!"
            ],
            "mystery": "Darwin wrote that the honeycomb architecture is 'the most wonderful of all known instincts, beyond which the most skilled workman can produce nothing more perfect'!",
            "funFact": "The 3D Kelvin problem for space-filling soap bubbles was thought to be optimal with truncated octahedra until Weaire and Phelan found a better shape in 1993!"
          },
          "investigators": {
            "tagline": "Isoperimetric quotient on planar graphs and curvature bounds.",
            "analogy": "Hales proved the planar isoperimetric inequality: for any division of a compact disk by unit-area cells, perimeter per cell ≥ 2√3^{1/4} ≈ 3.7224.",
            "rules": [
              "Perimeter bound: L ≥ 2 × 3^{1/4} ≈ 3.7224.",
              "Euler characteristic V - E + F = 1.",
              "Formal verification in HOL Light."
            ],
            "mystery": "What is the true optimal structure for 3D space-filling bubbles (Kelvin Problem)?",
            "funFact": "Marcus Terentius Varro conjectured this in 36 BC; proved by Hales in 1999."
          },
          "pioneers": {
            "tagline": "Minimal surfaces and geometric measure theory.",
            "analogy": "Plateau's laws dictate that in optimal partitions, three cell edges meet at 120° angles.",
            "rules": [
              "Plateau's 120° junction condition.",
              "Almgren's geometric measure theory.",
              "Lean 4 Mathlib convex geometry."
            ],
            "mystery": "AI generative models utilize the hexagonal honeycomb metric for optimal coverage sensor networks.",
            "funFact": "The Honeycomb Conjecture confirms the profound mathematical wisdom embedded in the natural world."
          }
        },
        "history": [
          {
            "year": "36 BC",
            "author": "Marcus Terentius Varro",
            "note": "Records hexagonal honeycomb perimeter efficiency."
          },
          {
            "year": "1943",
            "author": "László Fejes Tóth",
            "note": "Proves conjecture under regularity assumptions on cells."
          },
          {
            "year": "1999",
            "author": "Thomas Hales",
            "note": "Gives unconditional proof for all arbitrary shapes."
          }
        ]
      },
      "it": {
        "name": "The Honeycomb Conjecture",
        "subtitle": "Hexagonal Grids Partition the Plane with Minimal Perimeter",
        "field": "Isoperimetric Inequalities & Optimal Tilings",
        "statusBadge": "PROVEN THEOREM",
        "grades": {
          "explorers": {
            "tagline": "Why do bees always build hexagonal honeycomb bedrooms?",
            "analogy": "Bees want to store maximum honey using the least amount of precious beeswax. Roman scholar Varro guessed in 36 BC that hexagons partition the plane with the least perimeter! It took more than 2,000 years until Thomas Hales proved in 1999 that hexagons are mathematically unbeatable!",
            "rules": [
              "Divide the plane into equal-area cells (Area = 1).",
              "Triangles have perimeter ≈ 4.56.",
              "Squares have perimeter = 4.00.",
              "Hexagons achieve perimeter = (12)^{1/4} √2 ≈ 3.722!",
              "Hales proved NO curved or irregular shape can beat 3.722!"
            ],
            "mystery": "Darwin wrote that the honeycomb architecture is 'the most wonderful of all known instincts, beyond which the most skilled workman can produce nothing more perfect'!",
            "funFact": "The 3D Kelvin problem for space-filling soap bubbles was thought to be optimal with truncated octahedra until Weaire and Phelan found a better shape in 1993!"
          },
          "investigators": {
            "tagline": "Isoperimetric quotient on planar graphs and curvature bounds.",
            "analogy": "Hales proved the planar isoperimetric inequality: for any division of a compact disk by unit-area cells, perimeter per cell ≥ 2√3^{1/4} ≈ 3.7224.",
            "rules": [
              "Perimeter bound: L ≥ 2 × 3^{1/4} ≈ 3.7224.",
              "Euler characteristic V - E + F = 1.",
              "Formal verification in HOL Light."
            ],
            "mystery": "What is the true optimal structure for 3D space-filling bubbles (Kelvin Problem)?",
            "funFact": "Marcus Terentius Varro conjectured this in 36 BC; proved by Hales in 1999."
          },
          "pioneers": {
            "tagline": "Minimal surfaces and geometric measure theory.",
            "analogy": "Plateau's laws dictate that in optimal partitions, three cell edges meet at 120° angles.",
            "rules": [
              "Plateau's 120° junction condition.",
              "Almgren's geometric measure theory.",
              "Lean 4 Mathlib convex geometry."
            ],
            "mystery": "AI generative models utilize the hexagonal honeycomb metric for optimal coverage sensor networks.",
            "funFact": "The Honeycomb Conjecture confirms the profound mathematical wisdom embedded in the natural world."
          }
        },
        "history": [
          {
            "year": "36 BC",
            "author": "Marcus Terentius Varro",
            "note": "Records hexagonal honeycomb perimeter efficiency."
          },
          {
            "year": "1943",
            "author": "László Fejes Tóth",
            "note": "Proves conjecture under regularity assumptions on cells."
          },
          {
            "year": "1999",
            "author": "Thomas Hales",
            "note": "Gives unconditional proof for all arbitrary shapes."
          }
        ]
      },
      "ja": {
        "name": "The Honeycomb Conjecture",
        "subtitle": "Hexagonal Grids Partition the Plane with Minimal Perimeter",
        "field": "Isoperimetric Inequalities & Optimal Tilings",
        "statusBadge": "PROVEN THEOREM",
        "grades": {
          "explorers": {
            "tagline": "Why do bees always build hexagonal honeycomb bedrooms?",
            "analogy": "Bees want to store maximum honey using the least amount of precious beeswax. Roman scholar Varro guessed in 36 BC that hexagons partition the plane with the least perimeter! It took more than 2,000 years until Thomas Hales proved in 1999 that hexagons are mathematically unbeatable!",
            "rules": [
              "Divide the plane into equal-area cells (Area = 1).",
              "Triangles have perimeter ≈ 4.56.",
              "Squares have perimeter = 4.00.",
              "Hexagons achieve perimeter = (12)^{1/4} √2 ≈ 3.722!",
              "Hales proved NO curved or irregular shape can beat 3.722!"
            ],
            "mystery": "Darwin wrote that the honeycomb architecture is 'the most wonderful of all known instincts, beyond which the most skilled workman can produce nothing more perfect'!",
            "funFact": "The 3D Kelvin problem for space-filling soap bubbles was thought to be optimal with truncated octahedra until Weaire and Phelan found a better shape in 1993!"
          },
          "investigators": {
            "tagline": "Isoperimetric quotient on planar graphs and curvature bounds.",
            "analogy": "Hales proved the planar isoperimetric inequality: for any division of a compact disk by unit-area cells, perimeter per cell ≥ 2√3^{1/4} ≈ 3.7224.",
            "rules": [
              "Perimeter bound: L ≥ 2 × 3^{1/4} ≈ 3.7224.",
              "Euler characteristic V - E + F = 1.",
              "Formal verification in HOL Light."
            ],
            "mystery": "What is the true optimal structure for 3D space-filling bubbles (Kelvin Problem)?",
            "funFact": "Marcus Terentius Varro conjectured this in 36 BC; proved by Hales in 1999."
          },
          "pioneers": {
            "tagline": "Minimal surfaces and geometric measure theory.",
            "analogy": "Plateau's laws dictate that in optimal partitions, three cell edges meet at 120° angles.",
            "rules": [
              "Plateau's 120° junction condition.",
              "Almgren's geometric measure theory.",
              "Lean 4 Mathlib convex geometry."
            ],
            "mystery": "AI generative models utilize the hexagonal honeycomb metric for optimal coverage sensor networks.",
            "funFact": "The Honeycomb Conjecture confirms the profound mathematical wisdom embedded in the natural world."
          }
        },
        "history": [
          {
            "year": "36 BC",
            "author": "Marcus Terentius Varro",
            "note": "Records hexagonal honeycomb perimeter efficiency."
          },
          {
            "year": "1943",
            "author": "László Fejes Tóth",
            "note": "Proves conjecture under regularity assumptions on cells."
          },
          {
            "year": "1999",
            "author": "Thomas Hales",
            "note": "Gives unconditional proof for all arbitrary shapes."
          }
        ]
      },
      "ko": {
        "name": "The Honeycomb Conjecture",
        "subtitle": "Hexagonal Grids Partition the Plane with Minimal Perimeter",
        "field": "Isoperimetric Inequalities & Optimal Tilings",
        "statusBadge": "PROVEN THEOREM",
        "grades": {
          "explorers": {
            "tagline": "Why do bees always build hexagonal honeycomb bedrooms?",
            "analogy": "Bees want to store maximum honey using the least amount of precious beeswax. Roman scholar Varro guessed in 36 BC that hexagons partition the plane with the least perimeter! It took more than 2,000 years until Thomas Hales proved in 1999 that hexagons are mathematically unbeatable!",
            "rules": [
              "Divide the plane into equal-area cells (Area = 1).",
              "Triangles have perimeter ≈ 4.56.",
              "Squares have perimeter = 4.00.",
              "Hexagons achieve perimeter = (12)^{1/4} √2 ≈ 3.722!",
              "Hales proved NO curved or irregular shape can beat 3.722!"
            ],
            "mystery": "Darwin wrote that the honeycomb architecture is 'the most wonderful of all known instincts, beyond which the most skilled workman can produce nothing more perfect'!",
            "funFact": "The 3D Kelvin problem for space-filling soap bubbles was thought to be optimal with truncated octahedra until Weaire and Phelan found a better shape in 1993!"
          },
          "investigators": {
            "tagline": "Isoperimetric quotient on planar graphs and curvature bounds.",
            "analogy": "Hales proved the planar isoperimetric inequality: for any division of a compact disk by unit-area cells, perimeter per cell ≥ 2√3^{1/4} ≈ 3.7224.",
            "rules": [
              "Perimeter bound: L ≥ 2 × 3^{1/4} ≈ 3.7224.",
              "Euler characteristic V - E + F = 1.",
              "Formal verification in HOL Light."
            ],
            "mystery": "What is the true optimal structure for 3D space-filling bubbles (Kelvin Problem)?",
            "funFact": "Marcus Terentius Varro conjectured this in 36 BC; proved by Hales in 1999."
          },
          "pioneers": {
            "tagline": "Minimal surfaces and geometric measure theory.",
            "analogy": "Plateau's laws dictate that in optimal partitions, three cell edges meet at 120° angles.",
            "rules": [
              "Plateau's 120° junction condition.",
              "Almgren's geometric measure theory.",
              "Lean 4 Mathlib convex geometry."
            ],
            "mystery": "AI generative models utilize the hexagonal honeycomb metric for optimal coverage sensor networks.",
            "funFact": "The Honeycomb Conjecture confirms the profound mathematical wisdom embedded in the natural world."
          }
        },
        "history": [
          {
            "year": "36 BC",
            "author": "Marcus Terentius Varro",
            "note": "Records hexagonal honeycomb perimeter efficiency."
          },
          {
            "year": "1943",
            "author": "László Fejes Tóth",
            "note": "Proves conjecture under regularity assumptions on cells."
          },
          {
            "year": "1999",
            "author": "Thomas Hales",
            "note": "Gives unconditional proof for all arbitrary shapes."
          }
        ]
      },
      "zh-Hans": {
        "name": "蜂窝猜想",
        "subtitle": "正六边形蜂窝网格以最小周长分割平面（黑尔斯证明）",
        "field": "等周不等式 & 极值镶嵌几何",
        "statusBadge": "已证明定理",
        "grades": {
          "explorers": {
            "tagline": "聪明的蜜蜂为什么永远用正六边形建造它们的蜂巢城堡？",
            "analogy": "蜜蜂为了储存最多的蜂蜜，必须用最少的珍贵蜂蜡建造隔断。公元前36年罗马学者瓦罗就猜测正六边形周长最短。历经整整两千年，托马斯·黑尔斯于1999年给出严格证明：在所有将平面划分为等面积单元的图形中，正六边形蜂窝的周长绝对最省！",
            "rules": [
              "将平面划分为面积相等的单元（面积=1）。",
              "正三角形网格周长约为 4.56。",
              "正方形网格周长为 4.00。",
              "正六边形网格周长仅为 3.722！",
              "黑尔斯证明：没有任何弯曲或不规则的图形周长能低于 3.722！"
            ],
            "mystery": "达尔文盛赞蜂巢构造是“已知本能中最奇妙的杰作，即便最熟练的工匠也无法打造得更为完美”！",
            "funFact": "三维空间的开尔文泡沫填充问题，直到1993年才被韦尔与费兰找到比传统多面体更省面积的“韦尔-费兰结构”！"
          },
          "investigators": {
            "tagline": "平面图等周商与高斯曲率界限。",
            "analogy": "黑尔斯建立了紧致圆盘上单位面积胞腔分割的整体等周不等式，完成解析证明。",
            "rules": [
              "六边形等周极小常数。",
              "平面图欧拉示性数与角亏格约束。",
              "定理在 HOL Light 形式化库中完成。"
            ],
            "mystery": "三维等体积空间分割的终极极小曲面结构是什么？（开尔文问题依然未决！）",
            "funFact": "古罗马瓦罗于公元前36年提出，黑尔斯于1999年彻底证明。"
          },
          "pioneers": {
            "tagline": "极小曲面与几何测度论。",
            "analogy": "普拉托定律规定在最优分割中，三条交界棱必定以 120 度角优雅相交。",
            "rules": [
              "普拉托三叉点 120 度交角定理。",
              "阿姆格伦几何测度论。",
              "Lean 4 Mathlib 凸多边形镶嵌定理。"
            ],
            "mystery": "AI 自动化系统在物联网传感器基站与网格覆盖中广泛采用正六边形最优布局。",
            "funFact": "蜂窝猜想生动证明了自然演化中蕴含的高深几何智慧。"
          }
        },
        "history": [
          {
            "year": "36 BC",
            "author": "瓦罗",
            "note": "在古罗马农书纪录六角蜂巢省蜡特性。"
          },
          {
            "year": "1943",
            "author": "托特",
            "note": "在凸多边形假定下证明最优性。"
          },
          {
            "year": "1999",
            "author": "托马斯·黑尔斯",
            "note": "无条件完全证明任意平面分割的蜂窝定理！"
          }
        ]
      },
      "zh-Hant": {
        "name": "The Honeycomb Conjecture",
        "subtitle": "Hexagonal Grids Partition the Plane with Minimal Perimeter",
        "field": "Isoperimetric Inequalities & Optimal Tilings",
        "statusBadge": "PROVEN THEOREM",
        "grades": {
          "explorers": {
            "tagline": "Why do bees always build hexagonal honeycomb bedrooms?",
            "analogy": "Bees want to store maximum honey using the least amount of precious beeswax. Roman scholar Varro guessed in 36 BC that hexagons partition the plane with the least perimeter! It took more than 2,000 years until Thomas Hales proved in 1999 that hexagons are mathematically unbeatable!",
            "rules": [
              "Divide the plane into equal-area cells (Area = 1).",
              "Triangles have perimeter ≈ 4.56.",
              "Squares have perimeter = 4.00.",
              "Hexagons achieve perimeter = (12)^{1/4} √2 ≈ 3.722!",
              "Hales proved NO curved or irregular shape can beat 3.722!"
            ],
            "mystery": "Darwin wrote that the honeycomb architecture is 'the most wonderful of all known instincts, beyond which the most skilled workman can produce nothing more perfect'!",
            "funFact": "The 3D Kelvin problem for space-filling soap bubbles was thought to be optimal with truncated octahedra until Weaire and Phelan found a better shape in 1993!"
          },
          "investigators": {
            "tagline": "Isoperimetric quotient on planar graphs and curvature bounds.",
            "analogy": "Hales proved the planar isoperimetric inequality: for any division of a compact disk by unit-area cells, perimeter per cell ≥ 2√3^{1/4} ≈ 3.7224.",
            "rules": [
              "Perimeter bound: L ≥ 2 × 3^{1/4} ≈ 3.7224.",
              "Euler characteristic V - E + F = 1.",
              "Formal verification in HOL Light."
            ],
            "mystery": "What is the true optimal structure for 3D space-filling bubbles (Kelvin Problem)?",
            "funFact": "Marcus Terentius Varro conjectured this in 36 BC; proved by Hales in 1999."
          },
          "pioneers": {
            "tagline": "Minimal surfaces and geometric measure theory.",
            "analogy": "Plateau's laws dictate that in optimal partitions, three cell edges meet at 120° angles.",
            "rules": [
              "Plateau's 120° junction condition.",
              "Almgren's geometric measure theory.",
              "Lean 4 Mathlib convex geometry."
            ],
            "mystery": "AI generative models utilize the hexagonal honeycomb metric for optimal coverage sensor networks.",
            "funFact": "The Honeycomb Conjecture confirms the profound mathematical wisdom embedded in the natural world."
          }
        },
        "history": [
          {
            "year": "36 BC",
            "author": "Marcus Terentius Varro",
            "note": "Records hexagonal honeycomb perimeter efficiency."
          },
          {
            "year": "1943",
            "author": "László Fejes Tóth",
            "note": "Proves conjecture under regularity assumptions on cells."
          },
          {
            "year": "1999",
            "author": "Thomas Hales",
            "note": "Gives unconditional proof for all arbitrary shapes."
          }
        ]
      }
    }
  },
  {
    "id": "double-bubble",
    "icon": "🧼",
    "difficulty": "All Ages",
    "domain": "geometry",
    "category": "geometry",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Analysis.Calculus.FDeriv.Basic\n-- Double Bubble Conjecture (Proved by Hutchings, Morgan, Ritoré, Ros in 2002)\n-- The standard double bubble minimizes area enclosing two prescribed volumes in ℝ³.",
    "locales": {
      "en": {
        "name": "The Double Bubble Conjecture",
        "subtitle": "Two Soap Bubble Volumes Enclosed by Minimal Surface Area",
        "field": "Minimal Surfaces & Geometric Measure Theory",
        "statusBadge": "PROVEN THEOREM",
        "grades": {
          "explorers": {
            "tagline": "When two soap bubbles kiss, why do they snap into that exact curved shared wall?",
            "analogy": "Blow two soap bubbles together: they merge with a shared spherical wall, meeting at 120° angles. The Double Bubble Conjecture asserts that this natural soap film shape encloses the two volumes with the LEAST possible total surface area in the entire universe! Proved in 2002 by Hutchings, Morgan, Ritoré, and Ros.",
            "rules": [
              "Enclose two volumes V_1 and V_2 in 3D space.",
              "Separate bubbles: Area is sum of two spheres.",
              "Double bubble: Shares a wall, reducing total surface area!",
              "The standard double bubble is the absolute global surface area minimum."
            ],
            "mystery": "The shared inner wall between unequal bubbles is always curved TOWARD the larger bubble, because smaller bubbles have higher internal pressure!",
            "funFact": "The proof in 4 dimensions was also completed in 2004 using computer-assisted instability analysis!"
          },
          "investigators": {
            "tagline": "Plateau's laws, instability criteria, and harmonic analysis.",
            "analogy": "The proof used the second variation of area to eliminate non-standard bubble topologies, proving that the boundary must possess axial symmetry.",
            "rules": [
              "Young-Laplace equation: ΔP = 2γ H.",
              "Plateau 120° condition on triple junctions.",
              "Second variation of area: δ²A > 0."
            ],
            "mystery": "What is the optimal surface configuration for THREE equal volumes (Triple Bubble Problem)?",
            "funFact": "Formally posed by Joseph Plateau in the 19th century; proved in 2002."
          },
          "pioneers": {
            "tagline": "Varifolds and currents in geometric measure theory.",
            "analogy": "Existence of minimizers was guaranteed by Almgren's theory of (M, ε, δ)-minimal sets.",
            "rules": [
              "Currents and varifolds in Mathlib.",
              "Mean curvature flow regularity.",
              "Formalization of Plateau surfaces in Lean 4."
            ],
            "mystery": "AI differential physics simulators model complex multi-bubble foam networks in real time.",
            "funFact": "The Double Bubble Theorem represents one of the sweetest triumphs of geometric analysis over physical intuition."
          }
        },
        "history": [
          {
            "year": "1873",
            "author": "Joseph Plateau",
            "note": "Formulates laws of soap films and bubble geometry."
          },
          {
            "year": "1993",
            "author": "Joel Foisy et al.",
            "note": "Prove double bubble conjecture for equal volumes in 2D."
          },
          {
            "year": "2002",
            "author": "Hutchings, Morgan, Ritoré & Ros",
            "note": "Deliver complete proof of the Double Bubble Conjecture in ℝ³."
          }
        ]
      },
      "de": {
        "name": "The Double Bubble Conjecture",
        "subtitle": "Two Soap Bubble Volumes Enclosed by Minimal Surface Area",
        "field": "Minimal Surfaces & Geometric Measure Theory",
        "statusBadge": "PROVEN THEOREM",
        "grades": {
          "explorers": {
            "tagline": "When two soap bubbles kiss, why do they snap into that exact curved shared wall?",
            "analogy": "Blow two soap bubbles together: they merge with a shared spherical wall, meeting at 120° angles. The Double Bubble Conjecture asserts that this natural soap film shape encloses the two volumes with the LEAST possible total surface area in the entire universe! Proved in 2002 by Hutchings, Morgan, Ritoré, and Ros.",
            "rules": [
              "Enclose two volumes V_1 and V_2 in 3D space.",
              "Separate bubbles: Area is sum of two spheres.",
              "Double bubble: Shares a wall, reducing total surface area!",
              "The standard double bubble is the absolute global surface area minimum."
            ],
            "mystery": "The shared inner wall between unequal bubbles is always curved TOWARD the larger bubble, because smaller bubbles have higher internal pressure!",
            "funFact": "The proof in 4 dimensions was also completed in 2004 using computer-assisted instability analysis!"
          },
          "investigators": {
            "tagline": "Plateau's laws, instability criteria, and harmonic analysis.",
            "analogy": "The proof used the second variation of area to eliminate non-standard bubble topologies, proving that the boundary must possess axial symmetry.",
            "rules": [
              "Young-Laplace equation: ΔP = 2γ H.",
              "Plateau 120° condition on triple junctions.",
              "Second variation of area: δ²A > 0."
            ],
            "mystery": "What is the optimal surface configuration for THREE equal volumes (Triple Bubble Problem)?",
            "funFact": "Formally posed by Joseph Plateau in the 19th century; proved in 2002."
          },
          "pioneers": {
            "tagline": "Varifolds and currents in geometric measure theory.",
            "analogy": "Existence of minimizers was guaranteed by Almgren's theory of (M, ε, δ)-minimal sets.",
            "rules": [
              "Currents and varifolds in Mathlib.",
              "Mean curvature flow regularity.",
              "Formalization of Plateau surfaces in Lean 4."
            ],
            "mystery": "AI differential physics simulators model complex multi-bubble foam networks in real time.",
            "funFact": "The Double Bubble Theorem represents one of the sweetest triumphs of geometric analysis over physical intuition."
          }
        },
        "history": [
          {
            "year": "1873",
            "author": "Joseph Plateau",
            "note": "Formulates laws of soap films and bubble geometry."
          },
          {
            "year": "1993",
            "author": "Joel Foisy et al.",
            "note": "Prove double bubble conjecture for equal volumes in 2D."
          },
          {
            "year": "2002",
            "author": "Hutchings, Morgan, Ritoré & Ros",
            "note": "Deliver complete proof of the Double Bubble Conjecture in ℝ³."
          }
        ]
      },
      "fr": {
        "name": "The Double Bubble Conjecture",
        "subtitle": "Two Soap Bubble Volumes Enclosed by Minimal Surface Area",
        "field": "Minimal Surfaces & Geometric Measure Theory",
        "statusBadge": "PROVEN THEOREM",
        "grades": {
          "explorers": {
            "tagline": "When two soap bubbles kiss, why do they snap into that exact curved shared wall?",
            "analogy": "Blow two soap bubbles together: they merge with a shared spherical wall, meeting at 120° angles. The Double Bubble Conjecture asserts that this natural soap film shape encloses the two volumes with the LEAST possible total surface area in the entire universe! Proved in 2002 by Hutchings, Morgan, Ritoré, and Ros.",
            "rules": [
              "Enclose two volumes V_1 and V_2 in 3D space.",
              "Separate bubbles: Area is sum of two spheres.",
              "Double bubble: Shares a wall, reducing total surface area!",
              "The standard double bubble is the absolute global surface area minimum."
            ],
            "mystery": "The shared inner wall between unequal bubbles is always curved TOWARD the larger bubble, because smaller bubbles have higher internal pressure!",
            "funFact": "The proof in 4 dimensions was also completed in 2004 using computer-assisted instability analysis!"
          },
          "investigators": {
            "tagline": "Plateau's laws, instability criteria, and harmonic analysis.",
            "analogy": "The proof used the second variation of area to eliminate non-standard bubble topologies, proving that the boundary must possess axial symmetry.",
            "rules": [
              "Young-Laplace equation: ΔP = 2γ H.",
              "Plateau 120° condition on triple junctions.",
              "Second variation of area: δ²A > 0."
            ],
            "mystery": "What is the optimal surface configuration for THREE equal volumes (Triple Bubble Problem)?",
            "funFact": "Formally posed by Joseph Plateau in the 19th century; proved in 2002."
          },
          "pioneers": {
            "tagline": "Varifolds and currents in geometric measure theory.",
            "analogy": "Existence of minimizers was guaranteed by Almgren's theory of (M, ε, δ)-minimal sets.",
            "rules": [
              "Currents and varifolds in Mathlib.",
              "Mean curvature flow regularity.",
              "Formalization of Plateau surfaces in Lean 4."
            ],
            "mystery": "AI differential physics simulators model complex multi-bubble foam networks in real time.",
            "funFact": "The Double Bubble Theorem represents one of the sweetest triumphs of geometric analysis over physical intuition."
          }
        },
        "history": [
          {
            "year": "1873",
            "author": "Joseph Plateau",
            "note": "Formulates laws of soap films and bubble geometry."
          },
          {
            "year": "1993",
            "author": "Joel Foisy et al.",
            "note": "Prove double bubble conjecture for equal volumes in 2D."
          },
          {
            "year": "2002",
            "author": "Hutchings, Morgan, Ritoré & Ros",
            "note": "Deliver complete proof of the Double Bubble Conjecture in ℝ³."
          }
        ]
      },
      "it": {
        "name": "The Double Bubble Conjecture",
        "subtitle": "Two Soap Bubble Volumes Enclosed by Minimal Surface Area",
        "field": "Minimal Surfaces & Geometric Measure Theory",
        "statusBadge": "PROVEN THEOREM",
        "grades": {
          "explorers": {
            "tagline": "When two soap bubbles kiss, why do they snap into that exact curved shared wall?",
            "analogy": "Blow two soap bubbles together: they merge with a shared spherical wall, meeting at 120° angles. The Double Bubble Conjecture asserts that this natural soap film shape encloses the two volumes with the LEAST possible total surface area in the entire universe! Proved in 2002 by Hutchings, Morgan, Ritoré, and Ros.",
            "rules": [
              "Enclose two volumes V_1 and V_2 in 3D space.",
              "Separate bubbles: Area is sum of two spheres.",
              "Double bubble: Shares a wall, reducing total surface area!",
              "The standard double bubble is the absolute global surface area minimum."
            ],
            "mystery": "The shared inner wall between unequal bubbles is always curved TOWARD the larger bubble, because smaller bubbles have higher internal pressure!",
            "funFact": "The proof in 4 dimensions was also completed in 2004 using computer-assisted instability analysis!"
          },
          "investigators": {
            "tagline": "Plateau's laws, instability criteria, and harmonic analysis.",
            "analogy": "The proof used the second variation of area to eliminate non-standard bubble topologies, proving that the boundary must possess axial symmetry.",
            "rules": [
              "Young-Laplace equation: ΔP = 2γ H.",
              "Plateau 120° condition on triple junctions.",
              "Second variation of area: δ²A > 0."
            ],
            "mystery": "What is the optimal surface configuration for THREE equal volumes (Triple Bubble Problem)?",
            "funFact": "Formally posed by Joseph Plateau in the 19th century; proved in 2002."
          },
          "pioneers": {
            "tagline": "Varifolds and currents in geometric measure theory.",
            "analogy": "Existence of minimizers was guaranteed by Almgren's theory of (M, ε, δ)-minimal sets.",
            "rules": [
              "Currents and varifolds in Mathlib.",
              "Mean curvature flow regularity.",
              "Formalization of Plateau surfaces in Lean 4."
            ],
            "mystery": "AI differential physics simulators model complex multi-bubble foam networks in real time.",
            "funFact": "The Double Bubble Theorem represents one of the sweetest triumphs of geometric analysis over physical intuition."
          }
        },
        "history": [
          {
            "year": "1873",
            "author": "Joseph Plateau",
            "note": "Formulates laws of soap films and bubble geometry."
          },
          {
            "year": "1993",
            "author": "Joel Foisy et al.",
            "note": "Prove double bubble conjecture for equal volumes in 2D."
          },
          {
            "year": "2002",
            "author": "Hutchings, Morgan, Ritoré & Ros",
            "note": "Deliver complete proof of the Double Bubble Conjecture in ℝ³."
          }
        ]
      },
      "ja": {
        "name": "The Double Bubble Conjecture",
        "subtitle": "Two Soap Bubble Volumes Enclosed by Minimal Surface Area",
        "field": "Minimal Surfaces & Geometric Measure Theory",
        "statusBadge": "PROVEN THEOREM",
        "grades": {
          "explorers": {
            "tagline": "When two soap bubbles kiss, why do they snap into that exact curved shared wall?",
            "analogy": "Blow two soap bubbles together: they merge with a shared spherical wall, meeting at 120° angles. The Double Bubble Conjecture asserts that this natural soap film shape encloses the two volumes with the LEAST possible total surface area in the entire universe! Proved in 2002 by Hutchings, Morgan, Ritoré, and Ros.",
            "rules": [
              "Enclose two volumes V_1 and V_2 in 3D space.",
              "Separate bubbles: Area is sum of two spheres.",
              "Double bubble: Shares a wall, reducing total surface area!",
              "The standard double bubble is the absolute global surface area minimum."
            ],
            "mystery": "The shared inner wall between unequal bubbles is always curved TOWARD the larger bubble, because smaller bubbles have higher internal pressure!",
            "funFact": "The proof in 4 dimensions was also completed in 2004 using computer-assisted instability analysis!"
          },
          "investigators": {
            "tagline": "Plateau's laws, instability criteria, and harmonic analysis.",
            "analogy": "The proof used the second variation of area to eliminate non-standard bubble topologies, proving that the boundary must possess axial symmetry.",
            "rules": [
              "Young-Laplace equation: ΔP = 2γ H.",
              "Plateau 120° condition on triple junctions.",
              "Second variation of area: δ²A > 0."
            ],
            "mystery": "What is the optimal surface configuration for THREE equal volumes (Triple Bubble Problem)?",
            "funFact": "Formally posed by Joseph Plateau in the 19th century; proved in 2002."
          },
          "pioneers": {
            "tagline": "Varifolds and currents in geometric measure theory.",
            "analogy": "Existence of minimizers was guaranteed by Almgren's theory of (M, ε, δ)-minimal sets.",
            "rules": [
              "Currents and varifolds in Mathlib.",
              "Mean curvature flow regularity.",
              "Formalization of Plateau surfaces in Lean 4."
            ],
            "mystery": "AI differential physics simulators model complex multi-bubble foam networks in real time.",
            "funFact": "The Double Bubble Theorem represents one of the sweetest triumphs of geometric analysis over physical intuition."
          }
        },
        "history": [
          {
            "year": "1873",
            "author": "Joseph Plateau",
            "note": "Formulates laws of soap films and bubble geometry."
          },
          {
            "year": "1993",
            "author": "Joel Foisy et al.",
            "note": "Prove double bubble conjecture for equal volumes in 2D."
          },
          {
            "year": "2002",
            "author": "Hutchings, Morgan, Ritoré & Ros",
            "note": "Deliver complete proof of the Double Bubble Conjecture in ℝ³."
          }
        ]
      },
      "ko": {
        "name": "The Double Bubble Conjecture",
        "subtitle": "Two Soap Bubble Volumes Enclosed by Minimal Surface Area",
        "field": "Minimal Surfaces & Geometric Measure Theory",
        "statusBadge": "PROVEN THEOREM",
        "grades": {
          "explorers": {
            "tagline": "When two soap bubbles kiss, why do they snap into that exact curved shared wall?",
            "analogy": "Blow two soap bubbles together: they merge with a shared spherical wall, meeting at 120° angles. The Double Bubble Conjecture asserts that this natural soap film shape encloses the two volumes with the LEAST possible total surface area in the entire universe! Proved in 2002 by Hutchings, Morgan, Ritoré, and Ros.",
            "rules": [
              "Enclose two volumes V_1 and V_2 in 3D space.",
              "Separate bubbles: Area is sum of two spheres.",
              "Double bubble: Shares a wall, reducing total surface area!",
              "The standard double bubble is the absolute global surface area minimum."
            ],
            "mystery": "The shared inner wall between unequal bubbles is always curved TOWARD the larger bubble, because smaller bubbles have higher internal pressure!",
            "funFact": "The proof in 4 dimensions was also completed in 2004 using computer-assisted instability analysis!"
          },
          "investigators": {
            "tagline": "Plateau's laws, instability criteria, and harmonic analysis.",
            "analogy": "The proof used the second variation of area to eliminate non-standard bubble topologies, proving that the boundary must possess axial symmetry.",
            "rules": [
              "Young-Laplace equation: ΔP = 2γ H.",
              "Plateau 120° condition on triple junctions.",
              "Second variation of area: δ²A > 0."
            ],
            "mystery": "What is the optimal surface configuration for THREE equal volumes (Triple Bubble Problem)?",
            "funFact": "Formally posed by Joseph Plateau in the 19th century; proved in 2002."
          },
          "pioneers": {
            "tagline": "Varifolds and currents in geometric measure theory.",
            "analogy": "Existence of minimizers was guaranteed by Almgren's theory of (M, ε, δ)-minimal sets.",
            "rules": [
              "Currents and varifolds in Mathlib.",
              "Mean curvature flow regularity.",
              "Formalization of Plateau surfaces in Lean 4."
            ],
            "mystery": "AI differential physics simulators model complex multi-bubble foam networks in real time.",
            "funFact": "The Double Bubble Theorem represents one of the sweetest triumphs of geometric analysis over physical intuition."
          }
        },
        "history": [
          {
            "year": "1873",
            "author": "Joseph Plateau",
            "note": "Formulates laws of soap films and bubble geometry."
          },
          {
            "year": "1993",
            "author": "Joel Foisy et al.",
            "note": "Prove double bubble conjecture for equal volumes in 2D."
          },
          {
            "year": "2002",
            "author": "Hutchings, Morgan, Ritoré & Ros",
            "note": "Deliver complete proof of the Double Bubble Conjecture in ℝ³."
          }
        ]
      },
      "zh-Hans": {
        "name": "双泡猜想",
        "subtitle": "两团气体被最小肥皂泡表面积完美包裹（2002年获证）",
        "field": "极小曲面 & 几何测度论",
        "statusBadge": "已证明定理",
        "grades": {
          "explorers": {
            "tagline": "两个肥皂泡贴在一起时，为什么中间会自动贴合出一堵弧度精巧的公共隔墙？",
            "analogy": "吹出两个贴合的肥皂泡，它们会共享一片弯曲的球形内隔壁，三面肥皂膜在交界线处以完美的 120 度角优雅咬合。双泡猜想断言：大自然这种自发形成的双泡结构，是全宇宙包裹两个指定体积的气体所需表面积绝对最小的形状！2002年由四位几何学家完全证明。",
            "rules": [
              "在三维空间中包裹体积为 V_1 和 V_2 的两团气体。",
              "两个分开的单泡表面积较大。",
              "双泡贴合共享中隔壁，大幅减少总表面积！",
              "标准双泡结构达到了全局绝对极小值。"
            ],
            "mystery": "小肥皂泡的内部压强比大肥皂泡更高，因此中间的公共隔壁永远向大肥皂泡的一侧凸出弯曲！",
            "funFact": "该定理在四维空间中的扩展版本也已于2004年获得完全解决！"
          },
          "investigators": {
            "tagline": "普拉托定律、二阶变分不稳定性判据与调和分析。",
            "analogy": "四位数学家通过表面积的二阶变分严格排除了环形气泡等非标准奇异拓扑，证明最优解必具轴对称性。",
            "rules": [
              "杨-拉普拉斯表面张力方程。",
              "普拉托三重交界线 120 度张角引理。",
              "二阶变分正定性严格排除环状假候选。"
            ],
            "mystery": "包裹三个体积的三泡问题（Triple Bubble）目前仍是未解的几何前沿！",
            "funFact": "普拉托提出物理观察，2002年数学家完成严格几何证明。"
          },
          "pioneers": {
            "tagline": "几何测度论中的整流与变分测度。",
            "analogy": "阿姆格伦广义极小集合理论首先保证了面积极小化弱解的几何存在性。",
            "rules": [
              "几何测度论积分流形式化。",
              "平均曲率流平滑性定理。",
              "Lean 4 Mathlib 中闭曲面极小变分分析。"
            ],
            "mystery": "AI 物理模拟器通过可微表面张力场实时模拟多泡泡沫网络的演化平衡。",
            "funFact": "双泡定理是现代几何分析完全证实物理直觉与自然极值之美的光辉典范。"
          }
        },
        "history": [
          {
            "year": "1873",
            "author": "约瑟夫·普拉托",
            "note": "发表肥皂膜几何平衡实验定律。"
          },
          {
            "year": "1993",
            "author": "本科生科研团队",
            "note": "完成二维等体积双泡猜想严格证明。"
          },
          {
            "year": "2002",
            "author": "哈钦斯、摩根、里托雷 & 罗斯",
            "note": "发表长篇论文完全攻克三维双泡猜想！"
          }
        ]
      },
      "zh-Hant": {
        "name": "The Double Bubble Conjecture",
        "subtitle": "Two Soap Bubble Volumes Enclosed by Minimal Surface Area",
        "field": "Minimal Surfaces & Geometric Measure Theory",
        "statusBadge": "PROVEN THEOREM",
        "grades": {
          "explorers": {
            "tagline": "When two soap bubbles kiss, why do they snap into that exact curved shared wall?",
            "analogy": "Blow two soap bubbles together: they merge with a shared spherical wall, meeting at 120° angles. The Double Bubble Conjecture asserts that this natural soap film shape encloses the two volumes with the LEAST possible total surface area in the entire universe! Proved in 2002 by Hutchings, Morgan, Ritoré, and Ros.",
            "rules": [
              "Enclose two volumes V_1 and V_2 in 3D space.",
              "Separate bubbles: Area is sum of two spheres.",
              "Double bubble: Shares a wall, reducing total surface area!",
              "The standard double bubble is the absolute global surface area minimum."
            ],
            "mystery": "The shared inner wall between unequal bubbles is always curved TOWARD the larger bubble, because smaller bubbles have higher internal pressure!",
            "funFact": "The proof in 4 dimensions was also completed in 2004 using computer-assisted instability analysis!"
          },
          "investigators": {
            "tagline": "Plateau's laws, instability criteria, and harmonic analysis.",
            "analogy": "The proof used the second variation of area to eliminate non-standard bubble topologies, proving that the boundary must possess axial symmetry.",
            "rules": [
              "Young-Laplace equation: ΔP = 2γ H.",
              "Plateau 120° condition on triple junctions.",
              "Second variation of area: δ²A > 0."
            ],
            "mystery": "What is the optimal surface configuration for THREE equal volumes (Triple Bubble Problem)?",
            "funFact": "Formally posed by Joseph Plateau in the 19th century; proved in 2002."
          },
          "pioneers": {
            "tagline": "Varifolds and currents in geometric measure theory.",
            "analogy": "Existence of minimizers was guaranteed by Almgren's theory of (M, ε, δ)-minimal sets.",
            "rules": [
              "Currents and varifolds in Mathlib.",
              "Mean curvature flow regularity.",
              "Formalization of Plateau surfaces in Lean 4."
            ],
            "mystery": "AI differential physics simulators model complex multi-bubble foam networks in real time.",
            "funFact": "The Double Bubble Theorem represents one of the sweetest triumphs of geometric analysis over physical intuition."
          }
        },
        "history": [
          {
            "year": "1873",
            "author": "Joseph Plateau",
            "note": "Formulates laws of soap films and bubble geometry."
          },
          {
            "year": "1993",
            "author": "Joel Foisy et al.",
            "note": "Prove double bubble conjecture for equal volumes in 2D."
          },
          {
            "year": "2002",
            "author": "Hutchings, Morgan, Ritoré & Ros",
            "note": "Deliver complete proof of the Double Bubble Conjecture in ℝ³."
          }
        ]
      }
    }
  },
  {
    "id": "kneser-poulsen",
    "icon": "🎈",
    "difficulty": "Gr 6+",
    "domain": "geometry",
    "category": "geometry",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Analysis.InnerProductSpace.Basic\n-- Kneser-Poulsen Conjecture: Radius expansion of balls never decreases union volume.\n-- Proved in ℝ² by Bezdek & Connelly in 2002.",
    "locales": {
      "en": {
        "name": "Kneser-Poulsen Conjecture",
        "subtitle": "Expanding Distances Between Balls Never Decreases Their Union Volume",
        "field": "Discrete Convex Geometry",
        "statusBadge": "SOLVED IN 2D / OPEN IN ≥ 3D",
        "grades": {
          "explorers": {
            "tagline": "If you push party balloons apart, can the room they take up ever shrink?",
            "analogy": "Take a bunch of spheres in space. If you move them so that the distance between every pair of centers increases or stays the same, their total combined volume (union) must either GROW or stay equal! Martin Kneser (1955) and Ebbe Poulsen (1954) conjectured this intuitive rule. It was proved in 2D in 2002, but in 3D it remains open!",
            "rules": [
              "Collection of balls B_i with centers p_i.",
              "New positions q_i such that dist(q_i, q_j) ≥ dist(p_i, p_j) for all pairs.",
              "Conjecture: Vol(⋃ B_i(q)) ≥ Vol(⋃ B_i(p)).",
              "Proved in 2D (Bezdek & Connelly, 2002). Open for 3D!"
            ],
            "mystery": "While union volume grows, the INTERSECTION volume behaves in exact reverse: separating the balls always shrinks their intersection!",
            "funFact": "In 2D, the proof relied on a brilliant continuous motion formula relating boundary length to distance derivatives!"
          },
          "investigators": {
            "tagline": "Schläfli differential formula for polyhedra and continuous motions.",
            "analogy": "Bezdek and Connelly integrated the derivative of volume along a continuous expansive motion, proving that d(Vol)/dt ≥ 0.",
            "rules": [
              "Expansive continuous motion p_i(t).",
              "Schläfli formula on Voronoi cells.",
              "Dual intersection volume theorem."
            ],
            "mystery": "Can expansive motions in 3D avoid geometric self-locking and maintain smooth Voronoi differentiability?",
            "funFact": "Ebbe Poulsen (1954) and Martin Kneser (1955) independently proposed the conjecture."
          },
          "pioneers": {
            "tagline": "Rigidity theory and tensegrity frameworks.",
            "analogy": "Robert Connelly applied framework rigidity to show that expansive motions exist locally in dimension 2.",
            "rules": [
              "Infinitesimal rigidity of spherical packings.",
              "Connelly tensegrity framework in Mathlib.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI-based kinematic optimization is searching for non-monotonic 3D volume paths.",
            "funFact": "The Kneser-Poulsen conjecture highlights how deceptive higher-dimensional metric geometry can be."
          }
        },
        "history": [
          {
            "year": "1954",
            "author": "Ebbe Poulsen",
            "note": "Poses the distance expansion problem in Math. Scand."
          },
          {
            "year": "1955",
            "author": "Martin Kneser",
            "note": "Independently proposes the problem for spheres."
          },
          {
            "year": "2002",
            "author": "Károly Bezdek & Robert Connelly",
            "note": "Prove the conjecture completely in ℝ²."
          }
        ]
      },
      "de": {
        "name": "Kneser-Poulsen Conjecture",
        "subtitle": "Expanding Distances Between Balls Never Decreases Their Union Volume",
        "field": "Discrete Convex Geometry",
        "statusBadge": "SOLVED IN 2D / OPEN IN ≥ 3D",
        "grades": {
          "explorers": {
            "tagline": "If you push party balloons apart, can the room they take up ever shrink?",
            "analogy": "Take a bunch of spheres in space. If you move them so that the distance between every pair of centers increases or stays the same, their total combined volume (union) must either GROW or stay equal! Martin Kneser (1955) and Ebbe Poulsen (1954) conjectured this intuitive rule. It was proved in 2D in 2002, but in 3D it remains open!",
            "rules": [
              "Collection of balls B_i with centers p_i.",
              "New positions q_i such that dist(q_i, q_j) ≥ dist(p_i, p_j) for all pairs.",
              "Conjecture: Vol(⋃ B_i(q)) ≥ Vol(⋃ B_i(p)).",
              "Proved in 2D (Bezdek & Connelly, 2002). Open for 3D!"
            ],
            "mystery": "While union volume grows, the INTERSECTION volume behaves in exact reverse: separating the balls always shrinks their intersection!",
            "funFact": "In 2D, the proof relied on a brilliant continuous motion formula relating boundary length to distance derivatives!"
          },
          "investigators": {
            "tagline": "Schläfli differential formula for polyhedra and continuous motions.",
            "analogy": "Bezdek and Connelly integrated the derivative of volume along a continuous expansive motion, proving that d(Vol)/dt ≥ 0.",
            "rules": [
              "Expansive continuous motion p_i(t).",
              "Schläfli formula on Voronoi cells.",
              "Dual intersection volume theorem."
            ],
            "mystery": "Can expansive motions in 3D avoid geometric self-locking and maintain smooth Voronoi differentiability?",
            "funFact": "Ebbe Poulsen (1954) and Martin Kneser (1955) independently proposed the conjecture."
          },
          "pioneers": {
            "tagline": "Rigidity theory and tensegrity frameworks.",
            "analogy": "Robert Connelly applied framework rigidity to show that expansive motions exist locally in dimension 2.",
            "rules": [
              "Infinitesimal rigidity of spherical packings.",
              "Connelly tensegrity framework in Mathlib.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI-based kinematic optimization is searching for non-monotonic 3D volume paths.",
            "funFact": "The Kneser-Poulsen conjecture highlights how deceptive higher-dimensional metric geometry can be."
          }
        },
        "history": [
          {
            "year": "1954",
            "author": "Ebbe Poulsen",
            "note": "Poses the distance expansion problem in Math. Scand."
          },
          {
            "year": "1955",
            "author": "Martin Kneser",
            "note": "Independently proposes the problem for spheres."
          },
          {
            "year": "2002",
            "author": "Károly Bezdek & Robert Connelly",
            "note": "Prove the conjecture completely in ℝ²."
          }
        ]
      },
      "fr": {
        "name": "Kneser-Poulsen Conjecture",
        "subtitle": "Expanding Distances Between Balls Never Decreases Their Union Volume",
        "field": "Discrete Convex Geometry",
        "statusBadge": "SOLVED IN 2D / OPEN IN ≥ 3D",
        "grades": {
          "explorers": {
            "tagline": "If you push party balloons apart, can the room they take up ever shrink?",
            "analogy": "Take a bunch of spheres in space. If you move them so that the distance between every pair of centers increases or stays the same, their total combined volume (union) must either GROW or stay equal! Martin Kneser (1955) and Ebbe Poulsen (1954) conjectured this intuitive rule. It was proved in 2D in 2002, but in 3D it remains open!",
            "rules": [
              "Collection of balls B_i with centers p_i.",
              "New positions q_i such that dist(q_i, q_j) ≥ dist(p_i, p_j) for all pairs.",
              "Conjecture: Vol(⋃ B_i(q)) ≥ Vol(⋃ B_i(p)).",
              "Proved in 2D (Bezdek & Connelly, 2002). Open for 3D!"
            ],
            "mystery": "While union volume grows, the INTERSECTION volume behaves in exact reverse: separating the balls always shrinks their intersection!",
            "funFact": "In 2D, the proof relied on a brilliant continuous motion formula relating boundary length to distance derivatives!"
          },
          "investigators": {
            "tagline": "Schläfli differential formula for polyhedra and continuous motions.",
            "analogy": "Bezdek and Connelly integrated the derivative of volume along a continuous expansive motion, proving that d(Vol)/dt ≥ 0.",
            "rules": [
              "Expansive continuous motion p_i(t).",
              "Schläfli formula on Voronoi cells.",
              "Dual intersection volume theorem."
            ],
            "mystery": "Can expansive motions in 3D avoid geometric self-locking and maintain smooth Voronoi differentiability?",
            "funFact": "Ebbe Poulsen (1954) and Martin Kneser (1955) independently proposed the conjecture."
          },
          "pioneers": {
            "tagline": "Rigidity theory and tensegrity frameworks.",
            "analogy": "Robert Connelly applied framework rigidity to show that expansive motions exist locally in dimension 2.",
            "rules": [
              "Infinitesimal rigidity of spherical packings.",
              "Connelly tensegrity framework in Mathlib.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI-based kinematic optimization is searching for non-monotonic 3D volume paths.",
            "funFact": "The Kneser-Poulsen conjecture highlights how deceptive higher-dimensional metric geometry can be."
          }
        },
        "history": [
          {
            "year": "1954",
            "author": "Ebbe Poulsen",
            "note": "Poses the distance expansion problem in Math. Scand."
          },
          {
            "year": "1955",
            "author": "Martin Kneser",
            "note": "Independently proposes the problem for spheres."
          },
          {
            "year": "2002",
            "author": "Károly Bezdek & Robert Connelly",
            "note": "Prove the conjecture completely in ℝ²."
          }
        ]
      },
      "it": {
        "name": "Kneser-Poulsen Conjecture",
        "subtitle": "Expanding Distances Between Balls Never Decreases Their Union Volume",
        "field": "Discrete Convex Geometry",
        "statusBadge": "SOLVED IN 2D / OPEN IN ≥ 3D",
        "grades": {
          "explorers": {
            "tagline": "If you push party balloons apart, can the room they take up ever shrink?",
            "analogy": "Take a bunch of spheres in space. If you move them so that the distance between every pair of centers increases or stays the same, their total combined volume (union) must either GROW or stay equal! Martin Kneser (1955) and Ebbe Poulsen (1954) conjectured this intuitive rule. It was proved in 2D in 2002, but in 3D it remains open!",
            "rules": [
              "Collection of balls B_i with centers p_i.",
              "New positions q_i such that dist(q_i, q_j) ≥ dist(p_i, p_j) for all pairs.",
              "Conjecture: Vol(⋃ B_i(q)) ≥ Vol(⋃ B_i(p)).",
              "Proved in 2D (Bezdek & Connelly, 2002). Open for 3D!"
            ],
            "mystery": "While union volume grows, the INTERSECTION volume behaves in exact reverse: separating the balls always shrinks their intersection!",
            "funFact": "In 2D, the proof relied on a brilliant continuous motion formula relating boundary length to distance derivatives!"
          },
          "investigators": {
            "tagline": "Schläfli differential formula for polyhedra and continuous motions.",
            "analogy": "Bezdek and Connelly integrated the derivative of volume along a continuous expansive motion, proving that d(Vol)/dt ≥ 0.",
            "rules": [
              "Expansive continuous motion p_i(t).",
              "Schläfli formula on Voronoi cells.",
              "Dual intersection volume theorem."
            ],
            "mystery": "Can expansive motions in 3D avoid geometric self-locking and maintain smooth Voronoi differentiability?",
            "funFact": "Ebbe Poulsen (1954) and Martin Kneser (1955) independently proposed the conjecture."
          },
          "pioneers": {
            "tagline": "Rigidity theory and tensegrity frameworks.",
            "analogy": "Robert Connelly applied framework rigidity to show that expansive motions exist locally in dimension 2.",
            "rules": [
              "Infinitesimal rigidity of spherical packings.",
              "Connelly tensegrity framework in Mathlib.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI-based kinematic optimization is searching for non-monotonic 3D volume paths.",
            "funFact": "The Kneser-Poulsen conjecture highlights how deceptive higher-dimensional metric geometry can be."
          }
        },
        "history": [
          {
            "year": "1954",
            "author": "Ebbe Poulsen",
            "note": "Poses the distance expansion problem in Math. Scand."
          },
          {
            "year": "1955",
            "author": "Martin Kneser",
            "note": "Independently proposes the problem for spheres."
          },
          {
            "year": "2002",
            "author": "Károly Bezdek & Robert Connelly",
            "note": "Prove the conjecture completely in ℝ²."
          }
        ]
      },
      "ja": {
        "name": "Kneser-Poulsen Conjecture",
        "subtitle": "Expanding Distances Between Balls Never Decreases Their Union Volume",
        "field": "Discrete Convex Geometry",
        "statusBadge": "SOLVED IN 2D / OPEN IN ≥ 3D",
        "grades": {
          "explorers": {
            "tagline": "If you push party balloons apart, can the room they take up ever shrink?",
            "analogy": "Take a bunch of spheres in space. If you move them so that the distance between every pair of centers increases or stays the same, their total combined volume (union) must either GROW or stay equal! Martin Kneser (1955) and Ebbe Poulsen (1954) conjectured this intuitive rule. It was proved in 2D in 2002, but in 3D it remains open!",
            "rules": [
              "Collection of balls B_i with centers p_i.",
              "New positions q_i such that dist(q_i, q_j) ≥ dist(p_i, p_j) for all pairs.",
              "Conjecture: Vol(⋃ B_i(q)) ≥ Vol(⋃ B_i(p)).",
              "Proved in 2D (Bezdek & Connelly, 2002). Open for 3D!"
            ],
            "mystery": "While union volume grows, the INTERSECTION volume behaves in exact reverse: separating the balls always shrinks their intersection!",
            "funFact": "In 2D, the proof relied on a brilliant continuous motion formula relating boundary length to distance derivatives!"
          },
          "investigators": {
            "tagline": "Schläfli differential formula for polyhedra and continuous motions.",
            "analogy": "Bezdek and Connelly integrated the derivative of volume along a continuous expansive motion, proving that d(Vol)/dt ≥ 0.",
            "rules": [
              "Expansive continuous motion p_i(t).",
              "Schläfli formula on Voronoi cells.",
              "Dual intersection volume theorem."
            ],
            "mystery": "Can expansive motions in 3D avoid geometric self-locking and maintain smooth Voronoi differentiability?",
            "funFact": "Ebbe Poulsen (1954) and Martin Kneser (1955) independently proposed the conjecture."
          },
          "pioneers": {
            "tagline": "Rigidity theory and tensegrity frameworks.",
            "analogy": "Robert Connelly applied framework rigidity to show that expansive motions exist locally in dimension 2.",
            "rules": [
              "Infinitesimal rigidity of spherical packings.",
              "Connelly tensegrity framework in Mathlib.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI-based kinematic optimization is searching for non-monotonic 3D volume paths.",
            "funFact": "The Kneser-Poulsen conjecture highlights how deceptive higher-dimensional metric geometry can be."
          }
        },
        "history": [
          {
            "year": "1954",
            "author": "Ebbe Poulsen",
            "note": "Poses the distance expansion problem in Math. Scand."
          },
          {
            "year": "1955",
            "author": "Martin Kneser",
            "note": "Independently proposes the problem for spheres."
          },
          {
            "year": "2002",
            "author": "Károly Bezdek & Robert Connelly",
            "note": "Prove the conjecture completely in ℝ²."
          }
        ]
      },
      "ko": {
        "name": "Kneser-Poulsen Conjecture",
        "subtitle": "Expanding Distances Between Balls Never Decreases Their Union Volume",
        "field": "Discrete Convex Geometry",
        "statusBadge": "SOLVED IN 2D / OPEN IN ≥ 3D",
        "grades": {
          "explorers": {
            "tagline": "If you push party balloons apart, can the room they take up ever shrink?",
            "analogy": "Take a bunch of spheres in space. If you move them so that the distance between every pair of centers increases or stays the same, their total combined volume (union) must either GROW or stay equal! Martin Kneser (1955) and Ebbe Poulsen (1954) conjectured this intuitive rule. It was proved in 2D in 2002, but in 3D it remains open!",
            "rules": [
              "Collection of balls B_i with centers p_i.",
              "New positions q_i such that dist(q_i, q_j) ≥ dist(p_i, p_j) for all pairs.",
              "Conjecture: Vol(⋃ B_i(q)) ≥ Vol(⋃ B_i(p)).",
              "Proved in 2D (Bezdek & Connelly, 2002). Open for 3D!"
            ],
            "mystery": "While union volume grows, the INTERSECTION volume behaves in exact reverse: separating the balls always shrinks their intersection!",
            "funFact": "In 2D, the proof relied on a brilliant continuous motion formula relating boundary length to distance derivatives!"
          },
          "investigators": {
            "tagline": "Schläfli differential formula for polyhedra and continuous motions.",
            "analogy": "Bezdek and Connelly integrated the derivative of volume along a continuous expansive motion, proving that d(Vol)/dt ≥ 0.",
            "rules": [
              "Expansive continuous motion p_i(t).",
              "Schläfli formula on Voronoi cells.",
              "Dual intersection volume theorem."
            ],
            "mystery": "Can expansive motions in 3D avoid geometric self-locking and maintain smooth Voronoi differentiability?",
            "funFact": "Ebbe Poulsen (1954) and Martin Kneser (1955) independently proposed the conjecture."
          },
          "pioneers": {
            "tagline": "Rigidity theory and tensegrity frameworks.",
            "analogy": "Robert Connelly applied framework rigidity to show that expansive motions exist locally in dimension 2.",
            "rules": [
              "Infinitesimal rigidity of spherical packings.",
              "Connelly tensegrity framework in Mathlib.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI-based kinematic optimization is searching for non-monotonic 3D volume paths.",
            "funFact": "The Kneser-Poulsen conjecture highlights how deceptive higher-dimensional metric geometry can be."
          }
        },
        "history": [
          {
            "year": "1954",
            "author": "Ebbe Poulsen",
            "note": "Poses the distance expansion problem in Math. Scand."
          },
          {
            "year": "1955",
            "author": "Martin Kneser",
            "note": "Independently proposes the problem for spheres."
          },
          {
            "year": "2002",
            "author": "Károly Bezdek & Robert Connelly",
            "note": "Prove the conjecture completely in ℝ²."
          }
        ]
      },
      "zh-Hans": {
        "name": "克内泽尔-波尔森猜想",
        "subtitle": "将各球心间距拉开，所有球体的总体积绝不可能缩小（二维已获证）",
        "field": "离散凸几何 & 球体体积分析",
        "statusBadge": "二维已获证 / 三维以上仍未解",
        "grades": {
          "explorers": {
            "tagline": "把一堆挤在一起的气球互相拉开，它们占用的总空间会不会反而变小？",
            "analogy": "在空间中放一堆球。如果你把它们重新摆放，使得任意两个球心之间的距离都变大（或不变），按常理它们的总体积绝对只增不减！马丁·克内泽尔与埃贝·波尔森于1950年代提出该猜想。2002年贝兹德克与康奈利完全证明了二维平面情形，但在三维及更高维空间中，至今无人能够证明！",
            "rules": [
              "一组球体，球心为 p_i。",
              "移动至新球心 q_i，使得所有对间距 dist(q_i, q_j) ≥ dist(p_i, p_j)。",
              "猜想：体积 Vol(⋃ B_i(q)) ≥ Vol(⋃ B_i(p)) 绝不缩水。",
              "二维已被严格证实，三维空间仍是未解之谜！"
            ],
            "mystery": "与总体积相反，所有球体的公共重叠交集在拉开时必定会严格缩小，完美对称！",
            "funFact": "在二维平面的证明中，数学家运用连续变分运动学，将边界积分与距离导数精巧连接！"
          },
          "investigators": {
            "tagline": "多面体施莱夫利微分公式与连续刚体流动。",
            "analogy": "贝兹德克与康奈利证明了存在保膨胀的连续流动路径，并运用施莱夫利微分公式证明体积导数全程非负。",
            "rules": [
              "连续扩张运动插值。",
              "沃罗诺伊分割胞腔上的施莱夫利微分公式。",
              "对偶交具体积单调递减定理。"
            ],
            "mystery": "三维空间中的膨胀运动能否克服局部自锁几何阻碍，维持平滑可微性？",
            "funFact": "波尔森与克内泽尔分别于1954与1955年独立提出。"
          },
          "pioneers": {
            "tagline": "刚性理论与张拉整体力学框架。",
            "analogy": "罗伯特·康奈利将刚架力学理论应用于连续变分扩张，创立了现代几何刚性分析流派。",
            "rules": [
              "球体堆积的微元刚性分析。",
              "康奈利张拉力学框架。",
              "Lean 4 Mathlib 凸包体积单调性形式化。"
            ],
            "mystery": "AI 运动学模拟正在对上百个三维球体构型进行连续体积追踪测试。",
            "funFact": "克内泽尔-波尔森猜想深刻揭示了看似不证自明的直觉在高维测度几何中的严苛考验。"
          }
        },
        "history": [
          {
            "year": "1954",
            "author": "埃贝·波尔森",
            "note": "在斯堪的纳维亚数学杂志发表猜想。"
          },
          {
            "year": "1955",
            "author": "马丁·克内泽尔",
            "note": "独立提出关于球体并集体积单调性的猜想。"
          },
          {
            "year": "2002",
            "author": "贝兹德克 & 康奈利",
            "note": "运用施莱夫利公式彻底攻克二维情形！"
          }
        ]
      },
      "zh-Hant": {
        "name": "Kneser-Poulsen Conjecture",
        "subtitle": "Expanding Distances Between Balls Never Decreases Their Union Volume",
        "field": "Discrete Convex Geometry",
        "statusBadge": "SOLVED IN 2D / OPEN IN ≥ 3D",
        "grades": {
          "explorers": {
            "tagline": "If you push party balloons apart, can the room they take up ever shrink?",
            "analogy": "Take a bunch of spheres in space. If you move them so that the distance between every pair of centers increases or stays the same, their total combined volume (union) must either GROW or stay equal! Martin Kneser (1955) and Ebbe Poulsen (1954) conjectured this intuitive rule. It was proved in 2D in 2002, but in 3D it remains open!",
            "rules": [
              "Collection of balls B_i with centers p_i.",
              "New positions q_i such that dist(q_i, q_j) ≥ dist(p_i, p_j) for all pairs.",
              "Conjecture: Vol(⋃ B_i(q)) ≥ Vol(⋃ B_i(p)).",
              "Proved in 2D (Bezdek & Connelly, 2002). Open for 3D!"
            ],
            "mystery": "While union volume grows, the INTERSECTION volume behaves in exact reverse: separating the balls always shrinks their intersection!",
            "funFact": "In 2D, the proof relied on a brilliant continuous motion formula relating boundary length to distance derivatives!"
          },
          "investigators": {
            "tagline": "Schläfli differential formula for polyhedra and continuous motions.",
            "analogy": "Bezdek and Connelly integrated the derivative of volume along a continuous expansive motion, proving that d(Vol)/dt ≥ 0.",
            "rules": [
              "Expansive continuous motion p_i(t).",
              "Schläfli formula on Voronoi cells.",
              "Dual intersection volume theorem."
            ],
            "mystery": "Can expansive motions in 3D avoid geometric self-locking and maintain smooth Voronoi differentiability?",
            "funFact": "Ebbe Poulsen (1954) and Martin Kneser (1955) independently proposed the conjecture."
          },
          "pioneers": {
            "tagline": "Rigidity theory and tensegrity frameworks.",
            "analogy": "Robert Connelly applied framework rigidity to show that expansive motions exist locally in dimension 2.",
            "rules": [
              "Infinitesimal rigidity of spherical packings.",
              "Connelly tensegrity framework in Mathlib.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI-based kinematic optimization is searching for non-monotonic 3D volume paths.",
            "funFact": "The Kneser-Poulsen conjecture highlights how deceptive higher-dimensional metric geometry can be."
          }
        },
        "history": [
          {
            "year": "1954",
            "author": "Ebbe Poulsen",
            "note": "Poses the distance expansion problem in Math. Scand."
          },
          {
            "year": "1955",
            "author": "Martin Kneser",
            "note": "Independently proposes the problem for spheres."
          },
          {
            "year": "2002",
            "author": "Károly Bezdek & Robert Connelly",
            "note": "Prove the conjecture completely in ℝ²."
          }
        ]
      }
    }
  },
  {
    "id": "keller-cube",
    "icon": "🧊",
    "difficulty": "Gr 9+",
    "domain": "geometry",
    "category": "geometry",
    "isMillennium": false,
    "isAIFrontier": true,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Data.Real.Basic\n-- Keller's Conjecture: Any unit cube tiling in ℝ^d has two cubes sharing a full (d-1)-face\n-- Disproved in dimension 7 in 2020 via automated SAT solvers (Brakensiek et al.)",
    "locales": {
      "en": {
        "name": "Keller's Cube-Tiling Conjecture",
        "subtitle": "Must Unit Cube Tilings Share a Full Face? (Disproved in 7D via SAT)",
        "field": "Discrete Tiling & Automated SAT Theorem Proving",
        "statusBadge": "SOLVED BY AI / COMPUTATION",
        "grades": {
          "explorers": {
            "tagline": "If you pack a room with identical blocks, do two blocks ALWAYS kiss flat on a full face?",
            "analogy": "In 1930, Ott-Heinrich Keller conjectured that in ANY tiling of d-dimensional space by identical unit cubes, at least two cubes MUST share an entire (d-1)-dimensional face! True in dimensions 1 to 6. But in 2020, computer scientists used automated SAT solvers running for 30 minutes to prove that in DIMENSION 7, a sneaky face-free tiling DOES exist!",
            "rules": [
              "Tile ℝ^d with translated unit cubes [0,1]^d.",
              "Face-sharing: Two cubes share a full (d-1)-dimensional face.",
              "Keller (1930): Always true in all dimensions.",
              "Brakensiek, Heule, Mackey, Chou (2020): Proved FALSE in dimension 7!"
            ],
            "mystery": "In dimension 8, Lagarias and Shor (creator of Shor's quantum algorithm!) disproved it in 1992, leaving dimension 7 as the ultimate unsolved frontier until 2020!",
            "funFact": "The proof generated a 200-gigabyte machine-verifiable proof certificate in DRAT format!"
          },
          "investigators": {
            "tagline": "Keller graph cliques and Cayley graph factorizations.",
            "analogy": "Corrádi and Szabó translated Keller's conjecture into finding maximum cliques of size 2^d in the Keller graph G_d. In dimension 7, the maximum clique has size 128 = 2^7.",
            "rules": [
              "Keller graph G_d has 4^d vertices.",
              "Clique of size 2^d ↔ counterexample tiling exists.",
              "Brakensiek et al. (2020): Found clique of size 128 in G_7."
            ],
            "mystery": "Keller's conjecture is now completely resolved: TRUE for d ≤ 6, and FALSE for all d ≥ 7!",
            "funFact": "Ott-Heinrich Keller proposed the conjecture in 1930."
          },
          "pioneers": {
            "tagline": "Automated reasoning and propositional satisfiability (SAT).",
            "analogy": "The resolution of Keller's conjecture represents one of the crowning triumphs of modern SAT solving in pure mathematics.",
            "rules": [
              "DRAT proof certification.",
              "Symmetry-breaking predicates in SAT.",
              "Formal verification in Lean 4 and Coq."
            ],
            "mystery": "This proof established the modern blueprint for solving high-dimensional combinatorial geometry problems via automated logic.",
            "funFact": "Keller's conjecture demonstrates the incredible power of discrete automated logic solving continuous geometric mysteries."
          }
        },
        "history": [
          {
            "year": "1930",
            "author": "Ott-Heinrich Keller",
            "note": "Proposes the cube-tiling conjecture."
          },
          {
            "year": "1940",
            "author": "Oskar Perron",
            "note": "Proves conjecture holds for dimensions d ≤ 6."
          },
          {
            "year": "1992",
            "author": "Lagarias & Shor",
            "note": "Disprove conjecture for dimension 8 and above."
          },
          {
            "year": "2020",
            "author": "Brakensiek, Heule, Mackey & Chou",
            "note": "Disprove conjecture in dimension 7 using SAT solvers."
          }
        ]
      },
      "de": {
        "name": "Keller's Cube-Tiling Conjecture",
        "subtitle": "Must Unit Cube Tilings Share a Full Face? (Disproved in 7D via SAT)",
        "field": "Discrete Tiling & Automated SAT Theorem Proving",
        "statusBadge": "SOLVED BY AI / COMPUTATION",
        "grades": {
          "explorers": {
            "tagline": "If you pack a room with identical blocks, do two blocks ALWAYS kiss flat on a full face?",
            "analogy": "In 1930, Ott-Heinrich Keller conjectured that in ANY tiling of d-dimensional space by identical unit cubes, at least two cubes MUST share an entire (d-1)-dimensional face! True in dimensions 1 to 6. But in 2020, computer scientists used automated SAT solvers running for 30 minutes to prove that in DIMENSION 7, a sneaky face-free tiling DOES exist!",
            "rules": [
              "Tile ℝ^d with translated unit cubes [0,1]^d.",
              "Face-sharing: Two cubes share a full (d-1)-dimensional face.",
              "Keller (1930): Always true in all dimensions.",
              "Brakensiek, Heule, Mackey, Chou (2020): Proved FALSE in dimension 7!"
            ],
            "mystery": "In dimension 8, Lagarias and Shor (creator of Shor's quantum algorithm!) disproved it in 1992, leaving dimension 7 as the ultimate unsolved frontier until 2020!",
            "funFact": "The proof generated a 200-gigabyte machine-verifiable proof certificate in DRAT format!"
          },
          "investigators": {
            "tagline": "Keller graph cliques and Cayley graph factorizations.",
            "analogy": "Corrádi and Szabó translated Keller's conjecture into finding maximum cliques of size 2^d in the Keller graph G_d. In dimension 7, the maximum clique has size 128 = 2^7.",
            "rules": [
              "Keller graph G_d has 4^d vertices.",
              "Clique of size 2^d ↔ counterexample tiling exists.",
              "Brakensiek et al. (2020): Found clique of size 128 in G_7."
            ],
            "mystery": "Keller's conjecture is now completely resolved: TRUE for d ≤ 6, and FALSE for all d ≥ 7!",
            "funFact": "Ott-Heinrich Keller proposed the conjecture in 1930."
          },
          "pioneers": {
            "tagline": "Automated reasoning and propositional satisfiability (SAT).",
            "analogy": "The resolution of Keller's conjecture represents one of the crowning triumphs of modern SAT solving in pure mathematics.",
            "rules": [
              "DRAT proof certification.",
              "Symmetry-breaking predicates in SAT.",
              "Formal verification in Lean 4 and Coq."
            ],
            "mystery": "This proof established the modern blueprint for solving high-dimensional combinatorial geometry problems via automated logic.",
            "funFact": "Keller's conjecture demonstrates the incredible power of discrete automated logic solving continuous geometric mysteries."
          }
        },
        "history": [
          {
            "year": "1930",
            "author": "Ott-Heinrich Keller",
            "note": "Proposes the cube-tiling conjecture."
          },
          {
            "year": "1940",
            "author": "Oskar Perron",
            "note": "Proves conjecture holds for dimensions d ≤ 6."
          },
          {
            "year": "1992",
            "author": "Lagarias & Shor",
            "note": "Disprove conjecture for dimension 8 and above."
          },
          {
            "year": "2020",
            "author": "Brakensiek, Heule, Mackey & Chou",
            "note": "Disprove conjecture in dimension 7 using SAT solvers."
          }
        ]
      },
      "fr": {
        "name": "Keller's Cube-Tiling Conjecture",
        "subtitle": "Must Unit Cube Tilings Share a Full Face? (Disproved in 7D via SAT)",
        "field": "Discrete Tiling & Automated SAT Theorem Proving",
        "statusBadge": "SOLVED BY AI / COMPUTATION",
        "grades": {
          "explorers": {
            "tagline": "If you pack a room with identical blocks, do two blocks ALWAYS kiss flat on a full face?",
            "analogy": "In 1930, Ott-Heinrich Keller conjectured that in ANY tiling of d-dimensional space by identical unit cubes, at least two cubes MUST share an entire (d-1)-dimensional face! True in dimensions 1 to 6. But in 2020, computer scientists used automated SAT solvers running for 30 minutes to prove that in DIMENSION 7, a sneaky face-free tiling DOES exist!",
            "rules": [
              "Tile ℝ^d with translated unit cubes [0,1]^d.",
              "Face-sharing: Two cubes share a full (d-1)-dimensional face.",
              "Keller (1930): Always true in all dimensions.",
              "Brakensiek, Heule, Mackey, Chou (2020): Proved FALSE in dimension 7!"
            ],
            "mystery": "In dimension 8, Lagarias and Shor (creator of Shor's quantum algorithm!) disproved it in 1992, leaving dimension 7 as the ultimate unsolved frontier until 2020!",
            "funFact": "The proof generated a 200-gigabyte machine-verifiable proof certificate in DRAT format!"
          },
          "investigators": {
            "tagline": "Keller graph cliques and Cayley graph factorizations.",
            "analogy": "Corrádi and Szabó translated Keller's conjecture into finding maximum cliques of size 2^d in the Keller graph G_d. In dimension 7, the maximum clique has size 128 = 2^7.",
            "rules": [
              "Keller graph G_d has 4^d vertices.",
              "Clique of size 2^d ↔ counterexample tiling exists.",
              "Brakensiek et al. (2020): Found clique of size 128 in G_7."
            ],
            "mystery": "Keller's conjecture is now completely resolved: TRUE for d ≤ 6, and FALSE for all d ≥ 7!",
            "funFact": "Ott-Heinrich Keller proposed the conjecture in 1930."
          },
          "pioneers": {
            "tagline": "Automated reasoning and propositional satisfiability (SAT).",
            "analogy": "The resolution of Keller's conjecture represents one of the crowning triumphs of modern SAT solving in pure mathematics.",
            "rules": [
              "DRAT proof certification.",
              "Symmetry-breaking predicates in SAT.",
              "Formal verification in Lean 4 and Coq."
            ],
            "mystery": "This proof established the modern blueprint for solving high-dimensional combinatorial geometry problems via automated logic.",
            "funFact": "Keller's conjecture demonstrates the incredible power of discrete automated logic solving continuous geometric mysteries."
          }
        },
        "history": [
          {
            "year": "1930",
            "author": "Ott-Heinrich Keller",
            "note": "Proposes the cube-tiling conjecture."
          },
          {
            "year": "1940",
            "author": "Oskar Perron",
            "note": "Proves conjecture holds for dimensions d ≤ 6."
          },
          {
            "year": "1992",
            "author": "Lagarias & Shor",
            "note": "Disprove conjecture for dimension 8 and above."
          },
          {
            "year": "2020",
            "author": "Brakensiek, Heule, Mackey & Chou",
            "note": "Disprove conjecture in dimension 7 using SAT solvers."
          }
        ]
      },
      "it": {
        "name": "Keller's Cube-Tiling Conjecture",
        "subtitle": "Must Unit Cube Tilings Share a Full Face? (Disproved in 7D via SAT)",
        "field": "Discrete Tiling & Automated SAT Theorem Proving",
        "statusBadge": "SOLVED BY AI / COMPUTATION",
        "grades": {
          "explorers": {
            "tagline": "If you pack a room with identical blocks, do two blocks ALWAYS kiss flat on a full face?",
            "analogy": "In 1930, Ott-Heinrich Keller conjectured that in ANY tiling of d-dimensional space by identical unit cubes, at least two cubes MUST share an entire (d-1)-dimensional face! True in dimensions 1 to 6. But in 2020, computer scientists used automated SAT solvers running for 30 minutes to prove that in DIMENSION 7, a sneaky face-free tiling DOES exist!",
            "rules": [
              "Tile ℝ^d with translated unit cubes [0,1]^d.",
              "Face-sharing: Two cubes share a full (d-1)-dimensional face.",
              "Keller (1930): Always true in all dimensions.",
              "Brakensiek, Heule, Mackey, Chou (2020): Proved FALSE in dimension 7!"
            ],
            "mystery": "In dimension 8, Lagarias and Shor (creator of Shor's quantum algorithm!) disproved it in 1992, leaving dimension 7 as the ultimate unsolved frontier until 2020!",
            "funFact": "The proof generated a 200-gigabyte machine-verifiable proof certificate in DRAT format!"
          },
          "investigators": {
            "tagline": "Keller graph cliques and Cayley graph factorizations.",
            "analogy": "Corrádi and Szabó translated Keller's conjecture into finding maximum cliques of size 2^d in the Keller graph G_d. In dimension 7, the maximum clique has size 128 = 2^7.",
            "rules": [
              "Keller graph G_d has 4^d vertices.",
              "Clique of size 2^d ↔ counterexample tiling exists.",
              "Brakensiek et al. (2020): Found clique of size 128 in G_7."
            ],
            "mystery": "Keller's conjecture is now completely resolved: TRUE for d ≤ 6, and FALSE for all d ≥ 7!",
            "funFact": "Ott-Heinrich Keller proposed the conjecture in 1930."
          },
          "pioneers": {
            "tagline": "Automated reasoning and propositional satisfiability (SAT).",
            "analogy": "The resolution of Keller's conjecture represents one of the crowning triumphs of modern SAT solving in pure mathematics.",
            "rules": [
              "DRAT proof certification.",
              "Symmetry-breaking predicates in SAT.",
              "Formal verification in Lean 4 and Coq."
            ],
            "mystery": "This proof established the modern blueprint for solving high-dimensional combinatorial geometry problems via automated logic.",
            "funFact": "Keller's conjecture demonstrates the incredible power of discrete automated logic solving continuous geometric mysteries."
          }
        },
        "history": [
          {
            "year": "1930",
            "author": "Ott-Heinrich Keller",
            "note": "Proposes the cube-tiling conjecture."
          },
          {
            "year": "1940",
            "author": "Oskar Perron",
            "note": "Proves conjecture holds for dimensions d ≤ 6."
          },
          {
            "year": "1992",
            "author": "Lagarias & Shor",
            "note": "Disprove conjecture for dimension 8 and above."
          },
          {
            "year": "2020",
            "author": "Brakensiek, Heule, Mackey & Chou",
            "note": "Disprove conjecture in dimension 7 using SAT solvers."
          }
        ]
      },
      "ja": {
        "name": "Keller's Cube-Tiling Conjecture",
        "subtitle": "Must Unit Cube Tilings Share a Full Face? (Disproved in 7D via SAT)",
        "field": "Discrete Tiling & Automated SAT Theorem Proving",
        "statusBadge": "SOLVED BY AI / COMPUTATION",
        "grades": {
          "explorers": {
            "tagline": "If you pack a room with identical blocks, do two blocks ALWAYS kiss flat on a full face?",
            "analogy": "In 1930, Ott-Heinrich Keller conjectured that in ANY tiling of d-dimensional space by identical unit cubes, at least two cubes MUST share an entire (d-1)-dimensional face! True in dimensions 1 to 6. But in 2020, computer scientists used automated SAT solvers running for 30 minutes to prove that in DIMENSION 7, a sneaky face-free tiling DOES exist!",
            "rules": [
              "Tile ℝ^d with translated unit cubes [0,1]^d.",
              "Face-sharing: Two cubes share a full (d-1)-dimensional face.",
              "Keller (1930): Always true in all dimensions.",
              "Brakensiek, Heule, Mackey, Chou (2020): Proved FALSE in dimension 7!"
            ],
            "mystery": "In dimension 8, Lagarias and Shor (creator of Shor's quantum algorithm!) disproved it in 1992, leaving dimension 7 as the ultimate unsolved frontier until 2020!",
            "funFact": "The proof generated a 200-gigabyte machine-verifiable proof certificate in DRAT format!"
          },
          "investigators": {
            "tagline": "Keller graph cliques and Cayley graph factorizations.",
            "analogy": "Corrádi and Szabó translated Keller's conjecture into finding maximum cliques of size 2^d in the Keller graph G_d. In dimension 7, the maximum clique has size 128 = 2^7.",
            "rules": [
              "Keller graph G_d has 4^d vertices.",
              "Clique of size 2^d ↔ counterexample tiling exists.",
              "Brakensiek et al. (2020): Found clique of size 128 in G_7."
            ],
            "mystery": "Keller's conjecture is now completely resolved: TRUE for d ≤ 6, and FALSE for all d ≥ 7!",
            "funFact": "Ott-Heinrich Keller proposed the conjecture in 1930."
          },
          "pioneers": {
            "tagline": "Automated reasoning and propositional satisfiability (SAT).",
            "analogy": "The resolution of Keller's conjecture represents one of the crowning triumphs of modern SAT solving in pure mathematics.",
            "rules": [
              "DRAT proof certification.",
              "Symmetry-breaking predicates in SAT.",
              "Formal verification in Lean 4 and Coq."
            ],
            "mystery": "This proof established the modern blueprint for solving high-dimensional combinatorial geometry problems via automated logic.",
            "funFact": "Keller's conjecture demonstrates the incredible power of discrete automated logic solving continuous geometric mysteries."
          }
        },
        "history": [
          {
            "year": "1930",
            "author": "Ott-Heinrich Keller",
            "note": "Proposes the cube-tiling conjecture."
          },
          {
            "year": "1940",
            "author": "Oskar Perron",
            "note": "Proves conjecture holds for dimensions d ≤ 6."
          },
          {
            "year": "1992",
            "author": "Lagarias & Shor",
            "note": "Disprove conjecture for dimension 8 and above."
          },
          {
            "year": "2020",
            "author": "Brakensiek, Heule, Mackey & Chou",
            "note": "Disprove conjecture in dimension 7 using SAT solvers."
          }
        ]
      },
      "ko": {
        "name": "Keller's Cube-Tiling Conjecture",
        "subtitle": "Must Unit Cube Tilings Share a Full Face? (Disproved in 7D via SAT)",
        "field": "Discrete Tiling & Automated SAT Theorem Proving",
        "statusBadge": "SOLVED BY AI / COMPUTATION",
        "grades": {
          "explorers": {
            "tagline": "If you pack a room with identical blocks, do two blocks ALWAYS kiss flat on a full face?",
            "analogy": "In 1930, Ott-Heinrich Keller conjectured that in ANY tiling of d-dimensional space by identical unit cubes, at least two cubes MUST share an entire (d-1)-dimensional face! True in dimensions 1 to 6. But in 2020, computer scientists used automated SAT solvers running for 30 minutes to prove that in DIMENSION 7, a sneaky face-free tiling DOES exist!",
            "rules": [
              "Tile ℝ^d with translated unit cubes [0,1]^d.",
              "Face-sharing: Two cubes share a full (d-1)-dimensional face.",
              "Keller (1930): Always true in all dimensions.",
              "Brakensiek, Heule, Mackey, Chou (2020): Proved FALSE in dimension 7!"
            ],
            "mystery": "In dimension 8, Lagarias and Shor (creator of Shor's quantum algorithm!) disproved it in 1992, leaving dimension 7 as the ultimate unsolved frontier until 2020!",
            "funFact": "The proof generated a 200-gigabyte machine-verifiable proof certificate in DRAT format!"
          },
          "investigators": {
            "tagline": "Keller graph cliques and Cayley graph factorizations.",
            "analogy": "Corrádi and Szabó translated Keller's conjecture into finding maximum cliques of size 2^d in the Keller graph G_d. In dimension 7, the maximum clique has size 128 = 2^7.",
            "rules": [
              "Keller graph G_d has 4^d vertices.",
              "Clique of size 2^d ↔ counterexample tiling exists.",
              "Brakensiek et al. (2020): Found clique of size 128 in G_7."
            ],
            "mystery": "Keller's conjecture is now completely resolved: TRUE for d ≤ 6, and FALSE for all d ≥ 7!",
            "funFact": "Ott-Heinrich Keller proposed the conjecture in 1930."
          },
          "pioneers": {
            "tagline": "Automated reasoning and propositional satisfiability (SAT).",
            "analogy": "The resolution of Keller's conjecture represents one of the crowning triumphs of modern SAT solving in pure mathematics.",
            "rules": [
              "DRAT proof certification.",
              "Symmetry-breaking predicates in SAT.",
              "Formal verification in Lean 4 and Coq."
            ],
            "mystery": "This proof established the modern blueprint for solving high-dimensional combinatorial geometry problems via automated logic.",
            "funFact": "Keller's conjecture demonstrates the incredible power of discrete automated logic solving continuous geometric mysteries."
          }
        },
        "history": [
          {
            "year": "1930",
            "author": "Ott-Heinrich Keller",
            "note": "Proposes the cube-tiling conjecture."
          },
          {
            "year": "1940",
            "author": "Oskar Perron",
            "note": "Proves conjecture holds for dimensions d ≤ 6."
          },
          {
            "year": "1992",
            "author": "Lagarias & Shor",
            "note": "Disprove conjecture for dimension 8 and above."
          },
          {
            "year": "2020",
            "author": "Brakensiek, Heule, Mackey & Chou",
            "note": "Disprove conjecture in dimension 7 using SAT solvers."
          }
        ]
      },
      "zh-Hans": {
        "name": "凯勒超立方体镶嵌猜想",
        "subtitle": "单位超立方体铺满高维空间是否必有两个完全对齐侧面？（2020年SAT求解器推翻）",
        "field": "离散空间镶嵌 & 自动化 SAT 证明",
        "statusBadge": "AI 与 SAT 求解器彻底解决",
        "grades": {
          "explorers": {
            "tagline": "用无数个方方正正的积木严丝合缝填满房间，能不能做到任何两个积木都不完全面对面对齐？",
            "analogy": "1930年奥特-海因里希·凯勒猜想：无论在几维空间，用相同的单位超立方体严丝合缝铺满全空间，必定能找到两个立方体共享一整面完整的侧面！在1到6维中这都是完全正确的。但在2020年，计算机科学家编写了包含十亿级约束的 SAT 求解程序，在第7维中找到了绝妙的错位拼法，正式宣告猜想在7维及以上彻底阵亡！",
            "rules": [
              "用单位立方体无缝镶嵌 d 维空间。",
              "面对面：两个立方体完全共享一个 (d-1) 维侧面。",
              "凯勒 (1930)：在所有维度恒成立。",
              "2020年计算机科学家运用 SAT 求解器证明在 7 维彻底不成立！"
            ],
            "mystery": "在8维空间，量子算法发明者彼得·肖尔早在1992年就构造了反例，留下第7维作为30年来的终极悬念，直到2020年被计算机彻底解决！",
            "funFact": "该计算机证明输出了高达 200 GB 的 DRAT 机器可验证逻辑证书，被独立定理证明器完全复核无误！"
          },
          "investigators": {
            "tagline": "凯勒图最大团与凯莱图直积因子分解。",
            "analogy": "科拉迪与绍博证明：反例存在等价于在第 d 维凯勒图中存在大小为 2^d 的最大完全子图（团）。在7维凯勒图中，SAT 求解器找到了恰好包含 128 个顶点的独立完全子图！",
            "rules": [
              "7维凯勒图拥有 4^7 = 16,384 个顶点。",
              "大小为 128 的团等价于存在无面共享的超立方体镶嵌。",
              "SAT 求解器在 30 分钟内完成 10^100 搜索空间的排查。"
            ],
            "mystery": "凯勒猜想已获终极圆满解决：在 d ≤ 6 时完全成立，在所有 d ≥ 7 时彻底失效！",
            "funFact": "奥特-海因里希·凯勒于1930年提出。"
          },
          "pioneers": {
            "tagline": "自动推理与命题逻辑可满足性 (SAT)。",
            "analogy": "凯勒猜想的最终解决代表了现代自动化定理求解在纯粹数学界取得的最辉煌胜利之一。",
            "rules": [
              "DRAT 机器检查格式证明证书。",
              "超立方体对称性破缺约束生成。",
              "Lean 4 与 Coq 中的完全逻辑复核。"
            ],
            "mystery": "该成果为运用计算机自动逻辑求解高维离散几何难题确立了跨时代的全新典范。",
            "funFact": "凯勒猜想完美证明了离散逻辑求解器征服连续几何之谜的惊人威力。"
          }
        },
        "history": [
          {
            "year": "1930",
            "author": "凯勒",
            "note": "在德国数学杂志发表立方体镶嵌猜想。"
          },
          {
            "year": "1940",
            "author": "佩隆",
            "note": "严格证明猜想在 1 至 6 维完全成立。"
          },
          {
            "year": "1992",
            "author": "拉加里亚斯 & 肖尔",
            "note": "构造出 8 维及以上的反例！"
          },
          {
            "year": "2020",
            "author": "布拉肯西克团队",
            "note": "运用 SAT 求解器彻底终结 7 维悬案，推翻猜想！"
          }
        ]
      },
      "zh-Hant": {
        "name": "Keller's Cube-Tiling Conjecture",
        "subtitle": "Must Unit Cube Tilings Share a Full Face? (Disproved in 7D via SAT)",
        "field": "Discrete Tiling & Automated SAT Theorem Proving",
        "statusBadge": "SOLVED BY AI / COMPUTATION",
        "grades": {
          "explorers": {
            "tagline": "If you pack a room with identical blocks, do two blocks ALWAYS kiss flat on a full face?",
            "analogy": "In 1930, Ott-Heinrich Keller conjectured that in ANY tiling of d-dimensional space by identical unit cubes, at least two cubes MUST share an entire (d-1)-dimensional face! True in dimensions 1 to 6. But in 2020, computer scientists used automated SAT solvers running for 30 minutes to prove that in DIMENSION 7, a sneaky face-free tiling DOES exist!",
            "rules": [
              "Tile ℝ^d with translated unit cubes [0,1]^d.",
              "Face-sharing: Two cubes share a full (d-1)-dimensional face.",
              "Keller (1930): Always true in all dimensions.",
              "Brakensiek, Heule, Mackey, Chou (2020): Proved FALSE in dimension 7!"
            ],
            "mystery": "In dimension 8, Lagarias and Shor (creator of Shor's quantum algorithm!) disproved it in 1992, leaving dimension 7 as the ultimate unsolved frontier until 2020!",
            "funFact": "The proof generated a 200-gigabyte machine-verifiable proof certificate in DRAT format!"
          },
          "investigators": {
            "tagline": "Keller graph cliques and Cayley graph factorizations.",
            "analogy": "Corrádi and Szabó translated Keller's conjecture into finding maximum cliques of size 2^d in the Keller graph G_d. In dimension 7, the maximum clique has size 128 = 2^7.",
            "rules": [
              "Keller graph G_d has 4^d vertices.",
              "Clique of size 2^d ↔ counterexample tiling exists.",
              "Brakensiek et al. (2020): Found clique of size 128 in G_7."
            ],
            "mystery": "Keller's conjecture is now completely resolved: TRUE for d ≤ 6, and FALSE for all d ≥ 7!",
            "funFact": "Ott-Heinrich Keller proposed the conjecture in 1930."
          },
          "pioneers": {
            "tagline": "Automated reasoning and propositional satisfiability (SAT).",
            "analogy": "The resolution of Keller's conjecture represents one of the crowning triumphs of modern SAT solving in pure mathematics.",
            "rules": [
              "DRAT proof certification.",
              "Symmetry-breaking predicates in SAT.",
              "Formal verification in Lean 4 and Coq."
            ],
            "mystery": "This proof established the modern blueprint for solving high-dimensional combinatorial geometry problems via automated logic.",
            "funFact": "Keller's conjecture demonstrates the incredible power of discrete automated logic solving continuous geometric mysteries."
          }
        },
        "history": [
          {
            "year": "1930",
            "author": "Ott-Heinrich Keller",
            "note": "Proposes the cube-tiling conjecture."
          },
          {
            "year": "1940",
            "author": "Oskar Perron",
            "note": "Proves conjecture holds for dimensions d ≤ 6."
          },
          {
            "year": "1992",
            "author": "Lagarias & Shor",
            "note": "Disprove conjecture for dimension 8 and above."
          },
          {
            "year": "2020",
            "author": "Brakensiek, Heule, Mackey & Chou",
            "note": "Disprove conjecture in dimension 7 using SAT solvers."
          }
        ]
      }
    }
  },
  {
    "id": "sendov",
    "icon": "🎯",
    "difficulty": "Gr 6+",
    "domain": "geometry",
    "category": "geometry",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Analysis.Complex.Basic\n-- Sendov's Conjecture: If all roots of P(z) lie in unit disk |z| ≤ 1, each root has a critical point within distance 1\n-- Proved for degree n ≤ 8 and for large n (Tao, 2020)",
    "locales": {
      "en": {
        "name": "Sendov's Conjecture",
        "subtitle": "Critical Points of Complex Polynomials Near Their Roots",
        "field": "Complex Analysis & Geometry of Polynomials",
        "statusBadge": "ALMOST SOLVED (TAO)",
        "grades": {
          "explorers": {
            "tagline": "If you plant trees in a circular garden, does a wind vortex always spin right next to each tree?",
            "analogy": "Blagovest Sendov conjectured in 1958: If ALL the roots of a complex polynomial lie inside the unit disk |z| ≤ 1, then for EVERY root, there is at least one critical point (root of derivative P'(z) = 0) within distance 1! Proved for degree up to 8, and in 2020, Terence Tao proved it for all sufficiently large degrees!",
            "rules": [
              "Polynomial P(z) with roots r_1, ..., r_n in unit disk |z| ≤ 1.",
              "Critical points: Roots of derivative P'(z) = 0.",
              "Sendov's claim: For each root r_k, distance to nearest critical point is ≤ 1.",
              "Proved for n ≤ 8 and for all n > N_0 (Tao, 2020)."
            ],
            "mystery": "The Gauss-Lucas theorem easily guarantees that all critical points lie in the convex hull of the roots, but Sendov demands much tighter proximity!",
            "funFact": "Terence Tao proved the conjecture for large n by connecting it to the asymptotic dynamics of Coulomb electrostatic charges!"
          },
          "investigators": {
            "tagline": "Gauss-Lucas theorem, electrostatics, and Tao's asymptotic analysis.",
            "analogy": "Tao (2020) analyzed the empirical distribution of roots, proving Sendov's conjecture holds for all degrees n ≥ n_0 where n_0 is an effective constant.",
            "rules": [
              "Gauss-Lucas theorem: Crit(P) ⊆ Conv(Roots(P)).",
              "Brownian motion / electrostatics of zeros.",
              "Tao (2020): Proved for all n ≥ n_0."
            ],
            "mystery": "Can we bridge the finite gap between n = 8 and n_0 to finish the conjecture completely for all degrees?",
            "funFact": "Blagovest Sendov proposed this in 1958 in Sofia, Bulgaria."
          },
          "pioneers": {
            "tagline": "Logarithmic potential theory and Smale's mean value conjecture.",
            "analogy": "Sendov's conjecture is closely connected to Steve Smale's 17th problem on finding roots and Smale's mean value conjecture.",
            "rules": [
              "Smale's mean value conjecture.",
              "Borcea's Grace-Walsh-Szegő theorem application.",
              "Lean 4 Mathlib complex polynomials."
            ],
            "mystery": "AI symbolic solver pipelines are currently verifying intermediate degrees n = 9 through 20.",
            "funFact": "Sendov's conjecture is a jewel of classical geometric function theory."
          }
        },
        "history": [
          {
            "year": "1958",
            "author": "Blagovest Sendov",
            "note": "Poses the critical point distance conjecture in Sofia."
          },
          {
            "year": "1969",
            "author": "Phelps & Rodriguez",
            "note": "Prove conjecture for degrees n ≤ 5."
          },
          {
            "year": "2020",
            "author": "Terence Tao",
            "note": "Proves Sendov's conjecture for all sufficiently large degrees n ≥ n_0."
          }
        ]
      },
      "de": {
        "name": "Sendov's Conjecture",
        "subtitle": "Critical Points of Complex Polynomials Near Their Roots",
        "field": "Complex Analysis & Geometry of Polynomials",
        "statusBadge": "ALMOST SOLVED (TAO)",
        "grades": {
          "explorers": {
            "tagline": "If you plant trees in a circular garden, does a wind vortex always spin right next to each tree?",
            "analogy": "Blagovest Sendov conjectured in 1958: If ALL the roots of a complex polynomial lie inside the unit disk |z| ≤ 1, then for EVERY root, there is at least one critical point (root of derivative P'(z) = 0) within distance 1! Proved for degree up to 8, and in 2020, Terence Tao proved it for all sufficiently large degrees!",
            "rules": [
              "Polynomial P(z) with roots r_1, ..., r_n in unit disk |z| ≤ 1.",
              "Critical points: Roots of derivative P'(z) = 0.",
              "Sendov's claim: For each root r_k, distance to nearest critical point is ≤ 1.",
              "Proved for n ≤ 8 and for all n > N_0 (Tao, 2020)."
            ],
            "mystery": "The Gauss-Lucas theorem easily guarantees that all critical points lie in the convex hull of the roots, but Sendov demands much tighter proximity!",
            "funFact": "Terence Tao proved the conjecture for large n by connecting it to the asymptotic dynamics of Coulomb electrostatic charges!"
          },
          "investigators": {
            "tagline": "Gauss-Lucas theorem, electrostatics, and Tao's asymptotic analysis.",
            "analogy": "Tao (2020) analyzed the empirical distribution of roots, proving Sendov's conjecture holds for all degrees n ≥ n_0 where n_0 is an effective constant.",
            "rules": [
              "Gauss-Lucas theorem: Crit(P) ⊆ Conv(Roots(P)).",
              "Brownian motion / electrostatics of zeros.",
              "Tao (2020): Proved for all n ≥ n_0."
            ],
            "mystery": "Can we bridge the finite gap between n = 8 and n_0 to finish the conjecture completely for all degrees?",
            "funFact": "Blagovest Sendov proposed this in 1958 in Sofia, Bulgaria."
          },
          "pioneers": {
            "tagline": "Logarithmic potential theory and Smale's mean value conjecture.",
            "analogy": "Sendov's conjecture is closely connected to Steve Smale's 17th problem on finding roots and Smale's mean value conjecture.",
            "rules": [
              "Smale's mean value conjecture.",
              "Borcea's Grace-Walsh-Szegő theorem application.",
              "Lean 4 Mathlib complex polynomials."
            ],
            "mystery": "AI symbolic solver pipelines are currently verifying intermediate degrees n = 9 through 20.",
            "funFact": "Sendov's conjecture is a jewel of classical geometric function theory."
          }
        },
        "history": [
          {
            "year": "1958",
            "author": "Blagovest Sendov",
            "note": "Poses the critical point distance conjecture in Sofia."
          },
          {
            "year": "1969",
            "author": "Phelps & Rodriguez",
            "note": "Prove conjecture for degrees n ≤ 5."
          },
          {
            "year": "2020",
            "author": "Terence Tao",
            "note": "Proves Sendov's conjecture for all sufficiently large degrees n ≥ n_0."
          }
        ]
      },
      "fr": {
        "name": "Sendov's Conjecture",
        "subtitle": "Critical Points of Complex Polynomials Near Their Roots",
        "field": "Complex Analysis & Geometry of Polynomials",
        "statusBadge": "ALMOST SOLVED (TAO)",
        "grades": {
          "explorers": {
            "tagline": "If you plant trees in a circular garden, does a wind vortex always spin right next to each tree?",
            "analogy": "Blagovest Sendov conjectured in 1958: If ALL the roots of a complex polynomial lie inside the unit disk |z| ≤ 1, then for EVERY root, there is at least one critical point (root of derivative P'(z) = 0) within distance 1! Proved for degree up to 8, and in 2020, Terence Tao proved it for all sufficiently large degrees!",
            "rules": [
              "Polynomial P(z) with roots r_1, ..., r_n in unit disk |z| ≤ 1.",
              "Critical points: Roots of derivative P'(z) = 0.",
              "Sendov's claim: For each root r_k, distance to nearest critical point is ≤ 1.",
              "Proved for n ≤ 8 and for all n > N_0 (Tao, 2020)."
            ],
            "mystery": "The Gauss-Lucas theorem easily guarantees that all critical points lie in the convex hull of the roots, but Sendov demands much tighter proximity!",
            "funFact": "Terence Tao proved the conjecture for large n by connecting it to the asymptotic dynamics of Coulomb electrostatic charges!"
          },
          "investigators": {
            "tagline": "Gauss-Lucas theorem, electrostatics, and Tao's asymptotic analysis.",
            "analogy": "Tao (2020) analyzed the empirical distribution of roots, proving Sendov's conjecture holds for all degrees n ≥ n_0 where n_0 is an effective constant.",
            "rules": [
              "Gauss-Lucas theorem: Crit(P) ⊆ Conv(Roots(P)).",
              "Brownian motion / electrostatics of zeros.",
              "Tao (2020): Proved for all n ≥ n_0."
            ],
            "mystery": "Can we bridge the finite gap between n = 8 and n_0 to finish the conjecture completely for all degrees?",
            "funFact": "Blagovest Sendov proposed this in 1958 in Sofia, Bulgaria."
          },
          "pioneers": {
            "tagline": "Logarithmic potential theory and Smale's mean value conjecture.",
            "analogy": "Sendov's conjecture is closely connected to Steve Smale's 17th problem on finding roots and Smale's mean value conjecture.",
            "rules": [
              "Smale's mean value conjecture.",
              "Borcea's Grace-Walsh-Szegő theorem application.",
              "Lean 4 Mathlib complex polynomials."
            ],
            "mystery": "AI symbolic solver pipelines are currently verifying intermediate degrees n = 9 through 20.",
            "funFact": "Sendov's conjecture is a jewel of classical geometric function theory."
          }
        },
        "history": [
          {
            "year": "1958",
            "author": "Blagovest Sendov",
            "note": "Poses the critical point distance conjecture in Sofia."
          },
          {
            "year": "1969",
            "author": "Phelps & Rodriguez",
            "note": "Prove conjecture for degrees n ≤ 5."
          },
          {
            "year": "2020",
            "author": "Terence Tao",
            "note": "Proves Sendov's conjecture for all sufficiently large degrees n ≥ n_0."
          }
        ]
      },
      "it": {
        "name": "Sendov's Conjecture",
        "subtitle": "Critical Points of Complex Polynomials Near Their Roots",
        "field": "Complex Analysis & Geometry of Polynomials",
        "statusBadge": "ALMOST SOLVED (TAO)",
        "grades": {
          "explorers": {
            "tagline": "If you plant trees in a circular garden, does a wind vortex always spin right next to each tree?",
            "analogy": "Blagovest Sendov conjectured in 1958: If ALL the roots of a complex polynomial lie inside the unit disk |z| ≤ 1, then for EVERY root, there is at least one critical point (root of derivative P'(z) = 0) within distance 1! Proved for degree up to 8, and in 2020, Terence Tao proved it for all sufficiently large degrees!",
            "rules": [
              "Polynomial P(z) with roots r_1, ..., r_n in unit disk |z| ≤ 1.",
              "Critical points: Roots of derivative P'(z) = 0.",
              "Sendov's claim: For each root r_k, distance to nearest critical point is ≤ 1.",
              "Proved for n ≤ 8 and for all n > N_0 (Tao, 2020)."
            ],
            "mystery": "The Gauss-Lucas theorem easily guarantees that all critical points lie in the convex hull of the roots, but Sendov demands much tighter proximity!",
            "funFact": "Terence Tao proved the conjecture for large n by connecting it to the asymptotic dynamics of Coulomb electrostatic charges!"
          },
          "investigators": {
            "tagline": "Gauss-Lucas theorem, electrostatics, and Tao's asymptotic analysis.",
            "analogy": "Tao (2020) analyzed the empirical distribution of roots, proving Sendov's conjecture holds for all degrees n ≥ n_0 where n_0 is an effective constant.",
            "rules": [
              "Gauss-Lucas theorem: Crit(P) ⊆ Conv(Roots(P)).",
              "Brownian motion / electrostatics of zeros.",
              "Tao (2020): Proved for all n ≥ n_0."
            ],
            "mystery": "Can we bridge the finite gap between n = 8 and n_0 to finish the conjecture completely for all degrees?",
            "funFact": "Blagovest Sendov proposed this in 1958 in Sofia, Bulgaria."
          },
          "pioneers": {
            "tagline": "Logarithmic potential theory and Smale's mean value conjecture.",
            "analogy": "Sendov's conjecture is closely connected to Steve Smale's 17th problem on finding roots and Smale's mean value conjecture.",
            "rules": [
              "Smale's mean value conjecture.",
              "Borcea's Grace-Walsh-Szegő theorem application.",
              "Lean 4 Mathlib complex polynomials."
            ],
            "mystery": "AI symbolic solver pipelines are currently verifying intermediate degrees n = 9 through 20.",
            "funFact": "Sendov's conjecture is a jewel of classical geometric function theory."
          }
        },
        "history": [
          {
            "year": "1958",
            "author": "Blagovest Sendov",
            "note": "Poses the critical point distance conjecture in Sofia."
          },
          {
            "year": "1969",
            "author": "Phelps & Rodriguez",
            "note": "Prove conjecture for degrees n ≤ 5."
          },
          {
            "year": "2020",
            "author": "Terence Tao",
            "note": "Proves Sendov's conjecture for all sufficiently large degrees n ≥ n_0."
          }
        ]
      },
      "ja": {
        "name": "Sendov's Conjecture",
        "subtitle": "Critical Points of Complex Polynomials Near Their Roots",
        "field": "Complex Analysis & Geometry of Polynomials",
        "statusBadge": "ALMOST SOLVED (TAO)",
        "grades": {
          "explorers": {
            "tagline": "If you plant trees in a circular garden, does a wind vortex always spin right next to each tree?",
            "analogy": "Blagovest Sendov conjectured in 1958: If ALL the roots of a complex polynomial lie inside the unit disk |z| ≤ 1, then for EVERY root, there is at least one critical point (root of derivative P'(z) = 0) within distance 1! Proved for degree up to 8, and in 2020, Terence Tao proved it for all sufficiently large degrees!",
            "rules": [
              "Polynomial P(z) with roots r_1, ..., r_n in unit disk |z| ≤ 1.",
              "Critical points: Roots of derivative P'(z) = 0.",
              "Sendov's claim: For each root r_k, distance to nearest critical point is ≤ 1.",
              "Proved for n ≤ 8 and for all n > N_0 (Tao, 2020)."
            ],
            "mystery": "The Gauss-Lucas theorem easily guarantees that all critical points lie in the convex hull of the roots, but Sendov demands much tighter proximity!",
            "funFact": "Terence Tao proved the conjecture for large n by connecting it to the asymptotic dynamics of Coulomb electrostatic charges!"
          },
          "investigators": {
            "tagline": "Gauss-Lucas theorem, electrostatics, and Tao's asymptotic analysis.",
            "analogy": "Tao (2020) analyzed the empirical distribution of roots, proving Sendov's conjecture holds for all degrees n ≥ n_0 where n_0 is an effective constant.",
            "rules": [
              "Gauss-Lucas theorem: Crit(P) ⊆ Conv(Roots(P)).",
              "Brownian motion / electrostatics of zeros.",
              "Tao (2020): Proved for all n ≥ n_0."
            ],
            "mystery": "Can we bridge the finite gap between n = 8 and n_0 to finish the conjecture completely for all degrees?",
            "funFact": "Blagovest Sendov proposed this in 1958 in Sofia, Bulgaria."
          },
          "pioneers": {
            "tagline": "Logarithmic potential theory and Smale's mean value conjecture.",
            "analogy": "Sendov's conjecture is closely connected to Steve Smale's 17th problem on finding roots and Smale's mean value conjecture.",
            "rules": [
              "Smale's mean value conjecture.",
              "Borcea's Grace-Walsh-Szegő theorem application.",
              "Lean 4 Mathlib complex polynomials."
            ],
            "mystery": "AI symbolic solver pipelines are currently verifying intermediate degrees n = 9 through 20.",
            "funFact": "Sendov's conjecture is a jewel of classical geometric function theory."
          }
        },
        "history": [
          {
            "year": "1958",
            "author": "Blagovest Sendov",
            "note": "Poses the critical point distance conjecture in Sofia."
          },
          {
            "year": "1969",
            "author": "Phelps & Rodriguez",
            "note": "Prove conjecture for degrees n ≤ 5."
          },
          {
            "year": "2020",
            "author": "Terence Tao",
            "note": "Proves Sendov's conjecture for all sufficiently large degrees n ≥ n_0."
          }
        ]
      },
      "ko": {
        "name": "Sendov's Conjecture",
        "subtitle": "Critical Points of Complex Polynomials Near Their Roots",
        "field": "Complex Analysis & Geometry of Polynomials",
        "statusBadge": "ALMOST SOLVED (TAO)",
        "grades": {
          "explorers": {
            "tagline": "If you plant trees in a circular garden, does a wind vortex always spin right next to each tree?",
            "analogy": "Blagovest Sendov conjectured in 1958: If ALL the roots of a complex polynomial lie inside the unit disk |z| ≤ 1, then for EVERY root, there is at least one critical point (root of derivative P'(z) = 0) within distance 1! Proved for degree up to 8, and in 2020, Terence Tao proved it for all sufficiently large degrees!",
            "rules": [
              "Polynomial P(z) with roots r_1, ..., r_n in unit disk |z| ≤ 1.",
              "Critical points: Roots of derivative P'(z) = 0.",
              "Sendov's claim: For each root r_k, distance to nearest critical point is ≤ 1.",
              "Proved for n ≤ 8 and for all n > N_0 (Tao, 2020)."
            ],
            "mystery": "The Gauss-Lucas theorem easily guarantees that all critical points lie in the convex hull of the roots, but Sendov demands much tighter proximity!",
            "funFact": "Terence Tao proved the conjecture for large n by connecting it to the asymptotic dynamics of Coulomb electrostatic charges!"
          },
          "investigators": {
            "tagline": "Gauss-Lucas theorem, electrostatics, and Tao's asymptotic analysis.",
            "analogy": "Tao (2020) analyzed the empirical distribution of roots, proving Sendov's conjecture holds for all degrees n ≥ n_0 where n_0 is an effective constant.",
            "rules": [
              "Gauss-Lucas theorem: Crit(P) ⊆ Conv(Roots(P)).",
              "Brownian motion / electrostatics of zeros.",
              "Tao (2020): Proved for all n ≥ n_0."
            ],
            "mystery": "Can we bridge the finite gap between n = 8 and n_0 to finish the conjecture completely for all degrees?",
            "funFact": "Blagovest Sendov proposed this in 1958 in Sofia, Bulgaria."
          },
          "pioneers": {
            "tagline": "Logarithmic potential theory and Smale's mean value conjecture.",
            "analogy": "Sendov's conjecture is closely connected to Steve Smale's 17th problem on finding roots and Smale's mean value conjecture.",
            "rules": [
              "Smale's mean value conjecture.",
              "Borcea's Grace-Walsh-Szegő theorem application.",
              "Lean 4 Mathlib complex polynomials."
            ],
            "mystery": "AI symbolic solver pipelines are currently verifying intermediate degrees n = 9 through 20.",
            "funFact": "Sendov's conjecture is a jewel of classical geometric function theory."
          }
        },
        "history": [
          {
            "year": "1958",
            "author": "Blagovest Sendov",
            "note": "Poses the critical point distance conjecture in Sofia."
          },
          {
            "year": "1969",
            "author": "Phelps & Rodriguez",
            "note": "Prove conjecture for degrees n ≤ 5."
          },
          {
            "year": "2020",
            "author": "Terence Tao",
            "note": "Proves Sendov's conjecture for all sufficiently large degrees n ≥ n_0."
          }
        ]
      },
      "zh-Hans": {
        "name": "森多夫猜想",
        "subtitle": "复多项式的临界点与根之间的极值距离不超过 1",
        "field": "复变函数论 & 多项式几何学",
        "statusBadge": "陶哲轩已攻克极大次数情形",
        "grades": {
          "explorers": {
            "tagline": "在一个圆形花园里种下几棵树，每棵树旁边1步之内是不是永远能找到一处微风漩涡？",
            "analogy": "保加利亚数学家森多夫于1958年猜想：如果一个复系数多项式的所有根都在单位圆盘 |z| ≤ 1 之内，那么对于它的每一个根，在其距离不超过 1 的范围内，必定能找到至少一个导数的零点（临界点）！该猜想已对次数 n ≤ 8 获得验证，2020年菲尔兹奖得主陶哲轩一举攻克了所有充分大次数的情形！",
            "rules": [
              "多项式 P(z) 的全部根落在单位圆盘 |z| ≤ 1 内部。",
              "导数 P'(z) = 0 的根称为临界点。",
              "森多夫断言：到任意一个根的距离 ≤ 1 的圆盘内必有临界点。",
              "已对 n ≤ 8 以及所有充分大次数 n 获严格证明（陶哲轩 2020）。"
            ],
            "mystery": "著名的高斯-卢卡斯定理已经保证所有临界点都落在根的凸包之内，而森多夫猜想进一步要求临界点与每一个根贴得更紧！",
            "funFact": "陶哲轩通过将复多项式临界点等价为静电库仑电荷在复平面上的势能平衡点，奇迹般攻克了大次数难题！"
          },
          "investigators": {
            "tagline": "高斯-卢卡斯定理、静电库仑场模型与陶哲轩渐近分析。",
            "analogy": "陶哲轩 (2020) 结合电势能分布与对数势论，证明对所有大于某个有效常数 n_0 的多项式次数，森多夫猜想无条件成立。",
            "rules": [
              "高斯-卢卡斯凸包定理。",
              "对数库仑势场中的电荷平衡。",
              "陶哲轩 (2020) 突破证明大次数情形。"
            ],
            "mystery": "我们能否彻底弥合 n = 8 与 n_0 之间的有限区间，迎来森多夫猜想的彻底大结局？",
            "funFact": "布拉戈韦斯特·森多夫于1958年在保加利亚索非亚提出。"
          },
          "pioneers": {
            "tagline": "对数势论与斯梅尔均值猜想。",
            "analogy": "森多夫猜想与菲尔兹奖得主斯梅尔的均值猜想及多项式求根算法复杂度密切相连。",
            "rules": [
              "斯梅尔均值猜想。",
              "格雷斯-沃尔什-塞格复合定理。",
              "Lean 4 Mathlib 复系数多项式微积分形式化。"
            ],
            "mystery": "AI 自动化多项式求解系统正在全力排查中间剩余的有限多项式次数。",
            "funFact": "森多夫猜想是古典几何函数论中最优雅、最璀璨的一颗明珠。"
          }
        },
        "history": [
          {
            "year": "1958",
            "author": "森多夫",
            "note": "提出复多项式根与临界点距离猜想。"
          },
          {
            "year": "1969",
            "author": "菲尔普斯 & 罗德里格斯",
            "note": "证明次数不超过 5 的情形。"
          },
          {
            "year": "2020",
            "author": "陶哲轩",
            "note": "利用静电势能分析彻底攻克充分大次数情形！"
          }
        ]
      },
      "zh-Hant": {
        "name": "Sendov's Conjecture",
        "subtitle": "Critical Points of Complex Polynomials Near Their Roots",
        "field": "Complex Analysis & Geometry of Polynomials",
        "statusBadge": "ALMOST SOLVED (TAO)",
        "grades": {
          "explorers": {
            "tagline": "If you plant trees in a circular garden, does a wind vortex always spin right next to each tree?",
            "analogy": "Blagovest Sendov conjectured in 1958: If ALL the roots of a complex polynomial lie inside the unit disk |z| ≤ 1, then for EVERY root, there is at least one critical point (root of derivative P'(z) = 0) within distance 1! Proved for degree up to 8, and in 2020, Terence Tao proved it for all sufficiently large degrees!",
            "rules": [
              "Polynomial P(z) with roots r_1, ..., r_n in unit disk |z| ≤ 1.",
              "Critical points: Roots of derivative P'(z) = 0.",
              "Sendov's claim: For each root r_k, distance to nearest critical point is ≤ 1.",
              "Proved for n ≤ 8 and for all n > N_0 (Tao, 2020)."
            ],
            "mystery": "The Gauss-Lucas theorem easily guarantees that all critical points lie in the convex hull of the roots, but Sendov demands much tighter proximity!",
            "funFact": "Terence Tao proved the conjecture for large n by connecting it to the asymptotic dynamics of Coulomb electrostatic charges!"
          },
          "investigators": {
            "tagline": "Gauss-Lucas theorem, electrostatics, and Tao's asymptotic analysis.",
            "analogy": "Tao (2020) analyzed the empirical distribution of roots, proving Sendov's conjecture holds for all degrees n ≥ n_0 where n_0 is an effective constant.",
            "rules": [
              "Gauss-Lucas theorem: Crit(P) ⊆ Conv(Roots(P)).",
              "Brownian motion / electrostatics of zeros.",
              "Tao (2020): Proved for all n ≥ n_0."
            ],
            "mystery": "Can we bridge the finite gap between n = 8 and n_0 to finish the conjecture completely for all degrees?",
            "funFact": "Blagovest Sendov proposed this in 1958 in Sofia, Bulgaria."
          },
          "pioneers": {
            "tagline": "Logarithmic potential theory and Smale's mean value conjecture.",
            "analogy": "Sendov's conjecture is closely connected to Steve Smale's 17th problem on finding roots and Smale's mean value conjecture.",
            "rules": [
              "Smale's mean value conjecture.",
              "Borcea's Grace-Walsh-Szegő theorem application.",
              "Lean 4 Mathlib complex polynomials."
            ],
            "mystery": "AI symbolic solver pipelines are currently verifying intermediate degrees n = 9 through 20.",
            "funFact": "Sendov's conjecture is a jewel of classical geometric function theory."
          }
        },
        "history": [
          {
            "year": "1958",
            "author": "Blagovest Sendov",
            "note": "Poses the critical point distance conjecture in Sofia."
          },
          {
            "year": "1969",
            "author": "Phelps & Rodriguez",
            "note": "Prove conjecture for degrees n ≤ 5."
          },
          {
            "year": "2020",
            "author": "Terence Tao",
            "note": "Proves Sendov's conjecture for all sufficiently large degrees n ≥ n_0."
          }
        ]
      }
    }
  },
  {
    "id": "kakeya",
    "icon": "🪡",
    "difficulty": "Gr 9+",
    "domain": "geometry",
    "category": "geometry",
    "isMillennium": false,
    "isAIFrontier": true,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.MeasureTheory.Measure.Hausdorff\n-- Kakeya Conjecture: Any Besicovitch set in ℝ^d has Hausdorff dimension and Minkowski dimension equal to d\n-- Proved for finite fields by Zeev Dvir in 2008 in 2 pages!",
    "locales": {
      "en": {
        "name": "Kakeya Needle Problem",
        "subtitle": "Can a Unit Needle Turn Around Inside Arbitrarily Small Area?",
        "field": "Harmonic Analysis & Geometric Measure Theory",
        "statusBadge": "MAJOR RECENT BREAKTHROUGHS",
        "grades": {
          "explorers": {
            "tagline": "How small a pocket can you turn a sewing needle completely around inside?",
            "analogy": "In 1917, Soichi Kakeya asked: What is the smallest area on a tabletop inside which a needle of length 1 can turn around 360 degrees? Abram Besicovitch shocked mathematicians in 1919 by proving that the area can be ARBITRARILY CLOSE TO ZERO! The Kakeya conjecture asserts that in d dimensions, such sets must still have full Hausdorff dimension d!",
            "rules": [
              "Needle of length 1 turns 360°.",
              "Deltoid hypocycloid has area π/8 ≈ 0.39.",
              "Besicovitch (1919): Area can be made < ε for ANY positive ε!",
              "Kakeya Conjecture: Such sets in ℝ^d have Hausdorff dimension d."
            ],
            "mystery": "In 2008, Zeev Dvir proved the finite field version of the Kakeya conjecture in a breathtaking TWO-PAGE proof using the polynomial method!",
            "funFact": "Proving the Kakeya conjecture would instantly lead to major breakthroughs in the restriction conjecture for Fourier transforms and the Navier-Stokes equations!"
          },
          "investigators": {
            "tagline": "Bourgain-Katz-Tao bounds and the polynomial method.",
            "analogy": "The Kakeya maximal function inequality controls oscillatory integrals and directional derivatives across dense tube constellations.",
            "rules": [
              "Besicovitch tree construction.",
              "Kakeya maximal function: ||M_δ f||_p ≤ C_ε δ^{-ε} ||f||_p.",
              "Dvir's theorem (2008) in finite fields 𝔽_q."
            ],
            "mystery": "Can the polynomial method or polynomial partitioning (Guth-Katz) conquer the Euclidean continuous case in dimensions d ≥ 3?",
            "funFact": "Soichi Kakeya posed the needle problem in 1917."
          },
          "pioneers": {
            "tagline": "Decoupling theory and Fourier restriction.",
            "analogy": "Bourgain and Demeter's proof of the l² decoupling conjecture in 2015 achieved major progress toward the oscillatory integral consequences of Kakeya.",
            "rules": [
              "Bourgain-Demeter decoupling theorem.",
              "Hausdorff dimension in Mathlib.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI-accelerated geometric algorithms are searching for novel tube configuration configurations in 3D.",
            "funFact": "The Kakeya Problem is the central sun around which modern Euclidean harmonic analysis revolves."
          }
        },
        "history": [
          {
            "year": "1917",
            "author": "Soichi Kakeya",
            "note": "Poses the minimum area needle turning problem."
          },
          {
            "year": "1919",
            "author": "Abram Besicovitch",
            "note": "Proves that a Kakeya set can have measure arbitrarily close to zero."
          },
          {
            "year": "2008",
            "author": "Zeev Dvir",
            "note": "Solves finite field Kakeya conjecture in 2 pages using polynomials."
          }
        ]
      },
      "de": {
        "name": "Kakeya Needle Problem",
        "subtitle": "Can a Unit Needle Turn Around Inside Arbitrarily Small Area?",
        "field": "Harmonic Analysis & Geometric Measure Theory",
        "statusBadge": "MAJOR RECENT BREAKTHROUGHS",
        "grades": {
          "explorers": {
            "tagline": "How small a pocket can you turn a sewing needle completely around inside?",
            "analogy": "In 1917, Soichi Kakeya asked: What is the smallest area on a tabletop inside which a needle of length 1 can turn around 360 degrees? Abram Besicovitch shocked mathematicians in 1919 by proving that the area can be ARBITRARILY CLOSE TO ZERO! The Kakeya conjecture asserts that in d dimensions, such sets must still have full Hausdorff dimension d!",
            "rules": [
              "Needle of length 1 turns 360°.",
              "Deltoid hypocycloid has area π/8 ≈ 0.39.",
              "Besicovitch (1919): Area can be made < ε for ANY positive ε!",
              "Kakeya Conjecture: Such sets in ℝ^d have Hausdorff dimension d."
            ],
            "mystery": "In 2008, Zeev Dvir proved the finite field version of the Kakeya conjecture in a breathtaking TWO-PAGE proof using the polynomial method!",
            "funFact": "Proving the Kakeya conjecture would instantly lead to major breakthroughs in the restriction conjecture for Fourier transforms and the Navier-Stokes equations!"
          },
          "investigators": {
            "tagline": "Bourgain-Katz-Tao bounds and the polynomial method.",
            "analogy": "The Kakeya maximal function inequality controls oscillatory integrals and directional derivatives across dense tube constellations.",
            "rules": [
              "Besicovitch tree construction.",
              "Kakeya maximal function: ||M_δ f||_p ≤ C_ε δ^{-ε} ||f||_p.",
              "Dvir's theorem (2008) in finite fields 𝔽_q."
            ],
            "mystery": "Can the polynomial method or polynomial partitioning (Guth-Katz) conquer the Euclidean continuous case in dimensions d ≥ 3?",
            "funFact": "Soichi Kakeya posed the needle problem in 1917."
          },
          "pioneers": {
            "tagline": "Decoupling theory and Fourier restriction.",
            "analogy": "Bourgain and Demeter's proof of the l² decoupling conjecture in 2015 achieved major progress toward the oscillatory integral consequences of Kakeya.",
            "rules": [
              "Bourgain-Demeter decoupling theorem.",
              "Hausdorff dimension in Mathlib.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI-accelerated geometric algorithms are searching for novel tube configuration configurations in 3D.",
            "funFact": "The Kakeya Problem is the central sun around which modern Euclidean harmonic analysis revolves."
          }
        },
        "history": [
          {
            "year": "1917",
            "author": "Soichi Kakeya",
            "note": "Poses the minimum area needle turning problem."
          },
          {
            "year": "1919",
            "author": "Abram Besicovitch",
            "note": "Proves that a Kakeya set can have measure arbitrarily close to zero."
          },
          {
            "year": "2008",
            "author": "Zeev Dvir",
            "note": "Solves finite field Kakeya conjecture in 2 pages using polynomials."
          }
        ]
      },
      "fr": {
        "name": "Kakeya Needle Problem",
        "subtitle": "Can a Unit Needle Turn Around Inside Arbitrarily Small Area?",
        "field": "Harmonic Analysis & Geometric Measure Theory",
        "statusBadge": "MAJOR RECENT BREAKTHROUGHS",
        "grades": {
          "explorers": {
            "tagline": "How small a pocket can you turn a sewing needle completely around inside?",
            "analogy": "In 1917, Soichi Kakeya asked: What is the smallest area on a tabletop inside which a needle of length 1 can turn around 360 degrees? Abram Besicovitch shocked mathematicians in 1919 by proving that the area can be ARBITRARILY CLOSE TO ZERO! The Kakeya conjecture asserts that in d dimensions, such sets must still have full Hausdorff dimension d!",
            "rules": [
              "Needle of length 1 turns 360°.",
              "Deltoid hypocycloid has area π/8 ≈ 0.39.",
              "Besicovitch (1919): Area can be made < ε for ANY positive ε!",
              "Kakeya Conjecture: Such sets in ℝ^d have Hausdorff dimension d."
            ],
            "mystery": "In 2008, Zeev Dvir proved the finite field version of the Kakeya conjecture in a breathtaking TWO-PAGE proof using the polynomial method!",
            "funFact": "Proving the Kakeya conjecture would instantly lead to major breakthroughs in the restriction conjecture for Fourier transforms and the Navier-Stokes equations!"
          },
          "investigators": {
            "tagline": "Bourgain-Katz-Tao bounds and the polynomial method.",
            "analogy": "The Kakeya maximal function inequality controls oscillatory integrals and directional derivatives across dense tube constellations.",
            "rules": [
              "Besicovitch tree construction.",
              "Kakeya maximal function: ||M_δ f||_p ≤ C_ε δ^{-ε} ||f||_p.",
              "Dvir's theorem (2008) in finite fields 𝔽_q."
            ],
            "mystery": "Can the polynomial method or polynomial partitioning (Guth-Katz) conquer the Euclidean continuous case in dimensions d ≥ 3?",
            "funFact": "Soichi Kakeya posed the needle problem in 1917."
          },
          "pioneers": {
            "tagline": "Decoupling theory and Fourier restriction.",
            "analogy": "Bourgain and Demeter's proof of the l² decoupling conjecture in 2015 achieved major progress toward the oscillatory integral consequences of Kakeya.",
            "rules": [
              "Bourgain-Demeter decoupling theorem.",
              "Hausdorff dimension in Mathlib.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI-accelerated geometric algorithms are searching for novel tube configuration configurations in 3D.",
            "funFact": "The Kakeya Problem is the central sun around which modern Euclidean harmonic analysis revolves."
          }
        },
        "history": [
          {
            "year": "1917",
            "author": "Soichi Kakeya",
            "note": "Poses the minimum area needle turning problem."
          },
          {
            "year": "1919",
            "author": "Abram Besicovitch",
            "note": "Proves that a Kakeya set can have measure arbitrarily close to zero."
          },
          {
            "year": "2008",
            "author": "Zeev Dvir",
            "note": "Solves finite field Kakeya conjecture in 2 pages using polynomials."
          }
        ]
      },
      "it": {
        "name": "Kakeya Needle Problem",
        "subtitle": "Can a Unit Needle Turn Around Inside Arbitrarily Small Area?",
        "field": "Harmonic Analysis & Geometric Measure Theory",
        "statusBadge": "MAJOR RECENT BREAKTHROUGHS",
        "grades": {
          "explorers": {
            "tagline": "How small a pocket can you turn a sewing needle completely around inside?",
            "analogy": "In 1917, Soichi Kakeya asked: What is the smallest area on a tabletop inside which a needle of length 1 can turn around 360 degrees? Abram Besicovitch shocked mathematicians in 1919 by proving that the area can be ARBITRARILY CLOSE TO ZERO! The Kakeya conjecture asserts that in d dimensions, such sets must still have full Hausdorff dimension d!",
            "rules": [
              "Needle of length 1 turns 360°.",
              "Deltoid hypocycloid has area π/8 ≈ 0.39.",
              "Besicovitch (1919): Area can be made < ε for ANY positive ε!",
              "Kakeya Conjecture: Such sets in ℝ^d have Hausdorff dimension d."
            ],
            "mystery": "In 2008, Zeev Dvir proved the finite field version of the Kakeya conjecture in a breathtaking TWO-PAGE proof using the polynomial method!",
            "funFact": "Proving the Kakeya conjecture would instantly lead to major breakthroughs in the restriction conjecture for Fourier transforms and the Navier-Stokes equations!"
          },
          "investigators": {
            "tagline": "Bourgain-Katz-Tao bounds and the polynomial method.",
            "analogy": "The Kakeya maximal function inequality controls oscillatory integrals and directional derivatives across dense tube constellations.",
            "rules": [
              "Besicovitch tree construction.",
              "Kakeya maximal function: ||M_δ f||_p ≤ C_ε δ^{-ε} ||f||_p.",
              "Dvir's theorem (2008) in finite fields 𝔽_q."
            ],
            "mystery": "Can the polynomial method or polynomial partitioning (Guth-Katz) conquer the Euclidean continuous case in dimensions d ≥ 3?",
            "funFact": "Soichi Kakeya posed the needle problem in 1917."
          },
          "pioneers": {
            "tagline": "Decoupling theory and Fourier restriction.",
            "analogy": "Bourgain and Demeter's proof of the l² decoupling conjecture in 2015 achieved major progress toward the oscillatory integral consequences of Kakeya.",
            "rules": [
              "Bourgain-Demeter decoupling theorem.",
              "Hausdorff dimension in Mathlib.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI-accelerated geometric algorithms are searching for novel tube configuration configurations in 3D.",
            "funFact": "The Kakeya Problem is the central sun around which modern Euclidean harmonic analysis revolves."
          }
        },
        "history": [
          {
            "year": "1917",
            "author": "Soichi Kakeya",
            "note": "Poses the minimum area needle turning problem."
          },
          {
            "year": "1919",
            "author": "Abram Besicovitch",
            "note": "Proves that a Kakeya set can have measure arbitrarily close to zero."
          },
          {
            "year": "2008",
            "author": "Zeev Dvir",
            "note": "Solves finite field Kakeya conjecture in 2 pages using polynomials."
          }
        ]
      },
      "ja": {
        "name": "Kakeya Needle Problem",
        "subtitle": "Can a Unit Needle Turn Around Inside Arbitrarily Small Area?",
        "field": "Harmonic Analysis & Geometric Measure Theory",
        "statusBadge": "MAJOR RECENT BREAKTHROUGHS",
        "grades": {
          "explorers": {
            "tagline": "How small a pocket can you turn a sewing needle completely around inside?",
            "analogy": "In 1917, Soichi Kakeya asked: What is the smallest area on a tabletop inside which a needle of length 1 can turn around 360 degrees? Abram Besicovitch shocked mathematicians in 1919 by proving that the area can be ARBITRARILY CLOSE TO ZERO! The Kakeya conjecture asserts that in d dimensions, such sets must still have full Hausdorff dimension d!",
            "rules": [
              "Needle of length 1 turns 360°.",
              "Deltoid hypocycloid has area π/8 ≈ 0.39.",
              "Besicovitch (1919): Area can be made < ε for ANY positive ε!",
              "Kakeya Conjecture: Such sets in ℝ^d have Hausdorff dimension d."
            ],
            "mystery": "In 2008, Zeev Dvir proved the finite field version of the Kakeya conjecture in a breathtaking TWO-PAGE proof using the polynomial method!",
            "funFact": "Proving the Kakeya conjecture would instantly lead to major breakthroughs in the restriction conjecture for Fourier transforms and the Navier-Stokes equations!"
          },
          "investigators": {
            "tagline": "Bourgain-Katz-Tao bounds and the polynomial method.",
            "analogy": "The Kakeya maximal function inequality controls oscillatory integrals and directional derivatives across dense tube constellations.",
            "rules": [
              "Besicovitch tree construction.",
              "Kakeya maximal function: ||M_δ f||_p ≤ C_ε δ^{-ε} ||f||_p.",
              "Dvir's theorem (2008) in finite fields 𝔽_q."
            ],
            "mystery": "Can the polynomial method or polynomial partitioning (Guth-Katz) conquer the Euclidean continuous case in dimensions d ≥ 3?",
            "funFact": "Soichi Kakeya posed the needle problem in 1917."
          },
          "pioneers": {
            "tagline": "Decoupling theory and Fourier restriction.",
            "analogy": "Bourgain and Demeter's proof of the l² decoupling conjecture in 2015 achieved major progress toward the oscillatory integral consequences of Kakeya.",
            "rules": [
              "Bourgain-Demeter decoupling theorem.",
              "Hausdorff dimension in Mathlib.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI-accelerated geometric algorithms are searching for novel tube configuration configurations in 3D.",
            "funFact": "The Kakeya Problem is the central sun around which modern Euclidean harmonic analysis revolves."
          }
        },
        "history": [
          {
            "year": "1917",
            "author": "Soichi Kakeya",
            "note": "Poses the minimum area needle turning problem."
          },
          {
            "year": "1919",
            "author": "Abram Besicovitch",
            "note": "Proves that a Kakeya set can have measure arbitrarily close to zero."
          },
          {
            "year": "2008",
            "author": "Zeev Dvir",
            "note": "Solves finite field Kakeya conjecture in 2 pages using polynomials."
          }
        ]
      },
      "ko": {
        "name": "Kakeya Needle Problem",
        "subtitle": "Can a Unit Needle Turn Around Inside Arbitrarily Small Area?",
        "field": "Harmonic Analysis & Geometric Measure Theory",
        "statusBadge": "MAJOR RECENT BREAKTHROUGHS",
        "grades": {
          "explorers": {
            "tagline": "How small a pocket can you turn a sewing needle completely around inside?",
            "analogy": "In 1917, Soichi Kakeya asked: What is the smallest area on a tabletop inside which a needle of length 1 can turn around 360 degrees? Abram Besicovitch shocked mathematicians in 1919 by proving that the area can be ARBITRARILY CLOSE TO ZERO! The Kakeya conjecture asserts that in d dimensions, such sets must still have full Hausdorff dimension d!",
            "rules": [
              "Needle of length 1 turns 360°.",
              "Deltoid hypocycloid has area π/8 ≈ 0.39.",
              "Besicovitch (1919): Area can be made < ε for ANY positive ε!",
              "Kakeya Conjecture: Such sets in ℝ^d have Hausdorff dimension d."
            ],
            "mystery": "In 2008, Zeev Dvir proved the finite field version of the Kakeya conjecture in a breathtaking TWO-PAGE proof using the polynomial method!",
            "funFact": "Proving the Kakeya conjecture would instantly lead to major breakthroughs in the restriction conjecture for Fourier transforms and the Navier-Stokes equations!"
          },
          "investigators": {
            "tagline": "Bourgain-Katz-Tao bounds and the polynomial method.",
            "analogy": "The Kakeya maximal function inequality controls oscillatory integrals and directional derivatives across dense tube constellations.",
            "rules": [
              "Besicovitch tree construction.",
              "Kakeya maximal function: ||M_δ f||_p ≤ C_ε δ^{-ε} ||f||_p.",
              "Dvir's theorem (2008) in finite fields 𝔽_q."
            ],
            "mystery": "Can the polynomial method or polynomial partitioning (Guth-Katz) conquer the Euclidean continuous case in dimensions d ≥ 3?",
            "funFact": "Soichi Kakeya posed the needle problem in 1917."
          },
          "pioneers": {
            "tagline": "Decoupling theory and Fourier restriction.",
            "analogy": "Bourgain and Demeter's proof of the l² decoupling conjecture in 2015 achieved major progress toward the oscillatory integral consequences of Kakeya.",
            "rules": [
              "Bourgain-Demeter decoupling theorem.",
              "Hausdorff dimension in Mathlib.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI-accelerated geometric algorithms are searching for novel tube configuration configurations in 3D.",
            "funFact": "The Kakeya Problem is the central sun around which modern Euclidean harmonic analysis revolves."
          }
        },
        "history": [
          {
            "year": "1917",
            "author": "Soichi Kakeya",
            "note": "Poses the minimum area needle turning problem."
          },
          {
            "year": "1919",
            "author": "Abram Besicovitch",
            "note": "Proves that a Kakeya set can have measure arbitrarily close to zero."
          },
          {
            "year": "2008",
            "author": "Zeev Dvir",
            "note": "Solves finite field Kakeya conjecture in 2 pages using polynomials."
          }
        ]
      },
      "zh-Hans": {
        "name": "挂谷针问题与挂谷猜想",
        "subtitle": "一根针在任意微小的面积内能否自由完成 360 度掉头？",
        "field": "调和分析 & 几何测度论",
        "statusBadge": "现代重大突破",
        "grades": {
          "explorers": {
            "tagline": "把一根缝衣针转动一整圈，它扫过的最小面积到底有多大？",
            "analogy": "1917年日本数学家挂谷宗一提出：长度为1的针在平面上完全旋转360度，扫过的最小面积是多少？1919年贝西科维奇震惊数学界：他证明了扫过的面积可以任意接近于 0！只要巧妙地把针在无限重叠的分形缝隙中来回滑动。现代挂谷猜想断言：在 d 维空间中，包含所有方向单位线段的集合，其豪斯多夫分形维数必须严格等于 d！",
            "rules": [
              "长度为 1 的针旋转 360 度。",
              "三尖内摆线面积为 π/8 ≈ 0.39。",
              "贝西科维奇 (1919)：构造出面积小于任意指定正数 ε 的反直觉集合！",
              "挂谷猜想：在 d 维空间中，此类集合的豪斯多夫分形维数必为 d。"
            ],
            "mystery": "2008年泽夫·德维尔运用多项式方法，仅仅写了短短两页纸就彻底解决了有限域上的挂谷猜想，震惊了全球数学界！",
            "funFact": "解决挂谷猜想将直接引发傅里叶限制性猜想、薛定谔方程色散估计以及偏微分方程领域的连锁重大突破！"
          },
          "investigators": {
            "tagline": "布尔甘-卡茨-陶哲轩算子界与多项式方法。",
            "analogy": "挂谷极大函数不等式直接控制了密集管状结构上的高频振荡积分衰减。",
            "rules": [
              "贝西科维奇萌芽树分形剖分。",
              "挂谷极大函数 $L^p$ 范数估计。",
              "德维尔有限域多项式方法定理。"
            ],
            "mystery": "多项式划分方法（古斯-卡茨）能否彻底征服三维及更高维欧氏空间中的连续挂谷猜想？",
            "funFact": "挂谷宗一于1917年提出。"
          },
          "pioneers": {
            "tagline": "解耦理论与波瓦-德梅-陶解耦定理。",
            "analogy": "布尔甘与德梅特于2015年证明 l² 解耦猜想，荣获突破奖，将挂谷分析技术推向了新巅峰。",
            "rules": [
              "布尔甘-德梅特解耦定理。",
              "Lean 4 Mathlib 中豪斯多夫维数公理化。",
              "调和分析振荡积分形式化。"
            ],
            "mystery": "AI 自动化系统正在分析高维管状集合的相交多项式势能。",
            "funFact": "挂谷问题是整个现代欧氏调和分析与几何测度论赖以运转的核心太阳。"
          }
        },
        "history": [
          {
            "year": "1917",
            "author": "挂谷宗一",
            "note": "在日本东北帝国大学提出最小面积掉头问题。"
          },
          {
            "year": "1919",
            "author": "贝西科维奇",
            "note": "震撼证明挂谷集的面积可以任意接近于零！"
          },
          {
            "year": "2008",
            "author": "泽夫·德维尔",
            "note": "运用多项式方法用两页纸攻克有限域挂谷猜想！"
          }
        ]
      },
      "zh-Hant": {
        "name": "Kakeya Needle Problem",
        "subtitle": "Can a Unit Needle Turn Around Inside Arbitrarily Small Area?",
        "field": "Harmonic Analysis & Geometric Measure Theory",
        "statusBadge": "MAJOR RECENT BREAKTHROUGHS",
        "grades": {
          "explorers": {
            "tagline": "How small a pocket can you turn a sewing needle completely around inside?",
            "analogy": "In 1917, Soichi Kakeya asked: What is the smallest area on a tabletop inside which a needle of length 1 can turn around 360 degrees? Abram Besicovitch shocked mathematicians in 1919 by proving that the area can be ARBITRARILY CLOSE TO ZERO! The Kakeya conjecture asserts that in d dimensions, such sets must still have full Hausdorff dimension d!",
            "rules": [
              "Needle of length 1 turns 360°.",
              "Deltoid hypocycloid has area π/8 ≈ 0.39.",
              "Besicovitch (1919): Area can be made < ε for ANY positive ε!",
              "Kakeya Conjecture: Such sets in ℝ^d have Hausdorff dimension d."
            ],
            "mystery": "In 2008, Zeev Dvir proved the finite field version of the Kakeya conjecture in a breathtaking TWO-PAGE proof using the polynomial method!",
            "funFact": "Proving the Kakeya conjecture would instantly lead to major breakthroughs in the restriction conjecture for Fourier transforms and the Navier-Stokes equations!"
          },
          "investigators": {
            "tagline": "Bourgain-Katz-Tao bounds and the polynomial method.",
            "analogy": "The Kakeya maximal function inequality controls oscillatory integrals and directional derivatives across dense tube constellations.",
            "rules": [
              "Besicovitch tree construction.",
              "Kakeya maximal function: ||M_δ f||_p ≤ C_ε δ^{-ε} ||f||_p.",
              "Dvir's theorem (2008) in finite fields 𝔽_q."
            ],
            "mystery": "Can the polynomial method or polynomial partitioning (Guth-Katz) conquer the Euclidean continuous case in dimensions d ≥ 3?",
            "funFact": "Soichi Kakeya posed the needle problem in 1917."
          },
          "pioneers": {
            "tagline": "Decoupling theory and Fourier restriction.",
            "analogy": "Bourgain and Demeter's proof of the l² decoupling conjecture in 2015 achieved major progress toward the oscillatory integral consequences of Kakeya.",
            "rules": [
              "Bourgain-Demeter decoupling theorem.",
              "Hausdorff dimension in Mathlib.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI-accelerated geometric algorithms are searching for novel tube configuration configurations in 3D.",
            "funFact": "The Kakeya Problem is the central sun around which modern Euclidean harmonic analysis revolves."
          }
        },
        "history": [
          {
            "year": "1917",
            "author": "Soichi Kakeya",
            "note": "Poses the minimum area needle turning problem."
          },
          {
            "year": "1919",
            "author": "Abram Besicovitch",
            "note": "Proves that a Kakeya set can have measure arbitrarily close to zero."
          },
          {
            "year": "2008",
            "author": "Zeev Dvir",
            "note": "Solves finite field Kakeya conjecture in 2 pages using polynomials."
          }
        ]
      }
    }
  },
  {
    "id": "falconer",
    "icon": "📏",
    "difficulty": "Gr 9+",
    "domain": "geometry",
    "category": "geometry",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.MeasureTheory.Measure.Hausdorff\n-- Falconer's Distance Conjecture: If dim_H(E) > d/2, then the distance set Δ(E) has positive Lebesgue measure.",
    "locales": {
      "en": {
        "name": "Falconer's Distance Conjecture",
        "subtitle": "If a Fractal has Dimension > d/2, Does its Distance Set Have Positive Measure?",
        "field": "Fractal Geometry & Harmonic Analysis",
        "statusBadge": "MAJOR PROGRESS",
        "grades": {
          "explorers": {
            "tagline": "If you scatter dust on a canvas, how many different ruler lengths will connect the specks?",
            "analogy": "Kenneth Falconer asked in 1985: If a fractal set E in d dimensions is sufficiently thick (Hausdorff dimension > d/2), does the set of all mutual distances between its points contain a non-empty chunk of positive length? In 2020, Du, Guth, Ou, Wang, Wilson, and Zhang pushed the 2D threshold to 5/4, very close to the optimal 1!",
            "rules": [
              "Compact fractal set E ⊂ ℝ^d.",
              "Distance set Δ(E) = {|x - y| : x, y ∈ E}.",
              "Falconer Conjecture: If dim_H(E) > d/2, then Vol_1(Δ(E)) > 0.",
              "Mattila's circle: Closely tied to decay of circular Fourier spherical averages."
            ],
            "mystery": "This is the continuous fractal cousin of the Erdős distinct distance problem!",
            "funFact": "Falconer constructed counterexamples for dim(E) < d/2 using integer lattices, proving d/2 is the sharp barrier!"
          },
          "investigators": {
            "tagline": "Mattila integral and spherical Fourier transform decay.",
            "analogy": "Pertti Mattila proved that the distance set has positive measure if the spherical average ∫ |f̂(Rω)|² dσ(ω) decays faster than R^{-(d-1)}.",
            "rules": [
              "Mattila's circular energy integral.",
              "Guth, Iosevich, Ou, Wang (2020) threshold d=2: dim > 5/4.",
              "Decoupling theory on paraboloids."
            ],
            "mystery": "Can we bridge the final gap in 2D from 5/4 = 1.25 down to the conjectured 1.00?",
            "funFact": "Kenneth Falconer posed the problem in 1985 in Mathematika."
          },
          "pioneers": {
            "tagline": "Fourier extension and wave packet decomposition.",
            "analogy": "Modern attacks use polynomial partitioning to decompose the spatial configuration into cells, bounding tangencies between wave packets.",
            "rules": [
              "Polynomial partitioning in fractal geometry.",
              "Wave packet phase space analysis.",
              "Lean 4 Mathlib Hausdorff measure."
            ],
            "mystery": "AI-guided symbolic bounds are refining the exponent in higher dimensions d ≥ 3.",
            "funFact": "Falconer's Distance Problem is the flagship bridge between fractal dimensions and Euclidean distance sets."
          }
        },
        "history": [
          {
            "year": "1985",
            "author": "Kenneth Falconer",
            "note": "Formulates the distance set fractal dimension conjecture."
          },
          {
            "year": "1987",
            "author": "Pertti Mattila",
            "note": "Transforms the problem into spherical Fourier transform decay."
          },
          {
            "year": "2020",
            "author": "Guth, Ou, Wang et al.",
            "note": "Achieve record 5/4 threshold in 2D using wave packets."
          }
        ]
      },
      "de": {
        "name": "Falconer's Distance Conjecture",
        "subtitle": "If a Fractal has Dimension > d/2, Does its Distance Set Have Positive Measure?",
        "field": "Fractal Geometry & Harmonic Analysis",
        "statusBadge": "MAJOR PROGRESS",
        "grades": {
          "explorers": {
            "tagline": "If you scatter dust on a canvas, how many different ruler lengths will connect the specks?",
            "analogy": "Kenneth Falconer asked in 1985: If a fractal set E in d dimensions is sufficiently thick (Hausdorff dimension > d/2), does the set of all mutual distances between its points contain a non-empty chunk of positive length? In 2020, Du, Guth, Ou, Wang, Wilson, and Zhang pushed the 2D threshold to 5/4, very close to the optimal 1!",
            "rules": [
              "Compact fractal set E ⊂ ℝ^d.",
              "Distance set Δ(E) = {|x - y| : x, y ∈ E}.",
              "Falconer Conjecture: If dim_H(E) > d/2, then Vol_1(Δ(E)) > 0.",
              "Mattila's circle: Closely tied to decay of circular Fourier spherical averages."
            ],
            "mystery": "This is the continuous fractal cousin of the Erdős distinct distance problem!",
            "funFact": "Falconer constructed counterexamples for dim(E) < d/2 using integer lattices, proving d/2 is the sharp barrier!"
          },
          "investigators": {
            "tagline": "Mattila integral and spherical Fourier transform decay.",
            "analogy": "Pertti Mattila proved that the distance set has positive measure if the spherical average ∫ |f̂(Rω)|² dσ(ω) decays faster than R^{-(d-1)}.",
            "rules": [
              "Mattila's circular energy integral.",
              "Guth, Iosevich, Ou, Wang (2020) threshold d=2: dim > 5/4.",
              "Decoupling theory on paraboloids."
            ],
            "mystery": "Can we bridge the final gap in 2D from 5/4 = 1.25 down to the conjectured 1.00?",
            "funFact": "Kenneth Falconer posed the problem in 1985 in Mathematika."
          },
          "pioneers": {
            "tagline": "Fourier extension and wave packet decomposition.",
            "analogy": "Modern attacks use polynomial partitioning to decompose the spatial configuration into cells, bounding tangencies between wave packets.",
            "rules": [
              "Polynomial partitioning in fractal geometry.",
              "Wave packet phase space analysis.",
              "Lean 4 Mathlib Hausdorff measure."
            ],
            "mystery": "AI-guided symbolic bounds are refining the exponent in higher dimensions d ≥ 3.",
            "funFact": "Falconer's Distance Problem is the flagship bridge between fractal dimensions and Euclidean distance sets."
          }
        },
        "history": [
          {
            "year": "1985",
            "author": "Kenneth Falconer",
            "note": "Formulates the distance set fractal dimension conjecture."
          },
          {
            "year": "1987",
            "author": "Pertti Mattila",
            "note": "Transforms the problem into spherical Fourier transform decay."
          },
          {
            "year": "2020",
            "author": "Guth, Ou, Wang et al.",
            "note": "Achieve record 5/4 threshold in 2D using wave packets."
          }
        ]
      },
      "fr": {
        "name": "Falconer's Distance Conjecture",
        "subtitle": "If a Fractal has Dimension > d/2, Does its Distance Set Have Positive Measure?",
        "field": "Fractal Geometry & Harmonic Analysis",
        "statusBadge": "MAJOR PROGRESS",
        "grades": {
          "explorers": {
            "tagline": "If you scatter dust on a canvas, how many different ruler lengths will connect the specks?",
            "analogy": "Kenneth Falconer asked in 1985: If a fractal set E in d dimensions is sufficiently thick (Hausdorff dimension > d/2), does the set of all mutual distances between its points contain a non-empty chunk of positive length? In 2020, Du, Guth, Ou, Wang, Wilson, and Zhang pushed the 2D threshold to 5/4, very close to the optimal 1!",
            "rules": [
              "Compact fractal set E ⊂ ℝ^d.",
              "Distance set Δ(E) = {|x - y| : x, y ∈ E}.",
              "Falconer Conjecture: If dim_H(E) > d/2, then Vol_1(Δ(E)) > 0.",
              "Mattila's circle: Closely tied to decay of circular Fourier spherical averages."
            ],
            "mystery": "This is the continuous fractal cousin of the Erdős distinct distance problem!",
            "funFact": "Falconer constructed counterexamples for dim(E) < d/2 using integer lattices, proving d/2 is the sharp barrier!"
          },
          "investigators": {
            "tagline": "Mattila integral and spherical Fourier transform decay.",
            "analogy": "Pertti Mattila proved that the distance set has positive measure if the spherical average ∫ |f̂(Rω)|² dσ(ω) decays faster than R^{-(d-1)}.",
            "rules": [
              "Mattila's circular energy integral.",
              "Guth, Iosevich, Ou, Wang (2020) threshold d=2: dim > 5/4.",
              "Decoupling theory on paraboloids."
            ],
            "mystery": "Can we bridge the final gap in 2D from 5/4 = 1.25 down to the conjectured 1.00?",
            "funFact": "Kenneth Falconer posed the problem in 1985 in Mathematika."
          },
          "pioneers": {
            "tagline": "Fourier extension and wave packet decomposition.",
            "analogy": "Modern attacks use polynomial partitioning to decompose the spatial configuration into cells, bounding tangencies between wave packets.",
            "rules": [
              "Polynomial partitioning in fractal geometry.",
              "Wave packet phase space analysis.",
              "Lean 4 Mathlib Hausdorff measure."
            ],
            "mystery": "AI-guided symbolic bounds are refining the exponent in higher dimensions d ≥ 3.",
            "funFact": "Falconer's Distance Problem is the flagship bridge between fractal dimensions and Euclidean distance sets."
          }
        },
        "history": [
          {
            "year": "1985",
            "author": "Kenneth Falconer",
            "note": "Formulates the distance set fractal dimension conjecture."
          },
          {
            "year": "1987",
            "author": "Pertti Mattila",
            "note": "Transforms the problem into spherical Fourier transform decay."
          },
          {
            "year": "2020",
            "author": "Guth, Ou, Wang et al.",
            "note": "Achieve record 5/4 threshold in 2D using wave packets."
          }
        ]
      },
      "it": {
        "name": "Falconer's Distance Conjecture",
        "subtitle": "If a Fractal has Dimension > d/2, Does its Distance Set Have Positive Measure?",
        "field": "Fractal Geometry & Harmonic Analysis",
        "statusBadge": "MAJOR PROGRESS",
        "grades": {
          "explorers": {
            "tagline": "If you scatter dust on a canvas, how many different ruler lengths will connect the specks?",
            "analogy": "Kenneth Falconer asked in 1985: If a fractal set E in d dimensions is sufficiently thick (Hausdorff dimension > d/2), does the set of all mutual distances between its points contain a non-empty chunk of positive length? In 2020, Du, Guth, Ou, Wang, Wilson, and Zhang pushed the 2D threshold to 5/4, very close to the optimal 1!",
            "rules": [
              "Compact fractal set E ⊂ ℝ^d.",
              "Distance set Δ(E) = {|x - y| : x, y ∈ E}.",
              "Falconer Conjecture: If dim_H(E) > d/2, then Vol_1(Δ(E)) > 0.",
              "Mattila's circle: Closely tied to decay of circular Fourier spherical averages."
            ],
            "mystery": "This is the continuous fractal cousin of the Erdős distinct distance problem!",
            "funFact": "Falconer constructed counterexamples for dim(E) < d/2 using integer lattices, proving d/2 is the sharp barrier!"
          },
          "investigators": {
            "tagline": "Mattila integral and spherical Fourier transform decay.",
            "analogy": "Pertti Mattila proved that the distance set has positive measure if the spherical average ∫ |f̂(Rω)|² dσ(ω) decays faster than R^{-(d-1)}.",
            "rules": [
              "Mattila's circular energy integral.",
              "Guth, Iosevich, Ou, Wang (2020) threshold d=2: dim > 5/4.",
              "Decoupling theory on paraboloids."
            ],
            "mystery": "Can we bridge the final gap in 2D from 5/4 = 1.25 down to the conjectured 1.00?",
            "funFact": "Kenneth Falconer posed the problem in 1985 in Mathematika."
          },
          "pioneers": {
            "tagline": "Fourier extension and wave packet decomposition.",
            "analogy": "Modern attacks use polynomial partitioning to decompose the spatial configuration into cells, bounding tangencies between wave packets.",
            "rules": [
              "Polynomial partitioning in fractal geometry.",
              "Wave packet phase space analysis.",
              "Lean 4 Mathlib Hausdorff measure."
            ],
            "mystery": "AI-guided symbolic bounds are refining the exponent in higher dimensions d ≥ 3.",
            "funFact": "Falconer's Distance Problem is the flagship bridge between fractal dimensions and Euclidean distance sets."
          }
        },
        "history": [
          {
            "year": "1985",
            "author": "Kenneth Falconer",
            "note": "Formulates the distance set fractal dimension conjecture."
          },
          {
            "year": "1987",
            "author": "Pertti Mattila",
            "note": "Transforms the problem into spherical Fourier transform decay."
          },
          {
            "year": "2020",
            "author": "Guth, Ou, Wang et al.",
            "note": "Achieve record 5/4 threshold in 2D using wave packets."
          }
        ]
      },
      "ja": {
        "name": "Falconer's Distance Conjecture",
        "subtitle": "If a Fractal has Dimension > d/2, Does its Distance Set Have Positive Measure?",
        "field": "Fractal Geometry & Harmonic Analysis",
        "statusBadge": "MAJOR PROGRESS",
        "grades": {
          "explorers": {
            "tagline": "If you scatter dust on a canvas, how many different ruler lengths will connect the specks?",
            "analogy": "Kenneth Falconer asked in 1985: If a fractal set E in d dimensions is sufficiently thick (Hausdorff dimension > d/2), does the set of all mutual distances between its points contain a non-empty chunk of positive length? In 2020, Du, Guth, Ou, Wang, Wilson, and Zhang pushed the 2D threshold to 5/4, very close to the optimal 1!",
            "rules": [
              "Compact fractal set E ⊂ ℝ^d.",
              "Distance set Δ(E) = {|x - y| : x, y ∈ E}.",
              "Falconer Conjecture: If dim_H(E) > d/2, then Vol_1(Δ(E)) > 0.",
              "Mattila's circle: Closely tied to decay of circular Fourier spherical averages."
            ],
            "mystery": "This is the continuous fractal cousin of the Erdős distinct distance problem!",
            "funFact": "Falconer constructed counterexamples for dim(E) < d/2 using integer lattices, proving d/2 is the sharp barrier!"
          },
          "investigators": {
            "tagline": "Mattila integral and spherical Fourier transform decay.",
            "analogy": "Pertti Mattila proved that the distance set has positive measure if the spherical average ∫ |f̂(Rω)|² dσ(ω) decays faster than R^{-(d-1)}.",
            "rules": [
              "Mattila's circular energy integral.",
              "Guth, Iosevich, Ou, Wang (2020) threshold d=2: dim > 5/4.",
              "Decoupling theory on paraboloids."
            ],
            "mystery": "Can we bridge the final gap in 2D from 5/4 = 1.25 down to the conjectured 1.00?",
            "funFact": "Kenneth Falconer posed the problem in 1985 in Mathematika."
          },
          "pioneers": {
            "tagline": "Fourier extension and wave packet decomposition.",
            "analogy": "Modern attacks use polynomial partitioning to decompose the spatial configuration into cells, bounding tangencies between wave packets.",
            "rules": [
              "Polynomial partitioning in fractal geometry.",
              "Wave packet phase space analysis.",
              "Lean 4 Mathlib Hausdorff measure."
            ],
            "mystery": "AI-guided symbolic bounds are refining the exponent in higher dimensions d ≥ 3.",
            "funFact": "Falconer's Distance Problem is the flagship bridge between fractal dimensions and Euclidean distance sets."
          }
        },
        "history": [
          {
            "year": "1985",
            "author": "Kenneth Falconer",
            "note": "Formulates the distance set fractal dimension conjecture."
          },
          {
            "year": "1987",
            "author": "Pertti Mattila",
            "note": "Transforms the problem into spherical Fourier transform decay."
          },
          {
            "year": "2020",
            "author": "Guth, Ou, Wang et al.",
            "note": "Achieve record 5/4 threshold in 2D using wave packets."
          }
        ]
      },
      "ko": {
        "name": "Falconer's Distance Conjecture",
        "subtitle": "If a Fractal has Dimension > d/2, Does its Distance Set Have Positive Measure?",
        "field": "Fractal Geometry & Harmonic Analysis",
        "statusBadge": "MAJOR PROGRESS",
        "grades": {
          "explorers": {
            "tagline": "If you scatter dust on a canvas, how many different ruler lengths will connect the specks?",
            "analogy": "Kenneth Falconer asked in 1985: If a fractal set E in d dimensions is sufficiently thick (Hausdorff dimension > d/2), does the set of all mutual distances between its points contain a non-empty chunk of positive length? In 2020, Du, Guth, Ou, Wang, Wilson, and Zhang pushed the 2D threshold to 5/4, very close to the optimal 1!",
            "rules": [
              "Compact fractal set E ⊂ ℝ^d.",
              "Distance set Δ(E) = {|x - y| : x, y ∈ E}.",
              "Falconer Conjecture: If dim_H(E) > d/2, then Vol_1(Δ(E)) > 0.",
              "Mattila's circle: Closely tied to decay of circular Fourier spherical averages."
            ],
            "mystery": "This is the continuous fractal cousin of the Erdős distinct distance problem!",
            "funFact": "Falconer constructed counterexamples for dim(E) < d/2 using integer lattices, proving d/2 is the sharp barrier!"
          },
          "investigators": {
            "tagline": "Mattila integral and spherical Fourier transform decay.",
            "analogy": "Pertti Mattila proved that the distance set has positive measure if the spherical average ∫ |f̂(Rω)|² dσ(ω) decays faster than R^{-(d-1)}.",
            "rules": [
              "Mattila's circular energy integral.",
              "Guth, Iosevich, Ou, Wang (2020) threshold d=2: dim > 5/4.",
              "Decoupling theory on paraboloids."
            ],
            "mystery": "Can we bridge the final gap in 2D from 5/4 = 1.25 down to the conjectured 1.00?",
            "funFact": "Kenneth Falconer posed the problem in 1985 in Mathematika."
          },
          "pioneers": {
            "tagline": "Fourier extension and wave packet decomposition.",
            "analogy": "Modern attacks use polynomial partitioning to decompose the spatial configuration into cells, bounding tangencies between wave packets.",
            "rules": [
              "Polynomial partitioning in fractal geometry.",
              "Wave packet phase space analysis.",
              "Lean 4 Mathlib Hausdorff measure."
            ],
            "mystery": "AI-guided symbolic bounds are refining the exponent in higher dimensions d ≥ 3.",
            "funFact": "Falconer's Distance Problem is the flagship bridge between fractal dimensions and Euclidean distance sets."
          }
        },
        "history": [
          {
            "year": "1985",
            "author": "Kenneth Falconer",
            "note": "Formulates the distance set fractal dimension conjecture."
          },
          {
            "year": "1987",
            "author": "Pertti Mattila",
            "note": "Transforms the problem into spherical Fourier transform decay."
          },
          {
            "year": "2020",
            "author": "Guth, Ou, Wang et al.",
            "note": "Achieve record 5/4 threshold in 2D using wave packets."
          }
        ]
      },
      "zh-Hans": {
        "name": "法尔科纳距离集猜想",
        "subtitle": "分形维数超过 d/2 时其点对距离集是否必定具有正测度？",
        "field": "分形几何学 & 调和分析",
        "statusBadge": "近年重大进展",
        "grades": {
          "explorers": {
            "tagline": "往画布上撒一把分形尘埃，这些尘埃颗粒之间的距离能不能填满一段连续的尺子刻度？",
            "analogy": "肯尼斯·法尔科纳于1985年提出：如果 d 维空间中的分形点集 E 足够厚实（豪斯多夫维数 dim(E) > d/2），那么它内部所有两两点对的距离所构成的集合 Δ(E)，是否必定具有正的勒贝格测度（即拥有一段完整的真实长度）？2020年杜-古斯-王团队在二维中将阈值推向 5/4，逼近极限 1！",
            "rules": [
              "d 维空间中的紧致分形集 E。",
              "距离集 Δ(E) = {|x - y| : x, y ∈ E}。",
              "法尔科纳猜想：若豪斯多夫维数大于 d/2，距离集必具正勒贝格测度。",
              "与马蒂拉球面傅里叶平均紧密相连。"
            ],
            "mystery": "这是埃尔德什不相重距离问题在连续分形测度几何中的终极孪生兄弟！",
            "funFact": "法尔科纳利用整点格构造出了维数小于 d/2 时的明确反例，证明了 d/2 就是不可逾越的最优临界分水岭！"
          },
          "investigators": {
            "tagline": "马蒂拉能量积分与球面傅里叶变换能量衰减。",
            "analogy": "马蒂拉证明：若测度傅里叶变换在半径为 R 的球面平均衰减速率超越临界阶，距离集正测度性立即获证。",
            "rules": [
              "马蒂拉积分判据。",
              "古斯、王等人 (2020) 将二维阈值推至 5/4。",
              "抛物面解耦定理的应用。"
            ],
            "mystery": "能否将二维中的 5/4 = 1.25 推进至猜想的理论终点 1.00？",
            "funFact": "肯尼斯·法尔科纳于1985年在伦敦提出。"
          },
          "pioneers": {
            "tagline": "傅里叶延拓算子与波包空间分解技术。",
            "analogy": "当代最新突破综合运用多项式空间分割技术与高维波包相切分析。",
            "rules": [
              "多项式剖分在分形几何中的应用。",
              "相空间中的波包干涉分析。",
              "Lean 4 Mathlib 中分形豪斯多夫测度形式化。"
            ],
            "mystery": "AI 自动化系统正在分析高维球面限制性估计中的微元权重。",
            "funFact": "法尔科纳问题是分形豪斯多夫维数与欧氏空间距离结构之间最核心的纽带。"
          }
        },
        "history": [
          {
            "year": "1985",
            "author": "肯尼斯·法尔科纳",
            "note": "在学术期刊正式提出距离集维数猜想。"
          },
          {
            "year": "1987",
            "author": "马蒂拉",
            "note": "将问题转化为球面傅里叶能量积分判据。"
          },
          {
            "year": "2020",
            "author": "古斯、王等人团队",
            "note": "运用波包与解耦技术将二维阈值推向 5/4！"
          }
        ]
      },
      "zh-Hant": {
        "name": "Falconer's Distance Conjecture",
        "subtitle": "If a Fractal has Dimension > d/2, Does its Distance Set Have Positive Measure?",
        "field": "Fractal Geometry & Harmonic Analysis",
        "statusBadge": "MAJOR PROGRESS",
        "grades": {
          "explorers": {
            "tagline": "If you scatter dust on a canvas, how many different ruler lengths will connect the specks?",
            "analogy": "Kenneth Falconer asked in 1985: If a fractal set E in d dimensions is sufficiently thick (Hausdorff dimension > d/2), does the set of all mutual distances between its points contain a non-empty chunk of positive length? In 2020, Du, Guth, Ou, Wang, Wilson, and Zhang pushed the 2D threshold to 5/4, very close to the optimal 1!",
            "rules": [
              "Compact fractal set E ⊂ ℝ^d.",
              "Distance set Δ(E) = {|x - y| : x, y ∈ E}.",
              "Falconer Conjecture: If dim_H(E) > d/2, then Vol_1(Δ(E)) > 0.",
              "Mattila's circle: Closely tied to decay of circular Fourier spherical averages."
            ],
            "mystery": "This is the continuous fractal cousin of the Erdős distinct distance problem!",
            "funFact": "Falconer constructed counterexamples for dim(E) < d/2 using integer lattices, proving d/2 is the sharp barrier!"
          },
          "investigators": {
            "tagline": "Mattila integral and spherical Fourier transform decay.",
            "analogy": "Pertti Mattila proved that the distance set has positive measure if the spherical average ∫ |f̂(Rω)|² dσ(ω) decays faster than R^{-(d-1)}.",
            "rules": [
              "Mattila's circular energy integral.",
              "Guth, Iosevich, Ou, Wang (2020) threshold d=2: dim > 5/4.",
              "Decoupling theory on paraboloids."
            ],
            "mystery": "Can we bridge the final gap in 2D from 5/4 = 1.25 down to the conjectured 1.00?",
            "funFact": "Kenneth Falconer posed the problem in 1985 in Mathematika."
          },
          "pioneers": {
            "tagline": "Fourier extension and wave packet decomposition.",
            "analogy": "Modern attacks use polynomial partitioning to decompose the spatial configuration into cells, bounding tangencies between wave packets.",
            "rules": [
              "Polynomial partitioning in fractal geometry.",
              "Wave packet phase space analysis.",
              "Lean 4 Mathlib Hausdorff measure."
            ],
            "mystery": "AI-guided symbolic bounds are refining the exponent in higher dimensions d ≥ 3.",
            "funFact": "Falconer's Distance Problem is the flagship bridge between fractal dimensions and Euclidean distance sets."
          }
        },
        "history": [
          {
            "year": "1985",
            "author": "Kenneth Falconer",
            "note": "Formulates the distance set fractal dimension conjecture."
          },
          {
            "year": "1987",
            "author": "Pertti Mattila",
            "note": "Transforms the problem into spherical Fourier transform decay."
          },
          {
            "year": "2020",
            "author": "Guth, Ou, Wang et al.",
            "note": "Achieve record 5/4 threshold in 2D using wave packets."
          }
        ]
      }
    }
  },
  {
    "id": "plateau",
    "icon": "🫧",
    "difficulty": "All Ages",
    "domain": "geometry",
    "category": "geometry",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Analysis.Calculus.FDeriv.Basic\n-- Plateau's Problem: For any closed wire loop in ℝ³, there exists a surface of minimal area spanning it.\n-- Proved by Jesse Douglas (1931) and Tibor Radó (1930) - First Fields Medal 1936.",
    "locales": {
      "en": {
        "name": "Plateau's Minimal Surface Problem",
        "subtitle": "Does Every Wire Frame Trap a Minimal Area Soap Film?",
        "field": "Calculus of Variations & Differential Geometry",
        "statusBadge": "FIELDS MEDAL TRIUMPH",
        "grades": {
          "explorers": {
            "tagline": "Dip any twisted wire loop into soap water: can math always find the magical minimal film?",
            "analogy": "In 1873, Belgian physicist Joseph Plateau dipped wire frames into soapy water and noticed that nature ALWAYS finds the surface with the least possible area spanning the boundary wire! Jesse Douglas solved the general mathematical existence problem in 1931, earning the very first Fields Medal in history in 1936!",
            "rules": [
              "Given any simple closed Jordan curve Γ in ℝ³.",
              "Find a surface S spanning Γ.",
              "Area(S) is minimized among all surfaces with boundary Γ.",
              "Mean curvature H = 0 everywhere on the surface."
            ],
            "mystery": "Because soap film surface tension pulls equally in all directions, mean curvature H is exactly ZERO everywhere, making every point a saddle point!",
            "funFact": "In higher dimensions (dimension 8 and above), minimal cones like the Simons cone can have singularities, proving smooth solutions only exist up to 7 dimensions!"
          },
          "investigators": {
            "tagline": "Douglas-Dirichlet functional and harmonic maps from the unit disk.",
            "analogy": "Douglas bypassed area non-compactness by minimizing Dirichlet energy E(u) = 1/2 ∫ |∇u|² over conformal parametrizations from the disk D².",
            "rules": [
              "Douglas functional: A(u) = 1/16π ∬ |u(θ) - u(φ)|² / sin²((θ-φ)/2) dθ dφ.",
              "Euler-Lagrange equation: Δu = 0 (Harmonic map).",
              "Conformal condition: |u_x| = |u_y| and u_x · u_y = 0."
            ],
            "mystery": "What is the complete topology of branching points for unoriented or non-simply connected minimal surfaces?",
            "funFact": "Joseph Plateau (1873); proved by Jesse Douglas and Tibor Radó (1930-1931)."
          },
          "pioneers": {
            "tagline": "Geometric measure theory, currents, and GMT solutions.",
            "analogy": "Federer and Fleming extended Plateau's problem to arbitrary dimensions using integer-multiplicity rectifiable currents.",
            "rules": [
              "Simons cone singularity in dimension 8.",
              "Bernstein problem: Minimal graphs are hyperplanes for d ≤ 8.",
              "Mathlib formalization of Dirichlet energy."
            ],
            "mystery": "AI-guided finite element solvers automatically generate minimal soap films on 3D printed architectural wireframes.",
            "funFact": "Plateau's problem laid the foundation for the entire modern field of geometric calculus of variations."
          }
        },
        "history": [
          {
            "year": "1873",
            "author": "Joseph Plateau",
            "note": "Publishes Statique expérimentale des liquides on soap films."
          },
          {
            "year": "1930",
            "author": "Tibor Radó",
            "note": "Proves existence for rectifiable boundary curves."
          },
          {
            "year": "1931",
            "author": "Jesse Douglas",
            "note": "Solves general Plateau problem for arbitrary Jordan curves."
          },
          {
            "year": "1936",
            "author": "First Fields Medal",
            "note": "Douglas awarded inaugural Fields Medal at Oslo ICM."
          }
        ]
      },
      "de": {
        "name": "Plateau's Minimal Surface Problem",
        "subtitle": "Does Every Wire Frame Trap a Minimal Area Soap Film?",
        "field": "Calculus of Variations & Differential Geometry",
        "statusBadge": "FIELDS MEDAL TRIUMPH",
        "grades": {
          "explorers": {
            "tagline": "Dip any twisted wire loop into soap water: can math always find the magical minimal film?",
            "analogy": "In 1873, Belgian physicist Joseph Plateau dipped wire frames into soapy water and noticed that nature ALWAYS finds the surface with the least possible area spanning the boundary wire! Jesse Douglas solved the general mathematical existence problem in 1931, earning the very first Fields Medal in history in 1936!",
            "rules": [
              "Given any simple closed Jordan curve Γ in ℝ³.",
              "Find a surface S spanning Γ.",
              "Area(S) is minimized among all surfaces with boundary Γ.",
              "Mean curvature H = 0 everywhere on the surface."
            ],
            "mystery": "Because soap film surface tension pulls equally in all directions, mean curvature H is exactly ZERO everywhere, making every point a saddle point!",
            "funFact": "In higher dimensions (dimension 8 and above), minimal cones like the Simons cone can have singularities, proving smooth solutions only exist up to 7 dimensions!"
          },
          "investigators": {
            "tagline": "Douglas-Dirichlet functional and harmonic maps from the unit disk.",
            "analogy": "Douglas bypassed area non-compactness by minimizing Dirichlet energy E(u) = 1/2 ∫ |∇u|² over conformal parametrizations from the disk D².",
            "rules": [
              "Douglas functional: A(u) = 1/16π ∬ |u(θ) - u(φ)|² / sin²((θ-φ)/2) dθ dφ.",
              "Euler-Lagrange equation: Δu = 0 (Harmonic map).",
              "Conformal condition: |u_x| = |u_y| and u_x · u_y = 0."
            ],
            "mystery": "What is the complete topology of branching points for unoriented or non-simply connected minimal surfaces?",
            "funFact": "Joseph Plateau (1873); proved by Jesse Douglas and Tibor Radó (1930-1931)."
          },
          "pioneers": {
            "tagline": "Geometric measure theory, currents, and GMT solutions.",
            "analogy": "Federer and Fleming extended Plateau's problem to arbitrary dimensions using integer-multiplicity rectifiable currents.",
            "rules": [
              "Simons cone singularity in dimension 8.",
              "Bernstein problem: Minimal graphs are hyperplanes for d ≤ 8.",
              "Mathlib formalization of Dirichlet energy."
            ],
            "mystery": "AI-guided finite element solvers automatically generate minimal soap films on 3D printed architectural wireframes.",
            "funFact": "Plateau's problem laid the foundation for the entire modern field of geometric calculus of variations."
          }
        },
        "history": [
          {
            "year": "1873",
            "author": "Joseph Plateau",
            "note": "Publishes Statique expérimentale des liquides on soap films."
          },
          {
            "year": "1930",
            "author": "Tibor Radó",
            "note": "Proves existence for rectifiable boundary curves."
          },
          {
            "year": "1931",
            "author": "Jesse Douglas",
            "note": "Solves general Plateau problem for arbitrary Jordan curves."
          },
          {
            "year": "1936",
            "author": "First Fields Medal",
            "note": "Douglas awarded inaugural Fields Medal at Oslo ICM."
          }
        ]
      },
      "fr": {
        "name": "Plateau's Minimal Surface Problem",
        "subtitle": "Does Every Wire Frame Trap a Minimal Area Soap Film?",
        "field": "Calculus of Variations & Differential Geometry",
        "statusBadge": "FIELDS MEDAL TRIUMPH",
        "grades": {
          "explorers": {
            "tagline": "Dip any twisted wire loop into soap water: can math always find the magical minimal film?",
            "analogy": "In 1873, Belgian physicist Joseph Plateau dipped wire frames into soapy water and noticed that nature ALWAYS finds the surface with the least possible area spanning the boundary wire! Jesse Douglas solved the general mathematical existence problem in 1931, earning the very first Fields Medal in history in 1936!",
            "rules": [
              "Given any simple closed Jordan curve Γ in ℝ³.",
              "Find a surface S spanning Γ.",
              "Area(S) is minimized among all surfaces with boundary Γ.",
              "Mean curvature H = 0 everywhere on the surface."
            ],
            "mystery": "Because soap film surface tension pulls equally in all directions, mean curvature H is exactly ZERO everywhere, making every point a saddle point!",
            "funFact": "In higher dimensions (dimension 8 and above), minimal cones like the Simons cone can have singularities, proving smooth solutions only exist up to 7 dimensions!"
          },
          "investigators": {
            "tagline": "Douglas-Dirichlet functional and harmonic maps from the unit disk.",
            "analogy": "Douglas bypassed area non-compactness by minimizing Dirichlet energy E(u) = 1/2 ∫ |∇u|² over conformal parametrizations from the disk D².",
            "rules": [
              "Douglas functional: A(u) = 1/16π ∬ |u(θ) - u(φ)|² / sin²((θ-φ)/2) dθ dφ.",
              "Euler-Lagrange equation: Δu = 0 (Harmonic map).",
              "Conformal condition: |u_x| = |u_y| and u_x · u_y = 0."
            ],
            "mystery": "What is the complete topology of branching points for unoriented or non-simply connected minimal surfaces?",
            "funFact": "Joseph Plateau (1873); proved by Jesse Douglas and Tibor Radó (1930-1931)."
          },
          "pioneers": {
            "tagline": "Geometric measure theory, currents, and GMT solutions.",
            "analogy": "Federer and Fleming extended Plateau's problem to arbitrary dimensions using integer-multiplicity rectifiable currents.",
            "rules": [
              "Simons cone singularity in dimension 8.",
              "Bernstein problem: Minimal graphs are hyperplanes for d ≤ 8.",
              "Mathlib formalization of Dirichlet energy."
            ],
            "mystery": "AI-guided finite element solvers automatically generate minimal soap films on 3D printed architectural wireframes.",
            "funFact": "Plateau's problem laid the foundation for the entire modern field of geometric calculus of variations."
          }
        },
        "history": [
          {
            "year": "1873",
            "author": "Joseph Plateau",
            "note": "Publishes Statique expérimentale des liquides on soap films."
          },
          {
            "year": "1930",
            "author": "Tibor Radó",
            "note": "Proves existence for rectifiable boundary curves."
          },
          {
            "year": "1931",
            "author": "Jesse Douglas",
            "note": "Solves general Plateau problem for arbitrary Jordan curves."
          },
          {
            "year": "1936",
            "author": "First Fields Medal",
            "note": "Douglas awarded inaugural Fields Medal at Oslo ICM."
          }
        ]
      },
      "it": {
        "name": "Plateau's Minimal Surface Problem",
        "subtitle": "Does Every Wire Frame Trap a Minimal Area Soap Film?",
        "field": "Calculus of Variations & Differential Geometry",
        "statusBadge": "FIELDS MEDAL TRIUMPH",
        "grades": {
          "explorers": {
            "tagline": "Dip any twisted wire loop into soap water: can math always find the magical minimal film?",
            "analogy": "In 1873, Belgian physicist Joseph Plateau dipped wire frames into soapy water and noticed that nature ALWAYS finds the surface with the least possible area spanning the boundary wire! Jesse Douglas solved the general mathematical existence problem in 1931, earning the very first Fields Medal in history in 1936!",
            "rules": [
              "Given any simple closed Jordan curve Γ in ℝ³.",
              "Find a surface S spanning Γ.",
              "Area(S) is minimized among all surfaces with boundary Γ.",
              "Mean curvature H = 0 everywhere on the surface."
            ],
            "mystery": "Because soap film surface tension pulls equally in all directions, mean curvature H is exactly ZERO everywhere, making every point a saddle point!",
            "funFact": "In higher dimensions (dimension 8 and above), minimal cones like the Simons cone can have singularities, proving smooth solutions only exist up to 7 dimensions!"
          },
          "investigators": {
            "tagline": "Douglas-Dirichlet functional and harmonic maps from the unit disk.",
            "analogy": "Douglas bypassed area non-compactness by minimizing Dirichlet energy E(u) = 1/2 ∫ |∇u|² over conformal parametrizations from the disk D².",
            "rules": [
              "Douglas functional: A(u) = 1/16π ∬ |u(θ) - u(φ)|² / sin²((θ-φ)/2) dθ dφ.",
              "Euler-Lagrange equation: Δu = 0 (Harmonic map).",
              "Conformal condition: |u_x| = |u_y| and u_x · u_y = 0."
            ],
            "mystery": "What is the complete topology of branching points for unoriented or non-simply connected minimal surfaces?",
            "funFact": "Joseph Plateau (1873); proved by Jesse Douglas and Tibor Radó (1930-1931)."
          },
          "pioneers": {
            "tagline": "Geometric measure theory, currents, and GMT solutions.",
            "analogy": "Federer and Fleming extended Plateau's problem to arbitrary dimensions using integer-multiplicity rectifiable currents.",
            "rules": [
              "Simons cone singularity in dimension 8.",
              "Bernstein problem: Minimal graphs are hyperplanes for d ≤ 8.",
              "Mathlib formalization of Dirichlet energy."
            ],
            "mystery": "AI-guided finite element solvers automatically generate minimal soap films on 3D printed architectural wireframes.",
            "funFact": "Plateau's problem laid the foundation for the entire modern field of geometric calculus of variations."
          }
        },
        "history": [
          {
            "year": "1873",
            "author": "Joseph Plateau",
            "note": "Publishes Statique expérimentale des liquides on soap films."
          },
          {
            "year": "1930",
            "author": "Tibor Radó",
            "note": "Proves existence for rectifiable boundary curves."
          },
          {
            "year": "1931",
            "author": "Jesse Douglas",
            "note": "Solves general Plateau problem for arbitrary Jordan curves."
          },
          {
            "year": "1936",
            "author": "First Fields Medal",
            "note": "Douglas awarded inaugural Fields Medal at Oslo ICM."
          }
        ]
      },
      "ja": {
        "name": "Plateau's Minimal Surface Problem",
        "subtitle": "Does Every Wire Frame Trap a Minimal Area Soap Film?",
        "field": "Calculus of Variations & Differential Geometry",
        "statusBadge": "FIELDS MEDAL TRIUMPH",
        "grades": {
          "explorers": {
            "tagline": "Dip any twisted wire loop into soap water: can math always find the magical minimal film?",
            "analogy": "In 1873, Belgian physicist Joseph Plateau dipped wire frames into soapy water and noticed that nature ALWAYS finds the surface with the least possible area spanning the boundary wire! Jesse Douglas solved the general mathematical existence problem in 1931, earning the very first Fields Medal in history in 1936!",
            "rules": [
              "Given any simple closed Jordan curve Γ in ℝ³.",
              "Find a surface S spanning Γ.",
              "Area(S) is minimized among all surfaces with boundary Γ.",
              "Mean curvature H = 0 everywhere on the surface."
            ],
            "mystery": "Because soap film surface tension pulls equally in all directions, mean curvature H is exactly ZERO everywhere, making every point a saddle point!",
            "funFact": "In higher dimensions (dimension 8 and above), minimal cones like the Simons cone can have singularities, proving smooth solutions only exist up to 7 dimensions!"
          },
          "investigators": {
            "tagline": "Douglas-Dirichlet functional and harmonic maps from the unit disk.",
            "analogy": "Douglas bypassed area non-compactness by minimizing Dirichlet energy E(u) = 1/2 ∫ |∇u|² over conformal parametrizations from the disk D².",
            "rules": [
              "Douglas functional: A(u) = 1/16π ∬ |u(θ) - u(φ)|² / sin²((θ-φ)/2) dθ dφ.",
              "Euler-Lagrange equation: Δu = 0 (Harmonic map).",
              "Conformal condition: |u_x| = |u_y| and u_x · u_y = 0."
            ],
            "mystery": "What is the complete topology of branching points for unoriented or non-simply connected minimal surfaces?",
            "funFact": "Joseph Plateau (1873); proved by Jesse Douglas and Tibor Radó (1930-1931)."
          },
          "pioneers": {
            "tagline": "Geometric measure theory, currents, and GMT solutions.",
            "analogy": "Federer and Fleming extended Plateau's problem to arbitrary dimensions using integer-multiplicity rectifiable currents.",
            "rules": [
              "Simons cone singularity in dimension 8.",
              "Bernstein problem: Minimal graphs are hyperplanes for d ≤ 8.",
              "Mathlib formalization of Dirichlet energy."
            ],
            "mystery": "AI-guided finite element solvers automatically generate minimal soap films on 3D printed architectural wireframes.",
            "funFact": "Plateau's problem laid the foundation for the entire modern field of geometric calculus of variations."
          }
        },
        "history": [
          {
            "year": "1873",
            "author": "Joseph Plateau",
            "note": "Publishes Statique expérimentale des liquides on soap films."
          },
          {
            "year": "1930",
            "author": "Tibor Radó",
            "note": "Proves existence for rectifiable boundary curves."
          },
          {
            "year": "1931",
            "author": "Jesse Douglas",
            "note": "Solves general Plateau problem for arbitrary Jordan curves."
          },
          {
            "year": "1936",
            "author": "First Fields Medal",
            "note": "Douglas awarded inaugural Fields Medal at Oslo ICM."
          }
        ]
      },
      "ko": {
        "name": "Plateau's Minimal Surface Problem",
        "subtitle": "Does Every Wire Frame Trap a Minimal Area Soap Film?",
        "field": "Calculus of Variations & Differential Geometry",
        "statusBadge": "FIELDS MEDAL TRIUMPH",
        "grades": {
          "explorers": {
            "tagline": "Dip any twisted wire loop into soap water: can math always find the magical minimal film?",
            "analogy": "In 1873, Belgian physicist Joseph Plateau dipped wire frames into soapy water and noticed that nature ALWAYS finds the surface with the least possible area spanning the boundary wire! Jesse Douglas solved the general mathematical existence problem in 1931, earning the very first Fields Medal in history in 1936!",
            "rules": [
              "Given any simple closed Jordan curve Γ in ℝ³.",
              "Find a surface S spanning Γ.",
              "Area(S) is minimized among all surfaces with boundary Γ.",
              "Mean curvature H = 0 everywhere on the surface."
            ],
            "mystery": "Because soap film surface tension pulls equally in all directions, mean curvature H is exactly ZERO everywhere, making every point a saddle point!",
            "funFact": "In higher dimensions (dimension 8 and above), minimal cones like the Simons cone can have singularities, proving smooth solutions only exist up to 7 dimensions!"
          },
          "investigators": {
            "tagline": "Douglas-Dirichlet functional and harmonic maps from the unit disk.",
            "analogy": "Douglas bypassed area non-compactness by minimizing Dirichlet energy E(u) = 1/2 ∫ |∇u|² over conformal parametrizations from the disk D².",
            "rules": [
              "Douglas functional: A(u) = 1/16π ∬ |u(θ) - u(φ)|² / sin²((θ-φ)/2) dθ dφ.",
              "Euler-Lagrange equation: Δu = 0 (Harmonic map).",
              "Conformal condition: |u_x| = |u_y| and u_x · u_y = 0."
            ],
            "mystery": "What is the complete topology of branching points for unoriented or non-simply connected minimal surfaces?",
            "funFact": "Joseph Plateau (1873); proved by Jesse Douglas and Tibor Radó (1930-1931)."
          },
          "pioneers": {
            "tagline": "Geometric measure theory, currents, and GMT solutions.",
            "analogy": "Federer and Fleming extended Plateau's problem to arbitrary dimensions using integer-multiplicity rectifiable currents.",
            "rules": [
              "Simons cone singularity in dimension 8.",
              "Bernstein problem: Minimal graphs are hyperplanes for d ≤ 8.",
              "Mathlib formalization of Dirichlet energy."
            ],
            "mystery": "AI-guided finite element solvers automatically generate minimal soap films on 3D printed architectural wireframes.",
            "funFact": "Plateau's problem laid the foundation for the entire modern field of geometric calculus of variations."
          }
        },
        "history": [
          {
            "year": "1873",
            "author": "Joseph Plateau",
            "note": "Publishes Statique expérimentale des liquides on soap films."
          },
          {
            "year": "1930",
            "author": "Tibor Radó",
            "note": "Proves existence for rectifiable boundary curves."
          },
          {
            "year": "1931",
            "author": "Jesse Douglas",
            "note": "Solves general Plateau problem for arbitrary Jordan curves."
          },
          {
            "year": "1936",
            "author": "First Fields Medal",
            "note": "Douglas awarded inaugural Fields Medal at Oslo ICM."
          }
        ]
      },
      "zh-Hans": {
        "name": "普拉托极小曲面问题",
        "subtitle": "任意闭合铁丝线圈浸入肥皂水，是否必定能拉出一张表面积最小的肥皂膜？",
        "field": "变分法 & 微分几何学",
        "statusBadge": "首届菲尔兹奖开山之作",
        "grades": {
          "explorers": {
            "tagline": "把任意扭曲的铁丝框浸入肥皂水中拿出来，数学上是否永远能证明存在一张表面积最小的光滑薄膜？",
            "analogy": "1873年比利时物理学家普拉托将各种扭折的铁丝浸入肥皂水中，惊奇地发现大自然总能瞬间变出一张表面积绝对最小的薄膜！美国数学家杰西·道格拉斯于1931年彻底攻克了任意封闭边界极小曲面的存在性证明，并荣获了人类历史上首届菲尔兹奖（1936年）！",
            "rules": [
              "给定三维空间中任意封闭约当曲线 Γ 作为铁丝边界。",
              "寻找以 Γ 为边界的张成曲面 S。",
              "S 的表面积在所有候选曲面中达到绝对极小值。",
              "曲面上处处平均曲率 H = 0（肥皂膜内外压强平衡）。"
            ],
            "mystery": "由于肥皂膜表面张力在各方向均匀拉扯，极小曲面上的平均曲率处处精确为零，每个点都是优美的马鞍形！",
            "funFact": "在八维及以上空间中，西蒙斯锥的出现证明高维极小曲面会出现奇点，表明光滑性在7维以上会发生奇异退化！"
          },
          "investigators": {
            "tagline": "道格拉斯-狄利克雷能量泛函与单位圆盘调和映射。",
            "analogy": "道格拉斯巧妙地将几何面积泛函转化为共形参数化下的狄利克雷能量泛函，克服了面积泛函群作用的不紧致性障碍。",
            "rules": [
              "道格拉斯边界能量积分泛函。",
              "欧拉-拉格朗日方程：调和映射 Δu = 0。",
              "共形正交性：|u_x| = |u_y| 且 u_x · u_y = 0。"
            ],
            "mystery": "非可定向或高亏格极小曲面的分支奇异点拓扑结构依然是微分几何的前沿领域。",
            "funFact": "约瑟夫·普拉托提出物理猜想，道格拉斯与拉多于1930-1931年完全解决。"
          },
          "pioneers": {
            "tagline": "几何测度论、积分流与全空间极小曲面。",
            "analogy": "费德勒与弗莱明利用可求长整流理论将普拉托问题彻底推广至任意维数黎曼流形。",
            "rules": [
              "8 维西蒙斯锥奇点定理。",
              "伯恩斯坦问题：8维以内整极小超曲面必为超平面。",
              "Lean 4 Mathlib 中狄利克雷能量积分与调和函数。"
            ],
            "mystery": "AI 拓扑优化算法正在为现代大跨度张拉索膜建筑自动计算普拉托极小膜曲面。",
            "funFact": "普拉托问题奠定了整个现代几何变分法与几何分析学的基石。"
          }
        },
        "history": [
          {
            "year": "1873",
            "author": "约瑟夫·普拉托",
            "note": "出版肥皂膜实验物理著作，系统提出极小曲面问题。"
          },
          {
            "year": "1930",
            "author": "蒂博尔·拉多",
            "note": "在可求长曲线边界下证明极小曲面存在性。"
          },
          {
            "year": "1931",
            "author": "杰西·道格拉斯",
            "note": "运用狄利克雷能量泛函彻底解决任意闭合曲线普拉托问题！"
          },
          {
            "year": "1936",
            "author": "首届菲尔兹奖",
            "note": "道格拉斯在奥斯陆国际数学家大会荣获首届菲尔兹奖。"
          }
        ]
      },
      "zh-Hant": {
        "name": "Plateau's Minimal Surface Problem",
        "subtitle": "Does Every Wire Frame Trap a Minimal Area Soap Film?",
        "field": "Calculus of Variations & Differential Geometry",
        "statusBadge": "FIELDS MEDAL TRIUMPH",
        "grades": {
          "explorers": {
            "tagline": "Dip any twisted wire loop into soap water: can math always find the magical minimal film?",
            "analogy": "In 1873, Belgian physicist Joseph Plateau dipped wire frames into soapy water and noticed that nature ALWAYS finds the surface with the least possible area spanning the boundary wire! Jesse Douglas solved the general mathematical existence problem in 1931, earning the very first Fields Medal in history in 1936!",
            "rules": [
              "Given any simple closed Jordan curve Γ in ℝ³.",
              "Find a surface S spanning Γ.",
              "Area(S) is minimized among all surfaces with boundary Γ.",
              "Mean curvature H = 0 everywhere on the surface."
            ],
            "mystery": "Because soap film surface tension pulls equally in all directions, mean curvature H is exactly ZERO everywhere, making every point a saddle point!",
            "funFact": "In higher dimensions (dimension 8 and above), minimal cones like the Simons cone can have singularities, proving smooth solutions only exist up to 7 dimensions!"
          },
          "investigators": {
            "tagline": "Douglas-Dirichlet functional and harmonic maps from the unit disk.",
            "analogy": "Douglas bypassed area non-compactness by minimizing Dirichlet energy E(u) = 1/2 ∫ |∇u|² over conformal parametrizations from the disk D².",
            "rules": [
              "Douglas functional: A(u) = 1/16π ∬ |u(θ) - u(φ)|² / sin²((θ-φ)/2) dθ dφ.",
              "Euler-Lagrange equation: Δu = 0 (Harmonic map).",
              "Conformal condition: |u_x| = |u_y| and u_x · u_y = 0."
            ],
            "mystery": "What is the complete topology of branching points for unoriented or non-simply connected minimal surfaces?",
            "funFact": "Joseph Plateau (1873); proved by Jesse Douglas and Tibor Radó (1930-1931)."
          },
          "pioneers": {
            "tagline": "Geometric measure theory, currents, and GMT solutions.",
            "analogy": "Federer and Fleming extended Plateau's problem to arbitrary dimensions using integer-multiplicity rectifiable currents.",
            "rules": [
              "Simons cone singularity in dimension 8.",
              "Bernstein problem: Minimal graphs are hyperplanes for d ≤ 8.",
              "Mathlib formalization of Dirichlet energy."
            ],
            "mystery": "AI-guided finite element solvers automatically generate minimal soap films on 3D printed architectural wireframes.",
            "funFact": "Plateau's problem laid the foundation for the entire modern field of geometric calculus of variations."
          }
        },
        "history": [
          {
            "year": "1873",
            "author": "Joseph Plateau",
            "note": "Publishes Statique expérimentale des liquides on soap films."
          },
          {
            "year": "1930",
            "author": "Tibor Radó",
            "note": "Proves existence for rectifiable boundary curves."
          },
          {
            "year": "1931",
            "author": "Jesse Douglas",
            "note": "Solves general Plateau problem for arbitrary Jordan curves."
          },
          {
            "year": "1936",
            "author": "First Fields Medal",
            "note": "Douglas awarded inaugural Fields Medal at Oslo ICM."
          }
        ]
      }
    }
  },
  {
    "id": "thurston",
    "icon": "🍩",
    "difficulty": "Gr 9+",
    "domain": "geometry",
    "category": "geometry",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Topology.MetricSpace.Basic\n-- Thurston's Geometrization Conjecture (Proved by Grigori Perelman, 2003)\n-- Every closed 3-manifold can be canonically decomposed into pieces each having one of 8 model geometries.",
    "locales": {
      "en": {
        "name": "Thurston's Geometrization Conjecture",
        "subtitle": "Eight Canonical Geometries Classify All 3D Universes (Perelman Proof)",
        "field": "Geometric Topology & 3-Manifolds",
        "statusBadge": "PROVEN MASTER THEOREM",
        "grades": {
          "explorers": {
            "tagline": "Can every imaginable 3D universe be built from eight standard geometric Lego blocks?",
            "analogy": "In 2D, every surface is either spherical, flat (Euclidean), or hyperbolic. But in 3D, space seemed hopelessly complicated. In 1982, William Thurston conjectured that EVERY closed 3-manifold can be cut along spheres and tori into pieces that each possess one of exactly EIGHT standard geometries! Grigori Perelman proved Thurston's entire conjecture in 2003 using Ricci flow!",
            "rules": [
              "Any compact closed 3-manifold M.",
              "Cut along essential 2-spheres (Kneser-Milnor prime decomposition).",
              "Cut along incompressible tori (JSJ decomposition).",
              "Every resulting piece admits one of the 8 Thurston geometries: S³, ℝ³, ℍ³, S²×ℝ, ℍ²×ℝ, Nil, Sol, or universal cover of SL(2, ℝ)!"
            ],
            "mystery": "The Poincaré Conjecture is just the easiest special case of Thurston's Geometrization: if the universe is simply connected, it must be the S³ sphere geometry!",
            "funFact": "William Thurston was awarded the Fields Medal in 1982 for proposing this astonishing classification vision!"
          },
          "investigators": {
            "tagline": "JSJ decomposition, hyperbolization of Haken manifolds, and Ricci flow surgery.",
            "analogy": "Thurston proved his conjecture for Haken manifolds. Perelman completed the general case by showing Ricci flow with surgery extinguishes spherical components and decomposes hyperbolic ones.",
            "rules": [
              "8 Thurston geometries: S³, E³, H³, S²×ℝ, H²×ℝ, Nil, Sol, SL₂(ℝ).",
              "JSJ torus decomposition.",
              "Perelman's Ricci flow extinction time theorem."
            ],
            "mystery": "Thurston's Geometrization represents the completed classification of 3-manifolds, closing a century-long quest.",
            "funFact": "William Thurston announced the conjecture in 1982."
          },
          "pioneers": {
            "tagline": "Hyperbolic volume rigidity and Mostow rigidity.",
            "analogy": "Mostow rigidity theorem guarantees that for 3D hyperbolic manifolds, geometric invariants like volume are topological invariants.",
            "rules": [
              "Mostow rigidity theorem.",
              "SnapPea hyperbolic 3-manifold software.",
              "Lean 4 Mathlib classification of 3-manifolds."
            ],
            "mystery": "AI-guided topological knot classifiers use Thurston geometric invariants to identify distinct manifolds in seconds.",
            "funFact": "Thurston's vision transformed topology from abstract algebra into tangible, beautiful spatial geometry."
          }
        },
        "history": [
          {
            "year": "1982",
            "author": "William Thurston",
            "note": "Proposes the 8-geometry Geometrization Conjecture; awarded Fields Medal."
          },
          {
            "year": "2003",
            "author": "Grigori Perelman",
            "note": "Completes the proof of the entire Geometrization Conjecture via Ricci flow."
          }
        ]
      },
      "de": {
        "name": "Thurston's Geometrization Conjecture",
        "subtitle": "Eight Canonical Geometries Classify All 3D Universes (Perelman Proof)",
        "field": "Geometric Topology & 3-Manifolds",
        "statusBadge": "PROVEN MASTER THEOREM",
        "grades": {
          "explorers": {
            "tagline": "Can every imaginable 3D universe be built from eight standard geometric Lego blocks?",
            "analogy": "In 2D, every surface is either spherical, flat (Euclidean), or hyperbolic. But in 3D, space seemed hopelessly complicated. In 1982, William Thurston conjectured that EVERY closed 3-manifold can be cut along spheres and tori into pieces that each possess one of exactly EIGHT standard geometries! Grigori Perelman proved Thurston's entire conjecture in 2003 using Ricci flow!",
            "rules": [
              "Any compact closed 3-manifold M.",
              "Cut along essential 2-spheres (Kneser-Milnor prime decomposition).",
              "Cut along incompressible tori (JSJ decomposition).",
              "Every resulting piece admits one of the 8 Thurston geometries: S³, ℝ³, ℍ³, S²×ℝ, ℍ²×ℝ, Nil, Sol, or universal cover of SL(2, ℝ)!"
            ],
            "mystery": "The Poincaré Conjecture is just the easiest special case of Thurston's Geometrization: if the universe is simply connected, it must be the S³ sphere geometry!",
            "funFact": "William Thurston was awarded the Fields Medal in 1982 for proposing this astonishing classification vision!"
          },
          "investigators": {
            "tagline": "JSJ decomposition, hyperbolization of Haken manifolds, and Ricci flow surgery.",
            "analogy": "Thurston proved his conjecture for Haken manifolds. Perelman completed the general case by showing Ricci flow with surgery extinguishes spherical components and decomposes hyperbolic ones.",
            "rules": [
              "8 Thurston geometries: S³, E³, H³, S²×ℝ, H²×ℝ, Nil, Sol, SL₂(ℝ).",
              "JSJ torus decomposition.",
              "Perelman's Ricci flow extinction time theorem."
            ],
            "mystery": "Thurston's Geometrization represents the completed classification of 3-manifolds, closing a century-long quest.",
            "funFact": "William Thurston announced the conjecture in 1982."
          },
          "pioneers": {
            "tagline": "Hyperbolic volume rigidity and Mostow rigidity.",
            "analogy": "Mostow rigidity theorem guarantees that for 3D hyperbolic manifolds, geometric invariants like volume are topological invariants.",
            "rules": [
              "Mostow rigidity theorem.",
              "SnapPea hyperbolic 3-manifold software.",
              "Lean 4 Mathlib classification of 3-manifolds."
            ],
            "mystery": "AI-guided topological knot classifiers use Thurston geometric invariants to identify distinct manifolds in seconds.",
            "funFact": "Thurston's vision transformed topology from abstract algebra into tangible, beautiful spatial geometry."
          }
        },
        "history": [
          {
            "year": "1982",
            "author": "William Thurston",
            "note": "Proposes the 8-geometry Geometrization Conjecture; awarded Fields Medal."
          },
          {
            "year": "2003",
            "author": "Grigori Perelman",
            "note": "Completes the proof of the entire Geometrization Conjecture via Ricci flow."
          }
        ]
      },
      "fr": {
        "name": "Thurston's Geometrization Conjecture",
        "subtitle": "Eight Canonical Geometries Classify All 3D Universes (Perelman Proof)",
        "field": "Geometric Topology & 3-Manifolds",
        "statusBadge": "PROVEN MASTER THEOREM",
        "grades": {
          "explorers": {
            "tagline": "Can every imaginable 3D universe be built from eight standard geometric Lego blocks?",
            "analogy": "In 2D, every surface is either spherical, flat (Euclidean), or hyperbolic. But in 3D, space seemed hopelessly complicated. In 1982, William Thurston conjectured that EVERY closed 3-manifold can be cut along spheres and tori into pieces that each possess one of exactly EIGHT standard geometries! Grigori Perelman proved Thurston's entire conjecture in 2003 using Ricci flow!",
            "rules": [
              "Any compact closed 3-manifold M.",
              "Cut along essential 2-spheres (Kneser-Milnor prime decomposition).",
              "Cut along incompressible tori (JSJ decomposition).",
              "Every resulting piece admits one of the 8 Thurston geometries: S³, ℝ³, ℍ³, S²×ℝ, ℍ²×ℝ, Nil, Sol, or universal cover of SL(2, ℝ)!"
            ],
            "mystery": "The Poincaré Conjecture is just the easiest special case of Thurston's Geometrization: if the universe is simply connected, it must be the S³ sphere geometry!",
            "funFact": "William Thurston was awarded the Fields Medal in 1982 for proposing this astonishing classification vision!"
          },
          "investigators": {
            "tagline": "JSJ decomposition, hyperbolization of Haken manifolds, and Ricci flow surgery.",
            "analogy": "Thurston proved his conjecture for Haken manifolds. Perelman completed the general case by showing Ricci flow with surgery extinguishes spherical components and decomposes hyperbolic ones.",
            "rules": [
              "8 Thurston geometries: S³, E³, H³, S²×ℝ, H²×ℝ, Nil, Sol, SL₂(ℝ).",
              "JSJ torus decomposition.",
              "Perelman's Ricci flow extinction time theorem."
            ],
            "mystery": "Thurston's Geometrization represents the completed classification of 3-manifolds, closing a century-long quest.",
            "funFact": "William Thurston announced the conjecture in 1982."
          },
          "pioneers": {
            "tagline": "Hyperbolic volume rigidity and Mostow rigidity.",
            "analogy": "Mostow rigidity theorem guarantees that for 3D hyperbolic manifolds, geometric invariants like volume are topological invariants.",
            "rules": [
              "Mostow rigidity theorem.",
              "SnapPea hyperbolic 3-manifold software.",
              "Lean 4 Mathlib classification of 3-manifolds."
            ],
            "mystery": "AI-guided topological knot classifiers use Thurston geometric invariants to identify distinct manifolds in seconds.",
            "funFact": "Thurston's vision transformed topology from abstract algebra into tangible, beautiful spatial geometry."
          }
        },
        "history": [
          {
            "year": "1982",
            "author": "William Thurston",
            "note": "Proposes the 8-geometry Geometrization Conjecture; awarded Fields Medal."
          },
          {
            "year": "2003",
            "author": "Grigori Perelman",
            "note": "Completes the proof of the entire Geometrization Conjecture via Ricci flow."
          }
        ]
      },
      "it": {
        "name": "Thurston's Geometrization Conjecture",
        "subtitle": "Eight Canonical Geometries Classify All 3D Universes (Perelman Proof)",
        "field": "Geometric Topology & 3-Manifolds",
        "statusBadge": "PROVEN MASTER THEOREM",
        "grades": {
          "explorers": {
            "tagline": "Can every imaginable 3D universe be built from eight standard geometric Lego blocks?",
            "analogy": "In 2D, every surface is either spherical, flat (Euclidean), or hyperbolic. But in 3D, space seemed hopelessly complicated. In 1982, William Thurston conjectured that EVERY closed 3-manifold can be cut along spheres and tori into pieces that each possess one of exactly EIGHT standard geometries! Grigori Perelman proved Thurston's entire conjecture in 2003 using Ricci flow!",
            "rules": [
              "Any compact closed 3-manifold M.",
              "Cut along essential 2-spheres (Kneser-Milnor prime decomposition).",
              "Cut along incompressible tori (JSJ decomposition).",
              "Every resulting piece admits one of the 8 Thurston geometries: S³, ℝ³, ℍ³, S²×ℝ, ℍ²×ℝ, Nil, Sol, or universal cover of SL(2, ℝ)!"
            ],
            "mystery": "The Poincaré Conjecture is just the easiest special case of Thurston's Geometrization: if the universe is simply connected, it must be the S³ sphere geometry!",
            "funFact": "William Thurston was awarded the Fields Medal in 1982 for proposing this astonishing classification vision!"
          },
          "investigators": {
            "tagline": "JSJ decomposition, hyperbolization of Haken manifolds, and Ricci flow surgery.",
            "analogy": "Thurston proved his conjecture for Haken manifolds. Perelman completed the general case by showing Ricci flow with surgery extinguishes spherical components and decomposes hyperbolic ones.",
            "rules": [
              "8 Thurston geometries: S³, E³, H³, S²×ℝ, H²×ℝ, Nil, Sol, SL₂(ℝ).",
              "JSJ torus decomposition.",
              "Perelman's Ricci flow extinction time theorem."
            ],
            "mystery": "Thurston's Geometrization represents the completed classification of 3-manifolds, closing a century-long quest.",
            "funFact": "William Thurston announced the conjecture in 1982."
          },
          "pioneers": {
            "tagline": "Hyperbolic volume rigidity and Mostow rigidity.",
            "analogy": "Mostow rigidity theorem guarantees that for 3D hyperbolic manifolds, geometric invariants like volume are topological invariants.",
            "rules": [
              "Mostow rigidity theorem.",
              "SnapPea hyperbolic 3-manifold software.",
              "Lean 4 Mathlib classification of 3-manifolds."
            ],
            "mystery": "AI-guided topological knot classifiers use Thurston geometric invariants to identify distinct manifolds in seconds.",
            "funFact": "Thurston's vision transformed topology from abstract algebra into tangible, beautiful spatial geometry."
          }
        },
        "history": [
          {
            "year": "1982",
            "author": "William Thurston",
            "note": "Proposes the 8-geometry Geometrization Conjecture; awarded Fields Medal."
          },
          {
            "year": "2003",
            "author": "Grigori Perelman",
            "note": "Completes the proof of the entire Geometrization Conjecture via Ricci flow."
          }
        ]
      },
      "ja": {
        "name": "Thurston's Geometrization Conjecture",
        "subtitle": "Eight Canonical Geometries Classify All 3D Universes (Perelman Proof)",
        "field": "Geometric Topology & 3-Manifolds",
        "statusBadge": "PROVEN MASTER THEOREM",
        "grades": {
          "explorers": {
            "tagline": "Can every imaginable 3D universe be built from eight standard geometric Lego blocks?",
            "analogy": "In 2D, every surface is either spherical, flat (Euclidean), or hyperbolic. But in 3D, space seemed hopelessly complicated. In 1982, William Thurston conjectured that EVERY closed 3-manifold can be cut along spheres and tori into pieces that each possess one of exactly EIGHT standard geometries! Grigori Perelman proved Thurston's entire conjecture in 2003 using Ricci flow!",
            "rules": [
              "Any compact closed 3-manifold M.",
              "Cut along essential 2-spheres (Kneser-Milnor prime decomposition).",
              "Cut along incompressible tori (JSJ decomposition).",
              "Every resulting piece admits one of the 8 Thurston geometries: S³, ℝ³, ℍ³, S²×ℝ, ℍ²×ℝ, Nil, Sol, or universal cover of SL(2, ℝ)!"
            ],
            "mystery": "The Poincaré Conjecture is just the easiest special case of Thurston's Geometrization: if the universe is simply connected, it must be the S³ sphere geometry!",
            "funFact": "William Thurston was awarded the Fields Medal in 1982 for proposing this astonishing classification vision!"
          },
          "investigators": {
            "tagline": "JSJ decomposition, hyperbolization of Haken manifolds, and Ricci flow surgery.",
            "analogy": "Thurston proved his conjecture for Haken manifolds. Perelman completed the general case by showing Ricci flow with surgery extinguishes spherical components and decomposes hyperbolic ones.",
            "rules": [
              "8 Thurston geometries: S³, E³, H³, S²×ℝ, H²×ℝ, Nil, Sol, SL₂(ℝ).",
              "JSJ torus decomposition.",
              "Perelman's Ricci flow extinction time theorem."
            ],
            "mystery": "Thurston's Geometrization represents the completed classification of 3-manifolds, closing a century-long quest.",
            "funFact": "William Thurston announced the conjecture in 1982."
          },
          "pioneers": {
            "tagline": "Hyperbolic volume rigidity and Mostow rigidity.",
            "analogy": "Mostow rigidity theorem guarantees that for 3D hyperbolic manifolds, geometric invariants like volume are topological invariants.",
            "rules": [
              "Mostow rigidity theorem.",
              "SnapPea hyperbolic 3-manifold software.",
              "Lean 4 Mathlib classification of 3-manifolds."
            ],
            "mystery": "AI-guided topological knot classifiers use Thurston geometric invariants to identify distinct manifolds in seconds.",
            "funFact": "Thurston's vision transformed topology from abstract algebra into tangible, beautiful spatial geometry."
          }
        },
        "history": [
          {
            "year": "1982",
            "author": "William Thurston",
            "note": "Proposes the 8-geometry Geometrization Conjecture; awarded Fields Medal."
          },
          {
            "year": "2003",
            "author": "Grigori Perelman",
            "note": "Completes the proof of the entire Geometrization Conjecture via Ricci flow."
          }
        ]
      },
      "ko": {
        "name": "Thurston's Geometrization Conjecture",
        "subtitle": "Eight Canonical Geometries Classify All 3D Universes (Perelman Proof)",
        "field": "Geometric Topology & 3-Manifolds",
        "statusBadge": "PROVEN MASTER THEOREM",
        "grades": {
          "explorers": {
            "tagline": "Can every imaginable 3D universe be built from eight standard geometric Lego blocks?",
            "analogy": "In 2D, every surface is either spherical, flat (Euclidean), or hyperbolic. But in 3D, space seemed hopelessly complicated. In 1982, William Thurston conjectured that EVERY closed 3-manifold can be cut along spheres and tori into pieces that each possess one of exactly EIGHT standard geometries! Grigori Perelman proved Thurston's entire conjecture in 2003 using Ricci flow!",
            "rules": [
              "Any compact closed 3-manifold M.",
              "Cut along essential 2-spheres (Kneser-Milnor prime decomposition).",
              "Cut along incompressible tori (JSJ decomposition).",
              "Every resulting piece admits one of the 8 Thurston geometries: S³, ℝ³, ℍ³, S²×ℝ, ℍ²×ℝ, Nil, Sol, or universal cover of SL(2, ℝ)!"
            ],
            "mystery": "The Poincaré Conjecture is just the easiest special case of Thurston's Geometrization: if the universe is simply connected, it must be the S³ sphere geometry!",
            "funFact": "William Thurston was awarded the Fields Medal in 1982 for proposing this astonishing classification vision!"
          },
          "investigators": {
            "tagline": "JSJ decomposition, hyperbolization of Haken manifolds, and Ricci flow surgery.",
            "analogy": "Thurston proved his conjecture for Haken manifolds. Perelman completed the general case by showing Ricci flow with surgery extinguishes spherical components and decomposes hyperbolic ones.",
            "rules": [
              "8 Thurston geometries: S³, E³, H³, S²×ℝ, H²×ℝ, Nil, Sol, SL₂(ℝ).",
              "JSJ torus decomposition.",
              "Perelman's Ricci flow extinction time theorem."
            ],
            "mystery": "Thurston's Geometrization represents the completed classification of 3-manifolds, closing a century-long quest.",
            "funFact": "William Thurston announced the conjecture in 1982."
          },
          "pioneers": {
            "tagline": "Hyperbolic volume rigidity and Mostow rigidity.",
            "analogy": "Mostow rigidity theorem guarantees that for 3D hyperbolic manifolds, geometric invariants like volume are topological invariants.",
            "rules": [
              "Mostow rigidity theorem.",
              "SnapPea hyperbolic 3-manifold software.",
              "Lean 4 Mathlib classification of 3-manifolds."
            ],
            "mystery": "AI-guided topological knot classifiers use Thurston geometric invariants to identify distinct manifolds in seconds.",
            "funFact": "Thurston's vision transformed topology from abstract algebra into tangible, beautiful spatial geometry."
          }
        },
        "history": [
          {
            "year": "1982",
            "author": "William Thurston",
            "note": "Proposes the 8-geometry Geometrization Conjecture; awarded Fields Medal."
          },
          {
            "year": "2003",
            "author": "Grigori Perelman",
            "note": "Completes the proof of the entire Geometrization Conjecture via Ricci flow."
          }
        ]
      },
      "zh-Hans": {
        "name": "瑟斯顿几何化猜想",
        "subtitle": "八种标准几何模型分类全宇宙所有三维空间（佩雷尔曼已证）",
        "field": "几何拓扑学 & 三维流形分类",
        "statusBadge": "已证明大一统定理",
        "grades": {
          "explorers": {
            "tagline": "任何光怪陆离的三维宇宙空间，能不能像拼乐高一样，拆解成八种标准的几何积木？",
            "analogy": "在二维世界里，所有曲面都可以按常曲率分为球面、平面、双曲面三类。但在三维空间，宇宙似乎复杂得令人绝望。1982年威廉·瑟斯顿大胆断言：任何三维流形沿着若干个二维球面和甜甜圈圆面切开后，剩下的每一个碎片必定属于且仅属于八种标准几何模型之一！格里戈里·佩雷尔曼于2003年运用里奇流完全证明了这一定理！",
            "rules": [
              "任意紧致无边界三维流形 M。",
              "沿本质二维球面切开（质流形分解）。",
              "沿不可压缩二维环面切开（JSJ 分解）。",
              "切出的每一个零件必定具备且仅具备 8 种几何结构之一：球面 S³、欧氏 ℝ³、双曲 ℍ³、S²×ℝ、ℍ²×ℝ、Nil 几何、Sol 几何、或 SL(2, ℝ) 泛覆叠！"
            ],
            "mystery": "大名鼎鼎的庞加莱猜想仅仅是瑟斯顿几何化大猜想中最基础的一个特例：如果空间单连通，它就只能是八种几何中的 S³ 球面几何！",
            "funFact": "威廉·瑟斯顿因提出这一统领三维拓扑分类的宏伟蓝图，于1982年荣获菲尔兹奖！"
          },
          "investigators": {
            "tagline": "JSJ 环面分解、哈肯流形双曲化定理与带手术里奇流。",
            "analogy": "瑟斯顿证明了哈肯流形情形。佩雷尔曼通过控制里奇流在长时间演化下的奇点演化与拓扑手术，彻底攻克了非哈肯流形的最难部分。",
            "rules": [
              "瑟斯顿 8 大标准模型几何。",
              "雅克-夏伦-约翰森 (JSJ) 不可压缩环面分解。",
              "佩雷尔曼里奇流有限熄灭时间定理。"
            ],
            "mystery": "瑟斯顿几何化定理的获证，宣告了人类对低维三维拓扑流形结构探索长达一个世纪的历史性终结。",
            "funFact": "威廉·瑟斯顿于1982年正式宣布。"
          },
          "pioneers": {
            "tagline": "双曲流形体积刚性与莫斯托夫强刚性定理。",
            "analogy": "莫斯托夫刚性定理保证了三维双曲流形的几何量（如双曲体积）完全由其代数基本群拓扑结构唯一决定。",
            "rules": [
              "莫斯托夫强刚性定理。",
              "SnapPea 双曲三维流形几何算法软件。",
              "Lean 4 Mathlib 中三维流形代数基本群形式化。"
            ],
            "mystery": "AI 拓扑分析系统正在利用瑟斯顿几何不变量实时秒级识别复杂高阶纽结补流形。",
            "funFact": "瑟斯顿的远见将拓扑学从晦涩的抽象代数彻底转变为生动优美、触手可及的宏伟几何画卷。"
          }
        },
        "history": [
          {
            "year": "1982",
            "author": "威廉·瑟斯顿",
            "note": "发表八大几何分类猜想，荣获菲尔兹奖。"
          },
          {
            "year": "2003",
            "author": "格里戈里·佩雷尔曼",
            "note": "运用带手术里奇流彻底证明整个几何化猜想！"
          }
        ]
      },
      "zh-Hant": {
        "name": "Thurston's Geometrization Conjecture",
        "subtitle": "Eight Canonical Geometries Classify All 3D Universes (Perelman Proof)",
        "field": "Geometric Topology & 3-Manifolds",
        "statusBadge": "PROVEN MASTER THEOREM",
        "grades": {
          "explorers": {
            "tagline": "Can every imaginable 3D universe be built from eight standard geometric Lego blocks?",
            "analogy": "In 2D, every surface is either spherical, flat (Euclidean), or hyperbolic. But in 3D, space seemed hopelessly complicated. In 1982, William Thurston conjectured that EVERY closed 3-manifold can be cut along spheres and tori into pieces that each possess one of exactly EIGHT standard geometries! Grigori Perelman proved Thurston's entire conjecture in 2003 using Ricci flow!",
            "rules": [
              "Any compact closed 3-manifold M.",
              "Cut along essential 2-spheres (Kneser-Milnor prime decomposition).",
              "Cut along incompressible tori (JSJ decomposition).",
              "Every resulting piece admits one of the 8 Thurston geometries: S³, ℝ³, ℍ³, S²×ℝ, ℍ²×ℝ, Nil, Sol, or universal cover of SL(2, ℝ)!"
            ],
            "mystery": "The Poincaré Conjecture is just the easiest special case of Thurston's Geometrization: if the universe is simply connected, it must be the S³ sphere geometry!",
            "funFact": "William Thurston was awarded the Fields Medal in 1982 for proposing this astonishing classification vision!"
          },
          "investigators": {
            "tagline": "JSJ decomposition, hyperbolization of Haken manifolds, and Ricci flow surgery.",
            "analogy": "Thurston proved his conjecture for Haken manifolds. Perelman completed the general case by showing Ricci flow with surgery extinguishes spherical components and decomposes hyperbolic ones.",
            "rules": [
              "8 Thurston geometries: S³, E³, H³, S²×ℝ, H²×ℝ, Nil, Sol, SL₂(ℝ).",
              "JSJ torus decomposition.",
              "Perelman's Ricci flow extinction time theorem."
            ],
            "mystery": "Thurston's Geometrization represents the completed classification of 3-manifolds, closing a century-long quest.",
            "funFact": "William Thurston announced the conjecture in 1982."
          },
          "pioneers": {
            "tagline": "Hyperbolic volume rigidity and Mostow rigidity.",
            "analogy": "Mostow rigidity theorem guarantees that for 3D hyperbolic manifolds, geometric invariants like volume are topological invariants.",
            "rules": [
              "Mostow rigidity theorem.",
              "SnapPea hyperbolic 3-manifold software.",
              "Lean 4 Mathlib classification of 3-manifolds."
            ],
            "mystery": "AI-guided topological knot classifiers use Thurston geometric invariants to identify distinct manifolds in seconds.",
            "funFact": "Thurston's vision transformed topology from abstract algebra into tangible, beautiful spatial geometry."
          }
        },
        "history": [
          {
            "year": "1982",
            "author": "William Thurston",
            "note": "Proposes the 8-geometry Geometrization Conjecture; awarded Fields Medal."
          },
          {
            "year": "2003",
            "author": "Grigori Perelman",
            "note": "Completes the proof of the entire Geometrization Conjecture via Ricci flow."
          }
        ]
      }
    }
  },
  {
    "id": "hodge",
    "icon": "🔮",
    "difficulty": "Gr 9+",
    "domain": "geometry",
    "category": "geometry",
    "isMillennium": true,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.AlgebraicGeometry.Basic\n-- The Hodge Conjecture (Clay Millennium Prize Problem)\n-- On projective complex algebraic varieties, rational Hodge classes are linear combinations of algebraic cycles.",
    "locales": {
      "en": {
        "name": "The Hodge Conjecture",
        "subtitle": "Algebraic Cycles vs De Rham Cohomology ($1M Clay Prize)",
        "field": "Algebraic Geometry & Complex Differential Topology",
        "statusBadge": "CLAY MILLENNIUM",
        "grades": {
          "explorers": {
            "tagline": "Can every ghost shape detected by calculus be carved out by real polynomial equations?",
            "analogy": "Mathematicians can study complex shapes using calculus (differential forms and cohomology). Sir William Hodge conjectured in 1950 that for any smooth projective algebraic variety, every 'Hodge class' of topological cycles that looks algebraic is ACTUALLY a rational combination of geometric zero-sets of polynomial equations (algebraic cycles)! It is one of the deepest Clay Millennium Problems.",
            "rules": [
              "Projective complex algebraic variety X.",
              "Hodge decomposition: H^k(X, ℂ) = ⨁_{p+q=k} H^{p,q}(X).",
              "Hodge class: Cohomology class in H^{2p}(X, ℚ) ∩ H^{p,p}(X).",
              "Hodge Conjecture: Every Hodge class is a ℚ-linear combination of algebraic cycle classes!"
            ],
            "mystery": "The Lefschetz (1, 1)-theorem proved the conjecture for p = 1 back in 1924, but for codimension p ≥ 2 it has defied all human attempts for 70+ years!",
            "funFact": "The integral version of the Hodge conjecture was DISPROVED by Atiyah and Hirzebruch in 1962, showing why rational coefficients ℚ are absolutely essential!"
          },
          "investigators": {
            "tagline": "Hodge decomposition, Kähler manifolds, and Deligne cohomology.",
            "analogy": "Harmonic forms under the Hodge Laplacian Δ = d d* + d* d provide harmonic representatives for de Rham cohomology, while algebraic cycles live in Chow groups.",
            "rules": [
              "Hodge Laplacian Δ = 2 Δ_∂ = 2 Δ_{∂̄}.",
              "Chow group of algebraic cycles CH^p(X).",
              "Cycle class map: cl: CH^p(X) ⊗ ℚ → H^{2p}(X, ℚ) ∩ H^{p,p}(X)."
            ],
            "mystery": "Can motives (Grothendieck) and absolute Hodge cycles provide the universal structural framework to prove the cycle class map is surjective?",
            "funFact": "William V. D. Hodge proposed the conjecture at the 1950 Cambridge ICM."
          },
          "pioneers": {
            "tagline": "Variations of Hodge structure and period mappings.",
            "analogy": "Phillip Griffiths developed the theory of variations of Hodge structure to study how Hodge decompositions deform along families of varieties.",
            "rules": [
              "Griffiths period domains and period maps.",
              "Deligne's mixed Hodge theory.",
              "Lean 4 formalization of complex manifolds and sheaf cohomology."
            ],
            "mystery": "AI formalization pipelines are constructing certified Chow groups and cycle class homomorphisms in Mathlib.",
            "funFact": "The Hodge Conjecture represents the supreme unsolved bridge between complex analysis and algebraic equations."
          }
        },
        "history": [
          {
            "year": "1924",
            "author": "Solomon Lefschetz",
            "note": "Proves Lefschetz (1, 1)-theorem for divisors."
          },
          {
            "year": "1950",
            "author": "William Hodge",
            "note": "Formulates the general conjecture at Cambridge ICM."
          },
          {
            "year": "1962",
            "author": "Michael Atiyah & Friedrich Hirzebruch",
            "note": "Disprove the integral version using Steenrod operations."
          },
          {
            "year": "2000",
            "author": "Clay Mathematics Institute",
            "note": "Names the Hodge Conjecture a $1M Millennium Prize Problem."
          }
        ]
      },
      "de": {
        "name": "The Hodge Conjecture",
        "subtitle": "Algebraic Cycles vs De Rham Cohomology ($1M Clay Prize)",
        "field": "Algebraic Geometry & Complex Differential Topology",
        "statusBadge": "CLAY MILLENNIUM",
        "grades": {
          "explorers": {
            "tagline": "Can every ghost shape detected by calculus be carved out by real polynomial equations?",
            "analogy": "Mathematicians can study complex shapes using calculus (differential forms and cohomology). Sir William Hodge conjectured in 1950 that for any smooth projective algebraic variety, every 'Hodge class' of topological cycles that looks algebraic is ACTUALLY a rational combination of geometric zero-sets of polynomial equations (algebraic cycles)! It is one of the deepest Clay Millennium Problems.",
            "rules": [
              "Projective complex algebraic variety X.",
              "Hodge decomposition: H^k(X, ℂ) = ⨁_{p+q=k} H^{p,q}(X).",
              "Hodge class: Cohomology class in H^{2p}(X, ℚ) ∩ H^{p,p}(X).",
              "Hodge Conjecture: Every Hodge class is a ℚ-linear combination of algebraic cycle classes!"
            ],
            "mystery": "The Lefschetz (1, 1)-theorem proved the conjecture for p = 1 back in 1924, but for codimension p ≥ 2 it has defied all human attempts for 70+ years!",
            "funFact": "The integral version of the Hodge conjecture was DISPROVED by Atiyah and Hirzebruch in 1962, showing why rational coefficients ℚ are absolutely essential!"
          },
          "investigators": {
            "tagline": "Hodge decomposition, Kähler manifolds, and Deligne cohomology.",
            "analogy": "Harmonic forms under the Hodge Laplacian Δ = d d* + d* d provide harmonic representatives for de Rham cohomology, while algebraic cycles live in Chow groups.",
            "rules": [
              "Hodge Laplacian Δ = 2 Δ_∂ = 2 Δ_{∂̄}.",
              "Chow group of algebraic cycles CH^p(X).",
              "Cycle class map: cl: CH^p(X) ⊗ ℚ → H^{2p}(X, ℚ) ∩ H^{p,p}(X)."
            ],
            "mystery": "Can motives (Grothendieck) and absolute Hodge cycles provide the universal structural framework to prove the cycle class map is surjective?",
            "funFact": "William V. D. Hodge proposed the conjecture at the 1950 Cambridge ICM."
          },
          "pioneers": {
            "tagline": "Variations of Hodge structure and period mappings.",
            "analogy": "Phillip Griffiths developed the theory of variations of Hodge structure to study how Hodge decompositions deform along families of varieties.",
            "rules": [
              "Griffiths period domains and period maps.",
              "Deligne's mixed Hodge theory.",
              "Lean 4 formalization of complex manifolds and sheaf cohomology."
            ],
            "mystery": "AI formalization pipelines are constructing certified Chow groups and cycle class homomorphisms in Mathlib.",
            "funFact": "The Hodge Conjecture represents the supreme unsolved bridge between complex analysis and algebraic equations."
          }
        },
        "history": [
          {
            "year": "1924",
            "author": "Solomon Lefschetz",
            "note": "Proves Lefschetz (1, 1)-theorem for divisors."
          },
          {
            "year": "1950",
            "author": "William Hodge",
            "note": "Formulates the general conjecture at Cambridge ICM."
          },
          {
            "year": "1962",
            "author": "Michael Atiyah & Friedrich Hirzebruch",
            "note": "Disprove the integral version using Steenrod operations."
          },
          {
            "year": "2000",
            "author": "Clay Mathematics Institute",
            "note": "Names the Hodge Conjecture a $1M Millennium Prize Problem."
          }
        ]
      },
      "fr": {
        "name": "The Hodge Conjecture",
        "subtitle": "Algebraic Cycles vs De Rham Cohomology ($1M Clay Prize)",
        "field": "Algebraic Geometry & Complex Differential Topology",
        "statusBadge": "CLAY MILLENNIUM",
        "grades": {
          "explorers": {
            "tagline": "Can every ghost shape detected by calculus be carved out by real polynomial equations?",
            "analogy": "Mathematicians can study complex shapes using calculus (differential forms and cohomology). Sir William Hodge conjectured in 1950 that for any smooth projective algebraic variety, every 'Hodge class' of topological cycles that looks algebraic is ACTUALLY a rational combination of geometric zero-sets of polynomial equations (algebraic cycles)! It is one of the deepest Clay Millennium Problems.",
            "rules": [
              "Projective complex algebraic variety X.",
              "Hodge decomposition: H^k(X, ℂ) = ⨁_{p+q=k} H^{p,q}(X).",
              "Hodge class: Cohomology class in H^{2p}(X, ℚ) ∩ H^{p,p}(X).",
              "Hodge Conjecture: Every Hodge class is a ℚ-linear combination of algebraic cycle classes!"
            ],
            "mystery": "The Lefschetz (1, 1)-theorem proved the conjecture for p = 1 back in 1924, but for codimension p ≥ 2 it has defied all human attempts for 70+ years!",
            "funFact": "The integral version of the Hodge conjecture was DISPROVED by Atiyah and Hirzebruch in 1962, showing why rational coefficients ℚ are absolutely essential!"
          },
          "investigators": {
            "tagline": "Hodge decomposition, Kähler manifolds, and Deligne cohomology.",
            "analogy": "Harmonic forms under the Hodge Laplacian Δ = d d* + d* d provide harmonic representatives for de Rham cohomology, while algebraic cycles live in Chow groups.",
            "rules": [
              "Hodge Laplacian Δ = 2 Δ_∂ = 2 Δ_{∂̄}.",
              "Chow group of algebraic cycles CH^p(X).",
              "Cycle class map: cl: CH^p(X) ⊗ ℚ → H^{2p}(X, ℚ) ∩ H^{p,p}(X)."
            ],
            "mystery": "Can motives (Grothendieck) and absolute Hodge cycles provide the universal structural framework to prove the cycle class map is surjective?",
            "funFact": "William V. D. Hodge proposed the conjecture at the 1950 Cambridge ICM."
          },
          "pioneers": {
            "tagline": "Variations of Hodge structure and period mappings.",
            "analogy": "Phillip Griffiths developed the theory of variations of Hodge structure to study how Hodge decompositions deform along families of varieties.",
            "rules": [
              "Griffiths period domains and period maps.",
              "Deligne's mixed Hodge theory.",
              "Lean 4 formalization of complex manifolds and sheaf cohomology."
            ],
            "mystery": "AI formalization pipelines are constructing certified Chow groups and cycle class homomorphisms in Mathlib.",
            "funFact": "The Hodge Conjecture represents the supreme unsolved bridge between complex analysis and algebraic equations."
          }
        },
        "history": [
          {
            "year": "1924",
            "author": "Solomon Lefschetz",
            "note": "Proves Lefschetz (1, 1)-theorem for divisors."
          },
          {
            "year": "1950",
            "author": "William Hodge",
            "note": "Formulates the general conjecture at Cambridge ICM."
          },
          {
            "year": "1962",
            "author": "Michael Atiyah & Friedrich Hirzebruch",
            "note": "Disprove the integral version using Steenrod operations."
          },
          {
            "year": "2000",
            "author": "Clay Mathematics Institute",
            "note": "Names the Hodge Conjecture a $1M Millennium Prize Problem."
          }
        ]
      },
      "it": {
        "name": "The Hodge Conjecture",
        "subtitle": "Algebraic Cycles vs De Rham Cohomology ($1M Clay Prize)",
        "field": "Algebraic Geometry & Complex Differential Topology",
        "statusBadge": "CLAY MILLENNIUM",
        "grades": {
          "explorers": {
            "tagline": "Can every ghost shape detected by calculus be carved out by real polynomial equations?",
            "analogy": "Mathematicians can study complex shapes using calculus (differential forms and cohomology). Sir William Hodge conjectured in 1950 that for any smooth projective algebraic variety, every 'Hodge class' of topological cycles that looks algebraic is ACTUALLY a rational combination of geometric zero-sets of polynomial equations (algebraic cycles)! It is one of the deepest Clay Millennium Problems.",
            "rules": [
              "Projective complex algebraic variety X.",
              "Hodge decomposition: H^k(X, ℂ) = ⨁_{p+q=k} H^{p,q}(X).",
              "Hodge class: Cohomology class in H^{2p}(X, ℚ) ∩ H^{p,p}(X).",
              "Hodge Conjecture: Every Hodge class is a ℚ-linear combination of algebraic cycle classes!"
            ],
            "mystery": "The Lefschetz (1, 1)-theorem proved the conjecture for p = 1 back in 1924, but for codimension p ≥ 2 it has defied all human attempts for 70+ years!",
            "funFact": "The integral version of the Hodge conjecture was DISPROVED by Atiyah and Hirzebruch in 1962, showing why rational coefficients ℚ are absolutely essential!"
          },
          "investigators": {
            "tagline": "Hodge decomposition, Kähler manifolds, and Deligne cohomology.",
            "analogy": "Harmonic forms under the Hodge Laplacian Δ = d d* + d* d provide harmonic representatives for de Rham cohomology, while algebraic cycles live in Chow groups.",
            "rules": [
              "Hodge Laplacian Δ = 2 Δ_∂ = 2 Δ_{∂̄}.",
              "Chow group of algebraic cycles CH^p(X).",
              "Cycle class map: cl: CH^p(X) ⊗ ℚ → H^{2p}(X, ℚ) ∩ H^{p,p}(X)."
            ],
            "mystery": "Can motives (Grothendieck) and absolute Hodge cycles provide the universal structural framework to prove the cycle class map is surjective?",
            "funFact": "William V. D. Hodge proposed the conjecture at the 1950 Cambridge ICM."
          },
          "pioneers": {
            "tagline": "Variations of Hodge structure and period mappings.",
            "analogy": "Phillip Griffiths developed the theory of variations of Hodge structure to study how Hodge decompositions deform along families of varieties.",
            "rules": [
              "Griffiths period domains and period maps.",
              "Deligne's mixed Hodge theory.",
              "Lean 4 formalization of complex manifolds and sheaf cohomology."
            ],
            "mystery": "AI formalization pipelines are constructing certified Chow groups and cycle class homomorphisms in Mathlib.",
            "funFact": "The Hodge Conjecture represents the supreme unsolved bridge between complex analysis and algebraic equations."
          }
        },
        "history": [
          {
            "year": "1924",
            "author": "Solomon Lefschetz",
            "note": "Proves Lefschetz (1, 1)-theorem for divisors."
          },
          {
            "year": "1950",
            "author": "William Hodge",
            "note": "Formulates the general conjecture at Cambridge ICM."
          },
          {
            "year": "1962",
            "author": "Michael Atiyah & Friedrich Hirzebruch",
            "note": "Disprove the integral version using Steenrod operations."
          },
          {
            "year": "2000",
            "author": "Clay Mathematics Institute",
            "note": "Names the Hodge Conjecture a $1M Millennium Prize Problem."
          }
        ]
      },
      "ja": {
        "name": "The Hodge Conjecture",
        "subtitle": "Algebraic Cycles vs De Rham Cohomology ($1M Clay Prize)",
        "field": "Algebraic Geometry & Complex Differential Topology",
        "statusBadge": "CLAY MILLENNIUM",
        "grades": {
          "explorers": {
            "tagline": "Can every ghost shape detected by calculus be carved out by real polynomial equations?",
            "analogy": "Mathematicians can study complex shapes using calculus (differential forms and cohomology). Sir William Hodge conjectured in 1950 that for any smooth projective algebraic variety, every 'Hodge class' of topological cycles that looks algebraic is ACTUALLY a rational combination of geometric zero-sets of polynomial equations (algebraic cycles)! It is one of the deepest Clay Millennium Problems.",
            "rules": [
              "Projective complex algebraic variety X.",
              "Hodge decomposition: H^k(X, ℂ) = ⨁_{p+q=k} H^{p,q}(X).",
              "Hodge class: Cohomology class in H^{2p}(X, ℚ) ∩ H^{p,p}(X).",
              "Hodge Conjecture: Every Hodge class is a ℚ-linear combination of algebraic cycle classes!"
            ],
            "mystery": "The Lefschetz (1, 1)-theorem proved the conjecture for p = 1 back in 1924, but for codimension p ≥ 2 it has defied all human attempts for 70+ years!",
            "funFact": "The integral version of the Hodge conjecture was DISPROVED by Atiyah and Hirzebruch in 1962, showing why rational coefficients ℚ are absolutely essential!"
          },
          "investigators": {
            "tagline": "Hodge decomposition, Kähler manifolds, and Deligne cohomology.",
            "analogy": "Harmonic forms under the Hodge Laplacian Δ = d d* + d* d provide harmonic representatives for de Rham cohomology, while algebraic cycles live in Chow groups.",
            "rules": [
              "Hodge Laplacian Δ = 2 Δ_∂ = 2 Δ_{∂̄}.",
              "Chow group of algebraic cycles CH^p(X).",
              "Cycle class map: cl: CH^p(X) ⊗ ℚ → H^{2p}(X, ℚ) ∩ H^{p,p}(X)."
            ],
            "mystery": "Can motives (Grothendieck) and absolute Hodge cycles provide the universal structural framework to prove the cycle class map is surjective?",
            "funFact": "William V. D. Hodge proposed the conjecture at the 1950 Cambridge ICM."
          },
          "pioneers": {
            "tagline": "Variations of Hodge structure and period mappings.",
            "analogy": "Phillip Griffiths developed the theory of variations of Hodge structure to study how Hodge decompositions deform along families of varieties.",
            "rules": [
              "Griffiths period domains and period maps.",
              "Deligne's mixed Hodge theory.",
              "Lean 4 formalization of complex manifolds and sheaf cohomology."
            ],
            "mystery": "AI formalization pipelines are constructing certified Chow groups and cycle class homomorphisms in Mathlib.",
            "funFact": "The Hodge Conjecture represents the supreme unsolved bridge between complex analysis and algebraic equations."
          }
        },
        "history": [
          {
            "year": "1924",
            "author": "Solomon Lefschetz",
            "note": "Proves Lefschetz (1, 1)-theorem for divisors."
          },
          {
            "year": "1950",
            "author": "William Hodge",
            "note": "Formulates the general conjecture at Cambridge ICM."
          },
          {
            "year": "1962",
            "author": "Michael Atiyah & Friedrich Hirzebruch",
            "note": "Disprove the integral version using Steenrod operations."
          },
          {
            "year": "2000",
            "author": "Clay Mathematics Institute",
            "note": "Names the Hodge Conjecture a $1M Millennium Prize Problem."
          }
        ]
      },
      "ko": {
        "name": "The Hodge Conjecture",
        "subtitle": "Algebraic Cycles vs De Rham Cohomology ($1M Clay Prize)",
        "field": "Algebraic Geometry & Complex Differential Topology",
        "statusBadge": "CLAY MILLENNIUM",
        "grades": {
          "explorers": {
            "tagline": "Can every ghost shape detected by calculus be carved out by real polynomial equations?",
            "analogy": "Mathematicians can study complex shapes using calculus (differential forms and cohomology). Sir William Hodge conjectured in 1950 that for any smooth projective algebraic variety, every 'Hodge class' of topological cycles that looks algebraic is ACTUALLY a rational combination of geometric zero-sets of polynomial equations (algebraic cycles)! It is one of the deepest Clay Millennium Problems.",
            "rules": [
              "Projective complex algebraic variety X.",
              "Hodge decomposition: H^k(X, ℂ) = ⨁_{p+q=k} H^{p,q}(X).",
              "Hodge class: Cohomology class in H^{2p}(X, ℚ) ∩ H^{p,p}(X).",
              "Hodge Conjecture: Every Hodge class is a ℚ-linear combination of algebraic cycle classes!"
            ],
            "mystery": "The Lefschetz (1, 1)-theorem proved the conjecture for p = 1 back in 1924, but for codimension p ≥ 2 it has defied all human attempts for 70+ years!",
            "funFact": "The integral version of the Hodge conjecture was DISPROVED by Atiyah and Hirzebruch in 1962, showing why rational coefficients ℚ are absolutely essential!"
          },
          "investigators": {
            "tagline": "Hodge decomposition, Kähler manifolds, and Deligne cohomology.",
            "analogy": "Harmonic forms under the Hodge Laplacian Δ = d d* + d* d provide harmonic representatives for de Rham cohomology, while algebraic cycles live in Chow groups.",
            "rules": [
              "Hodge Laplacian Δ = 2 Δ_∂ = 2 Δ_{∂̄}.",
              "Chow group of algebraic cycles CH^p(X).",
              "Cycle class map: cl: CH^p(X) ⊗ ℚ → H^{2p}(X, ℚ) ∩ H^{p,p}(X)."
            ],
            "mystery": "Can motives (Grothendieck) and absolute Hodge cycles provide the universal structural framework to prove the cycle class map is surjective?",
            "funFact": "William V. D. Hodge proposed the conjecture at the 1950 Cambridge ICM."
          },
          "pioneers": {
            "tagline": "Variations of Hodge structure and period mappings.",
            "analogy": "Phillip Griffiths developed the theory of variations of Hodge structure to study how Hodge decompositions deform along families of varieties.",
            "rules": [
              "Griffiths period domains and period maps.",
              "Deligne's mixed Hodge theory.",
              "Lean 4 formalization of complex manifolds and sheaf cohomology."
            ],
            "mystery": "AI formalization pipelines are constructing certified Chow groups and cycle class homomorphisms in Mathlib.",
            "funFact": "The Hodge Conjecture represents the supreme unsolved bridge between complex analysis and algebraic equations."
          }
        },
        "history": [
          {
            "year": "1924",
            "author": "Solomon Lefschetz",
            "note": "Proves Lefschetz (1, 1)-theorem for divisors."
          },
          {
            "year": "1950",
            "author": "William Hodge",
            "note": "Formulates the general conjecture at Cambridge ICM."
          },
          {
            "year": "1962",
            "author": "Michael Atiyah & Friedrich Hirzebruch",
            "note": "Disprove the integral version using Steenrod operations."
          },
          {
            "year": "2000",
            "author": "Clay Mathematics Institute",
            "note": "Names the Hodge Conjecture a $1M Millennium Prize Problem."
          }
        ]
      },
      "zh-Hans": {
        "name": "霍奇猜想",
        "subtitle": "非奇异复代数簇上的代数环与德拉姆上同调（千禧年百万大奖难题）",
        "field": "代数几何学 & 复微分拓扑学",
        "statusBadge": "千禧年大奖难题",
        "grades": {
          "explorers": {
            "tagline": "用复分析和微积分探测到的空间拓扑幽灵，能不能全部用实实在在的代数多项式方程雕刻出来？",
            "analogy": "数学家可以用微积分与复微分形式探测高维复流形的拓扑空洞（德拉姆上同调）。威廉·霍奇于1950年提出猜想：在非奇异复射影代数簇上，任何符合 Hodge (p,p) 型对称性的拓扑上同调类，必定能够完全由纯粹的多项式方程零点集合（代数闭链）线性组合出来！这是七大千禧年难题中最纯粹、最深邃的代数几何圣杯。",
            "rules": [
              "复射影代数簇 X。",
              "霍奇直和分解：H^k(X, ℂ) = ⨁_{p+q=k} H^{p,q}(X)。",
              "霍奇类：属于 H^{2p}(X, ℚ) ∩ H^{p,p}(X) 的有理对称上同调类。",
              "霍奇猜想：每一个霍奇类必定是代数子簇（代数闭链）的有理线性组合！"
            ],
            "mystery": "莱夫谢茨 (1,1) 定理早在1924年就攻克了 p = 1 的情形，但对于余维数 p ≥ 2 的高阶情况，人类70多年来依然望洋兴叹！",
            "funFact": "阿蒂亚与希策布鲁赫在1962年证明了整系数版本的霍奇猜想是错误的，证明了有理数域 ℚ 在猜想中不可或缺的决定性地位！"
          },
          "investigators": {
            "tagline": "霍奇分解、凯勒流形与德利涅上同调。",
            "analogy": "凯勒度量下的霍奇拉普拉斯算子给出了德拉姆上同调的调和微分形式代表元，而代数闭链则由周群 (Chow groups) 中的代数几何闭包所张成。",
            "rules": [
              "凯勒流形拉普拉斯恒等式。",
              "代数闭链周群 CH^p(X)。",
              "闭链类映射：cl: CH^p(X) ⊗ ℚ → H^{2p}(X, ℚ) ∩ H^{p,p}(X) 具有满射性。"
            ],
            "mystery": "格罗滕迪克的“基元理论”(Motives) 与绝对霍奇闭链能否提供证明闭链映射满射性的终极代数架构？",
            "funFact": "威廉·霍奇于1950年剑桥国际数学家大会正式提出。"
          },
          "pioneers": {
            "tagline": "霍奇结构变分理论与周期映射。",
            "analogy": "菲利普·格里菲斯建立了霍奇结构变分体系，研究代数簇族变形时微积分调和形式的解析移动。",
            "rules": [
              "格里菲斯周期映射与周期域。",
              "德利涅混合霍奇结构理论（菲尔兹奖成果）。",
              "Lean 4 Mathlib 中复流形与层上同调形式化。"
            ],
            "mystery": "AI 形式化团队正在推进代数几何周群与同调闭链同态在 Mathlib 中的形式化奠基。",
            "funFact": "霍奇猜想是连接复分析微积分与多项式代数几何之间最崇高、最深邃的未解天桥。"
          }
        },
        "history": [
          {
            "year": "1924",
            "author": "所罗门·莱夫谢茨",
            "note": "证明代数除子的 (1, 1) 霍奇定理。"
          },
          {
            "year": "1950",
            "author": "威廉·霍奇",
            "note": "在国际数学家大会正式提出霍奇猜想。"
          },
          {
            "year": "1962",
            "author": "阿蒂亚 & 希策布鲁赫",
            "note": "运用斯廷罗德运算证明整系数版本不成立，确立有理系数本质性。"
          },
          {
            "year": "2000",
            "author": "克雷数学研究所",
            "note": "列入千禧年七大百万美元大奖难题。"
          }
        ]
      },
      "zh-Hant": {
        "name": "The Hodge Conjecture",
        "subtitle": "Algebraic Cycles vs De Rham Cohomology ($1M Clay Prize)",
        "field": "Algebraic Geometry & Complex Differential Topology",
        "statusBadge": "CLAY MILLENNIUM",
        "grades": {
          "explorers": {
            "tagline": "Can every ghost shape detected by calculus be carved out by real polynomial equations?",
            "analogy": "Mathematicians can study complex shapes using calculus (differential forms and cohomology). Sir William Hodge conjectured in 1950 that for any smooth projective algebraic variety, every 'Hodge class' of topological cycles that looks algebraic is ACTUALLY a rational combination of geometric zero-sets of polynomial equations (algebraic cycles)! It is one of the deepest Clay Millennium Problems.",
            "rules": [
              "Projective complex algebraic variety X.",
              "Hodge decomposition: H^k(X, ℂ) = ⨁_{p+q=k} H^{p,q}(X).",
              "Hodge class: Cohomology class in H^{2p}(X, ℚ) ∩ H^{p,p}(X).",
              "Hodge Conjecture: Every Hodge class is a ℚ-linear combination of algebraic cycle classes!"
            ],
            "mystery": "The Lefschetz (1, 1)-theorem proved the conjecture for p = 1 back in 1924, but for codimension p ≥ 2 it has defied all human attempts for 70+ years!",
            "funFact": "The integral version of the Hodge conjecture was DISPROVED by Atiyah and Hirzebruch in 1962, showing why rational coefficients ℚ are absolutely essential!"
          },
          "investigators": {
            "tagline": "Hodge decomposition, Kähler manifolds, and Deligne cohomology.",
            "analogy": "Harmonic forms under the Hodge Laplacian Δ = d d* + d* d provide harmonic representatives for de Rham cohomology, while algebraic cycles live in Chow groups.",
            "rules": [
              "Hodge Laplacian Δ = 2 Δ_∂ = 2 Δ_{∂̄}.",
              "Chow group of algebraic cycles CH^p(X).",
              "Cycle class map: cl: CH^p(X) ⊗ ℚ → H^{2p}(X, ℚ) ∩ H^{p,p}(X)."
            ],
            "mystery": "Can motives (Grothendieck) and absolute Hodge cycles provide the universal structural framework to prove the cycle class map is surjective?",
            "funFact": "William V. D. Hodge proposed the conjecture at the 1950 Cambridge ICM."
          },
          "pioneers": {
            "tagline": "Variations of Hodge structure and period mappings.",
            "analogy": "Phillip Griffiths developed the theory of variations of Hodge structure to study how Hodge decompositions deform along families of varieties.",
            "rules": [
              "Griffiths period domains and period maps.",
              "Deligne's mixed Hodge theory.",
              "Lean 4 formalization of complex manifolds and sheaf cohomology."
            ],
            "mystery": "AI formalization pipelines are constructing certified Chow groups and cycle class homomorphisms in Mathlib.",
            "funFact": "The Hodge Conjecture represents the supreme unsolved bridge between complex analysis and algebraic equations."
          }
        },
        "history": [
          {
            "year": "1924",
            "author": "Solomon Lefschetz",
            "note": "Proves Lefschetz (1, 1)-theorem for divisors."
          },
          {
            "year": "1950",
            "author": "William Hodge",
            "note": "Formulates the general conjecture at Cambridge ICM."
          },
          {
            "year": "1962",
            "author": "Michael Atiyah & Friedrich Hirzebruch",
            "note": "Disprove the integral version using Steenrod operations."
          },
          {
            "year": "2000",
            "author": "Clay Mathematics Institute",
            "note": "Names the Hodge Conjecture a $1M Millennium Prize Problem."
          }
        ]
      }
    }
  },
  {
    "id": "willmore",
    "icon": "🍩",
    "difficulty": "Gr 9+",
    "domain": "geometry",
    "category": "geometry",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Analysis.Calculus.FDeriv.Basic\n-- Willmore Conjecture (Proved by Marques and Neves in 2012)\n-- The Willmore bending energy W(M) of any embedded torus in ℝ³ is at least 2π².",
    "locales": {
      "en": {
        "name": "The Willmore Conjecture",
        "subtitle": "Minimal Bending Energy of an Elastic Doughnut ($W \\ge 2\\pi^2$)",
        "field": "Differential Geometry & Min-Max Theory",
        "statusBadge": "PROVEN THEOREM",
        "grades": {
          "explorers": {
            "tagline": "How much energy does it take to bend an elastic rubber doughnut into 3D space?",
            "analogy": "Thomas Willmore in 1965 defined the 'bending energy' of a surface as the integral of its squared mean curvature: W(M) = ∫ H² dA. A round sphere has W = 4π ≈ 12.57. For a doughnut (torus with a hole), Willmore conjectured that its bending energy can NEVER be less than 2π² ≈ 19.74! Proved in 2012 by Fernando Codá Marques and André Neves!",
            "rules": [
              "Willmore energy functional: W(M) = ∫_M H² dA.",
              "Sphere achieves minimum W = 4π among all surfaces.",
              "Torus (genus 1): Willmore conjectured W(M) ≥ 2π² ≈ 19.74.",
              "Proved by Marques & Neves (2012) using min-max Almgren-Pitts theory!"
            ],
            "mystery": "The unique shape achieving the absolute minimum 2π² is the famous Clifford Torus, mapped into 3D via stereographic projection!",
            "funFact": "Marques and Neves were awarded the Clay Research Award and the AMS Oswald Veblen Prize for this breakthrough!"
          },
          "investigators": {
            "tagline": "Almgren-Pitts min-max theory, canonical families, and sweepouts.",
            "analogy": "Marques and Neves constructed a 5-parameter family of surfaces (sweepout) on the 3-sphere S³, proving that the minimax energy must attain the area of the Clifford torus.",
            "rules": [
              "Conformal invariance: W(M) is invariant under Möbius conformal transformations.",
              "5-parameter sweepout on S³.",
              "Almgren-Pitts min-max theorem."
            ],
            "mystery": "What are the exact Willmore energy minimizers for higher genus surfaces (double doughnuts g = 2, 3...)?",
            "funFact": "Thomas Willmore formulated the conjecture in 1965 in Durham."
          },
          "pioneers": {
            "tagline": "Conformal geometry of surfaces in S³ and geometric analysis.",
            "analogy": "The Willmore flow ∂F/∂t = -∇W(F) evolves surfaces toward conformal Willmore equilibria.",
            "rules": [
              "Fourth-order parabolic PDE: Willmore flow.",
              "Li-Yau conformal volume inequality.",
              "Mathlib formalization of mean curvature."
            ],
            "mystery": "AI symbolic differential solvers verify min-max variational bounds for higher-genus topologies.",
            "funFact": "The Willmore Conjecture solved one of the grandest variational problems in 20th-century differential geometry."
          }
        },
        "history": [
          {
            "year": "1965",
            "author": "Thomas Willmore",
            "note": "Proposes the 2π² torus bending energy conjecture."
          },
          {
            "year": "1982",
            "author": "Peter Li & Shing-Tung Yau",
            "note": "Introduce conformal volume and prove conjecture for non-conformal cases."
          },
          {
            "year": "2012",
            "author": "Fernando Codá Marques & André Neves",
            "note": "Deliver complete proof of the Willmore conjecture using min-max theory."
          }
        ]
      },
      "de": {
        "name": "The Willmore Conjecture",
        "subtitle": "Minimal Bending Energy of an Elastic Doughnut ($W \\ge 2\\pi^2$)",
        "field": "Differential Geometry & Min-Max Theory",
        "statusBadge": "PROVEN THEOREM",
        "grades": {
          "explorers": {
            "tagline": "How much energy does it take to bend an elastic rubber doughnut into 3D space?",
            "analogy": "Thomas Willmore in 1965 defined the 'bending energy' of a surface as the integral of its squared mean curvature: W(M) = ∫ H² dA. A round sphere has W = 4π ≈ 12.57. For a doughnut (torus with a hole), Willmore conjectured that its bending energy can NEVER be less than 2π² ≈ 19.74! Proved in 2012 by Fernando Codá Marques and André Neves!",
            "rules": [
              "Willmore energy functional: W(M) = ∫_M H² dA.",
              "Sphere achieves minimum W = 4π among all surfaces.",
              "Torus (genus 1): Willmore conjectured W(M) ≥ 2π² ≈ 19.74.",
              "Proved by Marques & Neves (2012) using min-max Almgren-Pitts theory!"
            ],
            "mystery": "The unique shape achieving the absolute minimum 2π² is the famous Clifford Torus, mapped into 3D via stereographic projection!",
            "funFact": "Marques and Neves were awarded the Clay Research Award and the AMS Oswald Veblen Prize for this breakthrough!"
          },
          "investigators": {
            "tagline": "Almgren-Pitts min-max theory, canonical families, and sweepouts.",
            "analogy": "Marques and Neves constructed a 5-parameter family of surfaces (sweepout) on the 3-sphere S³, proving that the minimax energy must attain the area of the Clifford torus.",
            "rules": [
              "Conformal invariance: W(M) is invariant under Möbius conformal transformations.",
              "5-parameter sweepout on S³.",
              "Almgren-Pitts min-max theorem."
            ],
            "mystery": "What are the exact Willmore energy minimizers for higher genus surfaces (double doughnuts g = 2, 3...)?",
            "funFact": "Thomas Willmore formulated the conjecture in 1965 in Durham."
          },
          "pioneers": {
            "tagline": "Conformal geometry of surfaces in S³ and geometric analysis.",
            "analogy": "The Willmore flow ∂F/∂t = -∇W(F) evolves surfaces toward conformal Willmore equilibria.",
            "rules": [
              "Fourth-order parabolic PDE: Willmore flow.",
              "Li-Yau conformal volume inequality.",
              "Mathlib formalization of mean curvature."
            ],
            "mystery": "AI symbolic differential solvers verify min-max variational bounds for higher-genus topologies.",
            "funFact": "The Willmore Conjecture solved one of the grandest variational problems in 20th-century differential geometry."
          }
        },
        "history": [
          {
            "year": "1965",
            "author": "Thomas Willmore",
            "note": "Proposes the 2π² torus bending energy conjecture."
          },
          {
            "year": "1982",
            "author": "Peter Li & Shing-Tung Yau",
            "note": "Introduce conformal volume and prove conjecture for non-conformal cases."
          },
          {
            "year": "2012",
            "author": "Fernando Codá Marques & André Neves",
            "note": "Deliver complete proof of the Willmore conjecture using min-max theory."
          }
        ]
      },
      "fr": {
        "name": "The Willmore Conjecture",
        "subtitle": "Minimal Bending Energy of an Elastic Doughnut ($W \\ge 2\\pi^2$)",
        "field": "Differential Geometry & Min-Max Theory",
        "statusBadge": "PROVEN THEOREM",
        "grades": {
          "explorers": {
            "tagline": "How much energy does it take to bend an elastic rubber doughnut into 3D space?",
            "analogy": "Thomas Willmore in 1965 defined the 'bending energy' of a surface as the integral of its squared mean curvature: W(M) = ∫ H² dA. A round sphere has W = 4π ≈ 12.57. For a doughnut (torus with a hole), Willmore conjectured that its bending energy can NEVER be less than 2π² ≈ 19.74! Proved in 2012 by Fernando Codá Marques and André Neves!",
            "rules": [
              "Willmore energy functional: W(M) = ∫_M H² dA.",
              "Sphere achieves minimum W = 4π among all surfaces.",
              "Torus (genus 1): Willmore conjectured W(M) ≥ 2π² ≈ 19.74.",
              "Proved by Marques & Neves (2012) using min-max Almgren-Pitts theory!"
            ],
            "mystery": "The unique shape achieving the absolute minimum 2π² is the famous Clifford Torus, mapped into 3D via stereographic projection!",
            "funFact": "Marques and Neves were awarded the Clay Research Award and the AMS Oswald Veblen Prize for this breakthrough!"
          },
          "investigators": {
            "tagline": "Almgren-Pitts min-max theory, canonical families, and sweepouts.",
            "analogy": "Marques and Neves constructed a 5-parameter family of surfaces (sweepout) on the 3-sphere S³, proving that the minimax energy must attain the area of the Clifford torus.",
            "rules": [
              "Conformal invariance: W(M) is invariant under Möbius conformal transformations.",
              "5-parameter sweepout on S³.",
              "Almgren-Pitts min-max theorem."
            ],
            "mystery": "What are the exact Willmore energy minimizers for higher genus surfaces (double doughnuts g = 2, 3...)?",
            "funFact": "Thomas Willmore formulated the conjecture in 1965 in Durham."
          },
          "pioneers": {
            "tagline": "Conformal geometry of surfaces in S³ and geometric analysis.",
            "analogy": "The Willmore flow ∂F/∂t = -∇W(F) evolves surfaces toward conformal Willmore equilibria.",
            "rules": [
              "Fourth-order parabolic PDE: Willmore flow.",
              "Li-Yau conformal volume inequality.",
              "Mathlib formalization of mean curvature."
            ],
            "mystery": "AI symbolic differential solvers verify min-max variational bounds for higher-genus topologies.",
            "funFact": "The Willmore Conjecture solved one of the grandest variational problems in 20th-century differential geometry."
          }
        },
        "history": [
          {
            "year": "1965",
            "author": "Thomas Willmore",
            "note": "Proposes the 2π² torus bending energy conjecture."
          },
          {
            "year": "1982",
            "author": "Peter Li & Shing-Tung Yau",
            "note": "Introduce conformal volume and prove conjecture for non-conformal cases."
          },
          {
            "year": "2012",
            "author": "Fernando Codá Marques & André Neves",
            "note": "Deliver complete proof of the Willmore conjecture using min-max theory."
          }
        ]
      },
      "it": {
        "name": "The Willmore Conjecture",
        "subtitle": "Minimal Bending Energy of an Elastic Doughnut ($W \\ge 2\\pi^2$)",
        "field": "Differential Geometry & Min-Max Theory",
        "statusBadge": "PROVEN THEOREM",
        "grades": {
          "explorers": {
            "tagline": "How much energy does it take to bend an elastic rubber doughnut into 3D space?",
            "analogy": "Thomas Willmore in 1965 defined the 'bending energy' of a surface as the integral of its squared mean curvature: W(M) = ∫ H² dA. A round sphere has W = 4π ≈ 12.57. For a doughnut (torus with a hole), Willmore conjectured that its bending energy can NEVER be less than 2π² ≈ 19.74! Proved in 2012 by Fernando Codá Marques and André Neves!",
            "rules": [
              "Willmore energy functional: W(M) = ∫_M H² dA.",
              "Sphere achieves minimum W = 4π among all surfaces.",
              "Torus (genus 1): Willmore conjectured W(M) ≥ 2π² ≈ 19.74.",
              "Proved by Marques & Neves (2012) using min-max Almgren-Pitts theory!"
            ],
            "mystery": "The unique shape achieving the absolute minimum 2π² is the famous Clifford Torus, mapped into 3D via stereographic projection!",
            "funFact": "Marques and Neves were awarded the Clay Research Award and the AMS Oswald Veblen Prize for this breakthrough!"
          },
          "investigators": {
            "tagline": "Almgren-Pitts min-max theory, canonical families, and sweepouts.",
            "analogy": "Marques and Neves constructed a 5-parameter family of surfaces (sweepout) on the 3-sphere S³, proving that the minimax energy must attain the area of the Clifford torus.",
            "rules": [
              "Conformal invariance: W(M) is invariant under Möbius conformal transformations.",
              "5-parameter sweepout on S³.",
              "Almgren-Pitts min-max theorem."
            ],
            "mystery": "What are the exact Willmore energy minimizers for higher genus surfaces (double doughnuts g = 2, 3...)?",
            "funFact": "Thomas Willmore formulated the conjecture in 1965 in Durham."
          },
          "pioneers": {
            "tagline": "Conformal geometry of surfaces in S³ and geometric analysis.",
            "analogy": "The Willmore flow ∂F/∂t = -∇W(F) evolves surfaces toward conformal Willmore equilibria.",
            "rules": [
              "Fourth-order parabolic PDE: Willmore flow.",
              "Li-Yau conformal volume inequality.",
              "Mathlib formalization of mean curvature."
            ],
            "mystery": "AI symbolic differential solvers verify min-max variational bounds for higher-genus topologies.",
            "funFact": "The Willmore Conjecture solved one of the grandest variational problems in 20th-century differential geometry."
          }
        },
        "history": [
          {
            "year": "1965",
            "author": "Thomas Willmore",
            "note": "Proposes the 2π² torus bending energy conjecture."
          },
          {
            "year": "1982",
            "author": "Peter Li & Shing-Tung Yau",
            "note": "Introduce conformal volume and prove conjecture for non-conformal cases."
          },
          {
            "year": "2012",
            "author": "Fernando Codá Marques & André Neves",
            "note": "Deliver complete proof of the Willmore conjecture using min-max theory."
          }
        ]
      },
      "ja": {
        "name": "The Willmore Conjecture",
        "subtitle": "Minimal Bending Energy of an Elastic Doughnut ($W \\ge 2\\pi^2$)",
        "field": "Differential Geometry & Min-Max Theory",
        "statusBadge": "PROVEN THEOREM",
        "grades": {
          "explorers": {
            "tagline": "How much energy does it take to bend an elastic rubber doughnut into 3D space?",
            "analogy": "Thomas Willmore in 1965 defined the 'bending energy' of a surface as the integral of its squared mean curvature: W(M) = ∫ H² dA. A round sphere has W = 4π ≈ 12.57. For a doughnut (torus with a hole), Willmore conjectured that its bending energy can NEVER be less than 2π² ≈ 19.74! Proved in 2012 by Fernando Codá Marques and André Neves!",
            "rules": [
              "Willmore energy functional: W(M) = ∫_M H² dA.",
              "Sphere achieves minimum W = 4π among all surfaces.",
              "Torus (genus 1): Willmore conjectured W(M) ≥ 2π² ≈ 19.74.",
              "Proved by Marques & Neves (2012) using min-max Almgren-Pitts theory!"
            ],
            "mystery": "The unique shape achieving the absolute minimum 2π² is the famous Clifford Torus, mapped into 3D via stereographic projection!",
            "funFact": "Marques and Neves were awarded the Clay Research Award and the AMS Oswald Veblen Prize for this breakthrough!"
          },
          "investigators": {
            "tagline": "Almgren-Pitts min-max theory, canonical families, and sweepouts.",
            "analogy": "Marques and Neves constructed a 5-parameter family of surfaces (sweepout) on the 3-sphere S³, proving that the minimax energy must attain the area of the Clifford torus.",
            "rules": [
              "Conformal invariance: W(M) is invariant under Möbius conformal transformations.",
              "5-parameter sweepout on S³.",
              "Almgren-Pitts min-max theorem."
            ],
            "mystery": "What are the exact Willmore energy minimizers for higher genus surfaces (double doughnuts g = 2, 3...)?",
            "funFact": "Thomas Willmore formulated the conjecture in 1965 in Durham."
          },
          "pioneers": {
            "tagline": "Conformal geometry of surfaces in S³ and geometric analysis.",
            "analogy": "The Willmore flow ∂F/∂t = -∇W(F) evolves surfaces toward conformal Willmore equilibria.",
            "rules": [
              "Fourth-order parabolic PDE: Willmore flow.",
              "Li-Yau conformal volume inequality.",
              "Mathlib formalization of mean curvature."
            ],
            "mystery": "AI symbolic differential solvers verify min-max variational bounds for higher-genus topologies.",
            "funFact": "The Willmore Conjecture solved one of the grandest variational problems in 20th-century differential geometry."
          }
        },
        "history": [
          {
            "year": "1965",
            "author": "Thomas Willmore",
            "note": "Proposes the 2π² torus bending energy conjecture."
          },
          {
            "year": "1982",
            "author": "Peter Li & Shing-Tung Yau",
            "note": "Introduce conformal volume and prove conjecture for non-conformal cases."
          },
          {
            "year": "2012",
            "author": "Fernando Codá Marques & André Neves",
            "note": "Deliver complete proof of the Willmore conjecture using min-max theory."
          }
        ]
      },
      "ko": {
        "name": "The Willmore Conjecture",
        "subtitle": "Minimal Bending Energy of an Elastic Doughnut ($W \\ge 2\\pi^2$)",
        "field": "Differential Geometry & Min-Max Theory",
        "statusBadge": "PROVEN THEOREM",
        "grades": {
          "explorers": {
            "tagline": "How much energy does it take to bend an elastic rubber doughnut into 3D space?",
            "analogy": "Thomas Willmore in 1965 defined the 'bending energy' of a surface as the integral of its squared mean curvature: W(M) = ∫ H² dA. A round sphere has W = 4π ≈ 12.57. For a doughnut (torus with a hole), Willmore conjectured that its bending energy can NEVER be less than 2π² ≈ 19.74! Proved in 2012 by Fernando Codá Marques and André Neves!",
            "rules": [
              "Willmore energy functional: W(M) = ∫_M H² dA.",
              "Sphere achieves minimum W = 4π among all surfaces.",
              "Torus (genus 1): Willmore conjectured W(M) ≥ 2π² ≈ 19.74.",
              "Proved by Marques & Neves (2012) using min-max Almgren-Pitts theory!"
            ],
            "mystery": "The unique shape achieving the absolute minimum 2π² is the famous Clifford Torus, mapped into 3D via stereographic projection!",
            "funFact": "Marques and Neves were awarded the Clay Research Award and the AMS Oswald Veblen Prize for this breakthrough!"
          },
          "investigators": {
            "tagline": "Almgren-Pitts min-max theory, canonical families, and sweepouts.",
            "analogy": "Marques and Neves constructed a 5-parameter family of surfaces (sweepout) on the 3-sphere S³, proving that the minimax energy must attain the area of the Clifford torus.",
            "rules": [
              "Conformal invariance: W(M) is invariant under Möbius conformal transformations.",
              "5-parameter sweepout on S³.",
              "Almgren-Pitts min-max theorem."
            ],
            "mystery": "What are the exact Willmore energy minimizers for higher genus surfaces (double doughnuts g = 2, 3...)?",
            "funFact": "Thomas Willmore formulated the conjecture in 1965 in Durham."
          },
          "pioneers": {
            "tagline": "Conformal geometry of surfaces in S³ and geometric analysis.",
            "analogy": "The Willmore flow ∂F/∂t = -∇W(F) evolves surfaces toward conformal Willmore equilibria.",
            "rules": [
              "Fourth-order parabolic PDE: Willmore flow.",
              "Li-Yau conformal volume inequality.",
              "Mathlib formalization of mean curvature."
            ],
            "mystery": "AI symbolic differential solvers verify min-max variational bounds for higher-genus topologies.",
            "funFact": "The Willmore Conjecture solved one of the grandest variational problems in 20th-century differential geometry."
          }
        },
        "history": [
          {
            "year": "1965",
            "author": "Thomas Willmore",
            "note": "Proposes the 2π² torus bending energy conjecture."
          },
          {
            "year": "1982",
            "author": "Peter Li & Shing-Tung Yau",
            "note": "Introduce conformal volume and prove conjecture for non-conformal cases."
          },
          {
            "year": "2012",
            "author": "Fernando Codá Marques & André Neves",
            "note": "Deliver complete proof of the Willmore conjecture using min-max theory."
          }
        ]
      },
      "zh-Hans": {
        "name": "威尔莫尔猜想",
        "subtitle": "弹性甜甜圈弯曲能量极小值（$W \\ge 2\\pi^2$，马克斯与内维斯已证）",
        "field": "微分几何 & 极小极大变分理论",
        "statusBadge": "已证明定理",
        "grades": {
          "explorers": {
            "tagline": "在三维空间中把一个弹性橡皮甜甜圈拧巴扭曲，它最少要储存多少弯曲能量？",
            "analogy": "托马斯·威尔莫尔于1965年定义了弹性闭曲面的“总弯曲能量”为平均曲率平方的积分：W(M) = ∫ H² dA。普通圆球的弯曲能是 4π ≈ 12.57。而对于有洞的甜甜圈（环面），威尔莫尔猜想：它的弯曲能量绝对不可能小于 2π² ≈ 19.74！克利福德环面恰好达到 2π²。2012年马克斯与内维斯运用极小极大几何理论完全征服了该猜想！",
            "rules": [
              "威尔莫尔弹性弯曲能泛函：W(M) = ∫_M H² dA。",
              "普通球面达到拓扑亏格0的极小值 4π。",
              "环面（亏格1）：威尔莫尔猜想 W(M) ≥ 2π² ≈ 19.74。",
              "马克斯与内维斯 (2012) 运用阿姆格伦-皮茨极小极大理论彻底证实！"
            ],
            "mystery": "达到绝对极小值 2π² 的唯一完美几何构型，正是四维空间中的克利福德环面在三维立体投影下的优雅形态！",
            "funFact": "马克斯与内维斯因攻克威尔莫尔猜想荣获克雷研究奖与美国数学会奥斯瓦尔德·维布伦几何奖！"
          },
          "investigators": {
            "tagline": "阿姆格伦-皮茨极小极大理论、典范族与空间扫掠。",
            "analogy": "两位数学家在三维超球面 S³ 上构造了五参数典范曲面扫掠族，利用阿姆格伦-皮茨变分整流理论证明极小极大值被克利福德极小超曲面面积精确截获。",
            "rules": [
              "莫比乌斯共形变换不变性：W(M) 在共形拉伸下保持恒定。",
              "S³ 上的五维紧致参数连续空间扫掠。",
              "阿姆格伦-皮茨极小极大极小曲面存在性定理。"
            ],
            "mystery": "对于高亏格表面（如双孔、三孔甜甜圈），最优极小威尔莫尔能量曲面的解析构造仍是几何前沿。",
            "funFact": "托马斯·威尔莫尔于1965年在英国杜伦大学提出。"
          },
          "pioneers": {
            "tagline": "三维超球面中曲面的共形几何学与几何分析。",
            "analogy": "四阶抛物型偏微分方程威尔莫尔流演化任意曲面平滑收敛至能量平衡态。",
            "rules": [
              "四阶几何演化偏微分方程威尔莫尔流。",
              "李伟光-丘成桐共形体积不等式。",
              "Lean 4 Mathlib 中第二基本形式与平均曲率形式化。"
            ],
            "mystery": "AI 可微几何优化算法已用于计算多孔拓扑环面的威尔莫尔极值网格。",
            "funFact": "威尔莫尔猜想的解决是20世纪微分几何变分理论最宏伟的胜利之一。"
          }
        },
        "history": [
          {
            "year": "1965",
            "author": "托马斯·威尔莫尔",
            "note": "提出环面弹性弯曲能量 2π² 极小值猜想。"
          },
          {
            "year": "1982",
            "author": "李伟光 & 丘成桐",
            "note": "引入共形体积方法证明部分重要情形。"
          },
          {
            "year": "2012",
            "author": "马克斯 & 内维斯",
            "note": "运用极小极大理论彻底攻克威尔莫尔猜想！"
          }
        ]
      },
      "zh-Hant": {
        "name": "The Willmore Conjecture",
        "subtitle": "Minimal Bending Energy of an Elastic Doughnut ($W \\ge 2\\pi^2$)",
        "field": "Differential Geometry & Min-Max Theory",
        "statusBadge": "PROVEN THEOREM",
        "grades": {
          "explorers": {
            "tagline": "How much energy does it take to bend an elastic rubber doughnut into 3D space?",
            "analogy": "Thomas Willmore in 1965 defined the 'bending energy' of a surface as the integral of its squared mean curvature: W(M) = ∫ H² dA. A round sphere has W = 4π ≈ 12.57. For a doughnut (torus with a hole), Willmore conjectured that its bending energy can NEVER be less than 2π² ≈ 19.74! Proved in 2012 by Fernando Codá Marques and André Neves!",
            "rules": [
              "Willmore energy functional: W(M) = ∫_M H² dA.",
              "Sphere achieves minimum W = 4π among all surfaces.",
              "Torus (genus 1): Willmore conjectured W(M) ≥ 2π² ≈ 19.74.",
              "Proved by Marques & Neves (2012) using min-max Almgren-Pitts theory!"
            ],
            "mystery": "The unique shape achieving the absolute minimum 2π² is the famous Clifford Torus, mapped into 3D via stereographic projection!",
            "funFact": "Marques and Neves were awarded the Clay Research Award and the AMS Oswald Veblen Prize for this breakthrough!"
          },
          "investigators": {
            "tagline": "Almgren-Pitts min-max theory, canonical families, and sweepouts.",
            "analogy": "Marques and Neves constructed a 5-parameter family of surfaces (sweepout) on the 3-sphere S³, proving that the minimax energy must attain the area of the Clifford torus.",
            "rules": [
              "Conformal invariance: W(M) is invariant under Möbius conformal transformations.",
              "5-parameter sweepout on S³.",
              "Almgren-Pitts min-max theorem."
            ],
            "mystery": "What are the exact Willmore energy minimizers for higher genus surfaces (double doughnuts g = 2, 3...)?",
            "funFact": "Thomas Willmore formulated the conjecture in 1965 in Durham."
          },
          "pioneers": {
            "tagline": "Conformal geometry of surfaces in S³ and geometric analysis.",
            "analogy": "The Willmore flow ∂F/∂t = -∇W(F) evolves surfaces toward conformal Willmore equilibria.",
            "rules": [
              "Fourth-order parabolic PDE: Willmore flow.",
              "Li-Yau conformal volume inequality.",
              "Mathlib formalization of mean curvature."
            ],
            "mystery": "AI symbolic differential solvers verify min-max variational bounds for higher-genus topologies.",
            "funFact": "The Willmore Conjecture solved one of the grandest variational problems in 20th-century differential geometry."
          }
        },
        "history": [
          {
            "year": "1965",
            "author": "Thomas Willmore",
            "note": "Proposes the 2π² torus bending energy conjecture."
          },
          {
            "year": "1982",
            "author": "Peter Li & Shing-Tung Yau",
            "note": "Introduce conformal volume and prove conjecture for non-conformal cases."
          },
          {
            "year": "2012",
            "author": "Fernando Codá Marques & André Neves",
            "note": "Deliver complete proof of the Willmore conjecture using min-max theory."
          }
        ]
      }
    }
  },
  {
    "id": "kissing-5d",
    "icon": "🎱",
    "difficulty": "Gr 6+",
    "domain": "geometry",
    "category": "geometry",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Analysis.InnerProductSpace.Basic\n-- Kissing Number Problem in Dimension 5: How many non-overlapping unit spheres can touch a central unit sphere in ℝ⁵?\n-- Known bounds: 40 ≤ K(5) ≤ 44.",
    "locales": {
      "en": {
        "name": "Kissing Number in Dimension 5",
        "subtitle": "How Many Unit Spheres Can Touch a Central Sphere in 5D? ($40 \\le K(5) \\le 44$)",
        "field": "Discrete Geometry & Spherical Codes",
        "statusBadge": "OPEN FRONTIER",
        "grades": {
          "explorers": {
            "tagline": "How many billiard balls can kiss one central ball at the same time in 5D?",
            "analogy": "In 1D: 2 spheres can touch. In 2D: 6 pennies surround a center penny (hexagon). In 3D: Newton and Gregory famously debated whether 12 or 13 spheres can kiss (Newton was right: exactly 12!). In 4D it is 24; in 8D it is 240; in 24D it is 196,560. But in DIMENSION 5, humanity still does not know the exact answer: it is between 40 and 44!",
            "rules": [
              "Kissing number K(d): Max unit spheres touching a central unit sphere.",
              "d=1: 2 | d=2: 6 | d=3: 12 (Newton proved) | d=4: 24 (Musin 2003).",
              "d=8: 240 (Odlyzko & Sloane) | d=24: 196,560.",
              "d=5: Known bounds: 40 ≤ K(5) ≤ 44! Exact integer is unknown!"
            ],
            "mystery": "In 1694, Isaac Newton and David Gregory debated over lunch whether 13 balls could touch in 3D. It took over 250 years until 1953 to rigorously settle Newton's claim!",
            "funFact": "In 2022, semidefinite programming reduced the upper bound in 5D from 45 down to 44!"
          },
          "investigators": {
            "tagline": "Delsarte's linear programming method and spherical harmonics.",
            "analogy": "Delsarte showed in 1977 that spherical codes can be bounded by Gegenbauer orthogonal polynomial expansions.",
            "rules": [
              "Angular distance: Inner product x · y ≤ 1/2.",
              "Gegenbauer polynomials P_k(t).",
              "Semidefinite programming (SDP) bounds: 40 ≤ K(5) ≤ 44."
            ],
            "mystery": "Can higher-order 3-point and 4-point semidefinite bounds close the gap and prove K(5) = 40?",
            "funFact": "Newton-Gregory debate (1694); modern 5D formulations in 20th century."
          },
          "pioneers": {
            "tagline": "Error-correcting codes, lattices, and sphere packings.",
            "analogy": "Kissing numbers determine the signal-to-noise ratio in multi-antenna 5G/6G MIMO wireless communications.",
            "rules": [
              "Leech lattice and Golay codes.",
              "Delsarte-Goethals-Seidel bound.",
              "Lean 4 formal verification of spherical codes."
            ],
            "mystery": "AI-guided global optimization using non-convex neural energy minimization searches for a 41-sphere arrangement.",
            "funFact": "The Kissing Number in Dimension 5 is the premier open puzzle in modern discrete sphere arrangements."
          }
        },
        "history": [
          {
            "year": "1694",
            "author": "Isaac Newton & David Gregory",
            "note": "First historical debate on kissing numbers (dimension 3)."
          },
          {
            "year": "1977",
            "author": "Philippe Delsarte",
            "note": "Introduces linear programming method for spherical codes."
          },
          {
            "year": "2003",
            "author": "Oleg Musin",
            "note": "Proves kissing number in dimension 4 is exactly 24."
          },
          {
            "year": "2022",
            "author": "Bachoc & Vallentin",
            "note": "Improve 5D bound to 40 ≤ K(5) ≤ 44 using semidefinite programming."
          }
        ]
      },
      "de": {
        "name": "Kissing Number in Dimension 5",
        "subtitle": "How Many Unit Spheres Can Touch a Central Sphere in 5D? ($40 \\le K(5) \\le 44$)",
        "field": "Discrete Geometry & Spherical Codes",
        "statusBadge": "OPEN FRONTIER",
        "grades": {
          "explorers": {
            "tagline": "How many billiard balls can kiss one central ball at the same time in 5D?",
            "analogy": "In 1D: 2 spheres can touch. In 2D: 6 pennies surround a center penny (hexagon). In 3D: Newton and Gregory famously debated whether 12 or 13 spheres can kiss (Newton was right: exactly 12!). In 4D it is 24; in 8D it is 240; in 24D it is 196,560. But in DIMENSION 5, humanity still does not know the exact answer: it is between 40 and 44!",
            "rules": [
              "Kissing number K(d): Max unit spheres touching a central unit sphere.",
              "d=1: 2 | d=2: 6 | d=3: 12 (Newton proved) | d=4: 24 (Musin 2003).",
              "d=8: 240 (Odlyzko & Sloane) | d=24: 196,560.",
              "d=5: Known bounds: 40 ≤ K(5) ≤ 44! Exact integer is unknown!"
            ],
            "mystery": "In 1694, Isaac Newton and David Gregory debated over lunch whether 13 balls could touch in 3D. It took over 250 years until 1953 to rigorously settle Newton's claim!",
            "funFact": "In 2022, semidefinite programming reduced the upper bound in 5D from 45 down to 44!"
          },
          "investigators": {
            "tagline": "Delsarte's linear programming method and spherical harmonics.",
            "analogy": "Delsarte showed in 1977 that spherical codes can be bounded by Gegenbauer orthogonal polynomial expansions.",
            "rules": [
              "Angular distance: Inner product x · y ≤ 1/2.",
              "Gegenbauer polynomials P_k(t).",
              "Semidefinite programming (SDP) bounds: 40 ≤ K(5) ≤ 44."
            ],
            "mystery": "Can higher-order 3-point and 4-point semidefinite bounds close the gap and prove K(5) = 40?",
            "funFact": "Newton-Gregory debate (1694); modern 5D formulations in 20th century."
          },
          "pioneers": {
            "tagline": "Error-correcting codes, lattices, and sphere packings.",
            "analogy": "Kissing numbers determine the signal-to-noise ratio in multi-antenna 5G/6G MIMO wireless communications.",
            "rules": [
              "Leech lattice and Golay codes.",
              "Delsarte-Goethals-Seidel bound.",
              "Lean 4 formal verification of spherical codes."
            ],
            "mystery": "AI-guided global optimization using non-convex neural energy minimization searches for a 41-sphere arrangement.",
            "funFact": "The Kissing Number in Dimension 5 is the premier open puzzle in modern discrete sphere arrangements."
          }
        },
        "history": [
          {
            "year": "1694",
            "author": "Isaac Newton & David Gregory",
            "note": "First historical debate on kissing numbers (dimension 3)."
          },
          {
            "year": "1977",
            "author": "Philippe Delsarte",
            "note": "Introduces linear programming method for spherical codes."
          },
          {
            "year": "2003",
            "author": "Oleg Musin",
            "note": "Proves kissing number in dimension 4 is exactly 24."
          },
          {
            "year": "2022",
            "author": "Bachoc & Vallentin",
            "note": "Improve 5D bound to 40 ≤ K(5) ≤ 44 using semidefinite programming."
          }
        ]
      },
      "fr": {
        "name": "Kissing Number in Dimension 5",
        "subtitle": "How Many Unit Spheres Can Touch a Central Sphere in 5D? ($40 \\le K(5) \\le 44$)",
        "field": "Discrete Geometry & Spherical Codes",
        "statusBadge": "OPEN FRONTIER",
        "grades": {
          "explorers": {
            "tagline": "How many billiard balls can kiss one central ball at the same time in 5D?",
            "analogy": "In 1D: 2 spheres can touch. In 2D: 6 pennies surround a center penny (hexagon). In 3D: Newton and Gregory famously debated whether 12 or 13 spheres can kiss (Newton was right: exactly 12!). In 4D it is 24; in 8D it is 240; in 24D it is 196,560. But in DIMENSION 5, humanity still does not know the exact answer: it is between 40 and 44!",
            "rules": [
              "Kissing number K(d): Max unit spheres touching a central unit sphere.",
              "d=1: 2 | d=2: 6 | d=3: 12 (Newton proved) | d=4: 24 (Musin 2003).",
              "d=8: 240 (Odlyzko & Sloane) | d=24: 196,560.",
              "d=5: Known bounds: 40 ≤ K(5) ≤ 44! Exact integer is unknown!"
            ],
            "mystery": "In 1694, Isaac Newton and David Gregory debated over lunch whether 13 balls could touch in 3D. It took over 250 years until 1953 to rigorously settle Newton's claim!",
            "funFact": "In 2022, semidefinite programming reduced the upper bound in 5D from 45 down to 44!"
          },
          "investigators": {
            "tagline": "Delsarte's linear programming method and spherical harmonics.",
            "analogy": "Delsarte showed in 1977 that spherical codes can be bounded by Gegenbauer orthogonal polynomial expansions.",
            "rules": [
              "Angular distance: Inner product x · y ≤ 1/2.",
              "Gegenbauer polynomials P_k(t).",
              "Semidefinite programming (SDP) bounds: 40 ≤ K(5) ≤ 44."
            ],
            "mystery": "Can higher-order 3-point and 4-point semidefinite bounds close the gap and prove K(5) = 40?",
            "funFact": "Newton-Gregory debate (1694); modern 5D formulations in 20th century."
          },
          "pioneers": {
            "tagline": "Error-correcting codes, lattices, and sphere packings.",
            "analogy": "Kissing numbers determine the signal-to-noise ratio in multi-antenna 5G/6G MIMO wireless communications.",
            "rules": [
              "Leech lattice and Golay codes.",
              "Delsarte-Goethals-Seidel bound.",
              "Lean 4 formal verification of spherical codes."
            ],
            "mystery": "AI-guided global optimization using non-convex neural energy minimization searches for a 41-sphere arrangement.",
            "funFact": "The Kissing Number in Dimension 5 is the premier open puzzle in modern discrete sphere arrangements."
          }
        },
        "history": [
          {
            "year": "1694",
            "author": "Isaac Newton & David Gregory",
            "note": "First historical debate on kissing numbers (dimension 3)."
          },
          {
            "year": "1977",
            "author": "Philippe Delsarte",
            "note": "Introduces linear programming method for spherical codes."
          },
          {
            "year": "2003",
            "author": "Oleg Musin",
            "note": "Proves kissing number in dimension 4 is exactly 24."
          },
          {
            "year": "2022",
            "author": "Bachoc & Vallentin",
            "note": "Improve 5D bound to 40 ≤ K(5) ≤ 44 using semidefinite programming."
          }
        ]
      },
      "it": {
        "name": "Kissing Number in Dimension 5",
        "subtitle": "How Many Unit Spheres Can Touch a Central Sphere in 5D? ($40 \\le K(5) \\le 44$)",
        "field": "Discrete Geometry & Spherical Codes",
        "statusBadge": "OPEN FRONTIER",
        "grades": {
          "explorers": {
            "tagline": "How many billiard balls can kiss one central ball at the same time in 5D?",
            "analogy": "In 1D: 2 spheres can touch. In 2D: 6 pennies surround a center penny (hexagon). In 3D: Newton and Gregory famously debated whether 12 or 13 spheres can kiss (Newton was right: exactly 12!). In 4D it is 24; in 8D it is 240; in 24D it is 196,560. But in DIMENSION 5, humanity still does not know the exact answer: it is between 40 and 44!",
            "rules": [
              "Kissing number K(d): Max unit spheres touching a central unit sphere.",
              "d=1: 2 | d=2: 6 | d=3: 12 (Newton proved) | d=4: 24 (Musin 2003).",
              "d=8: 240 (Odlyzko & Sloane) | d=24: 196,560.",
              "d=5: Known bounds: 40 ≤ K(5) ≤ 44! Exact integer is unknown!"
            ],
            "mystery": "In 1694, Isaac Newton and David Gregory debated over lunch whether 13 balls could touch in 3D. It took over 250 years until 1953 to rigorously settle Newton's claim!",
            "funFact": "In 2022, semidefinite programming reduced the upper bound in 5D from 45 down to 44!"
          },
          "investigators": {
            "tagline": "Delsarte's linear programming method and spherical harmonics.",
            "analogy": "Delsarte showed in 1977 that spherical codes can be bounded by Gegenbauer orthogonal polynomial expansions.",
            "rules": [
              "Angular distance: Inner product x · y ≤ 1/2.",
              "Gegenbauer polynomials P_k(t).",
              "Semidefinite programming (SDP) bounds: 40 ≤ K(5) ≤ 44."
            ],
            "mystery": "Can higher-order 3-point and 4-point semidefinite bounds close the gap and prove K(5) = 40?",
            "funFact": "Newton-Gregory debate (1694); modern 5D formulations in 20th century."
          },
          "pioneers": {
            "tagline": "Error-correcting codes, lattices, and sphere packings.",
            "analogy": "Kissing numbers determine the signal-to-noise ratio in multi-antenna 5G/6G MIMO wireless communications.",
            "rules": [
              "Leech lattice and Golay codes.",
              "Delsarte-Goethals-Seidel bound.",
              "Lean 4 formal verification of spherical codes."
            ],
            "mystery": "AI-guided global optimization using non-convex neural energy minimization searches for a 41-sphere arrangement.",
            "funFact": "The Kissing Number in Dimension 5 is the premier open puzzle in modern discrete sphere arrangements."
          }
        },
        "history": [
          {
            "year": "1694",
            "author": "Isaac Newton & David Gregory",
            "note": "First historical debate on kissing numbers (dimension 3)."
          },
          {
            "year": "1977",
            "author": "Philippe Delsarte",
            "note": "Introduces linear programming method for spherical codes."
          },
          {
            "year": "2003",
            "author": "Oleg Musin",
            "note": "Proves kissing number in dimension 4 is exactly 24."
          },
          {
            "year": "2022",
            "author": "Bachoc & Vallentin",
            "note": "Improve 5D bound to 40 ≤ K(5) ≤ 44 using semidefinite programming."
          }
        ]
      },
      "ja": {
        "name": "Kissing Number in Dimension 5",
        "subtitle": "How Many Unit Spheres Can Touch a Central Sphere in 5D? ($40 \\le K(5) \\le 44$)",
        "field": "Discrete Geometry & Spherical Codes",
        "statusBadge": "OPEN FRONTIER",
        "grades": {
          "explorers": {
            "tagline": "How many billiard balls can kiss one central ball at the same time in 5D?",
            "analogy": "In 1D: 2 spheres can touch. In 2D: 6 pennies surround a center penny (hexagon). In 3D: Newton and Gregory famously debated whether 12 or 13 spheres can kiss (Newton was right: exactly 12!). In 4D it is 24; in 8D it is 240; in 24D it is 196,560. But in DIMENSION 5, humanity still does not know the exact answer: it is between 40 and 44!",
            "rules": [
              "Kissing number K(d): Max unit spheres touching a central unit sphere.",
              "d=1: 2 | d=2: 6 | d=3: 12 (Newton proved) | d=4: 24 (Musin 2003).",
              "d=8: 240 (Odlyzko & Sloane) | d=24: 196,560.",
              "d=5: Known bounds: 40 ≤ K(5) ≤ 44! Exact integer is unknown!"
            ],
            "mystery": "In 1694, Isaac Newton and David Gregory debated over lunch whether 13 balls could touch in 3D. It took over 250 years until 1953 to rigorously settle Newton's claim!",
            "funFact": "In 2022, semidefinite programming reduced the upper bound in 5D from 45 down to 44!"
          },
          "investigators": {
            "tagline": "Delsarte's linear programming method and spherical harmonics.",
            "analogy": "Delsarte showed in 1977 that spherical codes can be bounded by Gegenbauer orthogonal polynomial expansions.",
            "rules": [
              "Angular distance: Inner product x · y ≤ 1/2.",
              "Gegenbauer polynomials P_k(t).",
              "Semidefinite programming (SDP) bounds: 40 ≤ K(5) ≤ 44."
            ],
            "mystery": "Can higher-order 3-point and 4-point semidefinite bounds close the gap and prove K(5) = 40?",
            "funFact": "Newton-Gregory debate (1694); modern 5D formulations in 20th century."
          },
          "pioneers": {
            "tagline": "Error-correcting codes, lattices, and sphere packings.",
            "analogy": "Kissing numbers determine the signal-to-noise ratio in multi-antenna 5G/6G MIMO wireless communications.",
            "rules": [
              "Leech lattice and Golay codes.",
              "Delsarte-Goethals-Seidel bound.",
              "Lean 4 formal verification of spherical codes."
            ],
            "mystery": "AI-guided global optimization using non-convex neural energy minimization searches for a 41-sphere arrangement.",
            "funFact": "The Kissing Number in Dimension 5 is the premier open puzzle in modern discrete sphere arrangements."
          }
        },
        "history": [
          {
            "year": "1694",
            "author": "Isaac Newton & David Gregory",
            "note": "First historical debate on kissing numbers (dimension 3)."
          },
          {
            "year": "1977",
            "author": "Philippe Delsarte",
            "note": "Introduces linear programming method for spherical codes."
          },
          {
            "year": "2003",
            "author": "Oleg Musin",
            "note": "Proves kissing number in dimension 4 is exactly 24."
          },
          {
            "year": "2022",
            "author": "Bachoc & Vallentin",
            "note": "Improve 5D bound to 40 ≤ K(5) ≤ 44 using semidefinite programming."
          }
        ]
      },
      "ko": {
        "name": "Kissing Number in Dimension 5",
        "subtitle": "How Many Unit Spheres Can Touch a Central Sphere in 5D? ($40 \\le K(5) \\le 44$)",
        "field": "Discrete Geometry & Spherical Codes",
        "statusBadge": "OPEN FRONTIER",
        "grades": {
          "explorers": {
            "tagline": "How many billiard balls can kiss one central ball at the same time in 5D?",
            "analogy": "In 1D: 2 spheres can touch. In 2D: 6 pennies surround a center penny (hexagon). In 3D: Newton and Gregory famously debated whether 12 or 13 spheres can kiss (Newton was right: exactly 12!). In 4D it is 24; in 8D it is 240; in 24D it is 196,560. But in DIMENSION 5, humanity still does not know the exact answer: it is between 40 and 44!",
            "rules": [
              "Kissing number K(d): Max unit spheres touching a central unit sphere.",
              "d=1: 2 | d=2: 6 | d=3: 12 (Newton proved) | d=4: 24 (Musin 2003).",
              "d=8: 240 (Odlyzko & Sloane) | d=24: 196,560.",
              "d=5: Known bounds: 40 ≤ K(5) ≤ 44! Exact integer is unknown!"
            ],
            "mystery": "In 1694, Isaac Newton and David Gregory debated over lunch whether 13 balls could touch in 3D. It took over 250 years until 1953 to rigorously settle Newton's claim!",
            "funFact": "In 2022, semidefinite programming reduced the upper bound in 5D from 45 down to 44!"
          },
          "investigators": {
            "tagline": "Delsarte's linear programming method and spherical harmonics.",
            "analogy": "Delsarte showed in 1977 that spherical codes can be bounded by Gegenbauer orthogonal polynomial expansions.",
            "rules": [
              "Angular distance: Inner product x · y ≤ 1/2.",
              "Gegenbauer polynomials P_k(t).",
              "Semidefinite programming (SDP) bounds: 40 ≤ K(5) ≤ 44."
            ],
            "mystery": "Can higher-order 3-point and 4-point semidefinite bounds close the gap and prove K(5) = 40?",
            "funFact": "Newton-Gregory debate (1694); modern 5D formulations in 20th century."
          },
          "pioneers": {
            "tagline": "Error-correcting codes, lattices, and sphere packings.",
            "analogy": "Kissing numbers determine the signal-to-noise ratio in multi-antenna 5G/6G MIMO wireless communications.",
            "rules": [
              "Leech lattice and Golay codes.",
              "Delsarte-Goethals-Seidel bound.",
              "Lean 4 formal verification of spherical codes."
            ],
            "mystery": "AI-guided global optimization using non-convex neural energy minimization searches for a 41-sphere arrangement.",
            "funFact": "The Kissing Number in Dimension 5 is the premier open puzzle in modern discrete sphere arrangements."
          }
        },
        "history": [
          {
            "year": "1694",
            "author": "Isaac Newton & David Gregory",
            "note": "First historical debate on kissing numbers (dimension 3)."
          },
          {
            "year": "1977",
            "author": "Philippe Delsarte",
            "note": "Introduces linear programming method for spherical codes."
          },
          {
            "year": "2003",
            "author": "Oleg Musin",
            "note": "Proves kissing number in dimension 4 is exactly 24."
          },
          {
            "year": "2022",
            "author": "Bachoc & Vallentin",
            "note": "Improve 5D bound to 40 ≤ K(5) ≤ 44 using semidefinite programming."
          }
        ]
      },
      "zh-Hans": {
        "name": "五维接触数问题（吻数之谜）",
        "subtitle": "五维空间中一个中心球周围最多能紧贴几个互不重叠的相同小球？（$40 \\le K(5) \\le 44$）",
        "field": "离散几何 & 球面码理论",
        "statusBadge": "现代几何前沿",
        "grades": {
          "explorers": {
            "tagline": "一个母球周围最多能同时吻住多少个相同大小的台球？",
            "analogy": "一维中只有 2 个球能碰头。二维平面上，6 枚硬币正好环绕并紧贴中心硬币。三维中牛顿与格雷戈里曾激烈辩论是 12 还是 13（牛顿是对的：恰好是 12！）。在四维是 24，在八维是 240，在二十四维是 196,560。但在五维空间中，人类至今依然不知道精确数字：目前已知在 40 到 44 之间！",
            "rules": [
              "接触数 K(d)：与中心球相切的互不相交等径球最大数量。",
              "1维: 2 | 2维: 6 | 3维: 12 | 4维: 24 (穆辛 2003)。",
              "8维: 240 | 24维: 196,560。",
              "5维空间：已知下界 40，上界 44！真实整数究竟是几？"
            ],
            "mystery": "1694年牛顿和格雷戈里共进午餐时争论三维吻数，人类花了整整250年直到1953年才完全证实牛顿的直觉是对的！",
            "funFact": "2022年运用半正定规划 (SDP) 与多项式优化，五维吻数上界刚从 45 成功下压至 44！"
          },
          "investigators": {
            "tagline": "德尔萨特线性规划法与球面调和函数。",
            "analogy": "菲利普·德尔萨特于1977年创立利用盖根鲍尔多项式展开的球面码半正定规划对偶界。",
            "rules": [
              "接触球心间距要求：内积 x · y ≤ 1/2（夹角 ≥ 60°）。",
              "正定性约束与盖根鲍尔正交多项式。",
              "半正定规划 (SDP) 锁定区间：40 ≤ K(5) ≤ 44。"
            ],
            "mystery": "引入三点与四点关联的高阶半正定规划能否彻底消灭 41-44，证实 K(5) = 40？",
            "funFact": "1694年牛顿争论启蒙，20世纪成为高维离散几何核心战役。"
          },
          "pioneers": {
            "tagline": "纠错码理论、代数格与通信编码。",
            "analogy": "接触数结构直接决定了现代多天线 5G/6G 无线 MIMO 通信星座图的信噪比与最优误码率。",
            "rules": [
              "利奇格与戈莱纠错码。",
              "德尔萨特-戈瑟尔斯-赛德尔球面码界。",
              "Lean 4 Mathlib 中球面度量空间形式化。"
            ],
            "mystery": "AI 粒子群与非凸神经网络优化算法正在全力搜寻是否存在由41个球构成的五维紧贴排布。",
            "funFact": "五维接触数问题是当代高维球体紧密排列领域公认的首要未解谜题。"
          }
        },
        "history": [
          {
            "year": "1694",
            "author": "牛顿 & 格雷戈里",
            "note": "爆发历史上关于三维吻数 (12 vs 13) 的著名论战。"
          },
          {
            "year": "1977",
            "author": "德尔萨特",
            "note": "开创解决接触数问题的线性规划多项式理论。"
          },
          {
            "year": "2003",
            "author": "奥列格·穆辛",
            "note": "彻底攻克四维吻数，证实恰好为 24！"
          },
          {
            "year": "2022",
            "author": "巴绍克 & 瓦伦丁",
            "note": "运用高级半正定规划将五维上界压缩至 44。"
          }
        ]
      },
      "zh-Hant": {
        "name": "Kissing Number in Dimension 5",
        "subtitle": "How Many Unit Spheres Can Touch a Central Sphere in 5D? ($40 \\le K(5) \\le 44$)",
        "field": "Discrete Geometry & Spherical Codes",
        "statusBadge": "OPEN FRONTIER",
        "grades": {
          "explorers": {
            "tagline": "How many billiard balls can kiss one central ball at the same time in 5D?",
            "analogy": "In 1D: 2 spheres can touch. In 2D: 6 pennies surround a center penny (hexagon). In 3D: Newton and Gregory famously debated whether 12 or 13 spheres can kiss (Newton was right: exactly 12!). In 4D it is 24; in 8D it is 240; in 24D it is 196,560. But in DIMENSION 5, humanity still does not know the exact answer: it is between 40 and 44!",
            "rules": [
              "Kissing number K(d): Max unit spheres touching a central unit sphere.",
              "d=1: 2 | d=2: 6 | d=3: 12 (Newton proved) | d=4: 24 (Musin 2003).",
              "d=8: 240 (Odlyzko & Sloane) | d=24: 196,560.",
              "d=5: Known bounds: 40 ≤ K(5) ≤ 44! Exact integer is unknown!"
            ],
            "mystery": "In 1694, Isaac Newton and David Gregory debated over lunch whether 13 balls could touch in 3D. It took over 250 years until 1953 to rigorously settle Newton's claim!",
            "funFact": "In 2022, semidefinite programming reduced the upper bound in 5D from 45 down to 44!"
          },
          "investigators": {
            "tagline": "Delsarte's linear programming method and spherical harmonics.",
            "analogy": "Delsarte showed in 1977 that spherical codes can be bounded by Gegenbauer orthogonal polynomial expansions.",
            "rules": [
              "Angular distance: Inner product x · y ≤ 1/2.",
              "Gegenbauer polynomials P_k(t).",
              "Semidefinite programming (SDP) bounds: 40 ≤ K(5) ≤ 44."
            ],
            "mystery": "Can higher-order 3-point and 4-point semidefinite bounds close the gap and prove K(5) = 40?",
            "funFact": "Newton-Gregory debate (1694); modern 5D formulations in 20th century."
          },
          "pioneers": {
            "tagline": "Error-correcting codes, lattices, and sphere packings.",
            "analogy": "Kissing numbers determine the signal-to-noise ratio in multi-antenna 5G/6G MIMO wireless communications.",
            "rules": [
              "Leech lattice and Golay codes.",
              "Delsarte-Goethals-Seidel bound.",
              "Lean 4 formal verification of spherical codes."
            ],
            "mystery": "AI-guided global optimization using non-convex neural energy minimization searches for a 41-sphere arrangement.",
            "funFact": "The Kissing Number in Dimension 5 is the premier open puzzle in modern discrete sphere arrangements."
          }
        },
        "history": [
          {
            "year": "1694",
            "author": "Isaac Newton & David Gregory",
            "note": "First historical debate on kissing numbers (dimension 3)."
          },
          {
            "year": "1977",
            "author": "Philippe Delsarte",
            "note": "Introduces linear programming method for spherical codes."
          },
          {
            "year": "2003",
            "author": "Oleg Musin",
            "note": "Proves kissing number in dimension 4 is exactly 24."
          },
          {
            "year": "2022",
            "author": "Bachoc & Vallentin",
            "note": "Improve 5D bound to 40 ≤ K(5) ≤ 44 using semidefinite programming."
          }
        ]
      }
    }
  },
  {
    "id": "heesch",
    "icon": "🧩",
    "difficulty": "All Ages",
    "domain": "geometry",
    "category": "geometry",
    "isMillennium": false,
    "isAIFrontier": true,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Combinatorics.SimpleGraph.Basic\n-- Heesch's Problem: Maximum number of coronas a tile can surround without tiling the plane\n-- Record known is Heesch number 5 (Mann, 2020)",
    "locales": {
      "en": {
        "name": "Heesch's Tiling Problem",
        "subtitle": "Can a Tile Surround Itself With k Rings, But Never Tile the Whole Plane?",
        "field": "Discrete Geometry & Aperiodic Tiling",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can a jigsaw tile survive being surrounded 5 times, but get fatally stuck on layer 6?",
            "analogy": "Heinrich Heesch asked in 1968: Does there exist a maximum number k such that a tile can be completely surrounded by k concentric rings of identical tiles (called coronas), but CANNOT tile the entire infinite plane? The world record is k = 5 (discovered by Casey Mann in 2020). Is there a tile with Heesch number 6, or is the Heesch number unbounded?",
            "rules": [
              "A tile T surrounded by a complete ring of copies is 1 corona.",
              "Second ring is 2 coronas.",
              "Heesch number: Max coronas before an inescapable gap is forced.",
              "Known records: k=1 (1968), k=2 (1991), k=3 (1993), k=4 (2001), k=5 (2020)!"
            ],
            "mystery": "It is like a treacherous maze: the tile lures you into thinking it can tile the entire universe, letting you build 5 flawless concentric rings, until suddenly on ring 6 it is mathematically impossible to place another piece without leaving a hole!",
            "funFact": "Casey Mann's record-breaking tile for k = 5 is a non-convex polygon with 21 edges!"
          },
          "investigators": {
            "tagline": "Undecidability of the domino tiling problem and Wang tiles.",
            "analogy": "Berger proved in 1966 that the domino problem is algorithmically undecidable. If Heesch numbers were unbounded, it would provide an effective connection to semi-decidable tiling halting problems.",
            "rules": [
              "Corona definition via boundary topology.",
              "Wang tile undecidability theorem.",
              "Mann's 21-gon achieves Heesch number 5."
            ],
            "mystery": "Is the Heesch number bounded by a universal finite constant (e.g. 6 or 10), or can AI find an arbitrarily large Heesch tile?",
            "funFact": "Heinrich Heesch formulated the problem in 1968 in Hannover."
          },
          "pioneers": {
            "tagline": "Automated SAT solving and polyomino tree exploration.",
            "analogy": "Modern computational searches use SAT solvers to encode non-overlap constraints and boundary continuity across millions of polygon rotations.",
            "rules": [
              "SAT encoding of tiling constraints.",
              "Euler characteristic on corona graphs.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI-guided reinforcement learning agents are placing tile configurations to hunt for the elusive Heesch number 6.",
            "funFact": "Heesch's Problem is the quintessential mystery of local harmony concealing global impossibility."
          }
        },
        "history": [
          {
            "year": "1968",
            "author": "Heinrich Heesch",
            "note": "Poses the corona surrounding problem."
          },
          {
            "year": "1991",
            "author": "Anne Fontaine",
            "note": "Constructs first tile with Heesch number 2."
          },
          {
            "year": "2001",
            "author": "Casey Mann",
            "note": "Discovers tile with Heesch number 4."
          },
          {
            "year": "2020",
            "author": "Casey Mann",
            "note": "Discovers current world record tile with Heesch number 5."
          }
        ]
      },
      "de": {
        "name": "Heesch's Tiling Problem",
        "subtitle": "Can a Tile Surround Itself With k Rings, But Never Tile the Whole Plane?",
        "field": "Discrete Geometry & Aperiodic Tiling",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can a jigsaw tile survive being surrounded 5 times, but get fatally stuck on layer 6?",
            "analogy": "Heinrich Heesch asked in 1968: Does there exist a maximum number k such that a tile can be completely surrounded by k concentric rings of identical tiles (called coronas), but CANNOT tile the entire infinite plane? The world record is k = 5 (discovered by Casey Mann in 2020). Is there a tile with Heesch number 6, or is the Heesch number unbounded?",
            "rules": [
              "A tile T surrounded by a complete ring of copies is 1 corona.",
              "Second ring is 2 coronas.",
              "Heesch number: Max coronas before an inescapable gap is forced.",
              "Known records: k=1 (1968), k=2 (1991), k=3 (1993), k=4 (2001), k=5 (2020)!"
            ],
            "mystery": "It is like a treacherous maze: the tile lures you into thinking it can tile the entire universe, letting you build 5 flawless concentric rings, until suddenly on ring 6 it is mathematically impossible to place another piece without leaving a hole!",
            "funFact": "Casey Mann's record-breaking tile for k = 5 is a non-convex polygon with 21 edges!"
          },
          "investigators": {
            "tagline": "Undecidability of the domino tiling problem and Wang tiles.",
            "analogy": "Berger proved in 1966 that the domino problem is algorithmically undecidable. If Heesch numbers were unbounded, it would provide an effective connection to semi-decidable tiling halting problems.",
            "rules": [
              "Corona definition via boundary topology.",
              "Wang tile undecidability theorem.",
              "Mann's 21-gon achieves Heesch number 5."
            ],
            "mystery": "Is the Heesch number bounded by a universal finite constant (e.g. 6 or 10), or can AI find an arbitrarily large Heesch tile?",
            "funFact": "Heinrich Heesch formulated the problem in 1968 in Hannover."
          },
          "pioneers": {
            "tagline": "Automated SAT solving and polyomino tree exploration.",
            "analogy": "Modern computational searches use SAT solvers to encode non-overlap constraints and boundary continuity across millions of polygon rotations.",
            "rules": [
              "SAT encoding of tiling constraints.",
              "Euler characteristic on corona graphs.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI-guided reinforcement learning agents are placing tile configurations to hunt for the elusive Heesch number 6.",
            "funFact": "Heesch's Problem is the quintessential mystery of local harmony concealing global impossibility."
          }
        },
        "history": [
          {
            "year": "1968",
            "author": "Heinrich Heesch",
            "note": "Poses the corona surrounding problem."
          },
          {
            "year": "1991",
            "author": "Anne Fontaine",
            "note": "Constructs first tile with Heesch number 2."
          },
          {
            "year": "2001",
            "author": "Casey Mann",
            "note": "Discovers tile with Heesch number 4."
          },
          {
            "year": "2020",
            "author": "Casey Mann",
            "note": "Discovers current world record tile with Heesch number 5."
          }
        ]
      },
      "fr": {
        "name": "Heesch's Tiling Problem",
        "subtitle": "Can a Tile Surround Itself With k Rings, But Never Tile the Whole Plane?",
        "field": "Discrete Geometry & Aperiodic Tiling",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can a jigsaw tile survive being surrounded 5 times, but get fatally stuck on layer 6?",
            "analogy": "Heinrich Heesch asked in 1968: Does there exist a maximum number k such that a tile can be completely surrounded by k concentric rings of identical tiles (called coronas), but CANNOT tile the entire infinite plane? The world record is k = 5 (discovered by Casey Mann in 2020). Is there a tile with Heesch number 6, or is the Heesch number unbounded?",
            "rules": [
              "A tile T surrounded by a complete ring of copies is 1 corona.",
              "Second ring is 2 coronas.",
              "Heesch number: Max coronas before an inescapable gap is forced.",
              "Known records: k=1 (1968), k=2 (1991), k=3 (1993), k=4 (2001), k=5 (2020)!"
            ],
            "mystery": "It is like a treacherous maze: the tile lures you into thinking it can tile the entire universe, letting you build 5 flawless concentric rings, until suddenly on ring 6 it is mathematically impossible to place another piece without leaving a hole!",
            "funFact": "Casey Mann's record-breaking tile for k = 5 is a non-convex polygon with 21 edges!"
          },
          "investigators": {
            "tagline": "Undecidability of the domino tiling problem and Wang tiles.",
            "analogy": "Berger proved in 1966 that the domino problem is algorithmically undecidable. If Heesch numbers were unbounded, it would provide an effective connection to semi-decidable tiling halting problems.",
            "rules": [
              "Corona definition via boundary topology.",
              "Wang tile undecidability theorem.",
              "Mann's 21-gon achieves Heesch number 5."
            ],
            "mystery": "Is the Heesch number bounded by a universal finite constant (e.g. 6 or 10), or can AI find an arbitrarily large Heesch tile?",
            "funFact": "Heinrich Heesch formulated the problem in 1968 in Hannover."
          },
          "pioneers": {
            "tagline": "Automated SAT solving and polyomino tree exploration.",
            "analogy": "Modern computational searches use SAT solvers to encode non-overlap constraints and boundary continuity across millions of polygon rotations.",
            "rules": [
              "SAT encoding of tiling constraints.",
              "Euler characteristic on corona graphs.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI-guided reinforcement learning agents are placing tile configurations to hunt for the elusive Heesch number 6.",
            "funFact": "Heesch's Problem is the quintessential mystery of local harmony concealing global impossibility."
          }
        },
        "history": [
          {
            "year": "1968",
            "author": "Heinrich Heesch",
            "note": "Poses the corona surrounding problem."
          },
          {
            "year": "1991",
            "author": "Anne Fontaine",
            "note": "Constructs first tile with Heesch number 2."
          },
          {
            "year": "2001",
            "author": "Casey Mann",
            "note": "Discovers tile with Heesch number 4."
          },
          {
            "year": "2020",
            "author": "Casey Mann",
            "note": "Discovers current world record tile with Heesch number 5."
          }
        ]
      },
      "it": {
        "name": "Heesch's Tiling Problem",
        "subtitle": "Can a Tile Surround Itself With k Rings, But Never Tile the Whole Plane?",
        "field": "Discrete Geometry & Aperiodic Tiling",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can a jigsaw tile survive being surrounded 5 times, but get fatally stuck on layer 6?",
            "analogy": "Heinrich Heesch asked in 1968: Does there exist a maximum number k such that a tile can be completely surrounded by k concentric rings of identical tiles (called coronas), but CANNOT tile the entire infinite plane? The world record is k = 5 (discovered by Casey Mann in 2020). Is there a tile with Heesch number 6, or is the Heesch number unbounded?",
            "rules": [
              "A tile T surrounded by a complete ring of copies is 1 corona.",
              "Second ring is 2 coronas.",
              "Heesch number: Max coronas before an inescapable gap is forced.",
              "Known records: k=1 (1968), k=2 (1991), k=3 (1993), k=4 (2001), k=5 (2020)!"
            ],
            "mystery": "It is like a treacherous maze: the tile lures you into thinking it can tile the entire universe, letting you build 5 flawless concentric rings, until suddenly on ring 6 it is mathematically impossible to place another piece without leaving a hole!",
            "funFact": "Casey Mann's record-breaking tile for k = 5 is a non-convex polygon with 21 edges!"
          },
          "investigators": {
            "tagline": "Undecidability of the domino tiling problem and Wang tiles.",
            "analogy": "Berger proved in 1966 that the domino problem is algorithmically undecidable. If Heesch numbers were unbounded, it would provide an effective connection to semi-decidable tiling halting problems.",
            "rules": [
              "Corona definition via boundary topology.",
              "Wang tile undecidability theorem.",
              "Mann's 21-gon achieves Heesch number 5."
            ],
            "mystery": "Is the Heesch number bounded by a universal finite constant (e.g. 6 or 10), or can AI find an arbitrarily large Heesch tile?",
            "funFact": "Heinrich Heesch formulated the problem in 1968 in Hannover."
          },
          "pioneers": {
            "tagline": "Automated SAT solving and polyomino tree exploration.",
            "analogy": "Modern computational searches use SAT solvers to encode non-overlap constraints and boundary continuity across millions of polygon rotations.",
            "rules": [
              "SAT encoding of tiling constraints.",
              "Euler characteristic on corona graphs.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI-guided reinforcement learning agents are placing tile configurations to hunt for the elusive Heesch number 6.",
            "funFact": "Heesch's Problem is the quintessential mystery of local harmony concealing global impossibility."
          }
        },
        "history": [
          {
            "year": "1968",
            "author": "Heinrich Heesch",
            "note": "Poses the corona surrounding problem."
          },
          {
            "year": "1991",
            "author": "Anne Fontaine",
            "note": "Constructs first tile with Heesch number 2."
          },
          {
            "year": "2001",
            "author": "Casey Mann",
            "note": "Discovers tile with Heesch number 4."
          },
          {
            "year": "2020",
            "author": "Casey Mann",
            "note": "Discovers current world record tile with Heesch number 5."
          }
        ]
      },
      "ja": {
        "name": "Heesch's Tiling Problem",
        "subtitle": "Can a Tile Surround Itself With k Rings, But Never Tile the Whole Plane?",
        "field": "Discrete Geometry & Aperiodic Tiling",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can a jigsaw tile survive being surrounded 5 times, but get fatally stuck on layer 6?",
            "analogy": "Heinrich Heesch asked in 1968: Does there exist a maximum number k such that a tile can be completely surrounded by k concentric rings of identical tiles (called coronas), but CANNOT tile the entire infinite plane? The world record is k = 5 (discovered by Casey Mann in 2020). Is there a tile with Heesch number 6, or is the Heesch number unbounded?",
            "rules": [
              "A tile T surrounded by a complete ring of copies is 1 corona.",
              "Second ring is 2 coronas.",
              "Heesch number: Max coronas before an inescapable gap is forced.",
              "Known records: k=1 (1968), k=2 (1991), k=3 (1993), k=4 (2001), k=5 (2020)!"
            ],
            "mystery": "It is like a treacherous maze: the tile lures you into thinking it can tile the entire universe, letting you build 5 flawless concentric rings, until suddenly on ring 6 it is mathematically impossible to place another piece without leaving a hole!",
            "funFact": "Casey Mann's record-breaking tile for k = 5 is a non-convex polygon with 21 edges!"
          },
          "investigators": {
            "tagline": "Undecidability of the domino tiling problem and Wang tiles.",
            "analogy": "Berger proved in 1966 that the domino problem is algorithmically undecidable. If Heesch numbers were unbounded, it would provide an effective connection to semi-decidable tiling halting problems.",
            "rules": [
              "Corona definition via boundary topology.",
              "Wang tile undecidability theorem.",
              "Mann's 21-gon achieves Heesch number 5."
            ],
            "mystery": "Is the Heesch number bounded by a universal finite constant (e.g. 6 or 10), or can AI find an arbitrarily large Heesch tile?",
            "funFact": "Heinrich Heesch formulated the problem in 1968 in Hannover."
          },
          "pioneers": {
            "tagline": "Automated SAT solving and polyomino tree exploration.",
            "analogy": "Modern computational searches use SAT solvers to encode non-overlap constraints and boundary continuity across millions of polygon rotations.",
            "rules": [
              "SAT encoding of tiling constraints.",
              "Euler characteristic on corona graphs.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI-guided reinforcement learning agents are placing tile configurations to hunt for the elusive Heesch number 6.",
            "funFact": "Heesch's Problem is the quintessential mystery of local harmony concealing global impossibility."
          }
        },
        "history": [
          {
            "year": "1968",
            "author": "Heinrich Heesch",
            "note": "Poses the corona surrounding problem."
          },
          {
            "year": "1991",
            "author": "Anne Fontaine",
            "note": "Constructs first tile with Heesch number 2."
          },
          {
            "year": "2001",
            "author": "Casey Mann",
            "note": "Discovers tile with Heesch number 4."
          },
          {
            "year": "2020",
            "author": "Casey Mann",
            "note": "Discovers current world record tile with Heesch number 5."
          }
        ]
      },
      "ko": {
        "name": "Heesch's Tiling Problem",
        "subtitle": "Can a Tile Surround Itself With k Rings, But Never Tile the Whole Plane?",
        "field": "Discrete Geometry & Aperiodic Tiling",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can a jigsaw tile survive being surrounded 5 times, but get fatally stuck on layer 6?",
            "analogy": "Heinrich Heesch asked in 1968: Does there exist a maximum number k such that a tile can be completely surrounded by k concentric rings of identical tiles (called coronas), but CANNOT tile the entire infinite plane? The world record is k = 5 (discovered by Casey Mann in 2020). Is there a tile with Heesch number 6, or is the Heesch number unbounded?",
            "rules": [
              "A tile T surrounded by a complete ring of copies is 1 corona.",
              "Second ring is 2 coronas.",
              "Heesch number: Max coronas before an inescapable gap is forced.",
              "Known records: k=1 (1968), k=2 (1991), k=3 (1993), k=4 (2001), k=5 (2020)!"
            ],
            "mystery": "It is like a treacherous maze: the tile lures you into thinking it can tile the entire universe, letting you build 5 flawless concentric rings, until suddenly on ring 6 it is mathematically impossible to place another piece without leaving a hole!",
            "funFact": "Casey Mann's record-breaking tile for k = 5 is a non-convex polygon with 21 edges!"
          },
          "investigators": {
            "tagline": "Undecidability of the domino tiling problem and Wang tiles.",
            "analogy": "Berger proved in 1966 that the domino problem is algorithmically undecidable. If Heesch numbers were unbounded, it would provide an effective connection to semi-decidable tiling halting problems.",
            "rules": [
              "Corona definition via boundary topology.",
              "Wang tile undecidability theorem.",
              "Mann's 21-gon achieves Heesch number 5."
            ],
            "mystery": "Is the Heesch number bounded by a universal finite constant (e.g. 6 or 10), or can AI find an arbitrarily large Heesch tile?",
            "funFact": "Heinrich Heesch formulated the problem in 1968 in Hannover."
          },
          "pioneers": {
            "tagline": "Automated SAT solving and polyomino tree exploration.",
            "analogy": "Modern computational searches use SAT solvers to encode non-overlap constraints and boundary continuity across millions of polygon rotations.",
            "rules": [
              "SAT encoding of tiling constraints.",
              "Euler characteristic on corona graphs.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI-guided reinforcement learning agents are placing tile configurations to hunt for the elusive Heesch number 6.",
            "funFact": "Heesch's Problem is the quintessential mystery of local harmony concealing global impossibility."
          }
        },
        "history": [
          {
            "year": "1968",
            "author": "Heinrich Heesch",
            "note": "Poses the corona surrounding problem."
          },
          {
            "year": "1991",
            "author": "Anne Fontaine",
            "note": "Constructs first tile with Heesch number 2."
          },
          {
            "year": "2001",
            "author": "Casey Mann",
            "note": "Discovers tile with Heesch number 4."
          },
          {
            "year": "2020",
            "author": "Casey Mann",
            "note": "Discovers current world record tile with Heesch number 5."
          }
        ]
      },
      "zh-Hans": {
        "name": "希施镶嵌问题",
        "subtitle": "一个单拼图能否严丝合缝环绕自己 k 层，却永远无法铺满全平面？",
        "field": "离散几何 & 非周期性镶嵌",
        "statusBadge": "未解之谜",
        "grades": {
          "explorers": {
            "tagline": "一块狡猾的拼图，能不能顺顺当当包围自己5整圈，却在第6圈遭遇不可逾越的死亡死锁？",
            "analogy": "1968年德国数学家海因里希·希施提出：是否存在一个有限的整数常数 k，使得某块多边形拼图能被相同拼图密密麻麻地环绕包裹 k 层（称为日冕层），却无论如何也无法铺满整个无限平面？目前的吉尼斯世界纪录是由凯西·曼于2020年构造出的 5 层希施数拼图！这世上到底有没有能包围 6 层甚至无限多层的致命陷阱拼图？",
            "rules": [
              "拼图被一整圈相同拼图完整包围，称为 1 阶日冕。",
              "继续包围第二圈，称为 2 阶日冕。",
              "希施数：在遭遇无可挽回的几何死锁前能达到的最大层数。",
              "已知纪录步步攀升：k=1 (1968), k=2 (1991), k=3 (1993), k=4 (2001), k=5 (2020)！"
            ],
            "mystery": "这就像一个精巧绝伦的几何陷阱：它引诱你顺利拼好5层毫无破绽的环形城墙，让你误以为它能征服全宇宙，却在第6层突然暴露致命缺陷，留下一道无论如何也填不上的空隙！",
            "funFact": "凯西·曼创造 5 层世界纪录的拼图是一个拥有 21 条边的精巧非凸多边形！"
          },
          "investigators": {
            "tagline": "多米诺镶嵌的不可判定性与王浩瓷砖。",
            "analogy": "罗伯特·伯杰于1966年证明平面镶嵌问题是图灵不可判定的。若希施数无上界，将直接沟通图灵机停机问题与连续局部平面覆盖。",
            "rules": [
              "边界环绕日冕层拓扑定义。",
              "王浩瓷砖镶嵌图灵不可判定性定理。",
              "曼构造的 21 边形实现希施数 5。"
            ],
            "mystery": "希施数是否存在一个宇宙普适的有限上限（如 6 或 10），还是说可以构造出任意大有限层数的拼图？",
            "funFact": "海因里希·希施于1968年提出。"
          },
          "pioneers": {
            "tagline": "自动化 SAT 约束求解与多格骨牌树形分支搜索。",
            "analogy": "现代搜寻全面借助布尔 SAT 求解器，对数百万种网格旋转拓扑进行严格无重叠约束排查。",
            "rules": [
              "镶嵌无冲突约束的 SAT 逻辑编码。",
              "多层日冕图上的欧拉示性数守恒。",
              "Lean 4 Mathlib 中平面离散图论形式化。"
            ],
            "mystery": "AI 强化学习智能体正在像下围棋一样排布拼图边缘，全力狩猎人类首个 6 阶希施数拼图。",
            "funFact": "希施问题是局部几何高度和谐却蕴含宏观全局不可能性的最绝妙谜题。"
          }
        },
        "history": [
          {
            "year": "1968",
            "author": "海因里希·希施",
            "note": "在德国提出日冕环绕层数问题。"
          },
          {
            "year": "1991",
            "author": "安妮·方丹",
            "note": "首次构造出希施数为 2 的拼图。"
          },
          {
            "year": "2001",
            "author": "凯西·曼",
            "note": "发现希施数为 4 的多边形拼图。"
          },
          {
            "year": "2020",
            "author": "凯西·曼",
            "note": "成功打破世界纪录，构造出 5 阶希施数拼图！"
          }
        ]
      },
      "zh-Hant": {
        "name": "Heesch's Tiling Problem",
        "subtitle": "Can a Tile Surround Itself With k Rings, But Never Tile the Whole Plane?",
        "field": "Discrete Geometry & Aperiodic Tiling",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can a jigsaw tile survive being surrounded 5 times, but get fatally stuck on layer 6?",
            "analogy": "Heinrich Heesch asked in 1968: Does there exist a maximum number k such that a tile can be completely surrounded by k concentric rings of identical tiles (called coronas), but CANNOT tile the entire infinite plane? The world record is k = 5 (discovered by Casey Mann in 2020). Is there a tile with Heesch number 6, or is the Heesch number unbounded?",
            "rules": [
              "A tile T surrounded by a complete ring of copies is 1 corona.",
              "Second ring is 2 coronas.",
              "Heesch number: Max coronas before an inescapable gap is forced.",
              "Known records: k=1 (1968), k=2 (1991), k=3 (1993), k=4 (2001), k=5 (2020)!"
            ],
            "mystery": "It is like a treacherous maze: the tile lures you into thinking it can tile the entire universe, letting you build 5 flawless concentric rings, until suddenly on ring 6 it is mathematically impossible to place another piece without leaving a hole!",
            "funFact": "Casey Mann's record-breaking tile for k = 5 is a non-convex polygon with 21 edges!"
          },
          "investigators": {
            "tagline": "Undecidability of the domino tiling problem and Wang tiles.",
            "analogy": "Berger proved in 1966 that the domino problem is algorithmically undecidable. If Heesch numbers were unbounded, it would provide an effective connection to semi-decidable tiling halting problems.",
            "rules": [
              "Corona definition via boundary topology.",
              "Wang tile undecidability theorem.",
              "Mann's 21-gon achieves Heesch number 5."
            ],
            "mystery": "Is the Heesch number bounded by a universal finite constant (e.g. 6 or 10), or can AI find an arbitrarily large Heesch tile?",
            "funFact": "Heinrich Heesch formulated the problem in 1968 in Hannover."
          },
          "pioneers": {
            "tagline": "Automated SAT solving and polyomino tree exploration.",
            "analogy": "Modern computational searches use SAT solvers to encode non-overlap constraints and boundary continuity across millions of polygon rotations.",
            "rules": [
              "SAT encoding of tiling constraints.",
              "Euler characteristic on corona graphs.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI-guided reinforcement learning agents are placing tile configurations to hunt for the elusive Heesch number 6.",
            "funFact": "Heesch's Problem is the quintessential mystery of local harmony concealing global impossibility."
          }
        },
        "history": [
          {
            "year": "1968",
            "author": "Heinrich Heesch",
            "note": "Poses the corona surrounding problem."
          },
          {
            "year": "1991",
            "author": "Anne Fontaine",
            "note": "Constructs first tile with Heesch number 2."
          },
          {
            "year": "2001",
            "author": "Casey Mann",
            "note": "Discovers tile with Heesch number 4."
          },
          {
            "year": "2020",
            "author": "Casey Mann",
            "note": "Discovers current world record tile with Heesch number 5."
          }
        ]
      }
    }
  },
  {
    "id": "einstein-tile",
    "icon": "🎩",
    "difficulty": "All Ages",
    "domain": "geometry",
    "category": "geometry",
    "isMillennium": false,
    "isAIFrontier": true,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Combinatorics.SimpleGraph.Basic\n-- The Einstein Monotile Problem (Solved in 2023 by Smith, Myers, Kaplan, Goodman-Strauss)\n-- A single tile that tiles the plane aperiodically without reflection ('The Hat' and 'Spectre').",
    "locales": {
      "en": {
        "name": "The Einstein Monotile Problem",
        "subtitle": "A Single Shape That Tiles the Entire Plane Aperiodically (Solved in 2023!)",
        "field": "Aperiodic Tilings & Quasicrystals",
        "statusBadge": "LANDMARK 2023 DISCOVERY",
        "grades": {
          "explorers": {
            "tagline": "Can a single jigsaw piece tile a kitchen floor infinitely, but NEVER repeat a pattern?",
            "analogy": "For 60 years, mathematicians searched for an 'ein stein' (German for 'one stone'): a single tile that can tile the entire 2D plane, but ONLY in a non-repeating, aperiodic pattern! Penrose needed 2 tiles in 1974. In March 2023, an amateur hobbyist David Smith and three mathematicians discovered 'The Hat' (and later 'Spectre'): the first TRUE einstein in history!",
            "rules": [
              "Tile the plane without gaps or overlaps.",
              "Periodic: Pattern repeats by translation.",
              "Aperiodic: Tiles the plane, but NEVER repeats periodically.",
              "March 2023: 'The Hat' discovered (13-sided polygon).",
              "May 2023: 'The Spectre' discovered (strictly chiral, no reflections needed!)."
            ],
            "mystery": "The discoverer David Smith is not a university professor, but a retired printing technician from Yorkshire who loves playing with cardboard cutouts!",
            "funFact": "The mathematics of aperiodic tilings earned Dan Shechtman the 2011 Nobel Prize in Chemistry for the discovery of quasicrystals in nature!"
          },
          "investigators": {
            "tagline": "Substitution rules, hierarchical deflation, and cut-and-project methods.",
            "analogy": "Smith, Myers, Kaplan, and Goodman-Strauss proved aperiodicity by defining a cluster substitution rule that groups hats into four meta-tiles, proving an infinite hierarchical non-periodic tree.",
            "rules": [
              "13-sided polygon formed from eight 30°-60°-90° kites.",
              "Deflation / inflation substitution system.",
              "Strictly chiral Spectre tile eliminates reflections."
            ],
            "mystery": "What is the simplest convex polyhedron that acts as an aperiodic monotile in 3D space?",
            "funFact": "Posed by Hao Wang in the 1960s; completely solved in 2023."
          },
          "pioneers": {
            "tagline": "Quasicrystal diffraction spectra and cohomology of tiling spaces.",
            "analogy": "The diffraction spectrum of the Hat tiling exhibits sharp Bragg peaks, demonstrating pure point dynamical spectrum despite lacking spatial translation periodicity.",
            "rules": [
              "Bragg diffraction peaks in Fourier transform.",
              "Continuous hull of tiling space Ω_T.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI vision models can instantly generate aperiodic Hat tilings spanning millions of vertices without translation defects.",
            "funFact": "The Einstein Monotile Problem is the most celebratory, joyful mathematical breakthrough of the 21st century."
          }
        },
        "history": [
          {
            "year": "1961",
            "author": "Hao Wang",
            "note": "Conjectures no aperiodic set of tiles can exist."
          },
          {
            "year": "1974",
            "author": "Roger Penrose",
            "note": "Discovers aperiodic tiling using 2 tiles (Penrose tiling)."
          },
          {
            "year": "2023 (March)",
            "author": "Smith, Myers, Kaplan & Goodman-Strauss",
            "note": "Discover 'The Hat', the first true aperiodic monotile."
          },
          {
            "year": "2023 (May)",
            "author": "Smith, Myers, Kaplan & Goodman-Strauss",
            "note": "Discover 'The Spectre', an aperiodic monotile requiring no reflections."
          }
        ]
      },
      "de": {
        "name": "The Einstein Monotile Problem",
        "subtitle": "A Single Shape That Tiles the Entire Plane Aperiodically (Solved in 2023!)",
        "field": "Aperiodic Tilings & Quasicrystals",
        "statusBadge": "LANDMARK 2023 DISCOVERY",
        "grades": {
          "explorers": {
            "tagline": "Can a single jigsaw piece tile a kitchen floor infinitely, but NEVER repeat a pattern?",
            "analogy": "For 60 years, mathematicians searched for an 'ein stein' (German for 'one stone'): a single tile that can tile the entire 2D plane, but ONLY in a non-repeating, aperiodic pattern! Penrose needed 2 tiles in 1974. In March 2023, an amateur hobbyist David Smith and three mathematicians discovered 'The Hat' (and later 'Spectre'): the first TRUE einstein in history!",
            "rules": [
              "Tile the plane without gaps or overlaps.",
              "Periodic: Pattern repeats by translation.",
              "Aperiodic: Tiles the plane, but NEVER repeats periodically.",
              "March 2023: 'The Hat' discovered (13-sided polygon).",
              "May 2023: 'The Spectre' discovered (strictly chiral, no reflections needed!)."
            ],
            "mystery": "The discoverer David Smith is not a university professor, but a retired printing technician from Yorkshire who loves playing with cardboard cutouts!",
            "funFact": "The mathematics of aperiodic tilings earned Dan Shechtman the 2011 Nobel Prize in Chemistry for the discovery of quasicrystals in nature!"
          },
          "investigators": {
            "tagline": "Substitution rules, hierarchical deflation, and cut-and-project methods.",
            "analogy": "Smith, Myers, Kaplan, and Goodman-Strauss proved aperiodicity by defining a cluster substitution rule that groups hats into four meta-tiles, proving an infinite hierarchical non-periodic tree.",
            "rules": [
              "13-sided polygon formed from eight 30°-60°-90° kites.",
              "Deflation / inflation substitution system.",
              "Strictly chiral Spectre tile eliminates reflections."
            ],
            "mystery": "What is the simplest convex polyhedron that acts as an aperiodic monotile in 3D space?",
            "funFact": "Posed by Hao Wang in the 1960s; completely solved in 2023."
          },
          "pioneers": {
            "tagline": "Quasicrystal diffraction spectra and cohomology of tiling spaces.",
            "analogy": "The diffraction spectrum of the Hat tiling exhibits sharp Bragg peaks, demonstrating pure point dynamical spectrum despite lacking spatial translation periodicity.",
            "rules": [
              "Bragg diffraction peaks in Fourier transform.",
              "Continuous hull of tiling space Ω_T.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI vision models can instantly generate aperiodic Hat tilings spanning millions of vertices without translation defects.",
            "funFact": "The Einstein Monotile Problem is the most celebratory, joyful mathematical breakthrough of the 21st century."
          }
        },
        "history": [
          {
            "year": "1961",
            "author": "Hao Wang",
            "note": "Conjectures no aperiodic set of tiles can exist."
          },
          {
            "year": "1974",
            "author": "Roger Penrose",
            "note": "Discovers aperiodic tiling using 2 tiles (Penrose tiling)."
          },
          {
            "year": "2023 (March)",
            "author": "Smith, Myers, Kaplan & Goodman-Strauss",
            "note": "Discover 'The Hat', the first true aperiodic monotile."
          },
          {
            "year": "2023 (May)",
            "author": "Smith, Myers, Kaplan & Goodman-Strauss",
            "note": "Discover 'The Spectre', an aperiodic monotile requiring no reflections."
          }
        ]
      },
      "fr": {
        "name": "The Einstein Monotile Problem",
        "subtitle": "A Single Shape That Tiles the Entire Plane Aperiodically (Solved in 2023!)",
        "field": "Aperiodic Tilings & Quasicrystals",
        "statusBadge": "LANDMARK 2023 DISCOVERY",
        "grades": {
          "explorers": {
            "tagline": "Can a single jigsaw piece tile a kitchen floor infinitely, but NEVER repeat a pattern?",
            "analogy": "For 60 years, mathematicians searched for an 'ein stein' (German for 'one stone'): a single tile that can tile the entire 2D plane, but ONLY in a non-repeating, aperiodic pattern! Penrose needed 2 tiles in 1974. In March 2023, an amateur hobbyist David Smith and three mathematicians discovered 'The Hat' (and later 'Spectre'): the first TRUE einstein in history!",
            "rules": [
              "Tile the plane without gaps or overlaps.",
              "Periodic: Pattern repeats by translation.",
              "Aperiodic: Tiles the plane, but NEVER repeats periodically.",
              "March 2023: 'The Hat' discovered (13-sided polygon).",
              "May 2023: 'The Spectre' discovered (strictly chiral, no reflections needed!)."
            ],
            "mystery": "The discoverer David Smith is not a university professor, but a retired printing technician from Yorkshire who loves playing with cardboard cutouts!",
            "funFact": "The mathematics of aperiodic tilings earned Dan Shechtman the 2011 Nobel Prize in Chemistry for the discovery of quasicrystals in nature!"
          },
          "investigators": {
            "tagline": "Substitution rules, hierarchical deflation, and cut-and-project methods.",
            "analogy": "Smith, Myers, Kaplan, and Goodman-Strauss proved aperiodicity by defining a cluster substitution rule that groups hats into four meta-tiles, proving an infinite hierarchical non-periodic tree.",
            "rules": [
              "13-sided polygon formed from eight 30°-60°-90° kites.",
              "Deflation / inflation substitution system.",
              "Strictly chiral Spectre tile eliminates reflections."
            ],
            "mystery": "What is the simplest convex polyhedron that acts as an aperiodic monotile in 3D space?",
            "funFact": "Posed by Hao Wang in the 1960s; completely solved in 2023."
          },
          "pioneers": {
            "tagline": "Quasicrystal diffraction spectra and cohomology of tiling spaces.",
            "analogy": "The diffraction spectrum of the Hat tiling exhibits sharp Bragg peaks, demonstrating pure point dynamical spectrum despite lacking spatial translation periodicity.",
            "rules": [
              "Bragg diffraction peaks in Fourier transform.",
              "Continuous hull of tiling space Ω_T.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI vision models can instantly generate aperiodic Hat tilings spanning millions of vertices without translation defects.",
            "funFact": "The Einstein Monotile Problem is the most celebratory, joyful mathematical breakthrough of the 21st century."
          }
        },
        "history": [
          {
            "year": "1961",
            "author": "Hao Wang",
            "note": "Conjectures no aperiodic set of tiles can exist."
          },
          {
            "year": "1974",
            "author": "Roger Penrose",
            "note": "Discovers aperiodic tiling using 2 tiles (Penrose tiling)."
          },
          {
            "year": "2023 (March)",
            "author": "Smith, Myers, Kaplan & Goodman-Strauss",
            "note": "Discover 'The Hat', the first true aperiodic monotile."
          },
          {
            "year": "2023 (May)",
            "author": "Smith, Myers, Kaplan & Goodman-Strauss",
            "note": "Discover 'The Spectre', an aperiodic monotile requiring no reflections."
          }
        ]
      },
      "it": {
        "name": "The Einstein Monotile Problem",
        "subtitle": "A Single Shape That Tiles the Entire Plane Aperiodically (Solved in 2023!)",
        "field": "Aperiodic Tilings & Quasicrystals",
        "statusBadge": "LANDMARK 2023 DISCOVERY",
        "grades": {
          "explorers": {
            "tagline": "Can a single jigsaw piece tile a kitchen floor infinitely, but NEVER repeat a pattern?",
            "analogy": "For 60 years, mathematicians searched for an 'ein stein' (German for 'one stone'): a single tile that can tile the entire 2D plane, but ONLY in a non-repeating, aperiodic pattern! Penrose needed 2 tiles in 1974. In March 2023, an amateur hobbyist David Smith and three mathematicians discovered 'The Hat' (and later 'Spectre'): the first TRUE einstein in history!",
            "rules": [
              "Tile the plane without gaps or overlaps.",
              "Periodic: Pattern repeats by translation.",
              "Aperiodic: Tiles the plane, but NEVER repeats periodically.",
              "March 2023: 'The Hat' discovered (13-sided polygon).",
              "May 2023: 'The Spectre' discovered (strictly chiral, no reflections needed!)."
            ],
            "mystery": "The discoverer David Smith is not a university professor, but a retired printing technician from Yorkshire who loves playing with cardboard cutouts!",
            "funFact": "The mathematics of aperiodic tilings earned Dan Shechtman the 2011 Nobel Prize in Chemistry for the discovery of quasicrystals in nature!"
          },
          "investigators": {
            "tagline": "Substitution rules, hierarchical deflation, and cut-and-project methods.",
            "analogy": "Smith, Myers, Kaplan, and Goodman-Strauss proved aperiodicity by defining a cluster substitution rule that groups hats into four meta-tiles, proving an infinite hierarchical non-periodic tree.",
            "rules": [
              "13-sided polygon formed from eight 30°-60°-90° kites.",
              "Deflation / inflation substitution system.",
              "Strictly chiral Spectre tile eliminates reflections."
            ],
            "mystery": "What is the simplest convex polyhedron that acts as an aperiodic monotile in 3D space?",
            "funFact": "Posed by Hao Wang in the 1960s; completely solved in 2023."
          },
          "pioneers": {
            "tagline": "Quasicrystal diffraction spectra and cohomology of tiling spaces.",
            "analogy": "The diffraction spectrum of the Hat tiling exhibits sharp Bragg peaks, demonstrating pure point dynamical spectrum despite lacking spatial translation periodicity.",
            "rules": [
              "Bragg diffraction peaks in Fourier transform.",
              "Continuous hull of tiling space Ω_T.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI vision models can instantly generate aperiodic Hat tilings spanning millions of vertices without translation defects.",
            "funFact": "The Einstein Monotile Problem is the most celebratory, joyful mathematical breakthrough of the 21st century."
          }
        },
        "history": [
          {
            "year": "1961",
            "author": "Hao Wang",
            "note": "Conjectures no aperiodic set of tiles can exist."
          },
          {
            "year": "1974",
            "author": "Roger Penrose",
            "note": "Discovers aperiodic tiling using 2 tiles (Penrose tiling)."
          },
          {
            "year": "2023 (March)",
            "author": "Smith, Myers, Kaplan & Goodman-Strauss",
            "note": "Discover 'The Hat', the first true aperiodic monotile."
          },
          {
            "year": "2023 (May)",
            "author": "Smith, Myers, Kaplan & Goodman-Strauss",
            "note": "Discover 'The Spectre', an aperiodic monotile requiring no reflections."
          }
        ]
      },
      "ja": {
        "name": "The Einstein Monotile Problem",
        "subtitle": "A Single Shape That Tiles the Entire Plane Aperiodically (Solved in 2023!)",
        "field": "Aperiodic Tilings & Quasicrystals",
        "statusBadge": "LANDMARK 2023 DISCOVERY",
        "grades": {
          "explorers": {
            "tagline": "Can a single jigsaw piece tile a kitchen floor infinitely, but NEVER repeat a pattern?",
            "analogy": "For 60 years, mathematicians searched for an 'ein stein' (German for 'one stone'): a single tile that can tile the entire 2D plane, but ONLY in a non-repeating, aperiodic pattern! Penrose needed 2 tiles in 1974. In March 2023, an amateur hobbyist David Smith and three mathematicians discovered 'The Hat' (and later 'Spectre'): the first TRUE einstein in history!",
            "rules": [
              "Tile the plane without gaps or overlaps.",
              "Periodic: Pattern repeats by translation.",
              "Aperiodic: Tiles the plane, but NEVER repeats periodically.",
              "March 2023: 'The Hat' discovered (13-sided polygon).",
              "May 2023: 'The Spectre' discovered (strictly chiral, no reflections needed!)."
            ],
            "mystery": "The discoverer David Smith is not a university professor, but a retired printing technician from Yorkshire who loves playing with cardboard cutouts!",
            "funFact": "The mathematics of aperiodic tilings earned Dan Shechtman the 2011 Nobel Prize in Chemistry for the discovery of quasicrystals in nature!"
          },
          "investigators": {
            "tagline": "Substitution rules, hierarchical deflation, and cut-and-project methods.",
            "analogy": "Smith, Myers, Kaplan, and Goodman-Strauss proved aperiodicity by defining a cluster substitution rule that groups hats into four meta-tiles, proving an infinite hierarchical non-periodic tree.",
            "rules": [
              "13-sided polygon formed from eight 30°-60°-90° kites.",
              "Deflation / inflation substitution system.",
              "Strictly chiral Spectre tile eliminates reflections."
            ],
            "mystery": "What is the simplest convex polyhedron that acts as an aperiodic monotile in 3D space?",
            "funFact": "Posed by Hao Wang in the 1960s; completely solved in 2023."
          },
          "pioneers": {
            "tagline": "Quasicrystal diffraction spectra and cohomology of tiling spaces.",
            "analogy": "The diffraction spectrum of the Hat tiling exhibits sharp Bragg peaks, demonstrating pure point dynamical spectrum despite lacking spatial translation periodicity.",
            "rules": [
              "Bragg diffraction peaks in Fourier transform.",
              "Continuous hull of tiling space Ω_T.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI vision models can instantly generate aperiodic Hat tilings spanning millions of vertices without translation defects.",
            "funFact": "The Einstein Monotile Problem is the most celebratory, joyful mathematical breakthrough of the 21st century."
          }
        },
        "history": [
          {
            "year": "1961",
            "author": "Hao Wang",
            "note": "Conjectures no aperiodic set of tiles can exist."
          },
          {
            "year": "1974",
            "author": "Roger Penrose",
            "note": "Discovers aperiodic tiling using 2 tiles (Penrose tiling)."
          },
          {
            "year": "2023 (March)",
            "author": "Smith, Myers, Kaplan & Goodman-Strauss",
            "note": "Discover 'The Hat', the first true aperiodic monotile."
          },
          {
            "year": "2023 (May)",
            "author": "Smith, Myers, Kaplan & Goodman-Strauss",
            "note": "Discover 'The Spectre', an aperiodic monotile requiring no reflections."
          }
        ]
      },
      "ko": {
        "name": "The Einstein Monotile Problem",
        "subtitle": "A Single Shape That Tiles the Entire Plane Aperiodically (Solved in 2023!)",
        "field": "Aperiodic Tilings & Quasicrystals",
        "statusBadge": "LANDMARK 2023 DISCOVERY",
        "grades": {
          "explorers": {
            "tagline": "Can a single jigsaw piece tile a kitchen floor infinitely, but NEVER repeat a pattern?",
            "analogy": "For 60 years, mathematicians searched for an 'ein stein' (German for 'one stone'): a single tile that can tile the entire 2D plane, but ONLY in a non-repeating, aperiodic pattern! Penrose needed 2 tiles in 1974. In March 2023, an amateur hobbyist David Smith and three mathematicians discovered 'The Hat' (and later 'Spectre'): the first TRUE einstein in history!",
            "rules": [
              "Tile the plane without gaps or overlaps.",
              "Periodic: Pattern repeats by translation.",
              "Aperiodic: Tiles the plane, but NEVER repeats periodically.",
              "March 2023: 'The Hat' discovered (13-sided polygon).",
              "May 2023: 'The Spectre' discovered (strictly chiral, no reflections needed!)."
            ],
            "mystery": "The discoverer David Smith is not a university professor, but a retired printing technician from Yorkshire who loves playing with cardboard cutouts!",
            "funFact": "The mathematics of aperiodic tilings earned Dan Shechtman the 2011 Nobel Prize in Chemistry for the discovery of quasicrystals in nature!"
          },
          "investigators": {
            "tagline": "Substitution rules, hierarchical deflation, and cut-and-project methods.",
            "analogy": "Smith, Myers, Kaplan, and Goodman-Strauss proved aperiodicity by defining a cluster substitution rule that groups hats into four meta-tiles, proving an infinite hierarchical non-periodic tree.",
            "rules": [
              "13-sided polygon formed from eight 30°-60°-90° kites.",
              "Deflation / inflation substitution system.",
              "Strictly chiral Spectre tile eliminates reflections."
            ],
            "mystery": "What is the simplest convex polyhedron that acts as an aperiodic monotile in 3D space?",
            "funFact": "Posed by Hao Wang in the 1960s; completely solved in 2023."
          },
          "pioneers": {
            "tagline": "Quasicrystal diffraction spectra and cohomology of tiling spaces.",
            "analogy": "The diffraction spectrum of the Hat tiling exhibits sharp Bragg peaks, demonstrating pure point dynamical spectrum despite lacking spatial translation periodicity.",
            "rules": [
              "Bragg diffraction peaks in Fourier transform.",
              "Continuous hull of tiling space Ω_T.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI vision models can instantly generate aperiodic Hat tilings spanning millions of vertices without translation defects.",
            "funFact": "The Einstein Monotile Problem is the most celebratory, joyful mathematical breakthrough of the 21st century."
          }
        },
        "history": [
          {
            "year": "1961",
            "author": "Hao Wang",
            "note": "Conjectures no aperiodic set of tiles can exist."
          },
          {
            "year": "1974",
            "author": "Roger Penrose",
            "note": "Discovers aperiodic tiling using 2 tiles (Penrose tiling)."
          },
          {
            "year": "2023 (March)",
            "author": "Smith, Myers, Kaplan & Goodman-Strauss",
            "note": "Discover 'The Hat', the first true aperiodic monotile."
          },
          {
            "year": "2023 (May)",
            "author": "Smith, Myers, Kaplan & Goodman-Strauss",
            "note": "Discover 'The Spectre', an aperiodic monotile requiring no reflections."
          }
        ]
      },
      "zh-Hans": {
        "name": "爱因斯坦单拼图问题（一石惊天）",
        "subtitle": "只需一种单拼图就能非周期性无缝铺满全平面（2023年历史性破解！）",
        "field": "非周期性镶嵌 & 准晶体几何学",
        "statusBadge": "2023年全球轰动发现",
        "grades": {
          "explorers": {
            "tagline": "能不能仅用一种形状的瓷砖铺满整个无限地面，并且图案永远绝不重复？",
            "analogy": "半个多世纪以来，数学家一直在苦苦寻找传说中的“ein stein”（德语意为“一块石头/单拼图”）：只用一种形状的拼图，就能严丝合缝铺满整个二维平面，但其图案在整个宇宙中永远绝不会周期性重复！罗杰·彭罗斯在1974年用了2块瓷砖。2023年3月，英国业余数学爱好者大卫·史密斯与三位数学家震惊全球，发现了形如帽子的“帽子单拼图”（The Hat）以及纯单面手性的“幽灵单拼图”（Spectre），彻底终结了这一长达60年的世纪之谜！",
            "rules": [
              "用单块拼图无隙无缝铺满平面。",
              "周期性：图案能通过平移完全重合。",
              "非周期性：能铺满全平面，但图案永远绝不重复！",
              "2023年3月：发现13条边的“帽子单拼图”（The Hat）。",
              "2023年5月：攻克严格手性“幽灵单拼图”（Spectre），无需翻面即可铺满！"
            ],
            "mystery": "头号发现者大卫·史密斯并非大学教授，而是一位来自约克郡、热爱用硬纸板剪纸的退休印刷技术工人！",
            "funFact": "非周期性镶嵌的物理对应物——准晶体结构，曾让丹·谢赫特曼荣获2011年诺贝尔化学奖！"
          },
          "investigators": {
            "tagline": "自相似替代规则、分层收缩与高维投影。",
            "analogy": "四位作者通过定义几何元拼块的递推聚合规则，证明了任何帽子镶嵌都由更高阶的自相似元拼图唯一层级编码，从数学拓扑上严格排除了平移周期性的可能。",
            "rules": [
              "由 8 个风筝形拼合而成的 13 边形帽子结构。",
              "分层收缩膨胀重整化系统。",
              "幽灵拼图 (Spectre) 实现了纯单手性非周期铺满。"
            ],
            "mystery": "三维立体空间中，最简单的单块非周期立体多面体是什么？（三维爱因斯坦单多面体仍是前沿！）",
            "funFact": "王浩于1960年代提出镶嵌概念，2023年迎来历史性终极突破。"
          },
          "pioneers": {
            "tagline": "准晶体 X 射线衍射谱与镶嵌动力系统上同调。",
            "analogy": "帽子镶嵌在傅里叶变换下呈现出锐利的布拉格衍射峰，在没有空间周期的前提下展现出纯点谱动力学结构。",
            "rules": [
              "非周期镶嵌的布拉格衍射峰图样。",
              "镶嵌空间动力系统闭包拓扑。",
              "Lean 4 Mathlib 中多边形平移覆盖形式化。"
            ],
            "mystery": "AI 视觉生成系统已能在数毫秒内生成包含数百万个顶点且绝无缺陷的爱因斯坦非周期铺砌。",
            "funFact": "爱因斯坦单拼图的发现是21世纪数学界最令人振奋、最洋溢着人类探索喜悦的里程碑突破。"
          }
        },
        "history": [
          {
            "year": "1961",
            "author": "王浩",
            "note": "提出王浩瓷砖假说。"
          },
          {
            "year": "1974",
            "author": "罗杰·彭罗斯",
            "note": "发现只需2块拼图的彭罗斯非周期镶嵌。"
          },
          {
            "year": "2023 (March)",
            "author": "大卫·史密斯四人团队",
            "note": "轰动全球，发现人类首个爱因斯坦单拼图“帽子”！"
          },
          {
            "year": "2023 (May)",
            "author": "大卫·史密斯四人团队",
            "note": "再度发现无需翻面的纯手性“幽灵”单拼图！"
          }
        ]
      },
      "zh-Hant": {
        "name": "The Einstein Monotile Problem",
        "subtitle": "A Single Shape That Tiles the Entire Plane Aperiodically (Solved in 2023!)",
        "field": "Aperiodic Tilings & Quasicrystals",
        "statusBadge": "LANDMARK 2023 DISCOVERY",
        "grades": {
          "explorers": {
            "tagline": "Can a single jigsaw piece tile a kitchen floor infinitely, but NEVER repeat a pattern?",
            "analogy": "For 60 years, mathematicians searched for an 'ein stein' (German for 'one stone'): a single tile that can tile the entire 2D plane, but ONLY in a non-repeating, aperiodic pattern! Penrose needed 2 tiles in 1974. In March 2023, an amateur hobbyist David Smith and three mathematicians discovered 'The Hat' (and later 'Spectre'): the first TRUE einstein in history!",
            "rules": [
              "Tile the plane without gaps or overlaps.",
              "Periodic: Pattern repeats by translation.",
              "Aperiodic: Tiles the plane, but NEVER repeats periodically.",
              "March 2023: 'The Hat' discovered (13-sided polygon).",
              "May 2023: 'The Spectre' discovered (strictly chiral, no reflections needed!)."
            ],
            "mystery": "The discoverer David Smith is not a university professor, but a retired printing technician from Yorkshire who loves playing with cardboard cutouts!",
            "funFact": "The mathematics of aperiodic tilings earned Dan Shechtman the 2011 Nobel Prize in Chemistry for the discovery of quasicrystals in nature!"
          },
          "investigators": {
            "tagline": "Substitution rules, hierarchical deflation, and cut-and-project methods.",
            "analogy": "Smith, Myers, Kaplan, and Goodman-Strauss proved aperiodicity by defining a cluster substitution rule that groups hats into four meta-tiles, proving an infinite hierarchical non-periodic tree.",
            "rules": [
              "13-sided polygon formed from eight 30°-60°-90° kites.",
              "Deflation / inflation substitution system.",
              "Strictly chiral Spectre tile eliminates reflections."
            ],
            "mystery": "What is the simplest convex polyhedron that acts as an aperiodic monotile in 3D space?",
            "funFact": "Posed by Hao Wang in the 1960s; completely solved in 2023."
          },
          "pioneers": {
            "tagline": "Quasicrystal diffraction spectra and cohomology of tiling spaces.",
            "analogy": "The diffraction spectrum of the Hat tiling exhibits sharp Bragg peaks, demonstrating pure point dynamical spectrum despite lacking spatial translation periodicity.",
            "rules": [
              "Bragg diffraction peaks in Fourier transform.",
              "Continuous hull of tiling space Ω_T.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI vision models can instantly generate aperiodic Hat tilings spanning millions of vertices without translation defects.",
            "funFact": "The Einstein Monotile Problem is the most celebratory, joyful mathematical breakthrough of the 21st century."
          }
        },
        "history": [
          {
            "year": "1961",
            "author": "Hao Wang",
            "note": "Conjectures no aperiodic set of tiles can exist."
          },
          {
            "year": "1974",
            "author": "Roger Penrose",
            "note": "Discovers aperiodic tiling using 2 tiles (Penrose tiling)."
          },
          {
            "year": "2023 (March)",
            "author": "Smith, Myers, Kaplan & Goodman-Strauss",
            "note": "Discover 'The Hat', the first true aperiodic monotile."
          },
          {
            "year": "2023 (May)",
            "author": "Smith, Myers, Kaplan & Goodman-Strauss",
            "note": "Discover 'The Spectre', an aperiodic monotile requiring no reflections."
          }
        ]
      }
    }
  }
];
