import * as S from "./style";
import Apple from "../../assets/Apple.png"
import Android from "../../assets/Android.png"

export const LeftSide = () => {
    return (
        <>
            <S.StyledLeftSide>
            <h1>Connecting all your banking needs</h1>
            <p>A smart mobile application you can control your business needs</p>
            <div>
                <button><img src={Apple} alt="Apple image"/> Download</button>
                <button><img src={Android} alt="Android image"/>Download</button>
            </div>
            </S.StyledLeftSide>
        </>
    )
}