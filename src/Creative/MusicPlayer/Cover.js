import styled from "styled-components"

const Wrap = styled.div`
background-color: lightgray;
display: flex;
`;

const Ablum = styled.div`
width: 50%;
height: 548px;
border: 2px solid none;
`;

const Title = styled.div`
display: flex;
justify-content: center;
h2 {font-size:24px; color:white}
`;

const Image = styled.div`
width: 400px;
height: 400px;
margin-left: 200px;
border: 1px solid black;
background: url(${props => props.$bgimage}) no-repeat center /Cover;
`;

const Lyrics = styled.div`
width: 50%;
height: 548px;
border-left: 6px solid gray;
h1 {text-align:center}
p {font-size:28px; font-weight:bold; color:white; text-align:center;}
`;

export const Cover = () => {
    return <Wrap>
        <Ablum>
            <Title>
                <h2>{"♪ 「Bling-Bang-Bang-Born」 Creepy Nuts "}</h2>
            </Title>
            <Image $bgimage="https://i.namu.wiki/i/1MYhXvz6scwXzBJnsa4OV9IGscdCcsMQ45c_DCRTXqRKRoM1xnBJFOEgEy1sB4EVz9alr0s3vivTOM8BAZSYX_JyRNjkgN5EIupekC1C1tm3kyYvqegea7EIny6yYCj2s9AK_bJkakpXkXhUZVzjBA.webp" />
        </Ablum>
        <Lyrics>
            <p>学歴も無い前科も無い余裕でBling-Bling</p>
            <p>この存在自体が文化財な脳味噌Bling-Bling</p>
            <p>高級車は買える免許は無い愛車Green Green</p>
            <h1>全国各地揺らす逸品</h1>
            <p>このベロがBling-Bling</p>
            <p>バレットなら満タン</p>
            <p> 関西訛り生身のコトダマ</p>
            <p>音楽、幸運、勝利の女神、今宵も三股Bang Bang</p>
        </Lyrics>
    </Wrap>
}