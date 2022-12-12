import "./styles.css";
import peopleJson from "./data/projects.json";
import pd from "./data/projectsDesc.json";
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
  console.log(projects);

  return (
    <>
      <IlHero></IlHero>
      <main className="=lg:mt-20 text-center text-black px-10">
        {projects.map((project) => {
          return <Card group={groupedProjects} proj={project} />;
        })}
      </main>
    </>
  );
}

const Card = (props) => {
  return (
    <div className="bg-white text-center flex flex-col md:flex-row align-center items-center rounded-xl m-4 py-5 md:py-0 pt-10 md:pt-0 max-w-screen-lg mx-auto shadow-2xl md:justify-between">
      <ul className="flex flex-wrap w-[48vw] md:px-20 lg:px-0 md:w-auto md:max-w-1/2 md:w-1/2 justify-evenly md:my-20 gap-3">
        {props.group[props.proj].map((person) => {
          return (
            <li
              className="flex flex-col items-center md:text-2xl cursor-poiner"
              key={person}
            >
              <img
                src={images[`${person.name}.png`].default}
                className="w-16 h-16 md:w-20 md:h-20 lg:w-36 lg:h-36 rounded-full bg-gray-600"
              />
              <h1 className="font-semibold">{person.name}</h1>
            </li>
          );
        })}
      </ul>
      {/* <h1 className="capitalize mb-5">{props.proj}</h1> */}
      <div
        style={{ height: "1px" }}
        className="w-2/3 mx-auto bg-black mt-5 md:mt-10 md:hidden md:hidden "
      ></div>
      <div className=" my-5 md:my-10 md:text-4xl text-2xl md:w-1/2  md:text-right md:border-l-2 md:px-10 md:border-black">
        <p className="text-sm opacity-1 p-0 h-fit ">Project</p>
        <b className="font-semibold p-0">
          <span className="capitalize">{props.proj}</span>
          <p className="font-base text-sm hidden md:block">{pd[props.proj]}</p>
          <p className="font-base text-sm md:hidden">Click to see more</p>
        </b>
      </div>
    </div>
  );
};
