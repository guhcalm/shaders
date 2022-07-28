import { useThree } from "@react-three/fiber"
import { useEffect } from "react"
import {
  ACESFilmicToneMapping,
  Color,
  EquirectangularReflectionMapping,
  Fog,
  sRGBEncoding
} from "three"
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import Plane from "../Plane"

const useSetupScene = () => {
  const { scene, camera, gl, raycaster } = useThree()
  useEffect(() => {
    camera.near = 0
    camera.far = 50
    camera.position.set(0, 1.5, 1.5)
    raycaster.near = 0
    gl.outputEncoding = sRGBEncoding
    gl.toneMapping = ACESFilmicToneMapping
    gl.toneMappingExposure = 1
    gl.physicallyCorrectLights = true
    gl.shadowMap.enabled = true
    gl.setPixelRatio(Math.min(devicePixelRatio, 2) * 0.9)
    scene.background = new Color("rgb(240, 190, 180)")
    scene.fog = new Fog("rgb(240, 190, 180)", 0, 50)
    scene.environment = new RGBELoader().load(
      "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/empty_warehouse_01_1k.hdr",
      hdri => {
        hdri.mapping = EquirectangularReflectionMapping
      }
    )
    new OrbitControls(camera, gl.domElement).update()
  }, [])
}

export default () => {
  useSetupScene()
  return (
    <>
      <axesHelper />
      <Plane />
    </>
  )
}
