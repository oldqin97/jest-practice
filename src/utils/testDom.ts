const renderHtml = () => {
  const oDiv = document.createElement('div');
  oDiv.innerHTML = `
    <h1>Hello World</h1>
`;
  document.body.appendChild(oDiv);
};

export default renderHtml;
