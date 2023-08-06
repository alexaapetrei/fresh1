import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Chose() {
  return (
    <section class="bg-lime-500 p-11 rounded-lg my-10">
      <h1 class="text-stone-100 font-bold mb-10 text-2xl text-center">
        Chose your starter
      </h1>
      <div class="grid sm:grid-cols-2 lg:grid-cols-6 gap-4">
        {["a", "b", "c", "d", "e", "r"].map((c) => (
          <a
            class="p-5 rounded-md bg-slate-50"
            href={`/categoria/${c}`}
          >
            {c}
          </a>
        ))}
      </div>
    </section>
  );
}
