maze = [
    "         X"
    "X     X  X"
    "XXX XXXX X"
    "XX      FX"
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
     
        if dfs(x + 1,y):
            return True
        elif dfs(x - 1,y):
            return True
        

        path.pop()
        return False


    dfs(start[0],start[1])
    return path

print(findPath(maze))