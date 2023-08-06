import { ComponentChildren, JSX } from "preact";
import { PageProps } from "$fresh/server.ts";
import { Chose } from "../../components/Chose.tsx";
import catego from "../../static/data/catego.ts";
import { useSignal } from "@preact/signals";
import Chestionar from "../../islands/Chestionar.tsx";
export default function Greet(props: PageProps) {
  const [categoria, numarul = 0] = props.params.cat.split("/") as [
    string,
    number,
  ];

  const chosen = catego[categoria][numarul];
  const last = numarul * 1 + 1 == catego[categoria].length;
  const next = last ? catego[categoria].length - 1 : numarul * 1 + 1;
  const prev = numarul == 0 ? 0 : numarul * 1 - 1;

  const active = useSignal<string[]>([]);
  const checked = useSignal<boolean>(false);

  if (!categoria || !chosen) return <Chose />;
  return (
    <div class="flex sm:flex-row flex-col p-5 bg-orange-300 gap-5">
      <div class="basis-1/4">
        <a
          class=" p-5 rounded-md bg-slate-300 flex"
          href={`/`}
        >
          &lt; BACK
        </a>
      </div>

      <div class="basis-3/4">
        <h2 class="text-2xl text-yellow-200 font-bold">
          Categoria : {categoria}
        </h2>

        <Chestionar
          next={next}
          prev={prev}
          checked={checked}
          active={active}
          chosen={chosen}
          categoria={categoria}
        />
      </div>
    </div>
  );
}
