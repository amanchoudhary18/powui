import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 48, maxWidth: 640 }}>
      <h1>POWUI</h1>
      <p>Comic-inspired UI library for React and React Native.</p>
      <p>
        <Link href="/components/button">Browse components →</Link>
      </p>
    </main>
  );
}
