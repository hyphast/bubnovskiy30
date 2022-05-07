import { StateType } from '../rootReducer'

export const selectGlobalMessage = (state: StateType) => {
  return state.app.globalMessage
}
