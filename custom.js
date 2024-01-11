console.log('person1 shows ticket');
console.log('person2 shows ticket');

const preMovie = async () => {

  const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });

  const getPopcorn = new Promise((resolve, reject) => {
    setTimeout(() => resolve('popcorn'), 3000);
  });

  const getCandy = new Promise((resolve, reject) => {
    setTimeout(() => resolve('candy'), 3000);
  });

  const getCoke = new Promise((resolve, reject) => {
    setTimeout(() => resolve('coke'), 3000);
  });

  let ticket = await person3PromiseToShowTicketWhenWifeArrives;

  let [popcorn, candy, coke] = await Promise.all([getPopcorn, getCandy, getCoke]);

  console.log(`got ${popcorn}, ${candy}, ${coke}`);

  // Assuming husband gets butter here
  const getButter = new Promise((resolve, reject) => {
    setTimeout(() => resolve('butter'), 3000);
  });

  let butter = await getButter;

  // Now, create a new promise for getting cold drinks
  const getColdDrinks = new Promise((resolve, reject) => {
    setTimeout(() => resolve('cold drinks'), 3000);
  });

  let coldDrinks = await getColdDrinks;

  console.log(`got ${butter} and ${coldDrinks}`);

  return ticket;

};

preMovie().then((t) => console.log(`person4 shows ${t}`));

console.log('person4 shows ticket');