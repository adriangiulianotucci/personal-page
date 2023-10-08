import { useLangContext } from "./_app";

export default function AboutMe() {
  const { lang } = useLangContext();

  const data = {
    ENG: {
      title: "About me",
      value:
        "Libero quas veritatis nulla distinctio fuga nihil temporibus et. Quia dicta sapiente qui porro molestiae nobis incidunt voluptatem. Et voluptas sunt nihil. At perferendis voluptatem dolores nulla. Adipisci dolore non. Praesentium ipsa magnam ut quia explicabo voluptates.",
    },
    ESP: {
      title: "Sobre mi",
      value:
        "Libero quas veritatis nulla distinctio fuga nihil temporibus et. Quia dicta sapiente qui porro molestiae nobis incidunt voluptatem. Et voluptas sunt nihil. At perferendis voluptatem dolores nulla. Adipisci dolore non. Praesentium ipsa magnam ut quia explicabo voluptates.",
    },
  };
  return (
    <div className="bg-white flex shadow rounded-xl overflow-hidden p-5 flex-col">
      <p className="text-xl mb-5">{data[lang].title}</p>
      <p className="mb-5">{data[lang].value}</p>
      <a
        className="text-indigo-500"
        href="mailto:adriangiulianotucci@gmail.com"
      >
        adriangiulianotucci@gmail.com
      </a>
    </div>
  );
}
