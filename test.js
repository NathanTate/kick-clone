const distributionCategories = (categoriesList, root, categoryToAdd) => {
  Object.assign(categoriesList, categoryToAdd)

  const rootLikeSet = new Set(root);

  Object.keys(categoryToAdd).map(Number).forEach((categoryId) => {
    const newCategory = categoriesList[categoryId];
    if(newCategory.level === 0) {
      rootLikeSet.add(categoryId);
    } else {
      const children = new Set(categoriesList[newCategory.parent].children);
      children.add(categoryId);
      categoriesList[newCategory.parent].children = Array.from(children);
    }
  });
  return [categoriesList, rootLikeSet]
}

const categories = {
  1: {title: 'Foo', children: [2], level: 0},
  2: {title: 'Bar', children: [], level: 1, parent: 1}
}

const root = [1, 2, 2, 5, 6];

const newCategoriesDelta = {
  3: {title: 'Baz', children: [4], level: 2, parent: 2},
  4: {title: 'Bin', children: [], level: 3, parent: 3}
}

const [newCategories, newRoot] = distributionCategories(categories, root, newCategoriesDelta);

console.log(newCategories, newRoot)