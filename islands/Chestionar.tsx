import type { Signal } from "@preact/signals";
import type { Category } from "../static/data/catego.ts";
import Ans from "../components/Ans.tsx";

interface CounterProps {
  active: Signal<string[]>;
  checked: Signal<boolean>;
  chosen: Category;
  categoria: string;
  next: number;
  prev: number;
}

export default function Chestionar(
  { active, checked, chosen, categoria, next, prev }: CounterProps,
) {
  return (
    <>
      {chosen.i > 0 && <img src={`/img/${categoria}/${chosen.i}.jpg`}></img>}

      <p class="text-2xl text-gray-500 font-bold">Intrebare : {chosen.q}</p>
      {Object.keys(chosen.ans).map((answer) => (
        <div
          onClick={() => {
            active.value = (
              active.value.includes(answer)
                ? active.value.filter((a) => a !== answer)
                : [...active.value, answer]
            ).sort();
          }}
        >
          <Ans
            text={chosen.ans[answer]}
            val={answer}
            checked={checked.value}
            correct={chosen.v}
            active={active.value}
          />
        </div>
      ))}
      <button
        class={"bg-pink-400 p-3 rounded-lg"}
        onClick={() => {
          checked.value = true;
        }}
      >
        VERIFICATE
      </button>

      {checked.value &&
        (
          <div class="flex flex-row gap-3 my-3">
            <a
              class=" p-5 rounded-md bg-slate-300 basis-1/2 justify-self-end"
              href={`/categoria/${categoria}/${prev}`}
            >
              Previous
            </a>

            <a
              class=" p-5 rounded-md bg-slate-300 basis-1/2"
              href={`/categoria/${categoria}/${next}`}
            >
              Next
            </a>
          </div>
        )}
    </>
  );
}
