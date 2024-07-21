import { Lock } from "lucide-react";
export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="w-screen px-5 max-w-3xl m-auto mt-10">
      <p className="mb-1 text-sm opacity-50 flex items-center">
        <Lock className="h-[10px] w-[10px] opacity-50 mr-1" />
        Form responses{" "}
      </p>
      <h1 className="font-medium text-4xl">O'Kon, Smith and Klocko</h1>
    </div>
  );
}
