import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  // test('should generate linked list from values 1', () => {
  //   // Arrange
  //   const elements = [1, 2, 3];
  //   const expectedLinkedList = {
  //     value: 1,
  //     next: {
  //       value: 2,
  //       next: {
  //         value: 3,
  //         next: null,
  //       },
  //     },
  //   };

  //   // Act
  //   const generatedLinkedList = generateLinkedList(elements);

  //   // Assert
  //   expect(generatedLinkedList).toStrictEqual(expectedLinkedList);
  // });

  test('should generate linked list from values 2', () => {
    const elements = ['a', 'b', 'c'];
    const generatedLinkedList = generateLinkedList(elements);
    expect(generatedLinkedList).toMatchSnapshot();
  });
});
