import { Link } from "react-router-dom";

const links = [
  {
    id: 1,
    text: "Home",
    link: "/",
  },
  {
    id: 2,
    text: "Headphones",
    link: "/headphones",
  },
  {
    id: 3,
    text: "Speakers",
    link: "/speakers",
  },
  {
    id: 4,
    text: "Earphones",
    link: "/earphones",
  },
];
function Navlinks() {
  return (
    <div className="flex gap-8 items-center sm:flex-col lg:flex-row md:flex-row">
      {links.map((link) => {
        return (
          <Link
            className=" focus:text-orange-400  focus:bg-inherit hover:bg-neutral-content  "
            key={link.id}
            to={link.link}
          >
            {link.text}
          </Link>
        );
      })}
    </div>
  );
}
export default Navlinks;
