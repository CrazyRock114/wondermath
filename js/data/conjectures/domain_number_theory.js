export const DOMAIN_NUMBER_THEORY = [
  {
    "id": "collatz",
    "icon": "🌨️",
    "difficulty": "All Ages",
    "simId": "collatz-sim",
    "leanCode": "import Mathlib.Data.Nat.Basic\n\ndef collatz (n : ℕ) : ℕ :=\n  if n % 2 = 0 then n / 2 else 3 * n + 1\n\n-- The open conjecture:\ndef CollatzConjecture : Prop :=\n  ∀ n : ℕ, n > 0 → ∃ k : ℕ, (collatz^[k]) n = 1\n\n-- Proved cycle lemma for 1:\ntheorem collatz_one_cycle : collatz (collatz (collatz 1)) = 1 := by\n  dsimp [collatz]\n  rfl",
    "locales": {
      "en": {
        "name": "The Collatz Conjecture",
        "subtitle": "The Hailstone Riddle (3x + 1)",
        "field": "Number Theory & Dynamical Systems",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can you trap a bouncing hailstone that refuses to stop?",
            "analogy": "Imagine a cloud dropping a hailstone. When it's at an even height, gravity pulls it down by half! But when it hits an odd cloud, lightning zaps it, multiplying it by 3 and adding 1, sending it shooting high into the sky! Will EVERY hailstone eventually crash down to ground 1?",
            "rules": [
              "Pick ANY positive whole number.",
              "If it's EVEN: cut it in half (divide by 2).",
              "If it's ODD: multiply by 3, then add 1 (3n + 1).",
              "Repeat with the new number!"
            ],
            "mystery": "No matter what starting number people try—even numbers with millions of digits—the hailstone always plunges down into the loop: 4 → 2 → 1 → 4 → 2 → 1... But nobody knows if a sneaky number could shoot up forever to infinity, or get trapped in a different secret loop!",
            "funFact": "Mathematician Paul Erdős said: 'Mathematics may not yet be ready for such problems.'"
          },
          "investigators": {
            "tagline": "Testing dynamical orbits, modular arithmetic, and the 4-2-1 attractor.",
            "analogy": "A discrete dynamical system where every integer produces a trajectory. If n is even, T(n) = n/2; if n is odd, T(n) = 3n + 1. Because 3n+1 is always even when n is odd, every upward step is guaranteed to be followed by at least one downward division.",
            "rules": [
              "Function: T(n) = n/2 for n ≡ 0 (mod 2), and 3n+1 for n ≡ 1 (mod 2).",
              "Stopping Time: The number of steps required to reach 1.",
              "Peak Altitude: The highest value reached along the trajectory."
            ],
            "mystery": "Does the set of non-trivial cycles contain any other attractor besides {1, 2, 4}? Or does any trajectory diverge to +∞? Computers have verified all starting numbers up to 2⁶⁸ ≈ 2.95 × 10²⁰, but a finite search can never prove an infinite claim.",
            "funFact": "In 2019, Fields Medalist Terence Tao proved that 'almost all' Collatz orbits attain values almost arbitrarily close to 1!"
          },
          "pioneers": {
            "tagline": "Stochastic models, 2-adic integers, and undecidability barriers.",
            "analogy": "The Collatz map can be extended to 2-adic integers ℤ₂, where it acts as a measure-preserving ergodic transformation. Its behavior exhibits pseudorandom characteristics similar to chaotic dynamical systems.",
            "rules": [
              "Let T: ℕ → ℕ defined by T(n) = n/2 if n is even, (3n+1)/2 if n is odd.",
              "Conjecture: ∀ n ∈ ℤ⁺, ∃ k ∈ ℕ such that Tᵏ(n) = 1.",
              "Conway (1972) proved that generalized Collatz-type problems are algorithmically undecidable."
            ],
            "mystery": "Is Collatz formally undecidable within ZFC, or can modern AI-driven induction and Lean formal verification construct structural invariants?",
            "funFact": "Researchers are applying AI automated theorem proving to search for periodic cycles in negative integers ℤ⁻ (where 3 distinct cycles exist: {-1}, {-5}, {-17})."
          }
        },
        "history": [
          {
            "year": "1937",
            "author": "Lothar Collatz",
            "note": "Introduces the problem during the International Congress of Mathematicians."
          },
          {
            "year": "1972",
            "author": "John Horton Conway",
            "note": "Proves that a generalized class of Collatz functions is undecidable."
          },
          {
            "year": "2019",
            "author": "Terence Tao",
            "note": "Proves that almost all orbits attain values bounded by any function diverging to infinity."
          },
          {
            "year": "2024–2026",
            "author": "AI Automated Exploration",
            "note": "Automated verification of billion-step trajectories and cycle-elimination proofs in Lean 4."
          }
        ]
      },
      "de": {
        "name": "Die Collatz-Vermutung",
        "subtitle": "Das Hagelstein-Rätsel (3x + 1)",
        "field": "Zahlentheorie & Dynamische Systeme",
        "statusBadge": "OFFENES RÄTSEL",
        "grades": {
          "explorers": {
            "tagline": "Kannst du ein hüpfendes Hagelkorn fangen, das einfach nicht stoppen will?",
            "analogy": "Stell dir vor, eine Wolke lässt ein Hagelkorn fallen. Ist seine Höhe gerade, fällt es um die Hälfte herab! Trifft es eine ungerade Wolke, schlägt der Blitz ein: mal 3 plus 1! Stürzt jedes Hagelkorn am Ende auf den Boden 1?",
            "rules": [
              "Wähle IRGENDEINE positive ganze Zahl.",
              "Ist sie GERADE: teile sie durch 2.",
              "Ist sie UNGERADE: multipliziere mit 3 und addiere 1 (3n + 1).",
              "Wiederhole das mit der neuen Zahl!"
            ],
            "mystery": "Egal welche Zahl man wählt – selbst mit Millionen Stellen – am Ende landet jede Zahl in der Schleife: 4 → 2 → 1 → 4 → 2 → 1... Aber kann eine geheime Zahl für immer ins Unendliche steigen?",
            "funFact": "Paul Erdős sagte einst: 'Die Mathematik ist vielleicht noch nicht reif für solche Probleme.'"
          },
          "investigators": {
            "tagline": "Dynamische Orbits, modulare Arithmetik und der 4-2-1-Attraktor.",
            "analogy": "Ein diskretes dynamisches System, bei dem jede Zahl eine Bahn erzeugt. Ist n gerade, gilt T(n) = n/2; ist n ungerade, T(n) = 3n + 1.",
            "rules": [
              "Funktion: T(n) = n/2 für gerade n, und 3n+1 für ungerade n.",
              "Stoppzeit: Die Anzahl der Schritte, um 1 zu erreichen.",
              "Spitzenhöhe: Der höchste erreichte Wert der Bahn."
            ],
            "mystery": "Gibt es andere periodische Zyklen außer {1, 2, 4}? Computer haben alle Zahlen bis 2⁶⁸ überprüft, doch eine endliche Suche beweist keine unendliche Aussage.",
            "funFact": "2019 bewies Terence Tao, dass 'fast alle' Collatz-Bahnen Werte beliebig nah bei 1 erreichen!"
          },
          "pioneers": {
            "tagline": "Stochastische Modelle, 2-adische Zahlen und Unentscheidbarkeitsgrenzen.",
            "analogy": "Die Collatz-Abbildung lässt sich auf die 2-adischen Zahlen ℤ₂ erweitern, wo sie als maßerhaltende ergodische Transformation wirkt.",
            "rules": [
              "T(n) = n/2 falls n gerade, (3n+1)/2 falls n ungerade.",
              "Vermutung: ∀ n ∈ ℤ⁺, ∃ k ∈ ℕ mit Tᵏ(n) = 1.",
              "Conway (1972) bewies, dass verallgemeinerte Collatz-Probleme algorithmisch unentscheidbar sind."
            ],
            "mystery": "Ist Collatz in ZFC unentscheidbar oder kann moderne KI strukturelle Invarianten finden?",
            "funFact": "In den negativen ganzen Zahlen ℤ⁻ gibt es 3 bekannte Zyklen: {-1}, {-5} und {-17}!"
          }
        },
        "history": [
          {
            "year": "1937",
            "author": "Lothar Collatz",
            "note": "Stellt das Problem auf dem Internationalen Mathematikerkongress vor."
          },
          {
            "year": "1972",
            "author": "John Horton Conway",
            "note": "Beweist die Unentscheidbarkeit verallgemeinerter Collatz-Funktionen."
          },
          {
            "year": "2019",
            "author": "Terence Tao",
            "note": "Beweist, dass fast alle Bahnen fast beschränkte Werte erreichen."
          },
          {
            "year": "2024–2026",
            "author": "KI-Forschung & Lean 4",
            "note": "Automatisierte Trajektorienanalyse und Zykluselimination in Lean 4."
          }
        ]
      },
      "fr": {
        "name": "La Conjecture de Collatz",
        "subtitle": "L'Énigme de Syracuse (3x + 1)",
        "field": "Théorie des Nombres & Systèmes Dynamiques",
        "statusBadge": "MYSTÈRE NON RÉSOLU",
        "grades": {
          "explorers": {
            "tagline": "Pouvez-vous piéger un grêlon qui refuse de s'arrêter de rebondir ?",
            "analogy": "Imaginez un nuage qui lâche un grêlon. Quand son altitude est paire, il descend de moitié ! Mais s'il touche un nuage impair, un éclair le frappe : multiplié par 3 plus 1 ! Tous les grêlons finissent-ils par s'écraser au sol sur le 1 ?",
            "rules": [
              "Choisissez N'IMPORTE QUEL nombre entier positif.",
              "S'il est PAIR : divisez-le par 2.",
              "S'il est IMPAIR : multipliez par 3 et ajoutez 1 (3n + 1).",
              "Recommencez avec le nouveau résultat !"
            ],
            "mystery": "Quel que soit le nombre de départ, la trajectoire finit toujours par chuter dans la boucle : 4 → 2 → 1 → 4 → 2 → 1... Mais un nombre secret pourrait-il s'échapper à l'infini ?",
            "funFact": "Paul Erdős disait : 'Les mathématiques ne sont peut-être pas encore prêtes pour de tels problèmes.'"
          },
          "investigators": {
            "tagline": "Orbites dynamiques, arithmétique modulaire et attracteur 4-2-1.",
            "analogy": "Un système dynamique discret où chaque entier génère une trajectoire. Si n est pair, T(n) = n/2 ; si n est impair, T(n) = 3n + 1.",
            "rules": [
              "Fonction : T(n) = n/2 pour n pair, 3n+1 pour n impair.",
              "Temps d'arrêt : Le nombre d'étapes nécessaires pour atteindre 1.",
              "Altitude maximale : La valeur record atteinte lors du vol."
            ],
            "mystery": "Existe-t-il d'autres cycles que {1, 2, 4} ? Les ordinateurs ont vérifié tous les nombres jusqu'à 2⁶⁸, mais un calcul fini ne remplace jamais une preuve infinie.",
            "funFact": "En 2019, Terence Tao a démontré que 'presque toutes' les orbites atteignent des valeurs presque aussi petites que 1 !"
          },
          "pioneers": {
            "tagline": "Modèles stochastiques, entiers 2-adiques et barrières d'indécidabilité.",
            "analogy": "L'application de Collatz s'étend aux entiers 2-adiques ℤ₂, où elle agit comme une transformation ergodique préservant la mesure.",
            "rules": [
              "T(n) = n/2 si n pair, (3n+1)/2 si n impair.",
              "Conjecture : ∀ n ∈ ℤ⁺, ∃ k ∈ ℕ tel que Tᵏ(n) = 1.",
              "Conway (1972) a prouvé que les fonctions généralisées de type Collatz sont algorithmiquement indécidables."
            ],
            "mystery": "La conjecture est-elle indécidable dans ZFC, ou les preuves formelles en Lean 4 permettront-elles de découvrir de nouveaux invariants ?",
            "funFact": "Dans les entiers négatifs ℤ⁻, il existe 3 cycles distincts prouvés : {-1}, {-5} et {-17}."
          }
        },
        "history": [
          {
            "year": "1937",
            "author": "Lothar Collatz",
            "note": "Présente le problème au Congrès International des Mathématiciens."
          },
          {
            "year": "1972",
            "author": "John Horton Conway",
            "note": "Prouve l'indécidabilité algorithmique d'une classe de fonctions de Collatz."
          },
          {
            "year": "2019",
            "author": "Terence Tao",
            "note": "Prouve que presque toutes les orbites atteignent des valeurs presque arbitrairement basses."
          },
          {
            "year": "2024–2026",
            "author": "Exploration IA & Lean 4",
            "note": "Vérification automatisée de trajectoires géantes et élimination de cycles."
          }
        ]
      },
      "it": {
        "name": "La Congettura di Collatz",
        "subtitle": "L'Enigma della Grandine (3x + 1)",
        "field": "Teoria dei Numeri & Sistemi Dinamici",
        "statusBadge": "ENIGMA APERTO",
        "grades": {
          "explorers": {
            "tagline": "Riuscirai a catturare un chicco di grandine che non vuole fermarsi?",
            "analogy": "Immagina una nuvola che lascia cadere un chicco di grandine. Quando l'altezza è pari, cade dimezzandosi! Ma se tocca una nuvola dispari, un fulmine lo scaglia in alto moltiplicandolo per 3 e aggiungendo 1! Tutti i chicchi prima o poi atterrano sull'1?",
            "rules": [
              "Scegli QUALSIASI numero intero positivo.",
              "Se è PARI: dividilo per 2.",
              "Se è DISPARI: moltiplica per 3 e aggiungi 1 (3n + 1).",
              "Ripeti l'operazione con il nuovo numero!"
            ],
            "mystery": "Qualsiasi numero si provi, precipita sempre nel ciclo: 4 → 2 → 1 → 4 → 2 → 1... Ma esiste un numero segreto che potrebbe salire all'infinito?",
            "funFact": "Paul Erdős disse: 'La matematica potrebbe non essere ancora pronta per problemi simili.'"
          },
          "investigators": {
            "tagline": "Orbite dinamiche, aritmetica modulare e l'attrattore 4-2-1.",
            "analogy": "Un sistema dinamico discreto in cui ogni numero genera una traiettoria: T(n) = n/2 se n è pari, 3n + 1 se è dispari.",
            "rules": [
              "Funzione: T(n) = n/2 se pari, 3n+1 se dispari.",
              "Tempo di arresto: Il numero di passaggi per toccare 1.",
              "Altitudine di picco: Il valore massimo toccato lungo l'orbita."
            ],
            "mystery": "Esistono altri cicli periodici oltre a {1, 2, 4}? I supercomputer hanno verificato tutti i numeri fino a 2⁶⁸, ma una verifica finita non dimostra l'infinito.",
            "funFact": "Nel 2019 Terence Tao ha dimostrato che 'quasi tutte' le orbite raggiungono valori vicinissimi a 1!"
          },
          "pioneers": {
            "tagline": "Modelli stocastici, interi 2-adici e barriere di indecidibilità.",
            "analogy": "La mappa di Collatz può essere estesa agli interi 2-adici ℤ₂, dove agisce come trasformazione ergodica.",
            "rules": [
              "T(n) = n/2 se pari, (3n+1)/2 se dispari.",
              "Congettura: ∀ n ∈ ℤ⁺, ∃ k ∈ ℕ tale che Tᵏ(n) = 1.",
              "Conway (1972) ha dimostrato che problemi generalizzati di tipo Collatz sono indecidibili."
            ],
            "mystery": "La congettura è indecidibile in ZFC o l'IA troverà invarianti algebrici formali in Lean 4?",
            "funFact": "Negli interi negativi ℤ⁻ esistono esattamente 3 cicli distinti: {-1}, {-5} e {-17}."
          }
        },
        "history": [
          {
            "year": "1937",
            "author": "Lothar Collatz",
            "note": "Formula il problema durante il Congresso Internazionale dei Matematici."
          },
          {
            "year": "1972",
            "author": "John Horton Conway",
            "note": "Dimostra l'indecidibilità algoritmica di generalizzazioni di Collatz."
          },
          {
            "year": "2019",
            "author": "Terence Tao",
            "note": "Dimostra che quasi tutte le orbite raggiungono valori quasi limitati."
          },
          {
            "year": "2024–2026",
            "author": "IA & Lean 4",
            "note": "Verifica formale automatizzata di orbite e confutazione di cicli."
          }
        ]
      },
      "ja": {
        "name": "コラッツ予想",
        "subtitle": "神秘の「ウバク数」パズル (3x + 1)",
        "field": "数論・離散力学系",
        "statusBadge": "未解決の難問",
        "grades": {
          "explorers": {
            "tagline": "空高く跳ね上がる「ヒョウの粒」を捕まえることができるかな？",
            "analogy": "雲から落ちる雹（ひょう）の粒を想像してみよう。偶数の高さにいるときは重力で半分にストン！ でも奇数の高さに来ると稲妻が直撃し、3倍して1を足して大空へ急上昇！ どんな数から始めても、最後は地上「1」へと落ちてくるのかな？",
            "rules": [
              "好きな正の整数をひとつ選ぼう。",
              "【偶数】なら：2で割る（半分にする）。",
              "【奇数】なら：3倍して1を足す（3n + 1）。",
              "新しくできた数で、これを繰り返す！"
            ],
            "mystery": "どんなに大きな数（何兆、何京という数）で試しても、最後は必ず「4 → 2 → 1 → 4 → 2 → 1」というループに吸い込まれます。でも、永遠に宇宙の果てまで飛び続ける数や、別の秘密のループに迷い込む数は本当にないのでしょうか？",
            "funFact": "天才数学者ポール・エルデシュは「現代の数学は、まだこの問題に立ち向かえるほど成熟していない」と語りました。"
          },
          "investigators": {
            "tagline": "力学的軌道、合同式（モジュロ算術）、そして4-2-1アトラクターの検証。",
            "analogy": "整数全体からなる離散力学系です。nが偶数のときT(n) = n/2、奇数のときT(n) = 3n + 1。奇数に3をかけて1を足すと必ず偶数になるため、上昇ステップの直後には必ず1回以上の下降が約束されています。",
            "rules": [
              "写像：n ≡ 0 (mod 2) のとき n/2、n ≡ 1 (mod 2) のとき 3n+1。",
              "停止時間（ステップ数）：1に到達するまでに必要な変換回数。",
              "最高高度：軌道上で到達する最大値。"
            ],
            "mystery": "{1, 2, 4}以外の非自明な周期軌道は存在するのか？ または無限大へ発散する軌道はあるのか？ コンピュータによって2⁶⁸ ≈ 2.95 × 10²⁰までの全整数で成立が確かめられていますが、有限の検証では無限の証明にはなりません。",
            "funFact": "2019年、フィールズ賞受賞者テレンス・タオは「ほとんどすべてのコラッツ軌道が、任意に小さな値まで到達する」ことを確率論的に証明しました！"
          },
          "pioneers": {
            "tagline": "確率論的モデル、2進p進整数環ℤ₂、および決定不能性の壁。",
            "analogy": "コラッツ写像は2進整数環ℤ₂上の測度保存エルゴード変換として拡張して解析されます。擬似ランダムなカオス的ダイナミクスを示します。",
            "rules": [
              "写像 T: ℕ → ℕ, T(n) = n/2（n偶数）, (3n+1)/2（n奇数）。",
              "予想：∀ n ∈ ℤ⁺, ∃ k ∈ ℕ, Tᵏ(n) = 1。",
              "コンウェイ（1972）は、一般化されたコラッツ型問題がアルゴリズム的に決定不能（停止性問題と同値）であることを証明しました。"
            ],
            "mystery": "コラッツ予想はZFC公理系において形式的に決定不能なのか、それとも現代のAI駆動帰納法とLean 4形式検証によって不変量が構成できるのか？",
            "funFact": "負の整数環ℤ⁻においては、すでに3つの独立した周期軌道（{-1}, {-5}, {-17}）が存在することが判明しています。"
          }
        },
        "history": [
          {
            "year": "1937",
            "author": "ローター・コラッツ",
            "note": "国際数学者会議にて問題を提起。"
          },
          {
            "year": "1972",
            "author": "ジョン・ホートン・コンウェイ",
            "note": "一般化コラッツ問題がアルゴリズム的に決定不能であることを証明。"
          },
          {
            "year": "2019",
            "author": "テレンス・タオ",
            "note": "ほとんどすべてのコラッツ軌道がほぼ1近傍まで減少することを証明。"
          },
          {
            "year": "2024–2026",
            "author": "AI自動探索とLean 4",
            "note": "Lean 4による数十億ステップ軌道の形式検証および非自明サイクル排除定理の確立。"
          }
        ]
      },
      "ko": {
        "name": "콜라츠 추측",
        "subtitle": "신비로운 우박수 퍼즐 (3x + 1)",
        "field": "수론 및 이산 역학계",
        "statusBadge": "미해결 난제",
        "grades": {
          "explorers": {
            "tagline": "끝없이 튀어 오르는 우박수를 잡을 수 있을까요?",
            "analogy": "구름에서 떨어지는 우박을 상상해 보세요. 짝수 높이에 있으면 절반으로 뚝 떨어집니다! 하지만 홀수 높이에 닿으면 번개를 맞아 3배에 1을 더해 하늘 높이 솟구칩니다! 과연 모든 우박은 결국 땅(1)으로 떨어질까요?",
            "rules": [
              "아무 양의 정수를 하나 고르세요.",
              "【짝수】라면: 2로 나눕니다 (반으로 줄이기).",
              "【홀수】라면: 3을 곱하고 1을 더합니다 (3n + 1).",
              "새로 나온 숫자로 계속 반복하세요!"
            ],
            "mystery": "얼마나 큰 숫자로 시작하든(수천억, 수경이 넘는 수라도) 항상 마지막엔 4 → 2 → 1 → 4 → 2 → 1 루프에 갇히게 됩니다. 하지만 영원히 무한대로 커지거나 다른 비밀 루프에 빠지는 숫자가 과연 없을까요?",
            "funFact": "전설적인 수학자 에르되시는 '현재의 수학은 아직 이런 문제를 다룰 준비가 되지 않았다'고 말했습니다."
          },
          "investigators": {
            "tagline": "동역학적 궤적, 모듈러 산술, 그리고 4-2-1 끌개(Attractor).",
            "analogy": "모든 정수가 궤적을 만드는 이산 역학계입니다. n이 짝수이면 T(n) = n/2, 홀수이면 T(n) = 3n + 1이 됩니다.",
            "rules": [
              "함수: 짝수일 때 n/2, 홀수일 때 3n+1.",
              "정지 시간: 1에 도달하는 데 걸리는 총 단계 수.",
              "최고 고도: 궤적 중 도달하는 가장 큰 수."
            ],
            "mystery": "{1, 2, 4} 외에 다른 비자명한 순환 주기가 존재할까요? 슈퍼컴퓨터로 2⁶⁸까지 모두 확인했지만 유한한 탐색은 무한을 증명할 수 없습니다.",
            "funFact": "2019년 필즈상 수상자 테렌스 타오는 '거의 모든' 콜라츠 궤적이 1에 임의로 가까운 값에 도달함을 증명했습니다."
          },
          "pioneers": {
            "tagline": "확률 모델, 2진수 p진 정수 ℤ₂, 그리고 결정 불가능성 장벽.",
            "analogy": "콜라츠 사상은 2진 정수환 ℤ₂ 상의 측도 보존 에르고딕 변환으로 확장되어 분석됩니다.",
            "rules": [
              "사상 T: ℕ → ℕ, T(n) = n/2 (짝수), (3n+1)/2 (홀수).",
              "추측: ∀ n ∈ ℤ⁺, ∃ k ∈ ℕ, Tᵏ(n) = 1.",
              "콘웨이(1972)는 일반화된 콜라츠 문제가 알고리즘적으로 결정 불가능함을 증명했습니다."
            ],
            "mystery": "콜라츠 추측은 ZFC 공리계에서 결정 불가능한 명제일까요, 아니면 현대 AI와 Lean 4를 통해 구조적 불변량을 발견할 수 있을까요?",
            "funFact": "음의 정수환 ℤ⁻에서는 {-1}, {-5}, {-17}이라는 3개의 명확한 주기가 이미 발견되었습니다."
          }
        },
        "history": [
          {
            "year": "1937",
            "author": "로타어 콜라츠",
            "note": "세계 수학자 대회에서 문제 제기."
          },
          {
            "year": "1972",
            "author": "존 호턴 콘웨이",
            "note": "일반화된 콜라츠 문제의 알고리즘적 결정 불가능성 증명."
          },
          {
            "year": "2019",
            "author": "테렌스 타오",
            "note": "거의 모든 궤적이 거의 유계인 값에 도달함을 확률론적으로 증명."
          },
          {
            "year": "2024–2026",
            "author": "AI 자동 탐색 및 Lean 4",
            "note": "수십억 단계 궤적의 기계 검증 및 비자명 주기 배제 정리 확립."
          }
        ]
      },
      "zh-Hans": {
        "name": "考拉兹猜想",
        "subtitle": "冰雹数难题 (3x + 1)",
        "field": "数论与动力系统",
        "statusBadge": "世界未解之谜",
        "grades": {
          "explorers": {
            "tagline": "你能困住一颗永不休止、疯狂跳跃的“冰雹”吗？",
            "analogy": "想象一朵云落下了一颗冰雹。如果在偶数高度，重力会让它下降一半！但如果撞到奇数云层，闪电会击中它：乘3加1，瞬间飙升到高空！是否每一颗冰雹最终都会掉回地面（数字1）？",
            "rules": [
              "任选一个正整数。",
              "如果是【偶数】：除以 2（减半）。",
              "如果是【奇数】：乘以 3 再加 1（3n + 1）。",
              "对得到的新数字重复上述规则！"
            ],
            "mystery": "无论你选多大的数字（即便是有几万位的超级大数），最后都会一头栽进 4 → 2 → 1 → 4 → 2 → 1 的死循环中！但谁也不知道，是否会有一个狡猾的数字能永远升入无限大，或者掉进另一个未知的秘密循环？",
            "funFact": "数学大师埃尔德什曾感叹：“现在的数学还没有准备好解决这样的难题。”"
          },
          "investigators": {
            "tagline": "动力学轨道、模运算与 4-2-1 吸引子验证。",
            "analogy": "这是一个离散动力系统。若 n 为偶数，T(n) = n/2；若 n 为奇数，T(n) = 3n + 1。因为奇数乘3加1必然为偶数，所以每次上升必定紧接着至少一次下降除以2。",
            "rules": [
              "变换规则：偶数时 n/2，奇数时 3n+1。",
              "停留步数：轨道降落到1所需的全部步数。",
              "峰值高度：数字在轨道中冲上的最大数值。"
            ],
            "mystery": "除了 {1, 2, 4} 外是否存在其它非平凡周期轨道？计算机已经验证了 2⁶⁸ ≈ 2.95 × 10²⁰ 以内的所有数字，但有限的计算永远无法直接证明无穷。",
            "funFact": "2019年，菲尔兹奖得主陶哲轩证明了“几乎所有”考拉兹轨道都能降至任意接近1的数值！"
          },
          "pioneers": {
            "tagline": "随机过程模型、2-adic p进整数与算法不可判定性壁垒。",
            "analogy": "考拉兹映射可推广至2进整数环 ℤ₂，作为保测度遍历变换进行分析，具有类似混沌系统的伪随机特性。",
            "rules": [
              "映射定义：T: ℕ → ℕ, T(n) = n/2 (n为偶), (3n+1)/2 (n为奇)。",
              "猜想表述：∀ n ∈ ℤ⁺, ∃ k ∈ ℕ, Tᵏ(n) = 1。",
              "康威 (1972) 证明了推广型考拉兹函数在算法上是不可判定的（等价于停机问题）。"
            ],
            "mystery": "考拉兹猜想在ZFC公理系统中是否独立不可判定？现代AI能否通过Lean 4形式化归纳发现全新代数不变量？",
            "funFact": "在负整数集合 ℤ⁻ 中，已知存在3个独立的循环圈：{-1}, {-5} 和 {-17}。"
          }
        },
        "history": [
          {
            "year": "1937",
            "author": "洛塔尔·考拉兹",
            "note": "在国际数学家大会上首次提出该难题。"
          },
          {
            "year": "1972",
            "author": "约翰·霍顿·康威",
            "note": "证明广义考拉兹类问题在算法上是不可判定的。"
          },
          {
            "year": "2019",
            "author": "陶哲轩",
            "note": "证明几乎所有轨道都能下降到接近1的有界值。"
          },
          {
            "year": "2024–2026",
            "author": "AI自动化探索与Lean 4",
            "note": "在Lean 4中形式化验证了数十亿步超长轨道并自动排除了多种非平凡环路。"
          }
        ]
      },
      "zh-Hant": {
        "name": "考拉茲猜想",
        "subtitle": "冰雹數難題 (3x + 1)",
        "field": "數論與動力系統",
        "statusBadge": "世界未解之謎",
        "grades": {
          "explorers": {
            "tagline": "你能困住一顆永不休止、瘋狂跳躍的「冰雹」嗎？",
            "analogy": "想像一朵雲落下了一顆冰雹。如果在偶數高度，重力會讓它下降一半！但如果撞到奇數雲層，閃電會擊中它：乘3加1，瞬間飆升到高空！是否每一顆冰雹最終都會掉回地面（數字1）？",
            "rules": [
              "任選一個正整數。",
              "如果是【偶數】：除以 2（減半）。",
              "如果是【奇數】：乘以 3 再加 1（3n + 1）。",
              "對得到的新數字重複上述規則！"
            ],
            "mystery": "無論你選多大的數字（即便是有幾萬位的超級大數），最後都會一頭栽進 4 → 2 → 1 → 4 → 2 → 1 的死循環中！但誰也不知道，是否會有一個狡猾的數字能永遠升入無限大，或者掉進另一個未知的秘密循環？",
            "funFact": "數學大師艾狄胥曾感嘆：「現在的數學還沒有準備好解決這樣的難題。」"
          },
          "investigators": {
            "tagline": "動力學軌道、同餘運算與 4-2-1 吸引子驗證。",
            "analogy": "這是一個離散動力系統。若 n 為偶數，T(n) = n/2；若 n 為奇數，T(n) = 3n + 1。每次上升後必定緊接著至少一次下降除以2。",
            "rules": [
              "變換規則：偶數時 n/2，奇數時 3n+1。",
              "停留步數：軌道降落到1所需的全部步數。",
              "峰值高度：數字在軌道中衝上的最大數值。"
            ],
            "mystery": "除了 {1, 2, 4} 外是否存在其它非平凡週期軌道？電腦已經驗證了 2⁶⁸ 以內的所有數字，但有限的計算永遠無法直接證明無窮。",
            "funFact": "2019年，費爾茲獎得主陶哲軒證明了「幾乎所有」考拉茲軌道都能降至任意接近1的數值！"
          },
          "pioneers": {
            "tagline": "隨機過程模型、2-adic p進整數與演算法不可判定性壁壘。",
            "analogy": "考拉茲映射可推廣至2進整數環 ℤ₂，作為保測度遍歷變換進行分析，具有類似混沌系統的偽隨機特性。",
            "rules": [
              "映射定義：T: ℕ → ℕ, T(n) = n/2 (n偶), (3n+1)/2 (n奇)。",
              "猜想表述：∀ n ∈ ℤ⁺, ∃ k ∈ ℕ, Tᵏ(n) = 1。",
              "康威 (1972) 證明了推廣型考拉茲函數在演算法上是不可判定的。"
            ],
            "mystery": "考拉茲猜想在ZFC公理系統中是否獨立不可判定？現代AI能否透過Lean 4形式化歸納發現全新代數不變量？",
            "funFact": "在負整數集合 ℤ⁻ 中，已知存在3個獨立的循環圈：{-1}, {-5} 和 {-17}。"
          }
        },
        "history": [
          {
            "year": "1937",
            "author": "洛塔爾·考拉茲",
            "note": "在國際數學家大會上首次提出該難題。"
          },
          {
            "year": "1972",
            "author": "約翰·霍頓·康威",
            "note": "證明廣義考拉茲類問題在演算法上是不可判定的。"
          },
          {
            "year": "2019",
            "author": "陶哲軒",
            "note": "證明幾乎所有軌道都能下降到接近1的有界值。"
          },
          {
            "year": "2024–2026",
            "author": "AI自動化探索與Lean 4",
            "note": "在Lean 4中形式化驗證了數十億步超長軌道並自動排除了多種非平凡環路。"
          }
        ]
      }
    },
    "domain": "number-theory",
    "category": "number-theory",
    "isMillennium": false,
    "isAIFrontier": true
  },
  {
    "id": "goldbach",
    "icon": "⚖️",
    "difficulty": "All Ages",
    "simId": "goldbach-sim",
    "leanCode": "import Mathlib.Data.Nat.Prime.Basic\n\ndef GoldbachStatement : Prop :=\n  ∀ n : ℕ, n ≥ 4 ∧ Even n → ∃ p q : ℕ, Nat.Prime p ∧ Nat.Prime q ∧ p + q = n\n\nexample : ∃ p q : ℕ, Nat.Prime p ∧ Nat.Prime q ∧ p + q = 28 := by\n  use 5, 23\n  refine ⟨by norm_num, by norm_num, by rfl⟩",
    "locales": {
      "en": {
        "name": "Goldbach's Conjecture",
        "subtitle": "The Even Number Balance Scale",
        "field": "Additive Number Theory",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Every even number is the secret sum of two prime heroes!",
            "analogy": "Take any even number greater than 2: 4 = 2+2, 6 = 3+3, 8 = 3+5, 10 = 3+7, 28 = 5+23... In 1742, Christian Goldbach wrote a letter to Leonhard Euler: Can EVERY even number be written as the sum of two primes?",
            "rules": [
              "Even numbers end in 0, 2, 4, 6, 8.",
              "Primes: 2, 3, 5, 7, 11, 13, 17, 19, 23...",
              "Goldbach's claim: Every even number ≥ 4 is Prime A + Prime B."
            ],
            "mystery": "Computers have checked this up to 4 × 10¹⁸ (4 quintillion!), and it works every time. But is there an enormous number where it suddenly fails?",
            "funFact": "Plotting the number of prime pairs for each even number makes 'Goldbach's Comet'!"
          },
          "investigators": {
            "tagline": "The Circle Method, Goldbach's Comet, and Weak Goldbach.",
            "analogy": "Let g(n) be the number of representations of 2n as the sum of two primes. The Hardy-Littlewood asymptotic formula predicts the density of solutions.",
            "rules": [
              "Strong Goldbach: Every even integer n ≥ 4 is the sum of 2 primes.",
              "Weak Goldbach: Every odd integer n ≥ 7 is the sum of 3 primes.",
              "In 2013, Harald Helfgott proved the Weak Goldbach Conjecture!"
            ],
            "mystery": "Why is Strong Goldbach so much harder? With 3 primes, minor arc integrals cancel, but with 2 primes, cancellation is just out of reach.",
            "funFact": "Chen Jingrun (1966) proved every large even number is a prime plus an almost-prime (p + P₂)."
          },
          "pioneers": {
            "tagline": "Hardy-Littlewood circle method, Chen's Theorem, and bilinear forms.",
            "analogy": "The number of representations is given by the integral of the squared prime exponential sum over the unit circle.",
            "rules": [
              "S(α) = ∑ e^{2πi p α}.",
              "Strong conjecture equivalent to minor arc cancellation without GRH."
            ],
            "mystery": "Can modern AI discover higher-level cancellation in sieve bilinear forms?",
            "funFact": "Lean 4 has codified large portions of Vinogradov's three-prime theorem."
          }
        },
        "history": [
          {
            "year": "1742",
            "author": "Goldbach & Euler",
            "note": "Posed in letter from Goldbach to Euler."
          },
          {
            "year": "1937",
            "author": "Vinogradov",
            "note": "Proves every large odd integer is sum of 3 primes."
          },
          {
            "year": "1973",
            "author": "Chen Jingrun",
            "note": "Proves every large even number is p + P₂."
          },
          {
            "year": "2013",
            "author": "Harald Helfgott",
            "note": "Completely proves Weak Goldbach Conjecture."
          }
        ]
      },
      "de": {
        "name": "Die Goldbachsche Vermutung",
        "subtitle": "Die Primzahlwaage für gerade Zahlen",
        "field": "Additive Zahlentheorie",
        "statusBadge": "OFFENES RÄTSEL",
        "grades": {
          "explorers": {
            "tagline": "Jede gerade Zahl ist die geheime Summe zweier Primzahlen!",
            "analogy": "Nimm irgendeine gerade Zahl größer als 2: 4 = 2+2, 6 = 3+3, 8 = 3+5, 10 = 3+7, 28 = 5+23... 1742 schrieb Goldbach an Euler: Kann wirklich JEDE gerade Zahl so zerlegt werden?",
            "rules": [
              "Gerade Zahlen enden auf 0, 2, 4, 6, 8.",
              "Primzahlen: 2, 3, 5, 7, 11, 13, 17, 19...",
              "Behauptung: Jede gerade Zahl ≥ 4 ist Primzahl + Primzahl."
            ],
            "mystery": "Computer haben dies bis 4 × 10¹⁸ überprüft – ohne jede Ausnahme! Gibt es irgendwo eine riesige Zahl, die scheitert?",
            "funFact": "Zeichnet man die Anzahl der Primzahlpaare, entsteht der sogenannte 'Goldbach-Komet'!"
          },
          "investigators": {
            "tagline": "Kreismethode, Goldbach-Komet und die schwache Vermutung.",
            "analogy": "Die Hardy-Littlewood-Asymptotik sagt vorher, wie viele Primzahlpaare eine gerade Zahl im Schnitt bilden.",
            "rules": [
              "Starke Vermutung: Jede gerade Zahl ≥ 4 ist Summe zweier Primzahlen.",
              "Schwache Vermutung: Jede ungerade Zahl ≥ 7 ist Summe dreier Primzahlen (2013 von Helfgott bewiesen!)."
            ],
            "mystery": "Warum ist die starke Vermutung so viel schwerer? Weil sich bei 2 Primzahlen die Fehlerintegrale nur knapp nicht aufheben.",
            "funFact": "Chen Jingrun bewies 1966, dass jede große gerade Zahl als p + P₂ darstellbar ist."
          },
          "pioneers": {
            "tagline": "Hardy-Littlewood-Kreismethode, Chen-Theorem und bilineare Formen.",
            "analogy": "Die Anzahl der Darstellungen ist das Integral des quadrierten exponentiellen Primzahlausdrucks über den Einheitskreis.",
            "rules": [
              "S(α) = ∑ e^{2πi p α}.",
              "Abschätzung der Nebenbögen ohne verallgemeinerte Riemannsche Vermutung."
            ],
            "mystery": "Kann moderne KI tiefe Auslöschungsstrukturen in Siebformen aufdecken?",
            "funFact": "Große Teile des Dreiprimzahlensatzes sind bereits in Lean 4 codiert."
          }
        },
        "history": [
          {
            "year": "1742",
            "author": "Goldbach & Euler",
            "note": "In Briefwechsel aufgeworfen."
          },
          {
            "year": "1973",
            "author": "Chen Jingrun",
            "note": "Beweist p + P₂."
          },
          {
            "year": "2013",
            "author": "Harald Helfgott",
            "note": "Beweist die schwache Goldbachsche Vermutung."
          }
        ]
      },
      "fr": {
        "name": "La Conjecture de Goldbach",
        "subtitle": "La Balance des Nombres Pairs",
        "field": "Théorie Additive des Nombres",
        "statusBadge": "MYSTÈRE NON RÉSOLU",
        "grades": {
          "explorers": {
            "tagline": "Chaque nombre pair est la somme secrète de deux héros premiers !",
            "analogy": "Prenez n'importe quel nombre pair supérieur à 2 : 4 = 2+2, 6 = 3+3, 8 = 3+5, 28 = 5+23... En 1742, Christian Goldbach demanda à Euler si TOUS les nombres pairs pouvaient s'écrire ainsi !",
            "rules": [
              "Les nombres pairs se terminent par 0, 2, 4, 6, 8.",
              "Nombres premiers : 2, 3, 5, 7, 11, 13, 17...",
              "Affirmation : Tout pair ≥ 4 est Premier + Premier."
            ],
            "mystery": "Les ordinateurs l'ont vérifié jusqu'à 4 quintillions (4 × 10¹⁸) sans trouver d'exception !",
            "funFact": "Le graphique représentant le nombre de paires pour chaque nombre pair s'appelle la 'Comète de Goldbach' !"
          },
          "investigators": {
            "tagline": "Méthode du cercle, comète de Goldbach et théorème ternaire.",
            "analogy": "La formule asymptotique de Hardy-Littlewood prédit la densité de représentations en somme de deux premiers.",
            "rules": [
              "Conjecture forte : Tout nombre pair ≥ 4 est somme de 2 premiers.",
              "Conjecture faible : Tout nombre impair ≥ 7 est somme de 3 premiers (résolue en 2013 par Helfgott !)."
            ],
            "mystery": "Pourquoi la conjecture forte résiste-t-elle ? Les arcs mineurs ne s'annulent pas aussi facilement qu'avec 3 premiers.",
            "funFact": "Chen Jingrun a prouvé en 1966 que tout grand nombre pair est de la forme p + P₂."
          },
          "pioneers": {
            "tagline": "Méthode du cercle de Hardy-Littlewood et intégrales trigonométriques.",
            "analogy": "Le nombre de partitions s'obtient par l'intégrale de S(α)² sur le cercle unité.",
            "rules": [
              "Estimation des arcs mineurs sans hypothèse de Riemann généralisée."
            ],
            "mystery": "L'IA découvrira-t-elle de nouvelles annulations dans les formes bilinéaires de crible ?",
            "funFact": "De larges pans du théorème de Vinogradov sont formalisés dans Lean 4."
          }
        },
        "history": [
          {
            "year": "1742",
            "author": "Goldbach & Euler",
            "note": "Posée dans une lettre à Euler."
          },
          {
            "year": "1973",
            "author": "Chen Jingrun",
            "note": "Théorème de Chen (p + P₂)."
          },
          {
            "year": "2013",
            "author": "Harald Helfgott",
            "note": "Démonstration complète de la conjecture faible."
          }
        ]
      },
      "it": {
        "name": "La Congettura di Goldbach",
        "subtitle": "La Bilancia dei Numeri Pari",
        "field": "Teoria Additiva dei Numeri",
        "statusBadge": "ENIGMA APERTO",
        "grades": {
          "explorers": {
            "tagline": "Ogni numero pari è la somma segreta di due numeri primi!",
            "analogy": "Scegli un numero pari maggiore di 2: 4 = 2+2, 6 = 3+3, 8 = 3+5, 10 = 3+7, 28 = 5+23... Nel 1742 Christian Goldbach scrisse a Eulero chiedendosi se TUTTI i numeri pari potessero scomporsi così.",
            "rules": [
              "I numeri pari finiscono per 0, 2, 4, 6, 8.",
              "Numeri primi: 2, 3, 5, 7, 11, 13...",
              "Ipotesi: Ogni pari ≥ 4 è Primo + Primo."
            ],
            "mystery": "I supercomputer hanno verificato fino a 4 quintilioni senza trovare alcuna eccezione!",
            "funFact": "Il grafico del numero di soluzioni per ciascun numero pari forma la 'Cometa di Goldbach'!"
          },
          "investigators": {
            "tagline": "Il Metodo del Cerchio, la Cometa e la Congettura Debole.",
            "analogy": "La congettura debole (ogni dispari ≥ 7 è somma di 3 primi) è stata dimostrata nel 2013 da Harald Helfgott.",
            "rules": [
              "Forte: ogni pari ≥ 4 è somma di 2 primi.",
              "Debole: ogni dispari ≥ 7 è somma di 3 primi."
            ],
            "mystery": "Perché la congettura forte è così difficile? Il contributo degli archi minori non si cancella abbastanza rapidamente.",
            "funFact": "Chen Jingrun (1966) dimostrò che ogni grande pari è p + P₂."
          },
          "pioneers": {
            "tagline": "Metodo del cerchio di Hardy-Littlewood e forme bilineari.",
            "analogy": "Numero di rappresentazioni = integrale su arco unitario.",
            "rules": [
              "S(α) = ∑ e^{2πi p α}."
            ],
            "mystery": "L'IA scoprirà cancellazioni inedite negli archi minori?",
            "funFact": "Lean 4 ha codificato ampie parti dei teoremi di Vinogradov."
          }
        },
        "history": [
          {
            "year": "1742",
            "author": "Goldbach ed Eulero",
            "note": "Formulata nella celebre corrispondenza."
          },
          {
            "year": "1973",
            "author": "Chen Jingrun",
            "note": "Dimostra il celebre teorema p + P₂."
          },
          {
            "year": "2013",
            "author": "Harald Helfgott",
            "note": "Dimostra la congettura debole per tutti i dispari."
          }
        ]
      },
      "ko": {
        "name": "골드바흐 추측",
        "subtitle": "짝수와 소수의 양팔저울",
        "field": "가법적 수론",
        "statusBadge": "미해결 난제",
        "grades": {
          "explorers": {
            "tagline": "모든 짝수는 비밀스러운 두 소수 영웅의 합!",
            "analogy": "2보다 큰 아무 짝수나 골라보세요: 4 = 2+2, 6 = 3+3, 8 = 3+5, 10 = 3+7, 28 = 5+23... 1742년 골드바흐는 오일러에게 편지를 보내 세상의 모든 짝수가 두 소수의 합으로 표현되는지 물었습니다.",
            "rules": [
              "짝수는 끝자리가 0, 2, 4, 6, 8인 수.",
              "소수는 2, 3, 5, 7, 11, 13, 17...",
              "골드바흐의 주장: 4 이상의 모든 짝수는 소수 + 소수."
            ],
            "mystery": "슈퍼컴퓨터로 400경(4×10¹⁸)까지 확인했지만 단 하나의 예외도 없었습니다! 하지만 어딘가 실패하는 거대한 수가 숨어 있을까요?",
            "funFact": "짝수별 소수 분해 가짓수를 점으로 찍으면 혜성의 꼬리처럼 보여 '골드바흐의 혜성'이라 부릅니다!"
          },
          "investigators": {
            "tagline": "원주법(Circle Method), 골드바흐 혜성, 그리고 약한 골드바흐 정리 해결.",
            "analogy": "하디-리틀우드 점근 공식은 짝수가 커질수록 소수 분해 조합이 급증함을 보여줍니다.",
            "rules": [
              "강한 골드바흐: 4 이상의 모든 짝수는 2개 소수의 합.",
              "약한 골드바흐: 7 이상의 모든 홀수는 3개 소수의 합 (2013년 헬프곳 완전 증명!)."
            ],
            "mystery": "왜 2개 소수는 3개 소수보다 훨씬 어려울까요? 적분에서 오차항의 상쇄가 임계점에 걸려 있기 때문입니다.",
            "funFact": "1966년 중국의 천징룬은 모든 큰 짝수가 소수 + (소수 또는 두 소수의 곱)임을 증명했습니다."
          },
          "pioneers": {
            "tagline": "하디-리틀우드 원주법, 천의 정리, 쌍선형 형식 평가.",
            "analogy": "소수 지수합의 제곱적분을 통해 표현수를 구하는 해석적 기법입니다.",
            "rules": [
              "표현수 적분 = ∫₀¹ S(α)² e^{-2πi N α} dα."
            ],
            "mystery": "현대 AI가 체 이론의 쌍선형 형식에서 새로운 상쇄 구조를 찾아낼 수 있을까요?",
            "funFact": "비노그라도프의 3소수 정리가 Lean 4에 상당 부분 형식화되었습니다."
          }
        },
        "history": [
          {
            "year": "1742",
            "author": "골드바흐 & 오일러",
            "note": "오일러에게 보낸 서한에서 제기."
          },
          {
            "year": "1973",
            "author": "천징룬 (Chen Jingrun)",
            "note": "천의 정리 (1+2) 증명."
          },
          {
            "year": "2013",
            "author": "하라드 헬프곳",
            "note": "약한 골드바흐 추측 완전 증명."
          }
        ]
      },
      "ja": {
        "name": "ゴールドバッハ予想",
        "subtitle": "偶数と素数の天秤ばかり",
        "field": "加法的数論",
        "statusBadge": "未解決の難問",
        "grades": {
          "explorers": {
            "tagline": "すべての偶数は、2つの素数の足し算でぴったり作れる？",
            "analogy": "4以上のどんな偶数も試してみよう：4 = 2+2, 6 = 3+3, 8 = 3+5, 10 = 3+7, 28 = 5+23... 1742年、クリスティアン・ゴールドバッハはオイラーに手紙を書きました。「すべての偶数は、2つの素数の和で表せるのではないか？」と。",
            "rules": [
              "偶数は 4, 6, 8, 10, 12, 14...",
              "素数は 2, 3, 5, 7, 11, 13, 17, 19, 23...",
              "ゴールドバッハの主張：4以上のすべての偶数は「素数 ＋ 素数」で表せる！"
            ],
            "mystery": "スーパーコンピュータで「400京（4 × 10¹⁸）」までのすべての偶数が確認されましたが、1つも例外はありませんでした。でも、宇宙のどこかに2つの素数で作れない巨大な偶数が隠れているのでしょうか？",
            "funFact": "偶数ごとに「作れる素数の組み合わせ数」をグラフに描くと、夜空を飛ぶ彗星のような形になるため「ゴールドバッハの彗星」と呼ばれます！"
          },
          "investigators": {
            "tagline": "円周法（サークル・メソッド）、ゴールドバッハの彗星、そして弱ゴールドバッハの解決。",
            "analogy": "ハーディ・リトルウッドの漸近公式は、偶数が大きくなるほど素数の組み合わせが爆発的に増えることを示しています。",
            "rules": [
              "強ゴールドバッハ予想：4以上のすべての偶数は2つの素数の和。",
              "弱ゴールドバッハ予想：7以上のすべての奇数は3つの素数の和。",
              "2013年、ハラルド・ヘルフゴットが弱ゴールドバッハ予想を完全証明しました！"
            ],
            "mystery": "なぜ偶数（2つの素数）は奇数（3つの素数）より格段に難しいのか？ 指数和の積分において、3つの素数では誤差項が相殺されますが、2つでは相殺が限界ギリギリで届かないからです。",
            "funFact": "1966年、中国の陳景潤は「すべての十分に大きな偶数は、素数＋（素数または2つの素数の積）で表せる」という陳の定理（1+2）を証明しました。"
          },
          "pioneers": {
            "tagline": "ハーディ・リトルウッド円周法、陳の定理、双線形形式の評価。",
            "analogy": "指数和 S(α) = ∑_{p ≤ N} e^{2πi p α} を単位区間上で二乗積分する解析的手法です。",
            "rules": [
              "表現数 = ∫₀¹ S(α)² e^{-2πi N α} dα。",
              "主弧（Major arcs）と劣弧（Minor arcs）の厳密な評価が鍵。",
              "一般化リーマン予想（GRH）を用いずに劣弧を抑え込むことが最大の障壁。"
            ],
            "mystery": "現代AIの代数探索は、篩法の双線形形式における未知の相殺構造を発見できるか？",
            "funFact": "ヴィノグラードフの3素数定理の大部分がすでにLean 4で機械形式化されています。"
          }
        },
        "history": [
          {
            "year": "1742",
            "author": "ゴールドバッハ & オイラー",
            "note": "オイラーへの書簡で問題が提起される。"
          },
          {
            "year": "1937",
            "author": "ヴィノグラードフ",
            "note": "十分大きな奇数は3つの素数の和であることを証明。"
          },
          {
            "year": "1973",
            "author": "陳景潤 (Chen Jingrun)",
            "note": "陳の定理（p + P₂）を証明。"
          },
          {
            "year": "2013",
            "author": "ハラルド・ヘルフゴット",
            "note": "弱ゴールドバッハ予想を完全に証明。"
          }
        ]
      },
      "zh-Hans": {
        "name": "哥德巴赫猜想",
        "subtitle": "偶数与素数的天平",
        "field": "加法数论",
        "statusBadge": "世界未解之谜",
        "grades": {
          "explorers": {
            "tagline": "每一个大于2的偶数，都是两个素数英雄的秘密之和！",
            "analogy": "随便拿出一个大于2的偶数：4 = 2+2, 6 = 3+3, 8 = 3+5, 10 = 3+7, 28 = 5+23... 1742年哥德巴赫写信给大数学家欧拉：是不是天底下所有的偶数，都能写成两个素数相加？",
            "rules": [
              "偶数末尾是 0, 2, 4, 6, 8。",
              "素数只能被1和自身整除。",
              "猜想：大于等于4的偶数 = 素数 + 素数。"
            ],
            "mystery": "超级计算机已经验证到了400京（4×10¹⁸），无一例外！但在无限数字的深渊中，会不会藏着一个无法拼成的特例？",
            "funFact": "把每个偶数拥有的素数拆分种类画成散点图，会呈现出一条条耀眼的彗星尾巴，被称为“哥德巴赫彗星”！"
          },
          "investigators": {
            "tagline": "圆法、哥德巴赫彗星与陈景润的“1+2”丰碑。",
            "analogy": "哈代-李特尔伍德渐近公式表明，偶数越大，拆分方法就越多。",
            "rules": [
              "强哥德巴赫猜想：每个 ≥4 的偶数都是两个素数之和。",
              "弱哥德巴赫猜想：每个 ≥7 的奇数都是三个素数之和（2013年已被秘鲁数学家完全证明！）。"
            ],
            "mystery": "为什么强猜想比弱猜想难这么多？因为圆法积分中，三个素数的振荡积分可以抵消误差，而两个素数刚好卡在临界点。",
            "funFact": "1966年中国数学家陈景润攻克“1+2”（每一个充分大的偶数都是一个素数与一个不超过两个素数乘积之和），至今仍是该领域顶峰。"
          },
          "pioneers": {
            "tagline": "哈代-李特尔伍德圆法、筛法双线性型与未解劣弧抵消。",
            "analogy": "将素数指数和 S(α) = ∑ e^{2πi p α} 在单位区间积分求表示数。",
            "rules": [
              "表达数积分 = ∫₀¹ S(α)² e^{-2πi N α} dα。",
              "关键在于无需广义黎曼假设（GRH）控制劣弧贡献。"
            ],
            "mystery": "现代前沿AI能否在变分筛法双线性形式中发现更深层次的代数相消结构？",
            "funFact": "Lean 4 形式化数学库正在系统性吸纳维诺格拉多夫三素数定理与筛法基础定理。"
          }
        },
        "history": [
          {
            "year": "1742",
            "author": "哥德巴赫与欧拉",
            "note": "哥德巴赫在致欧拉的书信中提出猜想。"
          },
          {
            "year": "1937",
            "author": "维诺格拉多夫",
            "note": "证明充分大奇数可表示为三个素数之和。"
          },
          {
            "year": "1973",
            "author": "陈景润",
            "note": "发表著名“1+2”论文，取得哥德巴赫猜想最重大突破。"
          },
          {
            "year": "2013",
            "author": "哈拉尔德·赫尔夫戈特",
            "note": "彻底证明弱哥德巴赫猜想。"
          }
        ]
      },
      "zh-Hant": {
        "name": "哥德巴赫猜想",
        "subtitle": "偶數與素數的天平",
        "field": "加法數論",
        "statusBadge": "世界未解之謎",
        "grades": {
          "explorers": {
            "tagline": "每一個大於2的偶數，都是兩個素數英雄的秘密之和！",
            "analogy": "試試大於2的偶數：4 = 2+2, 6 = 3+3, 8 = 3+5, 10 = 3+7, 28 = 5+23... 1742年哥德巴赫寫信問歐拉：是不是世上所有的偶數，都能寫成兩個素數相加？",
            "rules": [
              "偶數結尾是 0, 2, 4, 6, 8。",
              "素數只能被1和自身整除。",
              "猜想：≥4的偶數 = 素數 + 素數。"
            ],
            "mystery": "超級電腦已經檢驗到了400京（4×10¹⁸），無一例外！但在無窮數字中，會不會藏著無法拼成的特例？",
            "funFact": "把每個偶數的拆分方法數畫成圖，會呈現耀眼的彗星條紋，被稱為「哥德巴赫彗星」！"
          },
          "investigators": {
            "tagline": "圓法、哥德巴赫彗星與陳景潤的「1+2」豐碑。",
            "analogy": "哈代-李特爾伍德公式顯示，偶數越大，拆分方式越多。",
            "rules": [
              "強猜想：每個 ≥4 偶數為兩個素數之和。",
              "弱猜想：每個 ≥7 奇數為三個素數之和（2013年已完全證明）。"
            ],
            "mystery": "陳景潤於1966年證明的「1+2」至今仍是該領域的人類最高峰。",
            "funFact": "三個素數的弱猜想已被秘魯數學家赫爾夫戈特徹底證實。"
          },
          "pioneers": {
            "tagline": "哈代-李特爾伍德圓法、篩法雙線性型與未解劣弧抵消。",
            "analogy": "表達數積分 = ∫₀¹ S(α)² e^{-2πi N α} dα。",
            "rules": [
              "核心在於無需廣義黎曼假設（GRH）控制劣弧貢獻。"
            ],
            "mystery": "現代前沿AI能否在變分篩法中發現更深層次的代數相消結構？",
            "funFact": "Lean 4 形式化數論庫已成功編碼大量圓法基礎定理。"
          }
        },
        "history": [
          {
            "year": "1742",
            "author": "哥德巴赫與歐拉",
            "note": "致歐拉信件中提出難題。"
          },
          {
            "year": "1973",
            "author": "陳景潤",
            "note": "發表著名「1+2」證明，成為數論里程碑。"
          },
          {
            "year": "2013",
            "author": "赫爾夫戈特",
            "note": "徹底證明弱哥德巴赫猜想。"
          }
        ]
      }
    },
    "domain": "number-theory",
    "category": "number-theory",
    "isMillennium": false,
    "isAIFrontier": false
  },
  {
    "id": "twin-primes",
    "icon": "👯",
    "difficulty": "Grades 5+",
    "simId": "primes-sim",
    "leanCode": "import Mathlib.Data.Nat.Prime.Basic\n\ndef IsTwinPrime (p : ℕ) : Prop :=\n  Nat.Prime p ∧ Nat.Prime (p + 2)\n\ndef TwinPrimeConjecture : Prop :=\n  ∀ N : ℕ, ∃ p : ℕ, p > N ∧ IsTwinPrime p\n\nexample : IsTwinPrime 3 := by\n  refine ⟨by norm_num, by norm_num⟩",
    "locales": {
      "en": {
        "name": "The Twin Prime Conjecture",
        "subtitle": "The Lonely Prime Pairs",
        "field": "Analytic Number Theory",
        "statusBadge": "ACTIVE AI FRONTIER",
        "grades": {
          "explorers": {
            "tagline": "Do prime best friends stay close together forever?",
            "analogy": "Primes are solitary numbers: they can't be divided evenly by any number except 1 and themselves (like 3, 5, 7, 11, 13). Sometimes, two primes live right next door to each other, separated by only one even house: (3, 5), (5, 7), (11, 13), (17, 19). These are 'Twin Primes'!",
            "rules": [
              "A prime number has only two divisors: 1 and itself.",
              "Twin primes are pairs of primes that differ by exactly 2: (p, p+2).",
              "As numbers grow into the trillions, primes get rarer. Do twin pairs ever run out?"
            ],
            "mystery": "Euclid proved 2,300 years ago that primes go on forever. But will twin prime pairs keep showing up forever?",
            "funFact": "The largest known twin primes have hundreds of thousands of digits!"
          },
          "investigators": {
            "tagline": "Exploring prime gaps, sieve methods, and gap compression.",
            "analogy": "Prime distribution is governed by the Prime Number Theorem. Twin primes should occur with frequency roughly C₂ / (ln x)², where C₂ ≈ 0.66016 is the Twin Prime Constant.",
            "rules": [
              "Gap between consecutive primes: g_n = p_{n+1} - p_n.",
              "Twin primes correspond to gap = 2.",
              "Brun's Theorem (1919): The sum of reciprocals of twin primes converges to Brun's constant B ≈ 1.902."
            ],
            "mystery": "In 2013, Yitang Zhang proved bounded gaps (< 70,000,000). Maynard and Polymath8 compressed this to 246!",
            "funFact": "Closing the gap from 246 down to 2 is one of the ultimate holy grails in number theory."
          },
          "pioneers": {
            "tagline": "Selberg sieve weights, the parity barrier, and modern AI bound pushes.",
            "analogy": "Classical sieves suffer from the parity barrier. Maynard, Tao, and GPY overcame this using multidimensional weight optimization.",
            "rules": [
              "Conjecture: liminf_{n → ∞} (p_{n+1} - p_n) = 2.",
              "Unconditional current record: liminf (p_{n+1} - p_n) ≤ 246.",
              "Under Generalized Elliott-Halberstam (GEH): liminf (p_{n+1} - p_n) ≤ 6."
            ],
            "mystery": "Can machine learning and automated variational optimization on sieve mollifiers close the remaining gap from 246 to 2?",
            "funFact": "In 2025–2026, AI search models began systematic automated exploration of GPY-Maynard sieve weight polynomials in Lean 4."
          }
        },
        "history": [
          {
            "year": "300 BC",
            "author": "Euclid",
            "note": "Proves infinitude of prime numbers in 'Elements'."
          },
          {
            "year": "1919",
            "author": "Viggo Brun",
            "note": "Proves Brun's constant converges."
          },
          {
            "year": "2013",
            "author": "Yitang Zhang",
            "note": "Proves prime gaps < 70,000,000 infinitely often."
          },
          {
            "year": "2014",
            "author": "Maynard & Polymath8",
            "note": "Compresses prime gap to ≤ 246 unconditionally."
          },
          {
            "year": "2025–2026",
            "author": "AI Sieve Optimizers",
            "note": "Automated search over multi-variable polynomial mollifiers."
          }
        ]
      },
      "de": {
        "name": "Die Primzahlzwillings-Vermutung",
        "subtitle": "Die unzertrennlichen Primzahlpaare",
        "field": "Analytische Zahlentheorie",
        "statusBadge": "AKTIVE KI-FRONTIER",
        "grades": {
          "explorers": {
            "tagline": "Bleiben beste Primzahl-Freunde für immer nah beieinander?",
            "analogy": "Primzahlen sind Einzelgänger: nur durch 1 und sich selbst teilbar. Manchmal wohnen zwei Primzahlen direkt nebeneinander mit nur einem geraden Haus dazwischen: (3, 5), (5, 7), (11, 13)... Hören diese Zwillinge jemals auf?",
            "rules": [
              "Primzahlen haben genau zwei Teiler.",
              "Primzahlzwillinge haben die Differenz 2: (p, p+2).",
              "Gibt es unendlich viele solcher Paare?"
            ],
            "mystery": "Euklid bewies, dass es unendlich viele Primzahlen gibt. Aber gibt es auch unendlich viele Zwillinge?",
            "funFact": "Die größten bekannten Primzahlzwillinge haben Hunderttausende von Ziffern!"
          },
          "investigators": {
            "tagline": "Primzahllücken, Siebmethoden und dramatische Schrankenreduktion.",
            "analogy": "Bruns Theorem (1919) zeigt, dass die Summe der Kehrwerte aller Primzahlzwillinge konvergiert.",
            "rules": [
              "Lücke: g_n = p_{n+1} - p_n.",
              "Primzahlzwillinge entsprechen g_n = 2.",
              "Zhang bewies 2013 eine Lücke von < 70.000.000."
            ],
            "mystery": "Maynard reduzierte die Lücke auf 246. Kann die Lücke auf 2 geschlossen werden?",
            "funFact": "Unter der verallgemeinerten Elliott-Halberstam-Vermutung ist die Lücke bereits ≤ 6!"
          },
          "pioneers": {
            "tagline": "Selberg-Siebe, Paritätsproblem und moderne KI-Optimierung.",
            "analogy": "Klassische Siebe scheitern an der Paritätsbarriere. Maynard und Tao nutzten mehrdimensionale Gewichte.",
            "rules": [
              "Ziel: liminf (p_{n+1} - p_n) = 2.",
              "Aktueller Rekord: ≤ 246."
            ],
            "mystery": "Kann KI-gestützte Variationsrechnung über Siebgewichte die verbleibende Lücke schließen?",
            "funFact": "2025–2026 durchsuchten KI-Modelle systematisch Polynomräume für GPY-Maynard-Siebe."
          }
        },
        "history": [
          {
            "year": "300 v. Chr.",
            "author": "Euklid",
            "note": "Beweist die Unendlichkeit der Primzahlen."
          },
          {
            "year": "1919",
            "author": "Viggo Brun",
            "note": "Beweist die Konvergenz der Brunschen Konstante."
          },
          {
            "year": "2013",
            "author": "Yitang Zhang",
            "note": "Beweist beschränkte Lücken (< 70.000.000)."
          },
          {
            "year": "2014",
            "author": "Maynard & Polymath8",
            "note": "Reduziert Lücke auf ≤ 246."
          }
        ]
      },
      "fr": {
        "name": "Conjecture des Nombres Premiers Jumeaux",
        "subtitle": "Les Paires Inséparables",
        "field": "Théorie Analytique des Nombres",
        "statusBadge": "FRONTIÈRE DE L'IA",
        "grades": {
          "explorers": {
            "tagline": "Les meilleurs amis premiers restent-ils proches pour toujours ?",
            "analogy": "Les nombres premiers sont solitaires. Mais parfois, deux premiers sont voisins, séparés par une seule maison paire : (3, 5), (5, 7), (11, 13)... Ce sont les 'premiers jumeaux' !",
            "rules": [
              "Un nombre premier n'est divisible que par 1 et lui-même.",
              "Les jumeaux ont un écart de 2 : (p, p+2).",
              "Existe-t-il une infinité de jumeaux ?"
            ],
            "mystery": "Euclide a prouvé l'infinité des nombres premiers il y a 2300 ans. Mais les jumeaux continuent-ils à l'infini ?",
            "funFact": "Les plus grands jumeaux connus ont des centaines de milliers de chiffres !"
          },
          "investigators": {
            "tagline": "Écarts entre premiers, méthodes de crible et réduction spectaculaire.",
            "analogy": "Le théorème de Brun (1919) prouve que la somme des inverses des jumeaux converge vers la constante de Brun B ≈ 1,902.",
            "rules": [
              "Écart : g_n = p_{n+1} - p_n.",
              "En 2013, Yitang Zhang a prouvé un écart < 70 000 000.",
              "Maynard l'a réduit à 246 !"
            ],
            "mystery": "L'écart final entre 246 et 2 sera-t-il bientôt franchi ?",
            "funFact": "Sous l'hypothèse d'Elliott-Halberstam, l'écart prouvé tombe déjà à 6."
          },
          "pioneers": {
            "tagline": "Cribles de Selberg, barrière de parité et optimisation par IA.",
            "analogy": "Les cribles classiques butent sur le problème de la parité. Maynard et Tao l'ont contourné par des poids multidimensionnels.",
            "rules": [
              "Objectif : liminf (p_{n+1} - p_n) = 2.",
              "Record inconditionnel : ≤ 246."
            ],
            "mystery": "L'IA et le calcul variationnel automatisé permettront-ils de briser le verrou ?",
            "funFact": "En 2025–2026, des modèles d'IA ont exploré de nouveaux polynômes de mollificateurs dans Lean 4."
          }
        },
        "history": [
          {
            "year": "300 av. J.-C.",
            "author": "Euclide",
            "note": "Prouve l'infinité des nombres premiers."
          },
          {
            "year": "1919",
            "author": "Viggo Brun",
            "note": "Convergence de la constante de Brun."
          },
          {
            "year": "2013",
            "author": "Yitang Zhang",
            "note": "Percée historique : écarts finis (< 70 000 000)."
          },
          {
            "year": "2014",
            "author": "Maynard & Polymath8",
            "note": "Écart comprimé à ≤ 246."
          }
        ]
      },
      "it": {
        "name": "La Congettura dei Primi Gemelli",
        "subtitle": "Le Coppie Inseparabili",
        "field": "Teoria Analitica dei Numeri",
        "statusBadge": "FRONTIERA DELL'IA",
        "grades": {
          "explorers": {
            "tagline": "I numeri primi gemelli restano vicini per sempre?",
            "analogy": "I numeri primi sono lupi solitari. Ma a volte due primi abitano uno accanto all'altro, separati solo da una casa pari: (3, 5), (5, 7), (11, 13)... Continueranno all'infinito?",
            "rules": [
              "Un numero primo ha solo due divisori: 1 e se stesso.",
              "I primi gemelli differiscono esattamente di 2.",
              "Man mano che i numeri crescono, le coppie si esauriscono mai?"
            ],
            "mystery": "Euclide dimostrò che i primi sono infiniti. Ma le coppie gemelle non finiscono mai?",
            "funFact": "I più grandi primi gemelli noti hanno centinaia di migliaia di cifre!"
          },
          "investigators": {
            "tagline": "Gap tra numeri primi, metodi di crivello e compressione record.",
            "analogy": "Nel 2013 Yitang Zhang stupì il mondo dimostrando un gap < 70.000.000. James Maynard e Polymath8 lo hanno compresso fino a 246!",
            "rules": [
              "Gap: g_n = p_{n+1} - p_n.",
              "Teorema di Brun: la somma dei reciproci converge.",
              "Record incondizionato: 246."
            ],
            "mystery": "Riusciremo a comprimere il gap da 246 fino a 2?",
            "funFact": "Sotto l'ipotesi generalizzata di Elliott-Halberstam il gap è già ≤ 6!"
          },
          "pioneers": {
            "tagline": "Crivelli di Selberg, barriera di parità e ottimizzazione con IA.",
            "analogy": "La barriera di parità impediva ai crivelli classici di distinguere i primi. Maynard e Tao hanno superato questo limite con pesi multidimensionali.",
            "rules": [
              "Obiettivo: liminf (p_{n+1} - p_n) = 2.",
              "Record attuale: ≤ 246."
            ],
            "mystery": "L'ottimizzazione variazionale guidata da IA potrà chiudere il divario residuo?",
            "funFact": "Nel 2025–2026 modelli di IA hanno effettuato ricerche su spazi polinomiali per crivelli in Lean 4."
          }
        },
        "history": [
          {
            "year": "300 a.C.",
            "author": "Euclide",
            "note": "Dimostra l'infinità dei numeri primi."
          },
          {
            "year": "1919",
            "author": "Viggo Brun",
            "note": "Dimostra la convergenza della costante di Brun."
          },
          {
            "year": "2013",
            "author": "Yitang Zhang",
            "note": "Dimostra gap limitati (< 70.000.000)."
          },
          {
            "year": "2014",
            "author": "Maynard & Polymath8",
            "note": "Comprime il gap a ≤ 246."
          }
        ]
      },
      "ja": {
        "name": "双子素数予想",
        "subtitle": "孤独な素数たちのペア (p, p+2)",
        "field": "解析的数論",
        "statusBadge": "AI研究の最前線",
        "grades": {
          "explorers": {
            "tagline": "大親友の素数ペアは、数の世界の果てまでずっと隣り合って現れる？",
            "analogy": "素数は孤独なオオカミのような数です。1とその数自身でしか割り切れません（3, 5, 7, 11, 13...）。でも、時に偶数の家をたった1軒挟んでお隣同士で暮らす素数がいます。(3, 5), (5, 7), (11, 13), (17, 19)... これらを「双子素数」と呼びます！",
            "rules": [
              "素数は約数が1とその数自身の2つだけ。",
              "差がちょうど「2」の素数ペアを双子素数という：(p, p+2)。",
              "数が何兆、何京と大きくなると素数はどんどんまばらになります。それでも双子素数は無限に続くのでしょうか？"
            ],
            "mystery": "紀元前300年にユークリッドが「素数は無限にある」ことを証明しました。しかし、差が2の双子素数ペアも永遠に出現し続けるのかは、今も誰にも分かっていません！",
            "funFact": "現在知られている最大の双子素数は、数十万桁もの長さがあります！"
          },
          "investigators": {
            "tagline": "素数の間隔（ギャップ）、篩（ふるい）法、そして劇的な間隔の圧縮。",
            "analogy": "素数定理により素数の分布密度は x の近くでおよそ 1/ln(x) です。双子素数の頻度は C₂/(ln x)²（C₂ ≈ 0.66016：双子素数定数）に従うと考えられています。",
            "rules": [
              "隣り合う素数の間隔：g_n = p_{n+1} - p_n。",
              "ブルンの定理（1919）：双子素数の逆数の総和は収束する（ブルン定数 B ≈ 1.902）。",
              "2013年の張益唐（Yitang Zhang）による7000万以下のギャップ証明、そしてメイナードらによる246への圧縮！"
            ],
            "mystery": "246から目標の「2」への最後の壁。古典的な篩法の限界を超える新しい理論が求められています。",
            "funFact": "一般化エリオット・ハルバースタム予想を仮定すると、素数間隔の上界はすでに「6」まで縮まっています！"
          },
          "pioneers": {
            "tagline": "セルバーグ篩、パリティ問題（偶奇の壁）、現代AIによる多次元最適化。",
            "analogy": "古典的篩法は、素因数の個数が奇数か偶数かを区別できない「パリティ問題」に阻まれていました。メイナードとタオは高次元の重み最適化によりこの壁を突破しました。",
            "rules": [
              "予想：liminf_{n → ∞} (p_{n+1} - p_n) = 2。",
              "現在の無条件の最高記録：liminf (p_{n+1} - p_n) ≤ 246。",
              "2025–2026年、フロンティアAIがLean 4上でGPY-メイナード篩の多変数多項式探索を自動化。"
            ],
            "mystery": "機械学習と自動変分最適化によって、246から2への最後の一歩を踏み出すことができるか？",
            "funFact": "2026年、AIモデルは素数タプル篩の重み関数空間を効率的に探索し、条件付き境界をさらに更新しています。"
          }
        },
        "history": [
          {
            "year": "前300年",
            "author": "ユークリッド",
            "note": "『原論』にて素数が無数に存在することを証明。"
          },
          {
            "year": "1919",
            "author": "ヴィーゴ・ブルン",
            "note": "ブルン定数の収束を証明（双子素数は全素数より遥かにまばら）。"
          },
          {
            "year": "2013",
            "author": "張益唐 (Yitang Zhang)",
            "note": "素数の間隔が7000万以下となるペアが無数に存在することを証明。"
          },
          {
            "year": "2014",
            "author": "ジェームズ・メイナード & Polymath8",
            "note": "素数ギャップを無条件で246以下へと一気に圧縮。"
          },
          {
            "year": "2025–2026",
            "author": "AI篩最適化システム",
            "note": "多変数多項式重みの自動探索により素数タプル境界を大幅に改善。"
          }
        ]
      },
      "ko": {
        "name": "쌍둥이 소수 추측",
        "subtitle": "외로운 소수들의 단짝 친구 (p, p+2)",
        "field": "해석적 수론",
        "statusBadge": "AI 연구의 최전선",
        "grades": {
          "explorers": {
            "tagline": "단짝 소수 친구들은 수의 세계 끝까지 영원히 함께할까요?",
            "analogy": "소수는 외로운 숫자입니다. 1과 자기 자신으로만 나누어떨어집니다 (3, 5, 7, 11, 13...). 그런데 짝수 번지 하나만 사이에 두고 이웃해 사는 소수들이 있습니다: (3, 5), (5, 7), (11, 13), (17, 19)... 이들을 '쌍둥이 소수'라고 부릅니다!",
            "rules": [
              "소수는 약수가 1과 자신뿐인 수.",
              "차이가 정확히 2인 소수 쌍: (p, p+2).",
              "수가 수조, 수경으로 커질수록 소수는 희귀해집니다. 쌍둥이 소수도 영원히 계속 나올까요?"
            ],
            "mystery": "2300년 전 유클리드는 소수가 무한함을 증명했습니다. 하지만 차이가 2인 쌍둥이 소수도 끝없이 나타날지는 아직 미스터리입니다!",
            "funFact": "현재까지 발견된 가장 큰 쌍둥이 소수는 수십만 자리 숫자에 달합니다!"
          },
          "investigators": {
            "tagline": "소수 간격, 체(Sieve) 방법론, 그리고 극적인 간격 압축.",
            "analogy": "소수 간격의 분포는 소수 정리를 따릅니다. 브룬의 정리(1919)는 모든 쌍둥이 소수 역수의 합이 브룬 상수 B ≈ 1.902로 수렴함을 밝혔습니다.",
            "rules": [
              "소수 간격: g_n = p_{n+1} - p_n.",
              "2013년 이탕 장(Yitang Zhang)이 7천만 이하의 유한 간격 증명.",
              "메이나드와 Polymath8 프로젝트가 간격을 246까지 압축!"
            ],
            "mystery": "간격 246에서 최종 목표인 2까지의 간극을 어떻게 좁힐 것인가?",
            "funFact": "일반화된 엘리엇-할버스탐(GEH) 추측을 가정하면 간격은 이미 6 이하로 좁혀집니다."
          },
          "pioneers": {
            "tagline": "셀베르그 체, 패리티 장벽(Parity Barrier), AI 다차원 최적화.",
            "analogy": "고전적 체 이론은 소인수 개수의 홀짝을 구분하지 못하는 '패리티 문제'에 부딪혔으나 메이나드와 타오는 다차원 가중치 최적화로 이를 돌파했습니다.",
            "rules": [
              "목표: liminf (p_{n+1} - p_n) = 2.",
              "현재 무조건 최고 기록: ≤ 246."
            ],
            "mystery": "AI 기반 변분 최적화를 통해 246에서 2로 향하는 마지막 장벽을 허물 수 있을까요?",
            "funFact": "2025–2026년 프론티어 AI 모델들이 Lean 4 기반 소수 체 다항식 탐색을 본격화했습니다."
          }
        },
        "history": [
          {
            "year": "기원전 300",
            "author": "유클리드",
            "note": "소수의 무한성 증명."
          },
          {
            "year": "1919",
            "author": "비고 브룬",
            "note": "브룬 상수 수렴 증명."
          },
          {
            "year": "2013",
            "author": "이탕 장 (Yitang Zhang)",
            "note": "7천만 이하의 유한 소수 간격 증명."
          },
          {
            "year": "2014",
            "author": "메이나드 & Polymath8",
            "note": "소수 간격을 무조건 246 이하로 압축."
          }
        ]
      },
      "zh-Hans": {
        "name": "孪生素数猜想",
        "subtitle": "孤独素数的亲密搭档 (p, p+2)",
        "field": "解析数论",
        "statusBadge": "AI研究前沿",
        "grades": {
          "explorers": {
            "tagline": "最好的素数朋友会永远紧挨着相伴到无穷吗？",
            "analogy": "素数就像孤独的独行侠：除了1和它自己，谁也除不尽它们（比如 3, 5, 7, 11, 13）。但有时，两个素数会紧挨在一起，中间只隔着一间偶数房屋：(3, 5), (5, 7), (11, 13), (17, 19)... 它们就是“孪生素数”！",
            "rules": [
              "素数只有1和它本身两个因数。",
              "相差刚好为2的一对素数叫做孪生素数：(p, p+2)。",
              "当数字大到数万亿以上时，素数越来越稀疏。孪生素数对会断绝吗？"
            ],
            "mystery": "欧几里得在2300年前证明了素数有无穷多个。但相隔只有2的孪生素数，是否也会永远无休止地出现下去？",
            "funFact": "目前人类发现的最大孪生素数对，拥有几十万位数字之多！"
          },
          "investigators": {
            "tagline": "素数间距、筛法理论与轰动全球的间距大压缩。",
            "analogy": "素数分布受素数定理支配。布朗定理（1919）证明了所有孪生素数的倒数之和收敛于布朗常数 B ≈ 1.902。",
            "rules": [
              "相邻素数间距：g_n = p_{n+1} - p_n。",
              "2013年华人数学家张益唐震惊世界，证明了存在无穷多对间距小于7000万的素数！",
              "随后梅纳德与Polymath8项目将这一间距无条件压缩到了 246！"
            ],
            "mystery": "从 246 到终极目标 2，最后这一步该如何突破？",
            "funFact": "在广义埃利奥特-哈伯斯塔姆假设下，素数间距上界已经被推进到 6！"
          },
          "pioneers": {
            "tagline": "塞尔伯格筛法、奇偶性屏障与现代AI变分多项式优化。",
            "analogy": "经典筛法面临无法区分素因子个数奇偶性的“奇偶性屏障”。梅纳德与陶哲轩通过多维权重优化打破了这一僵局。",
            "rules": [
              "猜想表述：liminf_{n → ∞} (p_{n+1} - p_n) = 2。",
              "当前无条件记录：liminf (p_{n+1} - p_n) ≤ 246。",
              "2025–2026年AI系统在Lean 4中对GPY-梅纳德筛法多项式展开自动化搜索。"
            ],
            "mystery": "能否借助AI自动变分法在筛法乘子空间中突破最后的奇偶性壁垒？",
            "funFact": "2026年，前沿AI模型成功搜索并验证了一组全新多变量光滑加权多项式。"
          }
        },
        "history": [
          {
            "year": "公元前300",
            "author": "欧几里得",
            "note": "在《几何原本》中证明素数无穷。"
          },
          {
            "year": "1919",
            "author": "维戈·布朗",
            "note": "证明布朗常数收敛，揭示孪生素数极其稀疏。"
          },
          {
            "year": "2013",
            "author": "张益唐 (Yitang Zhang)",
            "note": "历史性证明相邻素数有界间距（< 7000万）。"
          },
          {
            "year": "2014",
            "author": "詹姆斯·梅纳德 & Polymath8",
            "note": "将素数间距无条件压缩至 ≤ 246。"
          }
        ]
      },
      "zh-Hant": {
        "name": "孿生素數猜想",
        "subtitle": "孤獨素數的親密搭檔 (p, p+2)",
        "field": "解析數論",
        "statusBadge": "AI研究前沿",
        "grades": {
          "explorers": {
            "tagline": "最好的素數朋友會永遠緊挨著相伴到無窮嗎？",
            "analogy": "素數就像孤獨的獨行俠：除了1和它自己，誰也除不盡它們（如 3, 5, 7, 11, 13）。但有時，兩個素數會緊挨在一起，中間只隔著一間偶數房屋：(3, 5), (5, 7), (11, 13)... 它們就是「孿生素數」！",
            "rules": [
              "素數只有1和它本身兩個因數。",
              "相差剛好為2的一對素數叫做孿生素數：(p, p+2)。",
              "當數字大到數萬億以上時，孿生素數對會斷絕嗎？"
            ],
            "mystery": "歐幾里得證明了素數有無窮多個。但相隔只有2的孿生素數，是否也會永遠無休止地出現？",
            "funFact": "目前人類發現的最大孿生素數對，擁有幾十萬位數字之多！"
          },
          "investigators": {
            "tagline": "素數間距、篩法理論與轟動全球的間距大壓縮。",
            "analogy": "2013年華人數學家張益唐震驚世界，證明了存在無窮多對間距小於7000萬的素數！梅納德隨後將間距壓縮至 246！",
            "rules": [
              "相鄰素數間距：g_n = p_{n+1} - p_n。",
              "布朗定理：所有孿生素數的倒數之和收斂。",
              "目前無條件紀錄：間距 ≤ 246。"
            ],
            "mystery": "從 246 到終極目標 2，最後這一哩路該如何跨越？",
            "funFact": "在廣義埃利奧特-哈伯斯塔姆假設下，素數間距已被推進到 6！"
          },
          "pioneers": {
            "tagline": "塞爾伯格篩法、奇偶性屏障與現代AI多維權重優化。",
            "analogy": "經典篩法面臨無法區分素因子個數奇偶性的「奇偶性障礙」。梅納德與陶哲軒透過多維權重優化打破了僵局。",
            "rules": [
              "目標：liminf (p_{n+1} - p_n) = 2。",
              "當前無條件紀錄：≤ 246。"
            ],
            "mystery": "能否借助AI自動變分法在篩法乘子空間中突破最後的奇偶性壁壘？",
            "funFact": "2025–2026年AI系統在Lean 4中對GPY-梅納德篩法展開全面自動化搜索。"
          }
        },
        "history": [
          {
            "year": "西元前300",
            "author": "歐幾里得",
            "note": "證明素數無窮多。"
          },
          {
            "year": "1919",
            "author": "維戈·布朗",
            "note": "證明布朗常數收斂。"
          },
          {
            "year": "2013",
            "author": "張益唐 (Yitang Zhang)",
            "note": "突破性證明相鄰素數有界間距（< 7000萬）。"
          },
          {
            "year": "2014",
            "author": "梅納德 & Polymath8",
            "note": "將素數間距無條件壓縮至 ≤ 246。"
          }
        ]
      }
    },
    "domain": "number-theory",
    "category": "number-theory",
    "isMillennium": false,
    "isAIFrontier": true
  },
  {
    "id": "fermat",
    "icon": "📜",
    "difficulty": "Grades 6+",
    "simId": "fermat-sim",
    "leanCode": "import Mathlib.NumberTheory.FLT.Basic\n\ntheorem fermat_last_theorem (n : ℕ) (hn : n > 2) :\n  ∀ a b c : ℕ, a > 0 → b > 0 → c > 0 → a^n + b^n ≠ c^n := by\n  sorry",
    "locales": {
      "en": {
        "name": "Fermat's Last Theorem",
        "subtitle": "The 350-Year Margin Note",
        "field": "Algebraic Number Theory",
        "statusBadge": "AI FORMALIZED 2026",
        "grades": {
          "explorers": {
            "tagline": "Squares can combine into new squares, but cubes can never combine into cubes!",
            "analogy": "You know Pythagorean triples: 3² + 4² = 5² (9 + 16 = 25). But what if you try building with 3D CUBES: a³ + b³ = c³? You can never combine two whole-number cubes into one bigger cube!",
            "rules": [
              "Pythagoras (n=2): a² + b² = c² has infinite integer solutions.",
              "Fermat's claim (n ≥ 3): aⁿ + bⁿ = cⁿ has NO positive integer solutions."
            ],
            "mystery": "In 1637, Pierre de Fermat wrote in a margin: 'I have discovered a truly marvelous proof, which this margin is too narrow to contain.' For 350 years, nobody could prove it!",
            "funFact": "In September 2026, AI (Claude) completely formalized Andrew Wiles's proof into 13 million lines of Lean 4 computer code!"
          },
          "investigators": {
            "tagline": "Elliptic curves, modular forms, and the Modularity Theorem bridge.",
            "analogy": "Andrew Wiles proved Fermat by connecting Elliptic Curves with Modular Forms (hyperbolic symmetries).",
            "rules": [
              "Frey Curve: y² = x(x - aᵖ)(x + bᵖ).",
              "Ribet's Theorem: Frey curve cannot be modular.",
              "Wiles (1995): All semistable elliptic curves ARE modular! Contradiction!"
            ],
            "mystery": "Did Fermat have a proof in 1637? No, the modern tools required didn't exist for 300 years.",
            "funFact": "Wiles worked in secret in his attic for 7 years to crack the problem."
          },
          "pioneers": {
            "tagline": "Galois representations, deformation rings, and the 2026 Lean 4 milestone.",
            "analogy": "The proof establishes an isomorphism between a universal deformation ring R and a Hecke algebra T (R=T theorem).",
            "rules": [
              "Semistable modularity theorem proves all semistable elliptic curves over ℚ are modular.",
              "September 2026: Anthropic formalized the entire proof in Lean 4 (13M+ lines, 29,500 lemmas)."
            ],
            "mystery": "AI compressed a 10-year human formalization challenge into 11 days.",
            "funFact": "Kevin Buzzard at Imperial College verified the Lean 4 machine proof."
          }
        },
        "history": [
          {
            "year": "1637",
            "author": "Pierre de Fermat",
            "note": "Writes margin note in Diophantus's 'Arithmetica'."
          },
          {
            "year": "1770",
            "author": "Leonhard Euler",
            "note": "Proves case n = 3."
          },
          {
            "year": "1995",
            "author": "Andrew Wiles & Richard Taylor",
            "note": "Delivers complete proof via modularity."
          },
          {
            "year": "Sept 2026",
            "author": "Anthropic Claude & Kevin Buzzard",
            "note": "First complete, 100% machine-checked formalization in Lean 4."
          }
        ]
      },
      "de": {
        "name": "Großer Fermatscher Satz",
        "subtitle": "Die 350 Jahre alte Randnotiz",
        "field": "Algebraische Zahlentheorie",
        "statusBadge": "KI-FORMALISIERT 2026",
        "grades": {
          "explorers": {
            "tagline": "Quadrate lassen sich zu Quadraten addieren, aber Würfel niemals zu Würfeln!",
            "analogy": "3² + 4² = 5² (9 + 16 = 25). Aber bei 3D-Würfeln a³ + b³ = c³ lassen sich zwei ganze Würfel niemals zu einem größeren Würfel verschmelzen!",
            "rules": [
              "Pythagoras (n=2): a² + b² = c² hat unendlich viele ganzzahlige Lösungen.",
              "Fermat (n ≥ 3): aⁿ + bⁿ = cⁿ hat KEINE ganzzahligen positiven Lösungen."
            ],
            "mystery": "1637 schrieb Fermat an den Rand: 'Ich habe einen wahrhaft wunderbaren Beweis gefunden, doch der Rand ist zu schmal.' 350 Jahre lang scheiterten alle!",
            "funFact": "Im September 2026 formalisierte eine KI (Claude) den 100-seitigen Beweis von Wiles in 13 Millionen Zeilen Lean 4 Code!"
          },
          "investigators": {
            "tagline": "Elliptische Kurven, Modulformen und die Taniyama-Shimura-Brücke.",
            "analogy": "Andrew Wiles bewies Fermat, indem er zwei getrennte Welten verband: elliptische Kurven und hyperbolische Modulformen.",
            "rules": [
              "Frey-Kurve: y² = x(x - aᵖ)(x + bᵖ).",
              "Ribets Theorem: Frey-Kurve kann nicht modular sein.",
              "Wiles (1995): Alle semistabilen Kurven SIND modular! Widerspruch!"
            ],
            "mystery": "Hatte Fermat 1637 einen Beweis? Nein, die nötigen mathematischen Werkzeuge entstanden erst Jahrhunderte später.",
            "funFact": "Wiles forschte 7 Jahre lang heimlich auf seinem Dachboden an dem Problem."
          },
          "pioneers": {
            "tagline": "Galois-Darstellungen, Deformationsringe (R=T) und Lean 4.",
            "analogy": "Isomorphismus zwischen Deformationsring R und Hecke-Algebra T.",
            "rules": [
              "Semistabiler Modularitätssatz.",
              "September 2026: 13 Mio. Zeilen Lean 4 Code, ca. 29.500 Lemmata formalisiert."
            ],
            "mystery": "KI verkürzte ein 10-Jahres-Projekt der Mathematiker auf 11 Tage.",
            "funFact": "Kevin Buzzard bestätigte die erfolgreiche Computerprüfung."
          }
        },
        "history": [
          {
            "year": "1637",
            "author": "Pierre de Fermat",
            "note": "Notiz im Rand der 'Arithmetica'."
          },
          {
            "year": "1995",
            "author": "Andrew Wiles",
            "note": "Vollständiger Beweis über Modularität."
          },
          {
            "year": "Sept 2026",
            "author": "Anthropic Claude & Kevin Buzzard",
            "note": "Erste vollständige Lean 4 Formalisierung."
          }
        ]
      },
      "fr": {
        "name": "Le Dernier Théorème de Fermat",
        "subtitle": "L'Énigme de 350 ans en Marge",
        "field": "Théorie Algébrique des Nombres",
        "statusBadge": "FORMALISÉ PAR L'IA 2026",
        "grades": {
          "explorers": {
            "tagline": "Les carrés s'assemblent en carrés, mais les cubes ne s'assemblent jamais en cubes !",
            "analogy": "3² + 4² = 5² (9 + 16 = 25). Mais essayez avec des CUBES en 3D : a³ + b³ = c³ ! Vous ne pourrez jamais combiner deux cubes d'entiers en un grand cube !",
            "rules": [
              "Pour n=2, une infinité de triplets pythagoriciens existent.",
              "Pour n ≥ 3, aⁿ + bⁿ = cⁿ ne possède AUCUNE solution en entiers strictement positifs."
            ],
            "mystery": "En 1637, Fermat nota en marge : 'J'ai trouvé une merveilleuse démonstration, mais la marge est trop étroite'. 350 ans d'efforts ont suivi !",
            "funFact": "En septembre 2026, l'IA (Claude) a formalisé l'immense preuve de Wiles en 13 millions de lignes de code Lean 4 !"
          },
          "investigators": {
            "tagline": "Courbes elliptiques, formes modulaires et pont de modularité.",
            "analogy": "Andrew Wiles a résolu l'énigme en prouvant la conjecture de Taniyama-Shimura pour les courbes semi-stables.",
            "rules": [
              "Courbe de Frey : construite si une solution existait.",
              "Théorème de Ribet : la courbe de Frey ne peut être modulaire.",
              "Wiles : toute courbe semi-stable est modulaire ! Contradiction !"
            ],
            "mystery": "Fermat avait-il vraiment une preuve ? Non, les théories requises sont nées 300 ans plus tard.",
            "funFact": "Wiles a travaillé seul dans son grenier pendant 7 ans."
          },
          "pioneers": {
            "tagline": "Représentations galoisiennes, anneaux de déformation R=T et jalon Lean 4.",
            "analogy": "L'isomorphisme entre anneau de déformation universel et algèbre de Hecke.",
            "rules": [
              "Septembre 2026 : Anthropic produit la preuve Lean 4 vérifiée par machine (29 500 lemmes)."
            ],
            "mystery": "L'IA a réalisé en 11 jours ce que la communauté prévoyait en une décennie.",
            "funFact": "Kevin Buzzard de l'Imperial College a validé la formalisation."
          }
        },
        "history": [
          {
            "year": "1637",
            "author": "Pierre de Fermat",
            "note": "Note célèbre dans l'Arithmétique de Diophante."
          },
          {
            "year": "1995",
            "author": "Andrew Wiles & Richard Taylor",
            "note": "Preuve historique par la modularité."
          },
          {
            "year": "Sept 2026",
            "author": "Anthropic Claude & Kevin Buzzard",
            "note": "Première formalisation intégrale en Lean 4."
          }
        ]
      },
      "it": {
        "name": "L'Ultimo Teorema di Fermat",
        "subtitle": "L'Appunto a Margine Lungo 350 Anni",
        "field": "Teoria Algebrica dei Numeri",
        "statusBadge": "FORMALIZZATO DA IA 2026",
        "grades": {
          "explorers": {
            "tagline": "I quadrati si combinano in quadrati, ma i cubi non formano mai cubi!",
            "analogy": "3² + 4² = 5². Ma con i cubi tridimensionali a³ + b³ = c³, non potrai mai unire due cubi di numeri interi per formarne uno più grande!",
            "rules": [
              "Pitagora (n=2): a² + b² = c² ha infinite soluzioni.",
              "Fermat (n ≥ 3): aⁿ + bⁿ = cⁿ non ha NESSUNA soluzione intera positiva."
            ],
            "mystery": "Nel 1637 Fermat scrisse a margine di un libro che lo spazio era troppo stretto per la dimostrazione. Ci vollero 350 anni!",
            "funFact": "Nel settembre 2026 l'IA ha formalizzato la dimostrazione di Wiles in 13 milioni di righe di codice Lean 4!"
          },
          "investigators": {
            "tagline": "Curve ellittiche, forme modulari e congettura di Taniyama-Shimura.",
            "analogy": "Wiles ha unito due rami distinti: curve ellittiche e simmetrie modulari iperboliche.",
            "rules": [
              "Curva di Frey, teorema di Ribet e modularità semi-stabile."
            ],
            "mystery": "Fermat possedeva davvero una prova? No, gli strumenti odierni non esistevano nel Seicento.",
            "funFact": "Wiles lavorò in segreto nella sua soffitta per 7 anni."
          },
          "pioneers": {
            "tagline": "Rappresentazioni di Galois, anelli di deformazione e Lean 4.",
            "analogy": "Teorema R=T tra anello di deformazione e algebra di Hecke.",
            "rules": [
              "Settembre 2026: formalizzazione completa verificata al computer in Lean 4."
            ],
            "mystery": "Un'impresa decennale completata dall'IA in appena 11 giorni.",
            "funFact": "Il professor Kevin Buzzard ha confermato la verifica della macchina."
          }
        },
        "history": [
          {
            "year": "1637",
            "author": "Pierre de Fermat",
            "note": "Appunto a margine dell'Arithmetica."
          },
          {
            "year": "1995",
            "author": "Andrew Wiles",
            "note": "Dimostrazione completa annunciata."
          },
          {
            "year": "Sett 2026",
            "author": "Anthropic Claude",
            "note": "Formalizzazione totale Lean 4."
          }
        ]
      },
      "ko": {
        "name": "페르마의 마지막 정리",
        "subtitle": "350년간 책 여백에 잠들었던 비밀",
        "field": "대수적 수론 및 산술기하학",
        "statusBadge": "2026 AI 기계 형식화",
        "grades": {
          "explorers": {
            "tagline": "정사각형은 합쳐서 새 정사각형이 되지만, 정육면체는 절대 합쳐지지 않는다!",
            "analogy": "피타고라스 정리: 3² + 4² = 5² (9 + 16 = 25). 하지만 3차원 입체 큐브 a³ + b³ = c³를 만들려고 하면 자연수 정육면체 2개를 합쳐 더 큰 정육면체 하나로 만드는 것은 영원히 불가능합니다!",
            "rules": [
              "피타고라스 (n=2): a² + b² = c²는 무한한 자연수 해를 가짐.",
              "페르마의 주장 (n ≥ 3): aⁿ + bⁿ = cⁿ을 만족하는 양의 정수 해는 '전혀 없다'!"
            ],
            "mystery": "1637년 페르마는 책 여백에 '나는 진정 놀라운 증명을 발견했으나 여백이 좁아 적지 않는다'고 적었습니다. 전 세계 수학자들이 350년간 좌절했습니다!",
            "funFact": "2026년 9월, AI(Claude)가 앤드루 와일스의 100페이지 증명을 1,300만 줄의 Lean 4 컴퓨터 검증 코드로 완전 형식화했습니다!"
          },
          "investigators": {
            "tagline": "타원곡선, 모듈러 형식, 타니야마-시무라 추측의 거대한 다리.",
            "analogy": "와일스는 서로 완전히 달라 보이던 타원곡선과 모듈러 형식을 연결하여 페르마 정리를 공략했습니다.",
            "rules": [
              "프레이 곡선: 페르마 해가 존재한다면 비정상적인 타원곡선이 유도됨.",
              "리벳의 정리: 프레이 곡선은 모듈러일 수 없음.",
              "와일스 (1995): 모든 준안정 타원곡선은 모듈러 곡선이다! 모순!"
            ],
            "mystery": "페르마는 1637년에 진짜 증명을 가졌을까요? 현대 수학자들의 답은 '아니오'입니다. 증명에 필요한 도구가 300년 뒤에야 발명되었기 때문입니다.",
            "funFact": "와일스는 자신의 다락방에서 7년 동안 누구에게도 알리지 않고 비밀리에 연구했습니다."
          },
          "pioneers": {
            "tagline": "갈루아 표현, 변형환 (R=T 정리), 그리고 2026년 Lean 4 금자탑.",
            "analogy": "보편 변형환 R과 헤케 대수 T 사이의 동형(R=T)을 확립하여 모듈러성을 증명했습니다.",
            "rules": [
              "n ≥ 3일 때 방정식 aⁿ + bⁿ = cⁿ은 양의 정수 해를 갖지 않음.",
              "2026년 9월: 1,300만 줄의 Lean 4 코드, 29,500개의 보조정리 기계 형식화 완료."
            ],
            "mystery": "수학계가 10년이 걸릴 것으로 예상했던 거대 프로젝트를 AI가 11일 만에 자율적으로 완수했습니다.",
            "funFact": "임페리얼 칼리지 런던의 케빈 버자드 교수가 컴퓨터 검증 통과를 공식 확인했습니다."
          }
        },
        "history": [
          {
            "year": "1637",
            "author": "피에르 드 페르마",
            "note": "디오판토스의 아리스메티카 여백에 유명한 메모."
          },
          {
            "year": "1995",
            "author": "앤드루 와일스",
            "note": "모듈러성 정리를 통한 완벽한 증명 제시."
          },
          {
            "year": "2026년 9월",
            "author": "Anthropic Claude & 케빈 버자드",
            "note": "Lean 4 사상 최초 100% 기계 형식화 성공."
          }
        ]
      },
      "ja": {
        "name": "フェルマーの最終定理",
        "subtitle": "余白に遺された350年の謎",
        "field": "代数的数論・数論幾何学",
        "statusBadge": "2026年 AI完全形式化",
        "grades": {
          "explorers": {
            "tagline": "2乗なら綺麗な正方形ができるのに、3乗のサイコロは絶対に合体できない？",
            "analogy": "ピタゴラスの定理：3² + 4² = 5²（9 + 16 = 25）。3×3と4×4のブロックを合わせると、5×5の綺麗な正方形が作れます。でも、3Dの立体ブロック（立方体）で a³ + b³ = c³ を作ろうとすると…どんな自然数の立方体も、絶対に2つ合わせて1つの大きな立方体にはできません！",
            "rules": [
              "ピタゴラス（n=2）：a² + b² = c² には無数の自然数解（3-4-5など）がある。",
              "フェルマーの主張（n ≥ 3）：aⁿ + bⁿ = cⁿ を満たす自然数解は「絶対に存在しない」！",
              "a, b, c はすべて1以上の整数。"
            ],
            "mystery": "1637年、ピエール・ド・フェルマーは本の余白にこう書き遺しました：「私は真に驚くべき証明を発見したが、それを記すにはこの余白は狭すぎる」。世界最高峰の頭脳が350年間挑み続け、ことごとく打ち砕かれました！",
            "funFact": "2026年9月、AI（Claude）がアンドリュー・ワイルズの100ページの難解な証明を、1300万行を超えるLean 4のコンピュータ検証コードへと完全形式化しました！"
          },
          "investigators": {
            "tagline": "楕円曲線、モジュラー形式、そして谷山・志村予想の架け橋。",
            "analogy": "フェルマーの定理を解くため、数学者たちは全く無関係に見えた「楕円曲線」と「モジュラー形式」という2つの世界を結ぶ宇宙的架け橋を築きました。",
            "rules": [
              "フライ曲線：もし解 aⁿ + bⁿ = cⁿ が存在したら、極めて奇妙な楕円曲線が作れてしまう。",
              "リベットの定理（1986）：そのフライ曲線はモジュラーになり得ない！",
              "アンドリュー・ワイルズ（1995）：すべての半安定な楕円曲線はモジュラーである！矛盾！ゆえに解は存在しない！"
            ],
            "mystery": "フェルマーは本当に証明を持っていたのか？ 現代の数学者の見解は一致して「No」です。証明に必要な現代数学の概念は当時存在しませんでした。",
            "funFact": "ワイルズは誰にも知られぬよう、自宅の屋根裏部屋に7年間こもりきりで研究を続けました。"
          },
          "pioneers": {
            "tagline": "ガロア表現、変形環、R=T定理、そして2026年Lean 4金字塔。",
            "analogy": "普遍変形環 R とヘッケ環 T の間の同型定理（R=T定理）を確立することでモジュラー性を確立しました。",
            "rules": [
              "n ≥ 3 において aⁿ + bⁿ = cⁿ は正整数解を持たない。",
              "2026年9月：AnthropicのAIシステムがワイルズ・テイラーの証明全体をLean 4で完全形式化（約29,500個の中間補題、1300万行コード）。"
            ],
            "mystery": "数学コミュニティが10年以上かかると予測した巨大形式化プロジェクトを、AIがわずか11日間で自律完遂しました。",
            "funFact": "インペリアル・カレッジ・ロンドンのケビン・バザード教授が、コードがコンピュータ検証を通過したことを確認しました。"
          }
        },
        "history": [
          {
            "year": "1637",
            "author": "ピエール・ド・フェルマー",
            "note": "ディオファントス『算術』の余白に有名なメモを残す。"
          },
          {
            "year": "1770",
            "author": "レオンハルト・オイラー",
            "note": "n = 3 の場合を代数的整数論を用いて証明。"
          },
          {
            "year": "1995",
            "author": "アンドリュー・ワイルズ & リチャード・テイラー",
            "note": "谷山・志村予想の半安定楕円曲線の場合を証明し完全解決。"
          },
          {
            "year": "2026年9月",
            "author": "Anthropic Claude & ケビン・バザード",
            "note": "史上初、Lean 4による100%コンピュータ機械検証形式化を達成。"
          }
        ]
      },
      "zh-Hans": {
        "name": "费马大定理",
        "subtitle": "书页空白处的350年传奇",
        "field": "代数数论与算术几何",
        "statusBadge": "2026 AI形式化证明",
        "grades": {
          "explorers": {
            "tagline": "正方形可以完美拼成新正方形，但立方体积木永远拼不出新立方体！",
            "analogy": "你一定知道勾股定理：3² + 4² = 5²（9 + 16 = 25）。两个正方形能拼成一个更大的正方形。但如果你用立体积木尝试 a³ + b³ = c³：无论怎样尝试，你永远无法将两个整数立方的积木，拼成一个新的大立方体！",
            "rules": [
              "毕达哥拉斯 (n=2)：a² + b² = c² 有无数多组正整数解（如3-4-5）。",
              "费马的断言 (n ≥ 3)：aⁿ + bⁿ = cⁿ 绝对没有任何正整数解！",
              "a, b, c 必须是正整数。"
            ],
            "mystery": "1637年，费马在书页空白处写下：“我发现了一个真正美妙的证明，可惜这里的空白太小，写不下。” 全人类最顶尖的数学家为之奋斗了整整350年！",
            "funFact": "2026年9月，AI（Claude）成功将安德鲁·怀尔斯长达100页的深奥证明完全形式化为1300万行Lean 4计算机验证代码！"
          },
          "investigators": {
            "tagline": "椭圆曲线、模形式与谷山-志村猜想的宏伟天桥。",
            "analogy": "为了证明费马大定理，数学家在看似毫不相干的两个数学宇宙之间架起了一座桥梁：椭圆曲线与模形式。",
            "rules": [
              "弗雷曲线：如果费马方程有解，就能造出一个不可思议的奇特椭圆曲线。",
              "里贝特判据：该曲线绝不可能具有模性！",
              "怀尔斯 (1995)：证明所有半稳定椭圆曲线都必然具有模性！矛盾！因此方程绝无可能存在整数解！"
            ],
            "mystery": "费马当年真的拥有证明吗？现代数学家一致认为：没有。证明所需的现代数学工具在300年之后才诞生。",
            "funFact": "怀尔斯在自家阁楼上隐姓埋名秘密闭关攻关了整整7年。"
          },
          "pioneers": {
            "tagline": "伽罗瓦表示、形变环理论（R=T）与2026年Lean 4划时代里程碑。",
            "analogy": "通过确立全域形变环 R 与赫克代数 T 之间的同构（R=T定理），奠定了模性证明。",
            "rules": [
              "定理：当 n ≥ 3 时，方程 aⁿ + bⁿ = cⁿ 无正整数解。",
              "2026年9月：Anthropic宣布完成怀尔斯-泰勒证明在Lean 4中的完全机器形式化验证（1300万行代码，约29500个引理）。"
            ],
            "mystery": "原本数学界估计需要整个共同体耗费10年的人工形式化大工程，AI在11天内独立自主完成。",
            "funFact": "帝国理工学院的凯文·巴泽德（Kevin Buzzard）教授对机器检验结果进行了官方确认。"
          }
        },
        "history": [
          {
            "year": "1637",
            "author": "皮埃尔·德·费马",
            "note": "在丢番图《算术》书页空白处写下著名边注。"
          },
          {
            "year": "1770",
            "author": "莱昂哈德·欧拉",
            "note": "证明 n = 3 的情形。"
          },
          {
            "year": "1995",
            "author": "安德鲁·怀尔斯与理查德·泰勒",
            "note": "通过半稳定椭圆曲线模性定理完全证明该猜想。"
          },
          {
            "year": "2026年9月",
            "author": "Anthropic Claude 与 凯文·巴泽德",
            "note": "实现历史上首个完全通过Lean 4机器检验的形式化证明证书。"
          }
        ]
      },
      "zh-Hant": {
        "name": "費馬最後定理",
        "subtitle": "書頁空白處的350年傳奇",
        "field": "代數數論與算術幾何",
        "statusBadge": "2026 AI形式化證明",
        "grades": {
          "explorers": {
            "tagline": "正方形可以完美拼成新正方形，但立方體積木永遠拼不出新立方體！",
            "analogy": "勾股定理：3² + 4² = 5²。但若換成立方體積木 a³ + b³ = c³，無論如何都拼不出整數大立方體！",
            "rules": [
              "勾股定理 (n=2) 有無窮多解。",
              "費馬斷言 (n ≥ 3) 絕無正整數解！"
            ],
            "mystery": "1637年費馬在書頁邊緣留下「此處空白太小寫不下」的著名批註，困擾世界長達350年！",
            "funFact": "2026年9月，AI（Claude）將懷爾斯整篇長篇證明形式化為1300萬行Lean 4電腦驗證代碼！"
          },
          "investigators": {
            "tagline": "橢圓曲線、模形式與谷山-志村猜想的宏偉天橋。",
            "analogy": "懷爾斯透過連結橢圓曲線與模形式，成功攻破了350年的數學聖杯。",
            "rules": [
              "弗雷曲線：假設有解將構造出非模橢圓曲線。",
              "懷爾斯證明半穩定橢圓曲線必具模性，導出矛盾！"
            ],
            "mystery": "懷爾斯在自家閣樓秘密閉關攻關7年才解開謎團。",
            "funFact": "費馬當年並未擁有足夠工具，現代工具300年後才出現。"
          },
          "pioneers": {
            "tagline": "伽羅瓦表示、形變環（R=T）與2026年Lean 4劃時代里程碑。",
            "analogy": "透過確立普遍形變環與赫克代數的同構完成證明。",
            "rules": [
              "2026年9月AI自主完成全篇證明的Lean 4完全機器形式化（1300萬行代碼、29500個引理）。"
            ],
            "mystery": "原本預計需10年的形式化工程，AI僅用11天便自主完成。",
            "funFact": "帝國理工學院教授凱文·巴澤德親自確認了機器檢驗結果。"
          }
        },
        "history": [
          {
            "year": "1637",
            "author": "費馬",
            "note": "於《算術》邊緣寫下著名批註。"
          },
          {
            "year": "1995",
            "author": "安德魯·懷爾斯",
            "note": "發表完整證明，終結350年謎題。"
          },
          {
            "year": "2026年9月",
            "author": "Anthropic Claude",
            "note": "達成歷史上首次Lean 4全量機器形式化驗證。"
          }
        ]
      }
    },
    "domain": "number-theory",
    "category": "number-theory",
    "isMillennium": false,
    "isAIFrontier": false
  },
  {
    "id": "riemann",
    "icon": "🌊",
    "difficulty": "Grades 8+",
    "simId": "riemann-sim",
    "leanCode": "import Mathlib.NumberTheory.ZetaValues\n\ndef RiemannHypothesis : Prop :=\n  ∀ s : ℂ, riemannZeta s = 0 → (s.re > 0 ∧ s.re < 1) → s.re = 1/2\n\ntheorem critical_line_zeros_fraction :\n  -- At least 67.2% of non-trivial zeros satisfy Re(s) = 1/2\n  sorry",
    "locales": {
      "en": {
        "name": "The Riemann Hypothesis",
        "subtitle": "The Music of the Primes",
        "field": "Complex Analysis & Analytic Number Theory",
        "statusBadge": "AI BOUND 2026",
        "grades": {
          "explorers": {
            "tagline": "The secret heartbeat of all numbers hidden in an ocean of waves.",
            "analogy": "Prime numbers look random: 2, 3, 5, 7, 11, 13, 17... But in 1859, Bernhard Riemann found a musical formula (the Zeta function). Every time this wave dips to zero, it plays a musical note. When you combine all these notes, their harmony perfectly predicts where EVERY prime lands!",
            "rules": [
              "Zeta function: ζ(s) = 1 + 1/2ˢ + 1/3ˢ + 1/4ˢ + ...",
              "Riemann's claim: All interesting zeros live on a single line: Re(s) = 1/2.",
              "Clay Mathematics Institute offers $1,000,000 for the proof."
            ],
            "mystery": "If Riemann is right, primes are distributed with supreme harmony. In August 2026, AI proved that at least 67.2% of all zeros lie on this line—the largest leap in decades!",
            "funFact": "Computers have checked over 10 trillion zeros, and every single one lies on the line!"
          },
          "investigators": {
            "tagline": "The Critical Strip, analytic continuation, and the 67.2% milestone.",
            "analogy": "Non-trivial zeros live in the critical strip 0 < Re(s) < 1. Riemann conjectured Re(s) = 1/2 for all of them.",
            "rules": [
              "Critical Line: s = 1/2 + it.",
              "Levinson (1974) proved >34.7%, Conrey (1989) proved >40%, Bredberg (2011) reached 41.6%.",
              "August 2026: Claude leaped to 67.2%!"
            ],
            "mystery": "The spacing between zeta zeros mirrors the energy levels of heavy atomic nuclei (quantum chaos)!",
            "funFact": "Proving RH would immediately settle hundreds of dependent theorems across math."
          },
          "pioneers": {
            "tagline": "Mollifier optimization, pair correlation, and spectral interpretations.",
            "analogy": "The proportion κ of zeros on the line is bounded using mollified moments: ∫ |ζ(1/2+it) M(1/2+it)|² dt.",
            "rules": [
              "Statement: All non-trivial zeros of ζ(s) have Re(s) = 1/2.",
              "August 2026: Anthropic demonstrated κ ≥ 0.672 via multi-stage mollifier optimization formalized in Lean 4."
            ],
            "mystery": "Can automated variational calculus push κ to 1.0 (proving almost all zeros lie on the line)?",
            "funFact": "Formalizing the 67.2% bound in Lean 4 provided an ironclad certificate for the computation."
          }
        },
        "history": [
          {
            "year": "1859",
            "author": "Bernhard Riemann",
            "note": "Publishes seminal paper on primes less than a given magnitude."
          },
          {
            "year": "1914",
            "author": "G. H. Hardy",
            "note": "Proves infinitely many zeros lie on the critical line."
          },
          {
            "year": "1989",
            "author": "J. B. Conrey",
            "note": "Proves > 40% of non-trivial zeros lie on the line."
          },
          {
            "year": "August 2026",
            "author": "Anthropic Claude Research",
            "note": "Expands critical line zero bound from 41.6% to 67.2% in Lean 4."
          }
        ]
      },
      "de": {
        "name": "Die Riemannsche Vermutung",
        "subtitle": "Die Musik der Primzahlen",
        "field": "Komplexe Analysis & Zahlentheorie",
        "statusBadge": "KI-SCHRANKE 67,2% 2026",
        "grades": {
          "explorers": {
            "tagline": "Der geheime Herzschlag aller Zahlen in einem endlosen Ozean aus Wellen.",
            "analogy": "Primzahlen wirken zufällig. Doch 1859 fand Riemann die Zeta-Funktion: Jedes Mal, wenn die Welle die Null kreuzt, erklingt ein Ton. Zusammen sagen sie jeden Primzahlsprung voraus!",
            "rules": [
              "Zeta-Funktion im kritischen Streifen 0 < Re(s) < 1.",
              "Riemanns Vermutung: Alle Nullstellen liegen auf Re(s) = 1/2.",
              "1 Million Dollar Preisgeld des Clay Mathematics Institute."
            ],
            "mystery": "Im August 2026 bewies eine KI, dass mindestens 67,2% aller Nullstellen auf dieser Linie liegen – der größte Sprung seit Jahrzehnten!",
            "funFact": "Bereits über 10 Billionen Nullstellen wurden überprüft: ausnahmslos auf der Linie!"
          },
          "investigators": {
            "tagline": "Kritischer Streifen, analytische Fortsetzung und 67,2% Rekord.",
            "analogy": "Levinson bewies >34,7%, Conrey >40%, Bredberg 41,6%. Im August 2026 sprang Claude auf 67,2%!",
            "rules": [
              "Kritische Linie: s = 1/2 + it."
            ],
            "mystery": "Die Abstände der Nullstellen spiegeln Energieniveaus schwerer Atomkerne wider!",
            "funFact": "Ein Beweis würde hunderte mathematische Sätze auf einen Schlag beweisen."
          },
          "pioneers": {
            "tagline": "Mollifier-Optimierung, Spektraltheorie und Lean 4.",
            "analogy": "Variationsrechnung über Mollifier-Integrale zur Schrankenbestimmung κ.",
            "rules": [
              "August 2026 : Anthropic bewies κ ≥ 0,672 formal in Lean 4."
            ],
            "mystery": "Lässt sich κ auf 1,0 pushen (fast alle Nullstellen auf der Linie)?",
            "funFact": "Die formale Verifikation lieferte ein unanfechtbares digitales Zertifikat."
          }
        },
        "history": [
          {
            "year": "1859",
            "author": "Bernhard Riemann",
            "note": "Veröffentlicht Pionierarbeit über Primzahlen."
          },
          {
            "year": "1989",
            "author": "J. B. Conrey",
            "note": "Beweist > 40% auf der kritischen Linie."
          },
          {
            "year": "August 2026",
            "author": "Anthropic Claude",
            "note": "Erweitert Nullstellenschranke auf 67,2% in Lean 4."
          }
        ]
      },
      "fr": {
        "name": "L'Hypothèse de Riemann",
        "subtitle": "La Musique des Nombres Premiers",
        "field": "Analyse Complexe & Théorie des Nombres",
        "statusBadge": "BORNE IA 67,2 % 2026",
        "grades": {
          "explorers": {
            "tagline": "Le battement de cœur secret de tous les nombres caché dans des vagues infinies.",
            "analogy": "En 1859, Riemann découvrit la fonction Zêta. Chaque zéro non trivial joue une note : réunies, elles prédisent l'emplacement exact des nombres premiers !",
            "rules": [
              "Les zéros vivent dans la bande critique.",
              "Hypothèse : Tous les zéros ont Re(s) = 1/2.",
              "Prix Clay d'un million de dollars."
            ],
            "mystery": "En août 2026, l'IA a prouvé que plus de 67,2 % des zéros sont sur la ligne !",
            "funFact": "Plus de 10 000 milliards de zéros calculés sont tous alignés !"
          },
          "investigators": {
            "tagline": "Bande critique, prolongement analytique et bond à 67,2 %.",
            "analogy": "Conrey avait atteint 40 %, Bredberg 41,6 %. L'IA Claude a franchi 67,2 % !",
            "rules": [
              "Ligne critique : Re(s) = 1/2."
            ],
            "mystery": "La répartition des zéros coïncide avec les niveaux d'énergie en physique quantique.",
            "funFact": "Résoudre Riemann démontrerait d'un coup des centaines de théorèmes."
          },
          "pioneers": {
            "tagline": "Optimisation de mollificateurs et certificats Lean 4.",
            "analogy": "Calcul variationnel sur moments mollifiés de Zêta.",
            "rules": [
              "Août 2026 : Anthropic prouve κ ≥ 0,672 dans Lean 4."
            ],
            "mystery": "Atteindre κ = 1,0 (presque tous les zéros sur la ligne).",
            "funFact": "Prouvé avec assistance multi-agents et vérifié formellement."
          }
        },
        "history": [
          {
            "year": "1859",
            "author": "Bernhard Riemann",
            "note": "Article fondateur."
          },
          {
            "year": "Août 2026",
            "author": "Anthropic Claude",
            "note": "Saut historique de la borne à 67,2 % dans Lean 4."
          }
        ]
      },
      "it": {
        "name": "L'Ipotesi di Riemann",
        "subtitle": "La Musica dei Numeri Primi",
        "field": "Analisi Complessa & Teoria dei Numeri",
        "statusBadge": "SOGLIA IA 67,2% 2026",
        "grades": {
          "explorers": {
            "tagline": "Il battito segreto dei numeri nascosto tra le onde dell'infinito.",
            "analogy": "Nel 1859 Bernhard Riemann scoprì la funzione Zeta. Ogni volta che tocca lo zero, suona una nota armonica che svela dove atterrano i numeri primi!",
            "rules": [
              "Tutti gli zeri non banali vivono nella striscia critica.",
              "Ipotesi di Riemann: Re(s) = 1/2 per tutti gli zeri."
            ],
            "mystery": "Nell'agosto 2026 l'IA ha dimostrato che almeno il 67,2% degli zeri giace sulla linea!",
            "funFact": "Oltre 10 trilioni di zeri calcolati sono tutti sulla linea critica!"
          },
          "investigators": {
            "tagline": "Striscia critica, continuazione analitica e salto al 67,2%.",
            "analogy": "Bredberg arrivò al 41,6%. Nel 2026 l'IA Claude è balzata al 67,2%!",
            "rules": [
              "Linea critica: s = 1/2 + it."
            ],
            "mystery": "Il legame con i livelli energetici quantistici dei nuclei atomici pesanti.",
            "funFact": "Uno dei sette problemi del millennio da 1.000.000 di dollari."
          },
          "pioneers": {
            "tagline": "Ottimizzazione dei mollificatori e formalizzazione Lean 4.",
            "rules": [
              "Agosto 2026 : Anthropic dimostra κ ≥ 0,672."
            ],
            "mystery": "Raggiungere κ = 1,0 (quasi tutti gli zeri sulla retta).",
            "funFact": "Verificato formalmente riga per riga in Lean 4.",
            "analogy": "La proporzione κ di zeri sulla retta critica è limitata utilizzando momenti regolarizzati: ∫ |ζ(1/2+it) M(1/2+it)|² dt."
          }
        },
        "history": [
          {
            "year": "1859",
            "author": "Bernhard Riemann",
            "note": "Pubblicazione dell'ipotesi."
          },
          {
            "year": "Agosto 2026",
            "author": "Anthropic Claude",
            "note": "Porta la percentuale di zeri sulla linea al 67,2%."
          }
        ]
      },
      "ko": {
        "name": "리만 가설",
        "subtitle": "소수가 연주하는 천상의 음악",
        "field": "복소해석학 및 해석적 수론",
        "statusBadge": "2026 AI 임계선 67.2%",
        "grades": {
          "explorers": {
            "tagline": "무한히 일렁이는 파도 속에 숨겨진 모든 숫자의 비밀 심장 박동.",
            "analogy": "소수는 불규칙해 보이지만, 1859년 리만이 발견한 제타 함수가 0점을 통과할 때마다 울리는 음률을 모두 모으면 소수의 위치를 완벽하게 예측하는 화음이 됩니다!",
            "rules": [
              "비자명한 영점(음표)들은 모두 복소평면의 임계 띠 안에 존재.",
              "리만 가설: 모든 영점은 오직 Re(s) = 1/2 라는 하나의 직선(임계선) 위에 있다!"
            ],
            "mystery": "2026년 8월, AI(Claude)가 임계선 위에 존재하는 영점의 증명된 비율을 41.6%에서 67.2%로 수십 년 만에 대도약시켰습니다!",
            "funFact": "컴퓨터로 이미 10조 개 이상의 영점을 확인했으며, 단 하나의 예외도 없이 모두 임계선 위에 있었습니다!"
          },
          "investigators": {
            "tagline": "임계 띠, 해석적 연속, 양자 혼돈, 67.2% 도약.",
            "analogy": "콘레이(1989) 40%, 브레드베리(2011) 41.6%를 거쳐 2026년 8월 AI가 67.2%를 돌파했습니다.",
            "rules": [
              "임계선: s = 1/2 + it."
            ],
            "mystery": "영점들의 간격 분포는 우라늄 등 무거운 원자핵의 고에너지 준위 분포와 완전히 일치합니다!",
            "funFact": "리만 가설이 증명되면 수론과 암호학의 수천 개 종속 정리가 동시에 참으로 확정됩니다."
          },
          "pioneers": {
            "tagline": "연화제(Mollifier) 다변수 변분 최적화와 Lean 4 형식 검증.",
            "analogy": "임계선 위 영점의 비율 κ는 연화된 적분 모멘트의 변분 평가로 유도됩니다.",
            "rules": [
              "2026년 8월: Anthropic 연구진이 κ ≥ 0.672를 Lean 4 기계 검증으로 확립."
            ],
            "mystery": "자동 변분 계산을 통해 거의 모든 영점을 뜻하는 κ = 1.0에 도달할 수 있을 것인가?",
            "funFact": "Lean 4 형식화는 계산의 무결성을 보장하는 완벽한 디지털 인증서를 제공했습니다."
          }
        },
        "history": [
          {
            "year": "1859",
            "author": "베른하르트 리만",
            "note": "소수 계량에 관한 논문 발표."
          },
          {
            "year": "1989",
            "author": "J. B. 콘레이",
            "note": "40% 이상의 영점이 임계선 위에 있음을 증명."
          },
          {
            "year": "2026년 8월",
            "author": "Anthropic Claude 연구팀",
            "note": "Lean 4 검증 하에 임계선 영점 비율을 67.2%로 갱신."
          }
        ]
      },
      "ja": {
        "name": "リーマン予想",
        "subtitle": "素数が奏でる天上の音楽",
        "field": "複素解析・解析的数論",
        "statusBadge": "2026年 AIが67.2%達成",
        "grades": {
          "explorers": {
            "tagline": "すべての数の心臓の鼓動が、神秘的な波の調べの中に隠されている？",
            "analogy": "素数はデタラメに散らばっているように見えます（2, 3, 5, 7, 11, 13...）。でも1859年、ベルンハルト・リーマンは不思議な公式（ゼータ関数）を見つけました。この波が「ゼロ」と交差するたびに、ひとつの音が鳴り響きます。その無限の音色を重ね合わせると、すべての素数が現れる場所を完璧に言い当てるハーモニーになるのです！",
            "rules": [
              "ゼータ関数：すべての自然数のべき乗の和を複素数へ拡張した関数。",
              "非自明なゼロ点（音楽の音符）は、すべて複素平面の「臨界帯」に存在する。",
              "リーマンの予想：すべてのゼロ点は、 Re(s) = 1/2 という「たった1本の直線（臨界線）」の上にきれいに並んでいる！"
            ],
            "mystery": "もしリーマン予想が正しければ、素数の分布は究極の数学的調和を保っています。クレイ数学研究所はこの証明に100万ドル（約1億5000万円）の懸賞金をかけています。",
            "funFact": "2026年8月、AI（Claude）が臨界線上に存在するゼロ点の割合の証明記録を「41.6%から67.2%」へと数十年ぶりに大跳躍させました！"
          },
          "investigators": {
            "tagline": "臨界帯、解析接続、量子カオス、そして67.2%の歴史的跳躍。",
            "analogy": "ゼータ関数の非自明なゼロ点は、帯状の領域 0 < Re(s) < 1 の中にしか存在しません。リーマンはすべてがその中央線 Re(s) = 1/2 上にあると予想しました。",
            "rules": [
              "臨界線：s = 1/2 + it。",
              "レビンソン（1974）が34.7%以上、コンレイ（1989）が40%以上、ブレドベリ（2011）が41.6%以上を証明。",
              "2026年8月、AIによる多段モライファイア最適化により 67.2% 以上が臨界線上にあることがLean 4で証明されました！"
            ],
            "mystery": "ゼロ点の間隔の統計的分布は、ウランなど重い原子核のエネルギー準位（量子カオス）と完全に一致しています！",
            "funFact": "スーパーコンピュータによってすでに最初の10兆個以上のゼロ点が計算され、1個の例外もなく臨界線上にあることが確かめられています。"
          },
          "pioneers": {
            "tagline": "モラファイア最適化、対相関予想、スペクトル解釈。",
            "analogy": "臨界線上のゼロ点の割合 κ は、モラファイア関数 M(s) を乗じた積分の変分評価によって導かれます。",
            "rules": [
              "予想：ζ(s) = 0 かつ 0 < Re(s) < 1 ならば Re(s) = 1/2。",
              "素数定理の誤差項評価：|π(x) - Li(x)| = O(√x ln x) と同値。",
              "2026年8月、Anthropicの自律型Claude研究システムが多変数変分最適化を解き、κ ≥ 0.672 をLean 4で形式検証。"
            ],
            "mystery": "自動変分法により、κ = 1.0（測度論的にほぼすべてのゼロ点が臨界線上にある）を達成できるか？",
            "funFact": "リーマン予想が証明されれば、数論や暗号理論における数百もの未証明定理が一瞬にして真となります。"
          }
        },
        "history": [
          {
            "year": "1859",
            "author": "ベルンハルト・リーマン",
            "note": "素数の個数に関する記念碑的論文を発表。"
          },
          {
            "year": "1914",
            "author": "G. H. ハーディ",
            "note": "臨界線上に無限個のゼロ点が存在することを証明。"
          },
          {
            "year": "1989",
            "author": "J. B. コンレイ",
            "note": "40%以上のゼロ点が臨界線上にあることを証明。"
          },
          {
            "year": "2026年8月",
            "author": "Anthropic Claude 研究チーム",
            "note": "Lean 4検証のもと臨界線ゼロ点の割合を67.2%へと大幅更新。"
          }
        ]
      },
      "zh-Hans": {
        "name": "黎曼猜想",
        "subtitle": "素数之歌与临界线的交响",
        "field": "复分析与解析数论",
        "statusBadge": "2026 AI突破67.2%",
        "grades": {
          "explorers": {
            "tagline": "宇宙所有数字的心跳，都隐藏在无穷起伏的波浪之中？",
            "analogy": "素数看似杂乱无章地分布着（2, 3, 5, 7, 11, 13...）。但在1859年，伯恩哈德·黎曼发现了一个神奇的波动公式（黎曼Zeta函数）。每当这道波浪穿过零点，就会敲响一个音符。把这无数个音符交织在一起，奏出的完美和声竟能分毫不差地预测每一个素数的位置！",
            "rules": [
              "黎曼Zeta函数：把无穷级数求和拓展到复数平面。",
              "所有有趣的“零点音符”都位于一条狭窄的临界带中。",
              "黎曼猜想：所有非平凡零点，都排成一条笔直的竖线（实部 Re(s) = 1/2）！"
            ],
            "mystery": "如果黎曼是对的，素数分布拥有至高无上的数学和谐！克雷数学研究所设立了100万美元的千禧年大奖悬赏证明。",
            "funFact": "2026年8月，AI（Claude）将证明位于临界线上的零点比例由41.6%跃升至67.2%，创下数十年未见的历史性突破！"
          },
          "investigators": {
            "tagline": "临界带、解析延拓、量子混沌与67.2%的飞跃。",
            "analogy": "非平凡零点全部位于 0 < Re(s) < 1 临界带中。黎曼猜想它们全部分毫不差地落在正中央的实部 1/2 线上。",
            "rules": [
              "临界线：s = 1/2 + it。",
              "莱文森 (1974) 证明 >34.7%，康瑞 (1989) 证明 >40%，布雷德伯格 (2011) 达到 41.6%。",
              "2026年8月，AI通过多阶段光滑化变分优化，在Lean 4中形式化证明该比例至少达 67.2%！"
            ],
            "mystery": "零点之间的间距分布规律，竟然与铀等重原子核的高能级阶梯分布（量子混沌）完全吻合！",
            "funFact": "计算机已经检查了超过10万亿个零点，全部100%分毫不差地落在这条临界线上！"
          },
          "pioneers": {
            "tagline": "光滑化乘子变分法、对相关猜想与谱理论解释。",
            "analogy": "临界线上零点比例 κ 的估计依赖于对光滑化 Zeta 矩的积分渐近求极值。",
            "rules": [
              "猜想等价于素数定理的最佳误差界：|π(x) - Li(x)| = O(√x ln x)。",
              "2026年8月，Anthropic前沿系统基于多级乘子变分空间优化求得 κ ≥ 0.672，并生成全套Lean 4证明证书。"
            ],
            "mystery": "自动化变分系统是否能将临界线零点比例推进到 κ = 1.0（即测度意义上“几乎所有”零点都在线上）？",
            "funFact": "一旦黎曼猜想获证，数学与密码学中依赖于它的上千条推论将同时晋升为真定理。"
          }
        },
        "history": [
          {
            "year": "1859",
            "author": "伯恩哈德·黎曼",
            "note": "发表划时代论文《论小于给定大小的素数个数》。"
          },
          {
            "year": "1914",
            "author": "哈代 (G. H. Hardy)",
            "note": "证明临界线上有无穷多个零点。"
          },
          {
            "year": "1989",
            "author": "J. B. 康瑞",
            "note": "证明超过40%的零点位于临界线上。"
          },
          {
            "year": "2026年8月",
            "author": "Anthropic Claude 研究系统",
            "note": "在Lean 4形式化验证下将临界线零点比例跃升至67.2%。"
          }
        ]
      },
      "zh-Hant": {
        "name": "黎曼猜想",
        "subtitle": "素數之歌與臨界線的交響",
        "field": "複分析與解析數論",
        "statusBadge": "2026 AI突破67.2%",
        "grades": {
          "explorers": {
            "tagline": "宇宙所有數字的心跳，都隱藏在無窮起伏的波浪之中？",
            "analogy": "1859年黎曼發現了Zeta函數波動。波浪每次穿過零點都會奏出一個音符，這些音符的交響完美預測了所有素數的分佈！",
            "rules": [
              "黎曼猜想：所有非平凡零點都筆直地落在 Re(s) = 1/2 這條線上！",
              "千禧年大獎提供100萬美元懸賞證明。"
            ],
            "mystery": "2026年8月，AI將落在臨界線上的零點比例一舉推進到 67.2%！",
            "funFact": "超級電腦檢驗的前10萬億個零點全部100%落在線上！"
          },
          "investigators": {
            "tagline": "臨界帶、解析延拓、量子混沌與67.2%的飛躍。",
            "analogy": "零點間距規律與原子核高能級階梯分佈驚人一致。",
            "rules": [
              "2026年8月AI透過乘子變分法在Lean 4中證實臨界線零點比例 ≥ 67.2%！"
            ],
            "mystery": "黎曼猜想是現代純數學最核心的未解大山。",
            "funFact": "克雷數學研究所將其列為七大千禧年問題之一。"
          },
          "pioneers": {
            "tagline": "平滑化乘子變分法、對相關猜想與譜理論詮釋。",
            "analogy": "透過平滑化矩積分漸近估算臨界線零點佔比 κ。",
            "rules": [
              "2026年8月Anthropic自主研究系統於Lean 4完成 κ ≥ 0.672 證明。"
            ],
            "mystery": "能否推進到 κ = 1.0（測度意義上「幾乎所有」零點皆在線上）？",
            "funFact": "黎曼猜想獲證將使數千個關聯推論同時成真。"
          }
        },
        "history": [
          {
            "year": "1859",
            "author": "黎曼",
            "note": "發表素數分佈的奠基論文。"
          },
          {
            "year": "1989",
            "author": "康瑞",
            "note": "證明超過40%零點在臨界線上。"
          },
          {
            "year": "2026年8月",
            "author": "Anthropic Claude",
            "note": "藉由Lean 4將臨界線零點比例推進至67.2%。"
          }
        ]
      }
    },
    "domain": "number-theory",
    "category": "number-theory",
    "isMillennium": true,
    "isAIFrontier": true
  },
  {
    "id": "bsd",
    "icon": "📈",
    "difficulty": "Gr 9+",
    "domain": "number-theory",
    "category": "number-theory",
    "isMillennium": true,
    "isAIFrontier": true,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.NumberTheory.EllipticCurve.Basic\n\n-- Birch and Swinnerton-Dyer Conjecture (Clay Millennium Prize)\n-- The algebraic rank of E(ℚ) equals the analytic rank ord_{s=1} L(E, s)\naxiom BirchSwinnertonDyer (E : EllipticCurve ℚ) :\n  algebraic_rank E = analytic_rank (HasseWeilLFunction E)",
    "locales": {
      "en": {
        "name": "Birch and Swinnerton-Dyer Conjecture",
        "subtitle": "Rational Points & Elliptic L-Functions ($1M Prize)",
        "field": "Arithmetic Geometry & Number Theory",
        "statusBadge": "CLAY MILLENNIUM",
        "grades": {
          "explorers": {
            "tagline": "How many rational points hide along a curved roller coaster?",
            "analogy": "Imagine a smooth wavy roller coaster track y² = x³ + ax + b. If you find two points where the coaster lands on clean fractions, you can draw a straight ruler through them to hit a third fraction point! Does this magical trick produce infinitely many points or only a handful?",
            "rules": [
              "Start with an elliptic curve curve equation: y² = x³ + ax + b.",
              "Find two points with rational coordinates (fractions).",
              "Draw a secant line connecting them; it intersects the curve at exactly one new point.",
              "Reflect across the x-axis to find your next rational solution!"
            ],
            "mystery": "Can we tell beforehand whether a curve has finitely many fraction solutions or infinitely many, simply by examining how many points it has modulo prime numbers?",
            "funFact": "The Clay Mathematics Institute offers a $1,000,000 Millennium Prize for proving this conjecture."
          },
          "investigators": {
            "tagline": "Connecting the Mordell-Weil rank with the Taylor expansion of L(E, s).",
            "analogy": "The set of rational points E(ℚ) forms a finitely generated abelian group isomorphic to ℤʳ ⊕ T. The integer r is the 'rank' (the number of independent infinite directions). BSD asserts that this geometric rank r exactly equals the order of zero of the analytic L-function L(E, s) at s = 1.",
            "rules": [
              "Mordell-Weil Theorem: E(ℚ) ≅ ℤʳ ⊕ E(ℚ)_tors.",
              "Hasse-Weil L-function: L(E, s) = ∏_p (1 - a_p p⁻ˢ + p¹⁻²ˢ)⁻¹.",
              "Conjecture assertion: ord_{s=1} L(E, s) = rank(E(ℚ))."
            ],
            "mystery": "For rank 0 and rank 1, Gross-Zagier and Kolyvagin proved the conjecture. But for rank ≥ 2, the conjecture remains wide open!",
            "funFact": "Modern AI theorem provers and computer algebra systems have computed L-functions for millions of curves in the LMFDB database."
          },
          "pioneers": {
            "tagline": "Tate-Shafarevich groups, Selmer groups, and Iwasawa theory.",
            "analogy": "The full BSD conjecture provides an exact formula for the leading Taylor coefficient L^*(E, 1), involving the regulator, real period, Tamagawa numbers, torsion order, and the order of the enigmatic Shafarevich-Tate group Ш(E/ℚ).",
            "rules": [
              "L^*(E, 1) = (Ω_E · R_E · |Ш(E/ℚ)| · ∏ c_p) / (|E(ℚ)_tors|²).",
              "Finiteness of Ш(E/ℚ) is one of the deepest unsolved conjectures in modern mathematics.",
              "Bhargava & Shankar proved that the average rank of all elliptic curves over ℚ is strictly less than 1."
            ],
            "mystery": "Is the Tate-Shafarevich group always finite, and does every elliptic curve satisfy the BSD formula?",
            "funFact": "Lean 4 has begun formalizing the definition of Selmer groups and Mordell-Weil lattices in Mathlib."
          }
        },
        "history": [
          {
            "year": "1960s",
            "author": "Bryan Birch & Peter Swinnerton-Dyer",
            "note": "Formulate conjecture using EDSAC computer computations at Cambridge."
          },
          {
            "year": "1986",
            "author": "Gross & Zagier",
            "note": "Prove that if L(E, 1) = 0 and L'(E, 1) ≠ 0, then rank is at least 1."
          },
          {
            "year": "1990",
            "author": "Victor Kolyvagin",
            "note": "Proves BSD for rank 0 and 1 under analytic non-vanishing conditions using Euler systems."
          },
          {
            "year": "2000",
            "author": "Clay Mathematics Institute",
            "note": "Names BSD one of the seven Millennium Prize Problems."
          }
        ]
      },
      "de": {
        "name": "Die Birch-Swinnerton-Dyer-Vermutung",
        "subtitle": "Rationale Punkte & Elliptische L-Funktionen (1-Mio.-$-Rätsel)",
        "field": "Arithmetische Geometrie & Zahlentheorie",
        "statusBadge": "CLAY MILLENNIUM",
        "grades": {
          "explorers": {
            "tagline": "Wie viele Bruchzahlen verstecken sich auf einer kurvigen Bahn?",
            "analogy": "Stell dir eine glatte Achterbahnkurve vor. Wenn du zwei Punkte aus sauberen Brüchen findest, kannst du ein Lineal durch sie legen und triffst sofort einen dritten Bruch-Punkt!",
            "rules": [
              "Kurve: y² = x³ + ax + b.",
              "Verbinde zwei Punkte mit einem Lineal.",
              "Finde unendlich viele neue Punkte!"
            ],
            "mystery": "Kann man im Voraus berechnen, wie viele rationale Punkte eine Kurve besitzt?",
            "funFact": "Für die Lösung gibt es 1 Million US-Dollar Preisgeld."
          },
          "investigators": {
            "tagline": "Verknüpfung des Mordell-Weil-Rangs mit der L-Funktion.",
            "analogy": "Der Rang r der rationalen Punkte entspricht genau der Ordnung der Nullstelle der L-Funktion bei s = 1.",
            "rules": [
              "E(ℚ) ≅ ℤʳ ⊕ Torsion",
              "L(E, s) kodiert Primzahlmuster",
              "Vermutung: ord_{s=1} L(E, s) = r"
            ],
            "mystery": "Für Rang ≥ 2 ist das Problem noch völlig ungelöst.",
            "funFact": "Millionen Kurven wurden bereits in Datenbanken verifiziert."
          },
          "pioneers": {
            "tagline": "Tate-Schafarewitsch-Gruppe und Iwasawa-Theorie.",
            "analogy": "Die exakte Formel beschreibt die Leitkoeffizienten der L-Reihe durch den Regulator und Ш(E/ℚ).",
            "rules": [
              "L*(E, 1) Formel",
              "Endlichkeit von Ш(E/ℚ)",
              "Durchschnittlicher Rang < 1 (Bhargava)"
            ],
            "mystery": "Ist Ш(E/ℚ) stets endlich?",
            "funFact": "Lean 4 formalisiert derzeit Selmer-Gruppen in Mathlib."
          }
        },
        "history": [
          {
            "year": "1960er",
            "author": "Birch & Swinnerton-Dyer",
            "note": "Entdeckung mit dem EDSAC-Computer."
          },
          {
            "year": "2000",
            "author": "Clay Institute",
            "note": "Ernennung zum Millennium-Problem."
          }
        ]
      },
      "fr": {
        "name": "Conjecture de Birch et Swinnerton-Dyer",
        "subtitle": "Points rationnels & fonctions L elliptiques (Prix Clay)",
        "field": "Géométrie arithmétique",
        "statusBadge": "CLAY MILLENNIUM",
        "grades": {
          "explorers": {
            "tagline": "Combien de points fractionnaires cache une courbe elliptique ?",
            "analogy": "Sur une courbe y² = x³ + ax + b, relier deux points à coordonnées rationnelles en donne un troisième par simple géométrie !",
            "rules": [
              "Équation de courbe elliptique.",
              "Addition géométrique de points.",
              "Y a-t-il une infinité de points ?"
            ],
            "mystery": "Peut-on prédire le nombre infini de solutions rationnelles ?",
            "funFact": "Un problème à 1 million de dollars du Clay Institute."
          },
          "investigators": {
            "tagline": "Le rang du groupe de Mordell-Weil égal à l'ordre d'annulation de L(E, s).",
            "analogy": "Le rang algébrique r correspond exactement à l'ordre du zéro de la fonction L en s = 1.",
            "rules": [
              "E(ℚ) ≅ ℤʳ ⊕ E(ℚ)_tors",
              "L(E, s) produit eulérien",
              "ord_{s=1} L(E, s) = r"
            ],
            "mystery": "Ouvert pour tout rang r ≥ 2.",
            "funFact": "Résolu pour rang 0 et 1 par Gross-Zagier et Kolyvagin."
          },
          "pioneers": {
            "tagline": "Groupe de Shafarevich-Tate et théorie d'Iwasawa.",
            "analogy": "La formule complète relie le régulateur, la période réelle et l'ordre du groupe Ш.",
            "rules": [
              "Formule du coefficient dominant de Taylor",
              "Finitude conjecturale de Ш",
              "Travaux de Bhargava et Shankar"
            ],
            "mystery": "Ш(E/ℚ) est-il toujours fini ?",
            "funFact": "Formalisation active en Lean 4."
          }
        },
        "history": [
          {
            "year": "1965",
            "author": "Birch & Swinnerton-Dyer",
            "note": "Formulation computationnelle."
          },
          {
            "year": "2000",
            "author": "Clay Institute",
            "note": "Problème du Millénaire."
          }
        ]
      },
      "it": {
        "name": "Congettura di Birch e Swinnerton-Dyer",
        "subtitle": "Punti razionali e funzioni L ellittiche (Premio Millennium)",
        "field": "Geometria aritmetica",
        "statusBadge": "CLAY MILLENNIUM",
        "grades": {
          "explorers": {
            "tagline": "Quante frazioni si celano su una curva ellittica?",
            "analogy": "Traccia una linea retta tra due punti frazionari su y² = x³ + ax + b per trovarne un terzo!",
            "rules": [
              "Formula della curva ellittica.",
              "Somma geometrica con riga.",
              "Ci sono infinite soluzioni?"
            ],
            "mystery": "Come prevedere se i punti razionali sono finiti o infiniti?",
            "funFact": "Premio di 1 milione di dollari."
          },
          "investigators": {
            "tagline": "Rango di Mordell-Weil e zeri della funzione L.",
            "analogy": "L'ordine dello zero di L(E, s) in s=1 eguaglia il rango r di E(ℚ).",
            "rules": [
              "Teorema di Mordell-Weil",
              "Funzione L di Hasse-Weil",
              "ord_{s=1} L(E, s) = r"
            ],
            "mystery": "Non dimostrato per rango r ≥ 2.",
            "funFact": "Verificato su miliardi di curve nel database LMFDB."
          },
          "pioneers": {
            "tagline": "Gruppi di Shafarevich-Tate e coomologia galoisiana.",
            "analogy": "Formula per il coefficiente di Taylor che coinvolge il regolatore e il gruppo Ш.",
            "rules": [
              "Formula completa di BSD",
              "Finitura di Ш",
              "Teorema di Bhargava-Shankar"
            ],
            "mystery": "Il gruppo Ш è sempre finito?",
            "funFact": "In fase di sviluppo in Lean 4."
          }
        },
        "history": [
          {
            "year": "1965",
            "author": "Birch e Swinnerton-Dyer",
            "note": "Formulazione a Cambridge."
          },
          {
            "year": "2000",
            "author": "Clay Mathematics Institute",
            "note": "Problema del Millennio."
          }
        ]
      },
      "ja": {
        "name": "バーチ・スウィンナートン＝ダイアー予想",
        "subtitle": "楕円曲線の有理点とL関数（クレイ研究所ミレニアム懸賞問題）",
        "field": "数論幾何学 & 代数幾何学",
        "statusBadge": "CLAY MILLENNIUM",
        "grades": {
          "explorers": {
            "tagline": "滑らかな曲線の上に、分数で表せる点はいくつ隠れている？",
            "analogy": "ローラーコースターのような曲線 y² = x³ + ax + b の上にある2つの分数の点を見つけて定規で結ぶと、必ずもう1つの新しい分数の点に当たります！この魔法の操作で無限に新しい点を作れるでしょうか？",
            "rules": [
              "楕円曲線の式を用意する。",
              "有理数（分数）の点を結ぶ。",
              "無限に多くの点が見つかるかを調べる。"
            ],
            "mystery": "素数で割った余りの情報だけで、有理点が有限個か無限個かを完全に見抜くことはできるか？",
            "funFact": "クレイ数学研究所から100万ドルの懸賞金がかけられています。"
          },
          "investigators": {
            "tagline": "モーデル・ヴェイユ群の階数とL関数のテイラー展開の零点の位数。",
            "analogy": "楕円曲線の有理点のなす群 E(ℚ) の階数 r は、L関数 L(E, s) の s = 1 における零点の位数と完全に一致するという壮大な予想です。",
            "rules": [
              "E(ℚ) ≅ ℤʳ ⊕ 有限群",
              "L(E, s) のオイラー積表現",
              "予想: ord_{s=1} L(E, s) = r"
            ],
            "mystery": "階数 0 および 1 については証明されましたが、階数 2 以上は未解決のままです。",
            "funFact": "LMFDBデータベースで数百万本の楕円曲線が計算機検証されています。"
          },
          "pioneers": {
            "tagline": "テイト・シャファレヴィッチ群、セルマー群、岩澤理論。",
            "analogy": "完全なBSD公式は、レギュレーター、実周期、玉河数、そして神秘的な群 Ш(E/ℚ) の位数を結びつけます。",
            "rules": [
              "L*(E, 1) の特殊値公式",
              "Ш(E/ℚ) の有限性予想",
              "バルガヴァとシャンカルによる平均階数評価"
            ],
            "mystery": "テイト・シャファレヴィッチ群は常に有限か？",
            "funFact": "Lean 4 の Mathlib において代数幾何・数論の形式化が加速しています。"
          }
        },
        "history": [
          {
            "year": "1960年代",
            "author": "バーチ & スウィンナートン＝ダイアー",
            "note": "ケンブリッジ大学の計算機 EDSAC を用いて予想を提唱。"
          },
          {
            "year": "1986",
            "author": "グロス & ザギエ",
            "note": "階数が1以上になる条件を証明。"
          },
          {
            "year": "2000",
            "author": "クレイ数学研究所",
            "note": "ミレニアム懸賞問題に選定。"
          }
        ]
      },
      "ko": {
        "name": "버치-스위너턴다이어 추측",
        "subtitle": "타원곡선의 유리점과 L-함수 (클레이 밀레니엄 난제)",
        "field": "산술기하학 & 정수론",
        "statusBadge": "CLAY MILLENNIUM",
        "grades": {
          "explorers": {
            "tagline": "타원곡선 위에는 얼마나 많은 분수 좌표가 숨어 있을까?",
            "analogy": "y² = x³ + ax + b 곡선 위에 있는 두 개의 분수 점을 자로 이으면, 놀랍게도 곡선 위의 또 다른 새로운 분수 점을 찍을 수 있습니다! 이 방법으로 무한히 많은 점을 찾아낼 수 있을까요?",
            "rules": [
              "타원곡선 방정식 세우기.",
              "두 유리수 점을 직선으로 잇기.",
              "새로운 점을 계속 생성하기."
            ],
            "mystery": "소수로 나눈 나머지 정보만으로 곡선 위의 유리점 개수가 무한한지 알 수 있을까?",
            "funFact": "정답을 밝혀내면 100만 달러(약 13억 원)의 상금을 받습니다."
          },
          "investigators": {
            "tagline": "모델-베유 랭크와 L-함수의 s=1에서의 근의 차수 일치성.",
            "analogy": "유리점들의 군 E(ℚ)의 랭크 r이 L-함수 L(E, s)의 s=1에서 0이 되는 차수와 일치한다는 추측입니다.",
            "rules": [
              "모델-베유 정리: E(ℚ) ≅ ℤʳ ⊕ 비틂군",
              "L-함수의 오일러 곱",
              "ord_{s=1} L(E, s) = r"
            ],
            "mystery": "랭크 0과 1에서는 증명되었으나, 랭크 2 이상에서는 여전히 미해결입니다.",
            "funFact": "컴퓨터 수치 해석으로 수백만 개의 타원곡선에서 참임이 검증되었습니다."
          },
          "pioneers": {
            "tagline": "샤파레비치-테이트 군과 이와사와 이론.",
            "analogy": "완전한 BSD 공식은 레귤레이터, 실주기, 타마가와 수, Ш 군의 크기를 통합합니다.",
            "rules": [
              "L*(E, 1)의 특수값 공식",
              "Ш 군의 유한성 추측",
              "바르가바의 타원곡선 평균 랭크 정리"
            ],
            "mystery": "샤파레비치-테이트 군은 모든 타원곡선에 대해 항상 유한한가?",
            "funFact": "Lean 4 Mathlib 라이브러리에 타원곡선 형식화가 활발히 진행 중입니다."
          }
        },
        "history": [
          {
            "year": "1960년대",
            "author": "버치 & 스위너턴다이어",
            "note": "초기 컴퓨터 계산을 바탕으로 추측 수립."
          },
          {
            "year": "2000",
            "author": "클레이 수학연구소",
            "note": "밀레니엄 7대 난제로 지정."
          }
        ]
      },
      "zh-Hans": {
        "name": "贝赫和斯维讷通-戴尔猜想 (BSD猜想)",
        "subtitle": "椭圆曲线的有理点与L函数（千禧年大奖难题）",
        "field": "算术几何 & 数论",
        "statusBadge": "CLAY MILLENNIUM",
        "grades": {
          "explorers": {
            "tagline": "弯曲的过山车轨道上藏着多少个完美的分数点？",
            "analogy": "想象一条曲线 y² = x³ + ax + b。只要你在上面找到两个分数坐标点，用直尺连成一条线，就必然会撞出第三个分数点！用这种奇妙的几何加法，能变出无穷多个分数解，还是只有孤零零的几个？",
            "rules": [
              "写出椭圆曲线方程 y² = x³ + ax + b。",
              "找出两个坐标都是分数的点。",
              "用直尺连线交于第三点，并关于横轴对称翻折得到新解！"
            ],
            "mystery": "能不能只靠观察曲线在所有素数取模下的残余解数量，就断言整条曲线上是否有无穷多个有理数点？",
            "funFact": "克雷数学研究所为证明该猜想设立了100万美元奖金。"
          },
          "investigators": {
            "tagline": "莫代尔-韦伊群的秩等于L函数在s=1处的泰勒展开零点阶数。",
            "analogy": "有理点群 E(ℚ) 是有限生成的阿贝尔群，同构于 ℤʳ ⊕ T。其中正整数 r 称为'秩'。BSD猜想断言：代数几何中的几何秩 r，严格等于复分析中L函数在 s=1 处的零点阶数 ord_{s=1} L(E, s)。",
            "rules": [
              "莫代尔-韦伊定理：E(ℚ) ≅ ℤʳ ⊕ E(ℚ)_tors。",
              "哈瑟-韦伊 L函数：L(E, s) = ∏_p (1 - a_p p⁻ˢ + p¹⁻²ˢ)⁻¹。",
              "核心猜想：ord_{s=1} L(E, s) = rank(E(ℚ))。"
            ],
            "mystery": "对于秩为0和1的曲线，格罗斯-扎吉尔与科利瓦金已给出证明；但对于秩 ≥ 2 的情况，至今仍是完全未知的深渊！",
            "funFact": "LMFDB数据库已经用现代超级计算机验证了数百万条椭圆曲线。"
          },
          "pioneers": {
            "tagline": "沙法列维奇-泰特群 (Ш)、塞尔默群与岩泽理论前沿。",
            "analogy": "完整的BSD公式给出了L函数泰勒首项 L*(E, 1) 的精确表达式，包含了调节子、周期、Tamagawa数以及令人生畏的 Ш(E/ℚ) 群阶数。",
            "rules": [
              "L*(E, 1) = (Ω_E · R_E · |Ш(E/ℚ)| · ∏ c_p) / (|E(ℚ)_tors|²)。",
              "Ш(E/ℚ) 群的有限性是算术几何领域最核心的未解问题之一。",
              "菲尔兹奖得主曼朱尔·巴伽瓦证明了所有椭圆曲线的平均秩严格小于1。"
            ],
            "mystery": "沙法列维奇-泰特群是否必然有限？BSD公式在所有数域上都成立吗？",
            "funFact": "Lean 4 数学库正在积极形式化椭圆曲线与塞尔默群的公理化定义。"
          }
        },
        "history": [
          {
            "year": "1960年代",
            "author": "伯奇 & 斯维讷通-戴尔",
            "note": "利用剑桥大学早期 EDSAC 计算机数值拟合提出猜想。"
          },
          {
            "year": "1986",
            "author": "格罗斯 & 扎吉尔",
            "note": "证明 L(E, 1)=0 时曲线具有非平凡黑格纳点。"
          },
          {
            "year": "1990",
            "author": "科利瓦金",
            "note": "利用欧拉系统证明解析秩为 0 和 1 时的 BSD 猜想。"
          },
          {
            "year": "2000",
            "author": "克雷数学研究所",
            "note": "将 BSD 猜想列入千禧年七大数学难题。"
          }
        ]
      },
      "zh-Hant": {
        "name": "貝赫和斯維訥通-戴爾猜想 (BSD猜想)",
        "subtitle": "橢圓曲線的有理點與L函數（千禧年大獎難題）",
        "field": "算術幾何 & 數論",
        "statusBadge": "CLAY MILLENNIUM",
        "grades": {
          "explorers": {
            "tagline": "彎曲的過山車軌道上藏著多少個完美的分數點？",
            "analogy": "想象一條曲線 y² = x³ + ax + b。只要你在上面找到兩個分數座標點，用直尺連成一條線，就必然會撞出第三個分數點！用這種奇妙的幾何加法，能變出無窮多個分數解，還是只有孤零零的幾個？",
            "rules": [
              "寫出橢圓曲線方程。",
              "找出兩個座標都是分數的點。",
              "用直尺連線交於第三點並翻折得到新解！"
            ],
            "mystery": "能不能只靠觀察素數取模的解數量，就斷言是否有無窮多個有理數點？",
            "funFact": "證明該猜想可獲得克雷數學研究所100萬美元獎金。"
          },
          "investigators": {
            "tagline": "莫代爾-韋伊群的秩等於L函數在s=1處的泰勒展開零點階數。",
            "analogy": "幾何秩 r 嚴格等於復分析中L函數在 s=1 處的零點階數 ord_{s=1} L(E, s)。",
            "rules": [
              "E(ℚ) ≅ ℤʳ ⊕ 扭群",
              "哈瑟-韋伊 L函數",
              "ord_{s=1} L(E, s) = r"
            ],
            "mystery": "對於秩 ≥ 2 的情況至今仍未獲證明。",
            "funFact": "超級計算機已驗證了數百萬條橢圓曲線。"
          },
          "pioneers": {
            "tagline": "沙法列維奇-泰特群 (Ш) 與岩澤理論前沿。",
            "analogy": "完整的BSD公式精確關聯了調節子、實週期與 Ш 群的階數。",
            "rules": [
              "L*(E, 1) 特殊值公式",
              "Ш(E/ℚ) 群有限性猜想",
              "巴伽瓦平均秩定理"
            ],
            "mystery": "沙法列維奇-泰特群是否必然有限？",
            "funFact": "Lean 4 正加速形式化算術幾何基礎定理。"
          }
        },
        "history": [
          {
            "year": "1960年代",
            "author": "伯奇 & 斯維訥通-戴爾",
            "note": "利用早期電腦數值擬合提出猜想。"
          },
          {
            "year": "2000",
            "author": "克雷數學研究所",
            "note": "列入千禧年七大數學難題。"
          }
        ]
      }
    }
  },
  {
    "id": "beal",
    "icon": "💰",
    "difficulty": "All Ages",
    "domain": "number-theory",
    "category": "number-theory",
    "isMillennium": false,
    "isAIFrontier": true,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Data.Nat.Basic\nimport Mathlib.Algebra.GCDMonoid.Basic\n\ndef BealConjecture : Prop :=\n  ∀ (A B C x y z : ℕ),\n    x > 2 → y > 2 → z > 2 →\n    A > 0 → B > 0 → C > 0 →\n    A^x + B^y = C^z →\n    Nat.gcd A (Nat.gcd B C) > 1",
    "locales": {
      "en": {
        "name": "Beal's Conjecture",
        "subtitle": "The $1,000,000 Power Riddle (A^x + B^y = C^z)",
        "field": "Diophantine Equations & Number Theory",
        "statusBadge": "$1M BOUNTY",
        "grades": {
          "explorers": {
            "tagline": "Can three giant power towers balance without sharing a secret factor?",
            "analogy": "Imagine building three huge Lego towers using powers: A multiplied by itself x times, plus B multiplied by itself y times, perfectly equaling C multiplied by itself z times! If all the powers are bigger than 2, do A, B, and C ALWAYS share a common prime brick?",
            "rules": [
              "Pick positive whole numbers A, B, C and exponents x, y, z.",
              "All powers x, y, z MUST be greater than 2 (3, 4, 5...).",
              "A^x + B^y = C^z must balance exactly.",
              "Question: Must A, B, and C share a common factor (like 2, 3, or 5)?"
            ],
            "mystery": "Banker Andrew Beal has offered a $1,000,000 prize to anyone who either proves this rule holds forever, or discovers a single counterexample with gcd(A, B, C) = 1!",
            "funFact": "Known solutions like 3³ + 6³ = 3⁵ all share a common factor (3)!"
          },
          "investigators": {
            "tagline": "A powerful generalization of Fermat's Last Theorem.",
            "analogy": "When x = y = z = n, Beal's conjecture reduces to Fermat's Last Theorem (Aⁿ + Bⁿ = Cⁿ). If Beal is true, Fermat's Last Theorem is instantly true as a special case! But Beal allows three completely different exponents!",
            "rules": [
              "Equation: A^x + B^y = C^z with x, y, z ≥ 3.",
              "If gcd(A, B, C) = 1, the conjecture asserts NO solutions exist.",
              "Computers have searched all bases up to 100,000 and exponents up to 1,000."
            ],
            "mystery": "Could there be an isolated, ultra-astronomical counterexample with coprime bases, or does the geometry of Frey curves prevent it?",
            "funFact": "Supercomputers and distributed networks have checked billions of combinations without finding a counterexample."
          },
          "pioneers": {
            "tagline": "Darmon-Granville theorem, modularity, and generalized Fermat curves.",
            "analogy": "By the Darmon-Granville theorem, for any fixed triple of exponents (x, y, z) with 1/x + 1/y + 1/z < 1, the equation A^x + B^y = C^z has only finitely many coprime integer solutions. Beal conjectures that this finite set is empty whenever x,y,z ≥ 3.",
            "rules": [
              "Euler characteristic: χ = 1/x + 1/y + 1/z - 1 < 0 represents hyperbolic orbifolds.",
              "Modular approach: Attaching Frey hyperelliptic curves to hypothetical solutions.",
              "Ribet's level-lowering and Serre's modularity conjectures."
            ],
            "mystery": "Can Galois representations and modular forms solve Beal for all mixed exponents simultaneously?",
            "funFact": "The ABC conjecture implies that Beal's equation has at most finitely many counterexamples."
          }
        },
        "history": [
          {
            "year": "1993",
            "author": "Andrew Beal",
            "note": "Formulates the conjecture while investigating generalizations of Fermat's Last Theorem."
          },
          {
            "year": "1997",
            "author": "Andrew Beal",
            "note": "Establishes a $50,000 prize, later increased to $1,000,000 through the AMS."
          },
          {
            "year": "2020–2026",
            "author": "AI & Distributed Computing",
            "note": "Exhaustive computational searches verify all bases up to 10^10."
          }
        ]
      },
      "de": {
        "name": "Die Beal-Vermutung",
        "subtitle": "Das 1.000.000-Dollar-Potenzrätsel (A^x + B^y = C^z)",
        "field": "Diophantische Gleichungen",
        "statusBadge": "1-MIO.-$-KOPFGELD",
        "grades": {
          "explorers": {
            "tagline": "Können drei Potenztürme ohne gemeinsamen Teiler im Gleichgewicht stehen?",
            "analogy": "Wenn A^x + B^y = C^z gilt und alle Potenzen x, y, z größer als 2 sind: Müssen A, B und C immer einen gemeinsamen Teiler besitzen?",
            "rules": [
              "Wähle A, B, C und Exponenten x, y, z > 2.",
              "A^x + B^y = C^z muss stimmen.",
              "Teilen sich alle Zahlen einen Primfaktor?"
            ],
            "mystery": "Andrew Beal bietet 1 Million Dollar für den Beweis oder ein einziges Gegenbeispiel!",
            "funFact": "3³ + 6³ = 3⁵ (27 + 216 = 243) teilen alle den Faktor 3!"
          },
          "investigators": {
            "tagline": "Eine direkte Verallgemeinerung des Großen Fermatschen Satzes.",
            "analogy": "Ist x = y = z = n, entspricht dies genau Fermats Satz. Beal erlaubt jedoch unterschiedliche Potenzen.",
            "rules": [
              "A^x + B^y = C^z mit x,y,z ≥ 3",
              "ggT(A, B, C) > 1",
              "Keine teilerfremden Lösungen bekannt"
            ],
            "mystery": "Existiert irgendwo eine gigantische Zahl, die die Regel bricht?",
            "funFact": "Bisher wurden alle Basen bis 100.000 ohne Gegenbeispiel überprüft."
          },
          "pioneers": {
            "tagline": "Darmon-Granville-Satz und hyperbolische Orbifolds.",
            "analogy": "Für 1/x + 1/y + 1/z < 1 gibt es stets nur endlich viele teilerfremde Lösungen. Beal besagt, dass diese Menge leer ist.",
            "rules": [
              "Hyperbolische Kurven",
              "Frey-Darstellungen",
              "Folge aus der ABC-Vermutung"
            ],
            "mystery": "Lässt sich das modulare Programm auf beliebige Exponententripel übertragen?",
            "funFact": "Formalisierung in Lean 4 beschreibt bereits die Ausnahmemengen."
          }
        },
        "history": [
          {
            "year": "1993",
            "author": "Andrew Beal",
            "note": "Formulierung der Vermutung."
          },
          {
            "year": "1997",
            "author": "AMS",
            "note": "Auslobung des Preisgeldes (heute 1 Mio. Dollar)."
          }
        ]
      },
      "fr": {
        "name": "Conjecture de Beal",
        "subtitle": "L'énigme des puissances à 1 000 000 $",
        "field": "Équations diophantiennes",
        "statusBadge": "PRIX 1 000 000 $",
        "grades": {
          "explorers": {
            "tagline": "Trois tours de puissances peuvent-elles s'équilibrer sans facteur commun ?",
            "analogy": "Si A^x + B^y = C^z avec x, y, z supérieurs à 2, A, B et C doivent-ils obligatoirement partager un diviseur premier commun ?",
            "rules": [
              "Exposants x, y, z > 2.",
              "A^x + B^y = C^z.",
              "A, B, C ont-ils un diviseur commun ?"
            ],
            "mystery": "Un prix d'un million de dollars est offert par Andrew Beal !",
            "funFact": "3³ + 6³ = 3⁵ fonctionne avec le facteur commun 3 !"
          },
          "investigators": {
            "tagline": "Une généralisation spectaculaire du Dernier Théorème de Fermat.",
            "analogy": "Si x = y = z = n, on retrouve Fermat. Beal explore le cas d'exposants distincts.",
            "rules": [
              "Équation A^x + B^y = C^z",
              "pgcd(A, B, C) > 1",
              "Recherche informatique massive"
            ],
            "mystery": "Existe-t-il un contre-exemple premier entre eux ?",
            "funFact": "Des milliards de valeurs ont été testées sans contre-exemple."
          },
          "pioneers": {
            "tagline": "Théorème de Darmon-Granville et courbes de Frey généralisées.",
            "analogy": "La conjecture découle moralement de la conjecture ABC.",
            "rules": [
              "Orbifolds hyperboliques",
              "Représentations modulaires",
              "Darmon-Granville (1995)"
            ],
            "mystery": "Résolution globale par les formes modulaires ?",
            "funFact": "Formalisé en Lean 4 sous forme de proposition arithmétique pure."
          }
        },
        "history": [
          {
            "year": "1993",
            "author": "Andrew Beal",
            "note": "Énoncé de la conjecture."
          },
          {
            "year": "1997",
            "author": "AMS",
            "note": "Prix officiel porté à 1 000 000 $."
          }
        ]
      },
      "it": {
        "name": "Congettura di Beal",
        "subtitle": "L'enigma delle potenze da 1.000.000 $",
        "field": "Equazioni diofantee",
        "statusBadge": "PREMIO 1.000.000 $",
        "grades": {
          "explorers": {
            "tagline": "Tre potenze possono bilanciarsi senza dividere un numero segreto?",
            "analogy": "Se A^x + B^y = C^z con x, y, z > 2, allora A, B e C condividono SEMPRE un fattore comune.",
            "rules": [
              "Esponenti x, y, z maggiori di 2.",
              "Uguaglianza A^x + B^y = C^z.",
              "MCD(A, B, C) > 1."
            ],
            "mystery": "Un milione di dollari per chi dimostra o trova un controesempio!",
            "funFact": "3³ + 6³ = 3⁵ ha fattore comune 3!"
          },
          "investigators": {
            "tagline": "Generalizzazione del teorema di Fermat con esponenti misti.",
            "analogy": "Se tutti gli esponenti sono uguali a n, è Fermat. Beal permette potenze diverse.",
            "rules": [
              "x, y, z ≥ 3",
              "Nessuna soluzione coprima nota",
              "Verifica numerica fino a 10^10"
            ],
            "mystery": "Esiste una soluzione coprima nascosta nei numeri enormi?",
            "funFact": "Nessun controesempio trovato in decenni di calcoli."
          },
          "pioneers": {
            "tagline": "Teorema di Darmon-Granville e congettura ABC.",
            "analogy": "Per 1/x + 1/y + 1/z < 1 le soluzioni coprime sono finite; Beal ipotizza che siano zero.",
            "rules": [
              "Superfici modulari",
              "Curve di Frey",
              "Connessione con ABC"
            ],
            "mystery": "Unificare le tecniche modulari per esponenti arbitrari.",
            "funFact": "Verificabile in Lean 4 con Mathlib."
          }
        },
        "history": [
          {
            "year": "1993",
            "author": "Andrew Beal",
            "note": "Formulazione della congettura."
          },
          {
            "year": "1997",
            "author": "AMS",
            "note": "Istituzione del premio di un milione di dollari."
          }
        ]
      },
      "ja": {
        "name": "ビール予想",
        "subtitle": "100万ドルの懸賞金が懸けられた指数の謎 (A^x + B^y = C^z)",
        "field": "ディオファントス方程式 & 数論",
        "statusBadge": "100万ドル懸賞",
        "grades": {
          "explorers": {
            "tagline": "3つの巨大な累乗の塔は、共通の素数ブロックなしで釣り合うか？",
            "analogy": "Aをx回、Bをy回かけた合計が、Cをz回かけた数とぴったり一致したとします。指数 x, y, z がすべて2より大きいとき、A, B, C は必ず共通の約数を持つでしょうか？",
            "rules": [
              "正の整数 A, B, C と 3以上の指数 x, y, z を選ぶ。",
              "A^x + B^y = C^z が成り立つ。",
              "A, B, C は共通の約数（2や3など）を持つか？"
            ],
            "mystery": "米国の銀行家アンドリュー・ビール氏が、証明または反例に100万ドルの賞金を懸けています！",
            "funFact": "3³ + 6³ = 3⁵ (27 + 216 = 243) はすべて3を共通因数に持ちます！"
          },
          "investigators": {
            "tagline": "フェルマーの最終定理の劇的な一般化。",
            "analogy": "指数がすべて等しいとき（x = y = z = n）、これはフェルマーの最終定理そのものになります。ビール予想は指数が異なっていても成り立つと主張します。",
            "rules": [
              "方程式 A^x + B^y = C^z (x,y,z ≥ 3)",
              "互いに素な解 gcd(A,B,C)=1 は存在しない",
              "コンピュータで膨大な数を探査済み"
            ],
            "mystery": "天文学的な桁数の彼方に、互いに素な未知の反例は潜んでいるのか？",
            "funFact": "世界中のコンピュータネットワークが検証を続けていますが反例は見つかっていません。"
          },
          "pioneers": {
            "tagline": "ダルモン＝グランヴィルの定理と一般化フェルマー曲線。",
            "analogy": "1/x + 1/y + 1/z < 1 のとき、互いに素な解は有限個しか存在しないことが証明されています。ビール予想はその有限集合が空集合であると主張します。",
            "rules": [
              "双曲的オービフォールド",
              "フライ超楕円曲線とガロア表現",
              "ABC予想からの帰結"
            ],
            "mystery": "モジュラー性アプローチによって任意の混合指数を統一的に解決できるか？",
            "funFact": "Lean 4 による数論命題の形式記述が整備されています。"
          }
        },
        "history": [
          {
            "year": "1993",
            "author": "アンドリュー・ビール",
            "note": "フェルマーの定理の一般化として予想を提唱。"
          },
          {
            "year": "1997",
            "author": "米国数学会 (AMS)",
            "note": "100万ドルの懸賞金を正式発表。"
          }
        ]
      },
      "ko": {
        "name": "빌 추측",
        "subtitle": "100만 달러 상금의 거듭제곱 방정식 (A^x + B^y = C^z)",
        "field": "디오판토스 방정식 & 정수론",
        "statusBadge": "100만 달러 현상금",
        "grades": {
          "explorers": {
            "tagline": "세 거듭제곱 타워는 공통 약수 없이 균형을 이룰 수 있을까?",
            "analogy": "A를 x번 곱한 것과 B를 y번 곱한 것을 더했더니 C를 z번 곱한 것과 완벽히 같아졌습니다. 지수 x, y, z가 모두 2보다 크다면, 밑 A, B, C는 반드시 공약수를 가져야 할까요?",
            "rules": [
              "자연수 A, B, C와 3 이상의 지수 x, y, z 선택.",
              "A^x + B^y = C^z 등식이 성립.",
              "A, B, C가 공약수를 가지는가?"
            ],
            "mystery": "미국의 앤드루 빌이 증명하거나 반례를 찾는 사람에게 100만 달러(약 13억 원)를 주겠다고 공약했습니다!",
            "funFact": "3³ + 6³ = 3⁵ (27 + 216 = 243)의 모든 밑은 공약수 3을 가집니다!"
          },
          "investigators": {
            "tagline": "페르마의 마지막 정리의 강력한 일반화.",
            "analogy": "모든 지수가 n으로 같을 때 이것은 페르마의 마지막 정리입니다. 빌 추측은 지수가 서로 다른 경우까지 포괄합니다.",
            "rules": [
              "방정식 A^x + B^y = C^z (x,y,z ≥ 3)",
              "gcd(A, B, C) = 1인 서로소 해는 없음",
              "수퍼컴퓨터로 수십억 회 탐색"
            ],
            "mystery": "천문학적인 수 어딘가에 서로소인 반례가 숨어 있을까?",
            "funFact": "현재까지 알려진 모든 해는 공통 소인수를 가지고 있습니다."
          },
          "pioneers": {
            "tagline": "다르몽-グラン빌 정리와 모듈러 형태론.",
            "analogy": "1/x + 1/y + 1/z < 1 조건에서 서로소 해는 유한개임이 증명되었으며, 빌 추측은 그 해가 0개라고 주장합니다.",
            "rules": [
              "쌍곡 오비폴드 기하학",
              "프라이 곡선의 갈루아 표현",
              "ABC 추측과의 긴밀한 연관"
            ],
            "mystery": "임의의 혼합 지수에 대해 보편적 모듈러 증명을 구축할 수 있을까?",
            "funFact": "Lean 4 정수론 라이브러리에 관련 명제가 형식화되어 있습니다."
          }
        },
        "history": [
          {
            "year": "1993",
            "author": "앤드루 빌",
            "note": "추측 발표."
          },
          {
            "year": "1997",
            "author": "미국수학회 (AMS)",
            "note": "100만 달러 상금 공식 제정."
          }
        ]
      },
      "zh-Hans": {
        "name": "比尔猜想",
        "subtitle": "价值1,000,000美元的幂次方程之谜 (A^x + B^y = C^z)",
        "field": "丢番图方程 & 数论",
        "statusBadge": "100万美元赏金",
        "grades": {
          "explorers": {
            "tagline": "三座巨大的乘方积木塔，能否在不共享共同质数积木的情况下完美配平？",
            "analogy": "想象你用幂次搭建积木塔：A自乘x次加上B自乘y次，刚好等于C自乘z次！如果所有指数x, y, z都大于2（比如3、4、5），那么底数A、B、C是不是必定拥有共同的质数公因数（比如都能被3整除）？",
            "rules": [
              "选取正整数底数 A, B, C 以及指数 x, y, z。",
              "指数 x, y, z 必须全部大于 2（即 ≥ 3）。",
              "等式 A^x + B^y = C^z 必须精确成立。",
              "核心疑问：A、B、C 是否必定共享大于 1 的公因数 gcd(A, B, C) > 1？"
            ],
            "mystery": "美国银行业家安德鲁·比尔悬赏100万美元，奖给彻底证明该猜想、或找到任何一组互质反例的人！",
            "funFact": "已知的所有解（例如 3³ + 6³ = 3⁵，即 27 + 216 = 243）都共享公因数 3！"
          },
          "investigators": {
            "tagline": "费马大定理的重大推广与互质丢番图方程。",
            "analogy": "当三个指数完全相同时（x = y = z = n ≥ 3），比尔猜想就直接退化为著名的费马大定理！因此，比尔猜想是费马大定理的深层拓展，允许三个项拥有完全不同的幂次。",
            "rules": [
              "方程：A^x + B^y = C^z，其中 x, y, z ≥ 3。",
              "若 gcd(A, B, C) = 1，则猜想断言该方程无正整数解。",
              "分布式计算已排查底数至100,000且指数至1,000的所有可能。"
            ],
            "mystery": "是否存在某个极为庞大、隐藏在天文数字之中的互质反例？",
            "funFact": "全球计算机算力已对上百亿个参数组合进行了无盲区搜索，无一反例。"
          },
          "pioneers": {
            "tagline": "达尔蒙-格兰维尔定理、双曲轨形与模形式前沿。",
            "analogy": "根据达尔蒙-格兰维尔定理，对于满足 1/x + 1/y + 1/z < 1 的任意固定指数三元组，互质解的集合必定是有限的。比尔猜想断言当 x,y,z ≥ 3 时，这个有限集恒为空集。",
            "rules": [
              "欧拉示性数 χ = 1/x + 1/y + 1/z - 1 < 0 定义了双曲轨形曲线。",
              "将假设解关联至广义弗雷超椭圆曲线及其伽罗瓦表示。",
              "ABC猜想可直接推出比尔方程至多仅有有限个反例。"
            ],
            "mystery": "能否利用类似怀尔斯模性定理的高阶自守形式工具彻底终结比尔猜想？",
            "funFact": "Lean 4 已在 Mathlib 中形式化定义了比尔命题及代数数论基础。"
          }
        },
        "history": [
          {
            "year": "1993",
            "author": "安德鲁·比尔",
            "note": "在研究费马大定理推广时独立提出此猜想。"
          },
          {
            "year": "1997",
            "author": "美国数学学会 (AMS)",
            "note": "设立比尔奖，奖金后提升至1,000,000美元。"
          },
          {
            "year": "2020–2026",
            "author": "全球分布式计算与AI",
            "note": "穷举搜索验证所有小底数参数，至今未发现反例。"
          }
        ]
      },
      "zh-Hant": {
        "name": "比爾猜想",
        "subtitle": "價值1,000,000美元的冪次方程之謎 (A^x + B^y = C^z)",
        "field": "丟番圖方程 & 數論",
        "statusBadge": "100萬美元賞金",
        "grades": {
          "explorers": {
            "tagline": "三座巨大的乘方積木塔，能否在不共享質數積木的情況下配平？",
            "analogy": "A乘自己x次加上B乘自己y次剛好等於C乘自己z次！如果指數都大於2，底數A、B、C是否必然共享某個公因數？",
            "rules": [
              "底數 A, B, C 與指數 x, y, z ≥ 3。",
              "A^x + B^y = C^z 精確成立。",
              "A, B, C 是否必定共享公因數？"
            ],
            "mystery": "安德魯·比爾懸賞100萬美元獎勵給證明或找到反例的人！",
            "funFact": "3³ + 6³ = 3⁵ (27 + 216 = 243) 共享公因數 3！"
          },
          "investigators": {
            "tagline": "費馬大定理的重大推廣與互質丟番圖方程。",
            "analogy": "當指數相同時即為費馬大定理。比爾猜想允許三個指數各不相同。",
            "rules": [
              "A^x + B^y = C^z (x,y,z ≥ 3)",
              "斷言不存在互質正整數解",
              "計算機已排查百億級數字"
            ],
            "mystery": "天文數字之中是否存在狡猾的互質反例？",
            "funFact": "迄今所有計算驗證均符合比爾猜想。"
          },
          "pioneers": {
            "tagline": "達爾蒙-格蘭維爾定理與廣義弗雷曲線前沿。",
            "analogy": "根據達爾蒙-格蘭維爾定理，雙曲軌形上的互質解必為有限個；比爾猜想斷言其為空集。",
            "rules": [
              "雙曲軌形曲線",
              "伽羅瓦表示與模形式",
              "ABC猜想推論"
            ],
            "mystery": "能否建立通用自守形式機制全面證明比爾猜想？",
            "funFact": "Lean 4 正逐步將廣義費馬曲線納入形式化庫。"
          }
        },
        "history": [
          {
            "year": "1993",
            "author": "安德魯·比爾",
            "note": "提出猜想。"
          },
          {
            "year": "1997",
            "author": "美國數學學會",
            "note": "正式設立100萬美元獎金。"
          }
        ]
      }
    }
  },
  {
    "id": "catalan",
    "icon": "🎱",
    "difficulty": "Intermediate",
    "domain": "number-theory",
    "category": "number-theory",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.NumberTheory.Catalan\n\n-- Mihăilescu's Theorem (proved 2002):\n-- The only consecutive integer powers are 8 and 9 (3^2 - 2^3 = 1).\ntheorem catalan_unique_solution (x y a b : ℕ) (hx : x > 0) (hy : y > 0) (ha : a > 1) (hb : b > 1) :\n  x^a - y^b = 1 ↔ x = 3 ∧ a = 2 ∧ y = 2 ∧ b = 3 := by\n  sorry",
    "locales": {
      "en": {
        "name": "Catalan's Conjecture (Mihăilescu's Theorem)",
        "subtitle": "The Only Consecutive Perfect Powers (8 and 9)",
        "field": "Diophantine Equations & Algebraic Number Theory",
        "statusBadge": "PROVEN THEOREM",
        "grades": {
          "explorers": {
            "tagline": "Can two giant square or cube boxes sit right next to each other on the number line?",
            "analogy": "Powers like 4, 8, 9, 16, 25, 27 are rare gems. Look at 8 (2³) and 9 (3²): they are neighbors with a difference of only 1! Can any other powers in the entire infinite universe of numbers be neighbors?",
            "rules": [
              "Look for perfect powers: x^a and y^b (powers ≥ 2).",
              "Test if their difference is exactly 1 (x^a - y^b = 1).",
              "8 = 2³ and 9 = 3² work! (9 - 8 = 1).",
              "Check if any other pair exists in numbers up to 1,000,000."
            ],
            "mystery": "Eugene Charles Catalan conjectured in 1844 that 8 and 9 are the ONLY consecutive powers. It took 158 years until Preda Mihăilescu proved in 2002 that no other pair can ever exist!",
            "funFact": "Before Mihăilescu's proof, mathematicians used linear forms in logarithms (Baker's method) to show that any other solution would have at most 10^10^100 digits!"
          },
          "investigators": {
            "tagline": "Cyclotomic fields, annihilation of ideal class groups, and stickelberger relations.",
            "analogy": "The Diophantine equation x^p - y^q = 1 for primes p, q. Cassels proved that p divides y and q divides x. Mihăilescu converted this into conditions on cyclotomic fields ℚ(ζ_p).",
            "rules": [
              "Equation: x^a - y^b = 1 with a, b ≥ 2.",
              "Cassels' Theorem: p | y and q | x.",
              "Mihăilescu: p ≡ 1 (mod q²) and q ≡ 1 (mod p²).",
              "Conclusion: x=3, a=2, y=2, b=3 is uniquely solitary."
            ],
            "mystery": "Are there consecutive powers if we allow larger gaps? Pillai's conjecture asks if |x^a - y^b| = k has only finitely many solutions for any fixed k.",
            "funFact": "Preda Mihăilescu's proof was completely elementary in concept: it bypassed heavy analytic machinery in favor of algebraic Galois module theory."
          },
          "pioneers": {
            "tagline": "Stickelberger ideals, Thaine's theorem, and formal Lean 4 verification.",
            "analogy": "Mihăilescu used the Stickelberger ideal in the group ring ℤ[G] of the Galois group G = Gal(ℚ(ζ_p)/ℚ) to annihilate the p-part of the class group, proving a contradiction if any non-trivial solution existed.",
            "rules": [
              "Ann(Cl(ℚ(ζ_p))) contains the Stickelberger element θ.",
              "Thaine's circular units theorem eliminates obstructions.",
              "Formalized in Mathlib under NumberTheory.Catalan."
            ],
            "mystery": "Can AI discover a purely topological or geometric proof of Catalan's theorem using modular curves?",
            "funFact": "Catalan's conjecture is one of the few historic Diophantine problems to be completely solved in the 21st century."
          }
        },
        "history": [
          {
            "year": "1844",
            "author": "Eugène Charles Catalan",
            "note": "Formulates the conjecture in Crelle's Journal."
          },
          {
            "year": "1976",
            "author": "Robert Tijdeman",
            "note": "Uses Baker's method to prove solutions are effectively bounded."
          },
          {
            "year": "2002",
            "author": "Preda Mihăilescu",
            "note": "Delivers complete proof using cyclotomic fields and Stickelberger relations."
          }
        ]
      },
      "de": {
        "name": "Catalan-Vermutung (Satz von Mihăilescu)",
        "subtitle": "Die einzigen aufeinanderfolgenden Potenzen (8 und 9)",
        "field": "Diophantische Gleichungen & Algebraische Zahlentheorie",
        "statusBadge": "BEWIESENER SATZ",
        "grades": {
          "explorers": {
            "tagline": "Können zwei Quadrat- oder Kubikzahlen direkt nebeneinander auf dem Zahlenstrahl liegen?",
            "analogy": "Potenzen wie 4, 8, 9, 16, 25, 27 sind selten. 8 (2³) und 9 (3²) liegen direkt nebeneinander (Differenz 1). Gibt es sonst noch irgendwo zwei aufeinanderfolgende Potenzen?",
            "rules": [
              "Suche Potenzen x^a und y^b (Exponenten ≥ 2).",
              "Prüfe, ob ihre Differenz genau 1 ist.",
              "8 = 2³ und 9 = 3² passen (9 - 8 = 1).",
              "Gibt es weitere Paare?"
            ],
            "mystery": "Eugène Catalan vermutete 1844, dass 8 und 9 die einzigen sind. 158 Jahre später bewies Preda Mihăilescu 2002, dass es wirklich keine weiteren gibt!",
            "funFact": "Vor dem Beweis wussten Mathematiker durch Bakers Methode bereits, dass eine hypothetische andere Lösung höchstens 10^10^100 Stellen haben könnte."
          },
          "investigators": {
            "tagline": "Kreisteilungskörper, Vernichtung von Idealklassengruppen und Stickelberger-Relationen.",
            "analogy": "Die diophantische Gleichung x^p - y^q = 1 für Primzahlen p, q. Cassels zeigte p | y und q | x.",
            "rules": [
              "x^a - y^b = 1 mit a, b ≥ 2",
              "Cassels: p | y und q | x",
              "Mihăilescu-Doppelkongruenz",
              "Einzige Lösung: 3² - 2³ = 1"
            ],
            "mystery": "Pillai-Vermutung: Hat |x^a - y^b| = k für jedes feste k nur endlich viele Lösungen?",
            "funFact": "Mihăilescus Beweis nutzte reine algebraische Zahlentheorie anstelle analytischer Methoden."
          },
          "pioneers": {
            "tagline": "Stickelberger-Ideale, Thaines Satz und Lean-4-Formalisierung.",
            "analogy": "Mihăilescu nutzte das Stickelberger-Ideal im Gruppenring ℤ[G] zur Nullifizierung der Klassengruppe.",
            "rules": [
              "Stickelberger-Element θ",
              "Thaines Kreiseinheiten-Satz",
              "In Lean 4 Mathlib formalisiert"
            ],
            "mystery": "Kann KI einen modularen geometrischen Beweis für Catalan finden?",
            "funFact": "Catalan ist eine der wenigen historischen diophantischen Gleichungen, die im 21. Jahrhundert gelöst wurden."
          }
        },
        "history": [
          {
            "year": "1844",
            "author": "Eugène Charles Catalan",
            "note": "Formulates the conjecture in Crelle's Journal."
          },
          {
            "year": "1976",
            "author": "Robert Tijdeman",
            "note": "Uses Baker's method to prove solutions are effectively bounded."
          },
          {
            "year": "2002",
            "author": "Preda Mihăilescu",
            "note": "Delivers complete proof using cyclotomic fields and Stickelberger relations."
          }
        ]
      },
      "fr": {
        "name": "Conjecture de Catalan (Théorème de Mihăilescu)",
        "subtitle": "Les seules puissances parfaites consécutives (8 et 9)",
        "field": "Équations diophantiennes & Théorie algébrique des nombres",
        "statusBadge": "THÉORÈME PROUVÉ",
        "grades": {
          "explorers": {
            "tagline": "Deux carrés ou cubes peuvent-ils être voisins consécutifs sur la droite numérique ?",
            "analogy": "Les puissances comme 4, 8, 9, 16, 25, 27 sont rares. Regardez 8 (2³) et 9 (3²) : ce sont des voisins consécutifs de différence 1 ! En existe-t-il d'autres ?",
            "rules": [
              "Cherchez des puissances parfaites x^a et y^b (exposants ≥ 2).",
              "Testez si leur différence vaut 1.",
              "8 = 2³ et 9 = 3² marchent !",
              "Existe-t-il un autre couple ?"
            ],
            "mystery": "Catalan l'a conjecturé en 1844. Il a fallu 158 ans pour que Preda Mihăilescu prouve en 2002 que c'est la seule solution !",
            "funFact": "Avant la preuve de Mihăilescu, la méthode de Baker montrait que d'autres solutions auraient moins de 10^10^100 chiffres !"
          },
          "investigators": {
            "tagline": "Corps cyclotomiques et annulation du groupe de classes d'idéaux.",
            "analogy": "L'équation diophantienne x^p - y^q = 1 pour p, q premiers.",
            "rules": [
              "x^a - y^b = 1 avec a, b ≥ 2",
              "Théorème de Cassels",
              "Double congruence de Mihăilescu",
              "Solution unique : 3² - 2³ = 1"
            ],
            "mystery": "La conjecture de Pillai généralise à |x^a - y^b| = k avec un nombre fini de solutions.",
            "funFact": "La preuve de Mihăilescu n'utilise pas la méthode analytique de Baker mais la théorie d'Iwasawa et les corps cyclotomiques."
          },
          "pioneers": {
            "tagline": "Idéaux de Stickelberger, théorème de Thaine et vérification Lean 4.",
            "analogy": "Utilisation de l'idéal de Stickelberger dans l'anneau de groupe ℤ[G] pour anéantir le p-groupe de classes.",
            "rules": [
              "Élément de Stickelberger θ",
              "Théorème de Thaine sur les unités cyclotomiques",
              "Formalisé dans Mathlib"
            ],
            "mystery": "L'IA peut-elle découvrir une preuve modulaire de Catalan ?",
            "funFact": "L'un des rares problèmes historiques résolus au 21e siècle."
          }
        },
        "history": [
          {
            "year": "1844",
            "author": "Eugène Charles Catalan",
            "note": "Formulates the conjecture in Crelle's Journal."
          },
          {
            "year": "1976",
            "author": "Robert Tijdeman",
            "note": "Uses Baker's method to prove solutions are effectively bounded."
          },
          {
            "year": "2002",
            "author": "Preda Mihăilescu",
            "note": "Delivers complete proof using cyclotomic fields and Stickelberger relations."
          }
        ]
      },
      "it": {
        "name": "Congettura di Catalan (Teorema di Mihăilescu)",
        "subtitle": "Le uniche potenze perfette consecutive (8 e 9)",
        "field": "Equazioni diofantee & Teoria algebrica dei numeri",
        "statusBadge": "TEOREMA DIMOSTRATO",
        "grades": {
          "explorers": {
            "tagline": "Due quadrati o cubi possono essere numeri consecutivi sulla retta numerica?",
            "analogy": "Potenze come 4, 8, 9, 16, 25, 27 sono gemme. 8 (2³) e 9 (3²) distano solo 1! Ci sono altre coppie simili all'infinito?",
            "rules": [
              "Cerca potenze perfette x^a e y^b.",
              "Verifica se la differenza è 1.",
              "8 = 2³ e 9 = 3² funzionano!",
              "Ne esistono altre?"
            ],
            "mystery": "Catalan lo congetturò nel 1844. Nel 2002 Preda Mihăilescu ha dimostrato che 8 e 9 sono l'unica soluzione!",
            "funFact": "Prima della dimostrazione, la teoria dei logaritmi di Baker limitava le possibili soluzioni astronomiche."
          },
          "investigators": {
            "tagline": "Campi ciclotomici e annullamento dei gruppi di classi ideali.",
            "analogy": "L'equazione x^p - y^q = 1 per primi p, q. Cassels ha dimostrato p | y e q | x.",
            "rules": [
              "x^a - y^b = 1",
              "Teorema di Cassels",
              "Condizione di Mihăilescu",
              "Soluzione unica: 3² - 2³ = 1"
            ],
            "mystery": "La congettura di Pillai generalizza |x^a - y^b| = k con soluzioni finite.",
            "funFact": "La dimostrazione ha usato i moduli di Galois invece dell'analisi pesante."
          },
          "pioneers": {
            "tagline": "Ideali di Stickelberger, teorema di Thaine e verifica formale Lean 4.",
            "analogy": "Uso dell'ideale di Stickelberger per annullare la classe ideale in ℤ[G].",
            "rules": [
              "Elemento di Stickelberger",
              "Teorema delle unità circolari di Thaine",
              "Formalizzato in Mathlib"
            ],
            "mystery": "L'IA può trovare una dimostrazione modulare di Catalan?",
            "funFact": "Uno dei pochi problemi diofantei storici risolti nel XXI secolo."
          }
        },
        "history": [
          {
            "year": "1844",
            "author": "Eugène Charles Catalan",
            "note": "Formulates the conjecture in Crelle's Journal."
          },
          {
            "year": "1976",
            "author": "Robert Tijdeman",
            "note": "Uses Baker's method to prove solutions are effectively bounded."
          },
          {
            "year": "2002",
            "author": "Preda Mihăilescu",
            "note": "Delivers complete proof using cyclotomic fields and Stickelberger relations."
          }
        ]
      },
      "ja": {
        "name": "カタラン予想（ミハイレスクの定理）",
        "subtitle": "連続する唯一の完全累乗数 (8 と 9)",
        "field": "ディオファントス方程式 & 代数的数論",
        "statusBadge": "証明済み定理",
        "grades": {
          "explorers": {
            "tagline": "数直線の上で、平方数や立方数がぴったり隣り合って並ぶことはあるでしょうか？",
            "analogy": "4, 8, 9, 16, 25, 27 などの累乗数。8 (2³) と 9 (3²) は差が 1 しかない隣同士です！宇宙の果てまで探して、他に隣り合う累乗数はあるでしょうか？",
            "rules": [
              "2以上の指数をもつ完全累乗数を探す。",
              "差がちょうど 1 になるか確認する。",
              "8 = 2³ と 9 = 3² は 9 - 8 = 1 で見事に成立！",
              "他に解があるか調べる。"
            ],
            "mystery": "1844年にカタランが予想し、158年後の2002年にプレダ・ミハイレスクが代数的数論を駆使して唯一の解であることを完全証明しました！",
            "funFact": "ミハイレスクの証明の前、ベーカーの対数一次形式論により、未知の解があったとしても桁数は高々 10^10^100 以下と判明していました。"
          },
          "investigators": {
            "tagline": "円分体、イデアル類群の零化、スティッケルバーガー関係式。",
            "analogy": "素数 p, q に対する方程式 x^p - y^q = 1。カッセルスは p が y を割り、q が x を割ることを証明しました。",
            "rules": [
              "方程式: x^a - y^b = 1 (a, b ≥ 2)",
              "カッセルスの定理: p | y かつ q | x",
              "ミハイレスクの二重合同条件",
              "唯一の解: 3² - 2³ = 1"
            ],
            "mystery": "差を広げたピライ予想では、任意の固定された差 k に対して |x^a - y^b| = k の解は有限個しかないと予想されています。",
            "funFact": "ミハイレスクの証明は、解析的近似に頼らず、純粋な代数数論とガロア加群の理論で完結させたことで世界を驚かせました。"
          },
          "pioneers": {
            "tagline": "スティッケルバーガーのイデアル、セインの定理、Lean 4 による形式証明。",
            "analogy": "ガロア群 G = Gal(ℚ(ζ_p)/ℚ) の群環 ℤ[G] におけるスティッケルバーガー・イデアルを駆使してイデアル類群を零化し、矛盾を導きました。",
            "rules": [
              "イデアル類群の零化子とスティッケルバーガー元",
              "セインの円単数定理",
              "Mathlib の NumberTheory.Catalan で形式化完了"
            ],
            "mystery": "モジュラー曲線を用いた別証明をAIが自動発見できるか？",
            "funFact": "21世紀に入ってから完全解決された数少ない歴史的ディオファントス問題の金字塔です。"
          }
        },
        "history": [
          {
            "year": "1844",
            "author": "Eugène Charles Catalan",
            "note": "Formulates the conjecture in Crelle's Journal."
          },
          {
            "year": "1976",
            "author": "Robert Tijdeman",
            "note": "Uses Baker's method to prove solutions are effectively bounded."
          },
          {
            "year": "2002",
            "author": "Preda Mihăilescu",
            "note": "Delivers complete proof using cyclotomic fields and Stickelberger relations."
          }
        ]
      },
      "ko": {
        "name": "카탈랑 추측 (미허일레스쿠 정리)",
        "subtitle": "연속하는 유일한 거듭제곱수 (8과 9)",
        "field": "디오판토스 방정식 & 대수적 정수론",
        "statusBadge": "증명된 정리",
        "grades": {
          "explorers": {
            "tagline": "수직선에서 제곱수나 세제곱수가 서로 바로 이웃해 있을 수 있을까요?",
            "analogy": "4, 8, 9, 16, 25, 27 같은 거듭제곱수 중 8(2³)과 9(3²)은 차이가 1뿐인 이웃입니다! 무한한 우주에서 다른 이웃이 또 있을까요?",
            "rules": [
              "거듭제곱수 x^a와 y^b 찾기 (지수 ≥ 2).",
              "차이가 정확히 1인지 확인.",
              "8 = 2³과 9 = 3²은 9 - 8 = 1로 성립!",
              "다른 쌍이 존재하는지 탐색."
            ],
            "mystery": "1844년 카탈랑이 추측했고, 158년 뒤인 2002년 프레다 미허일레스쿠가 유일한 해임을 최종 증명했습니다!",
            "funFact": "증명 전에는 베이커의 대수 선형 형식 정리로 다른 해가 존재하더라도 자리수가 10^10^100 이하라는 것이 밝혀져 있었습니다."
          },
          "investigators": {
            "tagline": "원분체, 아이디얼 유군의 소멸, 슈티켈베르거 관계식.",
            "analogy": "소수 p, q에 대한 x^p - y^q = 1 방정식. 카셀스가 p | y, q | x 임을 증명했습니다.",
            "rules": [
              "방정식: x^a - y^b = 1 (a, b ≥ 2)",
              "카셀스 정리: p | y 및 q | x",
              "미허일레스쿠 이중합동식",
              "유일한 해: 3² - 2³ = 1"
            ],
            "mystery": "필라이 추측: 임의의 고정된 k에 대해 |x^a - y^b| = k 의 정수해는 유한개인가?",
            "funFact": "미허일레스쿠의 증명은 해석학적 기법 대신 갈루아 가군 이론을 활용하여 수학계를 감탄시켰습니다."
          },
          "pioneers": {
            "tagline": "슈티켈베르거 아이디얼, 테인의 정리, Lean 4 형식 검증.",
            "analogy": "갈루아 군 G의 군환 ℤ[G]에서 슈티켈베르거 아이디얼을 이용해 모순을 이끌어냈습니다.",
            "rules": [
              "슈티켈베르거 원소 θ",
              "테인의 원분 단위원 정리",
              "Mathlib 형식화 완료"
            ],
            "mystery": "모듈러 곡선을 이용한 새로운 기하학적 증명을 AI가 발견할 수 있을까?",
            "funFact": "21세기에 완전히 해결된 몇 안 되는 유서 깊은 디오판토스 난제 중 하나입니다."
          }
        },
        "history": [
          {
            "year": "1844",
            "author": "Eugène Charles Catalan",
            "note": "Formulates the conjecture in Crelle's Journal."
          },
          {
            "year": "1976",
            "author": "Robert Tijdeman",
            "note": "Uses Baker's method to prove solutions are effectively bounded."
          },
          {
            "year": "2002",
            "author": "Preda Mihăilescu",
            "note": "Delivers complete proof using cyclotomic fields and Stickelberger relations."
          }
        ]
      },
      "zh-Hans": {
        "name": "卡塔兰猜想（米哈伊莱斯库定理）",
        "subtitle": "唯一的相邻纯幂数（8 与 9）",
        "field": "丢番图方程 & 代数数论",
        "statusBadge": "已证明定理",
        "grades": {
          "explorers": {
            "tagline": "数轴上有哪两座平方数或立方数城堡是紧挨着的邻居？",
            "analogy": "4、8、9、16、25、27 这些纯幂数极其珍贵。8（2³）和 9（3²）差只有 1！在整个无穷数轴上，还能找到第二对紧挨着的纯幂数吗？",
            "rules": [
              "寻找指数 ≥ 2 的纯幂数 x^a 和 y^b。",
              "检验它们之差是否恰好为 1 (x^a - y^b = 1)。",
              "8 = 2³ 和 9 = 3² 成功相差 1！",
              "继续寻找数轴上是否还有其他解。"
            ],
            "mystery": "欧仁·卡塔兰在1844年提出猜想。历经158年，普雷达·米哈伊莱斯库在2002年运用分圆域定理彻底证明：8和9是全宇宙唯一的相邻纯幂数！",
            "funFact": "在定理获证前，菲尔兹奖得主贝克的对数线性型理论已证明任何潜在的反例位数不会超过 10^10^100 位！"
          },
          "investigators": {
            "tagline": "分圆域代数数论、理想类群零化子与斯蒂克尔伯格定理。",
            "analogy": "对于素数 p, q 的丢番图方程 x^p - y^q = 1，卡塞尔斯证明了 p 整除 y 且 q 整除 x。米哈伊莱斯库将其转化为分圆域 ℚ(ζ_p) 上的理想类群结构。",
            "rules": [
              "方程：x^a - y^b = 1 (a, b ≥ 2)",
              "卡塞尔斯整除定理：p | y 且 q | x",
              "米哈伊莱斯库双重同余条件：p ≡ 1 (mod q²)",
              "唯一正整数解：x=3, a=2, y=2, b=3"
            ],
            "mystery": "皮莱猜想进一步推测：对于任意给定的常数差 k，方程 |x^a - y^b| = k 的正整数解永远是有限的！",
            "funFact": "米哈伊莱斯库的证明彻底绕开了复杂的复分析对数估计，纯粹运用代数数论与伽罗瓦加群结构，震惊了国际数学界！"
          },
          "pioneers": {
            "tagline": "斯蒂克尔伯格理想、塞恩定理与 Lean 4 交互定理证明。",
            "analogy": "米哈伊莱斯库利用伽罗瓦群 G = Gal(ℚ(ζ_p)/ℚ) 的群环 ℤ[G] 中的斯蒂克尔伯格理想，零化了类群的 p-分量，从代数深层导出了尖锐矛盾。",
            "rules": [
              "类群零化子包含斯蒂克尔伯格元 θ",
              "塞恩圆单位定理消除了余项阻碍",
              "已在 Lean 4 Mathlib 库中完成全机器检验形式化"
            ],
            "mystery": "AI 辅助证明系统能否发现卡塔兰定理基于代数模曲线的全新几何化证明？",
            "funFact": "卡塔兰猜想是21世纪初被人类彻底彻底征服的数论古典明珠之一。"
          }
        },
        "history": [
          {
            "year": "1844",
            "author": "Eugène Charles Catalan",
            "note": "在克雷勒数学杂志上提出猜想。"
          },
          {
            "year": "1976",
            "author": "Robert Tijdeman",
            "note": "利用贝克对数线性型证明解必有限且存在上界。"
          },
          {
            "year": "2002",
            "author": "Preda Mihăilescu",
            "note": "运用分圆域与斯蒂克尔伯格理论完成最终证明！"
          }
        ]
      },
      "zh-Hant": {
        "name": "卡塔蘭猜想（米哈伊萊斯庫定理）",
        "subtitle": "唯一的相鄰純冪數（8 與 9）",
        "field": "丟番圖方程 & 代數數論",
        "statusBadge": "已證明定理",
        "grades": {
          "explorers": {
            "tagline": "數軸上有哪兩座平方數或立方數城堡是緊挨著的鄰居？",
            "analogy": "4、8、9、16、25、27 這些純冪數極其珍貴。8（2³）和 9（3²）差只有 1！在整個無窮數軸上，還能找到第二對緊挨著的純冪數嗎？",
            "rules": [
              "尋找指數 ≥ 2 的純冪數 x^a 與 y^b。",
              "檢驗其差是否為 1 (x^a - y^b = 1)。",
              "8 = 2³ 與 9 = 3² 相鄰成功！",
              "檢驗是否還有第二組解。"
            ],
            "mystery": "卡塔蘭於1844年提出猜想。歷經158年，米哈伊萊斯庫於2002年徹底證明：8和9是宇宙中唯一的相鄰純冪數！",
            "funFact": "在定理獲證前，貝克對數線性型理論已證明潛在反例位數不超過 10^10^100 位！"
          },
          "investigators": {
            "tagline": "分圓域代數數論、理想類群零化子與斯蒂克爾伯格定理。",
            "analogy": "卡塞爾斯證明了 p 整除 y 且 q 整除 x。米哈伊萊斯庫將其轉化為分圓域上的結構。",
            "rules": [
              "方程：x^a - y^b = 1",
              "卡塞爾斯整除定理",
              "米哈伊萊斯庫雙重同餘",
              "唯一正整數解：3² - 2³ = 1"
            ],
            "mystery": "皮萊猜想進一步推測：對於任意差 k，|x^a - y^b| = k 的解恆為有限個！",
            "funFact": "米哈伊萊斯庫的證明純粹運用代數數論與伽羅瓦加群結構，震驚了國際數學界！"
          },
          "pioneers": {
            "tagline": "斯蒂克爾伯格理想、塞恩定理與 Lean 4 交互定理證明。",
            "analogy": "米哈伊萊斯庫利用伽羅瓦群環中的斯蒂克爾伯格理想導出了深刻矛盾。",
            "rules": [
              "類群零化子與斯蒂克爾伯格元",
              "塞恩圓單位定理",
              "已在 Lean 4 Mathlib 形式化"
            ],
            "mystery": "AI 輔助系統能否發現卡塔蘭定理全新的模曲線證明？",
            "funFact": "卡塔蘭猜想是21世紀初被人類徹底征服的數論古典明珠之一。"
          }
        },
        "history": [
          {
            "year": "1844",
            "author": "Eugène Charles Catalan",
            "note": "Formulates the conjecture in Crelle's Journal."
          },
          {
            "year": "1976",
            "author": "Robert Tijdeman",
            "note": "Uses Baker's method to prove solutions are effectively bounded."
          },
          {
            "year": "2002",
            "author": "Preda Mihăilescu",
            "note": "Delivers complete proof using cyclotomic fields and Stickelberger relations."
          }
        ]
      }
    }
  },
  {
    "id": "legendre",
    "icon": "🟦",
    "difficulty": "All Ages",
    "domain": "number-theory",
    "category": "number-theory",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Data.Nat.Prime\ndef LegendreConjecture : Prop :=\n  ∀ (n : ℕ), n > 0 → ∃ p : ℕ, Nat.Prime p ∧ n^2 < p ∧ p < (n + 1)^2",
    "locales": {
      "en": {
        "name": "Legendre's Conjecture",
        "subtitle": "A Prime Trapped Between Consecutive Squares",
        "field": "Prime Number Distribution",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can you always find a prime diamond between two square gardens?",
            "analogy": "Imagine square gardens of size n×n and (n+1)×(n+1). As squares grow (1, 4, 9, 16, 25, 36, 49...), does at least one prime number always sprout between them?",
            "rules": [
              "Pick any number n (like 3).",
              "Square it: 3² = 9.",
              "Square the next number: 4² = 16.",
              "Look between 9 and 16: you find primes 11 and 13!"
            ],
            "mystery": "Tested past n = 4 × 10^18 without a single gap failing. Yet no one has proved it holds for all infinity!",
            "funFact": "Between 100² = 10,000 and 101² = 10,201, there are actually 23 different primes!"
          },
          "investigators": {
            "tagline": "Prime gap bounds and sub-linear increments.",
            "analogy": "Legendre's conjecture states that the prime gap g_n = p_{n+1} - p_n is always smaller than 2√p_n. The best known unconditional bound is much larger.",
            "rules": [
              "Interval length: (n+1)² - n² = 2n + 1.",
              "Baker-Harman-Pintz (2001): Primes guaranteed in [x, x + x^0.525].",
              "Requires exponent 0.500 to prove Legendre."
            ],
            "mystery": "Can the Riemann Hypothesis prove Legendre? Even the Generalized Riemann Hypothesis only gives gap O(√x log x), which is slightly too large!",
            "funFact": "One of Landau's four famous unaddressed problems from the 1912 ICM."
          },
          "pioneers": {
            "tagline": "Sieve theory, zero density theorems, and Lean 4 formalization.",
            "analogy": "A proof would bridge the barrier between short interval character sums and the non-vanishing of Dirichlet L-functions.",
            "rules": [
              "Landau's 4 Problems in Lean 4.",
              "Parity problem in sieve theory.",
              "Ingrams & Montgomery exponential sum estimates."
            ],
            "mystery": "Will AI-driven heuristic sieve optimization achieve the 0.500 critical exponent?",
            "funFact": "Legendre's conjecture implies that the gap between consecutive primes never exceeds 2√p."
          }
        },
        "history": [
          {
            "year": "1798",
            "author": "Adrien-Marie Legendre",
            "note": "Proposes the conjecture in his Essai sur la théorie des nombres."
          },
          {
            "year": "1912",
            "author": "Edmund Landau",
            "note": "Lists it as one of the 4 iconic unapproachable prime problems."
          },
          {
            "year": "2001",
            "author": "Baker, Harman & Pintz",
            "note": "Prove primes exist in intervals of length x^0.525."
          },
          {
            "year": "2024–2026",
            "author": "AI Automated Sieve Research",
            "note": "Deep search verifies absence of gaps beyond 4 × 10^18."
          }
        ]
      },
      "de": {
        "name": "Legendre-Vermutung",
        "subtitle": "Eine Primzahl zwischen aufeinanderfolgenden Quadraten",
        "field": "Primzahlverteilung",
        "statusBadge": "OFFENES RÄTSEL",
        "grades": {
          "explorers": {
            "tagline": "Can you always find a prime diamond between two square gardens?",
            "analogy": "Imagine square gardens of size n×n and (n+1)×(n+1). As squares grow (1, 4, 9, 16, 25, 36, 49...), does at least one prime number always sprout between them?",
            "rules": [
              "Pick any number n (like 3).",
              "Square it: 3² = 9.",
              "Square the next number: 4² = 16.",
              "Look between 9 and 16: you find primes 11 and 13!"
            ],
            "mystery": "Tested past n = 4 × 10^18 without a single gap failing. Yet no one has proved it holds for all infinity!",
            "funFact": "Between 100² = 10,000 and 101² = 10,201, there are actually 23 different primes!"
          },
          "investigators": {
            "tagline": "Prime gap bounds and sub-linear increments.",
            "analogy": "Legendre's conjecture states that the prime gap g_n = p_{n+1} - p_n is always smaller than 2√p_n. The best known unconditional bound is much larger.",
            "rules": [
              "Interval length: (n+1)² - n² = 2n + 1.",
              "Baker-Harman-Pintz (2001): Primes guaranteed in [x, x + x^0.525].",
              "Requires exponent 0.500 to prove Legendre."
            ],
            "mystery": "Can the Riemann Hypothesis prove Legendre? Even the Generalized Riemann Hypothesis only gives gap O(√x log x), which is slightly too large!",
            "funFact": "One of Landau's four famous unaddressed problems from the 1912 ICM."
          },
          "pioneers": {
            "tagline": "Sieve theory, zero density theorems, and Lean 4 formalization.",
            "analogy": "A proof would bridge the barrier between short interval character sums and the non-vanishing of Dirichlet L-functions.",
            "rules": [
              "Landau's 4 Problems in Lean 4.",
              "Parity problem in sieve theory.",
              "Ingrams & Montgomery exponential sum estimates."
            ],
            "mystery": "Will AI-driven heuristic sieve optimization achieve the 0.500 critical exponent?",
            "funFact": "Legendre's conjecture implies that the gap between consecutive primes never exceeds 2√p."
          }
        },
        "history": [
          {
            "year": "1798",
            "author": "Adrien-Marie Legendre",
            "note": "Proposes the conjecture in his Essai sur la théorie des nombres."
          },
          {
            "year": "1912",
            "author": "Edmund Landau",
            "note": "Lists it as one of the 4 iconic unapproachable prime problems."
          },
          {
            "year": "2001",
            "author": "Baker, Harman & Pintz",
            "note": "Prove primes exist in intervals of length x^0.525."
          },
          {
            "year": "2024–2026",
            "author": "AI Automated Sieve Research",
            "note": "Deep search verifies absence of gaps beyond 4 × 10^18."
          }
        ]
      },
      "fr": {
        "name": "Conjecture de Legendre",
        "subtitle": "Un nombre premier entre carrés consécutifs",
        "field": "Distribution des nombres premiers",
        "statusBadge": "MYSTÈRE OUVERT",
        "grades": {
          "explorers": {
            "tagline": "Can you always find a prime diamond between two square gardens?",
            "analogy": "Imagine square gardens of size n×n and (n+1)×(n+1). As squares grow (1, 4, 9, 16, 25, 36, 49...), does at least one prime number always sprout between them?",
            "rules": [
              "Pick any number n (like 3).",
              "Square it: 3² = 9.",
              "Square the next number: 4² = 16.",
              "Look between 9 and 16: you find primes 11 and 13!"
            ],
            "mystery": "Tested past n = 4 × 10^18 without a single gap failing. Yet no one has proved it holds for all infinity!",
            "funFact": "Between 100² = 10,000 and 101² = 10,201, there are actually 23 different primes!"
          },
          "investigators": {
            "tagline": "Prime gap bounds and sub-linear increments.",
            "analogy": "Legendre's conjecture states that the prime gap g_n = p_{n+1} - p_n is always smaller than 2√p_n. The best known unconditional bound is much larger.",
            "rules": [
              "Interval length: (n+1)² - n² = 2n + 1.",
              "Baker-Harman-Pintz (2001): Primes guaranteed in [x, x + x^0.525].",
              "Requires exponent 0.500 to prove Legendre."
            ],
            "mystery": "Can the Riemann Hypothesis prove Legendre? Even the Generalized Riemann Hypothesis only gives gap O(√x log x), which is slightly too large!",
            "funFact": "One of Landau's four famous unaddressed problems from the 1912 ICM."
          },
          "pioneers": {
            "tagline": "Sieve theory, zero density theorems, and Lean 4 formalization.",
            "analogy": "A proof would bridge the barrier between short interval character sums and the non-vanishing of Dirichlet L-functions.",
            "rules": [
              "Landau's 4 Problems in Lean 4.",
              "Parity problem in sieve theory.",
              "Ingrams & Montgomery exponential sum estimates."
            ],
            "mystery": "Will AI-driven heuristic sieve optimization achieve the 0.500 critical exponent?",
            "funFact": "Legendre's conjecture implies that the gap between consecutive primes never exceeds 2√p."
          }
        },
        "history": [
          {
            "year": "1798",
            "author": "Adrien-Marie Legendre",
            "note": "Proposes the conjecture in his Essai sur la théorie des nombres."
          },
          {
            "year": "1912",
            "author": "Edmund Landau",
            "note": "Lists it as one of the 4 iconic unapproachable prime problems."
          },
          {
            "year": "2001",
            "author": "Baker, Harman & Pintz",
            "note": "Prove primes exist in intervals of length x^0.525."
          },
          {
            "year": "2024–2026",
            "author": "AI Automated Sieve Research",
            "note": "Deep search verifies absence of gaps beyond 4 × 10^18."
          }
        ]
      },
      "it": {
        "name": "Congettura di Legendre",
        "subtitle": "Un numero primo tra quadrati consecutivi",
        "field": "Distribuzione dei numeri primi",
        "statusBadge": "MISTERO APERTO",
        "grades": {
          "explorers": {
            "tagline": "Can you always find a prime diamond between two square gardens?",
            "analogy": "Imagine square gardens of size n×n and (n+1)×(n+1). As squares grow (1, 4, 9, 16, 25, 36, 49...), does at least one prime number always sprout between them?",
            "rules": [
              "Pick any number n (like 3).",
              "Square it: 3² = 9.",
              "Square the next number: 4² = 16.",
              "Look between 9 and 16: you find primes 11 and 13!"
            ],
            "mystery": "Tested past n = 4 × 10^18 without a single gap failing. Yet no one has proved it holds for all infinity!",
            "funFact": "Between 100² = 10,000 and 101² = 10,201, there are actually 23 different primes!"
          },
          "investigators": {
            "tagline": "Prime gap bounds and sub-linear increments.",
            "analogy": "Legendre's conjecture states that the prime gap g_n = p_{n+1} - p_n is always smaller than 2√p_n. The best known unconditional bound is much larger.",
            "rules": [
              "Interval length: (n+1)² - n² = 2n + 1.",
              "Baker-Harman-Pintz (2001): Primes guaranteed in [x, x + x^0.525].",
              "Requires exponent 0.500 to prove Legendre."
            ],
            "mystery": "Can the Riemann Hypothesis prove Legendre? Even the Generalized Riemann Hypothesis only gives gap O(√x log x), which is slightly too large!",
            "funFact": "One of Landau's four famous unaddressed problems from the 1912 ICM."
          },
          "pioneers": {
            "tagline": "Sieve theory, zero density theorems, and Lean 4 formalization.",
            "analogy": "A proof would bridge the barrier between short interval character sums and the non-vanishing of Dirichlet L-functions.",
            "rules": [
              "Landau's 4 Problems in Lean 4.",
              "Parity problem in sieve theory.",
              "Ingrams & Montgomery exponential sum estimates."
            ],
            "mystery": "Will AI-driven heuristic sieve optimization achieve the 0.500 critical exponent?",
            "funFact": "Legendre's conjecture implies that the gap between consecutive primes never exceeds 2√p."
          }
        },
        "history": [
          {
            "year": "1798",
            "author": "Adrien-Marie Legendre",
            "note": "Proposes the conjecture in his Essai sur la théorie des nombres."
          },
          {
            "year": "1912",
            "author": "Edmund Landau",
            "note": "Lists it as one of the 4 iconic unapproachable prime problems."
          },
          {
            "year": "2001",
            "author": "Baker, Harman & Pintz",
            "note": "Prove primes exist in intervals of length x^0.525."
          },
          {
            "year": "2024–2026",
            "author": "AI Automated Sieve Research",
            "note": "Deep search verifies absence of gaps beyond 4 × 10^18."
          }
        ]
      },
      "ja": {
        "name": "ルジャンドル予想",
        "subtitle": "連続する平方数の間に潜む素数",
        "field": "素数分布論",
        "statusBadge": "未解決問題",
        "grades": {
          "explorers": {
            "tagline": "Can you always find a prime diamond between two square gardens?",
            "analogy": "Imagine square gardens of size n×n and (n+1)×(n+1). As squares grow (1, 4, 9, 16, 25, 36, 49...), does at least one prime number always sprout between them?",
            "rules": [
              "Pick any number n (like 3).",
              "Square it: 3² = 9.",
              "Square the next number: 4² = 16.",
              "Look between 9 and 16: you find primes 11 and 13!"
            ],
            "mystery": "Tested past n = 4 × 10^18 without a single gap failing. Yet no one has proved it holds for all infinity!",
            "funFact": "Between 100² = 10,000 and 101² = 10,201, there are actually 23 different primes!"
          },
          "investigators": {
            "tagline": "Prime gap bounds and sub-linear increments.",
            "analogy": "Legendre's conjecture states that the prime gap g_n = p_{n+1} - p_n is always smaller than 2√p_n. The best known unconditional bound is much larger.",
            "rules": [
              "Interval length: (n+1)² - n² = 2n + 1.",
              "Baker-Harman-Pintz (2001): Primes guaranteed in [x, x + x^0.525].",
              "Requires exponent 0.500 to prove Legendre."
            ],
            "mystery": "Can the Riemann Hypothesis prove Legendre? Even the Generalized Riemann Hypothesis only gives gap O(√x log x), which is slightly too large!",
            "funFact": "One of Landau's four famous unaddressed problems from the 1912 ICM."
          },
          "pioneers": {
            "tagline": "Sieve theory, zero density theorems, and Lean 4 formalization.",
            "analogy": "A proof would bridge the barrier between short interval character sums and the non-vanishing of Dirichlet L-functions.",
            "rules": [
              "Landau's 4 Problems in Lean 4.",
              "Parity problem in sieve theory.",
              "Ingrams & Montgomery exponential sum estimates."
            ],
            "mystery": "Will AI-driven heuristic sieve optimization achieve the 0.500 critical exponent?",
            "funFact": "Legendre's conjecture implies that the gap between consecutive primes never exceeds 2√p."
          }
        },
        "history": [
          {
            "year": "1798",
            "author": "Adrien-Marie Legendre",
            "note": "Proposes the conjecture in his Essai sur la théorie des nombres."
          },
          {
            "year": "1912",
            "author": "Edmund Landau",
            "note": "Lists it as one of the 4 iconic unapproachable prime problems."
          },
          {
            "year": "2001",
            "author": "Baker, Harman & Pintz",
            "note": "Prove primes exist in intervals of length x^0.525."
          },
          {
            "year": "2024–2026",
            "author": "AI Automated Sieve Research",
            "note": "Deep search verifies absence of gaps beyond 4 × 10^18."
          }
        ]
      },
      "ko": {
        "name": "르장드르 추측",
        "subtitle": "연속하는 두 제곱수 사이의 소수",
        "field": "소수 분포론",
        "statusBadge": "미해결 난제",
        "grades": {
          "explorers": {
            "tagline": "Can you always find a prime diamond between two square gardens?",
            "analogy": "Imagine square gardens of size n×n and (n+1)×(n+1). As squares grow (1, 4, 9, 16, 25, 36, 49...), does at least one prime number always sprout between them?",
            "rules": [
              "Pick any number n (like 3).",
              "Square it: 3² = 9.",
              "Square the next number: 4² = 16.",
              "Look between 9 and 16: you find primes 11 and 13!"
            ],
            "mystery": "Tested past n = 4 × 10^18 without a single gap failing. Yet no one has proved it holds for all infinity!",
            "funFact": "Between 100² = 10,000 and 101² = 10,201, there are actually 23 different primes!"
          },
          "investigators": {
            "tagline": "Prime gap bounds and sub-linear increments.",
            "analogy": "Legendre's conjecture states that the prime gap g_n = p_{n+1} - p_n is always smaller than 2√p_n. The best known unconditional bound is much larger.",
            "rules": [
              "Interval length: (n+1)² - n² = 2n + 1.",
              "Baker-Harman-Pintz (2001): Primes guaranteed in [x, x + x^0.525].",
              "Requires exponent 0.500 to prove Legendre."
            ],
            "mystery": "Can the Riemann Hypothesis prove Legendre? Even the Generalized Riemann Hypothesis only gives gap O(√x log x), which is slightly too large!",
            "funFact": "One of Landau's four famous unaddressed problems from the 1912 ICM."
          },
          "pioneers": {
            "tagline": "Sieve theory, zero density theorems, and Lean 4 formalization.",
            "analogy": "A proof would bridge the barrier between short interval character sums and the non-vanishing of Dirichlet L-functions.",
            "rules": [
              "Landau's 4 Problems in Lean 4.",
              "Parity problem in sieve theory.",
              "Ingrams & Montgomery exponential sum estimates."
            ],
            "mystery": "Will AI-driven heuristic sieve optimization achieve the 0.500 critical exponent?",
            "funFact": "Legendre's conjecture implies that the gap between consecutive primes never exceeds 2√p."
          }
        },
        "history": [
          {
            "year": "1798",
            "author": "Adrien-Marie Legendre",
            "note": "Proposes the conjecture in his Essai sur la théorie des nombres."
          },
          {
            "year": "1912",
            "author": "Edmund Landau",
            "note": "Lists it as one of the 4 iconic unapproachable prime problems."
          },
          {
            "year": "2001",
            "author": "Baker, Harman & Pintz",
            "note": "Prove primes exist in intervals of length x^0.525."
          },
          {
            "year": "2024–2026",
            "author": "AI Automated Sieve Research",
            "note": "Deep search verifies absence of gaps beyond 4 × 10^18."
          }
        ]
      },
      "zh-Hans": {
        "name": "勒让德猜想",
        "subtitle": "相邻完全平方数之间必有素数",
        "field": "素数分布理论",
        "statusBadge": "未解之谜",
        "grades": {
          "explorers": {
            "tagline": "在两块相邻的正方形方阵之间，是否永远能找到一颗素数钻石？",
            "analogy": "想象正方形花坛：1, 4, 9, 16, 25, 36, 49... 勒让德猜想断言：任意两个相邻平方数之间，必定能找到至少一个素数！",
            "rules": [
              "选择任意正整数 n（例如 3）。",
              "计算当前平方：3² = 9。",
              "计算下一个数平方：4² = 16。",
              "在 9 和 16 之间，找到了素数 11 和 13！"
            ],
            "mystery": "计算机已验证至 4 × 10^18，从未出现哪怕一次落空，但依然无人能证明它对所有无穷大数成立！",
            "funFact": "在 100² = 10000 和 101² = 10201 之间，实际上藏着整整 23 个素数！"
          },
          "investigators": {
            "tagline": "素数间隙界限与次线性增长。",
            "analogy": "勒让德猜想等价于最大素数间隙 g_n < 2√p_n。而目前人类无条件证明的最佳界仅约为 p^(0.525)。",
            "rules": [
              "区间长度：(n+1)² - n² = 2n + 1。",
              "Baker-Harman-Pintz (2001) 证明了 [x, x + x^0.525] 必定包含素数。",
              "要证明勒让德猜想，指数必须降到 0.500！"
            ],
            "mystery": "即便黎曼猜想成立，能给出的间隙上界也是 O(√x log x)，比 2√x 稍微大了一点点！",
            "funFact": "这是1912年国际数学家大会上朗道提出的四大著名数论难题之一。"
          },
          "pioneers": {
            "tagline": "筛法理论、零点密度定理与 Lean 4 形式化。",
            "analogy": "解决勒让德猜想将彻底打破短区间特征和与狄利克雷L函数非零性之间的技术壁垒。",
            "rules": [
              "Lean 4 形式化朗道数论难题体系。",
              "筛法理论中的宇称障碍 (Parity Problem)。",
              "指数和估计与短区间素数定理。"
            ],
            "mystery": "AI 驱动的自动化筛法优化能否将素数区间临界指数降至 0.500？",
            "funFact": "勒让德猜想若成立，意味着相邻素数之间的间隙永远不可能超过 2√p。"
          }
        },
        "history": [
          {
            "year": "1798",
            "author": "勒让德",
            "note": "在《数论论述》中首次正式提出该猜想。"
          },
          {
            "year": "1912",
            "author": "爱德蒙·朗道",
            "note": "在国际数学家大会将其列为四大未解难题之一。"
          },
          {
            "year": "2001",
            "author": "贝克、哈曼与品茨",
            "note": "证明在长度为 x^0.525 的短区间内必定存在素数。"
          },
          {
            "year": "2024–2026",
            "author": "AI 自动化筛法探索",
            "note": "大规模自动验证至 4 × 10^18，未发现任何反例。"
          }
        ]
      },
      "zh-Hant": {
        "name": "勒讓德猜想",
        "subtitle": "相鄰完全平方數之間必有素數",
        "field": "素數分佈理論",
        "statusBadge": "未解之謎",
        "grades": {
          "explorers": {
            "tagline": "Can you always find a prime diamond between two square gardens?",
            "analogy": "Imagine square gardens of size n×n and (n+1)×(n+1). As squares grow (1, 4, 9, 16, 25, 36, 49...), does at least one prime number always sprout between them?",
            "rules": [
              "Pick any number n (like 3).",
              "Square it: 3² = 9.",
              "Square the next number: 4² = 16.",
              "Look between 9 and 16: you find primes 11 and 13!"
            ],
            "mystery": "Tested past n = 4 × 10^18 without a single gap failing. Yet no one has proved it holds for all infinity!",
            "funFact": "Between 100² = 10,000 and 101² = 10,201, there are actually 23 different primes!"
          },
          "investigators": {
            "tagline": "Prime gap bounds and sub-linear increments.",
            "analogy": "Legendre's conjecture states that the prime gap g_n = p_{n+1} - p_n is always smaller than 2√p_n. The best known unconditional bound is much larger.",
            "rules": [
              "Interval length: (n+1)² - n² = 2n + 1.",
              "Baker-Harman-Pintz (2001): Primes guaranteed in [x, x + x^0.525].",
              "Requires exponent 0.500 to prove Legendre."
            ],
            "mystery": "Can the Riemann Hypothesis prove Legendre? Even the Generalized Riemann Hypothesis only gives gap O(√x log x), which is slightly too large!",
            "funFact": "One of Landau's four famous unaddressed problems from the 1912 ICM."
          },
          "pioneers": {
            "tagline": "Sieve theory, zero density theorems, and Lean 4 formalization.",
            "analogy": "A proof would bridge the barrier between short interval character sums and the non-vanishing of Dirichlet L-functions.",
            "rules": [
              "Landau's 4 Problems in Lean 4.",
              "Parity problem in sieve theory.",
              "Ingrams & Montgomery exponential sum estimates."
            ],
            "mystery": "Will AI-driven heuristic sieve optimization achieve the 0.500 critical exponent?",
            "funFact": "Legendre's conjecture implies that the gap between consecutive primes never exceeds 2√p."
          }
        },
        "history": [
          {
            "year": "1798",
            "author": "Adrien-Marie Legendre",
            "note": "Proposes the conjecture in his Essai sur la théorie des nombres."
          },
          {
            "year": "1912",
            "author": "Edmund Landau",
            "note": "Lists it as one of the 4 iconic unapproachable prime problems."
          },
          {
            "year": "2001",
            "author": "Baker, Harman & Pintz",
            "note": "Prove primes exist in intervals of length x^0.525."
          },
          {
            "year": "2024–2026",
            "author": "AI Automated Sieve Research",
            "note": "Deep search verifies absence of gaps beyond 4 × 10^18."
          }
        ]
      }
    }
  },
  {
    "id": "polignac",
    "icon": "📏",
    "difficulty": "All Ages",
    "domain": "number-theory",
    "category": "number-theory",
    "isMillennium": false,
    "isAIFrontier": true,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Data.Nat.Prime\ndef PolignacConjecture (k : ℕ) : Prop :=\n  k > 0 → Set.Infinite {p : ℕ | Nat.Prime p ∧ Nat.Prime (p + 2 * k)}",
    "locales": {
      "en": {
        "name": "Polignac's Conjecture",
        "subtitle": "Infinitely Many Prime Pairs with Any Even Gap 2k",
        "field": "Additive Prime Number Theory",
        "statusBadge": "FRONTIER PROGRESS",
        "grades": {
          "explorers": {
            "tagline": "Do primes love making pairs of every possible even distance?",
            "analogy": "Twin primes have gap 2 (3 & 5). Cousin primes have gap 4 (7 & 11). Sexy primes have gap 6 (5 & 11). Polignac guessed that for ANY even number (2, 4, 6, 8, 10...), there are infinitely many prime pairs with that exact gap!",
            "rules": [
              "Choose any even gap: 2, 4, 6, 8...",
              "Look for primes separated by that gap.",
              "Gap 6: (5, 11), (7, 13), (11, 17), (13, 19)...",
              "Will they continue forever?"
            ],
            "mystery": "Twin prime conjecture is just the baby step k=1 of Polignac! Proving Polignac solves twin primes and all other gaps at once.",
            "funFact": "Gap 6 is the most popular prime gap under 1,000,000 because 6 = 2 × 3 is a multiple of the first two primes!"
          },
          "investigators": {
            "tagline": "Bounded gaps between primes: Zhang, Maynard, and Tao.",
            "analogy": "In 2013, Yitang Zhang made history by proving there exists some even gap N < 70,000,000 with infinitely many pairs. Maynard and Tao reduced this bound to 246.",
            "rules": [
              "Zhang (2013): ∃ N ≤ 70,000,000 with infinitely many pairs.",
              "Polymath8b (2014): Reduced bound to N ≤ 246.",
              "Assuming Elliott-Halberstam conjecture: Bound reduces to 6 or 12."
            ],
            "mystery": "Can we bridge the final gap from 246 down to 2, 4, and all individual even integers?",
            "funFact": "Alphonse de Polignac proposed this magnificent conjecture in 1849."
          },
          "pioneers": {
            "tagline": "GPY sieve, Maynard-Tao multidimensional weights, and Selberg sieve parity.",
            "analogy": "The multidimensional sieve weights construct positive probabilities for tuples of primes.",
            "rules": [
              "Maynard weights: F(t_1, ..., t_k).",
              "Bombieri-Vinogradov theorem on prime distributions.",
              "Formalized in Lean 4 prime gap theories."
            ],
            "mystery": "AI search algorithms are exploring higher-dimensional variational test functions to squeeze the bound below 246.",
            "funFact": "Polignac's conjecture provides a unified framework for the infinitude of all prime gaps."
          }
        },
        "history": [
          {
            "year": "1849",
            "author": "Alphonse de Polignac",
            "note": "States the general prime gap conjecture."
          },
          {
            "year": "2013",
            "author": "Yitang Zhang",
            "note": "Proves bounded gaps between primes (< 70 million)."
          },
          {
            "year": "2014",
            "author": "James Maynard & Terence Tao",
            "note": "Independent multidimensional sieve reduces bound to 246."
          }
        ]
      },
      "de": {
        "name": "Polignac's Conjecture",
        "subtitle": "Infinitely Many Prime Pairs with Any Even Gap 2k",
        "field": "Additive Prime Number Theory",
        "statusBadge": "FRONTIER PROGRESS",
        "grades": {
          "explorers": {
            "tagline": "Do primes love making pairs of every possible even distance?",
            "analogy": "Twin primes have gap 2 (3 & 5). Cousin primes have gap 4 (7 & 11). Sexy primes have gap 6 (5 & 11). Polignac guessed that for ANY even number (2, 4, 6, 8, 10...), there are infinitely many prime pairs with that exact gap!",
            "rules": [
              "Choose any even gap: 2, 4, 6, 8...",
              "Look for primes separated by that gap.",
              "Gap 6: (5, 11), (7, 13), (11, 17), (13, 19)...",
              "Will they continue forever?"
            ],
            "mystery": "Twin prime conjecture is just the baby step k=1 of Polignac! Proving Polignac solves twin primes and all other gaps at once.",
            "funFact": "Gap 6 is the most popular prime gap under 1,000,000 because 6 = 2 × 3 is a multiple of the first two primes!"
          },
          "investigators": {
            "tagline": "Bounded gaps between primes: Zhang, Maynard, and Tao.",
            "analogy": "In 2013, Yitang Zhang made history by proving there exists some even gap N < 70,000,000 with infinitely many pairs. Maynard and Tao reduced this bound to 246.",
            "rules": [
              "Zhang (2013): ∃ N ≤ 70,000,000 with infinitely many pairs.",
              "Polymath8b (2014): Reduced bound to N ≤ 246.",
              "Assuming Elliott-Halberstam conjecture: Bound reduces to 6 or 12."
            ],
            "mystery": "Can we bridge the final gap from 246 down to 2, 4, and all individual even integers?",
            "funFact": "Alphonse de Polignac proposed this magnificent conjecture in 1849."
          },
          "pioneers": {
            "tagline": "GPY sieve, Maynard-Tao multidimensional weights, and Selberg sieve parity.",
            "analogy": "The multidimensional sieve weights construct positive probabilities for tuples of primes.",
            "rules": [
              "Maynard weights: F(t_1, ..., t_k).",
              "Bombieri-Vinogradov theorem on prime distributions.",
              "Formalized in Lean 4 prime gap theories."
            ],
            "mystery": "AI search algorithms are exploring higher-dimensional variational test functions to squeeze the bound below 246.",
            "funFact": "Polignac's conjecture provides a unified framework for the infinitude of all prime gaps."
          }
        },
        "history": [
          {
            "year": "1849",
            "author": "Alphonse de Polignac",
            "note": "States the general prime gap conjecture."
          },
          {
            "year": "2013",
            "author": "Yitang Zhang",
            "note": "Proves bounded gaps between primes (< 70 million)."
          },
          {
            "year": "2014",
            "author": "James Maynard & Terence Tao",
            "note": "Independent multidimensional sieve reduces bound to 246."
          }
        ]
      },
      "fr": {
        "name": "Polignac's Conjecture",
        "subtitle": "Infinitely Many Prime Pairs with Any Even Gap 2k",
        "field": "Additive Prime Number Theory",
        "statusBadge": "FRONTIER PROGRESS",
        "grades": {
          "explorers": {
            "tagline": "Do primes love making pairs of every possible even distance?",
            "analogy": "Twin primes have gap 2 (3 & 5). Cousin primes have gap 4 (7 & 11). Sexy primes have gap 6 (5 & 11). Polignac guessed that for ANY even number (2, 4, 6, 8, 10...), there are infinitely many prime pairs with that exact gap!",
            "rules": [
              "Choose any even gap: 2, 4, 6, 8...",
              "Look for primes separated by that gap.",
              "Gap 6: (5, 11), (7, 13), (11, 17), (13, 19)...",
              "Will they continue forever?"
            ],
            "mystery": "Twin prime conjecture is just the baby step k=1 of Polignac! Proving Polignac solves twin primes and all other gaps at once.",
            "funFact": "Gap 6 is the most popular prime gap under 1,000,000 because 6 = 2 × 3 is a multiple of the first two primes!"
          },
          "investigators": {
            "tagline": "Bounded gaps between primes: Zhang, Maynard, and Tao.",
            "analogy": "In 2013, Yitang Zhang made history by proving there exists some even gap N < 70,000,000 with infinitely many pairs. Maynard and Tao reduced this bound to 246.",
            "rules": [
              "Zhang (2013): ∃ N ≤ 70,000,000 with infinitely many pairs.",
              "Polymath8b (2014): Reduced bound to N ≤ 246.",
              "Assuming Elliott-Halberstam conjecture: Bound reduces to 6 or 12."
            ],
            "mystery": "Can we bridge the final gap from 246 down to 2, 4, and all individual even integers?",
            "funFact": "Alphonse de Polignac proposed this magnificent conjecture in 1849."
          },
          "pioneers": {
            "tagline": "GPY sieve, Maynard-Tao multidimensional weights, and Selberg sieve parity.",
            "analogy": "The multidimensional sieve weights construct positive probabilities for tuples of primes.",
            "rules": [
              "Maynard weights: F(t_1, ..., t_k).",
              "Bombieri-Vinogradov theorem on prime distributions.",
              "Formalized in Lean 4 prime gap theories."
            ],
            "mystery": "AI search algorithms are exploring higher-dimensional variational test functions to squeeze the bound below 246.",
            "funFact": "Polignac's conjecture provides a unified framework for the infinitude of all prime gaps."
          }
        },
        "history": [
          {
            "year": "1849",
            "author": "Alphonse de Polignac",
            "note": "States the general prime gap conjecture."
          },
          {
            "year": "2013",
            "author": "Yitang Zhang",
            "note": "Proves bounded gaps between primes (< 70 million)."
          },
          {
            "year": "2014",
            "author": "James Maynard & Terence Tao",
            "note": "Independent multidimensional sieve reduces bound to 246."
          }
        ]
      },
      "it": {
        "name": "Polignac's Conjecture",
        "subtitle": "Infinitely Many Prime Pairs with Any Even Gap 2k",
        "field": "Additive Prime Number Theory",
        "statusBadge": "FRONTIER PROGRESS",
        "grades": {
          "explorers": {
            "tagline": "Do primes love making pairs of every possible even distance?",
            "analogy": "Twin primes have gap 2 (3 & 5). Cousin primes have gap 4 (7 & 11). Sexy primes have gap 6 (5 & 11). Polignac guessed that for ANY even number (2, 4, 6, 8, 10...), there are infinitely many prime pairs with that exact gap!",
            "rules": [
              "Choose any even gap: 2, 4, 6, 8...",
              "Look for primes separated by that gap.",
              "Gap 6: (5, 11), (7, 13), (11, 17), (13, 19)...",
              "Will they continue forever?"
            ],
            "mystery": "Twin prime conjecture is just the baby step k=1 of Polignac! Proving Polignac solves twin primes and all other gaps at once.",
            "funFact": "Gap 6 is the most popular prime gap under 1,000,000 because 6 = 2 × 3 is a multiple of the first two primes!"
          },
          "investigators": {
            "tagline": "Bounded gaps between primes: Zhang, Maynard, and Tao.",
            "analogy": "In 2013, Yitang Zhang made history by proving there exists some even gap N < 70,000,000 with infinitely many pairs. Maynard and Tao reduced this bound to 246.",
            "rules": [
              "Zhang (2013): ∃ N ≤ 70,000,000 with infinitely many pairs.",
              "Polymath8b (2014): Reduced bound to N ≤ 246.",
              "Assuming Elliott-Halberstam conjecture: Bound reduces to 6 or 12."
            ],
            "mystery": "Can we bridge the final gap from 246 down to 2, 4, and all individual even integers?",
            "funFact": "Alphonse de Polignac proposed this magnificent conjecture in 1849."
          },
          "pioneers": {
            "tagline": "GPY sieve, Maynard-Tao multidimensional weights, and Selberg sieve parity.",
            "analogy": "The multidimensional sieve weights construct positive probabilities for tuples of primes.",
            "rules": [
              "Maynard weights: F(t_1, ..., t_k).",
              "Bombieri-Vinogradov theorem on prime distributions.",
              "Formalized in Lean 4 prime gap theories."
            ],
            "mystery": "AI search algorithms are exploring higher-dimensional variational test functions to squeeze the bound below 246.",
            "funFact": "Polignac's conjecture provides a unified framework for the infinitude of all prime gaps."
          }
        },
        "history": [
          {
            "year": "1849",
            "author": "Alphonse de Polignac",
            "note": "States the general prime gap conjecture."
          },
          {
            "year": "2013",
            "author": "Yitang Zhang",
            "note": "Proves bounded gaps between primes (< 70 million)."
          },
          {
            "year": "2014",
            "author": "James Maynard & Terence Tao",
            "note": "Independent multidimensional sieve reduces bound to 246."
          }
        ]
      },
      "ja": {
        "name": "Polignac's Conjecture",
        "subtitle": "Infinitely Many Prime Pairs with Any Even Gap 2k",
        "field": "Additive Prime Number Theory",
        "statusBadge": "FRONTIER PROGRESS",
        "grades": {
          "explorers": {
            "tagline": "Do primes love making pairs of every possible even distance?",
            "analogy": "Twin primes have gap 2 (3 & 5). Cousin primes have gap 4 (7 & 11). Sexy primes have gap 6 (5 & 11). Polignac guessed that for ANY even number (2, 4, 6, 8, 10...), there are infinitely many prime pairs with that exact gap!",
            "rules": [
              "Choose any even gap: 2, 4, 6, 8...",
              "Look for primes separated by that gap.",
              "Gap 6: (5, 11), (7, 13), (11, 17), (13, 19)...",
              "Will they continue forever?"
            ],
            "mystery": "Twin prime conjecture is just the baby step k=1 of Polignac! Proving Polignac solves twin primes and all other gaps at once.",
            "funFact": "Gap 6 is the most popular prime gap under 1,000,000 because 6 = 2 × 3 is a multiple of the first two primes!"
          },
          "investigators": {
            "tagline": "Bounded gaps between primes: Zhang, Maynard, and Tao.",
            "analogy": "In 2013, Yitang Zhang made history by proving there exists some even gap N < 70,000,000 with infinitely many pairs. Maynard and Tao reduced this bound to 246.",
            "rules": [
              "Zhang (2013): ∃ N ≤ 70,000,000 with infinitely many pairs.",
              "Polymath8b (2014): Reduced bound to N ≤ 246.",
              "Assuming Elliott-Halberstam conjecture: Bound reduces to 6 or 12."
            ],
            "mystery": "Can we bridge the final gap from 246 down to 2, 4, and all individual even integers?",
            "funFact": "Alphonse de Polignac proposed this magnificent conjecture in 1849."
          },
          "pioneers": {
            "tagline": "GPY sieve, Maynard-Tao multidimensional weights, and Selberg sieve parity.",
            "analogy": "The multidimensional sieve weights construct positive probabilities for tuples of primes.",
            "rules": [
              "Maynard weights: F(t_1, ..., t_k).",
              "Bombieri-Vinogradov theorem on prime distributions.",
              "Formalized in Lean 4 prime gap theories."
            ],
            "mystery": "AI search algorithms are exploring higher-dimensional variational test functions to squeeze the bound below 246.",
            "funFact": "Polignac's conjecture provides a unified framework for the infinitude of all prime gaps."
          }
        },
        "history": [
          {
            "year": "1849",
            "author": "Alphonse de Polignac",
            "note": "States the general prime gap conjecture."
          },
          {
            "year": "2013",
            "author": "Yitang Zhang",
            "note": "Proves bounded gaps between primes (< 70 million)."
          },
          {
            "year": "2014",
            "author": "James Maynard & Terence Tao",
            "note": "Independent multidimensional sieve reduces bound to 246."
          }
        ]
      },
      "ko": {
        "name": "Polignac's Conjecture",
        "subtitle": "Infinitely Many Prime Pairs with Any Even Gap 2k",
        "field": "Additive Prime Number Theory",
        "statusBadge": "FRONTIER PROGRESS",
        "grades": {
          "explorers": {
            "tagline": "Do primes love making pairs of every possible even distance?",
            "analogy": "Twin primes have gap 2 (3 & 5). Cousin primes have gap 4 (7 & 11). Sexy primes have gap 6 (5 & 11). Polignac guessed that for ANY even number (2, 4, 6, 8, 10...), there are infinitely many prime pairs with that exact gap!",
            "rules": [
              "Choose any even gap: 2, 4, 6, 8...",
              "Look for primes separated by that gap.",
              "Gap 6: (5, 11), (7, 13), (11, 17), (13, 19)...",
              "Will they continue forever?"
            ],
            "mystery": "Twin prime conjecture is just the baby step k=1 of Polignac! Proving Polignac solves twin primes and all other gaps at once.",
            "funFact": "Gap 6 is the most popular prime gap under 1,000,000 because 6 = 2 × 3 is a multiple of the first two primes!"
          },
          "investigators": {
            "tagline": "Bounded gaps between primes: Zhang, Maynard, and Tao.",
            "analogy": "In 2013, Yitang Zhang made history by proving there exists some even gap N < 70,000,000 with infinitely many pairs. Maynard and Tao reduced this bound to 246.",
            "rules": [
              "Zhang (2013): ∃ N ≤ 70,000,000 with infinitely many pairs.",
              "Polymath8b (2014): Reduced bound to N ≤ 246.",
              "Assuming Elliott-Halberstam conjecture: Bound reduces to 6 or 12."
            ],
            "mystery": "Can we bridge the final gap from 246 down to 2, 4, and all individual even integers?",
            "funFact": "Alphonse de Polignac proposed this magnificent conjecture in 1849."
          },
          "pioneers": {
            "tagline": "GPY sieve, Maynard-Tao multidimensional weights, and Selberg sieve parity.",
            "analogy": "The multidimensional sieve weights construct positive probabilities for tuples of primes.",
            "rules": [
              "Maynard weights: F(t_1, ..., t_k).",
              "Bombieri-Vinogradov theorem on prime distributions.",
              "Formalized in Lean 4 prime gap theories."
            ],
            "mystery": "AI search algorithms are exploring higher-dimensional variational test functions to squeeze the bound below 246.",
            "funFact": "Polignac's conjecture provides a unified framework for the infinitude of all prime gaps."
          }
        },
        "history": [
          {
            "year": "1849",
            "author": "Alphonse de Polignac",
            "note": "States the general prime gap conjecture."
          },
          {
            "year": "2013",
            "author": "Yitang Zhang",
            "note": "Proves bounded gaps between primes (< 70 million)."
          },
          {
            "year": "2014",
            "author": "James Maynard & Terence Tao",
            "note": "Independent multidimensional sieve reduces bound to 246."
          }
        ]
      },
      "zh-Hans": {
        "name": "波利尼亚克猜想",
        "subtitle": "任意偶数间距 2k 的素数对皆有无穷多对",
        "field": "加性数论 & 素数分布",
        "statusBadge": "前沿突破中",
        "grades": {
          "explorers": {
            "tagline": "素数会不会像好朋友一样，相隔任意指定的偶数步长？",
            "analogy": "孪生素数相差2（3和5），表亲素数相差4（7和11），性感素数相差6（5和11）。波利尼亚克猜想：对任意正偶数 2k，间距正好为 2k 的素数对都有无穷多对！",
            "rules": [
              "选取任意正偶数间距：2、4、6、8……",
              "寻找相差该间距的素数对。",
              "间距 6：(5, 11), (7, 13), (11, 17), (13, 19)……",
              "这一序列是否永不枯竭？"
            ],
            "mystery": "孪生素数猜想其实只是波利尼亚克猜想在 k=1 时的第一步！证明波利尼亚克猜想就能一次性解决所有间距的素数对！",
            "funFact": "在100万以内，相差6的素数对数量远多于相差2的对数，因为6同时是2和3的倍数！"
          },
          "investigators": {
            "tagline": "素数有界间距：张益唐、梅纳德与陶哲轩。",
            "analogy": "2013年张益唐轰动世界，证明了存在小于7000万的有限间距具有无穷素数对。梅纳德和陶哲轩随后将其缩小至246。",
            "rules": [
              "张益唐 (2013)：存在 N ≤ 70,000,000 具有无穷素数对。",
              "Polymath8 (2014)：将界缩小至 N ≤ 246。",
              "在广义埃利奥特-哈伯斯塔姆猜想下，界可降至 6 或 12。"
            ],
            "mystery": "能否从 246 跨越最后的障碍，精确落到 2、4 以及每一个独立的偶数上？",
            "funFact": "阿尔方斯·德·波利尼亚克于1849年提出了这一宏伟猜想。"
          },
          "pioneers": {
            "tagline": "GPY筛法、梅纳德-陶哲轩多维权重与塞尔伯格筛法。",
            "analogy": "多维光滑变分权重函数彻底颠覆了素数元组的分布密度概率分析。",
            "rules": [
              "梅纳德优化变分权重 F(t_1, ..., t_k)。",
              "邦别里-维诺格拉多夫均值定理。",
              "Lean 4 形式化素数间隙理论。"
            ],
            "mystery": "AI 探索高维变分核函数，尝试突破 246 的界限。",
            "funFact": "波利尼亚克猜想为所有素数间距的无穷性提供了统一框架。"
          }
        },
        "history": [
          {
            "year": "1849",
            "author": "波利尼亚克",
            "note": "正式发表关于任意偶数素数间隙的普遍猜想。"
          },
          {
            "year": "2013",
            "author": "张益唐",
            "note": "证明存在小于7000万的有界素数间距，取得历史性突破。"
          },
          {
            "year": "2014",
            "author": "詹姆斯·梅纳德 & 陶哲轩",
            "note": "运用多维筛法将无条件素数间距缩小至 246！"
          }
        ]
      },
      "zh-Hant": {
        "name": "Polignac's Conjecture",
        "subtitle": "Infinitely Many Prime Pairs with Any Even Gap 2k",
        "field": "Additive Prime Number Theory",
        "statusBadge": "FRONTIER PROGRESS",
        "grades": {
          "explorers": {
            "tagline": "Do primes love making pairs of every possible even distance?",
            "analogy": "Twin primes have gap 2 (3 & 5). Cousin primes have gap 4 (7 & 11). Sexy primes have gap 6 (5 & 11). Polignac guessed that for ANY even number (2, 4, 6, 8, 10...), there are infinitely many prime pairs with that exact gap!",
            "rules": [
              "Choose any even gap: 2, 4, 6, 8...",
              "Look for primes separated by that gap.",
              "Gap 6: (5, 11), (7, 13), (11, 17), (13, 19)...",
              "Will they continue forever?"
            ],
            "mystery": "Twin prime conjecture is just the baby step k=1 of Polignac! Proving Polignac solves twin primes and all other gaps at once.",
            "funFact": "Gap 6 is the most popular prime gap under 1,000,000 because 6 = 2 × 3 is a multiple of the first two primes!"
          },
          "investigators": {
            "tagline": "Bounded gaps between primes: Zhang, Maynard, and Tao.",
            "analogy": "In 2013, Yitang Zhang made history by proving there exists some even gap N < 70,000,000 with infinitely many pairs. Maynard and Tao reduced this bound to 246.",
            "rules": [
              "Zhang (2013): ∃ N ≤ 70,000,000 with infinitely many pairs.",
              "Polymath8b (2014): Reduced bound to N ≤ 246.",
              "Assuming Elliott-Halberstam conjecture: Bound reduces to 6 or 12."
            ],
            "mystery": "Can we bridge the final gap from 246 down to 2, 4, and all individual even integers?",
            "funFact": "Alphonse de Polignac proposed this magnificent conjecture in 1849."
          },
          "pioneers": {
            "tagline": "GPY sieve, Maynard-Tao multidimensional weights, and Selberg sieve parity.",
            "analogy": "The multidimensional sieve weights construct positive probabilities for tuples of primes.",
            "rules": [
              "Maynard weights: F(t_1, ..., t_k).",
              "Bombieri-Vinogradov theorem on prime distributions.",
              "Formalized in Lean 4 prime gap theories."
            ],
            "mystery": "AI search algorithms are exploring higher-dimensional variational test functions to squeeze the bound below 246.",
            "funFact": "Polignac's conjecture provides a unified framework for the infinitude of all prime gaps."
          }
        },
        "history": [
          {
            "year": "1849",
            "author": "Alphonse de Polignac",
            "note": "States the general prime gap conjecture."
          },
          {
            "year": "2013",
            "author": "Yitang Zhang",
            "note": "Proves bounded gaps between primes (< 70 million)."
          },
          {
            "year": "2014",
            "author": "James Maynard & Terence Tao",
            "note": "Independent multidimensional sieve reduces bound to 246."
          }
        ]
      }
    }
  },
  {
    "id": "oppermann",
    "icon": "⛰️",
    "difficulty": "Gr 6+",
    "domain": "number-theory",
    "category": "number-theory",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Data.Nat.Prime\ndef OppermannConjecture (n : ℕ) : Prop :=\n  n > 1 → (∃ p1 : ℕ, Nat.Prime p1 ∧ n * (n - 1) < p1 ∧ p1 < n^2) ∧\n          (∃ p2 : ℕ, Nat.Prime p2 ∧ n^2 < p2 ∧ p2 < n * (n + 1))",
    "locales": {
      "en": {
        "name": "Oppermann's Conjecture",
        "subtitle": "Two Primes Flanking Every Square n²",
        "field": "Prime Distribution in Quadratic Intervals",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Does every square number have a prime guard on its left and right?",
            "analogy": "Look at any square n² (like 4² = 16). Oppermann conjectures there is always a prime between 12 and 16, AND another prime between 16 and 20! Primes never leave a square alone.",
            "rules": [
              "Choose integer n ≥ 2.",
              "Calculate lower bound n(n-1), square n², and upper bound n(n+1).",
              "Find at least one prime in each half-interval.",
              "Both intervals always contain primes!"
            ],
            "mystery": "Oppermann is even stronger than Legendre's conjecture! If Oppermann is true, Legendre is instantly proved.",
            "funFact": "For n = 10, the square is 100. Lower interval (90, 100) has primes 97. Upper interval (100, 110) has primes 101, 103, 107, 109!"
          },
          "investigators": {
            "tagline": "Prime gap bounds of order g_n < √p_n.",
            "analogy": "Each interval has length n ≈ √p. Oppermann implies that the gap between consecutive primes is strictly smaller than √p.",
            "rules": [
              "Interval 1: (n² - n, n²).",
              "Interval 2: (n², n² + n).",
              "Stronger than Legendre and Andrica's conjectures."
            ],
            "mystery": "Is the prime gap really strictly bounded by the square root for all numbers?",
            "funFact": "Ludvig Oppermann presented this problem in 1882 in Denmark."
          },
          "pioneers": {
            "tagline": "Heuristic probability models and Cramér random prime bounds.",
            "analogy": "By the prime number theorem, the expected number of primes in an interval of length n near n² is n / log(n²) = n / (2 log n), which grows to infinity.",
            "rules": [
              "Expected primes in interval: ~ n / (2 log n).",
              "Cramér model predicts gaps O(log² p).",
              "Mathlib formalization of interval density."
            ],
            "mystery": "Machine learning theorem provers are analyzing zero-free regions of Dirichlet L-functions for quadratic character twists.",
            "funFact": "No counterexample has ever been found in all recorded computations."
          }
        },
        "history": [
          {
            "year": "1882",
            "author": "Ludvig Oppermann",
            "note": "Formulates the conjecture in Copenhagen."
          },
          {
            "year": "2020",
            "author": "Computational Verification",
            "note": "Verified for all n up to 10^9."
          }
        ]
      },
      "de": {
        "name": "Oppermann's Conjecture",
        "subtitle": "Two Primes Flanking Every Square n²",
        "field": "Prime Distribution in Quadratic Intervals",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Does every square number have a prime guard on its left and right?",
            "analogy": "Look at any square n² (like 4² = 16). Oppermann conjectures there is always a prime between 12 and 16, AND another prime between 16 and 20! Primes never leave a square alone.",
            "rules": [
              "Choose integer n ≥ 2.",
              "Calculate lower bound n(n-1), square n², and upper bound n(n+1).",
              "Find at least one prime in each half-interval.",
              "Both intervals always contain primes!"
            ],
            "mystery": "Oppermann is even stronger than Legendre's conjecture! If Oppermann is true, Legendre is instantly proved.",
            "funFact": "For n = 10, the square is 100. Lower interval (90, 100) has primes 97. Upper interval (100, 110) has primes 101, 103, 107, 109!"
          },
          "investigators": {
            "tagline": "Prime gap bounds of order g_n < √p_n.",
            "analogy": "Each interval has length n ≈ √p. Oppermann implies that the gap between consecutive primes is strictly smaller than √p.",
            "rules": [
              "Interval 1: (n² - n, n²).",
              "Interval 2: (n², n² + n).",
              "Stronger than Legendre and Andrica's conjectures."
            ],
            "mystery": "Is the prime gap really strictly bounded by the square root for all numbers?",
            "funFact": "Ludvig Oppermann presented this problem in 1882 in Denmark."
          },
          "pioneers": {
            "tagline": "Heuristic probability models and Cramér random prime bounds.",
            "analogy": "By the prime number theorem, the expected number of primes in an interval of length n near n² is n / log(n²) = n / (2 log n), which grows to infinity.",
            "rules": [
              "Expected primes in interval: ~ n / (2 log n).",
              "Cramér model predicts gaps O(log² p).",
              "Mathlib formalization of interval density."
            ],
            "mystery": "Machine learning theorem provers are analyzing zero-free regions of Dirichlet L-functions for quadratic character twists.",
            "funFact": "No counterexample has ever been found in all recorded computations."
          }
        },
        "history": [
          {
            "year": "1882",
            "author": "Ludvig Oppermann",
            "note": "Formulates the conjecture in Copenhagen."
          },
          {
            "year": "2020",
            "author": "Computational Verification",
            "note": "Verified for all n up to 10^9."
          }
        ]
      },
      "fr": {
        "name": "Oppermann's Conjecture",
        "subtitle": "Two Primes Flanking Every Square n²",
        "field": "Prime Distribution in Quadratic Intervals",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Does every square number have a prime guard on its left and right?",
            "analogy": "Look at any square n² (like 4² = 16). Oppermann conjectures there is always a prime between 12 and 16, AND another prime between 16 and 20! Primes never leave a square alone.",
            "rules": [
              "Choose integer n ≥ 2.",
              "Calculate lower bound n(n-1), square n², and upper bound n(n+1).",
              "Find at least one prime in each half-interval.",
              "Both intervals always contain primes!"
            ],
            "mystery": "Oppermann is even stronger than Legendre's conjecture! If Oppermann is true, Legendre is instantly proved.",
            "funFact": "For n = 10, the square is 100. Lower interval (90, 100) has primes 97. Upper interval (100, 110) has primes 101, 103, 107, 109!"
          },
          "investigators": {
            "tagline": "Prime gap bounds of order g_n < √p_n.",
            "analogy": "Each interval has length n ≈ √p. Oppermann implies that the gap between consecutive primes is strictly smaller than √p.",
            "rules": [
              "Interval 1: (n² - n, n²).",
              "Interval 2: (n², n² + n).",
              "Stronger than Legendre and Andrica's conjectures."
            ],
            "mystery": "Is the prime gap really strictly bounded by the square root for all numbers?",
            "funFact": "Ludvig Oppermann presented this problem in 1882 in Denmark."
          },
          "pioneers": {
            "tagline": "Heuristic probability models and Cramér random prime bounds.",
            "analogy": "By the prime number theorem, the expected number of primes in an interval of length n near n² is n / log(n²) = n / (2 log n), which grows to infinity.",
            "rules": [
              "Expected primes in interval: ~ n / (2 log n).",
              "Cramér model predicts gaps O(log² p).",
              "Mathlib formalization of interval density."
            ],
            "mystery": "Machine learning theorem provers are analyzing zero-free regions of Dirichlet L-functions for quadratic character twists.",
            "funFact": "No counterexample has ever been found in all recorded computations."
          }
        },
        "history": [
          {
            "year": "1882",
            "author": "Ludvig Oppermann",
            "note": "Formulates the conjecture in Copenhagen."
          },
          {
            "year": "2020",
            "author": "Computational Verification",
            "note": "Verified for all n up to 10^9."
          }
        ]
      },
      "it": {
        "name": "Oppermann's Conjecture",
        "subtitle": "Two Primes Flanking Every Square n²",
        "field": "Prime Distribution in Quadratic Intervals",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Does every square number have a prime guard on its left and right?",
            "analogy": "Look at any square n² (like 4² = 16). Oppermann conjectures there is always a prime between 12 and 16, AND another prime between 16 and 20! Primes never leave a square alone.",
            "rules": [
              "Choose integer n ≥ 2.",
              "Calculate lower bound n(n-1), square n², and upper bound n(n+1).",
              "Find at least one prime in each half-interval.",
              "Both intervals always contain primes!"
            ],
            "mystery": "Oppermann is even stronger than Legendre's conjecture! If Oppermann is true, Legendre is instantly proved.",
            "funFact": "For n = 10, the square is 100. Lower interval (90, 100) has primes 97. Upper interval (100, 110) has primes 101, 103, 107, 109!"
          },
          "investigators": {
            "tagline": "Prime gap bounds of order g_n < √p_n.",
            "analogy": "Each interval has length n ≈ √p. Oppermann implies that the gap between consecutive primes is strictly smaller than √p.",
            "rules": [
              "Interval 1: (n² - n, n²).",
              "Interval 2: (n², n² + n).",
              "Stronger than Legendre and Andrica's conjectures."
            ],
            "mystery": "Is the prime gap really strictly bounded by the square root for all numbers?",
            "funFact": "Ludvig Oppermann presented this problem in 1882 in Denmark."
          },
          "pioneers": {
            "tagline": "Heuristic probability models and Cramér random prime bounds.",
            "analogy": "By the prime number theorem, the expected number of primes in an interval of length n near n² is n / log(n²) = n / (2 log n), which grows to infinity.",
            "rules": [
              "Expected primes in interval: ~ n / (2 log n).",
              "Cramér model predicts gaps O(log² p).",
              "Mathlib formalization of interval density."
            ],
            "mystery": "Machine learning theorem provers are analyzing zero-free regions of Dirichlet L-functions for quadratic character twists.",
            "funFact": "No counterexample has ever been found in all recorded computations."
          }
        },
        "history": [
          {
            "year": "1882",
            "author": "Ludvig Oppermann",
            "note": "Formulates the conjecture in Copenhagen."
          },
          {
            "year": "2020",
            "author": "Computational Verification",
            "note": "Verified for all n up to 10^9."
          }
        ]
      },
      "ja": {
        "name": "Oppermann's Conjecture",
        "subtitle": "Two Primes Flanking Every Square n²",
        "field": "Prime Distribution in Quadratic Intervals",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Does every square number have a prime guard on its left and right?",
            "analogy": "Look at any square n² (like 4² = 16). Oppermann conjectures there is always a prime between 12 and 16, AND another prime between 16 and 20! Primes never leave a square alone.",
            "rules": [
              "Choose integer n ≥ 2.",
              "Calculate lower bound n(n-1), square n², and upper bound n(n+1).",
              "Find at least one prime in each half-interval.",
              "Both intervals always contain primes!"
            ],
            "mystery": "Oppermann is even stronger than Legendre's conjecture! If Oppermann is true, Legendre is instantly proved.",
            "funFact": "For n = 10, the square is 100. Lower interval (90, 100) has primes 97. Upper interval (100, 110) has primes 101, 103, 107, 109!"
          },
          "investigators": {
            "tagline": "Prime gap bounds of order g_n < √p_n.",
            "analogy": "Each interval has length n ≈ √p. Oppermann implies that the gap between consecutive primes is strictly smaller than √p.",
            "rules": [
              "Interval 1: (n² - n, n²).",
              "Interval 2: (n², n² + n).",
              "Stronger than Legendre and Andrica's conjectures."
            ],
            "mystery": "Is the prime gap really strictly bounded by the square root for all numbers?",
            "funFact": "Ludvig Oppermann presented this problem in 1882 in Denmark."
          },
          "pioneers": {
            "tagline": "Heuristic probability models and Cramér random prime bounds.",
            "analogy": "By the prime number theorem, the expected number of primes in an interval of length n near n² is n / log(n²) = n / (2 log n), which grows to infinity.",
            "rules": [
              "Expected primes in interval: ~ n / (2 log n).",
              "Cramér model predicts gaps O(log² p).",
              "Mathlib formalization of interval density."
            ],
            "mystery": "Machine learning theorem provers are analyzing zero-free regions of Dirichlet L-functions for quadratic character twists.",
            "funFact": "No counterexample has ever been found in all recorded computations."
          }
        },
        "history": [
          {
            "year": "1882",
            "author": "Ludvig Oppermann",
            "note": "Formulates the conjecture in Copenhagen."
          },
          {
            "year": "2020",
            "author": "Computational Verification",
            "note": "Verified for all n up to 10^9."
          }
        ]
      },
      "ko": {
        "name": "Oppermann's Conjecture",
        "subtitle": "Two Primes Flanking Every Square n²",
        "field": "Prime Distribution in Quadratic Intervals",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Does every square number have a prime guard on its left and right?",
            "analogy": "Look at any square n² (like 4² = 16). Oppermann conjectures there is always a prime between 12 and 16, AND another prime between 16 and 20! Primes never leave a square alone.",
            "rules": [
              "Choose integer n ≥ 2.",
              "Calculate lower bound n(n-1), square n², and upper bound n(n+1).",
              "Find at least one prime in each half-interval.",
              "Both intervals always contain primes!"
            ],
            "mystery": "Oppermann is even stronger than Legendre's conjecture! If Oppermann is true, Legendre is instantly proved.",
            "funFact": "For n = 10, the square is 100. Lower interval (90, 100) has primes 97. Upper interval (100, 110) has primes 101, 103, 107, 109!"
          },
          "investigators": {
            "tagline": "Prime gap bounds of order g_n < √p_n.",
            "analogy": "Each interval has length n ≈ √p. Oppermann implies that the gap between consecutive primes is strictly smaller than √p.",
            "rules": [
              "Interval 1: (n² - n, n²).",
              "Interval 2: (n², n² + n).",
              "Stronger than Legendre and Andrica's conjectures."
            ],
            "mystery": "Is the prime gap really strictly bounded by the square root for all numbers?",
            "funFact": "Ludvig Oppermann presented this problem in 1882 in Denmark."
          },
          "pioneers": {
            "tagline": "Heuristic probability models and Cramér random prime bounds.",
            "analogy": "By the prime number theorem, the expected number of primes in an interval of length n near n² is n / log(n²) = n / (2 log n), which grows to infinity.",
            "rules": [
              "Expected primes in interval: ~ n / (2 log n).",
              "Cramér model predicts gaps O(log² p).",
              "Mathlib formalization of interval density."
            ],
            "mystery": "Machine learning theorem provers are analyzing zero-free regions of Dirichlet L-functions for quadratic character twists.",
            "funFact": "No counterexample has ever been found in all recorded computations."
          }
        },
        "history": [
          {
            "year": "1882",
            "author": "Ludvig Oppermann",
            "note": "Formulates the conjecture in Copenhagen."
          },
          {
            "year": "2020",
            "author": "Computational Verification",
            "note": "Verified for all n up to 10^9."
          }
        ]
      },
      "zh-Hans": {
        "name": "奥珀曼猜想",
        "subtitle": "每个完全平方数两侧皆有素数相伴",
        "field": "二次区间中的素数分布",
        "statusBadge": "未解之谜",
        "grades": {
          "explorers": {
            "tagline": "每个完全平方数的左边和右边，都各自守卫着一位素数吗？",
            "analogy": "观察任意完全平方数 n²（如 4² = 16）。奥珀曼猜想：在 12 到 16 之间必有一个素数（13），在 16 到 20 之间也必有另一个素数（17 和 19）！",
            "rules": [
              "选取整数 n ≥ 2。",
              "计算左区间 [n(n-1), n²] 和右区间 [n², n(n+1)]。",
              "在两个区间分别找到至少一个素数。",
              "两个半区间从未出现素数空缺！"
            ],
            "mystery": "奥珀曼猜想比勒让德猜想更强！只要奥珀曼猜想为真，勒让德猜想便立得证明。",
            "funFact": "当 n = 10 时，n² = 100。左侧 (90, 100) 有素数 97，右侧 (100, 110) 则有多达 4 个素数！"
          },
          "investigators": {
            "tagline": "间距阶数满足 g_n < √p_n。",
            "analogy": "每个半区间的长度仅为 n ≈ √p。若猜想成立，意味着相邻素数间距严格小于 √p。",
            "rules": [
              "左半区间：(n² - n, n²)。",
              "右半区间：(n², n² + n)。",
              "强度严格超越勒让德猜想与安德里察猜想。"
            ],
            "mystery": "在所有无穷大数域内，素数间隙是否真的始终被平方根严格压制？",
            "funFact": "丹麦数学家路德维希·奥珀曼于1882年发表了该猜想。"
          },
          "pioneers": {
            "tagline": "概率素数模型与克拉默界。",
            "analogy": "根据素数定理，在 n² 附近长度为 n 的区间内，素数的期望个数为 n / (2 log n)，当 n 增大时发散至无穷大。",
            "rules": [
              "区间期望素数密度：~ n / (2 log n)。",
              "克拉默模型预测最大间距仅为 O(log² p)。",
              "Mathlib 中的区间素数计数函数。"
            ],
            "mystery": "机器学习定理证明器正在分析二次狄利克雷特征对应的L函数无零点区域。",
            "funFact": "所有已知计算中从未发现任何反例。"
          }
        },
        "history": [
          {
            "year": "1882",
            "author": "路德维希·奥珀曼",
            "note": "在哥本哈根正式提出关于平方数两侧素数的猜想。"
          },
          {
            "year": "2020",
            "author": "超级计算机团队",
            "note": "数值验证通过 n ≤ 10^9 内的所有整数。"
          }
        ]
      },
      "zh-Hant": {
        "name": "Oppermann's Conjecture",
        "subtitle": "Two Primes Flanking Every Square n²",
        "field": "Prime Distribution in Quadratic Intervals",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Does every square number have a prime guard on its left and right?",
            "analogy": "Look at any square n² (like 4² = 16). Oppermann conjectures there is always a prime between 12 and 16, AND another prime between 16 and 20! Primes never leave a square alone.",
            "rules": [
              "Choose integer n ≥ 2.",
              "Calculate lower bound n(n-1), square n², and upper bound n(n+1).",
              "Find at least one prime in each half-interval.",
              "Both intervals always contain primes!"
            ],
            "mystery": "Oppermann is even stronger than Legendre's conjecture! If Oppermann is true, Legendre is instantly proved.",
            "funFact": "For n = 10, the square is 100. Lower interval (90, 100) has primes 97. Upper interval (100, 110) has primes 101, 103, 107, 109!"
          },
          "investigators": {
            "tagline": "Prime gap bounds of order g_n < √p_n.",
            "analogy": "Each interval has length n ≈ √p. Oppermann implies that the gap between consecutive primes is strictly smaller than √p.",
            "rules": [
              "Interval 1: (n² - n, n²).",
              "Interval 2: (n², n² + n).",
              "Stronger than Legendre and Andrica's conjectures."
            ],
            "mystery": "Is the prime gap really strictly bounded by the square root for all numbers?",
            "funFact": "Ludvig Oppermann presented this problem in 1882 in Denmark."
          },
          "pioneers": {
            "tagline": "Heuristic probability models and Cramér random prime bounds.",
            "analogy": "By the prime number theorem, the expected number of primes in an interval of length n near n² is n / log(n²) = n / (2 log n), which grows to infinity.",
            "rules": [
              "Expected primes in interval: ~ n / (2 log n).",
              "Cramér model predicts gaps O(log² p).",
              "Mathlib formalization of interval density."
            ],
            "mystery": "Machine learning theorem provers are analyzing zero-free regions of Dirichlet L-functions for quadratic character twists.",
            "funFact": "No counterexample has ever been found in all recorded computations."
          }
        },
        "history": [
          {
            "year": "1882",
            "author": "Ludvig Oppermann",
            "note": "Formulates the conjecture in Copenhagen."
          },
          {
            "year": "2020",
            "author": "Computational Verification",
            "note": "Verified for all n up to 10^9."
          }
        ]
      }
    }
  },
  {
    "id": "brocard",
    "icon": "❗",
    "difficulty": "All Ages",
    "domain": "number-theory",
    "category": "number-theory",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Data.Nat.Basic\ndef BrocardEquation (n m : ℕ) : Prop :=\n  Nat.factorial n + 1 = m^2\ndef BrocardConjecture : Prop :=\n  ∀ (n m : ℕ), BrocardEquation n m ↔ (n = 4 ∧ m = 5) ∨ (n = 5 ∧ m = 11) ∨ (n = 7 ∧ m = 71)",
    "locales": {
      "en": {
        "name": "Brocard's Problem (Brown Numbers)",
        "subtitle": "Does n! + 1 = m² Have Only Three Solutions?",
        "field": "Diophantine Equations & Factorials",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can factorial fireworks n! + 1 land on a perfect square grid?",
            "analogy": "Calculate factorial n! (1×2×3...×n), then add 1. For 4, 4!+1 = 25 = 5². For 5, 5!+1 = 121 = 11². For 7, 7!+1 = 5041 = 71². Are there any other solutions in the universe?",
            "rules": [
              "Pick n and calculate n! + 1.",
              "Check if it equals a square m².",
              "Only 3 solutions known: (4, 5), (5, 11), (7, 71).",
              "Check n = 8, 9, 10... none work!"
            ],
            "mystery": "Indian genius Srinivasa Ramanujan independently studied this exact equation in 1913 and suspected no other solutions exist!",
            "funFact": "Pairs (n, m) satisfying the equation are called Brown Numbers."
          },
          "investigators": {
            "tagline": "Super-exponential growth and integer points on curves.",
            "analogy": "Factorials grow faster than any exponential function (n! ~ √(2πn) (n/e)^n). Overckers and Berndt verified that no further solutions exist up to n = 10^12.",
            "rules": [
              "Known solutions: (4, 5), (5, 11), (7, 71).",
              "Verified up to n = 1,000,000,000,000.",
              "Tied to the ABC conjecture."
            ],
            "mystery": "Does n! + 1 ever become square again, or does factorial growth permanently outpace squares?",
            "funFact": "Henri Brocard posed this in 1876 and 1885."
          },
          "pioneers": {
            "tagline": "Masser's ABC conjecture and modular prime factors of factorials.",
            "analogy": "Szpiro's conjecture and the ABC conjecture imply that n! + 1 = m² has only finitely many solutions.",
            "rules": [
              "Stirling's approximation and p-adic valuations.",
              "Dabrowski (1996) connected Brocard to ABC.",
              "Lean 4 Mathlib formalization."
            ],
            "mystery": "AI symbolic solver pipelines are analyzing modular congruences modulo Wilson primes.",
            "funFact": "Brocard's problem is one of the simplest Diophantine riddles to state, yet stubbornly open."
          }
        },
        "history": [
          {
            "year": "1876",
            "author": "Henri Brocard",
            "note": "Presents the problem in Nouvelles Annales de Mathématiques."
          },
          {
            "year": "1913",
            "author": "Srinivasa Ramanujan",
            "note": "Independently studies equation and conjectures no other solutions exist."
          },
          {
            "year": "2000",
            "author": "Berndt & Galway",
            "note": "Verify computational search up to n = 10^9."
          },
          {
            "year": "2020",
            "author": "Distributed Computing",
            "note": "Extended verification to n = 10^12."
          }
        ]
      },
      "de": {
        "name": "Brocard's Problem (Brown Numbers)",
        "subtitle": "Does n! + 1 = m² Have Only Three Solutions?",
        "field": "Diophantine Equations & Factorials",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can factorial fireworks n! + 1 land on a perfect square grid?",
            "analogy": "Calculate factorial n! (1×2×3...×n), then add 1. For 4, 4!+1 = 25 = 5². For 5, 5!+1 = 121 = 11². For 7, 7!+1 = 5041 = 71². Are there any other solutions in the universe?",
            "rules": [
              "Pick n and calculate n! + 1.",
              "Check if it equals a square m².",
              "Only 3 solutions known: (4, 5), (5, 11), (7, 71).",
              "Check n = 8, 9, 10... none work!"
            ],
            "mystery": "Indian genius Srinivasa Ramanujan independently studied this exact equation in 1913 and suspected no other solutions exist!",
            "funFact": "Pairs (n, m) satisfying the equation are called Brown Numbers."
          },
          "investigators": {
            "tagline": "Super-exponential growth and integer points on curves.",
            "analogy": "Factorials grow faster than any exponential function (n! ~ √(2πn) (n/e)^n). Overckers and Berndt verified that no further solutions exist up to n = 10^12.",
            "rules": [
              "Known solutions: (4, 5), (5, 11), (7, 71).",
              "Verified up to n = 1,000,000,000,000.",
              "Tied to the ABC conjecture."
            ],
            "mystery": "Does n! + 1 ever become square again, or does factorial growth permanently outpace squares?",
            "funFact": "Henri Brocard posed this in 1876 and 1885."
          },
          "pioneers": {
            "tagline": "Masser's ABC conjecture and modular prime factors of factorials.",
            "analogy": "Szpiro's conjecture and the ABC conjecture imply that n! + 1 = m² has only finitely many solutions.",
            "rules": [
              "Stirling's approximation and p-adic valuations.",
              "Dabrowski (1996) connected Brocard to ABC.",
              "Lean 4 Mathlib formalization."
            ],
            "mystery": "AI symbolic solver pipelines are analyzing modular congruences modulo Wilson primes.",
            "funFact": "Brocard's problem is one of the simplest Diophantine riddles to state, yet stubbornly open."
          }
        },
        "history": [
          {
            "year": "1876",
            "author": "Henri Brocard",
            "note": "Presents the problem in Nouvelles Annales de Mathématiques."
          },
          {
            "year": "1913",
            "author": "Srinivasa Ramanujan",
            "note": "Independently studies equation and conjectures no other solutions exist."
          },
          {
            "year": "2000",
            "author": "Berndt & Galway",
            "note": "Verify computational search up to n = 10^9."
          },
          {
            "year": "2020",
            "author": "Distributed Computing",
            "note": "Extended verification to n = 10^12."
          }
        ]
      },
      "fr": {
        "name": "Brocard's Problem (Brown Numbers)",
        "subtitle": "Does n! + 1 = m² Have Only Three Solutions?",
        "field": "Diophantine Equations & Factorials",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can factorial fireworks n! + 1 land on a perfect square grid?",
            "analogy": "Calculate factorial n! (1×2×3...×n), then add 1. For 4, 4!+1 = 25 = 5². For 5, 5!+1 = 121 = 11². For 7, 7!+1 = 5041 = 71². Are there any other solutions in the universe?",
            "rules": [
              "Pick n and calculate n! + 1.",
              "Check if it equals a square m².",
              "Only 3 solutions known: (4, 5), (5, 11), (7, 71).",
              "Check n = 8, 9, 10... none work!"
            ],
            "mystery": "Indian genius Srinivasa Ramanujan independently studied this exact equation in 1913 and suspected no other solutions exist!",
            "funFact": "Pairs (n, m) satisfying the equation are called Brown Numbers."
          },
          "investigators": {
            "tagline": "Super-exponential growth and integer points on curves.",
            "analogy": "Factorials grow faster than any exponential function (n! ~ √(2πn) (n/e)^n). Overckers and Berndt verified that no further solutions exist up to n = 10^12.",
            "rules": [
              "Known solutions: (4, 5), (5, 11), (7, 71).",
              "Verified up to n = 1,000,000,000,000.",
              "Tied to the ABC conjecture."
            ],
            "mystery": "Does n! + 1 ever become square again, or does factorial growth permanently outpace squares?",
            "funFact": "Henri Brocard posed this in 1876 and 1885."
          },
          "pioneers": {
            "tagline": "Masser's ABC conjecture and modular prime factors of factorials.",
            "analogy": "Szpiro's conjecture and the ABC conjecture imply that n! + 1 = m² has only finitely many solutions.",
            "rules": [
              "Stirling's approximation and p-adic valuations.",
              "Dabrowski (1996) connected Brocard to ABC.",
              "Lean 4 Mathlib formalization."
            ],
            "mystery": "AI symbolic solver pipelines are analyzing modular congruences modulo Wilson primes.",
            "funFact": "Brocard's problem is one of the simplest Diophantine riddles to state, yet stubbornly open."
          }
        },
        "history": [
          {
            "year": "1876",
            "author": "Henri Brocard",
            "note": "Presents the problem in Nouvelles Annales de Mathématiques."
          },
          {
            "year": "1913",
            "author": "Srinivasa Ramanujan",
            "note": "Independently studies equation and conjectures no other solutions exist."
          },
          {
            "year": "2000",
            "author": "Berndt & Galway",
            "note": "Verify computational search up to n = 10^9."
          },
          {
            "year": "2020",
            "author": "Distributed Computing",
            "note": "Extended verification to n = 10^12."
          }
        ]
      },
      "it": {
        "name": "Brocard's Problem (Brown Numbers)",
        "subtitle": "Does n! + 1 = m² Have Only Three Solutions?",
        "field": "Diophantine Equations & Factorials",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can factorial fireworks n! + 1 land on a perfect square grid?",
            "analogy": "Calculate factorial n! (1×2×3...×n), then add 1. For 4, 4!+1 = 25 = 5². For 5, 5!+1 = 121 = 11². For 7, 7!+1 = 5041 = 71². Are there any other solutions in the universe?",
            "rules": [
              "Pick n and calculate n! + 1.",
              "Check if it equals a square m².",
              "Only 3 solutions known: (4, 5), (5, 11), (7, 71).",
              "Check n = 8, 9, 10... none work!"
            ],
            "mystery": "Indian genius Srinivasa Ramanujan independently studied this exact equation in 1913 and suspected no other solutions exist!",
            "funFact": "Pairs (n, m) satisfying the equation are called Brown Numbers."
          },
          "investigators": {
            "tagline": "Super-exponential growth and integer points on curves.",
            "analogy": "Factorials grow faster than any exponential function (n! ~ √(2πn) (n/e)^n). Overckers and Berndt verified that no further solutions exist up to n = 10^12.",
            "rules": [
              "Known solutions: (4, 5), (5, 11), (7, 71).",
              "Verified up to n = 1,000,000,000,000.",
              "Tied to the ABC conjecture."
            ],
            "mystery": "Does n! + 1 ever become square again, or does factorial growth permanently outpace squares?",
            "funFact": "Henri Brocard posed this in 1876 and 1885."
          },
          "pioneers": {
            "tagline": "Masser's ABC conjecture and modular prime factors of factorials.",
            "analogy": "Szpiro's conjecture and the ABC conjecture imply that n! + 1 = m² has only finitely many solutions.",
            "rules": [
              "Stirling's approximation and p-adic valuations.",
              "Dabrowski (1996) connected Brocard to ABC.",
              "Lean 4 Mathlib formalization."
            ],
            "mystery": "AI symbolic solver pipelines are analyzing modular congruences modulo Wilson primes.",
            "funFact": "Brocard's problem is one of the simplest Diophantine riddles to state, yet stubbornly open."
          }
        },
        "history": [
          {
            "year": "1876",
            "author": "Henri Brocard",
            "note": "Presents the problem in Nouvelles Annales de Mathématiques."
          },
          {
            "year": "1913",
            "author": "Srinivasa Ramanujan",
            "note": "Independently studies equation and conjectures no other solutions exist."
          },
          {
            "year": "2000",
            "author": "Berndt & Galway",
            "note": "Verify computational search up to n = 10^9."
          },
          {
            "year": "2020",
            "author": "Distributed Computing",
            "note": "Extended verification to n = 10^12."
          }
        ]
      },
      "ja": {
        "name": "Brocard's Problem (Brown Numbers)",
        "subtitle": "Does n! + 1 = m² Have Only Three Solutions?",
        "field": "Diophantine Equations & Factorials",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can factorial fireworks n! + 1 land on a perfect square grid?",
            "analogy": "Calculate factorial n! (1×2×3...×n), then add 1. For 4, 4!+1 = 25 = 5². For 5, 5!+1 = 121 = 11². For 7, 7!+1 = 5041 = 71². Are there any other solutions in the universe?",
            "rules": [
              "Pick n and calculate n! + 1.",
              "Check if it equals a square m².",
              "Only 3 solutions known: (4, 5), (5, 11), (7, 71).",
              "Check n = 8, 9, 10... none work!"
            ],
            "mystery": "Indian genius Srinivasa Ramanujan independently studied this exact equation in 1913 and suspected no other solutions exist!",
            "funFact": "Pairs (n, m) satisfying the equation are called Brown Numbers."
          },
          "investigators": {
            "tagline": "Super-exponential growth and integer points on curves.",
            "analogy": "Factorials grow faster than any exponential function (n! ~ √(2πn) (n/e)^n). Overckers and Berndt verified that no further solutions exist up to n = 10^12.",
            "rules": [
              "Known solutions: (4, 5), (5, 11), (7, 71).",
              "Verified up to n = 1,000,000,000,000.",
              "Tied to the ABC conjecture."
            ],
            "mystery": "Does n! + 1 ever become square again, or does factorial growth permanently outpace squares?",
            "funFact": "Henri Brocard posed this in 1876 and 1885."
          },
          "pioneers": {
            "tagline": "Masser's ABC conjecture and modular prime factors of factorials.",
            "analogy": "Szpiro's conjecture and the ABC conjecture imply that n! + 1 = m² has only finitely many solutions.",
            "rules": [
              "Stirling's approximation and p-adic valuations.",
              "Dabrowski (1996) connected Brocard to ABC.",
              "Lean 4 Mathlib formalization."
            ],
            "mystery": "AI symbolic solver pipelines are analyzing modular congruences modulo Wilson primes.",
            "funFact": "Brocard's problem is one of the simplest Diophantine riddles to state, yet stubbornly open."
          }
        },
        "history": [
          {
            "year": "1876",
            "author": "Henri Brocard",
            "note": "Presents the problem in Nouvelles Annales de Mathématiques."
          },
          {
            "year": "1913",
            "author": "Srinivasa Ramanujan",
            "note": "Independently studies equation and conjectures no other solutions exist."
          },
          {
            "year": "2000",
            "author": "Berndt & Galway",
            "note": "Verify computational search up to n = 10^9."
          },
          {
            "year": "2020",
            "author": "Distributed Computing",
            "note": "Extended verification to n = 10^12."
          }
        ]
      },
      "ko": {
        "name": "Brocard's Problem (Brown Numbers)",
        "subtitle": "Does n! + 1 = m² Have Only Three Solutions?",
        "field": "Diophantine Equations & Factorials",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can factorial fireworks n! + 1 land on a perfect square grid?",
            "analogy": "Calculate factorial n! (1×2×3...×n), then add 1. For 4, 4!+1 = 25 = 5². For 5, 5!+1 = 121 = 11². For 7, 7!+1 = 5041 = 71². Are there any other solutions in the universe?",
            "rules": [
              "Pick n and calculate n! + 1.",
              "Check if it equals a square m².",
              "Only 3 solutions known: (4, 5), (5, 11), (7, 71).",
              "Check n = 8, 9, 10... none work!"
            ],
            "mystery": "Indian genius Srinivasa Ramanujan independently studied this exact equation in 1913 and suspected no other solutions exist!",
            "funFact": "Pairs (n, m) satisfying the equation are called Brown Numbers."
          },
          "investigators": {
            "tagline": "Super-exponential growth and integer points on curves.",
            "analogy": "Factorials grow faster than any exponential function (n! ~ √(2πn) (n/e)^n). Overckers and Berndt verified that no further solutions exist up to n = 10^12.",
            "rules": [
              "Known solutions: (4, 5), (5, 11), (7, 71).",
              "Verified up to n = 1,000,000,000,000.",
              "Tied to the ABC conjecture."
            ],
            "mystery": "Does n! + 1 ever become square again, or does factorial growth permanently outpace squares?",
            "funFact": "Henri Brocard posed this in 1876 and 1885."
          },
          "pioneers": {
            "tagline": "Masser's ABC conjecture and modular prime factors of factorials.",
            "analogy": "Szpiro's conjecture and the ABC conjecture imply that n! + 1 = m² has only finitely many solutions.",
            "rules": [
              "Stirling's approximation and p-adic valuations.",
              "Dabrowski (1996) connected Brocard to ABC.",
              "Lean 4 Mathlib formalization."
            ],
            "mystery": "AI symbolic solver pipelines are analyzing modular congruences modulo Wilson primes.",
            "funFact": "Brocard's problem is one of the simplest Diophantine riddles to state, yet stubbornly open."
          }
        },
        "history": [
          {
            "year": "1876",
            "author": "Henri Brocard",
            "note": "Presents the problem in Nouvelles Annales de Mathématiques."
          },
          {
            "year": "1913",
            "author": "Srinivasa Ramanujan",
            "note": "Independently studies equation and conjectures no other solutions exist."
          },
          {
            "year": "2000",
            "author": "Berndt & Galway",
            "note": "Verify computational search up to n = 10^9."
          },
          {
            "year": "2020",
            "author": "Distributed Computing",
            "note": "Extended verification to n = 10^12."
          }
        ]
      },
      "zh-Hans": {
        "name": "布罗卡尔问题（布朗数）",
        "subtitle": "阶乘加一等于完全平方数 (n! + 1 = m²) 是否仅有三组解？",
        "field": "丢番图方程 & 阶乘数论",
        "statusBadge": "未解之谜",
        "grades": {
          "explorers": {
            "tagline": "阶乘火箭爆炸后加1，能否正好拼成一块整整齐齐的正方形？",
            "analogy": "计算阶乘 n!（1×2×3...×n）再加1。4!+1 = 25 = 5²，5!+1 = 121 = 11²，7!+1 = 5041 = 71²。在这三组解之后，数轴上还有没有第四组解？",
            "rules": [
              "选取 n 并计算 n! + 1。",
              "检验它是否能写成某个整数的平方 m²。",
              "目前仅已知三组解：(4, 5), (5, 11), (7, 71)。",
              "检验 8、9、10……全都不是平方数！"
            ],
            "mystery": "印度数学天才拉马努金在1913年独立研究了这个方程，并敏锐地断言绝无第四组解！",
            "funFact": "满足该方程的整数组 (n, m) 被数学界尊称为“布朗数” (Brown Numbers)。"
          },
          "investigators": {
            "tagline": "阶乘的超指数增长与曲线整点。",
            "analogy": "阶乘的增长速度远超指数函数（斯特林公式）。计算机已穷举验证至 n = 10^12，未出现任何新解。",
            "rules": [
              "仅存三组解：(4, 5), (5, 11), (7, 71)。",
              "已验证至 n = 1,000,000,000,000 无任何其他解。",
              "该问题可由强 ABC 猜想直接证明解有限。"
            ],
            "mystery": "阶乘在无穷远处是否还会偶遇完全平方数，还是说阶乘已永久甩开了平方数？",
            "funFact": "法国数学家亨利·布罗卡尔于1876年首次提出该问题。"
          },
          "pioneers": {
            "tagline": "马瑟的 ABC 猜想与阶乘的素因子分解结构。",
            "analogy": "斯皮罗猜想及 ABC 猜想均能严格证明 n! + 1 = m² 只有有限个整数解。",
            "rules": [
              "斯特林渐近展开与 p-进赋值分析。",
              "达布罗夫斯基 (1996) 证明 ABC 猜想蕴含布罗卡尔问题的解有限性。",
              "Lean 4 Mathlib 中的阶乘数论形式化。"
            ],
            "mystery": "AI 符号计算正在结合威尔逊素数同余特性进行更深层剪枝排查。",
            "funFact": "布罗卡尔问题表述极其简明，却是数论中最难以彻底征服的古典堡垒之一。"
          }
        },
        "history": [
          {
            "year": "1876",
            "author": "亨利·布罗卡尔",
            "note": "在法国数学学报上首次提出方程求整解问题。"
          },
          {
            "year": "1913",
            "author": "拉马努金",
            "note": "独立研究并猜想解只有 (4,5), (5,11), (7,71)。"
          },
          {
            "year": "2000",
            "author": "伯恩特 & 高威",
            "note": "运用超级计算机验证至 n = 10^9 无新解。"
          },
          {
            "year": "2020",
            "author": "分布式计算网络",
            "note": "将无解范围推至 n = 10^12。"
          }
        ]
      },
      "zh-Hant": {
        "name": "Brocard's Problem (Brown Numbers)",
        "subtitle": "Does n! + 1 = m² Have Only Three Solutions?",
        "field": "Diophantine Equations & Factorials",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can factorial fireworks n! + 1 land on a perfect square grid?",
            "analogy": "Calculate factorial n! (1×2×3...×n), then add 1. For 4, 4!+1 = 25 = 5². For 5, 5!+1 = 121 = 11². For 7, 7!+1 = 5041 = 71². Are there any other solutions in the universe?",
            "rules": [
              "Pick n and calculate n! + 1.",
              "Check if it equals a square m².",
              "Only 3 solutions known: (4, 5), (5, 11), (7, 71).",
              "Check n = 8, 9, 10... none work!"
            ],
            "mystery": "Indian genius Srinivasa Ramanujan independently studied this exact equation in 1913 and suspected no other solutions exist!",
            "funFact": "Pairs (n, m) satisfying the equation are called Brown Numbers."
          },
          "investigators": {
            "tagline": "Super-exponential growth and integer points on curves.",
            "analogy": "Factorials grow faster than any exponential function (n! ~ √(2πn) (n/e)^n). Overckers and Berndt verified that no further solutions exist up to n = 10^12.",
            "rules": [
              "Known solutions: (4, 5), (5, 11), (7, 71).",
              "Verified up to n = 1,000,000,000,000.",
              "Tied to the ABC conjecture."
            ],
            "mystery": "Does n! + 1 ever become square again, or does factorial growth permanently outpace squares?",
            "funFact": "Henri Brocard posed this in 1876 and 1885."
          },
          "pioneers": {
            "tagline": "Masser's ABC conjecture and modular prime factors of factorials.",
            "analogy": "Szpiro's conjecture and the ABC conjecture imply that n! + 1 = m² has only finitely many solutions.",
            "rules": [
              "Stirling's approximation and p-adic valuations.",
              "Dabrowski (1996) connected Brocard to ABC.",
              "Lean 4 Mathlib formalization."
            ],
            "mystery": "AI symbolic solver pipelines are analyzing modular congruences modulo Wilson primes.",
            "funFact": "Brocard's problem is one of the simplest Diophantine riddles to state, yet stubbornly open."
          }
        },
        "history": [
          {
            "year": "1876",
            "author": "Henri Brocard",
            "note": "Presents the problem in Nouvelles Annales de Mathématiques."
          },
          {
            "year": "1913",
            "author": "Srinivasa Ramanujan",
            "note": "Independently studies equation and conjectures no other solutions exist."
          },
          {
            "year": "2000",
            "author": "Berndt & Galway",
            "note": "Verify computational search up to n = 10^9."
          },
          {
            "year": "2020",
            "author": "Distributed Computing",
            "note": "Extended verification to n = 10^12."
          }
        ]
      }
    }
  },
  {
    "id": "gilbreath",
    "icon": "🔻",
    "difficulty": "All Ages",
    "domain": "number-theory",
    "category": "number-theory",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Data.Nat.Basic\naxiom GilbreathConjecture : ∀ (k : ℕ), k > 0 → true",
    "locales": {
      "en": {
        "name": "Gilbreath's Conjecture",
        "subtitle": "The Prime Difference Triangle Always Starts with 1",
        "field": "Combinatorial Number Theory",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can taking differences of primes repeatedly always leave a 1 at the door?",
            "analogy": "Write out the prime numbers: 2, 3, 5, 7, 11, 13, 17, 19... Take absolute differences between neighbors: 1, 2, 2, 4, 2, 4, 2... Repeat again: 1, 0, 2, 2, 2, 2... Norman Gilbreath noticed that EVERY single row begins with the number 1!",
            "rules": [
              "Row 0: 2, 3, 5, 7, 11, 13, 17...",
              "Row 1: |3-2|=1, |5-3|=2, |7-5|=2...",
              "Row 2: |2-1|=1, |2-2|=0, |4-2|=2...",
              "Notice the first number is always 1!"
            ],
            "mystery": "Verified by Odlyzko on supercomputers for the first 340,000,000 primes without a single exception!",
            "funFact": "The only reason 1 appears is because 2 is the ONLY even prime. All other primes are odd, making differences even!"
          },
          "investigators": {
            "tagline": "Parity arguments and Odlyzko's formulation.",
            "analogy": "After the first step, every entry in row 1 is even except the first entry 1. Subtracting 0s and 2s can preserve 1s on the left boundary as long as prime gaps do not grow too wildly.",
            "rules": [
              "Row k entries belong to {0, 2} for sufficiently many steps.",
              "Odlyzko (1993): Holds for any sequence starting with 2 then odd numbers with bounded gaps."
            ],
            "mystery": "Can we prove that prime gaps p_{n+1} - p_n never exceed the threshold needed to disrupt the 1s?",
            "funFact": "Norman Gilbreath presented this problem in 1958."
          },
          "pioneers": {
            "tagline": "Cellular automata and dynamical boundary propagation.",
            "analogy": "The absolute difference operator modulo 2 corresponds to rule 102/60 elementary cellular automata.",
            "rules": [
              "Discrete difference operator d_k.",
              "Boundary stability theorem.",
              "Lean 4 formalized inductive definitions."
            ],
            "mystery": "AI automated reasoning systems are modeling the problem as a deterministic discrete dynamical system.",
            "funFact": "Gilbreath's conjecture shows how profound simplicity arises from prime complexity."
          }
        },
        "history": [
          {
            "year": "1958",
            "author": "Norman Gilbreath",
            "note": "Presents difference triangle property."
          },
          {
            "year": "1993",
            "author": "Andrew Odlyzko",
            "note": "Verifies 340 million primes and establishes theoretical framework."
          }
        ]
      },
      "de": {
        "name": "Gilbreath's Conjecture",
        "subtitle": "The Prime Difference Triangle Always Starts with 1",
        "field": "Combinatorial Number Theory",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can taking differences of primes repeatedly always leave a 1 at the door?",
            "analogy": "Write out the prime numbers: 2, 3, 5, 7, 11, 13, 17, 19... Take absolute differences between neighbors: 1, 2, 2, 4, 2, 4, 2... Repeat again: 1, 0, 2, 2, 2, 2... Norman Gilbreath noticed that EVERY single row begins with the number 1!",
            "rules": [
              "Row 0: 2, 3, 5, 7, 11, 13, 17...",
              "Row 1: |3-2|=1, |5-3|=2, |7-5|=2...",
              "Row 2: |2-1|=1, |2-2|=0, |4-2|=2...",
              "Notice the first number is always 1!"
            ],
            "mystery": "Verified by Odlyzko on supercomputers for the first 340,000,000 primes without a single exception!",
            "funFact": "The only reason 1 appears is because 2 is the ONLY even prime. All other primes are odd, making differences even!"
          },
          "investigators": {
            "tagline": "Parity arguments and Odlyzko's formulation.",
            "analogy": "After the first step, every entry in row 1 is even except the first entry 1. Subtracting 0s and 2s can preserve 1s on the left boundary as long as prime gaps do not grow too wildly.",
            "rules": [
              "Row k entries belong to {0, 2} for sufficiently many steps.",
              "Odlyzko (1993): Holds for any sequence starting with 2 then odd numbers with bounded gaps."
            ],
            "mystery": "Can we prove that prime gaps p_{n+1} - p_n never exceed the threshold needed to disrupt the 1s?",
            "funFact": "Norman Gilbreath presented this problem in 1958."
          },
          "pioneers": {
            "tagline": "Cellular automata and dynamical boundary propagation.",
            "analogy": "The absolute difference operator modulo 2 corresponds to rule 102/60 elementary cellular automata.",
            "rules": [
              "Discrete difference operator d_k.",
              "Boundary stability theorem.",
              "Lean 4 formalized inductive definitions."
            ],
            "mystery": "AI automated reasoning systems are modeling the problem as a deterministic discrete dynamical system.",
            "funFact": "Gilbreath's conjecture shows how profound simplicity arises from prime complexity."
          }
        },
        "history": [
          {
            "year": "1958",
            "author": "Norman Gilbreath",
            "note": "Presents difference triangle property."
          },
          {
            "year": "1993",
            "author": "Andrew Odlyzko",
            "note": "Verifies 340 million primes and establishes theoretical framework."
          }
        ]
      },
      "fr": {
        "name": "Gilbreath's Conjecture",
        "subtitle": "The Prime Difference Triangle Always Starts with 1",
        "field": "Combinatorial Number Theory",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can taking differences of primes repeatedly always leave a 1 at the door?",
            "analogy": "Write out the prime numbers: 2, 3, 5, 7, 11, 13, 17, 19... Take absolute differences between neighbors: 1, 2, 2, 4, 2, 4, 2... Repeat again: 1, 0, 2, 2, 2, 2... Norman Gilbreath noticed that EVERY single row begins with the number 1!",
            "rules": [
              "Row 0: 2, 3, 5, 7, 11, 13, 17...",
              "Row 1: |3-2|=1, |5-3|=2, |7-5|=2...",
              "Row 2: |2-1|=1, |2-2|=0, |4-2|=2...",
              "Notice the first number is always 1!"
            ],
            "mystery": "Verified by Odlyzko on supercomputers for the first 340,000,000 primes without a single exception!",
            "funFact": "The only reason 1 appears is because 2 is the ONLY even prime. All other primes are odd, making differences even!"
          },
          "investigators": {
            "tagline": "Parity arguments and Odlyzko's formulation.",
            "analogy": "After the first step, every entry in row 1 is even except the first entry 1. Subtracting 0s and 2s can preserve 1s on the left boundary as long as prime gaps do not grow too wildly.",
            "rules": [
              "Row k entries belong to {0, 2} for sufficiently many steps.",
              "Odlyzko (1993): Holds for any sequence starting with 2 then odd numbers with bounded gaps."
            ],
            "mystery": "Can we prove that prime gaps p_{n+1} - p_n never exceed the threshold needed to disrupt the 1s?",
            "funFact": "Norman Gilbreath presented this problem in 1958."
          },
          "pioneers": {
            "tagline": "Cellular automata and dynamical boundary propagation.",
            "analogy": "The absolute difference operator modulo 2 corresponds to rule 102/60 elementary cellular automata.",
            "rules": [
              "Discrete difference operator d_k.",
              "Boundary stability theorem.",
              "Lean 4 formalized inductive definitions."
            ],
            "mystery": "AI automated reasoning systems are modeling the problem as a deterministic discrete dynamical system.",
            "funFact": "Gilbreath's conjecture shows how profound simplicity arises from prime complexity."
          }
        },
        "history": [
          {
            "year": "1958",
            "author": "Norman Gilbreath",
            "note": "Presents difference triangle property."
          },
          {
            "year": "1993",
            "author": "Andrew Odlyzko",
            "note": "Verifies 340 million primes and establishes theoretical framework."
          }
        ]
      },
      "it": {
        "name": "Gilbreath's Conjecture",
        "subtitle": "The Prime Difference Triangle Always Starts with 1",
        "field": "Combinatorial Number Theory",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can taking differences of primes repeatedly always leave a 1 at the door?",
            "analogy": "Write out the prime numbers: 2, 3, 5, 7, 11, 13, 17, 19... Take absolute differences between neighbors: 1, 2, 2, 4, 2, 4, 2... Repeat again: 1, 0, 2, 2, 2, 2... Norman Gilbreath noticed that EVERY single row begins with the number 1!",
            "rules": [
              "Row 0: 2, 3, 5, 7, 11, 13, 17...",
              "Row 1: |3-2|=1, |5-3|=2, |7-5|=2...",
              "Row 2: |2-1|=1, |2-2|=0, |4-2|=2...",
              "Notice the first number is always 1!"
            ],
            "mystery": "Verified by Odlyzko on supercomputers for the first 340,000,000 primes without a single exception!",
            "funFact": "The only reason 1 appears is because 2 is the ONLY even prime. All other primes are odd, making differences even!"
          },
          "investigators": {
            "tagline": "Parity arguments and Odlyzko's formulation.",
            "analogy": "After the first step, every entry in row 1 is even except the first entry 1. Subtracting 0s and 2s can preserve 1s on the left boundary as long as prime gaps do not grow too wildly.",
            "rules": [
              "Row k entries belong to {0, 2} for sufficiently many steps.",
              "Odlyzko (1993): Holds for any sequence starting with 2 then odd numbers with bounded gaps."
            ],
            "mystery": "Can we prove that prime gaps p_{n+1} - p_n never exceed the threshold needed to disrupt the 1s?",
            "funFact": "Norman Gilbreath presented this problem in 1958."
          },
          "pioneers": {
            "tagline": "Cellular automata and dynamical boundary propagation.",
            "analogy": "The absolute difference operator modulo 2 corresponds to rule 102/60 elementary cellular automata.",
            "rules": [
              "Discrete difference operator d_k.",
              "Boundary stability theorem.",
              "Lean 4 formalized inductive definitions."
            ],
            "mystery": "AI automated reasoning systems are modeling the problem as a deterministic discrete dynamical system.",
            "funFact": "Gilbreath's conjecture shows how profound simplicity arises from prime complexity."
          }
        },
        "history": [
          {
            "year": "1958",
            "author": "Norman Gilbreath",
            "note": "Presents difference triangle property."
          },
          {
            "year": "1993",
            "author": "Andrew Odlyzko",
            "note": "Verifies 340 million primes and establishes theoretical framework."
          }
        ]
      },
      "ja": {
        "name": "Gilbreath's Conjecture",
        "subtitle": "The Prime Difference Triangle Always Starts with 1",
        "field": "Combinatorial Number Theory",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can taking differences of primes repeatedly always leave a 1 at the door?",
            "analogy": "Write out the prime numbers: 2, 3, 5, 7, 11, 13, 17, 19... Take absolute differences between neighbors: 1, 2, 2, 4, 2, 4, 2... Repeat again: 1, 0, 2, 2, 2, 2... Norman Gilbreath noticed that EVERY single row begins with the number 1!",
            "rules": [
              "Row 0: 2, 3, 5, 7, 11, 13, 17...",
              "Row 1: |3-2|=1, |5-3|=2, |7-5|=2...",
              "Row 2: |2-1|=1, |2-2|=0, |4-2|=2...",
              "Notice the first number is always 1!"
            ],
            "mystery": "Verified by Odlyzko on supercomputers for the first 340,000,000 primes without a single exception!",
            "funFact": "The only reason 1 appears is because 2 is the ONLY even prime. All other primes are odd, making differences even!"
          },
          "investigators": {
            "tagline": "Parity arguments and Odlyzko's formulation.",
            "analogy": "After the first step, every entry in row 1 is even except the first entry 1. Subtracting 0s and 2s can preserve 1s on the left boundary as long as prime gaps do not grow too wildly.",
            "rules": [
              "Row k entries belong to {0, 2} for sufficiently many steps.",
              "Odlyzko (1993): Holds for any sequence starting with 2 then odd numbers with bounded gaps."
            ],
            "mystery": "Can we prove that prime gaps p_{n+1} - p_n never exceed the threshold needed to disrupt the 1s?",
            "funFact": "Norman Gilbreath presented this problem in 1958."
          },
          "pioneers": {
            "tagline": "Cellular automata and dynamical boundary propagation.",
            "analogy": "The absolute difference operator modulo 2 corresponds to rule 102/60 elementary cellular automata.",
            "rules": [
              "Discrete difference operator d_k.",
              "Boundary stability theorem.",
              "Lean 4 formalized inductive definitions."
            ],
            "mystery": "AI automated reasoning systems are modeling the problem as a deterministic discrete dynamical system.",
            "funFact": "Gilbreath's conjecture shows how profound simplicity arises from prime complexity."
          }
        },
        "history": [
          {
            "year": "1958",
            "author": "Norman Gilbreath",
            "note": "Presents difference triangle property."
          },
          {
            "year": "1993",
            "author": "Andrew Odlyzko",
            "note": "Verifies 340 million primes and establishes theoretical framework."
          }
        ]
      },
      "ko": {
        "name": "Gilbreath's Conjecture",
        "subtitle": "The Prime Difference Triangle Always Starts with 1",
        "field": "Combinatorial Number Theory",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can taking differences of primes repeatedly always leave a 1 at the door?",
            "analogy": "Write out the prime numbers: 2, 3, 5, 7, 11, 13, 17, 19... Take absolute differences between neighbors: 1, 2, 2, 4, 2, 4, 2... Repeat again: 1, 0, 2, 2, 2, 2... Norman Gilbreath noticed that EVERY single row begins with the number 1!",
            "rules": [
              "Row 0: 2, 3, 5, 7, 11, 13, 17...",
              "Row 1: |3-2|=1, |5-3|=2, |7-5|=2...",
              "Row 2: |2-1|=1, |2-2|=0, |4-2|=2...",
              "Notice the first number is always 1!"
            ],
            "mystery": "Verified by Odlyzko on supercomputers for the first 340,000,000 primes without a single exception!",
            "funFact": "The only reason 1 appears is because 2 is the ONLY even prime. All other primes are odd, making differences even!"
          },
          "investigators": {
            "tagline": "Parity arguments and Odlyzko's formulation.",
            "analogy": "After the first step, every entry in row 1 is even except the first entry 1. Subtracting 0s and 2s can preserve 1s on the left boundary as long as prime gaps do not grow too wildly.",
            "rules": [
              "Row k entries belong to {0, 2} for sufficiently many steps.",
              "Odlyzko (1993): Holds for any sequence starting with 2 then odd numbers with bounded gaps."
            ],
            "mystery": "Can we prove that prime gaps p_{n+1} - p_n never exceed the threshold needed to disrupt the 1s?",
            "funFact": "Norman Gilbreath presented this problem in 1958."
          },
          "pioneers": {
            "tagline": "Cellular automata and dynamical boundary propagation.",
            "analogy": "The absolute difference operator modulo 2 corresponds to rule 102/60 elementary cellular automata.",
            "rules": [
              "Discrete difference operator d_k.",
              "Boundary stability theorem.",
              "Lean 4 formalized inductive definitions."
            ],
            "mystery": "AI automated reasoning systems are modeling the problem as a deterministic discrete dynamical system.",
            "funFact": "Gilbreath's conjecture shows how profound simplicity arises from prime complexity."
          }
        },
        "history": [
          {
            "year": "1958",
            "author": "Norman Gilbreath",
            "note": "Presents difference triangle property."
          },
          {
            "year": "1993",
            "author": "Andrew Odlyzko",
            "note": "Verifies 340 million primes and establishes theoretical framework."
          }
        ]
      },
      "zh-Hans": {
        "name": "吉尔布雷斯猜想",
        "subtitle": "素数差分倒三角每行首项恒为 1",
        "field": "组合数论 & 素数差分",
        "statusBadge": "未解之谜",
        "grades": {
          "explorers": {
            "tagline": "对素数反复相减取绝对值，三角形每一层最左边的守门人为什么永远是 1？",
            "analogy": "排好素数：2, 3, 5, 7, 11, 13, 17... 计算相邻两数之差的绝对值，得到第二行：1, 2, 2, 4, 2, 4... 对第二行重复同样操作，得到第三行：1, 0, 2, 2, 2... 令人震惊的是，往下算几万层，每一行的第一个数居然全都是 1！",
            "rules": [
              "第0行：素数序列 2, 3, 5, 7, 11, 13...",
              "第1行差分：|3-2|=1, |5-3|=2, |7-5|=2...",
              "第2行差分：|2-1|=1, |2-2|=0, |4-2|=2...",
              "每一行的第一个数字无一例外全是 1！"
            ],
            "mystery": "奥德里兹科用超级计算机验证了前 3.4 亿个素数构成的差分三角，无一例外首项全是 1！",
            "funFact": "1 永远出现的核心奥秘在于 2 是唯一的偶素数，其余素数皆为奇数，奇数相减必为偶数！"
          },
          "investigators": {
            "tagline": "奇偶性引理与奥德里兹科公式。",
            "analogy": "从第1行起，除首项为1外其余项皆为偶数。对0和2的序列求差，只要素数间隙不发生极度剧烈的极端爆炸，首项1就会一直被稳定保持。",
            "rules": [
              "从某一步起除首项外所有数均变为 0 或 2。",
              "奥德里兹科证明：任何以2开头且间距有界的奇数序列均有此性质。"
            ],
            "mystery": "能否严格证明素数间隙的增长速率永远无法达到摧毁首项1的临界阈值？",
            "funFact": "诺曼·吉尔布雷斯于1958年提出该猜想。"
          },
          "pioneers": {
            "tagline": "元胞自动机动力学与边界传播机制。",
            "analogy": "模 2 绝对差分算子等价于一维初等元胞自动机规则。",
            "rules": [
              "离散差分算子序列。",
              "边界稳定性定理。",
              "Lean 4 中差分三角的归纳定义。"
            ],
            "mystery": "AI 自动化推理系统正在将该问题建模为离散动力系统的边界稳定性判定。",
            "funFact": "吉尔布雷斯猜想生动展现了极度复杂的素数序列中诞生的极致对称与秩序。"
          }
        },
        "history": [
          {
            "year": "1958",
            "author": "诺曼·吉尔布雷斯",
            "note": "首次发现并发表素数差分三角形性质。"
          },
          {
            "year": "1993",
            "author": "安德鲁·奥德里兹科",
            "note": "利用超级计算机验证 3.4 亿个素数并建立理论框架。"
          }
        ]
      },
      "zh-Hant": {
        "name": "Gilbreath's Conjecture",
        "subtitle": "The Prime Difference Triangle Always Starts with 1",
        "field": "Combinatorial Number Theory",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can taking differences of primes repeatedly always leave a 1 at the door?",
            "analogy": "Write out the prime numbers: 2, 3, 5, 7, 11, 13, 17, 19... Take absolute differences between neighbors: 1, 2, 2, 4, 2, 4, 2... Repeat again: 1, 0, 2, 2, 2, 2... Norman Gilbreath noticed that EVERY single row begins with the number 1!",
            "rules": [
              "Row 0: 2, 3, 5, 7, 11, 13, 17...",
              "Row 1: |3-2|=1, |5-3|=2, |7-5|=2...",
              "Row 2: |2-1|=1, |2-2|=0, |4-2|=2...",
              "Notice the first number is always 1!"
            ],
            "mystery": "Verified by Odlyzko on supercomputers for the first 340,000,000 primes without a single exception!",
            "funFact": "The only reason 1 appears is because 2 is the ONLY even prime. All other primes are odd, making differences even!"
          },
          "investigators": {
            "tagline": "Parity arguments and Odlyzko's formulation.",
            "analogy": "After the first step, every entry in row 1 is even except the first entry 1. Subtracting 0s and 2s can preserve 1s on the left boundary as long as prime gaps do not grow too wildly.",
            "rules": [
              "Row k entries belong to {0, 2} for sufficiently many steps.",
              "Odlyzko (1993): Holds for any sequence starting with 2 then odd numbers with bounded gaps."
            ],
            "mystery": "Can we prove that prime gaps p_{n+1} - p_n never exceed the threshold needed to disrupt the 1s?",
            "funFact": "Norman Gilbreath presented this problem in 1958."
          },
          "pioneers": {
            "tagline": "Cellular automata and dynamical boundary propagation.",
            "analogy": "The absolute difference operator modulo 2 corresponds to rule 102/60 elementary cellular automata.",
            "rules": [
              "Discrete difference operator d_k.",
              "Boundary stability theorem.",
              "Lean 4 formalized inductive definitions."
            ],
            "mystery": "AI automated reasoning systems are modeling the problem as a deterministic discrete dynamical system.",
            "funFact": "Gilbreath's conjecture shows how profound simplicity arises from prime complexity."
          }
        },
        "history": [
          {
            "year": "1958",
            "author": "Norman Gilbreath",
            "note": "Presents difference triangle property."
          },
          {
            "year": "1993",
            "author": "Andrew Odlyzko",
            "note": "Verifies 340 million primes and establishes theoretical framework."
          }
        ]
      }
    }
  },
  {
    "id": "giuga",
    "icon": "🏛️",
    "difficulty": "Gr 6+",
    "domain": "number-theory",
    "category": "number-theory",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Data.Nat.Prime\ndef GiugaSum (n : ℕ) : ℕ := sorry\ndef GiugaConjecture : Prop :=\n  ∀ (n : ℕ), n > 1 → (GiugaSum n ≡ n - 1 [MOD n] ↔ Nat.Prime n)",
    "locales": {
      "en": {
        "name": "Giuga's Conjecture (Agoh-Giuga)",
        "subtitle": "A Primality Test Powered by Sum of Powers",
        "field": "Congruences & Carmichael Numbers",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can a composite number disguise itself as a prime under Giuga's test?",
            "analogy": "For any prime p, Fermat's Little Theorem says 1^(p-1) + 2^(p-1) + ... + (p-1)^(p-1) ≡ -1 (mod p). Giuga conjectured that NO composite number can EVER satisfy this identity! Any fake prime must have over 19,000 digits!",
            "rules": [
              "Take integer n.",
              "Sum all powers i^(n-1) from i=1 to n-1.",
              "If prime, the sum always leaves remainder n-1 when divided by n.",
              "Could a composite number ever pass this test?"
            ],
            "mystery": "Giuga numbers are composites where each prime factor p satisfies p² | (n/p - 1). Only 13 Giuga numbers are known, and none pass the full test!",
            "funFact": "The smallest possible counterexample must be a product of at least 8,135 distinct prime factors!"
          },
          "investigators": {
            "tagline": "Equivalence with Agoh's Bernoulli number criterion.",
            "analogy": "Takashi Agoh proved in 1990 that Giuga's conjecture is completely equivalent to n B_{n-1} ≡ -1 (mod n), connecting the problem to Bernoulli numbers.",
            "rules": [
              "Agoh-Giuga equivalence: p B_{p-1} ≡ -1 (mod p).",
              "Giuga composite requires p | (n/p - 1) for all p | n.",
              "Borwein et al. (1996) proved counterexamples have > 13,887 digits."
            ],
            "mystery": "Is every Giuga number composite excluded, or can analytic number theory prove that the sum of prime reciprocal conditions cannot equal 1?",
            "funFact": "Giuseppe Giuga proposed the conjecture in 1950."
          },
          "pioneers": {
            "tagline": "von Staudt-Clausen theorem and p-adic L-functions.",
            "analogy": "The denominator of Bernoulli numbers is controlled by the von Staudt-Clausen theorem: denom(B_{2k}) = ∏_{(p-1)|2k} p.",
            "rules": [
              "von Staudt-Clausen theorem in Mathlib.",
              "Carmichael lambda function λ(n) divides n-1.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI proof engines are searching for contradiction in the fractional part equation ∑ 1/p - 1/n ∈ ℤ.",
            "funFact": "Giuga's conjecture represents the deepest known single-equation primality characterization."
          }
        },
        "history": [
          {
            "year": "1950",
            "author": "Giuseppe Giuga",
            "note": "Proposes the primality conjecture."
          },
          {
            "year": "1990",
            "author": "Takashi Agoh",
            "note": "Proves equivalence with Bernoulli number formulation."
          },
          {
            "year": "1996",
            "author": "Borwein, Borwein, Girgensohn & Pinner",
            "note": "Prove any counterexample must have > 13,887 digits (later improved to > 19,000)."
          }
        ]
      },
      "de": {
        "name": "Giuga's Conjecture (Agoh-Giuga)",
        "subtitle": "A Primality Test Powered by Sum of Powers",
        "field": "Congruences & Carmichael Numbers",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can a composite number disguise itself as a prime under Giuga's test?",
            "analogy": "For any prime p, Fermat's Little Theorem says 1^(p-1) + 2^(p-1) + ... + (p-1)^(p-1) ≡ -1 (mod p). Giuga conjectured that NO composite number can EVER satisfy this identity! Any fake prime must have over 19,000 digits!",
            "rules": [
              "Take integer n.",
              "Sum all powers i^(n-1) from i=1 to n-1.",
              "If prime, the sum always leaves remainder n-1 when divided by n.",
              "Could a composite number ever pass this test?"
            ],
            "mystery": "Giuga numbers are composites where each prime factor p satisfies p² | (n/p - 1). Only 13 Giuga numbers are known, and none pass the full test!",
            "funFact": "The smallest possible counterexample must be a product of at least 8,135 distinct prime factors!"
          },
          "investigators": {
            "tagline": "Equivalence with Agoh's Bernoulli number criterion.",
            "analogy": "Takashi Agoh proved in 1990 that Giuga's conjecture is completely equivalent to n B_{n-1} ≡ -1 (mod n), connecting the problem to Bernoulli numbers.",
            "rules": [
              "Agoh-Giuga equivalence: p B_{p-1} ≡ -1 (mod p).",
              "Giuga composite requires p | (n/p - 1) for all p | n.",
              "Borwein et al. (1996) proved counterexamples have > 13,887 digits."
            ],
            "mystery": "Is every Giuga number composite excluded, or can analytic number theory prove that the sum of prime reciprocal conditions cannot equal 1?",
            "funFact": "Giuseppe Giuga proposed the conjecture in 1950."
          },
          "pioneers": {
            "tagline": "von Staudt-Clausen theorem and p-adic L-functions.",
            "analogy": "The denominator of Bernoulli numbers is controlled by the von Staudt-Clausen theorem: denom(B_{2k}) = ∏_{(p-1)|2k} p.",
            "rules": [
              "von Staudt-Clausen theorem in Mathlib.",
              "Carmichael lambda function λ(n) divides n-1.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI proof engines are searching for contradiction in the fractional part equation ∑ 1/p - 1/n ∈ ℤ.",
            "funFact": "Giuga's conjecture represents the deepest known single-equation primality characterization."
          }
        },
        "history": [
          {
            "year": "1950",
            "author": "Giuseppe Giuga",
            "note": "Proposes the primality conjecture."
          },
          {
            "year": "1990",
            "author": "Takashi Agoh",
            "note": "Proves equivalence with Bernoulli number formulation."
          },
          {
            "year": "1996",
            "author": "Borwein, Borwein, Girgensohn & Pinner",
            "note": "Prove any counterexample must have > 13,887 digits (later improved to > 19,000)."
          }
        ]
      },
      "fr": {
        "name": "Giuga's Conjecture (Agoh-Giuga)",
        "subtitle": "A Primality Test Powered by Sum of Powers",
        "field": "Congruences & Carmichael Numbers",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can a composite number disguise itself as a prime under Giuga's test?",
            "analogy": "For any prime p, Fermat's Little Theorem says 1^(p-1) + 2^(p-1) + ... + (p-1)^(p-1) ≡ -1 (mod p). Giuga conjectured that NO composite number can EVER satisfy this identity! Any fake prime must have over 19,000 digits!",
            "rules": [
              "Take integer n.",
              "Sum all powers i^(n-1) from i=1 to n-1.",
              "If prime, the sum always leaves remainder n-1 when divided by n.",
              "Could a composite number ever pass this test?"
            ],
            "mystery": "Giuga numbers are composites where each prime factor p satisfies p² | (n/p - 1). Only 13 Giuga numbers are known, and none pass the full test!",
            "funFact": "The smallest possible counterexample must be a product of at least 8,135 distinct prime factors!"
          },
          "investigators": {
            "tagline": "Equivalence with Agoh's Bernoulli number criterion.",
            "analogy": "Takashi Agoh proved in 1990 that Giuga's conjecture is completely equivalent to n B_{n-1} ≡ -1 (mod n), connecting the problem to Bernoulli numbers.",
            "rules": [
              "Agoh-Giuga equivalence: p B_{p-1} ≡ -1 (mod p).",
              "Giuga composite requires p | (n/p - 1) for all p | n.",
              "Borwein et al. (1996) proved counterexamples have > 13,887 digits."
            ],
            "mystery": "Is every Giuga number composite excluded, or can analytic number theory prove that the sum of prime reciprocal conditions cannot equal 1?",
            "funFact": "Giuseppe Giuga proposed the conjecture in 1950."
          },
          "pioneers": {
            "tagline": "von Staudt-Clausen theorem and p-adic L-functions.",
            "analogy": "The denominator of Bernoulli numbers is controlled by the von Staudt-Clausen theorem: denom(B_{2k}) = ∏_{(p-1)|2k} p.",
            "rules": [
              "von Staudt-Clausen theorem in Mathlib.",
              "Carmichael lambda function λ(n) divides n-1.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI proof engines are searching for contradiction in the fractional part equation ∑ 1/p - 1/n ∈ ℤ.",
            "funFact": "Giuga's conjecture represents the deepest known single-equation primality characterization."
          }
        },
        "history": [
          {
            "year": "1950",
            "author": "Giuseppe Giuga",
            "note": "Proposes the primality conjecture."
          },
          {
            "year": "1990",
            "author": "Takashi Agoh",
            "note": "Proves equivalence with Bernoulli number formulation."
          },
          {
            "year": "1996",
            "author": "Borwein, Borwein, Girgensohn & Pinner",
            "note": "Prove any counterexample must have > 13,887 digits (later improved to > 19,000)."
          }
        ]
      },
      "it": {
        "name": "Giuga's Conjecture (Agoh-Giuga)",
        "subtitle": "A Primality Test Powered by Sum of Powers",
        "field": "Congruences & Carmichael Numbers",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can a composite number disguise itself as a prime under Giuga's test?",
            "analogy": "For any prime p, Fermat's Little Theorem says 1^(p-1) + 2^(p-1) + ... + (p-1)^(p-1) ≡ -1 (mod p). Giuga conjectured that NO composite number can EVER satisfy this identity! Any fake prime must have over 19,000 digits!",
            "rules": [
              "Take integer n.",
              "Sum all powers i^(n-1) from i=1 to n-1.",
              "If prime, the sum always leaves remainder n-1 when divided by n.",
              "Could a composite number ever pass this test?"
            ],
            "mystery": "Giuga numbers are composites where each prime factor p satisfies p² | (n/p - 1). Only 13 Giuga numbers are known, and none pass the full test!",
            "funFact": "The smallest possible counterexample must be a product of at least 8,135 distinct prime factors!"
          },
          "investigators": {
            "tagline": "Equivalence with Agoh's Bernoulli number criterion.",
            "analogy": "Takashi Agoh proved in 1990 that Giuga's conjecture is completely equivalent to n B_{n-1} ≡ -1 (mod n), connecting the problem to Bernoulli numbers.",
            "rules": [
              "Agoh-Giuga equivalence: p B_{p-1} ≡ -1 (mod p).",
              "Giuga composite requires p | (n/p - 1) for all p | n.",
              "Borwein et al. (1996) proved counterexamples have > 13,887 digits."
            ],
            "mystery": "Is every Giuga number composite excluded, or can analytic number theory prove that the sum of prime reciprocal conditions cannot equal 1?",
            "funFact": "Giuseppe Giuga proposed the conjecture in 1950."
          },
          "pioneers": {
            "tagline": "von Staudt-Clausen theorem and p-adic L-functions.",
            "analogy": "The denominator of Bernoulli numbers is controlled by the von Staudt-Clausen theorem: denom(B_{2k}) = ∏_{(p-1)|2k} p.",
            "rules": [
              "von Staudt-Clausen theorem in Mathlib.",
              "Carmichael lambda function λ(n) divides n-1.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI proof engines are searching for contradiction in the fractional part equation ∑ 1/p - 1/n ∈ ℤ.",
            "funFact": "Giuga's conjecture represents the deepest known single-equation primality characterization."
          }
        },
        "history": [
          {
            "year": "1950",
            "author": "Giuseppe Giuga",
            "note": "Proposes the primality conjecture."
          },
          {
            "year": "1990",
            "author": "Takashi Agoh",
            "note": "Proves equivalence with Bernoulli number formulation."
          },
          {
            "year": "1996",
            "author": "Borwein, Borwein, Girgensohn & Pinner",
            "note": "Prove any counterexample must have > 13,887 digits (later improved to > 19,000)."
          }
        ]
      },
      "ja": {
        "name": "Giuga's Conjecture (Agoh-Giuga)",
        "subtitle": "A Primality Test Powered by Sum of Powers",
        "field": "Congruences & Carmichael Numbers",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can a composite number disguise itself as a prime under Giuga's test?",
            "analogy": "For any prime p, Fermat's Little Theorem says 1^(p-1) + 2^(p-1) + ... + (p-1)^(p-1) ≡ -1 (mod p). Giuga conjectured that NO composite number can EVER satisfy this identity! Any fake prime must have over 19,000 digits!",
            "rules": [
              "Take integer n.",
              "Sum all powers i^(n-1) from i=1 to n-1.",
              "If prime, the sum always leaves remainder n-1 when divided by n.",
              "Could a composite number ever pass this test?"
            ],
            "mystery": "Giuga numbers are composites where each prime factor p satisfies p² | (n/p - 1). Only 13 Giuga numbers are known, and none pass the full test!",
            "funFact": "The smallest possible counterexample must be a product of at least 8,135 distinct prime factors!"
          },
          "investigators": {
            "tagline": "Equivalence with Agoh's Bernoulli number criterion.",
            "analogy": "Takashi Agoh proved in 1990 that Giuga's conjecture is completely equivalent to n B_{n-1} ≡ -1 (mod n), connecting the problem to Bernoulli numbers.",
            "rules": [
              "Agoh-Giuga equivalence: p B_{p-1} ≡ -1 (mod p).",
              "Giuga composite requires p | (n/p - 1) for all p | n.",
              "Borwein et al. (1996) proved counterexamples have > 13,887 digits."
            ],
            "mystery": "Is every Giuga number composite excluded, or can analytic number theory prove that the sum of prime reciprocal conditions cannot equal 1?",
            "funFact": "Giuseppe Giuga proposed the conjecture in 1950."
          },
          "pioneers": {
            "tagline": "von Staudt-Clausen theorem and p-adic L-functions.",
            "analogy": "The denominator of Bernoulli numbers is controlled by the von Staudt-Clausen theorem: denom(B_{2k}) = ∏_{(p-1)|2k} p.",
            "rules": [
              "von Staudt-Clausen theorem in Mathlib.",
              "Carmichael lambda function λ(n) divides n-1.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI proof engines are searching for contradiction in the fractional part equation ∑ 1/p - 1/n ∈ ℤ.",
            "funFact": "Giuga's conjecture represents the deepest known single-equation primality characterization."
          }
        },
        "history": [
          {
            "year": "1950",
            "author": "Giuseppe Giuga",
            "note": "Proposes the primality conjecture."
          },
          {
            "year": "1990",
            "author": "Takashi Agoh",
            "note": "Proves equivalence with Bernoulli number formulation."
          },
          {
            "year": "1996",
            "author": "Borwein, Borwein, Girgensohn & Pinner",
            "note": "Prove any counterexample must have > 13,887 digits (later improved to > 19,000)."
          }
        ]
      },
      "ko": {
        "name": "Giuga's Conjecture (Agoh-Giuga)",
        "subtitle": "A Primality Test Powered by Sum of Powers",
        "field": "Congruences & Carmichael Numbers",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can a composite number disguise itself as a prime under Giuga's test?",
            "analogy": "For any prime p, Fermat's Little Theorem says 1^(p-1) + 2^(p-1) + ... + (p-1)^(p-1) ≡ -1 (mod p). Giuga conjectured that NO composite number can EVER satisfy this identity! Any fake prime must have over 19,000 digits!",
            "rules": [
              "Take integer n.",
              "Sum all powers i^(n-1) from i=1 to n-1.",
              "If prime, the sum always leaves remainder n-1 when divided by n.",
              "Could a composite number ever pass this test?"
            ],
            "mystery": "Giuga numbers are composites where each prime factor p satisfies p² | (n/p - 1). Only 13 Giuga numbers are known, and none pass the full test!",
            "funFact": "The smallest possible counterexample must be a product of at least 8,135 distinct prime factors!"
          },
          "investigators": {
            "tagline": "Equivalence with Agoh's Bernoulli number criterion.",
            "analogy": "Takashi Agoh proved in 1990 that Giuga's conjecture is completely equivalent to n B_{n-1} ≡ -1 (mod n), connecting the problem to Bernoulli numbers.",
            "rules": [
              "Agoh-Giuga equivalence: p B_{p-1} ≡ -1 (mod p).",
              "Giuga composite requires p | (n/p - 1) for all p | n.",
              "Borwein et al. (1996) proved counterexamples have > 13,887 digits."
            ],
            "mystery": "Is every Giuga number composite excluded, or can analytic number theory prove that the sum of prime reciprocal conditions cannot equal 1?",
            "funFact": "Giuseppe Giuga proposed the conjecture in 1950."
          },
          "pioneers": {
            "tagline": "von Staudt-Clausen theorem and p-adic L-functions.",
            "analogy": "The denominator of Bernoulli numbers is controlled by the von Staudt-Clausen theorem: denom(B_{2k}) = ∏_{(p-1)|2k} p.",
            "rules": [
              "von Staudt-Clausen theorem in Mathlib.",
              "Carmichael lambda function λ(n) divides n-1.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI proof engines are searching for contradiction in the fractional part equation ∑ 1/p - 1/n ∈ ℤ.",
            "funFact": "Giuga's conjecture represents the deepest known single-equation primality characterization."
          }
        },
        "history": [
          {
            "year": "1950",
            "author": "Giuseppe Giuga",
            "note": "Proposes the primality conjecture."
          },
          {
            "year": "1990",
            "author": "Takashi Agoh",
            "note": "Proves equivalence with Bernoulli number formulation."
          },
          {
            "year": "1996",
            "author": "Borwein, Borwein, Girgensohn & Pinner",
            "note": "Prove any counterexample must have > 13,887 digits (later improved to > 19,000)."
          }
        ]
      },
      "zh-Hans": {
        "name": "久加猜想（阿戈-久加猜想）",
        "subtitle": "基于全幂次和的素数终极同余判别法",
        "field": "同余理论 & 卡迈克尔数",
        "statusBadge": "未解之谜",
        "grades": {
          "explorers": {
            "tagline": "一个合数能不能伪装得天衣无缝，在久加的严苛检验下冒充素数？",
            "analogy": "对任意素数 p，费马小定理告诉我们：1^(p-1) + 2^(p-1) + ... + (p-1)^(p-1) 模 p 的余数必定是 p-1。久加猜想断言：世界上绝没有任何一个合数能满足这一关系！任何潜在的伪装合数位数必定超过 19,000 位！",
            "rules": [
              "取正整数 n。",
              "计算 1 到 n-1 的所有 (n-1) 次方之和。",
              "如果是素数，被 n 除的余数必定永远是 n-1！",
              "合数是否有可能通过这项严苛的测试？"
            ],
            "mystery": "满足部分条件的合数被称为“久加数”。目前全世界仅发现 13 个久加数，且全都被猜想排除！",
            "funFact": "如果存在反例合数，它必定至少由 8,135 个不同素数相乘而成，庞大得无法想象！"
          },
          "investigators": {
            "tagline": "与阿戈的伯努利数判别准则等价。",
            "analogy": "阿戈于1990年证明该猜想等价于 n B_{n-1} ≡ -1 (mod n)，将整除性奇迹与伯努利数紧密联系在一起。",
            "rules": [
              "阿戈-久加等价定理：n B_{n-1} ≡ -1 (mod n)。",
              "反例合数要求对其每个素因子 p 均有 p | (n/p - 1)。",
              "博尔温等人证明反例至少有 19,907 位十进制数。"
            ],
            "mystery": "解析数论能否证明素数倒数和条件不可能恰好配平？",
            "funFact": "意大利数学家朱塞佩·久加于1950年提出。"
          },
          "pioneers": {
            "tagline": "冯·施陶特-克劳森定理与 p-进 L函数。",
            "analogy": "伯努利数的偶数阶分母由著名的施陶特-克劳森定理完全确定。",
            "rules": [
              "Mathlib 中的施陶特-克劳森定理。",
              "卡迈克尔函数 λ(n) 整除 n-1 条件。",
              "Lean 4 中的初等数论同余形式化。"
            ],
            "mystery": "AI 正在对分式倒数方程 ∑ 1/p - 1/n 为正整数的无解性开展全自动搜索。",
            "funFact": "久加猜想代表了人类已知最深邃、最优雅的单一方程素数判定法。"
          }
        },
        "history": [
          {
            "year": "1950",
            "author": "朱塞佩·久加",
            "note": "在意大利数学期刊发表猜想。"
          },
          {
            "year": "1990",
            "author": "阿戈",
            "note": "证明与伯努利数同余条件的等价性。"
          },
          {
            "year": "1996",
            "author": "博尔温团队",
            "note": "证明任何潜在反例的位数必须超过 19,000 位。"
          }
        ]
      },
      "zh-Hant": {
        "name": "Giuga's Conjecture (Agoh-Giuga)",
        "subtitle": "A Primality Test Powered by Sum of Powers",
        "field": "Congruences & Carmichael Numbers",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can a composite number disguise itself as a prime under Giuga's test?",
            "analogy": "For any prime p, Fermat's Little Theorem says 1^(p-1) + 2^(p-1) + ... + (p-1)^(p-1) ≡ -1 (mod p). Giuga conjectured that NO composite number can EVER satisfy this identity! Any fake prime must have over 19,000 digits!",
            "rules": [
              "Take integer n.",
              "Sum all powers i^(n-1) from i=1 to n-1.",
              "If prime, the sum always leaves remainder n-1 when divided by n.",
              "Could a composite number ever pass this test?"
            ],
            "mystery": "Giuga numbers are composites where each prime factor p satisfies p² | (n/p - 1). Only 13 Giuga numbers are known, and none pass the full test!",
            "funFact": "The smallest possible counterexample must be a product of at least 8,135 distinct prime factors!"
          },
          "investigators": {
            "tagline": "Equivalence with Agoh's Bernoulli number criterion.",
            "analogy": "Takashi Agoh proved in 1990 that Giuga's conjecture is completely equivalent to n B_{n-1} ≡ -1 (mod n), connecting the problem to Bernoulli numbers.",
            "rules": [
              "Agoh-Giuga equivalence: p B_{p-1} ≡ -1 (mod p).",
              "Giuga composite requires p | (n/p - 1) for all p | n.",
              "Borwein et al. (1996) proved counterexamples have > 13,887 digits."
            ],
            "mystery": "Is every Giuga number composite excluded, or can analytic number theory prove that the sum of prime reciprocal conditions cannot equal 1?",
            "funFact": "Giuseppe Giuga proposed the conjecture in 1950."
          },
          "pioneers": {
            "tagline": "von Staudt-Clausen theorem and p-adic L-functions.",
            "analogy": "The denominator of Bernoulli numbers is controlled by the von Staudt-Clausen theorem: denom(B_{2k}) = ∏_{(p-1)|2k} p.",
            "rules": [
              "von Staudt-Clausen theorem in Mathlib.",
              "Carmichael lambda function λ(n) divides n-1.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI proof engines are searching for contradiction in the fractional part equation ∑ 1/p - 1/n ∈ ℤ.",
            "funFact": "Giuga's conjecture represents the deepest known single-equation primality characterization."
          }
        },
        "history": [
          {
            "year": "1950",
            "author": "Giuseppe Giuga",
            "note": "Proposes the primality conjecture."
          },
          {
            "year": "1990",
            "author": "Takashi Agoh",
            "note": "Proves equivalence with Bernoulli number formulation."
          },
          {
            "year": "1996",
            "author": "Borwein, Borwein, Girgensohn & Pinner",
            "note": "Prove any counterexample must have > 13,887 digits (later improved to > 19,000)."
          }
        ]
      }
    }
  },
  {
    "id": "abc",
    "icon": "🔤",
    "difficulty": "Gr 9+",
    "domain": "number-theory",
    "category": "number-theory",
    "isMillennium": false,
    "isAIFrontier": true,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Data.Nat.Basic\ndef radical (n : ℕ) : ℕ := sorry\ndef ABCConjecture : Prop :=\n  ∀ (ε : ℝ), ε > 0 → ∃ (C : ℝ), C > 0 ∧\n    ∀ (a b c : ℕ), a > 0 → b > 0 → Nat.gcd a b = 1 → a + b = c →\n      (c : ℝ) < C * (radical (a * b * c) : ℝ)^(1 + ε)",
    "locales": {
      "en": {
        "name": "The ABC Conjecture",
        "subtitle": "Additive vs Multiplicative Numbers ($c < rad(abc)^{1+ε}$)",
        "field": "Arithmetic Geometry & Inter-Universal Teichmüller Theory",
        "statusBadge": "INTENSE DEBATE",
        "grades": {
          "explorers": {
            "tagline": "Can you make a giant number using tiny prime ingredients?",
            "analogy": "Take three numbers where a + b = c. Multiply together only their distinct prime factors—that's the 'radical' rad(abc). Can c be hugely bigger than this radical? The ABC conjecture says NO: addition cannot wildly magnify prime powers!",
            "rules": [
              "Choose coprime integers a + b = c.",
              "Find rad(abc) = product of unique primes in a, b, c.",
              "Compare c with rad(abc).",
              "Quality q = log(c) / log(rad(abc)) rarely exceeds 1."
            ],
            "mystery": "If ABC is true, Fermat's Last Theorem, Catalan's conjecture, and dozens of other famous problems are solved in just a few lines of algebra!",
            "funFact": "The highest quality triple known is 2 + 3¹⁰ × 109 = 23⁵, with q ≈ 1.6299."
          },
          "investigators": {
            "tagline": "Mochizuki's Inter-Universal Teichmüller (IUT) theory debate.",
            "analogy": "In 2012, Shinichi Mochizuki published 500+ pages claiming a proof using IUT. In 2018, Fields Medalists Peter Scholze and Jakob Stix visited Kyoto and identified a fatal gap in Corollary 3.12.",
            "rules": [
              "Mochizuki (2012): IUT Papers 1-4.",
              "Scholze-Stix (2018): 'Why ABC is still a conjecture'.",
              "The mathematical community remains divided."
            ],
            "mystery": "Can formal proof assistants like Lean 4 resolve the dispute by checking IUT line by line?",
            "funFact": "Joseph Oesterlé and David Masser formulated ABC in 1985."
          },
          "pioneers": {
            "tagline": "Anabelian geometry, Hodge theaters, and theta functions.",
            "analogy": "The ABC conjecture is intimately tied to Szpiro's conjecture on elliptic curves and Vojta's conjectures in Diophantine geometry.",
            "rules": [
              "Szpiro's conjecture on minimal discriminant.",
              "Vojta's general height inequality.",
              "Formalization of radical in Lean 4 Mathlib."
            ],
            "mystery": "AI formalization projects are actively translating Mochizuki's definitions into machine-checked type theory.",
            "funFact": "ABC is widely regarded as the most powerful open conjecture in Diophantine arithmetic."
          }
        },
        "history": [
          {
            "year": "1985",
            "author": "Oesterlé & Masser",
            "note": "Formulate the ABC conjecture."
          },
          {
            "year": "2012",
            "author": "Shinichi Mochizuki",
            "note": "Releases 500-page IUT proof series."
          },
          {
            "year": "2018",
            "author": "Peter Scholze & Jakob Stix",
            "note": "Publish report asserting a non-repaired gap in Corollary 3.12."
          },
          {
            "year": "2024–2026",
            "author": "Lean Formalization Community",
            "note": "Progress in formalizing prerequisites and Diophantine height theory."
          }
        ]
      },
      "de": {
        "name": "The ABC Conjecture",
        "subtitle": "Additive vs Multiplicative Numbers ($c < rad(abc)^{1+ε}$)",
        "field": "Arithmetic Geometry & Inter-Universal Teichmüller Theory",
        "statusBadge": "INTENSE DEBATE",
        "grades": {
          "explorers": {
            "tagline": "Can you make a giant number using tiny prime ingredients?",
            "analogy": "Take three numbers where a + b = c. Multiply together only their distinct prime factors—that's the 'radical' rad(abc). Can c be hugely bigger than this radical? The ABC conjecture says NO: addition cannot wildly magnify prime powers!",
            "rules": [
              "Choose coprime integers a + b = c.",
              "Find rad(abc) = product of unique primes in a, b, c.",
              "Compare c with rad(abc).",
              "Quality q = log(c) / log(rad(abc)) rarely exceeds 1."
            ],
            "mystery": "If ABC is true, Fermat's Last Theorem, Catalan's conjecture, and dozens of other famous problems are solved in just a few lines of algebra!",
            "funFact": "The highest quality triple known is 2 + 3¹⁰ × 109 = 23⁵, with q ≈ 1.6299."
          },
          "investigators": {
            "tagline": "Mochizuki's Inter-Universal Teichmüller (IUT) theory debate.",
            "analogy": "In 2012, Shinichi Mochizuki published 500+ pages claiming a proof using IUT. In 2018, Fields Medalists Peter Scholze and Jakob Stix visited Kyoto and identified a fatal gap in Corollary 3.12.",
            "rules": [
              "Mochizuki (2012): IUT Papers 1-4.",
              "Scholze-Stix (2018): 'Why ABC is still a conjecture'.",
              "The mathematical community remains divided."
            ],
            "mystery": "Can formal proof assistants like Lean 4 resolve the dispute by checking IUT line by line?",
            "funFact": "Joseph Oesterlé and David Masser formulated ABC in 1985."
          },
          "pioneers": {
            "tagline": "Anabelian geometry, Hodge theaters, and theta functions.",
            "analogy": "The ABC conjecture is intimately tied to Szpiro's conjecture on elliptic curves and Vojta's conjectures in Diophantine geometry.",
            "rules": [
              "Szpiro's conjecture on minimal discriminant.",
              "Vojta's general height inequality.",
              "Formalization of radical in Lean 4 Mathlib."
            ],
            "mystery": "AI formalization projects are actively translating Mochizuki's definitions into machine-checked type theory.",
            "funFact": "ABC is widely regarded as the most powerful open conjecture in Diophantine arithmetic."
          }
        },
        "history": [
          {
            "year": "1985",
            "author": "Oesterlé & Masser",
            "note": "Formulate the ABC conjecture."
          },
          {
            "year": "2012",
            "author": "Shinichi Mochizuki",
            "note": "Releases 500-page IUT proof series."
          },
          {
            "year": "2018",
            "author": "Peter Scholze & Jakob Stix",
            "note": "Publish report asserting a non-repaired gap in Corollary 3.12."
          },
          {
            "year": "2024–2026",
            "author": "Lean Formalization Community",
            "note": "Progress in formalizing prerequisites and Diophantine height theory."
          }
        ]
      },
      "fr": {
        "name": "The ABC Conjecture",
        "subtitle": "Additive vs Multiplicative Numbers ($c < rad(abc)^{1+ε}$)",
        "field": "Arithmetic Geometry & Inter-Universal Teichmüller Theory",
        "statusBadge": "INTENSE DEBATE",
        "grades": {
          "explorers": {
            "tagline": "Can you make a giant number using tiny prime ingredients?",
            "analogy": "Take three numbers where a + b = c. Multiply together only their distinct prime factors—that's the 'radical' rad(abc). Can c be hugely bigger than this radical? The ABC conjecture says NO: addition cannot wildly magnify prime powers!",
            "rules": [
              "Choose coprime integers a + b = c.",
              "Find rad(abc) = product of unique primes in a, b, c.",
              "Compare c with rad(abc).",
              "Quality q = log(c) / log(rad(abc)) rarely exceeds 1."
            ],
            "mystery": "If ABC is true, Fermat's Last Theorem, Catalan's conjecture, and dozens of other famous problems are solved in just a few lines of algebra!",
            "funFact": "The highest quality triple known is 2 + 3¹⁰ × 109 = 23⁵, with q ≈ 1.6299."
          },
          "investigators": {
            "tagline": "Mochizuki's Inter-Universal Teichmüller (IUT) theory debate.",
            "analogy": "In 2012, Shinichi Mochizuki published 500+ pages claiming a proof using IUT. In 2018, Fields Medalists Peter Scholze and Jakob Stix visited Kyoto and identified a fatal gap in Corollary 3.12.",
            "rules": [
              "Mochizuki (2012): IUT Papers 1-4.",
              "Scholze-Stix (2018): 'Why ABC is still a conjecture'.",
              "The mathematical community remains divided."
            ],
            "mystery": "Can formal proof assistants like Lean 4 resolve the dispute by checking IUT line by line?",
            "funFact": "Joseph Oesterlé and David Masser formulated ABC in 1985."
          },
          "pioneers": {
            "tagline": "Anabelian geometry, Hodge theaters, and theta functions.",
            "analogy": "The ABC conjecture is intimately tied to Szpiro's conjecture on elliptic curves and Vojta's conjectures in Diophantine geometry.",
            "rules": [
              "Szpiro's conjecture on minimal discriminant.",
              "Vojta's general height inequality.",
              "Formalization of radical in Lean 4 Mathlib."
            ],
            "mystery": "AI formalization projects are actively translating Mochizuki's definitions into machine-checked type theory.",
            "funFact": "ABC is widely regarded as the most powerful open conjecture in Diophantine arithmetic."
          }
        },
        "history": [
          {
            "year": "1985",
            "author": "Oesterlé & Masser",
            "note": "Formulate the ABC conjecture."
          },
          {
            "year": "2012",
            "author": "Shinichi Mochizuki",
            "note": "Releases 500-page IUT proof series."
          },
          {
            "year": "2018",
            "author": "Peter Scholze & Jakob Stix",
            "note": "Publish report asserting a non-repaired gap in Corollary 3.12."
          },
          {
            "year": "2024–2026",
            "author": "Lean Formalization Community",
            "note": "Progress in formalizing prerequisites and Diophantine height theory."
          }
        ]
      },
      "it": {
        "name": "The ABC Conjecture",
        "subtitle": "Additive vs Multiplicative Numbers ($c < rad(abc)^{1+ε}$)",
        "field": "Arithmetic Geometry & Inter-Universal Teichmüller Theory",
        "statusBadge": "INTENSE DEBATE",
        "grades": {
          "explorers": {
            "tagline": "Can you make a giant number using tiny prime ingredients?",
            "analogy": "Take three numbers where a + b = c. Multiply together only their distinct prime factors—that's the 'radical' rad(abc). Can c be hugely bigger than this radical? The ABC conjecture says NO: addition cannot wildly magnify prime powers!",
            "rules": [
              "Choose coprime integers a + b = c.",
              "Find rad(abc) = product of unique primes in a, b, c.",
              "Compare c with rad(abc).",
              "Quality q = log(c) / log(rad(abc)) rarely exceeds 1."
            ],
            "mystery": "If ABC is true, Fermat's Last Theorem, Catalan's conjecture, and dozens of other famous problems are solved in just a few lines of algebra!",
            "funFact": "The highest quality triple known is 2 + 3¹⁰ × 109 = 23⁵, with q ≈ 1.6299."
          },
          "investigators": {
            "tagline": "Mochizuki's Inter-Universal Teichmüller (IUT) theory debate.",
            "analogy": "In 2012, Shinichi Mochizuki published 500+ pages claiming a proof using IUT. In 2018, Fields Medalists Peter Scholze and Jakob Stix visited Kyoto and identified a fatal gap in Corollary 3.12.",
            "rules": [
              "Mochizuki (2012): IUT Papers 1-4.",
              "Scholze-Stix (2018): 'Why ABC is still a conjecture'.",
              "The mathematical community remains divided."
            ],
            "mystery": "Can formal proof assistants like Lean 4 resolve the dispute by checking IUT line by line?",
            "funFact": "Joseph Oesterlé and David Masser formulated ABC in 1985."
          },
          "pioneers": {
            "tagline": "Anabelian geometry, Hodge theaters, and theta functions.",
            "analogy": "The ABC conjecture is intimately tied to Szpiro's conjecture on elliptic curves and Vojta's conjectures in Diophantine geometry.",
            "rules": [
              "Szpiro's conjecture on minimal discriminant.",
              "Vojta's general height inequality.",
              "Formalization of radical in Lean 4 Mathlib."
            ],
            "mystery": "AI formalization projects are actively translating Mochizuki's definitions into machine-checked type theory.",
            "funFact": "ABC is widely regarded as the most powerful open conjecture in Diophantine arithmetic."
          }
        },
        "history": [
          {
            "year": "1985",
            "author": "Oesterlé & Masser",
            "note": "Formulate the ABC conjecture."
          },
          {
            "year": "2012",
            "author": "Shinichi Mochizuki",
            "note": "Releases 500-page IUT proof series."
          },
          {
            "year": "2018",
            "author": "Peter Scholze & Jakob Stix",
            "note": "Publish report asserting a non-repaired gap in Corollary 3.12."
          },
          {
            "year": "2024–2026",
            "author": "Lean Formalization Community",
            "note": "Progress in formalizing prerequisites and Diophantine height theory."
          }
        ]
      },
      "ja": {
        "name": "The ABC Conjecture",
        "subtitle": "Additive vs Multiplicative Numbers ($c < rad(abc)^{1+ε}$)",
        "field": "Arithmetic Geometry & Inter-Universal Teichmüller Theory",
        "statusBadge": "INTENSE DEBATE",
        "grades": {
          "explorers": {
            "tagline": "Can you make a giant number using tiny prime ingredients?",
            "analogy": "Take three numbers where a + b = c. Multiply together only their distinct prime factors—that's the 'radical' rad(abc). Can c be hugely bigger than this radical? The ABC conjecture says NO: addition cannot wildly magnify prime powers!",
            "rules": [
              "Choose coprime integers a + b = c.",
              "Find rad(abc) = product of unique primes in a, b, c.",
              "Compare c with rad(abc).",
              "Quality q = log(c) / log(rad(abc)) rarely exceeds 1."
            ],
            "mystery": "If ABC is true, Fermat's Last Theorem, Catalan's conjecture, and dozens of other famous problems are solved in just a few lines of algebra!",
            "funFact": "The highest quality triple known is 2 + 3¹⁰ × 109 = 23⁵, with q ≈ 1.6299."
          },
          "investigators": {
            "tagline": "Mochizuki's Inter-Universal Teichmüller (IUT) theory debate.",
            "analogy": "In 2012, Shinichi Mochizuki published 500+ pages claiming a proof using IUT. In 2018, Fields Medalists Peter Scholze and Jakob Stix visited Kyoto and identified a fatal gap in Corollary 3.12.",
            "rules": [
              "Mochizuki (2012): IUT Papers 1-4.",
              "Scholze-Stix (2018): 'Why ABC is still a conjecture'.",
              "The mathematical community remains divided."
            ],
            "mystery": "Can formal proof assistants like Lean 4 resolve the dispute by checking IUT line by line?",
            "funFact": "Joseph Oesterlé and David Masser formulated ABC in 1985."
          },
          "pioneers": {
            "tagline": "Anabelian geometry, Hodge theaters, and theta functions.",
            "analogy": "The ABC conjecture is intimately tied to Szpiro's conjecture on elliptic curves and Vojta's conjectures in Diophantine geometry.",
            "rules": [
              "Szpiro's conjecture on minimal discriminant.",
              "Vojta's general height inequality.",
              "Formalization of radical in Lean 4 Mathlib."
            ],
            "mystery": "AI formalization projects are actively translating Mochizuki's definitions into machine-checked type theory.",
            "funFact": "ABC is widely regarded as the most powerful open conjecture in Diophantine arithmetic."
          }
        },
        "history": [
          {
            "year": "1985",
            "author": "Oesterlé & Masser",
            "note": "Formulate the ABC conjecture."
          },
          {
            "year": "2012",
            "author": "Shinichi Mochizuki",
            "note": "Releases 500-page IUT proof series."
          },
          {
            "year": "2018",
            "author": "Peter Scholze & Jakob Stix",
            "note": "Publish report asserting a non-repaired gap in Corollary 3.12."
          },
          {
            "year": "2024–2026",
            "author": "Lean Formalization Community",
            "note": "Progress in formalizing prerequisites and Diophantine height theory."
          }
        ]
      },
      "ko": {
        "name": "The ABC Conjecture",
        "subtitle": "Additive vs Multiplicative Numbers ($c < rad(abc)^{1+ε}$)",
        "field": "Arithmetic Geometry & Inter-Universal Teichmüller Theory",
        "statusBadge": "INTENSE DEBATE",
        "grades": {
          "explorers": {
            "tagline": "Can you make a giant number using tiny prime ingredients?",
            "analogy": "Take three numbers where a + b = c. Multiply together only their distinct prime factors—that's the 'radical' rad(abc). Can c be hugely bigger than this radical? The ABC conjecture says NO: addition cannot wildly magnify prime powers!",
            "rules": [
              "Choose coprime integers a + b = c.",
              "Find rad(abc) = product of unique primes in a, b, c.",
              "Compare c with rad(abc).",
              "Quality q = log(c) / log(rad(abc)) rarely exceeds 1."
            ],
            "mystery": "If ABC is true, Fermat's Last Theorem, Catalan's conjecture, and dozens of other famous problems are solved in just a few lines of algebra!",
            "funFact": "The highest quality triple known is 2 + 3¹⁰ × 109 = 23⁵, with q ≈ 1.6299."
          },
          "investigators": {
            "tagline": "Mochizuki's Inter-Universal Teichmüller (IUT) theory debate.",
            "analogy": "In 2012, Shinichi Mochizuki published 500+ pages claiming a proof using IUT. In 2018, Fields Medalists Peter Scholze and Jakob Stix visited Kyoto and identified a fatal gap in Corollary 3.12.",
            "rules": [
              "Mochizuki (2012): IUT Papers 1-4.",
              "Scholze-Stix (2018): 'Why ABC is still a conjecture'.",
              "The mathematical community remains divided."
            ],
            "mystery": "Can formal proof assistants like Lean 4 resolve the dispute by checking IUT line by line?",
            "funFact": "Joseph Oesterlé and David Masser formulated ABC in 1985."
          },
          "pioneers": {
            "tagline": "Anabelian geometry, Hodge theaters, and theta functions.",
            "analogy": "The ABC conjecture is intimately tied to Szpiro's conjecture on elliptic curves and Vojta's conjectures in Diophantine geometry.",
            "rules": [
              "Szpiro's conjecture on minimal discriminant.",
              "Vojta's general height inequality.",
              "Formalization of radical in Lean 4 Mathlib."
            ],
            "mystery": "AI formalization projects are actively translating Mochizuki's definitions into machine-checked type theory.",
            "funFact": "ABC is widely regarded as the most powerful open conjecture in Diophantine arithmetic."
          }
        },
        "history": [
          {
            "year": "1985",
            "author": "Oesterlé & Masser",
            "note": "Formulate the ABC conjecture."
          },
          {
            "year": "2012",
            "author": "Shinichi Mochizuki",
            "note": "Releases 500-page IUT proof series."
          },
          {
            "year": "2018",
            "author": "Peter Scholze & Jakob Stix",
            "note": "Publish report asserting a non-repaired gap in Corollary 3.12."
          },
          {
            "year": "2024–2026",
            "author": "Lean Formalization Community",
            "note": "Progress in formalizing prerequisites and Diophantine height theory."
          }
        ]
      },
      "zh-Hans": {
        "name": "ABC猜想",
        "subtitle": "加法与乘法结构的终极平衡（$c < rad(abc)^{1+\\varepsilon}$）",
        "field": "算术几何 & 远阿贝尔几何",
        "statusBadge": "国际争议前沿",
        "grades": {
          "explorers": {
            "tagline": "如果把几个小素数揉成两个面团加在一起，能不能突然变出一个由极高幂次堆积成的庞然大物？",
            "analogy": "取互质的整数 a + b = c。把它们所有的互异素因子乘起来，称为“根基” rad(abc)。c 能够比这个根基大很多倍吗？ABC猜想断言：绝不可能！加法结构与乘法结构之间存在着神圣的宇宙锁链！",
            "rules": [
              "选取互质整数 a + b = c。",
              "计算根基 rad(abc)：a、b、c 所包含的不重复素数乘积。",
              "比较 c 与 rad(abc)。",
              "比值品质 q = log(c) / log(rad(abc)) 极罕见超过 1。"
            ],
            "mystery": "如果 ABC 猜想被证实，费马大定理、卡塔兰猜想以及几十个世界级数论难题只要短短几行初等代数就能直接推导解决！",
            "funFact": "目前人类找到的最高品质三元组是 2 + 3¹⁰ × 109 = 23⁵，品质高达 q ≈ 1.6299！"
          },
          "investigators": {
            "tagline": "望月新一的宇宙际泰希米勒理论 (IUT) 之争。",
            "analogy": "2012年望月新一发表500余页长文宣称证明了ABC猜想。2018年菲尔兹奖得主彼得·舒尔茨与雅各布·斯蒂克斯赴京都讨论，指出推论3.12存在无法弥合的逻辑断层。",
            "rules": [
              "望月新一 (2012)：宇宙际泰希米勒理论 I-IV。",
              "舒尔茨-斯蒂克斯 (2018)：发表反驳报告指出推论3.12严重断裂。",
              "国际主流数学界普遍认为证明尚未完成。"
            ],
            "mystery": "Lean 4 形式化系统能否逐行严格检验 IUT 理论，从而彻底平息国际争议？",
            "funFact": "约瑟夫·厄斯特莱和戴维·马瑟于1985年提出。"
          },
          "pioneers": {
            "tagline": "远阿贝尔几何、霍奇剧场与 Theta 连乘。",
            "analogy": "ABC猜想与椭圆曲线的斯皮罗猜想及丢番图几何中的沃伊塔猜想完全等价。",
            "rules": [
              "斯皮罗极小判别式猜想。",
              "沃伊塔代数高度不等式。",
              "Lean 4 Mathlib 中已形式化定义根基与ABC品质。"
            ],
            "mystery": "AI 正在尝试形式化望月理论中阿贝尔群与范畴的公理化框架。",
            "funFact": "ABC猜想被数学界公认为当今丢番图数论领域威力最强大的未解猜想。"
          }
        },
        "history": [
          {
            "year": "1985",
            "author": "厄斯特莱 & 马瑟",
            "note": "正式提出 ABC 猜想。"
          },
          {
            "year": "2012",
            "author": "望月新一",
            "note": "发布长达500页的宇宙际泰希米勒理论论文。"
          },
          {
            "year": "2018",
            "author": "彼得·舒尔茨 & 雅各布·斯蒂克斯",
            "note": "赴日讨论后发布报告指出证明中存在不可修复的关键断层。"
          },
          {
            "year": "2024–2026",
            "author": "Lean 形式化社区",
            "note": "机器证明社区推进算术几何高度不等式形式化。"
          }
        ]
      },
      "zh-Hant": {
        "name": "The ABC Conjecture",
        "subtitle": "Additive vs Multiplicative Numbers ($c < rad(abc)^{1+ε}$)",
        "field": "Arithmetic Geometry & Inter-Universal Teichmüller Theory",
        "statusBadge": "INTENSE DEBATE",
        "grades": {
          "explorers": {
            "tagline": "Can you make a giant number using tiny prime ingredients?",
            "analogy": "Take three numbers where a + b = c. Multiply together only their distinct prime factors—that's the 'radical' rad(abc). Can c be hugely bigger than this radical? The ABC conjecture says NO: addition cannot wildly magnify prime powers!",
            "rules": [
              "Choose coprime integers a + b = c.",
              "Find rad(abc) = product of unique primes in a, b, c.",
              "Compare c with rad(abc).",
              "Quality q = log(c) / log(rad(abc)) rarely exceeds 1."
            ],
            "mystery": "If ABC is true, Fermat's Last Theorem, Catalan's conjecture, and dozens of other famous problems are solved in just a few lines of algebra!",
            "funFact": "The highest quality triple known is 2 + 3¹⁰ × 109 = 23⁵, with q ≈ 1.6299."
          },
          "investigators": {
            "tagline": "Mochizuki's Inter-Universal Teichmüller (IUT) theory debate.",
            "analogy": "In 2012, Shinichi Mochizuki published 500+ pages claiming a proof using IUT. In 2018, Fields Medalists Peter Scholze and Jakob Stix visited Kyoto and identified a fatal gap in Corollary 3.12.",
            "rules": [
              "Mochizuki (2012): IUT Papers 1-4.",
              "Scholze-Stix (2018): 'Why ABC is still a conjecture'.",
              "The mathematical community remains divided."
            ],
            "mystery": "Can formal proof assistants like Lean 4 resolve the dispute by checking IUT line by line?",
            "funFact": "Joseph Oesterlé and David Masser formulated ABC in 1985."
          },
          "pioneers": {
            "tagline": "Anabelian geometry, Hodge theaters, and theta functions.",
            "analogy": "The ABC conjecture is intimately tied to Szpiro's conjecture on elliptic curves and Vojta's conjectures in Diophantine geometry.",
            "rules": [
              "Szpiro's conjecture on minimal discriminant.",
              "Vojta's general height inequality.",
              "Formalization of radical in Lean 4 Mathlib."
            ],
            "mystery": "AI formalization projects are actively translating Mochizuki's definitions into machine-checked type theory.",
            "funFact": "ABC is widely regarded as the most powerful open conjecture in Diophantine arithmetic."
          }
        },
        "history": [
          {
            "year": "1985",
            "author": "Oesterlé & Masser",
            "note": "Formulate the ABC conjecture."
          },
          {
            "year": "2012",
            "author": "Shinichi Mochizuki",
            "note": "Releases 500-page IUT proof series."
          },
          {
            "year": "2018",
            "author": "Peter Scholze & Jakob Stix",
            "note": "Publish report asserting a non-repaired gap in Corollary 3.12."
          },
          {
            "year": "2024–2026",
            "author": "Lean Formalization Community",
            "note": "Progress in formalizing prerequisites and Diophantine height theory."
          }
        ]
      }
    }
  },
  {
    "id": "erdos-straus",
    "icon": "🏺",
    "difficulty": "All Ages",
    "domain": "number-theory",
    "category": "number-theory",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Data.Nat.Basic\ndef ErdosStrausConjecture : Prop :=\n  ∀ (n : ℕ), n ≥ 2 → ∃ (x y z : ℕ), x > 0 ∧ y > 0 ∧ z > 0 ∧\n    4 * x * y * z = n * (y * z + x * z + x * y)",
    "locales": {
      "en": {
        "name": "Erdős-Straus Conjecture",
        "subtitle": "Decomposing 4/n into Three Unit Egyptian Fractions",
        "field": "Egyptian Fractions & Diophantine Equations",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can every pizza share 4/n be served using three unit slices 1/x + 1/y + 1/z?",
            "analogy": "Ancient Egyptians only wrote fractions with 1 on top (like 1/2, 1/3, 1/7). Paul Erdős and Ernst Straus conjectured in 1948 that for ANY whole number n ≥ 2, the fraction 4/n can always be written as 1/x + 1/y + 1/z using positive whole numbers x, y, z!",
            "rules": [
              "Choose any whole number n ≥ 2.",
              "Target fraction is 4/n.",
              "Find three integers x, y, z.",
              "Test: 4/5 = 1/2 + 1/4 + 1/20 (exact!)"
            ],
            "mystery": "Verified by supercomputers for all numbers up to n = 10^17 without finding any counterexample!",
            "funFact": "If n is not prime, the solution is easy. The entire mystery rests only on prime numbers n ≡ 1, 73, 97, 121... (mod 840)!"
          },
          "investigators": {
            "tagline": "Modular identities and small residue classes.",
            "analogy": "Schinzel and Vaughan proved asymptotic bounds showing the number of exceptional n up to N is bounded by N / (log N)^c.",
            "rules": [
              "Identity for n ≢ 1 (mod 4): 4/n = 1/n + 1/((n+1)/2) + ...",
              "Requires analyzing stubborn modular classes n ≡ 1 (mod 24).",
              "Lean 4 Mathlib verified unit fraction properties."
            ],
            "mystery": "Can modern analytic sieve methods eliminate the final obstinate residue classes modulo primes?",
            "funFact": "Formulated by Paul Erdős and Ernst G. Straus in 1948."
          },
          "pioneers": {
            "tagline": "Binary quadratic forms and modern sieve bounds.",
            "analogy": "The equation is equivalent to 4xyz - n(yz + xz + xy) = 0, representing a rational hypersurface in 3-space.",
            "rules": [
              "Vaughan (1970) exceptional set bound.",
              "Elsholtz & Tao (2014) counting solutions to 4/p = 1/x + 1/y + 1/z.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI symbolic algebra tools are deriving high-modulus polynomial identities to cover larger residue classes.",
            "funFact": "Erdős considered this one of his most beloved elementary problems."
          }
        },
        "history": [
          {
            "year": "1948",
            "author": "Erdős & Straus",
            "note": "Formulate the 4/n unit fraction conjecture."
          },
          {
            "year": "2014",
            "author": "Christian Elsholtz & Terence Tao",
            "note": "Prove sharp asymptotic formulas for the number of solutions."
          },
          {
            "year": "2020",
            "author": "Distributed Project",
            "note": "Verified up to n = 10^17."
          }
        ]
      },
      "de": {
        "name": "Erdős-Straus Conjecture",
        "subtitle": "Decomposing 4/n into Three Unit Egyptian Fractions",
        "field": "Egyptian Fractions & Diophantine Equations",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can every pizza share 4/n be served using three unit slices 1/x + 1/y + 1/z?",
            "analogy": "Ancient Egyptians only wrote fractions with 1 on top (like 1/2, 1/3, 1/7). Paul Erdős and Ernst Straus conjectured in 1948 that for ANY whole number n ≥ 2, the fraction 4/n can always be written as 1/x + 1/y + 1/z using positive whole numbers x, y, z!",
            "rules": [
              "Choose any whole number n ≥ 2.",
              "Target fraction is 4/n.",
              "Find three integers x, y, z.",
              "Test: 4/5 = 1/2 + 1/4 + 1/20 (exact!)"
            ],
            "mystery": "Verified by supercomputers for all numbers up to n = 10^17 without finding any counterexample!",
            "funFact": "If n is not prime, the solution is easy. The entire mystery rests only on prime numbers n ≡ 1, 73, 97, 121... (mod 840)!"
          },
          "investigators": {
            "tagline": "Modular identities and small residue classes.",
            "analogy": "Schinzel and Vaughan proved asymptotic bounds showing the number of exceptional n up to N is bounded by N / (log N)^c.",
            "rules": [
              "Identity for n ≢ 1 (mod 4): 4/n = 1/n + 1/((n+1)/2) + ...",
              "Requires analyzing stubborn modular classes n ≡ 1 (mod 24).",
              "Lean 4 Mathlib verified unit fraction properties."
            ],
            "mystery": "Can modern analytic sieve methods eliminate the final obstinate residue classes modulo primes?",
            "funFact": "Formulated by Paul Erdős and Ernst G. Straus in 1948."
          },
          "pioneers": {
            "tagline": "Binary quadratic forms and modern sieve bounds.",
            "analogy": "The equation is equivalent to 4xyz - n(yz + xz + xy) = 0, representing a rational hypersurface in 3-space.",
            "rules": [
              "Vaughan (1970) exceptional set bound.",
              "Elsholtz & Tao (2014) counting solutions to 4/p = 1/x + 1/y + 1/z.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI symbolic algebra tools are deriving high-modulus polynomial identities to cover larger residue classes.",
            "funFact": "Erdős considered this one of his most beloved elementary problems."
          }
        },
        "history": [
          {
            "year": "1948",
            "author": "Erdős & Straus",
            "note": "Formulate the 4/n unit fraction conjecture."
          },
          {
            "year": "2014",
            "author": "Christian Elsholtz & Terence Tao",
            "note": "Prove sharp asymptotic formulas for the number of solutions."
          },
          {
            "year": "2020",
            "author": "Distributed Project",
            "note": "Verified up to n = 10^17."
          }
        ]
      },
      "fr": {
        "name": "Erdős-Straus Conjecture",
        "subtitle": "Decomposing 4/n into Three Unit Egyptian Fractions",
        "field": "Egyptian Fractions & Diophantine Equations",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can every pizza share 4/n be served using three unit slices 1/x + 1/y + 1/z?",
            "analogy": "Ancient Egyptians only wrote fractions with 1 on top (like 1/2, 1/3, 1/7). Paul Erdős and Ernst Straus conjectured in 1948 that for ANY whole number n ≥ 2, the fraction 4/n can always be written as 1/x + 1/y + 1/z using positive whole numbers x, y, z!",
            "rules": [
              "Choose any whole number n ≥ 2.",
              "Target fraction is 4/n.",
              "Find three integers x, y, z.",
              "Test: 4/5 = 1/2 + 1/4 + 1/20 (exact!)"
            ],
            "mystery": "Verified by supercomputers for all numbers up to n = 10^17 without finding any counterexample!",
            "funFact": "If n is not prime, the solution is easy. The entire mystery rests only on prime numbers n ≡ 1, 73, 97, 121... (mod 840)!"
          },
          "investigators": {
            "tagline": "Modular identities and small residue classes.",
            "analogy": "Schinzel and Vaughan proved asymptotic bounds showing the number of exceptional n up to N is bounded by N / (log N)^c.",
            "rules": [
              "Identity for n ≢ 1 (mod 4): 4/n = 1/n + 1/((n+1)/2) + ...",
              "Requires analyzing stubborn modular classes n ≡ 1 (mod 24).",
              "Lean 4 Mathlib verified unit fraction properties."
            ],
            "mystery": "Can modern analytic sieve methods eliminate the final obstinate residue classes modulo primes?",
            "funFact": "Formulated by Paul Erdős and Ernst G. Straus in 1948."
          },
          "pioneers": {
            "tagline": "Binary quadratic forms and modern sieve bounds.",
            "analogy": "The equation is equivalent to 4xyz - n(yz + xz + xy) = 0, representing a rational hypersurface in 3-space.",
            "rules": [
              "Vaughan (1970) exceptional set bound.",
              "Elsholtz & Tao (2014) counting solutions to 4/p = 1/x + 1/y + 1/z.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI symbolic algebra tools are deriving high-modulus polynomial identities to cover larger residue classes.",
            "funFact": "Erdős considered this one of his most beloved elementary problems."
          }
        },
        "history": [
          {
            "year": "1948",
            "author": "Erdős & Straus",
            "note": "Formulate the 4/n unit fraction conjecture."
          },
          {
            "year": "2014",
            "author": "Christian Elsholtz & Terence Tao",
            "note": "Prove sharp asymptotic formulas for the number of solutions."
          },
          {
            "year": "2020",
            "author": "Distributed Project",
            "note": "Verified up to n = 10^17."
          }
        ]
      },
      "it": {
        "name": "Erdős-Straus Conjecture",
        "subtitle": "Decomposing 4/n into Three Unit Egyptian Fractions",
        "field": "Egyptian Fractions & Diophantine Equations",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can every pizza share 4/n be served using three unit slices 1/x + 1/y + 1/z?",
            "analogy": "Ancient Egyptians only wrote fractions with 1 on top (like 1/2, 1/3, 1/7). Paul Erdős and Ernst Straus conjectured in 1948 that for ANY whole number n ≥ 2, the fraction 4/n can always be written as 1/x + 1/y + 1/z using positive whole numbers x, y, z!",
            "rules": [
              "Choose any whole number n ≥ 2.",
              "Target fraction is 4/n.",
              "Find three integers x, y, z.",
              "Test: 4/5 = 1/2 + 1/4 + 1/20 (exact!)"
            ],
            "mystery": "Verified by supercomputers for all numbers up to n = 10^17 without finding any counterexample!",
            "funFact": "If n is not prime, the solution is easy. The entire mystery rests only on prime numbers n ≡ 1, 73, 97, 121... (mod 840)!"
          },
          "investigators": {
            "tagline": "Modular identities and small residue classes.",
            "analogy": "Schinzel and Vaughan proved asymptotic bounds showing the number of exceptional n up to N is bounded by N / (log N)^c.",
            "rules": [
              "Identity for n ≢ 1 (mod 4): 4/n = 1/n + 1/((n+1)/2) + ...",
              "Requires analyzing stubborn modular classes n ≡ 1 (mod 24).",
              "Lean 4 Mathlib verified unit fraction properties."
            ],
            "mystery": "Can modern analytic sieve methods eliminate the final obstinate residue classes modulo primes?",
            "funFact": "Formulated by Paul Erdős and Ernst G. Straus in 1948."
          },
          "pioneers": {
            "tagline": "Binary quadratic forms and modern sieve bounds.",
            "analogy": "The equation is equivalent to 4xyz - n(yz + xz + xy) = 0, representing a rational hypersurface in 3-space.",
            "rules": [
              "Vaughan (1970) exceptional set bound.",
              "Elsholtz & Tao (2014) counting solutions to 4/p = 1/x + 1/y + 1/z.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI symbolic algebra tools are deriving high-modulus polynomial identities to cover larger residue classes.",
            "funFact": "Erdős considered this one of his most beloved elementary problems."
          }
        },
        "history": [
          {
            "year": "1948",
            "author": "Erdős & Straus",
            "note": "Formulate the 4/n unit fraction conjecture."
          },
          {
            "year": "2014",
            "author": "Christian Elsholtz & Terence Tao",
            "note": "Prove sharp asymptotic formulas for the number of solutions."
          },
          {
            "year": "2020",
            "author": "Distributed Project",
            "note": "Verified up to n = 10^17."
          }
        ]
      },
      "ja": {
        "name": "Erdős-Straus Conjecture",
        "subtitle": "Decomposing 4/n into Three Unit Egyptian Fractions",
        "field": "Egyptian Fractions & Diophantine Equations",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can every pizza share 4/n be served using three unit slices 1/x + 1/y + 1/z?",
            "analogy": "Ancient Egyptians only wrote fractions with 1 on top (like 1/2, 1/3, 1/7). Paul Erdős and Ernst Straus conjectured in 1948 that for ANY whole number n ≥ 2, the fraction 4/n can always be written as 1/x + 1/y + 1/z using positive whole numbers x, y, z!",
            "rules": [
              "Choose any whole number n ≥ 2.",
              "Target fraction is 4/n.",
              "Find three integers x, y, z.",
              "Test: 4/5 = 1/2 + 1/4 + 1/20 (exact!)"
            ],
            "mystery": "Verified by supercomputers for all numbers up to n = 10^17 without finding any counterexample!",
            "funFact": "If n is not prime, the solution is easy. The entire mystery rests only on prime numbers n ≡ 1, 73, 97, 121... (mod 840)!"
          },
          "investigators": {
            "tagline": "Modular identities and small residue classes.",
            "analogy": "Schinzel and Vaughan proved asymptotic bounds showing the number of exceptional n up to N is bounded by N / (log N)^c.",
            "rules": [
              "Identity for n ≢ 1 (mod 4): 4/n = 1/n + 1/((n+1)/2) + ...",
              "Requires analyzing stubborn modular classes n ≡ 1 (mod 24).",
              "Lean 4 Mathlib verified unit fraction properties."
            ],
            "mystery": "Can modern analytic sieve methods eliminate the final obstinate residue classes modulo primes?",
            "funFact": "Formulated by Paul Erdős and Ernst G. Straus in 1948."
          },
          "pioneers": {
            "tagline": "Binary quadratic forms and modern sieve bounds.",
            "analogy": "The equation is equivalent to 4xyz - n(yz + xz + xy) = 0, representing a rational hypersurface in 3-space.",
            "rules": [
              "Vaughan (1970) exceptional set bound.",
              "Elsholtz & Tao (2014) counting solutions to 4/p = 1/x + 1/y + 1/z.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI symbolic algebra tools are deriving high-modulus polynomial identities to cover larger residue classes.",
            "funFact": "Erdős considered this one of his most beloved elementary problems."
          }
        },
        "history": [
          {
            "year": "1948",
            "author": "Erdős & Straus",
            "note": "Formulate the 4/n unit fraction conjecture."
          },
          {
            "year": "2014",
            "author": "Christian Elsholtz & Terence Tao",
            "note": "Prove sharp asymptotic formulas for the number of solutions."
          },
          {
            "year": "2020",
            "author": "Distributed Project",
            "note": "Verified up to n = 10^17."
          }
        ]
      },
      "ko": {
        "name": "Erdős-Straus Conjecture",
        "subtitle": "Decomposing 4/n into Three Unit Egyptian Fractions",
        "field": "Egyptian Fractions & Diophantine Equations",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can every pizza share 4/n be served using three unit slices 1/x + 1/y + 1/z?",
            "analogy": "Ancient Egyptians only wrote fractions with 1 on top (like 1/2, 1/3, 1/7). Paul Erdős and Ernst Straus conjectured in 1948 that for ANY whole number n ≥ 2, the fraction 4/n can always be written as 1/x + 1/y + 1/z using positive whole numbers x, y, z!",
            "rules": [
              "Choose any whole number n ≥ 2.",
              "Target fraction is 4/n.",
              "Find three integers x, y, z.",
              "Test: 4/5 = 1/2 + 1/4 + 1/20 (exact!)"
            ],
            "mystery": "Verified by supercomputers for all numbers up to n = 10^17 without finding any counterexample!",
            "funFact": "If n is not prime, the solution is easy. The entire mystery rests only on prime numbers n ≡ 1, 73, 97, 121... (mod 840)!"
          },
          "investigators": {
            "tagline": "Modular identities and small residue classes.",
            "analogy": "Schinzel and Vaughan proved asymptotic bounds showing the number of exceptional n up to N is bounded by N / (log N)^c.",
            "rules": [
              "Identity for n ≢ 1 (mod 4): 4/n = 1/n + 1/((n+1)/2) + ...",
              "Requires analyzing stubborn modular classes n ≡ 1 (mod 24).",
              "Lean 4 Mathlib verified unit fraction properties."
            ],
            "mystery": "Can modern analytic sieve methods eliminate the final obstinate residue classes modulo primes?",
            "funFact": "Formulated by Paul Erdős and Ernst G. Straus in 1948."
          },
          "pioneers": {
            "tagline": "Binary quadratic forms and modern sieve bounds.",
            "analogy": "The equation is equivalent to 4xyz - n(yz + xz + xy) = 0, representing a rational hypersurface in 3-space.",
            "rules": [
              "Vaughan (1970) exceptional set bound.",
              "Elsholtz & Tao (2014) counting solutions to 4/p = 1/x + 1/y + 1/z.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI symbolic algebra tools are deriving high-modulus polynomial identities to cover larger residue classes.",
            "funFact": "Erdős considered this one of his most beloved elementary problems."
          }
        },
        "history": [
          {
            "year": "1948",
            "author": "Erdős & Straus",
            "note": "Formulate the 4/n unit fraction conjecture."
          },
          {
            "year": "2014",
            "author": "Christian Elsholtz & Terence Tao",
            "note": "Prove sharp asymptotic formulas for the number of solutions."
          },
          {
            "year": "2020",
            "author": "Distributed Project",
            "note": "Verified up to n = 10^17."
          }
        ]
      },
      "zh-Hans": {
        "name": "埃尔德什-斯特劳斯猜想",
        "subtitle": "将 4/n 拆解为三个埃及单位分数之和",
        "field": "埃及分数 & 丢番图分析",
        "statusBadge": "未解之谜",
        "grades": {
          "explorers": {
            "tagline": "任意大小为 4/n 的披萨份额，能否永远切成三个分子为 1 的古埃及单分子薄片？",
            "analogy": "古埃及人算术只使用分子为1的单位分数（如 1/2, 1/3, 1/5）。1948年埃尔德什与斯特劳斯猜想：对任意整数 n ≥ 2，分数 4/n 永远可以拆分为三个正单位分数之和：4/n = 1/x + 1/y + 1/z！",
            "rules": [
              "选取任意正整数 n ≥ 2。",
              "目标分数为 4/n。",
              "寻找三个正整数 x, y, z 使得 4/n = 1/x + 1/y + 1/z。",
              "例如 n = 5：4/5 = 1/2 + 1/4 + 1/20，完美成立！"
            ],
            "mystery": "计算机已对直到 n = 10^17 的所有数字完成了地毯式验证，无一反例！",
            "funFact": "如果 n 是合数，分解很容易直接构造。该猜想的全部难点完全集中在模 840 余 1、73 等极少数极端素数上！"
          },
          "investigators": {
            "tagline": "模恒等式与极小剩余类。",
            "analogy": "辛策尔与沃恩利用大筛法证明了例外数即使存在，其数量在 N 以内也严格受到 N / (log N)^c 的压制。",
            "rules": [
              "模 4 非 1 时可直接写出显式构造恒等式。",
              "核心瓶颈集中在模 24 余 1 的顽固同余类。",
              "Lean 4 Mathlib 已完成单位分数基础定理的形式化。"
            ],
            "mystery": "现代解析筛法能否彻底消除模大素数遗留下的顽固剩余类？",
            "funFact": "保罗·埃尔德什与恩斯特·斯特劳斯于1948年共同提出。"
          },
          "pioneers": {
            "tagline": "二元二次型与现代大筛法上界。",
            "analogy": "方程等价于射影三维空间中的三维代数超曲面有理整点求解。",
            "rules": [
              "沃恩 (1970) 例外集上界估计。",
              "埃尔肖尔茨与陶哲轩 (2014) 关于 4/p 分解解数的精确渐近分析。",
              "Lean 4 代数几何超曲面形式化。"
            ],
            "mystery": "AI 符号代数正在自动合成高阶模同余恒等式，覆盖越来越多的剩余类。",
            "funFact": "埃尔德什本人将该猜想视为他最挚爱的初等数论明珠之一。"
          }
        },
        "history": [
          {
            "year": "1948",
            "author": "埃尔德什 & 斯特劳斯",
            "note": "正式提出 4/n 埃及分数猜想。"
          },
          {
            "year": "2014",
            "author": "埃尔肖尔茨 & 陶哲轩",
            "note": "证明了关于解数下界与均值分布的精细渐近公式。"
          },
          {
            "year": "2020",
            "author": "分布式计算团队",
            "note": "数值验证推向 10^17。"
          }
        ]
      },
      "zh-Hant": {
        "name": "Erdős-Straus Conjecture",
        "subtitle": "Decomposing 4/n into Three Unit Egyptian Fractions",
        "field": "Egyptian Fractions & Diophantine Equations",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can every pizza share 4/n be served using three unit slices 1/x + 1/y + 1/z?",
            "analogy": "Ancient Egyptians only wrote fractions with 1 on top (like 1/2, 1/3, 1/7). Paul Erdős and Ernst Straus conjectured in 1948 that for ANY whole number n ≥ 2, the fraction 4/n can always be written as 1/x + 1/y + 1/z using positive whole numbers x, y, z!",
            "rules": [
              "Choose any whole number n ≥ 2.",
              "Target fraction is 4/n.",
              "Find three integers x, y, z.",
              "Test: 4/5 = 1/2 + 1/4 + 1/20 (exact!)"
            ],
            "mystery": "Verified by supercomputers for all numbers up to n = 10^17 without finding any counterexample!",
            "funFact": "If n is not prime, the solution is easy. The entire mystery rests only on prime numbers n ≡ 1, 73, 97, 121... (mod 840)!"
          },
          "investigators": {
            "tagline": "Modular identities and small residue classes.",
            "analogy": "Schinzel and Vaughan proved asymptotic bounds showing the number of exceptional n up to N is bounded by N / (log N)^c.",
            "rules": [
              "Identity for n ≢ 1 (mod 4): 4/n = 1/n + 1/((n+1)/2) + ...",
              "Requires analyzing stubborn modular classes n ≡ 1 (mod 24).",
              "Lean 4 Mathlib verified unit fraction properties."
            ],
            "mystery": "Can modern analytic sieve methods eliminate the final obstinate residue classes modulo primes?",
            "funFact": "Formulated by Paul Erdős and Ernst G. Straus in 1948."
          },
          "pioneers": {
            "tagline": "Binary quadratic forms and modern sieve bounds.",
            "analogy": "The equation is equivalent to 4xyz - n(yz + xz + xy) = 0, representing a rational hypersurface in 3-space.",
            "rules": [
              "Vaughan (1970) exceptional set bound.",
              "Elsholtz & Tao (2014) counting solutions to 4/p = 1/x + 1/y + 1/z.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI symbolic algebra tools are deriving high-modulus polynomial identities to cover larger residue classes.",
            "funFact": "Erdős considered this one of his most beloved elementary problems."
          }
        },
        "history": [
          {
            "year": "1948",
            "author": "Erdős & Straus",
            "note": "Formulate the 4/n unit fraction conjecture."
          },
          {
            "year": "2014",
            "author": "Christian Elsholtz & Terence Tao",
            "note": "Prove sharp asymptotic formulas for the number of solutions."
          },
          {
            "year": "2020",
            "author": "Distributed Project",
            "note": "Verified up to n = 10^17."
          }
        ]
      }
    }
  },
  {
    "id": "odd-perfect",
    "icon": "💎",
    "difficulty": "All Ages",
    "domain": "number-theory",
    "category": "number-theory",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Data.Nat.Basic\ndef divisor_sum (n : ℕ) : ℕ := sorry\ndef IsPerfect (n : ℕ) : Prop := divisor_sum n = 2 * n\ndef OddPerfectConjecture : Prop :=\n  ∀ (n : ℕ), n > 0 → n % 2 = 1 → ¬ IsPerfect n",
    "locales": {
      "en": {
        "name": "Odd Perfect Numbers Problem",
        "subtitle": "Does Any Odd Number Equal the Sum of Its Proper Divisors?",
        "field": "Divisor Functions & Classical Arithmetic",
        "statusBadge": "OLDEST UNSOLVED",
        "grades": {
          "explorers": {
            "tagline": "Can an odd number ever be crowned with perfect mathematical harmony?",
            "analogy": "A number is 'perfect' if the sum of its factors equals itself (like 6 = 1+2+3, or 28 = 1+2+4+7+14). Every perfect number found since ancient Greece is EVEN! Does an ODD perfect number exist anywhere in the universe?",
            "rules": [
              "Check 6: factors 1, 2, 3 -> 1+2+3 = 6 (Perfect!).",
              "Check 28: factors 1, 2, 4, 7, 14 -> sum = 28 (Perfect!).",
              "All known perfect numbers end in 6 or 28 and are even.",
              "Could an odd number ever work?"
            ],
            "mystery": "Mathematicians have proved that if an odd perfect number exists, it must be GREATER than 10^1500 and have at least 101 prime factors!",
            "funFact": "Euler proved that any odd perfect number must have the special form p^(4k+1) · q²."
          },
          "investigators": {
            "tagline": "Euler's structural theorem and factor chain bounds.",
            "analogy": "If σ(N) = 2N with N odd, then N = p^α q_1^(2β_1) ... q_k^(2β_k) with p ≡ α ≡ 1 (mod 4). Ochem and Rao (2012) proved N > 10^1500 and k ≥ 9.",
            "rules": [
              "Euler's Form: N = p^a m² where p ≡ a ≡ 1 (mod 4).",
              "Lower bound: N > 10^1500 (Ochem & Rao, 2012).",
              "Total prime factors counting multiplicity: Ω(N) ≥ 101."
            ],
            "mystery": "Can sieve theory or cyclotomic divisor obstructions prove that no odd integer satisfies σ(N)/N = 2?",
            "funFact": "Known since the time of Euclid (circa 300 BC)."
          },
          "pioneers": {
            "tagline": "Abundancy index, superabundant numbers, and Lean 4 formalization.",
            "analogy": "The abundancy index I(n) = σ(n)/n is weakly multiplicative. The problem reduces to proving 2 is not in the image of odd integers.",
            "rules": [
              "Multiplicative property of σ(n).",
              "Cyclotomic factors Φ_d(p) in divisor sums.",
              "Mathlib formalization of perfect numbers."
            ],
            "mystery": "Automated reasoning systems are verifying the combinatorial factor chains to push prime count bounds.",
            "funFact": "The oldest open problem in arithmetic: over 2,300 years without resolution."
          }
        },
        "history": [
          {
            "year": "c. 300 BC",
            "author": "Euclid",
            "note": "Proves 2^(p-1)(2^p - 1) gives even perfect numbers in Elements."
          },
          {
            "year": "1750",
            "author": "Leonhard Euler",
            "note": "Proves structural theorem that any odd perfect number must have form p^(4k+1) q²."
          },
          {
            "year": "2012",
            "author": "Pascal Ochem & Michaël Rao",
            "note": "Prove that any odd perfect number exceeds 10^1500."
          }
        ]
      },
      "de": {
        "name": "Odd Perfect Numbers Problem",
        "subtitle": "Does Any Odd Number Equal the Sum of Its Proper Divisors?",
        "field": "Divisor Functions & Classical Arithmetic",
        "statusBadge": "OLDEST UNSOLVED",
        "grades": {
          "explorers": {
            "tagline": "Can an odd number ever be crowned with perfect mathematical harmony?",
            "analogy": "A number is 'perfect' if the sum of its factors equals itself (like 6 = 1+2+3, or 28 = 1+2+4+7+14). Every perfect number found since ancient Greece is EVEN! Does an ODD perfect number exist anywhere in the universe?",
            "rules": [
              "Check 6: factors 1, 2, 3 -> 1+2+3 = 6 (Perfect!).",
              "Check 28: factors 1, 2, 4, 7, 14 -> sum = 28 (Perfect!).",
              "All known perfect numbers end in 6 or 28 and are even.",
              "Could an odd number ever work?"
            ],
            "mystery": "Mathematicians have proved that if an odd perfect number exists, it must be GREATER than 10^1500 and have at least 101 prime factors!",
            "funFact": "Euler proved that any odd perfect number must have the special form p^(4k+1) · q²."
          },
          "investigators": {
            "tagline": "Euler's structural theorem and factor chain bounds.",
            "analogy": "If σ(N) = 2N with N odd, then N = p^α q_1^(2β_1) ... q_k^(2β_k) with p ≡ α ≡ 1 (mod 4). Ochem and Rao (2012) proved N > 10^1500 and k ≥ 9.",
            "rules": [
              "Euler's Form: N = p^a m² where p ≡ a ≡ 1 (mod 4).",
              "Lower bound: N > 10^1500 (Ochem & Rao, 2012).",
              "Total prime factors counting multiplicity: Ω(N) ≥ 101."
            ],
            "mystery": "Can sieve theory or cyclotomic divisor obstructions prove that no odd integer satisfies σ(N)/N = 2?",
            "funFact": "Known since the time of Euclid (circa 300 BC)."
          },
          "pioneers": {
            "tagline": "Abundancy index, superabundant numbers, and Lean 4 formalization.",
            "analogy": "The abundancy index I(n) = σ(n)/n is weakly multiplicative. The problem reduces to proving 2 is not in the image of odd integers.",
            "rules": [
              "Multiplicative property of σ(n).",
              "Cyclotomic factors Φ_d(p) in divisor sums.",
              "Mathlib formalization of perfect numbers."
            ],
            "mystery": "Automated reasoning systems are verifying the combinatorial factor chains to push prime count bounds.",
            "funFact": "The oldest open problem in arithmetic: over 2,300 years without resolution."
          }
        },
        "history": [
          {
            "year": "c. 300 BC",
            "author": "Euclid",
            "note": "Proves 2^(p-1)(2^p - 1) gives even perfect numbers in Elements."
          },
          {
            "year": "1750",
            "author": "Leonhard Euler",
            "note": "Proves structural theorem that any odd perfect number must have form p^(4k+1) q²."
          },
          {
            "year": "2012",
            "author": "Pascal Ochem & Michaël Rao",
            "note": "Prove that any odd perfect number exceeds 10^1500."
          }
        ]
      },
      "fr": {
        "name": "Odd Perfect Numbers Problem",
        "subtitle": "Does Any Odd Number Equal the Sum of Its Proper Divisors?",
        "field": "Divisor Functions & Classical Arithmetic",
        "statusBadge": "OLDEST UNSOLVED",
        "grades": {
          "explorers": {
            "tagline": "Can an odd number ever be crowned with perfect mathematical harmony?",
            "analogy": "A number is 'perfect' if the sum of its factors equals itself (like 6 = 1+2+3, or 28 = 1+2+4+7+14). Every perfect number found since ancient Greece is EVEN! Does an ODD perfect number exist anywhere in the universe?",
            "rules": [
              "Check 6: factors 1, 2, 3 -> 1+2+3 = 6 (Perfect!).",
              "Check 28: factors 1, 2, 4, 7, 14 -> sum = 28 (Perfect!).",
              "All known perfect numbers end in 6 or 28 and are even.",
              "Could an odd number ever work?"
            ],
            "mystery": "Mathematicians have proved that if an odd perfect number exists, it must be GREATER than 10^1500 and have at least 101 prime factors!",
            "funFact": "Euler proved that any odd perfect number must have the special form p^(4k+1) · q²."
          },
          "investigators": {
            "tagline": "Euler's structural theorem and factor chain bounds.",
            "analogy": "If σ(N) = 2N with N odd, then N = p^α q_1^(2β_1) ... q_k^(2β_k) with p ≡ α ≡ 1 (mod 4). Ochem and Rao (2012) proved N > 10^1500 and k ≥ 9.",
            "rules": [
              "Euler's Form: N = p^a m² where p ≡ a ≡ 1 (mod 4).",
              "Lower bound: N > 10^1500 (Ochem & Rao, 2012).",
              "Total prime factors counting multiplicity: Ω(N) ≥ 101."
            ],
            "mystery": "Can sieve theory or cyclotomic divisor obstructions prove that no odd integer satisfies σ(N)/N = 2?",
            "funFact": "Known since the time of Euclid (circa 300 BC)."
          },
          "pioneers": {
            "tagline": "Abundancy index, superabundant numbers, and Lean 4 formalization.",
            "analogy": "The abundancy index I(n) = σ(n)/n is weakly multiplicative. The problem reduces to proving 2 is not in the image of odd integers.",
            "rules": [
              "Multiplicative property of σ(n).",
              "Cyclotomic factors Φ_d(p) in divisor sums.",
              "Mathlib formalization of perfect numbers."
            ],
            "mystery": "Automated reasoning systems are verifying the combinatorial factor chains to push prime count bounds.",
            "funFact": "The oldest open problem in arithmetic: over 2,300 years without resolution."
          }
        },
        "history": [
          {
            "year": "c. 300 BC",
            "author": "Euclid",
            "note": "Proves 2^(p-1)(2^p - 1) gives even perfect numbers in Elements."
          },
          {
            "year": "1750",
            "author": "Leonhard Euler",
            "note": "Proves structural theorem that any odd perfect number must have form p^(4k+1) q²."
          },
          {
            "year": "2012",
            "author": "Pascal Ochem & Michaël Rao",
            "note": "Prove that any odd perfect number exceeds 10^1500."
          }
        ]
      },
      "it": {
        "name": "Odd Perfect Numbers Problem",
        "subtitle": "Does Any Odd Number Equal the Sum of Its Proper Divisors?",
        "field": "Divisor Functions & Classical Arithmetic",
        "statusBadge": "OLDEST UNSOLVED",
        "grades": {
          "explorers": {
            "tagline": "Can an odd number ever be crowned with perfect mathematical harmony?",
            "analogy": "A number is 'perfect' if the sum of its factors equals itself (like 6 = 1+2+3, or 28 = 1+2+4+7+14). Every perfect number found since ancient Greece is EVEN! Does an ODD perfect number exist anywhere in the universe?",
            "rules": [
              "Check 6: factors 1, 2, 3 -> 1+2+3 = 6 (Perfect!).",
              "Check 28: factors 1, 2, 4, 7, 14 -> sum = 28 (Perfect!).",
              "All known perfect numbers end in 6 or 28 and are even.",
              "Could an odd number ever work?"
            ],
            "mystery": "Mathematicians have proved that if an odd perfect number exists, it must be GREATER than 10^1500 and have at least 101 prime factors!",
            "funFact": "Euler proved that any odd perfect number must have the special form p^(4k+1) · q²."
          },
          "investigators": {
            "tagline": "Euler's structural theorem and factor chain bounds.",
            "analogy": "If σ(N) = 2N with N odd, then N = p^α q_1^(2β_1) ... q_k^(2β_k) with p ≡ α ≡ 1 (mod 4). Ochem and Rao (2012) proved N > 10^1500 and k ≥ 9.",
            "rules": [
              "Euler's Form: N = p^a m² where p ≡ a ≡ 1 (mod 4).",
              "Lower bound: N > 10^1500 (Ochem & Rao, 2012).",
              "Total prime factors counting multiplicity: Ω(N) ≥ 101."
            ],
            "mystery": "Can sieve theory or cyclotomic divisor obstructions prove that no odd integer satisfies σ(N)/N = 2?",
            "funFact": "Known since the time of Euclid (circa 300 BC)."
          },
          "pioneers": {
            "tagline": "Abundancy index, superabundant numbers, and Lean 4 formalization.",
            "analogy": "The abundancy index I(n) = σ(n)/n is weakly multiplicative. The problem reduces to proving 2 is not in the image of odd integers.",
            "rules": [
              "Multiplicative property of σ(n).",
              "Cyclotomic factors Φ_d(p) in divisor sums.",
              "Mathlib formalization of perfect numbers."
            ],
            "mystery": "Automated reasoning systems are verifying the combinatorial factor chains to push prime count bounds.",
            "funFact": "The oldest open problem in arithmetic: over 2,300 years without resolution."
          }
        },
        "history": [
          {
            "year": "c. 300 BC",
            "author": "Euclid",
            "note": "Proves 2^(p-1)(2^p - 1) gives even perfect numbers in Elements."
          },
          {
            "year": "1750",
            "author": "Leonhard Euler",
            "note": "Proves structural theorem that any odd perfect number must have form p^(4k+1) q²."
          },
          {
            "year": "2012",
            "author": "Pascal Ochem & Michaël Rao",
            "note": "Prove that any odd perfect number exceeds 10^1500."
          }
        ]
      },
      "ja": {
        "name": "Odd Perfect Numbers Problem",
        "subtitle": "Does Any Odd Number Equal the Sum of Its Proper Divisors?",
        "field": "Divisor Functions & Classical Arithmetic",
        "statusBadge": "OLDEST UNSOLVED",
        "grades": {
          "explorers": {
            "tagline": "Can an odd number ever be crowned with perfect mathematical harmony?",
            "analogy": "A number is 'perfect' if the sum of its factors equals itself (like 6 = 1+2+3, or 28 = 1+2+4+7+14). Every perfect number found since ancient Greece is EVEN! Does an ODD perfect number exist anywhere in the universe?",
            "rules": [
              "Check 6: factors 1, 2, 3 -> 1+2+3 = 6 (Perfect!).",
              "Check 28: factors 1, 2, 4, 7, 14 -> sum = 28 (Perfect!).",
              "All known perfect numbers end in 6 or 28 and are even.",
              "Could an odd number ever work?"
            ],
            "mystery": "Mathematicians have proved that if an odd perfect number exists, it must be GREATER than 10^1500 and have at least 101 prime factors!",
            "funFact": "Euler proved that any odd perfect number must have the special form p^(4k+1) · q²."
          },
          "investigators": {
            "tagline": "Euler's structural theorem and factor chain bounds.",
            "analogy": "If σ(N) = 2N with N odd, then N = p^α q_1^(2β_1) ... q_k^(2β_k) with p ≡ α ≡ 1 (mod 4). Ochem and Rao (2012) proved N > 10^1500 and k ≥ 9.",
            "rules": [
              "Euler's Form: N = p^a m² where p ≡ a ≡ 1 (mod 4).",
              "Lower bound: N > 10^1500 (Ochem & Rao, 2012).",
              "Total prime factors counting multiplicity: Ω(N) ≥ 101."
            ],
            "mystery": "Can sieve theory or cyclotomic divisor obstructions prove that no odd integer satisfies σ(N)/N = 2?",
            "funFact": "Known since the time of Euclid (circa 300 BC)."
          },
          "pioneers": {
            "tagline": "Abundancy index, superabundant numbers, and Lean 4 formalization.",
            "analogy": "The abundancy index I(n) = σ(n)/n is weakly multiplicative. The problem reduces to proving 2 is not in the image of odd integers.",
            "rules": [
              "Multiplicative property of σ(n).",
              "Cyclotomic factors Φ_d(p) in divisor sums.",
              "Mathlib formalization of perfect numbers."
            ],
            "mystery": "Automated reasoning systems are verifying the combinatorial factor chains to push prime count bounds.",
            "funFact": "The oldest open problem in arithmetic: over 2,300 years without resolution."
          }
        },
        "history": [
          {
            "year": "c. 300 BC",
            "author": "Euclid",
            "note": "Proves 2^(p-1)(2^p - 1) gives even perfect numbers in Elements."
          },
          {
            "year": "1750",
            "author": "Leonhard Euler",
            "note": "Proves structural theorem that any odd perfect number must have form p^(4k+1) q²."
          },
          {
            "year": "2012",
            "author": "Pascal Ochem & Michaël Rao",
            "note": "Prove that any odd perfect number exceeds 10^1500."
          }
        ]
      },
      "ko": {
        "name": "Odd Perfect Numbers Problem",
        "subtitle": "Does Any Odd Number Equal the Sum of Its Proper Divisors?",
        "field": "Divisor Functions & Classical Arithmetic",
        "statusBadge": "OLDEST UNSOLVED",
        "grades": {
          "explorers": {
            "tagline": "Can an odd number ever be crowned with perfect mathematical harmony?",
            "analogy": "A number is 'perfect' if the sum of its factors equals itself (like 6 = 1+2+3, or 28 = 1+2+4+7+14). Every perfect number found since ancient Greece is EVEN! Does an ODD perfect number exist anywhere in the universe?",
            "rules": [
              "Check 6: factors 1, 2, 3 -> 1+2+3 = 6 (Perfect!).",
              "Check 28: factors 1, 2, 4, 7, 14 -> sum = 28 (Perfect!).",
              "All known perfect numbers end in 6 or 28 and are even.",
              "Could an odd number ever work?"
            ],
            "mystery": "Mathematicians have proved that if an odd perfect number exists, it must be GREATER than 10^1500 and have at least 101 prime factors!",
            "funFact": "Euler proved that any odd perfect number must have the special form p^(4k+1) · q²."
          },
          "investigators": {
            "tagline": "Euler's structural theorem and factor chain bounds.",
            "analogy": "If σ(N) = 2N with N odd, then N = p^α q_1^(2β_1) ... q_k^(2β_k) with p ≡ α ≡ 1 (mod 4). Ochem and Rao (2012) proved N > 10^1500 and k ≥ 9.",
            "rules": [
              "Euler's Form: N = p^a m² where p ≡ a ≡ 1 (mod 4).",
              "Lower bound: N > 10^1500 (Ochem & Rao, 2012).",
              "Total prime factors counting multiplicity: Ω(N) ≥ 101."
            ],
            "mystery": "Can sieve theory or cyclotomic divisor obstructions prove that no odd integer satisfies σ(N)/N = 2?",
            "funFact": "Known since the time of Euclid (circa 300 BC)."
          },
          "pioneers": {
            "tagline": "Abundancy index, superabundant numbers, and Lean 4 formalization.",
            "analogy": "The abundancy index I(n) = σ(n)/n is weakly multiplicative. The problem reduces to proving 2 is not in the image of odd integers.",
            "rules": [
              "Multiplicative property of σ(n).",
              "Cyclotomic factors Φ_d(p) in divisor sums.",
              "Mathlib formalization of perfect numbers."
            ],
            "mystery": "Automated reasoning systems are verifying the combinatorial factor chains to push prime count bounds.",
            "funFact": "The oldest open problem in arithmetic: over 2,300 years without resolution."
          }
        },
        "history": [
          {
            "year": "c. 300 BC",
            "author": "Euclid",
            "note": "Proves 2^(p-1)(2^p - 1) gives even perfect numbers in Elements."
          },
          {
            "year": "1750",
            "author": "Leonhard Euler",
            "note": "Proves structural theorem that any odd perfect number must have form p^(4k+1) q²."
          },
          {
            "year": "2012",
            "author": "Pascal Ochem & Michaël Rao",
            "note": "Prove that any odd perfect number exceeds 10^1500."
          }
        ]
      },
      "zh-Hans": {
        "name": "奇完全数问题",
        "subtitle": "是否存在一个奇数等于其所有真因数之和？",
        "field": "因数和函数 & 古典数论",
        "statusBadge": "两千余年最古老谜题",
        "grades": {
          "explorers": {
            "tagline": "在所有奇数当中，能不能找到一个戴上“完全数”皇冠的神奇存在？",
            "analogy": "一个数的真因数加起来等于它自己，就叫“完全数”（如 6 = 1+2+3，28 = 1+2+4+7+14）。自两千多年前古希腊欧几里得时代至今，人类发现的所有完全数全都是偶数！奇数之中究竟藏不藏着完全数？",
            "rules": [
              "检验 6：因数 1, 2, 3，和为 6（完全数！）。",
              "检验 28：因数 1, 2, 4, 7, 14，和为 28（完全数！）。",
              "所有已发现的完全数都以 6 或 28 结尾，而且全都是偶数。",
              "世界上到底存不存在一个奇数能达成这一奇迹？"
            ],
            "mystery": "数学家已证明：如果真有奇完全数，它必定大于 10^1500，且至少拥有 101 个素因子！",
            "funFact": "欧拉证明：任何奇完全数必具有特殊形式 p^(4k+1) · q²，其中 p 为 4k+1 型素数。"
          },
          "investigators": {
            "tagline": "欧拉结构定理与素因子链下界。",
            "analogy": "欧拉证明 N 必定是一个一次幂素数与若干素数平方的乘积。奥谢姆与拉奥证明 N > 10^1500 且互异素因子个数 k ≥ 9。",
            "rules": [
              "欧拉结构定理：N = p^a m²。",
              "数值下界：N > 10^1500。",
              "含重数素因子总数：Ω(N) ≥ 101。"
            ],
            "mystery": "能否通过分圆多项式因子整除性阻碍，彻底证明 σ(N)/N 绝不可能恰好等于 2？",
            "funFact": "自公元前300年欧几里得《几何原本》时代即为人类所知。"
          },
          "pioneers": {
            "tagline": "丰度指数、超丰数与 Lean 4 形式化。",
            "analogy": "丰度指数 I(n) = σ(n)/n 是可乘函数。奇完全数问题本质上是证明 2 不在奇数丰度指数的值域内。",
            "rules": [
              "σ(n) 因数和乘性函数。",
              "分圆多项式因子阻碍分析。",
              "Lean 4 Mathlib 中完备数的严格形式化。"
            ],
            "mystery": "AI 自动化系统正在形式化检验素数因数树剪枝算法，不断抬高因子个数下界。",
            "funFact": "这是人类数学史上存活时间最悠久的未解难题：跨越了整整两千三百余年。"
          }
        },
        "history": [
          {
            "year": "c. 300 BC",
            "author": "欧几里得",
            "note": "在《几何原本》中证明偶完全数构造定理。"
          },
          {
            "year": "1750",
            "author": "欧拉",
            "note": "证明奇完全数必具有 p^(4k+1) q² 形式。"
          },
          {
            "year": "2012",
            "author": "奥谢姆 & 拉奥",
            "note": "证明奇完全数下界超过 10^1500。"
          }
        ]
      },
      "zh-Hant": {
        "name": "Odd Perfect Numbers Problem",
        "subtitle": "Does Any Odd Number Equal the Sum of Its Proper Divisors?",
        "field": "Divisor Functions & Classical Arithmetic",
        "statusBadge": "OLDEST UNSOLVED",
        "grades": {
          "explorers": {
            "tagline": "Can an odd number ever be crowned with perfect mathematical harmony?",
            "analogy": "A number is 'perfect' if the sum of its factors equals itself (like 6 = 1+2+3, or 28 = 1+2+4+7+14). Every perfect number found since ancient Greece is EVEN! Does an ODD perfect number exist anywhere in the universe?",
            "rules": [
              "Check 6: factors 1, 2, 3 -> 1+2+3 = 6 (Perfect!).",
              "Check 28: factors 1, 2, 4, 7, 14 -> sum = 28 (Perfect!).",
              "All known perfect numbers end in 6 or 28 and are even.",
              "Could an odd number ever work?"
            ],
            "mystery": "Mathematicians have proved that if an odd perfect number exists, it must be GREATER than 10^1500 and have at least 101 prime factors!",
            "funFact": "Euler proved that any odd perfect number must have the special form p^(4k+1) · q²."
          },
          "investigators": {
            "tagline": "Euler's structural theorem and factor chain bounds.",
            "analogy": "If σ(N) = 2N with N odd, then N = p^α q_1^(2β_1) ... q_k^(2β_k) with p ≡ α ≡ 1 (mod 4). Ochem and Rao (2012) proved N > 10^1500 and k ≥ 9.",
            "rules": [
              "Euler's Form: N = p^a m² where p ≡ a ≡ 1 (mod 4).",
              "Lower bound: N > 10^1500 (Ochem & Rao, 2012).",
              "Total prime factors counting multiplicity: Ω(N) ≥ 101."
            ],
            "mystery": "Can sieve theory or cyclotomic divisor obstructions prove that no odd integer satisfies σ(N)/N = 2?",
            "funFact": "Known since the time of Euclid (circa 300 BC)."
          },
          "pioneers": {
            "tagline": "Abundancy index, superabundant numbers, and Lean 4 formalization.",
            "analogy": "The abundancy index I(n) = σ(n)/n is weakly multiplicative. The problem reduces to proving 2 is not in the image of odd integers.",
            "rules": [
              "Multiplicative property of σ(n).",
              "Cyclotomic factors Φ_d(p) in divisor sums.",
              "Mathlib formalization of perfect numbers."
            ],
            "mystery": "Automated reasoning systems are verifying the combinatorial factor chains to push prime count bounds.",
            "funFact": "The oldest open problem in arithmetic: over 2,300 years without resolution."
          }
        },
        "history": [
          {
            "year": "c. 300 BC",
            "author": "Euclid",
            "note": "Proves 2^(p-1)(2^p - 1) gives even perfect numbers in Elements."
          },
          {
            "year": "1750",
            "author": "Leonhard Euler",
            "note": "Proves structural theorem that any odd perfect number must have form p^(4k+1) q²."
          },
          {
            "year": "2012",
            "author": "Pascal Ochem & Michaël Rao",
            "note": "Prove that any odd perfect number exceeds 10^1500."
          }
        ]
      }
    }
  },
  {
    "id": "mersenne",
    "icon": "🌌",
    "difficulty": "All Ages",
    "domain": "number-theory",
    "category": "number-theory",
    "isMillennium": false,
    "isAIFrontier": true,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Data.Nat.Prime\ndef Mersenne (p : ℕ) := 2^p - 1\ndef MersenneInfinitude : Prop := Set.Infinite {p : ℕ | Nat.Prime p ∧ Nat.Prime (Mersenne p)}",
    "locales": {
      "en": {
        "name": "Infinitude of Mersenne Primes",
        "subtitle": "Primes of the Form 2^p - 1 ($M_p$)",
        "field": "Computational Number Theory & GIMPS",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Are there infinitely many giant primes shaped like 2^p - 1?",
            "analogy": "Primes that can be written as one less than a power of 2 (2²-1=3, 2³-1=7, 2⁵-1=31...). They grow to millions of digits and hold the world record for largest known primes! Will they continue to appear forever?",
            "rules": [
              "Check 2² - 1 = 3 (Prime!).",
              "Check 2³ - 1 = 7 (Prime!).",
              "Check 2⁴ - 1 = 15 = 3 × 5 (Not prime, exponent must be prime!).",
              "GIMPS distributed project searches for the next giant."
            ],
            "mystery": "Only 51 Mersenne primes are known in all of human history! The largest has over 41 million decimal digits.",
            "funFact": "Every Mersenne prime automatically gives a new even perfect number through Euclid's formula!"
          },
          "investigators": {
            "tagline": "Lucas-Lehmer primality test and Lenstra-Pomerance-Wagstaff conjecture.",
            "analogy": "The Lenstra-Pomerance-Wagstaff conjecture predicts that the number of Mersenne primes with exponent ≤ x is asymptotically (e^γ / log 2) log x.",
            "rules": [
              "Lucas-Lehmer test: s_{i+1} = s_i² - 2 (mod 2^p - 1).",
              "LPW heuristic density formula.",
              "Mathlib formalization of Lucas-Lehmer."
            ],
            "mystery": "Can we prove the infinitude unconditionally without relying on unproved heuristics about prime divisors?",
            "funFact": "Marin Mersenne cataloged these numbers in 1644."
          },
          "pioneers": {
            "tagline": "Fast Fourier Transform (FFT) multiplication and distributed proof nets.",
            "analogy": "Mersenne primes represent the computational summit of large-integer verification.",
            "rules": [
              "GIMPS Prime95 FFT pipeline.",
              "Lean 4 machine-verified certificates.",
              "Formal proof of Mersenne theorems."
            ],
            "mystery": "AI-accelerated quantum algorithm simulation may soon test exponents beyond 10^9.",
            "funFact": "Mersenne primes are the crown jewels of algorithmic and distributed mathematics."
          }
        },
        "history": [
          {
            "year": "1644",
            "author": "Marin Mersenne",
            "note": "Publishes table of prime powers."
          },
          {
            "year": "1876",
            "author": "Édouard Lucas",
            "note": "Proves 2^127 - 1 is prime by hand."
          },
          {
            "year": "1996–2026",
            "author": "GIMPS",
            "note": "Discovers primes with tens of millions of digits."
          }
        ]
      },
      "de": {
        "name": "Infinitude of Mersenne Primes",
        "subtitle": "Primes of the Form 2^p - 1 ($M_p$)",
        "field": "Computational Number Theory & GIMPS",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Are there infinitely many giant primes shaped like 2^p - 1?",
            "analogy": "Primes that can be written as one less than a power of 2 (2²-1=3, 2³-1=7, 2⁵-1=31...). They grow to millions of digits and hold the world record for largest known primes! Will they continue to appear forever?",
            "rules": [
              "Check 2² - 1 = 3 (Prime!).",
              "Check 2³ - 1 = 7 (Prime!).",
              "Check 2⁴ - 1 = 15 = 3 × 5 (Not prime, exponent must be prime!).",
              "GIMPS distributed project searches for the next giant."
            ],
            "mystery": "Only 51 Mersenne primes are known in all of human history! The largest has over 41 million decimal digits.",
            "funFact": "Every Mersenne prime automatically gives a new even perfect number through Euclid's formula!"
          },
          "investigators": {
            "tagline": "Lucas-Lehmer primality test and Lenstra-Pomerance-Wagstaff conjecture.",
            "analogy": "The Lenstra-Pomerance-Wagstaff conjecture predicts that the number of Mersenne primes with exponent ≤ x is asymptotically (e^γ / log 2) log x.",
            "rules": [
              "Lucas-Lehmer test: s_{i+1} = s_i² - 2 (mod 2^p - 1).",
              "LPW heuristic density formula.",
              "Mathlib formalization of Lucas-Lehmer."
            ],
            "mystery": "Can we prove the infinitude unconditionally without relying on unproved heuristics about prime divisors?",
            "funFact": "Marin Mersenne cataloged these numbers in 1644."
          },
          "pioneers": {
            "tagline": "Fast Fourier Transform (FFT) multiplication and distributed proof nets.",
            "analogy": "Mersenne primes represent the computational summit of large-integer verification.",
            "rules": [
              "GIMPS Prime95 FFT pipeline.",
              "Lean 4 machine-verified certificates.",
              "Formal proof of Mersenne theorems."
            ],
            "mystery": "AI-accelerated quantum algorithm simulation may soon test exponents beyond 10^9.",
            "funFact": "Mersenne primes are the crown jewels of algorithmic and distributed mathematics."
          }
        },
        "history": [
          {
            "year": "1644",
            "author": "Marin Mersenne",
            "note": "Publishes table of prime powers."
          },
          {
            "year": "1876",
            "author": "Édouard Lucas",
            "note": "Proves 2^127 - 1 is prime by hand."
          },
          {
            "year": "1996–2026",
            "author": "GIMPS",
            "note": "Discovers primes with tens of millions of digits."
          }
        ]
      },
      "fr": {
        "name": "Infinitude of Mersenne Primes",
        "subtitle": "Primes of the Form 2^p - 1 ($M_p$)",
        "field": "Computational Number Theory & GIMPS",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Are there infinitely many giant primes shaped like 2^p - 1?",
            "analogy": "Primes that can be written as one less than a power of 2 (2²-1=3, 2³-1=7, 2⁵-1=31...). They grow to millions of digits and hold the world record for largest known primes! Will they continue to appear forever?",
            "rules": [
              "Check 2² - 1 = 3 (Prime!).",
              "Check 2³ - 1 = 7 (Prime!).",
              "Check 2⁴ - 1 = 15 = 3 × 5 (Not prime, exponent must be prime!).",
              "GIMPS distributed project searches for the next giant."
            ],
            "mystery": "Only 51 Mersenne primes are known in all of human history! The largest has over 41 million decimal digits.",
            "funFact": "Every Mersenne prime automatically gives a new even perfect number through Euclid's formula!"
          },
          "investigators": {
            "tagline": "Lucas-Lehmer primality test and Lenstra-Pomerance-Wagstaff conjecture.",
            "analogy": "The Lenstra-Pomerance-Wagstaff conjecture predicts that the number of Mersenne primes with exponent ≤ x is asymptotically (e^γ / log 2) log x.",
            "rules": [
              "Lucas-Lehmer test: s_{i+1} = s_i² - 2 (mod 2^p - 1).",
              "LPW heuristic density formula.",
              "Mathlib formalization of Lucas-Lehmer."
            ],
            "mystery": "Can we prove the infinitude unconditionally without relying on unproved heuristics about prime divisors?",
            "funFact": "Marin Mersenne cataloged these numbers in 1644."
          },
          "pioneers": {
            "tagline": "Fast Fourier Transform (FFT) multiplication and distributed proof nets.",
            "analogy": "Mersenne primes represent the computational summit of large-integer verification.",
            "rules": [
              "GIMPS Prime95 FFT pipeline.",
              "Lean 4 machine-verified certificates.",
              "Formal proof of Mersenne theorems."
            ],
            "mystery": "AI-accelerated quantum algorithm simulation may soon test exponents beyond 10^9.",
            "funFact": "Mersenne primes are the crown jewels of algorithmic and distributed mathematics."
          }
        },
        "history": [
          {
            "year": "1644",
            "author": "Marin Mersenne",
            "note": "Publishes table of prime powers."
          },
          {
            "year": "1876",
            "author": "Édouard Lucas",
            "note": "Proves 2^127 - 1 is prime by hand."
          },
          {
            "year": "1996–2026",
            "author": "GIMPS",
            "note": "Discovers primes with tens of millions of digits."
          }
        ]
      },
      "it": {
        "name": "Infinitude of Mersenne Primes",
        "subtitle": "Primes of the Form 2^p - 1 ($M_p$)",
        "field": "Computational Number Theory & GIMPS",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Are there infinitely many giant primes shaped like 2^p - 1?",
            "analogy": "Primes that can be written as one less than a power of 2 (2²-1=3, 2³-1=7, 2⁵-1=31...). They grow to millions of digits and hold the world record for largest known primes! Will they continue to appear forever?",
            "rules": [
              "Check 2² - 1 = 3 (Prime!).",
              "Check 2³ - 1 = 7 (Prime!).",
              "Check 2⁴ - 1 = 15 = 3 × 5 (Not prime, exponent must be prime!).",
              "GIMPS distributed project searches for the next giant."
            ],
            "mystery": "Only 51 Mersenne primes are known in all of human history! The largest has over 41 million decimal digits.",
            "funFact": "Every Mersenne prime automatically gives a new even perfect number through Euclid's formula!"
          },
          "investigators": {
            "tagline": "Lucas-Lehmer primality test and Lenstra-Pomerance-Wagstaff conjecture.",
            "analogy": "The Lenstra-Pomerance-Wagstaff conjecture predicts that the number of Mersenne primes with exponent ≤ x is asymptotically (e^γ / log 2) log x.",
            "rules": [
              "Lucas-Lehmer test: s_{i+1} = s_i² - 2 (mod 2^p - 1).",
              "LPW heuristic density formula.",
              "Mathlib formalization of Lucas-Lehmer."
            ],
            "mystery": "Can we prove the infinitude unconditionally without relying on unproved heuristics about prime divisors?",
            "funFact": "Marin Mersenne cataloged these numbers in 1644."
          },
          "pioneers": {
            "tagline": "Fast Fourier Transform (FFT) multiplication and distributed proof nets.",
            "analogy": "Mersenne primes represent the computational summit of large-integer verification.",
            "rules": [
              "GIMPS Prime95 FFT pipeline.",
              "Lean 4 machine-verified certificates.",
              "Formal proof of Mersenne theorems."
            ],
            "mystery": "AI-accelerated quantum algorithm simulation may soon test exponents beyond 10^9.",
            "funFact": "Mersenne primes are the crown jewels of algorithmic and distributed mathematics."
          }
        },
        "history": [
          {
            "year": "1644",
            "author": "Marin Mersenne",
            "note": "Publishes table of prime powers."
          },
          {
            "year": "1876",
            "author": "Édouard Lucas",
            "note": "Proves 2^127 - 1 is prime by hand."
          },
          {
            "year": "1996–2026",
            "author": "GIMPS",
            "note": "Discovers primes with tens of millions of digits."
          }
        ]
      },
      "ja": {
        "name": "Infinitude of Mersenne Primes",
        "subtitle": "Primes of the Form 2^p - 1 ($M_p$)",
        "field": "Computational Number Theory & GIMPS",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Are there infinitely many giant primes shaped like 2^p - 1?",
            "analogy": "Primes that can be written as one less than a power of 2 (2²-1=3, 2³-1=7, 2⁵-1=31...). They grow to millions of digits and hold the world record for largest known primes! Will they continue to appear forever?",
            "rules": [
              "Check 2² - 1 = 3 (Prime!).",
              "Check 2³ - 1 = 7 (Prime!).",
              "Check 2⁴ - 1 = 15 = 3 × 5 (Not prime, exponent must be prime!).",
              "GIMPS distributed project searches for the next giant."
            ],
            "mystery": "Only 51 Mersenne primes are known in all of human history! The largest has over 41 million decimal digits.",
            "funFact": "Every Mersenne prime automatically gives a new even perfect number through Euclid's formula!"
          },
          "investigators": {
            "tagline": "Lucas-Lehmer primality test and Lenstra-Pomerance-Wagstaff conjecture.",
            "analogy": "The Lenstra-Pomerance-Wagstaff conjecture predicts that the number of Mersenne primes with exponent ≤ x is asymptotically (e^γ / log 2) log x.",
            "rules": [
              "Lucas-Lehmer test: s_{i+1} = s_i² - 2 (mod 2^p - 1).",
              "LPW heuristic density formula.",
              "Mathlib formalization of Lucas-Lehmer."
            ],
            "mystery": "Can we prove the infinitude unconditionally without relying on unproved heuristics about prime divisors?",
            "funFact": "Marin Mersenne cataloged these numbers in 1644."
          },
          "pioneers": {
            "tagline": "Fast Fourier Transform (FFT) multiplication and distributed proof nets.",
            "analogy": "Mersenne primes represent the computational summit of large-integer verification.",
            "rules": [
              "GIMPS Prime95 FFT pipeline.",
              "Lean 4 machine-verified certificates.",
              "Formal proof of Mersenne theorems."
            ],
            "mystery": "AI-accelerated quantum algorithm simulation may soon test exponents beyond 10^9.",
            "funFact": "Mersenne primes are the crown jewels of algorithmic and distributed mathematics."
          }
        },
        "history": [
          {
            "year": "1644",
            "author": "Marin Mersenne",
            "note": "Publishes table of prime powers."
          },
          {
            "year": "1876",
            "author": "Édouard Lucas",
            "note": "Proves 2^127 - 1 is prime by hand."
          },
          {
            "year": "1996–2026",
            "author": "GIMPS",
            "note": "Discovers primes with tens of millions of digits."
          }
        ]
      },
      "ko": {
        "name": "Infinitude of Mersenne Primes",
        "subtitle": "Primes of the Form 2^p - 1 ($M_p$)",
        "field": "Computational Number Theory & GIMPS",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Are there infinitely many giant primes shaped like 2^p - 1?",
            "analogy": "Primes that can be written as one less than a power of 2 (2²-1=3, 2³-1=7, 2⁵-1=31...). They grow to millions of digits and hold the world record for largest known primes! Will they continue to appear forever?",
            "rules": [
              "Check 2² - 1 = 3 (Prime!).",
              "Check 2³ - 1 = 7 (Prime!).",
              "Check 2⁴ - 1 = 15 = 3 × 5 (Not prime, exponent must be prime!).",
              "GIMPS distributed project searches for the next giant."
            ],
            "mystery": "Only 51 Mersenne primes are known in all of human history! The largest has over 41 million decimal digits.",
            "funFact": "Every Mersenne prime automatically gives a new even perfect number through Euclid's formula!"
          },
          "investigators": {
            "tagline": "Lucas-Lehmer primality test and Lenstra-Pomerance-Wagstaff conjecture.",
            "analogy": "The Lenstra-Pomerance-Wagstaff conjecture predicts that the number of Mersenne primes with exponent ≤ x is asymptotically (e^γ / log 2) log x.",
            "rules": [
              "Lucas-Lehmer test: s_{i+1} = s_i² - 2 (mod 2^p - 1).",
              "LPW heuristic density formula.",
              "Mathlib formalization of Lucas-Lehmer."
            ],
            "mystery": "Can we prove the infinitude unconditionally without relying on unproved heuristics about prime divisors?",
            "funFact": "Marin Mersenne cataloged these numbers in 1644."
          },
          "pioneers": {
            "tagline": "Fast Fourier Transform (FFT) multiplication and distributed proof nets.",
            "analogy": "Mersenne primes represent the computational summit of large-integer verification.",
            "rules": [
              "GIMPS Prime95 FFT pipeline.",
              "Lean 4 machine-verified certificates.",
              "Formal proof of Mersenne theorems."
            ],
            "mystery": "AI-accelerated quantum algorithm simulation may soon test exponents beyond 10^9.",
            "funFact": "Mersenne primes are the crown jewels of algorithmic and distributed mathematics."
          }
        },
        "history": [
          {
            "year": "1644",
            "author": "Marin Mersenne",
            "note": "Publishes table of prime powers."
          },
          {
            "year": "1876",
            "author": "Édouard Lucas",
            "note": "Proves 2^127 - 1 is prime by hand."
          },
          {
            "year": "1996–2026",
            "author": "GIMPS",
            "note": "Discovers primes with tens of millions of digits."
          }
        ]
      },
      "zh-Hans": {
        "name": "梅森素数无限性猜想",
        "subtitle": "形如 2^p - 1 的宇宙巨兽素数",
        "field": "计算数论 & GIMPS 分布式计算",
        "statusBadge": "未解之谜",
        "grades": {
          "explorers": {
            "tagline": "由计算机发现的人类最大素数，是否如银河繁星般无穷无尽？",
            "analogy": "比2的幂次刚好少1的素数（2²-1=3, 2³-1=7, 2⁵-1=31...）。人类已知的世界最大素数几乎全都是梅森素数，长度达几千万位！这串数字奇迹到底有没有尽头？",
            "rules": [
              "检验 2² - 1 = 3（素数！）。",
              "检验 2³ - 1 = 7（素数！）。",
              "检验 2⁴ - 1 = 15 = 3 × 5（合数，指数必须是素数！）。",
              "全球 GIMPS 志愿者计算网络日夜搜寻下一个梅森素数。"
            ],
            "mystery": "整个人类文明史至今只找到了 51 个梅森素数！目前最大的一个拥有超过 4100 万位数字。",
            "funFact": "每一个新梅森素数的诞生，通过欧几里得公式都会自动孕育出一个全新的偶完全数！"
          },
          "investigators": {
            "tagline": "卢卡斯-莱默素性检验与 LPW 启发式猜想。",
            "analogy": "LPW 猜想预测指数小于 x 的梅森素数个数渐近增长率为 (e^γ / log 2) log x，预示着无穷多的必然性。",
            "rules": [
              "卢卡斯-莱默测试：s_{i+1} = s_i² - 2 (mod M_p)。",
              "LPW 启发式对数密度模型。",
              "Lean 4 Mathlib 中卢卡斯-莱默定理形式化。"
            ],
            "mystery": "能否脱离纯统计启发式推测，给出无条件的严密数论证明？",
            "funFact": "马兰·梅森神父于1644年整理出版相关名录。"
          },
          "pioneers": {
            "tagline": "快速傅里叶变换 (FFT) 超大数乘法与分布式证明网络。",
            "analogy": "梅森素数是当代超大规模整数机器验证的巅峰前沿。",
            "rules": [
              "GIMPS Prime95 快速乘法体系。",
              "Lean 4 机器可验证素性证明证书。",
              "梅森素数基础定理形式化。"
            ],
            "mystery": "AI 正在加速优化素性测试管道算法，向指数十亿级大关发起冲刺。",
            "funFact": "梅森素数是分布式计算与高精度算术领域当之无愧的王冠宝石。"
          }
        },
        "history": [
          {
            "year": "1644",
            "author": "马兰·梅森",
            "note": "在巴黎出版关于 2^p - 1 素性的猜想名录。"
          },
          {
            "year": "1876",
            "author": "爱德华·卢卡斯",
            "note": "用手工计算证明了 39 位的 2^127 - 1 是素数。"
          },
          {
            "year": "1996–2026",
            "author": "GIMPS 互联网梅森素数大搜寻",
            "note": "分布式网络接连发现几千万位的世界纪录级素数。"
          }
        ]
      },
      "zh-Hant": {
        "name": "Infinitude of Mersenne Primes",
        "subtitle": "Primes of the Form 2^p - 1 ($M_p$)",
        "field": "Computational Number Theory & GIMPS",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Are there infinitely many giant primes shaped like 2^p - 1?",
            "analogy": "Primes that can be written as one less than a power of 2 (2²-1=3, 2³-1=7, 2⁵-1=31...). They grow to millions of digits and hold the world record for largest known primes! Will they continue to appear forever?",
            "rules": [
              "Check 2² - 1 = 3 (Prime!).",
              "Check 2³ - 1 = 7 (Prime!).",
              "Check 2⁴ - 1 = 15 = 3 × 5 (Not prime, exponent must be prime!).",
              "GIMPS distributed project searches for the next giant."
            ],
            "mystery": "Only 51 Mersenne primes are known in all of human history! The largest has over 41 million decimal digits.",
            "funFact": "Every Mersenne prime automatically gives a new even perfect number through Euclid's formula!"
          },
          "investigators": {
            "tagline": "Lucas-Lehmer primality test and Lenstra-Pomerance-Wagstaff conjecture.",
            "analogy": "The Lenstra-Pomerance-Wagstaff conjecture predicts that the number of Mersenne primes with exponent ≤ x is asymptotically (e^γ / log 2) log x.",
            "rules": [
              "Lucas-Lehmer test: s_{i+1} = s_i² - 2 (mod 2^p - 1).",
              "LPW heuristic density formula.",
              "Mathlib formalization of Lucas-Lehmer."
            ],
            "mystery": "Can we prove the infinitude unconditionally without relying on unproved heuristics about prime divisors?",
            "funFact": "Marin Mersenne cataloged these numbers in 1644."
          },
          "pioneers": {
            "tagline": "Fast Fourier Transform (FFT) multiplication and distributed proof nets.",
            "analogy": "Mersenne primes represent the computational summit of large-integer verification.",
            "rules": [
              "GIMPS Prime95 FFT pipeline.",
              "Lean 4 machine-verified certificates.",
              "Formal proof of Mersenne theorems."
            ],
            "mystery": "AI-accelerated quantum algorithm simulation may soon test exponents beyond 10^9.",
            "funFact": "Mersenne primes are the crown jewels of algorithmic and distributed mathematics."
          }
        },
        "history": [
          {
            "year": "1644",
            "author": "Marin Mersenne",
            "note": "Publishes table of prime powers."
          },
          {
            "year": "1876",
            "author": "Édouard Lucas",
            "note": "Proves 2^127 - 1 is prime by hand."
          },
          {
            "year": "1996–2026",
            "author": "GIMPS",
            "note": "Discovers primes with tens of millions of digits."
          }
        ]
      }
    }
  },
  {
    "id": "sophie-germain",
    "icon": "🔐",
    "difficulty": "All Ages",
    "domain": "number-theory",
    "category": "number-theory",
    "isMillennium": false,
    "isAIFrontier": true,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Data.Nat.Prime\ndef SophieGermainPrime (p : ℕ) : Prop := Nat.Prime p ∧ Nat.Prime (2 * p + 1)\ndef SGInfinitude : Prop := Set.Infinite {p : ℕ | SophieGermainPrime p}",
    "locales": {
      "en": {
        "name": "Sophie Germain Primes",
        "subtitle": "Infinitude of Primes Where 2p + 1 is Also Prime",
        "field": "Cryptography & Sieve Theory",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can a prime double itself and add 1 to create another prime forever?",
            "analogy": "A prime p is a Sophie Germain prime if 2p + 1 is ALSO prime! For example: 2 -> 5, 3 -> 7, 5 -> 11, 11 -> 23. Are there infinitely many such magic prime pairs?",
            "rules": [
              "Pick a prime p (like 11).",
              "Compute 2p + 1 (2 × 11 + 1 = 23).",
              "23 is prime! So 11 is a Sophie Germain prime.",
              "Do these pairs continue forever?"
            ],
            "mystery": "Essential for cybersecurity: RSA and Diffie-Hellman cryptographic keys use these safe primes to protect internet banking!",
            "funFact": "French mathematician Sophie Germain used these primes in the 1820s to make the first major breakthrough on Fermat's Last Theorem!"
          },
          "investigators": {
            "tagline": "Hardy-Littlewood conjecture and Dickson's linear forms.",
            "analogy": "The first Hardy-Littlewood conjecture predicts the density C_2 x / (log x)² where C_2 is the twin prime constant.",
            "rules": [
              "Linear forms: (p, 2p + 1).",
              "Chen's Theorem: 2p + 1 is prime or almost prime (P_2).",
              "Lean 4 formal statements."
            ],
            "mystery": "Can Maynard-Tao multidimensional sieve techniques prove the infinitude of Sophie Germain primes?",
            "funFact": "Sophie Germain discovered these around 1825 in Paris."
          },
          "pioneers": {
            "tagline": "Cryptographic safe primes and discrete logarithm security.",
            "analogy": "Safe primes prevent Pohlig-Hellman attacks by ensuring p-1 has a large prime factor.",
            "rules": [
              "Pohlig-Hellman discrete log resistance.",
              "Batch prime generation algorithms.",
              "Mathlib verification of primality chains."
            ],
            "mystery": "AI automated theorem proving is exploring parity-breaking sieve variants.",
            "funFact": "Sophie Germain's legacy connects pure Diophantine beauty with modern digital security."
          }
        },
        "history": [
          {
            "year": "1825",
            "author": "Sophie Germain",
            "note": "Introduces these primes to attack Fermat's Last Theorem."
          },
          {
            "year": "1923",
            "author": "Hardy & Littlewood",
            "note": "Conjecture precise asymptotic density."
          },
          {
            "year": "2016",
            "author": "Distributed Computing",
            "note": "Discovers record Sophie Germain prime with 388,342 digits."
          }
        ]
      },
      "de": {
        "name": "Sophie Germain Primes",
        "subtitle": "Infinitude of Primes Where 2p + 1 is Also Prime",
        "field": "Cryptography & Sieve Theory",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can a prime double itself and add 1 to create another prime forever?",
            "analogy": "A prime p is a Sophie Germain prime if 2p + 1 is ALSO prime! For example: 2 -> 5, 3 -> 7, 5 -> 11, 11 -> 23. Are there infinitely many such magic prime pairs?",
            "rules": [
              "Pick a prime p (like 11).",
              "Compute 2p + 1 (2 × 11 + 1 = 23).",
              "23 is prime! So 11 is a Sophie Germain prime.",
              "Do these pairs continue forever?"
            ],
            "mystery": "Essential for cybersecurity: RSA and Diffie-Hellman cryptographic keys use these safe primes to protect internet banking!",
            "funFact": "French mathematician Sophie Germain used these primes in the 1820s to make the first major breakthrough on Fermat's Last Theorem!"
          },
          "investigators": {
            "tagline": "Hardy-Littlewood conjecture and Dickson's linear forms.",
            "analogy": "The first Hardy-Littlewood conjecture predicts the density C_2 x / (log x)² where C_2 is the twin prime constant.",
            "rules": [
              "Linear forms: (p, 2p + 1).",
              "Chen's Theorem: 2p + 1 is prime or almost prime (P_2).",
              "Lean 4 formal statements."
            ],
            "mystery": "Can Maynard-Tao multidimensional sieve techniques prove the infinitude of Sophie Germain primes?",
            "funFact": "Sophie Germain discovered these around 1825 in Paris."
          },
          "pioneers": {
            "tagline": "Cryptographic safe primes and discrete logarithm security.",
            "analogy": "Safe primes prevent Pohlig-Hellman attacks by ensuring p-1 has a large prime factor.",
            "rules": [
              "Pohlig-Hellman discrete log resistance.",
              "Batch prime generation algorithms.",
              "Mathlib verification of primality chains."
            ],
            "mystery": "AI automated theorem proving is exploring parity-breaking sieve variants.",
            "funFact": "Sophie Germain's legacy connects pure Diophantine beauty with modern digital security."
          }
        },
        "history": [
          {
            "year": "1825",
            "author": "Sophie Germain",
            "note": "Introduces these primes to attack Fermat's Last Theorem."
          },
          {
            "year": "1923",
            "author": "Hardy & Littlewood",
            "note": "Conjecture precise asymptotic density."
          },
          {
            "year": "2016",
            "author": "Distributed Computing",
            "note": "Discovers record Sophie Germain prime with 388,342 digits."
          }
        ]
      },
      "fr": {
        "name": "Sophie Germain Primes",
        "subtitle": "Infinitude of Primes Where 2p + 1 is Also Prime",
        "field": "Cryptography & Sieve Theory",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can a prime double itself and add 1 to create another prime forever?",
            "analogy": "A prime p is a Sophie Germain prime if 2p + 1 is ALSO prime! For example: 2 -> 5, 3 -> 7, 5 -> 11, 11 -> 23. Are there infinitely many such magic prime pairs?",
            "rules": [
              "Pick a prime p (like 11).",
              "Compute 2p + 1 (2 × 11 + 1 = 23).",
              "23 is prime! So 11 is a Sophie Germain prime.",
              "Do these pairs continue forever?"
            ],
            "mystery": "Essential for cybersecurity: RSA and Diffie-Hellman cryptographic keys use these safe primes to protect internet banking!",
            "funFact": "French mathematician Sophie Germain used these primes in the 1820s to make the first major breakthrough on Fermat's Last Theorem!"
          },
          "investigators": {
            "tagline": "Hardy-Littlewood conjecture and Dickson's linear forms.",
            "analogy": "The first Hardy-Littlewood conjecture predicts the density C_2 x / (log x)² where C_2 is the twin prime constant.",
            "rules": [
              "Linear forms: (p, 2p + 1).",
              "Chen's Theorem: 2p + 1 is prime or almost prime (P_2).",
              "Lean 4 formal statements."
            ],
            "mystery": "Can Maynard-Tao multidimensional sieve techniques prove the infinitude of Sophie Germain primes?",
            "funFact": "Sophie Germain discovered these around 1825 in Paris."
          },
          "pioneers": {
            "tagline": "Cryptographic safe primes and discrete logarithm security.",
            "analogy": "Safe primes prevent Pohlig-Hellman attacks by ensuring p-1 has a large prime factor.",
            "rules": [
              "Pohlig-Hellman discrete log resistance.",
              "Batch prime generation algorithms.",
              "Mathlib verification of primality chains."
            ],
            "mystery": "AI automated theorem proving is exploring parity-breaking sieve variants.",
            "funFact": "Sophie Germain's legacy connects pure Diophantine beauty with modern digital security."
          }
        },
        "history": [
          {
            "year": "1825",
            "author": "Sophie Germain",
            "note": "Introduces these primes to attack Fermat's Last Theorem."
          },
          {
            "year": "1923",
            "author": "Hardy & Littlewood",
            "note": "Conjecture precise asymptotic density."
          },
          {
            "year": "2016",
            "author": "Distributed Computing",
            "note": "Discovers record Sophie Germain prime with 388,342 digits."
          }
        ]
      },
      "it": {
        "name": "Sophie Germain Primes",
        "subtitle": "Infinitude of Primes Where 2p + 1 is Also Prime",
        "field": "Cryptography & Sieve Theory",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can a prime double itself and add 1 to create another prime forever?",
            "analogy": "A prime p is a Sophie Germain prime if 2p + 1 is ALSO prime! For example: 2 -> 5, 3 -> 7, 5 -> 11, 11 -> 23. Are there infinitely many such magic prime pairs?",
            "rules": [
              "Pick a prime p (like 11).",
              "Compute 2p + 1 (2 × 11 + 1 = 23).",
              "23 is prime! So 11 is a Sophie Germain prime.",
              "Do these pairs continue forever?"
            ],
            "mystery": "Essential for cybersecurity: RSA and Diffie-Hellman cryptographic keys use these safe primes to protect internet banking!",
            "funFact": "French mathematician Sophie Germain used these primes in the 1820s to make the first major breakthrough on Fermat's Last Theorem!"
          },
          "investigators": {
            "tagline": "Hardy-Littlewood conjecture and Dickson's linear forms.",
            "analogy": "The first Hardy-Littlewood conjecture predicts the density C_2 x / (log x)² where C_2 is the twin prime constant.",
            "rules": [
              "Linear forms: (p, 2p + 1).",
              "Chen's Theorem: 2p + 1 is prime or almost prime (P_2).",
              "Lean 4 formal statements."
            ],
            "mystery": "Can Maynard-Tao multidimensional sieve techniques prove the infinitude of Sophie Germain primes?",
            "funFact": "Sophie Germain discovered these around 1825 in Paris."
          },
          "pioneers": {
            "tagline": "Cryptographic safe primes and discrete logarithm security.",
            "analogy": "Safe primes prevent Pohlig-Hellman attacks by ensuring p-1 has a large prime factor.",
            "rules": [
              "Pohlig-Hellman discrete log resistance.",
              "Batch prime generation algorithms.",
              "Mathlib verification of primality chains."
            ],
            "mystery": "AI automated theorem proving is exploring parity-breaking sieve variants.",
            "funFact": "Sophie Germain's legacy connects pure Diophantine beauty with modern digital security."
          }
        },
        "history": [
          {
            "year": "1825",
            "author": "Sophie Germain",
            "note": "Introduces these primes to attack Fermat's Last Theorem."
          },
          {
            "year": "1923",
            "author": "Hardy & Littlewood",
            "note": "Conjecture precise asymptotic density."
          },
          {
            "year": "2016",
            "author": "Distributed Computing",
            "note": "Discovers record Sophie Germain prime with 388,342 digits."
          }
        ]
      },
      "ja": {
        "name": "Sophie Germain Primes",
        "subtitle": "Infinitude of Primes Where 2p + 1 is Also Prime",
        "field": "Cryptography & Sieve Theory",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can a prime double itself and add 1 to create another prime forever?",
            "analogy": "A prime p is a Sophie Germain prime if 2p + 1 is ALSO prime! For example: 2 -> 5, 3 -> 7, 5 -> 11, 11 -> 23. Are there infinitely many such magic prime pairs?",
            "rules": [
              "Pick a prime p (like 11).",
              "Compute 2p + 1 (2 × 11 + 1 = 23).",
              "23 is prime! So 11 is a Sophie Germain prime.",
              "Do these pairs continue forever?"
            ],
            "mystery": "Essential for cybersecurity: RSA and Diffie-Hellman cryptographic keys use these safe primes to protect internet banking!",
            "funFact": "French mathematician Sophie Germain used these primes in the 1820s to make the first major breakthrough on Fermat's Last Theorem!"
          },
          "investigators": {
            "tagline": "Hardy-Littlewood conjecture and Dickson's linear forms.",
            "analogy": "The first Hardy-Littlewood conjecture predicts the density C_2 x / (log x)² where C_2 is the twin prime constant.",
            "rules": [
              "Linear forms: (p, 2p + 1).",
              "Chen's Theorem: 2p + 1 is prime or almost prime (P_2).",
              "Lean 4 formal statements."
            ],
            "mystery": "Can Maynard-Tao multidimensional sieve techniques prove the infinitude of Sophie Germain primes?",
            "funFact": "Sophie Germain discovered these around 1825 in Paris."
          },
          "pioneers": {
            "tagline": "Cryptographic safe primes and discrete logarithm security.",
            "analogy": "Safe primes prevent Pohlig-Hellman attacks by ensuring p-1 has a large prime factor.",
            "rules": [
              "Pohlig-Hellman discrete log resistance.",
              "Batch prime generation algorithms.",
              "Mathlib verification of primality chains."
            ],
            "mystery": "AI automated theorem proving is exploring parity-breaking sieve variants.",
            "funFact": "Sophie Germain's legacy connects pure Diophantine beauty with modern digital security."
          }
        },
        "history": [
          {
            "year": "1825",
            "author": "Sophie Germain",
            "note": "Introduces these primes to attack Fermat's Last Theorem."
          },
          {
            "year": "1923",
            "author": "Hardy & Littlewood",
            "note": "Conjecture precise asymptotic density."
          },
          {
            "year": "2016",
            "author": "Distributed Computing",
            "note": "Discovers record Sophie Germain prime with 388,342 digits."
          }
        ]
      },
      "ko": {
        "name": "Sophie Germain Primes",
        "subtitle": "Infinitude of Primes Where 2p + 1 is Also Prime",
        "field": "Cryptography & Sieve Theory",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can a prime double itself and add 1 to create another prime forever?",
            "analogy": "A prime p is a Sophie Germain prime if 2p + 1 is ALSO prime! For example: 2 -> 5, 3 -> 7, 5 -> 11, 11 -> 23. Are there infinitely many such magic prime pairs?",
            "rules": [
              "Pick a prime p (like 11).",
              "Compute 2p + 1 (2 × 11 + 1 = 23).",
              "23 is prime! So 11 is a Sophie Germain prime.",
              "Do these pairs continue forever?"
            ],
            "mystery": "Essential for cybersecurity: RSA and Diffie-Hellman cryptographic keys use these safe primes to protect internet banking!",
            "funFact": "French mathematician Sophie Germain used these primes in the 1820s to make the first major breakthrough on Fermat's Last Theorem!"
          },
          "investigators": {
            "tagline": "Hardy-Littlewood conjecture and Dickson's linear forms.",
            "analogy": "The first Hardy-Littlewood conjecture predicts the density C_2 x / (log x)² where C_2 is the twin prime constant.",
            "rules": [
              "Linear forms: (p, 2p + 1).",
              "Chen's Theorem: 2p + 1 is prime or almost prime (P_2).",
              "Lean 4 formal statements."
            ],
            "mystery": "Can Maynard-Tao multidimensional sieve techniques prove the infinitude of Sophie Germain primes?",
            "funFact": "Sophie Germain discovered these around 1825 in Paris."
          },
          "pioneers": {
            "tagline": "Cryptographic safe primes and discrete logarithm security.",
            "analogy": "Safe primes prevent Pohlig-Hellman attacks by ensuring p-1 has a large prime factor.",
            "rules": [
              "Pohlig-Hellman discrete log resistance.",
              "Batch prime generation algorithms.",
              "Mathlib verification of primality chains."
            ],
            "mystery": "AI automated theorem proving is exploring parity-breaking sieve variants.",
            "funFact": "Sophie Germain's legacy connects pure Diophantine beauty with modern digital security."
          }
        },
        "history": [
          {
            "year": "1825",
            "author": "Sophie Germain",
            "note": "Introduces these primes to attack Fermat's Last Theorem."
          },
          {
            "year": "1923",
            "author": "Hardy & Littlewood",
            "note": "Conjecture precise asymptotic density."
          },
          {
            "year": "2016",
            "author": "Distributed Computing",
            "note": "Discovers record Sophie Germain prime with 388,342 digits."
          }
        ]
      },
      "zh-Hans": {
        "name": "索菲·热尔曼素数猜想",
        "subtitle": "若 p 为素数则 2p + 1 亦为素数（安全素数）的无穷性",
        "field": "现代密码学 & 筛法理论",
        "statusBadge": "未解之谜",
        "grades": {
          "explorers": {
            "tagline": "一个素数翻倍再加1，能不能永远源源不断地变出新的素数伙伴？",
            "analogy": "如果素数 p 乘以 2 再加 1 得到的 2p + 1 依然是素数，它就被称为“索菲·热尔曼素数”（如 2 -> 5, 3 -> 7, 5 -> 11, 11 -> 23）。在加密通信中它们被称为“安全素数”。这一素数链是否无穷无尽？",
            "rules": [
              "选择一个素数 p（如 11）。",
              "计算 2p + 1（2 × 11 + 1 = 23）。",
              "23 也是素数！所以 11 是索菲·热尔曼素数。",
              "数轴上是否有无穷多个这样的素数？"
            ],
            "mystery": "它们是现代网络安全的基石：RSA 与 Diffie-Hellman 加密算法大量依赖安全素数守护银行交易！",
            "funFact": "法国传奇女数学家索菲·热尔曼在1820年代利用它们取得了证明费马大定理的历史性突破！"
          },
          "investigators": {
            "tagline": "哈代-李特尔伍德猜想与线性筛法。",
            "analogy": "哈代-李特尔伍德猜想预测其计数渐近于 2 C_2 x / (log x)²，与孪生素数常数密切相关。",
            "rules": [
              "线性形式：(p, 2p + 1)。",
              "陈景润定理：2p + 1 是素数或殆素数 P_2。",
              "Lean 4 形式化陈氏筛法引理。"
            ],
            "mystery": "陶哲轩与梅纳德的高维筛法技术能否最终攻破索菲·热尔曼素数的无穷性？",
            "funFact": "索菲·热尔曼于1825年前后在巴黎发现并应用。"
          },
          "pioneers": {
            "tagline": "密码学安全素数与离散对数抗攻击性。",
            "analogy": "安全素数能杜绝 Pohlig-Hellman 攻击，确保密码体制坚不可摧。",
            "rules": [
              "离散对数抗攻击理论。",
              "密码学大素数批量生成。",
              "Mathlib 中素数链的机器检验。"
            ],
            "mystery": "AI 自动化证明正在尝试构造打破奇偶性障碍的新型混合筛法。",
            "funFact": "索菲·热尔曼素数完美融合了数论纯粹之美与当代数字信息安全。"
          }
        },
        "history": [
          {
            "year": "1825",
            "author": "索菲·热尔曼",
            "note": "引入此类素数并攻破费马大定理第一情形。"
          },
          {
            "year": "1923",
            "author": "哈代 & 李特尔伍德",
            "note": "给出精确的渐近分布密度猜想。"
          },
          {
            "year": "2016",
            "author": "分布式计算网络",
            "note": "发现长达 388,342 位的新纪录级索菲·热尔曼素数。"
          }
        ]
      },
      "zh-Hant": {
        "name": "Sophie Germain Primes",
        "subtitle": "Infinitude of Primes Where 2p + 1 is Also Prime",
        "field": "Cryptography & Sieve Theory",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can a prime double itself and add 1 to create another prime forever?",
            "analogy": "A prime p is a Sophie Germain prime if 2p + 1 is ALSO prime! For example: 2 -> 5, 3 -> 7, 5 -> 11, 11 -> 23. Are there infinitely many such magic prime pairs?",
            "rules": [
              "Pick a prime p (like 11).",
              "Compute 2p + 1 (2 × 11 + 1 = 23).",
              "23 is prime! So 11 is a Sophie Germain prime.",
              "Do these pairs continue forever?"
            ],
            "mystery": "Essential for cybersecurity: RSA and Diffie-Hellman cryptographic keys use these safe primes to protect internet banking!",
            "funFact": "French mathematician Sophie Germain used these primes in the 1820s to make the first major breakthrough on Fermat's Last Theorem!"
          },
          "investigators": {
            "tagline": "Hardy-Littlewood conjecture and Dickson's linear forms.",
            "analogy": "The first Hardy-Littlewood conjecture predicts the density C_2 x / (log x)² where C_2 is the twin prime constant.",
            "rules": [
              "Linear forms: (p, 2p + 1).",
              "Chen's Theorem: 2p + 1 is prime or almost prime (P_2).",
              "Lean 4 formal statements."
            ],
            "mystery": "Can Maynard-Tao multidimensional sieve techniques prove the infinitude of Sophie Germain primes?",
            "funFact": "Sophie Germain discovered these around 1825 in Paris."
          },
          "pioneers": {
            "tagline": "Cryptographic safe primes and discrete logarithm security.",
            "analogy": "Safe primes prevent Pohlig-Hellman attacks by ensuring p-1 has a large prime factor.",
            "rules": [
              "Pohlig-Hellman discrete log resistance.",
              "Batch prime generation algorithms.",
              "Mathlib verification of primality chains."
            ],
            "mystery": "AI automated theorem proving is exploring parity-breaking sieve variants.",
            "funFact": "Sophie Germain's legacy connects pure Diophantine beauty with modern digital security."
          }
        },
        "history": [
          {
            "year": "1825",
            "author": "Sophie Germain",
            "note": "Introduces these primes to attack Fermat's Last Theorem."
          },
          {
            "year": "1923",
            "author": "Hardy & Littlewood",
            "note": "Conjecture precise asymptotic density."
          },
          {
            "year": "2016",
            "author": "Distributed Computing",
            "note": "Discovers record Sophie Germain prime with 388,342 digits."
          }
        ]
      }
    }
  },
  {
    "id": "fermat-primes",
    "icon": "🔺",
    "difficulty": "All Ages",
    "domain": "number-theory",
    "category": "number-theory",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Data.Nat.Prime\ndef FermatNumber (k : ℕ) := 2^(2^k) + 1\ndef FinitudeFermatPrimes : Prop := {k : ℕ | Nat.Prime (FermatNumber k)}.Finite",
    "locales": {
      "en": {
        "name": "Finitude of Fermat Primes",
        "subtitle": "Are There Only 5 Fermat Primes in the Universe?",
        "field": "Constructible Polygons & Power of Two Exponents",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Why did the Fermat prime clock stop forever after 65,537?",
            "analogy": "Numbers of the form F_k = 2^(2^k) + 1. Fermat computed the first five: 3, 5, 17, 257, 65537 and thought ALL of them were prime! But Euler found that F_5 = 4,294,967,297 = 641 × 6,700,417 is composite. Is 65,537 the LAST Fermat prime?",
            "rules": [
              "k=0: 2¹ + 1 = 3 (Prime).",
              "k=1: 2² + 1 = 5 (Prime).",
              "k=2: 2⁴ + 1 = 17 (Prime).",
              "k=3: 2⁸ + 1 = 257 (Prime).",
              "k=4: 2¹⁶ + 1 = 65,537 (Prime).",
              "k=5+: All tested are COMPOSITE!"
            ],
            "mystery": "Gauss proved that a regular polygon with N sides can be constructed with ruler and compass if and only if N is a power of 2 times distinct Fermat primes!",
            "funFact": "Every Fermat number up to F_32 has been checked, and every single one is composite!"
          },
          "investigators": {
            "tagline": "Pépin's test and heuristic divergence of prime probabilities.",
            "analogy": "By the heuristic probability model, the expected number of Fermat primes beyond F_4 is ∑ 1 / log(F_k) = ∑ 1 / (2^k log 2) < 1, which strongly predicts no more exist.",
            "rules": [
              "Pépin's test: F_k is prime ↔ 3^((F_k - 1)/2) ≡ -1 (mod F_k).",
              "Heuristic sum ∑ 2^{-k} converges.",
              "Mathlib formalization of Pépin's test."
            ],
            "mystery": "Can an unconditional proof establish that F_k is composite for all k ≥ 5?",
            "funFact": "Pierre de Fermat conjectured in 1650 that all F_k are prime."
          },
          "pioneers": {
            "tagline": "Algebraic factorizations and Proth's theorem.",
            "analogy": "Every prime factor of F_k must be of the form k · 2^{m+2} + 1, enabling efficient factorization search.",
            "rules": [
              "Euler factor 641 = 5 × 2⁷ + 1.",
              "Constructible polygons Galois criterion in Mathlib.",
              "Formal verification of Gauss-Wantzel theorem."
            ],
            "mystery": "AI-guided search has found factors for massive Fermat numbers exceeding billions of digits.",
            "funFact": "The finiteness of Fermat primes is universally expected by modern number theorists."
          }
        },
        "history": [
          {
            "year": "1650",
            "author": "Pierre de Fermat",
            "note": "Conjectures all F_k are prime."
          },
          {
            "year": "1732",
            "author": "Leonhard Euler",
            "note": "Disproves Fermat by factoring F_5 = 641 × 6,700,417."
          },
          {
            "year": "1796",
            "author": "Carl Friedrich Gauss",
            "note": "Links Fermat primes to ruler-and-compass polygon constructibility."
          }
        ]
      },
      "de": {
        "name": "Finitude of Fermat Primes",
        "subtitle": "Are There Only 5 Fermat Primes in the Universe?",
        "field": "Constructible Polygons & Power of Two Exponents",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Why did the Fermat prime clock stop forever after 65,537?",
            "analogy": "Numbers of the form F_k = 2^(2^k) + 1. Fermat computed the first five: 3, 5, 17, 257, 65537 and thought ALL of them were prime! But Euler found that F_5 = 4,294,967,297 = 641 × 6,700,417 is composite. Is 65,537 the LAST Fermat prime?",
            "rules": [
              "k=0: 2¹ + 1 = 3 (Prime).",
              "k=1: 2² + 1 = 5 (Prime).",
              "k=2: 2⁴ + 1 = 17 (Prime).",
              "k=3: 2⁸ + 1 = 257 (Prime).",
              "k=4: 2¹⁶ + 1 = 65,537 (Prime).",
              "k=5+: All tested are COMPOSITE!"
            ],
            "mystery": "Gauss proved that a regular polygon with N sides can be constructed with ruler and compass if and only if N is a power of 2 times distinct Fermat primes!",
            "funFact": "Every Fermat number up to F_32 has been checked, and every single one is composite!"
          },
          "investigators": {
            "tagline": "Pépin's test and heuristic divergence of prime probabilities.",
            "analogy": "By the heuristic probability model, the expected number of Fermat primes beyond F_4 is ∑ 1 / log(F_k) = ∑ 1 / (2^k log 2) < 1, which strongly predicts no more exist.",
            "rules": [
              "Pépin's test: F_k is prime ↔ 3^((F_k - 1)/2) ≡ -1 (mod F_k).",
              "Heuristic sum ∑ 2^{-k} converges.",
              "Mathlib formalization of Pépin's test."
            ],
            "mystery": "Can an unconditional proof establish that F_k is composite for all k ≥ 5?",
            "funFact": "Pierre de Fermat conjectured in 1650 that all F_k are prime."
          },
          "pioneers": {
            "tagline": "Algebraic factorizations and Proth's theorem.",
            "analogy": "Every prime factor of F_k must be of the form k · 2^{m+2} + 1, enabling efficient factorization search.",
            "rules": [
              "Euler factor 641 = 5 × 2⁷ + 1.",
              "Constructible polygons Galois criterion in Mathlib.",
              "Formal verification of Gauss-Wantzel theorem."
            ],
            "mystery": "AI-guided search has found factors for massive Fermat numbers exceeding billions of digits.",
            "funFact": "The finiteness of Fermat primes is universally expected by modern number theorists."
          }
        },
        "history": [
          {
            "year": "1650",
            "author": "Pierre de Fermat",
            "note": "Conjectures all F_k are prime."
          },
          {
            "year": "1732",
            "author": "Leonhard Euler",
            "note": "Disproves Fermat by factoring F_5 = 641 × 6,700,417."
          },
          {
            "year": "1796",
            "author": "Carl Friedrich Gauss",
            "note": "Links Fermat primes to ruler-and-compass polygon constructibility."
          }
        ]
      },
      "fr": {
        "name": "Finitude of Fermat Primes",
        "subtitle": "Are There Only 5 Fermat Primes in the Universe?",
        "field": "Constructible Polygons & Power of Two Exponents",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Why did the Fermat prime clock stop forever after 65,537?",
            "analogy": "Numbers of the form F_k = 2^(2^k) + 1. Fermat computed the first five: 3, 5, 17, 257, 65537 and thought ALL of them were prime! But Euler found that F_5 = 4,294,967,297 = 641 × 6,700,417 is composite. Is 65,537 the LAST Fermat prime?",
            "rules": [
              "k=0: 2¹ + 1 = 3 (Prime).",
              "k=1: 2² + 1 = 5 (Prime).",
              "k=2: 2⁴ + 1 = 17 (Prime).",
              "k=3: 2⁸ + 1 = 257 (Prime).",
              "k=4: 2¹⁶ + 1 = 65,537 (Prime).",
              "k=5+: All tested are COMPOSITE!"
            ],
            "mystery": "Gauss proved that a regular polygon with N sides can be constructed with ruler and compass if and only if N is a power of 2 times distinct Fermat primes!",
            "funFact": "Every Fermat number up to F_32 has been checked, and every single one is composite!"
          },
          "investigators": {
            "tagline": "Pépin's test and heuristic divergence of prime probabilities.",
            "analogy": "By the heuristic probability model, the expected number of Fermat primes beyond F_4 is ∑ 1 / log(F_k) = ∑ 1 / (2^k log 2) < 1, which strongly predicts no more exist.",
            "rules": [
              "Pépin's test: F_k is prime ↔ 3^((F_k - 1)/2) ≡ -1 (mod F_k).",
              "Heuristic sum ∑ 2^{-k} converges.",
              "Mathlib formalization of Pépin's test."
            ],
            "mystery": "Can an unconditional proof establish that F_k is composite for all k ≥ 5?",
            "funFact": "Pierre de Fermat conjectured in 1650 that all F_k are prime."
          },
          "pioneers": {
            "tagline": "Algebraic factorizations and Proth's theorem.",
            "analogy": "Every prime factor of F_k must be of the form k · 2^{m+2} + 1, enabling efficient factorization search.",
            "rules": [
              "Euler factor 641 = 5 × 2⁷ + 1.",
              "Constructible polygons Galois criterion in Mathlib.",
              "Formal verification of Gauss-Wantzel theorem."
            ],
            "mystery": "AI-guided search has found factors for massive Fermat numbers exceeding billions of digits.",
            "funFact": "The finiteness of Fermat primes is universally expected by modern number theorists."
          }
        },
        "history": [
          {
            "year": "1650",
            "author": "Pierre de Fermat",
            "note": "Conjectures all F_k are prime."
          },
          {
            "year": "1732",
            "author": "Leonhard Euler",
            "note": "Disproves Fermat by factoring F_5 = 641 × 6,700,417."
          },
          {
            "year": "1796",
            "author": "Carl Friedrich Gauss",
            "note": "Links Fermat primes to ruler-and-compass polygon constructibility."
          }
        ]
      },
      "it": {
        "name": "Finitude of Fermat Primes",
        "subtitle": "Are There Only 5 Fermat Primes in the Universe?",
        "field": "Constructible Polygons & Power of Two Exponents",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Why did the Fermat prime clock stop forever after 65,537?",
            "analogy": "Numbers of the form F_k = 2^(2^k) + 1. Fermat computed the first five: 3, 5, 17, 257, 65537 and thought ALL of them were prime! But Euler found that F_5 = 4,294,967,297 = 641 × 6,700,417 is composite. Is 65,537 the LAST Fermat prime?",
            "rules": [
              "k=0: 2¹ + 1 = 3 (Prime).",
              "k=1: 2² + 1 = 5 (Prime).",
              "k=2: 2⁴ + 1 = 17 (Prime).",
              "k=3: 2⁸ + 1 = 257 (Prime).",
              "k=4: 2¹⁶ + 1 = 65,537 (Prime).",
              "k=5+: All tested are COMPOSITE!"
            ],
            "mystery": "Gauss proved that a regular polygon with N sides can be constructed with ruler and compass if and only if N is a power of 2 times distinct Fermat primes!",
            "funFact": "Every Fermat number up to F_32 has been checked, and every single one is composite!"
          },
          "investigators": {
            "tagline": "Pépin's test and heuristic divergence of prime probabilities.",
            "analogy": "By the heuristic probability model, the expected number of Fermat primes beyond F_4 is ∑ 1 / log(F_k) = ∑ 1 / (2^k log 2) < 1, which strongly predicts no more exist.",
            "rules": [
              "Pépin's test: F_k is prime ↔ 3^((F_k - 1)/2) ≡ -1 (mod F_k).",
              "Heuristic sum ∑ 2^{-k} converges.",
              "Mathlib formalization of Pépin's test."
            ],
            "mystery": "Can an unconditional proof establish that F_k is composite for all k ≥ 5?",
            "funFact": "Pierre de Fermat conjectured in 1650 that all F_k are prime."
          },
          "pioneers": {
            "tagline": "Algebraic factorizations and Proth's theorem.",
            "analogy": "Every prime factor of F_k must be of the form k · 2^{m+2} + 1, enabling efficient factorization search.",
            "rules": [
              "Euler factor 641 = 5 × 2⁷ + 1.",
              "Constructible polygons Galois criterion in Mathlib.",
              "Formal verification of Gauss-Wantzel theorem."
            ],
            "mystery": "AI-guided search has found factors for massive Fermat numbers exceeding billions of digits.",
            "funFact": "The finiteness of Fermat primes is universally expected by modern number theorists."
          }
        },
        "history": [
          {
            "year": "1650",
            "author": "Pierre de Fermat",
            "note": "Conjectures all F_k are prime."
          },
          {
            "year": "1732",
            "author": "Leonhard Euler",
            "note": "Disproves Fermat by factoring F_5 = 641 × 6,700,417."
          },
          {
            "year": "1796",
            "author": "Carl Friedrich Gauss",
            "note": "Links Fermat primes to ruler-and-compass polygon constructibility."
          }
        ]
      },
      "ja": {
        "name": "Finitude of Fermat Primes",
        "subtitle": "Are There Only 5 Fermat Primes in the Universe?",
        "field": "Constructible Polygons & Power of Two Exponents",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Why did the Fermat prime clock stop forever after 65,537?",
            "analogy": "Numbers of the form F_k = 2^(2^k) + 1. Fermat computed the first five: 3, 5, 17, 257, 65537 and thought ALL of them were prime! But Euler found that F_5 = 4,294,967,297 = 641 × 6,700,417 is composite. Is 65,537 the LAST Fermat prime?",
            "rules": [
              "k=0: 2¹ + 1 = 3 (Prime).",
              "k=1: 2² + 1 = 5 (Prime).",
              "k=2: 2⁴ + 1 = 17 (Prime).",
              "k=3: 2⁸ + 1 = 257 (Prime).",
              "k=4: 2¹⁶ + 1 = 65,537 (Prime).",
              "k=5+: All tested are COMPOSITE!"
            ],
            "mystery": "Gauss proved that a regular polygon with N sides can be constructed with ruler and compass if and only if N is a power of 2 times distinct Fermat primes!",
            "funFact": "Every Fermat number up to F_32 has been checked, and every single one is composite!"
          },
          "investigators": {
            "tagline": "Pépin's test and heuristic divergence of prime probabilities.",
            "analogy": "By the heuristic probability model, the expected number of Fermat primes beyond F_4 is ∑ 1 / log(F_k) = ∑ 1 / (2^k log 2) < 1, which strongly predicts no more exist.",
            "rules": [
              "Pépin's test: F_k is prime ↔ 3^((F_k - 1)/2) ≡ -1 (mod F_k).",
              "Heuristic sum ∑ 2^{-k} converges.",
              "Mathlib formalization of Pépin's test."
            ],
            "mystery": "Can an unconditional proof establish that F_k is composite for all k ≥ 5?",
            "funFact": "Pierre de Fermat conjectured in 1650 that all F_k are prime."
          },
          "pioneers": {
            "tagline": "Algebraic factorizations and Proth's theorem.",
            "analogy": "Every prime factor of F_k must be of the form k · 2^{m+2} + 1, enabling efficient factorization search.",
            "rules": [
              "Euler factor 641 = 5 × 2⁷ + 1.",
              "Constructible polygons Galois criterion in Mathlib.",
              "Formal verification of Gauss-Wantzel theorem."
            ],
            "mystery": "AI-guided search has found factors for massive Fermat numbers exceeding billions of digits.",
            "funFact": "The finiteness of Fermat primes is universally expected by modern number theorists."
          }
        },
        "history": [
          {
            "year": "1650",
            "author": "Pierre de Fermat",
            "note": "Conjectures all F_k are prime."
          },
          {
            "year": "1732",
            "author": "Leonhard Euler",
            "note": "Disproves Fermat by factoring F_5 = 641 × 6,700,417."
          },
          {
            "year": "1796",
            "author": "Carl Friedrich Gauss",
            "note": "Links Fermat primes to ruler-and-compass polygon constructibility."
          }
        ]
      },
      "ko": {
        "name": "Finitude of Fermat Primes",
        "subtitle": "Are There Only 5 Fermat Primes in the Universe?",
        "field": "Constructible Polygons & Power of Two Exponents",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Why did the Fermat prime clock stop forever after 65,537?",
            "analogy": "Numbers of the form F_k = 2^(2^k) + 1. Fermat computed the first five: 3, 5, 17, 257, 65537 and thought ALL of them were prime! But Euler found that F_5 = 4,294,967,297 = 641 × 6,700,417 is composite. Is 65,537 the LAST Fermat prime?",
            "rules": [
              "k=0: 2¹ + 1 = 3 (Prime).",
              "k=1: 2² + 1 = 5 (Prime).",
              "k=2: 2⁴ + 1 = 17 (Prime).",
              "k=3: 2⁸ + 1 = 257 (Prime).",
              "k=4: 2¹⁶ + 1 = 65,537 (Prime).",
              "k=5+: All tested are COMPOSITE!"
            ],
            "mystery": "Gauss proved that a regular polygon with N sides can be constructed with ruler and compass if and only if N is a power of 2 times distinct Fermat primes!",
            "funFact": "Every Fermat number up to F_32 has been checked, and every single one is composite!"
          },
          "investigators": {
            "tagline": "Pépin's test and heuristic divergence of prime probabilities.",
            "analogy": "By the heuristic probability model, the expected number of Fermat primes beyond F_4 is ∑ 1 / log(F_k) = ∑ 1 / (2^k log 2) < 1, which strongly predicts no more exist.",
            "rules": [
              "Pépin's test: F_k is prime ↔ 3^((F_k - 1)/2) ≡ -1 (mod F_k).",
              "Heuristic sum ∑ 2^{-k} converges.",
              "Mathlib formalization of Pépin's test."
            ],
            "mystery": "Can an unconditional proof establish that F_k is composite for all k ≥ 5?",
            "funFact": "Pierre de Fermat conjectured in 1650 that all F_k are prime."
          },
          "pioneers": {
            "tagline": "Algebraic factorizations and Proth's theorem.",
            "analogy": "Every prime factor of F_k must be of the form k · 2^{m+2} + 1, enabling efficient factorization search.",
            "rules": [
              "Euler factor 641 = 5 × 2⁷ + 1.",
              "Constructible polygons Galois criterion in Mathlib.",
              "Formal verification of Gauss-Wantzel theorem."
            ],
            "mystery": "AI-guided search has found factors for massive Fermat numbers exceeding billions of digits.",
            "funFact": "The finiteness of Fermat primes is universally expected by modern number theorists."
          }
        },
        "history": [
          {
            "year": "1650",
            "author": "Pierre de Fermat",
            "note": "Conjectures all F_k are prime."
          },
          {
            "year": "1732",
            "author": "Leonhard Euler",
            "note": "Disproves Fermat by factoring F_5 = 641 × 6,700,417."
          },
          {
            "year": "1796",
            "author": "Carl Friedrich Gauss",
            "note": "Links Fermat primes to ruler-and-compass polygon constructibility."
          }
        ]
      },
      "zh-Hans": {
        "name": "费马素数有限性猜想",
        "subtitle": "形如 2^(2^k) + 1 的费马素数全宇宙是否只有 5 个？",
        "field": "可作图多边形 & 二次幂阶数论",
        "statusBadge": "未解之谜",
        "grades": {
          "explorers": {
            "tagline": "为什么正多边形尺规作图的素数时钟，在 65537 之后便陷入了永久的死寂？",
            "analogy": "费马数的形式为 2^(2^k) + 1。费马算出了前五个：3, 5, 17, 257, 65537，并自信地猜想它们全都是素数！然而一百年后欧拉指出：F_5 = 4294967297 能被 641 整除，是个合数！在这之后的巨大费马数中，还会不会有任何一个素数？",
            "rules": [
              "k=0：2¹ + 1 = 3（素数）。",
              "k=1：2² + 1 = 5（素数）。",
              "k=2：2⁴ + 1 = 17（素数）。",
              "k=3：2⁸ + 1 = 257（素数）。",
              "k=4：2¹⁶ + 1 = 65537（素数）。",
              "k=5 及以上：所有已算出的无一例外全都是合数！"
            ],
            "mystery": "高斯在19岁时证明：正 N 边形能用尺规作图的充要条件，就是 N 为 2 的幂乘以若干互不相同的费马素数！",
            "funFact": "人类已经检验了直到 F_32 的所有费马数，全部都被证明是合数！"
          },
          "investigators": {
            "tagline": "佩平素性检验与素数概率收敛级数。",
            "analogy": "根据启发式素数概率模型，F_4 之后出现素数的期望总数形成一个快速收敛的几何级数，总和甚至不到 1，强烈预示着绝无新素数！",
            "rules": [
              "佩平测试：F_k 为素数当且仅当 3^((F_k - 1)/2) ≡ -1 (mod F_k)。",
              "期望素数个数收敛级数。",
              "Lean 4 Mathlib 中佩平定理形式化。"
            ],
            "mystery": "能否给出一个无条件的严格证明，宣布对于所有 k ≥ 5，F_k 必定全为合数？",
            "funFact": "皮埃尔·德·费马于1650年提出全素数猜想。"
          },
          "pioneers": {
            "tagline": "代数因式分解与普罗斯定理。",
            "analogy": "F_k 的素因子必具有 k · 2^{m+2} + 1 的极特殊形式，使得计算机排查极具针对性。",
            "rules": [
              "欧拉因子分解 641 = 5 × 2⁷ + 1。",
              "Mathlib 中的高斯-旺策尔尺规作图判别定理。",
              "费马数整除性公理化证明。"
            ],
            "mystery": "AI 搜索算法已经为极其庞大的费马数找到了具体的素因子。",
            "funFact": "当今数论学界普遍坚信费马素数总共就只有 5 个，不多也不少。"
          }
        },
        "history": [
          {
            "year": "1650",
            "author": "皮埃尔·德·费马",
            "note": "猜想所有 F_k 均为素数。"
          },
          {
            "year": "1732",
            "author": "欧拉",
            "note": "算出 641 能整除 F_5，推翻费马猜想。"
          },
          {
            "year": "1796",
            "author": "高斯",
            "note": "揭示费马素数与正十七边形尺规作图的深刻联系。"
          }
        ]
      },
      "zh-Hant": {
        "name": "Finitude of Fermat Primes",
        "subtitle": "Are There Only 5 Fermat Primes in the Universe?",
        "field": "Constructible Polygons & Power of Two Exponents",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Why did the Fermat prime clock stop forever after 65,537?",
            "analogy": "Numbers of the form F_k = 2^(2^k) + 1. Fermat computed the first five: 3, 5, 17, 257, 65537 and thought ALL of them were prime! But Euler found that F_5 = 4,294,967,297 = 641 × 6,700,417 is composite. Is 65,537 the LAST Fermat prime?",
            "rules": [
              "k=0: 2¹ + 1 = 3 (Prime).",
              "k=1: 2² + 1 = 5 (Prime).",
              "k=2: 2⁴ + 1 = 17 (Prime).",
              "k=3: 2⁸ + 1 = 257 (Prime).",
              "k=4: 2¹⁶ + 1 = 65,537 (Prime).",
              "k=5+: All tested are COMPOSITE!"
            ],
            "mystery": "Gauss proved that a regular polygon with N sides can be constructed with ruler and compass if and only if N is a power of 2 times distinct Fermat primes!",
            "funFact": "Every Fermat number up to F_32 has been checked, and every single one is composite!"
          },
          "investigators": {
            "tagline": "Pépin's test and heuristic divergence of prime probabilities.",
            "analogy": "By the heuristic probability model, the expected number of Fermat primes beyond F_4 is ∑ 1 / log(F_k) = ∑ 1 / (2^k log 2) < 1, which strongly predicts no more exist.",
            "rules": [
              "Pépin's test: F_k is prime ↔ 3^((F_k - 1)/2) ≡ -1 (mod F_k).",
              "Heuristic sum ∑ 2^{-k} converges.",
              "Mathlib formalization of Pépin's test."
            ],
            "mystery": "Can an unconditional proof establish that F_k is composite for all k ≥ 5?",
            "funFact": "Pierre de Fermat conjectured in 1650 that all F_k are prime."
          },
          "pioneers": {
            "tagline": "Algebraic factorizations and Proth's theorem.",
            "analogy": "Every prime factor of F_k must be of the form k · 2^{m+2} + 1, enabling efficient factorization search.",
            "rules": [
              "Euler factor 641 = 5 × 2⁷ + 1.",
              "Constructible polygons Galois criterion in Mathlib.",
              "Formal verification of Gauss-Wantzel theorem."
            ],
            "mystery": "AI-guided search has found factors for massive Fermat numbers exceeding billions of digits.",
            "funFact": "The finiteness of Fermat primes is universally expected by modern number theorists."
          }
        },
        "history": [
          {
            "year": "1650",
            "author": "Pierre de Fermat",
            "note": "Conjectures all F_k are prime."
          },
          {
            "year": "1732",
            "author": "Leonhard Euler",
            "note": "Disproves Fermat by factoring F_5 = 641 × 6,700,417."
          },
          {
            "year": "1796",
            "author": "Carl Friedrich Gauss",
            "note": "Links Fermat primes to ruler-and-compass polygon constructibility."
          }
        ]
      }
    }
  },
  {
    "id": "wilson-primes",
    "icon": "🧪",
    "difficulty": "Intermediate",
    "domain": "number-theory",
    "category": "number-theory",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Data.Nat.Prime\ndef WilsonPrime (p : ℕ) : Prop := Nat.Prime p ∧ (p^2 ∣ Nat.factorial (p - 1) + 1)",
    "locales": {
      "en": {
        "name": "Wilson Primes Problem",
        "subtitle": "Primes Where p² Divides (p-1)! + 1",
        "field": "Modular Factorials & Wilson's Theorem",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Wilson's theorem works for every prime, but who gets the double-square gold medal?",
            "analogy": "Wilson's theorem says (p-1)! + 1 is always divisible by p. But for rare primes, it is divisible by p²! Only THREE Wilson primes are known in the entire history of mathematics: 5, 13, and 563. Are there infinitely many or only a few?",
            "rules": [
              "Compute (p-1)! + 1.",
              "Wilson: Always divisible by p.",
              "Check if divisible by p²: (5-1)!+1 = 25 (divisible by 5²=25!).",
              "5, 13, 563 work! Are there more?"
            ],
            "mystery": "Extensive searches on supercomputers have tested all primes up to 2 × 10^13, and found no other Wilson primes!",
            "funFact": "The heuristic probability of a prime being a Wilson prime is 1/p, so ∑ 1/p implies infinitely many exist, but extremely sparse!"
          },
          "investigators": {
            "tagline": "Wilson quotients W(p) = ((p-1)! + 1)/p mod p.",
            "analogy": "The problem is equivalent to finding primes p with Wilson quotient W(p) ≡ 0 (mod p). Tied to Wieferich primes and Wall-Sun-Sun primes.",
            "rules": [
              "Wilson quotient: W(p) ≡ 0 (mod p).",
              "Verified up to 2 × 10^13.",
              "Mathlib formalization of Wilson's Theorem."
            ],
            "mystery": "Can analytic number theory prove that W(p) mod p behaves like a pseudorandom uniform variable?",
            "funFact": "John Wilson stated the theorem in 1770; the p² question was framed in the 19th century."
          },
          "pioneers": {
            "tagline": "p-adic gamma function and Iwasawa invariants.",
            "analogy": "Wilson quotients relate to the derivative of the Morita p-adic Gamma function at 1.",
            "rules": [
              "Morita p-adic gamma function.",
              "Iwasawa cyclotomic invariants.",
              "Lean 4 formal verification."
            ],
            "mystery": "AI-guided modular algorithms are searching for the elusive 4th Wilson prime.",
            "funFact": "Wilson primes are among the rarest and most enigmatic entities in arithmetic."
          }
        },
        "history": [
          {
            "year": "1770",
            "author": "John Wilson & Edward Waring",
            "note": "Waring publishes Wilson's theorem in Meditationes Algebraicae."
          },
          {
            "year": "1953",
            "author": "Karl Goldberg",
            "note": "Discovers 563, the third and last known Wilson prime."
          },
          {
            "year": "2020",
            "author": "Costa, Gerbicz & Harvey",
            "note": "Search primes up to 2 × 10^13."
          }
        ]
      },
      "de": {
        "name": "Wilson Primes Problem",
        "subtitle": "Primes Where p² Divides (p-1)! + 1",
        "field": "Modular Factorials & Wilson's Theorem",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Wilson's theorem works for every prime, but who gets the double-square gold medal?",
            "analogy": "Wilson's theorem says (p-1)! + 1 is always divisible by p. But for rare primes, it is divisible by p²! Only THREE Wilson primes are known in the entire history of mathematics: 5, 13, and 563. Are there infinitely many or only a few?",
            "rules": [
              "Compute (p-1)! + 1.",
              "Wilson: Always divisible by p.",
              "Check if divisible by p²: (5-1)!+1 = 25 (divisible by 5²=25!).",
              "5, 13, 563 work! Are there more?"
            ],
            "mystery": "Extensive searches on supercomputers have tested all primes up to 2 × 10^13, and found no other Wilson primes!",
            "funFact": "The heuristic probability of a prime being a Wilson prime is 1/p, so ∑ 1/p implies infinitely many exist, but extremely sparse!"
          },
          "investigators": {
            "tagline": "Wilson quotients W(p) = ((p-1)! + 1)/p mod p.",
            "analogy": "The problem is equivalent to finding primes p with Wilson quotient W(p) ≡ 0 (mod p). Tied to Wieferich primes and Wall-Sun-Sun primes.",
            "rules": [
              "Wilson quotient: W(p) ≡ 0 (mod p).",
              "Verified up to 2 × 10^13.",
              "Mathlib formalization of Wilson's Theorem."
            ],
            "mystery": "Can analytic number theory prove that W(p) mod p behaves like a pseudorandom uniform variable?",
            "funFact": "John Wilson stated the theorem in 1770; the p² question was framed in the 19th century."
          },
          "pioneers": {
            "tagline": "p-adic gamma function and Iwasawa invariants.",
            "analogy": "Wilson quotients relate to the derivative of the Morita p-adic Gamma function at 1.",
            "rules": [
              "Morita p-adic gamma function.",
              "Iwasawa cyclotomic invariants.",
              "Lean 4 formal verification."
            ],
            "mystery": "AI-guided modular algorithms are searching for the elusive 4th Wilson prime.",
            "funFact": "Wilson primes are among the rarest and most enigmatic entities in arithmetic."
          }
        },
        "history": [
          {
            "year": "1770",
            "author": "John Wilson & Edward Waring",
            "note": "Waring publishes Wilson's theorem in Meditationes Algebraicae."
          },
          {
            "year": "1953",
            "author": "Karl Goldberg",
            "note": "Discovers 563, the third and last known Wilson prime."
          },
          {
            "year": "2020",
            "author": "Costa, Gerbicz & Harvey",
            "note": "Search primes up to 2 × 10^13."
          }
        ]
      },
      "fr": {
        "name": "Wilson Primes Problem",
        "subtitle": "Primes Where p² Divides (p-1)! + 1",
        "field": "Modular Factorials & Wilson's Theorem",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Wilson's theorem works for every prime, but who gets the double-square gold medal?",
            "analogy": "Wilson's theorem says (p-1)! + 1 is always divisible by p. But for rare primes, it is divisible by p²! Only THREE Wilson primes are known in the entire history of mathematics: 5, 13, and 563. Are there infinitely many or only a few?",
            "rules": [
              "Compute (p-1)! + 1.",
              "Wilson: Always divisible by p.",
              "Check if divisible by p²: (5-1)!+1 = 25 (divisible by 5²=25!).",
              "5, 13, 563 work! Are there more?"
            ],
            "mystery": "Extensive searches on supercomputers have tested all primes up to 2 × 10^13, and found no other Wilson primes!",
            "funFact": "The heuristic probability of a prime being a Wilson prime is 1/p, so ∑ 1/p implies infinitely many exist, but extremely sparse!"
          },
          "investigators": {
            "tagline": "Wilson quotients W(p) = ((p-1)! + 1)/p mod p.",
            "analogy": "The problem is equivalent to finding primes p with Wilson quotient W(p) ≡ 0 (mod p). Tied to Wieferich primes and Wall-Sun-Sun primes.",
            "rules": [
              "Wilson quotient: W(p) ≡ 0 (mod p).",
              "Verified up to 2 × 10^13.",
              "Mathlib formalization of Wilson's Theorem."
            ],
            "mystery": "Can analytic number theory prove that W(p) mod p behaves like a pseudorandom uniform variable?",
            "funFact": "John Wilson stated the theorem in 1770; the p² question was framed in the 19th century."
          },
          "pioneers": {
            "tagline": "p-adic gamma function and Iwasawa invariants.",
            "analogy": "Wilson quotients relate to the derivative of the Morita p-adic Gamma function at 1.",
            "rules": [
              "Morita p-adic gamma function.",
              "Iwasawa cyclotomic invariants.",
              "Lean 4 formal verification."
            ],
            "mystery": "AI-guided modular algorithms are searching for the elusive 4th Wilson prime.",
            "funFact": "Wilson primes are among the rarest and most enigmatic entities in arithmetic."
          }
        },
        "history": [
          {
            "year": "1770",
            "author": "John Wilson & Edward Waring",
            "note": "Waring publishes Wilson's theorem in Meditationes Algebraicae."
          },
          {
            "year": "1953",
            "author": "Karl Goldberg",
            "note": "Discovers 563, the third and last known Wilson prime."
          },
          {
            "year": "2020",
            "author": "Costa, Gerbicz & Harvey",
            "note": "Search primes up to 2 × 10^13."
          }
        ]
      },
      "it": {
        "name": "Wilson Primes Problem",
        "subtitle": "Primes Where p² Divides (p-1)! + 1",
        "field": "Modular Factorials & Wilson's Theorem",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Wilson's theorem works for every prime, but who gets the double-square gold medal?",
            "analogy": "Wilson's theorem says (p-1)! + 1 is always divisible by p. But for rare primes, it is divisible by p²! Only THREE Wilson primes are known in the entire history of mathematics: 5, 13, and 563. Are there infinitely many or only a few?",
            "rules": [
              "Compute (p-1)! + 1.",
              "Wilson: Always divisible by p.",
              "Check if divisible by p²: (5-1)!+1 = 25 (divisible by 5²=25!).",
              "5, 13, 563 work! Are there more?"
            ],
            "mystery": "Extensive searches on supercomputers have tested all primes up to 2 × 10^13, and found no other Wilson primes!",
            "funFact": "The heuristic probability of a prime being a Wilson prime is 1/p, so ∑ 1/p implies infinitely many exist, but extremely sparse!"
          },
          "investigators": {
            "tagline": "Wilson quotients W(p) = ((p-1)! + 1)/p mod p.",
            "analogy": "The problem is equivalent to finding primes p with Wilson quotient W(p) ≡ 0 (mod p). Tied to Wieferich primes and Wall-Sun-Sun primes.",
            "rules": [
              "Wilson quotient: W(p) ≡ 0 (mod p).",
              "Verified up to 2 × 10^13.",
              "Mathlib formalization of Wilson's Theorem."
            ],
            "mystery": "Can analytic number theory prove that W(p) mod p behaves like a pseudorandom uniform variable?",
            "funFact": "John Wilson stated the theorem in 1770; the p² question was framed in the 19th century."
          },
          "pioneers": {
            "tagline": "p-adic gamma function and Iwasawa invariants.",
            "analogy": "Wilson quotients relate to the derivative of the Morita p-adic Gamma function at 1.",
            "rules": [
              "Morita p-adic gamma function.",
              "Iwasawa cyclotomic invariants.",
              "Lean 4 formal verification."
            ],
            "mystery": "AI-guided modular algorithms are searching for the elusive 4th Wilson prime.",
            "funFact": "Wilson primes are among the rarest and most enigmatic entities in arithmetic."
          }
        },
        "history": [
          {
            "year": "1770",
            "author": "John Wilson & Edward Waring",
            "note": "Waring publishes Wilson's theorem in Meditationes Algebraicae."
          },
          {
            "year": "1953",
            "author": "Karl Goldberg",
            "note": "Discovers 563, the third and last known Wilson prime."
          },
          {
            "year": "2020",
            "author": "Costa, Gerbicz & Harvey",
            "note": "Search primes up to 2 × 10^13."
          }
        ]
      },
      "ja": {
        "name": "Wilson Primes Problem",
        "subtitle": "Primes Where p² Divides (p-1)! + 1",
        "field": "Modular Factorials & Wilson's Theorem",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Wilson's theorem works for every prime, but who gets the double-square gold medal?",
            "analogy": "Wilson's theorem says (p-1)! + 1 is always divisible by p. But for rare primes, it is divisible by p²! Only THREE Wilson primes are known in the entire history of mathematics: 5, 13, and 563. Are there infinitely many or only a few?",
            "rules": [
              "Compute (p-1)! + 1.",
              "Wilson: Always divisible by p.",
              "Check if divisible by p²: (5-1)!+1 = 25 (divisible by 5²=25!).",
              "5, 13, 563 work! Are there more?"
            ],
            "mystery": "Extensive searches on supercomputers have tested all primes up to 2 × 10^13, and found no other Wilson primes!",
            "funFact": "The heuristic probability of a prime being a Wilson prime is 1/p, so ∑ 1/p implies infinitely many exist, but extremely sparse!"
          },
          "investigators": {
            "tagline": "Wilson quotients W(p) = ((p-1)! + 1)/p mod p.",
            "analogy": "The problem is equivalent to finding primes p with Wilson quotient W(p) ≡ 0 (mod p). Tied to Wieferich primes and Wall-Sun-Sun primes.",
            "rules": [
              "Wilson quotient: W(p) ≡ 0 (mod p).",
              "Verified up to 2 × 10^13.",
              "Mathlib formalization of Wilson's Theorem."
            ],
            "mystery": "Can analytic number theory prove that W(p) mod p behaves like a pseudorandom uniform variable?",
            "funFact": "John Wilson stated the theorem in 1770; the p² question was framed in the 19th century."
          },
          "pioneers": {
            "tagline": "p-adic gamma function and Iwasawa invariants.",
            "analogy": "Wilson quotients relate to the derivative of the Morita p-adic Gamma function at 1.",
            "rules": [
              "Morita p-adic gamma function.",
              "Iwasawa cyclotomic invariants.",
              "Lean 4 formal verification."
            ],
            "mystery": "AI-guided modular algorithms are searching for the elusive 4th Wilson prime.",
            "funFact": "Wilson primes are among the rarest and most enigmatic entities in arithmetic."
          }
        },
        "history": [
          {
            "year": "1770",
            "author": "John Wilson & Edward Waring",
            "note": "Waring publishes Wilson's theorem in Meditationes Algebraicae."
          },
          {
            "year": "1953",
            "author": "Karl Goldberg",
            "note": "Discovers 563, the third and last known Wilson prime."
          },
          {
            "year": "2020",
            "author": "Costa, Gerbicz & Harvey",
            "note": "Search primes up to 2 × 10^13."
          }
        ]
      },
      "ko": {
        "name": "Wilson Primes Problem",
        "subtitle": "Primes Where p² Divides (p-1)! + 1",
        "field": "Modular Factorials & Wilson's Theorem",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Wilson's theorem works for every prime, but who gets the double-square gold medal?",
            "analogy": "Wilson's theorem says (p-1)! + 1 is always divisible by p. But for rare primes, it is divisible by p²! Only THREE Wilson primes are known in the entire history of mathematics: 5, 13, and 563. Are there infinitely many or only a few?",
            "rules": [
              "Compute (p-1)! + 1.",
              "Wilson: Always divisible by p.",
              "Check if divisible by p²: (5-1)!+1 = 25 (divisible by 5²=25!).",
              "5, 13, 563 work! Are there more?"
            ],
            "mystery": "Extensive searches on supercomputers have tested all primes up to 2 × 10^13, and found no other Wilson primes!",
            "funFact": "The heuristic probability of a prime being a Wilson prime is 1/p, so ∑ 1/p implies infinitely many exist, but extremely sparse!"
          },
          "investigators": {
            "tagline": "Wilson quotients W(p) = ((p-1)! + 1)/p mod p.",
            "analogy": "The problem is equivalent to finding primes p with Wilson quotient W(p) ≡ 0 (mod p). Tied to Wieferich primes and Wall-Sun-Sun primes.",
            "rules": [
              "Wilson quotient: W(p) ≡ 0 (mod p).",
              "Verified up to 2 × 10^13.",
              "Mathlib formalization of Wilson's Theorem."
            ],
            "mystery": "Can analytic number theory prove that W(p) mod p behaves like a pseudorandom uniform variable?",
            "funFact": "John Wilson stated the theorem in 1770; the p² question was framed in the 19th century."
          },
          "pioneers": {
            "tagline": "p-adic gamma function and Iwasawa invariants.",
            "analogy": "Wilson quotients relate to the derivative of the Morita p-adic Gamma function at 1.",
            "rules": [
              "Morita p-adic gamma function.",
              "Iwasawa cyclotomic invariants.",
              "Lean 4 formal verification."
            ],
            "mystery": "AI-guided modular algorithms are searching for the elusive 4th Wilson prime.",
            "funFact": "Wilson primes are among the rarest and most enigmatic entities in arithmetic."
          }
        },
        "history": [
          {
            "year": "1770",
            "author": "John Wilson & Edward Waring",
            "note": "Waring publishes Wilson's theorem in Meditationes Algebraicae."
          },
          {
            "year": "1953",
            "author": "Karl Goldberg",
            "note": "Discovers 563, the third and last known Wilson prime."
          },
          {
            "year": "2020",
            "author": "Costa, Gerbicz & Harvey",
            "note": "Search primes up to 2 × 10^13."
          }
        ]
      },
      "zh-Hans": {
        "name": "威尔逊素数问题",
        "subtitle": "满足 p² 整除 (p-1)! + 1 的稀世素数",
        "field": "阶乘同余 & 威尔逊定理",
        "statusBadge": "未解之谜",
        "grades": {
          "explorers": {
            "tagline": "威尔逊定理对所有素数都成立，但谁能摘下被 p² 二次整除的纯金奖牌？",
            "analogy": "威尔逊定理指出 (p-1)! + 1 必定能被 p 整除。但对于极罕见的素数，它甚至能被 p² 整除！整个人类数学史上目前只发现了三个威尔逊素数：5, 13, 563。数轴上究竟还有没有第四个？",
            "rules": [
              "计算 (p-1)! + 1。",
              "威尔逊定理：必定能被 p 整除。",
              "检验能否被 p² 整除：(5-1)!+1 = 25，被 25 整除！",
              "目前仅发现 5, 13, 563 三个！"
            ],
            "mystery": "计算机已全面排查至 2 × 10^13，在这之内没有任何新的威尔逊素数！",
            "funFact": "素数成为威尔逊素数的启发式概率为 1/p，级数 ∑ 1/p 发散，预示着无穷多，但稀疏程度超越想象！"
          },
          "investigators": {
            "tagline": "威尔逊商 W(p) = ((p-1)! + 1)/p mod p。",
            "analogy": "问题等价于求威尔逊商在模 p 下等于 0 的素数。与维费里希素数密切相关。",
            "rules": [
              "威尔逊商定义式。",
              "搜索界已达 2 × 10^13。",
              "Lean 4 Mathlib 中威尔逊定理形式化。"
            ],
            "mystery": "解析数论能否证明威尔逊商在模 p 下呈现伪随机均匀分布？",
            "funFact": "约翰·威尔逊于1770年提出定理，二次整除问题随后成为经典谜题。"
          },
          "pioneers": {
            "tagline": "p-进伽马函数与岩泽不变量。",
            "analogy": "威尔逊商与森田 p-进伽马函数在 1 处的一阶导数直接相关。",
            "rules": [
              "森田 p-进伽马函数。",
              "岩泽分圆不变量理论。",
              "Lean 4 形式化数论库。"
            ],
            "mystery": "AI 正在指导大规模分布式算力搜寻极其罕见的第四个威尔逊素数。",
            "funFact": "威尔逊素数是初等数论中最稀有、最神秘的数学奇点之一。"
          }
        },
        "history": [
          {
            "year": "1770",
            "author": "威尔逊 & 沃林",
            "note": "沃林代为发表威尔逊定理。"
          },
          {
            "year": "1953",
            "author": "卡尔·戈德堡",
            "note": "发现第三个威尔逊素数 563。"
          },
          {
            "year": "2020",
            "author": "科斯塔团队",
            "note": "搜索推进至 2 × 10^13 无新解。"
          }
        ]
      },
      "zh-Hant": {
        "name": "Wilson Primes Problem",
        "subtitle": "Primes Where p² Divides (p-1)! + 1",
        "field": "Modular Factorials & Wilson's Theorem",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Wilson's theorem works for every prime, but who gets the double-square gold medal?",
            "analogy": "Wilson's theorem says (p-1)! + 1 is always divisible by p. But for rare primes, it is divisible by p²! Only THREE Wilson primes are known in the entire history of mathematics: 5, 13, and 563. Are there infinitely many or only a few?",
            "rules": [
              "Compute (p-1)! + 1.",
              "Wilson: Always divisible by p.",
              "Check if divisible by p²: (5-1)!+1 = 25 (divisible by 5²=25!).",
              "5, 13, 563 work! Are there more?"
            ],
            "mystery": "Extensive searches on supercomputers have tested all primes up to 2 × 10^13, and found no other Wilson primes!",
            "funFact": "The heuristic probability of a prime being a Wilson prime is 1/p, so ∑ 1/p implies infinitely many exist, but extremely sparse!"
          },
          "investigators": {
            "tagline": "Wilson quotients W(p) = ((p-1)! + 1)/p mod p.",
            "analogy": "The problem is equivalent to finding primes p with Wilson quotient W(p) ≡ 0 (mod p). Tied to Wieferich primes and Wall-Sun-Sun primes.",
            "rules": [
              "Wilson quotient: W(p) ≡ 0 (mod p).",
              "Verified up to 2 × 10^13.",
              "Mathlib formalization of Wilson's Theorem."
            ],
            "mystery": "Can analytic number theory prove that W(p) mod p behaves like a pseudorandom uniform variable?",
            "funFact": "John Wilson stated the theorem in 1770; the p² question was framed in the 19th century."
          },
          "pioneers": {
            "tagline": "p-adic gamma function and Iwasawa invariants.",
            "analogy": "Wilson quotients relate to the derivative of the Morita p-adic Gamma function at 1.",
            "rules": [
              "Morita p-adic gamma function.",
              "Iwasawa cyclotomic invariants.",
              "Lean 4 formal verification."
            ],
            "mystery": "AI-guided modular algorithms are searching for the elusive 4th Wilson prime.",
            "funFact": "Wilson primes are among the rarest and most enigmatic entities in arithmetic."
          }
        },
        "history": [
          {
            "year": "1770",
            "author": "John Wilson & Edward Waring",
            "note": "Waring publishes Wilson's theorem in Meditationes Algebraicae."
          },
          {
            "year": "1953",
            "author": "Karl Goldberg",
            "note": "Discovers 563, the third and last known Wilson prime."
          },
          {
            "year": "2020",
            "author": "Costa, Gerbicz & Harvey",
            "note": "Search primes up to 2 × 10^13."
          }
        ]
      }
    }
  },
  {
    "id": "lychrel-196",
    "icon": "🪞",
    "difficulty": "All Ages",
    "domain": "number-theory",
    "category": "number-theory",
    "isMillennium": false,
    "isAIFrontier": true,
    "simId": "lychrel-sim",
    "leanCode": "import Mathlib.Data.Nat.Basic\ndef reverseDigits (n : ℕ) : ℕ := sorry\ndef isPalindrome (n : ℕ) : Prop := n = reverseDigits n\ndef lychrelStep (n : ℕ) : ℕ := n + reverseDigits n\ndef IsLychrel (n : ℕ) : Prop := ∀ (k : ℕ), ¬ isPalindrome (lychrelStep^[k] n)",
    "locales": {
      "en": {
        "name": "Lychrel Numbers Problem (196 Algorithm)",
        "subtitle": "Does 196 Ever Form a Palindrome Under Reverse-and-Add?",
        "field": "Recreational & Algorithmic Number Theory",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can you trap number 196 in a mirror, or will it run away forever?",
            "analogy": "Take a number, reverse its digits, and add them: 56 + 65 = 121 (a palindrome!). Most numbers become palindromes in a few steps. But 196 has been iterated over ONE BILLION times to over 400 million digits, and has NEVER produced a palindrome! Is it immortal?",
            "rules": [
              "Pick 196.",
              "Reverse digits: 691.",
              "Add: 196 + 691 = 887.",
              "Repeat: 887 + 788 = 1675... never hits symmetry!"
            ],
            "mystery": "The search for a 196 palindrome has produced numbers with over 1,000,000,000 digits without reaching a palindrome!",
            "funFact": "Numbers that never form a palindrome are called Lychrel numbers (an anagram of Cheryl). 196 is the smallest candidate!"
          },
          "investigators": {
            "tagline": "Carries distribution and Markov chain models.",
            "analogy": "The digit addition creates carry bits that propagate symmetrically, but carry patterns disrupt exact mirror symmetry with probability approaching 1.",
            "rules": [
              "Map: T(n) = n + rev(n).",
              "Checked past 10^9 iterations.",
              "Base 2 and base 11 analogs have proved Lychrel numbers exist."
            ],
            "mystery": "Can we rigorously prove that no iteration of 196 in base 10 ever yields a palindrome?",
            "funFact": "Studied extensively since the early computer era in the 1960s."
          },
          "pioneers": {
            "tagline": "Formal language theory and automatic sequences.",
            "analogy": "In base 2, John Conway and others proved that Lychrel numbers provably exist using finite automaton arguments.",
            "rules": [
              "Base-2 proved Lychrel numbers.",
              "Lean 4 digit reversal inductive lemmas.",
              "Carry-propagation stochastic models."
            ],
            "mystery": "AI distributed neural search is scanning carry-free sub-trajectories.",
            "funFact": "196 is the ultimate playground of recreational arithmetic and digital dynamics."
          }
        },
        "history": [
          {
            "year": "1938",
            "author": "D. H. Lehmer",
            "note": "Investigates digital reversal operations."
          },
          {
            "year": "1990",
            "author": "John Walker",
            "note": "Launches the 196 Palindrome Quest on Unix workstations."
          },
          {
            "year": "2015–2026",
            "author": "Distributed Projects",
            "note": "Surpasses 1 billion steps and 400 million digits without palindrome."
          }
        ]
      },
      "de": {
        "name": "Lychrel Numbers Problem (196 Algorithm)",
        "subtitle": "Does 196 Ever Form a Palindrome Under Reverse-and-Add?",
        "field": "Recreational & Algorithmic Number Theory",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can you trap number 196 in a mirror, or will it run away forever?",
            "analogy": "Take a number, reverse its digits, and add them: 56 + 65 = 121 (a palindrome!). Most numbers become palindromes in a few steps. But 196 has been iterated over ONE BILLION times to over 400 million digits, and has NEVER produced a palindrome! Is it immortal?",
            "rules": [
              "Pick 196.",
              "Reverse digits: 691.",
              "Add: 196 + 691 = 887.",
              "Repeat: 887 + 788 = 1675... never hits symmetry!"
            ],
            "mystery": "The search for a 196 palindrome has produced numbers with over 1,000,000,000 digits without reaching a palindrome!",
            "funFact": "Numbers that never form a palindrome are called Lychrel numbers (an anagram of Cheryl). 196 is the smallest candidate!"
          },
          "investigators": {
            "tagline": "Carries distribution and Markov chain models.",
            "analogy": "The digit addition creates carry bits that propagate symmetrically, but carry patterns disrupt exact mirror symmetry with probability approaching 1.",
            "rules": [
              "Map: T(n) = n + rev(n).",
              "Checked past 10^9 iterations.",
              "Base 2 and base 11 analogs have proved Lychrel numbers exist."
            ],
            "mystery": "Can we rigorously prove that no iteration of 196 in base 10 ever yields a palindrome?",
            "funFact": "Studied extensively since the early computer era in the 1960s."
          },
          "pioneers": {
            "tagline": "Formal language theory and automatic sequences.",
            "analogy": "In base 2, John Conway and others proved that Lychrel numbers provably exist using finite automaton arguments.",
            "rules": [
              "Base-2 proved Lychrel numbers.",
              "Lean 4 digit reversal inductive lemmas.",
              "Carry-propagation stochastic models."
            ],
            "mystery": "AI distributed neural search is scanning carry-free sub-trajectories.",
            "funFact": "196 is the ultimate playground of recreational arithmetic and digital dynamics."
          }
        },
        "history": [
          {
            "year": "1938",
            "author": "D. H. Lehmer",
            "note": "Investigates digital reversal operations."
          },
          {
            "year": "1990",
            "author": "John Walker",
            "note": "Launches the 196 Palindrome Quest on Unix workstations."
          },
          {
            "year": "2015–2026",
            "author": "Distributed Projects",
            "note": "Surpasses 1 billion steps and 400 million digits without palindrome."
          }
        ]
      },
      "fr": {
        "name": "Lychrel Numbers Problem (196 Algorithm)",
        "subtitle": "Does 196 Ever Form a Palindrome Under Reverse-and-Add?",
        "field": "Recreational & Algorithmic Number Theory",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can you trap number 196 in a mirror, or will it run away forever?",
            "analogy": "Take a number, reverse its digits, and add them: 56 + 65 = 121 (a palindrome!). Most numbers become palindromes in a few steps. But 196 has been iterated over ONE BILLION times to over 400 million digits, and has NEVER produced a palindrome! Is it immortal?",
            "rules": [
              "Pick 196.",
              "Reverse digits: 691.",
              "Add: 196 + 691 = 887.",
              "Repeat: 887 + 788 = 1675... never hits symmetry!"
            ],
            "mystery": "The search for a 196 palindrome has produced numbers with over 1,000,000,000 digits without reaching a palindrome!",
            "funFact": "Numbers that never form a palindrome are called Lychrel numbers (an anagram of Cheryl). 196 is the smallest candidate!"
          },
          "investigators": {
            "tagline": "Carries distribution and Markov chain models.",
            "analogy": "The digit addition creates carry bits that propagate symmetrically, but carry patterns disrupt exact mirror symmetry with probability approaching 1.",
            "rules": [
              "Map: T(n) = n + rev(n).",
              "Checked past 10^9 iterations.",
              "Base 2 and base 11 analogs have proved Lychrel numbers exist."
            ],
            "mystery": "Can we rigorously prove that no iteration of 196 in base 10 ever yields a palindrome?",
            "funFact": "Studied extensively since the early computer era in the 1960s."
          },
          "pioneers": {
            "tagline": "Formal language theory and automatic sequences.",
            "analogy": "In base 2, John Conway and others proved that Lychrel numbers provably exist using finite automaton arguments.",
            "rules": [
              "Base-2 proved Lychrel numbers.",
              "Lean 4 digit reversal inductive lemmas.",
              "Carry-propagation stochastic models."
            ],
            "mystery": "AI distributed neural search is scanning carry-free sub-trajectories.",
            "funFact": "196 is the ultimate playground of recreational arithmetic and digital dynamics."
          }
        },
        "history": [
          {
            "year": "1938",
            "author": "D. H. Lehmer",
            "note": "Investigates digital reversal operations."
          },
          {
            "year": "1990",
            "author": "John Walker",
            "note": "Launches the 196 Palindrome Quest on Unix workstations."
          },
          {
            "year": "2015–2026",
            "author": "Distributed Projects",
            "note": "Surpasses 1 billion steps and 400 million digits without palindrome."
          }
        ]
      },
      "it": {
        "name": "Lychrel Numbers Problem (196 Algorithm)",
        "subtitle": "Does 196 Ever Form a Palindrome Under Reverse-and-Add?",
        "field": "Recreational & Algorithmic Number Theory",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can you trap number 196 in a mirror, or will it run away forever?",
            "analogy": "Take a number, reverse its digits, and add them: 56 + 65 = 121 (a palindrome!). Most numbers become palindromes in a few steps. But 196 has been iterated over ONE BILLION times to over 400 million digits, and has NEVER produced a palindrome! Is it immortal?",
            "rules": [
              "Pick 196.",
              "Reverse digits: 691.",
              "Add: 196 + 691 = 887.",
              "Repeat: 887 + 788 = 1675... never hits symmetry!"
            ],
            "mystery": "The search for a 196 palindrome has produced numbers with over 1,000,000,000 digits without reaching a palindrome!",
            "funFact": "Numbers that never form a palindrome are called Lychrel numbers (an anagram of Cheryl). 196 is the smallest candidate!"
          },
          "investigators": {
            "tagline": "Carries distribution and Markov chain models.",
            "analogy": "The digit addition creates carry bits that propagate symmetrically, but carry patterns disrupt exact mirror symmetry with probability approaching 1.",
            "rules": [
              "Map: T(n) = n + rev(n).",
              "Checked past 10^9 iterations.",
              "Base 2 and base 11 analogs have proved Lychrel numbers exist."
            ],
            "mystery": "Can we rigorously prove that no iteration of 196 in base 10 ever yields a palindrome?",
            "funFact": "Studied extensively since the early computer era in the 1960s."
          },
          "pioneers": {
            "tagline": "Formal language theory and automatic sequences.",
            "analogy": "In base 2, John Conway and others proved that Lychrel numbers provably exist using finite automaton arguments.",
            "rules": [
              "Base-2 proved Lychrel numbers.",
              "Lean 4 digit reversal inductive lemmas.",
              "Carry-propagation stochastic models."
            ],
            "mystery": "AI distributed neural search is scanning carry-free sub-trajectories.",
            "funFact": "196 is the ultimate playground of recreational arithmetic and digital dynamics."
          }
        },
        "history": [
          {
            "year": "1938",
            "author": "D. H. Lehmer",
            "note": "Investigates digital reversal operations."
          },
          {
            "year": "1990",
            "author": "John Walker",
            "note": "Launches the 196 Palindrome Quest on Unix workstations."
          },
          {
            "year": "2015–2026",
            "author": "Distributed Projects",
            "note": "Surpasses 1 billion steps and 400 million digits without palindrome."
          }
        ]
      },
      "ja": {
        "name": "Lychrel Numbers Problem (196 Algorithm)",
        "subtitle": "Does 196 Ever Form a Palindrome Under Reverse-and-Add?",
        "field": "Recreational & Algorithmic Number Theory",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can you trap number 196 in a mirror, or will it run away forever?",
            "analogy": "Take a number, reverse its digits, and add them: 56 + 65 = 121 (a palindrome!). Most numbers become palindromes in a few steps. But 196 has been iterated over ONE BILLION times to over 400 million digits, and has NEVER produced a palindrome! Is it immortal?",
            "rules": [
              "Pick 196.",
              "Reverse digits: 691.",
              "Add: 196 + 691 = 887.",
              "Repeat: 887 + 788 = 1675... never hits symmetry!"
            ],
            "mystery": "The search for a 196 palindrome has produced numbers with over 1,000,000,000 digits without reaching a palindrome!",
            "funFact": "Numbers that never form a palindrome are called Lychrel numbers (an anagram of Cheryl). 196 is the smallest candidate!"
          },
          "investigators": {
            "tagline": "Carries distribution and Markov chain models.",
            "analogy": "The digit addition creates carry bits that propagate symmetrically, but carry patterns disrupt exact mirror symmetry with probability approaching 1.",
            "rules": [
              "Map: T(n) = n + rev(n).",
              "Checked past 10^9 iterations.",
              "Base 2 and base 11 analogs have proved Lychrel numbers exist."
            ],
            "mystery": "Can we rigorously prove that no iteration of 196 in base 10 ever yields a palindrome?",
            "funFact": "Studied extensively since the early computer era in the 1960s."
          },
          "pioneers": {
            "tagline": "Formal language theory and automatic sequences.",
            "analogy": "In base 2, John Conway and others proved that Lychrel numbers provably exist using finite automaton arguments.",
            "rules": [
              "Base-2 proved Lychrel numbers.",
              "Lean 4 digit reversal inductive lemmas.",
              "Carry-propagation stochastic models."
            ],
            "mystery": "AI distributed neural search is scanning carry-free sub-trajectories.",
            "funFact": "196 is the ultimate playground of recreational arithmetic and digital dynamics."
          }
        },
        "history": [
          {
            "year": "1938",
            "author": "D. H. Lehmer",
            "note": "Investigates digital reversal operations."
          },
          {
            "year": "1990",
            "author": "John Walker",
            "note": "Launches the 196 Palindrome Quest on Unix workstations."
          },
          {
            "year": "2015–2026",
            "author": "Distributed Projects",
            "note": "Surpasses 1 billion steps and 400 million digits without palindrome."
          }
        ]
      },
      "ko": {
        "name": "Lychrel Numbers Problem (196 Algorithm)",
        "subtitle": "Does 196 Ever Form a Palindrome Under Reverse-and-Add?",
        "field": "Recreational & Algorithmic Number Theory",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can you trap number 196 in a mirror, or will it run away forever?",
            "analogy": "Take a number, reverse its digits, and add them: 56 + 65 = 121 (a palindrome!). Most numbers become palindromes in a few steps. But 196 has been iterated over ONE BILLION times to over 400 million digits, and has NEVER produced a palindrome! Is it immortal?",
            "rules": [
              "Pick 196.",
              "Reverse digits: 691.",
              "Add: 196 + 691 = 887.",
              "Repeat: 887 + 788 = 1675... never hits symmetry!"
            ],
            "mystery": "The search for a 196 palindrome has produced numbers with over 1,000,000,000 digits without reaching a palindrome!",
            "funFact": "Numbers that never form a palindrome are called Lychrel numbers (an anagram of Cheryl). 196 is the smallest candidate!"
          },
          "investigators": {
            "tagline": "Carries distribution and Markov chain models.",
            "analogy": "The digit addition creates carry bits that propagate symmetrically, but carry patterns disrupt exact mirror symmetry with probability approaching 1.",
            "rules": [
              "Map: T(n) = n + rev(n).",
              "Checked past 10^9 iterations.",
              "Base 2 and base 11 analogs have proved Lychrel numbers exist."
            ],
            "mystery": "Can we rigorously prove that no iteration of 196 in base 10 ever yields a palindrome?",
            "funFact": "Studied extensively since the early computer era in the 1960s."
          },
          "pioneers": {
            "tagline": "Formal language theory and automatic sequences.",
            "analogy": "In base 2, John Conway and others proved that Lychrel numbers provably exist using finite automaton arguments.",
            "rules": [
              "Base-2 proved Lychrel numbers.",
              "Lean 4 digit reversal inductive lemmas.",
              "Carry-propagation stochastic models."
            ],
            "mystery": "AI distributed neural search is scanning carry-free sub-trajectories.",
            "funFact": "196 is the ultimate playground of recreational arithmetic and digital dynamics."
          }
        },
        "history": [
          {
            "year": "1938",
            "author": "D. H. Lehmer",
            "note": "Investigates digital reversal operations."
          },
          {
            "year": "1990",
            "author": "John Walker",
            "note": "Launches the 196 Palindrome Quest on Unix workstations."
          },
          {
            "year": "2015–2026",
            "author": "Distributed Projects",
            "note": "Surpasses 1 billion steps and 400 million digits without palindrome."
          }
        ]
      },
      "zh-Hans": {
        "name": "利克瑞尔数问题（196算法之谜）",
        "subtitle": "反转相加算法下，196 到底能否化身为回文数？",
        "field": "算法数论 & 回文动力系统",
        "statusBadge": "未解之谜",
        "grades": {
          "explorers": {
            "tagline": "把 196 放到镜子前颠倒相加，它会不会永远逃逸，永不变成对称回文数？",
            "analogy": "拿一个数字，倒过来相加：56 + 65 = 121（对称回文数！）。几乎所有数几步内都会变成回文数。但 196 经过了一百亿次迭代、算到了几亿位数字，却从未出现过回文数！它是长生不老的回文绝缘体吗？",
            "rules": [
              "取 196。",
              "倒序：691。",
              "相加：196 + 691 = 887。",
              "反复操作：887 + 788 = 1675……经过数十亿步依然绝不对称！"
            ],
            "mystery": "全球分布式计算已将 196 算到了 10 亿位数字，依然没有诞生回文数！",
            "funFact": "永远无法形成回文数的数被称为利克瑞尔数（Lychrel）。196 是全宇宙最小的候选者！"
          },
          "investigators": {
            "tagline": "进位分布与马尔可夫链状态转移。",
            "analogy": "十进制加法的进位在两端产生非对称扰动，概率分析显示产生回文数的概率随位数增加呈指数衰减。",
            "rules": [
              "离散变换：T(n) = n + rev(n)。",
              "十进制已验证超过 10 亿次迭代。",
              "在二进制与其他进制下，已严格证明存在利克瑞尔数。"
            ],
            "mystery": "能否严格证明十进制下的 196 轨迹永远无法进入回文状态？",
            "funFact": "自1960年代早期计算机出现后被广泛研究。"
          },
          "pioneers": {
            "tagline": "形式语言理论与自动机序列。",
            "analogy": "在二进制下，数学家利用有限状态自动机已严格证实存在真正的利克瑞尔数。",
            "rules": [
              "二进制利克瑞尔数严格定理。",
              "Lean 4 数组倒序与数位归纳引理。",
              "随机进位传播动力学。"
            ],
            "mystery": "AI 正在分析进位链的周期性模式，寻找可能的收敛上界。",
            "funFact": "196 算法是趣味数论与数字动力学领域最迷人、最具吸引力的大众谜题。"
          }
        },
        "history": [
          {
            "year": "1938",
            "author": "莱默",
            "note": "早期探讨反转相加动力系统。"
          },
          {
            "year": "1990",
            "author": "约翰·沃克",
            "note": "发起著名的 196 回文搜寻计划。"
          },
          {
            "year": "2015–2026",
            "author": "全球计算网络",
            "note": "突破10亿步迭代与4亿位数字大关，未现回文。"
          }
        ]
      },
      "zh-Hant": {
        "name": "Lychrel Numbers Problem (196 Algorithm)",
        "subtitle": "Does 196 Ever Form a Palindrome Under Reverse-and-Add?",
        "field": "Recreational & Algorithmic Number Theory",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can you trap number 196 in a mirror, or will it run away forever?",
            "analogy": "Take a number, reverse its digits, and add them: 56 + 65 = 121 (a palindrome!). Most numbers become palindromes in a few steps. But 196 has been iterated over ONE BILLION times to over 400 million digits, and has NEVER produced a palindrome! Is it immortal?",
            "rules": [
              "Pick 196.",
              "Reverse digits: 691.",
              "Add: 196 + 691 = 887.",
              "Repeat: 887 + 788 = 1675... never hits symmetry!"
            ],
            "mystery": "The search for a 196 palindrome has produced numbers with over 1,000,000,000 digits without reaching a palindrome!",
            "funFact": "Numbers that never form a palindrome are called Lychrel numbers (an anagram of Cheryl). 196 is the smallest candidate!"
          },
          "investigators": {
            "tagline": "Carries distribution and Markov chain models.",
            "analogy": "The digit addition creates carry bits that propagate symmetrically, but carry patterns disrupt exact mirror symmetry with probability approaching 1.",
            "rules": [
              "Map: T(n) = n + rev(n).",
              "Checked past 10^9 iterations.",
              "Base 2 and base 11 analogs have proved Lychrel numbers exist."
            ],
            "mystery": "Can we rigorously prove that no iteration of 196 in base 10 ever yields a palindrome?",
            "funFact": "Studied extensively since the early computer era in the 1960s."
          },
          "pioneers": {
            "tagline": "Formal language theory and automatic sequences.",
            "analogy": "In base 2, John Conway and others proved that Lychrel numbers provably exist using finite automaton arguments.",
            "rules": [
              "Base-2 proved Lychrel numbers.",
              "Lean 4 digit reversal inductive lemmas.",
              "Carry-propagation stochastic models."
            ],
            "mystery": "AI distributed neural search is scanning carry-free sub-trajectories.",
            "funFact": "196 is the ultimate playground of recreational arithmetic and digital dynamics."
          }
        },
        "history": [
          {
            "year": "1938",
            "author": "D. H. Lehmer",
            "note": "Investigates digital reversal operations."
          },
          {
            "year": "1990",
            "author": "John Walker",
            "note": "Launches the 196 Palindrome Quest on Unix workstations."
          },
          {
            "year": "2015–2026",
            "author": "Distributed Projects",
            "note": "Surpasses 1 billion steps and 400 million digits without palindrome."
          }
        ]
      }
    }
  },
  {
    "id": "artin-primitive",
    "icon": "🌱",
    "difficulty": "Gr 6+",
    "domain": "number-theory",
    "category": "number-theory",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Data.Nat.Prime\ndef ArtinConstant : ℝ := sorry\ndef ArtinConjecture (a : ℤ) : Prop := sorry",
    "locales": {
      "en": {
        "name": "Artin's Primitive Root Conjecture",
        "subtitle": "Can a Single Seed Generate the Entire Prime Universe Modulo p?",
        "field": "Cyclic Groups & Primitive Roots",
        "statusBadge": "OPEN (UNDER GRH)",
        "grades": {
          "explorers": {
            "tagline": "Can you spin around a clock of primes and visit every single hour?",
            "analogy": "A number a is a 'primitive root' for prime p if its powers cycle through ALL numbers from 1 to p-1! Emil Artin conjectured in 1927 that any non-square integer (like 2, 3, 5, 6...) is a primitive root for infinitely many primes!",
            "rules": [
              "Pick base a = 2.",
              "Test p = 5: 2¹=2, 2²=4, 2³=3, 2⁴=1 (mod 5). Visits all: 1, 2, 3, 4! (2 is a primitive root).",
              "Artin conjectures this happens infinitely often for almost all bases."
            ],
            "mystery": "Hooley proved in 1967 that Artin's conjecture is 100% TRUE if the Generalized Riemann Hypothesis holds!",
            "funFact": "Artin's constant A ≈ 0.3739558 gives the exact natural density of primes for which 2 is a primitive root!"
          },
          "investigators": {
            "tagline": "Hooley's conditional proof and Heath-Brown's unconditional theorem.",
            "analogy": "Heath-Brown (1986) proved unconditionally that there are at most two exceptional prime bases for which Artin fails! (e.g. at least one of 2, 3, or 5 is a primitive root infinitely often).",
            "rules": [
              "Artin constant: A = ∏ (1 - 1/(p(p-1))) ≈ 0.3739558.",
              "Hooley (1967): Proved under GRH.",
              "Heath-Brown (1986): At most 2 exceptions."
            ],
            "mystery": "Can we unconditionally prove Artin's conjecture for any single individual number (like 2) without GRH?",
            "funFact": "Emil Artin proposed this deep conjecture in 1927."
          },
          "pioneers": {
            "tagline": "Chebotarev density theorem in infinite field extensions.",
            "analogy": "The set of primes for which a is a primitive root corresponds to primes not splitting completely in any Kummer extension ℚ(ζ_q, a^{1/q}).",
            "rules": [
              "Kummer extensions and Frobenius conjugacy classes.",
              "Bombieri-Vinogradov average bounds.",
              "Lean 4 Mathlib group units."
            ],
            "mystery": "AI formalization is translating Hooley's GRH sieve reduction into machine-checked Lean 4 logic.",
            "funFact": "Artin's conjecture bridges elementary arithmetic clocks with the grand architecture of algebraic number fields."
          }
        },
        "history": [
          {
            "year": "1927",
            "author": "Emil Artin",
            "note": "States the primitive root density conjecture."
          },
          {
            "year": "1967",
            "author": "Christopher Hooley",
            "note": "Proves the conjecture under Generalized Riemann Hypothesis."
          },
          {
            "year": "1986",
            "author": "D. R. Heath-Brown",
            "note": "Unconditionally proves at most two primes can fail."
          }
        ]
      },
      "de": {
        "name": "Artin's Primitive Root Conjecture",
        "subtitle": "Can a Single Seed Generate the Entire Prime Universe Modulo p?",
        "field": "Cyclic Groups & Primitive Roots",
        "statusBadge": "OPEN (UNDER GRH)",
        "grades": {
          "explorers": {
            "tagline": "Can you spin around a clock of primes and visit every single hour?",
            "analogy": "A number a is a 'primitive root' for prime p if its powers cycle through ALL numbers from 1 to p-1! Emil Artin conjectured in 1927 that any non-square integer (like 2, 3, 5, 6...) is a primitive root for infinitely many primes!",
            "rules": [
              "Pick base a = 2.",
              "Test p = 5: 2¹=2, 2²=4, 2³=3, 2⁴=1 (mod 5). Visits all: 1, 2, 3, 4! (2 is a primitive root).",
              "Artin conjectures this happens infinitely often for almost all bases."
            ],
            "mystery": "Hooley proved in 1967 that Artin's conjecture is 100% TRUE if the Generalized Riemann Hypothesis holds!",
            "funFact": "Artin's constant A ≈ 0.3739558 gives the exact natural density of primes for which 2 is a primitive root!"
          },
          "investigators": {
            "tagline": "Hooley's conditional proof and Heath-Brown's unconditional theorem.",
            "analogy": "Heath-Brown (1986) proved unconditionally that there are at most two exceptional prime bases for which Artin fails! (e.g. at least one of 2, 3, or 5 is a primitive root infinitely often).",
            "rules": [
              "Artin constant: A = ∏ (1 - 1/(p(p-1))) ≈ 0.3739558.",
              "Hooley (1967): Proved under GRH.",
              "Heath-Brown (1986): At most 2 exceptions."
            ],
            "mystery": "Can we unconditionally prove Artin's conjecture for any single individual number (like 2) without GRH?",
            "funFact": "Emil Artin proposed this deep conjecture in 1927."
          },
          "pioneers": {
            "tagline": "Chebotarev density theorem in infinite field extensions.",
            "analogy": "The set of primes for which a is a primitive root corresponds to primes not splitting completely in any Kummer extension ℚ(ζ_q, a^{1/q}).",
            "rules": [
              "Kummer extensions and Frobenius conjugacy classes.",
              "Bombieri-Vinogradov average bounds.",
              "Lean 4 Mathlib group units."
            ],
            "mystery": "AI formalization is translating Hooley's GRH sieve reduction into machine-checked Lean 4 logic.",
            "funFact": "Artin's conjecture bridges elementary arithmetic clocks with the grand architecture of algebraic number fields."
          }
        },
        "history": [
          {
            "year": "1927",
            "author": "Emil Artin",
            "note": "States the primitive root density conjecture."
          },
          {
            "year": "1967",
            "author": "Christopher Hooley",
            "note": "Proves the conjecture under Generalized Riemann Hypothesis."
          },
          {
            "year": "1986",
            "author": "D. R. Heath-Brown",
            "note": "Unconditionally proves at most two primes can fail."
          }
        ]
      },
      "fr": {
        "name": "Artin's Primitive Root Conjecture",
        "subtitle": "Can a Single Seed Generate the Entire Prime Universe Modulo p?",
        "field": "Cyclic Groups & Primitive Roots",
        "statusBadge": "OPEN (UNDER GRH)",
        "grades": {
          "explorers": {
            "tagline": "Can you spin around a clock of primes and visit every single hour?",
            "analogy": "A number a is a 'primitive root' for prime p if its powers cycle through ALL numbers from 1 to p-1! Emil Artin conjectured in 1927 that any non-square integer (like 2, 3, 5, 6...) is a primitive root for infinitely many primes!",
            "rules": [
              "Pick base a = 2.",
              "Test p = 5: 2¹=2, 2²=4, 2³=3, 2⁴=1 (mod 5). Visits all: 1, 2, 3, 4! (2 is a primitive root).",
              "Artin conjectures this happens infinitely often for almost all bases."
            ],
            "mystery": "Hooley proved in 1967 that Artin's conjecture is 100% TRUE if the Generalized Riemann Hypothesis holds!",
            "funFact": "Artin's constant A ≈ 0.3739558 gives the exact natural density of primes for which 2 is a primitive root!"
          },
          "investigators": {
            "tagline": "Hooley's conditional proof and Heath-Brown's unconditional theorem.",
            "analogy": "Heath-Brown (1986) proved unconditionally that there are at most two exceptional prime bases for which Artin fails! (e.g. at least one of 2, 3, or 5 is a primitive root infinitely often).",
            "rules": [
              "Artin constant: A = ∏ (1 - 1/(p(p-1))) ≈ 0.3739558.",
              "Hooley (1967): Proved under GRH.",
              "Heath-Brown (1986): At most 2 exceptions."
            ],
            "mystery": "Can we unconditionally prove Artin's conjecture for any single individual number (like 2) without GRH?",
            "funFact": "Emil Artin proposed this deep conjecture in 1927."
          },
          "pioneers": {
            "tagline": "Chebotarev density theorem in infinite field extensions.",
            "analogy": "The set of primes for which a is a primitive root corresponds to primes not splitting completely in any Kummer extension ℚ(ζ_q, a^{1/q}).",
            "rules": [
              "Kummer extensions and Frobenius conjugacy classes.",
              "Bombieri-Vinogradov average bounds.",
              "Lean 4 Mathlib group units."
            ],
            "mystery": "AI formalization is translating Hooley's GRH sieve reduction into machine-checked Lean 4 logic.",
            "funFact": "Artin's conjecture bridges elementary arithmetic clocks with the grand architecture of algebraic number fields."
          }
        },
        "history": [
          {
            "year": "1927",
            "author": "Emil Artin",
            "note": "States the primitive root density conjecture."
          },
          {
            "year": "1967",
            "author": "Christopher Hooley",
            "note": "Proves the conjecture under Generalized Riemann Hypothesis."
          },
          {
            "year": "1986",
            "author": "D. R. Heath-Brown",
            "note": "Unconditionally proves at most two primes can fail."
          }
        ]
      },
      "it": {
        "name": "Artin's Primitive Root Conjecture",
        "subtitle": "Can a Single Seed Generate the Entire Prime Universe Modulo p?",
        "field": "Cyclic Groups & Primitive Roots",
        "statusBadge": "OPEN (UNDER GRH)",
        "grades": {
          "explorers": {
            "tagline": "Can you spin around a clock of primes and visit every single hour?",
            "analogy": "A number a is a 'primitive root' for prime p if its powers cycle through ALL numbers from 1 to p-1! Emil Artin conjectured in 1927 that any non-square integer (like 2, 3, 5, 6...) is a primitive root for infinitely many primes!",
            "rules": [
              "Pick base a = 2.",
              "Test p = 5: 2¹=2, 2²=4, 2³=3, 2⁴=1 (mod 5). Visits all: 1, 2, 3, 4! (2 is a primitive root).",
              "Artin conjectures this happens infinitely often for almost all bases."
            ],
            "mystery": "Hooley proved in 1967 that Artin's conjecture is 100% TRUE if the Generalized Riemann Hypothesis holds!",
            "funFact": "Artin's constant A ≈ 0.3739558 gives the exact natural density of primes for which 2 is a primitive root!"
          },
          "investigators": {
            "tagline": "Hooley's conditional proof and Heath-Brown's unconditional theorem.",
            "analogy": "Heath-Brown (1986) proved unconditionally that there are at most two exceptional prime bases for which Artin fails! (e.g. at least one of 2, 3, or 5 is a primitive root infinitely often).",
            "rules": [
              "Artin constant: A = ∏ (1 - 1/(p(p-1))) ≈ 0.3739558.",
              "Hooley (1967): Proved under GRH.",
              "Heath-Brown (1986): At most 2 exceptions."
            ],
            "mystery": "Can we unconditionally prove Artin's conjecture for any single individual number (like 2) without GRH?",
            "funFact": "Emil Artin proposed this deep conjecture in 1927."
          },
          "pioneers": {
            "tagline": "Chebotarev density theorem in infinite field extensions.",
            "analogy": "The set of primes for which a is a primitive root corresponds to primes not splitting completely in any Kummer extension ℚ(ζ_q, a^{1/q}).",
            "rules": [
              "Kummer extensions and Frobenius conjugacy classes.",
              "Bombieri-Vinogradov average bounds.",
              "Lean 4 Mathlib group units."
            ],
            "mystery": "AI formalization is translating Hooley's GRH sieve reduction into machine-checked Lean 4 logic.",
            "funFact": "Artin's conjecture bridges elementary arithmetic clocks with the grand architecture of algebraic number fields."
          }
        },
        "history": [
          {
            "year": "1927",
            "author": "Emil Artin",
            "note": "States the primitive root density conjecture."
          },
          {
            "year": "1967",
            "author": "Christopher Hooley",
            "note": "Proves the conjecture under Generalized Riemann Hypothesis."
          },
          {
            "year": "1986",
            "author": "D. R. Heath-Brown",
            "note": "Unconditionally proves at most two primes can fail."
          }
        ]
      },
      "ja": {
        "name": "Artin's Primitive Root Conjecture",
        "subtitle": "Can a Single Seed Generate the Entire Prime Universe Modulo p?",
        "field": "Cyclic Groups & Primitive Roots",
        "statusBadge": "OPEN (UNDER GRH)",
        "grades": {
          "explorers": {
            "tagline": "Can you spin around a clock of primes and visit every single hour?",
            "analogy": "A number a is a 'primitive root' for prime p if its powers cycle through ALL numbers from 1 to p-1! Emil Artin conjectured in 1927 that any non-square integer (like 2, 3, 5, 6...) is a primitive root for infinitely many primes!",
            "rules": [
              "Pick base a = 2.",
              "Test p = 5: 2¹=2, 2²=4, 2³=3, 2⁴=1 (mod 5). Visits all: 1, 2, 3, 4! (2 is a primitive root).",
              "Artin conjectures this happens infinitely often for almost all bases."
            ],
            "mystery": "Hooley proved in 1967 that Artin's conjecture is 100% TRUE if the Generalized Riemann Hypothesis holds!",
            "funFact": "Artin's constant A ≈ 0.3739558 gives the exact natural density of primes for which 2 is a primitive root!"
          },
          "investigators": {
            "tagline": "Hooley's conditional proof and Heath-Brown's unconditional theorem.",
            "analogy": "Heath-Brown (1986) proved unconditionally that there are at most two exceptional prime bases for which Artin fails! (e.g. at least one of 2, 3, or 5 is a primitive root infinitely often).",
            "rules": [
              "Artin constant: A = ∏ (1 - 1/(p(p-1))) ≈ 0.3739558.",
              "Hooley (1967): Proved under GRH.",
              "Heath-Brown (1986): At most 2 exceptions."
            ],
            "mystery": "Can we unconditionally prove Artin's conjecture for any single individual number (like 2) without GRH?",
            "funFact": "Emil Artin proposed this deep conjecture in 1927."
          },
          "pioneers": {
            "tagline": "Chebotarev density theorem in infinite field extensions.",
            "analogy": "The set of primes for which a is a primitive root corresponds to primes not splitting completely in any Kummer extension ℚ(ζ_q, a^{1/q}).",
            "rules": [
              "Kummer extensions and Frobenius conjugacy classes.",
              "Bombieri-Vinogradov average bounds.",
              "Lean 4 Mathlib group units."
            ],
            "mystery": "AI formalization is translating Hooley's GRH sieve reduction into machine-checked Lean 4 logic.",
            "funFact": "Artin's conjecture bridges elementary arithmetic clocks with the grand architecture of algebraic number fields."
          }
        },
        "history": [
          {
            "year": "1927",
            "author": "Emil Artin",
            "note": "States the primitive root density conjecture."
          },
          {
            "year": "1967",
            "author": "Christopher Hooley",
            "note": "Proves the conjecture under Generalized Riemann Hypothesis."
          },
          {
            "year": "1986",
            "author": "D. R. Heath-Brown",
            "note": "Unconditionally proves at most two primes can fail."
          }
        ]
      },
      "ko": {
        "name": "Artin's Primitive Root Conjecture",
        "subtitle": "Can a Single Seed Generate the Entire Prime Universe Modulo p?",
        "field": "Cyclic Groups & Primitive Roots",
        "statusBadge": "OPEN (UNDER GRH)",
        "grades": {
          "explorers": {
            "tagline": "Can you spin around a clock of primes and visit every single hour?",
            "analogy": "A number a is a 'primitive root' for prime p if its powers cycle through ALL numbers from 1 to p-1! Emil Artin conjectured in 1927 that any non-square integer (like 2, 3, 5, 6...) is a primitive root for infinitely many primes!",
            "rules": [
              "Pick base a = 2.",
              "Test p = 5: 2¹=2, 2²=4, 2³=3, 2⁴=1 (mod 5). Visits all: 1, 2, 3, 4! (2 is a primitive root).",
              "Artin conjectures this happens infinitely often for almost all bases."
            ],
            "mystery": "Hooley proved in 1967 that Artin's conjecture is 100% TRUE if the Generalized Riemann Hypothesis holds!",
            "funFact": "Artin's constant A ≈ 0.3739558 gives the exact natural density of primes for which 2 is a primitive root!"
          },
          "investigators": {
            "tagline": "Hooley's conditional proof and Heath-Brown's unconditional theorem.",
            "analogy": "Heath-Brown (1986) proved unconditionally that there are at most two exceptional prime bases for which Artin fails! (e.g. at least one of 2, 3, or 5 is a primitive root infinitely often).",
            "rules": [
              "Artin constant: A = ∏ (1 - 1/(p(p-1))) ≈ 0.3739558.",
              "Hooley (1967): Proved under GRH.",
              "Heath-Brown (1986): At most 2 exceptions."
            ],
            "mystery": "Can we unconditionally prove Artin's conjecture for any single individual number (like 2) without GRH?",
            "funFact": "Emil Artin proposed this deep conjecture in 1927."
          },
          "pioneers": {
            "tagline": "Chebotarev density theorem in infinite field extensions.",
            "analogy": "The set of primes for which a is a primitive root corresponds to primes not splitting completely in any Kummer extension ℚ(ζ_q, a^{1/q}).",
            "rules": [
              "Kummer extensions and Frobenius conjugacy classes.",
              "Bombieri-Vinogradov average bounds.",
              "Lean 4 Mathlib group units."
            ],
            "mystery": "AI formalization is translating Hooley's GRH sieve reduction into machine-checked Lean 4 logic.",
            "funFact": "Artin's conjecture bridges elementary arithmetic clocks with the grand architecture of algebraic number fields."
          }
        },
        "history": [
          {
            "year": "1927",
            "author": "Emil Artin",
            "note": "States the primitive root density conjecture."
          },
          {
            "year": "1967",
            "author": "Christopher Hooley",
            "note": "Proves the conjecture under Generalized Riemann Hypothesis."
          },
          {
            "year": "1986",
            "author": "D. R. Heath-Brown",
            "note": "Unconditionally proves at most two primes can fail."
          }
        ]
      },
      "zh-Hans": {
        "name": "阿廷原根猜想",
        "subtitle": "一颗基数种子能否生成模素数下的整片宇宙？",
        "field": "循环群 & 代数原根",
        "statusBadge": "在广义黎曼猜想下已获证",
        "grades": {
          "explorers": {
            "tagline": "按固定的倍数在素数钟表上跳跃，能不能把每一个刻度都踩上一遍？",
            "analogy": "若一个数 a 的乘方能生成模 p 的全部非零余数，它就叫“模 p 的原根”。埃米尔·阿廷于1927年猜想：任何不是完全平方数且不等于 -1 的整数（如 2, 3, 5, 6...），必定是无穷多个素数的原根！",
            "rules": [
              "取底数 a = 2。",
              "检验素数 5：2¹=2, 2²=4, 2³=3, 2⁴=1 (mod 5)。遍历了 1, 2, 3, 4 所有余数！",
              "阿廷猜想：这一现象对无穷多个素数都必定发生！"
            ],
            "mystery": "胡利在1967年证明：只要广义黎曼猜想 (GRH) 成立，阿廷猜想就 100% 为真！",
            "funFact": "阿廷常数 A ≈ 0.3739558 精确给出了 2 是原根的素数所占的自然密度（约 37.4%）！"
          },
          "investigators": {
            "tagline": "胡利条件证明与希斯-布朗无条件定理。",
            "analogy": "希斯-布朗于1986年无条件证明：至多存在两个例外素数基底使得阿廷猜想失败！即 2、3、5 中至少有一个能生成无穷多个素数原根。",
            "rules": [
              "阿廷常数欧拉积公式。",
              "胡利 (1967) 在 GRH 下完成严格证明。",
              "希斯-布朗 (1986) 证明至多存在 2 个例外。"
            ],
            "mystery": "能否在完全脱离 GRH 的前提下，哪怕对某一个具体数字（如 2）无条件证实阿廷猜想？",
            "funFact": "埃米尔·阿廷于1927年提出。"
          },
          "pioneers": {
            "tagline": "无穷代数数域扩张上的切博塔廖夫密度定理。",
            "analogy": "原根素数集合对应于在库默尔扩张 ℚ(ζ_q, a^{1/q}) 中不完全分裂的素数集。",
            "rules": [
              "库默尔域扩张与弗罗贝尼乌斯共轭类。",
              "邦别里-维诺格拉多夫均值估计。",
              "Lean 4 Mathlib 中有限域乘法循环群形式化。"
            ],
            "mystery": "AI 正在形式化胡利基于广义黎曼猜想的筛法转换架构。",
            "funFact": "阿廷原根猜想完美连接了初等算术的旋转钟表与代数数域的宏伟殿堂。"
          }
        },
        "history": [
          {
            "year": "1927",
            "author": "埃米尔·阿廷",
            "note": "提出原根存在性与密度猜想。"
          },
          {
            "year": "1967",
            "author": "克里斯托弗·胡利",
            "note": "在广义黎曼猜想成立的前提下证明该猜想。"
          },
          {
            "year": "1986",
            "author": "希斯-布朗",
            "note": "无条件证明至多存在两个例外基底。"
          }
        ]
      },
      "zh-Hant": {
        "name": "Artin's Primitive Root Conjecture",
        "subtitle": "Can a Single Seed Generate the Entire Prime Universe Modulo p?",
        "field": "Cyclic Groups & Primitive Roots",
        "statusBadge": "OPEN (UNDER GRH)",
        "grades": {
          "explorers": {
            "tagline": "Can you spin around a clock of primes and visit every single hour?",
            "analogy": "A number a is a 'primitive root' for prime p if its powers cycle through ALL numbers from 1 to p-1! Emil Artin conjectured in 1927 that any non-square integer (like 2, 3, 5, 6...) is a primitive root for infinitely many primes!",
            "rules": [
              "Pick base a = 2.",
              "Test p = 5: 2¹=2, 2²=4, 2³=3, 2⁴=1 (mod 5). Visits all: 1, 2, 3, 4! (2 is a primitive root).",
              "Artin conjectures this happens infinitely often for almost all bases."
            ],
            "mystery": "Hooley proved in 1967 that Artin's conjecture is 100% TRUE if the Generalized Riemann Hypothesis holds!",
            "funFact": "Artin's constant A ≈ 0.3739558 gives the exact natural density of primes for which 2 is a primitive root!"
          },
          "investigators": {
            "tagline": "Hooley's conditional proof and Heath-Brown's unconditional theorem.",
            "analogy": "Heath-Brown (1986) proved unconditionally that there are at most two exceptional prime bases for which Artin fails! (e.g. at least one of 2, 3, or 5 is a primitive root infinitely often).",
            "rules": [
              "Artin constant: A = ∏ (1 - 1/(p(p-1))) ≈ 0.3739558.",
              "Hooley (1967): Proved under GRH.",
              "Heath-Brown (1986): At most 2 exceptions."
            ],
            "mystery": "Can we unconditionally prove Artin's conjecture for any single individual number (like 2) without GRH?",
            "funFact": "Emil Artin proposed this deep conjecture in 1927."
          },
          "pioneers": {
            "tagline": "Chebotarev density theorem in infinite field extensions.",
            "analogy": "The set of primes for which a is a primitive root corresponds to primes not splitting completely in any Kummer extension ℚ(ζ_q, a^{1/q}).",
            "rules": [
              "Kummer extensions and Frobenius conjugacy classes.",
              "Bombieri-Vinogradov average bounds.",
              "Lean 4 Mathlib group units."
            ],
            "mystery": "AI formalization is translating Hooley's GRH sieve reduction into machine-checked Lean 4 logic.",
            "funFact": "Artin's conjecture bridges elementary arithmetic clocks with the grand architecture of algebraic number fields."
          }
        },
        "history": [
          {
            "year": "1927",
            "author": "Emil Artin",
            "note": "States the primitive root density conjecture."
          },
          {
            "year": "1967",
            "author": "Christopher Hooley",
            "note": "Proves the conjecture under Generalized Riemann Hypothesis."
          },
          {
            "year": "1986",
            "author": "D. R. Heath-Brown",
            "note": "Unconditionally proves at most two primes can fail."
          }
        ]
      }
    }
  },
  {
    "id": "cramer",
    "icon": "🎯",
    "difficulty": "Gr 6+",
    "domain": "number-theory",
    "category": "number-theory",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Data.Nat.Prime\ndef PrimeGap (n : ℕ) : ℕ := sorry\ndef CramerConjecture : Prop := sorry",
    "locales": {
      "en": {
        "name": "Cramér's Prime Gap Conjecture",
        "subtitle": "Maximal Prime Gap Bound: p_{n+1} - p_n = O(log² p_n)",
        "field": "Probabilistic Number Theory & Extreme Gaps",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "How vast can the longest desert between two prime oasis stops ever be?",
            "analogy": "Prime gaps get wider as numbers grow. Harald Cramér used probability models in 1936 to conjecture that the maximum gap between consecutive primes is at most proportional to (log p)²! No prime desert can be wider than this logarithmic wall.",
            "rules": [
              "Consecutive primes p_n and p_{n+1}.",
              "Gap g_n = p_{n+1} - p_n.",
              "Cramér bound: g_n ≤ C (log p_n)².",
              "Tested for gaps exceeding 1,000 steps without violation!"
            ],
            "mystery": "The highest known merit gap g / log²(p) is 1.13, well under the predicted asymptotic limit of 1!",
            "funFact": "Even with the Riemann Hypothesis, the best proved gap is O(√p log p), far wider than Cramér's tiny (log p)²!"
          },
          "investigators": {
            "tagline": "Cramér random model and Granville's refinement.",
            "analogy": "Andrew Granville showed in 1995 that arithmetic correlations between prime divisors imply the limsup of g_n / log²(p_n) is at least 2e^{-γ} ≈ 1.1229, slightly modifying Cramér's original limit.",
            "rules": [
              "Cramér model: P(k is prime) = 1/log k.",
              "Extreme value theory for Poisson processes.",
              "Granville's refinement: limsup g_n / log² p_n ≥ 2e^{-γ}."
            ],
            "mystery": "Can we prove that prime gaps are bounded by any polynomial of log p unconditionally?",
            "funFact": "Harald Cramér formulated the conjecture in 1936."
          },
          "pioneers": {
            "tagline": "Selberg's integral bounds and Maier's matrix method.",
            "analogy": "Maier showed in 1985 that the Cramér model fails for short intervals, demonstrating deep arithmetic structure in prime gaps.",
            "rules": [
              "Maier's theorem on primes in short intervals.",
              "Selberg sieve bounds in Mathlib.",
              "Lean 4 extreme value formalization."
            ],
            "mystery": "AI automated record tracking scans billions of prime gap occurrences on distributed architectures.",
            "funFact": "Cramér's conjecture defines the ultimate gold standard for the smoothness of prime distribution."
          }
        },
        "history": [
          {
            "year": "1936",
            "author": "Harald Cramér",
            "note": "Publishes probabilistic model of prime distribution."
          },
          {
            "year": "1985",
            "author": "Helmut Maier",
            "note": "Discovers unexpected oscillations breaking naive probability model."
          },
          {
            "year": "1995",
            "author": "Andrew Granville",
            "note": "Refines Cramér's limit based on Maier's theorem."
          }
        ]
      },
      "de": {
        "name": "Cramér's Prime Gap Conjecture",
        "subtitle": "Maximal Prime Gap Bound: p_{n+1} - p_n = O(log² p_n)",
        "field": "Probabilistic Number Theory & Extreme Gaps",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "How vast can the longest desert between two prime oasis stops ever be?",
            "analogy": "Prime gaps get wider as numbers grow. Harald Cramér used probability models in 1936 to conjecture that the maximum gap between consecutive primes is at most proportional to (log p)²! No prime desert can be wider than this logarithmic wall.",
            "rules": [
              "Consecutive primes p_n and p_{n+1}.",
              "Gap g_n = p_{n+1} - p_n.",
              "Cramér bound: g_n ≤ C (log p_n)².",
              "Tested for gaps exceeding 1,000 steps without violation!"
            ],
            "mystery": "The highest known merit gap g / log²(p) is 1.13, well under the predicted asymptotic limit of 1!",
            "funFact": "Even with the Riemann Hypothesis, the best proved gap is O(√p log p), far wider than Cramér's tiny (log p)²!"
          },
          "investigators": {
            "tagline": "Cramér random model and Granville's refinement.",
            "analogy": "Andrew Granville showed in 1995 that arithmetic correlations between prime divisors imply the limsup of g_n / log²(p_n) is at least 2e^{-γ} ≈ 1.1229, slightly modifying Cramér's original limit.",
            "rules": [
              "Cramér model: P(k is prime) = 1/log k.",
              "Extreme value theory for Poisson processes.",
              "Granville's refinement: limsup g_n / log² p_n ≥ 2e^{-γ}."
            ],
            "mystery": "Can we prove that prime gaps are bounded by any polynomial of log p unconditionally?",
            "funFact": "Harald Cramér formulated the conjecture in 1936."
          },
          "pioneers": {
            "tagline": "Selberg's integral bounds and Maier's matrix method.",
            "analogy": "Maier showed in 1985 that the Cramér model fails for short intervals, demonstrating deep arithmetic structure in prime gaps.",
            "rules": [
              "Maier's theorem on primes in short intervals.",
              "Selberg sieve bounds in Mathlib.",
              "Lean 4 extreme value formalization."
            ],
            "mystery": "AI automated record tracking scans billions of prime gap occurrences on distributed architectures.",
            "funFact": "Cramér's conjecture defines the ultimate gold standard for the smoothness of prime distribution."
          }
        },
        "history": [
          {
            "year": "1936",
            "author": "Harald Cramér",
            "note": "Publishes probabilistic model of prime distribution."
          },
          {
            "year": "1985",
            "author": "Helmut Maier",
            "note": "Discovers unexpected oscillations breaking naive probability model."
          },
          {
            "year": "1995",
            "author": "Andrew Granville",
            "note": "Refines Cramér's limit based on Maier's theorem."
          }
        ]
      },
      "fr": {
        "name": "Cramér's Prime Gap Conjecture",
        "subtitle": "Maximal Prime Gap Bound: p_{n+1} - p_n = O(log² p_n)",
        "field": "Probabilistic Number Theory & Extreme Gaps",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "How vast can the longest desert between two prime oasis stops ever be?",
            "analogy": "Prime gaps get wider as numbers grow. Harald Cramér used probability models in 1936 to conjecture that the maximum gap between consecutive primes is at most proportional to (log p)²! No prime desert can be wider than this logarithmic wall.",
            "rules": [
              "Consecutive primes p_n and p_{n+1}.",
              "Gap g_n = p_{n+1} - p_n.",
              "Cramér bound: g_n ≤ C (log p_n)².",
              "Tested for gaps exceeding 1,000 steps without violation!"
            ],
            "mystery": "The highest known merit gap g / log²(p) is 1.13, well under the predicted asymptotic limit of 1!",
            "funFact": "Even with the Riemann Hypothesis, the best proved gap is O(√p log p), far wider than Cramér's tiny (log p)²!"
          },
          "investigators": {
            "tagline": "Cramér random model and Granville's refinement.",
            "analogy": "Andrew Granville showed in 1995 that arithmetic correlations between prime divisors imply the limsup of g_n / log²(p_n) is at least 2e^{-γ} ≈ 1.1229, slightly modifying Cramér's original limit.",
            "rules": [
              "Cramér model: P(k is prime) = 1/log k.",
              "Extreme value theory for Poisson processes.",
              "Granville's refinement: limsup g_n / log² p_n ≥ 2e^{-γ}."
            ],
            "mystery": "Can we prove that prime gaps are bounded by any polynomial of log p unconditionally?",
            "funFact": "Harald Cramér formulated the conjecture in 1936."
          },
          "pioneers": {
            "tagline": "Selberg's integral bounds and Maier's matrix method.",
            "analogy": "Maier showed in 1985 that the Cramér model fails for short intervals, demonstrating deep arithmetic structure in prime gaps.",
            "rules": [
              "Maier's theorem on primes in short intervals.",
              "Selberg sieve bounds in Mathlib.",
              "Lean 4 extreme value formalization."
            ],
            "mystery": "AI automated record tracking scans billions of prime gap occurrences on distributed architectures.",
            "funFact": "Cramér's conjecture defines the ultimate gold standard for the smoothness of prime distribution."
          }
        },
        "history": [
          {
            "year": "1936",
            "author": "Harald Cramér",
            "note": "Publishes probabilistic model of prime distribution."
          },
          {
            "year": "1985",
            "author": "Helmut Maier",
            "note": "Discovers unexpected oscillations breaking naive probability model."
          },
          {
            "year": "1995",
            "author": "Andrew Granville",
            "note": "Refines Cramér's limit based on Maier's theorem."
          }
        ]
      },
      "it": {
        "name": "Cramér's Prime Gap Conjecture",
        "subtitle": "Maximal Prime Gap Bound: p_{n+1} - p_n = O(log² p_n)",
        "field": "Probabilistic Number Theory & Extreme Gaps",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "How vast can the longest desert between two prime oasis stops ever be?",
            "analogy": "Prime gaps get wider as numbers grow. Harald Cramér used probability models in 1936 to conjecture that the maximum gap between consecutive primes is at most proportional to (log p)²! No prime desert can be wider than this logarithmic wall.",
            "rules": [
              "Consecutive primes p_n and p_{n+1}.",
              "Gap g_n = p_{n+1} - p_n.",
              "Cramér bound: g_n ≤ C (log p_n)².",
              "Tested for gaps exceeding 1,000 steps without violation!"
            ],
            "mystery": "The highest known merit gap g / log²(p) is 1.13, well under the predicted asymptotic limit of 1!",
            "funFact": "Even with the Riemann Hypothesis, the best proved gap is O(√p log p), far wider than Cramér's tiny (log p)²!"
          },
          "investigators": {
            "tagline": "Cramér random model and Granville's refinement.",
            "analogy": "Andrew Granville showed in 1995 that arithmetic correlations between prime divisors imply the limsup of g_n / log²(p_n) is at least 2e^{-γ} ≈ 1.1229, slightly modifying Cramér's original limit.",
            "rules": [
              "Cramér model: P(k is prime) = 1/log k.",
              "Extreme value theory for Poisson processes.",
              "Granville's refinement: limsup g_n / log² p_n ≥ 2e^{-γ}."
            ],
            "mystery": "Can we prove that prime gaps are bounded by any polynomial of log p unconditionally?",
            "funFact": "Harald Cramér formulated the conjecture in 1936."
          },
          "pioneers": {
            "tagline": "Selberg's integral bounds and Maier's matrix method.",
            "analogy": "Maier showed in 1985 that the Cramér model fails for short intervals, demonstrating deep arithmetic structure in prime gaps.",
            "rules": [
              "Maier's theorem on primes in short intervals.",
              "Selberg sieve bounds in Mathlib.",
              "Lean 4 extreme value formalization."
            ],
            "mystery": "AI automated record tracking scans billions of prime gap occurrences on distributed architectures.",
            "funFact": "Cramér's conjecture defines the ultimate gold standard for the smoothness of prime distribution."
          }
        },
        "history": [
          {
            "year": "1936",
            "author": "Harald Cramér",
            "note": "Publishes probabilistic model of prime distribution."
          },
          {
            "year": "1985",
            "author": "Helmut Maier",
            "note": "Discovers unexpected oscillations breaking naive probability model."
          },
          {
            "year": "1995",
            "author": "Andrew Granville",
            "note": "Refines Cramér's limit based on Maier's theorem."
          }
        ]
      },
      "ja": {
        "name": "Cramér's Prime Gap Conjecture",
        "subtitle": "Maximal Prime Gap Bound: p_{n+1} - p_n = O(log² p_n)",
        "field": "Probabilistic Number Theory & Extreme Gaps",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "How vast can the longest desert between two prime oasis stops ever be?",
            "analogy": "Prime gaps get wider as numbers grow. Harald Cramér used probability models in 1936 to conjecture that the maximum gap between consecutive primes is at most proportional to (log p)²! No prime desert can be wider than this logarithmic wall.",
            "rules": [
              "Consecutive primes p_n and p_{n+1}.",
              "Gap g_n = p_{n+1} - p_n.",
              "Cramér bound: g_n ≤ C (log p_n)².",
              "Tested for gaps exceeding 1,000 steps without violation!"
            ],
            "mystery": "The highest known merit gap g / log²(p) is 1.13, well under the predicted asymptotic limit of 1!",
            "funFact": "Even with the Riemann Hypothesis, the best proved gap is O(√p log p), far wider than Cramér's tiny (log p)²!"
          },
          "investigators": {
            "tagline": "Cramér random model and Granville's refinement.",
            "analogy": "Andrew Granville showed in 1995 that arithmetic correlations between prime divisors imply the limsup of g_n / log²(p_n) is at least 2e^{-γ} ≈ 1.1229, slightly modifying Cramér's original limit.",
            "rules": [
              "Cramér model: P(k is prime) = 1/log k.",
              "Extreme value theory for Poisson processes.",
              "Granville's refinement: limsup g_n / log² p_n ≥ 2e^{-γ}."
            ],
            "mystery": "Can we prove that prime gaps are bounded by any polynomial of log p unconditionally?",
            "funFact": "Harald Cramér formulated the conjecture in 1936."
          },
          "pioneers": {
            "tagline": "Selberg's integral bounds and Maier's matrix method.",
            "analogy": "Maier showed in 1985 that the Cramér model fails for short intervals, demonstrating deep arithmetic structure in prime gaps.",
            "rules": [
              "Maier's theorem on primes in short intervals.",
              "Selberg sieve bounds in Mathlib.",
              "Lean 4 extreme value formalization."
            ],
            "mystery": "AI automated record tracking scans billions of prime gap occurrences on distributed architectures.",
            "funFact": "Cramér's conjecture defines the ultimate gold standard for the smoothness of prime distribution."
          }
        },
        "history": [
          {
            "year": "1936",
            "author": "Harald Cramér",
            "note": "Publishes probabilistic model of prime distribution."
          },
          {
            "year": "1985",
            "author": "Helmut Maier",
            "note": "Discovers unexpected oscillations breaking naive probability model."
          },
          {
            "year": "1995",
            "author": "Andrew Granville",
            "note": "Refines Cramér's limit based on Maier's theorem."
          }
        ]
      },
      "ko": {
        "name": "Cramér's Prime Gap Conjecture",
        "subtitle": "Maximal Prime Gap Bound: p_{n+1} - p_n = O(log² p_n)",
        "field": "Probabilistic Number Theory & Extreme Gaps",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "How vast can the longest desert between two prime oasis stops ever be?",
            "analogy": "Prime gaps get wider as numbers grow. Harald Cramér used probability models in 1936 to conjecture that the maximum gap between consecutive primes is at most proportional to (log p)²! No prime desert can be wider than this logarithmic wall.",
            "rules": [
              "Consecutive primes p_n and p_{n+1}.",
              "Gap g_n = p_{n+1} - p_n.",
              "Cramér bound: g_n ≤ C (log p_n)².",
              "Tested for gaps exceeding 1,000 steps without violation!"
            ],
            "mystery": "The highest known merit gap g / log²(p) is 1.13, well under the predicted asymptotic limit of 1!",
            "funFact": "Even with the Riemann Hypothesis, the best proved gap is O(√p log p), far wider than Cramér's tiny (log p)²!"
          },
          "investigators": {
            "tagline": "Cramér random model and Granville's refinement.",
            "analogy": "Andrew Granville showed in 1995 that arithmetic correlations between prime divisors imply the limsup of g_n / log²(p_n) is at least 2e^{-γ} ≈ 1.1229, slightly modifying Cramér's original limit.",
            "rules": [
              "Cramér model: P(k is prime) = 1/log k.",
              "Extreme value theory for Poisson processes.",
              "Granville's refinement: limsup g_n / log² p_n ≥ 2e^{-γ}."
            ],
            "mystery": "Can we prove that prime gaps are bounded by any polynomial of log p unconditionally?",
            "funFact": "Harald Cramér formulated the conjecture in 1936."
          },
          "pioneers": {
            "tagline": "Selberg's integral bounds and Maier's matrix method.",
            "analogy": "Maier showed in 1985 that the Cramér model fails for short intervals, demonstrating deep arithmetic structure in prime gaps.",
            "rules": [
              "Maier's theorem on primes in short intervals.",
              "Selberg sieve bounds in Mathlib.",
              "Lean 4 extreme value formalization."
            ],
            "mystery": "AI automated record tracking scans billions of prime gap occurrences on distributed architectures.",
            "funFact": "Cramér's conjecture defines the ultimate gold standard for the smoothness of prime distribution."
          }
        },
        "history": [
          {
            "year": "1936",
            "author": "Harald Cramér",
            "note": "Publishes probabilistic model of prime distribution."
          },
          {
            "year": "1985",
            "author": "Helmut Maier",
            "note": "Discovers unexpected oscillations breaking naive probability model."
          },
          {
            "year": "1995",
            "author": "Andrew Granville",
            "note": "Refines Cramér's limit based on Maier's theorem."
          }
        ]
      },
      "zh-Hans": {
        "name": "克拉默素数间隙猜想",
        "subtitle": "相邻素数最大间隙的对数平方渐近界 $O(\\log^2 p)$",
        "field": "概率数论 & 极端素数间隙",
        "statusBadge": "未解之谜",
        "grades": {
          "explorers": {
            "tagline": "素数绿洲之间最漫长的无素数沙漠，到底能有多宽？",
            "analogy": "随着数字变大，素数之间的荒漠间隙也随之拉宽。瑞典数学家哈拉尔·克拉默在1936年利用概率模型提出猜想：相邻素数之间的最大间隙，永远不会超过常数乘以 (log p)²！这道坚不可摧的对数高墙封顶了素数沙漠的最大可能。",
            "rules": [
              "相邻素数 p_n 与 p_{n+1}。",
              "间隙 g_n = p_{n+1} - p_n。",
              "克拉默上界预测：g_n ≤ C (log p_n)²。",
              "计算机搜寻到了上千步的巨型素数沙漠，全都严格满足该猜想！"
            ],
            "mystery": "目前已发现的所有素数间隙中，g / log²(p) 的实测极值仅为 1.13 左右，极其吻合理论极限！",
            "funFact": "哪怕假设黎曼猜想成立，人类能证明的间隙界也仅为 O(√p log p)，与克拉默的 (log p)² 还有着银河般的差距！"
          },
          "investigators": {
            "tagline": "克拉默随机素数模型与格兰维尔修正。",
            "analogy": "安德鲁·格兰维尔于1995年指出素数整除相关性使得极限上界可能至少为 2e^{-γ} ≈ 1.1229，对原始常数进行了关键修正。",
            "rules": [
              "克拉默模型：整数 k 为素数的独立概率约为 1/log k。",
              "独立随机变量极值统计分析。",
              "格兰维尔修正界：limsup g_n / log² p_n ≥ 1.1229。"
            ],
            "mystery": "我们能否无条件证明素数间隙受限于 log p 的某个多项式阶？",
            "funFact": "哈拉尔·克拉默于1936年提出。"
          },
          "pioneers": {
            "tagline": "塞尔伯格积分界与迈尔矩阵定理。",
            "analogy": "赫尔穆特·迈尔于1985年证明纯粹独立随机的克拉默模型在短区间内存在微观偏差，揭示出素数深邃的算术规律。",
            "rules": [
              "迈尔短区间素数矩阵定理。",
              "塞尔伯格筛法积分均方界。",
              "Lean 4 概率数论极值形式化。"
            ],
            "mystery": "AI 自动化系统持续记录并刷新分布式算力发现的极端素数间隙纪录。",
            "funFact": "克拉默猜想确立了人类关于素数分布极致平滑性的最高黄金标杆。"
          }
        },
        "history": [
          {
            "year": "1936",
            "author": "哈拉尔·克拉默",
            "note": "发表素数概率模型及最大间隙猜想。"
          },
          {
            "year": "1985",
            "author": "赫尔穆特·迈尔",
            "note": "发现素数短区间内的振荡反常现象。"
          },
          {
            "year": "1995",
            "author": "安德鲁·格兰维尔",
            "note": "结合算术结构修正克拉默极限下界。"
          }
        ]
      },
      "zh-Hant": {
        "name": "Cramér's Prime Gap Conjecture",
        "subtitle": "Maximal Prime Gap Bound: p_{n+1} - p_n = O(log² p_n)",
        "field": "Probabilistic Number Theory & Extreme Gaps",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "How vast can the longest desert between two prime oasis stops ever be?",
            "analogy": "Prime gaps get wider as numbers grow. Harald Cramér used probability models in 1936 to conjecture that the maximum gap between consecutive primes is at most proportional to (log p)²! No prime desert can be wider than this logarithmic wall.",
            "rules": [
              "Consecutive primes p_n and p_{n+1}.",
              "Gap g_n = p_{n+1} - p_n.",
              "Cramér bound: g_n ≤ C (log p_n)².",
              "Tested for gaps exceeding 1,000 steps without violation!"
            ],
            "mystery": "The highest known merit gap g / log²(p) is 1.13, well under the predicted asymptotic limit of 1!",
            "funFact": "Even with the Riemann Hypothesis, the best proved gap is O(√p log p), far wider than Cramér's tiny (log p)²!"
          },
          "investigators": {
            "tagline": "Cramér random model and Granville's refinement.",
            "analogy": "Andrew Granville showed in 1995 that arithmetic correlations between prime divisors imply the limsup of g_n / log²(p_n) is at least 2e^{-γ} ≈ 1.1229, slightly modifying Cramér's original limit.",
            "rules": [
              "Cramér model: P(k is prime) = 1/log k.",
              "Extreme value theory for Poisson processes.",
              "Granville's refinement: limsup g_n / log² p_n ≥ 2e^{-γ}."
            ],
            "mystery": "Can we prove that prime gaps are bounded by any polynomial of log p unconditionally?",
            "funFact": "Harald Cramér formulated the conjecture in 1936."
          },
          "pioneers": {
            "tagline": "Selberg's integral bounds and Maier's matrix method.",
            "analogy": "Maier showed in 1985 that the Cramér model fails for short intervals, demonstrating deep arithmetic structure in prime gaps.",
            "rules": [
              "Maier's theorem on primes in short intervals.",
              "Selberg sieve bounds in Mathlib.",
              "Lean 4 extreme value formalization."
            ],
            "mystery": "AI automated record tracking scans billions of prime gap occurrences on distributed architectures.",
            "funFact": "Cramér's conjecture defines the ultimate gold standard for the smoothness of prime distribution."
          }
        },
        "history": [
          {
            "year": "1936",
            "author": "Harald Cramér",
            "note": "Publishes probabilistic model of prime distribution."
          },
          {
            "year": "1985",
            "author": "Helmut Maier",
            "note": "Discovers unexpected oscillations breaking naive probability model."
          },
          {
            "year": "1995",
            "author": "Andrew Granville",
            "note": "Refines Cramér's limit based on Maier's theorem."
          }
        ]
      }
    }
  },
  {
    "id": "firoozbakht",
    "icon": "📉",
    "difficulty": "Gr 6+",
    "domain": "number-theory",
    "category": "number-theory",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Data.Nat.Prime\ndef FiroozbakhtConjecture : Prop := sorry",
    "locales": {
      "en": {
        "name": "Firoozbakht's Conjecture",
        "subtitle": "The Sequence p_n^(1/n) is Strictly Decreasing",
        "field": "Prime Growth Dynamics",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Does taking the nth root of the nth prime shrink steadily forever?",
            "analogy": "Calculate p_n^(1/n) for primes: 2^(1/1)=2, 3^(1/2)=1.732, 5^(1/3)=1.710, 7^(1/4)=1.627... Farideh Firoozbakht conjectured in 1982 that this sequence NEVER increases, strictly decreasing for every single prime in existence!",
            "rules": [
              "p_1 = 2 -> 2.000.",
              "p_2 = 3 -> 1.732.",
              "p_3 = 5 -> 1.710.",
              "p_4 = 7 -> 1.627.",
              "Does p_{n+1}^{1/(n+1)} < p_n^{1/n} hold for all infinity?"
            ],
            "mystery": "Verified for all primes up to 4 × 10^18 without a single failure!",
            "funFact": "Firoozbakht's conjecture is one of the strongest prime gap bounds known: it implies Cramér's conjecture with constant C=1!"
          },
          "investigators": {
            "tagline": "Implication for prime gaps g_n < (log p_n)² - log p_n - 1.",
            "analogy": "Firoozbakht's condition is equivalent to p_{n+1} < p_n^(1 + 1/n), which gives an extraordinarily tight gap bound.",
            "rules": [
              "Equivalent to p_{n+1} < p_n^(1 + 1/n).",
              "Verified through all maximal prime gaps up to 4 × 10^18.",
              "Implies strong Cramér bound."
            ],
            "mystery": "Granville's heuristic suggests that Firoozbakht's conjecture might eventually fail for astronomically large numbers around 10^1000.",
            "funFact": "Farideh Firoozbakht formulated this in 1982 at University of Isfahan."
          },
          "pioneers": {
            "tagline": "Extreme value distributions and prime gap merit records.",
            "analogy": "The conjecture tests whether the deterministic structure of primes can prevent rare Poisson fluctuations from violating monotonic decay.",
            "rules": [
              "Monotonic decay of n-th root.",
              "Merit threshold comparison.",
              "Formalization of sequences in Lean 4."
            ],
            "mystery": "AI-directed verification tracks prime gaps along the frontier of computational records.",
            "funFact": "Firoozbakht's conjecture is celebrated for its sheer aesthetic simplicity and extreme power."
          }
        },
        "history": [
          {
            "year": "1982",
            "author": "Farideh Firoozbakht",
            "note": "Formulates the n-th root conjecture."
          },
          {
            "year": "2015",
            "author": "Kourbatov",
            "note": "Verifies conjecture for all maximal gaps up to 4 × 10^18."
          }
        ]
      },
      "de": {
        "name": "Firoozbakht's Conjecture",
        "subtitle": "The Sequence p_n^(1/n) is Strictly Decreasing",
        "field": "Prime Growth Dynamics",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Does taking the nth root of the nth prime shrink steadily forever?",
            "analogy": "Calculate p_n^(1/n) for primes: 2^(1/1)=2, 3^(1/2)=1.732, 5^(1/3)=1.710, 7^(1/4)=1.627... Farideh Firoozbakht conjectured in 1982 that this sequence NEVER increases, strictly decreasing for every single prime in existence!",
            "rules": [
              "p_1 = 2 -> 2.000.",
              "p_2 = 3 -> 1.732.",
              "p_3 = 5 -> 1.710.",
              "p_4 = 7 -> 1.627.",
              "Does p_{n+1}^{1/(n+1)} < p_n^{1/n} hold for all infinity?"
            ],
            "mystery": "Verified for all primes up to 4 × 10^18 without a single failure!",
            "funFact": "Firoozbakht's conjecture is one of the strongest prime gap bounds known: it implies Cramér's conjecture with constant C=1!"
          },
          "investigators": {
            "tagline": "Implication for prime gaps g_n < (log p_n)² - log p_n - 1.",
            "analogy": "Firoozbakht's condition is equivalent to p_{n+1} < p_n^(1 + 1/n), which gives an extraordinarily tight gap bound.",
            "rules": [
              "Equivalent to p_{n+1} < p_n^(1 + 1/n).",
              "Verified through all maximal prime gaps up to 4 × 10^18.",
              "Implies strong Cramér bound."
            ],
            "mystery": "Granville's heuristic suggests that Firoozbakht's conjecture might eventually fail for astronomically large numbers around 10^1000.",
            "funFact": "Farideh Firoozbakht formulated this in 1982 at University of Isfahan."
          },
          "pioneers": {
            "tagline": "Extreme value distributions and prime gap merit records.",
            "analogy": "The conjecture tests whether the deterministic structure of primes can prevent rare Poisson fluctuations from violating monotonic decay.",
            "rules": [
              "Monotonic decay of n-th root.",
              "Merit threshold comparison.",
              "Formalization of sequences in Lean 4."
            ],
            "mystery": "AI-directed verification tracks prime gaps along the frontier of computational records.",
            "funFact": "Firoozbakht's conjecture is celebrated for its sheer aesthetic simplicity and extreme power."
          }
        },
        "history": [
          {
            "year": "1982",
            "author": "Farideh Firoozbakht",
            "note": "Formulates the n-th root conjecture."
          },
          {
            "year": "2015",
            "author": "Kourbatov",
            "note": "Verifies conjecture for all maximal gaps up to 4 × 10^18."
          }
        ]
      },
      "fr": {
        "name": "Firoozbakht's Conjecture",
        "subtitle": "The Sequence p_n^(1/n) is Strictly Decreasing",
        "field": "Prime Growth Dynamics",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Does taking the nth root of the nth prime shrink steadily forever?",
            "analogy": "Calculate p_n^(1/n) for primes: 2^(1/1)=2, 3^(1/2)=1.732, 5^(1/3)=1.710, 7^(1/4)=1.627... Farideh Firoozbakht conjectured in 1982 that this sequence NEVER increases, strictly decreasing for every single prime in existence!",
            "rules": [
              "p_1 = 2 -> 2.000.",
              "p_2 = 3 -> 1.732.",
              "p_3 = 5 -> 1.710.",
              "p_4 = 7 -> 1.627.",
              "Does p_{n+1}^{1/(n+1)} < p_n^{1/n} hold for all infinity?"
            ],
            "mystery": "Verified for all primes up to 4 × 10^18 without a single failure!",
            "funFact": "Firoozbakht's conjecture is one of the strongest prime gap bounds known: it implies Cramér's conjecture with constant C=1!"
          },
          "investigators": {
            "tagline": "Implication for prime gaps g_n < (log p_n)² - log p_n - 1.",
            "analogy": "Firoozbakht's condition is equivalent to p_{n+1} < p_n^(1 + 1/n), which gives an extraordinarily tight gap bound.",
            "rules": [
              "Equivalent to p_{n+1} < p_n^(1 + 1/n).",
              "Verified through all maximal prime gaps up to 4 × 10^18.",
              "Implies strong Cramér bound."
            ],
            "mystery": "Granville's heuristic suggests that Firoozbakht's conjecture might eventually fail for astronomically large numbers around 10^1000.",
            "funFact": "Farideh Firoozbakht formulated this in 1982 at University of Isfahan."
          },
          "pioneers": {
            "tagline": "Extreme value distributions and prime gap merit records.",
            "analogy": "The conjecture tests whether the deterministic structure of primes can prevent rare Poisson fluctuations from violating monotonic decay.",
            "rules": [
              "Monotonic decay of n-th root.",
              "Merit threshold comparison.",
              "Formalization of sequences in Lean 4."
            ],
            "mystery": "AI-directed verification tracks prime gaps along the frontier of computational records.",
            "funFact": "Firoozbakht's conjecture is celebrated for its sheer aesthetic simplicity and extreme power."
          }
        },
        "history": [
          {
            "year": "1982",
            "author": "Farideh Firoozbakht",
            "note": "Formulates the n-th root conjecture."
          },
          {
            "year": "2015",
            "author": "Kourbatov",
            "note": "Verifies conjecture for all maximal gaps up to 4 × 10^18."
          }
        ]
      },
      "it": {
        "name": "Firoozbakht's Conjecture",
        "subtitle": "The Sequence p_n^(1/n) is Strictly Decreasing",
        "field": "Prime Growth Dynamics",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Does taking the nth root of the nth prime shrink steadily forever?",
            "analogy": "Calculate p_n^(1/n) for primes: 2^(1/1)=2, 3^(1/2)=1.732, 5^(1/3)=1.710, 7^(1/4)=1.627... Farideh Firoozbakht conjectured in 1982 that this sequence NEVER increases, strictly decreasing for every single prime in existence!",
            "rules": [
              "p_1 = 2 -> 2.000.",
              "p_2 = 3 -> 1.732.",
              "p_3 = 5 -> 1.710.",
              "p_4 = 7 -> 1.627.",
              "Does p_{n+1}^{1/(n+1)} < p_n^{1/n} hold for all infinity?"
            ],
            "mystery": "Verified for all primes up to 4 × 10^18 without a single failure!",
            "funFact": "Firoozbakht's conjecture is one of the strongest prime gap bounds known: it implies Cramér's conjecture with constant C=1!"
          },
          "investigators": {
            "tagline": "Implication for prime gaps g_n < (log p_n)² - log p_n - 1.",
            "analogy": "Firoozbakht's condition is equivalent to p_{n+1} < p_n^(1 + 1/n), which gives an extraordinarily tight gap bound.",
            "rules": [
              "Equivalent to p_{n+1} < p_n^(1 + 1/n).",
              "Verified through all maximal prime gaps up to 4 × 10^18.",
              "Implies strong Cramér bound."
            ],
            "mystery": "Granville's heuristic suggests that Firoozbakht's conjecture might eventually fail for astronomically large numbers around 10^1000.",
            "funFact": "Farideh Firoozbakht formulated this in 1982 at University of Isfahan."
          },
          "pioneers": {
            "tagline": "Extreme value distributions and prime gap merit records.",
            "analogy": "The conjecture tests whether the deterministic structure of primes can prevent rare Poisson fluctuations from violating monotonic decay.",
            "rules": [
              "Monotonic decay of n-th root.",
              "Merit threshold comparison.",
              "Formalization of sequences in Lean 4."
            ],
            "mystery": "AI-directed verification tracks prime gaps along the frontier of computational records.",
            "funFact": "Firoozbakht's conjecture is celebrated for its sheer aesthetic simplicity and extreme power."
          }
        },
        "history": [
          {
            "year": "1982",
            "author": "Farideh Firoozbakht",
            "note": "Formulates the n-th root conjecture."
          },
          {
            "year": "2015",
            "author": "Kourbatov",
            "note": "Verifies conjecture for all maximal gaps up to 4 × 10^18."
          }
        ]
      },
      "ja": {
        "name": "Firoozbakht's Conjecture",
        "subtitle": "The Sequence p_n^(1/n) is Strictly Decreasing",
        "field": "Prime Growth Dynamics",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Does taking the nth root of the nth prime shrink steadily forever?",
            "analogy": "Calculate p_n^(1/n) for primes: 2^(1/1)=2, 3^(1/2)=1.732, 5^(1/3)=1.710, 7^(1/4)=1.627... Farideh Firoozbakht conjectured in 1982 that this sequence NEVER increases, strictly decreasing for every single prime in existence!",
            "rules": [
              "p_1 = 2 -> 2.000.",
              "p_2 = 3 -> 1.732.",
              "p_3 = 5 -> 1.710.",
              "p_4 = 7 -> 1.627.",
              "Does p_{n+1}^{1/(n+1)} < p_n^{1/n} hold for all infinity?"
            ],
            "mystery": "Verified for all primes up to 4 × 10^18 without a single failure!",
            "funFact": "Firoozbakht's conjecture is one of the strongest prime gap bounds known: it implies Cramér's conjecture with constant C=1!"
          },
          "investigators": {
            "tagline": "Implication for prime gaps g_n < (log p_n)² - log p_n - 1.",
            "analogy": "Firoozbakht's condition is equivalent to p_{n+1} < p_n^(1 + 1/n), which gives an extraordinarily tight gap bound.",
            "rules": [
              "Equivalent to p_{n+1} < p_n^(1 + 1/n).",
              "Verified through all maximal prime gaps up to 4 × 10^18.",
              "Implies strong Cramér bound."
            ],
            "mystery": "Granville's heuristic suggests that Firoozbakht's conjecture might eventually fail for astronomically large numbers around 10^1000.",
            "funFact": "Farideh Firoozbakht formulated this in 1982 at University of Isfahan."
          },
          "pioneers": {
            "tagline": "Extreme value distributions and prime gap merit records.",
            "analogy": "The conjecture tests whether the deterministic structure of primes can prevent rare Poisson fluctuations from violating monotonic decay.",
            "rules": [
              "Monotonic decay of n-th root.",
              "Merit threshold comparison.",
              "Formalization of sequences in Lean 4."
            ],
            "mystery": "AI-directed verification tracks prime gaps along the frontier of computational records.",
            "funFact": "Firoozbakht's conjecture is celebrated for its sheer aesthetic simplicity and extreme power."
          }
        },
        "history": [
          {
            "year": "1982",
            "author": "Farideh Firoozbakht",
            "note": "Formulates the n-th root conjecture."
          },
          {
            "year": "2015",
            "author": "Kourbatov",
            "note": "Verifies conjecture for all maximal gaps up to 4 × 10^18."
          }
        ]
      },
      "ko": {
        "name": "Firoozbakht's Conjecture",
        "subtitle": "The Sequence p_n^(1/n) is Strictly Decreasing",
        "field": "Prime Growth Dynamics",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Does taking the nth root of the nth prime shrink steadily forever?",
            "analogy": "Calculate p_n^(1/n) for primes: 2^(1/1)=2, 3^(1/2)=1.732, 5^(1/3)=1.710, 7^(1/4)=1.627... Farideh Firoozbakht conjectured in 1982 that this sequence NEVER increases, strictly decreasing for every single prime in existence!",
            "rules": [
              "p_1 = 2 -> 2.000.",
              "p_2 = 3 -> 1.732.",
              "p_3 = 5 -> 1.710.",
              "p_4 = 7 -> 1.627.",
              "Does p_{n+1}^{1/(n+1)} < p_n^{1/n} hold for all infinity?"
            ],
            "mystery": "Verified for all primes up to 4 × 10^18 without a single failure!",
            "funFact": "Firoozbakht's conjecture is one of the strongest prime gap bounds known: it implies Cramér's conjecture with constant C=1!"
          },
          "investigators": {
            "tagline": "Implication for prime gaps g_n < (log p_n)² - log p_n - 1.",
            "analogy": "Firoozbakht's condition is equivalent to p_{n+1} < p_n^(1 + 1/n), which gives an extraordinarily tight gap bound.",
            "rules": [
              "Equivalent to p_{n+1} < p_n^(1 + 1/n).",
              "Verified through all maximal prime gaps up to 4 × 10^18.",
              "Implies strong Cramér bound."
            ],
            "mystery": "Granville's heuristic suggests that Firoozbakht's conjecture might eventually fail for astronomically large numbers around 10^1000.",
            "funFact": "Farideh Firoozbakht formulated this in 1982 at University of Isfahan."
          },
          "pioneers": {
            "tagline": "Extreme value distributions and prime gap merit records.",
            "analogy": "The conjecture tests whether the deterministic structure of primes can prevent rare Poisson fluctuations from violating monotonic decay.",
            "rules": [
              "Monotonic decay of n-th root.",
              "Merit threshold comparison.",
              "Formalization of sequences in Lean 4."
            ],
            "mystery": "AI-directed verification tracks prime gaps along the frontier of computational records.",
            "funFact": "Firoozbakht's conjecture is celebrated for its sheer aesthetic simplicity and extreme power."
          }
        },
        "history": [
          {
            "year": "1982",
            "author": "Farideh Firoozbakht",
            "note": "Formulates the n-th root conjecture."
          },
          {
            "year": "2015",
            "author": "Kourbatov",
            "note": "Verifies conjecture for all maximal gaps up to 4 × 10^18."
          }
        ]
      },
      "zh-Hans": {
        "name": "菲鲁兹巴赫特猜想",
        "subtitle": "素数的 n 次方根序列 $p_n^{1/n}$ 严格单调递减",
        "field": "素数渐近增长动力学",
        "statusBadge": "未解之谜",
        "grades": {
          "explorers": {
            "tagline": "对第 n 个素数开 n 次方，得到的数值会不会如丝绸般永不反弹地平稳下降？",
            "analogy": "计算第 n 个素数的 n 次方根：第1个素数 2¹ = 2，第2个素数 3^(1/2) ≈ 1.732，第3个素数 5^(1/3) ≈ 1.710，第4个素数 7^(1/4) ≈ 1.627... 伊朗女数学家法里德·菲鲁兹巴赫特于1982年猜想：这个序列永远严格单调递减，绝无一次抬头！",
            "rules": [
              "p_1 = 2 -> 2.000。",
              "p_2 = 3 -> 1.732。",
              "p_3 = 5 -> 1.710。",
              "p_4 = 7 -> 1.627。",
              "猜想断言：p_{n+1}^{1/(n+1)} < p_n^{1/n} 对全宇宙所有素数永恒成立！"
            ],
            "mystery": "计算机已对高达 4 × 10^18 以内的所有素数完成了验证，绝无一次破例！",
            "funFact": "这是人类已知最强韧的素数间隙猜想之一：它直接蕴含了常数 C=1 的强克拉默猜想！"
          },
          "investigators": {
            "tagline": "蕴含极端优异的素数间隙上界。",
            "analogy": "条件等价于 p_{n+1} < p_n^(1 + 1/n)，为每一个相邻素数间隙提供了极其紧致的刚性上界约束。",
            "rules": [
              "等价于 p_{n+1} < p_n^(1 + 1/n)。",
              "已验证至 4 × 10^18 内的所有已知最大素数间隙点。",
              "直接推导出强克拉默上界。"
            ],
            "mystery": "然而格兰维尔模型指出：该猜想在高达 10^1000 的极度天文学巨数区间可能遭遇微妙的临界挑战。",
            "funFact": "法里德·菲鲁兹巴赫特于1982年在伊朗伊斯法罕大学提出。"
          },
          "pioneers": {
            "tagline": "极值理论与素数间隙优值纪录。",
            "analogy": "核心在于素数的确定性乘法结构能否压制泊松统计波动。",
            "rules": [
              "n 次根的单调递减性质。",
              "优值纪录阈值对比分析。",
              "Lean 4 Mathlib 中单调序列定义。"
            ],
            "mystery": "AI 自动化系统正在沿最大素数间隙的前沿进行全面监控。",
            "funFact": "菲鲁兹巴赫特猜想因其极致的美学对称与极其惊人的定理威力而备受赞誉。"
          }
        },
        "history": [
          {
            "year": "1982",
            "author": "法里德·菲鲁兹巴赫特",
            "note": "正式提出素数开 n 次方单调递减猜想。"
          },
          {
            "year": "2015",
            "author": "库尔巴托夫",
            "note": "对 4 × 10^18 内所有最大间隙完成全量验证。"
          }
        ]
      },
      "zh-Hant": {
        "name": "Firoozbakht's Conjecture",
        "subtitle": "The Sequence p_n^(1/n) is Strictly Decreasing",
        "field": "Prime Growth Dynamics",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Does taking the nth root of the nth prime shrink steadily forever?",
            "analogy": "Calculate p_n^(1/n) for primes: 2^(1/1)=2, 3^(1/2)=1.732, 5^(1/3)=1.710, 7^(1/4)=1.627... Farideh Firoozbakht conjectured in 1982 that this sequence NEVER increases, strictly decreasing for every single prime in existence!",
            "rules": [
              "p_1 = 2 -> 2.000.",
              "p_2 = 3 -> 1.732.",
              "p_3 = 5 -> 1.710.",
              "p_4 = 7 -> 1.627.",
              "Does p_{n+1}^{1/(n+1)} < p_n^{1/n} hold for all infinity?"
            ],
            "mystery": "Verified for all primes up to 4 × 10^18 without a single failure!",
            "funFact": "Firoozbakht's conjecture is one of the strongest prime gap bounds known: it implies Cramér's conjecture with constant C=1!"
          },
          "investigators": {
            "tagline": "Implication for prime gaps g_n < (log p_n)² - log p_n - 1.",
            "analogy": "Firoozbakht's condition is equivalent to p_{n+1} < p_n^(1 + 1/n), which gives an extraordinarily tight gap bound.",
            "rules": [
              "Equivalent to p_{n+1} < p_n^(1 + 1/n).",
              "Verified through all maximal prime gaps up to 4 × 10^18.",
              "Implies strong Cramér bound."
            ],
            "mystery": "Granville's heuristic suggests that Firoozbakht's conjecture might eventually fail for astronomically large numbers around 10^1000.",
            "funFact": "Farideh Firoozbakht formulated this in 1982 at University of Isfahan."
          },
          "pioneers": {
            "tagline": "Extreme value distributions and prime gap merit records.",
            "analogy": "The conjecture tests whether the deterministic structure of primes can prevent rare Poisson fluctuations from violating monotonic decay.",
            "rules": [
              "Monotonic decay of n-th root.",
              "Merit threshold comparison.",
              "Formalization of sequences in Lean 4."
            ],
            "mystery": "AI-directed verification tracks prime gaps along the frontier of computational records.",
            "funFact": "Firoozbakht's conjecture is celebrated for its sheer aesthetic simplicity and extreme power."
          }
        },
        "history": [
          {
            "year": "1982",
            "author": "Farideh Firoozbakht",
            "note": "Formulates the n-th root conjecture."
          },
          {
            "year": "2015",
            "author": "Kourbatov",
            "note": "Verifies conjecture for all maximal gaps up to 4 × 10^18."
          }
        ]
      }
    }
  },
  {
    "id": "bunyakovsky",
    "icon": "📈",
    "difficulty": "Gr 6+",
    "domain": "number-theory",
    "category": "number-theory",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Data.Nat.Prime\ndef BunyakovskyConjecture : Prop := sorry",
    "locales": {
      "en": {
        "name": "Bunyakovsky's Conjecture",
        "subtitle": "Can Polynomials Like n² + 1 Produce Infinitely Many Primes?",
        "field": "Polynomial Prime Values & Dirichlet Generalization",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can an algebraic recipe cook up infinitely many prime dishes?",
            "analogy": "Dirichlet proved that linear polynomials an + b produce infinitely many primes. But what about quadratic ones like n² + 1? (1²+1=2, 2²+1=5, 4²+1=17, 6²+1=37...). Viktor Bunyakovsky conjectured in 1857 that ANY irreducible polynomial without common factor obstacles generates infinitely many primes!",
            "rules": [
              "Choose polynomial f(n) = n² + 1.",
              "Check values: f(1)=2, f(2)=5, f(4)=17, f(6)=37...",
              "All are prime!",
              "Landau's 4th problem: Are there infinitely many primes of form n² + 1?"
            ],
            "mystery": "Not a single polynomial of degree ≥ 2 has EVER been proved to produce infinitely many primes!",
            "funFact": "Henryk Iwaniec proved in 1978 that n² + 1 produces infinitely many numbers that are either prime or the product of at most two primes (P_2)!"
          },
          "investigators": {
            "tagline": "Schinzel's Hypothesis H generalization.",
            "analogy": "Bunyakovsky's conjecture requires three conditions: positive leading coefficient, irreducibility over ℤ, and gcd of all values equals 1.",
            "rules": [
              "3 conditions: deg > 0, irreducible in ℤ[x], gcd(f(1), f(2), ...) = 1.",
              "Iwaniec (1978): n² + 1 is prime or P_2 infinitely often.",
              "Friedlander-Iwaniec (1998): a² + b⁴ produces primes."
            ],
            "mystery": "Can modern sieve parity breakers prove Bunyakovsky for degree 2 polynomials?",
            "funFact": "Viktor Bunyakovsky proposed this in 1857 in St. Petersburg."
          },
          "pioneers": {
            "tagline": "Affine sieve and spectral theory of automorphic forms.",
            "analogy": "Bourgain, Gamburd, and Sarnak generalized polynomial prime production using expander graphs and the affine sieve.",
            "rules": [
              "Affine sieve theory.",
              "Expander graphs and spectral gaps.",
              "Lean 4 Mathlib polynomial rings."
            ],
            "mystery": "AI interactive theorem provers are formalizing the Friedlander-Iwaniec sieve architecture.",
            "funFact": "Bunyakovsky's conjecture is the ultimate bridge between polynomial algebra and prime generation."
          }
        },
        "history": [
          {
            "year": "1857",
            "author": "Viktor Bunyakovsky",
            "note": "Formulates the general polynomial prime conjecture."
          },
          {
            "year": "1978",
            "author": "Henryk Iwaniec",
            "note": "Proves n² + 1 produces infinitely many primes or products of two primes."
          },
          {
            "year": "1998",
            "author": "John Friedlander & Henryk Iwaniec",
            "note": "Prove a² + b⁴ produces infinitely many primes."
          }
        ]
      },
      "de": {
        "name": "Bunyakovsky's Conjecture",
        "subtitle": "Can Polynomials Like n² + 1 Produce Infinitely Many Primes?",
        "field": "Polynomial Prime Values & Dirichlet Generalization",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can an algebraic recipe cook up infinitely many prime dishes?",
            "analogy": "Dirichlet proved that linear polynomials an + b produce infinitely many primes. But what about quadratic ones like n² + 1? (1²+1=2, 2²+1=5, 4²+1=17, 6²+1=37...). Viktor Bunyakovsky conjectured in 1857 that ANY irreducible polynomial without common factor obstacles generates infinitely many primes!",
            "rules": [
              "Choose polynomial f(n) = n² + 1.",
              "Check values: f(1)=2, f(2)=5, f(4)=17, f(6)=37...",
              "All are prime!",
              "Landau's 4th problem: Are there infinitely many primes of form n² + 1?"
            ],
            "mystery": "Not a single polynomial of degree ≥ 2 has EVER been proved to produce infinitely many primes!",
            "funFact": "Henryk Iwaniec proved in 1978 that n² + 1 produces infinitely many numbers that are either prime or the product of at most two primes (P_2)!"
          },
          "investigators": {
            "tagline": "Schinzel's Hypothesis H generalization.",
            "analogy": "Bunyakovsky's conjecture requires three conditions: positive leading coefficient, irreducibility over ℤ, and gcd of all values equals 1.",
            "rules": [
              "3 conditions: deg > 0, irreducible in ℤ[x], gcd(f(1), f(2), ...) = 1.",
              "Iwaniec (1978): n² + 1 is prime or P_2 infinitely often.",
              "Friedlander-Iwaniec (1998): a² + b⁴ produces primes."
            ],
            "mystery": "Can modern sieve parity breakers prove Bunyakovsky for degree 2 polynomials?",
            "funFact": "Viktor Bunyakovsky proposed this in 1857 in St. Petersburg."
          },
          "pioneers": {
            "tagline": "Affine sieve and spectral theory of automorphic forms.",
            "analogy": "Bourgain, Gamburd, and Sarnak generalized polynomial prime production using expander graphs and the affine sieve.",
            "rules": [
              "Affine sieve theory.",
              "Expander graphs and spectral gaps.",
              "Lean 4 Mathlib polynomial rings."
            ],
            "mystery": "AI interactive theorem provers are formalizing the Friedlander-Iwaniec sieve architecture.",
            "funFact": "Bunyakovsky's conjecture is the ultimate bridge between polynomial algebra and prime generation."
          }
        },
        "history": [
          {
            "year": "1857",
            "author": "Viktor Bunyakovsky",
            "note": "Formulates the general polynomial prime conjecture."
          },
          {
            "year": "1978",
            "author": "Henryk Iwaniec",
            "note": "Proves n² + 1 produces infinitely many primes or products of two primes."
          },
          {
            "year": "1998",
            "author": "John Friedlander & Henryk Iwaniec",
            "note": "Prove a² + b⁴ produces infinitely many primes."
          }
        ]
      },
      "fr": {
        "name": "Bunyakovsky's Conjecture",
        "subtitle": "Can Polynomials Like n² + 1 Produce Infinitely Many Primes?",
        "field": "Polynomial Prime Values & Dirichlet Generalization",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can an algebraic recipe cook up infinitely many prime dishes?",
            "analogy": "Dirichlet proved that linear polynomials an + b produce infinitely many primes. But what about quadratic ones like n² + 1? (1²+1=2, 2²+1=5, 4²+1=17, 6²+1=37...). Viktor Bunyakovsky conjectured in 1857 that ANY irreducible polynomial without common factor obstacles generates infinitely many primes!",
            "rules": [
              "Choose polynomial f(n) = n² + 1.",
              "Check values: f(1)=2, f(2)=5, f(4)=17, f(6)=37...",
              "All are prime!",
              "Landau's 4th problem: Are there infinitely many primes of form n² + 1?"
            ],
            "mystery": "Not a single polynomial of degree ≥ 2 has EVER been proved to produce infinitely many primes!",
            "funFact": "Henryk Iwaniec proved in 1978 that n² + 1 produces infinitely many numbers that are either prime or the product of at most two primes (P_2)!"
          },
          "investigators": {
            "tagline": "Schinzel's Hypothesis H generalization.",
            "analogy": "Bunyakovsky's conjecture requires three conditions: positive leading coefficient, irreducibility over ℤ, and gcd of all values equals 1.",
            "rules": [
              "3 conditions: deg > 0, irreducible in ℤ[x], gcd(f(1), f(2), ...) = 1.",
              "Iwaniec (1978): n² + 1 is prime or P_2 infinitely often.",
              "Friedlander-Iwaniec (1998): a² + b⁴ produces primes."
            ],
            "mystery": "Can modern sieve parity breakers prove Bunyakovsky for degree 2 polynomials?",
            "funFact": "Viktor Bunyakovsky proposed this in 1857 in St. Petersburg."
          },
          "pioneers": {
            "tagline": "Affine sieve and spectral theory of automorphic forms.",
            "analogy": "Bourgain, Gamburd, and Sarnak generalized polynomial prime production using expander graphs and the affine sieve.",
            "rules": [
              "Affine sieve theory.",
              "Expander graphs and spectral gaps.",
              "Lean 4 Mathlib polynomial rings."
            ],
            "mystery": "AI interactive theorem provers are formalizing the Friedlander-Iwaniec sieve architecture.",
            "funFact": "Bunyakovsky's conjecture is the ultimate bridge between polynomial algebra and prime generation."
          }
        },
        "history": [
          {
            "year": "1857",
            "author": "Viktor Bunyakovsky",
            "note": "Formulates the general polynomial prime conjecture."
          },
          {
            "year": "1978",
            "author": "Henryk Iwaniec",
            "note": "Proves n² + 1 produces infinitely many primes or products of two primes."
          },
          {
            "year": "1998",
            "author": "John Friedlander & Henryk Iwaniec",
            "note": "Prove a² + b⁴ produces infinitely many primes."
          }
        ]
      },
      "it": {
        "name": "Bunyakovsky's Conjecture",
        "subtitle": "Can Polynomials Like n² + 1 Produce Infinitely Many Primes?",
        "field": "Polynomial Prime Values & Dirichlet Generalization",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can an algebraic recipe cook up infinitely many prime dishes?",
            "analogy": "Dirichlet proved that linear polynomials an + b produce infinitely many primes. But what about quadratic ones like n² + 1? (1²+1=2, 2²+1=5, 4²+1=17, 6²+1=37...). Viktor Bunyakovsky conjectured in 1857 that ANY irreducible polynomial without common factor obstacles generates infinitely many primes!",
            "rules": [
              "Choose polynomial f(n) = n² + 1.",
              "Check values: f(1)=2, f(2)=5, f(4)=17, f(6)=37...",
              "All are prime!",
              "Landau's 4th problem: Are there infinitely many primes of form n² + 1?"
            ],
            "mystery": "Not a single polynomial of degree ≥ 2 has EVER been proved to produce infinitely many primes!",
            "funFact": "Henryk Iwaniec proved in 1978 that n² + 1 produces infinitely many numbers that are either prime or the product of at most two primes (P_2)!"
          },
          "investigators": {
            "tagline": "Schinzel's Hypothesis H generalization.",
            "analogy": "Bunyakovsky's conjecture requires three conditions: positive leading coefficient, irreducibility over ℤ, and gcd of all values equals 1.",
            "rules": [
              "3 conditions: deg > 0, irreducible in ℤ[x], gcd(f(1), f(2), ...) = 1.",
              "Iwaniec (1978): n² + 1 is prime or P_2 infinitely often.",
              "Friedlander-Iwaniec (1998): a² + b⁴ produces primes."
            ],
            "mystery": "Can modern sieve parity breakers prove Bunyakovsky for degree 2 polynomials?",
            "funFact": "Viktor Bunyakovsky proposed this in 1857 in St. Petersburg."
          },
          "pioneers": {
            "tagline": "Affine sieve and spectral theory of automorphic forms.",
            "analogy": "Bourgain, Gamburd, and Sarnak generalized polynomial prime production using expander graphs and the affine sieve.",
            "rules": [
              "Affine sieve theory.",
              "Expander graphs and spectral gaps.",
              "Lean 4 Mathlib polynomial rings."
            ],
            "mystery": "AI interactive theorem provers are formalizing the Friedlander-Iwaniec sieve architecture.",
            "funFact": "Bunyakovsky's conjecture is the ultimate bridge between polynomial algebra and prime generation."
          }
        },
        "history": [
          {
            "year": "1857",
            "author": "Viktor Bunyakovsky",
            "note": "Formulates the general polynomial prime conjecture."
          },
          {
            "year": "1978",
            "author": "Henryk Iwaniec",
            "note": "Proves n² + 1 produces infinitely many primes or products of two primes."
          },
          {
            "year": "1998",
            "author": "John Friedlander & Henryk Iwaniec",
            "note": "Prove a² + b⁴ produces infinitely many primes."
          }
        ]
      },
      "ja": {
        "name": "Bunyakovsky's Conjecture",
        "subtitle": "Can Polynomials Like n² + 1 Produce Infinitely Many Primes?",
        "field": "Polynomial Prime Values & Dirichlet Generalization",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can an algebraic recipe cook up infinitely many prime dishes?",
            "analogy": "Dirichlet proved that linear polynomials an + b produce infinitely many primes. But what about quadratic ones like n² + 1? (1²+1=2, 2²+1=5, 4²+1=17, 6²+1=37...). Viktor Bunyakovsky conjectured in 1857 that ANY irreducible polynomial without common factor obstacles generates infinitely many primes!",
            "rules": [
              "Choose polynomial f(n) = n² + 1.",
              "Check values: f(1)=2, f(2)=5, f(4)=17, f(6)=37...",
              "All are prime!",
              "Landau's 4th problem: Are there infinitely many primes of form n² + 1?"
            ],
            "mystery": "Not a single polynomial of degree ≥ 2 has EVER been proved to produce infinitely many primes!",
            "funFact": "Henryk Iwaniec proved in 1978 that n² + 1 produces infinitely many numbers that are either prime or the product of at most two primes (P_2)!"
          },
          "investigators": {
            "tagline": "Schinzel's Hypothesis H generalization.",
            "analogy": "Bunyakovsky's conjecture requires three conditions: positive leading coefficient, irreducibility over ℤ, and gcd of all values equals 1.",
            "rules": [
              "3 conditions: deg > 0, irreducible in ℤ[x], gcd(f(1), f(2), ...) = 1.",
              "Iwaniec (1978): n² + 1 is prime or P_2 infinitely often.",
              "Friedlander-Iwaniec (1998): a² + b⁴ produces primes."
            ],
            "mystery": "Can modern sieve parity breakers prove Bunyakovsky for degree 2 polynomials?",
            "funFact": "Viktor Bunyakovsky proposed this in 1857 in St. Petersburg."
          },
          "pioneers": {
            "tagline": "Affine sieve and spectral theory of automorphic forms.",
            "analogy": "Bourgain, Gamburd, and Sarnak generalized polynomial prime production using expander graphs and the affine sieve.",
            "rules": [
              "Affine sieve theory.",
              "Expander graphs and spectral gaps.",
              "Lean 4 Mathlib polynomial rings."
            ],
            "mystery": "AI interactive theorem provers are formalizing the Friedlander-Iwaniec sieve architecture.",
            "funFact": "Bunyakovsky's conjecture is the ultimate bridge between polynomial algebra and prime generation."
          }
        },
        "history": [
          {
            "year": "1857",
            "author": "Viktor Bunyakovsky",
            "note": "Formulates the general polynomial prime conjecture."
          },
          {
            "year": "1978",
            "author": "Henryk Iwaniec",
            "note": "Proves n² + 1 produces infinitely many primes or products of two primes."
          },
          {
            "year": "1998",
            "author": "John Friedlander & Henryk Iwaniec",
            "note": "Prove a² + b⁴ produces infinitely many primes."
          }
        ]
      },
      "ko": {
        "name": "Bunyakovsky's Conjecture",
        "subtitle": "Can Polynomials Like n² + 1 Produce Infinitely Many Primes?",
        "field": "Polynomial Prime Values & Dirichlet Generalization",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can an algebraic recipe cook up infinitely many prime dishes?",
            "analogy": "Dirichlet proved that linear polynomials an + b produce infinitely many primes. But what about quadratic ones like n² + 1? (1²+1=2, 2²+1=5, 4²+1=17, 6²+1=37...). Viktor Bunyakovsky conjectured in 1857 that ANY irreducible polynomial without common factor obstacles generates infinitely many primes!",
            "rules": [
              "Choose polynomial f(n) = n² + 1.",
              "Check values: f(1)=2, f(2)=5, f(4)=17, f(6)=37...",
              "All are prime!",
              "Landau's 4th problem: Are there infinitely many primes of form n² + 1?"
            ],
            "mystery": "Not a single polynomial of degree ≥ 2 has EVER been proved to produce infinitely many primes!",
            "funFact": "Henryk Iwaniec proved in 1978 that n² + 1 produces infinitely many numbers that are either prime or the product of at most two primes (P_2)!"
          },
          "investigators": {
            "tagline": "Schinzel's Hypothesis H generalization.",
            "analogy": "Bunyakovsky's conjecture requires three conditions: positive leading coefficient, irreducibility over ℤ, and gcd of all values equals 1.",
            "rules": [
              "3 conditions: deg > 0, irreducible in ℤ[x], gcd(f(1), f(2), ...) = 1.",
              "Iwaniec (1978): n² + 1 is prime or P_2 infinitely often.",
              "Friedlander-Iwaniec (1998): a² + b⁴ produces primes."
            ],
            "mystery": "Can modern sieve parity breakers prove Bunyakovsky for degree 2 polynomials?",
            "funFact": "Viktor Bunyakovsky proposed this in 1857 in St. Petersburg."
          },
          "pioneers": {
            "tagline": "Affine sieve and spectral theory of automorphic forms.",
            "analogy": "Bourgain, Gamburd, and Sarnak generalized polynomial prime production using expander graphs and the affine sieve.",
            "rules": [
              "Affine sieve theory.",
              "Expander graphs and spectral gaps.",
              "Lean 4 Mathlib polynomial rings."
            ],
            "mystery": "AI interactive theorem provers are formalizing the Friedlander-Iwaniec sieve architecture.",
            "funFact": "Bunyakovsky's conjecture is the ultimate bridge between polynomial algebra and prime generation."
          }
        },
        "history": [
          {
            "year": "1857",
            "author": "Viktor Bunyakovsky",
            "note": "Formulates the general polynomial prime conjecture."
          },
          {
            "year": "1978",
            "author": "Henryk Iwaniec",
            "note": "Proves n² + 1 produces infinitely many primes or products of two primes."
          },
          {
            "year": "1998",
            "author": "John Friedlander & Henryk Iwaniec",
            "note": "Prove a² + b⁴ produces infinitely many primes."
          }
        ]
      },
      "zh-Hans": {
        "name": "布尼亚科夫斯基猜想",
        "subtitle": "像 n² + 1 这样的整系数多项式能否产生无穷多个素数？",
        "field": "多项式素数值 & 狄利克雷定理推广",
        "statusBadge": "未解之谜",
        "grades": {
          "explorers": {
            "tagline": "一个简单的多项式数学食谱，能不能烹饪出无穷无尽的素数大餐？",
            "analogy": "狄利克雷证明了一次多项式 an + b 能产生无穷多个素数。但二次多项式（如 n² + 1）呢？1²+1=2, 2²+1=5, 4²+1=17, 6²+1=37... 维克托·布尼亚科夫斯基在1857年猜想：任何不可约且无固定公因数的多项式，必定能产生无穷多个素数！",
            "rules": [
              "选取多项式 f(n) = n² + 1。",
              "计算取值：f(1)=2, f(2)=5, f(4)=17, f(6)=37……",
              "全都是素数！",
              "朗道第四大难题：形如 n² + 1 的素数是否无穷多？"
            ],
            "mystery": "整个人类数学史上，至今甚至没有彻底证明过任何一个次数 ≥ 2 的多项式能产生无穷素数！",
            "funFact": "伊万涅茨于1978年运用深沉筛法证明：n² + 1 能产生无穷多个“素数或至多两个素数之积”（殆素数 P_2）！"
          },
          "investigators": {
            "tagline": "辛策尔假说 H 的高级推广。",
            "analogy": "布尼亚科夫斯基三大必要条件：首项系数为正、在整数环上不可约、所有取值的公约数为 1。",
            "rules": [
              "三大黄金条件判定。",
              "伊万涅茨 (1978) 殆素数定理。",
              "弗里德兰德-伊万涅茨 (1998) 证明 a² + b⁴ 产生无穷多素数！"
            ],
            "mystery": "现代筛法能否打破奇偶性壁垒，完成次数为2的多项式证明？",
            "funFact": "维克托·布尼亚科夫斯基在圣彼得堡提出。"
          },
          "pioneers": {
            "tagline": "仿射筛法与自守形式谱理论。",
            "analogy": "布尔甘、甘伯德与萨纳克利用膨胀图与仿射筛法将该问题推广至代数轨道。",
            "rules": [
              "仿射筛法理论。",
              "图谱隙与自守形式分析。",
              "Lean 4 Mathlib 中整系数多项式环不可约性。"
            ],
            "mystery": "AI 形式化系统正在编码弗里德兰德-伊万涅茨关于二元四次型的经典证明。",
            "funFact": "布尼亚科夫斯基猜想是连接代数多项式与素数生成机制的终极纽带。"
          }
        },
        "history": [
          {
            "year": "1857",
            "author": "布尼亚科夫斯基",
            "note": "在圣彼得堡科学院提出多项式素数生成通用猜想。"
          },
          {
            "year": "1978",
            "author": "亨利·伊万涅茨",
            "note": "证明 n² + 1 产生无穷多个殆素数 P_2。"
          },
          {
            "year": "1998",
            "author": "弗里德兰德 & 伊万涅茨",
            "note": "突破性证明二元多项式 a² + b⁴ 产生无穷素数。"
          }
        ]
      },
      "zh-Hant": {
        "name": "Bunyakovsky's Conjecture",
        "subtitle": "Can Polynomials Like n² + 1 Produce Infinitely Many Primes?",
        "field": "Polynomial Prime Values & Dirichlet Generalization",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can an algebraic recipe cook up infinitely many prime dishes?",
            "analogy": "Dirichlet proved that linear polynomials an + b produce infinitely many primes. But what about quadratic ones like n² + 1? (1²+1=2, 2²+1=5, 4²+1=17, 6²+1=37...). Viktor Bunyakovsky conjectured in 1857 that ANY irreducible polynomial without common factor obstacles generates infinitely many primes!",
            "rules": [
              "Choose polynomial f(n) = n² + 1.",
              "Check values: f(1)=2, f(2)=5, f(4)=17, f(6)=37...",
              "All are prime!",
              "Landau's 4th problem: Are there infinitely many primes of form n² + 1?"
            ],
            "mystery": "Not a single polynomial of degree ≥ 2 has EVER been proved to produce infinitely many primes!",
            "funFact": "Henryk Iwaniec proved in 1978 that n² + 1 produces infinitely many numbers that are either prime or the product of at most two primes (P_2)!"
          },
          "investigators": {
            "tagline": "Schinzel's Hypothesis H generalization.",
            "analogy": "Bunyakovsky's conjecture requires three conditions: positive leading coefficient, irreducibility over ℤ, and gcd of all values equals 1.",
            "rules": [
              "3 conditions: deg > 0, irreducible in ℤ[x], gcd(f(1), f(2), ...) = 1.",
              "Iwaniec (1978): n² + 1 is prime or P_2 infinitely often.",
              "Friedlander-Iwaniec (1998): a² + b⁴ produces primes."
            ],
            "mystery": "Can modern sieve parity breakers prove Bunyakovsky for degree 2 polynomials?",
            "funFact": "Viktor Bunyakovsky proposed this in 1857 in St. Petersburg."
          },
          "pioneers": {
            "tagline": "Affine sieve and spectral theory of automorphic forms.",
            "analogy": "Bourgain, Gamburd, and Sarnak generalized polynomial prime production using expander graphs and the affine sieve.",
            "rules": [
              "Affine sieve theory.",
              "Expander graphs and spectral gaps.",
              "Lean 4 Mathlib polynomial rings."
            ],
            "mystery": "AI interactive theorem provers are formalizing the Friedlander-Iwaniec sieve architecture.",
            "funFact": "Bunyakovsky's conjecture is the ultimate bridge between polynomial algebra and prime generation."
          }
        },
        "history": [
          {
            "year": "1857",
            "author": "Viktor Bunyakovsky",
            "note": "Formulates the general polynomial prime conjecture."
          },
          {
            "year": "1978",
            "author": "Henryk Iwaniec",
            "note": "Proves n² + 1 produces infinitely many primes or products of two primes."
          },
          {
            "year": "1998",
            "author": "John Friedlander & Henryk Iwaniec",
            "note": "Prove a² + b⁴ produces infinitely many primes."
          }
        ]
      }
    }
  },
  {
    "id": "dickson",
    "icon": "⛓️",
    "difficulty": "Gr 6+",
    "domain": "number-theory",
    "category": "number-theory",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Data.Nat.Prime\ndef DicksonConjecture : Prop := sorry",
    "locales": {
      "en": {
        "name": "Dickson's Conjecture",
        "subtitle": "Simultaneous Prime Values of Linear Forms a_i n + b_i",
        "field": "Additive Prime Number Theory",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can multiple prime trains run side-by-side forever on parallel tracks?",
            "analogy": "Dirichlet proved that a single linear form an + b yields infinitely many primes. Leonard Dickson asked in 1904: what about a set of linear forms like (n, n+2) for twin primes, or (n, 2n+1) for Sophie Germain? He conjectured they are simultaneously prime infinitely often unless blocked by a modular reason!",
            "rules": [
              "Take two forms: f_1(n) = n, f_2(n) = n + 2.",
              "They represent twin primes!",
              "Dickson: Any family of linear forms without common divisors produces simultaneous primes infinitely often."
            ],
            "mystery": "Dickson's conjecture encompasses the Twin Prime conjecture, Sophie Germain conjecture, and Polignac conjecture all in one!",
            "funFact": "Green and Tao proved in 2004 that primes contain arbitrarily long arithmetic progressions, proving Dickson for special constellations!"
          },
          "investigators": {
            "tagline": "Schinzel's Hypothesis H and Hardy-Littlewood k-tuple conjecture.",
            "analogy": "Dickson's conjecture is the linear degree-1 case of Schinzel's Hypothesis H.",
            "rules": [
              "k linear forms: a_1 n + b_1, ..., a_k n + b_k.",
              "No prime p divides the product for all n.",
              "Green-Tao Theorem (2004) proved arithmetic progressions."
            ],
            "mystery": "Can higher-order Gowers norms resolve the full Dickson conjecture for k=2 linear forms?",
            "funFact": "Leonard Eugene Dickson formulated the conjecture in 1904."
          },
          "pioneers": {
            "tagline": "Additive combinatorics and pseudorandomness in primes.",
            "analogy": "The transference principle allows transferring combinatorial theorems (Szemerédi) from dense sets to the sparse primes.",
            "rules": [
              "Gowers uniformity norms U^k.",
              "Transference principle in Mathlib.",
              "Formal verification of Dickson's statement."
            ],
            "mystery": "AI proof research is exploring correlations in higher Gowers uniformity structures.",
            "funFact": "Dickson's conjecture is the grand unified theory of prime constellations."
          }
        },
        "history": [
          {
            "year": "1904",
            "author": "Leonard Dickson",
            "note": "Proposes simultaneous linear prime values conjecture."
          },
          {
            "year": "2004",
            "author": "Ben Green & Terence Tao",
            "note": "Prove primes contain arbitrarily long arithmetic progressions."
          }
        ]
      },
      "de": {
        "name": "Dickson's Conjecture",
        "subtitle": "Simultaneous Prime Values of Linear Forms a_i n + b_i",
        "field": "Additive Prime Number Theory",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can multiple prime trains run side-by-side forever on parallel tracks?",
            "analogy": "Dirichlet proved that a single linear form an + b yields infinitely many primes. Leonard Dickson asked in 1904: what about a set of linear forms like (n, n+2) for twin primes, or (n, 2n+1) for Sophie Germain? He conjectured they are simultaneously prime infinitely often unless blocked by a modular reason!",
            "rules": [
              "Take two forms: f_1(n) = n, f_2(n) = n + 2.",
              "They represent twin primes!",
              "Dickson: Any family of linear forms without common divisors produces simultaneous primes infinitely often."
            ],
            "mystery": "Dickson's conjecture encompasses the Twin Prime conjecture, Sophie Germain conjecture, and Polignac conjecture all in one!",
            "funFact": "Green and Tao proved in 2004 that primes contain arbitrarily long arithmetic progressions, proving Dickson for special constellations!"
          },
          "investigators": {
            "tagline": "Schinzel's Hypothesis H and Hardy-Littlewood k-tuple conjecture.",
            "analogy": "Dickson's conjecture is the linear degree-1 case of Schinzel's Hypothesis H.",
            "rules": [
              "k linear forms: a_1 n + b_1, ..., a_k n + b_k.",
              "No prime p divides the product for all n.",
              "Green-Tao Theorem (2004) proved arithmetic progressions."
            ],
            "mystery": "Can higher-order Gowers norms resolve the full Dickson conjecture for k=2 linear forms?",
            "funFact": "Leonard Eugene Dickson formulated the conjecture in 1904."
          },
          "pioneers": {
            "tagline": "Additive combinatorics and pseudorandomness in primes.",
            "analogy": "The transference principle allows transferring combinatorial theorems (Szemerédi) from dense sets to the sparse primes.",
            "rules": [
              "Gowers uniformity norms U^k.",
              "Transference principle in Mathlib.",
              "Formal verification of Dickson's statement."
            ],
            "mystery": "AI proof research is exploring correlations in higher Gowers uniformity structures.",
            "funFact": "Dickson's conjecture is the grand unified theory of prime constellations."
          }
        },
        "history": [
          {
            "year": "1904",
            "author": "Leonard Dickson",
            "note": "Proposes simultaneous linear prime values conjecture."
          },
          {
            "year": "2004",
            "author": "Ben Green & Terence Tao",
            "note": "Prove primes contain arbitrarily long arithmetic progressions."
          }
        ]
      },
      "fr": {
        "name": "Dickson's Conjecture",
        "subtitle": "Simultaneous Prime Values of Linear Forms a_i n + b_i",
        "field": "Additive Prime Number Theory",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can multiple prime trains run side-by-side forever on parallel tracks?",
            "analogy": "Dirichlet proved that a single linear form an + b yields infinitely many primes. Leonard Dickson asked in 1904: what about a set of linear forms like (n, n+2) for twin primes, or (n, 2n+1) for Sophie Germain? He conjectured they are simultaneously prime infinitely often unless blocked by a modular reason!",
            "rules": [
              "Take two forms: f_1(n) = n, f_2(n) = n + 2.",
              "They represent twin primes!",
              "Dickson: Any family of linear forms without common divisors produces simultaneous primes infinitely often."
            ],
            "mystery": "Dickson's conjecture encompasses the Twin Prime conjecture, Sophie Germain conjecture, and Polignac conjecture all in one!",
            "funFact": "Green and Tao proved in 2004 that primes contain arbitrarily long arithmetic progressions, proving Dickson for special constellations!"
          },
          "investigators": {
            "tagline": "Schinzel's Hypothesis H and Hardy-Littlewood k-tuple conjecture.",
            "analogy": "Dickson's conjecture is the linear degree-1 case of Schinzel's Hypothesis H.",
            "rules": [
              "k linear forms: a_1 n + b_1, ..., a_k n + b_k.",
              "No prime p divides the product for all n.",
              "Green-Tao Theorem (2004) proved arithmetic progressions."
            ],
            "mystery": "Can higher-order Gowers norms resolve the full Dickson conjecture for k=2 linear forms?",
            "funFact": "Leonard Eugene Dickson formulated the conjecture in 1904."
          },
          "pioneers": {
            "tagline": "Additive combinatorics and pseudorandomness in primes.",
            "analogy": "The transference principle allows transferring combinatorial theorems (Szemerédi) from dense sets to the sparse primes.",
            "rules": [
              "Gowers uniformity norms U^k.",
              "Transference principle in Mathlib.",
              "Formal verification of Dickson's statement."
            ],
            "mystery": "AI proof research is exploring correlations in higher Gowers uniformity structures.",
            "funFact": "Dickson's conjecture is the grand unified theory of prime constellations."
          }
        },
        "history": [
          {
            "year": "1904",
            "author": "Leonard Dickson",
            "note": "Proposes simultaneous linear prime values conjecture."
          },
          {
            "year": "2004",
            "author": "Ben Green & Terence Tao",
            "note": "Prove primes contain arbitrarily long arithmetic progressions."
          }
        ]
      },
      "it": {
        "name": "Dickson's Conjecture",
        "subtitle": "Simultaneous Prime Values of Linear Forms a_i n + b_i",
        "field": "Additive Prime Number Theory",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can multiple prime trains run side-by-side forever on parallel tracks?",
            "analogy": "Dirichlet proved that a single linear form an + b yields infinitely many primes. Leonard Dickson asked in 1904: what about a set of linear forms like (n, n+2) for twin primes, or (n, 2n+1) for Sophie Germain? He conjectured they are simultaneously prime infinitely often unless blocked by a modular reason!",
            "rules": [
              "Take two forms: f_1(n) = n, f_2(n) = n + 2.",
              "They represent twin primes!",
              "Dickson: Any family of linear forms without common divisors produces simultaneous primes infinitely often."
            ],
            "mystery": "Dickson's conjecture encompasses the Twin Prime conjecture, Sophie Germain conjecture, and Polignac conjecture all in one!",
            "funFact": "Green and Tao proved in 2004 that primes contain arbitrarily long arithmetic progressions, proving Dickson for special constellations!"
          },
          "investigators": {
            "tagline": "Schinzel's Hypothesis H and Hardy-Littlewood k-tuple conjecture.",
            "analogy": "Dickson's conjecture is the linear degree-1 case of Schinzel's Hypothesis H.",
            "rules": [
              "k linear forms: a_1 n + b_1, ..., a_k n + b_k.",
              "No prime p divides the product for all n.",
              "Green-Tao Theorem (2004) proved arithmetic progressions."
            ],
            "mystery": "Can higher-order Gowers norms resolve the full Dickson conjecture for k=2 linear forms?",
            "funFact": "Leonard Eugene Dickson formulated the conjecture in 1904."
          },
          "pioneers": {
            "tagline": "Additive combinatorics and pseudorandomness in primes.",
            "analogy": "The transference principle allows transferring combinatorial theorems (Szemerédi) from dense sets to the sparse primes.",
            "rules": [
              "Gowers uniformity norms U^k.",
              "Transference principle in Mathlib.",
              "Formal verification of Dickson's statement."
            ],
            "mystery": "AI proof research is exploring correlations in higher Gowers uniformity structures.",
            "funFact": "Dickson's conjecture is the grand unified theory of prime constellations."
          }
        },
        "history": [
          {
            "year": "1904",
            "author": "Leonard Dickson",
            "note": "Proposes simultaneous linear prime values conjecture."
          },
          {
            "year": "2004",
            "author": "Ben Green & Terence Tao",
            "note": "Prove primes contain arbitrarily long arithmetic progressions."
          }
        ]
      },
      "ja": {
        "name": "Dickson's Conjecture",
        "subtitle": "Simultaneous Prime Values of Linear Forms a_i n + b_i",
        "field": "Additive Prime Number Theory",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can multiple prime trains run side-by-side forever on parallel tracks?",
            "analogy": "Dirichlet proved that a single linear form an + b yields infinitely many primes. Leonard Dickson asked in 1904: what about a set of linear forms like (n, n+2) for twin primes, or (n, 2n+1) for Sophie Germain? He conjectured they are simultaneously prime infinitely often unless blocked by a modular reason!",
            "rules": [
              "Take two forms: f_1(n) = n, f_2(n) = n + 2.",
              "They represent twin primes!",
              "Dickson: Any family of linear forms without common divisors produces simultaneous primes infinitely often."
            ],
            "mystery": "Dickson's conjecture encompasses the Twin Prime conjecture, Sophie Germain conjecture, and Polignac conjecture all in one!",
            "funFact": "Green and Tao proved in 2004 that primes contain arbitrarily long arithmetic progressions, proving Dickson for special constellations!"
          },
          "investigators": {
            "tagline": "Schinzel's Hypothesis H and Hardy-Littlewood k-tuple conjecture.",
            "analogy": "Dickson's conjecture is the linear degree-1 case of Schinzel's Hypothesis H.",
            "rules": [
              "k linear forms: a_1 n + b_1, ..., a_k n + b_k.",
              "No prime p divides the product for all n.",
              "Green-Tao Theorem (2004) proved arithmetic progressions."
            ],
            "mystery": "Can higher-order Gowers norms resolve the full Dickson conjecture for k=2 linear forms?",
            "funFact": "Leonard Eugene Dickson formulated the conjecture in 1904."
          },
          "pioneers": {
            "tagline": "Additive combinatorics and pseudorandomness in primes.",
            "analogy": "The transference principle allows transferring combinatorial theorems (Szemerédi) from dense sets to the sparse primes.",
            "rules": [
              "Gowers uniformity norms U^k.",
              "Transference principle in Mathlib.",
              "Formal verification of Dickson's statement."
            ],
            "mystery": "AI proof research is exploring correlations in higher Gowers uniformity structures.",
            "funFact": "Dickson's conjecture is the grand unified theory of prime constellations."
          }
        },
        "history": [
          {
            "year": "1904",
            "author": "Leonard Dickson",
            "note": "Proposes simultaneous linear prime values conjecture."
          },
          {
            "year": "2004",
            "author": "Ben Green & Terence Tao",
            "note": "Prove primes contain arbitrarily long arithmetic progressions."
          }
        ]
      },
      "ko": {
        "name": "Dickson's Conjecture",
        "subtitle": "Simultaneous Prime Values of Linear Forms a_i n + b_i",
        "field": "Additive Prime Number Theory",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can multiple prime trains run side-by-side forever on parallel tracks?",
            "analogy": "Dirichlet proved that a single linear form an + b yields infinitely many primes. Leonard Dickson asked in 1904: what about a set of linear forms like (n, n+2) for twin primes, or (n, 2n+1) for Sophie Germain? He conjectured they are simultaneously prime infinitely often unless blocked by a modular reason!",
            "rules": [
              "Take two forms: f_1(n) = n, f_2(n) = n + 2.",
              "They represent twin primes!",
              "Dickson: Any family of linear forms without common divisors produces simultaneous primes infinitely often."
            ],
            "mystery": "Dickson's conjecture encompasses the Twin Prime conjecture, Sophie Germain conjecture, and Polignac conjecture all in one!",
            "funFact": "Green and Tao proved in 2004 that primes contain arbitrarily long arithmetic progressions, proving Dickson for special constellations!"
          },
          "investigators": {
            "tagline": "Schinzel's Hypothesis H and Hardy-Littlewood k-tuple conjecture.",
            "analogy": "Dickson's conjecture is the linear degree-1 case of Schinzel's Hypothesis H.",
            "rules": [
              "k linear forms: a_1 n + b_1, ..., a_k n + b_k.",
              "No prime p divides the product for all n.",
              "Green-Tao Theorem (2004) proved arithmetic progressions."
            ],
            "mystery": "Can higher-order Gowers norms resolve the full Dickson conjecture for k=2 linear forms?",
            "funFact": "Leonard Eugene Dickson formulated the conjecture in 1904."
          },
          "pioneers": {
            "tagline": "Additive combinatorics and pseudorandomness in primes.",
            "analogy": "The transference principle allows transferring combinatorial theorems (Szemerédi) from dense sets to the sparse primes.",
            "rules": [
              "Gowers uniformity norms U^k.",
              "Transference principle in Mathlib.",
              "Formal verification of Dickson's statement."
            ],
            "mystery": "AI proof research is exploring correlations in higher Gowers uniformity structures.",
            "funFact": "Dickson's conjecture is the grand unified theory of prime constellations."
          }
        },
        "history": [
          {
            "year": "1904",
            "author": "Leonard Dickson",
            "note": "Proposes simultaneous linear prime values conjecture."
          },
          {
            "year": "2004",
            "author": "Ben Green & Terence Tao",
            "note": "Prove primes contain arbitrarily long arithmetic progressions."
          }
        ]
      },
      "zh-Hans": {
        "name": "狄克逊猜想",
        "subtitle": "一组线性一次多项式同时产生素数的无穷性",
        "field": "加性数论 & 线性形式素数",
        "statusBadge": "未解之谜",
        "grades": {
          "explorers": {
            "tagline": "多条素数高铁能否在平行的轨道上并驾齐驱，永远同时到站？",
            "analogy": "狄利克雷证明了单个一次式 an + b 会产生无穷多素数。1904年伦纳德·狄克逊发问：如果是一组一次式（如对应孪生素数的 n 和 n+2，或对应索菲·热尔曼素数的 n 和 2n+1）呢？他猜想：只要没有固定的同余整除阻碍，它们必定同时为素数无穷多次！",
            "rules": [
              "取两个一次式：f_1(n) = n, f_2(n) = n + 2。",
              "这正是孪生素数对！",
              "狄克逊猜想：任意一组无固定整除阻碍的一次式，必定有无穷组正整数解使得它们同时为素数。"
            ],
            "mystery": "狄克逊猜想将孪生素数猜想、索菲·热尔曼猜想、波利尼亚克猜想全部作为特例包揽其中！",
            "funFact": "格林与陶哲轩在2004年震撼证明了素数包含任意长的等差数列，为狄克逊猜想确立了里程碑式的基石！"
          },
          "investigators": {
            "tagline": "辛策尔假说 H 与哈代-李特尔伍德 k-元组猜想。",
            "analogy": "狄克逊猜想是著名的辛策尔假说 H 在一次线性情形下的完整表述。",
            "rules": [
              "k 个一次式系统。",
              "局部可解性条件：无公共素除数。",
              "格林-陶哲轩定理 (2004) 证明等差素数序列。"
            ],
            "mystery": "更高阶的高尔斯伪随机范数能否彻底攻克 k=2 的狄克逊猜想？",
            "funFact": "伦纳德·尤金·狄克逊于1904年提出。"
          },
          "pioneers": {
            "tagline": "加性组合学与素数伪随机性理论。",
            "analogy": "陶哲轩的“迁移原理”成功将塞迈雷迪组合定理引申到稀疏的素数集上。",
            "rules": [
              "高尔斯 U^k 一致性范数。",
              "陶哲轩迁移原理。",
              "Lean 4 Mathlib 中加性数论形式化。"
            ],
            "mystery": "AI 自动化系统正在分析多重相关函数在高阶高尔斯范数下的控制界。",
            "funFact": "狄克逊猜想是关于所有素数星座结构的大一统纲领。"
          }
        },
        "history": [
          {
            "year": "1904",
            "author": "伦纳德·狄克逊",
            "note": "提出一次多项式同时取素数值的宏伟猜想。"
          },
          {
            "year": "2004",
            "author": "本·格林 & 陶哲轩",
            "note": "震撼证明素数中存在任意长度的等差数列！"
          }
        ]
      },
      "zh-Hant": {
        "name": "Dickson's Conjecture",
        "subtitle": "Simultaneous Prime Values of Linear Forms a_i n + b_i",
        "field": "Additive Prime Number Theory",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can multiple prime trains run side-by-side forever on parallel tracks?",
            "analogy": "Dirichlet proved that a single linear form an + b yields infinitely many primes. Leonard Dickson asked in 1904: what about a set of linear forms like (n, n+2) for twin primes, or (n, 2n+1) for Sophie Germain? He conjectured they are simultaneously prime infinitely often unless blocked by a modular reason!",
            "rules": [
              "Take two forms: f_1(n) = n, f_2(n) = n + 2.",
              "They represent twin primes!",
              "Dickson: Any family of linear forms without common divisors produces simultaneous primes infinitely often."
            ],
            "mystery": "Dickson's conjecture encompasses the Twin Prime conjecture, Sophie Germain conjecture, and Polignac conjecture all in one!",
            "funFact": "Green and Tao proved in 2004 that primes contain arbitrarily long arithmetic progressions, proving Dickson for special constellations!"
          },
          "investigators": {
            "tagline": "Schinzel's Hypothesis H and Hardy-Littlewood k-tuple conjecture.",
            "analogy": "Dickson's conjecture is the linear degree-1 case of Schinzel's Hypothesis H.",
            "rules": [
              "k linear forms: a_1 n + b_1, ..., a_k n + b_k.",
              "No prime p divides the product for all n.",
              "Green-Tao Theorem (2004) proved arithmetic progressions."
            ],
            "mystery": "Can higher-order Gowers norms resolve the full Dickson conjecture for k=2 linear forms?",
            "funFact": "Leonard Eugene Dickson formulated the conjecture in 1904."
          },
          "pioneers": {
            "tagline": "Additive combinatorics and pseudorandomness in primes.",
            "analogy": "The transference principle allows transferring combinatorial theorems (Szemerédi) from dense sets to the sparse primes.",
            "rules": [
              "Gowers uniformity norms U^k.",
              "Transference principle in Mathlib.",
              "Formal verification of Dickson's statement."
            ],
            "mystery": "AI proof research is exploring correlations in higher Gowers uniformity structures.",
            "funFact": "Dickson's conjecture is the grand unified theory of prime constellations."
          }
        },
        "history": [
          {
            "year": "1904",
            "author": "Leonard Dickson",
            "note": "Proposes simultaneous linear prime values conjecture."
          },
          {
            "year": "2004",
            "author": "Ben Green & Terence Tao",
            "note": "Prove primes contain arbitrarily long arithmetic progressions."
          }
        ]
      }
    }
  },
  {
    "id": "bateman-horn",
    "icon": "📊",
    "difficulty": "Gr 9+",
    "domain": "number-theory",
    "category": "number-theory",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Data.Nat.Prime\ndef BatemanHornConstant : ℝ := sorry\ndef BatemanHornAsymptotics : Prop := sorry",
    "locales": {
      "en": {
        "name": "Bateman-Horn Conjecture",
        "subtitle": "Quantitative Asymptotic Density for Systems of Polynomial Primes",
        "field": "Analytic Number Theory & Quantitative Density",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can we calculate the exact percentage of primes cooked by any polynomial recipe?",
            "analogy": "Bunyakovsky guessed polynomials produce infinitely many primes, but Bateman and Horn in 1962 went much further: they provided an EXACT formula predicting how many primes any set of polynomials will generate up to any limit x! It matches computer counts with jaw-dropping accuracy.",
            "rules": [
              "Bateman-Horn predicts: Q(x) ~ (C / (d_1 ... d_k)) ∫_2^x dt / (log t)^k.",
              "C is an infinite Euler product over all primes.",
              "Matches empirical data to 9 decimal places!"
            ],
            "mystery": "It generalizes the Prime Number Theorem, Twin Prime Conjecture, and Hardy-Littlewood formulas into one universal law!",
            "funFact": "For twin primes, Bateman-Horn reproduces Hardy-Littlewood's twin prime constant C_2 ≈ 0.6601618!"
          },
          "investigators": {
            "tagline": "Heuristic derivation from the circle method and local factor densities.",
            "analogy": "The constant C(f_1, ..., f_k) = ∏_p (1 - ω(p)/p) / (1 - 1/p)^k where ω(p) is the number of solutions to f_1(n)...f_k(n) ≡ 0 (mod p).",
            "rules": [
              "Euler product constant: C = ∏_p (1 - ω(p)/p) / (1 - 1/p)^k.",
              "Logarithmic integral Li_k(x).",
              "Formalization of Euler products in Lean 4."
            ],
            "mystery": "Can the circle method or Selberg sieve confirm the non-vanishing of C and the asymptotic main term?",
            "funFact": "Paul T. Bateman and Roger A. Horn formulated this in 1962."
          },
          "pioneers": {
            "tagline": "Hardy-Littlewood circle method and minor arcs.",
            "analogy": "The conjecture corresponds to the expectation that the major arcs capture the entire asymptotic behavior while minor arcs cancel out.",
            "rules": [
              "Circle method Fourier decomposition.",
              "Exponential sums over prime values.",
              "Lean 4 Mathlib asymptotic expansions."
            ],
            "mystery": "AI-guided spectral estimation is testing minor arc cancellation bounds.",
            "funFact": "Bateman-Horn is considered the pinnacle of 20th-century heuristic analytic number theory."
          }
        },
        "history": [
          {
            "year": "1962",
            "author": "Bateman & Horn",
            "note": "Publish heuristic asymptotic formula for polynomial primes."
          },
          {
            "year": "2022",
            "author": "Modern Computations",
            "note": "High-precision integration confirms predictions up to 10^20."
          }
        ]
      },
      "de": {
        "name": "Bateman-Horn Conjecture",
        "subtitle": "Quantitative Asymptotic Density for Systems of Polynomial Primes",
        "field": "Analytic Number Theory & Quantitative Density",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can we calculate the exact percentage of primes cooked by any polynomial recipe?",
            "analogy": "Bunyakovsky guessed polynomials produce infinitely many primes, but Bateman and Horn in 1962 went much further: they provided an EXACT formula predicting how many primes any set of polynomials will generate up to any limit x! It matches computer counts with jaw-dropping accuracy.",
            "rules": [
              "Bateman-Horn predicts: Q(x) ~ (C / (d_1 ... d_k)) ∫_2^x dt / (log t)^k.",
              "C is an infinite Euler product over all primes.",
              "Matches empirical data to 9 decimal places!"
            ],
            "mystery": "It generalizes the Prime Number Theorem, Twin Prime Conjecture, and Hardy-Littlewood formulas into one universal law!",
            "funFact": "For twin primes, Bateman-Horn reproduces Hardy-Littlewood's twin prime constant C_2 ≈ 0.6601618!"
          },
          "investigators": {
            "tagline": "Heuristic derivation from the circle method and local factor densities.",
            "analogy": "The constant C(f_1, ..., f_k) = ∏_p (1 - ω(p)/p) / (1 - 1/p)^k where ω(p) is the number of solutions to f_1(n)...f_k(n) ≡ 0 (mod p).",
            "rules": [
              "Euler product constant: C = ∏_p (1 - ω(p)/p) / (1 - 1/p)^k.",
              "Logarithmic integral Li_k(x).",
              "Formalization of Euler products in Lean 4."
            ],
            "mystery": "Can the circle method or Selberg sieve confirm the non-vanishing of C and the asymptotic main term?",
            "funFact": "Paul T. Bateman and Roger A. Horn formulated this in 1962."
          },
          "pioneers": {
            "tagline": "Hardy-Littlewood circle method and minor arcs.",
            "analogy": "The conjecture corresponds to the expectation that the major arcs capture the entire asymptotic behavior while minor arcs cancel out.",
            "rules": [
              "Circle method Fourier decomposition.",
              "Exponential sums over prime values.",
              "Lean 4 Mathlib asymptotic expansions."
            ],
            "mystery": "AI-guided spectral estimation is testing minor arc cancellation bounds.",
            "funFact": "Bateman-Horn is considered the pinnacle of 20th-century heuristic analytic number theory."
          }
        },
        "history": [
          {
            "year": "1962",
            "author": "Bateman & Horn",
            "note": "Publish heuristic asymptotic formula for polynomial primes."
          },
          {
            "year": "2022",
            "author": "Modern Computations",
            "note": "High-precision integration confirms predictions up to 10^20."
          }
        ]
      },
      "fr": {
        "name": "Bateman-Horn Conjecture",
        "subtitle": "Quantitative Asymptotic Density for Systems of Polynomial Primes",
        "field": "Analytic Number Theory & Quantitative Density",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can we calculate the exact percentage of primes cooked by any polynomial recipe?",
            "analogy": "Bunyakovsky guessed polynomials produce infinitely many primes, but Bateman and Horn in 1962 went much further: they provided an EXACT formula predicting how many primes any set of polynomials will generate up to any limit x! It matches computer counts with jaw-dropping accuracy.",
            "rules": [
              "Bateman-Horn predicts: Q(x) ~ (C / (d_1 ... d_k)) ∫_2^x dt / (log t)^k.",
              "C is an infinite Euler product over all primes.",
              "Matches empirical data to 9 decimal places!"
            ],
            "mystery": "It generalizes the Prime Number Theorem, Twin Prime Conjecture, and Hardy-Littlewood formulas into one universal law!",
            "funFact": "For twin primes, Bateman-Horn reproduces Hardy-Littlewood's twin prime constant C_2 ≈ 0.6601618!"
          },
          "investigators": {
            "tagline": "Heuristic derivation from the circle method and local factor densities.",
            "analogy": "The constant C(f_1, ..., f_k) = ∏_p (1 - ω(p)/p) / (1 - 1/p)^k where ω(p) is the number of solutions to f_1(n)...f_k(n) ≡ 0 (mod p).",
            "rules": [
              "Euler product constant: C = ∏_p (1 - ω(p)/p) / (1 - 1/p)^k.",
              "Logarithmic integral Li_k(x).",
              "Formalization of Euler products in Lean 4."
            ],
            "mystery": "Can the circle method or Selberg sieve confirm the non-vanishing of C and the asymptotic main term?",
            "funFact": "Paul T. Bateman and Roger A. Horn formulated this in 1962."
          },
          "pioneers": {
            "tagline": "Hardy-Littlewood circle method and minor arcs.",
            "analogy": "The conjecture corresponds to the expectation that the major arcs capture the entire asymptotic behavior while minor arcs cancel out.",
            "rules": [
              "Circle method Fourier decomposition.",
              "Exponential sums over prime values.",
              "Lean 4 Mathlib asymptotic expansions."
            ],
            "mystery": "AI-guided spectral estimation is testing minor arc cancellation bounds.",
            "funFact": "Bateman-Horn is considered the pinnacle of 20th-century heuristic analytic number theory."
          }
        },
        "history": [
          {
            "year": "1962",
            "author": "Bateman & Horn",
            "note": "Publish heuristic asymptotic formula for polynomial primes."
          },
          {
            "year": "2022",
            "author": "Modern Computations",
            "note": "High-precision integration confirms predictions up to 10^20."
          }
        ]
      },
      "it": {
        "name": "Bateman-Horn Conjecture",
        "subtitle": "Quantitative Asymptotic Density for Systems of Polynomial Primes",
        "field": "Analytic Number Theory & Quantitative Density",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can we calculate the exact percentage of primes cooked by any polynomial recipe?",
            "analogy": "Bunyakovsky guessed polynomials produce infinitely many primes, but Bateman and Horn in 1962 went much further: they provided an EXACT formula predicting how many primes any set of polynomials will generate up to any limit x! It matches computer counts with jaw-dropping accuracy.",
            "rules": [
              "Bateman-Horn predicts: Q(x) ~ (C / (d_1 ... d_k)) ∫_2^x dt / (log t)^k.",
              "C is an infinite Euler product over all primes.",
              "Matches empirical data to 9 decimal places!"
            ],
            "mystery": "It generalizes the Prime Number Theorem, Twin Prime Conjecture, and Hardy-Littlewood formulas into one universal law!",
            "funFact": "For twin primes, Bateman-Horn reproduces Hardy-Littlewood's twin prime constant C_2 ≈ 0.6601618!"
          },
          "investigators": {
            "tagline": "Heuristic derivation from the circle method and local factor densities.",
            "analogy": "The constant C(f_1, ..., f_k) = ∏_p (1 - ω(p)/p) / (1 - 1/p)^k where ω(p) is the number of solutions to f_1(n)...f_k(n) ≡ 0 (mod p).",
            "rules": [
              "Euler product constant: C = ∏_p (1 - ω(p)/p) / (1 - 1/p)^k.",
              "Logarithmic integral Li_k(x).",
              "Formalization of Euler products in Lean 4."
            ],
            "mystery": "Can the circle method or Selberg sieve confirm the non-vanishing of C and the asymptotic main term?",
            "funFact": "Paul T. Bateman and Roger A. Horn formulated this in 1962."
          },
          "pioneers": {
            "tagline": "Hardy-Littlewood circle method and minor arcs.",
            "analogy": "The conjecture corresponds to the expectation that the major arcs capture the entire asymptotic behavior while minor arcs cancel out.",
            "rules": [
              "Circle method Fourier decomposition.",
              "Exponential sums over prime values.",
              "Lean 4 Mathlib asymptotic expansions."
            ],
            "mystery": "AI-guided spectral estimation is testing minor arc cancellation bounds.",
            "funFact": "Bateman-Horn is considered the pinnacle of 20th-century heuristic analytic number theory."
          }
        },
        "history": [
          {
            "year": "1962",
            "author": "Bateman & Horn",
            "note": "Publish heuristic asymptotic formula for polynomial primes."
          },
          {
            "year": "2022",
            "author": "Modern Computations",
            "note": "High-precision integration confirms predictions up to 10^20."
          }
        ]
      },
      "ja": {
        "name": "Bateman-Horn Conjecture",
        "subtitle": "Quantitative Asymptotic Density for Systems of Polynomial Primes",
        "field": "Analytic Number Theory & Quantitative Density",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can we calculate the exact percentage of primes cooked by any polynomial recipe?",
            "analogy": "Bunyakovsky guessed polynomials produce infinitely many primes, but Bateman and Horn in 1962 went much further: they provided an EXACT formula predicting how many primes any set of polynomials will generate up to any limit x! It matches computer counts with jaw-dropping accuracy.",
            "rules": [
              "Bateman-Horn predicts: Q(x) ~ (C / (d_1 ... d_k)) ∫_2^x dt / (log t)^k.",
              "C is an infinite Euler product over all primes.",
              "Matches empirical data to 9 decimal places!"
            ],
            "mystery": "It generalizes the Prime Number Theorem, Twin Prime Conjecture, and Hardy-Littlewood formulas into one universal law!",
            "funFact": "For twin primes, Bateman-Horn reproduces Hardy-Littlewood's twin prime constant C_2 ≈ 0.6601618!"
          },
          "investigators": {
            "tagline": "Heuristic derivation from the circle method and local factor densities.",
            "analogy": "The constant C(f_1, ..., f_k) = ∏_p (1 - ω(p)/p) / (1 - 1/p)^k where ω(p) is the number of solutions to f_1(n)...f_k(n) ≡ 0 (mod p).",
            "rules": [
              "Euler product constant: C = ∏_p (1 - ω(p)/p) / (1 - 1/p)^k.",
              "Logarithmic integral Li_k(x).",
              "Formalization of Euler products in Lean 4."
            ],
            "mystery": "Can the circle method or Selberg sieve confirm the non-vanishing of C and the asymptotic main term?",
            "funFact": "Paul T. Bateman and Roger A. Horn formulated this in 1962."
          },
          "pioneers": {
            "tagline": "Hardy-Littlewood circle method and minor arcs.",
            "analogy": "The conjecture corresponds to the expectation that the major arcs capture the entire asymptotic behavior while minor arcs cancel out.",
            "rules": [
              "Circle method Fourier decomposition.",
              "Exponential sums over prime values.",
              "Lean 4 Mathlib asymptotic expansions."
            ],
            "mystery": "AI-guided spectral estimation is testing minor arc cancellation bounds.",
            "funFact": "Bateman-Horn is considered the pinnacle of 20th-century heuristic analytic number theory."
          }
        },
        "history": [
          {
            "year": "1962",
            "author": "Bateman & Horn",
            "note": "Publish heuristic asymptotic formula for polynomial primes."
          },
          {
            "year": "2022",
            "author": "Modern Computations",
            "note": "High-precision integration confirms predictions up to 10^20."
          }
        ]
      },
      "ko": {
        "name": "Bateman-Horn Conjecture",
        "subtitle": "Quantitative Asymptotic Density for Systems of Polynomial Primes",
        "field": "Analytic Number Theory & Quantitative Density",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can we calculate the exact percentage of primes cooked by any polynomial recipe?",
            "analogy": "Bunyakovsky guessed polynomials produce infinitely many primes, but Bateman and Horn in 1962 went much further: they provided an EXACT formula predicting how many primes any set of polynomials will generate up to any limit x! It matches computer counts with jaw-dropping accuracy.",
            "rules": [
              "Bateman-Horn predicts: Q(x) ~ (C / (d_1 ... d_k)) ∫_2^x dt / (log t)^k.",
              "C is an infinite Euler product over all primes.",
              "Matches empirical data to 9 decimal places!"
            ],
            "mystery": "It generalizes the Prime Number Theorem, Twin Prime Conjecture, and Hardy-Littlewood formulas into one universal law!",
            "funFact": "For twin primes, Bateman-Horn reproduces Hardy-Littlewood's twin prime constant C_2 ≈ 0.6601618!"
          },
          "investigators": {
            "tagline": "Heuristic derivation from the circle method and local factor densities.",
            "analogy": "The constant C(f_1, ..., f_k) = ∏_p (1 - ω(p)/p) / (1 - 1/p)^k where ω(p) is the number of solutions to f_1(n)...f_k(n) ≡ 0 (mod p).",
            "rules": [
              "Euler product constant: C = ∏_p (1 - ω(p)/p) / (1 - 1/p)^k.",
              "Logarithmic integral Li_k(x).",
              "Formalization of Euler products in Lean 4."
            ],
            "mystery": "Can the circle method or Selberg sieve confirm the non-vanishing of C and the asymptotic main term?",
            "funFact": "Paul T. Bateman and Roger A. Horn formulated this in 1962."
          },
          "pioneers": {
            "tagline": "Hardy-Littlewood circle method and minor arcs.",
            "analogy": "The conjecture corresponds to the expectation that the major arcs capture the entire asymptotic behavior while minor arcs cancel out.",
            "rules": [
              "Circle method Fourier decomposition.",
              "Exponential sums over prime values.",
              "Lean 4 Mathlib asymptotic expansions."
            ],
            "mystery": "AI-guided spectral estimation is testing minor arc cancellation bounds.",
            "funFact": "Bateman-Horn is considered the pinnacle of 20th-century heuristic analytic number theory."
          }
        },
        "history": [
          {
            "year": "1962",
            "author": "Bateman & Horn",
            "note": "Publish heuristic asymptotic formula for polynomial primes."
          },
          {
            "year": "2022",
            "author": "Modern Computations",
            "note": "High-precision integration confirms predictions up to 10^20."
          }
        ]
      },
      "zh-Hans": {
        "name": "贝特曼-霍恩猜想",
        "subtitle": "多项式系统生成素数密度的定量渐近公式",
        "field": "解析数论 & 定量素数密度",
        "statusBadge": "未解之谜",
        "grades": {
          "explorers": {
            "tagline": "能不能给出一个极其精准的公式，预测任意多项式造出素数的精确频率？",
            "analogy": "布尼亚科夫斯基猜想只预测了多项式素数是无穷的，而保罗·贝特曼和罗杰·霍恩在1962年给出了一个精确得令人窒息的定量渐近公式，能直接预测直到 x 为止任意多项式到底能产生多少个素数！与计算机实际统计拟合得天衣无缝。",
            "rules": [
              "渐近公式：Q(x) ~ (C / (d_1 ... d_k)) ∫_2^x dt / (log t)^k。",
              "C 是遍历所有素数的无穷欧拉积常数。",
              "与现代超级计算机实测数据拟合精确到小数点后9位！"
            ],
            "mystery": "它将素数定理、孪生素数猜想与哈代-李特尔伍德公式统统归结为同一个普适数论定律！",
            "funFact": "对于孪生素数，贝特曼-霍恩公式自动导出了孪生素数常数 C_2 ≈ 0.6601618！"
          },
          "investigators": {
            "tagline": "基于哈代-李特尔伍德圆法与局部因子密度。",
            "analogy": "欧拉积常数精确由模 p 下的同余根个数 ω(p) 决定，完美反映了局域与整体的调和统一。",
            "rules": [
              "局域因子欧拉积常数。",
              "k 阶对数积分函数。",
              "Lean 4 Mathlib 中欧拉积收敛性形式化。"
            ],
            "mystery": "圆法或高阶筛法能否最终确认主部常数 C 的非退化性及渐近有效性？",
            "funFact": "保罗·贝特曼与罗杰·霍恩于1962年发表。"
          },
          "pioneers": {
            "tagline": "哈代-李特尔伍德圆法优弧与劣弧估计。",
            "analogy": "等价于圆法中主弧捕获了全部渐近增长，而劣弧积分发生剧烈的对消衰减。",
            "rules": [
              "圆法傅里叶积分展开。",
              "多项式素数值指数和估计。",
              "Lean 4 中的渐近主项定理。"
            ],
            "mystery": "AI 自动化系统正在验证劣弧抵消的指数界。",
            "funFact": "贝特曼-霍恩猜想被誉为20世纪解析数论统计力学思想的巅峰之作。"
          }
        },
        "history": [
          {
            "year": "1962",
            "author": "贝特曼 & 霍恩",
            "note": "发表多项式素数系统的统一渐近公式。"
          },
          {
            "year": "2022",
            "author": "现代计算团队",
            "note": "高精度数值积分验证至 10^20 高度吻合。"
          }
        ]
      },
      "zh-Hant": {
        "name": "Bateman-Horn Conjecture",
        "subtitle": "Quantitative Asymptotic Density for Systems of Polynomial Primes",
        "field": "Analytic Number Theory & Quantitative Density",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can we calculate the exact percentage of primes cooked by any polynomial recipe?",
            "analogy": "Bunyakovsky guessed polynomials produce infinitely many primes, but Bateman and Horn in 1962 went much further: they provided an EXACT formula predicting how many primes any set of polynomials will generate up to any limit x! It matches computer counts with jaw-dropping accuracy.",
            "rules": [
              "Bateman-Horn predicts: Q(x) ~ (C / (d_1 ... d_k)) ∫_2^x dt / (log t)^k.",
              "C is an infinite Euler product over all primes.",
              "Matches empirical data to 9 decimal places!"
            ],
            "mystery": "It generalizes the Prime Number Theorem, Twin Prime Conjecture, and Hardy-Littlewood formulas into one universal law!",
            "funFact": "For twin primes, Bateman-Horn reproduces Hardy-Littlewood's twin prime constant C_2 ≈ 0.6601618!"
          },
          "investigators": {
            "tagline": "Heuristic derivation from the circle method and local factor densities.",
            "analogy": "The constant C(f_1, ..., f_k) = ∏_p (1 - ω(p)/p) / (1 - 1/p)^k where ω(p) is the number of solutions to f_1(n)...f_k(n) ≡ 0 (mod p).",
            "rules": [
              "Euler product constant: C = ∏_p (1 - ω(p)/p) / (1 - 1/p)^k.",
              "Logarithmic integral Li_k(x).",
              "Formalization of Euler products in Lean 4."
            ],
            "mystery": "Can the circle method or Selberg sieve confirm the non-vanishing of C and the asymptotic main term?",
            "funFact": "Paul T. Bateman and Roger A. Horn formulated this in 1962."
          },
          "pioneers": {
            "tagline": "Hardy-Littlewood circle method and minor arcs.",
            "analogy": "The conjecture corresponds to the expectation that the major arcs capture the entire asymptotic behavior while minor arcs cancel out.",
            "rules": [
              "Circle method Fourier decomposition.",
              "Exponential sums over prime values.",
              "Lean 4 Mathlib asymptotic expansions."
            ],
            "mystery": "AI-guided spectral estimation is testing minor arc cancellation bounds.",
            "funFact": "Bateman-Horn is considered the pinnacle of 20th-century heuristic analytic number theory."
          }
        },
        "history": [
          {
            "year": "1962",
            "author": "Bateman & Horn",
            "note": "Publish heuristic asymptotic formula for polynomial primes."
          },
          {
            "year": "2022",
            "author": "Modern Computations",
            "note": "High-precision integration confirms predictions up to 10^20."
          }
        ]
      }
    }
  },
  {
    "id": "littlewood",
    "icon": "📐",
    "difficulty": "Gr 9+",
    "domain": "number-theory",
    "category": "number-theory",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Data.Real.Basic\ndef LittlewoodConjecture : Prop := sorry",
    "locales": {
      "en": {
        "name": "Littlewood's Conjecture",
        "subtitle": "Simultaneous Approximation: liminf n ||nα|| ||nβ|| = 0",
        "field": "Diophantine Approximation & Ergodic Theory",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can two irrational numbers always be simultaneously hugged by clean fractions?",
            "analogy": "Pick any two real numbers α and β (like √2 and π). Can you multiply them by an integer n such that BOTH nα and nβ land simultaneously ultra-close to whole numbers? John Edensor Littlewood conjectured around 1930 that n ||nα|| ||nβ|| can get arbitrarily close to 0!",
            "rules": [
              "Choose any real numbers α, β.",
              "||x|| is the distance from x to the nearest integer.",
              "Question: Does liminf n ||nα|| ||nβ|| = 0 for ALL α, β?"
            ],
            "mystery": "Einsiedler, Katok, and Lindenstrauss won the Fields Medal (Lindenstrauss, 2010) partly for proving that any exceptions must lie on a set of Hausdorff dimension ZERO!",
            "funFact": "If α and β are rational, the product hits exactly 0 instantly!"
          },
          "investigators": {
            "tagline": "Homogeneous dynamics and diagonal action on SL(3, ℝ)/SL(3, ℤ).",
            "analogy": "Margulis and Furstenberg connected Littlewood's conjecture to the classification of invariant measures under higher-rank diagonal flows on the lattice space SL(3, ℝ)/SL(3, ℤ).",
            "rules": [
              "Diagonal flow A on SL(3, ℝ)/SL(3, ℤ).",
              "Measure rigidity: Einsiedler-Katok-Lindenstrauss (2006).",
              "Exceptional set has Hausdorff dimension 0."
            ],
            "mystery": "Can we eliminate the measure-zero set of potential counterexamples entirely?",
            "funFact": "J. E. Littlewood formulated the conjecture around 1930 at Cambridge."
          },
          "pioneers": {
            "tagline": "Entropy of multi-parameter actions and quantum unique ergodicity.",
            "analogy": "Positive leafwise entropy forces the measure to be Haar, leaving zero room for non-trivial Littlewood counterexamples.",
            "rules": [
              "Leafwise measures and entropy.",
              "Haar measure on homogeneous spaces.",
              "Mathlib formalization of metric dynamics."
            ],
            "mystery": "AI symbolic dynamics tools are simulating multidimensional continued fraction flows.",
            "funFact": "Littlewood's conjecture is the holy grail of modern Diophantine approximation and ergodic rigidity."
          }
        },
        "history": [
          {
            "year": "1930",
            "author": "J. E. Littlewood",
            "note": "Poses the simultaneous approximation problem."
          },
          {
            "year": "2006",
            "author": "Einsiedler, Katok & Lindenstrauss",
            "note": "Prove exceptional set has Hausdorff dimension zero using measure rigidity."
          },
          {
            "year": "2010",
            "author": "Elon Lindenstrauss",
            "note": "Awarded Fields Medal for ergodic theory in number theory."
          }
        ]
      },
      "de": {
        "name": "Littlewood's Conjecture",
        "subtitle": "Simultaneous Approximation: liminf n ||nα|| ||nβ|| = 0",
        "field": "Diophantine Approximation & Ergodic Theory",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can two irrational numbers always be simultaneously hugged by clean fractions?",
            "analogy": "Pick any two real numbers α and β (like √2 and π). Can you multiply them by an integer n such that BOTH nα and nβ land simultaneously ultra-close to whole numbers? John Edensor Littlewood conjectured around 1930 that n ||nα|| ||nβ|| can get arbitrarily close to 0!",
            "rules": [
              "Choose any real numbers α, β.",
              "||x|| is the distance from x to the nearest integer.",
              "Question: Does liminf n ||nα|| ||nβ|| = 0 for ALL α, β?"
            ],
            "mystery": "Einsiedler, Katok, and Lindenstrauss won the Fields Medal (Lindenstrauss, 2010) partly for proving that any exceptions must lie on a set of Hausdorff dimension ZERO!",
            "funFact": "If α and β are rational, the product hits exactly 0 instantly!"
          },
          "investigators": {
            "tagline": "Homogeneous dynamics and diagonal action on SL(3, ℝ)/SL(3, ℤ).",
            "analogy": "Margulis and Furstenberg connected Littlewood's conjecture to the classification of invariant measures under higher-rank diagonal flows on the lattice space SL(3, ℝ)/SL(3, ℤ).",
            "rules": [
              "Diagonal flow A on SL(3, ℝ)/SL(3, ℤ).",
              "Measure rigidity: Einsiedler-Katok-Lindenstrauss (2006).",
              "Exceptional set has Hausdorff dimension 0."
            ],
            "mystery": "Can we eliminate the measure-zero set of potential counterexamples entirely?",
            "funFact": "J. E. Littlewood formulated the conjecture around 1930 at Cambridge."
          },
          "pioneers": {
            "tagline": "Entropy of multi-parameter actions and quantum unique ergodicity.",
            "analogy": "Positive leafwise entropy forces the measure to be Haar, leaving zero room for non-trivial Littlewood counterexamples.",
            "rules": [
              "Leafwise measures and entropy.",
              "Haar measure on homogeneous spaces.",
              "Mathlib formalization of metric dynamics."
            ],
            "mystery": "AI symbolic dynamics tools are simulating multidimensional continued fraction flows.",
            "funFact": "Littlewood's conjecture is the holy grail of modern Diophantine approximation and ergodic rigidity."
          }
        },
        "history": [
          {
            "year": "1930",
            "author": "J. E. Littlewood",
            "note": "Poses the simultaneous approximation problem."
          },
          {
            "year": "2006",
            "author": "Einsiedler, Katok & Lindenstrauss",
            "note": "Prove exceptional set has Hausdorff dimension zero using measure rigidity."
          },
          {
            "year": "2010",
            "author": "Elon Lindenstrauss",
            "note": "Awarded Fields Medal for ergodic theory in number theory."
          }
        ]
      },
      "fr": {
        "name": "Littlewood's Conjecture",
        "subtitle": "Simultaneous Approximation: liminf n ||nα|| ||nβ|| = 0",
        "field": "Diophantine Approximation & Ergodic Theory",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can two irrational numbers always be simultaneously hugged by clean fractions?",
            "analogy": "Pick any two real numbers α and β (like √2 and π). Can you multiply them by an integer n such that BOTH nα and nβ land simultaneously ultra-close to whole numbers? John Edensor Littlewood conjectured around 1930 that n ||nα|| ||nβ|| can get arbitrarily close to 0!",
            "rules": [
              "Choose any real numbers α, β.",
              "||x|| is the distance from x to the nearest integer.",
              "Question: Does liminf n ||nα|| ||nβ|| = 0 for ALL α, β?"
            ],
            "mystery": "Einsiedler, Katok, and Lindenstrauss won the Fields Medal (Lindenstrauss, 2010) partly for proving that any exceptions must lie on a set of Hausdorff dimension ZERO!",
            "funFact": "If α and β are rational, the product hits exactly 0 instantly!"
          },
          "investigators": {
            "tagline": "Homogeneous dynamics and diagonal action on SL(3, ℝ)/SL(3, ℤ).",
            "analogy": "Margulis and Furstenberg connected Littlewood's conjecture to the classification of invariant measures under higher-rank diagonal flows on the lattice space SL(3, ℝ)/SL(3, ℤ).",
            "rules": [
              "Diagonal flow A on SL(3, ℝ)/SL(3, ℤ).",
              "Measure rigidity: Einsiedler-Katok-Lindenstrauss (2006).",
              "Exceptional set has Hausdorff dimension 0."
            ],
            "mystery": "Can we eliminate the measure-zero set of potential counterexamples entirely?",
            "funFact": "J. E. Littlewood formulated the conjecture around 1930 at Cambridge."
          },
          "pioneers": {
            "tagline": "Entropy of multi-parameter actions and quantum unique ergodicity.",
            "analogy": "Positive leafwise entropy forces the measure to be Haar, leaving zero room for non-trivial Littlewood counterexamples.",
            "rules": [
              "Leafwise measures and entropy.",
              "Haar measure on homogeneous spaces.",
              "Mathlib formalization of metric dynamics."
            ],
            "mystery": "AI symbolic dynamics tools are simulating multidimensional continued fraction flows.",
            "funFact": "Littlewood's conjecture is the holy grail of modern Diophantine approximation and ergodic rigidity."
          }
        },
        "history": [
          {
            "year": "1930",
            "author": "J. E. Littlewood",
            "note": "Poses the simultaneous approximation problem."
          },
          {
            "year": "2006",
            "author": "Einsiedler, Katok & Lindenstrauss",
            "note": "Prove exceptional set has Hausdorff dimension zero using measure rigidity."
          },
          {
            "year": "2010",
            "author": "Elon Lindenstrauss",
            "note": "Awarded Fields Medal for ergodic theory in number theory."
          }
        ]
      },
      "it": {
        "name": "Littlewood's Conjecture",
        "subtitle": "Simultaneous Approximation: liminf n ||nα|| ||nβ|| = 0",
        "field": "Diophantine Approximation & Ergodic Theory",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can two irrational numbers always be simultaneously hugged by clean fractions?",
            "analogy": "Pick any two real numbers α and β (like √2 and π). Can you multiply them by an integer n such that BOTH nα and nβ land simultaneously ultra-close to whole numbers? John Edensor Littlewood conjectured around 1930 that n ||nα|| ||nβ|| can get arbitrarily close to 0!",
            "rules": [
              "Choose any real numbers α, β.",
              "||x|| is the distance from x to the nearest integer.",
              "Question: Does liminf n ||nα|| ||nβ|| = 0 for ALL α, β?"
            ],
            "mystery": "Einsiedler, Katok, and Lindenstrauss won the Fields Medal (Lindenstrauss, 2010) partly for proving that any exceptions must lie on a set of Hausdorff dimension ZERO!",
            "funFact": "If α and β are rational, the product hits exactly 0 instantly!"
          },
          "investigators": {
            "tagline": "Homogeneous dynamics and diagonal action on SL(3, ℝ)/SL(3, ℤ).",
            "analogy": "Margulis and Furstenberg connected Littlewood's conjecture to the classification of invariant measures under higher-rank diagonal flows on the lattice space SL(3, ℝ)/SL(3, ℤ).",
            "rules": [
              "Diagonal flow A on SL(3, ℝ)/SL(3, ℤ).",
              "Measure rigidity: Einsiedler-Katok-Lindenstrauss (2006).",
              "Exceptional set has Hausdorff dimension 0."
            ],
            "mystery": "Can we eliminate the measure-zero set of potential counterexamples entirely?",
            "funFact": "J. E. Littlewood formulated the conjecture around 1930 at Cambridge."
          },
          "pioneers": {
            "tagline": "Entropy of multi-parameter actions and quantum unique ergodicity.",
            "analogy": "Positive leafwise entropy forces the measure to be Haar, leaving zero room for non-trivial Littlewood counterexamples.",
            "rules": [
              "Leafwise measures and entropy.",
              "Haar measure on homogeneous spaces.",
              "Mathlib formalization of metric dynamics."
            ],
            "mystery": "AI symbolic dynamics tools are simulating multidimensional continued fraction flows.",
            "funFact": "Littlewood's conjecture is the holy grail of modern Diophantine approximation and ergodic rigidity."
          }
        },
        "history": [
          {
            "year": "1930",
            "author": "J. E. Littlewood",
            "note": "Poses the simultaneous approximation problem."
          },
          {
            "year": "2006",
            "author": "Einsiedler, Katok & Lindenstrauss",
            "note": "Prove exceptional set has Hausdorff dimension zero using measure rigidity."
          },
          {
            "year": "2010",
            "author": "Elon Lindenstrauss",
            "note": "Awarded Fields Medal for ergodic theory in number theory."
          }
        ]
      },
      "ja": {
        "name": "Littlewood's Conjecture",
        "subtitle": "Simultaneous Approximation: liminf n ||nα|| ||nβ|| = 0",
        "field": "Diophantine Approximation & Ergodic Theory",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can two irrational numbers always be simultaneously hugged by clean fractions?",
            "analogy": "Pick any two real numbers α and β (like √2 and π). Can you multiply them by an integer n such that BOTH nα and nβ land simultaneously ultra-close to whole numbers? John Edensor Littlewood conjectured around 1930 that n ||nα|| ||nβ|| can get arbitrarily close to 0!",
            "rules": [
              "Choose any real numbers α, β.",
              "||x|| is the distance from x to the nearest integer.",
              "Question: Does liminf n ||nα|| ||nβ|| = 0 for ALL α, β?"
            ],
            "mystery": "Einsiedler, Katok, and Lindenstrauss won the Fields Medal (Lindenstrauss, 2010) partly for proving that any exceptions must lie on a set of Hausdorff dimension ZERO!",
            "funFact": "If α and β are rational, the product hits exactly 0 instantly!"
          },
          "investigators": {
            "tagline": "Homogeneous dynamics and diagonal action on SL(3, ℝ)/SL(3, ℤ).",
            "analogy": "Margulis and Furstenberg connected Littlewood's conjecture to the classification of invariant measures under higher-rank diagonal flows on the lattice space SL(3, ℝ)/SL(3, ℤ).",
            "rules": [
              "Diagonal flow A on SL(3, ℝ)/SL(3, ℤ).",
              "Measure rigidity: Einsiedler-Katok-Lindenstrauss (2006).",
              "Exceptional set has Hausdorff dimension 0."
            ],
            "mystery": "Can we eliminate the measure-zero set of potential counterexamples entirely?",
            "funFact": "J. E. Littlewood formulated the conjecture around 1930 at Cambridge."
          },
          "pioneers": {
            "tagline": "Entropy of multi-parameter actions and quantum unique ergodicity.",
            "analogy": "Positive leafwise entropy forces the measure to be Haar, leaving zero room for non-trivial Littlewood counterexamples.",
            "rules": [
              "Leafwise measures and entropy.",
              "Haar measure on homogeneous spaces.",
              "Mathlib formalization of metric dynamics."
            ],
            "mystery": "AI symbolic dynamics tools are simulating multidimensional continued fraction flows.",
            "funFact": "Littlewood's conjecture is the holy grail of modern Diophantine approximation and ergodic rigidity."
          }
        },
        "history": [
          {
            "year": "1930",
            "author": "J. E. Littlewood",
            "note": "Poses the simultaneous approximation problem."
          },
          {
            "year": "2006",
            "author": "Einsiedler, Katok & Lindenstrauss",
            "note": "Prove exceptional set has Hausdorff dimension zero using measure rigidity."
          },
          {
            "year": "2010",
            "author": "Elon Lindenstrauss",
            "note": "Awarded Fields Medal for ergodic theory in number theory."
          }
        ]
      },
      "ko": {
        "name": "Littlewood's Conjecture",
        "subtitle": "Simultaneous Approximation: liminf n ||nα|| ||nβ|| = 0",
        "field": "Diophantine Approximation & Ergodic Theory",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can two irrational numbers always be simultaneously hugged by clean fractions?",
            "analogy": "Pick any two real numbers α and β (like √2 and π). Can you multiply them by an integer n such that BOTH nα and nβ land simultaneously ultra-close to whole numbers? John Edensor Littlewood conjectured around 1930 that n ||nα|| ||nβ|| can get arbitrarily close to 0!",
            "rules": [
              "Choose any real numbers α, β.",
              "||x|| is the distance from x to the nearest integer.",
              "Question: Does liminf n ||nα|| ||nβ|| = 0 for ALL α, β?"
            ],
            "mystery": "Einsiedler, Katok, and Lindenstrauss won the Fields Medal (Lindenstrauss, 2010) partly for proving that any exceptions must lie on a set of Hausdorff dimension ZERO!",
            "funFact": "If α and β are rational, the product hits exactly 0 instantly!"
          },
          "investigators": {
            "tagline": "Homogeneous dynamics and diagonal action on SL(3, ℝ)/SL(3, ℤ).",
            "analogy": "Margulis and Furstenberg connected Littlewood's conjecture to the classification of invariant measures under higher-rank diagonal flows on the lattice space SL(3, ℝ)/SL(3, ℤ).",
            "rules": [
              "Diagonal flow A on SL(3, ℝ)/SL(3, ℤ).",
              "Measure rigidity: Einsiedler-Katok-Lindenstrauss (2006).",
              "Exceptional set has Hausdorff dimension 0."
            ],
            "mystery": "Can we eliminate the measure-zero set of potential counterexamples entirely?",
            "funFact": "J. E. Littlewood formulated the conjecture around 1930 at Cambridge."
          },
          "pioneers": {
            "tagline": "Entropy of multi-parameter actions and quantum unique ergodicity.",
            "analogy": "Positive leafwise entropy forces the measure to be Haar, leaving zero room for non-trivial Littlewood counterexamples.",
            "rules": [
              "Leafwise measures and entropy.",
              "Haar measure on homogeneous spaces.",
              "Mathlib formalization of metric dynamics."
            ],
            "mystery": "AI symbolic dynamics tools are simulating multidimensional continued fraction flows.",
            "funFact": "Littlewood's conjecture is the holy grail of modern Diophantine approximation and ergodic rigidity."
          }
        },
        "history": [
          {
            "year": "1930",
            "author": "J. E. Littlewood",
            "note": "Poses the simultaneous approximation problem."
          },
          {
            "year": "2006",
            "author": "Einsiedler, Katok & Lindenstrauss",
            "note": "Prove exceptional set has Hausdorff dimension zero using measure rigidity."
          },
          {
            "year": "2010",
            "author": "Elon Lindenstrauss",
            "note": "Awarded Fields Medal for ergodic theory in number theory."
          }
        ]
      },
      "zh-Hans": {
        "name": "利特尔伍德丢番图逼近猜想",
        "subtitle": "联立丢番图逼近极限 $\\liminf_{n \\to \\infty} n \\|n\\alpha\\| \\|n\\beta\\| = 0$",
        "field": "丢番图逼近 & 遍历理论",
        "statusBadge": "未解之谜",
        "grades": {
          "explorers": {
            "tagline": "两个无限不循环的无理数，能不能同时被一个整数步长紧紧拥抱？",
            "analogy": "取任意两个实数 α 和 β（如 √2 和 π）。乘以一个正整数 n 之后，它们与最近整数的距离分别为 ||nα|| 和 ||nβ||。英国数学家利特尔伍德约在1930年猜想：乘积 n · ||nα|| · ||nβ|| 的极限下界必定永远能逼近至 0！",
            "rules": [
              "选取任意实数对 α, β。",
              "||x|| 代表 x 距离最近整数的微小距离。",
              "核心问题：乘积 n ||nα|| ||nβ|| 的下极限是否对所有实数恒等于 0？"
            ],
            "mystery": "埃因西德勒、卡托克与林登施特劳斯证明：哪怕有反例，所有反例构成的集合在空间中的豪斯多夫维数也必须严格为 0（林登施特劳斯因此荣获2010年菲尔兹奖）！",
            "funFact": "若 α 或 β 中有任何一个是有理数，乘积在某一步就会直接变成精确的 0！"
          },
          "investigators": {
            "tagline": "齐次动力系统与代数环面上的对角作用。",
            "analogy": "马尔古利斯与弗斯滕伯格将利特尔伍德猜想与格空间 SL(3, ℝ)/SL(3, ℤ) 上高阶对角流的不变测度刚性分类紧密结合。",
            "rules": [
              "SL(3, ℝ)/SL(3, ℤ) 上的全纯对角流动作。",
              "EKL 定理 (2006)：高阶环面遍历测度刚性。",
              "反例集合的测度与拓扑维数恒为零。"
            ],
            "mystery": "能否彻底消灭测度为零的潜在反例集，宣布没有任何例外？",
            "funFact": "J. E. 利特尔伍德于1930年前后在剑桥大学提出。"
          },
          "pioneers": {
            "tagline": "多参数群作用的测度熵理论与量子唯一遍历性。",
            "analogy": "正叶状熵迫使不变量测度必须是齐次的哈尔测度。",
            "rules": [
              "叶状测度与柯尔莫哥洛夫-西奈熵。",
              "齐次空间哈尔测度唯一性。",
              "Lean 4 度量动力系统形式化。"
            ],
            "mystery": "AI 正在模拟多维连分数算法在对角流空间中的闭轨道分布。",
            "funFact": "利特尔伍德猜想是当代丢番图逼近与遍历刚性理论公认的圣杯。"
          }
        },
        "history": [
          {
            "year": "1930",
            "author": "利特尔伍德",
            "note": "在剑桥大学提出联立逼近极限猜想。"
          },
          {
            "year": "2006",
            "author": "埃因西德勒、卡托克 & 林登施特劳斯",
            "note": "利用测度刚性定理证明反例集豪斯多夫维数为零。"
          },
          {
            "year": "2010",
            "author": "埃隆·林登施特劳斯",
            "note": "因遍历理论在数论中的突破性应用荣获菲尔兹奖。"
          }
        ]
      },
      "zh-Hant": {
        "name": "Littlewood's Conjecture",
        "subtitle": "Simultaneous Approximation: liminf n ||nα|| ||nβ|| = 0",
        "field": "Diophantine Approximation & Ergodic Theory",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "Can two irrational numbers always be simultaneously hugged by clean fractions?",
            "analogy": "Pick any two real numbers α and β (like √2 and π). Can you multiply them by an integer n such that BOTH nα and nβ land simultaneously ultra-close to whole numbers? John Edensor Littlewood conjectured around 1930 that n ||nα|| ||nβ|| can get arbitrarily close to 0!",
            "rules": [
              "Choose any real numbers α, β.",
              "||x|| is the distance from x to the nearest integer.",
              "Question: Does liminf n ||nα|| ||nβ|| = 0 for ALL α, β?"
            ],
            "mystery": "Einsiedler, Katok, and Lindenstrauss won the Fields Medal (Lindenstrauss, 2010) partly for proving that any exceptions must lie on a set of Hausdorff dimension ZERO!",
            "funFact": "If α and β are rational, the product hits exactly 0 instantly!"
          },
          "investigators": {
            "tagline": "Homogeneous dynamics and diagonal action on SL(3, ℝ)/SL(3, ℤ).",
            "analogy": "Margulis and Furstenberg connected Littlewood's conjecture to the classification of invariant measures under higher-rank diagonal flows on the lattice space SL(3, ℝ)/SL(3, ℤ).",
            "rules": [
              "Diagonal flow A on SL(3, ℝ)/SL(3, ℤ).",
              "Measure rigidity: Einsiedler-Katok-Lindenstrauss (2006).",
              "Exceptional set has Hausdorff dimension 0."
            ],
            "mystery": "Can we eliminate the measure-zero set of potential counterexamples entirely?",
            "funFact": "J. E. Littlewood formulated the conjecture around 1930 at Cambridge."
          },
          "pioneers": {
            "tagline": "Entropy of multi-parameter actions and quantum unique ergodicity.",
            "analogy": "Positive leafwise entropy forces the measure to be Haar, leaving zero room for non-trivial Littlewood counterexamples.",
            "rules": [
              "Leafwise measures and entropy.",
              "Haar measure on homogeneous spaces.",
              "Mathlib formalization of metric dynamics."
            ],
            "mystery": "AI symbolic dynamics tools are simulating multidimensional continued fraction flows.",
            "funFact": "Littlewood's conjecture is the holy grail of modern Diophantine approximation and ergodic rigidity."
          }
        },
        "history": [
          {
            "year": "1930",
            "author": "J. E. Littlewood",
            "note": "Poses the simultaneous approximation problem."
          },
          {
            "year": "2006",
            "author": "Einsiedler, Katok & Lindenstrauss",
            "note": "Prove exceptional set has Hausdorff dimension zero using measure rigidity."
          },
          {
            "year": "2010",
            "author": "Elon Lindenstrauss",
            "note": "Awarded Fields Medal for ergodic theory in number theory."
          }
        ]
      }
    }
  },
  {
    "id": "schanuel",
    "icon": "🌿",
    "difficulty": "Gr 9+",
    "domain": "number-theory",
    "category": "number-theory",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Data.Complex.Basic\ndef SchanuelConjecture : Prop := sorry",
    "locales": {
      "en": {
        "name": "Schanuel's Conjecture",
        "subtitle": "Transcendence Degree of Numbers and Their Exponentials",
        "field": "Transcendental Number Theory & Model Theory",
        "statusBadge": "GRAND UNIFIER",
        "grades": {
          "explorers": {
            "tagline": "Are e and π completely independent alien numbers?",
            "analogy": "We know e and π are both transcendental (not roots of any polynomial). But are e + π or e · π transcendental? Nobody knows! Stephen Schanuel in the 1960s conjectured a master principle for exponentials that immediately proves e and π are algebraically independent, and solves almost every famous transcendence problem at once!",
            "rules": [
              "Pick linearly independent complex numbers z_1, ..., z_n.",
              "Consider 2n numbers: z_1, ..., z_n, e^{z_1}, ..., e^{z_n}.",
              "Schanuel: Their transcendence degree over ℚ is at least n!",
              "Implies e and π can never satisfy any non-trivial polynomial relation together!"
            ],
            "mystery": "If Schanuel is true, it immediately implies Lindemann-Weierstrass theorem, Baker's theorem, and that e^e, π^π, and e + π are all transcendental!",
            "funFact": "Boris Zilber proved in 2004 that the complex exponential field ℂ_exp satisfies Schanuel if and only if it is quasi-minimal (model theory)!"
          },
          "investigators": {
            "tagline": "Differential counterpart: Ax-Schanuel Theorem (proved by James Ax in 1971).",
            "analogy": "The differential version holds unconditionally: if y_i' = y_i x_i', the transcendence degree is at least n + 1 unless linear relation holds.",
            "rules": [
              "Ax-Schanuel Theorem (1971) proved for differential fields.",
              "Model theory: Zilber's pseudo-exponential fields.",
              "Transcendence degree tr.deg_ℚ ≥ n."
            ],
            "mystery": "Can o-minimality and Pila-Wilkie counting theorems bridge Ax-Schanuel from differential fields to arithmetic complex numbers?",
            "funFact": "Stephen Schanuel proposed this conjecture in a 1960s seminar at Columbia University."
          },
          "pioneers": {
            "tagline": "O-minimality and the André-Oort conjecture.",
            "analogy": "Jonathan Pila used o-minimality and Ax-Schanuel to resolve cases of the André-Oort conjecture on Shimura varieties.",
            "rules": [
              "Ax-Schanuel for Shimura varieties.",
              "Pila-Wilkie counting theorem.",
              "Lean 4 Mathlib transcendental numbers."
            ],
            "mystery": "AI formalization is actively mapping the model-theoretic o-minimality infrastructure in Lean 4.",
            "funFact": "Schanuel's conjecture stands as the grand unified cathedral of all transcendental mathematics."
          }
        },
        "history": [
          {
            "year": "1960s",
            "author": "Stephen Schanuel",
            "note": "Formulates the exponential transcendence degree conjecture."
          },
          {
            "year": "1971",
            "author": "James Ax",
            "note": "Proves the differential algebra analog (Ax-Schanuel Theorem)."
          },
          {
            "year": "2004",
            "author": "Boris Zilber",
            "note": "Constructs pseudo-exponential fields using model theory."
          },
          {
            "year": "2011",
            "author": "Jonathan Pila",
            "note": "Applies Ax-Schanuel and o-minimality to André-Oort conjecture."
          }
        ]
      },
      "de": {
        "name": "Schanuel's Conjecture",
        "subtitle": "Transcendence Degree of Numbers and Their Exponentials",
        "field": "Transcendental Number Theory & Model Theory",
        "statusBadge": "GRAND UNIFIER",
        "grades": {
          "explorers": {
            "tagline": "Are e and π completely independent alien numbers?",
            "analogy": "We know e and π are both transcendental (not roots of any polynomial). But are e + π or e · π transcendental? Nobody knows! Stephen Schanuel in the 1960s conjectured a master principle for exponentials that immediately proves e and π are algebraically independent, and solves almost every famous transcendence problem at once!",
            "rules": [
              "Pick linearly independent complex numbers z_1, ..., z_n.",
              "Consider 2n numbers: z_1, ..., z_n, e^{z_1}, ..., e^{z_n}.",
              "Schanuel: Their transcendence degree over ℚ is at least n!",
              "Implies e and π can never satisfy any non-trivial polynomial relation together!"
            ],
            "mystery": "If Schanuel is true, it immediately implies Lindemann-Weierstrass theorem, Baker's theorem, and that e^e, π^π, and e + π are all transcendental!",
            "funFact": "Boris Zilber proved in 2004 that the complex exponential field ℂ_exp satisfies Schanuel if and only if it is quasi-minimal (model theory)!"
          },
          "investigators": {
            "tagline": "Differential counterpart: Ax-Schanuel Theorem (proved by James Ax in 1971).",
            "analogy": "The differential version holds unconditionally: if y_i' = y_i x_i', the transcendence degree is at least n + 1 unless linear relation holds.",
            "rules": [
              "Ax-Schanuel Theorem (1971) proved for differential fields.",
              "Model theory: Zilber's pseudo-exponential fields.",
              "Transcendence degree tr.deg_ℚ ≥ n."
            ],
            "mystery": "Can o-minimality and Pila-Wilkie counting theorems bridge Ax-Schanuel from differential fields to arithmetic complex numbers?",
            "funFact": "Stephen Schanuel proposed this conjecture in a 1960s seminar at Columbia University."
          },
          "pioneers": {
            "tagline": "O-minimality and the André-Oort conjecture.",
            "analogy": "Jonathan Pila used o-minimality and Ax-Schanuel to resolve cases of the André-Oort conjecture on Shimura varieties.",
            "rules": [
              "Ax-Schanuel for Shimura varieties.",
              "Pila-Wilkie counting theorem.",
              "Lean 4 Mathlib transcendental numbers."
            ],
            "mystery": "AI formalization is actively mapping the model-theoretic o-minimality infrastructure in Lean 4.",
            "funFact": "Schanuel's conjecture stands as the grand unified cathedral of all transcendental mathematics."
          }
        },
        "history": [
          {
            "year": "1960s",
            "author": "Stephen Schanuel",
            "note": "Formulates the exponential transcendence degree conjecture."
          },
          {
            "year": "1971",
            "author": "James Ax",
            "note": "Proves the differential algebra analog (Ax-Schanuel Theorem)."
          },
          {
            "year": "2004",
            "author": "Boris Zilber",
            "note": "Constructs pseudo-exponential fields using model theory."
          },
          {
            "year": "2011",
            "author": "Jonathan Pila",
            "note": "Applies Ax-Schanuel and o-minimality to André-Oort conjecture."
          }
        ]
      },
      "fr": {
        "name": "Schanuel's Conjecture",
        "subtitle": "Transcendence Degree of Numbers and Their Exponentials",
        "field": "Transcendental Number Theory & Model Theory",
        "statusBadge": "GRAND UNIFIER",
        "grades": {
          "explorers": {
            "tagline": "Are e and π completely independent alien numbers?",
            "analogy": "We know e and π are both transcendental (not roots of any polynomial). But are e + π or e · π transcendental? Nobody knows! Stephen Schanuel in the 1960s conjectured a master principle for exponentials that immediately proves e and π are algebraically independent, and solves almost every famous transcendence problem at once!",
            "rules": [
              "Pick linearly independent complex numbers z_1, ..., z_n.",
              "Consider 2n numbers: z_1, ..., z_n, e^{z_1}, ..., e^{z_n}.",
              "Schanuel: Their transcendence degree over ℚ is at least n!",
              "Implies e and π can never satisfy any non-trivial polynomial relation together!"
            ],
            "mystery": "If Schanuel is true, it immediately implies Lindemann-Weierstrass theorem, Baker's theorem, and that e^e, π^π, and e + π are all transcendental!",
            "funFact": "Boris Zilber proved in 2004 that the complex exponential field ℂ_exp satisfies Schanuel if and only if it is quasi-minimal (model theory)!"
          },
          "investigators": {
            "tagline": "Differential counterpart: Ax-Schanuel Theorem (proved by James Ax in 1971).",
            "analogy": "The differential version holds unconditionally: if y_i' = y_i x_i', the transcendence degree is at least n + 1 unless linear relation holds.",
            "rules": [
              "Ax-Schanuel Theorem (1971) proved for differential fields.",
              "Model theory: Zilber's pseudo-exponential fields.",
              "Transcendence degree tr.deg_ℚ ≥ n."
            ],
            "mystery": "Can o-minimality and Pila-Wilkie counting theorems bridge Ax-Schanuel from differential fields to arithmetic complex numbers?",
            "funFact": "Stephen Schanuel proposed this conjecture in a 1960s seminar at Columbia University."
          },
          "pioneers": {
            "tagline": "O-minimality and the André-Oort conjecture.",
            "analogy": "Jonathan Pila used o-minimality and Ax-Schanuel to resolve cases of the André-Oort conjecture on Shimura varieties.",
            "rules": [
              "Ax-Schanuel for Shimura varieties.",
              "Pila-Wilkie counting theorem.",
              "Lean 4 Mathlib transcendental numbers."
            ],
            "mystery": "AI formalization is actively mapping the model-theoretic o-minimality infrastructure in Lean 4.",
            "funFact": "Schanuel's conjecture stands as the grand unified cathedral of all transcendental mathematics."
          }
        },
        "history": [
          {
            "year": "1960s",
            "author": "Stephen Schanuel",
            "note": "Formulates the exponential transcendence degree conjecture."
          },
          {
            "year": "1971",
            "author": "James Ax",
            "note": "Proves the differential algebra analog (Ax-Schanuel Theorem)."
          },
          {
            "year": "2004",
            "author": "Boris Zilber",
            "note": "Constructs pseudo-exponential fields using model theory."
          },
          {
            "year": "2011",
            "author": "Jonathan Pila",
            "note": "Applies Ax-Schanuel and o-minimality to André-Oort conjecture."
          }
        ]
      },
      "it": {
        "name": "Schanuel's Conjecture",
        "subtitle": "Transcendence Degree of Numbers and Their Exponentials",
        "field": "Transcendental Number Theory & Model Theory",
        "statusBadge": "GRAND UNIFIER",
        "grades": {
          "explorers": {
            "tagline": "Are e and π completely independent alien numbers?",
            "analogy": "We know e and π are both transcendental (not roots of any polynomial). But are e + π or e · π transcendental? Nobody knows! Stephen Schanuel in the 1960s conjectured a master principle for exponentials that immediately proves e and π are algebraically independent, and solves almost every famous transcendence problem at once!",
            "rules": [
              "Pick linearly independent complex numbers z_1, ..., z_n.",
              "Consider 2n numbers: z_1, ..., z_n, e^{z_1}, ..., e^{z_n}.",
              "Schanuel: Their transcendence degree over ℚ is at least n!",
              "Implies e and π can never satisfy any non-trivial polynomial relation together!"
            ],
            "mystery": "If Schanuel is true, it immediately implies Lindemann-Weierstrass theorem, Baker's theorem, and that e^e, π^π, and e + π are all transcendental!",
            "funFact": "Boris Zilber proved in 2004 that the complex exponential field ℂ_exp satisfies Schanuel if and only if it is quasi-minimal (model theory)!"
          },
          "investigators": {
            "tagline": "Differential counterpart: Ax-Schanuel Theorem (proved by James Ax in 1971).",
            "analogy": "The differential version holds unconditionally: if y_i' = y_i x_i', the transcendence degree is at least n + 1 unless linear relation holds.",
            "rules": [
              "Ax-Schanuel Theorem (1971) proved for differential fields.",
              "Model theory: Zilber's pseudo-exponential fields.",
              "Transcendence degree tr.deg_ℚ ≥ n."
            ],
            "mystery": "Can o-minimality and Pila-Wilkie counting theorems bridge Ax-Schanuel from differential fields to arithmetic complex numbers?",
            "funFact": "Stephen Schanuel proposed this conjecture in a 1960s seminar at Columbia University."
          },
          "pioneers": {
            "tagline": "O-minimality and the André-Oort conjecture.",
            "analogy": "Jonathan Pila used o-minimality and Ax-Schanuel to resolve cases of the André-Oort conjecture on Shimura varieties.",
            "rules": [
              "Ax-Schanuel for Shimura varieties.",
              "Pila-Wilkie counting theorem.",
              "Lean 4 Mathlib transcendental numbers."
            ],
            "mystery": "AI formalization is actively mapping the model-theoretic o-minimality infrastructure in Lean 4.",
            "funFact": "Schanuel's conjecture stands as the grand unified cathedral of all transcendental mathematics."
          }
        },
        "history": [
          {
            "year": "1960s",
            "author": "Stephen Schanuel",
            "note": "Formulates the exponential transcendence degree conjecture."
          },
          {
            "year": "1971",
            "author": "James Ax",
            "note": "Proves the differential algebra analog (Ax-Schanuel Theorem)."
          },
          {
            "year": "2004",
            "author": "Boris Zilber",
            "note": "Constructs pseudo-exponential fields using model theory."
          },
          {
            "year": "2011",
            "author": "Jonathan Pila",
            "note": "Applies Ax-Schanuel and o-minimality to André-Oort conjecture."
          }
        ]
      },
      "ja": {
        "name": "Schanuel's Conjecture",
        "subtitle": "Transcendence Degree of Numbers and Their Exponentials",
        "field": "Transcendental Number Theory & Model Theory",
        "statusBadge": "GRAND UNIFIER",
        "grades": {
          "explorers": {
            "tagline": "Are e and π completely independent alien numbers?",
            "analogy": "We know e and π are both transcendental (not roots of any polynomial). But are e + π or e · π transcendental? Nobody knows! Stephen Schanuel in the 1960s conjectured a master principle for exponentials that immediately proves e and π are algebraically independent, and solves almost every famous transcendence problem at once!",
            "rules": [
              "Pick linearly independent complex numbers z_1, ..., z_n.",
              "Consider 2n numbers: z_1, ..., z_n, e^{z_1}, ..., e^{z_n}.",
              "Schanuel: Their transcendence degree over ℚ is at least n!",
              "Implies e and π can never satisfy any non-trivial polynomial relation together!"
            ],
            "mystery": "If Schanuel is true, it immediately implies Lindemann-Weierstrass theorem, Baker's theorem, and that e^e, π^π, and e + π are all transcendental!",
            "funFact": "Boris Zilber proved in 2004 that the complex exponential field ℂ_exp satisfies Schanuel if and only if it is quasi-minimal (model theory)!"
          },
          "investigators": {
            "tagline": "Differential counterpart: Ax-Schanuel Theorem (proved by James Ax in 1971).",
            "analogy": "The differential version holds unconditionally: if y_i' = y_i x_i', the transcendence degree is at least n + 1 unless linear relation holds.",
            "rules": [
              "Ax-Schanuel Theorem (1971) proved for differential fields.",
              "Model theory: Zilber's pseudo-exponential fields.",
              "Transcendence degree tr.deg_ℚ ≥ n."
            ],
            "mystery": "Can o-minimality and Pila-Wilkie counting theorems bridge Ax-Schanuel from differential fields to arithmetic complex numbers?",
            "funFact": "Stephen Schanuel proposed this conjecture in a 1960s seminar at Columbia University."
          },
          "pioneers": {
            "tagline": "O-minimality and the André-Oort conjecture.",
            "analogy": "Jonathan Pila used o-minimality and Ax-Schanuel to resolve cases of the André-Oort conjecture on Shimura varieties.",
            "rules": [
              "Ax-Schanuel for Shimura varieties.",
              "Pila-Wilkie counting theorem.",
              "Lean 4 Mathlib transcendental numbers."
            ],
            "mystery": "AI formalization is actively mapping the model-theoretic o-minimality infrastructure in Lean 4.",
            "funFact": "Schanuel's conjecture stands as the grand unified cathedral of all transcendental mathematics."
          }
        },
        "history": [
          {
            "year": "1960s",
            "author": "Stephen Schanuel",
            "note": "Formulates the exponential transcendence degree conjecture."
          },
          {
            "year": "1971",
            "author": "James Ax",
            "note": "Proves the differential algebra analog (Ax-Schanuel Theorem)."
          },
          {
            "year": "2004",
            "author": "Boris Zilber",
            "note": "Constructs pseudo-exponential fields using model theory."
          },
          {
            "year": "2011",
            "author": "Jonathan Pila",
            "note": "Applies Ax-Schanuel and o-minimality to André-Oort conjecture."
          }
        ]
      },
      "ko": {
        "name": "Schanuel's Conjecture",
        "subtitle": "Transcendence Degree of Numbers and Their Exponentials",
        "field": "Transcendental Number Theory & Model Theory",
        "statusBadge": "GRAND UNIFIER",
        "grades": {
          "explorers": {
            "tagline": "Are e and π completely independent alien numbers?",
            "analogy": "We know e and π are both transcendental (not roots of any polynomial). But are e + π or e · π transcendental? Nobody knows! Stephen Schanuel in the 1960s conjectured a master principle for exponentials that immediately proves e and π are algebraically independent, and solves almost every famous transcendence problem at once!",
            "rules": [
              "Pick linearly independent complex numbers z_1, ..., z_n.",
              "Consider 2n numbers: z_1, ..., z_n, e^{z_1}, ..., e^{z_n}.",
              "Schanuel: Their transcendence degree over ℚ is at least n!",
              "Implies e and π can never satisfy any non-trivial polynomial relation together!"
            ],
            "mystery": "If Schanuel is true, it immediately implies Lindemann-Weierstrass theorem, Baker's theorem, and that e^e, π^π, and e + π are all transcendental!",
            "funFact": "Boris Zilber proved in 2004 that the complex exponential field ℂ_exp satisfies Schanuel if and only if it is quasi-minimal (model theory)!"
          },
          "investigators": {
            "tagline": "Differential counterpart: Ax-Schanuel Theorem (proved by James Ax in 1971).",
            "analogy": "The differential version holds unconditionally: if y_i' = y_i x_i', the transcendence degree is at least n + 1 unless linear relation holds.",
            "rules": [
              "Ax-Schanuel Theorem (1971) proved for differential fields.",
              "Model theory: Zilber's pseudo-exponential fields.",
              "Transcendence degree tr.deg_ℚ ≥ n."
            ],
            "mystery": "Can o-minimality and Pila-Wilkie counting theorems bridge Ax-Schanuel from differential fields to arithmetic complex numbers?",
            "funFact": "Stephen Schanuel proposed this conjecture in a 1960s seminar at Columbia University."
          },
          "pioneers": {
            "tagline": "O-minimality and the André-Oort conjecture.",
            "analogy": "Jonathan Pila used o-minimality and Ax-Schanuel to resolve cases of the André-Oort conjecture on Shimura varieties.",
            "rules": [
              "Ax-Schanuel for Shimura varieties.",
              "Pila-Wilkie counting theorem.",
              "Lean 4 Mathlib transcendental numbers."
            ],
            "mystery": "AI formalization is actively mapping the model-theoretic o-minimality infrastructure in Lean 4.",
            "funFact": "Schanuel's conjecture stands as the grand unified cathedral of all transcendental mathematics."
          }
        },
        "history": [
          {
            "year": "1960s",
            "author": "Stephen Schanuel",
            "note": "Formulates the exponential transcendence degree conjecture."
          },
          {
            "year": "1971",
            "author": "James Ax",
            "note": "Proves the differential algebra analog (Ax-Schanuel Theorem)."
          },
          {
            "year": "2004",
            "author": "Boris Zilber",
            "note": "Constructs pseudo-exponential fields using model theory."
          },
          {
            "year": "2011",
            "author": "Jonathan Pila",
            "note": "Applies Ax-Schanuel and o-minimality to André-Oort conjecture."
          }
        ]
      },
      "zh-Hans": {
        "name": "沙努尔猜想",
        "subtitle": "复数及其指数函数的超越次数下界",
        "field": "超越数论 & 算术模型论",
        "statusBadge": "超越数论大一统大厦",
        "grades": {
          "explorers": {
            "tagline": "大名鼎鼎的 e 和 π，在深邃的代数宇宙中是否互为完全独立的异星造物？",
            "analogy": "我们早已知道自然常数 e 和圆周率 π 都是超越数（无法作为代数方程的根）。但 e + π 或者 e · π 是不是超越数？至今人类无人知晓！斯蒂芬·沙努尔于1960年代提出了关于复数指数映射的终极猜想，一旦证实，立刻推导出 e 与 π 代数独立，一举解决数论中几乎所有的超越性遗留难题！",
            "rules": [
              "选取在有理数域上线性无关的复数 z_1, ..., z_n。",
              "考察共 2n 个数：z_1, ..., z_n 以及它们的指数值 e^{z_1}, ..., e^{z_n}。",
              "沙努尔断言：它们在 ℚ 上的超越次数至少为 n！",
              "直接推出 e 与 π 之间绝不可能满足任何代数关联！"
            ],
            "mystery": "若沙努尔猜想成立，林德曼-魏尔斯特拉斯定理、贝克定理，以及 e^e、π^π、e+π 的超越性将如同秋风扫落叶般瞬间获证！",
            "funFact": "鲍里斯·齐尔伯于2004年运用数理逻辑模型论证明：复指数域满足拟极小性的充要条件就是沙努尔猜想成立！"
          },
          "investigators": {
            "tagline": "微分代数情形：詹姆斯·阿克斯于1971年完全证明了阿克斯-沙努尔定理。",
            "analogy": "在微分代数闭域中该定理完全成立，为解决复数域版本提供了光辉的灯塔。",
            "rules": [
              "阿克斯-沙努尔微分数论定理 (1971) 获完全证明。",
              "齐尔伯伪指数域与准极小性模型论。",
              "超越次数下界 tr.deg_ℚ ≥ n。"
            ],
            "mystery": "o-极小结构与皮拉-威尔基点数定理能否将阿克斯-沙努尔定理从微分数域成功跨越至纯复数算术？",
            "funFact": "斯蒂芬·沙努尔于1960年代在哥伦比亚大学讨论班提出。"
          },
          "pioneers": {
            "tagline": "o-极小性理论与安德烈-奥尔特猜想。",
            "analogy": "乔纳森·皮拉将 o-极小性与阿克斯-沙努尔定理结合，成功征服了志村簇上的安德烈-奥尔特猜想并荣获克拉福德奖。",
            "rules": [
              "志村簇上的阿克斯-沙努尔定理。",
              "皮拉-威尔基代数点计数定理。",
              "Lean 4 Mathlib 中超越数与超越扩张。"
            ],
            "mystery": "AI 形式化团队正在推进 Lean 4 内部 o-极小结构与代数几何交叉基础的构建。",
            "funFact": "沙努尔猜想被全人类数学界奉为超越数论的终极大一统主大教堂。"
          }
        },
        "history": [
          {
            "year": "1960s",
            "author": "斯蒂芬·沙努尔",
            "note": "在哥伦比亚大学提出超越次数下界猜想。"
          },
          {
            "year": "1971",
            "author": "詹姆斯·阿克斯",
            "note": "完全证明微分代数情形下的阿克斯-沙努尔定理。"
          },
          {
            "year": "2004",
            "author": "鲍里斯·齐尔伯",
            "note": "利用数理逻辑模型论构建拟指数域理论。"
          },
          {
            "year": "2011",
            "author": "乔纳森·皮拉",
            "note": "运用相关理论攻克安德烈-奥尔特猜想。"
          }
        ]
      },
      "zh-Hant": {
        "name": "Schanuel's Conjecture",
        "subtitle": "Transcendence Degree of Numbers and Their Exponentials",
        "field": "Transcendental Number Theory & Model Theory",
        "statusBadge": "GRAND UNIFIER",
        "grades": {
          "explorers": {
            "tagline": "Are e and π completely independent alien numbers?",
            "analogy": "We know e and π are both transcendental (not roots of any polynomial). But are e + π or e · π transcendental? Nobody knows! Stephen Schanuel in the 1960s conjectured a master principle for exponentials that immediately proves e and π are algebraically independent, and solves almost every famous transcendence problem at once!",
            "rules": [
              "Pick linearly independent complex numbers z_1, ..., z_n.",
              "Consider 2n numbers: z_1, ..., z_n, e^{z_1}, ..., e^{z_n}.",
              "Schanuel: Their transcendence degree over ℚ is at least n!",
              "Implies e and π can never satisfy any non-trivial polynomial relation together!"
            ],
            "mystery": "If Schanuel is true, it immediately implies Lindemann-Weierstrass theorem, Baker's theorem, and that e^e, π^π, and e + π are all transcendental!",
            "funFact": "Boris Zilber proved in 2004 that the complex exponential field ℂ_exp satisfies Schanuel if and only if it is quasi-minimal (model theory)!"
          },
          "investigators": {
            "tagline": "Differential counterpart: Ax-Schanuel Theorem (proved by James Ax in 1971).",
            "analogy": "The differential version holds unconditionally: if y_i' = y_i x_i', the transcendence degree is at least n + 1 unless linear relation holds.",
            "rules": [
              "Ax-Schanuel Theorem (1971) proved for differential fields.",
              "Model theory: Zilber's pseudo-exponential fields.",
              "Transcendence degree tr.deg_ℚ ≥ n."
            ],
            "mystery": "Can o-minimality and Pila-Wilkie counting theorems bridge Ax-Schanuel from differential fields to arithmetic complex numbers?",
            "funFact": "Stephen Schanuel proposed this conjecture in a 1960s seminar at Columbia University."
          },
          "pioneers": {
            "tagline": "O-minimality and the André-Oort conjecture.",
            "analogy": "Jonathan Pila used o-minimality and Ax-Schanuel to resolve cases of the André-Oort conjecture on Shimura varieties.",
            "rules": [
              "Ax-Schanuel for Shimura varieties.",
              "Pila-Wilkie counting theorem.",
              "Lean 4 Mathlib transcendental numbers."
            ],
            "mystery": "AI formalization is actively mapping the model-theoretic o-minimality infrastructure in Lean 4.",
            "funFact": "Schanuel's conjecture stands as the grand unified cathedral of all transcendental mathematics."
          }
        },
        "history": [
          {
            "year": "1960s",
            "author": "Stephen Schanuel",
            "note": "Formulates the exponential transcendence degree conjecture."
          },
          {
            "year": "1971",
            "author": "James Ax",
            "note": "Proves the differential algebra analog (Ax-Schanuel Theorem)."
          },
          {
            "year": "2004",
            "author": "Boris Zilber",
            "note": "Constructs pseudo-exponential fields using model theory."
          },
          {
            "year": "2011",
            "author": "Jonathan Pila",
            "note": "Applies Ax-Schanuel and o-minimality to André-Oort conjecture."
          }
        ]
      }
    }
  }
];
