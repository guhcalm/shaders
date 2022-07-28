import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer
} from "react"

const initialState = {}

type StateInterface = typeof initialState
type Dispatcher = Dispatch<{ type; payload }>

export const actions = {
  default: payload => ({ type: "DEFAULT", payload })
}
const reducer = (state: StateInterface, { type, payload }) =>
  ({
    DEFAULT: { ...state, ...payload }
  }[type])

export const MyContext = createContext<[StateInterface, Dispatcher]>(null!)
export const MyContextProvider = ({ children }: { children: ReactNode }) => (
  <MyContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </MyContext.Provider>
)

interface CustomContextInterface {
  state: StateInterface
  dispatch: Dispatcher
}
const BridgeContext = createContext<CustomContextInterface>(null!)
const useBridgeContext = () => useContext(BridgeContext)
export const BridgeContextProvider = ({
  value,
  children
}: {
  value: CustomContextInterface
  children: ReactNode
}) => <BridgeContext.Provider value={value}>{children}</BridgeContext.Provider>
