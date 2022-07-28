/*
-- MOVE - VECTOR2
WASD

LOOK - VECTOR2
MOUSE DELTA

JUMP
SPACE

AIM - RIGHT CLICK


vector3 PlayerVelocity
bool groundedPlayer
float playerSpeed = 1.0f
float jumpHeight = 1.0f
float gravityValue = -9.8f

update() {
    if (groundedPlayer && playerVelocity.y < 0) {
        playerVelocity.y = 0
    }
    const move = new Vector2(1|-1, 0, 1|-1)
    player.move(move * playerSpeed * deltaTime())
    if (jump && groundedPlayer) {
        playerVelocity.y += Math.sqrt(jumpHeight * gravityValue)
    }
    player.velocity.y += gravity * timeElapsed
}

///////////////////////////////////////// PHYSISCS ENGINE
v = vi + a.t
x - xi = vi + 0.5 a.t²
F = m.a

Object {
    vector3 Position
    vector3 Velocity
    vector3 Force
    float Mass
}
vector3 Gravity  = vector3(0, -9.8, 0)
Object.Force = Mass * Gravity
Object.Velocity += Force / Mass * dt
Object.Position += Velocity * dt

///////////////////////////////////////// COLLISION DETECTION
CollisionPoints {
    vector3 Origin
    vector3 Target
    vector3 Normal // Target - Origin Normalized
    float Depth //  Target - Origin Length
    bool HasCollision
}
Transform {
    vector3 Position
    vector3 Scale
    quaternion Rotation
}

TestCollision

'https://www.gstatic.com/draco/v1/decoders/'
*/
