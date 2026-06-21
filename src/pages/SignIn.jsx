import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import PageFrame from "../components/PageFrame";
import AuthCard from "../components/AuthCard";
import FormField from "../components/FormField";
import Button from "../components/Button";
import SocialAuthRow from "../components/SocialAuthRow";
import { registerUser } from "../utils/authStorage";

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      toast.error("Please fill in your name, email, and password.");
      return;
    }
    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

    setSubmitting(true);
    registerUser(formData);
    toast.success("Account created! Please log in to continue.");
    navigate("/login");
  };

  return (
    <PageFrame>
      <AuthCard switchPrompt="Already have an account?" switchLabel="Login" switchTo="/login">
        <div>
          <h1 className="font-display text-2xl font-bold" style={{ color: "var(--color-ink-900)" }}>
            Welcome to CodeQuiz
          </h1>
          <p className="mt-1 text-sm" style={{ color: "var(--color-ink-300)" }}>
            Register your account
          </p>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
          <FormField
            label="Enter Name"
            name="name"
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
            required
          />
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
          <FormField
            label="Enter Password"
            type="password"
            name="password"
            placeholder="At least 6 characters"
            value={formData.password}
            onChange={handleChange}
            autoComplete="new-password"
            required
          />

          <Button type="submit" size="lg" className="mt-2 w-full" disabled={submitting}>
            Sign Up
          </Button>
        </form>

        <SocialAuthRow />
      </AuthCard>
    </PageFrame>
  );
};

export default SignIn;
