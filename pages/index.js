/* eslint-disable no-restricted-globals */
import React, { useState }  from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

export const QuizContainer = styled.div`
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
  const [name, setName] = useState('');
  return (
    <>
      <QuizBackground backgroundImage={db.bg}>
        <Head>
          <title>Marvel Quiz - Modelo Base</title>
        </Head>
        <QuizContainer>
          <Widget>
            <Widget.Header>
              <h1>Marvel Quiz</h1>
            </Widget.Header>
            <Widget.Content>
              <form onSubmit= {function (event) {
                event.preventDefault();
                router.push(`/quiz?name=${name}`);
                console.log('Submissão');
              }}
              >
                <input
                  placeholder="Nome"
                  onChange={function (event) {
                    setName(event.target.value);
                  }}
                />
                <button type="submit" disabled={name.length === 0}>
                  JOGAR
                  { name }
                </button>
              </form>
            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Content>
              <h1>Quizzes dos Hérois</h1>
              <p>Lorem ipsum dolor sit amet...</p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
      </QuizBackground>
      <GitHubCorner projectUrl="https://github.com/JonasBarros1998/" />
    </>
  );
}
