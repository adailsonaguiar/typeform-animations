import FirstAndSecond from "./components/FirstAndSecond/Index";
import GlobalStyles from "./styles/global";
import * as S from "./styles";

function App() {
  return (
    <>
      <GlobalStyles />
      <S.Main style={{ height: "568vh" }}>
        <S.Section style={{ height: "72.7%" }}>
          <FirstAndSecond />
        </S.Section>

        <S.Section style={{ height: "9.7%" }}>
          <S.Sticky className="third" />
        </S.Section>

        <S.Section style={{ height: "10.1%" }}>
          <S.Sticky className="fourth" />
        </S.Section>
      </S.Main>
    </>
  );
}

export default App;
