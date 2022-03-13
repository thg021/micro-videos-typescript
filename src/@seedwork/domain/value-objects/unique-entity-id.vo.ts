import { v4 as uuidV4, validate as uuidValidate, validate } from "uuid";
import InvalidUuidError from "../../errors/invalid-uuid.error";
import ValueObject from "./value-object";

export default class UniqueEntityId extends ValueObject<string> {
  constructor(readonly id?: string) {
    super(id || uuidV4());
    this.validate();
  }

  private validate() {
    const isValid = uuidValidate(this.id);
    if (!isValid) {
      throw new InvalidUuidError();
    }
  }
}
