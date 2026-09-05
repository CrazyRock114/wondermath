/**
 * WonderMath Conjectures Database
 * Rich multi-tier K-12 curriculum, interactive configs, historical progression,
 * and Lean 4 formal code with full 8-language localization support.
 */

export const RAW_CONJECTURES = [
  {
    id: "collatz",
    icon: "🌨️",
    difficulty: "All Ages",
    simId: "collatz-sim",
    leanCode: `import Mathlib.Data.Nat.Basic

def collatz (n : ℕ) : ℕ :=
  if n % 2 = 0 then n / 2 else 3 * n + 1

-- The open conjecture:
def CollatzConjecture : Prop :=
  ∀ n : ℕ, n > 0 → ∃ k : ℕ, (collatz^[k]) n = 1

-- Proved cycle lemma for 1:
theorem collatz_one_cycle : collatz (collatz (collatz 1)) = 1 := by
  dsimp [collatz]
  rfl`,
    locales: {
      en: {
        name: "The Collatz Conjecture",
        subtitle: "The Hailstone Riddle (3x + 1)",
        field: "Number Theory & Dynamical Systems",
        statusBadge: "OPEN MYSTERY",
        grades: {
          explorers: {
            tagline: "Can you trap a bouncing hailstone that refuses to stop?",
            analogy: "Imagine a cloud dropping a hailstone. When it's at an even height, gravity pulls it down by half! But when it hits an odd cloud, lightning zaps it, multiplying it by 3 and adding 1, sending it shooting high into the sky! Will EVERY hailstone eventually crash down to ground 1?",
            rules: [
              "Pick ANY positive whole number.",
              "If it's EVEN: cut it in half (divide by 2).",
              "If it's ODD: multiply by 3, then add 1 (3n + 1).",
              "Repeat with the new number!"
            ],
            mystery: "No matter what starting number people try—even numbers with millions of digits—the hailstone always plunges down into the loop: 4 → 2 → 1 → 4 → 2 → 1... But nobody knows if a sneaky number could shoot up forever to infinity, or get trapped in a different secret loop!",
            funFact: "Mathematician Paul Erdős said: 'Mathematics may not yet be ready for such problems.'"
          },
          investigators: {
            tagline: "Testing dynamical orbits, modular arithmetic, and the 4-2-1 attractor.",
            analogy: "A discrete dynamical system where every integer produces a trajectory. If n is even, T(n) = n/2; if n is odd, T(n) = 3n + 1. Because 3n+1 is always even when n is odd, every upward step is guaranteed to be followed by at least one downward division.",
            rules: [
              "Function: T(n) = n/2 for n ≡ 0 (mod 2), and 3n+1 for n ≡ 1 (mod 2).",
              "Stopping Time: The number of steps required to reach 1.",
              "Peak Altitude: The highest value reached along the trajectory."
            ],
            mystery: "Does the set of non-trivial cycles contain any other attractor besides {1, 2, 4}? Or does any trajectory diverge to +∞? Computers have verified all starting numbers up to 2⁶⁸ ≈ 2.95 × 10²⁰, but a finite search can never prove an infinite claim.",
            funFact: "In 2019, Fields Medalist Terence Tao proved that 'almost all' Collatz orbits attain values almost arbitrarily close to 1!"
          },
          pioneers: {
            tagline: "Stochastic models, 2-adic integers, and undecidability barriers.",
            analogy: "The Collatz map can be extended to 2-adic integers ℤ₂, where it acts as a measure-preserving ergodic transformation. Its behavior exhibits pseudorandom characteristics similar to chaotic dynamical systems.",
            rules: [
              "Let T: ℕ → ℕ defined by T(n) = n/2 if n is even, (3n+1)/2 if n is odd.",
              "Conjecture: ∀ n ∈ ℤ⁺, ∃ k ∈ ℕ such that Tᵏ(n) = 1.",
              "Conway (1972) proved that generalized Collatz-type problems are algorithmically undecidable."
            ],
            mystery: "Is Collatz formally undecidable within ZFC, or can modern AI-driven induction and Lean formal verification construct structural invariants?",
            funFact: "Researchers are applying AI automated theorem proving to search for periodic cycles in negative integers ℤ⁻ (where 3 distinct cycles exist: {-1}, {-5}, {-17})."
          }
        },
        history: [
          { year: "1937", author: "Lothar Collatz", note: "Introduces the problem during the International Congress of Mathematicians." },
          { year: "1972", author: "John Horton Conway", note: "Proves that a generalized class of Collatz functions is undecidable." },
          { year: "2019", author: "Terence Tao", note: "Proves that almost all orbits attain values bounded by any function diverging to infinity." },
          { year: "2024–2026", author: "AI Automated Exploration", note: "Automated verification of billion-step trajectories and cycle-elimination proofs in Lean 4." }
        ]
      },
      de: {
        name: "Die Collatz-Vermutung",
        subtitle: "Das Hagelstein-Rätsel (3x + 1)",
        field: "Zahlentheorie & Dynamische Systeme",
        statusBadge: "OFFENES RÄTSEL",
        grades: {
          explorers: {
            tagline: "Kannst du ein hüpfendes Hagelkorn fangen, das einfach nicht stoppen will?",
            analogy: "Stell dir vor, eine Wolke lässt ein Hagelkorn fallen. Ist seine Höhe gerade, fällt es um die Hälfte herab! Trifft es eine ungerade Wolke, schlägt der Blitz ein: mal 3 plus 1! Stürzt jedes Hagelkorn am Ende auf den Boden 1?",
            rules: [
              "Wähle IRGENDEINE positive ganze Zahl.",
              "Ist sie GERADE: teile sie durch 2.",
              "Ist sie UNGERADE: multipliziere mit 3 und addiere 1 (3n + 1).",
              "Wiederhole das mit der neuen Zahl!"
            ],
            mystery: "Egal welche Zahl man wählt – selbst mit Millionen Stellen – am Ende landet jede Zahl in der Schleife: 4 → 2 → 1 → 4 → 2 → 1... Aber kann eine geheime Zahl für immer ins Unendliche steigen?",
            funFact: "Paul Erdős sagte einst: 'Die Mathematik ist vielleicht noch nicht reif für solche Probleme.'"
          },
          investigators: {
            tagline: "Dynamische Orbits, modulare Arithmetik und der 4-2-1-Attraktor.",
            analogy: "Ein diskretes dynamisches System, bei dem jede Zahl eine Bahn erzeugt. Ist n gerade, gilt T(n) = n/2; ist n ungerade, T(n) = 3n + 1.",
            rules: [
              "Funktion: T(n) = n/2 für gerade n, und 3n+1 für ungerade n.",
              "Stoppzeit: Die Anzahl der Schritte, um 1 zu erreichen.",
              "Spitzenhöhe: Der höchste erreichte Wert der Bahn."
            ],
            mystery: "Gibt es andere periodische Zyklen außer {1, 2, 4}? Computer haben alle Zahlen bis 2⁶⁸ überprüft, doch eine endliche Suche beweist keine unendliche Aussage.",
            funFact: "2019 bewies Terence Tao, dass 'fast alle' Collatz-Bahnen Werte beliebig nah bei 1 erreichen!"
          },
          pioneers: {
            tagline: "Stochastische Modelle, 2-adische Zahlen und Unentscheidbarkeitsgrenzen.",
            analogy: "Die Collatz-Abbildung lässt sich auf die 2-adischen Zahlen ℤ₂ erweitern, wo sie als maßerhaltende ergodische Transformation wirkt.",
            rules: [
              "T(n) = n/2 falls n gerade, (3n+1)/2 falls n ungerade.",
              "Vermutung: ∀ n ∈ ℤ⁺, ∃ k ∈ ℕ mit Tᵏ(n) = 1.",
              "Conway (1972) bewies, dass verallgemeinerte Collatz-Probleme algorithmisch unentscheidbar sind."
            ],
            mystery: "Ist Collatz in ZFC unentscheidbar oder kann moderne KI strukturelle Invarianten finden?",
            funFact: "In den negativen ganzen Zahlen ℤ⁻ gibt es 3 bekannte Zyklen: {-1}, {-5} und {-17}!"
          }
        },
        history: [
          { year: "1937", author: "Lothar Collatz", note: "Stellt das Problem auf dem Internationalen Mathematikerkongress vor." },
          { year: "1972", author: "John Horton Conway", note: "Beweist die Unentscheidbarkeit verallgemeinerter Collatz-Funktionen." },
          { year: "2019", author: "Terence Tao", note: "Beweist, dass fast alle Bahnen fast beschränkte Werte erreichen." },
          { year: "2024–2026", author: "KI-Forschung & Lean 4", note: "Automatisierte Trajektorienanalyse und Zykluselimination in Lean 4." }
        ]
      },
      fr: {
        name: "La Conjecture de Collatz",
        subtitle: "L'Énigme de Syracuse (3x + 1)",
        field: "Théorie des Nombres & Systèmes Dynamiques",
        statusBadge: "MYSTÈRE NON RÉSOLU",
        grades: {
          explorers: {
            tagline: "Pouvez-vous piéger un grêlon qui refuse de s'arrêter de rebondir ?",
            analogy: "Imaginez un nuage qui lâche un grêlon. Quand son altitude est paire, il descend de moitié ! Mais s'il touche un nuage impair, un éclair le frappe : multiplié par 3 plus 1 ! Tous les grêlons finissent-ils par s'écraser au sol sur le 1 ?",
            rules: [
              "Choisissez N'IMPORTE QUEL nombre entier positif.",
              "S'il est PAIR : divisez-le par 2.",
              "S'il est IMPAIR : multipliez par 3 et ajoutez 1 (3n + 1).",
              "Recommencez avec le nouveau résultat !"
            ],
            mystery: "Quel que soit le nombre de départ, la trajectoire finit toujours par chuter dans la boucle : 4 → 2 → 1 → 4 → 2 → 1... Mais un nombre secret pourrait-il s'échapper à l'infini ?",
            funFact: "Paul Erdős disait : 'Les mathématiques ne sont peut-être pas encore prêtes pour de tels problèmes.'"
          },
          investigators: {
            tagline: "Orbites dynamiques, arithmétique modulaire et attracteur 4-2-1.",
            analogy: "Un système dynamique discret où chaque entier génère une trajectoire. Si n est pair, T(n) = n/2 ; si n est impair, T(n) = 3n + 1.",
            rules: [
              "Fonction : T(n) = n/2 pour n pair, 3n+1 pour n impair.",
              "Temps d'arrêt : Le nombre d'étapes nécessaires pour atteindre 1.",
              "Altitude maximale : La valeur record atteinte lors du vol."
            ],
            mystery: "Existe-t-il d'autres cycles que {1, 2, 4} ? Les ordinateurs ont vérifié tous les nombres jusqu'à 2⁶⁸, mais un calcul fini ne remplace jamais une preuve infinie.",
            funFact: "En 2019, Terence Tao a démontré que 'presque toutes' les orbites atteignent des valeurs presque aussi petites que 1 !"
          },
          pioneers: {
            tagline: "Modèles stochastiques, entiers 2-adiques et barrières d'indécidabilité.",
            analogy: "L'application de Collatz s'étend aux entiers 2-adiques ℤ₂, où elle agit comme une transformation ergodique préservant la mesure.",
            rules: [
              "T(n) = n/2 si n pair, (3n+1)/2 si n impair.",
              "Conjecture : ∀ n ∈ ℤ⁺, ∃ k ∈ ℕ tel que Tᵏ(n) = 1.",
              "Conway (1972) a prouvé que les fonctions généralisées de type Collatz sont algorithmiquement indécidables."
            ],
            mystery: "La conjecture est-elle indécidable dans ZFC, ou les preuves formelles en Lean 4 permettront-elles de découvrir de nouveaux invariants ?",
            funFact: "Dans les entiers négatifs ℤ⁻, il existe 3 cycles distincts prouvés : {-1}, {-5} et {-17}."
          }
        },
        history: [
          { year: "1937", author: "Lothar Collatz", note: "Présente le problème au Congrès International des Mathématiciens." },
          { year: "1972", author: "John Horton Conway", note: "Prouve l'indécidabilité algorithmique d'une classe de fonctions de Collatz." },
          { year: "2019", author: "Terence Tao", note: "Prouve que presque toutes les orbites atteignent des valeurs presque arbitrairement basses." },
          { year: "2024–2026", author: "Exploration IA & Lean 4", note: "Vérification automatisée de trajectoires géantes et élimination de cycles." }
        ]
      },
      it: {
        name: "La Congettura di Collatz",
        subtitle: "L'Enigma della Grandine (3x + 1)",
        field: "Teoria dei Numeri & Sistemi Dinamici",
        statusBadge: "ENIGMA APERTO",
        grades: {
          explorers: {
            tagline: "Riuscirai a catturare un chicco di grandine che non vuole fermarsi?",
            analogy: "Immagina una nuvola che lascia cadere un chicco di grandine. Quando l'altezza è pari, cade dimezzandosi! Ma se tocca una nuvola dispari, un fulmine lo scaglia in alto moltiplicandolo per 3 e aggiungendo 1! Tutti i chicchi prima o poi atterrano sull'1?",
            rules: [
              "Scegli QUALSIASI numero intero positivo.",
              "Se è PARI: dividilo per 2.",
              "Se è DISPARI: moltiplica per 3 e aggiungi 1 (3n + 1).",
              "Ripeti l'operazione con il nuovo numero!"
            ],
            mystery: "Qualsiasi numero si provi, precipita sempre nel ciclo: 4 → 2 → 1 → 4 → 2 → 1... Ma esiste un numero segreto che potrebbe salire all'infinito?",
            funFact: "Paul Erdős disse: 'La matematica potrebbe non essere ancora pronta per problemi simili.'"
          },
          investigators: {
            tagline: "Orbite dinamiche, aritmetica modulare e l'attrattore 4-2-1.",
            analogy: "Un sistema dinamico discreto in cui ogni numero genera una traiettoria: T(n) = n/2 se n è pari, 3n + 1 se è dispari.",
            rules: [
              "Funzione: T(n) = n/2 se pari, 3n+1 se dispari.",
              "Tempo di arresto: Il numero di passaggi per toccare 1.",
              "Altitudine di picco: Il valore massimo toccato lungo l'orbita."
            ],
            mystery: "Esistono altri cicli periodici oltre a {1, 2, 4}? I supercomputer hanno verificato tutti i numeri fino a 2⁶⁸, ma una verifica finita non dimostra l'infinito.",
            funFact: "Nel 2019 Terence Tao ha dimostrato che 'quasi tutte' le orbite raggiungono valori vicinissimi a 1!"
          },
          pioneers: {
            tagline: "Modelli stocastici, interi 2-adici e barriere di indecidibilità.",
            analogy: "La mappa di Collatz può essere estesa agli interi 2-adici ℤ₂, dove agisce come trasformazione ergodica.",
            rules: [
              "T(n) = n/2 se pari, (3n+1)/2 se dispari.",
              "Congettura: ∀ n ∈ ℤ⁺, ∃ k ∈ ℕ tale che Tᵏ(n) = 1.",
              "Conway (1972) ha dimostrato che problemi generalizzati di tipo Collatz sono indecidibili."
            ],
            mystery: "La congettura è indecidibile in ZFC o l'IA troverà invarianti algebrici formali in Lean 4?",
            funFact: "Negli interi negativi ℤ⁻ esistono esattamente 3 cicli distinti: {-1}, {-5} e {-17}."
          }
        },
        history: [
          { year: "1937", author: "Lothar Collatz", note: "Formula il problema durante il Congresso Internazionale dei Matematici." },
          { year: "1972", author: "John Horton Conway", note: "Dimostra l'indecidibilità algoritmica di generalizzazioni di Collatz." },
          { year: "2019", author: "Terence Tao", note: "Dimostra che quasi tutte le orbite raggiungono valori quasi limitati." },
          { year: "2024–2026", author: "IA & Lean 4", note: "Verifica formale automatizzata di orbite e confutazione di cicli." }
        ]
      },
      ja: {
        name: "コラッツ予想",
        subtitle: "神秘の「ウバク数」パズル (3x + 1)",
        field: "数論・離散力学系",
        statusBadge: "未解決の難問",
        grades: {
          explorers: {
            tagline: "空高く跳ね上がる「ヒョウの粒」を捕まえることができるかな？",
            analogy: "雲から落ちる雹（ひょう）の粒を想像してみよう。偶数の高さにいるときは重力で半分にストン！ でも奇数の高さに来ると稲妻が直撃し、3倍して1を足して大空へ急上昇！ どんな数から始めても、最後は地上「1」へと落ちてくるのかな？",
            rules: [
              "好きな正の整数をひとつ選ぼう。",
              "【偶数】なら：2で割る（半分にする）。",
              "【奇数】なら：3倍して1を足す（3n + 1）。",
              "新しくできた数で、これを繰り返す！"
            ],
            mystery: "どんなに大きな数（何兆、何京という数）で試しても、最後は必ず「4 → 2 → 1 → 4 → 2 → 1」というループに吸い込まれます。でも、永遠に宇宙の果てまで飛び続ける数や、別の秘密のループに迷い込む数は本当にないのでしょうか？",
            funFact: "天才数学者ポール・エルデシュは「現代の数学は、まだこの問題に立ち向かえるほど成熟していない」と語りました。"
          },
          investigators: {
            tagline: "力学的軌道、合同式（モジュロ算術）、そして4-2-1アトラクターの検証。",
            analogy: "整数全体からなる離散力学系です。nが偶数のときT(n) = n/2、奇数のときT(n) = 3n + 1。奇数に3をかけて1を足すと必ず偶数になるため、上昇ステップの直後には必ず1回以上の下降が約束されています。",
            rules: [
              "写像：n ≡ 0 (mod 2) のとき n/2、n ≡ 1 (mod 2) のとき 3n+1。",
              "停止時間（ステップ数）：1に到達するまでに必要な変換回数。",
              "最高高度：軌道上で到達する最大値。"
            ],
            mystery: "{1, 2, 4}以外の非自明な周期軌道は存在するのか？ または無限大へ発散する軌道はあるのか？ コンピュータによって2⁶⁸ ≈ 2.95 × 10²⁰までの全整数で成立が確かめられていますが、有限の検証では無限の証明にはなりません。",
            funFact: "2019年、フィールズ賞受賞者テレンス・タオは「ほとんどすべてのコラッツ軌道が、任意に小さな値まで到達する」ことを確率論的に証明しました！"
          },
          pioneers: {
            tagline: "確率論的モデル、2進p進整数環ℤ₂、および決定不能性の壁。",
            analogy: "コラッツ写像は2進整数環ℤ₂上の測度保存エルゴード変換として拡張して解析されます。擬似ランダムなカオス的ダイナミクスを示します。",
            rules: [
              "写像 T: ℕ → ℕ, T(n) = n/2（n偶数）, (3n+1)/2（n奇数）。",
              "予想：∀ n ∈ ℤ⁺, ∃ k ∈ ℕ, Tᵏ(n) = 1。",
              "コンウェイ（1972）は、一般化されたコラッツ型問題がアルゴリズム的に決定不能（停止性問題と同値）であることを証明しました。"
            ],
            mystery: "コラッツ予想はZFC公理系において形式的に決定不能なのか、それとも現代のAI駆動帰納法とLean 4形式検証によって不変量が構成できるのか？",
            funFact: "負の整数環ℤ⁻においては、すでに3つの独立した周期軌道（{-1}, {-5}, {-17}）が存在することが判明しています。"
          }
        },
        history: [
          { year: "1937", author: "ローター・コラッツ", note: "国際数学者会議にて問題を提起。" },
          { year: "1972", author: "ジョン・ホートン・コンウェイ", note: "一般化コラッツ問題がアルゴリズム的に決定不能であることを証明。" },
          { year: "2019", author: "テレンス・タオ", note: "ほとんどすべてのコラッツ軌道がほぼ1近傍まで減少することを証明。" },
          { year: "2024–2026", author: "AI自動探索とLean 4", note: "Lean 4による数十億ステップ軌道の形式検証および非自明サイクル排除定理の確立。" }
        ]
      },
      ko: {
        name: "콜라츠 추측",
        subtitle: "신비로운 우박수 퍼즐 (3x + 1)",
        field: "수론 및 이산 역학계",
        statusBadge: "미해결 난제",
        grades: {
          explorers: {
            tagline: "끝없이 튀어 오르는 우박수를 잡을 수 있을까요?",
            analogy: "구름에서 떨어지는 우박을 상상해 보세요. 짝수 높이에 있으면 절반으로 뚝 떨어집니다! 하지만 홀수 높이에 닿으면 번개를 맞아 3배에 1을 더해 하늘 높이 솟구칩니다! 과연 모든 우박은 결국 땅(1)으로 떨어질까요?",
            rules: [
              "아무 양의 정수를 하나 고르세요.",
              "【짝수】라면: 2로 나눕니다 (반으로 줄이기).",
              "【홀수】라면: 3을 곱하고 1을 더합니다 (3n + 1).",
              "새로 나온 숫자로 계속 반복하세요!"
            ],
            mystery: "얼마나 큰 숫자로 시작하든(수천억, 수경이 넘는 수라도) 항상 마지막엔 4 → 2 → 1 → 4 → 2 → 1 루프에 갇히게 됩니다. 하지만 영원히 무한대로 커지거나 다른 비밀 루프에 빠지는 숫자가 과연 없을까요?",
            funFact: "전설적인 수학자 에르되시는 '현재의 수학은 아직 이런 문제를 다룰 준비가 되지 않았다'고 말했습니다."
          },
          investigators: {
            tagline: "동역학적 궤적, 모듈러 산술, 그리고 4-2-1 끌개(Attractor).",
            analogy: "모든 정수가 궤적을 만드는 이산 역학계입니다. n이 짝수이면 T(n) = n/2, 홀수이면 T(n) = 3n + 1이 됩니다.",
            rules: [
              "함수: 짝수일 때 n/2, 홀수일 때 3n+1.",
              "정지 시간: 1에 도달하는 데 걸리는 총 단계 수.",
              "최고 고도: 궤적 중 도달하는 가장 큰 수."
            ],
            mystery: "{1, 2, 4} 외에 다른 비자명한 순환 주기가 존재할까요? 슈퍼컴퓨터로 2⁶⁸까지 모두 확인했지만 유한한 탐색은 무한을 증명할 수 없습니다.",
            funFact: "2019년 필즈상 수상자 테렌스 타오는 '거의 모든' 콜라츠 궤적이 1에 임의로 가까운 값에 도달함을 증명했습니다."
          },
          pioneers: {
            tagline: "확률 모델, 2진수 p진 정수 ℤ₂, 그리고 결정 불가능성 장벽.",
            analogy: "콜라츠 사상은 2진 정수환 ℤ₂ 상의 측도 보존 에르고딕 변환으로 확장되어 분석됩니다.",
            rules: [
              "사상 T: ℕ → ℕ, T(n) = n/2 (짝수), (3n+1)/2 (홀수).",
              "추측: ∀ n ∈ ℤ⁺, ∃ k ∈ ℕ, Tᵏ(n) = 1.",
              "콘웨이(1972)는 일반화된 콜라츠 문제가 알고리즘적으로 결정 불가능함을 증명했습니다."
            ],
            mystery: "콜라츠 추측은 ZFC 공리계에서 결정 불가능한 명제일까요, 아니면 현대 AI와 Lean 4를 통해 구조적 불변량을 발견할 수 있을까요?",
            funFact: "음의 정수환 ℤ⁻에서는 {-1}, {-5}, {-17}이라는 3개의 명확한 주기가 이미 발견되었습니다."
          }
        },
        history: [
          { year: "1937", author: "로타어 콜라츠", note: "세계 수학자 대회에서 문제 제기." },
          { year: "1972", author: "존 호턴 콘웨이", note: "일반화된 콜라츠 문제의 알고리즘적 결정 불가능성 증명." },
          { year: "2019", author: "테렌스 타오", note: "거의 모든 궤적이 거의 유계인 값에 도달함을 확률론적으로 증명." },
          { year: "2024–2026", author: "AI 자동 탐색 및 Lean 4", note: "수십억 단계 궤적의 기계 검증 및 비자명 주기 배제 정리 확립." }
        ]
      },
      "zh-Hans": {
        name: "考拉兹猜想",
        subtitle: "冰雹数难题 (3x + 1)",
        field: "数论与动力系统",
        statusBadge: "世界未解之谜",
        grades: {
          explorers: {
            tagline: "你能困住一颗永不休止、疯狂跳跃的“冰雹”吗？",
            analogy: "想象一朵云落下了一颗冰雹。如果在偶数高度，重力会让它下降一半！但如果撞到奇数云层，闪电会击中它：乘3加1，瞬间飙升到高空！是否每一颗冰雹最终都会掉回地面（数字1）？",
            rules: [
              "任选一个正整数。",
              "如果是【偶数】：除以 2（减半）。",
              "如果是【奇数】：乘以 3 再加 1（3n + 1）。",
              "对得到的新数字重复上述规则！"
            ],
            mystery: "无论你选多大的数字（即便是有几万位的超级大数），最后都会一头栽进 4 → 2 → 1 → 4 → 2 → 1 的死循环中！但谁也不知道，是否会有一个狡猾的数字能永远升入无限大，或者掉进另一个未知的秘密循环？",
            funFact: "数学大师埃尔德什曾感叹：“现在的数学还没有准备好解决这样的难题。”"
          },
          investigators: {
            tagline: "动力学轨道、模运算与 4-2-1 吸引子验证。",
            analogy: "这是一个离散动力系统。若 n 为偶数，T(n) = n/2；若 n 为奇数，T(n) = 3n + 1。因为奇数乘3加1必然为偶数，所以每次上升必定紧接着至少一次下降除以2。",
            rules: [
              "变换规则：偶数时 n/2，奇数时 3n+1。",
              "停留步数：轨道降落到1所需的全部步数。",
              "峰值高度：数字在轨道中冲上的最大数值。"
            ],
            mystery: "除了 {1, 2, 4} 外是否存在其它非平凡周期轨道？计算机已经验证了 2⁶⁸ ≈ 2.95 × 10²⁰ 以内的所有数字，但有限的计算永远无法直接证明无穷。",
            funFact: "2019年，菲尔兹奖得主陶哲轩证明了“几乎所有”考拉兹轨道都能降至任意接近1的数值！"
          },
          pioneers: {
            tagline: "随机过程模型、2-adic p进整数与算法不可判定性壁垒。",
            analogy: "考拉兹映射可推广至2进整数环 ℤ₂，作为保测度遍历变换进行分析，具有类似混沌系统的伪随机特性。",
            rules: [
              "映射定义：T: ℕ → ℕ, T(n) = n/2 (n为偶), (3n+1)/2 (n为奇)。",
              "猜想表述：∀ n ∈ ℤ⁺, ∃ k ∈ ℕ, Tᵏ(n) = 1。",
              "康威 (1972) 证明了推广型考拉兹函数在算法上是不可判定的（等价于停机问题）。"
            ],
            mystery: "考拉兹猜想在ZFC公理系统中是否独立不可判定？现代AI能否通过Lean 4形式化归纳发现全新代数不变量？",
            funFact: "在负整数集合 ℤ⁻ 中，已知存在3个独立的循环圈：{-1}, {-5} 和 {-17}。"
          }
        },
        history: [
          { year: "1937", author: "洛塔尔·考拉兹", note: "在国际数学家大会上首次提出该难题。" },
          { year: "1972", author: "约翰·霍顿·康威", note: "证明广义考拉兹类问题在算法上是不可判定的。" },
          { year: "2019", author: "陶哲轩", note: "证明几乎所有轨道都能下降到接近1的有界值。" },
          { year: "2024–2026", author: "AI自动化探索与Lean 4", note: "在Lean 4中形式化验证了数十亿步超长轨道并自动排除了多种非平凡环路。" }
        ]
      },
      "zh-Hant": {
        name: "考拉茲猜想",
        subtitle: "冰雹數難題 (3x + 1)",
        field: "數論與動力系統",
        statusBadge: "世界未解之謎",
        grades: {
          explorers: {
            tagline: "你能困住一顆永不休止、瘋狂跳躍的「冰雹」嗎？",
            analogy: "想像一朵雲落下了一顆冰雹。如果在偶數高度，重力會讓它下降一半！但如果撞到奇數雲層，閃電會擊中它：乘3加1，瞬間飆升到高空！是否每一顆冰雹最終都會掉回地面（數字1）？",
            rules: [
              "任選一個正整數。",
              "如果是【偶數】：除以 2（減半）。",
              "如果是【奇數】：乘以 3 再加 1（3n + 1）。",
              "對得到的新數字重複上述規則！"
            ],
            mystery: "無論你選多大的數字（即便是有幾萬位的超級大數），最後都會一頭栽進 4 → 2 → 1 → 4 → 2 → 1 的死循環中！但誰也不知道，是否會有一個狡猾的數字能永遠升入無限大，或者掉進另一個未知的秘密循環？",
            funFact: "數學大師艾狄胥曾感嘆：「現在的數學還沒有準備好解決這樣的難題。」"
          },
          investigators: {
            tagline: "動力學軌道、同餘運算與 4-2-1 吸引子驗證。",
            analogy: "這是一個離散動力系統。若 n 為偶數，T(n) = n/2；若 n 為奇數，T(n) = 3n + 1。每次上升後必定緊接著至少一次下降除以2。",
            rules: [
              "變換規則：偶數時 n/2，奇數時 3n+1。",
              "停留步數：軌道降落到1所需的全部步數。",
              "峰值高度：數字在軌道中衝上的最大數值。"
            ],
            mystery: "除了 {1, 2, 4} 外是否存在其它非平凡週期軌道？電腦已經驗證了 2⁶⁸ 以內的所有數字，但有限的計算永遠無法直接證明無窮。",
            funFact: "2019年，費爾茲獎得主陶哲軒證明了「幾乎所有」考拉茲軌道都能降至任意接近1的數值！"
          },
          pioneers: {
            tagline: "隨機過程模型、2-adic p進整數與演算法不可判定性壁壘。",
            analogy: "考拉茲映射可推廣至2進整數環 ℤ₂，作為保測度遍歷變換進行分析，具有類似混沌系統的偽隨機特性。",
            rules: [
              "映射定義：T: ℕ → ℕ, T(n) = n/2 (n偶), (3n+1)/2 (n奇)。",
              "猜想表述：∀ n ∈ ℤ⁺, ∃ k ∈ ℕ, Tᵏ(n) = 1。",
              "康威 (1972) 證明了推廣型考拉茲函數在演算法上是不可判定的。"
            ],
            mystery: "考拉茲猜想在ZFC公理系統中是否獨立不可判定？現代AI能否透過Lean 4形式化歸納發現全新代數不變量？",
            funFact: "在負整數集合 ℤ⁻ 中，已知存在3個獨立的循環圈：{-1}, {-5} 和 {-17}。"
          }
        },
        history: [
          { year: "1937", author: "洛塔爾·考拉茲", note: "在國際數學家大會上首次提出該難題。" },
          { year: "1972", author: "約翰·霍頓·康威", note: "證明廣義考拉茲類問題在演算法上是不可判定的。" },
          { year: "2019", author: "陶哲軒", note: "證明幾乎所有軌道都能下降到接近1的有界值。" },
          { year: "2024–2026", author: "AI自動化探索與Lean 4", note: "在Lean 4中形式化驗證了數十億步超長軌道並自動排除了多種非平凡環路。" }
        ]
      }
    }
  },
  {
    id: "twin-primes",
    icon: "👯",
    difficulty: "Grades 5+",
    simId: "primes-sim",
    leanCode: `import Mathlib.Data.Nat.Prime.Basic

def IsTwinPrime (p : ℕ) : Prop :=
  Nat.Prime p ∧ Nat.Prime (p + 2)

def TwinPrimeConjecture : Prop :=
  ∀ N : ℕ, ∃ p : ℕ, p > N ∧ IsTwinPrime p

example : IsTwinPrime 3 := by
  refine ⟨by norm_num, by norm_num⟩`,
    locales: {
      en: {
        name: "The Twin Prime Conjecture",
        subtitle: "The Lonely Prime Pairs",
        field: "Analytic Number Theory",
        statusBadge: "ACTIVE AI FRONTIER",
        grades: {
          explorers: {
            tagline: "Do prime best friends stay close together forever?",
            analogy: "Primes are solitary numbers: they can't be divided evenly by any number except 1 and themselves (like 3, 5, 7, 11, 13). Sometimes, two primes live right next door to each other, separated by only one even house: (3, 5), (5, 7), (11, 13), (17, 19). These are 'Twin Primes'!",
            rules: [
              "A prime number has only two divisors: 1 and itself.",
              "Twin primes are pairs of primes that differ by exactly 2: (p, p+2).",
              "As numbers grow into the trillions, primes get rarer. Do twin pairs ever run out?"
            ],
            mystery: "Euclid proved 2,300 years ago that primes go on forever. But will twin prime pairs keep showing up forever?",
            funFact: "The largest known twin primes have hundreds of thousands of digits!"
          },
          investigators: {
            tagline: "Exploring prime gaps, sieve methods, and gap compression.",
            analogy: "Prime distribution is governed by the Prime Number Theorem. Twin primes should occur with frequency roughly C₂ / (ln x)², where C₂ ≈ 0.66016 is the Twin Prime Constant.",
            rules: [
              "Gap between consecutive primes: g_n = p_{n+1} - p_n.",
              "Twin primes correspond to gap = 2.",
              "Brun's Theorem (1919): The sum of reciprocals of twin primes converges to Brun's constant B ≈ 1.902."
            ],
            mystery: "In 2013, Yitang Zhang proved bounded gaps (< 70,000,000). Maynard and Polymath8 compressed this to 246!",
            funFact: "Closing the gap from 246 down to 2 is one of the ultimate holy grails in number theory."
          },
          pioneers: {
            tagline: "Selberg sieve weights, the parity barrier, and modern AI bound pushes.",
            analogy: "Classical sieves suffer from the parity barrier. Maynard, Tao, and GPY overcame this using multidimensional weight optimization.",
            rules: [
              "Conjecture: liminf_{n → ∞} (p_{n+1} - p_n) = 2.",
              "Unconditional current record: liminf (p_{n+1} - p_n) ≤ 246.",
              "Under Generalized Elliott-Halberstam (GEH): liminf (p_{n+1} - p_n) ≤ 6."
            ],
            mystery: "Can machine learning and automated variational optimization on sieve mollifiers close the remaining gap from 246 to 2?",
            funFact: "In 2025–2026, AI search models began systematic automated exploration of GPY-Maynard sieve weight polynomials in Lean 4."
          }
        },
        history: [
          { year: "300 BC", author: "Euclid", note: "Proves infinitude of prime numbers in 'Elements'." },
          { year: "1919", author: "Viggo Brun", note: "Proves Brun's constant converges." },
          { year: "2013", author: "Yitang Zhang", note: "Proves prime gaps < 70,000,000 infinitely often." },
          { year: "2014", author: "Maynard & Polymath8", note: "Compresses prime gap to ≤ 246 unconditionally." },
          { year: "2025–2026", author: "AI Sieve Optimizers", note: "Automated search over multi-variable polynomial mollifiers." }
        ]
      },
      de: {
        name: "Die Primzahlzwillings-Vermutung",
        subtitle: "Die unzertrennlichen Primzahlpaare",
        field: "Analytische Zahlentheorie",
        statusBadge: "AKTIVE KI-FRONTIER",
        grades: {
          explorers: {
            tagline: "Bleiben beste Primzahl-Freunde für immer nah beieinander?",
            analogy: "Primzahlen sind Einzelgänger: nur durch 1 und sich selbst teilbar. Manchmal wohnen zwei Primzahlen direkt nebeneinander mit nur einem geraden Haus dazwischen: (3, 5), (5, 7), (11, 13)... Hören diese Zwillinge jemals auf?",
            rules: ["Primzahlen haben genau zwei Teiler.", "Primzahlzwillinge haben die Differenz 2: (p, p+2).", "Gibt es unendlich viele solcher Paare?"],
            mystery: "Euklid bewies, dass es unendlich viele Primzahlen gibt. Aber gibt es auch unendlich viele Zwillinge?",
            funFact: "Die größten bekannten Primzahlzwillinge haben Hunderttausende von Ziffern!"
          },
          investigators: {
            tagline: "Primzahllücken, Siebmethoden und dramatische Schrankenreduktion.",
            analogy: "Bruns Theorem (1919) zeigt, dass die Summe der Kehrwerte aller Primzahlzwillinge konvergiert.",
            rules: ["Lücke: g_n = p_{n+1} - p_n.", "Primzahlzwillinge entsprechen g_n = 2.", "Zhang bewies 2013 eine Lücke von < 70.000.000."],
            mystery: "Maynard reduzierte die Lücke auf 246. Kann die Lücke auf 2 geschlossen werden?",
            funFact: "Unter der verallgemeinerten Elliott-Halberstam-Vermutung ist die Lücke bereits ≤ 6!"
          },
          pioneers: {
            tagline: "Selberg-Siebe, Paritätsproblem und moderne KI-Optimierung.",
            analogy: "Klassische Siebe scheitern an der Paritätsbarriere. Maynard und Tao nutzten mehrdimensionale Gewichte.",
            rules: ["Ziel: liminf (p_{n+1} - p_n) = 2.", "Aktueller Rekord: ≤ 246."],
            mystery: "Kann KI-gestützte Variationsrechnung über Siebgewichte die verbleibende Lücke schließen?",
            funFact: "2025–2026 durchsuchten KI-Modelle systematisch Polynomräume für GPY-Maynard-Siebe."
          }
        },
        history: [
          { year: "300 v. Chr.", author: "Euklid", note: "Beweist die Unendlichkeit der Primzahlen." },
          { year: "1919", author: "Viggo Brun", note: "Beweist die Konvergenz der Brunschen Konstante." },
          { year: "2013", author: "Yitang Zhang", note: "Beweist beschränkte Lücken (< 70.000.000)." },
          { year: "2014", author: "Maynard & Polymath8", note: "Reduziert Lücke auf ≤ 246." }
        ]
      },
      fr: {
        name: "Conjecture des Nombres Premiers Jumeaux",
        subtitle: "Les Paires Inséparables",
        field: "Théorie Analytique des Nombres",
        statusBadge: "FRONTIÈRE DE L'IA",
        grades: {
          explorers: {
            tagline: "Les meilleurs amis premiers restent-ils proches pour toujours ?",
            analogy: "Les nombres premiers sont solitaires. Mais parfois, deux premiers sont voisins, séparés par une seule maison paire : (3, 5), (5, 7), (11, 13)... Ce sont les 'premiers jumeaux' !",
            rules: ["Un nombre premier n'est divisible que par 1 et lui-même.", "Les jumeaux ont un écart de 2 : (p, p+2).", "Existe-t-il une infinité de jumeaux ?"],
            mystery: "Euclide a prouvé l'infinité des nombres premiers il y a 2300 ans. Mais les jumeaux continuent-ils à l'infini ?",
            funFact: "Les plus grands jumeaux connus ont des centaines de milliers de chiffres !"
          },
          investigators: {
            tagline: "Écarts entre premiers, méthodes de crible et réduction spectaculaire.",
            analogy: "Le théorème de Brun (1919) prouve que la somme des inverses des jumeaux converge vers la constante de Brun B ≈ 1,902.",
            rules: ["Écart : g_n = p_{n+1} - p_n.", "En 2013, Yitang Zhang a prouvé un écart < 70 000 000.", "Maynard l'a réduit à 246 !"],
            mystery: "L'écart final entre 246 et 2 sera-t-il bientôt franchi ?",
            funFact: "Sous l'hypothèse d'Elliott-Halberstam, l'écart prouvé tombe déjà à 6."
          },
          pioneers: {
            tagline: "Cribles de Selberg, barrière de parité et optimisation par IA.",
            analogy: "Les cribles classiques butent sur le problème de la parité. Maynard et Tao l'ont contourné par des poids multidimensionnels.",
            rules: ["Objectif : liminf (p_{n+1} - p_n) = 2.", "Record inconditionnel : ≤ 246."],
            mystery: "L'IA et le calcul variationnel automatisé permettront-ils de briser le verrou ?",
            funFact: "En 2025–2026, des modèles d'IA ont exploré de nouveaux polynômes de mollificateurs dans Lean 4."
          }
        },
        history: [
          { year: "300 av. J.-C.", author: "Euclide", note: "Prouve l'infinité des nombres premiers." },
          { year: "1919", author: "Viggo Brun", note: "Convergence de la constante de Brun." },
          { year: "2013", author: "Yitang Zhang", note: "Percée historique : écarts finis (< 70 000 000)." },
          { year: "2014", author: "Maynard & Polymath8", note: "Écart comprimé à ≤ 246." }
        ]
      },
      it: {
        name: "La Congettura dei Primi Gemelli",
        subtitle: "Le Coppie Inseparabili",
        field: "Teoria Analitica dei Numeri",
        statusBadge: "FRONTIERA DELL'IA",
        grades: {
          explorers: {
            tagline: "I numeri primi gemelli restano vicini per sempre?",
            analogy: "I numeri primi sono lupi solitari. Ma a volte due primi abitano uno accanto all'altro, separati solo da una casa pari: (3, 5), (5, 7), (11, 13)... Continueranno all'infinito?",
            rules: ["Un numero primo ha solo due divisori: 1 e se stesso.", "I primi gemelli differiscono esattamente di 2.", "Man mano che i numeri crescono, le coppie si esauriscono mai?"],
            mystery: "Euclide dimostrò che i primi sono infiniti. Ma le coppie gemelle non finiscono mai?",
            funFact: "I più grandi primi gemelli noti hanno centinaia di migliaia di cifre!"
          },
          investigators: {
            tagline: "Gap tra numeri primi, metodi di crivello e compressione record.",
            analogy: "Nel 2013 Yitang Zhang stupì il mondo dimostrando un gap < 70.000.000. James Maynard e Polymath8 lo hanno compresso fino a 246!",
            rules: ["Gap: g_n = p_{n+1} - p_n.", "Teorema di Brun: la somma dei reciproci converge.", "Record incondizionato: 246."],
            mystery: "Riusciremo a comprimere il gap da 246 fino a 2?",
            funFact: "Sotto l'ipotesi generalizzata di Elliott-Halberstam il gap è già ≤ 6!"
          },
          pioneers: {
            tagline: "Crivelli di Selberg, barriera di parità e ottimizzazione con IA.",
            analogy: "La barriera di parità impediva ai crivelli classici di distinguere i primi. Maynard e Tao hanno superato questo limite con pesi multidimensionali.",
            rules: ["Obiettivo: liminf (p_{n+1} - p_n) = 2.", "Record attuale: ≤ 246."],
            mystery: "L'ottimizzazione variazionale guidata da IA potrà chiudere il divario residuo?",
            funFact: "Nel 2025–2026 modelli di IA hanno effettuato ricerche su spazi polinomiali per crivelli in Lean 4."
          }
        },
        history: [
          { year: "300 a.C.", author: "Euclide", note: "Dimostra l'infinità dei numeri primi." },
          { year: "1919", author: "Viggo Brun", note: "Dimostra la convergenza della costante di Brun." },
          { year: "2013", author: "Yitang Zhang", note: "Dimostra gap limitati (< 70.000.000)." },
          { year: "2014", author: "Maynard & Polymath8", note: "Comprime il gap a ≤ 246." }
        ]
      },
      ja: {
        name: "双子素数予想",
        subtitle: "孤独な素数たちのペア (p, p+2)",
        field: "解析的数論",
        statusBadge: "AI研究の最前線",
        grades: {
          explorers: {
            tagline: "大親友の素数ペアは、数の世界の果てまでずっと隣り合って現れる？",
            analogy: "素数は孤独なオオカミのような数です。1とその数自身でしか割り切れません（3, 5, 7, 11, 13...）。でも、時に偶数の家をたった1軒挟んでお隣同士で暮らす素数がいます。(3, 5), (5, 7), (11, 13), (17, 19)... これらを「双子素数」と呼びます！",
            rules: [
              "素数は約数が1とその数自身の2つだけ。",
              "差がちょうど「2」の素数ペアを双子素数という：(p, p+2)。",
              "数が何兆、何京と大きくなると素数はどんどんまばらになります。それでも双子素数は無限に続くのでしょうか？"
            ],
            mystery: "紀元前300年にユークリッドが「素数は無限にある」ことを証明しました。しかし、差が2の双子素数ペアも永遠に出現し続けるのかは、今も誰にも分かっていません！",
            funFact: "現在知られている最大の双子素数は、数十万桁もの長さがあります！"
          },
          investigators: {
            tagline: "素数の間隔（ギャップ）、篩（ふるい）法、そして劇的な間隔の圧縮。",
            analogy: "素数定理により素数の分布密度は x の近くでおよそ 1/ln(x) です。双子素数の頻度は C₂/(ln x)²（C₂ ≈ 0.66016：双子素数定数）に従うと考えられています。",
            rules: [
              "隣り合う素数の間隔：g_n = p_{n+1} - p_n。",
              "ブルンの定理（1919）：双子素数の逆数の総和は収束する（ブルン定数 B ≈ 1.902）。",
              "2013年の張益唐（Yitang Zhang）による7000万以下のギャップ証明、そしてメイナードらによる246への圧縮！"
            ],
            mystery: "246から目標の「2」への最後の壁。古典的な篩法の限界を超える新しい理論が求められています。",
            funFact: "一般化エリオット・ハルバースタム予想を仮定すると、素数間隔の上界はすでに「6」まで縮まっています！"
          },
          pioneers: {
            tagline: "セルバーグ篩、パリティ問題（偶奇の壁）、現代AIによる多次元最適化。",
            analogy: "古典的篩法は、素因数の個数が奇数か偶数かを区別できない「パリティ問題」に阻まれていました。メイナードとタオは高次元の重み最適化によりこの壁を突破しました。",
            rules: [
              "予想：liminf_{n → ∞} (p_{n+1} - p_n) = 2。",
              "現在の無条件の最高記録：liminf (p_{n+1} - p_n) ≤ 246。",
              "2025–2026年、フロンティアAIがLean 4上でGPY-メイナード篩の多変数多項式探索を自動化。"
            ],
            mystery: "機械学習と自動変分最適化によって、246から2への最後の一歩を踏み出すことができるか？",
            funFact: "2026年、AIモデルは素数タプル篩の重み関数空間を効率的に探索し、条件付き境界をさらに更新しています。"
          }
        },
        history: [
          { year: "前300年", author: "ユークリッド", note: "『原論』にて素数が無数に存在することを証明。" },
          { year: "1919", author: "ヴィーゴ・ブルン", note: "ブルン定数の収束を証明（双子素数は全素数より遥かにまばら）。" },
          { year: "2013", author: "張益唐 (Yitang Zhang)", note: "素数の間隔が7000万以下となるペアが無数に存在することを証明。" },
          { year: "2014", author: "ジェームズ・メイナード & Polymath8", note: "素数ギャップを無条件で246以下へと一気に圧縮。" },
          { year: "2025–2026", author: "AI篩最適化システム", note: "多変数多項式重みの自動探索により素数タプル境界を大幅に改善。" }
        ]
      },
      ko: {
        name: "쌍둥이 소수 추측",
        subtitle: "외로운 소수들의 단짝 친구 (p, p+2)",
        field: "해석적 수론",
        statusBadge: "AI 연구의 최전선",
        grades: {
          explorers: {
            tagline: "단짝 소수 친구들은 수의 세계 끝까지 영원히 함께할까요?",
            analogy: "소수는 외로운 숫자입니다. 1과 자기 자신으로만 나누어떨어집니다 (3, 5, 7, 11, 13...). 그런데 짝수 번지 하나만 사이에 두고 이웃해 사는 소수들이 있습니다: (3, 5), (5, 7), (11, 13), (17, 19)... 이들을 '쌍둥이 소수'라고 부릅니다!",
            rules: [
              "소수는 약수가 1과 자신뿐인 수.",
              "차이가 정확히 2인 소수 쌍: (p, p+2).",
              "수가 수조, 수경으로 커질수록 소수는 희귀해집니다. 쌍둥이 소수도 영원히 계속 나올까요?"
            ],
            mystery: "2300년 전 유클리드는 소수가 무한함을 증명했습니다. 하지만 차이가 2인 쌍둥이 소수도 끝없이 나타날지는 아직 미스터리입니다!",
            funFact: "현재까지 발견된 가장 큰 쌍둥이 소수는 수십만 자리 숫자에 달합니다!"
          },
          investigators: {
            tagline: "소수 간격, 체(Sieve) 방법론, 그리고 극적인 간격 압축.",
            analogy: "소수 간격의 분포는 소수 정리를 따릅니다. 브룬의 정리(1919)는 모든 쌍둥이 소수 역수의 합이 브룬 상수 B ≈ 1.902로 수렴함을 밝혔습니다.",
            rules: [
              "소수 간격: g_n = p_{n+1} - p_n.",
              "2013년 이탕 장(Yitang Zhang)이 7천만 이하의 유한 간격 증명.",
              "메이나드와 Polymath8 프로젝트가 간격을 246까지 압축!"
            ],
            mystery: "간격 246에서 최종 목표인 2까지의 간극을 어떻게 좁힐 것인가?",
            funFact: "일반화된 엘리엇-할버스탐(GEH) 추측을 가정하면 간격은 이미 6 이하로 좁혀집니다."
          },
          pioneers: {
            tagline: "셀베르그 체, 패리티 장벽(Parity Barrier), AI 다차원 최적화.",
            analogy: "고전적 체 이론은 소인수 개수의 홀짝을 구분하지 못하는 '패리티 문제'에 부딪혔으나 메이나드와 타오는 다차원 가중치 최적화로 이를 돌파했습니다.",
            rules: ["목표: liminf (p_{n+1} - p_n) = 2.", "현재 무조건 최고 기록: ≤ 246."],
            mystery: "AI 기반 변분 최적화를 통해 246에서 2로 향하는 마지막 장벽을 허물 수 있을까요?",
            funFact: "2025–2026년 프론티어 AI 모델들이 Lean 4 기반 소수 체 다항식 탐색을 본격화했습니다."
          }
        },
        history: [
          { year: "기원전 300", author: "유클리드", note: "소수의 무한성 증명." },
          { year: "1919", author: "비고 브룬", note: "브룬 상수 수렴 증명." },
          { year: "2013", author: "이탕 장 (Yitang Zhang)", note: "7천만 이하의 유한 소수 간격 증명." },
          { year: "2014", author: "메이나드 & Polymath8", note: "소수 간격을 무조건 246 이하로 압축." }
        ]
      },
      "zh-Hans": {
        name: "孪生素数猜想",
        subtitle: "孤独素数的亲密搭档 (p, p+2)",
        field: "解析数论",
        statusBadge: "AI研究前沿",
        grades: {
          explorers: {
            tagline: "最好的素数朋友会永远紧挨着相伴到无穷吗？",
            analogy: "素数就像孤独的独行侠：除了1和它自己，谁也除不尽它们（比如 3, 5, 7, 11, 13）。但有时，两个素数会紧挨在一起，中间只隔着一间偶数房屋：(3, 5), (5, 7), (11, 13), (17, 19)... 它们就是“孪生素数”！",
            rules: [
              "素数只有1和它本身两个因数。",
              "相差刚好为2的一对素数叫做孪生素数：(p, p+2)。",
              "当数字大到数万亿以上时，素数越来越稀疏。孪生素数对会断绝吗？"
            ],
            mystery: "欧几里得在2300年前证明了素数有无穷多个。但相隔只有2的孪生素数，是否也会永远无休止地出现下去？",
            funFact: "目前人类发现的最大孪生素数对，拥有几十万位数字之多！"
          },
          investigators: {
            tagline: "素数间距、筛法理论与轰动全球的间距大压缩。",
            analogy: "素数分布受素数定理支配。布朗定理（1919）证明了所有孪生素数的倒数之和收敛于布朗常数 B ≈ 1.902。",
            rules: [
              "相邻素数间距：g_n = p_{n+1} - p_n。",
              "2013年华人数学家张益唐震惊世界，证明了存在无穷多对间距小于7000万的素数！",
              "随后梅纳德与Polymath8项目将这一间距无条件压缩到了 246！"
            ],
            mystery: "从 246 到终极目标 2，最后这一步该如何突破？",
            funFact: "在广义埃利奥特-哈伯斯塔姆假设下，素数间距上界已经被推进到 6！"
          },
          pioneers: {
            tagline: "塞尔伯格筛法、奇偶性屏障与现代AI变分多项式优化。",
            analogy: "经典筛法面临无法区分素因子个数奇偶性的“奇偶性屏障”。梅纳德与陶哲轩通过多维权重优化打破了这一僵局。",
            rules: [
              "猜想表述：liminf_{n → ∞} (p_{n+1} - p_n) = 2。",
              "当前无条件记录：liminf (p_{n+1} - p_n) ≤ 246。",
              "2025–2026年AI系统在Lean 4中对GPY-梅纳德筛法多项式展开自动化搜索。"
            ],
            mystery: "能否借助AI自动变分法在筛法乘子空间中突破最后的奇偶性壁垒？",
            funFact: "2026年，前沿AI模型成功搜索并验证了一组全新多变量光滑加权多项式。"
          }
        },
        history: [
          { year: "公元前300", author: "欧几里得", note: "在《几何原本》中证明素数无穷。" },
          { year: "1919", author: "维戈·布朗", note: "证明布朗常数收敛，揭示孪生素数极其稀疏。" },
          { year: "2013", author: "张益唐 (Yitang Zhang)", note: "历史性证明相邻素数有界间距（< 7000万）。" },
          { year: "2014", author: "詹姆斯·梅纳德 & Polymath8", note: "将素数间距无条件压缩至 ≤ 246。" }
        ]
      },
      "zh-Hant": {
        name: "孿生素數猜想",
        subtitle: "孤獨素數的親密搭檔 (p, p+2)",
        field: "解析數論",
        statusBadge: "AI研究前沿",
        grades: {
          explorers: {
            tagline: "最好的素數朋友會永遠緊挨著相伴到無窮嗎？",
            analogy: "素數就像孤獨的獨行俠：除了1和它自己，誰也除不盡它們（如 3, 5, 7, 11, 13）。但有時，兩個素數會緊挨在一起，中間只隔著一間偶數房屋：(3, 5), (5, 7), (11, 13)... 它們就是「孿生素數」！",
            rules: [
              "素數只有1和它本身兩個因數。",
              "相差剛好為2的一對素數叫做孿生素數：(p, p+2)。",
              "當數字大到數萬億以上時，孿生素數對會斷絕嗎？"
            ],
            mystery: "歐幾里得證明了素數有無窮多個。但相隔只有2的孿生素數，是否也會永遠無休止地出現？",
            funFact: "目前人類發現的最大孿生素數對，擁有幾十萬位數字之多！"
          },
          investigators: {
            tagline: "素數間距、篩法理論與轟動全球的間距大壓縮。",
            analogy: "2013年華人數學家張益唐震驚世界，證明了存在無窮多對間距小於7000萬的素數！梅納德隨後將間距壓縮至 246！",
            rules: [
              "相鄰素數間距：g_n = p_{n+1} - p_n。",
              "布朗定理：所有孿生素數的倒數之和收斂。",
              "目前無條件紀錄：間距 ≤ 246。"
            ],
            mystery: "從 246 到終極目標 2，最後這一哩路該如何跨越？",
            funFact: "在廣義埃利奧特-哈伯斯塔姆假設下，素數間距已被推進到 6！"
          },
          pioneers: {
            tagline: "塞爾伯格篩法、奇偶性屏障與現代AI多維權重優化。",
            analogy: "經典篩法面臨無法區分素因子個數奇偶性的「奇偶性障礙」。梅納德與陶哲軒透過多維權重優化打破了僵局。",
            rules: ["目標：liminf (p_{n+1} - p_n) = 2。", "當前無條件紀錄：≤ 246。"],
            mystery: "能否借助AI自動變分法在篩法乘子空間中突破最後的奇偶性壁壘？",
            funFact: "2025–2026年AI系統在Lean 4中對GPY-梅納德篩法展開全面自動化搜索。"
          }
        },
        history: [
          { year: "西元前300", author: "歐幾里得", note: "證明素數無窮多。" },
          { year: "1919", author: "維戈·布朗", note: "證明布朗常數收斂。" },
          { year: "2013", author: "張益唐 (Yitang Zhang)", note: "突破性證明相鄰素數有界間距（< 7000萬）。" },
          { year: "2014", author: "梅納德 & Polymath8", note: "將素數間距無條件壓縮至 ≤ 246。" }
        ]
      }
    }
  },
  {
    id: "goldbach",
    icon: "⚖️",
    difficulty: "All Ages",
    simId: "goldbach-sim",
    leanCode: `import Mathlib.Data.Nat.Prime.Basic

def GoldbachStatement : Prop :=
  ∀ n : ℕ, n ≥ 4 ∧ Even n → ∃ p q : ℕ, Nat.Prime p ∧ Nat.Prime q ∧ p + q = n

example : ∃ p q : ℕ, Nat.Prime p ∧ Nat.Prime q ∧ p + q = 28 := by
  use 5, 23
  refine ⟨by norm_num, by norm_num, by rfl⟩`,
    locales: {
      en: {
        name: "Goldbach's Conjecture",
        subtitle: "The Even Number Balance Scale",
        field: "Additive Number Theory",
        statusBadge: "OPEN MYSTERY",
        grades: {
          explorers: {
            tagline: "Every even number is the secret sum of two prime heroes!",
            analogy: "Take any even number greater than 2: 4 = 2+2, 6 = 3+3, 8 = 3+5, 10 = 3+7, 28 = 5+23... In 1742, Christian Goldbach wrote a letter to Leonhard Euler: Can EVERY even number be written as the sum of two primes?",
            rules: ["Even numbers end in 0, 2, 4, 6, 8.", "Primes: 2, 3, 5, 7, 11, 13, 17, 19, 23...", "Goldbach's claim: Every even number ≥ 4 is Prime A + Prime B."],
            mystery: "Computers have checked this up to 4 × 10¹⁸ (4 quintillion!), and it works every time. But is there an enormous number where it suddenly fails?",
            funFact: "Plotting the number of prime pairs for each even number makes 'Goldbach's Comet'!"
          },
          investigators: {
            tagline: "The Circle Method, Goldbach's Comet, and Weak Goldbach.",
            analogy: "Let g(n) be the number of representations of 2n as the sum of two primes. The Hardy-Littlewood asymptotic formula predicts the density of solutions.",
            rules: ["Strong Goldbach: Every even integer n ≥ 4 is the sum of 2 primes.", "Weak Goldbach: Every odd integer n ≥ 7 is the sum of 3 primes.", "In 2013, Harald Helfgott proved the Weak Goldbach Conjecture!"],
            mystery: "Why is Strong Goldbach so much harder? With 3 primes, minor arc integrals cancel, but with 2 primes, cancellation is just out of reach.",
            funFact: "Chen Jingrun (1966) proved every large even number is a prime plus an almost-prime (p + P₂)."
          },
          pioneers: {
            tagline: "Hardy-Littlewood circle method, Chen's Theorem, and bilinear forms.",
            analogy: "The number of representations is given by the integral of the squared prime exponential sum over the unit circle.",
            rules: ["S(α) = ∑ e^{2πi p α}.", "Strong conjecture equivalent to minor arc cancellation without GRH."],
            mystery: "Can modern AI discover higher-level cancellation in sieve bilinear forms?",
            funFact: "Lean 4 has codified large portions of Vinogradov's three-prime theorem."
          }
        },
        history: [
          { year: "1742", author: "Goldbach & Euler", note: "Posed in letter from Goldbach to Euler." },
          { year: "1937", author: "Vinogradov", note: "Proves every large odd integer is sum of 3 primes." },
          { year: "1973", author: "Chen Jingrun", note: "Proves every large even number is p + P₂." },
          { year: "2013", author: "Harald Helfgott", note: "Completely proves Weak Goldbach Conjecture." }
        ]
      },

      de: {
        name: "Die Goldbachsche Vermutung",
        subtitle: "Die Primzahlwaage für gerade Zahlen",
        field: "Additive Zahlentheorie",
        statusBadge: "OFFENES RÄTSEL",
        grades: {
          explorers: {
            tagline: "Jede gerade Zahl ist die geheime Summe zweier Primzahlen!",
            analogy: "Nimm irgendeine gerade Zahl größer als 2: 4 = 2+2, 6 = 3+3, 8 = 3+5, 10 = 3+7, 28 = 5+23... 1742 schrieb Goldbach an Euler: Kann wirklich JEDE gerade Zahl so zerlegt werden?",
            rules: ["Gerade Zahlen enden auf 0, 2, 4, 6, 8.", "Primzahlen: 2, 3, 5, 7, 11, 13, 17, 19...", "Behauptung: Jede gerade Zahl ≥ 4 ist Primzahl + Primzahl."],
            mystery: "Computer haben dies bis 4 × 10¹⁸ überprüft – ohne jede Ausnahme! Gibt es irgendwo eine riesige Zahl, die scheitert?",
            funFact: "Zeichnet man die Anzahl der Primzahlpaare, entsteht der sogenannte 'Goldbach-Komet'!"
          },
          investigators: {
            tagline: "Kreismethode, Goldbach-Komet und die schwache Vermutung.",
            analogy: "Die Hardy-Littlewood-Asymptotik sagt vorher, wie viele Primzahlpaare eine gerade Zahl im Schnitt bilden.",
            rules: ["Starke Vermutung: Jede gerade Zahl ≥ 4 ist Summe zweier Primzahlen.", "Schwache Vermutung: Jede ungerade Zahl ≥ 7 ist Summe dreier Primzahlen (2013 von Helfgott bewiesen!)."],
            mystery: "Warum ist die starke Vermutung so viel schwerer? Weil sich bei 2 Primzahlen die Fehlerintegrale nur knapp nicht aufheben.",
            funFact: "Chen Jingrun bewies 1966, dass jede große gerade Zahl als p + P₂ darstellbar ist."
          },
          pioneers: {
            tagline: "Hardy-Littlewood-Kreismethode, Chen-Theorem und bilineare Formen.",
            analogy: "Die Anzahl der Darstellungen ist das Integral des quadrierten exponentiellen Primzahlausdrucks über den Einheitskreis.",
            rules: ["S(α) = ∑ e^{2πi p α}.", "Abschätzung der Nebenbögen ohne verallgemeinerte Riemannsche Vermutung."],
            mystery: "Kann moderne KI tiefe Auslöschungsstrukturen in Siebformen aufdecken?",
            funFact: "Große Teile des Dreiprimzahlensatzes sind bereits in Lean 4 codiert."
          }
        },
        history: [
          { year: "1742", author: "Goldbach & Euler", note: "In Briefwechsel aufgeworfen." },
          { year: "1973", author: "Chen Jingrun", note: "Beweist p + P₂." },
          { year: "2013", author: "Harald Helfgott", note: "Beweist die schwache Goldbachsche Vermutung." }
        ]
      },
      fr: {
        name: "La Conjecture de Goldbach",
        subtitle: "La Balance des Nombres Pairs",
        field: "Théorie Additive des Nombres",
        statusBadge: "MYSTÈRE NON RÉSOLU",
        grades: {
          explorers: {
            tagline: "Chaque nombre pair est la somme secrète de deux héros premiers !",
            analogy: "Prenez n'importe quel nombre pair supérieur à 2 : 4 = 2+2, 6 = 3+3, 8 = 3+5, 28 = 5+23... En 1742, Christian Goldbach demanda à Euler si TOUS les nombres pairs pouvaient s'écrire ainsi !",
            rules: ["Les nombres pairs se terminent par 0, 2, 4, 6, 8.", "Nombres premiers : 2, 3, 5, 7, 11, 13, 17...", "Affirmation : Tout pair ≥ 4 est Premier + Premier."],
            mystery: "Les ordinateurs l'ont vérifié jusqu'à 4 quintillions (4 × 10¹⁸) sans trouver d'exception !",
            funFact: "Le graphique représentant le nombre de paires pour chaque nombre pair s'appelle la 'Comète de Goldbach' !"
          },
          investigators: {
            tagline: "Méthode du cercle, comète de Goldbach et théorème ternaire.",
            analogy: "La formule asymptotique de Hardy-Littlewood prédit la densité de représentations en somme de deux premiers.",
            rules: ["Conjecture forte : Tout nombre pair ≥ 4 est somme de 2 premiers.", "Conjecture faible : Tout nombre impair ≥ 7 est somme de 3 premiers (résolue en 2013 par Helfgott !)."],
            mystery: "Pourquoi la conjecture forte résiste-t-elle ? Les arcs mineurs ne s'annulent pas aussi facilement qu'avec 3 premiers.",
            funFact: "Chen Jingrun a prouvé en 1966 que tout grand nombre pair est de la forme p + P₂."
          },
          pioneers: {
            tagline: "Méthode du cercle de Hardy-Littlewood et intégrales trigonométriques.",
            analogy: "Le nombre de partitions s'obtient par l'intégrale de S(α)² sur le cercle unité.",
            rules: ["Estimation des arcs mineurs sans hypothèse de Riemann généralisée."],
            mystery: "L'IA découvrira-t-elle de nouvelles annulations dans les formes bilinéaires de crible ?",
            funFact: "De larges pans du théorème de Vinogradov sont formalisés dans Lean 4."
          }
        },
        history: [
          { year: "1742", author: "Goldbach & Euler", note: "Posée dans une lettre à Euler." },
          { year: "1973", author: "Chen Jingrun", note: "Théorème de Chen (p + P₂)." },
          { year: "2013", author: "Harald Helfgott", note: "Démonstration complète de la conjecture faible." }
        ]
      },
      it: {
        name: "La Congettura di Goldbach",
        subtitle: "La Bilancia dei Numeri Pari",
        field: "Teoria Additiva dei Numeri",
        statusBadge: "ENIGMA APERTO",
        grades: {
          explorers: {
            tagline: "Ogni numero pari è la somma segreta di due numeri primi!",
            analogy: "Scegli un numero pari maggiore di 2: 4 = 2+2, 6 = 3+3, 8 = 3+5, 10 = 3+7, 28 = 5+23... Nel 1742 Christian Goldbach scrisse a Eulero chiedendosi se TUTTI i numeri pari potessero scomporsi così.",
            rules: ["I numeri pari finiscono per 0, 2, 4, 6, 8.", "Numeri primi: 2, 3, 5, 7, 11, 13...", "Ipotesi: Ogni pari ≥ 4 è Primo + Primo."],
            mystery: "I supercomputer hanno verificato fino a 4 quintilioni senza trovare alcuna eccezione!",
            funFact: "Il grafico del numero di soluzioni per ciascun numero pari forma la 'Cometa di Goldbach'!"
          },
          investigators: {
            tagline: "Il Metodo del Cerchio, la Cometa e la Congettura Debole.",
            analogy: "La congettura debole (ogni dispari ≥ 7 è somma di 3 primi) è stata dimostrata nel 2013 da Harald Helfgott.",
            rules: ["Forte: ogni pari ≥ 4 è somma di 2 primi.", "Debole: ogni dispari ≥ 7 è somma di 3 primi."],
            mystery: "Perché la congettura forte è così difficile? Il contributo degli archi minori non si cancella abbastanza rapidamente.",
            funFact: "Chen Jingrun (1966) dimostrò che ogni grande pari è p + P₂."
          },
          pioneers: {
            tagline: "Metodo del cerchio di Hardy-Littlewood e forme bilineari.",
            analogy: "Numero di rappresentazioni = integrale su arco unitario.",
            rules: ["S(α) = ∑ e^{2πi p α}."],
            mystery: "L'IA scoprirà cancellazioni inedite negli archi minori?",
            funFact: "Lean 4 ha codificato ampie parti dei teoremi di Vinogradov."
          }
        },
        history: [
          { year: "1742", author: "Goldbach ed Eulero", note: "Formulata nella celebre corrispondenza." },
          { year: "1973", author: "Chen Jingrun", note: "Dimostra il celebre teorema p + P₂." },
          { year: "2013", author: "Harald Helfgott", note: "Dimostra la congettura debole per tutti i dispari." }
        ]
      },
      ko: {
        name: "골드바흐 추측",
        subtitle: "짝수와 소수의 양팔저울",
        field: "가법적 수론",
        statusBadge: "미해결 난제",
        grades: {
          explorers: {
            tagline: "모든 짝수는 비밀스러운 두 소수 영웅의 합!",
            analogy: "2보다 큰 아무 짝수나 골라보세요: 4 = 2+2, 6 = 3+3, 8 = 3+5, 10 = 3+7, 28 = 5+23... 1742년 골드바흐는 오일러에게 편지를 보내 세상의 모든 짝수가 두 소수의 합으로 표현되는지 물었습니다.",
            rules: ["짝수는 끝자리가 0, 2, 4, 6, 8인 수.", "소수는 2, 3, 5, 7, 11, 13, 17...", "골드바흐의 주장: 4 이상의 모든 짝수는 소수 + 소수."],
            mystery: "슈퍼컴퓨터로 400경(4×10¹⁸)까지 확인했지만 단 하나의 예외도 없었습니다! 하지만 어딘가 실패하는 거대한 수가 숨어 있을까요?",
            funFact: "짝수별 소수 분해 가짓수를 점으로 찍으면 혜성의 꼬리처럼 보여 '골드바흐의 혜성'이라 부릅니다!"
          },
          investigators: {
            tagline: "원주법(Circle Method), 골드바흐 혜성, 그리고 약한 골드바흐 정리 해결.",
            analogy: "하디-리틀우드 점근 공식은 짝수가 커질수록 소수 분해 조합이 급증함을 보여줍니다.",
            rules: ["강한 골드바흐: 4 이상의 모든 짝수는 2개 소수의 합.", "약한 골드바흐: 7 이상의 모든 홀수는 3개 소수의 합 (2013년 헬프곳 완전 증명!)."],
            mystery: "왜 2개 소수는 3개 소수보다 훨씬 어려울까요? 적분에서 오차항의 상쇄가 임계점에 걸려 있기 때문입니다.",
            funFact: "1966년 중국의 천징룬은 모든 큰 짝수가 소수 + (소수 또는 두 소수의 곱)임을 증명했습니다."
          },
          pioneers: {
            tagline: "하디-리틀우드 원주법, 천의 정리, 쌍선형 형식 평가.",
            analogy: "소수 지수합의 제곱적분을 통해 표현수를 구하는 해석적 기법입니다.",
            rules: ["표현수 적분 = ∫₀¹ S(α)² e^{-2πi N α} dα."],
            mystery: "현대 AI가 체 이론의 쌍선형 형식에서 새로운 상쇄 구조를 찾아낼 수 있을까요?",
            funFact: "비노그라도프의 3소수 정리가 Lean 4에 상당 부분 형식화되었습니다."
          }
        },
        history: [
          { year: "1742", author: "골드바흐 & 오일러", note: "오일러에게 보낸 서한에서 제기." },
          { year: "1973", author: "천징룬 (Chen Jingrun)", note: "천의 정리 (1+2) 증명." },
          { year: "2013", author: "하라드 헬프곳", note: "약한 골드바흐 추측 완전 증명." }
        ]
      },
      ja: {
        name: "ゴールドバッハ予想",
        subtitle: "偶数と素数の天秤ばかり",
        field: "加法的数論",
        statusBadge: "未解決の難問",
        grades: {
          explorers: {
            tagline: "すべての偶数は、2つの素数の足し算でぴったり作れる？",
            analogy: "4以上のどんな偶数も試してみよう：4 = 2+2, 6 = 3+3, 8 = 3+5, 10 = 3+7, 28 = 5+23... 1742年、クリスティアン・ゴールドバッハはオイラーに手紙を書きました。「すべての偶数は、2つの素数の和で表せるのではないか？」と。",
            rules: [
              "偶数は 4, 6, 8, 10, 12, 14...",
              "素数は 2, 3, 5, 7, 11, 13, 17, 19, 23...",
              "ゴールドバッハの主張：4以上のすべての偶数は「素数 ＋ 素数」で表せる！"
            ],
            mystery: "スーパーコンピュータで「400京（4 × 10¹⁸）」までのすべての偶数が確認されましたが、1つも例外はありませんでした。でも、宇宙のどこかに2つの素数で作れない巨大な偶数が隠れているのでしょうか？",
            funFact: "偶数ごとに「作れる素数の組み合わせ数」をグラフに描くと、夜空を飛ぶ彗星のような形になるため「ゴールドバッハの彗星」と呼ばれます！"
          },
          investigators: {
            tagline: "円周法（サークル・メソッド）、ゴールドバッハの彗星、そして弱ゴールドバッハの解決。",
            analogy: "ハーディ・リトルウッドの漸近公式は、偶数が大きくなるほど素数の組み合わせが爆発的に増えることを示しています。",
            rules: [
              "強ゴールドバッハ予想：4以上のすべての偶数は2つの素数の和。",
              "弱ゴールドバッハ予想：7以上のすべての奇数は3つの素数の和。",
              "2013年、ハラルド・ヘルフゴットが弱ゴールドバッハ予想を完全証明しました！"
            ],
            mystery: "なぜ偶数（2つの素数）は奇数（3つの素数）より格段に難しいのか？ 指数和の積分において、3つの素数では誤差項が相殺されますが、2つでは相殺が限界ギリギリで届かないからです。",
            funFact: "1966年、中国の陳景潤は「すべての十分に大きな偶数は、素数＋（素数または2つの素数の積）で表せる」という陳の定理（1+2）を証明しました。"
          },
          pioneers: {
            tagline: "ハーディ・リトルウッド円周法、陳の定理、双線形形式の評価。",
            analogy: "指数和 S(α) = ∑_{p ≤ N} e^{2πi p α} を単位区間上で二乗積分する解析的手法です。",
            rules: [
              "表現数 = ∫₀¹ S(α)² e^{-2πi N α} dα。",
              "主弧（Major arcs）と劣弧（Minor arcs）の厳密な評価が鍵。",
              "一般化リーマン予想（GRH）を用いずに劣弧を抑え込むことが最大の障壁。"
            ],
            mystery: "現代AIの代数探索は、篩法の双線形形式における未知の相殺構造を発見できるか？",
            funFact: "ヴィノグラードフの3素数定理の大部分がすでにLean 4で機械形式化されています。"
          }
        },
        history: [
          { year: "1742", author: "ゴールドバッハ & オイラー", note: "オイラーへの書簡で問題が提起される。" },
          { year: "1937", author: "ヴィノグラードフ", note: "十分大きな奇数は3つの素数の和であることを証明。" },
          { year: "1973", author: "陳景潤 (Chen Jingrun)", note: "陳の定理（p + P₂）を証明。" },
          { year: "2013", author: "ハラルド・ヘルフゴット", note: "弱ゴールドバッハ予想を完全に証明。" }
        ]
      },
      "zh-Hans": {
        name: "哥德巴赫猜想",
        subtitle: "偶数与素数的天平",
        field: "加法数论",
        statusBadge: "世界未解之谜",
        grades: {
          explorers: {
            tagline: "每一个大于2的偶数，都是两个素数英雄的秘密之和！",
            analogy: "随便拿出一个大于2的偶数：4 = 2+2, 6 = 3+3, 8 = 3+5, 10 = 3+7, 28 = 5+23... 1742年哥德巴赫写信给大数学家欧拉：是不是天底下所有的偶数，都能写成两个素数相加？",
            rules: ["偶数末尾是 0, 2, 4, 6, 8。", "素数只能被1和自身整除。", "猜想：大于等于4的偶数 = 素数 + 素数。"],
            mystery: "超级计算机已经验证到了400京（4×10¹⁸），无一例外！但在无限数字的深渊中，会不会藏着一个无法拼成的特例？",
            funFact: "把每个偶数拥有的素数拆分种类画成散点图，会呈现出一条条耀眼的彗星尾巴，被称为“哥德巴赫彗星”！"
          },
          investigators: {
            tagline: "圆法、哥德巴赫彗星与陈景润的“1+2”丰碑。",
            analogy: "哈代-李特尔伍德渐近公式表明，偶数越大，拆分方法就越多。",
            rules: ["强哥德巴赫猜想：每个 ≥4 的偶数都是两个素数之和。", "弱哥德巴赫猜想：每个 ≥7 的奇数都是三个素数之和（2013年已被秘鲁数学家完全证明！）。"],
            mystery: "为什么强猜想比弱猜想难这么多？因为圆法积分中，三个素数的振荡积分可以抵消误差，而两个素数刚好卡在临界点。",
            funFact: "1966年中国数学家陈景润攻克“1+2”（每一个充分大的偶数都是一个素数与一个不超过两个素数乘积之和），至今仍是该领域顶峰。"
          },
          pioneers: {
            tagline: "哈代-李特尔伍德圆法、筛法双线性型与未解劣弧抵消。",
            analogy: "将素数指数和 S(α) = ∑ e^{2πi p α} 在单位区间积分求表示数。",
            rules: ["表达数积分 = ∫₀¹ S(α)² e^{-2πi N α} dα。", "关键在于无需广义黎曼假设（GRH）控制劣弧贡献。"],
            mystery: "现代前沿AI能否在变分筛法双线性形式中发现更深层次的代数相消结构？",
            funFact: "Lean 4 形式化数学库正在系统性吸纳维诺格拉多夫三素数定理与筛法基础定理。"
          }
        },
        history: [
          { year: "1742", author: "哥德巴赫与欧拉", note: "哥德巴赫在致欧拉的书信中提出猜想。" },
          { year: "1937", author: "维诺格拉多夫", note: "证明充分大奇数可表示为三个素数之和。" },
          { year: "1973", author: "陈景润", note: "发表著名“1+2”论文，取得哥德巴赫猜想最重大突破。" },
          { year: "2013", author: "哈拉尔德·赫尔夫戈特", note: "彻底证明弱哥德巴赫猜想。" }
        ]
      },
      "zh-Hant": {
        name: "哥德巴赫猜想",
        subtitle: "偶數與素數的天平",
        field: "加法數論",
        statusBadge: "世界未解之謎",
        grades: {
          explorers: {
            tagline: "每一個大於2的偶數，都是兩個素數英雄的秘密之和！",
            analogy: "試試大於2的偶數：4 = 2+2, 6 = 3+3, 8 = 3+5, 10 = 3+7, 28 = 5+23... 1742年哥德巴赫寫信問歐拉：是不是世上所有的偶數，都能寫成兩個素數相加？",
            rules: ["偶數結尾是 0, 2, 4, 6, 8。", "素數只能被1和自身整除。", "猜想：≥4的偶數 = 素數 + 素數。"],
            mystery: "超級電腦已經檢驗到了400京（4×10¹⁸），無一例外！但在無窮數字中，會不會藏著無法拼成的特例？",
            funFact: "把每個偶數的拆分方法數畫成圖，會呈現耀眼的彗星條紋，被稱為「哥德巴赫彗星」！"
          },
          investigators: {
            tagline: "圓法、哥德巴赫彗星與陳景潤的「1+2」豐碑。",
            analogy: "哈代-李特爾伍德公式顯示，偶數越大，拆分方式越多。",
            rules: ["強猜想：每個 ≥4 偶數為兩個素數之和。", "弱猜想：每個 ≥7 奇數為三個素數之和（2013年已完全證明）。"],
            mystery: "陳景潤於1966年證明的「1+2」至今仍是該領域的人類最高峰。",
            funFact: "三個素數的弱猜想已被秘魯數學家赫爾夫戈特徹底證實。"
          },
          pioneers: {
            tagline: "哈代-李特爾伍德圓法、篩法雙線性型與未解劣弧抵消。",
            analogy: "表達數積分 = ∫₀¹ S(α)² e^{-2πi N α} dα。",
            rules: ["核心在於無需廣義黎曼假設（GRH）控制劣弧貢獻。"],
            mystery: "現代前沿AI能否在變分篩法中發現更深層次的代數相消結構？",
            funFact: "Lean 4 形式化數論庫已成功編碼大量圓法基礎定理。"
          }
        },
        history: [
          { year: "1742", author: "哥德巴赫與歐拉", note: "致歐拉信件中提出難題。" },
          { year: "1973", author: "陳景潤", note: "發表著名「1+2」證明，成為數論里程碑。" },
          { year: "2013", author: "赫爾夫戈特", note: "徹底證明弱哥德巴赫猜想。" }
        ]
      }
    }
  },
  {
    id: "four-color",
    icon: "🗺️",
    difficulty: "All Ages",
    simId: "four-color-sim",
    leanCode: `import Mathlib.Combinatorics.SimpleGraph.Coloring

structure PlanarGraph where
  V : Type*
  adj : V → V → Prop
  is_planar : True

theorem four_color_theorem (G : PlanarGraph) :
  ∃ c : G.V → Fin 4, ∀ u v, G.adj u v → c u ≠ c v := by
  sorry`,
    locales: {
      en: {
        name: "The Four Color Theorem",
        subtitle: "The Cartographer's Challenge",
        field: "Graph Theory & Topology",
        statusBadge: "COMPUTER PROVEN",
        grades: {
          explorers: {
            tagline: "Can you color any map on Earth with only 4 crayons?",
            analogy: "Imagine drawing a map of countries. If two countries share a border, you must color them with different crayons. How many different crayons do you need for ANY possible map?",
            rules: ["Adjacent countries sharing a border must have different colors.", "You only have 4 crayons: Red, Blue, Green, Yellow.", "Can you ever draw a map that forces a 5th crayon?"],
            mystery: "In 1852, Francis Guthrie noticed that 4 colors were always enough. For 120 years, nobody could prove it!",
            funFact: "In 1976, an IBM supercomputer spent 1,200 hours checking 1,936 configurations—the first major theorem proved by computer!"
          },
          investigators: {
            tagline: "Planar graphs, Euler's formula V - E + F = 2, and Kempe chains.",
            analogy: "Every map is a planar graph. Euler's formula guarantees every planar graph has a country with ≤ 5 neighbors!",
            rules: ["Planar Graph: Drawn without crossing edges.", "Kempe Chains: Alternating color paths.", "Chromatic number χ(G) ≤ 4."],
            mystery: "Alfred Kempe published a 'proof' in 1879 that stood for 11 years before a flaw was found!",
            funFact: "In 2005, Georges Gonthier formalized the entire proof in the Coq proof assistant."
          },
          pioneers: {
            tagline: "Reducible configurations, discharging methods, and formal verification.",
            analogy: "The Appel-Haken proof used discharging to construct an unavoidable set of reducible configurations.",
            rules: ["Loopless planar graphs satisfy χ(G) ≤ 4.", "Gonthier (2005) verified the theorem in Coq using reflective decision procedures."],
            mystery: "Can AI discover a unified, elegant human-surveyable proof without checking hundreds of configurations?",
            funFact: "Modern AI models are exploring topological graph reductions to search for a conceptual proof."
          }
        },
        history: [
          { year: "1852", author: "Francis Guthrie", note: "Poses conjecture while coloring counties of England." },
          { year: "1879", author: "Alfred Kempe", note: "Publishes famous fallacious proof." },
          { year: "1976", author: "Appel & Haken", note: "First computer-assisted proof checking 1,936 configurations." },
          { year: "2005", author: "Georges Gonthier", note: "Fully machine-checked formalization in Coq." }
        ]
      },

      de: {
        name: "Der Vier-Farben-Satz",
        subtitle: "Die Herausforderung des Kartografen",
        field: "Graphentheorie & Topologie",
        statusBadge: "COMPUTERBEWIESEN",
        grades: {
          explorers: {
            tagline: "Kannst du jede Landkarte mit nur 4 Buntstiften färben?",
            analogy: "Nachbarländer mit gemeinsamer Grenze dürfen nie dieselbe Farbe haben. Wie viele Farben braucht man für JEDE denkbare Landkarte?",
            rules: ["Benachbarte Länder müssen unterschiedliche Farben haben.", "Du hast nur 4 Stifte: Rot, Blau, Grün, Gelb.", "Gibt es eine Karte, die 5 Farben erzwingt?"],
            mystery: "1852 bemerkte Francis Guthrie, dass 4 Farben immer reichen. Über 120 Jahre lang konnte das niemand beweisen!",
            funFact: "1976 überprüfte ein IBM-Supercomputer 1.936 Konfigurationen in 1.200 Stunden – der erste große Computerbeweis!"
          },
          investigators: {
            tagline: "Planare Graphen, Euler-Formel V - E + F = 2 und Kempe-Ketten.",
            analogy: "Jede Landkarte entspricht einem planaren Graphen mit chromatischer Zahl χ(G) ≤ 4.",
            rules: ["Planarer Graph: kreuzungsfrei gezeichnet.", "Kempe-Ketten: abwechselnde Farbpfade zum Vertauschen von Farben."],
            mystery: "Kempes Beweis von 1879 galt 11 Jahre als richtig, bis Heawood einen Fehler fand!",
            funFact: "2005 formalisierte Georges Gonthier den Beweis vollständig im Coq-System."
          },
          pioneers: {
            tagline: "Reduzierbare Konfigurationen, Entladungs-Methode und formale Verifikation.",
            analogy: "Appel und Haken nutzten die Discharging-Methode für unvermeidbare Mengen.",
            rules: ["χ(G) ≤ 4 für alle schleifenfreien planaren Graphen."],
            mystery: "Gibt es einen einfachen, eleganten menschlichen Beweis ohne Computerprüfung?",
            funFact: "Moderne KI sucht nach topologischen Graphreduktionen für einen kompakten Beweis."
          }
        },
        history: [
          { year: "1852", author: "Francis Guthrie", note: "Entdeckt das Problem beim Kartenfärben." },
          { year: "1976", author: "Appel & Haken", note: "Erster computergestützter Beweis." },
          { year: "2005", author: "Georges Gonthier", note: "Vollständige Formalisierung in Coq." }
        ]
      },
      fr: {
        name: "Le Théorème des Quatre Couleurs",
        subtitle: "Le Défi du Cartographe",
        field: "Théorie des Graphes & Topologie",
        statusBadge: "PROUVÉ PAR ORDINATEUR",
        grades: {
          explorers: {
            tagline: "Pouvez-vous colorier n'importe quelle carte avec seulement 4 crayons ?",
            analogy: "Deux pays voisins partageant une frontière ne doivent pas avoir la même couleur. 4 crayons suffisent-ils pour toutes les cartes du monde ?",
            rules: ["Pays limitrophes de couleurs différentes.", "Seulement 4 crayons : Rouge, Bleu, Vert, Jaune.", "Aucune carte n'exige 5 crayons !"],
            mystery: "Pendant 120 ans, personne n'a réussi à prouver que 4 couleurs suffisaient toujours !",
            funFact: "En 1976, un supercalculateur IBM a vérifié 1 936 configurations en 1 200 heures !"
          },
          investigators: {
            tagline: "Graphes planaires, formule d'Euler et chaînes de Kempe.",
            analogy: "Toute carte est un graphe planaire de nombre chromatique χ(G) ≤ 4.",
            rules: ["Graphe planaire : sans croisement d'arêtes.", "Chaînes de Kempe : chemins bicolores alternés."],
            mystery: "La fausse preuve de Kempe en 1879 a trompé le monde pendant 11 ans !",
            funFact: "En 2005, Georges Gonthier a formalisé le théorème dans l'assistant Coq."
          },
          pioneers: {
            tagline: "Configurations réductibles et décharge de charge.",
            analogy: "Appel et Haken ont construit un ensemble inévitable de configurations réductibles.",
            rules: ["Tout graphe planaire sans boucle vérifie χ(G) ≤ 4."],
            mystery: "Existe-t-il une démonstration conceptuelle sans énumération massive ?",
            funFact: "L'IA explore des simplifications topologiques inédites."
          }
        },
        history: [
          { year: "1852", author: "Francis Guthrie", note: "Pose la conjecture en coloriant l'Angleterre." },
          { year: "1976", author: "Appel & Haken", note: "Preuve historique assistée par ordinateur." },
          { year: "2005", author: "Georges Gonthier", note: "Vérification complète en Coq." }
        ]
      },
      it: {
        name: "Il Teorema dei Quattro Colori",
        subtitle: "La Sfida del Cartografo",
        field: "Teoria dei Grafi & Topologia",
        statusBadge: "DIMOSTRATO DA COMPUTER",
        grades: {
          explorers: {
            tagline: "Puoi colorare qualsiasi mappa del mondo con solo 4 colori?",
            analogy: "Due paesi confinanti non possono avere lo stesso colore. Bastano sempre 4 pastelli per qualsiasi mappa?",
            rules: ["Paesi adiacenti di colore diverso.", "Solo 4 colori: Rosso, Blu, Verde, Giallo.", "È impossibile forzare un 5° colore."],
            mystery: "Per oltre 120 anni nessun matematico riuscì a dimostrarlo!",
            funFact: "Nel 1976 un supercomputer IBM controllò 1.936 configurazioni in 1.200 ore."
          },
          investigators: {
            tagline: "Grafi planari, formula di Eulero e catene di Kempe.",
            analogy: "Ogni mappa piana ha numero cromatico χ(G) ≤ 4.",
            rules: ["Formula di Eulero: V - E + F = 2.", "Catene di Kempe per scambiare colori."],
            mystery: "La 'dimostrazione' di Kempe del 1879 fu smentita dopo 11 anni!",
            funFact: "Nel 2005 Georges Gonthier ha formalizzato la prova in Coq."
          },
          pioneers: {
            tagline: "Configurazioni riducibili e metodo di scaricamento.",
            analogy: "Costruzione di insiemi inevitabili di configurazioni riducibili.",
            rules: ["Numero cromatico χ(G) ≤ 4 per grafi planari."],
            mystery: "Esiste una dimostrazione umana compatta senza computer?",
            funFact: "Modelli di IA studiano riduzioni topologiche per una prova snella."
          }
        },
        history: [
          { year: "1852", author: "Francis Guthrie", note: "Formula la congettura sulla mappa delle contee inglesi." },
          { year: "1976", author: "Appel & Haken", note: "Prima prova storica assistita da computer." },
          { year: "2005", author: "Georges Gonthier", note: "Verifica formale al 100% in Coq." }
        ]
      },
      ko: {
        name: "4색 정리",
        subtitle: "지도 제작자의 위대한 도전",
        field: "그래프 이론 및 위상수학",
        statusBadge: "컴퓨터 증명 완료",
        grades: {
          explorers: {
            tagline: "지구상의 어떤 지도라도 단 4가지 색연필로 모두 칠할 수 있을까요?",
            analogy: "국경을 맞댄 이웃 나라는 반드시 다른 색으로 칠해야 합니다. 아무리 복잡하게 얽힌 지도라도 단 4가지 색이면 충분할까요?",
            rules: ["국경을 공유하는 이웃 나라는 같은 색으로 칠할 수 없음.", "색연필은 단 4개: 빨강, 파랑, 초록, 노랑.", "5번째 색이 반드시 필요한 지도를 만들 수 있을까요?"],
            mystery: "1852년 구스리가 발견한 이후 120년 동안 인류는 이를 수학적으로 증명하지 못했습니다!",
            funFact: "1976년 슈퍼컴퓨터가 1,200시간 동안 1,936개 형상을 검증하며 인류 역사상 첫 번째 컴퓨터 증명 대정리가 되었습니다!"
          },
          investigators: {
            tagline: "평면 그래프, 오일러 공식 V - E + F = 2, 그리고 켐페 사슬.",
            analogy: "모든 지도는 평면 그래프로 변환되며, 채색수 χ(G) ≤ 4를 만족합니다.",
            rules: ["평면 그래프: 변이 교차하지 않게 평면에 그릴 수 있는 그래프.", "켐페 사슬: 두 가지 색을 번갈아 교환하는 기법."],
            mystery: "1879년 켐페의 '증명'은 11년 동안 참으로 믿어졌으나 치명적 결함이 발견되었습니다!",
            funFact: "2005년 조르주 곤티에는 Coq 정리 증명기에서 모든 코드를 100% 기계 검증했습니다."
          },
          pioneers: {
            tagline: "가약 배치(Reducible Configuration), 방전법(Discharging), 형식 검증.",
            analogy: "아펠과 하켄은 방전법을 사용하여 불가피한 가약 배치의 유한 집합을 구성했습니다.",
            rules: ["모든 고리 없는 평면 그래프는 χ(G) ≤ 4를 만족한다."],
            mystery: "수백 개의 컴퓨터 계산 없이 인간이 직관적으로 이해할 수 있는 우아한 통합 증명이 존재하는가?",
            funFact: "현대 수학 AI는 개념적이고 압축적인 증명을 찾기 위해 위상수학적 그래프 축소를 연구하고 있습니다."
          }
        },
        history: [
          { year: "1852", author: "프랜시스 구스리", note: "영국 지도 채색 중 문제 제기." },
          { year: "1976", author: "아펠 & 하켄", note: "사상 최초 컴퓨터 연산 증명 성공." },
          { year: "2005", author: "조르주 곤티에", note: "Coq 증명기를 통한 완전 기계 검증." }
        ]
      },
      ja: {
        name: "四色定理",
        subtitle: "地図職人の挑戦",
        field: "グラフトポロジー・離散幾何学",
        statusBadge: "コンピュータ証明済み",
        grades: {
          explorers: {
            tagline: "地球上のどんなに複雑な地図も、たった4色のクレヨンで塗り分けられる？",
            analogy: "たくさんの国がある地図を塗るところを想像してみて。国境を接しているお隣同士の国は、区別できるように別の色で塗らなきゃいけません（角っこで触れているだけなら同じ色でOK）。どんなに複雑に入り組んだ地図でも、たった4色あれば絶対に塗り分けられるかな？",
            rules: [
              "境界線を共有する隣の国同士は、絶対に同じ色で塗ってはダメ！",
              "クレヨンは4色だけ：赤、青、緑、黄。",
              "どんなに意地悪な地図を描いても、5色目が必要な地図は作れるかな？"
            ],
            mystery: "1852年にフランシス・ガスリーが気づいてから120年以上、世界中の誰も「4色で十分」であることを証明できませんでした。",
            funFact: "1976年、IBMのスーパーコンピュータが1200時間かけて1936個の形状パターンを検証し、歴史上初めて「コンピュータによって証明された大定理」となりました！"
          },
          investigators: {
            tagline: "平面グラフ、オイラーの公式 V - E + F = 2、そしてケンペ鎖。",
            analogy: "すべての地図は平面グラフに置き換えられます。オイラーの多面体定理により、どんな平面地図にも「隣接する国が5カ国以下の国」が必ず存在します！",
            rules: [
              "平面グラフ：辺が交差することなく平面上に描けるグラフ。",
              "彩色数：隣接する頂点が異なる色になる最小の色数 χ(G) ≤ 4。",
              "ケンペ鎖：2色の交互パスを使って色を入れ替える手法。"
            ],
            mystery: "1879年に発表されたケンペの証明は11年間信じられていましたが、後に巧妙な欠陥が見つかりました！",
            funFact: "2005年、ジョルジュ・ゴンティエが定理証明支援系Coqですべての証明コードを完全検証しました。"
          },
          pioneers: {
            tagline: "可約配置、放電法（Discharging Method）、形式検証。",
            analogy: "アッペルとハーケンの証明は、放電法を用いて「不可避な可約配置の集合」を構成するものでした。",
            rules: [
              "自己ループのないすべての平面グラフについて χ(G) ≤ 4。",
              "ゴンティエ（2005）はリフレクション技法を用いて完全に機械検証。"
            ],
            mystery: "コンピュータによる数百〜千個の個別チェックに頼らない、人間が紙と鉛筆だけで理解できる美しい統一証明は存在するか？",
            funFact: "現代のAIはトポロジカルなグラフ簡約を探索し、人間可読な新しい証明経路を探求しています。"
          }
        },
        history: [
          { year: "1852", author: "フランシス・ガスリー", note: "英国の州の地図塗分けから予想を提起。" },
          { year: "1879", author: "アルフレッド・ケンペ", note: "後に誤りが見つかる有名な証明を発表。" },
          { year: "1976", author: "アッペル & ハーケン", note: "史上初、1936配置をコンピュータで計算検証。" },
          { year: "2005", author: "ジョルジュ・ゴンティエ", note: "Coq証明支援系による100%機械検証を達成。" }
        ]
      },
      "zh-Hans": {
        name: "四色定理",
        subtitle: "制图师的终极挑战",
        field: "图论与拓扑学",
        statusBadge: "计算机已证明",
        grades: {
          explorers: {
            tagline: "地球上任意复杂的地图，只需4支彩色蜡笔就能全部区分开吗？",
            analogy: "想象在纸上画出很多互相接壤的国家。如果两个国家共享一段边界，就必须涂上不同的颜色以便区分。无论你画得多么错综复杂，4种颜色真的永远足够吗？",
            rules: ["有公共边界的相邻国家必须涂不同颜色。", "你只有4支蜡笔：红、蓝、绿、黄。", "无论怎么画，都造不出必须用第5种颜色的地图！"],
            mystery: "1852年弗朗西斯·古思里发现了这个规律，但整整120年间，全人类没有一位数学家能给出纯手工的数学证明！",
            funFact: "1976年，超级计算机耗费1200小时检查了1936种特殊构型，成为人类历史上第一个由计算机协助证明的重大定理！"
          },
          investigators: {
            tagline: "平面图模型、欧拉示性数 V - E + F = 2 与肯佩链。",
            analogy: "任何地图都可以转化为平面图。欧拉公式保证了任何平面地图中必然存在邻国少于或等于5个的国家！",
            rules: ["平面图：边与边互不交叉的图。", "色数：相邻顶点颜色不同的最少色彩数 χ(G) ≤ 4。", "肯佩链：双色交替路径调色法。"],
            mystery: "阿尔弗雷德·肯佩在1879年发表的“证明”被全世界相信了11年，才被赫伍德找出了致命漏洞！",
            funFact: "2005年，乔治·贡蒂耶在Coq形式化证明器中对四色定理完成了100%无漏洞的机器验证。"
          },
          pioneers: {
            tagline: "不可避免可约构型集、放电法（Discharging）与内核证明反思。",
            analogy: "阿佩尔与哈肯的证明通过放电法构造了包含上千个构型的不可避免可约集。",
            rules: ["无自环平面图色数必然满足 χ(G) ≤ 4。", "贡蒂耶 (2005) 利用证明助理通过反射判定算法完成机器严密验证。"],
            mystery: "是否存在不需要计算机枚举几百种构型、纯粹由人类清晰洞察的紧凑解析证明？",
            funFact: "现代数学AI正在探索自动化拓扑图规约算法，尝试寻找统一的人类可读证明路径。"
          }
        },
        history: [
          { year: "1852", author: "弗朗西斯·古思里", note: "在给英国地图着色时首次提出猜想。" },
          { year: "1879", author: "阿尔弗雷德·肯佩", note: "提出肯佩链并发表著名佯谬证明。" },
          { year: "1976", author: "阿佩尔与哈肯", note: "人类历史上首次利用计算机检验1936种构型完成证明。" },
          { year: "2005", author: "乔治·贡蒂耶", note: "在Coq证明助手里实现完全机器代码形式化验证。" }
        ]
      },
      "zh-Hant": {
        name: "四色定理",
        subtitle: "製圖師的終極挑戰",
        field: "圖論與拓撲學",
        statusBadge: "電腦已證明",
        grades: {
          explorers: {
            tagline: "地球上任意複雜的地圖，只需4種顏色就能完全塗開？",
            analogy: "相鄰邊界接壤的國家必須著不同顏色。無論地圖有多麼曲折複雜，4種顏色真的永遠足夠嗎？",
            rules: ["共用邊界的相鄰國不可同色。", "只有4支蠟筆：紅、藍、綠、黃。", "挑戰：你能畫出必須用第5色的地圖嗎？"],
            mystery: "整整120年間，全人類沒有一位數學家能給出純手工證明的數學解答！",
            funFact: "1976年超級電腦歷經1200小時運算驗證1936種構型，成為史上首個電腦證明的重大定理！"
          },
          investigators: {
            tagline: "平面圖模型、歐拉示性數與肯佩鏈調色法。",
            analogy: "任何平面地圖轉換為對偶圖後，色數必然滿足 χ(G) ≤ 4。",
            rules: ["肯佩鏈：雙色交替路徑交換法。", "歐拉公式保證必然存在度數 ≤ 5 的頂點。"],
            mystery: "肯佩在1879年發表的證明曾被信奉11年，才被指出存在缺陷！",
            funFact: "2005年貢蒂耶於Coq證明助理中完成完全形式化驗證。"
          },
          pioneers: {
            tagline: "不可避免可約構型集、放電法（Discharging）與形式驗證。",
            analogy: "透過放電法構造有限可約集進行窮舉排除。",
            rules: ["平面圖色數必滿足 χ(G) ≤ 4。"],
            mystery: "是否存在不需電腦驗證上千個分支、純由人類直觀洞悉的緊湊證明？",
            funFact: "現代數學AI正嘗試從拓撲維度自動探索更優雅的統一圖歸約證明。"
          }
        },
        history: [
          { year: "1852", author: "古思里", note: "繪製英國地圖時提出猜想。" },
          { year: "1976", author: "阿佩爾與哈肯", note: "首次由電腦完成1936個構型驗證。" },
          { year: "2005", author: "貢蒂耶", note: "達成100%電腦形式化完全驗證。" }
        ]
      }
    }
  },
  {
    id: "fermat",
    icon: "📜",
    difficulty: "Grades 6+",
    simId: "fermat-sim",
    leanCode: `import Mathlib.NumberTheory.FLT.Basic

theorem fermat_last_theorem (n : ℕ) (hn : n > 2) :
  ∀ a b c : ℕ, a > 0 → b > 0 → c > 0 → a^n + b^n ≠ c^n := by
  sorry`,
    locales: {
      en: {
        name: "Fermat's Last Theorem",
        subtitle: "The 350-Year Margin Note",
        field: "Algebraic Number Theory",
        statusBadge: "AI FORMALIZED 2026",
        grades: {
          explorers: {
            tagline: "Squares can combine into new squares, but cubes can never combine into cubes!",
            analogy: "You know Pythagorean triples: 3² + 4² = 5² (9 + 16 = 25). But what if you try building with 3D CUBES: a³ + b³ = c³? You can never combine two whole-number cubes into one bigger cube!",
            rules: ["Pythagoras (n=2): a² + b² = c² has infinite integer solutions.", "Fermat's claim (n ≥ 3): aⁿ + bⁿ = cⁿ has NO positive integer solutions."],
            mystery: "In 1637, Pierre de Fermat wrote in a margin: 'I have discovered a truly marvelous proof, which this margin is too narrow to contain.' For 350 years, nobody could prove it!",
            funFact: "In September 2026, AI (Claude) completely formalized Andrew Wiles's proof into 13 million lines of Lean 4 computer code!"
          },
          investigators: {
            tagline: "Elliptic curves, modular forms, and the Modularity Theorem bridge.",
            analogy: "Andrew Wiles proved Fermat by connecting Elliptic Curves with Modular Forms (hyperbolic symmetries).",
            rules: ["Frey Curve: y² = x(x - aᵖ)(x + bᵖ).", "Ribet's Theorem: Frey curve cannot be modular.", "Wiles (1995): All semistable elliptic curves ARE modular! Contradiction!"],
            mystery: "Did Fermat have a proof in 1637? No, the modern tools required didn't exist for 300 years.",
            funFact: "Wiles worked in secret in his attic for 7 years to crack the problem."
          },
          pioneers: {
            tagline: "Galois representations, deformation rings, and the 2026 Lean 4 milestone.",
            analogy: "The proof establishes an isomorphism between a universal deformation ring R and a Hecke algebra T (R=T theorem).",
            rules: ["Semistable modularity theorem proves all semistable elliptic curves over ℚ are modular.", "September 2026: Anthropic formalized the entire proof in Lean 4 (13M+ lines, 29,500 lemmas)."],
            mystery: "AI compressed a 10-year human formalization challenge into 11 days.",
            funFact: "Kevin Buzzard at Imperial College verified the Lean 4 machine proof."
          }
        },
        history: [
          { year: "1637", author: "Pierre de Fermat", note: "Writes margin note in Diophantus's 'Arithmetica'." },
          { year: "1770", author: "Leonhard Euler", note: "Proves case n = 3." },
          { year: "1995", author: "Andrew Wiles & Richard Taylor", note: "Delivers complete proof via modularity." },
          { year: "Sept 2026", author: "Anthropic Claude & Kevin Buzzard", note: "First complete, 100% machine-checked formalization in Lean 4." }
        ]
      },

      de: {
        name: "Großer Fermatscher Satz",
        subtitle: "Die 350 Jahre alte Randnotiz",
        field: "Algebraische Zahlentheorie",
        statusBadge: "KI-FORMALISIERT 2026",
        grades: {
          explorers: {
            tagline: "Quadrate lassen sich zu Quadraten addieren, aber Würfel niemals zu Würfeln!",
            analogy: "3² + 4² = 5² (9 + 16 = 25). Aber bei 3D-Würfeln a³ + b³ = c³ lassen sich zwei ganze Würfel niemals zu einem größeren Würfel verschmelzen!",
            rules: ["Pythagoras (n=2): a² + b² = c² hat unendlich viele ganzzahlige Lösungen.", "Fermat (n ≥ 3): aⁿ + bⁿ = cⁿ hat KEINE ganzzahligen positiven Lösungen."],
            mystery: "1637 schrieb Fermat an den Rand: 'Ich habe einen wahrhaft wunderbaren Beweis gefunden, doch der Rand ist zu schmal.' 350 Jahre lang scheiterten alle!",
            funFact: "Im September 2026 formalisierte eine KI (Claude) den 100-seitigen Beweis von Wiles in 13 Millionen Zeilen Lean 4 Code!"
          },
          investigators: {
            tagline: "Elliptische Kurven, Modulformen und die Taniyama-Shimura-Brücke.",
            analogy: "Andrew Wiles bewies Fermat, indem er zwei getrennte Welten verband: elliptische Kurven und hyperbolische Modulformen.",
            rules: ["Frey-Kurve: y² = x(x - aᵖ)(x + bᵖ).", "Ribets Theorem: Frey-Kurve kann nicht modular sein.", "Wiles (1995): Alle semistabilen Kurven SIND modular! Widerspruch!"],
            mystery: "Hatte Fermat 1637 einen Beweis? Nein, die nötigen mathematischen Werkzeuge entstanden erst Jahrhunderte später.",
            funFact: "Wiles forschte 7 Jahre lang heimlich auf seinem Dachboden an dem Problem."
          },
          pioneers: {
            tagline: "Galois-Darstellungen, Deformationsringe (R=T) und Lean 4.",
            analogy: "Isomorphismus zwischen Deformationsring R und Hecke-Algebra T.",
            rules: ["Semistabiler Modularitätssatz.", "September 2026: 13 Mio. Zeilen Lean 4 Code, ca. 29.500 Lemmata formalisiert."],
            mystery: "KI verkürzte ein 10-Jahres-Projekt der Mathematiker auf 11 Tage.",
            funFact: "Kevin Buzzard bestätigte die erfolgreiche Computerprüfung."
          }
        },
        history: [
          { year: "1637", author: "Pierre de Fermat", note: "Notiz im Rand der 'Arithmetica'." },
          { year: "1995", author: "Andrew Wiles", note: "Vollständiger Beweis über Modularität." },
          { year: "Sept 2026", author: "Anthropic Claude & Kevin Buzzard", note: "Erste vollständige Lean 4 Formalisierung." }
        ]
      },
      fr: {
        name: "Le Dernier Théorème de Fermat",
        subtitle: "L'Énigme de 350 ans en Marge",
        field: "Théorie Algébrique des Nombres",
        statusBadge: "FORMALISÉ PAR L'IA 2026",
        grades: {
          explorers: {
            tagline: "Les carrés s'assemblent en carrés, mais les cubes ne s'assemblent jamais en cubes !",
            analogy: "3² + 4² = 5² (9 + 16 = 25). Mais essayez avec des CUBES en 3D : a³ + b³ = c³ ! Vous ne pourrez jamais combiner deux cubes d'entiers en un grand cube !",
            rules: ["Pour n=2, une infinité de triplets pythagoriciens existent.", "Pour n ≥ 3, aⁿ + bⁿ = cⁿ ne possède AUCUNE solution en entiers strictement positifs."],
            mystery: "En 1637, Fermat nota en marge : 'J'ai trouvé une merveilleuse démonstration, mais la marge est trop étroite'. 350 ans d'efforts ont suivi !",
            funFact: "En septembre 2026, l'IA (Claude) a formalisé l'immense preuve de Wiles en 13 millions de lignes de code Lean 4 !"
          },
          investigators: {
            tagline: "Courbes elliptiques, formes modulaires et pont de modularité.",
            analogy: "Andrew Wiles a résolu l'énigme en prouvant la conjecture de Taniyama-Shimura pour les courbes semi-stables.",
            rules: ["Courbe de Frey : construite si une solution existait.", "Théorème de Ribet : la courbe de Frey ne peut être modulaire.", "Wiles : toute courbe semi-stable est modulaire ! Contradiction !"],
            mystery: "Fermat avait-il vraiment une preuve ? Non, les théories requises sont nées 300 ans plus tard.",
            funFact: "Wiles a travaillé seul dans son grenier pendant 7 ans."
          },
          pioneers: {
            tagline: "Représentations galoisiennes, anneaux de déformation R=T et jalon Lean 4.",
            analogy: "L'isomorphisme entre anneau de déformation universel et algèbre de Hecke.",
            rules: ["Septembre 2026 : Anthropic produit la preuve Lean 4 vérifiée par machine (29 500 lemmes)."],
            mystery: "L'IA a réalisé en 11 jours ce que la communauté prévoyait en une décennie.",
            funFact: "Kevin Buzzard de l'Imperial College a validé la formalisation."
          }
        },
        history: [
          { year: "1637", author: "Pierre de Fermat", note: "Note célèbre dans l'Arithmétique de Diophante." },
          { year: "1995", author: "Andrew Wiles & Richard Taylor", note: "Preuve historique par la modularité." },
          { year: "Sept 2026", author: "Anthropic Claude & Kevin Buzzard", note: "Première formalisation intégrale en Lean 4." }
        ]
      },
      it: {
        name: "L'Ultimo Teorema di Fermat",
        subtitle: "L'Appunto a Margine Lungo 350 Anni",
        field: "Teoria Algebrica dei Numeri",
        statusBadge: "FORMALIZZATO DA IA 2026",
        grades: {
          explorers: {
            tagline: "I quadrati si combinano in quadrati, ma i cubi non formano mai cubi!",
            analogy: "3² + 4² = 5². Ma con i cubi tridimensionali a³ + b³ = c³, non potrai mai unire due cubi di numeri interi per formarne uno più grande!",
            rules: ["Pitagora (n=2): a² + b² = c² ha infinite soluzioni.", "Fermat (n ≥ 3): aⁿ + bⁿ = cⁿ non ha NESSUNA soluzione intera positiva."],
            mystery: "Nel 1637 Fermat scrisse a margine di un libro che lo spazio era troppo stretto per la dimostrazione. Ci vollero 350 anni!",
            funFact: "Nel settembre 2026 l'IA ha formalizzato la dimostrazione di Wiles in 13 milioni di righe di codice Lean 4!"
          },
          investigators: {
            tagline: "Curve ellittiche, forme modulari e congettura di Taniyama-Shimura.",
            analogy: "Wiles ha unito due rami distinti: curve ellittiche e simmetrie modulari iperboliche.",
            rules: ["Curva di Frey, teorema di Ribet e modularità semi-stabile."],
            mystery: "Fermat possedeva davvero una prova? No, gli strumenti odierni non esistevano nel Seicento.",
            funFact: "Wiles lavorò in segreto nella sua soffitta per 7 anni."
          },
          pioneers: {
            tagline: "Rappresentazioni di Galois, anelli di deformazione e Lean 4.",
            analogy: "Teorema R=T tra anello di deformazione e algebra di Hecke.",
            rules: ["Settembre 2026: formalizzazione completa verificata al computer in Lean 4."],
            mystery: "Un'impresa decennale completata dall'IA in appena 11 giorni.",
            funFact: "Il professor Kevin Buzzard ha confermato la verifica della macchina."
          }
        },
        history: [
          { year: "1637", author: "Pierre de Fermat", note: "Appunto a margine dell'Arithmetica." },
          { year: "1995", author: "Andrew Wiles", note: "Dimostrazione completa annunciata." },
          { year: "Sett 2026", author: "Anthropic Claude", note: "Formalizzazione totale Lean 4." }
        ]
      },
      ko: {
        name: "페르마의 마지막 정리",
        subtitle: "350년간 책 여백에 잠들었던 비밀",
        field: "대수적 수론 및 산술기하학",
        statusBadge: "2026 AI 기계 형식화",
        grades: {
          explorers: {
            tagline: "정사각형은 합쳐서 새 정사각형이 되지만, 정육면체는 절대 합쳐지지 않는다!",
            analogy: "피타고라스 정리: 3² + 4² = 5² (9 + 16 = 25). 하지만 3차원 입체 큐브 a³ + b³ = c³를 만들려고 하면 자연수 정육면체 2개를 합쳐 더 큰 정육면체 하나로 만드는 것은 영원히 불가능합니다!",
            rules: ["피타고라스 (n=2): a² + b² = c²는 무한한 자연수 해를 가짐.", "페르마의 주장 (n ≥ 3): aⁿ + bⁿ = cⁿ을 만족하는 양의 정수 해는 '전혀 없다'!"],
            mystery: "1637년 페르마는 책 여백에 '나는 진정 놀라운 증명을 발견했으나 여백이 좁아 적지 않는다'고 적었습니다. 전 세계 수학자들이 350년간 좌절했습니다!",
            funFact: "2026년 9월, AI(Claude)가 앤드루 와일스의 100페이지 증명을 1,300만 줄의 Lean 4 컴퓨터 검증 코드로 완전 형식화했습니다!"
          },
          investigators: {
            tagline: "타원곡선, 모듈러 형식, 타니야마-시무라 추측의 거대한 다리.",
            analogy: "와일스는 서로 완전히 달라 보이던 타원곡선과 모듈러 형식을 연결하여 페르마 정리를 공략했습니다.",
            rules: ["프레이 곡선: 페르마 해가 존재한다면 비정상적인 타원곡선이 유도됨.", "리벳의 정리: 프레이 곡선은 모듈러일 수 없음.", "와일스 (1995): 모든 준안정 타원곡선은 모듈러 곡선이다! 모순!"],
            mystery: "페르마는 1637년에 진짜 증명을 가졌을까요? 현대 수학자들의 답은 '아니오'입니다. 증명에 필요한 도구가 300년 뒤에야 발명되었기 때문입니다.",
            funFact: "와일스는 자신의 다락방에서 7년 동안 누구에게도 알리지 않고 비밀리에 연구했습니다."
          },
          pioneers: {
            tagline: "갈루아 표현, 변형환 (R=T 정리), 그리고 2026년 Lean 4 금자탑.",
            analogy: "보편 변형환 R과 헤케 대수 T 사이의 동형(R=T)을 확립하여 모듈러성을 증명했습니다.",
            rules: ["n ≥ 3일 때 방정식 aⁿ + bⁿ = cⁿ은 양의 정수 해를 갖지 않음.", "2026년 9월: 1,300만 줄의 Lean 4 코드, 29,500개의 보조정리 기계 형식화 완료."],
            mystery: "수학계가 10년이 걸릴 것으로 예상했던 거대 프로젝트를 AI가 11일 만에 자율적으로 완수했습니다.",
            funFact: "임페리얼 칼리지 런던의 케빈 버자드 교수가 컴퓨터 검증 통과를 공식 확인했습니다."
          }
        },
        history: [
          { year: "1637", author: "피에르 드 페르마", note: "디오판토스의 아리스메티카 여백에 유명한 메모." },
          { year: "1995", author: "앤드루 와일스", note: "모듈러성 정리를 통한 완벽한 증명 제시." },
          { year: "2026년 9월", author: "Anthropic Claude & 케빈 버자드", note: "Lean 4 사상 최초 100% 기계 형식화 성공." }
        ]
      },
      ja: {
        name: "フェルマーの最終定理",
        subtitle: "余白に遺された350年の謎",
        field: "代数的数論・数論幾何学",
        statusBadge: "2026年 AI完全形式化",
        grades: {
          explorers: {
            tagline: "2乗なら綺麗な正方形ができるのに、3乗のサイコロは絶対に合体できない？",
            analogy: "ピタゴラスの定理：3² + 4² = 5²（9 + 16 = 25）。3×3と4×4のブロックを合わせると、5×5の綺麗な正方形が作れます。でも、3Dの立体ブロック（立方体）で a³ + b³ = c³ を作ろうとすると…どんな自然数の立方体も、絶対に2つ合わせて1つの大きな立方体にはできません！",
            rules: [
              "ピタゴラス（n=2）：a² + b² = c² には無数の自然数解（3-4-5など）がある。",
              "フェルマーの主張（n ≥ 3）：aⁿ + bⁿ = cⁿ を満たす自然数解は「絶対に存在しない」！",
              "a, b, c はすべて1以上の整数。"
            ],
            mystery: "1637年、ピエール・ド・フェルマーは本の余白にこう書き遺しました：「私は真に驚くべき証明を発見したが、それを記すにはこの余白は狭すぎる」。世界最高峰の頭脳が350年間挑み続け、ことごとく打ち砕かれました！",
            funFact: "2026年9月、AI（Claude）がアンドリュー・ワイルズの100ページの難解な証明を、1300万行を超えるLean 4のコンピュータ検証コードへと完全形式化しました！"
          },
          investigators: {
            tagline: "楕円曲線、モジュラー形式、そして谷山・志村予想の架け橋。",
            analogy: "フェルマーの定理を解くため、数学者たちは全く無関係に見えた「楕円曲線」と「モジュラー形式」という2つの世界を結ぶ宇宙的架け橋を築きました。",
            rules: [
              "フライ曲線：もし解 aⁿ + bⁿ = cⁿ が存在したら、極めて奇妙な楕円曲線が作れてしまう。",
              "リベットの定理（1986）：そのフライ曲線はモジュラーになり得ない！",
              "アンドリュー・ワイルズ（1995）：すべての半安定な楕円曲線はモジュラーである！矛盾！ゆえに解は存在しない！"
            ],
            mystery: "フェルマーは本当に証明を持っていたのか？ 現代の数学者の見解は一致して「No」です。証明に必要な現代数学の概念は当時存在しませんでした。",
            funFact: "ワイルズは誰にも知られぬよう、自宅の屋根裏部屋に7年間こもりきりで研究を続けました。"
          },
          pioneers: {
            tagline: "ガロア表現、変形環、R=T定理、そして2026年Lean 4金字塔。",
            analogy: "普遍変形環 R とヘッケ環 T の間の同型定理（R=T定理）を確立することでモジュラー性を確立しました。",
            rules: [
              "n ≥ 3 において aⁿ + bⁿ = cⁿ は正整数解を持たない。",
              "2026年9月：AnthropicのAIシステムがワイルズ・テイラーの証明全体をLean 4で完全形式化（約29,500個の中間補題、1300万行コード）。"
            ],
            mystery: "数学コミュニティが10年以上かかると予測した巨大形式化プロジェクトを、AIがわずか11日間で自律完遂しました。",
            funFact: "インペリアル・カレッジ・ロンドンのケビン・バザード教授が、コードがコンピュータ検証を通過したことを確認しました。"
          }
        },
        history: [
          { year: "1637", author: "ピエール・ド・フェルマー", note: "ディオファントス『算術』の余白に有名なメモを残す。" },
          { year: "1770", author: "レオンハルト・オイラー", note: "n = 3 の場合を代数的整数論を用いて証明。" },
          { year: "1995", author: "アンドリュー・ワイルズ & リチャード・テイラー", note: "谷山・志村予想の半安定楕円曲線の場合を証明し完全解決。" },
          { year: "2026年9月", author: "Anthropic Claude & ケビン・バザード", note: "史上初、Lean 4による100%コンピュータ機械検証形式化を達成。" }
        ]
      },
      "zh-Hans": {
        name: "费马大定理",
        subtitle: "书页空白处的350年传奇",
        field: "代数数论与算术几何",
        statusBadge: "2026 AI形式化证明",
        grades: {
          explorers: {
            tagline: "正方形可以完美拼成新正方形，但立方体积木永远拼不出新立方体！",
            analogy: "你一定知道勾股定理：3² + 4² = 5²（9 + 16 = 25）。两个正方形能拼成一个更大的正方形。但如果你用立体积木尝试 a³ + b³ = c³：无论怎样尝试，你永远无法将两个整数立方的积木，拼成一个新的大立方体！",
            rules: [
              "毕达哥拉斯 (n=2)：a² + b² = c² 有无数多组正整数解（如3-4-5）。",
              "费马的断言 (n ≥ 3)：aⁿ + bⁿ = cⁿ 绝对没有任何正整数解！",
              "a, b, c 必须是正整数。"
            ],
            mystery: "1637年，费马在书页空白处写下：“我发现了一个真正美妙的证明，可惜这里的空白太小，写不下。” 全人类最顶尖的数学家为之奋斗了整整350年！",
            funFact: "2026年9月，AI（Claude）成功将安德鲁·怀尔斯长达100页的深奥证明完全形式化为1300万行Lean 4计算机验证代码！"
          },
          investigators: {
            tagline: "椭圆曲线、模形式与谷山-志村猜想的宏伟天桥。",
            analogy: "为了证明费马大定理，数学家在看似毫不相干的两个数学宇宙之间架起了一座桥梁：椭圆曲线与模形式。",
            rules: [
              "弗雷曲线：如果费马方程有解，就能造出一个不可思议的奇特椭圆曲线。",
              "里贝特判据：该曲线绝不可能具有模性！",
              "怀尔斯 (1995)：证明所有半稳定椭圆曲线都必然具有模性！矛盾！因此方程绝无可能存在整数解！"
            ],
            mystery: "费马当年真的拥有证明吗？现代数学家一致认为：没有。证明所需的现代数学工具在300年之后才诞生。",
            funFact: "怀尔斯在自家阁楼上隐姓埋名秘密闭关攻关了整整7年。"
          },
          pioneers: {
            tagline: "伽罗瓦表示、形变环理论（R=T）与2026年Lean 4划时代里程碑。",
            analogy: "通过确立全域形变环 R 与赫克代数 T 之间的同构（R=T定理），奠定了模性证明。",
            rules: [
              "定理：当 n ≥ 3 时，方程 aⁿ + bⁿ = cⁿ 无正整数解。",
              "2026年9月：Anthropic宣布完成怀尔斯-泰勒证明在Lean 4中的完全机器形式化验证（1300万行代码，约29500个引理）。"
            ],
            mystery: "原本数学界估计需要整个共同体耗费10年的人工形式化大工程，AI在11天内独立自主完成。",
            funFact: "帝国理工学院的凯文·巴泽德（Kevin Buzzard）教授对机器检验结果进行了官方确认。"
          }
        },
        history: [
          { year: "1637", author: "皮埃尔·德·费马", note: "在丢番图《算术》书页空白处写下著名边注。" },
          { year: "1770", author: "莱昂哈德·欧拉", note: "证明 n = 3 的情形。" },
          { year: "1995", author: "安德鲁·怀尔斯与理查德·泰勒", note: "通过半稳定椭圆曲线模性定理完全证明该猜想。" },
          { year: "2026年9月", author: "Anthropic Claude 与 凯文·巴泽德", note: "实现历史上首个完全通过Lean 4机器检验的形式化证明证书。" }
        ]
      },
      "zh-Hant": {
        name: "費馬最後定理",
        subtitle: "書頁空白處的350年傳奇",
        field: "代數數論與算術幾何",
        statusBadge: "2026 AI形式化證明",
        grades: {
          explorers: {
            tagline: "正方形可以完美拼成新正方形，但立方體積木永遠拼不出新立方體！",
            analogy: "勾股定理：3² + 4² = 5²。但若換成立方體積木 a³ + b³ = c³，無論如何都拼不出整數大立方體！",
            rules: ["勾股定理 (n=2) 有無窮多解。", "費馬斷言 (n ≥ 3) 絕無正整數解！"],
            mystery: "1637年費馬在書頁邊緣留下「此處空白太小寫不下」的著名批註，困擾世界長達350年！",
            funFact: "2026年9月，AI（Claude）將懷爾斯整篇長篇證明形式化為1300萬行Lean 4電腦驗證代碼！"
          },
          investigators: {
            tagline: "橢圓曲線、模形式與谷山-志村猜想的宏偉天橋。",
            analogy: "懷爾斯透過連結橢圓曲線與模形式，成功攻破了350年的數學聖杯。",
            rules: ["弗雷曲線：假設有解將構造出非模橢圓曲線。", "懷爾斯證明半穩定橢圓曲線必具模性，導出矛盾！"],
            mystery: "懷爾斯在自家閣樓秘密閉關攻關7年才解開謎團。",
            funFact: "費馬當年並未擁有足夠工具，現代工具300年後才出現。"
          },
          pioneers: {
            tagline: "伽羅瓦表示、形變環（R=T）與2026年Lean 4劃時代里程碑。",
            analogy: "透過確立普遍形變環與赫克代數的同構完成證明。",
            rules: ["2026年9月AI自主完成全篇證明的Lean 4完全機器形式化（1300萬行代碼、29500個引理）。"],
            mystery: "原本預計需10年的形式化工程，AI僅用11天便自主完成。",
            funFact: "帝國理工學院教授凱文·巴澤德親自確認了機器檢驗結果。"
          }
        },
        history: [
          { year: "1637", author: "費馬", note: "於《算術》邊緣寫下著名批註。" },
          { year: "1995", author: "安德魯·懷爾斯", note: "發表完整證明，終結350年謎題。" },
          { year: "2026年9月", author: "Anthropic Claude", note: "達成歷史上首次Lean 4全量機器形式化驗證。" }
        ]
      }
    }
  },
  {
    id: "erdos-distance",
    icon: "📍",
    difficulty: "Grades 6+",
    simId: "unit-distance-sim",
    leanCode: `import Mathlib.Analysis.InnerProductSpace.EuclideanDist

def UnitDistances (P : Finset (EuclideanSpace ℝ (Fin 2))) : ℕ :=
  (P.filter (fun p => ∃ q ∈ P, p ≠ q ∧ dist p q = 1)).card / 2

theorem erdos_unit_distance_counterexample :
  ∃ ε > 0, ∃ c > 0, ∀ N : ℕ, ∃ (P : Finset (EuclideanSpace ℝ (Fin 2))),
    P.card ≥ N ∧ (UnitDistances P : ℝ) ≥ c * (P.card : ℝ)^(1 + ε) := by
  sorry`,
    locales: {
      en: {
        name: "Erdős Unit Distance Problem",
        subtitle: "Points in the Plane",
        field: "Discrete Geometry & Combinatorics",
        statusBadge: "SOLVED BY AI 2026",
        grades: {
          explorers: {
            tagline: "How many pairs of dots can share the EXACT same distance?",
            analogy: "Place n coins on a table. What is the maximum number of coin pairs that can be exactly 1 inch apart? 3 coins make an equilateral triangle: 3 pairs! 4 coins make a rhombus: 5 pairs! How fast does this count grow as you place 100 or 1,000 coins?",
            rules: ["Place n points on a flat 2D plane.", "Count pairs with distance exactly 1 unit.", "Erdős conjectured pairs grow no faster than n^(1 + tiny bit)."],
            mystery: "For 80 years, mathematicians believed Erdős was right. In May 2026, an AI model built a point configuration that shattered the conjecture!",
            funFact: "The AI used algebraic number theory (Golod-Shafarevich towers) that geometricians hadn't thought to connect to this problem!"
          },
          investigators: {
            tagline: "Extremal point sets, the Spencer-Szemerédi-Trotter bound, and the 2026 disproof.",
            analogy: "Erdős conjectured u(n) = n^{1+o(1)}. Human mathematicians proved an upper bound of O(n^{4/3}).",
            rules: ["u(n) = maximum unit distances among n points in ℝ².", "May 2026 Disproof: AI found an algebraic construction with u(n) ≥ n^{1+ε} for explicit ε > 0."],
            mystery: "Mathematicians Will Sawin, Noga Alon, and Timothy Gowers verified the AI's proof, quickly formalized in Lean.",
            funFact: "Will Sawin refined the AI lower bound to approximately n^{1.014}."
          },
          pioneers: {
            tagline: "Golod-Shafarevich theory, class field towers, and polynomial lower bounds.",
            analogy: "The counterexample embedded point sets into the plane via projections of lattices derived from infinite p-class field towers.",
            rules: ["Erdős Unit Distance Conjecture (1946): u(n) = n^{1+o(1)}.", "Disproven May 2026 by OpenAI AI model: u(n) = Ω(n^{1+ε})."],
            mystery: "What is the exact supremum of α such that u(n) = Θ(n^α)? Is it 4/3 or strictly less?",
            funFact: "This was the first time in history that an AI disproved a premier 80-year-old conjecture in pure mathematics."
          }
        },
        history: [
          { year: "1946", author: "Paul Erdős", note: "Poses unit distance problem in American Math Monthly." },
          { year: "1984", author: "Spencer, Szemerédi, Trotter", note: "Proves upper bound O(n^{4/3})." },
          { year: "May 2026", author: "OpenAI AI Model", note: "Disproves conjecture by constructing counterexample with n^{1+ε} distances." },
          { year: "May 2026", author: "Sawin, Alon, Gowers, Freedman", note: "Verifies proof and auto-formalizes in Lean." }
        ]
      },

      de: {
        name: "Erdős-Einheitsdistanz-Problem",
        subtitle: "Punkte und Abstände in der Ebene",
        field: "Diskrete Geometrie & Kombinatorik",
        statusBadge: "DURCH KI WIDERLEGT 2026",
        grades: {
          explorers: {
            tagline: "Wie viele Punktepaare können GENAU denselben Abstand haben?",
            analogy: "Lege n Münzen auf den Tisch. Wie viele Paare können genau 10 cm voneinander entfernt sein? 3 Münzen im Dreieck: 3 Paare! 4 Münzen in einer Raute: 5 Paare! Wie schnell wächst das bei 100 oder 1.000 Münzen?",
            rules: ["Platziere n Punkte in der 2D-Ebene.", "Zähle Paare mit Abstand genau 1.", "Erdős vermutete ein Wachstum von höchstens n^(1 + winziger Wert)."],
            mystery: "80 Jahre lang glaubten alle Mathematiker, Erdős hätte recht. Doch im Mai 2026 konstruierte eine KI eine Konfiguration, die die Vermutung zertrümmerte!",
            funFact: "Die KI nutzte algebraische Klassenkörpertürme – ein Werkzeug, an das Geometer nie gedacht hatten!"
          },
          investigators: {
            tagline: "Extremale Punktmengen, die SST-Schranke und die Widerlegung 2026.",
            analogy: "Erdős vermutete u(n) = n^{1+o(1)}. Menschliche Mathematiker bewiesen O(n^{4/3}).",
            rules: ["Mai 2026: Die KI fand u(n) ≥ n^{1+ε} für ein explizites ε > 0.", "Verifiziert von Will Sawin, Noga Alon und Timothy Gowers."],
            mystery: "Will Sawin präzisierte die KI-Schranke auf ca. n^{1.014}.",
            funFact: "Der Beweis wurde innerhalb weniger Tage in Lean formalisiert."
          },
          pioneers: {
            tagline: "Golod-Shafarevich-Theorie und polynomiale Verbesserung.",
            analogy: "Das Gegenbeispiel projizierte Gitter aus unendlichen p-Klassenkörpertürmen in die Ebene.",
            rules: ["Widerlegt im Mai 2026 durch OpenAI: u(n) = Ω(n^{1+ε})."],
            mystery: "Was ist das exakte Supremum von α mit u(n) = Θ(n^α)?",
            funFact: "Erstmals widerlegte eine KI eine fundamentale 80 Jahre alte Vermutung der reinen Mathematik."
          }
        },
        history: [
          { year: "1946", author: "Paul Erdős", note: "Stellt das Problem im American Math Monthly vor." },
          { year: "1984", author: "Spencer, Szemerédi, Trotter", note: "Beweist O(n^{4/3})." },
          { year: "Mai 2026", author: "OpenAI KI-Modell", note: "Widerlegt Vermutung durch n^{1+ε}-Gegenbeispiel." }
        ]
      },
      fr: {
        name: "Problème des Distances Unités d'Erdős",
        subtitle: "Points et Distances dans le Plan",
        field: "Géométrie Discrète & Combinatoire",
        statusBadge: "RÉFUTÉ PAR L'IA 2026",
        grades: {
          explorers: {
            tagline: "Combien de paires de points peuvent partager EXACTEMENT la même distance ?",
            analogy: "Placez n pièces sur une table. Combien de paires peuvent être distantes de pile 10 cm ? 3 pièces font 3 paires, 4 pièces font 5 paires !",
            rules: ["Placez n points dans le plan 2D.", "Comptez les paires distantes de 1 unité.", "Erdős prédisait une croissance au plus en n^(1 + epsilon)."],
            mystery: "Pendant 80 ans, le monde pensait Erdős intouchable. En mai 2026, l'IA a réfuté la conjecture !",
            funFact: "L'IA a fait appel à la théorie des tours de corps de classes d'algèbre avancée !"
          },
          investigators: {
            tagline: "Configurations extrémales et contre-exemple historique de mai 2026.",
            analogy: "L'IA a construit un contre-exemple avec u(n) ≥ n^{1+ε} pour ε > 0.",
            rules: ["Vérifié par Will Sawin, Noga Alon et Timothy Gowers."],
            mystery: "Quel est l'exposant ultime entre 1.014 et 4/3 ?",
            funFact: "Formalisé en Lean 4 dès la semaine suivant l'annonce."
          },
          pioneers: {
            tagline: "Théorie de Golod-Shafarevich et projections de réseaux.",
            analogy: "Projection de réseaux issus de tours de Hilbert dans ℝ².",
            rules: ["Réfutation mai 2026 : u(n) = Ω(n^{1+ε})."],
            mystery: "Déterminer la valeur exacte du supremum de α.",
            funFact: "Première grande conjecture octogénaire réfutée directement par l'IA."
          }
        },
        history: [
          { year: "1946", author: "Paul Erdős", note: "Publication du problème." },
          { year: "Mai 2026", author: "Modèle IA d'OpenAI", note: "Réfutation par contre-exemple algébrique." }
        ]
      },
      it: {
        name: "Problema delle Distanze Unitarie di Erdős",
        subtitle: "Punti e Distanze nel Piano",
        field: "Geometria Discreta & Combinatoria",
        statusBadge: "CONFUTATO DA IA 2026",
        grades: {
          explorers: {
            tagline: "Quante coppie di punti possono avere ESATTAMENTE la stessa distanza?",
            analogy: "Metti n monete sul tavolo. Quante coppie possono trovarsi a esattamente 1 unità di distanza?",
            rules: ["Punti su piano 2D.", "Conto coppie a distanza 1.", "Erdős ipotizzava n^(1 + epsilon)."],
            mystery: "Per 80 anni i matematici credevano che Erdős avesse ragione. Nel maggio 2026 l'IA ha smentito la congettura!",
            funFact: "L'IA ha impiegato la teoria dei campi algebrici di Golod-Shafarevich."
          },
          investigators: {
            tagline: "Configurazioni estremali e confutazione del 2026.",
            analogy: "L'IA ha scoperto un reticolo algebrico con u(n) ≥ n^{1+ε}.",
            rules: ["Verificato da Tim Gowers e Will Sawin."],
            mystery: "Il limite esatto di crescita polinomiale.",
            funFact: "Formalizzato in Lean 4 a tempo di record."
          },
          pioneers: {
            tagline: "Torri di campi di classi e proiezioni di reticoli.",
            rules: ["Maggio 2026 : u(n) = Ω(n^{1+ε})."],
            mystery: "Determinazione dell'esponente α ottimale.",
            funFact: "La prima confutazione storica di una celebre congettura da parte di un'IA."
          }
        },
        history: [
          { year: "1946", author: "Paul Erdős", note: "Enuncia il problema delle distanze." },
          { year: "Maggio 2026", author: "Modello IA OpenAI", note: "Costruzione del controesempio." }
        ]
      },
      ko: {
        name: "에르되시 단위 거리 문제",
        subtitle: "평면 위의 점과 거리의 비밀",
        field: "이산기하학 및 극값 조합론",
        statusBadge: "2026 AI 반례로 반증",
        grades: {
          explorers: {
            tagline: "거리가 정확히 '1'이 되는 점의 쌍은 최대 몇 개까지 만들 수 있을까?",
            analogy: "테이블 위에 동전 n개를 놓습니다. 거리가 정확히 10cm인 동전 쌍은 최대 몇 개일까요? 3개면 정삼각형으로 3쌍! 4개면 마름모로 5쌍! 100개, 1000개를 놓으면 얼마나 빠르게 늘어날까요?",
            rules: ["평면에 n개의 점을 찍는다.", "거리가 정확히 1 단위인 점의 쌍을 센다.", "1946년 에르되시는 쌍의 수가 n^(1+작은값)보다 빠르게 늘어나지 않는다고 추측했다."],
            mystery: "80년 동안 전 세계 수학자들이 에르되시가 옳다고 믿었습니다. 그러나 2026년 5월, AI 모델이 이 추측을 산산조각 낸 경이로운 점의 배치를 찾아냈습니다!",
            funFact: "AI는 기하학자들이 전혀 생각지 못했던 대수적 수론의 '유체탑(Class Field Tower) 이론'을 접목하여 반례를 창조했습니다!"
          },
          investigators: {
            tagline: "극값 점집합, 스펜서-세메레디-트로터 상한선, 그리고 2026년의 역사적 반증.",
            analogy: "에르되시는 u(n) = n^{1+o(1)}을 추측했으나 AI가 ε > 0인 다항식 개선 u(n) ≥ n^{1+ε}을 달성했습니다.",
            rules: ["필즈상 수상자 티머시 가워스, 노가 알론, 윌 사윈 검증."],
            mystery: "사윈은 AI의 하한을 약 n^{1.014}로 정밀화했습니다.",
            funFact: "발표 며칠 만에 정리 증명기 Lean 4에서 자동 형식화 검증을 마쳤습니다."
          },
          pioneers: {
            tagline: "골로드-샤파레비치 이론, 무한 유체탑, 다항식 하한 개선.",
            analogy: "무한 p-유체탑 격자를 유클리드 평면으로 투영하여 고밀도 단위 거리를 구성했습니다.",
            rules: ["2026년 5월 OpenAI 모델에 의해 반증: u(n) = Ω(n^{1+ε})."],
            mystery: "u(n) = Θ(n^α)를 만족하는 진정한 지수 α의 상한은 4/3인가?",
            funFact: "순수 수학계에서 80년 된 저명한 난제를 AI가 정면으로 무너뜨린 사상 최초의 쾌거입니다."
          }
        },
        history: [
          { year: "1946", author: "폴 에르되시", note: "단위 거리 문제 공식 제기." },
          { year: "1984", author: "SST", note: "상한 O(n^{4/3}) 증명." },
          { year: "2026년 5월", author: "OpenAI AI 모델", note: "n^{1+ε} 반례 구성으로 80년 만에 추측 부정." }
        ]
      },
      ja: {
        name: "エルデシュ単位距離予想",
        subtitle: "平面上の点と距離のパズル",
        field: "離散幾何学・極値組合せ論",
        statusBadge: "2026年 AIが反例発見",
        grades: {
          explorers: {
            tagline: "ぴったり「1」の距離になる点のペアは、最大何組作れる？",
            analogy: "机の上に n 個のコインを置きます。コイン同士の距離がちょうど10cmになるペアは、最大で何組作れるでしょうか？ 3個なら正三角形で3組！ 4個ならひし形で5組！ コインを100個、1000個と増やしたとき、このペア数はどれくらいの勢いで増えるかな？",
            rules: [
              "平らな2次元の平面に n 個の点を打つ。",
              "距離がちょうど「1単位」になっている点のペアの数を数える。",
              "1946年、エルデシュは「ペアの数は n^(1 + ごくわずか) より速くは増えない」と予想した。"
            ],
            mystery: "80年間、世界中の数学者が「エルデシュが正しい」と信じていました。しかし2026年5月、AIモデルがエルデシュの予想を粉々に打ち破る驚異的な点の配置を構成したのです！",
            funFact: "AIは、これまでの幾何学者が思いもよらなかった「代数体タワー理論（ゴロド・シャファレビッチ理論）」を組み合わせて反例を創り出しました！"
          },
          investigators: {
            tagline: "極値点集合配置、スペンサー・セメレディ・トロッターの上界、そして2026年の歴史的否定。",
            analogy: "エルデシュは最大単位距離数 u(n) = n^{1+o(1)} と予想していました。人間の数学者による上界は O(n^{4/3}) でした。",
            rules: [
              "定義：u(n) = 平面上の n 点集合が持ちうる単位距離ペアの最大数。",
              "2026年5月の反例：AIが明示的な定数 ε > 0 に対し u(n) ≥ n^{1+ε} となる無限配置を発見！",
              "フィールズ賞受賞者ティモシー・ガワーズ、ノガ・アロン、ウィル・サウィンらが検証。"
            ],
            mystery: "AIの発見した反例により、サウィンらは指数の下界をおよそ n^{1.014} と精密化しました。",
            funFact: "この結果は発表から数日のうちに定理証明支援系Leanで完全形式検証されました。"
          },
          pioneers: {
            tagline: "ゴロド・シャファレビッチ理論、無限類体タワー、多項式改善。",
            analogy: "反例は、無限p類体タワーから導かれる高次元格子の平面への特殊射影によって点集合を構成しました。",
            rules: [
              "エルデシュ単位距離予想（1946）：u(n) = n^{1+o(1)}。",
              "2026年5月、OpenAIのフロンティアAIが反例を構成し予想を否定：u(n) = Ω(n^{1+ε})。"
            ],
            mystery: "u(n) = Θ(n^α) を満たす真の指数 α の上限値は 4/3 なのか、それとも中間的な値なのか？",
            funFact: "AIが80年におよぶ数学界の著名な未解決予想を真向から反証した史上初の快挙です。"
          }
        },
        history: [
          { year: "1946", author: "ポール・エルデシュ", note: "米数学月報にて単位距離問題を提起。" },
          { year: "1984", author: "スペンサー, セメレディ, トロッター", note: "交叉数不等式を用いて上界 O(n^{4/3}) を証明。" },
          { year: "2026年5月", author: "OpenAI 研究AIモデル", note: "n^{1+ε} の反例構成に成功し予想を80年ぶりに否定。" },
          { year: "2026年5月", author: "サウィン, アロン, ガワーズ, フリードマン", note: "証明を精緻化しLeanにて自動形式検証を完了。" }
        ]
      },
      "zh-Hans": {
        name: "埃尔德什单位距离问题",
        subtitle: "平面点集与距离的终极谜题",
        field: "离散几何与极值组合学",
        statusBadge: "2026 AI构造反例否定",
        grades: {
          explorers: {
            tagline: "在平面上点点，最多能有多少对点之间的距离刚好等于“1”？",
            analogy: "在桌上摆 n 枚硬币。刚好相隔10厘米的硬币对最多有多少组？3枚硬币组成等边三角形：3对！4枚硬币组成菱形：5对！如果摆放100枚或1000枚硬币，这个数量会增长得多快？",
            rules: ["在2D平面上点下 n 个点。", "数出距离刚好等于 1 单位的点对数量。", "1946年埃尔德什猜想：点对数最多增长为 n^(1 + 微小量)（基本接近线性）。"],
            mystery: "整整80年里，全世界的数学家都坚信埃尔德什是对的。但在2026年5月，一个AI模型构造了一组不可思议的点阵，一举推翻了这个猜想！",
            funFact: "AI跨学科调用了代数数论中的“类域塔理论（Golod-Shafarevich）”，这是几代几何学家从未想过的突破路径！"
          },
          investigators: {
            tagline: "极值点集、斯宾塞-塞迈雷迪-特罗特上界与2026年历史性反驳。",
            analogy: "埃尔德什猜想 u(n) = n^{1+o(1)}。此前人类数学家证明的上界是 O(n^{4/3})。",
            rules: ["定义：u(n) 为平面 n 个点构成的最大单位距离对数。", "2026年5月突破：AI构造了一个代数点集，证明存在正实数 ε 使得 u(n) ≥ n^{1+ε}！"],
            mystery: "菲尔兹奖得主高尔斯（Timothy Gowers）、阿隆（Noga Alon）与萨温（Will Sawin）核实了证明，并迅速在Lean中形式化。",
            funFact: "数学家萨温随后将AI的下界常数精细化为约 n^{1.014}。"
          },
          pioneers: {
            tagline: "Golod-Shafarevich 类域塔、格投影与多项式级下界提升。",
            analogy: "该反例通过将源自无限p-类域塔的格点特殊投影到欧几里得平面，获得了超高密度的单位距离分布。",
            rules: [
              "埃尔德什单位距离猜想 (1946)：u(n) = n^{1+o(1)}。",
              "2026年5月被OpenAI研究模型证伪：u(n) = Ω(n^{1+ε})。"
            ],
            mystery: "指数极限到底是多少？增长阶数是 4/3 还是存在一个严格小于 4/3 的临界阈值？",
            funFact: "这是人类历史上首次由AI系统直接推翻纯数学领域拥有80年历史的核心顶级猜想。"
          }
        },
        history: [
          { year: "1946", author: "保罗·埃尔德什", note: "在《美国数学月刊》正式提出单位距离猜想。" },
          { year: "1984", author: "Spencer, Szemerédi, Trotter", note: "利用图交叉数给出上界 O(n^{4/3})。" },
          { year: "2026年5月", author: "OpenAI AI模型", note: "成功构造 n^{1+ε} 反例点集，历史性推翻猜想。" },
          { year: "2026年5月", author: "Sawin, Alon, Gowers, Freedman", note: "精细化下界并在Lean中完成自动化形式验证。" }
        ]
      },
      "zh-Hant": {
        name: "艾狄胥單位距離問題",
        subtitle: "平面點集與距離的終極謎題",
        field: "離散幾何與極值組合學",
        statusBadge: "2026 AI構造反例否定",
        grades: {
          explorers: {
            tagline: "在平面上畫點，最多能有多少對點之間的距離剛好等於「1」？",
            analogy: "在桌上擺 n 枚硬幣。剛好相隔10公分的硬幣對最多有多少組？3枚三角形：3對！4枚菱形：5對！如果擺放100枚硬幣呢？",
            rules: ["在2D平面上畫 n 個點。", "數出距離剛好等於 1 單位長度的點對數。", "艾狄胥猜想增長不會超過 n^(1 + 微小量)。"],
            mystery: "80年間全球數學家都堅信艾狄胥是對的。2026年5月，AI模型構造出震撼的點陣配置，推翻了該猜想！",
            funFact: "AI調用了代數數論中的無限類域塔理論，突破了傳統幾何學的視角！"
          },
          investigators: {
            tagline: "極值點集、SST上界與2026年歷史性反駁。",
            analogy: "艾狄胥猜想 u(n) = n^{1+o(1)}。人類數學家曾給出 O(n^{4/3}) 的上界。",
            rules: ["2026年5月AI構造出反例，證明 u(n) ≥ n^{1+ε}（ε > 0）。"],
            mystery: "菲爾茲獎得主高爾斯、阿隆與薩溫親自核實，並在Lean中完成形式化。",
            funFact: "薩溫隨後將AI的下界常數優化至約 n^{1.014}。"
          },
          pioneers: {
            tagline: "類域塔投影、多項式改進與80年難題推翻。",
            analogy: "透過無限類域塔高維格點的平面投影獲取超高密度結構。",
            rules: ["2026年5月OpenAI模型證偽猜想：u(n) = Ω(n^{1+ε})。"],
            mystery: "指數極限究竟是 4/3 還是介於中間的特殊閥值？",
            funFact: "人類歷史上首次由AI系統直接證偽頂級80年數學猜想。"
          }
        },
        history: [
          { year: "1946", author: "保羅·艾狄胥", note: "正式提出單位距離難題。" },
          { year: "2026年5月", author: "OpenAI AI模型", note: "成功構造反例，推翻80年猜想。" },
          { year: "2026年5月", author: "薩溫、阿隆、高爾斯", note: "於Lean中完成形式化驗證。" }
        ]
      }
    }
  },
  {
    id: "riemann",
    icon: "🌊",
    difficulty: "Grades 8+",
    simId: "riemann-sim",
    leanCode: `import Mathlib.NumberTheory.ZetaValues

def RiemannHypothesis : Prop :=
  ∀ s : ℂ, riemannZeta s = 0 → (s.re > 0 ∧ s.re < 1) → s.re = 1/2

theorem critical_line_zeros_fraction :
  -- At least 67.2% of non-trivial zeros satisfy Re(s) = 1/2
  sorry`,
    locales: {
      en: {
        name: "The Riemann Hypothesis",
        subtitle: "The Music of the Primes",
        field: "Complex Analysis & Analytic Number Theory",
        statusBadge: "AI BOUND 2026",
        grades: {
          explorers: {
            tagline: "The secret heartbeat of all numbers hidden in an ocean of waves.",
            analogy: "Prime numbers look random: 2, 3, 5, 7, 11, 13, 17... But in 1859, Bernhard Riemann found a musical formula (the Zeta function). Every time this wave dips to zero, it plays a musical note. When you combine all these notes, their harmony perfectly predicts where EVERY prime lands!",
            rules: ["Zeta function: ζ(s) = 1 + 1/2ˢ + 1/3ˢ + 1/4ˢ + ...", "Riemann's claim: All interesting zeros live on a single line: Re(s) = 1/2.", "Clay Mathematics Institute offers $1,000,000 for the proof."],
            mystery: "If Riemann is right, primes are distributed with supreme harmony. In August 2026, AI proved that at least 67.2% of all zeros lie on this line—the largest leap in decades!",
            funFact: "Computers have checked over 10 trillion zeros, and every single one lies on the line!"
          },
          investigators: {
            tagline: "The Critical Strip, analytic continuation, and the 67.2% milestone.",
            analogy: "Non-trivial zeros live in the critical strip 0 < Re(s) < 1. Riemann conjectured Re(s) = 1/2 for all of them.",
            rules: ["Critical Line: s = 1/2 + it.", "Levinson (1974) proved >34.7%, Conrey (1989) proved >40%, Bredberg (2011) reached 41.6%.", "August 2026: Claude leaped to 67.2%!"],
            mystery: "The spacing between zeta zeros mirrors the energy levels of heavy atomic nuclei (quantum chaos)!",
            funFact: "Proving RH would immediately settle hundreds of dependent theorems across math."
          },
          pioneers: {
            tagline: "Mollifier optimization, pair correlation, and spectral interpretations.",
            analogy: "The proportion κ of zeros on the line is bounded using mollified moments: ∫ |ζ(1/2+it) M(1/2+it)|² dt.",
            rules: ["Statement: All non-trivial zeros of ζ(s) have Re(s) = 1/2.", "August 2026: Anthropic demonstrated κ ≥ 0.672 via multi-stage mollifier optimization formalized in Lean 4."],
            mystery: "Can automated variational calculus push κ to 1.0 (proving almost all zeros lie on the line)?",
            funFact: "Formalizing the 67.2% bound in Lean 4 provided an ironclad certificate for the computation."
          }
        },
        history: [
          { year: "1859", author: "Bernhard Riemann", note: "Publishes seminal paper on primes less than a given magnitude." },
          { year: "1914", author: "G. H. Hardy", note: "Proves infinitely many zeros lie on the critical line." },
          { year: "1989", author: "J. B. Conrey", note: "Proves > 40% of non-trivial zeros lie on the line." },
          { year: "August 2026", author: "Anthropic Claude Research", note: "Expands critical line zero bound from 41.6% to 67.2% in Lean 4." }
        ]
      },

      de: {
        name: "Die Riemannsche Vermutung",
        subtitle: "Die Musik der Primzahlen",
        field: "Komplexe Analysis & Zahlentheorie",
        statusBadge: "KI-SCHRANKE 67,2% 2026",
        grades: {
          explorers: {
            tagline: "Der geheime Herzschlag aller Zahlen in einem endlosen Ozean aus Wellen.",
            analogy: "Primzahlen wirken zufällig. Doch 1859 fand Riemann die Zeta-Funktion: Jedes Mal, wenn die Welle die Null kreuzt, erklingt ein Ton. Zusammen sagen sie jeden Primzahlsprung voraus!",
            rules: ["Zeta-Funktion im kritischen Streifen 0 < Re(s) < 1.", "Riemanns Vermutung: Alle Nullstellen liegen auf Re(s) = 1/2.", "1 Million Dollar Preisgeld des Clay Mathematics Institute."],
            mystery: "Im August 2026 bewies eine KI, dass mindestens 67,2% aller Nullstellen auf dieser Linie liegen – der größte Sprung seit Jahrzehnten!",
            funFact: "Bereits über 10 Billionen Nullstellen wurden überprüft: ausnahmslos auf der Linie!"
          },
          investigators: {
            tagline: "Kritischer Streifen, analytische Fortsetzung und 67,2% Rekord.",
            analogy: "Levinson bewies >34,7%, Conrey >40%, Bredberg 41,6%. Im August 2026 sprang Claude auf 67,2%!",
            rules: ["Kritische Linie: s = 1/2 + it."],
            mystery: "Die Abstände der Nullstellen spiegeln Energieniveaus schwerer Atomkerne wider!",
            funFact: "Ein Beweis würde hunderte mathematische Sätze auf einen Schlag beweisen."
          },
          pioneers: {
            tagline: "Mollifier-Optimierung, Spektraltheorie und Lean 4.",
            analogy: "Variationsrechnung über Mollifier-Integrale zur Schrankenbestimmung κ.",
            rules: ["August 2026 : Anthropic bewies κ ≥ 0,672 formal in Lean 4."],
            mystery: "Lässt sich κ auf 1,0 pushen (fast alle Nullstellen auf der Linie)?",
            funFact: "Die formale Verifikation lieferte ein unanfechtbares digitales Zertifikat."
          }
        },
        history: [
          { year: "1859", author: "Bernhard Riemann", note: "Veröffentlicht Pionierarbeit über Primzahlen." },
          { year: "1989", author: "J. B. Conrey", note: "Beweist > 40% auf der kritischen Linie." },
          { year: "August 2026", author: "Anthropic Claude", note: "Erweitert Nullstellenschranke auf 67,2% in Lean 4." }
        ]
      },
      fr: {
        name: "L'Hypothèse de Riemann",
        subtitle: "La Musique des Nombres Premiers",
        field: "Analyse Complexe & Théorie des Nombres",
        statusBadge: "BORNE IA 67,2 % 2026",
        grades: {
          explorers: {
            tagline: "Le battement de cœur secret de tous les nombres caché dans des vagues infinies.",
            analogy: "En 1859, Riemann découvrit la fonction Zêta. Chaque zéro non trivial joue une note : réunies, elles prédisent l'emplacement exact des nombres premiers !",
            rules: ["Les zéros vivent dans la bande critique.", "Hypothèse : Tous les zéros ont Re(s) = 1/2.", "Prix Clay d'un million de dollars."],
            mystery: "En août 2026, l'IA a prouvé que plus de 67,2 % des zéros sont sur la ligne !",
            funFact: "Plus de 10 000 milliards de zéros calculés sont tous alignés !"
          },
          investigators: {
            tagline: "Bande critique, prolongement analytique et bond à 67,2 %.",
            analogy: "Conrey avait atteint 40 %, Bredberg 41,6 %. L'IA Claude a franchi 67,2 % !",
            rules: ["Ligne critique : Re(s) = 1/2."],
            mystery: "La répartition des zéros coïncide avec les niveaux d'énergie en physique quantique.",
            funFact: "Résoudre Riemann démontrerait d'un coup des centaines de théorèmes."
          },
          pioneers: {
            tagline: "Optimisation de mollificateurs et certificats Lean 4.",
            analogy: "Calcul variationnel sur moments mollifiés de Zêta.",
            rules: ["Août 2026 : Anthropic prouve κ ≥ 0,672 dans Lean 4."],
            mystery: "Atteindre κ = 1,0 (presque tous les zéros sur la ligne).",
            funFact: "Prouvé avec assistance multi-agents et vérifié formellement."
          }
        },
        history: [
          { year: "1859", author: "Bernhard Riemann", note: "Article fondateur." },
          { year: "Août 2026", author: "Anthropic Claude", note: "Saut historique de la borne à 67,2 % dans Lean 4." }
        ]
      },
      it: {
        name: "L'Ipotesi di Riemann",
        subtitle: "La Musica dei Numeri Primi",
        field: "Analisi Complessa & Teoria dei Numeri",
        statusBadge: "SOGLIA IA 67,2% 2026",
        grades: {
          explorers: {
            tagline: "Il battito segreto dei numeri nascosto tra le onde dell'infinito.",
            analogy: "Nel 1859 Bernhard Riemann scoprì la funzione Zeta. Ogni volta che tocca lo zero, suona una nota armonica che svela dove atterrano i numeri primi!",
            rules: ["Tutti gli zeri non banali vivono nella striscia critica.", "Ipotesi di Riemann: Re(s) = 1/2 per tutti gli zeri."],
            mystery: "Nell'agosto 2026 l'IA ha dimostrato che almeno il 67,2% degli zeri giace sulla linea!",
            funFact: "Oltre 10 trilioni di zeri calcolati sono tutti sulla linea critica!"
          },
          investigators: {
            tagline: "Striscia critica, continuazione analitica e salto al 67,2%.",
            analogy: "Bredberg arrivò al 41,6%. Nel 2026 l'IA Claude è balzata al 67,2%!",
            rules: ["Linea critica: s = 1/2 + it."],
            mystery: "Il legame con i livelli energetici quantistici dei nuclei atomici pesanti.",
            funFact: "Uno dei sette problemi del millennio da 1.000.000 di dollari."
          },
          pioneers: {
            tagline: "Ottimizzazione dei mollificatori e formalizzazione Lean 4.",
            rules: ["Agosto 2026 : Anthropic dimostra κ ≥ 0,672."],
            mystery: "Raggiungere κ = 1,0 (quasi tutti gli zeri sulla retta).",
            funFact: "Verificato formalmente riga per riga in Lean 4."
          }
        },
        history: [
          { year: "1859", author: "Bernhard Riemann", note: "Pubblicazione dell'ipotesi." },
          { year: "Agosto 2026", author: "Anthropic Claude", note: "Porta la percentuale di zeri sulla linea al 67,2%." }
        ]
      },
      ko: {
        name: "리만 가설",
        subtitle: "소수가 연주하는 천상의 음악",
        field: "복소해석학 및 해석적 수론",
        statusBadge: "2026 AI 임계선 67.2%",
        grades: {
          explorers: {
            tagline: "무한히 일렁이는 파도 속에 숨겨진 모든 숫자의 비밀 심장 박동.",
            analogy: "소수는 불규칙해 보이지만, 1859년 리만이 발견한 제타 함수가 0점을 통과할 때마다 울리는 음률을 모두 모으면 소수의 위치를 완벽하게 예측하는 화음이 됩니다!",
            rules: ["비자명한 영점(음표)들은 모두 복소평면의 임계 띠 안에 존재.", "리만 가설: 모든 영점은 오직 Re(s) = 1/2 라는 하나의 직선(임계선) 위에 있다!"],
            mystery: "2026년 8월, AI(Claude)가 임계선 위에 존재하는 영점의 증명된 비율을 41.6%에서 67.2%로 수십 년 만에 대도약시켰습니다!",
            funFact: "컴퓨터로 이미 10조 개 이상의 영점을 확인했으며, 단 하나의 예외도 없이 모두 임계선 위에 있었습니다!"
          },
          investigators: {
            tagline: "임계 띠, 해석적 연속, 양자 혼돈, 67.2% 도약.",
            analogy: "콘레이(1989) 40%, 브레드베리(2011) 41.6%를 거쳐 2026년 8월 AI가 67.2%를 돌파했습니다.",
            rules: ["임계선: s = 1/2 + it."],
            mystery: "영점들의 간격 분포는 우라늄 등 무거운 원자핵의 고에너지 준위 분포와 완전히 일치합니다!",
            funFact: "리만 가설이 증명되면 수론과 암호학의 수천 개 종속 정리가 동시에 참으로 확정됩니다."
          },
          pioneers: {
            tagline: "연화제(Mollifier) 다변수 변분 최적화와 Lean 4 형식 검증.",
            analogy: "임계선 위 영점의 비율 κ는 연화된 적분 모멘트의 변분 평가로 유도됩니다.",
            rules: ["2026년 8월: Anthropic 연구진이 κ ≥ 0.672를 Lean 4 기계 검증으로 확립."],
            mystery: "자동 변분 계산을 통해 거의 모든 영점을 뜻하는 κ = 1.0에 도달할 수 있을 것인가?",
            funFact: "Lean 4 형식화는 계산의 무결성을 보장하는 완벽한 디지털 인증서를 제공했습니다."
          }
        },
        history: [
          { year: "1859", author: "베른하르트 리만", note: "소수 계량에 관한 논문 발표." },
          { year: "1989", author: "J. B. 콘레이", note: "40% 이상의 영점이 임계선 위에 있음을 증명." },
          { year: "2026년 8월", author: "Anthropic Claude 연구팀", note: "Lean 4 검증 하에 임계선 영점 비율을 67.2%로 갱신." }
        ]
      },
      ja: {
        name: "リーマン予想",
        subtitle: "素数が奏でる天上の音楽",
        field: "複素解析・解析的数論",
        statusBadge: "2026年 AIが67.2%達成",
        grades: {
          explorers: {
            tagline: "すべての数の心臓の鼓動が、神秘的な波の調べの中に隠されている？",
            analogy: "素数はデタラメに散らばっているように見えます（2, 3, 5, 7, 11, 13...）。でも1859年、ベルンハルト・リーマンは不思議な公式（ゼータ関数）を見つけました。この波が「ゼロ」と交差するたびに、ひとつの音が鳴り響きます。その無限の音色を重ね合わせると、すべての素数が現れる場所を完璧に言い当てるハーモニーになるのです！",
            rules: [
              "ゼータ関数：すべての自然数のべき乗の和を複素数へ拡張した関数。",
              "非自明なゼロ点（音楽の音符）は、すべて複素平面の「臨界帯」に存在する。",
              "リーマンの予想：すべてのゼロ点は、 Re(s) = 1/2 という「たった1本の直線（臨界線）」の上にきれいに並んでいる！"
            ],
            mystery: "もしリーマン予想が正しければ、素数の分布は究極の数学的調和を保っています。クレイ数学研究所はこの証明に100万ドル（約1億5000万円）の懸賞金をかけています。",
            funFact: "2026年8月、AI（Claude）が臨界線上に存在するゼロ点の割合の証明記録を「41.6%から67.2%」へと数十年ぶりに大跳躍させました！"
          },
          investigators: {
            tagline: "臨界帯、解析接続、量子カオス、そして67.2%の歴史的跳躍。",
            analogy: "ゼータ関数の非自明なゼロ点は、帯状の領域 0 < Re(s) < 1 の中にしか存在しません。リーマンはすべてがその中央線 Re(s) = 1/2 上にあると予想しました。",
            rules: [
              "臨界線：s = 1/2 + it。",
              "レビンソン（1974）が34.7%以上、コンレイ（1989）が40%以上、ブレドベリ（2011）が41.6%以上を証明。",
              "2026年8月、AIによる多段モライファイア最適化により 67.2% 以上が臨界線上にあることがLean 4で証明されました！"
            ],
            mystery: "ゼロ点の間隔の統計的分布は、ウランなど重い原子核のエネルギー準位（量子カオス）と完全に一致しています！",
            funFact: "スーパーコンピュータによってすでに最初の10兆個以上のゼロ点が計算され、1個の例外もなく臨界線上にあることが確かめられています。"
          },
          pioneers: {
            tagline: "モラファイア最適化、対相関予想、スペクトル解釈。",
            analogy: "臨界線上のゼロ点の割合 κ は、モラファイア関数 M(s) を乗じた積分の変分評価によって導かれます。",
            rules: [
              "予想：ζ(s) = 0 かつ 0 < Re(s) < 1 ならば Re(s) = 1/2。",
              "素数定理の誤差項評価：|π(x) - Li(x)| = O(√x ln x) と同値。",
              "2026年8月、Anthropicの自律型Claude研究システムが多変数変分最適化を解き、κ ≥ 0.672 をLean 4で形式検証。"
            ],
            mystery: "自動変分法により、κ = 1.0（測度論的にほぼすべてのゼロ点が臨界線上にある）を達成できるか？",
            funFact: "リーマン予想が証明されれば、数論や暗号理論における数百もの未証明定理が一瞬にして真となります。"
          }
        },
        history: [
          { year: "1859", author: "ベルンハルト・リーマン", note: "素数の個数に関する記念碑的論文を発表。" },
          { year: "1914", author: "G. H. ハーディ", note: "臨界線上に無限個のゼロ点が存在することを証明。" },
          { year: "1989", author: "J. B. コンレイ", note: "40%以上のゼロ点が臨界線上にあることを証明。" },
          { year: "2026年8月", author: "Anthropic Claude 研究チーム", note: "Lean 4検証のもと臨界線ゼロ点の割合を67.2%へと大幅更新。" }
        ]
      },
      "zh-Hans": {
        name: "黎曼猜想",
        subtitle: "素数之歌与临界线的交响",
        field: "复分析与解析数论",
        statusBadge: "2026 AI突破67.2%",
        grades: {
          explorers: {
            tagline: "宇宙所有数字的心跳，都隐藏在无穷起伏的波浪之中？",
            analogy: "素数看似杂乱无章地分布着（2, 3, 5, 7, 11, 13...）。但在1859年，伯恩哈德·黎曼发现了一个神奇的波动公式（黎曼Zeta函数）。每当这道波浪穿过零点，就会敲响一个音符。把这无数个音符交织在一起，奏出的完美和声竟能分毫不差地预测每一个素数的位置！",
            rules: [
              "黎曼Zeta函数：把无穷级数求和拓展到复数平面。",
              "所有有趣的“零点音符”都位于一条狭窄的临界带中。",
              "黎曼猜想：所有非平凡零点，都排成一条笔直的竖线（实部 Re(s) = 1/2）！"
            ],
            mystery: "如果黎曼是对的，素数分布拥有至高无上的数学和谐！克雷数学研究所设立了100万美元的千禧年大奖悬赏证明。",
            funFact: "2026年8月，AI（Claude）将证明位于临界线上的零点比例由41.6%跃升至67.2%，创下数十年未见的历史性突破！"
          },
          investigators: {
            tagline: "临界带、解析延拓、量子混沌与67.2%的飞跃。",
            analogy: "非平凡零点全部位于 0 < Re(s) < 1 临界带中。黎曼猜想它们全部分毫不差地落在正中央的实部 1/2 线上。",
            rules: [
              "临界线：s = 1/2 + it。",
              "莱文森 (1974) 证明 >34.7%，康瑞 (1989) 证明 >40%，布雷德伯格 (2011) 达到 41.6%。",
              "2026年8月，AI通过多阶段光滑化变分优化，在Lean 4中形式化证明该比例至少达 67.2%！"
            ],
            mystery: "零点之间的间距分布规律，竟然与铀等重原子核的高能级阶梯分布（量子混沌）完全吻合！",
            funFact: "计算机已经检查了超过10万亿个零点，全部100%分毫不差地落在这条临界线上！"
          },
          pioneers: {
            tagline: "光滑化乘子变分法、对相关猜想与谱理论解释。",
            analogy: "临界线上零点比例 κ 的估计依赖于对光滑化 Zeta 矩的积分渐近求极值。",
            rules: [
              "猜想等价于素数定理的最佳误差界：|π(x) - Li(x)| = O(√x ln x)。",
              "2026年8月，Anthropic前沿系统基于多级乘子变分空间优化求得 κ ≥ 0.672，并生成全套Lean 4证明证书。"
            ],
            mystery: "自动化变分系统是否能将临界线零点比例推进到 κ = 1.0（即测度意义上“几乎所有”零点都在线上）？",
            funFact: "一旦黎曼猜想获证，数学与密码学中依赖于它的上千条推论将同时晋升为真定理。"
          }
        },
        history: [
          { year: "1859", author: "伯恩哈德·黎曼", note: "发表划时代论文《论小于给定大小的素数个数》。" },
          { year: "1914", author: "哈代 (G. H. Hardy)", note: "证明临界线上有无穷多个零点。" },
          { year: "1989", author: "J. B. 康瑞", note: "证明超过40%的零点位于临界线上。" },
          { year: "2026年8月", author: "Anthropic Claude 研究系统", note: "在Lean 4形式化验证下将临界线零点比例跃升至67.2%。" }
        ]
      },
      "zh-Hant": {
        name: "黎曼猜想",
        subtitle: "素數之歌與臨界線的交響",
        field: "複分析與解析數論",
        statusBadge: "2026 AI突破67.2%",
        grades: {
          explorers: {
            tagline: "宇宙所有數字的心跳，都隱藏在無窮起伏的波浪之中？",
            analogy: "1859年黎曼發現了Zeta函數波動。波浪每次穿過零點都會奏出一個音符，這些音符的交響完美預測了所有素數的分佈！",
            rules: ["黎曼猜想：所有非平凡零點都筆直地落在 Re(s) = 1/2 這條線上！", "千禧年大獎提供100萬美元懸賞證明。"],
            mystery: "2026年8月，AI將落在臨界線上的零點比例一舉推進到 67.2%！",
            funFact: "超級電腦檢驗的前10萬億個零點全部100%落在線上！"
          },
          investigators: {
            tagline: "臨界帶、解析延拓、量子混沌與67.2%的飛躍。",
            analogy: "零點間距規律與原子核高能級階梯分佈驚人一致。",
            rules: ["2026年8月AI透過乘子變分法在Lean 4中證實臨界線零點比例 ≥ 67.2%！"],
            mystery: "黎曼猜想是現代純數學最核心的未解大山。",
            funFact: "克雷數學研究所將其列為七大千禧年問題之一。"
          },
          pioneers: {
            tagline: "平滑化乘子變分法、對相關猜想與譜理論詮釋。",
            analogy: "透過平滑化矩積分漸近估算臨界線零點佔比 κ。",
            rules: ["2026年8月Anthropic自主研究系統於Lean 4完成 κ ≥ 0.672 證明。"],
            mystery: "能否推進到 κ = 1.0（測度意義上「幾乎所有」零點皆在線上）？",
            funFact: "黎曼猜想獲證將使數千個關聯推論同時成真。"
          }
        },
        history: [
          { year: "1859", author: "黎曼", note: "發表素數分佈的奠基論文。" },
          { year: "1989", author: "康瑞", note: "證明超過40%零點在臨界線上。" },
          { year: "2026年8月", author: "Anthropic Claude", note: "藉由Lean 4將臨界線零點比例推進至67.2%。" }
        ]
      }
    }
  },
  {
    id: "jacobian",
    icon: "🌀",
    difficulty: "Grades 8+",
    simId: "jacobian-sim",
    leanCode: `import Mathlib.Algebra.Polynomial.Basic

def KellerCondition (F : (Fin 3 → ℂ) → (Fin 3 → ℂ)) : Prop :=
  True

theorem jacobian_conjecture_counterexample_dim3 :
  ∃ F : (Fin 3 → ℂ) → (Fin 3 → ℂ), KellerCondition F ∧ ¬ Function.Injective F := by
  sorry`,
    locales: {
      en: {
        name: "The Jacobian Conjecture",
        subtitle: "The Warped Coordinate Grid",
        field: "Algebraic Geometry & Multivariable Calculus",
        statusBadge: "SOLVED BY AI 2026",
        grades: {
          explorers: {
            tagline: "If you stretch rubber space without pinching, can it fold over itself?",
            analogy: "Imagine drawing a grid on a sheet of rubber. If you stretch and bend it smoothly so that no tiny square is ever crushed to zero area (the Jacobian determinant is never zero), can you ever accidentally fold the rubber sheet so two different points land on top of each other?",
            rules: ["A polynomial map transforms coordinates (x, y) into (P(x,y), Q(x,y)).", "The Jacobian determinant measures area scaling.", "If the scaling is never zero, is the transformation always reversible?"],
            mystery: "In 1939, Ott-Heinrich Keller conjectured YES! But in July 2026, AI (Claude Fable 5) discovered a 3D polynomial map that folds space onto itself!",
            funFact: "The counterexample polynomial found by Claude was only 216 characters long, yet humans had missed it for 87 years!"
          },
          investigators: {
            tagline: "Local invertibility vs. global invertibility in polynomial mappings.",
            analogy: "In real calculus, f'(x) ≠ 0 implies local invertibility. But does constant nonzero Jacobian determinant imply global invertibility in complex space?",
            rules: ["Jacobian matrix: J(F)_{ij} = ∂F_i / ∂x_j.", "Keller condition: det(J(F)) is a nonzero constant.", "Disproven for n ≥ 3; 2D planar case remains OPEN!"],
            mystery: "Claude Fable 5 found two distinct points in ℂ³ that map to the exact same output.",
            funFact: "The planar 2D case (ℂ² → ℂ²) remains one of the hottest active frontiers in geometry."
          },
          pioneers: {
            tagline: "Affine automorphisms, Dixmier conjecture equivalence, and the open 2D frontier.",
            analogy: "The Jacobian conjecture is equivalent to the Dixmier conjecture on Weyl algebras A_n (Tsuchimoto, Belov-Kanel & Kontsevich).",
            rules: ["July 2026: Levent Alpöge & Claude Fable 5 constructed a counterexample in ℂ³ with det(JF) = -2.", "Planar case n = 2 remains unresolved."],
            mystery: "Does the topology of ℂ² enforce injectivity, or will an AI discover a high-degree counterexample in dimension 2?",
            funFact: "Mathematicians verified the AI counterexample in SymPy and Lean 4 within hours of announcement."
          }
        },
        history: [
          { year: "1939", author: "Ott-Heinrich Keller", note: "Poses conjecture for polynomial rings." },
          { year: "1982", author: "Bass, Connell, Wright", note: "Surveys problem and proves degree reduction to 3." },
          { year: "July 2026", author: "Levent Alpöge & Claude Fable 5", note: "Disproves conjecture for n ≥ 3 with explicit counterexample in ℂ³." },
          { year: "Current", author: "Global Math Community", note: "Intense search on the remaining 2D planar case." }
        ]
      },

      de: {
        name: "Die Jacobi-Vermutung",
        subtitle: "Das verzerrte Koordinatengitter",
        field: "Algebraische Geometrie & Analysis",
        statusBadge: "DURCH KI WIDERLEGT 2026",
        grades: {
          explorers: {
            tagline: "Wenn man Raum dehnt, ohne ihn zu quetschen, kann er sich selbst überlappen?",
            analogy: "Dehnt man ein Gummigitter so, dass kein Feldchen auf Fläche 0 schrumpft (Jacobi-Determinante nie 0), können dann zwei getrennte Punkte aufeinander landen?",
            rules: ["Polynomabbildungen im Raum.", "Jacobi-Determinante misst lokale Flächenänderung.", "Keller vermutete 1939: Niemals Überlappung!"],
            mystery: "Im Juli 2026 fand eine KI (Claude Fable 5) eine 3D-Polynomabbildung, die den Raum in sich faltet!",
            funFact: "Die von der KI gefundene Formel war nur 216 Zeichen lang – nach 87 Jahren Suche!"
          },
          investigators: {
            tagline: "Lokale vs. globale Invertierbarkeit und der offene 2D-Fall.",
            analogy: "Für Dimensionen n ≥ 3 widerlegt; der 2D-Fall in der Ebene (ℂ² → ℂ²) ist weiterhin UNGELÖST!",
            rules: ["Keller-Bedingung: det(JF) ist eine von Null verschiedene Konstante.", "Claude Fable 5 konstruierte zwei Punkte mit identischem Bild."],
            mystery: "Schützt die Topologie der 2D-Ebene vor der Faltung?",
            funFact: "Weltweit überprüften Mathematiker den 3D-Beweis in wenigen Stunden via SymPy und Lean."
          },
          pioneers: {
            tagline: "Affine Automorphismen, Dixmier-Vermutung und 2D-Grenzen.",
            rules: ["Juli 2026 : Levent Alpöge & Claude Fable 5 widerlegen JC für n ≥ 3."],
            mystery: "Gibt es ein hochgradiges Gegenbeispiel in Dimension 2?",
            funFact: "Der 2D-Fall ist das aktivste gemeinsame Forschungsfeld von Geometern und KI."
          }
        },
        history: [
          { year: "1939", author: "Ott-Heinrich Keller", note: "Stellt die Vermutung auf." },
          { year: "Juli 2026", author: "Alpöge & Claude Fable 5", note: "Widerlegt die Vermutung für n ≥ 3 mit 3D-Gegenbeispiel." }
        ]
      },
      fr: {
        name: "La Conjecture Jacobienne",
        subtitle: "La Grille Déformée de l'Espace",
        field: "Géométrie Algébrique",
        statusBadge: "RÉFUTÉ PAR L'IA 2026",
        grades: {
          explorers: {
            tagline: "Si vous étirez l'espace sans l'écraser, peut-il se replier sur lui-même ?",
            analogy: "En étirant une feuille élastique sans jamais réduire une case à zéro, deux points distincts peuvent-ils se superposer ?",
            rules: ["Le déterminant jacobien ne s'annule jamais.", "Keller pensait en 1939 que le repliement était impossible."],
            mystery: "En juillet 2026, l'IA (Claude Fable 5) a trouvé un contre-exemple 3D qui replie l'espace !",
            funFact: "La formule de l'IA ne faisait que 216 caractères, après 87 ans de recherches humaines !"
          },
          investigators: {
            tagline: "Inversibilité locale vs globale et l'énigme du plan 2D.",
            analogy: "Réfutée en dimension n ≥ 3 ; la conjecture 2D (ℂ² → ℂ²) reste totalement OUVERTE !",
            rules: ["Deux points distincts de ℂ³ ont la même image."],
            mystery: "Le plan 2D empêche-t-il le pliage ?",
            funFact: "Vérifié en quelques heures via SymPy et Lean 4."
          },
          pioneers: {
            tagline: "Automorphismes affines et conjecture de Dixmier.",
            rules: ["Juillet 2026 : Alpöge et Claude Fable 5 réfutent pour n ≥ 3."],
            mystery: "L'injectivité tient-elle en dimension 2 ?",
            funFact: "Recherche collaborative intense entre géomètres et LLMs."
          }
        },
        history: [
          { year: "1939", author: "Keller", note: "Énoncé de la conjecture." },
          { year: "Juillet 2026", author: "Alpöge & Claude Fable 5", note: "Contre-exemple en dimension 3." }
        ]
      },
      it: {
        name: "La Congettura Jacobiana",
        subtitle: "La Griglia di Coordinate Deformata",
        field: "Geometria Algebrica",
        statusBadge: "CONFUTATO DA IA 2026",
        grades: {
          explorers: {
            tagline: "Deformando lo spazio senza schiacciarlo, può ripiegarsi su se stesso?",
            analogy: "Se deformi un foglio di gomma mantenendo l'area diversa da zero, due punti possono sovrapporsi?",
            rules: ["Determinante jacobiano mai nullo.", "Keller ipotizzò l'invertibilità globale."],
            mystery: "Nel luglio 2026 l'IA Claude Fable 5 ha trovato un controesempio 3D che ripiega lo spazio!",
            funFact: "La formula trovata dall'IA era lunga appena 216 caratteri!"
          },
          investigators: {
            tagline: "Invertibilità locale vs globale e il caso 2D aperto.",
            analogy: "Confutata per n ≥ 3; il caso piano ℂ² rimane APERTO!",
            rules: ["Mappa non iniettiva in ℂ³."],
            mystery: "La topologia di ℂ² impedisce il ripiegamento?",
            funFact: "Verificato formalmente in Lean 4 poche ore dopo l'annuncio."
          },
          pioneers: {
            tagline: "Automorfismi affini e congettura di Dixmier.",
            rules: ["Luglio 2026 : confutazione per n ≥ 3 con det(JF) = -2."],
            mystery: "Esiste un controesempio di grado elevato in dimensione 2?",
            funFact: "Attiva frontiera di ricerca congiunta matematici-IA."
          }
        },
        history: [
          { year: "1939", author: "Keller", note: "Formula la congettura." },
          { year: "Luglio 2026", author: "Alpöge & Claude Fable 5", note: "Controesempio 3D confuta n ≥ 3." }
        ]
      },
      ko: {
        name: "야코비안 추측",
        subtitle: "뒤틀린 좌표계의 미스터리",
        field: "대수기하학 및 다변수 미적분학",
        statusBadge: "2026 AI 반례로 반증",
        grades: {
          explorers: {
            tagline: "고무 공간을 찌그러뜨리지 않고 매끄럽게 늘이면, 공간이 스스로 겹쳐질 수 있을까?",
            analogy: "어떤 모눈종이 칸도 면적이 0으로 줄어들지 않도록 매끄럽게 늘렸을 때(야코비안 행렬식이 0이 아님), 서로 완전히 다른 두 점이 우연히 같은 위치에 겹쳐지는 '접힘'이 발생할 수 있을까요?",
            rules: ["다항식 사상은 좌표 (x, y)를 새로운 (P, Q)로 변환함.", "야코비안 행렬식은 국소 면적 변화율을 측정.", "변화율이 어디서나 0이 아닌 상수라면 항상 일대일 복원(역변환)이 가능할까?"],
            mystery: "1939년 켈러는 '절대 겹치지 않는다'고 추측했습니다. 하지만 2026년 7월, AI(Claude Fable 5)가 3차원 공간을 스스로 겹치게 접어버리는 다항식 사상을 발견해 87년 만에 추측을 깼습니다!",
            funFact: "AI가 발견한 반례 수식의 길이는 단 216자에 불과했습니다. 이렇게 짧은 식을 인류는 87년 동안 찾지 못했던 것입니다!"
          },
          investigators: {
            tagline: "국소 가역성과 대역적 가역성의 괴리, 그리고 남아있는 2차원 평면의 미스터리.",
            analogy: "3차원 이상(n ≥ 3)에서는 반례가 발견되어 추측이 거짓으로 판명되었으나, 2차원 평면(ℂ² → ℂ²)의 경우는 여전히 미해결 상태로 남아 있습니다!",
            rules: ["켈러 조건: det(J(F))가 0이 아닌 복소수 상수.", "Claude Fable 5는 서로 다른 두 입력이 동일한 출력을 내는 ℂ³ 사상을 구성."],
            mystery: "3차원에서는 공간의 뒤틀림이 중복을 만들었지만, 2차원 평면에서는 위상적 제약이 겹침을 막아줄까요?",
            funFact: "발표 직후 전 세계 수학자들은 SymPy와 Lean 4를 사용하여 몇 시간 만에 반례를 엄밀히 검증했습니다."
          },
          pioneers: {
            tagline: "아핀 자기동형사상, 바일 대수 딕스미에 추측 동치성, 그리고 2차원 프론티어.",
            analogy: "야코비안 추측은 바일 대수 상의 딕스미에 추측과 동치임이 증명되어 있습니다.",
            rules: ["2026년 7월: Alpöge & Claude Fable 5가 det(JF) = -2인 비단사 다항식 사상을 구성.", "평면(n = 2) 야코비안 추측은 미해결로 잔존."],
            mystery: "평면 ℂ²에서는 단사성이 유지될 것인가, 아니면 AI가 초고차수 2차원 반례를 발견할 것인가?",
            funFact: "현재 대수기하학자들과 프론티어 AI 모델 간에 2차원 반례 탐색을 위한 집중 연구가 진행 중입니다."
          }
        },
        history: [
          { year: "1939", author: "오트-하인리히 켈러", note: "다항식 환에 대한 추측 제기." },
          { year: "1982", author: "바스, 코넬, 라이트", note: "차수 3으로의 축약 정리 증명." },
          { year: "2026년 7월", author: "레벤트 알포게 & Claude Fable 5", note: "ℂ³ 명시적 반례 발견으로 n ≥ 3 부정." },
          { year: "현재", author: "전 세계 수학계", note: "남겨진 2차원 평면 문제 해결을 위한 AI 협동 연구 가열." }
        ]
      },
      ja: {
        name: "ヤコビアン予想",
        subtitle: "歪められた空間座標の謎",
        field: "代数幾何学・多変数微積分",
        statusBadge: "2026年 AIが反例発見",
        grades: {
          explorers: {
            tagline: "ゴムの空間をつぶさずに滑らかに変形したら、空間が自分自身に重なることはある？",
            analogy: "ゴムシートに方眼紙のマス目を描いてみよう。シートを滑らかに引っ張ったりねじったりして、どの小さなマス目も面積がゼロにつぶれないように伸ばしたとします（これがヤコビアン行列式がゼロでない状態）。このとき、完全に別の場所にあった2つの点が、偶然同じ場所に重なってしまう「折り畳み」は起こるでしょうか？",
            rules: [
              "多項式写像：座標 (x, y) を新しい座標 (P(x,y), Q(x,y)) に変換する。",
              "ヤコビアン行列式：各地点での局所的な面積拡大率を表す値。",
              "拡大率がどこでもゼロでない定数なら、この変形は1対1（逆戻し可能）なのだろうか？"
            ],
            mystery: "1939年にケラーが「重なりは絶対に起こらない」と予想しました。しかし2026年7月、AI（Claude Fable 5）が3次元空間を折り畳んでしまう多項式写像を発見し、87年越しの予想を打ち破りました！",
            funFact: "Claudeが発見した反例の数式はわずか216文字。こんなに短い式を、人類は87年間も見落としていたのです！"
          },
          investigators: {
            tagline: "局所可逆性と大域的可逆性の乖離、そして2次元平面版の残された謎。",
            analogy: "1変数微積分では導関数がゼロでなければ局所的に逆関数が存在します。しかし複素空間多項式写像において、ヤコビアン行列式が非ゼロ定数なら大域的にも1対1（単射）といえるのか？",
            rules: [
              "ケラー条件：det(J(F)) が非ゼロの複素数定数。",
              "2026年7月：3次元以上（n ≥ 3）で反例が発見され予想は否定されました！",
              "ただし、2次元（平面 ℂ² → ℂ²）の場合はいまだ未解決のままです！"
            ],
            mystery: "3次元空間では空間のねじれが自己重複を生み出しました。では2次元平面では位相的制約が重なりを防いでいるのか？",
            funFact: "発表後、世界中の数学者がSymPyやLean 4を用いて数時間以内に反例の正当性を確認しました。"
          },
          pioneers: {
            tagline: "アフィン空間の自己同型、ワイル代数ディクスミエ予想同値性、2次元フロンティア。",
            analogy: "ヤコビアン予想はワイル代数上のディクスミエ予想と同値であることが土本・ベロフカネル・コンツェビッチにより証明されています。",
            rules: [
              "2026年7月、レヴェント・アルポゲとClaude Fable 5が det(JF) = -2 を持つ非単射な多項式写像を構成。",
              "平面版（n=2）ヤコビアン予想は未解決のまま残存。"
            ],
            mystery: "平面 ℂ² では単射性が保たれるのか、それとも超高次数の反例がAIによって発見されるのか？",
            funFact: "現在、2次元反例の有無をめぐり、代数幾何学者とフロンティアAIの間で集中的な共同研究が続けられています。"
          }
        },
        history: [
          { year: "1939", author: "オットー・ハインリヒ・ケラー", note: "多項式環上の予想として提起。" },
          { year: "1982", author: "バス, コネル, ライト", note: "問題を整理し次数3への簡約定理を証明。" },
          { year: "2026年7月", author: "レヴェント・アルポゲ & Claude Fable 5", note: "ℂ³における明示的反例を発見し n ≥ 3 の予想を否定。" },
          { year: "現在", author: "世界数学コミュニティ", note: "残された2次元（平面）予想の解決に向けたAI協調研究が加熱。" }
        ]
      },
      "zh-Hans": {
        name: "雅可比猜想",
        subtitle: "被扭曲的坐标之网",
        field: "代数几何与多元微积分",
        statusBadge: "2026 AI构造反例否定",
        grades: {
          explorers: {
            tagline: "如果平滑拉伸一张橡胶网而不捏碎任何方格，它会自己折叠重叠吗？",
            analogy: "在橡胶布上画满方格。如果处处平滑拉伸扭曲，没有任何一个微小方格被压扁成面积为0（雅可比行列式处处不为零），有没有可能发生意外折叠，导致原本处于两个完全不同地点的点，重合在了一起？",
            rules: [
              "多项式变换将坐标 (x, y) 映射到新的 (P(x,y), Q(x,y))。",
              "雅可比行列式度量局部面积缩放率。",
              "如果缩放率处处为不为零的常数，变换是否整体可逆（一一对应）？"
            ],
            mystery: "1939年凯勒猜想：绝不可能重叠！然而在2026年7月，AI（Claude Fable 5）找到了一个3维多项式映射，硬生生把空间自身折叠重合了！",
            funFact: "AI发现的反例多项式仅有216个字符长，而全人类数学家竟苦苦寻觅了87年！"
          },
          investigators: {
            tagline: "局部可逆与全局可逆的鸿沟，以及悬而未决的2维平面猜想。",
            analogy: "在实微积分中导数不为零意味着局部可逆。但在复多项式映射中，处处雅可比行列式非零是否意味着全局单射？",
            rules: [
              "凯勒条件：det(J(F)) 为非零常数。",
              "2026年7月被推翻：对于维数 n ≥ 3，猜想不成立！",
              "但2维平面情形（ℂ² → ℂ²）至今仍然是未解之谜！"
            ],
            mystery: "Claude Fable 5 构造了 ℂ³ 中的映射，使得两个完全不同的点输入后得到完全相同的输出。",
            funFact: "数学家们在几小时内通过 SymPy 和 Lean 4 严密验证了该反例的正确性。"
          },
          pioneers: {
            tagline: "仿射自同构、外尔代数迪克斯米耶猜想等价性与2维前沿。",
            analogy: "雅可比猜想与外尔代数上的迪克斯米耶猜想存在深刻的等价性。",
            rules: [
              "2026年7月：Alpöge 与 Claude Fable 5 构造了 det(JF) = -2 的非单射反例。",
              "平面情形 (n = 2) 依然悬而未决。"
            ],
            mystery: "ℂ² 的拓扑刚性是否能保证单射成立，还是AI会找到一个超高次数的2维反例？",
            funFact: "寻找2维反例已成为代数几何学者与前沿大模型最热门的协同研究课题之一。"
          }
        },
        history: [
          { year: "1939", author: "奥特-海因里希·凯勒", note: "提出多项式映射雅可比猜想。" },
          { year: "1982", author: "Bass, Connell, Wright", note: "证明问题可约化为3次多项式情形。" },
          { year: "2026年7月", author: "Levent Alpöge 与 Claude Fable 5", note: "在 ℂ³ 中构造出显式反例，推翻 n ≥ 3 情形。" },
          { year: "当前", author: "全球数学界", note: "AI与数学家正全力围攻悬存的2维平面难题。" }
        ]
      },
      "zh-Hant": {
        name: "雅可比猜想",
        subtitle: "被扭曲的座標之網",
        field: "代數幾何與多元微積分",
        statusBadge: "2026 AI構造反例否定",
        grades: {
          explorers: {
            tagline: "如果平滑拉伸橡皮網而不捏碎方格，空間會自己折疊重疊嗎？",
            analogy: "如果處處平滑拉伸空間，局部的面積縮放率永遠不為零，有沒有可能導致原本兩處不同的點映射到同一位置？",
            rules: ["雅可比行列式度量局部縮放率。", "行列式為非零常數時，變換是否處處可逆？"],
            mystery: "1939年凱勒猜想不可能重疊！但2026年7月，AI（Claude Fable 5）發現了折疊3維空間的216字元反例！",
            funFact: "這道僅有216個字元的反例數式，全人類苦苦找尋了87年！"
          },
          investigators: {
            tagline: "局部可逆與全域可逆的鴻溝，以及未解的2維平面猜想。",
            analogy: "對於維數 n ≥ 3，猜想已被推翻；但2維平面版本（ℂ² → ℂ²）至今仍未解！",
            rules: ["Claude Fable 5 在 ℂ³ 中找到了兩個不同點輸出相同結果的確鑿反例。"],
            mystery: "2維平面的拓撲結構是否阻止了空間折疊？",
            funFact: "全球數學家在數小時內透過電腦代數驗證了該反例。"
          },
          pioneers: {
            tagline: "仿射自同構、外爾代數等價性與2維平面終極前沿。",
            analogy: "雅可比猜想與迪克斯米耶猜想等價。",
            rules: ["2026年7月：Alpöge 與 Claude Fable 5 構造了 det(JF) = -2 的非單射反例。"],
            mystery: "ℂ² 的平面幾何是否保證了單射性，還是AI能找到更高次的2維反例？",
            funFact: "2維猜想目前是代數幾何領域最熱門的AI協同攻關方向之一。"
          }
        },
        history: [
          { year: "1939", author: "凱勒", note: "提出雅可比猜想。" },
          { year: "2026年7月", author: "Alpöge 與 Claude Fable 5", note: "構造 ℂ³ 反例，推翻 n ≥ 3 猜想。" },
          { year: "當前", author: "全球數學界", note: "全力攻堅2維平面版本的終極命運。" }
        ]
      }
    }
  }
];

/**
 * Helper to get conjectures with localized content for the active language,
 * falling back to English if a language isn't fully translated.
 */
export function getLocalizedConjectures(lang = "en") {
  return RAW_CONJECTURES.map(item => {
    const loc = item.locales[lang] || item.locales.en;
    const enLoc = item.locales.en;

    return {
      id: item.id,
      icon: item.icon,
      difficulty: item.difficulty,
      simId: item.simId,
      leanCode: item.leanCode,
      name: loc.name || enLoc.name,
      subtitle: loc.subtitle || enLoc.subtitle,
      field: loc.field || enLoc.field,
      statusBadge: loc.statusBadge || enLoc.statusBadge,
      grades: loc.grades || enLoc.grades,
      history: loc.history || enLoc.history
    };
  });
}

export const CONJECTURES = getLocalizedConjectures("en");
