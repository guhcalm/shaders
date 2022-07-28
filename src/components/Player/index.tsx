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

*/
