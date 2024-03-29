"use client";
import Players from "@/components/Players";
import Ticket from "@/components/Ticket";
import { useSelectTheme } from "@/context/SelectTheme";

export default function Home() {
  const { selectTheme, setSelectTheme } = useSelectTheme();
  return (
    <div className="flex min-h-screen flex-col items-center bg-light dark:bg-dark px-3 lg:px-16 dark:text-white text-black">
      <nav className="relative flex items-center justify-between w-full max-w-2xl pt-8  mx-auto text-gray-900 border-gray-200 dark:border-gray-700 ">
        <span className="text-gray-700 dark:text-gray-200 p-1 sm:px-3 sm:py-2 ">
          Current theme: {selectTheme ? "light" : "dark"}
        </span>
        <button
          className="dark:bg-white bg-gray-400 p-1 sm:px-3 sm:py-2 rounded-md border border-gray-400 dark:border-gray-700"
          onClick={() => setSelectTheme(!selectTheme)}
        >
          {selectTheme ? "Light" : "Dark"} Mode{" "}
          {selectTheme ? (
            <i className="bi bi-sun"></i>
          ) : (
            <i className="bi bi-moon"></i>
          )}
        </button>
      </nav>
      <Players />
      <Ticket />
    </div>
  );
}
