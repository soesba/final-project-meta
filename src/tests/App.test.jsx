import { initializeTimes, updateTimes } from '../utils/Functions';

test("initializeTimes returns a non empty array", () => {
  const expectedInitialTimes = initializeTimes(new Date()).freeTimes
  expect(Array.isArray(expectedInitialTimes)).toBe(true);
  expect(expectedInitialTimes.length).toBeGreaterThan(0);
});

test("updateTimes returns the expected value", () => {
  const data = {
    dia: "2-10-2025",
    hora: "19:00",
    comensales: 2,
    ocasion: "Cumpleaños"
  }
  expect(updateTimes([], data).ok).toBe(true);
});