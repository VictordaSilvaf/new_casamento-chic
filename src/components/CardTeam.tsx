import type { FC } from "react";
import Subtitle from "./Subtitle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

interface CardTeamProps {
  imgSrc: string;
  title: string;
  job: string;
}

const CardTeam: FC<CardTeamProps> = ({ imgSrc, title, job }) => {
  return (
    <div className="col-span-2 bg-gray-100">
      <div className="h-[220px] ">
        <img
          className="w-full shadow-lg h-full object-cover"
          src={imgSrc}
          alt="img-team"
        />
      </div>

      <div className="mt-5">
        <Subtitle className="text-center" text={title} />
        <p className="text-xs text-center pt-2.5 leading-2.5 font-normal mb-5 uppercase text-app-typography-tertiary">
          {job}
        </p>
      </div>

      <div className="h-[1px] w-[50px] bg-app-primary mx-auto"></div>

      <div className="mt-5 pb-5 flex justify-center">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <a
                href="https://www.youtube.com/profile.php?id=1000881111111111111"
                className="aspect-square w-7 h-7 justify-center items-center flex group"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  color="var(--color-app-typography-tertiary)"
                  className="group-hover:opacity-75 duration-700 group-hover:scale-110"
                />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Twitter</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <a
                href="https://www.facebook.com/profile.php?id=1000881111111111111"
                className="aspect-square w-7 h-7 justify-center items-center flex group"
              >
                <FontAwesomeIcon
                  icon={faFacebookF}
                  color="var(--color-app-typography-tertiary)"
                  className="group-hover:opacity-75 duration-700 group-hover:scale-110"
                />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Facebook</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <a
                href="https://wa.me/1000881111111111111"
                className="aspect-square w-7 h-7 justify-center items-center flex group"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  color="var(--color-app-typography-tertiary)"
                  className="group-hover:opacity-75 duration-700 group-hover:scale-110"
                />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Github</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <a
                href="https://www.instagram.com/profile.php?id=1000881111111111111"
                className="aspect-square w-7 h-7 justify-center items-center flex group"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  color="var(--color-app-typography-tertiary)"
                  className="group-hover:opacity-75 duration-700 group-hover:scale-110"
                />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Instagram</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default CardTeam;
