import { useState } from "react"
import { Mesh, MeshPhysicalMaterial, PlaneBufferGeometry } from "three"

const material = new MeshPhysicalMaterial({
  roughness: 0,
  metalness: 0,
  clearcoat: 3,
  clearcoatRoughness: 1
})
material.onBeforeCompile = shader =>
  (shader.fragmentShader = shader.fragmentShader.replace(
    /vec4 diffuseColor.*;/,
    ` vec4 diffuseColor = vec4(vNormal*0.5 +.3, 1.);`
  ))

const geometry = new PlaneBufferGeometry(20, 20, 20, 20)
geometry.rotateX(-Math.PI / 2)
geometry.computeVertexNormals()
const { position } = geometry.attributes
new Array(position.count).fill("").forEach((value, index) => {
  const x = position.getX(index)
  const y = position.getY(index)
  const z = position.getZ(index)
  position.setY(index, y + (Math.sin(x / 2) + Math.sin(z / 2)))
})
position.needsUpdate = true
geometry.computeVertexNormals()

export default () => {
  const [entityState, setEntityState] = useState<Mesh>(null!)
  return <mesh ref={setEntityState} geometry={geometry} material={material} />
}
