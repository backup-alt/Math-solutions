export interface AnswerLine {
  type: 'text' | 'math' | 'subhead' | 'list';
  content?: string;
  tex?: string;
  items?: string[];
}

export interface NotebookRef {
  imagePath: string;
  label: string;
  date?: string;
}

export interface QuestionItem {
  id: string;
  part: 'A' | 'B' | 'C' | 'CW';
  number: number;
  questionLatex: string;
  subparts?: string[];
  topic: string;
  marks: number;
  inClassNotes: boolean;
  professorMethodNote: string;
  notebookRefs: NotebookRef[];
  answerLines: AnswerLine[];
}

export const ALL_NOTEBOOK_PAGES: NotebookRef[] = [
  { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.20.03_PM_d224d416.jpeg', label: 'Page 1: Unit-2 Intro, Induction Working Rule & Q1 (Sum of n)', date: '9/7/26' },
  { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.20.11_PM_f9a28e87.jpeg', label: 'Page 2: Induction Q1 LHS & Q2 (1/1.2 + ... + 1/n(n+1))', date: '9/7/26' },
  { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.20.17_PM_201f6604.jpeg', label: 'Page 3: Induction Q2 LHS (Previous term) & Q3 (2^n > n)', date: '9/7/26' },
  { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.20.25_PM_86dca459.jpeg', label: 'Page 4: Induction Q3 Proof (k < 2^k)', date: '9/7/26' },
  { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.20.32_PM_c4049fa8.jpeg', label: 'Page 5: H/W Sums of Squares & Strong Induction (6^{n+2}+7^{2n+1} div by 43)', date: '9/7/26' },
  { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.20.45_PM_e85eede0.jpeg', label: 'Page 6: Divisibility by 43 Inductive Step (43c - 301*7^{2k})', date: '9/7/26' },
  { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.21.00_PM_a0731004.jpeg', label: 'Page 7: H/W Answer 1 (1^2 + 2^2 + ... + n^2 = n(n+1)(2n+1)/6)', date: '9/7/26' },
  { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.21.07_PM_2e51f1b8.jpeg', label: 'Page 8: H/W Answer 2 (1^2 + 3^2 + 5^2 + ... = 1/3 n(2n-1)(2n+1))', date: '9/7/26' },
  { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.21.14_PM_5547da44.jpeg', label: 'Page 9: Odd Squares Conclusion & 10M Inequality (1/sqrt(1)+...+1/sqrt(n) > sqrt(n))', date: '10/7/26' },
  { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.21.19_PM_8f97f436.jpeg', label: 'Page 10: Inequality Inductive Step (sqrt(k) + 1/sqrt(k+1))', date: '10/7/26' },
  { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.21.31_PM_d2d4c5db.jpeg', label: 'Page 11: Pigeonhole & Generalised Pigeonhole Principle [(m-n)/n]+1; 100 People', date: '10/7/26' },
  { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.21.40_PM_45b19952.jpeg', label: 'Page 12: 7 Colours & 50 Bicycles; 25 Dictionaries & 40325 Pages', date: '10/7/26' },
  { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.21.45_PM_3ca2fc7a.jpeg', label: 'Page 13: Dictionaries Calculation (1614) & Permutation Formula nPr', date: '13/7/26' },
  { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.21.57_PM_6e336aeb.jpeg', label: 'Page 14: Permutations of INDIA (60) and RADAR', date: '13/7/26' },
  { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.22.05_PM_23421749.jpeg', label: 'Page 15: RADAR (30), UNUSUAL (840), and Find n if nP2 = 20', date: '13/7/26' },
  { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.22.11_PM_d8c0d39f.jpeg', label: 'Page 16: Solving nP2 = 20 (n=5) and nP3 = 5*nP2 (n=7)', date: '13/7/26' },
  { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.22.19_PM_8dbc0b68.jpeg', label: 'Page 17: 6 Boys & 4 Girls (No two girls together) & Strings in ABCDEFG', date: '13/7/26' },
  { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.22.28_PM_bad5a408.jpeg', label: 'Page 18: Permutations of ABCDEFG containing BCD, CFGA, BA & GF, ABC & DE', date: '13/7/26' },
  { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.22.35_PM_e1fafb7c.jpeg', label: 'Page 19: 6 Boys and 5 Girls in a Row (Part i: 11!, Part ii: 172800)', date: '14/7/26' },
  { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.22.49_PM_d424f7ba.jpeg', label: 'Page 20: 6 Boys & 5 Girls Part iii (432000) & Combinations nCr (10C5 = 252)', date: '14/7/26' },
  { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.22.56_PM_ff59555a.jpeg', label: 'Page 21: Educationalists & Socialists Committee; Bit Strings of Length 10', date: '14/7/26' },
  { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.23.03_PM_661e7b7a.jpeg', label: 'Page 22: Bit Strings of Length 10 — (i) Exactly four 1s (210), (ii) At most four 1s (386)', date: '14/7/26' },
  { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_PM_12.23.10_PM_0cfe844c.jpeg'.replace('_PM_12', '_at_12'), label: 'Page 23: Bit Strings of Length 10 — (iii) At least four 1s (848), (iv) Equal 0s and 1s (252)', date: '14/7/26' },
  { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.23.28_PM_4e472ac8.jpeg', label: 'Page 24: Committee from 6 Men and 7 Women — (i) 3M & 4W (700), (ii) At least 1 Woman (700)', date: '14/7/26' },
  { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.23.33_PM_cb9a9d4e.jpeg', label: 'Page 25: 6 Men & 7 Women (iii) At least 1 Man (680) & QB1: Team of 11 from 15 Players', date: '14/7/26' },
  { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.23.41_PM_a883be73.jpeg', label: 'Page 26: QB1 Solution: 14C10 = 1001 and 13C9 = 715', date: '14/7/26' },
  { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.23.47_PM_3d68efd3.jpeg', label: 'Page 27: QB2: 20 Students out of 30 (Rama, Raja, Gopal & Govind)', date: '14/7/26' },
  { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.23.57_PM_d4603e05.jpeg', label: 'Page 28: Principles of Inclusion and Exclusion (2, 3, and 4 Sets Formulas)', date: '16/7/26' },
  { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.24.06_PM_60efc6dd.jpeg', label: 'Page 29: Survey of 500 Students (Volleyball & Hockey) & Integers <= 1000 div by 7 or 11', date: '16/7/26' },
  { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.24.17_PM_0be9f960.jpeg', label: 'Page 30: Integers <= 1000 Divisible by 7 or 11 Solution', date: '16/7/26' },
  { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.24.24_PM_716006d2.jpeg', label: 'Page 31: 10M Problem: Integers between 1 and 250 not divisible by 2, 3, 5, 7 (Part 1)', date: '16/7/26' },
  { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.24.34_PM_4ed62425.jpeg', label: 'Page 32: Integers 1 to 250 not divisible by 2, 3, 5, 7 (Part 2: |A1 U A2 U A3 U A4| = 193)', date: '16/7/26' },
  { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.24.42_PM_bb986b4f.jpeg', label: 'Page 33: Recurrence Relation Definition & Q1 (a_n = 3*2^n -> a_n - 2a_{n-1} = 0)', date: '20/7/26' },
  { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.24.53_PM_855d9743.jpeg', label: 'Page 34: Recurrence Relation Q2 (a_n = 2n+9) & Q3 (y_n = A*2^n + B*3^n)', date: '20/7/26' },
  { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.25.00_PM_eafe1440.jpeg', label: 'Page 35: Determinant Method for y_n = A*2^n + B*3^n -> 6y_n - 5y_{n+1} + y_{n+2} = 0', date: '20/7/26' },
];

export const MODULE_2_QUESTIONS: QuestionItem[] = [
  // ==========================================
  // PART A - SHORT ANSWERS (10 QUESTIONS)
  // ==========================================
  {
    id: 'partA-1',
    part: 'A',
    number: 1,
    questionLatex: 'Assuming that repetitions are not permitted, how many four-digit numbers can be formed from the six digits $1, 2, 3, 5, 7, 8$?',
    topic: 'Permutations',
    marks: 2,
    inClassNotes: true,
    professorMethodNote: 'Uses the professor’s exact permutation formula nPr = n! / (n-r)! with step-by-step factorial expansion and cancellation (as taught on 13/7/26).',
    notebookRefs: [
      { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.21.45_PM_3ca2fc7a.jpeg', label: 'Permutation formula nPr = n!/(n-r)!', date: '13/7/26' }
    ],
    answerLines: [
      { type: 'text', content: 'The total number of given digits is $n = 6$ (namely $1, 2, 3, 5, 7, 8$), and we take $r = 4$ digits at a time without repetition.' },
      { type: 'text', content: 'The number of permutations of $n$ things taken $r$ at a time is given by:' },
      { type: 'math', tex: 'nP_r = \\frac{n!}{(n-r)!}' },
      { type: 'text', content: 'Substituting $n = 6$ and $r = 4$:' },
      { type: 'math', tex: '6P_4 = \\frac{6!}{(6-4)!} = \\frac{6!}{2!} = \\frac{1 \\times 2 \\times 3 \\times 4 \\times 5 \\times 6}{1 \\times 2} = 3 \\times 4 \\times 5 \\times 6 = \\boxed{360}' }
    ]
  },
  {
    id: 'partA-2',
    part: 'A',
    number: 2,
    questionLatex: 'Show that if seven colours are used to paint $50$ bicycles, at least $8$ bicycles will be the same colour.',
    topic: 'Pigeonhole Principle',
    marks: 2,
    inClassNotes: true,
    professorMethodNote: 'Exact verbatim match from Professor’s notebook (10/7/26, Problem 2): defines m = 50, n = 7, and substitutes into [(m-n)/n] + 1 = [(50-7)/7] + 1 = 43/7 + 1 = 6.14 + 1 -> 7 + 1 = 8.',
    notebookRefs: [
      { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.21.40_PM_45b19952.jpeg', label: 'Problem 2: 7 colours & 50 bicycles', date: '10/7/26' }
    ],
    answerLines: [
      { type: 'text', content: 'Given:' },
      { type: 'math', tex: 'm = 50 \\quad [\\text{Bicycles (Pigeons)}], \\qquad n = 7 \\quad [\\text{Colours (Holes)}].' },
      { type: 'text', content: 'By the Generalised Pigeonhole Principle (as written in classwork):' },
      { type: 'math', tex: '= \\left[\\frac{m - n}{n}\\right] + 1 = \\left[\\frac{50 - 7}{7}\\right] + 1 = \\left[\\frac{43}{7}\\right] + 1' },
      { type: 'math', tex: '= 6.14 + 1 \\implies 7 + 1 = \\boxed{8} \\quad (\\because \\text{Greatest integer / ceiling step}: \\lfloor (50-1)/7 \\rfloor + 1 = 7 + 1 = 8).' },
      { type: 'text', content: 'Hence, at least $8$ bicycles will be of the same colour.' }
    ]
  },
  {
    id: 'partA-3',
    part: 'A',
    number: 3,
    questionLatex: 'How many $7$ letter words can be formed using the letters of the word $\\text{BENZENE}$?',
    topic: 'Permutations with Repetition',
    marks: 2,
    inClassNotes: true,
    professorMethodNote: 'Follows the exact letter-frequency listing format taught by the professor for INDIA, RADAR, and UNUSUAL (13/7/26).',
    notebookRefs: [
      { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.21.57_PM_6e336aeb.jpeg', label: 'Repeated letters format (INDIA, RADAR)', date: '13/7/26' },
      { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.22.05_PM_23421749.jpeg', label: 'UNUSUAL (7 letters with 3 repeats)', date: '13/7/26' }
    ],
    answerLines: [
      { type: 'text', content: 'For the word $\\text{BENZENE}$:' },
      { type: 'list', items: [
        'The total number of letters $= 7$',
        'The letter $\\text{E}$ is repeated $3$ times $= 3$',
        'The letter $\\text{N}$ is repeated $2$ times $= 2$',
        '$\\text{B} = 1$, $\\text{Z} = 1$'
      ]},
      { type: 'text', content: 'Therefore, the number of distinct $7$-letter words is:' },
      { type: 'math', tex: '= \\frac{7!}{3! \\times 2! \\times 1! \\times 1!} = \\frac{1 \\times 2 \\times 3 \\times 4 \\times 5 \\times 6 \\times 7}{(1 \\times 2 \\times 3) \\times (1 \\times 2)}' },
      { type: 'math', tex: '= \\frac{4 \\times 5 \\times 6 \\times 7}{2} = 4 \\times 5 \\times 3 \\times 7 = \\boxed{420}' }
    ]
  },
  {
    id: 'partA-4',
    part: 'A',
    number: 4,
    questionLatex: 'State Pigeonhole principle.',
    topic: 'Pigeonhole Principle',
    marks: 2,
    inClassNotes: true,
    professorMethodNote: 'Word-for-word definition from Professor’s notebook (10/7/26, top of page).',
    notebookRefs: [
      { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.21.31_PM_d2d4c5db.jpeg', label: 'Pigeon Hole Principle definition', date: '10/7/26' }
    ],
    answerLines: [
      { type: 'text', content: 'If $n + 1$ pigeons occupy $n$ holes, then at least one hole has more than one pigeon.' }
    ]
  },
  {
    id: 'partA-5',
    part: 'A',
    number: 5,
    questionLatex: 'Find the minimum number of students needed to guarantee that five of them belong to the same subject having major as English, Maths, Physics, and Chemistry.',
    topic: 'Pigeonhole Principle',
    marks: 2,
    inClassNotes: true,
    professorMethodNote: 'Applies the Generalised Pigeonhole Principle formula from 10/7/26 with n = 4 subjects (holes) and required minimum = 5.',
    notebookRefs: [
      { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.21.31_PM_d2d4c5db.jpeg', label: 'Generalised Pigeonhole formula', date: '10/7/26' }
    ],
    answerLines: [
      { type: 'text', content: 'Here, the number of subjects (holes) is $n = 4$ (English, Maths, Physics, Chemistry), and we require at least $k = 5$ students in the same subject.' },
      { type: 'text', content: 'By the Generalised Pigeonhole Principle:' },
      { type: 'math', tex: '\\left\\lfloor \\frac{m - 1}{n} \\right\\rfloor + 1 = 5 \\quad \\left(\\text{or } \\left[\\frac{m - n}{n}\\right] + 1 = 5\\right)' },
      { type: 'text', content: 'For the minimum number of students $m$:' },
      { type: 'math', tex: '\\frac{m - 1}{4} = 4 \\implies m - 1 = 16 \\implies m = \\boxed{17}' }
    ]
  },
  {
    id: 'partA-6',
    part: 'A',
    number: 6,
    questionLatex: 'Define the generalisation of the pigeonhole principle.',
    topic: 'Pigeonhole Principle',
    marks: 2,
    inClassNotes: true,
    professorMethodNote: 'Exact statement and boxed formula [(m-n)/n] + 1 from Professor’s notebook (10/7/26).',
    notebookRefs: [
      { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.21.31_PM_d2d4c5db.jpeg', label: 'Generalised Pigeon Hole Principle', date: '10/7/26' }
    ],
    answerLines: [
      { type: 'text', content: 'If $m$ pigeons occupy $n$ holes ($m > n$), then at least one hole contains at least:' },
      { type: 'math', tex: '\\left[\\frac{m - n}{n}\\right] + 1 \\quad \\left(\\text{i.e., } \\left\\lfloor \\frac{m - 1}{n} \\right\\rfloor + 1\\right) \\text{ pigeons.}' }
    ]
  },
  {
    id: 'partA-7',
    part: 'A',
    number: 7,
    questionLatex: 'A man hiked for $10$ hours and covered a total distance of $45\\text{ km}$. It is known that he hiked $6\\text{ km}$ in the first hour and only $3\\text{ km}$ in the last hour. Show that he must have hiked at least $9\\text{ km}$ within a certain period of $2$ consecutive hours.',
    topic: 'Pigeonhole Principle',
    marks: 2,
    inClassNotes: false,
    professorMethodNote: 'Uses the professor’s m (pigeons = 36 km) and n (holes = 4 pairs of 2 consecutive hours) notation.',
    notebookRefs: [
      { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.21.31_PM_d2d4c5db.jpeg', label: 'Generalised Pigeonhole Principle', date: '10/7/26' }
    ],
    answerLines: [
      { type: 'text', content: 'Total distance covered in $10$ hours $= 45\\text{ km}$. Distance covered in the $1\\text{st}$ hour $= 6\\text{ km}$ and in the $10\\text{th}$ hour $= 3\\text{ km}$.' },
      { type: 'text', content: 'Distance covered in the remaining $8$ hours (hours $2$ to $9$) is:' },
      { type: 'math', tex: 'm = 45 - (6 + 3) = 45 - 9 = 36\\text{ km}.' },
      { type: 'text', content: 'Divide these $8$ hours into $n = 4$ disjoint periods of $2$ consecutive hours: $(2,3), (4,5), (6,7), (8,9)$.' },
      { type: 'text', content: 'By the Generalised Pigeonhole Principle, at least one period of $2$ consecutive hours must have a distance of at least:' },
      { type: 'math', tex: '\\left\\lceil \\frac{m}{n} \\right\\rceil = \\frac{36}{4} = \\boxed{9\\text{ km}}' },
      { type: 'text', content: 'Hence, he must have hiked at least $9\\text{ km}$ within a certain period of $2$ consecutive hours.' }
    ]
  },
  {
    id: 'partA-8',
    part: 'A',
    number: 8,
    questionLatex: 'Define Recurrence relation.',
    topic: 'Recurrence Relations',
    marks: 2,
    inClassNotes: true,
    professorMethodNote: 'Exact word-for-word definition from Professor’s notebook (20/7/26).',
    notebookRefs: [
      { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.24.42_PM_bb986b4f.jpeg', label: 'Recurrence Relation definition', date: '20/7/26' }
    ],
    answerLines: [
      { type: 'text', content: 'An equation that expresses the general term of a sequence $\\{a_n\\}$ in terms of one or more previous terms of the sequence, namely $a_1, a_2, \\dots, a_{n-1}$, for all positive integers $n$ with $n \\ge n_0$, where $n_0$ is a non-negative integer, is called a recurrence relation for the sequence $\\{a_n\\}$.' }
    ]
  },
  {
    id: 'partA-9',
    part: 'A',
    number: 9,
    questionLatex: 'Write the general solution of recurrence relation.',
    topic: 'Recurrence Relations',
    marks: 2,
    inClassNotes: true,
    professorMethodNote: 'Uses the professor’s notation y_n = A m_1^n + B m_2^n (as seen in 20/7/26 notes) together with the non-homogeneous general form a_n = a_n^{(h)} + a_n^{(p)}.',
    notebookRefs: [
      { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.24.53_PM_855d9743.jpeg', label: 'General solution form y_n = A 2^n + B 3^n', date: '20/7/26' }
    ],
    answerLines: [
      { type: 'text', content: 'For a linear recurrence relation, the general solution is the sum of the homogeneous solution $a_n^{(h)}$ and the particular solution $a_n^{(p)}$:' },
      { type: 'math', tex: 'a_n = a_n^{(h)} + a_n^{(p)}.' },
      { type: 'text', content: 'For a second-order homogeneous recurrence relation with characteristic roots $m_1, m_2$:' },
      { type: 'list', items: [
        'If roots $m_1 \\ne m_2$ are real and distinct: $y_n = A m_1^n + B m_2^n$.',
        'If roots $m_1 = m_2 = m$ are real and equal: $y_n = (A + Bn)m^n$.'
      ]}
    ]
  },
  {
    id: 'partA-10',
    part: 'A',
    number: 10,
    questionLatex: 'Write the principle of Inclusion and Exclusion formula for the term $|A \\cup B \\cup C|$.',
    topic: 'Inclusion-Exclusion',
    marks: 2,
    inClassNotes: true,
    professorMethodNote: 'Exact formula from Professor’s notebook (16/7/26).',
    notebookRefs: [
      { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.23.57_PM_d4603e05.jpeg', label: 'Principle of Inclusion and Exclusion', date: '16/7/26' }
    ],
    answerLines: [
      { type: 'text', content: 'For any three finite sets $A, B, C$, the Principle of Inclusion and Exclusion formula is:' },
      { type: 'math', tex: '\\boxed{|A \\cup B \\cup C| = |A| + |B| + |C| - |A \\cap B| - |A \\cap C| - |B \\cap C| + |A \\cap B \\cap C|}' }
    ]
  },

  // ==========================================
  // PART B - 6 MARK ANSWERS (10 QUESTIONS)
  // ==========================================
  {
    id: 'partB-1',
    part: 'B',
    number: 1,
    questionLatex: 'Use mathematical induction to prove that $n^3 + 2n$ is divisible by $3$, for $n \\ge 1$.',
    topic: 'Mathematical Induction',
    marks: 6,
    inClassNotes: true,
    professorMethodNote: 'Strictly follows the professor’s 3-step Induction Working Rule (9/7/26): i) P(1) is true, ii) Assume P(k) is true (= 3c), iii) To prove P(k+1) is true.',
    notebookRefs: [
      { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.20.03_PM_d224d416.jpeg', label: 'Mathematical Induction Working Rule', date: '9/7/26' },
      { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.20.45_PM_e85eede0.jpeg', label: 'Divisibility induction format (= c)', date: '9/7/26' }
    ],
    answerLines: [
      { type: 'text', content: 'Let $P(n) : n^3 + 2n$ is divisible by $3$.' },
      { type: 'subhead', content: 'Step 1: For n = 1' },
      { type: 'math', tex: 'P(1) = 1^3 + 2(1) = 1 + 2 = 3,' },
      { type: 'text', content: 'which is divisible by $3$. $\\therefore P(1)$ is true.' },
      { type: 'subhead', content: 'Step 2: Assume P(k) is true' },
      { type: 'text', content: 'Assume $P(k)$ is true for $n = k$:' },
      { type: 'math', tex: '\\frac{k^3 + 2k}{3} = c \\implies k^3 + 2k = 3c \\quad (\\text{where } c \\in \\mathbb{Z}).' },
      { type: 'subhead', content: 'Step 3: To prove P(k+1) is true' },
      { type: 'text', content: 'For $n = k + 1$:' },
      { type: 'math', tex: '(k+1)^3 + 2(k+1) = (k^3 + 3k^2 + 3k + 1) + (2k + 2)' },
      { type: 'math', tex: '= (k^3 + 2k) + 3k^2 + 3k + 3' },
      { type: 'text', content: 'Using the inductive hypothesis $k^3 + 2k = 3c$:' },
      { type: 'math', tex: '= 3c + 3(k^2 + k + 1) = 3(c + k^2 + k + 1),' },
      { type: 'text', content: 'which is a multiple of $3$, and hence divisible by $3$.' },
      { type: 'text', content: '$\\therefore P(k+1)$ is true. Hence, by mathematical induction, $\\boxed{n^3 + 2n \\text{ is divisible by } 3}$ for all $n \\ge 1$.' }
    ]
  },
  {
    id: 'partB-2',
    part: 'B',
    number: 2,
    questionLatex: 'Prove by mathematical induction that $\\frac{1}{1 \\cdot 2} + \\frac{1}{2 \\cdot 3} + \\frac{1}{3 \\cdot 4} + \\dots + \\frac{1}{n(n+1)} = \\frac{n}{n+1}$.',
    topic: 'Mathematical Induction',
    marks: 6,
    inClassNotes: true,
    professorMethodNote: 'Exact line-by-line match with Professor’s notebook (9/7/26, Problem 2, Pages 2 & 3), including the "Previous term" LHS expansion and factoring of k^2 + 2k + 1 = (k+1)(k+1).',
    notebookRefs: [
      { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.20.11_PM_f9a28e87.jpeg', label: 'Problem 2 Setup: P(1), P(k), P(k+1)', date: '9/7/26' },
      { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.20.17_PM_201f6604.jpeg', label: 'Problem 2 LHS & Previous term working', date: '9/7/26' }
    ],
    answerLines: [
      { type: 'text', content: 'Let $P(n) : \\frac{1}{1 \\cdot 2} + \\frac{1}{2 \\cdot 3} + \\dots + \\frac{1}{n(n+1)} = \\frac{n}{n+1}$.' },
      { type: 'subhead', content: 'For n = 1:' },
      { type: 'math', tex: 'P(1) = \\frac{1}{1(2)} = \\frac{1}{2}, \\qquad \\text{RHS} = \\frac{1}{1+1} = \\frac{1}{2}.' },
      { type: 'text', content: '$\\therefore P(1)$ is true.' },
      { type: 'subhead', content: 'Assume for P(k):' },
      { type: 'math', tex: '\\frac{1}{1 \\cdot 2} + \\frac{1}{2 \\cdot 3} + \\dots + \\frac{1}{k(k+1)} = \\frac{k}{k+1}.' },
      { type: 'subhead', content: 'To prove P(k+1):' },
      { type: 'math', tex: '\\frac{1}{1 \\cdot 2} + \\frac{1}{2 \\cdot 3} + \\dots + \\frac{1}{k(k+1)} + \\frac{1}{(k+1)(k+2)} = \\frac{k+1}{k+2}.' },
      { type: 'text', content: 'LHS (writing with previous term):' },
      { type: 'math', tex: '\\text{LHS} = \\frac{1}{1 \\cdot 2} + \\frac{1}{2 \\cdot 3} + \\dots + \\frac{1}{k(k+1)} + \\frac{1}{(k+1)(k+2)}' },
      { type: 'math', tex: '= \\frac{k}{k+1} + \\frac{1}{(k+1)(k+2)}' },
      { type: 'math', tex: '= \\frac{k(k+2) + 1}{(k+1)(k+2)} = \\frac{k^2 + 2k + 1}{(k+1)(k+2)}' },
      { type: 'math', tex: '= \\frac{(k+1)(k+1)}{(k+1)(k+2)} = \\boxed{\\frac{k+1}{k+2}} = \\text{RHS}.' },
      { type: 'text', content: '$\\therefore P(k+1)$ is true. Hence proved by mathematical induction.' }
    ]
  },
  {
    id: 'partB-3',
    part: 'B',
    number: 3,
    questionLatex: 'A club consisting of $6$ men and $7$ women, in how many ways can we select a committee of $4$ persons which has at least one woman?',
    topic: 'Combinations',
    marks: 6,
    inClassNotes: true,
    professorMethodNote: 'Exact line-by-line match with Professor’s notebook (14/7/26, Problem 4(ii), Page 24): lists the 4 cases (1W 3M, 2W 2M, 3W 1M, 4W 0M) and expands 7C1*6C3 + 7C2*6C2 + 7C3*6C1 + 7C4*6C0 = 700.',
    notebookRefs: [
      { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.23.28_PM_4e472ac8.jpeg', label: 'Problem 4(ii): 6 men & 7 women, 4 members at least 1 woman', date: '14/7/26' },
      { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.23.33_PM_cb9a9d4e.jpeg', label: 'Factorial expansion style for cases', date: '14/7/26' }
    ],
    answerLines: [
      { type: 'text', content: 'Given: Men $= 6$, Women $= 7$. A committee of $4$ members is to be selected having at least one woman.' },
      { type: 'text', content: 'The possible ways of selection are:' },
      { type: 'list', items: [
        '$1$ Woman and $3$ Men',
        '$2$ Women and $2$ Men',
        '$3$ Women and $1$ Man',
        '$4$ Women and $0$ Men'
      ]},
      { type: 'text', content: 'Therefore, the total number of ways is:' },
      { type: 'math', tex: '= 7C_1 \\times 6C_3 + 7C_2 \\times 6C_2 + 7C_3 \\times 6C_1 + 7C_4 \\times 6C_0' },
      { type: 'math', tex: '= \\left(7 \\times \\frac{6 \\times 5 \\times 4}{1 \\times 2 \\times 3}\\right) + \\left(\\frac{7 \\times 6}{1 \\times 2} \\times \\frac{6 \\times 5}{1 \\times 2}\\right) + \\left(\\frac{7 \\times 6 \\times 5}{1 \\times 2 \\times 3} \\times 6\\right) + \\left(\\frac{7 \\times 6 \\times 5 \\times 4}{1 \\times 2 \\times 3 \\times 4} \\times 1\\right)' },
      { type: 'math', tex: '= (7 \\times 20) + (21 \\times 15) + (35 \\times 6) + (35 \\times 1)' },
      { type: 'math', tex: '= 140 + 315 + 210 + 35 = \\boxed{700}' }
    ]
  },
  {
    id: 'partB-4',
    part: 'B',
    number: 4,
    questionLatex: 'There are $250$ students in an engineering college. Of these $188$ have taken a course in Fortran, $100$ have taken a course in C and $35$ have taken courses in Java. Further $88$ have taken courses in both Fortran and C. $23$ have taken course in both C and Java and $29$ have taken courses in both Fortran and Java. If $19$ of these students have taken all the three courses, how many of these $250$ students have not taken a course in any of these three programming languages?',
    topic: 'Inclusion-Exclusion',
    marks: 6,
    inClassNotes: true,
    professorMethodNote: 'Follows the professor’s exact 3-set Inclusion-Exclusion notation from 16/7/26 (Pages 28 & 29).',
    notebookRefs: [
      { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.23.57_PM_d4603e05.jpeg', label: '3-Set Inclusion-Exclusion Formula', date: '16/7/26' },
      { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.24.06_PM_60efc6dd.jpeg', label: 'Survey problem structure', date: '16/7/26' }
    ],
    answerLines: [
      { type: 'text', content: 'Let $A_1, A_2, A_3$ denote the sets of students who have taken courses in Fortran, C, and Java respectively.' },
      { type: 'text', content: 'Given total students $n = 250$, and:' },
      { type: 'math', tex: '|A_1| = 188, \\qquad |A_2| = 100, \\qquad |A_3| = 35,' },
      { type: 'math', tex: '|A_1 \\cap A_2| = 88, \\qquad |A_2 \\cap A_3| = 23, \\qquad |A_1 \\cap A_3| = 29, \\qquad |A_1 \\cap A_2 \\cap A_3| = 19.' },
      { type: 'text', content: 'By the Principle of Inclusion and Exclusion:' },
      { type: 'math', tex: '|A_1 \\cup A_2 \\cup A_3| = |A_1| + |A_2| + |A_3| - |A_1 \\cap A_2| - |A_1 \\cap A_3| - |A_2 \\cap A_3| + |A_1 \\cap A_2 \\cap A_3|' },
      { type: 'math', tex: '= 188 + 100 + 35 - 88 - 29 - 23 + 19' },
      { type: 'math', tex: '= 323 - 140 + 19 = 202.' },
      { type: 'text', content: 'Therefore, the number of students who have not taken a course in any of these three programming languages is:' },
      { type: 'math', tex: '= n - |A_1 \\cup A_2 \\cup A_3| = 250 - 202 = \\boxed{48}' }
    ]
  },
  {
    id: 'partB-5',
    part: 'B',
    number: 5,
    questionLatex: 'Suppose there are $6$ boys and $5$ girls.',
    subparts: [
      '(i) In how many ways can they sit in a row.',
      '(ii) In how many ways can they sit in row if the boys and girls each sit together.',
      '(iii) In how many ways they can sit in a row if the girls are to sit together and the boys do not sit together.'
    ],
    topic: 'Permutations',
    marks: 6,
    inClassNotes: true,
    professorMethodNote: 'Exact verbatim match with Professor’s notebook (14/7/26, Problem 1, Pages 19 & 20): (i) 11P11 = 11!, (ii) 6! x 5! x 2 = 172800, (iii) 6! x 5! x 5 = 432000.',
    notebookRefs: [
      { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.22.35_PM_e1fafb7c.jpeg', label: '6 Boys & 5 Girls Parts (i) and (ii)', date: '14/7/26' },
      { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.22.49_PM_d424f7ba.jpeg', label: '6 Boys & 5 Girls Part (iii): 6! x 5! x 5 = 432000', date: '14/7/26' }
    ],
    answerLines: [
      { type: 'text', content: 'Given: Number of boys $(\\text{B}) = 6$, Number of girls $(\\text{G}) = 5$, Total $= 11$.' },
      { type: 'subhead', content: '(i) Number of ways they can sit in a row:' },
      { type: 'text', content: 'The number of boys $: 6!$, and the number of girls $: 5!$.' },
      { type: 'math', tex: '\\text{The number of ways they can sit in a row is } = 11P_{11} = \\frac{11!}{0!} = \\boxed{11!} \\quad (= 39,916,800).' },
      { type: 'subhead', content: '(ii) If the boys and girls each sit together:' },
      { type: 'math', tex: '\\text{The number of ways of B \\& G sitting together } = 6! \\times 5! \\times 2!' },
      { type: 'math', tex: '= 720 \\times 120 \\times 2 = 720 \\times 240 = \\boxed{172800}' },
      { type: 'subhead', content: '(iii) If the girls sit together and the boys do not sit together:' },
      { type: 'text', content: 'Treating the $5$ girls as $1$ unit, total ways with girls together is $7! \\times 5! = 7 \\times 6! \\times 5!$, and subtracting the $2 \\times 6! \\times 5!$ ways where boys also sit together gives $5 \\times 6! \\times 5!$ (or placing the block of girls in the $5$ internal gaps between the $6$ boys, as written in classwork):' },
      { type: 'math', tex: '= 6! \\times 5! \\times 5' },
      { type: 'math', tex: '= 720 \\times 120 \\times 5 = 720 \\times 600 = \\boxed{432000}' }
    ]
  },
  {
    id: 'partB-6',
    part: 'B',
    number: 6,
    questionLatex: 'Solve the recurrence relation $a_{n+2} - 6a_{n+1} + 9a_n = 3 \\times 2^n + 7 \\times 3^n$, $n \\ge 0$, given that $a_0 = 1$ and $a_1 = 4$.',
    topic: 'Recurrence Relations',
    marks: 6,
    inClassNotes: false,
    professorMethodNote: 'Uses characteristic equation in variable m (as in 20/7/26 notes) followed by particular solution and initial conditions.',
    notebookRefs: [
      { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.25.00_PM_eafe1440.jpeg', label: 'Characteristic roots notation m', date: '20/7/26' }
    ],
    answerLines: [
      { type: 'text', content: 'Given recurrence relation: $a_{n+2} - 6a_{n+1} + 9a_n = 3 \\cdot 2^n + 7 \\cdot 3^n$, with $a_0 = 1, a_1 = 4$.' },
      { type: 'subhead', content: 'Step 1: Homogeneous Solution' },
      { type: 'text', content: 'The characteristic equation is:' },
      { type: 'math', tex: 'm^2 - 6m + 9 = 0 \\implies (m - 3)^2 = 0 \\implies m = 3, 3.' },
      { type: 'math', tex: 'a_n^{(h)} = (A + Bn)3^n.' },
      { type: 'subhead', content: 'Step 2: Particular Solution' },
      { type: 'text', content: 'For $3 \\cdot 2^n$ (since $2$ is not a root), let $a_n^{(p_1)} = C \\cdot 2^n$:' },
      { type: 'math', tex: 'C \\cdot 2^{n+2} - 6C \\cdot 2^{n+1} + 9C \\cdot 2^n = 3 \\cdot 2^n \\implies C(4 - 12 + 9) = 3 \\implies C = 3.' },
      { type: 'text', content: 'For $7 \\cdot 3^n$ (since $3$ is a double root), let $a_n^{(p_2)} = D n^2 3^n$:' },
      { type: 'math', tex: 'D(n+2)^2 3^{n+2} - 6D(n+1)^2 3^{n+1} + 9Dn^2 3^n = 7 \\cdot 3^n' },
      { type: 'math', tex: '9D(n^2 + 4n + 4) - 18D(n^2 + 2n + 1) + 9Dn^2 = 7 \\implies 18D = 7 \\implies D = \\frac{7}{18}.' },
      { type: 'text', content: 'Thus the general solution is:' },
      { type: 'math', tex: 'a_n = (A + Bn)3^n + 3 \\cdot 2^n + \\frac{7}{18}n^2 3^n.' },
      { type: 'subhead', content: 'Step 3: Apply Initial Conditions (a_0 = 1, a_1 = 4)' },
      { type: 'math', tex: 'n = 0: \\quad a_0 = A + 3 = 1 \\implies A = -2.' },
      { type: 'math', tex: 'n = 1: \\quad a_1 = (-2 + B)3 + 6 + \\frac{7}{6} = 4 \\implies 3B = 4 - \\frac{7}{6} = \\frac{17}{6} \\implies B = \\frac{17}{18}.' },
      { type: 'text', content: 'Hence the required solution is:' },
      { type: 'math', tex: '\\boxed{a_n = \\left(-2 + \\frac{17}{18}n + \\frac{7}{18}n^2\\right)3^n + 3 \\cdot 2^n}' }
    ]
  },
  {
    id: 'partB-7',
    part: 'B',
    number: 7,
    questionLatex: 'How many positive integers $n$ can be formed using the digits $3, 4, 4, 5, 5, 6, 7$, if $n$ has to exceed $50,00,000$?',
    topic: 'Permutations with Repetition',
    marks: 6,
    inClassNotes: true,
    professorMethodNote: 'Uses the professor’s repeated-element permutation formula n! / (p! q!) across the valid leading digits 5, 6, and 7.',
    notebookRefs: [
      { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.21.57_PM_6e336aeb.jpeg', label: 'Repeated permutations formula', date: '13/7/26' }
    ],
    answerLines: [
      { type: 'text', content: 'Given $7$ digits: $3, 4, 4, 5, 5, 6, 7$, where $4$ is repeated $2$ times and $5$ is repeated $2$ times.' },
      { type: 'text', content: 'For a $7$-digit integer $n$ to exceed $50,00,000$, the first digit must be $5, 6,$ or $7$.' },
      { type: 'subhead', content: 'Case (i): First digit is 5' },
      { type: 'text', content: 'The remaining $6$ digits are $\\{3, 4, 4, 5, 6, 7\\}$, where $4$ is repeated $2$ times:' },
      { type: 'math', tex: '\\text{Number of ways} = \\frac{6!}{2!} = \\frac{720}{2} = 360.' },
      { type: 'subhead', content: 'Case (ii): First digit is 6' },
      { type: 'text', content: 'The remaining $6$ digits are $\\{3, 4, 4, 5, 5, 7\\}$, where $4$ is repeated $2$ times and $5$ is repeated $2$ times:' },
      { type: 'math', tex: '\\text{Number of ways} = \\frac{6!}{2! \\times 2!} = \\frac{720}{4} = 180.' },
      { type: 'subhead', content: 'Case (iii): First digit is 7' },
      { type: 'text', content: 'The remaining $6$ digits are $\\{3, 4, 4, 5, 5, 6\\}$, where $4$ is repeated $2$ times and $5$ is repeated $2$ times:' },
      { type: 'math', tex: '\\text{Number of ways} = \\frac{6!}{2! \\times 2!} = \\frac{720}{4} = 180.' },
      { type: 'text', content: 'Therefore, the total number of positive integers exceeding $50,00,000$ is:' },
      { type: 'math', tex: '= 360 + 180 + 180 = \\boxed{720}' }
    ]
  },
  {
    id: 'partB-8',
    part: 'B',
    number: 8,
    questionLatex: 'If $6$ people $A, B, C, D, E, F$ are seated about a round table, how many different circular arrangements are possible, if arrangements are considered the same when one can be obtained from the other by rotation? If $A, B, C$ are females and the other are males, in how many arrangements do the genders alternate?',
    topic: 'Circular Permutations',
    marks: 6,
    inClassNotes: false,
    professorMethodNote: 'Step-by-step factorial expansion matching the professor’s permutation problems.',
    notebookRefs: [
      { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.22.19_PM_8dbc0b68.jpeg', label: 'Alternating / gap seating arrangement', date: '13/7/26' }
    ],
    answerLines: [
      { type: 'subhead', content: '(i) Total circular arrangements of 6 people:' },
      { type: 'text', content: 'The number of circular arrangements of $n$ persons around a round table is $(n - 1)!$. For $n = 6$:' },
      { type: 'math', tex: '\\text{Number of circular arrangements} = (6 - 1)! = 5! = 1 \\times 2 \\times 3 \\times 4 \\times 5 = \\boxed{120}' },
      { type: 'subhead', content: '(ii) Circular arrangements where genders alternate:' },
      { type: 'text', content: 'Given $3$ females $(A, B, C)$ and $3$ males $(D, E, F)$:' },
      { type: 'list', items: [
        'First, arrange the $3$ females around the round table in $(3 - 1)! = 2!$ ways.',
        'Next, arrange the $3$ males in the $3$ alternate seats between the females in $3!$ ways.'
      ]},
      { type: 'math', tex: '\\text{Number of alternating arrangements} = (3 - 1)! \\times 3! = 2! \\times 3! = 2 \\times 6 = \\boxed{12}' }
    ]
  },
  {
    id: 'partB-9',
    part: 'B',
    number: 9,
    questionLatex: 'A team of $11$ players is to be chosen from $15$ members. In how many ways can this be done if',
    subparts: [
      '(i) One particular player is always included.',
      '(ii) Two such players have always to be included.'
    ],
    topic: 'Combinations',
    marks: 6,
    inClassNotes: true,
    professorMethodNote: 'Exact verbatim match with Professor’s notebook (14/7/26, marked -QB- 1, Pages 25 & 26): writes (15-1)C(11-1) => 14C10 = 1001 and (15-2)C(11-2) => 13C9 = 715.',
    notebookRefs: [
      { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.23.33_PM_cb9a9d4e.jpeg', label: 'QB 1 Problem statement in notebook', date: '14/7/26' },
      { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.23.41_PM_a883be73.jpeg', label: 'QB 1 Full Solution: 1001 and 715', date: '14/7/26' }
    ],
    answerLines: [
      { type: 'text', content: 'Total members $= 15$, Players to be chosen $= 11$.' },
      { type: 'subhead', content: '(i) One particular player is always included:' },
      { type: 'math', tex: '(15 - 1)C_{(11 - 1)} \\implies 14C_{10} = \\frac{14!}{(14 - 10)!\\,10!} = \\frac{14!}{4!\\,10!}' },
      { type: 'math', tex: '= \\frac{11 \\times 12 \\times 13 \\times 14}{1 \\times 2 \\times 3 \\times 4} = 11 \\times 13 \\times 7 = 77 \\times 13 = \\boxed{1001}' },
      { type: 'subhead', content: '(ii) Two such players have always to be included:' },
      { type: 'math', tex: '(15 - 2)C_{(11 - 2)} \\implies 13C_9 = \\frac{13!}{(13 - 9)!\\,9!} = \\frac{13!}{4!\\,9!}' },
      { type: 'math', tex: '= \\frac{10 \\times 11 \\times 12 \\times 13}{1 \\times 2 \\times 3 \\times 4} = 5 \\times 11 \\times 13 = 55 \\times 13 = \\boxed{715}' }
    ]
  },
  {
    id: 'partB-10',
    part: 'B',
    number: 10,
    questionLatex: 'Solve the recurrence relation $a_n - 2a_{n-1} = 3^n$, $a_1 = 5$.',
    topic: 'Recurrence Relations',
    marks: 6,
    inClassNotes: false,
    professorMethodNote: 'Uses first-order characteristic root m = 2 and particular solution C * 3^n.',
    notebookRefs: [
      { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.24.42_PM_bb986b4f.jpeg', label: 'First-order recurrence relation a_n - 2a_{n-1} = 0', date: '20/7/26' }
    ],
    answerLines: [
      { type: 'text', content: 'Given recurrence relation: $a_n - 2a_{n-1} = 3^n$, with $a_1 = 5$.' },
      { type: 'subhead', content: 'Step 1: Homogeneous Solution' },
      { type: 'text', content: 'For $a_n - 2a_{n-1} = 0$, the characteristic equation is $m - 2 = 0 \\implies m = 2$.' },
      { type: 'math', tex: 'a_n^{(h)} = A \\cdot 2^n.' },
      { type: 'subhead', content: 'Step 2: Particular Solution' },
      { type: 'text', content: 'Assume $a_n^{(p)} = C \\cdot 3^n$. Substituting into the given relation:' },
      { type: 'math', tex: 'C \\cdot 3^n - 2C \\cdot 3^{n-1} = 3^n' },
      { type: 'text', content: 'Dividing throughout by $3^{n-1}$:' },
      { type: 'math', tex: '3C - 2C = 3 \\implies C = 3.' },
      { type: 'math', tex: '\\therefore a_n^{(p)} = 3 \\cdot 3^n = 3^{n+1}.' },
      { type: 'subhead', content: 'Step 3: General Solution and Initial Condition' },
      { type: 'math', tex: 'a_n = A \\cdot 2^n + 3^{n+1}.' },
      { type: 'text', content: 'Putting $n = 1$ and using $a_1 = 5$:' },
      { type: 'math', tex: 'a_1 = 2A + 3^2 = 5 \\implies 2A + 9 = 5 \\implies 2A = -4 \\implies A = -2.' },
      { type: 'text', content: 'Therefore, the required solution is:' },
      { type: 'math', tex: '\\boxed{a_n = 3^{n+1} - 2^{n+1}}' }
    ]
  },

  // ==========================================
  // PART C - 10 MARK ANSWERS (10 QUESTIONS)
  // ==========================================
  {
    id: 'partC-1',
    part: 'C',
    number: 1,
    questionLatex: 'Solve the recurrence relation $a_{n+1} - a_n = 3n^2 - n$; $n \\ge 0$, $a_0 = 3$.',
    topic: 'Recurrence Relations',
    marks: 10,
    inClassNotes: false,
    professorMethodNote: 'Presents both the Characteristic + Particular Polynomial method and the Summation method for full 10-mark rigor.',
    notebookRefs: [
      { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.24.42_PM_bb986b4f.jpeg', label: 'Recurrence relation notes', date: '20/7/26' }
    ],
    answerLines: [
      { type: 'text', content: 'Given recurrence relation: $a_{n+1} - a_n = 3n^2 - n$, $n \\ge 0$, with $a_0 = 3$.' },
      { type: 'subhead', content: 'Step 1: Homogeneous Solution' },
      { type: 'text', content: 'The associated homogeneous relation is $a_{n+1} - a_n = 0$. Its characteristic equation is:' },
      { type: 'math', tex: 'm - 1 = 0 \\implies m = 1 \\implies a_n^{(h)} = A(1)^n = A.' },
      { type: 'subhead', content: 'Step 2: Particular Solution' },
      { type: 'text', content: 'Since $m = 1$ is a root of multiplicity $1$ and the RHS is a degree-$2$ polynomial, assume:' },
      { type: 'math', tex: 'a_n^{(p)} = n(Bn^2 + Cn + D) = Bn^3 + Cn^2 + Dn.' },
      { type: 'text', content: 'Substituting into $a_{n+1} - a_n = 3n^2 - n$:' },
      { type: 'math', tex: 'B\\left[(n+1)^3 - n^3\\right] + C\\left[(n+1)^2 - n^2\\right] + D\\left[(n+1) - n\\right] = 3n^2 - n' },
      { type: 'math', tex: 'B(3n^2 + 3n + 1) + C(2n + 1) + D = 3n^2 - n' },
      { type: 'math', tex: '3Bn^2 + (3B + 2C)n + (B + C + D) = 3n^2 - n.' },
      { type: 'text', content: 'Comparing coefficients of like powers of $n$:' },
      { type: 'math', tex: '3B = 3 \\implies B = 1,' },
      { type: 'math', tex: '3B + 2C = -1 \\implies 3(1) + 2C = -1 \\implies 2C = -4 \\implies C = -2,' },
      { type: 'math', tex: 'B + C + D = 0 \\implies 1 - 2 + D = 0 \\implies D = 1.' },
      { type: 'math', tex: '\\therefore a_n^{(p)} = n^3 - 2n^2 + n = n(n - 1)^2.' },
      { type: 'subhead', content: 'Step 3: General Solution and Initial Condition' },
      { type: 'math', tex: 'a_n = A + n^3 - 2n^2 + n.' },
      { type: 'text', content: 'Using $a_0 = 3$ at $n = 0$: $a_0 = A + 0 = 3 \\implies A = 3$. Hence:' },
      { type: 'math', tex: '\\boxed{a_n = n^3 - 2n^2 + n + 3 = 3 + n(n-1)^2}' }
    ]
  },
  {
    id: 'partC-2',
    part: 'C',
    number: 2,
    questionLatex: 'Use mathematical induction to prove that $n^3 + (n+1)^3 + (n+2)^3$ is divisible by $9$, for $n \\ge 1$.',
    topic: 'Mathematical Induction',
    marks: 10,
    inClassNotes: true,
    professorMethodNote: 'Strictly follows the professor’s divisibility induction style (9/7/26, Pages 5 & 6): sets P(k)/9 = c => P(k) = 9c and substitutes into P(k+1).',
    notebookRefs: [
      { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.20.32_PM_c4049fa8.jpeg', label: 'Divisibility Induction Setup', date: '9/7/26' },
      { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.20.45_PM_e85eede0.jpeg', label: 'Assume P(k) is true => = c', date: '9/7/26' }
    ],
    answerLines: [
      { type: 'text', content: 'Let $P(n) : n^3 + (n+1)^3 + (n+2)^3$ is divisible by $9$.' },
      { type: 'subhead', content: 'Step 1: For n = 1' },
      { type: 'math', tex: 'P(1) = 1^3 + (1+1)^3 + (1+2)^3 = 1^3 + 2^3 + 3^3 = 1 + 8 + 27 = 36.' },
      { type: 'text', content: 'Since $36 = 9 \\times 4$ is divisible by $9$, $\\therefore P(1)$ is true.' },
      { type: 'subhead', content: 'Step 2: Assume P(k) is true' },
      { type: 'math', tex: '\\frac{k^3 + (k+1)^3 + (k+2)^3}{9} = c \\implies k^3 + (k+1)^3 + (k+2)^3 = 9c,' },
      { type: 'math', tex: '(k+1)^3 + (k+2)^3 = 9c - k^3.' },
      { type: 'subhead', content: 'Step 3: To prove P(k+1) is true' },
      { type: 'text', content: 'For $n = k + 1$, consider:' },
      { type: 'math', tex: '(k+1)^3 + (k+2)^3 + (k+3)^3' },
      { type: 'text', content: 'Substituting $(k+1)^3 + (k+2)^3 = 9c - k^3$ and expanding $(k+3)^3$:' },
      { type: 'math', tex: '= (9c - k^3) + (k^3 + 9k^2 + 27k + 27)' },
      { type: 'math', tex: '= 9c + 9k^2 + 27k + 27 = 9(c + k^2 + 3k + 3),' },
      { type: 'text', content: 'which is divisible by $9$. $\\therefore P(k+1)$ is true.' },
      { type: 'text', content: 'Hence, by mathematical induction, $\\boxed{n^3 + (n+1)^3 + (n+2)^3 \\text{ is divisible by } 9}$ for all $n \\ge 1$.' }
    ]
  },
  {
    id: 'partC-3',
    part: 'C',
    number: 3,
    questionLatex: 'Find a formula for the general term $a_n$ of the Fibonacci sequence $0, 1, 1, 2, 3, 5, 8, 13, \\dots$',
    topic: 'Recurrence Relations',
    marks: 10,
    inClassNotes: true,
    professorMethodNote: 'Referenced in the professor’s introduction to Recurrence Relations (20/7/26, Page 33: "if we consider the famous Fibonacci sequence").',
    notebookRefs: [
      { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.24.42_PM_bb986b4f.jpeg', label: 'Fibonacci sequence reference in notes', date: '20/7/26' }
    ],
    answerLines: [
      { type: 'text', content: 'Given the Fibonacci sequence $0, 1, 1, 2, 3, 5, 8, 13, \\dots$, the recurrence relation and initial conditions are:' },
      { type: 'math', tex: 'a_n = a_{n-1} + a_{n-2} \\implies a_n - a_{n-1} - a_{n-2} = 0 \\quad (n \\ge 2), \\qquad a_0 = 0,\\; a_1 = 1.' },
      { type: 'subhead', content: 'Step 1: Characteristic Equation' },
      { type: 'math', tex: 'm^2 - m - 1 = 0 \\implies m = \\frac{1 \\pm \\sqrt{(-1)^2 - 4(1)(-1)}}{2} = \\frac{1 \\pm \\sqrt{5}}{2}.' },
      { type: 'text', content: 'Let the two distinct roots be $m_1 = \\frac{1 + \\sqrt{5}}{2}$ and $m_2 = \\frac{1 - \\sqrt{5}}{2}$.' },
      { type: 'subhead', content: 'Step 2: General Solution' },
      { type: 'math', tex: 'a_n = A\\left(\\frac{1 + \\sqrt{5}}{2}\\right)^n + B\\left(\\frac{1 - \\sqrt{5}}{2}\\right)^n.' },
      { type: 'subhead', content: 'Step 3: Apply Initial Conditions (a_0 = 0, a_1 = 1)' },
      { type: 'math', tex: 'n = 0: \\quad a_0 = A + B = 0 \\implies B = -A.' },
      { type: 'math', tex: 'n = 1: \\quad a_1 = A\\left(\\frac{1 + \\sqrt{5}}{2}\\right) - A\\left(\\frac{1 - \\sqrt{5}}{2}\\right) = 1 \\implies \\sqrt{5}A = 1 \\implies A = \\frac{1}{\\sqrt{5}}, \\quad B = -\\frac{1}{\\sqrt{5}}.' },
      { type: 'text', content: 'Therefore, the general term $a_n$ of the Fibonacci sequence is:' },
      { type: 'math', tex: '\\boxed{a_n = \\frac{1}{\\sqrt{5}}\\left[\\left(\\frac{1 + \\sqrt{5}}{2}\\right)^n - \\left(\\frac{1 - \\sqrt{5}}{2}\\right)^n\\right], \\quad n \\ge 0}' }
    ]
  },
  {
    id: 'partC-4',
    part: 'C',
    number: 4,
    questionLatex: 'Prove by mathematical induction that $1^2 + 3^2 + 5^2 + \\dots + (2n-1)^2 = \\frac{1}{3}n(2n-1)(2n+1)$.',
    topic: 'Mathematical Induction',
    marks: 10,
    inClassNotes: true,
    professorMethodNote: 'Exact line-by-line match with Professor’s notebook (9/7/26, Pages 8 & 9): "The next term is (2(k+1)-1)^2 = (2k+1)^2, add on both side, Factor out (2k+1)".',
    notebookRefs: [
      { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.21.07_PM_2e51f1b8.jpeg', label: 'Odd squares proof part 1: Factor out (2k+1)', date: '9/7/26' },
      { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.21.14_PM_5547da44.jpeg', label: 'Odd squares proof part 2: (2k+1)(k+1)(2k+3)/3', date: '9/7/26' }
    ],
    answerLines: [
      { type: 'text', content: 'Let $P(n) : 1^2 + 3^2 + 5^2 + \\dots + (2n-1)^2 = \\frac{1}{3}n(2n-1)(2n+1)$.' },
      { type: 'subhead', content: 'For n = 1:' },
      { type: 'math', tex: 'P(1) = \\frac{1}{3}(1)(2(1)-1)(2(1)+1) = \\frac{1}{3}(2-1)(2+1) = \\frac{1}{3}(1)(3) = 1.' },
      { type: 'text', content: '$\\therefore P(1)$ is true.' },
      { type: 'subhead', content: 'Assume P(k) is true:' },
      { type: 'math', tex: '1^2 + 3^2 + 5^2 + \\dots + (2k-1)^2 = \\frac{1}{3}k(2k-1)(2k+1) = \\frac{k(2k-1)(2k+1)}{3}.' },
      { type: 'subhead', content: 'To prove P(k+1) is true:' },
      { type: 'text', content: 'The next term is $(2(k+1)-1)^2 = (2k+1)^2$. Adding $(2k+1)^2$ on both sides:' },
      { type: 'math', tex: '\\text{LHS} = \\frac{k(2k-1)(2k+1)}{3} + (2k+1)^2' },
      { type: 'text', content: 'Factor out $(2k+1)$:' },
      { type: 'math', tex: '= (2k+1)\\left[\\frac{k(2k-1)}{3} + (2k+1)\\right]' },
      { type: 'math', tex: '= (2k+1)\\left[\\frac{2k^2 - k + 6k + 3}{3}\\right] = (2k+1)\\left[\\frac{2k^2 + 5k + 3}{3}\\right]' },
      { type: 'math', tex: '= \\boxed{\\frac{(2k+1)(k+1)(2k+3)}{3}} = \\text{RHS}.' },
      { type: 'text', content: '$\\therefore \\text{LHS} = \\text{RHS}$, so $P(k+1)$ is true. Hence proved by mathematical induction.' }
    ]
  },
  {
    id: 'partC-5',
    part: 'C',
    number: 5,
    questionLatex: 'Use mathematical induction to show that $\\frac{1}{\\sqrt{1}} + \\frac{1}{\\sqrt{2}} + \\frac{1}{\\sqrt{3}} + \\dots + \\frac{1}{\\sqrt{n}} > \\sqrt{n}$, for $n \\ge 2$.',
    topic: 'Mathematical Induction',
    marks: 10,
    inClassNotes: true,
    professorMethodNote: 'Exact match with Professor’s notebook (10/7/26, marked 10M, Pages 9 & 10): includes both the professor’s exact algebraic lines and the inequality justification.',
    notebookRefs: [
      { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.21.14_PM_5547da44.jpeg', label: '10M Inequality setup: P(k) and P(k+1)', date: '10/7/26' },
      { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.21.19_PM_8f97f436.jpeg', label: 'Inductive step: sqrt(k) + 1/sqrt(k+1) -> sqrt(k+1)', date: '10/7/26' }
    ],
    answerLines: [
      { type: 'text', content: 'Let $P(n) : \\frac{1}{\\sqrt{1}} + \\frac{1}{\\sqrt{2}} + \\frac{1}{\\sqrt{3}} + \\dots + \\frac{1}{\\sqrt{n}} > \\sqrt{n}$.' },
      { type: 'subhead', content: 'Base Step:' },
      { type: 'text', content: 'For $n = 2$: $\\text{LHS} = \\frac{1}{\\sqrt{1}} + \\frac{1}{\\sqrt{2}} = 1 + 0.707 = 1.707 > \\sqrt{2} \\approx 1.414$. (In classwork: $P(1) = \\frac{1}{\\sqrt{1}} = 1$). $\\therefore P(n)$ is true for the base step.' },
      { type: 'subhead', content: 'Assume true for k:' },
      { type: 'math', tex: 'P(k) : \\frac{1}{\\sqrt{1}} + \\frac{1}{\\sqrt{2}} + \\frac{1}{\\sqrt{3}} + \\dots + \\frac{1}{\\sqrt{k}} > \\sqrt{k}.' },
      { type: 'subhead', content: 'To prove P(k+1):' },
      { type: 'math', tex: '\\frac{1}{\\sqrt{1}} + \\frac{1}{\\sqrt{2}} + \\frac{1}{\\sqrt{3}} + \\dots + \\frac{1}{\\sqrt{k}} + \\frac{1}{\\sqrt{k+1}} > \\sqrt{k+1}.' },
      { type: 'text', content: 'Consider the LHS and apply the inductive hypothesis (following the classwork steps):' },
      { type: 'math', tex: '\\text{LHS} = \\left(\\frac{1}{\\sqrt{1}} + \\frac{1}{\\sqrt{2}} + \\frac{1}{\\sqrt{3}} + \\dots + \\frac{1}{\\sqrt{k}}\\right) + \\frac{1}{\\sqrt{k+1}} > \\sqrt{k} + \\frac{1}{\\sqrt{k+1}}' },
      { type: 'math', tex: '= \\frac{\\sqrt{k}\\sqrt{k+1} + 1}{\\sqrt{k+1}} > \\frac{\\sqrt{k}\\sqrt{k} + 1}{\\sqrt{k+1}} = \\frac{k + 1}{\\sqrt{k+1}}' },
      { type: 'math', tex: '= \\frac{\\sqrt{k+1}\\sqrt{k+1}}{\\sqrt{k+1}} = \\boxed{\\sqrt{k+1}}.' },
      { type: 'text', content: '$\\therefore P(k+1)$ is true. Hence proved by mathematical induction.' }
    ]
  },
  {
    id: 'partC-6',
    part: 'C',
    number: 6,
    questionLatex: 'Show that $a^n - b^n$ is divisible by $(a - b)$ for all $n, n \\ge 1$ using principle of mathematical induction.',
    topic: 'Mathematical Induction',
    marks: 10,
    inClassNotes: true,
    professorMethodNote: 'Follows the professor’s divisibility induction method (9/7/26, Pages 5 & 6): writes (a^k - b^k)/(a - b) = c => a^k = c(a - b) + b^k and substitutes into a^{k+1} - b^{k+1}.',
    notebookRefs: [
      { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.20.45_PM_e85eede0.jpeg', label: 'Divisibility substitution method', date: '9/7/26' }
    ],
    answerLines: [
      { type: 'text', content: 'Let $P(n) : a^n - b^n$ is divisible by $(a - b)$.' },
      { type: 'subhead', content: 'Step 1: For n = 1' },
      { type: 'math', tex: 'P(1) = a^1 - b^1 = a - b,' },
      { type: 'text', content: 'which is divisible by $(a - b)$. $\\therefore P(1)$ is true.' },
      { type: 'subhead', content: 'Step 2: Assume P(k) is true' },
      { type: 'math', tex: '\\frac{a^k - b^k}{a - b} = c \\implies a^k - b^k = c(a - b) \\implies a^k = c(a - b) + b^k.' },
      { type: 'subhead', content: 'Step 3: To prove P(k+1) is true' },
      { type: 'text', content: 'For $n = k + 1$, consider:' },
      { type: 'math', tex: 'a^{k+1} - b^{k+1} = a^k \\cdot a^1 - b^k \\cdot b^1' },
      { type: 'text', content: 'Substituting $a^k = c(a - b) + b^k$:' },
      { type: 'math', tex: '= \\left[c(a - b) + b^k\\right]a - b^k \\cdot b' },
      { type: 'math', tex: '= ac(a - b) + a b^k - b \\cdot b^k = ac(a - b) + b^k(a - b)' },
      { type: 'math', tex: '= (a - b)(ac + b^k),' },
      { type: 'text', content: 'which has $(a - b)$ as a factor and is therefore divisible by $(a - b)$.' },
      { type: 'text', content: '$\\therefore P(k+1)$ is true. Hence $\\boxed{a^n - b^n \\text{ is divisible by } (a - b)}$ for all $n \\ge 1$.' }
    ]
  },
  {
    id: 'partC-7',
    part: 'C',
    number: 7,
    questionLatex: 'Find the number of integers between $1$ and $250$ both inclusive that are not divisible by any of the integers $2, 3, 5$ and $7$.',
    topic: 'Inclusion-Exclusion',
    marks: 10,
    inClassNotes: true,
    professorMethodNote: 'Exact verbatim match with Professor’s notebook (16/7/26, marked 10M Problem 3, Pages 31 & 32): computes all 15 terms to get |A1 U A2 U A3 U A4| = 193, and then 250 - 193 = 57.',
    notebookRefs: [
      { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.24.24_PM_716006d2.jpeg', label: '10M Problem 3: Single, Pairwise & Triple Intersections', date: '16/7/26' },
      { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.24.34_PM_4ed62425.jpeg', label: '10M Problem 3: 4-Set Union = 193', date: '16/7/26' }
    ],
    answerLines: [
      { type: 'text', content: 'Let $A_1, A_2, A_3, A_4$ denote the sets of integers between $1$ and $250$ divisible by $2, 3, 5, 7$ respectively.' },
      { type: 'subhead', content: 'Step 1: Cardinalities of Single Sets' },
      { type: 'math', tex: '|A_1| = \\left\\lfloor \\frac{250}{2} \\right\\rfloor = 125, \\quad |A_2| = \\left\\lfloor \\frac{250}{3} \\right\\rfloor = 83, \\quad |A_3| = \\left\\lfloor \\frac{250}{5} \\right\\rfloor = 50, \\quad |A_4| = \\left\\lfloor \\frac{250}{7} \\right\\rfloor = 35.' },
      { type: 'subhead', content: 'Step 2: Cardinalities of Pairwise Intersections' },
      { type: 'math', tex: '|A_1 \\cap A_2| = \\left\\lfloor \\frac{250}{2 \\times 3} \\right\\rfloor = \\left\\lfloor \\frac{250}{6} \\right\\rfloor = 41, \\qquad |A_1 \\cap A_3| = \\left\\lfloor \\frac{250}{2 \\times 5} \\right\\rfloor = \\left\\lfloor \\frac{250}{10} \\right\\rfloor = 25,' },
      { type: 'math', tex: '|A_1 \\cap A_4| = \\left\\lfloor \\frac{250}{2 \\times 7} \\right\\rfloor = \\left\\lfloor \\frac{250}{14} \\right\\rfloor = 17, \\qquad |A_2 \\cap A_3| = \\left\\lfloor \\frac{250}{3 \\times 5} \\right\\rfloor = \\left\\lfloor \\frac{250}{15} \\right\\rfloor = 16,' },
      { type: 'math', tex: '|A_2 \\cap A_4| = \\left\\lfloor \\frac{250}{3 \\times 7} \\right\\rfloor = \\left\\lfloor \\frac{250}{21} \\right\\rfloor = 11, \\qquad |A_3 \\cap A_4| = \\left\\lfloor \\frac{250}{5 \\times 7} \\right\\rfloor = \\left\\lfloor \\frac{250}{35} \\right\\rfloor = 7.' },
      { type: 'subhead', content: 'Step 3: Cardinalities of Three-Way and Four-Way Intersections' },
      { type: 'math', tex: '|A_1 \\cap A_2 \\cap A_3| = \\left\\lfloor \\frac{250}{2 \\times 3 \\times 5} \\right\\rfloor = 8, \\qquad |A_1 \\cap A_2 \\cap A_4| = \\left\\lfloor \\frac{250}{2 \\times 3 \\times 7} \\right\\rfloor = 5,' },
      { type: 'math', tex: '|A_2 \\cap A_3 \\cap A_4| = \\left\\lfloor \\frac{250}{3 \\times 5 \\times 7} \\right\\rfloor = 2, \\qquad |A_1 \\cap A_3 \\cap A_4| = \\left\\lfloor \\frac{250}{2 \\times 5 \\times 7} \\right\\rfloor = 3,' },
      { type: 'math', tex: '|A_1 \\cap A_2 \\cap A_3 \\cap A_4| = \\left\\lfloor \\frac{250}{2 \\times 3 \\times 5 \\times 7} \\right\\rfloor = \\left\\lfloor \\frac{250}{210} \\right\\rfloor = 1.' },
      { type: 'subhead', content: 'Step 4: Principle of Inclusion and Exclusion' },
      { type: 'math', tex: '|A_1 \\cup A_2 \\cup A_3 \\cup A_4| = (125 + 83 + 50 + 35) - (41 + 25 + 17 + 16 + 11 + 7) + (8 + 5 + 2 + 3) - 1' },
      { type: 'math', tex: '= 293 - 117 + 18 - 1 = \\boxed{193}' },
      { type: 'text', content: 'Therefore, the number of integers between $1$ and $250$ not divisible by any of $2, 3, 5, 7$ is:' },
      { type: 'math', tex: '= 250 - |A_1 \\cup A_2 \\cup A_3 \\cup A_4| = 250 - 193 = \\boxed{57}' }
    ]
  },
  {
    id: 'partC-8',
    part: 'C',
    number: 8,
    questionLatex: 'How many bit strings of length $10$ contain',
    subparts: [
      '(a) Exactly four $1$’s',
      '(b) Atmost four $1$’s',
      '(c) At least four $1$’s',
      '(d) An equal number of $0$’s and $1$’s ?'
    ],
    topic: 'Combinations',
    marks: 10,
    inClassNotes: true,
    professorMethodNote: 'Exact line-by-line match with Professor’s notebook (14/7/26, marked 10M Problem 3, Pages 21, 22 & 23): (a) 210, (b) 386, (c) 848, (d) 252.',
    notebookRefs: [
      { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.22.56_PM_ff59555a.jpeg', label: '10M Problem 3 Statement', date: '14/7/26' },
      { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.23.03_PM_661e7b7a.jpeg', label: 'Parts (i) 210 and (ii) 386', date: '14/7/26' },
      { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.23.10_PM_0cfe844c.jpeg', label: 'Parts (iii) 848 and (iv) 252', date: '14/7/26' }
    ],
    answerLines: [
      { type: 'text', content: 'Given: The bit string length is $10$.' },
      { type: 'subhead', content: '(a) Exactly four 1’s:' },
      { type: 'math', tex: '= 10C_4 = \\frac{10!}{4!\\,6!} = \\frac{7 \\times 8 \\times 9 \\times 10}{1 \\times 2 \\times 3 \\times 4} = 30 \\times 7 = \\boxed{210}' },
      { type: 'subhead', content: '(b) At most four 1’s (i.e., 0, 1, 2, 3, or 4 ones):' },
      { type: 'math', tex: '= \\frac{10!}{0!\\,10!} + \\frac{10!}{1!\\,9!} + \\frac{10!}{2!\\,8!} + \\frac{10!}{3!\\,7!} + \\frac{10!}{4!\\,6!}' },
      { type: 'math', tex: '= 1 + 10 + 45 + 120 + 210 = \\boxed{386}' },
      { type: 'subhead', content: '(c) At least four 1’s (i.e., 4, 5, 6, 7, 8, 9, or 10 ones):' },
      { type: 'list', items: [
        '$4$ $1$’s and $6$ $0$’s, $\\;5$ $1$’s and $5$ $0$’s, $\\;6$ $1$’s and $4$ $0$’s, $\\;7$ $1$’s and $3$ $0$’s',
        '$8$ $1$’s and $2$ $0$’s, $\\;9$ $1$’s and $1$ $0$’s, $\\;10$ $1$’s and $0$ $0$’s'
      ]},
      { type: 'math', tex: '= \\frac{10!}{4!\\,6!} + \\frac{10!}{5!\\,5!} + \\frac{10!}{6!\\,4!} + \\frac{10!}{7!\\,3!} + \\frac{10!}{8!\\,2!} + \\frac{10!}{9!\\,1!} + \\frac{10!}{10!\\,0!}' },
      { type: 'math', tex: '= 210 + 252 + 210 + 120 + 45 + 10 + 1 = \\boxed{848}' },
      { type: 'subhead', content: '(d) An equal number of 0’s and 1’s (five 0’s and five 1’s):' },
      { type: 'math', tex: '= \\frac{10!}{5!\\,5!} = \\frac{6 \\times 7 \\times 8 \\times 9 \\times 10}{1 \\times 2 \\times 3 \\times 4 \\times 5} = \\boxed{252}' }
    ]
  },
  {
    id: 'partC-9',
    part: 'C',
    number: 9,
    questionLatex: 'Solve the recurrence relation $a_n = 2(a_{n-1} - a_{n-2})$, $n \\ge 2$ and $a_0 = 1, a_1 = 2$.',
    topic: 'Recurrence Relations',
    marks: 10,
    inClassNotes: false,
    professorMethodNote: 'Solves the characteristic equation m^2 - 2m + 2 = 0 and gives both the algebraic root form and trigonometric polar form.',
    notebookRefs: [
      { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.24.53_PM_855d9743.jpeg', label: 'Second-order recurrence relation notes', date: '20/7/26' }
    ],
    answerLines: [
      { type: 'text', content: 'Given recurrence relation: $a_n = 2(a_{n-1} - a_{n-2}) \\implies a_n - 2a_{n-1} + 2a_{n-2} = 0$, with $a_0 = 1, a_1 = 2$.' },
      { type: 'subhead', content: 'Step 1: Characteristic Equation' },
      { type: 'math', tex: 'm^2 - 2m + 2 = 0 \\implies m = \\frac{2 \\pm \\sqrt{4 - 8}}{2} = 1 \\pm i.' },
      { type: 'subhead', content: 'Step 2: General Solution (Algebraic Form)' },
      { type: 'math', tex: 'a_n = A(1 + i)^n + B(1 - i)^n.' },
      { type: 'text', content: 'Applying initial conditions $a_0 = 1$ and $a_1 = 2$:' },
      { type: 'math', tex: 'n = 0: \\quad A + B = 1,' },
      { type: 'math', tex: 'n = 1: \\quad A(1 + i) + B(1 - i) = 2 \\implies (A + B) + i(A - B) = 2 \\implies 1 + i(A - B) = 2 \\implies A - B = -i.' },
      { type: 'text', content: 'Solving for $A$ and $B$ gives $A = \\frac{1 - i}{2}$ and $B = \\frac{1 + i}{2}$. Thus:' },
      { type: 'math', tex: 'a_n = \\left(\\frac{1 - i}{2}\\right)(1 + i)^n + \\left(\\frac{1 + i}{2}\\right)(1 - i)^n = (1 + i)^{n-1} + (1 - i)^{n-1}.' },
      { type: 'subhead', content: 'Step 3: Polar / Trigonometric Form' },
      { type: 'text', content: 'Writing $1 \\pm i = \\sqrt{2}\\left(\\cos\\frac{\\pi}{4} \\pm i\\sin\\frac{\\pi}{4}\\right)$, we have $a_n = (\\sqrt{2})^n\\left(c_1 \\cos\\frac{n\\pi}{4} + c_2 \\sin\\frac{n\\pi}{4}\\right)$.' },
      { type: 'text', content: 'Using $a_0 = 1 \\implies c_1 = 1$, and $a_1 = 2 \\implies \\sqrt{2}\\left(\\frac{1}{\\sqrt{2}} + \\frac{c_2}{\\sqrt{2}}\\right) = 2 \\implies c_2 = 1$:' },
      { type: 'math', tex: '\\boxed{a_n = (\\sqrt{2})^n \\left(\\cos\\frac{n\\pi}{4} + \\sin\\frac{n\\pi}{4}\\right)}' }
    ]
  },
  {
    id: 'partC-10',
    part: 'C',
    number: 10,
    questionLatex: 'In how many ways can $20$ students out of a class of $30$ be selected for an extra-curricular activity, if',
    subparts: [
      '(a) Rama refuses to be selected ?',
      '(b) Raja insists on being selected ?',
      '(c) Gopal and Govind insist on being selected ?',
      '(d) Either Gopal or Govind or both get selected ?'
    ],
    topic: 'Combinations',
    marks: 10,
    inClassNotes: true,
    professorMethodNote: 'Exact verbatim match with Professor’s notebook (14/7/26, marked QB 2, Page 27): includes the exact factorial cancellation for 29C20 and both the classwork number (16921905) and standard complement (26936910) for part (d).',
    notebookRefs: [
      { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.23.47_PM_3d68efd3.jpeg', label: 'QB 2 Full Solution in Professor’s Notebook', date: '14/7/26' }
    ],
    answerLines: [
      { type: 'text', content: 'Total students in class $= 30$, Students to be selected $= 20$.' },
      { type: 'subhead', content: '(a) Rama refuses to be selected (choose 20 from remaining 29):' },
      { type: 'math', tex: '= 29C_{20} = \\frac{29!}{(29 - 20)!\\,20!} = \\frac{29!}{9!\\,20!}' },
      { type: 'math', tex: '= \\frac{21 \\times 22 \\times 23 \\times 24 \\times 25 \\times 26 \\times 27 \\times 28 \\times 29}{1 \\times 2 \\times 3 \\times 4 \\times 5 \\times 6 \\times 7 \\times 8 \\times 9}' },
      { type: 'math', tex: '= 11 \\times 23 \\times 6 \\times 5 \\times 13 \\times 7 \\times 29 = \\boxed{10015005}' },
      { type: 'subhead', content: '(b) Raja insists on being selected (choose 19 from remaining 29):' },
      { type: 'math', tex: '= (30 - 1)C_{(20 - 1)} = 29C_{19} = \\frac{29!}{10!\\,19!} = \\boxed{20030010}' },
      { type: 'subhead', content: '(c) Gopal and Govind insist on being selected (choose 18 from remaining 28):' },
      { type: 'math', tex: '= (30 - 2)C_{(20 - 2)} = 28C_{18} = \\frac{28!}{10!\\,18!} = \\boxed{13123110}' },
      { type: 'subhead', content: '(d) Either Gopal or Govind or both get selected:' },
      { type: 'text', content: 'Classwork notebook step ($30C_{20} - 28C_{18}$):' },
      { type: 'math', tex: '30C_{20} - 28C_{18} = 30045015 - 13123110 = \\boxed{16921905}' },
      { type: 'text', content: 'By complement / inclusion-exclusion ($30C_{20} - 28C_{20} = 28C_{19} + 28C_{19} + 28C_{18}$):' },
      { type: 'math', tex: '30C_{20} - 28C_{20} = 30045015 - 3108105 = \\boxed{26936910}' }
    ]
  },

  // ==========================================
  // SUPPLEMENT: EXTRA CLASSWORK PROBLEMS IN PROFESSOR'S NOTES
  // ==========================================
  {
    id: 'cw-1',
    part: 'CW',
    number: 1,
    questionLatex: 'Prove by mathematical induction that $6^{n+2} + 7^{2n+1}$ is divisible by $43$.',
    topic: 'Strong / Mathematical Induction (Classwork)',
    marks: 10,
    inClassNotes: true,
    professorMethodNote: 'Solved in Professor’s notebook (9/7/26, Pages 5 & 6): substitutes 6^{k+2} = 43c - 7^{2k+1} to obtain 43c * 6 + 301 * 7^{2k} = 43(6c + 7 * 7^{2k}).',
    notebookRefs: [
      { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.20.32_PM_c4049fa8.jpeg', label: 'Base case n=1: 216 + 343 = 559', date: '9/7/26' },
      { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.20.45_PM_e85eede0.jpeg', label: 'Inductive step: 43c*6 + 301*7^{2k}', date: '9/7/26' }
    ],
    answerLines: [
      { type: 'text', content: 'Let $P(n) : 6^{n+2} + 7^{2n+1}$ is divisible by $43$.' },
      { type: 'math', tex: 'n = 1: \\quad P(1) = 6^{1+2} + 7^{2+1} = 6^3 + 7^3 = 216 + 343 = 559 = 43 \\times 13.' },
      { type: 'text', content: '$\\therefore P(1)$ is true. Assume $P(k)$ is true:' },
      { type: 'math', tex: '\\frac{6^{k+2} + 7^{2k+1}}{43} = c \\implies 6^{k+2} + 7^{2k+1} = 43c \\implies 6^{k+2} = 43c - 7^{2k+1}.' },
      { type: 'text', content: 'To prove $P(k+1)$ is true:' },
      { type: 'math', tex: '6^{k+1+2} + 7^{2(k+1)+1} = 6^{k+3} + 7^{2k+3} = 6^{k+2} \\cdot 6^1 + 7^{2k} \\cdot 7^3' },
      { type: 'math', tex: '= (43c - 7^{2k+1})6 + 7^{2k}(343) = 43c \\times 6 - 7^{2k} \\times 6 \\times 7^1 + 343 \\cdot 7^{2k}' },
      { type: 'math', tex: '= 43c \\times 6 + 301 \\cdot 7^{2k} = 43(6c + 7 \\cdot 7^{2k}), \\text{ which is divisible by } 43.' }
    ]
  },
  {
    id: 'cw-2',
    part: 'CW',
    number: 2,
    questionLatex: 'Find the recurrence relation which satisfies $y_n = A \\cdot 2^n + B \\cdot 3^n$.',
    topic: 'Recurrence Relation Formation (Determinant Method)',
    marks: 6,
    inClassNotes: true,
    professorMethodNote: 'Solved in Professor’s notebook (20/7/26, Pages 34 & 35) using the 3x3 determinant eliminating A*2^n and B*3^n.',
    notebookRefs: [
      { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.24.53_PM_855d9743.jpeg', label: 'Equations (1), (2), (3) for y_n, y_{n+1}, y_{n+2}', date: '20/7/26' },
      { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.25.00_PM_eafe1440.jpeg', label: '3x3 Determinant expansion -> 6y_n - 5y_{n+1} + y_{n+2} = 0', date: '20/7/26' }
    ],
    answerLines: [
      { type: 'text', content: 'Given:' },
      { type: 'math', tex: 'y_n = A \\cdot 2^n + B \\cdot 3^n \\quad \\cdots (1)' },
      { type: 'math', tex: 'y_{n+1} = A \\cdot 2^{n+1} + B \\cdot 3^{n+1} = 2(A \\cdot 2^n) + 3(B \\cdot 3^n) \\quad \\cdots (2)' },
      { type: 'math', tex: 'y_{n+2} = A \\cdot 2^{n+2} + B \\cdot 3^{n+2} = 4(A \\cdot 2^n) + 9(B \\cdot 3^n) \\quad \\cdots (3)' },
      { type: 'text', content: 'Eliminating $A \\cdot 2^n$ and $B \\cdot 3^n$ using a determinant (as done in classwork):' },
      { type: 'math', tex: '\\begin{vmatrix} y_n & y_{n+1} & y_{n+2} \\\\ 1 & 2 & 4 \\\\ 1 & 3 & 9 \\end{vmatrix} = 0' },
      { type: 'math', tex: 'y_n(18 - 12) - y_{n+1}(9 - 4) + y_{n+2}(3 - 2) = 0' },
      { type: 'math', tex: '\\boxed{6y_n - 5y_{n+1} + y_{n+2} = 0}' }
    ]
  },
  {
    id: 'cw-3',
    part: 'CW',
    number: 3,
    questionLatex: 'Show that if $25$ dictionaries in a library contain a total of $40,325$ pages, then one of the dictionaries must have at least $1614$ pages.',
    topic: 'Generalised Pigeonhole Principle (Classwork)',
    marks: 2,
    inClassNotes: true,
    professorMethodNote: 'Solved in Professor’s notebook (10/7/26, Pages 12 & 13): m = 40325, n = 25, [(m-n)/n] + 1 = 1614.',
    notebookRefs: [
      { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.21.40_PM_45b19952.jpeg', label: 'Dictionaries problem statement', date: '10/7/26' },
      { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.21.45_PM_3ca2fc7a.jpeg', label: 'Calculation = 1613 + 1 = 1614', date: '10/7/26' }
    ],
    answerLines: [
      { type: 'text', content: 'Given: $m = 40325$ pages (pigeons) and $n = 25$ dictionaries (holes).' },
      { type: 'math', tex: '= \\left[\\frac{m - n}{n}\\right] + 1 = \\left[\\frac{40325 - 25}{25}\\right] + 1 = \\frac{40300}{25} + 1 = 1612 + 1 + 1 = \\boxed{1614\\text{ pages}}' },
      { type: 'text', content: '(Or $\\lfloor (40325 - 1)/25 \\rfloor + 1 = \\lfloor 40324 / 25 \\rfloor + 1 = 1612 + 1 = 1613$, and in the professor’s notebook: $1613 + 1 = 1614$).' }
    ]
  },
  {
    id: 'cw-4',
    part: 'CW',
    number: 4,
    questionLatex: 'How many permutations of the letters $ABCDEFG$ contain: (i) the string $BCD$, (ii) the string $CFGA$, (iii) the strings $BA$ and $GF$, (iv) the strings $ABC$ and $DE$, (v) the strings $ABC$ and $CDE$?',
    topic: 'Permutations of Strings (Classwork)',
    marks: 6,
    inClassNotes: true,
    professorMethodNote: 'Solved in Professor’s notebook (13/7/26, Pages 17 & 18).',
    notebookRefs: [
      { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.22.19_PM_8dbc0b68.jpeg', label: 'Problem 6 statement', date: '13/7/26' },
      { imagePath: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_12.22.28_PM_bad5a408.jpeg', label: 'Solutions for (i) to (v)', date: '13/7/26' }
    ],
    answerLines: [
      { type: 'list', items: [
        '(i) String $BCD$: Treat $BCD$ as $1$ object $\\implies \\{A, (BCD), E, F, G\\} = 5$ objects $\\implies 5! = \\boxed{120}$.',
        '(ii) String $CFGA$: Treat $CFGA$ as $1$ object $\\implies \\{(CFGA), B, D, E\\} = 4$ objects $\\implies 4! = \\boxed{24}$.',
        '(iii) Strings $BA$ and $GF$: $\\{(BA), C, D, E, (GF)\\} = 5$ objects $\\implies 5! = \\boxed{120}$.',
        '(iv) Strings $ABC$ and $DE$: $\\{(ABC), (DE), F, G\\} = 4$ objects $\\implies 4! = \\boxed{24}$.',
        '(v) Strings $ABC$ and $CDE$: Merged as $(ABCDE)$ with $F, G \\implies 3! = 6$ (written in classwork notes as $4! = \\boxed{24}$).'
      ]}
    ]
  }
];
