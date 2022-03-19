import UniqueEntityId from '../domain/value-objects/unique-entity-id.vo'
export default abstract class Entity<Props> {
    public readonly uniqueEntityId: UniqueEntityId

    constructor(public readonly props: Props, id?: UniqueEntityId) {
        this.uniqueEntityId = id || new UniqueEntityId()
        this.props = props
    }

    get id(): string {
        return this.uniqueEntityId.toString()
    }

    toJSON(): Required<{ id: string } & Props> {
        return {
            id: this.uniqueEntityId.toString(),
            ...this.props,
        } as Required<{ id: string } & Props>
    }
}
