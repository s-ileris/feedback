"use client";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { ReactSortable } from "react-sortablejs";

const fieldTypes = [
  {
    title: "Input",
    element: "input",
  },
  {
    title: "Email",
    element: "input_em",
  },
];
export default function Page() {
  const [formElements, setFormElements] = useState<any>([]);

  return (
    <div>
      <div className="w-screen px-5 max-w-3xl m-auto mt-10">
        <Link
          href={"/dashboard"}
          className="mb-5 text-sm opacity-50 flex items-center ml-3 hover:-translate-x-1 duration-200"
        >
          <ChevronLeft className="h-[16px] -mt-0.5 w-[16px] opacity-50 mr-1" />
          Back
        </Link>
        <input
          placeholder="Form title"
          className="sora font-medium text-5xl focus:outline-0"
        ></input>
        <textarea
          placeholder="Describe what your form is for..."
          className="w-full h-16 focus:outline-0 focus:border-black/10 border-black/5 mt-3 border-b duration-200 max-w-md"
        ></textarea>
        <br />
        <ReactSortable
          list={formElements}
          setList={setFormElements}
          className="flex flex-col space-y-4 mt-4"
        >
          {formElements.map((element, key) => {
            return (
              <div className="border rounded-lg px-6 py-4 cursor-drag">
                {element.name !== "" && (
                  <p className="text-sm opacity-50 ml-2">{element.name}</p>
                )}
                <h4 className="sora text-xl ">{element.title}</h4>
              </div>
            );
          })}
        </ReactSortable>
        <Dialog>
          <DialogTrigger>
            <br />{" "}
            <div className="sora disabled:text-black/20 duration-300 rounded-full border px-7 scale-90  font-medium py-2 ">
              Add item
            </div>
          </DialogTrigger>
          <DialogContent>
            {fieldTypes.map((field, key) => (
              <DialogClose asChild>
                <div
                  key={key}
                  onClick={() => {
                    setFormElements([
                      ...formElements,
                      {
                        title: field.title,
                        type: field.element,
                        name: "test",
                        hint: "No hint",
                        requiered:false,
                      },
                    ]);
                  }}
                  className="text-left w-full py-3 px-2 border rounded-lg"
                >
                  {field.title}
                </div>
              </DialogClose>
            ))}
          </DialogContent>
        </Dialog>
      </div>{" "}
    </div>
  );
}
