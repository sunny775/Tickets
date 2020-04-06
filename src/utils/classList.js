const classList = (...classes) => classes.filter(e => !!e).join(" ");
export default classList;