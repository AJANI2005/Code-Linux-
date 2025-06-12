maze = [
    "  XXXXXXXX"
    "X     X  X"
    "XXX XXXX X"
    "XX      FX"
    "XXXXXXXXXX"
]

def findPath(maze):
    path = []
    goal = 'F'
    wall = 'X'
    def dfs(x,y):
        if x < 0 or y < 0 or x >= len(maze[1]) or y >= len(maze):
            return False
        if maze[y][x] == wall:
            return False

        if maze[y][x] == goal:
            path.append([x,y])
            return True

        # Choose a direction to go down
        path.append([x,y])


    return path