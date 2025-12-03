let item = 0
player.onChat("wander", function () {
    agent.teleportToPlayer()
    agent.setItem(STONE, 50, 1)
    agent.setSlot(1)
    agent.setAssist(PLACE_ON_MOVE, true)
    agent.setAssist(DESTROY_OBSTACLES, true)
    for (let index = 0; index < 100; index++) {
        item = Math.randomRange(0, 10)
        if (item <= 1) {
            agent.turn(LEFT_TURN)
        } else if (item <= 3) {
            agent.turn(RIGHT_TURN)
        } else {
            agent.move(FORWARD, 1)
        }
    }
})
