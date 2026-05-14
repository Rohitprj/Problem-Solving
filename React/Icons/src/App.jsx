import React from "react";
import { IoMdSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import Profile from "./components/Profile";
import { FaArrowDown } from "react-icons/fa";
import Amin from "./components/Amin";

export default function App() {
  return (
    <>
      <div class="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
        <div class="flex animate-pulse space-x-4">
          <div class="size-10 rounded-full bg-gray-200"></div>
          <div class="flex-1 space-y-6 py-1">
            <div class="h-2 rounded bg-gray-200"></div>
            <div class="space-y-3">
              <div class="grid grid-cols-3 gap-4">
                <div class="col-span-2 h-2 rounded bg-gray-200"></div>
                <div class="col-span-1 h-2 rounded bg-gray-200"></div>
              </div>
              <div class="h-2 rounded bg-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
