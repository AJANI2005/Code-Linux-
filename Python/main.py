import pygame



WIDTH = 800
HEIGHT = 600
WIN = pygame.display.set_mode((WIDTH,HEIGHT))


def main():
    run = True

    while run:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                run = False
        
        WIN.fill("black")
        # Draw
        pygame.display.update()


if __name__ == "__main__":
    main()
