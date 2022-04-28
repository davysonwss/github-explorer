import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import api from "../../services/api";

import { FiChevronRight } from "react-icons/fi";
import { Header } from "../../components/Header/Header";
import {
  UserInfo,
  UserInfoHeader,
  UserInfoNumbers,
  RepositoriesContainer,
  RepositoryItem,
} from "./styles";

import { Loading } from "../../components/Loading/index";

function User() {
  const params = useParams();

  const [user, setUser] = useState([]);
  const [getRepositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get(`users/${params.username}`).then((response) => {
      setUser(response.data);
    });
    api.get(`users/${params.username}/repos`).then((response) => {
      setRepositories([...response.data]);
    });
  }, [params.username]);

  const userNumbersInfos = getRepositories.reduce((prevVal, elem) => {
    return {
      stars:
        (prevVal.stars === undefined ? 0 : prevVal.stars) +
        elem.stargazers_count,
      forks:
        (prevVal.forks === undefined ? 0 : prevVal.forks) + elem.forks_count,
      issues:
        (prevVal.issues === undefined ? 0 : prevVal.issues) +
        elem.open_issues_count,
    };
  }, 0);

  return (
    <>
      <Header btnBack />

      {user.length === 0 ? (
        <Loading />
      ) : (
        <UserInfo key={user.login}>
          <UserInfoHeader>
            <img src={user.avatar_url} alt={`avatar ${user.login}`} />
            <div>
              <strong>{user.login}</strong>
              <p>{user.bio}</p>
            </div>
          </UserInfoHeader>
          <UserInfoNumbers>
            <li>
              <strong>{userNumbersInfos.stars}</strong>
              <span>Stars</span>
            </li>

            <li>
              <strong>{userNumbersInfos.forks}</strong>
              <span>Forks</span>
            </li>

            <li>
              <strong>{userNumbersInfos.issues}</strong>
              <span>Issues open</span>
            </li>
          </UserInfoNumbers>
        </UserInfo>
      )}

      {getRepositories.length === 0 ? (
        <Loading />
      ) : (
        <RepositoriesContainer>
          <h1>Repositórios</h1>
          {getRepositories.map((element) => {
            return (
              <RepositoryItem key={element.full_name}>
                <Link to={`${element.name}`} state={element}>
                  <div>
                    <strong>{element.name}</strong>
                    <p>{element?.description}</p>
                  </div>
                  <FiChevronRight size={20} />
                </Link>
              </RepositoryItem>
            );
          })}
        </RepositoriesContainer>
      )}
    </>
  );
}

export default User;
