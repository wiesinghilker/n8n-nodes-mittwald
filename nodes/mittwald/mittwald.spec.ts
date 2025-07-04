import {mittwald} from "./mittwald.node";

test("smoke", () => {
    const node = new mittwald()
    expect(node.description.properties).toBeDefined()
})
