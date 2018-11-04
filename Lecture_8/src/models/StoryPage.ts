export interface StoryPage {
  readonly number: number;
  readonly nextLeft: number;
  readonly nextRight: number;
}

export const storyPages: StoryPage[] = [
  {number: 1, nextLeft: 17, nextRight: 5},
  {number: 5, nextLeft: 12, nextRight: 1},
  {number: 12, nextLeft: 5, nextRight: 17},
  {number: 17, nextLeft: 1, nextRight: 12},
];

export const findPage = (pageNumber: number): StoryPage => {
  const storyPage = storyPages.find(page => page.number === pageNumber);

  if (!storyPage) {
    throw new Error(`Page ${pageNumber} does not exist.`);
  }

  return storyPage;
};

