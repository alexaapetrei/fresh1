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
  const verifica = () => {
    checked.value = true;
    if (active.value.toString() == chosen.v) {
      console.log("RIGHT ___ YAY");
    } else {
      console.log("WRONG nooooo ");
    }
  };
  return (
    <>
      <h2 class="text-2xl text-yellow-200 font-bold">
        Categoria : {categoria}
      </h2>

      {chosen.i > 0 && <img src={`/img/${categoria}/${chosen.i}.jpg`}></img>}

      <p class="text-2xl text-gray-500 font-bold">{chosen.q}</p>
      {Object.keys(chosen.ans).map((answer) => (
        <div
          onClick={() => {
            checked.value ? null : active.value = (
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

      <div class="flex flex-row gap-3 my-3 justify-end">
        {checked.value
          ? (
            <>
              <a
                class={`p-5 rounded-md  basis-1/2
                ${
                  active.value.toString() == chosen.v
                    ? "bg-green-300"
                    : "bg-red-400"
                }
                `}
                href={`/categoria/${categoria}/${next}`}
              >
                Next
              </a>
            </>
          )
          : (active.value.length > 0
            ? (
              <button
                class=" p-5 rounded-md bg-pink-500 basis-1/2"
                onClick={verifica}
              >
                Verifica Raspunsurile
              </button>
            )
            : <></>)}
      </div>
    </>
  );
}
