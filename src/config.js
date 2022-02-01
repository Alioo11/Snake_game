const CELL_DIMENTIONS = 25;

const setUpDimentions = () => {
  const width =
    Math.floor(window.innerWidth / CELL_DIMENTIONS) % 2 == 0
      ? Math.floor(window.innerWidth / CELL_DIMENTIONS) - 5
      : Math.floor(window.innerWidth / CELL_DIMENTIONS) -4;
  return width;
};

export const variables = {
  width: setUpDimentions(),
  height: 30,
  isAnimationActive: false,
};
