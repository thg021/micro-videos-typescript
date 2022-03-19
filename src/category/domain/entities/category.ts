import UniqueEntityId from '../../../@seedwork/domain/value-objects/unique-entity-id.vo'
import Entity from '../../../@seedwork/entity/entity'
export type CategoryProperties = {
    name: string
    description?: string
    is_active?: boolean
    created_at?: Date
}

export class Category extends Entity<CategoryProperties> {
    constructor(
        public readonly props: CategoryProperties,
        id?: UniqueEntityId
    ) {
        super(props, id)
        this.props.created_at = this.props.created_at ?? new Date()
        this.description = this.props.description
        this.is_active = this.props.is_active ?? true
    }

    get name(): string {
        return this.props.name
    }

    get description(): string | null {
        return this.props.description
    }

    private set description(value: string) {
        this.props.description = value ?? null
    }

    get is_active(): boolean | undefined {
        return this.props.is_active
    }

    private set is_active(value: boolean) {
        this.props.is_active = value ?? true
    }

    get created_at(): Date | undefined {
        return this.props.created_at
    }
}
