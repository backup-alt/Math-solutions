export const MODULE_2_LATEX_SOURCE = `\\documentclass[11pt,a4paper]{article}
\\usepackage[utf8]{inputenc}
\\usepackage[T1]{fontenc}
\\usepackage{amsmath,amssymb,amsfonts}
\\usepackage[margin=1in]{geometry}
\\usepackage{fancyhdr}
\\usepackage{enumitem}

\\pagestyle{fancy}
\\fancyhf{}
\\lhead{EMA51005 - Discrete Mathematics}
\\rhead{Unit II - Combinatorics}
\\cfoot{\\thepage}
\\renewcommand{\\headrulewidth}{0.4pt}

\\begin{document}

\\begin{center}
    {\\Large \\textbf{EMA51005 - Discrete Mathematics}}\\\\[4pt]
    {\\large \\textbf{UNIT II - Combinatorics}}\\\\[2pt]
    {\\normalsize \\textbf{Final Exam Answer Key}}
\\end{center}

\\noindent \\textit{This answer key strictly follows the handwritten classwork flow: Induction Working Rule ($P(1) \\to P(k) \\to P(k+1)$), Generalised Pigeonhole formula $\\left[\\frac{m-n}{n}\\right]+1$, factorial expansion for $nP_r$ and $nC_r$, Inclusion--Exclusion, and characteristic root $m$ for recurrence relations.}

\\section*{Part A - Short Answers}

\\begin{enumerate}[leftmargin=*, itemsep=10pt]
\\item \\textbf{Assuming that repetitions are not permitted, how many four-digit numbers can be formed from the six digits $1, 2, 3, 5, 7, 8$?}\\\\
\\textbf{Answer:} Total digits $n = 6$, taken $r = 4$ at a time without repetition.
\\[
nP_r = \\frac{n!}{(n-r)!} \\implies 6P_4 = \\frac{6!}{(6-4)!} = \\frac{6!}{2!} = \\frac{1 \\times 2 \\times 3 \\times 4 \\times 5 \\times 6}{1 \\times 2} = \\boxed{360}.
\\]

\\item \\textbf{Show that if seven colours are used to paint $50$ bicycles, at least $8$ bicycles will be the same colour.}\\\\
\\textbf{Answer:} Given $m = 50$ (bicycles) and $n = 7$ (colours). By the Generalised Pigeonhole Principle:
\\[
= \\left[\\frac{m-n}{n}\\right] + 1 = \\left[\\frac{50-7}{7}\\right] + 1 = \\left[\\frac{43}{7}\\right] + 1 = 6.14 + 1 \\implies 7 + 1 = \\boxed{8}.
\\]

\\item \\textbf{How many $7$ letter words can be formed using the letters of the word BENZENE?}\\\\
\\textbf{Answer:} Total number of letters $= 7$. Here $\\text{E}$ is repeated $3$ times, $\\text{N}$ is repeated $2$ times, $\\text{B} = 1$, $\\text{Z} = 1$.
\\[
\\text{Number of words} = \\frac{7!}{3! \\times 2! \\times 1! \\times 1!} = \\frac{1 \\times 2 \\times 3 \\times 4 \\times 5 \\times 6 \\times 7}{(1 \\times 2 \\times 3)(1 \\times 2)} = \\boxed{420}.
\\]

\\item \\textbf{State Pigeonhole principle.}\\\\
\\textbf{Answer:} If $n + 1$ pigeons occupy $n$ holes, then at least one hole has more than one pigeon.

\\item \\textbf{Find the minimum number of students needed to guarantee that five of them belong to the same subject having major as English, Maths, Physics, and Chemistry.}\\\\
\\textbf{Answer:} Here $n = 4$ subjects (holes) and required minimum $= 5$.
\\[
\\left\\lfloor \\frac{m-1}{4} \\right\\rfloor + 1 = 5 \\implies \\frac{m-1}{4} = 4 \\implies m = 16 + 1 = \\boxed{17}.
\\]

\\item \\textbf{Define the generalisation of the pigeonhole principle.}\\\\
\\textbf{Answer:} If $m$ pigeons occupy $n$ holes, then at least one hole contains at least
\\[
\\left[\\frac{m-n}{n}\\right] + 1 \\quad \\left(\\text{i.e., } \\left\\lfloor \\frac{m-1}{n} \\right\\rfloor + 1\\right) \\text{ pigeons.}
\\]

\\item \\textbf{A man hiked for $10$ hours and covered a total distance of $45$ km. It is known that he hiked $6$ km in the first hour and only $3$ km in the last hour. Show that he must have hiked at least $9$ km within a certain period of $2$ consecutive hours.}\\\\
\\textbf{Answer:} Distance covered in the middle $8$ hours (hours $2$ to $9$) is $m = 45 - (6 + 3) = 36$ km. Dividing these $8$ hours into $n = 4$ disjoint pairs of $2$ consecutive hours $(2,3),(4,5),(6,7),(8,9)$, by the Generalised Pigeonhole Principle at least one pair covers at least $\\lceil 36/4 \\rceil = \\boxed{9\\text{ km}}$.

\\item \\textbf{Define Recurrence relation.}\\\\
\\textbf{Answer:} An equation that expresses the general term of a sequence $\\{a_n\\}$ in terms of one or more previous terms $a_1, a_2, \\dots, a_{n-1}$ for all positive integers $n \\ge n_0$ (where $n_0 \\ge 0$) is called a recurrence relation for the sequence $\\{a_n\\}$.

\\item \\textbf{Write the general solution of recurrence relation.}\\\\
\\textbf{Answer:} The general solution is $a_n = a_n^{(h)} + a_n^{(p)}$. For a second-order homogeneous relation with characteristic roots $m_1, m_2$: (i) if $m_1 \\ne m_2$, $y_n = A m_1^n + B m_2^n$; (ii) if $m_1 = m_2 = m$, $y_n = (A + Bn)m^n$.

\\item \\textbf{Write the principle of Inclusion and Exclusion formula for the term $|A \\cup B \\cup C|$.}\\\\
\\textbf{Answer:}
\\[
|A \\cup B \\cup C| = |A| + |B| + |C| - |A \\cap B| - |A \\cap C| - |B \\cap C| + |A \\cap B \\cap C|.
\\]
\\end{enumerate}

\\newpage
\\section*{Part B - 6 Mark Answers}

\\begin{enumerate}[leftmargin=*, itemsep=12pt]
\\item \\textbf{Use mathematical induction to prove that $n^3 + 2n$ is divisible by $3$, for $n \\ge 1$.}\\\\
\\textbf{Answer:} Let $P(n) : n^3 + 2n$ is divisible by $3$.\\\\
\\textbf{For $n = 1$:} $P(1) = 1^3 + 2(1) = 3$, which is divisible by $3$. $\\therefore P(1)$ is true.\\\\
\\textbf{Assume $P(k)$ is true:}
\\[
\\frac{k^3 + 2k}{3} = c \\implies k^3 + 2k = 3c.
\\]
\\textbf{To prove $P(k+1)$ is true:}
\\[
(k+1)^3 + 2(k+1) = k^3 + 3k^2 + 3k + 1 + 2k + 2 = (k^3 + 2k) + 3(k^2 + k + 1) = 3c + 3(k^2 + k + 1) = 3(c + k^2 + k + 1),
\\]
which is divisible by $3$. $\\therefore P(k+1)$ is true. Hence proved.

\\item \\textbf{Prove by mathematical induction that $\\frac{1}{1\\cdot 2} + \\frac{1}{2\\cdot 3} + \\frac{1}{3\\cdot 4} + \\dots + \\frac{1}{n(n+1)} = \\frac{n}{n+1}$.}\\\\
\\textbf{Answer:} For $n=1$: $P(1) = \\frac{1}{1(2)} = \\frac{1}{2}$ and $\\text{RHS} = \\frac{1}{1+1} = \\frac{1}{2}$. $\\therefore P(1)$ is true.\\\\
Assume for $P(k)$: $\\frac{1}{1\\cdot 2} + \\frac{1}{2\\cdot 3} + \\dots + \\frac{1}{k(k+1)} = \\frac{k}{k+1}$.\\\\
To prove $P(k+1)$:
\\[
\\text{LHS} = \\frac{k}{k+1} + \\frac{1}{(k+1)(k+2)} = \\frac{k(k+2)+1}{(k+1)(k+2)} = \\frac{k^2+2k+1}{(k+1)(k+2)} = \\frac{(k+1)(k+1)}{(k+1)(k+2)} = \\boxed{\\frac{k+1}{k+2}} = \\text{RHS}.
\\]

\\item \\textbf{A club consisting of $6$ men and $7$ women, in how many ways can we select a committee of $4$ persons which has at least one woman?}\\\\
\\textbf{Answer:} Given $6$ men and $7$ women. Selecting $4$ members with at least $1$ woman:
\\[
= 7C_1 \\times 6C_3 + 7C_2 \\times 6C_2 + 7C_3 \\times 6C_1 + 7C_4 \\times 6C_0 = 140 + 315 + 210 + 35 = \\boxed{700}.
\\]

\\item \\textbf{There are $250$ students in an engineering college. Of these $188$ have taken Fortran, $100$ C, $35$ Java, $88$ Fortran and C, $23$ C and Java, $29$ Fortran and Java, and $19$ all three. How many have not taken any of the three?}\\\\
\\textbf{Answer:}
\\[
|A_1 \\cup A_2 \\cup A_3| = 188 + 100 + 35 - 88 - 23 - 29 + 19 = 202.
\\]
Students taking none $= 250 - 202 = \\boxed{48}$.

\\item \\textbf{Suppose there are $6$ boys and $5$ girls. (i) Sit in a row, (ii) Boys and girls each sit together, (iii) Girls sit together and boys do not sit together.}\\\\
\\textbf{Answer:} Total $= 11$.\\\\
(i) $11P_{11} = \\frac{11!}{0!} = \\boxed{11!}$.\\\\
(ii) $6! \\times 5! \\times 2! = 720 \\times 120 \\times 2 = \\boxed{172800}$.\\\\
(iii) $6! \\times 5! \\times 5 = 720 \\times 120 \\times 5 = \\boxed{432000}$.

\\item \\textbf{Solve $a_{n+2} - 6a_{n+1} + 9a_n = 3\\cdot 2^n + 7\\cdot 3^n$, $n \\ge 0$, given $a_0 = 1, a_1 = 4$.}\\\\
\\textbf{Answer:} Characteristic equation: $(m-3)^2 = 0 \\implies m = 3,3$, so $a_n^{(h)} = (A+Bn)3^n$.\\\\
Particular solution: $a_n^{(p)} = 3\\cdot 2^n + \\frac{7}{18}n^2 3^n$. Using $a_0=1, a_1=4$ gives $A=-2, B=\\frac{17}{18}$:
\\[
\\boxed{a_n = \\left(-2 + \\frac{17}{18}n + \\frac{7}{18}n^2\\right)3^n + 3\\cdot 2^n}.
\\]

\\item \\textbf{How many positive integers $n$ can be formed using the digits $3,4,4,5,5,6,7$, if $n$ has to exceed $50,00,000$?}\\\\
\\textbf{Answer:} First digit must be $5, 6,$ or $7$:
\\[
\\text{First digit } 5: \\frac{6!}{2!} = 360; \\quad \\text{First digit } 6: \\frac{6!}{2!2!} = 180; \\quad \\text{First digit } 7: \\frac{6!}{2!2!} = 180.
\\]
Total $= 360 + 180 + 180 = \\boxed{720}$.

\\item \\textbf{If $6$ people $A,B,C,D,E,F$ are seated about a round table, find circular arrangements and alternating gender arrangements.}\\\\
\\textbf{Answer:} (i) $(6-1)! = 5! = \\boxed{120}$. (ii) $(3-1)! \\times 3! = 2! \\times 3! = \\boxed{12}$.

\\item \\textbf{A team of $11$ players is to be chosen from $15$ members: (i) one particular player always included, (ii) two such players always included.}\\\\
\\textbf{Answer:} (i) $(15-1)C_{(11-1)} = 14C_{10} = \\boxed{1001}$. (ii) $(15-2)C_{(11-2)} = 13C_9 = \\boxed{715}$.

\\item \\textbf{Solve $a_n - 2a_{n-1} = 3^n$, $a_1 = 5$.}\\\\
\\textbf{Answer:} $a_n^{(h)} = A\\cdot 2^n$ and $a_n^{(p)} = 3^{n+1}$. Using $a_1 = 2A + 9 = 5 \\implies A = -2$:
\\[
\\boxed{a_n = 3^{n+1} - 2^{n+1}}.
\\]
\\end{enumerate}

\\newpage
\\section*{Part C - 10 Mark Answers}

\\begin{enumerate}[leftmargin=*, itemsep=12pt]
\\item \\textbf{Solve $a_{n+1} - a_n = 3n^2 - n$; $n \\ge 0, a_0 = 3$.}\\\\
\\textbf{Answer:} $a_n^{(h)} = A$, and $a_n^{(p)} = Bn^3 + Cn^2 + Dn = n^3 - 2n^2 + n$. Using $a_0 = 3 \\implies A = 3$:
\\[
\\boxed{a_n = n^3 - 2n^2 + n + 3}.
\\]

\\item \\textbf{Use mathematical induction to prove that $n^3 + (n+1)^3 + (n+2)^3$ is divisible by $9$, for $n \\ge 1$.}\\\\
\\textbf{Answer:} For $n=1$: $1 + 8 + 27 = 36 = 9 \\times 4$. Assume $k^3 + (k+1)^3 + (k+2)^3 = 9c$. For $n=k+1$:
\\[
(k+1)^3 + (k+2)^3 + (k+3)^3 = (9c - k^3) + k^3 + 9k^2 + 27k + 27 = 9(c + k^2 + 3k + 3),
\\]
which is divisible by $9$.

\\item \\textbf{Find a formula for the general term $a_n$ of the Fibonacci sequence $0,1,1,2,3,5,8,13,\\dots$}\\\\
\\textbf{Answer:} $a_n - a_{n-1} - a_{n-2} = 0$, $a_0 = 0, a_1 = 1$. Characteristic equation $m^2 - m - 1 = 0 \\implies m = \\frac{1 \\pm \\sqrt{5}}{2}$. Applying $a_0=0, a_1=1$ gives $A = \\frac{1}{\\sqrt{5}}, B = -\\frac{1}{\\sqrt{5}}$:
\\[
\\boxed{a_n = \\frac{1}{\\sqrt{5}}\\left[\\left(\\frac{1+\\sqrt{5}}{2}\\right)^n - \\left(\\frac{1-\\sqrt{5}}{2}\\right)^n\\right]}.
\\]

\\item \\textbf{Prove by mathematical induction that $1^2 + 3^2 + 5^2 + \\dots + (2n-1)^2 = \\frac{1}{3}n(2n-1)(2n+1)$.}\\\\
\\textbf{Answer:} For $n=1$: $P(1) = \\frac{1}{3}(1)(1)(3) = 1$. Assume $P(k) = \\frac{k(2k-1)(2k+1)}{3}$. Adding $(2k+1)^2$:
\\[
(2k+1)\\left[\\frac{k(2k-1)}{3} + (2k+1)\\right] = (2k+1)\\left[\\frac{2k^2+5k+3}{3}\\right] = \\boxed{\\frac{(2k+1)(k+1)(2k+3)}{3}}.
\\]

\\item \\textbf{Use mathematical induction to show that $\\frac{1}{\\sqrt{1}} + \\frac{1}{\\sqrt{2}} + \\frac{1}{\\sqrt{3}} + \\dots + \\frac{1}{\\sqrt{n}} > \\sqrt{n}$, for $n \\ge 2$.}\\\\
\\textbf{Answer:} Base step holds. Assume $P(k) > \\sqrt{k}$. For $n=k+1$:
\\[
\\text{LHS} > \\sqrt{k} + \\frac{1}{\\sqrt{k+1}} = \\frac{\\sqrt{k}\\sqrt{k+1}+1}{\\sqrt{k+1}} > \\frac{\\sqrt{k+1}\\sqrt{k+1}}{\\sqrt{k+1}} = \\boxed{\\sqrt{k+1}}.
\\]

\\item \\textbf{Show that $a^n - b^n$ is divisible by $(a-b)$ for all $n \\ge 1$ using mathematical induction.}\\\\
\\textbf{Answer:} For $n=1$: $a^1 - b^1 = a - b$. Assume $a^k - b^k = c(a-b) \\implies a^k = c(a-b) + b^k$. For $n=k+1$:
\\[
a^{k+1} - b^{k+1} = [c(a-b) + b^k]a - b^{k+1} = ac(a-b) + b^k(a-b) = (a-b)(ac + b^k).
\\]

\\item \\textbf{Find the number of integers between $1$ and $250$ both inclusive that are not divisible by any of $2, 3, 5$ and $7$.}\\\\
\\textbf{Answer:}
\\[
|A_1 \\cup A_2 \\cup A_3 \\cup A_4| = (125+83+50+35) - (41+25+17+16+11+7) + (8+5+2+3) - 1 = 193.
\\]
Not divisible by any of $2,3,5,7$: $250 - 193 = \\boxed{57}$.

\\item \\textbf{How many bit strings of length $10$ contain: (a) Exactly four $1$’s, (b) Atmost four $1$’s, (c) At least four $1$’s, (d) Equal $0$’s and $1$’s?}\\\\
\\textbf{Answer:}
(a) $10C_4 = \\boxed{210}$.
(b) $1 + 10 + 45 + 120 + 210 = \\boxed{386}$.
(c) $210 + 252 + 210 + 120 + 45 + 10 + 1 = \\boxed{848}$.
(d) $10C_5 = \\boxed{252}$.

\\item \\textbf{Solve $a_n = 2(a_{n-1} - a_{n-2})$, $n \\ge 2$ and $a_0 = 1, a_1 = 2$.}\\\\
\\textbf{Answer:} $m^2 - 2m + 2 = 0 \\implies m = 1 \\pm i = \\sqrt{2}(\\cos\\frac{\\pi}{4} \\pm i\\sin\\frac{\\pi}{4})$. Applying $a_0=1, a_1=2$:
\\[
\\boxed{a_n = (1+i)^{n-1} + (1-i)^{n-1} = (\\sqrt{2})^n\\left(\\cos\\frac{n\\pi}{4} + \\sin\\frac{n\\pi}{4}\\right)}.
\\]

\\item \\textbf{In how many ways can $20$ students out of $30$ be selected if: (a) Rama refuses, (b) Raja insists, (c) Gopal and Govind insist, (d) Either Gopal or Govind or both get selected?}\\\\
\\textbf{Answer:}
(a) $29C_{20} = \\boxed{10015005}$.
(b) $29C_{19} = \\boxed{20030010}$.
(c) $28C_{18} = \\boxed{13123110}$.
(d) Classwork: $30C_{20} - 28C_{18} = \\boxed{16921905}$ (or $30C_{20} - 28C_{20} = \\boxed{26936910}$).
\\end{enumerate}

\\end{document}
`;
