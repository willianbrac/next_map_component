import dynamic from "next/dynamic";

// Tem que ser essa importação para ser renderizado do lado do cliente;
const DynamicMap = dynamic(() => import("../components/Map"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="w-full h-screen flex justify-center items-center bg-gray-900">
      <DynamicMap />
    </main>
  );
}
