import { useState } from "react";

import styled from "styled-components";
import db from "../db.json";
import Widget from "../src/components/widget";
import Footer from "../src/components/footer";
import QuizLogo from "../src/components/QuizLogo";
import GitHubCorner from "../src/components/github_corner";
import QuizBackground from "../src/components/QuizBackground";
import { useRouter } from "next/router";

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("");

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>Você conheçe o Halloween? 🎃</Widget.Header>
          <Widget.Content>
            <form
              onSubmit={function (event) {
                event.preventDefault();
                router.push(`/quiz?name=${name}`);
                console.log("submitting via react");
              }}
            >
              <input
                placeholder="Diga o seu nome"
                onChange={function (event) {
                  setName(event.target.value);
                }}
              ></input>
              <button type="submit" disabled={name.length === 0}>
                Jogar {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1> Quizes da Galera</h1>
            <p>Oi</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner
        projectUrl={"https://github.com/LucasKuhn/aluraquiz"}
      ></GitHubCorner>
    </QuizBackground>
  );
}
