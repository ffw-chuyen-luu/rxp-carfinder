import SignupForm from "@/components/auth/SignupForm";
import Container from "@/components/ui/Container";
import Link from "next/link";

export default function SignupPage() {
  return (
    <Container>
      <div className="text-center">
        <h1 className="text-2xl font-extrabold leading-none tracking-tight mb-4 md:text-4xl">
          Sign up to CarFinder
        </h1>
      </div>

      <SignupForm />

      <div className="bg-white p-4 text-center max-w-md rounded border-gray-400 shadow mx-auto">
        <p>
          Already has an account?{" "}
          <Link className="text-primary hover:underline" href="/login">
            Log in
          </Link>
        </p>
      </div>
    </Container>
  );
}
