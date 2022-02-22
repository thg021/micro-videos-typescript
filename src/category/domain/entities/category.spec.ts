import Category from "./category";

describe("Category Test", () => {
  test("constructor ", () => {
    const category = new Category("move", "test", true);
    expect(category.name).toBe("move");
  });
});
