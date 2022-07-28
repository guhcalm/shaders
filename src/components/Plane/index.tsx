import { useFrame } from "@react-three/fiber"
import { useState } from "react"
import { Color, PlaneBufferGeometry, ShaderMaterial } from "three"

const vertexShader = `
varying float vY;
void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.);
  vY = modelPosition.y;
  gl_Position = projectionMatrix * viewMatrix * modelPosition;
}
`

const fragmentShader = `
uniform vec3 u_colorA;
uniform vec3 u_colorB;
varying float vY;
void main() { 
  vec3 color = mix(u_colorA, u_colorB, vY * 2. + .5);
  gl_FragColor = vec4(color,1.0);
}
`
const uniforms = {
  u_colorA: { value: new Color("#FFE486") },
  u_colorB: { value: new Color("#FEB3D9") }
}
const material = new ShaderMaterial({ fragmentShader, vertexShader, uniforms })
const geometry = new PlaneBufferGeometry(1.5, 1.5, 32, 32)
geometry.rotateX(-Math.PI / 2)
geometry.computeVertexNormals()
;(() => {
  const { position } = geometry.attributes
  new Array(position.count).fill("").forEach((value, index) => {
    const x = position.getX(index)
    const y = position.getY(index)
    const z = position.getZ(index)
    position.setY(index, y + 0.1 * (Math.sin(x * 5) + Math.sin(z * 6)))
  })
})()

// colider

export default () => {
  const [entityState, setEntityState] = useState<Mesh>(null!)
  return <mesh ref={setEntityState} geometry={geometry} material={material} />
}
