import { followThunk } from "./usersReducer"
import { followApi } from "../api/api.ts";
jest.mock('../api/api.ts')

const followApiMock = followApi


followApiMock.followUser = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(0)
        }, 2000)
    })
}


test("follow thunk test", async  () => {
    //state
    const thunk = followThunk(1)
    const dispatchMock = jest.fn()

    //action
    await thunk(dispatchMock)


    //result
    expect(dispatchMock).toBeCalledTimes(3)
})