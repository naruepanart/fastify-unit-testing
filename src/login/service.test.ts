import { describe, expect, it } from "vitest";
import { findAll, findOneByEmail, findOneByPassword } from "./service";

describe("Pass : login test", () => {
  it("email and password check", async () => {
    const response = await findAll("abc@gmail.com", "123456");
    expect(response).toMatchObject({ status: 0 });
  });
  it("email check", async () => {
    const response = await findOneByEmail("abc@gmail.com");
    expect(response).toMatchObject({ status: 0 });
  });
  it("password check", async () => {
    const response = await findOneByPassword("123456");
    expect(response).toMatchObject({ status: 0 });
  });
});

describe("Fail : login test", () => {
  it("email and password check", async () => {
    const response = await findAll("abc1@gmail.com", "12345678");
    expect(response).toMatchObject({ status: 1 });
  });
  it("email check", async () => {
    const response = await findOneByEmail("abc1@gmail.com");
    expect(response).toMatchObject({ status: 1 });
  });
  it("password check", async () => {
    const response = await findOneByPassword("12345678");
    expect(response).toMatchObject({ status: 1 });
  });
});
