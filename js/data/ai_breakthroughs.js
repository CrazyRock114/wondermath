/**
 * WonderMath AI Mathematics Timeline (2021–2026)
 * Historical progression of artificial intelligence solving, disproving, and formalizing mathematics,
 * localized for 8 languages.
 */

export const RAW_AI_BREAKTHROUGHS = [
  {
    year: "Dec 2021",
    model: "DeepMind AlphaFold / Geometric ML",
    system: "DeepMind & Oxford / Sydney",
    impact: "Nature Publication",
    locales: {
      en: {
        achievement: "Knot Theory & Kazhdan–Lusztig Invariants",
        badge: "PATTERN DISCOVERY",
        description: "Machine learning guided human mathematicians to discover a formula connecting hyperbolic and algebraic invariants of knots, and formulated/proved the combinatorial invariance conjecture."
      },
      de: {
        achievement: "Knotentheorie & Kazhdan–Lusztig-Invarianten",
        badge: "MUSTERERKENNUNG",
        description: "Maschinelles Lernen half Mathematikern, Zusammenhänge zwischen hyperbolischen und algebraischen Knoteninvarianten zu entdecken und Vermutungen zu beweisen."
      },
      fr: {
        achievement: "Théorie des Nœuds & Invariants de Kazhdan–Lusztig",
        badge: "DÉCOUVERTE DE MOTIFS",
        description: "L'apprentissage automatique a guidé les mathématiciens pour relier les invariants hyperboliques et algébriques des nœuds."
      },
      it: {
        achievement: "Teoria dei Nodi & Invarianti di Kazhdan–Lusztig",
        badge: "SCOPERTA DI PATTERN",
        description: "Il machine learning ha guidato i matematici nello scoprire relazioni tra invarianti iperbolici e algebrici dei nodi."
      },
      ja: {
        achievement: "結び目理論とカジュダン・ルスティック不変量",
        badge: "AIパターン発見",
        description: "機械学習が数学者を導き、結び目の双曲幾何学的および代数的構造を結ぶ新公式を発見、組合せ不変量予想を定式化・証明。"
      },
      ko: {
        achievement: "매듭 이론 및 카즈단-루스틱 불변량",
        badge: "패턴 발견",
        description: "머신러닝을 통해 쌍곡 매듭 불변량과 대수적 불변량 사이의 관계식을 발견하고 조합론적 불변성 추측을 정식화 및 증명."
      },
      "zh-Hans": {
        achievement: "纽结理论与Kazhdan–Lusztig多项式不变量",
        badge: "AI模式发现",
        description: "机器学习引导人类数学家发现了连接双曲纽结与代数不变量的新公式，并成功定式化与证明了对称群组合不变性猜想。"
      },
      "zh-Hant": {
        achievement: "紐結理論與Kazhdan–Lusztig不變量",
        badge: "AI模式發現",
        description: "機器學習引導數學家發現了雙曲紐結與代數不變量的新關聯，並證明了對稱群組合不變性猜想。"
      }
    }
  },
  {
    year: "Oct 2022",
    model: "AlphaTensor",
    system: "Google DeepMind",
    impact: "Nature Publication",
    locales: {
      en: {
        achievement: "Faster Matrix Multiplication Algorithms",
        badge: "ALGORITHMIC LEAP",
        description: "Discovered tensor decomposition algorithms for matrix multiplication beating 50-year-old human algorithms (e.g. 4x4 matrices in 47 steps in Z₂)."
      },
      de: {
        achievement: "Schnellere Matrizenmultiplikations-Algorithmen",
        badge: "ALGORITHMISCHER SPRUNG",
        description: "Entdeckte Tensordekompositions-Algorithmen, die 50 Jahre alte menschliche Rekorde übertrafen."
      },
      fr: {
        achievement: "Algorithmes de Multiplication Matricielle",
        badge: "SAUT ALGORITHMIQUE",
        description: "Découverte d'algorithmes de décomposition tensorielle surpassant les méthodes humaines établies depuis 50 ans."
      },
      it: {
        achievement: "Algoritmi Rapidi di Moltiplicazione tra Matrici",
        badge: "SALTO ALGORITMICO",
        description: "Scoperti algoritmi di decomposizione tensoriale che hanno superato i record umani stabiliti da oltre 50 anni."
      },
      ja: {
        achievement: "より高速な行列積計算アルゴリズムの発見",
        badge: "アルゴリズム刷新",
        description: "深層強化学習により、人間が50年間更新できなかった行列乗算のテンソル分解を発見（Z₂上で4x4行列を47乗算で達成）。"
      },
      ko: {
        achievement: "더 빠른 행렬 곱셈 알고리즘 발견",
        badge: "알고리즘 혁신",
        description: "50년 동안 깨지지 않았던 인간의 행렬 곱셈 기록을 텐서 분해 강화학습으로 갱신 (Z₂에서 4x4 행렬 곱셈 47회)."
      },
      "zh-Hans": {
        achievement: "突破50年纪录的快速矩阵乘法算法",
        badge: "算法里程碑",
        description: "AlphaTensor发现超越施特拉森等50年历史的张量分解算法（如在有限域Z₂上仅用47次乘法计算4x4矩阵）。"
      },
      "zh-Hant": {
        achievement: "突破50年紀錄的快速矩陣乘法演算法",
        badge: "演算法里程碑",
        description: "AlphaTensor發現超越人類50年歷史的矩陣乘法張量分解新方案。"
      }
    }
  },
  {
    year: "Dec 2023",
    model: "FunSearch (LLM + Evolutionary Search)",
    system: "Google DeepMind",
    impact: "Nature Publication",
    locales: {
      en: {
        achievement: "Cap Set Problem in High Dimensions",
        badge: "NEW LOWER BOUND",
        description: "Discovered the largest known cap sets in dimension 8, marking the first time an LLM generated mathematical discoveries beyond human knowledge."
      },
      de: {
        achievement: "Cap-Set-Problem in hohen Dimensionen",
        badge: "NEUE UNTERE SCHRANKE",
        description: "Entdeckte die bisher größten Cap-Sets in Dimension 8 – der erste Fall, in dem ein LLM neues mathematisches Wissen schuf."
      },
      fr: {
        achievement: "Problème du Cap Set en Haute Dimension",
        badge: "NOUVELLE BORNE",
        description: "Découverte des plus grands cap sets en dimension 8, première découverte mathématique inédite réalisée par un LLM."
      },
      it: {
        achievement: "Problema dei Cap Set in Alte Dimensioni",
        badge: "NUOVO LIMITE",
        description: "Scoperte le configurazioni più ampie in dimensione 8, segnando la prima scoperta matematica inedita da parte di un LLM."
      },
      ja: {
        achievement: "高次元キャップセット問題の新下界発見",
        badge: "数学的未解決下界更新",
        description: "8次元における既知最大のキャップセットを発見。LLMが人間の既存知識を超える未知の数学的発見を成し遂げた史上初の事例。"
      },
      ko: {
        achievement: "고차원 캡 셋(Cap Set) 문제의 새 하한 발견",
        badge: "새로운 하한 갱신",
        description: "8차원에서 가장 큰 캡 셋을 발견하여 LLM이 인간의 기존 지식을 넘어선 수학적 발견을 해낸 사상 최초의 성과."
      },
      "zh-Hans": {
        achievement: "极值组合学Cap Set问题高维下界突破",
        badge: "刷新数学下界",
        description: "FunSearch发现8维空间中最大已知无三点共线点集，人类历史上首次由大语言模型生成超越既有人类知识的新数学发现。"
      },
      "zh-Hant": {
        achievement: "極值組合學Cap Set問題高維下界突破",
        badge: "刷新數學下界",
        description: "FunSearch發現8維空間中最大已知Cap Set點集，史上首次由LLM生成超越人類知識的新數學成果。"
      }
    }
  },
  {
    year: "May 2026",
    model: "OpenAI Research Model",
    system: "OpenAI & Fields Medalists (Alon, Gowers)",
    impact: "80-Year-Old Conjecture Broken",
    locales: {
      en: {
        achievement: "Erdős Unit Distance Conjecture Disproven",
        badge: "HISTORIC DISPROOF",
        description: "Constructed an explicit counterexample using class field towers and Golod-Shafarevich theory, proving point sets achieve n^(1+ε) unit distances."
      },
      de: {
        achievement: "Erdős-Einheitsdistanz-Vermutung widerlegt",
        badge: "HISTORISCHE WIDERLEGUNG",
        description: "Konstruierte ein Gegenbeispiel mit Klassenkörpertürmen und bewies n^(1+ε) Einheitsdistanzen, wodurch die 80 Jahre alte Vermutung fiel."
      },
      fr: {
        achievement: "Conjecture des Distances Unités d'Erdős Réfutée",
        badge: "RÉFUTATION HISTORIQUE",
        description: "Construction d'un contre-exemple via les tours de corps de classes, prouvant n^(1+ε) distances et brisant la conjecture de 1946."
      },
      it: {
        achievement: "Confutata la Congettura di Erdős sulle Distanze Unitarie",
        badge: "CONFUTAZIONE STORICA",
        description: "Costruito un controesempio mediante torri di campi di classi, dimostrando distanze scalari come n^(1+ε)."
      },
      ja: {
        achievement: "エルデシュ単位距離予想の歴史的反証（反例構成）",
        badge: "80年の難問をAIが否定",
        description: "無限類体タワー理論を駆使して単位距離が n^(1+ε) で増加する点の配置を発見。1946年以来80年間信じられてきた予想を完全否定。"
      },
      ko: {
        achievement: "에르되시 단위 거리 추측 반례 발견 및 반증",
        badge: "80년 난제 반증",
        description: "무한 유체탑 이론을 도입하여 점 간 단위 거리가 n^(1+ε)로 증가하는 반례 구성을 제시, 80년 된 기하학 추측을 부정."
      },
      "zh-Hans": {
        achievement: "埃尔德什单位距离猜想被AI构造反例终结",
        badge: "历史性重大证伪",
        description: "AI利用代数数论中的类域塔理论构造了显式点集反例，证明单位距离对数增长达 n^(1+ε)，终结了80年的著名几何学猜想。"
      },
      "zh-Hant": {
        achievement: "艾狄胥單位距離猜想被AI構造反例終結",
        badge: "歷史性重大證偽",
        description: "AI利用類域塔理論構造出幾何反例，證實單位距離增長階數達 n^(1+ε)，終結了長達80年的艾狄胥猜想。"
      }
    }
  },
  {
    year: "July 2026",
    model: "Claude Fable 5",
    system: "Anthropic (Levent Alpöge)",
    impact: "87-Year-Old Geometry Problem",
    locales: {
      en: {
        achievement: "Jacobian Conjecture Disproven for n ≥ 3",
        badge: "HISTORIC DISPROOF",
        description: "Discovered an explicit polynomial map in C³ with constant Jacobian determinant that is non-injective, disproving the conjecture for dimensions n ≥ 3."
      },
      de: {
        achievement: "Jacobian-Vermutung für n ≥ 3 widerlegt",
        badge: "HISTORISCHE WIDERLEGUNG",
        description: "Entdeckte eine nicht-injektive Polynomabbildung in C³ mit konstanter Jacobi-Determinante, verifiziert in Lean 4."
      },
      fr: {
        achievement: "Conjecture Jacobienne Réfutée pour n ≥ 3",
        badge: "RÉFUTATION HISTORIQUE",
        description: "Découverte d'une application polynomiale dans C³ à déterminant jacobien constant non injective, invalidant le cas n ≥ 3."
      },
      it: {
        achievement: "Congettura Jacobiana Confutata per n ≥ 3",
        badge: "CONFUTAZIONE STORICA",
        description: "Scoperta una mappa polinomiale in C³ con determinante jacobiano costante non iniettiva."
      },
      ja: {
        achievement: "3次元以上におけるヤコビアン予想の反証",
        badge: "87年の難問をAIが否定",
        description: "ヤコビアン行列式が非ゼロ定数（-2）でありながら単射でない3次元多項式写像（わずか216文字）を自律発見。Lean 4で完全検証。"
      },
      ko: {
        achievement: "3차원 이상 야코비안 추측 반례 발견",
        badge: "87년 난제 반증",
        description: "야코비안 행렬식이 상수(-2)임에도 전단사가 아닌 3차원 다항식 사상을 발견하여 n ≥ 3의 야코비안 추측을 부정."
      },
      "zh-Hans": {
        achievement: "雅可比猜想在三维及以上被AI反例推翻",
        badge: "历史性重大证伪",
        description: "AI自主发现了仅216字符的C³空间多项式映射，雅可比行列式为非零常数却不具备全局单射性，终结了87年的代数几何难题。"
      },
      "zh-Hant": {
        achievement: "雅可比猜想在三維及以上被AI反例推翻",
        badge: "歷史性重大證偽",
        description: "AI自主發現長度僅216字元的C³多項式映射反例，成功推翻了87年歷史的雅可比猜想高維情形。"
      }
    }
  },
  {
    year: "August 2026",
    model: "Astra (GPT-6 Astra)",
    system: "OpenAI",
    impact: "Group Theory & Geometry",
    locales: {
      en: {
        achievement: "10 Open Problems Resolved with Lean 4 Certificates",
        badge: "LEAN 4 CERTIFICATES",
        description: "Constructed the first non-sofic group (open since 1999), disproved Connes's Rigidity Conjecture for von Neumann algebras, and proved Ehrhart's Volume Conjecture."
      },
      de: {
        achievement: "10 offene Probleme mit Lean 4-Zertifikaten gelöst",
        badge: "LEAN 4 ZERTIFIKATE",
        description: "Konstruierte die erste nicht-sofische Gruppe (seit 1999 offen), widerlegte Connes' Starrheitsvermutung und bewies Ehrharts Volumenvermutung."
      },
      fr: {
        achievement: "10 Problèmes Ouverts Résolus avec Certificats Lean 4",
        badge: "CERTIFICATS LEAN 4",
        description: "Construction du premier groupe non sofique, réfutation de la conjecture de rigidité de Connes et preuve de la conjecture d'Ehrhart."
      },
      it: {
        achievement: "10 Problemi Aperti Risolti con Certificati Lean 4",
        badge: "CERTIFICATI LEAN 4",
        description: "Costruito il primo gruppo non sofico, confutata la congettura di rigidità di Connes e dimostrata la congettura di volume di Ehrhart."
      },
      ja: {
        achievement: "10件の未解決問題をLean 4完全証明付きで一挙解決",
        badge: "Lean 4証明証明書付き",
        description: "1999年以来未解決だった非ソフィック群の初構成、フォン・ノイマン環のコンヌ剛性予想の反証、エールハルト体積予想の証明などを達成。"
      },
      ko: {
        achievement: "Lean 4 검증서와 함께 10대 미해결 난제 해결",
        badge: "Lean 4 형식 증명",
        description: "1999년 이래 미해결이던 비소픽(non-sofic) 군의 첫 구성, 콘의 강성 추측 반증, 에르하르트 부피 추측 증명 등을 완수."
      },
      "zh-Hans": {
        achievement: "同时攻克10大长期数学悬案并提供Lean 4证书",
        badge: "Lean 4机器全验证",
        description: "构造出人类首个非索菲克群（1999年提出）、构造反例推翻冯·诺依曼代数Connes刚性猜想、证明埃尔哈特体积猜想。"
      },
      "zh-Hant": {
        achievement: "同時攻克10大數學懸案並附帶Lean 4機器證書",
        badge: "Lean 4全驗證",
        description: "構造出首個非索菲克群、推翻Connes剛性猜想並證明埃爾哈特體積猜想。"
      }
    }
  },
  {
    year: "August 2026",
    model: "Claude Frontier Research",
    system: "Anthropic",
    impact: "Zeta Zero Density Milestone",
    locales: {
      en: {
        achievement: "Riemann Critical Line Bound: 41.6% → 67.2%",
        badge: "MAJOR BOUND LEAP",
        description: "Proved that at least 67.2% of non-trivial zeros lie on the critical line Re(s) = 1/2 using multi-stage mollifier optimization formalized in Lean 4."
      },
      de: {
        achievement: "Riemannsche Schranke: 41,6% → 67,2%",
        badge: "HISTORISCHER SPRUNG",
        description: "Bewies, dass mindestens 67,2% aller Nullstellen auf der kritischen Linie Re(s) = 1/2 liegen, formal verifiziert in Lean 4."
      },
      fr: {
        achievement: "Borne de Riemann sur la Ligne Critique : 41,6 % → 67,2 %",
        badge: "SAUT MAJEUR",
        description: "Démonstration que plus de 67,2 % des zéros non triviaux sont sur la ligne critique Re(s) = 1/2, vérifiée dans Lean 4."
      },
      it: {
        achievement: "Soglia sulla Linea Critica di Riemann: 41,6% → 67,2%",
        badge: "BALZO STORICO",
        description: "Dimostrato che almeno il 67,2% degli zeri non banali giace sulla linea critica Re(s) = 1/2, formalizzato in Lean 4."
      },
      ja: {
        achievement: "リーマン予想臨界線ゼロ点割合：41.6%から67.2%へ大跳躍",
        badge: "数十年ぶりの記録更新",
        description: "多変数モラファイアの多段階変分最適化を用い、非自明なゼロ点の少なくとも67.2%が Re(s)=1/2 上にあることをLean 4で完全証明。"
      },
      ko: {
        achievement: "리만 가설 임계선 영점 비율: 41.6% → 67.2% 도약",
        badge: "역사적 상한 갱신",
        description: "다단계 연화제(mollifier) 변분 최적화를 적용하여 비자명 영점의 최소 67.2%가 임계선 위에 있음을 Lean 4로 증명."
      },
      "zh-Hans": {
        achievement: "黎曼猜想临界线零点比例由41.6%飞跃至67.2%",
        badge: "数十年最大跃迁",
        description: "通过多阶段光滑化变分空间优化，在Lean 4完全形式化验证下证明非平凡零点至少有67.2%严格位于临界线上。"
      },
      "zh-Hant": {
        achievement: "黎曼猜想臨界線零點比例由41.6%躍升至67.2%",
        badge: "數十年最大躍進",
        description: "透過多階段平滑化乘子優化，在Lean 4完全形式化驗證下證明非平凡零點至少有67.2%嚴格位於臨界線上。"
      }
    }
  },
  {
    year: "Sept 2026",
    model: "Claude (Lean 4 Formalizer)",
    system: "Anthropic & Kevin Buzzard (Imperial)",
    impact: "13M+ Lines of Verified Code",
    locales: {
      en: {
        achievement: "Complete Machine Formalization of Fermat's Last Theorem",
        badge: "FULL FORMALIZATION",
        description: "Completed the first machine-checked formalization of Andrew Wiles's 1995 proof in Lean 4, proving ~29,500 lemmas autonomously over 11 days."
      },
      de: {
        achievement: "Vollständige Formalisierung des Großen Fermatschen Satzes",
        badge: "VOLLSTÄNDIG FORMALISIERT",
        description: "Erste vollständige, computergeprüfte Formalisierung von Wiles' Beweis in Lean 4 mit 13 Mio. Zeilen Code in 11 Tagen."
      },
      fr: {
        achievement: "Formalisation Complète du Dernier Théorème de Fermat",
        badge: "FORMALISATION TOTALE",
        description: "Première formalisation intégrale vérifiée par machine de la preuve de Wiles dans Lean 4, générant 13 millions de lignes de code."
      },
      it: {
        achievement: "Formalizzazione Completa dell'Ultimo Teorema di Fermat",
        badge: "FORMALIZZAZIONE TOTALE",
        description: "Completata la prima formalizzazione verificata al computer della dimostrazione di Wiles in Lean 4 con oltre 13 milioni di righe."
      },
      ja: {
        achievement: "フェルマーの最終定理の完全機械検証形式化を達成",
        badge: "100%完全形式化達成",
        description: "アンドリュー・ワイルズの1995年の大証明全体をLean 4で完全形式化。11日間の自律稼働で1300万行のコードと約29,500個の補題を証明。"
      },
      ko: {
        achievement: "페르마의 마지막 정리 사상 최초 완전 기계 형식화 성공",
        badge: "완전 형식화 달성",
        description: "앤드루 와일스의 1995년 증명 전체를 Lean 4로 완전 형식화. 11일간 1,300만 줄의 코드와 29,500개의 보조정리를 자동 증명."
      },
      "zh-Hans": {
        achievement: "费马大定理首次实现100%计算机机器形式化证明",
        badge: "全量机器验证丰碑",
        description: "将安德鲁·怀尔斯1995年的整套证明在Lean 4中完全形式化，11天内自主生成1300万行可验证代码并自动证明约29500个中间引理。"
      },
      "zh-Hant": {
        achievement: "費馬最後定理首次達成100%電腦形式化完全證明",
        badge: "全量機器驗證豐碑",
        description: "將懷爾斯的經典證明於Lean 4中完全形式化，11天內自主生成1300萬行代碼並證明29500個引理。"
      }
    }
  }
];

export function getLocalizedAIBreakthroughs(lang = "en") {
  return RAW_AI_BREAKTHROUGHS.map(item => {
    const loc = item.locales[lang] || item.locales.en;
    const enLoc = item.locales.en;

    return {
      year: item.year,
      model: item.model,
      system: item.system,
      impact: item.impact,
      achievement: loc.achievement || enLoc.achievement,
      badge: loc.badge || enLoc.badge,
      description: loc.description || enLoc.description
    };
  });
}

export const AI_BREAKTHROUGHS = getLocalizedAIBreakthroughs("en");
