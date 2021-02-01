import { useState } from "react";

import db from "../db.json";
import Widget from "../src/components/Widget";
import Footer from "../src/components/Footer";
import QuizLogo from "../src/components/QuizLogo";
import GitHubCorner from "../src/components/github_corner";
import QuizBackground from "../src/components/QuizBackground";
import Input from "../src/components/Input";
import Button from "../src/components/Button";
import { useRouter } from "next/router";
import QuizContainer from "../src/components/QuizContainer";
import Link from "../src/components/Link";

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("");

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>🎃 Quiz de Halloween 🎃</Widget.Header>
          <Widget.Content>
            <form
              onSubmit={function (event) {
                event.preventDefault();
                router.push(`/quiz?name=${name}`);
                console.log("submitting via react");
              }}
            >
              <Input
                name="username"
                placeholder="Diga o seu nome"
                onChange={(event) => setName(event.target.value)}
              ></Input>
              <Button type="submit" disabled={name.length === 0}>
                Jogar {name}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1> Quizes da Galera</h1>
            <ul>
              {db.external.map((linkExterno) => {
                const [projectName, githubUser] = new URL(
                  linkExterno
                ).host.split(".");
                return (
                  <li key={linkExterno}>
                    <Widget.Topic
                      as={Link}
                      href={`quiz/${projectName}___${githubUser}`}
                    >
                      {projectName}/{githubUser}
                    </Widget.Topic>
                  </li>
                );
              })}
            </ul>
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
