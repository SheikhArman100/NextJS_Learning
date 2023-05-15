import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen w-screen flex flex-col justify-center gap-y-6">
      <h1 className="text-4xl text-green-700 text-center">TO-DO App</h1>
      <ul className="flex items-center justify-center gap-x-10 ">
        <li className="text-red-600">
          <Link href="/SSR">SSR-ServerSide</Link>
        </li>
        <li className="text-blue-600">
          <Link href="/SSG">SSG-Static</Link>
        </li>
        <li className="text-purple-600">
          <Link href="/ISR">ISR-Incremental</Link>
        </li>
      </ul>
    </main>
  );
}
