import axios from "axios";

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  const topics1 = document.createElement('div');
  const topics2 = document.createElement('div');
  const topics3 = document.createElement('div');
  const topics4 = document.createElement('div');

  topics1.classList.add('topics');
  topics2.classList.add('tab');
  topics3.classList.add('tab');
  topics4.classList.add('tab');

  topics2.textContent = topics[0];
  topics3.textContent = topics[1];
  topics4.textContent = topics[2];


  topics1.appendChild(topics2);
  topics1.appendChild(topics3);
  topics1.appendChild(topics4);

  return topics1;
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  const entryPoint = document.querySelector(selector);
  axios.get('http://localhost:5000/api/topics')
  .then(res => {
    console.log(res.data.topics)
    res.data.topics.forEach(index => {
    const dog = Tabs(topics)
    entryPoint.appendChild(dog)
    })
  })
  .catch(err => {
    console.error(err);
  })
}

export { Tabs, tabsAppender }
