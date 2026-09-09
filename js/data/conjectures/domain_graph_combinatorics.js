export const DOMAIN_GRAPH_COMBINATORICS = [
  {
    "id": "four-color",
    "icon": "🗺️",
    "difficulty": "All Ages",
    "simId": "four-color-sim",
    "leanCode": "import Mathlib.Combinatorics.SimpleGraph.Coloring\n\nstructure PlanarGraph where\n  V : Type*\n  adj : V → V → Prop\n  is_planar : True\n\ntheorem four_color_theorem (G : PlanarGraph) :\n  ∃ c : G.V → Fin 4, ∀ u v, G.adj u v → c u ≠ c v := by\n  sorry",
    "locales": {
      "en": {
        "name": "The Four Color Theorem",
        "subtitle": "The Cartographer's Challenge",
        "field": "Graph Theory & Topology",
        "statusBadge": "COMPUTER PROVEN",
        "grades": {
          "explorers": {
            "tagline": "Can you color any map on Earth with only 4 crayons?",
            "analogy": "Imagine drawing a map of countries. If two countries share a border, you must color them with different crayons. How many different crayons do you need for ANY possible map?",
            "rules": [
              "Adjacent countries sharing a border must have different colors.",
              "You only have 4 crayons: Red, Blue, Green, Yellow.",
              "Can you ever draw a map that forces a 5th crayon?"
            ],
            "mystery": "In 1852, Francis Guthrie noticed that 4 colors were always enough. For 120 years, nobody could prove it!",
            "funFact": "In 1976, an IBM supercomputer spent 1,200 hours checking 1,936 configurations—the first major theorem proved by computer!"
          },
          "investigators": {
            "tagline": "Planar graphs, Euler's formula V - E + F = 2, and Kempe chains.",
            "analogy": "Every map is a planar graph. Euler's formula guarantees every planar graph has a country with ≤ 5 neighbors!",
            "rules": [
              "Planar Graph: Drawn without crossing edges.",
              "Kempe Chains: Alternating color paths.",
              "Chromatic number χ(G) ≤ 4."
            ],
            "mystery": "Alfred Kempe published a 'proof' in 1879 that stood for 11 years before a flaw was found!",
            "funFact": "In 2005, Georges Gonthier formalized the entire proof in the Coq proof assistant."
          },
          "pioneers": {
            "tagline": "Reducible configurations, discharging methods, and formal verification.",
            "analogy": "The Appel-Haken proof used discharging to construct an unavoidable set of reducible configurations.",
            "rules": [
              "Loopless planar graphs satisfy χ(G) ≤ 4.",
              "Gonthier (2005) verified the theorem in Coq using reflective decision procedures."
            ],
            "mystery": "Can AI discover a unified, elegant human-surveyable proof without checking hundreds of configurations?",
            "funFact": "Modern AI models are exploring topological graph reductions to search for a conceptual proof."
          }
        },
        "history": [
          {
            "year": "1852",
            "author": "Francis Guthrie",
            "note": "Poses conjecture while coloring counties of England."
          },
          {
            "year": "1879",
            "author": "Alfred Kempe",
            "note": "Publishes famous fallacious proof."
          },
          {
            "year": "1976",
            "author": "Appel & Haken",
            "note": "First computer-assisted proof checking 1,936 configurations."
          },
          {
            "year": "2005",
            "author": "Georges Gonthier",
            "note": "Fully machine-checked formalization in Coq."
          }
        ]
      },
      "de": {
        "name": "Der Vier-Farben-Satz",
        "subtitle": "Die Herausforderung des Kartografen",
        "field": "Graphentheorie & Topologie",
        "statusBadge": "COMPUTERBEWIESEN",
        "grades": {
          "explorers": {
            "tagline": "Kannst du jede Landkarte mit nur 4 Buntstiften färben?",
            "analogy": "Nachbarländer mit gemeinsamer Grenze dürfen nie dieselbe Farbe haben. Wie viele Farben braucht man für JEDE denkbare Landkarte?",
            "rules": [
              "Benachbarte Länder müssen unterschiedliche Farben haben.",
              "Du hast nur 4 Stifte: Rot, Blau, Grün, Gelb.",
              "Gibt es eine Karte, die 5 Farben erzwingt?"
            ],
            "mystery": "1852 bemerkte Francis Guthrie, dass 4 Farben immer reichen. Über 120 Jahre lang konnte das niemand beweisen!",
            "funFact": "1976 überprüfte ein IBM-Supercomputer 1.936 Konfigurationen in 1.200 Stunden – der erste große Computerbeweis!"
          },
          "investigators": {
            "tagline": "Planare Graphen, Euler-Formel V - E + F = 2 und Kempe-Ketten.",
            "analogy": "Jede Landkarte entspricht einem planaren Graphen mit chromatischer Zahl χ(G) ≤ 4.",
            "rules": [
              "Planarer Graph: kreuzungsfrei gezeichnet.",
              "Kempe-Ketten: abwechselnde Farbpfade zum Vertauschen von Farben."
            ],
            "mystery": "Kempes Beweis von 1879 galt 11 Jahre als richtig, bis Heawood einen Fehler fand!",
            "funFact": "2005 formalisierte Georges Gonthier den Beweis vollständig im Coq-System."
          },
          "pioneers": {
            "tagline": "Reduzierbare Konfigurationen, Entladungs-Methode und formale Verifikation.",
            "analogy": "Appel und Haken nutzten die Discharging-Methode für unvermeidbare Mengen.",
            "rules": [
              "χ(G) ≤ 4 für alle schleifenfreien planaren Graphen."
            ],
            "mystery": "Gibt es einen einfachen, eleganten menschlichen Beweis ohne Computerprüfung?",
            "funFact": "Moderne KI sucht nach topologischen Graphreduktionen für einen kompakten Beweis."
          }
        },
        "history": [
          {
            "year": "1852",
            "author": "Francis Guthrie",
            "note": "Entdeckt das Problem beim Kartenfärben."
          },
          {
            "year": "1976",
            "author": "Appel & Haken",
            "note": "Erster computergestützter Beweis."
          },
          {
            "year": "2005",
            "author": "Georges Gonthier",
            "note": "Vollständige Formalisierung in Coq."
          }
        ]
      },
      "fr": {
        "name": "Le Théorème des Quatre Couleurs",
        "subtitle": "Le Défi du Cartographe",
        "field": "Théorie des Graphes & Topologie",
        "statusBadge": "PROUVÉ PAR ORDINATEUR",
        "grades": {
          "explorers": {
            "tagline": "Pouvez-vous colorier n'importe quelle carte avec seulement 4 crayons ?",
            "analogy": "Deux pays voisins partageant une frontière ne doivent pas avoir la même couleur. 4 crayons suffisent-ils pour toutes les cartes du monde ?",
            "rules": [
              "Pays limitrophes de couleurs différentes.",
              "Seulement 4 crayons : Rouge, Bleu, Vert, Jaune.",
              "Aucune carte n'exige 5 crayons !"
            ],
            "mystery": "Pendant 120 ans, personne n'a réussi à prouver que 4 couleurs suffisaient toujours !",
            "funFact": "En 1976, un supercalculateur IBM a vérifié 1 936 configurations en 1 200 heures !"
          },
          "investigators": {
            "tagline": "Graphes planaires, formule d'Euler et chaînes de Kempe.",
            "analogy": "Toute carte est un graphe planaire de nombre chromatique χ(G) ≤ 4.",
            "rules": [
              "Graphe planaire : sans croisement d'arêtes.",
              "Chaînes de Kempe : chemins bicolores alternés."
            ],
            "mystery": "La fausse preuve de Kempe en 1879 a trompé le monde pendant 11 ans !",
            "funFact": "En 2005, Georges Gonthier a formalisé le théorème dans l'assistant Coq."
          },
          "pioneers": {
            "tagline": "Configurations réductibles et décharge de charge.",
            "analogy": "Appel et Haken ont construit un ensemble inévitable de configurations réductibles.",
            "rules": [
              "Tout graphe planaire sans boucle vérifie χ(G) ≤ 4."
            ],
            "mystery": "Existe-t-il une démonstration conceptuelle sans énumération massive ?",
            "funFact": "L'IA explore des simplifications topologiques inédites."
          }
        },
        "history": [
          {
            "year": "1852",
            "author": "Francis Guthrie",
            "note": "Pose la conjecture en coloriant l'Angleterre."
          },
          {
            "year": "1976",
            "author": "Appel & Haken",
            "note": "Preuve historique assistée par ordinateur."
          },
          {
            "year": "2005",
            "author": "Georges Gonthier",
            "note": "Vérification complète en Coq."
          }
        ]
      },
      "it": {
        "name": "Il Teorema dei Quattro Colori",
        "subtitle": "La Sfida del Cartografo",
        "field": "Teoria dei Grafi & Topologia",
        "statusBadge": "DIMOSTRATO DA COMPUTER",
        "grades": {
          "explorers": {
            "tagline": "Puoi colorare qualsiasi mappa del mondo con solo 4 colori?",
            "analogy": "Due paesi confinanti non possono avere lo stesso colore. Bastano sempre 4 pastelli per qualsiasi mappa?",
            "rules": [
              "Paesi adiacenti di colore diverso.",
              "Solo 4 colori: Rosso, Blu, Verde, Giallo.",
              "È impossibile forzare un 5° colore."
            ],
            "mystery": "Per oltre 120 anni nessun matematico riuscì a dimostrarlo!",
            "funFact": "Nel 1976 un supercomputer IBM controllò 1.936 configurazioni in 1.200 ore."
          },
          "investigators": {
            "tagline": "Grafi planari, formula di Eulero e catene di Kempe.",
            "analogy": "Ogni mappa piana ha numero cromatico χ(G) ≤ 4.",
            "rules": [
              "Formula di Eulero: V - E + F = 2.",
              "Catene di Kempe per scambiare colori."
            ],
            "mystery": "La 'dimostrazione' di Kempe del 1879 fu smentita dopo 11 anni!",
            "funFact": "Nel 2005 Georges Gonthier ha formalizzato la prova in Coq."
          },
          "pioneers": {
            "tagline": "Configurazioni riducibili e metodo di scaricamento.",
            "analogy": "Costruzione di insiemi inevitabili di configurazioni riducibili.",
            "rules": [
              "Numero cromatico χ(G) ≤ 4 per grafi planari."
            ],
            "mystery": "Esiste una dimostrazione umana compatta senza computer?",
            "funFact": "Modelli di IA studiano riduzioni topologiche per una prova snella."
          }
        },
        "history": [
          {
            "year": "1852",
            "author": "Francis Guthrie",
            "note": "Formula la congettura sulla mappa delle contee inglesi."
          },
          {
            "year": "1976",
            "author": "Appel & Haken",
            "note": "Prima prova storica assistita da computer."
          },
          {
            "year": "2005",
            "author": "Georges Gonthier",
            "note": "Verifica formale al 100% in Coq."
          }
        ]
      },
      "ko": {
        "name": "4색 정리",
        "subtitle": "지도 제작자의 위대한 도전",
        "field": "그래프 이론 및 위상수학",
        "statusBadge": "컴퓨터 증명 완료",
        "grades": {
          "explorers": {
            "tagline": "지구상의 어떤 지도라도 단 4가지 색연필로 모두 칠할 수 있을까요?",
            "analogy": "국경을 맞댄 이웃 나라는 반드시 다른 색으로 칠해야 합니다. 아무리 복잡하게 얽힌 지도라도 단 4가지 색이면 충분할까요?",
            "rules": [
              "국경을 공유하는 이웃 나라는 같은 색으로 칠할 수 없음.",
              "색연필은 단 4개: 빨강, 파랑, 초록, 노랑.",
              "5번째 색이 반드시 필요한 지도를 만들 수 있을까요?"
            ],
            "mystery": "1852년 구스리가 발견한 이후 120년 동안 인류는 이를 수학적으로 증명하지 못했습니다!",
            "funFact": "1976년 슈퍼컴퓨터가 1,200시간 동안 1,936개 형상을 검증하며 인류 역사상 첫 번째 컴퓨터 증명 대정리가 되었습니다!"
          },
          "investigators": {
            "tagline": "평면 그래프, 오일러 공식 V - E + F = 2, 그리고 켐페 사슬.",
            "analogy": "모든 지도는 평면 그래프로 변환되며, 채색수 χ(G) ≤ 4를 만족합니다.",
            "rules": [
              "평면 그래프: 변이 교차하지 않게 평면에 그릴 수 있는 그래프.",
              "켐페 사슬: 두 가지 색을 번갈아 교환하는 기법."
            ],
            "mystery": "1879년 켐페의 '증명'은 11년 동안 참으로 믿어졌으나 치명적 결함이 발견되었습니다!",
            "funFact": "2005년 조르주 곤티에는 Coq 정리 증명기에서 모든 코드를 100% 기계 검증했습니다."
          },
          "pioneers": {
            "tagline": "가약 배치(Reducible Configuration), 방전법(Discharging), 형식 검증.",
            "analogy": "아펠과 하켄은 방전법을 사용하여 불가피한 가약 배치의 유한 집합을 구성했습니다.",
            "rules": [
              "모든 고리 없는 평면 그래프는 χ(G) ≤ 4를 만족한다."
            ],
            "mystery": "수백 개의 컴퓨터 계산 없이 인간이 직관적으로 이해할 수 있는 우아한 통합 증명이 존재하는가?",
            "funFact": "현대 수학 AI는 개념적이고 압축적인 증명을 찾기 위해 위상수학적 그래프 축소를 연구하고 있습니다."
          }
        },
        "history": [
          {
            "year": "1852",
            "author": "프랜시스 구스리",
            "note": "영국 지도 채색 중 문제 제기."
          },
          {
            "year": "1976",
            "author": "아펠 & 하켄",
            "note": "사상 최초 컴퓨터 연산 증명 성공."
          },
          {
            "year": "2005",
            "author": "조르주 곤티에",
            "note": "Coq 증명기를 통한 완전 기계 검증."
          }
        ]
      },
      "ja": {
        "name": "四色定理",
        "subtitle": "地図職人の挑戦",
        "field": "グラフトポロジー・離散幾何学",
        "statusBadge": "コンピュータ証明済み",
        "grades": {
          "explorers": {
            "tagline": "地球上のどんなに複雑な地図も、たった4色のクレヨンで塗り分けられる？",
            "analogy": "たくさんの国がある地図を塗るところを想像してみて。国境を接しているお隣同士の国は、区別できるように別の色で塗らなきゃいけません（角っこで触れているだけなら同じ色でOK）。どんなに複雑に入り組んだ地図でも、たった4色あれば絶対に塗り分けられるかな？",
            "rules": [
              "境界線を共有する隣の国同士は、絶対に同じ色で塗ってはダメ！",
              "クレヨンは4色だけ：赤、青、緑、黄。",
              "どんなに意地悪な地図を描いても、5色目が必要な地図は作れるかな？"
            ],
            "mystery": "1852年にフランシス・ガスリーが気づいてから120年以上、世界中の誰も「4色で十分」であることを証明できませんでした。",
            "funFact": "1976年、IBMのスーパーコンピュータが1200時間かけて1936個の形状パターンを検証し、歴史上初めて「コンピュータによって証明された大定理」となりました！"
          },
          "investigators": {
            "tagline": "平面グラフ、オイラーの公式 V - E + F = 2、そしてケンペ鎖。",
            "analogy": "すべての地図は平面グラフに置き換えられます。オイラーの多面体定理により、どんな平面地図にも「隣接する国が5カ国以下の国」が必ず存在します！",
            "rules": [
              "平面グラフ：辺が交差することなく平面上に描けるグラフ。",
              "彩色数：隣接する頂点が異なる色になる最小の色数 χ(G) ≤ 4。",
              "ケンペ鎖：2色の交互パスを使って色を入れ替える手法。"
            ],
            "mystery": "1879年に発表されたケンペの証明は11年間信じられていましたが、後に巧妙な欠陥が見つかりました！",
            "funFact": "2005年、ジョルジュ・ゴンティエが定理証明支援系Coqですべての証明コードを完全検証しました。"
          },
          "pioneers": {
            "tagline": "可約配置、放電法（Discharging Method）、形式検証。",
            "analogy": "アッペルとハーケンの証明は、放電法を用いて「不可避な可約配置の集合」を構成するものでした。",
            "rules": [
              "自己ループのないすべての平面グラフについて χ(G) ≤ 4。",
              "ゴンティエ（2005）はリフレクション技法を用いて完全に機械検証。"
            ],
            "mystery": "コンピュータによる数百〜千個の個別チェックに頼らない、人間が紙と鉛筆だけで理解できる美しい統一証明は存在するか？",
            "funFact": "現代のAIはトポロジカルなグラフ簡約を探索し、人間可読な新しい証明経路を探求しています。"
          }
        },
        "history": [
          {
            "year": "1852",
            "author": "フランシス・ガスリー",
            "note": "英国の州の地図塗分けから予想を提起。"
          },
          {
            "year": "1879",
            "author": "アルフレッド・ケンペ",
            "note": "後に誤りが見つかる有名な証明を発表。"
          },
          {
            "year": "1976",
            "author": "アッペル & ハーケン",
            "note": "史上初、1936配置をコンピュータで計算検証。"
          },
          {
            "year": "2005",
            "author": "ジョルジュ・ゴンティエ",
            "note": "Coq証明支援系による100%機械検証を達成。"
          }
        ]
      },
      "zh-Hans": {
        "name": "四色定理",
        "subtitle": "制图师的终极挑战",
        "field": "图论与拓扑学",
        "statusBadge": "计算机已证明",
        "grades": {
          "explorers": {
            "tagline": "地球上任意复杂的地图，只需4支彩色蜡笔就能全部区分开吗？",
            "analogy": "想象在纸上画出很多互相接壤的国家。如果两个国家共享一段边界，就必须涂上不同的颜色以便区分。无论你画得多么错综复杂，4种颜色真的永远足够吗？",
            "rules": [
              "有公共边界的相邻国家必须涂不同颜色。",
              "你只有4支蜡笔：红、蓝、绿、黄。",
              "无论怎么画，都造不出必须用第5种颜色的地图！"
            ],
            "mystery": "1852年弗朗西斯·古思里发现了这个规律，但整整120年间，全人类没有一位数学家能给出纯手工的数学证明！",
            "funFact": "1976年，超级计算机耗费1200小时检查了1936种特殊构型，成为人类历史上第一个由计算机协助证明的重大定理！"
          },
          "investigators": {
            "tagline": "平面图模型、欧拉示性数 V - E + F = 2 与肯佩链。",
            "analogy": "任何地图都可以转化为平面图。欧拉公式保证了任何平面地图中必然存在邻国少于或等于5个的国家！",
            "rules": [
              "平面图：边与边互不交叉的图。",
              "色数：相邻顶点颜色不同的最少色彩数 χ(G) ≤ 4。",
              "肯佩链：双色交替路径调色法。"
            ],
            "mystery": "阿尔弗雷德·肯佩在1879年发表的“证明”被全世界相信了11年，才被赫伍德找出了致命漏洞！",
            "funFact": "2005年，乔治·贡蒂耶在Coq形式化证明器中对四色定理完成了100%无漏洞的机器验证。"
          },
          "pioneers": {
            "tagline": "不可避免可约构型集、放电法（Discharging）与内核证明反思。",
            "analogy": "阿佩尔与哈肯的证明通过放电法构造了包含上千个构型的不可避免可约集。",
            "rules": [
              "无自环平面图色数必然满足 χ(G) ≤ 4。",
              "贡蒂耶 (2005) 利用证明助理通过反射判定算法完成机器严密验证。"
            ],
            "mystery": "是否存在不需要计算机枚举几百种构型、纯粹由人类清晰洞察的紧凑解析证明？",
            "funFact": "现代数学AI正在探索自动化拓扑图规约算法，尝试寻找统一的人类可读证明路径。"
          }
        },
        "history": [
          {
            "year": "1852",
            "author": "弗朗西斯·古思里",
            "note": "在给英国地图着色时首次提出猜想。"
          },
          {
            "year": "1879",
            "author": "阿尔弗雷德·肯佩",
            "note": "提出肯佩链并发表著名佯谬证明。"
          },
          {
            "year": "1976",
            "author": "阿佩尔与哈肯",
            "note": "人类历史上首次利用计算机检验1936种构型完成证明。"
          },
          {
            "year": "2005",
            "author": "乔治·贡蒂耶",
            "note": "在Coq证明助手里实现完全机器代码形式化验证。"
          }
        ]
      },
      "zh-Hant": {
        "name": "四色定理",
        "subtitle": "製圖師的終極挑戰",
        "field": "圖論與拓撲學",
        "statusBadge": "電腦已證明",
        "grades": {
          "explorers": {
            "tagline": "地球上任意複雜的地圖，只需4種顏色就能完全塗開？",
            "analogy": "相鄰邊界接壤的國家必須著不同顏色。無論地圖有多麼曲折複雜，4種顏色真的永遠足夠嗎？",
            "rules": [
              "共用邊界的相鄰國不可同色。",
              "只有4支蠟筆：紅、藍、綠、黃。",
              "挑戰：你能畫出必須用第5色的地圖嗎？"
            ],
            "mystery": "整整120年間，全人類沒有一位數學家能給出純手工證明的數學解答！",
            "funFact": "1976年超級電腦歷經1200小時運算驗證1936種構型，成為史上首個電腦證明的重大定理！"
          },
          "investigators": {
            "tagline": "平面圖模型、歐拉示性數與肯佩鏈調色法。",
            "analogy": "任何平面地圖轉換為對偶圖後，色數必然滿足 χ(G) ≤ 4。",
            "rules": [
              "肯佩鏈：雙色交替路徑交換法。",
              "歐拉公式保證必然存在度數 ≤ 5 的頂點。"
            ],
            "mystery": "肯佩在1879年發表的證明曾被信奉11年，才被指出存在缺陷！",
            "funFact": "2005年貢蒂耶於Coq證明助理中完成完全形式化驗證。"
          },
          "pioneers": {
            "tagline": "不可避免可約構型集、放電法（Discharging）與形式驗證。",
            "analogy": "透過放電法構造有限可約集進行窮舉排除。",
            "rules": [
              "平面圖色數必滿足 χ(G) ≤ 4。"
            ],
            "mystery": "是否存在不需電腦驗證上千個分支、純由人類直觀洞悉的緊湊證明？",
            "funFact": "現代數學AI正嘗試從拓撲維度自動探索更優雅的統一圖歸約證明。"
          }
        },
        "history": [
          {
            "year": "1852",
            "author": "古思里",
            "note": "繪製英國地圖時提出猜想。"
          },
          {
            "year": "1976",
            "author": "阿佩爾與哈肯",
            "note": "首次由電腦完成1936個構型驗證。"
          },
          {
            "year": "2005",
            "author": "貢蒂耶",
            "note": "達成100%電腦形式化完全驗證。"
          }
        ]
      }
    },
    "domain": "graph-theory",
    "category": "graph-theory",
    "isMillennium": false,
    "isAIFrontier": true
  },
  {
    "id": "erdos-faber-lovasz",
    "icon": "🎡",
    "difficulty": "Gr 6+",
    "domain": "graph-theory",
    "category": "graph-theory",
    "isMillennium": false,
    "isAIFrontier": true,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Combinatorics.SimpleGraph.Coloring\n-- Erdős-Faber-Lovász: Union of k complete graphs K_k intersecting in ≤ 1 vertex is k-colorable\n-- Proved for all sufficiently large k in 2021 by Kang, Kelly, Kühn, Osthus, Pfenninger",
    "locales": {
      "en": {
        "name": "Erdős-Faber-Lovász Conjecture",
        "subtitle": "Coloring Cliques Intersecting in at Most One Vertex (Proved for Large k)",
        "field": "Extremal Graph Theory & Hypergraphs",
        "statusBadge": "MAJOR 2021 BREAKTHROUGH",
        "grades": {
          "explorers": {
            "tagline": "Can k party cliques with overlapping guests be colored with only k party hats?",
            "analogy": "Imagine k clubs, each with k members. Any two clubs share AT MOST one mutual friend. Paul Erdős, Vance Faber, and László Lovász conjectured in 1972 that you can assign each person one of k colors such that no two friends in the same club share a color! In 2021, an international team proved it true for all large k!",
            "rules": [
              "k complete graphs of size k.",
              "Any two share at most 1 vertex.",
              "Can the union graph be colored with k colors?",
              "Proved for large k in 2021 (Kang et al.)!"
            ],
            "mystery": "Erdős famously offered a $500 prize for its solution, which was claimed in 2021 after almost 50 years of resistance!",
            "funFact": "Linear hypergraph edge coloring: The dual formulation asks to edge-color a linear hypergraph with k vertices!"
          },
          "investigators": {
            "tagline": "Probabilistic nibble method and absorption.",
            "analogy": "Kang, Kelly, Kühn, Osthus, and Pfenninger (2021) combined Pippenger's nibble with modern hypergraph absorption to pack fractional edge colorings into discrete matchings.",
            "rules": [
              "Linear hypergraph dual formulation.",
              "Rödl nibble / Pippenger-Spencer method.",
              "Formal hypergraphs in Mathlib."
            ],
            "mystery": "Can we resolve the finite cases for small k (k between 5 and 100)?",
            "funFact": "Paul Erdős, Vance Faber, and László Lovász proposed this at a party in 1972."
          },
          "pioneers": {
            "tagline": "Fractional chromatic numbers and semidefinite programming.",
            "analogy": "Kahn proved in 1992 that the fractional chromatic number is asymptotically k + o(k).",
            "rules": [
              "Kahn's asymptotic theorem (1992).",
              "Fractional edge-coloring polytopes.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI SAT solvers have verified the conjecture for small values k = 4, 5, 6.",
            "funFact": "The EFL conjecture is one of the most celebrated triumphs of modern probabilistic combinatorics."
          }
        },
        "history": [
          {
            "year": "1972",
            "author": "Erdős, Faber & Lovász",
            "note": "Formulate the clique intersection coloring conjecture."
          },
          {
            "year": "1992",
            "author": "Jeff Kahn",
            "note": "Proves the fractional coloring version asymptotically."
          },
          {
            "year": "2021",
            "author": "Kang, Kelly, Kühn, Osthus & Pfenninger",
            "note": "Publish complete proof for all sufficiently large k."
          }
        ]
      },
      "de": {
        "name": "Erdős-Faber-Lovász Conjecture",
        "subtitle": "Coloring Cliques Intersecting in at Most One Vertex (Proved for Large k)",
        "field": "Extremal Graph Theory & Hypergraphs",
        "statusBadge": "MAJOR 2021 BREAKTHROUGH",
        "grades": {
          "explorers": {
            "tagline": "Can k party cliques with overlapping guests be colored with only k party hats?",
            "analogy": "Imagine k clubs, each with k members. Any two clubs share AT MOST one mutual friend. Paul Erdős, Vance Faber, and László Lovász conjectured in 1972 that you can assign each person one of k colors such that no two friends in the same club share a color! In 2021, an international team proved it true for all large k!",
            "rules": [
              "k complete graphs of size k.",
              "Any two share at most 1 vertex.",
              "Can the union graph be colored with k colors?",
              "Proved for large k in 2021 (Kang et al.)!"
            ],
            "mystery": "Erdős famously offered a $500 prize for its solution, which was claimed in 2021 after almost 50 years of resistance!",
            "funFact": "Linear hypergraph edge coloring: The dual formulation asks to edge-color a linear hypergraph with k vertices!"
          },
          "investigators": {
            "tagline": "Probabilistic nibble method and absorption.",
            "analogy": "Kang, Kelly, Kühn, Osthus, and Pfenninger (2021) combined Pippenger's nibble with modern hypergraph absorption to pack fractional edge colorings into discrete matchings.",
            "rules": [
              "Linear hypergraph dual formulation.",
              "Rödl nibble / Pippenger-Spencer method.",
              "Formal hypergraphs in Mathlib."
            ],
            "mystery": "Can we resolve the finite cases for small k (k between 5 and 100)?",
            "funFact": "Paul Erdős, Vance Faber, and László Lovász proposed this at a party in 1972."
          },
          "pioneers": {
            "tagline": "Fractional chromatic numbers and semidefinite programming.",
            "analogy": "Kahn proved in 1992 that the fractional chromatic number is asymptotically k + o(k).",
            "rules": [
              "Kahn's asymptotic theorem (1992).",
              "Fractional edge-coloring polytopes.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI SAT solvers have verified the conjecture for small values k = 4, 5, 6.",
            "funFact": "The EFL conjecture is one of the most celebrated triumphs of modern probabilistic combinatorics."
          }
        },
        "history": [
          {
            "year": "1972",
            "author": "Erdős, Faber & Lovász",
            "note": "Formulate the clique intersection coloring conjecture."
          },
          {
            "year": "1992",
            "author": "Jeff Kahn",
            "note": "Proves the fractional coloring version asymptotically."
          },
          {
            "year": "2021",
            "author": "Kang, Kelly, Kühn, Osthus & Pfenninger",
            "note": "Publish complete proof for all sufficiently large k."
          }
        ]
      },
      "fr": {
        "name": "Erdős-Faber-Lovász Conjecture",
        "subtitle": "Coloring Cliques Intersecting in at Most One Vertex (Proved for Large k)",
        "field": "Extremal Graph Theory & Hypergraphs",
        "statusBadge": "MAJOR 2021 BREAKTHROUGH",
        "grades": {
          "explorers": {
            "tagline": "Can k party cliques with overlapping guests be colored with only k party hats?",
            "analogy": "Imagine k clubs, each with k members. Any two clubs share AT MOST one mutual friend. Paul Erdős, Vance Faber, and László Lovász conjectured in 1972 that you can assign each person one of k colors such that no two friends in the same club share a color! In 2021, an international team proved it true for all large k!",
            "rules": [
              "k complete graphs of size k.",
              "Any two share at most 1 vertex.",
              "Can the union graph be colored with k colors?",
              "Proved for large k in 2021 (Kang et al.)!"
            ],
            "mystery": "Erdős famously offered a $500 prize for its solution, which was claimed in 2021 after almost 50 years of resistance!",
            "funFact": "Linear hypergraph edge coloring: The dual formulation asks to edge-color a linear hypergraph with k vertices!"
          },
          "investigators": {
            "tagline": "Probabilistic nibble method and absorption.",
            "analogy": "Kang, Kelly, Kühn, Osthus, and Pfenninger (2021) combined Pippenger's nibble with modern hypergraph absorption to pack fractional edge colorings into discrete matchings.",
            "rules": [
              "Linear hypergraph dual formulation.",
              "Rödl nibble / Pippenger-Spencer method.",
              "Formal hypergraphs in Mathlib."
            ],
            "mystery": "Can we resolve the finite cases for small k (k between 5 and 100)?",
            "funFact": "Paul Erdős, Vance Faber, and László Lovász proposed this at a party in 1972."
          },
          "pioneers": {
            "tagline": "Fractional chromatic numbers and semidefinite programming.",
            "analogy": "Kahn proved in 1992 that the fractional chromatic number is asymptotically k + o(k).",
            "rules": [
              "Kahn's asymptotic theorem (1992).",
              "Fractional edge-coloring polytopes.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI SAT solvers have verified the conjecture for small values k = 4, 5, 6.",
            "funFact": "The EFL conjecture is one of the most celebrated triumphs of modern probabilistic combinatorics."
          }
        },
        "history": [
          {
            "year": "1972",
            "author": "Erdős, Faber & Lovász",
            "note": "Formulate the clique intersection coloring conjecture."
          },
          {
            "year": "1992",
            "author": "Jeff Kahn",
            "note": "Proves the fractional coloring version asymptotically."
          },
          {
            "year": "2021",
            "author": "Kang, Kelly, Kühn, Osthus & Pfenninger",
            "note": "Publish complete proof for all sufficiently large k."
          }
        ]
      },
      "it": {
        "name": "Erdős-Faber-Lovász Conjecture",
        "subtitle": "Coloring Cliques Intersecting in at Most One Vertex (Proved for Large k)",
        "field": "Extremal Graph Theory & Hypergraphs",
        "statusBadge": "MAJOR 2021 BREAKTHROUGH",
        "grades": {
          "explorers": {
            "tagline": "Can k party cliques with overlapping guests be colored with only k party hats?",
            "analogy": "Imagine k clubs, each with k members. Any two clubs share AT MOST one mutual friend. Paul Erdős, Vance Faber, and László Lovász conjectured in 1972 that you can assign each person one of k colors such that no two friends in the same club share a color! In 2021, an international team proved it true for all large k!",
            "rules": [
              "k complete graphs of size k.",
              "Any two share at most 1 vertex.",
              "Can the union graph be colored with k colors?",
              "Proved for large k in 2021 (Kang et al.)!"
            ],
            "mystery": "Erdős famously offered a $500 prize for its solution, which was claimed in 2021 after almost 50 years of resistance!",
            "funFact": "Linear hypergraph edge coloring: The dual formulation asks to edge-color a linear hypergraph with k vertices!"
          },
          "investigators": {
            "tagline": "Probabilistic nibble method and absorption.",
            "analogy": "Kang, Kelly, Kühn, Osthus, and Pfenninger (2021) combined Pippenger's nibble with modern hypergraph absorption to pack fractional edge colorings into discrete matchings.",
            "rules": [
              "Linear hypergraph dual formulation.",
              "Rödl nibble / Pippenger-Spencer method.",
              "Formal hypergraphs in Mathlib."
            ],
            "mystery": "Can we resolve the finite cases for small k (k between 5 and 100)?",
            "funFact": "Paul Erdős, Vance Faber, and László Lovász proposed this at a party in 1972."
          },
          "pioneers": {
            "tagline": "Fractional chromatic numbers and semidefinite programming.",
            "analogy": "Kahn proved in 1992 that the fractional chromatic number is asymptotically k + o(k).",
            "rules": [
              "Kahn's asymptotic theorem (1992).",
              "Fractional edge-coloring polytopes.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI SAT solvers have verified the conjecture for small values k = 4, 5, 6.",
            "funFact": "The EFL conjecture is one of the most celebrated triumphs of modern probabilistic combinatorics."
          }
        },
        "history": [
          {
            "year": "1972",
            "author": "Erdős, Faber & Lovász",
            "note": "Formulate the clique intersection coloring conjecture."
          },
          {
            "year": "1992",
            "author": "Jeff Kahn",
            "note": "Proves the fractional coloring version asymptotically."
          },
          {
            "year": "2021",
            "author": "Kang, Kelly, Kühn, Osthus & Pfenninger",
            "note": "Publish complete proof for all sufficiently large k."
          }
        ]
      },
      "ja": {
        "name": "Erdős-Faber-Lovász Conjecture",
        "subtitle": "Coloring Cliques Intersecting in at Most One Vertex (Proved for Large k)",
        "field": "Extremal Graph Theory & Hypergraphs",
        "statusBadge": "MAJOR 2021 BREAKTHROUGH",
        "grades": {
          "explorers": {
            "tagline": "Can k party cliques with overlapping guests be colored with only k party hats?",
            "analogy": "Imagine k clubs, each with k members. Any two clubs share AT MOST one mutual friend. Paul Erdős, Vance Faber, and László Lovász conjectured in 1972 that you can assign each person one of k colors such that no two friends in the same club share a color! In 2021, an international team proved it true for all large k!",
            "rules": [
              "k complete graphs of size k.",
              "Any two share at most 1 vertex.",
              "Can the union graph be colored with k colors?",
              "Proved for large k in 2021 (Kang et al.)!"
            ],
            "mystery": "Erdős famously offered a $500 prize for its solution, which was claimed in 2021 after almost 50 years of resistance!",
            "funFact": "Linear hypergraph edge coloring: The dual formulation asks to edge-color a linear hypergraph with k vertices!"
          },
          "investigators": {
            "tagline": "Probabilistic nibble method and absorption.",
            "analogy": "Kang, Kelly, Kühn, Osthus, and Pfenninger (2021) combined Pippenger's nibble with modern hypergraph absorption to pack fractional edge colorings into discrete matchings.",
            "rules": [
              "Linear hypergraph dual formulation.",
              "Rödl nibble / Pippenger-Spencer method.",
              "Formal hypergraphs in Mathlib."
            ],
            "mystery": "Can we resolve the finite cases for small k (k between 5 and 100)?",
            "funFact": "Paul Erdős, Vance Faber, and László Lovász proposed this at a party in 1972."
          },
          "pioneers": {
            "tagline": "Fractional chromatic numbers and semidefinite programming.",
            "analogy": "Kahn proved in 1992 that the fractional chromatic number is asymptotically k + o(k).",
            "rules": [
              "Kahn's asymptotic theorem (1992).",
              "Fractional edge-coloring polytopes.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI SAT solvers have verified the conjecture for small values k = 4, 5, 6.",
            "funFact": "The EFL conjecture is one of the most celebrated triumphs of modern probabilistic combinatorics."
          }
        },
        "history": [
          {
            "year": "1972",
            "author": "Erdős, Faber & Lovász",
            "note": "Formulate the clique intersection coloring conjecture."
          },
          {
            "year": "1992",
            "author": "Jeff Kahn",
            "note": "Proves the fractional coloring version asymptotically."
          },
          {
            "year": "2021",
            "author": "Kang, Kelly, Kühn, Osthus & Pfenninger",
            "note": "Publish complete proof for all sufficiently large k."
          }
        ]
      },
      "ko": {
        "name": "Erdős-Faber-Lovász Conjecture",
        "subtitle": "Coloring Cliques Intersecting in at Most One Vertex (Proved for Large k)",
        "field": "Extremal Graph Theory & Hypergraphs",
        "statusBadge": "MAJOR 2021 BREAKTHROUGH",
        "grades": {
          "explorers": {
            "tagline": "Can k party cliques with overlapping guests be colored with only k party hats?",
            "analogy": "Imagine k clubs, each with k members. Any two clubs share AT MOST one mutual friend. Paul Erdős, Vance Faber, and László Lovász conjectured in 1972 that you can assign each person one of k colors such that no two friends in the same club share a color! In 2021, an international team proved it true for all large k!",
            "rules": [
              "k complete graphs of size k.",
              "Any two share at most 1 vertex.",
              "Can the union graph be colored with k colors?",
              "Proved for large k in 2021 (Kang et al.)!"
            ],
            "mystery": "Erdős famously offered a $500 prize for its solution, which was claimed in 2021 after almost 50 years of resistance!",
            "funFact": "Linear hypergraph edge coloring: The dual formulation asks to edge-color a linear hypergraph with k vertices!"
          },
          "investigators": {
            "tagline": "Probabilistic nibble method and absorption.",
            "analogy": "Kang, Kelly, Kühn, Osthus, and Pfenninger (2021) combined Pippenger's nibble with modern hypergraph absorption to pack fractional edge colorings into discrete matchings.",
            "rules": [
              "Linear hypergraph dual formulation.",
              "Rödl nibble / Pippenger-Spencer method.",
              "Formal hypergraphs in Mathlib."
            ],
            "mystery": "Can we resolve the finite cases for small k (k between 5 and 100)?",
            "funFact": "Paul Erdős, Vance Faber, and László Lovász proposed this at a party in 1972."
          },
          "pioneers": {
            "tagline": "Fractional chromatic numbers and semidefinite programming.",
            "analogy": "Kahn proved in 1992 that the fractional chromatic number is asymptotically k + o(k).",
            "rules": [
              "Kahn's asymptotic theorem (1992).",
              "Fractional edge-coloring polytopes.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI SAT solvers have verified the conjecture for small values k = 4, 5, 6.",
            "funFact": "The EFL conjecture is one of the most celebrated triumphs of modern probabilistic combinatorics."
          }
        },
        "history": [
          {
            "year": "1972",
            "author": "Erdős, Faber & Lovász",
            "note": "Formulate the clique intersection coloring conjecture."
          },
          {
            "year": "1992",
            "author": "Jeff Kahn",
            "note": "Proves the fractional coloring version asymptotically."
          },
          {
            "year": "2021",
            "author": "Kang, Kelly, Kühn, Osthus & Pfenninger",
            "note": "Publish complete proof for all sufficiently large k."
          }
        ]
      },
      "zh-Hans": {
        "name": "埃尔德什-法贝尔-洛瓦兹猜想",
        "subtitle": "两两至多交于一个顶点的 k 个 k-完全图并集恰可用 k 种颜色染色（大 k 已证）",
        "field": "极值图论 & 超图染色",
        "statusBadge": "2021年重大突破",
        "grades": {
          "explorers": {
            "tagline": "k 个互有重叠好友的派对小圈子，能不能仅用 k 顶彩色聚会帽完美染色？",
            "analogy": "想象有 k 个聚会俱乐部，每个俱乐部正好有 k 个人。任意两个俱乐部之间至多只有 1 个共同好友。1972年埃尔德什、法贝尔与洛瓦兹猜想：只要用 k 种颜色，就能给所有人染色，使得同一俱乐部内的任何两个好友颜色都互不相同！2021年国际联合团队证明了对所有充分大的 k 猜想完全成立！",
            "rules": [
              "k 个大小为 k 的完全图。",
              "任意两个完全图至多交于 1 个公共顶点。",
              "整个复合图的染色数是否永远不超过 k？",
              "2021年数学家彻底攻克了充分大 k 的情形！"
            ],
            "mystery": "埃尔德什曾为此题悬赏500美元，这笔赏金在悬赏近半个世纪后的2021年被正式领取！",
            "funFact": "对偶形式：猜想完全等价于任意度数不超过 k 的线性超图都可以用 k 种颜色进行超边染色！"
          },
          "investigators": {
            "tagline": "概率咬嚼法 (Rödl nibble) 与吸收方法。",
            "analogy": "2021年联合团队结合半随机咬嚼法与吸收技术，成功将分数超边染色转化为离散完美匹配。",
            "rules": [
              "线性超图对偶染色表述。",
              "Rödl 随机微元咬嚼法与规则超图分解。",
              "Lean 4 Mathlib 超图形式化。"
            ],
            "mystery": "能否完全消除小 k（如 k=5 至 100）的极小有限例外？",
            "funFact": "埃尔德什、法贝尔与洛瓦兹于1972年在一次数学茶话会上共同提出。"
          },
          "pioneers": {
            "tagline": "分数染色数与对偶多面体约束。",
            "analogy": "杰夫·卡恩于1992年证明其分数染色数渐近等于 k + o(k)。",
            "rules": [
              "卡恩渐近定理 (1992)。",
              "分数边染色凸多面体极值定理。",
              "Lean 4 Mathlib 图染色形式化。"
            ],
            "mystery": "AI 自动化 SAT 求解器已对 k = 4, 5, 6 的所有非同构有限小图完成了穷尽检验。",
            "funFact": "EFL 猜想是现代概率组合学与超图极值理论最辉煌的划时代胜利之一。"
          }
        },
        "history": [
          {
            "year": "1972",
            "author": "埃尔德什、法贝尔 & 洛瓦兹",
            "note": "在学术讨论中正式提出团相交染色猜想。"
          },
          {
            "year": "1992",
            "author": "杰夫·卡恩",
            "note": "证明其分数染色版本渐近成立。"
          },
          {
            "year": "2021",
            "author": "康、凯利、库恩团队",
            "note": "运用吸收方法彻底攻克所有充分大 k 的情形！"
          }
        ]
      },
      "zh-Hant": {
        "name": "Erdős-Faber-Lovász Conjecture",
        "subtitle": "Coloring Cliques Intersecting in at Most One Vertex (Proved for Large k)",
        "field": "Extremal Graph Theory & Hypergraphs",
        "statusBadge": "MAJOR 2021 BREAKTHROUGH",
        "grades": {
          "explorers": {
            "tagline": "Can k party cliques with overlapping guests be colored with only k party hats?",
            "analogy": "Imagine k clubs, each with k members. Any two clubs share AT MOST one mutual friend. Paul Erdős, Vance Faber, and László Lovász conjectured in 1972 that you can assign each person one of k colors such that no two friends in the same club share a color! In 2021, an international team proved it true for all large k!",
            "rules": [
              "k complete graphs of size k.",
              "Any two share at most 1 vertex.",
              "Can the union graph be colored with k colors?",
              "Proved for large k in 2021 (Kang et al.)!"
            ],
            "mystery": "Erdős famously offered a $500 prize for its solution, which was claimed in 2021 after almost 50 years of resistance!",
            "funFact": "Linear hypergraph edge coloring: The dual formulation asks to edge-color a linear hypergraph with k vertices!"
          },
          "investigators": {
            "tagline": "Probabilistic nibble method and absorption.",
            "analogy": "Kang, Kelly, Kühn, Osthus, and Pfenninger (2021) combined Pippenger's nibble with modern hypergraph absorption to pack fractional edge colorings into discrete matchings.",
            "rules": [
              "Linear hypergraph dual formulation.",
              "Rödl nibble / Pippenger-Spencer method.",
              "Formal hypergraphs in Mathlib."
            ],
            "mystery": "Can we resolve the finite cases for small k (k between 5 and 100)?",
            "funFact": "Paul Erdős, Vance Faber, and László Lovász proposed this at a party in 1972."
          },
          "pioneers": {
            "tagline": "Fractional chromatic numbers and semidefinite programming.",
            "analogy": "Kahn proved in 1992 that the fractional chromatic number is asymptotically k + o(k).",
            "rules": [
              "Kahn's asymptotic theorem (1992).",
              "Fractional edge-coloring polytopes.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI SAT solvers have verified the conjecture for small values k = 4, 5, 6.",
            "funFact": "The EFL conjecture is one of the most celebrated triumphs of modern probabilistic combinatorics."
          }
        },
        "history": [
          {
            "year": "1972",
            "author": "Erdős, Faber & Lovász",
            "note": "Formulate the clique intersection coloring conjecture."
          },
          {
            "year": "1992",
            "author": "Jeff Kahn",
            "note": "Proves the fractional coloring version asymptotically."
          },
          {
            "year": "2021",
            "author": "Kang, Kelly, Kühn, Osthus & Pfenninger",
            "note": "Publish complete proof for all sufficiently large k."
          }
        ]
      }
    }
  },
  {
    "id": "reconstruction",
    "icon": "🃏",
    "difficulty": "Gr 6+",
    "domain": "graph-theory",
    "category": "graph-theory",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Combinatorics.SimpleGraph.Basic\n-- Graph Reconstruction Conjecture (Kelly-Ulam 1941)\n-- Every simple graph with ≥ 3 vertices is uniquely determined up to isomorphism by its deck of vertex-deleted subgraphs.",
    "locales": {
      "en": {
        "name": "Graph Reconstruction Conjecture",
        "subtitle": "Can a Graph be Rebuilt from its Deck of Point-Deleted Shadows?",
        "field": "Structural Graph Theory & Isomorphism",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "If you take n polaroids of a graph with one vertex covered each time, can you rebuild the original?",
            "analogy": "Paul Kelly and Stanislaw Ulam asked in 1941: If you are given the 'deck' of all n subgraphs obtained by deleting one vertex at a time from a graph G (n ≥ 3), is G uniquely reconstructible? In other words, can two completely DIFFERENT graphs share the EXACT SAME card deck? Proved for trees and planar graphs, but open in general!",
            "rules": [
              "Graph G has n ≥ 3 vertices.",
              "Delete vertex v_i to get subgraph G - v_i.",
              "Collect the deck of all n subgraphs {G_1, ..., G_n}.",
              "Kelly-Ulam Conjecture: G is uniquely determined up to isomorphism!"
            ],
            "mystery": "Fails for n = 2: The graph with 1 edge has deck of two single vertices, which is IDENTICAL to the graph with 0 edges!",
            "funFact": "Trees, regular graphs, and disconnected graphs are all proved reconstructible!"
          },
          "investigators": {
            "tagline": "Kelly's lemma and subgraph counting.",
            "analogy": "Kelly's Lemma states that for any graph H with fewer vertices than G, the number of subgraphs of G isomorphic to H is reconstructible.",
            "rules": [
              "Kelly's Lemma: s(H, G) = (1 / (n - |V(H)|)) ∑ s(H, G_i).",
              "Degree sequence is reconstructible.",
              "Characteristic polynomial of adjacency matrix is reconstructible."
            ],
            "mystery": "Can spectral graph theory or algebraic invariants prove that the adjacency matrix is uniquely fixed by the deck?",
            "funFact": "Paul J. Kelly and Stanislaw Ulam posed the problem in 1941."
          },
          "pioneers": {
            "tagline": "Algebraic graph theory, graph polynomials, and group actions.",
            "analogy": "Tutte showed that many global chromatic and flow polynomials can be computed directly from the deck.",
            "rules": [
              "Tutte's reconstruction theorems.",
              "Graph isomorphism algorithms in quasipolynomial time (Babai 2016).",
              "Lean 4 Mathlib simple graphs."
            ],
            "mystery": "AI-guided combinatorial search has verified the conjecture for all graphs up to n = 11 vertices (over 1 billion graphs!).",
            "funFact": "The Graph Reconstruction Conjecture is the ultimate identity verification riddle in network mathematics."
          }
        },
        "history": [
          {
            "year": "1941",
            "author": "Kelly & Ulam",
            "note": "Propose the graph reconstruction conjecture."
          },
          {
            "year": "1957",
            "author": "Paul J. Kelly",
            "note": "Proves conjecture for all trees and establishes Kelly's Lemma."
          },
          {
            "year": "1979",
            "author": "W. T. Tutte",
            "note": "Surveys algebraic and polynomial reconstruction methods."
          }
        ]
      },
      "de": {
        "name": "Graph Reconstruction Conjecture",
        "subtitle": "Can a Graph be Rebuilt from its Deck of Point-Deleted Shadows?",
        "field": "Structural Graph Theory & Isomorphism",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "If you take n polaroids of a graph with one vertex covered each time, can you rebuild the original?",
            "analogy": "Paul Kelly and Stanislaw Ulam asked in 1941: If you are given the 'deck' of all n subgraphs obtained by deleting one vertex at a time from a graph G (n ≥ 3), is G uniquely reconstructible? In other words, can two completely DIFFERENT graphs share the EXACT SAME card deck? Proved for trees and planar graphs, but open in general!",
            "rules": [
              "Graph G has n ≥ 3 vertices.",
              "Delete vertex v_i to get subgraph G - v_i.",
              "Collect the deck of all n subgraphs {G_1, ..., G_n}.",
              "Kelly-Ulam Conjecture: G is uniquely determined up to isomorphism!"
            ],
            "mystery": "Fails for n = 2: The graph with 1 edge has deck of two single vertices, which is IDENTICAL to the graph with 0 edges!",
            "funFact": "Trees, regular graphs, and disconnected graphs are all proved reconstructible!"
          },
          "investigators": {
            "tagline": "Kelly's lemma and subgraph counting.",
            "analogy": "Kelly's Lemma states that for any graph H with fewer vertices than G, the number of subgraphs of G isomorphic to H is reconstructible.",
            "rules": [
              "Kelly's Lemma: s(H, G) = (1 / (n - |V(H)|)) ∑ s(H, G_i).",
              "Degree sequence is reconstructible.",
              "Characteristic polynomial of adjacency matrix is reconstructible."
            ],
            "mystery": "Can spectral graph theory or algebraic invariants prove that the adjacency matrix is uniquely fixed by the deck?",
            "funFact": "Paul J. Kelly and Stanislaw Ulam posed the problem in 1941."
          },
          "pioneers": {
            "tagline": "Algebraic graph theory, graph polynomials, and group actions.",
            "analogy": "Tutte showed that many global chromatic and flow polynomials can be computed directly from the deck.",
            "rules": [
              "Tutte's reconstruction theorems.",
              "Graph isomorphism algorithms in quasipolynomial time (Babai 2016).",
              "Lean 4 Mathlib simple graphs."
            ],
            "mystery": "AI-guided combinatorial search has verified the conjecture for all graphs up to n = 11 vertices (over 1 billion graphs!).",
            "funFact": "The Graph Reconstruction Conjecture is the ultimate identity verification riddle in network mathematics."
          }
        },
        "history": [
          {
            "year": "1941",
            "author": "Kelly & Ulam",
            "note": "Propose the graph reconstruction conjecture."
          },
          {
            "year": "1957",
            "author": "Paul J. Kelly",
            "note": "Proves conjecture for all trees and establishes Kelly's Lemma."
          },
          {
            "year": "1979",
            "author": "W. T. Tutte",
            "note": "Surveys algebraic and polynomial reconstruction methods."
          }
        ]
      },
      "fr": {
        "name": "Graph Reconstruction Conjecture",
        "subtitle": "Can a Graph be Rebuilt from its Deck of Point-Deleted Shadows?",
        "field": "Structural Graph Theory & Isomorphism",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "If you take n polaroids of a graph with one vertex covered each time, can you rebuild the original?",
            "analogy": "Paul Kelly and Stanislaw Ulam asked in 1941: If you are given the 'deck' of all n subgraphs obtained by deleting one vertex at a time from a graph G (n ≥ 3), is G uniquely reconstructible? In other words, can two completely DIFFERENT graphs share the EXACT SAME card deck? Proved for trees and planar graphs, but open in general!",
            "rules": [
              "Graph G has n ≥ 3 vertices.",
              "Delete vertex v_i to get subgraph G - v_i.",
              "Collect the deck of all n subgraphs {G_1, ..., G_n}.",
              "Kelly-Ulam Conjecture: G is uniquely determined up to isomorphism!"
            ],
            "mystery": "Fails for n = 2: The graph with 1 edge has deck of two single vertices, which is IDENTICAL to the graph with 0 edges!",
            "funFact": "Trees, regular graphs, and disconnected graphs are all proved reconstructible!"
          },
          "investigators": {
            "tagline": "Kelly's lemma and subgraph counting.",
            "analogy": "Kelly's Lemma states that for any graph H with fewer vertices than G, the number of subgraphs of G isomorphic to H is reconstructible.",
            "rules": [
              "Kelly's Lemma: s(H, G) = (1 / (n - |V(H)|)) ∑ s(H, G_i).",
              "Degree sequence is reconstructible.",
              "Characteristic polynomial of adjacency matrix is reconstructible."
            ],
            "mystery": "Can spectral graph theory or algebraic invariants prove that the adjacency matrix is uniquely fixed by the deck?",
            "funFact": "Paul J. Kelly and Stanislaw Ulam posed the problem in 1941."
          },
          "pioneers": {
            "tagline": "Algebraic graph theory, graph polynomials, and group actions.",
            "analogy": "Tutte showed that many global chromatic and flow polynomials can be computed directly from the deck.",
            "rules": [
              "Tutte's reconstruction theorems.",
              "Graph isomorphism algorithms in quasipolynomial time (Babai 2016).",
              "Lean 4 Mathlib simple graphs."
            ],
            "mystery": "AI-guided combinatorial search has verified the conjecture for all graphs up to n = 11 vertices (over 1 billion graphs!).",
            "funFact": "The Graph Reconstruction Conjecture is the ultimate identity verification riddle in network mathematics."
          }
        },
        "history": [
          {
            "year": "1941",
            "author": "Kelly & Ulam",
            "note": "Propose the graph reconstruction conjecture."
          },
          {
            "year": "1957",
            "author": "Paul J. Kelly",
            "note": "Proves conjecture for all trees and establishes Kelly's Lemma."
          },
          {
            "year": "1979",
            "author": "W. T. Tutte",
            "note": "Surveys algebraic and polynomial reconstruction methods."
          }
        ]
      },
      "it": {
        "name": "Graph Reconstruction Conjecture",
        "subtitle": "Can a Graph be Rebuilt from its Deck of Point-Deleted Shadows?",
        "field": "Structural Graph Theory & Isomorphism",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "If you take n polaroids of a graph with one vertex covered each time, can you rebuild the original?",
            "analogy": "Paul Kelly and Stanislaw Ulam asked in 1941: If you are given the 'deck' of all n subgraphs obtained by deleting one vertex at a time from a graph G (n ≥ 3), is G uniquely reconstructible? In other words, can two completely DIFFERENT graphs share the EXACT SAME card deck? Proved for trees and planar graphs, but open in general!",
            "rules": [
              "Graph G has n ≥ 3 vertices.",
              "Delete vertex v_i to get subgraph G - v_i.",
              "Collect the deck of all n subgraphs {G_1, ..., G_n}.",
              "Kelly-Ulam Conjecture: G is uniquely determined up to isomorphism!"
            ],
            "mystery": "Fails for n = 2: The graph with 1 edge has deck of two single vertices, which is IDENTICAL to the graph with 0 edges!",
            "funFact": "Trees, regular graphs, and disconnected graphs are all proved reconstructible!"
          },
          "investigators": {
            "tagline": "Kelly's lemma and subgraph counting.",
            "analogy": "Kelly's Lemma states that for any graph H with fewer vertices than G, the number of subgraphs of G isomorphic to H is reconstructible.",
            "rules": [
              "Kelly's Lemma: s(H, G) = (1 / (n - |V(H)|)) ∑ s(H, G_i).",
              "Degree sequence is reconstructible.",
              "Characteristic polynomial of adjacency matrix is reconstructible."
            ],
            "mystery": "Can spectral graph theory or algebraic invariants prove that the adjacency matrix is uniquely fixed by the deck?",
            "funFact": "Paul J. Kelly and Stanislaw Ulam posed the problem in 1941."
          },
          "pioneers": {
            "tagline": "Algebraic graph theory, graph polynomials, and group actions.",
            "analogy": "Tutte showed that many global chromatic and flow polynomials can be computed directly from the deck.",
            "rules": [
              "Tutte's reconstruction theorems.",
              "Graph isomorphism algorithms in quasipolynomial time (Babai 2016).",
              "Lean 4 Mathlib simple graphs."
            ],
            "mystery": "AI-guided combinatorial search has verified the conjecture for all graphs up to n = 11 vertices (over 1 billion graphs!).",
            "funFact": "The Graph Reconstruction Conjecture is the ultimate identity verification riddle in network mathematics."
          }
        },
        "history": [
          {
            "year": "1941",
            "author": "Kelly & Ulam",
            "note": "Propose the graph reconstruction conjecture."
          },
          {
            "year": "1957",
            "author": "Paul J. Kelly",
            "note": "Proves conjecture for all trees and establishes Kelly's Lemma."
          },
          {
            "year": "1979",
            "author": "W. T. Tutte",
            "note": "Surveys algebraic and polynomial reconstruction methods."
          }
        ]
      },
      "ja": {
        "name": "Graph Reconstruction Conjecture",
        "subtitle": "Can a Graph be Rebuilt from its Deck of Point-Deleted Shadows?",
        "field": "Structural Graph Theory & Isomorphism",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "If you take n polaroids of a graph with one vertex covered each time, can you rebuild the original?",
            "analogy": "Paul Kelly and Stanislaw Ulam asked in 1941: If you are given the 'deck' of all n subgraphs obtained by deleting one vertex at a time from a graph G (n ≥ 3), is G uniquely reconstructible? In other words, can two completely DIFFERENT graphs share the EXACT SAME card deck? Proved for trees and planar graphs, but open in general!",
            "rules": [
              "Graph G has n ≥ 3 vertices.",
              "Delete vertex v_i to get subgraph G - v_i.",
              "Collect the deck of all n subgraphs {G_1, ..., G_n}.",
              "Kelly-Ulam Conjecture: G is uniquely determined up to isomorphism!"
            ],
            "mystery": "Fails for n = 2: The graph with 1 edge has deck of two single vertices, which is IDENTICAL to the graph with 0 edges!",
            "funFact": "Trees, regular graphs, and disconnected graphs are all proved reconstructible!"
          },
          "investigators": {
            "tagline": "Kelly's lemma and subgraph counting.",
            "analogy": "Kelly's Lemma states that for any graph H with fewer vertices than G, the number of subgraphs of G isomorphic to H is reconstructible.",
            "rules": [
              "Kelly's Lemma: s(H, G) = (1 / (n - |V(H)|)) ∑ s(H, G_i).",
              "Degree sequence is reconstructible.",
              "Characteristic polynomial of adjacency matrix is reconstructible."
            ],
            "mystery": "Can spectral graph theory or algebraic invariants prove that the adjacency matrix is uniquely fixed by the deck?",
            "funFact": "Paul J. Kelly and Stanislaw Ulam posed the problem in 1941."
          },
          "pioneers": {
            "tagline": "Algebraic graph theory, graph polynomials, and group actions.",
            "analogy": "Tutte showed that many global chromatic and flow polynomials can be computed directly from the deck.",
            "rules": [
              "Tutte's reconstruction theorems.",
              "Graph isomorphism algorithms in quasipolynomial time (Babai 2016).",
              "Lean 4 Mathlib simple graphs."
            ],
            "mystery": "AI-guided combinatorial search has verified the conjecture for all graphs up to n = 11 vertices (over 1 billion graphs!).",
            "funFact": "The Graph Reconstruction Conjecture is the ultimate identity verification riddle in network mathematics."
          }
        },
        "history": [
          {
            "year": "1941",
            "author": "Kelly & Ulam",
            "note": "Propose the graph reconstruction conjecture."
          },
          {
            "year": "1957",
            "author": "Paul J. Kelly",
            "note": "Proves conjecture for all trees and establishes Kelly's Lemma."
          },
          {
            "year": "1979",
            "author": "W. T. Tutte",
            "note": "Surveys algebraic and polynomial reconstruction methods."
          }
        ]
      },
      "ko": {
        "name": "Graph Reconstruction Conjecture",
        "subtitle": "Can a Graph be Rebuilt from its Deck of Point-Deleted Shadows?",
        "field": "Structural Graph Theory & Isomorphism",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "If you take n polaroids of a graph with one vertex covered each time, can you rebuild the original?",
            "analogy": "Paul Kelly and Stanislaw Ulam asked in 1941: If you are given the 'deck' of all n subgraphs obtained by deleting one vertex at a time from a graph G (n ≥ 3), is G uniquely reconstructible? In other words, can two completely DIFFERENT graphs share the EXACT SAME card deck? Proved for trees and planar graphs, but open in general!",
            "rules": [
              "Graph G has n ≥ 3 vertices.",
              "Delete vertex v_i to get subgraph G - v_i.",
              "Collect the deck of all n subgraphs {G_1, ..., G_n}.",
              "Kelly-Ulam Conjecture: G is uniquely determined up to isomorphism!"
            ],
            "mystery": "Fails for n = 2: The graph with 1 edge has deck of two single vertices, which is IDENTICAL to the graph with 0 edges!",
            "funFact": "Trees, regular graphs, and disconnected graphs are all proved reconstructible!"
          },
          "investigators": {
            "tagline": "Kelly's lemma and subgraph counting.",
            "analogy": "Kelly's Lemma states that for any graph H with fewer vertices than G, the number of subgraphs of G isomorphic to H is reconstructible.",
            "rules": [
              "Kelly's Lemma: s(H, G) = (1 / (n - |V(H)|)) ∑ s(H, G_i).",
              "Degree sequence is reconstructible.",
              "Characteristic polynomial of adjacency matrix is reconstructible."
            ],
            "mystery": "Can spectral graph theory or algebraic invariants prove that the adjacency matrix is uniquely fixed by the deck?",
            "funFact": "Paul J. Kelly and Stanislaw Ulam posed the problem in 1941."
          },
          "pioneers": {
            "tagline": "Algebraic graph theory, graph polynomials, and group actions.",
            "analogy": "Tutte showed that many global chromatic and flow polynomials can be computed directly from the deck.",
            "rules": [
              "Tutte's reconstruction theorems.",
              "Graph isomorphism algorithms in quasipolynomial time (Babai 2016).",
              "Lean 4 Mathlib simple graphs."
            ],
            "mystery": "AI-guided combinatorial search has verified the conjecture for all graphs up to n = 11 vertices (over 1 billion graphs!).",
            "funFact": "The Graph Reconstruction Conjecture is the ultimate identity verification riddle in network mathematics."
          }
        },
        "history": [
          {
            "year": "1941",
            "author": "Kelly & Ulam",
            "note": "Propose the graph reconstruction conjecture."
          },
          {
            "year": "1957",
            "author": "Paul J. Kelly",
            "note": "Proves conjecture for all trees and establishes Kelly's Lemma."
          },
          {
            "year": "1979",
            "author": "W. T. Tutte",
            "note": "Surveys algebraic and polynomial reconstruction methods."
          }
        ]
      },
      "zh-Hans": {
        "name": "图重建猜想（凯利-乌拉姆猜想）",
        "subtitle": "通过撕去每个顶点的所有子图碎片卡片，能否唯一还原整张原图？",
        "field": "结构图论 & 同构群分析",
        "statusBadge": "未解之谜",
        "grades": {
          "explorers": {
            "tagline": "给一个图拍 n 张照片，每次恰好遮住其中一个顶点，你能从这套照片库中唯一拼出原图吗？",
            "analogy": "1941年凯利与乌拉姆提出：给定一个顶点数 n ≥ 3 的图 G，分别抹去每个顶点得到 n 张残缺子图卡片（称为“卡牌组”）。这两张完全不同的图，会不会拥有完全相同的卡牌组？猜想断言：原图的拓扑结构被这套残缺卡牌组唯一决定！对于树图和平面图已经完全获证，但一般图依然是天大的谜题！",
            "rules": [
              "图 G 拥有 n ≥ 3 个顶点。",
              "轮流撕掉每个顶点 v_i 得到子图 G - v_i。",
              "收集所有 n 张子图组成的完整卡包。",
              "猜想：任何包含 ≥ 3 顶点的简单图都能被卡包唯一还原！"
            ],
            "mystery": "对于 n = 2 猜想失效：单条边的卡牌组是两个孤立点，与没有边的图完全一样！因此必须从 n ≥ 3 开始。",
            "funFact": "树图、正则图、不连通图以及平面图已经被数学家彻底攻克，全都能被唯一重建！"
          },
          "investigators": {
            "tagline": "凯利引理与子图计数多项式。",
            "analogy": "凯利引理证明：任何阶数严格小于 G 的子图 H，其在原图 G 中出现的总频次可以从卡包中被完全确定。",
            "rules": [
              "凯利子图计数引理。",
              "原图所有顶点的度数序列可完全重建。",
              "邻接矩阵的特征多项式与 Tutte 多项式均可重建。"
            ],
            "mystery": "代数图论谱不变量能否完全证明邻接矩阵的同构类被残缺子图唯一锁定？",
            "funFact": "保罗·凯利与斯坦尼斯瓦夫·乌拉姆于1941年提出。"
          },
          "pioneers": {
            "tagline": "代数图论、图特征多项式与置换群作用。",
            "analogy": "图论大师塔特证明了包括色多项式在内的诸多全局图不变量均可直接从卡包中精确解析计算。",
            "rules": [
              "塔特重建定理体系。",
              "鲍鲍伊拟多项式时间图同构判别算法。",
              "Lean 4 Mathlib 简单图同构公理化。"
            ],
            "mystery": "计算机穷举与 AI 启发式搜索已验证了直到 11 个顶点的所有图（超过10亿张图无一反例）。",
            "funFact": "图重建猜想是网络拓扑学与离散数学领域最核心的身份认证终极之谜。"
          }
        },
        "history": [
          {
            "year": "1941",
            "author": "凯利 & 乌拉姆",
            "note": "提出残缺子图还原原图猜想。"
          },
          {
            "year": "1957",
            "author": "保罗·凯利",
            "note": "证明所有树图均可重建并确立凯利引理。"
          },
          {
            "year": "1979",
            "author": "W. T. 塔特",
            "note": "系统建立多项式代数重建理论。"
          }
        ]
      },
      "zh-Hant": {
        "name": "Graph Reconstruction Conjecture",
        "subtitle": "Can a Graph be Rebuilt from its Deck of Point-Deleted Shadows?",
        "field": "Structural Graph Theory & Isomorphism",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "If you take n polaroids of a graph with one vertex covered each time, can you rebuild the original?",
            "analogy": "Paul Kelly and Stanislaw Ulam asked in 1941: If you are given the 'deck' of all n subgraphs obtained by deleting one vertex at a time from a graph G (n ≥ 3), is G uniquely reconstructible? In other words, can two completely DIFFERENT graphs share the EXACT SAME card deck? Proved for trees and planar graphs, but open in general!",
            "rules": [
              "Graph G has n ≥ 3 vertices.",
              "Delete vertex v_i to get subgraph G - v_i.",
              "Collect the deck of all n subgraphs {G_1, ..., G_n}.",
              "Kelly-Ulam Conjecture: G is uniquely determined up to isomorphism!"
            ],
            "mystery": "Fails for n = 2: The graph with 1 edge has deck of two single vertices, which is IDENTICAL to the graph with 0 edges!",
            "funFact": "Trees, regular graphs, and disconnected graphs are all proved reconstructible!"
          },
          "investigators": {
            "tagline": "Kelly's lemma and subgraph counting.",
            "analogy": "Kelly's Lemma states that for any graph H with fewer vertices than G, the number of subgraphs of G isomorphic to H is reconstructible.",
            "rules": [
              "Kelly's Lemma: s(H, G) = (1 / (n - |V(H)|)) ∑ s(H, G_i).",
              "Degree sequence is reconstructible.",
              "Characteristic polynomial of adjacency matrix is reconstructible."
            ],
            "mystery": "Can spectral graph theory or algebraic invariants prove that the adjacency matrix is uniquely fixed by the deck?",
            "funFact": "Paul J. Kelly and Stanislaw Ulam posed the problem in 1941."
          },
          "pioneers": {
            "tagline": "Algebraic graph theory, graph polynomials, and group actions.",
            "analogy": "Tutte showed that many global chromatic and flow polynomials can be computed directly from the deck.",
            "rules": [
              "Tutte's reconstruction theorems.",
              "Graph isomorphism algorithms in quasipolynomial time (Babai 2016).",
              "Lean 4 Mathlib simple graphs."
            ],
            "mystery": "AI-guided combinatorial search has verified the conjecture for all graphs up to n = 11 vertices (over 1 billion graphs!).",
            "funFact": "The Graph Reconstruction Conjecture is the ultimate identity verification riddle in network mathematics."
          }
        },
        "history": [
          {
            "year": "1941",
            "author": "Kelly & Ulam",
            "note": "Propose the graph reconstruction conjecture."
          },
          {
            "year": "1957",
            "author": "Paul J. Kelly",
            "note": "Proves conjecture for all trees and establishes Kelly's Lemma."
          },
          {
            "year": "1979",
            "author": "W. T. Tutte",
            "note": "Surveys algebraic and polynomial reconstruction methods."
          }
        ]
      }
    }
  },
  {
    "id": "lonely-runner",
    "icon": "🏃",
    "difficulty": "All Ages",
    "domain": "graph-theory",
    "category": "graph-theory",
    "isMillennium": false,
    "isAIFrontier": true,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Data.Real.Basic\n-- Lonely Runner Conjecture (Bienia et al., 1967)\n-- k runners on circular track of length 1 running at distinct speeds. Each runner is lonely (dist ≥ 1/k) at some time.",
    "locales": {
      "en": {
        "name": "The Lonely Runner Conjecture",
        "subtitle": "Do k Runners on a Track Always Experience Solitude?",
        "field": "Diophantine Approximation & Dynamical Systems",
        "statusBadge": "OPEN FOR k ≥ 8",
        "grades": {
          "explorers": {
            "tagline": "On a circular running track, can every runner eventually escape all others?",
            "analogy": "Consider k runners starting together at point 0 on a circular track of circumference 1, running at constant pairwise distinct speeds. A runner is 'lonely' if they are at distance at least 1/k from EVERY other runner along the track. The conjecture asserts: EVERY runner will eventually be lonely! Proved for k ≤ 7.",
            "rules": [
              "Track has length 1 (circle ℝ/ℤ).",
              "k runners with distinct integer speeds v_1, ..., v_k.",
              "Distance to nearest runner is at least 1/k.",
              "Proved for k = 1, 2, 3, 4, 5, 6, 7. Open for k ≥ 8!"
            ],
            "mystery": "The threshold 1/k is optimal: for speeds 1, 2, 3... at certain times, the gap can never exceed 1/k!",
            "funFact": "Barajas and Serra proved the case k = 7 in 2008 using view-obstruction geometry!"
          },
          "investigators": {
            "tagline": "View-obstruction problem in geometry of numbers.",
            "analogy": "J. M. Wills (1967) and Cusick (1973) proved the problem is equivalent to rays from the origin avoiding an array of open cubes in ℝ^k.",
            "rules": [
              "View-obstruction in ℝ^k: dist(t v, ℤ^k) ≥ 1/k.",
              "Tao (2018): Simplified proofs and connections to additive combinatorics.",
              "Proved for k ≤ 7."
            ],
            "mystery": "Can we prove the conjecture for k = 8 or for all k asymptotically?",
            "funFact": "Formulated by J. M. Wills in 1967 and named by Goddyn in 1998."
          },
          "pioneers": {
            "tagline": "Bohr topology and fractional chromatic numbers.",
            "analogy": "The lonely runner problem corresponds to finding independent sets of size k in certain circulant Cayley graphs.",
            "rules": [
              "Circulant graphs and independence numbers.",
              "Kronecker sequences on tori.",
              "Lean 4 Mathlib circle group ℝ/ℤ."
            ],
            "mystery": "AI SAT solvers and mixed-integer linear programs verify k = 8 candidate speeds across millions of vectors.",
            "funFact": "The Lonely Runner Conjecture is the poetics of solitary motion encoded in Diophantine geometry."
          }
        },
        "history": [
          {
            "year": "1967",
            "author": "J. M. Wills",
            "note": "Poses the diophantine approximation problem."
          },
          {
            "year": "1998",
            "author": "Luis Goddyn",
            "note": "Coins the evocative name 'Lonely Runner Conjecture'."
          },
          {
            "year": "2008",
            "author": "Javier Barajas & Oriol Serra",
            "note": "Prove the conjecture for k = 7."
          }
        ]
      },
      "de": {
        "name": "The Lonely Runner Conjecture",
        "subtitle": "Do k Runners on a Track Always Experience Solitude?",
        "field": "Diophantine Approximation & Dynamical Systems",
        "statusBadge": "OPEN FOR k ≥ 8",
        "grades": {
          "explorers": {
            "tagline": "On a circular running track, can every runner eventually escape all others?",
            "analogy": "Consider k runners starting together at point 0 on a circular track of circumference 1, running at constant pairwise distinct speeds. A runner is 'lonely' if they are at distance at least 1/k from EVERY other runner along the track. The conjecture asserts: EVERY runner will eventually be lonely! Proved for k ≤ 7.",
            "rules": [
              "Track has length 1 (circle ℝ/ℤ).",
              "k runners with distinct integer speeds v_1, ..., v_k.",
              "Distance to nearest runner is at least 1/k.",
              "Proved for k = 1, 2, 3, 4, 5, 6, 7. Open for k ≥ 8!"
            ],
            "mystery": "The threshold 1/k is optimal: for speeds 1, 2, 3... at certain times, the gap can never exceed 1/k!",
            "funFact": "Barajas and Serra proved the case k = 7 in 2008 using view-obstruction geometry!"
          },
          "investigators": {
            "tagline": "View-obstruction problem in geometry of numbers.",
            "analogy": "J. M. Wills (1967) and Cusick (1973) proved the problem is equivalent to rays from the origin avoiding an array of open cubes in ℝ^k.",
            "rules": [
              "View-obstruction in ℝ^k: dist(t v, ℤ^k) ≥ 1/k.",
              "Tao (2018): Simplified proofs and connections to additive combinatorics.",
              "Proved for k ≤ 7."
            ],
            "mystery": "Can we prove the conjecture for k = 8 or for all k asymptotically?",
            "funFact": "Formulated by J. M. Wills in 1967 and named by Goddyn in 1998."
          },
          "pioneers": {
            "tagline": "Bohr topology and fractional chromatic numbers.",
            "analogy": "The lonely runner problem corresponds to finding independent sets of size k in certain circulant Cayley graphs.",
            "rules": [
              "Circulant graphs and independence numbers.",
              "Kronecker sequences on tori.",
              "Lean 4 Mathlib circle group ℝ/ℤ."
            ],
            "mystery": "AI SAT solvers and mixed-integer linear programs verify k = 8 candidate speeds across millions of vectors.",
            "funFact": "The Lonely Runner Conjecture is the poetics of solitary motion encoded in Diophantine geometry."
          }
        },
        "history": [
          {
            "year": "1967",
            "author": "J. M. Wills",
            "note": "Poses the diophantine approximation problem."
          },
          {
            "year": "1998",
            "author": "Luis Goddyn",
            "note": "Coins the evocative name 'Lonely Runner Conjecture'."
          },
          {
            "year": "2008",
            "author": "Javier Barajas & Oriol Serra",
            "note": "Prove the conjecture for k = 7."
          }
        ]
      },
      "fr": {
        "name": "The Lonely Runner Conjecture",
        "subtitle": "Do k Runners on a Track Always Experience Solitude?",
        "field": "Diophantine Approximation & Dynamical Systems",
        "statusBadge": "OPEN FOR k ≥ 8",
        "grades": {
          "explorers": {
            "tagline": "On a circular running track, can every runner eventually escape all others?",
            "analogy": "Consider k runners starting together at point 0 on a circular track of circumference 1, running at constant pairwise distinct speeds. A runner is 'lonely' if they are at distance at least 1/k from EVERY other runner along the track. The conjecture asserts: EVERY runner will eventually be lonely! Proved for k ≤ 7.",
            "rules": [
              "Track has length 1 (circle ℝ/ℤ).",
              "k runners with distinct integer speeds v_1, ..., v_k.",
              "Distance to nearest runner is at least 1/k.",
              "Proved for k = 1, 2, 3, 4, 5, 6, 7. Open for k ≥ 8!"
            ],
            "mystery": "The threshold 1/k is optimal: for speeds 1, 2, 3... at certain times, the gap can never exceed 1/k!",
            "funFact": "Barajas and Serra proved the case k = 7 in 2008 using view-obstruction geometry!"
          },
          "investigators": {
            "tagline": "View-obstruction problem in geometry of numbers.",
            "analogy": "J. M. Wills (1967) and Cusick (1973) proved the problem is equivalent to rays from the origin avoiding an array of open cubes in ℝ^k.",
            "rules": [
              "View-obstruction in ℝ^k: dist(t v, ℤ^k) ≥ 1/k.",
              "Tao (2018): Simplified proofs and connections to additive combinatorics.",
              "Proved for k ≤ 7."
            ],
            "mystery": "Can we prove the conjecture for k = 8 or for all k asymptotically?",
            "funFact": "Formulated by J. M. Wills in 1967 and named by Goddyn in 1998."
          },
          "pioneers": {
            "tagline": "Bohr topology and fractional chromatic numbers.",
            "analogy": "The lonely runner problem corresponds to finding independent sets of size k in certain circulant Cayley graphs.",
            "rules": [
              "Circulant graphs and independence numbers.",
              "Kronecker sequences on tori.",
              "Lean 4 Mathlib circle group ℝ/ℤ."
            ],
            "mystery": "AI SAT solvers and mixed-integer linear programs verify k = 8 candidate speeds across millions of vectors.",
            "funFact": "The Lonely Runner Conjecture is the poetics of solitary motion encoded in Diophantine geometry."
          }
        },
        "history": [
          {
            "year": "1967",
            "author": "J. M. Wills",
            "note": "Poses the diophantine approximation problem."
          },
          {
            "year": "1998",
            "author": "Luis Goddyn",
            "note": "Coins the evocative name 'Lonely Runner Conjecture'."
          },
          {
            "year": "2008",
            "author": "Javier Barajas & Oriol Serra",
            "note": "Prove the conjecture for k = 7."
          }
        ]
      },
      "it": {
        "name": "The Lonely Runner Conjecture",
        "subtitle": "Do k Runners on a Track Always Experience Solitude?",
        "field": "Diophantine Approximation & Dynamical Systems",
        "statusBadge": "OPEN FOR k ≥ 8",
        "grades": {
          "explorers": {
            "tagline": "On a circular running track, can every runner eventually escape all others?",
            "analogy": "Consider k runners starting together at point 0 on a circular track of circumference 1, running at constant pairwise distinct speeds. A runner is 'lonely' if they are at distance at least 1/k from EVERY other runner along the track. The conjecture asserts: EVERY runner will eventually be lonely! Proved for k ≤ 7.",
            "rules": [
              "Track has length 1 (circle ℝ/ℤ).",
              "k runners with distinct integer speeds v_1, ..., v_k.",
              "Distance to nearest runner is at least 1/k.",
              "Proved for k = 1, 2, 3, 4, 5, 6, 7. Open for k ≥ 8!"
            ],
            "mystery": "The threshold 1/k is optimal: for speeds 1, 2, 3... at certain times, the gap can never exceed 1/k!",
            "funFact": "Barajas and Serra proved the case k = 7 in 2008 using view-obstruction geometry!"
          },
          "investigators": {
            "tagline": "View-obstruction problem in geometry of numbers.",
            "analogy": "J. M. Wills (1967) and Cusick (1973) proved the problem is equivalent to rays from the origin avoiding an array of open cubes in ℝ^k.",
            "rules": [
              "View-obstruction in ℝ^k: dist(t v, ℤ^k) ≥ 1/k.",
              "Tao (2018): Simplified proofs and connections to additive combinatorics.",
              "Proved for k ≤ 7."
            ],
            "mystery": "Can we prove the conjecture for k = 8 or for all k asymptotically?",
            "funFact": "Formulated by J. M. Wills in 1967 and named by Goddyn in 1998."
          },
          "pioneers": {
            "tagline": "Bohr topology and fractional chromatic numbers.",
            "analogy": "The lonely runner problem corresponds to finding independent sets of size k in certain circulant Cayley graphs.",
            "rules": [
              "Circulant graphs and independence numbers.",
              "Kronecker sequences on tori.",
              "Lean 4 Mathlib circle group ℝ/ℤ."
            ],
            "mystery": "AI SAT solvers and mixed-integer linear programs verify k = 8 candidate speeds across millions of vectors.",
            "funFact": "The Lonely Runner Conjecture is the poetics of solitary motion encoded in Diophantine geometry."
          }
        },
        "history": [
          {
            "year": "1967",
            "author": "J. M. Wills",
            "note": "Poses the diophantine approximation problem."
          },
          {
            "year": "1998",
            "author": "Luis Goddyn",
            "note": "Coins the evocative name 'Lonely Runner Conjecture'."
          },
          {
            "year": "2008",
            "author": "Javier Barajas & Oriol Serra",
            "note": "Prove the conjecture for k = 7."
          }
        ]
      },
      "ja": {
        "name": "The Lonely Runner Conjecture",
        "subtitle": "Do k Runners on a Track Always Experience Solitude?",
        "field": "Diophantine Approximation & Dynamical Systems",
        "statusBadge": "OPEN FOR k ≥ 8",
        "grades": {
          "explorers": {
            "tagline": "On a circular running track, can every runner eventually escape all others?",
            "analogy": "Consider k runners starting together at point 0 on a circular track of circumference 1, running at constant pairwise distinct speeds. A runner is 'lonely' if they are at distance at least 1/k from EVERY other runner along the track. The conjecture asserts: EVERY runner will eventually be lonely! Proved for k ≤ 7.",
            "rules": [
              "Track has length 1 (circle ℝ/ℤ).",
              "k runners with distinct integer speeds v_1, ..., v_k.",
              "Distance to nearest runner is at least 1/k.",
              "Proved for k = 1, 2, 3, 4, 5, 6, 7. Open for k ≥ 8!"
            ],
            "mystery": "The threshold 1/k is optimal: for speeds 1, 2, 3... at certain times, the gap can never exceed 1/k!",
            "funFact": "Barajas and Serra proved the case k = 7 in 2008 using view-obstruction geometry!"
          },
          "investigators": {
            "tagline": "View-obstruction problem in geometry of numbers.",
            "analogy": "J. M. Wills (1967) and Cusick (1973) proved the problem is equivalent to rays from the origin avoiding an array of open cubes in ℝ^k.",
            "rules": [
              "View-obstruction in ℝ^k: dist(t v, ℤ^k) ≥ 1/k.",
              "Tao (2018): Simplified proofs and connections to additive combinatorics.",
              "Proved for k ≤ 7."
            ],
            "mystery": "Can we prove the conjecture for k = 8 or for all k asymptotically?",
            "funFact": "Formulated by J. M. Wills in 1967 and named by Goddyn in 1998."
          },
          "pioneers": {
            "tagline": "Bohr topology and fractional chromatic numbers.",
            "analogy": "The lonely runner problem corresponds to finding independent sets of size k in certain circulant Cayley graphs.",
            "rules": [
              "Circulant graphs and independence numbers.",
              "Kronecker sequences on tori.",
              "Lean 4 Mathlib circle group ℝ/ℤ."
            ],
            "mystery": "AI SAT solvers and mixed-integer linear programs verify k = 8 candidate speeds across millions of vectors.",
            "funFact": "The Lonely Runner Conjecture is the poetics of solitary motion encoded in Diophantine geometry."
          }
        },
        "history": [
          {
            "year": "1967",
            "author": "J. M. Wills",
            "note": "Poses the diophantine approximation problem."
          },
          {
            "year": "1998",
            "author": "Luis Goddyn",
            "note": "Coins the evocative name 'Lonely Runner Conjecture'."
          },
          {
            "year": "2008",
            "author": "Javier Barajas & Oriol Serra",
            "note": "Prove the conjecture for k = 7."
          }
        ]
      },
      "ko": {
        "name": "The Lonely Runner Conjecture",
        "subtitle": "Do k Runners on a Track Always Experience Solitude?",
        "field": "Diophantine Approximation & Dynamical Systems",
        "statusBadge": "OPEN FOR k ≥ 8",
        "grades": {
          "explorers": {
            "tagline": "On a circular running track, can every runner eventually escape all others?",
            "analogy": "Consider k runners starting together at point 0 on a circular track of circumference 1, running at constant pairwise distinct speeds. A runner is 'lonely' if they are at distance at least 1/k from EVERY other runner along the track. The conjecture asserts: EVERY runner will eventually be lonely! Proved for k ≤ 7.",
            "rules": [
              "Track has length 1 (circle ℝ/ℤ).",
              "k runners with distinct integer speeds v_1, ..., v_k.",
              "Distance to nearest runner is at least 1/k.",
              "Proved for k = 1, 2, 3, 4, 5, 6, 7. Open for k ≥ 8!"
            ],
            "mystery": "The threshold 1/k is optimal: for speeds 1, 2, 3... at certain times, the gap can never exceed 1/k!",
            "funFact": "Barajas and Serra proved the case k = 7 in 2008 using view-obstruction geometry!"
          },
          "investigators": {
            "tagline": "View-obstruction problem in geometry of numbers.",
            "analogy": "J. M. Wills (1967) and Cusick (1973) proved the problem is equivalent to rays from the origin avoiding an array of open cubes in ℝ^k.",
            "rules": [
              "View-obstruction in ℝ^k: dist(t v, ℤ^k) ≥ 1/k.",
              "Tao (2018): Simplified proofs and connections to additive combinatorics.",
              "Proved for k ≤ 7."
            ],
            "mystery": "Can we prove the conjecture for k = 8 or for all k asymptotically?",
            "funFact": "Formulated by J. M. Wills in 1967 and named by Goddyn in 1998."
          },
          "pioneers": {
            "tagline": "Bohr topology and fractional chromatic numbers.",
            "analogy": "The lonely runner problem corresponds to finding independent sets of size k in certain circulant Cayley graphs.",
            "rules": [
              "Circulant graphs and independence numbers.",
              "Kronecker sequences on tori.",
              "Lean 4 Mathlib circle group ℝ/ℤ."
            ],
            "mystery": "AI SAT solvers and mixed-integer linear programs verify k = 8 candidate speeds across millions of vectors.",
            "funFact": "The Lonely Runner Conjecture is the poetics of solitary motion encoded in Diophantine geometry."
          }
        },
        "history": [
          {
            "year": "1967",
            "author": "J. M. Wills",
            "note": "Poses the diophantine approximation problem."
          },
          {
            "year": "1998",
            "author": "Luis Goddyn",
            "note": "Coins the evocative name 'Lonely Runner Conjecture'."
          },
          {
            "year": "2008",
            "author": "Javier Barajas & Oriol Serra",
            "note": "Prove the conjecture for k = 7."
          }
        ]
      },
      "zh-Hans": {
        "name": "孤独跑者猜想",
        "subtitle": "环形跑道上的 k 名不同配速跑者，是否每人必定能迎来一段孤独高光时刻？",
        "field": "丢番图逼近 & 环面圆周动力学",
        "statusBadge": "k ≥ 8 依然未决",
        "grades": {
          "explorers": {
            "tagline": "在一条长度为 1 的环形跑道上，每个人跑得快慢不同，能否每个人都在某一刻甩开所有对手？",
            "analogy": "k 名跑步运动员从周长为 1 的环形跑道同一起点出发，各自保持互不相同的恒定速度。如果某名跑者距离跑道上其他所有人的距离都至少达到 1/k，他就被称为“孤独跑者”。猜想断言：无论速度怎么设定，每一个跑者在未来的某个时刻必定会品尝到孤独的滋味！目前已对 k ≤ 7 获证，但从 k = 8 开始依然无人能解！",
            "rules": [
              "跑道周长为 1（圆周群 ℝ/ℤ）。",
              "k 名选手拥有互不相同的整数速度。",
              "与最近选手的环形距离 ≥ 1/k。",
              "已获证：k ≤ 7；k ≥ 8 至今悬案！"
            ],
            "mystery": "阈值 1/k 是绝对最优的：若速度设为 1, 2, 3...，选手之间的间隙极限最高正好就是 1/k！",
            "funFact": "巴拉哈斯与塞拉在2008年运用视线遮挡几何学攻克了 k = 7 的难关！"
          },
          "investigators": {
            "tagline": "数几何中的视线遮挡问题 (View-obstruction)。",
            "analogy": "维尔斯与丘西克证明：该问题等价于从高维原点发射的射线能否避开以整点为中心的开超立方体阵列。",
            "rules": [
              "高维数格上的射线视线遮挡形式。",
              "陶哲轩 (2018) 发现与加性组合学的深层关联。",
              "k ≤ 7 已被计算机与几何方法证实。"
            ],
            "mystery": "能否在 k = 8 取得突破，或给出充分大 k 的普遍性渐近证明？",
            "funFact": "维尔斯于1967年提出，戈丁于1998年赋予其“孤独跑者”美名。"
          },
          "pioneers": {
            "tagline": "玻尔拓扑与循环图的分数染色数。",
            "analogy": "等价于在特定的循环凯莱图中寻找具有特定分数测度的最大独立集。",
            "rules": [
              "循环图与独立集极值约束。",
              "环面上的克罗内克遍历轨道。",
              "Lean 4 Mathlib 中圆周紧致李群 ℝ/ℤ 形式化。"
            ],
            "mystery": "AI 混合整数规划与 SAT 求解器正在排查 k = 8 的所有潜在反例速度向量。",
            "funFact": "孤独跑者猜想是用丢番图动力学写下的关于孤独与运动的最浪漫数学诗篇。"
          }
        },
        "history": [
          {
            "year": "1967",
            "author": "J. M. 维尔斯",
            "note": "在丢番图逼近研究中提出该问题。"
          },
          {
            "year": "1998",
            "author": "路易斯·戈丁",
            "note": "正式定名为“孤独跑者猜想”。"
          },
          {
            "year": "2008",
            "author": "巴拉哈斯 & 塞拉",
            "note": "攻克 k = 7 情形！"
          }
        ]
      },
      "zh-Hant": {
        "name": "The Lonely Runner Conjecture",
        "subtitle": "Do k Runners on a Track Always Experience Solitude?",
        "field": "Diophantine Approximation & Dynamical Systems",
        "statusBadge": "OPEN FOR k ≥ 8",
        "grades": {
          "explorers": {
            "tagline": "On a circular running track, can every runner eventually escape all others?",
            "analogy": "Consider k runners starting together at point 0 on a circular track of circumference 1, running at constant pairwise distinct speeds. A runner is 'lonely' if they are at distance at least 1/k from EVERY other runner along the track. The conjecture asserts: EVERY runner will eventually be lonely! Proved for k ≤ 7.",
            "rules": [
              "Track has length 1 (circle ℝ/ℤ).",
              "k runners with distinct integer speeds v_1, ..., v_k.",
              "Distance to nearest runner is at least 1/k.",
              "Proved for k = 1, 2, 3, 4, 5, 6, 7. Open for k ≥ 8!"
            ],
            "mystery": "The threshold 1/k is optimal: for speeds 1, 2, 3... at certain times, the gap can never exceed 1/k!",
            "funFact": "Barajas and Serra proved the case k = 7 in 2008 using view-obstruction geometry!"
          },
          "investigators": {
            "tagline": "View-obstruction problem in geometry of numbers.",
            "analogy": "J. M. Wills (1967) and Cusick (1973) proved the problem is equivalent to rays from the origin avoiding an array of open cubes in ℝ^k.",
            "rules": [
              "View-obstruction in ℝ^k: dist(t v, ℤ^k) ≥ 1/k.",
              "Tao (2018): Simplified proofs and connections to additive combinatorics.",
              "Proved for k ≤ 7."
            ],
            "mystery": "Can we prove the conjecture for k = 8 or for all k asymptotically?",
            "funFact": "Formulated by J. M. Wills in 1967 and named by Goddyn in 1998."
          },
          "pioneers": {
            "tagline": "Bohr topology and fractional chromatic numbers.",
            "analogy": "The lonely runner problem corresponds to finding independent sets of size k in certain circulant Cayley graphs.",
            "rules": [
              "Circulant graphs and independence numbers.",
              "Kronecker sequences on tori.",
              "Lean 4 Mathlib circle group ℝ/ℤ."
            ],
            "mystery": "AI SAT solvers and mixed-integer linear programs verify k = 8 candidate speeds across millions of vectors.",
            "funFact": "The Lonely Runner Conjecture is the poetics of solitary motion encoded in Diophantine geometry."
          }
        },
        "history": [
          {
            "year": "1967",
            "author": "J. M. Wills",
            "note": "Poses the diophantine approximation problem."
          },
          {
            "year": "1998",
            "author": "Luis Goddyn",
            "note": "Coins the evocative name 'Lonely Runner Conjecture'."
          },
          {
            "year": "2008",
            "author": "Javier Barajas & Oriol Serra",
            "note": "Prove the conjecture for k = 7."
          }
        ]
      }
    }
  },
  {
    "id": "frankl",
    "icon": "📦",
    "difficulty": "All Ages",
    "domain": "graph-theory",
    "category": "graph-theory",
    "isMillennium": false,
    "isAIFrontier": true,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Combinatorics.SimpleGraph.Basic\n-- Frankl's Union-Closed Sets Conjecture (1979)\n-- In any finite union-closed family of sets, there exists an element belonging to at least 50% of the sets.\n-- Major breakthrough by Justin Gilmer in 2022 (proved ≥ 0.38).",
    "locales": {
      "en": {
        "name": "Frankl's Union-Closed Conjecture",
        "subtitle": "Does Every Union-Closed Family Contain an Element in at Least 50% of Sets?",
        "field": "Extremal Combinatorics & Information Theory",
        "statusBadge": "AI ERA SENSATION (GILMER 2022)",
        "grades": {
          "explorers": {
            "tagline": "If every combination of ingredient boxes makes another box, is one ingredient in half of them?",
            "analogy": "Péter Frankl conjectured in 1979: In ANY non-empty finite collection of sets that is closed under taking unions (meaning if A and B are in the family, A ∪ B is also in it), there must exist AT LEAST ONE element that belongs to at least 50% of the sets! In 2022, Justin Gilmer (Google) made a historic breakthrough using entropy to prove a bound of ~38%!",
            "rules": [
              "Family ℱ of sets: A, B ∈ ℱ implies A ∪ B ∈ ℱ.",
              "Question: ∃ x such that x is in at least 50% of the sets in ℱ?",
              "Gilmer (2022): Used Shannon entropy to prove bound ≥ 0.01, immediately pushed to 0.38!",
              "Open: Close the gap from 38% to 50%!"
            ],
            "mystery": "Justin Gilmer had no prior background in extremal set theory; he solved the 43-year-old mystery by approaching it from machine learning and information theory!",
            "funFact": "The 50% bound is tight: for a family containing {1}, {2}, and {1, 2}, elements 1 and 2 appear in exactly 2 out of 3 sets (66.7%), and for a power set on 1 element it is exactly 50%!"
          },
          "investigators": {
            "tagline": "Shannon entropy on product spaces and submodularity.",
            "analogy": "Gilmer showed that if A and B are independent random sets chosen from the family, H(A ∪ B) ≤ 2 H(A) - ∑ p_i, using the submodularity of entropy to force a large marginal probability.",
            "rules": [
              "Information entropy H(A) = -∑ p log p.",
              "Gilmer's inequality: H(A ∪ B) submodularity.",
              "Pushed by Sawhney, Chase, Tao to (3 - √5)/2 ≈ 0.38197."
            ],
            "mystery": "Can we bridge the final gap from 38.2% to 50.0%?",
            "funFact": "Péter Frankl proposed the conjecture in 1979."
          },
          "pioneers": {
            "tagline": "Entropy inequalities and Boolean cube analysis.",
            "analogy": "The conjecture translates into analyzing monotone Boolean functions with low boundary Fourier influence.",
            "rules": [
              "Fourier analysis on the Boolean cube.",
              "Kahn-Kalai-Linial influence theorem.",
              "Formalization of entropy in Lean 4."
            ],
            "mystery": "AI-guided theorem provers are searching for entropy-maximizing measure configurations.",
            "funFact": "Gilmer's discovery was celebrated as one of the most stunning triumphs of information theory in discrete mathematics."
          }
        },
        "history": [
          {
            "year": "1979",
            "author": "Péter Frankl",
            "note": "Poses the union-closed sets conjecture."
          },
          {
            "year": "2022 (Nov)",
            "author": "Justin Gilmer",
            "note": "Breaks 43-year barrier using information theory (proving constant bound)."
          },
          {
            "year": "2022 (Nov)",
            "author": "Alweiss, Chase, Lovett, Sawhney, Tao",
            "note": "Optimize Gilmer's constant to (3 - √5)/2 ≈ 38.2%."
          }
        ]
      },
      "de": {
        "name": "Frankl's Union-Closed Conjecture",
        "subtitle": "Does Every Union-Closed Family Contain an Element in at Least 50% of Sets?",
        "field": "Extremal Combinatorics & Information Theory",
        "statusBadge": "AI ERA SENSATION (GILMER 2022)",
        "grades": {
          "explorers": {
            "tagline": "If every combination of ingredient boxes makes another box, is one ingredient in half of them?",
            "analogy": "Péter Frankl conjectured in 1979: In ANY non-empty finite collection of sets that is closed under taking unions (meaning if A and B are in the family, A ∪ B is also in it), there must exist AT LEAST ONE element that belongs to at least 50% of the sets! In 2022, Justin Gilmer (Google) made a historic breakthrough using entropy to prove a bound of ~38%!",
            "rules": [
              "Family ℱ of sets: A, B ∈ ℱ implies A ∪ B ∈ ℱ.",
              "Question: ∃ x such that x is in at least 50% of the sets in ℱ?",
              "Gilmer (2022): Used Shannon entropy to prove bound ≥ 0.01, immediately pushed to 0.38!",
              "Open: Close the gap from 38% to 50%!"
            ],
            "mystery": "Justin Gilmer had no prior background in extremal set theory; he solved the 43-year-old mystery by approaching it from machine learning and information theory!",
            "funFact": "The 50% bound is tight: for a family containing {1}, {2}, and {1, 2}, elements 1 and 2 appear in exactly 2 out of 3 sets (66.7%), and for a power set on 1 element it is exactly 50%!"
          },
          "investigators": {
            "tagline": "Shannon entropy on product spaces and submodularity.",
            "analogy": "Gilmer showed that if A and B are independent random sets chosen from the family, H(A ∪ B) ≤ 2 H(A) - ∑ p_i, using the submodularity of entropy to force a large marginal probability.",
            "rules": [
              "Information entropy H(A) = -∑ p log p.",
              "Gilmer's inequality: H(A ∪ B) submodularity.",
              "Pushed by Sawhney, Chase, Tao to (3 - √5)/2 ≈ 0.38197."
            ],
            "mystery": "Can we bridge the final gap from 38.2% to 50.0%?",
            "funFact": "Péter Frankl proposed the conjecture in 1979."
          },
          "pioneers": {
            "tagline": "Entropy inequalities and Boolean cube analysis.",
            "analogy": "The conjecture translates into analyzing monotone Boolean functions with low boundary Fourier influence.",
            "rules": [
              "Fourier analysis on the Boolean cube.",
              "Kahn-Kalai-Linial influence theorem.",
              "Formalization of entropy in Lean 4."
            ],
            "mystery": "AI-guided theorem provers are searching for entropy-maximizing measure configurations.",
            "funFact": "Gilmer's discovery was celebrated as one of the most stunning triumphs of information theory in discrete mathematics."
          }
        },
        "history": [
          {
            "year": "1979",
            "author": "Péter Frankl",
            "note": "Poses the union-closed sets conjecture."
          },
          {
            "year": "2022 (Nov)",
            "author": "Justin Gilmer",
            "note": "Breaks 43-year barrier using information theory (proving constant bound)."
          },
          {
            "year": "2022 (Nov)",
            "author": "Alweiss, Chase, Lovett, Sawhney, Tao",
            "note": "Optimize Gilmer's constant to (3 - √5)/2 ≈ 38.2%."
          }
        ]
      },
      "fr": {
        "name": "Frankl's Union-Closed Conjecture",
        "subtitle": "Does Every Union-Closed Family Contain an Element in at Least 50% of Sets?",
        "field": "Extremal Combinatorics & Information Theory",
        "statusBadge": "AI ERA SENSATION (GILMER 2022)",
        "grades": {
          "explorers": {
            "tagline": "If every combination of ingredient boxes makes another box, is one ingredient in half of them?",
            "analogy": "Péter Frankl conjectured in 1979: In ANY non-empty finite collection of sets that is closed under taking unions (meaning if A and B are in the family, A ∪ B is also in it), there must exist AT LEAST ONE element that belongs to at least 50% of the sets! In 2022, Justin Gilmer (Google) made a historic breakthrough using entropy to prove a bound of ~38%!",
            "rules": [
              "Family ℱ of sets: A, B ∈ ℱ implies A ∪ B ∈ ℱ.",
              "Question: ∃ x such that x is in at least 50% of the sets in ℱ?",
              "Gilmer (2022): Used Shannon entropy to prove bound ≥ 0.01, immediately pushed to 0.38!",
              "Open: Close the gap from 38% to 50%!"
            ],
            "mystery": "Justin Gilmer had no prior background in extremal set theory; he solved the 43-year-old mystery by approaching it from machine learning and information theory!",
            "funFact": "The 50% bound is tight: for a family containing {1}, {2}, and {1, 2}, elements 1 and 2 appear in exactly 2 out of 3 sets (66.7%), and for a power set on 1 element it is exactly 50%!"
          },
          "investigators": {
            "tagline": "Shannon entropy on product spaces and submodularity.",
            "analogy": "Gilmer showed that if A and B are independent random sets chosen from the family, H(A ∪ B) ≤ 2 H(A) - ∑ p_i, using the submodularity of entropy to force a large marginal probability.",
            "rules": [
              "Information entropy H(A) = -∑ p log p.",
              "Gilmer's inequality: H(A ∪ B) submodularity.",
              "Pushed by Sawhney, Chase, Tao to (3 - √5)/2 ≈ 0.38197."
            ],
            "mystery": "Can we bridge the final gap from 38.2% to 50.0%?",
            "funFact": "Péter Frankl proposed the conjecture in 1979."
          },
          "pioneers": {
            "tagline": "Entropy inequalities and Boolean cube analysis.",
            "analogy": "The conjecture translates into analyzing monotone Boolean functions with low boundary Fourier influence.",
            "rules": [
              "Fourier analysis on the Boolean cube.",
              "Kahn-Kalai-Linial influence theorem.",
              "Formalization of entropy in Lean 4."
            ],
            "mystery": "AI-guided theorem provers are searching for entropy-maximizing measure configurations.",
            "funFact": "Gilmer's discovery was celebrated as one of the most stunning triumphs of information theory in discrete mathematics."
          }
        },
        "history": [
          {
            "year": "1979",
            "author": "Péter Frankl",
            "note": "Poses the union-closed sets conjecture."
          },
          {
            "year": "2022 (Nov)",
            "author": "Justin Gilmer",
            "note": "Breaks 43-year barrier using information theory (proving constant bound)."
          },
          {
            "year": "2022 (Nov)",
            "author": "Alweiss, Chase, Lovett, Sawhney, Tao",
            "note": "Optimize Gilmer's constant to (3 - √5)/2 ≈ 38.2%."
          }
        ]
      },
      "it": {
        "name": "Frankl's Union-Closed Conjecture",
        "subtitle": "Does Every Union-Closed Family Contain an Element in at Least 50% of Sets?",
        "field": "Extremal Combinatorics & Information Theory",
        "statusBadge": "AI ERA SENSATION (GILMER 2022)",
        "grades": {
          "explorers": {
            "tagline": "If every combination of ingredient boxes makes another box, is one ingredient in half of them?",
            "analogy": "Péter Frankl conjectured in 1979: In ANY non-empty finite collection of sets that is closed under taking unions (meaning if A and B are in the family, A ∪ B is also in it), there must exist AT LEAST ONE element that belongs to at least 50% of the sets! In 2022, Justin Gilmer (Google) made a historic breakthrough using entropy to prove a bound of ~38%!",
            "rules": [
              "Family ℱ of sets: A, B ∈ ℱ implies A ∪ B ∈ ℱ.",
              "Question: ∃ x such that x is in at least 50% of the sets in ℱ?",
              "Gilmer (2022): Used Shannon entropy to prove bound ≥ 0.01, immediately pushed to 0.38!",
              "Open: Close the gap from 38% to 50%!"
            ],
            "mystery": "Justin Gilmer had no prior background in extremal set theory; he solved the 43-year-old mystery by approaching it from machine learning and information theory!",
            "funFact": "The 50% bound is tight: for a family containing {1}, {2}, and {1, 2}, elements 1 and 2 appear in exactly 2 out of 3 sets (66.7%), and for a power set on 1 element it is exactly 50%!"
          },
          "investigators": {
            "tagline": "Shannon entropy on product spaces and submodularity.",
            "analogy": "Gilmer showed that if A and B are independent random sets chosen from the family, H(A ∪ B) ≤ 2 H(A) - ∑ p_i, using the submodularity of entropy to force a large marginal probability.",
            "rules": [
              "Information entropy H(A) = -∑ p log p.",
              "Gilmer's inequality: H(A ∪ B) submodularity.",
              "Pushed by Sawhney, Chase, Tao to (3 - √5)/2 ≈ 0.38197."
            ],
            "mystery": "Can we bridge the final gap from 38.2% to 50.0%?",
            "funFact": "Péter Frankl proposed the conjecture in 1979."
          },
          "pioneers": {
            "tagline": "Entropy inequalities and Boolean cube analysis.",
            "analogy": "The conjecture translates into analyzing monotone Boolean functions with low boundary Fourier influence.",
            "rules": [
              "Fourier analysis on the Boolean cube.",
              "Kahn-Kalai-Linial influence theorem.",
              "Formalization of entropy in Lean 4."
            ],
            "mystery": "AI-guided theorem provers are searching for entropy-maximizing measure configurations.",
            "funFact": "Gilmer's discovery was celebrated as one of the most stunning triumphs of information theory in discrete mathematics."
          }
        },
        "history": [
          {
            "year": "1979",
            "author": "Péter Frankl",
            "note": "Poses the union-closed sets conjecture."
          },
          {
            "year": "2022 (Nov)",
            "author": "Justin Gilmer",
            "note": "Breaks 43-year barrier using information theory (proving constant bound)."
          },
          {
            "year": "2022 (Nov)",
            "author": "Alweiss, Chase, Lovett, Sawhney, Tao",
            "note": "Optimize Gilmer's constant to (3 - √5)/2 ≈ 38.2%."
          }
        ]
      },
      "ja": {
        "name": "Frankl's Union-Closed Conjecture",
        "subtitle": "Does Every Union-Closed Family Contain an Element in at Least 50% of Sets?",
        "field": "Extremal Combinatorics & Information Theory",
        "statusBadge": "AI ERA SENSATION (GILMER 2022)",
        "grades": {
          "explorers": {
            "tagline": "If every combination of ingredient boxes makes another box, is one ingredient in half of them?",
            "analogy": "Péter Frankl conjectured in 1979: In ANY non-empty finite collection of sets that is closed under taking unions (meaning if A and B are in the family, A ∪ B is also in it), there must exist AT LEAST ONE element that belongs to at least 50% of the sets! In 2022, Justin Gilmer (Google) made a historic breakthrough using entropy to prove a bound of ~38%!",
            "rules": [
              "Family ℱ of sets: A, B ∈ ℱ implies A ∪ B ∈ ℱ.",
              "Question: ∃ x such that x is in at least 50% of the sets in ℱ?",
              "Gilmer (2022): Used Shannon entropy to prove bound ≥ 0.01, immediately pushed to 0.38!",
              "Open: Close the gap from 38% to 50%!"
            ],
            "mystery": "Justin Gilmer had no prior background in extremal set theory; he solved the 43-year-old mystery by approaching it from machine learning and information theory!",
            "funFact": "The 50% bound is tight: for a family containing {1}, {2}, and {1, 2}, elements 1 and 2 appear in exactly 2 out of 3 sets (66.7%), and for a power set on 1 element it is exactly 50%!"
          },
          "investigators": {
            "tagline": "Shannon entropy on product spaces and submodularity.",
            "analogy": "Gilmer showed that if A and B are independent random sets chosen from the family, H(A ∪ B) ≤ 2 H(A) - ∑ p_i, using the submodularity of entropy to force a large marginal probability.",
            "rules": [
              "Information entropy H(A) = -∑ p log p.",
              "Gilmer's inequality: H(A ∪ B) submodularity.",
              "Pushed by Sawhney, Chase, Tao to (3 - √5)/2 ≈ 0.38197."
            ],
            "mystery": "Can we bridge the final gap from 38.2% to 50.0%?",
            "funFact": "Péter Frankl proposed the conjecture in 1979."
          },
          "pioneers": {
            "tagline": "Entropy inequalities and Boolean cube analysis.",
            "analogy": "The conjecture translates into analyzing monotone Boolean functions with low boundary Fourier influence.",
            "rules": [
              "Fourier analysis on the Boolean cube.",
              "Kahn-Kalai-Linial influence theorem.",
              "Formalization of entropy in Lean 4."
            ],
            "mystery": "AI-guided theorem provers are searching for entropy-maximizing measure configurations.",
            "funFact": "Gilmer's discovery was celebrated as one of the most stunning triumphs of information theory in discrete mathematics."
          }
        },
        "history": [
          {
            "year": "1979",
            "author": "Péter Frankl",
            "note": "Poses the union-closed sets conjecture."
          },
          {
            "year": "2022 (Nov)",
            "author": "Justin Gilmer",
            "note": "Breaks 43-year barrier using information theory (proving constant bound)."
          },
          {
            "year": "2022 (Nov)",
            "author": "Alweiss, Chase, Lovett, Sawhney, Tao",
            "note": "Optimize Gilmer's constant to (3 - √5)/2 ≈ 38.2%."
          }
        ]
      },
      "ko": {
        "name": "Frankl's Union-Closed Conjecture",
        "subtitle": "Does Every Union-Closed Family Contain an Element in at Least 50% of Sets?",
        "field": "Extremal Combinatorics & Information Theory",
        "statusBadge": "AI ERA SENSATION (GILMER 2022)",
        "grades": {
          "explorers": {
            "tagline": "If every combination of ingredient boxes makes another box, is one ingredient in half of them?",
            "analogy": "Péter Frankl conjectured in 1979: In ANY non-empty finite collection of sets that is closed under taking unions (meaning if A and B are in the family, A ∪ B is also in it), there must exist AT LEAST ONE element that belongs to at least 50% of the sets! In 2022, Justin Gilmer (Google) made a historic breakthrough using entropy to prove a bound of ~38%!",
            "rules": [
              "Family ℱ of sets: A, B ∈ ℱ implies A ∪ B ∈ ℱ.",
              "Question: ∃ x such that x is in at least 50% of the sets in ℱ?",
              "Gilmer (2022): Used Shannon entropy to prove bound ≥ 0.01, immediately pushed to 0.38!",
              "Open: Close the gap from 38% to 50%!"
            ],
            "mystery": "Justin Gilmer had no prior background in extremal set theory; he solved the 43-year-old mystery by approaching it from machine learning and information theory!",
            "funFact": "The 50% bound is tight: for a family containing {1}, {2}, and {1, 2}, elements 1 and 2 appear in exactly 2 out of 3 sets (66.7%), and for a power set on 1 element it is exactly 50%!"
          },
          "investigators": {
            "tagline": "Shannon entropy on product spaces and submodularity.",
            "analogy": "Gilmer showed that if A and B are independent random sets chosen from the family, H(A ∪ B) ≤ 2 H(A) - ∑ p_i, using the submodularity of entropy to force a large marginal probability.",
            "rules": [
              "Information entropy H(A) = -∑ p log p.",
              "Gilmer's inequality: H(A ∪ B) submodularity.",
              "Pushed by Sawhney, Chase, Tao to (3 - √5)/2 ≈ 0.38197."
            ],
            "mystery": "Can we bridge the final gap from 38.2% to 50.0%?",
            "funFact": "Péter Frankl proposed the conjecture in 1979."
          },
          "pioneers": {
            "tagline": "Entropy inequalities and Boolean cube analysis.",
            "analogy": "The conjecture translates into analyzing monotone Boolean functions with low boundary Fourier influence.",
            "rules": [
              "Fourier analysis on the Boolean cube.",
              "Kahn-Kalai-Linial influence theorem.",
              "Formalization of entropy in Lean 4."
            ],
            "mystery": "AI-guided theorem provers are searching for entropy-maximizing measure configurations.",
            "funFact": "Gilmer's discovery was celebrated as one of the most stunning triumphs of information theory in discrete mathematics."
          }
        },
        "history": [
          {
            "year": "1979",
            "author": "Péter Frankl",
            "note": "Poses the union-closed sets conjecture."
          },
          {
            "year": "2022 (Nov)",
            "author": "Justin Gilmer",
            "note": "Breaks 43-year barrier using information theory (proving constant bound)."
          },
          {
            "year": "2022 (Nov)",
            "author": "Alweiss, Chase, Lovett, Sawhney, Tao",
            "note": "Optimize Gilmer's constant to (3 - √5)/2 ≈ 38.2%."
          }
        ]
      },
      "zh-Hans": {
        "name": "弗兰克尔并封闭集族猜想",
        "subtitle": "任意并封闭集合族中，是否必定存在一个至少现身于 50% 集合里的“万能元素”？",
        "field": "极值组合学 & 信息论",
        "statusBadge": "2022年信息熵划时代突破",
        "grades": {
          "explorers": {
            "tagline": "如果任意几箱积木合在一起都能配出仓库里已有的箱子，会不会有某个明星积木在至少一半的箱子里出现？",
            "analogy": "彼得·弗兰克尔于1979年猜想：在任意非空有限的“并封闭集合族”（即其中任意两个集合 A 和 B 的并集 A ∪ B 也必定在这个集族里）中，必定能找到至少一个核心元素，它出现在至少 50% 的集合当中！43年间无人能证明哪怕 1% 的常数下界。2022年谷歌研究员贾斯汀·吉尔默运用香农信息熵完成了奇迹突破，证明必有一个元素至少出现在 38% 的集合中！",
            "rules": [
              "并封闭集族：A, B 在集族中蕴含 A ∪ B 亦在集族中。",
              "核心猜想：是否存在一个元素 x，其出现频率至少达到 50%？",
              "吉尔默 (2022)：首次运用香农信息熵打破僵局，下界迅速刷新至 38%！",
              "终极战役：跨过最后 12% 登顶 50%！"
            ],
            "mystery": "吉尔默并非传统极值组合学家，他是一名机器学习科学家，完全凭借信息论直觉攻破了这道封印43年的难题！",
            "funFact": "50% 的界限是不可提升的最优极限：单元素幂集正好达到精确的 50%！"
          },
          "investigators": {
            "tagline": "积空间上的香农信息熵与次模性。",
            "analogy": "吉尔默将两两随机抽取集合的并集信息熵与香农熵的次模性结合，证明了边缘概率 p_i 绝不可能全都很小。",
            "rules": [
              "香农信息熵公式。",
              "吉尔默并集信息熵不等式。",
              "陶哲轩等人接力将常数提升至黄金分割界 (3 - √5)/2 ≈ 38.2%。"
            ],
            "mystery": "能否将信息熵下界从 38.2% 一举推升至最终的 50.0%？",
            "funFact": "彼得·弗兰克尔于1979年提出。"
          },
          "pioneers": {
            "tagline": "布尔立方体泛函分析与影响度理论。",
            "analogy": "猜想等价于在超立方体空间分析具有特定代数滤波特性的单调布尔函数。",
            "rules": [
              "布尔立方体傅里叶分析。",
              "KKL 变量影响度定理。",
              "Lean 4 Mathlib 中香农信息熵与凸函数形式化。"
            ],
            "mystery": "AI 自动化系统正在探索熵最大化测度分布，试图构造出通向 50% 的强化不等式。",
            "funFact": "吉尔默的突破被誉为21世纪信息论跨界解决离散纯数学谜题的最震撼奇迹。"
          }
        },
        "history": [
          {
            "year": "1979",
            "author": "彼得·弗兰克尔",
            "note": "在组合学会议提出并封闭集族猜想。"
          },
          {
            "year": "2022 (Nov)",
            "author": "贾斯汀·吉尔默",
            "note": "破天荒运用香农信息熵打破43年沉寂，证明存在常数下界！"
          },
          {
            "year": "2022 (Nov)",
            "author": "陶哲轩团队",
            "note": "几天内将常数火速优化至黄金分割界 38.2%！"
          }
        ]
      },
      "zh-Hant": {
        "name": "Frankl's Union-Closed Conjecture",
        "subtitle": "Does Every Union-Closed Family Contain an Element in at Least 50% of Sets?",
        "field": "Extremal Combinatorics & Information Theory",
        "statusBadge": "AI ERA SENSATION (GILMER 2022)",
        "grades": {
          "explorers": {
            "tagline": "If every combination of ingredient boxes makes another box, is one ingredient in half of them?",
            "analogy": "Péter Frankl conjectured in 1979: In ANY non-empty finite collection of sets that is closed under taking unions (meaning if A and B are in the family, A ∪ B is also in it), there must exist AT LEAST ONE element that belongs to at least 50% of the sets! In 2022, Justin Gilmer (Google) made a historic breakthrough using entropy to prove a bound of ~38%!",
            "rules": [
              "Family ℱ of sets: A, B ∈ ℱ implies A ∪ B ∈ ℱ.",
              "Question: ∃ x such that x is in at least 50% of the sets in ℱ?",
              "Gilmer (2022): Used Shannon entropy to prove bound ≥ 0.01, immediately pushed to 0.38!",
              "Open: Close the gap from 38% to 50%!"
            ],
            "mystery": "Justin Gilmer had no prior background in extremal set theory; he solved the 43-year-old mystery by approaching it from machine learning and information theory!",
            "funFact": "The 50% bound is tight: for a family containing {1}, {2}, and {1, 2}, elements 1 and 2 appear in exactly 2 out of 3 sets (66.7%), and for a power set on 1 element it is exactly 50%!"
          },
          "investigators": {
            "tagline": "Shannon entropy on product spaces and submodularity.",
            "analogy": "Gilmer showed that if A and B are independent random sets chosen from the family, H(A ∪ B) ≤ 2 H(A) - ∑ p_i, using the submodularity of entropy to force a large marginal probability.",
            "rules": [
              "Information entropy H(A) = -∑ p log p.",
              "Gilmer's inequality: H(A ∪ B) submodularity.",
              "Pushed by Sawhney, Chase, Tao to (3 - √5)/2 ≈ 0.38197."
            ],
            "mystery": "Can we bridge the final gap from 38.2% to 50.0%?",
            "funFact": "Péter Frankl proposed the conjecture in 1979."
          },
          "pioneers": {
            "tagline": "Entropy inequalities and Boolean cube analysis.",
            "analogy": "The conjecture translates into analyzing monotone Boolean functions with low boundary Fourier influence.",
            "rules": [
              "Fourier analysis on the Boolean cube.",
              "Kahn-Kalai-Linial influence theorem.",
              "Formalization of entropy in Lean 4."
            ],
            "mystery": "AI-guided theorem provers are searching for entropy-maximizing measure configurations.",
            "funFact": "Gilmer's discovery was celebrated as one of the most stunning triumphs of information theory in discrete mathematics."
          }
        },
        "history": [
          {
            "year": "1979",
            "author": "Péter Frankl",
            "note": "Poses the union-closed sets conjecture."
          },
          {
            "year": "2022 (Nov)",
            "author": "Justin Gilmer",
            "note": "Breaks 43-year barrier using information theory (proving constant bound)."
          },
          {
            "year": "2022 (Nov)",
            "author": "Alweiss, Chase, Lovett, Sawhney, Tao",
            "note": "Optimize Gilmer's constant to (3 - √5)/2 ≈ 38.2%."
          }
        ]
      }
    }
  },
  {
    "id": "graceful-tree",
    "icon": "🎄",
    "difficulty": "Gr 6+",
    "domain": "graph-theory",
    "category": "graph-theory",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Combinatorics.SimpleGraph.Basic\n-- Graceful Tree Conjecture (Ringel-Kotzig 1963)\n-- Every tree with n edges has a graceful labeling (vertices labeled 0..n such that induced edge differences are 1..n).",
    "locales": {
      "en": {
        "name": "The Graceful Tree Conjecture",
        "subtitle": "Can Every Tree Have Its Vertices Numbered So All Edge Differences Are Unique?",
        "field": "Graph Labeling & Complete Graph Decomposition",
        "statusBadge": "PROVED FOR ALL LARGE TREES (2020)",
        "grades": {
          "explorers": {
            "tagline": "Can you hang numbered ornaments on a Christmas tree so every branch has a unique gap?",
            "analogy": "A tree with n branches has n+1 leaves and junctions. A 'graceful labeling' assigns numbers 0, 1, 2, ..., n to the vertices such that when you compute the absolute difference |a - b| on every branch, you get EVERY number from 1 to n exactly once! Gerhard Ringel and Anton Kotzig conjectured in 1963 that EVERY tree is graceful! In 2020, Montgomery, Pokrovskiy, and Sudakov proved it for all large trees!",
            "rules": [
              "Tree T with n edges and n+1 vertices.",
              "Label vertices with distinct numbers from {0, 1, ..., n}.",
              "Edge label = |f(u) - f(v)|.",
              "All edge labels must be {1, 2, ..., n} (all unique!)."
            ],
            "mystery": "Ringel's true goal was decomposing complete graphs: if every tree is graceful, K_{2n+1} can be packed with 2n+1 identical copies of any tree!",
            "funFact": "Verified by computers for all trees with up to 35 vertices (billions of distinct trees!)."
          },
          "investigators": {
            "tagline": "Ringel's conjecture and rainbow matchings in complete bipartite graphs.",
            "analogy": "Montgomery, Pokrovskiy, and Sudakov (2020) proved Ringel's conjecture for all large n by embedding trees into expander graphs using randomized absorption.",
            "rules": [
              "Ringel's decomposition conjecture: K_{2n+1} packs 2n+1 copies of T.",
              "Montgomery-Pokrovskiy-Sudakov (2020) proof.",
              "Formalization of trees in Mathlib."
            ],
            "mystery": "Can we bridge the finite gap for small trees to prove the conjecture universally for all n?",
            "funFact": "Gerhard Ringel and Anton Kotzig formulated the problem in 1963."
          },
          "pioneers": {
            "tagline": "Combinatorial Nullstellensatz and polynomial methods in graph labeling.",
            "analogy": "Alon's combinatorial Nullstellensatz has been used to prove graceful labeling for specialized tree architectures.",
            "rules": [
              "Alon's Combinatorial Nullstellensatz.",
              "Caterpillar trees and lobster graphs.",
              "Lean 4 verification of graceful labeling."
            ],
            "mystery": "AI automated backtracking engines generate graceful labelings for 100-vertex trees in milliseconds.",
            "funFact": "The Graceful Tree Conjecture is celebrated as one of the most aesthetically enchanting problems in graph theory."
          }
        },
        "history": [
          {
            "year": "1963",
            "author": "Gerhard Ringel",
            "note": "Proposes graceful labeling and complete graph decomposition."
          },
          {
            "year": "1967",
            "author": "Alexander Rosa",
            "note": "Formally names 'graceful labelings' (α- and β-valuations)."
          },
          {
            "year": "2020",
            "author": "Montgomery, Pokrovskiy & Sudakov",
            "note": "Prove Ringel's conjecture for all sufficiently large trees."
          }
        ]
      },
      "de": {
        "name": "The Graceful Tree Conjecture",
        "subtitle": "Can Every Tree Have Its Vertices Numbered So All Edge Differences Are Unique?",
        "field": "Graph Labeling & Complete Graph Decomposition",
        "statusBadge": "PROVED FOR ALL LARGE TREES (2020)",
        "grades": {
          "explorers": {
            "tagline": "Can you hang numbered ornaments on a Christmas tree so every branch has a unique gap?",
            "analogy": "A tree with n branches has n+1 leaves and junctions. A 'graceful labeling' assigns numbers 0, 1, 2, ..., n to the vertices such that when you compute the absolute difference |a - b| on every branch, you get EVERY number from 1 to n exactly once! Gerhard Ringel and Anton Kotzig conjectured in 1963 that EVERY tree is graceful! In 2020, Montgomery, Pokrovskiy, and Sudakov proved it for all large trees!",
            "rules": [
              "Tree T with n edges and n+1 vertices.",
              "Label vertices with distinct numbers from {0, 1, ..., n}.",
              "Edge label = |f(u) - f(v)|.",
              "All edge labels must be {1, 2, ..., n} (all unique!)."
            ],
            "mystery": "Ringel's true goal was decomposing complete graphs: if every tree is graceful, K_{2n+1} can be packed with 2n+1 identical copies of any tree!",
            "funFact": "Verified by computers for all trees with up to 35 vertices (billions of distinct trees!)."
          },
          "investigators": {
            "tagline": "Ringel's conjecture and rainbow matchings in complete bipartite graphs.",
            "analogy": "Montgomery, Pokrovskiy, and Sudakov (2020) proved Ringel's conjecture for all large n by embedding trees into expander graphs using randomized absorption.",
            "rules": [
              "Ringel's decomposition conjecture: K_{2n+1} packs 2n+1 copies of T.",
              "Montgomery-Pokrovskiy-Sudakov (2020) proof.",
              "Formalization of trees in Mathlib."
            ],
            "mystery": "Can we bridge the finite gap for small trees to prove the conjecture universally for all n?",
            "funFact": "Gerhard Ringel and Anton Kotzig formulated the problem in 1963."
          },
          "pioneers": {
            "tagline": "Combinatorial Nullstellensatz and polynomial methods in graph labeling.",
            "analogy": "Alon's combinatorial Nullstellensatz has been used to prove graceful labeling for specialized tree architectures.",
            "rules": [
              "Alon's Combinatorial Nullstellensatz.",
              "Caterpillar trees and lobster graphs.",
              "Lean 4 verification of graceful labeling."
            ],
            "mystery": "AI automated backtracking engines generate graceful labelings for 100-vertex trees in milliseconds.",
            "funFact": "The Graceful Tree Conjecture is celebrated as one of the most aesthetically enchanting problems in graph theory."
          }
        },
        "history": [
          {
            "year": "1963",
            "author": "Gerhard Ringel",
            "note": "Proposes graceful labeling and complete graph decomposition."
          },
          {
            "year": "1967",
            "author": "Alexander Rosa",
            "note": "Formally names 'graceful labelings' (α- and β-valuations)."
          },
          {
            "year": "2020",
            "author": "Montgomery, Pokrovskiy & Sudakov",
            "note": "Prove Ringel's conjecture for all sufficiently large trees."
          }
        ]
      },
      "fr": {
        "name": "The Graceful Tree Conjecture",
        "subtitle": "Can Every Tree Have Its Vertices Numbered So All Edge Differences Are Unique?",
        "field": "Graph Labeling & Complete Graph Decomposition",
        "statusBadge": "PROVED FOR ALL LARGE TREES (2020)",
        "grades": {
          "explorers": {
            "tagline": "Can you hang numbered ornaments on a Christmas tree so every branch has a unique gap?",
            "analogy": "A tree with n branches has n+1 leaves and junctions. A 'graceful labeling' assigns numbers 0, 1, 2, ..., n to the vertices such that when you compute the absolute difference |a - b| on every branch, you get EVERY number from 1 to n exactly once! Gerhard Ringel and Anton Kotzig conjectured in 1963 that EVERY tree is graceful! In 2020, Montgomery, Pokrovskiy, and Sudakov proved it for all large trees!",
            "rules": [
              "Tree T with n edges and n+1 vertices.",
              "Label vertices with distinct numbers from {0, 1, ..., n}.",
              "Edge label = |f(u) - f(v)|.",
              "All edge labels must be {1, 2, ..., n} (all unique!)."
            ],
            "mystery": "Ringel's true goal was decomposing complete graphs: if every tree is graceful, K_{2n+1} can be packed with 2n+1 identical copies of any tree!",
            "funFact": "Verified by computers for all trees with up to 35 vertices (billions of distinct trees!)."
          },
          "investigators": {
            "tagline": "Ringel's conjecture and rainbow matchings in complete bipartite graphs.",
            "analogy": "Montgomery, Pokrovskiy, and Sudakov (2020) proved Ringel's conjecture for all large n by embedding trees into expander graphs using randomized absorption.",
            "rules": [
              "Ringel's decomposition conjecture: K_{2n+1} packs 2n+1 copies of T.",
              "Montgomery-Pokrovskiy-Sudakov (2020) proof.",
              "Formalization of trees in Mathlib."
            ],
            "mystery": "Can we bridge the finite gap for small trees to prove the conjecture universally for all n?",
            "funFact": "Gerhard Ringel and Anton Kotzig formulated the problem in 1963."
          },
          "pioneers": {
            "tagline": "Combinatorial Nullstellensatz and polynomial methods in graph labeling.",
            "analogy": "Alon's combinatorial Nullstellensatz has been used to prove graceful labeling for specialized tree architectures.",
            "rules": [
              "Alon's Combinatorial Nullstellensatz.",
              "Caterpillar trees and lobster graphs.",
              "Lean 4 verification of graceful labeling."
            ],
            "mystery": "AI automated backtracking engines generate graceful labelings for 100-vertex trees in milliseconds.",
            "funFact": "The Graceful Tree Conjecture is celebrated as one of the most aesthetically enchanting problems in graph theory."
          }
        },
        "history": [
          {
            "year": "1963",
            "author": "Gerhard Ringel",
            "note": "Proposes graceful labeling and complete graph decomposition."
          },
          {
            "year": "1967",
            "author": "Alexander Rosa",
            "note": "Formally names 'graceful labelings' (α- and β-valuations)."
          },
          {
            "year": "2020",
            "author": "Montgomery, Pokrovskiy & Sudakov",
            "note": "Prove Ringel's conjecture for all sufficiently large trees."
          }
        ]
      },
      "it": {
        "name": "The Graceful Tree Conjecture",
        "subtitle": "Can Every Tree Have Its Vertices Numbered So All Edge Differences Are Unique?",
        "field": "Graph Labeling & Complete Graph Decomposition",
        "statusBadge": "PROVED FOR ALL LARGE TREES (2020)",
        "grades": {
          "explorers": {
            "tagline": "Can you hang numbered ornaments on a Christmas tree so every branch has a unique gap?",
            "analogy": "A tree with n branches has n+1 leaves and junctions. A 'graceful labeling' assigns numbers 0, 1, 2, ..., n to the vertices such that when you compute the absolute difference |a - b| on every branch, you get EVERY number from 1 to n exactly once! Gerhard Ringel and Anton Kotzig conjectured in 1963 that EVERY tree is graceful! In 2020, Montgomery, Pokrovskiy, and Sudakov proved it for all large trees!",
            "rules": [
              "Tree T with n edges and n+1 vertices.",
              "Label vertices with distinct numbers from {0, 1, ..., n}.",
              "Edge label = |f(u) - f(v)|.",
              "All edge labels must be {1, 2, ..., n} (all unique!)."
            ],
            "mystery": "Ringel's true goal was decomposing complete graphs: if every tree is graceful, K_{2n+1} can be packed with 2n+1 identical copies of any tree!",
            "funFact": "Verified by computers for all trees with up to 35 vertices (billions of distinct trees!)."
          },
          "investigators": {
            "tagline": "Ringel's conjecture and rainbow matchings in complete bipartite graphs.",
            "analogy": "Montgomery, Pokrovskiy, and Sudakov (2020) proved Ringel's conjecture for all large n by embedding trees into expander graphs using randomized absorption.",
            "rules": [
              "Ringel's decomposition conjecture: K_{2n+1} packs 2n+1 copies of T.",
              "Montgomery-Pokrovskiy-Sudakov (2020) proof.",
              "Formalization of trees in Mathlib."
            ],
            "mystery": "Can we bridge the finite gap for small trees to prove the conjecture universally for all n?",
            "funFact": "Gerhard Ringel and Anton Kotzig formulated the problem in 1963."
          },
          "pioneers": {
            "tagline": "Combinatorial Nullstellensatz and polynomial methods in graph labeling.",
            "analogy": "Alon's combinatorial Nullstellensatz has been used to prove graceful labeling for specialized tree architectures.",
            "rules": [
              "Alon's Combinatorial Nullstellensatz.",
              "Caterpillar trees and lobster graphs.",
              "Lean 4 verification of graceful labeling."
            ],
            "mystery": "AI automated backtracking engines generate graceful labelings for 100-vertex trees in milliseconds.",
            "funFact": "The Graceful Tree Conjecture is celebrated as one of the most aesthetically enchanting problems in graph theory."
          }
        },
        "history": [
          {
            "year": "1963",
            "author": "Gerhard Ringel",
            "note": "Proposes graceful labeling and complete graph decomposition."
          },
          {
            "year": "1967",
            "author": "Alexander Rosa",
            "note": "Formally names 'graceful labelings' (α- and β-valuations)."
          },
          {
            "year": "2020",
            "author": "Montgomery, Pokrovskiy & Sudakov",
            "note": "Prove Ringel's conjecture for all sufficiently large trees."
          }
        ]
      },
      "ja": {
        "name": "The Graceful Tree Conjecture",
        "subtitle": "Can Every Tree Have Its Vertices Numbered So All Edge Differences Are Unique?",
        "field": "Graph Labeling & Complete Graph Decomposition",
        "statusBadge": "PROVED FOR ALL LARGE TREES (2020)",
        "grades": {
          "explorers": {
            "tagline": "Can you hang numbered ornaments on a Christmas tree so every branch has a unique gap?",
            "analogy": "A tree with n branches has n+1 leaves and junctions. A 'graceful labeling' assigns numbers 0, 1, 2, ..., n to the vertices such that when you compute the absolute difference |a - b| on every branch, you get EVERY number from 1 to n exactly once! Gerhard Ringel and Anton Kotzig conjectured in 1963 that EVERY tree is graceful! In 2020, Montgomery, Pokrovskiy, and Sudakov proved it for all large trees!",
            "rules": [
              "Tree T with n edges and n+1 vertices.",
              "Label vertices with distinct numbers from {0, 1, ..., n}.",
              "Edge label = |f(u) - f(v)|.",
              "All edge labels must be {1, 2, ..., n} (all unique!)."
            ],
            "mystery": "Ringel's true goal was decomposing complete graphs: if every tree is graceful, K_{2n+1} can be packed with 2n+1 identical copies of any tree!",
            "funFact": "Verified by computers for all trees with up to 35 vertices (billions of distinct trees!)."
          },
          "investigators": {
            "tagline": "Ringel's conjecture and rainbow matchings in complete bipartite graphs.",
            "analogy": "Montgomery, Pokrovskiy, and Sudakov (2020) proved Ringel's conjecture for all large n by embedding trees into expander graphs using randomized absorption.",
            "rules": [
              "Ringel's decomposition conjecture: K_{2n+1} packs 2n+1 copies of T.",
              "Montgomery-Pokrovskiy-Sudakov (2020) proof.",
              "Formalization of trees in Mathlib."
            ],
            "mystery": "Can we bridge the finite gap for small trees to prove the conjecture universally for all n?",
            "funFact": "Gerhard Ringel and Anton Kotzig formulated the problem in 1963."
          },
          "pioneers": {
            "tagline": "Combinatorial Nullstellensatz and polynomial methods in graph labeling.",
            "analogy": "Alon's combinatorial Nullstellensatz has been used to prove graceful labeling for specialized tree architectures.",
            "rules": [
              "Alon's Combinatorial Nullstellensatz.",
              "Caterpillar trees and lobster graphs.",
              "Lean 4 verification of graceful labeling."
            ],
            "mystery": "AI automated backtracking engines generate graceful labelings for 100-vertex trees in milliseconds.",
            "funFact": "The Graceful Tree Conjecture is celebrated as one of the most aesthetically enchanting problems in graph theory."
          }
        },
        "history": [
          {
            "year": "1963",
            "author": "Gerhard Ringel",
            "note": "Proposes graceful labeling and complete graph decomposition."
          },
          {
            "year": "1967",
            "author": "Alexander Rosa",
            "note": "Formally names 'graceful labelings' (α- and β-valuations)."
          },
          {
            "year": "2020",
            "author": "Montgomery, Pokrovskiy & Sudakov",
            "note": "Prove Ringel's conjecture for all sufficiently large trees."
          }
        ]
      },
      "ko": {
        "name": "The Graceful Tree Conjecture",
        "subtitle": "Can Every Tree Have Its Vertices Numbered So All Edge Differences Are Unique?",
        "field": "Graph Labeling & Complete Graph Decomposition",
        "statusBadge": "PROVED FOR ALL LARGE TREES (2020)",
        "grades": {
          "explorers": {
            "tagline": "Can you hang numbered ornaments on a Christmas tree so every branch has a unique gap?",
            "analogy": "A tree with n branches has n+1 leaves and junctions. A 'graceful labeling' assigns numbers 0, 1, 2, ..., n to the vertices such that when you compute the absolute difference |a - b| on every branch, you get EVERY number from 1 to n exactly once! Gerhard Ringel and Anton Kotzig conjectured in 1963 that EVERY tree is graceful! In 2020, Montgomery, Pokrovskiy, and Sudakov proved it for all large trees!",
            "rules": [
              "Tree T with n edges and n+1 vertices.",
              "Label vertices with distinct numbers from {0, 1, ..., n}.",
              "Edge label = |f(u) - f(v)|.",
              "All edge labels must be {1, 2, ..., n} (all unique!)."
            ],
            "mystery": "Ringel's true goal was decomposing complete graphs: if every tree is graceful, K_{2n+1} can be packed with 2n+1 identical copies of any tree!",
            "funFact": "Verified by computers for all trees with up to 35 vertices (billions of distinct trees!)."
          },
          "investigators": {
            "tagline": "Ringel's conjecture and rainbow matchings in complete bipartite graphs.",
            "analogy": "Montgomery, Pokrovskiy, and Sudakov (2020) proved Ringel's conjecture for all large n by embedding trees into expander graphs using randomized absorption.",
            "rules": [
              "Ringel's decomposition conjecture: K_{2n+1} packs 2n+1 copies of T.",
              "Montgomery-Pokrovskiy-Sudakov (2020) proof.",
              "Formalization of trees in Mathlib."
            ],
            "mystery": "Can we bridge the finite gap for small trees to prove the conjecture universally for all n?",
            "funFact": "Gerhard Ringel and Anton Kotzig formulated the problem in 1963."
          },
          "pioneers": {
            "tagline": "Combinatorial Nullstellensatz and polynomial methods in graph labeling.",
            "analogy": "Alon's combinatorial Nullstellensatz has been used to prove graceful labeling for specialized tree architectures.",
            "rules": [
              "Alon's Combinatorial Nullstellensatz.",
              "Caterpillar trees and lobster graphs.",
              "Lean 4 verification of graceful labeling."
            ],
            "mystery": "AI automated backtracking engines generate graceful labelings for 100-vertex trees in milliseconds.",
            "funFact": "The Graceful Tree Conjecture is celebrated as one of the most aesthetically enchanting problems in graph theory."
          }
        },
        "history": [
          {
            "year": "1963",
            "author": "Gerhard Ringel",
            "note": "Proposes graceful labeling and complete graph decomposition."
          },
          {
            "year": "1967",
            "author": "Alexander Rosa",
            "note": "Formally names 'graceful labelings' (α- and β-valuations)."
          },
          {
            "year": "2020",
            "author": "Montgomery, Pokrovskiy & Sudakov",
            "note": "Prove Ringel's conjecture for all sufficiently large trees."
          }
        ]
      },
      "zh-Hans": {
        "name": "优美树猜想（林格尔-科齐格猜想）",
        "subtitle": "任意一棵树的顶点能否标上 0 到 n，使得所有树枝两端的差值恰好取遍 1 到 n？",
        "field": "图标号理论 & 完全图分解",
        "statusBadge": "大树情形已获证（2020年）",
        "grades": {
          "explorers": {
            "tagline": "在圣诞树的每个树梢挂上 0 到 n 的号码牌，能不能让每根树枝两端的差值正好是 1 到 n？",
            "analogy": "一棵拥有 n 根树枝的树有 n+1 个节点。所谓“优美标号”，就是把数字 0 到 n 分配到各个节点上，使得每根树枝两端数字之差的绝对值，恰好不重不漏地占满 1 到 n 的所有数字！1963年林格尔与科齐格猜想：任何一棵树都是优美的！历经近60年，2020年蒙哥马利、波克罗夫斯基与苏达科夫证明了所有充分大的树必定全都是优美的！",
            "rules": [
              "一棵含有 n 条边、n+1 个顶点的树 T。",
              "顶点赋予互不相同的标号 {0, 1, ..., n}。",
              "边权计算为 |f(u) - f(v)|。",
              "所有边的权值必须恰好是 {1, 2, ..., n} 无重复！"
            ],
            "mystery": "林格尔提出该问题的终极目的，是为了将包含奇数个顶点的完全图 K_{2n+1} 完美分解为 2n+1 棵一模一样的生成树！",
            "funFact": "计算机已经穷尽验证了直到 35 个顶点的所有树，上百亿棵树全都具备优美标号！"
          },
          "investigators": {
            "tagline": "林格尔完全图分解猜想与彩虹匹配。",
            "analogy": "2020年三位学者运用膨胀图嵌入与随机吸收机制，彻底攻克了充分大树的林格尔完全图分解猜想。",
            "rules": [
              "林格尔完全图分解定理。",
              "2020年概率组合学划时代长篇论文。",
              "Lean 4 Mathlib 中图论树与匹配形式化。"
            ],
            "mystery": "能否彻底征服剩余极小树的有限范围，画上大一统句号？",
            "funFact": "格哈德·林格尔与安东·科齐格于1963年提出。"
          },
          "pioneers": {
            "tagline": "组合零点定理与代数多项式标号法。",
            "analogy": "诺加·阿隆的组合零点定理成功为毛毛虫树、星形树等诸多特殊族谱提供了优雅的代数解法。",
            "rules": [
              "组合零点定理代数约束。",
              "毛毛虫树与龙虾树的优美标号引理。",
              "Lean 4 中优美标号单射形式化。"
            ],
            "mystery": "AI 自动化启发式回溯算法已能在毫秒级内为任意百阶随机树求解出优美标号。",
            "funFact": "优美树猜想被全人类数学界公认为图论领域最具艺术美感与对称诗意的经典名题。"
          }
        },
        "history": [
          {
            "year": "1963",
            "author": "格哈德·林格尔",
            "note": "提出优美树标号与完全图分解猜想。"
          },
          {
            "year": "1967",
            "author": "亚历山大·罗萨",
            "note": "系统建立优美标号分类命名体系。"
          },
          {
            "year": "2020",
            "author": "蒙哥马利团队",
            "note": "运用膨胀图理论彻底证明大树情形！"
          }
        ]
      },
      "zh-Hant": {
        "name": "The Graceful Tree Conjecture",
        "subtitle": "Can Every Tree Have Its Vertices Numbered So All Edge Differences Are Unique?",
        "field": "Graph Labeling & Complete Graph Decomposition",
        "statusBadge": "PROVED FOR ALL LARGE TREES (2020)",
        "grades": {
          "explorers": {
            "tagline": "Can you hang numbered ornaments on a Christmas tree so every branch has a unique gap?",
            "analogy": "A tree with n branches has n+1 leaves and junctions. A 'graceful labeling' assigns numbers 0, 1, 2, ..., n to the vertices such that when you compute the absolute difference |a - b| on every branch, you get EVERY number from 1 to n exactly once! Gerhard Ringel and Anton Kotzig conjectured in 1963 that EVERY tree is graceful! In 2020, Montgomery, Pokrovskiy, and Sudakov proved it for all large trees!",
            "rules": [
              "Tree T with n edges and n+1 vertices.",
              "Label vertices with distinct numbers from {0, 1, ..., n}.",
              "Edge label = |f(u) - f(v)|.",
              "All edge labels must be {1, 2, ..., n} (all unique!)."
            ],
            "mystery": "Ringel's true goal was decomposing complete graphs: if every tree is graceful, K_{2n+1} can be packed with 2n+1 identical copies of any tree!",
            "funFact": "Verified by computers for all trees with up to 35 vertices (billions of distinct trees!)."
          },
          "investigators": {
            "tagline": "Ringel's conjecture and rainbow matchings in complete bipartite graphs.",
            "analogy": "Montgomery, Pokrovskiy, and Sudakov (2020) proved Ringel's conjecture for all large n by embedding trees into expander graphs using randomized absorption.",
            "rules": [
              "Ringel's decomposition conjecture: K_{2n+1} packs 2n+1 copies of T.",
              "Montgomery-Pokrovskiy-Sudakov (2020) proof.",
              "Formalization of trees in Mathlib."
            ],
            "mystery": "Can we bridge the finite gap for small trees to prove the conjecture universally for all n?",
            "funFact": "Gerhard Ringel and Anton Kotzig formulated the problem in 1963."
          },
          "pioneers": {
            "tagline": "Combinatorial Nullstellensatz and polynomial methods in graph labeling.",
            "analogy": "Alon's combinatorial Nullstellensatz has been used to prove graceful labeling for specialized tree architectures.",
            "rules": [
              "Alon's Combinatorial Nullstellensatz.",
              "Caterpillar trees and lobster graphs.",
              "Lean 4 verification of graceful labeling."
            ],
            "mystery": "AI automated backtracking engines generate graceful labelings for 100-vertex trees in milliseconds.",
            "funFact": "The Graceful Tree Conjecture is celebrated as one of the most aesthetically enchanting problems in graph theory."
          }
        },
        "history": [
          {
            "year": "1963",
            "author": "Gerhard Ringel",
            "note": "Proposes graceful labeling and complete graph decomposition."
          },
          {
            "year": "1967",
            "author": "Alexander Rosa",
            "note": "Formally names 'graceful labelings' (α- and β-valuations)."
          },
          {
            "year": "2020",
            "author": "Montgomery, Pokrovskiy & Sudakov",
            "note": "Prove Ringel's conjecture for all sufficiently large trees."
          }
        ]
      }
    }
  },
  {
    "id": "happy-ending",
    "icon": "💍",
    "difficulty": "All Ages",
    "domain": "graph-theory",
    "category": "graph-theory",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Analysis.Convex.Basic\n-- Erdős-Szekeres Theorem (The Happy Ending Problem, 1935)\n-- Any set of 2^{n-2} + 1 points in general position contains the vertices of a convex n-gon.\n-- Proved asymptotically by Andrew Suk in 2017.",
    "locales": {
      "en": {
        "name": "The Happy Ending Problem",
        "subtitle": "Convex n-Gons in Point Sets ($N(n) = 2^{n-2} + 1$)",
        "field": "Ramsey Theory & Combinatorial Geometry",
        "statusBadge": "SOLVED ASYMPTOTICALLY (SUK 2017)",
        "grades": {
          "explorers": {
            "tagline": "Can a messy scatter of stars always hide a perfect convex jewel inside?",
            "analogy": "In 1935, Esther Klein observed: ANY 5 points in the plane with no three on a line always contain 4 points that form a convex quadrilateral! George Szekeres and Paul Erdős proved a general theorem: for ANY n, sufficiently many points ALWAYS contain a convex n-gon! Erdős named it the 'Happy Ending Problem' because the research led to the marriage of Esther Klein and George Szekeres!",
            "rules": [
              "Any 5 points contain a convex quadrilateral (n = 4).",
              "Any 9 points contain a convex pentagon (n = 5).",
              "Any 17 points contain a convex hexagon (n = 6, Szekeres & Peters 2006).",
              "Erdős-Szekeres Conjecture: Exactly 2^{n-2} + 1 points are needed!"
            ],
            "mystery": "Esther Klein and George Szekeres remained happily married for 70 years, and both passed away within one hour of each other on August 28, 2005, at ages 95 and 94!",
            "funFact": "Andrew Suk proved in 2017 that the bound is indeed 2^{n + o(n)}, matching the Erdős-Szekeres exponent asymptotically!"
          },
          "investigators": {
            "tagline": "Geometric Ramsey theory and cups-caps theorem.",
            "analogy": "Erdős and Szekeres established that any sequence of points ordered by x-coordinate contains either an increasing cup of length k or a decreasing cap of length l, foundational to Ramsey theory.",
            "rules": [
              "Cup-Cap theorem: f(k, l) = C(k+l-4, k-2) + 1.",
              "Suk (2017): N(n) ≤ 2^{n + O(n^{2/3} log n)}.",
              "Convex hull property in Mathlib."
            ],
            "mystery": "Does the exact formula N(n) = 2^{n-2} + 1 hold without the o(n) error term for all n?",
            "funFact": "Esther Klein, George Szekeres, and Paul Erdős in Budapest, 1935."
          },
          "pioneers": {
            "tagline": "Topological Helly's theorem and O-minimality.",
            "analogy": "The proof uses hypergraph Ramsey numbers and dual line arrangements in projective duality.",
            "rules": [
              "Projective point-line duality.",
              "Hypergraph Ramsey bounds.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI geometric engines generate general-position point clouds testing extremal non-convex configurations.",
            "funFact": "The Happy Ending Problem is the most romantically beloved triumph in the annals of mathematical discovery."
          }
        },
        "history": [
          {
            "year": "1935",
            "author": "Esther Klein",
            "note": "Discovers 5-point convex quadrilateral theorem in Budapest."
          },
          {
            "year": "1935",
            "author": "Erdős & Szekeres",
            "note": "Publish foundational Ramsey theorem; name it 'Happy Ending Problem'."
          },
          {
            "year": "2006",
            "author": "George Szekeres & Lindsay Peters",
            "note": "Computer verification proves N(6) = 17."
          },
          {
            "year": "2017",
            "author": "Andrew Suk",
            "note": "Proves N(n) = 2^{n + o(n)} matching the Erdős-Szekeres exponent."
          }
        ]
      },
      "de": {
        "name": "The Happy Ending Problem",
        "subtitle": "Convex n-Gons in Point Sets ($N(n) = 2^{n-2} + 1$)",
        "field": "Ramsey Theory & Combinatorial Geometry",
        "statusBadge": "SOLVED ASYMPTOTICALLY (SUK 2017)",
        "grades": {
          "explorers": {
            "tagline": "Can a messy scatter of stars always hide a perfect convex jewel inside?",
            "analogy": "In 1935, Esther Klein observed: ANY 5 points in the plane with no three on a line always contain 4 points that form a convex quadrilateral! George Szekeres and Paul Erdős proved a general theorem: for ANY n, sufficiently many points ALWAYS contain a convex n-gon! Erdős named it the 'Happy Ending Problem' because the research led to the marriage of Esther Klein and George Szekeres!",
            "rules": [
              "Any 5 points contain a convex quadrilateral (n = 4).",
              "Any 9 points contain a convex pentagon (n = 5).",
              "Any 17 points contain a convex hexagon (n = 6, Szekeres & Peters 2006).",
              "Erdős-Szekeres Conjecture: Exactly 2^{n-2} + 1 points are needed!"
            ],
            "mystery": "Esther Klein and George Szekeres remained happily married for 70 years, and both passed away within one hour of each other on August 28, 2005, at ages 95 and 94!",
            "funFact": "Andrew Suk proved in 2017 that the bound is indeed 2^{n + o(n)}, matching the Erdős-Szekeres exponent asymptotically!"
          },
          "investigators": {
            "tagline": "Geometric Ramsey theory and cups-caps theorem.",
            "analogy": "Erdős and Szekeres established that any sequence of points ordered by x-coordinate contains either an increasing cup of length k or a decreasing cap of length l, foundational to Ramsey theory.",
            "rules": [
              "Cup-Cap theorem: f(k, l) = C(k+l-4, k-2) + 1.",
              "Suk (2017): N(n) ≤ 2^{n + O(n^{2/3} log n)}.",
              "Convex hull property in Mathlib."
            ],
            "mystery": "Does the exact formula N(n) = 2^{n-2} + 1 hold without the o(n) error term for all n?",
            "funFact": "Esther Klein, George Szekeres, and Paul Erdős in Budapest, 1935."
          },
          "pioneers": {
            "tagline": "Topological Helly's theorem and O-minimality.",
            "analogy": "The proof uses hypergraph Ramsey numbers and dual line arrangements in projective duality.",
            "rules": [
              "Projective point-line duality.",
              "Hypergraph Ramsey bounds.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI geometric engines generate general-position point clouds testing extremal non-convex configurations.",
            "funFact": "The Happy Ending Problem is the most romantically beloved triumph in the annals of mathematical discovery."
          }
        },
        "history": [
          {
            "year": "1935",
            "author": "Esther Klein",
            "note": "Discovers 5-point convex quadrilateral theorem in Budapest."
          },
          {
            "year": "1935",
            "author": "Erdős & Szekeres",
            "note": "Publish foundational Ramsey theorem; name it 'Happy Ending Problem'."
          },
          {
            "year": "2006",
            "author": "George Szekeres & Lindsay Peters",
            "note": "Computer verification proves N(6) = 17."
          },
          {
            "year": "2017",
            "author": "Andrew Suk",
            "note": "Proves N(n) = 2^{n + o(n)} matching the Erdős-Szekeres exponent."
          }
        ]
      },
      "fr": {
        "name": "The Happy Ending Problem",
        "subtitle": "Convex n-Gons in Point Sets ($N(n) = 2^{n-2} + 1$)",
        "field": "Ramsey Theory & Combinatorial Geometry",
        "statusBadge": "SOLVED ASYMPTOTICALLY (SUK 2017)",
        "grades": {
          "explorers": {
            "tagline": "Can a messy scatter of stars always hide a perfect convex jewel inside?",
            "analogy": "In 1935, Esther Klein observed: ANY 5 points in the plane with no three on a line always contain 4 points that form a convex quadrilateral! George Szekeres and Paul Erdős proved a general theorem: for ANY n, sufficiently many points ALWAYS contain a convex n-gon! Erdős named it the 'Happy Ending Problem' because the research led to the marriage of Esther Klein and George Szekeres!",
            "rules": [
              "Any 5 points contain a convex quadrilateral (n = 4).",
              "Any 9 points contain a convex pentagon (n = 5).",
              "Any 17 points contain a convex hexagon (n = 6, Szekeres & Peters 2006).",
              "Erdős-Szekeres Conjecture: Exactly 2^{n-2} + 1 points are needed!"
            ],
            "mystery": "Esther Klein and George Szekeres remained happily married for 70 years, and both passed away within one hour of each other on August 28, 2005, at ages 95 and 94!",
            "funFact": "Andrew Suk proved in 2017 that the bound is indeed 2^{n + o(n)}, matching the Erdős-Szekeres exponent asymptotically!"
          },
          "investigators": {
            "tagline": "Geometric Ramsey theory and cups-caps theorem.",
            "analogy": "Erdős and Szekeres established that any sequence of points ordered by x-coordinate contains either an increasing cup of length k or a decreasing cap of length l, foundational to Ramsey theory.",
            "rules": [
              "Cup-Cap theorem: f(k, l) = C(k+l-4, k-2) + 1.",
              "Suk (2017): N(n) ≤ 2^{n + O(n^{2/3} log n)}.",
              "Convex hull property in Mathlib."
            ],
            "mystery": "Does the exact formula N(n) = 2^{n-2} + 1 hold without the o(n) error term for all n?",
            "funFact": "Esther Klein, George Szekeres, and Paul Erdős in Budapest, 1935."
          },
          "pioneers": {
            "tagline": "Topological Helly's theorem and O-minimality.",
            "analogy": "The proof uses hypergraph Ramsey numbers and dual line arrangements in projective duality.",
            "rules": [
              "Projective point-line duality.",
              "Hypergraph Ramsey bounds.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI geometric engines generate general-position point clouds testing extremal non-convex configurations.",
            "funFact": "The Happy Ending Problem is the most romantically beloved triumph in the annals of mathematical discovery."
          }
        },
        "history": [
          {
            "year": "1935",
            "author": "Esther Klein",
            "note": "Discovers 5-point convex quadrilateral theorem in Budapest."
          },
          {
            "year": "1935",
            "author": "Erdős & Szekeres",
            "note": "Publish foundational Ramsey theorem; name it 'Happy Ending Problem'."
          },
          {
            "year": "2006",
            "author": "George Szekeres & Lindsay Peters",
            "note": "Computer verification proves N(6) = 17."
          },
          {
            "year": "2017",
            "author": "Andrew Suk",
            "note": "Proves N(n) = 2^{n + o(n)} matching the Erdős-Szekeres exponent."
          }
        ]
      },
      "it": {
        "name": "The Happy Ending Problem",
        "subtitle": "Convex n-Gons in Point Sets ($N(n) = 2^{n-2} + 1$)",
        "field": "Ramsey Theory & Combinatorial Geometry",
        "statusBadge": "SOLVED ASYMPTOTICALLY (SUK 2017)",
        "grades": {
          "explorers": {
            "tagline": "Can a messy scatter of stars always hide a perfect convex jewel inside?",
            "analogy": "In 1935, Esther Klein observed: ANY 5 points in the plane with no three on a line always contain 4 points that form a convex quadrilateral! George Szekeres and Paul Erdős proved a general theorem: for ANY n, sufficiently many points ALWAYS contain a convex n-gon! Erdős named it the 'Happy Ending Problem' because the research led to the marriage of Esther Klein and George Szekeres!",
            "rules": [
              "Any 5 points contain a convex quadrilateral (n = 4).",
              "Any 9 points contain a convex pentagon (n = 5).",
              "Any 17 points contain a convex hexagon (n = 6, Szekeres & Peters 2006).",
              "Erdős-Szekeres Conjecture: Exactly 2^{n-2} + 1 points are needed!"
            ],
            "mystery": "Esther Klein and George Szekeres remained happily married for 70 years, and both passed away within one hour of each other on August 28, 2005, at ages 95 and 94!",
            "funFact": "Andrew Suk proved in 2017 that the bound is indeed 2^{n + o(n)}, matching the Erdős-Szekeres exponent asymptotically!"
          },
          "investigators": {
            "tagline": "Geometric Ramsey theory and cups-caps theorem.",
            "analogy": "Erdős and Szekeres established that any sequence of points ordered by x-coordinate contains either an increasing cup of length k or a decreasing cap of length l, foundational to Ramsey theory.",
            "rules": [
              "Cup-Cap theorem: f(k, l) = C(k+l-4, k-2) + 1.",
              "Suk (2017): N(n) ≤ 2^{n + O(n^{2/3} log n)}.",
              "Convex hull property in Mathlib."
            ],
            "mystery": "Does the exact formula N(n) = 2^{n-2} + 1 hold without the o(n) error term for all n?",
            "funFact": "Esther Klein, George Szekeres, and Paul Erdős in Budapest, 1935."
          },
          "pioneers": {
            "tagline": "Topological Helly's theorem and O-minimality.",
            "analogy": "The proof uses hypergraph Ramsey numbers and dual line arrangements in projective duality.",
            "rules": [
              "Projective point-line duality.",
              "Hypergraph Ramsey bounds.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI geometric engines generate general-position point clouds testing extremal non-convex configurations.",
            "funFact": "The Happy Ending Problem is the most romantically beloved triumph in the annals of mathematical discovery."
          }
        },
        "history": [
          {
            "year": "1935",
            "author": "Esther Klein",
            "note": "Discovers 5-point convex quadrilateral theorem in Budapest."
          },
          {
            "year": "1935",
            "author": "Erdős & Szekeres",
            "note": "Publish foundational Ramsey theorem; name it 'Happy Ending Problem'."
          },
          {
            "year": "2006",
            "author": "George Szekeres & Lindsay Peters",
            "note": "Computer verification proves N(6) = 17."
          },
          {
            "year": "2017",
            "author": "Andrew Suk",
            "note": "Proves N(n) = 2^{n + o(n)} matching the Erdős-Szekeres exponent."
          }
        ]
      },
      "ja": {
        "name": "The Happy Ending Problem",
        "subtitle": "Convex n-Gons in Point Sets ($N(n) = 2^{n-2} + 1$)",
        "field": "Ramsey Theory & Combinatorial Geometry",
        "statusBadge": "SOLVED ASYMPTOTICALLY (SUK 2017)",
        "grades": {
          "explorers": {
            "tagline": "Can a messy scatter of stars always hide a perfect convex jewel inside?",
            "analogy": "In 1935, Esther Klein observed: ANY 5 points in the plane with no three on a line always contain 4 points that form a convex quadrilateral! George Szekeres and Paul Erdős proved a general theorem: for ANY n, sufficiently many points ALWAYS contain a convex n-gon! Erdős named it the 'Happy Ending Problem' because the research led to the marriage of Esther Klein and George Szekeres!",
            "rules": [
              "Any 5 points contain a convex quadrilateral (n = 4).",
              "Any 9 points contain a convex pentagon (n = 5).",
              "Any 17 points contain a convex hexagon (n = 6, Szekeres & Peters 2006).",
              "Erdős-Szekeres Conjecture: Exactly 2^{n-2} + 1 points are needed!"
            ],
            "mystery": "Esther Klein and George Szekeres remained happily married for 70 years, and both passed away within one hour of each other on August 28, 2005, at ages 95 and 94!",
            "funFact": "Andrew Suk proved in 2017 that the bound is indeed 2^{n + o(n)}, matching the Erdős-Szekeres exponent asymptotically!"
          },
          "investigators": {
            "tagline": "Geometric Ramsey theory and cups-caps theorem.",
            "analogy": "Erdős and Szekeres established that any sequence of points ordered by x-coordinate contains either an increasing cup of length k or a decreasing cap of length l, foundational to Ramsey theory.",
            "rules": [
              "Cup-Cap theorem: f(k, l) = C(k+l-4, k-2) + 1.",
              "Suk (2017): N(n) ≤ 2^{n + O(n^{2/3} log n)}.",
              "Convex hull property in Mathlib."
            ],
            "mystery": "Does the exact formula N(n) = 2^{n-2} + 1 hold without the o(n) error term for all n?",
            "funFact": "Esther Klein, George Szekeres, and Paul Erdős in Budapest, 1935."
          },
          "pioneers": {
            "tagline": "Topological Helly's theorem and O-minimality.",
            "analogy": "The proof uses hypergraph Ramsey numbers and dual line arrangements in projective duality.",
            "rules": [
              "Projective point-line duality.",
              "Hypergraph Ramsey bounds.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI geometric engines generate general-position point clouds testing extremal non-convex configurations.",
            "funFact": "The Happy Ending Problem is the most romantically beloved triumph in the annals of mathematical discovery."
          }
        },
        "history": [
          {
            "year": "1935",
            "author": "Esther Klein",
            "note": "Discovers 5-point convex quadrilateral theorem in Budapest."
          },
          {
            "year": "1935",
            "author": "Erdős & Szekeres",
            "note": "Publish foundational Ramsey theorem; name it 'Happy Ending Problem'."
          },
          {
            "year": "2006",
            "author": "George Szekeres & Lindsay Peters",
            "note": "Computer verification proves N(6) = 17."
          },
          {
            "year": "2017",
            "author": "Andrew Suk",
            "note": "Proves N(n) = 2^{n + o(n)} matching the Erdős-Szekeres exponent."
          }
        ]
      },
      "ko": {
        "name": "The Happy Ending Problem",
        "subtitle": "Convex n-Gons in Point Sets ($N(n) = 2^{n-2} + 1$)",
        "field": "Ramsey Theory & Combinatorial Geometry",
        "statusBadge": "SOLVED ASYMPTOTICALLY (SUK 2017)",
        "grades": {
          "explorers": {
            "tagline": "Can a messy scatter of stars always hide a perfect convex jewel inside?",
            "analogy": "In 1935, Esther Klein observed: ANY 5 points in the plane with no three on a line always contain 4 points that form a convex quadrilateral! George Szekeres and Paul Erdős proved a general theorem: for ANY n, sufficiently many points ALWAYS contain a convex n-gon! Erdős named it the 'Happy Ending Problem' because the research led to the marriage of Esther Klein and George Szekeres!",
            "rules": [
              "Any 5 points contain a convex quadrilateral (n = 4).",
              "Any 9 points contain a convex pentagon (n = 5).",
              "Any 17 points contain a convex hexagon (n = 6, Szekeres & Peters 2006).",
              "Erdős-Szekeres Conjecture: Exactly 2^{n-2} + 1 points are needed!"
            ],
            "mystery": "Esther Klein and George Szekeres remained happily married for 70 years, and both passed away within one hour of each other on August 28, 2005, at ages 95 and 94!",
            "funFact": "Andrew Suk proved in 2017 that the bound is indeed 2^{n + o(n)}, matching the Erdős-Szekeres exponent asymptotically!"
          },
          "investigators": {
            "tagline": "Geometric Ramsey theory and cups-caps theorem.",
            "analogy": "Erdős and Szekeres established that any sequence of points ordered by x-coordinate contains either an increasing cup of length k or a decreasing cap of length l, foundational to Ramsey theory.",
            "rules": [
              "Cup-Cap theorem: f(k, l) = C(k+l-4, k-2) + 1.",
              "Suk (2017): N(n) ≤ 2^{n + O(n^{2/3} log n)}.",
              "Convex hull property in Mathlib."
            ],
            "mystery": "Does the exact formula N(n) = 2^{n-2} + 1 hold without the o(n) error term for all n?",
            "funFact": "Esther Klein, George Szekeres, and Paul Erdős in Budapest, 1935."
          },
          "pioneers": {
            "tagline": "Topological Helly's theorem and O-minimality.",
            "analogy": "The proof uses hypergraph Ramsey numbers and dual line arrangements in projective duality.",
            "rules": [
              "Projective point-line duality.",
              "Hypergraph Ramsey bounds.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI geometric engines generate general-position point clouds testing extremal non-convex configurations.",
            "funFact": "The Happy Ending Problem is the most romantically beloved triumph in the annals of mathematical discovery."
          }
        },
        "history": [
          {
            "year": "1935",
            "author": "Esther Klein",
            "note": "Discovers 5-point convex quadrilateral theorem in Budapest."
          },
          {
            "year": "1935",
            "author": "Erdős & Szekeres",
            "note": "Publish foundational Ramsey theorem; name it 'Happy Ending Problem'."
          },
          {
            "year": "2006",
            "author": "George Szekeres & Lindsay Peters",
            "note": "Computer verification proves N(6) = 17."
          },
          {
            "year": "2017",
            "author": "Andrew Suk",
            "note": "Proves N(n) = 2^{n + o(n)} matching the Erdős-Szekeres exponent."
          }
        ]
      },
      "zh-Hans": {
        "name": "幸福结局问题（埃尔德什-塞凯赖什定理）",
        "subtitle": "平面点集中必定包含凸 n 边形（$N(n) = 2^{n-2} + 1$，苏克已获渐近证明）",
        "field": "拉姆齐理论 & 凸组合几何",
        "statusBadge": "苏克已获渐近完全解决",
        "grades": {
          "explorers": {
            "tagline": "往天空中随意撒下一把繁星，里面是不是永远能挑出几颗星星连成一个圆滚滚的凸多边形？",
            "analogy": "1935年匈牙利女数学家埃丝特·克莱因发现：平面上任意5个点（无三点共线），必能从中选出4个点组成一个凸四边形！乔治·塞凯赖什与保罗·埃尔德什将此推广为宏伟定理：对于任意整数 n，只要点足够多，就必定能找到一个凸 n 边形！埃尔德什将此浪漫地命名为“幸福结局问题”，因为这项研究促成了克莱因与塞凯赖什的跨世纪神仙婚姻！",
            "rules": [
              "任意 5 个点必包含一个凸四边形 (n=4)。",
              "任意 9 个点必包含一个凸五边形 (n=5)。",
              "任意 17 个点必包含一个凸六边形 (n=6，塞凯赖什等人在2006年验证)。",
              "猜想：构造凸 n 边形所需的最少点数恰好是 2^{n-2} + 1！"
            ],
            "mystery": "克莱因与塞凯赖什相濡以沫长达70年，并在2005年8月28日这一天，相隔仅仅一小时相继安详离世，成为数学界传颂的终极爱情绝唱！",
            "funFact": "安德鲁·苏克于2017年证明了所需点数上界确实为 2^{n + o(n)}，与猜想指数完美吻合！"
          },
          "investigators": {
            "tagline": "几何拉姆齐理论与“杯-帽”凸凹序列定理。",
            "analogy": "埃尔德什与塞凯赖什创立了著名的“杯-帽定理”，不仅解决了几何问题，更直接催生了现代拉姆齐极值理论。",
            "rules": [
              "杯-帽序列组合数公式。",
              "苏克 (2017) 证明上界达到 2^{n + o(n)}。",
              "Lean 4 Mathlib 凸包与平面位置形式化。"
            ],
            "mystery": "能否无误差地彻底证明公式 N(n) = 2^{n-2} + 1 对任意 n 精确无误？",
            "funFact": "埃丝特·克莱因、塞凯赖什与埃尔德什于1935年布达佩斯共同创立。"
          },
          "pioneers": {
            "tagline": "拓扑赫利定理与连续几何构型。",
            "analogy": "现代证明综合运用了超图拉姆齐数理论与射影对偶直线构型分析。",
            "rules": [
              "射影几何点线对偶原理。",
              "多维超图拉姆齐数估计。",
              "Lean 4 Mathlib 平面几何形式化。"
            ],
            "mystery": "AI 自动化系统正在搜索包含成百上千个点的无凸多边形极端构型。",
            "funFact": "幸福结局问题是世界数学发现史册中最富浪漫温情、最受世人爱戴的传世杰作。"
          }
        },
        "history": [
          {
            "year": "1935",
            "author": "埃丝特·克莱因",
            "note": "在布达佩斯发现5点必成凸四边形。"
          },
          {
            "year": "1935",
            "author": "埃尔德什 & 塞凯赖什",
            "note": "发表奠基论文并命名为“幸福结局问题”。"
          },
          {
            "year": "2006",
            "author": "塞凯赖什团队",
            "note": "计算机严格验证凸六边形需恰好 17 个点。"
          },
          {
            "year": "2017",
            "author": "安德鲁·苏克",
            "note": "运用拉姆齐理论攻克渐近指数！"
          }
        ]
      },
      "zh-Hant": {
        "name": "The Happy Ending Problem",
        "subtitle": "Convex n-Gons in Point Sets ($N(n) = 2^{n-2} + 1$)",
        "field": "Ramsey Theory & Combinatorial Geometry",
        "statusBadge": "SOLVED ASYMPTOTICALLY (SUK 2017)",
        "grades": {
          "explorers": {
            "tagline": "Can a messy scatter of stars always hide a perfect convex jewel inside?",
            "analogy": "In 1935, Esther Klein observed: ANY 5 points in the plane with no three on a line always contain 4 points that form a convex quadrilateral! George Szekeres and Paul Erdős proved a general theorem: for ANY n, sufficiently many points ALWAYS contain a convex n-gon! Erdős named it the 'Happy Ending Problem' because the research led to the marriage of Esther Klein and George Szekeres!",
            "rules": [
              "Any 5 points contain a convex quadrilateral (n = 4).",
              "Any 9 points contain a convex pentagon (n = 5).",
              "Any 17 points contain a convex hexagon (n = 6, Szekeres & Peters 2006).",
              "Erdős-Szekeres Conjecture: Exactly 2^{n-2} + 1 points are needed!"
            ],
            "mystery": "Esther Klein and George Szekeres remained happily married for 70 years, and both passed away within one hour of each other on August 28, 2005, at ages 95 and 94!",
            "funFact": "Andrew Suk proved in 2017 that the bound is indeed 2^{n + o(n)}, matching the Erdős-Szekeres exponent asymptotically!"
          },
          "investigators": {
            "tagline": "Geometric Ramsey theory and cups-caps theorem.",
            "analogy": "Erdős and Szekeres established that any sequence of points ordered by x-coordinate contains either an increasing cup of length k or a decreasing cap of length l, foundational to Ramsey theory.",
            "rules": [
              "Cup-Cap theorem: f(k, l) = C(k+l-4, k-2) + 1.",
              "Suk (2017): N(n) ≤ 2^{n + O(n^{2/3} log n)}.",
              "Convex hull property in Mathlib."
            ],
            "mystery": "Does the exact formula N(n) = 2^{n-2} + 1 hold without the o(n) error term for all n?",
            "funFact": "Esther Klein, George Szekeres, and Paul Erdős in Budapest, 1935."
          },
          "pioneers": {
            "tagline": "Topological Helly's theorem and O-minimality.",
            "analogy": "The proof uses hypergraph Ramsey numbers and dual line arrangements in projective duality.",
            "rules": [
              "Projective point-line duality.",
              "Hypergraph Ramsey bounds.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI geometric engines generate general-position point clouds testing extremal non-convex configurations.",
            "funFact": "The Happy Ending Problem is the most romantically beloved triumph in the annals of mathematical discovery."
          }
        },
        "history": [
          {
            "year": "1935",
            "author": "Esther Klein",
            "note": "Discovers 5-point convex quadrilateral theorem in Budapest."
          },
          {
            "year": "1935",
            "author": "Erdős & Szekeres",
            "note": "Publish foundational Ramsey theorem; name it 'Happy Ending Problem'."
          },
          {
            "year": "2006",
            "author": "George Szekeres & Lindsay Peters",
            "note": "Computer verification proves N(6) = 17."
          },
          {
            "year": "2017",
            "author": "Andrew Suk",
            "note": "Proves N(n) = 2^{n + o(n)} matching the Erdős-Szekeres exponent."
          }
        ]
      }
    }
  },
  {
    "id": "sylvester-gallai",
    "icon": "📐",
    "difficulty": "All Ages",
    "domain": "graph-theory",
    "category": "graph-theory",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Geometry.Euclidean.Basic\n-- Sylvester-Gallai Theorem (Sylvester 1893, Gallai 1944)\n-- In any finite non-collinear point set in the plane, there exists a line through exactly two points (ordinary line).",
    "locales": {
      "en": {
        "name": "Sylvester-Gallai Theorem",
        "subtitle": "Every Non-Collinear Point Set Contains an Ordinary Line",
        "field": "Discrete Geometry & Incidence Theory",
        "statusBadge": "PROVEN THEOREM",
        "grades": {
          "explorers": {
            "tagline": "If you drop coins on a table not all in a straight row, can you always find a stick touching ONLY two coins?",
            "analogy": "James Joseph Sylvester asked in 1893: If you have a finite number of points on a flat surface, not all on one single line, is there ALWAYS a line passing through EXACTLY two points? 50 years later, Tibor Gallai proved YES! L. M. Kelly gave a 3-sentence proof using distances to lines that remains one of the most stunningly beautiful arguments in all of mathematics!",
            "rules": [
              "Given n points, not all on one line.",
              "Line passing through ≥ 3 points is 'multi-point line'.",
              "Line passing through exactly 2 points is 'ordinary line'.",
              "Theorem: There is ALWAYS at least one ordinary line!"
            ],
            "mystery": "Green and Tao proved in 2013 that for all sufficiently large n, there are at least n/2 ordinary lines!",
            "funFact": "Fails in the complex projective plane: The 9 inflection points of a cubic curve have every line passing through 3 points (the Hesse configuration)!"
          },
          "investigators": {
            "tagline": "Order geometry, dual arrangements, and Dirac-Motzkin conjecture.",
            "analogy": "Kelly's proof: Consider all pairs (P, L) where point P is not on line L. Pick the pair with minimal non-zero distance. If L has ≥ 3 points, projection arguments immediately contradict minimality.",
            "rules": [
              "Kelly's distance minimality: dist(P_0, L_0) = min dist(P, L) > 0.",
              "Green-Tao (2013): n/2 ordinary lines for large n.",
              "Formal verification in Lean 4."
            ],
            "mystery": "What is the exact minimum number of ordinary lines for all finite n (Dirac-Motzkin bound)?",
            "funFact": "Posed by J. J. Sylvester in 1893; proved by Tibor Gallai in 1944."
          },
          "pioneers": {
            "tagline": "Incidence geometry and Szemerédi-Trotter theorem.",
            "analogy": "The Sylvester-Gallai theorem serves as the structural foundation for incidence bounds between points and algebraic varieties.",
            "rules": [
              "Szemerédi-Trotter incidence theorem.",
              "Hesse configuration in ℂℙ².",
              "Lean 4 Euclidean geometry."
            ],
            "mystery": "AI geometric solvers verify ordinary line lower bounds across random point ensembles in 𝒪(n² log n).",
            "funFact": "The Sylvester-Gallai Theorem is the supreme masterclass in mathematical elegance and minimal proof."
          }
        },
        "history": [
          {
            "year": "1893",
            "author": "J. J. Sylvester",
            "note": "Poses the problem in the Educational Times."
          },
          {
            "year": "1944",
            "author": "Tibor Gallai",
            "note": "Publishes first complete proof."
          },
          {
            "year": "1948",
            "author": "L. M. Kelly",
            "note": "Discovers the legendary 3-sentence 'Book Proof' using minimal distance."
          },
          {
            "year": "2013",
            "author": "Ben Green & Terence Tao",
            "note": "Prove that every large point set has at least n/2 ordinary lines."
          }
        ]
      },
      "de": {
        "name": "Sylvester-Gallai Theorem",
        "subtitle": "Every Non-Collinear Point Set Contains an Ordinary Line",
        "field": "Discrete Geometry & Incidence Theory",
        "statusBadge": "PROVEN THEOREM",
        "grades": {
          "explorers": {
            "tagline": "If you drop coins on a table not all in a straight row, can you always find a stick touching ONLY two coins?",
            "analogy": "James Joseph Sylvester asked in 1893: If you have a finite number of points on a flat surface, not all on one single line, is there ALWAYS a line passing through EXACTLY two points? 50 years later, Tibor Gallai proved YES! L. M. Kelly gave a 3-sentence proof using distances to lines that remains one of the most stunningly beautiful arguments in all of mathematics!",
            "rules": [
              "Given n points, not all on one line.",
              "Line passing through ≥ 3 points is 'multi-point line'.",
              "Line passing through exactly 2 points is 'ordinary line'.",
              "Theorem: There is ALWAYS at least one ordinary line!"
            ],
            "mystery": "Green and Tao proved in 2013 that for all sufficiently large n, there are at least n/2 ordinary lines!",
            "funFact": "Fails in the complex projective plane: The 9 inflection points of a cubic curve have every line passing through 3 points (the Hesse configuration)!"
          },
          "investigators": {
            "tagline": "Order geometry, dual arrangements, and Dirac-Motzkin conjecture.",
            "analogy": "Kelly's proof: Consider all pairs (P, L) where point P is not on line L. Pick the pair with minimal non-zero distance. If L has ≥ 3 points, projection arguments immediately contradict minimality.",
            "rules": [
              "Kelly's distance minimality: dist(P_0, L_0) = min dist(P, L) > 0.",
              "Green-Tao (2013): n/2 ordinary lines for large n.",
              "Formal verification in Lean 4."
            ],
            "mystery": "What is the exact minimum number of ordinary lines for all finite n (Dirac-Motzkin bound)?",
            "funFact": "Posed by J. J. Sylvester in 1893; proved by Tibor Gallai in 1944."
          },
          "pioneers": {
            "tagline": "Incidence geometry and Szemerédi-Trotter theorem.",
            "analogy": "The Sylvester-Gallai theorem serves as the structural foundation for incidence bounds between points and algebraic varieties.",
            "rules": [
              "Szemerédi-Trotter incidence theorem.",
              "Hesse configuration in ℂℙ².",
              "Lean 4 Euclidean geometry."
            ],
            "mystery": "AI geometric solvers verify ordinary line lower bounds across random point ensembles in 𝒪(n² log n).",
            "funFact": "The Sylvester-Gallai Theorem is the supreme masterclass in mathematical elegance and minimal proof."
          }
        },
        "history": [
          {
            "year": "1893",
            "author": "J. J. Sylvester",
            "note": "Poses the problem in the Educational Times."
          },
          {
            "year": "1944",
            "author": "Tibor Gallai",
            "note": "Publishes first complete proof."
          },
          {
            "year": "1948",
            "author": "L. M. Kelly",
            "note": "Discovers the legendary 3-sentence 'Book Proof' using minimal distance."
          },
          {
            "year": "2013",
            "author": "Ben Green & Terence Tao",
            "note": "Prove that every large point set has at least n/2 ordinary lines."
          }
        ]
      },
      "fr": {
        "name": "Sylvester-Gallai Theorem",
        "subtitle": "Every Non-Collinear Point Set Contains an Ordinary Line",
        "field": "Discrete Geometry & Incidence Theory",
        "statusBadge": "PROVEN THEOREM",
        "grades": {
          "explorers": {
            "tagline": "If you drop coins on a table not all in a straight row, can you always find a stick touching ONLY two coins?",
            "analogy": "James Joseph Sylvester asked in 1893: If you have a finite number of points on a flat surface, not all on one single line, is there ALWAYS a line passing through EXACTLY two points? 50 years later, Tibor Gallai proved YES! L. M. Kelly gave a 3-sentence proof using distances to lines that remains one of the most stunningly beautiful arguments in all of mathematics!",
            "rules": [
              "Given n points, not all on one line.",
              "Line passing through ≥ 3 points is 'multi-point line'.",
              "Line passing through exactly 2 points is 'ordinary line'.",
              "Theorem: There is ALWAYS at least one ordinary line!"
            ],
            "mystery": "Green and Tao proved in 2013 that for all sufficiently large n, there are at least n/2 ordinary lines!",
            "funFact": "Fails in the complex projective plane: The 9 inflection points of a cubic curve have every line passing through 3 points (the Hesse configuration)!"
          },
          "investigators": {
            "tagline": "Order geometry, dual arrangements, and Dirac-Motzkin conjecture.",
            "analogy": "Kelly's proof: Consider all pairs (P, L) where point P is not on line L. Pick the pair with minimal non-zero distance. If L has ≥ 3 points, projection arguments immediately contradict minimality.",
            "rules": [
              "Kelly's distance minimality: dist(P_0, L_0) = min dist(P, L) > 0.",
              "Green-Tao (2013): n/2 ordinary lines for large n.",
              "Formal verification in Lean 4."
            ],
            "mystery": "What is the exact minimum number of ordinary lines for all finite n (Dirac-Motzkin bound)?",
            "funFact": "Posed by J. J. Sylvester in 1893; proved by Tibor Gallai in 1944."
          },
          "pioneers": {
            "tagline": "Incidence geometry and Szemerédi-Trotter theorem.",
            "analogy": "The Sylvester-Gallai theorem serves as the structural foundation for incidence bounds between points and algebraic varieties.",
            "rules": [
              "Szemerédi-Trotter incidence theorem.",
              "Hesse configuration in ℂℙ².",
              "Lean 4 Euclidean geometry."
            ],
            "mystery": "AI geometric solvers verify ordinary line lower bounds across random point ensembles in 𝒪(n² log n).",
            "funFact": "The Sylvester-Gallai Theorem is the supreme masterclass in mathematical elegance and minimal proof."
          }
        },
        "history": [
          {
            "year": "1893",
            "author": "J. J. Sylvester",
            "note": "Poses the problem in the Educational Times."
          },
          {
            "year": "1944",
            "author": "Tibor Gallai",
            "note": "Publishes first complete proof."
          },
          {
            "year": "1948",
            "author": "L. M. Kelly",
            "note": "Discovers the legendary 3-sentence 'Book Proof' using minimal distance."
          },
          {
            "year": "2013",
            "author": "Ben Green & Terence Tao",
            "note": "Prove that every large point set has at least n/2 ordinary lines."
          }
        ]
      },
      "it": {
        "name": "Sylvester-Gallai Theorem",
        "subtitle": "Every Non-Collinear Point Set Contains an Ordinary Line",
        "field": "Discrete Geometry & Incidence Theory",
        "statusBadge": "PROVEN THEOREM",
        "grades": {
          "explorers": {
            "tagline": "If you drop coins on a table not all in a straight row, can you always find a stick touching ONLY two coins?",
            "analogy": "James Joseph Sylvester asked in 1893: If you have a finite number of points on a flat surface, not all on one single line, is there ALWAYS a line passing through EXACTLY two points? 50 years later, Tibor Gallai proved YES! L. M. Kelly gave a 3-sentence proof using distances to lines that remains one of the most stunningly beautiful arguments in all of mathematics!",
            "rules": [
              "Given n points, not all on one line.",
              "Line passing through ≥ 3 points is 'multi-point line'.",
              "Line passing through exactly 2 points is 'ordinary line'.",
              "Theorem: There is ALWAYS at least one ordinary line!"
            ],
            "mystery": "Green and Tao proved in 2013 that for all sufficiently large n, there are at least n/2 ordinary lines!",
            "funFact": "Fails in the complex projective plane: The 9 inflection points of a cubic curve have every line passing through 3 points (the Hesse configuration)!"
          },
          "investigators": {
            "tagline": "Order geometry, dual arrangements, and Dirac-Motzkin conjecture.",
            "analogy": "Kelly's proof: Consider all pairs (P, L) where point P is not on line L. Pick the pair with minimal non-zero distance. If L has ≥ 3 points, projection arguments immediately contradict minimality.",
            "rules": [
              "Kelly's distance minimality: dist(P_0, L_0) = min dist(P, L) > 0.",
              "Green-Tao (2013): n/2 ordinary lines for large n.",
              "Formal verification in Lean 4."
            ],
            "mystery": "What is the exact minimum number of ordinary lines for all finite n (Dirac-Motzkin bound)?",
            "funFact": "Posed by J. J. Sylvester in 1893; proved by Tibor Gallai in 1944."
          },
          "pioneers": {
            "tagline": "Incidence geometry and Szemerédi-Trotter theorem.",
            "analogy": "The Sylvester-Gallai theorem serves as the structural foundation for incidence bounds between points and algebraic varieties.",
            "rules": [
              "Szemerédi-Trotter incidence theorem.",
              "Hesse configuration in ℂℙ².",
              "Lean 4 Euclidean geometry."
            ],
            "mystery": "AI geometric solvers verify ordinary line lower bounds across random point ensembles in 𝒪(n² log n).",
            "funFact": "The Sylvester-Gallai Theorem is the supreme masterclass in mathematical elegance and minimal proof."
          }
        },
        "history": [
          {
            "year": "1893",
            "author": "J. J. Sylvester",
            "note": "Poses the problem in the Educational Times."
          },
          {
            "year": "1944",
            "author": "Tibor Gallai",
            "note": "Publishes first complete proof."
          },
          {
            "year": "1948",
            "author": "L. M. Kelly",
            "note": "Discovers the legendary 3-sentence 'Book Proof' using minimal distance."
          },
          {
            "year": "2013",
            "author": "Ben Green & Terence Tao",
            "note": "Prove that every large point set has at least n/2 ordinary lines."
          }
        ]
      },
      "ja": {
        "name": "Sylvester-Gallai Theorem",
        "subtitle": "Every Non-Collinear Point Set Contains an Ordinary Line",
        "field": "Discrete Geometry & Incidence Theory",
        "statusBadge": "PROVEN THEOREM",
        "grades": {
          "explorers": {
            "tagline": "If you drop coins on a table not all in a straight row, can you always find a stick touching ONLY two coins?",
            "analogy": "James Joseph Sylvester asked in 1893: If you have a finite number of points on a flat surface, not all on one single line, is there ALWAYS a line passing through EXACTLY two points? 50 years later, Tibor Gallai proved YES! L. M. Kelly gave a 3-sentence proof using distances to lines that remains one of the most stunningly beautiful arguments in all of mathematics!",
            "rules": [
              "Given n points, not all on one line.",
              "Line passing through ≥ 3 points is 'multi-point line'.",
              "Line passing through exactly 2 points is 'ordinary line'.",
              "Theorem: There is ALWAYS at least one ordinary line!"
            ],
            "mystery": "Green and Tao proved in 2013 that for all sufficiently large n, there are at least n/2 ordinary lines!",
            "funFact": "Fails in the complex projective plane: The 9 inflection points of a cubic curve have every line passing through 3 points (the Hesse configuration)!"
          },
          "investigators": {
            "tagline": "Order geometry, dual arrangements, and Dirac-Motzkin conjecture.",
            "analogy": "Kelly's proof: Consider all pairs (P, L) where point P is not on line L. Pick the pair with minimal non-zero distance. If L has ≥ 3 points, projection arguments immediately contradict minimality.",
            "rules": [
              "Kelly's distance minimality: dist(P_0, L_0) = min dist(P, L) > 0.",
              "Green-Tao (2013): n/2 ordinary lines for large n.",
              "Formal verification in Lean 4."
            ],
            "mystery": "What is the exact minimum number of ordinary lines for all finite n (Dirac-Motzkin bound)?",
            "funFact": "Posed by J. J. Sylvester in 1893; proved by Tibor Gallai in 1944."
          },
          "pioneers": {
            "tagline": "Incidence geometry and Szemerédi-Trotter theorem.",
            "analogy": "The Sylvester-Gallai theorem serves as the structural foundation for incidence bounds between points and algebraic varieties.",
            "rules": [
              "Szemerédi-Trotter incidence theorem.",
              "Hesse configuration in ℂℙ².",
              "Lean 4 Euclidean geometry."
            ],
            "mystery": "AI geometric solvers verify ordinary line lower bounds across random point ensembles in 𝒪(n² log n).",
            "funFact": "The Sylvester-Gallai Theorem is the supreme masterclass in mathematical elegance and minimal proof."
          }
        },
        "history": [
          {
            "year": "1893",
            "author": "J. J. Sylvester",
            "note": "Poses the problem in the Educational Times."
          },
          {
            "year": "1944",
            "author": "Tibor Gallai",
            "note": "Publishes first complete proof."
          },
          {
            "year": "1948",
            "author": "L. M. Kelly",
            "note": "Discovers the legendary 3-sentence 'Book Proof' using minimal distance."
          },
          {
            "year": "2013",
            "author": "Ben Green & Terence Tao",
            "note": "Prove that every large point set has at least n/2 ordinary lines."
          }
        ]
      },
      "ko": {
        "name": "Sylvester-Gallai Theorem",
        "subtitle": "Every Non-Collinear Point Set Contains an Ordinary Line",
        "field": "Discrete Geometry & Incidence Theory",
        "statusBadge": "PROVEN THEOREM",
        "grades": {
          "explorers": {
            "tagline": "If you drop coins on a table not all in a straight row, can you always find a stick touching ONLY two coins?",
            "analogy": "James Joseph Sylvester asked in 1893: If you have a finite number of points on a flat surface, not all on one single line, is there ALWAYS a line passing through EXACTLY two points? 50 years later, Tibor Gallai proved YES! L. M. Kelly gave a 3-sentence proof using distances to lines that remains one of the most stunningly beautiful arguments in all of mathematics!",
            "rules": [
              "Given n points, not all on one line.",
              "Line passing through ≥ 3 points is 'multi-point line'.",
              "Line passing through exactly 2 points is 'ordinary line'.",
              "Theorem: There is ALWAYS at least one ordinary line!"
            ],
            "mystery": "Green and Tao proved in 2013 that for all sufficiently large n, there are at least n/2 ordinary lines!",
            "funFact": "Fails in the complex projective plane: The 9 inflection points of a cubic curve have every line passing through 3 points (the Hesse configuration)!"
          },
          "investigators": {
            "tagline": "Order geometry, dual arrangements, and Dirac-Motzkin conjecture.",
            "analogy": "Kelly's proof: Consider all pairs (P, L) where point P is not on line L. Pick the pair with minimal non-zero distance. If L has ≥ 3 points, projection arguments immediately contradict minimality.",
            "rules": [
              "Kelly's distance minimality: dist(P_0, L_0) = min dist(P, L) > 0.",
              "Green-Tao (2013): n/2 ordinary lines for large n.",
              "Formal verification in Lean 4."
            ],
            "mystery": "What is the exact minimum number of ordinary lines for all finite n (Dirac-Motzkin bound)?",
            "funFact": "Posed by J. J. Sylvester in 1893; proved by Tibor Gallai in 1944."
          },
          "pioneers": {
            "tagline": "Incidence geometry and Szemerédi-Trotter theorem.",
            "analogy": "The Sylvester-Gallai theorem serves as the structural foundation for incidence bounds between points and algebraic varieties.",
            "rules": [
              "Szemerédi-Trotter incidence theorem.",
              "Hesse configuration in ℂℙ².",
              "Lean 4 Euclidean geometry."
            ],
            "mystery": "AI geometric solvers verify ordinary line lower bounds across random point ensembles in 𝒪(n² log n).",
            "funFact": "The Sylvester-Gallai Theorem is the supreme masterclass in mathematical elegance and minimal proof."
          }
        },
        "history": [
          {
            "year": "1893",
            "author": "J. J. Sylvester",
            "note": "Poses the problem in the Educational Times."
          },
          {
            "year": "1944",
            "author": "Tibor Gallai",
            "note": "Publishes first complete proof."
          },
          {
            "year": "1948",
            "author": "L. M. Kelly",
            "note": "Discovers the legendary 3-sentence 'Book Proof' using minimal distance."
          },
          {
            "year": "2013",
            "author": "Ben Green & Terence Tao",
            "note": "Prove that every large point set has at least n/2 ordinary lines."
          }
        ]
      },
      "zh-Hans": {
        "name": "西尔维斯特-加莱定理",
        "subtitle": "任何非共线的有限点集必存在一条只穿过两点的普通线（加莱证明）",
        "field": "离散几何 & 点线关联结构",
        "statusBadge": "已证明定理",
        "grades": {
          "explorers": {
            "tagline": "桌上散落着一把硬币，只要它们不在同一直线上，能不能总找到一根直线恰好只穿过两枚硬币？",
            "analogy": "1893年英国数学家西尔维斯特提出：平面上有有限个点，如果它们不全在同一直线上，是否必定存在一条直线恰好只经过其中的两个点？半个世纪后的1944年，匈牙利数学家加莱给出了肯定证明！随后凯利给出了一个仅有三句话、利用点到直线最小距离的惊世绝美证明，被保罗·埃尔德什赞为‘天书证明’！",
            "rules": [
              "给定平面上 n 个点，不全在同一直线上。",
              "经过 ≥ 3 个点的线称为多点线。",
              "恰好只经过 2 个点的线称为普通线。",
              "定理：无论点怎么分布，普通线至少存在一条！"
            ],
            "mystery": "本·格林与陶哲轩在2013年证明：当点数 n 充分大时，普通线的数量至少达到 n/2 条！",
            "funFact": "如果在复数射影平面中，定理不成立：著名的黑塞（Hesse）构型的9个点，每条线都恰好穿过3个点！"
          },
          "investigators": {
            "tagline": "序几何、对偶超平面排列与狄拉克-莫茨金猜想。",
            "analogy": "凯利证明法：考察所有不在线上的点 P 到连接其他两点的直线 L 的垂直距离。在所有正距离中取最小值，利用垂足两侧点数矛盾，三步完成反证！",
            "rules": [
              "凯利最小距离反证法。",
              "格林-陶哲轩普通线下界定理 (n/2)。",
              "Lean 4 Mathlib 欧氏几何形式化。"
            ],
            "mystery": "对于任意有限点数 n，普通线的绝对精确极小值是多少？",
            "funFact": "西尔维斯特于1893年提出，加莱于1944年证明。"
          },
          "pioneers": {
            "tagline": "关联几何与塞迈雷迪-特罗特关联度估计。",
            "analogy": "西尔维斯特-加莱定理是现代点线关联度几何界限以及代数簇极值相交理论的基石。",
            "rules": [
              "塞迈雷迪-特罗特定理。",
              "复射影空间黑塞反例几何。",
              "Lean 4 欧式空间点线形式化。"
            ],
            "mystery": "AI 自动化几何系统可对数万个随机散点秒级穷举所有关联线并定位普通线。",
            "funFact": "西尔维斯特-加莱定理是全人类数学证明中极简之美与严谨之力的终极典范。"
          }
        },
        "history": [
          {
            "year": "1893",
            "author": "西尔维斯特",
            "note": "在教育时报刊载征解该几何题。"
          },
          {
            "year": "1944",
            "author": "蒂博尔·加莱",
            "note": "发表人类首个完全严格证明。"
          },
          {
            "year": "1948",
            "author": "L. M. 凯利",
            "note": "发表著名的三句话最小距离‘天书证明’。"
          },
          {
            "year": "2013",
            "author": "格林 & 陶哲轩",
            "note": "彻底证明充分大点集至少有 n/2 条普通线！"
          }
        ]
      },
      "zh-Hant": {
        "name": "Sylvester-Gallai Theorem",
        "subtitle": "Every Non-Collinear Point Set Contains an Ordinary Line",
        "field": "Discrete Geometry & Incidence Theory",
        "statusBadge": "PROVEN THEOREM",
        "grades": {
          "explorers": {
            "tagline": "If you drop coins on a table not all in a straight row, can you always find a stick touching ONLY two coins?",
            "analogy": "James Joseph Sylvester asked in 1893: If you have a finite number of points on a flat surface, not all on one single line, is there ALWAYS a line passing through EXACTLY two points? 50 years later, Tibor Gallai proved YES! L. M. Kelly gave a 3-sentence proof using distances to lines that remains one of the most stunningly beautiful arguments in all of mathematics!",
            "rules": [
              "Given n points, not all on one line.",
              "Line passing through ≥ 3 points is 'multi-point line'.",
              "Line passing through exactly 2 points is 'ordinary line'.",
              "Theorem: There is ALWAYS at least one ordinary line!"
            ],
            "mystery": "Green and Tao proved in 2013 that for all sufficiently large n, there are at least n/2 ordinary lines!",
            "funFact": "Fails in the complex projective plane: The 9 inflection points of a cubic curve have every line passing through 3 points (the Hesse configuration)!"
          },
          "investigators": {
            "tagline": "Order geometry, dual arrangements, and Dirac-Motzkin conjecture.",
            "analogy": "Kelly's proof: Consider all pairs (P, L) where point P is not on line L. Pick the pair with minimal non-zero distance. If L has ≥ 3 points, projection arguments immediately contradict minimality.",
            "rules": [
              "Kelly's distance minimality: dist(P_0, L_0) = min dist(P, L) > 0.",
              "Green-Tao (2013): n/2 ordinary lines for large n.",
              "Formal verification in Lean 4."
            ],
            "mystery": "What is the exact minimum number of ordinary lines for all finite n (Dirac-Motzkin bound)?",
            "funFact": "Posed by J. J. Sylvester in 1893; proved by Tibor Gallai in 1944."
          },
          "pioneers": {
            "tagline": "Incidence geometry and Szemerédi-Trotter theorem.",
            "analogy": "The Sylvester-Gallai theorem serves as the structural foundation for incidence bounds between points and algebraic varieties.",
            "rules": [
              "Szemerédi-Trotter incidence theorem.",
              "Hesse configuration in ℂℙ².",
              "Lean 4 Euclidean geometry."
            ],
            "mystery": "AI geometric solvers verify ordinary line lower bounds across random point ensembles in 𝒪(n² log n).",
            "funFact": "The Sylvester-Gallai Theorem is the supreme masterclass in mathematical elegance and minimal proof."
          }
        },
        "history": [
          {
            "year": "1893",
            "author": "J. J. Sylvester",
            "note": "Poses the problem in the Educational Times."
          },
          {
            "year": "1944",
            "author": "Tibor Gallai",
            "note": "Publishes first complete proof."
          },
          {
            "year": "1948",
            "author": "L. M. Kelly",
            "note": "Discovers the legendary 3-sentence 'Book Proof' using minimal distance."
          },
          {
            "year": "2013",
            "author": "Ben Green & Terence Tao",
            "note": "Prove that every large point set has at least n/2 ordinary lines."
          }
        ]
      }
    }
  },
  {
    "id": "hadwiger-graph",
    "icon": "🕸️",
    "difficulty": "Gr 9+",
    "domain": "graph-theory",
    "category": "graph-theory",
    "isMillennium": false,
    "isAIFrontier": true,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Combinatorics.SimpleGraph.Minor\n-- Hadwiger's Conjecture (Hugo Hadwiger, 1943)\n-- Every loopless graph with no K_t minor is (t-1)-colorable.\n-- Deep generalization of the Four Color Theorem (case t=5). Proved for t ≤ 6.",
    "locales": {
      "en": {
        "name": "Hadwiger's Graph Conjecture",
        "subtitle": "Graphs without $K_t$ Minor are $(t-1)$-Colorable (Proved for $t \\le 6$)",
        "field": "Structural Graph Theory & Graph Minors",
        "statusBadge": "FRONTIER CONJECTURE",
        "grades": {
          "explorers": {
            "tagline": "Can shrinking map roads always tell us the maximum number of colors needed?",
            "analogy": "In 1943, Swiss mathematician Hugo Hadwiger proposed one of the deepest conjectures in graph theory: If a graph cannot be contracted (by deleting vertices/edges and contracting edges) to form a complete graph $K_t$ on $t$ vertices, then its vertices can ALWAYS be colored with at most $t-1$ colors! For $t=5$, this is EQUIVALENT to the Four Color Theorem! For $t=6$, proved in 1993 by Robertson, Seymour, and Thomas using the 4-color theorem.",
            "rules": [
              "Graph G has no K_t minor.",
              "t=1, 2: Trivial.",
              "t=3: Trees are 2-colorable.",
              "t=4: Proved by Hadwiger (1943).",
              "t=5: Equivalent to Four Color Theorem!",
              "t=6: Proved by Robertson, Seymour, Thomas (1993). Open for t ≥ 7!"
            ],
            "mystery": "Béla Bollobás declared Hadwiger's conjecture 'one of the deepest unsolved problems in graph theory'!",
            "funFact": "In 2020, Norin, Postle, and Song shattered a 30-year record by proving every graph with no K_t minor is O(t (log t)^β) colorable!"
          },
          "investigators": {
            "tagline": "Graph minor theorem of Robertson and Seymour, tree-decompositions.",
            "analogy": "Robertson, Seymour, and Thomas reduced t=6 to the 4-color theorem by showing apex graphs and Wagner's 3-decomposition.",
            "rules": [
              "Graph minor contraction G / e.",
              "Hadwiger t=5 ⇔ Wagner's Theorem + 4-Color.",
              "Robertson-Seymour-Thomas (1993): t=6 proof."
            ],
            "mystery": "Can we prove Hadwiger's conjecture for t = 7 or prove an O(t) linear coloring bound?",
            "funFact": "Hugo Hadwiger formulated the conjecture in 1943."
          },
          "pioneers": {
            "tagline": "Topological minors and chromatic polynomials.",
            "analogy": "Recent advances use dense subgraph concentration, fractional colorings, and expander minor packing.",
            "rules": [
              "Postle (2020): O(t (log log t)^6) coloring bound.",
              "Expander minor embedding.",
              "Lean 4 Mathlib graph minor library."
            ],
            "mystery": "AI structural analyzers search for potential Hadwiger-7 counterexamples with 20-30 vertices.",
            "funFact": "Hadwiger's Conjecture stands as the grand mountain peak that connects graph minors to coloring geometry."
          }
        },
        "history": [
          {
            "year": "1943",
            "author": "Hugo Hadwiger",
            "note": "Poses the conjecture; proves t ≤ 4."
          },
          {
            "year": "1993",
            "author": "Robertson, Seymour & Thomas",
            "note": "Prove conjecture for t = 6 using 4-Color Theorem."
          },
          {
            "year": "2020",
            "author": "Norin, Postle & Song",
            "note": "Break logarithmic coloring barrier for arbitrary t."
          }
        ]
      },
      "de": {
        "name": "Hadwiger's Graph Conjecture",
        "subtitle": "Graphs without $K_t$ Minor are $(t-1)$-Colorable (Proved for $t \\le 6$)",
        "field": "Structural Graph Theory & Graph Minors",
        "statusBadge": "FRONTIER CONJECTURE",
        "grades": {
          "explorers": {
            "tagline": "Can shrinking map roads always tell us the maximum number of colors needed?",
            "analogy": "In 1943, Swiss mathematician Hugo Hadwiger proposed one of the deepest conjectures in graph theory: If a graph cannot be contracted (by deleting vertices/edges and contracting edges) to form a complete graph $K_t$ on $t$ vertices, then its vertices can ALWAYS be colored with at most $t-1$ colors! For $t=5$, this is EQUIVALENT to the Four Color Theorem! For $t=6$, proved in 1993 by Robertson, Seymour, and Thomas using the 4-color theorem.",
            "rules": [
              "Graph G has no K_t minor.",
              "t=1, 2: Trivial.",
              "t=3: Trees are 2-colorable.",
              "t=4: Proved by Hadwiger (1943).",
              "t=5: Equivalent to Four Color Theorem!",
              "t=6: Proved by Robertson, Seymour, Thomas (1993). Open for t ≥ 7!"
            ],
            "mystery": "Béla Bollobás declared Hadwiger's conjecture 'one of the deepest unsolved problems in graph theory'!",
            "funFact": "In 2020, Norin, Postle, and Song shattered a 30-year record by proving every graph with no K_t minor is O(t (log t)^β) colorable!"
          },
          "investigators": {
            "tagline": "Graph minor theorem of Robertson and Seymour, tree-decompositions.",
            "analogy": "Robertson, Seymour, and Thomas reduced t=6 to the 4-color theorem by showing apex graphs and Wagner's 3-decomposition.",
            "rules": [
              "Graph minor contraction G / e.",
              "Hadwiger t=5 ⇔ Wagner's Theorem + 4-Color.",
              "Robertson-Seymour-Thomas (1993): t=6 proof."
            ],
            "mystery": "Can we prove Hadwiger's conjecture for t = 7 or prove an O(t) linear coloring bound?",
            "funFact": "Hugo Hadwiger formulated the conjecture in 1943."
          },
          "pioneers": {
            "tagline": "Topological minors and chromatic polynomials.",
            "analogy": "Recent advances use dense subgraph concentration, fractional colorings, and expander minor packing.",
            "rules": [
              "Postle (2020): O(t (log log t)^6) coloring bound.",
              "Expander minor embedding.",
              "Lean 4 Mathlib graph minor library."
            ],
            "mystery": "AI structural analyzers search for potential Hadwiger-7 counterexamples with 20-30 vertices.",
            "funFact": "Hadwiger's Conjecture stands as the grand mountain peak that connects graph minors to coloring geometry."
          }
        },
        "history": [
          {
            "year": "1943",
            "author": "Hugo Hadwiger",
            "note": "Poses the conjecture; proves t ≤ 4."
          },
          {
            "year": "1993",
            "author": "Robertson, Seymour & Thomas",
            "note": "Prove conjecture for t = 6 using 4-Color Theorem."
          },
          {
            "year": "2020",
            "author": "Norin, Postle & Song",
            "note": "Break logarithmic coloring barrier for arbitrary t."
          }
        ]
      },
      "fr": {
        "name": "Hadwiger's Graph Conjecture",
        "subtitle": "Graphs without $K_t$ Minor are $(t-1)$-Colorable (Proved for $t \\le 6$)",
        "field": "Structural Graph Theory & Graph Minors",
        "statusBadge": "FRONTIER CONJECTURE",
        "grades": {
          "explorers": {
            "tagline": "Can shrinking map roads always tell us the maximum number of colors needed?",
            "analogy": "In 1943, Swiss mathematician Hugo Hadwiger proposed one of the deepest conjectures in graph theory: If a graph cannot be contracted (by deleting vertices/edges and contracting edges) to form a complete graph $K_t$ on $t$ vertices, then its vertices can ALWAYS be colored with at most $t-1$ colors! For $t=5$, this is EQUIVALENT to the Four Color Theorem! For $t=6$, proved in 1993 by Robertson, Seymour, and Thomas using the 4-color theorem.",
            "rules": [
              "Graph G has no K_t minor.",
              "t=1, 2: Trivial.",
              "t=3: Trees are 2-colorable.",
              "t=4: Proved by Hadwiger (1943).",
              "t=5: Equivalent to Four Color Theorem!",
              "t=6: Proved by Robertson, Seymour, Thomas (1993). Open for t ≥ 7!"
            ],
            "mystery": "Béla Bollobás declared Hadwiger's conjecture 'one of the deepest unsolved problems in graph theory'!",
            "funFact": "In 2020, Norin, Postle, and Song shattered a 30-year record by proving every graph with no K_t minor is O(t (log t)^β) colorable!"
          },
          "investigators": {
            "tagline": "Graph minor theorem of Robertson and Seymour, tree-decompositions.",
            "analogy": "Robertson, Seymour, and Thomas reduced t=6 to the 4-color theorem by showing apex graphs and Wagner's 3-decomposition.",
            "rules": [
              "Graph minor contraction G / e.",
              "Hadwiger t=5 ⇔ Wagner's Theorem + 4-Color.",
              "Robertson-Seymour-Thomas (1993): t=6 proof."
            ],
            "mystery": "Can we prove Hadwiger's conjecture for t = 7 or prove an O(t) linear coloring bound?",
            "funFact": "Hugo Hadwiger formulated the conjecture in 1943."
          },
          "pioneers": {
            "tagline": "Topological minors and chromatic polynomials.",
            "analogy": "Recent advances use dense subgraph concentration, fractional colorings, and expander minor packing.",
            "rules": [
              "Postle (2020): O(t (log log t)^6) coloring bound.",
              "Expander minor embedding.",
              "Lean 4 Mathlib graph minor library."
            ],
            "mystery": "AI structural analyzers search for potential Hadwiger-7 counterexamples with 20-30 vertices.",
            "funFact": "Hadwiger's Conjecture stands as the grand mountain peak that connects graph minors to coloring geometry."
          }
        },
        "history": [
          {
            "year": "1943",
            "author": "Hugo Hadwiger",
            "note": "Poses the conjecture; proves t ≤ 4."
          },
          {
            "year": "1993",
            "author": "Robertson, Seymour & Thomas",
            "note": "Prove conjecture for t = 6 using 4-Color Theorem."
          },
          {
            "year": "2020",
            "author": "Norin, Postle & Song",
            "note": "Break logarithmic coloring barrier for arbitrary t."
          }
        ]
      },
      "it": {
        "name": "Hadwiger's Graph Conjecture",
        "subtitle": "Graphs without $K_t$ Minor are $(t-1)$-Colorable (Proved for $t \\le 6$)",
        "field": "Structural Graph Theory & Graph Minors",
        "statusBadge": "FRONTIER CONJECTURE",
        "grades": {
          "explorers": {
            "tagline": "Can shrinking map roads always tell us the maximum number of colors needed?",
            "analogy": "In 1943, Swiss mathematician Hugo Hadwiger proposed one of the deepest conjectures in graph theory: If a graph cannot be contracted (by deleting vertices/edges and contracting edges) to form a complete graph $K_t$ on $t$ vertices, then its vertices can ALWAYS be colored with at most $t-1$ colors! For $t=5$, this is EQUIVALENT to the Four Color Theorem! For $t=6$, proved in 1993 by Robertson, Seymour, and Thomas using the 4-color theorem.",
            "rules": [
              "Graph G has no K_t minor.",
              "t=1, 2: Trivial.",
              "t=3: Trees are 2-colorable.",
              "t=4: Proved by Hadwiger (1943).",
              "t=5: Equivalent to Four Color Theorem!",
              "t=6: Proved by Robertson, Seymour, Thomas (1993). Open for t ≥ 7!"
            ],
            "mystery": "Béla Bollobás declared Hadwiger's conjecture 'one of the deepest unsolved problems in graph theory'!",
            "funFact": "In 2020, Norin, Postle, and Song shattered a 30-year record by proving every graph with no K_t minor is O(t (log t)^β) colorable!"
          },
          "investigators": {
            "tagline": "Graph minor theorem of Robertson and Seymour, tree-decompositions.",
            "analogy": "Robertson, Seymour, and Thomas reduced t=6 to the 4-color theorem by showing apex graphs and Wagner's 3-decomposition.",
            "rules": [
              "Graph minor contraction G / e.",
              "Hadwiger t=5 ⇔ Wagner's Theorem + 4-Color.",
              "Robertson-Seymour-Thomas (1993): t=6 proof."
            ],
            "mystery": "Can we prove Hadwiger's conjecture for t = 7 or prove an O(t) linear coloring bound?",
            "funFact": "Hugo Hadwiger formulated the conjecture in 1943."
          },
          "pioneers": {
            "tagline": "Topological minors and chromatic polynomials.",
            "analogy": "Recent advances use dense subgraph concentration, fractional colorings, and expander minor packing.",
            "rules": [
              "Postle (2020): O(t (log log t)^6) coloring bound.",
              "Expander minor embedding.",
              "Lean 4 Mathlib graph minor library."
            ],
            "mystery": "AI structural analyzers search for potential Hadwiger-7 counterexamples with 20-30 vertices.",
            "funFact": "Hadwiger's Conjecture stands as the grand mountain peak that connects graph minors to coloring geometry."
          }
        },
        "history": [
          {
            "year": "1943",
            "author": "Hugo Hadwiger",
            "note": "Poses the conjecture; proves t ≤ 4."
          },
          {
            "year": "1993",
            "author": "Robertson, Seymour & Thomas",
            "note": "Prove conjecture for t = 6 using 4-Color Theorem."
          },
          {
            "year": "2020",
            "author": "Norin, Postle & Song",
            "note": "Break logarithmic coloring barrier for arbitrary t."
          }
        ]
      },
      "ja": {
        "name": "Hadwiger's Graph Conjecture",
        "subtitle": "Graphs without $K_t$ Minor are $(t-1)$-Colorable (Proved for $t \\le 6$)",
        "field": "Structural Graph Theory & Graph Minors",
        "statusBadge": "FRONTIER CONJECTURE",
        "grades": {
          "explorers": {
            "tagline": "Can shrinking map roads always tell us the maximum number of colors needed?",
            "analogy": "In 1943, Swiss mathematician Hugo Hadwiger proposed one of the deepest conjectures in graph theory: If a graph cannot be contracted (by deleting vertices/edges and contracting edges) to form a complete graph $K_t$ on $t$ vertices, then its vertices can ALWAYS be colored with at most $t-1$ colors! For $t=5$, this is EQUIVALENT to the Four Color Theorem! For $t=6$, proved in 1993 by Robertson, Seymour, and Thomas using the 4-color theorem.",
            "rules": [
              "Graph G has no K_t minor.",
              "t=1, 2: Trivial.",
              "t=3: Trees are 2-colorable.",
              "t=4: Proved by Hadwiger (1943).",
              "t=5: Equivalent to Four Color Theorem!",
              "t=6: Proved by Robertson, Seymour, Thomas (1993). Open for t ≥ 7!"
            ],
            "mystery": "Béla Bollobás declared Hadwiger's conjecture 'one of the deepest unsolved problems in graph theory'!",
            "funFact": "In 2020, Norin, Postle, and Song shattered a 30-year record by proving every graph with no K_t minor is O(t (log t)^β) colorable!"
          },
          "investigators": {
            "tagline": "Graph minor theorem of Robertson and Seymour, tree-decompositions.",
            "analogy": "Robertson, Seymour, and Thomas reduced t=6 to the 4-color theorem by showing apex graphs and Wagner's 3-decomposition.",
            "rules": [
              "Graph minor contraction G / e.",
              "Hadwiger t=5 ⇔ Wagner's Theorem + 4-Color.",
              "Robertson-Seymour-Thomas (1993): t=6 proof."
            ],
            "mystery": "Can we prove Hadwiger's conjecture for t = 7 or prove an O(t) linear coloring bound?",
            "funFact": "Hugo Hadwiger formulated the conjecture in 1943."
          },
          "pioneers": {
            "tagline": "Topological minors and chromatic polynomials.",
            "analogy": "Recent advances use dense subgraph concentration, fractional colorings, and expander minor packing.",
            "rules": [
              "Postle (2020): O(t (log log t)^6) coloring bound.",
              "Expander minor embedding.",
              "Lean 4 Mathlib graph minor library."
            ],
            "mystery": "AI structural analyzers search for potential Hadwiger-7 counterexamples with 20-30 vertices.",
            "funFact": "Hadwiger's Conjecture stands as the grand mountain peak that connects graph minors to coloring geometry."
          }
        },
        "history": [
          {
            "year": "1943",
            "author": "Hugo Hadwiger",
            "note": "Poses the conjecture; proves t ≤ 4."
          },
          {
            "year": "1993",
            "author": "Robertson, Seymour & Thomas",
            "note": "Prove conjecture for t = 6 using 4-Color Theorem."
          },
          {
            "year": "2020",
            "author": "Norin, Postle & Song",
            "note": "Break logarithmic coloring barrier for arbitrary t."
          }
        ]
      },
      "ko": {
        "name": "Hadwiger's Graph Conjecture",
        "subtitle": "Graphs without $K_t$ Minor are $(t-1)$-Colorable (Proved for $t \\le 6$)",
        "field": "Structural Graph Theory & Graph Minors",
        "statusBadge": "FRONTIER CONJECTURE",
        "grades": {
          "explorers": {
            "tagline": "Can shrinking map roads always tell us the maximum number of colors needed?",
            "analogy": "In 1943, Swiss mathematician Hugo Hadwiger proposed one of the deepest conjectures in graph theory: If a graph cannot be contracted (by deleting vertices/edges and contracting edges) to form a complete graph $K_t$ on $t$ vertices, then its vertices can ALWAYS be colored with at most $t-1$ colors! For $t=5$, this is EQUIVALENT to the Four Color Theorem! For $t=6$, proved in 1993 by Robertson, Seymour, and Thomas using the 4-color theorem.",
            "rules": [
              "Graph G has no K_t minor.",
              "t=1, 2: Trivial.",
              "t=3: Trees are 2-colorable.",
              "t=4: Proved by Hadwiger (1943).",
              "t=5: Equivalent to Four Color Theorem!",
              "t=6: Proved by Robertson, Seymour, Thomas (1993). Open for t ≥ 7!"
            ],
            "mystery": "Béla Bollobás declared Hadwiger's conjecture 'one of the deepest unsolved problems in graph theory'!",
            "funFact": "In 2020, Norin, Postle, and Song shattered a 30-year record by proving every graph with no K_t minor is O(t (log t)^β) colorable!"
          },
          "investigators": {
            "tagline": "Graph minor theorem of Robertson and Seymour, tree-decompositions.",
            "analogy": "Robertson, Seymour, and Thomas reduced t=6 to the 4-color theorem by showing apex graphs and Wagner's 3-decomposition.",
            "rules": [
              "Graph minor contraction G / e.",
              "Hadwiger t=5 ⇔ Wagner's Theorem + 4-Color.",
              "Robertson-Seymour-Thomas (1993): t=6 proof."
            ],
            "mystery": "Can we prove Hadwiger's conjecture for t = 7 or prove an O(t) linear coloring bound?",
            "funFact": "Hugo Hadwiger formulated the conjecture in 1943."
          },
          "pioneers": {
            "tagline": "Topological minors and chromatic polynomials.",
            "analogy": "Recent advances use dense subgraph concentration, fractional colorings, and expander minor packing.",
            "rules": [
              "Postle (2020): O(t (log log t)^6) coloring bound.",
              "Expander minor embedding.",
              "Lean 4 Mathlib graph minor library."
            ],
            "mystery": "AI structural analyzers search for potential Hadwiger-7 counterexamples with 20-30 vertices.",
            "funFact": "Hadwiger's Conjecture stands as the grand mountain peak that connects graph minors to coloring geometry."
          }
        },
        "history": [
          {
            "year": "1943",
            "author": "Hugo Hadwiger",
            "note": "Poses the conjecture; proves t ≤ 4."
          },
          {
            "year": "1993",
            "author": "Robertson, Seymour & Thomas",
            "note": "Prove conjecture for t = 6 using 4-Color Theorem."
          },
          {
            "year": "2020",
            "author": "Norin, Postle & Song",
            "note": "Break logarithmic coloring barrier for arbitrary t."
          }
        ]
      },
      "zh-Hans": {
        "name": "哈德维格图染色猜想",
        "subtitle": "无 $K_t$ 图子式的图必可 $(t-1)$ 染色（四色定理的高维终极推广，已证 $t \\le 6$）",
        "field": "结构图论 & 罗伯逊-西摩图子式理论",
        "statusBadge": "图论前沿殿堂级猜想",
        "grades": {
          "explorers": {
            "tagline": "如果我们把地图上的某些道路合并塌陷，能不能彻底揭示染色所需颜色的终极上限？",
            "analogy": "1943年瑞士数学家雨果·哈德维格提出了图论中最深邃的猜想之一：如果一个图无法通过删除点、删除边和收缩边得到包含 t 个顶点的完全图 $K_t$（即不含 $K_t$ 子式），那么该图必定可以用至多 $t-1$ 种颜色进行完美顶点染色！当 $t=5$ 时，该猜想完全等价于著名的四色定理！当 $t=6$ 时，罗伯逊、西摩与托马斯于1993年借助四色定理完成了证明。然而对于 $t \\ge 7$，至今仍是全人类未解之谜！",
            "rules": [
              "图 G 不包含 $K_t$ 子式。",
              "$t=1, 2$：显然成立。",
              "$t=3$：无环树图必可 2 染色。",
              "$t=4$：哈德维格于1943年亲手证明（外平面结构）。",
              "$t=5$：完全等价于四色定理！",
              "$t=6$：1993年由西摩团队攻克！$t \\ge 7$ 依然高悬！"
            ],
            "mystery": "组合学巨匠鲍洛鲍什盛赞哈德维格猜想是‘整个图论中最深刻的未解难题之一’！",
            "funFact": "2020年诺林、波斯托与宋春成打破了沉寂30年的纪录，将染色数上界革命性地压缩至 $O(t (\\log t)^\\beta)$！"
          },
          "investigators": {
            "tagline": "罗伯逊-西摩图子式定理体系与树分解。",
            "analogy": "西摩等三位学者通过证明任何不含 $K_6$ 的极小子图都可以通过拓扑连通拼合还原为平面图顶点附加结构，成功利用四色定理破局。",
            "rules": [
              "图子式与边收缩代数算子。",
              "瓦格纳定理与四色等价性证明。",
              "1993年西摩团队攻克 $t=6$ 论文。"
            ],
            "mystery": "能否攻破 $t=7$ 的世界壁垒，或证明染色数关于子式阶数的纯线性 $O(t)$ 渐近界？",
            "funFact": "雨果·哈德维格于1943年正式提出。"
          },
          "pioneers": {
            "tagline": "拓扑子式嵌入、极值图染色多项式与高连通性。",
            "analogy": "近年来前沿进展大量采用稠密子图聚集度分析、分数染色分解以及图膨胀子子式压缩技术。",
            "rules": [
              "波斯托 (2020) 最新对数优化上界。",
              "高阶图膨胀子嵌入引理。",
              "Lean 4 Mathlib 图子式基础架构。"
            ],
            "mystery": "AI 自动化拓扑分析引擎正在排查具有高度对称自同构群的可能 Hadwiger-7 潜在反例图。",
            "funFact": "哈德维格猜想是连接图子式深奥结构与染色几何学的最高科学丰碑。"
          }
        },
        "history": [
          {
            "year": "1943",
            "author": "雨果·哈德维格",
            "note": "提出图子式染色猜想并证明 t ≤ 4。"
          },
          {
            "year": "1993",
            "author": "罗伯逊、西摩 & 托马斯",
            "note": "借助四色定理攻破 t = 6 大关！"
          },
          {
            "year": "2020",
            "author": "诺林、波斯托 & 宋春成",
            "note": "大幅打破对数染色壁垒！"
          }
        ]
      },
      "zh-Hant": {
        "name": "Hadwiger's Graph Conjecture",
        "subtitle": "Graphs without $K_t$ Minor are $(t-1)$-Colorable (Proved for $t \\le 6$)",
        "field": "Structural Graph Theory & Graph Minors",
        "statusBadge": "FRONTIER CONJECTURE",
        "grades": {
          "explorers": {
            "tagline": "Can shrinking map roads always tell us the maximum number of colors needed?",
            "analogy": "In 1943, Swiss mathematician Hugo Hadwiger proposed one of the deepest conjectures in graph theory: If a graph cannot be contracted (by deleting vertices/edges and contracting edges) to form a complete graph $K_t$ on $t$ vertices, then its vertices can ALWAYS be colored with at most $t-1$ colors! For $t=5$, this is EQUIVALENT to the Four Color Theorem! For $t=6$, proved in 1993 by Robertson, Seymour, and Thomas using the 4-color theorem.",
            "rules": [
              "Graph G has no K_t minor.",
              "t=1, 2: Trivial.",
              "t=3: Trees are 2-colorable.",
              "t=4: Proved by Hadwiger (1943).",
              "t=5: Equivalent to Four Color Theorem!",
              "t=6: Proved by Robertson, Seymour, Thomas (1993). Open for t ≥ 7!"
            ],
            "mystery": "Béla Bollobás declared Hadwiger's conjecture 'one of the deepest unsolved problems in graph theory'!",
            "funFact": "In 2020, Norin, Postle, and Song shattered a 30-year record by proving every graph with no K_t minor is O(t (log t)^β) colorable!"
          },
          "investigators": {
            "tagline": "Graph minor theorem of Robertson and Seymour, tree-decompositions.",
            "analogy": "Robertson, Seymour, and Thomas reduced t=6 to the 4-color theorem by showing apex graphs and Wagner's 3-decomposition.",
            "rules": [
              "Graph minor contraction G / e.",
              "Hadwiger t=5 ⇔ Wagner's Theorem + 4-Color.",
              "Robertson-Seymour-Thomas (1993): t=6 proof."
            ],
            "mystery": "Can we prove Hadwiger's conjecture for t = 7 or prove an O(t) linear coloring bound?",
            "funFact": "Hugo Hadwiger formulated the conjecture in 1943."
          },
          "pioneers": {
            "tagline": "Topological minors and chromatic polynomials.",
            "analogy": "Recent advances use dense subgraph concentration, fractional colorings, and expander minor packing.",
            "rules": [
              "Postle (2020): O(t (log log t)^6) coloring bound.",
              "Expander minor embedding.",
              "Lean 4 Mathlib graph minor library."
            ],
            "mystery": "AI structural analyzers search for potential Hadwiger-7 counterexamples with 20-30 vertices.",
            "funFact": "Hadwiger's Conjecture stands as the grand mountain peak that connects graph minors to coloring geometry."
          }
        },
        "history": [
          {
            "year": "1943",
            "author": "Hugo Hadwiger",
            "note": "Poses the conjecture; proves t ≤ 4."
          },
          {
            "year": "1993",
            "author": "Robertson, Seymour & Thomas",
            "note": "Prove conjecture for t = 6 using 4-Color Theorem."
          },
          {
            "year": "2020",
            "author": "Norin, Postle & Song",
            "note": "Break logarithmic coloring barrier for arbitrary t."
          }
        ]
      }
    }
  },
  {
    "id": "tutte-5flow",
    "icon": "🌊",
    "difficulty": "Gr 9+",
    "domain": "graph-theory",
    "category": "graph-theory",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Combinatorics.SimpleGraph.Basic\n-- Tutte's 5-Flow Conjecture (W. T. Tutte, 1954)\n-- Every bridgeless graph admits a nowhere-zero 5-flow.\n-- Seymour (1981) proved every bridgeless graph admits a nowhere-zero 6-flow.",
    "locales": {
      "en": {
        "name": "Tutte's 5-Flow Conjecture",
        "subtitle": "Every Bridgeless Graph Admits a Nowhere-Zero 5-Flow (Seymour Proved 6-Flow)",
        "field": "Algebraic Graph Theory & Network Flows",
        "statusBadge": "OPEN SINCE 1954",
        "grades": {
          "explorers": {
            "tagline": "Can water flow through every pipe in a network without ANY pipe running dry?",
            "analogy": "William Tutte introduced graph flows as the dual concept to graph colorings. A nowhere-zero k-flow sends integer amounts of water 1, 2, ..., k-1 through each directed edge such that total inflow equals total outflow at EVERY junction (Kirchhoff's current law). Tutte conjectured in 1954: ANY network without dead-end bridges can support a nowhere-zero 5-flow! Paul Seymour proved in 1981 that a 6-flow ALWAYS exists!",
            "rules": [
              "Graph G has no bridges (2-edge-connected).",
              "Assign orientation and integer flow f(e) ∈ {±1, ±2, ±3, ±4}.",
              "Kirchhoff's law: ∑ f_in = ∑ f_out at every vertex.",
              "Tutte (1954): 5-flow always exists! Seymour (1981): 6-flow proved!"
            ],
            "mystery": "The Petersen graph requires a 5-flow and DOES NOT have a 4-flow, proving 5 is the absolute best possible number!",
            "funFact": "Tutte's 4-flow conjecture (every bridgeless graph with no Petersen minor has a 4-flow) was proved by Robertson, Sanders, Seymour, and Thomas in 1998!"
          },
          "investigators": {
            "tagline": "Tutte polynomial, group-valued flows, and matroid duality.",
            "analogy": "Tutte showed that nowhere-zero k-flows on planar graphs are exactly the dual of proper k-face-colorings.",
            "rules": [
              "Cycle space and cocycle space over ℤ_k.",
              "Seymour's 6-Flow Theorem (1981).",
              "Lean 4 Mathlib flow conservation."
            ],
            "mystery": "Can we close the remaining gap between 6-flow and 5-flow?",
            "funFact": "W. T. Tutte introduced nowhere-zero flows in 1954."
          },
          "pioneers": {
            "tagline": "Snarks, cycle double covers, and cubic graphs.",
            "analogy": "The 5-flow conjecture reduces to 3-regular cubic graphs without 3-edge-colorings (snarks).",
            "rules": [
              "Snark theory: non-3-edge-colorable cubic graphs.",
              "Cycle double cover conjecture.",
              "Lean 4 graph flow library."
            ],
            "mystery": "AI SAT solvers have verified the 5-flow conjecture for all cubic snarks up to 36 vertices (millions of snarks!).",
            "funFact": "Tutte's 5-Flow Conjecture is the crown jewel of modern algebraic flow theory."
          }
        },
        "history": [
          {
            "year": "1954",
            "author": "W. T. Tutte",
            "note": "Formulates the 5-Flow Conjecture in a seminal paper."
          },
          {
            "year": "1981",
            "author": "Paul Seymour",
            "note": "Proves the 6-Flow Theorem for all bridgeless graphs."
          },
          {
            "year": "1998",
            "author": "Robertson, Sanders, Seymour & Thomas",
            "note": "Prove Tutte's 4-Flow conjecture for cubic graphs."
          }
        ]
      },
      "de": {
        "name": "Tutte's 5-Flow Conjecture",
        "subtitle": "Every Bridgeless Graph Admits a Nowhere-Zero 5-Flow (Seymour Proved 6-Flow)",
        "field": "Algebraic Graph Theory & Network Flows",
        "statusBadge": "OPEN SINCE 1954",
        "grades": {
          "explorers": {
            "tagline": "Can water flow through every pipe in a network without ANY pipe running dry?",
            "analogy": "William Tutte introduced graph flows as the dual concept to graph colorings. A nowhere-zero k-flow sends integer amounts of water 1, 2, ..., k-1 through each directed edge such that total inflow equals total outflow at EVERY junction (Kirchhoff's current law). Tutte conjectured in 1954: ANY network without dead-end bridges can support a nowhere-zero 5-flow! Paul Seymour proved in 1981 that a 6-flow ALWAYS exists!",
            "rules": [
              "Graph G has no bridges (2-edge-connected).",
              "Assign orientation and integer flow f(e) ∈ {±1, ±2, ±3, ±4}.",
              "Kirchhoff's law: ∑ f_in = ∑ f_out at every vertex.",
              "Tutte (1954): 5-flow always exists! Seymour (1981): 6-flow proved!"
            ],
            "mystery": "The Petersen graph requires a 5-flow and DOES NOT have a 4-flow, proving 5 is the absolute best possible number!",
            "funFact": "Tutte's 4-flow conjecture (every bridgeless graph with no Petersen minor has a 4-flow) was proved by Robertson, Sanders, Seymour, and Thomas in 1998!"
          },
          "investigators": {
            "tagline": "Tutte polynomial, group-valued flows, and matroid duality.",
            "analogy": "Tutte showed that nowhere-zero k-flows on planar graphs are exactly the dual of proper k-face-colorings.",
            "rules": [
              "Cycle space and cocycle space over ℤ_k.",
              "Seymour's 6-Flow Theorem (1981).",
              "Lean 4 Mathlib flow conservation."
            ],
            "mystery": "Can we close the remaining gap between 6-flow and 5-flow?",
            "funFact": "W. T. Tutte introduced nowhere-zero flows in 1954."
          },
          "pioneers": {
            "tagline": "Snarks, cycle double covers, and cubic graphs.",
            "analogy": "The 5-flow conjecture reduces to 3-regular cubic graphs without 3-edge-colorings (snarks).",
            "rules": [
              "Snark theory: non-3-edge-colorable cubic graphs.",
              "Cycle double cover conjecture.",
              "Lean 4 graph flow library."
            ],
            "mystery": "AI SAT solvers have verified the 5-flow conjecture for all cubic snarks up to 36 vertices (millions of snarks!).",
            "funFact": "Tutte's 5-Flow Conjecture is the crown jewel of modern algebraic flow theory."
          }
        },
        "history": [
          {
            "year": "1954",
            "author": "W. T. Tutte",
            "note": "Formulates the 5-Flow Conjecture in a seminal paper."
          },
          {
            "year": "1981",
            "author": "Paul Seymour",
            "note": "Proves the 6-Flow Theorem for all bridgeless graphs."
          },
          {
            "year": "1998",
            "author": "Robertson, Sanders, Seymour & Thomas",
            "note": "Prove Tutte's 4-Flow conjecture for cubic graphs."
          }
        ]
      },
      "fr": {
        "name": "Tutte's 5-Flow Conjecture",
        "subtitle": "Every Bridgeless Graph Admits a Nowhere-Zero 5-Flow (Seymour Proved 6-Flow)",
        "field": "Algebraic Graph Theory & Network Flows",
        "statusBadge": "OPEN SINCE 1954",
        "grades": {
          "explorers": {
            "tagline": "Can water flow through every pipe in a network without ANY pipe running dry?",
            "analogy": "William Tutte introduced graph flows as the dual concept to graph colorings. A nowhere-zero k-flow sends integer amounts of water 1, 2, ..., k-1 through each directed edge such that total inflow equals total outflow at EVERY junction (Kirchhoff's current law). Tutte conjectured in 1954: ANY network without dead-end bridges can support a nowhere-zero 5-flow! Paul Seymour proved in 1981 that a 6-flow ALWAYS exists!",
            "rules": [
              "Graph G has no bridges (2-edge-connected).",
              "Assign orientation and integer flow f(e) ∈ {±1, ±2, ±3, ±4}.",
              "Kirchhoff's law: ∑ f_in = ∑ f_out at every vertex.",
              "Tutte (1954): 5-flow always exists! Seymour (1981): 6-flow proved!"
            ],
            "mystery": "The Petersen graph requires a 5-flow and DOES NOT have a 4-flow, proving 5 is the absolute best possible number!",
            "funFact": "Tutte's 4-flow conjecture (every bridgeless graph with no Petersen minor has a 4-flow) was proved by Robertson, Sanders, Seymour, and Thomas in 1998!"
          },
          "investigators": {
            "tagline": "Tutte polynomial, group-valued flows, and matroid duality.",
            "analogy": "Tutte showed that nowhere-zero k-flows on planar graphs are exactly the dual of proper k-face-colorings.",
            "rules": [
              "Cycle space and cocycle space over ℤ_k.",
              "Seymour's 6-Flow Theorem (1981).",
              "Lean 4 Mathlib flow conservation."
            ],
            "mystery": "Can we close the remaining gap between 6-flow and 5-flow?",
            "funFact": "W. T. Tutte introduced nowhere-zero flows in 1954."
          },
          "pioneers": {
            "tagline": "Snarks, cycle double covers, and cubic graphs.",
            "analogy": "The 5-flow conjecture reduces to 3-regular cubic graphs without 3-edge-colorings (snarks).",
            "rules": [
              "Snark theory: non-3-edge-colorable cubic graphs.",
              "Cycle double cover conjecture.",
              "Lean 4 graph flow library."
            ],
            "mystery": "AI SAT solvers have verified the 5-flow conjecture for all cubic snarks up to 36 vertices (millions of snarks!).",
            "funFact": "Tutte's 5-Flow Conjecture is the crown jewel of modern algebraic flow theory."
          }
        },
        "history": [
          {
            "year": "1954",
            "author": "W. T. Tutte",
            "note": "Formulates the 5-Flow Conjecture in a seminal paper."
          },
          {
            "year": "1981",
            "author": "Paul Seymour",
            "note": "Proves the 6-Flow Theorem for all bridgeless graphs."
          },
          {
            "year": "1998",
            "author": "Robertson, Sanders, Seymour & Thomas",
            "note": "Prove Tutte's 4-Flow conjecture for cubic graphs."
          }
        ]
      },
      "it": {
        "name": "Tutte's 5-Flow Conjecture",
        "subtitle": "Every Bridgeless Graph Admits a Nowhere-Zero 5-Flow (Seymour Proved 6-Flow)",
        "field": "Algebraic Graph Theory & Network Flows",
        "statusBadge": "OPEN SINCE 1954",
        "grades": {
          "explorers": {
            "tagline": "Can water flow through every pipe in a network without ANY pipe running dry?",
            "analogy": "William Tutte introduced graph flows as the dual concept to graph colorings. A nowhere-zero k-flow sends integer amounts of water 1, 2, ..., k-1 through each directed edge such that total inflow equals total outflow at EVERY junction (Kirchhoff's current law). Tutte conjectured in 1954: ANY network without dead-end bridges can support a nowhere-zero 5-flow! Paul Seymour proved in 1981 that a 6-flow ALWAYS exists!",
            "rules": [
              "Graph G has no bridges (2-edge-connected).",
              "Assign orientation and integer flow f(e) ∈ {±1, ±2, ±3, ±4}.",
              "Kirchhoff's law: ∑ f_in = ∑ f_out at every vertex.",
              "Tutte (1954): 5-flow always exists! Seymour (1981): 6-flow proved!"
            ],
            "mystery": "The Petersen graph requires a 5-flow and DOES NOT have a 4-flow, proving 5 is the absolute best possible number!",
            "funFact": "Tutte's 4-flow conjecture (every bridgeless graph with no Petersen minor has a 4-flow) was proved by Robertson, Sanders, Seymour, and Thomas in 1998!"
          },
          "investigators": {
            "tagline": "Tutte polynomial, group-valued flows, and matroid duality.",
            "analogy": "Tutte showed that nowhere-zero k-flows on planar graphs are exactly the dual of proper k-face-colorings.",
            "rules": [
              "Cycle space and cocycle space over ℤ_k.",
              "Seymour's 6-Flow Theorem (1981).",
              "Lean 4 Mathlib flow conservation."
            ],
            "mystery": "Can we close the remaining gap between 6-flow and 5-flow?",
            "funFact": "W. T. Tutte introduced nowhere-zero flows in 1954."
          },
          "pioneers": {
            "tagline": "Snarks, cycle double covers, and cubic graphs.",
            "analogy": "The 5-flow conjecture reduces to 3-regular cubic graphs without 3-edge-colorings (snarks).",
            "rules": [
              "Snark theory: non-3-edge-colorable cubic graphs.",
              "Cycle double cover conjecture.",
              "Lean 4 graph flow library."
            ],
            "mystery": "AI SAT solvers have verified the 5-flow conjecture for all cubic snarks up to 36 vertices (millions of snarks!).",
            "funFact": "Tutte's 5-Flow Conjecture is the crown jewel of modern algebraic flow theory."
          }
        },
        "history": [
          {
            "year": "1954",
            "author": "W. T. Tutte",
            "note": "Formulates the 5-Flow Conjecture in a seminal paper."
          },
          {
            "year": "1981",
            "author": "Paul Seymour",
            "note": "Proves the 6-Flow Theorem for all bridgeless graphs."
          },
          {
            "year": "1998",
            "author": "Robertson, Sanders, Seymour & Thomas",
            "note": "Prove Tutte's 4-Flow conjecture for cubic graphs."
          }
        ]
      },
      "ja": {
        "name": "Tutte's 5-Flow Conjecture",
        "subtitle": "Every Bridgeless Graph Admits a Nowhere-Zero 5-Flow (Seymour Proved 6-Flow)",
        "field": "Algebraic Graph Theory & Network Flows",
        "statusBadge": "OPEN SINCE 1954",
        "grades": {
          "explorers": {
            "tagline": "Can water flow through every pipe in a network without ANY pipe running dry?",
            "analogy": "William Tutte introduced graph flows as the dual concept to graph colorings. A nowhere-zero k-flow sends integer amounts of water 1, 2, ..., k-1 through each directed edge such that total inflow equals total outflow at EVERY junction (Kirchhoff's current law). Tutte conjectured in 1954: ANY network without dead-end bridges can support a nowhere-zero 5-flow! Paul Seymour proved in 1981 that a 6-flow ALWAYS exists!",
            "rules": [
              "Graph G has no bridges (2-edge-connected).",
              "Assign orientation and integer flow f(e) ∈ {±1, ±2, ±3, ±4}.",
              "Kirchhoff's law: ∑ f_in = ∑ f_out at every vertex.",
              "Tutte (1954): 5-flow always exists! Seymour (1981): 6-flow proved!"
            ],
            "mystery": "The Petersen graph requires a 5-flow and DOES NOT have a 4-flow, proving 5 is the absolute best possible number!",
            "funFact": "Tutte's 4-flow conjecture (every bridgeless graph with no Petersen minor has a 4-flow) was proved by Robertson, Sanders, Seymour, and Thomas in 1998!"
          },
          "investigators": {
            "tagline": "Tutte polynomial, group-valued flows, and matroid duality.",
            "analogy": "Tutte showed that nowhere-zero k-flows on planar graphs are exactly the dual of proper k-face-colorings.",
            "rules": [
              "Cycle space and cocycle space over ℤ_k.",
              "Seymour's 6-Flow Theorem (1981).",
              "Lean 4 Mathlib flow conservation."
            ],
            "mystery": "Can we close the remaining gap between 6-flow and 5-flow?",
            "funFact": "W. T. Tutte introduced nowhere-zero flows in 1954."
          },
          "pioneers": {
            "tagline": "Snarks, cycle double covers, and cubic graphs.",
            "analogy": "The 5-flow conjecture reduces to 3-regular cubic graphs without 3-edge-colorings (snarks).",
            "rules": [
              "Snark theory: non-3-edge-colorable cubic graphs.",
              "Cycle double cover conjecture.",
              "Lean 4 graph flow library."
            ],
            "mystery": "AI SAT solvers have verified the 5-flow conjecture for all cubic snarks up to 36 vertices (millions of snarks!).",
            "funFact": "Tutte's 5-Flow Conjecture is the crown jewel of modern algebraic flow theory."
          }
        },
        "history": [
          {
            "year": "1954",
            "author": "W. T. Tutte",
            "note": "Formulates the 5-Flow Conjecture in a seminal paper."
          },
          {
            "year": "1981",
            "author": "Paul Seymour",
            "note": "Proves the 6-Flow Theorem for all bridgeless graphs."
          },
          {
            "year": "1998",
            "author": "Robertson, Sanders, Seymour & Thomas",
            "note": "Prove Tutte's 4-Flow conjecture for cubic graphs."
          }
        ]
      },
      "ko": {
        "name": "Tutte's 5-Flow Conjecture",
        "subtitle": "Every Bridgeless Graph Admits a Nowhere-Zero 5-Flow (Seymour Proved 6-Flow)",
        "field": "Algebraic Graph Theory & Network Flows",
        "statusBadge": "OPEN SINCE 1954",
        "grades": {
          "explorers": {
            "tagline": "Can water flow through every pipe in a network without ANY pipe running dry?",
            "analogy": "William Tutte introduced graph flows as the dual concept to graph colorings. A nowhere-zero k-flow sends integer amounts of water 1, 2, ..., k-1 through each directed edge such that total inflow equals total outflow at EVERY junction (Kirchhoff's current law). Tutte conjectured in 1954: ANY network without dead-end bridges can support a nowhere-zero 5-flow! Paul Seymour proved in 1981 that a 6-flow ALWAYS exists!",
            "rules": [
              "Graph G has no bridges (2-edge-connected).",
              "Assign orientation and integer flow f(e) ∈ {±1, ±2, ±3, ±4}.",
              "Kirchhoff's law: ∑ f_in = ∑ f_out at every vertex.",
              "Tutte (1954): 5-flow always exists! Seymour (1981): 6-flow proved!"
            ],
            "mystery": "The Petersen graph requires a 5-flow and DOES NOT have a 4-flow, proving 5 is the absolute best possible number!",
            "funFact": "Tutte's 4-flow conjecture (every bridgeless graph with no Petersen minor has a 4-flow) was proved by Robertson, Sanders, Seymour, and Thomas in 1998!"
          },
          "investigators": {
            "tagline": "Tutte polynomial, group-valued flows, and matroid duality.",
            "analogy": "Tutte showed that nowhere-zero k-flows on planar graphs are exactly the dual of proper k-face-colorings.",
            "rules": [
              "Cycle space and cocycle space over ℤ_k.",
              "Seymour's 6-Flow Theorem (1981).",
              "Lean 4 Mathlib flow conservation."
            ],
            "mystery": "Can we close the remaining gap between 6-flow and 5-flow?",
            "funFact": "W. T. Tutte introduced nowhere-zero flows in 1954."
          },
          "pioneers": {
            "tagline": "Snarks, cycle double covers, and cubic graphs.",
            "analogy": "The 5-flow conjecture reduces to 3-regular cubic graphs without 3-edge-colorings (snarks).",
            "rules": [
              "Snark theory: non-3-edge-colorable cubic graphs.",
              "Cycle double cover conjecture.",
              "Lean 4 graph flow library."
            ],
            "mystery": "AI SAT solvers have verified the 5-flow conjecture for all cubic snarks up to 36 vertices (millions of snarks!).",
            "funFact": "Tutte's 5-Flow Conjecture is the crown jewel of modern algebraic flow theory."
          }
        },
        "history": [
          {
            "year": "1954",
            "author": "W. T. Tutte",
            "note": "Formulates the 5-Flow Conjecture in a seminal paper."
          },
          {
            "year": "1981",
            "author": "Paul Seymour",
            "note": "Proves the 6-Flow Theorem for all bridgeless graphs."
          },
          {
            "year": "1998",
            "author": "Robertson, Sanders, Seymour & Thomas",
            "note": "Prove Tutte's 4-Flow conjecture for cubic graphs."
          }
        ]
      },
      "zh-Hans": {
        "name": "塔特 5-流猜想",
        "subtitle": "每个无割边的连通图必存在非零 5-流（西摩1981年证明了 6-流）",
        "field": "代数图论 & 网络循环流",
        "statusBadge": "自1954年高悬至今",
        "grades": {
          "explorers": {
            "tagline": "在一个互通的水管网络中，能否让水流在每个管道中持续循环流动，且没有任何一根水管干涸？",
            "analogy": "图论大师威廉·塔特发明了与图染色对偶的“网络流”理论。所谓非零 k-流，就是给图的每条边指定一个方向和 1 到 k-1 之间的整数流量，使得在每个节点处满足基尔霍夫电流定律（总流入量等于总流出量），且没有任何一条边的流量为零。塔特于1954年猜想：只要图没有断头桥（割边），就必定存在非零 5-流！保罗·西摩在1981年证明了必存在非零 6-流，距终极目标仅差临门一脚！",
            "rules": [
              "图 G 没有任何割边（2-边连通）。",
              "为每条边赋予方向和非零整数流量 $f(e) \\in \\{\\pm 1, \\pm 2, \\pm 3, \\pm 4\\}$。",
              "每个顶点处满足基尔霍夫流量守恒定律。",
              "猜想断言 5-流永远存在！西摩已证 6-流永远存在！"
            ],
            "mystery": "大名鼎鼎的彼得森图（Petersen graph）绝不可能拥有 4-流，必须至少使用 5-流，证明 5 是全宇宙不可再减少的绝对最优数值！",
            "funFact": "塔特关于不含彼得森子式的图必有 4-流的猜想，已于1998年被罗伯逊与西摩团队彻底攻克！"
          },
          "investigators": {
            "tagline": "塔特多项式、有限阿贝尔群流与拟阵对偶理论。",
            "analogy": "塔特建立了划时代的对偶定理：平面图上的非零 k-流精确对应于对偶平面图的有效 k-面染色！",
            "rules": [
              "有限阿贝尔群上的循环空间与上循环空间。",
              "西摩 1981 年 6-流定理构造。",
              "Lean 4 Mathlib 网络流与守恒定律形式化。"
            ],
            "mystery": "能否跨越从 6-流到 5-流的最后鸿沟？",
            "funFact": "W. T. 塔特于1954年建立非零流理论。"
          },
          "pioneers": {
            "tagline": "斯奈克图（Snarks）、圈双覆盖猜想与三次正则图。",
            "analogy": "整个 5-流猜想可以完全等价规约为无割边三次正则图且无法用3种颜色边染色的奇特图类（斯奈克图）。",
            "rules": [
              "斯奈克图结构定理。",
              "圈双覆盖猜想紧密关联。",
              "Lean 4 图论循环流形式化。"
            ],
            "mystery": "AI 自动化系统已对所有阶数直到 36 个顶点的数百万个斯奈克图穷尽验证，5-流全部完美存在！",
            "funFact": "塔特 5-流猜想是整个代数网络流与拟阵拓扑学皇冠上最耀眼的宝石。"
          }
        },
        "history": [
          {
            "year": "1954",
            "author": "W. T. 塔特",
            "note": "发表开创性论文正式提出 5-流猜想。"
          },
          {
            "year": "1981",
            "author": "保罗·西摩",
            "note": "发表人类首个无条件 6-流全局存在定理！"
          },
          {
            "year": "1998",
            "author": "西摩团队",
            "note": "攻克无彼得森子式图的 4-流猜想。"
          }
        ]
      },
      "zh-Hant": {
        "name": "Tutte's 5-Flow Conjecture",
        "subtitle": "Every Bridgeless Graph Admits a Nowhere-Zero 5-Flow (Seymour Proved 6-Flow)",
        "field": "Algebraic Graph Theory & Network Flows",
        "statusBadge": "OPEN SINCE 1954",
        "grades": {
          "explorers": {
            "tagline": "Can water flow through every pipe in a network without ANY pipe running dry?",
            "analogy": "William Tutte introduced graph flows as the dual concept to graph colorings. A nowhere-zero k-flow sends integer amounts of water 1, 2, ..., k-1 through each directed edge such that total inflow equals total outflow at EVERY junction (Kirchhoff's current law). Tutte conjectured in 1954: ANY network without dead-end bridges can support a nowhere-zero 5-flow! Paul Seymour proved in 1981 that a 6-flow ALWAYS exists!",
            "rules": [
              "Graph G has no bridges (2-edge-connected).",
              "Assign orientation and integer flow f(e) ∈ {±1, ±2, ±3, ±4}.",
              "Kirchhoff's law: ∑ f_in = ∑ f_out at every vertex.",
              "Tutte (1954): 5-flow always exists! Seymour (1981): 6-flow proved!"
            ],
            "mystery": "The Petersen graph requires a 5-flow and DOES NOT have a 4-flow, proving 5 is the absolute best possible number!",
            "funFact": "Tutte's 4-flow conjecture (every bridgeless graph with no Petersen minor has a 4-flow) was proved by Robertson, Sanders, Seymour, and Thomas in 1998!"
          },
          "investigators": {
            "tagline": "Tutte polynomial, group-valued flows, and matroid duality.",
            "analogy": "Tutte showed that nowhere-zero k-flows on planar graphs are exactly the dual of proper k-face-colorings.",
            "rules": [
              "Cycle space and cocycle space over ℤ_k.",
              "Seymour's 6-Flow Theorem (1981).",
              "Lean 4 Mathlib flow conservation."
            ],
            "mystery": "Can we close the remaining gap between 6-flow and 5-flow?",
            "funFact": "W. T. Tutte introduced nowhere-zero flows in 1954."
          },
          "pioneers": {
            "tagline": "Snarks, cycle double covers, and cubic graphs.",
            "analogy": "The 5-flow conjecture reduces to 3-regular cubic graphs without 3-edge-colorings (snarks).",
            "rules": [
              "Snark theory: non-3-edge-colorable cubic graphs.",
              "Cycle double cover conjecture.",
              "Lean 4 graph flow library."
            ],
            "mystery": "AI SAT solvers have verified the 5-flow conjecture for all cubic snarks up to 36 vertices (millions of snarks!).",
            "funFact": "Tutte's 5-Flow Conjecture is the crown jewel of modern algebraic flow theory."
          }
        },
        "history": [
          {
            "year": "1954",
            "author": "W. T. Tutte",
            "note": "Formulates the 5-Flow Conjecture in a seminal paper."
          },
          {
            "year": "1981",
            "author": "Paul Seymour",
            "note": "Proves the 6-Flow Theorem for all bridgeless graphs."
          },
          {
            "year": "1998",
            "author": "Robertson, Sanders, Seymour & Thomas",
            "note": "Prove Tutte's 4-Flow conjecture for cubic graphs."
          }
        ]
      }
    }
  },
  {
    "id": "caccetta-haggkvist",
    "icon": "🔄",
    "difficulty": "Gr 9+",
    "domain": "graph-theory",
    "category": "graph-theory",
    "isMillennium": false,
    "isAIFrontier": true,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Combinatorics.SimpleGraph.Basic\n-- Caccetta-Häggkvist Conjecture (1978)\n-- Every simple digraph on n vertices with minimum outdegree ≥ r contains a directed cycle of length ≤ ⌈n / r⌉.",
    "locales": {
      "en": {
        "name": "Caccetta-Häggkvist Conjecture",
        "subtitle": "Directed Graphs with Outdegree $r$ Have Cycles of Length $\\le \\lceil n/r \\rceil$",
        "field": "Directed Graph Theory & Extremal Combinatorics",
        "statusBadge": "OPEN SINCE 1978",
        "grades": {
          "explorers": {
            "tagline": "If every city has at least 10 one-way outbound flights, can you fly in a small loop back home?",
            "analogy": "In 1978, Louis Caccetta and Roland Häggkvist proposed: In any directed network of $n$ cities where EVERY city has at least $r$ outgoing one-way roads, there must exist a directed round-trip cycle of length AT MOST $\\lceil n / r \\rceil$! For $r = n/3$, this asks if every digraph with out-degree $n/3$ contains a triangle of 3 cities! Despite decades of effort, even the triangle case remains open!",
            "rules": [
              "Simple directed graph with n vertices.",
              "Every vertex has out-degree ≥ r.",
              "Conjecture: Contains a directed cycle of length ≤ ⌈n / r⌉.",
              "Special case r = n/3: Must contain a directed 3-cycle (triangle)!"
            ],
            "mystery": "If true, the bound ⌈n/r⌉ is sharp: A cyclic tournament of n vertices partitioned into r+1 clusters achieves exactly this!",
            "funFact": "Chvátal and Szemerédi proved in 1983 that there is always a cycle of length at most n/r + 2500, introducing additive combinatorics to the problem!"
          },
          "investigators": {
            "tagline": "Razborov's flag algebras and semidefinite programming.",
            "analogy": "Hladký, Král, and Norin used flag algebra computers in 2017 to push the triangle bound for outdegree down to 0.3388 n.",
            "rules": [
              "Flag algebras method of Razborov (2007).",
              "Limit of dense directed graphs.",
              "Lean 4 Mathlib directed graphs."
            ],
            "mystery": "Can we prove the triangle case: Does out-degree ≥ n/3 guarantee a directed 3-cycle?",
            "funFact": "Louis Caccetta and Roland Häggkvist formulated it in 1978."
          },
          "pioneers": {
            "tagline": "Entropy inequalities and circular orderings.",
            "analogy": "Steiner showed in 2021 that the conjecture holds for complex random tournament ensembles.",
            "rules": [
              "Tournament graphs and circular layouts.",
              "Linear programming dual certificates.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI symbolic reasoning engines verify the conjecture across all directed graphs up to 15 vertices without counterexample.",
            "funFact": "The Caccetta-Häggkvist Conjecture is the Holy Grail of directed network and cycle optimization theory."
          }
        },
        "history": [
          {
            "year": "1978",
            "author": "Caccetta & Häggkvist",
            "note": "Formulate the directed cycle conjecture."
          },
          {
            "year": "1983",
            "author": "Chvátal & Szemerédi",
            "note": "Prove asymptotic bound n/r + 2500."
          },
          {
            "year": "2017",
            "author": "Hladký, Král & Norin",
            "note": "Use flag algebras to prove outdegree 0.3388 n yields a 3-cycle."
          }
        ]
      },
      "de": {
        "name": "Caccetta-Häggkvist Conjecture",
        "subtitle": "Directed Graphs with Outdegree $r$ Have Cycles of Length $\\le \\lceil n/r \\rceil$",
        "field": "Directed Graph Theory & Extremal Combinatorics",
        "statusBadge": "OPEN SINCE 1978",
        "grades": {
          "explorers": {
            "tagline": "If every city has at least 10 one-way outbound flights, can you fly in a small loop back home?",
            "analogy": "In 1978, Louis Caccetta and Roland Häggkvist proposed: In any directed network of $n$ cities where EVERY city has at least $r$ outgoing one-way roads, there must exist a directed round-trip cycle of length AT MOST $\\lceil n / r \\rceil$! For $r = n/3$, this asks if every digraph with out-degree $n/3$ contains a triangle of 3 cities! Despite decades of effort, even the triangle case remains open!",
            "rules": [
              "Simple directed graph with n vertices.",
              "Every vertex has out-degree ≥ r.",
              "Conjecture: Contains a directed cycle of length ≤ ⌈n / r⌉.",
              "Special case r = n/3: Must contain a directed 3-cycle (triangle)!"
            ],
            "mystery": "If true, the bound ⌈n/r⌉ is sharp: A cyclic tournament of n vertices partitioned into r+1 clusters achieves exactly this!",
            "funFact": "Chvátal and Szemerédi proved in 1983 that there is always a cycle of length at most n/r + 2500, introducing additive combinatorics to the problem!"
          },
          "investigators": {
            "tagline": "Razborov's flag algebras and semidefinite programming.",
            "analogy": "Hladký, Král, and Norin used flag algebra computers in 2017 to push the triangle bound for outdegree down to 0.3388 n.",
            "rules": [
              "Flag algebras method of Razborov (2007).",
              "Limit of dense directed graphs.",
              "Lean 4 Mathlib directed graphs."
            ],
            "mystery": "Can we prove the triangle case: Does out-degree ≥ n/3 guarantee a directed 3-cycle?",
            "funFact": "Louis Caccetta and Roland Häggkvist formulated it in 1978."
          },
          "pioneers": {
            "tagline": "Entropy inequalities and circular orderings.",
            "analogy": "Steiner showed in 2021 that the conjecture holds for complex random tournament ensembles.",
            "rules": [
              "Tournament graphs and circular layouts.",
              "Linear programming dual certificates.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI symbolic reasoning engines verify the conjecture across all directed graphs up to 15 vertices without counterexample.",
            "funFact": "The Caccetta-Häggkvist Conjecture is the Holy Grail of directed network and cycle optimization theory."
          }
        },
        "history": [
          {
            "year": "1978",
            "author": "Caccetta & Häggkvist",
            "note": "Formulate the directed cycle conjecture."
          },
          {
            "year": "1983",
            "author": "Chvátal & Szemerédi",
            "note": "Prove asymptotic bound n/r + 2500."
          },
          {
            "year": "2017",
            "author": "Hladký, Král & Norin",
            "note": "Use flag algebras to prove outdegree 0.3388 n yields a 3-cycle."
          }
        ]
      },
      "fr": {
        "name": "Caccetta-Häggkvist Conjecture",
        "subtitle": "Directed Graphs with Outdegree $r$ Have Cycles of Length $\\le \\lceil n/r \\rceil$",
        "field": "Directed Graph Theory & Extremal Combinatorics",
        "statusBadge": "OPEN SINCE 1978",
        "grades": {
          "explorers": {
            "tagline": "If every city has at least 10 one-way outbound flights, can you fly in a small loop back home?",
            "analogy": "In 1978, Louis Caccetta and Roland Häggkvist proposed: In any directed network of $n$ cities where EVERY city has at least $r$ outgoing one-way roads, there must exist a directed round-trip cycle of length AT MOST $\\lceil n / r \\rceil$! For $r = n/3$, this asks if every digraph with out-degree $n/3$ contains a triangle of 3 cities! Despite decades of effort, even the triangle case remains open!",
            "rules": [
              "Simple directed graph with n vertices.",
              "Every vertex has out-degree ≥ r.",
              "Conjecture: Contains a directed cycle of length ≤ ⌈n / r⌉.",
              "Special case r = n/3: Must contain a directed 3-cycle (triangle)!"
            ],
            "mystery": "If true, the bound ⌈n/r⌉ is sharp: A cyclic tournament of n vertices partitioned into r+1 clusters achieves exactly this!",
            "funFact": "Chvátal and Szemerédi proved in 1983 that there is always a cycle of length at most n/r + 2500, introducing additive combinatorics to the problem!"
          },
          "investigators": {
            "tagline": "Razborov's flag algebras and semidefinite programming.",
            "analogy": "Hladký, Král, and Norin used flag algebra computers in 2017 to push the triangle bound for outdegree down to 0.3388 n.",
            "rules": [
              "Flag algebras method of Razborov (2007).",
              "Limit of dense directed graphs.",
              "Lean 4 Mathlib directed graphs."
            ],
            "mystery": "Can we prove the triangle case: Does out-degree ≥ n/3 guarantee a directed 3-cycle?",
            "funFact": "Louis Caccetta and Roland Häggkvist formulated it in 1978."
          },
          "pioneers": {
            "tagline": "Entropy inequalities and circular orderings.",
            "analogy": "Steiner showed in 2021 that the conjecture holds for complex random tournament ensembles.",
            "rules": [
              "Tournament graphs and circular layouts.",
              "Linear programming dual certificates.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI symbolic reasoning engines verify the conjecture across all directed graphs up to 15 vertices without counterexample.",
            "funFact": "The Caccetta-Häggkvist Conjecture is the Holy Grail of directed network and cycle optimization theory."
          }
        },
        "history": [
          {
            "year": "1978",
            "author": "Caccetta & Häggkvist",
            "note": "Formulate the directed cycle conjecture."
          },
          {
            "year": "1983",
            "author": "Chvátal & Szemerédi",
            "note": "Prove asymptotic bound n/r + 2500."
          },
          {
            "year": "2017",
            "author": "Hladký, Král & Norin",
            "note": "Use flag algebras to prove outdegree 0.3388 n yields a 3-cycle."
          }
        ]
      },
      "it": {
        "name": "Caccetta-Häggkvist Conjecture",
        "subtitle": "Directed Graphs with Outdegree $r$ Have Cycles of Length $\\le \\lceil n/r \\rceil$",
        "field": "Directed Graph Theory & Extremal Combinatorics",
        "statusBadge": "OPEN SINCE 1978",
        "grades": {
          "explorers": {
            "tagline": "If every city has at least 10 one-way outbound flights, can you fly in a small loop back home?",
            "analogy": "In 1978, Louis Caccetta and Roland Häggkvist proposed: In any directed network of $n$ cities where EVERY city has at least $r$ outgoing one-way roads, there must exist a directed round-trip cycle of length AT MOST $\\lceil n / r \\rceil$! For $r = n/3$, this asks if every digraph with out-degree $n/3$ contains a triangle of 3 cities! Despite decades of effort, even the triangle case remains open!",
            "rules": [
              "Simple directed graph with n vertices.",
              "Every vertex has out-degree ≥ r.",
              "Conjecture: Contains a directed cycle of length ≤ ⌈n / r⌉.",
              "Special case r = n/3: Must contain a directed 3-cycle (triangle)!"
            ],
            "mystery": "If true, the bound ⌈n/r⌉ is sharp: A cyclic tournament of n vertices partitioned into r+1 clusters achieves exactly this!",
            "funFact": "Chvátal and Szemerédi proved in 1983 that there is always a cycle of length at most n/r + 2500, introducing additive combinatorics to the problem!"
          },
          "investigators": {
            "tagline": "Razborov's flag algebras and semidefinite programming.",
            "analogy": "Hladký, Král, and Norin used flag algebra computers in 2017 to push the triangle bound for outdegree down to 0.3388 n.",
            "rules": [
              "Flag algebras method of Razborov (2007).",
              "Limit of dense directed graphs.",
              "Lean 4 Mathlib directed graphs."
            ],
            "mystery": "Can we prove the triangle case: Does out-degree ≥ n/3 guarantee a directed 3-cycle?",
            "funFact": "Louis Caccetta and Roland Häggkvist formulated it in 1978."
          },
          "pioneers": {
            "tagline": "Entropy inequalities and circular orderings.",
            "analogy": "Steiner showed in 2021 that the conjecture holds for complex random tournament ensembles.",
            "rules": [
              "Tournament graphs and circular layouts.",
              "Linear programming dual certificates.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI symbolic reasoning engines verify the conjecture across all directed graphs up to 15 vertices without counterexample.",
            "funFact": "The Caccetta-Häggkvist Conjecture is the Holy Grail of directed network and cycle optimization theory."
          }
        },
        "history": [
          {
            "year": "1978",
            "author": "Caccetta & Häggkvist",
            "note": "Formulate the directed cycle conjecture."
          },
          {
            "year": "1983",
            "author": "Chvátal & Szemerédi",
            "note": "Prove asymptotic bound n/r + 2500."
          },
          {
            "year": "2017",
            "author": "Hladký, Král & Norin",
            "note": "Use flag algebras to prove outdegree 0.3388 n yields a 3-cycle."
          }
        ]
      },
      "ja": {
        "name": "Caccetta-Häggkvist Conjecture",
        "subtitle": "Directed Graphs with Outdegree $r$ Have Cycles of Length $\\le \\lceil n/r \\rceil$",
        "field": "Directed Graph Theory & Extremal Combinatorics",
        "statusBadge": "OPEN SINCE 1978",
        "grades": {
          "explorers": {
            "tagline": "If every city has at least 10 one-way outbound flights, can you fly in a small loop back home?",
            "analogy": "In 1978, Louis Caccetta and Roland Häggkvist proposed: In any directed network of $n$ cities where EVERY city has at least $r$ outgoing one-way roads, there must exist a directed round-trip cycle of length AT MOST $\\lceil n / r \\rceil$! For $r = n/3$, this asks if every digraph with out-degree $n/3$ contains a triangle of 3 cities! Despite decades of effort, even the triangle case remains open!",
            "rules": [
              "Simple directed graph with n vertices.",
              "Every vertex has out-degree ≥ r.",
              "Conjecture: Contains a directed cycle of length ≤ ⌈n / r⌉.",
              "Special case r = n/3: Must contain a directed 3-cycle (triangle)!"
            ],
            "mystery": "If true, the bound ⌈n/r⌉ is sharp: A cyclic tournament of n vertices partitioned into r+1 clusters achieves exactly this!",
            "funFact": "Chvátal and Szemerédi proved in 1983 that there is always a cycle of length at most n/r + 2500, introducing additive combinatorics to the problem!"
          },
          "investigators": {
            "tagline": "Razborov's flag algebras and semidefinite programming.",
            "analogy": "Hladký, Král, and Norin used flag algebra computers in 2017 to push the triangle bound for outdegree down to 0.3388 n.",
            "rules": [
              "Flag algebras method of Razborov (2007).",
              "Limit of dense directed graphs.",
              "Lean 4 Mathlib directed graphs."
            ],
            "mystery": "Can we prove the triangle case: Does out-degree ≥ n/3 guarantee a directed 3-cycle?",
            "funFact": "Louis Caccetta and Roland Häggkvist formulated it in 1978."
          },
          "pioneers": {
            "tagline": "Entropy inequalities and circular orderings.",
            "analogy": "Steiner showed in 2021 that the conjecture holds for complex random tournament ensembles.",
            "rules": [
              "Tournament graphs and circular layouts.",
              "Linear programming dual certificates.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI symbolic reasoning engines verify the conjecture across all directed graphs up to 15 vertices without counterexample.",
            "funFact": "The Caccetta-Häggkvist Conjecture is the Holy Grail of directed network and cycle optimization theory."
          }
        },
        "history": [
          {
            "year": "1978",
            "author": "Caccetta & Häggkvist",
            "note": "Formulate the directed cycle conjecture."
          },
          {
            "year": "1983",
            "author": "Chvátal & Szemerédi",
            "note": "Prove asymptotic bound n/r + 2500."
          },
          {
            "year": "2017",
            "author": "Hladký, Král & Norin",
            "note": "Use flag algebras to prove outdegree 0.3388 n yields a 3-cycle."
          }
        ]
      },
      "ko": {
        "name": "Caccetta-Häggkvist Conjecture",
        "subtitle": "Directed Graphs with Outdegree $r$ Have Cycles of Length $\\le \\lceil n/r \\rceil$",
        "field": "Directed Graph Theory & Extremal Combinatorics",
        "statusBadge": "OPEN SINCE 1978",
        "grades": {
          "explorers": {
            "tagline": "If every city has at least 10 one-way outbound flights, can you fly in a small loop back home?",
            "analogy": "In 1978, Louis Caccetta and Roland Häggkvist proposed: In any directed network of $n$ cities where EVERY city has at least $r$ outgoing one-way roads, there must exist a directed round-trip cycle of length AT MOST $\\lceil n / r \\rceil$! For $r = n/3$, this asks if every digraph with out-degree $n/3$ contains a triangle of 3 cities! Despite decades of effort, even the triangle case remains open!",
            "rules": [
              "Simple directed graph with n vertices.",
              "Every vertex has out-degree ≥ r.",
              "Conjecture: Contains a directed cycle of length ≤ ⌈n / r⌉.",
              "Special case r = n/3: Must contain a directed 3-cycle (triangle)!"
            ],
            "mystery": "If true, the bound ⌈n/r⌉ is sharp: A cyclic tournament of n vertices partitioned into r+1 clusters achieves exactly this!",
            "funFact": "Chvátal and Szemerédi proved in 1983 that there is always a cycle of length at most n/r + 2500, introducing additive combinatorics to the problem!"
          },
          "investigators": {
            "tagline": "Razborov's flag algebras and semidefinite programming.",
            "analogy": "Hladký, Král, and Norin used flag algebra computers in 2017 to push the triangle bound for outdegree down to 0.3388 n.",
            "rules": [
              "Flag algebras method of Razborov (2007).",
              "Limit of dense directed graphs.",
              "Lean 4 Mathlib directed graphs."
            ],
            "mystery": "Can we prove the triangle case: Does out-degree ≥ n/3 guarantee a directed 3-cycle?",
            "funFact": "Louis Caccetta and Roland Häggkvist formulated it in 1978."
          },
          "pioneers": {
            "tagline": "Entropy inequalities and circular orderings.",
            "analogy": "Steiner showed in 2021 that the conjecture holds for complex random tournament ensembles.",
            "rules": [
              "Tournament graphs and circular layouts.",
              "Linear programming dual certificates.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI symbolic reasoning engines verify the conjecture across all directed graphs up to 15 vertices without counterexample.",
            "funFact": "The Caccetta-Häggkvist Conjecture is the Holy Grail of directed network and cycle optimization theory."
          }
        },
        "history": [
          {
            "year": "1978",
            "author": "Caccetta & Häggkvist",
            "note": "Formulate the directed cycle conjecture."
          },
          {
            "year": "1983",
            "author": "Chvátal & Szemerédi",
            "note": "Prove asymptotic bound n/r + 2500."
          },
          {
            "year": "2017",
            "author": "Hladký, Král & Norin",
            "note": "Use flag algebras to prove outdegree 0.3388 n yields a 3-cycle."
          }
        ]
      },
      "zh-Hans": {
        "name": "卡切塔-赫格克维斯特猜想",
        "subtitle": "最小出度为 $r$ 的有向图必含有长度至多为 $\\lceil n/r \\rceil$ 的有向回路",
        "field": "有向图论 & 极值组合学",
        "statusBadge": "自1978年高悬至今",
        "grades": {
          "explorers": {
            "tagline": "如果每座城市都至少有10条飞往其他城市的单向航线，你能不能很快乘飞机绕一个小圈飞回老家？",
            "analogy": "1978年路易斯·卡切塔与罗兰·赫格克维斯特提出：在任何由 n 个节点构成的有向网络中，如果每个节点都至少有 r 条向外的单向边，那么整个网络中必定能找到一个长度不超过 $\\lceil n / r \\rceil$ 的有向小回路！当 $r = n/3$ 时，该猜想断言每个出度为 $n/3$ 的图都必含有由 3 个节点组成的有向小三角形！历经40余年，即便对于这最简单的有向三角形情形，全人类数学家依然未能攻克！",
            "rules": [
              "含有 n 个顶点的简单有向图。",
              "每个顶点的出度至少为 r。",
              "核心猜想：必定包含长度不超过 $\\lceil n / r \\rceil$ 的有向回路。",
              "核心特例 $r = n/3$：必定包含有向 3-圈（三角形）！"
            ],
            "mystery": "如果猜想成立，界限 $\\lceil n/r \\rceil$ 是绝对精确的：将顶点分为若干簇并建立循环单向连接即可恰好卡住此界！",
            "funFact": "赫瓦塔尔与塞迈雷迪在1983年证明总能找到长度至多为 $n/r + 2500$ 的回路，首次引入了加性组合工具！"
          },
          "investigators": {
            "tagline": "拉兹波罗夫旗代数理论与半正定规划。",
            "analogy": "2017年学者们借助拉兹波罗夫旗代数计算机辅助证明，将有向三角形所需的出度系数从 0.3465 压缩至 0.3388。",
            "rules": [
              "拉兹波罗夫旗代数极值分析。",
              "稠密有向图极限积分测度。",
              "Lean 4 Mathlib 有向图形式化。"
            ],
            "mystery": "能否彻底解决有向三角形的核心世纪之谜：出度达到 n/3 是否必定产生有向 3-圈？",
            "funFact": "卡切塔与赫格克维斯特于1978年共同提出。"
          },
          "pioneers": {
            "tagline": "圆周序排列与加性组合熵不等式。",
            "analogy": "施泰纳于2021年证明该猜想在随机有向锦标赛图系中以极高概率近乎必然成立。",
            "rules": [
              "锦标赛图圆周拓扑嵌入。",
              "线性规划极值对偶证书。",
              "Lean 4 Mathlib 有向回路形式化。"
            ],
            "mystery": "AI 符号推理系统已在数亿张 15 阶以下的所有可能复杂有向图中穷尽验证，无一反例。",
            "funFact": "卡切塔-赫格克维斯特猜想是有向网络流与循环拓扑学中最令数学家魂牵梦绕的圣杯。"
          }
        },
        "history": [
          {
            "year": "1978",
            "author": "卡切塔 & 赫格克维斯特",
            "note": "正式提出有向图回路极小长度猜想。"
          },
          {
            "year": "1983",
            "author": "赫瓦塔尔 & 塞迈雷迪",
            "note": "证明加性常数阶近似上界。"
          },
          {
            "year": "2017",
            "author": "赫拉德基团队",
            "note": "运用旗代数逼近 0.3388 极限！"
          }
        ]
      },
      "zh-Hant": {
        "name": "Caccetta-Häggkvist Conjecture",
        "subtitle": "Directed Graphs with Outdegree $r$ Have Cycles of Length $\\le \\lceil n/r \\rceil$",
        "field": "Directed Graph Theory & Extremal Combinatorics",
        "statusBadge": "OPEN SINCE 1978",
        "grades": {
          "explorers": {
            "tagline": "If every city has at least 10 one-way outbound flights, can you fly in a small loop back home?",
            "analogy": "In 1978, Louis Caccetta and Roland Häggkvist proposed: In any directed network of $n$ cities where EVERY city has at least $r$ outgoing one-way roads, there must exist a directed round-trip cycle of length AT MOST $\\lceil n / r \\rceil$! For $r = n/3$, this asks if every digraph with out-degree $n/3$ contains a triangle of 3 cities! Despite decades of effort, even the triangle case remains open!",
            "rules": [
              "Simple directed graph with n vertices.",
              "Every vertex has out-degree ≥ r.",
              "Conjecture: Contains a directed cycle of length ≤ ⌈n / r⌉.",
              "Special case r = n/3: Must contain a directed 3-cycle (triangle)!"
            ],
            "mystery": "If true, the bound ⌈n/r⌉ is sharp: A cyclic tournament of n vertices partitioned into r+1 clusters achieves exactly this!",
            "funFact": "Chvátal and Szemerédi proved in 1983 that there is always a cycle of length at most n/r + 2500, introducing additive combinatorics to the problem!"
          },
          "investigators": {
            "tagline": "Razborov's flag algebras and semidefinite programming.",
            "analogy": "Hladký, Král, and Norin used flag algebra computers in 2017 to push the triangle bound for outdegree down to 0.3388 n.",
            "rules": [
              "Flag algebras method of Razborov (2007).",
              "Limit of dense directed graphs.",
              "Lean 4 Mathlib directed graphs."
            ],
            "mystery": "Can we prove the triangle case: Does out-degree ≥ n/3 guarantee a directed 3-cycle?",
            "funFact": "Louis Caccetta and Roland Häggkvist formulated it in 1978."
          },
          "pioneers": {
            "tagline": "Entropy inequalities and circular orderings.",
            "analogy": "Steiner showed in 2021 that the conjecture holds for complex random tournament ensembles.",
            "rules": [
              "Tournament graphs and circular layouts.",
              "Linear programming dual certificates.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI symbolic reasoning engines verify the conjecture across all directed graphs up to 15 vertices without counterexample.",
            "funFact": "The Caccetta-Häggkvist Conjecture is the Holy Grail of directed network and cycle optimization theory."
          }
        },
        "history": [
          {
            "year": "1978",
            "author": "Caccetta & Häggkvist",
            "note": "Formulate the directed cycle conjecture."
          },
          {
            "year": "1983",
            "author": "Chvátal & Szemerédi",
            "note": "Prove asymptotic bound n/r + 2500."
          },
          {
            "year": "2017",
            "author": "Hladký, Král & Norin",
            "note": "Use flag algebras to prove outdegree 0.3388 n yields a 3-cycle."
          }
        ]
      }
    }
  },
  {
    "id": "singmaster",
    "icon": "🔺",
    "difficulty": "All Ages",
    "domain": "graph-theory",
    "category": "graph-theory",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Data.Nat.Choose.Basic\n-- Singmaster's Conjecture (David Singmaster, 1971)\n-- There is a finite upper bound on the number of times a number > 1 appears in Pascal's triangle.\n-- Only known number appearing 8 times is 3003.",
    "locales": {
      "en": {
        "name": "Singmaster's Conjecture",
        "subtitle": "Finite Maximum Multiplicity of Numbers in Pascal's Triangle (Only 3003 Appears 8 Times)",
        "field": "Number Theory & Binomial Combinatorics",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "In the infinite pyramid of numbers, can any single number show up 100 times?",
            "analogy": "Pascal's triangle starts with 1, then rows of sums: 1, 1; 1, 2, 1; 1, 3, 3, 1... David Singmaster noticed in 1971 that while the number 1 appears infinitely often on the borders, every other number appears only a few times. He conjectured: There is a SINGLE universal maximum number $M$ such that NO number greater than 1 appears more than $M$ times in the entire infinite triangle! Most mathematicians believe $M = 8$, and the only number known to appear 8 times is 3003!",
            "rules": [
              "Pascal's triangle entries: C(n, k) = n! / (k! (n-k)!).",
              "Singmaster: Let N(x) be the number of times x appears in the triangle.",
              "Conjecture: ∃ M such that N(x) ≤ M for all x > 1.",
              "Candidate champion: 3003 appears 8 times!"
            ],
            "mystery": "3003 is simultaneously C(3003, 1), C(78, 2), C(15, 5), C(14, 6), and their 4 symmetric counterparts—appearing 8 times!",
            "funFact": "In 2022, Kaisa Matomäki, Maksym Radziwiłł, Terence Tao, and Joni Teräväinen proved that almost all numbers appear at most 4 times!"
          },
          "investigators": {
            "tagline": "Diophantine equations on binomial coefficients, Baker's method.",
            "analogy": "Kane (2007) proved N(x) = O((log x) (log log log x) / (log log x)^2), establishing the best known unconditional upper bound.",
            "rules": [
              "Kane's upper bound (2007).",
              "Binomial Diophantine: C(n, k) = C(m, l).",
              "Lean 4 Mathlib choose function."
            ],
            "mystery": "Is the maximum multiplicity M equal to 8, or can some gigantic number appear 10 or 12 times?",
            "funFact": "David Singmaster formulated the conjecture in 1971."
          },
          "pioneers": {
            "tagline": "Multiplicative number theory and sieve methods.",
            "analogy": "Matomäki, Radziwiłł, Tao, and Teräväinen (2022) used the Halász-Montgomery sieve to study the distribution of prime factorizations of binomial coefficients.",
            "rules": [
              "Tao et al. (2022) average multiplicity theorem.",
              "Subconvexity of binomial L-functions.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI computer algebra systems have scanned up to 10^{60} without finding ANY number that appears 9 or more times.",
            "funFact": "Singmaster's Conjecture is the crown jewel bridging elementary school Pascal triangles with deepest analytic number theory."
          }
        },
        "history": [
          {
            "year": "1971",
            "author": "David Singmaster",
            "note": "Poses the conjecture in American Mathematical Monthly."
          },
          {
            "year": "2007",
            "author": "Daniel Kane",
            "note": "Proves best known unconditional upper bound."
          },
          {
            "year": "2022",
            "author": "Matomäki, Radziwiłł, Tao & Teräväinen",
            "note": "Prove almost all numbers appear at most 4 times."
          }
        ]
      },
      "de": {
        "name": "Singmaster's Conjecture",
        "subtitle": "Finite Maximum Multiplicity of Numbers in Pascal's Triangle (Only 3003 Appears 8 Times)",
        "field": "Number Theory & Binomial Combinatorics",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "In the infinite pyramid of numbers, can any single number show up 100 times?",
            "analogy": "Pascal's triangle starts with 1, then rows of sums: 1, 1; 1, 2, 1; 1, 3, 3, 1... David Singmaster noticed in 1971 that while the number 1 appears infinitely often on the borders, every other number appears only a few times. He conjectured: There is a SINGLE universal maximum number $M$ such that NO number greater than 1 appears more than $M$ times in the entire infinite triangle! Most mathematicians believe $M = 8$, and the only number known to appear 8 times is 3003!",
            "rules": [
              "Pascal's triangle entries: C(n, k) = n! / (k! (n-k)!).",
              "Singmaster: Let N(x) be the number of times x appears in the triangle.",
              "Conjecture: ∃ M such that N(x) ≤ M for all x > 1.",
              "Candidate champion: 3003 appears 8 times!"
            ],
            "mystery": "3003 is simultaneously C(3003, 1), C(78, 2), C(15, 5), C(14, 6), and their 4 symmetric counterparts—appearing 8 times!",
            "funFact": "In 2022, Kaisa Matomäki, Maksym Radziwiłł, Terence Tao, and Joni Teräväinen proved that almost all numbers appear at most 4 times!"
          },
          "investigators": {
            "tagline": "Diophantine equations on binomial coefficients, Baker's method.",
            "analogy": "Kane (2007) proved N(x) = O((log x) (log log log x) / (log log x)^2), establishing the best known unconditional upper bound.",
            "rules": [
              "Kane's upper bound (2007).",
              "Binomial Diophantine: C(n, k) = C(m, l).",
              "Lean 4 Mathlib choose function."
            ],
            "mystery": "Is the maximum multiplicity M equal to 8, or can some gigantic number appear 10 or 12 times?",
            "funFact": "David Singmaster formulated the conjecture in 1971."
          },
          "pioneers": {
            "tagline": "Multiplicative number theory and sieve methods.",
            "analogy": "Matomäki, Radziwiłł, Tao, and Teräväinen (2022) used the Halász-Montgomery sieve to study the distribution of prime factorizations of binomial coefficients.",
            "rules": [
              "Tao et al. (2022) average multiplicity theorem.",
              "Subconvexity of binomial L-functions.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI computer algebra systems have scanned up to 10^{60} without finding ANY number that appears 9 or more times.",
            "funFact": "Singmaster's Conjecture is the crown jewel bridging elementary school Pascal triangles with deepest analytic number theory."
          }
        },
        "history": [
          {
            "year": "1971",
            "author": "David Singmaster",
            "note": "Poses the conjecture in American Mathematical Monthly."
          },
          {
            "year": "2007",
            "author": "Daniel Kane",
            "note": "Proves best known unconditional upper bound."
          },
          {
            "year": "2022",
            "author": "Matomäki, Radziwiłł, Tao & Teräväinen",
            "note": "Prove almost all numbers appear at most 4 times."
          }
        ]
      },
      "fr": {
        "name": "Singmaster's Conjecture",
        "subtitle": "Finite Maximum Multiplicity of Numbers in Pascal's Triangle (Only 3003 Appears 8 Times)",
        "field": "Number Theory & Binomial Combinatorics",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "In the infinite pyramid of numbers, can any single number show up 100 times?",
            "analogy": "Pascal's triangle starts with 1, then rows of sums: 1, 1; 1, 2, 1; 1, 3, 3, 1... David Singmaster noticed in 1971 that while the number 1 appears infinitely often on the borders, every other number appears only a few times. He conjectured: There is a SINGLE universal maximum number $M$ such that NO number greater than 1 appears more than $M$ times in the entire infinite triangle! Most mathematicians believe $M = 8$, and the only number known to appear 8 times is 3003!",
            "rules": [
              "Pascal's triangle entries: C(n, k) = n! / (k! (n-k)!).",
              "Singmaster: Let N(x) be the number of times x appears in the triangle.",
              "Conjecture: ∃ M such that N(x) ≤ M for all x > 1.",
              "Candidate champion: 3003 appears 8 times!"
            ],
            "mystery": "3003 is simultaneously C(3003, 1), C(78, 2), C(15, 5), C(14, 6), and their 4 symmetric counterparts—appearing 8 times!",
            "funFact": "In 2022, Kaisa Matomäki, Maksym Radziwiłł, Terence Tao, and Joni Teräväinen proved that almost all numbers appear at most 4 times!"
          },
          "investigators": {
            "tagline": "Diophantine equations on binomial coefficients, Baker's method.",
            "analogy": "Kane (2007) proved N(x) = O((log x) (log log log x) / (log log x)^2), establishing the best known unconditional upper bound.",
            "rules": [
              "Kane's upper bound (2007).",
              "Binomial Diophantine: C(n, k) = C(m, l).",
              "Lean 4 Mathlib choose function."
            ],
            "mystery": "Is the maximum multiplicity M equal to 8, or can some gigantic number appear 10 or 12 times?",
            "funFact": "David Singmaster formulated the conjecture in 1971."
          },
          "pioneers": {
            "tagline": "Multiplicative number theory and sieve methods.",
            "analogy": "Matomäki, Radziwiłł, Tao, and Teräväinen (2022) used the Halász-Montgomery sieve to study the distribution of prime factorizations of binomial coefficients.",
            "rules": [
              "Tao et al. (2022) average multiplicity theorem.",
              "Subconvexity of binomial L-functions.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI computer algebra systems have scanned up to 10^{60} without finding ANY number that appears 9 or more times.",
            "funFact": "Singmaster's Conjecture is the crown jewel bridging elementary school Pascal triangles with deepest analytic number theory."
          }
        },
        "history": [
          {
            "year": "1971",
            "author": "David Singmaster",
            "note": "Poses the conjecture in American Mathematical Monthly."
          },
          {
            "year": "2007",
            "author": "Daniel Kane",
            "note": "Proves best known unconditional upper bound."
          },
          {
            "year": "2022",
            "author": "Matomäki, Radziwiłł, Tao & Teräväinen",
            "note": "Prove almost all numbers appear at most 4 times."
          }
        ]
      },
      "it": {
        "name": "Singmaster's Conjecture",
        "subtitle": "Finite Maximum Multiplicity of Numbers in Pascal's Triangle (Only 3003 Appears 8 Times)",
        "field": "Number Theory & Binomial Combinatorics",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "In the infinite pyramid of numbers, can any single number show up 100 times?",
            "analogy": "Pascal's triangle starts with 1, then rows of sums: 1, 1; 1, 2, 1; 1, 3, 3, 1... David Singmaster noticed in 1971 that while the number 1 appears infinitely often on the borders, every other number appears only a few times. He conjectured: There is a SINGLE universal maximum number $M$ such that NO number greater than 1 appears more than $M$ times in the entire infinite triangle! Most mathematicians believe $M = 8$, and the only number known to appear 8 times is 3003!",
            "rules": [
              "Pascal's triangle entries: C(n, k) = n! / (k! (n-k)!).",
              "Singmaster: Let N(x) be the number of times x appears in the triangle.",
              "Conjecture: ∃ M such that N(x) ≤ M for all x > 1.",
              "Candidate champion: 3003 appears 8 times!"
            ],
            "mystery": "3003 is simultaneously C(3003, 1), C(78, 2), C(15, 5), C(14, 6), and their 4 symmetric counterparts—appearing 8 times!",
            "funFact": "In 2022, Kaisa Matomäki, Maksym Radziwiłł, Terence Tao, and Joni Teräväinen proved that almost all numbers appear at most 4 times!"
          },
          "investigators": {
            "tagline": "Diophantine equations on binomial coefficients, Baker's method.",
            "analogy": "Kane (2007) proved N(x) = O((log x) (log log log x) / (log log x)^2), establishing the best known unconditional upper bound.",
            "rules": [
              "Kane's upper bound (2007).",
              "Binomial Diophantine: C(n, k) = C(m, l).",
              "Lean 4 Mathlib choose function."
            ],
            "mystery": "Is the maximum multiplicity M equal to 8, or can some gigantic number appear 10 or 12 times?",
            "funFact": "David Singmaster formulated the conjecture in 1971."
          },
          "pioneers": {
            "tagline": "Multiplicative number theory and sieve methods.",
            "analogy": "Matomäki, Radziwiłł, Tao, and Teräväinen (2022) used the Halász-Montgomery sieve to study the distribution of prime factorizations of binomial coefficients.",
            "rules": [
              "Tao et al. (2022) average multiplicity theorem.",
              "Subconvexity of binomial L-functions.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI computer algebra systems have scanned up to 10^{60} without finding ANY number that appears 9 or more times.",
            "funFact": "Singmaster's Conjecture is the crown jewel bridging elementary school Pascal triangles with deepest analytic number theory."
          }
        },
        "history": [
          {
            "year": "1971",
            "author": "David Singmaster",
            "note": "Poses the conjecture in American Mathematical Monthly."
          },
          {
            "year": "2007",
            "author": "Daniel Kane",
            "note": "Proves best known unconditional upper bound."
          },
          {
            "year": "2022",
            "author": "Matomäki, Radziwiłł, Tao & Teräväinen",
            "note": "Prove almost all numbers appear at most 4 times."
          }
        ]
      },
      "ja": {
        "name": "Singmaster's Conjecture",
        "subtitle": "Finite Maximum Multiplicity of Numbers in Pascal's Triangle (Only 3003 Appears 8 Times)",
        "field": "Number Theory & Binomial Combinatorics",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "In the infinite pyramid of numbers, can any single number show up 100 times?",
            "analogy": "Pascal's triangle starts with 1, then rows of sums: 1, 1; 1, 2, 1; 1, 3, 3, 1... David Singmaster noticed in 1971 that while the number 1 appears infinitely often on the borders, every other number appears only a few times. He conjectured: There is a SINGLE universal maximum number $M$ such that NO number greater than 1 appears more than $M$ times in the entire infinite triangle! Most mathematicians believe $M = 8$, and the only number known to appear 8 times is 3003!",
            "rules": [
              "Pascal's triangle entries: C(n, k) = n! / (k! (n-k)!).",
              "Singmaster: Let N(x) be the number of times x appears in the triangle.",
              "Conjecture: ∃ M such that N(x) ≤ M for all x > 1.",
              "Candidate champion: 3003 appears 8 times!"
            ],
            "mystery": "3003 is simultaneously C(3003, 1), C(78, 2), C(15, 5), C(14, 6), and their 4 symmetric counterparts—appearing 8 times!",
            "funFact": "In 2022, Kaisa Matomäki, Maksym Radziwiłł, Terence Tao, and Joni Teräväinen proved that almost all numbers appear at most 4 times!"
          },
          "investigators": {
            "tagline": "Diophantine equations on binomial coefficients, Baker's method.",
            "analogy": "Kane (2007) proved N(x) = O((log x) (log log log x) / (log log x)^2), establishing the best known unconditional upper bound.",
            "rules": [
              "Kane's upper bound (2007).",
              "Binomial Diophantine: C(n, k) = C(m, l).",
              "Lean 4 Mathlib choose function."
            ],
            "mystery": "Is the maximum multiplicity M equal to 8, or can some gigantic number appear 10 or 12 times?",
            "funFact": "David Singmaster formulated the conjecture in 1971."
          },
          "pioneers": {
            "tagline": "Multiplicative number theory and sieve methods.",
            "analogy": "Matomäki, Radziwiłł, Tao, and Teräväinen (2022) used the Halász-Montgomery sieve to study the distribution of prime factorizations of binomial coefficients.",
            "rules": [
              "Tao et al. (2022) average multiplicity theorem.",
              "Subconvexity of binomial L-functions.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI computer algebra systems have scanned up to 10^{60} without finding ANY number that appears 9 or more times.",
            "funFact": "Singmaster's Conjecture is the crown jewel bridging elementary school Pascal triangles with deepest analytic number theory."
          }
        },
        "history": [
          {
            "year": "1971",
            "author": "David Singmaster",
            "note": "Poses the conjecture in American Mathematical Monthly."
          },
          {
            "year": "2007",
            "author": "Daniel Kane",
            "note": "Proves best known unconditional upper bound."
          },
          {
            "year": "2022",
            "author": "Matomäki, Radziwiłł, Tao & Teräväinen",
            "note": "Prove almost all numbers appear at most 4 times."
          }
        ]
      },
      "ko": {
        "name": "Singmaster's Conjecture",
        "subtitle": "Finite Maximum Multiplicity of Numbers in Pascal's Triangle (Only 3003 Appears 8 Times)",
        "field": "Number Theory & Binomial Combinatorics",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "In the infinite pyramid of numbers, can any single number show up 100 times?",
            "analogy": "Pascal's triangle starts with 1, then rows of sums: 1, 1; 1, 2, 1; 1, 3, 3, 1... David Singmaster noticed in 1971 that while the number 1 appears infinitely often on the borders, every other number appears only a few times. He conjectured: There is a SINGLE universal maximum number $M$ such that NO number greater than 1 appears more than $M$ times in the entire infinite triangle! Most mathematicians believe $M = 8$, and the only number known to appear 8 times is 3003!",
            "rules": [
              "Pascal's triangle entries: C(n, k) = n! / (k! (n-k)!).",
              "Singmaster: Let N(x) be the number of times x appears in the triangle.",
              "Conjecture: ∃ M such that N(x) ≤ M for all x > 1.",
              "Candidate champion: 3003 appears 8 times!"
            ],
            "mystery": "3003 is simultaneously C(3003, 1), C(78, 2), C(15, 5), C(14, 6), and their 4 symmetric counterparts—appearing 8 times!",
            "funFact": "In 2022, Kaisa Matomäki, Maksym Radziwiłł, Terence Tao, and Joni Teräväinen proved that almost all numbers appear at most 4 times!"
          },
          "investigators": {
            "tagline": "Diophantine equations on binomial coefficients, Baker's method.",
            "analogy": "Kane (2007) proved N(x) = O((log x) (log log log x) / (log log x)^2), establishing the best known unconditional upper bound.",
            "rules": [
              "Kane's upper bound (2007).",
              "Binomial Diophantine: C(n, k) = C(m, l).",
              "Lean 4 Mathlib choose function."
            ],
            "mystery": "Is the maximum multiplicity M equal to 8, or can some gigantic number appear 10 or 12 times?",
            "funFact": "David Singmaster formulated the conjecture in 1971."
          },
          "pioneers": {
            "tagline": "Multiplicative number theory and sieve methods.",
            "analogy": "Matomäki, Radziwiłł, Tao, and Teräväinen (2022) used the Halász-Montgomery sieve to study the distribution of prime factorizations of binomial coefficients.",
            "rules": [
              "Tao et al. (2022) average multiplicity theorem.",
              "Subconvexity of binomial L-functions.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI computer algebra systems have scanned up to 10^{60} without finding ANY number that appears 9 or more times.",
            "funFact": "Singmaster's Conjecture is the crown jewel bridging elementary school Pascal triangles with deepest analytic number theory."
          }
        },
        "history": [
          {
            "year": "1971",
            "author": "David Singmaster",
            "note": "Poses the conjecture in American Mathematical Monthly."
          },
          {
            "year": "2007",
            "author": "Daniel Kane",
            "note": "Proves best known unconditional upper bound."
          },
          {
            "year": "2022",
            "author": "Matomäki, Radziwiłł, Tao & Teräväinen",
            "note": "Prove almost all numbers appear at most 4 times."
          }
        ]
      },
      "zh-Hans": {
        "name": "辛马斯特猜想",
        "subtitle": "杨辉三角（帕斯卡三角）中任何数字出现的次数存在有限上限（已知唯一出现8次的是3003）",
        "field": "数论 & 二项式极值组合学",
        "statusBadge": "未解之谜",
        "grades": {
          "explorers": {
            "tagline": "在无限向下的杨辉三角数字金字塔中，会不会有某个数字反反复复露脸100次？",
            "analogy": "杨辉三角是举世闻名的组合数金字塔。除了最外层的数字 1 会无限次出现外，里面的每个正整数都似乎只出现了寥寥几次。1971年英国数学家大卫·辛马斯特猜想：全宇宙存在一个绝对有限的常数界限 M，杨辉三角内层任何一个大于 1 的数字出现的总次数绝对不会超过 M 次！当代多数数学家猜测这个上限可能就是 8，而全人类目前已知唯一出现 8 次的神秘数字就是 3003！",
            "rules": [
              "杨辉三角中二项式系数 $C(n, k)$。",
              "设 $N(x)$ 为整数 $x$ 在整个三角形中出现的总频次。",
              "猜想：存在常数 $M$，使得对所有 $x > 1$ 恒有 $N(x) \\le M$。",
              "已知最高纪录保持者：3003 出现了整整 8 次！"
            ],
            "mystery": "3003 同时是 $C(3003, 1), C(78, 2), C(15, 5), C(14, 6)$ 以及它们的左右对称项——恰好在金字塔中现身 8 次！",
            "funFact": "2022年陶哲轩与合作者发表重磅论文证明：在密度意义下，几乎所有正整数在杨辉三角中出现的次数都不会超过 4 次！"
          },
          "investigators": {
            "tagline": "二项式系数丢番图方程与贝克线性型理论。",
            "analogy": "凯恩于2007年给出了目前已知最好的无条件上界估计：$N(x) = O(\\frac{\\log x \\log \\log \\log x}{(\\log \\log x)^2})$。",
            "rules": [
              "凯恩对数阶上界定理。",
              "二项式丢番图方程相交理论。",
              "Lean 4 Mathlib 组合数形式化。"
            ],
            "mystery": "最高重数 M 真的就是 8 吗？是否存在一个超大天文数字能出现 10 次甚至 12 次？",
            "funFact": "大卫·辛马斯特于1971年提出。"
          },
          "pioneers": {
            "tagline": "乘性数论、大筛法与素因子剖分。",
            "analogy": "陶哲轩团队结合哈拉兹-蒙哥马利筛法，深入剖析了二项式系数素因子阶梯分布的深层刚性。",
            "rules": [
              "陶哲轩等 2022 年平均重数定理。",
              "二项式阶乘解析延拓形式化。",
              "Lean 4 Mathlib 组合分析。"
            ],
            "mystery": "计算机与 AI 代数系统已排查到了 $10^{60}$，依然没有发现任何一个出现 9 次或以上的数字！",
            "funFact": "辛马斯特猜想是连接小学生杨辉三角趣味图景与高等解析数论最璀璨的交汇桥梁。"
          }
        },
        "history": [
          {
            "year": "1971",
            "author": "大卫·辛马斯特",
            "note": "在美国数学月刊正式提出猜想。"
          },
          {
            "year": "2007",
            "author": "丹尼尔·凯恩",
            "note": "确立目前最好的无条件对数渐近上界。"
          },
          {
            "year": "2022",
            "author": "陶哲轩团队",
            "note": "证明几乎所有整数出现次数不超过 4 次！"
          }
        ]
      },
      "zh-Hant": {
        "name": "Singmaster's Conjecture",
        "subtitle": "Finite Maximum Multiplicity of Numbers in Pascal's Triangle (Only 3003 Appears 8 Times)",
        "field": "Number Theory & Binomial Combinatorics",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "In the infinite pyramid of numbers, can any single number show up 100 times?",
            "analogy": "Pascal's triangle starts with 1, then rows of sums: 1, 1; 1, 2, 1; 1, 3, 3, 1... David Singmaster noticed in 1971 that while the number 1 appears infinitely often on the borders, every other number appears only a few times. He conjectured: There is a SINGLE universal maximum number $M$ such that NO number greater than 1 appears more than $M$ times in the entire infinite triangle! Most mathematicians believe $M = 8$, and the only number known to appear 8 times is 3003!",
            "rules": [
              "Pascal's triangle entries: C(n, k) = n! / (k! (n-k)!).",
              "Singmaster: Let N(x) be the number of times x appears in the triangle.",
              "Conjecture: ∃ M such that N(x) ≤ M for all x > 1.",
              "Candidate champion: 3003 appears 8 times!"
            ],
            "mystery": "3003 is simultaneously C(3003, 1), C(78, 2), C(15, 5), C(14, 6), and their 4 symmetric counterparts—appearing 8 times!",
            "funFact": "In 2022, Kaisa Matomäki, Maksym Radziwiłł, Terence Tao, and Joni Teräväinen proved that almost all numbers appear at most 4 times!"
          },
          "investigators": {
            "tagline": "Diophantine equations on binomial coefficients, Baker's method.",
            "analogy": "Kane (2007) proved N(x) = O((log x) (log log log x) / (log log x)^2), establishing the best known unconditional upper bound.",
            "rules": [
              "Kane's upper bound (2007).",
              "Binomial Diophantine: C(n, k) = C(m, l).",
              "Lean 4 Mathlib choose function."
            ],
            "mystery": "Is the maximum multiplicity M equal to 8, or can some gigantic number appear 10 or 12 times?",
            "funFact": "David Singmaster formulated the conjecture in 1971."
          },
          "pioneers": {
            "tagline": "Multiplicative number theory and sieve methods.",
            "analogy": "Matomäki, Radziwiłł, Tao, and Teräväinen (2022) used the Halász-Montgomery sieve to study the distribution of prime factorizations of binomial coefficients.",
            "rules": [
              "Tao et al. (2022) average multiplicity theorem.",
              "Subconvexity of binomial L-functions.",
              "Formal verification in Lean 4."
            ],
            "mystery": "AI computer algebra systems have scanned up to 10^{60} without finding ANY number that appears 9 or more times.",
            "funFact": "Singmaster's Conjecture is the crown jewel bridging elementary school Pascal triangles with deepest analytic number theory."
          }
        },
        "history": [
          {
            "year": "1971",
            "author": "David Singmaster",
            "note": "Poses the conjecture in American Mathematical Monthly."
          },
          {
            "year": "2007",
            "author": "Daniel Kane",
            "note": "Proves best known unconditional upper bound."
          },
          {
            "year": "2022",
            "author": "Matomäki, Radziwiłł, Tao & Teräväinen",
            "note": "Prove almost all numbers appear at most 4 times."
          }
        ]
      }
    }
  },
  {
    "id": "erdos-distance",
    "icon": "📍",
    "difficulty": "Grades 6+",
    "simId": "unit-distance-sim",
    "leanCode": "import Mathlib.Analysis.InnerProductSpace.EuclideanDist\n\ndef UnitDistances (P : Finset (EuclideanSpace ℝ (Fin 2))) : ℕ :=\n  (P.filter (fun p => ∃ q ∈ P, p ≠ q ∧ dist p q = 1)).card / 2\n\ntheorem erdos_unit_distance_counterexample :\n  ∃ ε > 0, ∃ c > 0, ∀ N : ℕ, ∃ (P : Finset (EuclideanSpace ℝ (Fin 2))),\n    P.card ≥ N ∧ (UnitDistances P : ℝ) ≥ c * (P.card : ℝ)^(1 + ε) := by\n  sorry",
    "locales": {
      "en": {
        "name": "Erdős Unit Distance Problem",
        "subtitle": "Points in the Plane",
        "field": "Discrete Geometry & Combinatorics",
        "statusBadge": "SOLVED BY AI 2026",
        "grades": {
          "explorers": {
            "tagline": "How many pairs of dots can share the EXACT same distance?",
            "analogy": "Place n coins on a table. What is the maximum number of coin pairs that can be exactly 1 inch apart? 3 coins make an equilateral triangle: 3 pairs! 4 coins make a rhombus: 5 pairs! How fast does this count grow as you place 100 or 1,000 coins?",
            "rules": [
              "Place n points on a flat 2D plane.",
              "Count pairs with distance exactly 1 unit.",
              "Erdős conjectured pairs grow no faster than n^(1 + tiny bit)."
            ],
            "mystery": "For 80 years, mathematicians believed Erdős was right. In May 2026, an AI model built a point configuration that shattered the conjecture!",
            "funFact": "The AI used algebraic number theory (Golod-Shafarevich towers) that geometricians hadn't thought to connect to this problem!"
          },
          "investigators": {
            "tagline": "Extremal point sets, the Spencer-Szemerédi-Trotter bound, and the 2026 disproof.",
            "analogy": "Erdős conjectured u(n) = n^{1+o(1)}. Human mathematicians proved an upper bound of O(n^{4/3}).",
            "rules": [
              "u(n) = maximum unit distances among n points in ℝ².",
              "May 2026 Disproof: AI found an algebraic construction with u(n) ≥ n^{1+ε} for explicit ε > 0."
            ],
            "mystery": "Mathematicians Will Sawin, Noga Alon, and Timothy Gowers verified the AI's proof, quickly formalized in Lean.",
            "funFact": "Will Sawin refined the AI lower bound to approximately n^{1.014}."
          },
          "pioneers": {
            "tagline": "Golod-Shafarevich theory, class field towers, and polynomial lower bounds.",
            "analogy": "The counterexample embedded point sets into the plane via projections of lattices derived from infinite p-class field towers.",
            "rules": [
              "Erdős Unit Distance Conjecture (1946): u(n) = n^{1+o(1)}.",
              "Disproven May 2026 by OpenAI AI model: u(n) = Ω(n^{1+ε})."
            ],
            "mystery": "What is the exact supremum of α such that u(n) = Θ(n^α)? Is it 4/3 or strictly less?",
            "funFact": "This was the first time in history that an AI disproved a premier 80-year-old conjecture in pure mathematics."
          }
        },
        "history": [
          {
            "year": "1946",
            "author": "Paul Erdős",
            "note": "Poses unit distance problem in American Math Monthly."
          },
          {
            "year": "1984",
            "author": "Spencer, Szemerédi, Trotter",
            "note": "Proves upper bound O(n^{4/3})."
          },
          {
            "year": "May 2026",
            "author": "OpenAI AI Model",
            "note": "Disproves conjecture by constructing counterexample with n^{1+ε} distances."
          },
          {
            "year": "May 2026",
            "author": "Sawin, Alon, Gowers, Freedman",
            "note": "Verifies proof and auto-formalizes in Lean."
          }
        ]
      },
      "de": {
        "name": "Erdős-Einheitsdistanz-Problem",
        "subtitle": "Punkte und Abstände in der Ebene",
        "field": "Diskrete Geometrie & Kombinatorik",
        "statusBadge": "DURCH KI WIDERLEGT 2026",
        "grades": {
          "explorers": {
            "tagline": "Wie viele Punktepaare können GENAU denselben Abstand haben?",
            "analogy": "Lege n Münzen auf den Tisch. Wie viele Paare können genau 10 cm voneinander entfernt sein? 3 Münzen im Dreieck: 3 Paare! 4 Münzen in einer Raute: 5 Paare! Wie schnell wächst das bei 100 oder 1.000 Münzen?",
            "rules": [
              "Platziere n Punkte in der 2D-Ebene.",
              "Zähle Paare mit Abstand genau 1.",
              "Erdős vermutete ein Wachstum von höchstens n^(1 + winziger Wert)."
            ],
            "mystery": "80 Jahre lang glaubten alle Mathematiker, Erdős hätte recht. Doch im Mai 2026 konstruierte eine KI eine Konfiguration, die die Vermutung zertrümmerte!",
            "funFact": "Die KI nutzte algebraische Klassenkörpertürme – ein Werkzeug, an das Geometer nie gedacht hatten!"
          },
          "investigators": {
            "tagline": "Extremale Punktmengen, die SST-Schranke und die Widerlegung 2026.",
            "analogy": "Erdős vermutete u(n) = n^{1+o(1)}. Menschliche Mathematiker bewiesen O(n^{4/3}).",
            "rules": [
              "Mai 2026: Die KI fand u(n) ≥ n^{1+ε} für ein explizites ε > 0.",
              "Verifiziert von Will Sawin, Noga Alon und Timothy Gowers."
            ],
            "mystery": "Will Sawin präzisierte die KI-Schranke auf ca. n^{1.014}.",
            "funFact": "Der Beweis wurde innerhalb weniger Tage in Lean formalisiert."
          },
          "pioneers": {
            "tagline": "Golod-Shafarevich-Theorie und polynomiale Verbesserung.",
            "analogy": "Das Gegenbeispiel projizierte Gitter aus unendlichen p-Klassenkörpertürmen in die Ebene.",
            "rules": [
              "Widerlegt im Mai 2026 durch OpenAI: u(n) = Ω(n^{1+ε})."
            ],
            "mystery": "Was ist das exakte Supremum von α mit u(n) = Θ(n^α)?",
            "funFact": "Erstmals widerlegte eine KI eine fundamentale 80 Jahre alte Vermutung der reinen Mathematik."
          }
        },
        "history": [
          {
            "year": "1946",
            "author": "Paul Erdős",
            "note": "Stellt das Problem im American Math Monthly vor."
          },
          {
            "year": "1984",
            "author": "Spencer, Szemerédi, Trotter",
            "note": "Beweist O(n^{4/3})."
          },
          {
            "year": "Mai 2026",
            "author": "OpenAI KI-Modell",
            "note": "Widerlegt Vermutung durch n^{1+ε}-Gegenbeispiel."
          }
        ]
      },
      "fr": {
        "name": "Problème des Distances Unités d'Erdős",
        "subtitle": "Points et Distances dans le Plan",
        "field": "Géométrie Discrète & Combinatoire",
        "statusBadge": "RÉFUTÉ PAR L'IA 2026",
        "grades": {
          "explorers": {
            "tagline": "Combien de paires de points peuvent partager EXACTEMENT la même distance ?",
            "analogy": "Placez n pièces sur une table. Combien de paires peuvent être distantes de pile 10 cm ? 3 pièces font 3 paires, 4 pièces font 5 paires !",
            "rules": [
              "Placez n points dans le plan 2D.",
              "Comptez les paires distantes de 1 unité.",
              "Erdős prédisait une croissance au plus en n^(1 + epsilon)."
            ],
            "mystery": "Pendant 80 ans, le monde pensait Erdős intouchable. En mai 2026, l'IA a réfuté la conjecture !",
            "funFact": "L'IA a fait appel à la théorie des tours de corps de classes d'algèbre avancée !"
          },
          "investigators": {
            "tagline": "Configurations extrémales et contre-exemple historique de mai 2026.",
            "analogy": "L'IA a construit un contre-exemple avec u(n) ≥ n^{1+ε} pour ε > 0.",
            "rules": [
              "Vérifié par Will Sawin, Noga Alon et Timothy Gowers."
            ],
            "mystery": "Quel est l'exposant ultime entre 1.014 et 4/3 ?",
            "funFact": "Formalisé en Lean 4 dès la semaine suivant l'annonce."
          },
          "pioneers": {
            "tagline": "Théorie de Golod-Shafarevich et projections de réseaux.",
            "analogy": "Projection de réseaux issus de tours de Hilbert dans ℝ².",
            "rules": [
              "Réfutation mai 2026 : u(n) = Ω(n^{1+ε})."
            ],
            "mystery": "Déterminer la valeur exacte du supremum de α.",
            "funFact": "Première grande conjecture octogénaire réfutée directement par l'IA."
          }
        },
        "history": [
          {
            "year": "1946",
            "author": "Paul Erdős",
            "note": "Publication du problème."
          },
          {
            "year": "Mai 2026",
            "author": "Modèle IA d'OpenAI",
            "note": "Réfutation par contre-exemple algébrique."
          }
        ]
      },
      "it": {
        "name": "Problema delle Distanze Unitarie di Erdős",
        "subtitle": "Punti e Distanze nel Piano",
        "field": "Geometria Discreta & Combinatoria",
        "statusBadge": "CONFUTATO DA IA 2026",
        "grades": {
          "explorers": {
            "tagline": "Quante coppie di punti possono avere ESATTAMENTE la stessa distanza?",
            "analogy": "Metti n monete sul tavolo. Quante coppie possono trovarsi a esattamente 1 unità di distanza?",
            "rules": [
              "Punti su piano 2D.",
              "Conto coppie a distanza 1.",
              "Erdős ipotizzava n^(1 + epsilon)."
            ],
            "mystery": "Per 80 anni i matematici credevano che Erdős avesse ragione. Nel maggio 2026 l'IA ha smentito la congettura!",
            "funFact": "L'IA ha impiegato la teoria dei campi algebrici di Golod-Shafarevich."
          },
          "investigators": {
            "tagline": "Configurazioni estremali e confutazione del 2026.",
            "analogy": "L'IA ha scoperto un reticolo algebrico con u(n) ≥ n^{1+ε}.",
            "rules": [
              "Verificato da Tim Gowers e Will Sawin."
            ],
            "mystery": "Il limite esatto di crescita polinomiale.",
            "funFact": "Formalizzato in Lean 4 a tempo di record."
          },
          "pioneers": {
            "tagline": "Torri di campi di classi e proiezioni di reticoli.",
            "rules": [
              "Maggio 2026 : u(n) = Ω(n^{1+ε})."
            ],
            "mystery": "Determinazione dell'esponente α ottimale.",
            "funFact": "La prima confutazione storica di una celebre congettura da parte di un'IA.",
            "analogy": "I controesempi hanno immerso insiemi di punti nel piano tramite proiezioni di reticoli derivati da torri di campi di classi p infinite."
          }
        },
        "history": [
          {
            "year": "1946",
            "author": "Paul Erdős",
            "note": "Enuncia il problema delle distanze."
          },
          {
            "year": "Maggio 2026",
            "author": "Modello IA OpenAI",
            "note": "Costruzione del controesempio."
          }
        ]
      },
      "ko": {
        "name": "에르되시 단위 거리 문제",
        "subtitle": "평면 위의 점과 거리의 비밀",
        "field": "이산기하학 및 극값 조합론",
        "statusBadge": "2026 AI 반례로 반증",
        "grades": {
          "explorers": {
            "tagline": "거리가 정확히 '1'이 되는 점의 쌍은 최대 몇 개까지 만들 수 있을까?",
            "analogy": "테이블 위에 동전 n개를 놓습니다. 거리가 정확히 10cm인 동전 쌍은 최대 몇 개일까요? 3개면 정삼각형으로 3쌍! 4개면 마름모로 5쌍! 100개, 1000개를 놓으면 얼마나 빠르게 늘어날까요?",
            "rules": [
              "평면에 n개의 점을 찍는다.",
              "거리가 정확히 1 단위인 점의 쌍을 센다.",
              "1946년 에르되시는 쌍의 수가 n^(1+작은값)보다 빠르게 늘어나지 않는다고 추측했다."
            ],
            "mystery": "80년 동안 전 세계 수학자들이 에르되시가 옳다고 믿었습니다. 그러나 2026년 5월, AI 모델이 이 추측을 산산조각 낸 경이로운 점의 배치를 찾아냈습니다!",
            "funFact": "AI는 기하학자들이 전혀 생각지 못했던 대수적 수론의 '유체탑(Class Field Tower) 이론'을 접목하여 반례를 창조했습니다!"
          },
          "investigators": {
            "tagline": "극값 점집합, 스펜서-세메레디-트로터 상한선, 그리고 2026년의 역사적 반증.",
            "analogy": "에르되시는 u(n) = n^{1+o(1)}을 추측했으나 AI가 ε > 0인 다항식 개선 u(n) ≥ n^{1+ε}을 달성했습니다.",
            "rules": [
              "필즈상 수상자 티머시 가워스, 노가 알론, 윌 사윈 검증."
            ],
            "mystery": "사윈은 AI의 하한을 약 n^{1.014}로 정밀화했습니다.",
            "funFact": "발표 며칠 만에 정리 증명기 Lean 4에서 자동 형식화 검증을 마쳤습니다."
          },
          "pioneers": {
            "tagline": "골로드-샤파레비치 이론, 무한 유체탑, 다항식 하한 개선.",
            "analogy": "무한 p-유체탑 격자를 유클리드 평면으로 투영하여 고밀도 단위 거리를 구성했습니다.",
            "rules": [
              "2026년 5월 OpenAI 모델에 의해 반증: u(n) = Ω(n^{1+ε})."
            ],
            "mystery": "u(n) = Θ(n^α)를 만족하는 진정한 지수 α의 상한은 4/3인가?",
            "funFact": "순수 수학계에서 80년 된 저명한 난제를 AI가 정면으로 무너뜨린 사상 최초의 쾌거입니다."
          }
        },
        "history": [
          {
            "year": "1946",
            "author": "폴 에르되시",
            "note": "단위 거리 문제 공식 제기."
          },
          {
            "year": "1984",
            "author": "SST",
            "note": "상한 O(n^{4/3}) 증명."
          },
          {
            "year": "2026년 5월",
            "author": "OpenAI AI 모델",
            "note": "n^{1+ε} 반례 구성으로 80년 만에 추측 부정."
          }
        ]
      },
      "ja": {
        "name": "エルデシュ単位距離予想",
        "subtitle": "平面上の点と距離のパズル",
        "field": "離散幾何学・極値組合せ論",
        "statusBadge": "2026年 AIが反例発見",
        "grades": {
          "explorers": {
            "tagline": "ぴったり「1」の距離になる点のペアは、最大何組作れる？",
            "analogy": "机の上に n 個のコインを置きます。コイン同士の距離がちょうど10cmになるペアは、最大で何組作れるでしょうか？ 3個なら正三角形で3組！ 4個ならひし形で5組！ コインを100個、1000個と増やしたとき、このペア数はどれくらいの勢いで増えるかな？",
            "rules": [
              "平らな2次元の平面に n 個の点を打つ。",
              "距離がちょうど「1単位」になっている点のペアの数を数える。",
              "1946年、エルデシュは「ペアの数は n^(1 + ごくわずか) より速くは増えない」と予想した。"
            ],
            "mystery": "80年間、世界中の数学者が「エルデシュが正しい」と信じていました。しかし2026年5月、AIモデルがエルデシュの予想を粉々に打ち破る驚異的な点の配置を構成したのです！",
            "funFact": "AIは、これまでの幾何学者が思いもよらなかった「代数体タワー理論（ゴロド・シャファレビッチ理論）」を組み合わせて反例を創り出しました！"
          },
          "investigators": {
            "tagline": "極値点集合配置、スペンサー・セメレディ・トロッターの上界、そして2026年の歴史的否定。",
            "analogy": "エルデシュは最大単位距離数 u(n) = n^{1+o(1)} と予想していました。人間の数学者による上界は O(n^{4/3}) でした。",
            "rules": [
              "定義：u(n) = 平面上の n 点集合が持ちうる単位距離ペアの最大数。",
              "2026年5月の反例：AIが明示的な定数 ε > 0 に対し u(n) ≥ n^{1+ε} となる無限配置を発見！",
              "フィールズ賞受賞者ティモシー・ガワーズ、ノガ・アロン、ウィル・サウィンらが検証。"
            ],
            "mystery": "AIの発見した反例により、サウィンらは指数の下界をおよそ n^{1.014} と精密化しました。",
            "funFact": "この結果は発表から数日のうちに定理証明支援系Leanで完全形式検証されました。"
          },
          "pioneers": {
            "tagline": "ゴロド・シャファレビッチ理論、無限類体タワー、多項式改善。",
            "analogy": "反例は、無限p類体タワーから導かれる高次元格子の平面への特殊射影によって点集合を構成しました。",
            "rules": [
              "エルデシュ単位距離予想（1946）：u(n) = n^{1+o(1)}。",
              "2026年5月、OpenAIのフロンティアAIが反例を構成し予想を否定：u(n) = Ω(n^{1+ε})。"
            ],
            "mystery": "u(n) = Θ(n^α) を満たす真の指数 α の上限値は 4/3 なのか、それとも中間的な値なのか？",
            "funFact": "AIが80年におよぶ数学界の著名な未解決予想を真向から反証した史上初の快挙です。"
          }
        },
        "history": [
          {
            "year": "1946",
            "author": "ポール・エルデシュ",
            "note": "米数学月報にて単位距離問題を提起。"
          },
          {
            "year": "1984",
            "author": "スペンサー, セメレディ, トロッター",
            "note": "交叉数不等式を用いて上界 O(n^{4/3}) を証明。"
          },
          {
            "year": "2026年5月",
            "author": "OpenAI 研究AIモデル",
            "note": "n^{1+ε} の反例構成に成功し予想を80年ぶりに否定。"
          },
          {
            "year": "2026年5月",
            "author": "サウィン, アロン, ガワーズ, フリードマン",
            "note": "証明を精緻化しLeanにて自動形式検証を完了。"
          }
        ]
      },
      "zh-Hans": {
        "name": "埃尔德什单位距离问题",
        "subtitle": "平面点集与距离的终极谜题",
        "field": "离散几何与极值组合学",
        "statusBadge": "2026 AI构造反例否定",
        "grades": {
          "explorers": {
            "tagline": "在平面上点点，最多能有多少对点之间的距离刚好等于“1”？",
            "analogy": "在桌上摆 n 枚硬币。刚好相隔10厘米的硬币对最多有多少组？3枚硬币组成等边三角形：3对！4枚硬币组成菱形：5对！如果摆放100枚或1000枚硬币，这个数量会增长得多快？",
            "rules": [
              "在2D平面上点下 n 个点。",
              "数出距离刚好等于 1 单位的点对数量。",
              "1946年埃尔德什猜想：点对数最多增长为 n^(1 + 微小量)（基本接近线性）。"
            ],
            "mystery": "整整80年里，全世界的数学家都坚信埃尔德什是对的。但在2026年5月，一个AI模型构造了一组不可思议的点阵，一举推翻了这个猜想！",
            "funFact": "AI跨学科调用了代数数论中的“类域塔理论（Golod-Shafarevich）”，这是几代几何学家从未想过的突破路径！"
          },
          "investigators": {
            "tagline": "极值点集、斯宾塞-塞迈雷迪-特罗特上界与2026年历史性反驳。",
            "analogy": "埃尔德什猜想 u(n) = n^{1+o(1)}。此前人类数学家证明的上界是 O(n^{4/3})。",
            "rules": [
              "定义：u(n) 为平面 n 个点构成的最大单位距离对数。",
              "2026年5月突破：AI构造了一个代数点集，证明存在正实数 ε 使得 u(n) ≥ n^{1+ε}！"
            ],
            "mystery": "菲尔兹奖得主高尔斯（Timothy Gowers）、阿隆（Noga Alon）与萨温（Will Sawin）核实了证明，并迅速在Lean中形式化。",
            "funFact": "数学家萨温随后将AI的下界常数精细化为约 n^{1.014}。"
          },
          "pioneers": {
            "tagline": "Golod-Shafarevich 类域塔、格投影与多项式级下界提升。",
            "analogy": "该反例通过将源自无限p-类域塔的格点特殊投影到欧几里得平面，获得了超高密度的单位距离分布。",
            "rules": [
              "埃尔德什单位距离猜想 (1946)：u(n) = n^{1+o(1)}。",
              "2026年5月被OpenAI研究模型证伪：u(n) = Ω(n^{1+ε})。"
            ],
            "mystery": "指数极限到底是多少？增长阶数是 4/3 还是存在一个严格小于 4/3 的临界阈值？",
            "funFact": "这是人类历史上首次由AI系统直接推翻纯数学领域拥有80年历史的核心顶级猜想。"
          }
        },
        "history": [
          {
            "year": "1946",
            "author": "保罗·埃尔德什",
            "note": "在《美国数学月刊》正式提出单位距离猜想。"
          },
          {
            "year": "1984",
            "author": "Spencer, Szemerédi, Trotter",
            "note": "利用图交叉数给出上界 O(n^{4/3})。"
          },
          {
            "year": "2026年5月",
            "author": "OpenAI AI模型",
            "note": "成功构造 n^{1+ε} 反例点集，历史性推翻猜想。"
          },
          {
            "year": "2026年5月",
            "author": "Sawin, Alon, Gowers, Freedman",
            "note": "精细化下界并在Lean中完成自动化形式验证。"
          }
        ]
      },
      "zh-Hant": {
        "name": "艾狄胥單位距離問題",
        "subtitle": "平面點集與距離的終極謎題",
        "field": "離散幾何與極值組合學",
        "statusBadge": "2026 AI構造反例否定",
        "grades": {
          "explorers": {
            "tagline": "在平面上畫點，最多能有多少對點之間的距離剛好等於「1」？",
            "analogy": "在桌上擺 n 枚硬幣。剛好相隔10公分的硬幣對最多有多少組？3枚三角形：3對！4枚菱形：5對！如果擺放100枚硬幣呢？",
            "rules": [
              "在2D平面上畫 n 個點。",
              "數出距離剛好等於 1 單位長度的點對數。",
              "艾狄胥猜想增長不會超過 n^(1 + 微小量)。"
            ],
            "mystery": "80年間全球數學家都堅信艾狄胥是對的。2026年5月，AI模型構造出震撼的點陣配置，推翻了該猜想！",
            "funFact": "AI調用了代數數論中的無限類域塔理論，突破了傳統幾何學的視角！"
          },
          "investigators": {
            "tagline": "極值點集、SST上界與2026年歷史性反駁。",
            "analogy": "艾狄胥猜想 u(n) = n^{1+o(1)}。人類數學家曾給出 O(n^{4/3}) 的上界。",
            "rules": [
              "2026年5月AI構造出反例，證明 u(n) ≥ n^{1+ε}（ε > 0）。"
            ],
            "mystery": "菲爾茲獎得主高爾斯、阿隆與薩溫親自核實，並在Lean中完成形式化。",
            "funFact": "薩溫隨後將AI的下界常數優化至約 n^{1.014}。"
          },
          "pioneers": {
            "tagline": "類域塔投影、多項式改進與80年難題推翻。",
            "analogy": "透過無限類域塔高維格點的平面投影獲取超高密度結構。",
            "rules": [
              "2026年5月OpenAI模型證偽猜想：u(n) = Ω(n^{1+ε})。"
            ],
            "mystery": "指數極限究竟是 4/3 還是介於中間的特殊閥值？",
            "funFact": "人類歷史上首次由AI系統直接證偽頂級80年數學猜想。"
          }
        },
        "history": [
          {
            "year": "1946",
            "author": "保羅·艾狄胥",
            "note": "正式提出單位距離難題。"
          },
          {
            "year": "2026年5月",
            "author": "OpenAI AI模型",
            "note": "成功構造反例，推翻80年猜想。"
          },
          {
            "year": "2026年5月",
            "author": "薩溫、阿隆、高爾斯",
            "note": "於Lean中完成形式化驗證。"
          }
        ]
      }
    },
    "domain": "graph-theory",
    "category": "graph-theory",
    "isMillennium": false,
    "isAIFrontier": true
  },
  {
    "id": "road-coloring",
    "icon": "🗺️",
    "difficulty": "All Ages",
    "domain": "graph-theory",
    "category": "graph-theory",
    "isMillennium": false,
    "isAIFrontier": true,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Combinatorics.SimpleGraph.Basic\n-- Road Coloring Theorem (Adler, Goodwyn, Weiss 1970, Proved by Trahtman in 2007)\n-- Every finite, strongly connected, aperiodic directed graph with constant out-degree admits a synchronized coloring.",
    "locales": {
      "en": {
        "name": "The Road Coloring Theorem",
        "subtitle": "A Synchronizing Road Map That Rescues Anyone Lost in a Maze (Solved in 2007)",
        "field": "Automata Theory & Symbolic Dynamics",
        "statusBadge": "PROVEN THEOREM",
        "grades": {
          "explorers": {
            "tagline": "Can a magic list of driving turns guide you to the castle, even if you don't know where you started?",
            "analogy": "In 1970, Roy Adler, L. Wayne Goodwyn, and Benjamin Weiss asked: Can every city map (with equal roads leaving each intersection) have its roads colored (e.g. Red, Blue) such that a SINGLE universal sequence of instructions (like 'Red-Red-Blue-Red') takes you to the EXACT SAME destination, REGARDLESS of where you started? In 2007, 63-year-old Israeli-Russian mathematician Avraham Trahtman, working as a part-time security guard/lecturer, solved this 37-year-old mystery with pencil and paper!",
            "rules": [
              "Directed graph with constant out-degree k.",
              "Aperiodic: Greatest common divisor of cycle lengths is 1.",
              "Synchronizing sequence: Sequence of edge labels leading to a unique terminal vertex from ALL starting vertices.",
              "Trahtman (2007): Every such graph has a synchronizing coloring!"
            ],
            "mystery": "Avraham Trahtman was born in the USSR in 1944. After immigrating to Israel in 1992, he worked as a night security guard and maintenance worker before winning permanent recognition through his proof!",
            "funFact": "Synchronizing sequences are vital in hardware testing, ensuring microchips reset to a known base state without internal sensors!"
          },
          "investigators": {
            "tagline": "Deterministic finite automata (DFA) and Černý's conjecture.",
            "analogy": "Trahtman proved that the transition semigroup of the colored graph contains a rank-one idempotent, by inductively finding maximal stable sets.",
            "rules": [
              "Černý conjecture: Synchronizing word length ≤ (n-1)².",
              "Trahtman's polynomial algorithm (2007).",
              "Formal automata in Mathlib."
            ],
            "mystery": "What is the true maximum length of a synchronizing word for n-state automata (Černý's Conjecture)?",
            "funFact": "Posed by Adler, Goodwyn & Weiss in 1970; solved by Avraham Trahtman in 2007."
          },
          "pioneers": {
            "tagline": "Semigroup representation theory and shift dynamical systems.",
            "analogy": "The proof translates to finding an unambiguous partition of the Perron-Frobenius eigenvector of the adjacency matrix.",
            "rules": [
              "Perron-Frobenius positive eigenvector.",
              "Subshifts of finite type.",
              "Lean 4 Mathlib automata library."
            ],
            "mystery": "AI software testing pipelines use Trahtman's algorithm to generate reset sequences for complex asynchronous state machines.",
            "funFact": "The Road Coloring Theorem is the most inspiring human tale of perseverance and mathematical triumph in the 21st century."
          }
        },
        "history": [
          {
            "year": "1970",
            "author": "Adler, Goodwyn & Weiss",
            "note": "Formulate Road Coloring problem in symbolic dynamics."
          },
          {
            "year": "1964",
            "author": "Ján Černý",
            "note": "Conjectures (n-1)² upper bound on synchronizing word length."
          },
          {
            "year": "2007",
            "author": "Avraham Trahtman",
            "note": "Publishes complete proof using elementary combinatorial arguments."
          }
        ]
      },
      "de": {
        "name": "The Road Coloring Theorem",
        "subtitle": "A Synchronizing Road Map That Rescues Anyone Lost in a Maze (Solved in 2007)",
        "field": "Automata Theory & Symbolic Dynamics",
        "statusBadge": "PROVEN THEOREM",
        "grades": {
          "explorers": {
            "tagline": "Can a magic list of driving turns guide you to the castle, even if you don't know where you started?",
            "analogy": "In 1970, Roy Adler, L. Wayne Goodwyn, and Benjamin Weiss asked: Can every city map (with equal roads leaving each intersection) have its roads colored (e.g. Red, Blue) such that a SINGLE universal sequence of instructions (like 'Red-Red-Blue-Red') takes you to the EXACT SAME destination, REGARDLESS of where you started? In 2007, 63-year-old Israeli-Russian mathematician Avraham Trahtman, working as a part-time security guard/lecturer, solved this 37-year-old mystery with pencil and paper!",
            "rules": [
              "Directed graph with constant out-degree k.",
              "Aperiodic: Greatest common divisor of cycle lengths is 1.",
              "Synchronizing sequence: Sequence of edge labels leading to a unique terminal vertex from ALL starting vertices.",
              "Trahtman (2007): Every such graph has a synchronizing coloring!"
            ],
            "mystery": "Avraham Trahtman was born in the USSR in 1944. After immigrating to Israel in 1992, he worked as a night security guard and maintenance worker before winning permanent recognition through his proof!",
            "funFact": "Synchronizing sequences are vital in hardware testing, ensuring microchips reset to a known base state without internal sensors!"
          },
          "investigators": {
            "tagline": "Deterministic finite automata (DFA) and Černý's conjecture.",
            "analogy": "Trahtman proved that the transition semigroup of the colored graph contains a rank-one idempotent, by inductively finding maximal stable sets.",
            "rules": [
              "Černý conjecture: Synchronizing word length ≤ (n-1)².",
              "Trahtman's polynomial algorithm (2007).",
              "Formal automata in Mathlib."
            ],
            "mystery": "What is the true maximum length of a synchronizing word for n-state automata (Černý's Conjecture)?",
            "funFact": "Posed by Adler, Goodwyn & Weiss in 1970; solved by Avraham Trahtman in 2007."
          },
          "pioneers": {
            "tagline": "Semigroup representation theory and shift dynamical systems.",
            "analogy": "The proof translates to finding an unambiguous partition of the Perron-Frobenius eigenvector of the adjacency matrix.",
            "rules": [
              "Perron-Frobenius positive eigenvector.",
              "Subshifts of finite type.",
              "Lean 4 Mathlib automata library."
            ],
            "mystery": "AI software testing pipelines use Trahtman's algorithm to generate reset sequences for complex asynchronous state machines.",
            "funFact": "The Road Coloring Theorem is the most inspiring human tale of perseverance and mathematical triumph in the 21st century."
          }
        },
        "history": [
          {
            "year": "1970",
            "author": "Adler, Goodwyn & Weiss",
            "note": "Formulate Road Coloring problem in symbolic dynamics."
          },
          {
            "year": "1964",
            "author": "Ján Černý",
            "note": "Conjectures (n-1)² upper bound on synchronizing word length."
          },
          {
            "year": "2007",
            "author": "Avraham Trahtman",
            "note": "Publishes complete proof using elementary combinatorial arguments."
          }
        ]
      },
      "fr": {
        "name": "The Road Coloring Theorem",
        "subtitle": "A Synchronizing Road Map That Rescues Anyone Lost in a Maze (Solved in 2007)",
        "field": "Automata Theory & Symbolic Dynamics",
        "statusBadge": "PROVEN THEOREM",
        "grades": {
          "explorers": {
            "tagline": "Can a magic list of driving turns guide you to the castle, even if you don't know where you started?",
            "analogy": "In 1970, Roy Adler, L. Wayne Goodwyn, and Benjamin Weiss asked: Can every city map (with equal roads leaving each intersection) have its roads colored (e.g. Red, Blue) such that a SINGLE universal sequence of instructions (like 'Red-Red-Blue-Red') takes you to the EXACT SAME destination, REGARDLESS of where you started? In 2007, 63-year-old Israeli-Russian mathematician Avraham Trahtman, working as a part-time security guard/lecturer, solved this 37-year-old mystery with pencil and paper!",
            "rules": [
              "Directed graph with constant out-degree k.",
              "Aperiodic: Greatest common divisor of cycle lengths is 1.",
              "Synchronizing sequence: Sequence of edge labels leading to a unique terminal vertex from ALL starting vertices.",
              "Trahtman (2007): Every such graph has a synchronizing coloring!"
            ],
            "mystery": "Avraham Trahtman was born in the USSR in 1944. After immigrating to Israel in 1992, he worked as a night security guard and maintenance worker before winning permanent recognition through his proof!",
            "funFact": "Synchronizing sequences are vital in hardware testing, ensuring microchips reset to a known base state without internal sensors!"
          },
          "investigators": {
            "tagline": "Deterministic finite automata (DFA) and Černý's conjecture.",
            "analogy": "Trahtman proved that the transition semigroup of the colored graph contains a rank-one idempotent, by inductively finding maximal stable sets.",
            "rules": [
              "Černý conjecture: Synchronizing word length ≤ (n-1)².",
              "Trahtman's polynomial algorithm (2007).",
              "Formal automata in Mathlib."
            ],
            "mystery": "What is the true maximum length of a synchronizing word for n-state automata (Černý's Conjecture)?",
            "funFact": "Posed by Adler, Goodwyn & Weiss in 1970; solved by Avraham Trahtman in 2007."
          },
          "pioneers": {
            "tagline": "Semigroup representation theory and shift dynamical systems.",
            "analogy": "The proof translates to finding an unambiguous partition of the Perron-Frobenius eigenvector of the adjacency matrix.",
            "rules": [
              "Perron-Frobenius positive eigenvector.",
              "Subshifts of finite type.",
              "Lean 4 Mathlib automata library."
            ],
            "mystery": "AI software testing pipelines use Trahtman's algorithm to generate reset sequences for complex asynchronous state machines.",
            "funFact": "The Road Coloring Theorem is the most inspiring human tale of perseverance and mathematical triumph in the 21st century."
          }
        },
        "history": [
          {
            "year": "1970",
            "author": "Adler, Goodwyn & Weiss",
            "note": "Formulate Road Coloring problem in symbolic dynamics."
          },
          {
            "year": "1964",
            "author": "Ján Černý",
            "note": "Conjectures (n-1)² upper bound on synchronizing word length."
          },
          {
            "year": "2007",
            "author": "Avraham Trahtman",
            "note": "Publishes complete proof using elementary combinatorial arguments."
          }
        ]
      },
      "it": {
        "name": "The Road Coloring Theorem",
        "subtitle": "A Synchronizing Road Map That Rescues Anyone Lost in a Maze (Solved in 2007)",
        "field": "Automata Theory & Symbolic Dynamics",
        "statusBadge": "PROVEN THEOREM",
        "grades": {
          "explorers": {
            "tagline": "Can a magic list of driving turns guide you to the castle, even if you don't know where you started?",
            "analogy": "In 1970, Roy Adler, L. Wayne Goodwyn, and Benjamin Weiss asked: Can every city map (with equal roads leaving each intersection) have its roads colored (e.g. Red, Blue) such that a SINGLE universal sequence of instructions (like 'Red-Red-Blue-Red') takes you to the EXACT SAME destination, REGARDLESS of where you started? In 2007, 63-year-old Israeli-Russian mathematician Avraham Trahtman, working as a part-time security guard/lecturer, solved this 37-year-old mystery with pencil and paper!",
            "rules": [
              "Directed graph with constant out-degree k.",
              "Aperiodic: Greatest common divisor of cycle lengths is 1.",
              "Synchronizing sequence: Sequence of edge labels leading to a unique terminal vertex from ALL starting vertices.",
              "Trahtman (2007): Every such graph has a synchronizing coloring!"
            ],
            "mystery": "Avraham Trahtman was born in the USSR in 1944. After immigrating to Israel in 1992, he worked as a night security guard and maintenance worker before winning permanent recognition through his proof!",
            "funFact": "Synchronizing sequences are vital in hardware testing, ensuring microchips reset to a known base state without internal sensors!"
          },
          "investigators": {
            "tagline": "Deterministic finite automata (DFA) and Černý's conjecture.",
            "analogy": "Trahtman proved that the transition semigroup of the colored graph contains a rank-one idempotent, by inductively finding maximal stable sets.",
            "rules": [
              "Černý conjecture: Synchronizing word length ≤ (n-1)².",
              "Trahtman's polynomial algorithm (2007).",
              "Formal automata in Mathlib."
            ],
            "mystery": "What is the true maximum length of a synchronizing word for n-state automata (Černý's Conjecture)?",
            "funFact": "Posed by Adler, Goodwyn & Weiss in 1970; solved by Avraham Trahtman in 2007."
          },
          "pioneers": {
            "tagline": "Semigroup representation theory and shift dynamical systems.",
            "analogy": "The proof translates to finding an unambiguous partition of the Perron-Frobenius eigenvector of the adjacency matrix.",
            "rules": [
              "Perron-Frobenius positive eigenvector.",
              "Subshifts of finite type.",
              "Lean 4 Mathlib automata library."
            ],
            "mystery": "AI software testing pipelines use Trahtman's algorithm to generate reset sequences for complex asynchronous state machines.",
            "funFact": "The Road Coloring Theorem is the most inspiring human tale of perseverance and mathematical triumph in the 21st century."
          }
        },
        "history": [
          {
            "year": "1970",
            "author": "Adler, Goodwyn & Weiss",
            "note": "Formulate Road Coloring problem in symbolic dynamics."
          },
          {
            "year": "1964",
            "author": "Ján Černý",
            "note": "Conjectures (n-1)² upper bound on synchronizing word length."
          },
          {
            "year": "2007",
            "author": "Avraham Trahtman",
            "note": "Publishes complete proof using elementary combinatorial arguments."
          }
        ]
      },
      "ja": {
        "name": "The Road Coloring Theorem",
        "subtitle": "A Synchronizing Road Map That Rescues Anyone Lost in a Maze (Solved in 2007)",
        "field": "Automata Theory & Symbolic Dynamics",
        "statusBadge": "PROVEN THEOREM",
        "grades": {
          "explorers": {
            "tagline": "Can a magic list of driving turns guide you to the castle, even if you don't know where you started?",
            "analogy": "In 1970, Roy Adler, L. Wayne Goodwyn, and Benjamin Weiss asked: Can every city map (with equal roads leaving each intersection) have its roads colored (e.g. Red, Blue) such that a SINGLE universal sequence of instructions (like 'Red-Red-Blue-Red') takes you to the EXACT SAME destination, REGARDLESS of where you started? In 2007, 63-year-old Israeli-Russian mathematician Avraham Trahtman, working as a part-time security guard/lecturer, solved this 37-year-old mystery with pencil and paper!",
            "rules": [
              "Directed graph with constant out-degree k.",
              "Aperiodic: Greatest common divisor of cycle lengths is 1.",
              "Synchronizing sequence: Sequence of edge labels leading to a unique terminal vertex from ALL starting vertices.",
              "Trahtman (2007): Every such graph has a synchronizing coloring!"
            ],
            "mystery": "Avraham Trahtman was born in the USSR in 1944. After immigrating to Israel in 1992, he worked as a night security guard and maintenance worker before winning permanent recognition through his proof!",
            "funFact": "Synchronizing sequences are vital in hardware testing, ensuring microchips reset to a known base state without internal sensors!"
          },
          "investigators": {
            "tagline": "Deterministic finite automata (DFA) and Černý's conjecture.",
            "analogy": "Trahtman proved that the transition semigroup of the colored graph contains a rank-one idempotent, by inductively finding maximal stable sets.",
            "rules": [
              "Černý conjecture: Synchronizing word length ≤ (n-1)².",
              "Trahtman's polynomial algorithm (2007).",
              "Formal automata in Mathlib."
            ],
            "mystery": "What is the true maximum length of a synchronizing word for n-state automata (Černý's Conjecture)?",
            "funFact": "Posed by Adler, Goodwyn & Weiss in 1970; solved by Avraham Trahtman in 2007."
          },
          "pioneers": {
            "tagline": "Semigroup representation theory and shift dynamical systems.",
            "analogy": "The proof translates to finding an unambiguous partition of the Perron-Frobenius eigenvector of the adjacency matrix.",
            "rules": [
              "Perron-Frobenius positive eigenvector.",
              "Subshifts of finite type.",
              "Lean 4 Mathlib automata library."
            ],
            "mystery": "AI software testing pipelines use Trahtman's algorithm to generate reset sequences for complex asynchronous state machines.",
            "funFact": "The Road Coloring Theorem is the most inspiring human tale of perseverance and mathematical triumph in the 21st century."
          }
        },
        "history": [
          {
            "year": "1970",
            "author": "Adler, Goodwyn & Weiss",
            "note": "Formulate Road Coloring problem in symbolic dynamics."
          },
          {
            "year": "1964",
            "author": "Ján Černý",
            "note": "Conjectures (n-1)² upper bound on synchronizing word length."
          },
          {
            "year": "2007",
            "author": "Avraham Trahtman",
            "note": "Publishes complete proof using elementary combinatorial arguments."
          }
        ]
      },
      "ko": {
        "name": "The Road Coloring Theorem",
        "subtitle": "A Synchronizing Road Map That Rescues Anyone Lost in a Maze (Solved in 2007)",
        "field": "Automata Theory & Symbolic Dynamics",
        "statusBadge": "PROVEN THEOREM",
        "grades": {
          "explorers": {
            "tagline": "Can a magic list of driving turns guide you to the castle, even if you don't know where you started?",
            "analogy": "In 1970, Roy Adler, L. Wayne Goodwyn, and Benjamin Weiss asked: Can every city map (with equal roads leaving each intersection) have its roads colored (e.g. Red, Blue) such that a SINGLE universal sequence of instructions (like 'Red-Red-Blue-Red') takes you to the EXACT SAME destination, REGARDLESS of where you started? In 2007, 63-year-old Israeli-Russian mathematician Avraham Trahtman, working as a part-time security guard/lecturer, solved this 37-year-old mystery with pencil and paper!",
            "rules": [
              "Directed graph with constant out-degree k.",
              "Aperiodic: Greatest common divisor of cycle lengths is 1.",
              "Synchronizing sequence: Sequence of edge labels leading to a unique terminal vertex from ALL starting vertices.",
              "Trahtman (2007): Every such graph has a synchronizing coloring!"
            ],
            "mystery": "Avraham Trahtman was born in the USSR in 1944. After immigrating to Israel in 1992, he worked as a night security guard and maintenance worker before winning permanent recognition through his proof!",
            "funFact": "Synchronizing sequences are vital in hardware testing, ensuring microchips reset to a known base state without internal sensors!"
          },
          "investigators": {
            "tagline": "Deterministic finite automata (DFA) and Černý's conjecture.",
            "analogy": "Trahtman proved that the transition semigroup of the colored graph contains a rank-one idempotent, by inductively finding maximal stable sets.",
            "rules": [
              "Černý conjecture: Synchronizing word length ≤ (n-1)².",
              "Trahtman's polynomial algorithm (2007).",
              "Formal automata in Mathlib."
            ],
            "mystery": "What is the true maximum length of a synchronizing word for n-state automata (Černý's Conjecture)?",
            "funFact": "Posed by Adler, Goodwyn & Weiss in 1970; solved by Avraham Trahtman in 2007."
          },
          "pioneers": {
            "tagline": "Semigroup representation theory and shift dynamical systems.",
            "analogy": "The proof translates to finding an unambiguous partition of the Perron-Frobenius eigenvector of the adjacency matrix.",
            "rules": [
              "Perron-Frobenius positive eigenvector.",
              "Subshifts of finite type.",
              "Lean 4 Mathlib automata library."
            ],
            "mystery": "AI software testing pipelines use Trahtman's algorithm to generate reset sequences for complex asynchronous state machines.",
            "funFact": "The Road Coloring Theorem is the most inspiring human tale of perseverance and mathematical triumph in the 21st century."
          }
        },
        "history": [
          {
            "year": "1970",
            "author": "Adler, Goodwyn & Weiss",
            "note": "Formulate Road Coloring problem in symbolic dynamics."
          },
          {
            "year": "1964",
            "author": "Ján Černý",
            "note": "Conjectures (n-1)² upper bound on synchronizing word length."
          },
          {
            "year": "2007",
            "author": "Avraham Trahtman",
            "note": "Publishes complete proof using elementary combinatorial arguments."
          }
        ]
      },
      "zh-Hans": {
        "name": "道路着色定理（特拉赫特曼定理）",
        "subtitle": "无论迷失在迷宫何处，按同一串固定路标都能走到终点（2007年63岁移民学者破译）",
        "field": "自动机理论 & 符号动力系统",
        "statusBadge": "已证明定理",
        "grades": {
          "explorers": {
            "tagline": "哪怕你被蒙上双眼丢在迷宫任意角落，能不能单凭一张写着‘红-蓝-红’的纸条把你带到目的地？",
            "analogy": "1970年阿德勒等三位学者提出：如果一座城市里每个十字路口都有相同数量的单向路，能否把这些路涂上颜色（例如红路与蓝路），从而编出一串‘万能导航密码’（如‘红-红-蓝-红’）——无论你最初迷失在城市的哪一个路口，只要盲目按照这串颜色顺序开车，最后必定奇迹般地汇聚到同一座终点城堡？这一困扰全球计算机科学家的37年难题，在2007年被63岁、曾兼职保安的以色列移民学者阿夫拉罕·特拉赫特曼用几张草稿纸彻底解开！",
            "rules": [
              "每个顶点具有恒定出度 k 的有向图。",
              "非周期性：所有有向圈长度的最大公约数为 1。",
              "同步字（万能指令）：无论从哪个顶点出发，沿着该指令行走必定汇聚于唯一终点。",
              "特拉赫特曼定理：任何满足基本条件的图都必定存在这种完美染色！"
            ],
            "mystery": "特拉赫特曼曾在苏联高校任教，1992年移民以色列后曾度过数年夜班保安与清洁工的艰辛岁月，最终凭借这一惊世证明震惊国际数学界！",
            "funFact": "万能同步指令在芯片工程与自动化测试中极为关键：无需探测芯片内部状态，就能通过一串固定信号将其一键重置回初始态！"
          },
          "investigators": {
            "tagline": "确定性有限状态自动机 (DFA) 与切尔尼猜想。",
            "analogy": "特拉赫特曼通过在图上归纳构造极大稳定集，严格证明了有向图的转移半群中必定包含秩为 1 的幂等元。",
            "rules": [
              "切尔尼同步字长度猜想：$(n-1)^2$。",
              "特拉赫特曼多项式时间染色构造算法。",
              "Lean 4 Mathlib 有限自动机形式化。"
            ],
            "mystery": "具有 n 个状态的自动机，其最短同步字的最坏长度是否永远不超过 $(n-1)^2$？（切尔尼猜想依然未决！）",
            "funFact": "阿德勒等人于1970年提出，特拉赫特曼于2007年完成解析证明。"
          },
          "pioneers": {
            "tagline": "半群表示论与移位拓扑动力系统。",
            "analogy": "代数上等价于寻找邻接矩阵佩隆-弗罗贝尼乌斯特征向量的无歧义代数直和分解。",
            "rules": [
              "佩隆-弗罗贝尼乌斯谱理论。",
              "有限型子移位动力学。",
              "Lean 4 自动机状态转移形式化。"
            ],
            "mystery": "AI 自动化系统广泛运用特拉赫特曼算法为复杂的异步芯片与协议状态机生成全局硬复位字。",
            "funFact": "道路着色定理是21世纪数学界最激励人心、充满坚守与荣耀的不朽传奇。"
          }
        },
        "history": [
          {
            "year": "1970",
            "author": "阿德勒团队",
            "note": "在符号动力学研究中提出道路着色问题。"
          },
          {
            "year": "1964",
            "author": "扬·切尔尼",
            "note": "提出著名的切尔尼同步字长度猜想。"
          },
          {
            "year": "2007",
            "author": "阿夫拉罕·特拉赫特曼",
            "note": "63岁发表纯初等组合证明，终结37年悬案！"
          }
        ]
      },
      "zh-Hant": {
        "name": "The Road Coloring Theorem",
        "subtitle": "A Synchronizing Road Map That Rescues Anyone Lost in a Maze (Solved in 2007)",
        "field": "Automata Theory & Symbolic Dynamics",
        "statusBadge": "PROVEN THEOREM",
        "grades": {
          "explorers": {
            "tagline": "Can a magic list of driving turns guide you to the castle, even if you don't know where you started?",
            "analogy": "In 1970, Roy Adler, L. Wayne Goodwyn, and Benjamin Weiss asked: Can every city map (with equal roads leaving each intersection) have its roads colored (e.g. Red, Blue) such that a SINGLE universal sequence of instructions (like 'Red-Red-Blue-Red') takes you to the EXACT SAME destination, REGARDLESS of where you started? In 2007, 63-year-old Israeli-Russian mathematician Avraham Trahtman, working as a part-time security guard/lecturer, solved this 37-year-old mystery with pencil and paper!",
            "rules": [
              "Directed graph with constant out-degree k.",
              "Aperiodic: Greatest common divisor of cycle lengths is 1.",
              "Synchronizing sequence: Sequence of edge labels leading to a unique terminal vertex from ALL starting vertices.",
              "Trahtman (2007): Every such graph has a synchronizing coloring!"
            ],
            "mystery": "Avraham Trahtman was born in the USSR in 1944. After immigrating to Israel in 1992, he worked as a night security guard and maintenance worker before winning permanent recognition through his proof!",
            "funFact": "Synchronizing sequences are vital in hardware testing, ensuring microchips reset to a known base state without internal sensors!"
          },
          "investigators": {
            "tagline": "Deterministic finite automata (DFA) and Černý's conjecture.",
            "analogy": "Trahtman proved that the transition semigroup of the colored graph contains a rank-one idempotent, by inductively finding maximal stable sets.",
            "rules": [
              "Černý conjecture: Synchronizing word length ≤ (n-1)².",
              "Trahtman's polynomial algorithm (2007).",
              "Formal automata in Mathlib."
            ],
            "mystery": "What is the true maximum length of a synchronizing word for n-state automata (Černý's Conjecture)?",
            "funFact": "Posed by Adler, Goodwyn & Weiss in 1970; solved by Avraham Trahtman in 2007."
          },
          "pioneers": {
            "tagline": "Semigroup representation theory and shift dynamical systems.",
            "analogy": "The proof translates to finding an unambiguous partition of the Perron-Frobenius eigenvector of the adjacency matrix.",
            "rules": [
              "Perron-Frobenius positive eigenvector.",
              "Subshifts of finite type.",
              "Lean 4 Mathlib automata library."
            ],
            "mystery": "AI software testing pipelines use Trahtman's algorithm to generate reset sequences for complex asynchronous state machines.",
            "funFact": "The Road Coloring Theorem is the most inspiring human tale of perseverance and mathematical triumph in the 21st century."
          }
        },
        "history": [
          {
            "year": "1970",
            "author": "Adler, Goodwyn & Weiss",
            "note": "Formulate Road Coloring problem in symbolic dynamics."
          },
          {
            "year": "1964",
            "author": "Ján Černý",
            "note": "Conjectures (n-1)² upper bound on synchronizing word length."
          },
          {
            "year": "2007",
            "author": "Avraham Trahtman",
            "note": "Publishes complete proof using elementary combinatorial arguments."
          }
        ]
      }
    }
  },
  {
    "id": "chvatal-toughness",
    "icon": "⛓️",
    "difficulty": "Gr 9+",
    "domain": "graph-theory",
    "category": "graph-theory",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Combinatorics.SimpleGraph.Basic\n-- Chvátal's Toughness Conjecture (Václav Chvátal, 1973)\n-- There exists a constant t₀ such that every t₀-tough graph is Hamiltonian.",
    "locales": {
      "en": {
        "name": "Chvátal's Toughness Conjecture",
        "subtitle": "Does Extreme Toughness Guarantee a Hamiltonian Cycle?",
        "field": "Structural Graph Theory & Connectivity",
        "statusBadge": "OPEN SINCE 1973",
        "grades": {
          "explorers": {
            "tagline": "If a bridge network is so tough that removing a few bridges never shatters it into many islands, can a traveler visit every city once?",
            "analogy": "In 1973, Czech-Canadian mathematician Václav Chvátal defined graph 'toughness': a graph is t-tough if removing ANY set S of vertices leaves at most |S|/t disconnected components. For a graph to have a Hamiltonian cycle (a closed loop visiting every single vertex once), it must be at least 1-tough. Chvátal conjectured: There exists some universal number $t_0$ (he guessed $t_0 = 2$) such that EVERY $t_0$-tough graph is Hamiltonian! Still unsolved after 50 years!",
            "rules": [
              "Graph toughness t(G) = min |S| / c(G - S) for disconnecting sets S.",
              "Hamiltonian requires t(G) ≥ 1.",
              "Chvátal's Conjecture: ∃ t₀ such that t(G) ≥ t₀ ⇒ G is Hamiltonian.",
              "Original guess t₀ = 2 was disproved by Bauer et al. (2000); conjecture remains open for t₀ ≥ 10!"
            ],
            "mystery": "Bauer, Broersma, and Veldman constructed a counterexample in 2000 showing that (9/4 - ε)-tough graphs can still fail to be Hamiltonian!",
            "funFact": "For planar graphs, Tutte proved in 1956 that all 4-connected planar graphs are Hamiltonian, confirming the conjecture for planar topology!"
          },
          "investigators": {
            "tagline": "Hamiltonian cycle complexity, matching polytopes, and toughness bounds.",
            "analogy": "Determining whether an arbitrary graph is Hamiltonian is NP-complete, which makes toughness one of the few global structural invariants that could force Hamiltonicity.",
            "rules": [
              "Toughness definition: c(G - S) ≤ |S| / t.",
              "Bauer-Broersma-Veldman counterexample (2000).",
              "Lean 4 Mathlib graph connectivity."
            ],
            "mystery": "Does there exist ANY finite toughness constant (e.g. t₀ = 10) that forces a Hamiltonian cycle?",
            "funFact": "Václav Chvátal introduced toughness in 1973."
          },
          "pioneers": {
            "tagline": "Fractional toughness and graph spectra.",
            "analogy": "Spectral graph theory links high algebraic connectivity λ₂ with high toughness, giving partial asymptotic results.",
            "rules": [
              "Laplacian spectral gap and toughness.",
              "Fractional Hamiltonicity.",
              "Lean 4 Mathlib simple graphs."
            ],
            "mystery": "AI reinforcement learning agents explore network routing resilience using toughness criteria.",
            "funFact": "Chvátal's Toughness Conjecture is the bridge connecting local cutsets to global circular journeys."
          }
        },
        "history": [
          {
            "year": "1973",
            "author": "Václav Chvátal",
            "note": "Defines graph toughness and posits the conjecture."
          },
          {
            "year": "1956",
            "author": "W. T. Tutte",
            "note": "Proves 4-connected planar graphs are Hamiltonian."
          },
          {
            "year": "2000",
            "author": "Bauer, Broersma & Veldman",
            "note": "Disprove t₀ = 2 conjecture with (9/4)-tough non-Hamiltonian graph."
          }
        ]
      },
      "de": {
        "name": "Chvátal's Toughness Conjecture",
        "subtitle": "Does Extreme Toughness Guarantee a Hamiltonian Cycle?",
        "field": "Structural Graph Theory & Connectivity",
        "statusBadge": "OPEN SINCE 1973",
        "grades": {
          "explorers": {
            "tagline": "If a bridge network is so tough that removing a few bridges never shatters it into many islands, can a traveler visit every city once?",
            "analogy": "In 1973, Czech-Canadian mathematician Václav Chvátal defined graph 'toughness': a graph is t-tough if removing ANY set S of vertices leaves at most |S|/t disconnected components. For a graph to have a Hamiltonian cycle (a closed loop visiting every single vertex once), it must be at least 1-tough. Chvátal conjectured: There exists some universal number $t_0$ (he guessed $t_0 = 2$) such that EVERY $t_0$-tough graph is Hamiltonian! Still unsolved after 50 years!",
            "rules": [
              "Graph toughness t(G) = min |S| / c(G - S) for disconnecting sets S.",
              "Hamiltonian requires t(G) ≥ 1.",
              "Chvátal's Conjecture: ∃ t₀ such that t(G) ≥ t₀ ⇒ G is Hamiltonian.",
              "Original guess t₀ = 2 was disproved by Bauer et al. (2000); conjecture remains open for t₀ ≥ 10!"
            ],
            "mystery": "Bauer, Broersma, and Veldman constructed a counterexample in 2000 showing that (9/4 - ε)-tough graphs can still fail to be Hamiltonian!",
            "funFact": "For planar graphs, Tutte proved in 1956 that all 4-connected planar graphs are Hamiltonian, confirming the conjecture for planar topology!"
          },
          "investigators": {
            "tagline": "Hamiltonian cycle complexity, matching polytopes, and toughness bounds.",
            "analogy": "Determining whether an arbitrary graph is Hamiltonian is NP-complete, which makes toughness one of the few global structural invariants that could force Hamiltonicity.",
            "rules": [
              "Toughness definition: c(G - S) ≤ |S| / t.",
              "Bauer-Broersma-Veldman counterexample (2000).",
              "Lean 4 Mathlib graph connectivity."
            ],
            "mystery": "Does there exist ANY finite toughness constant (e.g. t₀ = 10) that forces a Hamiltonian cycle?",
            "funFact": "Václav Chvátal introduced toughness in 1973."
          },
          "pioneers": {
            "tagline": "Fractional toughness and graph spectra.",
            "analogy": "Spectral graph theory links high algebraic connectivity λ₂ with high toughness, giving partial asymptotic results.",
            "rules": [
              "Laplacian spectral gap and toughness.",
              "Fractional Hamiltonicity.",
              "Lean 4 Mathlib simple graphs."
            ],
            "mystery": "AI reinforcement learning agents explore network routing resilience using toughness criteria.",
            "funFact": "Chvátal's Toughness Conjecture is the bridge connecting local cutsets to global circular journeys."
          }
        },
        "history": [
          {
            "year": "1973",
            "author": "Václav Chvátal",
            "note": "Defines graph toughness and posits the conjecture."
          },
          {
            "year": "1956",
            "author": "W. T. Tutte",
            "note": "Proves 4-connected planar graphs are Hamiltonian."
          },
          {
            "year": "2000",
            "author": "Bauer, Broersma & Veldman",
            "note": "Disprove t₀ = 2 conjecture with (9/4)-tough non-Hamiltonian graph."
          }
        ]
      },
      "fr": {
        "name": "Chvátal's Toughness Conjecture",
        "subtitle": "Does Extreme Toughness Guarantee a Hamiltonian Cycle?",
        "field": "Structural Graph Theory & Connectivity",
        "statusBadge": "OPEN SINCE 1973",
        "grades": {
          "explorers": {
            "tagline": "If a bridge network is so tough that removing a few bridges never shatters it into many islands, can a traveler visit every city once?",
            "analogy": "In 1973, Czech-Canadian mathematician Václav Chvátal defined graph 'toughness': a graph is t-tough if removing ANY set S of vertices leaves at most |S|/t disconnected components. For a graph to have a Hamiltonian cycle (a closed loop visiting every single vertex once), it must be at least 1-tough. Chvátal conjectured: There exists some universal number $t_0$ (he guessed $t_0 = 2$) such that EVERY $t_0$-tough graph is Hamiltonian! Still unsolved after 50 years!",
            "rules": [
              "Graph toughness t(G) = min |S| / c(G - S) for disconnecting sets S.",
              "Hamiltonian requires t(G) ≥ 1.",
              "Chvátal's Conjecture: ∃ t₀ such that t(G) ≥ t₀ ⇒ G is Hamiltonian.",
              "Original guess t₀ = 2 was disproved by Bauer et al. (2000); conjecture remains open for t₀ ≥ 10!"
            ],
            "mystery": "Bauer, Broersma, and Veldman constructed a counterexample in 2000 showing that (9/4 - ε)-tough graphs can still fail to be Hamiltonian!",
            "funFact": "For planar graphs, Tutte proved in 1956 that all 4-connected planar graphs are Hamiltonian, confirming the conjecture for planar topology!"
          },
          "investigators": {
            "tagline": "Hamiltonian cycle complexity, matching polytopes, and toughness bounds.",
            "analogy": "Determining whether an arbitrary graph is Hamiltonian is NP-complete, which makes toughness one of the few global structural invariants that could force Hamiltonicity.",
            "rules": [
              "Toughness definition: c(G - S) ≤ |S| / t.",
              "Bauer-Broersma-Veldman counterexample (2000).",
              "Lean 4 Mathlib graph connectivity."
            ],
            "mystery": "Does there exist ANY finite toughness constant (e.g. t₀ = 10) that forces a Hamiltonian cycle?",
            "funFact": "Václav Chvátal introduced toughness in 1973."
          },
          "pioneers": {
            "tagline": "Fractional toughness and graph spectra.",
            "analogy": "Spectral graph theory links high algebraic connectivity λ₂ with high toughness, giving partial asymptotic results.",
            "rules": [
              "Laplacian spectral gap and toughness.",
              "Fractional Hamiltonicity.",
              "Lean 4 Mathlib simple graphs."
            ],
            "mystery": "AI reinforcement learning agents explore network routing resilience using toughness criteria.",
            "funFact": "Chvátal's Toughness Conjecture is the bridge connecting local cutsets to global circular journeys."
          }
        },
        "history": [
          {
            "year": "1973",
            "author": "Václav Chvátal",
            "note": "Defines graph toughness and posits the conjecture."
          },
          {
            "year": "1956",
            "author": "W. T. Tutte",
            "note": "Proves 4-connected planar graphs are Hamiltonian."
          },
          {
            "year": "2000",
            "author": "Bauer, Broersma & Veldman",
            "note": "Disprove t₀ = 2 conjecture with (9/4)-tough non-Hamiltonian graph."
          }
        ]
      },
      "it": {
        "name": "Chvátal's Toughness Conjecture",
        "subtitle": "Does Extreme Toughness Guarantee a Hamiltonian Cycle?",
        "field": "Structural Graph Theory & Connectivity",
        "statusBadge": "OPEN SINCE 1973",
        "grades": {
          "explorers": {
            "tagline": "If a bridge network is so tough that removing a few bridges never shatters it into many islands, can a traveler visit every city once?",
            "analogy": "In 1973, Czech-Canadian mathematician Václav Chvátal defined graph 'toughness': a graph is t-tough if removing ANY set S of vertices leaves at most |S|/t disconnected components. For a graph to have a Hamiltonian cycle (a closed loop visiting every single vertex once), it must be at least 1-tough. Chvátal conjectured: There exists some universal number $t_0$ (he guessed $t_0 = 2$) such that EVERY $t_0$-tough graph is Hamiltonian! Still unsolved after 50 years!",
            "rules": [
              "Graph toughness t(G) = min |S| / c(G - S) for disconnecting sets S.",
              "Hamiltonian requires t(G) ≥ 1.",
              "Chvátal's Conjecture: ∃ t₀ such that t(G) ≥ t₀ ⇒ G is Hamiltonian.",
              "Original guess t₀ = 2 was disproved by Bauer et al. (2000); conjecture remains open for t₀ ≥ 10!"
            ],
            "mystery": "Bauer, Broersma, and Veldman constructed a counterexample in 2000 showing that (9/4 - ε)-tough graphs can still fail to be Hamiltonian!",
            "funFact": "For planar graphs, Tutte proved in 1956 that all 4-connected planar graphs are Hamiltonian, confirming the conjecture for planar topology!"
          },
          "investigators": {
            "tagline": "Hamiltonian cycle complexity, matching polytopes, and toughness bounds.",
            "analogy": "Determining whether an arbitrary graph is Hamiltonian is NP-complete, which makes toughness one of the few global structural invariants that could force Hamiltonicity.",
            "rules": [
              "Toughness definition: c(G - S) ≤ |S| / t.",
              "Bauer-Broersma-Veldman counterexample (2000).",
              "Lean 4 Mathlib graph connectivity."
            ],
            "mystery": "Does there exist ANY finite toughness constant (e.g. t₀ = 10) that forces a Hamiltonian cycle?",
            "funFact": "Václav Chvátal introduced toughness in 1973."
          },
          "pioneers": {
            "tagline": "Fractional toughness and graph spectra.",
            "analogy": "Spectral graph theory links high algebraic connectivity λ₂ with high toughness, giving partial asymptotic results.",
            "rules": [
              "Laplacian spectral gap and toughness.",
              "Fractional Hamiltonicity.",
              "Lean 4 Mathlib simple graphs."
            ],
            "mystery": "AI reinforcement learning agents explore network routing resilience using toughness criteria.",
            "funFact": "Chvátal's Toughness Conjecture is the bridge connecting local cutsets to global circular journeys."
          }
        },
        "history": [
          {
            "year": "1973",
            "author": "Václav Chvátal",
            "note": "Defines graph toughness and posits the conjecture."
          },
          {
            "year": "1956",
            "author": "W. T. Tutte",
            "note": "Proves 4-connected planar graphs are Hamiltonian."
          },
          {
            "year": "2000",
            "author": "Bauer, Broersma & Veldman",
            "note": "Disprove t₀ = 2 conjecture with (9/4)-tough non-Hamiltonian graph."
          }
        ]
      },
      "ja": {
        "name": "Chvátal's Toughness Conjecture",
        "subtitle": "Does Extreme Toughness Guarantee a Hamiltonian Cycle?",
        "field": "Structural Graph Theory & Connectivity",
        "statusBadge": "OPEN SINCE 1973",
        "grades": {
          "explorers": {
            "tagline": "If a bridge network is so tough that removing a few bridges never shatters it into many islands, can a traveler visit every city once?",
            "analogy": "In 1973, Czech-Canadian mathematician Václav Chvátal defined graph 'toughness': a graph is t-tough if removing ANY set S of vertices leaves at most |S|/t disconnected components. For a graph to have a Hamiltonian cycle (a closed loop visiting every single vertex once), it must be at least 1-tough. Chvátal conjectured: There exists some universal number $t_0$ (he guessed $t_0 = 2$) such that EVERY $t_0$-tough graph is Hamiltonian! Still unsolved after 50 years!",
            "rules": [
              "Graph toughness t(G) = min |S| / c(G - S) for disconnecting sets S.",
              "Hamiltonian requires t(G) ≥ 1.",
              "Chvátal's Conjecture: ∃ t₀ such that t(G) ≥ t₀ ⇒ G is Hamiltonian.",
              "Original guess t₀ = 2 was disproved by Bauer et al. (2000); conjecture remains open for t₀ ≥ 10!"
            ],
            "mystery": "Bauer, Broersma, and Veldman constructed a counterexample in 2000 showing that (9/4 - ε)-tough graphs can still fail to be Hamiltonian!",
            "funFact": "For planar graphs, Tutte proved in 1956 that all 4-connected planar graphs are Hamiltonian, confirming the conjecture for planar topology!"
          },
          "investigators": {
            "tagline": "Hamiltonian cycle complexity, matching polytopes, and toughness bounds.",
            "analogy": "Determining whether an arbitrary graph is Hamiltonian is NP-complete, which makes toughness one of the few global structural invariants that could force Hamiltonicity.",
            "rules": [
              "Toughness definition: c(G - S) ≤ |S| / t.",
              "Bauer-Broersma-Veldman counterexample (2000).",
              "Lean 4 Mathlib graph connectivity."
            ],
            "mystery": "Does there exist ANY finite toughness constant (e.g. t₀ = 10) that forces a Hamiltonian cycle?",
            "funFact": "Václav Chvátal introduced toughness in 1973."
          },
          "pioneers": {
            "tagline": "Fractional toughness and graph spectra.",
            "analogy": "Spectral graph theory links high algebraic connectivity λ₂ with high toughness, giving partial asymptotic results.",
            "rules": [
              "Laplacian spectral gap and toughness.",
              "Fractional Hamiltonicity.",
              "Lean 4 Mathlib simple graphs."
            ],
            "mystery": "AI reinforcement learning agents explore network routing resilience using toughness criteria.",
            "funFact": "Chvátal's Toughness Conjecture is the bridge connecting local cutsets to global circular journeys."
          }
        },
        "history": [
          {
            "year": "1973",
            "author": "Václav Chvátal",
            "note": "Defines graph toughness and posits the conjecture."
          },
          {
            "year": "1956",
            "author": "W. T. Tutte",
            "note": "Proves 4-connected planar graphs are Hamiltonian."
          },
          {
            "year": "2000",
            "author": "Bauer, Broersma & Veldman",
            "note": "Disprove t₀ = 2 conjecture with (9/4)-tough non-Hamiltonian graph."
          }
        ]
      },
      "ko": {
        "name": "Chvátal's Toughness Conjecture",
        "subtitle": "Does Extreme Toughness Guarantee a Hamiltonian Cycle?",
        "field": "Structural Graph Theory & Connectivity",
        "statusBadge": "OPEN SINCE 1973",
        "grades": {
          "explorers": {
            "tagline": "If a bridge network is so tough that removing a few bridges never shatters it into many islands, can a traveler visit every city once?",
            "analogy": "In 1973, Czech-Canadian mathematician Václav Chvátal defined graph 'toughness': a graph is t-tough if removing ANY set S of vertices leaves at most |S|/t disconnected components. For a graph to have a Hamiltonian cycle (a closed loop visiting every single vertex once), it must be at least 1-tough. Chvátal conjectured: There exists some universal number $t_0$ (he guessed $t_0 = 2$) such that EVERY $t_0$-tough graph is Hamiltonian! Still unsolved after 50 years!",
            "rules": [
              "Graph toughness t(G) = min |S| / c(G - S) for disconnecting sets S.",
              "Hamiltonian requires t(G) ≥ 1.",
              "Chvátal's Conjecture: ∃ t₀ such that t(G) ≥ t₀ ⇒ G is Hamiltonian.",
              "Original guess t₀ = 2 was disproved by Bauer et al. (2000); conjecture remains open for t₀ ≥ 10!"
            ],
            "mystery": "Bauer, Broersma, and Veldman constructed a counterexample in 2000 showing that (9/4 - ε)-tough graphs can still fail to be Hamiltonian!",
            "funFact": "For planar graphs, Tutte proved in 1956 that all 4-connected planar graphs are Hamiltonian, confirming the conjecture for planar topology!"
          },
          "investigators": {
            "tagline": "Hamiltonian cycle complexity, matching polytopes, and toughness bounds.",
            "analogy": "Determining whether an arbitrary graph is Hamiltonian is NP-complete, which makes toughness one of the few global structural invariants that could force Hamiltonicity.",
            "rules": [
              "Toughness definition: c(G - S) ≤ |S| / t.",
              "Bauer-Broersma-Veldman counterexample (2000).",
              "Lean 4 Mathlib graph connectivity."
            ],
            "mystery": "Does there exist ANY finite toughness constant (e.g. t₀ = 10) that forces a Hamiltonian cycle?",
            "funFact": "Václav Chvátal introduced toughness in 1973."
          },
          "pioneers": {
            "tagline": "Fractional toughness and graph spectra.",
            "analogy": "Spectral graph theory links high algebraic connectivity λ₂ with high toughness, giving partial asymptotic results.",
            "rules": [
              "Laplacian spectral gap and toughness.",
              "Fractional Hamiltonicity.",
              "Lean 4 Mathlib simple graphs."
            ],
            "mystery": "AI reinforcement learning agents explore network routing resilience using toughness criteria.",
            "funFact": "Chvátal's Toughness Conjecture is the bridge connecting local cutsets to global circular journeys."
          }
        },
        "history": [
          {
            "year": "1973",
            "author": "Václav Chvátal",
            "note": "Defines graph toughness and posits the conjecture."
          },
          {
            "year": "1956",
            "author": "W. T. Tutte",
            "note": "Proves 4-connected planar graphs are Hamiltonian."
          },
          {
            "year": "2000",
            "author": "Bauer, Broersma & Veldman",
            "note": "Disprove t₀ = 2 conjecture with (9/4)-tough non-Hamiltonian graph."
          }
        ]
      },
      "zh-Hans": {
        "name": "赫瓦塔尔坚韧度猜想",
        "subtitle": "网络具有足够高的坚韧度，是否必定存在贯穿所有节点的哈密顿环？",
        "field": "结构图论 & 极值连通性",
        "statusBadge": "自1973年高悬至今",
        "grades": {
          "explorers": {
            "tagline": "如果一座群岛网络极为坚韧，炸毁少量桥梁绝不会让它碎裂成太多小岛，旅客能不能一次性不重复环游所有岛屿？",
            "analogy": "1973年捷克裔加拿大数学家瓦茨拉夫·赫瓦塔尔定义了图的“坚韧度”（Toughness）：如果删去任意 S 个顶点后，剩余连通块的数量永远不超过 $|S|/t$，该图就称为 t-坚韧的。要让一个图包含一条恰好遍历每个顶点一次的闭合哈密顿圈，它至少必须是 1-坚韧的。赫瓦塔尔大胆猜想：存在一个全宇宙通用的常数 $t_0$（他猜测 $t_0 = 2$），只要一个图的坚韧度达到 $t_0$，它就百分之百必定拥有哈密顿圈！历经半个世纪，该猜想依然是图连通性理论的未决高峰！",
            "rules": [
              "图坚韧度 $t(G) = \\min |S| / c(G - S)$。",
              "包含哈密顿圈的必要条件是 $t(G) \\ge 1$。",
              "猜想：存在常数 $t_0$，使得任何 $t_0$-坚韧图必为哈密顿图。",
              "赫瓦塔尔最初猜测的 $t_0 = 2$ 在2000年被鲍尔团队推翻，但对于充分大 $t_0$（如 10）猜想依然屹立！"
            ],
            "mystery": "2000年鲍尔团队精妙构造出反例，证明即使坚韧度达到 9/4 仍然可能不是哈密顿图！",
            "funFact": "对于平面图，图论大师塔特在1956年就已证明所有 4-连通平面图必为哈密顿图，率先在平面世界征服了这一猜想！"
          },
          "investigators": {
            "tagline": "哈密顿圈判定复杂度、匹配多面体与坚韧度下界。",
            "analogy": "由于判定一般图是否含有哈密顿圈是经典的 NP-完全问题，坚韧度成为了极少数有望从拓扑全局强制导出哈密顿性的结构不变量。",
            "rules": [
              "坚韧度代数不等式。",
              "鲍尔-布勒斯马-费尔德曼 9/4 反例构造。",
              "Lean 4 Mathlib 连通分支与连通度形式化。"
            ],
            "mystery": "到底是否存在某个有限的坚韧度常数（例如 $t_0 = 10$）能百分之百保证哈密顿圈的存在？",
            "funFact": "瓦茨拉夫·赫瓦塔尔于1973年提出。"
          },
          "pioneers": {
            "tagline": "分数坚韧度、图拉普拉斯谱间隙与度量嵌入。",
            "analogy": "谱图论通过拉普拉斯第二特征值与代数连通度的深层关联，为坚韧图的大规模哈密顿性质提供了有力工具。",
            "rules": [
              "拉普拉斯谱间隙与坚韧度关联。",
              "分数哈密顿圈凸组合分解。",
              "Lean 4 简单图形式化。"
            ],
            "mystery": "AI 强化学习与网络安全系统正在运用坚韧度指标设计抵抗大规模节点毁伤的高弹性拓扑架构。",
            "funFact": "赫瓦塔尔坚韧度猜想是连接局部割集破坏力与全局闭合旅行的最深刻结构桥梁。"
          }
        },
        "history": [
          {
            "year": "1973",
            "author": "瓦茨拉夫·赫瓦塔尔",
            "note": "定义图坚韧度并正式提出猜想。"
          },
          {
            "year": "1956",
            "author": "W. T. 塔特",
            "note": "证明 4-连通平面图必为哈密顿图。"
          },
          {
            "year": "2000",
            "author": "鲍尔团队",
            "note": "构造 9/4 坚韧非哈密顿图，刷新反例界限！"
          }
        ]
      },
      "zh-Hant": {
        "name": "Chvátal's Toughness Conjecture",
        "subtitle": "Does Extreme Toughness Guarantee a Hamiltonian Cycle?",
        "field": "Structural Graph Theory & Connectivity",
        "statusBadge": "OPEN SINCE 1973",
        "grades": {
          "explorers": {
            "tagline": "If a bridge network is so tough that removing a few bridges never shatters it into many islands, can a traveler visit every city once?",
            "analogy": "In 1973, Czech-Canadian mathematician Václav Chvátal defined graph 'toughness': a graph is t-tough if removing ANY set S of vertices leaves at most |S|/t disconnected components. For a graph to have a Hamiltonian cycle (a closed loop visiting every single vertex once), it must be at least 1-tough. Chvátal conjectured: There exists some universal number $t_0$ (he guessed $t_0 = 2$) such that EVERY $t_0$-tough graph is Hamiltonian! Still unsolved after 50 years!",
            "rules": [
              "Graph toughness t(G) = min |S| / c(G - S) for disconnecting sets S.",
              "Hamiltonian requires t(G) ≥ 1.",
              "Chvátal's Conjecture: ∃ t₀ such that t(G) ≥ t₀ ⇒ G is Hamiltonian.",
              "Original guess t₀ = 2 was disproved by Bauer et al. (2000); conjecture remains open for t₀ ≥ 10!"
            ],
            "mystery": "Bauer, Broersma, and Veldman constructed a counterexample in 2000 showing that (9/4 - ε)-tough graphs can still fail to be Hamiltonian!",
            "funFact": "For planar graphs, Tutte proved in 1956 that all 4-connected planar graphs are Hamiltonian, confirming the conjecture for planar topology!"
          },
          "investigators": {
            "tagline": "Hamiltonian cycle complexity, matching polytopes, and toughness bounds.",
            "analogy": "Determining whether an arbitrary graph is Hamiltonian is NP-complete, which makes toughness one of the few global structural invariants that could force Hamiltonicity.",
            "rules": [
              "Toughness definition: c(G - S) ≤ |S| / t.",
              "Bauer-Broersma-Veldman counterexample (2000).",
              "Lean 4 Mathlib graph connectivity."
            ],
            "mystery": "Does there exist ANY finite toughness constant (e.g. t₀ = 10) that forces a Hamiltonian cycle?",
            "funFact": "Václav Chvátal introduced toughness in 1973."
          },
          "pioneers": {
            "tagline": "Fractional toughness and graph spectra.",
            "analogy": "Spectral graph theory links high algebraic connectivity λ₂ with high toughness, giving partial asymptotic results.",
            "rules": [
              "Laplacian spectral gap and toughness.",
              "Fractional Hamiltonicity.",
              "Lean 4 Mathlib simple graphs."
            ],
            "mystery": "AI reinforcement learning agents explore network routing resilience using toughness criteria.",
            "funFact": "Chvátal's Toughness Conjecture is the bridge connecting local cutsets to global circular journeys."
          }
        },
        "history": [
          {
            "year": "1973",
            "author": "Václav Chvátal",
            "note": "Defines graph toughness and posits the conjecture."
          },
          {
            "year": "1956",
            "author": "W. T. Tutte",
            "note": "Proves 4-connected planar graphs are Hamiltonian."
          },
          {
            "year": "2000",
            "author": "Bauer, Broersma & Veldman",
            "note": "Disprove t₀ = 2 conjecture with (9/4)-tough non-Hamiltonian graph."
          }
        ]
      }
    }
  },
  {
    "id": "lovasz-hamiltonian",
    "icon": "🎡",
    "difficulty": "Gr 9+",
    "domain": "graph-theory",
    "category": "graph-theory",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Combinatorics.SimpleGraph.Basic\n-- Lovász Conjecture on Hamiltonian Cycles (László Lovász, 1970)\n-- Every finite connected vertex-transitive graph contains a Hamiltonian path.\n-- Only five known connected vertex-transitive graphs have NO Hamiltonian cycle.",
    "locales": {
      "en": {
        "name": "Lovász Hamiltonian Conjecture",
        "subtitle": "Every Vertex-Transitive Graph Contains a Hamiltonian Path",
        "field": "Algebraic Graph Theory & Cayley Graphs",
        "statusBadge": "OPEN SINCE 1970",
        "grades": {
          "explorers": {
            "tagline": "If every single spot in a magical city looks IDENTICAL to every other spot, can you visit everywhere without repeating?",
            "analogy": "A graph is 'vertex-transitive' if it is so completely symmetrical that any vertex can be mapped to any other vertex by a symmetry of the graph. In 1970, Abel Prize winner László Lovász asked: Does EVERY finite connected vertex-transitive graph contain a Hamiltonian path (visiting every vertex exactly once)? In fact, almost all such graphs have full Hamiltonian CYCLES—only FIVE exceptional graphs are known in the ENTIRE universe that lack a cycle (including the Petersen graph and Coxeter graph)!",
            "rules": [
              "Vertex-transitive: Aut(G) acts transitively on V(G).",
              "Hamiltonian path: Visits every vertex once.",
              "Hamiltonian cycle: Closed loop visiting every vertex once.",
              "Five known non-Hamiltonian examples: K₂, Petersen graph, Coxeter graph, and two truncation graphs!"
            ],
            "mystery": "Every Cayley graph of an abelian group is Hamiltonian, proved by computers and induction!",
            "funFact": "The Petersen graph has 10 vertices and NO Hamiltonian cycle, but it DOES have a Hamiltonian path!"
          },
          "investigators": {
            "tagline": "Group actions on graphs, representation theory, and Cayley graphs.",
            "analogy": "Babai (1996) conjectured that there exists a constant c > 0 such that every connected vertex-transitive graph on n vertices has a cycle of length at least c n.",
            "rules": [
              "Automorphism group Aut(G).",
              "Cayley graph Cay(G, S).",
              "Lean 4 Mathlib group actions."
            ],
            "mystery": "Does every connected Cayley graph of a finite group possess a Hamiltonian cycle?",
            "funFact": "László Lovász formulated the problem in 1970."
          },
          "pioneers": {
            "tagline": "Quasirandom graphs and expander mixing lemma.",
            "analogy": "Glover and Marušič proved Hamiltonicity for many infinite families of cubic vertex-transitive graphs using algebraic tessellations.",
            "rules": [
              "Cayley digraphs and Hamiltonicity.",
              "Expander mixing lemma.",
              "Lean 4 graph automorphism library."
            ],
            "mystery": "AI symmetry engines have checked all vertex-transitive graphs up to 47 vertices, finding no new counterexamples.",
            "funFact": "The Lovász Conjecture is the ultimate manifestation of geometric symmetry giving rise to topological continuity."
          }
        },
        "history": [
          {
            "year": "1970",
            "author": "László Lovász",
            "note": "Poses the Hamiltonian path conjecture for vertex-transitive graphs."
          },
          {
            "year": "1898",
            "author": "Julius Petersen",
            "note": "Constructs the 10-vertex non-Hamiltonian vertex-transitive graph."
          },
          {
            "year": "1983",
            "author": "David Witte",
            "note": "Proves Hamiltonicity for Cayley graphs of p-groups."
          }
        ]
      },
      "de": {
        "name": "Lovász Hamiltonian Conjecture",
        "subtitle": "Every Vertex-Transitive Graph Contains a Hamiltonian Path",
        "field": "Algebraic Graph Theory & Cayley Graphs",
        "statusBadge": "OPEN SINCE 1970",
        "grades": {
          "explorers": {
            "tagline": "If every single spot in a magical city looks IDENTICAL to every other spot, can you visit everywhere without repeating?",
            "analogy": "A graph is 'vertex-transitive' if it is so completely symmetrical that any vertex can be mapped to any other vertex by a symmetry of the graph. In 1970, Abel Prize winner László Lovász asked: Does EVERY finite connected vertex-transitive graph contain a Hamiltonian path (visiting every vertex exactly once)? In fact, almost all such graphs have full Hamiltonian CYCLES—only FIVE exceptional graphs are known in the ENTIRE universe that lack a cycle (including the Petersen graph and Coxeter graph)!",
            "rules": [
              "Vertex-transitive: Aut(G) acts transitively on V(G).",
              "Hamiltonian path: Visits every vertex once.",
              "Hamiltonian cycle: Closed loop visiting every vertex once.",
              "Five known non-Hamiltonian examples: K₂, Petersen graph, Coxeter graph, and two truncation graphs!"
            ],
            "mystery": "Every Cayley graph of an abelian group is Hamiltonian, proved by computers and induction!",
            "funFact": "The Petersen graph has 10 vertices and NO Hamiltonian cycle, but it DOES have a Hamiltonian path!"
          },
          "investigators": {
            "tagline": "Group actions on graphs, representation theory, and Cayley graphs.",
            "analogy": "Babai (1996) conjectured that there exists a constant c > 0 such that every connected vertex-transitive graph on n vertices has a cycle of length at least c n.",
            "rules": [
              "Automorphism group Aut(G).",
              "Cayley graph Cay(G, S).",
              "Lean 4 Mathlib group actions."
            ],
            "mystery": "Does every connected Cayley graph of a finite group possess a Hamiltonian cycle?",
            "funFact": "László Lovász formulated the problem in 1970."
          },
          "pioneers": {
            "tagline": "Quasirandom graphs and expander mixing lemma.",
            "analogy": "Glover and Marušič proved Hamiltonicity for many infinite families of cubic vertex-transitive graphs using algebraic tessellations.",
            "rules": [
              "Cayley digraphs and Hamiltonicity.",
              "Expander mixing lemma.",
              "Lean 4 graph automorphism library."
            ],
            "mystery": "AI symmetry engines have checked all vertex-transitive graphs up to 47 vertices, finding no new counterexamples.",
            "funFact": "The Lovász Conjecture is the ultimate manifestation of geometric symmetry giving rise to topological continuity."
          }
        },
        "history": [
          {
            "year": "1970",
            "author": "László Lovász",
            "note": "Poses the Hamiltonian path conjecture for vertex-transitive graphs."
          },
          {
            "year": "1898",
            "author": "Julius Petersen",
            "note": "Constructs the 10-vertex non-Hamiltonian vertex-transitive graph."
          },
          {
            "year": "1983",
            "author": "David Witte",
            "note": "Proves Hamiltonicity for Cayley graphs of p-groups."
          }
        ]
      },
      "fr": {
        "name": "Lovász Hamiltonian Conjecture",
        "subtitle": "Every Vertex-Transitive Graph Contains a Hamiltonian Path",
        "field": "Algebraic Graph Theory & Cayley Graphs",
        "statusBadge": "OPEN SINCE 1970",
        "grades": {
          "explorers": {
            "tagline": "If every single spot in a magical city looks IDENTICAL to every other spot, can you visit everywhere without repeating?",
            "analogy": "A graph is 'vertex-transitive' if it is so completely symmetrical that any vertex can be mapped to any other vertex by a symmetry of the graph. In 1970, Abel Prize winner László Lovász asked: Does EVERY finite connected vertex-transitive graph contain a Hamiltonian path (visiting every vertex exactly once)? In fact, almost all such graphs have full Hamiltonian CYCLES—only FIVE exceptional graphs are known in the ENTIRE universe that lack a cycle (including the Petersen graph and Coxeter graph)!",
            "rules": [
              "Vertex-transitive: Aut(G) acts transitively on V(G).",
              "Hamiltonian path: Visits every vertex once.",
              "Hamiltonian cycle: Closed loop visiting every vertex once.",
              "Five known non-Hamiltonian examples: K₂, Petersen graph, Coxeter graph, and two truncation graphs!"
            ],
            "mystery": "Every Cayley graph of an abelian group is Hamiltonian, proved by computers and induction!",
            "funFact": "The Petersen graph has 10 vertices and NO Hamiltonian cycle, but it DOES have a Hamiltonian path!"
          },
          "investigators": {
            "tagline": "Group actions on graphs, representation theory, and Cayley graphs.",
            "analogy": "Babai (1996) conjectured that there exists a constant c > 0 such that every connected vertex-transitive graph on n vertices has a cycle of length at least c n.",
            "rules": [
              "Automorphism group Aut(G).",
              "Cayley graph Cay(G, S).",
              "Lean 4 Mathlib group actions."
            ],
            "mystery": "Does every connected Cayley graph of a finite group possess a Hamiltonian cycle?",
            "funFact": "László Lovász formulated the problem in 1970."
          },
          "pioneers": {
            "tagline": "Quasirandom graphs and expander mixing lemma.",
            "analogy": "Glover and Marušič proved Hamiltonicity for many infinite families of cubic vertex-transitive graphs using algebraic tessellations.",
            "rules": [
              "Cayley digraphs and Hamiltonicity.",
              "Expander mixing lemma.",
              "Lean 4 graph automorphism library."
            ],
            "mystery": "AI symmetry engines have checked all vertex-transitive graphs up to 47 vertices, finding no new counterexamples.",
            "funFact": "The Lovász Conjecture is the ultimate manifestation of geometric symmetry giving rise to topological continuity."
          }
        },
        "history": [
          {
            "year": "1970",
            "author": "László Lovász",
            "note": "Poses the Hamiltonian path conjecture for vertex-transitive graphs."
          },
          {
            "year": "1898",
            "author": "Julius Petersen",
            "note": "Constructs the 10-vertex non-Hamiltonian vertex-transitive graph."
          },
          {
            "year": "1983",
            "author": "David Witte",
            "note": "Proves Hamiltonicity for Cayley graphs of p-groups."
          }
        ]
      },
      "it": {
        "name": "Lovász Hamiltonian Conjecture",
        "subtitle": "Every Vertex-Transitive Graph Contains a Hamiltonian Path",
        "field": "Algebraic Graph Theory & Cayley Graphs",
        "statusBadge": "OPEN SINCE 1970",
        "grades": {
          "explorers": {
            "tagline": "If every single spot in a magical city looks IDENTICAL to every other spot, can you visit everywhere without repeating?",
            "analogy": "A graph is 'vertex-transitive' if it is so completely symmetrical that any vertex can be mapped to any other vertex by a symmetry of the graph. In 1970, Abel Prize winner László Lovász asked: Does EVERY finite connected vertex-transitive graph contain a Hamiltonian path (visiting every vertex exactly once)? In fact, almost all such graphs have full Hamiltonian CYCLES—only FIVE exceptional graphs are known in the ENTIRE universe that lack a cycle (including the Petersen graph and Coxeter graph)!",
            "rules": [
              "Vertex-transitive: Aut(G) acts transitively on V(G).",
              "Hamiltonian path: Visits every vertex once.",
              "Hamiltonian cycle: Closed loop visiting every vertex once.",
              "Five known non-Hamiltonian examples: K₂, Petersen graph, Coxeter graph, and two truncation graphs!"
            ],
            "mystery": "Every Cayley graph of an abelian group is Hamiltonian, proved by computers and induction!",
            "funFact": "The Petersen graph has 10 vertices and NO Hamiltonian cycle, but it DOES have a Hamiltonian path!"
          },
          "investigators": {
            "tagline": "Group actions on graphs, representation theory, and Cayley graphs.",
            "analogy": "Babai (1996) conjectured that there exists a constant c > 0 such that every connected vertex-transitive graph on n vertices has a cycle of length at least c n.",
            "rules": [
              "Automorphism group Aut(G).",
              "Cayley graph Cay(G, S).",
              "Lean 4 Mathlib group actions."
            ],
            "mystery": "Does every connected Cayley graph of a finite group possess a Hamiltonian cycle?",
            "funFact": "László Lovász formulated the problem in 1970."
          },
          "pioneers": {
            "tagline": "Quasirandom graphs and expander mixing lemma.",
            "analogy": "Glover and Marušič proved Hamiltonicity for many infinite families of cubic vertex-transitive graphs using algebraic tessellations.",
            "rules": [
              "Cayley digraphs and Hamiltonicity.",
              "Expander mixing lemma.",
              "Lean 4 graph automorphism library."
            ],
            "mystery": "AI symmetry engines have checked all vertex-transitive graphs up to 47 vertices, finding no new counterexamples.",
            "funFact": "The Lovász Conjecture is the ultimate manifestation of geometric symmetry giving rise to topological continuity."
          }
        },
        "history": [
          {
            "year": "1970",
            "author": "László Lovász",
            "note": "Poses the Hamiltonian path conjecture for vertex-transitive graphs."
          },
          {
            "year": "1898",
            "author": "Julius Petersen",
            "note": "Constructs the 10-vertex non-Hamiltonian vertex-transitive graph."
          },
          {
            "year": "1983",
            "author": "David Witte",
            "note": "Proves Hamiltonicity for Cayley graphs of p-groups."
          }
        ]
      },
      "ja": {
        "name": "Lovász Hamiltonian Conjecture",
        "subtitle": "Every Vertex-Transitive Graph Contains a Hamiltonian Path",
        "field": "Algebraic Graph Theory & Cayley Graphs",
        "statusBadge": "OPEN SINCE 1970",
        "grades": {
          "explorers": {
            "tagline": "If every single spot in a magical city looks IDENTICAL to every other spot, can you visit everywhere without repeating?",
            "analogy": "A graph is 'vertex-transitive' if it is so completely symmetrical that any vertex can be mapped to any other vertex by a symmetry of the graph. In 1970, Abel Prize winner László Lovász asked: Does EVERY finite connected vertex-transitive graph contain a Hamiltonian path (visiting every vertex exactly once)? In fact, almost all such graphs have full Hamiltonian CYCLES—only FIVE exceptional graphs are known in the ENTIRE universe that lack a cycle (including the Petersen graph and Coxeter graph)!",
            "rules": [
              "Vertex-transitive: Aut(G) acts transitively on V(G).",
              "Hamiltonian path: Visits every vertex once.",
              "Hamiltonian cycle: Closed loop visiting every vertex once.",
              "Five known non-Hamiltonian examples: K₂, Petersen graph, Coxeter graph, and two truncation graphs!"
            ],
            "mystery": "Every Cayley graph of an abelian group is Hamiltonian, proved by computers and induction!",
            "funFact": "The Petersen graph has 10 vertices and NO Hamiltonian cycle, but it DOES have a Hamiltonian path!"
          },
          "investigators": {
            "tagline": "Group actions on graphs, representation theory, and Cayley graphs.",
            "analogy": "Babai (1996) conjectured that there exists a constant c > 0 such that every connected vertex-transitive graph on n vertices has a cycle of length at least c n.",
            "rules": [
              "Automorphism group Aut(G).",
              "Cayley graph Cay(G, S).",
              "Lean 4 Mathlib group actions."
            ],
            "mystery": "Does every connected Cayley graph of a finite group possess a Hamiltonian cycle?",
            "funFact": "László Lovász formulated the problem in 1970."
          },
          "pioneers": {
            "tagline": "Quasirandom graphs and expander mixing lemma.",
            "analogy": "Glover and Marušič proved Hamiltonicity for many infinite families of cubic vertex-transitive graphs using algebraic tessellations.",
            "rules": [
              "Cayley digraphs and Hamiltonicity.",
              "Expander mixing lemma.",
              "Lean 4 graph automorphism library."
            ],
            "mystery": "AI symmetry engines have checked all vertex-transitive graphs up to 47 vertices, finding no new counterexamples.",
            "funFact": "The Lovász Conjecture is the ultimate manifestation of geometric symmetry giving rise to topological continuity."
          }
        },
        "history": [
          {
            "year": "1970",
            "author": "László Lovász",
            "note": "Poses the Hamiltonian path conjecture for vertex-transitive graphs."
          },
          {
            "year": "1898",
            "author": "Julius Petersen",
            "note": "Constructs the 10-vertex non-Hamiltonian vertex-transitive graph."
          },
          {
            "year": "1983",
            "author": "David Witte",
            "note": "Proves Hamiltonicity for Cayley graphs of p-groups."
          }
        ]
      },
      "ko": {
        "name": "Lovász Hamiltonian Conjecture",
        "subtitle": "Every Vertex-Transitive Graph Contains a Hamiltonian Path",
        "field": "Algebraic Graph Theory & Cayley Graphs",
        "statusBadge": "OPEN SINCE 1970",
        "grades": {
          "explorers": {
            "tagline": "If every single spot in a magical city looks IDENTICAL to every other spot, can you visit everywhere without repeating?",
            "analogy": "A graph is 'vertex-transitive' if it is so completely symmetrical that any vertex can be mapped to any other vertex by a symmetry of the graph. In 1970, Abel Prize winner László Lovász asked: Does EVERY finite connected vertex-transitive graph contain a Hamiltonian path (visiting every vertex exactly once)? In fact, almost all such graphs have full Hamiltonian CYCLES—only FIVE exceptional graphs are known in the ENTIRE universe that lack a cycle (including the Petersen graph and Coxeter graph)!",
            "rules": [
              "Vertex-transitive: Aut(G) acts transitively on V(G).",
              "Hamiltonian path: Visits every vertex once.",
              "Hamiltonian cycle: Closed loop visiting every vertex once.",
              "Five known non-Hamiltonian examples: K₂, Petersen graph, Coxeter graph, and two truncation graphs!"
            ],
            "mystery": "Every Cayley graph of an abelian group is Hamiltonian, proved by computers and induction!",
            "funFact": "The Petersen graph has 10 vertices and NO Hamiltonian cycle, but it DOES have a Hamiltonian path!"
          },
          "investigators": {
            "tagline": "Group actions on graphs, representation theory, and Cayley graphs.",
            "analogy": "Babai (1996) conjectured that there exists a constant c > 0 such that every connected vertex-transitive graph on n vertices has a cycle of length at least c n.",
            "rules": [
              "Automorphism group Aut(G).",
              "Cayley graph Cay(G, S).",
              "Lean 4 Mathlib group actions."
            ],
            "mystery": "Does every connected Cayley graph of a finite group possess a Hamiltonian cycle?",
            "funFact": "László Lovász formulated the problem in 1970."
          },
          "pioneers": {
            "tagline": "Quasirandom graphs and expander mixing lemma.",
            "analogy": "Glover and Marušič proved Hamiltonicity for many infinite families of cubic vertex-transitive graphs using algebraic tessellations.",
            "rules": [
              "Cayley digraphs and Hamiltonicity.",
              "Expander mixing lemma.",
              "Lean 4 graph automorphism library."
            ],
            "mystery": "AI symmetry engines have checked all vertex-transitive graphs up to 47 vertices, finding no new counterexamples.",
            "funFact": "The Lovász Conjecture is the ultimate manifestation of geometric symmetry giving rise to topological continuity."
          }
        },
        "history": [
          {
            "year": "1970",
            "author": "László Lovász",
            "note": "Poses the Hamiltonian path conjecture for vertex-transitive graphs."
          },
          {
            "year": "1898",
            "author": "Julius Petersen",
            "note": "Constructs the 10-vertex non-Hamiltonian vertex-transitive graph."
          },
          {
            "year": "1983",
            "author": "David Witte",
            "note": "Proves Hamiltonicity for Cayley graphs of p-groups."
          }
        ]
      },
      "zh-Hans": {
        "name": "洛瓦兹对称图哈密顿猜想",
        "subtitle": "每个点传递高度对称图必含有哈密顿路径（仅有5个已知无哈密顿圈的特殊反例）",
        "field": "代数图论 & 凯莱对称图",
        "statusBadge": "自1970年高悬至今",
        "grades": {
          "explorers": {
            "tagline": "如果一座对称之城里的每个十字路口看起来都完全一模一样，你能不能不走回头路逛遍整座城市？",
            "analogy": "如果一个图具有完美的内在对称性，使得图上的任意两个顶点都可以通过某种空间对称操作相互对调，这种图被称为“点传递图”（顶点传递）。1970年阿贝尔奖得主拉斯洛·洛瓦兹提出猜想：任意有限连通的点传递图，是否必定包含一条遍历所有节点的哈密顿路径？不仅如此，在整个数学宇宙中，除却区区 5 个极其特殊的例外（包括著名的彼得森图与考克斯特图），所有已知的点传递图居然全都有完美的闭合哈密顿圈！",
            "rules": [
              "点传递：自同构群在所有顶点上具备传递作用。",
              "哈密顿路径：不重不漏访问所有节点一次的单向路径。",
              "哈密顿圈：形成完美闭环的遍历。",
              "全宇宙已知仅有 5 个无哈密顿圈的特殊图：$K_2$、彼得森图、考克斯特图以及两个衍生图！"
            ],
            "mystery": "阿贝尔交换群对应的所有凯莱图都已经获证必定拥有哈密顿圈！",
            "funFact": "包含 10 个顶点的彼得森图虽然没有哈密顿闭合圈，但它确实拥有一条连通所有顶点的哈密顿路径！"
          },
          "investigators": {
            "tagline": "有限群在图上的代数作用、表示论与凯莱图。",
            "analogy": "鲍鲍伊于1996年猜想：存在常数 $c > 0$，使得任何点传递图都包含长度至少为 $c n$ 的超长圈。",
            "rules": [
              "图的自同构群形式化。",
              "群生成元生成的凯莱图。",
              "Lean 4 Mathlib 置换群作用与轨道-稳定子定理。"
            ],
            "mystery": "任意有限群的连通凯莱图是否都必定拥有哈密顿圈？",
            "funFact": "拉斯洛·洛瓦兹于1970年提出。"
          },
          "pioneers": {
            "tagline": "拟随机图、膨胀子混合引理与自同构代数。",
            "analogy": "格洛弗与马鲁希奇运用代数镶嵌技术证明了许多三次正则点传递图族的哈密顿性。",
            "rules": [
              "凯莱有向图哈密顿圈判据。",
              "膨胀子混合引理。",
              "Lean 4 图自同构形式化。"
            ],
            "mystery": "AI 代数系统已扫描了 47 阶以内的所有点传递图，未发现任何新的非哈密顿奇异图。",
            "funFact": "洛瓦兹猜想是崇高代数对称性必然孕育出全局拓扑闭环的最深刻彰显。"
          }
        },
        "history": [
          {
            "year": "1970",
            "author": "拉斯洛·洛瓦兹",
            "note": "正式提出对称图哈密顿路径猜想。"
          },
          {
            "year": "1898",
            "author": "彼得森",
            "note": "发现著名的 10 阶彼得森对称反例图。"
          },
          {
            "year": "1983",
            "author": "大卫·维特",
            "note": "证明素数阶 p-群凯莱图必有哈密顿圈。"
          }
        ]
      },
      "zh-Hant": {
        "name": "Lovász Hamiltonian Conjecture",
        "subtitle": "Every Vertex-Transitive Graph Contains a Hamiltonian Path",
        "field": "Algebraic Graph Theory & Cayley Graphs",
        "statusBadge": "OPEN SINCE 1970",
        "grades": {
          "explorers": {
            "tagline": "If every single spot in a magical city looks IDENTICAL to every other spot, can you visit everywhere without repeating?",
            "analogy": "A graph is 'vertex-transitive' if it is so completely symmetrical that any vertex can be mapped to any other vertex by a symmetry of the graph. In 1970, Abel Prize winner László Lovász asked: Does EVERY finite connected vertex-transitive graph contain a Hamiltonian path (visiting every vertex exactly once)? In fact, almost all such graphs have full Hamiltonian CYCLES—only FIVE exceptional graphs are known in the ENTIRE universe that lack a cycle (including the Petersen graph and Coxeter graph)!",
            "rules": [
              "Vertex-transitive: Aut(G) acts transitively on V(G).",
              "Hamiltonian path: Visits every vertex once.",
              "Hamiltonian cycle: Closed loop visiting every vertex once.",
              "Five known non-Hamiltonian examples: K₂, Petersen graph, Coxeter graph, and two truncation graphs!"
            ],
            "mystery": "Every Cayley graph of an abelian group is Hamiltonian, proved by computers and induction!",
            "funFact": "The Petersen graph has 10 vertices and NO Hamiltonian cycle, but it DOES have a Hamiltonian path!"
          },
          "investigators": {
            "tagline": "Group actions on graphs, representation theory, and Cayley graphs.",
            "analogy": "Babai (1996) conjectured that there exists a constant c > 0 such that every connected vertex-transitive graph on n vertices has a cycle of length at least c n.",
            "rules": [
              "Automorphism group Aut(G).",
              "Cayley graph Cay(G, S).",
              "Lean 4 Mathlib group actions."
            ],
            "mystery": "Does every connected Cayley graph of a finite group possess a Hamiltonian cycle?",
            "funFact": "László Lovász formulated the problem in 1970."
          },
          "pioneers": {
            "tagline": "Quasirandom graphs and expander mixing lemma.",
            "analogy": "Glover and Marušič proved Hamiltonicity for many infinite families of cubic vertex-transitive graphs using algebraic tessellations.",
            "rules": [
              "Cayley digraphs and Hamiltonicity.",
              "Expander mixing lemma.",
              "Lean 4 graph automorphism library."
            ],
            "mystery": "AI symmetry engines have checked all vertex-transitive graphs up to 47 vertices, finding no new counterexamples.",
            "funFact": "The Lovász Conjecture is the ultimate manifestation of geometric symmetry giving rise to topological continuity."
          }
        },
        "history": [
          {
            "year": "1970",
            "author": "László Lovász",
            "note": "Poses the Hamiltonian path conjecture for vertex-transitive graphs."
          },
          {
            "year": "1898",
            "author": "Julius Petersen",
            "note": "Constructs the 10-vertex non-Hamiltonian vertex-transitive graph."
          },
          {
            "year": "1983",
            "author": "David Witte",
            "note": "Proves Hamiltonicity for Cayley graphs of p-groups."
          }
        ]
      }
    }
  },
  {
    "id": "erdos-gyarfas",
    "icon": "⚡",
    "difficulty": "All Ages",
    "domain": "graph-theory",
    "category": "graph-theory",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Combinatorics.SimpleGraph.Basic\n-- Erdős-Gyárfás Conjecture (1995)\n-- Every simple graph with minimum degree ≥ 3 contains a simple cycle of length 2^k for some integer k.",
    "locales": {
      "en": {
        "name": "Erdős-Gyárfás Conjecture",
        "subtitle": "Does Every Graph with Minimum Degree 3 Contain a Cycle of Length $2^k$?",
        "field": "Extremal Graph Theory & Cycle Lengths",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "If everyone at a party has at least 3 friends, can you always form a friendship circle of 4, 8, 16, or 32 people?",
            "analogy": "In 1995, Paul Erdős and András Gyárfás asked: If every vertex in a graph has at least 3 neighbors (degree ≥ 3), must there ALWAYS exist a simple cycle whose length is a power of two (4, 8, 16, 32, 64...)? The condition prevents trees and simple paths, forcing cycles. But can clever engineers construct a graph where ALL cycles avoid powers of two? Decades later, no counterexample has ever been found!",
            "rules": [
              "Simple graph G with minimum degree δ(G) ≥ 3.",
              "Cycle length must be in {4, 8, 16, 32, 64, 128, ...}.",
              "Gordon Royle and computer searches found no counterexample up to 17 vertices.",
              "Conjecture: Such a cycle always exists!"
            ],
            "mystery": "A counterexample with minimum degree 3 would have to have girth (shortest cycle) at least 5 and avoid 4, 8, 16...",
            "funFact": "If true, it fails for degree 2: A simple 5-cycle or 7-cycle has degree 2 everywhere and has NO power-of-two cycle!"
          },
          "investigators": {
            "tagline": "Girth, expansion, and chromatic number.",
            "analogy": "Sudakov and Verstraëte (2008) proved that graphs with average degree d contain cycles of many distinct even lengths.",
            "rules": [
              "Girth g(G) ≥ 5 constraint.",
              "Bondy's pancyclic theorem.",
              "Lean 4 Mathlib simple graph cycles."
            ],
            "mystery": "Does every 3-regular cubic graph contain a cycle of length 2^k?",
            "funFact": "Paul Erdős and András Gyárfás proposed the conjecture in 1995."
          },
          "pioneers": {
            "tagline": "Random graphs and cycle distribution in Erdős-Rényi models.",
            "analogy": "In G(n, p), cycles of length 2^k appear almost surely once average degree exceeds 3.",
            "rules": [
              "Branching process cycle emergence.",
              "Lovász Local Lemma.",
              "Lean 4 formal cycle detection."
            ],
            "mystery": "AI automated graph search engines have exhaustively tested billions of cubic graphs up to 34 vertices without finding a single counterexample.",
            "funFact": "The Erdős-Gyárfás Conjecture is one of the most playful yet obstinate riddles left by Paul Erdős."
          }
        },
        "history": [
          {
            "year": "1995",
            "author": "Erdős & Gyárfás",
            "note": "Formulate power-of-two cycle conjecture."
          },
          {
            "year": "2002",
            "author": "Gordon Royle",
            "note": "Exhaustive computer search confirms conjecture up to n = 17."
          },
          {
            "year": "2008",
            "author": "Sudakov & Verstraëte",
            "note": "Prove general results on cycles of even length in dense graphs."
          }
        ]
      },
      "de": {
        "name": "Erdős-Gyárfás Conjecture",
        "subtitle": "Does Every Graph with Minimum Degree 3 Contain a Cycle of Length $2^k$?",
        "field": "Extremal Graph Theory & Cycle Lengths",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "If everyone at a party has at least 3 friends, can you always form a friendship circle of 4, 8, 16, or 32 people?",
            "analogy": "In 1995, Paul Erdős and András Gyárfás asked: If every vertex in a graph has at least 3 neighbors (degree ≥ 3), must there ALWAYS exist a simple cycle whose length is a power of two (4, 8, 16, 32, 64...)? The condition prevents trees and simple paths, forcing cycles. But can clever engineers construct a graph where ALL cycles avoid powers of two? Decades later, no counterexample has ever been found!",
            "rules": [
              "Simple graph G with minimum degree δ(G) ≥ 3.",
              "Cycle length must be in {4, 8, 16, 32, 64, 128, ...}.",
              "Gordon Royle and computer searches found no counterexample up to 17 vertices.",
              "Conjecture: Such a cycle always exists!"
            ],
            "mystery": "A counterexample with minimum degree 3 would have to have girth (shortest cycle) at least 5 and avoid 4, 8, 16...",
            "funFact": "If true, it fails for degree 2: A simple 5-cycle or 7-cycle has degree 2 everywhere and has NO power-of-two cycle!"
          },
          "investigators": {
            "tagline": "Girth, expansion, and chromatic number.",
            "analogy": "Sudakov and Verstraëte (2008) proved that graphs with average degree d contain cycles of many distinct even lengths.",
            "rules": [
              "Girth g(G) ≥ 5 constraint.",
              "Bondy's pancyclic theorem.",
              "Lean 4 Mathlib simple graph cycles."
            ],
            "mystery": "Does every 3-regular cubic graph contain a cycle of length 2^k?",
            "funFact": "Paul Erdős and András Gyárfás proposed the conjecture in 1995."
          },
          "pioneers": {
            "tagline": "Random graphs and cycle distribution in Erdős-Rényi models.",
            "analogy": "In G(n, p), cycles of length 2^k appear almost surely once average degree exceeds 3.",
            "rules": [
              "Branching process cycle emergence.",
              "Lovász Local Lemma.",
              "Lean 4 formal cycle detection."
            ],
            "mystery": "AI automated graph search engines have exhaustively tested billions of cubic graphs up to 34 vertices without finding a single counterexample.",
            "funFact": "The Erdős-Gyárfás Conjecture is one of the most playful yet obstinate riddles left by Paul Erdős."
          }
        },
        "history": [
          {
            "year": "1995",
            "author": "Erdős & Gyárfás",
            "note": "Formulate power-of-two cycle conjecture."
          },
          {
            "year": "2002",
            "author": "Gordon Royle",
            "note": "Exhaustive computer search confirms conjecture up to n = 17."
          },
          {
            "year": "2008",
            "author": "Sudakov & Verstraëte",
            "note": "Prove general results on cycles of even length in dense graphs."
          }
        ]
      },
      "fr": {
        "name": "Erdős-Gyárfás Conjecture",
        "subtitle": "Does Every Graph with Minimum Degree 3 Contain a Cycle of Length $2^k$?",
        "field": "Extremal Graph Theory & Cycle Lengths",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "If everyone at a party has at least 3 friends, can you always form a friendship circle of 4, 8, 16, or 32 people?",
            "analogy": "In 1995, Paul Erdős and András Gyárfás asked: If every vertex in a graph has at least 3 neighbors (degree ≥ 3), must there ALWAYS exist a simple cycle whose length is a power of two (4, 8, 16, 32, 64...)? The condition prevents trees and simple paths, forcing cycles. But can clever engineers construct a graph where ALL cycles avoid powers of two? Decades later, no counterexample has ever been found!",
            "rules": [
              "Simple graph G with minimum degree δ(G) ≥ 3.",
              "Cycle length must be in {4, 8, 16, 32, 64, 128, ...}.",
              "Gordon Royle and computer searches found no counterexample up to 17 vertices.",
              "Conjecture: Such a cycle always exists!"
            ],
            "mystery": "A counterexample with minimum degree 3 would have to have girth (shortest cycle) at least 5 and avoid 4, 8, 16...",
            "funFact": "If true, it fails for degree 2: A simple 5-cycle or 7-cycle has degree 2 everywhere and has NO power-of-two cycle!"
          },
          "investigators": {
            "tagline": "Girth, expansion, and chromatic number.",
            "analogy": "Sudakov and Verstraëte (2008) proved that graphs with average degree d contain cycles of many distinct even lengths.",
            "rules": [
              "Girth g(G) ≥ 5 constraint.",
              "Bondy's pancyclic theorem.",
              "Lean 4 Mathlib simple graph cycles."
            ],
            "mystery": "Does every 3-regular cubic graph contain a cycle of length 2^k?",
            "funFact": "Paul Erdős and András Gyárfás proposed the conjecture in 1995."
          },
          "pioneers": {
            "tagline": "Random graphs and cycle distribution in Erdős-Rényi models.",
            "analogy": "In G(n, p), cycles of length 2^k appear almost surely once average degree exceeds 3.",
            "rules": [
              "Branching process cycle emergence.",
              "Lovász Local Lemma.",
              "Lean 4 formal cycle detection."
            ],
            "mystery": "AI automated graph search engines have exhaustively tested billions of cubic graphs up to 34 vertices without finding a single counterexample.",
            "funFact": "The Erdős-Gyárfás Conjecture is one of the most playful yet obstinate riddles left by Paul Erdős."
          }
        },
        "history": [
          {
            "year": "1995",
            "author": "Erdős & Gyárfás",
            "note": "Formulate power-of-two cycle conjecture."
          },
          {
            "year": "2002",
            "author": "Gordon Royle",
            "note": "Exhaustive computer search confirms conjecture up to n = 17."
          },
          {
            "year": "2008",
            "author": "Sudakov & Verstraëte",
            "note": "Prove general results on cycles of even length in dense graphs."
          }
        ]
      },
      "it": {
        "name": "Erdős-Gyárfás Conjecture",
        "subtitle": "Does Every Graph with Minimum Degree 3 Contain a Cycle of Length $2^k$?",
        "field": "Extremal Graph Theory & Cycle Lengths",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "If everyone at a party has at least 3 friends, can you always form a friendship circle of 4, 8, 16, or 32 people?",
            "analogy": "In 1995, Paul Erdős and András Gyárfás asked: If every vertex in a graph has at least 3 neighbors (degree ≥ 3), must there ALWAYS exist a simple cycle whose length is a power of two (4, 8, 16, 32, 64...)? The condition prevents trees and simple paths, forcing cycles. But can clever engineers construct a graph where ALL cycles avoid powers of two? Decades later, no counterexample has ever been found!",
            "rules": [
              "Simple graph G with minimum degree δ(G) ≥ 3.",
              "Cycle length must be in {4, 8, 16, 32, 64, 128, ...}.",
              "Gordon Royle and computer searches found no counterexample up to 17 vertices.",
              "Conjecture: Such a cycle always exists!"
            ],
            "mystery": "A counterexample with minimum degree 3 would have to have girth (shortest cycle) at least 5 and avoid 4, 8, 16...",
            "funFact": "If true, it fails for degree 2: A simple 5-cycle or 7-cycle has degree 2 everywhere and has NO power-of-two cycle!"
          },
          "investigators": {
            "tagline": "Girth, expansion, and chromatic number.",
            "analogy": "Sudakov and Verstraëte (2008) proved that graphs with average degree d contain cycles of many distinct even lengths.",
            "rules": [
              "Girth g(G) ≥ 5 constraint.",
              "Bondy's pancyclic theorem.",
              "Lean 4 Mathlib simple graph cycles."
            ],
            "mystery": "Does every 3-regular cubic graph contain a cycle of length 2^k?",
            "funFact": "Paul Erdős and András Gyárfás proposed the conjecture in 1995."
          },
          "pioneers": {
            "tagline": "Random graphs and cycle distribution in Erdős-Rényi models.",
            "analogy": "In G(n, p), cycles of length 2^k appear almost surely once average degree exceeds 3.",
            "rules": [
              "Branching process cycle emergence.",
              "Lovász Local Lemma.",
              "Lean 4 formal cycle detection."
            ],
            "mystery": "AI automated graph search engines have exhaustively tested billions of cubic graphs up to 34 vertices without finding a single counterexample.",
            "funFact": "The Erdős-Gyárfás Conjecture is one of the most playful yet obstinate riddles left by Paul Erdős."
          }
        },
        "history": [
          {
            "year": "1995",
            "author": "Erdős & Gyárfás",
            "note": "Formulate power-of-two cycle conjecture."
          },
          {
            "year": "2002",
            "author": "Gordon Royle",
            "note": "Exhaustive computer search confirms conjecture up to n = 17."
          },
          {
            "year": "2008",
            "author": "Sudakov & Verstraëte",
            "note": "Prove general results on cycles of even length in dense graphs."
          }
        ]
      },
      "ja": {
        "name": "Erdős-Gyárfás Conjecture",
        "subtitle": "Does Every Graph with Minimum Degree 3 Contain a Cycle of Length $2^k$?",
        "field": "Extremal Graph Theory & Cycle Lengths",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "If everyone at a party has at least 3 friends, can you always form a friendship circle of 4, 8, 16, or 32 people?",
            "analogy": "In 1995, Paul Erdős and András Gyárfás asked: If every vertex in a graph has at least 3 neighbors (degree ≥ 3), must there ALWAYS exist a simple cycle whose length is a power of two (4, 8, 16, 32, 64...)? The condition prevents trees and simple paths, forcing cycles. But can clever engineers construct a graph where ALL cycles avoid powers of two? Decades later, no counterexample has ever been found!",
            "rules": [
              "Simple graph G with minimum degree δ(G) ≥ 3.",
              "Cycle length must be in {4, 8, 16, 32, 64, 128, ...}.",
              "Gordon Royle and computer searches found no counterexample up to 17 vertices.",
              "Conjecture: Such a cycle always exists!"
            ],
            "mystery": "A counterexample with minimum degree 3 would have to have girth (shortest cycle) at least 5 and avoid 4, 8, 16...",
            "funFact": "If true, it fails for degree 2: A simple 5-cycle or 7-cycle has degree 2 everywhere and has NO power-of-two cycle!"
          },
          "investigators": {
            "tagline": "Girth, expansion, and chromatic number.",
            "analogy": "Sudakov and Verstraëte (2008) proved that graphs with average degree d contain cycles of many distinct even lengths.",
            "rules": [
              "Girth g(G) ≥ 5 constraint.",
              "Bondy's pancyclic theorem.",
              "Lean 4 Mathlib simple graph cycles."
            ],
            "mystery": "Does every 3-regular cubic graph contain a cycle of length 2^k?",
            "funFact": "Paul Erdős and András Gyárfás proposed the conjecture in 1995."
          },
          "pioneers": {
            "tagline": "Random graphs and cycle distribution in Erdős-Rényi models.",
            "analogy": "In G(n, p), cycles of length 2^k appear almost surely once average degree exceeds 3.",
            "rules": [
              "Branching process cycle emergence.",
              "Lovász Local Lemma.",
              "Lean 4 formal cycle detection."
            ],
            "mystery": "AI automated graph search engines have exhaustively tested billions of cubic graphs up to 34 vertices without finding a single counterexample.",
            "funFact": "The Erdős-Gyárfás Conjecture is one of the most playful yet obstinate riddles left by Paul Erdős."
          }
        },
        "history": [
          {
            "year": "1995",
            "author": "Erdős & Gyárfás",
            "note": "Formulate power-of-two cycle conjecture."
          },
          {
            "year": "2002",
            "author": "Gordon Royle",
            "note": "Exhaustive computer search confirms conjecture up to n = 17."
          },
          {
            "year": "2008",
            "author": "Sudakov & Verstraëte",
            "note": "Prove general results on cycles of even length in dense graphs."
          }
        ]
      },
      "ko": {
        "name": "Erdős-Gyárfás Conjecture",
        "subtitle": "Does Every Graph with Minimum Degree 3 Contain a Cycle of Length $2^k$?",
        "field": "Extremal Graph Theory & Cycle Lengths",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "If everyone at a party has at least 3 friends, can you always form a friendship circle of 4, 8, 16, or 32 people?",
            "analogy": "In 1995, Paul Erdős and András Gyárfás asked: If every vertex in a graph has at least 3 neighbors (degree ≥ 3), must there ALWAYS exist a simple cycle whose length is a power of two (4, 8, 16, 32, 64...)? The condition prevents trees and simple paths, forcing cycles. But can clever engineers construct a graph where ALL cycles avoid powers of two? Decades later, no counterexample has ever been found!",
            "rules": [
              "Simple graph G with minimum degree δ(G) ≥ 3.",
              "Cycle length must be in {4, 8, 16, 32, 64, 128, ...}.",
              "Gordon Royle and computer searches found no counterexample up to 17 vertices.",
              "Conjecture: Such a cycle always exists!"
            ],
            "mystery": "A counterexample with minimum degree 3 would have to have girth (shortest cycle) at least 5 and avoid 4, 8, 16...",
            "funFact": "If true, it fails for degree 2: A simple 5-cycle or 7-cycle has degree 2 everywhere and has NO power-of-two cycle!"
          },
          "investigators": {
            "tagline": "Girth, expansion, and chromatic number.",
            "analogy": "Sudakov and Verstraëte (2008) proved that graphs with average degree d contain cycles of many distinct even lengths.",
            "rules": [
              "Girth g(G) ≥ 5 constraint.",
              "Bondy's pancyclic theorem.",
              "Lean 4 Mathlib simple graph cycles."
            ],
            "mystery": "Does every 3-regular cubic graph contain a cycle of length 2^k?",
            "funFact": "Paul Erdős and András Gyárfás proposed the conjecture in 1995."
          },
          "pioneers": {
            "tagline": "Random graphs and cycle distribution in Erdős-Rényi models.",
            "analogy": "In G(n, p), cycles of length 2^k appear almost surely once average degree exceeds 3.",
            "rules": [
              "Branching process cycle emergence.",
              "Lovász Local Lemma.",
              "Lean 4 formal cycle detection."
            ],
            "mystery": "AI automated graph search engines have exhaustively tested billions of cubic graphs up to 34 vertices without finding a single counterexample.",
            "funFact": "The Erdős-Gyárfás Conjecture is one of the most playful yet obstinate riddles left by Paul Erdős."
          }
        },
        "history": [
          {
            "year": "1995",
            "author": "Erdős & Gyárfás",
            "note": "Formulate power-of-two cycle conjecture."
          },
          {
            "year": "2002",
            "author": "Gordon Royle",
            "note": "Exhaustive computer search confirms conjecture up to n = 17."
          },
          {
            "year": "2008",
            "author": "Sudakov & Verstraëte",
            "note": "Prove general results on cycles of even length in dense graphs."
          }
        ]
      },
      "zh-Hans": {
        "name": "埃尔德什-加法斯猜想",
        "subtitle": "每个最小度数至少为 3 的图是否必定包含长度为 2 的幂次方的简单回路？",
        "field": "极值图论 & 回路长度分布",
        "statusBadge": "未解之谜",
        "grades": {
          "explorers": {
            "tagline": "如果派对上的每个人都至少有3个好朋友，大家能不能手拉手围成一个刚好是 4 人、8 人、16 人或 32 人的朋友圈？",
            "analogy": "1995年保罗·埃尔德什与安德拉斯·加法斯提出：如果一个网络中的每个节点都至少连接着 3 条边（度数 ≥ 3），那么网络中是否必定能找到一个长度恰好是 2 的整数幂次方（如 4, 8, 16, 32, 64...）的简单回路？虽然度数 ≥ 3 必然逼出环路，但有没有可能精心设计某种奇特的图，让里面的所有环巧妙避开所有 2 的幂？至今无人能证明，亦无人能找到反例！",
            "rules": [
              "每个顶点度数 $\\delta(G) \\ge 3$ 的简单图。",
              "回路长度必须属于集合 $\\{4, 8, 16, 32, 64, 128, \\dots\\}$。",
              "计算机搜索已彻底排查到 17 个顶点的所有可能图，无一反例。",
              "猜想断言：必定存在这种长度为 2 的幂的回路！"
            ],
            "mystery": "如果要构造一个反例，它的最短环必须至少是 5（避开 4），并且还要同时避开 8, 16, 32... 极难构造！",
            "funFact": "如果条件放松到度数 ≥ 2 则立即失效：一个孤立的五边形（长度5）其顶点度数均为 2，但里面绝无 2 的幂次环！"
          },
          "investigators": {
            "tagline": "图的围长、谱膨胀性质与色数分布。",
            "analogy": "苏达科夫与费尔斯特拉特于2008年证明：平均度数为 d 的图必定包含极为丰富的不同偶数长度回路。",
            "rules": [
              "无 4-圈围长下界约束。",
              "邦迪泛圈图定理。",
              "Lean 4 简单图回路形式化。"
            ],
            "mystery": "是否每个 3-正则图都必定包含长度为 2 的幂的回路？（三次图特例依然悬案）",
            "funFact": "埃尔德什与加法斯于1995年提出。"
          },
          "pioneers": {
            "tagline": "随机图论与埃尔德什-雷尼模型中的圈分布。",
            "analogy": "在经典的随机图模型中，只要平均度数超过 3，长度为 2 的幂的回路几乎必然呈指数级涌现。",
            "rules": [
              "分支过程圈涌现极限定理。",
              "洛瓦兹局部引理。",
              "Lean 4 形式化圈检测算法。"
            ],
            "mystery": "AI 自动化搜索已排查了多达数十亿个 34 阶以内的三次图，无一反例，强烈支持猜想成立！",
            "funFact": "埃尔德什-加法斯猜想是保罗·埃尔德什留给后世最风趣幽默却又固若金汤的离散图论遗珠。"
          }
        },
        "history": [
          {
            "year": "1995",
            "author": "埃尔德什 & 加法斯",
            "note": "正式提出 2 的幂次方回路存在性猜想。"
          },
          {
            "year": "2002",
            "author": "戈登·罗伊尔",
            "note": "计算机穷举验证 17 阶以内所有图。"
          },
          {
            "year": "2008",
            "author": "苏达科夫 & 费尔斯特拉特",
            "note": "发表稠密图偶数长度圈深层极值分布定理。"
          }
        ]
      },
      "zh-Hant": {
        "name": "Erdős-Gyárfás Conjecture",
        "subtitle": "Does Every Graph with Minimum Degree 3 Contain a Cycle of Length $2^k$?",
        "field": "Extremal Graph Theory & Cycle Lengths",
        "statusBadge": "OPEN MYSTERY",
        "grades": {
          "explorers": {
            "tagline": "If everyone at a party has at least 3 friends, can you always form a friendship circle of 4, 8, 16, or 32 people?",
            "analogy": "In 1995, Paul Erdős and András Gyárfás asked: If every vertex in a graph has at least 3 neighbors (degree ≥ 3), must there ALWAYS exist a simple cycle whose length is a power of two (4, 8, 16, 32, 64...)? The condition prevents trees and simple paths, forcing cycles. But can clever engineers construct a graph where ALL cycles avoid powers of two? Decades later, no counterexample has ever been found!",
            "rules": [
              "Simple graph G with minimum degree δ(G) ≥ 3.",
              "Cycle length must be in {4, 8, 16, 32, 64, 128, ...}.",
              "Gordon Royle and computer searches found no counterexample up to 17 vertices.",
              "Conjecture: Such a cycle always exists!"
            ],
            "mystery": "A counterexample with minimum degree 3 would have to have girth (shortest cycle) at least 5 and avoid 4, 8, 16...",
            "funFact": "If true, it fails for degree 2: A simple 5-cycle or 7-cycle has degree 2 everywhere and has NO power-of-two cycle!"
          },
          "investigators": {
            "tagline": "Girth, expansion, and chromatic number.",
            "analogy": "Sudakov and Verstraëte (2008) proved that graphs with average degree d contain cycles of many distinct even lengths.",
            "rules": [
              "Girth g(G) ≥ 5 constraint.",
              "Bondy's pancyclic theorem.",
              "Lean 4 Mathlib simple graph cycles."
            ],
            "mystery": "Does every 3-regular cubic graph contain a cycle of length 2^k?",
            "funFact": "Paul Erdős and András Gyárfás proposed the conjecture in 1995."
          },
          "pioneers": {
            "tagline": "Random graphs and cycle distribution in Erdős-Rényi models.",
            "analogy": "In G(n, p), cycles of length 2^k appear almost surely once average degree exceeds 3.",
            "rules": [
              "Branching process cycle emergence.",
              "Lovász Local Lemma.",
              "Lean 4 formal cycle detection."
            ],
            "mystery": "AI automated graph search engines have exhaustively tested billions of cubic graphs up to 34 vertices without finding a single counterexample.",
            "funFact": "The Erdős-Gyárfás Conjecture is one of the most playful yet obstinate riddles left by Paul Erdős."
          }
        },
        "history": [
          {
            "year": "1995",
            "author": "Erdős & Gyárfás",
            "note": "Formulate power-of-two cycle conjecture."
          },
          {
            "year": "2002",
            "author": "Gordon Royle",
            "note": "Exhaustive computer search confirms conjecture up to n = 17."
          },
          {
            "year": "2008",
            "author": "Sudakov & Verstraëte",
            "note": "Prove general results on cycles of even length in dense graphs."
          }
        ]
      }
    }
  },
  {
    "id": "graham-tree-packing",
    "icon": "🌲",
    "difficulty": "Gr 9+",
    "domain": "graph-theory",
    "category": "graph-theory",
    "isMillennium": false,
    "isAIFrontier": false,
    "simId": "universal-sim",
    "leanCode": "import Mathlib.Combinatorics.SimpleGraph.Basic\n-- Tree Packing Conjecture (Gyárfás-Lehel 1976 / Graham)\n-- Any sequence of trees T₁, T₂, ..., T_n with |V(T_i)| = i can be packed edge-disjointly into K_n.\n-- Proved for all sufficiently large n by Joos, Kühn, Osthus, Bowtell in 2019.",
    "locales": {
      "en": {
        "name": "Tree Packing Conjecture",
        "subtitle": "Packing Trees of Sizes 1 to $n$ Edge-Disjointly into $K_n$ (Proved for Large $n$)",
        "field": "Extremal Combinatorics & Graph Decomposition",
        "statusBadge": "PROVED FOR LARGE n (2019)",
        "grades": {
          "explorers": {
            "tagline": "Can you pack n trees of all different sizes inside one complete spiderweb without any branches crossing?",
            "analogy": "The complete graph $K_n$ has exactly $n(n-1)/2$ edges. Notice that the sum of edges of trees with 1, 2, 3, ..., n vertices is: 0 + 1 + 2 + ... + (n-1) = $n(n-1)/2$—the EXACT SAME number of edges! In 1976, András Gyárfás and Jenő Lehel (and independently Ron Graham) conjectured: For ANY choice of trees $T_1, T_2, ..., T_n$ (where $T_i$ has $i$ vertices), they can ALWAYS be packed into $K_n$ sharing NO edges! In 2019, Joos, Kühn, Osthus, and Bowtell proved it true for all large $n$!",
            "rules": [
              "Complete graph K_n with n(n-1)/2 edges.",
              "Sequence of trees T_1, ..., T_n with |V(T_i)| = i.",
              "Total edges: ∑ (i-1) = n(n-1)/2 (perfect match!).",
              "Proved for all large n by Joos et al. in 2019!"
            ],
            "mystery": "Ron Graham famously offered a prize for this problem, celebrating the incredible numerological coincidence that total tree edges equal K_n edges!",
            "funFact": "Special cases where all trees are stars or all trees are paths were solved in the 1980s by elementary constructions!"
          },
          "investigators": {
            "tagline": "Probabilistic absorption and blow-up lemma for trees.",
            "analogy": "Joos, Kühn, Osthus, and Bowtell decomposed K_n into quasirandom expanders, using randomized packing for small trees and absorption for large trees.",
            "rules": [
              "Tree packing edge sum: ∑ e(T_i) = C(n, 2).",
              "Randomized absorption method (2019).",
              "Lean 4 Mathlib tree embeddings."
            ],
            "mystery": "Can we bridge the finite bound to prove the conjecture universally for all small n ≤ 100?",
            "funFact": "Posed by Gyárfás & Lehel in 1976 and popularized by Ron Graham."
          },
          "pioneers": {
            "tagline": "Hypergraph matchings and fractional tree packings.",
            "analogy": "Yuster proved in 1999 that almost all sequences of trees can be asymptotically packed into K_n.",
            "rules": [
              "Rödl nibble for fractional tree packing.",
              "Kühn-Osthus absorption framework.",
              "Lean 4 tree decomposition library."
            ],
            "mystery": "AI combinatorial solvers optimize branch placement for n = 20 tree sequences in real-time.",
            "funFact": "The Tree Packing Conjecture is the ultimate symphony of discrete conservation and exact geometric tiling."
          }
        },
        "history": [
          {
            "year": "1976",
            "author": "Gyárfás & Lehel",
            "note": "Formulate the Tree Packing Conjecture."
          },
          {
            "year": "1999",
            "author": "Raphael Yuster",
            "note": "Proves asymptotic packing for almost all tree families."
          },
          {
            "year": "2019",
            "author": "Joos, Kühn, Osthus & Bowtell",
            "note": "Deliver landmark proof of Tree Packing Conjecture for all large n."
          }
        ]
      },
      "de": {
        "name": "Tree Packing Conjecture",
        "subtitle": "Packing Trees of Sizes 1 to $n$ Edge-Disjointly into $K_n$ (Proved for Large $n$)",
        "field": "Extremal Combinatorics & Graph Decomposition",
        "statusBadge": "PROVED FOR LARGE n (2019)",
        "grades": {
          "explorers": {
            "tagline": "Can you pack n trees of all different sizes inside one complete spiderweb without any branches crossing?",
            "analogy": "The complete graph $K_n$ has exactly $n(n-1)/2$ edges. Notice that the sum of edges of trees with 1, 2, 3, ..., n vertices is: 0 + 1 + 2 + ... + (n-1) = $n(n-1)/2$—the EXACT SAME number of edges! In 1976, András Gyárfás and Jenő Lehel (and independently Ron Graham) conjectured: For ANY choice of trees $T_1, T_2, ..., T_n$ (where $T_i$ has $i$ vertices), they can ALWAYS be packed into $K_n$ sharing NO edges! In 2019, Joos, Kühn, Osthus, and Bowtell proved it true for all large $n$!",
            "rules": [
              "Complete graph K_n with n(n-1)/2 edges.",
              "Sequence of trees T_1, ..., T_n with |V(T_i)| = i.",
              "Total edges: ∑ (i-1) = n(n-1)/2 (perfect match!).",
              "Proved for all large n by Joos et al. in 2019!"
            ],
            "mystery": "Ron Graham famously offered a prize for this problem, celebrating the incredible numerological coincidence that total tree edges equal K_n edges!",
            "funFact": "Special cases where all trees are stars or all trees are paths were solved in the 1980s by elementary constructions!"
          },
          "investigators": {
            "tagline": "Probabilistic absorption and blow-up lemma for trees.",
            "analogy": "Joos, Kühn, Osthus, and Bowtell decomposed K_n into quasirandom expanders, using randomized packing for small trees and absorption for large trees.",
            "rules": [
              "Tree packing edge sum: ∑ e(T_i) = C(n, 2).",
              "Randomized absorption method (2019).",
              "Lean 4 Mathlib tree embeddings."
            ],
            "mystery": "Can we bridge the finite bound to prove the conjecture universally for all small n ≤ 100?",
            "funFact": "Posed by Gyárfás & Lehel in 1976 and popularized by Ron Graham."
          },
          "pioneers": {
            "tagline": "Hypergraph matchings and fractional tree packings.",
            "analogy": "Yuster proved in 1999 that almost all sequences of trees can be asymptotically packed into K_n.",
            "rules": [
              "Rödl nibble for fractional tree packing.",
              "Kühn-Osthus absorption framework.",
              "Lean 4 tree decomposition library."
            ],
            "mystery": "AI combinatorial solvers optimize branch placement for n = 20 tree sequences in real-time.",
            "funFact": "The Tree Packing Conjecture is the ultimate symphony of discrete conservation and exact geometric tiling."
          }
        },
        "history": [
          {
            "year": "1976",
            "author": "Gyárfás & Lehel",
            "note": "Formulate the Tree Packing Conjecture."
          },
          {
            "year": "1999",
            "author": "Raphael Yuster",
            "note": "Proves asymptotic packing for almost all tree families."
          },
          {
            "year": "2019",
            "author": "Joos, Kühn, Osthus & Bowtell",
            "note": "Deliver landmark proof of Tree Packing Conjecture for all large n."
          }
        ]
      },
      "fr": {
        "name": "Tree Packing Conjecture",
        "subtitle": "Packing Trees of Sizes 1 to $n$ Edge-Disjointly into $K_n$ (Proved for Large $n$)",
        "field": "Extremal Combinatorics & Graph Decomposition",
        "statusBadge": "PROVED FOR LARGE n (2019)",
        "grades": {
          "explorers": {
            "tagline": "Can you pack n trees of all different sizes inside one complete spiderweb without any branches crossing?",
            "analogy": "The complete graph $K_n$ has exactly $n(n-1)/2$ edges. Notice that the sum of edges of trees with 1, 2, 3, ..., n vertices is: 0 + 1 + 2 + ... + (n-1) = $n(n-1)/2$—the EXACT SAME number of edges! In 1976, András Gyárfás and Jenő Lehel (and independently Ron Graham) conjectured: For ANY choice of trees $T_1, T_2, ..., T_n$ (where $T_i$ has $i$ vertices), they can ALWAYS be packed into $K_n$ sharing NO edges! In 2019, Joos, Kühn, Osthus, and Bowtell proved it true for all large $n$!",
            "rules": [
              "Complete graph K_n with n(n-1)/2 edges.",
              "Sequence of trees T_1, ..., T_n with |V(T_i)| = i.",
              "Total edges: ∑ (i-1) = n(n-1)/2 (perfect match!).",
              "Proved for all large n by Joos et al. in 2019!"
            ],
            "mystery": "Ron Graham famously offered a prize for this problem, celebrating the incredible numerological coincidence that total tree edges equal K_n edges!",
            "funFact": "Special cases where all trees are stars or all trees are paths were solved in the 1980s by elementary constructions!"
          },
          "investigators": {
            "tagline": "Probabilistic absorption and blow-up lemma for trees.",
            "analogy": "Joos, Kühn, Osthus, and Bowtell decomposed K_n into quasirandom expanders, using randomized packing for small trees and absorption for large trees.",
            "rules": [
              "Tree packing edge sum: ∑ e(T_i) = C(n, 2).",
              "Randomized absorption method (2019).",
              "Lean 4 Mathlib tree embeddings."
            ],
            "mystery": "Can we bridge the finite bound to prove the conjecture universally for all small n ≤ 100?",
            "funFact": "Posed by Gyárfás & Lehel in 1976 and popularized by Ron Graham."
          },
          "pioneers": {
            "tagline": "Hypergraph matchings and fractional tree packings.",
            "analogy": "Yuster proved in 1999 that almost all sequences of trees can be asymptotically packed into K_n.",
            "rules": [
              "Rödl nibble for fractional tree packing.",
              "Kühn-Osthus absorption framework.",
              "Lean 4 tree decomposition library."
            ],
            "mystery": "AI combinatorial solvers optimize branch placement for n = 20 tree sequences in real-time.",
            "funFact": "The Tree Packing Conjecture is the ultimate symphony of discrete conservation and exact geometric tiling."
          }
        },
        "history": [
          {
            "year": "1976",
            "author": "Gyárfás & Lehel",
            "note": "Formulate the Tree Packing Conjecture."
          },
          {
            "year": "1999",
            "author": "Raphael Yuster",
            "note": "Proves asymptotic packing for almost all tree families."
          },
          {
            "year": "2019",
            "author": "Joos, Kühn, Osthus & Bowtell",
            "note": "Deliver landmark proof of Tree Packing Conjecture for all large n."
          }
        ]
      },
      "it": {
        "name": "Tree Packing Conjecture",
        "subtitle": "Packing Trees of Sizes 1 to $n$ Edge-Disjointly into $K_n$ (Proved for Large $n$)",
        "field": "Extremal Combinatorics & Graph Decomposition",
        "statusBadge": "PROVED FOR LARGE n (2019)",
        "grades": {
          "explorers": {
            "tagline": "Can you pack n trees of all different sizes inside one complete spiderweb without any branches crossing?",
            "analogy": "The complete graph $K_n$ has exactly $n(n-1)/2$ edges. Notice that the sum of edges of trees with 1, 2, 3, ..., n vertices is: 0 + 1 + 2 + ... + (n-1) = $n(n-1)/2$—the EXACT SAME number of edges! In 1976, András Gyárfás and Jenő Lehel (and independently Ron Graham) conjectured: For ANY choice of trees $T_1, T_2, ..., T_n$ (where $T_i$ has $i$ vertices), they can ALWAYS be packed into $K_n$ sharing NO edges! In 2019, Joos, Kühn, Osthus, and Bowtell proved it true for all large $n$!",
            "rules": [
              "Complete graph K_n with n(n-1)/2 edges.",
              "Sequence of trees T_1, ..., T_n with |V(T_i)| = i.",
              "Total edges: ∑ (i-1) = n(n-1)/2 (perfect match!).",
              "Proved for all large n by Joos et al. in 2019!"
            ],
            "mystery": "Ron Graham famously offered a prize for this problem, celebrating the incredible numerological coincidence that total tree edges equal K_n edges!",
            "funFact": "Special cases where all trees are stars or all trees are paths were solved in the 1980s by elementary constructions!"
          },
          "investigators": {
            "tagline": "Probabilistic absorption and blow-up lemma for trees.",
            "analogy": "Joos, Kühn, Osthus, and Bowtell decomposed K_n into quasirandom expanders, using randomized packing for small trees and absorption for large trees.",
            "rules": [
              "Tree packing edge sum: ∑ e(T_i) = C(n, 2).",
              "Randomized absorption method (2019).",
              "Lean 4 Mathlib tree embeddings."
            ],
            "mystery": "Can we bridge the finite bound to prove the conjecture universally for all small n ≤ 100?",
            "funFact": "Posed by Gyárfás & Lehel in 1976 and popularized by Ron Graham."
          },
          "pioneers": {
            "tagline": "Hypergraph matchings and fractional tree packings.",
            "analogy": "Yuster proved in 1999 that almost all sequences of trees can be asymptotically packed into K_n.",
            "rules": [
              "Rödl nibble for fractional tree packing.",
              "Kühn-Osthus absorption framework.",
              "Lean 4 tree decomposition library."
            ],
            "mystery": "AI combinatorial solvers optimize branch placement for n = 20 tree sequences in real-time.",
            "funFact": "The Tree Packing Conjecture is the ultimate symphony of discrete conservation and exact geometric tiling."
          }
        },
        "history": [
          {
            "year": "1976",
            "author": "Gyárfás & Lehel",
            "note": "Formulate the Tree Packing Conjecture."
          },
          {
            "year": "1999",
            "author": "Raphael Yuster",
            "note": "Proves asymptotic packing for almost all tree families."
          },
          {
            "year": "2019",
            "author": "Joos, Kühn, Osthus & Bowtell",
            "note": "Deliver landmark proof of Tree Packing Conjecture for all large n."
          }
        ]
      },
      "ja": {
        "name": "Tree Packing Conjecture",
        "subtitle": "Packing Trees of Sizes 1 to $n$ Edge-Disjointly into $K_n$ (Proved for Large $n$)",
        "field": "Extremal Combinatorics & Graph Decomposition",
        "statusBadge": "PROVED FOR LARGE n (2019)",
        "grades": {
          "explorers": {
            "tagline": "Can you pack n trees of all different sizes inside one complete spiderweb without any branches crossing?",
            "analogy": "The complete graph $K_n$ has exactly $n(n-1)/2$ edges. Notice that the sum of edges of trees with 1, 2, 3, ..., n vertices is: 0 + 1 + 2 + ... + (n-1) = $n(n-1)/2$—the EXACT SAME number of edges! In 1976, András Gyárfás and Jenő Lehel (and independently Ron Graham) conjectured: For ANY choice of trees $T_1, T_2, ..., T_n$ (where $T_i$ has $i$ vertices), they can ALWAYS be packed into $K_n$ sharing NO edges! In 2019, Joos, Kühn, Osthus, and Bowtell proved it true for all large $n$!",
            "rules": [
              "Complete graph K_n with n(n-1)/2 edges.",
              "Sequence of trees T_1, ..., T_n with |V(T_i)| = i.",
              "Total edges: ∑ (i-1) = n(n-1)/2 (perfect match!).",
              "Proved for all large n by Joos et al. in 2019!"
            ],
            "mystery": "Ron Graham famously offered a prize for this problem, celebrating the incredible numerological coincidence that total tree edges equal K_n edges!",
            "funFact": "Special cases where all trees are stars or all trees are paths were solved in the 1980s by elementary constructions!"
          },
          "investigators": {
            "tagline": "Probabilistic absorption and blow-up lemma for trees.",
            "analogy": "Joos, Kühn, Osthus, and Bowtell decomposed K_n into quasirandom expanders, using randomized packing for small trees and absorption for large trees.",
            "rules": [
              "Tree packing edge sum: ∑ e(T_i) = C(n, 2).",
              "Randomized absorption method (2019).",
              "Lean 4 Mathlib tree embeddings."
            ],
            "mystery": "Can we bridge the finite bound to prove the conjecture universally for all small n ≤ 100?",
            "funFact": "Posed by Gyárfás & Lehel in 1976 and popularized by Ron Graham."
          },
          "pioneers": {
            "tagline": "Hypergraph matchings and fractional tree packings.",
            "analogy": "Yuster proved in 1999 that almost all sequences of trees can be asymptotically packed into K_n.",
            "rules": [
              "Rödl nibble for fractional tree packing.",
              "Kühn-Osthus absorption framework.",
              "Lean 4 tree decomposition library."
            ],
            "mystery": "AI combinatorial solvers optimize branch placement for n = 20 tree sequences in real-time.",
            "funFact": "The Tree Packing Conjecture is the ultimate symphony of discrete conservation and exact geometric tiling."
          }
        },
        "history": [
          {
            "year": "1976",
            "author": "Gyárfás & Lehel",
            "note": "Formulate the Tree Packing Conjecture."
          },
          {
            "year": "1999",
            "author": "Raphael Yuster",
            "note": "Proves asymptotic packing for almost all tree families."
          },
          {
            "year": "2019",
            "author": "Joos, Kühn, Osthus & Bowtell",
            "note": "Deliver landmark proof of Tree Packing Conjecture for all large n."
          }
        ]
      },
      "ko": {
        "name": "Tree Packing Conjecture",
        "subtitle": "Packing Trees of Sizes 1 to $n$ Edge-Disjointly into $K_n$ (Proved for Large $n$)",
        "field": "Extremal Combinatorics & Graph Decomposition",
        "statusBadge": "PROVED FOR LARGE n (2019)",
        "grades": {
          "explorers": {
            "tagline": "Can you pack n trees of all different sizes inside one complete spiderweb without any branches crossing?",
            "analogy": "The complete graph $K_n$ has exactly $n(n-1)/2$ edges. Notice that the sum of edges of trees with 1, 2, 3, ..., n vertices is: 0 + 1 + 2 + ... + (n-1) = $n(n-1)/2$—the EXACT SAME number of edges! In 1976, András Gyárfás and Jenő Lehel (and independently Ron Graham) conjectured: For ANY choice of trees $T_1, T_2, ..., T_n$ (where $T_i$ has $i$ vertices), they can ALWAYS be packed into $K_n$ sharing NO edges! In 2019, Joos, Kühn, Osthus, and Bowtell proved it true for all large $n$!",
            "rules": [
              "Complete graph K_n with n(n-1)/2 edges.",
              "Sequence of trees T_1, ..., T_n with |V(T_i)| = i.",
              "Total edges: ∑ (i-1) = n(n-1)/2 (perfect match!).",
              "Proved for all large n by Joos et al. in 2019!"
            ],
            "mystery": "Ron Graham famously offered a prize for this problem, celebrating the incredible numerological coincidence that total tree edges equal K_n edges!",
            "funFact": "Special cases where all trees are stars or all trees are paths were solved in the 1980s by elementary constructions!"
          },
          "investigators": {
            "tagline": "Probabilistic absorption and blow-up lemma for trees.",
            "analogy": "Joos, Kühn, Osthus, and Bowtell decomposed K_n into quasirandom expanders, using randomized packing for small trees and absorption for large trees.",
            "rules": [
              "Tree packing edge sum: ∑ e(T_i) = C(n, 2).",
              "Randomized absorption method (2019).",
              "Lean 4 Mathlib tree embeddings."
            ],
            "mystery": "Can we bridge the finite bound to prove the conjecture universally for all small n ≤ 100?",
            "funFact": "Posed by Gyárfás & Lehel in 1976 and popularized by Ron Graham."
          },
          "pioneers": {
            "tagline": "Hypergraph matchings and fractional tree packings.",
            "analogy": "Yuster proved in 1999 that almost all sequences of trees can be asymptotically packed into K_n.",
            "rules": [
              "Rödl nibble for fractional tree packing.",
              "Kühn-Osthus absorption framework.",
              "Lean 4 tree decomposition library."
            ],
            "mystery": "AI combinatorial solvers optimize branch placement for n = 20 tree sequences in real-time.",
            "funFact": "The Tree Packing Conjecture is the ultimate symphony of discrete conservation and exact geometric tiling."
          }
        },
        "history": [
          {
            "year": "1976",
            "author": "Gyárfás & Lehel",
            "note": "Formulate the Tree Packing Conjecture."
          },
          {
            "year": "1999",
            "author": "Raphael Yuster",
            "note": "Proves asymptotic packing for almost all tree families."
          },
          {
            "year": "2019",
            "author": "Joos, Kühn, Osthus & Bowtell",
            "note": "Deliver landmark proof of Tree Packing Conjecture for all large n."
          }
        ]
      },
      "zh-Hans": {
        "name": "树打包猜想（加法斯-莱赫尔-葛立恒猜想）",
        "subtitle": "大小为 1 到 $n$ 的任意树族必定能无重叠边分解完全图 $K_n$（2019年大 $n$ 获证）",
        "field": "极值组合学 & 完全图分解",
        "statusBadge": "充分大 n 已获证（2019年）",
        "grades": {
          "explorers": {
            "tagline": "能不能把由小到大不同形态的 n 棵树，严丝合缝、不重不漏地嵌进一张完全蜘蛛网里？",
            "analogy": "包含 n 个顶点的完全图 $K_n$ 恰好有 $n(n-1)/2$ 条边。巧合的是，阶数分别为 1, 2, 3, ..., n 的任意一族树，它们的边数之和恰好也是：0 + 1 + 2 + ... + (n-1) = $n(n-1)/2$ 条边！1976年加法斯、莱赫尔与著名数学家葛立恒猜想：无论你随意挑选怎样的 n 棵形态各异的树，它们必定能严丝合缝、互不共用任何一条边地完美嵌入到完全图 $K_n$ 之中！2019年，英国联合研究团队运用高阶概率吸收技术，彻底证明了猜想对所有充分大的 n 完全成立！",
            "rules": [
              "含有 $n(n-1)/2$ 条边的完全图 $K_n$。",
              "任意一列包含 1 到 n 个顶点的树 $T_1, \\dots, T_n$。",
              "总边数完美守恒：$\\sum (i-1) = n(n-1)/2$！",
              "2019年国际团队证明对所有大 n 彻底成立！"
            ],
            "mystery": "葛立恒曾为此题悬赏重金，感叹不同形态树的边数之和与完全图边数在全宇宙中的完美精确匹配！",
            "funFact": "当所有树都是星形树或所有树都是简单路径时，20世纪80年代就已被初等递归构造彻底解决！"
          },
          "investigators": {
            "tagline": "概率吸收技术与极值树图膨胀引理 (Blow-up lemma)。",
            "analogy": "2019年四位学者通过将完全图分解为拟随机膨胀子，用随机贪心填充小树，并利用高精吸收子结构锁定剩余大树，完成了长达近百页的划时代证明。",
            "rules": [
              "树边数总和公式。",
              "概率吸收法全局分解定理。",
              "Lean 4 Mathlib 树子图嵌入形式化。"
            ],
            "mystery": "能否完全攻克有限剩余范围，证明该猜相对所有小 $n$ 恒成立？",
            "funFact": "加法斯与莱赫尔于1976年提出，葛立恒广为传播。"
          },
          "pioneers": {
            "tagline": "高维超图完美匹配与分数树分解。",
            "analogy": "尤斯特于1999年证明了在几乎所有的渐近随机情况下树族都能够被无缝分解。",
            "rules": [
              "超图微元咬嚼法分数树打包。",
              "库恩-奥斯特胡斯吸收理论架构。",
              "Lean 4 树分解形式化。"
            ],
            "mystery": "AI 约束满足求解器已能在秒级内为 20 阶以下任意随机树族自动完成无重叠完全图打包。",
            "funFact": "树打包猜想是离散守恒律与完全图网络无缝拼砌最和谐美妙的数学交响曲。"
          }
        },
        "history": [
          {
            "year": "1976",
            "author": "加法斯 & 莱赫尔",
            "note": "正式提出树打包猜想。"
          },
          {
            "year": "1999",
            "author": "拉斐尔·尤斯特",
            "note": "证明几乎所有树族的渐近打包定理。"
          },
          {
            "year": "2019",
            "author": "库恩 & 奥斯特胡斯团队",
            "note": "发表百页长文彻底攻克充分大 n 树打包猜想！"
          }
        ]
      },
      "zh-Hant": {
        "name": "Tree Packing Conjecture",
        "subtitle": "Packing Trees of Sizes 1 to $n$ Edge-Disjointly into $K_n$ (Proved for Large $n$)",
        "field": "Extremal Combinatorics & Graph Decomposition",
        "statusBadge": "PROVED FOR LARGE n (2019)",
        "grades": {
          "explorers": {
            "tagline": "Can you pack n trees of all different sizes inside one complete spiderweb without any branches crossing?",
            "analogy": "The complete graph $K_n$ has exactly $n(n-1)/2$ edges. Notice that the sum of edges of trees with 1, 2, 3, ..., n vertices is: 0 + 1 + 2 + ... + (n-1) = $n(n-1)/2$—the EXACT SAME number of edges! In 1976, András Gyárfás and Jenő Lehel (and independently Ron Graham) conjectured: For ANY choice of trees $T_1, T_2, ..., T_n$ (where $T_i$ has $i$ vertices), they can ALWAYS be packed into $K_n$ sharing NO edges! In 2019, Joos, Kühn, Osthus, and Bowtell proved it true for all large $n$!",
            "rules": [
              "Complete graph K_n with n(n-1)/2 edges.",
              "Sequence of trees T_1, ..., T_n with |V(T_i)| = i.",
              "Total edges: ∑ (i-1) = n(n-1)/2 (perfect match!).",
              "Proved for all large n by Joos et al. in 2019!"
            ],
            "mystery": "Ron Graham famously offered a prize for this problem, celebrating the incredible numerological coincidence that total tree edges equal K_n edges!",
            "funFact": "Special cases where all trees are stars or all trees are paths were solved in the 1980s by elementary constructions!"
          },
          "investigators": {
            "tagline": "Probabilistic absorption and blow-up lemma for trees.",
            "analogy": "Joos, Kühn, Osthus, and Bowtell decomposed K_n into quasirandom expanders, using randomized packing for small trees and absorption for large trees.",
            "rules": [
              "Tree packing edge sum: ∑ e(T_i) = C(n, 2).",
              "Randomized absorption method (2019).",
              "Lean 4 Mathlib tree embeddings."
            ],
            "mystery": "Can we bridge the finite bound to prove the conjecture universally for all small n ≤ 100?",
            "funFact": "Posed by Gyárfás & Lehel in 1976 and popularized by Ron Graham."
          },
          "pioneers": {
            "tagline": "Hypergraph matchings and fractional tree packings.",
            "analogy": "Yuster proved in 1999 that almost all sequences of trees can be asymptotically packed into K_n.",
            "rules": [
              "Rödl nibble for fractional tree packing.",
              "Kühn-Osthus absorption framework.",
              "Lean 4 tree decomposition library."
            ],
            "mystery": "AI combinatorial solvers optimize branch placement for n = 20 tree sequences in real-time.",
            "funFact": "The Tree Packing Conjecture is the ultimate symphony of discrete conservation and exact geometric tiling."
          }
        },
        "history": [
          {
            "year": "1976",
            "author": "Gyárfás & Lehel",
            "note": "Formulate the Tree Packing Conjecture."
          },
          {
            "year": "1999",
            "author": "Raphael Yuster",
            "note": "Proves asymptotic packing for almost all tree families."
          },
          {
            "year": "2019",
            "author": "Joos, Kühn, Osthus & Bowtell",
            "note": "Deliver landmark proof of Tree Packing Conjecture for all large n."
          }
        ]
      }
    }
  }
];
