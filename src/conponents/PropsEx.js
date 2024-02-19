import { Props } from "./Props"

const menus = [
    {
        one:"월요일",
        two:"시리얼"
    }
]

export const PropsEx = () => {
    return <div>
        <Props menu={menus}></Props>
    </div>
}