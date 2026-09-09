export const DOMAIN_ALGEBRA_ANALYSIS = [
  {
    "id": "jacobian",
    "icon": "🌀",
    "difficulty": "Grades 8+",
    "simId": "jacobian-sim",
    "leanCode": "import Mathlib.Algebra.Polynomial.Basic\n\ndef KellerCondition (F : (Fin 3 → ℂ) → (Fin 3 → ℂ)) : Prop :=\n  True\n\ntheorem jacobian_conjecture_counterexample_dim3 :\n  ∃ F : (Fin 3 → ℂ) → (Fin 3 → ℂ), KellerCondition F ∧ ¬ Function.Injective F := by\n  sorry",
    "locales": {
      "en": {
        "name": "The Jacobian Conjecture",
        "subtitle": "The Warped Coordinate Grid",
        "field": "Algebraic Geometry & Multivariable Calculus",
        "statusBadge": "SOLVED BY AI 2026",
        "grades": {
          "explorers": {
            "tagline": "If you stretch rubber space without pinching, can it fold over itself?",
            "analogy": "Imagine drawing a grid on a sheet of rubber. If you stretch and bend it smoothly so that no tiny square is ever crushed to zero area (the Jacobian determinant is never zero), can you ever accidentally fold the rubber sheet so two different points land on top of each other?",
            "rules": [
              "A polynomial map transforms coordinates (x, y) into (P(x,y), Q(x,y)).",
              "The Jacobian determinant measures area scaling.",
              "If the scaling is never zero, is the transformation always reversible?"
            ],
            "mystery": "In 1939, Ott-Heinrich Keller conjectured YES! But in July 2026, AI (Claude Fable 5) discovered a 3D polynomial map that folds space onto itself!",
            "funFact": "The counterexample polynomial found by Claude was only 216 characters long, yet humans had missed it for 87 years!"
          },
          "investigators": {
            "tagline": "Local invertibility vs. global invertibility in polynomial mappings.",
            "analogy": "In real calculus, f'(x) ≠ 0 implies local invertibility. But does constant nonzero Jacobian determinant imply global invertibility in complex space?",
            "rules": [
              "Jacobian matrix: J(F)_{ij} = ∂F_i / ∂x_j.",
              "Keller condition: det(J(F)) is a nonzero constant.",
              "Disproven for n ≥ 3; 2D planar case remains OPEN!"
            ],
            "mystery": "Claude Fable 5 found two distinct points in ℂ³ that map to the exact same output.",
            "funFact": "The planar 2D case (ℂ² → ℂ²) remains one of the hottest active frontiers in geometry."
          },
          "pioneers": {
            "tagline": "Affine automorphisms, Dixmier conjecture equivalence, and the open 2D frontier.",
            "analogy": "The Jacobian conjecture is equivalent to the Dixmier conjecture on Weyl algebras A_n (Tsuchimoto, Belov-Kanel & Kontsevich).",
            "rules": [
              "July 2026: Levent Alpöge & Claude Fable 5 constructed a counterexample in ℂ³ with det(JF) = -2.",
              "Planar case n = 2 remains unresolved."
            ],
            "mystery": "Does the topology of ℂ² enforce injectivity, or will an AI discover a high-degree counterexample in dimension 2?",
            "funFact": "Mathematicians verified the AI counterexample in SymPy and Lean 4 within hours of announcement."
          }
        },
        "history": [
          {
            "year": "1939",
            "author": "Ott-Heinrich Keller",
            "note": "Poses conjecture for polynomial rings."
          },
          {
            "year": "1982",
            "author": "Bass, Connell, Wright",
            "note": "Surveys problem and proves degree reduction to 3."
          },
          {
            "year": "July 2026",
            "author": "Levent Alpöge & Claude Fable 5",
            "note": "Disproves conjecture for n ≥ 3 with explicit counterexample in ℂ³."
          },
          {
            "year": "Current",
            "author": "Global Math Community",
            "note": "Intense search on the remaining 2D planar case."
          }
        ]
      },
      "de": {
        "name": "Die Jacobi-Vermutung",
        "subtitle": "Das verzerrte Koordinatengitter",
        "field": "Algebraische Geometrie & Analysis",
        "statusBadge": "DURCH KI WIDERLEGT 2026",
        "grades": {
          "explorers": {
            "tagline": "Wenn man Raum dehnt, ohne ihn zu quetschen, kann er sich selbst überlappen?",
            "analogy": "Dehnt man ein Gummigitter so, dass kein Feldchen auf Fläche 0 schrumpft (Jacobi-Determinante nie 0), können dann zwei getrennte Punkte aufeinander landen?",
            "rules": [
              "Polynomabbildungen im Raum.",
              "Jacobi-Determinante misst lokale Flächenänderung.",
              "Keller vermutete 1939: Niemals Überlappung!"
            ],
            "mystery": "Im Juli 2026 fand eine KI (Claude Fable 5) eine 3D-Polynomabbildung, die den Raum in sich faltet!",
            "funFact": "Die von der KI gefundene Formel war nur 216 Zeichen lang – nach 87 Jahren Suche!"
          },
          "investigators": {
            "tagline": "Lokale vs. globale Invertierbarkeit und der offene 2D-Fall.",
            "analogy": "Für Dimensionen n ≥ 3 widerlegt; der 2D-Fall in der Ebene (ℂ² → ℂ²) ist weiterhin UNGELÖST!",
            "rules": [
              "Keller-Bedingung: det(JF) ist eine von Null verschiedene Konstante.",
              "Claude Fable 5 konstruierte zwei Punkte mit identischem Bild."
            ],
            "mystery": "Schützt die Topologie der 2D-Ebene vor der Faltung?",
            "funFact": "Weltweit überprüften Mathematiker den 3D-Beweis in wenigen Stunden via SymPy und Lean."
          },
          "pioneers": {
            "tagline": "Affine Automorphismen, Dixmier-Vermutung und 2D-Grenzen.",
            "rules": [
              "Juli 2026 : Levent Alpöge & Claude Fable 5 widerlegen JC für n ≥ 3."
            ],
            "mystery": "Gibt es ein hochgradiges Gegenbeispiel in Dimension 2?",
            "funFact": "Der 2D-Fall ist das aktivste gemeinsame Forschungsfeld von Geometern und KI.",
            "analogy": "Die Jacobi-Vermutung ist äquivalent zur Dixmier-Vermutung über Weyl-Algebren A_n (Tsuchimoto, Belov-Kanel & Kontsevich)."
          }
        },
        "history": [
          {
            "year": "1939",
            "author": "Ott-Heinrich Keller",
            "note": "Stellt die Vermutung auf."
          },
          {
            "year": "Juli 2026",
            "author": "Alpöge & Claude Fable 5",
            "note": "Widerlegt die Vermutung für n ≥ 3 mit 3D-Gegenbeispiel."
          }
        ]
      },
      "fr": {
        "name": "La Conjecture Jacobienne",
        "subtitle": "La Grille Déformée de l'Espace",
        "field": "Géométrie Algébrique",
        "statusBadge": "RÉFUTÉ PAR L'IA 2026",
        "grades": {
          "explorers": {
            "tagline": "Si vous étirez l'espace sans l'écraser, peut-il se replier sur lui-même ?",
            "analogy": "En étirant une feuille élastique sans jamais réduire une case à zéro, deux points distincts peuvent-ils se superposer ?",
            "rules": [
              "Le déterminant jacobien ne s'annule jamais.",
              "Keller pensait en 1939 que le repliement était impossible."
            ],
            "mystery": "En juillet 2026, l'IA (Claude Fable 5) a trouvé un contre-exemple 3D qui replie l'espace !",
            "funFact": "La formule de l'IA ne faisait que 216 caractères, après 87 ans de recherches humaines !"
          },
          "investigators": {
            "tagline": "Inversibilité locale vs globale et l'énigme du plan 2D.",
            "analogy": "Réfutée en dimension n ≥ 3 ; la conjecture 2D (ℂ² → ℂ²) reste totalement OUVERTE !",
            "rules": [
              "Deux points distincts de ℂ³ ont la même image."
            ],
            "mystery": "Le plan 2D empêche-t-il le pliage ?",
            "funFact": "Vérifié en quelques heures via SymPy et Lean 4."
          },
          "pioneers": {
            "tagline": "Automorphismes affines et conjecture de Dixmier.",
            "rules": [
              "Juillet 2026 : Alpöge et Claude Fable 5 réfutent pour n ≥ 3."
            ],
            "mystery": "L'injectivité tient-elle en dimension 2 ?",
            "funFact": "Recherche collaborative intense entre géomètres et LLMs.",
            "analogy": "La conjecture jacobienne est équivalente à la conjecture de Dixmier sur les algèbres de Weyl A_n (Tsuchimoto, Belov-Kanel & Kontsevich)."
          }
        },
        "history": [
          {
            "year": "1939",
            "author": "Keller",
            "note": "Énoncé de la conjecture."
          },
          {
            "year": "Juillet 2026",
            "author": "Alpöge & Claude Fable 5",
            "note": "Contre-exemple en dimension 3."
          }
        ]
      },
      "it": {
        "name": "La Congettura Jacobiana",
        "subtitle": "La Griglia di Coordinate Deformata",
        "field": "Geometria Algebrica",
        "statusBadge": "CONFUTATO DA IA 2026",
        "grades": {
          "explorers": {
            "tagline": "Deformando lo spazio senza schiacciarlo, può ripiegarsi su se stesso?",
            "analogy": "Se deformi un foglio di gomma mantenendo l'area diversa da zero, due punti possono sovrapporsi?",
            "rules": [
              "Determinante jacobiano mai nullo.",
              "Keller ipotizzò l'invertibilità globale."
            ],
            "mystery": "Nel luglio 2026 l'IA Claude Fable 5 ha trovato un controesempio 3D che ripiega lo spazio!",
            "funFact": "La formula trovata dall'IA era lunga appena 216 caratteri!"
          },
          "investigators": {
            "tagline": "Invertibilità locale vs globale e il caso 2D aperto.",
            "analogy": "Confutata per n ≥ 3; il caso piano ℂ² rimane APERTO!",
            "rules": [
              "Mappa non iniettiva in ℂ³."
            ],
            "mystery": "La topologia di ℂ² impedisce il ripiegamento?",
            "funFact": "Verificato formalmente in Lean 4 poche ore dopo l'annuncio."
          },
          "pioneers": {
            "tagline": "Automorfismi affini e congettura di Dixmier.",
            "rules": [
              "Luglio 2026 : confutazione per n ≥ 3 con det(JF) = -2."
            ],
            "mystery": "Esiste un controesempio di grado elevato in dimensione 2?",
            "funFact": "Attiva frontiera di ricerca congiunta matematici-IA.",
            "analogy": "La congettura jacobiana è equivalente alla congettura di Dixmier sulle algebre di Weyl A_n (Tsuchimoto, Belov-Kanel & Kontsevich)."
          }
        },
        "history": [
          {
            "year": "1939",
            "author": "Keller",
            "note": "Formula la congettura."
          },
          {
            "year": "Luglio 2026",
            "author": "Alpöge & Claude Fable 5",
            "note": "Controesempio 3D confuta n ≥ 3."
          }
        ]
      },
      "ko": {
        "name": "야코비안 추측",
        "subtitle": "뒤틀린 좌표계의 미스터리",
        "field": "대수기하학 및 다변수 미적분학",
        "statusBadge": "2026 AI 반례로 반증",
        "grades": {
          "explorers": {
            "tagline": "고무 공간을 찌그러뜨리지 않고 매끄럽게 늘이면, 공간이 스스로 겹쳐질 수 있을까?",
            "analogy": "어떤 모눈종이 칸도 면적이 0으로 줄어들지 않도록 매끄럽게 늘렸을 때(야코비안 행렬식이 0이 아님), 서로 완전히 다른 두 점이 우연히 같은 위치에 겹쳐지는 '접힘'이 발생할 수 있을까요?",
            "rules": [
              "다항식 사상은 좌표 (x, y)를 새로운 (P, Q)로 변환함.",
              "야코비안 행렬식은 국소 면적 변화율을 측정.",
              "변화율이 어디서나 0이 아닌 상수라면 항상 일대일 복원(역변환)이 가능할까?"
            ],
            "mystery": "1939년 켈러는 '절대 겹치지 않는다'고 추측했습니다. 하지만 2026년 7월, AI(Claude Fable 5)가 3차원 공간을 스스로 겹치게 접어버리는 다항식 사상을 발견해 87년 만에 추측을 깼습니다!",
            "funFact": "AI가 발견한 반례 수식의 길이는 단 216자에 불과했습니다. 이렇게 짧은 식을 인류는 87년 동안 찾지 못했던 것입니다!"
          },
          "investigators": {
            "tagline": "국소 가역성과 대역적 가역성의 괴리, 그리고 남아있는 2차원 평면의 미스터리.",
            "analogy": "3차원 이상(n ≥ 3)에서는 반례가 발견되어 추측이 거짓으로 판명되었으나, 2차원 평면(ℂ² → ℂ²)의 경우는 여전히 미해결 상태로 남아 있습니다!",
            "rules": [
              "켈러 조건: det(J(F))가 0이 아닌 복소수 상수.",
              "Claude Fable 5는 서로 다른 두 입력이 동일한 출력을 내는 ℂ³ 사상을 구성."
            ],
            "mystery": "3차원에서는 공간의 뒤틀림이 중복을 만들었지만, 2차원 평면에서는 위상적 제약이 겹침을 막아줄까요?",
            "funFact": "발표 직후 전 세계 수학자들은 SymPy와 Lean 4를 사용하여 몇 시간 만에 반례를 엄밀히 검증했습니다."
          },
          "pioneers": {
            "tagline": "아핀 자기동형사상, 바일 대수 딕스미에 추측 동치성, 그리고 2차원 프론티어.",
            "analogy": "야코비안 추측은 바일 대수 상의 딕스미에 추측과 동치임이 증명되어 있습니다.",
            "rules": [
              "2026년 7월: Alpöge & Claude Fable 5가 det(JF) = -2인 비단사 다항식 사상을 구성.",
              "평면(n = 2) 야코비안 추측은 미해결로 잔존."
            ],
            "mystery": "평면 ℂ²에서는 단사성이 유지될 것인가, 아니면 AI가 초고차수 2차원 반례를 발견할 것인가?",
            "funFact": "현재 대수기하학자들과 프론티어 AI 모델 간에 2차원 반례 탐색을 위한 집중 연구가 진행 중입니다."
          }
        },
        "history": [
          {
            "year": "1939",
            "author": "오트-하인리히 켈러",
            "note": "다항식 환에 대한 추측 제기."
          },
          {
            "year": "1982",
            "author": "바스, 코넬, 라이트",
            "note": "차수 3으로의 축약 정리 증명."
          },
          {
            "year": "2026년 7월",
            "author": "레벤트 알포게 & Claude Fable 5",
            "note": "ℂ³ 명시적 반례 발견으로 n ≥ 3 부정."
          },
          {
            "year": "현재",
            "author": "전 세계 수학계",
            "note": "남겨진 2차원 평면 문제 해결을 위한 AI 협동 연구 가열."
          }
        ]
      },
      "ja": {
        "name": "ヤコビアン予想",
        "subtitle": "歪められた空間座標の謎",
        "field": "代数幾何学・多変数微積分",
        "statusBadge": "2026年 AIが反例発見",
        "grades": {
          "explorers": {
            "tagline": "ゴムの空間をつぶさずに滑らかに変形したら、空間が自分自身に重なることはある？",
            "analogy": "ゴムシートに方眼紙のマス目を描いてみよう。シートを滑らかに引っ張ったりねじったりして、どの小さなマス目も面積がゼロにつぶれないように伸ばしたとします（これがヤコビアン行列式がゼロでない状態）。このとき、完全に別の場所にあった2つの点が、偶然同じ場所に重なってしまう「折り畳み」は起こるでしょうか？",
            "rules": [
              "多項式写像：座標 (x, y) を新しい座標 (P(x,y), Q(x,y)) に変換する。",
              "ヤコビアン行列式：各地点での局所的な面積拡大率を表す値。",
              "拡大率がどこでもゼロでない定数なら、この変形は1対1（逆戻し可能）なのだろうか？"
            ],
            "mystery": "1939年にケラーが「重なりは絶対に起こらない」と予想しました。しかし2026年7月、AI（Claude Fable 5）が3次元空間を折り畳んでしまう多項式写像を発見し、87年越しの予想を打ち破りました！",
            "funFact": "Claudeが発見した反例の数式はわずか216文字。こんなに短い式を、人類は87年間も見落としていたのです！"
          },
          "investigators": {
            "tagline": "局所可逆性と大域的可逆性の乖離、そして2次元平面版の残された謎。",
            "analogy": "1変数微積分では導関数がゼロでなければ局所的に逆関数が存在します。しかし複素空間多項式写像において、ヤコビアン行列式が非ゼロ定数なら大域的にも1対1（単射）といえるのか？",
            "rules": [
              "ケラー条件：det(J(F)) が非ゼロの複素数定数。",
              "2026年7月：3次元以上（n ≥ 3）で反例が発見され予想は否定されました！",
              "ただし、2次元（平面 ℂ² → ℂ²）の場合はいまだ未解決のままです！"
            ],
            "mystery": "3次元空間では空間のねじれが自己重複を生み出しました。では2次元平面では位相的制約が重なりを防いでいるのか？",
            "funFact": "発表後、世界中の数学者がSymPyやLean 4を用いて数時間以内に反例の正当性を確認しました。"
          },
          "pioneers": {
            "tagline": "アフィン空間の自己同型、ワイル代数ディクスミエ予想同値性、2次元フロンティア。",
            "analogy": "ヤコビアン予想はワイル代数上のディクスミエ予想と同値であることが土本・ベロフカネル・コンツェビッチにより証明されています。",
            "rules": [
              "2026年7月、レヴェント・アルポゲとClaude Fable 5が det(JF) = -2 を持つ非単射な多項式写像を構成。",
              "平面版（n=2）ヤコビアン予想は未解決のまま残存。"
            ],
            "mystery": "平面 ℂ² では単射性が保たれるのか、それとも超高次数の反例がAIによって発見されるのか？",
            "funFact": "現在、2次元反例の有無をめぐり、代数幾何学者とフロンティアAIの間で集中的な共同研究が続けられています。"
          }
        },
        "history": [
          {
            "year": "1939",
            "author": "オットー・ハインリヒ・ケラー",
            "note": "多項式環上の予想として提起。"
          },
          {
            "year": "1982",
            "author": "バス, コネル, ライト",
            "note": "問題を整理し次数3への簡約定理を証明。"
          },
          {
            "year": "2026年7月",
            "author": "レヴェント・アルポゲ & Claude Fable 5",
            "note": "ℂ³における明示的反例を発見し n ≥ 3 の予想を否定。"
          },
          {
            "year": "現在",
            "author": "世界数学コミュニティ",
            "note": "残された2次元（平面）予想の解決に向けたAI協調研究が加熱。"
          }
        ]
      },
      "zh-Hans": {
        "name": "雅可比猜想",
        "subtitle": "被扭曲的坐标之网",
        "field": "代数几何与多元微积分",
        "statusBadge": "2026 AI构造反例否定",
        "grades": {
          "explorers": {
            "tagline": "如果平滑拉伸一张橡胶网而不捏碎任何方格，它会自己折叠重叠吗？",
            "analogy": "在橡胶布上画满方格。如果处处平滑拉伸扭曲，没有任何一个微小方格被压扁成面积为0（雅可比行列式处处不为零），有没有可能发生意外折叠，导致原本处于两个完全不同地点的点，重合在了一起？",
            "rules": [
              "多项式变换将坐标 (x, y) 映射到新的 (P(x,y), Q(x,y))。",
              "雅可比行列式度量局部面积缩放率。",
              "如果缩放率处处为不为零的常数，变换是否整体可逆（一一对应）？"
            ],
            "mystery": "1939年凯勒猜想：绝不可能重叠！然而在2026年7月，AI（Claude Fable 5）找到了一个3维多项式映射，硬生生把空间自身折叠重合了！",
            "funFact": "AI发现的反例多项式仅有216个字符长，而全人类数学家竟苦苦寻觅了87年！"
          },
          "investigators": {
            "tagline": "局部可逆与全局可逆的鸿沟，以及悬而未决的2维平面猜想。",
            "analogy": "在实微积分中导数不为零意味着局部可逆。但在复多项式映射中，处处雅可比行列式非零是否意味着全局单射？",
            "rules": [
              "凯勒条件：det(J(F)) 为非零常数。",
              "2026年7月被推翻：对于维数 n ≥ 3，猜想不成立！",
              "但2维平面情形（ℂ² → ℂ²）至今仍然是未解之谜！"
            ],
            "mystery": "Claude Fable 5 构造了 ℂ³ 中的映射，使得两个完全不同的点输入后得到完全相同的输出。",
            "funFact": "数学家们在几小时内通过 SymPy 和 Lean 4 严密验证了该反例的正确性。"
          },
          "pioneers": {
            "tagline": "仿射自同构、外尔代数迪克斯米耶猜想等价性与2维前沿。",
            "analogy": "雅可比猜想与外尔代数上的迪克斯米耶猜想存在深刻的等价性。",
            "rules": [
              "2026年7月：Alpöge 与 Claude Fable 5 构造了 det(JF) = -2 的非单射反例。",
              "平面情形 (n = 2) 依然悬而未决。"
            ],
            "mystery": "ℂ² 的拓扑刚性是否能保证单射成立，还是AI会找到一个超高次数的2维反例？",
            "funFact": "寻找2维反例已成为代数几何学者与前沿大模型最热门的协同研究课题之一。"
          }
        },
        "history": [
          {
            "year": "1939",
            "author": "奥特-海因里希·凯勒",
            "note": "提出多项式映射雅可比猜想。"
          },
          {
            "year": "1982",
            "author": "Bass, Connell, Wright",
            "note": "证明问题可约化为3次多项式情形。"
          },
          {
            "year": "2026年7月",
            "author": "Levent Alpöge 与 Claude Fable 5",
            "note": "在 ℂ³ 中构造出显式反例，推翻 n ≥ 3 情形。"
          },
          {
            "year": "当前",
            "author": "全球数学界",
            "note": "AI与数学家正全力围攻悬存的2维平面难题。"
          }
        ]
      },
      "zh-Hant": {
        "name": "雅可比猜想",
        "subtitle": "被扭曲的座標之網",
        "field": "代數幾何與多元微積分",
        "statusBadge": "2026 AI構造反例否定",
        "grades": {
          "explorers": {
            "tagline": "如果平滑拉伸橡皮網而不捏碎方格，空間會自己折疊重疊嗎？",
            "analogy": "如果處處平滑拉伸空間，局部的面積縮放率永遠不為零，有沒有可能導致原本兩處不同的點映射到同一位置？",
            "rules": [
              "雅可比行列式度量局部縮放率。",
              "行列式為非零常數時，變換是否處處可逆？"
            ],
            "mystery": "1939年凱勒猜想不可能重疊！但2026年7月，AI（Claude Fable 5）發現了折疊3維空間的216字元反例！",
            "funFact": "這道僅有216個字元的反例數式，全人類苦苦找尋了87年！"
          },
          "investigators": {
            "tagline": "局部可逆與全域可逆的鴻溝，以及未解的2維平面猜想。",
            "analogy": "對於維數 n ≥ 3，猜想已被推翻；但2維平面版本（ℂ² → ℂ²）至今仍未解！",
            "rules": [
              "Claude Fable 5 在 ℂ³ 中找到了兩個不同點輸出相同結果的確鑿反例。"
            ],
            "mystery": "2維平面的拓撲結構是否阻止了空間折疊？",
            "funFact": "全球數學家在數小時內透過電腦代數驗證了該反例。"
          },
          "pioneers": {
            "tagline": "仿射自同構、外爾代數等價性與2維平面終極前沿。",
            "analogy": "雅可比猜想與迪克斯米耶猜想等價。",
            "rules": [
              "2026年7月：Alpöge 與 Claude Fable 5 構造了 det(JF) = -2 的非單射反例。"
            ],
            "mystery": "ℂ² 的平面幾何是否保證了單射性，還是AI能找到更高次的2維反例？",
            "funFact": "2維猜想目前是代數幾何領域最熱門的AI協同攻關方向之一。"
          }
        },
        "history": [
          {
            "year": "1939",
            "author": "凱勒",
            "note": "提出雅可比猜想。"
          },
          {
            "year": "2026年7月",
            "author": "Alpöge 與 Claude Fable 5",
            "note": "構造 ℂ³ 反例，推翻 n ≥ 3 猜想。"
          },
          {
            "year": "當前",
            "author": "全球數學界",
            "note": "全力攻堅2維平面版本的終極命運。"
          }
        ]
      }
    },
    "domain": "algebra-analysis",
    "category": "algebra-analysis",
    "isMillennium": false,
    "isAIFrontier": true
  },
  {
    "id": "painleve",
    "icon": "🌌",
    "difficulty": "Gr 9+",
    "domain": "algebra-analysis",
    "category": "algebra-analysis",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Analysis.ODE.Basic\n-- Painlevé Conjecture (Paul Painlevé, 1895, Solved by Zhihong Xia in 1992)\n-- In the Newtonian gravitational n-body problem, non-collision singularities exist for n ≥ 5.",
    "locales": {
      "en": {
        "name": "Painlevé's Conjecture",
        "subtitle": "Particles Flying to Infinity in Finite Time Without Colliding (Solved by Xia 1992)",
        "field": "Celestial Mechanics & Hamiltonian Dynamics",
        "statusBadge": "SOLVED THEOREM (XIA 1992)",
        "grades": {
          "explorers": {
            "tagline": "Can 5 stars dance with gravity so violently that one shoots out of the universe in 1 second?",
            "analogy": "In 1895, French mathematician Paul Painlevé proved that for 3 planets orbiting under Newton's gravity, the ONLY way coordinates can blow up to infinity in finite time is if two planets crash into each other. But he conjectured: for $n \\ge 4$ planets, can celestial bodies accelerate to infinite speed and escape to infinity in FINITE TIME without EVER colliding? In 1992, 29-year-old Chinese mathematician Zhihong Xia proved YES for 5 bodies in a historic breakthrough!",
            "rules": [
              "Newtonian n-body equations: m_i d²r_i/dt² = ∑ G m_i m_j (r_j - r_i) / |r_j - r_i|³.",
              "Singularity: Solution ceases to exist at finite time t*.",
              "Painlevé (1895): For n = 3, all singularities are collisions.",
              "Xia (1992): Non-collision singularity exists for n = 5!"
            ],
            "mystery": "Zhihong Xia's 5-body constellation features two pairs of binary stars orbiting in parallel planes while a lightweight fifth particle oscillates back and forth between them, gaining exponential speed with each pass!",
            "funFact": "Donald Saari showed that any non-collision singularity must oscillate wildly, with particle distances oscillating from zero to infinity infinitely many times before time t*!"
          },
          "investigators": {
            "tagline": "Hamiltonian systems, symplectic geometry, and McGehee coordinates.",
            "analogy": "Xia constructed an invariant Cantor set of initial conditions using symbolic dynamics and Shilnikov homoclinic bifurcations.",
            "rules": [
              "McGehee singularity blow-up coordinates.",
              "Symplectic energy conservation.",
              "Lean 4 Mathlib ODE Cauchy-Lipschitz theorem."
            ],
            "mystery": "Does a non-collision singularity exist for n = 4 gravitational bodies?",
            "funFact": "Paul Painlevé in 1895; solved for n=5 by Zhihong Xia in 1992."
          },
          "pioneers": {
            "tagline": "Aubry-Mather theory and chaotic transport in celestial mechanics.",
            "analogy": "The transition map across the double collision manifold can be analyzed via KAM (Kolmogorov-Arnold-Moser) theory.",
            "rules": [
              "KAM invariant tori breakdown.",
              "Cantor set of chaotic trajectories.",
              "Lean 4 formal Hamiltonian mechanics."
            ],
            "mystery": "Symplectic integrators numerically simulate Xia's 5-body shuttle, demonstrating velocity surpassing 10^{20} m/s in milliseconds.",
            "funFact": "The Painlevé Conjecture resolution is one of the brightest modern triumphs in the glorious history of celestial mechanics."
          }
        },
        "history": [
          {
            "year": "1895",
            "author": "Paul Painlevé",
            "note": "Proves 3-body singularities are collisions; conjectures non-collision singularities for n ≥ 4."
          },
          {
            "year": "1974",
            "author": "Richard McGehee",
            "note": "Introduces singularity blow-up coordinates for celestial mechanics."
          },
          {
            "year": "1992",
            "author": "Zhihong Xia (夏志宏)",
            "note": "Proves Painlevé conjecture by constructing non-collision 5-body singularity."
          }
        ]
      },
      "de": {
        "name": "Painlevé's Conjecture",
        "subtitle": "Particles Flying to Infinity in Finite Time Without Colliding (Solved by Xia 1992)",
        "field": "Celestial Mechanics & Hamiltonian Dynamics",
        "statusBadge": "SOLVED THEOREM (XIA 1992)",
        "grades": {
          "explorers": {
            "tagline": "Can 5 stars dance with gravity so violently that one shoots out of the universe in 1 second?",
            "analogy": "In 1895, French mathematician Paul Painlevé proved that for 3 planets orbiting under Newton's gravity, the ONLY way coordinates can blow up to infinity in finite time is if two planets crash into each other. But he conjectured: for $n \\ge 4$ planets, can celestial bodies accelerate to infinite speed and escape to infinity in FINITE TIME without EVER colliding? In 1992, 29-year-old Chinese mathematician Zhihong Xia proved YES for 5 bodies in a historic breakthrough!",
            "rules": [
              "Newtonian n-body equations: m_i d²r_i/dt² = ∑ G m_i m_j (r_j - r_i) / |r_j - r_i|³.",
              "Singularity: Solution ceases to exist at finite time t*.",
              "Painlevé (1895): For n = 3, all singularities are collisions.",
              "Xia (1992): Non-collision singularity exists for n = 5!"
            ],
            "mystery": "Zhihong Xia's 5-body constellation features two pairs of binary stars orbiting in parallel planes while a lightweight fifth particle oscillates back and forth between them, gaining exponential speed with each pass!",
            "funFact": "Donald Saari showed that any non-collision singularity must oscillate wildly, with particle distances oscillating from zero to infinity infinitely many times before time t*!"
          },
          "investigators": {
            "tagline": "Hamiltonian systems, symplectic geometry, and McGehee coordinates.",
            "analogy": "Xia constructed an invariant Cantor set of initial conditions using symbolic dynamics and Shilnikov homoclinic bifurcations.",
            "rules": [
              "McGehee singularity blow-up coordinates.",
              "Symplectic energy conservation.",
              "Lean 4 Mathlib ODE Cauchy-Lipschitz theorem."
            ],
            "mystery": "Does a non-collision singularity exist for n = 4 gravitational bodies?",
            "funFact": "Paul Painlevé in 1895; solved for n=5 by Zhihong Xia in 1992."
          },
          "pioneers": {
            "tagline": "Aubry-Mather theory and chaotic transport in celestial mechanics.",
            "analogy": "The transition map across the double collision manifold can be analyzed via KAM (Kolmogorov-Arnold-Moser) theory.",
            "rules": [
              "KAM invariant tori breakdown.",
              "Cantor set of chaotic trajectories.",
              "Lean 4 formal Hamiltonian mechanics."
            ],
            "mystery": "Symplectic integrators numerically simulate Xia's 5-body shuttle, demonstrating velocity surpassing 10^{20} m/s in milliseconds.",
            "funFact": "The Painlevé Conjecture resolution is one of the brightest modern triumphs in the glorious history of celestial mechanics."
          }
        },
        "history": [
          {
            "year": "1895",
            "author": "Paul Painlevé",
            "note": "Proves 3-body singularities are collisions; conjectures non-collision singularities for n ≥ 4."
          },
          {
            "year": "1974",
            "author": "Richard McGehee",
            "note": "Introduces singularity blow-up coordinates for celestial mechanics."
          },
          {
            "year": "1992",
            "author": "Zhihong Xia (夏志宏)",
            "note": "Proves Painlevé conjecture by constructing non-collision 5-body singularity."
          }
        ]
      },
      "fr": {
        "name": "Painlevé's Conjecture",
        "subtitle": "Particles Flying to Infinity in Finite Time Without Colliding (Solved by Xia 1992)",
        "field": "Celestial Mechanics & Hamiltonian Dynamics",
        "statusBadge": "SOLVED THEOREM (XIA 1992)",
        "grades": {
          "explorers": {
            "tagline": "Can 5 stars dance with gravity so violently that one shoots out of the universe in 1 second?",
            "analogy": "In 1895, French mathematician Paul Painlevé proved that for 3 planets orbiting under Newton's gravity, the ONLY way coordinates can blow up to infinity in finite time is if two planets crash into each other. But he conjectured: for $n \\ge 4$ planets, can celestial bodies accelerate to infinite speed and escape to infinity in FINITE TIME without EVER colliding? In 1992, 29-year-old Chinese mathematician Zhihong Xia proved YES for 5 bodies in a historic breakthrough!",
            "rules": [
              "Newtonian n-body equations: m_i d²r_i/dt² = ∑ G m_i m_j (r_j - r_i) / |r_j - r_i|³.",
              "Singularity: Solution ceases to exist at finite time t*.",
              "Painlevé (1895): For n = 3, all singularities are collisions.",
              "Xia (1992): Non-collision singularity exists for n = 5!"
            ],
            "mystery": "Zhihong Xia's 5-body constellation features two pairs of binary stars orbiting in parallel planes while a lightweight fifth particle oscillates back and forth between them, gaining exponential speed with each pass!",
            "funFact": "Donald Saari showed that any non-collision singularity must oscillate wildly, with particle distances oscillating from zero to infinity infinitely many times before time t*!"
          },
          "investigators": {
            "tagline": "Hamiltonian systems, symplectic geometry, and McGehee coordinates.",
            "analogy": "Xia constructed an invariant Cantor set of initial conditions using symbolic dynamics and Shilnikov homoclinic bifurcations.",
            "rules": [
              "McGehee singularity blow-up coordinates.",
              "Symplectic energy conservation.",
              "Lean 4 Mathlib ODE Cauchy-Lipschitz theorem."
            ],
            "mystery": "Does a non-collision singularity exist for n = 4 gravitational bodies?",
            "funFact": "Paul Painlevé in 1895; solved for n=5 by Zhihong Xia in 1992."
          },
          "pioneers": {
            "tagline": "Aubry-Mather theory and chaotic transport in celestial mechanics.",
            "analogy": "The transition map across the double collision manifold can be analyzed via KAM (Kolmogorov-Arnold-Moser) theory.",
            "rules": [
              "KAM invariant tori breakdown.",
              "Cantor set of chaotic trajectories.",
              "Lean 4 formal Hamiltonian mechanics."
            ],
            "mystery": "Symplectic integrators numerically simulate Xia's 5-body shuttle, demonstrating velocity surpassing 10^{20} m/s in milliseconds.",
            "funFact": "The Painlevé Conjecture resolution is one of the brightest modern triumphs in the glorious history of celestial mechanics."
          }
        },
        "history": [
          {
            "year": "1895",
            "author": "Paul Painlevé",
            "note": "Proves 3-body singularities are collisions; conjectures non-collision singularities for n ≥ 4."
          },
          {
            "year": "1974",
            "author": "Richard McGehee",
            "note": "Introduces singularity blow-up coordinates for celestial mechanics."
          },
          {
            "year": "1992",
            "author": "Zhihong Xia (夏志宏)",
            "note": "Proves Painlevé conjecture by constructing non-collision 5-body singularity."
          }
        ]
      },
      "it": {
        "name": "Painlevé's Conjecture",
        "subtitle": "Particles Flying to Infinity in Finite Time Without Colliding (Solved by Xia 1992)",
        "field": "Celestial Mechanics & Hamiltonian Dynamics",
        "statusBadge": "SOLVED THEOREM (XIA 1992)",
        "grades": {
          "explorers": {
            "tagline": "Can 5 stars dance with gravity so violently that one shoots out of the universe in 1 second?",
            "analogy": "In 1895, French mathematician Paul Painlevé proved that for 3 planets orbiting under Newton's gravity, the ONLY way coordinates can blow up to infinity in finite time is if two planets crash into each other. But he conjectured: for $n \\ge 4$ planets, can celestial bodies accelerate to infinite speed and escape to infinity in FINITE TIME without EVER colliding? In 1992, 29-year-old Chinese mathematician Zhihong Xia proved YES for 5 bodies in a historic breakthrough!",
            "rules": [
              "Newtonian n-body equations: m_i d²r_i/dt² = ∑ G m_i m_j (r_j - r_i) / |r_j - r_i|³.",
              "Singularity: Solution ceases to exist at finite time t*.",
              "Painlevé (1895): For n = 3, all singularities are collisions.",
              "Xia (1992): Non-collision singularity exists for n = 5!"
            ],
            "mystery": "Zhihong Xia's 5-body constellation features two pairs of binary stars orbiting in parallel planes while a lightweight fifth particle oscillates back and forth between them, gaining exponential speed with each pass!",
            "funFact": "Donald Saari showed that any non-collision singularity must oscillate wildly, with particle distances oscillating from zero to infinity infinitely many times before time t*!"
          },
          "investigators": {
            "tagline": "Hamiltonian systems, symplectic geometry, and McGehee coordinates.",
            "analogy": "Xia constructed an invariant Cantor set of initial conditions using symbolic dynamics and Shilnikov homoclinic bifurcations.",
            "rules": [
              "McGehee singularity blow-up coordinates.",
              "Symplectic energy conservation.",
              "Lean 4 Mathlib ODE Cauchy-Lipschitz theorem."
            ],
            "mystery": "Does a non-collision singularity exist for n = 4 gravitational bodies?",
            "funFact": "Paul Painlevé in 1895; solved for n=5 by Zhihong Xia in 1992."
          },
          "pioneers": {
            "tagline": "Aubry-Mather theory and chaotic transport in celestial mechanics.",
            "analogy": "The transition map across the double collision manifold can be analyzed via KAM (Kolmogorov-Arnold-Moser) theory.",
            "rules": [
              "KAM invariant tori breakdown.",
              "Cantor set of chaotic trajectories.",
              "Lean 4 formal Hamiltonian mechanics."
            ],
            "mystery": "Symplectic integrators numerically simulate Xia's 5-body shuttle, demonstrating velocity surpassing 10^{20} m/s in milliseconds.",
            "funFact": "The Painlevé Conjecture resolution is one of the brightest modern triumphs in the glorious history of celestial mechanics."
          }
        },
        "history": [
          {
            "year": "1895",
            "author": "Paul Painlevé",
            "note": "Proves 3-body singularities are collisions; conjectures non-collision singularities for n ≥ 4."
          },
          {
            "year": "1974",
            "author": "Richard McGehee",
            "note": "Introduces singularity blow-up coordinates for celestial mechanics."
          },
          {
            "year": "1992",
            "author": "Zhihong Xia (夏志宏)",
            "note": "Proves Painlevé conjecture by constructing non-collision 5-body singularity."
          }
        ]
      },
      "ja": {
        "name": "Painlevé's Conjecture",
        "subtitle": "Particles Flying to Infinity in Finite Time Without Colliding (Solved by Xia 1992)",
        "field": "Celestial Mechanics & Hamiltonian Dynamics",
        "statusBadge": "SOLVED THEOREM (XIA 1992)",
        "grades": {
          "explorers": {
            "tagline": "Can 5 stars dance with gravity so violently that one shoots out of the universe in 1 second?",
            "analogy": "In 1895, French mathematician Paul Painlevé proved that for 3 planets orbiting under Newton's gravity, the ONLY way coordinates can blow up to infinity in finite time is if two planets crash into each other. But he conjectured: for $n \\ge 4$ planets, can celestial bodies accelerate to infinite speed and escape to infinity in FINITE TIME without EVER colliding? In 1992, 29-year-old Chinese mathematician Zhihong Xia proved YES for 5 bodies in a historic breakthrough!",
            "rules": [
              "Newtonian n-body equations: m_i d²r_i/dt² = ∑ G m_i m_j (r_j - r_i) / |r_j - r_i|³.",
              "Singularity: Solution ceases to exist at finite time t*.",
              "Painlevé (1895): For n = 3, all singularities are collisions.",
              "Xia (1992): Non-collision singularity exists for n = 5!"
            ],
            "mystery": "Zhihong Xia's 5-body constellation features two pairs of binary stars orbiting in parallel planes while a lightweight fifth particle oscillates back and forth between them, gaining exponential speed with each pass!",
            "funFact": "Donald Saari showed that any non-collision singularity must oscillate wildly, with particle distances oscillating from zero to infinity infinitely many times before time t*!"
          },
          "investigators": {
            "tagline": "Hamiltonian systems, symplectic geometry, and McGehee coordinates.",
            "analogy": "Xia constructed an invariant Cantor set of initial conditions using symbolic dynamics and Shilnikov homoclinic bifurcations.",
            "rules": [
              "McGehee singularity blow-up coordinates.",
              "Symplectic energy conservation.",
              "Lean 4 Mathlib ODE Cauchy-Lipschitz theorem."
            ],
            "mystery": "Does a non-collision singularity exist for n = 4 gravitational bodies?",
            "funFact": "Paul Painlevé in 1895; solved for n=5 by Zhihong Xia in 1992."
          },
          "pioneers": {
            "tagline": "Aubry-Mather theory and chaotic transport in celestial mechanics.",
            "analogy": "The transition map across the double collision manifold can be analyzed via KAM (Kolmogorov-Arnold-Moser) theory.",
            "rules": [
              "KAM invariant tori breakdown.",
              "Cantor set of chaotic trajectories.",
              "Lean 4 formal Hamiltonian mechanics."
            ],
            "mystery": "Symplectic integrators numerically simulate Xia's 5-body shuttle, demonstrating velocity surpassing 10^{20} m/s in milliseconds.",
            "funFact": "The Painlevé Conjecture resolution is one of the brightest modern triumphs in the glorious history of celestial mechanics."
          }
        },
        "history": [
          {
            "year": "1895",
            "author": "Paul Painlevé",
            "note": "Proves 3-body singularities are collisions; conjectures non-collision singularities for n ≥ 4."
          },
          {
            "year": "1974",
            "author": "Richard McGehee",
            "note": "Introduces singularity blow-up coordinates for celestial mechanics."
          },
          {
            "year": "1992",
            "author": "Zhihong Xia (夏志宏)",
            "note": "Proves Painlevé conjecture by constructing non-collision 5-body singularity."
          }
        ]
      },
      "ko": {
        "name": "Painlevé's Conjecture",
        "subtitle": "Particles Flying to Infinity in Finite Time Without Colliding (Solved by Xia 1992)",
        "field": "Celestial Mechanics & Hamiltonian Dynamics",
        "statusBadge": "SOLVED THEOREM (XIA 1992)",
        "grades": {
          "explorers": {
            "tagline": "Can 5 stars dance with gravity so violently that one shoots out of the universe in 1 second?",
            "analogy": "In 1895, French mathematician Paul Painlevé proved that for 3 planets orbiting under Newton's gravity, the ONLY way coordinates can blow up to infinity in finite time is if two planets crash into each other. But he conjectured: for $n \\ge 4$ planets, can celestial bodies accelerate to infinite speed and escape to infinity in FINITE TIME without EVER colliding? In 1992, 29-year-old Chinese mathematician Zhihong Xia proved YES for 5 bodies in a historic breakthrough!",
            "rules": [
              "Newtonian n-body equations: m_i d²r_i/dt² = ∑ G m_i m_j (r_j - r_i) / |r_j - r_i|³.",
              "Singularity: Solution ceases to exist at finite time t*.",
              "Painlevé (1895): For n = 3, all singularities are collisions.",
              "Xia (1992): Non-collision singularity exists for n = 5!"
            ],
            "mystery": "Zhihong Xia's 5-body constellation features two pairs of binary stars orbiting in parallel planes while a lightweight fifth particle oscillates back and forth between them, gaining exponential speed with each pass!",
            "funFact": "Donald Saari showed that any non-collision singularity must oscillate wildly, with particle distances oscillating from zero to infinity infinitely many times before time t*!"
          },
          "investigators": {
            "tagline": "Hamiltonian systems, symplectic geometry, and McGehee coordinates.",
            "analogy": "Xia constructed an invariant Cantor set of initial conditions using symbolic dynamics and Shilnikov homoclinic bifurcations.",
            "rules": [
              "McGehee singularity blow-up coordinates.",
              "Symplectic energy conservation.",
              "Lean 4 Mathlib ODE Cauchy-Lipschitz theorem."
            ],
            "mystery": "Does a non-collision singularity exist for n = 4 gravitational bodies?",
            "funFact": "Paul Painlevé in 1895; solved for n=5 by Zhihong Xia in 1992."
          },
          "pioneers": {
            "tagline": "Aubry-Mather theory and chaotic transport in celestial mechanics.",
            "analogy": "The transition map across the double collision manifold can be analyzed via KAM (Kolmogorov-Arnold-Moser) theory.",
            "rules": [
              "KAM invariant tori breakdown.",
              "Cantor set of chaotic trajectories.",
              "Lean 4 formal Hamiltonian mechanics."
            ],
            "mystery": "Symplectic integrators numerically simulate Xia's 5-body shuttle, demonstrating velocity surpassing 10^{20} m/s in milliseconds.",
            "funFact": "The Painlevé Conjecture resolution is one of the brightest modern triumphs in the glorious history of celestial mechanics."
          }
        },
        "history": [
          {
            "year": "1895",
            "author": "Paul Painlevé",
            "note": "Proves 3-body singularities are collisions; conjectures non-collision singularities for n ≥ 4."
          },
          {
            "year": "1974",
            "author": "Richard McGehee",
            "note": "Introduces singularity blow-up coordinates for celestial mechanics."
          },
          {
            "year": "1992",
            "author": "Zhihong Xia (夏志宏)",
            "note": "Proves Painlevé conjecture by constructing non-collision 5-body singularity."
          }
        ]
      },
      "zh-Hans": {
        "name": "庞加莱-庞勒韦天体碰撞猜想",
        "subtitle": "天体在有限时间内飞向无穷远且彼此绝不相撞（夏志宏1992年破译）",
        "field": "天体力学 & 哈密顿动力系统",
        "statusBadge": "夏志宏划时代获证定理",
        "grades": {
          "explorers": {
            "tagline": "5颗星星在引力作用下相互追逐，能不能跳出一支奇妙的引力之舞，在1秒钟内把其中一颗狠狠甩出无限远？",
            "analogy": "1895年法国数学家保罗·庞勒韦证明：在三体引力系统中，运动轨迹在有限时间内暴发到无穷大的唯一可能就是星体发生剧烈对撞。但他同时提出千古谜题：当星体数量达到 4 个或以上时，是否存在某种极端的引力弹弓轨道，让星星们在有限时间内被加速到无限大速度并逃逸到无穷远，而星体之间却‘永远绝不碰撞’？1992年，年仅29岁的中国青年学者夏志宏在五体问题中精妙构造出这一奇迹轨道，一举震撼国际天体力学界！",
            "rules": [
              "牛顿万有引力多体运动微分方程。",
              "奇点：微分方程解在有限时间 $t^*$ 无法继续延拓。",
              "庞勒韦定理：对于三体系统，所有奇异解必定源于星体碰撞。",
              "夏志宏定理：五体系统中存在无碰撞逃逸奇点！"
            ],
            "mystery": "夏志宏构造的五体构型极为精美：两对双星在两个平行平面内高速公转，第五颗极轻的星体在它们之间剧烈往返穿梭，每次借由引力弹弓获得指数级超强加速！",
            "funFact": "萨里证明：任何无碰撞奇点在临界时刻之前必定经历无穷多次剧烈震荡，距离在零与无穷大之间疯狂摆动！"
          },
          "investigators": {
            "tagline": "哈密顿动力系统、辛几何与麦吉希奇点吹花坐标变换。",
            "analogy": "夏志宏结合麦吉希坐标吹花技巧与希尔尼科夫同宿分岔，构造出具有丰富符号动力学结构的紧致不变康托尔集。",
            "rules": [
              "麦吉希相空间吹花正则化。",
              "辛流形相体积保积性与哈密顿守恒量。",
              "Lean 4 常微分方程存在唯一定理。"
            ],
            "mystery": "四体引力系统中是否存在无碰撞逃逸奇点？（四体非碰撞奇点仍是未决前沿！）",
            "funFact": "庞勒韦于1895年提出，夏志宏于1992年完成终极构造证明。"
          },
          "pioneers": {
            "tagline": "奥布里-马瑟理论与天体动力系统中的混沌输运。",
            "analogy": "穿越双碰撞碰撞流形的庞加莱映射可借助 KAM 理论与拟周期轨道微扰深度解析。",
            "rules": [
              "KAM 不变环面破裂分析。",
              "混沌轨道吸引子测度估计。",
              "Lean 4 哈密顿动力学形式化。"
            ],
            "mystery": "高精辛几何积分器可在计算机上精准复现夏氏五体穿梭轨道，数值验证星体速度瞬时暴涨破表。",
            "funFact": "庞勒韦猜想的攻克是自牛顿、欧拉、拉格朗日以来天体力学三百年历史中最璀璨的现代巅峰成就之一。"
          }
        },
        "history": [
          {
            "year": "1895",
            "author": "保罗·庞勒韦",
            "note": "证明三体奇点必为碰撞并提出高阶无碰撞猜想。"
          },
          {
            "year": "1974",
            "author": "理查德·麦吉希",
            "note": "开创奇点吹花坐标变换分析法。"
          },
          {
            "year": "1992",
            "author": "夏志宏",
            "note": "29岁发表划时代杰作，攻克五体庞勒韦猜想！"
          }
        ]
      },
      "zh-Hant": {
        "name": "Painlevé's Conjecture",
        "subtitle": "Particles Flying to Infinity in Finite Time Without Colliding (Solved by Xia 1992)",
        "field": "Celestial Mechanics & Hamiltonian Dynamics",
        "statusBadge": "SOLVED THEOREM (XIA 1992)",
        "grades": {
          "explorers": {
            "tagline": "Can 5 stars dance with gravity so violently that one shoots out of the universe in 1 second?",
            "analogy": "In 1895, French mathematician Paul Painlevé proved that for 3 planets orbiting under Newton's gravity, the ONLY way coordinates can blow up to infinity in finite time is if two planets crash into each other. But he conjectured: for $n \\ge 4$ planets, can celestial bodies accelerate to infinite speed and escape to infinity in FINITE TIME without EVER colliding? In 1992, 29-year-old Chinese mathematician Zhihong Xia proved YES for 5 bodies in a historic breakthrough!",
            "rules": [
              "Newtonian n-body equations: m_i d²r_i/dt² = ∑ G m_i m_j (r_j - r_i) / |r_j - r_i|³.",
              "Singularity: Solution ceases to exist at finite time t*.",
              "Painlevé (1895): For n = 3, all singularities are collisions.",
              "Xia (1992): Non-collision singularity exists for n = 5!"
            ],
            "mystery": "Zhihong Xia's 5-body constellation features two pairs of binary stars orbiting in parallel planes while a lightweight fifth particle oscillates back and forth between them, gaining exponential speed with each pass!",
            "funFact": "Donald Saari showed that any non-collision singularity must oscillate wildly, with particle distances oscillating from zero to infinity infinitely many times before time t*!"
          },
          "investigators": {
            "tagline": "Hamiltonian systems, symplectic geometry, and McGehee coordinates.",
            "analogy": "Xia constructed an invariant Cantor set of initial conditions using symbolic dynamics and Shilnikov homoclinic bifurcations.",
            "rules": [
              "McGehee singularity blow-up coordinates.",
              "Symplectic energy conservation.",
              "Lean 4 Mathlib ODE Cauchy-Lipschitz theorem."
            ],
            "mystery": "Does a non-collision singularity exist for n = 4 gravitational bodies?",
            "funFact": "Paul Painlevé in 1895; solved for n=5 by Zhihong Xia in 1992."
          },
          "pioneers": {
            "tagline": "Aubry-Mather theory and chaotic transport in celestial mechanics.",
            "analogy": "The transition map across the double collision manifold can be analyzed via KAM (Kolmogorov-Arnold-Moser) theory.",
            "rules": [
              "KAM invariant tori breakdown.",
              "Cantor set of chaotic trajectories.",
              "Lean 4 formal Hamiltonian mechanics."
            ],
            "mystery": "Symplectic integrators numerically simulate Xia's 5-body shuttle, demonstrating velocity surpassing 10^{20} m/s in milliseconds.",
            "funFact": "The Painlevé Conjecture resolution is one of the brightest modern triumphs in the glorious history of celestial mechanics."
          }
        },
        "history": [
          {
            "year": "1895",
            "author": "Paul Painlevé",
            "note": "Proves 3-body singularities are collisions; conjectures non-collision singularities for n ≥ 4."
          },
          {
            "year": "1974",
            "author": "Richard McGehee",
            "note": "Introduces singularity blow-up coordinates for celestial mechanics."
          },
          {
            "year": "1992",
            "author": "Zhihong Xia (夏志宏)",
            "note": "Proves Painlevé conjecture by constructing non-collision 5-body singularity."
          }
        ]
      }
    }
  },
  {
    "id": "smale-14",
    "icon": "🦋",
    "difficulty": "Gr 6+",
    "domain": "algebra-analysis",
    "category": "algebra-analysis",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Analysis.ODE.Basic\n-- Smale's 14th Problem (Stephen Smale, 1998, Solved by Warwick Tucker in 1999)\n-- The Lorenz attractor is a robust geometric strange attractor with chaotic dynamics.",
    "locales": {
      "en": {
        "name": "Smale's 14th: Lorenz Attractor",
        "subtitle": "Is the Butterfly Effect a Mathematically Proven Strange Attractor? (Solved by Tucker 1999)",
        "field": "Chaos Theory & Dynamical Systems",
        "statusBadge": "SOLVED THEOREM (TUCKER 1999)",
        "grades": {
          "explorers": {
            "tagline": "Can a butterfly flapping its wings in Brazil really cause a tornado in Texas?",
            "analogy": "In 1963, meteorologist Edward Lorenz modeled atmospheric convection with 3 simple differential equations: dx/dt = σ(y-x), dy/dt = x(ρ-z)-y, dz/dt = xy-βz. The computer traced a breathtaking butterfly-winged shape that looped endlessly without ever crossing or repeating: the world's first 'strange attractor'! In 1998, Fields Medalist Steve Smale listed it as Problem #14 for the 21st century: Prove mathematically that the Lorenz attractor really exists and is chaotic! Warwick Tucker solved it in 1999 using rigorous interval arithmetic!",
            "rules": [
              "Lorenz system: dx/dt = 10(y-x), dy/dt = 28x - y - xz, dz/dt = xy - 8/3 z.",
              "Sensitive dependence on initial conditions (Lyapunov exponent λ > 0).",
              "Smale's Problem: Prove the attractor is a robust geometric strange attractor.",
              "Tucker (1999): Proved using interval arithmetic and normal form theory!"
            ],
            "mystery": "Edward Lorenz discovered chaos entirely by accident when he rounded 0.506127 to 0.506 to save print paper, and watched his weather prediction completely diverge!",
            "funFact": "Tucker's proof ran on a personal workstation for just a few days, evaluating millions of verified Taylor bounding boxes!"
          },
          "investigators": {
            "tagline": "Interval analysis, Poincaré return maps, and cone fields.",
            "analogy": "Tucker proved the existence of an invariant cone field on a Poincaré section, demonstrating uniform hyperbolicity and negative trace yielding volume contraction.",
            "rules": [
              "Poincaré first return map P: Σ → Σ.",
              "Invariant cone field condition: D P(C) ⊂ int(C).",
              "Lean 4 Mathlib dynamical systems."
            ],
            "mystery": "Can we give a purely human, non-computer-assisted analytic proof of the Lorenz attractor?",
            "funFact": "Edward Lorenz in 1963; posed by Smale in 1998; proved by Tucker in 1999."
          },
          "pioneers": {
            "tagline": "SRB (Sinai-Ruelle-Bowen) measures and physical chaos.",
            "analogy": "The Lorenz attractor possesses a unique ergodic SRB measure with positive Lyapunov exponent almost everywhere with respect to Lebesgue volume.",
            "rules": [
              "Hausdorff dimension dim_H ≈ 2.06.",
              "Sinai-Ruelle-Bowen ergodic invariant measure.",
              "Lean 4 measure theory and flow manifolds."
            ],
            "mystery": "Interactive WebGL engines trace 50,000 particles through the Lorenz equations in real-time, demonstrating sensitive dependence.",
            "funFact": "Smale's 14th Problem resolution established computer-assisted mathematics as a respected, rigorous scientific instrument."
          }
        },
        "history": [
          {
            "year": "1963",
            "author": "Edward Lorenz",
            "note": "Discovers deterministic chaos in atmospheric convection model."
          },
          {
            "year": "1998",
            "author": "Stephen Smale",
            "note": "Formulates the 18 Smale Problems for the 21st century."
          },
          {
            "year": "1999",
            "author": "Warwick Tucker",
            "note": "Delivers rigorous computer-assisted proof solving Smale's 14th Problem."
          }
        ]
      },
      "de": {
        "name": "Smale's 14th: Lorenz Attractor",
        "subtitle": "Is the Butterfly Effect a Mathematically Proven Strange Attractor? (Solved by Tucker 1999)",
        "field": "Chaos Theory & Dynamical Systems",
        "statusBadge": "SOLVED THEOREM (TUCKER 1999)",
        "grades": {
          "explorers": {
            "tagline": "Can a butterfly flapping its wings in Brazil really cause a tornado in Texas?",
            "analogy": "In 1963, meteorologist Edward Lorenz modeled atmospheric convection with 3 simple differential equations: dx/dt = σ(y-x), dy/dt = x(ρ-z)-y, dz/dt = xy-βz. The computer traced a breathtaking butterfly-winged shape that looped endlessly without ever crossing or repeating: the world's first 'strange attractor'! In 1998, Fields Medalist Steve Smale listed it as Problem #14 for the 21st century: Prove mathematically that the Lorenz attractor really exists and is chaotic! Warwick Tucker solved it in 1999 using rigorous interval arithmetic!",
            "rules": [
              "Lorenz system: dx/dt = 10(y-x), dy/dt = 28x - y - xz, dz/dt = xy - 8/3 z.",
              "Sensitive dependence on initial conditions (Lyapunov exponent λ > 0).",
              "Smale's Problem: Prove the attractor is a robust geometric strange attractor.",
              "Tucker (1999): Proved using interval arithmetic and normal form theory!"
            ],
            "mystery": "Edward Lorenz discovered chaos entirely by accident when he rounded 0.506127 to 0.506 to save print paper, and watched his weather prediction completely diverge!",
            "funFact": "Tucker's proof ran on a personal workstation for just a few days, evaluating millions of verified Taylor bounding boxes!"
          },
          "investigators": {
            "tagline": "Interval analysis, Poincaré return maps, and cone fields.",
            "analogy": "Tucker proved the existence of an invariant cone field on a Poincaré section, demonstrating uniform hyperbolicity and negative trace yielding volume contraction.",
            "rules": [
              "Poincaré first return map P: Σ → Σ.",
              "Invariant cone field condition: D P(C) ⊂ int(C).",
              "Lean 4 Mathlib dynamical systems."
            ],
            "mystery": "Can we give a purely human, non-computer-assisted analytic proof of the Lorenz attractor?",
            "funFact": "Edward Lorenz in 1963; posed by Smale in 1998; proved by Tucker in 1999."
          },
          "pioneers": {
            "tagline": "SRB (Sinai-Ruelle-Bowen) measures and physical chaos.",
            "analogy": "The Lorenz attractor possesses a unique ergodic SRB measure with positive Lyapunov exponent almost everywhere with respect to Lebesgue volume.",
            "rules": [
              "Hausdorff dimension dim_H ≈ 2.06.",
              "Sinai-Ruelle-Bowen ergodic invariant measure.",
              "Lean 4 measure theory and flow manifolds."
            ],
            "mystery": "Interactive WebGL engines trace 50,000 particles through the Lorenz equations in real-time, demonstrating sensitive dependence.",
            "funFact": "Smale's 14th Problem resolution established computer-assisted mathematics as a respected, rigorous scientific instrument."
          }
        },
        "history": [
          {
            "year": "1963",
            "author": "Edward Lorenz",
            "note": "Discovers deterministic chaos in atmospheric convection model."
          },
          {
            "year": "1998",
            "author": "Stephen Smale",
            "note": "Formulates the 18 Smale Problems for the 21st century."
          },
          {
            "year": "1999",
            "author": "Warwick Tucker",
            "note": "Delivers rigorous computer-assisted proof solving Smale's 14th Problem."
          }
        ]
      },
      "fr": {
        "name": "Smale's 14th: Lorenz Attractor",
        "subtitle": "Is the Butterfly Effect a Mathematically Proven Strange Attractor? (Solved by Tucker 1999)",
        "field": "Chaos Theory & Dynamical Systems",
        "statusBadge": "SOLVED THEOREM (TUCKER 1999)",
        "grades": {
          "explorers": {
            "tagline": "Can a butterfly flapping its wings in Brazil really cause a tornado in Texas?",
            "analogy": "In 1963, meteorologist Edward Lorenz modeled atmospheric convection with 3 simple differential equations: dx/dt = σ(y-x), dy/dt = x(ρ-z)-y, dz/dt = xy-βz. The computer traced a breathtaking butterfly-winged shape that looped endlessly without ever crossing or repeating: the world's first 'strange attractor'! In 1998, Fields Medalist Steve Smale listed it as Problem #14 for the 21st century: Prove mathematically that the Lorenz attractor really exists and is chaotic! Warwick Tucker solved it in 1999 using rigorous interval arithmetic!",
            "rules": [
              "Lorenz system: dx/dt = 10(y-x), dy/dt = 28x - y - xz, dz/dt = xy - 8/3 z.",
              "Sensitive dependence on initial conditions (Lyapunov exponent λ > 0).",
              "Smale's Problem: Prove the attractor is a robust geometric strange attractor.",
              "Tucker (1999): Proved using interval arithmetic and normal form theory!"
            ],
            "mystery": "Edward Lorenz discovered chaos entirely by accident when he rounded 0.506127 to 0.506 to save print paper, and watched his weather prediction completely diverge!",
            "funFact": "Tucker's proof ran on a personal workstation for just a few days, evaluating millions of verified Taylor bounding boxes!"
          },
          "investigators": {
            "tagline": "Interval analysis, Poincaré return maps, and cone fields.",
            "analogy": "Tucker proved the existence of an invariant cone field on a Poincaré section, demonstrating uniform hyperbolicity and negative trace yielding volume contraction.",
            "rules": [
              "Poincaré first return map P: Σ → Σ.",
              "Invariant cone field condition: D P(C) ⊂ int(C).",
              "Lean 4 Mathlib dynamical systems."
            ],
            "mystery": "Can we give a purely human, non-computer-assisted analytic proof of the Lorenz attractor?",
            "funFact": "Edward Lorenz in 1963; posed by Smale in 1998; proved by Tucker in 1999."
          },
          "pioneers": {
            "tagline": "SRB (Sinai-Ruelle-Bowen) measures and physical chaos.",
            "analogy": "The Lorenz attractor possesses a unique ergodic SRB measure with positive Lyapunov exponent almost everywhere with respect to Lebesgue volume.",
            "rules": [
              "Hausdorff dimension dim_H ≈ 2.06.",
              "Sinai-Ruelle-Bowen ergodic invariant measure.",
              "Lean 4 measure theory and flow manifolds."
            ],
            "mystery": "Interactive WebGL engines trace 50,000 particles through the Lorenz equations in real-time, demonstrating sensitive dependence.",
            "funFact": "Smale's 14th Problem resolution established computer-assisted mathematics as a respected, rigorous scientific instrument."
          }
        },
        "history": [
          {
            "year": "1963",
            "author": "Edward Lorenz",
            "note": "Discovers deterministic chaos in atmospheric convection model."
          },
          {
            "year": "1998",
            "author": "Stephen Smale",
            "note": "Formulates the 18 Smale Problems for the 21st century."
          },
          {
            "year": "1999",
            "author": "Warwick Tucker",
            "note": "Delivers rigorous computer-assisted proof solving Smale's 14th Problem."
          }
        ]
      },
      "it": {
        "name": "Smale's 14th: Lorenz Attractor",
        "subtitle": "Is the Butterfly Effect a Mathematically Proven Strange Attractor? (Solved by Tucker 1999)",
        "field": "Chaos Theory & Dynamical Systems",
        "statusBadge": "SOLVED THEOREM (TUCKER 1999)",
        "grades": {
          "explorers": {
            "tagline": "Can a butterfly flapping its wings in Brazil really cause a tornado in Texas?",
            "analogy": "In 1963, meteorologist Edward Lorenz modeled atmospheric convection with 3 simple differential equations: dx/dt = σ(y-x), dy/dt = x(ρ-z)-y, dz/dt = xy-βz. The computer traced a breathtaking butterfly-winged shape that looped endlessly without ever crossing or repeating: the world's first 'strange attractor'! In 1998, Fields Medalist Steve Smale listed it as Problem #14 for the 21st century: Prove mathematically that the Lorenz attractor really exists and is chaotic! Warwick Tucker solved it in 1999 using rigorous interval arithmetic!",
            "rules": [
              "Lorenz system: dx/dt = 10(y-x), dy/dt = 28x - y - xz, dz/dt = xy - 8/3 z.",
              "Sensitive dependence on initial conditions (Lyapunov exponent λ > 0).",
              "Smale's Problem: Prove the attractor is a robust geometric strange attractor.",
              "Tucker (1999): Proved using interval arithmetic and normal form theory!"
            ],
            "mystery": "Edward Lorenz discovered chaos entirely by accident when he rounded 0.506127 to 0.506 to save print paper, and watched his weather prediction completely diverge!",
            "funFact": "Tucker's proof ran on a personal workstation for just a few days, evaluating millions of verified Taylor bounding boxes!"
          },
          "investigators": {
            "tagline": "Interval analysis, Poincaré return maps, and cone fields.",
            "analogy": "Tucker proved the existence of an invariant cone field on a Poincaré section, demonstrating uniform hyperbolicity and negative trace yielding volume contraction.",
            "rules": [
              "Poincaré first return map P: Σ → Σ.",
              "Invariant cone field condition: D P(C) ⊂ int(C).",
              "Lean 4 Mathlib dynamical systems."
            ],
            "mystery": "Can we give a purely human, non-computer-assisted analytic proof of the Lorenz attractor?",
            "funFact": "Edward Lorenz in 1963; posed by Smale in 1998; proved by Tucker in 1999."
          },
          "pioneers": {
            "tagline": "SRB (Sinai-Ruelle-Bowen) measures and physical chaos.",
            "analogy": "The Lorenz attractor possesses a unique ergodic SRB measure with positive Lyapunov exponent almost everywhere with respect to Lebesgue volume.",
            "rules": [
              "Hausdorff dimension dim_H ≈ 2.06.",
              "Sinai-Ruelle-Bowen ergodic invariant measure.",
              "Lean 4 measure theory and flow manifolds."
            ],
            "mystery": "Interactive WebGL engines trace 50,000 particles through the Lorenz equations in real-time, demonstrating sensitive dependence.",
            "funFact": "Smale's 14th Problem resolution established computer-assisted mathematics as a respected, rigorous scientific instrument."
          }
        },
        "history": [
          {
            "year": "1963",
            "author": "Edward Lorenz",
            "note": "Discovers deterministic chaos in atmospheric convection model."
          },
          {
            "year": "1998",
            "author": "Stephen Smale",
            "note": "Formulates the 18 Smale Problems for the 21st century."
          },
          {
            "year": "1999",
            "author": "Warwick Tucker",
            "note": "Delivers rigorous computer-assisted proof solving Smale's 14th Problem."
          }
        ]
      },
      "ja": {
        "name": "Smale's 14th: Lorenz Attractor",
        "subtitle": "Is the Butterfly Effect a Mathematically Proven Strange Attractor? (Solved by Tucker 1999)",
        "field": "Chaos Theory & Dynamical Systems",
        "statusBadge": "SOLVED THEOREM (TUCKER 1999)",
        "grades": {
          "explorers": {
            "tagline": "Can a butterfly flapping its wings in Brazil really cause a tornado in Texas?",
            "analogy": "In 1963, meteorologist Edward Lorenz modeled atmospheric convection with 3 simple differential equations: dx/dt = σ(y-x), dy/dt = x(ρ-z)-y, dz/dt = xy-βz. The computer traced a breathtaking butterfly-winged shape that looped endlessly without ever crossing or repeating: the world's first 'strange attractor'! In 1998, Fields Medalist Steve Smale listed it as Problem #14 for the 21st century: Prove mathematically that the Lorenz attractor really exists and is chaotic! Warwick Tucker solved it in 1999 using rigorous interval arithmetic!",
            "rules": [
              "Lorenz system: dx/dt = 10(y-x), dy/dt = 28x - y - xz, dz/dt = xy - 8/3 z.",
              "Sensitive dependence on initial conditions (Lyapunov exponent λ > 0).",
              "Smale's Problem: Prove the attractor is a robust geometric strange attractor.",
              "Tucker (1999): Proved using interval arithmetic and normal form theory!"
            ],
            "mystery": "Edward Lorenz discovered chaos entirely by accident when he rounded 0.506127 to 0.506 to save print paper, and watched his weather prediction completely diverge!",
            "funFact": "Tucker's proof ran on a personal workstation for just a few days, evaluating millions of verified Taylor bounding boxes!"
          },
          "investigators": {
            "tagline": "Interval analysis, Poincaré return maps, and cone fields.",
            "analogy": "Tucker proved the existence of an invariant cone field on a Poincaré section, demonstrating uniform hyperbolicity and negative trace yielding volume contraction.",
            "rules": [
              "Poincaré first return map P: Σ → Σ.",
              "Invariant cone field condition: D P(C) ⊂ int(C).",
              "Lean 4 Mathlib dynamical systems."
            ],
            "mystery": "Can we give a purely human, non-computer-assisted analytic proof of the Lorenz attractor?",
            "funFact": "Edward Lorenz in 1963; posed by Smale in 1998; proved by Tucker in 1999."
          },
          "pioneers": {
            "tagline": "SRB (Sinai-Ruelle-Bowen) measures and physical chaos.",
            "analogy": "The Lorenz attractor possesses a unique ergodic SRB measure with positive Lyapunov exponent almost everywhere with respect to Lebesgue volume.",
            "rules": [
              "Hausdorff dimension dim_H ≈ 2.06.",
              "Sinai-Ruelle-Bowen ergodic invariant measure.",
              "Lean 4 measure theory and flow manifolds."
            ],
            "mystery": "Interactive WebGL engines trace 50,000 particles through the Lorenz equations in real-time, demonstrating sensitive dependence.",
            "funFact": "Smale's 14th Problem resolution established computer-assisted mathematics as a respected, rigorous scientific instrument."
          }
        },
        "history": [
          {
            "year": "1963",
            "author": "Edward Lorenz",
            "note": "Discovers deterministic chaos in atmospheric convection model."
          },
          {
            "year": "1998",
            "author": "Stephen Smale",
            "note": "Formulates the 18 Smale Problems for the 21st century."
          },
          {
            "year": "1999",
            "author": "Warwick Tucker",
            "note": "Delivers rigorous computer-assisted proof solving Smale's 14th Problem."
          }
        ]
      },
      "ko": {
        "name": "Smale's 14th: Lorenz Attractor",
        "subtitle": "Is the Butterfly Effect a Mathematically Proven Strange Attractor? (Solved by Tucker 1999)",
        "field": "Chaos Theory & Dynamical Systems",
        "statusBadge": "SOLVED THEOREM (TUCKER 1999)",
        "grades": {
          "explorers": {
            "tagline": "Can a butterfly flapping its wings in Brazil really cause a tornado in Texas?",
            "analogy": "In 1963, meteorologist Edward Lorenz modeled atmospheric convection with 3 simple differential equations: dx/dt = σ(y-x), dy/dt = x(ρ-z)-y, dz/dt = xy-βz. The computer traced a breathtaking butterfly-winged shape that looped endlessly without ever crossing or repeating: the world's first 'strange attractor'! In 1998, Fields Medalist Steve Smale listed it as Problem #14 for the 21st century: Prove mathematically that the Lorenz attractor really exists and is chaotic! Warwick Tucker solved it in 1999 using rigorous interval arithmetic!",
            "rules": [
              "Lorenz system: dx/dt = 10(y-x), dy/dt = 28x - y - xz, dz/dt = xy - 8/3 z.",
              "Sensitive dependence on initial conditions (Lyapunov exponent λ > 0).",
              "Smale's Problem: Prove the attractor is a robust geometric strange attractor.",
              "Tucker (1999): Proved using interval arithmetic and normal form theory!"
            ],
            "mystery": "Edward Lorenz discovered chaos entirely by accident when he rounded 0.506127 to 0.506 to save print paper, and watched his weather prediction completely diverge!",
            "funFact": "Tucker's proof ran on a personal workstation for just a few days, evaluating millions of verified Taylor bounding boxes!"
          },
          "investigators": {
            "tagline": "Interval analysis, Poincaré return maps, and cone fields.",
            "analogy": "Tucker proved the existence of an invariant cone field on a Poincaré section, demonstrating uniform hyperbolicity and negative trace yielding volume contraction.",
            "rules": [
              "Poincaré first return map P: Σ → Σ.",
              "Invariant cone field condition: D P(C) ⊂ int(C).",
              "Lean 4 Mathlib dynamical systems."
            ],
            "mystery": "Can we give a purely human, non-computer-assisted analytic proof of the Lorenz attractor?",
            "funFact": "Edward Lorenz in 1963; posed by Smale in 1998; proved by Tucker in 1999."
          },
          "pioneers": {
            "tagline": "SRB (Sinai-Ruelle-Bowen) measures and physical chaos.",
            "analogy": "The Lorenz attractor possesses a unique ergodic SRB measure with positive Lyapunov exponent almost everywhere with respect to Lebesgue volume.",
            "rules": [
              "Hausdorff dimension dim_H ≈ 2.06.",
              "Sinai-Ruelle-Bowen ergodic invariant measure.",
              "Lean 4 measure theory and flow manifolds."
            ],
            "mystery": "Interactive WebGL engines trace 50,000 particles through the Lorenz equations in real-time, demonstrating sensitive dependence.",
            "funFact": "Smale's 14th Problem resolution established computer-assisted mathematics as a respected, rigorous scientific instrument."
          }
        },
        "history": [
          {
            "year": "1963",
            "author": "Edward Lorenz",
            "note": "Discovers deterministic chaos in atmospheric convection model."
          },
          {
            "year": "1998",
            "author": "Stephen Smale",
            "note": "Formulates the 18 Smale Problems for the 21st century."
          },
          {
            "year": "1999",
            "author": "Warwick Tucker",
            "note": "Delivers rigorous computer-assisted proof solving Smale's 14th Problem."
          }
        ]
      },
      "zh-Hans": {
        "name": "斯梅尔第14问题（洛伦茨吸引子奇迹）",
        "subtitle": "蝴蝶效应中的洛伦茨吸引子是否为严格奇异吸引子（塔克1999年区间算术获证）",
        "field": "混沌理论 & 微分动力系统",
        "statusBadge": "塔克区间算术划时代证明",
        "grades": {
          "explorers": {
            "tagline": "一只南美洲亚马逊河流域热带雨林中的蝴蝶偶尔扇动几下翅膀，真的能在德克萨斯掀起一场龙卷风吗？",
            "analogy": "1963年气象学家爱德华·洛伦茨用三条极其简单的非线性微分方程模拟大气对流。在计算机屏幕上，解的轨迹勾勒出一幅摄人心魄的双翼蝴蝶图案，两只翅膀无限循环盘旋，永不自交、永不重复：这就是全人类发现的第一个‘奇异吸引子’！1998年菲尔兹奖得主斯梅尔将其列为面向21世纪的18大数学难题第14题：严格证明洛伦茨方程确实支撑着一个鲁棒的奇异吸引子！1999年沃里克·塔克运用严密的计算机辅助区间算术，彻底证实了这一混沌圣杯！",
            "rules": [
              "洛伦茨方程参数：$\\sigma=10, \\rho=28, \\beta=8/3$。",
              "对初始条件的极端敏感依赖性（最大李雅普诺夫指数 $\\lambda > 0$）。",
              "斯梅尔第14问题：严格证明该吸引子为几何奇异吸引子。",
              "塔克 (1999)：结合正规型理论与严密区间算术彻底证明！"
            ],
            "mystery": "洛伦茨完全是偶然发现混沌的：为了省打印纸，他把数据 0.506127 简写为 0.506 重新计算，结果原本平静的天气预测竟演变出天翻地覆的风暴！",
            "funFact": "塔克的严谨区间积分程序在一台普通个人电脑上仅仅运行了几天，穷尽计算了数百万个由高阶泰勒展开包裹的严密边界盒！"
          },
          "investigators": {
            "tagline": "区间分析、庞加莱截面返回映射与双曲不变锥场。",
            "analogy": "塔克通过在横截面上严格建立切空间中的不变锥场，证实了动力系统具备一致扩张与强双曲性，发散率由迹负性保证体积极度收缩。",
            "rules": [
              "庞加莱截面首次返回映射。",
              "双曲扩张不变锥场代数包含式。",
              "Lean 4 微分动力系统形式化。"
            ],
            "mystery": "能否给出一个纯粹解析、完全不依赖计算机辅助的人类纸笔证明？",
            "funFact": "洛伦茨于1963年发现，斯梅尔于1998年立题，塔克于1999年获证。"
          },
          "pioneers": {
            "tagline": "SRB 物理不变测度与遍历奇异吸引子。",
            "analogy": "洛伦茨吸引子在相空间几乎处处具有唯一的遍历 SRB 测度，其豪斯多夫维数约为 2.06。",
            "rules": [
              "吸引子豪斯多夫分形维数。",
              "SRB 不变物理测度极限定理。",
              "Lean 4 测度论与遍历积分库。"
            ],
            "mystery": "交互式 WebGL 引擎实时渲染数万个相空间粒子在洛伦茨双翼间的穿梭与混沌发散。",
            "funFact": "斯梅尔第14问题的彻底破解将计算机严谨区间辅助证明确立为现代数学不可撼动的强力支柱。"
          }
        },
        "history": [
          {
            "year": "1963",
            "author": "爱因·洛伦茨",
            "note": "在大气对流模型中首次发现混沌奇异吸引子。"
          },
          {
            "year": "1998",
            "author": "斯蒂芬·斯梅尔",
            "note": "发布面向21世纪的18大数学难题清单。"
          },
          {
            "year": "1999",
            "author": "沃里克·塔克",
            "note": "运用区间算术彻底攻克斯梅尔第14问题！"
          }
        ]
      },
      "zh-Hant": {
        "name": "Smale's 14th: Lorenz Attractor",
        "subtitle": "Is the Butterfly Effect a Mathematically Proven Strange Attractor? (Solved by Tucker 1999)",
        "field": "Chaos Theory & Dynamical Systems",
        "statusBadge": "SOLVED THEOREM (TUCKER 1999)",
        "grades": {
          "explorers": {
            "tagline": "Can a butterfly flapping its wings in Brazil really cause a tornado in Texas?",
            "analogy": "In 1963, meteorologist Edward Lorenz modeled atmospheric convection with 3 simple differential equations: dx/dt = σ(y-x), dy/dt = x(ρ-z)-y, dz/dt = xy-βz. The computer traced a breathtaking butterfly-winged shape that looped endlessly without ever crossing or repeating: the world's first 'strange attractor'! In 1998, Fields Medalist Steve Smale listed it as Problem #14 for the 21st century: Prove mathematically that the Lorenz attractor really exists and is chaotic! Warwick Tucker solved it in 1999 using rigorous interval arithmetic!",
            "rules": [
              "Lorenz system: dx/dt = 10(y-x), dy/dt = 28x - y - xz, dz/dt = xy - 8/3 z.",
              "Sensitive dependence on initial conditions (Lyapunov exponent λ > 0).",
              "Smale's Problem: Prove the attractor is a robust geometric strange attractor.",
              "Tucker (1999): Proved using interval arithmetic and normal form theory!"
            ],
            "mystery": "Edward Lorenz discovered chaos entirely by accident when he rounded 0.506127 to 0.506 to save print paper, and watched his weather prediction completely diverge!",
            "funFact": "Tucker's proof ran on a personal workstation for just a few days, evaluating millions of verified Taylor bounding boxes!"
          },
          "investigators": {
            "tagline": "Interval analysis, Poincaré return maps, and cone fields.",
            "analogy": "Tucker proved the existence of an invariant cone field on a Poincaré section, demonstrating uniform hyperbolicity and negative trace yielding volume contraction.",
            "rules": [
              "Poincaré first return map P: Σ → Σ.",
              "Invariant cone field condition: D P(C) ⊂ int(C).",
              "Lean 4 Mathlib dynamical systems."
            ],
            "mystery": "Can we give a purely human, non-computer-assisted analytic proof of the Lorenz attractor?",
            "funFact": "Edward Lorenz in 1963; posed by Smale in 1998; proved by Tucker in 1999."
          },
          "pioneers": {
            "tagline": "SRB (Sinai-Ruelle-Bowen) measures and physical chaos.",
            "analogy": "The Lorenz attractor possesses a unique ergodic SRB measure with positive Lyapunov exponent almost everywhere with respect to Lebesgue volume.",
            "rules": [
              "Hausdorff dimension dim_H ≈ 2.06.",
              "Sinai-Ruelle-Bowen ergodic invariant measure.",
              "Lean 4 measure theory and flow manifolds."
            ],
            "mystery": "Interactive WebGL engines trace 50,000 particles through the Lorenz equations in real-time, demonstrating sensitive dependence.",
            "funFact": "Smale's 14th Problem resolution established computer-assisted mathematics as a respected, rigorous scientific instrument."
          }
        },
        "history": [
          {
            "year": "1963",
            "author": "Edward Lorenz",
            "note": "Discovers deterministic chaos in atmospheric convection model."
          },
          {
            "year": "1998",
            "author": "Stephen Smale",
            "note": "Formulates the 18 Smale Problems for the 21st century."
          },
          {
            "year": "1999",
            "author": "Warwick Tucker",
            "note": "Delivers rigorous computer-assisted proof solving Smale's 14th Problem."
          }
        ]
      }
    }
  },
  {
    "id": "casas-alvero",
    "icon": "🌱",
    "difficulty": "Gr 9+",
    "domain": "algebra-analysis",
    "category": "algebra-analysis",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Algebra.Polynomial.Basic\n-- Casas-Alvero Conjecture (Eduardo Casas-Alvero, 2001)\n-- If a degree d complex polynomial shares a root with each of its derivatives P^(1), ..., P^(d-1), then P(z) = c (z - a)^d.",
    "locales": {
      "en": {
        "name": "Casas-Alvero Conjecture",
        "subtitle": "Can a Polynomial Share Roots with ALL Its Derivatives Without Being a Monomial?",
        "field": "Algebraic Geometry & Polynomial Invariants",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "If every slope and curve of a roller coaster has a zero at one of the hills, must the roller coaster be a single giant bowl?",
            "analogy": "In 2001, Spanish algebraic geometer Eduardo Casas-Alvero posed a deceptively simple riddle about high school polynomials: Suppose $P(z)$ is a polynomial of degree $d$ with complex coefficients. If $P(z)$ shares AT LEAST ONE common root with EVERY one of its higher derivatives $P'(z), P''(z), ..., P^{(d-1)}(z)$, must $P(z)$ be of the form $c(z - a)^d$ (a single root repeated $d$ times)? Despite testing up to degree 11 and many infinite families of degrees, it remains UNPROVED in general!",
            "rules": [
              "P(z) is a degree d polynomial over ℂ.",
              "Condition: gcd(P, P^(k)) ≠ 1 for all k = 1, 2, ..., d-1.",
              "Conjecture: P(z) = c (z - a)^d.",
              "Proved for degrees d = p^k (prime powers), 2p^k, and all d ≤ 11!"
            ],
            "mystery": "The conjecture fails in characteristic p > 0! Over a field of characteristic p, P(z) = z^{p+1} - z^p has derivatives vanishing identically, giving counterexamples in finite fields!",
            "funFact": "Draisma and de Jong (2011) proved that for any degree d, there are at most finitely many potential counterexamples up to affine scaling."
          },
          "investigators": {
            "tagline": "Resultants, bad primes, and Gröbner bases.",
            "analogy": "Castryck et al. showed that if the conjecture is false for degree d, then d must have at least three distinct prime factors (smallest open case was d = 12 = 2² × 3, solved by massive resultants).",
            "rules": [
              "Resultant polynomial Res(P, P^(k)).",
              "Intersection theory of algebraic curves.",
              "Lean 4 Mathlib polynomial division."
            ],
            "mystery": "Can we prove the Casas-Alvero conjecture for ALL degrees d simultaneously using Galois theory?",
            "funFact": "Eduardo Casas-Alvero proposed the problem in 2001."
          },
          "pioneers": {
            "tagline": "Valuations on function fields and tropical geometry.",
            "analogy": "Tropical geometry models the roots as infinite valuations, bounding collision configurations under logarithmic deformation.",
            "rules": [
              "Tropical polynomial amoebas.",
              "Newton polytope deformations.",
              "Lean 4 Mathlib algebraic geometry."
            ],
            "mystery": "AI symbolic algebra engines compute multi-gigabyte resultant determinants to verify cases up to degree 14.",
            "funFact": "The Casas-Alvero Conjecture shows that even the most elementary high-school polynomials harbor deepest uncharted secrets."
          }
        },
        "history": [
          {
            "year": "2001",
            "author": "Eduardo Casas-Alvero",
            "note": "Formulates the conjecture while studying singularities of planar curves."
          },
          {
            "year": "2006",
            "author": "Hans-Christian Graf von Bothmer et al.",
            "note": "Prove conjecture for prime degrees and powers using p-adic methods."
          },
          {
            "year": "2014",
            "author": "Castryck, Laterveer & Ounaïes",
            "note": "Rule out counterexamples for degrees with at most two distinct prime factors."
          }
        ]
      },
      "de": {
        "name": "Casas-Alvero Conjecture",
        "subtitle": "Can a Polynomial Share Roots with ALL Its Derivatives Without Being a Monomial?",
        "field": "Algebraic Geometry & Polynomial Invariants",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "If every slope and curve of a roller coaster has a zero at one of the hills, must the roller coaster be a single giant bowl?",
            "analogy": "In 2001, Spanish algebraic geometer Eduardo Casas-Alvero posed a deceptively simple riddle about high school polynomials: Suppose $P(z)$ is a polynomial of degree $d$ with complex coefficients. If $P(z)$ shares AT LEAST ONE common root with EVERY one of its higher derivatives $P'(z), P''(z), ..., P^{(d-1)}(z)$, must $P(z)$ be of the form $c(z - a)^d$ (a single root repeated $d$ times)? Despite testing up to degree 11 and many infinite families of degrees, it remains UNPROVED in general!",
            "rules": [
              "P(z) is a degree d polynomial over ℂ.",
              "Condition: gcd(P, P^(k)) ≠ 1 for all k = 1, 2, ..., d-1.",
              "Conjecture: P(z) = c (z - a)^d.",
              "Proved for degrees d = p^k (prime powers), 2p^k, and all d ≤ 11!"
            ],
            "mystery": "The conjecture fails in characteristic p > 0! Over a field of characteristic p, P(z) = z^{p+1} - z^p has derivatives vanishing identically, giving counterexamples in finite fields!",
            "funFact": "Draisma and de Jong (2011) proved that for any degree d, there are at most finitely many potential counterexamples up to affine scaling."
          },
          "investigators": {
            "tagline": "Resultants, bad primes, and Gröbner bases.",
            "analogy": "Castryck et al. showed that if the conjecture is false for degree d, then d must have at least three distinct prime factors (smallest open case was d = 12 = 2² × 3, solved by massive resultants).",
            "rules": [
              "Resultant polynomial Res(P, P^(k)).",
              "Intersection theory of algebraic curves.",
              "Lean 4 Mathlib polynomial division."
            ],
            "mystery": "Can we prove the Casas-Alvero conjecture for ALL degrees d simultaneously using Galois theory?",
            "funFact": "Eduardo Casas-Alvero proposed the problem in 2001."
          },
          "pioneers": {
            "tagline": "Valuations on function fields and tropical geometry.",
            "analogy": "Tropical geometry models the roots as infinite valuations, bounding collision configurations under logarithmic deformation.",
            "rules": [
              "Tropical polynomial amoebas.",
              "Newton polytope deformations.",
              "Lean 4 Mathlib algebraic geometry."
            ],
            "mystery": "AI symbolic algebra engines compute multi-gigabyte resultant determinants to verify cases up to degree 14.",
            "funFact": "The Casas-Alvero Conjecture shows that even the most elementary high-school polynomials harbor deepest uncharted secrets."
          }
        },
        "history": [
          {
            "year": "2001",
            "author": "Eduardo Casas-Alvero",
            "note": "Formulates the conjecture while studying singularities of planar curves."
          },
          {
            "year": "2006",
            "author": "Hans-Christian Graf von Bothmer et al.",
            "note": "Prove conjecture for prime degrees and powers using p-adic methods."
          },
          {
            "year": "2014",
            "author": "Castryck, Laterveer & Ounaïes",
            "note": "Rule out counterexamples for degrees with at most two distinct prime factors."
          }
        ]
      },
      "fr": {
        "name": "Casas-Alvero Conjecture",
        "subtitle": "Can a Polynomial Share Roots with ALL Its Derivatives Without Being a Monomial?",
        "field": "Algebraic Geometry & Polynomial Invariants",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "If every slope and curve of a roller coaster has a zero at one of the hills, must the roller coaster be a single giant bowl?",
            "analogy": "In 2001, Spanish algebraic geometer Eduardo Casas-Alvero posed a deceptively simple riddle about high school polynomials: Suppose $P(z)$ is a polynomial of degree $d$ with complex coefficients. If $P(z)$ shares AT LEAST ONE common root with EVERY one of its higher derivatives $P'(z), P''(z), ..., P^{(d-1)}(z)$, must $P(z)$ be of the form $c(z - a)^d$ (a single root repeated $d$ times)? Despite testing up to degree 11 and many infinite families of degrees, it remains UNPROVED in general!",
            "rules": [
              "P(z) is a degree d polynomial over ℂ.",
              "Condition: gcd(P, P^(k)) ≠ 1 for all k = 1, 2, ..., d-1.",
              "Conjecture: P(z) = c (z - a)^d.",
              "Proved for degrees d = p^k (prime powers), 2p^k, and all d ≤ 11!"
            ],
            "mystery": "The conjecture fails in characteristic p > 0! Over a field of characteristic p, P(z) = z^{p+1} - z^p has derivatives vanishing identically, giving counterexamples in finite fields!",
            "funFact": "Draisma and de Jong (2011) proved that for any degree d, there are at most finitely many potential counterexamples up to affine scaling."
          },
          "investigators": {
            "tagline": "Resultants, bad primes, and Gröbner bases.",
            "analogy": "Castryck et al. showed that if the conjecture is false for degree d, then d must have at least three distinct prime factors (smallest open case was d = 12 = 2² × 3, solved by massive resultants).",
            "rules": [
              "Resultant polynomial Res(P, P^(k)).",
              "Intersection theory of algebraic curves.",
              "Lean 4 Mathlib polynomial division."
            ],
            "mystery": "Can we prove the Casas-Alvero conjecture for ALL degrees d simultaneously using Galois theory?",
            "funFact": "Eduardo Casas-Alvero proposed the problem in 2001."
          },
          "pioneers": {
            "tagline": "Valuations on function fields and tropical geometry.",
            "analogy": "Tropical geometry models the roots as infinite valuations, bounding collision configurations under logarithmic deformation.",
            "rules": [
              "Tropical polynomial amoebas.",
              "Newton polytope deformations.",
              "Lean 4 Mathlib algebraic geometry."
            ],
            "mystery": "AI symbolic algebra engines compute multi-gigabyte resultant determinants to verify cases up to degree 14.",
            "funFact": "The Casas-Alvero Conjecture shows that even the most elementary high-school polynomials harbor deepest uncharted secrets."
          }
        },
        "history": [
          {
            "year": "2001",
            "author": "Eduardo Casas-Alvero",
            "note": "Formulates the conjecture while studying singularities of planar curves."
          },
          {
            "year": "2006",
            "author": "Hans-Christian Graf von Bothmer et al.",
            "note": "Prove conjecture for prime degrees and powers using p-adic methods."
          },
          {
            "year": "2014",
            "author": "Castryck, Laterveer & Ounaïes",
            "note": "Rule out counterexamples for degrees with at most two distinct prime factors."
          }
        ]
      },
      "it": {
        "name": "Casas-Alvero Conjecture",
        "subtitle": "Can a Polynomial Share Roots with ALL Its Derivatives Without Being a Monomial?",
        "field": "Algebraic Geometry & Polynomial Invariants",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "If every slope and curve of a roller coaster has a zero at one of the hills, must the roller coaster be a single giant bowl?",
            "analogy": "In 2001, Spanish algebraic geometer Eduardo Casas-Alvero posed a deceptively simple riddle about high school polynomials: Suppose $P(z)$ is a polynomial of degree $d$ with complex coefficients. If $P(z)$ shares AT LEAST ONE common root with EVERY one of its higher derivatives $P'(z), P''(z), ..., P^{(d-1)}(z)$, must $P(z)$ be of the form $c(z - a)^d$ (a single root repeated $d$ times)? Despite testing up to degree 11 and many infinite families of degrees, it remains UNPROVED in general!",
            "rules": [
              "P(z) is a degree d polynomial over ℂ.",
              "Condition: gcd(P, P^(k)) ≠ 1 for all k = 1, 2, ..., d-1.",
              "Conjecture: P(z) = c (z - a)^d.",
              "Proved for degrees d = p^k (prime powers), 2p^k, and all d ≤ 11!"
            ],
            "mystery": "The conjecture fails in characteristic p > 0! Over a field of characteristic p, P(z) = z^{p+1} - z^p has derivatives vanishing identically, giving counterexamples in finite fields!",
            "funFact": "Draisma and de Jong (2011) proved that for any degree d, there are at most finitely many potential counterexamples up to affine scaling."
          },
          "investigators": {
            "tagline": "Resultants, bad primes, and Gröbner bases.",
            "analogy": "Castryck et al. showed that if the conjecture is false for degree d, then d must have at least three distinct prime factors (smallest open case was d = 12 = 2² × 3, solved by massive resultants).",
            "rules": [
              "Resultant polynomial Res(P, P^(k)).",
              "Intersection theory of algebraic curves.",
              "Lean 4 Mathlib polynomial division."
            ],
            "mystery": "Can we prove the Casas-Alvero conjecture for ALL degrees d simultaneously using Galois theory?",
            "funFact": "Eduardo Casas-Alvero proposed the problem in 2001."
          },
          "pioneers": {
            "tagline": "Valuations on function fields and tropical geometry.",
            "analogy": "Tropical geometry models the roots as infinite valuations, bounding collision configurations under logarithmic deformation.",
            "rules": [
              "Tropical polynomial amoebas.",
              "Newton polytope deformations.",
              "Lean 4 Mathlib algebraic geometry."
            ],
            "mystery": "AI symbolic algebra engines compute multi-gigabyte resultant determinants to verify cases up to degree 14.",
            "funFact": "The Casas-Alvero Conjecture shows that even the most elementary high-school polynomials harbor deepest uncharted secrets."
          }
        },
        "history": [
          {
            "year": "2001",
            "author": "Eduardo Casas-Alvero",
            "note": "Formulates the conjecture while studying singularities of planar curves."
          },
          {
            "year": "2006",
            "author": "Hans-Christian Graf von Bothmer et al.",
            "note": "Prove conjecture for prime degrees and powers using p-adic methods."
          },
          {
            "year": "2014",
            "author": "Castryck, Laterveer & Ounaïes",
            "note": "Rule out counterexamples for degrees with at most two distinct prime factors."
          }
        ]
      },
      "ja": {
        "name": "Casas-Alvero Conjecture",
        "subtitle": "Can a Polynomial Share Roots with ALL Its Derivatives Without Being a Monomial?",
        "field": "Algebraic Geometry & Polynomial Invariants",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "If every slope and curve of a roller coaster has a zero at one of the hills, must the roller coaster be a single giant bowl?",
            "analogy": "In 2001, Spanish algebraic geometer Eduardo Casas-Alvero posed a deceptively simple riddle about high school polynomials: Suppose $P(z)$ is a polynomial of degree $d$ with complex coefficients. If $P(z)$ shares AT LEAST ONE common root with EVERY one of its higher derivatives $P'(z), P''(z), ..., P^{(d-1)}(z)$, must $P(z)$ be of the form $c(z - a)^d$ (a single root repeated $d$ times)? Despite testing up to degree 11 and many infinite families of degrees, it remains UNPROVED in general!",
            "rules": [
              "P(z) is a degree d polynomial over ℂ.",
              "Condition: gcd(P, P^(k)) ≠ 1 for all k = 1, 2, ..., d-1.",
              "Conjecture: P(z) = c (z - a)^d.",
              "Proved for degrees d = p^k (prime powers), 2p^k, and all d ≤ 11!"
            ],
            "mystery": "The conjecture fails in characteristic p > 0! Over a field of characteristic p, P(z) = z^{p+1} - z^p has derivatives vanishing identically, giving counterexamples in finite fields!",
            "funFact": "Draisma and de Jong (2011) proved that for any degree d, there are at most finitely many potential counterexamples up to affine scaling."
          },
          "investigators": {
            "tagline": "Resultants, bad primes, and Gröbner bases.",
            "analogy": "Castryck et al. showed that if the conjecture is false for degree d, then d must have at least three distinct prime factors (smallest open case was d = 12 = 2² × 3, solved by massive resultants).",
            "rules": [
              "Resultant polynomial Res(P, P^(k)).",
              "Intersection theory of algebraic curves.",
              "Lean 4 Mathlib polynomial division."
            ],
            "mystery": "Can we prove the Casas-Alvero conjecture for ALL degrees d simultaneously using Galois theory?",
            "funFact": "Eduardo Casas-Alvero proposed the problem in 2001."
          },
          "pioneers": {
            "tagline": "Valuations on function fields and tropical geometry.",
            "analogy": "Tropical geometry models the roots as infinite valuations, bounding collision configurations under logarithmic deformation.",
            "rules": [
              "Tropical polynomial amoebas.",
              "Newton polytope deformations.",
              "Lean 4 Mathlib algebraic geometry."
            ],
            "mystery": "AI symbolic algebra engines compute multi-gigabyte resultant determinants to verify cases up to degree 14.",
            "funFact": "The Casas-Alvero Conjecture shows that even the most elementary high-school polynomials harbor deepest uncharted secrets."
          }
        },
        "history": [
          {
            "year": "2001",
            "author": "Eduardo Casas-Alvero",
            "note": "Formulates the conjecture while studying singularities of planar curves."
          },
          {
            "year": "2006",
            "author": "Hans-Christian Graf von Bothmer et al.",
            "note": "Prove conjecture for prime degrees and powers using p-adic methods."
          },
          {
            "year": "2014",
            "author": "Castryck, Laterveer & Ounaïes",
            "note": "Rule out counterexamples for degrees with at most two distinct prime factors."
          }
        ]
      },
      "ko": {
        "name": "Casas-Alvero Conjecture",
        "subtitle": "Can a Polynomial Share Roots with ALL Its Derivatives Without Being a Monomial?",
        "field": "Algebraic Geometry & Polynomial Invariants",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "If every slope and curve of a roller coaster has a zero at one of the hills, must the roller coaster be a single giant bowl?",
            "analogy": "In 2001, Spanish algebraic geometer Eduardo Casas-Alvero posed a deceptively simple riddle about high school polynomials: Suppose $P(z)$ is a polynomial of degree $d$ with complex coefficients. If $P(z)$ shares AT LEAST ONE common root with EVERY one of its higher derivatives $P'(z), P''(z), ..., P^{(d-1)}(z)$, must $P(z)$ be of the form $c(z - a)^d$ (a single root repeated $d$ times)? Despite testing up to degree 11 and many infinite families of degrees, it remains UNPROVED in general!",
            "rules": [
              "P(z) is a degree d polynomial over ℂ.",
              "Condition: gcd(P, P^(k)) ≠ 1 for all k = 1, 2, ..., d-1.",
              "Conjecture: P(z) = c (z - a)^d.",
              "Proved for degrees d = p^k (prime powers), 2p^k, and all d ≤ 11!"
            ],
            "mystery": "The conjecture fails in characteristic p > 0! Over a field of characteristic p, P(z) = z^{p+1} - z^p has derivatives vanishing identically, giving counterexamples in finite fields!",
            "funFact": "Draisma and de Jong (2011) proved that for any degree d, there are at most finitely many potential counterexamples up to affine scaling."
          },
          "investigators": {
            "tagline": "Resultants, bad primes, and Gröbner bases.",
            "analogy": "Castryck et al. showed that if the conjecture is false for degree d, then d must have at least three distinct prime factors (smallest open case was d = 12 = 2² × 3, solved by massive resultants).",
            "rules": [
              "Resultant polynomial Res(P, P^(k)).",
              "Intersection theory of algebraic curves.",
              "Lean 4 Mathlib polynomial division."
            ],
            "mystery": "Can we prove the Casas-Alvero conjecture for ALL degrees d simultaneously using Galois theory?",
            "funFact": "Eduardo Casas-Alvero proposed the problem in 2001."
          },
          "pioneers": {
            "tagline": "Valuations on function fields and tropical geometry.",
            "analogy": "Tropical geometry models the roots as infinite valuations, bounding collision configurations under logarithmic deformation.",
            "rules": [
              "Tropical polynomial amoebas.",
              "Newton polytope deformations.",
              "Lean 4 Mathlib algebraic geometry."
            ],
            "mystery": "AI symbolic algebra engines compute multi-gigabyte resultant determinants to verify cases up to degree 14.",
            "funFact": "The Casas-Alvero Conjecture shows that even the most elementary high-school polynomials harbor deepest uncharted secrets."
          }
        },
        "history": [
          {
            "year": "2001",
            "author": "Eduardo Casas-Alvero",
            "note": "Formulates the conjecture while studying singularities of planar curves."
          },
          {
            "year": "2006",
            "author": "Hans-Christian Graf von Bothmer et al.",
            "note": "Prove conjecture for prime degrees and powers using p-adic methods."
          },
          {
            "year": "2014",
            "author": "Castryck, Laterveer & Ounaïes",
            "note": "Rule out counterexamples for degrees with at most two distinct prime factors."
          }
        ]
      },
      "zh-Hans": {
        "name": "卡萨斯-阿尔韦罗猜想",
        "subtitle": "一个多项式若与自己的各阶导数都共享零点，它是否必定只能是单项完全幂形式？",
        "field": "代数几何 & 多项式根系不变量",
        "statusBadge": "未解之谜",
        "grades": {
          "explorers": {
            "tagline": "如果过山车每一阶段的斜率和弯曲度都恰好在某个坡顶归零，整个轨道是不是必定只是一个平平无奇的单峰滑梯？",
            "analogy": "2001年西班牙代数几何学家卡萨斯-阿尔韦罗提出了一个关于高中多项式极其精妙的猜想：设 $P(z)$ 是一个 $d$ 次复系数多项式。如果 $P(z)$ 与它的每一个高阶导数 $P'(z), P''(z), \\dots, P^{(d-1)}(z)$ 都至少拥有一个公共根，那么 $P(z)$ 是否必然只能写成 $c(z - a)^d$ 的平凡形式（即只有一个唯一的重根）？这一看似初等的高中代数题，至今全人类数学家居然无法给出完全解答！",
            "rules": [
              "$P(z)$ 是复数域上的 $d$ 次多项式。",
              "条件：对所有 $k = 1, \\dots, d-1$ 均有 $\\gcd(P, P^{(k)}) \\ne 1$。",
              "猜想：$P(z) = c (z - a)^d$ 只有一个单根。",
              "已对所有素数幂 $p^k$、两倍素数幂 $2p^k$ 以及所有 $d \\le 11$ 获证！"
            ],
            "mystery": "在正特征域上该猜想完全失效！例如在特征为 $p$ 的有限域上，$P(z) = z^{p+1} - z^p$ 的高阶导数会自动恒等于零，因此该猜想本质上深植于复数域的刚性！",
            "funFact": "德赖斯马与德容于2011年证明：对于任意给定次数 $d$，在仿射变换等价意义下，可能的假反例数量是绝对有限的！"
          },
          "investigators": {
            "tagline": "结式消元法、坏素数特征与格罗布纳基 (Gröbner basis)。",
            "analogy": "研究表明如果存在反例，其次数 $d$ 必须至少含有 3 个不同的素因子（最小的待解次数曾经是 12，已被庞大代数结式消元排除）。",
            "rules": [
              "多项式结式消元算子。",
              "代数曲线相交重数极值理论。",
              "Lean 4 Mathlib 多项式除法与整除公理化。"
            ],
            "mystery": "能否利用伽罗瓦群对称性或极值复变动力学对任意次数 $d$ 一网打尽？",
            "funFact": "卡萨斯-阿尔韦罗于2001年提出。"
          },
          "pioneers": {
            "tagline": "函数域赋值、热带代数几何与牛顿多边形。",
            "analogy": "热带几何将多项式的根系映射为热带线段交点，为根的极端碰撞构型提供了强有力的退化约束。",
            "rules": [
              "多项式变形阿米巴变形原语。",
              "牛顿多面体组合拓扑。",
              "Lean 4 代数几何根系形式化。"
            ],
            "mystery": "AI 计算机代数系统已计算了上百吉字节的结式行列式，清除了 14 次以内的所有潜在反例分支。",
            "funFact": "卡萨斯-阿尔韦罗猜想生动表明，即便是高中代数中最初等的多项式，也蕴藏着人类尚未探明的前沿奥秘。"
          }
        },
        "history": [
          {
            "year": "2001",
            "author": "卡萨斯-阿尔韦罗",
            "note": "在研究平面代数曲线奇异点时提出该猜想。"
          },
          {
            "year": "2006",
            "author": "博特默团队",
            "note": "运用 p-adic 赋值证明素数幂次成立。"
          },
          {
            "year": "2014",
            "author": "卡斯特里克团队",
            "note": "彻底攻克仅含两个素因子的所有次数情形！"
          }
        ]
      },
      "zh-Hant": {
        "name": "Casas-Alvero Conjecture",
        "subtitle": "Can a Polynomial Share Roots with ALL Its Derivatives Without Being a Monomial?",
        "field": "Algebraic Geometry & Polynomial Invariants",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "If every slope and curve of a roller coaster has a zero at one of the hills, must the roller coaster be a single giant bowl?",
            "analogy": "In 2001, Spanish algebraic geometer Eduardo Casas-Alvero posed a deceptively simple riddle about high school polynomials: Suppose $P(z)$ is a polynomial of degree $d$ with complex coefficients. If $P(z)$ shares AT LEAST ONE common root with EVERY one of its higher derivatives $P'(z), P''(z), ..., P^{(d-1)}(z)$, must $P(z)$ be of the form $c(z - a)^d$ (a single root repeated $d$ times)? Despite testing up to degree 11 and many infinite families of degrees, it remains UNPROVED in general!",
            "rules": [
              "P(z) is a degree d polynomial over ℂ.",
              "Condition: gcd(P, P^(k)) ≠ 1 for all k = 1, 2, ..., d-1.",
              "Conjecture: P(z) = c (z - a)^d.",
              "Proved for degrees d = p^k (prime powers), 2p^k, and all d ≤ 11!"
            ],
            "mystery": "The conjecture fails in characteristic p > 0! Over a field of characteristic p, P(z) = z^{p+1} - z^p has derivatives vanishing identically, giving counterexamples in finite fields!",
            "funFact": "Draisma and de Jong (2011) proved that for any degree d, there are at most finitely many potential counterexamples up to affine scaling."
          },
          "investigators": {
            "tagline": "Resultants, bad primes, and Gröbner bases.",
            "analogy": "Castryck et al. showed that if the conjecture is false for degree d, then d must have at least three distinct prime factors (smallest open case was d = 12 = 2² × 3, solved by massive resultants).",
            "rules": [
              "Resultant polynomial Res(P, P^(k)).",
              "Intersection theory of algebraic curves.",
              "Lean 4 Mathlib polynomial division."
            ],
            "mystery": "Can we prove the Casas-Alvero conjecture for ALL degrees d simultaneously using Galois theory?",
            "funFact": "Eduardo Casas-Alvero proposed the problem in 2001."
          },
          "pioneers": {
            "tagline": "Valuations on function fields and tropical geometry.",
            "analogy": "Tropical geometry models the roots as infinite valuations, bounding collision configurations under logarithmic deformation.",
            "rules": [
              "Tropical polynomial amoebas.",
              "Newton polytope deformations.",
              "Lean 4 Mathlib algebraic geometry."
            ],
            "mystery": "AI symbolic algebra engines compute multi-gigabyte resultant determinants to verify cases up to degree 14.",
            "funFact": "The Casas-Alvero Conjecture shows that even the most elementary high-school polynomials harbor deepest uncharted secrets."
          }
        },
        "history": [
          {
            "year": "2001",
            "author": "Eduardo Casas-Alvero",
            "note": "Formulates the conjecture while studying singularities of planar curves."
          },
          {
            "year": "2006",
            "author": "Hans-Christian Graf von Bothmer et al.",
            "note": "Prove conjecture for prime degrees and powers using p-adic methods."
          },
          {
            "year": "2014",
            "author": "Castryck, Laterveer & Ounaïes",
            "note": "Rule out counterexamples for degrees with at most two distinct prime factors."
          }
        ]
      }
    }
  },
  {
    "id": "lehmer-totient",
    "icon": "🔢",
    "difficulty": "Gr 9+",
    "domain": "algebra-analysis",
    "category": "algebra-analysis",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Data.Nat.Totient\n-- Lehmer's Totient Problem (D. H. Lehmer, 1932)\n-- If Euler's totient φ(n) divides n - 1, must n be prime? No composite number with this property is known.",
    "locales": {
      "en": {
        "name": "Lehmer's Totient Problem",
        "subtitle": "Does $\\varphi(n) \\mid (n-1)$ Force $n$ to be Prime? (No Composite Counterexample Known)",
        "field": "Multiplicative Number Theory & Arithmetic Functions",
        "statusBadge": "OPEN SINCE 1932",
        "grades": {
          "explorers": {
            "tagline": "If the count of coprime numbers evenly divides the number minus one, could it be a fake prime?",
            "analogy": "Euler's totient function $\\varphi(n)$ counts how many numbers from 1 to $n$ share no common factors with $n$. If $n$ is prime, then $\\varphi(n) = n - 1$, so $\\varphi(n)$ trivially divides $n - 1$. In 1932, D. H. Lehmer asked the converse: Can a COMPOSITE number $n$ ever satisfy $\\varphi(n) \\mid (n - 1)$? Such a hypothetical number is called a 'Lehmer number'. Nearly a century later, not a SINGLE Lehmer number has ever been found!",
            "rules": [
              "Euler totient φ(n) counts integers k ≤ n coprime to n.",
              "If n is prime, φ(n) = n - 1 (divides trivially).",
              "Lehmer's Question: Does φ(n) | (n - 1) imply n is prime?",
              "If a composite Lehmer number exists, it must have at least 15 distinct prime factors and exceed 10^{30}!"
            ],
            "mystery": "A Lehmer number must be square-free, odd, and would also be a Carmichael number (a 'pseudoprime' that fools Fermat's Little Theorem)!",
            "funFact": "Cohen and Hagis proved in 1980 that any Lehmer number must have at least 14 prime factors; Renze pushed it to 15 in 2004!"
          },
          "investigators": {
            "tagline": "Carmichael numbers, Korselt's criterion, and reciprocal prime sums.",
            "analogy": "If (n-1) / φ(n) = k, then k ≥ 2. Since ∏ p / (p-1) must be close to an integer, strong analytic constraints limit potential candidates.",
            "rules": [
              "Korselt's criterion for Carmichael numbers.",
              "Inequality: ∏_{p|n} p / (p-1) > k.",
              "Lean 4 Mathlib Nat.totient library."
            ],
            "mystery": "Can analytic number theory prove that ∏ p/(p-1) can never equal an integer plus 1/n?",
            "funFact": "D. H. Lehmer proposed the problem in 1932."
          },
          "pioneers": {
            "tagline": "Sieve theory and Brun's constant for smooth Carmichael numbers.",
            "analogy": "Pomerance (1977) proved that the number of composite n ≤ x with φ(n) | (n-1) is O(x^{1/2} (log x)^{3/4}).",
            "rules": [
              "Pomerance's count theorem (1977).",
              "Erdős bounds on multiplicative functions.",
              "Lean 4 formal prime factorization."
            ],
            "mystery": "AI distributed prime sieves have searched up to 10^{40} without finding a single composite Lehmer candidate.",
            "funFact": "Lehmer's Totient Problem is the ultimate gatekeeper of the boundary between prime essence and multiplicative disguise."
          }
        },
        "history": [
          {
            "year": "1932",
            "author": "D. H. Lehmer",
            "note": "Poses the totient divisibility problem in the Monthly."
          },
          {
            "year": "1977",
            "author": "Carl Pomerance",
            "note": "Proves upper bound on the count of Lehmer numbers."
          },
          {
            "year": "1980",
            "author": "Graeme Cohen & Peter Hagis",
            "note": "Prove any Lehmer number has at least 14 distinct prime factors."
          }
        ]
      },
      "de": {
        "name": "Lehmer's Totient Problem",
        "subtitle": "Does $\\varphi(n) \\mid (n-1)$ Force $n$ to be Prime? (No Composite Counterexample Known)",
        "field": "Multiplicative Number Theory & Arithmetic Functions",
        "statusBadge": "OPEN SINCE 1932",
        "grades": {
          "explorers": {
            "tagline": "If the count of coprime numbers evenly divides the number minus one, could it be a fake prime?",
            "analogy": "Euler's totient function $\\varphi(n)$ counts how many numbers from 1 to $n$ share no common factors with $n$. If $n$ is prime, then $\\varphi(n) = n - 1$, so $\\varphi(n)$ trivially divides $n - 1$. In 1932, D. H. Lehmer asked the converse: Can a COMPOSITE number $n$ ever satisfy $\\varphi(n) \\mid (n - 1)$? Such a hypothetical number is called a 'Lehmer number'. Nearly a century later, not a SINGLE Lehmer number has ever been found!",
            "rules": [
              "Euler totient φ(n) counts integers k ≤ n coprime to n.",
              "If n is prime, φ(n) = n - 1 (divides trivially).",
              "Lehmer's Question: Does φ(n) | (n - 1) imply n is prime?",
              "If a composite Lehmer number exists, it must have at least 15 distinct prime factors and exceed 10^{30}!"
            ],
            "mystery": "A Lehmer number must be square-free, odd, and would also be a Carmichael number (a 'pseudoprime' that fools Fermat's Little Theorem)!",
            "funFact": "Cohen and Hagis proved in 1980 that any Lehmer number must have at least 14 prime factors; Renze pushed it to 15 in 2004!"
          },
          "investigators": {
            "tagline": "Carmichael numbers, Korselt's criterion, and reciprocal prime sums.",
            "analogy": "If (n-1) / φ(n) = k, then k ≥ 2. Since ∏ p / (p-1) must be close to an integer, strong analytic constraints limit potential candidates.",
            "rules": [
              "Korselt's criterion for Carmichael numbers.",
              "Inequality: ∏_{p|n} p / (p-1) > k.",
              "Lean 4 Mathlib Nat.totient library."
            ],
            "mystery": "Can analytic number theory prove that ∏ p/(p-1) can never equal an integer plus 1/n?",
            "funFact": "D. H. Lehmer proposed the problem in 1932."
          },
          "pioneers": {
            "tagline": "Sieve theory and Brun's constant for smooth Carmichael numbers.",
            "analogy": "Pomerance (1977) proved that the number of composite n ≤ x with φ(n) | (n-1) is O(x^{1/2} (log x)^{3/4}).",
            "rules": [
              "Pomerance's count theorem (1977).",
              "Erdős bounds on multiplicative functions.",
              "Lean 4 formal prime factorization."
            ],
            "mystery": "AI distributed prime sieves have searched up to 10^{40} without finding a single composite Lehmer candidate.",
            "funFact": "Lehmer's Totient Problem is the ultimate gatekeeper of the boundary between prime essence and multiplicative disguise."
          }
        },
        "history": [
          {
            "year": "1932",
            "author": "D. H. Lehmer",
            "note": "Poses the totient divisibility problem in the Monthly."
          },
          {
            "year": "1977",
            "author": "Carl Pomerance",
            "note": "Proves upper bound on the count of Lehmer numbers."
          },
          {
            "year": "1980",
            "author": "Graeme Cohen & Peter Hagis",
            "note": "Prove any Lehmer number has at least 14 distinct prime factors."
          }
        ]
      },
      "fr": {
        "name": "Lehmer's Totient Problem",
        "subtitle": "Does $\\varphi(n) \\mid (n-1)$ Force $n$ to be Prime? (No Composite Counterexample Known)",
        "field": "Multiplicative Number Theory & Arithmetic Functions",
        "statusBadge": "OPEN SINCE 1932",
        "grades": {
          "explorers": {
            "tagline": "If the count of coprime numbers evenly divides the number minus one, could it be a fake prime?",
            "analogy": "Euler's totient function $\\varphi(n)$ counts how many numbers from 1 to $n$ share no common factors with $n$. If $n$ is prime, then $\\varphi(n) = n - 1$, so $\\varphi(n)$ trivially divides $n - 1$. In 1932, D. H. Lehmer asked the converse: Can a COMPOSITE number $n$ ever satisfy $\\varphi(n) \\mid (n - 1)$? Such a hypothetical number is called a 'Lehmer number'. Nearly a century later, not a SINGLE Lehmer number has ever been found!",
            "rules": [
              "Euler totient φ(n) counts integers k ≤ n coprime to n.",
              "If n is prime, φ(n) = n - 1 (divides trivially).",
              "Lehmer's Question: Does φ(n) | (n - 1) imply n is prime?",
              "If a composite Lehmer number exists, it must have at least 15 distinct prime factors and exceed 10^{30}!"
            ],
            "mystery": "A Lehmer number must be square-free, odd, and would also be a Carmichael number (a 'pseudoprime' that fools Fermat's Little Theorem)!",
            "funFact": "Cohen and Hagis proved in 1980 that any Lehmer number must have at least 14 prime factors; Renze pushed it to 15 in 2004!"
          },
          "investigators": {
            "tagline": "Carmichael numbers, Korselt's criterion, and reciprocal prime sums.",
            "analogy": "If (n-1) / φ(n) = k, then k ≥ 2. Since ∏ p / (p-1) must be close to an integer, strong analytic constraints limit potential candidates.",
            "rules": [
              "Korselt's criterion for Carmichael numbers.",
              "Inequality: ∏_{p|n} p / (p-1) > k.",
              "Lean 4 Mathlib Nat.totient library."
            ],
            "mystery": "Can analytic number theory prove that ∏ p/(p-1) can never equal an integer plus 1/n?",
            "funFact": "D. H. Lehmer proposed the problem in 1932."
          },
          "pioneers": {
            "tagline": "Sieve theory and Brun's constant for smooth Carmichael numbers.",
            "analogy": "Pomerance (1977) proved that the number of composite n ≤ x with φ(n) | (n-1) is O(x^{1/2} (log x)^{3/4}).",
            "rules": [
              "Pomerance's count theorem (1977).",
              "Erdős bounds on multiplicative functions.",
              "Lean 4 formal prime factorization."
            ],
            "mystery": "AI distributed prime sieves have searched up to 10^{40} without finding a single composite Lehmer candidate.",
            "funFact": "Lehmer's Totient Problem is the ultimate gatekeeper of the boundary between prime essence and multiplicative disguise."
          }
        },
        "history": [
          {
            "year": "1932",
            "author": "D. H. Lehmer",
            "note": "Poses the totient divisibility problem in the Monthly."
          },
          {
            "year": "1977",
            "author": "Carl Pomerance",
            "note": "Proves upper bound on the count of Lehmer numbers."
          },
          {
            "year": "1980",
            "author": "Graeme Cohen & Peter Hagis",
            "note": "Prove any Lehmer number has at least 14 distinct prime factors."
          }
        ]
      },
      "it": {
        "name": "Lehmer's Totient Problem",
        "subtitle": "Does $\\varphi(n) \\mid (n-1)$ Force $n$ to be Prime? (No Composite Counterexample Known)",
        "field": "Multiplicative Number Theory & Arithmetic Functions",
        "statusBadge": "OPEN SINCE 1932",
        "grades": {
          "explorers": {
            "tagline": "If the count of coprime numbers evenly divides the number minus one, could it be a fake prime?",
            "analogy": "Euler's totient function $\\varphi(n)$ counts how many numbers from 1 to $n$ share no common factors with $n$. If $n$ is prime, then $\\varphi(n) = n - 1$, so $\\varphi(n)$ trivially divides $n - 1$. In 1932, D. H. Lehmer asked the converse: Can a COMPOSITE number $n$ ever satisfy $\\varphi(n) \\mid (n - 1)$? Such a hypothetical number is called a 'Lehmer number'. Nearly a century later, not a SINGLE Lehmer number has ever been found!",
            "rules": [
              "Euler totient φ(n) counts integers k ≤ n coprime to n.",
              "If n is prime, φ(n) = n - 1 (divides trivially).",
              "Lehmer's Question: Does φ(n) | (n - 1) imply n is prime?",
              "If a composite Lehmer number exists, it must have at least 15 distinct prime factors and exceed 10^{30}!"
            ],
            "mystery": "A Lehmer number must be square-free, odd, and would also be a Carmichael number (a 'pseudoprime' that fools Fermat's Little Theorem)!",
            "funFact": "Cohen and Hagis proved in 1980 that any Lehmer number must have at least 14 prime factors; Renze pushed it to 15 in 2004!"
          },
          "investigators": {
            "tagline": "Carmichael numbers, Korselt's criterion, and reciprocal prime sums.",
            "analogy": "If (n-1) / φ(n) = k, then k ≥ 2. Since ∏ p / (p-1) must be close to an integer, strong analytic constraints limit potential candidates.",
            "rules": [
              "Korselt's criterion for Carmichael numbers.",
              "Inequality: ∏_{p|n} p / (p-1) > k.",
              "Lean 4 Mathlib Nat.totient library."
            ],
            "mystery": "Can analytic number theory prove that ∏ p/(p-1) can never equal an integer plus 1/n?",
            "funFact": "D. H. Lehmer proposed the problem in 1932."
          },
          "pioneers": {
            "tagline": "Sieve theory and Brun's constant for smooth Carmichael numbers.",
            "analogy": "Pomerance (1977) proved that the number of composite n ≤ x with φ(n) | (n-1) is O(x^{1/2} (log x)^{3/4}).",
            "rules": [
              "Pomerance's count theorem (1977).",
              "Erdős bounds on multiplicative functions.",
              "Lean 4 formal prime factorization."
            ],
            "mystery": "AI distributed prime sieves have searched up to 10^{40} without finding a single composite Lehmer candidate.",
            "funFact": "Lehmer's Totient Problem is the ultimate gatekeeper of the boundary between prime essence and multiplicative disguise."
          }
        },
        "history": [
          {
            "year": "1932",
            "author": "D. H. Lehmer",
            "note": "Poses the totient divisibility problem in the Monthly."
          },
          {
            "year": "1977",
            "author": "Carl Pomerance",
            "note": "Proves upper bound on the count of Lehmer numbers."
          },
          {
            "year": "1980",
            "author": "Graeme Cohen & Peter Hagis",
            "note": "Prove any Lehmer number has at least 14 distinct prime factors."
          }
        ]
      },
      "ja": {
        "name": "Lehmer's Totient Problem",
        "subtitle": "Does $\\varphi(n) \\mid (n-1)$ Force $n$ to be Prime? (No Composite Counterexample Known)",
        "field": "Multiplicative Number Theory & Arithmetic Functions",
        "statusBadge": "OPEN SINCE 1932",
        "grades": {
          "explorers": {
            "tagline": "If the count of coprime numbers evenly divides the number minus one, could it be a fake prime?",
            "analogy": "Euler's totient function $\\varphi(n)$ counts how many numbers from 1 to $n$ share no common factors with $n$. If $n$ is prime, then $\\varphi(n) = n - 1$, so $\\varphi(n)$ trivially divides $n - 1$. In 1932, D. H. Lehmer asked the converse: Can a COMPOSITE number $n$ ever satisfy $\\varphi(n) \\mid (n - 1)$? Such a hypothetical number is called a 'Lehmer number'. Nearly a century later, not a SINGLE Lehmer number has ever been found!",
            "rules": [
              "Euler totient φ(n) counts integers k ≤ n coprime to n.",
              "If n is prime, φ(n) = n - 1 (divides trivially).",
              "Lehmer's Question: Does φ(n) | (n - 1) imply n is prime?",
              "If a composite Lehmer number exists, it must have at least 15 distinct prime factors and exceed 10^{30}!"
            ],
            "mystery": "A Lehmer number must be square-free, odd, and would also be a Carmichael number (a 'pseudoprime' that fools Fermat's Little Theorem)!",
            "funFact": "Cohen and Hagis proved in 1980 that any Lehmer number must have at least 14 prime factors; Renze pushed it to 15 in 2004!"
          },
          "investigators": {
            "tagline": "Carmichael numbers, Korselt's criterion, and reciprocal prime sums.",
            "analogy": "If (n-1) / φ(n) = k, then k ≥ 2. Since ∏ p / (p-1) must be close to an integer, strong analytic constraints limit potential candidates.",
            "rules": [
              "Korselt's criterion for Carmichael numbers.",
              "Inequality: ∏_{p|n} p / (p-1) > k.",
              "Lean 4 Mathlib Nat.totient library."
            ],
            "mystery": "Can analytic number theory prove that ∏ p/(p-1) can never equal an integer plus 1/n?",
            "funFact": "D. H. Lehmer proposed the problem in 1932."
          },
          "pioneers": {
            "tagline": "Sieve theory and Brun's constant for smooth Carmichael numbers.",
            "analogy": "Pomerance (1977) proved that the number of composite n ≤ x with φ(n) | (n-1) is O(x^{1/2} (log x)^{3/4}).",
            "rules": [
              "Pomerance's count theorem (1977).",
              "Erdős bounds on multiplicative functions.",
              "Lean 4 formal prime factorization."
            ],
            "mystery": "AI distributed prime sieves have searched up to 10^{40} without finding a single composite Lehmer candidate.",
            "funFact": "Lehmer's Totient Problem is the ultimate gatekeeper of the boundary between prime essence and multiplicative disguise."
          }
        },
        "history": [
          {
            "year": "1932",
            "author": "D. H. Lehmer",
            "note": "Poses the totient divisibility problem in the Monthly."
          },
          {
            "year": "1977",
            "author": "Carl Pomerance",
            "note": "Proves upper bound on the count of Lehmer numbers."
          },
          {
            "year": "1980",
            "author": "Graeme Cohen & Peter Hagis",
            "note": "Prove any Lehmer number has at least 14 distinct prime factors."
          }
        ]
      },
      "ko": {
        "name": "Lehmer's Totient Problem",
        "subtitle": "Does $\\varphi(n) \\mid (n-1)$ Force $n$ to be Prime? (No Composite Counterexample Known)",
        "field": "Multiplicative Number Theory & Arithmetic Functions",
        "statusBadge": "OPEN SINCE 1932",
        "grades": {
          "explorers": {
            "tagline": "If the count of coprime numbers evenly divides the number minus one, could it be a fake prime?",
            "analogy": "Euler's totient function $\\varphi(n)$ counts how many numbers from 1 to $n$ share no common factors with $n$. If $n$ is prime, then $\\varphi(n) = n - 1$, so $\\varphi(n)$ trivially divides $n - 1$. In 1932, D. H. Lehmer asked the converse: Can a COMPOSITE number $n$ ever satisfy $\\varphi(n) \\mid (n - 1)$? Such a hypothetical number is called a 'Lehmer number'. Nearly a century later, not a SINGLE Lehmer number has ever been found!",
            "rules": [
              "Euler totient φ(n) counts integers k ≤ n coprime to n.",
              "If n is prime, φ(n) = n - 1 (divides trivially).",
              "Lehmer's Question: Does φ(n) | (n - 1) imply n is prime?",
              "If a composite Lehmer number exists, it must have at least 15 distinct prime factors and exceed 10^{30}!"
            ],
            "mystery": "A Lehmer number must be square-free, odd, and would also be a Carmichael number (a 'pseudoprime' that fools Fermat's Little Theorem)!",
            "funFact": "Cohen and Hagis proved in 1980 that any Lehmer number must have at least 14 prime factors; Renze pushed it to 15 in 2004!"
          },
          "investigators": {
            "tagline": "Carmichael numbers, Korselt's criterion, and reciprocal prime sums.",
            "analogy": "If (n-1) / φ(n) = k, then k ≥ 2. Since ∏ p / (p-1) must be close to an integer, strong analytic constraints limit potential candidates.",
            "rules": [
              "Korselt's criterion for Carmichael numbers.",
              "Inequality: ∏_{p|n} p / (p-1) > k.",
              "Lean 4 Mathlib Nat.totient library."
            ],
            "mystery": "Can analytic number theory prove that ∏ p/(p-1) can never equal an integer plus 1/n?",
            "funFact": "D. H. Lehmer proposed the problem in 1932."
          },
          "pioneers": {
            "tagline": "Sieve theory and Brun's constant for smooth Carmichael numbers.",
            "analogy": "Pomerance (1977) proved that the number of composite n ≤ x with φ(n) | (n-1) is O(x^{1/2} (log x)^{3/4}).",
            "rules": [
              "Pomerance's count theorem (1977).",
              "Erdős bounds on multiplicative functions.",
              "Lean 4 formal prime factorization."
            ],
            "mystery": "AI distributed prime sieves have searched up to 10^{40} without finding a single composite Lehmer candidate.",
            "funFact": "Lehmer's Totient Problem is the ultimate gatekeeper of the boundary between prime essence and multiplicative disguise."
          }
        },
        "history": [
          {
            "year": "1932",
            "author": "D. H. Lehmer",
            "note": "Poses the totient divisibility problem in the Monthly."
          },
          {
            "year": "1977",
            "author": "Carl Pomerance",
            "note": "Proves upper bound on the count of Lehmer numbers."
          },
          {
            "year": "1980",
            "author": "Graeme Cohen & Peter Hagis",
            "note": "Prove any Lehmer number has at least 14 distinct prime factors."
          }
        ]
      },
      "zh-Hans": {
        "name": "莱默欧拉函数整除问题",
        "subtitle": "若欧拉函数 $\\varphi(n)$ 整除 $n-1$，则 $n$ 必须是素数吗？（至今未发现任何合数反例）",
        "field": "乘性数论 & 算术函数解析性质",
        "statusBadge": "自1932年高悬至今",
        "grades": {
          "explorers": {
            "tagline": "如果比 n 小且与它互质的数字数量，恰好能把 n-1 整除，那 n 能不能是一个‘披着素数外皮的合数’？",
            "analogy": "欧拉函数 $\\varphi(n)$ 表示从 1 到 $n$ 中与 $n$ 互质的正整数个数。如果 $n$ 是素数，显然 $\\varphi(n) = n - 1$，自然有 $\\varphi(n)$ 整除 $n - 1$。1932年著名数论大师 D. H. 莱默提出反向问题：是否存在任何一个‘合数’ $n$，使得其欧拉函数 $\\varphi(n)$ 也恰好能够整除 $n - 1$？这种假设中的神秘数被称为‘莱默数’。将近一个世纪过去了，全人类连哪怕一个莱默数都未曾找到！",
            "rules": [
              "欧拉函数 $\\varphi(n)$：不大于 $n$ 且互质的数个数。",
              "若 $n$ 为素数，$\\varphi(n) = n - 1$ 显然整除。",
              "核心猜想：$\\varphi(n) \\mid (n - 1)$ 能否彻底强制定理中的 $n$ 必为素数？",
              "若存在合数反例，它必须至少含有 15 个不同的素因子，且数值必定超过 $10^{30}$！"
            ],
            "mystery": "任何莱默数都必须是无平方因子的奇数，并且它必然是一个卡迈克尔数（能欺骗费马小定理的强伪素数）！",
            "funFact": "科恩与哈吉斯在1980年证明任何反例至少要有14个素因子；伦泽在2004年将其刷新至至少15个素因子！"
          },
          "investigators": {
            "tagline": "卡迈克尔数、科塞尔特准则与素数倒数求和界限。",
            "analogy": "若 $(n-1)/\\varphi(n) = k$，则整除商 $k \\ge 2$。由于 $\\prod \\frac{p}{p-1}$ 必须无限逼近特定整数，解析估计对素因子分布构成了严苛枷锁。",
            "rules": [
              "科塞尔特伪素数判据。",
              "素因子乘积下界分析。",
              "Lean 4 Mathlib 欧拉函数与整除性形式化。"
            ],
            "mystery": "能否利用解析数论证明乘积 $\\prod \\frac{p}{p-1}$ 永远不可能恰好落在一个整数加 $1/n$ 的极窄缝隙中？",
            "funFact": "D. H. 莱默于1932年提出。"
          },
          "pioneers": {
            "tagline": "筛法与光滑卡迈克尔数测度。",
            "analogy": "波默兰斯于1977年证明：小于 $x$ 的潜在合数反例总数在最坏情况下也是稀疏的 $O(x^{1/2} (\\log x)^{3/4})$。",
            "rules": [
              "波默兰斯反例稀疏性定理。",
              "埃尔德什算术函数估计。",
              "Lean 4 素因数分解唯一性形式化。"
            ],
            "mystery": "全球分布式 AI 素数筛系统已排查到了 $10^{40}$，未曾捕获到任何一个合数莱默候选数。",
            "funFact": "莱默欧拉函数问题是守护真素数本质与合数伪装之间最坚固的算术闸门。"
          }
        },
        "history": [
          {
            "year": "1932",
            "author": "D. H. 莱默",
            "note": "正式提出欧拉函数整除问题。"
          },
          {
            "year": "1977",
            "author": "卡尔·波默兰斯",
            "note": "证明可能反例的稀疏渐近上界。"
          },
          {
            "year": "1980",
            "author": "科恩 & 哈吉斯",
            "note": "证明反例至少包含 14 个不同素数因子！"
          }
        ]
      },
      "zh-Hant": {
        "name": "Lehmer's Totient Problem",
        "subtitle": "Does $\\varphi(n) \\mid (n-1)$ Force $n$ to be Prime? (No Composite Counterexample Known)",
        "field": "Multiplicative Number Theory & Arithmetic Functions",
        "statusBadge": "OPEN SINCE 1932",
        "grades": {
          "explorers": {
            "tagline": "If the count of coprime numbers evenly divides the number minus one, could it be a fake prime?",
            "analogy": "Euler's totient function $\\varphi(n)$ counts how many numbers from 1 to $n$ share no common factors with $n$. If $n$ is prime, then $\\varphi(n) = n - 1$, so $\\varphi(n)$ trivially divides $n - 1$. In 1932, D. H. Lehmer asked the converse: Can a COMPOSITE number $n$ ever satisfy $\\varphi(n) \\mid (n - 1)$? Such a hypothetical number is called a 'Lehmer number'. Nearly a century later, not a SINGLE Lehmer number has ever been found!",
            "rules": [
              "Euler totient φ(n) counts integers k ≤ n coprime to n.",
              "If n is prime, φ(n) = n - 1 (divides trivially).",
              "Lehmer's Question: Does φ(n) | (n - 1) imply n is prime?",
              "If a composite Lehmer number exists, it must have at least 15 distinct prime factors and exceed 10^{30}!"
            ],
            "mystery": "A Lehmer number must be square-free, odd, and would also be a Carmichael number (a 'pseudoprime' that fools Fermat's Little Theorem)!",
            "funFact": "Cohen and Hagis proved in 1980 that any Lehmer number must have at least 14 prime factors; Renze pushed it to 15 in 2004!"
          },
          "investigators": {
            "tagline": "Carmichael numbers, Korselt's criterion, and reciprocal prime sums.",
            "analogy": "If (n-1) / φ(n) = k, then k ≥ 2. Since ∏ p / (p-1) must be close to an integer, strong analytic constraints limit potential candidates.",
            "rules": [
              "Korselt's criterion for Carmichael numbers.",
              "Inequality: ∏_{p|n} p / (p-1) > k.",
              "Lean 4 Mathlib Nat.totient library."
            ],
            "mystery": "Can analytic number theory prove that ∏ p/(p-1) can never equal an integer plus 1/n?",
            "funFact": "D. H. Lehmer proposed the problem in 1932."
          },
          "pioneers": {
            "tagline": "Sieve theory and Brun's constant for smooth Carmichael numbers.",
            "analogy": "Pomerance (1977) proved that the number of composite n ≤ x with φ(n) | (n-1) is O(x^{1/2} (log x)^{3/4}).",
            "rules": [
              "Pomerance's count theorem (1977).",
              "Erdős bounds on multiplicative functions.",
              "Lean 4 formal prime factorization."
            ],
            "mystery": "AI distributed prime sieves have searched up to 10^{40} without finding a single composite Lehmer candidate.",
            "funFact": "Lehmer's Totient Problem is the ultimate gatekeeper of the boundary between prime essence and multiplicative disguise."
          }
        },
        "history": [
          {
            "year": "1932",
            "author": "D. H. Lehmer",
            "note": "Poses the totient divisibility problem in the Monthly."
          },
          {
            "year": "1977",
            "author": "Carl Pomerance",
            "note": "Proves upper bound on the count of Lehmer numbers."
          },
          {
            "year": "1980",
            "author": "Graeme Cohen & Peter Hagis",
            "note": "Prove any Lehmer number has at least 14 distinct prime factors."
          }
        ]
      }
    }
  },
  {
    "id": "novikov",
    "icon": "🍩",
    "difficulty": "Gr 9+",
    "domain": "algebra-analysis",
    "category": "algebra-analysis",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Topology.Homotopy.Basic\n-- Novikov Conjecture (Sergei Novikov, 1965)\n-- Higher signatures of non-simply connected smooth closed manifolds are homotopy invariants.",
    "locales": {
      "en": {
        "name": "The Novikov Conjecture",
        "subtitle": "Homotopy Invariance of Higher Signatures on Non-Simply Connected Manifolds",
        "field": "Differential Topology & Noncommutative Geometry",
        "statusBadge": "OPEN SINCE 1965",
        "grades": {
          "explorers": {
            "tagline": "If you deform a multidimensional doughnut like clay, do its hidden topological twists stay indestructible?",
            "analogy": "In 1965, Fields Medalist Sergei Novikov proved that Pontryagin characteristic classes are topological invariants. He then proposed his grand conjecture: On ANY closed smooth manifold $M$ with fundamental group $\\pi_1(M) = G$, the 'higher signatures' (numbers computed by integrating Pontryagin classes wedged with cohomology classes from the classifying space $BG$) are INVARIANT under ANY homotopy equivalence! Proved for many group classes, but the general conjecture remains the paramount problem in high-dimensional topology!",
            "rules": [
              "Closed oriented 4k-manifold M with fundamental group π₁(M) = G.",
              "Classifying map f: M → BG.",
              "Higher signature: σ_x(M) = ⟨L(M) ∪ f*(x), [M]⟩ for x ∈ H*(BG; ℚ).",
              "Conjecture: If f: M → N is a homotopy equivalence, then σ_x(M) = σ_x(N) for all x!"
            ],
            "mystery": "Hirzebruch's signature theorem (1953) proved the special case G = 1 (simply connected manifolds), which helped launch modern differential topology!",
            "funFact": "Alain Connes used noncommutative geometry and cyclic cohomology in the 1980s to prove the Novikov conjecture for hyperbolic groups!"
          },
          "investigators": {
            "tagline": "Surgery theory, index theorem on open manifolds, and assembly maps.",
            "analogy": "The Novikov conjecture is equivalent to the injectivity of the Baum-Connes assembly map: μ: K_*(BG) → K_*(C*_r(G)) with rational coefficients.",
            "rules": [
              "Hirzebruch L-polynomial L(M).",
              "Baum-Connes assembly map injectivity.",
              "Lean 4 Mathlib algebraic topology."
            ],
            "mystery": "Can the assembly map be proved injective for all discrete groups?",
            "funFact": "Sergei Novikov formulated the conjecture in 1965."
          },
          "pioneers": {
            "tagline": "Coarse geometry, Roe algebras, and controlled topology.",
            "analogy": "Guoliang Yu (1998) made a breakthrough by proving the Novikov conjecture for groups with finite asymptotic dimension and uniform embeddability into Hilbert space.",
            "rules": [
              "Yu's property A and coarse embedding.",
              "C*-algebra K-theory.",
              "Lean 4 functional analysis and operator algebras."
            ],
            "mystery": "AI homological solvers compute higher signature invariants for triangulated 8-manifolds in minutes.",
            "funFact": "The Novikov Conjecture is the majestic mountain uniting geometry, topology, and operator algebras."
          }
        },
        "history": [
          {
            "year": "1965",
            "author": "Sergei Novikov",
            "note": "Formulates the conjecture of topological invariance of higher signatures."
          },
          {
            "year": "1983",
            "author": "Alain Connes",
            "note": "Applies noncommutative geometry and cyclic cohomology to Novikov conjecture."
          },
          {
            "year": "1998",
            "author": "Guoliang Yu (余国良)",
            "note": "Proves conjecture for all groups uniformly embeddable in Hilbert space."
          }
        ]
      },
      "de": {
        "name": "The Novikov Conjecture",
        "subtitle": "Homotopy Invariance of Higher Signatures on Non-Simply Connected Manifolds",
        "field": "Differential Topology & Noncommutative Geometry",
        "statusBadge": "OPEN SINCE 1965",
        "grades": {
          "explorers": {
            "tagline": "If you deform a multidimensional doughnut like clay, do its hidden topological twists stay indestructible?",
            "analogy": "In 1965, Fields Medalist Sergei Novikov proved that Pontryagin characteristic classes are topological invariants. He then proposed his grand conjecture: On ANY closed smooth manifold $M$ with fundamental group $\\pi_1(M) = G$, the 'higher signatures' (numbers computed by integrating Pontryagin classes wedged with cohomology classes from the classifying space $BG$) are INVARIANT under ANY homotopy equivalence! Proved for many group classes, but the general conjecture remains the paramount problem in high-dimensional topology!",
            "rules": [
              "Closed oriented 4k-manifold M with fundamental group π₁(M) = G.",
              "Classifying map f: M → BG.",
              "Higher signature: σ_x(M) = ⟨L(M) ∪ f*(x), [M]⟩ for x ∈ H*(BG; ℚ).",
              "Conjecture: If f: M → N is a homotopy equivalence, then σ_x(M) = σ_x(N) for all x!"
            ],
            "mystery": "Hirzebruch's signature theorem (1953) proved the special case G = 1 (simply connected manifolds), which helped launch modern differential topology!",
            "funFact": "Alain Connes used noncommutative geometry and cyclic cohomology in the 1980s to prove the Novikov conjecture for hyperbolic groups!"
          },
          "investigators": {
            "tagline": "Surgery theory, index theorem on open manifolds, and assembly maps.",
            "analogy": "The Novikov conjecture is equivalent to the injectivity of the Baum-Connes assembly map: μ: K_*(BG) → K_*(C*_r(G)) with rational coefficients.",
            "rules": [
              "Hirzebruch L-polynomial L(M).",
              "Baum-Connes assembly map injectivity.",
              "Lean 4 Mathlib algebraic topology."
            ],
            "mystery": "Can the assembly map be proved injective for all discrete groups?",
            "funFact": "Sergei Novikov formulated the conjecture in 1965."
          },
          "pioneers": {
            "tagline": "Coarse geometry, Roe algebras, and controlled topology.",
            "analogy": "Guoliang Yu (1998) made a breakthrough by proving the Novikov conjecture for groups with finite asymptotic dimension and uniform embeddability into Hilbert space.",
            "rules": [
              "Yu's property A and coarse embedding.",
              "C*-algebra K-theory.",
              "Lean 4 functional analysis and operator algebras."
            ],
            "mystery": "AI homological solvers compute higher signature invariants for triangulated 8-manifolds in minutes.",
            "funFact": "The Novikov Conjecture is the majestic mountain uniting geometry, topology, and operator algebras."
          }
        },
        "history": [
          {
            "year": "1965",
            "author": "Sergei Novikov",
            "note": "Formulates the conjecture of topological invariance of higher signatures."
          },
          {
            "year": "1983",
            "author": "Alain Connes",
            "note": "Applies noncommutative geometry and cyclic cohomology to Novikov conjecture."
          },
          {
            "year": "1998",
            "author": "Guoliang Yu (余国良)",
            "note": "Proves conjecture for all groups uniformly embeddable in Hilbert space."
          }
        ]
      },
      "fr": {
        "name": "The Novikov Conjecture",
        "subtitle": "Homotopy Invariance of Higher Signatures on Non-Simply Connected Manifolds",
        "field": "Differential Topology & Noncommutative Geometry",
        "statusBadge": "OPEN SINCE 1965",
        "grades": {
          "explorers": {
            "tagline": "If you deform a multidimensional doughnut like clay, do its hidden topological twists stay indestructible?",
            "analogy": "In 1965, Fields Medalist Sergei Novikov proved that Pontryagin characteristic classes are topological invariants. He then proposed his grand conjecture: On ANY closed smooth manifold $M$ with fundamental group $\\pi_1(M) = G$, the 'higher signatures' (numbers computed by integrating Pontryagin classes wedged with cohomology classes from the classifying space $BG$) are INVARIANT under ANY homotopy equivalence! Proved for many group classes, but the general conjecture remains the paramount problem in high-dimensional topology!",
            "rules": [
              "Closed oriented 4k-manifold M with fundamental group π₁(M) = G.",
              "Classifying map f: M → BG.",
              "Higher signature: σ_x(M) = ⟨L(M) ∪ f*(x), [M]⟩ for x ∈ H*(BG; ℚ).",
              "Conjecture: If f: M → N is a homotopy equivalence, then σ_x(M) = σ_x(N) for all x!"
            ],
            "mystery": "Hirzebruch's signature theorem (1953) proved the special case G = 1 (simply connected manifolds), which helped launch modern differential topology!",
            "funFact": "Alain Connes used noncommutative geometry and cyclic cohomology in the 1980s to prove the Novikov conjecture for hyperbolic groups!"
          },
          "investigators": {
            "tagline": "Surgery theory, index theorem on open manifolds, and assembly maps.",
            "analogy": "The Novikov conjecture is equivalent to the injectivity of the Baum-Connes assembly map: μ: K_*(BG) → K_*(C*_r(G)) with rational coefficients.",
            "rules": [
              "Hirzebruch L-polynomial L(M).",
              "Baum-Connes assembly map injectivity.",
              "Lean 4 Mathlib algebraic topology."
            ],
            "mystery": "Can the assembly map be proved injective for all discrete groups?",
            "funFact": "Sergei Novikov formulated the conjecture in 1965."
          },
          "pioneers": {
            "tagline": "Coarse geometry, Roe algebras, and controlled topology.",
            "analogy": "Guoliang Yu (1998) made a breakthrough by proving the Novikov conjecture for groups with finite asymptotic dimension and uniform embeddability into Hilbert space.",
            "rules": [
              "Yu's property A and coarse embedding.",
              "C*-algebra K-theory.",
              "Lean 4 functional analysis and operator algebras."
            ],
            "mystery": "AI homological solvers compute higher signature invariants for triangulated 8-manifolds in minutes.",
            "funFact": "The Novikov Conjecture is the majestic mountain uniting geometry, topology, and operator algebras."
          }
        },
        "history": [
          {
            "year": "1965",
            "author": "Sergei Novikov",
            "note": "Formulates the conjecture of topological invariance of higher signatures."
          },
          {
            "year": "1983",
            "author": "Alain Connes",
            "note": "Applies noncommutative geometry and cyclic cohomology to Novikov conjecture."
          },
          {
            "year": "1998",
            "author": "Guoliang Yu (余国良)",
            "note": "Proves conjecture for all groups uniformly embeddable in Hilbert space."
          }
        ]
      },
      "it": {
        "name": "The Novikov Conjecture",
        "subtitle": "Homotopy Invariance of Higher Signatures on Non-Simply Connected Manifolds",
        "field": "Differential Topology & Noncommutative Geometry",
        "statusBadge": "OPEN SINCE 1965",
        "grades": {
          "explorers": {
            "tagline": "If you deform a multidimensional doughnut like clay, do its hidden topological twists stay indestructible?",
            "analogy": "In 1965, Fields Medalist Sergei Novikov proved that Pontryagin characteristic classes are topological invariants. He then proposed his grand conjecture: On ANY closed smooth manifold $M$ with fundamental group $\\pi_1(M) = G$, the 'higher signatures' (numbers computed by integrating Pontryagin classes wedged with cohomology classes from the classifying space $BG$) are INVARIANT under ANY homotopy equivalence! Proved for many group classes, but the general conjecture remains the paramount problem in high-dimensional topology!",
            "rules": [
              "Closed oriented 4k-manifold M with fundamental group π₁(M) = G.",
              "Classifying map f: M → BG.",
              "Higher signature: σ_x(M) = ⟨L(M) ∪ f*(x), [M]⟩ for x ∈ H*(BG; ℚ).",
              "Conjecture: If f: M → N is a homotopy equivalence, then σ_x(M) = σ_x(N) for all x!"
            ],
            "mystery": "Hirzebruch's signature theorem (1953) proved the special case G = 1 (simply connected manifolds), which helped launch modern differential topology!",
            "funFact": "Alain Connes used noncommutative geometry and cyclic cohomology in the 1980s to prove the Novikov conjecture for hyperbolic groups!"
          },
          "investigators": {
            "tagline": "Surgery theory, index theorem on open manifolds, and assembly maps.",
            "analogy": "The Novikov conjecture is equivalent to the injectivity of the Baum-Connes assembly map: μ: K_*(BG) → K_*(C*_r(G)) with rational coefficients.",
            "rules": [
              "Hirzebruch L-polynomial L(M).",
              "Baum-Connes assembly map injectivity.",
              "Lean 4 Mathlib algebraic topology."
            ],
            "mystery": "Can the assembly map be proved injective for all discrete groups?",
            "funFact": "Sergei Novikov formulated the conjecture in 1965."
          },
          "pioneers": {
            "tagline": "Coarse geometry, Roe algebras, and controlled topology.",
            "analogy": "Guoliang Yu (1998) made a breakthrough by proving the Novikov conjecture for groups with finite asymptotic dimension and uniform embeddability into Hilbert space.",
            "rules": [
              "Yu's property A and coarse embedding.",
              "C*-algebra K-theory.",
              "Lean 4 functional analysis and operator algebras."
            ],
            "mystery": "AI homological solvers compute higher signature invariants for triangulated 8-manifolds in minutes.",
            "funFact": "The Novikov Conjecture is the majestic mountain uniting geometry, topology, and operator algebras."
          }
        },
        "history": [
          {
            "year": "1965",
            "author": "Sergei Novikov",
            "note": "Formulates the conjecture of topological invariance of higher signatures."
          },
          {
            "year": "1983",
            "author": "Alain Connes",
            "note": "Applies noncommutative geometry and cyclic cohomology to Novikov conjecture."
          },
          {
            "year": "1998",
            "author": "Guoliang Yu (余国良)",
            "note": "Proves conjecture for all groups uniformly embeddable in Hilbert space."
          }
        ]
      },
      "ja": {
        "name": "The Novikov Conjecture",
        "subtitle": "Homotopy Invariance of Higher Signatures on Non-Simply Connected Manifolds",
        "field": "Differential Topology & Noncommutative Geometry",
        "statusBadge": "OPEN SINCE 1965",
        "grades": {
          "explorers": {
            "tagline": "If you deform a multidimensional doughnut like clay, do its hidden topological twists stay indestructible?",
            "analogy": "In 1965, Fields Medalist Sergei Novikov proved that Pontryagin characteristic classes are topological invariants. He then proposed his grand conjecture: On ANY closed smooth manifold $M$ with fundamental group $\\pi_1(M) = G$, the 'higher signatures' (numbers computed by integrating Pontryagin classes wedged with cohomology classes from the classifying space $BG$) are INVARIANT under ANY homotopy equivalence! Proved for many group classes, but the general conjecture remains the paramount problem in high-dimensional topology!",
            "rules": [
              "Closed oriented 4k-manifold M with fundamental group π₁(M) = G.",
              "Classifying map f: M → BG.",
              "Higher signature: σ_x(M) = ⟨L(M) ∪ f*(x), [M]⟩ for x ∈ H*(BG; ℚ).",
              "Conjecture: If f: M → N is a homotopy equivalence, then σ_x(M) = σ_x(N) for all x!"
            ],
            "mystery": "Hirzebruch's signature theorem (1953) proved the special case G = 1 (simply connected manifolds), which helped launch modern differential topology!",
            "funFact": "Alain Connes used noncommutative geometry and cyclic cohomology in the 1980s to prove the Novikov conjecture for hyperbolic groups!"
          },
          "investigators": {
            "tagline": "Surgery theory, index theorem on open manifolds, and assembly maps.",
            "analogy": "The Novikov conjecture is equivalent to the injectivity of the Baum-Connes assembly map: μ: K_*(BG) → K_*(C*_r(G)) with rational coefficients.",
            "rules": [
              "Hirzebruch L-polynomial L(M).",
              "Baum-Connes assembly map injectivity.",
              "Lean 4 Mathlib algebraic topology."
            ],
            "mystery": "Can the assembly map be proved injective for all discrete groups?",
            "funFact": "Sergei Novikov formulated the conjecture in 1965."
          },
          "pioneers": {
            "tagline": "Coarse geometry, Roe algebras, and controlled topology.",
            "analogy": "Guoliang Yu (1998) made a breakthrough by proving the Novikov conjecture for groups with finite asymptotic dimension and uniform embeddability into Hilbert space.",
            "rules": [
              "Yu's property A and coarse embedding.",
              "C*-algebra K-theory.",
              "Lean 4 functional analysis and operator algebras."
            ],
            "mystery": "AI homological solvers compute higher signature invariants for triangulated 8-manifolds in minutes.",
            "funFact": "The Novikov Conjecture is the majestic mountain uniting geometry, topology, and operator algebras."
          }
        },
        "history": [
          {
            "year": "1965",
            "author": "Sergei Novikov",
            "note": "Formulates the conjecture of topological invariance of higher signatures."
          },
          {
            "year": "1983",
            "author": "Alain Connes",
            "note": "Applies noncommutative geometry and cyclic cohomology to Novikov conjecture."
          },
          {
            "year": "1998",
            "author": "Guoliang Yu (余国良)",
            "note": "Proves conjecture for all groups uniformly embeddable in Hilbert space."
          }
        ]
      },
      "ko": {
        "name": "The Novikov Conjecture",
        "subtitle": "Homotopy Invariance of Higher Signatures on Non-Simply Connected Manifolds",
        "field": "Differential Topology & Noncommutative Geometry",
        "statusBadge": "OPEN SINCE 1965",
        "grades": {
          "explorers": {
            "tagline": "If you deform a multidimensional doughnut like clay, do its hidden topological twists stay indestructible?",
            "analogy": "In 1965, Fields Medalist Sergei Novikov proved that Pontryagin characteristic classes are topological invariants. He then proposed his grand conjecture: On ANY closed smooth manifold $M$ with fundamental group $\\pi_1(M) = G$, the 'higher signatures' (numbers computed by integrating Pontryagin classes wedged with cohomology classes from the classifying space $BG$) are INVARIANT under ANY homotopy equivalence! Proved for many group classes, but the general conjecture remains the paramount problem in high-dimensional topology!",
            "rules": [
              "Closed oriented 4k-manifold M with fundamental group π₁(M) = G.",
              "Classifying map f: M → BG.",
              "Higher signature: σ_x(M) = ⟨L(M) ∪ f*(x), [M]⟩ for x ∈ H*(BG; ℚ).",
              "Conjecture: If f: M → N is a homotopy equivalence, then σ_x(M) = σ_x(N) for all x!"
            ],
            "mystery": "Hirzebruch's signature theorem (1953) proved the special case G = 1 (simply connected manifolds), which helped launch modern differential topology!",
            "funFact": "Alain Connes used noncommutative geometry and cyclic cohomology in the 1980s to prove the Novikov conjecture for hyperbolic groups!"
          },
          "investigators": {
            "tagline": "Surgery theory, index theorem on open manifolds, and assembly maps.",
            "analogy": "The Novikov conjecture is equivalent to the injectivity of the Baum-Connes assembly map: μ: K_*(BG) → K_*(C*_r(G)) with rational coefficients.",
            "rules": [
              "Hirzebruch L-polynomial L(M).",
              "Baum-Connes assembly map injectivity.",
              "Lean 4 Mathlib algebraic topology."
            ],
            "mystery": "Can the assembly map be proved injective for all discrete groups?",
            "funFact": "Sergei Novikov formulated the conjecture in 1965."
          },
          "pioneers": {
            "tagline": "Coarse geometry, Roe algebras, and controlled topology.",
            "analogy": "Guoliang Yu (1998) made a breakthrough by proving the Novikov conjecture for groups with finite asymptotic dimension and uniform embeddability into Hilbert space.",
            "rules": [
              "Yu's property A and coarse embedding.",
              "C*-algebra K-theory.",
              "Lean 4 functional analysis and operator algebras."
            ],
            "mystery": "AI homological solvers compute higher signature invariants for triangulated 8-manifolds in minutes.",
            "funFact": "The Novikov Conjecture is the majestic mountain uniting geometry, topology, and operator algebras."
          }
        },
        "history": [
          {
            "year": "1965",
            "author": "Sergei Novikov",
            "note": "Formulates the conjecture of topological invariance of higher signatures."
          },
          {
            "year": "1983",
            "author": "Alain Connes",
            "note": "Applies noncommutative geometry and cyclic cohomology to Novikov conjecture."
          },
          {
            "year": "1998",
            "author": "Guoliang Yu (余国良)",
            "note": "Proves conjecture for all groups uniformly embeddable in Hilbert space."
          }
        ]
      },
      "zh-Hans": {
        "name": "诺维科夫高阶符号差猜想",
        "subtitle": "非单连通高维流形上高阶符号差的同伦不变性（拓扑学第一未解难题）",
        "field": "微分拓扑 & 非交换几何",
        "statusBadge": "自1965年高悬至今",
        "grades": {
          "explorers": {
            "tagline": "如果把一个高维甜甜圈像橡皮泥一样揉捏变形，它内部深藏的拓扑扭结是不是永远绝不破裂？",
            "analogy": "1965年苏联数学家、菲尔兹奖得主谢尔盖·诺维科夫证明了庞特里亚金示性类是拓扑不变量。随后他提出了举世公认的宏伟猜想：对于任意以群 $G$ 为基本群的紧致光滑高维流形，其‘高阶符号差’（由流形庞特里亚金示性类与分类空间 $BG$ 的上同调类做外积并积分所得到的一组深层拓扑不变量），在任意同伦等价变换下都‘绝对保持不变’！它被誉为高维拓扑学与代数拓扑领域最崇高的大统一猜想！",
            "rules": [
              "以群 $G$ 为基本群的闭可定向 $4k$ 维流形 $M$。",
              "到群分类空间的经典映射 $f: M \\to BG$。",
              "高阶符号差公式：$\\sigma_x(M) = \\langle L(M) \\cup f^*(x), [M] \\rangle$。",
              "猜想：若两个流形同伦等价，则它们的所有高阶符号差完全相同！"
            ],
            "mystery": "希策布鲁赫符号差定理（1953）攻克了平凡群 $G = 1$（单连通流形）的特例，直接催生了现代微分拓扑学的诞生！",
            "funFact": "阿兰·孔涅在20世纪80年代开创性地运用非交换几何与循环上同调，彻底证明了所有双曲群的高阶符号差不变性！"
          },
          "investigators": {
            "tagline": "流形配边剖分手术理论、开流形指标定理与装配映射 (Assembly maps)。",
            "analogy": "诺维科夫猜想等价于鲍姆-孔涅群代数 K-理论装配映射 $\\mu: K_*(BG) \\to K_*(C^*_r(G))$ 在有理系数下的单射性！",
            "rules": [
              "希策布鲁赫 $L$-多项式示性类。",
              "鲍姆-孔涅装配映射单射性证明结构。",
              "Lean 4 代数拓扑上同调形式化。"
            ],
            "mystery": "能否证明装配映射对全宇宙所有离散群都必定保持有理单射？",
            "funFact": "谢尔盖·诺维科夫于1965年提出。"
          },
          "pioneers": {
            "tagline": "粗几何理论、罗代数 (Roe algebras) 与受控拓扑学。",
            "analogy": "华人数学家余国良在1998年取得历史性突破，证明了所有能一致粗嵌入希尔伯特空间的离散群全部满足诺维科夫猜想！",
            "rules": [
              "余国良 A-性质与粗嵌入定理。",
              "$C^*$-代数算子拓扑 K-理论。",
              "Lean 4 算子代数形式化。"
            ],
            "mystery": "AI 自动化同调代数系统可在几分钟内计算并比对 8 维三角剖分流形的所有高阶符号差不变性。",
            "funFact": "诺维科夫猜想是将微分几何、流形拓扑与算子代数融为一体的最雄伟数学山巅。"
          }
        },
        "history": [
          {
            "year": "1965",
            "author": "谢尔盖·诺维科夫",
            "note": "正式提出高阶符号差同伦不变性猜想。"
          },
          {
            "year": "1983",
            "author": "阿兰·孔涅",
            "note": "创立非交换几何破解双曲群符号差。"
          },
          {
            "year": "1998",
            "author": "余国良",
            "note": "创立粗嵌入理论，彻底攻破巨大群类！"
          }
        ]
      },
      "zh-Hant": {
        "name": "The Novikov Conjecture",
        "subtitle": "Homotopy Invariance of Higher Signatures on Non-Simply Connected Manifolds",
        "field": "Differential Topology & Noncommutative Geometry",
        "statusBadge": "OPEN SINCE 1965",
        "grades": {
          "explorers": {
            "tagline": "If you deform a multidimensional doughnut like clay, do its hidden topological twists stay indestructible?",
            "analogy": "In 1965, Fields Medalist Sergei Novikov proved that Pontryagin characteristic classes are topological invariants. He then proposed his grand conjecture: On ANY closed smooth manifold $M$ with fundamental group $\\pi_1(M) = G$, the 'higher signatures' (numbers computed by integrating Pontryagin classes wedged with cohomology classes from the classifying space $BG$) are INVARIANT under ANY homotopy equivalence! Proved for many group classes, but the general conjecture remains the paramount problem in high-dimensional topology!",
            "rules": [
              "Closed oriented 4k-manifold M with fundamental group π₁(M) = G.",
              "Classifying map f: M → BG.",
              "Higher signature: σ_x(M) = ⟨L(M) ∪ f*(x), [M]⟩ for x ∈ H*(BG; ℚ).",
              "Conjecture: If f: M → N is a homotopy equivalence, then σ_x(M) = σ_x(N) for all x!"
            ],
            "mystery": "Hirzebruch's signature theorem (1953) proved the special case G = 1 (simply connected manifolds), which helped launch modern differential topology!",
            "funFact": "Alain Connes used noncommutative geometry and cyclic cohomology in the 1980s to prove the Novikov conjecture for hyperbolic groups!"
          },
          "investigators": {
            "tagline": "Surgery theory, index theorem on open manifolds, and assembly maps.",
            "analogy": "The Novikov conjecture is equivalent to the injectivity of the Baum-Connes assembly map: μ: K_*(BG) → K_*(C*_r(G)) with rational coefficients.",
            "rules": [
              "Hirzebruch L-polynomial L(M).",
              "Baum-Connes assembly map injectivity.",
              "Lean 4 Mathlib algebraic topology."
            ],
            "mystery": "Can the assembly map be proved injective for all discrete groups?",
            "funFact": "Sergei Novikov formulated the conjecture in 1965."
          },
          "pioneers": {
            "tagline": "Coarse geometry, Roe algebras, and controlled topology.",
            "analogy": "Guoliang Yu (1998) made a breakthrough by proving the Novikov conjecture for groups with finite asymptotic dimension and uniform embeddability into Hilbert space.",
            "rules": [
              "Yu's property A and coarse embedding.",
              "C*-algebra K-theory.",
              "Lean 4 functional analysis and operator algebras."
            ],
            "mystery": "AI homological solvers compute higher signature invariants for triangulated 8-manifolds in minutes.",
            "funFact": "The Novikov Conjecture is the majestic mountain uniting geometry, topology, and operator algebras."
          }
        },
        "history": [
          {
            "year": "1965",
            "author": "Sergei Novikov",
            "note": "Formulates the conjecture of topological invariance of higher signatures."
          },
          {
            "year": "1983",
            "author": "Alain Connes",
            "note": "Applies noncommutative geometry and cyclic cohomology to Novikov conjecture."
          },
          {
            "year": "1998",
            "author": "Guoliang Yu (余国良)",
            "note": "Proves conjecture for all groups uniformly embeddable in Hilbert space."
          }
        ]
      }
    }
  },
  {
    "id": "baum-connes",
    "icon": "🧩",
    "difficulty": "Gr 9+",
    "domain": "algebra-analysis",
    "category": "algebra-analysis",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Topology.Algebra.ContinuousMonoidHom\n-- Baum-Connes Conjecture (Paul Baum & Alain Connes, 1982)\n-- The assembly map μ: K_i^G(EG) → K_i(C*_r(G)) is an isomorphism for every locally compact group G.",
    "locales": {
      "en": {
        "name": "Baum-Connes Conjecture",
        "subtitle": "The Grand Bridge Connecting Group Actions to Operator K-Theory",
        "field": "Noncommutative Geometry & Operator Algebras",
        "statusBadge": "ACTIVE RESEARCH FRONTIER",
        "grades": {
          "explorers": {
            "tagline": "Can every quantum wave pattern on a crystal be decoded from a purely geometric map of the atoms?",
            "analogy": "In 1982, Paul Baum and Alain Connes proposed a grand bridge across modern mathematics: For ANY group $G$, there is an 'assembly map' $\\mu$ that takes the topological K-homology of the group's classifying space and maps it directly into the analytical K-theory of the reduced group $C^*$-algebra $C^*_r(G)$. The conjecture asserts: $\\mu$ is ALWAYS an isomorphism (a perfect one-to-one dictionary)! If true, it implies the Novikov Conjecture and the Kadison-Kaplansky Conjecture!",
            "rules": [
              "Locally compact group G acting on proper classifying space EG.",
              "Left side: Equivariant K-homology K_top(G).",
              "Right side: Operator K-theory K_*(C*_r(G)).",
              "Assembly map μ: K_top(G) → K_*(C*_r(G)) is an isomorphism."
            ],
            "mystery": "Proved for all a-T-menable groups (groups with the Haagerup property) by Nigel Higson and Guoliang Yu in 2001!",
            "funFact": "Counterexamples were found in 2003 for the Baum-Connes conjecture WITH COEFFICIENTS, but the original conjecture without coefficients remains open for general groups!"
          },
          "investigators": {
            "tagline": "Kasparov's KK-theory, bivariant K-functors, and Dirac-dual Dirac method.",
            "analogy": "The Dirac-dual Dirac method constructs a homotopy linking the identity to an idempotent projection via geometric Fredholm operators.",
            "rules": [
              "Kasparov bivariant functor KK^G(A, B).",
              "Dirac element d ∈ KK(C_0(V), ℂ).",
              "Lean 4 Mathlib functional analysis."
            ],
            "mystery": "Can we resolve the Baum-Connes conjecture for Gromov random monster groups with expander graphs?",
            "funFact": "Paul Baum and Alain Connes formulated the conjecture in 1982."
          },
          "pioneers": {
            "tagline": "Gromov monster groups and Cayley expanders.",
            "analogy": "Lafforgue (2002) won the Fields Medal partly for proving the Baum-Connes conjecture for reductive Lie groups over local fields and hyperbolic groups.",
            "rules": [
              "Vincent Lafforgue's Banach K-theory.",
              "Expander graph obstruction.",
              "Lean 4 operator algebra library."
            ],
            "mystery": "AI homological engines verify the Baum-Connes isomorphism for hundreds of crystallographic space groups.",
            "funFact": "The Baum-Connes Conjecture is the Rosetta Stone of modern noncommutative geometry."
          }
        },
        "history": [
          {
            "year": "1982",
            "author": "Paul Baum & Alain Connes",
            "note": "Formulate the Baum-Connes assembly conjecture."
          },
          {
            "year": "2001",
            "author": "Nigel Higson & Guoliang Yu",
            "note": "Prove Baum-Connes for groups with the Haagerup property."
          },
          {
            "year": "2002",
            "author": "Vincent Lafforgue",
            "note": "Proves conjecture for hyperbolic groups and reductive groups."
          }
        ]
      },
      "de": {
        "name": "Baum-Connes Conjecture",
        "subtitle": "The Grand Bridge Connecting Group Actions to Operator K-Theory",
        "field": "Noncommutative Geometry & Operator Algebras",
        "statusBadge": "ACTIVE RESEARCH FRONTIER",
        "grades": {
          "explorers": {
            "tagline": "Can every quantum wave pattern on a crystal be decoded from a purely geometric map of the atoms?",
            "analogy": "In 1982, Paul Baum and Alain Connes proposed a grand bridge across modern mathematics: For ANY group $G$, there is an 'assembly map' $\\mu$ that takes the topological K-homology of the group's classifying space and maps it directly into the analytical K-theory of the reduced group $C^*$-algebra $C^*_r(G)$. The conjecture asserts: $\\mu$ is ALWAYS an isomorphism (a perfect one-to-one dictionary)! If true, it implies the Novikov Conjecture and the Kadison-Kaplansky Conjecture!",
            "rules": [
              "Locally compact group G acting on proper classifying space EG.",
              "Left side: Equivariant K-homology K_top(G).",
              "Right side: Operator K-theory K_*(C*_r(G)).",
              "Assembly map μ: K_top(G) → K_*(C*_r(G)) is an isomorphism."
            ],
            "mystery": "Proved for all a-T-menable groups (groups with the Haagerup property) by Nigel Higson and Guoliang Yu in 2001!",
            "funFact": "Counterexamples were found in 2003 for the Baum-Connes conjecture WITH COEFFICIENTS, but the original conjecture without coefficients remains open for general groups!"
          },
          "investigators": {
            "tagline": "Kasparov's KK-theory, bivariant K-functors, and Dirac-dual Dirac method.",
            "analogy": "The Dirac-dual Dirac method constructs a homotopy linking the identity to an idempotent projection via geometric Fredholm operators.",
            "rules": [
              "Kasparov bivariant functor KK^G(A, B).",
              "Dirac element d ∈ KK(C_0(V), ℂ).",
              "Lean 4 Mathlib functional analysis."
            ],
            "mystery": "Can we resolve the Baum-Connes conjecture for Gromov random monster groups with expander graphs?",
            "funFact": "Paul Baum and Alain Connes formulated the conjecture in 1982."
          },
          "pioneers": {
            "tagline": "Gromov monster groups and Cayley expanders.",
            "analogy": "Lafforgue (2002) won the Fields Medal partly for proving the Baum-Connes conjecture for reductive Lie groups over local fields and hyperbolic groups.",
            "rules": [
              "Vincent Lafforgue's Banach K-theory.",
              "Expander graph obstruction.",
              "Lean 4 operator algebra library."
            ],
            "mystery": "AI homological engines verify the Baum-Connes isomorphism for hundreds of crystallographic space groups.",
            "funFact": "The Baum-Connes Conjecture is the Rosetta Stone of modern noncommutative geometry."
          }
        },
        "history": [
          {
            "year": "1982",
            "author": "Paul Baum & Alain Connes",
            "note": "Formulate the Baum-Connes assembly conjecture."
          },
          {
            "year": "2001",
            "author": "Nigel Higson & Guoliang Yu",
            "note": "Prove Baum-Connes for groups with the Haagerup property."
          },
          {
            "year": "2002",
            "author": "Vincent Lafforgue",
            "note": "Proves conjecture for hyperbolic groups and reductive groups."
          }
        ]
      },
      "fr": {
        "name": "Baum-Connes Conjecture",
        "subtitle": "The Grand Bridge Connecting Group Actions to Operator K-Theory",
        "field": "Noncommutative Geometry & Operator Algebras",
        "statusBadge": "ACTIVE RESEARCH FRONTIER",
        "grades": {
          "explorers": {
            "tagline": "Can every quantum wave pattern on a crystal be decoded from a purely geometric map of the atoms?",
            "analogy": "In 1982, Paul Baum and Alain Connes proposed a grand bridge across modern mathematics: For ANY group $G$, there is an 'assembly map' $\\mu$ that takes the topological K-homology of the group's classifying space and maps it directly into the analytical K-theory of the reduced group $C^*$-algebra $C^*_r(G)$. The conjecture asserts: $\\mu$ is ALWAYS an isomorphism (a perfect one-to-one dictionary)! If true, it implies the Novikov Conjecture and the Kadison-Kaplansky Conjecture!",
            "rules": [
              "Locally compact group G acting on proper classifying space EG.",
              "Left side: Equivariant K-homology K_top(G).",
              "Right side: Operator K-theory K_*(C*_r(G)).",
              "Assembly map μ: K_top(G) → K_*(C*_r(G)) is an isomorphism."
            ],
            "mystery": "Proved for all a-T-menable groups (groups with the Haagerup property) by Nigel Higson and Guoliang Yu in 2001!",
            "funFact": "Counterexamples were found in 2003 for the Baum-Connes conjecture WITH COEFFICIENTS, but the original conjecture without coefficients remains open for general groups!"
          },
          "investigators": {
            "tagline": "Kasparov's KK-theory, bivariant K-functors, and Dirac-dual Dirac method.",
            "analogy": "The Dirac-dual Dirac method constructs a homotopy linking the identity to an idempotent projection via geometric Fredholm operators.",
            "rules": [
              "Kasparov bivariant functor KK^G(A, B).",
              "Dirac element d ∈ KK(C_0(V), ℂ).",
              "Lean 4 Mathlib functional analysis."
            ],
            "mystery": "Can we resolve the Baum-Connes conjecture for Gromov random monster groups with expander graphs?",
            "funFact": "Paul Baum and Alain Connes formulated the conjecture in 1982."
          },
          "pioneers": {
            "tagline": "Gromov monster groups and Cayley expanders.",
            "analogy": "Lafforgue (2002) won the Fields Medal partly for proving the Baum-Connes conjecture for reductive Lie groups over local fields and hyperbolic groups.",
            "rules": [
              "Vincent Lafforgue's Banach K-theory.",
              "Expander graph obstruction.",
              "Lean 4 operator algebra library."
            ],
            "mystery": "AI homological engines verify the Baum-Connes isomorphism for hundreds of crystallographic space groups.",
            "funFact": "The Baum-Connes Conjecture is the Rosetta Stone of modern noncommutative geometry."
          }
        },
        "history": [
          {
            "year": "1982",
            "author": "Paul Baum & Alain Connes",
            "note": "Formulate the Baum-Connes assembly conjecture."
          },
          {
            "year": "2001",
            "author": "Nigel Higson & Guoliang Yu",
            "note": "Prove Baum-Connes for groups with the Haagerup property."
          },
          {
            "year": "2002",
            "author": "Vincent Lafforgue",
            "note": "Proves conjecture for hyperbolic groups and reductive groups."
          }
        ]
      },
      "it": {
        "name": "Baum-Connes Conjecture",
        "subtitle": "The Grand Bridge Connecting Group Actions to Operator K-Theory",
        "field": "Noncommutative Geometry & Operator Algebras",
        "statusBadge": "ACTIVE RESEARCH FRONTIER",
        "grades": {
          "explorers": {
            "tagline": "Can every quantum wave pattern on a crystal be decoded from a purely geometric map of the atoms?",
            "analogy": "In 1982, Paul Baum and Alain Connes proposed a grand bridge across modern mathematics: For ANY group $G$, there is an 'assembly map' $\\mu$ that takes the topological K-homology of the group's classifying space and maps it directly into the analytical K-theory of the reduced group $C^*$-algebra $C^*_r(G)$. The conjecture asserts: $\\mu$ is ALWAYS an isomorphism (a perfect one-to-one dictionary)! If true, it implies the Novikov Conjecture and the Kadison-Kaplansky Conjecture!",
            "rules": [
              "Locally compact group G acting on proper classifying space EG.",
              "Left side: Equivariant K-homology K_top(G).",
              "Right side: Operator K-theory K_*(C*_r(G)).",
              "Assembly map μ: K_top(G) → K_*(C*_r(G)) is an isomorphism."
            ],
            "mystery": "Proved for all a-T-menable groups (groups with the Haagerup property) by Nigel Higson and Guoliang Yu in 2001!",
            "funFact": "Counterexamples were found in 2003 for the Baum-Connes conjecture WITH COEFFICIENTS, but the original conjecture without coefficients remains open for general groups!"
          },
          "investigators": {
            "tagline": "Kasparov's KK-theory, bivariant K-functors, and Dirac-dual Dirac method.",
            "analogy": "The Dirac-dual Dirac method constructs a homotopy linking the identity to an idempotent projection via geometric Fredholm operators.",
            "rules": [
              "Kasparov bivariant functor KK^G(A, B).",
              "Dirac element d ∈ KK(C_0(V), ℂ).",
              "Lean 4 Mathlib functional analysis."
            ],
            "mystery": "Can we resolve the Baum-Connes conjecture for Gromov random monster groups with expander graphs?",
            "funFact": "Paul Baum and Alain Connes formulated the conjecture in 1982."
          },
          "pioneers": {
            "tagline": "Gromov monster groups and Cayley expanders.",
            "analogy": "Lafforgue (2002) won the Fields Medal partly for proving the Baum-Connes conjecture for reductive Lie groups over local fields and hyperbolic groups.",
            "rules": [
              "Vincent Lafforgue's Banach K-theory.",
              "Expander graph obstruction.",
              "Lean 4 operator algebra library."
            ],
            "mystery": "AI homological engines verify the Baum-Connes isomorphism for hundreds of crystallographic space groups.",
            "funFact": "The Baum-Connes Conjecture is the Rosetta Stone of modern noncommutative geometry."
          }
        },
        "history": [
          {
            "year": "1982",
            "author": "Paul Baum & Alain Connes",
            "note": "Formulate the Baum-Connes assembly conjecture."
          },
          {
            "year": "2001",
            "author": "Nigel Higson & Guoliang Yu",
            "note": "Prove Baum-Connes for groups with the Haagerup property."
          },
          {
            "year": "2002",
            "author": "Vincent Lafforgue",
            "note": "Proves conjecture for hyperbolic groups and reductive groups."
          }
        ]
      },
      "ja": {
        "name": "Baum-Connes Conjecture",
        "subtitle": "The Grand Bridge Connecting Group Actions to Operator K-Theory",
        "field": "Noncommutative Geometry & Operator Algebras",
        "statusBadge": "ACTIVE RESEARCH FRONTIER",
        "grades": {
          "explorers": {
            "tagline": "Can every quantum wave pattern on a crystal be decoded from a purely geometric map of the atoms?",
            "analogy": "In 1982, Paul Baum and Alain Connes proposed a grand bridge across modern mathematics: For ANY group $G$, there is an 'assembly map' $\\mu$ that takes the topological K-homology of the group's classifying space and maps it directly into the analytical K-theory of the reduced group $C^*$-algebra $C^*_r(G)$. The conjecture asserts: $\\mu$ is ALWAYS an isomorphism (a perfect one-to-one dictionary)! If true, it implies the Novikov Conjecture and the Kadison-Kaplansky Conjecture!",
            "rules": [
              "Locally compact group G acting on proper classifying space EG.",
              "Left side: Equivariant K-homology K_top(G).",
              "Right side: Operator K-theory K_*(C*_r(G)).",
              "Assembly map μ: K_top(G) → K_*(C*_r(G)) is an isomorphism."
            ],
            "mystery": "Proved for all a-T-menable groups (groups with the Haagerup property) by Nigel Higson and Guoliang Yu in 2001!",
            "funFact": "Counterexamples were found in 2003 for the Baum-Connes conjecture WITH COEFFICIENTS, but the original conjecture without coefficients remains open for general groups!"
          },
          "investigators": {
            "tagline": "Kasparov's KK-theory, bivariant K-functors, and Dirac-dual Dirac method.",
            "analogy": "The Dirac-dual Dirac method constructs a homotopy linking the identity to an idempotent projection via geometric Fredholm operators.",
            "rules": [
              "Kasparov bivariant functor KK^G(A, B).",
              "Dirac element d ∈ KK(C_0(V), ℂ).",
              "Lean 4 Mathlib functional analysis."
            ],
            "mystery": "Can we resolve the Baum-Connes conjecture for Gromov random monster groups with expander graphs?",
            "funFact": "Paul Baum and Alain Connes formulated the conjecture in 1982."
          },
          "pioneers": {
            "tagline": "Gromov monster groups and Cayley expanders.",
            "analogy": "Lafforgue (2002) won the Fields Medal partly for proving the Baum-Connes conjecture for reductive Lie groups over local fields and hyperbolic groups.",
            "rules": [
              "Vincent Lafforgue's Banach K-theory.",
              "Expander graph obstruction.",
              "Lean 4 operator algebra library."
            ],
            "mystery": "AI homological engines verify the Baum-Connes isomorphism for hundreds of crystallographic space groups.",
            "funFact": "The Baum-Connes Conjecture is the Rosetta Stone of modern noncommutative geometry."
          }
        },
        "history": [
          {
            "year": "1982",
            "author": "Paul Baum & Alain Connes",
            "note": "Formulate the Baum-Connes assembly conjecture."
          },
          {
            "year": "2001",
            "author": "Nigel Higson & Guoliang Yu",
            "note": "Prove Baum-Connes for groups with the Haagerup property."
          },
          {
            "year": "2002",
            "author": "Vincent Lafforgue",
            "note": "Proves conjecture for hyperbolic groups and reductive groups."
          }
        ]
      },
      "ko": {
        "name": "Baum-Connes Conjecture",
        "subtitle": "The Grand Bridge Connecting Group Actions to Operator K-Theory",
        "field": "Noncommutative Geometry & Operator Algebras",
        "statusBadge": "ACTIVE RESEARCH FRONTIER",
        "grades": {
          "explorers": {
            "tagline": "Can every quantum wave pattern on a crystal be decoded from a purely geometric map of the atoms?",
            "analogy": "In 1982, Paul Baum and Alain Connes proposed a grand bridge across modern mathematics: For ANY group $G$, there is an 'assembly map' $\\mu$ that takes the topological K-homology of the group's classifying space and maps it directly into the analytical K-theory of the reduced group $C^*$-algebra $C^*_r(G)$. The conjecture asserts: $\\mu$ is ALWAYS an isomorphism (a perfect one-to-one dictionary)! If true, it implies the Novikov Conjecture and the Kadison-Kaplansky Conjecture!",
            "rules": [
              "Locally compact group G acting on proper classifying space EG.",
              "Left side: Equivariant K-homology K_top(G).",
              "Right side: Operator K-theory K_*(C*_r(G)).",
              "Assembly map μ: K_top(G) → K_*(C*_r(G)) is an isomorphism."
            ],
            "mystery": "Proved for all a-T-menable groups (groups with the Haagerup property) by Nigel Higson and Guoliang Yu in 2001!",
            "funFact": "Counterexamples were found in 2003 for the Baum-Connes conjecture WITH COEFFICIENTS, but the original conjecture without coefficients remains open for general groups!"
          },
          "investigators": {
            "tagline": "Kasparov's KK-theory, bivariant K-functors, and Dirac-dual Dirac method.",
            "analogy": "The Dirac-dual Dirac method constructs a homotopy linking the identity to an idempotent projection via geometric Fredholm operators.",
            "rules": [
              "Kasparov bivariant functor KK^G(A, B).",
              "Dirac element d ∈ KK(C_0(V), ℂ).",
              "Lean 4 Mathlib functional analysis."
            ],
            "mystery": "Can we resolve the Baum-Connes conjecture for Gromov random monster groups with expander graphs?",
            "funFact": "Paul Baum and Alain Connes formulated the conjecture in 1982."
          },
          "pioneers": {
            "tagline": "Gromov monster groups and Cayley expanders.",
            "analogy": "Lafforgue (2002) won the Fields Medal partly for proving the Baum-Connes conjecture for reductive Lie groups over local fields and hyperbolic groups.",
            "rules": [
              "Vincent Lafforgue's Banach K-theory.",
              "Expander graph obstruction.",
              "Lean 4 operator algebra library."
            ],
            "mystery": "AI homological engines verify the Baum-Connes isomorphism for hundreds of crystallographic space groups.",
            "funFact": "The Baum-Connes Conjecture is the Rosetta Stone of modern noncommutative geometry."
          }
        },
        "history": [
          {
            "year": "1982",
            "author": "Paul Baum & Alain Connes",
            "note": "Formulate the Baum-Connes assembly conjecture."
          },
          {
            "year": "2001",
            "author": "Nigel Higson & Guoliang Yu",
            "note": "Prove Baum-Connes for groups with the Haagerup property."
          },
          {
            "year": "2002",
            "author": "Vincent Lafforgue",
            "note": "Proves conjecture for hyperbolic groups and reductive groups."
          }
        ]
      },
      "zh-Hans": {
        "name": "鲍姆-孔涅猜想",
        "subtitle": "群空间几何拓扑与算子代数 K-理论之间的终极彩虹桥梁",
        "field": "非交换几何 & 算子代数与拓扑",
        "statusBadge": "活跃前沿大一统猜想",
        "grades": {
          "explorers": {
            "tagline": "晶体中所有复杂的量子驻波花样，能不能完全由原子排列的纯几何地图精准解码？",
            "analogy": "1982年保罗·鲍姆与阿兰·孔涅提出了横跨现代数学的宏伟蓝图：对于任意拓扑群 $G$，存在一个神秘的‘装配映射’ $\\mu$，能够将群自身分类空间的几何同调 K-理论，直接精准翻译为该群的约化 $C^*$-算子代数的解析 K-理论。猜想断言：这个映射永远是一个‘完美的同构映射’（即一本毫无遗漏的百宝词典）！如果它成立，著名的诺维科夫猜想、卡迪森-卡普兰斯基猜想都将作为推论自然获证！",
            "rules": [
              "局部紧群 $G$ 作用在真分类空间 $\\underline{E}G$ 上。",
              "左侧：等变拓扑 K-同调群 $K_i^G(\\underline{E}G)$。",
              "右侧：解析算子代数 $K$-群 $K_i(C^*_r(G))$。",
              "装配映射 $\\mu$ 是绝对完美的代数拓扑同构！"
            ],
            "mystery": "奈杰尔·希格森与余国良在2001年证明了所有具备哈格鲁普性质（度量顺从群）的群全部满足鲍姆-孔涅猜想！",
            "funFact": "虽然2003年学者们在带有非平凡交换系数代数的情形下构造了特异反例，但最核心的‘无系数标准原版猜想’至今依然无人攻破！"
          },
          "investigators": {
            "tagline": "卡斯帕罗夫双变元 KK-理论与狄拉克-对偶狄拉克逆映射构造法。",
            "analogy": "狄拉克-对偶狄拉克法通过在希尔伯特模上构造广义弗雷德霍姆算子，建立起将恒等算子与极小投影紧密相连的同伦通道。",
            "rules": [
              "卡斯帕罗夫双变元 $KK$-函子。",
              "狄拉克元素与对偶狄拉克元素相交乘积。",
              "Lean 4 希尔伯特空间算子形式化。"
            ],
            "mystery": "能否征服包含稠密图膨胀子子图的格罗莫夫随机怪兽群？",
            "funFact": "鲍姆与孔涅于1982年联合提出。"
          },
          "pioneers": {
            "tagline": "格罗莫夫怪兽群、随机凯莱图与拓扑阻碍。",
            "analogy": "洛朗·拉福格在2002年荣获菲尔兹奖，其工作之一就是攻克了所有局部域上约化李群的鲍姆-孔涅猜想。",
            "rules": [
              "樊尚·拉福格巴拿赫空间代数 K-理论。",
              "图膨胀子拓扑刚性障碍分析。",
              "Lean 4 算子代数结构形式化。"
            ],
            "mystery": "AI 同调代数系统已为数百个晶体空间群自动化计算并验证了鲍姆-孔涅映射的严密同构。",
            "funFact": "鲍姆-孔涅猜想是现代非交换几何与量子拓扑学中最伟大的罗塞塔石碑。"
          }
        },
        "history": [
          {
            "year": "1982",
            "author": "鲍姆 & 孔涅",
            "note": "正式提出算子代数装配同构猜想。"
          },
          {
            "year": "2001",
            "author": "希格森 & 余国良",
            "note": "攻克度量顺从群体系！"
          },
          {
            "year": "2002",
            "author": "樊尚·拉福格",
            "note": "创立强双曲群解析证明理论！"
          }
        ]
      },
      "zh-Hant": {
        "name": "Baum-Connes Conjecture",
        "subtitle": "The Grand Bridge Connecting Group Actions to Operator K-Theory",
        "field": "Noncommutative Geometry & Operator Algebras",
        "statusBadge": "ACTIVE RESEARCH FRONTIER",
        "grades": {
          "explorers": {
            "tagline": "Can every quantum wave pattern on a crystal be decoded from a purely geometric map of the atoms?",
            "analogy": "In 1982, Paul Baum and Alain Connes proposed a grand bridge across modern mathematics: For ANY group $G$, there is an 'assembly map' $\\mu$ that takes the topological K-homology of the group's classifying space and maps it directly into the analytical K-theory of the reduced group $C^*$-algebra $C^*_r(G)$. The conjecture asserts: $\\mu$ is ALWAYS an isomorphism (a perfect one-to-one dictionary)! If true, it implies the Novikov Conjecture and the Kadison-Kaplansky Conjecture!",
            "rules": [
              "Locally compact group G acting on proper classifying space EG.",
              "Left side: Equivariant K-homology K_top(G).",
              "Right side: Operator K-theory K_*(C*_r(G)).",
              "Assembly map μ: K_top(G) → K_*(C*_r(G)) is an isomorphism."
            ],
            "mystery": "Proved for all a-T-menable groups (groups with the Haagerup property) by Nigel Higson and Guoliang Yu in 2001!",
            "funFact": "Counterexamples were found in 2003 for the Baum-Connes conjecture WITH COEFFICIENTS, but the original conjecture without coefficients remains open for general groups!"
          },
          "investigators": {
            "tagline": "Kasparov's KK-theory, bivariant K-functors, and Dirac-dual Dirac method.",
            "analogy": "The Dirac-dual Dirac method constructs a homotopy linking the identity to an idempotent projection via geometric Fredholm operators.",
            "rules": [
              "Kasparov bivariant functor KK^G(A, B).",
              "Dirac element d ∈ KK(C_0(V), ℂ).",
              "Lean 4 Mathlib functional analysis."
            ],
            "mystery": "Can we resolve the Baum-Connes conjecture for Gromov random monster groups with expander graphs?",
            "funFact": "Paul Baum and Alain Connes formulated the conjecture in 1982."
          },
          "pioneers": {
            "tagline": "Gromov monster groups and Cayley expanders.",
            "analogy": "Lafforgue (2002) won the Fields Medal partly for proving the Baum-Connes conjecture for reductive Lie groups over local fields and hyperbolic groups.",
            "rules": [
              "Vincent Lafforgue's Banach K-theory.",
              "Expander graph obstruction.",
              "Lean 4 operator algebra library."
            ],
            "mystery": "AI homological engines verify the Baum-Connes isomorphism for hundreds of crystallographic space groups.",
            "funFact": "The Baum-Connes Conjecture is the Rosetta Stone of modern noncommutative geometry."
          }
        },
        "history": [
          {
            "year": "1982",
            "author": "Paul Baum & Alain Connes",
            "note": "Formulate the Baum-Connes assembly conjecture."
          },
          {
            "year": "2001",
            "author": "Nigel Higson & Guoliang Yu",
            "note": "Prove Baum-Connes for groups with the Haagerup property."
          },
          {
            "year": "2002",
            "author": "Vincent Lafforgue",
            "note": "Proves conjecture for hyperbolic groups and reductive groups."
          }
        ]
      }
    }
  },
  {
    "id": "birch-tate",
    "icon": "📜",
    "difficulty": "Gr 9+",
    "domain": "algebra-analysis",
    "category": "algebra-analysis",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.NumberTheory.NumberField\n-- Birch-Tate Conjecture (Bryan Birch & John Tate, 1970)\n-- For a totally real number field F, #K_2(O_F) = |w_2(F) · ζ_F(-1)|.\n-- Proved by Wiles (1990) up to 2-torsion as part of the Main Conjecture of Iwasawa Theory.",
    "locales": {
      "en": {
        "name": "The Birch-Tate Conjecture",
        "subtitle": "The Order of $K_2(\\mathcal{O}_F)$ Equals Values of the Dedekind Zeta Function",
        "field": "Algebraic K-Theory & Iwasawa Theory",
        "statusBadge": "PROVED UP TO 2-TORSION (WILES 1990)",
        "grades": {
          "explorers": {
            "tagline": "Can the secret twist of higher-dimensional fractions be read from an infinite Riemann sum?",
            "analogy": "In 1970, Bryan Birch and John Tate conjectured an astounding link between two completely different realms: On one hand, algebraic K-theory studies $K_2(\\mathcal{O}_F)$, the group of hidden relations among matrices over the ring of integers of a totally real number field $F$. On the other hand, the Dedekind zeta function $\\zeta_F(s)$ is an analytic sum over prime ideals. Birch and Tate conjectured: the exact number of elements in $K_2(\\mathcal{O}_F)$ is $|w_2(F) \\cdot \\zeta_F(-1)|$! In 1990, Andrew Wiles proved it (away from the prime 2) by proving the Main Conjecture of Iwasawa Theory!",
            "rules": [
              "Totally real number field F with ring of integers O_F.",
              "K_2(O_F) is a finite abelian group.",
              "Dedekind zeta function value ζ_F(-1) ∈ ℚ.",
              "Birch-Tate formula: #K_2(O_F) = |w_2(F) · ζ_F(-1)|.",
              "Wiles (1990): Proved for all odd prime parts using Iwasawa theory!"
            ],
            "mystery": "For F = ℚ, #K_2(ℤ) = 2, w_2(ℚ) = 24, and ζ(-1) = -1/12. Notice: |24 · (-1/12)| = 2—a PERFECT MATCH!",
            "funFact": "The Birch-Tate conjecture is the algebraic K-theory analog of the Birch and Swinnerton-Dyer (BSD) conjecture for elliptic curves!"
          },
          "investigators": {
            "tagline": "Iwasawa theory, p-adic L-functions, and Galois cohomology.",
            "analogy": "Andrew Wiles proved the Main Conjecture over totally real fields by constructing modular forms of half-integral weight to build unramified extensions.",
            "rules": [
              "Iwasawa Main Conjecture char(X_∞) = (L_p(s)).",
              "K-groups K_2(O_F) ≅ H²(Spec O_F, ℤ_p(2)).",
              "Lean 4 Mathlib number fields."
            ],
            "mystery": "Can we resolve the remaining 2-torsion ambiguity in full generality for all fields?",
            "funFact": "Bryan Birch and John Tate in 1970; proved by Andrew Wiles in 1990."
          },
          "pioneers": {
            "tagline": "Motivic cohomology and Voevodsky's proof of the Milnor conjecture.",
            "analogy": "The Milnor and Bloch-Kato conjectures proved by Voevodsky establish the precise link between Galois symbols and K-groups for all primes including p = 2.",
            "rules": [
              "Milnor conjecture: K_n^M(F)/2 ≅ H^n(F, μ_2).",
              "Voevodsky motivic complexes.",
              "Formal proof verification in Lean 4."
            ],
            "mystery": "AI computer algebra systems compute K_2 groups and Dedekind zeta values for thousands of cubic and quartic fields.",
            "funFact": "The Birch-Tate Conjecture is a sparkling triumph demonstrating the mystical unity of algebraic structures and complex analysis."
          }
        },
        "history": [
          {
            "year": "1970",
            "author": "Bryan Birch & John Tate",
            "note": "Propose the formula relating K_2(O_F) to ζ_F(-1)."
          },
          {
            "year": "1972",
            "author": "Daniel Quillen",
            "note": "Invents higher algebraic K-theory (Fields Medal 1978)."
          },
          {
            "year": "1990",
            "author": "Andrew Wiles",
            "note": "Proves the Main Conjecture of Iwasawa Theory, confirming Birch-Tate away from 2."
          }
        ]
      },
      "de": {
        "name": "The Birch-Tate Conjecture",
        "subtitle": "The Order of $K_2(\\mathcal{O}_F)$ Equals Values of the Dedekind Zeta Function",
        "field": "Algebraic K-Theory & Iwasawa Theory",
        "statusBadge": "PROVED UP TO 2-TORSION (WILES 1990)",
        "grades": {
          "explorers": {
            "tagline": "Can the secret twist of higher-dimensional fractions be read from an infinite Riemann sum?",
            "analogy": "In 1970, Bryan Birch and John Tate conjectured an astounding link between two completely different realms: On one hand, algebraic K-theory studies $K_2(\\mathcal{O}_F)$, the group of hidden relations among matrices over the ring of integers of a totally real number field $F$. On the other hand, the Dedekind zeta function $\\zeta_F(s)$ is an analytic sum over prime ideals. Birch and Tate conjectured: the exact number of elements in $K_2(\\mathcal{O}_F)$ is $|w_2(F) \\cdot \\zeta_F(-1)|$! In 1990, Andrew Wiles proved it (away from the prime 2) by proving the Main Conjecture of Iwasawa Theory!",
            "rules": [
              "Totally real number field F with ring of integers O_F.",
              "K_2(O_F) is a finite abelian group.",
              "Dedekind zeta function value ζ_F(-1) ∈ ℚ.",
              "Birch-Tate formula: #K_2(O_F) = |w_2(F) · ζ_F(-1)|.",
              "Wiles (1990): Proved for all odd prime parts using Iwasawa theory!"
            ],
            "mystery": "For F = ℚ, #K_2(ℤ) = 2, w_2(ℚ) = 24, and ζ(-1) = -1/12. Notice: |24 · (-1/12)| = 2—a PERFECT MATCH!",
            "funFact": "The Birch-Tate conjecture is the algebraic K-theory analog of the Birch and Swinnerton-Dyer (BSD) conjecture for elliptic curves!"
          },
          "investigators": {
            "tagline": "Iwasawa theory, p-adic L-functions, and Galois cohomology.",
            "analogy": "Andrew Wiles proved the Main Conjecture over totally real fields by constructing modular forms of half-integral weight to build unramified extensions.",
            "rules": [
              "Iwasawa Main Conjecture char(X_∞) = (L_p(s)).",
              "K-groups K_2(O_F) ≅ H²(Spec O_F, ℤ_p(2)).",
              "Lean 4 Mathlib number fields."
            ],
            "mystery": "Can we resolve the remaining 2-torsion ambiguity in full generality for all fields?",
            "funFact": "Bryan Birch and John Tate in 1970; proved by Andrew Wiles in 1990."
          },
          "pioneers": {
            "tagline": "Motivic cohomology and Voevodsky's proof of the Milnor conjecture.",
            "analogy": "The Milnor and Bloch-Kato conjectures proved by Voevodsky establish the precise link between Galois symbols and K-groups for all primes including p = 2.",
            "rules": [
              "Milnor conjecture: K_n^M(F)/2 ≅ H^n(F, μ_2).",
              "Voevodsky motivic complexes.",
              "Formal proof verification in Lean 4."
            ],
            "mystery": "AI computer algebra systems compute K_2 groups and Dedekind zeta values for thousands of cubic and quartic fields.",
            "funFact": "The Birch-Tate Conjecture is a sparkling triumph demonstrating the mystical unity of algebraic structures and complex analysis."
          }
        },
        "history": [
          {
            "year": "1970",
            "author": "Bryan Birch & John Tate",
            "note": "Propose the formula relating K_2(O_F) to ζ_F(-1)."
          },
          {
            "year": "1972",
            "author": "Daniel Quillen",
            "note": "Invents higher algebraic K-theory (Fields Medal 1978)."
          },
          {
            "year": "1990",
            "author": "Andrew Wiles",
            "note": "Proves the Main Conjecture of Iwasawa Theory, confirming Birch-Tate away from 2."
          }
        ]
      },
      "fr": {
        "name": "The Birch-Tate Conjecture",
        "subtitle": "The Order of $K_2(\\mathcal{O}_F)$ Equals Values of the Dedekind Zeta Function",
        "field": "Algebraic K-Theory & Iwasawa Theory",
        "statusBadge": "PROVED UP TO 2-TORSION (WILES 1990)",
        "grades": {
          "explorers": {
            "tagline": "Can the secret twist of higher-dimensional fractions be read from an infinite Riemann sum?",
            "analogy": "In 1970, Bryan Birch and John Tate conjectured an astounding link between two completely different realms: On one hand, algebraic K-theory studies $K_2(\\mathcal{O}_F)$, the group of hidden relations among matrices over the ring of integers of a totally real number field $F$. On the other hand, the Dedekind zeta function $\\zeta_F(s)$ is an analytic sum over prime ideals. Birch and Tate conjectured: the exact number of elements in $K_2(\\mathcal{O}_F)$ is $|w_2(F) \\cdot \\zeta_F(-1)|$! In 1990, Andrew Wiles proved it (away from the prime 2) by proving the Main Conjecture of Iwasawa Theory!",
            "rules": [
              "Totally real number field F with ring of integers O_F.",
              "K_2(O_F) is a finite abelian group.",
              "Dedekind zeta function value ζ_F(-1) ∈ ℚ.",
              "Birch-Tate formula: #K_2(O_F) = |w_2(F) · ζ_F(-1)|.",
              "Wiles (1990): Proved for all odd prime parts using Iwasawa theory!"
            ],
            "mystery": "For F = ℚ, #K_2(ℤ) = 2, w_2(ℚ) = 24, and ζ(-1) = -1/12. Notice: |24 · (-1/12)| = 2—a PERFECT MATCH!",
            "funFact": "The Birch-Tate conjecture is the algebraic K-theory analog of the Birch and Swinnerton-Dyer (BSD) conjecture for elliptic curves!"
          },
          "investigators": {
            "tagline": "Iwasawa theory, p-adic L-functions, and Galois cohomology.",
            "analogy": "Andrew Wiles proved the Main Conjecture over totally real fields by constructing modular forms of half-integral weight to build unramified extensions.",
            "rules": [
              "Iwasawa Main Conjecture char(X_∞) = (L_p(s)).",
              "K-groups K_2(O_F) ≅ H²(Spec O_F, ℤ_p(2)).",
              "Lean 4 Mathlib number fields."
            ],
            "mystery": "Can we resolve the remaining 2-torsion ambiguity in full generality for all fields?",
            "funFact": "Bryan Birch and John Tate in 1970; proved by Andrew Wiles in 1990."
          },
          "pioneers": {
            "tagline": "Motivic cohomology and Voevodsky's proof of the Milnor conjecture.",
            "analogy": "The Milnor and Bloch-Kato conjectures proved by Voevodsky establish the precise link between Galois symbols and K-groups for all primes including p = 2.",
            "rules": [
              "Milnor conjecture: K_n^M(F)/2 ≅ H^n(F, μ_2).",
              "Voevodsky motivic complexes.",
              "Formal proof verification in Lean 4."
            ],
            "mystery": "AI computer algebra systems compute K_2 groups and Dedekind zeta values for thousands of cubic and quartic fields.",
            "funFact": "The Birch-Tate Conjecture is a sparkling triumph demonstrating the mystical unity of algebraic structures and complex analysis."
          }
        },
        "history": [
          {
            "year": "1970",
            "author": "Bryan Birch & John Tate",
            "note": "Propose the formula relating K_2(O_F) to ζ_F(-1)."
          },
          {
            "year": "1972",
            "author": "Daniel Quillen",
            "note": "Invents higher algebraic K-theory (Fields Medal 1978)."
          },
          {
            "year": "1990",
            "author": "Andrew Wiles",
            "note": "Proves the Main Conjecture of Iwasawa Theory, confirming Birch-Tate away from 2."
          }
        ]
      },
      "it": {
        "name": "The Birch-Tate Conjecture",
        "subtitle": "The Order of $K_2(\\mathcal{O}_F)$ Equals Values of the Dedekind Zeta Function",
        "field": "Algebraic K-Theory & Iwasawa Theory",
        "statusBadge": "PROVED UP TO 2-TORSION (WILES 1990)",
        "grades": {
          "explorers": {
            "tagline": "Can the secret twist of higher-dimensional fractions be read from an infinite Riemann sum?",
            "analogy": "In 1970, Bryan Birch and John Tate conjectured an astounding link between two completely different realms: On one hand, algebraic K-theory studies $K_2(\\mathcal{O}_F)$, the group of hidden relations among matrices over the ring of integers of a totally real number field $F$. On the other hand, the Dedekind zeta function $\\zeta_F(s)$ is an analytic sum over prime ideals. Birch and Tate conjectured: the exact number of elements in $K_2(\\mathcal{O}_F)$ is $|w_2(F) \\cdot \\zeta_F(-1)|$! In 1990, Andrew Wiles proved it (away from the prime 2) by proving the Main Conjecture of Iwasawa Theory!",
            "rules": [
              "Totally real number field F with ring of integers O_F.",
              "K_2(O_F) is a finite abelian group.",
              "Dedekind zeta function value ζ_F(-1) ∈ ℚ.",
              "Birch-Tate formula: #K_2(O_F) = |w_2(F) · ζ_F(-1)|.",
              "Wiles (1990): Proved for all odd prime parts using Iwasawa theory!"
            ],
            "mystery": "For F = ℚ, #K_2(ℤ) = 2, w_2(ℚ) = 24, and ζ(-1) = -1/12. Notice: |24 · (-1/12)| = 2—a PERFECT MATCH!",
            "funFact": "The Birch-Tate conjecture is the algebraic K-theory analog of the Birch and Swinnerton-Dyer (BSD) conjecture for elliptic curves!"
          },
          "investigators": {
            "tagline": "Iwasawa theory, p-adic L-functions, and Galois cohomology.",
            "analogy": "Andrew Wiles proved the Main Conjecture over totally real fields by constructing modular forms of half-integral weight to build unramified extensions.",
            "rules": [
              "Iwasawa Main Conjecture char(X_∞) = (L_p(s)).",
              "K-groups K_2(O_F) ≅ H²(Spec O_F, ℤ_p(2)).",
              "Lean 4 Mathlib number fields."
            ],
            "mystery": "Can we resolve the remaining 2-torsion ambiguity in full generality for all fields?",
            "funFact": "Bryan Birch and John Tate in 1970; proved by Andrew Wiles in 1990."
          },
          "pioneers": {
            "tagline": "Motivic cohomology and Voevodsky's proof of the Milnor conjecture.",
            "analogy": "The Milnor and Bloch-Kato conjectures proved by Voevodsky establish the precise link between Galois symbols and K-groups for all primes including p = 2.",
            "rules": [
              "Milnor conjecture: K_n^M(F)/2 ≅ H^n(F, μ_2).",
              "Voevodsky motivic complexes.",
              "Formal proof verification in Lean 4."
            ],
            "mystery": "AI computer algebra systems compute K_2 groups and Dedekind zeta values for thousands of cubic and quartic fields.",
            "funFact": "The Birch-Tate Conjecture is a sparkling triumph demonstrating the mystical unity of algebraic structures and complex analysis."
          }
        },
        "history": [
          {
            "year": "1970",
            "author": "Bryan Birch & John Tate",
            "note": "Propose the formula relating K_2(O_F) to ζ_F(-1)."
          },
          {
            "year": "1972",
            "author": "Daniel Quillen",
            "note": "Invents higher algebraic K-theory (Fields Medal 1978)."
          },
          {
            "year": "1990",
            "author": "Andrew Wiles",
            "note": "Proves the Main Conjecture of Iwasawa Theory, confirming Birch-Tate away from 2."
          }
        ]
      },
      "ja": {
        "name": "The Birch-Tate Conjecture",
        "subtitle": "The Order of $K_2(\\mathcal{O}_F)$ Equals Values of the Dedekind Zeta Function",
        "field": "Algebraic K-Theory & Iwasawa Theory",
        "statusBadge": "PROVED UP TO 2-TORSION (WILES 1990)",
        "grades": {
          "explorers": {
            "tagline": "Can the secret twist of higher-dimensional fractions be read from an infinite Riemann sum?",
            "analogy": "In 1970, Bryan Birch and John Tate conjectured an astounding link between two completely different realms: On one hand, algebraic K-theory studies $K_2(\\mathcal{O}_F)$, the group of hidden relations among matrices over the ring of integers of a totally real number field $F$. On the other hand, the Dedekind zeta function $\\zeta_F(s)$ is an analytic sum over prime ideals. Birch and Tate conjectured: the exact number of elements in $K_2(\\mathcal{O}_F)$ is $|w_2(F) \\cdot \\zeta_F(-1)|$! In 1990, Andrew Wiles proved it (away from the prime 2) by proving the Main Conjecture of Iwasawa Theory!",
            "rules": [
              "Totally real number field F with ring of integers O_F.",
              "K_2(O_F) is a finite abelian group.",
              "Dedekind zeta function value ζ_F(-1) ∈ ℚ.",
              "Birch-Tate formula: #K_2(O_F) = |w_2(F) · ζ_F(-1)|.",
              "Wiles (1990): Proved for all odd prime parts using Iwasawa theory!"
            ],
            "mystery": "For F = ℚ, #K_2(ℤ) = 2, w_2(ℚ) = 24, and ζ(-1) = -1/12. Notice: |24 · (-1/12)| = 2—a PERFECT MATCH!",
            "funFact": "The Birch-Tate conjecture is the algebraic K-theory analog of the Birch and Swinnerton-Dyer (BSD) conjecture for elliptic curves!"
          },
          "investigators": {
            "tagline": "Iwasawa theory, p-adic L-functions, and Galois cohomology.",
            "analogy": "Andrew Wiles proved the Main Conjecture over totally real fields by constructing modular forms of half-integral weight to build unramified extensions.",
            "rules": [
              "Iwasawa Main Conjecture char(X_∞) = (L_p(s)).",
              "K-groups K_2(O_F) ≅ H²(Spec O_F, ℤ_p(2)).",
              "Lean 4 Mathlib number fields."
            ],
            "mystery": "Can we resolve the remaining 2-torsion ambiguity in full generality for all fields?",
            "funFact": "Bryan Birch and John Tate in 1970; proved by Andrew Wiles in 1990."
          },
          "pioneers": {
            "tagline": "Motivic cohomology and Voevodsky's proof of the Milnor conjecture.",
            "analogy": "The Milnor and Bloch-Kato conjectures proved by Voevodsky establish the precise link between Galois symbols and K-groups for all primes including p = 2.",
            "rules": [
              "Milnor conjecture: K_n^M(F)/2 ≅ H^n(F, μ_2).",
              "Voevodsky motivic complexes.",
              "Formal proof verification in Lean 4."
            ],
            "mystery": "AI computer algebra systems compute K_2 groups and Dedekind zeta values for thousands of cubic and quartic fields.",
            "funFact": "The Birch-Tate Conjecture is a sparkling triumph demonstrating the mystical unity of algebraic structures and complex analysis."
          }
        },
        "history": [
          {
            "year": "1970",
            "author": "Bryan Birch & John Tate",
            "note": "Propose the formula relating K_2(O_F) to ζ_F(-1)."
          },
          {
            "year": "1972",
            "author": "Daniel Quillen",
            "note": "Invents higher algebraic K-theory (Fields Medal 1978)."
          },
          {
            "year": "1990",
            "author": "Andrew Wiles",
            "note": "Proves the Main Conjecture of Iwasawa Theory, confirming Birch-Tate away from 2."
          }
        ]
      },
      "ko": {
        "name": "The Birch-Tate Conjecture",
        "subtitle": "The Order of $K_2(\\mathcal{O}_F)$ Equals Values of the Dedekind Zeta Function",
        "field": "Algebraic K-Theory & Iwasawa Theory",
        "statusBadge": "PROVED UP TO 2-TORSION (WILES 1990)",
        "grades": {
          "explorers": {
            "tagline": "Can the secret twist of higher-dimensional fractions be read from an infinite Riemann sum?",
            "analogy": "In 1970, Bryan Birch and John Tate conjectured an astounding link between two completely different realms: On one hand, algebraic K-theory studies $K_2(\\mathcal{O}_F)$, the group of hidden relations among matrices over the ring of integers of a totally real number field $F$. On the other hand, the Dedekind zeta function $\\zeta_F(s)$ is an analytic sum over prime ideals. Birch and Tate conjectured: the exact number of elements in $K_2(\\mathcal{O}_F)$ is $|w_2(F) \\cdot \\zeta_F(-1)|$! In 1990, Andrew Wiles proved it (away from the prime 2) by proving the Main Conjecture of Iwasawa Theory!",
            "rules": [
              "Totally real number field F with ring of integers O_F.",
              "K_2(O_F) is a finite abelian group.",
              "Dedekind zeta function value ζ_F(-1) ∈ ℚ.",
              "Birch-Tate formula: #K_2(O_F) = |w_2(F) · ζ_F(-1)|.",
              "Wiles (1990): Proved for all odd prime parts using Iwasawa theory!"
            ],
            "mystery": "For F = ℚ, #K_2(ℤ) = 2, w_2(ℚ) = 24, and ζ(-1) = -1/12. Notice: |24 · (-1/12)| = 2—a PERFECT MATCH!",
            "funFact": "The Birch-Tate conjecture is the algebraic K-theory analog of the Birch and Swinnerton-Dyer (BSD) conjecture for elliptic curves!"
          },
          "investigators": {
            "tagline": "Iwasawa theory, p-adic L-functions, and Galois cohomology.",
            "analogy": "Andrew Wiles proved the Main Conjecture over totally real fields by constructing modular forms of half-integral weight to build unramified extensions.",
            "rules": [
              "Iwasawa Main Conjecture char(X_∞) = (L_p(s)).",
              "K-groups K_2(O_F) ≅ H²(Spec O_F, ℤ_p(2)).",
              "Lean 4 Mathlib number fields."
            ],
            "mystery": "Can we resolve the remaining 2-torsion ambiguity in full generality for all fields?",
            "funFact": "Bryan Birch and John Tate in 1970; proved by Andrew Wiles in 1990."
          },
          "pioneers": {
            "tagline": "Motivic cohomology and Voevodsky's proof of the Milnor conjecture.",
            "analogy": "The Milnor and Bloch-Kato conjectures proved by Voevodsky establish the precise link between Galois symbols and K-groups for all primes including p = 2.",
            "rules": [
              "Milnor conjecture: K_n^M(F)/2 ≅ H^n(F, μ_2).",
              "Voevodsky motivic complexes.",
              "Formal proof verification in Lean 4."
            ],
            "mystery": "AI computer algebra systems compute K_2 groups and Dedekind zeta values for thousands of cubic and quartic fields.",
            "funFact": "The Birch-Tate Conjecture is a sparkling triumph demonstrating the mystical unity of algebraic structures and complex analysis."
          }
        },
        "history": [
          {
            "year": "1970",
            "author": "Bryan Birch & John Tate",
            "note": "Propose the formula relating K_2(O_F) to ζ_F(-1)."
          },
          {
            "year": "1972",
            "author": "Daniel Quillen",
            "note": "Invents higher algebraic K-theory (Fields Medal 1978)."
          },
          {
            "year": "1990",
            "author": "Andrew Wiles",
            "note": "Proves the Main Conjecture of Iwasawa Theory, confirming Birch-Tate away from 2."
          }
        ]
      },
      "zh-Hans": {
        "name": "伯奇-泰特猜想",
        "subtitle": "代数 K-群 $K_2(\\mathcal{O}_F)$ 的阶恰好等于戴德金 Zeta 函数在负一点的特殊值（怀尔斯1990年攻克主猜想）",
        "field": "代数 K-理论 & 岩泽理论",
        "statusBadge": "怀尔斯已证（除2-挠元外）",
        "grades": {
          "explorers": {
            "tagline": "高维代数世界里那些复杂的几何扭转，能不能从一条经典的无穷级数求和中一眼看出？",
            "analogy": "1970年布莱恩·伯奇与约翰·泰特猜想了一个震撼数论界的绝妙联系：一方面，代数 K-理论中的 $K_2(\\mathcal{O}_F)$ 研究的是全实代数数域整数环上高维矩阵隐藏的内在拓扑关系；另一方面，戴德金 Zeta 函数 $\\zeta_F(s)$ 是数域上素理想的解析求和级数。伯奇与泰特猜想：群 $K_2(\\mathcal{O}_F)$ 中的元素个数，分毫不差地精确等于 $|w_2(F) \\cdot \\zeta_F(-1)|$！1990年，安德鲁·怀尔斯通过彻底证明代数数论的‘岩泽主猜想’，除 2 之外完全证实了这一宏伟猜想！",
            "rules": [
              "全实代数数域 $F$ 及其代数整数环 $\\mathcal{O}_F$。",
              "$K_2(\\mathcal{O}_F)$ 是一个有限阿贝尔群。",
              "戴德金 Zeta 函数负点特殊值 $\\zeta_F(-1) \\in \\mathbb{Q}$。",
              "伯奇-泰特公式：$\\#K_2(\\mathcal{O}_F) = |w_2(F) \\cdot \\zeta_F(-1)|$。",
              "怀尔斯 (1990)：运用岩泽主猜想彻底攻破所有奇素数分量！"
            ],
            "mystery": "当数域是有理数域 $\\mathbb{Q}$ 时，$\\#K_2(\\mathbb{Z}) = 2$，$w_2(\\mathbb{Q}) = 24$，而著名欧拉值 $\\zeta(-1) = -1/12$。计算得 $|24 \\times (-1/12)| = 2$，分毫不差，完美精确匹配！",
            "funFact": "伯奇-泰特猜想完全是代数 K-理论世界中与千禧年 BSD 猜想交相辉映的姐妹杰作！"
          },
          "investigators": {
            "tagline": "岩泽理论、$p$-adic L-函数与伽罗瓦上同调。",
            "analogy": "怀尔斯通过构造全实域上的希尔伯特模形式与卡尔-希策布鲁赫除数，成功确立了岩泽特征理想与解析 $p$-进 L-函数的严格代数等同性。",
            "rules": [
              "岩泽主猜想特征理想等式。",
              "奎伦-利希滕鲍姆上同调同构定理。",
              "Lean 4 代数数域与理想类群形式化。"
            ],
            "mystery": "能否在最普遍的意义下彻底清除素数 2 对应的 2-挠元模糊性？",
            "funFact": "伯奇与泰特于1970年提出，怀尔斯于1990年获证。"
          },
          "pioneers": {
            "tagline": "基底上同调与沃埃沃茨基米尔诺猜想证明。",
            "analogy": "沃埃沃茨基荣获菲尔兹奖的米尔诺猜想完全证明，确立了伽罗瓦符号与米尔诺 K-群在所有素数（包含 2）下的高维对应。",
            "rules": [
              "米尔诺同构定理形式化。",
              "沃埃沃茨基基底代数复形。",
              "Lean 4 Mathlib 伽罗瓦上同调库。"
            ],
            "mystery": "PARI/GP 与 AI 代数系统已为数千个三次和四次代数数域自动化计算并验证了伯奇-泰特等式的纯数字精度。",
            "funFact": "伯奇-泰特猜想是现代代数结构与复分析极值融合的最闪耀神圣凯歌。"
          }
        },
        "history": [
          {
            "year": "1970",
            "author": "伯奇 & 泰特",
            "note": "提出将 K_2 群阶数与戴德金 Zeta 特殊值关联的公式。"
          },
          {
            "year": "1972",
            "author": "丹尼尔·奎伦",
            "note": "创立高等代数 K-理论并荣获菲尔兹奖。"
          },
          {
            "year": "1990",
            "author": "安德鲁·怀尔斯",
            "note": "彻底证明岩泽主猜想，除 2 外完全确立伯奇-泰特猜想！"
          }
        ]
      },
      "zh-Hant": {
        "name": "The Birch-Tate Conjecture",
        "subtitle": "The Order of $K_2(\\mathcal{O}_F)$ Equals Values of the Dedekind Zeta Function",
        "field": "Algebraic K-Theory & Iwasawa Theory",
        "statusBadge": "PROVED UP TO 2-TORSION (WILES 1990)",
        "grades": {
          "explorers": {
            "tagline": "Can the secret twist of higher-dimensional fractions be read from an infinite Riemann sum?",
            "analogy": "In 1970, Bryan Birch and John Tate conjectured an astounding link between two completely different realms: On one hand, algebraic K-theory studies $K_2(\\mathcal{O}_F)$, the group of hidden relations among matrices over the ring of integers of a totally real number field $F$. On the other hand, the Dedekind zeta function $\\zeta_F(s)$ is an analytic sum over prime ideals. Birch and Tate conjectured: the exact number of elements in $K_2(\\mathcal{O}_F)$ is $|w_2(F) \\cdot \\zeta_F(-1)|$! In 1990, Andrew Wiles proved it (away from the prime 2) by proving the Main Conjecture of Iwasawa Theory!",
            "rules": [
              "Totally real number field F with ring of integers O_F.",
              "K_2(O_F) is a finite abelian group.",
              "Dedekind zeta function value ζ_F(-1) ∈ ℚ.",
              "Birch-Tate formula: #K_2(O_F) = |w_2(F) · ζ_F(-1)|.",
              "Wiles (1990): Proved for all odd prime parts using Iwasawa theory!"
            ],
            "mystery": "For F = ℚ, #K_2(ℤ) = 2, w_2(ℚ) = 24, and ζ(-1) = -1/12. Notice: |24 · (-1/12)| = 2—a PERFECT MATCH!",
            "funFact": "The Birch-Tate conjecture is the algebraic K-theory analog of the Birch and Swinnerton-Dyer (BSD) conjecture for elliptic curves!"
          },
          "investigators": {
            "tagline": "Iwasawa theory, p-adic L-functions, and Galois cohomology.",
            "analogy": "Andrew Wiles proved the Main Conjecture over totally real fields by constructing modular forms of half-integral weight to build unramified extensions.",
            "rules": [
              "Iwasawa Main Conjecture char(X_∞) = (L_p(s)).",
              "K-groups K_2(O_F) ≅ H²(Spec O_F, ℤ_p(2)).",
              "Lean 4 Mathlib number fields."
            ],
            "mystery": "Can we resolve the remaining 2-torsion ambiguity in full generality for all fields?",
            "funFact": "Bryan Birch and John Tate in 1970; proved by Andrew Wiles in 1990."
          },
          "pioneers": {
            "tagline": "Motivic cohomology and Voevodsky's proof of the Milnor conjecture.",
            "analogy": "The Milnor and Bloch-Kato conjectures proved by Voevodsky establish the precise link between Galois symbols and K-groups for all primes including p = 2.",
            "rules": [
              "Milnor conjecture: K_n^M(F)/2 ≅ H^n(F, μ_2).",
              "Voevodsky motivic complexes.",
              "Formal proof verification in Lean 4."
            ],
            "mystery": "AI computer algebra systems compute K_2 groups and Dedekind zeta values for thousands of cubic and quartic fields.",
            "funFact": "The Birch-Tate Conjecture is a sparkling triumph demonstrating the mystical unity of algebraic structures and complex analysis."
          }
        },
        "history": [
          {
            "year": "1970",
            "author": "Bryan Birch & John Tate",
            "note": "Propose the formula relating K_2(O_F) to ζ_F(-1)."
          },
          {
            "year": "1972",
            "author": "Daniel Quillen",
            "note": "Invents higher algebraic K-theory (Fields Medal 1978)."
          },
          {
            "year": "1990",
            "author": "Andrew Wiles",
            "note": "Proves the Main Conjecture of Iwasawa Theory, confirming Birch-Tate away from 2."
          }
        ]
      }
    }
  },
  {
    "id": "zauner",
    "icon": "🔮",
    "difficulty": "Gr 9+",
    "domain": "algebra-analysis",
    "category": "algebra-analysis",
    "isMillennium": false,
    "isAIFrontier": true,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Analysis.InnerProductSpace.Basic\n-- Zauner's Conjecture (Gerhard Zauner, 1999)\n-- In every finite dimension d ≥ 2, there exists a SIC-POVM (d² equiangular complex unit lines).",
    "locales": {
      "en": {
        "name": "Zauner's Conjecture (SIC-POVMs)",
        "subtitle": "Do $d^2$ Equiangular Lines Exist in Every Quantum State Space?",
        "field": "Quantum Information & Complex Projective Geometry",
        "statusBadge": "ACTIVE QUANTUM FRONTIER",
        "grades": {
          "explorers": {
            "tagline": "Can you poke d² toothpicks into a d-dimensional sphere so every pair has the EXACT SAME angle?",
            "analogy": "In 1999, Austrian physicist Gerhard Zauner conjectured a cornerstone of quantum mechanics: In ANY complex Hilbert space of dimension $d$, there exist $d^2$ quantum states represented by complex lines that are pairwise 'equiangular'—meaning the angle |⟨ψ_i | ψ_j⟩|² between ANY two different lines is ALWAYS identically equal to $1/(d+1)$! Known as SIC-POVMs (Symmetric Informationally Complete Positive Operator-Valued Measures), these constitute the most optimal quantum sensors in the universe!",
            "rules": [
              "Complex Hilbert space ℂ^d.",
              "Set of d² unit vectors |ψ_1⟩, ..., |ψ_{d²}⟩.",
              "Equiangular condition: |⟨ψ_i | ψ_j⟩|² = 1 / (d + 1) for all i ≠ j.",
              "Zauner (1999): Such a configuration exists for EVERY dimension d ≥ 2!"
            ],
            "mystery": "Marcus Appleby and collaborators discovered an astonishing link: The coordinates of SIC vectors generate abelian Galois extensions of real quadratic fields, directly tying quantum physics to Hilbert's 12th Problem!",
            "funFact": "Verified numerically for all dimensions up to d = 193, and proved exactly with algebraic numbers for hundreds of dimensions!"
          },
          "investigators": {
            "tagline": "Weyl-Heisenberg group orbits and ray class field towers.",
            "analogy": "Zauner showed that the d² vectors can be generated as the orbit of a single 'fiducial vector' under the finite Heisenberg-Weyl group acting on ℂ^d.",
            "rules": [
              "Heisenberg-Weyl displacement operators D(p, q).",
              "Zauner unitary operator U_Z of order 3.",
              "Lean 4 Mathlib inner product space."
            ],
            "mystery": "Can number theory and Stark's conjectures prove the universal existence of fiducial vectors for all d?",
            "funFact": "Gerhard Zauner formulated the conjecture in his 1999 Vienna PhD thesis."
          },
          "pioneers": {
            "tagline": "Complex projective 2-designs and quantum tomography.",
            "analogy": "SIC-POVMs maximize the extraction of quantum state information while minimizing measurement back-action noise.",
            "rules": [
              "Spherical 2-designs on ℂℙ^{d-1}.",
              "Quantum state fidelity reconstruction.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI-guided Gröbner basis solvers compute exact algebraic radical expressions for fiducial vectors in dimensions d = 4 to 28.",
            "funFact": "Zauner's Conjecture is the golden intersection where quantum mechanics, projective geometry, and Hilbert's 12th problem fuse into one."
          }
        },
        "history": [
          {
            "year": "1999",
            "author": "Gerhard Zauner",
            "note": "Poses the conjecture of SIC-POVM existence in his doctoral thesis."
          },
          {
            "year": "2004",
            "author": "Renes, Blume-Kohout, Scott & Caves",
            "note": "Rediscover SIC-POVMs and establish quantum tomography optimality."
          },
          {
            "year": "2017",
            "author": "Appleby, Flammia, McConnell & Yard",
            "note": "Unveil profound link between SICs and Stark conjectures in algebraic number theory."
          }
        ]
      },
      "de": {
        "name": "Zauner's Conjecture (SIC-POVMs)",
        "subtitle": "Do $d^2$ Equiangular Lines Exist in Every Quantum State Space?",
        "field": "Quantum Information & Complex Projective Geometry",
        "statusBadge": "ACTIVE QUANTUM FRONTIER",
        "grades": {
          "explorers": {
            "tagline": "Can you poke d² toothpicks into a d-dimensional sphere so every pair has the EXACT SAME angle?",
            "analogy": "In 1999, Austrian physicist Gerhard Zauner conjectured a cornerstone of quantum mechanics: In ANY complex Hilbert space of dimension $d$, there exist $d^2$ quantum states represented by complex lines that are pairwise 'equiangular'—meaning the angle |⟨ψ_i | ψ_j⟩|² between ANY two different lines is ALWAYS identically equal to $1/(d+1)$! Known as SIC-POVMs (Symmetric Informationally Complete Positive Operator-Valued Measures), these constitute the most optimal quantum sensors in the universe!",
            "rules": [
              "Complex Hilbert space ℂ^d.",
              "Set of d² unit vectors |ψ_1⟩, ..., |ψ_{d²}⟩.",
              "Equiangular condition: |⟨ψ_i | ψ_j⟩|² = 1 / (d + 1) for all i ≠ j.",
              "Zauner (1999): Such a configuration exists for EVERY dimension d ≥ 2!"
            ],
            "mystery": "Marcus Appleby and collaborators discovered an astonishing link: The coordinates of SIC vectors generate abelian Galois extensions of real quadratic fields, directly tying quantum physics to Hilbert's 12th Problem!",
            "funFact": "Verified numerically for all dimensions up to d = 193, and proved exactly with algebraic numbers for hundreds of dimensions!"
          },
          "investigators": {
            "tagline": "Weyl-Heisenberg group orbits and ray class field towers.",
            "analogy": "Zauner showed that the d² vectors can be generated as the orbit of a single 'fiducial vector' under the finite Heisenberg-Weyl group acting on ℂ^d.",
            "rules": [
              "Heisenberg-Weyl displacement operators D(p, q).",
              "Zauner unitary operator U_Z of order 3.",
              "Lean 4 Mathlib inner product space."
            ],
            "mystery": "Can number theory and Stark's conjectures prove the universal existence of fiducial vectors for all d?",
            "funFact": "Gerhard Zauner formulated the conjecture in his 1999 Vienna PhD thesis."
          },
          "pioneers": {
            "tagline": "Complex projective 2-designs and quantum tomography.",
            "analogy": "SIC-POVMs maximize the extraction of quantum state information while minimizing measurement back-action noise.",
            "rules": [
              "Spherical 2-designs on ℂℙ^{d-1}.",
              "Quantum state fidelity reconstruction.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI-guided Gröbner basis solvers compute exact algebraic radical expressions for fiducial vectors in dimensions d = 4 to 28.",
            "funFact": "Zauner's Conjecture is the golden intersection where quantum mechanics, projective geometry, and Hilbert's 12th problem fuse into one."
          }
        },
        "history": [
          {
            "year": "1999",
            "author": "Gerhard Zauner",
            "note": "Poses the conjecture of SIC-POVM existence in his doctoral thesis."
          },
          {
            "year": "2004",
            "author": "Renes, Blume-Kohout, Scott & Caves",
            "note": "Rediscover SIC-POVMs and establish quantum tomography optimality."
          },
          {
            "year": "2017",
            "author": "Appleby, Flammia, McConnell & Yard",
            "note": "Unveil profound link between SICs and Stark conjectures in algebraic number theory."
          }
        ]
      },
      "fr": {
        "name": "Zauner's Conjecture (SIC-POVMs)",
        "subtitle": "Do $d^2$ Equiangular Lines Exist in Every Quantum State Space?",
        "field": "Quantum Information & Complex Projective Geometry",
        "statusBadge": "ACTIVE QUANTUM FRONTIER",
        "grades": {
          "explorers": {
            "tagline": "Can you poke d² toothpicks into a d-dimensional sphere so every pair has the EXACT SAME angle?",
            "analogy": "In 1999, Austrian physicist Gerhard Zauner conjectured a cornerstone of quantum mechanics: In ANY complex Hilbert space of dimension $d$, there exist $d^2$ quantum states represented by complex lines that are pairwise 'equiangular'—meaning the angle |⟨ψ_i | ψ_j⟩|² between ANY two different lines is ALWAYS identically equal to $1/(d+1)$! Known as SIC-POVMs (Symmetric Informationally Complete Positive Operator-Valued Measures), these constitute the most optimal quantum sensors in the universe!",
            "rules": [
              "Complex Hilbert space ℂ^d.",
              "Set of d² unit vectors |ψ_1⟩, ..., |ψ_{d²}⟩.",
              "Equiangular condition: |⟨ψ_i | ψ_j⟩|² = 1 / (d + 1) for all i ≠ j.",
              "Zauner (1999): Such a configuration exists for EVERY dimension d ≥ 2!"
            ],
            "mystery": "Marcus Appleby and collaborators discovered an astonishing link: The coordinates of SIC vectors generate abelian Galois extensions of real quadratic fields, directly tying quantum physics to Hilbert's 12th Problem!",
            "funFact": "Verified numerically for all dimensions up to d = 193, and proved exactly with algebraic numbers for hundreds of dimensions!"
          },
          "investigators": {
            "tagline": "Weyl-Heisenberg group orbits and ray class field towers.",
            "analogy": "Zauner showed that the d² vectors can be generated as the orbit of a single 'fiducial vector' under the finite Heisenberg-Weyl group acting on ℂ^d.",
            "rules": [
              "Heisenberg-Weyl displacement operators D(p, q).",
              "Zauner unitary operator U_Z of order 3.",
              "Lean 4 Mathlib inner product space."
            ],
            "mystery": "Can number theory and Stark's conjectures prove the universal existence of fiducial vectors for all d?",
            "funFact": "Gerhard Zauner formulated the conjecture in his 1999 Vienna PhD thesis."
          },
          "pioneers": {
            "tagline": "Complex projective 2-designs and quantum tomography.",
            "analogy": "SIC-POVMs maximize the extraction of quantum state information while minimizing measurement back-action noise.",
            "rules": [
              "Spherical 2-designs on ℂℙ^{d-1}.",
              "Quantum state fidelity reconstruction.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI-guided Gröbner basis solvers compute exact algebraic radical expressions for fiducial vectors in dimensions d = 4 to 28.",
            "funFact": "Zauner's Conjecture is the golden intersection where quantum mechanics, projective geometry, and Hilbert's 12th problem fuse into one."
          }
        },
        "history": [
          {
            "year": "1999",
            "author": "Gerhard Zauner",
            "note": "Poses the conjecture of SIC-POVM existence in his doctoral thesis."
          },
          {
            "year": "2004",
            "author": "Renes, Blume-Kohout, Scott & Caves",
            "note": "Rediscover SIC-POVMs and establish quantum tomography optimality."
          },
          {
            "year": "2017",
            "author": "Appleby, Flammia, McConnell & Yard",
            "note": "Unveil profound link between SICs and Stark conjectures in algebraic number theory."
          }
        ]
      },
      "it": {
        "name": "Zauner's Conjecture (SIC-POVMs)",
        "subtitle": "Do $d^2$ Equiangular Lines Exist in Every Quantum State Space?",
        "field": "Quantum Information & Complex Projective Geometry",
        "statusBadge": "ACTIVE QUANTUM FRONTIER",
        "grades": {
          "explorers": {
            "tagline": "Can you poke d² toothpicks into a d-dimensional sphere so every pair has the EXACT SAME angle?",
            "analogy": "In 1999, Austrian physicist Gerhard Zauner conjectured a cornerstone of quantum mechanics: In ANY complex Hilbert space of dimension $d$, there exist $d^2$ quantum states represented by complex lines that are pairwise 'equiangular'—meaning the angle |⟨ψ_i | ψ_j⟩|² between ANY two different lines is ALWAYS identically equal to $1/(d+1)$! Known as SIC-POVMs (Symmetric Informationally Complete Positive Operator-Valued Measures), these constitute the most optimal quantum sensors in the universe!",
            "rules": [
              "Complex Hilbert space ℂ^d.",
              "Set of d² unit vectors |ψ_1⟩, ..., |ψ_{d²}⟩.",
              "Equiangular condition: |⟨ψ_i | ψ_j⟩|² = 1 / (d + 1) for all i ≠ j.",
              "Zauner (1999): Such a configuration exists for EVERY dimension d ≥ 2!"
            ],
            "mystery": "Marcus Appleby and collaborators discovered an astonishing link: The coordinates of SIC vectors generate abelian Galois extensions of real quadratic fields, directly tying quantum physics to Hilbert's 12th Problem!",
            "funFact": "Verified numerically for all dimensions up to d = 193, and proved exactly with algebraic numbers for hundreds of dimensions!"
          },
          "investigators": {
            "tagline": "Weyl-Heisenberg group orbits and ray class field towers.",
            "analogy": "Zauner showed that the d² vectors can be generated as the orbit of a single 'fiducial vector' under the finite Heisenberg-Weyl group acting on ℂ^d.",
            "rules": [
              "Heisenberg-Weyl displacement operators D(p, q).",
              "Zauner unitary operator U_Z of order 3.",
              "Lean 4 Mathlib inner product space."
            ],
            "mystery": "Can number theory and Stark's conjectures prove the universal existence of fiducial vectors for all d?",
            "funFact": "Gerhard Zauner formulated the conjecture in his 1999 Vienna PhD thesis."
          },
          "pioneers": {
            "tagline": "Complex projective 2-designs and quantum tomography.",
            "analogy": "SIC-POVMs maximize the extraction of quantum state information while minimizing measurement back-action noise.",
            "rules": [
              "Spherical 2-designs on ℂℙ^{d-1}.",
              "Quantum state fidelity reconstruction.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI-guided Gröbner basis solvers compute exact algebraic radical expressions for fiducial vectors in dimensions d = 4 to 28.",
            "funFact": "Zauner's Conjecture is the golden intersection where quantum mechanics, projective geometry, and Hilbert's 12th problem fuse into one."
          }
        },
        "history": [
          {
            "year": "1999",
            "author": "Gerhard Zauner",
            "note": "Poses the conjecture of SIC-POVM existence in his doctoral thesis."
          },
          {
            "year": "2004",
            "author": "Renes, Blume-Kohout, Scott & Caves",
            "note": "Rediscover SIC-POVMs and establish quantum tomography optimality."
          },
          {
            "year": "2017",
            "author": "Appleby, Flammia, McConnell & Yard",
            "note": "Unveil profound link between SICs and Stark conjectures in algebraic number theory."
          }
        ]
      },
      "ja": {
        "name": "Zauner's Conjecture (SIC-POVMs)",
        "subtitle": "Do $d^2$ Equiangular Lines Exist in Every Quantum State Space?",
        "field": "Quantum Information & Complex Projective Geometry",
        "statusBadge": "ACTIVE QUANTUM FRONTIER",
        "grades": {
          "explorers": {
            "tagline": "Can you poke d² toothpicks into a d-dimensional sphere so every pair has the EXACT SAME angle?",
            "analogy": "In 1999, Austrian physicist Gerhard Zauner conjectured a cornerstone of quantum mechanics: In ANY complex Hilbert space of dimension $d$, there exist $d^2$ quantum states represented by complex lines that are pairwise 'equiangular'—meaning the angle |⟨ψ_i | ψ_j⟩|² between ANY two different lines is ALWAYS identically equal to $1/(d+1)$! Known as SIC-POVMs (Symmetric Informationally Complete Positive Operator-Valued Measures), these constitute the most optimal quantum sensors in the universe!",
            "rules": [
              "Complex Hilbert space ℂ^d.",
              "Set of d² unit vectors |ψ_1⟩, ..., |ψ_{d²}⟩.",
              "Equiangular condition: |⟨ψ_i | ψ_j⟩|² = 1 / (d + 1) for all i ≠ j.",
              "Zauner (1999): Such a configuration exists for EVERY dimension d ≥ 2!"
            ],
            "mystery": "Marcus Appleby and collaborators discovered an astonishing link: The coordinates of SIC vectors generate abelian Galois extensions of real quadratic fields, directly tying quantum physics to Hilbert's 12th Problem!",
            "funFact": "Verified numerically for all dimensions up to d = 193, and proved exactly with algebraic numbers for hundreds of dimensions!"
          },
          "investigators": {
            "tagline": "Weyl-Heisenberg group orbits and ray class field towers.",
            "analogy": "Zauner showed that the d² vectors can be generated as the orbit of a single 'fiducial vector' under the finite Heisenberg-Weyl group acting on ℂ^d.",
            "rules": [
              "Heisenberg-Weyl displacement operators D(p, q).",
              "Zauner unitary operator U_Z of order 3.",
              "Lean 4 Mathlib inner product space."
            ],
            "mystery": "Can number theory and Stark's conjectures prove the universal existence of fiducial vectors for all d?",
            "funFact": "Gerhard Zauner formulated the conjecture in his 1999 Vienna PhD thesis."
          },
          "pioneers": {
            "tagline": "Complex projective 2-designs and quantum tomography.",
            "analogy": "SIC-POVMs maximize the extraction of quantum state information while minimizing measurement back-action noise.",
            "rules": [
              "Spherical 2-designs on ℂℙ^{d-1}.",
              "Quantum state fidelity reconstruction.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI-guided Gröbner basis solvers compute exact algebraic radical expressions for fiducial vectors in dimensions d = 4 to 28.",
            "funFact": "Zauner's Conjecture is the golden intersection where quantum mechanics, projective geometry, and Hilbert's 12th problem fuse into one."
          }
        },
        "history": [
          {
            "year": "1999",
            "author": "Gerhard Zauner",
            "note": "Poses the conjecture of SIC-POVM existence in his doctoral thesis."
          },
          {
            "year": "2004",
            "author": "Renes, Blume-Kohout, Scott & Caves",
            "note": "Rediscover SIC-POVMs and establish quantum tomography optimality."
          },
          {
            "year": "2017",
            "author": "Appleby, Flammia, McConnell & Yard",
            "note": "Unveil profound link between SICs and Stark conjectures in algebraic number theory."
          }
        ]
      },
      "ko": {
        "name": "Zauner's Conjecture (SIC-POVMs)",
        "subtitle": "Do $d^2$ Equiangular Lines Exist in Every Quantum State Space?",
        "field": "Quantum Information & Complex Projective Geometry",
        "statusBadge": "ACTIVE QUANTUM FRONTIER",
        "grades": {
          "explorers": {
            "tagline": "Can you poke d² toothpicks into a d-dimensional sphere so every pair has the EXACT SAME angle?",
            "analogy": "In 1999, Austrian physicist Gerhard Zauner conjectured a cornerstone of quantum mechanics: In ANY complex Hilbert space of dimension $d$, there exist $d^2$ quantum states represented by complex lines that are pairwise 'equiangular'—meaning the angle |⟨ψ_i | ψ_j⟩|² between ANY two different lines is ALWAYS identically equal to $1/(d+1)$! Known as SIC-POVMs (Symmetric Informationally Complete Positive Operator-Valued Measures), these constitute the most optimal quantum sensors in the universe!",
            "rules": [
              "Complex Hilbert space ℂ^d.",
              "Set of d² unit vectors |ψ_1⟩, ..., |ψ_{d²}⟩.",
              "Equiangular condition: |⟨ψ_i | ψ_j⟩|² = 1 / (d + 1) for all i ≠ j.",
              "Zauner (1999): Such a configuration exists for EVERY dimension d ≥ 2!"
            ],
            "mystery": "Marcus Appleby and collaborators discovered an astonishing link: The coordinates of SIC vectors generate abelian Galois extensions of real quadratic fields, directly tying quantum physics to Hilbert's 12th Problem!",
            "funFact": "Verified numerically for all dimensions up to d = 193, and proved exactly with algebraic numbers for hundreds of dimensions!"
          },
          "investigators": {
            "tagline": "Weyl-Heisenberg group orbits and ray class field towers.",
            "analogy": "Zauner showed that the d² vectors can be generated as the orbit of a single 'fiducial vector' under the finite Heisenberg-Weyl group acting on ℂ^d.",
            "rules": [
              "Heisenberg-Weyl displacement operators D(p, q).",
              "Zauner unitary operator U_Z of order 3.",
              "Lean 4 Mathlib inner product space."
            ],
            "mystery": "Can number theory and Stark's conjectures prove the universal existence of fiducial vectors for all d?",
            "funFact": "Gerhard Zauner formulated the conjecture in his 1999 Vienna PhD thesis."
          },
          "pioneers": {
            "tagline": "Complex projective 2-designs and quantum tomography.",
            "analogy": "SIC-POVMs maximize the extraction of quantum state information while minimizing measurement back-action noise.",
            "rules": [
              "Spherical 2-designs on ℂℙ^{d-1}.",
              "Quantum state fidelity reconstruction.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI-guided Gröbner basis solvers compute exact algebraic radical expressions for fiducial vectors in dimensions d = 4 to 28.",
            "funFact": "Zauner's Conjecture is the golden intersection where quantum mechanics, projective geometry, and Hilbert's 12th problem fuse into one."
          }
        },
        "history": [
          {
            "year": "1999",
            "author": "Gerhard Zauner",
            "note": "Poses the conjecture of SIC-POVM existence in his doctoral thesis."
          },
          {
            "year": "2004",
            "author": "Renes, Blume-Kohout, Scott & Caves",
            "note": "Rediscover SIC-POVMs and establish quantum tomography optimality."
          },
          {
            "year": "2017",
            "author": "Appleby, Flammia, McConnell & Yard",
            "note": "Unveil profound link between SICs and Stark conjectures in algebraic number theory."
          }
        ]
      },
      "zh-Hans": {
        "name": "藻纳猜想（量子等角线存在性）",
        "subtitle": "在任意复希尔伯特量子维度 $d$ 中是否恒存在 $d^2$ 条对称等角量子测量射线？",
        "field": "量子信息几何 & 复射影等角线",
        "statusBadge": "量子前沿核心猜想",
        "grades": {
          "explorers": {
            "tagline": "在一个 d 维的超球体上插上 $d^2$ 根牙签，能不能让任意两根牙签之间的夹角都分毫不差地完全一模一样？",
            "analogy": "1999年奥地利物理学家格哈德·藻纳在博士论文中提出了量子力学基石般的宏伟假说：在任意 $d$ 维复希尔伯特量子态空间中，必定存在 $d^2$ 个相互‘等角’的量子纯态——即任意两个不同量子态之间的投影内积模平方 $|\\langle \\psi_i | \\psi_j \\rangle|^2$ 永远恒等于精确的 $1/(d+1)$！这在量子物理中被称为‘对称信息完备正算子值测量’（SIC-POVM）。它们是全宇宙探测未知量子态最理想、最极致的终极测量探针！",
            "rules": [
              "$d$ 维复希尔伯特空间 $\\mathbb{C}^d$。",
              "$d^2$ 个单位量子纯态向量 $|\\psi_1\\rangle, \\dots, |\\psi_{d^2}\\rangle$。",
              "等角几何条件：对任意 $i \\ne j$ 恒有 $|\\langle \\psi_i | \\psi_j \\rangle|^2 = \\frac{1}{d+1}$。",
              "藻纳猜想：对任意维度 $d \\ge 2$ 这种极美构型必定永远存在！"
            ],
            "mystery": "物理学家马库斯·阿普尔比团队惊人发现：SIC 量子向量的坐标居然精确生成了实二次数域的阿贝尔伽罗瓦扩张，将纯量子力学与希尔伯特第12问题直接锁在了一起！",
            "funFact": "目前已在计算机上对高达 $d = 193$ 的所有物理维度完成高精数值验证，并对数十个维度求出了精确的代数根式解析解！"
          },
          "investigators": {
            "tagline": "韦尔-海森堡离散群轨道与阿贝尔射线类域塔。",
            "analogy": "藻纳证明这 $d^2$ 个向量无需单独寻找，它们完全可以由一个特殊的‘基准向量’在有限离散海森堡群作用下通过轨道平移自发生成。",
            "rules": [
              "海森堡离散位移算子。",
              "藻纳 3 阶酉算子本征态。",
              "Lean 4 复内积空间与投影算子形式化。"
            ],
            "mystery": "能否利用代数数论中的斯塔克（Stark）猜想彻底攻克任意维度 $d$ 基准向量的通用存在性？",
            "funFact": "格哈德·藻纳于1999年在维也纳大学博士论文中正式提出。"
          },
          "pioneers": {
            "tagline": "复射影 2-设计与量子态层析成像极值性。",
            "analogy": "SIC-POVM 在数学上构成了复射影空间上的最优球面 2-设计，能够在最小化测量反作用的同时最大化提取量子重构信息。",
            "rules": [
              "复射影空间紧致 2-设计。",
              "量子保真度与密度矩阵层析形式化。",
              "Lean 4 量子测量算子形式化。"
            ],
            "mystery": "AI 符号代数求解器已为 $d = 4$ 至 28 的所有高维基准态自动化解出了包含数千项的精确代数根式表达式。",
            "funFact": "藻纳猜想是前沿量子力学、高维射影几何与代数数论希尔伯特第12问题完美融合的神圣金字塔。"
          }
        },
        "history": [
          {
            "year": "1999",
            "author": "格哈德·藻纳",
            "note": "在博士论文中正式提出量子等角线存在性猜想。"
          },
          {
            "year": "2004",
            "author": "雷内斯团队",
            "note": "系统建立量子层析最优性并推广至全物理界。"
          },
          {
            "year": "2017",
            "author": "阿普尔比团队",
            "note": "揭开等角向量与代数数域斯塔克猜想的惊世对应！"
          }
        ]
      },
      "zh-Hant": {
        "name": "Zauner's Conjecture (SIC-POVMs)",
        "subtitle": "Do $d^2$ Equiangular Lines Exist in Every Quantum State Space?",
        "field": "Quantum Information & Complex Projective Geometry",
        "statusBadge": "ACTIVE QUANTUM FRONTIER",
        "grades": {
          "explorers": {
            "tagline": "Can you poke d² toothpicks into a d-dimensional sphere so every pair has the EXACT SAME angle?",
            "analogy": "In 1999, Austrian physicist Gerhard Zauner conjectured a cornerstone of quantum mechanics: In ANY complex Hilbert space of dimension $d$, there exist $d^2$ quantum states represented by complex lines that are pairwise 'equiangular'—meaning the angle |⟨ψ_i | ψ_j⟩|² between ANY two different lines is ALWAYS identically equal to $1/(d+1)$! Known as SIC-POVMs (Symmetric Informationally Complete Positive Operator-Valued Measures), these constitute the most optimal quantum sensors in the universe!",
            "rules": [
              "Complex Hilbert space ℂ^d.",
              "Set of d² unit vectors |ψ_1⟩, ..., |ψ_{d²}⟩.",
              "Equiangular condition: |⟨ψ_i | ψ_j⟩|² = 1 / (d + 1) for all i ≠ j.",
              "Zauner (1999): Such a configuration exists for EVERY dimension d ≥ 2!"
            ],
            "mystery": "Marcus Appleby and collaborators discovered an astonishing link: The coordinates of SIC vectors generate abelian Galois extensions of real quadratic fields, directly tying quantum physics to Hilbert's 12th Problem!",
            "funFact": "Verified numerically for all dimensions up to d = 193, and proved exactly with algebraic numbers for hundreds of dimensions!"
          },
          "investigators": {
            "tagline": "Weyl-Heisenberg group orbits and ray class field towers.",
            "analogy": "Zauner showed that the d² vectors can be generated as the orbit of a single 'fiducial vector' under the finite Heisenberg-Weyl group acting on ℂ^d.",
            "rules": [
              "Heisenberg-Weyl displacement operators D(p, q).",
              "Zauner unitary operator U_Z of order 3.",
              "Lean 4 Mathlib inner product space."
            ],
            "mystery": "Can number theory and Stark's conjectures prove the universal existence of fiducial vectors for all d?",
            "funFact": "Gerhard Zauner formulated the conjecture in his 1999 Vienna PhD thesis."
          },
          "pioneers": {
            "tagline": "Complex projective 2-designs and quantum tomography.",
            "analogy": "SIC-POVMs maximize the extraction of quantum state information while minimizing measurement back-action noise.",
            "rules": [
              "Spherical 2-designs on ℂℙ^{d-1}.",
              "Quantum state fidelity reconstruction.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI-guided Gröbner basis solvers compute exact algebraic radical expressions for fiducial vectors in dimensions d = 4 to 28.",
            "funFact": "Zauner's Conjecture is the golden intersection where quantum mechanics, projective geometry, and Hilbert's 12th problem fuse into one."
          }
        },
        "history": [
          {
            "year": "1999",
            "author": "Gerhard Zauner",
            "note": "Poses the conjecture of SIC-POVM existence in his doctoral thesis."
          },
          {
            "year": "2004",
            "author": "Renes, Blume-Kohout, Scott & Caves",
            "note": "Rediscover SIC-POVMs and establish quantum tomography optimality."
          },
          {
            "year": "2017",
            "author": "Appleby, Flammia, McConnell & Yard",
            "note": "Unveil profound link between SICs and Stark conjectures in algebraic number theory."
          }
        ]
      }
    }
  },
  {
    "id": "bieberbach",
    "icon": "🎯",
    "difficulty": "Gr 9+",
    "domain": "algebra-analysis",
    "category": "algebra-analysis",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Analysis.Complex.CauchyIntegral\n-- Bieberbach Conjecture (Ludwig Bieberbach 1916, Solved by Louis de Branges in 1984)\n-- For every univalent function f(z) = z + ∑ a_n z^n on the unit disk, |a_n| ≤ n for all n.",
    "locales": {
      "en": {
        "name": "The Bieberbach Conjecture",
        "subtitle": "Coefficients of Univalent Functions Satisfy $|a_n| \\le n$ (Solved by Louis de Branges 1984)",
        "field": "Complex Analysis & Geometric Function Theory",
        "statusBadge": "SOLVED THEOREM (DE BRANGES 1984)",
        "grades": {
          "explorers": {
            "tagline": "If a magic lens stretches a circle without tearing or overlapping, how fast can its zoom grow?",
            "analogy": "In 1916, German mathematician Ludwig Bieberbach proposed a problem that haunted complex analysts for 68 years: Consider any 'univalent' function $f(z) = z + a_2 z^2 + a_3 z^3 + ...$ mapping the unit disk injectively (no two inputs give the same output). Bieberbach conjectured: EVERY coefficient $|a_n|$ can NEVER exceed $n$! The Koebe function $k(z) = z/(1-z)^2 = z + 2z^2 + 3z^3 + ...$ achieves $|a_n| = n$ exactly. In 1984, American mathematician Louis de Branges proved the full conjecture using special hypergeometric functions!",
            "rules": [
              "Univalent holomorphic function f: ⅅ → ℂ with f(0) = 0, f'(0) = 1.",
              "Taylor expansion f(z) = z + ∑_{n=2}^∞ a_n z^n.",
              "Bieberbach Conjecture (1916): |a_n| ≤ n for all n ≥ 2.",
              "Equality holds exclusively for rotations of the Koebe function z / (1 - e^{iθ} z)²."
            ],
            "mystery": "Louis de Branges was considered an eccentric outcast by many contemporaries; when he announced the proof in Leningrad in 1984, Soviet mathematicians spent months verifying it line-by-line and confirmed it was 100% correct!",
            "funFact": "Charles Loewner invented the Loewner differential equation in 1923 to prove |a_3| ≤ 3, laying the very groundwork for Oded Schramm's revolutionary SLE (Schramm-Loewner Evolution) 75 years later!"
          },
          "investigators": {
            "tagline": "Loewner parametric slit method, Milin conjecture, and Askey-Gasper inequality.",
            "analogy": "De Branges proved the stronger Milin conjecture by finding an explicit weight system whose monotonicity followed from the Askey-Gasper Jacobi polynomial inequality.",
            "rules": [
              "Loewner differential equation: ∂f/∂t = -z f' (1+κz)/(1-κz).",
              "Milin logarithmic coefficients inequality.",
              "Askey-Gasper hypergeometric inequality (1976)."
            ],
            "mystery": "Can de Branges's weight methods be applied to multidimensional univalent maps in ℂ^n?",
            "funFact": "Ludwig Bieberbach in 1916; proved by Louis de Branges in 1984."
          },
          "pioneers": {
            "tagline": "Quasiconformal mappings and Grunsky inequalities.",
            "analogy": "The proof establishes that univalent functions form a compact family with extremal rays corresponding to boundary slit domains.",
            "rules": [
              "Grunsky matrix operator norm.",
              "Compactness of the class S in Fréchet topology.",
              "Lean 4 Mathlib complex analysis."
            ],
            "mystery": "AI complex mapping simulators dynamically visualize the deformation of unit disks under extremal Loewner flow.",
            "funFact": "The resolution of the Bieberbach Conjecture is one of the most heroic and unforgettable underdog sagas in mathematical history."
          }
        },
        "history": [
          {
            "year": "1916",
            "author": "Ludwig Bieberbach",
            "note": "Poses |a_n| ≤ n and proves |a_2| ≤ 2."
          },
          {
            "year": "1923",
            "author": "Charles Loewner",
            "note": "Invents the Loewner differential equation; proves |a_3| ≤ 3."
          },
          {
            "year": "1984",
            "author": "Louis de Branges",
            "note": "Delivers historic complete proof of Bieberbach Conjecture."
          }
        ]
      },
      "de": {
        "name": "The Bieberbach Conjecture",
        "subtitle": "Coefficients of Univalent Functions Satisfy $|a_n| \\le n$ (Solved by Louis de Branges 1984)",
        "field": "Complex Analysis & Geometric Function Theory",
        "statusBadge": "SOLVED THEOREM (DE BRANGES 1984)",
        "grades": {
          "explorers": {
            "tagline": "If a magic lens stretches a circle without tearing or overlapping, how fast can its zoom grow?",
            "analogy": "In 1916, German mathematician Ludwig Bieberbach proposed a problem that haunted complex analysts for 68 years: Consider any 'univalent' function $f(z) = z + a_2 z^2 + a_3 z^3 + ...$ mapping the unit disk injectively (no two inputs give the same output). Bieberbach conjectured: EVERY coefficient $|a_n|$ can NEVER exceed $n$! The Koebe function $k(z) = z/(1-z)^2 = z + 2z^2 + 3z^3 + ...$ achieves $|a_n| = n$ exactly. In 1984, American mathematician Louis de Branges proved the full conjecture using special hypergeometric functions!",
            "rules": [
              "Univalent holomorphic function f: ⅅ → ℂ with f(0) = 0, f'(0) = 1.",
              "Taylor expansion f(z) = z + ∑_{n=2}^∞ a_n z^n.",
              "Bieberbach Conjecture (1916): |a_n| ≤ n for all n ≥ 2.",
              "Equality holds exclusively for rotations of the Koebe function z / (1 - e^{iθ} z)²."
            ],
            "mystery": "Louis de Branges was considered an eccentric outcast by many contemporaries; when he announced the proof in Leningrad in 1984, Soviet mathematicians spent months verifying it line-by-line and confirmed it was 100% correct!",
            "funFact": "Charles Loewner invented the Loewner differential equation in 1923 to prove |a_3| ≤ 3, laying the very groundwork for Oded Schramm's revolutionary SLE (Schramm-Loewner Evolution) 75 years later!"
          },
          "investigators": {
            "tagline": "Loewner parametric slit method, Milin conjecture, and Askey-Gasper inequality.",
            "analogy": "De Branges proved the stronger Milin conjecture by finding an explicit weight system whose monotonicity followed from the Askey-Gasper Jacobi polynomial inequality.",
            "rules": [
              "Loewner differential equation: ∂f/∂t = -z f' (1+κz)/(1-κz).",
              "Milin logarithmic coefficients inequality.",
              "Askey-Gasper hypergeometric inequality (1976)."
            ],
            "mystery": "Can de Branges's weight methods be applied to multidimensional univalent maps in ℂ^n?",
            "funFact": "Ludwig Bieberbach in 1916; proved by Louis de Branges in 1984."
          },
          "pioneers": {
            "tagline": "Quasiconformal mappings and Grunsky inequalities.",
            "analogy": "The proof establishes that univalent functions form a compact family with extremal rays corresponding to boundary slit domains.",
            "rules": [
              "Grunsky matrix operator norm.",
              "Compactness of the class S in Fréchet topology.",
              "Lean 4 Mathlib complex analysis."
            ],
            "mystery": "AI complex mapping simulators dynamically visualize the deformation of unit disks under extremal Loewner flow.",
            "funFact": "The resolution of the Bieberbach Conjecture is one of the most heroic and unforgettable underdog sagas in mathematical history."
          }
        },
        "history": [
          {
            "year": "1916",
            "author": "Ludwig Bieberbach",
            "note": "Poses |a_n| ≤ n and proves |a_2| ≤ 2."
          },
          {
            "year": "1923",
            "author": "Charles Loewner",
            "note": "Invents the Loewner differential equation; proves |a_3| ≤ 3."
          },
          {
            "year": "1984",
            "author": "Louis de Branges",
            "note": "Delivers historic complete proof of Bieberbach Conjecture."
          }
        ]
      },
      "fr": {
        "name": "The Bieberbach Conjecture",
        "subtitle": "Coefficients of Univalent Functions Satisfy $|a_n| \\le n$ (Solved by Louis de Branges 1984)",
        "field": "Complex Analysis & Geometric Function Theory",
        "statusBadge": "SOLVED THEOREM (DE BRANGES 1984)",
        "grades": {
          "explorers": {
            "tagline": "If a magic lens stretches a circle without tearing or overlapping, how fast can its zoom grow?",
            "analogy": "In 1916, German mathematician Ludwig Bieberbach proposed a problem that haunted complex analysts for 68 years: Consider any 'univalent' function $f(z) = z + a_2 z^2 + a_3 z^3 + ...$ mapping the unit disk injectively (no two inputs give the same output). Bieberbach conjectured: EVERY coefficient $|a_n|$ can NEVER exceed $n$! The Koebe function $k(z) = z/(1-z)^2 = z + 2z^2 + 3z^3 + ...$ achieves $|a_n| = n$ exactly. In 1984, American mathematician Louis de Branges proved the full conjecture using special hypergeometric functions!",
            "rules": [
              "Univalent holomorphic function f: ⅅ → ℂ with f(0) = 0, f'(0) = 1.",
              "Taylor expansion f(z) = z + ∑_{n=2}^∞ a_n z^n.",
              "Bieberbach Conjecture (1916): |a_n| ≤ n for all n ≥ 2.",
              "Equality holds exclusively for rotations of the Koebe function z / (1 - e^{iθ} z)²."
            ],
            "mystery": "Louis de Branges was considered an eccentric outcast by many contemporaries; when he announced the proof in Leningrad in 1984, Soviet mathematicians spent months verifying it line-by-line and confirmed it was 100% correct!",
            "funFact": "Charles Loewner invented the Loewner differential equation in 1923 to prove |a_3| ≤ 3, laying the very groundwork for Oded Schramm's revolutionary SLE (Schramm-Loewner Evolution) 75 years later!"
          },
          "investigators": {
            "tagline": "Loewner parametric slit method, Milin conjecture, and Askey-Gasper inequality.",
            "analogy": "De Branges proved the stronger Milin conjecture by finding an explicit weight system whose monotonicity followed from the Askey-Gasper Jacobi polynomial inequality.",
            "rules": [
              "Loewner differential equation: ∂f/∂t = -z f' (1+κz)/(1-κz).",
              "Milin logarithmic coefficients inequality.",
              "Askey-Gasper hypergeometric inequality (1976)."
            ],
            "mystery": "Can de Branges's weight methods be applied to multidimensional univalent maps in ℂ^n?",
            "funFact": "Ludwig Bieberbach in 1916; proved by Louis de Branges in 1984."
          },
          "pioneers": {
            "tagline": "Quasiconformal mappings and Grunsky inequalities.",
            "analogy": "The proof establishes that univalent functions form a compact family with extremal rays corresponding to boundary slit domains.",
            "rules": [
              "Grunsky matrix operator norm.",
              "Compactness of the class S in Fréchet topology.",
              "Lean 4 Mathlib complex analysis."
            ],
            "mystery": "AI complex mapping simulators dynamically visualize the deformation of unit disks under extremal Loewner flow.",
            "funFact": "The resolution of the Bieberbach Conjecture is one of the most heroic and unforgettable underdog sagas in mathematical history."
          }
        },
        "history": [
          {
            "year": "1916",
            "author": "Ludwig Bieberbach",
            "note": "Poses |a_n| ≤ n and proves |a_2| ≤ 2."
          },
          {
            "year": "1923",
            "author": "Charles Loewner",
            "note": "Invents the Loewner differential equation; proves |a_3| ≤ 3."
          },
          {
            "year": "1984",
            "author": "Louis de Branges",
            "note": "Delivers historic complete proof of Bieberbach Conjecture."
          }
        ]
      },
      "it": {
        "name": "The Bieberbach Conjecture",
        "subtitle": "Coefficients of Univalent Functions Satisfy $|a_n| \\le n$ (Solved by Louis de Branges 1984)",
        "field": "Complex Analysis & Geometric Function Theory",
        "statusBadge": "SOLVED THEOREM (DE BRANGES 1984)",
        "grades": {
          "explorers": {
            "tagline": "If a magic lens stretches a circle without tearing or overlapping, how fast can its zoom grow?",
            "analogy": "In 1916, German mathematician Ludwig Bieberbach proposed a problem that haunted complex analysts for 68 years: Consider any 'univalent' function $f(z) = z + a_2 z^2 + a_3 z^3 + ...$ mapping the unit disk injectively (no two inputs give the same output). Bieberbach conjectured: EVERY coefficient $|a_n|$ can NEVER exceed $n$! The Koebe function $k(z) = z/(1-z)^2 = z + 2z^2 + 3z^3 + ...$ achieves $|a_n| = n$ exactly. In 1984, American mathematician Louis de Branges proved the full conjecture using special hypergeometric functions!",
            "rules": [
              "Univalent holomorphic function f: ⅅ → ℂ with f(0) = 0, f'(0) = 1.",
              "Taylor expansion f(z) = z + ∑_{n=2}^∞ a_n z^n.",
              "Bieberbach Conjecture (1916): |a_n| ≤ n for all n ≥ 2.",
              "Equality holds exclusively for rotations of the Koebe function z / (1 - e^{iθ} z)²."
            ],
            "mystery": "Louis de Branges was considered an eccentric outcast by many contemporaries; when he announced the proof in Leningrad in 1984, Soviet mathematicians spent months verifying it line-by-line and confirmed it was 100% correct!",
            "funFact": "Charles Loewner invented the Loewner differential equation in 1923 to prove |a_3| ≤ 3, laying the very groundwork for Oded Schramm's revolutionary SLE (Schramm-Loewner Evolution) 75 years later!"
          },
          "investigators": {
            "tagline": "Loewner parametric slit method, Milin conjecture, and Askey-Gasper inequality.",
            "analogy": "De Branges proved the stronger Milin conjecture by finding an explicit weight system whose monotonicity followed from the Askey-Gasper Jacobi polynomial inequality.",
            "rules": [
              "Loewner differential equation: ∂f/∂t = -z f' (1+κz)/(1-κz).",
              "Milin logarithmic coefficients inequality.",
              "Askey-Gasper hypergeometric inequality (1976)."
            ],
            "mystery": "Can de Branges's weight methods be applied to multidimensional univalent maps in ℂ^n?",
            "funFact": "Ludwig Bieberbach in 1916; proved by Louis de Branges in 1984."
          },
          "pioneers": {
            "tagline": "Quasiconformal mappings and Grunsky inequalities.",
            "analogy": "The proof establishes that univalent functions form a compact family with extremal rays corresponding to boundary slit domains.",
            "rules": [
              "Grunsky matrix operator norm.",
              "Compactness of the class S in Fréchet topology.",
              "Lean 4 Mathlib complex analysis."
            ],
            "mystery": "AI complex mapping simulators dynamically visualize the deformation of unit disks under extremal Loewner flow.",
            "funFact": "The resolution of the Bieberbach Conjecture is one of the most heroic and unforgettable underdog sagas in mathematical history."
          }
        },
        "history": [
          {
            "year": "1916",
            "author": "Ludwig Bieberbach",
            "note": "Poses |a_n| ≤ n and proves |a_2| ≤ 2."
          },
          {
            "year": "1923",
            "author": "Charles Loewner",
            "note": "Invents the Loewner differential equation; proves |a_3| ≤ 3."
          },
          {
            "year": "1984",
            "author": "Louis de Branges",
            "note": "Delivers historic complete proof of Bieberbach Conjecture."
          }
        ]
      },
      "ja": {
        "name": "The Bieberbach Conjecture",
        "subtitle": "Coefficients of Univalent Functions Satisfy $|a_n| \\le n$ (Solved by Louis de Branges 1984)",
        "field": "Complex Analysis & Geometric Function Theory",
        "statusBadge": "SOLVED THEOREM (DE BRANGES 1984)",
        "grades": {
          "explorers": {
            "tagline": "If a magic lens stretches a circle without tearing or overlapping, how fast can its zoom grow?",
            "analogy": "In 1916, German mathematician Ludwig Bieberbach proposed a problem that haunted complex analysts for 68 years: Consider any 'univalent' function $f(z) = z + a_2 z^2 + a_3 z^3 + ...$ mapping the unit disk injectively (no two inputs give the same output). Bieberbach conjectured: EVERY coefficient $|a_n|$ can NEVER exceed $n$! The Koebe function $k(z) = z/(1-z)^2 = z + 2z^2 + 3z^3 + ...$ achieves $|a_n| = n$ exactly. In 1984, American mathematician Louis de Branges proved the full conjecture using special hypergeometric functions!",
            "rules": [
              "Univalent holomorphic function f: ⅅ → ℂ with f(0) = 0, f'(0) = 1.",
              "Taylor expansion f(z) = z + ∑_{n=2}^∞ a_n z^n.",
              "Bieberbach Conjecture (1916): |a_n| ≤ n for all n ≥ 2.",
              "Equality holds exclusively for rotations of the Koebe function z / (1 - e^{iθ} z)²."
            ],
            "mystery": "Louis de Branges was considered an eccentric outcast by many contemporaries; when he announced the proof in Leningrad in 1984, Soviet mathematicians spent months verifying it line-by-line and confirmed it was 100% correct!",
            "funFact": "Charles Loewner invented the Loewner differential equation in 1923 to prove |a_3| ≤ 3, laying the very groundwork for Oded Schramm's revolutionary SLE (Schramm-Loewner Evolution) 75 years later!"
          },
          "investigators": {
            "tagline": "Loewner parametric slit method, Milin conjecture, and Askey-Gasper inequality.",
            "analogy": "De Branges proved the stronger Milin conjecture by finding an explicit weight system whose monotonicity followed from the Askey-Gasper Jacobi polynomial inequality.",
            "rules": [
              "Loewner differential equation: ∂f/∂t = -z f' (1+κz)/(1-κz).",
              "Milin logarithmic coefficients inequality.",
              "Askey-Gasper hypergeometric inequality (1976)."
            ],
            "mystery": "Can de Branges's weight methods be applied to multidimensional univalent maps in ℂ^n?",
            "funFact": "Ludwig Bieberbach in 1916; proved by Louis de Branges in 1984."
          },
          "pioneers": {
            "tagline": "Quasiconformal mappings and Grunsky inequalities.",
            "analogy": "The proof establishes that univalent functions form a compact family with extremal rays corresponding to boundary slit domains.",
            "rules": [
              "Grunsky matrix operator norm.",
              "Compactness of the class S in Fréchet topology.",
              "Lean 4 Mathlib complex analysis."
            ],
            "mystery": "AI complex mapping simulators dynamically visualize the deformation of unit disks under extremal Loewner flow.",
            "funFact": "The resolution of the Bieberbach Conjecture is one of the most heroic and unforgettable underdog sagas in mathematical history."
          }
        },
        "history": [
          {
            "year": "1916",
            "author": "Ludwig Bieberbach",
            "note": "Poses |a_n| ≤ n and proves |a_2| ≤ 2."
          },
          {
            "year": "1923",
            "author": "Charles Loewner",
            "note": "Invents the Loewner differential equation; proves |a_3| ≤ 3."
          },
          {
            "year": "1984",
            "author": "Louis de Branges",
            "note": "Delivers historic complete proof of Bieberbach Conjecture."
          }
        ]
      },
      "ko": {
        "name": "The Bieberbach Conjecture",
        "subtitle": "Coefficients of Univalent Functions Satisfy $|a_n| \\le n$ (Solved by Louis de Branges 1984)",
        "field": "Complex Analysis & Geometric Function Theory",
        "statusBadge": "SOLVED THEOREM (DE BRANGES 1984)",
        "grades": {
          "explorers": {
            "tagline": "If a magic lens stretches a circle without tearing or overlapping, how fast can its zoom grow?",
            "analogy": "In 1916, German mathematician Ludwig Bieberbach proposed a problem that haunted complex analysts for 68 years: Consider any 'univalent' function $f(z) = z + a_2 z^2 + a_3 z^3 + ...$ mapping the unit disk injectively (no two inputs give the same output). Bieberbach conjectured: EVERY coefficient $|a_n|$ can NEVER exceed $n$! The Koebe function $k(z) = z/(1-z)^2 = z + 2z^2 + 3z^3 + ...$ achieves $|a_n| = n$ exactly. In 1984, American mathematician Louis de Branges proved the full conjecture using special hypergeometric functions!",
            "rules": [
              "Univalent holomorphic function f: ⅅ → ℂ with f(0) = 0, f'(0) = 1.",
              "Taylor expansion f(z) = z + ∑_{n=2}^∞ a_n z^n.",
              "Bieberbach Conjecture (1916): |a_n| ≤ n for all n ≥ 2.",
              "Equality holds exclusively for rotations of the Koebe function z / (1 - e^{iθ} z)²."
            ],
            "mystery": "Louis de Branges was considered an eccentric outcast by many contemporaries; when he announced the proof in Leningrad in 1984, Soviet mathematicians spent months verifying it line-by-line and confirmed it was 100% correct!",
            "funFact": "Charles Loewner invented the Loewner differential equation in 1923 to prove |a_3| ≤ 3, laying the very groundwork for Oded Schramm's revolutionary SLE (Schramm-Loewner Evolution) 75 years later!"
          },
          "investigators": {
            "tagline": "Loewner parametric slit method, Milin conjecture, and Askey-Gasper inequality.",
            "analogy": "De Branges proved the stronger Milin conjecture by finding an explicit weight system whose monotonicity followed from the Askey-Gasper Jacobi polynomial inequality.",
            "rules": [
              "Loewner differential equation: ∂f/∂t = -z f' (1+κz)/(1-κz).",
              "Milin logarithmic coefficients inequality.",
              "Askey-Gasper hypergeometric inequality (1976)."
            ],
            "mystery": "Can de Branges's weight methods be applied to multidimensional univalent maps in ℂ^n?",
            "funFact": "Ludwig Bieberbach in 1916; proved by Louis de Branges in 1984."
          },
          "pioneers": {
            "tagline": "Quasiconformal mappings and Grunsky inequalities.",
            "analogy": "The proof establishes that univalent functions form a compact family with extremal rays corresponding to boundary slit domains.",
            "rules": [
              "Grunsky matrix operator norm.",
              "Compactness of the class S in Fréchet topology.",
              "Lean 4 Mathlib complex analysis."
            ],
            "mystery": "AI complex mapping simulators dynamically visualize the deformation of unit disks under extremal Loewner flow.",
            "funFact": "The resolution of the Bieberbach Conjecture is one of the most heroic and unforgettable underdog sagas in mathematical history."
          }
        },
        "history": [
          {
            "year": "1916",
            "author": "Ludwig Bieberbach",
            "note": "Poses |a_n| ≤ n and proves |a_2| ≤ 2."
          },
          {
            "year": "1923",
            "author": "Charles Loewner",
            "note": "Invents the Loewner differential equation; proves |a_3| ≤ 3."
          },
          {
            "year": "1984",
            "author": "Louis de Branges",
            "note": "Delivers historic complete proof of Bieberbach Conjecture."
          }
        ]
      },
      "zh-Hans": {
        "name": "比伯巴赫猜想（德布朗热定理）",
        "subtitle": "单叶解析函数的泰勒展开系数模长绝不超过 $n$（德布朗热1984年传奇破译）",
        "field": "复分析 & 几何函数论",
        "statusBadge": "德布朗热1984年传世定理",
        "grades": {
          "explorers": {
            "tagline": "如果一面神奇的凸透镜把单位圆盘拉伸变形，既不撕裂也不重叠，它的放大倍数能膨胀得多快？",
            "analogy": "1916年德国数学家比伯巴赫提出了困扰全球复分析学家达68年之久的世纪猜想：考察任意一个将单位圆盘单射映射（一一对应、互不重叠）的单叶解析函数 $f(z) = z + a_2 z^2 + a_3 z^3 + \\dots$。比伯巴赫猜想：对于任意的阶数 $n$，其展开系数的模长永远绝不可能超过 $n$（即 $|a_n| \\le n$）！著名的克贝极值函数 $k(z) = z/(1-z)^2 = z + 2z^2 + 3z^3 + \\dots$ 恰好达到了这一极限。1984年，历经无数次质疑与坎坷，美国数学家路易斯·德布朗热运用超几何函数特殊正定性，彻底攻克了这一举世闻名的猜想！",
            "rules": [
              "单位圆盘上的单叶解析函数 $f: \\mathbb{D} \\to \\mathbb{C}$，规范化 $f(0)=0, f'(0)=1$。",
              "泰勒级数展开 $f(z) = z + \\sum_{n=2}^\\infty a_n z^n$。",
              "比伯巴赫猜想：对任意 $n \\ge 2$ 恒有 $|a_n| \\le n$。",
              "等号成立当且仅当函数为克贝函数 $z/(1-e^{i\\theta}z)^2$ 的旋转！"
            ],
            "mystery": "德布朗热曾被许多同行视为‘异类’，当他在1984年访问列宁格勒宣布这一证明时，苏联顶尖复分析学派花费数月进行逐行严格推导，最终向全世界正式证实：证明完全正确！",
            "funFact": "勒夫纳在1923年为了攻破 $|a_3| \\le 3$ 发明了勒夫纳微分方程，这不仅促成了比伯巴赫猜想的解决，更直接启发了75年后荣获菲尔兹奖的 SLE 随机共形演化理论！"
          },
          "investigators": {
            "tagline": "勒夫纳参数化狭缝演化法、米林对数系数猜想与阿斯基-加斯珀超几何正定不等式。",
            "analogy": "德布朗热通过证明更强的米林对数系数猜想，利用阿斯基-加斯珀关于雅可比超几何多项式的正定性不等式，完成了整个能量泛函的单调递减性推导。",
            "rules": [
              "勒夫纳狭缝演化偏微分方程。",
              "米林对数展开系数极值不等式。",
              "阿斯基-加斯珀雅可比超几何多项式正定引理。"
            ],
            "mystery": "德布朗热权重权变方法能否推广至多复变数单叶双全纯映射的极值估计？",
            "funFact": "比伯巴赫于1916年提出，德布朗热于1984年彻底证明。"
          },
          "pioneers": {
            "tagline": "拟共形映射理论与格伦斯基 (Grunsky) 矩阵正定不等式。",
            "analogy": "证明确立了单叶函数族在紧致拓扑下的极值射线完全由具有单缝外边界的单参数演化族完全主导。",
            "rules": [
              "格伦斯基算子范数界限。",
              "单叶函数族在弗雷歇拓扑下的紧致性。",
              "Lean 4 复分析单叶函数形式化。"
            ],
            "mystery": "AI 复分析动态模拟器可实时演算单位圆盘在极值勒夫纳流下的共形形变与狭缝生长。",
            "funFact": "比伯巴赫猜想的获证是世界数学史上最富传奇色彩、最震撼人心的孤勇者胜利史诗。"
          }
        },
        "history": [
          {
            "year": "1916",
            "author": "路德维希·比伯巴赫",
            "note": "提出猜想并证明 |a_2| ≤ 2。"
          },
          {
            "year": "1923",
            "author": "查尔斯·勒夫纳",
            "note": "创立勒夫纳微分方程攻破 |a_3| ≤ 3。"
          },
          {
            "year": "1984",
            "author": "路易斯·德布朗热",
            "note": "发表历史性长文彻底终结68年难题！"
          }
        ]
      },
      "zh-Hant": {
        "name": "The Bieberbach Conjecture",
        "subtitle": "Coefficients of Univalent Functions Satisfy $|a_n| \\le n$ (Solved by Louis de Branges 1984)",
        "field": "Complex Analysis & Geometric Function Theory",
        "statusBadge": "SOLVED THEOREM (DE BRANGES 1984)",
        "grades": {
          "explorers": {
            "tagline": "If a magic lens stretches a circle without tearing or overlapping, how fast can its zoom grow?",
            "analogy": "In 1916, German mathematician Ludwig Bieberbach proposed a problem that haunted complex analysts for 68 years: Consider any 'univalent' function $f(z) = z + a_2 z^2 + a_3 z^3 + ...$ mapping the unit disk injectively (no two inputs give the same output). Bieberbach conjectured: EVERY coefficient $|a_n|$ can NEVER exceed $n$! The Koebe function $k(z) = z/(1-z)^2 = z + 2z^2 + 3z^3 + ...$ achieves $|a_n| = n$ exactly. In 1984, American mathematician Louis de Branges proved the full conjecture using special hypergeometric functions!",
            "rules": [
              "Univalent holomorphic function f: ⅅ → ℂ with f(0) = 0, f'(0) = 1.",
              "Taylor expansion f(z) = z + ∑_{n=2}^∞ a_n z^n.",
              "Bieberbach Conjecture (1916): |a_n| ≤ n for all n ≥ 2.",
              "Equality holds exclusively for rotations of the Koebe function z / (1 - e^{iθ} z)²."
            ],
            "mystery": "Louis de Branges was considered an eccentric outcast by many contemporaries; when he announced the proof in Leningrad in 1984, Soviet mathematicians spent months verifying it line-by-line and confirmed it was 100% correct!",
            "funFact": "Charles Loewner invented the Loewner differential equation in 1923 to prove |a_3| ≤ 3, laying the very groundwork for Oded Schramm's revolutionary SLE (Schramm-Loewner Evolution) 75 years later!"
          },
          "investigators": {
            "tagline": "Loewner parametric slit method, Milin conjecture, and Askey-Gasper inequality.",
            "analogy": "De Branges proved the stronger Milin conjecture by finding an explicit weight system whose monotonicity followed from the Askey-Gasper Jacobi polynomial inequality.",
            "rules": [
              "Loewner differential equation: ∂f/∂t = -z f' (1+κz)/(1-κz).",
              "Milin logarithmic coefficients inequality.",
              "Askey-Gasper hypergeometric inequality (1976)."
            ],
            "mystery": "Can de Branges's weight methods be applied to multidimensional univalent maps in ℂ^n?",
            "funFact": "Ludwig Bieberbach in 1916; proved by Louis de Branges in 1984."
          },
          "pioneers": {
            "tagline": "Quasiconformal mappings and Grunsky inequalities.",
            "analogy": "The proof establishes that univalent functions form a compact family with extremal rays corresponding to boundary slit domains.",
            "rules": [
              "Grunsky matrix operator norm.",
              "Compactness of the class S in Fréchet topology.",
              "Lean 4 Mathlib complex analysis."
            ],
            "mystery": "AI complex mapping simulators dynamically visualize the deformation of unit disks under extremal Loewner flow.",
            "funFact": "The resolution of the Bieberbach Conjecture is one of the most heroic and unforgettable underdog sagas in mathematical history."
          }
        },
        "history": [
          {
            "year": "1916",
            "author": "Ludwig Bieberbach",
            "note": "Poses |a_n| ≤ n and proves |a_2| ≤ 2."
          },
          {
            "year": "1923",
            "author": "Charles Loewner",
            "note": "Invents the Loewner differential equation; proves |a_3| ≤ 3."
          },
          {
            "year": "1984",
            "author": "Louis de Branges",
            "note": "Delivers historic complete proof of Bieberbach Conjecture."
          }
        ]
      }
    }
  },
  {
    "id": "kaplansky",
    "icon": "💍",
    "difficulty": "Gr 9+",
    "domain": "algebra-analysis",
    "category": "algebra-analysis",
    "isMillennium": false,
    "isAIFrontier": true,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Algebra.GroupRing\n-- Kaplansky's Conjectures on Group Rings (Irving Kaplansky, 1940s)\n-- Zero-Divisor Conjecture, Idempotent Conjecture, and Unit Conjecture.\n-- Giles Gardam disproved the Unit Conjecture in 2021!",
    "locales": {
      "en": {
        "name": "Kaplansky's Conjectures",
        "subtitle": "Zero-Divisors, Idempotents, and Units in Torsion-Free Group Rings (Unit Conjecture Disproved in 2021!)",
        "field": "Abstract Algebra & Noncommutative Ring Theory",
        "statusBadge": "SENSATIONAL 2021 COUNTEREXAMPLE",
        "grades": {
          "explorers": {
            "tagline": "Can you multiply two non-zero algebraic sentences in an endless universe and get zero?",
            "analogy": "In the 1940s, legendary algebraist Irving Kaplansky formulated three fundamental conjectures for group rings $K[G]$ where $G$ is 'torsion-free' (no element raised to a power gives the identity except 1): 1. Zero-Divisor Conjecture: If $\\alpha \\beta = 0$, must $\\alpha = 0$ or $\\beta = 0$? 2. Idempotent Conjecture: If $\\alpha^2 = \\alpha$, must $\\alpha \\in \\{0, 1\\}$? 3. Unit Conjecture: Are ALL invertible elements just simple single-group multiples $k g$? For over 70 years all three seemed impenetrable. Then in March 2021, Australian mathematician Giles Gardam stunned the world by finding an explicit counterexample disproving the Unit Conjecture!",
            "rules": [
              "Group ring K[G] over field K with torsion-free group G.",
              "Zero-divisor conjecture: K[G] is an integral domain (no non-trivial zero-divisors).",
              "Idempotent conjecture: Only idempotents are 0 and 1 (proved for characteristic 0).",
              "Unit conjecture: Every invertible element is a trivial unit k · g.",
              "Gardam (2021): Disproved the Unit Conjecture over 𝔽₂ for the Promislow / Hantzsche-Wendt group!"
            ],
            "mystery": "Giles Gardam found the counterexample using an intelligent SAT-solver search running on an academic cluster for just a few hours!",
            "funFact": "Gardam's counterexample unit α in 𝔽₂[G] contains exactly 21 group elements, and its inverse β contains 21 group elements!"
          },
          "investigators": {
            "tagline": "Promislow group (Hantzsche-Wendt flat manifold group) and SAT solvers.",
            "analogy": "The Hantzsche-Wendt group is the fundamental group of the only closed flat 3-manifold with first Betti number zero, making it a unique torsion-free crystallographic candidate.",
            "rules": [
              "Promislow group presentation: ⟨a, b | a⁻¹ b² a = b⁻², b⁻¹ a² b = a⁻²⟩.",
              "Gardam's 21-element unit matrix equation.",
              "Lean 4 Mathlib GroupAlgebra.Basic."
            ],
            "mystery": "Does the Zero-Divisor Conjecture hold for all torsion-free groups, or will another SAT solver discover non-trivial zero-divisors?",
            "funFact": "Irving Kaplansky formulated the conjectures in the late 1940s."
          },
          "pioneers": {
            "tagline": "Atiyah conjecture on L²-Betti numbers and Linnell's theorem.",
            "analogy": "Linnell proved the zero-divisor conjecture for all torsion-free groups that can be embedded into free or amenable group towers.",
            "rules": [
              "L²-Betti numbers and Kaplansky conjectures.",
              "Division rings of fractions 𝒟(G).",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI-guided combinatorial search engines continue to hunt for potential zero-divisor candidates in complex non-amenable groups.",
            "funFact": "Kaplansky's Conjectures demonstrate how modern automated reasoning can overturn decades of conventional human mathematical wisdom."
          }
        },
        "history": [
          {
            "year": "1948",
            "author": "Irving Kaplansky",
            "note": "Poses the zero-divisor, idempotent, and unit conjectures for group rings."
          },
          {
            "year": "1974",
            "author": "Daniel Farkas & Robert Snider",
            "note": "Prove the zero-divisor conjecture for polycyclic groups."
          },
          {
            "year": "2021 (Feb)",
            "author": "Giles Gardam",
            "note": "Disproves the 70-year-old Unit Conjecture using SAT solvers on the Promislow group."
          }
        ]
      },
      "de": {
        "name": "Kaplansky's Conjectures",
        "subtitle": "Zero-Divisors, Idempotents, and Units in Torsion-Free Group Rings (Unit Conjecture Disproved in 2021!)",
        "field": "Abstract Algebra & Noncommutative Ring Theory",
        "statusBadge": "SENSATIONAL 2021 COUNTEREXAMPLE",
        "grades": {
          "explorers": {
            "tagline": "Can you multiply two non-zero algebraic sentences in an endless universe and get zero?",
            "analogy": "In the 1940s, legendary algebraist Irving Kaplansky formulated three fundamental conjectures for group rings $K[G]$ where $G$ is 'torsion-free' (no element raised to a power gives the identity except 1): 1. Zero-Divisor Conjecture: If $\\alpha \\beta = 0$, must $\\alpha = 0$ or $\\beta = 0$? 2. Idempotent Conjecture: If $\\alpha^2 = \\alpha$, must $\\alpha \\in \\{0, 1\\}$? 3. Unit Conjecture: Are ALL invertible elements just simple single-group multiples $k g$? For over 70 years all three seemed impenetrable. Then in March 2021, Australian mathematician Giles Gardam stunned the world by finding an explicit counterexample disproving the Unit Conjecture!",
            "rules": [
              "Group ring K[G] over field K with torsion-free group G.",
              "Zero-divisor conjecture: K[G] is an integral domain (no non-trivial zero-divisors).",
              "Idempotent conjecture: Only idempotents are 0 and 1 (proved for characteristic 0).",
              "Unit conjecture: Every invertible element is a trivial unit k · g.",
              "Gardam (2021): Disproved the Unit Conjecture over 𝔽₂ for the Promislow / Hantzsche-Wendt group!"
            ],
            "mystery": "Giles Gardam found the counterexample using an intelligent SAT-solver search running on an academic cluster for just a few hours!",
            "funFact": "Gardam's counterexample unit α in 𝔽₂[G] contains exactly 21 group elements, and its inverse β contains 21 group elements!"
          },
          "investigators": {
            "tagline": "Promislow group (Hantzsche-Wendt flat manifold group) and SAT solvers.",
            "analogy": "The Hantzsche-Wendt group is the fundamental group of the only closed flat 3-manifold with first Betti number zero, making it a unique torsion-free crystallographic candidate.",
            "rules": [
              "Promislow group presentation: ⟨a, b | a⁻¹ b² a = b⁻², b⁻¹ a² b = a⁻²⟩.",
              "Gardam's 21-element unit matrix equation.",
              "Lean 4 Mathlib GroupAlgebra.Basic."
            ],
            "mystery": "Does the Zero-Divisor Conjecture hold for all torsion-free groups, or will another SAT solver discover non-trivial zero-divisors?",
            "funFact": "Irving Kaplansky formulated the conjectures in the late 1940s."
          },
          "pioneers": {
            "tagline": "Atiyah conjecture on L²-Betti numbers and Linnell's theorem.",
            "analogy": "Linnell proved the zero-divisor conjecture for all torsion-free groups that can be embedded into free or amenable group towers.",
            "rules": [
              "L²-Betti numbers and Kaplansky conjectures.",
              "Division rings of fractions 𝒟(G).",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI-guided combinatorial search engines continue to hunt for potential zero-divisor candidates in complex non-amenable groups.",
            "funFact": "Kaplansky's Conjectures demonstrate how modern automated reasoning can overturn decades of conventional human mathematical wisdom."
          }
        },
        "history": [
          {
            "year": "1948",
            "author": "Irving Kaplansky",
            "note": "Poses the zero-divisor, idempotent, and unit conjectures for group rings."
          },
          {
            "year": "1974",
            "author": "Daniel Farkas & Robert Snider",
            "note": "Prove the zero-divisor conjecture for polycyclic groups."
          },
          {
            "year": "2021 (Feb)",
            "author": "Giles Gardam",
            "note": "Disproves the 70-year-old Unit Conjecture using SAT solvers on the Promislow group."
          }
        ]
      },
      "fr": {
        "name": "Kaplansky's Conjectures",
        "subtitle": "Zero-Divisors, Idempotents, and Units in Torsion-Free Group Rings (Unit Conjecture Disproved in 2021!)",
        "field": "Abstract Algebra & Noncommutative Ring Theory",
        "statusBadge": "SENSATIONAL 2021 COUNTEREXAMPLE",
        "grades": {
          "explorers": {
            "tagline": "Can you multiply two non-zero algebraic sentences in an endless universe and get zero?",
            "analogy": "In the 1940s, legendary algebraist Irving Kaplansky formulated three fundamental conjectures for group rings $K[G]$ where $G$ is 'torsion-free' (no element raised to a power gives the identity except 1): 1. Zero-Divisor Conjecture: If $\\alpha \\beta = 0$, must $\\alpha = 0$ or $\\beta = 0$? 2. Idempotent Conjecture: If $\\alpha^2 = \\alpha$, must $\\alpha \\in \\{0, 1\\}$? 3. Unit Conjecture: Are ALL invertible elements just simple single-group multiples $k g$? For over 70 years all three seemed impenetrable. Then in March 2021, Australian mathematician Giles Gardam stunned the world by finding an explicit counterexample disproving the Unit Conjecture!",
            "rules": [
              "Group ring K[G] over field K with torsion-free group G.",
              "Zero-divisor conjecture: K[G] is an integral domain (no non-trivial zero-divisors).",
              "Idempotent conjecture: Only idempotents are 0 and 1 (proved for characteristic 0).",
              "Unit conjecture: Every invertible element is a trivial unit k · g.",
              "Gardam (2021): Disproved the Unit Conjecture over 𝔽₂ for the Promislow / Hantzsche-Wendt group!"
            ],
            "mystery": "Giles Gardam found the counterexample using an intelligent SAT-solver search running on an academic cluster for just a few hours!",
            "funFact": "Gardam's counterexample unit α in 𝔽₂[G] contains exactly 21 group elements, and its inverse β contains 21 group elements!"
          },
          "investigators": {
            "tagline": "Promislow group (Hantzsche-Wendt flat manifold group) and SAT solvers.",
            "analogy": "The Hantzsche-Wendt group is the fundamental group of the only closed flat 3-manifold with first Betti number zero, making it a unique torsion-free crystallographic candidate.",
            "rules": [
              "Promislow group presentation: ⟨a, b | a⁻¹ b² a = b⁻², b⁻¹ a² b = a⁻²⟩.",
              "Gardam's 21-element unit matrix equation.",
              "Lean 4 Mathlib GroupAlgebra.Basic."
            ],
            "mystery": "Does the Zero-Divisor Conjecture hold for all torsion-free groups, or will another SAT solver discover non-trivial zero-divisors?",
            "funFact": "Irving Kaplansky formulated the conjectures in the late 1940s."
          },
          "pioneers": {
            "tagline": "Atiyah conjecture on L²-Betti numbers and Linnell's theorem.",
            "analogy": "Linnell proved the zero-divisor conjecture for all torsion-free groups that can be embedded into free or amenable group towers.",
            "rules": [
              "L²-Betti numbers and Kaplansky conjectures.",
              "Division rings of fractions 𝒟(G).",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI-guided combinatorial search engines continue to hunt for potential zero-divisor candidates in complex non-amenable groups.",
            "funFact": "Kaplansky's Conjectures demonstrate how modern automated reasoning can overturn decades of conventional human mathematical wisdom."
          }
        },
        "history": [
          {
            "year": "1948",
            "author": "Irving Kaplansky",
            "note": "Poses the zero-divisor, idempotent, and unit conjectures for group rings."
          },
          {
            "year": "1974",
            "author": "Daniel Farkas & Robert Snider",
            "note": "Prove the zero-divisor conjecture for polycyclic groups."
          },
          {
            "year": "2021 (Feb)",
            "author": "Giles Gardam",
            "note": "Disproves the 70-year-old Unit Conjecture using SAT solvers on the Promislow group."
          }
        ]
      },
      "it": {
        "name": "Kaplansky's Conjectures",
        "subtitle": "Zero-Divisors, Idempotents, and Units in Torsion-Free Group Rings (Unit Conjecture Disproved in 2021!)",
        "field": "Abstract Algebra & Noncommutative Ring Theory",
        "statusBadge": "SENSATIONAL 2021 COUNTEREXAMPLE",
        "grades": {
          "explorers": {
            "tagline": "Can you multiply two non-zero algebraic sentences in an endless universe and get zero?",
            "analogy": "In the 1940s, legendary algebraist Irving Kaplansky formulated three fundamental conjectures for group rings $K[G]$ where $G$ is 'torsion-free' (no element raised to a power gives the identity except 1): 1. Zero-Divisor Conjecture: If $\\alpha \\beta = 0$, must $\\alpha = 0$ or $\\beta = 0$? 2. Idempotent Conjecture: If $\\alpha^2 = \\alpha$, must $\\alpha \\in \\{0, 1\\}$? 3. Unit Conjecture: Are ALL invertible elements just simple single-group multiples $k g$? For over 70 years all three seemed impenetrable. Then in March 2021, Australian mathematician Giles Gardam stunned the world by finding an explicit counterexample disproving the Unit Conjecture!",
            "rules": [
              "Group ring K[G] over field K with torsion-free group G.",
              "Zero-divisor conjecture: K[G] is an integral domain (no non-trivial zero-divisors).",
              "Idempotent conjecture: Only idempotents are 0 and 1 (proved for characteristic 0).",
              "Unit conjecture: Every invertible element is a trivial unit k · g.",
              "Gardam (2021): Disproved the Unit Conjecture over 𝔽₂ for the Promislow / Hantzsche-Wendt group!"
            ],
            "mystery": "Giles Gardam found the counterexample using an intelligent SAT-solver search running on an academic cluster for just a few hours!",
            "funFact": "Gardam's counterexample unit α in 𝔽₂[G] contains exactly 21 group elements, and its inverse β contains 21 group elements!"
          },
          "investigators": {
            "tagline": "Promislow group (Hantzsche-Wendt flat manifold group) and SAT solvers.",
            "analogy": "The Hantzsche-Wendt group is the fundamental group of the only closed flat 3-manifold with first Betti number zero, making it a unique torsion-free crystallographic candidate.",
            "rules": [
              "Promislow group presentation: ⟨a, b | a⁻¹ b² a = b⁻², b⁻¹ a² b = a⁻²⟩.",
              "Gardam's 21-element unit matrix equation.",
              "Lean 4 Mathlib GroupAlgebra.Basic."
            ],
            "mystery": "Does the Zero-Divisor Conjecture hold for all torsion-free groups, or will another SAT solver discover non-trivial zero-divisors?",
            "funFact": "Irving Kaplansky formulated the conjectures in the late 1940s."
          },
          "pioneers": {
            "tagline": "Atiyah conjecture on L²-Betti numbers and Linnell's theorem.",
            "analogy": "Linnell proved the zero-divisor conjecture for all torsion-free groups that can be embedded into free or amenable group towers.",
            "rules": [
              "L²-Betti numbers and Kaplansky conjectures.",
              "Division rings of fractions 𝒟(G).",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI-guided combinatorial search engines continue to hunt for potential zero-divisor candidates in complex non-amenable groups.",
            "funFact": "Kaplansky's Conjectures demonstrate how modern automated reasoning can overturn decades of conventional human mathematical wisdom."
          }
        },
        "history": [
          {
            "year": "1948",
            "author": "Irving Kaplansky",
            "note": "Poses the zero-divisor, idempotent, and unit conjectures for group rings."
          },
          {
            "year": "1974",
            "author": "Daniel Farkas & Robert Snider",
            "note": "Prove the zero-divisor conjecture for polycyclic groups."
          },
          {
            "year": "2021 (Feb)",
            "author": "Giles Gardam",
            "note": "Disproves the 70-year-old Unit Conjecture using SAT solvers on the Promislow group."
          }
        ]
      },
      "ja": {
        "name": "Kaplansky's Conjectures",
        "subtitle": "Zero-Divisors, Idempotents, and Units in Torsion-Free Group Rings (Unit Conjecture Disproved in 2021!)",
        "field": "Abstract Algebra & Noncommutative Ring Theory",
        "statusBadge": "SENSATIONAL 2021 COUNTEREXAMPLE",
        "grades": {
          "explorers": {
            "tagline": "Can you multiply two non-zero algebraic sentences in an endless universe and get zero?",
            "analogy": "In the 1940s, legendary algebraist Irving Kaplansky formulated three fundamental conjectures for group rings $K[G]$ where $G$ is 'torsion-free' (no element raised to a power gives the identity except 1): 1. Zero-Divisor Conjecture: If $\\alpha \\beta = 0$, must $\\alpha = 0$ or $\\beta = 0$? 2. Idempotent Conjecture: If $\\alpha^2 = \\alpha$, must $\\alpha \\in \\{0, 1\\}$? 3. Unit Conjecture: Are ALL invertible elements just simple single-group multiples $k g$? For over 70 years all three seemed impenetrable. Then in March 2021, Australian mathematician Giles Gardam stunned the world by finding an explicit counterexample disproving the Unit Conjecture!",
            "rules": [
              "Group ring K[G] over field K with torsion-free group G.",
              "Zero-divisor conjecture: K[G] is an integral domain (no non-trivial zero-divisors).",
              "Idempotent conjecture: Only idempotents are 0 and 1 (proved for characteristic 0).",
              "Unit conjecture: Every invertible element is a trivial unit k · g.",
              "Gardam (2021): Disproved the Unit Conjecture over 𝔽₂ for the Promislow / Hantzsche-Wendt group!"
            ],
            "mystery": "Giles Gardam found the counterexample using an intelligent SAT-solver search running on an academic cluster for just a few hours!",
            "funFact": "Gardam's counterexample unit α in 𝔽₂[G] contains exactly 21 group elements, and its inverse β contains 21 group elements!"
          },
          "investigators": {
            "tagline": "Promislow group (Hantzsche-Wendt flat manifold group) and SAT solvers.",
            "analogy": "The Hantzsche-Wendt group is the fundamental group of the only closed flat 3-manifold with first Betti number zero, making it a unique torsion-free crystallographic candidate.",
            "rules": [
              "Promislow group presentation: ⟨a, b | a⁻¹ b² a = b⁻², b⁻¹ a² b = a⁻²⟩.",
              "Gardam's 21-element unit matrix equation.",
              "Lean 4 Mathlib GroupAlgebra.Basic."
            ],
            "mystery": "Does the Zero-Divisor Conjecture hold for all torsion-free groups, or will another SAT solver discover non-trivial zero-divisors?",
            "funFact": "Irving Kaplansky formulated the conjectures in the late 1940s."
          },
          "pioneers": {
            "tagline": "Atiyah conjecture on L²-Betti numbers and Linnell's theorem.",
            "analogy": "Linnell proved the zero-divisor conjecture for all torsion-free groups that can be embedded into free or amenable group towers.",
            "rules": [
              "L²-Betti numbers and Kaplansky conjectures.",
              "Division rings of fractions 𝒟(G).",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI-guided combinatorial search engines continue to hunt for potential zero-divisor candidates in complex non-amenable groups.",
            "funFact": "Kaplansky's Conjectures demonstrate how modern automated reasoning can overturn decades of conventional human mathematical wisdom."
          }
        },
        "history": [
          {
            "year": "1948",
            "author": "Irving Kaplansky",
            "note": "Poses the zero-divisor, idempotent, and unit conjectures for group rings."
          },
          {
            "year": "1974",
            "author": "Daniel Farkas & Robert Snider",
            "note": "Prove the zero-divisor conjecture for polycyclic groups."
          },
          {
            "year": "2021 (Feb)",
            "author": "Giles Gardam",
            "note": "Disproves the 70-year-old Unit Conjecture using SAT solvers on the Promislow group."
          }
        ]
      },
      "ko": {
        "name": "Kaplansky's Conjectures",
        "subtitle": "Zero-Divisors, Idempotents, and Units in Torsion-Free Group Rings (Unit Conjecture Disproved in 2021!)",
        "field": "Abstract Algebra & Noncommutative Ring Theory",
        "statusBadge": "SENSATIONAL 2021 COUNTEREXAMPLE",
        "grades": {
          "explorers": {
            "tagline": "Can you multiply two non-zero algebraic sentences in an endless universe and get zero?",
            "analogy": "In the 1940s, legendary algebraist Irving Kaplansky formulated three fundamental conjectures for group rings $K[G]$ where $G$ is 'torsion-free' (no element raised to a power gives the identity except 1): 1. Zero-Divisor Conjecture: If $\\alpha \\beta = 0$, must $\\alpha = 0$ or $\\beta = 0$? 2. Idempotent Conjecture: If $\\alpha^2 = \\alpha$, must $\\alpha \\in \\{0, 1\\}$? 3. Unit Conjecture: Are ALL invertible elements just simple single-group multiples $k g$? For over 70 years all three seemed impenetrable. Then in March 2021, Australian mathematician Giles Gardam stunned the world by finding an explicit counterexample disproving the Unit Conjecture!",
            "rules": [
              "Group ring K[G] over field K with torsion-free group G.",
              "Zero-divisor conjecture: K[G] is an integral domain (no non-trivial zero-divisors).",
              "Idempotent conjecture: Only idempotents are 0 and 1 (proved for characteristic 0).",
              "Unit conjecture: Every invertible element is a trivial unit k · g.",
              "Gardam (2021): Disproved the Unit Conjecture over 𝔽₂ for the Promislow / Hantzsche-Wendt group!"
            ],
            "mystery": "Giles Gardam found the counterexample using an intelligent SAT-solver search running on an academic cluster for just a few hours!",
            "funFact": "Gardam's counterexample unit α in 𝔽₂[G] contains exactly 21 group elements, and its inverse β contains 21 group elements!"
          },
          "investigators": {
            "tagline": "Promislow group (Hantzsche-Wendt flat manifold group) and SAT solvers.",
            "analogy": "The Hantzsche-Wendt group is the fundamental group of the only closed flat 3-manifold with first Betti number zero, making it a unique torsion-free crystallographic candidate.",
            "rules": [
              "Promislow group presentation: ⟨a, b | a⁻¹ b² a = b⁻², b⁻¹ a² b = a⁻²⟩.",
              "Gardam's 21-element unit matrix equation.",
              "Lean 4 Mathlib GroupAlgebra.Basic."
            ],
            "mystery": "Does the Zero-Divisor Conjecture hold for all torsion-free groups, or will another SAT solver discover non-trivial zero-divisors?",
            "funFact": "Irving Kaplansky formulated the conjectures in the late 1940s."
          },
          "pioneers": {
            "tagline": "Atiyah conjecture on L²-Betti numbers and Linnell's theorem.",
            "analogy": "Linnell proved the zero-divisor conjecture for all torsion-free groups that can be embedded into free or amenable group towers.",
            "rules": [
              "L²-Betti numbers and Kaplansky conjectures.",
              "Division rings of fractions 𝒟(G).",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI-guided combinatorial search engines continue to hunt for potential zero-divisor candidates in complex non-amenable groups.",
            "funFact": "Kaplansky's Conjectures demonstrate how modern automated reasoning can overturn decades of conventional human mathematical wisdom."
          }
        },
        "history": [
          {
            "year": "1948",
            "author": "Irving Kaplansky",
            "note": "Poses the zero-divisor, idempotent, and unit conjectures for group rings."
          },
          {
            "year": "1974",
            "author": "Daniel Farkas & Robert Snider",
            "note": "Prove the zero-divisor conjecture for polycyclic groups."
          },
          {
            "year": "2021 (Feb)",
            "author": "Giles Gardam",
            "note": "Disproves the 70-year-old Unit Conjecture using SAT solvers on the Promislow group."
          }
        ]
      },
      "zh-Hans": {
        "name": "卡普兰斯基群环猜想族",
        "subtitle": "无挠群环中的零因子、幂等元与可逆元猜想（可逆元猜想于2021年被加尔达姆推翻！）",
        "field": "抽象代数 & 非交换环论与群表示",
        "statusBadge": "2021年反例轰动数学界",
        "grades": {
          "explorers": {
            "tagline": "在一个完全没有‘原地打转回旋镖’的抽象数学世界里，两个非零式子相乘会不会莫名其妙等于零？",
            "analogy": "20世纪40年代抽象代数巨擘欧文·卡普兰斯基对无挠群（除了单位元外没有任何阶数有限元素的群）的群环 $K[G]$ 提出了三大殿堂级猜想：1. 零因子猜想：若 $\\alpha \\beta = 0$，是否必有 $\\alpha = 0$ 或 $\\beta = 0$？2. 幂等元猜想：若 $\\alpha^2 = \\alpha$，是否必有 $\\alpha \\in \\{0, 1\\}$？3. 可逆元猜想：所有的可逆元素是否必然只是平凡的单项形式 $k g$？70多年来人们普遍相信三大猜想皆为真。然而在2021年3月，澳大利亚青年学者贾尔斯·加尔达姆震惊全球：他在普洛姆利群上精妙构造出一个包含21个单项的巨大可逆元素，彻底推翻了可逆元猜想！",
            "rules": [
              "数域 $K$ 与无挠群 $G$ 构成的群环 $K[G]$。",
              "零因子猜想：$K[G]$ 是整环，绝无非平凡零因子（依然未决！）。",
              "幂等元猜想：幂等元只有 0 和 1（特征0已由卡迪森定理解决）。",
              "可逆元猜想：群环中所有可逆元皆为平凡单项 $k \\cdot g$。",
              "加尔达姆 (2021)：在二元有限域 $\\mathbb{F}_2$ 与普洛姆利群上构造出非平凡可逆反例，一举推翻！"
            ],
            "mystery": "加尔达姆借助巧妙编码的现代 SAT 求解器与启发式算法，在一台学术计算集群上仅搜索了几个小时，就捕获了这个沉睡70年的反例！",
            "funFact": "加尔达姆构造的非平凡可逆元含有整整 21 项，其逆元也恰好含有 21 项，二者相乘在模 2 算术下奇迹般地等于 1！"
          },
          "investigators": {
            "tagline": "普洛姆利晶体群（三维平坦三环流形基本群）与计算机 SAT 自动化求解。",
            "analogy": "普洛姆利群是唯一一个第一贝蒂数为零的闭平坦三维克莱因流形的基本群，其刚性的晶体群结构为非平凡代数抵消创造了极其狭窄而奇迹般的解空间。",
            "rules": [
              "普洛姆利群生成元与关系式形式化。",
              "加尔达姆 21 项可逆元矩阵抵消等式。",
              "Lean 4 群环代数结构形式化。"
            ],
            "mystery": "最为核心的‘零因子猜想’是否依然完全成立？还是说未来的 AI 求解器也会揪出非平凡零因子？",
            "funFact": "欧文·卡普兰斯基在1940年代末系统提出。"
          },
          "pioneers": {
            "tagline": "阿蒂亚 $L^2$-贝蒂数整数猜想与林内尔 (Linnell) 环论定理。",
            "analogy": "林内尔证明了对于所有可以嵌入到自由群或顺从群扩展塔中的无挠群，零因子猜想百分之百成立。",
            "rules": [
              "$L^2$-不变量代数理论。",
              "非交换商可除环构造。",
              "Lean 4 群环整环性质形式化。"
            ],
            "mystery": "AI 自动化群论引擎正在对非顺从怪兽群进行高并发搜索，试图进一步挑战零因子猜想。",
            "funFact": "卡普兰斯基猜想的破译生动证明了现代计算机自动化逻辑推理打破人类数十年思维定势的磅礴力量。"
          }
        },
        "history": [
          {
            "year": "1948",
            "author": "欧文·卡普兰斯基",
            "note": "系统提出群环三大结构猜想。"
          },
          {
            "year": "1974",
            "author": "法卡斯 & 斯奈德",
            "note": "攻克多重循环群零因子猜想。"
          },
          {
            "year": "2021 (Feb)",
            "author": "贾尔斯·加尔达姆",
            "note": "运用 SAT 求解器发现反例，轰动推翻可逆元猜想！"
          }
        ]
      },
      "zh-Hant": {
        "name": "Kaplansky's Conjectures",
        "subtitle": "Zero-Divisors, Idempotents, and Units in Torsion-Free Group Rings (Unit Conjecture Disproved in 2021!)",
        "field": "Abstract Algebra & Noncommutative Ring Theory",
        "statusBadge": "SENSATIONAL 2021 COUNTEREXAMPLE",
        "grades": {
          "explorers": {
            "tagline": "Can you multiply two non-zero algebraic sentences in an endless universe and get zero?",
            "analogy": "In the 1940s, legendary algebraist Irving Kaplansky formulated three fundamental conjectures for group rings $K[G]$ where $G$ is 'torsion-free' (no element raised to a power gives the identity except 1): 1. Zero-Divisor Conjecture: If $\\alpha \\beta = 0$, must $\\alpha = 0$ or $\\beta = 0$? 2. Idempotent Conjecture: If $\\alpha^2 = \\alpha$, must $\\alpha \\in \\{0, 1\\}$? 3. Unit Conjecture: Are ALL invertible elements just simple single-group multiples $k g$? For over 70 years all three seemed impenetrable. Then in March 2021, Australian mathematician Giles Gardam stunned the world by finding an explicit counterexample disproving the Unit Conjecture!",
            "rules": [
              "Group ring K[G] over field K with torsion-free group G.",
              "Zero-divisor conjecture: K[G] is an integral domain (no non-trivial zero-divisors).",
              "Idempotent conjecture: Only idempotents are 0 and 1 (proved for characteristic 0).",
              "Unit conjecture: Every invertible element is a trivial unit k · g.",
              "Gardam (2021): Disproved the Unit Conjecture over 𝔽₂ for the Promislow / Hantzsche-Wendt group!"
            ],
            "mystery": "Giles Gardam found the counterexample using an intelligent SAT-solver search running on an academic cluster for just a few hours!",
            "funFact": "Gardam's counterexample unit α in 𝔽₂[G] contains exactly 21 group elements, and its inverse β contains 21 group elements!"
          },
          "investigators": {
            "tagline": "Promislow group (Hantzsche-Wendt flat manifold group) and SAT solvers.",
            "analogy": "The Hantzsche-Wendt group is the fundamental group of the only closed flat 3-manifold with first Betti number zero, making it a unique torsion-free crystallographic candidate.",
            "rules": [
              "Promislow group presentation: ⟨a, b | a⁻¹ b² a = b⁻², b⁻¹ a² b = a⁻²⟩.",
              "Gardam's 21-element unit matrix equation.",
              "Lean 4 Mathlib GroupAlgebra.Basic."
            ],
            "mystery": "Does the Zero-Divisor Conjecture hold for all torsion-free groups, or will another SAT solver discover non-trivial zero-divisors?",
            "funFact": "Irving Kaplansky formulated the conjectures in the late 1940s."
          },
          "pioneers": {
            "tagline": "Atiyah conjecture on L²-Betti numbers and Linnell's theorem.",
            "analogy": "Linnell proved the zero-divisor conjecture for all torsion-free groups that can be embedded into free or amenable group towers.",
            "rules": [
              "L²-Betti numbers and Kaplansky conjectures.",
              "Division rings of fractions 𝒟(G).",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI-guided combinatorial search engines continue to hunt for potential zero-divisor candidates in complex non-amenable groups.",
            "funFact": "Kaplansky's Conjectures demonstrate how modern automated reasoning can overturn decades of conventional human mathematical wisdom."
          }
        },
        "history": [
          {
            "year": "1948",
            "author": "Irving Kaplansky",
            "note": "Poses the zero-divisor, idempotent, and unit conjectures for group rings."
          },
          {
            "year": "1974",
            "author": "Daniel Farkas & Robert Snider",
            "note": "Prove the zero-divisor conjecture for polycyclic groups."
          },
          {
            "year": "2021 (Feb)",
            "author": "Giles Gardam",
            "note": "Disproves the 70-year-old Unit Conjecture using SAT solvers on the Promislow group."
          }
        ]
      }
    }
  },
  {
    "id": "kohn-nirenberg",
    "icon": "🌊",
    "difficulty": "Gr 9+",
    "domain": "algebra-analysis",
    "category": "algebra-analysis",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Analysis.Complex.Basic\n-- Kohn-Nirenberg Problem (J. J. Kohn & Louis Nirenberg, 1973)\n-- Strictly pseudoconvex domain where no holomorphic peaking function exists at weakly pseudoconvex points.",
    "locales": {
      "en": {
        "name": "The Kohn-Nirenberg Problem",
        "subtitle": "The Boundary Geometry of Pseudoconvex Domains in Several Complex Variables",
        "field": "Several Complex Variables & Complex PDE",
        "statusBadge": "LANDMARK COUNTEREXAMPLE (1973)",
        "grades": {
          "explorers": {
            "tagline": "In a multidimensional ocean of complex numbers, can a wave touch a boundary point without spilling over?",
            "analogy": "In single-variable complex analysis, any point on the boundary of a domain can be isolated by a holomorphic function that peaks only at that point. In 1973, Joseph J. Kohn and Abel Prize laureate Louis Nirenberg investigated whether this holds in higher dimensions $ℂ^n$ for pseudoconvex domains (the natural multidimensional analog of convexity). Astonishingly, they constructed a domain where the Levi form is semi-positive, yet NO holomorphic function can peak at the origin! This overturned decades of assumptions and launched modern Cauchy-Riemann PDE theory!",
            "rules": [
              "Kohn-Nirenberg domain in ℂ²: Re(w) + |zw|² + |z|⁶ + (15/7) |z|² Re(z⁴) < 0.",
              "Weakly pseudoconvex at the origin z = w = 0.",
              "No local holomorphic function can peak at (0, 0).",
              "Overturned classical beliefs on holomorphic convexity!"
            ],
            "mystery": "Louis Nirenberg won both the Abel Prize (2015) and the Crafoord Prize, celebrated as one of the greatest masters of partial differential equations in history!",
            "funFact": "The domain is famous for showing that geometric convexity in ℝ^{2n} is fundamentally different from pseudoconvexity in ℂ^n!"
          },
          "investigators": {
            "tagline": "Levi form, Hörmander's L² estimates for the d-bar operator, and Catlin multitypes.",
            "analogy": "Kohn-Nirenberg showed that subelliptic estimates for the d-bar-Neumann problem require finite type in the sense of D'Angelo and Catlin.",
            "rules": [
              "Levi form eigenvalue degeneracy.",
              "Subelliptic estimate: ‖u‖_{ε} ≤ C (‖∂̄ u‖ + ‖∂̄* u‖ + ‖u‖).",
              "Lean 4 Mathlib complex manifolds."
            ],
            "mystery": "Can we completely characterize domains admitting global plurisubharmonic exhaustion functions?",
            "funFact": "Joseph J. Kohn and Louis Nirenberg discovered the domain in 1973."
          },
          "pioneers": {
            "tagline": "Bergman kernel asymptotics and CR geometry.",
            "analogy": "Fefferman's boundary mapping theorem (1974) and subsequent work showed the Bergman kernel singularity reflects the Kohn-Nirenberg obstruction.",
            "rules": [
              "Fefferman asymptotic expansion of Bergman kernel.",
              "CR curvature tensors.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI differential geometric solvers visualize the 4D Kohn-Nirenberg boundary hypersurface via 3D stereographic slices.",
            "funFact": "The Kohn-Nirenberg Problem is the timeless monument to the unfathomable subtleties of multidimensional complex analysis."
          }
        },
        "history": [
          {
            "year": "1973",
            "author": "J. J. Kohn & Louis Nirenberg",
            "note": "Discover the non-peaking pseudoconvex domain counterexample."
          },
          {
            "year": "1974",
            "author": "Charles Fefferman",
            "note": "Analyzes Bergman kernel asymptotics on strictly pseudoconvex domains (Fields Medal)."
          },
          {
            "year": "1979",
            "author": "John D'Angelo",
            "note": "Introduces finite type theory characterizing subelliptic boundary points."
          }
        ]
      },
      "de": {
        "name": "The Kohn-Nirenberg Problem",
        "subtitle": "The Boundary Geometry of Pseudoconvex Domains in Several Complex Variables",
        "field": "Several Complex Variables & Complex PDE",
        "statusBadge": "LANDMARK COUNTEREXAMPLE (1973)",
        "grades": {
          "explorers": {
            "tagline": "In a multidimensional ocean of complex numbers, can a wave touch a boundary point without spilling over?",
            "analogy": "In single-variable complex analysis, any point on the boundary of a domain can be isolated by a holomorphic function that peaks only at that point. In 1973, Joseph J. Kohn and Abel Prize laureate Louis Nirenberg investigated whether this holds in higher dimensions $ℂ^n$ for pseudoconvex domains (the natural multidimensional analog of convexity). Astonishingly, they constructed a domain where the Levi form is semi-positive, yet NO holomorphic function can peak at the origin! This overturned decades of assumptions and launched modern Cauchy-Riemann PDE theory!",
            "rules": [
              "Kohn-Nirenberg domain in ℂ²: Re(w) + |zw|² + |z|⁶ + (15/7) |z|² Re(z⁴) < 0.",
              "Weakly pseudoconvex at the origin z = w = 0.",
              "No local holomorphic function can peak at (0, 0).",
              "Overturned classical beliefs on holomorphic convexity!"
            ],
            "mystery": "Louis Nirenberg won both the Abel Prize (2015) and the Crafoord Prize, celebrated as one of the greatest masters of partial differential equations in history!",
            "funFact": "The domain is famous for showing that geometric convexity in ℝ^{2n} is fundamentally different from pseudoconvexity in ℂ^n!"
          },
          "investigators": {
            "tagline": "Levi form, Hörmander's L² estimates for the d-bar operator, and Catlin multitypes.",
            "analogy": "Kohn-Nirenberg showed that subelliptic estimates for the d-bar-Neumann problem require finite type in the sense of D'Angelo and Catlin.",
            "rules": [
              "Levi form eigenvalue degeneracy.",
              "Subelliptic estimate: ‖u‖_{ε} ≤ C (‖∂̄ u‖ + ‖∂̄* u‖ + ‖u‖).",
              "Lean 4 Mathlib complex manifolds."
            ],
            "mystery": "Can we completely characterize domains admitting global plurisubharmonic exhaustion functions?",
            "funFact": "Joseph J. Kohn and Louis Nirenberg discovered the domain in 1973."
          },
          "pioneers": {
            "tagline": "Bergman kernel asymptotics and CR geometry.",
            "analogy": "Fefferman's boundary mapping theorem (1974) and subsequent work showed the Bergman kernel singularity reflects the Kohn-Nirenberg obstruction.",
            "rules": [
              "Fefferman asymptotic expansion of Bergman kernel.",
              "CR curvature tensors.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI differential geometric solvers visualize the 4D Kohn-Nirenberg boundary hypersurface via 3D stereographic slices.",
            "funFact": "The Kohn-Nirenberg Problem is the timeless monument to the unfathomable subtleties of multidimensional complex analysis."
          }
        },
        "history": [
          {
            "year": "1973",
            "author": "J. J. Kohn & Louis Nirenberg",
            "note": "Discover the non-peaking pseudoconvex domain counterexample."
          },
          {
            "year": "1974",
            "author": "Charles Fefferman",
            "note": "Analyzes Bergman kernel asymptotics on strictly pseudoconvex domains (Fields Medal)."
          },
          {
            "year": "1979",
            "author": "John D'Angelo",
            "note": "Introduces finite type theory characterizing subelliptic boundary points."
          }
        ]
      },
      "fr": {
        "name": "The Kohn-Nirenberg Problem",
        "subtitle": "The Boundary Geometry of Pseudoconvex Domains in Several Complex Variables",
        "field": "Several Complex Variables & Complex PDE",
        "statusBadge": "LANDMARK COUNTEREXAMPLE (1973)",
        "grades": {
          "explorers": {
            "tagline": "In a multidimensional ocean of complex numbers, can a wave touch a boundary point without spilling over?",
            "analogy": "In single-variable complex analysis, any point on the boundary of a domain can be isolated by a holomorphic function that peaks only at that point. In 1973, Joseph J. Kohn and Abel Prize laureate Louis Nirenberg investigated whether this holds in higher dimensions $ℂ^n$ for pseudoconvex domains (the natural multidimensional analog of convexity). Astonishingly, they constructed a domain where the Levi form is semi-positive, yet NO holomorphic function can peak at the origin! This overturned decades of assumptions and launched modern Cauchy-Riemann PDE theory!",
            "rules": [
              "Kohn-Nirenberg domain in ℂ²: Re(w) + |zw|² + |z|⁶ + (15/7) |z|² Re(z⁴) < 0.",
              "Weakly pseudoconvex at the origin z = w = 0.",
              "No local holomorphic function can peak at (0, 0).",
              "Overturned classical beliefs on holomorphic convexity!"
            ],
            "mystery": "Louis Nirenberg won both the Abel Prize (2015) and the Crafoord Prize, celebrated as one of the greatest masters of partial differential equations in history!",
            "funFact": "The domain is famous for showing that geometric convexity in ℝ^{2n} is fundamentally different from pseudoconvexity in ℂ^n!"
          },
          "investigators": {
            "tagline": "Levi form, Hörmander's L² estimates for the d-bar operator, and Catlin multitypes.",
            "analogy": "Kohn-Nirenberg showed that subelliptic estimates for the d-bar-Neumann problem require finite type in the sense of D'Angelo and Catlin.",
            "rules": [
              "Levi form eigenvalue degeneracy.",
              "Subelliptic estimate: ‖u‖_{ε} ≤ C (‖∂̄ u‖ + ‖∂̄* u‖ + ‖u‖).",
              "Lean 4 Mathlib complex manifolds."
            ],
            "mystery": "Can we completely characterize domains admitting global plurisubharmonic exhaustion functions?",
            "funFact": "Joseph J. Kohn and Louis Nirenberg discovered the domain in 1973."
          },
          "pioneers": {
            "tagline": "Bergman kernel asymptotics and CR geometry.",
            "analogy": "Fefferman's boundary mapping theorem (1974) and subsequent work showed the Bergman kernel singularity reflects the Kohn-Nirenberg obstruction.",
            "rules": [
              "Fefferman asymptotic expansion of Bergman kernel.",
              "CR curvature tensors.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI differential geometric solvers visualize the 4D Kohn-Nirenberg boundary hypersurface via 3D stereographic slices.",
            "funFact": "The Kohn-Nirenberg Problem is the timeless monument to the unfathomable subtleties of multidimensional complex analysis."
          }
        },
        "history": [
          {
            "year": "1973",
            "author": "J. J. Kohn & Louis Nirenberg",
            "note": "Discover the non-peaking pseudoconvex domain counterexample."
          },
          {
            "year": "1974",
            "author": "Charles Fefferman",
            "note": "Analyzes Bergman kernel asymptotics on strictly pseudoconvex domains (Fields Medal)."
          },
          {
            "year": "1979",
            "author": "John D'Angelo",
            "note": "Introduces finite type theory characterizing subelliptic boundary points."
          }
        ]
      },
      "it": {
        "name": "The Kohn-Nirenberg Problem",
        "subtitle": "The Boundary Geometry of Pseudoconvex Domains in Several Complex Variables",
        "field": "Several Complex Variables & Complex PDE",
        "statusBadge": "LANDMARK COUNTEREXAMPLE (1973)",
        "grades": {
          "explorers": {
            "tagline": "In a multidimensional ocean of complex numbers, can a wave touch a boundary point without spilling over?",
            "analogy": "In single-variable complex analysis, any point on the boundary of a domain can be isolated by a holomorphic function that peaks only at that point. In 1973, Joseph J. Kohn and Abel Prize laureate Louis Nirenberg investigated whether this holds in higher dimensions $ℂ^n$ for pseudoconvex domains (the natural multidimensional analog of convexity). Astonishingly, they constructed a domain where the Levi form is semi-positive, yet NO holomorphic function can peak at the origin! This overturned decades of assumptions and launched modern Cauchy-Riemann PDE theory!",
            "rules": [
              "Kohn-Nirenberg domain in ℂ²: Re(w) + |zw|² + |z|⁶ + (15/7) |z|² Re(z⁴) < 0.",
              "Weakly pseudoconvex at the origin z = w = 0.",
              "No local holomorphic function can peak at (0, 0).",
              "Overturned classical beliefs on holomorphic convexity!"
            ],
            "mystery": "Louis Nirenberg won both the Abel Prize (2015) and the Crafoord Prize, celebrated as one of the greatest masters of partial differential equations in history!",
            "funFact": "The domain is famous for showing that geometric convexity in ℝ^{2n} is fundamentally different from pseudoconvexity in ℂ^n!"
          },
          "investigators": {
            "tagline": "Levi form, Hörmander's L² estimates for the d-bar operator, and Catlin multitypes.",
            "analogy": "Kohn-Nirenberg showed that subelliptic estimates for the d-bar-Neumann problem require finite type in the sense of D'Angelo and Catlin.",
            "rules": [
              "Levi form eigenvalue degeneracy.",
              "Subelliptic estimate: ‖u‖_{ε} ≤ C (‖∂̄ u‖ + ‖∂̄* u‖ + ‖u‖).",
              "Lean 4 Mathlib complex manifolds."
            ],
            "mystery": "Can we completely characterize domains admitting global plurisubharmonic exhaustion functions?",
            "funFact": "Joseph J. Kohn and Louis Nirenberg discovered the domain in 1973."
          },
          "pioneers": {
            "tagline": "Bergman kernel asymptotics and CR geometry.",
            "analogy": "Fefferman's boundary mapping theorem (1974) and subsequent work showed the Bergman kernel singularity reflects the Kohn-Nirenberg obstruction.",
            "rules": [
              "Fefferman asymptotic expansion of Bergman kernel.",
              "CR curvature tensors.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI differential geometric solvers visualize the 4D Kohn-Nirenberg boundary hypersurface via 3D stereographic slices.",
            "funFact": "The Kohn-Nirenberg Problem is the timeless monument to the unfathomable subtleties of multidimensional complex analysis."
          }
        },
        "history": [
          {
            "year": "1973",
            "author": "J. J. Kohn & Louis Nirenberg",
            "note": "Discover the non-peaking pseudoconvex domain counterexample."
          },
          {
            "year": "1974",
            "author": "Charles Fefferman",
            "note": "Analyzes Bergman kernel asymptotics on strictly pseudoconvex domains (Fields Medal)."
          },
          {
            "year": "1979",
            "author": "John D'Angelo",
            "note": "Introduces finite type theory characterizing subelliptic boundary points."
          }
        ]
      },
      "ja": {
        "name": "The Kohn-Nirenberg Problem",
        "subtitle": "The Boundary Geometry of Pseudoconvex Domains in Several Complex Variables",
        "field": "Several Complex Variables & Complex PDE",
        "statusBadge": "LANDMARK COUNTEREXAMPLE (1973)",
        "grades": {
          "explorers": {
            "tagline": "In a multidimensional ocean of complex numbers, can a wave touch a boundary point without spilling over?",
            "analogy": "In single-variable complex analysis, any point on the boundary of a domain can be isolated by a holomorphic function that peaks only at that point. In 1973, Joseph J. Kohn and Abel Prize laureate Louis Nirenberg investigated whether this holds in higher dimensions $ℂ^n$ for pseudoconvex domains (the natural multidimensional analog of convexity). Astonishingly, they constructed a domain where the Levi form is semi-positive, yet NO holomorphic function can peak at the origin! This overturned decades of assumptions and launched modern Cauchy-Riemann PDE theory!",
            "rules": [
              "Kohn-Nirenberg domain in ℂ²: Re(w) + |zw|² + |z|⁶ + (15/7) |z|² Re(z⁴) < 0.",
              "Weakly pseudoconvex at the origin z = w = 0.",
              "No local holomorphic function can peak at (0, 0).",
              "Overturned classical beliefs on holomorphic convexity!"
            ],
            "mystery": "Louis Nirenberg won both the Abel Prize (2015) and the Crafoord Prize, celebrated as one of the greatest masters of partial differential equations in history!",
            "funFact": "The domain is famous for showing that geometric convexity in ℝ^{2n} is fundamentally different from pseudoconvexity in ℂ^n!"
          },
          "investigators": {
            "tagline": "Levi form, Hörmander's L² estimates for the d-bar operator, and Catlin multitypes.",
            "analogy": "Kohn-Nirenberg showed that subelliptic estimates for the d-bar-Neumann problem require finite type in the sense of D'Angelo and Catlin.",
            "rules": [
              "Levi form eigenvalue degeneracy.",
              "Subelliptic estimate: ‖u‖_{ε} ≤ C (‖∂̄ u‖ + ‖∂̄* u‖ + ‖u‖).",
              "Lean 4 Mathlib complex manifolds."
            ],
            "mystery": "Can we completely characterize domains admitting global plurisubharmonic exhaustion functions?",
            "funFact": "Joseph J. Kohn and Louis Nirenberg discovered the domain in 1973."
          },
          "pioneers": {
            "tagline": "Bergman kernel asymptotics and CR geometry.",
            "analogy": "Fefferman's boundary mapping theorem (1974) and subsequent work showed the Bergman kernel singularity reflects the Kohn-Nirenberg obstruction.",
            "rules": [
              "Fefferman asymptotic expansion of Bergman kernel.",
              "CR curvature tensors.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI differential geometric solvers visualize the 4D Kohn-Nirenberg boundary hypersurface via 3D stereographic slices.",
            "funFact": "The Kohn-Nirenberg Problem is the timeless monument to the unfathomable subtleties of multidimensional complex analysis."
          }
        },
        "history": [
          {
            "year": "1973",
            "author": "J. J. Kohn & Louis Nirenberg",
            "note": "Discover the non-peaking pseudoconvex domain counterexample."
          },
          {
            "year": "1974",
            "author": "Charles Fefferman",
            "note": "Analyzes Bergman kernel asymptotics on strictly pseudoconvex domains (Fields Medal)."
          },
          {
            "year": "1979",
            "author": "John D'Angelo",
            "note": "Introduces finite type theory characterizing subelliptic boundary points."
          }
        ]
      },
      "ko": {
        "name": "The Kohn-Nirenberg Problem",
        "subtitle": "The Boundary Geometry of Pseudoconvex Domains in Several Complex Variables",
        "field": "Several Complex Variables & Complex PDE",
        "statusBadge": "LANDMARK COUNTEREXAMPLE (1973)",
        "grades": {
          "explorers": {
            "tagline": "In a multidimensional ocean of complex numbers, can a wave touch a boundary point without spilling over?",
            "analogy": "In single-variable complex analysis, any point on the boundary of a domain can be isolated by a holomorphic function that peaks only at that point. In 1973, Joseph J. Kohn and Abel Prize laureate Louis Nirenberg investigated whether this holds in higher dimensions $ℂ^n$ for pseudoconvex domains (the natural multidimensional analog of convexity). Astonishingly, they constructed a domain where the Levi form is semi-positive, yet NO holomorphic function can peak at the origin! This overturned decades of assumptions and launched modern Cauchy-Riemann PDE theory!",
            "rules": [
              "Kohn-Nirenberg domain in ℂ²: Re(w) + |zw|² + |z|⁶ + (15/7) |z|² Re(z⁴) < 0.",
              "Weakly pseudoconvex at the origin z = w = 0.",
              "No local holomorphic function can peak at (0, 0).",
              "Overturned classical beliefs on holomorphic convexity!"
            ],
            "mystery": "Louis Nirenberg won both the Abel Prize (2015) and the Crafoord Prize, celebrated as one of the greatest masters of partial differential equations in history!",
            "funFact": "The domain is famous for showing that geometric convexity in ℝ^{2n} is fundamentally different from pseudoconvexity in ℂ^n!"
          },
          "investigators": {
            "tagline": "Levi form, Hörmander's L² estimates for the d-bar operator, and Catlin multitypes.",
            "analogy": "Kohn-Nirenberg showed that subelliptic estimates for the d-bar-Neumann problem require finite type in the sense of D'Angelo and Catlin.",
            "rules": [
              "Levi form eigenvalue degeneracy.",
              "Subelliptic estimate: ‖u‖_{ε} ≤ C (‖∂̄ u‖ + ‖∂̄* u‖ + ‖u‖).",
              "Lean 4 Mathlib complex manifolds."
            ],
            "mystery": "Can we completely characterize domains admitting global plurisubharmonic exhaustion functions?",
            "funFact": "Joseph J. Kohn and Louis Nirenberg discovered the domain in 1973."
          },
          "pioneers": {
            "tagline": "Bergman kernel asymptotics and CR geometry.",
            "analogy": "Fefferman's boundary mapping theorem (1974) and subsequent work showed the Bergman kernel singularity reflects the Kohn-Nirenberg obstruction.",
            "rules": [
              "Fefferman asymptotic expansion of Bergman kernel.",
              "CR curvature tensors.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI differential geometric solvers visualize the 4D Kohn-Nirenberg boundary hypersurface via 3D stereographic slices.",
            "funFact": "The Kohn-Nirenberg Problem is the timeless monument to the unfathomable subtleties of multidimensional complex analysis."
          }
        },
        "history": [
          {
            "year": "1973",
            "author": "J. J. Kohn & Louis Nirenberg",
            "note": "Discover the non-peaking pseudoconvex domain counterexample."
          },
          {
            "year": "1974",
            "author": "Charles Fefferman",
            "note": "Analyzes Bergman kernel asymptotics on strictly pseudoconvex domains (Fields Medal)."
          },
          {
            "year": "1979",
            "author": "John D'Angelo",
            "note": "Introduces finite type theory characterizing subelliptic boundary points."
          }
        ]
      },
      "zh-Hans": {
        "name": "科恩-尼伦伯格多复变问题",
        "subtitle": "多复变拟凸域边界上全纯峰函数的奇异障碍（1973年著名反例）",
        "field": "多复变函数论 & 复偏微分方程",
        "statusBadge": "1973年里程碑反例",
        "grades": {
          "explorers": {
            "tagline": "在多维复数的奇妙海洋中，一道全纯波浪能不能只精准轻触悬崖上的一个孤立点，而绝不洒向崖壁外？",
            "analogy": "在单复变函数论中，任何开区域边界上的点都可以被一个解析函数单独‘凸显’出来（即在该点取最大峰值而在其它地方严格偏小）。1973年约瑟夫·科恩与阿贝尔奖得主路易斯·尼伦伯格探索高维复空间 $\\mathbb{C}^n$ 中著名的‘拟凸域’是否也具备这种优良性质。令人无比震惊的是，他们精心构造出一个四阶奇妙多项式边界域：虽然其列维形式（Levi form）处处半正定，但全宇宙却‘不存在任何一个局部全纯函数’能够在该点取得峰值！这一反例彻底摧毁了学术界数十年的直觉假设，开创了现代复偏微分方程与柯西-黎曼 $\\bar{\\partial}$-诺伊曼问题的崭新纪元！",
            "rules": [
              "$\\mathbb{C}^2$ 中的科恩-尼伦伯格反例域：$\\text{Re}(w) + |zw|^2 + |z|^6 + \\frac{15}{7}|z|^2 \\text{Re}(z^4) < 0$。",
              "在原点 $(0, 0)$ 处为弱拟凸点。",
              "证明不存在任何局部全纯峰函数在原点独占鳌头。",
              "彻底颠覆了多复变全纯凸性传统假定！"
            ],
            "mystery": "路易斯·尼伦伯格荣获了数学界阿贝尔奖与克拉福德奖，被公认为人类有史以来最伟大的偏微分方程大师之一！",
            "funFact": "该反例向世人深刻揭示：实空间中的几何凸性与复空间中由复结构主导的拟凸性之间，存在着不可逾越的本质鸿沟！"
          },
          "investigators": {
            "tagline": "列维形式、霍尔曼德尔 $\\bar{\\partial}$-诺伊曼 $L^2$ 估计与卡特林多重有限型。",
            "analogy": "科恩与尼伦伯格的工作证明了复偏微分方程次椭圆估计不仅依赖于列维形式的秩，更取决于狄安吉洛与卡特林定义的有限交换型数。",
            "rules": [
              "列维形式二阶退化临界条件。",
              "次椭圆偏微分方程先验模估计。",
              "Lean 4 复流形与柯西-黎曼算子形式化。"
            ],
            "mystery": "能否彻底解析刻画所有允许全局多重次调和耗尽函数的拟凸域拓扑分类？",
            "funFact": "科恩与尼伦伯格于1973年联手发现。"
          },
          "pioneers": {
            "tagline": "伯格曼核渐近展开与柯西-黎曼 (CR) 流形几何。",
            "analogy": "费弗曼因证明边界共形映射定理荣获菲尔兹奖，其工作直接证实了伯格曼投影核在边界的奇点分布完全受制于科恩-尼伦伯格阻碍。",
            "rules": [
              "费弗曼伯格曼核渐近展开式。",
              "CR 流形陈省身-莫泽曲率张量。",
              "Lean 4 多复变解析延拓形式化。"
            ],
            "mystery": "AI 高维几何引擎通过立体投影切片实时呈现四维科恩-尼伦伯格超曲面的微妙鞍点曲率。",
            "funFact": "科恩-尼伦伯格问题是见证多复变函数与高维复偏微分方程不可思议深奥魅力的永恒丰碑。"
          }
        },
        "history": [
          {
            "year": "1973",
            "author": "科恩 & 尼伦伯格",
            "note": "发表四阶边界反例，颠覆传统全纯凸性理论。"
          },
          {
            "year": "1974",
            "author": "查尔斯·费弗曼",
            "note": "建立伯格曼核渐近展开并荣获菲尔兹奖。"
          },
          {
            "year": "1979",
            "author": "约翰·狄安吉洛",
            "note": "创立有限型理论破解次椭圆奇点阶数。"
          }
        ]
      },
      "zh-Hant": {
        "name": "The Kohn-Nirenberg Problem",
        "subtitle": "The Boundary Geometry of Pseudoconvex Domains in Several Complex Variables",
        "field": "Several Complex Variables & Complex PDE",
        "statusBadge": "LANDMARK COUNTEREXAMPLE (1973)",
        "grades": {
          "explorers": {
            "tagline": "In a multidimensional ocean of complex numbers, can a wave touch a boundary point without spilling over?",
            "analogy": "In single-variable complex analysis, any point on the boundary of a domain can be isolated by a holomorphic function that peaks only at that point. In 1973, Joseph J. Kohn and Abel Prize laureate Louis Nirenberg investigated whether this holds in higher dimensions $ℂ^n$ for pseudoconvex domains (the natural multidimensional analog of convexity). Astonishingly, they constructed a domain where the Levi form is semi-positive, yet NO holomorphic function can peak at the origin! This overturned decades of assumptions and launched modern Cauchy-Riemann PDE theory!",
            "rules": [
              "Kohn-Nirenberg domain in ℂ²: Re(w) + |zw|² + |z|⁶ + (15/7) |z|² Re(z⁴) < 0.",
              "Weakly pseudoconvex at the origin z = w = 0.",
              "No local holomorphic function can peak at (0, 0).",
              "Overturned classical beliefs on holomorphic convexity!"
            ],
            "mystery": "Louis Nirenberg won both the Abel Prize (2015) and the Crafoord Prize, celebrated as one of the greatest masters of partial differential equations in history!",
            "funFact": "The domain is famous for showing that geometric convexity in ℝ^{2n} is fundamentally different from pseudoconvexity in ℂ^n!"
          },
          "investigators": {
            "tagline": "Levi form, Hörmander's L² estimates for the d-bar operator, and Catlin multitypes.",
            "analogy": "Kohn-Nirenberg showed that subelliptic estimates for the d-bar-Neumann problem require finite type in the sense of D'Angelo and Catlin.",
            "rules": [
              "Levi form eigenvalue degeneracy.",
              "Subelliptic estimate: ‖u‖_{ε} ≤ C (‖∂̄ u‖ + ‖∂̄* u‖ + ‖u‖).",
              "Lean 4 Mathlib complex manifolds."
            ],
            "mystery": "Can we completely characterize domains admitting global plurisubharmonic exhaustion functions?",
            "funFact": "Joseph J. Kohn and Louis Nirenberg discovered the domain in 1973."
          },
          "pioneers": {
            "tagline": "Bergman kernel asymptotics and CR geometry.",
            "analogy": "Fefferman's boundary mapping theorem (1974) and subsequent work showed the Bergman kernel singularity reflects the Kohn-Nirenberg obstruction.",
            "rules": [
              "Fefferman asymptotic expansion of Bergman kernel.",
              "CR curvature tensors.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI differential geometric solvers visualize the 4D Kohn-Nirenberg boundary hypersurface via 3D stereographic slices.",
            "funFact": "The Kohn-Nirenberg Problem is the timeless monument to the unfathomable subtleties of multidimensional complex analysis."
          }
        },
        "history": [
          {
            "year": "1973",
            "author": "J. J. Kohn & Louis Nirenberg",
            "note": "Discover the non-peaking pseudoconvex domain counterexample."
          },
          {
            "year": "1974",
            "author": "Charles Fefferman",
            "note": "Analyzes Bergman kernel asymptotics on strictly pseudoconvex domains (Fields Medal)."
          },
          {
            "year": "1979",
            "author": "John D'Angelo",
            "note": "Introduces finite type theory characterizing subelliptic boundary points."
          }
        ]
      }
    }
  },
  {
    "id": "carleson",
    "icon": "🎵",
    "difficulty": "Gr 9+",
    "domain": "algebra-analysis",
    "category": "algebra-analysis",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Analysis.Fourier.FourierTransform\n-- Carleson's Theorem (Lennart Carleson, 1966)\n-- The Fourier series of any L² function converges almost everywhere (solving Luzin's conjecture of 1913).",
    "locales": {
      "en": {
        "name": "Carleson's Theorem (Luzin's Conjecture)",
        "subtitle": "Fourier Series of Every $L^2$ Function Converges Almost Everywhere (Solved by Carleson 1966)",
        "field": "Harmonic Analysis & Wave Mechanics",
        "statusBadge": "SOLVED THEOREM (CARLESON 1966)",
        "grades": {
          "explorers": {
            "tagline": "Can every musical sound wave be perfectly rebuilt from pure singing sine tones?",
            "analogy": "In 1807, Joseph Fourier claimed that ANY wave can be written as an infinite sum of simple sine and cosine waves. In 1913, Nikolai Luzin conjectured that for any square-integrable function ($L^2$), its Fourier series converges ALMOST EVERYWHERE to the original function. For 53 years, mathematicians tried and failed; Kolmogorov had even proved in 1926 that $L^1$ Fourier series can diverge EVERYWHERE! But in 1966, Swedish mathematician Lennart Carleson proved Luzin's conjecture true in an analytical masterpiece that earned him the Abel Prize!",
            "rules": [
              "Function f ∈ L²([-π, π]) with ∫ |f(x)|² dx < ∞.",
              "Fourier partial sums S_N f(x) = ∑_{n=-N}^N c_n e^{i n x}.",
              "Luzin's Conjecture (1913): S_N f(x) → f(x) for almost every x.",
              "Carleson's Theorem (1966): The maximal operator C f(x) = sup_N |S_N f(x)| is bounded from L² to L²!"
            ],
            "mystery": "When Carleson initially set out to solve the problem, he spent years trying to DISPROVE it, convinced Kolmogorov was right that a counterexample existed—until he realized convergence was forced by the phase oscillations!",
            "funFact": "Charles Fefferman provided a simplified geometric proof in 1973 based on time-frequency phase space tiles, which helped inspire modern wavelets!"
          },
          "investigators": {
            "tagline": "Time-frequency analysis, Carleson measures, and tree organizations of phase space.",
            "analogy": "Carleson decomposed phase space into a collection of dyadic tiles, controlling the interference using trees of maximal energy tiles.",
            "rules": [
              "Carleson maximal operator: ‖C f‖₂ ≤ K ‖f‖₂.",
              "Time-frequency tiles p = I_p × ω_p of area 1.",
              "Lean 4 Mathlib Fourier analysis."
            ],
            "mystery": "Can we extend Carleson's theorem to multidimensional Fourier series on the torus 𝕋^n?",
            "funFact": "Nikolai Luzin conjectured it in 1913; proved by Lennart Carleson in 1966."
          },
          "pioneers": {
            "tagline": "Bilinear Hilbert transforms and modulated singular integrals.",
            "analogy": "Lacey and Thiele (1997) used Carleson tile techniques to prove the boundedness of the bilinear Hilbert transform, solving another 20-year conjecture of Calderón.",
            "rules": [
              "Bilinear Hilbert transform BHT(f, g).",
              "Lacey-Thiele phase plane analysis.",
              "Formal verification in Lean 4."
            ],
            "mystery": "Audio compression codecs (MP3, AAC) rely directly on Carleson's phase-frequency convergence for artifact-free sound synthesis.",
            "funFact": "Carleson's Theorem is the undisputed summit of 20th-century classical harmonic analysis."
          }
        },
        "history": [
          {
            "year": "1913",
            "author": "Nikolai Luzin",
            "note": "Poses the almost everywhere convergence conjecture for L² Fourier series."
          },
          {
            "year": "1926",
            "author": "Andrey Kolmogorov",
            "note": "Constructs an L¹ function whose Fourier series diverges everywhere."
          },
          {
            "year": "1966",
            "author": "Lennart Carleson",
            "note": "Publishes historic proof solving Luzin's conjecture (Abel Prize 2006)."
          }
        ]
      },
      "de": {
        "name": "Carleson's Theorem (Luzin's Conjecture)",
        "subtitle": "Fourier Series of Every $L^2$ Function Converges Almost Everywhere (Solved by Carleson 1966)",
        "field": "Harmonic Analysis & Wave Mechanics",
        "statusBadge": "SOLVED THEOREM (CARLESON 1966)",
        "grades": {
          "explorers": {
            "tagline": "Can every musical sound wave be perfectly rebuilt from pure singing sine tones?",
            "analogy": "In 1807, Joseph Fourier claimed that ANY wave can be written as an infinite sum of simple sine and cosine waves. In 1913, Nikolai Luzin conjectured that for any square-integrable function ($L^2$), its Fourier series converges ALMOST EVERYWHERE to the original function. For 53 years, mathematicians tried and failed; Kolmogorov had even proved in 1926 that $L^1$ Fourier series can diverge EVERYWHERE! But in 1966, Swedish mathematician Lennart Carleson proved Luzin's conjecture true in an analytical masterpiece that earned him the Abel Prize!",
            "rules": [
              "Function f ∈ L²([-π, π]) with ∫ |f(x)|² dx < ∞.",
              "Fourier partial sums S_N f(x) = ∑_{n=-N}^N c_n e^{i n x}.",
              "Luzin's Conjecture (1913): S_N f(x) → f(x) for almost every x.",
              "Carleson's Theorem (1966): The maximal operator C f(x) = sup_N |S_N f(x)| is bounded from L² to L²!"
            ],
            "mystery": "When Carleson initially set out to solve the problem, he spent years trying to DISPROVE it, convinced Kolmogorov was right that a counterexample existed—until he realized convergence was forced by the phase oscillations!",
            "funFact": "Charles Fefferman provided a simplified geometric proof in 1973 based on time-frequency phase space tiles, which helped inspire modern wavelets!"
          },
          "investigators": {
            "tagline": "Time-frequency analysis, Carleson measures, and tree organizations of phase space.",
            "analogy": "Carleson decomposed phase space into a collection of dyadic tiles, controlling the interference using trees of maximal energy tiles.",
            "rules": [
              "Carleson maximal operator: ‖C f‖₂ ≤ K ‖f‖₂.",
              "Time-frequency tiles p = I_p × ω_p of area 1.",
              "Lean 4 Mathlib Fourier analysis."
            ],
            "mystery": "Can we extend Carleson's theorem to multidimensional Fourier series on the torus 𝕋^n?",
            "funFact": "Nikolai Luzin conjectured it in 1913; proved by Lennart Carleson in 1966."
          },
          "pioneers": {
            "tagline": "Bilinear Hilbert transforms and modulated singular integrals.",
            "analogy": "Lacey and Thiele (1997) used Carleson tile techniques to prove the boundedness of the bilinear Hilbert transform, solving another 20-year conjecture of Calderón.",
            "rules": [
              "Bilinear Hilbert transform BHT(f, g).",
              "Lacey-Thiele phase plane analysis.",
              "Formal verification in Lean 4."
            ],
            "mystery": "Audio compression codecs (MP3, AAC) rely directly on Carleson's phase-frequency convergence for artifact-free sound synthesis.",
            "funFact": "Carleson's Theorem is the undisputed summit of 20th-century classical harmonic analysis."
          }
        },
        "history": [
          {
            "year": "1913",
            "author": "Nikolai Luzin",
            "note": "Poses the almost everywhere convergence conjecture for L² Fourier series."
          },
          {
            "year": "1926",
            "author": "Andrey Kolmogorov",
            "note": "Constructs an L¹ function whose Fourier series diverges everywhere."
          },
          {
            "year": "1966",
            "author": "Lennart Carleson",
            "note": "Publishes historic proof solving Luzin's conjecture (Abel Prize 2006)."
          }
        ]
      },
      "fr": {
        "name": "Carleson's Theorem (Luzin's Conjecture)",
        "subtitle": "Fourier Series of Every $L^2$ Function Converges Almost Everywhere (Solved by Carleson 1966)",
        "field": "Harmonic Analysis & Wave Mechanics",
        "statusBadge": "SOLVED THEOREM (CARLESON 1966)",
        "grades": {
          "explorers": {
            "tagline": "Can every musical sound wave be perfectly rebuilt from pure singing sine tones?",
            "analogy": "In 1807, Joseph Fourier claimed that ANY wave can be written as an infinite sum of simple sine and cosine waves. In 1913, Nikolai Luzin conjectured that for any square-integrable function ($L^2$), its Fourier series converges ALMOST EVERYWHERE to the original function. For 53 years, mathematicians tried and failed; Kolmogorov had even proved in 1926 that $L^1$ Fourier series can diverge EVERYWHERE! But in 1966, Swedish mathematician Lennart Carleson proved Luzin's conjecture true in an analytical masterpiece that earned him the Abel Prize!",
            "rules": [
              "Function f ∈ L²([-π, π]) with ∫ |f(x)|² dx < ∞.",
              "Fourier partial sums S_N f(x) = ∑_{n=-N}^N c_n e^{i n x}.",
              "Luzin's Conjecture (1913): S_N f(x) → f(x) for almost every x.",
              "Carleson's Theorem (1966): The maximal operator C f(x) = sup_N |S_N f(x)| is bounded from L² to L²!"
            ],
            "mystery": "When Carleson initially set out to solve the problem, he spent years trying to DISPROVE it, convinced Kolmogorov was right that a counterexample existed—until he realized convergence was forced by the phase oscillations!",
            "funFact": "Charles Fefferman provided a simplified geometric proof in 1973 based on time-frequency phase space tiles, which helped inspire modern wavelets!"
          },
          "investigators": {
            "tagline": "Time-frequency analysis, Carleson measures, and tree organizations of phase space.",
            "analogy": "Carleson decomposed phase space into a collection of dyadic tiles, controlling the interference using trees of maximal energy tiles.",
            "rules": [
              "Carleson maximal operator: ‖C f‖₂ ≤ K ‖f‖₂.",
              "Time-frequency tiles p = I_p × ω_p of area 1.",
              "Lean 4 Mathlib Fourier analysis."
            ],
            "mystery": "Can we extend Carleson's theorem to multidimensional Fourier series on the torus 𝕋^n?",
            "funFact": "Nikolai Luzin conjectured it in 1913; proved by Lennart Carleson in 1966."
          },
          "pioneers": {
            "tagline": "Bilinear Hilbert transforms and modulated singular integrals.",
            "analogy": "Lacey and Thiele (1997) used Carleson tile techniques to prove the boundedness of the bilinear Hilbert transform, solving another 20-year conjecture of Calderón.",
            "rules": [
              "Bilinear Hilbert transform BHT(f, g).",
              "Lacey-Thiele phase plane analysis.",
              "Formal verification in Lean 4."
            ],
            "mystery": "Audio compression codecs (MP3, AAC) rely directly on Carleson's phase-frequency convergence for artifact-free sound synthesis.",
            "funFact": "Carleson's Theorem is the undisputed summit of 20th-century classical harmonic analysis."
          }
        },
        "history": [
          {
            "year": "1913",
            "author": "Nikolai Luzin",
            "note": "Poses the almost everywhere convergence conjecture for L² Fourier series."
          },
          {
            "year": "1926",
            "author": "Andrey Kolmogorov",
            "note": "Constructs an L¹ function whose Fourier series diverges everywhere."
          },
          {
            "year": "1966",
            "author": "Lennart Carleson",
            "note": "Publishes historic proof solving Luzin's conjecture (Abel Prize 2006)."
          }
        ]
      },
      "it": {
        "name": "Carleson's Theorem (Luzin's Conjecture)",
        "subtitle": "Fourier Series of Every $L^2$ Function Converges Almost Everywhere (Solved by Carleson 1966)",
        "field": "Harmonic Analysis & Wave Mechanics",
        "statusBadge": "SOLVED THEOREM (CARLESON 1966)",
        "grades": {
          "explorers": {
            "tagline": "Can every musical sound wave be perfectly rebuilt from pure singing sine tones?",
            "analogy": "In 1807, Joseph Fourier claimed that ANY wave can be written as an infinite sum of simple sine and cosine waves. In 1913, Nikolai Luzin conjectured that for any square-integrable function ($L^2$), its Fourier series converges ALMOST EVERYWHERE to the original function. For 53 years, mathematicians tried and failed; Kolmogorov had even proved in 1926 that $L^1$ Fourier series can diverge EVERYWHERE! But in 1966, Swedish mathematician Lennart Carleson proved Luzin's conjecture true in an analytical masterpiece that earned him the Abel Prize!",
            "rules": [
              "Function f ∈ L²([-π, π]) with ∫ |f(x)|² dx < ∞.",
              "Fourier partial sums S_N f(x) = ∑_{n=-N}^N c_n e^{i n x}.",
              "Luzin's Conjecture (1913): S_N f(x) → f(x) for almost every x.",
              "Carleson's Theorem (1966): The maximal operator C f(x) = sup_N |S_N f(x)| is bounded from L² to L²!"
            ],
            "mystery": "When Carleson initially set out to solve the problem, he spent years trying to DISPROVE it, convinced Kolmogorov was right that a counterexample existed—until he realized convergence was forced by the phase oscillations!",
            "funFact": "Charles Fefferman provided a simplified geometric proof in 1973 based on time-frequency phase space tiles, which helped inspire modern wavelets!"
          },
          "investigators": {
            "tagline": "Time-frequency analysis, Carleson measures, and tree organizations of phase space.",
            "analogy": "Carleson decomposed phase space into a collection of dyadic tiles, controlling the interference using trees of maximal energy tiles.",
            "rules": [
              "Carleson maximal operator: ‖C f‖₂ ≤ K ‖f‖₂.",
              "Time-frequency tiles p = I_p × ω_p of area 1.",
              "Lean 4 Mathlib Fourier analysis."
            ],
            "mystery": "Can we extend Carleson's theorem to multidimensional Fourier series on the torus 𝕋^n?",
            "funFact": "Nikolai Luzin conjectured it in 1913; proved by Lennart Carleson in 1966."
          },
          "pioneers": {
            "tagline": "Bilinear Hilbert transforms and modulated singular integrals.",
            "analogy": "Lacey and Thiele (1997) used Carleson tile techniques to prove the boundedness of the bilinear Hilbert transform, solving another 20-year conjecture of Calderón.",
            "rules": [
              "Bilinear Hilbert transform BHT(f, g).",
              "Lacey-Thiele phase plane analysis.",
              "Formal verification in Lean 4."
            ],
            "mystery": "Audio compression codecs (MP3, AAC) rely directly on Carleson's phase-frequency convergence for artifact-free sound synthesis.",
            "funFact": "Carleson's Theorem is the undisputed summit of 20th-century classical harmonic analysis."
          }
        },
        "history": [
          {
            "year": "1913",
            "author": "Nikolai Luzin",
            "note": "Poses the almost everywhere convergence conjecture for L² Fourier series."
          },
          {
            "year": "1926",
            "author": "Andrey Kolmogorov",
            "note": "Constructs an L¹ function whose Fourier series diverges everywhere."
          },
          {
            "year": "1966",
            "author": "Lennart Carleson",
            "note": "Publishes historic proof solving Luzin's conjecture (Abel Prize 2006)."
          }
        ]
      },
      "ja": {
        "name": "Carleson's Theorem (Luzin's Conjecture)",
        "subtitle": "Fourier Series of Every $L^2$ Function Converges Almost Everywhere (Solved by Carleson 1966)",
        "field": "Harmonic Analysis & Wave Mechanics",
        "statusBadge": "SOLVED THEOREM (CARLESON 1966)",
        "grades": {
          "explorers": {
            "tagline": "Can every musical sound wave be perfectly rebuilt from pure singing sine tones?",
            "analogy": "In 1807, Joseph Fourier claimed that ANY wave can be written as an infinite sum of simple sine and cosine waves. In 1913, Nikolai Luzin conjectured that for any square-integrable function ($L^2$), its Fourier series converges ALMOST EVERYWHERE to the original function. For 53 years, mathematicians tried and failed; Kolmogorov had even proved in 1926 that $L^1$ Fourier series can diverge EVERYWHERE! But in 1966, Swedish mathematician Lennart Carleson proved Luzin's conjecture true in an analytical masterpiece that earned him the Abel Prize!",
            "rules": [
              "Function f ∈ L²([-π, π]) with ∫ |f(x)|² dx < ∞.",
              "Fourier partial sums S_N f(x) = ∑_{n=-N}^N c_n e^{i n x}.",
              "Luzin's Conjecture (1913): S_N f(x) → f(x) for almost every x.",
              "Carleson's Theorem (1966): The maximal operator C f(x) = sup_N |S_N f(x)| is bounded from L² to L²!"
            ],
            "mystery": "When Carleson initially set out to solve the problem, he spent years trying to DISPROVE it, convinced Kolmogorov was right that a counterexample existed—until he realized convergence was forced by the phase oscillations!",
            "funFact": "Charles Fefferman provided a simplified geometric proof in 1973 based on time-frequency phase space tiles, which helped inspire modern wavelets!"
          },
          "investigators": {
            "tagline": "Time-frequency analysis, Carleson measures, and tree organizations of phase space.",
            "analogy": "Carleson decomposed phase space into a collection of dyadic tiles, controlling the interference using trees of maximal energy tiles.",
            "rules": [
              "Carleson maximal operator: ‖C f‖₂ ≤ K ‖f‖₂.",
              "Time-frequency tiles p = I_p × ω_p of area 1.",
              "Lean 4 Mathlib Fourier analysis."
            ],
            "mystery": "Can we extend Carleson's theorem to multidimensional Fourier series on the torus 𝕋^n?",
            "funFact": "Nikolai Luzin conjectured it in 1913; proved by Lennart Carleson in 1966."
          },
          "pioneers": {
            "tagline": "Bilinear Hilbert transforms and modulated singular integrals.",
            "analogy": "Lacey and Thiele (1997) used Carleson tile techniques to prove the boundedness of the bilinear Hilbert transform, solving another 20-year conjecture of Calderón.",
            "rules": [
              "Bilinear Hilbert transform BHT(f, g).",
              "Lacey-Thiele phase plane analysis.",
              "Formal verification in Lean 4."
            ],
            "mystery": "Audio compression codecs (MP3, AAC) rely directly on Carleson's phase-frequency convergence for artifact-free sound synthesis.",
            "funFact": "Carleson's Theorem is the undisputed summit of 20th-century classical harmonic analysis."
          }
        },
        "history": [
          {
            "year": "1913",
            "author": "Nikolai Luzin",
            "note": "Poses the almost everywhere convergence conjecture for L² Fourier series."
          },
          {
            "year": "1926",
            "author": "Andrey Kolmogorov",
            "note": "Constructs an L¹ function whose Fourier series diverges everywhere."
          },
          {
            "year": "1966",
            "author": "Lennart Carleson",
            "note": "Publishes historic proof solving Luzin's conjecture (Abel Prize 2006)."
          }
        ]
      },
      "ko": {
        "name": "Carleson's Theorem (Luzin's Conjecture)",
        "subtitle": "Fourier Series of Every $L^2$ Function Converges Almost Everywhere (Solved by Carleson 1966)",
        "field": "Harmonic Analysis & Wave Mechanics",
        "statusBadge": "SOLVED THEOREM (CARLESON 1966)",
        "grades": {
          "explorers": {
            "tagline": "Can every musical sound wave be perfectly rebuilt from pure singing sine tones?",
            "analogy": "In 1807, Joseph Fourier claimed that ANY wave can be written as an infinite sum of simple sine and cosine waves. In 1913, Nikolai Luzin conjectured that for any square-integrable function ($L^2$), its Fourier series converges ALMOST EVERYWHERE to the original function. For 53 years, mathematicians tried and failed; Kolmogorov had even proved in 1926 that $L^1$ Fourier series can diverge EVERYWHERE! But in 1966, Swedish mathematician Lennart Carleson proved Luzin's conjecture true in an analytical masterpiece that earned him the Abel Prize!",
            "rules": [
              "Function f ∈ L²([-π, π]) with ∫ |f(x)|² dx < ∞.",
              "Fourier partial sums S_N f(x) = ∑_{n=-N}^N c_n e^{i n x}.",
              "Luzin's Conjecture (1913): S_N f(x) → f(x) for almost every x.",
              "Carleson's Theorem (1966): The maximal operator C f(x) = sup_N |S_N f(x)| is bounded from L² to L²!"
            ],
            "mystery": "When Carleson initially set out to solve the problem, he spent years trying to DISPROVE it, convinced Kolmogorov was right that a counterexample existed—until he realized convergence was forced by the phase oscillations!",
            "funFact": "Charles Fefferman provided a simplified geometric proof in 1973 based on time-frequency phase space tiles, which helped inspire modern wavelets!"
          },
          "investigators": {
            "tagline": "Time-frequency analysis, Carleson measures, and tree organizations of phase space.",
            "analogy": "Carleson decomposed phase space into a collection of dyadic tiles, controlling the interference using trees of maximal energy tiles.",
            "rules": [
              "Carleson maximal operator: ‖C f‖₂ ≤ K ‖f‖₂.",
              "Time-frequency tiles p = I_p × ω_p of area 1.",
              "Lean 4 Mathlib Fourier analysis."
            ],
            "mystery": "Can we extend Carleson's theorem to multidimensional Fourier series on the torus 𝕋^n?",
            "funFact": "Nikolai Luzin conjectured it in 1913; proved by Lennart Carleson in 1966."
          },
          "pioneers": {
            "tagline": "Bilinear Hilbert transforms and modulated singular integrals.",
            "analogy": "Lacey and Thiele (1997) used Carleson tile techniques to prove the boundedness of the bilinear Hilbert transform, solving another 20-year conjecture of Calderón.",
            "rules": [
              "Bilinear Hilbert transform BHT(f, g).",
              "Lacey-Thiele phase plane analysis.",
              "Formal verification in Lean 4."
            ],
            "mystery": "Audio compression codecs (MP3, AAC) rely directly on Carleson's phase-frequency convergence for artifact-free sound synthesis.",
            "funFact": "Carleson's Theorem is the undisputed summit of 20th-century classical harmonic analysis."
          }
        },
        "history": [
          {
            "year": "1913",
            "author": "Nikolai Luzin",
            "note": "Poses the almost everywhere convergence conjecture for L² Fourier series."
          },
          {
            "year": "1926",
            "author": "Andrey Kolmogorov",
            "note": "Constructs an L¹ function whose Fourier series diverges everywhere."
          },
          {
            "year": "1966",
            "author": "Lennart Carleson",
            "note": "Publishes historic proof solving Luzin's conjecture (Abel Prize 2006)."
          }
        ]
      },
      "zh-Hans": {
        "name": "卡尔松定理（鲁津傅里叶级数猜想）",
        "subtitle": "任何平方可积函数的傅里叶级数几乎处处收敛（卡尔松1966年震撼攻克，破译半世纪神题）",
        "field": "调和分析 & 波谱分解",
        "statusBadge": "卡尔松1966年获证定理",
        "grades": {
          "explorers": {
            "tagline": "世间一切动听的音乐声波，能不能单凭一系列纯净的正弦单音完美无暇地重构出来？",
            "analogy": "1807年约瑟夫·傅里叶断言：任何声音与波形都可以拆解为一串纯正弦与余弦简谐波的无穷叠加。1913年苏联数学家尼古拉·鲁津提出著名猜想：对于任意能量有限的平方可积函数（$L^2$ 函数），其傅里叶级数是否必定在‘几乎所有点’精确收敛到函数自身？半个世纪里无数大师铩羽而归，概率泰斗柯尔莫哥洛夫甚至在1926年构造出能在‘每个点全部发散’的 $L^1$ 反常函数，让世人悲观绝望！直到1966年，瑞典数学家伦纳特·卡尔松发表了一篇长达数百步的分析学绝世杰作，彻底证实了鲁津猜想，他也因此荣获数学界最高荣誉阿贝尔奖！",
            "rules": [
              "平方可积函数 $f \\in L^2([-\\pi, \\pi])$。",
              "傅里叶有限项部分和 $S_N f(x) = \\sum_{n=-N}^N c_n e^{i n x}$。",
              "鲁津猜想 (1913)：当 $N \\to \\infty$ 时，$S_N f(x)$ 几乎处处收敛到 $f(x)$！",
              "卡尔松定理 (1966)：卡尔松极大算子在 $L^2$ 上有界，彻底敲定收敛性！"
            ],
            "mystery": "卡尔松最初其实是想‘推翻’这个猜想的！他花了好几年时间试图构造反例，甚至深信柯尔莫哥洛夫才是对的——直到他突然顿悟，发现高频相位剧烈震荡会强制函数收敛！",
            "funFact": "查尔斯·费弗曼在1973年基于‘时间-频率相空间瓦片’给出了精妙的几何重构证明，直接启发了当代小波变换理论的诞生！"
          },
          "investigators": {
            "tagline": "时频分析、卡尔松测度与双曲树状相空间剖分。",
            "analogy": "卡尔松将相空间二进分解为时间与频率双重约束的二进瓦片，通过定义极大树状瓦片簇，严格控制了能量集聚与相位抵消。",
            "rules": [
              "卡尔松极大算子强型 $(2, 2)$ 范数界限。",
              "时频相空间单位面积瓦片分解。",
              "Lean 4 傅里叶变换与希尔伯特空间基形式化。"
            ],
            "mystery": "能否将卡尔松几乎处处收敛定理完美推广到高维环面 $\\mathbb{T}^n$ 的多维傅里叶级数？（高维球形求和仍是分析前沿！）",
            "funFact": "鲁津于1913年提出，卡尔松于1966年彻底证明。"
          },
          "pioneers": {
            "tagline": "双线性希尔伯特变换与调制奇异积分算子理论。",
            "analogy": "莱西与蒂勒在1997年运用卡尔松时频瓦片技术，彻底证明了卡尔德隆双线性希尔伯特变换的有界性猜想。",
            "rules": [
              "双线性希尔伯特变换算子。",
              "莱西-蒂勒相平面分析引理。",
              "Lean 4 调和分析奇异积分形式化。"
            ],
            "mystery": "现代高保真音频压缩标准（MP3, AAC, FLAC）的时频滤波算法直接建立在卡尔松声谱收敛性的理论基石之上。",
            "funFact": "卡尔松定理是20世纪经典调和分析无可争议的最高艺术巅峰。"
          }
        },
        "history": [
          {
            "year": "1913",
            "author": "尼古拉·鲁津",
            "note": "提出 L² 傅里叶级数几乎处处收敛猜想。"
          },
          {
            "year": "1926",
            "author": "安德雷·柯尔莫哥洛夫",
            "note": "构造处处发散的 L¹ 反例震惊世界。"
          },
          {
            "year": "1966",
            "author": "伦纳特·卡尔松",
            "note": "发表旷世巨著攻克鲁津猜想，获颁阿贝尔奖！"
          }
        ]
      },
      "zh-Hant": {
        "name": "Carleson's Theorem (Luzin's Conjecture)",
        "subtitle": "Fourier Series of Every $L^2$ Function Converges Almost Everywhere (Solved by Carleson 1966)",
        "field": "Harmonic Analysis & Wave Mechanics",
        "statusBadge": "SOLVED THEOREM (CARLESON 1966)",
        "grades": {
          "explorers": {
            "tagline": "Can every musical sound wave be perfectly rebuilt from pure singing sine tones?",
            "analogy": "In 1807, Joseph Fourier claimed that ANY wave can be written as an infinite sum of simple sine and cosine waves. In 1913, Nikolai Luzin conjectured that for any square-integrable function ($L^2$), its Fourier series converges ALMOST EVERYWHERE to the original function. For 53 years, mathematicians tried and failed; Kolmogorov had even proved in 1926 that $L^1$ Fourier series can diverge EVERYWHERE! But in 1966, Swedish mathematician Lennart Carleson proved Luzin's conjecture true in an analytical masterpiece that earned him the Abel Prize!",
            "rules": [
              "Function f ∈ L²([-π, π]) with ∫ |f(x)|² dx < ∞.",
              "Fourier partial sums S_N f(x) = ∑_{n=-N}^N c_n e^{i n x}.",
              "Luzin's Conjecture (1913): S_N f(x) → f(x) for almost every x.",
              "Carleson's Theorem (1966): The maximal operator C f(x) = sup_N |S_N f(x)| is bounded from L² to L²!"
            ],
            "mystery": "When Carleson initially set out to solve the problem, he spent years trying to DISPROVE it, convinced Kolmogorov was right that a counterexample existed—until he realized convergence was forced by the phase oscillations!",
            "funFact": "Charles Fefferman provided a simplified geometric proof in 1973 based on time-frequency phase space tiles, which helped inspire modern wavelets!"
          },
          "investigators": {
            "tagline": "Time-frequency analysis, Carleson measures, and tree organizations of phase space.",
            "analogy": "Carleson decomposed phase space into a collection of dyadic tiles, controlling the interference using trees of maximal energy tiles.",
            "rules": [
              "Carleson maximal operator: ‖C f‖₂ ≤ K ‖f‖₂.",
              "Time-frequency tiles p = I_p × ω_p of area 1.",
              "Lean 4 Mathlib Fourier analysis."
            ],
            "mystery": "Can we extend Carleson's theorem to multidimensional Fourier series on the torus 𝕋^n?",
            "funFact": "Nikolai Luzin conjectured it in 1913; proved by Lennart Carleson in 1966."
          },
          "pioneers": {
            "tagline": "Bilinear Hilbert transforms and modulated singular integrals.",
            "analogy": "Lacey and Thiele (1997) used Carleson tile techniques to prove the boundedness of the bilinear Hilbert transform, solving another 20-year conjecture of Calderón.",
            "rules": [
              "Bilinear Hilbert transform BHT(f, g).",
              "Lacey-Thiele phase plane analysis.",
              "Formal verification in Lean 4."
            ],
            "mystery": "Audio compression codecs (MP3, AAC) rely directly on Carleson's phase-frequency convergence for artifact-free sound synthesis.",
            "funFact": "Carleson's Theorem is the undisputed summit of 20th-century classical harmonic analysis."
          }
        },
        "history": [
          {
            "year": "1913",
            "author": "Nikolai Luzin",
            "note": "Poses the almost everywhere convergence conjecture for L² Fourier series."
          },
          {
            "year": "1926",
            "author": "Andrey Kolmogorov",
            "note": "Constructs an L¹ function whose Fourier series diverges everywhere."
          },
          {
            "year": "1966",
            "author": "Lennart Carleson",
            "note": "Publishes historic proof solving Luzin's conjecture (Abel Prize 2006)."
          }
        ]
      }
    }
  },
  {
    "id": "atiyah-jones",
    "icon": "🌌",
    "difficulty": "Gr 9+",
    "domain": "algebra-analysis",
    "category": "algebra-analysis",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Topology.Homotopy.Basic\n-- Atiyah-Jones Conjecture (Michael Atiyah & John D. S. Jones, 1978)\n-- The inclusion of the moduli space of SU(2) instantons into the full gauge orbit space induces homotopy isomorphisms through dimension q(k).\n-- Proved by Boyer, Hurtubise, Mann, and Milgram in 1993.",
    "locales": {
      "en": {
        "name": "The Atiyah-Jones Conjecture",
        "subtitle": "Topology of Yang-Mills Instantons on the 4-Sphere (Solved in 1993)",
        "field": "Gauge Theory & Algebraic Topology",
        "statusBadge": "PROVEN THEOREM (1993)",
        "grades": {
          "explorers": {
            "tagline": "Can the swirling quantum light vortices on a 4D sphere mimic all possible shapes of infinity?",
            "analogy": "In 1978, Sir Michael Atiyah and John D. S. Jones connected particle physics to differential geometry: In Yang-Mills theory, 'instantons' are minimum-energy classical field packets of charge $k$ on the 4-sphere $S^4$. The space of all instantons $M_k$ sits inside the infinite-dimensional space of ALL gauge connections $\\mathcal{C}_k$. Atiyah and Jones conjectured: As the charge $k$ grows, the topology of the finite-dimensional instanton space $M_k$ becomes IDENTICAL to the full infinite space up to a stable dimension $q(k) \\to \\infty$! In 1993, Boyer, Hurtubise, Mann, and Milgram completed the definitive proof!",
            "rules": [
              "SU(2) instantons of charge k on 4-sphere S⁴.",
              "Moduli space M_k of self-dual Yang-Mills connections.",
              "Inclusion map i_k: M_k ↪ Ω³_k SU(2).",
              "Atiyah-Jones: i_k induces isomorphism in homology/homotopy for dimensions ≤ q(k).",
              "Proved by Boyer et al. (1993) with linear bound q(k) ~ k."
            ],
            "mystery": "Michael Atiyah (Fields Medal 1966, Abel Prize 2004) was the founding father of modern topological index theory and geometric quantum field theory!",
            "funFact": "Donaldson's revolutionary work using instanton moduli spaces to discover exotic smooth structures on ℝ⁴ won him the 1986 Fields Medal!"
          },
          "investigators": {
            "tagline": "Scanning maps, conformal field theory, and ADHM construction.",
            "analogy": "The proof uses the ADHM algebraic description of instantons as matrices, combined with Cohen's scanning method for configuration spaces.",
            "rules": [
              "ADHM algebraic equations for instanton matrices.",
              "Triple loop space Ω³ SU(2).",
              "Lean 4 Mathlib differential topology."
            ],
            "mystery": "Can the Atiyah-Jones isomorphism range be determined on arbitrary compact 4-manifolds?",
            "funFact": "Michael Atiyah and John D. S. Jones in 1978; proved by Boyer et al. in 1993."
          },
          "pioneers": {
            "tagline": "Seiberg-Witten invariants and Taubes's Gromov-Witten equivalence.",
            "analogy": "The Atiyah-Jones philosophy directly foreshadowed the modern stabilization theorems in symplectic Floer homology and quantum topology.",
            "rules": [
              "Symplectic Floer homology stabilization.",
              "Donaldson polynomial invariants.",
              "Formal proof in Lean 4."
            ],
            "mystery": "AI symbolic topology systems compute high-order loop-space homology generators matching instanton data up to dimension 12.",
            "funFact": "The Atiyah-Jones Conjecture is the triumphant hymn celebrating the union of high-energy quantum physics with algebraic topology."
          }
        },
        "history": [
          {
            "year": "1978",
            "author": "Michael Atiyah & John D. S. Jones",
            "note": "Formulate the homological stability conjecture for instanton moduli spaces."
          },
          {
            "year": "1978",
            "author": "Atiyah, Drinfeld, Hitchin & Manin",
            "note": "Discover algebraic classification of all instantons (ADHM construction)."
          },
          {
            "year": "1993",
            "author": "Boyer, Hurtubise, Mann & Milgram",
            "note": "Deliver complete proof of the Atiyah-Jones conjecture."
          }
        ]
      },
      "de": {
        "name": "The Atiyah-Jones Conjecture",
        "subtitle": "Topology of Yang-Mills Instantons on the 4-Sphere (Solved in 1993)",
        "field": "Gauge Theory & Algebraic Topology",
        "statusBadge": "PROVEN THEOREM (1993)",
        "grades": {
          "explorers": {
            "tagline": "Can the swirling quantum light vortices on a 4D sphere mimic all possible shapes of infinity?",
            "analogy": "In 1978, Sir Michael Atiyah and John D. S. Jones connected particle physics to differential geometry: In Yang-Mills theory, 'instantons' are minimum-energy classical field packets of charge $k$ on the 4-sphere $S^4$. The space of all instantons $M_k$ sits inside the infinite-dimensional space of ALL gauge connections $\\mathcal{C}_k$. Atiyah and Jones conjectured: As the charge $k$ grows, the topology of the finite-dimensional instanton space $M_k$ becomes IDENTICAL to the full infinite space up to a stable dimension $q(k) \\to \\infty$! In 1993, Boyer, Hurtubise, Mann, and Milgram completed the definitive proof!",
            "rules": [
              "SU(2) instantons of charge k on 4-sphere S⁴.",
              "Moduli space M_k of self-dual Yang-Mills connections.",
              "Inclusion map i_k: M_k ↪ Ω³_k SU(2).",
              "Atiyah-Jones: i_k induces isomorphism in homology/homotopy for dimensions ≤ q(k).",
              "Proved by Boyer et al. (1993) with linear bound q(k) ~ k."
            ],
            "mystery": "Michael Atiyah (Fields Medal 1966, Abel Prize 2004) was the founding father of modern topological index theory and geometric quantum field theory!",
            "funFact": "Donaldson's revolutionary work using instanton moduli spaces to discover exotic smooth structures on ℝ⁴ won him the 1986 Fields Medal!"
          },
          "investigators": {
            "tagline": "Scanning maps, conformal field theory, and ADHM construction.",
            "analogy": "The proof uses the ADHM algebraic description of instantons as matrices, combined with Cohen's scanning method for configuration spaces.",
            "rules": [
              "ADHM algebraic equations for instanton matrices.",
              "Triple loop space Ω³ SU(2).",
              "Lean 4 Mathlib differential topology."
            ],
            "mystery": "Can the Atiyah-Jones isomorphism range be determined on arbitrary compact 4-manifolds?",
            "funFact": "Michael Atiyah and John D. S. Jones in 1978; proved by Boyer et al. in 1993."
          },
          "pioneers": {
            "tagline": "Seiberg-Witten invariants and Taubes's Gromov-Witten equivalence.",
            "analogy": "The Atiyah-Jones philosophy directly foreshadowed the modern stabilization theorems in symplectic Floer homology and quantum topology.",
            "rules": [
              "Symplectic Floer homology stabilization.",
              "Donaldson polynomial invariants.",
              "Formal proof in Lean 4."
            ],
            "mystery": "AI symbolic topology systems compute high-order loop-space homology generators matching instanton data up to dimension 12.",
            "funFact": "The Atiyah-Jones Conjecture is the triumphant hymn celebrating the union of high-energy quantum physics with algebraic topology."
          }
        },
        "history": [
          {
            "year": "1978",
            "author": "Michael Atiyah & John D. S. Jones",
            "note": "Formulate the homological stability conjecture for instanton moduli spaces."
          },
          {
            "year": "1978",
            "author": "Atiyah, Drinfeld, Hitchin & Manin",
            "note": "Discover algebraic classification of all instantons (ADHM construction)."
          },
          {
            "year": "1993",
            "author": "Boyer, Hurtubise, Mann & Milgram",
            "note": "Deliver complete proof of the Atiyah-Jones conjecture."
          }
        ]
      },
      "fr": {
        "name": "The Atiyah-Jones Conjecture",
        "subtitle": "Topology of Yang-Mills Instantons on the 4-Sphere (Solved in 1993)",
        "field": "Gauge Theory & Algebraic Topology",
        "statusBadge": "PROVEN THEOREM (1993)",
        "grades": {
          "explorers": {
            "tagline": "Can the swirling quantum light vortices on a 4D sphere mimic all possible shapes of infinity?",
            "analogy": "In 1978, Sir Michael Atiyah and John D. S. Jones connected particle physics to differential geometry: In Yang-Mills theory, 'instantons' are minimum-energy classical field packets of charge $k$ on the 4-sphere $S^4$. The space of all instantons $M_k$ sits inside the infinite-dimensional space of ALL gauge connections $\\mathcal{C}_k$. Atiyah and Jones conjectured: As the charge $k$ grows, the topology of the finite-dimensional instanton space $M_k$ becomes IDENTICAL to the full infinite space up to a stable dimension $q(k) \\to \\infty$! In 1993, Boyer, Hurtubise, Mann, and Milgram completed the definitive proof!",
            "rules": [
              "SU(2) instantons of charge k on 4-sphere S⁴.",
              "Moduli space M_k of self-dual Yang-Mills connections.",
              "Inclusion map i_k: M_k ↪ Ω³_k SU(2).",
              "Atiyah-Jones: i_k induces isomorphism in homology/homotopy for dimensions ≤ q(k).",
              "Proved by Boyer et al. (1993) with linear bound q(k) ~ k."
            ],
            "mystery": "Michael Atiyah (Fields Medal 1966, Abel Prize 2004) was the founding father of modern topological index theory and geometric quantum field theory!",
            "funFact": "Donaldson's revolutionary work using instanton moduli spaces to discover exotic smooth structures on ℝ⁴ won him the 1986 Fields Medal!"
          },
          "investigators": {
            "tagline": "Scanning maps, conformal field theory, and ADHM construction.",
            "analogy": "The proof uses the ADHM algebraic description of instantons as matrices, combined with Cohen's scanning method for configuration spaces.",
            "rules": [
              "ADHM algebraic equations for instanton matrices.",
              "Triple loop space Ω³ SU(2).",
              "Lean 4 Mathlib differential topology."
            ],
            "mystery": "Can the Atiyah-Jones isomorphism range be determined on arbitrary compact 4-manifolds?",
            "funFact": "Michael Atiyah and John D. S. Jones in 1978; proved by Boyer et al. in 1993."
          },
          "pioneers": {
            "tagline": "Seiberg-Witten invariants and Taubes's Gromov-Witten equivalence.",
            "analogy": "The Atiyah-Jones philosophy directly foreshadowed the modern stabilization theorems in symplectic Floer homology and quantum topology.",
            "rules": [
              "Symplectic Floer homology stabilization.",
              "Donaldson polynomial invariants.",
              "Formal proof in Lean 4."
            ],
            "mystery": "AI symbolic topology systems compute high-order loop-space homology generators matching instanton data up to dimension 12.",
            "funFact": "The Atiyah-Jones Conjecture is the triumphant hymn celebrating the union of high-energy quantum physics with algebraic topology."
          }
        },
        "history": [
          {
            "year": "1978",
            "author": "Michael Atiyah & John D. S. Jones",
            "note": "Formulate the homological stability conjecture for instanton moduli spaces."
          },
          {
            "year": "1978",
            "author": "Atiyah, Drinfeld, Hitchin & Manin",
            "note": "Discover algebraic classification of all instantons (ADHM construction)."
          },
          {
            "year": "1993",
            "author": "Boyer, Hurtubise, Mann & Milgram",
            "note": "Deliver complete proof of the Atiyah-Jones conjecture."
          }
        ]
      },
      "it": {
        "name": "The Atiyah-Jones Conjecture",
        "subtitle": "Topology of Yang-Mills Instantons on the 4-Sphere (Solved in 1993)",
        "field": "Gauge Theory & Algebraic Topology",
        "statusBadge": "PROVEN THEOREM (1993)",
        "grades": {
          "explorers": {
            "tagline": "Can the swirling quantum light vortices on a 4D sphere mimic all possible shapes of infinity?",
            "analogy": "In 1978, Sir Michael Atiyah and John D. S. Jones connected particle physics to differential geometry: In Yang-Mills theory, 'instantons' are minimum-energy classical field packets of charge $k$ on the 4-sphere $S^4$. The space of all instantons $M_k$ sits inside the infinite-dimensional space of ALL gauge connections $\\mathcal{C}_k$. Atiyah and Jones conjectured: As the charge $k$ grows, the topology of the finite-dimensional instanton space $M_k$ becomes IDENTICAL to the full infinite space up to a stable dimension $q(k) \\to \\infty$! In 1993, Boyer, Hurtubise, Mann, and Milgram completed the definitive proof!",
            "rules": [
              "SU(2) instantons of charge k on 4-sphere S⁴.",
              "Moduli space M_k of self-dual Yang-Mills connections.",
              "Inclusion map i_k: M_k ↪ Ω³_k SU(2).",
              "Atiyah-Jones: i_k induces isomorphism in homology/homotopy for dimensions ≤ q(k).",
              "Proved by Boyer et al. (1993) with linear bound q(k) ~ k."
            ],
            "mystery": "Michael Atiyah (Fields Medal 1966, Abel Prize 2004) was the founding father of modern topological index theory and geometric quantum field theory!",
            "funFact": "Donaldson's revolutionary work using instanton moduli spaces to discover exotic smooth structures on ℝ⁴ won him the 1986 Fields Medal!"
          },
          "investigators": {
            "tagline": "Scanning maps, conformal field theory, and ADHM construction.",
            "analogy": "The proof uses the ADHM algebraic description of instantons as matrices, combined with Cohen's scanning method for configuration spaces.",
            "rules": [
              "ADHM algebraic equations for instanton matrices.",
              "Triple loop space Ω³ SU(2).",
              "Lean 4 Mathlib differential topology."
            ],
            "mystery": "Can the Atiyah-Jones isomorphism range be determined on arbitrary compact 4-manifolds?",
            "funFact": "Michael Atiyah and John D. S. Jones in 1978; proved by Boyer et al. in 1993."
          },
          "pioneers": {
            "tagline": "Seiberg-Witten invariants and Taubes's Gromov-Witten equivalence.",
            "analogy": "The Atiyah-Jones philosophy directly foreshadowed the modern stabilization theorems in symplectic Floer homology and quantum topology.",
            "rules": [
              "Symplectic Floer homology stabilization.",
              "Donaldson polynomial invariants.",
              "Formal proof in Lean 4."
            ],
            "mystery": "AI symbolic topology systems compute high-order loop-space homology generators matching instanton data up to dimension 12.",
            "funFact": "The Atiyah-Jones Conjecture is the triumphant hymn celebrating the union of high-energy quantum physics with algebraic topology."
          }
        },
        "history": [
          {
            "year": "1978",
            "author": "Michael Atiyah & John D. S. Jones",
            "note": "Formulate the homological stability conjecture for instanton moduli spaces."
          },
          {
            "year": "1978",
            "author": "Atiyah, Drinfeld, Hitchin & Manin",
            "note": "Discover algebraic classification of all instantons (ADHM construction)."
          },
          {
            "year": "1993",
            "author": "Boyer, Hurtubise, Mann & Milgram",
            "note": "Deliver complete proof of the Atiyah-Jones conjecture."
          }
        ]
      },
      "ja": {
        "name": "The Atiyah-Jones Conjecture",
        "subtitle": "Topology of Yang-Mills Instantons on the 4-Sphere (Solved in 1993)",
        "field": "Gauge Theory & Algebraic Topology",
        "statusBadge": "PROVEN THEOREM (1993)",
        "grades": {
          "explorers": {
            "tagline": "Can the swirling quantum light vortices on a 4D sphere mimic all possible shapes of infinity?",
            "analogy": "In 1978, Sir Michael Atiyah and John D. S. Jones connected particle physics to differential geometry: In Yang-Mills theory, 'instantons' are minimum-energy classical field packets of charge $k$ on the 4-sphere $S^4$. The space of all instantons $M_k$ sits inside the infinite-dimensional space of ALL gauge connections $\\mathcal{C}_k$. Atiyah and Jones conjectured: As the charge $k$ grows, the topology of the finite-dimensional instanton space $M_k$ becomes IDENTICAL to the full infinite space up to a stable dimension $q(k) \\to \\infty$! In 1993, Boyer, Hurtubise, Mann, and Milgram completed the definitive proof!",
            "rules": [
              "SU(2) instantons of charge k on 4-sphere S⁴.",
              "Moduli space M_k of self-dual Yang-Mills connections.",
              "Inclusion map i_k: M_k ↪ Ω³_k SU(2).",
              "Atiyah-Jones: i_k induces isomorphism in homology/homotopy for dimensions ≤ q(k).",
              "Proved by Boyer et al. (1993) with linear bound q(k) ~ k."
            ],
            "mystery": "Michael Atiyah (Fields Medal 1966, Abel Prize 2004) was the founding father of modern topological index theory and geometric quantum field theory!",
            "funFact": "Donaldson's revolutionary work using instanton moduli spaces to discover exotic smooth structures on ℝ⁴ won him the 1986 Fields Medal!"
          },
          "investigators": {
            "tagline": "Scanning maps, conformal field theory, and ADHM construction.",
            "analogy": "The proof uses the ADHM algebraic description of instantons as matrices, combined with Cohen's scanning method for configuration spaces.",
            "rules": [
              "ADHM algebraic equations for instanton matrices.",
              "Triple loop space Ω³ SU(2).",
              "Lean 4 Mathlib differential topology."
            ],
            "mystery": "Can the Atiyah-Jones isomorphism range be determined on arbitrary compact 4-manifolds?",
            "funFact": "Michael Atiyah and John D. S. Jones in 1978; proved by Boyer et al. in 1993."
          },
          "pioneers": {
            "tagline": "Seiberg-Witten invariants and Taubes's Gromov-Witten equivalence.",
            "analogy": "The Atiyah-Jones philosophy directly foreshadowed the modern stabilization theorems in symplectic Floer homology and quantum topology.",
            "rules": [
              "Symplectic Floer homology stabilization.",
              "Donaldson polynomial invariants.",
              "Formal proof in Lean 4."
            ],
            "mystery": "AI symbolic topology systems compute high-order loop-space homology generators matching instanton data up to dimension 12.",
            "funFact": "The Atiyah-Jones Conjecture is the triumphant hymn celebrating the union of high-energy quantum physics with algebraic topology."
          }
        },
        "history": [
          {
            "year": "1978",
            "author": "Michael Atiyah & John D. S. Jones",
            "note": "Formulate the homological stability conjecture for instanton moduli spaces."
          },
          {
            "year": "1978",
            "author": "Atiyah, Drinfeld, Hitchin & Manin",
            "note": "Discover algebraic classification of all instantons (ADHM construction)."
          },
          {
            "year": "1993",
            "author": "Boyer, Hurtubise, Mann & Milgram",
            "note": "Deliver complete proof of the Atiyah-Jones conjecture."
          }
        ]
      },
      "ko": {
        "name": "The Atiyah-Jones Conjecture",
        "subtitle": "Topology of Yang-Mills Instantons on the 4-Sphere (Solved in 1993)",
        "field": "Gauge Theory & Algebraic Topology",
        "statusBadge": "PROVEN THEOREM (1993)",
        "grades": {
          "explorers": {
            "tagline": "Can the swirling quantum light vortices on a 4D sphere mimic all possible shapes of infinity?",
            "analogy": "In 1978, Sir Michael Atiyah and John D. S. Jones connected particle physics to differential geometry: In Yang-Mills theory, 'instantons' are minimum-energy classical field packets of charge $k$ on the 4-sphere $S^4$. The space of all instantons $M_k$ sits inside the infinite-dimensional space of ALL gauge connections $\\mathcal{C}_k$. Atiyah and Jones conjectured: As the charge $k$ grows, the topology of the finite-dimensional instanton space $M_k$ becomes IDENTICAL to the full infinite space up to a stable dimension $q(k) \\to \\infty$! In 1993, Boyer, Hurtubise, Mann, and Milgram completed the definitive proof!",
            "rules": [
              "SU(2) instantons of charge k on 4-sphere S⁴.",
              "Moduli space M_k of self-dual Yang-Mills connections.",
              "Inclusion map i_k: M_k ↪ Ω³_k SU(2).",
              "Atiyah-Jones: i_k induces isomorphism in homology/homotopy for dimensions ≤ q(k).",
              "Proved by Boyer et al. (1993) with linear bound q(k) ~ k."
            ],
            "mystery": "Michael Atiyah (Fields Medal 1966, Abel Prize 2004) was the founding father of modern topological index theory and geometric quantum field theory!",
            "funFact": "Donaldson's revolutionary work using instanton moduli spaces to discover exotic smooth structures on ℝ⁴ won him the 1986 Fields Medal!"
          },
          "investigators": {
            "tagline": "Scanning maps, conformal field theory, and ADHM construction.",
            "analogy": "The proof uses the ADHM algebraic description of instantons as matrices, combined with Cohen's scanning method for configuration spaces.",
            "rules": [
              "ADHM algebraic equations for instanton matrices.",
              "Triple loop space Ω³ SU(2).",
              "Lean 4 Mathlib differential topology."
            ],
            "mystery": "Can the Atiyah-Jones isomorphism range be determined on arbitrary compact 4-manifolds?",
            "funFact": "Michael Atiyah and John D. S. Jones in 1978; proved by Boyer et al. in 1993."
          },
          "pioneers": {
            "tagline": "Seiberg-Witten invariants and Taubes's Gromov-Witten equivalence.",
            "analogy": "The Atiyah-Jones philosophy directly foreshadowed the modern stabilization theorems in symplectic Floer homology and quantum topology.",
            "rules": [
              "Symplectic Floer homology stabilization.",
              "Donaldson polynomial invariants.",
              "Formal proof in Lean 4."
            ],
            "mystery": "AI symbolic topology systems compute high-order loop-space homology generators matching instanton data up to dimension 12.",
            "funFact": "The Atiyah-Jones Conjecture is the triumphant hymn celebrating the union of high-energy quantum physics with algebraic topology."
          }
        },
        "history": [
          {
            "year": "1978",
            "author": "Michael Atiyah & John D. S. Jones",
            "note": "Formulate the homological stability conjecture for instanton moduli spaces."
          },
          {
            "year": "1978",
            "author": "Atiyah, Drinfeld, Hitchin & Manin",
            "note": "Discover algebraic classification of all instantons (ADHM construction)."
          },
          {
            "year": "1993",
            "author": "Boyer, Hurtubise, Mann & Milgram",
            "note": "Deliver complete proof of the Atiyah-Jones conjecture."
          }
        ]
      },
      "zh-Hans": {
        "name": "阿蒂亚-琼斯瞬子同伦猜想",
        "subtitle": "四维球面上杨-米尔斯瞬子模空间的同伦拓扑逼近（1993年彻底获证）",
        "field": "规范场论 & 代数拓扑与模空间",
        "statusBadge": "1993年已证明定理",
        "grades": {
          "explorers": {
            "tagline": "四维时空球面上旋转的量子光涡旋，能不能在不断加速中模仿全宇宙一切可能的无限形态？",
            "analogy": "1978年英国数学泰斗迈克尔·阿蒂亚与约翰·琼斯在量子粒子物理与微分几何之间架起了一座宏伟通道：在非阿贝尔杨-米尔斯规范场论中，‘瞬子’（Instantons）是四维球面 $S^4$ 上具有拓扑拓扑荷 $k$ 的绝对极小能量场态。所有这些瞬子构成的有限维模空间 $M_k$ 自然嵌入在所有可能规范连接组成的无穷维空间 $\\mathcal{C}_k$ 中。阿蒂亚与琼斯大胆猜想：随着拓扑荷 $k$ 的增长，有限维瞬子模空间自身的同伦群，与极其庞大的无穷维全部规范场空间之间，在稳定维度 $q(k)$ 以下将‘分毫不差地完全同构’！1993年，鲍耶、于尔蒂比斯、曼与米尔格拉姆四位学者发表长文彻底完成了终极证明！",
            "rules": [
              "四维球面 $S^4$ 上的 $SU(2)$ 拓扑荷 $k$ 瞬子。",
              "自对偶杨-米尔斯联络构成的有限维模空间 $M_k$。",
              "到三次环路空间的全包含映射 $i_k: M_k \\hookrightarrow \\Omega^3_k SU(2)$。",
              "猜想断言在低于稳定维数 $q(k)$ 的低维同伦同调群完全同构！",
              "1993年联合学者证明了线性增长界限 $q(k) \\sim k$！"
            ],
            "mystery": "迈克尔·阿蒂亚爵士荣获菲尔兹奖与阿贝尔奖，被公认为现代拓扑指标定理与几何量子场论的开山教父！",
            "funFact": "西蒙·唐纳森正是利用阿蒂亚瞬子模空间发现了四维欧氏空间 $\\mathbb{R}^4$ 上不可思议的‘奇异光滑结构’，年仅29岁斩获菲尔兹奖！"
          },
          "investigators": {
            "tagline": "全纯扫描映射、共形场论与 ADHM 代数矩阵瞬子构造。",
            "analogy": "证明综合了阿蒂亚-德林菲尔德-希钦-马宁 (ADHM) 的代数矩阵构造与高阶粒子构型空间的同伦扫描技术。",
            "rules": [
              "ADHM 瞬子矩阵四元数方程代数形式化。",
              "李群的三重紧致环路空间。",
              "Lean 4 微分拓扑主丛与联络形式化。"
            ],
            "mystery": "能否在任意紧致四维光滑流形上完全确定阿蒂亚-琼斯同伦稳定维度的精确界限？",
            "funFact": "阿蒂亚与琼斯于1978年提出，鲍耶团队于1993年获证。"
          },
          "pioneers": {
            "tagline": "塞伯格-威滕不变量与陶布斯伪全纯曲线等价性理论。",
            "analogy": "阿蒂亚-琼斯猜想中‘有限极值态趋向无穷维全空间拓扑稳定’的深邃哲学，直接启发了辛弗洛尔同调与现代量子拓扑学。",
            "rules": [
              "辛弗洛尔同调代数稳定化。",
              "唐纳森多项式不变量构造。",
              "Lean 4 规范场论形式化。"
            ],
            "mystery": "AI 自动化拓扑计算系统已对高达 12 维的环路空间同调生成元完成了与瞬子模空间拓扑的完美对齐。",
            "funFact": "阿蒂亚-琼斯猜想是庆祝高能微观粒子物理与现代代数拓扑终极结合的最雄壮凯歌。"
          }
        },
        "history": [
          {
            "year": "1978",
            "author": "阿蒂亚 & 琼斯",
            "note": "在规范场论中正式提出瞬子同伦稳定猜想。"
          },
          {
            "year": "1978",
            "author": "ADHM 团队",
            "note": "发表划时代的瞬子 ADHM 代数矩阵构造法。"
          },
          {
            "year": "1993",
            "author": "鲍耶团队",
            "note": "发表长文彻底攻克阿蒂亚-琼斯猜想！"
          }
        ]
      },
      "zh-Hant": {
        "name": "The Atiyah-Jones Conjecture",
        "subtitle": "Topology of Yang-Mills Instantons on the 4-Sphere (Solved in 1993)",
        "field": "Gauge Theory & Algebraic Topology",
        "statusBadge": "PROVEN THEOREM (1993)",
        "grades": {
          "explorers": {
            "tagline": "Can the swirling quantum light vortices on a 4D sphere mimic all possible shapes of infinity?",
            "analogy": "In 1978, Sir Michael Atiyah and John D. S. Jones connected particle physics to differential geometry: In Yang-Mills theory, 'instantons' are minimum-energy classical field packets of charge $k$ on the 4-sphere $S^4$. The space of all instantons $M_k$ sits inside the infinite-dimensional space of ALL gauge connections $\\mathcal{C}_k$. Atiyah and Jones conjectured: As the charge $k$ grows, the topology of the finite-dimensional instanton space $M_k$ becomes IDENTICAL to the full infinite space up to a stable dimension $q(k) \\to \\infty$! In 1993, Boyer, Hurtubise, Mann, and Milgram completed the definitive proof!",
            "rules": [
              "SU(2) instantons of charge k on 4-sphere S⁴.",
              "Moduli space M_k of self-dual Yang-Mills connections.",
              "Inclusion map i_k: M_k ↪ Ω³_k SU(2).",
              "Atiyah-Jones: i_k induces isomorphism in homology/homotopy for dimensions ≤ q(k).",
              "Proved by Boyer et al. (1993) with linear bound q(k) ~ k."
            ],
            "mystery": "Michael Atiyah (Fields Medal 1966, Abel Prize 2004) was the founding father of modern topological index theory and geometric quantum field theory!",
            "funFact": "Donaldson's revolutionary work using instanton moduli spaces to discover exotic smooth structures on ℝ⁴ won him the 1986 Fields Medal!"
          },
          "investigators": {
            "tagline": "Scanning maps, conformal field theory, and ADHM construction.",
            "analogy": "The proof uses the ADHM algebraic description of instantons as matrices, combined with Cohen's scanning method for configuration spaces.",
            "rules": [
              "ADHM algebraic equations for instanton matrices.",
              "Triple loop space Ω³ SU(2).",
              "Lean 4 Mathlib differential topology."
            ],
            "mystery": "Can the Atiyah-Jones isomorphism range be determined on arbitrary compact 4-manifolds?",
            "funFact": "Michael Atiyah and John D. S. Jones in 1978; proved by Boyer et al. in 1993."
          },
          "pioneers": {
            "tagline": "Seiberg-Witten invariants and Taubes's Gromov-Witten equivalence.",
            "analogy": "The Atiyah-Jones philosophy directly foreshadowed the modern stabilization theorems in symplectic Floer homology and quantum topology.",
            "rules": [
              "Symplectic Floer homology stabilization.",
              "Donaldson polynomial invariants.",
              "Formal proof in Lean 4."
            ],
            "mystery": "AI symbolic topology systems compute high-order loop-space homology generators matching instanton data up to dimension 12.",
            "funFact": "The Atiyah-Jones Conjecture is the triumphant hymn celebrating the union of high-energy quantum physics with algebraic topology."
          }
        },
        "history": [
          {
            "year": "1978",
            "author": "Michael Atiyah & John D. S. Jones",
            "note": "Formulate the homological stability conjecture for instanton moduli spaces."
          },
          {
            "year": "1978",
            "author": "Atiyah, Drinfeld, Hitchin & Manin",
            "note": "Discover algebraic classification of all instantons (ADHM construction)."
          },
          {
            "year": "1993",
            "author": "Boyer, Hurtubise, Mann & Milgram",
            "note": "Deliver complete proof of the Atiyah-Jones conjecture."
          }
        ]
      }
    }
  },
  {
    "id": "kozlov",
    "icon": "🎢",
    "difficulty": "Gr 9+",
    "domain": "algebra-analysis",
    "category": "algebra-analysis",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Analysis.Calculus.FDeriv.Basic\n-- Kozlov's Conjecture (Valery Kozlov, 1979)\n-- The geodesic flow on a compact Riemannian surface of genus g > 1 admits no non-trivial analytic first integral.",
    "locales": {
      "en": {
        "name": "Kozlov's Non-Integrability Conjecture",
        "subtitle": "Non-Existence of Analytic Conserved Quantities for Surfaces of Genus $g > 1$ (Solved in 1979)",
        "field": "Hamiltonian Dynamics & Riemannian Geometry",
        "statusBadge": "PROVEN THEOREM (1979)",
        "grades": {
          "explorers": {
            "tagline": "If you shoot a hockey puck on a two-hole doughnut, can any magic formula ever predict its perpetual trajectory?",
            "analogy": "In classical mechanics, Kepler's planetary orbits are 'integrable'—conserved quantities like energy and angular momentum keep the motion completely predictable. But in 1979, Soviet mathematician Valery Kozlov investigated geodesic motion on compact surfaces with $g \\ge 2$ holes (like a pretzel). Kozlov proved: On ANY such surface with ANY smooth metric, there CANNOT exist a single additional analytic first integral (conserved quantity) beyond the trivial kinetic energy! The topology of the surface FORCES the geodesic flow to be perpetually chaotic!",
            "rules": [
              "Compact 2D surface M of genus g ≥ 2.",
              "Geodesic Hamiltonian H(x, p) = 1/2 g^{ij}(x) p_i p_j on cotangent bundle T*M.",
              "First integral: Function F: T*M → ℝ with Poisson bracket {H, F} = 0.",
              "Kozlov's Theorem (1979): No additional independent real-analytic first integral exists!"
            ],
            "mystery": "The theorem proves that topological complexity alone (holes in space) acts as an absolute barrier preventing mechanical systems from being solved with exact formulas!",
            "funFact": "If g = 1 (a standard torus/doughnut), geodesic flow with a flat metric IS integrable and has constant momentum along both cycles!"
          },
          "investigators": {
            "tagline": "Maupertuis' principle, Poincaré-Birkhoff theorem, and topological entropy.",
            "analogy": "Kozlov's proof combined variational methods on closed geodesics with Poincaré's classic perturbation technique across fundamental group loops.",
            "rules": [
              "Poisson bracket {H, F} = 0.",
              "Fundamental group π₁(M_g) exponential growth.",
              "Lean 4 Mathlib symplectic geometry."
            ],
            "mystery": "Does non-integrability hold for infinitely differentiable (C^∞) first integrals, not just analytic ones?",
            "funFact": "Valery Kozlov proved the analytic theorem in 1979."
          },
          "pioneers": {
            "tagline": "Anosov geodesic flows, hyperbolicity, and mixing.",
            "analogy": "On surfaces with negative curvature, Hadamard and Anosov proved the geodesic flow is uniformly hyperbolic, possessing positive Kolmogorov-Sinai entropy.",
            "rules": [
              "Anosov splitting: T(T¹M) = E^s ⊕ E^u ⊕ E^c.",
              "Kolmogorov-Sinai metric entropy > 0.",
              "Lean 4 dynamical flows."
            ],
            "mystery": "Interactive Hamiltonian integrators trace particle trajectories on a 2-hole genus-2 surface, generating chaotic Poincaré puncture plots.",
            "funFact": "Kozlov's Theorem is the definitive milestone establishing the absolute dominion of topology over physical predictability."
          }
        },
        "history": [
          {
            "year": "1892",
            "author": "Henri Poincaré",
            "note": "Proves non-existence of analytic first integrals in the 3-body problem."
          },
          {
            "year": "1967",
            "author": "Dmitri Anosov",
            "note": "Establishes hyperbolic theory of dynamical systems (Anosov flows)."
          },
          {
            "year": "1979",
            "author": "Valery Kozlov",
            "note": "Proves topological non-integrability of geodesic flows for genus g > 1."
          }
        ]
      },
      "de": {
        "name": "Kozlov's Non-Integrability Conjecture",
        "subtitle": "Non-Existence of Analytic Conserved Quantities for Surfaces of Genus $g > 1$ (Solved in 1979)",
        "field": "Hamiltonian Dynamics & Riemannian Geometry",
        "statusBadge": "PROVEN THEOREM (1979)",
        "grades": {
          "explorers": {
            "tagline": "If you shoot a hockey puck on a two-hole doughnut, can any magic formula ever predict its perpetual trajectory?",
            "analogy": "In classical mechanics, Kepler's planetary orbits are 'integrable'—conserved quantities like energy and angular momentum keep the motion completely predictable. But in 1979, Soviet mathematician Valery Kozlov investigated geodesic motion on compact surfaces with $g \\ge 2$ holes (like a pretzel). Kozlov proved: On ANY such surface with ANY smooth metric, there CANNOT exist a single additional analytic first integral (conserved quantity) beyond the trivial kinetic energy! The topology of the surface FORCES the geodesic flow to be perpetually chaotic!",
            "rules": [
              "Compact 2D surface M of genus g ≥ 2.",
              "Geodesic Hamiltonian H(x, p) = 1/2 g^{ij}(x) p_i p_j on cotangent bundle T*M.",
              "First integral: Function F: T*M → ℝ with Poisson bracket {H, F} = 0.",
              "Kozlov's Theorem (1979): No additional independent real-analytic first integral exists!"
            ],
            "mystery": "The theorem proves that topological complexity alone (holes in space) acts as an absolute barrier preventing mechanical systems from being solved with exact formulas!",
            "funFact": "If g = 1 (a standard torus/doughnut), geodesic flow with a flat metric IS integrable and has constant momentum along both cycles!"
          },
          "investigators": {
            "tagline": "Maupertuis' principle, Poincaré-Birkhoff theorem, and topological entropy.",
            "analogy": "Kozlov's proof combined variational methods on closed geodesics with Poincaré's classic perturbation technique across fundamental group loops.",
            "rules": [
              "Poisson bracket {H, F} = 0.",
              "Fundamental group π₁(M_g) exponential growth.",
              "Lean 4 Mathlib symplectic geometry."
            ],
            "mystery": "Does non-integrability hold for infinitely differentiable (C^∞) first integrals, not just analytic ones?",
            "funFact": "Valery Kozlov proved the analytic theorem in 1979."
          },
          "pioneers": {
            "tagline": "Anosov geodesic flows, hyperbolicity, and mixing.",
            "analogy": "On surfaces with negative curvature, Hadamard and Anosov proved the geodesic flow is uniformly hyperbolic, possessing positive Kolmogorov-Sinai entropy.",
            "rules": [
              "Anosov splitting: T(T¹M) = E^s ⊕ E^u ⊕ E^c.",
              "Kolmogorov-Sinai metric entropy > 0.",
              "Lean 4 dynamical flows."
            ],
            "mystery": "Interactive Hamiltonian integrators trace particle trajectories on a 2-hole genus-2 surface, generating chaotic Poincaré puncture plots.",
            "funFact": "Kozlov's Theorem is the definitive milestone establishing the absolute dominion of topology over physical predictability."
          }
        },
        "history": [
          {
            "year": "1892",
            "author": "Henri Poincaré",
            "note": "Proves non-existence of analytic first integrals in the 3-body problem."
          },
          {
            "year": "1967",
            "author": "Dmitri Anosov",
            "note": "Establishes hyperbolic theory of dynamical systems (Anosov flows)."
          },
          {
            "year": "1979",
            "author": "Valery Kozlov",
            "note": "Proves topological non-integrability of geodesic flows for genus g > 1."
          }
        ]
      },
      "fr": {
        "name": "Kozlov's Non-Integrability Conjecture",
        "subtitle": "Non-Existence of Analytic Conserved Quantities for Surfaces of Genus $g > 1$ (Solved in 1979)",
        "field": "Hamiltonian Dynamics & Riemannian Geometry",
        "statusBadge": "PROVEN THEOREM (1979)",
        "grades": {
          "explorers": {
            "tagline": "If you shoot a hockey puck on a two-hole doughnut, can any magic formula ever predict its perpetual trajectory?",
            "analogy": "In classical mechanics, Kepler's planetary orbits are 'integrable'—conserved quantities like energy and angular momentum keep the motion completely predictable. But in 1979, Soviet mathematician Valery Kozlov investigated geodesic motion on compact surfaces with $g \\ge 2$ holes (like a pretzel). Kozlov proved: On ANY such surface with ANY smooth metric, there CANNOT exist a single additional analytic first integral (conserved quantity) beyond the trivial kinetic energy! The topology of the surface FORCES the geodesic flow to be perpetually chaotic!",
            "rules": [
              "Compact 2D surface M of genus g ≥ 2.",
              "Geodesic Hamiltonian H(x, p) = 1/2 g^{ij}(x) p_i p_j on cotangent bundle T*M.",
              "First integral: Function F: T*M → ℝ with Poisson bracket {H, F} = 0.",
              "Kozlov's Theorem (1979): No additional independent real-analytic first integral exists!"
            ],
            "mystery": "The theorem proves that topological complexity alone (holes in space) acts as an absolute barrier preventing mechanical systems from being solved with exact formulas!",
            "funFact": "If g = 1 (a standard torus/doughnut), geodesic flow with a flat metric IS integrable and has constant momentum along both cycles!"
          },
          "investigators": {
            "tagline": "Maupertuis' principle, Poincaré-Birkhoff theorem, and topological entropy.",
            "analogy": "Kozlov's proof combined variational methods on closed geodesics with Poincaré's classic perturbation technique across fundamental group loops.",
            "rules": [
              "Poisson bracket {H, F} = 0.",
              "Fundamental group π₁(M_g) exponential growth.",
              "Lean 4 Mathlib symplectic geometry."
            ],
            "mystery": "Does non-integrability hold for infinitely differentiable (C^∞) first integrals, not just analytic ones?",
            "funFact": "Valery Kozlov proved the analytic theorem in 1979."
          },
          "pioneers": {
            "tagline": "Anosov geodesic flows, hyperbolicity, and mixing.",
            "analogy": "On surfaces with negative curvature, Hadamard and Anosov proved the geodesic flow is uniformly hyperbolic, possessing positive Kolmogorov-Sinai entropy.",
            "rules": [
              "Anosov splitting: T(T¹M) = E^s ⊕ E^u ⊕ E^c.",
              "Kolmogorov-Sinai metric entropy > 0.",
              "Lean 4 dynamical flows."
            ],
            "mystery": "Interactive Hamiltonian integrators trace particle trajectories on a 2-hole genus-2 surface, generating chaotic Poincaré puncture plots.",
            "funFact": "Kozlov's Theorem is the definitive milestone establishing the absolute dominion of topology over physical predictability."
          }
        },
        "history": [
          {
            "year": "1892",
            "author": "Henri Poincaré",
            "note": "Proves non-existence of analytic first integrals in the 3-body problem."
          },
          {
            "year": "1967",
            "author": "Dmitri Anosov",
            "note": "Establishes hyperbolic theory of dynamical systems (Anosov flows)."
          },
          {
            "year": "1979",
            "author": "Valery Kozlov",
            "note": "Proves topological non-integrability of geodesic flows for genus g > 1."
          }
        ]
      },
      "it": {
        "name": "Kozlov's Non-Integrability Conjecture",
        "subtitle": "Non-Existence of Analytic Conserved Quantities for Surfaces of Genus $g > 1$ (Solved in 1979)",
        "field": "Hamiltonian Dynamics & Riemannian Geometry",
        "statusBadge": "PROVEN THEOREM (1979)",
        "grades": {
          "explorers": {
            "tagline": "If you shoot a hockey puck on a two-hole doughnut, can any magic formula ever predict its perpetual trajectory?",
            "analogy": "In classical mechanics, Kepler's planetary orbits are 'integrable'—conserved quantities like energy and angular momentum keep the motion completely predictable. But in 1979, Soviet mathematician Valery Kozlov investigated geodesic motion on compact surfaces with $g \\ge 2$ holes (like a pretzel). Kozlov proved: On ANY such surface with ANY smooth metric, there CANNOT exist a single additional analytic first integral (conserved quantity) beyond the trivial kinetic energy! The topology of the surface FORCES the geodesic flow to be perpetually chaotic!",
            "rules": [
              "Compact 2D surface M of genus g ≥ 2.",
              "Geodesic Hamiltonian H(x, p) = 1/2 g^{ij}(x) p_i p_j on cotangent bundle T*M.",
              "First integral: Function F: T*M → ℝ with Poisson bracket {H, F} = 0.",
              "Kozlov's Theorem (1979): No additional independent real-analytic first integral exists!"
            ],
            "mystery": "The theorem proves that topological complexity alone (holes in space) acts as an absolute barrier preventing mechanical systems from being solved with exact formulas!",
            "funFact": "If g = 1 (a standard torus/doughnut), geodesic flow with a flat metric IS integrable and has constant momentum along both cycles!"
          },
          "investigators": {
            "tagline": "Maupertuis' principle, Poincaré-Birkhoff theorem, and topological entropy.",
            "analogy": "Kozlov's proof combined variational methods on closed geodesics with Poincaré's classic perturbation technique across fundamental group loops.",
            "rules": [
              "Poisson bracket {H, F} = 0.",
              "Fundamental group π₁(M_g) exponential growth.",
              "Lean 4 Mathlib symplectic geometry."
            ],
            "mystery": "Does non-integrability hold for infinitely differentiable (C^∞) first integrals, not just analytic ones?",
            "funFact": "Valery Kozlov proved the analytic theorem in 1979."
          },
          "pioneers": {
            "tagline": "Anosov geodesic flows, hyperbolicity, and mixing.",
            "analogy": "On surfaces with negative curvature, Hadamard and Anosov proved the geodesic flow is uniformly hyperbolic, possessing positive Kolmogorov-Sinai entropy.",
            "rules": [
              "Anosov splitting: T(T¹M) = E^s ⊕ E^u ⊕ E^c.",
              "Kolmogorov-Sinai metric entropy > 0.",
              "Lean 4 dynamical flows."
            ],
            "mystery": "Interactive Hamiltonian integrators trace particle trajectories on a 2-hole genus-2 surface, generating chaotic Poincaré puncture plots.",
            "funFact": "Kozlov's Theorem is the definitive milestone establishing the absolute dominion of topology over physical predictability."
          }
        },
        "history": [
          {
            "year": "1892",
            "author": "Henri Poincaré",
            "note": "Proves non-existence of analytic first integrals in the 3-body problem."
          },
          {
            "year": "1967",
            "author": "Dmitri Anosov",
            "note": "Establishes hyperbolic theory of dynamical systems (Anosov flows)."
          },
          {
            "year": "1979",
            "author": "Valery Kozlov",
            "note": "Proves topological non-integrability of geodesic flows for genus g > 1."
          }
        ]
      },
      "ja": {
        "name": "Kozlov's Non-Integrability Conjecture",
        "subtitle": "Non-Existence of Analytic Conserved Quantities for Surfaces of Genus $g > 1$ (Solved in 1979)",
        "field": "Hamiltonian Dynamics & Riemannian Geometry",
        "statusBadge": "PROVEN THEOREM (1979)",
        "grades": {
          "explorers": {
            "tagline": "If you shoot a hockey puck on a two-hole doughnut, can any magic formula ever predict its perpetual trajectory?",
            "analogy": "In classical mechanics, Kepler's planetary orbits are 'integrable'—conserved quantities like energy and angular momentum keep the motion completely predictable. But in 1979, Soviet mathematician Valery Kozlov investigated geodesic motion on compact surfaces with $g \\ge 2$ holes (like a pretzel). Kozlov proved: On ANY such surface with ANY smooth metric, there CANNOT exist a single additional analytic first integral (conserved quantity) beyond the trivial kinetic energy! The topology of the surface FORCES the geodesic flow to be perpetually chaotic!",
            "rules": [
              "Compact 2D surface M of genus g ≥ 2.",
              "Geodesic Hamiltonian H(x, p) = 1/2 g^{ij}(x) p_i p_j on cotangent bundle T*M.",
              "First integral: Function F: T*M → ℝ with Poisson bracket {H, F} = 0.",
              "Kozlov's Theorem (1979): No additional independent real-analytic first integral exists!"
            ],
            "mystery": "The theorem proves that topological complexity alone (holes in space) acts as an absolute barrier preventing mechanical systems from being solved with exact formulas!",
            "funFact": "If g = 1 (a standard torus/doughnut), geodesic flow with a flat metric IS integrable and has constant momentum along both cycles!"
          },
          "investigators": {
            "tagline": "Maupertuis' principle, Poincaré-Birkhoff theorem, and topological entropy.",
            "analogy": "Kozlov's proof combined variational methods on closed geodesics with Poincaré's classic perturbation technique across fundamental group loops.",
            "rules": [
              "Poisson bracket {H, F} = 0.",
              "Fundamental group π₁(M_g) exponential growth.",
              "Lean 4 Mathlib symplectic geometry."
            ],
            "mystery": "Does non-integrability hold for infinitely differentiable (C^∞) first integrals, not just analytic ones?",
            "funFact": "Valery Kozlov proved the analytic theorem in 1979."
          },
          "pioneers": {
            "tagline": "Anosov geodesic flows, hyperbolicity, and mixing.",
            "analogy": "On surfaces with negative curvature, Hadamard and Anosov proved the geodesic flow is uniformly hyperbolic, possessing positive Kolmogorov-Sinai entropy.",
            "rules": [
              "Anosov splitting: T(T¹M) = E^s ⊕ E^u ⊕ E^c.",
              "Kolmogorov-Sinai metric entropy > 0.",
              "Lean 4 dynamical flows."
            ],
            "mystery": "Interactive Hamiltonian integrators trace particle trajectories on a 2-hole genus-2 surface, generating chaotic Poincaré puncture plots.",
            "funFact": "Kozlov's Theorem is the definitive milestone establishing the absolute dominion of topology over physical predictability."
          }
        },
        "history": [
          {
            "year": "1892",
            "author": "Henri Poincaré",
            "note": "Proves non-existence of analytic first integrals in the 3-body problem."
          },
          {
            "year": "1967",
            "author": "Dmitri Anosov",
            "note": "Establishes hyperbolic theory of dynamical systems (Anosov flows)."
          },
          {
            "year": "1979",
            "author": "Valery Kozlov",
            "note": "Proves topological non-integrability of geodesic flows for genus g > 1."
          }
        ]
      },
      "ko": {
        "name": "Kozlov's Non-Integrability Conjecture",
        "subtitle": "Non-Existence of Analytic Conserved Quantities for Surfaces of Genus $g > 1$ (Solved in 1979)",
        "field": "Hamiltonian Dynamics & Riemannian Geometry",
        "statusBadge": "PROVEN THEOREM (1979)",
        "grades": {
          "explorers": {
            "tagline": "If you shoot a hockey puck on a two-hole doughnut, can any magic formula ever predict its perpetual trajectory?",
            "analogy": "In classical mechanics, Kepler's planetary orbits are 'integrable'—conserved quantities like energy and angular momentum keep the motion completely predictable. But in 1979, Soviet mathematician Valery Kozlov investigated geodesic motion on compact surfaces with $g \\ge 2$ holes (like a pretzel). Kozlov proved: On ANY such surface with ANY smooth metric, there CANNOT exist a single additional analytic first integral (conserved quantity) beyond the trivial kinetic energy! The topology of the surface FORCES the geodesic flow to be perpetually chaotic!",
            "rules": [
              "Compact 2D surface M of genus g ≥ 2.",
              "Geodesic Hamiltonian H(x, p) = 1/2 g^{ij}(x) p_i p_j on cotangent bundle T*M.",
              "First integral: Function F: T*M → ℝ with Poisson bracket {H, F} = 0.",
              "Kozlov's Theorem (1979): No additional independent real-analytic first integral exists!"
            ],
            "mystery": "The theorem proves that topological complexity alone (holes in space) acts as an absolute barrier preventing mechanical systems from being solved with exact formulas!",
            "funFact": "If g = 1 (a standard torus/doughnut), geodesic flow with a flat metric IS integrable and has constant momentum along both cycles!"
          },
          "investigators": {
            "tagline": "Maupertuis' principle, Poincaré-Birkhoff theorem, and topological entropy.",
            "analogy": "Kozlov's proof combined variational methods on closed geodesics with Poincaré's classic perturbation technique across fundamental group loops.",
            "rules": [
              "Poisson bracket {H, F} = 0.",
              "Fundamental group π₁(M_g) exponential growth.",
              "Lean 4 Mathlib symplectic geometry."
            ],
            "mystery": "Does non-integrability hold for infinitely differentiable (C^∞) first integrals, not just analytic ones?",
            "funFact": "Valery Kozlov proved the analytic theorem in 1979."
          },
          "pioneers": {
            "tagline": "Anosov geodesic flows, hyperbolicity, and mixing.",
            "analogy": "On surfaces with negative curvature, Hadamard and Anosov proved the geodesic flow is uniformly hyperbolic, possessing positive Kolmogorov-Sinai entropy.",
            "rules": [
              "Anosov splitting: T(T¹M) = E^s ⊕ E^u ⊕ E^c.",
              "Kolmogorov-Sinai metric entropy > 0.",
              "Lean 4 dynamical flows."
            ],
            "mystery": "Interactive Hamiltonian integrators trace particle trajectories on a 2-hole genus-2 surface, generating chaotic Poincaré puncture plots.",
            "funFact": "Kozlov's Theorem is the definitive milestone establishing the absolute dominion of topology over physical predictability."
          }
        },
        "history": [
          {
            "year": "1892",
            "author": "Henri Poincaré",
            "note": "Proves non-existence of analytic first integrals in the 3-body problem."
          },
          {
            "year": "1967",
            "author": "Dmitri Anosov",
            "note": "Establishes hyperbolic theory of dynamical systems (Anosov flows)."
          },
          {
            "year": "1979",
            "author": "Valery Kozlov",
            "note": "Proves topological non-integrability of geodesic flows for genus g > 1."
          }
        ]
      },
      "zh-Hans": {
        "name": "科兹洛夫测地流不可积猜想",
        "subtitle": "亏格大于1的双曲曲面上测地运动绝不存在解析守恒量（科兹洛夫1979年宣告终极混沌）",
        "field": "哈密顿力学 & 黎曼几何测地线动力学",
        "statusBadge": "1979年已证明定理",
        "grades": {
          "explorers": {
            "tagline": "如果你把冰球打上一个有两个孔的甜甜圈曲面，世上有没有任何优美的代数公式能永久预测它的滑行轨迹？",
            "analogy": "在经典牛顿力学中，行星轨道是‘可积’的——能量与角动量等守恒量的存在让一切运动都有规律可循。但在1979年，苏联著名动力学与力学家瓦列里·科兹洛夫考察了在包含 2 个或更多孔洞的紧致曲面（如蝴蝶形双孔面包）上的无摩擦自由滑行（测地流）。科兹洛夫给出了震撼力学界的严格定理：在这类亏格 $g > 1$ 的任何曲面上，无论你赋予曲面怎样精巧的光滑度规，除了平平无奇的自身动能之外，‘绝对不可能存在任何一个额外的独立实解析守恒量’！曲面内在的多孔拓扑结构，从根本上强制注定了任何滑行轨迹必然陷入永恒的确定性混沌！",
            "rules": [
              "亏格 $g \\ge 2$ 的紧致二维黎曼曲面 $M$。",
              "余切丛上的测地流哈密顿量 $H(x, p) = \\frac{1}{2} g^{ij}(x) p_i p_j$。",
              "第一积分（守恒量）：满足泊松括号 $\\{H, F\\} = 0$ 的解析函数。",
              "科兹洛夫定理：除动能外绝不存在任何新的实解析守恒量！"
            ],
            "mystery": "该定理深刻证明：仅仅是空间中的拓扑孔洞本身，就会化作一道不可逾越的天然屏障，彻底粉碎力学系统被精确解析公式求解的一切幻想！",
            "funFact": "当亏格 $g = 1$（普通单孔甜甜圈）时，平坦度规下的测地流是完全可积的，沿着两个主循环都有常数动量守恒！"
          },
          "investigators": {
            "tagline": "莫佩尔蒂最小作用量原理、庞加莱-伯克霍夫几何定理与拓扑熵。",
            "analogy": "科兹洛夫将关于非平凡同伦类闭测地线的变分分析，与庞加莱经典的轨道微扰理论巧妙融合，直接从曲面基本群的指数级自由增长性导出了守恒函数的退化矛盾。",
            "rules": [
              "辛流形哈密顿矢量场与泊松括号。",
              "曲面基本群非阿贝尔指数增长性。",
              "Lean 4 辛流形与黎曼联络形式化。"
            ],
            "mystery": "不可积性定理在光滑度放松到无穷阶可微（$C^\\infty$）守恒量时是否依然普遍成立？（光滑不可积依然是动力系统前沿挑战！）",
            "funFact": "瓦列里·科兹洛夫于1979年证明。"
          },
          "pioneers": {
            "tagline": "阿诺索夫测地流、一致双曲性与强遍历混合。",
            "analogy": "阿达马与阿诺索夫证明：在任何负曲率曲面上，测地流都是一致双曲的，其柯尔莫哥洛夫-西奈熵严格为正，处处体现出极端敏感与混合。",
            "rules": [
              "阿诺索夫流切空间双曲不变子丛正交分解。",
              "柯尔莫哥洛夫物理度量熵严格正定。",
              "Lean 4 微分流与测地完备性形式化。"
            ],
            "mystery": "交互式哈密顿数值积分器可在双孔高阶曲面上实时追踪粒子弹跳，在庞加莱截面上呈现壮丽的分形混沌散点图。",
            "funFact": "科兹洛夫定理是人类确立高维拓扑结构对物理可预测性拥有绝对决定权的里程碑杰作。"
          }
        },
        "history": [
          {
            "year": "1892",
            "author": "亨利·庞加莱",
            "note": "在三体问题中首次证明解析第一积分的不存在性。"
          },
          {
            "year": "1967",
            "author": "德米特里·阿诺索夫",
            "note": "系统建立阿诺索夫双曲动力系统理论。"
          },
          {
            "year": "1979",
            "author": "瓦列里·科兹洛夫",
            "note": "彻底证明亏格大于 1 曲面测地流的解析不可积性！"
          }
        ]
      },
      "zh-Hant": {
        "name": "Kozlov's Non-Integrability Conjecture",
        "subtitle": "Non-Existence of Analytic Conserved Quantities for Surfaces of Genus $g > 1$ (Solved in 1979)",
        "field": "Hamiltonian Dynamics & Riemannian Geometry",
        "statusBadge": "PROVEN THEOREM (1979)",
        "grades": {
          "explorers": {
            "tagline": "If you shoot a hockey puck on a two-hole doughnut, can any magic formula ever predict its perpetual trajectory?",
            "analogy": "In classical mechanics, Kepler's planetary orbits are 'integrable'—conserved quantities like energy and angular momentum keep the motion completely predictable. But in 1979, Soviet mathematician Valery Kozlov investigated geodesic motion on compact surfaces with $g \\ge 2$ holes (like a pretzel). Kozlov proved: On ANY such surface with ANY smooth metric, there CANNOT exist a single additional analytic first integral (conserved quantity) beyond the trivial kinetic energy! The topology of the surface FORCES the geodesic flow to be perpetually chaotic!",
            "rules": [
              "Compact 2D surface M of genus g ≥ 2.",
              "Geodesic Hamiltonian H(x, p) = 1/2 g^{ij}(x) p_i p_j on cotangent bundle T*M.",
              "First integral: Function F: T*M → ℝ with Poisson bracket {H, F} = 0.",
              "Kozlov's Theorem (1979): No additional independent real-analytic first integral exists!"
            ],
            "mystery": "The theorem proves that topological complexity alone (holes in space) acts as an absolute barrier preventing mechanical systems from being solved with exact formulas!",
            "funFact": "If g = 1 (a standard torus/doughnut), geodesic flow with a flat metric IS integrable and has constant momentum along both cycles!"
          },
          "investigators": {
            "tagline": "Maupertuis' principle, Poincaré-Birkhoff theorem, and topological entropy.",
            "analogy": "Kozlov's proof combined variational methods on closed geodesics with Poincaré's classic perturbation technique across fundamental group loops.",
            "rules": [
              "Poisson bracket {H, F} = 0.",
              "Fundamental group π₁(M_g) exponential growth.",
              "Lean 4 Mathlib symplectic geometry."
            ],
            "mystery": "Does non-integrability hold for infinitely differentiable (C^∞) first integrals, not just analytic ones?",
            "funFact": "Valery Kozlov proved the analytic theorem in 1979."
          },
          "pioneers": {
            "tagline": "Anosov geodesic flows, hyperbolicity, and mixing.",
            "analogy": "On surfaces with negative curvature, Hadamard and Anosov proved the geodesic flow is uniformly hyperbolic, possessing positive Kolmogorov-Sinai entropy.",
            "rules": [
              "Anosov splitting: T(T¹M) = E^s ⊕ E^u ⊕ E^c.",
              "Kolmogorov-Sinai metric entropy > 0.",
              "Lean 4 dynamical flows."
            ],
            "mystery": "Interactive Hamiltonian integrators trace particle trajectories on a 2-hole genus-2 surface, generating chaotic Poincaré puncture plots.",
            "funFact": "Kozlov's Theorem is the definitive milestone establishing the absolute dominion of topology over physical predictability."
          }
        },
        "history": [
          {
            "year": "1892",
            "author": "Henri Poincaré",
            "note": "Proves non-existence of analytic first integrals in the 3-body problem."
          },
          {
            "year": "1967",
            "author": "Dmitri Anosov",
            "note": "Establishes hyperbolic theory of dynamical systems (Anosov flows)."
          },
          {
            "year": "1979",
            "author": "Valery Kozlov",
            "note": "Proves topological non-integrability of geodesic flows for genus g > 1."
          }
        ]
      }
    }
  },
  {
    "id": "pillai",
    "icon": "💥",
    "difficulty": "All Ages",
    "domain": "algebra-analysis",
    "category": "algebra-analysis",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Data.Nat.Basic\n-- Pillai's Conjecture (Subbayya Sivasankaranarayana Pillai, 1931)\n-- For any positive integer C, the equation A^x - B^y = C has only finitely many positive integer solutions with x, y ≥ 2.",
    "locales": {
      "en": {
        "name": "Pillai's Conjecture",
        "subtitle": "Differences Between Perfect Powers: $A^x - B^y = C$ Has Only Finitely Many Solutions",
        "field": "Diophantine Equations & Transcendental Number Theory",
        "statusBadge": "OPEN SINCE 1931",
        "grades": {
          "explorers": {
            "tagline": "Can two giant squares, cubes, or powers of numbers land just a few steps apart infinitely many times?",
            "analogy": "In 1844, Eugène Catalan conjectured that the ONLY two consecutive powers of integers are 8 and 9 ($3^2 - 2^3 = 1$), which Preda Mihăilescu famously proved in 2002. But in 1931, brilliant Indian mathematician S. S. Pillai asked a vastly grander question: What if the gap is NOT 1, but ANY fixed number $C$ (like 2, 3, 10, or 2026)? Pillai conjectured: For ANY positive integer $C$, the equation $A^x - B^y = C$ (with $x, y \\ge 2$) can have ONLY A FINITE NUMBER of integer solutions! It remains one of the grandest open problems in Diophantine analysis!",
            "rules": [
              "Diophantine equation A^x - B^y = C with fixed integer C ≥ 1.",
              "Exponents x, y ≥ 2, base integers A, B ≥ 2.",
              "Catalan case C = 1: 3² - 2³ = 1 is the unique solution (Mihăilescu 2002).",
              "Pillai's Conjecture: For ANY C, the number of solutions (A, B, x, y) is finite!"
            ],
            "mystery": "S. S. Pillai was one of the most brilliant Indian mathematicians after Ramanujan; tragically, he died in a 1950 airplane crash near Cairo on his way to the International Congress of Mathematicians at Princeton.",
            "funFact": "Pillai's conjecture would be an immediate, direct consequence of the famous ABC Conjecture!"
          },
          "investigators": {
            "tagline": "Baker's linear forms in logarithms and Thue-Siegel-Roth theorem.",
            "analogy": "Alan Baker's Fields Medal work (1966) on linear forms in logarithms gives effective bounds when the bases A and B are fixed, but the conjecture is wide open when the bases are free variables.",
            "rules": [
              "Baker's inequality: |x log A - y log B - log C| > exp(-C' log A log B).",
              "Tijdeman's theorem (1976) on consecutive powers.",
              "Lean 4 Mathlib Diophantine equations."
            ],
            "mystery": "Can the ABC conjecture or p-adic Hodge theory provide an effective bound on the maximum size of solutions?",
            "funFact": "Subbayya Sivasankaranarayana Pillai proposed the conjecture in 1931."
          },
          "pioneers": {
            "tagline": "Faltings' theorem on rational points on curves and modularity.",
            "analogy": "Each fixed exponent pair (x, y) defines a curve of genus ≥ 1, which by Faltings has only finitely many integer points.",
            "rules": [
              "Faltings theorem: Genus g ≥ 2 curves have finite rational points.",
              "Siegel's theorem on integral points.",
              "Formal verification in Lean 4."
            ],
            "mystery": "Distributed number theory projects have calculated all solutions to A^x - B^y = C for all C ≤ 1000 and powers up to 10^{18}.",
            "funFact": "Pillai's Conjecture is the sublime pinnacle of exponential Diophantine equations."
          }
        },
        "history": [
          {
            "year": "1931",
            "author": "S. S. Pillai",
            "note": "Formulates the general difference conjecture for powers."
          },
          {
            "year": "1976",
            "author": "Robert Tijdeman",
            "note": "Proves there is an effectively computable bound on solutions to Catalan's equation."
          },
          {
            "year": "2002",
            "author": "Preda Mihăilescu",
            "note": "Delivers complete proof of Catalan's conjecture (case C = 1)."
          }
        ]
      },
      "de": {
        "name": "Pillai's Conjecture",
        "subtitle": "Differences Between Perfect Powers: $A^x - B^y = C$ Has Only Finitely Many Solutions",
        "field": "Diophantine Equations & Transcendental Number Theory",
        "statusBadge": "OPEN SINCE 1931",
        "grades": {
          "explorers": {
            "tagline": "Can two giant squares, cubes, or powers of numbers land just a few steps apart infinitely many times?",
            "analogy": "In 1844, Eugène Catalan conjectured that the ONLY two consecutive powers of integers are 8 and 9 ($3^2 - 2^3 = 1$), which Preda Mihăilescu famously proved in 2002. But in 1931, brilliant Indian mathematician S. S. Pillai asked a vastly grander question: What if the gap is NOT 1, but ANY fixed number $C$ (like 2, 3, 10, or 2026)? Pillai conjectured: For ANY positive integer $C$, the equation $A^x - B^y = C$ (with $x, y \\ge 2$) can have ONLY A FINITE NUMBER of integer solutions! It remains one of the grandest open problems in Diophantine analysis!",
            "rules": [
              "Diophantine equation A^x - B^y = C with fixed integer C ≥ 1.",
              "Exponents x, y ≥ 2, base integers A, B ≥ 2.",
              "Catalan case C = 1: 3² - 2³ = 1 is the unique solution (Mihăilescu 2002).",
              "Pillai's Conjecture: For ANY C, the number of solutions (A, B, x, y) is finite!"
            ],
            "mystery": "S. S. Pillai was one of the most brilliant Indian mathematicians after Ramanujan; tragically, he died in a 1950 airplane crash near Cairo on his way to the International Congress of Mathematicians at Princeton.",
            "funFact": "Pillai's conjecture would be an immediate, direct consequence of the famous ABC Conjecture!"
          },
          "investigators": {
            "tagline": "Baker's linear forms in logarithms and Thue-Siegel-Roth theorem.",
            "analogy": "Alan Baker's Fields Medal work (1966) on linear forms in logarithms gives effective bounds when the bases A and B are fixed, but the conjecture is wide open when the bases are free variables.",
            "rules": [
              "Baker's inequality: |x log A - y log B - log C| > exp(-C' log A log B).",
              "Tijdeman's theorem (1976) on consecutive powers.",
              "Lean 4 Mathlib Diophantine equations."
            ],
            "mystery": "Can the ABC conjecture or p-adic Hodge theory provide an effective bound on the maximum size of solutions?",
            "funFact": "Subbayya Sivasankaranarayana Pillai proposed the conjecture in 1931."
          },
          "pioneers": {
            "tagline": "Faltings' theorem on rational points on curves and modularity.",
            "analogy": "Each fixed exponent pair (x, y) defines a curve of genus ≥ 1, which by Faltings has only finitely many integer points.",
            "rules": [
              "Faltings theorem: Genus g ≥ 2 curves have finite rational points.",
              "Siegel's theorem on integral points.",
              "Formal verification in Lean 4."
            ],
            "mystery": "Distributed number theory projects have calculated all solutions to A^x - B^y = C for all C ≤ 1000 and powers up to 10^{18}.",
            "funFact": "Pillai's Conjecture is the sublime pinnacle of exponential Diophantine equations."
          }
        },
        "history": [
          {
            "year": "1931",
            "author": "S. S. Pillai",
            "note": "Formulates the general difference conjecture for powers."
          },
          {
            "year": "1976",
            "author": "Robert Tijdeman",
            "note": "Proves there is an effectively computable bound on solutions to Catalan's equation."
          },
          {
            "year": "2002",
            "author": "Preda Mihăilescu",
            "note": "Delivers complete proof of Catalan's conjecture (case C = 1)."
          }
        ]
      },
      "fr": {
        "name": "Pillai's Conjecture",
        "subtitle": "Differences Between Perfect Powers: $A^x - B^y = C$ Has Only Finitely Many Solutions",
        "field": "Diophantine Equations & Transcendental Number Theory",
        "statusBadge": "OPEN SINCE 1931",
        "grades": {
          "explorers": {
            "tagline": "Can two giant squares, cubes, or powers of numbers land just a few steps apart infinitely many times?",
            "analogy": "In 1844, Eugène Catalan conjectured that the ONLY two consecutive powers of integers are 8 and 9 ($3^2 - 2^3 = 1$), which Preda Mihăilescu famously proved in 2002. But in 1931, brilliant Indian mathematician S. S. Pillai asked a vastly grander question: What if the gap is NOT 1, but ANY fixed number $C$ (like 2, 3, 10, or 2026)? Pillai conjectured: For ANY positive integer $C$, the equation $A^x - B^y = C$ (with $x, y \\ge 2$) can have ONLY A FINITE NUMBER of integer solutions! It remains one of the grandest open problems in Diophantine analysis!",
            "rules": [
              "Diophantine equation A^x - B^y = C with fixed integer C ≥ 1.",
              "Exponents x, y ≥ 2, base integers A, B ≥ 2.",
              "Catalan case C = 1: 3² - 2³ = 1 is the unique solution (Mihăilescu 2002).",
              "Pillai's Conjecture: For ANY C, the number of solutions (A, B, x, y) is finite!"
            ],
            "mystery": "S. S. Pillai was one of the most brilliant Indian mathematicians after Ramanujan; tragically, he died in a 1950 airplane crash near Cairo on his way to the International Congress of Mathematicians at Princeton.",
            "funFact": "Pillai's conjecture would be an immediate, direct consequence of the famous ABC Conjecture!"
          },
          "investigators": {
            "tagline": "Baker's linear forms in logarithms and Thue-Siegel-Roth theorem.",
            "analogy": "Alan Baker's Fields Medal work (1966) on linear forms in logarithms gives effective bounds when the bases A and B are fixed, but the conjecture is wide open when the bases are free variables.",
            "rules": [
              "Baker's inequality: |x log A - y log B - log C| > exp(-C' log A log B).",
              "Tijdeman's theorem (1976) on consecutive powers.",
              "Lean 4 Mathlib Diophantine equations."
            ],
            "mystery": "Can the ABC conjecture or p-adic Hodge theory provide an effective bound on the maximum size of solutions?",
            "funFact": "Subbayya Sivasankaranarayana Pillai proposed the conjecture in 1931."
          },
          "pioneers": {
            "tagline": "Faltings' theorem on rational points on curves and modularity.",
            "analogy": "Each fixed exponent pair (x, y) defines a curve of genus ≥ 1, which by Faltings has only finitely many integer points.",
            "rules": [
              "Faltings theorem: Genus g ≥ 2 curves have finite rational points.",
              "Siegel's theorem on integral points.",
              "Formal verification in Lean 4."
            ],
            "mystery": "Distributed number theory projects have calculated all solutions to A^x - B^y = C for all C ≤ 1000 and powers up to 10^{18}.",
            "funFact": "Pillai's Conjecture is the sublime pinnacle of exponential Diophantine equations."
          }
        },
        "history": [
          {
            "year": "1931",
            "author": "S. S. Pillai",
            "note": "Formulates the general difference conjecture for powers."
          },
          {
            "year": "1976",
            "author": "Robert Tijdeman",
            "note": "Proves there is an effectively computable bound on solutions to Catalan's equation."
          },
          {
            "year": "2002",
            "author": "Preda Mihăilescu",
            "note": "Delivers complete proof of Catalan's conjecture (case C = 1)."
          }
        ]
      },
      "it": {
        "name": "Pillai's Conjecture",
        "subtitle": "Differences Between Perfect Powers: $A^x - B^y = C$ Has Only Finitely Many Solutions",
        "field": "Diophantine Equations & Transcendental Number Theory",
        "statusBadge": "OPEN SINCE 1931",
        "grades": {
          "explorers": {
            "tagline": "Can two giant squares, cubes, or powers of numbers land just a few steps apart infinitely many times?",
            "analogy": "In 1844, Eugène Catalan conjectured that the ONLY two consecutive powers of integers are 8 and 9 ($3^2 - 2^3 = 1$), which Preda Mihăilescu famously proved in 2002. But in 1931, brilliant Indian mathematician S. S. Pillai asked a vastly grander question: What if the gap is NOT 1, but ANY fixed number $C$ (like 2, 3, 10, or 2026)? Pillai conjectured: For ANY positive integer $C$, the equation $A^x - B^y = C$ (with $x, y \\ge 2$) can have ONLY A FINITE NUMBER of integer solutions! It remains one of the grandest open problems in Diophantine analysis!",
            "rules": [
              "Diophantine equation A^x - B^y = C with fixed integer C ≥ 1.",
              "Exponents x, y ≥ 2, base integers A, B ≥ 2.",
              "Catalan case C = 1: 3² - 2³ = 1 is the unique solution (Mihăilescu 2002).",
              "Pillai's Conjecture: For ANY C, the number of solutions (A, B, x, y) is finite!"
            ],
            "mystery": "S. S. Pillai was one of the most brilliant Indian mathematicians after Ramanujan; tragically, he died in a 1950 airplane crash near Cairo on his way to the International Congress of Mathematicians at Princeton.",
            "funFact": "Pillai's conjecture would be an immediate, direct consequence of the famous ABC Conjecture!"
          },
          "investigators": {
            "tagline": "Baker's linear forms in logarithms and Thue-Siegel-Roth theorem.",
            "analogy": "Alan Baker's Fields Medal work (1966) on linear forms in logarithms gives effective bounds when the bases A and B are fixed, but the conjecture is wide open when the bases are free variables.",
            "rules": [
              "Baker's inequality: |x log A - y log B - log C| > exp(-C' log A log B).",
              "Tijdeman's theorem (1976) on consecutive powers.",
              "Lean 4 Mathlib Diophantine equations."
            ],
            "mystery": "Can the ABC conjecture or p-adic Hodge theory provide an effective bound on the maximum size of solutions?",
            "funFact": "Subbayya Sivasankaranarayana Pillai proposed the conjecture in 1931."
          },
          "pioneers": {
            "tagline": "Faltings' theorem on rational points on curves and modularity.",
            "analogy": "Each fixed exponent pair (x, y) defines a curve of genus ≥ 1, which by Faltings has only finitely many integer points.",
            "rules": [
              "Faltings theorem: Genus g ≥ 2 curves have finite rational points.",
              "Siegel's theorem on integral points.",
              "Formal verification in Lean 4."
            ],
            "mystery": "Distributed number theory projects have calculated all solutions to A^x - B^y = C for all C ≤ 1000 and powers up to 10^{18}.",
            "funFact": "Pillai's Conjecture is the sublime pinnacle of exponential Diophantine equations."
          }
        },
        "history": [
          {
            "year": "1931",
            "author": "S. S. Pillai",
            "note": "Formulates the general difference conjecture for powers."
          },
          {
            "year": "1976",
            "author": "Robert Tijdeman",
            "note": "Proves there is an effectively computable bound on solutions to Catalan's equation."
          },
          {
            "year": "2002",
            "author": "Preda Mihăilescu",
            "note": "Delivers complete proof of Catalan's conjecture (case C = 1)."
          }
        ]
      },
      "ja": {
        "name": "Pillai's Conjecture",
        "subtitle": "Differences Between Perfect Powers: $A^x - B^y = C$ Has Only Finitely Many Solutions",
        "field": "Diophantine Equations & Transcendental Number Theory",
        "statusBadge": "OPEN SINCE 1931",
        "grades": {
          "explorers": {
            "tagline": "Can two giant squares, cubes, or powers of numbers land just a few steps apart infinitely many times?",
            "analogy": "In 1844, Eugène Catalan conjectured that the ONLY two consecutive powers of integers are 8 and 9 ($3^2 - 2^3 = 1$), which Preda Mihăilescu famously proved in 2002. But in 1931, brilliant Indian mathematician S. S. Pillai asked a vastly grander question: What if the gap is NOT 1, but ANY fixed number $C$ (like 2, 3, 10, or 2026)? Pillai conjectured: For ANY positive integer $C$, the equation $A^x - B^y = C$ (with $x, y \\ge 2$) can have ONLY A FINITE NUMBER of integer solutions! It remains one of the grandest open problems in Diophantine analysis!",
            "rules": [
              "Diophantine equation A^x - B^y = C with fixed integer C ≥ 1.",
              "Exponents x, y ≥ 2, base integers A, B ≥ 2.",
              "Catalan case C = 1: 3² - 2³ = 1 is the unique solution (Mihăilescu 2002).",
              "Pillai's Conjecture: For ANY C, the number of solutions (A, B, x, y) is finite!"
            ],
            "mystery": "S. S. Pillai was one of the most brilliant Indian mathematicians after Ramanujan; tragically, he died in a 1950 airplane crash near Cairo on his way to the International Congress of Mathematicians at Princeton.",
            "funFact": "Pillai's conjecture would be an immediate, direct consequence of the famous ABC Conjecture!"
          },
          "investigators": {
            "tagline": "Baker's linear forms in logarithms and Thue-Siegel-Roth theorem.",
            "analogy": "Alan Baker's Fields Medal work (1966) on linear forms in logarithms gives effective bounds when the bases A and B are fixed, but the conjecture is wide open when the bases are free variables.",
            "rules": [
              "Baker's inequality: |x log A - y log B - log C| > exp(-C' log A log B).",
              "Tijdeman's theorem (1976) on consecutive powers.",
              "Lean 4 Mathlib Diophantine equations."
            ],
            "mystery": "Can the ABC conjecture or p-adic Hodge theory provide an effective bound on the maximum size of solutions?",
            "funFact": "Subbayya Sivasankaranarayana Pillai proposed the conjecture in 1931."
          },
          "pioneers": {
            "tagline": "Faltings' theorem on rational points on curves and modularity.",
            "analogy": "Each fixed exponent pair (x, y) defines a curve of genus ≥ 1, which by Faltings has only finitely many integer points.",
            "rules": [
              "Faltings theorem: Genus g ≥ 2 curves have finite rational points.",
              "Siegel's theorem on integral points.",
              "Formal verification in Lean 4."
            ],
            "mystery": "Distributed number theory projects have calculated all solutions to A^x - B^y = C for all C ≤ 1000 and powers up to 10^{18}.",
            "funFact": "Pillai's Conjecture is the sublime pinnacle of exponential Diophantine equations."
          }
        },
        "history": [
          {
            "year": "1931",
            "author": "S. S. Pillai",
            "note": "Formulates the general difference conjecture for powers."
          },
          {
            "year": "1976",
            "author": "Robert Tijdeman",
            "note": "Proves there is an effectively computable bound on solutions to Catalan's equation."
          },
          {
            "year": "2002",
            "author": "Preda Mihăilescu",
            "note": "Delivers complete proof of Catalan's conjecture (case C = 1)."
          }
        ]
      },
      "ko": {
        "name": "Pillai's Conjecture",
        "subtitle": "Differences Between Perfect Powers: $A^x - B^y = C$ Has Only Finitely Many Solutions",
        "field": "Diophantine Equations & Transcendental Number Theory",
        "statusBadge": "OPEN SINCE 1931",
        "grades": {
          "explorers": {
            "tagline": "Can two giant squares, cubes, or powers of numbers land just a few steps apart infinitely many times?",
            "analogy": "In 1844, Eugène Catalan conjectured that the ONLY two consecutive powers of integers are 8 and 9 ($3^2 - 2^3 = 1$), which Preda Mihăilescu famously proved in 2002. But in 1931, brilliant Indian mathematician S. S. Pillai asked a vastly grander question: What if the gap is NOT 1, but ANY fixed number $C$ (like 2, 3, 10, or 2026)? Pillai conjectured: For ANY positive integer $C$, the equation $A^x - B^y = C$ (with $x, y \\ge 2$) can have ONLY A FINITE NUMBER of integer solutions! It remains one of the grandest open problems in Diophantine analysis!",
            "rules": [
              "Diophantine equation A^x - B^y = C with fixed integer C ≥ 1.",
              "Exponents x, y ≥ 2, base integers A, B ≥ 2.",
              "Catalan case C = 1: 3² - 2³ = 1 is the unique solution (Mihăilescu 2002).",
              "Pillai's Conjecture: For ANY C, the number of solutions (A, B, x, y) is finite!"
            ],
            "mystery": "S. S. Pillai was one of the most brilliant Indian mathematicians after Ramanujan; tragically, he died in a 1950 airplane crash near Cairo on his way to the International Congress of Mathematicians at Princeton.",
            "funFact": "Pillai's conjecture would be an immediate, direct consequence of the famous ABC Conjecture!"
          },
          "investigators": {
            "tagline": "Baker's linear forms in logarithms and Thue-Siegel-Roth theorem.",
            "analogy": "Alan Baker's Fields Medal work (1966) on linear forms in logarithms gives effective bounds when the bases A and B are fixed, but the conjecture is wide open when the bases are free variables.",
            "rules": [
              "Baker's inequality: |x log A - y log B - log C| > exp(-C' log A log B).",
              "Tijdeman's theorem (1976) on consecutive powers.",
              "Lean 4 Mathlib Diophantine equations."
            ],
            "mystery": "Can the ABC conjecture or p-adic Hodge theory provide an effective bound on the maximum size of solutions?",
            "funFact": "Subbayya Sivasankaranarayana Pillai proposed the conjecture in 1931."
          },
          "pioneers": {
            "tagline": "Faltings' theorem on rational points on curves and modularity.",
            "analogy": "Each fixed exponent pair (x, y) defines a curve of genus ≥ 1, which by Faltings has only finitely many integer points.",
            "rules": [
              "Faltings theorem: Genus g ≥ 2 curves have finite rational points.",
              "Siegel's theorem on integral points.",
              "Formal verification in Lean 4."
            ],
            "mystery": "Distributed number theory projects have calculated all solutions to A^x - B^y = C for all C ≤ 1000 and powers up to 10^{18}.",
            "funFact": "Pillai's Conjecture is the sublime pinnacle of exponential Diophantine equations."
          }
        },
        "history": [
          {
            "year": "1931",
            "author": "S. S. Pillai",
            "note": "Formulates the general difference conjecture for powers."
          },
          {
            "year": "1976",
            "author": "Robert Tijdeman",
            "note": "Proves there is an effectively computable bound on solutions to Catalan's equation."
          },
          {
            "year": "2002",
            "author": "Preda Mihăilescu",
            "note": "Delivers complete proof of Catalan's conjecture (case C = 1)."
          }
        ]
      },
      "zh-Hans": {
        "name": "皮莱猜想",
        "subtitle": "任意指定间隙 $C$ 的完全幂之差 $A^x - B^y = C$ 只有有限多组整数解（卡塔兰猜想的宏伟推广）",
        "field": "丢番图方程 & 超越数论与 ABC 猜想",
        "statusBadge": "自1931年高悬至今",
        "grades": {
          "explorers": {
            "tagline": "在这个无限大的数字世界里，两个巨大的完全平方数、立方数或高次方数，能不能无数次刚好相差一个指定的微小间隔？",
            "analogy": "1844年卡塔兰猜想：在所有大于 1 的完全幂数（如 4, 8, 9, 16, 25, 27...）中，唯一相差为 1 的相邻完全幂只有 8 和 9（即 $3^2 - 2^3 = 1$），该猜想已于2002年被米哈伊列斯库完全攻克。然而早在1931年，卓越的印度数学家苏巴亚·皮莱提出了一个更加气势恢宏的终极推广：如果完全幂之间的差值不是 1，而是任意一个指定的正整数 $C$（比如 2, 3, 10 甚至 2026）呢？皮莱猜想断言：对于任意给定的常数 $C$，不定方程 $A^x - B^y = C$（其中指数 $x, y \\ge 2$）在全宇宙中最多只能有‘有限多组正整数解’！换言之，完全幂之间的距离随着数值膨胀必定趋于无限大！",
            "rules": [
              "固定整数常数 $C \\ge 1$ 的丢番图方程 $A^x - B^y = C$。",
              "底数 $A, B \\ge 2$，指数 $x, y \\ge 2$。",
              "卡塔兰特例 $C=1$：已证唯一解为 $3^2 - 2^3 = 1$（2002年获证）。",
              "皮莱猜想：对任意给定的 $C$，该方程的解集 $(A, B, x, y)$ 永远是绝对有限的！"
            ],
            "mystery": "皮莱被公认为继拉马努金之后印度最杰出的数学天才之一；令人扼腕叹息的是，1950年他受邀前往普林斯顿参加国际数学家大会途中，在开罗附近遭遇空难不幸英年早逝，年仅49岁。",
            "funFact": "皮莱猜想是举世闻名的千禧数论殿堂——ABC 猜想最直接、最自然的推论之一！"
          },
          "investigators": {
            "tagline": "贝克对数线性型理论与图厄-西格尔-罗斯丢番图逼近定理。",
            "analogy": "阿兰·贝克因对数线性型理论斩获1966年菲尔兹奖，该理论彻底解决了当底数 $A$ 和 $B$ 固定时的有限性；但当底数可以任意变动时，整个猜想依然固若金汤。",
            "rules": [
              "贝克对数线性型下界估计公式。",
              "蒂德曼 (1976) 连续完全幂有界性定理。",
              "Lean 4 丢番图方程形式化。"
            ],
            "mystery": "能否借助 ABC 猜想或 $p$-进霍奇理论为解的最大上界给出明确的计算公式？",
            "funFact": "苏巴亚·皮莱于1931年提出。"
          },
          "pioneers": {
            "tagline": "法尔廷斯代数曲线有理点有限性定理（莫德尔猜想）与模性。",
            "analogy": "当指数对 $(x, y)$ 固定时，方程定义了一条亏格大于或等于 1 的代数曲线，法尔廷斯定理保证了整数点的绝对有限性；核心难题在于控制无穷多可能的指数对。",
            "rules": [
              "法尔廷斯代数曲线有理点有限性定理形式化。",
              "西格尔整点有限性定理。",
              "Lean 4 Mathlib 代数几何曲线库。"
            ],
            "mystery": "全球分布式数论计算项目已穷尽搜索了 $C \\le 1000$ 以及底数直到 $10^{18}$ 的所有数值，解的分布极其稀疏，有力支持猜想！",
            "funFact": "皮莱猜想是指数组合丢番图方程皇冠上最璀璨圣洁的终极明珠。"
          }
        },
        "history": [
          {
            "year": "1931",
            "author": "苏巴亚·皮莱",
            "note": "正式提出完全幂之差有限性猜想。"
          },
          {
            "year": "1976",
            "author": "罗伯特·蒂德曼",
            "note": "运用贝克方法证明卡塔兰方程解的绝对有限性。"
          },
          {
            "year": "2002",
            "author": "普雷达·米哈伊列斯库",
            "note": "彻底证明 C=1 的卡塔兰猜想！"
          }
        ]
      },
      "zh-Hant": {
        "name": "Pillai's Conjecture",
        "subtitle": "Differences Between Perfect Powers: $A^x - B^y = C$ Has Only Finitely Many Solutions",
        "field": "Diophantine Equations & Transcendental Number Theory",
        "statusBadge": "OPEN SINCE 1931",
        "grades": {
          "explorers": {
            "tagline": "Can two giant squares, cubes, or powers of numbers land just a few steps apart infinitely many times?",
            "analogy": "In 1844, Eugène Catalan conjectured that the ONLY two consecutive powers of integers are 8 and 9 ($3^2 - 2^3 = 1$), which Preda Mihăilescu famously proved in 2002. But in 1931, brilliant Indian mathematician S. S. Pillai asked a vastly grander question: What if the gap is NOT 1, but ANY fixed number $C$ (like 2, 3, 10, or 2026)? Pillai conjectured: For ANY positive integer $C$, the equation $A^x - B^y = C$ (with $x, y \\ge 2$) can have ONLY A FINITE NUMBER of integer solutions! It remains one of the grandest open problems in Diophantine analysis!",
            "rules": [
              "Diophantine equation A^x - B^y = C with fixed integer C ≥ 1.",
              "Exponents x, y ≥ 2, base integers A, B ≥ 2.",
              "Catalan case C = 1: 3² - 2³ = 1 is the unique solution (Mihăilescu 2002).",
              "Pillai's Conjecture: For ANY C, the number of solutions (A, B, x, y) is finite!"
            ],
            "mystery": "S. S. Pillai was one of the most brilliant Indian mathematicians after Ramanujan; tragically, he died in a 1950 airplane crash near Cairo on his way to the International Congress of Mathematicians at Princeton.",
            "funFact": "Pillai's conjecture would be an immediate, direct consequence of the famous ABC Conjecture!"
          },
          "investigators": {
            "tagline": "Baker's linear forms in logarithms and Thue-Siegel-Roth theorem.",
            "analogy": "Alan Baker's Fields Medal work (1966) on linear forms in logarithms gives effective bounds when the bases A and B are fixed, but the conjecture is wide open when the bases are free variables.",
            "rules": [
              "Baker's inequality: |x log A - y log B - log C| > exp(-C' log A log B).",
              "Tijdeman's theorem (1976) on consecutive powers.",
              "Lean 4 Mathlib Diophantine equations."
            ],
            "mystery": "Can the ABC conjecture or p-adic Hodge theory provide an effective bound on the maximum size of solutions?",
            "funFact": "Subbayya Sivasankaranarayana Pillai proposed the conjecture in 1931."
          },
          "pioneers": {
            "tagline": "Faltings' theorem on rational points on curves and modularity.",
            "analogy": "Each fixed exponent pair (x, y) defines a curve of genus ≥ 1, which by Faltings has only finitely many integer points.",
            "rules": [
              "Faltings theorem: Genus g ≥ 2 curves have finite rational points.",
              "Siegel's theorem on integral points.",
              "Formal verification in Lean 4."
            ],
            "mystery": "Distributed number theory projects have calculated all solutions to A^x - B^y = C for all C ≤ 1000 and powers up to 10^{18}.",
            "funFact": "Pillai's Conjecture is the sublime pinnacle of exponential Diophantine equations."
          }
        },
        "history": [
          {
            "year": "1931",
            "author": "S. S. Pillai",
            "note": "Formulates the general difference conjecture for powers."
          },
          {
            "year": "1976",
            "author": "Robert Tijdeman",
            "note": "Proves there is an effectively computable bound on solutions to Catalan's equation."
          },
          {
            "year": "2002",
            "author": "Preda Mihăilescu",
            "note": "Delivers complete proof of Catalan's conjecture (case C = 1)."
          }
        ]
      }
    }
  }
];
