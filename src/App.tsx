import React, { useState, useMemo } from 'react';
import {
  Printer,
  Copy,
  Check,
  Download,
  Search,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Eye,
  FileCode,
  FileText,
  ZoomIn,
  ZoomOut,
} from 'lucide-react';
import {
  MODULE_2_QUESTIONS,
  ALL_NOTEBOOK_PAGES,
  QuestionItem,
  NotebookRef,
} from './data/module2AnswerKey';
import { MODULE_2_LATEX_SOURCE } from './data/latexSource';
import { Math } from './components/Math';
import { RichTextWithMath } from './components/RichTextWithMath';

type ViewMode = 'key' | 'split' | 'latex';
type PartFilter = 'ALL' | 'A' | 'B' | 'C' | 'CW';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('split');
  const [partFilter, setPartFilter] = useState<PartFilter>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [showProfNotes, setShowProfNotes] = useState(true);
  const [includeSupplementInPrint, setIncludeSupplementInPrint] = useState(false);
  const [selectedNotebookPage, setSelectedNotebookPage] = useState<NotebookRef>(
    ALL_NOTEBOOK_PAGES[0]
  );
  const [imageZoom, setImageZoom] = useState<number>(1);
  const [copiedLatex, setCopiedLatex] = useState(false);
  const [imageErrorMap, setImageErrorMap] = useState<Record<string, boolean>>({});

  const filteredQuestions = useMemo(() => {
    return MODULE_2_QUESTIONS.filter((q) => {
      if (partFilter !== 'ALL' && q.part !== partFilter) return false;
      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase();
      return (
        q.questionLatex.toLowerCase().includes(query) ||
        q.topic.toLowerCase().includes(query) ||
        q.professorMethodNote.toLowerCase().includes(query) ||
        `${q.part}${q.number}`.toLowerCase().includes(query)
      );
    });
  }, [partFilter, searchQuery]);

  const partAQuestions = useMemo(
    () => filteredQuestions.filter((q) => q.part === 'A'),
    [filteredQuestions]
  );
  const partBQuestions = useMemo(
    () => filteredQuestions.filter((q) => q.part === 'B'),
    [filteredQuestions]
  );
  const partCQuestions = useMemo(
    () => filteredQuestions.filter((q) => q.part === 'C'),
    [filteredQuestions]
  );
  const cwQuestions = useMemo(
    () => filteredQuestions.filter((q) => q.part === 'CW'),
    [filteredQuestions]
  );

  const currentNotebookIndex = useMemo(() => {
    return ALL_NOTEBOOK_PAGES.findIndex(
      (p) => p.imagePath === selectedNotebookPage.imagePath
    );
  }, [selectedNotebookPage]);

  const handleSelectNotebookRef = (ref: NotebookRef) => {
    setSelectedNotebookPage(ref);
    setImageZoom(1);
    if (viewMode === 'key') {
      setViewMode('split');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopyLatex = async () => {
    try {
      await navigator.clipboard.writeText(MODULE_2_LATEX_SOURCE);
      setCopiedLatex(true);
      setTimeout(() => setCopiedLatex(false), 2000);
    } catch {
      // Fallback copy
    }
  };

  const handleDownloadLatex = () => {
    const blob = new Blob([MODULE_2_LATEX_SOURCE], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'EMA51005_Module_2_Final_Answer_Key.tex';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const jumpToPart = (part: PartFilter, sectionId?: string) => {
    setPartFilter(part);
    if (viewMode === 'latex') {
      setViewMode('split');
    }
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 60);
    }
  };

  const renderQuestionBlock = (q: QuestionItem) => {
    return (
      <div key={q.id} className="question-block mb-6 pb-3">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div className="text-[16px] leading-relaxed text-black">
            <span className="font-bold mr-1.5">{q.number}.</span>
            <span className="font-bold">
              <RichTextWithMath text={q.questionLatex} />
            </span>
          </div>

          {/* Quiet unboxed metadata + notebook link (hidden when printing) */}
          <div className="no-print flex items-center gap-2 text-xs text-slate-500 font-sans shrink-0">
            <span>{q.topic}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">{q.marks} Marks</span>
            {q.notebookRefs.length > 0 && (
              <>
                <span aria-hidden="true">·</span>
                <button
                  type="button"
                  onClick={() => handleSelectNotebookRef(q.notebookRefs[0])}
                  className="text-sky-700 hover:text-sky-900 underline underline-offset-2 font-medium cursor-pointer whitespace-nowrap shrink-0"
                >
                  View Class Note ({q.notebookRefs[0].date || 'Scan'})
                </button>
              </>
            )}
          </div>
        </div>

        {/* Subparts in question if present */}
        {q.subparts && q.subparts.length > 0 && (
          <div className="mt-1.5 ml-5 space-y-1 text-[15.5px] font-semibold text-black">
            {q.subparts.map((sp, i) => (
              <div key={i}>
                <RichTextWithMath text={sp} />
              </div>
            ))}
          </div>
        )}

        {/* Professor alignment note (screen-only, optional) */}
        {showProfNotes && (
          <div className="no-print mt-2 mb-2.5 px-3 py-2 rounded-md bg-slate-50 border border-slate-200 font-sans text-xs text-slate-600 flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="font-semibold text-slate-800">Professor’s Classwork Method: </span>
              <span>{q.professorMethodNote}</span>
            </div>
            {q.notebookRefs.length > 1 && (
              <div className="flex items-center gap-2 shrink-0">
                {q.notebookRefs.map((ref, idx) => (
                  <button
                    key={ref.imagePath}
                    type="button"
                    onClick={() => handleSelectNotebookRef(ref)}
                    className="text-sky-700 hover:text-sky-900 underline underline-offset-2 font-medium cursor-pointer whitespace-nowrap"
                  >
                    Page {idx + 1}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Answer Body in authentic University Exam Answer Key flow */}
        <div className="mt-1.5 ml-4 text-[15.5px] text-black space-y-1.5">
          {q.answerLines.map((line, idx) => {
            const isFirstLine = idx === 0;
            if (line.type === 'subhead') {
              return (
                <div key={idx} className="font-bold text-black pt-1">
                  {isFirstLine && <span>Answer: </span>}
                  <RichTextWithMath text={line.content || ''} />
                </div>
              );
            }
            if (line.type === 'math') {
              return (
                <div key={idx} className="py-0.5">
                  {isFirstLine && <span className="font-bold mr-1">Answer:</span>}
                  <Math tex={line.tex || ''} block />
                </div>
              );
            }
            if (line.type === 'list') {
              return (
                <div key={idx} className="space-y-1 pl-4">
                  {isFirstLine && <div className="font-bold -ml-4">Answer:</div>}
                  {(line.items || []).map((item, itemIdx) => (
                    <div key={itemIdx} className="text-black">
                      <RichTextWithMath text={item} />
                    </div>
                  ))}
                </div>
              );
            }
            return (
              <div key={idx} className="text-black leading-relaxed">
                {isFirstLine && <span className="font-bold mr-1.5">Answer:</span>}
                <RichTextWithMath text={line.content || ''} />
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A]">
      {/* Strict 3-Zone Top Bar Contract (Hidden when printing) */}
      <header className="no-print sticky top-0 z-30 flex items-center justify-between gap-8 px-6 py-3.5 bg-white border-b border-slate-200">
        {/* Zone 1: Brand Title */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            jumpToPart('ALL', 'top');
          }}
          className="text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0"
        >
          EMA51005 Discrete Mathematics
        </a>

        {/* Zone 2: 4 Concise Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <button
            type="button"
            onClick={() => jumpToPart('ALL', 'section-part-a')}
            className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Part A (Short)
          </button>
          <button
            type="button"
            onClick={() => jumpToPart('ALL', 'section-part-b')}
            className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Part B (6 Marks)
          </button>
          <button
            type="button"
            onClick={() => jumpToPart('ALL', 'section-part-c')}
            className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Part C (10 Marks)
          </button>
          <button
            type="button"
            onClick={() => jumpToPart('ALL', 'section-part-cw')}
            className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Classwork Notes
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={handlePrint}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / Save PDF</span>
          </button>
        </div>
      </header>

      {/* Workspace Control Bar (Below Header, Hidden in Print) */}
      <section
        id="top"
        className="no-print bg-white border-b border-slate-200 px-6 py-3"
      >
        <div className="max-w-[1400px] mx-auto flex flex-wrap items-center justify-between gap-4">
          {/* View Mode Segmented Control */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg">
            <button
              type="button"
              onClick={() => setViewMode('key')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer ${
                viewMode === 'key'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Exam Answer Key View</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('split')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer ${
                viewMode === 'split'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Split View + Professor’s Notebook (35 Pages)</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('latex')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer ${
                viewMode === 'latex'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>LaTeX (.tex) & Reference PDFs</span>
            </button>
          </div>

          {/* Part Filter + Search + Professor Alignment Toggle */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg">
              {(
                [
                  { id: 'ALL', label: 'All (30 Qs)' },
                  { id: 'A', label: 'Part A (10)' },
                  { id: 'B', label: 'Part B (10)' },
                  { id: 'C', label: 'Part C (10)' },
                  { id: 'CW', label: 'Extra Classwork (4)' },
                ] as { id: PartFilter; label: string }[]
              ).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setPartFilter(tab.id)}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    partFilter === tab.id
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search question, formula, topic..."
                className="pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-slate-400 w-52"
              />
            </div>

            <label className="flex items-center gap-1.5 text-xs text-slate-600 cursor-pointer select-none whitespace-nowrap shrink-0">
              <input
                type="checkbox"
                checked={showProfNotes}
                onChange={(e) => setShowProfNotes(e.target.checked)}
                className="rounded border-slate-300 text-slate-900 focus:ring-0"
              />
              <span>Show Professor Method Notes</span>
            </label>

            <label className="flex items-center gap-1.5 text-xs text-slate-600 cursor-pointer select-none whitespace-nowrap shrink-0">
              <input
                type="checkbox"
                checked={includeSupplementInPrint}
                onChange={(e) => setIncludeSupplementInPrint(e.target.checked)}
                className="rounded border-slate-300 text-slate-900 focus:ring-0"
              />
              <span>Include Extra Classwork in Print</span>
            </label>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-1 max-w-[1400px] w-full mx-auto px-4 sm:px-6 py-6">
        {viewMode === 'latex' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* LaTeX Code Panel */}
            <div className="lg:col-span-8 bg-white border border-slate-200 rounded-xl p-6">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-4 border-b border-slate-200">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    LaTeX Source Code (EMA51005_Module_2_Final_Answer_Key.tex)
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Formatted with the exact same LaTeX preamble, fancyhdr running headers, and boxed equations as the Unit III and Unit IV Answer Keys.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopyLatex}
                    className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    {copiedLatex ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Copied .tex</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy LaTeX</span>
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={handleDownloadLatex}
                    className="px-3 py-1.5 text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download .tex</span>
                  </button>
                </div>
              </div>
              <pre className="p-4 bg-slate-950 text-slate-100 rounded-lg text-xs font-mono overflow-x-auto max-h-[680px] leading-relaxed">
                {MODULE_2_LATEX_SOURCE}
              </pre>
            </div>

            {/* Reference PDFs & Grading Summary Panel */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="text-base font-bold text-slate-900">
                  Uploaded Course Reference Files
                </h3>
                <p className="text-xs text-slate-500 mt-1 mb-4">
                  Open the original Question Bank and reference Answer Keys to compare layout and structure.
                </p>
                <div className="space-y-2.5 text-xs">
                  <a
                    href="/assets/aistudio/DM_EMA51005_Question_Bank_Module_2__1__8e66367d.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors text-slate-800 font-medium"
                  >
                    <span>Unit II Question Bank (Combinatorics)</span>
                    <Eye className="w-4 h-4 text-slate-500 shrink-0" />
                  </a>
                  <a
                    href="/assets/aistudio/EMA51005_Module_3_Final_Answer_Key_1e6287a0.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors text-slate-800 font-medium"
                  >
                    <span>Unit III Final Answer Key (Reference)</span>
                    <Eye className="w-4 h-4 text-slate-500 shrink-0" />
                  </a>
                  <a
                    href="/assets/aistudio/EMA51005_Module_4_Final_Answer_Key_261299cc.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors text-slate-800 font-medium"
                  >
                    <span>Unit IV Final Answer Key (Reference)</span>
                    <Eye className="w-4 h-4 text-slate-500 shrink-0" />
                  </a>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="text-base font-bold text-slate-900">
                  Professor’s Key Marking Conventions
                </h3>
                <ul className="mt-3 space-y-2.5 text-xs text-slate-600 leading-relaxed">
                  <li>
                    <strong className="text-slate-900">1. Induction Working Rule:</strong> Always write <Math tex="P(1)\text{ is true}" />, <Math tex="\text{Assume } P(k)\text{ is true}" /> (setting divisibility expressions <Math tex="= c" />), and <Math tex="\text{To prove } P(k+1)\text{ is true}" />.
                  </li>
                  <li>
                    <strong className="text-slate-900">2. Generalised Pigeonhole Principle:</strong> Explicitly identify <Math tex="m" /> (pigeons) and <Math tex="n" /> (holes) and write <Math tex="\left[\frac{m-n}{n}\right] + 1" />.
                  </li>
                  <li>
                    <strong className="text-slate-900">3. Permutations & Combinations:</strong> Write out <Math tex="nP_r = \frac{n!}{(n-r)!}" /> and <Math tex="nC_r = \frac{n!}{(n-r)!\,r!}" /> with expanded factorial numerators/denominators before writing the product.
                  </li>
                  <li>
                    <strong className="text-slate-900">4. Boys & Girls Row Problem (Part B Q5):</strong> Write <Math tex="11P_{11} = 11!" /> for (i), <Math tex="6! \times 5! \times 2 = 172800" /> for (ii), and <Math tex="6! \times 5! \times 5 = 432000" /> for (iii).
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div
            className={`grid grid-cols-1 ${
              viewMode === 'split' ? 'lg:grid-cols-12 gap-6 items-start' : ''
            }`}
          >
            {/* Left / Main Column: Authentic LaTeX Exam Answer Key Sheet */}
            <div
              className={
                viewMode === 'split'
                  ? 'lg:col-span-7 xl:col-span-7'
                  : 'max-w-[860px] mx-auto w-full'
              }
            >
              <article className="latex-page latex-document bg-white border border-slate-200 shadow-xs rounded-none sm:rounded-md px-6 sm:px-12 py-10">
                {/* Running Header matching Unit III & Unit IV PDFs */}
                <div className="flex items-center justify-between text-[13.5px] text-black pb-1.5 border-b border-black mb-7">
                  <span>EMA51005 - Discrete Mathematics</span>
                  <span>Unit II - Combinatorics</span>
                </div>

                {/* Title Block matching Unit III & Unit IV PDFs */}
                <div className="text-center mb-6">
                  <h1 className="text-[22px] font-bold tracking-normal text-black leading-snug">
                    EMA51005 - Discrete Mathematics
                  </h1>
                  <h2 className="text-[18px] font-bold text-black mt-0.5">
                    UNIT II - Combinatorics
                  </h2>
                  <div className="text-[15px] font-bold text-black mt-0.5">
                    Final Exam Answer Key
                  </div>
                </div>

                {/* Italic Classwork Note matching Unit III & Unit IV PDFs */}
                <p className="italic text-[14.5px] text-black mb-7 leading-relaxed">
                  This answer key strictly follows the handwritten classwork flow: Induction Working Rule (<Math tex="P(1) \to P(k) \to P(k+1)" />), Generalised Pigeonhole Principle (<Math tex="\left[\frac{m-n}{n}\right] + 1" />), step-by-step factorial expansion for <Math tex="nP_r" /> and <Math tex="nC_r" />, Inclusion–Exclusion, and characteristic root <Math tex="m" /> for recurrence relations. Powers are typeset using normal superscripts.
                </p>

                {/* Part A - Short Answers */}
                {partAQuestions.length > 0 && (
                  <section id="section-part-a" className="mb-8">
                    <h3 className="text-[19px] font-bold text-black mb-4">
                      Part A - Short Answers
                    </h3>
                    <div>{partAQuestions.map(renderQuestionBlock)}</div>
                  </section>
                )}

                {/* Part B - 6 Mark Answers */}
                {partBQuestions.length > 0 && (
                  <section id="section-part-b" className="part-break mb-8 pt-2">
                    <div className="hidden print:flex items-center justify-between text-[13.5px] text-black pb-1.5 border-b border-black mb-6">
                      <span>EMA51005 - Discrete Mathematics</span>
                      <span>Unit II - Combinatorics</span>
                    </div>
                    <h3 className="text-[19px] font-bold text-black mb-4">
                      Part B - 6 Mark Answers
                    </h3>
                    <div>{partBQuestions.map(renderQuestionBlock)}</div>
                  </section>
                )}

                {/* Part C - 10 Mark Answers */}
                {partCQuestions.length > 0 && (
                  <section id="section-part-c" className="part-break mb-8 pt-2">
                    <div className="hidden print:flex items-center justify-between text-[13.5px] text-black pb-1.5 border-b border-black mb-6">
                      <span>EMA51005 - Discrete Mathematics</span>
                      <span>Unit II - Combinatorics</span>
                    </div>
                    <h3 className="text-[19px] font-bold text-black mb-4">
                      Part C - 10 Mark Answers
                    </h3>
                    <div>{partCQuestions.map(renderQuestionBlock)}</div>
                  </section>
                )}

                {/* Extra Classwork Supplement from Professor's Notebook */}
                {cwQuestions.length > 0 && (
                  <section
                    id="section-part-cw"
                    className={`${
                      includeSupplementInPrint ? 'part-break' : 'no-print'
                    } pt-4 border-t border-slate-200`}
                  >
                    <h3 className="text-[19px] font-bold text-black mb-2">
                      Additional Solved Classwork Problems (From Professor’s Notebook)
                    </h3>
                    <p className="italic text-[14px] text-black mb-4">
                      These additional problems were solved in the professor’s handwritten Unit-2 class notes (including the determinant method for forming a recurrence relation and strong induction divisibility by 43).
                    </p>
                    <div>{cwQuestions.map(renderQuestionBlock)}</div>
                  </section>
                )}
              </article>
            </div>

            {/* Right Column: Interactive Professor's Handwritten Notebook Inspector (Split View) */}
            {viewMode === 'split' && (
              <aside className="no-print lg:col-span-5 xl:col-span-5 lg:sticky lg:top-16 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
                <div className="p-4 border-b border-slate-200 bg-slate-50">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">
                        Professor’s Handwritten Class Notes
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Click “View Class Note” on any question or browse all 35 notebook pages below.
                      </p>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      <button
                        type="button"
                        onClick={() =>
                          setImageZoom((z) => (z > 1 ? +(z - 0.25).toFixed(2) : 1))
                        }
                        title="Zoom Out"
                        className="p-1.5 text-slate-600 hover:text-slate-900 bg-white border border-slate-200 rounded-md cursor-pointer"
                      >
                        <ZoomOut className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-xs font-mono tabular-nums px-1.5 text-slate-600">
                        {window.Math.round(imageZoom * 100)}%
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          setImageZoom((z) => (z < 2 ? +(z + 0.25).toFixed(2) : 2))
                        }
                        title="Zoom In"
                        className="p-1.5 text-slate-600 hover:text-slate-900 bg-white border border-slate-200 rounded-md cursor-pointer"
                      >
                        <ZoomIn className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Page Selector Dropdown + Prev/Next */}
                  <div className="mt-3 flex items-center gap-2">
                    <button
                      type="button"
                      disabled={currentNotebookIndex <= 0}
                      onClick={() => {
                        if (currentNotebookIndex > 0) {
                          setSelectedNotebookPage(
                            ALL_NOTEBOOK_PAGES[currentNotebookIndex - 1]
                          );
                        }
                      }}
                      className="p-1.5 bg-white border border-slate-200 rounded-md text-slate-700 hover:bg-slate-100 disabled:opacity-40 cursor-pointer shrink-0"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>

                    <select
                      value={selectedNotebookPage.imagePath}
                      onChange={(e) => {
                        const found = ALL_NOTEBOOK_PAGES.find(
                          (p) => p.imagePath === e.target.value
                        );
                        if (found) setSelectedNotebookPage(found);
                      }}
                      className="flex-1 text-xs bg-white border border-slate-200 rounded-md px-2.5 py-1.5 text-slate-800 font-medium focus:outline-none focus:border-slate-400 truncate"
                    >
                      {ALL_NOTEBOOK_PAGES.map((page, idx) => (
                        <option key={page.imagePath} value={page.imagePath}>
                          {idx + 1}/35 — {page.label} ({page.date})
                        </option>
                      ))}
                    </select>

                    <button
                      type="button"
                      disabled={currentNotebookIndex >= ALL_NOTEBOOK_PAGES.length - 1}
                      onClick={() => {
                        if (currentNotebookIndex < ALL_NOTEBOOK_PAGES.length - 1) {
                          setSelectedNotebookPage(
                            ALL_NOTEBOOK_PAGES[currentNotebookIndex + 1]
                          );
                        }
                      }}
                      className="p-1.5 bg-white border border-slate-200 rounded-md text-slate-700 hover:bg-slate-100 disabled:opacity-40 cursor-pointer shrink-0"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Notebook Image Canvas with Resilient Fallback */}
                <div className="bg-slate-900 overflow-auto max-h-[680px] flex items-start justify-center p-3">
                  {!imageErrorMap[selectedNotebookPage.imagePath] ? (
                    <img
                      src={selectedNotebookPage.imagePath}
                      alt={selectedNotebookPage.label}
                      referrerPolicy="no-referrer"
                      style={{
                        transform: `scale(${imageZoom})`,
                        transformOrigin: 'top center',
                      }}
                      onError={() =>
                        setImageErrorMap((prev) => ({
                          ...prev,
                          [selectedNotebookPage.imagePath]: true,
                        }))
                      }
                      className="max-w-full h-auto rounded shadow-sm transition-transform duration-150"
                    />
                  ) : (
                    <div className="w-full py-16 px-6 text-center bg-slate-800 rounded-lg text-slate-200">
                      <BookOpen className="w-8 h-8 mx-auto mb-2 text-slate-400" />
                      <p className="text-sm font-semibold">
                        {selectedNotebookPage.label}
                      </p>
                      <p className="text-xs text-slate-400 mt-1">
                        Class Date: {selectedNotebookPage.date}
                      </p>
                    </div>
                  )}
                </div>

                {/* Notebook Footer Info */}
                <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                  <span className="truncate">{selectedNotebookPage.label}</span>
                  <span className="tabular-nums shrink-0 ml-2">
                    Page {currentNotebookIndex + 1} of {ALL_NOTEBOOK_PAGES.length} ·{' '}
                    {selectedNotebookPage.date}
                  </span>
                </div>
              </aside>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
