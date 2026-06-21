import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PageFrame from "../components/PageFrame";
import AuthCard from "../components/AuthCard";
import FormField from "../components/FormField";
import Button from "../components/Button";
import { getStoredUser, loginUser } from "../utils/authStorage";

const LogIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!getStoredUser()) {
      toast.error("No account found yet. Please sign up first.");
      navigate("/signin");
      return;
    }

    setSubmitting(true);
    try {
      loginUser(formData);
      toast.success("Login successful — let's quiz!");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <PageFrame>
      <AuthCard switchPrompt="Create an account" switchLabel="Sign Up" switchTo="/signin">
        <div>
          <h1 className="font-display text-2xl font-bold" style={{ color: "var(--color-ink-900)" }}>
            Welcome to CodeQuiz
          </h1>
          <p className="mt-1 text-sm" style={{ color: "var(--color-ink-300)" }}>
            Login &amp; start playing
          </p>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
          <FormField
            label="Enter Email"
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            required
          />

          <div>
            <FormField
              label="Enter Password"
              type="password"
              name="password"
              placeholder="Your password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="current-password"
              required
            />
            <button
              type="button"
              onClick={() => toast.info("Password reset isn't available in this demo yet.")}
              className="mt-1.5 cursor-pointer text-xs font-medium hover:underline"
              style={{ color: "var(--color-ink-300)" }}
            >
              Forgot password?
            </button>
          </div>

          <Button type="submit" size="lg" className="mt-2 w-full" disabled={submitting}>
            Login
          </Button>
        </form>
      </AuthCard>
    </PageFrame>
  );
};

export default LogIn;
