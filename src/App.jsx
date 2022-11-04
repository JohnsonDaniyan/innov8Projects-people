import "./styles.css";
import peopleJson from "./projects.json";
import img from "./images/Toyin.png";
import IlHero from "./components/ilHero/IlHero";
let people = peopleJson.people;

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("./images", false, /\.(png|jpe?g|svg)$/)
);

// console.log(people)
export default function App() {
  let projects = [];
  let groupedProjects = {};
  people.forEach((person) => {
    if (!projects.includes(person.project)) {
      projects.push(person.project);
      groupedProjects[person.project] = [
        people[people.findIndex((people) => people.project === person.project)],
      ];
    } else {
      groupedProjects[person.project].push(person);
    }
  });

  return (
    <>
      <IlHero></IlHero>
      <main className="mt-10 lg:mt-20 text-center text-black px-10">
        {projects.map((project) => {
          return <Card group={groupedProjects} proj={project} />;
        })}
      </main>
    </>
  );
}

const Card = (props) => {
  return (
    <div className="bg-gray-400 text-center flex flex-col align-center items-center rounded-xl border-4 md:border-8 border-white py-5 md:py-20 max-w-screen-lg mx-auto">
      <ul className="flex w-full justify-evenly ">
        {props.group[props.proj].map((person) => {
          return (
            <li
              className="flex flex-col items-center md:text-2xl "
              key={person}
            >
              <img
                src={images[`${person.name}.png`].default}
                className="w-16 h-16 md:w-20 md:h-20 lg:w-40 lg:h-40 rounded-full bg-gray-600"
              />
              <h1 className="font-semibold">{person.name}</h1>
            </li>
          );
        })}
      </ul>
      {/* <h1 className="capitalize mb-5">{props.proj}</h1> */}
      <div style={{ height: "1px" }} className="w-2/3 mx-auto bg-black"></div>
      <div className="capitalize my-5 md:my-10 md:text-4xl text-2xl ">
        <p className="text-base opacity-1 ">Project</p>
        <b className="font-semibold">{props.proj}</b>
      </div>
    </div>
  );
};
