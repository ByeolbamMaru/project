const nums = [1, 2, 3, 4, 5]


export const Map = () => {
    return <div>
        {nums.map((nums) => (
            <div key = {nums}>
                {nums}
            </div>

        ))}
    </div>
}