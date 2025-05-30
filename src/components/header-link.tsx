import { useLocation } from "preact-iso";
import { processType } from "../support/process-type";
import fishSvg from "../../assets/menu/fish.svg";
import bugSvg from "../../assets/menu/bug.svg";
import seaCreatureSvg from "../../assets/menu/sea-creature.svg";
import monthlyCatchesSvg from "../../assets/menu/monthly-catches.svg";
import "./style.css";

const typeToSvg = {
  fish: fishSvg,
  bug: bugSvg,
  "sea-creature": seaCreatureSvg,
  "monthly-catches": monthlyCatchesSvg,
} as const;

function getHref(type, href) {
  return href ? href : `/tracker/${type}`;
}

function HeaderLink({
  type,
  clickHandler,
  href,
}: {
  type: string;
  clickHandler: () => void;
  href?: string;
}) {
  const { url } = useLocation();

  return (
    <a
      className={url == getHref(type, href) && "active"}
      href={getHref(type, href)}
      onClick={clickHandler}
    >
      <div class="content menu-link-wrapper">
        <div class="menu-text">{processType(type)}</div>
        <img
          class="icon"
          src={typeToSvg[type]}
          alt={type}
          width={70}
          height={55}
        />
      </div>
    </a>
  );
}

export default HeaderLink;
