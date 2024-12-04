import { faker } from "@faker-js/faker";
import SchemaBuilder from "@pothos/core";
import SimpleObjectsPlugin from "@pothos/plugin-simple-objects";
import { createYoga } from "graphql-yoga";
import { createServer } from "node:http";

const builder = new SchemaBuilder({
  plugins: [SimpleObjectsPlugin],
});

const TaskStatus = builder.enumType("TaskStatus", {
  values: ["PROCESSING", "COMPLETED"] as const,
});

const Task = builder.simpleObject("Task", {
  fields: (t) => ({
    id: t.id({
      nullable: false,
    }),
    title: t.string({
      nullable: false,
    }),
    imageUrl: t.string({
      nullable: false,
    }),
    status: t.field({
      type: TaskStatus,
      nullable: false,
    }),
    resultImageUrl: t.string({
      nullable: true,
    }),
    eta: t.string(),
  }),
});

const generateTask = () => {
  const status = faker.helpers.arrayElement(["PROCESSING", "COMPLETED"]);

  const result =
    status === "PROCESSING"
      ? null
      : (faker.helpers.maybe(() => faker.image.url(), {
          probability: 0.8,
        }) ?? null);

  return {
    id: crypto.randomUUID(),
    title: faker.lorem.words({ min: 2, max: 8 }),
    imageUrl: faker.image.url(),
    status,
    resultImageUrl: result,
    eta: (status === "PROCESSING"
      ? (faker.helpers.maybe(() => faker.date.soon()) ?? faker.date.recent())
      : faker.date.past()
    ).toISOString(),
  };
};

const MOCK_TASKS = Array.from({ length: 10 }, generateTask);

builder.queryType({
  fields: (t) => ({
    tasks: t.field({
      type: [Task],
      resolve: () => MOCK_TASKS,
    }),
  }),
});

const yoga = createYoga({
  schema: builder.toSchema(),
});

const server = createServer(yoga);

server.listen(3000, () => {
  console.log("Visit http://localhost:3000/graphql");
});
