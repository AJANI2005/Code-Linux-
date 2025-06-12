maze = [
    "  XXXXXXXX"
    "X     X  X"
    "XXX XXXX X"
    "XX      FX"
    "XXXXXXXXXX"
]

def findPath(maze):
    path = []

    def dfs(x,y):
        if x < 0 or y < 0 or x >= len(maze[1]) or y >= len(maze):
            return False

    return path