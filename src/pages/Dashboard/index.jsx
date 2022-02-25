import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";

import { Header } from "../../components/Header/Header";

import { FiChevronRight } from "react-icons/fi";

import { Container, Title, Form, Error, Users } from "./styles";

function Dashboard() {
  const [newUser, setNewUser] = useState("");
  const [inputError, setInputError] = useState("");

  const [users, setUsers] = useState(() => {
    const storagedUsers = localStorage.getItem("@GitHubExplorer:users");

    if (storagedUsers) {
      return JSON.parse(storagedUsers);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("@GitHubExplorer:users", JSON.stringify(users));
  }, [users]);

  async function handleAddUser(event) {
    event.preventDefault();
    try {
      const response = await api.get(`users/${newUser}`);
      const user = response.data;

      setUsers([...users, user]);
      setNewUser("");
      setInputError("");
    } catch (error) {
      setInputError("Erro na busca por esse usuário");
    }
  }

  return (
    <>
      <Header />
      <Container>
        <Title>Explore usuários no Github</Title>
        <Form hasError={!!inputError} onSubmit={handleAddUser}>
          <input
            placeholder="Digite aqui"
            value={newUser}
            onChange={(e) => setNewUser(e.target.value)}
          />
          <button type="submit">Pesquisar</button>
        </Form>

        {inputError && <Error>{inputError}</Error>}
      </Container>

      <Users>
        {users.map((user) => {
          return (
            <Link key={user.login} to={`/user/${user.login}`}>
              <img src={user.avatar_url} alt={user.login} />
              <div>
                <strong>{user.login}</strong>
                {user.bio && <p>{user.bio}</p>}
              </div>
              <FiChevronRight size={20} />
            </Link>
          );
        })}
      </Users>
    </>
  );
}

export default Dashboard;
