import { renderHook, act } from '@testing-library/react-hooks';
import { useBooleanToggle, useData } from '../hooks';

import { getItems, addItem } from '../utils/indexdb';

jest.mock('../utils/indexdb', () => ({
    getItems: jest.fn(),
    addItem: jest.fn()
}))

describe('useBooleanToggle hook', () => {
    it('should handle toggle', () => {
        const {result} = renderHook(() => useBooleanToggle());

        expect(result.current.status).toBe(false);

        act(() => result.current.handleStatusChange());

        expect(result.current.status).toBe(true);
    })
});

describe('useData hook', () => {
    beforeEach(() => {
        getItems.mockImplementation(() => Promise.resolve([{value: 1}]));
    });

    it('should get empty transactions', () => {
        const {result} = renderHook(() => useData());

        expect(result.current.transactions).toEqual([]);
    });

    it('should set status to PENDING', () => {
        const {result} = renderHook(() => useData());

        expect(result.current.status).toBe('PENDING');
    });

    it('should set mocked transactions', async() => {
        const {result, waitForNextUpdate} = renderHook(() => useData());

        await waitForNextUpdate();

        expect(result.current.transactions).toEqual([{value: 1}]);
    });

    it('should set SUCCESS status', async() => {
        const {result, waitForNextUpdate} = renderHook(() => useData());

        await waitForNextUpdate();

        expect(result.current.status).toBe('SUCCESS');
    })
})