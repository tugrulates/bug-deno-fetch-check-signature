// bug.ts
import { stub } from "jsr:@std/testing@1.0.9/mock";
const stubbed = stub(globalThis, "fetch");
await stubbed.original.call(globalThis, "https://www.example.com", {});
