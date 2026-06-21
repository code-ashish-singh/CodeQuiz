import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PageFrame from "../components/PageFrame";
import Card from "../components/Card";
import DashboardHeader from "../components/DashboardHeader";
import OptionCard from "../components/OptionCard";
import ProgressBadge from "../components/ProgressBadge";
import Button from "../components/Button";
import CelebrationIllustration from "../illustrations/CelebrationIllustration";
import useAuthUser from "../hooks/useAuthUser";
import { pickQuestions, scoreAnswers } from "../utils/quiz";

const TestPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoggedIn } = useAuthUser();
  const { path, subject } = location.state || {};

  const [questions, setQuestions] = useState(null);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [view, setView] = useState("quiz"); // 'quiz' | 'result'

  const loadQuestions = useCallback(async () => {
    try {
      const res = await fetch(path);
      if (!res.ok) throw new Error("Couldn't load questions for this category.");
      const bank = await res.json();
      const shuffled = pickQuestions(bank);
      setQuestions(shuffled);
      setAnswers(Array(shuffled.length).fill(null));
      setCurrentIndex(0);
      setView("quiz");
    } catch (err) {
      setError(err.message || "Something went wrong loading this quiz.");
    }
  }, [path]);

  useEffect(() => {
    if (!isLoggedIn) {
      toast.info("Please log in to take a quiz.");
      navigate("/login");
      return;
    }
    if (!path) {
      toast.error("Pick a category from the home page first.");
      navigate("/");
      return;
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect -- async data fetch, not a synchronous render-phase update
    loadQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelectOption = (option) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[currentIndex] = option;
      return next;
    });
  };

  const isLastQuestion = questions && currentIndex === questions.length - 1;

  const handleNext = () => {
    if (answers[currentIndex] == null) {
      toast.error("Select an answer to continue.");
      return;
    }
    if (isLastQuestion) {
      setView("result");
    } else {
      setCurrentIndex((i) => i + 1);
    }
  };

  const handlePlayAgain = () => {
    loadQuestions();
  };

  if (error) {
    return (
      <PageFrame>
        <Card>
          <DashboardHeader />
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-10 text-center">
            <p style={{ color: "var(--color-ink-700)" }}>{error}</p>
            <Button onClick={() => navigate("/")}>Back to Home</Button>
          </div>
        </Card>
      </PageFrame>
    );
  }

  if (!questions) {
    return (
      <PageFrame>
        <Card>
          <DashboardHeader />
          <div className="flex flex-1 items-center justify-center px-6 py-10">
            <p style={{ color: "var(--color-ink-300)" }}>Loading questions…</p>
          </div>
        </Card>
      </PageFrame>
    );
  }

  if (view === "result") {
    const score = scoreAnswers(questions, answers);
    return (
      <PageFrame>
        <Card>
          <DashboardHeader />
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 py-10 text-center sm:px-10">
            <h1 className="font-display text-3xl font-bold" style={{ color: "var(--color-brand-500)" }}>
              Congratulation
            </h1>
            <p className="text-sm" style={{ color: "var(--color-ink-300)" }}>
              Category : {subject}
            </p>

            <CelebrationIllustration className="w-full max-w-sm" />

            <p className="text-sm" style={{ color: "var(--color-ink-700)" }}>
              You answered
            </p>
            <p className="font-display text-3xl font-bold" style={{ color: "var(--color-brand-500)" }}>
              {score} / {questions.length}
            </p>
            <p className="text-sm" style={{ color: "var(--color-ink-700)" }}>
              question correct
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <Button onClick={handlePlayAgain}>Play Again</Button>
              <Button variant="outline" onClick={() => navigate("/")}>
                Back to Home
              </Button>
            </div>
          </div>
        </Card>
      </PageFrame>
    );
  }

  const question = questions[currentIndex];

  return (
    <PageFrame>
      <Card>
        <DashboardHeader />
        <div className="flex flex-1 flex-col items-center justify-center gap-5 px-6 py-10 text-center sm:px-10">
          <div className="flex items-center gap-3 text-sm" style={{ color: "var(--color-ink-300)" }}>
            <span>Category : {subject}</span>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => navigate("/")}
              className="cursor-pointer font-medium hover:underline"
              style={{ color: "var(--color-brand-500)" }}
            >
              Quit quiz
            </button>
          </div>
          <ProgressBadge current={currentIndex + 1} total={questions.length} />
          <h2 className="max-w-lg text-base font-semibold sm:text-lg" style={{ color: "var(--color-ink-900)" }}>
            {question.question}
          </h2>

          <div className="grid w-full max-w-2xl grid-cols-1 gap-3 text-left sm:grid-cols-2">
            {question.options.map((option) => (
              <OptionCard
                key={option}
                label={option}
                selected={answers[currentIndex] === option}
                onSelect={() => handleSelectOption(option)}
              />
            ))}
          </div>

          <Button size="lg" className="mt-2" onClick={handleNext}>
            {isLastQuestion ? "Finish Quiz" : "Next Question"}
          </Button>
        </div>
      </Card>
    </PageFrame>
  );
};

export default TestPage;
