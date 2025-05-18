import { Entity } from "../../entities/entity"
import { InMemoryRespository } from "../in-memory.repository"

type StubEntityProps = {
    name: string,
    price: number
}

class StubEntity extends Entity<StubEntityProps> { }

class StubInMemoryRepository extends InMemoryRespository<StubEntity> { }

describe('InMemoryRepository unit tests', () => {
    let sut = new StubInMemoryRepository

    beforeEach(() => {
        sut = new StubInMemoryRepository()
    })


    it('Should inserts a new entity', async () => {
        const entity = new StubEntity({ name: 'test name', price: 10 })

        await sut.insert(entity)

        expect(entity.toJSON()).toStrictEqual(sut.items[0].toJSON())
    })
})