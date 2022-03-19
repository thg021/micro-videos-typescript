import Entity from './entity'
import { validate as uuidValidate } from 'uuid'
import UniqueEntityId from '../domain/value-objects/unique-entity-id.vo'
class StubEntity extends Entity<{ prop1: string; prop2: number }> {}
const arrange = {
    prop1: 'prop1 value',
    prop2: 2,
}
describe('Entity Unit Tets', () => {
    it('should set props and id', () => {
        const entity = new StubEntity(arrange)
        expect(entity.props).toStrictEqual(arrange)
        expect(uuidValidate(entity.id)).toBeTruthy()
        expect(entity.id).not.toBeNull()
        expect(entity.uniqueEntityId).toBeInstanceOf(UniqueEntityId)
    })

    it('should accept a valid uuid', () => {
        const uniqueEntityId = new UniqueEntityId()
        const entity = new StubEntity(arrange, uniqueEntityId)
        expect(entity.uniqueEntityId).toBeInstanceOf(UniqueEntityId)
        expect(entity.id).toBe(uniqueEntityId.value)
    })

    it('should convert a entity to a Json', () => {
        const uniqueEntityId = new UniqueEntityId()
        const entity = new StubEntity(arrange, uniqueEntityId)
        expect(entity.uniqueEntityId).toBeInstanceOf(UniqueEntityId)
        expect(entity.toJSON()).toStrictEqual({
            id: uniqueEntityId.value,
            ...arrange,
        })
    })
})
