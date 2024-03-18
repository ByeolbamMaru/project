import styled from "styled-components"

const Wrap = styled.div`
width: 100%;
height: 100vh;
background-color: silver;

`;
const Container = styled.div`
display: flex;
justify-content: center;
padding: 250px 10%;

`;
const Box = styled.div`
width: 250px;
height: 500px;
border: 2px solid black;
margin-left: 100px;
margin-right: 100px;
background: url(${props => props.$bgimage}) no-repeat center /Cover;
&:hover {opacity:0.5;}
transition: 1s;
`;

export const Layout = () => {
    return <Wrap>
        <Container>
            <Box $bgimage ="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMTVfMTk3%2FMDAxNjc4ODQxMzY2MjU1.NNQQs3rQOsQ8_acnPNanr7JtMET4dxQDO6tbXrmFmJog.r1nS7ry8NzAiQT7TvJYCsqsq3mLj3eck0xrvLMHRracg.JPEG.kwk0223%2F5c20717ea5f3b5de13caf83434076aae.jpg&type=ofullfill340_600_png" />
            <Box $bgimage ="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzEwMzFfMjcz%2FMDAxNjk4NzIwMDcxNjU5.DTaCm4swKJtvFboQzNa4esUiUtS4837cAvjIMgUCo1wg.rrtfYTbG7LlVoTMZuXigiCwlJeDChqPEAaR5I938ANsg.JPEG.ximetal%2FIMG_E3512.JPG&type=ofullfill340_600_png" />
            <Box $bgimage ="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fimage.utoimage.com%2Fpreview%2Fcp926631%2F2020%2F10%2F202010005530_500.jpg&type=a340" />
        </Container>
    </Wrap>
}