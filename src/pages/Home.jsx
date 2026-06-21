import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PageFrame from "../components/PageFrame";
import Card from "../components/Card";
import DashboardHeader from "../components/DashboardHeader";
import SubjectCard from "../components/SubjectCard";
import Button from "../components/Button";
import useAuthUser from "../hooks/useAuthUser";
import { SUBJECTS } from "../data/subjects";

const Home = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuthUser();
  const [selectedId, setSelectedId] = useState(null);

  const selectedSubject = SUBJECTS.find((s) => s.id === selectedId);

  const handleStartQuiz = () => {
    if (!selectedSubject) {
      toast.error("Pick a category first.");
      return;
    }
    if (!isLoggedIn) {
      toast.info("Please log in to start a quiz.");
      navigate("/login");
      return;
    }
    navigate("/testpage", {
      state: {
        path: selectedSubject.jsonPath,
        subject: selectedSubject.subject,
        color: selectedSubject.color,
      },
    });
  };

  return (
    <PageFrame>
      <Card>
        <DashboardHeader />

        <div className="flex flex-1 flex-col items-center justify-center px-6 py-10 sm:px-10">
          <p
            className="mx-auto max-w-xl text-center text-sm sm:text-base"
            style={{ color: "var(--color-ink-700)" }}
          >
            Choose one from categories below &amp; see how many questions you can answer
            correctly!
          </p>

          <div className="mx-auto mt-8 grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {SUBJECTS.map((item) => (
              <SubjectCard
                key={item.id}
                subject={item.subject}
                tagline={item.tagline}
                color={item.color}
                selected={item.id === selectedId}
                onSelect={() => setSelectedId(item.id)}
              />
            ))}
          </div>

          <div className="mt-10 flex justify-center ">
            <Button size="lg" onClick={handleStartQuiz} disabled={!selectedSubject} className="!bg-[#3a3fd4] !shadow-[0_8px_32px_-4px_rgba(58,63,212,0.85)] hover:!bg-[#2c31b8] hover:!shadow-[0_12px_36px_-4px_rgba(58,63,212,1)] disabled:!opacity-30">
              Start Quiz
            </Button>
          </div>
        </div>
      </Card>
    </PageFrame>
  );
};

export default Home;
