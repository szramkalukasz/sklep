import { NavLink } from "react-router-dom";
export function MainMenu() {
  const genders = [
    {
      categoryName: "Kobieta",
      path: "kobieta",
    },
    {
      categoryName: "Mężczyzna",
      path: "mężczyzna",
    },
    {
      categoryName: "Dziecko",
      path: "dziecko",
    },
  ];
  return (
    <ul>
      {genders.map((category) => {
        return (
          <li key={category.path}>
            <NavLink to={category.path}>{category.categoryName}</NavLink>
          </li>
        );
      })}
    </ul>
  );
}
