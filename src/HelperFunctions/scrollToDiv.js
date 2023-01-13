const scrollToDiv = (index) => {
  const buttonDiv = document.getElementById("buttonDiv");
  buttonDiv.scrollTo(
    0,
    buttonDiv.querySelector(`[data-buttonIndex = "${index}"]`).offsetTop - 50
  );
};

export default scrollToDiv;
