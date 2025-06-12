maze = [
    "XXXXXXXXXX"
]

end = 'F'
wall = 'X'
def solveMaze(maze,path,curr=[0,0]):
    # Base Cases
    if (curr[0] < 0 or curr[0] >= len(maze[0]) or
        curr[1] < 0 or curr[1] >= len(maze) or 
        maze[curr[1]][curr[0]] == wall):
        return False
    
    # Good Spot
    path.append(curr)

    if maze[curr[1]][curr[0]] == end:
        return True
    else:
        i = 0
        dir = [[1,0],[-1,0],[0,1],[0,-1]]
        found = False 
        while i < len(dir) and not found:
            found = solveMaze(maze,path,[curr[0]+dir[i][0],curr[1]+dir[i][1]])
            i += 1
        return found        
path = []
print(solveMaze(maze,path))
print(path)