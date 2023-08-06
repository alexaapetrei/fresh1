import { ComponentChildren, JSX } from "preact";
import { PageProps } from "$fresh/server.ts";
import { Chose } from "../../components/Chose.tsx";
import catego from "../../static/data/catego.ts";
export default function Greet(props: PageProps) {
  const [categoria, numarul = 0] = props.params.cat.split("/") as [
    string,
    number,
  ];

  //where fuckup ?

  const chosen = catego[categoria][numarul];

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
        <h2>Numarul : {numarul}</h2>

        <p class="text-2xl text-gray-500 font-bold">Intrebare : {chosen.q}</p>
        {Object.keys(chosen.ans).map((answer) => (
          <p>{`${answer} :: ${chosen.ans[answer]}`}</p>
        ))}
        {chosen.i > 0 &&
          <img src={`/img/${categoria}/${chosen.i}.jpg`}></img>}

        <div class="flex flex-row gap-3">
          {numarul > 0 &&
            (
              <a
                class=" p-5 rounded-md bg-slate-300 basis-1/2"
                href={`/categoria/${categoria}/${numarul - 1}`}
              >
                Previous
              </a>
            )}
          <a
            class=" p-5 rounded-md bg-slate-300 basis-1/2"
            href={`/categoria/${categoria}/${numarul * 1 + 1}`}
          >
            Next
          </a>
        </div>
      </div>
    </div>
  );
}
