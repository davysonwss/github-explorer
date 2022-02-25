import { useLocation } from "react-router-dom";

import { Loading } from "../../components/Loading/index";
import { FiChevronRight } from "react-icons/fi";

import { Header } from "../../components/Header/Header";

import {
  ReposInfo,
  ReposInfoHeader,
  ReposInfoNumbers,
  ReposLink,
} from "./styles";

function Repository() {
  const infoRepos = useLocation().state;

  console.log(infoRepos);
  return (
    <>
      <Header btnBack />
      {infoRepos === null ? (
        <Loading />
      ) : (
        <>
          <ReposInfo>
            <ReposInfoHeader>
              <div>
                <strong>{infoRepos.full_name}</strong>
                <p>{infoRepos.language}</p>
              </div>
            </ReposInfoHeader>
            <ReposInfoNumbers>
              <li>
                <strong>{infoRepos.stargazers_count}</strong>
                <span>Stars</span>
              </li>

              <li>
                <strong>{infoRepos.forks}</strong>
                <span>Forks</span>
              </li>

              <li>
                <strong>{infoRepos.open_issues_count}</strong>
                <span>Issues open</span>
              </li>
            </ReposInfoNumbers>
          </ReposInfo>

          <ReposLink href={infoRepos.html_url} target="_blank">
            <strong>Ver repositório</strong>

            <FiChevronRight size={24} />
          </ReposLink>
        </>
      )}
    </>
  );
}

export default Repository;
