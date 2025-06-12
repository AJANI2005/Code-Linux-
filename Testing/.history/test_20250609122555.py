maze = [
    "         F"
    "X     X  X"
    "XXX XXXX X"
    "XX       X"
    "XXXXXXXXXX"
]

def findPath(maze,start=[0,0]):
    path = []
    goal = 'F'
    wall = 'X'
    def dfs(x,y):
        if x < 0 or y < 0 or x >= len(maze[0]) or y >= len(maze):
            return False
        if maze[y][x] == wall:
            return False

        if maze[y][x] == goal:
            path.append([x,y])
            return True

        # Choose a direction to go down
        path.append([x,y])

        # Attempt to find a solution
        for x in range(-1,2):
            for y in range(-1,2):
                if x == 0 and y == 0 or abs(x) == abs(y):
                    continue
            if dfs(x + dx,y + dy):
                return True

        path.pop()
    dfs(start[0],start[1])
    return path

print(findPath(maze))