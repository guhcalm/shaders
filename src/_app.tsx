import { Canvas } from "@react-three/fiber"
import { Layout, Scene } from "./components"
import { BridgeContextProvider } from "./context"
import { useCustomContext } from "./hooks"

export const MyApp = () => (
  <Layout>
    <Canvas
      gl={{
        antialias: true,
        powerPreference: "high-performance",
        alpha: false
      }}
    >
      <BridgeContextProvider value={useCustomContext()}>
        <Scene />
      </BridgeContextProvider>
    </Canvas>
  </Layout>
)
