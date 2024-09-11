import * as S from "./style";

interface IContainer {
    children: React.ReactNode;
}

const Container = ({ children }: IContainer) => {
    return (
        <>
        <S.StyledContainer>
            {children}
        </S.StyledContainer>
        </>
    );
  };
  
  export default Container;
  