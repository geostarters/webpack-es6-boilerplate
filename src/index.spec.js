import sayHello from "./components/hello";

test("should return Hello World!", () => {
	expect(sayHello()).toBe("Hello World!");
});
