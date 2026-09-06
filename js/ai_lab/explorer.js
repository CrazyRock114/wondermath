/**
 * AI Co-Mathematician Exploration Workbench
 * Formulate & test derivative conjectures with full 8-language localization support.
 */

import { i18n } from "../i18n/i18n.js";

export class AIConjectureExplorer {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.currentTopic = "collatz_5n1";
    this.presetHypotheses = {
      "collatz_5n1": {
            "base": "Collatz Conjecture",
            "interactiveTest": "5n+1",
            "leanProofSnippet": "-- 5n+1 has known cycle avoiding 1:\ntheorem collatz_5n_cycle : ∃ cycle, 1 ∉ cycle := by sorry",
            "locales": {
                  "en": {
                        "title": "The 5x + 1 Hailstone Variant",
                        "prompt": "What happens if we change the odd rule from 3n + 1 to 5n + 1?",
                        "verdict": "❌ DISPROVEN (Diverges or Traps in Alternate Cycles)",
                        "gradeExplanation": "In 3n + 1, dividing by 2 happens often enough on average to pull numbers down. But with 5n + 1, multiplying by 5 makes numbers grow faster than divisions by 2 can shrink them! Most numbers shoot toward infinity, and some get caught in loops like 13 → 66 → 33 → 166 → 83...",
                        "challengeQuestion": "Can you find what happens to the number 7 under the 5n + 1 rule?"
                  },
                  "de": {
                        "title": "Die 5x + 1 Variante",
                        "prompt": "Was passiert, wenn wir ungerade Zahlen mit 5 multiplizieren und 1 addieren (5n + 1)?",
                        "verdict": "❌ WIDERLEGT (Divergiert oder gerät in andere Zyklen)",
                        "gradeExplanation": "Bei 3n + 1 zieht das Teilen durch 2 die Zahlen im Schnitt nach unten. Bei 5n + 1 wachsen Zahlen schneller, als das Teilen sie verkleinern kann! Viele Bahnen schießen ins Unendliche oder fangen sich in Schleifen wie 13 → 66 → 33 → 166 → 83...",
                        "challengeQuestion": "Was passiert mit der Zahl 7 unter der Regel 5n + 1?"
                  },
                  "fr": {
                        "title": "La Variante 5x + 1",
                        "prompt": "Que se passe-t-il si la règle impaire devient 5n + 1 au lieu de 3n + 1 ?",
                        "verdict": "❌ RÉFUTÉ (Divergence ou cycles secondaires)",
                        "gradeExplanation": "Avec 5n + 1, la multiplication par 5 dépasse largement la division par 2. Presque toutes les trajectoires explosent vers l'infini ou restent piégées dans des boucles comme 13 → 66 → 33 → 166...",
                        "challengeQuestion": "Que devient le nombre 7 avec la règle 5n + 1 ?"
                  },
                  "it": {
                        "title": "La Variante 5x + 1",
                        "prompt": "Cosa accade se cambiamo la regola dispari da 3n + 1 a 5n + 1?",
                        "verdict": "❌ CONFUTATO (Diverge o cade in altri cicli)",
                        "gradeExplanation": "Con 5n + 1 la moltiplicazione per 5 supera la divisione per 2. Le traiettorie esplodono all'infinito o finiscono in cicli alternativi come 13 → 66 → 33 → 166 → 83...",
                        "challengeQuestion": "Cosa accade al numero 7 con la regola 5n + 1?"
                  },
                  "ja": {
                        "title": "5x + 1 ルール変種の研究",
                        "prompt": "奇数のルールを「3n + 1」から「5n + 1」に変えると何が起きる？",
                        "verdict": "❌ 成立しない（無限大へ発散するか、別のループにトラップされる）",
                        "gradeExplanation": "3n + 1では平均すると2で割る回数が十分多く、数を引き下げてくれます。しかし5n + 1では5倍の威力が強すぎて、2で割る力に打ち勝ってしまいます！ 多くの数が無限大へと発散し、一部は「13 → 66 → 33 → 166 → 83...」のような別ループに閉じ込められます。",
                        "challengeQuestion": "数字「7」から5n + 1ルールを始めるとどうなるか計算してみよう！"
                  },
                  "ko": {
                        "title": "5x + 1 규칙 변형 연구",
                        "prompt": "홀수 규칙을 3n + 1 대신 5n + 1로 바꾸면 어떻게 될까요?",
                        "verdict": "❌ 성립하지 않음 (무한 발산하거나 다른 순환에 갇힘)",
                        "gradeExplanation": "3n + 1에서는 2로 나누는 효과가 수를 아래로 끌어내려 주지만, 5n + 1은 5배의 증가 속도가 너무 빨라 거의 모든 수가 무한대로 발산하거나 13 → 66 → 33 → 166과 같은 다른 루프에 영원히 갇힙니다.",
                        "challengeQuestion": "숫자 7로 시작하면 어떤 궤적을 그릴지 직접 계산해 보세요!"
                  },
                  "zh-Hans": {
                        "title": "5x + 1 变种冰雹数探索",
                        "prompt": "如果把奇数规则从 3n + 1 改成 5n + 1 会发生什么？",
                        "verdict": "❌ 不成立（数字大多发散至无穷大或陷入副循环）",
                        "gradeExplanation": "在 3n + 1 中，对2的除法平均而言足以把数字拉回地面。但对于 5n + 1，乘以5的膨胀速度彻底压倒了除以2！绝大多数数字会爆炸式冲向无限大，还有一部分被困在 13 → 66 → 33 → 166 → 83... 的独立闭环中。",
                        "challengeQuestion": "试着手算一下数字 7 在 5n + 1 规则下会去向何方？"
                  },
                  "zh-Hant": {
                        "title": "5x + 1 變種冰雹數探索",
                        "prompt": "若將奇數規則由 3n + 1 改為 5n + 1 會如何？",
                        "verdict": "❌ 不成立（大多發散至無窮大或陷入副循環）",
                        "gradeExplanation": "在 5n + 1 下，乘5的膨脹速度壓倒了除以2，大多數數字發散至無窮大，或陷入 13 → 66 → 33... 等其他閉環中。",
                        "challengeQuestion": "嘗試手算數字 7 在 5n + 1 規則下的命運！"
                  }
            }
      },
      "prime_triplets": {
            "base": "Twin Prime Conjecture",
            "interactiveTest": "triplets",
            "leanProofSnippet": "theorem prime_triplets_unique (p : ℕ) (h1 : Nat.Prime p) (h2 : Nat.Prime (p+2)) (h3 : Nat.Prime (p+4)) : p = 3 := by omega",
            "locales": {
                  "en": {
                        "title": "The Prime Triplets Riddle (p, p+2, p+4)",
                        "prompt": "Are prime triplets (p, p+2, p+4) also infinite?",
                        "verdict": "💡 PROVEN IMPOSSIBLE (Only ONE exists: (3, 5, 7)!)",
                        "gradeExplanation": "Look at any 3 consecutive odd numbers: one of them MUST be a multiple of 3! Since 3 is the only prime divisible by 3, the ONLY prime triplet in all of infinity is (3, 5, 7)!",
                        "challengeQuestion": "Check (11, 13, 15) or (17, 19, 21)—which number isn't prime?"
                  },
                  "de": {
                        "title": "Das Primzahldrilling-Rätsel (p, p+2, p+4)",
                        "prompt": "Gibt es unendlich viele Primzahldrillinge (p, p+2, p+4)?",
                        "verdict": "💡 BEWIESEN UNMÖGLICH (Es gibt nur ein einziges: (3, 5, 7)!)",
                        "gradeExplanation": "Von drei aufeinanderfolgenden ungeraden Zahlen ist immer genau eine durch 3 teilbar. Da 3 die einzige durch 3 teilbare Primzahl ist, gibt es nur das Trio (3, 5, 7)!",
                        "challengeQuestion": "Prüfe (11, 13, 15) – welche Zahl ist keine Primzahl?"
                  },
                  "fr": {
                        "title": "L'Énigme des Triplets Premiers (p, p+2, p+4)",
                        "prompt": "Les triplets premiers (p, p+2, p+4) sont-ils infinis ?",
                        "verdict": "💡 PROUVÉ IMPOSSIBLE (Le seul au monde est (3, 5, 7) !)",
                        "gradeExplanation": "Dans tout triplet de nombres impairs consécutifs, l'un d'eux est obligatoirement divisible par 3. Le seul triplet de premiers est donc (3, 5, 7) !",
                        "challengeQuestion": "Testez (11, 13, 15) : lequel n'est pas premier ?"
                  },
                  "it": {
                        "title": "L'Enigma delle Terne di Primi (p, p+2, p+4)",
                        "prompt": "Le terne di primi (p, p+2, p+4) sono infinite?",
                        "verdict": "💡 DIMOSTRATO IMPOSSIBILE (Ne esiste solo una: (3, 5, 7)!)",
                        "gradeExplanation": "Tra tre numeri dispari consecutivi, uno deve essere multiplo di 3. Quindi l'unica terna di primi in tutto l'universo è (3, 5, 7)!",
                        "challengeQuestion": "Controlla (17, 19, 21): quale numero non è primo?"
                  },
                  "ja": {
                        "title": "三つ子素数の謎 (p, p+2, p+4)",
                        "prompt": "双子素数が無限なら、三つ子素数 (p, p+2, p+4) も無限にある？",
                        "verdict": "💡 不可能と証明済み（宇宙にただ1組：(3, 5, 7) しか存在しない！）",
                        "gradeExplanation": "連続する3つの奇数を並べると、そのうちの1つは絶対に「3の倍数」になります！ 3の倍数で素数になれるのは3自身だけなので、三つ子素数は全宇宙で (3, 5, 7) のたった1組しかありません！",
                        "challengeQuestion": "(11, 13, 15) や (17, 19, 21) を見てみよう。どれが素数じゃないかな？"
                  },
                  "ko": {
                        "title": "세쌍둥이 소수 퍼즐 (p, p+2, p+4)",
                        "prompt": "쌍둥이 소수가 무한하다면 세쌍둥이 소수도 무한할까요?",
                        "verdict": "💡 수학적으로 불가능 증명 (전 우주에 단 하나: (3, 5, 7)!)",
                        "gradeExplanation": "연속하는 세 홀수 중 하나는 무조건 3의 배수가 됩니다. 3의 배수 중 소수는 3뿐이므로, 세쌍둥이 소수는 오직 (3, 5, 7) 하나만 존재합니다!",
                        "challengeQuestion": "(11, 13, 15)나 (17, 19, 21)을 확인해 보세요. 어떤 수가 소수가 아닐까요?"
                  },
                  "zh-Hans": {
                        "title": "三生素数之谜 (p, p+2, p+4)",
                        "prompt": "如果孪生素数可能无穷，三生素数 (p, p+2, p+4) 也会有无穷组吗？",
                        "verdict": "💡 已被数学证明不可能（全宇宙只有唯一一组：(3, 5, 7)！）",
                        "gradeExplanation": "任意三个相邻的连续奇数中，必定恰有一个是3的倍数！而在所有3的倍数中只有3本身是素数，因此全宇宙中唯一的三生素数就只有 (3, 5, 7)！",
                        "challengeQuestion": "检验一下 (11, 13, 15) 或 (17, 19, 21)，哪一个不是素数？"
                  },
                  "zh-Hant": {
                        "title": "三生素數之謎 (p, p+2, p+4)",
                        "prompt": "三生素數 (p, p+2, p+4) 也會有無窮組嗎？",
                        "verdict": "💡 已被數學證實不可能（全宇宙只有唯一一組：(3, 5, 7)！）",
                        "gradeExplanation": "任意三個相鄰連續奇數中必定有一個是3的倍數。因此唯一的解只有 (3, 5, 7)！",
                        "challengeQuestion": "檢驗 (11, 13, 15) 與 (17, 19, 21)，哪一個不是素數？"
                  }
            }
      },
      "polignac_gaps": {
            "base": "Polignac's Conjecture",
            "interactiveTest": "polignac",
            "leanProofSnippet": "conjecture polignac (k : ℕ) (hk : k > 0) : ∃ᶠ (p : ℕ) in atTop, Nat.Prime p ∧ Nat.Prime (p + 2 * k) := by sorry",
            "locales": {
                  "en": {
                        "title": "Polignac's Generalized Gap Conjecture",
                        "prompt": "Are there infinitely many prime pairs for EVERY even gap (gap = 4, 6, 8...)?",
                        "verdict": "⏳ OPEN CONJECTURE (Generalizes Twin Primes to all even gaps)",
                        "gradeExplanation": "Twin primes are pairs with gap 2. Cousin primes have gap 4 (e.g. 7 & 11). Sexy primes have gap 6 (e.g. 5 & 11). Alphonse de Polignac conjectured in 1849 that every single even number k is the gap between infinitely many pairs of primes!",
                        "challengeQuestion": "Find three sexy prime pairs (primes that differ by 6) under 50!"
                  },
                  "de": {
                        "title": "Polignacs verallgemeinerte Lückenvermutung",
                        "prompt": "Gibt es für JEDE gerade Lücke (4, 6, 8...) unendlich viele Primzahlpaare?",
                        "verdict": "⏳ OFFENE VERMUTUNG (Verallgemeinerung der Zwillingsprimzahlen)",
                        "gradeExplanation": "Zwillingsprimzahlen haben Lücke 2, 'Cousin-Primzahlen' Lücke 4 (7 & 11), 'Sexy Primzahlen' Lücke 6 (5 & 11). 1849 vermutete Polignac, dass jede gerade Zahl unendlich oft als Abstand auftritt!",
                        "challengeQuestion": "Finde drei Primzahlpaare mit Abstand 6 unter 50!"
                  },
                  "fr": {
                        "title": "Conjecture de Polignac sur les Écarts Premiers",
                        "prompt": "Existe-t-il une infinité de paires de premiers pour TOUT écart pair (4, 6, 8...) ?",
                        "verdict": "⏳ CONJECTURE OUVERTE (Généralisation des premiers jumeaux)",
                        "gradeExplanation": "Les jumeaux ont un écart de 2, les cousins un écart de 4 (7 et 11), les 'sexy primes' un écart de 6 (5 et 11). En 1849, Polignac a conjecturé que tout nombre pair apparaît une infinité de fois comme écart !",
                        "challengeQuestion": "Trouvez 3 paires de premiers avec un écart de 6 inférieurs à 50 !"
                  },
                  "it": {
                        "title": "Congettura di Polignac sui Divari dei Primi",
                        "prompt": "Esistono infinite coppie di primi per OGNI divario pari (4, 6, 8...) ?",
                        "verdict": "⏳ CONGETTURA APERTA (Generalizza i primi gemelli)",
                        "gradeExplanation": "I gemelli hanno divario 2, i 'cugini' divario 4 (7 e 11), i primi 'sexy' divario 6 (5 e 11). Polignac ipotizzò che ogni numero pari sia il divario di infinite coppie di primi!",
                        "challengeQuestion": "Trova tre coppie di primi con divario 6 minori di 50!"
                  },
                  "ja": {
                        "title": "ポリニャックの一般化素数間隔予想",
                        "prompt": "すべての偶数（間隔 4, 6, 8...）について、その間隔の素数ペアは無限にある？",
                        "verdict": "⏳ 未解決（双子素数予想をすべての偶数間隔へ一般化）",
                        "gradeExplanation": "差が2のペアは双子素数、差が4は「いとこ素数」（7と11）、差が6は「セクシー素数」（5と11）。1849年ポリニャックは、すべての偶数kについて差がkの素数ペアが無限に存在すると予想しました！",
                        "challengeQuestion": "50以下の数の中から、差が6の素数ペア（セクシー素数）を3組見つけてみよう！"
                  },
                  "ko": {
                        "title": "폴리냑의 일반화 소수 간격 추측",
                        "prompt": "모든 짝수 간격(4, 6, 8...)에 대해서도 해당하는 소수 쌍이 무한할까요?",
                        "verdict": "⏳ 미해결 추측 (쌍둥이 소수 추측을 모든 짝수로 일반화)",
                        "gradeExplanation": "간격이 2인 것은 쌍둥이 소수, 간격이 4인 것은 사촌 소수(7과 11), 간격이 6인 것은 섹시 소수(5와 11)입니다. 1849년 폴리냑은 모든 짝수 간격에 대해 소수 쌍이 무한히 존재한다고 추측했습니다!",
                        "challengeQuestion": "50 이하에서 간격이 6인 소수 쌍 3개를 찾아보세요!"
                  },
                  "zh-Hans": {
                        "title": "波利尼亚克广义素数间距猜想",
                        "prompt": "对于每一个偶数间距（间距 4, 6, 8...），都有无穷多对素数吗？",
                        "verdict": "⏳ 未解决公开猜想（将孪生素数推广至所有偶数间距）",
                        "gradeExplanation": "间距为2的是孪生素数，间距为4的是表兄弟素数（如 7 与 11），间距为6的被称为性感素数（如 5 与 11）。1849年波利尼亚克猜想：任何一个偶数，都是无穷多对素数之间的间距！",
                        "challengeQuestion": "试在 50 以内找出 3 组相差为 6 的素数对！"
                  },
                  "zh-Hant": {
                        "title": "波利尼亞克廣義素數間距猜想",
                        "prompt": "對於每一個偶數間距（4, 6, 8...），是否都有無窮多對素數？",
                        "verdict": "⏳ 未解決猜想（將蠻生素數推廣至所有偶數）",
                        "gradeExplanation": "間距2為蠻生素數，間距4為表親素數（如 7 與 11），間距6為性感素數（如 5 與 11）。波利尼亞克猜想任意正偶數都是無窮多對素數的間距！",
                        "challengeQuestion": "在 50 以內找出 3 組相差為 6 的素數對！"
                  }
            }
      },
      "erdos_3d": {
            "base": "Erdős Unit Distance Problem",
            "interactiveTest": "erdos3d",
            "leanProofSnippet": "theorem lenz_construction_3d (n : ℕ) : ∃ (P : Finset (EuclideanSpace ℝ (Fin 3))), P.card = 2 * n ∧ UnitDistances3D P = n^2 := by sorry",
            "locales": {
                  "en": {
                        "title": "3D Unit Distances (Lenz's Construction)",
                        "prompt": "In 3D space, can points have dramatically MORE unit distances than in a 2D plane?",
                        "verdict": "💡 PROVEN SURPRISE (Quadratic Growth O(n²) in 3D!)",
                        "gradeExplanation": "In 2D, points can only have around n^(4/3) unit distances. But in 3D space, mathematician Heinrich Lenz showed you can place n points on one circle, and n points on a perpendicular circle whose centers align. EVERY point on circle 1 is distance 1 from EVERY point on circle 2! That produces n × n = n² unit distances!",
                        "challengeQuestion": "Why can't you do the two perpendicular circles trick on a flat 2D sheet of paper?"
                  },
                  "de": {
                        "title": "Einheitsabstände in 3D (Lenz-Konstruktion)",
                        "prompt": "Können Punkte im 3D-Raum dramatisch MEHR Einheitsabstände haben als in der 2D-Ebene?",
                        "verdict": "💡 BEWIESENE ÜBERRASCHUNG (Quadratisches Wachstum O(n²) im 3D-Raum!)",
                        "gradeExplanation": "In 2D ist die Zahl der Abstände stark begrenzt. Doch im 3D-Raum platzierte Heinrich Lenz n Punkte auf einem Kreis und n Punkte auf einem senkrechten Kreis. JEDER Punkt auf Kreis 1 hat Abstand 1 zu JEDEM Punkt auf Kreis 2! Das ergibt n × n = n² Abstände!",
                        "challengeQuestion": "Warum funktioniert der Trick mit zwei senkrechten Ringen nicht auf einem flachen Blatt Papier?"
                  },
                  "fr": {
                        "title": "Distances Unitaires en 3D (Construction de Lenz)",
                        "prompt": "Dans l'espace 3D, les points peuvent-ils former beaucoup PLUS de distances unitaires qu'en 2D ?",
                        "verdict": "💡 SURPRISE DÉMONTRÉE (Croissance quadratique O(n²) en 3D !)",
                        "gradeExplanation": "Dans le plan 2D, les distances unitaires sont limitées. Mais dans l'espace 3D, Heinrich Lenz a disposé deux cercles orthogonaux : CHAQUE point du premier cercle est à distance 1 de TOUS les points du second ! Cela produit n² distances !",
                        "challengeQuestion": "Pourquoi est-il impossible de placer deux cercles perpendiculaires sur une feuille de papier plane ?"
                  },
                  "it": {
                        "title": "Distanze Unitarie in 3D (Costruzione di Lenz)",
                        "prompt": "Nello spazio 3D, i punti possono avere molte PIÙ distanze unitarie che sul piano 2D?",
                        "verdict": "💡 SORPRESA DIMOSTRATA (Crescita quadratica O(n²) in 3D!)",
                        "gradeExplanation": "Sul piano 2D le distanze unitarie sono limitate. Nello spazio 3D Heinrich Lenz dimostrò che posizionando punti su due cerchi perpendicolari, OGNI punto del primo cerchio è a distanza 1 da OGNI punto del secondo, ottenendo n² distanze!",
                        "challengeQuestion": "Perché il trucco dei due cerchi perpendicolari non funziona su un foglio piatto?"
                  },
                  "ja": {
                        "title": "3次元空間における単位距離（レンツの構成）",
                        "prompt": "3次元空間では、2次元平面よりも劇的に多くの単位距離を作れる？",
                        "verdict": "💡 証明された大発見（3次元では2乗オーダー O(n²) で爆発的に増加！）",
                        "gradeExplanation": "2次元平面では単位距離の数は厳しく制限されます。しかし3次元空間では、数学者レンツが互いに直交する2つの円に点を配置するトリックを発見しました。円A上のすべての点と、円B上のすべての点の距離がすべてちょうど1になるため、n × n = n² 個のペアが生まれます！",
                        "challengeQuestion": "なぜ直交する2つの円のトリックは、平らな紙の上（2次元）では使えないのでしょうか？"
                  },
                  "ko": {
                        "title": "3차원 공간의 단위 거리 (렌츠 구성)",
                        "prompt": "3차원 공간에서는 2차원 평면보다 극적으로 더 많은 단위 거리를 만들 수 있을까요?",
                        "verdict": "💡 증명된 대반전 (3차원에서는 n² 비율로 폭발적 증가!)",
                        "gradeExplanation": "2차원 평면에서는 점들 사이의 단위 거리가 제한적이지만, 3차원 공간에서는 하인리히 렌츠가 서로 수직인 두 원에 점들을 배치하여 원 1의 모든 점과 원 2의 모든 점 사이 거리가 1이 되도록 만들었습니다! 즉 n × n = n²개의 단위 거리가 생깁니다!",
                        "challengeQuestion": "왜 평평한 종이 위(2차원)에서는 수직인 두 원 트릭을 쓸 수 없을까요?"
                  },
                  "zh-Hans": {
                        "title": "三维空间中的单位距离（伦茨构造）",
                        "prompt": "在三维空间中，点集能构成的单位距离是否比二维平面剧烈暴增？",
                        "verdict": "💡 震惊数学界的严密定理（在3维中达到平方阶 O(n²) 爆炸！）",
                        "gradeExplanation": "在2维平面上，单位距离数受到严格压制。但进入3维空间后，数学家伦茨（Lenz）给出了惊艳的构造：在两个互相正交垂直的同心圆环上各摆放 n 个点，则圆环A上的每一个点到圆环B上的每一个点距离恰好全部为 1！直接产生了 n × n = n² 对单位距离！",
                        "challengeQuestion": "为什么两个互相垂直相交的圆环构造无法在平坦的2维纸面上实现？"
                  },
                  "zh-Hant": {
                        "title": "三維空間中的單位距離（倫茨構造）",
                        "prompt": "在三維空間中，點集能否構成遠多於二維平面的單位距離？",
                        "verdict": "💡 已證實的幾何驚喜（在3維空間呈 O(n²) 平方階爆炸！）",
                        "gradeExplanation": "在二維平面上單位距離受到限制。而在三維空間，倫茨（Lenz）在兩個互相正交垂直的圓環上各置 n 個點，環1上的每個點到環2上的每個點距離皆為 1，產生了 n² 對單位距離！",
                        "challengeQuestion": "為什麼兩個互相垂直的圓環無法畫在平面的紙上？"
                  }
            }
      }
};
  }

  init() {
    this.render();
    i18n.onLanguageChange(() => {
      this.render();
    });
  }

  selectHypothesis(key) {
    this.currentTopic = key;
    this.render();
  }

  render() {
    if (!this.container) return;

    const lang = i18n.getLanguage();
    const data = this.presetHypotheses[this.currentTopic] || this.presetHypotheses.collatz_5n1;
    const loc = data.locales[lang] || data.locales.en;

    this.container.innerHTML = `
      <div class="ai-workbench-grid">
        <!-- Left Column: Preset Conjectures & Custom Formulation -->
        <div class="ai-input-card">
          <div class="workbench-header">
            <span class="ai-chip">${i18n.t("nav_ai_lab")}</span>
            <h3>${i18n.t("ai_workbench_formulate")}</h3>
            <p>${i18n.t("ai_workbench_desc")}</p>
          </div>

          <div class="hypothesis-selector">
            <label class="input-label">${i18n.t("ai_choose_topic")}</label>
            <div class="hypothesis-pills">
              ${Object.entries(this.presetHypotheses).map(([key, item]) => {
                const itemLoc = item.locales[lang] || item.locales.en;
                return `
                  <button class="hypo-pill ${this.currentTopic === key ? 'active' : ''}" data-key="${key}">
                    ${itemLoc.title}
                  </button>
                `;
              }).join('')}
            </div>
          </div>

          <div class="custom-query-box">
            <label class="input-label">${i18n.t("ai_active_query")}</label>
            <div class="query-input-row">
              <input type="text" id="ai-custom-prompt" value="${loc.prompt}">
              <button class="btn-primary" id="btn-run-ai-explore">${i18n.t("ai_btn_run")}</button>
            </div>
          </div>

          <div class="hypothesis-meta">
            <span class="meta-item"><strong>${i18n.t("ai_base_label")}</strong> ${data.base}</span>
            <span class="meta-item"><strong>${i18n.t("ai_level_label")}</strong> K-12</span>
          </div>
        </div>

        <!-- Right Column: AI Research Findings & Interactive Simulation -->
        <div class="ai-output-card">
          <div class="finding-header">
            <span class="verdict-tag">${loc.verdict}</span>
            <h4>${loc.title}</h4>
          </div>

          <div class="finding-body">
            <div class="grade-explanation-box">
              <h5>${i18n.t("ai_intuition_heading")}</h5>
              <p>${loc.gradeExplanation}</p>
            </div>

            <div class="challenge-box">
              <h5>${i18n.t("ai_challenge_heading")}</h5>
              <p>${loc.challengeQuestion}</p>
            </div>

            <div class="lean-snippet-preview">
              <div class="lean-header">
                <span>Formal Lean 4 Statement</span>
                <span class="lean-lang-badge">Lean 4</span>
              </div>
              <pre class="lean-code-block"><code>${data.leanProofSnippet}</code></pre>
            </div>
          </div>
        </div>
      </div>
    `;

    document.querySelectorAll(".hypothesis-pills button").forEach(btn => {
      btn.addEventListener("click", () => {
        this.selectHypothesis(btn.getAttribute("data-key"));
      });
    });
  }
}
