maze = [
    "     XXXXXXXXXXXXXXX",
    "X     X     X      X",
    "X XXX X XXX X XXXX X",
    "X X   X   X X    X X",
    "X X XXXXX X XXXX X X",
    "X X     X X X  X X X",
    "X XXXXX X X XX X X X",
    "X     X X X    X   X",
    "XXX X X X XXXXXXXXXX",
    "X   X X X          X",
    "X XXXXX XXXXXXXX X X",
    "X       X      X X X",
    "X XXXXX X XXXX X X X",
    "X     X X X    X X X",
    "XXX X X X XXXXXX X X",
    "X   X X X        X X",
    "X XXXXX XXXXXXXXXX X",
    "X     X            X",
    "X XXXXX XXXXXXXXXX  ",
    "XXXXXXXXXXXXXXXXXXXF"
]

end = 'F'
wall = 'X'
def solveMaze(maze,path, curr=[0,0]):
    # Base Cases
    if curr[0] < 0 or curr[0] >= len(maze[0]):
        return False
    if curr[1] < 0 or curr[1] >= len(maze):
        return False
    if maze[curr[1]][curr[0]] == wall:
        return False

    # Good Spot
    path.append(curr)
    # Explore
    for dir in [[0,-1],[1,0],[0,1],[-1,0]]:
        if not solveMaze(maze,path,[
            curr[0] + dir[0],
            curr[1] + dir[1]
        ]):
            return False

    return True
path = []
print(solveMaze(maze))