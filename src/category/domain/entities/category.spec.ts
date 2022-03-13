import { omit } from "lodash";
import { Category, CategoryProperties } from "./category";
import UniqueEntityId from "../../../@seedwork/domain/value-objects/unique-entity-id.vo";

describe("Category Unit Test", () => {
  test("constructor of category", () => {
    let category = new Category({ name: "Movie" });
    expect(category.name).toBe("Movie");

    let created_at = new Date();
    category = new Category({
      name: "Movie",
      description: "test",
      is_active: true,
      created_at,
    });
    expect(category.props).toStrictEqual({
      name: "Movie",
      description: "test",
      is_active: true,
      created_at,
    });

    let props = omit(category.props, "created_at");
    expect(props).toStrictEqual({
      name: "Movie",
      description: "test",
      is_active: true,
    });

    expect(category.props.created_at).toBeInstanceOf(Date);

    category = new Category({
      name: "Movie",
      description: "test",
      is_active: false,
      created_at,
    });

    expect(category.props).toStrictEqual({
      name: "Movie",
      description: "test",
      is_active: false,
      created_at,
    });

    category = new Category({
      name: "Movie",
      description: "test",
    });
    expect(category.props).toMatchObject({
      name: "Movie",
      description: "test",
    });

    category = new Category({
      name: "Movie",
      is_active: true,
    });
    expect(category.props).toMatchObject({
      name: "Movie",
      is_active: true,
    });

    created_at = new Date();
    category = new Category({
      name: "Movie",
      created_at,
    });
    expect(category.props).toMatchObject({
      name: "Movie",
      created_at,
    });
    //
  });

  test("id field", () => {
    type CategoryData = {
      props: CategoryProperties;
      id?: UniqueEntityId;
    };
    const data: CategoryData[] = [
      { props: { name: "Movie" } },
      { props: { name: "Movie" }, id: null },
      { props: { name: "Movie" }, id: undefined },
      { props: { name: "Movie" }, id: new UniqueEntityId() },
    ];

    data.forEach((i) => {
      let category = new Category(i.props, i.id);
      expect(category.id).not.toBeNull();
      expect(category.id).toBeInstanceOf(UniqueEntityId);
    });
  });

  test("getter of name props", () => {
    let category = new Category({ name: "Movie" });
    expect(category.name).toBe("Movie");
  });

  test("getter and setter description props", () => {
    let category = new Category({ name: "Movie", description: "test" });
    expect(category.description).toBe("test");

    category = new Category({ name: "test" });
    expect(category.description).toBeNull();

    category = new Category({ name: "test", description: undefined });
    expect(category.description).toBeNull();
  });

  test("getter and setter is_active props", () => {
    let category = new Category({ name: "Movie", is_active: true });
    expect(category.is_active).toBeTruthy();

    category = new Category({ name: "test" });
    expect(category.is_active).toBeTruthy();

    category = new Category({ name: "test", is_active: undefined });
    expect(category.is_active).toBeTruthy();

    category = new Category({ name: "test", is_active: false });
    expect(category.is_active).toBeFalsy();
  });

  test("getter of created_at props", () => {
    let created_at = new Date();
    let category = new Category({ name: "Movie", created_at });
    expect(category.created_at).toBe(created_at);
  });
});
