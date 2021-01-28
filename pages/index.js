import { useState } from "react";

import db from "../db.json";
import Widget from "../src/components/Widget";
import Footer from "../src/components/footer";
import QuizLogo from "../src/components/QuizLogo";
import GitHubCorner from "../src/components/github_corner";
import QuizBackground from "../src/components/QuizBackground";
import Input from "../src/components/input";
import Button from "../src/components/button";
import { useRouter } from "next/router";
import QuizContainer from "../src/components/QuizContainer";

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
