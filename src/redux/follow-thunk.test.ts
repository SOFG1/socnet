import { followThunk } from "./usersReducer"


test("follow thunk test", async  () => {
    //state
    const thunk = followThunk(1)
    const dispatchMock = jest.fn()

    //action
    await thunk(dispatchMock)


    //result
    expect(dispatchMock).toBeCalledTimes(3)
})