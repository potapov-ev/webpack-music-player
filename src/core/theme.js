const _gridsHeaderGradient = { 
  pop: "#a4c497",
  rap: "#FF8C00",
  era: "#b49bc8",
  dance: "#9bf0e1",
  rb: "#B81C79",
};

const _defaultColor = "#919496";

const createTheme = (
  gridsHeaderGradient = _gridsHeaderGradient,
  defaultColor = _defaultColor,
) => {
  const theme = {
    palette: {
      gridsHeaderGradient,
      defaultColor
    }
  }

  return theme;
};

export default createTheme;