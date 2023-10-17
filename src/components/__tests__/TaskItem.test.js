import { test, expect, expectTypeOf } from "vitest";
import { mount } from "@vue/test-utils";
import TaskItem from "@/components/Task/TaskItem.vue";

test("task-item component props", async () => {
	const props = {
		id: 1,
		title: "title",
		description: "description",
	};
	const wrapper = mount(TaskItem, { props });

	expectTypeOf(wrapper.props.id).toBeNumber();
	expect(wrapper.text()).toContain(props.title);
	expect(wrapper.text()).toContain(props.description);
});

test("task-item component props invalid", async () => {
	const props = {
		id: "1",
		title: "foo",
		description: "bar",
	};
	const wrapper = mount(TaskItem, { props });

	expectTypeOf(wrapper.props.id).not.toBeNumber();
	expect(wrapper.text()).not.toContain("title");
	expect(wrapper.text()).not.toContain("description");
});
