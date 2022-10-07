import { describe, expect, it } from "vitest";
import { LoginService } from "./login";

describe("Pass : login test", () => {
  it("email check", async () => {
    const response = await LoginService("abc@gmail.com");
    expect(response).toMatchObject({ status: 0 });
  });
});

describe("Fail : login test", () => {
  it("email check", async () => {
    const response = await LoginService("abc1@gmail.com");
    expect(response).toMatchObject({ status: 1 });
  });
});
