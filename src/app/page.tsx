import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("../components/Map"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="w-full h-screen flex justify-center items-center bg-gray-600">
      <DynamicMap />
    </main>
  );
}
