import { followThunk } from "./usersReducer"
import { followApi } from "../api/api.ts";
jest.mock('../api/api.ts')


followApi.followUser = () => Promise.resolve(1)

test("follow thunk test", async  () => {
    //state
    const thunk = followThunk(1)
    const dispatchMock = jest.fn()

    //action
    await thunk(dispatchMock)


    //result
    expect(dispatchMock).toBeCalledTimes(2)
})