const users = [
    {
        id: 0,
        name: "수모",
        age: "25",
    },
    {
        id: 1,
        name: "다운",
        age: "25",
    },
    {
        id: 2,
        name: "준용",
        age: "25",
    },
]

export const Intro = () => {
    return <div>
        {users.map((sibal) => (
            <div key={sibal.id}>
                <h2>자기소개</h2>
                <h3>이름 : {sibal.name}</h3>
                <h3>나이 : {sibal.age}</h3>
            </div>
        ))}
    </div>
}