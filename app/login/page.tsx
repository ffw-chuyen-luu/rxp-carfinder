import LoginForm from "@/components/auth/LoginForm";
import Container from "@/components/ui/Container";
import Link from "next/link";

export default function LoginPage() {
  return (
    <Container>
      <div className="text-center">
        <h1 className="text-2xl font-extrabold leading-none tracking-tight mb-4 md:text-4xl">
          Sign in to CarFinder
        </h1>
      </div>

      <LoginForm />

      <div className="bg-white p-4 text-center max-w-md rounded border-gray-400 shadow mx-auto">
        <p>
          New to CarFinder?{" "}
          <Link className="text-primary hover:underline" href="/signup">
            Create an account
          </Link>
        </p>
      </div>
    </Container>
  );
}
