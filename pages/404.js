import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 4000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="not-found">
      <h2>404</h2>
      <h3>Oops! That page cannot be found.</h3>
      <p>
        Redirecting to{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>{" "}
        for more marmite goodies...
      </p>
    </div>
  );
};

export default NotFound;
