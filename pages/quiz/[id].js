/* eslint-disable react/prop-types */

import QuizScreen from "../../src/pages/QuizScreen";
import { ThemeProvider } from "styled-components";

export default function QuizDaGaleraPage({ dbExterno }) {
  console.log(dbExterno);

  return (
    <ThemeProvider theme={dbExterno.theme}>
      <QuizScreen
        externalQuestions={dbExterno.questions}
        externalBg={dbExterno.bg}
      />
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const [projectName, githubUser] = context.query.id.split("___");

  try {
    const dbExterno = await fetch(
      `https://${projectName}.${githubUser}.vercel.app/api/db`
    )
      .then((respostaDoServer) => {
        if (respostaDoServer.ok) {
          return respostaDoServer.json();
        }
        throw new Error("Falha em pegar os dados");
      })
      .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto);

    // console.log("dbExterno", dbExterno);
    // console.log('Infos que o Next da para nós', context.query.id);
    return {
      props: {
        dbExterno,
      },
    };
  } catch (err) {
    throw new Error(err);
  }
}
