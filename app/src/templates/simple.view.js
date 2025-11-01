export const indexView = (people = []) => {
  console.log('log:people', people);
  return `<ul>
            ${people?.map((person) => {
              return `<li>${person.name}</li>`
            }).join('')}
          </ul>`;
}