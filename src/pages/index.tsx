import type { NextPage } from "next";
import Head from "next/head";
import Button from "./components/common/Button";
import Container from "./components/common/Container";
import useHexGame from "./hooks/useHexGame";

const Home: NextPage = () => {
  const { colorOptions, startGame } = useHexGame();

  return (
    <>
      <Head>
        <title>Hex-Game</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <div
            className="col-span-2 row-span-2 mb-2 h-48 rounded-lg border-2 border-white bg-white text-center leading-[12rem] text-black"
            style={{
              backgroundColor: colorOptions.find(({ correct }) => correct)
                ?.backgroundColor,
            }}
          ></div>
          {colorOptions.map((color) => (
            <Button
              key={`${color.backgroundColor}-${Math.random()}`}
              backgroundColorHex={color.backgroundColor}
              onClick={() => {
                const correctAnswer = colorOptions.find(
                  ({ correct }) => correct
                );

                if (correctAnswer?.backgroundColor === color.backgroundColor) {
                  if (confirm("Correct! Click Ok to try again.")) startGame();
                } else {
                  alert("Wrong!");
                }
              }}
            />
          ))}
        </div>
      </Container>
    </>
  );
};

export default Home;
