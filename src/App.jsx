import "./styles.css";
import peopleJson from "./projects.json";
let people = peopleJson.people;
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
  console.log(groupedProjects);
  console.log();

  return (
    <main className="text-center text-white px-10">
      {projects.map((project) => {
        return <Card group={groupedProjects} proj={project} />;
      })}
    </main>

    // <div className="px-20 w-screen">
    //   <table className="w-full table-fixed">
    //     <thead>
    //       <tr className="h-0 opacity-0">
    //         <td>1</td>
    //         <td>2</td>
    //         <td>3</td>
    //         <td>4</td>
    //         <td>5</td>
    //         <td>6</td>
    //         <td>7</td>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       <tr className="h-fit text-white text-xl py-40">
    //         {projects.map((project) => {
    //           return (
    //             <td
    //               className="text-center bg-gray-700 border-8 border-gray-900"
    //               colSpan={groupedProjects[project].length}
    //             >
    //               <ul className="flex justify-around mt-10 mb-5">
    //                 {groupedProjects[project].map((person) => {
    //                   {
    //                     console.log(person.name);
    //                   }

    //                   return (
    //                     <li className="flex flex-col items-center">
    //                       <h1>{person.name}</h1>
    //                       <div className="w-10 h-10 md:w-20 md:h-20 lg:w-40 lg:h-40 rounded-full bg-gray-600"></div>
    //                     </li>
    //                   );
    //                 })}
    //               </ul>
    //               <h1 className="capitalize mb-5">{project}</h1>
    //             </td>
    //           );
    //         })}
    //         {console.log(projects)}
    //       </tr>
    //     </tbody>
    //   </table>
    // </div>
  );
}

const Card = (props) => {
  return (
    <div className=" text-center flex flex-col align-center items-center border border-white py-5 md:py-20 max-w-screen-lg mx-auto">
      <ul className="flex w-full justify-evenly">
        {props.group[props.proj].map((person) => {
          console.log(props);
          return (
            <li className="flex flex-col items-center md:text-2xl" key={person}>
              {console.log(person.name)}
              <h1>{person.name}</h1>
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-40 lg:h-40 rounded-full bg-gray-600"></div>
            </li>
          );
        })}
      </ul>
      {/* <h1 className="capitalize mb-5">{props.proj}</h1> */}
      <div className="capitalize my-5 md:my-10 md:text-4xl text-2xl ">
        <p className="text-base text-gray-300">Project</p>
        {props.proj}
      </div>
    </div>
  );
};
