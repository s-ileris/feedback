"use client";
import { fakeForms } from "../fakedata";
import { useEffect, useState } from "react";
import { Lock } from "lucide-react";
import Link from "next/link";
const user = { name: "Lena" };
const name_lastchar = user.name.slice(-1);

export default function Dashboard() {
  const [page, setPage] = useState(1);
  const [forms, setForms] = useState<any>(fakeForms.slice(0, 5));
  function paginate(page_size: number, page_number: number) {
    const res = fakeForms.slice(
      (page_number - 1) * page_size,
      page_number * page_size
    );
    setForms(res);
  }
  useEffect(() => {
    paginate(5, page);
  }, [page]);
  return (
      <main className="grid place-items-center h-screen">
        <div className="h-fit m-auto p-4 border rounded-sm w-[90vw] max-w-xl bg-white/75">
          <div className="mb-4 p-4">
            <h3 className="text-xl font-medium">
              {user.name}
              {name_lastchar == "s" ? "'" : "'s"} forms
            </h3>
            <p className="text-sm opacity-50">
              Manage all of your shareable forms
            </p>
          </div>
          <div>
            <div className="flex items-center justify-between text-sm opacity-50 mb-1 px-2">
              <p>Form name</p>
              <p>Responses</p>
            </div>
            {forms.map((i: any, key: number) => (
              <div
                key={key}
                className="relative cursor-pointer hover:bg-white/50 duration-300 py-3 px-2 border rounded-lg mb-2"
              >
                <Link href={"/dashboard/" + i.id} className="absolute top-0 left-0 w-full h-full"></Link>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <p>{i.name}</p>
                    {i.locked == "true" && (
                      <Lock className="h-[14px] w-[14px] opacity-50 ml-2" />
                    )}
                  </div>
                  <p>{i.responses}</p>
                </div>
              </div>
            ))}
            <div className="flex space-x-1 items-center mt-6">
              <p className="text-xs text-center opacity-50 mt-1 mr-auto ml-2">
                Page {page} out of {Math.ceil(fakeForms.length / 5)}
              </p>
              <button
                disabled={page == 1}
                onClick={() => setPage(page - 1)}
                className="sora disabled:text-black/20 duration-300 rounded-full border px-7 scale-90  font-medium py-2 "
              >
                Previous
              </button>
              <button
                disabled={page == Math.ceil(fakeForms.length / 5)}
                onClick={() => setPage(page + 1)}
                className="sora disabled:text-black/20 duration-300 rounded-full border px-7 scale-90  font-medium py-2 "
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </main>
  );
}
