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
        base: "Collatz Conjecture",
        interactiveTest: "5n+1",
        leanProofSnippet: "-- 5n+1 has known cycle avoiding 1:\ntheorem collatz_5n_cycle : ∃ cycle, 1 ∉ cycle := by sorry",
        locales: {
          en: {
            title: "The 5x + 1 Hailstone Variant",
            prompt: "What happens if we change the odd rule from 3n + 1 to 5n + 1?",
            verdict: "❌ DISPROVEN (Diverges or Traps in Alternate Cycles)",
            gradeExplanation: "In 3n + 1, dividing by 2 happens often enough on average to pull numbers down. But with 5n + 1, multiplying by 5 makes numbers grow faster than divisions by 2 can shrink them! Most numbers shoot toward infinity, and some get caught in loops like 13 → 66 → 33 → 166 → 83...",
            challengeQuestion: "Can you find what happens to the number 7 under the 5n + 1 rule?"
          },
          de: {
            title: "Die 5x + 1 Variante",
            prompt: "Was passiert, wenn wir ungerade Zahlen mit 5 multiplizieren und 1 addieren (5n + 1)?",
            verdict: "❌ WIDERLEGT (Divergiert oder gerät in andere Zyklen)",
            gradeExplanation: "Bei 3n + 1 zieht das Teilen durch 2 die Zahlen im Schnitt nach unten. Bei 5n + 1 wachsen Zahlen schneller, als das Teilen sie verkleinern kann! Viele Bahnen schießen ins Unendliche oder fangen sich in Schleifen wie 13 → 66 → 33 → 166 → 83...",
            challengeQuestion: "Was passiert mit der Zahl 7 unter der Regel 5n + 1?"
          },
          fr: {
            title: "La Variante 5x + 1",
            prompt: "Que se passe-t-il si la règle impaire devient 5n + 1 au lieu de 3n + 1 ?",
            verdict: "❌ RÉFUTÉ (Divergence ou cycles secondaires)",
            gradeExplanation: "Avec 5n + 1, la multiplication par 5 dépasse largement la division par 2. Presque toutes les trajectoires explosent vers l'infini ou restent piégées dans des boucles comme 13 → 66 → 33 → 166...",
            challengeQuestion: "Que devient le nombre 7 avec la règle 5n + 1 ?"
          },
          it: {
            title: "La Variante 5x + 1",
            prompt: "Cosa accade se cambiamo la regola dispari da 3n + 1 a 5n + 1?",
            verdict: "❌ CONFUTATO (Diverge o cade in altri cicli)",
            gradeExplanation: "Con 5n + 1 la moltiplicazione per 5 supera la divisione per 2. Le traiettorie esplodono all'infinito o finiscono in cicli alternativi.",
            challengeQuestion: "Cosa accade al numero 7 con la regola 5n + 1?"
          },
          ja: {
            title: "5x + 1 ルール変種の研究",
            prompt: "奇数のルールを「3n + 1」から「5n + 1」に変えると何が起きる？",
            verdict: "❌ 成立しない（無限大へ発散するか、別のループにトラップされる）",
            gradeExplanation: "3n + 1では平均すると2で割る回数が十分多く、数を引き下げてくれます。しかし5n + 1では5倍の威力が強すぎて、2で割る力に打ち勝ってしまいます！ 多くの数が無限大へと発散し、一部は「13 → 66 → 33 → 166 → 83...」のような別ループに閉じ込められます。",
            challengeQuestion: "数字「7」から5n + 1ルールを始めるとどうなるか計算してみよう！"
          },
          ko: {
            title: "5x + 1 규칙 변형 연구",
            prompt: "홀수 규칙을 3n + 1 대신 5n + 1로 바꾸면 어떻게 될까요?",
            verdict: "❌ 성립하지 않음 (무한 발산하거나 다른 순환에 갇힘)",
            gradeExplanation: "3n + 1에서는 2로 나누는 효과가 수를 아래로 끌어내려 주지만, 5n + 1은 5배의 증가 속도가 너무 빨라 거의 모든 수가 무한대로 발산하거나 13 → 66 → 33 → 166과 같은 다른 루프에 영원히 갇힙니다.",
            challengeQuestion: "숫자 7로 시작하면 어떤 궤적을 그릴지 직접 계산해 보세요!"
          },
          "zh-Hans": {
            title: "5x + 1 变种冰雹数探索",
            prompt: "如果把奇数规则从 3n + 1 改成 5n + 1 会发生什么？",
            verdict: "❌ 不成立（数字大多发散至无穷大或陷入副循环）",
            gradeExplanation: "在 3n + 1 中，对2的除法平均而言足以把数字拉回地面。但对于 5n + 1，乘以5的膨胀速度彻底压倒了除以2！绝大多数数字会爆炸式冲向无限大，还有一部分被困在 13 → 66 → 33 → 166 → 83... 的独立闭环中。",
            challengeQuestion: "试着手算一下数字 7 在 5n + 1 规则下会去向何方？"
          },
          "zh-Hant": {
            title: "5x + 1 變種冰雹數探索",
            prompt: "若將奇數規則由 3n + 1 改為 5n + 1 會如何？",
            verdict: "❌ 不成立（大多發散至無窮大或陷入副循環）",
            gradeExplanation: "在 5n + 1 下，乘5的膨脹速度壓倒了除以2，大多數數字發散至無窮大，或陷入 13 → 66 → 33... 等其他閉環中。",
            challengeQuestion: "嘗試手算數字 7 在 5n + 1 規則下的命運！"
          }
        }
      },
      "prime_triplets": {
        base: "Twin Prime Conjecture",
        interactiveTest: "triplets",
        leanProofSnippet: "theorem prime_triplets_unique (p : ℕ) (h1 : Nat.Prime p) (h2 : Nat.Prime (p+2)) (h3 : Nat.Prime (p+4)) : p = 3 := by omega",
        locales: {
          en: {
            title: "The Prime Triplets Riddle (p, p+2, p+4)",
            prompt: "Are prime triplets (p, p+2, p+4) also infinite?",
            verdict: "💡 PROVEN IMPOSSIBLE (Only ONE exists: (3, 5, 7)!)",
            gradeExplanation: "Look at any 3 consecutive odd numbers: one of them MUST be a multiple of 3! Since 3 is the only prime divisible by 3, the ONLY prime triplet in all of infinity is (3, 5, 7)!",
            challengeQuestion: "Check (11, 13, 15) or (17, 19, 21)—which number isn't prime?"
          },
          de: {
            title: "Das Primzahldrilling-Rätsel (p, p+2, p+4)",
            prompt: "Gibt es unendlich viele Primzahldrillinge (p, p+2, p+4)?",
            verdict: "💡 BEWIESEN UNMÖGLICH (Es gibt nur ein einziges: (3, 5, 7)!)",
            gradeExplanation: "Von drei aufeinanderfolgenden ungeraden Zahlen ist immer genau eine durch 3 teilbar. Da 3 die einzige durch 3 teilbare Primzahl ist, gibt es nur das Trio (3, 5, 7)!",
            challengeQuestion: "Prüfe (11, 13, 15) – welche Zahl ist keine Primzahl?"
          },
          fr: {
            title: "L'Énigme des Triplets Premiers (p, p+2, p+4)",
            prompt: "Les triplets premiers (p, p+2, p+4) sont-ils infinis ?",
            verdict: "💡 PROUVÉ IMPOSSIBLE (Le seul au monde est (3, 5, 7) !)",
            gradeExplanation: "Dans tout triplet de nombres impairs consécutifs, l'un d'eux est obligatoirement divisible par 3. Le seul triplet de premiers est donc (3, 5, 7) !",
            challengeQuestion: "Testez (11, 13, 15) : lequel n'est pas premier ?"
          },
          it: {
            title: "L'Enigma delle Terne di Primi (p, p+2, p+4)",
            prompt: "Le terne di primi (p, p+2, p+4) sono infinite?",
            verdict: "💡 DIMOSTRATO IMPOSSIBILE (Ne esiste solo una: (3, 5, 7)!)",
            gradeExplanation: "Tra tre numeri dispari consecutivi, uno deve essere multiplo di 3. Quindi l'unica terna di primi in tutto l'universo è (3, 5, 7)!",
            challengeQuestion: "Controlla (17, 19, 21): quale numero non è primo?"
          },
          ja: {
            title: "三つ子素数の謎 (p, p+2, p+4)",
            prompt: "双子素数が無限なら、三つ子素数 (p, p+2, p+4) も無限にある？",
            verdict: "💡 不可能と証明済み（宇宙にただ1組：(3, 5, 7) しか存在しない！）",
            gradeExplanation: "連続する3つの奇数を並べると、そのうちの1つは絶対に「3の倍数」になります！ 3の倍数で素数になれるのは3自身だけなので、三つ子素数は全宇宙で (3, 5, 7) のたった1組しかありません！",
            challengeQuestion: "(11, 13, 15) や (17, 19, 21) を見てみよう。どれが素数じゃないかな？"
          },
          ko: {
            title: "세쌍둥이 소수 퍼즐 (p, p+2, p+4)",
            prompt: "쌍둥이 소수가 무한하다면 세쌍둥이 소수도 무한할까요?",
            verdict: "💡 수학적으로 불가능 증명 (전 우주에 단 하나: (3, 5, 7)!)",
            gradeExplanation: "연속하는 세 홀수 중 하나는 무조건 3의 배수가 됩니다. 3의 배수 중 소수는 3뿐이므로, 세쌍둥이 소수는 오직 (3, 5, 7) 하나만 존재합니다!",
            challengeQuestion: "(11, 13, 15)나 (17, 19, 21)을 확인해 보세요. 어떤 수가 소수가 아닐까요?"
          },
          "zh-Hans": {
            title: "三生素数之谜 (p, p+2, p+4)",
            prompt: "如果孪生素数可能无穷，三生素数 (p, p+2, p+4) 也会有无穷组吗？",
            verdict: "💡 已被数学证明不可能（全宇宙只有唯一一组：(3, 5, 7)！）",
            gradeExplanation: "任意三个相邻的连续奇数中，必定恰有一个是3的倍数！而在所有3的倍数中只有3本身是素数，因此全宇宙中唯一的三生素数就只有 (3, 5, 7)！",
            challengeQuestion: "检验一下 (11, 13, 15) 或 (17, 19, 21)，哪一个不是素数？"
          },
          "zh-Hant": {
            title: "三生素數之謎 (p, p+2, p+4)",
            prompt: "三生素數 (p, p+2, p+4) 也會有無窮組嗎？",
            verdict: "💡 已被數學證實不可能（全宇宙只有唯一一組：(3, 5, 7)！）",
            gradeExplanation: "任意三個相鄰連續奇數中必定有一個是3的倍數。因此唯一的解只有 (3, 5, 7)！",
            challengeQuestion: "檢驗 (11, 13, 15) 與 (17, 19, 21)，哪一個不是素數？"
          }
        }
      }
    };
  }

  init() {
    this.render();
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
            <h3>${lang === 'ja' ? '「もしも？」予想を定式化して検証する' : (lang.startsWith('zh') ? '提出并验证“如果改变规则”的衍生猜想' : 'Formulate & Test "What-If" Conjectures')}</h3>
            <p>${lang === 'ja' ? '有名な派生ルールを選んで、AIとともに探究してみよう！' : 'Select a variant to test, or explore how modified rules behave!'}</p>
          </div>

          <div class="hypothesis-selector">
            <label class="input-label">${lang === 'ja' ? '研究テーマの選択:' : 'Choose a Research Topic:'}</label>
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
            <label class="input-label">${lang === 'ja' ? '現在の探究クエリ:' : 'Active Research Query:'}</label>
            <div class="query-input-row">
              <input type="text" id="ai-custom-prompt" value="${loc.prompt}">
              <button class="btn-primary" id="btn-run-ai-explore">⚡ ${lang === 'ja' ? '探究実行' : (lang.startsWith('zh') ? '探索' : 'Explore')}</button>
            </div>
          </div>

          <div class="hypothesis-meta">
            <span class="meta-item"><strong>${lang === 'ja' ? '基本予想:' : 'Base:'}</strong> ${data.base}</span>
            <span class="meta-item"><strong>${lang === 'ja' ? '対象レベル:' : 'Level:'}</strong> K-12</span>
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
              <h5>💡 ${lang === 'ja' ? '数学的直感とメカニズム' : (lang.startsWith('zh') ? '直观分析与数学机理' : 'Intuition & Explanation')}</h5>
              <p>${loc.gradeExplanation}</p>
            </div>

            <div class="challenge-box">
              <h5>🎯 ${lang === 'ja' ? '挑戦ミニクイズ' : (lang.startsWith('zh') ? '思考挑战题' : 'Try This Mini-Challenge')}</h5>
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
