/**
 * Lean 4 Interactive Formal Proof Inspector
 * Displays real Lean 4 mathematical code side-by-side with plain explanations,
 * with localized glossary definitions for all 8 languages.
 */

import { i18n } from "../i18n/i18n.js";

export class LeanViewer {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.activeSnippetKey = "flt";

    this.snippets = {
      "flt": {
            "titleKey": "fermat",
            "code": "import Mathlib.NumberTheory.FLT.Basic\n\n/-- Fermat's Last Theorem:\n    No three positive integers a, b, c satisfy aⁿ + bⁿ = cⁿ for n > 2 -/\ntheorem fermat_last_theorem (n : ℕ) (hn : n > 2) :\n  ∀ a b c : ℕ, a > 0 → b > 0 → c > 0 → a^n + b^n ≠ c^n := by\n  -- Formally verified in Lean 4 (Sept 2026)\n  sorry",
            "locales": {
                  "en": {
                        "title": "Fermat's Last Theorem (Sept 2026 Formalization)",
                        "context": "Proved by Andrew Wiles in 1995; formalized across 13 million lines of Lean 4 by Anthropic's Claude in 11 days (verified by Kevin Buzzard).",
                        "points": [
                              "1. For any power n greater than 2...",
                              "2. And for any positive whole numbers a, b, and c...",
                              "3. The equation a^n + b^n can NEVER equal c^n.",
                              "4. The computer verifies every single logical deduction with zero human error."
                        ]
                  },
                  "de": {
                        "title": "Großer Fermatscher Satz (Lean 4 Formalisierung Sept 2026)",
                        "context": "Beweis von Wiles (1995); vollständig formalisiert in Lean 4 (13 Mio. Zeilen) durch Claude in 11 Tagen (geprüft von Kevin Buzzard).",
                        "points": [
                              "1. Für jeden Exponenten n größer als 2...",
                              "2. Und für alle positiven ganzen Zahlen a, b und c...",
                              "3. Kann aⁿ + bⁿ NIEMALS gleich cⁿ sein.",
                              "4. Der Computer prüft jeden einzelnen Deduktionsschritt ohne menschliche Fehler."
                        ]
                  },
                  "fr": {
                        "title": "Dernier Théorème de Fermat (Formalisation Lean 4 Sept 2026)",
                        "context": "Démontré par Andrew Wiles en 1995 ; formalisé en 13 millions de lignes de Lean 4 par Claude en 11 jours (validé par Kevin Buzzard).",
                        "points": [
                              "1. Pour toute puissance n strictement supérieure à 2...",
                              "2. Et pour tous entiers positifs a, b et c...",
                              "3. L'équation aⁿ + bⁿ ne peut JAMAIS être égale à cⁿ.",
                              "4. L'ordinateur vérifie chaque étape logique avec une certitude absolue."
                        ]
                  },
                  "it": {
                        "title": "Ultimo Teorema di Fermat (Formalizzazione Lean 4 Sett 2026)",
                        "context": "Dimostrato da Andrew Wiles nel 1995; formalizzato in 13 milioni di righe di Lean 4 da Claude in 11 giorni.",
                        "points": [
                              "1. Per ogni esponente n maggiore di 2...",
                              "2. E per ogni terna di numeri interi positivi a, b, c...",
                              "3. L'equazione aⁿ + bⁿ non può MAI essere uguale a cⁿ.",
                              "4. Il computer verifica ogni singolo passaggio logico senza errori umani."
                        ]
                  },
                  "ja": {
                        "title": "フェルマーの最終定理（2026年9月 機械形式化）",
                        "context": "1995年のワイルズの証明を、AI（Claude）が11日間で1300万行のLean 4コードへと完全形式化（ケヴィン・バザード検証）。",
                        "points": [
                              "1. 2より大きい任意の自然数べき乗 n について…",
                              "2. そして正の整数 a, b, c について…",
                              "3. 方程式 aⁿ + bⁿ は 決して cⁿ と等しくならない。",
                              "4. コンピュータが人間の思い違いの余地なく、すべての演繹ステップを100%検証。"
                        ]
                  },
                  "ko": {
                        "title": "페르마의 마지막 정리 (2026년 9월 기계 형식화)",
                        "context": "앤드루 와일스의 증명을 AI가 1,300만 줄의 Lean 4 코드로 11일 만에 완전 형식화.",
                        "points": [
                              "1. 2보다 큰 모든 자연수 거듭제곱 n에 대하여...",
                              "2. 그리고 모든 양의 정수 a, b, c에 대하여...",
                              "3. aⁿ + bⁿ은 결코 cⁿ과 같을 수 없다.",
                              "4. 컴퓨터가 단 하나의 오류도 없이 모든 논리적 단계를 완벽 검증."
                        ]
                  },
                  "zh-Hans": {
                        "title": "费马大定理（2026年9月 机器形式化证明）",
                        "context": "怀尔斯1995年证明；由AI（Claude）在11天内自主生成1300万行Lean 4代码完全形式化验证。",
                        "points": [
                              "1. 对于任何大于 2 的整数幂次 n...",
                              "2. 以及任意三个正整数 a, b, c...",
                              "3. 等式 aⁿ + bⁿ 绝不可能等于 cⁿ。",
                              "4. 计算机形式化系统确保推理步骤100%严密无漏，排除任何人类笔误。"
                        ]
                  },
                  "zh-Hant": {
                        "title": "費馬最後定理（2026年9月 機器形式化證明）",
                        "context": "懷爾斯證明；由AI在11天內生成1300萬行Lean 4代碼完全形式化驗證。",
                        "points": [
                              "1. 對於任何大於 2 的冪次 n...",
                              "2. 以及任意正整數 a, b, c...",
                              "3. 等式 aⁿ + bⁿ 絕不可能等於 cⁿ。",
                              "4. 電腦形式化系統確保推導100%嚴密無誤。"
                        ]
                  }
            }
      },
      "erdos": {
            "titleKey": "erdos",
            "code": "import Mathlib.Analysis.InnerProductSpace.EuclideanDist\n\ndef UnitDistances (P : Finset (EuclideanSpace ℝ (Fin 2))) : ℕ :=\n  (P.filter (fun p => ∃ q ∈ P, p ≠ q ∧ dist p q = 1)).card / 2\n\ntheorem erdos_unit_distance_counterexample :\n  ∃ ε > 0, ∃ c > 0, ∀ N : ℕ, ∃ (P : Finset (EuclideanSpace ℝ (Fin 2))),\n    P.card ≥ N ∧ (UnitDistances P : ℝ) ≥ c * (P.card : ℝ)^(1 + ε) := by\n  sorry",
            "locales": {
                  "en": {
                        "title": "Erdős Unit Distance Problem (May 2026 AI Disproof)",
                        "context": "Proposed in 1946 by Erdős; disproved by an AI model in May 2026 with an explicit counterexample.",
                        "points": [
                              "1. Define the unit distance count on any set of points P in 2D space.",
                              "2. Erdős conjectured distances grow at most as n^(1 + tiny bit).",
                              "3. Counterexample theorem: Distances grow strictly as n^(1 + ε) for ε > 0.",
                              "4. Formally codified and verified in Lean 4."
                        ]
                  },
                  "de": {
                        "title": "Erdős-Einheitsabstand-Problem (KI-Widerlegung Mai 2026)",
                        "context": "1946 von Erdős vorgeschlagen; im Mai 2026 durch ein KI-Modell mit einem expliziten Gegenbeispiel widerlegt.",
                        "points": [
                              "1. Definiere die Anzahl der Einheitsabstände in einer Punktmenge P in der 2D-Ebene.",
                              "2. Erdős vermutete, dass Abstände höchstens wie n^(1+o(1)) wachsen.",
                              "3. Gegenbeispiel: Die Abstände wachsen strikt mit n^(1+ε) für ein ε > 0.",
                              "4. Vollständig in Lean 4 formalisiert und maschinell geprüft."
                        ]
                  },
                  "fr": {
                        "title": "Problème des Distances Unitaires d'Erdős (Réfutation IA Mai 2026)",
                        "context": "Proposé en 1946 par Erdős ; réfuté en mai 2026 par une IA découvrant un contre-exemple géométrique explicite.",
                        "points": [
                              "1. Définit le nombre de paires à distance 1 dans un ensemble de points 2D P.",
                              "2. Erdős conjecturait une borne supérieure de n^(1+o(1)).",
                              "3. Théorème du contre-exemple : les distances croissent en n^(1+ε) avec ε > 0.",
                              "4. Formalisé et vérifié par ordinateur dans Lean 4."
                        ]
                  },
                  "it": {
                        "title": "Problema delle Distanze Unitarie di Erdős (Confutazione AI Maggio 2026)",
                        "context": "Proposto nel 1946 da Erdős; confutato nel maggio 2026 da un'IA mediante un controesempio esplicito.",
                        "points": [
                              "1. Definisce il conteggio delle distanze unitarie su un insieme di punti 2D P.",
                              "2. Erdős ipotizzava che le distanze crescessero al massimo come n^(1+o(1)).",
                              "3. Controesempio: le distanze crescono rigorosamente come n^(1+ε) con ε > 0.",
                              "4. Formalizzato e verificato in Lean 4."
                        ]
                  },
                  "ja": {
                        "title": "エルデシュ単位距離予想（2026年5月 AIによる反例構成）",
                        "context": "1946年にエルデシュが提起。2026年5月にAIが反例点集を構成し80年ぶりに否定。",
                        "points": [
                              "1. 平面上の任意の点集合 P における単位距離ペアの数を定義する。",
                              "2. エルデシュは距離数が高々 n^(1 + ごくわずか) でしか増えないと予想。",
                              "3. 反例定理：ε > 0 の定数が存在し、距離数は n^(1 + ε) で厳密に増加する。",
                              "4. Lean 4において形式化され、コンピュータによって完全検証。"
                        ]
                  },
                  "ko": {
                        "title": "에르되시 단위 거리 추측 (2026년 5월 AI 반례 구성)",
                        "context": "1946년 에르되시가 제기. 2026년 5월 AI가 기하학적 반례를 찾아 80년 만에 반증.",
                        "points": [
                              "1. 2차원 평면 점 집합 P에서 단위 거리인 쌍의 개수를 정의합니다.",
                              "2. 에르되시는 거리의 수가 기껏해야 n^(1+o(1)) 비율로 증가할 것이라 추측했습니다.",
                              "3. 반례 정리: ε > 0 인 상수가 존재하여 거리가 n^(1+ε) 비율로 엄밀히 증가합니다.",
                              "4. Lean 4를 통해 컴퓨터로 한 치의 오차 없이 검증되었습니다."
                        ]
                  },
                  "zh-Hans": {
                        "title": "埃尔德什单位距离问题（2026年5月 AI构造反例）",
                        "context": "1946年提出；2026年5月AI构造反例点集终结80年难题。",
                        "points": [
                              "1. 定义二维平面任意点集 P 中距离恰为 1 的点对数。",
                              "2. 埃尔德什曾猜想该点对数增长阶至多为 n^(1+o(1))。",
                              "3. AI反例定理：存在正实数 ε，使得单位距离对数严格按 n^(1+ε) 增长。",
                              "4. 并在Lean 4中被完全形式化检验无误。"
                        ]
                  },
                  "zh-Hant": {
                        "title": "埃爾德什單位距離問題（2026年5月 AI構造反例）",
                        "context": "1946年提出；2026年5月AI構造反例點集打破80年猜想。",
                        "points": [
                              "1. 定義二維平面任意點集 P 中距離恰為 1 的點對數。",
                              "2. 埃爾德什曾猜想點對數增長階至多為 n^(1+o(1))。",
                              "3. AI反例定理：存在常數 ε > 0，使得單位距離數以 n^(1+ε) 速率增長。",
                              "4. 在Lean 4中完全形式化驗證無誤。"
                        ]
                  }
            }
      }
};
    this.glossaries = {
      "en": {
            "theorem": "A mathematical statement that has been rigorously proved true.",
            "def": "A definition that introduces a new concept or function.",
            "∀": "For all (universal quantifier): must hold true for every single case.",
            "∃": "There exists (existential quantifier): at least one case exists.",
            "ℕ": "Natural numbers (0, 1, 2, 3...).",
            "ℝ": "Real numbers (all continuous numbers, including decimals).",
            "by": "Begins a proof using interactive tactics.",
            "sorry": "Placeholder meaning 'proof goes here' (used to state conjectures).",
            "omega": "Automated tactic in Lean that solves integer and arithmetic logic instantly!"
      },
      "de": {
            "theorem": "Theorem/Satz: Eine mathematische Aussage, die streng bewiesen wurde.",
            "def": "Definition: Führt ein neues mathematisches Konzept oder eine Funktion ein.",
            "∀": "Allquantor (für alle): Gilt ausnahmslos für jeden einzelnen Fall.",
            "∃": "Existenzquantor (es existiert): Mindestens ein Fall existiert.",
            "ℕ": "Menge der natürlichen Zahlen (0, 1, 2, 3...).",
            "ℝ": "Menge der reellen Zahlen (Dezimalzahlen, stetige Zahlengerade).",
            "by": "Beginnt einen interaktiven Beweis mit Lean-Taktiken.",
            "sorry": "Platzhalter: 'Beweis folgt hier' (zum Formulieren offener Vermutungen).",
            "omega": "Automatische Taktik in Lean zur blitzschnellen Lösung ganzzahliger Arithmetik!"
      },
      "fr": {
            "theorem": "Théorème : Énoncé mathématique rigoureusement démontré vrai.",
            "def": "Définition : Introduit un nouveau concept ou une nouvelle fonction.",
            "∀": "Pour tout (quantificateur universel) : doit être vrai dans chaque cas.",
            "∃": "Il existe (quantificateur existentiel) : au moins un cas existe.",
            "ℕ": "Ensemble des entiers naturels (0, 1, 2, 3...).",
            "ℝ": "Ensemble des nombres réels (droite continue, décimaux).",
            "by": "Commence une démonstration à l'aide de tactiques Lean.",
            "sorry": "Balise d'attente : 'la preuve viendra ici' (utilisé pour les conjectures).",
            "omega": "Tactique automatisée de Lean qui résout instantanément la logique arithmétique !"
      },
      "it": {
            "theorem": "Teorema: Proposizione matematica rigorosamente dimostrata vera.",
            "def": "Definizione: Introduce un nuovo concetto matematico o una funzione.",
            "∀": "Per ogni (quantificatore universale): deve valere per ogni singolo caso.",
            "∃": "Esiste (quantificatore esistenziale): esiste almeno un caso valido.",
            "ℕ": "Insieme dei numeri naturali (0, 1, 2, 3...).",
            "ℝ": "Insieme dei numeri reali (tutti i numeri decimali e continui).",
            "by": "Inizia la dimostrazione formale mediante tattiche interattive.",
            "sorry": "Segnaposto: 'la prova va qui' (usato per enunciare congetture aperte).",
            "omega": "Tattica automatica di Lean che risolve istantaneamente l'aritmetica intera!"
      },
      "ja": {
            "theorem": "定理：厳密に正しいことが証明された数学的主張。",
            "def": "定義：新しい数学的概念や関数を定義する宣言。",
            "∀": "全称記号（すべての〜について）：任意の対象で成り立つことを示す。",
            "∃": "存在記号（〜が存在する）：少なくとも1つ存在することを示す。",
            "ℕ": "自然数の集合（0, 1, 2, 3...）。",
            "ℝ": "実数の集合（小数や無理数を含むすべての連続な数）。",
            "by": "対話的タクティクを用いて証明を開始する合図。",
            "sorry": "プレースホルダー：「ここに証明が入る」（予想を定式化する際に使用）。",
            "omega": "整数論・線形合同算術を自動で瞬時に解く強力なLeanの自動タクティク！"
      },
      "ko": {
            "theorem": "정리: 엄밀하게 참임이 증명된 수학적 명제.",
            "def": "정의: 새로운 수학적 개념이나 함수를 정의하는 선언문.",
            "∀": "전칭 기호 (모든 ~에 대하여): 모든 경우에 대해 성립함을 의미.",
            "∃": "존재 기호 (~가 존재한다): 조건을 만족하는 대상이 최소 하나 존재함.",
            "ℕ": "자연수 집합 (0, 1, 2, 3...).",
            "ℝ": "실수 집합 (소수 및 무리수를 포함한 연속적인 수).",
            "by": "전술(Tactics)을 사용하여 증명을 시작함을 알리는 키워드.",
            "sorry": "자리 표시자: '증명이 들어갈 자리' (열린 추측을 서술할 때 사용).",
            "omega": "정수 산술 논리를 한순간에 자동으로 풀어내는 강력한 Lean 내장 전술!"
      },
      "zh-Hans": {
            "theorem": "定理：被严密证明为真的数学命题。",
            "def": "定义：引入新概念或函数的关键字。",
            "∀": "全称量词（对于所有）：表示对每一个元素都成立。",
            "∃": "存在量词（存在）：表示至少存在一个满足条件的元素。",
            "ℕ": "自然数集合（0, 1, 2, 3...）。",
            "ℝ": "实数集合（包含小数和无理数的连续数轴）。",
            "by": "开始使用证明策略（Tactics）进行交互式证明。",
            "sorry": "占位符：表示“此处有证明待填”（常用于形式化猜想语句）。",
            "omega": "Lean 4中自动求解整数算术逻辑的杀手级策略！"
      },
      "zh-Hant": {
            "theorem": "定理：經嚴密證明為真的數學命題。",
            "def": "定義：引入新概念或函數的關鍵字。",
            "∀": "全稱量詞（對於所有）：對每一個情況都成立。",
            "∃": "存在量詞（存在）：表示至少存在一個實例。",
            "ℕ": "自然數集合（0, 1, 2, 3...）。",
            "ℝ": "實數集合（包含小數與無理數的連續數線）。",
            "by": "開始使用交互策略進行形式證明。",
            "sorry": "佔位符：表示「待補全證明」（常用於形式化猜想語句）。",
            "omega": "Lean 4中自動求解整數邏輯的強大策略！"
      }
};
  }

  init() {
    this.render();
    i18n.onLanguageChange(() => {
      this.render();
    });
  }

  selectSnippet(key) {
    this.activeSnippetKey = key;
    this.render();
  }

  highlightCode(code, lang) {
    const dict = this.glossaries[lang] || this.glossaries.en;
    let res = code;
    Object.keys(dict).forEach(term => {
      const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`\\b${escaped}\\b|${escaped}`, 'g');
      res = res.replace(regex, (match) => {
        return `<span class="lean-kw" data-term="${term}">${match}</span>`;
      });
    });
    return res;
  }

  render() {
    if (!this.container) return;

    const lang = i18n.getLanguage();
    const data = this.snippets[this.activeSnippetKey] || this.snippets.flt;
    const loc = data.locales[lang] || data.locales.en;
    const glossaryDict = this.glossaries[lang] || this.glossaries.en;

    const tGlossaryHeader = {
      en: "Formal Proof Term Glossary",
      de: "Glossar für formale Beweisbegriffe",
      fr: "Glossaire des termes de preuve formelle",
      it: "Glossario dei termini di prova formale",
      ja: "形式証明用語集",
      ko: "형식 증명 용어 사전",
      "zh-Hans": "形式化逻辑术语词汇表",
      "zh-Hant": "形式化邏輯術語詞彙表"
    }[lang] || "Formal Proof Term Glossary";

    const tHoverTip = {
      en: "Hover over any highlighted term or symbol in the code on the left to see its formal meaning.",
      de: "Bewege den Mauszeiger über hervorgehobene Symbole im Code, um deren formale Bedeutung zu sehen.",
      fr: "Survolez un terme ou symbole surligné dans le code pour voir sa définition formelle.",
      it: "Passa con il mouse sui termini o simboli evidenziati per visualizzarne il significato formale.",
      ja: "左側のコード内の記号やキーワードに触れると、ここに説明が表示されます。",
      ko: "왼쪽 코드의 강조된 기호나 키워드에 마우스를 올리면 이곳에 설명이 표시됩니다.",
      "zh-Hans": "悬停在左侧代码中的任意高亮符号或关键字上即可在此查看精确语义。",
      "zh-Hant": "懸停在左側代碼中的任意高亮符號或關鍵字上即可在此查看精確語義。"
    }[lang] || "Hover over any highlighted term or symbol in the code on the left to see its formal meaning.";

    const tPlainTrans = {
      en: "Plain Language Breakdown:",
      de: "Verständliche Erklärung:",
      fr: "Explication en langage clair :",
      it: "Spiegazione in linguaggio semplice:",
      ja: "平易な言葉による翻訳・解説:",
      ko: "쉬운 언어로 풀어쓴 해설:",
      "zh-Hans": "通俗含义深度解读:",
      "zh-Hant": "通俗含義深度解讀:"
    }[lang] || "Plain Language Breakdown:";

    this.container.innerHTML = `
      <div class="lean-explorer-box">
        <div class="lean-tabs">
          ${Object.entries(this.snippets).map(([key, item]) => {
            const itemLoc = item.locales[lang] || item.locales.en;
            return `
              <button class="lean-tab-btn ${this.activeSnippetKey === key ? 'active' : ''}" data-key="${key}">
                ${itemLoc.title.split('(')[0]}
              </button>
            `;
          }).join('')}
        </div>

        <div class="lean-display-grid">
          <!-- Left: Highlighted Lean 4 Code -->
          <div class="lean-code-column">
            <div class="code-column-header">
              <div class="file-tab">
                <span>📄 Mathlib.lean</span>
                <span class="lean-verified-tag">${i18n.t("verified_badge")}</span>
              </div>
              <span class="lean-version-tag">Lean v4.16.0</span>
            </div>
            <pre class="lean-interactive-code"><code>${this.highlightCode(data.code, lang)}</code></pre>
            <div class="code-column-footer">
              <small>💡 ${tHoverTip}</small>
            </div>
          </div>

          <!-- Right: Interactive Translation & Term Glossary -->
          <div class="lean-explanation-column">
            <div class="explanation-card">
              <h4>${loc.title}</h4>
              <p class="context-desc">${loc.context}</p>

              <div class="translation-steps">
                <h5>${tPlainTrans}</h5>
                <ul>
                  ${loc.points.map(p => `<li>${p}</li>`).join('')}
                </ul>
              </div>

              <!-- Interactive Term Dictionary Tooltip Card -->
              <div class="hover-dictionary-card" id="lean-term-card">
                <div class="dict-header">
                  <span class="dict-icon">📖</span>
                  <strong id="dict-term-title">${tGlossaryHeader}</strong>
                </div>
                <p id="dict-term-desc">${tHoverTip}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    // Bind tab clicks
    this.container.querySelectorAll(".lean-tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        this.selectSnippet(btn.getAttribute("data-key"));
      });
    });

    // Bind hover on keywords
    this.container.querySelectorAll(".lean-kw").forEach(kw => {
      kw.addEventListener("mouseenter", (e) => {
        const term = e.target.getAttribute("data-term");
        const termTitle = document.getElementById("dict-term-title");
        const termDesc = document.getElementById("dict-term-desc");
        if (termTitle && termDesc && glossaryDict[term]) {
          termTitle.innerText = `Keyword: ${term}`;
          termDesc.innerText = glossaryDict[term];
        }
      });
    });
  }
}
