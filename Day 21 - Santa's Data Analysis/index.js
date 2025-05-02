import { toysRequested } from './data.js'

function findThemostPopularToy(data) {
  let maxRequests = 0;
  let mostPopularToy = "";
  const toyCount = new Map();

  for (const location of data) {
    for (const toy of location.toys) {
      const [name, count] = Object.entries(toy)[0];
      toyCount.set(name, (toyCount.get(name) || 0) + count);
      if (toyCount.get(name) > maxRequests) {
        maxRequests = toyCount.get(name);
        mostPopularToy = name;
      }
    }
  }
  return `The most popular toy is ${mostPopularToy} with ${maxRequests} requests`;
}
console.log(findThemostPopularToy(toysRequested));
