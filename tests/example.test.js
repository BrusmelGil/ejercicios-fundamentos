import { describe, expect, it } from 'vitest';
import { example } from "../src/js/example.js";

describe('Example test', () => {
    
    it('should return Hello World', () => {
        const result = example()
        expect(result).toBe("Hello World")
    });

});