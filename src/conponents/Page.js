const page = [
{
    id: 0,
    name: "Naver",
    link: "https://www.naver.com/",
},
{
    id: 1,
    name: "Google",
    link: "https://www.google.co.kr/?hl=ko",
},
{
    id: 2,
    name: "Daum",
    link: "https://www.daum.net/",
},
]

export const Page = () => {
    return <div> 
        {page.map ((sibal) => (
            <div key={sibal.id}>
                <h2>사이트 : {sibal.name}</h2>
                <h2>주소 : {sibal.link}</h2>
                <a href= {sibal.link} target="_blank">{sibal.name}</a>
            </div>
        ))}
    </div>
}