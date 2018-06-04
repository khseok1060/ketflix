export default function getAllPrevElement(element) {
  const allPrevElArr = [];

  const getPrev = (element) => {
    if (element !== null) {
      allPrevElArr.push(element);
    }
    if (element.previousSibling !== null) {
      getPrev(element.previousSibling);
    }
  }

  getPrev(element.previousSibling);
  return allPrevElArr;
};

export default function getAllNextElement(element) {
  const allNextElArr = [];

  const getNext = (element) => {
    if (element !== null) {
      allNextElArr.push(element);
    }
    if (element.nextSibling !== null) {
      getNext(element.nextSibling);
    }
  }

  getNext(element.nextSibling);
  return allNextElArr;
};
